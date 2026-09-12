import assert from "node:assert/strict";
import { it } from "node:test";
import { setImmediate as nextTurn } from "node:timers/promises";
import {
  admitChatRequest,
  ChatAdmissionController,
  defaultPressureSeverity,
} from "../../src/shared/middleware/chatBodyAdmission.ts";
import { reloadResourcePressureRuntime } from "../../open-sse/utils/resourcePressure.ts";
import type { ResourceSignals } from "../../open-sse/utils/resourcePressurePolicy.ts";

const MiB = 1024 ** 2;
const admissionController = new ChatAdmissionController(
  Number.MAX_SAFE_INTEGER,
  undefined,
  0,
  () => {},
  { checkPressureSeverity: defaultPressureSeverity }
);

function signals(observedAtMs: number, heapUsedMb: number): ResourceSignals {
  return {
    observedAtMs,
    v8: { heapUsedBytes: heapUsedMb * MiB, heapLimitBytes: 1_000 * MiB },
    process: {
      rssBytes: 200 * MiB,
      externalBytes: MiB,
      arrayBuffersBytes: MiB,
      availableBytes: null,
      constrainedBytes: null,
    },
    cgroup: { currentBytes: null, maxBytes: null, highBytes: null, fileBytes: null, events: null },
    psi: null,
  };
}

async function enter(): Promise<boolean> {
  const result = await admitChatRequest(
    new Request("http://localhost/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: '{"messages":[]}',
    }),
    { controller: admissionController }
  );
  if (result.admit) result.lease?.release();
  else {
    assert.equal(result.response.status, 503);
    assert.equal((await result.response.json()).error.code, "resource_pressure");
  }
  return result.admit;
}

it("the real admission entry alone drives normal to critical and back to normal", async (t) => {
  let now = 0;
  let sampledHeap = 100;
  let calls = 0;
  const runtime = reloadResourcePressureRuntime({
    nowMs: () => now,
    immediateHeapUsedMb: () => 100,
    heapThresholdMb: 800,
    staleAfterMs: 10,
    maxStaleMs: 100,
    thresholds: { sustainedSamplesCritical: 1, sustainedSamplesRecovery: 1 },
    sample: async () => {
      calls++;
      return signals(now, sampledHeap);
    },
  });
  t.after(() => {
    runtime.dispose();
    reloadResourcePressureRuntime();
  });

  assert.equal(await enter(), true);
  await runtime.whenRefreshSettled();
  assert.equal(calls, 1, "entry must schedule sampling without a downstream check or health probe");
  now = 11;
  sampledHeap = 950;
  assert.equal(await enter(), true);
  await runtime.whenRefreshSettled();
  assert.equal(await enter(), false);
  now = 22;
  sampledHeap = 100;
  assert.equal(await enter(), false, "fresh critical pressure remains protected while refreshing");
  await runtime.whenRefreshSettled();
  assert.equal(await enter(), true);
  assert.equal(calls, 3);
});

it("entry retries failed samples without a refresh storm and never exempts a high live heap", async (t) => {
  let now = 0;
  let heap = 100;
  let calls = 0;
  const runtime = reloadResourcePressureRuntime({
    nowMs: () => now,
    immediateHeapUsedMb: () => heap,
    heapThresholdMb: 800,
    staleAfterMs: 10,
    maxStaleMs: 100,
    retryAfterMs: 20,
    thresholds: { sustainedSamplesCritical: 1 },
    sample: async () => {
      if (++calls === 1) return signals(now, 950);
      throw new Error("synthetic unavailable sampler");
    },
  });
  t.after(() => {
    runtime.dispose();
    reloadResourcePressureRuntime();
  });
  assert.equal(await enter(), true);
  await runtime.whenRefreshSettled();
  assert.equal(await enter(), false);
  now = 11;
  assert.equal(await enter(), false);
  await runtime.whenRefreshSettled();
  assert.equal(calls, 2);
  now = 25;
  assert.equal(await enter(), false);
  await runtime.whenRefreshSettled();
  assert.equal(calls, 2, "failure backoff is honored at the entry");
  now = 101;
  assert.ok((await Promise.all(Array.from({ length: 50 }, () => enter()))).every(Boolean));
  await runtime.whenRefreshSettled();
  assert.equal(calls, 3);
  heap = 900;
  assert.equal(await enter(), false, "staleness cannot bypass the live heap threshold");
  heap = 100;
  assert.equal(await enter(), true, "old critical data cannot permanently lock a healthy heap");
});

it("entry survives a hung sampler, keeps one refresh, and discards its obsolete late result", async (t) => {
  let now = 0;
  let heap = 100;
  let calls = 0;
  let resolvePending!: (value: ResourceSignals) => void;
  const pending = new Promise<ResourceSignals>((resolve) => {
    resolvePending = resolve;
  });
  const runtime = reloadResourcePressureRuntime({
    nowMs: () => now,
    immediateHeapUsedMb: () => heap,
    heapThresholdMb: 800,
    staleAfterMs: 10,
    maxStaleMs: 100,
    retryAfterMs: 20,
    thresholds: { sustainedSamplesCritical: 1 },
    sample: async () => {
      calls++;
      if (calls === 1) return signals(now, 950);
      if (calls === 2) return pending;
      return signals(now, 100);
    },
  });
  t.after(() => {
    runtime.dispose();
    reloadResourcePressureRuntime();
  });
  await enter();
  await runtime.whenRefreshSettled();
  now = 11;
  assert.equal(await enter(), false);
  await nextTurn();
  assert.equal(calls, 2);
  now = 200;
  assert.ok((await Promise.all(Array.from({ length: 50 }, () => enter()))).every(Boolean));
  assert.equal(calls, 2, "a hung sampler must not accumulate replacement promises");
  heap = 900;
  assert.equal(await enter(), false);
  heap = 100;
  resolvePending(signals(11, 950));
  await runtime.whenRefreshSettled();
  assert.equal(runtime.getObservation().signals?.observedAtMs, 0, "late sample was not published");
  assert.equal(await enter(), true);
  now = 221;
  assert.equal(await enter(), true);
  await runtime.whenRefreshSettled();
  assert.equal(calls, 3);
  assert.equal(runtime.getObservation().state.severity, "normal");
});

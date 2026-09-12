import assert from "node:assert/strict";
import { after, it } from "node:test";
import {
  GET,
  __test_resetMonitoringHealthPayloadCache,
} from "../../src/app/api/monitoring/health/route.ts";
import { reloadResourcePressureRuntime } from "../../open-sse/utils/resourcePressure.ts";
import { resetDbInstance } from "../../src/lib/db/core.ts";

after(() => resetDbInstance());

function request(authenticated = true) {
  return new Request("http://localhost/api/monitoring/health", {
    headers: authenticated
      ? {
          "x-omniroute-auth-kind": "management_key",
          "x-omniroute-auth-label": "local-cli-token",
        }
      : {},
  });
}

it("projects current pressure onto the cached authenticated health payload", async (t) => {
  let now = 0;
  let heapUsedMb = 100;
  const MiB = 1024 ** 2;
  const runtime = reloadResourcePressureRuntime({
    nowMs: () => now,
    immediateHeapUsedMb: () => heapUsedMb,
    heapThresholdMb: 800,
    sample: async () => ({
      observedAtMs: now,
      v8: { heapUsedBytes: heapUsedMb * MiB, heapLimitBytes: 1_000 * MiB },
      process: {
        rssBytes: 200 * MiB,
        externalBytes: MiB,
        arrayBuffersBytes: MiB,
        availableBytes: null,
        constrainedBytes: null,
      },
      cgroup: {
        currentBytes: null,
        maxBytes: null,
        highBytes: null,
        fileBytes: null,
        events: null,
      },
      psi: null,
    }),
  });
  t.after(() => {
    runtime.dispose();
    reloadResourcePressureRuntime();
    __test_resetMonitoringHealthPayloadCache();
  });
  __test_resetMonitoringHealthPayloadCache();
  const first = await (await GET(request())).json();
  assert.equal(first.pressureReady, true);
  await runtime.whenRefreshSettled();
  now = 50;
  heapUsedMb = 900;
  const critical = await (await GET(request())).json();
  assert.equal(critical.timestamp, first.timestamp, "heavy aggregates remain cached");
  assert.equal(critical.pressureReady, false);
  assert.equal(critical.resourcePressure.severity, "critical");
  assert.equal(critical.resourcePressure.reason, "v8_heap_absolute");
  assert.equal(critical.resourcePressure.sampleAgeMs, 50);
  assert.equal(critical.chatAdmission.pressureSeverity, "critical");
  const anonymous = await GET(request(false));
  assert.equal(anonymous.status, 200);
  assert.deepEqual(Object.keys(await anonymous.json()).sort(), ["setupComplete", "status"]);
  now = 1_001;
  heapUsedMb = 100;
  const refreshing = await (await GET(request())).json();
  assert.equal(refreshing.resourcePressure.refreshing, true);
  await runtime.whenRefreshSettled();
  now = 1_002;
  const recovered = await (await GET(request())).json();
  assert.equal(recovered.pressureReady, true);
  assert.equal(recovered.resourcePressure.severity, "normal");
  assert.equal(recovered.resourcePressure.sampleAgeMs, 1);
  assert.equal(recovered.chatAdmission.pressureSeverity, "normal");
});

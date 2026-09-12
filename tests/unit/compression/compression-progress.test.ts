import assert from "node:assert/strict";
import { after, it } from "node:test";
import { createCompressionStepReporter } from "../../../open-sse/handlers/chatCore/compressionProgress.ts";
import { on } from "../../../src/lib/events/eventBus.ts";
import type { CompressionStepPayload } from "../../../src/lib/events/types.ts";
import { resetDbInstance } from "../../../src/lib/db/core.ts";

after(() => resetDbInstance());

it("keeps the compression.step payload and live bridge contract", (t) => {
  const events: CompressionStepPayload[] = [];
  const forwarded: Record<string, unknown>[] = [];
  t.mock.method(Date, "now", () => 42);
  t.mock.method(globalThis, "fetch", async (_url: unknown, options: RequestInit) => {
    forwarded.push(JSON.parse(String(options.body)));
    return new Response(null, { status: 204 });
  });
  t.after(on("compression.step", (payload) => events.push(payload)));
  const report = createCompressionStepReporter("trace-1", "stacked");
  report({
    stepIndex: 0,
    totalSteps: 2,
    engine: "rtk",
    state: "done",
    originalTokens: 100,
    compressedTokens: 50,
    savingsPercent: 50,
    durationMs: 7,
  });
  assert.deepEqual(events, [
    {
      requestId: "trace-1",
      comboId: null,
      mode: "stacked",
      stepIndex: 0,
      totalSteps: 2,
      engine: "rtk",
      state: "done",
      originalTokens: 100,
      compressedTokens: 50,
      savingsPercent: 50,
      durationMs: 7,
      timestamp: 42,
    },
  ]);
  assert.deepEqual(forwarded, [{ event: "compression.step", payload: events[0], timestamp: 42 }]);
});

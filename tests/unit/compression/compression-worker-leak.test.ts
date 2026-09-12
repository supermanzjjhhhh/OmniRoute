import assert from "node:assert/strict";
import { setImmediate as nextTurn } from "node:timers/promises";
import { after, it } from "node:test";
import { CompressionWorkerPool } from "../../../open-sse/services/compression/compressionWorkerPool.ts";
import { createCompressionStepReporter } from "../../../open-sse/handlers/chatCore/compressionProgress.ts";
import { replaceWorker } from "./workerHarness.ts";
import { resetDbInstance } from "../../../src/lib/db/core.ts";

after(() => resetDbInstance());

async function submitSyntheticJob(pool: CompressionWorkerPool, index: number) {
  const body = { messages: [{ role: "user", content: `${index}: ${"synthetic ".repeat(400)}` }] };
  const context = { payload: "context ".repeat(2_000) };
  const refs = [new WeakRef(body), new WeakRef(context)];
  await pool.run(body, "off", undefined, () => {
    void context.payload.length;
  });
  return refs;
}

async function collect(refs: WeakRef<object>[]): Promise<number> {
  for (let attempt = 0; attempt < 12; attempt++) {
    await nextTurn();
    global.gc!();
    await nextTurn();
    const retained = refs.filter((ref) => ref.deref() !== undefined).length;
    if (retained === 0) return 0;
  }
  return refs.filter((ref) => ref.deref() !== undefined).length;
}

for (const scenario of ["constructor failures", "successful native jobs"] as const) {
  it(
    `collects all request bodies and contexts after 400 and 1000 ${scenario} without closing the pool`,
    { skip: !global.gc },
    async (t) => {
      let constructorMock: ReturnType<typeof replaceWorker> | undefined;
      if (scenario === "constructor failures") {
        constructorMock = replaceWorker(t, () => {
          throw new Error("synthetic constructor failure");
        });
      }
      const pool = new CompressionWorkerPool({ size: 1 });
      t.after(() => pool.close());
      for (const calls of [400, 1_000]) {
        const refs: WeakRef<object>[] = [];
        for (let i = 0; i < calls; i++) refs.push(...(await submitSyntheticJob(pool, i)));
        // node:test keeps thrown Error objects (and their captured stack frames) in
        // mock call history. Drop that test-owned reference, without touching the pool.
        constructorMock?.resetCalls();
        const retained = await collect(refs);
        const summary = pool.getSummary();
        assert.equal(summary.closing, false);
        assert.equal(summary.activeJobs, 0);
        assert.equal(summary.queuedJobs, 0);
        assert.equal(summary.reservedBytes, 0);
        assert.equal(retained, 0);
        if (scenario === "successful native jobs") assert.equal(summary.workerCount, 1);
        t.diagnostic(JSON.stringify({ calls, refs: refs.length, retained, ...summary }));
      }
    }
  );
}

it(
  "a retained progress reporter does not keep its originating request context alive",
  { skip: !global.gc },
  async () => {
    function create() {
      const context = { traceId: "synthetic-trace", body: { content: "x".repeat(64_000) } };
      return {
        reporter: createCompressionStepReporter(context.traceId, "stacked"),
        refs: [new WeakRef(context), new WeakRef(context.body)],
      };
    }
    const { reporter, refs } = create();
    assert.equal(await collect(refs), 0);
    assert.equal(typeof reporter, "function");
  }
);

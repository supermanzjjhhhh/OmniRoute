import assert from "node:assert/strict";
import { it } from "node:test";
import {
  CompressionWorkerError,
  CompressionWorkerPool,
} from "../../../open-sse/services/compression/compressionWorkerPool.ts";
import { ControlledWorker, replaceWorker } from "./workerHarness.ts";

// #13145 replaced the old "resolve with the uncompressed body" fail-open with an
// explicit rejection: a worker fault is no longer a silent no-op, and the CALLER
// decides whether in-process compression is cheap (see workerFailureRecovery.ts,
// which reads `retryInProcess`). The pool exposes no getSummary()/maxReservedBytes /
// queueTimeoutMs and its run() takes no AbortSignal, so this suite asserts the
// current contract only: what run() settles with, and that the slot is released.
function isPoolError(error: unknown): error is CompressionWorkerError {
  return error instanceof CompressionWorkerError;
}

it("rejects with a retryable pool error when structured cloning fails", async (t) => {
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 100, idleMs: 10 });
  t.after(() => pool.close());
  const body = { messages: [], uncloneable: () => undefined };

  await assert.rejects(
    () => pool.run(body, "standard"),
    (error: unknown) => {
      assert.ok(isPoolError(error), "worker faults reject with CompressionWorkerError");
      assert.equal(error.retryInProcess, true, "a worker fault defaults to in-process retry");
      return true;
    }
  );

  // The slot must be free again: a second job still completes.
  await assert.rejects(() => pool.run(body, "standard"), isPoolError);
});

it("rejects with a non-retryable error and keeps the slot free on worker timeout", async (t) => {
  const worker = new ControlledWorker();
  replaceWorker(t, () => worker);
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 50, idleMs: 10 });
  t.after(() => pool.close());

  await assert.rejects(
    () => pool.run({ messages: [] }, "standard"),
    (error: unknown) => {
      assert.ok(isPoolError(error));
      assert.equal(error.retryInProcess, false, "a timeout must not ask for in-process retry");
      return true;
    }
  );
  assert.ok(worker.terminateCalls > 0, "the timed-out worker is terminated");
});

it("rejects when the worker cannot be constructed and keeps retrying without leaking slots", async (t) => {
  const worker = new ControlledWorker();
  let attempts = 0;
  replaceWorker(t, () => {
    if (++attempts === 1) throw new Error("synthetic constructor failure");
    return worker;
  });
  worker.replyImmediately = true;
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 500, idleMs: 10 });
  t.after(() => pool.close());

  await assert.rejects(() => pool.run({ messages: [] }, "standard"), isPoolError);

  // The next run re-spawns and completes: the failed construction left no stuck slot.
  const result = await pool.run({ messages: [] }, "standard");
  assert.equal(result.compressed, true);
  assert.equal(attempts, 2);
});

it("a pool that cannot spawn a worker fails open immediately instead of queueing forever", async (t) => {
  replaceWorker(t, () => {
    throw new Error("synthetic permanent spawn failure");
  });
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 500, idleMs: 10 });
  t.after(() => pool.close());

  // First run trips the broken-pool latch; every later run must reject fast
  // instead of pushing onto a queue that can never drain.
  await assert.rejects(() => pool.run({ messages: [] }, "standard"), isPoolError);
  await assert.rejects(() => pool.run({ messages: [] }, "standard"), isPoolError);
});

it("admits two running jobs by default and the rest wait for a free worker", async (t) => {
  const workers = [new ControlledWorker(), new ControlledWorker(), new ControlledWorker()];
  let index = 0;
  replaceWorker(t, () => workers[index++] ?? workers.at(-1)!);
  const pool = new CompressionWorkerPool({ size: 2, timeoutMs: 5_000, idleMs: 10 });
  t.after(() => pool.close());

  const settled: string[] = [];
  const jobs = [0, 1, 2].map((index) =>
    pool.run({ messages: [{ role: "user", content: `job-${index}` }] }, "standard").then(
      (result) => settled.push(`done-${index}:${result.compressed}`),
      () => settled.push(`fail-${index}`)
    )
  );

  await new Promise((resolve) => setTimeout(resolve, 50));
  assert.deepEqual(settled, [], "no job settles while every worker is held");

  // Releasing both running workers must drain the queue.
  workers[0].reply(workers[0].ids[0]);
  workers[1].reply(workers[1].ids[0]);
  await Promise.all(jobs);
  assert.equal(settled.length, 3);
});

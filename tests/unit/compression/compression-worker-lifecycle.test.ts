import assert from "node:assert/strict";
import { setTimeout as delay } from "node:timers/promises";
import { it } from "node:test";
import type { Worker } from "node:worker_threads";
import {
  CompressionWorkerError,
  CompressionWorkerPool,
} from "../../../open-sse/services/compression/compressionWorkerPool.ts";
import { ControlledWorker } from "./workerHarness.ts";

// The public contract rejects fast faults for the caller to retry in-process.
// Queue budgets, cancellation and getSummary were never implemented on the
// production baseline; don't manufacture those APIs just to satisfy old tests.
it("rejects a clone failure as retryable and remains usable for the next job", async (t) => {
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 5_000 });
  t.after(() => pool.close());
  await assert.rejects(
    pool.run({ messages: [], uncloneable: () => undefined }, "off"),
    (error: unknown) => error instanceof CompressionWorkerError && error.retryInProcess
  );
  const body = { messages: [{ role: "user", content: "native worker lifecycle" }] };
  const result = await pool.run(body, "off");
  assert.deepEqual(result.body, body);
});

it("bounds active workers and drains queued jobs in FIFO order", async (t) => {
  const workers: ControlledWorker[] = [];
  const pool = new CompressionWorkerPool({
    size: 2,
    workerFactory: () => {
      const worker = new ControlledWorker();
      workers.push(worker);
      return worker as unknown as Worker;
    },
  });
  t.after(() => pool.close());
  const jobs = Array.from({ length: 6 }, (_, index) => pool.run({ index }, "off"));
  assert.equal(workers.length, 2);
  assert.deepEqual(
    workers.map((worker) => worker.ids),
    [[1], [2]]
  );
  for (let round = 0; round < 3; round++) {
    for (const worker of workers) worker.reply();
  }
  await Promise.all(jobs);
  assert.deepEqual(
    workers.map((worker) => worker.ids),
    [
      [1, 3, 5],
      [2, 4, 6],
    ]
  );
  await pool.close();
  assert.deepEqual(
    workers.map((worker) => worker.terminateCalls),
    [1, 1]
  );
});

it("close settles running and queued jobs without losing their original bodies", async () => {
  const worker = new ControlledWorker();
  const pool = new CompressionWorkerPool({
    size: 1,
    workerFactory: () => worker as unknown as Worker,
  });
  const bodies = [{ request: "running" }, { request: "queued" }];
  const jobs = bodies.map((body) => pool.run(body, "off"));
  await pool.close();
  const results = await Promise.all(jobs);
  assert.deepEqual(
    results.map((result) => result.body),
    bodies
  );
  assert.ok(results.every((result) => result.compressed === false));
  assert.equal(worker.terminateCalls, 1);
});

it("idle eviction terminates a completed worker rather than abandoning its thread", async (t) => {
  const worker = new ControlledWorker();
  const pool = new CompressionWorkerPool({
    size: 1,
    idleMs: 10,
    workerFactory: () => worker as unknown as Worker,
  });
  t.after(() => pool.close());
  const job = pool.run({ messages: [] }, "off");
  worker.reply();
  await job;
  await delay(30);
  assert.equal(worker.terminateCalls, 1);
  assert.equal(worker.threadId, -1);
});

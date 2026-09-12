import assert from "node:assert/strict";
import { getEventListeners, once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { it } from "node:test";
import workerThreads, { type Worker } from "node:worker_threads";
import { CompressionWorkerPool } from "../../../open-sse/services/compression/compressionWorkerPool.ts";
import { ControlledWorker, replaceWorker } from "./workerHarness.ts";

function assertReleased(pool: CompressionWorkerPool): void {
  const summary = pool.getSummary();
  assert.equal(summary.activeJobs, 0);
  assert.equal(summary.queuedJobs, 0);
  assert.equal(summary.reservedBytes, 0);
  assert.equal(summary.oldestQueuedMs, 0);
}

it("releases a job when structured cloning fails and returns the original body", async (t) => {
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 100, idleMs: 10 });
  t.after(() => pool.close());
  const body = { messages: [], uncloneable: () => undefined };
  const result = await pool.run(body, "standard");
  assert.deepEqual(result, { body, compressed: false, stats: null });
  assert.equal(pool.getSummary().lastFallbackReason, "post_message");
  assertReleased(pool);
});

it("settles constructor failures and cools down for one second before retrying", async (t) => {
  const worker = new ControlledWorker();
  let attempts = 0;
  replaceWorker(t, () => {
    if (++attempts === 1) throw new Error("synthetic constructor failure");
    return worker;
  });
  let now = 10_000;
  t.mock.method(Date, "now", () => now);
  const pool = new CompressionWorkerPool();
  t.after(() => pool.close());
  for (let i = 0; i < 10; i++) {
    assert.equal((await pool.run({ messages: [] }, "standard")).compressed, false);
    assertReleased(pool);
  }
  assert.equal(attempts, 1);
  now += 1_001;
  const pending = pool.run({ messages: [] }, "standard");
  worker.reply();
  assert.equal((await pending).compressed, true);
  assert.equal(attempts, 2);
  assertReleased(pool);
});

it("admits two running jobs and at most four waiting jobs by default", async (t) => {
  const workers: ControlledWorker[] = [];
  replaceWorker(t, () => {
    const worker = new ControlledWorker();
    workers.push(worker);
    return worker;
  });
  const pool = new CompressionWorkerPool();
  t.after(() => pool.close());
  const jobs = Array.from({ length: 7 }, () => pool.run({ messages: [] }, "standard"));
  assert.equal(pool.getSummary().activeJobs, 2);
  assert.equal(pool.getSummary().queuedJobs, 4);
  assert.equal((await jobs[6]).compressed, false);
  assert.equal(pool.getSummary().lastFallbackReason, "queue_full");
  for (let i = 0; i < 3; i++) {
    workers[0].reply();
    workers[1].reply();
  }
  assert.equal((await Promise.all(jobs)).filter((result) => result.compressed).length, 6);
  assertReleased(pool);
});

it("reserves input and clone bytes across running and queued jobs", async (t) => {
  const worker = new ControlledWorker();
  replaceWorker(t, () => worker);
  const pool = new CompressionWorkerPool({ size: 1, maxReservedBytes: 4_096 });
  t.after(() => pool.close());
  const body = { content: "x".repeat(600) };
  const active = pool.run(body, "standard");
  const reserved = pool.getSummary().reservedBytes;
  assert.ok(reserved > 2_400 && reserved <= 4_096);
  assert.equal((await pool.run(body, "standard")).compressed, false);
  assert.equal(pool.getSummary().reservedBytes, reserved);
  assert.equal(pool.getSummary().lastFallbackReason, "input_budget");
  worker.reply();
  await active;
  const tooLarge = { content: "x".repeat(2_000) };
  assert.equal((await pool.run(tooLarge, "standard")).body, tooLarge);
  assertReleased(pool);
});

it("bounds estimation depth and work without serializing another copy", async (t) => {
  let attempts = 0;
  replaceWorker(t, () => {
    attempts++;
    return new ControlledWorker();
  });
  const pool = new CompressionWorkerPool();
  t.after(() => pool.close());
  let deep: Record<string, unknown> = {};
  for (let i = 0; i < 100; i++) deep = { child: deep };
  assert.equal((await pool.run(deep, "standard")).body, deep);
  const wide = { items: Array.from({ length: 50_001 }, () => 1) };
  assert.equal((await pool.run(wide, "standard")).body, wide);
  assert.equal(attempts, 0);
  assertReleased(pool);
});

it("expires waiting jobs while the running job is still busy", async (t) => {
  const worker = new ControlledWorker();
  replaceWorker(t, () => worker);
  const pool = new CompressionWorkerPool({ size: 1, queueTimeoutMs: 15 });
  t.after(() => pool.close());
  const active = pool.run({ content: "active" }, "standard");
  const waiting = pool.run({ content: "waiting" }, "standard");
  await delay(30);
  assert.equal((await waiting).compressed, false);
  assert.equal(pool.getSummary().queuedJobs, 0);
  assert.equal(pool.getSummary().activeJobs, 1);
  assert.equal(pool.getSummary().lastFallbackReason, "queue_timeout");
  worker.reply();
  await active;
  assertReleased(pool);
});

it("removes abort listeners before admission, while queued, and while running", async (t) => {
  const worker = new ControlledWorker();
  replaceWorker(t, () => worker);
  const pool = new CompressionWorkerPool({ size: 1 });
  t.after(() => pool.close());
  const cancelled = new AbortController();
  cancelled.abort();
  await pool.run({}, "standard", undefined, undefined, { signal: cancelled.signal });
  assert.equal(pool.getSummary().workerCount, 0);
  const activeSignal = new AbortController();
  const active = pool.run({}, "standard", undefined, undefined, { signal: activeSignal.signal });
  const queuedSignal = new AbortController();
  const queued = pool.run({}, "standard", undefined, undefined, { signal: queuedSignal.signal });
  queuedSignal.abort();
  assert.equal((await queued).compressed, false);
  assert.equal(getEventListeners(queuedSignal.signal, "abort").length, 0);
  activeSignal.abort();
  assert.equal((await active).compressed, false);
  worker.reply();
  assert.equal(getEventListeners(activeSignal.signal, "abort").length, 0);
  assert.equal(pool.getSummary().cancelledJobs, 3);
  assertReleased(pool);
});

it("ignores late results and errors after a timeout and settles exactly once", async (t) => {
  const worker = new ControlledWorker();
  worker.autoExit = false;
  replaceWorker(t, () => worker);
  const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 10 });
  t.after(() => pool.close());
  const active = pool.run({}, "standard");
  await delay(25);
  assert.equal((await active).compressed, false);
  worker.reply();
  worker.emit("error", new Error("late worker error"));
  worker.exit(1);
  assert.equal(pool.getSummary().fallbackJobs, 1);
  assert.equal(pool.getSummary().timeoutJobs, 1);
  assert.equal(worker.terminateCalls, 1);
  assertReleased(pool);
});

it("replaces failed threads after exit and does not deliver stale steps to the next job", async (t) => {
  const workers: ControlledWorker[] = [];
  replaceWorker(t, () => {
    const worker = new ControlledWorker();
    workers.push(worker);
    return worker;
  });
  const pool = new CompressionWorkerPool({ size: 1 });
  t.after(() => pool.close());
  const failed = pool.run({}, "standard");
  let steps = 0;
  const next = pool.run({}, "standard", undefined, () => {
    steps++;
  });
  workers[0].emit("error", new Error("synthetic thread failure"));
  assert.equal((await failed).compressed, false);
  await delay(0);
  assert.equal(workers.length, 2);
  workers[1].emit("message", { id: workers[0].ids[0], type: "step", step: {} });
  assert.equal(steps, 0);
  workers[1].reply();
  assert.equal((await next).compressed, true);
  assertReleased(pool);
});

it("handles worker exit and protocol errors without negative accounting", async (t) => {
  const workers: ControlledWorker[] = [];
  replaceWorker(t, () => {
    const worker = new ControlledWorker();
    workers.push(worker);
    return worker;
  });
  const pool = new CompressionWorkerPool({ size: 1 });
  t.after(() => pool.close());
  const first = pool.run({}, "standard");
  workers[0].exit(1);
  assert.equal((await first).compressed, false);
  const second = pool.run({}, "standard");
  workers[1].emit("message", { id: workers[1].ids[0], type: "error", error: "synthetic" });
  workers[1].reply();
  assert.equal((await second).compressed, false);
  assert.equal(pool.getSummary().fallbackJobs, 2);
  assertReleased(pool);
});

it("closes repeatedly, waits for real exit, and never dispatches or recreates after close", async (t) => {
  const worker = new ControlledWorker();
  worker.autoExit = false;
  let attempts = 0;
  replaceWorker(t, () => {
    attempts++;
    return worker;
  });
  const pool = new CompressionWorkerPool({ size: 1 });
  const first = pool.run({}, "standard");
  const second = pool.run({}, "standard");
  let closed = false;
  const closing = pool.close().then(() => {
    closed = true;
  });
  const again = pool.close();
  await Promise.all([first, second]);
  assert.equal(closed, false);
  assert.equal(pool.getSummary().workerCount, 1);
  await pool.run({}, "standard");
  worker.reply();
  worker.exit(1);
  await Promise.all([closing, again]);
  await pool.run({}, "standard");
  assert.equal(worker.terminateCalls, 1);
  assert.equal(attempts, 1);
  assert.equal(worker.listenerCount("message"), 0);
  assert.equal(worker.listenerCount("error"), 0);
  assert.equal(pool.getSummary().workerCount, 0);
  assertReleased(pool);
});

it("actually terminates an idle native thread and waits for native exit on close", async (t) => {
  const NativeWorker = workerThreads.Worker;
  const workers: Worker[] = [];
  replaceWorker(t, (filename, options) => {
    const worker = new NativeWorker(filename, options);
    workers.push(worker);
    return worker;
  });
  const pool = new CompressionWorkerPool({ size: 1, idleMs: 10 });
  t.after(() => pool.close());
  const result = await pool.run({ messages: [] }, "off");
  assert.equal(result.compressed, false);
  assert.equal(pool.getSummary().completedJobs, 1);
  const idleExit = once(workers[0], "exit");
  await idleExit;
  assert.equal(workers[0].threadId, -1);
  assert.equal(pool.getSummary().workerCount, 0);
  await pool.run({ messages: [] }, "off");
  await pool.close();
  assert.equal(workers[1].threadId, -1);
  assertReleased(pool);
});

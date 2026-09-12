import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import type { Worker } from "node:worker_threads";
import type { CompressionResult } from "./types.ts";
import type { StackedCompressionStep } from "./strategySelector.ts";
import type {
  CompressionWorkerJob,
  CompressionWorkerMessage,
  CompressionWorkerOptions,
} from "./compressionWorkerProtocol.ts";

function positiveInteger(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

/** Relative path (from an install root) to the compression worker. */
const WORKER_JS_REL = join("open-sse", "services", "compression", "compressionWorker.js");
const WORKER_TS_REL = join("open-sse", "services", "compression", "compressionWorker.ts");

const MAX_WALK_UP = 8;

/**
 * Walk up from each anchor directory (≤ MAX_WALK_UP levels) and return the first
 * ancestor that actually contains `relPath`, or null. Pure + exported for tests.
 *
 * This deliberately avoids `import.meta.url`/`__dirname` (both dead in the standalone
 * bundle) — see the LLMLingua worker comments in llmlingua/worker.ts.
 */
export function firstAncestorWith(anchors: string[], relPath: string): string | null {
  for (const anchor of anchors) {
    if (!anchor) continue;
    let dir = resolve(anchor);
    for (let i = 0; i <= MAX_WALK_UP; i++) {
      if (existsSync(join(dir, relPath))) return dir;
      const parent = dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
  }
  return null;
}

/**
 * Runtime install-root anchors that SURVIVE the standalone bundle:
 *  - `process.cwd()` — `dist/server.js` runs `process.chdir(__dirname)` → the dist root.
 *  - `dirname(process.argv[1])` — the entry script (server.js / bin), walked up.
 */
function runtimeAnchors(): string[] {
  const anchors = [process.cwd()];
  const argv1 = process.argv[1];
  if (typeof argv1 === "string" && argv1) anchors.push(dirname(argv1));
  return anchors;
}

/**
 * Resolve the worker entry file across dev and prod WITHOUT `import.meta.url`.
 *
 * Prod: the worker is likely a .js file under the install root
 * Dev: the same relative path resolves to the `.ts` source under the project
 * root (cwd) and runs via the default Node.js loader.
 *
 * First existing candidate wins. Exported for tests.
 */
export function resolveWorkerFile(): string {
  const anchors = runtimeAnchors();

  // Prod first: the .js under the install root.
  const jsRoot = firstAncestorWith(anchors, WORKER_JS_REL);
  if (jsRoot) return join(jsRoot, WORKER_JS_REL);

  // Dev: the .ts source.
  const tsRoot = firstAncestorWith(anchors, WORKER_TS_REL);
  if (tsRoot) return join(tsRoot, WORKER_TS_REL);

  // Nothing found — return a cwd-relative .js path; the spawn will fail-open.
  return join(process.cwd(), WORKER_JS_REL);
}

function unchanged(body: Record<string, unknown>): CompressionResult {
  return { body, compressed: false, stats: null };
}
export interface CompressionExecutionControl {
  signal?: AbortSignal;
}

type FallbackReason =
  | "closed"
  | "aborted"
  | "worker_unavailable"
  | "queue_full"
  | "input_budget"
  | "queue_timeout"
  | "execution_timeout"
  | "post_message"
  | "worker_error"
  | "worker_exit"
  | "job_error";

interface PendingJob {
  id: number;
  mode: CompressionWorkerJob["mode"];
  state: "queued" | "running" | "settled";
  body: Record<string, unknown> | null;
  options?: CompressionWorkerOptions;
  resolve: ((result: CompressionResult) => void) | null;
  onEngineStep?: (step: StackedCompressionStep) => void;
  signal?: AbortSignal;
  onAbort?: () => void;
  timer: NodeJS.Timeout | null;
  slot: PoolWorker | null;
  queuedAt: number;
  reservedBytes: number;
}
interface PoolWorker {
  worker: Worker;
  job: PendingJob | null;
  idle: NodeJS.Timeout | null;
  retiring: boolean;
  exited: Promise<void>;
}

/** Bounded accounting, including a worker clone; deliberately not a heap-size promise. */
function estimateReservation(body: unknown, options: unknown, limit: number): number {
  let bytes = 0;
  let entries = 0;
  const seen = new Set<object>();
  function visit(value: unknown, depth: number): boolean {
    if (++entries > 50_000 || depth > 64) return false;
    if (typeof value === "string") bytes += 16 + value.length * 2;
    else if (value === null || value === undefined || typeof value !== "object") bytes += 8;
    else {
      if (seen.has(value)) return true;
      seen.add(value);
      bytes += 64;
      if (Array.isArray(value)) {
        for (const entry of value) {
          bytes += 8;
          if (!visit(entry, depth + 1)) return false;
        }
      } else {
        for (const key in value) {
          if (!Object.hasOwn(value, key)) continue;
          bytes += 16 + key.length * 2;
          if (!visit((value as Record<string, unknown>)[key], depth + 1)) return false;
        }
      }
    }
    return bytes * 2 <= limit;
  }
  try {
    return visit(body, 0) && visit(options, 0) ? bytes * 2 : Infinity;
  } catch {
    return Infinity;
  }
}

export class CompressionWorkerPool {
  private readonly queue: PendingJob[] = [];
  private readonly workers = new Set<PoolWorker>();
  private nextId = 1;
  private readonly size: number;
  private readonly timeoutMs: number;
  private readonly idleMs: number;
  private readonly maxQueueSize: number;
  private readonly maxReservedBytes: number;
  private readonly queueTimeoutMs: number;
  private reservedBytes = 0;
  private unavailableUntil = 0;
  private dispatching = false;
  private closing = false;
  private closePromise: Promise<void> | null = null;
  private completedJobs = 0;
  private fallbackJobs = 0;
  private timeoutJobs = 0;
  private cancelledJobs = 0;
  private lastFallbackReason: FallbackReason | null = null;

  constructor({
    size = positiveInteger(process.env.OMNI_COMPRESSION_WORKERS, 2),
    timeoutMs = positiveInteger(process.env.OMNI_COMPRESSION_WORKER_TIMEOUT_MS, 120_000),
    idleMs = positiveInteger(process.env.OMNI_COMPRESSION_WORKER_IDLE_MS, 60_000),
    maxQueueSize = 4,
    maxReservedBytes = 32 * 1024 * 1024,
    queueTimeoutMs = 250,
  }: {
    size?: number;
    timeoutMs?: number;
    idleMs?: number;
    maxQueueSize?: number;
    maxReservedBytes?: number;
    queueTimeoutMs?: number;
  } = {}) {
    this.size = Math.max(1, Math.floor(size));
    this.timeoutMs = Math.max(1, Math.floor(timeoutMs));
    this.idleMs = Math.max(1, Math.floor(idleMs));
    this.maxQueueSize = Math.max(0, Math.floor(maxQueueSize));
    this.maxReservedBytes = Math.max(1, Math.floor(maxReservedBytes));
    this.queueTimeoutMs = Math.max(1, Math.floor(queueTimeoutMs));
  }

  run(
    body: Record<string, unknown>,
    mode: CompressionWorkerJob["mode"],
    options?: CompressionWorkerOptions,
    onEngineStep?: (step: StackedCompressionStep) => void,
    control?: CompressionExecutionControl
  ): Promise<CompressionResult> {
    let reason: FallbackReason | null = null;
    if (this.closing) reason = "closed";
    else if (control?.signal?.aborted) reason = "aborted";
    else if (Date.now() < this.unavailableUntil) reason = "worker_unavailable";
    else if (
      this.queue.length >= this.maxQueueSize &&
      this.workers.size >= this.size &&
      ![...this.workers].some((slot) => !slot.retiring && !slot.job)
    ) {
      reason = "queue_full";
    }
    if (reason) return this.fallback(body, reason);
    const reservedBytes = estimateReservation(
      body,
      options,
      this.maxReservedBytes - this.reservedBytes
    );
    if (!Number.isFinite(reservedBytes)) return this.fallback(body, "input_budget");

    return new Promise((resolve) => {
      const job: PendingJob = {
        id: this.nextId++,
        body,
        mode,
        options,
        state: "queued",
        resolve,
        onEngineStep,
        signal: control?.signal,
        timer: null,
        slot: null,
        queuedAt: Date.now(),
        reservedBytes,
      };
      this.reservedBytes += reservedBytes;
      this.queue.push(job);
      job.timer = setTimeout(() => this.settle(job, "queue_timeout"), this.queueTimeoutMs);
      job.timer.unref();
      if (job.signal) {
        job.onAbort = () => {
          if (job.slot) this.retire(job.slot, "aborted");
          else this.settle(job, "aborted");
        };
        job.signal.addEventListener("abort", job.onAbort, { once: true });
        if (job.signal.aborted) job.onAbort();
      }
      this.dispatch();
    });
  }

  getSummary() {
    return {
      workerCount: this.workers.size,
      activeJobs: [...this.workers].filter((slot) => slot.job !== null).length,
      queuedJobs: this.queue.length,
      reservedBytes: this.reservedBytes,
      oldestQueuedMs: this.queue.length ? Math.max(0, Date.now() - this.queue[0].queuedAt) : 0,
      completedJobs: this.completedJobs,
      fallbackJobs: this.fallbackJobs,
      timeoutJobs: this.timeoutJobs,
      cancelledJobs: this.cancelledJobs,
      lastFallbackReason: this.lastFallbackReason,
      closing: this.closing,
    };
  }

  close(): Promise<void> {
    if (this.closePromise) return this.closePromise;
    this.closing = true;
    for (const job of [...this.queue]) this.settle(job, "closed");
    this.closePromise = Promise.all(
      [...this.workers].map((slot) => this.retire(slot, "closed"))
    ).then(() => undefined);
    return this.closePromise;
  }

  private spawn(): PoolWorker {
    // A static Worker import/constructor is rewritten into a build-time URL map by
    // Turbopack. The native constructor must receive our runtime absolute path.
    const workerThreads = process.getBuiltinModule("node:worker_threads");
    const worker = new workerThreads.Worker(resolveWorkerFile());
    let resolveExit: () => void;
    const slot: PoolWorker = {
      worker,
      job: null,
      idle: null,
      retiring: false,
      exited: new Promise<void>((resolve) => {
        resolveExit = resolve;
      }),
    };
    this.workers.add(slot);
    worker.on("message", (message: CompressionWorkerMessage) => this.handleMessage(slot, message));
    worker.on("error", () => this.retire(slot, "worker_error"));
    worker.once("exit", () => {
      slot.retiring = true;
      if (slot.idle) clearTimeout(slot.idle);
      slot.idle = null;
      if (slot.job) this.settle(slot.job, "worker_exit");
      this.workers.delete(slot);
      worker.removeAllListeners();
      resolveExit();
      this.dispatch();
    });
    return slot;
  }

  private dispatch(): void {
    if (this.closing || this.dispatching) return;
    this.dispatching = true;
    try {
      while (this.queue.length && !this.closing) {
        if (Date.now() < this.unavailableUntil) {
          for (const job of [...this.queue]) this.settle(job, "worker_unavailable");
          return;
        }
        let slot = [...this.workers].find((candidate) => !candidate.retiring && !candidate.job);
        if (!slot && this.workers.size < this.size) {
          try {
            slot = this.spawn();
          } catch {
            this.unavailableUntil = Date.now() + 1_000;
            for (const job of [...this.queue]) this.settle(job, "worker_unavailable");
            return;
          }
        }
        if (!slot) return;
        const job = this.queue[0];
        if (Date.now() - job.queuedAt >= this.queueTimeoutMs) {
          this.settle(job, "queue_timeout");
          continue;
        }
        this.queue.shift();
        if (slot.idle) clearTimeout(slot.idle);
        slot.idle = null;
        if (job.timer) clearTimeout(job.timer);
        job.state = "running";
        job.slot = slot;
        slot.job = job;
        job.timer = setTimeout(() => this.retire(slot, "execution_timeout"), this.timeoutMs);
        job.timer.unref();
        try {
          slot.worker.postMessage({
            id: job.id,
            body: job.body!,
            mode: job.mode,
            options: job.options,
          } satisfies CompressionWorkerJob);
        } catch {
          this.retire(slot, "post_message");
        }
      }
    } finally {
      this.dispatching = false;
    }
  }

  private handleMessage(slot: PoolWorker, message: CompressionWorkerMessage): void {
    const job = slot.job;
    if (slot.retiring || !job || job.id !== message.id) return;
    if (message.type === "step") {
      try {
        job.onEngineStep?.(message.step);
      } catch {
        // Telemetry is best-effort.
      }
      return;
    }
    this.settle(
      job,
      message.type === "result" ? null : "job_error",
      message.type === "result" ? message.result : undefined
    );
  }

  private recordFallback(reason: FallbackReason): void {
    this.fallbackJobs++;
    this.lastFallbackReason = reason;
    if (reason === "aborted") this.cancelledJobs++;
    if (reason === "queue_timeout" || reason === "execution_timeout") this.timeoutJobs++;
  }

  private fallback(
    body: Record<string, unknown>,
    reason: FallbackReason
  ): Promise<CompressionResult> {
    this.recordFallback(reason);
    return Promise.resolve(unchanged(body));
  }

  private settle(job: PendingJob, reason: FallbackReason | null, result?: CompressionResult): void {
    if (job.state === "settled") return;
    const outcome = result ?? unchanged(job.body!);
    const resolveJob = job.resolve;
    const slot = job.slot;
    job.state = "settled";
    if (job.timer) clearTimeout(job.timer);
    if (job.onAbort) job.signal?.removeEventListener("abort", job.onAbort);
    const index = this.queue.indexOf(job);
    if (index !== -1) this.queue.splice(index, 1);
    if (slot?.job === job) slot.job = null;
    this.reservedBytes -= job.reservedBytes;
    if (reason) this.recordFallback(reason);
    else this.completedJobs++;

    // Even a late event/timer holding this small record must not retain a request.
    job.body = null;
    job.options = undefined;
    job.onEngineStep = undefined;
    job.resolve = null;
    job.signal = undefined;
    job.onAbort = undefined;
    job.timer = null;
    job.slot = null;
    job.reservedBytes = 0;
    resolveJob!(outcome);

    if (slot && !slot.retiring && !this.closing) {
      slot.idle = setTimeout(() => this.retire(slot, "closed"), this.idleMs);
      slot.idle.unref();
    }
    this.dispatch();
  }

  private retire(slot: PoolWorker, reason: FallbackReason): Promise<void> {
    if (slot.retiring) return slot.exited;
    slot.retiring = true;
    if (slot.idle) clearTimeout(slot.idle);
    slot.idle = null;
    if (slot.job) this.settle(slot.job, reason);
    // Keep the slot counted until 'exit', including during close and idle retirement.
    void slot.worker.terminate();
    return slot.exited;
  }
}

let pool: CompressionWorkerPool | null = null;
export function runCompressionInWorker(
  body: Record<string, unknown>,
  mode: CompressionWorkerJob["mode"],
  options?: CompressionWorkerOptions,
  onEngineStep?: (step: StackedCompressionStep) => void,
  control?: CompressionExecutionControl
): Promise<CompressionResult> {
  pool ??= new CompressionWorkerPool();
  return pool.run(body, mode, options, onEngineStep, control);
}
export async function closeCompressionWorkerPoolForTests(): Promise<void> {
  const active = pool;
  pool = null;
  await active?.close();
}

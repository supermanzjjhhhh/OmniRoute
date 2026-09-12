import { EventEmitter } from "node:events";
import { syncBuiltinESMExports } from "node:module";
import type { TestContext } from "node:test";
import workerThreads, { type Worker } from "node:worker_threads";
import type { CompressionWorkerJob } from "../../../open-sse/services/compression/compressionWorkerProtocol.ts";

/** The platform boundary, with manual scheduling for error/exit/message races. */
export class ControlledWorker extends EventEmitter {
  ids: number[] = [];
  threadId = 1;
  terminateCalls = 0;
  autoExit = true;
  failSend = false;
  replyImmediately = false;

  postMessage(job: CompressionWorkerJob): void {
    if (this.failSend) throw new Error("synthetic postMessage failure");
    this.ids.push(job.id);
    if (this.replyImmediately) queueMicrotask(() => this.reply(job.id));
  }

  reply(id = this.ids.at(-1)): void {
    this.emit("message", {
      id,
      type: "result",
      result: { body: { messages: [] }, compressed: true, stats: null },
    });
  }

  exit(code = 0): void {
    this.threadId = -1;
    this.emit("exit", code);
  }

  terminate(): Promise<number> {
    this.terminateCalls++;
    const result = new Promise<number>((resolve) => this.once("exit", resolve));
    if (this.autoExit) queueMicrotask(() => this.exit(1));
    return result;
  }
}

export function replaceWorker(
  t: TestContext,
  create: (...args: ConstructorParameters<typeof Worker>) => ControlledWorker | Worker
) {
  const replacement = t.mock.method(workerThreads, "Worker", function (
    ...args: ConstructorParameters<typeof Worker>
  ) {
    return create(...args);
  } as unknown as typeof Worker);
  syncBuiltinESMExports();
  t.after(() => {
    t.mock.restoreAll();
    syncBuiltinESMExports();
  });
  return replacement.mock;
}

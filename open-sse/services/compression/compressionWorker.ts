import { parentPort } from "node:worker_threads";
import { applyCompression, type StackedCompressionStep } from "./strategySelector.ts";
import type {
  CompressionWorkerJob,
  CompressionWorkerMessage,
} from "./compressionWorkerProtocol.ts";

if (!parentPort) throw new Error("compressionWorker must run in a worker thread");
parentPort.on("message", (job: CompressionWorkerJob) => {
  try {
    const onEngineStep = (step: StackedCompressionStep) =>
      parentPort.postMessage({
        id: job.id,
        type: "step",
        step,
      } satisfies CompressionWorkerMessage);
    // Use the same entrypoint as synchronous callers, including Responses body
    // adaptation, preservation guards and the stacked hard-budget post-pass.
    const result = applyCompression(job.body, job.mode, { ...job.options, onEngineStep });
    parentPort.postMessage({
      id: job.id,
      type: "result",
      result,
    } satisfies CompressionWorkerMessage);
  } catch (error) {
    parentPort.postMessage({
      id: job.id,
      type: "error",
      error: error instanceof Error ? error.message : String(error),
    } satisfies CompressionWorkerMessage);
  }
});

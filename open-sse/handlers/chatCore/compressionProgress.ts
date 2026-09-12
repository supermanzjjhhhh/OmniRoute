import { emit } from "@/lib/events/eventBus";
import type { CompressionMode } from "../../services/compression/types.ts";
import type { StackedCompressionStep } from "../../services/compression/strategySelector.ts";
import { forwardDashboardEventToLiveWs } from "./telemetryHelpers.ts";

/** Keep worker progress callbacks outside the request handler's lexical scope. */
export function createCompressionStepReporter(traceId: string, mode: CompressionMode) {
  return (step: StackedCompressionStep): void => {
    try {
      const payload = {
        requestId: traceId,
        comboId: null,
        mode,
        stepIndex: step.stepIndex,
        totalSteps: step.totalSteps,
        engine: step.engine,
        state: step.state,
        originalTokens: step.originalTokens,
        compressedTokens: step.compressedTokens,
        savingsPercent: step.savingsPercent,
        ...(step.durationMs !== undefined ? { durationMs: step.durationMs } : {}),
        timestamp: Date.now(),
      };
      emit("compression.step", payload);
      void forwardDashboardEventToLiveWs("compression.step", payload);
    } catch {
      // Best-effort telemetry must never fail the request.
    }
  };
}

import test from "node:test";
import assert from "node:assert/strict";
import {
  estimateCalibratedFinalInputTokens,
  estimateFinalInputTokenBreakdown,
  getCompactionMessageTarget,
} from "../../open-sse/handlers/chatCore/contextEstimation.ts";
import { compressContext, estimateTokens } from "../../open-sse/services/contextManager.ts";
import { adaptBodyForCompression } from "../../open-sse/services/compression/bodyAdapter.ts";
import {
  recordEstimatorCalibrationFromUsage,
  resetEstimatorCalibrationForTests,
} from "../../open-sse/services/estimatorCalibration.ts";

const provider = "budget-regression";
const model = "opaque-model";

test.afterEach(() => resetEstimatorCalibrationForTests());

function request() {
  return {
    input: Array.from({ length: 40 }, (_, i) => ({
      type: "message",
      role: i % 2 === 0 ? "user" : "assistant",
      content: [
        {
          type: i % 2 === 0 ? "input_text" : "output_text",
          text: `Turn ${i}: ${"history ".repeat(500)}`,
        },
      ],
    })),
    tools: [
      {
        type: "function",
        name: "lookup",
        description: "tool ".repeat(1500),
        parameters: { type: "object" },
      },
    ],
    system: "system ".repeat(1000),
    instructions: "instructions ".repeat(1000),
  };
}

test("message target accounts for auxiliary fields and calibration through real Responses compression", () => {
  const body = request();
  for (let i = 0; i < 3; i++) {
    recordEstimatorCalibrationFromUsage({
      provider,
      model,
      toolsPresent: true,
      estimatedTokens: 1000,
      usage: { prompt_tokens: 1500 },
    });
  }
  const inputBudget = 18_000;
  const target = getCompactionMessageTarget(body, provider, model, inputBudget);
  assert.ok(target > 0);
  const adapter = adaptBodyForCompression(body);
  const result = compressContext(adapter.body, {
    provider,
    model,
    maxTokens: target,
    reserveTokens: 0,
  });
  assert.ok(result.compressed);
  const restored = adapter.restore(result.body as Record<string, unknown>, {
    dropMissingMappedItems: true,
  });
  assert.ok(estimateCalibratedFinalInputTokens(restored, provider, model) <= inputBudget);
  assert.deepEqual(restored.tools, body.tools);
  assert.equal(restored.system, body.system);
  assert.equal(restored.instructions, body.instructions);
});

test("old tools-only target can fit messages while still overflowing the full request", () => {
  const body = request();
  const budget = 18_000;
  const adapter = adaptBodyForCompression(body);
  const result = compressContext(adapter.body, {
    maxTokens: budget - estimateTokens(body.tools) - 1,
    reserveTokens: 0,
  });
  const restored = adapter.restore(result.body as Record<string, unknown>, {
    dropMissingMappedItems: true,
  });
  const breakdown = estimateFinalInputTokenBreakdown(restored);
  assert.ok(breakdown.messages < budget);
  assert.ok(breakdown.total > budget);
});

test("immutable overhead exhausting the budget gives zero instead of a fallback full window", () => {
  const body = {
    messages: [{ role: "user", content: "latest" }],
    instructions: "x".repeat(40_000),
  };
  assert.equal(getCompactionMessageTarget(body, provider, model, 1000), 0);
});

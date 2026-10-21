import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-ctx-boundary-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.REQUIRE_API_KEY = "false";
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET || "test-ctx-boundary-secret";

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const compressionDb = await import("../../src/lib/db/compression.ts");
const { handleChatCore } = await import("../../open-sse/handlers/chatCore.ts");
const { estimateTokens, getTokenLimit } = await import("../../open-sse/services/contextManager.ts");
const { estimateCalibratedFinalInputTokens } =
  await import("../../open-sse/handlers/chatCore/contextEstimation.ts");

const originalFetch = globalThis.fetch;

test("chatCore compacts against auxiliary input and reserves output before dispatch", async () => {
  const originalContext = process.env.CONTEXT_LENGTH_OPENAI;
  process.env.CONTEXT_LENGTH_OPENAI = "18000";
  await compressionDb.updateCompressionSettings({
    enabled: true,
    defaultMode: "off",
    autoTriggerTokens: 0,
  });
  const connection = await providersDb.createProviderConnection({
    provider: "openai",
    apiKey: "test-key",
    isActive: true,
  });
  const instructions = "instructions ".repeat(1000);
  const body = {
    model: "opaque-budget-model",
    stream: false,
    instructions,
    max_tokens: 1024,
    tools: [
      {
        type: "function",
        function: {
          name: "lookup",
          description: "tool ".repeat(1500),
          parameters: { type: "object" },
        },
      },
    ],
    messages: Array.from({ length: 40 }, (_, i) => ({
      role: i % 2 === 0 ? "user" : "assistant",
      content: `Turn ${i}: ${"history ".repeat(500)}`,
    })),
  };
  let dispatched = false;
  globalThis.fetch = async (_url, init) => {
    if (init?.body) {
      const sent = JSON.parse(String(init.body));
      if (Array.isArray(sent.messages)) {
        dispatched = true;
        assert.ok(estimateCalibratedFinalInputTokens(sent, "openai", body.model) + 1024 <= 18000);
        assert.equal(sent.instructions, instructions);
      }
    }
    return new Response(
      JSON.stringify({
        choices: [{ message: { role: "assistant", content: "ok" } }],
        usage: { prompt_tokens: 100, completion_tokens: 1, total_tokens: 101 },
      }),
      { headers: { "content-type": "application/json" } }
    );
  };
  try {
    const result = await handleChatCore({
      body,
      modelInfo: { provider: "openai", model: body.model },
      credentials: { apiKey: "test-key" },
      log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
      clientRawRequest: { endpoint: "/v1/chat/completions", headers: new Map() },
      connectionId: connection.id,
      onCredentialsRefreshed: () => {},
      onRequestSuccess: () => {},
      onStreamFailure: () => {},
      onDisconnect: () => {},
      userAgent: "test-agent",
      comboName: null,
    });
    assert.equal(result.success, true);
    assert.equal(dispatched, true);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalContext === undefined) delete process.env.CONTEXT_LENGTH_OPENAI;
    else process.env.CONTEXT_LENGTH_OPENAI = originalContext;
  }
});

test.after(async () => {
  globalThis.fetch = originalFetch;
  await new Promise((resolve) => setTimeout(resolve, 200));
  core.closeDbInstance();
  try {
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch {}
});

// Integration lock for the pre-dispatch context-window boundary (#7379):
// enforceOutputTokenBudget in chatCore must reject a request whose input alone
// exceeds the target's context window — before any upstream fetch — when
// compression is disabled and therefore cannot reduce it.
test("chatCore integration: over-window request is rejected before dispatch when compression cannot reduce it", async () => {
  const provider = "openai";
  const model = "gpt-4";
  const originalContextLength = process.env.CONTEXT_LENGTH_OPENAI;
  process.env.CONTEXT_LENGTH_OPENAI = "8192";

  await compressionDb.updateCompressionSettings({
    enabled: false,
    defaultMode: "off",
    autoTriggerTokens: 0,
  });

  const connection = await providersDb.createProviderConnection({
    provider,
    apiKey: "test-key",
    isActive: true,
  });

  const body = {
    model,
    stream: false,
    messages: [
      { role: "system", content: "You are helpful." },
      { role: "user", content: `${"Keep   spacing.\n\n\n".repeat(2000)}Way over the window.` },
    ],
  };
  assert.ok(
    estimateTokens(JSON.stringify(body.messages)) > getTokenLimit(provider, model),
    "Test body should exceed the full context window"
  );

  let fetchCalls = 0;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response(
      JSON.stringify({
        choices: [{ message: { role: "assistant", content: "test" } }],
        usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      }
    );
  };

  try {
    const result = await handleChatCore({
      body,
      modelInfo: { provider, model },
      credentials: { apiKey: "test-key" },
      log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
      clientRawRequest: { endpoint: "/v1/chat/completions", headers: new Map() },
      connectionId: connection.id,
      onCredentialsRefreshed: () => {},
      onRequestSuccess: () => {},
      onStreamFailure: () => {},
      onDisconnect: () => {},
      userAgent: "test-agent",
      comboName: null,
    });

    assert.equal(result.success, false, "Over-window request should be rejected");
    assert.equal(result.status, 400);
    assert.equal(result.errorCode, "context_length_exceeded");
    assert.equal(fetchCalls, 0, "Rejected request must never reach the upstream");
  } finally {
    globalThis.fetch = originalFetch;
    if (originalContextLength === undefined) {
      delete process.env.CONTEXT_LENGTH_OPENAI;
    } else {
      process.env.CONTEXT_LENGTH_OPENAI = originalContextLength;
    }
  }
});

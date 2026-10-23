import test from "node:test";
import assert from "node:assert/strict";

import { CodexExecutor } from "../../open-sse/executors/codex.ts";
import { applyReasoningInputPolicy } from "../../open-sse/services/reasoningInputPolicy.ts";
import {
  sanitizeCodexResponsesInput,
  sanitizeResponsesInputItems,
} from "../../open-sse/services/responsesInputSanitizer.ts";

type Item = Record<string, unknown>;
const COMPOUND_ID = "rs_6ac9a8dfa5015060ebd94d6e:rs_01a123bbaa1777398671e1931ddbf41f";

function reasoning(id: unknown): Item {
  return {
    type: "reasoning",
    id,
    encrypted_content: "opaque-state-fixture",
    summary: [{ type: "summary_text", text: "Keep the existing plan." }],
    signature: "signature-fixture",
    format: "format-fixture",
    metadata: { fixture: true },
  };
}

function history(): Item[] {
  return [
    {
      type: "message",
      role: "user",
      content: [{ type: "input_text", text: "Continue the existing task." }],
    },
    reasoning(COMPOUND_ID),
    { type: "function_call", call_id: "call_existing", name: "read_file", arguments: "{}" },
    { type: "function_call_output", call_id: "call_existing", output: "existing result" },
    reasoning("rs_valid_123"),
    { type: "message", role: "user", content: [{ type: "input_text", text: "Now continue." }] },
  ];
}

const invalidIds = [
  COMPOUND_ID,
  "rs_with.dot",
  "rs_with/slash",
  "rs_with space",
  "rs_1\n",
  "rs_1\r\n",
  "rs_1\0",
  "rs_中文",
];

test("generic Responses sanitization preserves its baseline provider-specific string ids", () => {
  const input: Item[] = [
    ...invalidIds.map(reasoning),
    { type: "item_reference", id: COMPOUND_ID },
    { type: "function_call", id: "fc_a:fc_b", call_id: "call_1", name: "pwd", arguments: "{}" },
    { type: "message", id: "msg_a:msg_b", role: "user", content: "continue" },
  ];
  const before = structuredClone(input);
  assert.deepEqual(sanitizeResponsesInputItems(input), before);
  assert.deepEqual(input, before);
});

test("shared reasoning policy does not adopt Codex-specific id repair", () => {
  for (const provider of ["codex", "openai", "github", "custom-responses-fixture"]) {
    const input = [reasoning(COMPOUND_ID), reasoning("rs_valid_123")];
    const before = structuredClone(input);
    const body: Item = { input, store: false };
    applyReasoningInputPolicy(body, "responses", { provider, preserveEncryptedReasoning: true });
    assert.deepEqual(body.input, before, provider);
    assert.deepEqual(input, before, provider);
  }
});

test("only Codex stateless opaque reasoning loses malformed string ids", () => {
  const input = [...invalidIds.map(reasoning), reasoning("rs_" + "a".repeat(256))];
  const before = structuredClone(input);
  const expected = structuredClone(input);
  for (let i = 0; i < invalidIds.length; i++) delete expected[i].id;
  const body = { input, store: false };
  sanitizeCodexResponsesInput(body, true);
  assert.deepEqual(body.input, expected);
  assert.deepEqual(input, before);
  sanitizeCodexResponsesInput(body, true);
  assert.deepEqual(body.input, expected, "repair must be idempotent");
});

test("Codex does not repair plaintext, signature-only, format-only or empty-ciphertext ids", () => {
  const input: Item[] = [
    { type: "reasoning", id: COMPOUND_ID, summary: [{ type: "summary_text", text: "summary" }] },
    { type: "reasoning", id: COMPOUND_ID, signature: "fixture", summary: [] },
    { type: "reasoning", id: COMPOUND_ID, format: "fixture", summary: [] },
    { type: "reasoning", id: COMPOUND_ID, encrypted_content: "", summary: [] },
  ];
  const before = structuredClone(input);
  const body = { input, store: false };
  sanitizeCodexResponsesInput(body, true);
  assert.deepEqual(body.input, before);
  assert.deepEqual(input, before);
});

for (const context of [
  { name: "client store=true", extra: { store: true }, credentials: {} },
  {
    name: "stored account",
    extra: {},
    credentials: { providerSpecificData: { openaiStoreEnabled: true } },
  },
  {
    name: "previous_response_id",
    extra: { previous_response_id: "resp_existing" },
    credentials: {},
  },
  { name: "conversation", extra: { conversation: { id: "conv_existing" } }, credentials: {} },
  { name: "compact", extra: {}, credentials: { requestEndpointPath: "/v1/responses/compact" } },
  { name: "other subpath", extra: {}, credentials: { requestEndpointPath: "/responses/other" } },
]) {
  test(`Codex leaves opaque ids unchanged outside verified stateless replay (${context.name})`, () => {
    const input = history();
    const before = structuredClone(input);
    const body: Item = { input, ...context.extra };
    sanitizeCodexResponsesInput(body, true, context.credentials);
    assert.deepEqual(body.input, before);
    assert.deepEqual(input, before);
    for (const [key, value] of Object.entries(context.extra)) assert.deepEqual(body[key], value);
  });
}

test("Codex does not silently repair a history containing item references", () => {
  const input = [...history(), { type: "item_reference", id: COMPOUND_ID }];
  const before = structuredClone(input);
  const body = { input, store: false };
  sanitizeCodexResponsesInput(body, true);
  assert.deepEqual(body.input, before);
  assert.deepEqual(input, before);
});

for (const native of [true, false]) {
  test(`Codex regular replay preserves opaque state and paired tools for three turns (native=${native})`, () => {
    const executor = new CodexExecutor();
    let input = history();
    for (let turn = 0; turn < 3; turn++) {
      const before = structuredClone(input);
      const result = executor.transformRequest(
        "gpt-6.1-sol",
        {
          _nativeCodexPassthrough: native,
          input,
          stream: true,
          store: false,
        },
        true,
        { requestEndpointPath: "/responses" }
      ) as Item;
      const replay = result.input as Item[];
      const expected = structuredClone(before);
      for (const item of expected)
        if (item.type === "reasoning" && item.id === COMPOUND_ID) delete item.id;
      assert.deepEqual(replay, expected, "only the malformed reasoning id may change");
      assert.deepEqual(input, before, "caller history must not be mutated");
      const callId = `call_next_${turn}`;
      input = [
        ...replay,
        reasoning(`rs_next_${turn}`),
        { type: "function_call", call_id: callId, name: "pwd", arguments: "{}" },
        { type: "function_call_output", call_id: callId, output: "/example" },
        { type: "message", role: "user", content: [{ type: "input_text", text: "Continue." }] },
      ];
    }
  });

  for (const credentials of [
    { requestEndpointPath: "/responses/compact" },
    { requestEndpointPath: "/responses", providerSpecificData: { openaiStoreEnabled: true } },
  ]) {
    test(`Codex executor preserves opaque ids on compact/stored accounts (native=${native}, ${JSON.stringify(credentials)})`, () => {
      const input = history();
      const before = structuredClone(input);
      const result = new CodexExecutor().transformRequest(
        "gpt-6.1-sol",
        {
          _nativeCodexPassthrough: native,
          input,
          stream: true,
        },
        true,
        credentials
      ) as Item;
      assert.deepEqual(result.input, before);
      assert.deepEqual(input, before);
    });
  }
}

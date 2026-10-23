import test from "node:test";
import assert from "node:assert/strict";

import { CodexExecutor } from "../../open-sse/executors/codex.ts";
import { applyReasoningInputPolicy } from "../../open-sse/services/reasoningInputPolicy.ts";
import { sanitizeResponsesInputItems } from "../../open-sse/services/responsesInputSanitizer.ts";
import { isValidResponsesItemId } from "../../open-sse/services/responsesItemId.ts";

type Item = Record<string, unknown>;

const COMPOUND_REASONING_ID = "rs_6ac9a8dfa5015060ebd94d6e:rs_01a123bbaa1777398671e1931ddbf41f";

function reasoning(id: unknown): Item {
  return {
    type: "reasoning",
    id,
    summary: [{ type: "summary_text", text: "Keep the existing plan." }],
    encrypted_content: "opaque-state-fixture",
  };
}

test("Responses item ids accept only nonempty ASCII letters, digits, underscores and dashes", () => {
  for (const id of ["rs_123", "msg_a-B_9", "fc_abc", "rs_" + "a".repeat(256)]) {
    assert.equal(isValidResponsesItemId(id), true, id);
  }
  for (const id of [
    COMPOUND_REASONING_ID,
    "",
    "rs_with.dot",
    "rs_with/slash",
    "rs_with space",
    "rs_123\n",
    "rs_123\r\n",
    "rs_123\0",
    "rs_中文",
    null,
    undefined,
    123,
    {},
  ]) {
    assert.equal(isValidResponsesItemId(id), false, JSON.stringify(id));
  }
});

test("shared sanitizer removes only malformed item ids without changing tool associations", () => {
  const input: Item[] = [
    reasoning(COMPOUND_REASONING_ID),
    reasoning("rs_valid_123"),
    {
      type: "function_call",
      id: "fc_bad:fc_id",
      call_id: "call_existing_1",
      name: "read_file",
      arguments: '{"path":"example.ts"}',
    },
    { type: "function_call_output", call_id: "call_existing_1", output: "existing result" },
    {
      type: "message",
      id: "msg_bad:msg_id",
      role: "assistant",
      content: [{ type: "output_text", text: "Continue the same task." }],
    },
    {
      type: "function_call",
      id: "fc_valid_2",
      call_id: "call_existing_2",
      name: "pwd",
      arguments: "{}",
    },
    { type: "message", id: "msg_valid_3", role: "user", content: "Continue." },
  ];
  const before = structuredClone(input);
  const result = sanitizeResponsesInputItems(input) as Item[];
  const expected = structuredClone(before);
  for (const index of [0, 2, 4]) delete expected[index].id;

  assert.deepEqual(result, expected);
  assert.deepEqual(input, before);
  assert.deepEqual(sanitizeResponsesInputItems(result), result);
});

test("reasoning policy keeps opaque state and valid ids while rejecting malformed ids", () => {
  const input = [reasoning(COMPOUND_REASONING_ID), reasoning("rs_valid_123")];
  const before = structuredClone(input);
  const body: Item = { input, store: false };

  assert.deepEqual(applyReasoningInputPolicy(body, "responses", { provider: "codex" }), {
    incompatibleReasoning: false,
  });
  const expected = structuredClone(before);
  delete expected[0].id;
  assert.deepEqual(body.input, expected);
  assert.deepEqual(input, before);
  applyReasoningInputPolicy(body, "responses", { provider: "codex" });
  assert.deepEqual(body.input, expected);
});

for (const native of [true, false]) {
  for (const endpoint of ["/responses", "/responses/compact"]) {
    test(`Codex preserves reasoning and paired tool results across replays (native=${native}, ${endpoint})`, () => {
      const executor = new CodexExecutor();
      let input: Item[] = [
        { type: "message", role: "user", content: "Continue the existing task." },
        reasoning(COMPOUND_REASONING_ID),
        { type: "function_call", call_id: "call_existing_1", name: "read_file", arguments: "{}" },
        { type: "function_call_output", call_id: "call_existing_1", output: "existing result" },
        reasoning("rs_valid_123"),
        { type: "message", role: "user", content: "Now continue." },
      ];

      for (let turn = 0; turn < 3; turn++) {
        const before = structuredClone(input);
        const body = { _nativeCodexPassthrough: native, input, stream: true, store: false };
        const result = executor.transformRequest("gpt-6.1-sol", body, true, {
          requestEndpointPath: endpoint,
        }) as Item;
        const replay = result.input as Item[];

        assert.deepEqual(input, before, "caller history must not be mutated");
        assert.equal(replay.length, before.length, "no history item may be dropped");
        const expectedReasoning = before
          .filter((item) => item.type === "reasoning")
          .map((item) => {
            const next = { ...item };
            if (next.id === COMPOUND_REASONING_ID) delete next.id;
            return next;
          });
        assert.deepEqual(
          replay.filter((item) => item.type === "reasoning"),
          expectedReasoning,
          "only the malformed id may change; encrypted state and summaries must survive"
        );
        assert.deepEqual(
          replay.filter(
            (item) => item.type === "function_call" || item.type === "function_call_output"
          ),
          before.filter(
            (item) => item.type === "function_call" || item.type === "function_call_output"
          ),
          "tool ids, arguments, outputs and ordering must survive"
        );
        for (const item of replay) {
          assert.ok(item.id === undefined || isValidResponsesItemId(item.id));
        }

        const callId = `call_next_${turn}`;
        input = [
          ...replay,
          reasoning(`rs_next_${turn}`),
          { type: "function_call", call_id: callId, name: "pwd", arguments: "{}" },
          { type: "function_call_output", call_id: callId, output: "/example" },
          { type: "message", role: "user", content: "Continue." },
        ];
      }
    });
  }
}

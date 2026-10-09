import test from "node:test";
import assert from "node:assert/strict";

const { openaiResponsesToOpenAIRequest } =
  await import("../../open-sse/translator/request/openai-responses.ts");

test("Responses -> Chat preserves role-based assistant tool_calls and tool results", () => {
  const result = openaiResponsesToOpenAIRequest(
    "deepseek-v4-flash",
    {
      model: "deepseek-v4-flash",
      input: [
        { role: "user", content: "Run pwd" },
        {
          role: "assistant",
          content: null,
          tool_calls: [
            {
              id: "call_1",
              type: "function",
              function: { name: "exec_command", arguments: '{"cmd":"pwd"}' },
            },
          ],
        },
        { role: "tool", tool_call_id: "call_1", content: "/tmp" },
      ],
    },
    false,
    { provider: "deepseek" }
  ) as { messages: Array<Record<string, unknown>> };

  assert.deepEqual(result.messages[1].tool_calls, [
    {
      id: "call_1",
      type: "function",
      function: { name: "exec_command", arguments: '{"cmd":"pwd"}' },
    },
  ]);
  assert.deepEqual(result.messages[2], {
    role: "tool",
    tool_call_id: "call_1",
    content: "/tmp",
  });
});

test("Responses -> Chat drops role-based tool_calls with empty name or id", () => {
  const result = openaiResponsesToOpenAIRequest(
    "deepseek-v4-flash",
    {
      model: "deepseek-v4-flash",
      input: [
        { role: "user", content: "Run" },
        {
          role: "assistant",
          content: null,
          tool_calls: [
            { id: "call_nameless", type: "function", function: { name: "", arguments: "{}" } },
            { id: "", type: "function", function: { name: "exec_command", arguments: "{}" } },
          ],
        },
      ],
    },
    false,
    { provider: "deepseek" }
  ) as { messages: Array<Record<string, unknown>> };

  assert.equal(result.messages[1].tool_calls, undefined);
});

const { openaiToOpenAIResponsesRequest } =
  await import("../../open-sse/translator/request/openai-responses/toResponses.ts");

test("Responses -> Chat normalizes empty or invalid JSON arguments to {}", () => {
  const result = openaiResponsesToOpenAIRequest(
    "muse-spark-1.3-contributor-free",
    {
      model: "muse-spark-1.3-contributor-free",
      input: [
        { role: "user", content: "Run" },
        {
          role: "assistant",
          content: null,
          tool_calls: [
            { id: "call_empty", type: "function", function: { name: "get_cwd", arguments: "" } },
            { id: "call_broken", type: "function", function: { name: "read_file", arguments: "{\"path\":" } },
          ],
        },
      ],
    },
    false,
    { provider: "opencode" }
  ) as { messages: Array<Record<string, unknown>> };

  assert.deepEqual(result.messages[1].tool_calls, [
    { id: "call_empty", type: "function", function: { name: "get_cwd", arguments: "{}" } },
    { id: "call_broken", type: "function", function: { name: "read_file", arguments: "{}" } },
  ]);
});

test("Chat -> Responses normalizes empty or invalid JSON arguments to {}", () => {
  const result = openaiToOpenAIResponsesRequest(
    "muse-spark-1.3-contributor-free",
    {
      model: "muse-spark-1.3-contributor-free",
      messages: [
        { role: "user", content: "Run" },
        {
          role: "assistant",
          content: null,
          tool_calls: [
            { id: "call_empty", type: "function", function: { name: "get_cwd", arguments: "" } },
            { id: "call_broken", type: "function", function: { name: "read_file", arguments: "{incomplete" } },
          ],
        },
      ],
    },
    false,
    { provider: "opencode" }
  ) as { input: Array<Record<string, unknown>> };

  const calls = result.input.filter((item) => item.type === "function_call");
  assert.equal(calls.length, 2);
  assert.equal(calls[0].arguments, "{}");
  assert.equal(calls[1].arguments, "{}");
});

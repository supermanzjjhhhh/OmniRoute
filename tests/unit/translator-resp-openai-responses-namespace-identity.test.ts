import test from "node:test";
import assert from "node:assert/strict";

const { openaiResponsesToOpenAIRequest } =
  await import("../../open-sse/translator/request/openai-responses.ts");
const { openaiToOpenAIResponsesResponse } =
  await import("../../open-sse/translator/response/openai-responses.ts");
const { initState } = await import("../../open-sse/translator/index.ts");
const { FORMATS } = await import("../../open-sse/translator/formats.ts");
const { createSSEStream } = await import("../../open-sse/utils/stream.ts");

type NamespaceIdentity = { namespace: string; name: string };
type RuntimeState = ReturnType<typeof initState> & {
  requestToolIdentityMap?: Map<string, NamespaceIdentity>;
};

// Build the side-band identity ledger for a single namespace sub-tool. The
// ledger keys on the NAMESPACE-QUALIFIED name the model echoes back on the
// Chat wire (#8295); the response translator resolves back to
// `{namespace, name}` without splitting.
function identityMapFor(namespace: string, name: string) {
  const request = openaiResponsesToOpenAIRequest(
    "any-model",
    {
      input: [
        {
          type: "additional_tools",
          tools: [{ type: "namespace", name: namespace, tools: [{ name }] }],
        },
        { type: "message", role: "user", content: [{ type: "input_text", text: "go" }] },
      ],
    },
    false,
    { provider: "any-provider" }
  ) as {
    _toolNameMap?: Map<string, NamespaceIdentity>;
    tools: Array<{ function: { name: string } }>;
  };
  assert.ok(request._toolNameMap instanceof Map);
  return request._toolNameMap;
}

function collectToolEvents(
  name: string,
  callId: string,
  requestToolIdentityMap?: Map<string, NamespaceIdentity>
) {
  const state = initState(FORMATS.OPENAI_RESPONSES) as RuntimeState;
  state.requestToolIdentityMap = requestToolIdentityMap;
  const first = openaiToOpenAIResponsesResponse(
    {
      id: "chatcmpl-namespace-identity",
      model: "gpt-4.1",
      choices: [
        {
          index: 0,
          delta: {
            tool_calls: [
              {
                index: 0,
                id: callId,
                type: "function",
                function: { name, arguments: '{"path":"/tmp/file"}' },
              },
            ],
          },
          finish_reason: "tool_calls",
        },
      ],
      usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
    },
    state
  );
  return first;
}

type ResponseItem = { type: string; name: string; namespace?: string };
type ResponseEvent = {
  event: string;
  data: { item?: ResponseItem; response?: { output?: ResponseItem[] } };
};

function functionItems(events: ResponseEvent[]) {
  const added = events.find((event) => event.event === "response.output_item.added");
  const done = events.find((event) => event.event === "response.output_item.done");
  const completed = events.find((event) => event.event === "response.completed");
  assert.ok(added?.data.item, "expected response.output_item.added");
  assert.ok(done?.data.item, "expected response.output_item.done");
  assert.ok(completed?.data.response?.output?.[0], "expected response.completed");
  return {
    added: added.data.item,
    done: done.data.item,
    completed: completed.data.response.output[0],
  };
}

// The model echoes back `mcp__1mcp__tool_list` (the namespace-qualified name we
// stamped on the Chat wire in #8295). The response translator resolves that
// qualified name against the side-band ledger and emits the codex-compatible
// `{namespace, name}` tuple on every output item.
test("Chat -> Responses emits namespace tuple in added, done, and completed output", () => {
  const wireName = "mcp__1mcp__tool_list";
  const events = collectToolEvents(wireName, "call_1mcp", identityMapFor("mcp__1mcp", "tool_list"));
  for (const item of Object.values(functionItems(events))) {
    assert.deepEqual(
      { namespace: item.namespace, name: item.name },
      { namespace: "mcp__1mcp", name: "tool_list" }
    );
  }
});

// #8295 — multiple namespaces sharing the same leaf name each get their own
// namespace-qualified wire name (mcp__alpha__read vs mcp__beta__read), so the
// ledger no longer needs an ambiguity-drop: both entries resolve correctly, with
// no collision possible.
test("Chat -> Responses restores both identities when namespaces share a leaf name", () => {
  const request = openaiResponsesToOpenAIRequest(
    "any-model",
    {
      input: [
        {
          type: "additional_tools",
          tools: [
            { type: "namespace", name: "mcp__alpha", tools: [{ name: "read" }] },
            { type: "namespace", name: "mcp__beta", tools: [{ name: "read" }] },
          ],
        },
        { type: "message", role: "user", content: [{ type: "input_text", text: "go" }] },
      ],
    },
    false,
    { provider: "any-provider" }
  ) as { _toolNameMap?: Map<string, NamespaceIdentity> };
  assert.ok(request._toolNameMap instanceof Map);
  assert.equal(request._toolNameMap.size, 2);

  const alphaEvents = collectToolEvents("mcp__alpha__read", "call_alpha", request._toolNameMap);
  for (const item of Object.values(functionItems(alphaEvents))) {
    assert.deepEqual(
      { namespace: item.namespace, name: item.name },
      { namespace: "mcp__alpha", name: "read" }
    );
  }

  const betaEvents = collectToolEvents("mcp__beta__read", "call_beta", request._toolNameMap);
  for (const item of Object.values(functionItems(betaEvents))) {
    assert.deepEqual(
      { namespace: item.namespace, name: item.name },
      { namespace: "mcp__beta", name: "read" }
    );
  }
});

// A precompiled ledger (e.g. #2195 Atlassian nested namespace tenant) supplies
// its own mapped identity, overriding the leaf lookup. The response translator
// resolves whatever key the model echoed back against this ledger.
test("Chat -> Responses restores a precompiled Atlassian nested namespace", () => {
  const leaf = "read_issue";
  const events = collectToolEvents(
    leaf,
    "call_atlassian",
    new Map([[leaf, { namespace: "mcp__atlassian__cloud__tenant", name: "read_issue" }]])
  );
  for (const item of Object.values(functionItems(events))) {
    assert.deepEqual(
      { namespace: item.namespace, name: item.name },
      { namespace: "mcp__atlassian__cloud__tenant", name: "read_issue" }
    );
  }
});

test("Chat -> Responses leaves unmapped top-level tools without a namespace", () => {
  const events = collectToolEvents("list_mcp_resources", "call_top_level");
  for (const item of Object.values(functionItems(events))) {
    assert.equal(item.name, "list_mcp_resources");
    assert.equal("namespace" in item, false);
  }
});

test("Chat -> Responses keeps apply_patch as a custom tool without namespace restoration", () => {
  const events = collectToolEvents("apply_patch", "call_patch");
  const added = events.find((event) => event.event === "response.output_item.added");
  const done = events.find((event) => event.event === "response.output_item.done");
  const completed = events.find((event) => event.event === "response.completed");
  assert.ok(added);
  assert.ok(done);
  assert.ok(completed);
  for (const item of [added.data.item, done.data.item, completed.data.response.output[0]]) {
    assert.equal(item.type, "custom_tool_call");
    assert.equal(item.name, "apply_patch");
    assert.equal("namespace" in item, false);
  }
});

test("Chat -> Responses keeps same wire names isolated between per-request stream states", () => {
  // Two independent streams issuing the same qualified wire name resolve to
  // different namespaces because the ledger is per-request, not global.
  const wireName = "mcp__shared__read";
  const firstMap = identityMapFor("mcp__shared", "read");
  const secondMap = new Map([[wireName, { namespace: "mcp__two", name: "read" }]]);

  const first = functionItems(collectToolEvents(wireName, "call_one", firstMap));
  const second = functionItems(collectToolEvents(wireName, "call_two", secondMap));
  assert.deepEqual(
    { namespace: first.completed.namespace, name: first.completed.name },
    { namespace: "mcp__shared", name: "read" }
  );
  assert.deepEqual(
    { namespace: second.completed.namespace, name: second.completed.name },
    { namespace: "mcp__two", name: "read" }
  );
});

test("native Responses passthrough keeps a namespaced read distinct from flat read", async () => {
  const request = {
    model: "any-model",
    input: [{ type: "message", role: "user", content: [{ type: "input_text", text: "go" }] }],
    tools: [
      { type: "function", name: "read", parameters: { type: "object" } },
      {
        type: "namespace",
        name: "mcp__files",
        tools: [{ type: "function", name: "read", parameters: { type: "object" } }],
      },
    ],
  };
  const requestToolIdentityMap = new Map<string, NamespaceIdentity>([
    ["mcp__files__read", { namespace: "mcp__files", name: "read" }],
    ["read", { namespace: "", name: "read" }],
  ]);

  const namespacedCall = {
    type: "function_call",
    id: "fc_namespaced",
    call_id: "call_namespaced",
    name: "mcp__files__read",
    arguments: "{}",
  };
  const flatCall = { ...namespacedCall, id: "fc_flat", call_id: "call_flat", name: "read" };
  const input = [
    { type: "response.output_item.added", output_index: 0, item: namespacedCall },
    { type: "response.output_item.done", output_index: 0, item: namespacedCall },
    { type: "response.output_item.added", output_index: 1, item: flatCall },
    { type: "response.output_item.done", output_index: 1, item: flatCall },
    {
      type: "response.completed",
      response: {
        id: "resp_namespace_flat",
        status: "completed",
        output: [namespacedCall, flatCall],
      },
    },
  ];
  for (const finalBoundary of ["\n\n", "\n"]) {
    const source = new ReadableStream<Uint8Array>({
      start(controller) {
        const encoder = new TextEncoder();
        for (const [index, event] of input.entries()) {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify(event)}${index === input.length - 1 ? finalBoundary : "\n\n"}`
            )
          );
        }
        controller.close();
      },
    });
    const text = await new Response(
      source.pipeThrough(
        createSSEStream({
          mode: "passthrough",
          sourceFormat: FORMATS.OPENAI_RESPONSES,
          targetFormat: FORMATS.OPENAI_RESPONSES,
          clientResponseFormat: FORMATS.OPENAI_RESPONSES,
          body: request,
          requestToolIdentityMap,
        })
      )
    ).text();
    const events = text
      .split("\n")
      .filter((line) => line.startsWith("data: ") && line !== "data: [DONE]")
      .map(
        (line) =>
          JSON.parse(line.slice(6)) as {
            type: string;
            output_index?: number;
            item?: ResponseItem;
            response?: { output?: ResponseItem[] };
          }
      );
    for (const type of ["response.output_item.added", "response.output_item.done"]) {
      const namespaced = events.find((event) => event.type === type && event.output_index === 0);
      const flat = events.find((event) => event.type === type && event.output_index === 1);
      assert.deepEqual(
        namespaced?.item && { name: namespaced.item.name, namespace: namespaced.item.namespace },
        { name: "read", namespace: "mcp__files" }
      );
      assert.equal(flat?.item?.name, "read");
      assert.equal(Object.hasOwn(flat?.item ?? {}, "namespace"), false);
    }
    const completed = events.find((event) => event.type === "response.completed");
    assert.deepEqual(completed?.response?.output?.[0], {
      ...namespacedCall,
      name: "read",
      namespace: "mcp__files",
    });
    assert.equal(Object.hasOwn(completed?.response?.output?.[1] ?? {}, "namespace"), false);
  }
});

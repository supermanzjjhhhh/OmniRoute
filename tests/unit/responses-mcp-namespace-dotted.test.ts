import test from "node:test";
import assert from "node:assert/strict";

import { resolveRequestToolIdentity } from "../../open-sse/translator/response/openai-responses/requestToolIdentity.ts";

test("resolves mcp__<server>.<tool> with null identityMap (passthrough / follow-up)", () => {
  const result = resolveRequestToolIdentity(null, "mcp__codegraph.codegraph_explore");
  assert.deepEqual(result, {
    namespace: "mcp__codegraph",
    name: "codegraph_explore",
  });
});

test("resolves <server>.<tool> without mcp__ prefix with null identityMap", () => {
  const result = resolveRequestToolIdentity(null, "codegraph.codegraph_explore");
  assert.deepEqual(result, {
    namespace: "mcp__codegraph",
    name: "codegraph_explore",
  });
});

test("resolves mcp__<server>__<tool> wire format with null identityMap", () => {
  const result = resolveRequestToolIdentity(null, "mcp__codegraph__codegraph_explore");
  assert.deepEqual(result, {
    namespace: "mcp__codegraph",
    name: "codegraph_explore",
  });
});

test("matches candidate in populated identityMap for dot-separated tool names", () => {
  const identity = { namespace: "mcp__codegraph", name: "codegraph_explore" };
  const identityMap = new Map([["mcp__codegraph__codegraph_explore", identity]]);

  // Dotted with mcp__
  assert.deepEqual(resolveRequestToolIdentity(identityMap, "mcp__codegraph.codegraph_explore"), identity);
  // Dotted without mcp__
  assert.deepEqual(resolveRequestToolIdentity(identityMap, "codegraph.codegraph_explore"), identity);
  // Original wire name
  assert.deepEqual(resolveRequestToolIdentity(identityMap, "mcp__codegraph__codegraph_explore"), identity);
});

test("preserves non-namespace flat tools when identityMap is populated", () => {
  const identity = { namespace: "mcp__codegraph", name: "codegraph_explore" };
  const identityMap = new Map([["mcp__codegraph__codegraph_explore", identity]]);

  assert.equal(resolveRequestToolIdentity(identityMap, "other.exec_command"), null);
  assert.equal(resolveRequestToolIdentity(identityMap, "exec_command"), null);
});

test("ignores non-namespaced flat tools when identityMap is empty/null", () => {
  assert.equal(resolveRequestToolIdentity(null, "exec_command"), null);
  assert.equal(resolveRequestToolIdentity(null, "shell"), null);
});

type RequestToolIdentity = { namespace: string; name: string };

function asRequestToolIdentity(value: unknown): RequestToolIdentity | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const { namespace, name } = value as Record<string, unknown>;
  return typeof namespace === "string" && namespace && typeof name === "string" && name
    ? { namespace, name }
    : null;
}

function isExplicitFlatIdentity(value: unknown, toolName: string): boolean {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const identity = value as Record<string, unknown>;
  return identity.namespace === "" && identity.name === toolName;
}

// #8295's `flattenNamespaceToolName` folds a declared `type:"namespace"` tool
// group onto the Chat wire as `${nsName}__${leaf}`, always prefixed with the
// MCP container convention documented in open-sse/executors/codex/tools.ts
// (`mcp__<server>...`). Gate the split-fallback below on this exact prefix so
// it never misfires on an unrelated flat `type:"function"` tool that merely
// happens to contain `__` in its own name.
const NAMESPACE_TOOL_PREFIX = "mcp__";

/**
 * #12996 — deterministic wire-name fallback for when no per-request identity
 * map entry exists at all (e.g. a follow-up turn in the same Codex/MCP
 * session that relies on `previous_response_id` continuity instead of
 * re-declaring its `type:"namespace"` tools every turn — OmniRoute is a
 * stateless-upstream-by-default proxy for the Responses API, so nothing
 * persists the prior turn's identity map across separate HTTP requests).
 *
 * Recovers `{namespace, name}` by:
 * 1. Splitting dot-separated wire names ("mcp__<server>.<tool>" or "<server>.<tool>").
 * 2. Splitting "__"-separated wire names ("mcp__<server>__<tool>") on the LAST "__" separator.
 */
function splitFlattenedNamespaceWireName(toolName: string): RequestToolIdentity | null {
  if (!toolName) return null;

  // Dot-separated format: "mcp__<server>.<tool>" or "<server>.<tool>"
  const dotIndex = toolName.indexOf(".");
  if (dotIndex > 0) {
    const rawNs = toolName.slice(0, dotIndex);
    const leaf = toolName.slice(dotIndex + 1);
    if (rawNs && leaf) {
      const namespace = rawNs.startsWith(NAMESPACE_TOOL_PREFIX)
        ? rawNs
        : `${NAMESPACE_TOOL_PREFIX}${rawNs}`;
      return { namespace, name: leaf };
    }
  }

  // __-separated wire format: "mcp__<server>__<leaf>"
  if (toolName.startsWith(NAMESPACE_TOOL_PREFIX)) {
    const lastSeparator = toolName.lastIndexOf("__");
    if (lastSeparator >= NAMESPACE_TOOL_PREFIX.length) {
      const namespace = toolName.slice(0, lastSeparator);
      const name = toolName.slice(lastSeparator + 2);
      if (namespace && name) return { namespace, name };
    }
  }

  return null;
}

/**
 * Resolve a flattened Chat function name back to the identity declared by the
 * request's Responses namespace tool. The request path supplies this map on
 * the response translation state.
 *
 * Some model-specific tool parsers render the registered `namespace__leaf`
 * wire name as `namespace.leaf`. Accept that spelling only when it matches an
 * identity already present in the request ledger; never infer a namespace by
 * splitting an otherwise unknown tool name outside the narrow `mcp__`
 * fallback below.
 */
export function resolveRequestToolIdentity(
  identityMap: unknown,
  toolName: string,
  options: { explicitNames?: Iterable<string> | null } = {}
) {
  if (!toolName) return null;

  const direct =
    identityMap instanceof Map
      ? identityMap.get(toolName)
      : identityMap && typeof identityMap === "object" && !Array.isArray(identityMap)
        ? (identityMap as Record<string, unknown>)[toolName]
        : undefined;
  // Current flat declarations and ambiguous history must stay flat, including
  // names that otherwise match a historical dot alias or the MCP split fallback.
  if (isExplicitFlatIdentity(direct, toolName)) return null;
  const directIdentity = asRequestToolIdentity(direct);
  if (directIdentity) return directIdentity;

  // Materialized: the identity walk below runs twice (dotted alias, then the unique
  // bare-leaf fallback), and a Map's `values()` iterator is single-use.
  const candidates = Array.from(
    identityMap instanceof Map
      ? identityMap.values()
      : identityMap && typeof identityMap === "object" && !Array.isArray(identityMap)
        ? Object.values(identityMap as Record<string, unknown>)
        : []
  );
  for (const candidate of candidates) {
    const identity = asRequestToolIdentity(candidate);
    if (!identity) continue;
    if (`${identity.namespace}.${identity.name}` === toolName) return identity;
    const bareNs = identity.namespace.startsWith(NAMESPACE_TOOL_PREFIX)
      ? identity.namespace.slice(NAMESPACE_TOOL_PREFIX.length)
      : identity.namespace;
    if (`${bareNs}.${identity.name}` === toolName) return identity;
    if (`${NAMESPACE_TOOL_PREFIX}${bareNs}.${identity.name}` === toolName) return identity;
    if (`${bareNs}__${identity.name}` === toolName) return identity;
  }

  // Unique bare-leaf resolution: a provider that dropped the `ns__` prefix (or a
  // name fragment captured mid-stream) still resolves when exactly ONE ledger
  // identity carries that leaf — e.g. bare `exec` for the declared
  // `functions__exec`. An ambiguous leaf stays unresolved, and a client that also
  // declared a flat tool of the same name keeps that tool's own identity
  // (`options.explicitNames`, supplied from the request's schema map).
  if (toolName && !toolName.includes("__")) {
    const explicit =
      options.explicitNames === undefined || options.explicitNames === null
        ? null
        : new Set(options.explicitNames);
    if (!explicit || !explicit.has(toolName)) {
      const leafMatches: RequestToolIdentity[] = [];
      for (const candidate of candidates) {
        const identity = asRequestToolIdentity(candidate);
        if (identity && identity.name === toolName) leafMatches.push(identity);
      }
      if (leafMatches.length === 1) return leafMatches[0];
    }
  }

  // The wire-name split only stands in for a request that declared no
  // namespace identities at all (follow-up turns). When the ledger is populated
  // the request declared its own tools, so an unlisted `mcp__a__b` is a flat
  // function tool and must not gain a namespace.
  const ledgerSize =
    identityMap instanceof Map
      ? identityMap.size
      : identityMap && typeof identityMap === "object" && !Array.isArray(identityMap)
        ? Object.keys(identityMap).length
        : 0;

  const explicit =
    options.explicitNames === undefined || options.explicitNames === null
      ? null
      : new Set(options.explicitNames);

  // A request that declared its own tools is self-describing, so the wire-name split
  // must not invent a namespace for a spelling it did not declare: a Chat upstream that
  // echoes `functions.exec` for the declared flat `exec` is a provider prefix, not
  // `mcp__functions`/`exec` (Codex rejects that as `unsupported call: functions.exec`).
  // Pass-through / `previous_response_id` turns declare nothing and keep the fallback.
  if (explicit && explicit.size > 0) return null;

  if (ledgerSize === 0) {
    return splitFlattenedNamespaceWireName(toolName);
  }

  // If the ledger was populated but the candidate loop had no match:
  // An explicit "mcp__<server>.<tool>" wire call carries the MCP prefix
  // and dot separator, so it is an unambiguous namespaced tool call.
  if (toolName.startsWith(NAMESPACE_TOOL_PREFIX) && toolName.includes(".")) {
    return splitFlattenedNamespaceWireName(toolName);
  }

  return null;
}

// Shared by reasoningInputPolicy.ts and responsesInputSanitizer.ts. Responses
// item ids allow only ASCII letters, digits, underscores and dashes. Reject
// client-composed ids such as rs_a:rs_b so callers omit only the invalid id,
// preserving the reasoning payload and the separate tool call_id linkage.
export function isValidResponsesItemId(id: unknown): id is string {
  return typeof id === "string" && id.length > 0 && !/[^a-zA-Z0-9_-]/.test(id);
}

import { HTTP_STATUS } from "../../config/constants.ts";
import { errorResponse } from "../../utils/error.ts";
import type { ExecutorLog } from "../base.ts";

/**
 * Codex can reject encrypted reasoning carried across accounts/models with 400.
 * Surface a stable error instead of retrying after silently removing that state.
 * Callers can then explicitly decide whether to restart without opaque history.
 */
export const CODEX_REASONING_REPLAY_ERROR_CODE = "invalid_encrypted_content";

const MAX_MESSAGE_LENGTH = 2_000;

// Bounded quantifiers only (ReDoS-safe on untrusted upstream text).
const REPLAY_MESSAGE_PATTERN =
  /\bencrypted[ _]content\b.{0,200}\bcould not be (?:verified|decrypted)\b/i;

/**
 * Whether a captured upstream diagnostic text is a replayed-reasoning
 * rejection. The streaming readiness gate (streamReadiness.ts) sees only the
 * sanitized message — no HTTP status and no structured `code` — so the
 * message pattern is the classifier there, and the surfaced code is the same
 * stable `invalid_encrypted_content` the non-streaming 400 path returns.
 */
export function matchesReasoningReplayRejectionMessage(text: string): boolean {
  return REPLAY_MESSAGE_PATTERN.test(text);
}

export async function readCodexReasoningReplayRejection(
  response: Response
): Promise<{ message: string } | null> {
  if (response.status !== 400) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(await response.clone().text());
  } catch {
    return null;
  }
  const error =
    parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>).error : null;
  if (!error || typeof error !== "object") return null;

  const { code, message } = error as Record<string, unknown>;
  const text = typeof message === "string" ? message.slice(0, MAX_MESSAGE_LENGTH) : "";
  const matches = code === CODEX_REASONING_REPLAY_ERROR_CODE || REPLAY_MESSAGE_PATTERN.test(text);
  return matches ? { message: text || "Codex rejected a replayed reasoning item" } : null;
}

/** Normalize a replay rejection without mutating or resending the caller's history. */
export async function normalizeCodexReasoningReplayRejection<T extends object>(
  result: T,
  log?: ExecutorLog | null
): Promise<{ result: T; rejected: boolean }> {
  const response = (result as { response?: Response }).response;
  const rejection =
    response && !response.ok ? await readCodexReasoningReplayRejection(response) : null;
  if (!rejection) return { result, rejected: false };

  log?.warn?.(
    "CODEX",
    "upstream rejected encrypted reasoning; preserving state without a lossy retry"
  );
  await response?.body?.cancel().catch(() => undefined);
  (result as { response: Response }).response = errorResponse(
    HTTP_STATUS.BAD_REQUEST,
    rejection.message,
    { type: "invalid_request_error", code: CODEX_REASONING_REPLAY_ERROR_CODE }
  );
  return { result, rejected: true };
}

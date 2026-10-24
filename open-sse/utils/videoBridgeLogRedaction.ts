/**
 * One replaced video part whose rendered text carried a transcript cue.
 * `redactedText` is the structured-redaction shadow (see
 * `DescribedVideo.descriptionRedacted`) for that same part — never derived
 * from the model-bound text, so it cannot be bypassed by cue content.
 *
 * #12150 fix round 1 (adversarial review): the downstream log-redaction
 * consumer (`applyVideoBridgeLogRedaction`, chatCore/attemptLogging.ts)
 * matches by CONTENT (`fullText`), not by `messageIndex`/`partIndex`.
 * Between this guardrail's preCall and the eventual log write, other
 * request-mutation stages (system-prompt injection when no existing system
 * message is found, context-relay handoff injection, reasoning-rule body
 * rewrites) can prepend/splice messages, silently invalidating any
 * positional index. `messageIndex`/`partIndex` are kept as advisory/
 * debugging metadata only — never used for matching.
 */
export interface VideoBridgeLogRedactionEntry {
  container: "messages" | "input";
  /** Advisory only (see interface doc) — may be stale by the time the log is written. */
  messageIndex: number;
  /** Advisory only (see interface doc) — may be stale by the time the log is written. */
  partIndex: number;
  /**
   * The exact, unredacted text placed into the replaced part
   * (`descriptions[i]`, identical to what `replaceVideoParts` writes to
   * `content[partIndex].text`). The downstream consumer matches parts by
   * `part.text === fullText`, so it finds the video part wherever a later
   * stage moved it, and never touches a part whose text differs.
   */
  fullText: string;
  redactedText: string;
}

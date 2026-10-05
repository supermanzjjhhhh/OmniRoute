import { getDbInstance } from "../db/core";
import type { PendingRequestDetail } from "./usageHistory";
import {
  prunePendingPreview,
  truncatePendingPreviewStrings,
} from "./usageHistory/helpers";

const COMPLETED_DETAIL_TTL_MS = 120_000;
// ponytail: 256 entries x a few MB of streamChunks each was measured retaining
// hundreds of MB after a long agentic session. The dashboard only ever renders the
// most recent handful; raise it back if a live tab ever needs more.
const MAX_COMPLETED_DETAILS = 64;
/**
 * JON-562: completed details are a short-lived dashboard bridge, not a second payload store.
 * The 16 MiB estimated cache payload budget keeps room for normal bridge entries while bounding
 * the strings and object fields this module accounts for. It is not a process-memory ceiling.
 */
export const MAX_COMPLETED_DETAILS_BYTES = 16 * 1024 * 1024;

/** #13621: stream diagnostics are a dashboard preview, so each stage keeps a bounded chunk count. */
const MAX_COMPLETED_STREAM_CHUNKS_PER_STAGE = 64;

const completedDetails = new Map<string, PendingRequestDetail>();
const completedDetailTimers = new Map<string, ReturnType<typeof setTimeout>>();
const completedDetailBytes = new Map<string, number>();
let totalCompletedDetailBytes = 0;

function estimateRetainedBytes(value: unknown, seen = new WeakSet<object>()): number {
  if (value === null || value === undefined) return 0;
  if (typeof value === "string") return Buffer.byteLength(value, "utf8");
  if (typeof value === "number" || typeof value === "bigint") return 8;
  if (typeof value === "boolean") return 4;
  if (typeof value !== "object" || seen.has(value)) return 0;
  seen.add(value);

  // Object.entries() on these yields nothing (ArrayBuffer) or one entry per index
  // (TypedArray), so they used to be accounted as 64 bytes each and blew straight
  // past MAX_COMPLETED_DETAILS_BYTES. They are the bulk of a captured response.
  if (value instanceof ArrayBuffer) return 64 + value.byteLength;
  if (ArrayBuffer.isView(value)) {
    return 64 + value.byteLength;
  }
  if (value instanceof Map) {
    let bytes = 64;
    for (const [key, entry] of value) {
      bytes += estimateRetainedBytes(key, seen) + estimateRetainedBytes(entry, seen);
    }
    return bytes;
  }
  if (value instanceof Set) {
    let bytes = 64;
    for (const entry of value) bytes += estimateRetainedBytes(entry, seen);
    return bytes;
  }

  if (Array.isArray(value)) {
    return 32 + value.reduce((total, entry) => total + estimateRetainedBytes(entry, seen), 0);
  }

  let bytes = 64;
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    bytes += Buffer.byteLength(key, "utf8") + estimateRetainedBytes(entry, seen);
  }
  return bytes;
}

/**
 * One SSE frame can be a whole tool-call argument block (hundreds of KB), so a
 * chunk-count cap alone let 64 x 3 stages per entry dominate the cache budget.
 * Clip each chunk; the count cap still bounds the array shape.
 */
const MAX_COMPLETED_STREAM_CHUNK_BYTES = 4 * 1024;

function capStreamChunkList(values?: string[]): string[] | undefined {
  if (!values) return values;
  const kept = values
    .slice(0, MAX_COMPLETED_STREAM_CHUNKS_PER_STAGE)
    .map((chunk) =>
      chunk.length > MAX_COMPLETED_STREAM_CHUNK_BYTES
        ? `${chunk.slice(0, MAX_COMPLETED_STREAM_CHUNK_BYTES)}...[TRUNCATED_CHUNK]`
        : chunk
    );
  if (values.length > MAX_COMPLETED_STREAM_CHUNKS_PER_STAGE) {
    kept.push(`[TRUNCATED_STREAM_CHUNKS: ${values.length - MAX_COMPLETED_STREAM_CHUNKS_PER_STAGE}]`);
  }
  return kept;
}

/**
 * The completed-detail cache is a dashboard bridge, but the payloads it receives come straight
 * off the request/response path and were never preview-clipped: a single 900 KB codex body sat
 * in each of the MAX_COMPLETED_DETAILS entries for the whole TTL. Reuse the same bounded preview
 * shape the pending list already applies so a cached entry costs KBs, not MBs.
 */
const PAYLOAD_FIELDS = [
  "clientRequest",
  "providerRequest",
  "providerResponse",
  "clientResponse",
] as const;

function capPayloads(detail: PendingRequestDetail): PendingRequestDetail {
  const next: Record<string, unknown> = { ...detail };
  let changed = false;
  for (const field of PAYLOAD_FIELDS) {
    const value = next[field];
    if (value === undefined || value === null) continue;
    const capped = truncatePendingPreviewStrings(prunePendingPreview(value));
    if (capped !== value) {
      next[field] = capped;
      changed = true;
    }
  }
  return changed ? (next as PendingRequestDetail) : detail;
}

function capStreamChunks(detail: PendingRequestDetail): PendingRequestDetail {
  const chunks = detail.streamChunks;
  if (!chunks) return detail;
  const capped = { ...chunks };
  for (const stage of ["provider", "openai", "client"] as const) {
    if (capped[stage]) capped[stage] = capStreamChunkList(capped[stage]);
  }
  return { ...detail, streamChunks: capped };
}

function deleteCompletedDetail(id: string) {
  completedDetails.delete(id);
  totalCompletedDetailBytes = Math.max(
    0,
    totalCompletedDetailBytes - (completedDetailBytes.get(id) ?? 0)
  );
  completedDetailBytes.delete(id);
  const existingTimer = completedDetailTimers.get(id);
  if (existingTimer) {
    clearTimeout(existingTimer);
    completedDetailTimers.delete(id);
  }
}

function trimCompletedDetails() {
  while (
    completedDetails.size > MAX_COMPLETED_DETAILS ||
    totalCompletedDetailBytes > MAX_COMPLETED_DETAILS_BYTES
  ) {
    const oldestId = completedDetails.keys().next().value;
    if (!oldestId) break;
    deleteCompletedDetail(oldestId);
  }
}

export function getCompletedDetails(): Map<string, PendingRequestDetail> {
  return completedDetails;
}

/**
 * Read the estimated payload bytes currently accounted to the completed-detail cache.
 * @returns The cache's estimated payload-byte total.
 */
export function getCompletedDetailsByteSize(): number {
  return totalCompletedDetailBytes;
}

/**
 * Read the completed-detail cache counters.
 * @returns Entry, cleanup-timer and estimated payload-byte counts.
 */
export function getCompletedDetailsCacheStats(): {
  entries: number;
  cleanupTimers: number;
  bytes: number;
} {
  return {
    entries: completedDetails.size,
    cleanupTimers: completedDetailTimers.size,
    bytes: totalCompletedDetailBytes,
  };
}

/**
 * Store a detached completed-request preview.
 * @param input - Completed request detail to cap, detach and cache.
 * @returns `true` only when the entry remains cached after count and byte-budget eviction.
 * @throws If `detail` contains a value that `structuredClone` cannot copy.
 */
export function storeCompletedDetail(input: PendingRequestDetail): boolean {
  const detail = capPayloads(capStreamChunks(input));
  const inputBytes = estimateRetainedBytes(detail);
  if (inputBytes > MAX_COMPLETED_DETAILS_BYTES) {
    deleteCompletedDetail(detail.id);
    return false;
  }

  // `truncatePendingPreview()` uses String#slice. V8 may represent that short preview as a
  // sliced string whose hidden parent is the full multi-megabyte request. A structured clone
  // materializes the visible preview into cache-owned storage and drops the pending graph.
  const detached = structuredClone(detail);
  const detachedBytes = estimateRetainedBytes(detached);
  totalCompletedDetailBytes -= completedDetailBytes.get(detail.id) ?? 0;
  completedDetails.set(detail.id, detached);
  completedDetailBytes.set(detail.id, detachedBytes);
  totalCompletedDetailBytes += detachedBytes;
  trimCompletedDetails();
  return completedDetails.has(detail.id);
}

export function scheduleCompletedDetailCleanup(id: string) {
  const existingTimer = completedDetailTimers.get(id);
  if (existingTimer) clearTimeout(existingTimer);
  const timer = setTimeout(() => {
    deleteCompletedDetail(id);
  }, COMPLETED_DETAIL_TTL_MS);
  timer.unref?.();
  completedDetailTimers.set(id, timer);
}

export function clearCompletedDetails() {
  for (const timer of completedDetailTimers.values()) clearTimeout(timer);
  completedDetailTimers.clear();
  completedDetails.clear();
  completedDetailBytes.clear();
  totalCompletedDetailBytes = 0;
}

function isUnset(value: unknown): boolean {
  return value === undefined || value === null;
}

/**
 * Artifact enrichment is fire-and-forget: everything it touches stays reachable from the
 * pending promise until it settles. It used to write the recovered (untruncated) response
 * bodies back onto the caller's detail, so the closure pinned a multi-MB body for the whole
 * `await import()` + `readCallArtifact()` round trip — the dominant retention in a long
 * agentic session. Recovered payloads now live only in locals and are merged onto the
 * already-capped cached copy, so nothing large is ever reachable from the closure.
 */
async function enrichCompletedDetailFromArtifacts(
  detailId: string,
  model: string,
  connectionId: string,
  needProvider: boolean,
  needClient: boolean
) {
  let providerResponse: unknown;
  let clientResponse: unknown;
  try {
    if (!needProvider && !needClient) return;

    const db = getDbInstance();
    const sinceIso = new Date(Date.now() - 30_000).toISOString();
    const rows = db
      .prepare(
        `SELECT artifact_relpath FROM call_logs WHERE connection_id = ? AND model = ? AND timestamp >= ? ORDER BY timestamp DESC LIMIT 5`
      )
      .all(connectionId, model, sinceIso) as Array<{ artifact_relpath: string | null }>;
    for (const row of rows) {
      if (!row.artifact_relpath) continue;
      const { readCallArtifact, isSizeLimitOmissionMarker } = await import("./callLogArtifacts");
      const art = readCallArtifact(row.artifact_relpath);
      if (art.state !== "ready" || !art.artifact) continue;
      const pipeline = art.artifact.pipeline as
        { providerResponse?: unknown; clientResponse?: unknown } | undefined;
      // pipeline.* first: it is the translated payload of one specific side.
      // `responseBody` is a single coarse value handed to both sides, so it
      // may only fill a side still empty AFTER the pipeline had its turn --
      // testing emptiness once before the loop let it overwrite the payload
      // just recovered, showing a provider payload as the client response.
      if (isUnset(providerResponse) && pipeline?.providerResponse) {
        providerResponse = pipeline.providerResponse;
      }
      if (isUnset(clientResponse) && pipeline?.clientResponse) {
        clientResponse = pipeline.clientResponse;
      }
      // A size-limited artifact stores an omission marker string in place of
      // the body. It is truthy, so recovering it here overwrites a real
      // payload with "[omitted: ...]".
      const responseBody = isSizeLimitOmissionMarker(art.artifact.responseBody)
        ? null
        : art.artifact.responseBody;
      if (responseBody) {
        if (isUnset(providerResponse)) providerResponse = responseBody;
        if (isUnset(clientResponse)) clientResponse = responseBody;
      }
      if (providerResponse || clientResponse) {
        const current = completedDetails.get(detailId);
        if (current) {
          // Usage can arrive while the artifact read is awaiting its import.
          // Keep newer counters instead of restoring the pre-usage snapshot.
          storeCompletedDetail({
            ...current,
            providerResponse,
            clientResponse,
            tokens: current.tokens,
          });
        }
        break;
      }
    }
  } catch (e) {
    try {
      console.warn(
        "[usageHistory] failed to enrich completed detail from artifacts:",
        e && (e.message || e)
      );
    } catch {}
  }
}

export function maybeEnrichCompletedDetail(updated: PendingRequestDetail, connectionId: string) {
  const needProvider = isUnset(updated.providerResponse);
  const needClient = isUnset(updated.clientResponse);
  if (!needProvider && !needClient) return;
  // Only scalars cross into the async closure — never the detail itself.
  void enrichCompletedDetailFromArtifacts(
    updated.id,
    updated.model,
    connectionId,
    needProvider,
    needClient
  );
}

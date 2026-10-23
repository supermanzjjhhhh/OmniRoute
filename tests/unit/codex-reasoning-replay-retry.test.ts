/**
 * A Codex encrypted-state rejection must surface explicitly. A successful retry
 * without that state is not a successful continuation of the caller's history.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { cleanupTempDataDir } from "../_setup/tempDataDir.ts";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omr-codex-replay-retry-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const { CodexExecutor, __setCodexWebSocketTransportForTesting } =
  await import("../../open-sse/executors/codex.ts");
const { checkFallbackError } = await import("../../open-sse/services/accountFallback.ts");

const VERIFY_FAILED =
  "The encrypted content for item rs_0123456789abcdef could not be verified. Reason: Encrypted content could not be decrypted or parsed.";

function upstreamError(error: Record<string, unknown>, status = 400): Response {
  return Response.json({ error }, { status });
}

function replayRejection(status = 400): Response {
  return upstreamError(
    { message: VERIFY_FAILED, type: "invalid_request_error", param: null, code: "" },
    status
  );
}

function sseOk(): Response {
  const event = { type: "response.completed", response: { id: "resp_1", status: "completed" } };
  return new Response(`data: ${JSON.stringify(event)}\n\n`, {
    status: 200,
    headers: { "Content-Type": "text/event-stream" },
  });
}

function requestBody() {
  return {
    model: "gpt-5.5",
    input: [
      {
        type: "reasoning",
        summary: [{ type: "summary_text", text: "keep this summary" }],
        encrypted_content: "foreign-secret",
      },
      { type: "reasoning", id: "rs_dropme", summary: [], encrypted_content: "ciphertext-only" },
      { type: "message", role: "user", content: [{ type: "input_text", text: "continue" }] },
    ],
  };
}

type Captured = { body: Record<string, unknown> };

async function executeAgainst(
  responses: Response[],
  body: Record<string, unknown> = requestBody(),
  log?: { warn: (...args: unknown[]) => void }
) {
  const executor = new CodexExecutor();
  const originalFetch = globalThis.fetch;
  const calls: Captured[] = [];
  globalThis.fetch = (async (_url: unknown, init?: { body?: unknown }) => {
    calls.push({ body: JSON.parse(String(init?.body ?? "{}")) });
    const next = responses.shift();
    if (!next) throw new Error("unexpected extra upstream call");
    return next;
  }) as typeof fetch;
  try {
    const result = await executor.execute({
      model: "gpt-5.5",
      body,
      stream: true,
      credentials: { accessToken: "codex-token" },
      log,
    });
    assert.ok(!(result instanceof Response), "HTTP executor must return a response envelope");
    return { result, calls };
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function encryptedItems(wireBody: Record<string, unknown>): unknown[] {
  return (wireBody.input as Record<string, unknown>[]).filter(
    (item) => item && item.encrypted_content !== undefined
  );
}

test.afterEach(() => __setCodexWebSocketTransportForTesting(undefined));
test.after(async () => {
  await cleanupTempDataDir(TEST_DATA_DIR);
});

for (const rejected of [false, true]) {
  test(`outbound reasoning and tool state survive id repair without a lossy retry (rejected=${rejected})`, async () => {
    const warnings: unknown[][] = [];
    const body = { ...requestBody(), store: false };
    const badId = "rs_6ac9a8dfa5015060ebd94d6e:rs_01a123bbaa1777398671e1931ddbf41f";
    const items = body.input as Record<string, unknown>[];
    items[0].id = badId;
    items.splice(
      2,
      0,
      { type: "function_call", call_id: "call_existing", name: "read_file", arguments: "{}" },
      { type: "function_call_output", call_id: "call_existing", output: "504" }
    );
    const before = structuredClone(body);
    const { result, calls } = await executeAgainst(
      rejected ? [replayRejection(), sseOk()] : [sseOk()],
      body,
      { warn: (...args: unknown[]) => warnings.push(args) }
    );

    assert.equal(calls.length, 1, "must never resend history with encrypted state removed");
    assert.equal(result.response.status, rejected ? 400 : 200);
    const sent = calls[0].body.input as Record<string, unknown>[];
    const expected = structuredClone(before.input) as Record<string, unknown>[];
    delete expected[0].id;
    assert.deepEqual(
      sent,
      expected,
      "assert the final serialized upstream request, not only a helper"
    );
    assert.equal(encryptedItems(calls[0].body).length, 2);
    assert.deepEqual(body, before, "the caller retains the original history and ids");
    if (rejected) {
      assert.equal((await result.response.json()).error.code, "invalid_encrypted_content");
    } else {
      await result.response.body?.cancel();
    }
    const logged = JSON.stringify(warnings);
    assert.equal(logged.includes("foreign-secret"), false);
    assert.equal(logged.includes("ciphertext-only"), false);
    assert.equal(logged.includes("retrying same account without"), false);
  });
}

test("a valid-id encrypted rejection also surfaces instead of silently dropping state", async () => {
  const body = requestBody();
  const before = structuredClone(body);
  const { result, calls } = await executeAgainst([replayRejection(), sseOk()], body);
  assert.equal(calls.length, 1);
  assert.equal(encryptedItems(calls[0].body).length, 2);
  assert.equal(result.response.status, 400);
  assert.equal((await result.response.json()).error.code, "invalid_encrypted_content");
  assert.deepEqual(body, before);
});

test("does not retry when the rejected history carries no encrypted reasoning", async () => {
  const { result, calls } = await executeAgainst([replayRejection()], {
    model: "gpt-5.5",
    input: [{ type: "message", role: "user", content: [{ type: "input_text", text: "hi" }] }],
  });
  assert.equal(calls.length, 1);
  assert.equal(result.response.status, 400);
  assert.equal((await result.response.json()).error.code, "invalid_encrypted_content");
});

test("does not retry unrelated 400s", async () => {
  const { result, calls } = await executeAgainst([
    upstreamError({ message: "Unknown parameter: input[0].content", code: "unknown_parameter" }),
  ]);
  assert.equal(calls.length, 1);
  assert.equal(result.response.status, 400);
  assert.equal((await result.response.json()).error.code, "unknown_parameter");
});

test("does not retry the same message at a non-400 status", async () => {
  const { result, calls } = await executeAgainst([replayRejection(422)]);
  assert.equal(calls.length, 1);
  assert.equal(result.response.status, 422);
});

test("a final replay rejection never rotates accounts", () => {
  const text = JSON.stringify({
    error: {
      message: VERIFY_FAILED,
      type: "invalid_request_error",
      code: "invalid_encrypted_content",
    },
  });
  const verdict = checkFallbackError(400, text, 0, "gpt-5.5", "codex", null, null, {
    code: "invalid_encrypted_content",
    type: "invalid_request_error",
  });
  assert.equal(verdict.shouldFallback, false);
  assert.equal(verdict.cooldownMs, 0);
  assert.equal(checkFallbackError(400, VERIFY_FAILED, 0, "gpt-5.5", "codex").shouldFallback, false);
});

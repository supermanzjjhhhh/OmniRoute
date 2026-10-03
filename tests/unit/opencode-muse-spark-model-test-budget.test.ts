/**
 * The dashboard health test reported every OpenCode Muse Spark contributor model
 * as "Provider returned empty content — stream forwarded no valuable chunks".
 *
 * `detectTestKind` only honoured Responses-ness carried by the model catalog
 * (`apiFormat` / `supportedEndpoints`) or the provider node's `apiType`. Muse
 * Spark models are discovered live from `https://opencode.ai/zen/v1/models`,
 * which publishes bare ids, so they carry none of those — the probe fell to the
 * Chat Completions branch and sent `max_tokens: 64`.
 *
 * The executor honours the registry instead and serves those models on
 * `/v1/responses`, where that budget arrives as `max_output_tokens: 64`. Muse
 * Spark runs reasoning first: measured live 2026-10-03, 64 and 128 answer
 * `response.incomplete` with the whole budget spent and zero text, while 256
 * emits the answer. So the probe read an intentionally-empty turn and raised a
 * 502 on a model that works.
 *
 * The classification tests below are cheap but prove nothing on their own —
 * reverting the dispatch and leaving detectTestKind alone keeps them green.
 * The last test reads the path that actually left for the upstream, and that
 * one does not survive the revert.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-muse-budget-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const runner = await import("../../src/lib/api/modelTestRunner.ts");
const callLogs = await import("../../src/lib/usage/callLogs.ts");

const MODEL_ID = "muse-spark-1.3-contributor-free";

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("detectTestKind reads Responses-ness off the provider registry", () => {
  assert.equal(
    runner.detectTestKind(`oc/${MODEL_ID}`, null).isResponses,
    true,
    "the oc alias must resolve to the same Responses route as the provider id"
  );
  assert.equal(runner.detectTestKind(`opencode/${MODEL_ID}`, null).isResponses, true);
  assert.equal(runner.detectTestKind(`opencode/${MODEL_ID}`, null).isEmbedding, false);
});

test("detectTestKind leaves the opencode chat models on the chat branch", () => {
  // The fix must not move every opencode model onto /v1/responses: the free
  // chat models answer on /chat/completions and only there.
  assert.equal(runner.detectTestKind("oc/space-bunny-free", null).isResponses, false);
  assert.equal(runner.detectTestKind("oc/mimo-v2.6-flash-free", null).isResponses, false);
  assert.equal(runner.detectTestKind("openai/gpt-4o", null).isResponses, false);
});

test("a Muse Spark contributor model is probed on the internal /v1/responses route", async () => {
  const connection = await providersDb.createProviderConnection({
    provider: "opencode",
    authType: "no-auth",
    name: "OpenCode Muse Budget Probe",
    providerSpecificData: { fingerprints: ["22222222222222222222222222222222"] },
  });

  // runSingleModelTest dispatches through the route handler in-process, so the
  // call log is the seam that records which internal route the probe took.
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    new Response(JSON.stringify({ output_text: "pong" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    })) as typeof globalThis.fetch;

  try {
    await runner.runSingleModelTest({
      providerId: "opencode",
      modelId: MODEL_ID,
      connectionId: String(connection.id),
      timeoutMs: 15_000,
    });
  } finally {
    globalThis.fetch = originalFetch;
  }

  await callLogs.waitForCallLogSaves(10_000);
  const logs = await callLogs.getCallLogs({});
  const probe = logs.find((entry: { model?: string | null }) =>
    String(entry.model ?? "").includes(MODEL_ID)
  );

  assert.ok(probe, "the model test should have produced a call log entry");
  assert.equal(
    probe.path,
    "/v1/responses",
    `a registry-Responses model must be probed on /v1/responses (call log says ${probe.path})`
  );
});

/**
 * Regression: resolveTokenLimit() must use the context window synced from an
 * embedded service (`serviceModels` key_value namespace) before provider
 * defaults / name heuristics. Service models are stored under the service tool
 * key ("9router") with prefixed ids ("9router/<model>") and an upstream window
 * in `context_length` and/or `capabilities.contextWindow`.
 */

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-service-context-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.NODE_ENV = "test";
process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";

const { resolveTokenLimit } = await import("../../open-sse/services/contextManager.ts");
const { saveServiceModels } = await import("../../src/lib/db/serviceModels.ts");
const { setModelContextOverride } = await import("../../src/lib/db/modelContextOverrides.ts");
const { createModelCapabilityResolutionSnapshot } =
  await import("../../src/lib/modelCapabilityResolutionSnapshot.ts");
const core = await import("../../src/lib/db/core.ts");

const PROVIDER = "9router";
const ENV_KEY = "CONTEXT_LENGTH_9ROUTER";

function resetDb() {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

function seedServiceModels() {
  saveServiceModels(PROVIDER, [
    {
      id: "9router/my-domestic",
      name: "My Domestic",
      context_length: 200_000,
      capabilities: { contextWindow: 200_000 },
    },
    // Legacy/upstream list without the tool prefix; canonical matching must
    // still find it when the caller passes the prefixed id.
    { id: "bare-entry", name: "Bare Entry", context_length: 300_000 },
    {
      id: "9router/one-million",
      name: "One Million",
      context_length: 1_000_000,
      capabilities: { contextWindow: 1_000_000 },
    },
    // capabilities-only metadata must work when context_length is absent.
    { id: "9router/capabilities-only-1m", capabilities: { contextWindow: 1_000_000 } },
    // A malformed top-level value must not hide a valid nested capability.
    {
      id: "9router/invalid-top-valid-cap",
      context_length: 0,
      capabilities: { contextWindow: 250_000 },
    },
    { id: "9router/invalid-zero", context_length: 0, capabilities: { contextWindow: 0 } },
    { id: "9router/invalid-negative", context_length: -5 },
    {
      id: "9router/invalid-string",
      context_length: "200000",
      capabilities: { contextWindow: "200000" },
    },
    { id: "9router/invalid-null", context_length: null, capabilities: { contextWindow: null } },
  ]);
}

test.beforeEach(() => {
  resetDb();
  delete process.env[ENV_KEY];
});

test.after(() => {
  delete process.env[ENV_KEY];
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("uses the synced service window for an unprefixed canonical model id", () => {
  seedServiceModels();
  const resolved = resolveTokenLimit(PROVIDER, "my-domestic");
  assert.equal(resolved.limit, 200_000);
  assert.equal(resolved.specific, true);
});

test("matches a prefixed synced entry and a prefixed caller model id", () => {
  seedServiceModels();
  assert.equal(resolveTokenLimit(PROVIDER, "9router/my-domestic").limit, 200_000);
  assert.equal(resolveTokenLimit(PROVIDER, "9router/bare-entry").limit, 300_000);
});

test("keeps a 1M synced window instead of falling back to 128k", () => {
  seedServiceModels();
  assert.equal(resolveTokenLimit(PROVIDER, "one-million").limit, 1_000_000);
  assert.equal(resolveTokenLimit(PROVIDER, "capabilities-only-1m").limit, 1_000_000);
});

test("manual DB override keeps precedence over the synced window", () => {
  seedServiceModels();
  assert.equal(setModelContextOverride(PROVIDER, "my-domestic", 500_000), true);
  const resolved = resolveTokenLimit(PROVIDER, "my-domestic");
  assert.equal(resolved.limit, 500_000);
  assert.equal(resolved.specific, true);
  assert.equal(resolveTokenLimit(PROVIDER, "9router/my-domestic").limit, 500_000);
});

test("env override keeps precedence over the synced window", () => {
  seedServiceModels();
  process.env[ENV_KEY] = "750000";
  const resolved = resolveTokenLimit(PROVIDER, "my-domestic");
  assert.equal(resolved.limit, 750_000);
  assert.equal(resolved.specific, true);
});

test("unknown service model keeps the generic 128k fallback", () => {
  seedServiceModels();
  const resolved = resolveTokenLimit(PROVIDER, "not-synced");
  assert.equal(resolved.limit, 128_000);
  assert.equal(resolved.specific, false);
});

test("synced window wins over a provider registry default", () => {
  saveServiceModels("gemini", [{ id: "gemini/custom-1m", context_length: 1_000_000 }]);
  assert.equal(resolveTokenLimit("gemini", "custom-1m").limit, 1_000_000);
});

test("synced window wins over the model-name heuristic", () => {
  saveServiceModels("not-a-real-provider", [
    { id: "not-a-real-provider/claude-custom", context_length: 300_000 },
  ]);
  assert.equal(resolveTokenLimit("not-a-real-provider", "claude-custom").limit, 300_000);
});

test("invalid synced windows are ignored", () => {
  seedServiceModels();
  for (const model of ["invalid-zero", "invalid-negative", "invalid-string", "invalid-null"]) {
    const resolved = resolveTokenLimit(PROVIDER, model);
    assert.equal(resolved.limit, 128_000, `${model} must fall back`);
    assert.equal(resolved.specific, false, `${model} must not be specific`);
  }
  // Valid nested capability wins when only the top-level value is malformed.
  assert.equal(resolveTokenLimit(PROVIDER, "invalid-top-valid-cap").limit, 250_000);
});

test("a build-local snapshot keeps service windows coherent without becoming a global cache", () => {
  seedServiceModels();
  const snapshot = createModelCapabilityResolutionSnapshot();
  assert.equal(resolveTokenLimit(PROVIDER, "my-domestic", snapshot).limit, 200_000);
  saveServiceModels(PROVIDER, [{ id: "my-domestic", context_length: 900_000 }]);
  assert.equal(resolveTokenLimit(PROVIDER, "my-domestic", snapshot).limit, 200_000);
  assert.equal(resolveTokenLimit(PROVIDER, "my-domestic").limit, 900_000);
  assert.equal(
    resolveTokenLimit(PROVIDER, "my-domestic", createModelCapabilityResolutionSnapshot()).limit,
    900_000
  );
});

test("a provider absent from the snapshot stays absent for that build", () => {
  const snapshot = createModelCapabilityResolutionSnapshot();
  saveServiceModels(PROVIDER, [{ id: "my-domestic", context_length: 700_000 }]);
  assert.equal(resolveTokenLimit(PROVIDER, "my-domestic", snapshot).limit, 128_000);
  assert.equal(resolveTokenLimit(PROVIDER, "my-domestic").limit, 700_000);
});

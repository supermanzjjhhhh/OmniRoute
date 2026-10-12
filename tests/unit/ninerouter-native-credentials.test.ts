import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-native-9router-"));
process.env.DATA_DIR = fixture;
process.env.NODE_ENV = "test";
process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";
const core = await import("../../src/lib/db/core.ts");
const db = core.getDbInstance();
db.prepare(
  "UPDATE version_manager SET status = ?, api_key = ?, port = ?, provider_expose = ? WHERE tool = ?"
).run("running", "nr_fixture_only", 20130, 1, "9router");
const { getProviderCredentials, getProviderCredentialsWithQuotaPreflight } =
  await import("../../src/sse/services/auth.ts");
const { updateSettings } = await import("../../src/lib/db/settings.ts");
const { recordModelLockoutFailure, clearAllModelLockouts } =
  await import("../../open-sse/services/accountFallback.ts");

test.after(() => {
  clearAllModelLockouts();
  core.resetDbInstance();
  fs.rmSync(fixture, { recursive: true, force: true });
});

for (const provider of ["9router", "nr"]) {
  test(`${provider}: native service does not need a provider connection row`, async () => {
    assert.equal(
      db.prepare("SELECT count(*) AS n FROM provider_connections WHERE provider = ?").get(provider)
        .n,
      0
    );
    const credentials = await getProviderCredentials(provider, null, null, "my-domestic");
    assert.ok(
      credentials,
      "Native executor must be reachable without a duplicated provider connection"
    );
    assert.equal(credentials.connectionId, "noauth");
    assert.equal(
      credentials.apiKey,
      null,
      "Service key belongs to the native executor, not the connection selector"
    );
  });
  test(`${provider}: quota wrapper preserves the native runtime identity`, async () => {
    const credentials = await getProviderCredentialsWithQuotaPreflight(
      provider,
      null,
      null,
      "my-domestic"
    );
    assert.ok(credentials);
    assert.equal(credentials.connectionId, "noauth");
  });
  test(`${provider}: excluded synthetic identity is not selected again`, async () => {
    assert.equal(
      await getProviderCredentials(provider, null, null, "my-domestic", {
        excludeConnectionIds: ["noauth"],
      }),
      null
    );
  });
  test(`${provider}: unrelated connection allowlist does not authorize the service`, async () => {
    assert.equal(
      await getProviderCredentials(provider, null, ["unrelated-user-connection"], "my-domestic"),
      null
    );
  });
  test(`${provider}: explicit synthetic allowlist permits the service`, async () => {
    assert.ok(await getProviderCredentials(provider, null, ["noauth"], "my-domestic"));
  });
  test(`${provider}: forcing a nonexistent ordinary connection cannot silently switch to the service`, async () => {
    assert.equal(
      await getProviderCredentials(provider, null, null, "my-domestic", {
        forcedConnectionId: "unrelated-user-connection",
      }),
      null
    );
  });
}
for (const provider of ["9router", "nr"]) {
  test(`${provider}: the single exclusion argument is normalized`, async () => {
    assert.equal(await getProviderCredentials(provider, " noauth ", null, "my-domestic"), null);
  });
  test(`${provider}: the synthetic identity can be explicitly pinned`, async () => {
    assert.ok(
      await getProviderCredentials(provider, null, null, "my-domestic", {
        forcedConnectionId: "noauth",
      })
    );
  });
  test(`${provider}: an exclusive lease cannot silently acquire a synthetic connection`, async () => {
    assert.equal(
      await getProviderCredentials(provider, null, null, "my-domestic", {
        lease: {
          apiKeyId: "fixture-client",
          mode: "acquire",
          context: { leaseOwnerId: "vlo_" + "A".repeat(43), generation: 1 },
        },
      }),
      null
    );
  });
  for (const blocked of ["9router", "nr"]) {
    test(`${provider}: blocklist entry ${blocked} remains authoritative`, async () => {
      await updateSettings({ blockedProviders: [blocked] });
      try {
        assert.equal(await getProviderCredentials(provider, null, null, "my-domestic"), null);
      } finally {
        await updateSettings({ blockedProviders: [] });
      }
    });
  }
  test(`${provider}: model-only cooldown is preserved without blocking other models`, async () => {
    recordModelLockoutFailure("9router", "noauth", "my-domestic", "model_capacity", 400, 1800_000);
    try {
      const locked = await getProviderCredentials(provider, null, null, "my-domestic");
      assert.ok(locked && "allRateLimited" in locked);
      assert.equal(locked.allRateLimited, true);
      assert.ok(await getProviderCredentials(provider, null, null, "different-fixture-model"));
    } finally {
      clearAllModelLockouts();
    }
  });
}
for (const provider of ["9router", "nr"]) {
  test(`${provider}: forced synthetic IDs use the existing whitespace normalization`, async () => {
    assert.ok(
      await getProviderCredentials(provider, null, null, "my-domestic", {
        forcedConnectionId: " noauth ",
      })
    );
    assert.ok(
      await getProviderCredentials(provider, null, null, "my-domestic", { forcedConnectionId: " " })
    );
  });
}

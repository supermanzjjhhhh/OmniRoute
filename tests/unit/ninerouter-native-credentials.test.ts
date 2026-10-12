import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-native-9router-"));
process.env.DATA_DIR = fixture;
process.env.NODE_ENV = "test";
process.env.INITIAL_PASSWORD = "fixture-only-management-password";
process.env.API_KEY_SECRET = "native-registration-fixture-only-secret";
process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";
const core = await import("../../src/lib/db/core.ts");
const { createProviderConnection, updateProviderConnection } =
  await import("../../src/lib/db/providers.ts");
const { getProviderCredentials } = await import("../../src/sse/services/auth.ts");
const { isManagedProviderConnectionId } = await import("../../src/lib/providers/catalog.ts");

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(fixture, { recursive: true, force: true });
});

test("embedded 9router uses the existing managed provider registration gate", () => {
  assert.equal(isManagedProviderConnectionId("9router"), true);
  assert.equal(isManagedProviderConnectionId("nr"), true);
  assert.equal(isManagedProviderConnectionId("cliproxyapi"), false);
  assert.equal(isManagedProviderConnectionId("unknown-provider"), false);
});

test("9router requires a normal active connection and preserves selection constraints", async () => {
  assert.equal(await getProviderCredentials("9router", null, null, "my-domestic"), null);
  const connection = await createProviderConnection({
    provider: "9router",
    authType: "apikey",
    name: "Native fixture",
    apiKey: "fixture-connection-key-not-service-key",
    isActive: true,
    testStatus: "active",
  });
  for (const provider of ["9router", "nr"]) {
    const selected = await getProviderCredentials(provider, null, null, "my-domestic");
    assert.equal(selected?.connectionId, connection.id);
    assert.equal(selected?.apiKey, "fixture-connection-key-not-service-key");
    assert.equal(await getProviderCredentials(provider, connection.id, null, "my-domestic"), null);
    assert.deepEqual(
      await getProviderCredentials(provider, null, ["not-this-connection"], "my-domestic"),
      { blockedByKeyPolicy: true, blockedCount: 1 }
    );
    assert.equal(
      await getProviderCredentials(provider, null, null, "my-domestic", {
        forcedConnectionId: "not-this-connection",
      }),
      null
    );
  }
  await updateProviderConnection(connection.id, { isActive: false });
  assert.equal(await getProviderCredentials("9router", null, null, "my-domestic"), null);
  await updateProviderConnection(connection.id, { isActive: true });
  assert.equal(
    (await getProviderCredentials("9router", null, null, "my-domestic"))?.connectionId,
    connection.id
  );
});

test("public provider API registers 9router without bypassing validation or management auth", async () => {
  const { POST } = await import("../../src/app/api/providers/route.ts");
  const { createApiKey } = await import("../../src/lib/db/apiKeys.ts");
  const admin = await createApiKey("Fixture admin", "fixture-machine", ["manage"]);
  const user = await createApiKey("Fixture user", "fixture-machine", ["chat"]);
  const post = (body: Record<string, unknown>, key = admin.key) =>
    POST(
      new Request("http://localhost/api/providers", {
        method: "POST",
        headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
        body: JSON.stringify(body),
      })
    );
  for (const provider of ["9router", "nr"]) {
    const response = await post({
      provider,
      name: `Fixture ${provider}`,
      apiKey: "managed-service-marker-not-a-secret",
    });
    assert.equal(response.status, 201);
    const payload = await response.json();
    assert.equal(payload.connection.provider, "9router");
    assert.equal(Object.hasOwn(payload.connection, "apiKey"), false);
  }
  assert.equal((await post({ provider: "cliproxyapi", apiKey: "fixture-marker" })).status, 400);
  assert.equal((await post({ provider: "9router" })).status, 400);
  assert.equal((await post({ provider: "9router", apiKey: "" })).status, 400);
  assert.equal(
    (await post({ provider: "9router", apiKey: "fixture-marker" }, user.key)).status,
    403
  );
});

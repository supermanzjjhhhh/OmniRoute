import { before, test } from "node:test";
import assert from "node:assert/strict";
import net from "node:net";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BRIDGE_SCRIPT = path.resolve(__dirname, "../../docker/vnc-browser/chromium/cdp-bridge.py");
// Picked at runtime instead of the container defaults (9222/9223): a host running its
// own Chromium/CDP endpoint on those ports made this suite fail with EADDRINUSE before
// it asserted anything. `let` because the values are reserved in `before()`.
let UPSTREAM_PORT = 9222; // SRC_PORT in cdp-bridge.py
let BRIDGE_PORT = 9223; // PUB_PORT in cdp-bridge.py
const TOKEN = "test-secret-token-12571";

/** Reserve two free loopback ports so the suite does not depend on 9222/9223 being idle. */
async function reserveFreePorts(): Promise<[number, number]> {
  const held: net.Server[] = [];
  const take = (): Promise<number> =>
    new Promise((resolve, reject) => {
      const probe = net.createServer();
      held.push(probe);
      probe.once("error", reject);
      probe.listen(0, "127.0.0.1", () => resolve((probe.address() as net.AddressInfo).port));
    });
  const first = await take();
  const second = await take();
  await Promise.all(held.map((s) => new Promise((r) => s.close(r))));
  return [first, second];
}

// before(), not at module scope: both tests below spawn the bridge against these ports.
before(async () => {
  [UPSTREAM_PORT, BRIDGE_PORT] = await reserveFreePorts();
});

function waitForListening(server: net.Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.once("listening", () => resolve());
    server.once("error", reject);
  });
}

function waitForBridgeReady(child: ChildProcessWithoutNullStreams): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("cdp-bridge.py did not report ready in time")),
      5000
    );
    child.stderr.on("data", (chunk: Buffer) => {
      if (chunk.toString("utf8").includes("forwarding")) {
        clearTimeout(timer);
        resolve();
      }
    });
    child.once("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
    child.once("exit", (code) => {
      clearTimeout(timer);
      reject(new Error(`cdp-bridge.py exited early with code ${code}`));
    });
  });
}

function startUpstream(): Promise<{ server: net.Server; receivedAnyBytes: () => boolean }> {
  let received = false;
  const server = net.createServer((socket) => {
    socket.on("data", () => {
      received = true;
    });
  });
  return waitForListening(server.listen(UPSTREAM_PORT, "127.0.0.1")).then(() => ({
    server,
    receivedAnyBytes: () => received,
  }));
}

function startBridge(): ChildProcessWithoutNullStreams {
  return spawn("python3", [BRIDGE_SCRIPT], {
    stdio: ["ignore", "ignore", "pipe"],
    env: {
      ...process.env,
      CDP_BRIDGE_TOKEN: TOKEN,
      CDP_BRIDGE_SRC_PORT: String(UPSTREAM_PORT),
      CDP_BRIDGE_PUB_PORT: String(BRIDGE_PORT),
    },
  });
}

test("cdp-bridge.py must not forward bytes from an unauthenticated peer (#12571)", async () => {
  const upstream = await startUpstream();
  const bridge = startBridge();

  try {
    await waitForBridgeReady(bridge);

    await new Promise<void>((resolve, reject) => {
      const client = net.createConnection({ host: "127.0.0.1", port: BRIDGE_PORT }, () => {
        client.write("GET /json/version HTTP/1.1\r\nHost: x\r\n\r\n");
      });
      client.once("error", reject);
      setTimeout(() => {
        client.destroy();
        resolve();
      }, 500);
    });

    assert.equal(
      upstream.receivedAnyBytes(),
      false,
      "cdp-bridge.py forwarded traffic from an unauthenticated peer straight to Chromium's CDP " +
        "port — the bridge has no auth/token check (see docker/vnc-browser/chromium/cdp-bridge.py)"
    );
  } finally {
    bridge.kill("SIGKILL");
    await new Promise<void>((resolve) => upstream.server.close(() => resolve()));
  }
});

test("cdp-bridge.py forwards bytes once the caller presents the configured token (#12571)", async () => {
  const upstream = await startUpstream();
  const bridge = startBridge();

  try {
    await waitForBridgeReady(bridge);

    await new Promise<void>((resolve, reject) => {
      const client = net.createConnection({ host: "127.0.0.1", port: BRIDGE_PORT }, () => {
        client.write(`GET /json/version HTTP/1.1\r\nHost: x\r\nX-Omni-Cdp-Token: ${TOKEN}\r\n\r\n`);
      });
      client.once("error", reject);
      setTimeout(() => {
        client.destroy();
        resolve();
      }, 500);
    });

    assert.equal(
      upstream.receivedAnyBytes(),
      true,
      "cdp-bridge.py should forward traffic once the caller presents the correct " +
        "CDP_BRIDGE_TOKEN"
    );
  } finally {
    bridge.kill("SIGKILL");
    await new Promise<void>((resolve) => upstream.server.close(() => resolve()));
  }
});

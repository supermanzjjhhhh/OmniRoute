import assert from "node:assert/strict";
import { after, describe, it } from "node:test";
import workerThreads from "node:worker_threads";
import { replaceWorker } from "./workerHarness.ts";
import {
  isCompressionWorkerEligible,
  isStrictlySerializable,
} from "../../../open-sse/services/compression/compressionWorkerProtocol.ts";
import {
  closeCompressionWorkerPoolForTests,
  CompressionWorkerPool,
} from "../../../open-sse/services/compression/compressionWorkerPool.ts";
import {
  applyCompression,
  applyCompressionAsync,
} from "../../../open-sse/services/compression/strategySelector.ts";
import type { CompressionConfig } from "../../../open-sse/services/compression/types.ts";
import { clearMemoStore, getMemoStats } from "../../../open-sse/services/compression/resultMemo.ts";

const body = {
  model: "gpt-test",
  messages: [
    { role: "system", content: "Answer accurately." },
    {
      role: "user",
      content:
        "Please basically actually simply carefully help with this very important task. ".repeat(
          80
        ),
    },
  ],
};
const config = {
  enabled: true,
  defaultMode: "stacked",
  autoTriggerTokens: 1,
  cacheMinutes: 0,
  preserveSystemPrompt: true,
  stackedPipeline: [{ engine: "rtk" }, { engine: "caveman" }],
} as CompressionConfig;

function comparable<T extends { stats: { durationMs?: number; timestamp: number } | null }>(
  result: T
) {
  if (!result.stats) return result;
  const {
    durationMs: _duration,
    timestamp: _timestamp,
    engineBreakdown,
    ...stats
  } = result.stats as T["stats"] & {
    engineBreakdown?: Array<Record<string, unknown>>;
  };
  const stableBreakdown = engineBreakdown?.map(({ durationMs: _stepDuration, ...step }) => step);
  return {
    ...result,
    stats: {
      ...stats,
      ...(stableBreakdown ? { engineBreakdown: stableBreakdown } : {}),
    },
  };
}

after(() => closeCompressionWorkerPoolForTests());

describe("compression worker eligibility", () => {
  it("accepts only standard, rtk, and approved rtk+caveman stacks", () => {
    assert.equal(isCompressionWorkerEligible(body, "standard", { config }), true);
    assert.equal(isCompressionWorkerEligible(body, "rtk", { config }), true);
    assert.equal(isCompressionWorkerEligible(body, "stacked", { config }), true);
    for (const mode of ["off", "lite", "aggressive", "ultra", "omniglyph"] as const) {
      assert.equal(isCompressionWorkerEligible(body, mode, { config }), false);
    }
    for (const engine of ["llmlingua", "omniglyph", "ccr", "session-dedup", "ultra"]) {
      assert.equal(
        isCompressionWorkerEligible(body, "stacked", {
          config: { ...config, stackedPipeline: [{ engine }] } as CompressionConfig,
        }),
        false
      );
    }
  });

  it("rejects functions, symbols, classes, special objects, cycles, and non-finite numbers", () => {
    for (const value of [
      () => undefined,
      Symbol("x"),
      new Date(),
      new Map(),
      new Set(),
      /x/,
      NaN,
      Infinity,
    ]) {
      assert.equal(isStrictlySerializable(value), false);
    }
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;
    assert.equal(isStrictlySerializable(cyclic), false);
  });
});

describe("compression worker execution", () => {
  it("offloads eligible calls with omitted optional fields to a real worker", async (t) => {
    await closeCompressionWorkerPoolForTests();
    t.after(() => closeCompressionWorkerPoolForTests());
    const NativeWorker = workerThreads.Worker;
    let workers = 0;
    replaceWorker(t, (filename, options) => {
      workers++;
      return new NativeWorker(filename, options);
    });
    const result = await applyCompressionAsync(body, "standard", { config });
    assert.equal(result.compressed, true);
    assert.equal(workers, 1);
  });

  for (const mode of ["standard", "rtk", "stacked"] as const) {
    it(`preserves principal-scoped memoization around ${mode} worker execution`, async (t) => {
      clearMemoStore();
      t.after(clearMemoStore);
      const input =
        mode === "rtk"
          ? {
              messages: [
                { role: "tool", content: Array.from({ length: 20 }, () => "same line").join("\n") },
              ],
            }
          : body;
      const options = {
        config: { ...config, memoizeCompressionResults: true },
        principalId: "worker-principal-a",
      };
      const first = await applyCompressionAsync(input, mode, options);
      assert.equal(first.compressed, true);
      first.body.injected = "caller mutation";
      const second = await applyCompressionAsync(input, mode, options);
      assert.equal(second.stats?.memoHit, true);
      assert.equal(second.body.injected, undefined);
      assert.equal(getMemoStats().size, 1);

      const other = await applyCompressionAsync(input, mode, {
        ...options,
        principalId: "worker-principal-b",
      });
      assert.equal(other.compressed, true);
      assert.notEqual(other.stats?.memoHit, true);
      assert.equal(getMemoStats().size, 2);

      const controller = new AbortController();
      controller.abort();
      const aborted = await applyCompressionAsync(input, mode, {
        ...options,
        signal: controller.signal,
      });
      assert.deepEqual(aborted, { body: input, compressed: false, stats: null });
      assert.equal(getMemoStats().hits, 1);
    });
  }

  it("does not memoize a temporary worker failure", async (t) => {
    await closeCompressionWorkerPoolForTests();
    clearMemoStore();
    t.after(clearMemoStore);
    t.after(() => closeCompressionWorkerPoolForTests());
    const NativeWorker = workerThreads.Worker;
    let attempts = 0;
    let now = Date.now();
    t.mock.method(Date, "now", () => now);
    replaceWorker(t, (filename, options) => {
      if (++attempts === 1) throw new Error("synthetic worker unavailable");
      return new NativeWorker(filename, options);
    });
    const options = {
      config: { ...config, memoizeCompressionResults: true },
      principalId: "worker-principal",
    };
    const fallback = await applyCompressionAsync(body, "standard", options);
    assert.deepEqual(fallback, { body, compressed: false, stats: null });
    assert.equal(getMemoStats().size, 0);
    now += 1_001;
    const recovered = await applyCompressionAsync(body, "standard", options);
    assert.equal(recovered.compressed, true);
    const cached = await applyCompressionAsync(body, "standard", options);
    assert.equal(cached.stats?.memoHit, true);
    assert.equal(attempts, 2);
  });

  it("matches the synchronous body and stats except timing fields", async () => {
    const sync = applyCompression(body, "stacked", { config });
    const async = await applyCompressionAsync(body, "stacked", { config });
    assert.deepEqual(comparable(async), comparable(sync));
  });

  it("preserves Responses bodies and hard-budget results", async () => {
    const responsesBody = {
      model: "gpt-test",
      input: [{ role: "user", content: [{ type: "input_text", text: "word ".repeat(600) }] }],
    };
    const hardBudgetConfig = { ...config, targetTokens: 100 };
    const sync = applyCompression(responsesBody, "stacked", { config: hardBudgetConfig });
    const async = await applyCompressionAsync(responsesBody, "stacked", {
      config: hardBudgetConfig,
    });
    assert.deepEqual(comparable(async), comparable(sync));
  });

  it("preserves explicit connection caching overrides in the worker", async (t) => {
    await closeCompressionWorkerPoolForTests();
    t.after(() => closeCompressionWorkerPoolForTests());
    const NativeWorker = workerThreads.Worker;
    let workers = 0;
    replaceWorker(t, (filename, options) => {
      workers++;
      return new NativeWorker(filename, options);
    });
    const input = {
      model: "openai/gpt-4",
      messages: [{ role: "system", content: "Agent timestamp 1700000000." }, body.messages[1]],
    };
    for (const supportsPromptCaching of [false, true]) {
      const options = {
        config: { ...config, quantumLock: { enabled: true } },
        cachingContext: {
          provider: "openai",
          connectionCacheOverride: { supportsPromptCaching },
        },
      };
      const sync = applyCompression(input, "standard", options);
      const async = await applyCompressionAsync(input, "standard", options);
      assert.equal(async.compressed, true);
      assert.deepEqual(comparable(async), comparable(sync));
      if (!supportsPromptCaching) assert.equal(async.stats?.quantumLock, undefined);
    }
    assert.equal(workers, 1);
  });

  it("relays per-engine progress from the worker", async () => {
    const steps: string[] = [];
    await applyCompressionAsync(body, "stacked", {
      config,
      onEngineStep: (step) => steps.push(step.engine),
    });
    assert.deepEqual(steps, ["rtk", "caveman"]);
  });

  it("fails open without inline compression when a job times out", async () => {
    const pool = new CompressionWorkerPool({ size: 1, timeoutMs: 1, idleMs: 100 });
    try {
      const result = await pool.run(body, "stacked", { config });
      assert.deepEqual(result, { body, compressed: false, stats: null });
    } finally {
      await pool.close();
    }
  });

  it("keeps the parent event loop responsive while two workers overlap", async (t) => {
    const pool = new CompressionWorkerPool({ size: 2 });
    t.after(() => pool.close());
    const largeBody = {
      messages: Array.from({ length: 100 }, (_, index) => ({
        role: "user",
        content: `message ${index} ` + "basically actually simply ".repeat(100),
      })),
    };
    let ticked = false;
    const tick = new Promise<void>((resolve) =>
      setTimeout(() => {
        ticked = true;
        resolve();
      }, 0)
    );
    const jobs = Promise.all([
      pool.run(largeBody, "standard", { config }),
      pool.run(largeBody, "standard", { config }),
    ]);
    assert.equal(pool.getSummary().activeJobs, 2);
    await tick;
    assert.equal(ticked, true);
    assert.ok((await jobs).every((result) => result.compressed));
    assert.equal(pool.getSummary().completedJobs, 2);
  });

  it("keeps AbortSignal out of wire options and never compresses inline after cancellation", async () => {
    const controller = new AbortController();
    const result = await applyCompressionAsync(body, "standard", {
      config,
      signal: controller.signal,
    });
    assert.equal(result.compressed, true);
    controller.abort();
    const cancelled = await applyCompressionAsync(body, "standard", {
      config,
      signal: controller.signal,
    });
    assert.equal(cancelled.compressed, false);
    assert.equal(cancelled.body, body);
  });

  it("executes RTK tool-output compression in a native worker", async (t) => {
    const pool = new CompressionWorkerPool({ size: 1 });
    t.after(() => pool.close());
    const toolBody = {
      messages: [
        { role: "tool", content: Array.from({ length: 20 }, () => "same noisy line").join("\n") },
      ],
    };
    const result = await pool.run(toolBody, "rtk", { config });
    assert.equal(result.compressed, true);
    assert.deepEqual(comparable(result), comparable(applyCompression(toolBody, "rtk", { config })));
    assert.equal(pool.getSummary().completedJobs, 1);
  });
});

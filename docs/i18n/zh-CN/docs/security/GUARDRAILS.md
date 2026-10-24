# Guardrails (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **权威来源：** `src/lib/guardrails/`
> **最后更新：** 2026-10-17 — v3.8.52（新增[覆盖范围与限制](#coverage-and-limits)：
> 钩子覆盖哪些路由和响应路径、合并后的禁用请求头 (#16412)、将注入
> 阻断模式作为强制边界 (#16413)，以及哪些组件会在调用后处理之前接触到响应）

护栏在 OmniRoute 与上游提供者之间的边界上实施安全防护、策略控制和内容转换。
每个护栏都可以检查请求载荷 (`preCall`) 和
上游响应 (`postCall`)，并可选择拒绝、转换或添加注解。

系统采用**故障放行**机制：如果护栏在执行期间抛出异常，注册表
会记录错误并继续执行下一个护栏，而不是使
请求失败。阻断必须是显式决策 (`block: true`)，绝不会因意外而触发。
唯一的例外是请求被中止：当调用方的 `signal` 被中止时，
抛出异常的护栏会使本次钩子执行失败，而不是被跳过。

这些钩子**并非**在每条路由或每个响应上都会运行。在将护栏用作
安全控制措施之前，请先阅读
[覆盖范围与限制](#coverage-and-limits)。

## 内置护栏

注册表在导入时按优先级顺序自动加载六个护栏
（参见 `registry.ts` → `registerDefaultGuardrails()`）：

| 优先级 | 名称                | 阶段           | 文件                  |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

优先级数值越小，执行顺序**越靠前**。

### 视觉桥接 (`visionBridge.ts`) — 模态桥接 PR-1

GLM 5.3 基础模型和 `glm-5.3-{low,high,max}` 在注册表/规格元数据中
明确标记为 `supportsVision:false`。GLM 5.3 Flash 变体
仍为原生视觉模型。Claude Code 的 `/v1/messages` 路由会在
Claude 到 OpenAI 的转换**之前**进入共享的 `handleChat` 调用前护栏链；
嵌套的 `Read` 工具结果中的图像必须先被描述或处理，
然后该转换才会将其提升为 OpenAI `image_url` 内容 (#17069)。

拦截发往**非视觉模型**的含图像请求，并将
整个请求重新路由到支持视觉的模型，或在
调用上游之前，使用可配置的视觉模型生成文本描述，以替换
图像部分。这使纯文本提供者能够透明地处理
多模态载荷。

流程：

1. 如果目标模型已支持视觉，则跳过（除非它出现在
   强制桥接列表 `isVisionBridgeForcedModel` 中）。
2. 通过 `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) 提取图像部分，该函数委托给
   `open-sse/utils/mediaParts.ts` 中的**统一媒体检测器** `detectMediaParts()` —
   这是与组合兼容性过滤器共享的唯一权威来源。
   提取操作仅允许处理 `replaceImageParts` 能够拼接
   回去的结构（提取↔替换契约）：OpenAI `image_url`、Anthropic base64
   `source.type:"base64"`、Anthropic URL `source.type:"url"` 和 Responses
   API `input_image`。嵌套在 Claude Code
   `tool_result.content` 和 Responses 工具输出中的匹配图像也会被提取，
   并在原始路径处替换；仅作为指示的结构供组合过滤器使用，
   不会被提取。
   如果未找到任何图像，则跳过。
3. 通过 `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) 解析运行时配置：新的 `modalityBridge*`
   设置键优先；旧版 `visionBridge*` 键仅作为**一个周期内的
   回退选项**保留（回滚窗口）。桥接禁用时，在遍历任何媒体之前即跳过。
4. 模式选择器（`modalityBridgeVisionMode`，见下表）决定
   是重新路由还是生成描述。重新路由会返回仅替换了 `model`
   的 `modifiedPayload`，以及元数据 `{ rerouted, fromModel, toModel, imagesKept }`。
5. 描述路径：将图像数量限制为 `maxImages`，构造任务感知提示词，
   查询描述缓存，**并行**调用视觉模型
   (`Promise.allSettled`)，并在原位置插入 `[Image N]: <description>` 文本部分。
   描述失败时返回 `null`：对于未知或支持视觉的目标，保留原始图像
   (#4012)；但对于**已确认仅支持文本的直接
   目标**或不具备任何视觉能力的组合，则会为每张未获得描述的图像插入明确的
   `(unavailable — no vision-capable provider connected)` 文本占位内容，
   包括部分失败的图像以及超出
   描述调用数量上限的图像 (#17069)。现有的组合描述全部失败时的回退机制
   保持不变 (#8430)。
6. 返回 `modifiedPayload` 和元数据（`imagesProcessed`、`descriptions`、
   `processingTimeMs`、`visionModel`）。

#### 模式选择器 (`modalityBridgeVisionMode`)

| 模式       | 默认 | 行为                                                                                                                                                                                        |
| ---------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔    | 保持不变的旧版启发式逻辑 (#6640/#7204)：非组合模型/`auto/` 模型会重新路由到最佳视觉模型，除非原始模型已具备可用凭据（此时执行描述）；组合目标始终执行描述。                                 |
| `describe` |      | 始终执行描述 — 完全跳过重新路由代码块；始终由用户选择的模型回答。                                                                                                                           |
| `reroute`  |      | 强制重新路由：绕过保留已有凭据模型的保护检查。重新路由**目标**的凭据检查仍然适用 — 当不存在可用的视觉目标时，桥接层会阻止请求并返回明确的错误，而不是执行描述或将原始图像发送到纯文本目标。 |

强制模式会在自动启发式逻辑运行**之前**短路退出；`auto` 行为
与 PR-1 之前的防护逻辑在字节级别完全一致。

#### API 密钥作用域 (`visionBridgeKeyScope.ts`)

当调用方的 API 密钥限制了 `allowedConnections`、配额池
(`allowedQuotas`) 或模型 (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) 时，桥接层只会
在该密钥可使用的连接上，选择该密钥获准使用的重新路由模型和描述模型。
随后，描述调用始终通过 OmniRoute 自环发起，并带上
`x-omniroute-self-loop-key-id` 请求头，以便接收端的聊天请求
再次强制执行该密钥的连接和模型策略。`enforceApiKeyPolicy()`
仅在该请求头与自环 bearer 凭据同时存在时才予以认可，因此它只能
收窄访问权限；无法解析的 ID 会被拒绝。

如果该密钥没有获准使用任何视觉模型，**已确认的纯文本
目标**会在本地拒绝图像请求，返回明确的 HTTP 400，而不是
将图像字节转发给不具备处理能力的上游 (#17069)。对于视觉能力
未知或原生支持视觉的目标，描述路径保留此前的
失败放行行为（元数据 `{ skipped: true, reason: "no_permitted_vision_model" }`）。
不带密钥的请求，以及没有这些限制的密钥，其行为与
之前完全相同。

#### 任务感知描述提示词 (`modalityBridgeVisionTaskAware`)

默认值为 **true**。`composeVisionPrompt()` (`visionBridgeHelpers.ts`) 会将
**最后一条用户消息**的文本（截断至 500 个字符）追加到基础
描述提示词中，引导描述聚焦于用户实际提出的问题
（codex-vision-proxy 模式），并要求视觉模型转录可见
文本。关闭此标志时 — 或没有用户文本时 — 会原样使用基础提示词。

描述自环自身的 OpenAI 兼容请求（`visionBridgeHelpers.ts` 中的 `callVisionModelSingle()`）
始终请求 `image_url.detail: "high"` —
对所有调用方/提供者无条件生效，不受任何客户端信号控制。
低细节采样会降低 OCR 准确率，而这恰恰是此提示词所要求的
文本转录任务，因此无论原始入站请求使用何种细节级别，
描述调用自身始终请求高细节。
这只影响内部描述请求体；不会改变
OmniRoute 在主请求中转发调用方自身 `image_url.detail` 的方式 —
该默认值在 `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`)
中单独应用，且仅适用于检测到的 OpenCode 客户端。
描述自环的 Anthropic 传输格式分支没有 `detail` 字段，
因此不受这两个默认值的影响。

#### 描述输出上限 (`modalityBridgeVisionMaxChars`)

| 键                             | 默认值 | 范围             |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` 或 100–50000 |

`0`（默认值）表示**无上限** — `callVisionModel()`
返回的描述将原样传递，保留现有
行为。100–50000 范围内的任何值都会截断描述，并添加
`…` 后缀，然后再以 `[Image N]: <description>` 的形式拼接回去
（`src/lib/guardrails/visionBridge.ts` 中的 `VisionBridgeGuardrail.preCall()`）。
对于需要大量细节、且下游模型需要
完整转录结果的 OCR 任务，可提高此值；对于输出冗长的视觉模型，可降低此值以限制 token 用量。
控制面板中的该字段位于“视觉”选项卡的“高级”面板中
（`ModalityBridgeVisionTab.tsx` 中的 `modality-bridge-max-chars`），会将
1 到 99 之间的任何值提升至下限 100，同时保留显式设置的 `0`
不变 — `0` 本身就是有效的 Zod 值
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)，而不仅仅是
“未设置”时的默认值。

#### 描述缓存 (`modalityBridge/bridgeCache.ts`)

用于描述输出的内存 LRU + TTL 缓存，在整个进程内共享。
键 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`，采用
长度前缀分帧（不会发生字段边界碰撞）。模型部分使用的是
**配置的**桥接模型，而不是实际回答的模型 —
`callVisionModel` 可能在内部回退，按每次尝试生成键会导致
缓存碎片化。失败的描述调用绝不会被缓存。设置：

| 键                              | 默认值 | 范围    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 远程图像规范化（自循环 describe/base64 获取）

当桥接器自行获取**远程**图像时——包括 Anthropic describe
自调用和 claude-wire-format base64 转换
（`ensureBase64ImagesForClaudeWire`），两者均通过
`visionBridgeHelpers.ts` 中的 `fetchRemoteImageAsDataUri()` 完成——生成的数据
URI 会先经过 `normalizeDataUri()`
（`open-sse/utils/imageNormalize.ts`）处理，再嵌入视觉模型
请求。超大图像会缩小至**长边 2048px**（与
OpenAI/Anthropic 在服务端已采用的尺寸上限一致），从而减少
上传字节数和延迟，同时不改变视觉模型看到的内容。缩放
使用通过动态导入加载的 `sharp`：如果某个平台无法加载其原生
二进制文件，`normalizeDataUri()` **绝不会抛出异常**——它会回退为
直接透传原始字节，因此 describe/base64 转换
路径始终能够正常工作。非图像字节（获取结果并非
可解码的图像）也会原样透传。此规范化处理
仅限于桥接器为自身自调用而获取的图像——绝不会
应用于调用方的原始透传载荷，这符合
仅在显式选择后才进行修改的原则（硬性规则 #20）。

#### 设置模式 + 迁移

新增的 `modalityBridge*` 键在 `updateSettingsSchema`
（`src/shared/validation/settingsSchemas.ts`）中通过 Zod 验证：`modalityBridgeVisionEnabled`、
`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、
`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、
`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、
`modalityBridgeVisionMaxChars`、三个 `modalityBridgeCache*` 键，以及
音频桥接器使用的 `modalityBridgeAudio*` 键组。迁移
`141_modality_bridge_settings.sql` 会将现有旧版
`visionBridge*` 值复制到对应的新键（幂等，绝不会覆盖
运维人员设置的 `modalityBridge*` 值）；旧键在一个发布周期内仍可
作为读取回退项使用。

#### 透明性响应头 + 统计信息

经过 describe 转换的响应会携带
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
（由 `modalityBridge/bridgeStats.ts` 中的 `buildModalityBridgeHeader()` 构建，
由 `src/sse/handlers/chatHelpers.ts` 中的 `withModalityBridgeHeader()` 写入）。
重新路由的请求**不带**此响应头——载荷未被修改，而且模型
切换已体现在响应体的 `model` 字段中。

`GET /api/modality-bridge/stats`（使用管理身份验证，与
`GET /api/settings` 属于同一级别）返回内存中按模态划分的计数器
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`，涵盖 `vision`、`audio` 和
`video`。`averageLatencyMs` 使用 `latencySamples` 而非所有尝试次数作为
分母；未计时的操作不会凭空生成一个零毫秒
样本。`bridged` 仍是成功转换次数的向后兼容别名；
失败的尝试不会使其递增。
计数器按设计会在进程重启时重置
（用于遥测，而非记账）。

#### 仪表盘配置

专用仪表盘页面位于
`/dashboard/settings/modality-bridge`。其中可通过 URL 定位的 `Vision`、`Audio`
和 `Video` 选项卡在切换 `tab` 值时会保留查询参数。
视觉选项卡提供启用开关、模式、模型选择（包括自动
默认项）、任务感知提示、高级超时/图像数量/描述长度/缓存
限制、运行时
计数器，以及带保护措施的示例请求。音频选项卡也已可用：它提供
启用开关、带自动选项且仅限 STT 的模型选择器、超时/最大音频片段限制、音频
计数器，以及 `input_audio` 示例测试。视频选项卡已具备完整功能：它报告
FFmpeg/ffprobe 运行时状态——四种明确的界面状态之一（探测
正在进行或无法完成时为 `unknown`，在非回环
仪表盘主机上由客户端跳过探测时为 `restricted`，探测完成
并确认缺失时为 `unavailable`，或为 `available` 并显示 FFmpeg/ffprobe 版本）——持久化保存
启用/模型/帧数/视频数量/超时限制，将模型选择器筛选为支持视觉的
模型，并提供视频计数器。

原先 AI 设置中的视觉桥接器卡片现为指向
新页面的兼容链接；它不再维护第二份表单。媒体提供者也会
将图像转文本和语音转文本工作流链接到对应的模态
桥接器选项卡，同时保留现有的语音转文本试验场。

**自循环准入绕过：**当 describe 调用通过 OmniRoute
自身的 `/v1` 自循环路由时（非标准提供者模型），子请求会发送
`x-omniroute-admission-bypass: internal`，并使用解析得到的
自循环凭据进行身份验证——本地模式下使用本地 `sk_omniroute` 哨兵值，或使用
运维人员配置的 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 环境变量密钥（#1350），以便
`REQUIRE_API_KEY=true` 部署仍能运行 describe 调用。此绕过
仅对这些确切的凭据生效，因此外部客户端无法利用该
请求头跳过准入检查。

旧版默认值位于 `src/shared/constants/visionBridgeDefaults.ts`；
新的模式/任务感知/缓存默认值以及设置解析器位于
`src/shared/constants/modalityBridgeDefaults.ts`。防护机制提供
`deps` 构造函数选项，以便测试注入模拟的 `getSettings` 和
`callVisionModel` 实现。

### 音频桥接器（`audioBridge.ts`）— 模态桥接器 PR-3

在含音频的聊天请求到达未明确支持
音频输入的目标之前将其拦截。它绝不会重新路由聊天请求：音频部分会
通过现有的 OpenAI 兼容 multipart 端点进行转录，
选定的聊天模型随后使用文本转录内容继续处理。

流程：

1. 通过 `getResolvedModelCapabilities()` 解析 `supportsAudio`。显式的
   提供者注册表元数据优先，其次是静态模型元数据，最后是同步的
   `modalities_input`。已声明的输入列表若不包含 `audio`，则结果为 `false`；没有
   能力证据时仍为 `null`。`false` 和 `null` 都会启用
   保守桥接，而 `true` 则会绕过桥接。
2. 解析 `modalityBridgeAudio*` 设置，并通过共享的 `detectMediaParts()`
   检测器从每条消息中提取可拼接替换的顶层音频部分。
   支持的传输格式包括 OpenAI `input_audio`、`audio_url` 和
   `source.media_type: "audio/*"`。嵌套音频会被检测出来以用于路由，但不会
   被拼接替换路径移除。处理数量受 `modalityBridgeAudioMaxClips` 限制；
   超出限制的后续部分保持不变。
3. 遵循已配置的 `provider/model`，或让 `selectAudioBridgeModel()` 按
   稳定的目录顺序遍历 `AUDIO_TRANSCRIPTION_PROVIDERS`，并选择第一个
   具有可用且处于活跃状态的提供者凭据的模型。
4. `callAudioTranscription()` 将 base64/data-URI 音频转换为 multipart
   `file`，或通过具备 DNS 固定功能、仅允许访问公网地址的出站
   防护机制下载远程 `audio_url`，大小上限为 25 MB。随后，它将文件和所选
   模型通过 POST 发送到本地 `/v1/audio/transcriptions` 自回环接口，并使用
   `resolveSelfLoopBearer()` 进行身份验证。现有的转录路由会执行常规的
   凭据查找、冷却/速率限制处理以及提供者分发。
5. 成功的调用会将对应部分替换为 `[Audio N]: <transcript>`。调用
   使用 `Promise.allSettled` 运行：单个调用失败时会保留其原始
   音频部分（#4012 约定）。如果所有调用均失败，且目标已确认
   `supportsAudio === false`，则这些部分会变为
   `[Audio N]: (unavailable — no STT provider connected)`（#8430 约定）。对于
   能力未知的目标（`null`），全部失败时内容保持不变。对于已确认
   仅支持文本的目标，若没有可用的 STT 凭据，则不发起网络调用，
   直接使用同样的显式占位内容。

成功的转录结果会使用进程级的 Modality Bridge LRU/TTL 缓存。
缓存键由音频引用、稳定的 `audio-transcription` 操作
标签和所选 STT 模型组合而成；失败结果从不缓存。音频处理尝试会更新
共享的 `bridged`、`cacheHits`、`failures` 和 `lastUsedAt` 计数器。
经过转换的响应会携带
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`；未经修改的
请求不会获得 Audio Bridge 片段。

运行时设置存储在数据库中，并通过 Zod 验证：

| 键                            | 默认值  | 范围          |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | 自动或 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

共享缓存仍由 `modalityBridgeCacheEnabled`、
`modalityBridgeCacheTtlMinutes` 和 `modalityBridgeCacheMaxEntries` 控制。

### 视频桥接（`videoBridge.ts`、`videoBridgePipeline.ts`）

在调用尚未确认具有原生视频支持的目标之前，拦截 Chat Completions `messages` 和 Responses
API `input` 中的顶层视频部分。
支持的格式包括 `input_video`、`video_url`、`video_source`、HTTPS URL
以及 `data:video/*;base64,...` 数据 URI。文本中的普通文件名不会被视为
视频。

`VideoBridgeGuardrail.preCall`（`videoBridge.ts`）负责请求遍历、
能力/策略检查、单次请求内的聚合以及响应载荷。
单个视频的处理工作——获取视频、缓存完整结果、描述帧
序列（其中会融合调用方声明的任何音频转录文本），以及每次尝试的
指标记录/中止/清理——均封装在
`videoBridgePipeline.ts` 的 `processVideoPart` 中，由 `preCall` 的循环针对每个视频部分调用一次。
该模块还定义了明确的端口边界 `VideoMediaBrokerPort`
（获取字节并提取采样帧）、`VideoAudioTranscriptionPort`
（将调用方声明的音频转录文本与采样帧描述融合）以及
`VideoDrilldownPort`（帧下钻的持久化边界；尚未接入
`processVideoPart`——目前只有独立的 `/api/modality-bridge/video/drilldown`
路由会写入下钻条目）。

对外公开的 `/v1` 请求路径从不导入或调用子进程。远程
视频下载大小上限为 50 MiB；内联 base64 视频则采用
保守的单视频解码后大小上限 36 MiB，以便模型、消息和封装结构
仍能处于公开 JSON 请求 50 MiB 的准入限制之内。内联
长度和解码后大小估算会在分配内存之前进行检查。初始远程 URL
及每次重定向都必须使用 HTTPS，并通过现有的
具备 DNS 固定功能、仅允许访问公网地址的出站防护机制进行访问。随后，这些字节会经过明确的内部
`POST /api/modality-bridge/video/extract` 代理边界。该路由同时具有
`LOCAL_ONLY` 和 `SPAWN_CAPABLE` 属性，仅接受经过进程级身份验证的
可信回环请求，且从不接受 URL、文件系统路径、可执行文件
或参数列表。API 请求体大小处理流水线和处理器的增量请求体
读取器各自独立实施 50 MiB 的代理输入上限。其有界队列
每次运行一个提取任务，允许四个待处理任务，并将待处理输入总量限制为
100 MiB。

在代理内部，`ffprobe` 读取私有本地文件；固定的格式
允许列表排除了播放列表和清单格式。对于允许的 MOV 系列
容器，外部 MOV 数据引用默认仍处于禁用状态，且
固定命令不会启用它们。`ffprobe` 和 `ffmpeg` 均使用
仅允许 `file` 的协议白名单、单线程、固定参数数组，不使用 shell，
并从 `PATH` 解析可执行文件。作为附件图片的封面流不属于
可播放候选流。所有可播放流都必须满足限制，并且优先选择
显式指定的默认流，否则以确定性方式回退到索引最小的流。
视频限制为 600 秒，每个维度不超过 8,192 像素，
源像素总数不超过 33,554,432。FFmpeg 采样 1–16 个中点 JPEG 帧，将
长边缩小至最多 1,024 像素，不放大较小的输入，并且
绝不接收 URL。采样策略默认为 `uniform`。可选的
`scene_aware` 和实验性的 `segment_aware` 策略会对已验证的
本地流额外执行一次固定的 FFmpeg 处理，选择数量受限的
`showinfo` 场景时间戳，并在检测器失败、超时、输出格式错误或
候选集为空时，以确定性方式回退到相同的
均匀分布中点。片段感知模式根据已验证的场景区间按比例分配
中点样本；片段感知证据及回退行为
详见下文。所有策略都会在选择完成后应用
16 帧的硬性上限。当场景感知请求的预算仅为
一帧时，它会使用当前完整视频或聚焦
窗口的均匀采样中点，并报告 `policyEffective: uniform`：单个选中的场景帧
无法同时保留时间轴两端的信息。调用方可以选择提供
有限的聚焦窗口（`start`/`end`，单位为秒）；边界会被限制在媒体
时长范围内，起止颠倒或非有限的窗口会被拒绝，所有采样
策略都仅在规范化后的区间内执行。最终
窗口会包含在采样元数据和不可信描述
前缀中，以便下游模型区分聚焦片段与完整
时间轴。

语义描述聚焦是一项独立的显式设置。默认的 `full`
分析模式保留现有的帧提示词，且绝不会将请求
文本转发给描述模型。在 `focused` 模式下，桥接层仅读取同一 Chat 或 Responses
容器中最新的、非空的、由用户编写的 `text`/`input_text`，
将其规范化为 NFC，合并控制字符和空白字符，
并将其限制为 500 个 Unicode 码点。若结果为空，则回退到
完全相同的 `full` 提示词。可用提示会以 JSON 形式序列化到专用的
不可信用户上下文块中，且只能用于优先关注可观察到的细节；
它不能覆盖另一条独立警告，即不得遵循媒体中可见
或可听到的指令。文本聚焦绝不会推断 `start`/`end`，也不会改变
时间采样器。

#### FU-07 结构性片段证据

`segment_aware` 对已验证的
本地视频流执行一次受限的预分析处理。固定的滤镜链首先将宽度缩放至最多 320 像素，
检测场景变化和画面冻结区间，然后以每秒 1 帧
的频率采样，以获取模糊度、平均亮度以及空间/时间信息。该处理
最多采集 600 个结构性样本，使用一个 FFmpeg/滤镜线程、相同的
仅允许 `file` 的协议白名单和容器允许列表，进程输出上限为 1 MiB，
并在代理共享的中止/截止时间约束内最多运行 30 秒。它绝不
接受来自请求的命令、滤镜、路径或 URL。

这些结构性数值是确定性采样证据，而非对视频的语义
理解。它们不会推断主体、动作、描述、语音或用户
意图。场景边界和冻结边界构成片段；冻结覆盖率、模糊度、
曝光、空间细节和时间变化仅影响现有
1–16 帧预算的分配方式。完全冻结的片段最多分配一帧，
非冻结片段则竞争剩余预算。当边界
数量超过帧数时，会保留对时间轴的均匀覆盖，以免开头密集的快速切换
掩盖较长的末尾片段。与冻结边界相距不超过 1 秒
分析分辨率的场景边界会被合并。

滤镜缺失、证据格式错误或为空、检测器错误，或受限的
预分析超时，都会采用故障开放行为，回退到完全相同的均匀中点策略。调用方
中止或代理截止时间到达时则不会采用故障开放行为：它会终止正在运行的
子进程，阻止后续帧提取，并在 `finally` 中
删除私有临时目录树。

`scripts/perf/video-bridge-fu07-eval.ts` 生成确定性的真实 FFmpeg
测试样本，用于评估去重后的描述调用节省量、密集运动预算分配、
模糊度/曝光/SI-TI 证据、带有较长尾段的快速切换，以及渐变淡出
误报。它会记录预分析实际耗时，并在 `/usr/bin/time`
可用时记录子进程 CPU 用量和峰值 RSS。其质量检查仅以结构性规则
作为判定基准。真实描述模型的质量状态仍为 `HOLD`，因为该测试工具没有
获授权的端点或固定的评判器。费用节省状态也仍为 `HOLD`，
除非通过 `--caption-cost-per-call-usd` 提供明确的正数单次调用
费用估算；该脚本绝不会捏造这两项结果。

每帧最大为 4 MiB，所有原始帧合计最大为 23 MiB，
序列化后的代理响应最大为 32 MiB。私有临时目录会在
`finally` 中删除。OmniRoute 不捆绑 FFmpeg，也不接受自定义
可执行文件路径。在生成画面描述之前，桥接层会执行一轮保守的视觉
去重：将每张 JPEG 缩减为 16×16 的灰度缓冲区，并且
仅与上一张保留的帧进行比较。如果请求的画面描述预算
超过一帧，提取过程会提供一个
有界候选池，最多为该预算的两倍，且不超过 16 帧。
请求的数量上限仅在去重后应用；当预算至少为
两帧时，最终精简会保留所选候选帧中的第一帧和最后一帧。
版本化的
`grayscale-16x16-mean-cells-v2` 策略取平均亮度差值与
归一化差值至少为 0.05 的缩略图单元格占比这两者中的较大值。
重复判定阈值固定为 0.04，这一选择旨在保证行为可预测，
而不是将其暴露为运行时设置。这一辅助的
高对比度信号能够保留仅比较平均值时可能被掩盖的细微运动
和可见文字变化。比较器或解码器出错时会放行并保留
覆盖范围。输出元数据会分别记录提取的候选帧、成功使用的
帧，以及因视觉重复而丢弃的帧。

显式标记的视频部分可以请求带时间戳的接触表。
桥接层会构建最多 4 列、16 帧的 JPEG 网格。每个 512 像素的单元格
都会将源时间戳烧录到高对比度的底部条带中，同时这些时间戳
也会保留在文本元数据中，以供下游关联和审计。完整
JPEG 的大小仍限制为 32 MiB。如果 `sharp` 无法解码或合成网格，
桥接层会回退为单独的 JPEG 帧；客户端中止信号仍会
贯穿接触表操作进行传播。

用于决定是否推广的证据刻意与合成场景下的图像合成
微基准测试分开。`scripts/perf/video-bridge-contact-sheet-eval.ts` 定义了一个
带模式版本控制的 A/B 测试框架，用于真实的 OpenAI 兼容视觉模型。它衡量
提供者报告的词元数、端到端实际耗时（包括接触表合成）、
模型调用次数，以及清单定义的事实保留情况。原始模型响应不会
写入报告；仅保留 SHA-256 摘要和匹配的事实 ID。
除非传入 `--execute-real`，并且已配置
`--model`、`OMNIROUTE_BASE_URL` 和 `OMNIROUTE_API_KEY`，否则该
测试框架不会发起任何网络请求或付费模型调用。如果没有
显式执行真实测试，其机器可读判定结果将保持为 `HOLD`；仅凭合成场景下的
载荷大小和调用次数测量结果，不能作为推广依据。

如果调用方已拥有时间对齐的文本，可以为受支持的视频
部分附加可选的 `transcript.cues` 数组。每条提示必须包含 `text`、
位于探测所得时长范围内且数值有限的 `start`/`end` 区间，以及白名单中的
`source`（`client`、`embedded` 或 `audio-bridge`）；`confidence` 默认为
`1`，且必须介于 `0` 和 `1` 之间。完全重复的提示会被合并。
OmniRoute 绝不会根据这些元数据启动转录：经过验证的提示会连同
来源、置信度和时间区间一起复制到描述结果中，并且
作为不可信观测内容与帧描述一同呈现。无效、
超出范围或缺少来源信息的文本会被拒绝，而不会混入
画面描述流。两个请求体转录通道都会将所提供的
来源统一为 `client`，包括自行声明的 `embedded` 或 `audio-bridge`
标签。只有服务器控制的适配器才能通过
仅限代码使用的 `trustedSource` 参数分配这些受信任标签；请求 JSON 字段无法访问
该参数。无论来源如何，转录文本始终是不可信的媒体衍生内容，
绝不能用于决定授权。

高级调用方可以为同一视频提供 `audioTranscript` 轨道；
该轨道会被视为客户端提供的文本，而非服务器执行转录的证明。
融合衔接层会在统一的截止时间和中止信号下处理视觉与音频观测，
将它们按共同时间线排序，合并
完全重复的内容，并在仅一侧成功时报告部分结果。
无效的 `audioTranscript` 会降级为这种部分结果——保留视觉
描述，并由音频分支记录经过净化的失败代码——
而不是让整个视频处理失败。各分支的可用性、部分结果标志
以及经过净化的失败代码都会保留在描述结果、
护栏元数据（`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`）、结果缓存元数据以及桥接层
融合计数器中。默认的 Video Bridge 路径不会调用语音转文本，
也不会下载第二份媒体副本；如果没有显式提供该轨道，它仍然
仅处理视频。

**转录文本保留（#12150 P1）。** 每当 Video Bridge（本身需要主动启用）渲染转录片段时，此机制就会自动生效——没有单独的保留开关。当请求渲染任何转录片段（调用方声明的 `transcript` 或融合后的 `audioTranscript`）时，护栏会将其标记为 `videoBridgeObserved`，并为视频描述生成一个脱敏影子副本——其渲染结果与原始结果完全相同，只是每个片段的自由文本正文都被替换为 `[redacted-video-transcript]`。此副本通过在组装字符串之前替换结构化片段字段来构建（绝不解析展平后的文本，因此任何片段内容——无论是对抗性内容还是普通内容，包括含有 `]` 的正文，例如 `[inaudible]`/`[music]`——都无法残留）。持久化的调用日志请求体会按内容相等进行匹配，将每个源自视频的文本部分替换为该脱敏影子副本；`fullText` 锚点会从最终的调用前护栏载荷中重新读取，因此，即使后续链式护栏（优先级为 10/95 的 PII 和凭据掩码器）原地改写了描述文本，且系统提示词/交接/记忆注入重塑了消息数组，匹配仍然能够成功。发送到上游模型的请求体保持不变。被观测到的请求也不会写入任何持久化记忆（跳过基于请求和响应的两类提取），因此模型自身的回复无法将转录文本复述到记忆中。

**原始视频字段（#12430）。** 当桥接已启用，且原生视频支持情况未知或不存在时，已定义的 `transcript`/`audioTranscript` 字段也会激活 `videoBridgeObserved`，即使描述生成失败或触及 `maxVideos` 限制也是如此。`null` 和空字符串也算在内；缺失的字段和非视频元数据则不算。保留的副本会对这些字段进行脱敏，或省略整个请求，并绕过缓存/记忆。

在这些回退路径中，调用方提供的有效片段会转换为受支持的 `text`/`input_text` 部分，而不是非标准的提供方字段。请求提供的两条轨道都仍被视为不可信的 `client` 观测，并附有明确警告，说明未对视频进行描述，且未根据媒体核验时间戳。现有的总计 256 个片段/64 KiB 限额以及单片段限额适用于两条轨道的合计内容；时间戳必须符合代理的 600 秒上限，以及任何指定的关注时间窗口。无效轨道会被丢弃，而不会作为任意文本转发；除非两条轨道的合计内容超出限额，否则仍可使用另一条有效轨道。Null/空字段不会添加任何文本。此回退机制不会增加媒体获取或转录操作。转录扩展字段会从回退视频载体及其 `video_url`/`source` 对象中移除。OpenAI 传输格式的允许列表仍保持严格；原生支持情况未知的视频载体仍可使用，而已知仅支持文本的目标则保留安全标记。结构化脱敏影子副本会保护追加的转录文本，而调用方拥有的原始请求保持不变。原生支持视频的目标和已禁用的桥接仍保留现有的绕过行为。

其他保留副本也使用同一个已观测请求信号。护栏处理前的原始客户端请求快照、内存中的待处理请求，以及早期被拒绝请求的日志，都会以结构化方式替换视频部分中的转录字段；由流水线阶段和上下文交接合成的字符串提示词，则在持久化请求体的写入点进行脱敏。持久化的 `video_content_removed` 标记会使 `previous_response_id` 续接在无法安全处理时直接拒绝，而不是重建被有意丢弃的文本。如果某个已观测请求在写入日志之前丢失了按部分对应的脱敏影子副本，或者多个视频影子副本中哪怕只有一个在后续请求变更后无法匹配，也会完全省略保留的请求体，而不是保留仅部分脱敏的转录文本。

对于已观测请求，模型响应可能引用转录文本的任意部分，而不带结构化片段边界。因此，其持久化调用日志中的 `responseBody` 会被替换为省略标记；详细流水线产物（可能包含上游/客户端请求体或响应体以及流式数据块）不会被保留。语义缓存、幂等性缓存和推理重放缓存都会跳过该请求的读取和写入。发送给提供方的请求和客户端可见的响应保持不变。当详细产物被省略时，早期保活字节会从临时缓冲区中排空。Kiro 的 EventStream 格式错误警告仅报告载荷字节数，绝不报告其内容或 JSON 解析器的原始错误。
这并不意味着所有无关的提供方/插件诊断信息都已经过审计；更广泛的保留数据写入点排查工作在 #11658 中跟踪。

内部 `/api/modality-bridge/video/drilldown` 生命周期是一套独立的缓存基础设施，通过回环地址/令牌进行身份验证。每项操作还都要求提供一个规范化的不透明主体 ID。在允许生产调用方使用之前，该调用方必须从已认证的租户推导出此 ID，且绝不能转发客户端选择的值。缓存键将该主体绑定到规范化的会话 ID 和视频引用 ID，仅存储由它们经 SHA-256 派生的键，并将读取和删除操作的范围都限定在同一主体内。缓存的每个条目最多存储 16 帧派生的 JPEG 图像，十分钟后过期，并支持有界的 `start`/`end` 读取或显式会话删除。

每个主体最多可有 16 个条目和 64 MiB 的规范化 JPEG 数据。这些限制独立于全局 64 个条目/256 MiB 的上限：当主体配额承压时，只会先淘汰该主体最近最少使用的条目，然后才考虑全局 LRU 淘汰。缓存活动期间，过期条目会同时从主体和全局的用量统计中清除，而取消操作和验证失败都不会提交不完整的替换结果。

缓存会拒绝非规范的 Base64、过多的填充、非 JPEG 媒体、格式错误或
被截断的 JPEG，以及在受限的 `sharp` 全图解码过程中产生警告的 JPEG。
它会将每张通过验证的图像重新编码为规范 JPEG，从解码后的字节中获取宽度和高度，
而不是信任调用方提供的字段，并丢弃所有尾随的多格式混合字节，而不是保留它们。
两项配额都仅计入大小受限的规范压缩缓冲区。
JSON 传输大小限制包含了 32 MiB 解码输入上限所需的 Base64 开销。每个
存储的派生结果都会记录其已验证的 JPEG 格式/分辨率、采样策略、
派生版本、创建时间、服务器计算的内容哈希，以及经过哈希处理的父级
引用和可信调用方提供的父级内容哈希。在原子提交到缓存之前，
会在异步解码/哈希计算阶段之间检查是否已取消。

本阶段尚未将生产环境的生成方连接到该路由，也不
提供多分辨率变体选择。因此，透明的 Video Bridge 请求
路径不会增加任何工作，而租户绑定的主体派生和
完整的 FU-08 多分辨率生命周期仍明确属于后续工作，
并未被描述为已完成的行为。

各帧使用配置的 Video 模型依次生成描述。Video 覆盖设置为空时，
会继承 Vision 设置；如果两者都为空，则由 Vision
自动路由器选择实际使用的、具备视觉能力的模型。成功生成的描述
会替换原始部分，并带有固定的 `[Video description:` 前缀，同时
将文本标记为不可信的媒体衍生观察内容，并告知下游
模型不要遵循媒体中的指令。帧描述缓存键
包含 JPEG 字节、提示词、时间戳和实际使用的模型；仅缓存成功生成的
描述。缓存条目会保留实际成功生成描述的模型，
包括回退模型；当不同帧由不同模型
生成时，桥接层会报告 `mixed`。缓存命中时会复用该生成模型的身份，
而不是将其重新标记为所请求的路由方案。整段视频结果
缓存的键包含所有会改变输出的输入——提示词、实际使用的
模型、采样策略、帧数、语义分析模式、规范化关注提示的 SHA-256
指纹、关注时间窗口、`transcript`、
`audioTranscript` 和联系表标志——因此，更改其中任何
维度都会导致缓存未命中，绝不会复用过时结果。视觉去重策略的
版本、阈值和有界候选帧数量也明确包含在
结果缓存键和元数据中；因此，策略变更后无法复用过时的
整段视频描述。结果缓存 v4 元数据保留模式和
指纹，绝不保留原始用户任务。护栏元数据会同时报告
所请求的分析模式和实际使用的分析模式；如果请求 `focused` 模式但没有
可用的用户文本，则会报告实际使用的模式为 `full`。

护栏会提取所有受支持的视频部分，但最多只为
`modalityBridgeVideoMaxVideos` 个视频生成描述。对于已确认
`supportsVideo === false` 的目标，处理失败和超出数量限制的视频会转换为明确的安全
文本标记，确保不保留任何原始视频。当能力未知时，这些部分
会保留其视频载体；任何回退转录文本都会遵循上述有界文本
转换规则。`supportsVideo === true` 的目标会绕过桥接层。
客户端请求的中止信号会传递到下载、代理队列、
子进程和描述生成调用；中止会在视频之间停止处理，绝不会在失败时放行
原始媒体。

运行时设置由数据库存储，并通过 Zod 验证：

| 键                                  | 默认值      | 范围 / 行为                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 可选运行时，需主动启用                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` 保留通用描述；`focused` 使用有界且不可信的最新用户上下文                   |
| `modalityBridgeVideoModel`          | `""`        | 继承 Vision Bridge 模型                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware` 或按比例的 `segment_aware`；检测器失败时回退到 `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 毫秒                                                                  |

旧版持久化的 Video 超时值若超过 120 秒，会被限制为
代理的截止时限；新写入的设置若超过该限制，则会被拒绝。
`GET /api/modality-bridge/video/runtime` 在进行身份验证或运行时探测之前，要求请求
具备可信标记的本地回环来源，随后还要求通过管理
身份验证。它仅返回 `available`、经过净化处理的 FFmpeg/ffprobe 版本，以及运行时不可用时的固定
原因。内部提取端点并非
公共上传 API：队列饱和时返回 `503` 和 `Retry-After`，调用方
断开连接时返回 `499`，达到固定代理截止时限时返回 `504`。转换后的响应会将
`video->text;model=<visionModel>;parts=<videos>` 添加到中央
`x-omniroute-modality-bridge` 标头中，而不会移除 Vision 或 Audio 片段。

### PII 脱敏器 (`piiMasker.ts`)

在**两个**阶段均运行。

- **`preCall`** 克隆载荷，遍历 `system`、`messages`、`input` 和
  `prompt`（包括纯字符串项），并对字符串类型的 `content`/`text` 字段应用
  `processPII()`（来自 `@/shared/utils/inputSanitizer`）。当
  `PII_REDACTION_ENABLED=true` 时，出站载荷中检测到的 PII 会被脱敏。
  这与 `INPUT_SANITIZER_MODE` 无关（后者仅控制提示词注入策略）。
  关闭脱敏时，调用会记录检测计数，而不改写内容。
- **`postCall`** 深度克隆响应，运行 `sanitizePIIResponse()` 以及
  适用于 Responses API 结构的掩码处理器（`maskResponsesOutput` — 覆盖
  `output_text` 和 `output[].content[].text`）。如果发生任何脱敏，
  修改后的响应将替换原始响应。

此防护机制从不拦截；它只添加标注（`meta.detections`、
`meta.redacted`）或改写内容。

#### 按类型选择、自定义模式和检测计数器

**控制面板 → 设置 → 安全 → PII 掩码** 用于选择要掩码的_内容_。
它不会启用掩码：这仍由 `PII_REDACTION_ENABLED`（请求）和
`PII_RESPONSE_SANITIZATION`（响应 + SSE）控制，两者默认均关闭。

- **按类型选择** — 内置 ID 列于
  `src/shared/constants/piiTypes.ts`（`PII_BUILTIN_TYPES`）中。未设置表示所有
  类型（即此设置出现之前的行为）。请求引擎的
  `ssn_us` 模式映射到 `ssn`。模板（精简、标准、金融、
  巴西、美国、完整）仅用于填充 UI 中的复选框。
- **自定义模式** — 最多支持 20 个正则表达式或通配符模式（`*` = 最多 64 个
  非空白字符，`?` = 一个）。匹配内容会替换为 `[CUSTOM_REDACTED]`。
  每个模式都会经过 `compilePiiCustomPattern()`
  （`src/shared/utils/piiCustomPatterns.ts`）处理：最多 500 个字符，标志仅限
  `g i m s u`，必须能够编译，必须通过 `safe-regex` 检查（防止灾难性
  回溯），且不得匹配空字符串或脱敏占位符。
  未通过检查的模式在保存和测试时都会被拒绝；已存储但未通过检查的记录
  会在运行时被跳过，而不是被编译。自定义模式仅在
  掩码启用时运行。
- **检测计数器** — 按类型计数（绝不记录匹配值），保存在
  内存中，重启后重置（`src/lib/pii/piiDetectionStats.ts`）。仅在
  掩码启用时递增。

设置存储于 `key_value` 表中（命名空间为 `pii_settings`，
`src/lib/db/piiSettings.ts`），读取时使用有效期为 1 秒的缓存。API：

| 方法   | 路径                     | 用途                                                       |
| ------ | ------------------------ | ---------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | 开关状态、`enabledTypes`、`customPatterns`、检测计数器     |
| `PUT`  | `/api/settings/pii`      | 替换 `enabledTypes`（`null` = 全部）和/或 `customPatterns` |
| `POST` | `/api/settings/pii/test` | 对最多 8 KB 的样本试运行一个模式；不存储任何内容           |

这三个接口都需要管理身份验证，并使用 Zod 验证请求体
（`src/shared/validation/schemas/piiSettings.ts`）。

### 提示词注入（`promptInjection.ts`）

检测用户提供的内容中的对抗性结构，并执行
配置的策略。行为由环境变量和构造函数
选项控制：

| 设置     | 环境变量                                                                                            | 默认值 | 效果                                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 启用     | `INPUT_SANITIZER_ENABLED`                                                                           | `true` | 为 `false` 时，防护机制直接跳过处理。                                                                                                       |
| 模式     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn` | 注入策略：`block`、`warn` 或 `log`。（为向后兼容而接受 `redact`，但它**不会**移除注入文本；请求 PII 改写由 `PII_REDACTION_ENABLED` 控制。） |
| 拦截阈值 | `blockThreshold` 选项 / `INPUT_SANITIZER_BLOCK_THRESHOLD`（别名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high` | 触发拦截所需的最低严重级别。默认情况下，中等严重级别仅观察，不拦截。                                                                        |

**模式优先级**（`getMode`）：调用方 `options.mode` →
`INJECTION_GUARD_MODE` **数据库功能开关覆盖值**（控制面板 → 设置 →
功能开关）→ `INJECTION_GUARD_MODE` 环境变量 → `INPUT_SANITIZER_MODE` 环境变量 →
`warn`。因此，控制面板覆盖值优先于环境变量，功能
开关 UI 可实时控制正在运行的防护机制（无需重启）。数据库读取采用故障安全机制：
如果读取出错，防护机制会回退到基于环境变量的行为；未设置
覆盖值时，其行为与仅通过环境变量解析完全一致。

检测来源：

1. `@/shared/utils/inputSanitizer` 中的 `sanitizeRequest()`（管道中
   其他位置也使用的共享检测器集）。
2. 内置的 `DEFAULT_GUARD_PATTERNS`（目前为 `system_override_inline` 和
   `markdown_system_block`，两者的严重级别均为 `high`）。
3. 通过构造函数选项传入的可选 `customPatterns`（字符串、正则表达式
   或 `{ name, pattern, severity }` 记录）。

当 `mode === "block"` **且**至少一项检测结果达到严重性
阈值时，`preCall` 返回 `{ block: true, message: "Request rejected:
suspicious content detected" }`。在 `warn`/`log` 模式下，防护机制会记录日志，但
允许调用。此外，还导出了共享辅助函数 `evaluatePromptInjection()`，
供需要不通过注册表直接评估提示词的调用方使用。

**扫描上限 (v3.8.20)：**检测器仅检查
拼接后提示词文本的**前 16 KB** — 即
`src/shared/utils/inputSanitizer.ts` 中的 `MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 字节）。
`detectInjection()` 和
`evaluatePromptInjection()` 都会在运行模式匹配循环之前执行 `slice(0, MAX_INJECTION_SCAN_BYTES)`。
注入指令通常位于输入的开头附近，因此，这一限制可控制数百 KB 载荷上的
正则表达式 CPU/GC 开销，同时不削弱检测能力（参见
#3932、#4041）。

### 凭据脱敏器 (`credentialMasker.ts`)

在**两个**阶段均运行，在默认链中排在最后（优先级为 `95`）。它会对
出站载荷（消息内容、工具调用参数、工具结果）**以及**提供者响应中的
常见 API 密钥 / 秘密令牌模式进行脱敏，从而避免
粘贴到提示词中（或由工具结果回显）的凭据泄露给
上游提供者或返回给客户端。

- **仅在显式启用后生效**，与 PII 脱敏采用相同约定（与硬性规则 #20 相关）：
  默认禁用，除非 `settings.credentialRedactionEnabled === true` **或**
  `CREDENTIAL_REDACTION_ENABLED=true`。关闭时，防护机制不执行任何操作 —
  既不阻止调用，也不改写内容。
- `redactCredentials()` 遍历整个载荷/响应树（`walkValue()`，
  可防范原型污染，并通过 `WeakSet` 安全处理循环引用），将匹配项替换为
  `[REDACTED:<type>]` 占位符，仅克隆实际
  发生变化的分支。
- `CREDENTIAL_PATTERNS` 涵盖 LLM 提供者密钥（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS 令牌（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、支付密钥（Stripe、Square）、云服务
  密钥（AWS 访问密钥、Twilio、SendGrid、Mailgun）、私钥 / JWT、
  包含凭据的连接字符串（`mongodb://user:pass@...` 等），以及
  通用的 `Authorization`/`x-api-key`/`api-key`/`apikey` 标头值
  模式。标头形式的键（`authorization`、`x-api-key`、`api-key`、
  `apikey`）会通过结构化方式进行脱敏（仅处理值，保留
  `Bearer `/`Basic ` 等认证方案前缀），而非使用通用文本正则表达式。
- 此防护机制从不阻止调用；它仅改写内容（`modifiedPayload` /
  `modifiedResponse`）并添加标注（`meta.credentialsRedacted`、`meta.count`）。

回归测试保障：`tests/unit/credential-masker-guardrail.test.ts`。

## 基础契约 (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // 为 true 时会短路终止执行链
  message?: string; // 阻止时显示的消息
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 由 preCall 返回，用于重写请求
  modifiedResponse?: TValue; // 由 postCall 返回，用于重写响应
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

护栏通过返回 `void`、`{}` 或
`{ block: false }` 来表示“不做更改”。返回 `modifiedPayload`/`modifiedResponse` 会替换
执行链中传递给下游护栏的值。
`signal?: AbortSignal` 将调用方的生命周期传递给护栏。请求中止是故障放行策略中的刻意例外：媒体桥接会停止工作并执行清理，不会向已知不支持原始媒体的目标恢复原始媒体。

## 注册表 (`registry.ts`)

单例 `guardrailRegistry` 提供：

- `register(guardrail)` — 添加护栏（或按规范化后的名称替换护栏），并
  按 `priority` 升序重新排序。
- `clear()` / `list()` — 管理辅助方法。
- `runPreCallHooks(payload, context)` — 遍历已启用的护栏，通过 `modifiedPayload`
  逐步传递载荷，并在首次遇到 `block: true` 时停止。
- `runPostCallHooks(response, context)` — 在响应侧执行相同的流程。
- `resetGuardrailsForTests({ registerDefaults })` — 清除状态，并可选择
  重新注册默认护栏，以实现干净的测试隔离。

两个执行器均返回 `{ blocked, payload|response, results, guardrail?, message? }`，
其中 `results` 是一个由 `GuardrailExecutionResult` 记录组成的数组，包含
各个护栏的 `blocked`、`skipped`、`modified`、`error` 和 `meta` 字段，
便于追踪。

### 按请求禁用护栏

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` 会汇总当前请求
应跳过的护栏名称，生成去重后的列表。
共有五个来源，按以下顺序读取并合并为一个列表
（去重时保留首次出现的名称）：

1. `apiKeyInfo.disabledGuardrails`
2. 请求体中的 `disabledGuardrails`（顶层）
3. 请求体中的 `metadata.disabledGuardrails`（仅当 `metadata` 为对象时）
4. 请求头 `x-omniroute-disabled-guardrails`
5. 旧版请求头 `x-disabled-guardrails`

所有五个来源都会合并，包括这两个请求头：同时发送
`x-omniroute-disabled-guardrails` 和 `x-disabled-guardrails` 时，会跳过
两个列表的并集；新版请求头为空时，也不再掩盖旧版请求头
（[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)，已在
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) 中修复）。

值可以是字符串数组，也可以是以逗号分隔的字符串；名称会去除首尾空白，
并规范化为小写连字符格式（`pii_masker` → `pii-masker`），空条目
会被丢弃。结果通过 `context.disabledGuardrails` 传递
给注册表，注册表会跳过匹配的护栏（在 `results` 中标记为 `skipped: true`）。

禁用列表仅影响**注册表**。提示注入的 `block` 模式是
强制性安全边界：注入防护中间件
（`src/middleware/promptInjectionGuard.ts`）调用 `evaluatePromptInjection()` 时，
不会传入任何由调用方控制的禁用列表（它之前执行的无效
`resolveDisabledGuardrails({ body })` 调用已在
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) 中移除），因此，
即使请求禁用了 `prompt-injection`，在 `block` 模式下仍会被拒绝。这是
有意为之。禁用来源由调用方控制（请求体、
元数据、请求头），而调用方不得关闭运营方设置的
安全控制
（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。来自
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) 的请求头
合并机制仅改变注册表跳过哪些护栏；它不会让客户端
绕过中间件。按密钥和按组实施的强制护栏策略正在
v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) 中跟踪。
请参阅[覆盖范围与限制](#coverage-and-limits)。

## 执行顺序

对于流经 `src/sse/handlers/chat.ts` 和
`open-sse/handlers/chatCore.ts` 的每个请求（即
[覆盖范围与限制](#coverage-and-limits)中列出的聊天类路由）：

1. `resolveDisabledGuardrails(...)` 根据 API 密钥、请求体
   和请求头构建跳过列表。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` 按优先级
   从低到高运行护栏：
   - 被禁用的护栏会被记录为 `skipped`。
   - 每个护栏的 `preCall` 都可以通过 `modifiedPayload` 改写载荷。
   - 首个 `block: true` 会短路终止调用链，处理程序随即返回
     护栏拒绝响应。
3. （可能已被改写的）载荷进入组合路由和上游
   分发流程。
4. **仅限非流式响应：**响应组装完成后，
   `guardrailRegistry.runPostCallHooks(...)` 会对响应运行同一条
   调用链。此处的 `block: true` 会丢弃上游响应并返回 HTTP 400。流式响应会完全跳过此步骤。

抛出异常的护栏会以 `error: <message>` 记录，并通过
`logger.warn` 写入日志，但调用链会继续执行——这是设计上的故障放行机制。

## 覆盖范围与限制

护栏注册表仅接入聊天流水线。这些限制由
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` 和
`tests/unit/guardrail-pipeline-characterization.test.ts` 固定；行为发生变化时，请有意识地
更新这些测试。

### 钩子的运行位置

| 钩子 / 控制机制        | 运行范围                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`      | 由 `handleChat` (`src/sse/handlers/chat.ts`) 处理的请求：`/v1/chat/completions`、`/v1/completions`、`/v1/messages`、`/v1/responses`（以及 `/v1/responses/*`）、`/v1/relay/chat/completions`、`/v1/providers/{provider}/chat/completions`、`/v1/api/chat`、`/v1/antigravity`、`/v1beta/models/*`，以及 Telegram 聊天代理。还包括仪表板测试端点 `/api/guardrails/test`。调用前拦截会返回 HTTP 400。 |
| `runPostCallHooks`     | 仅适用于**非流式**聊天响应 (`open-sse/handlers/chatCore/nonStreamingResponse.ts`)。流式响应永远不会进入此钩子。                                                                                                                                                                                                                                                                                   |
| 流式 PII               | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`)，在启用 `PII_RESPONSE_SANITIZATION` 时于 `streamingPipeline.ts` 中接入管道。它不是护栏，因此禁用渠道不会影响它。                                                                                                                                                                                                                     |
| 注入防护中间件（旧版） | 所有携带提示词的 `/v1` 路由，包括聊天类路由（参见[路由覆盖范围](#injection-guard-route-coverage--red-team-phase-8--block-d)）。仅检查提示词注入。                                                                                                                                                                                                                                                 |

### 未覆盖的范围

- **媒体、嵌入和数据路由**（`/v1/images/*`、`/v1/embeddings`、
  `/v1/audio/*`、`/v1/videos/generations`、`/v1/music/generations`、
  `/v1/rerank`、`/v1/search`、`/v1/moderations`）永远不会进入注册表。这些路由上
  不会运行 PII 掩码、凭据掩码或模态桥接。它们唯一的
  检查是旧版注入防护中间件。
- **流式响应**没有调用后护栏：调用后不会运行 `pii-masker` 或
  `credential-masker`，也不会进行调用后拦截。仅应用流式 PII
  转换（启用 `PII_RESPONSE_SANITIZATION` 时）。流式响应中
  回显的凭据不会被脱敏。
- **禁用渠道与中间件的关系（设计如此）：**中间件会自行调用
  `evaluatePromptInjection()` 来评估提示词注入，而不会
  传入任何由调用方控制的禁用列表。`block` 模式是一道强制
  边界，调用方控制的禁用设置无法绕过它，聊天类路由也不例外
  （[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。禁用
  `prompt-injection` 只会跳过注册表中的护栏。

### 哪些环节会在调用后处理之前接触响应

在非流式路径中，顺序为：记忆提取 → 内置工具
执行 → 调用后护栏 → 调用后拦截退出 → 语义缓存存储。

- **记忆提取**和**工具执行**会在调用后防护机制有机会改写或拦截响应之前看到该响应。自
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) 起，记忆
  提取会在启用 `PII_RESPONSE_SANITIZATION` 时，通过 `sanitizePII`
  处理提取的文本（流式和非流式均适用），但即使响应随后被调用后防护机制
  拦截，它也已经被提供给记忆和
  工具。
- **语义缓存**在调用后防护机制处理完毕后存储响应，因此存储的是
  改写后的响应，被拦截的响应绝不会被缓存。缓存条目
  按 API 密钥分别建立索引。

## 配置

内置护栏读取的环境变量：

| 变量                                  | 使用方               | 作用                                                                              |
| ------------------------------------- | -------------------- | --------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | 设置为 `false` 可完全禁用检测。                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | 注入策略：`warn`、`block` 或 `log`。旧值 `redact` 不会改写注入文本。              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | 注入护栏的模式；同时也是数据库功能标志，会**覆盖**环境变量（数据库 > 环境变量）。 |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | `MODE=block` 拒绝的最低严重级别：`high`（默认）、`medium` 或 `low`。              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | `INPUT_SANITIZER_BLOCK_THRESHOLD` 的旧别名。                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | 为 `true` 时，对请求中的个人身份信息（PII）进行脱敏（独立于注入模式）。           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（下游） | 控制响应侧脱敏器的行为。                                                          |

Modality Bridge 护栏从数据库支持的设置
存储（`getSettings()`）中读取运行时配置，而非环境变量。视觉功能的主要键为
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和
`modalityBridgeCacheMaxEntries`。旧的
`visionBridge*` 键仅作为文档中说明的单周期读取
回退机制予以支持；仪表板写入时使用主要键。默认值和回退
解析器位于 `src/shared/constants/modalityBridgeDefaults.ts`，旧
常量保留在 `src/shared/constants/visionBridgeDefaults.ts` 中。

音频功能使用 `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout` 和 `modalityBridgeAudioMaxClips`，以及共享的
`modalityBridgeCache*` 设置。音频功能没有旧键回退机制，因为这些
键是在引入 Modality Bridge 模式时一并引入的。

视频功能使用 `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos` 和
`modalityBridgeVideoTimeout`，以及共享的 `modalityBridgeCache*` 设置。
该功能默认禁用，因为 FFmpeg/ffprobe 是可选的运行
依赖项，而且生成视频帧描述会增加延迟和模型成本。

## 自定义防护规则

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

步骤：

1. 创建 `src/lib/guardrails/myGuardrail.ts`，继承 `BaseGuardrail`。
2. 实现 `preCall` 和/或 `postCall`。
3. 在导入时注册（通过 `registerDefaultGuardrails` 添加），或
   在运行时调用 `guardrailRegistry.register(...)` — 注册表会替换
   任何规范化名称相同的已有防护规则。
4. 在 `tests/unit/` 下添加测试（现有示例：
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## 测试

在测试之间使用 `resetGuardrailsForTests()`，以从已知状态开始。
传入 `{ registerDefaults: false }`，以空注册表开始，
仅注册待测试的防护规则。Vision Bridge 支持依赖
注入（`deps.getSettings`、`deps.callVisionModel`）；Audio Bridge 为
设置、能力、STT 模型选择、凭据
检查和转录提供了相应的注入点。因此，测试无需访问数据库
或网络即可验证这两种流程。

## 另请参阅

- `src/lib/guardrails/` — 实现
- `src/shared/utils/inputSanitizer.ts` — 用于
  提示注入检测和 PII 脱敏的共享检测器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 默认设置和
  强制桥接模型列表
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio 共享运行时默认设置
- `docs/architecture/RESILIENCE_GUIDE.md` — 正交层（熔断器、冷却期）
- `docs/reference/ENVIRONMENT.md` — 完整的环境变量参考

## 注入防护的路由覆盖范围与红队测试（第 8 阶段 · 区块 D）

注入防护（`createInjectionGuard` / `withInjectionGuard`）覆盖所有
接受用户提示的路由。它遵循 `INJECTION_GUARD_MODE` 的设置（默认值为 `warn` = 仅记录日志；
`block` = 返回 HTTP 400 `SECURITY_001`）。

| 类型         | 路由                                                                                                                                                 | 默认模式 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 文本（现有） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| 生成式       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| 数据         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

文本提取（`extractMessageContents`）覆盖 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`。

**红队测试（每晚运行，`nightly-llm-security.yml`）：** promptfoo 验证每个路由在
`INJECTION_GUARD_MODE=block` 下都会阻止 OWASP-LLM 语料库中的攻击；garak 运行探测（未配置密钥时跳过）。
为保持一致性，`moderations` 也包含在内。阻止模式是一条强制边界：`evaluatePromptInjection()`
会忽略中间件传入的按请求禁用列表，因此 `disabledGuardrails`
**不会**使路由免受该防护的约束（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。

每晚运行的工作流（`.github/workflows/nightly-llm-security.yml`，cron 定时触发 + 手动
触发）包含两个作业：

- **`promptfoo-guard`（阻断式）** — 在 `INJECTION_GUARD_MODE=block` 下
  运行 `promptfoo eval -c promptfooconfig.yaml`。每个对抗用例（例如“忽略所有
  先前的指令……”、DAN 风格的越狱提示）都会断言响应包含
  `error.code === "SECURITY_001"`，即防护确实拒绝了请求。
- **`garak`（建议性）** — 针对本地 OmniRoute 实例（`http://localhost:20128/v1`）
  运行 garak `--probes promptinject,dan,leakreplay`。仅在配置了
  提供者密钥（`PROMPTFOO_PROVIDER_KEY`）时运行；否则会正常跳过，并在命令末尾附加
  `|| true`，因此它会报告结果，但不会导致 CI 失败。

防护辅助函数（`createInjectionGuard` / `withInjectionGuard`）的覆盖范围
涵盖所有包含提示的 `/v1` 路由；提示文本由
`src/shared/utils/inputSanitizer.ts` 中的 `extractMessageContents()`
从 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` 中提取。

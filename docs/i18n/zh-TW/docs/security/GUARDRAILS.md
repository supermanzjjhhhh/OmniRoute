# Guardrails (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md)

---

> **資料來源：** `src/lib/guardrails/`
> **最後更新：** 2026-10-17 — v3.8.52 (新增 [Coverage and limits](#coverage-and-limits)：
> hooks 所到達的路由與回應路徑、合併的停用標頭 (#16412)、作為強制邊界的注入封鎖模式 (#16413)，以及在 post-call 之前看到回應的內容)

Guardrails（防護網）在 OmniRoute 與上游提供者之間的邊界處強制執行安全性、策略和內容轉換。每個 guardrail 都可以檢查（並可選擇拒絕、轉換或註解）要求負載 (`preCall`) 與上游回應 (`postCall`)。

系統採用 **fail-open（故障時開啟）** 設計：如果在執行過程中某個 guardrail 擲出錯誤，註冊表會記錄該錯誤並繼續執行下一個 guardrail，而不是讓要求失敗。封鎖是一個明確的決定 (`block: true`)，絕非意外。唯一的例外是被中止的要求：當呼叫者的 `signal` 被中止時，擲出錯誤的 guardrail 會拒絕該 hook 執行，而不是被跳過。

這些 hooks **並非**在每個路由或每個回應上執行。在將 guardrail 作為安全控制項依賴之前，請先閱讀 [Coverage and limits](#coverage-and-limits)。

## 內建 Guardrails

註冊表會在匯入時依優先順序自動載入六個 guardrails（請參閱 `registry.ts` → `registerDefaultGuardrails()`）：

| 優先順序 | 名稱                | 階段           | 檔案                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

優先順序數字較小的會**先**執行。

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

GLM 5.3 基礎模型和 `glm-5.3-{low,high,max}` 具有明確的 `supportsVision:false` 註冊表/規格中繼資料。GLM 5.3 Flash 變體仍然是原生視覺模型。Claude Code 的 `/v1/messages` 路由會在 Claude 轉 OpenAI 翻譯**之前**進入共用的 `handleChat` pre-call guardrail 鏈；巢狀的 `Read` 工具結果圖片必須在該翻譯將其提升至 OpenAI `image_url` 內容之前進行描述或處理 (#17069)。

攔截針對**非視覺模型**且帶有圖片的要求，並在進行上游呼叫之前，將整個要求重新路由至具備視覺能力的模型，或將圖片部分替換為由可配置視覺模型產生的文字描述。這可讓純文字提供者透明地處理多模態負載。

流程：

1. 如果目標模型已經支援視覺則跳過（除非它出現在強制橋接清單 `isVisionBridgeForcedModel` 中）。
2. 透過 `extractImageParts(messages)` (`visionBridgeHelpers.ts`) 萃取圖片部分，該函式會委派給 `open-sse/utils/mediaParts.ts` 中的**統一媒體偵測器** `detectMediaParts()` —— 這是與組合相容性過濾器共用的單一真實來源。萃取被允許列入 `replaceImageParts` 可以拼接回來的形狀（萃取↔替換合約）：OpenAI `image_url`、Anthropic base64 `source.type:"base64"`、Anthropic URL `source.type:"url"`，以及 Responses API `input_image`。巢狀在 Claude Code `tool_result.content` 及 Responses 工具輸出內的相符圖片也會在其原始路徑被萃取與替換；僅作指示用的形狀屬於組合過濾器素材，不會被萃取。如果未找到則跳過。
3. 透過 `resolveVisionBridgeRuntimeSettings()` (`src/shared/constants/modalityBridgeDefaults.ts`) 解析執行階段設定：新的 `modalityBridge*` 設定金鑰勝出；舊版 `visionBridge*` 金鑰保留作為**單一循環備用**（復原視窗）。當橋接停用時，在任何媒體走訪之前跳過。
4. 模式選擇器 (`modalityBridgeVisionMode`，見下表) 決定重新路由與描述。重新路由會傳回僅調換 `model` 的 `modifiedPayload`，外加 meta `{ rerouted, fromModel, toModel, imagesKept }`。
5. 描述路徑：將圖片上限設為 `maxImages`、組成感知任務的提示詞、查詢描述快取、**平行的**呼叫視覺模型 (`Promise.allSettled`)，並在其位置插入 `[Image N]: <description>` 文字部分。描述失敗會產生 `null`：原始圖片會針對未知/支援視覺的目標保留 (#4012)，但**確認的純文字直接目標**或零視覺組合會為每個未描述的圖片取得明確的文字存根 `(unavailable — no vision-capable provider connected)`，包含部分失敗以及超出描述呼叫上限的圖片 (#17069)。現有的全失敗組合描述備用方案仍然保留 (#8430)。
6. 傳回 `modifiedPayload` + meta (`imagesProcessed`, `descriptions`, `processingTimeMs`, `visionModel`)。

#### 模式選擇器 (`modalityBridgeVisionMode`)

| 模式       | 預設 | 行為                                                                                                                                                                                                                   |
| ---------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔    | 舊版啟發式方法，保持不變 (#6640/#7204)：非組合/`auto/` 模型會重新路由至最佳視覺模型，除非原始模型已具有可用憑證（此時改用描述）；組合目標則總是使用描述。                                                              |
| `describe` |      | 總是進行描述 — 整個重新路由區塊會被跳過；使用者所選的模型總是會進行回應。                                                                                                                                              |
| `reroute`  |      | 強制重新路由：略過保留具憑證模型（keep-credentialed-model）的防護機制。重新路由**目標**憑證防護機制仍然適用 — 當沒有可用的視覺目標時，橋接器會攔截並回傳明確的錯誤，而不是進行描述或將原始圖片傳送至僅支援文字的目標。 |

強制模式會在自動啟發式方法執行**之前**進行短路（short-circuit）；`auto` 行為與 PR-1 之前的防護機制在位元組層級完全相同。

#### API 金鑰範圍 (`visionBridgeKeyScope.ts`)

當呼叫者的 API 金鑰限制了 `allowedConnections`、配額池（`allowedQuotas`）或模型（`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`）時，橋接器只會挑選該金鑰可在對應連線上使用的重新路由與描述模型。隨後的描述呼叫一律會透過帶有 `x-omniroute-self-loop-key-id` 標頭的 OmniRoute 自我迴圈（self-loop）進行，因此接收的聊天請求會再次強制執行該金鑰的連線與模型政策。`enforceApiKeyPolicy()` 只有在同時搭配自我迴圈 Bearer Token 時才會採用該標頭，因此它只能收窄存取權限，而無法解析的識別碼將會被拒絕。

如果該金鑰未獲准使用任何視覺模型，**確認僅支援文字的目標**會在本地以明確的 HTTP 400 拒絕圖片請求，而不會將圖片位元組轉發給不支援的上游（#17069）。對於具備未知或原生視覺能力的目標，描述路徑會保留其先前預設失敗時放行（fail-open）的行為（中繼資料 `{ skipped: true, reason: "no_permitted_vision_model" }`）。沒有金鑰的請求以及沒有這些限制的金鑰，其行為與先前完全相同。

#### 具備任務感知能力的描述提示詞 (`modalityBridgeVisionTaskAware`)

預設為 **true**。`composeVisionPrompt()` (`visionBridgeHelpers.ts`) 會將**最後一則使用者訊息**的文字（截斷至 500 個字元）附加至基本描述提示詞後面，引導描述內容朝向使用者實際詢問的內容（codex-vision-proxy 模式），並要求視覺模型轉錄可見的文字。當此旗標關閉時 — 或沒有使用者文字時 — 則會直接使用未經修改的基本提示詞。

描述自我迴圈自身的 OpenAI 相容請求（位於 `visionBridgeHelpers.ts` 中的 `callVisionModelSingle()`）一律會請求 `image_url.detail: "high"` — 無條件地針對每個呼叫者/提供者，不受任何客戶端訊號限制。低詳細度取樣會降低本提示詞所要求的文字轉錄任務之 OCR 準確度，因此無論原始進向請求使用何種詳細度層級，描述呼叫本身一律會要求高詳細度。這僅會影響內部的描述請求主體；它不會改變 OmniRoute 在主要請求中轉發呼叫者自身的 `image_url.detail` 的方式 — 該預設值是分開套用的，且僅針對偵測到的 OpenCode 客戶端，套用在 `defaultImageDetail()`（`open-sse/handlers/chatCore/upstreamBody.ts`）中。描述自我迴圈的 Anthropic 線上傳輸格式（wire-format）分支沒有 `detail` 欄位，因此不受任何預設值影響。

#### 描述輸出上限 (`modalityBridgeVisionMaxChars`)

| 鍵                             | 預設值 | 範圍             |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` 或 100–50000 |

`0`（預設值）代表**無上限** — 由 `callVisionModel()` 回傳的描述會原封不動地傳遞過去，以保留現有行為。任何介於 100 至 50000 範圍內的值都會將描述截斷，並加上 `…` 字尾，然後再拼回為 `[Image N]: <description>`（位於 `src/lib/guardrails/visionBridge.ts` 中的 `VisionBridgeGuardrail.preCall()`）。若下游模型需要完整的轉錄內容來處理著重細節的 OCR 任務，請調高此數值；若要在話多的視覺模型上限制 Token 使用量，則可調低此數值。儀表板欄位位於 Vision 標籤頁的「進階」面板中（位於 `ModalityBridgeVisionTab.tsx` 中的 `modality-bridge-max-chars`），它會將任何介於 1 到 99 之間的值限制並提升至 100 的下限，同時保留明確設定的 `0` 不變 — `0` 本身就是一個有效的 Zod 值（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`），而不僅僅是「未設定」的預設值。

#### 描述快取 (`modalityBridge/bridgeCache.ts`)

用於描述輸出的記憶體內（In-memory）LRU + TTL 快取，於行程全域（process-wide）共享。金鑰 = `sha256(imageRef + composedPrompt + configuredBridgeModel)` 搭配長度前綴框定（length-prefix framing，無欄位邊界碰撞）。其中的模型元件是**已設定的**橋接模型，而非實際回應的模型 — `callVisionModel` 可能會在內部進行後備（fallback），若依每次嘗試進行鍵結將會導致快取破碎化。失敗的描述絕不會被快取。設定項目：

| 鍵                              | 預設值 | 範圍    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 遠端影像正規化 (self-loop describe/base64 擷取)

當 bridge 自行擷取**遠端**影像時——Anthropic describe 自呼叫以及 claude-wire-format base64 轉換 (`ensureBase64ImagesForClaudeWire`)，兩者皆透過 `visionBridgeHelpers.ts` 中的 `fetchRemoteImageAsDataUri()` 進行——所產生的 data URI 會在嵌入視覺模型請求之前，先透過 `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) 進行處理。過大的影像會被縮小至**最長邊 2048px**（符合 OpenAI/Anthropic 已在伺服器端套用的調整上限），這能在不改變視覺模型所見內容的情況下，減少上傳的位元組數與延遲。調整大小使用 `sharp`，透過動態匯入載入：在無法載入其原生二進位檔的平台上，`normalizeDataUri()` **絕不會擲出錯誤**——它會退回到直接傳遞原始位元組，因此 describe/base64 轉換路徑始終能正常運作。非影像位元組（未能傳回可解碼影像的擷取）也會被直接傳遞而不作修改。此正規化僅適用於 bridge 為其自身的 self-call 所擷取的影像——絕不會套用於呼叫者的原始透傳酬載，這與「僅限主動加入」的突變原則（硬規則 #20）一致。

#### 設定 schema 與遷移

新的 `modalityBridge*` 鍵會在 `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) 中透過 Zod 進行驗證：`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、`modalityBridgeCache*` 三合一組，以及 Audio Bridge 所使用的 `modalityBridgeAudio*` 群組。遷移檔 `141_modality_bridge_settings.sql` 會將現有的舊版 `visionBridge*` 值複製到對應的新鍵（具等冪性，且絕不會覆寫由營運者設定的 `modalityBridge*` 值）；舊版鍵將在一個發布週期內繼續被接受作為讀取備用。

#### 透明度標頭與統計

經 Describe 轉換的回應會帶有 `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`（由 `modalityBridge/bridgeStats.ts` 中的 `buildModalityBridgeHeader()` 建立，並由 `src/sse/handlers/chatHelpers.ts` 中的 `withModalityBridgeHeader()` 標記）。重新路由的請求**不會**帶有標頭——酬載未被更動，且模型置換已可在回應主體的 `model` 欄位中看見。

`GET /api/modality-bridge/stats`（管理驗證，與 `GET /api/settings` 同級）會傳回針對 `vision`、`audio` 和 `video` 的記憶體內各模態計數器 `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }`。`averageLatencyMs` 使用 `latencySamples`（而非所有嘗試次數）作為分母；沒有計時的操作不會虛構零毫秒的樣本。`bridged` 維持作為成功轉換的向後相容別名；失敗的嘗試不會使其遞增。依照設計，計數器會在處理程序重新啟動時重設（屬於遙測，而非會計）。

#### 儀表板設定

專屬的儀表板頁面為 `/dashboard/settings/modality-bridge`。其可透過網址存取的 `Vision`、`Audio` 和 `Video` 分頁會在切換 `tab` 值時保留查詢參數。Vision 分頁提供啟用狀態、模式、模型選擇（包含自動預設值）、任務感知提示詞、進階的逾時/影像/描述長度/快取限制、執行時期計數器，以及一個受保護的範例請求。Audio 分頁也已啟用：提供啟用狀態、具備 Auto 選項的純 STT 模型選擇器、逾時/最大片段限制、音訊計數器，以及一個 `input_audio` 範例測試。Video 分頁具備完整功能：它回報 FFmpeg/ffprobe 執行時期狀態——四種明確的 UI 狀態之一（`unknown` 表示探測進行中或無法完成、`restricted` 表示在省略客戶端探測的非迴圈儀表板主機上、`unavailable` 表示經探測確認遺失、或 `available` 伴隨 FFmpeg/ffprobe 版本）——並會保存啟用/模型/影格/影片/逾時限制、將模型選擇器篩選為具備視覺能力的模型，以及公開影片計數器。

AI 設定下的前 Vision Bridge 卡片現在是連往新頁面的相容性連結；它不再擁有表單的第二個副本。Media Providers 也將 Image-to-Text 與 Speech-to-Text 工作流程連結至對應的 Modality Bridge 分頁，同時未移除現有的 Speech-to-Text 測試場。

**Self-loop 准入繞過：** 當 describe 呼叫透過 OmniRoute 自身的 `/v1` self-loop（非標準提供者模型）進行路由時，子請求會傳送 `x-omniroute-admission-bypass: internal`，並使用解析出的 self-loop 憑證進行驗證——本機模式下的本機 `sk_omniroute` 哨兵，或是營運者設定的 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境變數鍵（#1350），以便啟用 `REQUIRE_API_KEY=true` 的部署仍能執行 describe 呼叫。此繞過機制僅對這些精確的憑證有效，因此外部用戶端無法使用該標頭來略過准入驗證。

舊版預設值存放於 `src/shared/constants/visionBridgeDefaults.ts`；新的模式/任務感知/快取預設值以及設定解析器則存放於 `src/shared/constants/modalityBridgeDefaults.ts`。護欄提供了一個 `deps` 建構子選項，讓測試能夠注入模擬的 `getSettings` 與 `callVisionModel` 實作。

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

攔截包含音訊的聊天請求，防止它們到達不支援接受音訊輸入的目標。它絕不會重新路由聊天請求：音訊部分會透過現有的相容 OpenAI 之多部分端點進行轉錄，且所選的聊天模型將繼續使用文字轉錄本運作。

流程：

1. 透過 `getResolvedModelCapabilities()` 解析 `supportsAudio`。明確的提供者註冊表中繼資料優先，接著是靜態模型中繼資料，然後是同步的 `modalities_input`。未宣告 `audio` 的輸入列表為 `false`；無能力證明則維持 `null`。`false` 與 `null` 都會啟動保守的橋接，而 `true` 則會繞過它。
2. 解析 `modalityBridgeAudio*` 設定，並透過共用的 `detectMediaParts()` 偵測器從每個訊息中提取可拼接的頂層音訊部分。支援的傳輸外形為 OpenAI 的 `input_audio`、`audio_url` 及 `source.media_type: "audio/*"`。巢狀音訊會被偵測以進行路由，但不會被拼接路徑移除。工作量受限於 `modalityBridgeAudioMaxClips`；後續部分保持不變。
3. 採用已設定的 `provider/model`，或是讓 `selectAudioBridgeModel()` 以穩定的目錄順序走訪 `AUDIO_TRANSCRIPTION_PROVIDERS`，並選取第一個具有可用且有效之提供者憑證的模型。
4. `callAudioTranscription()` 將 base64/data-URI 音訊轉換為多部分的 `file`，或是透過僅限公開的出網防護（具備 DNS 釘選及 25 MB 上限）下載遠端 `audio_url`。接著，它會將檔案與選定的模型 POST 至本機 `/v1/audio/transcriptions` 自我迴圈，並使用 `resolveSelfLoopBearer()` 進行驗證。現有的轉錄路由會執行正常的憑證查詢、冷卻/速率限制處理以及提供者分派。
5. 成功的呼叫會以 `[Audio N]: <transcript>` 取代其對應的部分。呼叫透過 `Promise.allSettled` 執行：單一失敗會保留該原始的音訊部分（#4012 協定）。如果所有呼叫皆失敗且經證實目標 `supportsAudio === false`，則這些部分會變成 `[Audio N]: (unavailable — no STT provider connected)`（#8430 協定）。對於未知的目標 (`null`)，全部失敗的結果保持不變。經證實為純文字目標且無可用 STT 憑證者，會在不發出網路呼叫的情況下收到相同的明確虛設常式。

成功的轉錄會使用全行程的 Modality Bridge LRU/TTL 快取。金鑰結合了音訊參考、穩定的 `audio-transcription` 操作標籤以及選定的 STT 模型；失敗記錄絕不快取。音訊嘗試會更新共用的 `bridged`、`cacheHits`、`failures` 及 `lastUsedAt` 計數器。轉換後的回應會帶有 `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`；未經更動的請求則不會收到 Audio Bridge 區段。

執行階段設定是由資料庫支援且經過 Zod 驗證的：

| Key                           | Default | Range         |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | 自動或 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

共用快取則由 `modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 與 `modalityBridgeCacheMaxEntries` 控制。

### 視訊橋接 (`videoBridge.ts`, `videoBridgePipeline.ts`)

在呼叫不支援已知原生視訊的目標之前，攔截 Chat Completions 的 `messages` 以及 Responses API 的 `input` 中的頂層視訊部分。支援的外形為 `input_video`、`video_url`、`video_source`、HTTPS 網址，以及 `data:video/*;base64,...` 資料 URI。文字中的純檔名不會被視為視訊。

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) 負責請求走訪、能力/策略檢查、每個請求的聚合以及回應酬載。每個視訊的工作（擷取、完整結果快取、描述影格序列 [結合任何呼叫者宣告的音訊轉錄]，以及每次嘗試的度量/中止/清理）都隱藏在 `videoBridgePipeline.ts` 中的 `processVideoPart` 後方，在 `preCall` 的迴圈內每個視訊部分被呼叫一次。該模組也定義了明確的連接埠邊界：`VideoMediaBrokerPort`（取得位元組並提取取樣影格）、`VideoAudioTranscriptionPort`（將呼叫者宣告的音訊轉錄與取樣字幕融合），以及 `VideoDrilldownPort`（影格下鑽持久化邊界；目前尚未接入 `processVideoPart` — 現今僅有獨立的 `/api/modality-bridge/video/drilldown` 路由會寫入下鑽項目）。

公開的 `/v1` 請求路徑絕不會匯入或叫用子行程。遠端視訊下載的上限為 50 MiB；內嵌的 base64 視訊具有保守的 36 MiB 每個視訊解碼上限，以便模型/訊息/外框信封可以保持在 50 MiB 的公開 JSON 請求允許限制內。內嵌長度與解碼大小估算會在配置前進行檢查。初始遠端網址及每次重新導向皆強制要求使用 HTTPS，並使用具備 DNS 釘選功能的現有僅限公開出網防護。接著，這些位元組會跨越精確的內部 `POST /api/modality-bridge/video/extract` 訊息代理邊界。該路由同時具備 `LOCAL_ONLY` 與 `SPAWN_CAPABLE` 特性，僅接受每個行程驗證過的、受信任的回送請求，且絕不接受網址、檔案系統路徑、可執行檔或引數清單。API 主體大小管線與處理程式的遞增主體讀取器會各自獨立執行 50 MiB 的代理輸入上限。其具備邊界的佇列一次執行一個提取作業、允許 4 個待處理的工作，並將待處理輸入限制在 100 MiB。

在 broker 內部，`ffprobe` 會讀取私密本地檔案；固定的格式白名單排除了播放清單和資訊清單格式。對於允許的 MOV 系列容器，外部 MOV 資料參照預設保持停用，且固定的指令不會主動啟用它們。`ffprobe` 與 `ffmpeg` 皆使用僅限 `file` 的通訊協定白名單、單執行緒、固定的引數陣列、無 shell，以及從 `PATH` 解析的可執行檔。附加圖片封面串流並非可播放的候選項目。所有可播放的串流必須符合限制，且在確定性的最低索引後備之前，會優先採用明確的預設串流。影片限制為 600 秒、每維度 8,192 像素，以及 33,554,432 個來源像素。FFmpeg 會取樣 1–16 個中點 JPEG 影格，將長邊縮小至最多 1,024 像素而不放大較小的輸入，且絕不會接收 URL。取樣預設為 `uniform`。選配的 `scene_aware` 與實驗性的 `segment_aware` 策略會在已驗證的本地串流上執行額外一次固定的 FFmpeg 傳遞，選取有界的 `showinfo` 場景時間戳記，並在偵測器失敗、逾時、格式錯誤的輸出或空的候選集時，確定性地回退至相同的均勻中點。區段感知模式會按比例將中點樣本配置給已驗證的場景區間；區段感知證據與回退行為詳見下方。在每個策略中，嚴格的 16 影格上限都會在選取後套用。當場景感知請求僅有一格影格的預算時，它會使用有效完整影片或焦點視窗的均勻中點，並回報 `policyEffective: uniform`：單一選定的場景影格無法同時保留兩端的時間軸。呼叫者可以選擇性地提供有限的焦點視窗（`start`/`end` 秒）；邊界會被限制在媒體持續時間內，相反或非有限的視窗將被拒絕，且所有取樣策略皆僅在正規化區間內執行。產生的視窗會包含在取樣中繼資料與不受信任的描述前綴中，以便下游模型能夠區分焦點片段與完整時間軸。

語意標題焦點是一個獨立、明確的設定。預設的 `full` 分析模式會保留現有的畫面提示詞，且絕不會將請求文字轉發給標題模型。在 `focused` 模式下，橋接器僅會從相同的 Chat 或 Responses 容器讀取最新的非空白使用者編寫 `text`/`input_text`，將其正規化為 NFC，收合控制字元與空白，並限制為最多 500 個 Unicode 字碼點。空的結果會精確回退至 `full` 提示詞。可用的提示會以 JSON 序列化至專屬的不受信任使用者內容區塊中，且僅能優先處理可觀察到的細節；它無法覆蓋關於不遵循媒體中可見或可聽見指令的獨立警告。文字焦點絕不會推斷 `start`/`end` 或變更時間軸取樣器。

#### FU-07 結構區段證據

`segment_aware` 對已驗證的本地視訊串流使用一次有界的預先分析傳遞。固定的濾鏡鏈會先將寬度縮放至最多 320 像素，偵測場景變更與畫面凍結區間，然後以每秒 1 個影格的頻率取樣模糊度、平均明度，以及空間／時間資訊。此傳遞限制為 600 個結構樣本、一個 FFmpeg／濾鏡執行緒、相同的僅限 `file` 通訊協定與容器白名單、1 MiB 的處理程序輸出上限，以及在 broker 共用中止／截止期限內最多 30 秒。它絕不接受來自請求的指令、濾鏡、路徑或 URL。

這些結構值是確定性的取樣證據，而非語意影片理解。它們不會推斷主體、動作、標題、語音或使用者意圖。場景與畫面凍結邊界會形成區間；畫面凍結覆蓋率、模糊度、曝光、空間細節以及時間變更只會影響現有 1–16 影格預算的配置方式。完全凍結的區間上限為一格影格，而非凍結的區間則會競爭剩餘預算。當邊界數量超過影格數時，會保留均勻的時間軸覆蓋率，以便快速的早期剪輯不會隱藏長長的結尾區間。凍結邊界之 1 秒分析解析度內的場景邊界將會合併。

遺失濾鏡、格式錯誤／空的證據、偵測器錯誤或有界的預先分析逾時，會向下開放至精確的均勻中點策略。呼叫者中止或 broker 截止期限則不會向下開放：它會終止進行中的子處理程序，防止後續的畫面擷取，並且私密暫存樹會於 `finally` 中被移除。

`scripts/perf/video-bridge-fu07-eval.ts` 會產生確定性的真實 FFmpeg 測試固定資料，用於去重複後的標題呼叫節省、密集動作預算配置、模糊／曝光／SI-TI 證據、帶有長尾的快速剪輯，以及漸變淡出誤判。它會記錄預先分析的實際經過時間，以及在可用時透過 `/usr/bin/time` 記錄子程序的 CPU 與尖峰 RSS。其品質檢查僅為結構預言機。真實標題模型的品質仍然維持 `HOLD`，因為此測試 harness 沒有授權端點或固定的評判標準。除非 `--caption-cost-per-call-usd` 提供明確的正向每次呼叫估算值，否則金錢節省也維持 `HOLD`；該指令碼絕不會捏造任何結果。

每格限制為 4 MiB，所有原始影格總計 23 MiB，序列化的 broker 回應則限制為 32 MiB。私人暫存目錄會在 `finally` 中被移除。OmniRoute 不會捆綁 FFmpeg，也不接受自訂可執行檔路徑。在產生說明文字之前，橋接器會套用保守的視覺重複資料刪除階段：每個 JPEG 會被縮減為 16×16 灰階緩衝區，並僅與保留的最後一個影格進行比較。對於要求超過一格的說明文字預算，擷取會提供一個最多達該預算兩倍且不超過 16 格的有界候選池。要求的上限僅會在重複資料刪除後套用，當預算至少為二時，會在最終抽稀期間保留第一個和最後一個選定的候選項目。具版本控制的 `grayscale-16x16-mean-cells-v2` 政策會採用平均明度差與標準化差異至少為 0.05 的縮圖儲存格比例中較大者。重複閾值為常數 0.04，這是基於可預測性而選擇的，而非公開為執行階段設定。這個次要的高對比訊號可以保留僅靠平均值比較可能會隱藏的小幅動作與可見文字變更。比較器或解碼器錯誤會採用失敗時放行並維持覆蓋範圍。輸出中繼資料會將擷取到的候選項目、成功使用的影格以及捨棄的視覺重複項目分開。

明確標記的影片部分可以要求帶時間戳記的聯絡表。橋接器最多建構 4 欄、16 格的 JPEG 格狀圖。每個 512 像素的儲存格會將其來源時間戳記燒錄到高對比的底部帶狀區域中，同時相同的時間戳記也會保留在文字中繼資料中，以供下游關聯與稽核使用。完整的 JPEG 大小上限仍維持 32 MiB。如果 `sharp` 無法解碼或組合格狀圖，橋接器將退回到個別的 JPEG 影格；用戶端中止仍會透過聯絡表操作傳播。

推廣證據刻意與合成組合微基準測試分開。`scripts/perf/video-bridge-contact-sheet-eval.ts` 定義了一個具結構版本控制的 A/B 測試設備，適用於真實的 OpenAI 相容視覺模型。它會量測由提供者回報的權杖、端對端實際執行延遲（包含聯絡表組合）、模型呼叫次數以及清單定義的事實保留率。原始模型回應不會寫入報告中；僅保留 SHA-256 摘要與相符的事實 ID。除非傳入 `--execute-real` 且已設定 `--model`、`OMNIROUTE_BASE_URL` 與 `OMNIROUTE_API_KEY`，否則該測試設備不會發動任何網路或付費模型呼叫。在沒有該明確的真實執行情況下，其機器可讀取的判定結果仍維持 `HOLD`；僅靠合成酬載/呼叫次數量測並不足以作為推廣證據。

當呼叫端已經擁有對齊的文字時，可以在支援的影片部分附加選用的 `transcript.cues` 陣列。每個提示必須包含 `text`、探測到的持續時間內有限的 `start`/`end` 區間，以及列入白名單的 `source`（`client`、`embedded` 或 `audio-bridge`）；`confidence` 預設為 `1` 且必須介於 `0` 和 `1` 之間。完全相同的重複提示會被合併。OmniRoute 絕不會從此中繼資料啟動轉錄：經過驗證的提示會與來源、信心水準和區間一起複製到描述結果中，並作為不受信任的觀察結果與影格說明文字並列呈現。無效、超出範圍或缺乏來源追蹤的文字會遭到拒絕，而不會混入說明文字串流中。兩個要求主體逐字稿頻道會將提供的來源正規化為 `client`，包含自行宣告的 `embedded` 或 `audio-bridge` 標籤。只有伺服器擁有的介面卡才能透過純程式碼的 `trustedSource` 引數指派這些受信任的標籤；要求 JSON 欄位無法觸及該引數。無論其來源為何，逐字稿文字仍然是不受信任的媒體衍生內容，且絕不能決定授權。

進階呼叫端可能會為同一部影片提供 `audioTranscript` 軌道；它被視為用戶端提供的文字，而非伺服器端轉錄的證明。融合接合點會在單一期限與中止訊號下執行視覺與音訊觀察結果，將它們排序在共同的時間軸上，合併完全相同的重複項目，並在僅有一側成功時回報部分結果。無效的 `audioTranscript` 會降級為該部分結果（保留視覺描述，而音訊分支則記錄清理後的失敗代碼），而不是導致整個影片失敗。各分支的可用性、部分旗標以及清理後的失敗代碼都會保留在描述結果中、安全防護中繼資料（`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`）中、結果快取中繼資料中以及橋接器融合計數器中。預設的 Video Bridge 路徑不會呼叫語音轉文字或下載第二份媒體複本；若沒有該明確的軌道，它仍然維持僅限影片。

**逐字稿保留 (#12150 P1)。** 每當 Video Bridge（本身為選擇性加入）算繪逐字稿提示時，這都會自動套用 — 沒有獨立的保留旗標。當請求算繪任何逐字稿提示（呼叫端宣告的 `transcript` 或融合的 `audioTranscript`）時，防護欄會將其標記為 `videoBridgeObserved` 並產生視訊描述的遮罩映射 — 一個相同的算繪，其中每個提示的自由文字主體都被替換為 `[redacted-video-transcript]`，這是透過在組裝字串之前替換結構化提示欄位所建構的（絕不透過解析平坦化文字，因此任何提示內容 — 無論是對抗性或一般內容，包括包含 `]` 的主體，例如 `[inaudible]` 或 `[music]` — 皆無法存留）。持久化的呼叫記錄請求主體將每個源自視訊的文字部分交換為該遮罩映射，透過內容相等性進行匹配；`fullText` 錨點會從完成的呼叫前防護欄酬載中重新讀取，因此在後續鏈結防護欄（PII 與憑證遮罩工具，優先權 10/95）原地重寫描述文字之後，以及在系統提示/交接/記憶體注入重新塑造訊息陣列之後，匹配仍然會成功。傳送至模型上游的主體保持不變。被觀測的請求也不會填入任何持久性記憶體（請求與回應衍生的擷取都會被略過），因此模型本身的回覆無法將逐字稿文字回顯至記憶體中。

**原始視訊欄位 (#12430)。** 當啟用橋接且原生視訊支援未知或不存在時，已定義的 `transcript`/`audioTranscript` 欄位也會啟動 `videoBridgeObserved`，即使在描述失敗或達到 `maxVideos` 限制之後亦然。`null` 與空字串會被計算；不存在的欄位和非視訊中繼資料則不會。保留的複本會遮蔽這些欄位或省略請求，並且快取/記憶體會被繞過。

在此類備用路徑上，有效的呼叫端提示會成為支援的 `text`/`input_text` 部分，而不是非標準的提供者欄位。兩個由請求提供的音軌都保持為不受信任的 `client` 觀察結果，並附帶明確警告，指出未描述該視訊且未針對媒體驗證時間戳記。現有的 256 個提示/64-KiB 總計與每個提示預算適用於這兩個音軌的總和；時間戳記必須符合仲介程式的 600 秒上限以及任何提供的焦點視窗。無效的音軌將被捨棄，不會作為任意文字轉發；只要未超出其合併預算，仍可使用有效的同級音軌。`Null`/空欄位不會新增任何文字。此備用機制不會新增任何媒體擷取或轉錄。逐字稿擴充欄位已從備用視訊載體及其 `video_url`/`source` 物件中移除。OpenAI 導線允許清單維持嚴格；未知原生視訊載體保持可用，且已知的僅文字目標保留安全標記。結構化遮罩映射保護附加的逐字稿文字，而原始由呼叫端擁有的請求保持不變。原生支援的目標與停用的橋接器會保留其現有的繞過行為。

其他保留的複本會使用相同的觀測請求訊號。原始的防護欄前用戶端請求快照、記憶體內暫掛請求以及早期拒絕請求記錄，在結構上取代了視訊部分中的逐字稿欄位；由管線階段和上下文交接所合成的字串提示會在持久化請求主體接收點進行遮罩。持久化的 `video_content_removed` 標記會使 `previous_response_id` 接續以封閉失敗方式處理，而不是重建已被刻意捨棄的文字。如果被觀測的請求在記錄之前遺失了其每個部分的遮罩映射，或者多個視訊對應中有任何一個在後續請求突變後無法匹配，則會完全省略保留的請求主體，而不是保留部分遮罩的逐字稿。

對於被觀測的請求，模型回應可能會在沒有結構化提示邊界的情況下引用逐字稿的任何部分。因此，其持久化的呼叫記錄 `responseBody` 會被替換為省略標記；詳細的管線成品（可能包含上游/用戶端主體與串流區塊）不會被保留。語意、冪等性與推理重播快取會為該請求繞過讀取與寫入。提供者請求與用戶端可見的回應保持不變。當省略詳細成品時，早期的保持連線位元組會從暫存緩衝區中排出。Kiro 格式錯誤的 EventStream 警告僅回報酬載位元組數，絕不回報其內容或 JSON 解析器的原始錯誤。
這並不表示所有不相關的提供者/外掛程式診斷都已稽核；更廣泛的保留接收點掃描會在 #11658 中追蹤。

內部 `/api/modality-bridge/video/drilldown` 生命週期是一個獨立的、回送/權杖驗證的快取基底。每個操作還需要一個標準的不透明主體 ID。在啟用正式環境呼叫端之前，它必須從經過驗證的租戶衍生該 ID，且絕不能轉發用戶端所選的值。快取金鑰將該主體繫結至標準的工作階段與視訊參照 ID，僅儲存其 SHA-256 衍生的金鑰，並將讀取和刪除範圍限定於同一主體。快取每個項目最多儲存 16 個衍生的 JPEG 影格，在十分鐘後過期，並支援有界的 `start`/`end` 讀取或明確的工作階段刪除。

每個主體限制為 16 個項目與 64 MiB 的標準 JPEG 資料。這些限制與全域 64 個項目/256 MiB 上限無關：主體配額壓力只會驅逐該主體最近最少使用的項目，然後才會考慮全域 LRU 驅逐。過期項目會在快取活動時從主體與全域計費中清除，而取消與驗證失敗則不會提交部分替換。

快取會拒絕非規範的 Base64、過多的填補、非 JPEG 媒體、格式錯誤或截斷的 JPEG，以及在有界限的全圖 `sharp` 解碼期間產生警告的 JPEG。它會將每個接受的影像重新編碼為規範的 JPEG，從解碼後的位元組導出寬度和高度，而不是信任呼叫者的欄位，並會丟棄任何結尾的多重格式位元組（polyglot bytes），而不是保留它們。只有有界限的規範壓縮緩衝區會計入兩個配額。JSON 傳輸限制包含 32 MiB 解碼輸入上限的 Base64 額外負擔。每個儲存的衍生項目都會記錄其已驗證的 JPEG 格式/解析度、取樣策略、衍生版本、建立時間、伺服器計算的內容雜湊、雜湊的父系參考以及受信任呼叫者的父系內容雜湊。取消動作會在非同步解碼/雜湊階段之間、於原子快取提交之前進行檢查。

此批次尚未將正式環境的生產者連接至路由，亦未提供多解析度變體選擇。因此，透明的視訊橋接（Video Bridge）請求路徑不會產生額外的工作，而租戶繫結的主體衍生以及完整的 FU-08 多解析度生命週期仍屬於明確的後續工作，而非記錄為完整的行為。

系統會使用設定的視訊模型依序為影格加上標題。空的視訊覆寫會繼承視覺設定；如果兩者皆為空，視覺自動路由器將會選擇具備有效視覺能力的模型。成功的標題會將原始部分替換為穩定的 `[Video description:` 字首，該字首同時會將文字標記為不受信任的媒體衍生觀察結果，並告訴下游模型不要遵循在媒體中找到的指令。影格標題快取金鑰包含 JPEG 位元組、提示詞、時間戳記以及有效的模型；只有成功的標題會被快取。快取項目會保留實際成功的生產者模型，包含備用模型；當不同的影格由不同的模型產生時，橋接會回報 `mixed`。快取命中會重複使用該生產者識別身分，而不是將其重新標記為要求的路由計畫。整個視訊的結果快取會以所有會改變輸出的輸入作為金鑰 —— 包含提示詞、有效模型、取樣策略、影格數、語意分析模式、標準化焦點提示的 SHA-256 指紋、焦點視窗、`transcript`、`audioTranscript` 以及聯絡表旗標 —— 因此變更其中任何一個維度都會造成快取未命中，絕不會重複使用過時的快取。視覺重複資料刪除政策版本、閾值以及有界限的候選影格數也會明確寫在結果快取金鑰與元資料中；因此政策變更無法重複使用過時的全視訊描述。結果快取的 v4 元資料會保留模式和指紋，絕不會保留原始的使用者任務。護欄元資料會同時回報要求的分析模式與有效的分析模式；若要求的 `focused` 模式沒有可用使用者文字，則會被回報為實際上是 `full`。

護欄會擷取每個支援的視訊部分，但描述的數量不超過 `modalityBridgeVideoMaxVideos`。對於經證明具有 `supportsVideo === false` 的目標，失敗且超出限制的視訊會變成明確的安全文字標記，因此不會有任何原始視訊殘留。當能力未知時，這些部分會保留其視訊載體；任何備用轉錄都會遵循上述的有界文字轉換。具有 `supportsVideo === true` 的目標會繞過此橋接。用戶端請求中止訊號會透過下載、代理佇列、子程序以及標題呼叫進行傳播；中止動作會在視訊之間停止，且絕不會在失敗時開放為原始媒體。

執行階段設定是由資料庫支援並經過 Zod 驗證：

| 鍵                                  | 預設值      | 範圍 / 行為                                                                              |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 選用的執行階段，需主動加入（opt-in）                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` 會保留通用標題；`focused` 會使用有界限、不受信任的最新使用者內容                  |
| `modalityBridgeVideoModel`          | `""`        | 繼承視覺橋接（Vision Bridge）模型                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware`，或是比例式的 `segment_aware`；偵測器失敗時會退回使用 `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                           |

超過 120 秒的舊版持續性視訊逾時值會被夾制至代理期限；超過該限制的新設定寫入將會被拒絕。
`GET /api/modality-bridge/video/runtime` 在進行驗證或執行階段探測之前，需要受信任的帶時間戳記迴送區域性，隨後需要管理權限驗證。它僅會傳回 `available`、經過濾淨化的 FFmpeg/ffprobe 版本，以及當執行階段無法使用時的固定原因。內部擷取端點並非公開的上傳 API：佇列飽和會傳回 `503` 加 `Retry-After`，呼叫者中斷連線會傳回 `499`，而固定的代理期限則會傳回 `504`。轉換後的回應會在中央的 `x-omniroute-modality-bridge` 標頭中加入 `video->text;model=<visionModel>;parts=<videos>`，且不會移除視覺或音訊片段。

### PII 遮罩器 (`piiMasker.ts`)

運行於**兩個**階段。

- **`preCall`** 會複製酬載 (payload)，走訪 `system`、`messages`、`input` 以及
  `prompt` (包含純字串項目)，並將 `processPII()` (來自
  `@/shared/utils/inputSanitizer`) 應用於字串的 `content`/`text` 欄位。當
  `PII_REDACTION_ENABLED=true` 時，偵測到的 PII 將在外發的
  `payload` 中被遮罩。這與 `INPUT_SANITIZER_MODE` (其僅控制
  prompt-injection 政策) 獨立。當遮罩關閉時，呼叫會記錄偵測
  計數而不重寫內容。
- **`postCall`** 會深層複製回應，執行 `sanitizePIIResponse()` 以及
  Responses-API 結構的遮罩工具 (`maskResponsesOutput` — 涵蓋
  `output_text` 與 `output[].content[].text`)。如果發生任何遮罩，
  修改後的回應將取代原始回應。

防護欄 (guardrail) 絕不封鎖；它只會進行標註 (`meta.detections`、
`meta.redacted`) 或重寫。

#### 依類型選取、自訂模式與偵測計數器

**儀表板 (Dashboard) → 設定 (Settings) → 安全性 (Security) → PII 遮罩 (PII masking)** 用於選擇_要遮罩的內容_。它不會開啟遮罩功能：這仍然由 `PII_REDACTION_ENABLED` (要求) 與 `PII_RESPONSE_SANITIZATION` (回應 + SSE) 控制，兩者預設皆為關閉。

- **依類型選取** — 內建 ID 列於
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) 中。未設定表示所有
  類型 (此設定存在之前的行為)。要求引擎的
  `ssn_us` 模式對應至 `ssn`。範本 (Minimal、Standard、Financial、
  Brazilian、USA、Full) 僅填入 UI 中的核取方塊。
- **自訂模式** — 最多 20 個正規表示式或萬用字元模式 (`*` = 最多 64 個
  非空白字元，`?` = 一個)。符合的項目會變成 `[CUSTOM_REDACTED]`。
  每個模式都會透過 `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) 進行處理：最多 500 個字元，旗標限於
  `g i m s u`，必須能編譯，必須通過 `safe-regex` (災難性
  回溯) 檢查，且不得符合空字串或遮罩預留位置。
  失敗的模式在儲存和測試時都會被拒絕，而儲存的資料列若失敗，
  則會在執行階段被略過，而不是進行編譯。自訂模式僅在
  遮罩開啟時執行。
- **偵測計數器** — 各類型的計數 (絕不包含符合的值)，保留在
  記憶體中並在重新啟動時重設 (`src/lib/pii/piiDetectionStats.ts`)。它們僅在
  遮罩開啟時遞增。

這些設定存放在 `key_value` 資料表中 (命名空間為 `pii_settings`、
`src/lib/db/piiSettings.ts`)，並透過 1 秒的快取進行讀取。API：

| 方法   | 路徑                     | 用途                                                               |
| ------ | ------------------------ | ------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | 旗標狀態、`enabledTypes`、`customPatterns`、偵測計數器             |
| `PUT`  | `/api/settings/pii`      | 取代 `enabledTypes` (`null` = 全部) 及/或 `customPatterns`         |
| `POST` | `/api/settings/pii/test` | 針對最多 8 KB 的範例進行單一模式的乾跑 (dry-run)；不會儲存任何內容 |

這三者皆需要管理驗證，並使用 Zod 驗證主體 (body)
(`src/shared/validation/schemas/piiSettings.ts`)。

### 提示詞注入 (`promptInjection.ts`)

偵測使用者提供內容中的對抗性結構，並強制執行
設定的政策。其行為由環境變數與建構函式
選項驅動：

| 設定     | 環境變數                                                                                           | 預設值 | 效果                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 已啟用   | `INPUT_SANITIZER_ENABLED`                                                                          | `true` | 當為 `false` 時，防護欄會發生短路 (short-circuit)。                                                                                      |
| 模式     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                    | `warn` | 注入政策：`block`、`warn` 或 `log`。(接受 `redact` 以相容舊版，但**不會**去除注入文字；要求的 PII 重寫由 `PII_REDACTION_ENABLED` 控制。) |
| 封鎖閾值 | `blockThreshold` 選項 / `INPUT_SANITIZER_BLOCK_THRESHOLD` (別名 `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | 封鎖所需的最低嚴重性。預設情況下，中等嚴重性僅為觀察模式。                                                                               |

**模式優先權** (`getMode`)：呼叫者 `options.mode` →
`INJECTION_GUARD_MODE` **資料庫功能旗標覆寫** (儀表板 → 設定 →
功能旗標) → `INJECTION_GUARD_MODE` 環境變數 → `INPUT_SANITIZER_MODE` 環境變數 →
`warn`。因此，儀表板覆寫會優先於環境變數，使功能
旗標 UI 能即時控制執行中的防護欄 (無需重新啟動)。資料庫讀取具備容錯移轉機制 (fail-safe)：
若發生錯誤，防護欄會回復為基於環境變數的行為，且當未設定
覆寫時，其行為與僅使用環境變數解析完全相同。

偵測來源：

1. 來自 `@/shared/utils/inputSanitizer` 的 `sanitizeRequest()` (共用偵測器
   集，在管線的其他地方也有使用)。
2. 內建的 `DEFAULT_GUARD_PATTERNS` (目前為 `system_override_inline` 與
   `markdown_system_block`，兩者皆為 `high` 嚴重性)。
3. 透過建構函式選項傳遞的選用 `customPatterns` (字串、正規表示式，
   或 `{ name, pattern, severity }` 記錄)。

當 `mode === "block"` **且** 至少有一個偵測結果達到嚴重性閾值時，`preCall` 會回傳 `{ block: true, message: "Request rejected: suspicious content detected" }`。在 `warn`/`log` 模式下，防禦機制（guardrail）會記錄日誌但允許該呼叫。共用的輔助函式 `evaluatePromptInjection()` 也會被匯出，供不需要透過註冊表（registry）來評估提示詞（prompts）的呼叫者使用。

**掃描範圍限制 (v3.8.20)：** 偵測器僅會檢查組合後提示詞文字的**前 16 KB**——亦即位於 `src/shared/utils/inputSanitizer.ts` 中的 `MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 位元組）。`detectInjection()` 與 `evaluatePromptInjection()` 在執行模式迴圈之前，都會先進行 `slice(0, MAX_INJECTION_SCAN_BYTES)`。由於注入指令通常位於輸入的頂端，這能在不減弱偵測能力的情況下，限制數百 KB 酬載（payload）的正規表示式 CPU/GC 開銷（參見 #3932、#4041）。

### 憑證遮罩器 (`credentialMasker.ts`)

會在**兩個**階段執行，且位於預設鏈結的最後（優先級為 `95`）。它會從對外輸出的酬載（訊息內容、工具呼叫引數、工具結果）**以及**提供者回應中，遮罩掉眾所周知的 API 金鑰／密鑰權杖（secret-token）模式，因此貼在提示詞中（或由工具結果回顯）的憑證不會洩漏給上游提供者或返回給客戶端。

- **僅限主動啟用 (Opt-in only)**，與 PII 遮罩採用相同的慣例（接近硬性規則 #20）：除非 `settings.credentialRedactionEnabled === true` **或** `CREDENTIAL_REDACTION_ENABLED=true`，否則為停用狀態。當其關閉時，此防禦機制為空操作（no-op）——它絕不會阻擋，也絕不會改寫。
- `redactCredentials()` 會走訪完整的酬載／回應樹狀結構（透過 `walkValue()`、具備原型污染防護、透過 `WeakSet` 確保循環參照安全），並將符合的項目替換為 `[REDACTED:<type>]` 佔位符，且僅複製實際發生變更的分支。
- `CREDENTIAL_PATTERNS` 涵蓋了 LLM 提供者金鑰（OpenAI、OpenAI-proj、Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS 權杖（GitHub、Slack、Linear、Notion、npm、Postman、Discord）、付費金鑰（Stripe、Square）、雲端金鑰（AWS 存取金鑰、Twilio、SendGrid、Mailgun）、私密金鑰／JWT、帶有憑證的連線字串（例如 `mongodb://user:pass@...` 等），以及通用的 `Authorization`/`x-api-key`/`api-key`/`apikey` 標頭值模式。具有標頭外型的金鑰（`authorization`、`x-api-key`、`api-key`、`apikey`）會以結構化方式進行遮罩（僅遮罩值，保留如 `Bearer `/`Basic ` 的方案前綴），而不是透過通用的文字正規表示式。
- 此防禦機制絕不會阻擋；它只會進行改寫（`modifiedPayload` / `modifiedResponse`）並加上註記（`meta.credentialsRedacted`、`meta.count`）。

迴歸防護：`tests/unit/credential-masker-guardrail.test.ts`。

## 基礎合約 (`base.ts`)

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
  block?: boolean; // true 會直接中斷鏈路
  message?: string; // 封鎖時顯示
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 由 preCall 傳回以重寫請求
  modifiedResponse?: TValue; // 由 postCall 傳回以重寫回應
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

防護網透過傳回 `void`、`{}` 或 `{ block: false }` 來發出「無變更」的信號。傳回 `modifiedPayload` 或 `modifiedResponse` 會替換流經鏈路供下游防護網使用的值。`signal?: AbortSignal` 將呼叫端生命週期帶入防護網中。請求中止是刻意的 fail-open 例外情況：媒體橋接器會停止工作並進行清理，而不會將原始媒體還原至已知不支援它的目標。

## 註冊表 (`registry.ts`)

單例 `guardrailRegistry` 提供了以下內容：

- `register(guardrail)` — 新增（或透過標準化名稱取代）防護網，並依升冪 `priority` 重新排序。
- `clear()` / `list()` — 管理性質的輔助工具。
- `runPreCallHooks(payload, context)` — 迭代啟用的防護網，將 payload 透過 `modifiedPayload` 傳遞，並在遇到第一個 `block: true` 時停止。
- `runPostCallHooks(response, context)` — 回應端的相同流程。
- `resetGuardrailsForTests({ registerDefaults })` — 清除狀態，並可選擇重新註冊預設值以達到乾淨的測試隔離。

兩個執行器都會傳回 `{ blocked, payload|response, results, guardrail?, message? }`，其中 `results` 是一個 `GuardrailExecutionResult` 紀錄的陣列，包含每個防護網的 `blocked`、`skipped`、`modified`、`error` 和 `meta` 欄位，這對於追蹤非常有用。

### 每個請求停用防護網

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` 會聚合一個已去除重複項目的防護網名稱列表，這些防護網應在當前請求中被略過。共有五個管道，依此順序讀取並合併為一個列表（在去除重複時以首次出現者為準）：

1. `apiKeyInfo.disabledGuardrails`
2. 請求本文的 `disabledGuardrails`（頂層）
3. 請求本文的 `metadata.disabledGuardrails`（僅當 `metadata` 是一個物件時）
4. 標頭 `x-omniroute-disabled-guardrails`
5. 舊版標頭 `x-disabled-guardrails`

這五個管道會全部合併，包含這兩個標頭：同時傳送 `x-omniroute-disabled-guardrails` 和 `x-disabled-guardrails` 會略過其列表的聯集，且空的現代標頭不再會隱藏舊版標頭（[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)，已在 [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) 中修正）。

值可以是字串陣列或以逗號分隔的字串；名稱會經過修剪並標準化為小寫 kebab-case（`pii_masker` → `pii-masker`），且會捨棄空的項目。結果會透過 `context.disabledGuardrails` 傳遞至註冊表，註冊表會略過相符的防護網（`results` 中的 `skipped: true`）。

停用列表僅會影響**註冊表**。Prompt-injection 的 `block` 模式是一個強制性的邊界：注入防護中介軟體 (`src/middleware/promptInjectionGuard.ts`) 在呼叫 `evaluatePromptInjection()` 時不帶任何由呼叫端控制的停用列表（它過去會進行的無效 `resolveDisabledGuardrails({ body })` 呼叫已在 [#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) 中移除），因此停用 `prompt-injection` 的請求在 `block` 模式下仍然會被拒絕。這是設計使然。停用管道是由呼叫端控制的（請求本文、metadata、標頭），且呼叫端絕對不能關閉運營商所設定的安全控制項（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。來自 [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) 的標頭聯集僅會變更哪些註冊表防護網會被略過；它不會讓客戶端繞過中介軟體。強制性的每個金鑰和每個群組防護網政策已在 v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) 中進行追蹤。請參閱 [Coverage and limits](#coverage-and-limits)。

## 執行順序

對於流經 `src/sse/handlers/chat.ts` 和
`open-sse/handlers/chatCore.ts`（列於
[覆蓋範圍與限制](#coverage-and-limits)中的 chat 系列路由）的每個請求：

1. `resolveDisabledGuardrails(...)` 從 API 金鑰、要求主體和標頭
   建構略過清單。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` 以優先順序遞增的順序
   執行安全護欄：
   - 已停用的安全護欄會被記錄為 `skipped`。
   - 每個安全護欄的 `preCall` 可以透過 `modifiedPayload` 覆寫酬載。
   - 第一個 `block: true` 會使執行鏈短路，且處理常式會回傳
     安全護欄拒絕回應。
3. （可能經過改寫的）酬載會流入組合路由和上游分派。
4. **僅限非串流：** 在組裝回應後，
   `guardrailRegistry.runPostCallHooks(...)` 會對回應執行相同的執行鏈。這裡的 `block: true` 會捨棄上游回應並回傳 HTTP 400。串流回應會完全略過此步驟。

拋出異常的安全護欄會被記錄為 `error: <message>` 並透過 `logger.warn` 記錄日誌，但執行鏈會繼續 —— 這是設計上的預設放行（fail-open）。

## 覆蓋範圍與限制

安全護欄登錄器僅接入 chat 管線中。這些限制由
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` 與
`tests/unit/guardrail-pipeline-characterization.test.ts` 鎖定；當行為改變時，
請謹慎更新這些測試。

### Hook 執行位置

| Hook / 控制              | 執行於                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`        | 由 `handleChat` (`src/sse/handlers/chat.ts`) 處理的請求：`/v1/chat/completions`、`/v1/completions`、`/v1/messages`、`/v1/responses`（與 `/v1/responses/*`）、`/v1/relay/chat/completions`、`/v1/providers/{provider}/chat/completions`、`/v1/api/chat`、`/v1/antigravity`、`/v1beta/models/*` 以及 Telegram chat 代理。同時包含儀表板測試端點 `/api/guardrails/test`。Pre-call 阻擋會回傳 HTTP 400。 |
| `runPostCallHooks`       | 僅限**非串流** chat 回應 (`open-sse/handlers/chatCore/nonStreamingResponse.ts`)。串流回應完全不會到達此處。                                                                                                                                                                                                                                                                                          |
| 串流 PII                 | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`)，當 `PII_RESPONSE_SANITIZATION` 開啟時在 `streamingPipeline.ts` 中管線化。它不是安全護欄，因此停用管道不會影響它。                                                                                                                                                                                                                      |
| 注入防護中介軟體（舊版） | 所有帶有 prompt 的 `/v1` 路由，包含 chat 系列（請參閱 [路由覆蓋範圍](#injection-guard-route-coverage--red-team-phase-8--block-d)）。僅限 prompt 注入。                                                                                                                                                                                                                                               |

### 未涵蓋的範圍

- **媒體、嵌入與資料路由**（`/v1/images/*`、`/v1/embeddings`、
  `/v1/audio/*`、`/v1/videos/generations`、`/v1/music/generations`、
  `/v1/rerank`、`/v1/search`、`/v1/moderations`）從未到達登錄器。那裡不會執行
  PII 遮罩、憑證遮罩或模態橋接。它們唯一的檢查是舊版的注入防護中介軟體。
- **串流回應**沒有呼叫後安全護欄：沒有呼叫後的 `pii-masker` 或
  `credential-masker`，也沒有呼叫後阻擋。只有串流 PII
  轉換會套用（當 `PII_RESPONSE_SANITIZATION` 開啟時）。在串流回應中回顯的憑證不會被遮罩。
- **停用通道與中介軟體（設計使然）：** 中介軟體透過自身對
  `evaluatePromptInjection()` 的呼叫來評估 prompt 注入，且不會
  傳遞任何呼叫者控制的停用清單。`block` 模式是一個強制性的
  邊界，呼叫者控制的停用無法繞過它，包括在 chat 系列路由上
  （[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。停用
  `prompt-injection` 只會略過登錄器安全護欄。

### 哪些元件能在呼叫後之前看到回應

在非串流路徑上，其順序為：記憶萃取 → 內建工具執行 → 呼叫後安全護欄 → 呼叫後阻擋離開 → 語意快取儲存。

- **記憶擷取**與**工具執行**會在 post-call 護欄重寫或阻擋回應之前看到該回應。自 [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) 起，當 `PII_RESPONSE_SANITIZATION` 開啟時（包含串流與非串流模式），記憶擷取會透過 `sanitizePII` 處理擷取的文字，但後續被 post-call 阻擋的回應仍會被提供給記憶與工具。
- **語意快取**會在 post-call 之後儲存回應，因此它會儲存重寫後的回應，且被阻擋的回應永遠不會被快取。快取項目是以每個 API key 作為鍵值。

## 設定

內建防護機制讀取的環境變數：

| Variable                              | Used by                   | Effect                                                                       |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | 設為 `false` 以完全停用偵測。                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | 注入策略：`warn`、`block` 或 `log`。舊版值 `redact` 不會重寫注入文字。       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | 注入防護的模式；同時也是一個會**覆寫**環境變數的資料庫功能旗標（DB > ENV）。 |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` 拒絕的最低嚴重性：`high`（預設）、`medium` 或 `low`。           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` 的舊版別名。                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | 當設為 `true` 時，要求中的 PII 將被遮罩（與注入模式無關）。                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | 控制回應端遮罩器的行為。                                                     |

Modality Bridge 防護機制是從基於資料庫的設定儲存庫 (`getSettings()`) 讀取執行時期組態，而非環境變數。Vision 的主要金鑰為 `modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和 `modalityBridgeCacheMaxEntries`。舊版的 `visionBridge*` 金鑰僅接受作為文件化的單週期讀取備援；儀表板寫入則使用主要金鑰。預設值與備援解析器位於 `src/shared/constants/modalityBridgeDefaults.ts`，而舊版常數則保留在 `src/shared/constants/visionBridgeDefaults.ts` 中。

Audio 使用 `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、`modalityBridgeAudioTimeout` 和 `modalityBridgeAudioMaxClips`，以及共用的 `modalityBridgeCache*` 設定。Audio 沒有舊版金鑰備援，因為這些金鑰是隨著 Modality Bridge 結構描述一同引入的。

Video 使用 `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、`modalityBridgeVideoModel`、`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、`modalityBridgeVideoMaxVideos` 和 `modalityBridgeVideoTimeout`，以及共用的 `modalityBridgeCache*` 設定。它預設為停用，因為 FFmpeg/ffprobe 是選用的運作相依項目，且影格標題會增加延遲與模型成本。

## 自訂防護欄

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

步驟：

1. 建立擴展 `BaseGuardrail` 的 `src/lib/guardrails/myGuardrail.ts`。
2. 實作 `preCall` 與／或 `postCall`。
3. 要麼在匯入時註冊（從 `registerDefaultGuardrails` 推送），要麼在執行階段呼叫 `guardrailRegistry.register(...)` — 註冊表會取代任何具有相同正規化名稱的先前防護欄。
4. 在 `tests/unit/` 下新增測試（現有範例：`tests/unit/guardrails-registry.test.ts`、`tests/unit/prompt-injection-guard.test.ts`、`tests/unit/guardrails/visionBridge.test.ts`）。

## 測試

在測試之間使用 `resetGuardrailsForTests()` 以從已知狀態開始。
傳入 `{ registerDefaults: false }` 以從空白註冊表開始，並僅註冊正在測試的防護欄。Vision Bridge 接受依賴注入（`deps.getSettings`、`deps.callVisionModel`）；Audio Bridge 則公開了針對設定、功能、STT 模型選擇、憑證檢查和轉錄的對等接縫。因此，測試可以在沒有資料庫或網路存取的情況下執行這兩種流程。

## 參見

- `src/lib/guardrails/` — 實作
- `src/shared/utils/inputSanitizer.ts` — 驅動提示詞注入與 PII 遮蔽的共用偵測器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 預設值與強制橋接模型清單
- `src/shared/constants/modalityBridgeDefaults.ts` — 共用的 Vision/Audio 執行階段預設值
- `docs/architecture/RESILIENCE_GUIDE.md` — 正交層（熔斷器、冷卻時間）
- `docs/reference/ENVIRONMENT.md` — 完整的環境變數參考

## 注入防護路由覆蓋與紅隊測試（第 8 階段 · D 區塊）

注入防護（`createInjectionGuard` / `withInjectionGuard`）涵蓋了所有接受使用者提示詞的路由。它會遵守 `INJECTION_GUARD_MODE`（預設為 `warn` = 僅記錄；`block` = 傳回 HTTP 400 `SECURITY_001`）。

| 類型         | 路由                                                                                                                                                 | 預設模式 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 文字（現有） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| 生成式       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| 資料         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

文字擷取（`extractMessageContents`）涵蓋了 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`。

**紅隊測試（每日執行，`nightly-llm-security.yml`）：** promptfoo 驗證每個路由在 `INJECTION_GUARD_MODE=block` 下是否能阻擋 OWASP-LLM 語料庫；garak 執行探測（若無密鑰則跳過）。為了保持一致性，已將 `moderations` 包含在內。阻擋模式是一個強制性邊界：`evaluatePromptInjection()` 會忽略中介軟體傳遞給它的每請求停用清單，因此 `disabledGuardrails` **不會**使路由免於此限制（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。

每日執行的工作流程（`.github/workflows/nightly-llm-security.yml`，排程與手動觸發）包含兩個工作：

- **`promptfoo-guard`（阻擋性）** — 以 `INJECTION_GUARD_MODE=block` 執行 `promptfoo eval -c promptfooconfig.yaml`。每個對抗性案例（例如 "ignore all previous instructions…"、DAN 風格的越獄）都斷言回應帶有 `error.code === "SECURITY_001"`，即防護欄確實拒絕了該請求。
- **`garak`（建議性）** — 針對本機 OmniRoute 實例（`http://localhost:20128/v1`）執行 garak `--probes promptinject,dan,leakreplay`。受提供者密鑰（`PROMPTFOO_PROVIDER_KEY`）保護；會順利跳過並附加 `|| true`，因此在回報時不會導致 CI 失敗。

防護輔助函式（`createInjectionGuard` / `withInjectionGuard`）的涵蓋範圍跨越了每個帶有提示詞的 `/v1` 路由；提示詞文字是由 `src/shared/utils/inputSanitizer.ts` 中的 `extractMessageContents()` 從 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` 中提取出來的。

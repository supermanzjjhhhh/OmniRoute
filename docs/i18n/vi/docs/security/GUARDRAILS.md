# Guardrails (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Nguồn tin cậy:** `src/lib/guardrails/`
> **Cập nhật lần cuối:** 2026-10-17 — v3.8.52 (đã thêm [Coverage and limits](#coverage-and-limits):
> các tuyến đường và đường dẫn phản hồi mà các hook tiếp cận, các header vô hiệu hóa đã hợp nhất (#16412), chế độ
> chặn injection làm ranh giới bắt buộc (#16413), và những gì nhìn thấy phản hồi trước post-call)

Guardrails thực thi tính an toàn, chính sách và chuyển đổi nội dung tại ranh giới
giữa OmniRoute và các nhà cung cấp thượng nguồn. Mỗi guardrail có thể kiểm tra (và
tùy chọn từ chối, chuyển đổi hoặc chú thích) payload yêu cầu (`preCall`) và
phản hồi thượng nguồn (`postCall`).

Hệ thống ở chế độ **fail-open**: nếu một guardrail ném ra lỗi trong quá trình thực thi, registry sẽ
ghi lại lỗi đó và tiếp tục với guardrail tiếp theo thay vì làm thất bại
yêu cầu. Việc chặn là một quyết định rõ ràng (`block: true`), không bao giờ là sự cố ngẫu nhiên.
Ngoại lệ duy nhất là yêu cầu bị hủy bỏ: khi `signal` của trình gọi bị hủy,
một guardrail ném lỗi sẽ từ chối việc chạy hook thay vì bị bỏ qua.

Các hook **không** chạy trên mọi tuyến đường hoặc mọi phản hồi. Hãy đọc
[Coverage and limits](#coverage-and-limits) trước khi phụ thuộc vào một guardrail làm biện pháp
kiểm soát bảo mật.

## Guardrails tích hợp sẵn

Registry tự động tải sáu guardrail theo thứ tự ưu tiên khi import
(xem `registry.ts` → `registerDefaultGuardrails()`):

| Ưu tiên | Tên                 | Giai đoạn      | Tệp                   |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Số ưu tiên thấp hơn sẽ chạy **trước**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Mô hình cơ sở GLM 5.3 và `glm-5.3-{low,high,max}` có metadata registry/spec
`supportsVision:false` rõ ràng. Các biến thể GLM 5.3 Flash
vẫn giữ nguyên là mô hình thị giác nguyên bản (native-vision). Tuyến đường `/v1/messages` của Claude Code đi vào
chuỗi guardrail pre-call `handleChat` dùng chung **trước** bước dịch từ Claude sang OpenAI;
các hình ảnh kết quả công cụ `Read` lồng nhau phải được mô tả hoặc xử lý
trước khi quá trình dịch đó đưa chúng vào nội dung `image_url` của OpenAI (#17069).

Chặn các yêu cầu chứa hình ảnh hướng đến các **mô hình phi thị giác** và hoặc là
định tuyến lại toàn bộ yêu cầu sang một mô hình có khả năng thị giác, hoặc thay thế các phần hình ảnh
bằng các mô tả văn bản được tạo bởi một mô hình thị giác có thể cấu hình trước
cuộc gọi thượng nguồn. Điều này cho phép các nhà cung cấp chỉ hỗ trợ văn bản xử lý một cách trong suốt
các payload đa phương thức.

Quy trình:

1. Bỏ qua nếu mô hình đích đã hỗ trợ thị giác (trừ khi nó xuất hiện trong
   danh sách cầu nối bắt buộc `isVisionBridgeForcedModel`).
2. Trích xuất các phần hình ảnh thông qua `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), hàm này ủy quyền cho **trình phát hiện phương tiện thống nhất**
   `detectMediaParts()` trong `open-sse/utils/mediaParts.ts` — nguồn chân lý duy nhất
   được chia sẻ với bộ lọc tương thích combo.
   Việc trích xuất được đưa vào danh sách cho phép đối với các hình dạng mà `replaceImageParts` có thể ghép nối lại
   (hợp đồng trích xuất ↔ thay thế): `image_url` của OpenAI, `source.type:"base64"` dạng base64 của Anthropic,
   `source.type:"url"` URL của Anthropic và `input_image` của Responses API. Các hình ảnh khớp nằm lồng bên trong
   `tool_result.content` của Claude Code và các đầu ra công cụ Responses cũng được trích xuất và
   thay thế tại các đường dẫn ban đầu của chúng; các hình dạng chỉ báo là tài liệu của bộ lọc combo
   và không được trích xuất.
   Bỏ qua nếu không tìm thấy phần nào.
3. Phân giải cấu hình thời gian chạy thông qua `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): các khóa cài đặt `modalityBridge*` mới
   sẽ được ưu tiên; các khóa `visionBridge*` cũ vẫn là **phương án dự phòng một chu kỳ**
   (cửa sổ quay lại). Bỏ qua trước bất kỳ việc duyệt phương tiện nào khi cầu nối bị vô hiệu hóa.
4. Bộ chọn chế độ (`modalityBridgeVisionMode`, xem bảng bên dưới) quyết định
   định tuyến lại hay mô tả. Định tuyến lại trả về `modifiedPayload` chỉ với trường `model`
   được hoán đổi, cộng với meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Đường dẫn mô tả: giới hạn số lượng hình ảnh ở mức `maxImages`, soạn thảo câu lệnh nhận thức theo tác vụ,
   tham khảo bộ đệm mô tả, gọi mô hình thị giác **song song**
   (`Promise.allSettled`), và chèn các phần văn bản `[Image N]: <description>` vào
   vị trí của chúng. Quá trình mô tả thất bại trả về `null`: hình ảnh thô được bảo toàn cho
   các mục tiêu không xác định/có khả năng thị giác (#4012), nhưng **mục tiêu trực tiếp chỉ có văn bản được xác nhận**
   hoặc combo không có thị giác sẽ nhận được một đoạn văn bản mẫu rõ ràng
   `(unavailable — no vision-capable provider connected)` cho mọi hình ảnh chưa được mô tả,
   bao gồm các thất bại một phần và hình ảnh vượt quá giới hạn lệnh gọi mô tả (#17069). Phương án dự phòng mô tả combo thất bại hoàn toàn hiện tại
   vẫn được giữ nguyên (#8430).
6. Trả về `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Bộ chọn chế độ (`modalityBridgeVisionMode`)

| Chế độ     | Mặc định | Hành vi                                                                                                                                                                                                                                                                                                          |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Heuristic cũ, giữ nguyên (#6640/#7204): các mô hình không phải combo/`auto/` được định tuyến lại đến mô hình thị giác tốt nhất trừ khi mô hình ban đầu đã có thông tin xác thực sử dụng được (khi đó sẽ mô tả); các mục tiêu combo luôn mô tả.                                                                   |
| `describe` |          | Luôn mô tả — khối định tuyến lại bị bỏ qua hoàn toàn; mô hình do người dùng chọn luôn phản hồi.                                                                                                                                                                                                                  |
| `reroute`  |          | Buộc định tuyến lại: bộ bảo vệ giữ-mô-hình-có-thông-tin-xác-thực bị bỏ qua. Bộ bảo vệ thông tin xác thực của **mục tiêu** định tuyến lại vẫn được áp dụng — khi không có mục tiêu thị giác nào sử dụng được, cầu nối sẽ chặn với một lỗi rõ ràng thay vì mô tả hoặc gửi ảnh gốc đến mục tiêu chỉ hỗ trợ văn bản. |

Các chế độ bắt buộc sẽ ngắt mạch **trước** khi heuristic tự động chạy; hành vi của `auto` giống hệt từng byte so với bộ bảo vệ trước PR-1.

#### Phạm vi khóa API (`visionBridgeKeyScope.ts`)

Khi khóa API của người gọi hạn chế `allowedConnections`, các nhóm hạn mức (`allowedQuotas`) hoặc các mô hình (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), cầu nối sẽ chỉ chọn các mô hình định tuyến lại và mô hình mô tả mà khóa có thể sử dụng, trên các kết nối mà khóa có thể sử dụng. Cuộc gọi mô tả sau đó luôn đi qua vòng lặp nội bộ OmniRoute với tiêu đề `x-omniroute-self-loop-key-id`, để yêu cầu trò chuyện nhận được thực thi lại chính sách kết nối và mô hình của khóa đó. `enforceApiKeyPolicy()` chỉ tuân thủ tiêu đề đó khi đi kèm với mã thông báo vòng lặp nội bộ (self-loop bearer), do đó nó chỉ có thể thu hẹp quyền truy cập và một ID không phân giải được sẽ bị từ chối.

Nếu không có mô hình thị giác nào được phép cho khóa, một **mục tiêu chỉ hỗ trợ văn bản đã được xác nhận** sẽ từ chối yêu cầu hình ảnh cục bộ với mã lỗi HTTP 400 rõ ràng thay vì chuyển tiếp các byte hình ảnh đến một hệ thống thượng nguồn không có khả năng xử lý (#17069). Đối với các mục tiêu có khả năng thị giác không xác định hoặc nguyên bản, đường dẫn mô tả vẫn giữ nguyên hành vi mở khi thất bại (fail-open) trước đó (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Các yêu cầu không có khóa và các khóa không có các hạn chế này sẽ hoạt động hoàn toàn giống như trước đây.

#### Lời nhắc mô tả nhận thức tác vụ (`modalityBridgeVisionTaskAware`)

Mặc định là **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) nối thêm văn bản của **tin nhắn người dùng cuối cùng** (được cắt ngắn đến 500 ký tự) vào lời nhắc mô tả cơ sở, hướng mô tả theo những gì người dùng thực sự yêu cầu (mẫu codex-vision-proxy) và yêu cầu mô hình thị giác chuyển mã văn bản hiển thị. Khi tắt cờ — hoặc không có văn bản người dùng — lời nhắc cơ sở được sử dụng mà không thay đổi.

Yêu cầu tương thích với OpenAI của vòng lặp nội bộ mô tả (`callVisionModelSingle()` trong `visionBridgeHelpers.ts`) luôn yêu cầu `image_url.detail: "high"` — một cách vô điều kiện, cho mọi người gọi/nhà cung cấp, không bị kiểm soát bởi bất kỳ tín hiệu khách hàng nào. Lấy mẫu chi tiết thấp làm giảm độ chính xác của OCR cho chính xác tác vụ chuyển mã văn bản mà lời nhắc này yêu cầu, do đó cuộc gọi mô tả luôn yêu cầu chi tiết cao bất kể cấp độ chi tiết mà yêu cầu đến ban đầu sử dụng là gì. Điều này chỉ ảnh hưởng đến phần thân yêu cầu mô tả nội bộ; nó không làm thay đổi cách OmniRoute chuyển tiếp `image_url.detail` của chính người gọi trên yêu cầu chính — giá trị mặc định đó được áp dụng riêng biệt, và chỉ dành cho các máy khách OpenCode được phát hiện, trong `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Nhánh định dạng dây Anthropic của vòng lặp nội bộ mô tả không có trường `detail` và không bị ảnh hưởng bởi bất kỳ giá trị mặc định nào.

#### Giới hạn đầu ra mô tả (`modalityBridgeVisionMaxChars`)

| Khóa                           | Mặc định | Phạm vi            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` hoặc 100–50000 |

`0` (mặc định) có nghĩa là **không giới hạn** — mô tả được trả về bởi `callVisionModel()` được chuyển qua mà không sửa đổi, giữ nguyên hành vi hiện tại. Bất kỳ giá trị nào trong phạm vi 100–50000 sẽ cắt ngắn mô tả với hậu tố `…` trước khi nó được nối lại thành `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` trong `src/lib/guardrails/visionBridge.ts`). Hãy tăng giá trị này cho các tác vụ OCR nặng về chi tiết, nơi mô hình hạ lưu cần bản phiên âm đầy đủ; giảm nó để giới hạn việc sử dụng token trên các mô hình thị giác dài dòng. Trường trên bảng điều khiển nằm ở bảng Nâng cao của tab Thị giác (`modality-bridge-max-chars` trong `ModalityBridgeVisionTab.tsx`) và kẹp bất kỳ giá trị nào từ 1 đến 99 lên mức tối thiểu 100 trong khi vẫn giữ nguyên giá trị `0` rõ ràng — `0` là một giá trị Zod hợp lệ theo đúng nghĩa của nó (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), chứ không chỉ đơn thuần là giá trị mặc định "chưa thiết lập".

#### Bộ nhớ đệm mô tả (`modalityBridge/bridgeCache.ts`)

Bộ nhớ đệm LRU + TTL trong bộ nhớ cho các đầu ra mô tả, được chia sẻ trên toàn bộ tiến trình.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` với khung tiền tố độ dài (không có xung đột ranh giới trường). Thành phần mô hình là mô hình cầu nối **đã được cấu hình**, không phải mô hình thực sự đã trả lời — `callVisionModel` có thể dự phòng nội bộ, và việc tạo khóa cho mỗi lần thử sẽ làm phân mảnh bộ nhớ đệm. Các mô tả thất bại sẽ không bao giờ được lưu vào bộ nhớ đệm. Các cài đặt:

| Khóa                            | Mặc định | Phạm vi |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Chuẩn hóa hình ảnh từ xa (mô tả tự gọi lại / lấy base64)

Khi bridge tự fetch một hình ảnh **từ xa** — cuộc gọi tự gọi mô tả của Anthropic và việc chuyển đổi định dạng dây claude sang base64 (`ensureBase64ImagesForClaudeWire`), cả hai đều thông qua `fetchRemoteImageAsDataUri()` trong `visionBridgeHelpers.ts` — data URI kết quả sẽ được truyền qua `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) trước khi được nhúng vào yêu cầu mô hình vision. Các hình ảnh quá khổ được thu nhỏ xuống còn **cạnh dài 2048px** (khớp với giới hạn kích thước mà OpenAI/Anthropic đã áp dụng ở phía máy chủ), giúp giảm bớt dung lượng tải lên/độ trễ mà không làm thay đổi nội dung mà mô hình vision nhìn thấy. Việc thay đổi kích thước sử dụng `sharp`, được tải qua dynamic import: trên nền tảng mà tệp nhị phân gốc của nó không tải được, `normalizeDataUri()` **không bao giờ ném lỗi** — nó sẽ quay lại chuyển tiếp các byte gốc, do đó đường dẫn mô tả/chuyển đổi base64 vẫn luôn hoạt động. Các byte không phải hình ảnh (một lần fetch không trả về hình ảnh có thể giải mã) cũng được chuyển tiếp mà không bị thay đổi. Quá trình chuẩn hóa này chỉ áp dụng cho các hình ảnh mà bridge fetch cho lệnh tự gọi của chính nó — nó không bao giờ được áp dụng cho payload chuyển tiếp thô của bên gọi, phù hợp với nguyên tắc đột biến chỉ khi chọn tham gia (Quy tắc cứng #20).

#### Lược đồ cài đặt + migration

Các khóa `modalityBridge*` mới được xác thực bằng Zod trong `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, bộ ba `modalityBridgeCache*`, và nhóm `modalityBridgeAudio*` được sử dụng bởi Audio Bridge. Quá trình migration `141_modality_bridge_settings.sql` sao chép các giá trị `visionBridge*` kế thừa hiện có sang các khóa mới tương ứng (có tính bất biến đẳng phí, không bao giờ ghi đè lên giá trị `modalityBridge*` do nhà vận hành đặt); các khóa kế thừa vẫn được chấp nhận làm phương án dự phòng đọc trong một chu kỳ phát hành.

#### Tiêu đề minh bạch + thống kê

Các phản hồi được chuyển đổi qua mô tả mang tiêu đề `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (được xây dựng bởi `buildModalityBridgeHeader()` trong `modalityBridge/bridgeStats.ts`, được gắn dấu bởi `withModalityBridgeHeader()` trong `src/sse/handlers/chatHelpers.ts`). Các yêu cầu được định tuyến lại sẽ **không có** tiêu đề — payload không bị chạm vào và việc hoán đổi mô hình đã hiển thị rõ trong trường `model` của phần thân phản hồi.

`GET /api/modality-bridge/stats` (xác thực quản lý, cùng cấp với `GET /api/settings`) trả về các bộ đếm theo từng phương thức trong bộ nhớ `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` cho `vision`, `audio`, và `video`. `averageLatencyMs` sử dụng `latencySamples`, không phải tất cả các lần thử, làm mẫu số của nó; một thao tác không có thời gian sẽ không tạo ra mẫu không mili-giây giả tạo. `bridged` vẫn là bí danh tương thích ngược cho các lần chuyển đổi thành công; các lần thử thất bại không làm tăng giá trị này. Các bộ đếm sẽ tự động đặt lại khi quá trình khởi động lại theo thiết kế (telemetry, không phải kế toán).

#### Cấu hình bảng điều khiển

Trang bảng điều khiển chuyên dụng là `/dashboard/settings/modality-bridge`. Các tab `Vision`, `Audio`, và `Video` có thể truy cập qua URL giữ nguyên các tham số truy vấn trong khi chuyển đổi giá trị `tab`. Tab Vision hiển thị tính năng bật/tắt, chế độ, lựa chọn mô hình (bao gồm cả mặc định tự động), gợi ý nhận thức tác vụ, các giới hạn nâng cao về thời gian chờ/hình ảnh/độ dài mô tả/cache, bộ đếm thời gian chạy, và một yêu cầu mẫu được bảo vệ. Tab Audio cũng đã hoạt động: nó hiển thị tính năng bật/tắt, bộ chọn mô hình chỉ dành cho STT với tùy chọn Auto, giới hạn thời gian chờ/độ dài clip tối đa, bộ đếm audio, và một bài kiểm tra mẫu `input_audio`. Tab Video có đầy đủ chức năng: nó báo cáo trạng thái thời gian chạy của FFmpeg/ffprobe — một trong bốn trạng thái UI rõ ràng (`unknown` trong khi quá trình dò tìm đang diễn ra hoặc không thể hoàn thành, `restricted` trên máy chủ bảng điều khiển không phải loopback nơi quá trình dò tìm bị bỏ qua ở phía máy khách, `unavailable` khi đã dò tìm và xác nhận là bị thiếu, hoặc `available` với các phiên bản FFmpeg/ffprobe) — lưu giữ các giới hạn bật/mô hình/khung hình/video/thời gian chờ, lọc bộ chọn mô hình thành các mô hình có khả năng xử lý vision, và hiển thị các bộ đếm video.

Thẻ Vision Bridge trước đây trong phần cài đặt AI là một liên kết tương thích đến trang mới; nó không còn sở hữu bản sao thứ hai của biểu mẫu này nữa. Media Providers cũng liên kết các quy trình làm việc Image-to-Text và Speech-to-Text với các tab Modality Bridge tương ứng mà không xóa bỏ khu vực thử nghiệm Speech-to-Text hiện có.

**Bỏ qua kiểm tra chấp nhận self-loop:** khi cuộc gọi mô tả được định tuyến qua vòng lặp `/v1` của chính OmniRoute (mô hình nhà cung cấp phi chuẩn), yêu cầu con sẽ gửi `x-omniroute-admission-bypass: internal` và được xác thực bằng thông tin xác thực self-loop đã giải quyết — giá trị đánh dấu `sk_omniroute` cục bộ ở chế độ cục bộ, hoặc khóa môi trường `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` do nhà vận hành cấu hình (#1350) để các bản triển khai `REQUIRE_API_KEY=true` vẫn có thể chạy cuộc gọi mô tả. Việc bỏ qua này chỉ được tôn trọng đối với các thông tin xác thực chính xác đó, do đó các máy khách bên ngoài không thể sử dụng tiêu đề này để bỏ qua việc kiểm tra chấp nhận.

Các giá trị mặc định cũ nằm trong `src/shared/constants/visionBridgeDefaults.ts`; các giá trị mặc định mới về chế độ/nhận thức tác vụ/cache và bộ giải quyết cài đặt nằm trong `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail hiển thị một tùy chọn hàm khởi tạo `deps` để các bài kiểm tra có thể tiêm các bản triển khai `getSettings` và `callVisionModel` giả lập.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Chặn các yêu cầu trò chuyện có chứa âm thanh trước khi chúng đến một mục tiêu không được biết là chấp nhận đầu vào âm thanh. Nó không bao giờ định tuyến lại yêu cầu trò chuyện: các phần âm thanh được chuyển đổi thành văn bản thông qua điểm cuối multipart tương thích với OpenAI hiện có và mô hình trò chuyện đã chọn sẽ tiếp tục với các bản ghi văn bản.

Luồng:

1. Giải quyết `supportsAudio` thông qua `getResolvedModelCapabilities()`. Siêu dữ liệu registry nhà cung cấp rõ ràng sẽ được ưu tiên, tiếp theo là siêu dữ liệu mô hình tĩnh, rồi đến `modalities_input` đã được đồng bộ hóa. Danh sách đầu vào được khai báo không có `audio` là `false`; không có bằng chứng khả năng nào sẽ giữ nguyên `null`. Cả `false` và `null` đều kích hoạt cầu nối bảo thủ, trong khi `true` bỏ qua nó.
2. Giải quyết các cài đặt `modalityBridgeAudio*` và trích xuất các phần audio cấp cao nhất có thể nối từ mọi thông điệp thông qua trình phát hiện chung `detectMediaParts()`. Các hình dạng cấu trúc được hỗ trợ là `input_audio`, `audio_url` và `source.media_type: "audio/*"` của OpenAI. Audio lồng nhau được phát hiện để định tuyến nhưng không bị xóa bởi đường dẫn nối. Công việc bị giới hạn bởi `modalityBridgeAudioMaxClips`; các phần sau đó sẽ giữ nguyên không đổi.
3. Tôn trọng một `provider/model` được cấu hình, hoặc để `selectAudioBridgeModel()` duyệt qua `AUDIO_TRANSCRIPTION_PROVIDERS` theo thứ tự danh mục ổn định và chọn mô hình đầu tiên có thông tin xác thực nhà cung cấp hoạt động khả dụng.
4. `callAudioTranscription()` chuyển đổi audio base64/data-URI thành một `file` đa phần (multipart), hoặc tải xuống một `audio_url` từ xa thông qua bộ bảo vệ đầu ra chỉ dành cho công khai với tính năng ghim DNS và giới hạn 25 MB. Sau đó, nó gửi POST tệp và mô hình đã chọn tới vòng lặp cục bộ `/v1/audio/transcriptions`, được xác thực bằng `resolveSelfLoopBearer()`. Tuyến đường phiên âm hiện tại thực hiện tra cứu thông tin xác thực thông thường, xử lý giới hạn tốc độ/thời gian hồi chiêu và điều phối nhà cung cấp.
5. Các bản phiên âm thành công sẽ thay thế các phần của chúng bằng `[Audio N]: <transcript>`. Các lệnh gọi chạy với `Promise.allSettled`: một lỗi đơn lẻ sẽ giữ lại phần audio gốc đó (hợp đồng #4012). Nếu mọi lệnh gọi đều thất bại và mục tiêu được chứng minh là `supportsAudio === false`, các phần sẽ trở thành `[Audio N]: (unavailable — no STT provider connected)` (hợp đồng #8430). Đối với một mục tiêu chưa biết (`null`), kết quả thất bại toàn bộ sẽ giữ nguyên không đổi. Một mục tiêu chỉ có văn bản đã được chứng minh không có thông tin xác thực STT khả dụng sẽ nhận được đoạn stub tường minh tương tự mà không cần đưa ra lệnh gọi mạng.

Các bản phiên âm thành công sử dụng bộ nhớ đệm LRU/TTL Modality Bridge trên toàn tiến trình. Khóa kết hợp tham chiếu audio, nhãn thao tác `audio-transcription` ổn định và mô hình STT đã chọn; các lỗi không bao giờ được lưu vào bộ nhớ đệm. Các lần thử audio cập nhật các bộ đếm `bridged`, `cacheHits`, `failures` và `lastUsedAt` được chia sẻ. Các phản hồi đã được chuyển đổi mang tiêu đề `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; các yêu cầu không chạm đến sẽ không nhận được phân đoạn Audio Bridge.

Các cài đặt thời gian chạy được hỗ trợ bởi cơ sở dữ liệu và được xác thực bằng Zod:

| Key                           | Default | Range               |
| ----------------------------- | ------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                   |
| `modalityBridgeAudioModel`    | `""`    | Tự động hoặc STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                |

Bộ nhớ đệm chia sẻ tiếp tục được kiểm soát bởi `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` và `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chặn các phần video cấp cao nhất trong `messages` của Chat Completions và `input` của Responses API trước khi gọi một mục tiêu không có hỗ trợ video gốc được biết đến. Các hình dạng được hỗ trợ là `input_video`, `video_url`, `video_source`, URL HTTPS và các URI dữ liệu `data:video/*;base64,...`. Tên tệp thuần túy trong văn bản không được coi là video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) chịu trách nhiệm duyệt yêu cầu, kiểm tra khả năng/chính sách, tổng hợp theo từng yêu cầu và payload phản hồi. Công việc theo từng video — thu thập, bộ nhớ đệm toàn bộ kết quả, mô tả chuỗi khung hình (kết hợp bất kỳ bản ghi âm nào do người gọi khai báo), và các chỉ số/hủy/dọn dẹp cho mỗi lần thử — được ẩn đằng sau `processVideoPart` trong `videoBridgePipeline.ts`, được gọi một lần cho mỗi phần video bên trong vòng lặp của `preCall`. Mô-đun đó cũng định nghĩa các ranh giới cổng rõ ràng `VideoMediaBrokerPort` (thu thập các byte và trích xuất các khung hình được lấy mẫu), `VideoAudioTranscriptionPort` (kết hợp bản ghi âm do người gọi khai báo với các chú thích được lấy mẫu), và `VideoDrilldownPort` (ranh giới lưu trữ chi tiết khung hình; chưa được tích hợp vào `processVideoPart` — hiện tại chỉ có tuyến đường riêng biệt `/api/modality-bridge/video/drilldown` ghi lại các mục chi tiết).

Đường dẫn yêu cầu công khai `/v1` không bao giờ nhập hoặc gọi một tiến trình con. Các video từ xa được tải xuống dưới giới hạn 50 MiB; các video base64 nội tuyến có giới hạn giải mã thận trọng 36 MiB cho mỗi video để phong bì mô hình/tin nhắn/khung hình có thể nằm trong giới hạn tiếp nhận yêu cầu JSON công khai là 50 MiB. Các ước tính về độ dài nội tuyến và kích thước sau giải mã được kiểm tra trước khi cấp phát. HTTPS là bắt buộc đối với URL từ xa ban đầu và mọi chuyển hướng, sử dụng bộ bảo vệ đầu ra công khai hiện có với tính năng ghim DNS. Các byte sau đó vượt qua ranh giới trình môi giới nội bộ chính xác `POST /api/modality-bridge/video/extract`. Tuyến đường đó vừa là `LOCAL_ONLY` vừa là `SPAWN_CAPABLE`, chỉ chấp nhận yêu cầu loopback được xác thực theo từng tiến trình, đáng tin cậy và không bao giờ chấp nhận URL, đường dẫn hệ thống tệp, tệp thực thi hoặc danh sách đối số. Pipeline kích thước phần thân API và trình đọc phần thân gia tăng của trình xử lý thực thi độc lập giới hạn đầu vào trình môi giới là 50 MiB. Hàng đợi có giới hạn của nó thực hiện một lần trích xuất tại một thời điểm, cho phép bốn công việc đang chờ và giới hạn đầu vào đang chờ ở mức 100 MiB.

Bên trong broker, `ffprobe` đọc một tệp cục bộ riêng tư; danh sách cho phép định dạng cố định loại trừ các định dạng playlist và manifest. Đối với các vùng chứa thuộc họ MOV được phép, các tham chiếu dữ liệu MOV bên ngoài vẫn bị vô hiệu hóa theo mặc định và lệnh cố định không chọn tham gia chúng. Cả `ffprobe` và `ffmpeg` đều sử dụng danh sách trắng giao thức chỉ có `file`, một luồng, các mảng đối số cố định, không dùng shell và các tệp thực thi được phân giải từ `PATH`. Các luồng bìa ảnh đính kèm không phải là ứng viên có thể phát. Tất cả các luồng có thể phát phải thỏa mãn các giới hạn, và luồng mặc định tường minh được ưu tiên trước cơ chế dự phòng chỉ mục thấp nhất tất định. Video bị giới hạn ở 600 giây, 8.192 pixel mỗi chiều và 33.554.432 pixel nguồn. FFmpeg lấy mẫu 1–16 khung hình JPEG điểm giữa, thu nhỏ cạnh dài xuống tối đa 1.024 pixel mà không phóng to các đầu vào nhỏ hơn, và không bao giờ nhận URL. Việc lấy mẫu là `uniform` theo mặc định. Các chính sách tùy chọn `scene_aware` và thử nghiệm `segment_aware` thực hiện thêm một lượt FFmpeg cố định trên luồng cục bộ đã được xác thực, chọn các dấu thời gian cảnh `showinfo` bị giới hạn, và quay trở lại dự phòng một cách tất định về các điểm giữa `uniform` tương ứng khi trình phát hiện thất bại, hết thời gian chờ, đầu ra bị lỗi hoặc tập ứng viên trống. Chế độ segment-aware phân bổ các mẫu điểm giữa tỷ lệ thuận với các khoảng cảnh đã được xác thực; bằng chứng và hành vi dự phòng của segment-aware được chi tiết bên dưới. Giới hạn cứng 16 khung hình được áp dụng sau khi lựa chọn trong mọi chính sách. Khi một yêu cầu scene-aware chỉ có ngân sách một khung hình, nó sử dụng điểm giữa `uniform` của video đầy đủ hoặc cửa sổ tiêu điểm hoạt động và báo cáo `policyEffective: uniform`: một khung hình cảnh được chọn đơn lẻ không thể bảo toàn cả hai đầu thời gian. Người gọi có thể tùy chọn cung cấp một cửa sổ tiêu điểm hữu hạn (giây `start`/`end`); các giới hạn được kẹp vào thời lượng phương tiện, các cửa sổ bị đảo ngược hoặc không hữu hạn sẽ bị từ chối, và tất cả các chính sách lấy mẫu chỉ được thực hiện bên trong khoảng thời gian đã chuẩn hóa. Cửa sổ kết quả được bao gồm trong siêu dữ liệu lấy mẫu và trong tiền tố mô tả không đáng tin cậy để các mô hình hạ nguồn có thể phân biệt một đoạn trích tập trung với toàn bộ dòng thời gian.

Tiêu điểm chú thích ngữ nghĩa là một thiết lập riêng biệt, tường minh. Chế độ phân tích `full` mặc định giữ nguyên lời nhắc khung hình hiện tại và không bao giờ chuyển tiếp văn bản yêu cầu tới mô hình chú thích. Ở chế độ `focused`, cầu nối chỉ đọc `text`/`input_text` do người dùng soạn thảo không trống mới nhất từ cùng một vùng chứa Chat hoặc Responses, chuẩn hóa thành NFC, thu gọn các ký tự điều khiển và khoảng trắng, đồng thời giới hạn ở 500 điểm mã Unicode. Kết quả trống sẽ quay trở lại lời nhắc `full` chính xác. Một gợi ý có thể sử dụng được được tuần tự hóa dưới dạng JSON trong một khối untrusted-user-context chuyên dụng và chỉ có thể ưu tiên các chi tiết quan sát được; nó không thể ghi đè lên cảnh báo riêng biệt chống lại việc tuân theo các hướng dẫn hiển thị hoặc nghe được trong phương tiện truyền thông. Tiêu điểm văn bản không bao giờ suy luận `start`/`end` hoặc thay đổi bộ lấy mẫu thời gian.

#### Bằng chứng phân đoạn cấu trúc FU-07

`segment_aware` sử dụng một lượt phân tích trước bị giới hạn trên luồng video cục bộ đã được xác thực. Chuỗi bộ lọc cố định trước tiên thu tỷ lệ xuống chiều rộng tối đa 320 pixel, phát hiện các thay đổi cảnh và khoảng thời gian đóng băng, sau đó lấy mẫu ở tốc độ 1 khung hình mỗi giây đối với độ mờ, độ sáng trung bình và thông tin không gian/thời gian. Lượt này bị giới hạn ở 600 mẫu cấu trúc, một luồng FFmpeg/bộ lọc, danh sách trắng giao thức và vùng chứa chỉ có `file` tương tự, giới hạn đầu ra tiến trình 1 MiB, và tối đa 30 giây bên trong thời hạn/hủy chung của broker. Nó không bao giờ chấp nhận lệnh, bộ lọc, đường dẫn hoặc URL từ yêu cầu.

Các giá trị cấu trúc là bằng chứng lấy mẫu tất định, không phải là sự hiểu biết video ngữ nghĩa. Chúng không suy luận chủ thể, hành động, chú thích, giọng nói hoặc ý định của người dùng. Ranh giới cảnh và đóng băng tạo thành các phân đoạn; độ bao phủ đóng băng, độ mờ, độ phơi sáng, chi tiết không gian và sự thay đổi thời gian chỉ ảnh hưởng đến cách phân bổ ngân sách 1–16 khung hình hiện có. Một phân đoạn đóng băng hoàn toàn bị giới hạn ở một khung hình, trong khi các phân đoạn không đóng băng cạnh tranh cho ngân sách còn lại. Khi số lượng ranh giới vượt quá số khung hình, độ bao phủ dòng thời gian đồng đều được duy trì để các cú cắt nhanh sớm không thể che giấu một phân đoạn kéo dài phía sau. Các ranh giới cảnh nằm trong độ phân giải phân tích 1 giây của ranh giới đóng băng sẽ được hợp nhất.

Các bộ lọc bị thiếu, bằng chứng lỗi/trống, lỗi trình phát hiện hoặc thời gian chờ phân tích trước bị giới hạn sẽ quay trở lại phương án mở chính sách điểm giữa `uniform` chính xác. Việc người gọi hủy hoặc hết thời hạn của broker không áp dụng phương án mở: nó chấm dứt tiến trình con đang chạy, ngăn chặn việc trích xuất khung hình sau đó, và cây thư mục tạm thời riêng tư được xóa trong `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` tạo ra các fixture FFmpeg thực tế tất định cho khoản tiết kiệm lệnh gọi chú thích sau khử trùng lặp, phân bổ ngân sách chuyển động dày đặc, bằng chứng độ mờ/phơi sáng/SI-TI, các cú cắt nhanh với phần đuôi dài và các trường hợp dương tính giả mờ dần dần. Nó ghi lại thời gian thực phân tích trước và, nơi có sẵn `/usr/bin/time`, CPU của tiến trình con và mức đỉnh RSS. Các kiểm tra chất lượng của nó chỉ là các oracle cấu trúc. Chất lượng mô hình chú thích thực tế vẫn ở trạng thái `HOLD` vì bộ khai thác này không có điểm cuối được ủy quyền hoặc giám khảo cố định. Khoản tiết kiệm tiền tệ cũng vẫn ở trạng thái `HOLD` trừ khi `--caption-cost-per-call-usd` cung cấp một ước tính dương rõ ràng cho mỗi lần gọi; tập lệnh không bao giờ bịa đặt bất kỳ kết quả nào trong hai kết quả đó.

Mỗi khung hình được giới hạn ở 4 MiB, tổng cộng các khung hình thô là 23 MiB và phản hồi broker được tuần tự hóa là 32 MiB. Thư mục tạm riêng tư sẽ được xóa trong khối `finally`. OmniRoute không đóng gói sẵn FFmpeg và không chấp nhận đường dẫn tệp thực thi tùy chỉnh. Trước khi tạo chú thích, bridge thực hiện một lượt khử trùng lặp hình ảnh thận trọng: mỗi tệp JPEG được thu nhỏ thành một bộ đệm độ xám 16×16 và chỉ được so sánh với khung hình cuối cùng được giữ lại. Đối với ngân sách chú thích được yêu cầu lớn hơn một khung hình, quá trình trích xuất cung cấp một tập hợp ứng viên bị giới hạn lên đến gấp đôi ngân sách đó và không quá 16 khung hình. Giới hạn được yêu cầu chỉ được áp dụng sau khi khử trùng lặp, với các ứng viên được chọn đầu tiên và cuối cùng được giữ lại trong quá trình lọc mỏng cuối cùng khi ngân sách có ít nhất là hai. Chính sách có phiên bản `grayscale-16x16-mean-cells-v2` sử dụng giá trị lớn hơn giữa độ lệch luma trung bình và tỷ lệ các ô thu nhỏ có độ lệch đã chuẩn hóa ít nhất là 0,05. Ngưỡng trùng lặp là hằng số 0,04, được chọn vì tính dự đoán được thay vì phơi bày dưới dạng cài đặt thời gian chạy. Tín hiệu tương phản cao thứ cấp này bảo tồn chuyển động nhỏ và các thay đổi văn bản hiển thị mà phép so sánh chỉ dựa trên giá trị trung bình có thể bỏ sót. Các lỗi của bộ so sánh hoặc bộ giải mã sẽ fail open và giữ lại vùng phủ sóng. Siêu dữ liệu đầu ra phân tách các ứng viên được trích xuất, các khung hình được sử dụng thành công và các bản sao hình ảnh bị loại bỏ.

Một phần video được đánh dấu rõ ràng có thể yêu cầu một bảng liên hệ (contact sheet) có đính kèm dấu thời gian. Bridge xây dựng một lưới JPEG tối đa 4 cột, 16 khung hình. Mỗi ô 512 pixel nhúng dấu thời gian nguồn của nó vào một dải dưới có độ tương phản cao, trong khi các dấu thời gian tương tự vẫn nằm trong siêu dữ liệu văn bản để phục vụ việc liên kết và kiểm tra ở hạ nguồn. Tệp JPEG hoàn chỉnh vẫn bị giới hạn ở mức 32 MiB. Nếu `sharp` không thể giải mã hoặc tạo lưới, bridge sẽ quay lại sử dụng các khung hình JPEG riêng lẻ; lệnh hủy từ phía client vẫn truyền lan qua thao tác tạo bảng.

Bằng chứng thăng hạng (promotion evidence) được tách biệt có chủ ý khỏi phép đo hiệu năng tổng hợp (microbenchmark) về bố cục. `scripts/perf/video-bridge-contact-sheet-eval.ts` định nghĩa một bộ khai thác (harness) A/B có phiên bản lược đồ cho các mô hình thị giác thực tế tương thích với OpenAI. Nó đo lường số lượng token do nhà cung cấp báo cáo, độ trễ thực tế từ đầu đến cuối (bao gồm cả việc bố trí bảng), số lần gọi mô hình và tỷ lệ giữ lại thông tin do tệp kê khai xác định. Các phản hồi thô từ mô hình không được ghi vào báo cáo; chỉ có các mã băm SHA-256 và ID thông tin khớp được giữ lại. Bộ khai thác không thực hiện cuộc gọi mạng hoặc cuộc gọi mô hình có trả phí trừ khi `--execute-real` được truyền và `--model`, `OMNIROUTE_BASE_URL`, cùng `OMNIROUTE_API_KEY` được cấu hình. Nếu không có lần chạy thực tế rõ ràng đó, phán quyết có thể đọc được bằng máy của nó vẫn giữ nguyên là `HOLD`; các phép đo tải trọng tổng hợp/số lượng cuộc gọi đơn thuần không phải là bằng chứng thăng hạng.

Người gọi có thể đính kèm một mảng `transcript.cues` tùy chọn vào một phần video được hỗ trợ khi họ đã có sẵn văn bản được căn chỉnh. Mỗi tín hiệu (cue) phải chứa `text`, khoảng thời gian hữu hạn `start`/`end` nằm trong thời lượng đã thăm dò, và một `source` nằm trong danh sách cho phép (`client`, `embedded`, hoặc `audio-bridge`); `confidence` có giá trị mặc định là `1` và phải nằm trong khoảng từ `0` đến `1`. Các tín hiệu trùng lặp chính xác sẽ được thu gọn lại. OmniRoute không bao giờ bắt đầu quá trình chuyển đổi giọng nói thành văn bản từ siêu dữ liệu này: các tín hiệu đã được xác thực được sao chép vào kết quả được mô tả kèm theo nguồn, độ tin cậy và khoảng thời gian, đồng thời được hiển thị dưới dạng các quan sát không đáng tin cậy bên cạnh các chú thích khung hình. Văn bản không hợp lệ, nằm ngoài phạm vi hoặc không có nguồn gốc sẽ bị từ chối thay vì bị trộn lẫn vào luồng chú thích. Cả hai kênh bảng điểm trong phần thân yêu cầu đều chuẩn hóa nguồn gốc được cung cấp thành `client`, bao gồm cả các nhãn `embedded` hoặc `audio-bridge` tự xác nhận. Chỉ một bộ điều hợp do máy chủ sở hữu mới có thể gán các nhãn đáng tin cậy đó thông qua đối số thuần mã `trustedSource`; trường JSON trong yêu cầu không thể chạm tới đối số đó. Văn bản bảng điểm vẫn là nội dung bắt nguồn từ phương tiện không đáng tin cậy, bất kể nguồn gốc của nó là gì, và không bao giờ được phép quyết định quyền hạn.

Một người gọi nâng cao có thể cung cấp một luồng `audioTranscript` cho cùng một video; nó được coi là văn bản do client cung cấp chứ không phải là bằng chứng về việc chuyển đổi giọng nói thành văn bản của máy chủ. Mối nối hợp nhất chạy các quan sát trực quan và âm thanh dưới một thời hạn và tín hiệu hủy duy nhất, sắp xếp chúng trên một dòng thời gian chung, thu gọn các bản sao chính xác và báo cáo kết quả một phần khi chỉ có một bên thành công. Một `audioTranscript` không hợp lệ sẽ suy giảm xuống kết quả một phần đó — mô tả trực quan được giữ lại và nhánh âm thanh ghi lại một mã lỗi đã được làm sạch — thay vì làm thất bại toàn bộ video. Tính khả dụng theo từng nhánh, cờ một phần (`partial`), và các mã lỗi đã làm sạch được bảo tồn trong kết quả được mô tả, trong siêu dữ liệu guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), trong siêu dữ liệu bộ nhớ đệm kết quả, và trong các bộ đếm hợp nhất của bridge. Đường dẫn Video Bridge mặc định không gọi tính năng chuyển giọng nói thành văn bản hoặc tải xuống bản sao phương tiện thứ hai; nếu không có luồng rõ ràng đó, nó vẫn chỉ ở dạng video.

**Lưu trữ bản ghi (#12150 P1).** Tính năng này áp dụng tự động bất cứ khi nào Video Bridge (vốn là tính năng tùy chọn - opt-in) hiển thị một chú thích bản ghi (transcript cue) — không có cờ lưu trữ riêng biệt nào. Khi một yêu cầu hiển thị bất kỳ chú thích bản ghi nào (`transcript` do người gọi khai báo hoặc `audioTranscript` đã gộp), cơ chế bảo vệ (guardrail) đánh dấu nó là `videoBridgeObserved` và tạo ra một bản sao ẩn được chỉnh sửa (redacted shadow) của mô tả video — một hình thức hiển thị giống hệt trong đó toàn bộ phần thân văn bản tự do của chú thích được thay thế bằng `[redacted-video-transcript]`, được xây dựng bằng cách thay thế trường chú thích có cấu trúc trước khi chuỗi được lắp ráp (tuyệt đối không phân tích cú pháp văn bản được làm phẳng, do đó không nội dung chú thích nào — dù là độc hại hay thông thường, bao gồm cả phần thân chứa `]` như `[inaudible]`/`[music]` — có thể tồn tại sót lại). Phần thân yêu cầu trong nhật ký cuộc gọi được lưu giữ sẽ hoán đổi từng phần văn bản bắt nguồn từ video cho bản sao ẩn được chỉnh sửa đó, được khớp theo sự bằng nhau về nội dung; mốc `fullText` được đọc lại từ payload của guardrail trước cuộc gọi đã hoàn tất, do đó việc khớp vẫn thành công sau khi các guardrail chuỗi sau đó (bộ che giấu PII và thông tin xác thực, độ ưu tiên 10/95) ghi đè văn bản mô tả tại chỗ và sau khi việc tiêm system-prompt/handoff/memory định hình lại mảng thông báo. Phần thân được gửi ngược dòng (upstream) tới mô hình được giữ nguyên. Một yêu cầu được quan sát cũng không điền vào Bộ nhớ (Memory) bền vững (cả việc trích xuất bắt nguồn từ yêu cầu và phản hồi đều bị bỏ qua), do đó phản hồi của chính mô hình không thể lặp lại văn bản bản ghi vào Bộ nhớ.

**Các trường video thô (#12430).** Khi cầu nối được bật và tính năng hỗ trợ video gốc không xác định hoặc không có, các trường `transcript`/`audioTranscript` đã xác định cũng kích hoạt `videoBridgeObserved`, ngay cả sau khi mô tả thất bại hoặc đạt giới hạn `maxVideos`. Các giá trị `null` và chuỗi rỗng được tính; các trường vắng mặt và siêu dữ liệu phi video thì không. Các bản sao được lưu giữ sẽ che giấu các trường này hoặc bỏ qua yêu cầu, đồng thời các bộ nhớ đệm/Bộ nhớ bị bỏ qua.

Trên các đường dẫn dự phòng (fallback) đó, các chú thích hợp lệ từ người gọi trở thành các phần `text`/`input_text` được hỗ trợ thay vì các trường nhà cung cấp phi tiêu chuẩn. Cả hai luồng do yêu cầu cung cấp vẫn là các quan sát `client` không được tin cậy, kèm theo cảnh báo rõ ràng rằng video chưa được mô tả và dấu thời gian (timestamps) chưa được xác minh so với tệp đa phương tiện (media). Ngân sách tổng và ngân sách cho mỗi chú thích là 256 chú thích / 64-KiB áp dụng cho cả hai luồng cộng lại; dấu thời gian phải phù hợp với giới hạn 600 giây của trình môi giới (broker) và bất kỳ cửa sổ tiêu điểm (focus window) nào được cung cấp. Các luồng không hợp lệ sẽ bị loại bỏ, không được chuyển tiếp dưới dạng văn bản tùy ý; luồng đồng hành hợp lệ vẫn có thể được sử dụng trừ khi vượt quá tổng ngân sách kết hợp của chúng. Các trường `null`/rỗng không thêm văn bản nào. Không có việc tìm nạp đa phương tiện (media fetch) hay chuyển đổi cú pháp (transcription) nào được thêm vào bởi dự phòng này. Các trường mở rộng bản ghi bị xóa khỏi nhà vận chuyển video dự phòng (fallback video carrier) và các đối tượng `video_url`/`source` của nó. Danh sách cho phép đường truyền OpenAI vẫn giữ nguyên tính nghiêm ngặt; các nhà vận chuyển video gốc chưa biết vẫn khả dụng và các mục tiêu chỉ có văn bản đã biết giữ lại các dấu hiệu an toàn. Các bóng che giấu có cấu trúc bảo vệ văn bản bản ghi được nối thêm, trong khi yêu cầu gốc do người gọi sở hữu vẫn giữ nguyên. Các mục tiêu được hỗ trợ gốc và cầu nối bị vô hiệu hóa vẫn giữ nguyên hành vi bỏ qua hiện tại của chúng.

Các bản sao được lưu giữ bổ sung sử dụng cùng tín hiệu yêu cầu được quan sát. Bản chụp yêu cầu khách hàng trước guardrail thô, yêu cầu đang chờ trong bộ nhớ, và nhật ký yêu cầu bị từ chối sớm sẽ thay thế cấu trúc cho các trường bản ghi trong các phần video; các chuỗi lời nhắc (string prompts) được tổng hợp bởi các giai đoạn đường ống (pipeline stages) và việc bàn giao ngữ cảnh (context handoff) sẽ bị che giấu tại điểm chìm thân yêu cầu được lưu giữ (persisted-request-body sink). Dấu đánh dấu `video_content_removed` được lưu giữ khiến cho việc tiếp tục `previous_response_id` thất bại theo kiểu đóng (fail-closed) thay vì tái tạo lại văn bản đã bị cố ý loại bỏ. Nếu một yêu cầu được quan sát mất đi bóng che giấu theo từng phần trước khi ghi nhật ký, hoặc thậm chí một trong nhiều bóng video không khớp sau các lần đột biến yêu cầu sau đó, thì phần thân yêu cầu được lưu giữ sẽ bị bỏ qua hoàn toàn thay vì giữ lại một bản ghi được che giấu một phần.

Đối với một yêu cầu được quan sát, phản hồi của mô hình có thể trích dẫn bất kỳ phần nào của bản ghi mà không có ranh giới chú thích có cấu trúc. Do đó, `responseBody` trong nhật ký cuộc gọi được lưu giữ của nó được thay thế bằng một dấu đánh dấu sự bỏ sót (omission marker); cấu phần đường ống chi tiết (có thể bao gồm thân phản hồi thượng nguồn/khách và các đoạn luồng - stream chunks) không được lưu giữ. Các bộ nhớ đệm ngữ nghĩa, tính bất biến (idempotency), và phát lại lập luận (reasoning-replay) bỏ qua các thao tác đọc và ghi đối với yêu cầu đó. Yêu cầu của nhà cung cấp và phản hồi hiển thị với khách hàng vẫn không thay đổi. Các byte giữ kết nối (keepalive bytes) sớm được xả khỏi bộ đệm tạm thời khi cấu phần chi tiết bị bỏ qua. Cảnh báo EventStream bị lỗi định dạng của Kiro chỉ báo cáo số lượng byte tải trọng (payload byte count), không bao giờ báo cáo nội dung hoặc lỗi thô của bộ phân tích cú pháp JSON. Điều này không khẳng định rằng mọi chẩn đoán nhà cung cấp/plugin không liên quan đã được kiểm toán; việc quét điểm chìm lưu giữ rộng hơn được theo dõi tại #11658.

Vòng đời nội bộ `/api/modality-bridge/video/drilldown` là một nền tảng bộ nhớ đệm riêng biệt, được xác thực bằng loopback/token. Mọi thao tác cũng yêu cầu một ID thực thể chính (principal ID) mờ chuẩn hóa. Trước khi một người gọi môi trường sản xuất (production caller) được bật, nó phải dẫn xuất ID đó từ đối tượng thuê được xác thực và không bao giờ được chuyển tiếp giá trị do khách hàng chọn. Khóa bộ nhớ đệm liên kết thực thể chính đó với các ID phiên chuẩn và tham chiếu video chuẩn, chỉ lưu trữ các khóa được dẫn xuất SHA-256 của chúng, đồng thời giới hạn phạm vi cả thao tác đọc và xóa cho cùng một thực thể chính đó. Bộ nhớ đệm lưu trữ tối đa 16 khung hình JPEG được dẫn xuất cho mỗi mục, hết hạn chúng sau mười phút, và hỗ trợ các thao tác đọc giới hạn `start`/`end` hoặc xóa phiên rõ ràng.

Mỗi thực thể chính (principal) bị giới hạn ở 16 mục và 64 MiB dữ liệu JPEG chuẩn. Các giới hạn đó độc lập với giới hạn trần toàn cục 64 mục/256 MiB: áp lực hạn ngạch của thực thể chính chỉ loại bỏ các mục ít được sử dụng gần đây nhất (least-recently-used) của thực thể chính đó trước khi việc loại bỏ LRU toàn cục được cân nhắc. Các mục hết hạn được quét khỏi cả hạch toán của thực thể chính và toàn cục khi có hoạt động bộ nhớ đệm, trong khi việc hủy bỏ và lỗi xác thực không cam kết một sự thay thế một phần.

Bộ nhớ đệm từ chối Base64 phi chuẩn, phần đệm thừa, phương tiện không phải định dạng JPEG, JPEG bị lỗi hoặc bị cắt cụt, và JPEG tạo ra cảnh báo trong quá trình giải mã `sharp` toàn bộ ảnh có giới hạn. Nó mã hóa lại mỗi hình ảnh được chấp nhận thành một JPEG chuẩn, suy ra chiều rộng và chiều cao từ các byte đã giải mã thay vì tin tưởng các trường của người gọi, và loại bỏ bất kỳ byte polyglot thừa nào thay vì giữ lại chúng. Chỉ bộ đệm nén chuẩn có giới hạn mới được tính vào cả hai hạn mức. Giới hạn truyền tải JSON bao gồm chi phí chung của Base64 cho mức trần đầu vào đã giải mã 32 MiB. Mọi phiên bản dẫn xuất được lưu trữ đều ghi lại định dạng/độ phân giải JPEG đã được xác thực, chính sách lấy mẫu, phiên bản dẫn xuất, thời gian tạo, mã băm nội dung được tính toán bởi máy chủ, và tham chiếu cha được băm cộng với mã băm nội dung cha của người gọi đáng tin cậy. Việc hủy được kiểm tra giữa các pha giải mã/băm bất đồng bộ trước khi commit bộ nhớ đệm nguyên tử.

Đợt triển khai này chưa kết nối nhà sản xuất môi trường production với tuyến đường và chưa cung cấp tính năng lựa chọn biến thể đa độ phân giải. Do đó, đường dẫn yêu cầu Video Bridge trong suốt không phát sinh thêm công việc nào, trong khi việc dẫn xuất principal bị ràng buộc bởi tenant và vòng đời đa độ phân giải FU-08 đầy đủ vẫn là công việc tiếp theo rõ ràng thay vì được ghi tài liệu như hành vi hoàn chỉnh.

Các khung hình được chú thích lần lượt bằng mô hình Video đã được cấu hình. Việc ghi đè Video trống sẽ kế thừa cài đặt Vision; nếu cả hai đều trống, bộ tự động định tuyến Vision sẽ chọn mô hình có khả năng thị giác hiệu quả. Các chú thích thành công thay thế phần ban đầu bằng tiền tố ổn định `[Video description:` đồng thời đánh dấu văn bản là quan sát bắt nguồn từ phương tiện không đáng tin cậy và yêu cầu các mô hình hạ nguồn không tuân theo các hướng dẫn có trong phương tiện đó. Khóa bộ nhớ đệm chú thích khung hình bao gồm các byte JPEG, câu lệnh, dấu thời gian và mô hình hiệu quả; chỉ các chú thích thành công mới được lưu vào bộ nhớ đệm. Các mục trong bộ nhớ đệm giữ lại mô hình sản xuất thành công thực tế, bao gồm cả mô hình dự phòng; cầu nối báo cáo `mixed` khi các khung hình khác nhau được tạo ra bởi các mô hình khác nhau. Lệnh truy cập bộ nhớ đệm (cache hit) tái sử dụng danh tính nhà sản xuất đó thay vì đổi nhãn thành kế hoạch định tuyến đã yêu cầu. Bộ nhớ đệm kết quả toàn bộ video được lập khóa dựa trên mọi đầu vào làm thay đổi đầu ra — câu lệnh, mô hình hiệu quả, chính sách lấy mẫu, số lượng khung hình, chế độ phân tích ngữ nghĩa, mã băm SHA-256 của gợi ý tiêu điểm được chuẩn hóa, cửa sổ tiêu điểm, `transcript`, `audioTranscript`, và cờ bảng liên hệ — do đó, việc thay đổi bất kỳ chiều nào trong số đó sẽ gây ra việc trượt bộ nhớ đệm, chứ không bao giờ là việc tái sử dụng dữ liệu cũ. Phiên bản chính sách khử trùng lặp hình ảnh, ngưỡng và số lượng khung hình ứng viên có giới hạn cũng nằm rõ ràng trong khóa bộ nhớ đệm kết quả và siêu dữ liệu; do đó, một sự thay đổi chính sách không thể tái sử dụng mô tả toàn bộ video cũ. Siêu dữ liệu v4 của bộ nhớ đệm kết quả giữ lại chế độ và mã băm, không bao giờ giữ lại tác vụ người dùng thô. Siêu dữ liệu guardrail báo cáo cả chế độ phân tích được yêu cầu và chế độ hiệu quả; chế độ `focused` được yêu cầu nhưng không có văn bản người dùng khả dụng được báo cáo thực tế là `full`.

Guardrail trích xuất mọi phần video được hỗ trợ nhưng mô tả không quá `modalityBridgeVideoMaxVideos`. Đối với mục tiêu được chứng minh là có `supportsVideo === false`, các video bị lỗi và vượt giới hạn sẽ trở thành các đánh dấu văn bản an toàn rõ ràng để không có video thô nào sót lại. Khi khả năng chưa được biết rõ, các phần đó giữ lại trình mang video của chúng; bất kỳ bản ghi văn bản dự phòng nào cũng tuân theo quá trình chuyển đổi văn bản có giới hạn ở trên. Các mục tiêu có `supportsVideo === true` sẽ bỏ qua cầu nối. Tín hiệu hủy yêu cầu của máy khách lan truyền qua quá trình tải xuống, hàng đợi broker, các tiến trình con, và các lệnh gọi chú thích; việc hủy sẽ dừng giữa các video và không bao giờ chuyển sang trạng thái mở đối với phương tiện thô.

Các thiết lập thời gian chạy được hỗ trợ bởi cơ sở dữ liệu (DB-backed) và được xác thực bằng Zod:

| Key                                 | Default     | Range / behavior                                                                                                      |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Thời gian chạy tùy chọn, kích hoạt thủ công (opt-in)                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` giữ lại các chú thích chung; `focused` sử dụng ngữ cảnh người dùng mới nhất, có giới hạn và không đáng tin cậy |
| `modalityBridgeVideoModel`          | `""`        | Kế thừa mô hình Vision Bridge                                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, hoặc `segment_aware` theo tỷ lệ; lỗi bộ dò tìm quay vòng về `uniform`                       |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

Các giá trị thời gian chờ Video được lưu trữ cũ vượt quá 120 giây sẽ được kẹp vào thời hạn của broker; các lượt ghi cài đặt mới vượt quá giới hạn đó sẽ bị từ chối.
`GET /api/modality-bridge/video/runtime` yêu cầu tính cục bộ loopback được đóng dấu đáng tin cậy trước khi xác thực hoặc thăm dò thời gian chạy, sau đó yêu cầu xác thực quản lý. Nó chỉ trả về `available`, các phiên bản FFmpeg/ffprobe đã được làm sạch, và một lý do cố định khi thời gian chạy không khả dụng. Điểm cuối trích xuất nội bộ không phải là API tải lên công khai: tình trạng bão hòa hàng đợi trả về `503` cộng với `Retry-After`, việc ngắt kết nối của người gọi trả về `499`, và thời hạn broker cố định trả về `504`. Các phản hồi đã được chuyển đổi bổ sung
`video->text;model=<visionModel>;parts=<videos>` vào tiêu đề trung tâm
`x-omniroute-modality-bridge` mà không xóa các phân đoạn Vision hoặc Audio.

### PII Masker (`piiMasker.ts`)

Chạy trên **cả hai** giai đoạn.

- **`preCall`** sao chép payload, duyệt qua `system`, `messages`, `input`, và
  `prompt` (bao gồm các phần tử chuỗi thuần túy), đồng thời áp dụng `processPII()` (từ
  `@/shared/utils/inputSanitizer`) vào các trường `content`/`text` dạng chuỗi. Khi
  `PII_REDACTION_ENABLED=true`, PII được phát hiện sẽ bị ẩn (redact) trong payload
  gửi đi. Điều này độc lập với `INPUT_SANITIZER_MODE` (chỉ điều khiển
  chính sách tiêm prompt). Khi tính năng ẩn thông tin tắt, lệnh gọi sẽ ghi lại số lượng
  phát hiện mà không viết lại nội dung.
- **`postCall`** sao chép sâu phản hồi, chạy `sanitizePIIResponse()` cộng với
  bộ lọc hình dạng Responses-API (`maskResponsesOutput` — bao gồm
  `output_text` và `output[].content[].text`). Nếu có bất kỳ việc ẩn thông tin nào xảy ra, phản hồi
  được sửa đổi sẽ thay thế bản gốc.

Cơ chế bảo vệ không bao giờ chặn; nó chỉ chú thích (`meta.detections`,
`meta.redacted`) hoặc viết lại.

#### Lựa chọn theo từng loại, mẫu tùy chỉnh và bộ đếm phát hiện

**Dashboard → Settings → Security → PII masking** chọn nội dung _nào_ bị ẩn. Tính năng này
không bật tính năng ẩn thông tin: việc đó vẫn do `PII_REDACTION_ENABLED` (yêu cầu) và
`PII_RESPONSE_SANITIZATION` (phản hồi + SSE) quyết định, cả hai đều tắt theo mặc định.

- **Lựa chọn theo từng loại** — các id có sẵn được liệt kê trong
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Không đặt có nghĩa là mọi
  loại (hành vi trước khi cài đặt này tồn tại). Mẫu `ssn_us` của công cụ yêu cầu
  ánh xạ tới `ssn`. Các mẫu (Minimal, Standard, Financial,
  Brazilian, USA, Full) chỉ điền các hộp kiểm trong giao diện người dùng.
- **Mẫu tùy chỉnh** — tối đa 20 biểu thức chính quy hoặc mẫu ký tự đại diện (`*` = tối đa 64
  ký tự không phải khoảng trắng, `?` = một ký tự). Các kết quả khớp trở thành `[CUSTOM_REDACTED]`.
  Mỗi mẫu đi qua `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): tối đa 500 ký tự, các cờ bị giới hạn
  ở `g i m s u`, phải biên dịch được, phải vượt qua kiểm tra `safe-regex` (tránh quay lui thảm họa),
  và không được khớp với chuỗi rỗng hoặc trình giữ chỗ ẩn thông tin.
  Một mẫu không hợp lệ sẽ bị từ chối khi lưu và khi kiểm tra, và một dòng được lưu trữ bị lỗi
  sẽ bị bỏ qua lúc chạy thay vì được biên dịch. Các mẫu tùy chỉnh chỉ
  chạy khi tính năng ẩn thông tin đang bật.
- **Bộ đếm phát hiện** — số lượng theo từng loại (không bao giờ khớp với giá trị), được lưu trong
  bộ nhớ và đặt lại khi khởi động lại (`src/lib/pii/piiDetectionStats.ts`). Chúng chỉ
  tăng lên khi tính năng ẩn thông tin đang bật.

Các cài đặt nằm trong bảng `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) và được đọc thông qua bộ nhớ đệm 1 giây. API:

| Phương thức | Đường dẫn                | Mục đích                                                               |
| ----------- | ------------------------ | ---------------------------------------------------------------------- |
| `GET`       | `/api/settings/pii`      | Trạng thái cờ, `enabledTypes`, `customPatterns`, bộ đếm phát hiện      |
| `PUT`       | `/api/settings/pii`      | Thay thế `enabledTypes` (`null` = tất cả) và/or `customPatterns`       |
| `POST`      | `/api/settings/pii/test` | Chạy thử một mẫu với mẫu dữ liệu tối đa 8 KB; không có gì được lưu trữ |

Cả ba đều yêu cầu xác thực quản lý và xác thực phần thân bằng Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Phát hiện các cấu trúc đối kháng trong nội dung do người dùng cung cấp và thực thi
chính sách được cấu hình. Hành vi được điều khiển bởi các biến môi trường và các tùy chọn hàm khởi tạo:

| Cài đặt         | Biến môi trường                                                                                       | Mặc định | Tác dụng                                                                                                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | Khi là `false`, cơ chế bảo vệ sẽ ngắt mạch.                                                                                                                                                                     |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | Chính sách tiêm: `block`, `warn`, hoặc `log`. (`redact` được chấp nhận để tương thích ngược nhưng **không** loại bỏ văn bản tiêm; việc viết lại PII trong yêu cầu được điều khiển bởi `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mức độ nghiêm trọng tối thiểu cần thiết để chặn. Mức trung bình chỉ để quan sát theo mặc định.                                                                                                                  |

**Độ ưu tiên chế độ** (`getMode`): `options.mode` của người gọi →
ghi đè cờ tính năng DB `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → biến môi trường `INJECTION_GUARD_MODE` → biến môi trường `INPUT_SANITIZER_MODE` →
`warn`. Do đó, ghi đè từ bảng điều khiển sẽ ưu tiên hơn các biến môi trường, vì vậy giao diện Feature
Flags kiểm soát cơ chế bảo vệ đang chạy ngay lập tức (không cần khởi động lại). Việc đọc DB là an toàn khi lỗi:
nếu xảy ra lỗi, cơ chế bảo vệ sẽ quay lại hành vi dựa trên biến môi trường, và khi không có
ghi đè nào được đặt, hành vi sẽ giống hệt như quá trình phân giải chỉ dựa trên biến môi trường.

Các nguồn phát hiện:

1. `sanitizeRequest()` từ `@/shared/utils/inputSanitizer` (tập hợp bộ phát hiện được chia sẻ
   được sử dụng ở các nơi khác trong quy trình xử lý).
2. `DEFAULT_GUARD_PATTERNS` có sẵn (hiện tại là `system_override_inline` và
   `markdown_system_block`, cả hai đều có độ nghiêm trọng `high`).
3. `customPatterns` tùy chọn được truyền qua các tùy chọn hàm khởi tạo (chuỗi, regex,
   hoặc các bản ghi `{ name, pattern, severity }`).

Khi `mode === "block"` **và** ít nhất một phát hiện đạt ngưỡng nghiêm trọng, `preCall` trả về `{ block: true, message: "Request rejected:
suspicious content detected" }`. Trong các chế độ `warn`/`log`, guardrail sẽ ghi log nhưng vẫn cho phép cuộc gọi tiếp tục. Hàm hỗ trợ chung `evaluatePromptInjection()` cũng được xuất cho các caller cần đánh giá prompt mà không cần thông qua registry.

**Giới hạn quét (v3.8.20):** trình phát hiện chỉ kiểm tra **16 KB đầu tiên** của văn bản prompt được nối — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) trong `src/shared/utils/inputSanitizer.ts`. Cả `detectInjection()` và `evaluatePromptInjection()` đều thực hiện `slice(0, MAX_INJECTION_SCAN_BYTES)` trước khi chạy vòng lặp mẫu. Các chỉ thị injection nằm gần phần đầu của đầu vào, giúp giới hạn CPU/GC của regex trên các payload có kích thước hàng trăm KB mà không làm suy yếu khả năng phát hiện (xem #3932, #4041).

### Trình che thông tin xác thực (`credentialMasker.ts`)

Chạy ở **cả hai** giai đoạn, nằm ở vị trí cuối cùng trong chuỗi mặc định (độ ưu tiên `95`). Thực hiện ẩn các mẫu API-key / secret-token phổ biến từ payload gửi đi (nội dung tin nhắn, đối số gọi công cụ, kết quả công cụ) **và** phản hồi từ nhà cung cấp, do đó thông tin xác thực được dán vào prompt (hoặc được phản hồi lại bởi kết quả công cụ) sẽ không bị rò rỉ cho nhà cung cấp thượng nguồn hoặc trả về cho client.

- **Chỉ bật khi chọn (Opt-in only)**, quy ước tương tự như việc ẩn PII (gần với Quy tắc cứng #20): bị vô hiệu hóa trừ khi `settings.credentialRedactionEnabled === true` **hoặc** `CREDENTIAL_REDACTION_ENABLED=true`. Khi tắt, guardrail sẽ không thực hiện hành động nào (no-op) — nó không bao giờ chặn và không bao giờ viết lại.
- `redactCredentials()` duyệt qua toàn bộ cây payload/phản hồi (`walkValue()`, an toàn trước ô nhiễm prototype, an toàn chu trình thông qua `WeakSet`) và thay thế các kết quả khớp bằng placeholder `[REDACTED:<type>]`, chỉ nhân bản các nhánh thực sự thay đổi.
- `CREDENTIAL_PATTERNS` bao gồm các khóa nhà cung cấp LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), khóa thanh toán (Stripe, Square), khóa đám mây (AWS access key, Twilio, SendGrid, Mailgun), khóa riêng tư / JWT, chuỗi kết nối chứa thông tin xác thực (`mongodb://user:pass@...`, v.v.), và mẫu giá trị header chung `Authorization`/`x-api-key`/`api-key`/`apikey`. Các khóa có dạng header (`authorization`, `x-api-key`, `api-key`, `apikey`) được ẩn theo cấu trúc (chỉ phần giá trị, tiền tố lược đồ như `Bearer `/`Basic ` được giữ nguyên) thay vì sử dụng regex văn bản thông thường.
- Guardrail không bao giờ chặn; nó chỉ viết lại (`modifiedPayload` / `modifiedResponse`) và chú thích (`meta.credentialsRedacted`, `meta.count`).

Chốt chặn hồi quy: `tests/unit/credential-masker-guardrail.test.ts`.

## Hợp đồng Cơ sở (`base.ts`)

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
  block?: boolean; // true sẽ ngắt ngắn chuỗi
  message?: string; // hiển thị khi bị chặn
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // do preCall trả về để viết lại yêu cầu
  modifiedResponse?: TValue; // do postCall trả về để viết lại phản hồi
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

Một guardrail báo hiệu "không thay đổi" bằng cách trả về `void`, `{}`, hoặc
`{ block: false }`. Việc trả về `modifiedPayload`/`modifiedResponse` sẽ thay thế
giá trị đang truyền qua chuỗi cho các guardrail ở hạ nguồn.
`signal?: AbortSignal` mang vòng đời của bên gọi vào các guardrail. Việc hủy yêu cầu là ngoại lệ fail-open có chủ đích: các cầu nối phương tiện dừng công việc và dọn dẹp mà không khôi phục phương tiện thô về một mục tiêu được biết là không hỗ trợ nó.

## Bộ đăng ký (`registry.ts`)

Singleton `guardrailRegistry` cung cấp:

- `register(guardrail)` — thêm (hoặc thay thế bằng tên đã chuẩn hóa) một guardrail và
  sắp xếp lại theo thứ tự `priority` tăng dần.
- `clear()` / `list()` — các hàm hỗ trợ quản trị.
- `runPreCallHooks(payload, context)` — lặp qua các guardrail đang hoạt động, truyền
  payload qua `modifiedPayload`, và dừng ở `block: true` đầu tiên.
- `runPostCallHooks(response, context)` — luồng tương tự ở phía phản hồi.
- `resetGuardrailsForTests({ registerDefaults })` — xóa trạng thái và tùy chọn
  đăng ký lại các giá trị mặc định để cô lập kiểm thử sạch sẽ.

Cả hai trình chạy đều trả về `{ blocked, payload|response, results, guardrail?, message? }`
trong đó `results` là một mảng các bản ghi `GuardrailExecutionResult` bao gồm các
trường `blocked`, `skipped`, `modified`, `error`, và `meta` cho từng guardrail,
rất hữu ích cho việc theo dõi dấu vết.

### Vô hiệu hóa Guardrail theo từng Yêu cầu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` tổng hợp danh sách các
tên guardrail đã được khử trùng lặp cần bỏ qua cho yêu cầu hiện tại. Có năm
kênh, được đọc theo thứ tự này và hợp nhất thành một danh sách (lần xuất hiện đầu tiên
sẽ được ưu tiên khi khử trùng lặp):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` trong phần thân yêu cầu (cấp cao nhất)
3. `metadata.disabledGuardrails` trong phần thân yêu cầu (chỉ khi `metadata` là một đối tượng)
4. Header `x-omniroute-disabled-guardrails`
5. Header kế thừa `x-disabled-guardrails`

Cả năm kênh đều được hợp nhất, bao gồm cả hai header: việc gửi đồng thời
`x-omniroute-disabled-guardrails` và `x-disabled-guardrails` sẽ bỏ qua hợp của
các danh sách của chúng, và một header hiện đại trống sẽ không còn ẩn header cũ nữa
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), được sửa trong
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Các giá trị có thể là mảng chuỗi hoặc chuỗi ngăn cách bằng dấu phẩy; tên được cắt khoảng trắng
và chuẩn hóa thành chữ thường kiểu kebab-case (`pii_masker` → `pii-masker`), và các mục
trống sẽ bị loại bỏ. Kết quả được truyền qua `context.disabledGuardrails` đến
bộ đăng ký, bộ đăng ký này sẽ bỏ qua các guardrail khớp (`skipped: true` trong `results`).

Danh sách vô hiệu hóa chỉ ảnh hưởng đến **bộ đăng ký**. Chế độ `block` của prompt-injection
là một ranh giới bắt buộc: middleware bảo vệ injection
(`src/middleware/promptInjectionGuard.ts`) gọi `evaluatePromptInjection()`
mà không có bất kỳ danh sách vô hiệu hóa nào do bên gọi kiểm soát (lời gọi
`resolveDisabledGuardrails({ body })` lỗi thời trước đây đã bị xóa trong
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), do đó một yêu cầu
vô hiệu hóa `prompt-injection` vẫn bị từ chối ở chế độ `block`. Đây là thiết kế
có chủ đích. Các kênh vô hiệu hóa được kiểm soát bởi bên gọi (phần thân yêu cầu,
metadata, header), và bên gọi không được phép tắt một biện pháp kiểm soát bảo mật
mà nhà điều hành đã thiết lập
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Phép hợp header
từ [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
chỉ thay đổi các guardrail nào của bộ đăng ký bị bỏ qua; nó không cho phép client
vượt qua middleware. Các chính sách guardrail bắt buộc theo từng khóa và theo từng nhóm
được theo dõi trong v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Xem [Phạm vi và giới hạn](#coverage-and-limits).

## Thứ tự thực thi

Đối với mỗi yêu cầu truyền qua `src/sse/handlers/chat.ts` và
`open-sse/handlers/chatCore.ts` (các tuyến đường thuộc nhóm chat được liệt kê trong phần
[Phạm vi và giới hạn](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` xây dựng danh sách bỏ qua từ khóa API, phần thân (body) và
   các tiêu đề (headers).
2. `guardrailRegistry.runPreCallHooks(body, ctx)` chạy các chốt bảo vệ theo thứ tự ưu tiên tăng dần:
   - Các chốt bảo vệ bị vô hiệu hóa được ghi nhận là `skipped`.
   - `preCall` của mỗi chốt bảo vệ có thể viết lại payload thông qua `modifiedPayload`.
   - Giá trị `block: true` đầu tiên sẽ làm ngắn mạch chuỗi và trình xử lý trả về
     phản hồi từ chối từ chốt bảo vệ.
3. Payload (có thể đã được viết lại) đi vào định tuyến kết hợp (combo routing) và điều phối thượng nguồn.
4. **Chỉ dành cho không phát trực tiếp (non-streaming):** sau khi phản hồi được tổng hợp,
   `guardrailRegistry.runPostCallHooks(...)` chạy cùng chuỗi đó trên
   phản hồi. `block: true` ở đây sẽ loại bỏ phản hồi thượng nguồn và trả về HTTP 400. Các phản hồi phát trực tiếp bỏ qua bước này hoàn toàn.

Các chốt bảo vệ gây ra lỗi được ghi lại với `error: <message>` và ghi log thông qua
`logger.warn`, nhưng chuỗi vẫn tiếp tục — được thiết kế theo dạng mở khi lỗi (fail-open by design).

## Phạm vi và giới hạn

Sổ đăng ký chốt bảo vệ chỉ được tích hợp vào đường ống chat. Các giới hạn này được
ghim bởi `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` và
`tests/unit/guardrail-pipeline-characterization.test.ts`; hãy cập nhật các bài kiểm thử đó một cách có chủ đích khi hành vi thay đổi.

### Các hook chạy ở đâu

| Hook / điều khiển                | Chạy trên                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                | Các yêu cầu được xử lý bởi `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (và `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, cùng với proxy chat Telegram. Đồng thời là điểm cuối kiểm thử trên bảng điều khiển `/api/guardrails/test`. Một khối chặn pre-call trả về HTTP 400. |
| `runPostCallHooks`               | Chỉ các phản hồi chat **không phát trực tiếp** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Các phản hồi phát trực tiếp không bao giờ tiếp cận được nó.                                                                                                                                                                                                                                                                                            |
| Streaming PII                    | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), được truyền qua ống dẫn trong `streamingPipeline.ts` khi `PII_RESPONSE_SANITIZATION` bật. Đây không phải là chốt bảo vệ, vì vậy các kênh vô hiệu hóa không ảnh hưởng đến nó.                                                                                                                                                                                                                    |
| Middleware chống tiêm nhiễm (cũ) | Mọi tuyến đường `/v1` chứa prompt, bao gồm cả nhóm chat (xem [phạm vi tuyến đường](#injection-guard-route-coverage--red-team-phase-8--block-d)). Chỉ áp dụng cho việc tiêm nhiễm prompt.                                                                                                                                                                                                                                                                      |

### Những gì không được bao phủ

- **Các tuyến đường đa phương tiện, embedding và dữ liệu** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) không bao giờ tiếp cận được sổ đăng ký. Không có
  việc che giấu PII, che giấu thông tin xác thực hay cầu nối phương thức nào chạy ở đó. Kiểm tra
  duy nhất của chúng là middleware chống tiêm nhiễm cũ.
- **Các phản hồi phát trực tiếp** không có chốt bảo vệ sau cuộc gọi: không có `pii-masker` hoặc
  `credential-masker` sau cuộc gọi, và không có khối chặn sau cuộc gọi. Chỉ có phép biến đổi PII phát trực tiếp áp dụng (khi `PII_RESPONSE_SANITIZATION` bật). Thông tin xác thực được phản hồi lại trong phản hồi phát trực tiếp sẽ không bị ẩn danh (redacted).
- **Các kênh vô hiệu hóa so với middleware (theo thiết kế):** middleware đánh giá
  việc tiêm nhiễm prompt bằng lệnh gọi riêng của nó tới `evaluatePromptInjection()`, mà không truyền bất kỳ danh sách vô hiệu hóa do người gọi kiểm soát nào. Chế độ `block` là một ranh giới bắt buộc mà các lệnh vô hiệu hóa do người gọi kiểm soát không thể bỏ qua, kể cả trên các tuyến đường thuộc nhóm chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Việc vô hiệu hóa
  `prompt-injection` chỉ bỏ qua chốt bảo vệ trong sổ đăng ký.

### Những gì nhìn thấy phản hồi trước khi gọi post-call

Trên đường dẫn không phát trực tiếp, thứ tự là: trích xuất bộ nhớ → thực thi công cụ tích hợp → chốt bảo vệ sau cuộc gọi → thoát khối chặn sau cuộc gọi → lưu trữ bộ nhớ đệm ngữ nghĩa.

- **Trích xuất bộ nhớ** và **thực thi công cụ** tiếp cận phản hồi trước khi các hàng rào bảo vệ sau lệnh gọi có thể viết lại hoặc chặn phản hồi đó. Kể từ [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), quá trình trích xuất bộ nhớ sẽ xử lý văn bản được trích xuất thông qua `sanitizePII` khi `PII_RESPONSE_SANITIZATION` được bật (ở cả chế độ streaming và non-streaming), nhưng một phản hồi bị chặn ở bước sau lệnh gọi vẫn đã được cung cấp cho bộ nhớ và các công cụ.
- **Bộ nhớ đệm ngữ nghĩa** lưu trữ phản hồi sau bước gọi, do đó nó lưu trữ phản hồi đã được viết lại, và một phản hồi bị chặn sẽ không bao giờ được lưu vào bộ nhớ đệm. Các mục bộ nhớ đệm được đánh khóa theo từng `API key`.

## Cấu hình

Các biến môi trường được đọc bởi các hàng rào bảo vệ tích hợp sẵn:

| Biến                                  | Được sử dụng bởi          | Tác dụng                                                                                                        |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Đặt thành `false` để vô hiệu hóa hoàn toàn tính năng phát hiện.                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Chính sách tiêm nhiễm: `warn`, `block`, hoặc `log`. Giá trị cũ `redact` không viết lại văn bản bị tiêm nhiễm.   |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Chế độ cho lớp bảo vệ chống tiêm nhiễm; đồng thời là một cờ tính năng DB ghi đè các biến môi trường (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Mức độ nghiêm trọng tối thiểu mà `MODE=block` từ chối: `high` (mặc định), `medium`, hoặc `low`.                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Bí danh cũ cho `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Khi là `true`, PII của yêu cầu sẽ bị che khuất (độc lập với chế độ tiêm nhiễm).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Điều khiển hành vi của bộ che khuất ở phía phản hồi.                                                            |

Các hàng rào bảo vệ Modality Bridge đọc cấu hình thời gian chạy từ kho lưu trữ cài đặt hỗ trợ bởi cơ sở dữ liệu (`getSettings()`), chứ không phải các biến môi trường. Các khóa chính của Vision là `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, và `modalityBridgeCacheMaxEntries`. Các khóa cũ `visionBridge*` chỉ được chấp nhận như là phương án dự phòng đọc một chu kỳ đã được tài liệu hóa; các thao tác ghi trên bảng điều khiển sử dụng các khóa chính. Các giá trị mặc định và bộ giải quyết dự phòng nằm trong `src/shared/constants/modalityBridgeDefaults.ts`, với các hằng số cũ được giữ lại trong `src/shared/constants/visionBridgeDefaults.ts`.

Audio sử dụng `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, và `modalityBridgeAudioMaxClips`, cộng với các cài đặt chung `modalityBridgeCache*`. Audio không có phương án dự phòng khóa cũ vì những khóa này được giới thiệu cùng với lược đồ Modality Bridge.

Video sử dụng `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos`, và `modalityBridgeVideoTimeout`, cộng với các cài đặt chung `modalityBridgeCache*`. Tính năng này bị vô hiệu hóa theo mặc định vì `FFmpeg`/`ffprobe` là các phụ thuộc vận hành tùy chọn và việc chú thích khung hình làm tăng độ trễ và chi phí mô hình.

## Các Guardrail Tùy Chỉnh

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

Các bước:

1. Tạo `src/lib/guardrails/myGuardrail.ts` kế thừa từ `BaseGuardrail`.
2. Triển khai `preCall` và/hoặc `postCall`.
3. Hoặc đăng ký tại thời điểm import (đưa từ `registerDefaultGuardrails`) hoặc
   gọi `guardrailRegistry.register(...)` lúc runtime — registry sẽ thay thế
   bất kỳ guardrail nào trước đó có cùng tên được chuẩn hóa.
4. Thêm các bài kiểm thử dưới `tests/unit/` (các ví dụ hiện có:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Kiểm Thử

Sử dụng `resetGuardrailsForTests()` giữa các bài kiểm thử để bắt đầu từ trạng thái đã biết.
Truyền `{ registerDefaults: false }` để bắt đầu với một registry trống và
chỉ đăng ký các guardrail đang được kiểm thử. Vision Bridge chấp nhận dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge cung cấp các
điểm nối tương đương cho cài đặt, khả năng, lựa chọn mô hình STT, kiểm tra
chứng thực và phiên mã. Do đó, các bài kiểm thử có thể thực thi cả hai luồng mà không cần DB
hoặc truy cập mạng.

## Xem Thêm

- `src/lib/guardrails/` — phần cài đặt
- `src/shared/utils/inputSanitizer.ts` — trình phát hiện chung cung cấp sức mạnh cho
  prompt-injection và che giấu PII
- `src/shared/constants/visionBridgeDefaults.ts` — các giá trị mặc định của Vision Bridge và
  danh sách mô hình cầu nối bắt buộc
- `src/shared/constants/modalityBridgeDefaults.ts` — các giá trị mặc định runtime Vision/Audio chung
- `docs/architecture/RESILIENCE_GUIDE.md` — lớp trực giao (circuit breaker, thời gian hồi chiêu)
- `docs/reference/ENVIRONMENT.md` — tài liệu tham khảo đầy đủ về biến môi trường

## Độ bao phủ route của injection-guard & red-team (Giai đoạn 8 · Khối D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) bao phủ tất cả các route
chấp nhận prompt của người dùng. Nó tuân thủ `INJECTION_GUARD_MODE` (mặc định `warn` = chỉ ghi log;
`block` = trả về HTTP 400 `SECURITY_001`).

| Loại               | Các route                                                                                                                                            | Chế độ mặc định |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Văn bản (hiện tại) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Tạo sinh           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Dữ liệu            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Việc trích xuất văn bản (`extractMessageContents`) bao gồm `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (chạy hàng đêm, `nightly-llm-security.yml`):** promptfoo xác thực rằng mỗi route chặn
corpus OWASP-LLM trong `INJECTION_GUARD_MODE=block`; garak chạy các điểm thăm dò (bỏ qua nếu không có secret).
`moderations` được bao gồm để đảm bảo tính nhất quán. Chế độ block là một ranh giới bắt buộc: `evaluatePromptInjection()`
bỏ qua danh sách vô hiệu hóa theo từng request mà middleware truyền cho nó, do đó `disabledGuardrails` không
miễn trừ route này khỏi nó ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Workflow chạy hàng đêm (`.github/workflows/nightly-llm-security.yml`, cron + thủ công
dispatch) có hai job:

- **`promptfoo-guard` (chặn)** — chạy `promptfoo eval -c promptfooconfig.yaml`
  với `INJECTION_GUARD_MODE=block`. Mỗi trường hợp đối kháng (ví dụ: "ignore all
  previous instructions…", jailbreak theo phong cách DAN) khẳng định rằng phản hồi mang
  `error.code === "SECURITY_001"`, nghĩa là guard thực sự đã từ chối request.
- **`garak` (mang tính tham khảo)** — chạy garak `--probes promptinject,dan,leakreplay`
  đối với một instance OmniRoute cục bộ (`http://localhost:20128/v1`). Được bảo vệ bằng một
  secret nhà cung cấp (`PROMPTFOO_PROVIDER_KEY`); bỏ qua một cách mượt mà và có hậu tố
  `|| true`, nên nó báo cáo kết quả mà không làm lỗi CI.

Độ bao phủ của guard helper (`createInjectionGuard` / `withInjectionGuard`)
trải rộng trên mọi route `/v1` chứa prompt; văn bản prompt được lấy từ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` bởi
hàm `extractMessageContents()` trong `src/shared/utils/inputSanitizer.ts`.

# Guardrails (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **기준 소스:** `src/lib/guardrails/`
> **최종 업데이트:** 2026-10-17 — v3.8.52 ([적용 범위 및 제한 사항](#coverage-and-limits) 추가:
> 훅이 적용되는 라우트와 응답 경로, 병합된 비활성화 헤더 (#16412), 필수 경계로서의 인젝션
> 차단 모드 (#16413), 그리고 호출 후 처리 전에 응답에 접근하는 구성 요소)

가드레일은 OmniRoute와 업스트림 제공자 사이의 경계에서 안전, 정책 및 콘텐츠 변환을 적용합니다.
각 가드레일은 요청 페이로드(`preCall`)와 업스트림 응답(`postCall`)을 검사하고,
선택적으로 거부, 변환 또는 주석 추가를 수행할 수 있습니다.

이 시스템은 **실패 시 허용(fail-open)** 방식입니다. 가드레일 실행 중 예외가 발생하면 레지스트리는
요청을 실패시키는 대신 오류를 기록하고 다음 가드레일을 계속 실행합니다.
차단은 명시적인 결정(`block: true`)에 의해서만 이루어지며, 우발적으로 발생하지 않습니다.
유일한 예외는 중단된 요청입니다. 호출자의 `signal`이 중단된 상태에서
가드레일이 예외를 던지면, 해당 가드레일을 건너뛰는 대신 훅 실행을 거부합니다.

훅은 모든 라우트나 모든 응답에서 실행되는 것이 **아닙니다**. 가드레일을
보안 제어 수단으로 사용하기 전에 [적용 범위 및 제한 사항](#coverage-and-limits)을 읽어 보세요.

## 기본 제공 가드레일

레지스트리를 가져오면 우선순위에 따라 6개의 가드레일이 자동으로 로드됩니다
(`registry.ts` → `registerDefaultGuardrails()` 참조).

| 우선순위 | 이름                | 단계           | 파일                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

우선순위 숫자가 작을수록 **먼저** 실행됩니다.

### 비전 브리지 (`visionBridge.ts`) — 모달리티 브리지 PR-1

GLM 5.3 기본 모델과 `glm-5.3-{low,high,max}`에는 명시적인
`supportsVision:false` 레지스트리/사양 메타데이터가 있습니다. GLM 5.3 Flash 변형은
계속해서 네이티브 비전 모델로 유지됩니다. Claude Code의 `/v1/messages` 라우트는
Claude에서 OpenAI로 변환하기 **전에** 공유 `handleChat` 호출 전 가드레일 체인에 진입합니다.
이 변환 과정에서 중첩된 `Read` 도구 결과 이미지가 OpenAI `image_url` 콘텐츠로
변환되기 전에 해당 이미지를 설명하거나 처리해야 합니다 (#17069).

**비전 미지원 모델**을 대상으로 하는 이미지 포함 요청을 가로채어,
전체 요청을 비전 지원 모델로 다시 라우팅하거나 업스트림 호출 전에 이미지 부분을
설정 가능한 비전 모델이 생성한 텍스트 설명으로 대체합니다.
이를 통해 텍스트 전용 제공자도 멀티모달 페이로드를 별도의 처리 없이 다룰 수 있습니다.

처리 흐름:

1. 대상 모델이 이미 비전을 지원하면 건너뜁니다(단,
   강제 브리지 목록 `isVisionBridgeForcedModel`에 있는 경우는 제외).
2. `extractImageParts(messages)`로 이미지 부분을 추출합니다
   (`visionBridgeHelpers.ts`). 이 함수는 `open-sse/utils/mediaParts.ts`의
   **통합 미디어 감지기** `detectMediaParts()`에 처리를 위임합니다.
   이 감지기는 콤보 호환성 필터와 공유하는 단일 기준 소스입니다.
   추출은 `replaceImageParts`가 다시 삽입할 수 있는 형식으로만 제한됩니다
   (추출↔대체 계약). 해당 형식은 OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, Responses
   API `input_image`입니다. Claude Code의
   `tool_result.content` 및 Responses 도구 출력 내부에 중첩된 일치 이미지도 추출하여
   원래 경로에서 대체합니다. 표시자만 있는 형식은 콤보 필터의
   처리 대상이며 추출하지 않습니다.
   이미지가 없으면 건너뜁니다.
3. `resolveVisionBridgeRuntimeSettings()`를 통해 런타임 구성을 확인합니다
   (`src/shared/constants/modalityBridgeDefaults.ts`). 새 `modalityBridge*`
   설정 키가 우선하며, 기존 `visionBridge*` 키는 **한 주기 동안의
   대체 수단**(롤백 기간)으로 유지됩니다. 브리지가 비활성화되어 있으면
   미디어를 순회하기 전에 건너뜁니다.
4. 모드 선택기(`modalityBridgeVisionMode`, 아래 표 참조)가
   재라우팅과 설명 중 하나를 결정합니다. 재라우팅은 `model`만
   교체한 `modifiedPayload`와 메타데이터 `{ rerouted, fromModel, toModel, imagesKept }`를 반환합니다.
5. 설명 경로: 이미지 수를 `maxImages`로 제한하고, 작업 특성을 반영한 프롬프트를 구성한 뒤,
   설명 캐시를 조회하고, 비전 모델을 **병렬로** 호출합니다
   (`Promise.allSettled`). 그런 다음 해당 이미지 대신 `[Image N]: <description>` 텍스트 부분을
   삽입합니다. 설명에 실패하면 `null`이 반환됩니다. 지원 여부를 알 수 없거나 비전을 지원하는
   대상에서는 원본 이미지를 보존하지만 (#4012), **텍스트 전용으로 확인된 직접
   대상** 또는 비전 지원 모델이 없는 콤보에서는 설명되지 않은 모든 이미지에 명시적인
   `(unavailable — no vision-capable provider connected)` 텍스트 대체 문구를 삽입합니다.
   여기에는 일부 설명 실패와 설명 호출 상한을 초과한 이미지도
   포함됩니다 (#17069). 모든 설명이 실패했을 때의 기존 콤보 설명 대체 동작은
   그대로 유지됩니다 (#8430).
6. `modifiedPayload`와 메타데이터(`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`)를 반환합니다.

#### 모드 선택기 (`modalityBridgeVisionMode`)

| 모드       | 기본값 | 동작                                                                                                                                                                                                                                                                                           |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | 기존 휴리스틱을 변경 없이 유지합니다(#6640/#7204). 콤보가 아닌 모델/`auto/` 모델은 최적의 비전 모델로 재라우팅됩니다. 단, 원래 모델에 이미 사용 가능한 자격 증명이 있으면 이미지를 설명합니다. 콤보 대상은 항상 이미지를 설명합니다.                                                           |
| `describe` |        | 항상 이미지를 설명합니다. 재라우팅 블록을 완전히 건너뛰며, 사용자가 선택한 모델이 항상 응답합니다.                                                                                                                                                                                             |
| `reroute`  |        | 재라우팅을 강제합니다. 자격 증명이 있는 모델을 유지하는 보호 로직을 우회합니다. 재라우팅 **대상**의 자격 증명 보호 로직은 계속 적용됩니다. 사용 가능한 비전 대상이 없으면 브리지는 이미지를 설명하거나 텍스트 전용 대상에 원본 이미지를 보내는 대신, 명확한 오류를 반환하며 요청을 차단합니다. |

강제 모드는 자동 휴리스틱이 실행되기 **전에** 처리를 확정합니다. `auto` 동작은
PR-1 이전의 가드레일과 바이트 단위까지 동일합니다.

#### API 키 범위 (`visionBridgeKeyScope.ts`)

호출자의 API 키가 `allowedConnections`, 할당량 풀
(`allowedQuotas`) 또는 모델(`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`)을 제한하는 경우, 브리지는
해당 키가 사용할 수 있는 연결에서 해당 키가 사용할 수 있는 재라우팅 및 이미지 설명 모델만
선택합니다. 이후 이미지 설명 호출은 항상
`x-omniroute-self-loop-key-id` 헤더를 포함하여 OmniRoute 셀프 루프를 거치므로, 수신 측 채팅 요청에서
해당 키의 연결 및 모델 정책을 다시 적용합니다. `enforceApiKeyPolicy()`는
이 헤더가 셀프 루프 bearer와 함께 제공될 때만 이를 인정하므로, 접근 권한을
축소하는 데만 사용할 수 있으며, 확인할 수 없는 ID는 거부됩니다.

해당 키에 허용된 비전 모델이 없는 경우, **텍스트 전용으로 확인된
대상**은 이미지 바이트를 처리 능력이 없는 업스트림으로 전달하는 대신, 로컬에서 명확한 HTTP 400 오류로 이미지 요청을 거부합니다(#17069).
비전 지원 여부가 알 수 없거나 기본적으로 비전을 지원하는 대상의 경우, 이미지 설명 경로는 기존의
실패 시 허용 동작을 유지합니다(메타데이터 `{ skipped: true, reason: "no_permitted_vision_model" }`).
키가 없는 요청과 이러한 제한이 없는 키는
이전과 정확히 동일하게 동작합니다.

#### 작업 인식 이미지 설명 프롬프트 (`modalityBridgeVisionTaskAware`)

기본값은 **true**입니다. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)는
**마지막 사용자 메시지**의 텍스트(500자로 잘림)를 기본
이미지 설명 프롬프트에 추가하여, 설명이 사용자의 실제 질문에 맞춰지도록
유도하고(codex-vision-proxy 패턴), 비전 모델에 보이는
텍스트를 전사하도록 요청합니다. 플래그가 꺼져 있거나 사용자 텍스트가 없으면 기본 프롬프트를 변경 없이 사용합니다.

이미지 설명 셀프 루프 자체의 OpenAI 호환 요청(`visionBridgeHelpers.ts`의 `callVisionModelSingle()`)은
항상 `image_url.detail: "high"`를 요청합니다.
이는 모든 호출자/제공자에 대해 무조건 적용되며, 클라이언트 신호에 따라 달라지지 않습니다.
낮은 상세도 샘플링은 이 프롬프트가 요청하는 텍스트 전사 작업에서
OCR 정확도를 떨어뜨리므로, 이미지 설명 호출 자체는 원래 수신 요청의 상세도 수준과 관계없이 항상 높은
상세도를 요청합니다. 이는
내부 이미지 설명 요청 본문에만 영향을 줍니다. OmniRoute가 기본 요청에서 호출자 자체의 `image_url.detail`을 전달하는 방식은
변경하지 않습니다.
해당 기본값은 `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`)에서
감지된 OpenCode 클라이언트에 한해 별도로 적용됩니다.
이미지 설명 셀프 루프의 Anthropic 전송 형식 분기에는 `detail` 필드가 없으며,
두 기본값 중 어느 것의 영향도 받지 않습니다.

#### 이미지 설명 출력 상한 (`modalityBridgeVisionMaxChars`)

| 키                             | 기본값 | 범위               |
| ------------------------------ | ------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`    | `0` 또는 100–50000 |

`0`(기본값)은 **상한 없음**을 의미합니다. `callVisionModel()`이 반환한
설명을 수정 없이 전달하여 기존
동작을 유지합니다. 100–50000 범위의 값을 설정하면 설명을 잘라내고
`…` 접미사를 붙인 뒤 `[Image N]: <description>` 형식으로 다시 삽입합니다
(`src/lib/guardrails/visionBridge.ts`의 `VisionBridgeGuardrail.preCall()`).
다운스트림 모델에 전체 전사 내용이 필요한, 세부 정보가 많은 OCR 작업에서는 이 값을
높이세요. 설명이 장황한 비전 모델의 토큰 사용량을 제한하려면 낮추세요.
대시보드 필드는 비전 탭의 고급 패널에 있으며
(`ModalityBridgeVisionTab.tsx`의 `modality-bridge-max-chars`), 1에서 99 사이의
값은 최솟값인 100으로 올리되 명시적인 `0`은
변경하지 않습니다. `0`은 단순히
"설정되지 않음"을 나타내는 기본값이 아니라, 그 자체로 유효한 Zod 값입니다
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### 이미지 설명 캐시 (`modalityBridge/bridgeCache.ts`)

이미지 설명 출력을 위한 인메모리 LRU + TTL 캐시로, 프로세스 전체에서 공유됩니다.
키 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`이며,
길이 접두사 프레이밍을 사용합니다(필드 경계 충돌 없음). 모델 구성 요소는
실제로 응답한 모델이 아니라 **설정된** 브리지 모델입니다.
`callVisionModel`이 내부적으로 폴백할 수 있으므로, 시도별로 키를 지정하면
캐시가 분산됩니다. 실패한 이미지 설명은 캐시하지 않습니다. 설정:

| 키                              | 기본값 | 범위    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 원격 이미지 정규화 (자체 루프 describe/base64 가져오기)

브리지가 **원격** 이미지를 직접 가져오는 경우 — Anthropic describe
자체 호출과 claude-wire-format base64 변환
(`ensureBase64ImagesForClaudeWire`) 모두
`visionBridgeHelpers.ts`의 `fetchRemoteImageAsDataUri()`를 통해 수행 — 생성된 데이터
URI는 비전 모델 요청에 포함되기 전에 `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`)를 거칩니다.
크기가 큰 이미지는 **긴 변 2048px**로 축소됩니다(OpenAI/Anthropic이 이미 서버 측에서
적용하는 크기 조정 상한과 동일). 이를 통해 비전 모델이 보는 내용을 바꾸지 않으면서
업로드 바이트 수와 지연 시간을 줄입니다. 크기 조정에는
동적 import로 로드되는 `sharp`를 사용합니다. 플랫폼에서 네이티브
바이너리를 로드하지 못하더라도 `normalizeDataUri()`는 **절대 예외를 던지지 않으며**,
원본 바이트를 그대로 전달하는 방식으로 대체하므로 describe/base64 변환
경로는 항상 계속 작동합니다. 이미지가 아닌 바이트(가져오기 결과가
디코딩 가능한 이미지가 아닌 경우)도 변경 없이 그대로 전달됩니다. 이 정규화는
브리지가 자체 호출을 위해 가져오는 이미지에만 적용되며,
호출자의 원시 패스스루 페이로드에는 절대 적용되지 않습니다. 이는
명시적 동의가 있을 때만 변경한다는 원칙(엄격 규칙 #20)에 부합합니다.

#### 설정 스키마 + 마이그레이션

새 `modalityBridge*` 키는 `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`)에서 Zod로 검증됩니다. 대상은 `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` 키 3개, 그리고
Audio Bridge에서 사용하는 `modalityBridgeAudio*` 그룹입니다. 마이그레이션
`141_modality_bridge_settings.sql`은 기존 레거시
`visionBridge*` 값을 대응하는 새 키로 복사합니다(멱등성이 보장되며, 운영자가 설정한
`modalityBridge*` 값은 절대 덮어쓰지 않음). 레거시 키는 한 릴리스 주기 동안
읽기 시 대체 값으로 계속 허용됩니다.

#### 투명성 헤더 + 통계

describe 변환을 거친 응답에는
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
헤더가 포함됩니다(`modalityBridge/bridgeStats.ts`의 `buildModalityBridgeHeader()`로 생성하고,
`src/sse/handlers/chatHelpers.ts`의 `withModalityBridgeHeader()`로 부착).
재라우팅된 요청에는 헤더가 **없습니다**. 페이로드가 변경되지 않았으며 모델
교체는 이미 응답 본문의 `model` 필드에 표시되기 때문입니다.

`GET /api/modality-bridge/stats`(관리 인증 필요,
`GET /api/settings`와 동일한 권한 수준)는 `vision`, `audio`,
`video`의 모달리티별 인메모리 카운터
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`를 반환합니다.
`averageLatencyMs`는 전체 시도 횟수가 아닌 `latencySamples`를
분모로 사용합니다. 시간이 측정되지 않은 작업에 대해 0밀리초
샘플을 임의로 만들지 않습니다. `bridged`는 성공한
변환을 나타내는 하위 호환 별칭으로 유지되며, 실패한 시도는 이 값을 증가시키지 않습니다.
카운터는 설계상 프로세스가 다시 시작되면 초기화됩니다
(정산용이 아닌 원격 측정용).

#### 대시보드 구성

전용 대시보드 페이지는
`/dashboard/settings/modality-bridge`입니다. URL로 직접 접근할 수 있는 `Vision`, `Audio`,
`Video` 탭은 `tab` 값을 전환하는 동안 쿼리 매개변수를 유지합니다.
비전 탭에서는 활성화 여부, 모드, 모델 선택(자동
기본값 포함), 작업 인식 프롬프팅, 고급 시간 제한/이미지/설명 길이/캐시
제한, 런타임
카운터, 보호 장치가 적용된 샘플 요청을 제공합니다. 오디오 탭도 사용 가능합니다.
활성화 여부, 자동 옵션이 있는 STT 전용 모델 선택기, 시간 제한/최대 클립 제한, 오디오
카운터, `input_audio` 샘플 테스트를 제공합니다. 비디오 탭도 작동합니다.
FFmpeg/ffprobe 런타임 상태를 네 가지 명시적 UI 상태 중 하나로 표시하고(탐색이
진행 중이거나 완료되지 못한 경우 `unknown`, 클라이언트 측에서 탐색을 건너뛰는
비루프백 대시보드 호스트에서는 `restricted`, 탐색을 완료하고 부재가
확인되면 `unavailable`, FFmpeg/ffprobe 버전과 함께 표시되는 `available`),
활성화/모델/프레임/비디오/시간 제한 설정을 저장하며, 모델 선택기를 비전 지원
모델로 필터링하고 비디오 카운터를 제공합니다.

AI 설정 아래에 있던 기존 Vision Bridge 카드는 새 페이지로 연결되는
호환성 링크이며, 더 이상 별도의 중복 양식을 관리하지 않습니다. 미디어 제공업체도
기존 음성-텍스트 변환 플레이그라운드를 제거하지 않으면서 이미지-텍스트 변환 및 음성-텍스트 변환
워크플로를 해당 Modality Bridge 탭으로 연결합니다.

**자체 루프 진입 제어 우회:** describe 호출이 OmniRoute의
자체 `/v1` 루프를 통해 라우팅되는 경우(비표준 제공업체 모델), 하위 요청은
`x-omniroute-admission-bypass: internal`을 전송하고, 확인된
자체 루프 자격 증명으로 인증합니다. 로컬 모드에서는 로컬 `sk_omniroute` 센티널을 사용하고,
그 외에는 운영자가 구성한 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 환경 변수 키(#1350)를 사용하므로
`REQUIRE_API_KEY=true` 배포에서도 describe 호출을 실행할 수 있습니다. 이 우회는
정확히 해당 자격 증명에 대해서만 허용되므로, 외부 클라이언트는
이 헤더를 사용하여 진입 제어를 건너뛸 수 없습니다.

레거시 기본값은 `src/shared/constants/visionBridgeDefaults.ts`에 있으며,
새 모드/작업 인식/캐시 기본값과 설정 리졸버는
`src/shared/constants/modalityBridgeDefaults.ts`에 있습니다. 가드레일은
`deps` 생성자 옵션을 제공하므로 테스트에서 가짜 `getSettings` 및
`callVisionModel` 구현을 주입할 수 있습니다.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

오디오 입력을 지원하는 것으로 확인되지 않은 대상에 도달하기 전에 오디오가 포함된 채팅 요청을
가로챕니다. 채팅 요청을 재라우팅하지는 않습니다. 오디오 부분은
기존 OpenAI 호환 멀티파트 엔드포인트를 통해 텍스트로 변환되며,
선택된 채팅 모델은 변환된 텍스트로 처리를 계속합니다.

흐름:

1. `getResolvedModelCapabilities()`를 통해 `supportsAudio`를 결정합니다. 명시적인
   provider-registry 메타데이터가 최우선이며, 그다음은 정적 모델 메타데이터,
   마지막은 동기화된 `modalities_input`입니다. 선언된 입력 목록에 `audio`가 없으면
   `false`이며, 기능 지원 여부를 판단할 근거가 없으면 `null`로 유지됩니다. `false`와
   `null` 모두 보수적인 브리지를 활성화하며, `true`는 이를 우회합니다.
2. `modalityBridgeAudio*` 설정을 확인하고 공유 `detectMediaParts()`
   감지기를 통해 모든 메시지에서 치환 가능한 최상위 오디오 파트를 추출합니다.
   지원되는 전송 형식은 OpenAI `input_audio`, `audio_url`,
   `source.media_type: "audio/*"`입니다. 중첩된 오디오는 라우팅을 위해 감지되지만
   치환 경로에서는 제거되지 않습니다. 처리량은 `modalityBridgeAudioMaxClips`로
   제한되며, 이후 파트는 변경하지 않습니다.
3. 설정된 `provider/model`을 따르거나, `selectAudioBridgeModel()`이
   `AUDIO_TRANSCRIPTION_PROVIDERS`를 일정한 카탈로그 순서로 순회하며 사용 가능한
   활성 공급자 자격 증명이 있는 첫 번째 모델을 선택하도록 합니다.
4. `callAudioTranscription()`은 base64/data-URI 오디오를 멀티파트
   `file`로 변환하거나, DNS 고정과 25 MB 제한이 적용된 공개 주소 전용 아웃바운드
   가드를 통해 원격 `audio_url`을 다운로드합니다. 그런 다음
   `resolveSelfLoopBearer()`로 인증하여 파일과 선택된 모델을 로컬
   `/v1/audio/transcriptions` 셀프 루프로 POST 전송합니다. 기존 전사 라우트가
   일반적인 자격 증명 조회, 쿨다운/속도 제한 처리, 공급자 디스패치를 수행합니다.
5. 호출이 성공하면 해당 파트를 `[Audio N]: <transcript>`로 대체합니다. 호출은
   `Promise.allSettled`로 실행되며, 개별 호출이 실패하면 원래 오디오 파트를
   보존합니다(#4012 계약). 모든 호출이 실패하고 대상이
   `supportsAudio === false`로 확인된 경우, 해당 파트는
   `[Audio N]: (unavailable — no STT provider connected)`로 대체됩니다(#8430 계약).
   대상의 지원 여부가 알 수 없는 상태(`null`)라면 모든 호출이 실패해도 변경하지
   않습니다. 텍스트 전용으로 확인된 대상에 사용 가능한 STT 자격 증명이 없으면
   네트워크 호출 없이 동일한 명시적 스텁을 제공합니다.

성공한 전사 결과는 프로세스 전체에서 공유하는 Modality Bridge LRU/TTL 캐시를 사용합니다.
키는 오디오 참조, 고정된 `audio-transcription` 작업 레이블, 선택된 STT 모델을
조합하며, 실패는 캐시하지 않습니다. 오디오 처리 시도는 공유 카운터인
`bridged`, `cacheHits`, `failures`, `lastUsedAt`을 업데이트합니다.
변환된 응답에는
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`이 포함되며,
변경되지 않은 요청에는 Audio Bridge 세그먼트가 추가되지 않습니다.

런타임 설정은 DB에 저장되며 Zod로 검증됩니다.

| 키                            | 기본값  | 범위             |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | 자동 또는 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

공유 캐시는 계속해서 `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, `modalityBridgeCacheMaxEntries`로 제어됩니다.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

기본 비디오 지원 여부가 확인되지 않은 대상을 호출하기 전에 Chat Completions의
`messages`와 Responses API의 `input`에서 최상위 비디오 파트를 가로챕니다.
지원되는 형식은 `input_video`, `video_url`, `video_source`, HTTPS URL,
`data:video/*;base64,...` 데이터 URI입니다. 텍스트에 포함된 일반 파일명은
비디오로 취급하지 않습니다.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`)은 요청 순회,
기능 지원 여부/정책 검사, 요청별 집계, 응답 페이로드를 담당합니다.
비디오별 작업인 획득, 전체 결과 캐시, 프레임 시퀀스 설명(호출자가 명시한 오디오
전사 내용도 통합), 시도별 지표/중단/정리는
`videoBridgePipeline.ts`의 `processVideoPart` 뒤에 캡슐화되어 있으며,
`preCall`의 루프 안에서 비디오 파트마다 한 번씩 호출됩니다.
이 모듈은 명시적 포트 경계인 `VideoMediaBrokerPort`
(바이트 획득 및 샘플링된 프레임 추출), `VideoAudioTranscriptionPort`
(호출자가 명시한 오디오 전사 내용을 샘플링된 캡션과 통합),
`VideoDrilldownPort`(프레임 드릴다운 영속화 경계. 아직
`processVideoPart`에 연결되지 않았으며, 현재는 별도의
`/api/modality-bridge/video/drilldown` 라우트만 드릴다운 항목을 기록함)도 정의합니다.

공개 `/v1` 요청 경로는 하위 프로세스를 임포트하거나 호출하지 않습니다. 원격
비디오는 50 MiB 제한하에 다운로드됩니다. 인라인 base64 비디오는 모델/메시지/프레이밍을
포함한 전체 요청이 공개 JSON 요청 허용 한도인 50 MiB 이내로 유지되도록,
디코딩된 크기에 비디오당 36 MiB의 보수적인 상한을 적용합니다. 인라인 길이와
디코딩 크기 추정치는 메모리 할당 전에 검사합니다. 최초 원격 URL과 모든 리디렉션에는
HTTPS가 필수이며, DNS 고정이 적용된 기존 공개 주소 전용 아웃바운드 가드를
사용합니다. 그런 다음 바이트는 정확히 내부
`POST /api/modality-bridge/video/extract` 브로커 경계를 통과합니다. 이 라우트는
`LOCAL_ONLY`이면서 `SPAWN_CAPABLE`이며, 프로세스별 인증을 거친 신뢰할 수 있는
루프백 요청만 허용하고 URL, 파일 시스템 경로, 실행 파일,
인수 목록은 절대 허용하지 않습니다. API 본문 크기 파이프라인과 핸들러의 점진적
본문 판독기는 각각 독립적으로 50 MiB의 브로커 입력 상한을 적용합니다. 크기가 제한된
큐는 한 번에 하나의 추출 작업을 실행하고, 대기 작업을 4개까지 허용하며, 대기 중인
입력의 총크기를 100 MiB로 제한합니다.

브로커 내부에서 `ffprobe`는 비공개 로컬 파일을 읽으며, 고정된 형식 허용 목록은
재생 목록 및 매니페스트 형식을 제외합니다. 허용된 MOV 계열
컨테이너에서는 외부 MOV 데이터 참조가 기본적으로 비활성화된 상태로 유지되며,
고정 명령도 이를 활성화하지 않습니다. `ffprobe`와 `ffmpeg`는 모두
`file` 전용 프로토콜 허용 목록, 단일 스레드, 고정된 인수 배열을 사용하고, 셸을 사용하지 않으며,
실행 파일은 `PATH`에서 찾습니다. 첨부 이미지 형식의 커버 스트림은
재생 가능한 후보로 간주하지 않습니다. 재생 가능한 모든 스트림은 제한을 충족해야 하며,
명시적으로 지정된 기본 스트림을 우선 선택하고, 없으면 인덱스가 가장 낮은 스트림을 결정적으로
선택합니다. 동영상은 길이 600초, 각 축의 크기 8,192픽셀,
원본 픽셀 수 33,554,432개로 제한됩니다. FFmpeg는 구간 중간점에서 JPEG 프레임 1~16개를 샘플링하고,
작은 입력은 확대하지 않으면서 긴 변을 최대 1,024픽셀로 축소하며,
URL을 전달받지 않습니다. 기본 샘플링 방식은 `uniform`입니다. 선택적
`scene_aware` 정책과 실험적 `segment_aware` 정책은 이미 검증된 로컬 스트림에 대해
고정된 FFmpeg 처리를 한 차례 추가로 수행하고, 제한된 범위의
`showinfo` 장면 타임스탬프를 선택합니다. 감지기 실패, 시간 초과, 잘못된 형식의 출력 또는
빈 후보 집합이 발생하면 동일한 균등 중간점 방식으로 결정적으로
대체합니다. 세그먼트 인식 모드는 검증된 장면 구간에 비례하여 중간점 샘플을
배분합니다. 세그먼트 인식 근거와 대체 동작은
아래에 자세히 설명되어 있습니다. 엄격한 16프레임 상한은
모든 정책에서 선택 후 적용됩니다. 장면 인식 요청의 프레임 예산이
1개뿐이면 현재 적용되는 전체 동영상 또는 집중 구간의 균등 중간점을
사용하고 `policyEffective: uniform`을 보고합니다. 장면 프레임 하나만 선택해서는
시간상 양 끝을 모두 보존할 수 없기 때문입니다. 호출자는 선택적으로
유한한 집중 구간(`start`/`end`초)을 제공할 수 있습니다. 경계는 미디어
길이 내로 제한되며, 순서가 뒤바뀌거나 유한하지 않은 구간은 거부되고, 모든 샘플링
정책은 정규화된 구간 안에서만 수행됩니다. 최종
구간은 샘플링 메타데이터와 신뢰할 수 없는 설명
접두부에 포함되므로, 다운스트림 모델은 특정 구간을 발췌한 것인지 전체
타임라인인지 구분할 수 있습니다.

의미적 캡션 집중 기능은 별도의 명시적 설정입니다. 기본 `full`
분석 모드는 기존 프레임 프롬프트를 유지하며 요청
텍스트를 캡션 모델에 전달하지 않습니다. `focused` 모드에서 브리지는 동일한 Chat 또는 Responses
컨테이너에서 사용자가 작성한 비어 있지 않은 최신 `text`/`input_text`만 읽고,
이를 NFC로 정규화하며, 제어 문자와 공백을 정리하고,
유니코드 코드 포인트 500개로 제한합니다. 결과가 비어 있으면
정확히 동일한 `full` 프롬프트로 대체합니다. 사용 가능한 힌트는 전용
비신뢰 사용자 컨텍스트 블록에 JSON으로 직렬화되며, 관찰 가능한 세부 사항의 우선순위만 지정할 수 있습니다.
미디어에서 보이거나 들리는 지시를 따르지 말라는 별도의 경고를
무효화할 수는 없습니다. 텍스트 기반 집중 기능은 `start`/`end`를 추론하거나
시간 기반 샘플러를 변경하지 않습니다.

#### FU-07 구조적 세그먼트 근거

`segment_aware`는 이미 검증된
로컬 동영상 스트림에 대해 제한된 사전 분석 처리를 한 차례 수행합니다. 고정 필터 체인은 먼저 너비를 최대 320픽셀로
축소하고, 장면 전환과 정지 구간을 감지한 다음, 초당 1프레임을
샘플링하여 흐림, 평균 휘도, 공간적·시간적 정보를 분석합니다. 이 처리는
구조적 샘플 600개, FFmpeg/필터 스레드 1개, 동일한
`file` 전용 프로토콜 및 컨테이너 허용 목록, 프로세스 출력 한도 1 MiB,
브로커의 공통 중단/마감 시간 내 최대 30초로 제한됩니다.
요청으로부터 명령, 필터, 경로 또는 URL을 받지 않습니다.

구조적 값은 결정적 샘플링 근거이며, 동영상에 대한 의미적
이해가 아닙니다. 피사체, 동작, 캡션, 음성 또는 사용자
의도를 추론하지 않습니다. 장면 및 정지 경계는 세그먼트를 형성하며, 정지 비율, 흐림,
노출, 공간적 세부 정보, 시간적 변화는 기존
1~16프레임 예산의 배분 방식에만 영향을 줍니다. 완전히 정지된 세그먼트는 최대 1프레임으로 제한되고,
정지되지 않은 세그먼트들은 나머지 예산을 놓고 경쟁합니다. 경계 수가
프레임 수보다 많으면 균등한 타임라인 범위를 유지하므로, 초반의 빠른 컷 전환이
뒤에 이어지는 긴 세그먼트를 가릴 수 없습니다. 정지 경계에서 1초의
분석 해상도 이내에 있는 장면 경계는 병합됩니다.

필터 누락, 잘못된 형식이거나 비어 있는 근거, 감지기 오류 또는 제한된
사전 분석 시간 초과가 발생하면 실패를 허용하고 정확히 동일한 균등 중간점 정책으로 대체합니다. 호출자의
중단이나 브로커 마감 시간 도달 시에는 실패를 허용하지 않습니다. 실행 중인
하위 프로세스를 종료하고, 이후 프레임 추출을 방지하며, 비공개 임시 디렉터리 트리는
`finally`에서 제거됩니다.

`scripts/perf/video-bridge-fu07-eval.ts`는 중복 제거 후 캡션 호출 절감, 움직임이 많은 구간의 예산 배분,
흐림/노출/SI-TI 근거, 빠른 컷 전환 뒤에 긴 구간이 이어지는 경우, 점진적 페이드의
오탐을 평가하기 위한 결정적 실제 FFmpeg
테스트 픽스처를 생성합니다. 사전 분석의 실제 경과 시간을 기록하고, `/usr/bin/time`을
사용할 수 있으면 자식 프로세스의 CPU 사용량과 최대 RSS도 기록합니다. 품질 검사는 구조적 판정 기준만
사용합니다. 이 하네스에는 승인된 엔드포인트나 고정된 평가기가 없으므로
실제 캡션 모델 품질은 `HOLD`로 유지됩니다. 금전적 절감 효과도
`--caption-cost-per-call-usd`로 명시적인 양수 호출당
추정 비용을 제공하지 않는 한 `HOLD`로 유지됩니다. 스크립트는 어느 결과도 임의로 만들어 내지 않습니다.

각 프레임은 4 MiB, 모든 원시 프레임의 합계는 23 MiB, 직렬화된
브로커 응답은 32 MiB로 제한됩니다. 전용 임시 디렉터리는
`finally`에서 삭제됩니다. OmniRoute는 FFmpeg를 번들로 제공하지 않으며 사용자 지정
실행 파일 경로도 허용하지 않습니다. 캡션 생성 전에 브리지는 보수적인 시각적
중복 제거 단계를 적용합니다. 각 JPEG를 16×16 그레이스케일 버퍼로 축소하고
마지막으로 유지된 프레임과만 비교합니다. 요청된 캡션 예산이
프레임 1개를 초과하면 추출 단계에서
해당 예산의 최대 두 배이되 16프레임을 넘지 않는 제한된 후보 풀을 제공합니다.
요청된 상한은 중복 제거 후에만 적용되며, 예산이 최소
2개이면 최종 축소 단계에서 선택된 후보 중 첫 번째와 마지막 후보를
보존합니다. 버전이 지정된
`grayscale-16x16-mean-cells-v2` 정책은 평균 휘도 차이와
정규화된 차이가 0.05 이상인 썸네일 셀의 비율 중 더 큰 값을 사용합니다.
중복 임계값은 상수 0.04이며, 런타임 설정으로 노출하는 대신
예측 가능성을 위해 선택한 값입니다. 이 보조
고대비 신호는 평균값만 비교할 때 놓칠 수 있는 작은 움직임과 화면에 보이는 텍스트의
변화를 보존합니다. 비교기나 디코더에서 오류가 발생하면 프레임을 유지하는 방식으로 처리하여
포괄 범위를 보존합니다. 출력 메타데이터는 추출된 후보, 성공적으로 사용된
프레임, 제거된 시각적 중복을 구분합니다.

명시적으로 표시된 비디오 파트는 타임스탬프가 포함된 콘택트 시트를 요청할 수 있습니다.
브리지는 최대 4열, 16프레임의 JPEG 그리드를 생성합니다. 각 512픽셀 셀은
고대비 하단 띠에 원본 타임스탬프를 직접 삽입하며, 동일한 타임스탬프를
텍스트 메타데이터에도 유지하여 다운스트림 연결 및 감사에 활용할 수 있게 합니다. 전체
JPEG 크기는 여전히 32 MiB로 제한됩니다. `sharp`가 그리드를 디코딩하거나 합성할 수 없으면
브리지는 개별 JPEG 프레임으로 대체합니다. 클라이언트의 중단 신호는
시트 작업에도 그대로 전파됩니다.

승격 근거는 합성 기반 합성 작업 마이크로벤치마크와 의도적으로 분리되어
있습니다. `scripts/perf/video-bridge-contact-sheet-eval.ts`는 실제 OpenAI 호환 비전 모델을 위한
스키마 버전이 지정된 A/B 테스트 하네스를 정의합니다. 이 하네스는
공급자가 보고한 토큰 수, 전체 구간의 실제 경과 시간(시트 합성 포함),
모델 호출 횟수, 매니페스트에 정의된 사실의 유지율을 측정합니다. 원시 모델 응답은
보고서에 기록하지 않으며, SHA-256 다이제스트와 일치한 사실 ID만 보관합니다.
`--execute-real`이 전달되고
`--model`, `OMNIROUTE_BASE_URL`, `OMNIROUTE_API_KEY`가 설정되지 않는 한 하네스는 네트워크 호출이나 유료 모델 호출을 수행하지 않습니다.
이러한 명시적인 실제 실행이 없으면 기계 판독 가능한 판정은 `HOLD`로
유지됩니다. 합성 페이로드 및 호출 횟수 측정값만으로는 승격 근거가 되지 않습니다.

호출자는 이미 시간 정렬된 텍스트를 보유한 경우 지원되는 비디오
파트에 선택적 `transcript.cues` 배열을 첨부할 수 있습니다. 각 큐에는 `text`,
탐색으로 확인된 재생 시간 내의 유한한 `start`/`end` 구간, 허용 목록에 있는
`source`(`client`, `embedded` 또는 `audio-bridge`)가 있어야 합니다. `confidence`의 기본값은
`1`이며 `0`과 `1` 사이여야 합니다. 완전히 동일한 중복 큐는 하나로 합쳐집니다.
OmniRoute는 이 메타데이터를 바탕으로 전사를 시작하지 않습니다. 검증된 큐는
출처, 신뢰도, 시간 구간과 함께 설명 결과에 복사되며,
프레임 캡션과 함께 신뢰할 수 없는 관찰 내용으로 표시됩니다. 유효하지 않거나,
범위를 벗어나거나, 출처 정보가 없는 텍스트는 캡션 스트림에 섞이지 않고
거부됩니다. 두 요청 본문 전사 채널은 제공된
출처를 모두 `client`로 정규화하며, 자체적으로 선언한 `embedded` 또는 `audio-bridge`
레이블도 여기에 포함됩니다. 서버 소유 어댑터만
코드 전용 `trustedSource` 인수를 통해 이러한 신뢰된 레이블을 할당할 수 있습니다. 요청 JSON 필드에서는
해당 인수에 접근할 수 없습니다. 전사 텍스트는 출처와 관계없이
신뢰할 수 없는 미디어 유래 콘텐츠로 유지되며,
인가 여부를 결정하는 데 절대로 사용되어서는 안 됩니다.

고급 호출자는 동일한 비디오에 `audioTranscript` 트랙을 제공할 수 있습니다.
이는 서버가 전사했다는 증거가 아니라 클라이언트가 제공한 텍스트로 취급됩니다.
융합 연결부는 시각 및 오디오 관찰을
하나의 기한과 중단 신호 아래 실행하고, 공통 타임라인에 따라 정렬하며, 완전히 동일한
중복을 하나로 합치고, 한쪽만 성공하면 부분 결과를 보고합니다.
유효하지 않은 `audioTranscript`는 전체 비디오를 실패시키는 대신 이러한 부분 결과로
저하 처리됩니다. 시각적 설명은 유지되고 오디오 분기에는 정제된 실패 코드가
기록됩니다. 분기별 가용성, 부분 결과 플래그,
정제된 실패 코드는 설명 결과, 가드레일 메타데이터
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), 결과 캐시 메타데이터, 브리지
융합 카운터에 보존됩니다. 기본 Video Bridge 경로는 음성-텍스트 변환을 호출하거나
미디어 사본을 추가로 다운로드하지 않습니다. 명시적인 해당 트랙이 없으면
비디오 전용으로 유지됩니다.

**대본 보존(#12150 P1).** 이 동작은 Video Bridge(자체적으로 옵트인 방식)가
대본 큐를 렌더링할 때마다 자동으로 적용되며, 별도의
보존 플래그는 없습니다. 요청이 대본 큐(호출자가 선언한
`transcript` 또는 융합된 `audioTranscript`)를 하나라도 렌더링하면, 가드레일은 해당 요청을
`videoBridgeObserved`로 표시하고 동영상 설명의 가림 처리된 섀도 복사본을 생성합니다.
이는 모든 큐의 자유 텍스트 본문을
`[redacted-video-transcript]`로 대체한 동일한 렌더링으로, 문자열을 조합하기 전에
구조화된 큐 필드를 치환하여 생성합니다(평탄화된 텍스트를 파싱하는 방식은 절대 사용하지 않으므로,
악의적인 내용이든 일반적인 내용이든, `[inaudible]`/`[music]`처럼 `]`가 포함된 본문을 비롯해
어떤 큐 내용도 남을 수 없습니다). 영구 저장되는 호출 로그의 요청 본문은
내용의 동등성을 기준으로 각 동영상 유래 텍스트 부분을 해당 가림 처리된 섀도 복사본으로
교체합니다. `fullText` 앵커는 완성된 호출 전 가드레일 페이로드에서 다시 읽으므로,
후속 체인 가드레일(우선순위 10/95의 PII 및
자격 증명 마스커)이 설명 텍스트를 제자리에서 다시 작성한 뒤에도,
시스템 프롬프트/핸드오프/메모리 주입이 메시지 배열의 형태를 바꾼 뒤에도
일치 여부를 확인할 수 있습니다. 모델로 전송되는 본문은 변경되지 않습니다.
관찰된 요청은 영구 Memory에도 아무 내용도 추가하지 않습니다(요청 및 응답에서
파생되는 추출을 모두 건너뜁니다). 따라서 모델의 응답 자체가 대본 텍스트를 Memory에
다시 남길 수 없습니다.

**원시 동영상 필드(#12430).** 브리지가 활성화되어 있고 네이티브 동영상 지원 여부를 알 수 없거나 지원되지 않는 경우, 정의된 `transcript`/`audioTranscript` 필드도 `videoBridgeObserved`를 활성화하며, 이는 설명 생성 실패 후나 `maxVideos` 제한에 도달한 후에도 적용됩니다. `null`과 빈 문자열도 해당하지만, 필드가 없거나 동영상이 아닌 메타데이터는 해당하지 않습니다. 보존되는 사본에서는 이러한 필드를 가림 처리하거나 요청을 생략하며, 캐시/Memory는 우회합니다.

이러한 폴백 경로에서는 유효한 호출자 큐가 비표준 공급자 필드가 아니라
지원되는 `text`/`input_text` 부분으로 변환됩니다. 요청에서 제공한 두 트랙은
모두 신뢰할 수 없는 `client` 관찰 데이터로 유지되며, 동영상에 대한
설명이 생성되지 않았고 타임스탬프가 미디어와 대조 검증되지 않았다는 명시적 경고가 포함됩니다. 기존의
256개 큐/64 KiB 총 한도와 큐별 한도는 두 트랙을 합산하여 적용됩니다.
타임스탬프는 브로커의 최대 600초 제한과 제공된 포커스
구간 안에 있어야 합니다. 잘못된 트랙은 임의의 텍스트로 전달하지 않고 폐기합니다. 두 트랙의
합산 한도를 초과하지 않는 한, 다른 유효한 트랙은 계속 사용할 수 있습니다. Null/빈
필드는 텍스트를 추가하지 않습니다. 이 폴백은 미디어 가져오기나 전사를 추가로 수행하지 않습니다.
대본 확장 필드는 폴백 동영상 캐리어와 그 안의
`video_url`/`source` 객체에서 제거됩니다. OpenAI 전송 형식의 허용 목록은 엄격하게 유지됩니다. 네이티브
지원 여부를 알 수 없는 동영상 캐리어는 계속 사용할 수 있으며, 텍스트 전용으로 확인된 대상에는 안전한 마커가 유지됩니다.
구조화된 가림 처리 섀도 복사본은 추가된 대본 텍스트를 보호하며,
호출자 소유의 원본 요청은 변경되지 않습니다. 네이티브 지원 대상과
비활성화된 브리지는 기존의 우회 동작을 유지합니다.

추가로 보존되는 사본도 동일한 관찰된 요청 신호를 사용합니다. 가드레일 적용 전의 원시
클라이언트 요청 스냅샷, 메모리 내 대기 중인 요청, 조기에
거부된 요청의 로그는 동영상 부분의 대본 필드를 구조적으로 대체합니다.
파이프라인 단계와 컨텍스트 핸드오프에서 합성한 문자열 프롬프트는
영구 저장 요청 본문 싱크에서 가림 처리됩니다. 영구 저장된 `video_content_removed` 마커는
의도적으로 폐기된 텍스트를 재구성하는 대신 `previous_response_id`를 통한 이어가기 요청을
안전하게 실패 처리합니다. 관찰된 요청이 로깅 전에
부분별 가림 처리 섀도 복사본을 잃거나, 여러 동영상 섀도 복사본 중 단 하나라도
후속 요청 변경 후 일치하지 않으면, 부분적으로 가림 처리된 대본을 보존하는 대신
보존할 요청 본문 전체를 생략합니다.

관찰된 요청에 대해 모델 응답은 구조화된 큐 경계 없이
대본의 어느 부분이든 인용할 수 있습니다. 따라서 영구 저장되는 호출 로그의
`responseBody`는 생략 마커로 대체되며, 상세
파이프라인 아티팩트(업스트림/클라이언트 본문과 스트림 청크가 포함될 수 있음)는
보존하지 않습니다. 시맨틱, 멱등성 및 추론 재생 캐시는
해당 요청에 대한 읽기와 쓰기를 우회합니다. 공급자 요청과 클라이언트에 표시되는
응답은 변경되지 않습니다. 상세 아티팩트를 생략할 때는 초기 연결 유지 바이트를 임시
버퍼에서 비웁니다. Kiro의 잘못된 EventStream
경고는 페이로드의 바이트 수만 보고하며, 그 내용이나 JSON
파서의 원시 오류는 절대 보고하지 않습니다.
이것이 관련 없는 모든 공급자/플러그인 진단까지 감사를 마쳤다는 의미는 아닙니다.
더 광범위한 보존 싱크 전반의 점검은 #11658에서 추적합니다.

내부 `/api/modality-bridge/video/drilldown` 수명 주기는 별도의
루프백/토큰 인증 기반 캐시 계층입니다. 모든 작업에는
정규화된 불투명 주체 ID도 필요합니다. 프로덕션 호출자를 활성화하기 전에,
호출자는 인증된 테넌트에서 해당 ID를 도출해야 하며
클라이언트가 선택한 값을 절대 전달해서는 안 됩니다. 캐시 키는 해당 주체를 정규화된 세션 및
동영상 참조 ID에 결합하고, 이들의 SHA-256 파생 키만 저장하며, 읽기와
삭제 모두 동일한 주체 범위로 제한합니다. 캐시는 항목당 최대 16개의 파생 JPEG
프레임을 저장하고, 10분 후 만료시키며, 범위가 제한된
`start`/`end` 읽기 또는 명시적인 세션 삭제를 지원합니다.

각 주체는 항목 16개와 정규화된 JPEG 데이터 64 MiB로 제한됩니다. 이
제한은 전역 한도인 항목 64개/256 MiB와는 별개입니다. 주체 할당량이
부족해지면 전역 LRU 제거를 고려하기 전에 해당 주체의 최근 사용 빈도가 가장 낮은
항목만 제거합니다. 캐시 활동 시 만료된 항목을 정리하여 주체별 및
전역 사용량 집계에서 모두 제외하며, 취소되거나 검증에 실패한 경우에는
부분적인 교체를 커밋하지 않습니다.

캐시는 비정규 Base64, 과도한 패딩, JPEG가 아닌 미디어, 형식이 잘못되었거나
잘린 JPEG, 그리고 제한된 전체 이미지 `sharp` 디코딩 중 경고가 발생하는 JPEG를
거부합니다. 허용된 각 이미지를 정규 JPEG로 다시 인코딩하고, 호출자가 제공한 필드를
신뢰하는 대신 디코딩된 바이트에서 너비와 높이를 도출하며, 뒤에 붙은
폴리글롯 바이트는 보존하지 않고 제거합니다. 크기가 제한된 정규 압축 버퍼만
두 할당량 모두에 산정됩니다. JSON 전송 크기 제한에는 디코딩된 입력의 32 MiB
상한에 대한 Base64 오버헤드가 포함됩니다. 저장된 모든
파생 데이터에는 검증된 JPEG 형식/해상도, 샘플링 정책,
파생 버전, 생성 시각, 서버에서 계산한 콘텐츠 해시, 해시된 부모
참조와 신뢰할 수 있는 호출자의 부모 콘텐츠 해시가 기록됩니다. 취소 여부는
원자적 캐시 커밋 전에 비동기 디코딩/해시 단계 사이에서 확인됩니다.

이번 구현 범위에서는 아직 프로덕션 생성자를 라우트에 연결하지 않으며,
다중 해상도 변형 선택도 제공하지 않습니다. 따라서 투명한 Video Bridge 요청
경로에는 추가 작업이 발생하지 않으며, 테넌트에 바인딩된 보안 주체 도출과
전체 FU-08 다중 해상도 수명 주기는 완료된 동작으로 문서화되지 않고
명시적인 후속 작업으로 남아 있습니다.

프레임의 캡션은 설정된 Video 모델을 사용하여 순차적으로 생성됩니다. Video 재정의 값이
비어 있으면 Vision 설정을 상속하며, 둘 다 비어 있으면 Vision
자동 라우터가 실제로 사용할 비전 지원 모델을 선택합니다. 캡션 생성에 성공하면
원본 부분을 안정적인 `[Video description:` 접두사가 붙은 텍스트로 대체합니다. 이 접두사는
해당 텍스트가 신뢰할 수 없는 미디어 기반 관찰 내용임을 표시하고, 후속
모델에 미디어에서 발견한 지시를 따르지 않도록 알리는 역할도 합니다. 프레임 캡션 캐시 키에는
JPEG 바이트, 프롬프트, 타임스탬프, 실제 사용 모델이 포함되며, 성공적으로 생성된
캡션만 캐시됩니다. 캐시 항목에는 폴백 모델을 포함하여 실제로 캡션 생성에 성공한 모델이
유지됩니다. 서로 다른 프레임이 서로 다른 모델로
생성된 경우 브리지는 `mixed`를 보고합니다. 캐시 적중 시에는 생성 모델을 요청된 라우팅 계획으로
다시 표시하지 않고 기존 생성 모델 식별 정보를 재사용합니다. 전체 동영상 결과
캐시의 키에는 출력을 변경하는 모든 입력, 즉 프롬프트, 실제 사용
모델, 샘플링 정책, 프레임 수, 의미 분석 모드, 정규화된
초점 힌트의 SHA-256 지문, 초점 구간, `transcript`,
`audioTranscript`, 콘택트 시트 플래그가 포함됩니다. 따라서 이러한
요소 중 하나라도 변경되면 오래된 결과를 재사용하지 않고 항상 캐시 미스가 발생합니다. 시각적 중복 제거 정책
버전, 임계값, 제한된 후보 프레임 수도
결과 캐시 키와 메타데이터에 명시적으로 포함되므로, 정책이 변경되면 오래된
전체 동영상 설명을 재사용할 수 없습니다. 결과 캐시 v4 메타데이터에는 모드와
지문만 유지되며, 원시 사용자 작업은 저장되지 않습니다. 가드레일 메타데이터는
요청된 분석 모드와 실제 적용된 분석 모드를 모두 보고합니다. 사용 가능한 사용자 텍스트 없이
`focused` 모드가 요청된 경우 실제 적용 모드는 `full`로 보고됩니다.

가드레일은 지원되는 모든 동영상 부분을 추출하지만,
`modalityBridgeVideoMaxVideos`를 초과하는 수의 동영상은 설명하지 않습니다.
`supportsVideo === false`임이 확인된 대상의 경우, 처리에 실패하거나 제한을 초과한 동영상은 명시적인 안전한
텍스트 마커로 변환되어 원시 동영상이 남지 않습니다. 기능 지원 여부가 알려지지 않은 경우에는 해당 부분의
동영상 운반 형식이 유지되며, 폴백 전사문에는 위의 제한된 텍스트
변환이 적용됩니다. `supportsVideo === true`인 대상은 브리지를 우회합니다.
클라이언트 요청의 중단 신호는 다운로드, 브로커 대기열,
하위 프로세스, 캡션 호출에 전파됩니다. 중단 시 동영상 사이에서 처리를 멈추며,
실패 시에도 원시 미디어를 그대로 통과시키지 않습니다.

런타임 설정은 DB에 저장되며 Zod로 검증됩니다.

| 키                                  | 기본값      | 범위 / 동작                                                                                           |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 선택적 런타임, 명시적으로 활성화해야 함                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full`은 일반 캡션을 유지하며, `focused`는 범위가 제한된 신뢰할 수 없는 최신 사용자 컨텍스트를 사용함 |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge 모델 상속                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` 또는 비례 방식의 `segment_aware`; 감지기 실패 시 `uniform`으로 폴백          |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

기존에 저장된 Video 시간 초과 값이 120초를 초과하면
브로커 처리 기한으로 제한됩니다. 이 제한을 초과하는 새 설정 저장은 거부됩니다.
`GET /api/modality-bridge/video/runtime`은 인증이나 런타임 탐색 전에
신뢰할 수 있는 표식으로 확인된 루프백 로컬 접속을 요구하며, 이후 관리
인증을 요구합니다. 반환되는 정보는 `available`, 정제된 FFmpeg/ffprobe 버전, 그리고
런타임을 사용할 수 없을 때의 고정된 사유뿐입니다. 내부 추출 엔드포인트는
공개 업로드 API가 아닙니다. 대기열이 포화 상태이면 `503`과 `Retry-After`를 반환하고, 호출자의
연결이 끊어지면 `499`를 반환하며, 고정된 브로커 처리 기한에 도달하면 `504`를 반환합니다. 변환된 응답은
Vision 또는 Audio 세그먼트를 제거하지 않고 중앙
`x-omniroute-modality-bridge` 헤더에 `video->text;model=<visionModel>;parts=<videos>`를 추가합니다.

### PII 마스커 (`piiMasker.ts`)

**두** 단계 모두에서 실행됩니다.

- **`preCall`**은 페이로드를 복제하고, `system`, `messages`, `input`,
  `prompt`를 순회하며(일반 문자열 항목 포함), 문자열 `content`/`text` 필드에
  `processPII()`(`@/shared/utils/inputSanitizer`에서 제공)를 적용합니다.
  `PII_REDACTION_ENABLED=true`이면 감지된 PII가 아웃바운드
  페이로드에서 마스킹됩니다. 이는 `INPUT_SANITIZER_MODE`와는 무관합니다(이 설정은
  프롬프트 인젝션 정책만 제어). 마스킹이 꺼져 있으면 호출 시 콘텐츠를
  다시 쓰지 않고 감지 건수만 기록합니다.
- **`postCall`**은 응답을 깊은 복제하고, `sanitizePIIResponse()`와
  Responses API 형식용 마스커(`maskResponsesOutput` —
  `output_text` 및 `output[].content[].text` 처리)를 실행합니다. 마스킹이 하나라도 발생하면
  수정된 응답이 원본을 대체합니다.

가드레일은 절대 차단하지 않으며, 주석 정보(`meta.detections`,
`meta.redacted`)를 추가하거나 내용을 다시 쓰기만 합니다.

#### 유형별 선택, 사용자 지정 패턴 및 감지 카운터

**대시보드 → 설정 → 보안 → PII 마스킹**에서는 _무엇을_ 마스킹할지 선택합니다.
여기서 마스킹을 켜는 것은 아닙니다. 마스킹 활성화는 여전히 `PII_REDACTION_ENABLED`(요청)와
`PII_RESPONSE_SANITIZATION`(응답 + SSE)이 제어하며, 둘 다 기본적으로 꺼져 있습니다.

- **유형별 선택** — 기본 제공 ID는
  `src/shared/constants/piiTypes.ts`(`PII_BUILTIN_TYPES`)에 나열되어 있습니다. 설정하지 않으면 모든
  유형이 대상이 됩니다(이 설정이 도입되기 전의 동작). 요청 엔진의
  `ssn_us` 패턴은 `ssn`에 매핑됩니다. 템플릿(최소, 표준, 금융,
  브라질, 미국, 전체)은 UI의 체크박스만 채웁니다.
- **사용자 지정 패턴** — 정규식 또는 와일드카드 패턴을 최대 20개까지 지정할 수 있습니다(`*` = 공백이 아닌 문자 최대 64개,
  `?` = 1개). 일치하는 내용은 `[CUSTOM_REDACTED]`로 바뀝니다.
  모든 패턴은 `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`)을 거칩니다. 최대 500자이며, 플래그는
  `g i m s u`로 제한되고, 컴파일에 성공해야 하며, `safe-regex` 검사(치명적
  역추적)를 통과해야 하고, 빈 문자열이나 마스킹 자리표시자와 일치해서는 안 됩니다.
  검증에 실패한 패턴은 저장 및 테스트 시 거부되며, 검증에 실패한 저장된 행은
  런타임에 컴파일하지 않고 건너뜁니다. 사용자 지정 패턴은
  마스킹이 켜져 있을 때만 실행됩니다.
- **감지 카운터** — 유형별 건수만 저장하며(일치한 값은 저장하지 않음), 메모리에
  유지되고 재시작 시 초기화됩니다(`src/lib/pii/piiDetectionStats.ts`). 마스킹이 켜져 있을 때만
  증가합니다.

설정은 `key_value` 테이블(네임스페이스 `pii_settings`,
`src/lib/db/piiSettings.ts`)에 저장되며, 1초 캐시를 통해 읽습니다. API:

| 메서드 | 경로                     | 용도                                                                      |
| ------ | ------------------------ | ------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | 플래그 상태, `enabledTypes`, `customPatterns`, 감지 카운터                |
| `PUT`  | `/api/settings/pii`      | `enabledTypes`(`null` = 전체) 및/또는 `customPatterns` 교체               |
| `POST` | `/api/settings/pii/test` | 최대 8 KB의 샘플에 대해 패턴 하나를 시험 실행하며, 아무것도 저장하지 않음 |

세 API 모두 관리 인증이 필요하며 Zod로 본문을 검증합니다
(`src/shared/validation/schemas/piiSettings.ts`).

### 프롬프트 인젝션 (`promptInjection.ts`)

사용자가 제공한 콘텐츠에서 공격 구조를 감지하고 설정된
정책을 적용합니다. 동작은 환경 변수와 생성자
옵션에 따라 결정됩니다:

| 설정        | 환경 변수                                                                                          | 기본값 | 효과                                                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 활성화 여부 | `INPUT_SANITIZER_ENABLED`                                                                          | `true` | `false`이면 가드레일이 처리를 즉시 종료합니다.                                                                                                                                       |
| 모드        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                    | `warn` | 인젝션 정책: `block`, `warn` 또는 `log`. (`redact`는 하위 호환성을 위해 허용되지만 인젝션 텍스트를 제거하지는 **않습니다**. 요청 PII 재작성은 `PII_REDACTION_ENABLED`가 제어합니다.) |
| 차단 임계값 | `blockThreshold` 옵션 / `INPUT_SANITIZER_BLOCK_THRESHOLD` (별칭 `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | 차단에 필요한 최소 심각도입니다. 기본 설정에서 중간 심각도는 관찰만 합니다.                                                                                                          |

**모드 우선순위** (`getMode`): 호출자의 `options.mode` →
`INJECTION_GUARD_MODE` **DB 기능 플래그 재정의**(대시보드 → 설정 →
기능 플래그) → `INJECTION_GUARD_MODE` 환경 변수 → `INPUT_SANITIZER_MODE` 환경 변수 →
`warn`. 따라서 대시보드 재정의가 환경 변수보다 우선하므로, 기능
플래그 UI에서 실행 중인 가드를 실시간으로 제어할 수 있습니다(재시작 불필요). DB 읽기는 장애에 안전하도록 설계되어 있습니다.
오류가 발생하면 가드는 환경 변수 기반 동작으로 대체되며,
재정의가 설정되지 않은 경우에는 환경 변수만으로 결정할 때와 동일하게 동작합니다.

감지 소스:

1. `@/shared/utils/inputSanitizer`의 `sanitizeRequest()`(파이프라인의
   다른 곳에서도 사용하는 공통 감지기 집합).
2. 기본 제공 `DEFAULT_GUARD_PATTERNS`(현재 `system_override_inline` 및
   `markdown_system_block`이며, 둘 다 심각도는 `high`).
3. 생성자 옵션으로 전달하는 선택적 `customPatterns`(문자열, 정규식
   또는 `{ name, pattern, severity }` 레코드).

`mode === "block"`이고 **동시에** 하나 이상의 탐지가 심각도
임계값을 충족하면, `preCall`은 `{ block: true, message: "Request rejected:
suspicious content detected" }`를 반환합니다. `warn`/`log` 모드에서는 가드레일이 로그를 기록하지만
호출은 허용합니다. 레지스트리를 거치지 않고 프롬프트를 평가해야 하는 호출자를 위해
공용 헬퍼 `evaluatePromptInjection()`도 내보냅니다.

**스캔 범위 제한(v3.8.20):** 탐지기는 결합된 프롬프트 텍스트의 **처음 16 KB**만
검사합니다. 이는 `src/shared/utils/inputSanitizer.ts`의
`MAX_INJECTION_SCAN_BYTES = 16 * 1024`(16 384바이트)입니다. `detectInjection()`과
`evaluatePromptInjection()`은 모두 패턴 루프를 실행하기 전에
`slice(0, MAX_INJECTION_SCAN_BYTES)`를 적용합니다. 인젝션 지시문은 입력의 앞부분에 위치하므로,
이 제한은 탐지 성능을 약화시키지 않으면서 수백 KB 규모 페이로드의 정규식 CPU/GC 부하를
제한합니다(참고:
#3932, #4041).

### 자격 증명 마스커 (`credentialMasker.ts`)

**두** 단계 모두에서 실행되며, 기본 체인에서는 마지막에 실행됩니다(우선순위 `95`). 아웃바운드 페이로드(메시지
내용, 도구 호출 인수, 도구 결과)**와** 제공자 응답에서 널리 알려진 API 키 / 비밀 토큰 패턴을 마스킹하므로,
프롬프트에 붙여 넣은 자격 증명(또는 도구 결과가 그대로 반환한 자격 증명)이 업스트림 제공자나
클라이언트에 유출되지 않습니다.

- **명시적으로 활성화해야만 동작**하며, PII 마스킹과 동일한 규칙을 따릅니다(엄격한 규칙 #20 관련):
  `settings.credentialRedactionEnabled === true` **또는**
  `CREDENTIAL_REDACTION_ENABLED=true`가 아니면 비활성화됩니다. 비활성화된 상태에서 가드레일은 아무 작업도 하지 않으며,
  차단하거나 다시 작성하지 않습니다.
- `redactCredentials()`는 전체 페이로드/응답 트리를 순회하고(`walkValue()`,
  프로토타입 오염에 안전하며 `WeakSet`을 통해 순환 참조에도 안전함), 일치하는 항목을
  `[REDACTED:<type>]` 자리 표시자로 대체하며, 실제로 변경된 분기만
  복제합니다.
- `CREDENTIAL_PATTERNS`는 LLM 제공자 키(OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS 토큰(GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), 결제 키(Stripe, Square), 클라우드
  키(AWS 액세스 키, Twilio, SendGrid, Mailgun), 개인 키 / JWT,
  자격 증명이 포함된 연결 문자열(`mongodb://user:pass@...` 등), 그리고
  범용 `Authorization`/`x-api-key`/`api-key`/`apikey` 헤더 값
  패턴을 포괄합니다. 헤더 형태의 키(`authorization`, `x-api-key`, `api-key`,
  `apikey`)는 범용 텍스트 정규식이 아닌 구조적 방식으로 마스킹됩니다(값만 마스킹하며,
  `Bearer `/`Basic `과 같은 스킴 접두사는 유지).
- 가드레일은 차단하지 않으며, 다시 작성(`modifiedPayload` /
  `modifiedResponse`)하고 메타데이터를 추가(`meta.credentialsRedacted`, `meta.count`)하기만 합니다.

회귀 방지 테스트: `tests/unit/credential-masker-guardrail.test.ts`.

## 기본 계약 (`base.ts`)

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
  block?: boolean; // true이면 체인 실행을 즉시 중단
  message?: string; // 차단 시 표시
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 요청을 수정하기 위해 preCall이 반환
  modifiedResponse?: TValue; // 응답을 수정하기 위해 postCall이 반환
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

가드레일은 `void`, `{}` 또는
`{ block: false }`를 반환하여 "변경 없음"을 나타냅니다. `modifiedPayload`/`modifiedResponse`를 반환하면
체인을 따라 후속 가드레일로 전달되는 값이 대체됩니다.
`signal?: AbortSignal`은 호출자의 수명 주기를 가드레일에 전달합니다. 요청 중단은 의도적으로 허용한 fail-open 예외입니다. 미디어 브리지는 작업을 중지하고 정리하되, 원시 미디어를 지원하지 않는 것으로 알려진 대상에 해당 미디어를 복원하지 않습니다.

## 레지스트리 (`registry.ts`)

싱글턴 `guardrailRegistry`는 다음을 제공합니다.

- `register(guardrail)` — 가드레일을 추가하거나 정규화된 이름을 기준으로 교체하고
  `priority` 오름차순으로 다시 정렬합니다.
- `clear()` / `list()` — 관리용 헬퍼입니다.
- `runPreCallHooks(payload, context)` — 활성 가드레일을 순회하면서
  `modifiedPayload`를 통해 페이로드를 전달하고, 처음으로 `block: true`를 만나면 중단합니다.
- `runPostCallHooks(response, context)` — 응답 측에서 동일한 흐름을 실행합니다.
- `resetGuardrailsForTests({ registerDefaults })` — 상태를 초기화하고 선택적으로
  기본 가드레일을 다시 등록하여 테스트를 깔끔하게 격리합니다.

두 실행기 모두 `{ blocked, payload|response, results, guardrail?, message? }`를 반환합니다.
여기서 `results`는 각 가드레일의 `blocked`, `skipped`, `modified`, `error`, `meta` 필드를
포함하는 `GuardrailExecutionResult` 레코드 배열로,
추적에 유용합니다.

### 요청별 가드레일 비활성화

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`는 현재 요청에서
건너뛸 가드레일 이름을 수집하여 중복 없는 목록으로 만듭니다.
다음 다섯 채널을 아래 순서대로 읽어 하나의 목록으로 병합합니다
(중복 제거 시 처음 나타난 항목이 우선합니다).

1. `apiKeyInfo.disabledGuardrails`
2. 요청 본문의 `disabledGuardrails` (최상위)
3. 요청 본문의 `metadata.disabledGuardrails` (`metadata`가 객체인 경우에만)
4. 헤더 `x-omniroute-disabled-guardrails`
5. 레거시 헤더 `x-disabled-guardrails`

두 헤더를 포함한 다섯 채널이 모두 병합됩니다.
`x-omniroute-disabled-guardrails`와 `x-disabled-guardrails`를 모두 보내면
두 목록의 합집합에 해당하는 가드레일을 건너뛰며, 최신 헤더가 비어 있어도 더 이상 레거시 헤더를 가리지 않습니다
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412),
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)에서 수정).

값은 문자열 배열 또는 쉼표로 구분된 문자열일 수 있습니다. 이름은 앞뒤 공백을 제거하고
소문자 kebab-case로 정규화하며(`pii_masker` → `pii-masker`), 빈
항목은 삭제합니다. 결과는 `context.disabledGuardrails`를 통해
레지스트리에 전달되며, 레지스트리는 일치하는 가드레일을 건너뜁니다(`results`에서 `skipped: true`).

비활성화 목록은 **레지스트리**에만 영향을 줍니다. 프롬프트 인젝션의 `block` 모드는
필수 보안 경계입니다. 인젝션 방어 미들웨어
(`src/middleware/promptInjectionGuard.ts`)는 호출자가 제어하는 비활성화 목록 없이
`evaluatePromptInjection()`을 호출합니다(이전에 수행하던 불필요한
`resolveDisabledGuardrails({ body })` 호출은
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)에서 제거됨). 따라서
`prompt-injection`을 비활성화하는 요청도 `block` 모드에서는 거부됩니다. 이는
의도된 동작입니다. 비활성화 채널은 호출자가 제어하므로(요청 본문,
메타데이터, 헤더), 호출자가 운영자가 설정한 보안 제어를
끌 수 있어서는 안 됩니다
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)의 헤더
합집합 처리는 어떤 레지스트리 가드레일을 건너뛸지만 변경하며, 클라이언트가
미들웨어를 우회할 수 있게 하지는 않습니다. 키별 및 그룹별 필수 가드레일 정책은
v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417)에서 추적하고 있습니다.
[적용 범위 및 제한 사항](#coverage-and-limits)을 참조하세요.

## 실행 순서

`src/sse/handlers/chat.ts` 및
`open-sse/handlers/chatCore.ts`를 통과하는 각 요청([적용 범위 및 제한 사항](#coverage-and-limits)에 나열된
채팅 계열 라우트)에 대해:

1. `resolveDisabledGuardrails(...)`가 API 키, 본문,
   헤더를 바탕으로 건너뛸 목록을 구성합니다.
2. `guardrailRegistry.runPreCallHooks(body, ctx)`가 우선순위가 낮은 값부터
   가드레일을 실행합니다:
   - 비활성화된 가드레일은 `skipped`로 기록됩니다.
   - 각 가드레일의 `preCall`은 `modifiedPayload`를 통해 페이로드를 수정할 수 있습니다.
   - 첫 번째 `block: true`가 체인의 나머지 실행을 중단하고, 핸들러는
     가드레일 거부 응답을 반환합니다.
3. (수정되었을 수 있는) 페이로드가 콤보 라우팅 및 업스트림
   전송 단계로 전달됩니다.
4. **비스트리밍에만 해당:** 응답이 구성된 후,
   `guardrailRegistry.runPostCallHooks(...)`가 응답에 대해 동일한 체인을
   실행합니다. 여기서 `block: true`이면 업스트림 응답을 버리고 HTTP 400을 반환합니다. 스트리밍 응답은 이 단계를 완전히 건너뜁니다.

예외를 던지는 가드레일은 `error: <message>`로 기록되고
`logger.warn`을 통해 로그가 남지만, 체인은 계속 실행됩니다. 이는 오류 발생 시 허용하도록 설계된 동작입니다.

## 적용 범위 및 제한 사항

가드레일 레지스트리는 채팅 파이프라인에만 연결되어 있습니다. 이러한 제한 사항은
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` 및
`tests/unit/guardrail-pipeline-characterization.test.ts`로 고정되어 있으므로, 동작이 변경되면
해당 테스트도 의도적으로 업데이트하세요.

### 훅이 실행되는 위치

| 훅 / 제어                    | 실행 대상                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`            | `handleChat` (`src/sse/handlers/chat.ts`)이 처리하는 요청: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses`(및 `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, Telegram 채팅 프록시. 대시보드 테스트 엔드포인트 `/api/guardrails/test`도 포함됩니다. 호출 전 차단 시 HTTP 400을 반환합니다. |
| `runPostCallHooks`           | **비스트리밍** 채팅 응답만 해당합니다(`open-sse/handlers/chatCore/nonStreamingResponse.ts`). 스트리밍 응답은 이 훅에 도달하지 않습니다.                                                                                                                                                                                                                                                                                     |
| 스트리밍 PII                 | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`). `PII_RESPONSE_SANITIZATION`이 켜져 있으면 `streamingPipeline.ts`에서 파이프로 연결됩니다. 가드레일이 아니므로 비활성화 채널의 영향을 받지 않습니다.                                                                                                                                                                                                           |
| 인젝션 방어 미들웨어(레거시) | 채팅 계열을 포함하여 프롬프트를 포함하는 모든 `/v1` 라우트([라우트 적용 범위](#injection-guard-route-coverage--red-team-phase-8--block-d) 참조). 프롬프트 인젝션만 검사합니다.                                                                                                                                                                                                                                              |

### 적용되지 않는 대상

- **미디어, 임베딩 및 데이터 라우트**(`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`)는 레지스트리에 도달하지 않습니다.
  이 라우트에서는 PII 마스킹, 자격 증명 마스킹 또는 모달리티 브리지가 실행되지
  않습니다. 유일한 검사는 레거시 인젝션 방어 미들웨어입니다.
- **스트리밍 응답**에는 호출 후 가드레일이 적용되지 않습니다. 호출 후 `pii-masker` 또는
  `credential-masker`가 실행되지 않으며, 호출 후 차단도 없습니다. 스트리밍 PII
  변환만 적용됩니다(`PII_RESPONSE_SANITIZATION`이 켜져 있는 경우). 스트리밍 응답에
  그대로 반환된 자격 증명은 가려지지 않습니다.
- **비활성화 채널과 미들웨어의 관계(설계상 의도된 동작):** 미들웨어는
  호출자가 제어하는 비활성화 목록을 전달하지 않고, 자체적으로 `evaluatePromptInjection()`을
  호출하여 프롬프트 인젝션을 평가합니다. `block` 모드는 호출자가 제어하는 비활성화 설정으로
  우회할 수 없는 필수 경계이며, 채팅 계열 라우트에도 적용됩니다
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). `prompt-injection`을
  비활성화하면 레지스트리 가드레일만 건너뜁니다.

### 호출 후 처리 전에 응답을 처리하는 단계

비스트리밍 경로의 실행 순서는 다음과 같습니다: 메모리 추출 → 내장 도구
실행 → 호출 후 가드레일 → 호출 후 차단 시 종료 → 시맨틱 캐시 저장.

- **메모리 추출**과 **도구 실행**은 호출 후 가드레일이 응답을 수정하거나 차단하기 전에
  응답을 확인합니다.
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401)부터 메모리
  추출은 `PII_RESPONSE_SANITIZATION`이 켜져 있으면 추출된 텍스트를
  `sanitizePII`로 처리합니다(스트리밍과 비스트리밍 모두). 하지만
  이후 호출 후 가드레일이 차단하는 응답도 이미 메모리와
  도구에 전달된 상태입니다.
- **시맨틱 캐시**는 호출 후 가드레일 처리 이후에 응답을 저장하므로
  수정된 응답을 저장하며, 차단된 응답은 캐시하지 않습니다. 캐시 항목은
  API 키별로 구분됩니다.

## 구성

내장 가드레일에서 읽는 환경 변수:

| 변수                                  | 사용 주체                 | 효과                                                                                                    |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | `false`로 설정하면 탐지를 완전히 비활성화합니다.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | 인젝션 정책: `warn`, `block` 또는 `log`. 레거시 값인 `redact`는 인젝션 텍스트를 다시 작성하지 않습니다. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | 인젝션 가드의 모드이며, 환경 변수보다 **우선 적용되는** DB 기능 플래그이기도 합니다(DB > ENV).          |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block`에서 거부하는 최소 심각도: `high`(기본값), `medium` 또는 `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD`의 레거시 별칭입니다.                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true`이면 요청의 PII를 마스킹합니다(인젝션 모드와 무관).                                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (다운스트림) | 응답 측 마스커의 동작을 제어합니다.                                                                     |

Modality Bridge 가드레일은 환경 변수가 아니라 DB 기반 설정
저장소(`getSettings()`)에서 런타임 구성을 읽습니다. Vision의 기본 키는
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` 및
`modalityBridgeCacheMaxEntries`입니다. 레거시
`visionBridge*` 키는 문서에 명시된 한 주기 동안의 읽기
폴백으로만 허용되며, 대시보드에서 쓰기 작업을 할 때는 기본 키를 사용합니다. 기본값과 폴백
리졸버는 `src/shared/constants/modalityBridgeDefaults.ts`에 있으며, 레거시
상수는 `src/shared/constants/visionBridgeDefaults.ts`에 유지됩니다.

Audio는 `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, `modalityBridgeAudioMaxClips`와 공유
`modalityBridgeCache*` 설정을 사용합니다. 이 키들은
Modality Bridge 스키마와 함께 도입되었으므로 Audio에는 레거시 키 폴백이 없습니다.

Video는 `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` 및
`modalityBridgeVideoTimeout`과 공유 `modalityBridgeCache*` 설정을 사용합니다.
FFmpeg/ffprobe는 선택적 운영
의존성이고 프레임 캡션 생성은 지연 시간과 모델 비용을 늘리므로 기본적으로 비활성화되어 있습니다.

## 사용자 정의 가드레일

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

단계:

1. `BaseGuardrail`을 상속하는 `src/lib/guardrails/myGuardrail.ts`를 만듭니다.
2. `preCall` 및/또는 `postCall`을 구현합니다.
3. 가져오기 시점에 등록하거나(`registerDefaultGuardrails`에서 추가),
   런타임에 `guardrailRegistry.register(...)`를 호출합니다. 레지스트리는
   정규화된 이름이 같은 기존 가드레일을 교체합니다.
4. `tests/unit/` 아래에 테스트를 추가합니다(기존 예제:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## 테스트

테스트 사이에 `resetGuardrailsForTests()`를 사용하여 알려진 상태에서 시작합니다.
`{ registerDefaults: false }`를 전달하면 빈 레지스트리에서 시작하여
테스트 대상 가드레일만 등록할 수 있습니다. Vision Bridge는 의존성
주입(`deps.getSettings`, `deps.callVisionModel`)을 지원합니다. Audio Bridge도
설정, 기능, STT 모델 선택, 자격 증명 확인, 전사에 대해 동등한
의존성 주입 지점을 제공합니다. 따라서 테스트에서 DB나
네트워크에 접근하지 않고도 두 흐름을 모두 검증할 수 있습니다.

## 참고 자료

- `src/lib/guardrails/` — 구현
- `src/shared/utils/inputSanitizer.ts` — 프롬프트 인젝션 탐지 및 PII 마스킹에
  사용되는 공통 탐지기
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 기본값 및
  브리지 사용이 강제되는 모델 목록
- `src/shared/constants/modalityBridgeDefaults.ts` — 공통 Vision/Audio 런타임 기본값
- `docs/architecture/RESILIENCE_GUIDE.md` — 독립적인 계층(서킷 브레이커, 쿨다운)
- `docs/reference/ENVIRONMENT.md` — 전체 환경 변수 참조

## 인젝션 가드 라우트 적용 범위 및 레드팀 테스트(8단계 · 블록 D)

인젝션 가드(`createInjectionGuard` / `withInjectionGuard`)는 사용자 프롬프트를 받는
모든 라우트에 적용됩니다. `INJECTION_GUARD_MODE`를 따릅니다(기본값 `warn` = 로그만 기록;
`block` = HTTP 400 `SECURITY_001` 반환).

| 유형         | 라우트                                                                                                                                               | 기본 모드 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 텍스트(기존) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn      |
| 생성형       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn      |
| 데이터       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn      |

텍스트 추출(`extractMessageContents`)은 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`을 처리합니다.

**레드팀 테스트(매일 밤, `nightly-llm-security.yml`):** promptfoo는 `INJECTION_GUARD_MODE=block`에서
각 라우트가 OWASP-LLM 코퍼스를 차단하는지 검증합니다. garak은 프로브를 실행합니다(시크릿이 없으면 건너뜀).
`moderations`는 일관성을 위해 포함됩니다. 차단 모드는 반드시 적용되는 경계입니다. `evaluatePromptInjection()`은
미들웨어가 전달하는 요청별 비활성화 목록을 무시하므로, `disabledGuardrails`는
라우트를 차단 모드 적용에서 면제하지 **않습니다**([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

야간 워크플로(`.github/workflows/nightly-llm-security.yml`, cron + 수동
실행)에는 두 개의 작업이 있습니다:

- **`promptfoo-guard` (실패 시 차단)** — `INJECTION_GUARD_MODE=block`으로
  `promptfoo eval -c promptfooconfig.yaml`을 실행합니다. 각 공격 사례(예: "이전의 모든
  지시를 무시하세요…", DAN 스타일 탈옥)는 응답에
  `error.code === "SECURITY_001"`이 포함되는지, 즉 가드가 실제로 요청을 거부했는지 검증합니다.
- **`garak` (참고용)** — 로컬 OmniRoute 인스턴스(`http://localhost:20128/v1`)를 대상으로
  garak `--probes promptinject,dan,leakreplay`를 실행합니다. 공급자
  시크릿(`PROMPTFOO_PROVIDER_KEY`)이 있어야 실행되며, 없으면 오류 없이 건너뜁니다.
  명령 끝에 `|| true`가 붙어 있으므로 CI를 실패시키지 않고 결과를 보고합니다.

가드 헬퍼(`createInjectionGuard` / `withInjectionGuard`)의 적용 범위는
프롬프트를 포함하는 모든 `/v1` 라우트에 걸쳐 있습니다. 프롬프트 텍스트는
`src/shared/utils/inputSanitizer.ts`의 `extractMessageContents()`가
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`에서 추출합니다.

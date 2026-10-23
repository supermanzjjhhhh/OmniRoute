# Guardrails (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pinagmumulan ng katotohanan:** `src/lib/guardrails/`
> **Huling na-update:** 2026-10-17 — v3.8.52 (idinagdag ang [Coverage and limits](#coverage-and-limits):
> kung aling mga ruta at landas ng tugon ang inaabot ng mga hook, ang pinagsamang mga disable header (#16412), injection
> block mode bilang isang sapilitang hangganan (#16413), at kung ano ang nakakita ng tugon bago ang post-call)

Ang mga guardrail ay nagpapatupad ng kaligtasan, patakaran, at mga pagbabagong-anyo ng nilalaman sa hangganan sa pagitan ng OmniRoute at mga upstream provider. Ang bawat guardrail ay maaaring magsuri (at opsyonal na tumanggi, magbago, o maglagay ng anotasyon) sa mga payload ng kahilingan (`preCall`) at mga tugon ng upstream (`postCall`).

Ang sistema ay **fail-open**: kung ang isang guardrail ay maghagis habang isinasagawa, itatala ng registry ang error at magpapatuloy sa susunod na guardrail sa halip na pabagsakin ang kahilingan. Ang pagharang ay isang tahasang desisyon (`block: true`), hindi kailanman aksidente. Ang tanging eksepsiyon ay ang isang naka-abort na kahilingan: kapag ang `signal` ng tumatawag ay naka-abort, tinatanggihan ng naghahagis na guardrail ang pagtakbo ng hook sa halip na laktawan ito.

Ang mga hook ay **hindi** tumatakbo sa bawat ruta o bawat tugon. Basahin ang
[Coverage and limits](#coverage-and-limits) bago umasa sa isang guardrail bilang
kontrol sa seguridad.

## Mga Built-in na Guardrail

Awtomatikong nade-load ng registry ang anim na guardrail sa ayos ng priyoridad sa pag-import
(tingnan ang `registry.ts` → `registerDefaultGuardrails()`):

| Priority | Name                | Stage(s)       | File                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ang mas mababang mga numero ng priyoridad ay tumatakbo nang **una**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Ang GLM 5.3 base model at `glm-5.3-{low,high,max}` ay may malinaw na
`supportsVision:false` registry/spec metadata. Ang mga variant ng GLM 5.3 Flash ay
nananatiling mga modelong katutubong may paningin. Ang ruta ng `/v1/messages` ng Claude Code ay pumapasok sa
nakabahaging `handleChat` pre-call guardrail chain **bago** ang pagsasalin ng Claude-to-OpenAI;
ang mga naka-nest na larawan ng resulta ng `Read` tool ay dapat ilarawan o hawakan
bago itaas ng pagsasalin na iyon sa nilalamang `image_url` ng OpenAI (#17069).

Hinaharang nito ang mga kahilingang may dalang larawan na nakatuon sa mga **modelong walang paningin** at alinman sa
nire-reroute ang buong kahilingan patungo sa isang modelong may kakayahang mag-vision o pinapalitan ang mga bahagi ng larawan
ng mga paglalarawan ng teksto na ginawa ng isang maaaring i-configure na modelo ng vision bago
ang upstream call. Hinahayaan nito ang mga provider na panay teksto na transparent na humawak
ng mga multimodal payload.

Daloy:

1. Laktawan kung sinusuportahan na ng target na modelo ang vision (maliban kung lumalabas ito sa
   listahan ng pinipilit na bridge na `isVisionBridgeForcedModel`).
2. Kunin ang mga bahagi ng larawan sa pamamagitan ng `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), na nagdedebelop sa **pinag-isang media
   detector** na `detectMediaParts()` sa `open-sse/utils/mediaParts.ts` — ang
   nag-iisang pinagmumulan ng katotohanan na ibinabahagi sa filter ng pagiging tugma ng combo.
   Ang pagkuha ay naka-allowlist sa mga hugis na maaaring ibalik ng `replaceImageParts`
   (ang kontrata ng extract↔replace): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, at Responses
   API `input_image`. Ang mga tumutugmang larawan na naka-nest sa loob ng Claude Code
   `tool_result.content` at mga output ng tool ng Responses ay kinukuha rin at
   pinapalitan sa kanilang mga orihinal na landas; ang mga hugis na tagapagpahiwatig lamang ay materyal ng combo-filter
   at hindi kinukuha.
   Laktawan kung walang nahanap.
3. Lutasin ang config ng runtime sa pamamagitan ng `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): ang mga bagong setting key na `modalityBridge*`
   ang mananalo; ang mga lumang key na `visionBridge*` ay nananatiling **one-cycle
   fallback** (rollback window). Laktawan bago ang anumang pagdaan sa media kapag
   naka-disable ang bridge.
4. Nagpapasya ang tagapili ng mode (`modalityBridgeVisionMode`, tingnan ang talahanayan sa ibaba)
   sa pagitan ng reroute kumpara sa paglalarawan. Nagbabalik ang Reroute ng `modifiedPayload` na may tanging `model`
   na ipinagpalit, kasama ang meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Landas ng paglalarawan: i-cap ang mga larawan sa `maxImages`, buuin ang prompt na may kamalayan sa gawain,
   konsultahin ang describe cache, tawagin ang modelo ng vision **nang magkasabay**
   (`Promise.allSettled`), at i-inject ang mga bahagi ng text na `[Image N]: <description>` sa
   kanilang lugar. Ang isang nabigong paglalarawan ay nagbubunga ng `null`: ang hilaw na larawan ay pinapanatili para sa
   mga target na hindi kilala/may kakayahang mag-vision (#4012), ngunit ang isang **kumpirmadong text-only direktang
   target** o zero-vision combo ay nakakakuha ng isang tahasang
   `(unavailable — no vision-capable provider connected)` text stub para
   sa bawat hindi inilarawang larawan, kasama ang mga bahagyang pagkabigo at mga larawan na lumalagpas sa
   describe-call cap (#17069). Ang umiiral na all-failed combo describe fallback
   ay nananatili sa lugar (#8430).
6. Ibalik ang `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tagapili ng mode (`modalityBridgeVisionMode`)

| Mode       | Default | Behavior                                                                                                                                                                                                                                                                                                                            |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Lumang heuristic, hindi ginalaw (#6640/#7204): ang mga modelong non-combo/`auto/` ay ire-reroute sa pinakamahusay na vision model maliban kung ang orihinal na modelo ay mayroon nang magagamit na mga kredensyal (at pagkatapos ay maglalarawan); ang mga combo target ay palaging naglalarawan.                                   |
| `describe` |         | Palaging maglarawan — ganap na nilalaktawan ang reroute block; ang napiling modelo ng user ang palaging sumasagot.                                                                                                                                                                                                                  |
| `reroute`  |         | Puwersahang reroute: nalalampasan ang `keep-credentialed-model` guard. Nalalapat pa rin ang credential guard ng reroute-**target** — kapag walang magagamit na vision target, haharangin ng bridge ang kahilingan gamit ang malinaw na error sa halip na maglarawan o magpadala ng mga hilaw na imahe sa isang text-only na target. |

Ang mga pinilit na mode (forced modes) ay nag-short-circuit **bago** tumakbo ang auto heuristic; ang pag-uugali ng `auto` ay magkatulad na-magkatulad sa pre-PR-1 guardrail.

#### Saklaw ng API-key (`visionBridgeKeyScope.ts`)

Kapag nililimitahan ng API key ng tumatawag ang `allowedConnections`, mga quota pool (`allowedQuotas`) o mga modelo (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), pinipili lamang ng bridge ang mga modelong reroute at describe na maaaring gamitin ng key, sa mga koneksyon na maaaring gamitin ng key. Ang pagtawag sa describe ay palaging dumadaan sa OmniRoute self-loop na may `x-omniroute-self-loop-key-id` header, kaya ipinapatupad muli ng tumatanggap na kahilingan sa chat ang patakaran sa koneksyon at modelo ng key na iyon. Iginagalang ng `enforceApiKeyPolicy()` ang header na iyon kasama lamang ang self-loop bearer, kaya maaari lamang nitong paliitin ang access, at tinatanggihan ang isang id na hindi nareresolba.

Kung walang pinapayagang vision model para sa key, tinatanggihan ng isang **nakumpirmang text-only na target** ang kahilingan sa imahe nang lokal gamit ang malinaw na HTTP 400 sa halip na i-forward ang mga byte ng imahe sa isang hindi kayang upstream (#17069). Para sa mga target na may hindi kilala o katutubong kakayahan sa vision, pinapanatili ng landas ng paglalarawan ang nakaraang fail-open na pag-uugali nito (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Ang mga kahilingang walang key, at mga key na walang ganitong mga restriksiyon, ay kumikilos nang eksakto tulad ng dati.

#### Task-aware na describe prompt (`modalityBridgeVisionTaskAware`)

Default **true**. Ang `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ay nagdaragdag ng teksto ng **huling mensahe ng user** (na pinapaikli sa 500 na character) sa base describe prompt, na ginagabayan ang paglalarawan patungo sa kung ano talaga ang tinanong ng user (pattern na codex-vision-proxy) at hinihiling sa vision model na i-transcribe ang nakikitang teksto. Kapag naka-off ang flag — o walang teksto ang user — ang base prompt ay ginagamit nang walang pagbabago.

Ang sariling kahilingang tugma sa OpenAI ng describe self-loop (`callVisionModelSingle()` sa `visionBridgeHelpers.ts`) ay palaging humihiling ng `image_url.detail: "high"` — nang walang pasubali, para sa bawat tumatawag/provider, hindi naka-gate sa anumang signal ng kliyente. Pinapababa ng low-detail sampling ang katumpakan ng OCR para mismo sa gawaing text-transcription na hinihingi ng prompt na ito, kaya ang mismong pagtawag sa describe ay palaging humihiling ng mataas na detalye anuman ang antas ng detalye na ginamit ng orihinal na papasok na kahilingan. Nakakaapekto lamang ito sa panloob na katawan ng kahilingan sa paglalarawan; hindi nito binabago kung paano ipinapasa ng OmniRoute ang sariling `image_url.detail` ng tumatawag sa pangunahing kahilingan — ang default na iyon ay hiwalay na inilalapat, at para lamang sa mga natukoy na kliyente ng OpenCode, sa `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ang sangay ng Anthropic wire-format ng describe self-loop ay walang `detail` field at hindi naaapektuhan ng alinmang default.

#### Describe output cap (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range           |
| ------------------------------ | ------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` o 100–50000 |

Ang `0` (default) ay nangangahulugang **walang cap** — ang paglalarawan na ibinalik ng `callVisionModel()` ay ipinapasa nang walang pagbabago, na pinapanatili ang umiiral na pag-uugali. Anumang halaga sa hanay na 100–50000 ay puputulin ang paglalarawan na may suffix na `…` bago ito i-splice pabalik bilang `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` sa `src/lib/guardrails/visionBridge.ts`). Itaas ito para sa mga gawaing OCR na may mabibigat na detalye kung saan kailangan ng downstream model ang buong transkripsyon; ibaba ito upang limitahan ang paggamit ng token sa mga chatty vision model. Ang field sa dashboard ay matatagpuan sa Advanced panel ng Vision tab (`modality-bridge-max-chars` sa `ModalityBridgeVisionTab.tsx`) at nililimitahan ang anumang halaga sa pagitan ng 1 at 99 pataas sa 100 na sahig habang pinapanatiling buo ang isang tahasang `0` — ang `0` ay isang wastong halaga ng Zod sa sarili nitong karapatan (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), hindi lamang ang default na "unset".

#### Describe cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache para sa mga output ng paglalarawan, ibinabahagi sa buong proseso. Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na may length-prefix framing (walang field-boundary collisions). Ang bahagi ng modelo ay ang **na-configure** na bridge model, hindi ang modelong talagang sumagot — ang `callVisionModel` ay maaaring mag-fallback sa loob, at ang pag-key sa bawat pagsubok ay maghahati-hati sa cache. Ang mga nabigong paglalarawan ay hindi kailanman ikinaba-cache. Mga setting:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Remote image normalization (self-loop describe/base64 fetch)

Kapag ang bridge mismo ang kumuha ng **remote** na image — ang Anthropic describe self-call at ang claude-wire-format base64 conversion (`ensureBase64ImagesForClaudeWire`), parehong sa pamamagitan ng `fetchRemoteImageAsDataUri()` sa `visionBridgeHelpers.ts` — ang nagresultang data URI ay pinapasa sa `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) bago i-embed sa request ng vision-model. Ang mga sobrang laking image ay dina-downscale sa **2048px long edge** (na tumutugma sa resize cap na inilalapat na ng OpenAI/Anthropic sa server-side), na nagbabawas ng upload bytes/latency nang hindi binabago ang nakikita ng vision model. Ang pag-resize ay gumagamit ng `sharp`, na kino-load sa pamamagitan ng dynamic import: sa isang platform kung saan nabigo itong i-load ang katutubong binary nito, ang `normalizeDataUri()` ay **hindi kailanman nag-i-throw** — nagba-fallback ito sa passthrough ng mga orihinal na byte, kaya patuloy na gumagana ang landas ng describe/base64-conversion. Ang mga non-image byte (isang fetch na hindi nagbalik ng decodable na image) ay pinapasa rin nang hindi ginagalaw. Ang normalisasyong ito ay nakatuon lamang sa mga image na kinukuha ng bridge para sa sarili nitong self-call — hindi ito kailanman inilalapat sa raw passthrough payload ng caller, na naaayon sa opt-in-only mutation principle (Hard Rule #20).

#### Settings schema + migration

Ang mga bagong `modalityBridge*` key ay Zod-validated sa `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, ang `modalityBridgeCache*` trio, at ang `modalityBridgeAudio*` group na ginagamit ng Audio Bridge. Kinokopya ng migration na `141_modality_bridge_settings.sql` ang mga umiiral na legacy `visionBridge*` value patungo sa mga tumutugmang bagong key (idempotent, hindi kailanman ino-overwrite ang `modalityBridge*` value na itinakda ng operator); nananatiling tinatanggap ang mga legacy key bilang read fallback para sa isang release cycle.

#### Transparency header + stats

Ang mga tugon na binago ng describe ay nagdadala ng `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (ginawa ng `buildModalityBridgeHeader()` sa `modalityBridge/bridgeStats.ts`, tinatakan ng `withModalityBridgeHeader()` sa `src/sse/handlers/chatHelpers.ts`). Ang mga nai-reroute na request ay **walang** header — ang payload ay hindi ginalaw at ang pagpapalit ng modelo ay makikita na sa `model` field ng response body.

Ang `GET /api/modality-bridge/stats` (management auth, kaparehong tier ng `GET /api/settings`) ay nagbabalik ng in-memory per-modality counters `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` para sa `vision`, `audio`, at `video`. Ang `averageLatencyMs` ay gumagamit ng `latencySamples`, hindi ang lahat ng attempt, bilang denominator nito; ang isang operasyon na walang timing ay hindi gumagawa ng zero-millisecond sample. Ang `bridged` ay nananatiling backward-compatible alias para sa mga matagumpay na conversion; ang mga nabigong pagtatangka ay hindi nagdaragdag dito. Nire-reset ang mga counter sa pag-restart ng proseso ayon sa disenyo (telemetry, hindi accounting).

#### Dashboard configuration

Ang dedikadong pahina ng dashboard ay `/dashboard/settings/modality-bridge`. Pinapanatili ng mga URL-addressable nitong tab na `Vision`, `Audio`, at `Video` ang mga query parameter habang pinapalitan ang `tab` value. Inilalantad ng tab na Vision ang enablement, mode, pagpili ng modelo (kasama ang awtomatikong default), task-aware prompting, advanced timeout/image/description-length/cache limits, mga runtime counter, at isang protektadong sample request. Live na rin ang Audio tab: inilalantad nito ang enablement, isang STT-only model picker na may Auto, mga limit sa timeout/max-clip, mga audio counter, at isang `input_audio` sample test. Functional ang Video tab: iniuulat nito ang runtime state ng FFmpeg/ffprobe — isa sa apat na malinaw na UI state (`unknown` habang isinasagawa ang probe o hindi nakumpleto, `restricted` sa isang non-loopback dashboard host kung saan nilaktawan ang probe sa client-side, `unavailable` kapag na-probe na at nakumpirmang nawawala, o `available` kasama ang mga bersyon ng FFmpeg/ffprobe) — pinapanatili ang enable/model/frame/video/timeout limits, sinasala ang model picker sa mga model na may kakayahang mag-vision, at inilalantad ang mga video counter.

Ang dating Vision Bridge card sa ilalim ng mga setting ng AI ay isang compatibility link patungo sa bagong pahina; wala na itong sariling pangalawang kopya ng form. Ini-link din ng Media Providers ang mga workflow ng Image-to-Text at Speech-to-Text sa kaukulang mga Modality Bridge tab nang hindi inaalis ang umiiral na Speech-to-Text playground.

**Self-loop admission bypass:** kapag ang describe call ay dumaan sa sariling `/v1` self-loop ng OmniRoute (non-standard provider model), ang sub-request ay nagpapadala ng `x-omniroute-admission-bypass: internal` at naka-authenticate gamit ang na-resolve na self-loop credential — ang lokal na `sk_omniroute` sentinel sa local mode, o ang naka-configure ng operator na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) upang ang mga deployment na may `REQUIRE_API_KEY=true` ay maaari pa ring magpatakbo ng describe call. Iginagalang lamang ang bypass para sa mga eksaktong credential na iyon, kaya hindi magagamit ng mga panlabas na kliyente ang header upang laktawan ang admission.

Ang mga legacy default ay nakalagay sa `src/shared/constants/visionBridgeDefaults.ts`; ang mga bagong mode/task-aware/cache default at ang settings resolver ay nasa `src/shared/constants/modalityBridgeDefaults.ts`. Ang guardrail ay naglalantad ng `deps` constructor option upang ang mga pagsubok ay makapag-inject ng mga pekeng implementasyon ng `getSettings` at `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Humaharang sa mga chat request na naglalaman ng audio bago sila umabot sa target na hindi kilalang tumatanggap ng audio input. Hindi nito kailanman nire-reroute ang chat request: ang mga bahagi ng audio ay dina-transcribe sa pamamagitan ng umiiral na OpenAI-compatible multipart endpoint at ang napiling chat model ay nagpapatuloy gamit ang mga text transcript.

Flow:

1. Lutasin ang `supportsAudio` sa pamamagitan ng `getResolvedModelCapabilities()`. Ang tahasang metadata ng provider-registry ang mananalo, pagkatapos ay ang static model metadata, at sunod ang naka-sync na `modalities_input`. Ang isang idineklarang listahan ng input na walang `audio` ay `false`; ang kawalan ng ebidensya ng kakayahan ay nananatiling `null`. Ang parehong `false` at `null` ay nag-a-activate ng konserbatibong bridge, habang ang `true` ay lumalagpas dito.
2. Lutasin ang mga setting ng `modalityBridgeAudio*` at kunin ang mga spliceable top-level audio part mula sa bawat mensahe sa pamamagitan ng ibinahaging `detectMediaParts()` detector. Ang mga sinusuportahang wire shape ay ang OpenAI `input_audio`, `audio_url`, at `source.media_type: "audio/*"`. Ang naka-nest na audio ay namamalayan para sa pag-ruruta ngunit hindi inaalis ng splice path. Ang gawain ay nililimitahan ng `modalityBridgeAudioMaxClips`; ang mga sumusunod na part ay mananatiling hindi ginagalaw.
3. Sundin ang naka-configure na `provider/model`, o hayaang lakbayin ng `selectAudioBridgeModel()` ang `AUDIO_TRANSCRIPTION_PROVIDERS` sa matatag na pagkakasunud-sunod ng katalogo at piliin ang unang modelo na may magagamit na aktibong kredensyal ng provider.
4. Kino-convert ng `callAudioTranscription()` ang base64/data-URI audio sa isang multipart `file`, o nag-d-download ng malayuang `audio_url` sa pamamagitan ng public-only outbound guard na may DNS pinning at 25 MB bound. Pagkatapos ay nagpapadala ito ng POST ng file at napiling modelo sa lokal na `/v1/audio/transcriptions` self-loop, na naka-authenticate gamit ang `resolveSelfLoopBearer()`. Ang umiiral na ruta ng transkripsyon ay nagsasagawa ng normal na paghahanap ng kredensyal, paghawak sa cooldown/rate-limit, at dispatch ng provider.
5. Pinapalitan ng mga matagumpay na tawag ang kanilang mga part ng `[Audio N]: <transcript>`. Tumatakbo ang mga tawag gamit ang `Promise.allSettled`: ang indibidwal na pagkabigo ay nagpapanatili sa orihinal na audio part (kontrata #4012). Kung mabibigo ang bawat tawag at napatunayang ang target ay `supportsAudio === false`, ang mga part ay nagiging `[Audio N]: (unavailable — no STT provider connected)` (kontrata #8430). Para sa hindi kilalang target (`null`), ang resulta ng kabuuang pagkabigo ay nananatiling hindi ginagalaw. Ang isang napatunayang text-only na target na walang magagamit na STT credential ay nakatatanggap ng parehong tahasang stub nang hindi naglalabas ng tawag sa network.

Ang mga matagumpay na transkripsyon ay gumagamit ng process-wide Modality Bridge LRU/TTL cache. Ang susi ay pinagsasama ang sanggunian ng audio, ang matatag na label ng operasyon na `audio-transcription`, at ang napiling STT model; ang mga pagkabigo ay hindi kailanman kino-cache. Ang mga pagtatangka sa audio ay nag-a-update sa mga ibinahaging counter na `bridged`, `cacheHits`, `failures`, at `lastUsedAt`. Ang mga nabagong tugon ay nagdadala ng `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ang mga hindi ginalaw na kahilingan ay hindi tumatanggap ng segment ng Audio Bridge.

Ang mga setting sa runtime ay sinusuportahan ng DB at bina-validate ng Zod:

| Key                           | Default | Range          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto or STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Ang ibinahaging cache ay nananatiling kinokontrol ng `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, at `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Hinaharang nito ang mga top-level video part sa mga `messages` ng Chat Completions at `input` ng Responses API bago tawagin ang isang target na walang kilalang katutubong suporta sa video. Ang mga sinusuportahang hugis ay `input_video`, `video_url`, `video_source`, HTTPS URLs, at `data:video/*;base64,...` data URIs. Ang mga plain filename sa text ay hindi tinatrato bilang video.

Ang `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ang namamahala sa pagdaan sa kahilingan, pagsusuri ng kakayahan/patakaran, aggregation bawat kahilingan, at payload ng tugon. Ang gawain bawat video — pagkuha, ang whole-result cache, paglalarawan ng sequence ng frame (na pinagsasama ang anumang audio transcript na idineklara ng caller), at mga sukatan/pag-abort/paglilinis bawat pagtatangka — ay nakatago sa likod ng `processVideoPart` sa `videoBridgePipeline.ts`, na tinatawag nang isang beses bawat video part sa loob ng loop ng `preCall`. Tinutukoy din ng module na iyon ang mga tahasang hangganan ng port na `VideoMediaBrokerPort` (pagkuha ng mga byte at pag-extract ng mga sinample na frame), `VideoAudioTranscriptionPort` (pag-integrate ng audio transcript na idineklara ng caller kasama ang mga sinample na caption), at `VideoDrilldownPort` (ang hangganan ng pagpapatuloy ng frame drill-down; hindi pa naka-wire sa `processVideoPart` — ang hiwalay na rutang `/api/modality-bridge/video/drilldown` lamang ang nagsusulat ng mga entry ng drill-down sa kasalukuyan).

Ang pampublikong landas ng kahilingan na `/v1` ay hindi kailanman nag-i-import o tumatawag ng subprocess. Ang mga malayuang video ay dina-download sa ilalim ng limitasyong 50 MiB; ang mga inline base64 na video ay may konserbatibong limitasyong 36 MiB na na-decode bawat video upang ang sobre ng modelo/mga mensahe/framing ay manatili sa loob ng limitasyon sa pagtanggap ng pampublikong JSON request na 50 MiB. Ang mga pagtatantya ng haba ng inline at decoded-size ay sinusuri bago ang alokasyon. Kinakailangan ang HTTPS sa paunang malayuang URL at sa bawat redirect, gamit ang umiiral na public-only outbound guard na may DNS pinning. Ang mga byte ay tatawid sa eksaktong panloob na hangganan ng broker na `POST /api/modality-bridge/video/extract`. Ang rutang iyon ay parehong `LOCAL_ONLY` at `SPAWN_CAPABLE`, tumatanggap lamang ng isang per-process authenticated, trusted-loopback na kahilingan, at hindi kailanman tumatanggap ng URL, filesystem path, executable, o listahan ng argumento. Ang API body-size pipeline at ang incremental body reader ng handler ay hiwalay na nagpapatupad ng limitasyon sa input ng broker na 50 MiB. Ang bounded queue nito ay nagpapatakbo ng isang ekstraksyon sa bawat pagkakataon, nagbibigay-daan sa apat na nakabinbing trabaho, at nililimitahan ang nakabinbing input sa 100 MiB.

Sa loob ng broker, binabasa ng `ffprobe` ang isang pribadong lokal na file; ang nakapirming allowlist ng format ay hindi kasama ang mga format ng playlist at manifest. Para sa mga pinapayagang container ng pamilya MOV, ang mga panlabas na sanggunian ng data ng MOV ay nananatiling hindi pinagana bilang default, at ang nakapirming command ay hindi sumasali sa mga ito. Ang parehong `ffprobe` at `ffmpeg` ay gumagamit ng whitelist ng protocol na `file`-only, isang thread, mga nakapirming argument array, walang shell, at mga executable na niresolba mula sa `PATH`. Ang mga stream ng cover ng attached-picture ay hindi mga puwedeng laruing kandidato. Ang lahat ng puwedeng laruing stream ay dapat sumunod sa mga limitasyon, at ang isang tahasang default na stream ay mas pinipili bago ang deterministikong lowest-index fallback. Ang mga video ay limitado sa 600 segundo, 8,192 pixels bawat dimensyon, at 33,554,432 pixels ng pinagmulan. Ang FFmpeg ay kumukuha ng mga sample na 1–16 na midpoint JPEG frame, pinaliit ang mahabang gilid sa pinakamaraming 1,024 pixels nang hindi pinalalaki ang mas maliliit na input, at hindi kailanman tumatanggap ng URL. Ang pag-sample ay `uniform` bilang default. Ang mga opsyonal na patakarang `scene_aware` at pang-eksperimentong `segment_aware` ay nagsasagawa ng isa pang karagdagang nakapirming FFmpeg pass sa na-validate na ring lokal na stream, pinipili ang mga nakapirming timestamp ng eksena na `showinfo`, at nag-fallback nang deterministiko sa parehong mga uniform midpoint kung sakaling magkaroon ng pagkabigo sa detector, timeout, malformed na output, o blangkong set ng kandidato. Ang segment-aware mode ay naglalaan ng mga midpoint sample nang proporsyonal sa mga na-validate na agwat ng eksena; ang ebidensya at ugali ng pag-fallback ng segment-aware ay detalyado sa ibaba. Ang mahigpit na 16-frame cap ay inilapat pagkatapos ng pagpili sa bawat patakaran. Kapag ang isang kahilingang nakabatay sa scene-aware ay may badyet lamang na isang frame, ginagamit nito ang uniform midpoint ng aktibong buong-video o focus window at nag-uulat ng `policyEffective: uniform`: ang isang napiling frame ng eksena ay hindi maaaring mapanatili ang parehong mga dulo ng oras. Ang isang caller ay maaari ding magbigay ng may hangganang focus window (`start`/`end` segundo); ang mga hangganan ay naka-clamp sa tagal ng media, ang mga baligtad o hindi may hangganang window ay tinatanggihan, at ang lahat ng patakaran sa pag-sample ay isinasagawa lamang sa loob ng normalized na agwat. Ang nagresultang window ay kasama sa metadata ng pag-sample at sa hindi pinagkakatiwalaang prefix ng paglalarawan upang masundan ng mga downstream model ang isang focused excerpt mula sa buong timeline.

Semantic caption focus ay isang hiwalay at tahasang setting. Ang default na mode ng pagsusuri na `full` ay nagpapanatili sa kasalukuyang frame prompt at hinding-hindi ipapasa ang teksto ng kahilingan sa caption model. Sa `focused` mode, binabasa lamang ng bridge ang pinakabago at hindi blangkong `text`/`input_text` na ginawa ng user mula sa parehong Chat o Responses container, nire-normalize ito sa NFC, pinagsasama ang mga control character at whitespace, at nililimitahan ito sa 500 Unicode code points. Ang isang blangkong resulta ay nag-fallback sa eksaktong prompt na `full`. Ang isang magagamit na pahiwatig ay naka-serialize bilang JSON sa isang dedikadong untrusted-user-context block at maaari lamang unahin ang mga nakitang detalye; hindi nito maaaring talunin ang hiwalay na babala laban sa pagsunod sa mga tagubilin na nakikita o naririnig sa media. Ang textual focus ay hinding-hindi nag-a-infer ng `start`/`end` o nagbabago sa temporal sampler.

#### FU-07 ebidensya ng istruktural na segment

`segment_aware` ay gumagamit ng isang may hangganang pre-analysis pass sa na-validate na ring lokal na video stream. Ang nakapirming filter chain ay unang sumusukat sa pinakamaraming 320 pixels ang lapad, nakakakita ng mga pagbabago ng eksena at frozen na agwat, pagkatapos ay nag-sample sa bawat 1 frame bawat segundo para sa blur, average luma, at spatial/temporal na impormasyon. Ang pass na ito ay limitado sa 600 structural sample, isang FFmpeg/filter thread, ang parehong allowlist ng protocol na `file`-only at container, isang 1 MiB na bound ng process-output, at pinakamaraming 30 segundo sa loob ng nakabahaging abort/deadline ng broker. Hindi ito kailanman tumatanggap ng command, filter, path, o URL mula sa kahilingan.

Ang mga structural value ay deterministikong ebidensya ng pag-sample, hindi semantikong pag-unawa sa video. Hindi sila nag-a-infer ng mga paksa, aksyon, caption, pagsasalita, o layunin ng user. Ang mga hangganan ng eksena at freeze ay bumubuo ng mga segment; ang saklaw ng freeze, blur, exposure, spatial detail, at temporal change ay nakakaimpluwensya lamang kung paano inilalaan ang umiiral na 1–16 frame budget. Ang isang ganap na frozen na segment ay limitado sa isang frame, habang ang mga non-frozen na segment ay nag-aagawan para sa natitirang badyet. Kapag ang mga hangganan ay mas marami kaysa sa mga frame, ang uniform timeline coverage ay pinapanatili upang ang mabilis na mga maagang hiwa ay hindi makatago ng isang mahabang sumusunod na segment. Ang mga hangganan ng eksena sa loob ng 1 segundong resolution ng pagsusuri ng isang hangganan ng freeze ay pinagsasama.

Ang mga nawawalang filter, malformed/blangkong ebidensya, error sa detector, o ang may hangganang pre-analysis timeout ay nag-fail open sa eksaktong uniform midpoint policy. Ang pag-abort ng caller o deadline ng broker ay hindi nag-fail open: tinatapos nito ang in-flight subprocess, pinipigilan ang pagkuha ng frame mamaya, at ang pribadong pansamantalang tree ay tinatanggal sa `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ay lumilikha ng mga deterministikong tunay na FFmpeg fixture para sa mga matitipid sa caption-call pagkatapos ng dedup, alokasyon ng badyet para sa dense-motion, ebidensya ng blur/exposure/SI-TI, mabilis na mga hiwa na may mahabang tail, at mga maling positibo ng gradual-fade. Itinatala nito ang oras ng pader ng pre-analysis at, kung saan available ang `/usr/bin/time`, ang child CPU at peak RSS. Ang mga pagsusuri ng kalidad nito ay mga structural oracle lamang. Ang tunay na kalidad ng caption-model ay nananatiling `HOLD` dahil ang harness na ito ay walang awtorisadong endpoint o frozen judge. Ang mga matitipid sa pananalapi ay nananatiling `HOLD` maliban kung ang `--caption-cost-per-call-usd` ay nagbibigay ng isang tahasang positibong pagtatasa bawat tawag; ang script ay kailanman hindi gumagawa ng alinman sa mga resulta.

Ang bawat frame ay limitado sa 4 MiB, ang lahat ng hilaw na frame nang sama-sama sa 23 MiB, at ang naka-serialize na broker response sa 32 MiB. Ang isang pribadong pansamantalang direktoryo ay tinatanggal sa `finally`. Hindi isinasama ng OmniRoute ang FFmpeg at hindi ito tumatanggap ng custom na executable path. Bago ang pag-caption, ang bridge ay naglalapat ng konserbatibong visual deduplication pass: ang bawat JPEG ay pinaliit sa isang 16×16 grayscale buffer at kinukumpara lamang sa huling frame na pinanatili. Para sa hiniling na caption budget na higit sa isang frame, ang pagkuha ay nagbibigay ng may hangganang kandidatong pool na hanggang dalawang beses ng budget na iyon at hindi kailanman hihigit sa 16 na frame. Ang hiniling na cap ay inilalapat lamang pagkatapos ng deduplication, kung saan ang una at huling napiling mga kandidato ay pinapanatili sa panahon ng huling pagpapanipis kapag ang budget ay hindi bababa sa dalawa. Ang may bersyong polisiyang `grayscale-16x16-mean-cells-v2` ay gumagamit ng mas malaki sa pagitan ng mean luma delta at ng ratio ng mga cell ng thumbnail na ang normalized delta ay hindi bababa sa 0.05. Ang duplicate threshold ay ang konstant na 0.04, na pinili para sa predictability sa halip na ilantad bilang isang setting ng runtime. Ang pangalawang high-contrast signal na ito ay nagpapanatili ng maliit na galaw at mga pagbabago sa nakikitang teksto na maaaring maitago ng paghahambing na mean-only. Ang mga error sa comparator o decoder ay nag-fail open at pinapanatili ang coverage. Pinaghihiwalay ng output metadata ang mga nakuha nang kandidato, ang mga matagumpay na nagamit na frame, at ang mga tinanggal na visual duplicate.

Ang isang tahasang minarkahang bahagi ng video ay maaaring humiling ng may timestamp na contact sheet. Ang bridge ay bumubuo ng pinakamaraming 4-column, 16-frame na JPEG grid. Ang bawat 512-pixel cell ay nagsusunog ng source timestamp nito sa isang high-contrast na bottom band, habang ang parehong mga timestamp ay nananatili sa textual metadata para sa downstream association at audit. Ang kumpletong JPEG ay nananatiling nakatakda (capped) sa 32 MiB. Kung hindi ma-decode o mabuo ng `sharp` ang grid, ang bridge ay aatras sa mga indibidwal na JPEG frame; ang pag-abort ng client ay nagpapatuloy pa rin sa operasyon ng sheet.

Ang ebidensya ng promosyon ay sadyang hiwalay sa synthetic composition microbenchmark. Ang `scripts/perf/video-bridge-contact-sheet-eval.ts` ay nagtatakda ng isang schema-versioned na A/B harness para sa mga tunay na OpenAI-compatible na vision model. Sinasukat nito ang mga token na iniulat ng provider, end-to-end wall latency (kasama ang komposisyon ng sheet), bilang ng tawag sa model, at manifest-defined na pagpapanatili ng katotohanan. Ang mga hilaw na tugon ng model ay hindi isinusulat sa ulat; ang mga SHA-256 digest lamang at ang mga tinugmang fact ID ang pinapanatili. Ang harness ay walang ginagawang network o bayad na tawag sa model maliban kung naipasa ang `--execute-real` at nakakonfigure ang `--model`, `OMNIROUTE_BASE_URL`, at `OMNIROUTE_API_KEY`. Kung walang tahasang totoong pagtakbo na iyon, ang machine-readable na hatol nito ay nananatiling `HOLD`; ang mga sukat ng synthetic payload/call-count lamang ay hindi ebidensya ng promosyon.

Ang mga caller ay maaaring mag-attach ng opsyonal na `transcript.cues` array sa isang sinusuportahang bahagi ng video kapag mayroon na silang naka-align na teksto. Ang bawat cue ay dapat magdala ng `text`, isang may hangganang `start`/`end` interval sa loob ng probed duration, at isang whitelisted na `source` (`client`, `embedded`, o `audio-bridge`); ang `confidence` ay naka-default sa `1` at dapat manatili sa pagitan ng `0` at `1`. Ang eksaktong magkatulad na mga cue ay kinokolapse. Hindi kailanman sinisimulan ng OmniRoute ang transkripsyon mula sa metadata na ito: ang mga na-validate na cue ay kinokopya sa inilarawang resulta kasama ang source, confidence, at interval, at isinasalarawan bilang mga hindi pinagkakatiwalaang obserbasyon kasama ng mga caption ng frame. Ang invalid, out-of-range, o walang provenance na teksto ay tinatanggihan sa halip na ihalo sa stream ng caption. Ang parehong mga channel ng transcript ng request-body ay nag-normalize ng ibinigay na provenance sa `client`, kabilang ang mga self-asserted na `embedded` o `audio-bridge` na label. Ang isang adapter na pag-ari ng server lamang ang maaaring magtalaga ng mga pinagkakatiwalaang label na iyon sa pamamagitan ng code-only na argumentong `trustedSource`; ang isang request JSON field ay hindi maabot ang argumentong iyon. Ang teksto ng transcript ay nananatiling hindi pinagkakatiwalaang nilalamang nagmula sa media, anuman ang pinagmulan nito, at hindi kailanman dapat magdesisyon ng awtorisasyon.

Ang isang advanced caller ay maaaring magbigay ng track na `audioTranscript` para sa parehong video; itinuturing ito bilang tekstong ibinigay ng client, hindi patunay ng transkripsyon ng server. Ang fusion seam ay nagpapatakbo ng mga obserbasyon sa biswal at audio sa ilalim ng isang deadline at abort signal, inaayos ang mga ito sa isang karaniwang timeline, kinokolapse ang mga eksaktong duplicate, at nag-uulat ng bahagyang resulta kapag ang isang panig lamang ang nagtagumpay. Ang isang invalid na `audioTranscript` ay bumababa sa bahagyang resultang iyon — ang visual description ay pinapanatili at ang audio branch ay nagtatala ng isang sanitized failure code — sa halip na ibagsak ang buong video. Ang availability bawat branch, ang partial flag, at ang mga sanitized failure code ay pinapanatili sa inilarawang resulta, sa guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), sa result-cache metadata, at sa mga bridge fusion counter. Ang default na landas ng Video Bridge ay hindi nag-i-invoke ng speech-to-text o nag-a-download ng pangalawang kopya ng media; kung walang tahasang track na iyon, nananatili itong video-only.

**Retensiyon ng transcript (#12150 P1).** Awtomatikong nalalapat ito sa tuwing nag-render ang Video Bridge (na opt-in mismo) ng transcript cue — walang hiwalay na flag ng retensiyon. Kapag nag-render ang isang kahilingan ng anumang transcript cue (isang `transcript` na idineklara ng tumatawag o pinagsamang `audioTranscript`), minarkahan ito ng guardrail bilang `videoBridgeObserved` at lumilikha ito ng naka-redact na anino ng paglalarawan ng video — isang magkatulad na pag-render kung saan ang katawan ng malayang teksto ng bawat cue ay pinapalitan ng `[redacted-video-transcript]`, na binuo sa pamamagitan ng pagpapalit sa naka-istrukturang field ng cue bago buuin ang string (hindi kailanman sa pamamagitan ng pag-parse sa pinatag na teksto, kaya walang nilalaman ng cue — maging adversarial man o ordinaryo, kabilang ang mga katawan na naglalaman ng `]` tulad ng `[inaudible]`/`[music]` — ang makakaligtas). Ang naka-persist na katawan ng kahilingan sa call-log ay pinapalitan ang bawat bahagi ng teksto na nagmula sa video ng naka-redact na anino na iyon, na tinutugma sa pamamagitan ng pagkakapareho ng nilalaman; ang anchor na `fullText` ay binabasa muli mula sa natapos na pre-call guardrail payload, kaya matagumpay pa rin ang pagtutugma pagkatapos muling isulat ng mga sumunod na chain guardrail (ang PII at credential maskers, mga priyoridad na 10/95) ang teksto ng paglalarawan sa lugar at pagkatapos muling hubugin ng system-prompt/handoff/memory injection ang array ng mensahe. Ang katawan na ipinadala upstream sa modelo ay hindi nagbago. Ang isang na-obserbahang kahilingan ay hindi rin nagpapanumbalik ng matibay na Memory (ang parehong pagkuha na nagmula sa kahilingan at tugon ay nilaktawan), kaya ang sariling tugon ng modelo ay hindi maaaring mag-echo ng teksto ng transcript sa loob ng Memory.

**Mga hilaw na field ng video (#12430).** Kapag naka-enable ang bridge at hindi alam o wala ang katutubong suporta sa video, ang mga tinukoy na field na `transcript`/`audioTranscript` ay nag-a-activate din ng `videoBridgeObserved`, kahit pagkatapos ng pagkabigo sa paglalarawan o isang limitasyon sa `maxVideos`. Ang `null` at mga bakanteng string ay binibilang; ang mga nawawalang field at hindi video na metadata ay hindi binibilang. Ang mga nakatagong kopya ay nag-re-redact sa mga field na ito o tinatanggal ang kahilingan, at ang mga cache/Memory ay nilaktawan.

Sa mga fallback path na iyon, ang mga wastong cue ng tumatawag ay nagiging mga sinusuportahang bahagi ng `text`/`input_text` sa halip na mga hindi pamantayang field ng provider. Ang parehong track na ibinigay ng kahilingan ay nananatiling hindi pinagkakatiwalaang mga obserbasyon ng `client`, na may malinaw na babala na ang video ay hindi inilarawan at ang mga timestamp ay hindi na-verify laban sa media. Ang umiiral na 256-cue/64-KiB kabuuan at bawat-cue na badyet ay nalalapat sa dalawang track nang sabay; ang mga timestamp ay dapat magkasya sa 600-segundong kisame ng broker at anumang ibinigay na focus window. Ang mga hindi wastong track ay itinatapon, hindi ipinapasa bilang arbitraryong teksto; ang isang wastong kapatid na track ay maaari pa ring gamitin maliban kung lumampas ang kanilang pinagsamang badyet. Ang mga field na null/bakante ay walang idinaragdag na teksto. Walang media fetch o transkripsyon ang idinaragdag ng fallback na ito. Ang mga field ng ekstensiyon ng transcript ay tinatanggal mula sa fallback na video carrier at sa mga object nitong `video_url`/`source`. Ang OpenAI wire allowlist ay nananatiling mahigpit; ang mga hindi kilalang katutubong video carrier ay nananatiling available at ang mga kilalang target na teksto lamang ay nagpapanatili ng mga ligtas na marker. Pinoprotektahan ng mga naka-istrukturang redaction shadow ang idinagdag na teksto ng transcript, habang ang orihinal na kahilingan na pag-aari ng tumatawag ay nananatiling hindi nagbabago. Ang mga target na sinusuportahan ng katutubo at mga hindi paganong bridge ay nagpapanatili ng kanilang umiiral na gawi sa pag-bypass.

Ang mga karagdagang nakatagong kopya ay gumagamit ng parehong signal ng na-obserbahang kahilingan. Ang hilaw na pre-guardrail client-request snapshot, in-memory pending request, at maagang rejected-request log ay direktang pinapalitan ang mga field ng transcript sa mga bahagi ng video; ang mga string prompt na sinisintesis ng mga yugto ng pipeline at context handoff ay nire-redact sa persisted-request-body sink. Ang naka-persist na marker na `video_content_removed` ay ginagawang fail closed ang pagpapatuloy ng `previous_response_id` sa halip na muling buuin ang teksto na sadyang itinapon. Kung mawala sa isang na-obserbahang kahilingan ang per-part redaction shadow nito bago ang pag-log, o kahit na ang isa sa ilang mga video shadow ay mabigong tumugma pagkatapos ng mga sumunod na mutasyon ng kahilingan, ang nakatagong katawan ng kahilingan ay tuluyang tinatanggal sa halip na magpanatili ng bahagyang naka-redact na transcript.

Para sa isang na-obserbahang kahilingan, maaaring sipiin ng tugon ng modelo ang anumang bahagi ng transcript nang walang naka-istrukturang hangganan ng cue. Ang naka-persist nitong call-log na `responseBody` ay kaya pinapalitan ng isang omission marker; ang detalyadong pipeline artifact (na maaaring maglaman ng mga upstream/client body at stream chunk) ay hindi pinapanatili. Nilaktawan ng mga semantic, idempotency, at reasoning-replay cache ang mga pagbasa at pagsulat para sa kahilingang iyon. Ang kahilingan ng provider at ang tugon na nakikita ng kliyente ay nananatiling hindi nagbabago. Ang mga maagang keepalive byte ay inaalis mula sa pansamantalang buffer kapag tinanggal ang detalyadong artifact. Ang malformed EventStream na babala ni Kiro ay nag-uulat lamang ng bilang ng payload byte, hindi kailanman ang mga nilalaman nito o ang hilaw na error ng JSON parser. Hindi ito nag-aangkin na ang bawat hindi nauugnay na diagnostic ng provider/plugin ay na-audit na; ang mas malawak na retained-sink sweep ay sinusubaybayan sa #11658.

Ang panloob na lifecycle ng `/api/modality-bridge/video/drilldown` ay isang hiwalay, loopback/token-authenticated na substrate ng cache. Nangangailangan din ang bawat operasyon ng isang canonical opaque principal ID. Bago paganahin ang isang production caller, dapat nitong hanguin ang ID na iyon mula sa authenticated tenant at hindi kailanman dapat magpasa ng halagang pinili ng kliyente. Itinatali ng mga key ng cache ang principal na iyon sa mga canonical session at video-reference ID, nag-iimbak lamang ng kanilang mga key na nagmula sa SHA-256, at isinusubject ang parehong pagbasa at pagtanggal sa parehong principal. Ang cache ay nag-iimbak ng pinakamaraming 16 na nagmula sa JPEG frame sa bawat entry, pinapaso ang mga ito pagkatapos ng sampung minuto, at sumusuporta sa mga nakabalangkas na pagbasa ng `start`/`end` o tahasang pagtanggal ng sesyon.

Ang bawat principal ay limitado sa 16 na entry at 64 MiB ng canonical na data ng JPEG. Ang mga limitasyong iyon ay hiwalay sa pandaigdigang kisame na 64-entry/256 MiB: ang presyon ng quota ng principal ay nag-aalis lamang ng mga least-recently-used na entry ng principal na iyon bago isaalang-alang ang pandaigdigang pag-alis ng LRU. Ang mga nag-expire na entry ay winalis mula sa parehong principal at pandaigdigang accounting sa aktibidad ng cache, habang ang pagkansela at pagkabigo sa pag-validate ay hindi nagko-commit ng bahagyang pagpapalit.

Tinatanggihan ng cache ang mga di-kanonikal na Base64, sobrang padding, media na di-JPEG, sira o putol na mga JPEG, at mga JPEG na naglalabas ng babala sa panahon ng may hangganang full-image na `sharp` decode. Muling ini-encode nito ang bawat tinatanggap na larawan bilang isang kanonikal na JPEG, kinukuha ang lapad at taas mula sa mga na-decode na byte sa halip na magtiwala sa mga field ng caller, at itinatapon ang anumang kasunod na polyglot bytes sa halip na panatilihin ang mga ito. Ang may hangganang kanonikal na compressed buffer lang ang sinisingil sa parehong quota. Kasama sa JSON wire limit ang Base64 overhead para sa 32 MiB decoded-input ceiling. Itinatala ng bawat nakaimbak na derivation ang na-validate nitong format/resolution ng JPEG, patakaran sa sampling, bersyon ng derivation, oras ng paglikha, content hash na kinakalkula ng server, at naka-hash na parent reference kasama ang parent-content hash ng pinagkakatiwalaang caller. Sinusuri ang pagkansela sa pagitan ng mga asynchronous decode/hash phase bago ang atomic cache commit.

Ang tranche na ito ay hindi pa nagkokonekta ng production producer sa ruta at hindi nagbibigay ng multi-resolution variant selection. Samakatuwid, ang transparent na Video Bridge request path ay walang idinaragdag na trabaho, habang ang tenant-bound principal derivation at ang buong FU-08 multi-resolution lifecycle ay nananatiling tahasang follow-up na gawain sa halip na idokumento bilang kumpletong gawi.

Ang mga frame ay nilalagyan ng caption nang sunud-sunod gamit ang naka-configure na Video model. Ang isang blangkong Video override ay nagmamana ng setting ng Vision; kung parehong blangko, pipili ang Vision auto-router ng epektibong vision-capable model. Pinapalitan ng mga matagumpay na caption ang orihinal na bahagi ng matatag na `[Video description:` prefix na nagmamarka rin sa teksto bilang isang hindi pinagkakatiwalaang media-derived na obserbasyon at nag-aabiso sa mga downstream model na huwag sundin ang mga tagubiling matatagpuan sa media. Kasama sa mga frame-caption cache key ang mga JPEG byte, prompt, timestamp, at epektibong modelo; ang mga matagumpay na caption lamang ang naka-cache. Pinapanatili ng mga entry sa cache ang aktwal na matagumpay na producer model, kasama ang isang fallback model; nag-uulat ang bridge ng `mixed` kapag ang iba't ibang frame ay ginawa ng iba't ibang modelo. Ginagamit muli ng cache hit ang pagkakakilanlan ng producer na iyon sa halip na muling i-label ito bilang hiniling na routing plan. Ang whole-video result cache ay naka-key sa bawat input na nagbabago sa output — prompt, epektibong modelo, patakaran sa sampling, bilang ng frame, semantic analysis mode, ang SHA-256 fingerprint ng naka-normalize na focus hint, focus window, `transcript`, `audioTranscript`, at ang contact-sheet flag — kaya ang pagbabago sa alinman sa mga dimensyong iyon ay magiging cache miss, hindi kailanman lumang muling paggamit. Ang visual dedup policy version, threshold, at may hangganang candidate-frame count ay tahasan din sa result-cache key at metadata; samakatuwid, ang pagbabago sa patakaran ay hindi maaaring gumamit muli ng lumang whole-video description. Pinapanatili ng Result-cache v4 metadata ang mode at fingerprint, hindi kailanman ang raw user task. Nag-uulat ang guardrail metadata ng parehong hiniling at epektibong mga mode ng pagsusuri; ang hiniling na `focused` mode na walang magagamit na teksto ng user ay iniulat bilang epektibong `full`.

Kinukuha ng guardrail ang bawat suportadong bahagi ng video ngunit naglalarawan ng hindi hihigit sa `modalityBridgeVideoMaxVideos`. Para sa isang target na napatunayang may `supportsVideo === false`, ang mga nabigo at lumampas sa limitasyong video ay nagiging mga tahasang ligtas na text marker upang walang raw na video ang matira. Kapag hindi alam ang kakayahan, pinapanatili ng mga bahaging iyon ang kanilang video carrier; ang anumang fallback transcript ay sumusunod sa may hangganang pag-convert ng teksto sa itaas. Ang mga target na vata may `supportsVideo === true` ay nilalampasan ang bridge. Ang abort signal ng kahilingan ng kliyente ay kumakalat sa pag-download, broker queue, mga subprocess, at mga tawag sa caption; ang mga abort ay humihinto sa pagitan ng mga video at hindi kailanman nagiging fail-open sa raw media.

Ang mga setting sa runtime ay sinusuportahan ng DB at na-validate ng Zod:

| Key                                 | Default     | Range / behavior                                                                                                                                         |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opsyonal na runtime, opt-in                                                                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | ang `full` ay nagpapanatili ng mga generic na caption; ginagamit ng `focused` ang may hangganan, hindi pinagkakatiwalaang pinakabagong konteksto ng user |
| `modalityBridgeVideoModel`          | `""`        | Minamana ang modelo ng Vision Bridge                                                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, o proporsyonal na `segment_aware`; ang pagkabigo ng detector ay babalik sa `uniform`                                           |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                                           |

Ang mga lumang naka-persist na halaga ng timeout ng Video na lampas sa 120 segundo ay nililimitahan sa deadline ng broker; ang mga bagong isinusulat na setting na lampas sa limitasyong iyon ay tinatanggihan.
Ang `GET /api/modality-bridge/video/runtime` ay nangangailangan ng pinagkakatiwalaang stamped loopback locality bago ang authentication o runtime probing, pagkatapos ay nangangailangan ng management auth. Nagbabalik lamang ito ng `available`, mga nilinis na bersyon ng FFmpeg/ffprobe, at isang nakapirming dahilan kapag hindi available ang runtime. Ang panloob na extraction endpoint ay hindi isang pampublikong upload API: ang saturation ng queue ay nagbabalik ng `503` kasama ang `Retry-After`, ang pag-disconnect ng caller ay nagbabalik ng `499`, at ang nakapirming deadline ng broker ay nagbabalik ng `504`. Ang mga na-convert na tugon ay nagdaragdag ng `video->text;model=<visionModel>;parts=<videos>` sa gitnang `x-omniroute-modality-bridge` header nang hindi inaalis ang mga segment ng Vision o Audio.

### PII Masker (`piiMasker.ts`)

Tumatakbo sa **parehong** yugto.

- **`preCall`** ay nag-clone ng payload, binabagtas ang `system`, `messages`, `input`, at `prompt` (kasama ang mga simpleng string item), at naglalapat ng `processPII()` (mula sa `@/shared/utils/inputSanitizer`) sa mga string na field na `content`/`text`. Kapag `PII_REDACTION_ENABLED=true`, ang natukoy na PII ay nire-redact sa outbound payload. Ito ay hiwalay sa `INPUT_SANITIZER_MODE` (na kumokontrol lamang sa patakaran ng prompt-injection). Kapag naka-off ang redaction, nire-record ng tawag ang mga bilang ng pagtukoy nang hindi binabago ang nilalaman.
- **`postCall`** ay nag-deep-clone ng tugon, nagpapatakbo ng `sanitizePIIResponse()` kasama ang masker ng hugis ng Responses-API (`maskResponsesOutput` — sumasaklaw sa `output_text` at `output[].content[].text`). Kung may maganap na redaction, pinapalitan ng binagong tugon ang orihinal.

Ang guardrail ay hindi kailanman nagba-block; nag-a-annotate lamang ito (`meta.detections`, `meta.redacted`) o nagre-rewrite.

#### Per-type selection, custom patterns and detection counters

**Dashboard → Settings → Security → PII masking** ang pumipili kung _ano_ ang minamaske. Hindi nito pinapaandar ang masking: iyon ay nananatiling nasa `PII_REDACTION_ENABLED` (request) at `PII_RESPONSE_SANITIZATION` (response + SSE), na parehong naka-off bilang default.

- **Per-type selection** — ang mga built-in id ay nakalista sa `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ang ibig sabihin ng walang setting ay bawat uri (ang gawi bago umiral ang setting na ito). Ang pattern na `ssn_us` ng request engine ay nag-a-map sa `ssn`. Ang mga Template (Minimal, Standard, Financial, Brazilian, USA, Full) ay nagpupuno lamang ng mga checkbox sa UI.
- **Custom patterns** — hanggang 20 regex o wildcard pattern (`*` = hanggang 64 na non-whitespace character, `?` = isa). Ang mga tugma ay nagiging `[CUSTOM_REDACTED]`. Ang bawat pattern ay dumadaan sa `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): hindi hihigit sa 500 character, ang mga flag ay limitado sa `g i m s u`, dapat mag-compile, dapat pumasa sa `safe-regex` (catastrophic backtracking), at hindi dapat tumugma sa blangkong string o redaction placeholder. Ang pattern na nabigo ay tinatanggihan kapag sinave at kapag sinubukan, at ang nakaimbak na row na nabigo ay nilalaktawan sa runtime sa halip na i-compile. Ang mga custom na pattern ay tumatakbo lamang habang naka-on ang masking.
- **Detection counters** — mga bilang bawat uri (hindi kailanman mga natugmang halaga), nakatago sa memory at nire-reset sa pag-restart (`src/lib/pii/piiDetectionStats.ts`). Tumataas lamang ang mga ito habang naka-on ang masking.

Ang mga setting ay nasa `key_value` table (namespace `pii_settings`, `src/lib/db/piiSettings.ts`) at binabasa sa pamamagitan ng 1 s cache. API:

| Method | Path                     | Purpose                                                                             |
| ------ | ------------------------ | ----------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Estado ng flag, `enabledTypes`, `customPatterns`, detection counters                |
| `PUT`  | `/api/settings/pii`      | Palitan ang `enabledTypes` (`null` = lahat) at/o `customPatterns`                   |
| `POST` | `/api/settings/pii/test` | Dry-run ng isang pattern laban sa sample na hindi hihigit sa 8 KB; walang nakaimbak |

Ang tatlong ito ay nangangailangan ng management auth at nagpapatunay sa katawan gamit ang Zod (`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Nagtutukoy ng mga adversarial structure sa nilalamang ibinigay ng user at ipinapatupad ang naka-configure na patakaran. Ang gawi ay pinatatakbo ng mga environment variable at mga opsyon ng constructor:

| Setting         | Env var                                                                                               | Default | Effect                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Kapag `false`, nag-short-circuit ang guardrail.                                                                                                                                                                                    |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Patakaran sa injection: `block`, `warn`, o `log`. (Ang `redact` ay tinatanggap para sa back-compat ngunit **hindi** nito inaalis ang injection text; ang pag-rewrite ng PII sa request ay kinokontrol ng `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Pinakamababang severity na kinakailangan para mag-block. Ang Medium ay observe-only bilang default.                                                                                                                                |

Ang **priyoridad ng mode** (`getMode`): `options.mode` ng caller → **DB feature-flag override** ng `INJECTION_GUARD_MODE` (Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env → `warn`. Samakatuwid, ang override sa dashboard ay nananaig kaysa sa mga env var, kaya kinokontrol ng Feature Flags UI ang tumatakbong guard nang live (walang pag-restart). Ang pagbasa sa DB ay fail-safe: kung magkaroon ito ng error, babalik ang guard sa gawi na nakabatay sa env, at kapag walang naka-set na override, ang gawi ay magkapareho sa resolusyon na nakabatay lamang sa env.

Mga pinagmulan ng pagtukoy:

1. `sanitizeRequest()` mula sa `@/shared/utils/inputSanitizer` (nakabahaging set ng detector na ginagamit sa iba pang bahagi ng pipeline).
2. Built-in `DEFAULT_GUARD_PATTERNS` (kasalukuyang `system_override_inline` at `markdown_system_block`, parehong `high` ang severity).
3. Opsyonal na `customPatterns` na ipinasa sa pamamagitan ng mga opsyon ng constructor (mga string, regex, o `{ name, pattern, severity }` na mga record).

Kapag ang `mode === "block"` **at** ang kahit isang pag-detec ay umabot sa antas ng kalubhaan (severity threshold), ang `preCall` ay nagbabalik ng `{ block: true, message: "Request rejected: suspicious content detected" }`. Sa mga mode na `warn`/`log`, nag-log ang guardrail ngunit pinapayagan ang tawag. Ang shared helper na `evaluatePromptInjection()` ay naka-export din para sa mga caller na kailangang sumuri ng mga prompt nang hindi dumadaan sa registry.

**Scan bound (v3.8.20):** sinusuri lamang ng detector ang **unang 16 KB** ng pinagsamang text ng prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) sa `src/shared/utils/inputSanitizer.ts`. Parehong ang `detectInjection()` at `evaluatePromptInjection()` ay gumagamit ng `slice(0, MAX_INJECTION_SCAN_BYTES)` bago patakbuhin ang pattern loop. Ang mga direktiba ng injection ay matatagpuan malapit sa itaas ng input, kaya nililimitahan nito ang CPU/GC ng regex sa mga payload na may sukat na daan-daang KB nang hindi pinapahina ang pag-detec (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Tumatakbo sa **parehong** yugto, huli sa default chain (priyoridad na `95`). Tinatanggal ang mga kilalang pattern ng API-key / secret-token mula sa outbound payload (nilalaman ng mensahe, mga argumento ng tawag sa tool, mga resulta ng tool) **at** sa tugon ng provider, kaya ang credential na naka-paste sa isang prompt (o ibinalik ng isang resulta ng tool) ay hindi tumatagas sa upstream provider o pabalik sa client.

- **Opt-in lang**, parehong kombensiyon sa PII redaction (malapit sa Hard Rule #20): naka-disable maliban kung ang `settings.credentialRedactionEnabled === true` **o** `CREDENTIAL_REDACTION_ENABLED=true`. Kapag naka-off ito, ang guardrail ay isang no-op — hindi ito kailanman nagba-block at hindi nagre-rewrite.
- Ang `redactCredentials()` ay dumadaan sa buong puno ng payload/response (`walkValue()`, ligtas sa prototype-pollution, ligtas sa cycle sa pamamagitan ng `WeakSet`) at pinapalitan ang mga tugma ng placeholder na `[REDACTED:<type>]`, kinokopya lamang ang mga branch na talagang nagbago.
- Saklaw ng `CREDENTIAL_PATTERNS` ang mga key ng LLM provider (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), mga token ng VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), mga key sa pagbabayad (Stripe, Square), mga cloud key (AWS access key, Twilio, SendGrid, Mailgun), mga pribadong key / JWT, mga string ng koneksyon na naglalaman ng credential (`mongodb://user:pass@...`, atbp.), at isang pangkalahatang pattern ng halaga ng header na `Authorization`/`x-api-key`/`api-key`/`apikey`. Ang mga key na may hugis header (`authorization`, `x-api-key`, `api-key`, `apikey`) ay tinatanggal nang may istruktura (halaga lamang, ang scheme prefix tulad ng `Bearer `/`Basic ` ay pinapanatili) sa halip na sa pamamagitan ng pangkalahatang text regex.
- Ang guardrail ay hindi kailanman nagba-block; nagre-rewrite lamang ito (`modifiedPayload` / `modifiedResponse`) at nag-a-annotate (`meta.credentialsRedacted`, `meta.count`).

Regression guard: `tests/unit/credential-masker-guardrail.test.ts`.

## Base Contract (`base.ts`)

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
  block?: boolean; // nagdudulot ng short-circuit ang true sa chain
  message?: string; // lumilitaw kapag nagba-block
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ibinabalik ng preCall upang i-rewrite ang request
  modifiedResponse?: TValue; // ibinabalik ng postCall upang i-rewrite ang response
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

Ang isang guardrail ay nagpapadala ng hudyat na "walang pagbabago" sa pamamagitan ng pagbabalik ng `void`, `{}`, o
`{ block: false }`. Ang pagbabalik ng `modifiedPayload`/`modifiedResponse` ay pumapalit
sa halagang dumadaloy sa kadena para sa mga sumusunod na guardrail.
Ang `signal?: AbortSignal` ay nagdadala ng lifecycle ng tumatawag sa mga guardrail. Ang pag-abort sa request ay isang sinasadyang fail-open exception: ang mga media bridge ay humihinto sa pagtatrabaho at naglilinis nang hindi ibinabalik ang hilaw na media sa isang target na kilalang hindi sumusuporta dito.

## Registry (`registry.ts`)

Ang singleton na `guardrailRegistry` ay nagbibigay ng:

- `register(guardrail)` — nagdaragdag (o pumapalit ayon sa naka-normalize na pangalan) ng guardrail at
  muling nag-aayos ayon sa papalaking `priority`.
- `clear()` / `list()` — mga pantulong na pang-administrasyon.
- `runPreCallHooks(payload, context)` — iniikot ang mga aktibong guardrail, pinapadaan ang
  payload sa `modifiedPayload`, at humihinto sa unang `block: true`.
- `runPostCallHooks(response, context)` — parehong daloy sa panig ng response.
- `resetGuardrailsForTests({ registerDefaults })` — nililinis ang state at opsyonal na
  muling nagrerehistro ng mga default para sa malinis na test isolation.

Ang parehong runner ay nagbabalik ng `{ blocked, payload|response, results, guardrail?, message? }`
kung saan ang `results` ay isang array ng mga record ng `GuardrailExecutionResult` na may kasamang
mga field para sa bawat guardrail na `blocked`, `skipped`, `modified`, `error`, at `meta`,
na kapaki-pakinabang para sa tracing.

### Pag-disable ng mga Guardrail Bawat Request

Ang `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ay nagtitipon ng isang
na-de-duplicate na listahan ng mga pangalan ng guardrail na dapat laktawan para sa kasalukuyang
request. Mayroong limang channel, na binabasa sa pagkakasunud-sunod na ito at pinagsasama sa isang listahan (ang unang lumitaw ang panalo kapag nagde-duplicate):

1. `apiKeyInfo.disabledGuardrails`
2. Request body `disabledGuardrails` (top-level)
3. Request body `metadata.disabledGuardrails` (kapag ang `metadata` ay isang object lamang)
4. Header `x-omniroute-disabled-guardrails`
5. Legacy header `x-disabled-guardrails`

Ang lahat ng limang channel ay pinagsama, kasama ang dalawang header: ang pagpapadala ng parehong
`x-omniroute-disabled-guardrails` at `x-disabled-guardrails` ay lumalaktaw sa union ng
kanilang mga listahan, at ang isang bakanteng modernong header ay hindi na nagtatago sa legacy header
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), naayos sa
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Ang mga halaga ay maaaring mga array ng string o isang comma-separated na string; ang mga pangalan ay tinatanggalan ng mga extra space at nase-normalize sa lowercase kebab-case (`pii_masker` → `pii-masker`), at ang mga bakanteng entry ay tinatanggal. Ang resulta ay ipinapasa sa pamamagitan ng `context.disabledGuardrails` patungo sa registry, na lumalaktaw sa mga tumutugmang guardrail (`skipped: true` sa `results`).

Ang listahan ng pag-disable ay nakakaapekto lamang sa **registry**. Ang `block` mode ng prompt-injection ay
isang sapilitang hangganan: ang injection-guard middleware
(`src/middleware/promptInjectionGuard.ts`) ay tumatawag sa `evaluatePromptInjection()`
nang walang anumang disable list na kinokontrol ng tumatawag (ang patay na tawag na
`resolveDisabledGuardrails({ body })` na ginagawa nito noon ay tinanggal sa
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), kaya ang isang request
na nag-disable ng `prompt-injection` ay tinatanggihan pa rin sa `block` mode. Sinasadya ito.
Ang mga channel ng pag-disable ay kinokontrol ng tumatawag (request body,
metadata, headers), at hindi dapat kaya ng isang kliyente na patayin ang isang security
control na itinakda ng operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ang header
union mula sa [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ay nagbabago lamang kung aling mga guardrail ng registry ang nilalaktawan; hindi nito pinapayagan ang isang kliyente
na lampasan ang middleware. Ang mga sapilitang patakaran ng guardrail bawat key at bawat grupo ay
sinusubaybayan sa v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Tingnan ang [Coverage and limits](#coverage-and-limits).

## Pagkakasunud-sunod ng Pagpapatupad

Para sa bawat kahilingan na dumadaloy sa `src/sse/handlers/chat.ts` at
`open-sse/handlers/chatCore.ts` (ang mga ruta ng pamilya ng chat na nakalista sa ilalim ng
[Coverage and limits](#coverage-and-limits)):

1. Ang `resolveDisabledGuardrails(...)` ay bumubuo ng listahan ng pag-skip mula sa API key, body,
   at headers.
2. Pinatatakbo ng `guardrailRegistry.runPreCallHooks(body, ctx)` ang mga guardrail sa pataas na pagkakasunud-sunod ng priyoridad:
   - Ang mga hindi aktibong guardrail ay naitatala bilang `skipped`.
   - Ang `preCall` ng bawat guardrail ay maaaring muling magsulat ng payload sa pamamagitan ng `modifiedPayload`.
   - Ang unang `block: true` ay nagpapatigil (short-circuits) sa chain at ang handler ay nagbabalik
     ng tugon ng pagtanggi sa guardrail.
3. Ang (posibleng muling isinulat na) payload ay dumadaloy sa combo routing at upstream
   dispatch.
4. **Non-streaming only:** pagkatapos mabuo ang tugon,
   pinatatakbo ng `guardrailRegistry.runPostCallHooks(...)` ang parehong chain sa
   tugon. Ang `block: true` dito ay nag-aalis sa upstream na tugon at nagbabalik ng HTTP 400. Ang mga streamed na tugon ay nilaktawan nang buo ang hakbang na ito.

Ang mga guardrail na nagkakaroon ng error ay naitatala kasama ang `error: <message>` at naka-log sa pamamagitan ng
`logger.warn`, ngunit nagpapatuloy ang chain — fail-open by design.

## Saklaw at mga limitasyon

Ang registry ng guardrail ay nakakonekta lamang sa chat pipeline. Ang mga limitasyong ito ay
naka-pin ng `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` at
`tests/unit/guardrail-pipeline-characterization.test.ts`; sadyang i-update ang mga test na iyon kapag nagbago ang pag-uugali.

### Kung saan tumatakbo ang mga hook

| Hook / control                      | Tumatakbo sa                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Mga kahilingang pinangangasiwaan ng `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (at `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, at ang Telegram chat proxy. Gayundin ang dashboard test endpoint na `/api/guardrails/test`. Ang isang pre-call block ay nagbabalik ng HTTP 400. |
| `runPostCallHooks`                  | Mga **Non-streaming** na tugon sa chat lamang (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Hindi kailanman naabot ito ng mga streamed na tugon.                                                                                                                                                                                                                                                                                                          |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), naka-pipe sa `streamingPipeline.ts` kapag naka-on ang `PII_RESPONSE_SANITIZATION`. Hindi ito isang guardrail, kaya hindi ito naaapektuhan ng mga disable channel.                                                                                                                                                                                                                                     |
| Injection-guard middleware (legacy) | Bawat ruta ng `/v1` na may dalang prompt, kasama ang pamilya ng chat (tingnan ang [route coverage](#injection-guard-route-coverage--red-team-phase-8--block-d)). Prompt injection lamang.                                                                                                                                                                                                                                                                           |

### Mga hindi saklaw

- Ang **Media, embeddings and data routes** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ay hindi kailanman umaabot sa registry. Walang
  PII masking, credential masking o modality bridge na tumatakbo doon. Ang tanging
  check nila ay ang legacy injection-guard middleware.
- Ang mga **Streamed responses** ay walang post-call guardrails: walang `pii-masker` o
  `credential-masker` post-call, at walang post-call block. Ang streaming PII
  transform lamang ang naaaplikata (kapag naka-on ang `PII_RESPONSE_SANITIZATION`). Ang credential
  na ibinalik (echoed back) sa isang streamed na tugon ay hindi nire-redact.
- **Disable channels vs. the middleware (by design):** sinusuri ng middleware
  ang prompt injection gamit ang sarili nitong tawag sa `evaluatePromptInjection()`, nang
  walang ipinapasa na listahan ng pag-disable na kinokontrol ng tumatawag. Ang `block` mode ay isang sapilitang
  hangganan na hindi maaaring laktawan ng mga disable na kinokontrol ng tumatawag, kabilang sa mga ruta ng pamilya ng chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ang pag-disable sa
  `prompt-injection` ay nag-i-skip lamang sa registry guardrail.

### Ang nakakakita sa tugon bago ang post-call

Sa non-streaming na landas, ang pagkakasunud-sunod ay: memory extraction → built-in tool
execution → post-call guardrails → post-call block exit → semantic-cache store.

- **Memory extraction** at **tool execution** ay nakikita ang tugon bago pa man ito ma-rewrite o ma-block ng mga post-call guardrail. Mula noong [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), ang memory extraction ay nagpapatakbo ng nakuhang teksto sa pamamagitan ng `sanitizePII` kapag naka-on ang `PII_RESPONSE_SANITIZATION` (parehong streaming at non-streaming), ngunit ang isang tugon na kalaunang bina-block ng post-call ay naialok pa rin sa memory at mga tool.
- **Ang semantic cache** ay nag-iimbak ng tugon pagkatapos ng post-call, kaya iniimbak nito ang binagong tugon, at ang isang naka-block na tugon ay hindi kailanman bina-cache. Ang mga entry sa cache ay naka-key bawat API key.

## Konpigurasyon

Mga environment variable na binabasa ng mga built-in na guardrail:

| Variable                              | Ginagamit ng              | Epekto                                                                                                                          |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Itakda ang `false` upang ganap na huwag paganahin ang pag-detect.                                                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Patakaran sa injection: `warn`, `block`, o `log`. Ang legacy na value na `redact` ay hindi muling sinusulat ang injection text. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode para sa injection guard; isa ring DB feature flag na **nag-o-override** sa mga env var (DB > ENV).                         |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimum na antas ng kalubhaan na nire-reject ng `MODE=block`: `high` (default), `medium`, o `low`.                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy alias para sa `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Kapag `true`, ang PII ng request ay nire-redact (hindi nakadepende sa injection mode).                                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kinokontrol ang pag-uugali ng response-side masker.                                                                             |

Binabasa ng mga guardrail ng Modality Bridge ang runtime config mula sa DB-backed settings store (`getSettings()`), hindi mula sa mga env var. Ang mga pangunahing key para sa Vision ay `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, at `modalityBridgeCacheMaxEntries`. Ang mga legacy na key na `visionBridge*` ay tinatanggap lamang bilang dokumentadong one-cycle read fallback; ang mga isinusulat ng dashboard ay gumagamit ng mga pangunahing key. Ang mga default at ang fallback resolver ay matatagpuan sa `src/shared/constants/modalityBridgeDefaults.ts`, habang ang mga legacy constant ay nananatili sa `src/shared/constants/visionBridgeDefaults.ts`.

Gumagamit ang Audio ng `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, at `modalityBridgeAudioMaxClips`, pati na rin ang mga nakabahaging setting na `modalityBridgeCache*`. Walang legacy-key fallback ang Audio dahil ang mga key na ito ay ipinakilala kasama ng schema ng Modality Bridge.

Gumagamit ang Video ng `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos`, at `modalityBridgeVideoTimeout`, pati na rin ang mga nakabahaging setting na `modalityBridgeCache*`. Naka-disable ito bilang default dahil ang FFmpeg/ffprobe ay mga opsyonal na operational dependency at ang frame captioning ay nagdaragdag ng latency at gastos sa modelo.

## Mga Custom na Guardrail

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

Mga Hakbang:

1. Gumawa ng `src/lib/guardrails/myGuardrail.ts` na nagpapalawig sa `BaseGuardrail`.
2. Ipatupad ang `preCall` at/o `postCall`.
3. Magrehistro sa oras ng pag-import (i-push mula sa `registerDefaultGuardrails`) o tumawag ng `guardrailRegistry.register(...)` sa runtime — pinapalitan ng registry ang anumang naunang guardrail na may parehong normalized na pangalan.
4. Magdagdag ng mga test sa ilalim ng `tests/unit/` (mga umiiral na halimbawa: `tests/unit/guardrails-registry.test.ts`, `tests/unit/prompt-injection-guard.test.ts`, `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Gamitin ang `resetGuardrailsForTests()` sa pagitan ng mga test para magsimula sa kilalang estado. Magpasa ng `{ registerDefaults: false }` para magsimula sa isang blangkong registry at irehistro lamang ang mga guardrail na sinusubukan. Tinatanggap ng Vision Bridge ang dependency injection (`deps.getSettings`, `deps.callVisionModel`); inilalantad ng Audio Bridge ang mga katumbas na seam para sa mga setting, kakayahan, pagpili ng STT model, pagsusuri ng credential, at transkripsyon. Samakatuwid, maaaring subukan ng mga test ang parehong daloy nang walang access sa DB o network.

## Tingnan Din

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — shared detector na nagpapagana sa prompt-injection at PII masking
- `src/shared/constants/visionBridgeDefaults.ts` — mga default ng Vision Bridge at listahan ng forced-bridge model
- `src/shared/constants/modalityBridgeDefaults.ts` — mga shared runtime default ng Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonal layer (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — buong sanggunian ng env var

## Saklaw ng ruta ng injection-guard & red-team (Phase 8 · Block D)

Sinasaklaw ng injection-guard (`createInjectionGuard` / `withInjectionGuard`) ang lahat ng ruta na tumatanggap ng mga prompt ng user. Sinusunod nito ang `INJECTION_GUARD_MODE` (default `warn` = log lang; `block` = nagbabalik ng HTTP 400 `SECURITY_001`).

| Uri            | Mga Ruta                                                                                                                                             | Default na mode |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Text (umiiral) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Generative     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Data           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Sinasaklaw ng pagkuha ng text (`extractMessageContents`) ang `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nightly, `nightly-llm-security.yml`):** pini-validate ng promptfoo na bina-block ng bawat ruta ang OWASP-LLM corpus sa `INJECTION_GUARD_MODE=block`; nagpapatakbo ang garak ng mga probe (nilalampasan kung walang secret). Kasama ang `moderations` para sa pagkakapare-pareho. Ang block mode ay sapilitang hangganan: binabalewala ng `evaluatePromptInjection()` ang per-request disable list na ipinapasa dito ng middleware, kaya ang `disabledGuardrails` ay **hindi** nag-aalis sa isang ruta mula dito ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Ang nightly workflow (`.github/workflows/nightly-llm-security.yml`, cron + manual dispatch) ay may dalawang job:

- **`promptfoo-guard` (blocking)** — nagpapatakbo ng `promptfoo eval -c promptfooconfig.yaml` na may `INJECTION_GUARD_MODE=block`. Ang bawat adversarial case (hal. "ignore all previous instructions…", DAN-style jailbreaks) ay nagpapatunay na ang tugon ay nagtataglay ng `error.code === "SECURITY_001"`, ibig sabihin ay talagang tinanggihan ng guard ang kahilingan.
- **`garak` (advisory)** — nagpapatakbo ng garak `--probes promptinject,dan,leakreplay` laban sa isang lokal na instance ng OmniRoute (`http://localhost:20128/v1`). Naka-gate sa isang provider secret (`PROMPTFOO_PROVIDER_KEY`); maayos na lumalampas at may suffix na `|| true`, kaya nag-uulat ito nang hindi nagiging sanhi ng pagkabigo ng CI.

Ang saklaw ng guard helper (`createInjectionGuard` / `withInjectionGuard`) ay sumasaklaw sa bawat `/v1` ruta na may dalang prompt; ang prompt text ay kinukuha mula sa `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ng `extractMessageContents()` sa `src/shared/utils/inputSanitizer.ts`.

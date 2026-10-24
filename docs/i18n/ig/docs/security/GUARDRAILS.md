# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-10-17 — v3.8.52 (agbakwunyere [Mkpuchi na oke](#coverage-and-limits):
> ụzọ na ụzọ nzaghachi ndị hook na-erute, nkụnye nkwụsị ejikọtara ọnụ (#16412), ọnọdụ igbochi
> ntinye dị ka oke amanyere iwu (#16413), na ihe na-ahụ nzaghachi tupu post-call)

Guardrail na-amanye nchekwa, iwu, na mgbanwe ọdịnaya n'oke
dị n'etiti OmniRoute na ndị na-eweta ọrụ dị n'elu. Guardrail ọ bụla nwere ike inyocha (ma
ọ bụrụ na achọrọ, jụ, gbanwee, ma ọ bụ tinye nkọwa na) data arịrịọ (`preCall`) na
nzaghachi ndị na-eweta ọrụ dị n'elu (`postCall`).

Sistemụ ahụ bụ **na-aga n'ihu ma ọdịda mee**: ọ bụrụ na guardrail atụpụta njehie mgbe ọ na-arụ ọrụ, ndekọ
na-edekọ njehie ahụ wee gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Igbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.
Naanị ihe dị iche bụ arịrịọ a kwụsịrị: mgbe a kwụsịrị `signal` onye kpọrọ oku,
guardrail na-atụpụta njehie na-ajụ ịrụ hook ahụ kama ịwụpụ ya.

Hook ndị ahụ **anaghị** arụ ọrụ n'ụzọ ọ bụla ma ọ bụ na nzaghachi ọ bụla. Gụọ
[Mkpuchi na oke](#coverage-and-limits) tupu ịdabere na guardrail dị ka
usoro nchekwa.

## Guardrail Etinyere N'ime

Ndekọ ahụ na-ebunye guardrail isii na-akpaghị aka n'usoro mkpa mgbe a na-ebubata ya
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Ọkwa mkpa | Aha                 | Ogbo           | Faịlụ                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba ọkwa mkpa ndị dị ala na-arụ ọrụ **mbụ**.

### Àkwà Njikọ Ọhụụ (`visionBridge.ts`) — Àkwà Njikọ Ụdị Mgbasa Ozi PR-1

Ụdị ntọala GLM 5.3 na `glm-5.3-{low,high,max}` nwere metadata ndekọ/nkọwapụta
`supportsVision:false` doro anya. Ụdị GLM 5.3 Flash ndị ahụ
ka bụ ụdị nwere ọhụụ n'ime ha. Ụzọ `/v1/messages` nke Claude Code na-abanye
n'agbụ guardrail tupu oku nke `handleChat` a na-ekekọrịta **tupu** ntụgharị Claude gaa OpenAI;
a ga-akọwa ma ọ bụ hazie onyonyo nsonaazụ ngwaọrụ `Read` ndị dị n'ime ihe ndị ọzọ
tupu ntụgharị ahụ ebuli ha gaa n'ọdịnaya OpenAI `image_url` (#17069).

Ọ na-ejide arịrịọ nwere onyonyo ndị e zigara **ụdị na-enweghị ọhụụ** wee
bugharịa arịrịọ ahụ dum gaa n'ụdị nwere ike ịhụ onyonyo ma ọ bụ dochie akụkụ
onyonyo ndị ahụ na nkọwa ederede nke ụdị ọhụụ enwere ike ịhazi mepụtara tupu
oku a na-akpọ onye na-eweta ọrụ dị n'elu. Nke a na-eme ka ndị na-eweta ọrụ naanị ederede nwee ike ịhazi
data nwere ọtụtụ ụdị mgbasa ozi n'enweghị mgbanwe a na-ahụ anya.

Usoro:

1. Wụpụ ma ọ bụrụ na ụdị ezubere nwere nkwado ọhụụ ugbua (ọ gwụla ma ọ pụtara na
   ndepụta ụdị a manyere iji àkwà njikọ `isVisionBridgeForcedModel`).
2. Wepụta akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enyefe ọrụ ahụ n'aka **ihe nchọpụta mgbasa ozi
   jikọrọ ọnụ** `detectMediaParts()` dị na `open-sse/utils/mediaParts.ts` — otu
   isi mmalite eziokwu a na-ekekọrịta na nzacha ndakọrịta combo.
   A na-ekwe ka mwepụta naanị maka nhazi ndị `replaceImageParts` nwere ike itinyeghachi
   (nkwekọrịta wepụta↔dochie): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, na Responses
   API `input_image`. A na-ewepụkwa onyonyo dabara adaba ndị dị n'ime Claude Code
   `tool_result.content` na mmepụta ngwaọrụ Responses ma
   dochie ha n'ụzọ mbụ ha; nhazi ndị bụ naanị ihe ngosi bụ ihe nzacha combo
   na-eji, a naghị ewepụta ha.
   Wụpụ ma ọ bụrụ na ahụghị nke ọ bụla.
3. Chọpụta nhazi oge ọrụ site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): igodo ntọala `modalityBridge*`
   ọhụrụ na-ebute ụzọ; igodo `visionBridge*` ochie ka bụ **nhọrọ ndabere
   otu okirikiri** (oge enwere ike ịlaghachi n'ọnọdụ mbụ). Wụpụ tupu ịgagharị mgbasa ozi ọ bụla mgbe
   àkwà njikọ ahụ nwere nkwarụ.
4. Ihe nhọpụta ọnọdụ (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   ma a ga-agbanwe ụzọ ma ọ bụ kọwaa. Ịgbanwe ụzọ na-eweghachi `modifiedPayload` ebe naanị `model`
   gbanwere, tinyere metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ụzọ nkọwa: kpachie onyonyo na `maxImages`, chịkọta ntuziaka dabere n'ọrụ,
   lelee ebe nchekwa nkọwa, kpọọ ụdị ọhụụ ahụ **n'otu oge**
   (`Promise.allSettled`), ma tinye akụkụ ederede `[Image N]: <description>` n'ọnọdụ
   ha. Nkọwa dara ada na-ewepụta `null`: a na-echekwa onyonyo mbụ maka
   ụdị ezubere a na-amaghị/ndị nwere ike ịhụ onyonyo (#4012), mana **ụdị ezubere ozugbo
   ekwenyela na ọ bụ naanị ederede** ma ọ bụ combo na-enweghị ọhụụ na-enweta ederede nnọchi
   `(unavailable — no vision-capable provider connected)` doro anya maka
   onyonyo ọ bụla a na-akọwaghị, gụnyere ọdịda akụkụ ụfọdụ na onyonyo karịrị
   oke oku nkọwa (#17069). Nhọrọ ndabere nkọwa combo dị adị mgbe ihe niile dara
   ka dị (#8430).
6. Weghachite `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Ihe nhọpụta ọnọdụ (`modalityBridgeVisionMode`)

| Ụdị        | Nke ndabara | Omume                                                                                                                                                                                                                                                                                                     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Usoro ntụle ochie, agbanwebeghị (#6640/#7204): ụdị model na-abụghị combo/`auto/` na-atụgharị ụzọ gaa na model ọhụụ kacha mma ma ọ bụrụ na model mbụ enweghị nzere enwere ike iji (ọ bụrụ na o nwere, a na-akọwa); ebumnuche combo na-akọwa mgbe niile.                                                    |
| `describe` |             | Na-akọwa mgbe niile — a na-amapụ ngọngọ ntụgharị ụzọ kpamkpam; model onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                                                                                                    |
| `reroute`  |             | Manye ntụgharị ụzọ: a na-agafe nche nke idowe model nwere nzere. Nche nzere nke **ebumnuche** ntụgharị ụzọ ka na-arụ ọrụ — mgbe enweghị ebumnuche ọhụụ enwere ike iji, àkwà njikọ na-egbochi ya na njehie doro anya kama ịkọwa ma ọ bụ iziga onyonyo na-edozibeghị na ebumnuche na-anabata naanị ederede. |

Ụdị amanyere na-akwụsị usoro ahụ **tupu** usoro ntụle auto amalite; omume `auto`
bụ otu ihe byte n'otu byte na nche mgbochi dị tupu PR-1.

#### Oke igodo API (`visionBridgeKeyScope.ts`)

Mgbe igodo API nke onye kpọrọ arịrịọ na-amachi `allowedConnections`, ọdọ oke ojiji
(`allowedQuotas`) ma ọ bụ model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), àkwà njikọ na-ahọrọ naanị
model ntụgharị ụzọ na nkọwa igodo ahụ nwere ike iji, na njikọ igodo ahụ nwere
ike iji. Oku nkọwa ahụ na-agafezi mgbe niile na okirikiri onwe OmniRoute yana
nkụnye `x-omniroute-self-loop-key-id`, ka arịrịọ nkata na-anata ya wee
manyekwa iwu njikọ na model nke igodo ahụ ọzọ. `enforceApiKeyPolicy()`
na-akwanyere nkụnye ahụ ùgwù naanị mgbe ọ bịakọtara na bearer okirikiri onwe, ya mere ọ nwere ike naanị
ibelata ohere nnweta, a na-ajụkwa id a na-apụghị ịchọta ihe ọ na-ezo aka na ya.

Ọ bụrụ na enweghị model ọhụụ enyere igodo ahụ ikike iji, **ebumnuche akwadoro na ọ na-anabata naanị
ederede** na-ajụ arịrịọ onyonyo ahụ n'ime sistemụ ahụ na HTTP 400 doro anya kama
ibuga byte onyonyo na ọrụ dị n'elu nke na-enweghị ike ijikwa ha (#17069). Maka ebumnuche ndị
a maghị ikike ọhụụ ha ma ọ bụ ndị nwere ikike ọhụụ nke ha, ụzọ nkọwa na-ejigide omume ochie ya
nke ikwe ka ihe gafee mgbe ọdịda mere (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ na-enweghị igodo, na igodo na-enweghị mmachi ndị a, na-akpa àgwà kpọmkwem
dị ka mbụ.

#### Ntuziaka nkọwa maara ọrụ a na-eme (`modalityBridgeVisionTaskAware`)

Nke ndabara bụ **eziokwu**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwunye
ederede nke **ozi ikpeazụ onye ọrụ zitere** (ebipụrụ ka ọ ghara ịgafe mkpụrụedemede 500) na ntuziaka
nkọwa isi, na-eduga nkọwa ahụ n'ihe onye ọrụ jụrụ n'ezie
(usoro codex-vision-proxy) ma na-arịọ model ọhụụ ka o depụta
ederede a na-ahụ anya. Mgbe agbanyụrụ ọkọlọtọ ahụ — ma ọ bụ enweghị ederede onye ọrụ — a na-eji ntuziaka isi ahụ n'agbanweghị ya.

Arịrịọ nke okirikiri onwe nkọwa nke ya, nke dakọtara na OpenAI (`callVisionModelSingle()`
n'ime `visionBridgeHelpers.ts`), na-arịọ `image_url.detail: "high"` mgbe niile —
n'enweghị ọnọdụ, maka onye na-akpọ arịrịọ/onye na-eweta ọrụ ọ bụla, ọ bụghị dabere na mgbama ọ bụla sitere n'aka klayent.
Ịtụtụ nlele nwere nkọwa dị ala na-ebelata izi ezi OCR maka kpọmkwem ọrụ idegharị ederede
nke ntuziaka a na-arịọ, ya mere oku nkọwa ahụ n'onwe ya na-arịọ nkọwa dị elu mgbe niile
n'agbanyeghị ọkwa nkọwa arịrịọ mbụ batara ji. Nke a
na-emetụta naanị ahụ arịrịọ nkọwa ime; ọ naghị agbanwe otú
OmniRoute si ebuga `image_url.detail` nke onye kpọrọ arịrịọ na arịrịọ isi —
a na-etinye ndabara ahụ iche, naanị maka klayent OpenCode achọpụtara, n'ime
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Alaka
ụdị nnyefe Anthropic nke okirikiri onwe nkọwa enweghị oghere `detail`
ma ndabara abụọ ahụ adịghị emetụta ya.

#### Oke mmepụta nkọwa (`modalityBridgeVisionMaxChars`)

| Igodo                          | Nke ndabara | Oke                   |
| ------------------------------ | ----------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` ma ọ bụ 100–50000 |

`0` (nke ndabara) pụtara **enweghị oke** — a na-ebufe nkọwa nke
`callVisionModel()` weghachiri n'agbanweghị ya, na-echekwa omume
dị adị. Uru ọ bụla dị n'etiti 100–50000 na-ebipụ nkọwa ahụ ma tinye
`…` na njedebe tupu etinyeghachi ya dị ka `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` n'ime `src/lib/guardrails/visionBridge.ts`).
Bulie nke a maka ọrụ OCR chọrọ ọtụtụ nkọwa ebe model na-esote chọrọ
ederede niile e depụtaghachiri; belata ya iji kpaa oke ojiji token n'ụdị model ọhụụ na-ekwu ọtụtụ okwu.
Oghere dashboard ahụ dị na ngalaba Advanced nke taabụ Vision
(`modality-bridge-max-chars` n'ime `ModalityBridgeVisionTab.tsx`) ma na-ebuli uru ọ bụla
dị n'etiti 1 na 99 ruo na opekempe 100, ma na-ahapụ `0` edoziri kpọmkwem
n'agbanweghị ya — `0` bụ uru Zod ziri ezi n'onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
ndabara “edozibeghị”.

#### Nchekwa nwa oge nkọwa (`modalityBridge/bridgeCache.ts`)

Nchekwa nwa oge LRU + TTL dị na ebe nchekwa maka mmepụta nkọwa, nke usoro niile na-ekekọrịta.
Igodo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` nwere
nhazi na-etinye ogologo n'ihu (enweghị mgbakọ ọnụ n'ókè oghere). Akụkụ model bụ
model àkwà njikọ **ahaziri**, ọ bụghị model zara n'ezie —
`callVisionModel` nwere ike iji ụzọ nnọchi n'ime ya, na iji igodo dị iche maka mbọ ọ bụla ga-ekewa
nchekwa nwa oge ahụ. A naghị echekwa nkọwa dara ada na nchekwa nwa oge. Ntọala:

| Igodo                           | Nke ndabara | Oke     |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Ịhazigharị onyonyo dị n'ebe dị anya (nkọwa self-loop/nweta base64)

Mgbe àkwà mmiri ahụ n'onwe ya na-enweta onyonyo **dị n'ebe dị anya** — oku
Anthropic describe ọ na-akpọ onwe ya na ntụgharị base64 nke claude-wire-format
(`ensureBase64ImagesForClaudeWire`), ha abụọ site na
`fetchRemoteImageAsDataUri()` dị na `visionBridgeHelpers.ts` — a na-ebufe data
URI e nwetara site na `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya n'arịrịọ e zigara ụdị
ọgụgụ isi na-ahụ onyonyo. A na-ebelata onyonyo buru oke ibu ka **akụkụ ya kachasị ogologo bụrụ 2048px** (nke kwekọrọ
na oke nhazigharị nha OpenAI/Anthropic na-etinyerịrị n'akụkụ sava), nke na-ebelata
bait a na-ebugo na oge igbu oge na-agbanweghị ihe ụdị ọgụgụ isi na-ahụ onyonyo na-ahụ. Nhazigharị nha
na-eji `sharp`, nke a na-ebubata site na mbubata na-agbanwe agbanwe: n'elu ikpo okwu ebe faịlụ ọnụọgụ abụọ
nke obodo ya anaghị ebu, `normalizeDataUri()` **anaghị atụpụ njehie ma ọlị** — ọ na-alaghachi
n'ịgafe bait mbụ ahụ ozugbo, ya mere ụzọ nkọwa/ntụgharị base64
na-aga n'ihu na-arụ ọrụ mgbe niile. Bait ndị na-abụghị onyonyo (ihe e nwetara nke na-abụghị
onyonyo a pụrụ ịkọwapụta) na-agafekwa n'enweghị mgbanwe. Nhazigharị a
metụtara naanị onyonyo àkwà mmiri ahụ na-enweta maka oku ọ na-akpọ onwe ya — a naghị
etinye ya ma ọlị na data mbụ onye kpọrọ oku zigara ka ọ gafee ozugbo, nke kwekọrọ
n'ụkpụrụ mgbanwe naanị mgbe ekwenyere na ya (Iwu Siri Ike #20).

#### Atụmatụ ntọala + mbugharị

A na-eji Zod enyocha igodo `modalityBridge*` ọhụrụ n'ime `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, igodo atọ `modalityBridgeCache*`, na
otu `modalityBridgeAudio*` nke Àkwà Mmiri Ọdịyo na-eji. Mbugharị
`141_modality_bridge_settings.sql` na-edepụtaghachi ụkpụrụ ochie dị adị nke
`visionBridge*` gaa n'igodo ọhụrụ dabara ha (imeghachi ya anaghị agbanwe nsonaazụ, ọ dịghịkwa edegharị
ụkpụrụ `modalityBridge*` onye na-ahụ maka ọrụ debere); a ka na-anabata igodo ochie ahụ dịka
nhọrọ ndabere maka ịgụ ihe n'ime otu okirikiri mwepụta.

#### Nkụnye nghọta + ọnụ ọgụgụ

Nzaghachi a gbanwere site na nkọwa na-ebu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(nke `buildModalityBridgeHeader()` dị na `modalityBridge/bridgeStats.ts` na-ewu,
nke `withModalityBridgeHeader()` dị na `src/sse/handlers/chatHelpers.ts` na-etinye).
Arịrịọ a gbanwere ụzọ ha na-enweta **enweghị** nkụnye — emetụghị data ahụ aka, mgbanwe ụdị ọgụgụ isi ahụ
apụtakwala n'ubi `model` dị n'ahụ nzaghachi.

`GET /api/modality-bridge/stats` (nnyocha ikike njikwa, otu ọkwa na
`GET /api/settings`) na-eweghachi ihe ngụkọ dị na ebe nchekwa maka ụdị mgbasa ozi ọ bụla
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị mbọ niile, dịka
ihe a na-ekewa ya; ọrụ a na-atụghị oge ya anaghị echepụta ihe atụ oge
mịlịsekọnd efu. `bridged` ka bụ aha nnọchi nke dabara na nsụgharị ochie maka
ntụgharị gara nke ọma; mbọ dara ada anaghị abawanye ya.
E mere ihe ngụkọ ka ha laghachi na efu mgbe amalitegharịrị usoro
(ihe ọmụma nlekota, ọ bụghị ịgụkọ ndekọ ego).

#### Nhazi dashboard

Peeji dashboard a raara nye nke a bụ
`/dashboard/settings/modality-bridge`. Taabụ ya ndị a pụrụ iru site na URL bụ `Vision`, `Audio`,
na `Video` na-echekwa paramita ajụjụ mgbe a na-agbanwe ụkpụrụ `tab`.
Taabụ Ọhụụ na-egosi ịgbanye, ọnọdụ, nhọrọ ụdị ọgụgụ isi (gụnyere
nhọrọ ndabara akpaka), ntuziaka maara ọrụ a na-arụ, oke oge/onyonyo/ogologo nkọwa/cache
dị elu, ihe ngụkọ
oge ọrụ, na arịrịọ nlele nwere nchebe. Taabụ Ọdịyo na-arụkwa ọrụ: ọ na-egosi
ịgbanye, ihe nhọpụta ụdị ọgụgụ isi maka naanị STT nwere Akpaka, oke oge/ogologo ndekọ kachasị, ihe ngụkọ
ọdịyo, na ule nlele `input_audio`. Taabụ Vidio na-arụ ọrụ: ọ na-akọ
ọnọdụ FFmpeg/ffprobe n'oge ọrụ — otu n'ime ọnọdụ UI anọ doro anya (`unknown` mgbe
nyocha ka na-aga ma ọ bụ na ọ gaghị agwụcha, `restricted` n'elu nnabata
dashboard na-abụghị loopback ebe a na-awụpụ nyocha n'akụkụ klaịent, `unavailable` mgbe enyochachara
ma kwenye na ọ dịghị, ma ọ bụ `available` tinyere nsụgharị FFmpeg/ffprobe) — na-echekwa
ịgbanye na oke ụdị ọgụgụ isi/freemu/vidio/oge, na-enyocha ihe nhọpụta ụdị ọgụgụ isi ka ọ hapụ naanị ụdị
nwere ike ịhụ onyonyo, ma na-egosi ihe ngụkọ vidio.

Kaadị Àkwà Mmiri Ọhụụ nke dịbu n'okpuru ntọala AI bụzi njikọ ndakọrịta gaa na
peeji ọhụrụ ahụ; ọ naghịzi enwe oyiri fọm nke abụọ. Ndị Na-eweta Mgbasa Ozi na-ejikọkwa
usoro ọrụ Onyonyo-gaa-na-Ederede na Okwu-gaa-na-Ederede na taabụ Àkwà Mmiri
Ụdị Mgbasa Ozi kwekọrọ na ha n'ewepụghị ebe nnwale Okwu-gaa-na-Ederede dị adị.

**Ịgafe nnabata self-loop:** mgbe oku nkọwa na-agafe
self-loop `/v1` nke OmniRoute n'onwe ya (ụdị ọgụgụ isi nke onye na-eweta na-abụghị ọkọlọtọ), obere arịrịọ ahụ na-eziga
`x-omniroute-admission-bypass: internal` ma jiri nzere
self-loop a chọpụtara nyochaa ikike — akara nche obodo `sk_omniroute` na ọnọdụ obodo, ma ọ bụ
igodo gburugburu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` onye na-ahụ maka ọrụ haziri (#1350) ka
ntinye `REQUIRE_API_KEY=true` nwee ike ịga n'ihu na-akpọ oku nkọwa. A na-anabata
ịgafe a naanị maka nzere ndị ahụ kpọmkwem, ya mere klaịent mpụga enweghị ike iji
nkụnye ahụ zere nnabata.

Ntọala ndabara ochie dị na `src/shared/constants/visionBridgeDefaults.ts`;
ntọala ndabara ọhụrụ maka ọnọdụ/ịmara ọrụ/cache na ihe na-edozi ntọala dị na
`src/shared/constants/modalityBridgeDefaults.ts`. Ihe nchekwa ahụ na-enye
nhọrọ constructor `deps` ka ule nwee ike itinye mmejuputa adịgboroja nke `getSettings` na
`callVisionModel`.

### Àkwà Mmiri Ọdịyo (`audioBridge.ts`) — Àkwà Mmiri Ụdị Mgbasa Ozi PR-3

Ọ na-egbochi arịrịọ nkata bu ọdịyo tupu ha eruo ebe ezubere nke a na-amaghị
na ọ na-anabata ntinye ọdịyo. Ọ naghị agbanwe ụzọ arịrịọ nkata ma ọlị: a na-atụgharị akụkụ ọdịyo
ka ha bụrụ ederede site na njedebe multipart dị adị nke dakọtara na OpenAI, ma
ụdị ọgụgụ isi nkata ahọpụtara na-aga n'ihu na ederede e si na ọdịyo nweta.

Usoro:

1. Kpebie `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   e depụtara kpọmkwem na ndekọ ndị na-eweta ọrụ na-ebute ụzọ, metadata ụdị
   na-adịghị agbanwe agbanwe na-esote ya, e mesịa `modalities_input` emekọrịtara.
   Ndepụta ntinye e kwupụtara nke na-enweghị `audio` bụ `false`; mgbe enweghị
   ihe akaebe ikike ọ bụla, ọ na-anọgide `null`. Ma `false` ma `null` na-eme ka
   àkwà njikọ na-akpachapụ anya rụọ ọrụ, ebe `true` na-agafe ya.
2. Kpebie ntọala `modalityBridgeAudio*` ma wepụta akụkụ ọdịyo dị n'ọkwa elu
   nke a pụrụ iwepụ ma dochie n'ozi ọ bụla site na ihe nchọpụta
   `detectMediaParts()` a na-ekekọrịta. Ụdị nnyefe a na-akwado bụ OpenAI
   `input_audio`, `audio_url`, na `source.media_type: "audio/*"`. A na-achọpụta
   ọdịyo dị n'ime akụkụ ndị ọzọ maka ịhọrọ ụzọ, mana ụzọ iwepụ na idochi anaghị
   ewepụ ya. `modalityBridgeAudioMaxClips` na-amachi ọrụ; a naghị emetụ akụkụ
   ndị na-abịa mgbe e mesịrị aka.
3. Soro `provider/model` ahaziri, ma ọ bụ hapụ `selectAudioBridgeModel()` ka ọ
   gagharịa `AUDIO_TRANSCRIPTION_PROVIDERS` n'usoro katalọgụ kwụsiri ike wee
   họrọ ụdị mbụ nwere nzere onye na-eweta ọrụ na-arụ ọrụ nke a pụrụ iji mee ihe.
4. `callAudioTranscription()` na-agbanwe ọdịyo base64/data-URI ka ọ bụrụ
   `file` multipart, ma ọ bụ budata `audio_url` dị n'ebe ọzọ site na nche
   njikọ mpụga na-ekwe naanị adreesị ọha, nke nwere njide DNS na oke 25 MB.
   Mgbe ahụ, ọ na-eziga faịlụ ahụ na ụdị ahọpụtara site na POST gaa na
   njikọ onwe mpaghara `/v1/audio/transcriptions`, jiri
   `resolveSelfLoopBearer()` nyochaa njirimara ya. Ụzọ ntụgharị ọdịyo gaa
   n'edemede dị adị na-eme nchọta nzere nkịtị, njikwa oge ichere/oke ọnụego,
   na iziga ọrụ gaa n'aka onye na-eweta ya.
5. Oku ndị gara nke ọma na-eji `[Audio N]: <transcript>` dochie akụkụ ha. Oku
   ndị ahụ na-agba ọsọ na `Promise.allSettled`: ọdịda nke otu oku na-ahapụ
   akụkụ ọdịyo mbụ ahụ ka ọ dị (nkwekọrịta #4012). Ọ bụrụ na oku niile daa ma
   egosila na ebe a na-eziga ya bụ `supportsAudio === false`, akụkụ ndị ahụ
   na-aghọ `[Audio N]: (unavailable — no STT provider connected)`
   (nkwekọrịta #8430). Maka ebe a na-eziga ya nke a na-amaghị ikike ya
   (`null`), a naghị emetụ nsonaazụ ọdịda niile aka. Ebe a na-eziga ya nke
   egosila na ọ na-akwado naanị ederede, nke na-enweghị nzere STT a pụrụ iji
   mee ihe, na-enweta otu ederede nnọchi ahụ doro anya n'enweghị oku netwọk.

Ederede ndị a tụgharịrị nke ọma na-eji nchekwa nwa oge LRU/TTL nke Modality Bridge
nke usoro niile na-ekekọrịta. Igodo ahụ na-ejikọta ntụaka ọdịyo, akara ọrụ
`audio-transcription` na-adịghị agbanwe agbanwe, na ụdị STT ahọpụtara; a naghị
echekwa ọdịda na nchekwa nwa oge. Mgbalị ọdịyo na-emelite ihe ndị a na-ekekọrịta
maka ịgụ ọnụ: `bridged`, `cacheHits`, `failures`, na `lastUsedAt`.
Nzaghachi ndị a gbanwere na-ebu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; arịrịọ ndị
a na-emetụghị aka anaghị enweta ngalaba Àkwà Njikọ Ọdịyo.

A na-echekwa ntọala oge ọrụ na DB ma jiri Zod nyochaa ha:

| Igodo                         | Nke ndabara | Oke                    |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Akpaaka ma ọ bụ ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Nchekwa nwa oge a na-ekekọrịta ka nọ n'okpuru njikwa
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`.

### Àkwà Njikọ Vidio (`videoBridge.ts`, `videoBridgePipeline.ts`)

Na-egbochi akụkụ vidio dị n'ọkwa elu n'ime `messages` nke Chat Completions na
`input` nke Responses API tupu akpọọ ebe a na-eziga ya nke a na-amaghị na ọ
nwere nkwado vidio nke ya. Ụdị a na-akwado bụ `input_video`, `video_url`,
`video_source`, URL HTTPS, na URI data `data:video/*;base64,...`. A naghị ewere
aha faịlụ nkịtị dị n'ederede dị ka vidio.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) na-ahụ maka ịgagharị arịrịọ,
nyocha ikike/amụma, nchịkọta maka arịrịọ ọ bụla, na ọdịnaya nzaghachi.
Ọrụ maka vidio ọ bụla — inweta ya, nchekwa nwa oge nke nsonaazụ dum, ịkọwa
usoro fremụ (nke na-ejikọta ederede ọdịyo ọ bụla onye na-akpọ ya kwupụtara),
na metrik/ịkwụsị/ihicha maka mgbalị ọ bụla — dị n'azụ `processVideoPart` na
`videoBridgePipeline.ts`, nke a na-akpọ otu ugboro maka akụkụ vidio ọ bụla
n'ime okirikiri `preCall`.
Modul ahụ na-akọwakwa oke njikọ doro anya `VideoMediaBrokerPort`
(inweta byte na iwepụta fremụ ahọpụtara), `VideoAudioTranscriptionPort`
(ijikọta ederede ọdịyo onye na-akpọ ya kwupụtara na nkọwa fremụ ahọpụtara), na
`VideoDrilldownPort` (oke nchekwa nyocha fremụ miri emi; ejikọbeghị ya na
`processVideoPart` — naanị ụzọ `/api/modality-bridge/video/drilldown` dị iche
na-ede ndekọ nyocha miri emi ugbu a).

Ụzọ arịrịọ ọha `/v1` anaghị ebubata ma ọ bụ kpọọ usoro nwa. A na-ebudata
vidio dị n'ebe ọzọ n'okpuru oke 50 MiB; vidio base64 etinyere n'ime arịrịọ nwere
oke nchekwa 36 MiB maka vidio ọ bụla mgbe a tọpụchara koodu ya, ka ngwugwu
ụdị/ozi/nhazi wee nwee ike ịnọ n'ime oke nnabata arịrịọ JSON ọha nke 50 MiB.
A na-enyocha ogologo data etinyere n'ime arịrịọ na atụmatụ nha ya mgbe
a tọpụchara koodu tupu ekenye ebe nchekwa. A chọrọ HTTPS na URL mbụ dị
n'ebe ọzọ yana na ntụgharị ụzọ ọ bụla, site na iji nche njikọ mpụga dị adị
nke na-ekwe naanị adreesị ọha ma nwee njide DNS. Byte ndị ahụ na-agafezi kpọmkwem
oke onye ogbugbo ime `POST /api/modality-bridge/video/extract`. Ụzọ ahụ bụ ma
`LOCAL_ONLY` ma `SPAWN_CAPABLE`, na-anabata naanị arịrịọ loopback a tụkwasịrị
obi nke enyochara njirimara ya maka usoro ọ bụla, ọ naghị anabatakwa URL,
ụzọ sistemụ faịlụ, faịlụ a pụrụ ịgba ọsọ, ma ọ bụ ndepụta arụmụka.
Usoro nhazi nha ahụ arịrịọ API na onye na-agụ ahụ arịrịọ nwayọọ nwayọọ nke
onye njikwa na-amanye oke ntinye onye ogbugbo 50 MiB n'adabereghị n'otu
n'otu. Ahịrị nchere ya nwere oke na-arụ otu ọrụ mmịpụta n'otu oge, na-ekwe ka
ọrụ anọ chere, ma na-amachi ntinye na-echere na 100 MiB.

N'ime broker, `ffprobe` na-agụ faịlụ mpaghara nkeonwe; ndepụta usoro e kwere ka ha rụọ ọrụ, nke a kara aka,
anaghị agụnye usoro playlist na manifest. Maka akpa mgbasa ozi ezinụlọ MOV e kwere,
ntụaka data MOV mpụga ka na-enwe nkwarụ na ndabara, iwu
a kara aka anaghịkwa eme ka ha rụọ ọrụ. Ma `ffprobe` ma `ffmpeg` na-eji
ndepụta protocol e kwere nke nwere naanị `file`, otu eriri nhazi, usoro argument a kara aka, enweghị shell,
na mmemme a na-achọta site na `PATH`. Striim foto mkpuchi agbakwunyere abụghị
ndị a ga-ahọrọ maka ịkpọghachi. Striim niile a pụrụ ịkpọghachi ga-erubere oke ndị ahụ isi, a na-ahọrọkwa
striim e gosipụtara n'ụzọ doro anya dị ka nke ndabara tupu a laghachi na nke nwere index kacha nta
n'ụzọ na-enye otu nsonaazụ mgbe niile. Vidio nwere oke sekọnd 600, pikselụ 8,192 n'akụkụ ọ bụla, na
pikselụ isi mmalite 33,554,432. FFmpeg na-ewere nlele fremụ JPEG 1–16 n'etiti etiti, na-ebelata
akụkụ kachasị ogologo ka ọ ghara ịkarị pikselụ 1,024 n'ebughị ibu ntinye ndị pere mpe, ọ
naghịkwa anata URL ma ọlị. Usoro iwere nlele bụ `uniform` na ndabara. Iwu nhọrọ
`scene_aware` na iwu nnwale `segment_aware` na-eme otu
ngafe FFmpeg ọzọ a kara aka n'elu striim mpaghara a nwalere ma kwado, na-ahọrọ akara oge ihe nkiri
`showinfo` dị n'ime oke, ma na-alaghachi n'ụzọ na-enye otu nsonaazụ mgbe niile n'otu
ebe etiti ndị ahụ ekesara nhata ma ọ bụrụ na ihe nchọpụta daa, oge gwụ, mmepụta nwere mmebi usoro, ma ọ bụ
na enweghị ihe ọ bụla a pụrụ ịhọrọ. Ọnọdụ na-amata akụkụ na-ekenye nlele etiti dịka
nha oge ihe nkiri ndị a kwadoro si dị; a kọwara ihe akaebe na omume nlọghachi nke ọnọdụ na-amata akụkụ
n'okpuru. A na-etinye oke siri ike nke fremụ 16
mgbe a họrọchara ha n'iwu ọ bụla. Mgbe arịrịọ na-amata ihe nkiri nwere naanị
oke otu fremụ, ọ na-eji etiti e kesara nhata nke vidio zuru ezu ma ọ bụ windo ilekwasị anya
na-arụ ọrụ, ma na-akọ `policyEffective: uniform`: otu fremụ ihe nkiri a họọrọ
enweghị ike idobe nsọtụ oge abụọ ahụ. Onye na-akpọ ọrụ nwere ike ịhọrọ ịnye
windo ilekwasị anya nwere ọnụ ọgụgụ oge dị oke (`start`/`end` n'ime sekọnd); a na-amachi oke ya ka ọ dabara n'ogologo oge mgbasa ozi,
a na-ajụ windo ndị oge ha tụgharịrị azụ ma ọ bụ ndị na-enweghị ọnụ ọgụgụ oge dị oke, a na-emezikwa iwu iwere nlele niile
naanị n'ime nkeji oge ahụ e meziri. A na-etinye windo si na ya pụta
na metadata iwere nlele nakwa na nganiihu nkọwa a na-atụkwasịghị obi
ka ụdị ndị na-esote nwee ike ịmata ọdịiche dị n'etiti akụkụ a lekwasịrị anya na
usoro oge zuru ezu.

Ilekwasị anya n'ihe nkọwa pụtara bụ ntọala dị iche a na-ahọrọ n'ụzọ doro anya. Ọnọdụ nyocha ndabara `full`
na-echekwa prompt fremụ dị ugbu a, ọ dịghịkwa ebufe ederede arịrịọ
na ụdị na-emepụta nkọwa. N'ọnọdụ `focused`, njikọ ahụ na-agụ naanị
`text`/`input_text` kacha ọhụrụ nke onye ọrụ dere, nke na-adịghị efu, site n'otu akpa Chat ma ọ bụ Responses
ahụ, na-eme ka ọ bụrụ NFC, na-achịkọta mkpụrụedemede njikwa na oghere,
ma na-amachi ya na koodu Unicode 500. Ọ bụrụ na nsonaazụ ya efu, ọ na-alaghachi
na prompt `full` ahụ kpọmkwem. A na-ahazi ntụnye bara uru ka ọ bụrụ JSON n'ime ngọngọ
pụrụ iche maka ọnọdụ onye ọrụ a na-atụkwasịghị obi, ọ ga-emekwa naanị ka nkọwa a pụrụ ịhụ nweta mkpa ka ukwuu;
ọ nweghị ike ịkagbu ịdọ aka ná ntị dị iche megide ịgbaso ntuziaka a na-ahụ
ma ọ bụ na-anụ na mgbasa ozi. Ilekwasị anya site n'ederede anaghị ewepụta `start`/`end` ma ọ bụ gbanwee
ihe na-ewere nlele oge.

#### FU-07 ihe akaebe nhazi akụkụ

`segment_aware` na-eji otu ngafe tupu nyocha nke nwere oke n'elu
striim vidio mpaghara a nwalere ma kwado. Usoro filter a kara aka na-ebu ụzọ belata obosara ka ọ ghara ịkarị pikselụ 320,
na-achọpụta mgbanwe ihe nkiri na nkeji oge onyonyo kwụsịrị ịgbanwe, wee were nlele otu fremụ kwa
sekọnd maka nchagharị anya, nkezi luma, na ozi gbasara ohere/oge. Ngafe ahụ
nwere oke nlele nhazi 600, otu eriri FFmpeg/filter, otu
ndepụta protocol nwere naanị `file` na ndepụta akpa mgbasa ozi e kwere, oke mmepụta usoro 1 MiB,
na oge na-agaghị akarị sekọnd 30 n'ime oge nkwụsị/oge ngwụcha broker na-ekekọrịta. Ọ naghị
anabata iwu, filter, ụzọ faịlụ, ma ọ bụ URL sitere na arịrịọ.

Ụkpụrụ nhazi ndị ahụ bụ ihe akaebe iwere nlele na-enye otu nsonaazụ mgbe niile, ọ bụghị nghọta vidio
dabere na ihe ọ pụtara. Ha anaghị ewepụta ndị ma ọ bụ ihe dị na vidio, omume, nkọwa, okwu ọnụ, ma ọ bụ ebumnobi
onye ọrụ. Oke ihe nkiri na oge onyonyo kwụsịrị ịgbanwe na-emepụta akụkụ; oke oge nkwụsị mgbanwe onyonyo, nchagharị anya,
ọkwa ìhè, nkọwa gbasara ohere, na mgbanwe oge na-emetụta naanị otú e si ekenye
oke fremụ 1–16 dị adị. Akụkụ onyonyo kwụsịrị ịgbanwe kpamkpam nwere oke otu fremụ,
ebe akụkụ ndị na-akwụsịghị ịgbanwe na-asọ mpi maka oke fọdụrụ. Mgbe ọnụ ọgụgụ oke akụkụ
karịrị fremụ, a na-edobe mkpuchi usoro oge e kesara nhata ka mgbanwe ihe nkiri ngwa ngwa na mbido
ghara izochi ogologo akụkụ dị n'azụ. A na-ejikọta oke ihe nkiri ndị dị n'ime mkpebi
nnyocha otu sekọnd nke oke oge onyonyo kwụsịrị ịgbanwe.

Filter na-adịghị, ihe akaebe mebiri emebi/efu, njehie ihe nchọpụta, ma ọ bụ
ịgwụ oge tupu nyocha nwere oke na-eme ka usoro ahụ laghachi n'iwu etiti e kesara nhata ahụ kpọmkwem. Nkwụsị nke onye na-akpọ ọrụ
ma ọ bụ oge ngwụcha broker anaghị ekwe ka ọ gaa n'ihu: ọ na-akwụsị
usoro nwa na-arụ ọrụ, na-egbochi mwepụta fremụ ndị ọzọ, a na-ewepụkwa usoro nchekwa nwa oge nkeonwe ahụ
na `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta ihe nnwale FFmpeg n'ezie nke na-enye otu nsonaazụ mgbe niile
maka ịchekwa oku nkọwa mgbe ewepụchara ihe oyiri, ikenye oke maka mmegharị dị ukwuu,
ihe akaebe nchagharị anya/ọkwa ìhè/SI-TI, mgbanwe ihe nkiri ngwa ngwa nwere akụkụ ogologo n'azụ, na nchọpụta
ụgha nke mgbanwe nwayọọ nwayọọ. Ọ na-edekọ oge elekere tupu nyocha na, ebe `/usr/bin/time`
dị, ojiji CPU na RSS kacha elu nke usoro nwa. Nlele àgwà ya bụ naanị ihe atụ nhazi
e ji ekpebi nsonaazụ ziri ezi. Àgwà ụdị nkọwa n'ezie ka dị na `HOLD` n'ihi na akụrụngwa nnwale a enweghị
ebe njedebe enyere ikike ma ọ bụ onye nyocha a kara aka. Ego echekwara ka dịkwa na `HOLD`
ọ gwụla ma `--caption-cost-per-call-usd` nyere atụmatụ ọnụ ahịa oku ọ bụla nke karịrị efu
n'ụzọ doro anya; script ahụ anaghị echepụta nke ọ bụla n'ime nsonaazụ ndị a.

A na-amachi fremụ ọ bụla na 4 MiB, fremụ niile a na-ahazibeghị ọnụ na 23 MiB, na
nzaghachi broker e debere n'ụdị nnyefe na 32 MiB. A na-ewepụ ndekọ nchekwa nwa oge nkeonwe
n'ime `finally`. OmniRoute anaghị etinye FFmpeg na ngwugwu ya, ọ naghịkwa anabata ụzọ
faịlụ mmemme onye ọrụ họọrọ. Tupu ide nkọwa onyonyo, akwa njikọ ahụ na-eme usoro
iwepụ oyiri anya nke na-akpachapụ anya: a na-ebelata JPEG ọ bụla ka ọ bụrụ ebe nchekwa
ụda isi awọ 16×16, a na-atụnyere ya naanị na fremụ ikpeazụ echekwara. Maka oke nkọwa
onyonyo a rịọrọ nke karịrị otu fremụ, mmịpụta na-enye
ìgwè ihe a ga-ahọrọ nwere oke ruru okpukpu abụọ nke oke ahụ, ma ọ naghị agafe fremụ 16.
A na-etinye oke a rịọrọ naanị mgbe e wepụchara oyiri, na-echekwa ihe mbụ na nke ikpeazụ
a họọrọ mgbe a na-eme mbelata ikpeazụ ma ọ bụrụ na oke ahụ ruru
abụọ ma ọ bụ karịa. Iwu nwere nsụgharị
`grayscale-16x16-mean-cells-v2` na-eji nke ka ukwuu n'etiti nkezi mgbanwe nchapụta na
oke mkpụrụ ndụ onyonyo ntakịrị nke mgbanwe ya a haziri bụ opekata mpe 0.05.
Ọnụ ụzọ ikpebi oyiri bụ uru na-adịgide adịgide 0.04, nke a họọrọ ka omume ya bụrụ ihe a
pụrụ ịtụ anya, kama ikpughe ya dịka ntọala a na-agbanwe mgbe mmemme na-agba. Mgbaàmà
nke abụọ a nwere nnukwu ọdịiche nchapụta na-echekwa obere mmegharị na mgbanwe ederede
a na-ahụ anya nke ntụnyere dabere naanị na nkezi nwere ike izochi. Ọ bụrụ na njehie emee
n'ihe ntụnyere ma ọ bụ ihe ntụgharị koodu, a na-ahapụ fremụ ahụ ka ọ gafee iji chekwaa
mkpuchi. Metadata mmepụta na-ekewa ihe a mịpụtara maka ịhọrọ, fremụ e ji mee ihe nke ọma,
na oyiri anya e wepụrụ.

Akụkụ vidiyo a kara akara nke ọma nwere ike ịrịọ mpempe onyonyo nchịkọta nwere akara oge.
Akwa njikọ ahụ na-ewu grid JPEG nwere opekata mpeghị kọlụm 4 na fremụ 16. Mkpụrụ ndụ
512 pikselụ ọ bụla na-etinye akara oge isi iyi ya ozugbo n'ime eriri ala nwere nnukwu
ọdịiche nchapụta, ebe otu akara oge ndị ahụ ka dị na metadata ederede maka njikọ na nyocha
nke usoro na-esote. JPEG dum ka nwere oke 32 MiB. Ọ bụrụ na `sharp` enweghị ike
ịtụgharị koodu ma ọ bụ ijikọta grid ahụ, akwa njikọ ahụ na-alaghachi n'iji fremụ JPEG
n'otu n'otu; ịkagbu sitere n'aka onye ahịa ka na-agafe ọrụ mpempe ahụ.

E ji ụma kewapụ ihe akaebe maka ibuli ngwọta a n'ọkwa na obere nnwale arụmọrụ
njikọ onyonyo wuru awuru. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa
usoro nnwale A/B nke schema ya nwere nsụgharị maka ụdị ọhụụ anya n'ezie dakọtara na OpenAI.
Ọ na-atụ token ndị onye na-eweta ọrụ kọrọ, oge gafere site ná mmalite ruo ná ngwụcha
(gụnyere ijikọta mpempe ahụ), ọnụ ọgụgụ oku a kpọrọ ụdị ahụ, na njigide eziokwu ndị
manifest kọwara. A naghị ede nzaghachi ụdị ahụ n'ụdị mbụ ha n'ime akụkọ ahụ; naanị
nchịkọta SHA-256 na ID eziokwu ndị dabara ka a na-edobe. Usoro nnwale ahụ anaghị akpọ
netwọk ma ọ bụ ụdị a na-akwụ ụgwọ ma ọ bụrụ na etinyeghị `--execute-real` ma
haziekwa `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY`. Na-enweghị
ọsọ nnwale n'ezie ahụ a kpachapụrụ anya rịọ, mkpebi ya igwe nwere ike ịgụ ka bụ `HOLD`;
naanị nha ibu data/ọnụ ọgụgụ oku sitere na nnwale wuru awuru abụghị ihe akaebe maka ibuli ya n'ọkwa.

Ndị na-akpọ ọrụ nwere ike itinye array `transcript.cues` nke nhọrọ n'akụkụ vidiyo
a na-akwado mgbe ha nwerelarị ederede dabara n'oge. Cue ọ bụla ga-enwe `text`, oge
`start`/`end` nwere uru njedebe doro anya nke dị n'ime ogologo oge a nyochara, na
`source` dị na ndepụta e kwere (`client`, `embedded`, ma ọ bụ `audio-bridge`); uru ndabara
nke `confidence` bụ `1`, ọ ga-anọrịrịkwa n'etiti `0` na `1`. A na-ejikọta cue ndị bụ
oyiri kpọmkwem ka ha bụrụ otu.
OmniRoute anaghị ebido ntụgharị olu gaa n'ederede site na metadata a: a na-edepụta cue ndị
a kwadoro n'ime nsonaazụ akọwara, tinyere isi iyi, ntụkwasị obi, na etiti oge ha, ma
gosipụta ha dịka ihe a hụrụ a na-atụghịkwasị obi n'akụkụ nkọwa fremụ. A na-ajụ ederede
na-ezighi ezi, nke gafere oke oge, ma ọ bụ nke enweghị ebe o si bịa kama ịgwakọta ya n'usoro
nkọwa onyonyo. Ọwa abụọ nke ederede ntụgharị dị n'ahụ arịrịọ na-eme ka ebe o si bịa
e nyere bụrụ `client`, gụnyere akara `embedded` ma ọ bụ `audio-bridge`
nke onye zitere ya kwuru n'onwe ya. Naanị nkwụnye nke sava nwe nwere ike itinye akara
ndị ahụ a tụkwasịrị obi site na argument `trustedSource` nke dị naanị na koodu; oghere
JSON nke arịrịọ enweghị ike iru argument ahụ. Ederede ntụgharị ka bụ ọdịnaya sitere na
mgbasa ozi a na-atụghịkwasị obi, n'agbanyeghị ebe o si bịa, ọ gaghịkwa ekpebi ikike mgbe ọ bụla.

Onye na-akpọ ọrụ nwere nkà dị elu nwere ike ịnye egwu `audioTranscript` maka otu vidiyo ahụ;
a na-ewere ya dịka ederede onye ahịa nyere, ọ bụghị ihe akaebe na sava tụgharịrị olu gaa n'ederede.
Ebe njikọ ahụ na-ahazi ihe a hụrụ n'anya na ihe a nụrụ n'olu n'okpuru
otu oge njedebe na otu mgbaàmà ịkagbu, na-ahazi ha n'otu ahịrị oge, na-ejikọta
oyiri kpọmkwem ka ha bụrụ otu, ma na-akọ nsonaazụ ezughị ezu mgbe naanị otu akụkụ gara nke ọma.
`audioTranscript` na-ezighi ezi na-eme ka a laghachi na nsonaazụ ezughị ezu ahụ — a na-edobe
nkọwa anya, ngalaba ọdịyo na-edekwa koodu ọdịda e wepụchara ozi dị nro —
kama ime ka vidiyo dum daa. A na-echekwa nnweta nke ngalaba ọ bụla, ọkọlọtọ nsonaazụ ezughị ezu,
na koodu ọdịda e wepụchara ozi dị nro n'ime nsonaazụ akọwara, n'ime
metadata nchedo (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), n'ime metadata cache nsonaazụ, nakwa n'ime ihe ngụ
njikọ nke akwa njikọ ahụ. Ụzọ Video Bridge ndabara anaghị akpọ ọrụ ntụgharị okwu gaa n'ederede
ma ọ bụ budata oyiri mgbasa ozi nke abụọ; na-enweghị egwu ahụ a nyere kpọmkwem, ọ na-anọgide
na-arụ ọrụ naanị na vidiyo.

**Idobe transcript (#12150 P1).** Nke a na-emetụta na-akpaghị aka mgbe ọ bụla
Video Bridge (nke a na-ahọrọkwa ịgbanye n'onwe ya) gosipụtara otu akụkụ transcript — enweghị ọkọlọtọ
idobe dị iche. Mgbe arịrịọ gosipụtara akụkụ transcript ọ bụla (nke onye na-akpọ kwupụtara dị ka
`transcript` ma ọ bụ `audioTranscript` ejikọtara ọnụ), usoro nche na-akara ya
`videoBridgeObserved` ma mepụta ụdị ndò nke nkọwa vidio e zochiri ọdịnaya ya —
ụdị ngosi yiri nke mbụ nke e ji
`[redacted-video-transcript]` dochie ederede nweere onwe ya dị n'akụkụ ọ bụla, nke a na-emepụta site n'ịgbanwe mpaghara akụkụ ahaziri ahazi
tupu ejikọta eriri ederede ahụ (ọ bụghị site n'ịtụle ederede a gbatịpụrụ ka ọ bụrụ otu, ka ọdịnaya akụkụ ọ bụla ghara
ịfọdụrụ — ma ọ bụ nke e ji ebuso usoro agha ma ọ bụ nke nkịtị, gụnyere ọdịnaya nwere `]` dịka
`[inaudible]`/`[music]`). Ahụ arịrịọ dị na ndekọ oku echekwara na-eji
ụdị ndò ahụ e zochiri ọdịnaya ya dochie akụkụ ederede ọ bụla sitere na vidio, site n'iji nha anya
ọdịnaya chọta ya; a na-agụgharị ebe mgbakwasị `fullText` site n'ibu data usoro nche
e mechara tupu oku, ka nchọta ahụ ka na-aga nke ọma mgbe usoro nche ndị ọzọ sochirinụ (ihe na-ezo PII na
nkọwa nzere, ọkwa mkpa 10/95) degharịrị ederede nkọwa ahụ n'ebe ọ dị na
mgbe ntinye ntuziaka sistemụ/nnyefe/ebe nchekwa gbanwere nhazi usoro ozi ahụ.
Ahụ a na-ezigara ihe nlereanya dị n'elu anaghị agbanwe. Arịrịọ a hụrụ na-etinyekwa
enweghị ihe n'Ebe Nchekwa na-adịgide adịgide (a na-amafere mwepụta sitere n'arịrịọ na
nzaghachi), ka nzaghachi ihe nlereanya n'onwe ya ghara ikwughachi ederede transcript n'Ebe Nchekwa.

**Mpaghara vidio mbụ (#12430).** Mgbe agbanyere bridge ma amaghị ma nkwado vidio nwa afọ dị ma ọ bụ na ọ dịghị, mpaghara `transcript`/`audioTranscript` akọwapụtara na-emekwa ka `videoBridgeObserved` rụọ ọrụ, ọbụna mgbe nkọwa dara ma ọ bụ mgbe oke `maxVideos` ruru. `null` na eriri ederede efu sokwa; mpaghara ndị na-adịghị adị na metadata na-abụghị nke vidio esoghị. Mbipụta echekwara na-ezo ọdịnaya mpaghara ndị a ma ọ bụ na-ahapụ arịrịọ ahụ kpamkpam, a na-amaferekwa cache/Ebe Nchekwa.

N'ụzọ ndabere ndị ahụ, akụkụ ziri ezi nke onye na-akpọ nyere na-aghọ akụkụ `text`/`input_text`
akwadoro kama ịbụ mpaghara onye na-eweta nke na-esoghị ọkọlọtọ. Usoro abụọ e nyere n'arịrịọ
ka bụ ihe `client` hụrụ nke a na-atụkwasịghị obi, yana ịdọ aka ná ntị doro anya na a kọwaghị vidio
ahụ nakwa na a tụnyereghị akara oge na mgbasa ozi ahụ iji chọpụta izi ezi ha. Oke dị ugbu a nke
akụkụ 256/64-KiB n'ozuzu na oke nke akụkụ ọ bụla na-emetụta usoro abụọ ahụ ọnụ;
akara oge ga-adabarịrị n'oke sekọnd 600 nke broker na windo elekwasị anya ọ bụla
e nyere. A na-atụfu usoro na-ezighi ezi, a naghị eziga ha dị ka ederede ọ bụla; a ka nwere ike
iji usoro ibe ya ziri ezi ma ọ bụrụ na agafeghị oke ha jikọtara ọnụ. Mpaghara null/efu
anaghị etinye ederede. Ụzọ ndabere a anaghị agbakwunye iweta mgbasa ozi ma ọ bụ ime transcript.
A na-ewepụ mpaghara ndọtị transcript n'ihe na-ebu vidio ndabere na n'ihe
`video_url`/`source` ya. Ndepụta ikike usoro nnyefe OpenAI ka siri ike; ihe na-ebu vidio
nke amaghị nkwado nwa afọ ha ka dị, ebe ebe a na-eziga nke a maara na ha na-akwado naanị ederede na-edobe akara nchebe.
Ụdị ndò ahaziri ahazi e zochiri ọdịnaya ha na-echebe ederede transcript agbakwunyere, ebe
arịrịọ mbụ nke onye na-akpọ nwe ya anaghị agbanwe. Ebe a na-eziga ndị nwere nkwado nwa afọ na
bridge ndị agbanyụghị na-edobe omume ịmafere ha dị ugbu a.

Mbipụta ndị ọzọ echekwara na-eji otu mgbama arịrịọ a hụrụ ahụ. Onyonyo ọnọdụ arịrịọ client mbụ
tupu usoro nche, arịrịọ na-echere n'ime ebe nchekwa nwa oge, na ndekọ arịrịọ a jụrụ n'oge
na-eji nhazi dochie mpaghara transcript n'akụkụ vidio;
a na-ezo ọdịnaya ntuziaka eriri ederede nke ọkwa usoro nhazi na nnyefe onodu mepụtara
n'ebe a na-echekwa ahụ arịrịọ. Akara `video_content_removed` echekwara
na-eme ka ịga n'ihu site na `previous_response_id` jụ ịrụ ọrụ maka nchekwa kama ịrụghachi
ederede a kpachaara anya tụfuo. Ọ bụrụ na arịrịọ a hụrụ efunahụ
ụdị ndò e zochiri ọdịnaya nke akụkụ ya tupu ndekọ, ma ọ bụ ọbụna na otu n'ime ọtụtụ ụdị ndò vidio
adabaghị mgbe mgbanwe arịrịọ ndị ọzọ gachara, a na-ahapụ ahụ arịrịọ echekwara
kpamkpam kama idobe transcript e zochiri naanị ụfọdụ ọdịnaya ya.

Maka arịrịọ a hụrụ, nzaghachi ihe nlereanya nwere ike ihota akụkụ ọ bụla nke
transcript na-enweghị oke akụkụ ahaziri ahazi. N'ihi ya, a na-eji akara na-egosi ịhapụ ọdịnaya dochie
`responseBody` ya dị na ndekọ oku echekwara; a naghị edobe ihe ndekọ zuru ezu nke
usoro nhazi (nke nwere ike ịgụnye ahụ sitere n'elu/client na iberibe iyi data).
Cache nke semantic, idempotency, na ịkpọghachi usoro echiche na-amafere
ịgụ na ide maka arịrịọ ahụ. Arịrịọ onye na-eweta na nzaghachi client na-ahụ
anaghị agbanwe. A na-ewepụ bait keepalive mbụ n'ebe nchekwa nwa oge
mgbe a hapụrụ ihe ndekọ zuru ezu ahụ. Ịdọ aka ná ntị Kiro banyere EventStream na-ezighi ezi
na-akọ naanị ọnụọgụ bait ibu data, ọ naghị akọ ọdịnaya ya ma ọ bụ njehie mbụ nke
ihe nyocha JSON.
Nke a anaghị ekwu na enyochala nchọpụta nsogbu ọ bụla nke onye na-eweta/ngwa mgbakwunye na-enweghị njikọ;
a na-esochi nyocha sara mbara nke ebe nchekwa ndị ọzọ na #11658.

Usoro ndụ dị n'ime `/api/modality-bridge/video/drilldown` bụ ntọala cache dị iche,
nke ejiri loopback/token nyochaa ikike. Ọrụ ọ bụla chọkwara
ID onye isi nke ọkọlọtọ nke na-adịghị ekpughe ihe ọ pụtara. Tupu agbanye onye na-akpọ na gburugburu mmepụta, ọ ga-enwerịrị
ID ahụ site na tenant enyochala ikike ya, ọ gaghịkwa eziga
uru client họpụtara. Igodo cache na-ejikọta onye isi ahụ na ID nnọkọ na
ID ntụaka vidio nke ọkọlọtọ, na-echekwa naanị igodo sitere na SHA-256 ha, ma na-amachi ịgụ
na ihichapụ n'otu onye isi ahụ. Cache na-echekwa ruo frem JPEG 16
e wepụtara maka ntinye ọ bụla, na-eme ka ha kubie ume mgbe nkeji iri gasịrị, ma na-akwado ịgụ
`start`/`end` nwere oke ma ọ bụ ihichapụ nnọkọ n'ụzọ doro anya.

A na-amachi onye isi ọ bụla na ntinye 16 na 64 MiB nke data JPEG nke ọkọlọtọ. Oke ndị
ahụ nọọrọ onwe ha site n'oke zuru ụwa ọnụ nke ntinye 64/256 MiB: nrụgide oke onye isi
na-ebu ụzọ chụpụ naanị ntinye onye isi ahụ nke a na-ejighị n'oge kacha anya tupu a tụlee
ịchụpụ site na LRU zuru ụwa ọnụ. A na-ekpochapụ ntinye kubiela ume n'ịgụkọ nke onye isi na
nke zuru ụwa ọnụ mgbe cache na-arụ ọrụ, ebe ịkagbu na ọdịda nkwado izi ezi
anaghị echekwa nnọchi na-ezughị ezu.

Cache na-ajụ Base64 na-abụghị nke canonical, padding karịrị akarị, mgbasa ozi na-abụghị JPEG, JPEG ndị emebiri ma ọ bụ
ndị ebipụrụ, na JPEG ndị na-ebute ịdọ aka ná ntị mgbe `sharp`
na-eme decode nke onyonyo dum n'ime oke enyere. Ọ na-emegharị onyonyo ọ bụla a nabatara ka ọ bụrụ JPEG canonical, na-enweta obosara na ịdị elu
site na byte ndị e mere decode kama ịtụkwasị obi n'ubi ndị onye na-akpọ nyere, ma na-atụfu byte
polyglot ọ bụla dị n'azụ kama idowe ha. Naanị buffer canonical a pịakọtara nke dị n'ime oke
ka a na-agụ megide oke abụọ ahụ. Oke JSON a na-ebufe gụnyere ibu mgbakwunye Base64 maka oke 32 MiB
nke ntinye e mere decode. Nrụpụta ọ bụla
echekwara na-edekọ ụdị JPEG/mkpebi onyonyo ya a kwadoro, iwu ịhọrọ sample,
ụdị nrụpụta, oge e kere ya, hash ọdịnaya sava gbakọrọ, na ntụaka nne na nna
e mere hash yana hash ọdịnaya nne na nna nke onye na-akpọ a tụkwasịrị obi nyere. A na-enyocha nkwụsị
n'etiti usoro decode/hash asynchronous tupu ime commit cache nke atomic.

Akụkụ ọrụ a ejikọbeghị onye na-emepụta ihe na gburugburu mmepụta na route ahụ, ọ naghịkwa
enye nhọrọ variant ndị nwere mkpebi onyonyo dị iche iche. Ya mere ụzọ arịrịọ Video Bridge nke na-arụ ọrụ n'enweghị mgbanwe a na-ahụ anya
anaghị etinye ọrụ mgbakwunye ọ bụla, ebe nrụpụta principal ejikọtara na tenant na
usoro ndụ FU-08 dum maka ọtụtụ mkpebi onyonyo ka bụ ọrụ nsonye akọwapụtara nke ọma kama
ịkọwa ha dị ka omume emechara.

A na-etinye nkọwa na frame n'otu n'otu site na model Video ahaziri. Nhọrọ nnọchi
Video tọgbọ chakoo na-eketa ntọala Vision; ọ bụrụ na ha abụọ tọgbọ chakoo, auto-router
Vision na-ahọrọ model nwere ike ịhụ onyonyo nke a ga-eji n'ezie. Nkọwa ndị gara nke ọma
na-eji prefix kwụsiri ike `[Video description:` dochie akụkụ mbụ ahụ; prefix ahụ
na-egosikwa ederede ahụ dị ka ihe a hụrụ sitere na mgbasa ozi a na-atụkwasịghị obi ma na-agwa model ndị na-esote
ka ha ghara ịgbaso ntụziaka dị na mgbasa ozi ahụ. Igodo cache nkọwa frame
gụnyere byte JPEG, prompt, timestamp, na model a na-eji n'ezie; naanị nkọwa ndị gara nke ọma
ka a na-echekwa na cache. Ihe ndị dị na cache na-edobe model onye nrụpụta mere nke ọma n'ezie,
gụnyere model fallback; bridge na-akọ `mixed` mgbe model dị iche iche
mepụtara frame dị iche iche. Mgbe achọtara ihe na cache, a na-ejigharị njirimara onye nrụpụta ahụ
kama ịkpọgharị ya dị ka atụmatụ routing a rịọrọ. Cache nsonaazụ vidiyo dum
na-eji ntinye ọ bụla na-agbanwe mmepụta dị ka igodo — prompt, model
a na-eji n'ezie, iwu ịhọrọ sample, ọnụọgụ frame, ọnọdụ nyocha semantic, akara mkpịsị aka SHA-256
nke ntụnye uche etinyere n'ụdị ọkọlọtọ, windo uche, `transcript`,
`audioTranscript`, na flag contact-sheet — ya mere ịgbanwe nke ọ bụla n'ime
akụkụ ndị ahụ pụtara na a gaghị ahụ ihe kwekọrọ na cache, ọ bụghị iji ihe ochie eme ihe ọzọ. Ụdị iwu iwepụ oyiri anya,
ọnụ ụzọ ya, na ọnụọgụ frame a ga-atụle nke nwere oke sokwa n'ụzọ doro anya na
igodo cache nsonaazụ na metadata; ya mere mgbanwe iwu enweghị ike iji nkọwa vidiyo dum
ochie eme ihe ọzọ. Metadata cache nsonaazụ v4 na-edobe ọnọdụ na
akara mkpịsị aka, ọ dịghị edobe ọrụ onye ọrụ nyere n'ụdị mbụ. Metadata guardrail na-akọ ma
ọnọdụ nyocha a rịọrọ ma nke a na-eji n'ezie; ọnọdụ `focused` a rịọrọ na-enweghị
ederede onye ọrụ bara uru ka a na-akọ dị ka `full` n'ezie.

Guardrail na-ewepụta akụkụ vidiyo ọ bụla akwadoro mana ọ naghị akọwa ihe karịrị
`modalityBridgeVideoMaxVideos`. Maka ebe a na-eziga nke egosipụtara na ọ nwere
`supportsVideo === false`, vidiyo ndị dara na ndị karịrị oke na-aghọ akara ederede nchekwa doro anya
ka vidiyo mbụ ọ bụla ghara ịfọdụ. Mgbe amabeghị ikike ya, akụkụ ndị ahụ
na-edobe ihe bu vidiyo ha; transcript fallback ọ bụla na-agbaso ntụgharị ederede nwere oke
a kọwara n'elu. Ebe a na-eziga nwere `supportsVideo === true` na-agafe bridge.
Mgbama ịkwụsị arịrịọ nke client na-agbasa ruo n'ibudata, ahịrị broker,
subprocess, na oku nkọwa; nkwụsị na-akwụsị ọrụ n'etiti vidiyo, ọ dịghịkwa ekwe ka
mgbasa ozi mbụ gafee mgbe ọdịda mere.

A na-echekwa ntọala oge ọrụ na DB ma jiri Zod kwado ha:

| Igodo                               | Ndabara     | Oke / omume                                                                                                     |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Oge ọrụ nhọrọ, a ga-ahọrọ ịgbanye ya                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-echekwa nkọwa izugbe; `focused` na-eji ọnọdụ onye ọrụ kacha ọhụrụ nwere oke, nke a na-atụkwasịghị obi |
| `modalityBridgeVideoModel`          | `""`        | Keta model Vision Bridge                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ `segment_aware` dabere na oke nha; ọdịda detector na-alaghachi na `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

A na-amachi uru oge nkwụsị Video ochie echekwara nke karịrị sekọnd 120 ka ha kwekọọ na
oge ikpeazụ broker; a na-ajụ ide ntọala ọhụrụ karịrị oke ahụ.
`GET /api/modality-bridge/video/runtime` chọrọ nkwenye ebe loopback mpaghara nwere stampụ a tụkwasịrị obi
tupu nyocha njirimara ma ọ bụ nyocha oge ọrụ, wee chọọ nyocha njirimara
nchịkwa. Ọ na-eweghachi naanị `available`, ụdị FFmpeg/ffprobe e mere ka ha dị ọcha, na ihe kpatara
a kapịrị ọnụ mgbe oge ọrụ adịghị. Endpoint mmịpụta nke ime abụghị
API ọha maka bulite faịlụ: mgbe ahịrị jupụtara, ọ na-eweghachi `503` yana `Retry-After`, mgbe onye na-akpọ
kwụsịrị njikọ, ọ na-eweghachi `499`, mgbe oge ikpeazụ broker a kapịrị ọnụ ruru, ọ na-eweghachi `504`. Nzaghachi ndị a tụgharịrị na-agbakwunye
`video->text;model=<visionModel>;parts=<videos>` na header etiti
`x-omniroute-modality-bridge` n'ewepụghị akụkụ Vision ma ọ bụ Audio.

### Ihe na-ekpuchi PII (`piiMasker.ts`)

Na-arụ ọrụ na usoro **abụọ ahụ**.

- **`preCall`** na-emepụta oyiri payload, na-agagharị na `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ndị bụ eriri ederede nkịtị), ma na-etinye `processPII()` (sitere na
  `@/shared/utils/inputSanitizer`) n’ubi `content`/`text` ndị bụ eriri ederede. Mgbe
  `PII_REDACTION_ENABLED=true`, a na-ekpuchi PII achọpụtara na payload
  a na-ezipụ. Nke a anaghị adabere na `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị
  iwu ntinye ntụziaka aghụghọ). Mgbe mkpuchi agbanyụghị, oku ahụ na-edekọ ọnụọgụ nchọpụta
  n’edegharịghị ọdịnaya.
- **`postCall`** na-emepụta oyiri nzaghachi ruo n’ime ya niile, na-agba `sanitizePIIResponse()` yana
  ihe mkpuchi maka ọdịdị Responses API (`maskResponsesOutput` — na-ekpuchi
  `output_text` na `output[].content[].text`). Ọ bụrụ na e kpuchie ihe ọ bụla,
  nzaghachi a gbanwere na-anọchi nke mbụ.

Usoro nchebe a anaghị egbochi ihe ọ bụla; ọ na-agbakwunye naanị nkọwa (`meta.detections`,
`meta.redacted`) ma ọ bụ degharịa ọdịnaya.

#### Nhọrọ dabere n’ụdị, ụkpụrụ ahaziri iche na ihe ngụ nchọpụta

**Ogwe njikwa → Ntọala → Nchekwa → Mkpuchi PII** na-ahọrọ _ihe_ a ga-ekpuchi. Ọ
naghị agbanye mkpuchi: nke ahụ ka bụ ọrụ `PII_REDACTION_ENABLED` (arịrịọ) na
`PII_RESPONSE_SANITIZATION` (nzaghachi + SSE), ndị abụọ agbanyụghị na ndabara.

- **Nhọrọ dabere n’ụdị** — e depụtara njirimara ndị etinyere n’ime ya na
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ịhapụ ya n’atọghị pụtara
  ụdị niile (omume ọ na-akpa tupu ntọala a adị). Ụkpụrụ `ssn_us` nke
  injin arịrịọ na-adaba na `ssn`. Ndebiri (Nke pere mpe, Ọkọlọtọ, Ego,
  Brazil, USA, Zuru ezu) na-akanye naanị igbe nhọrọ na UI.
- **Ụkpụrụ ahaziri iche** — ihe ruru ụkpụrụ regex ma ọ bụ wildcard 20 (`*` = ihe ruru mkpụrụedemede 64
  na-abụghị oghere ọcha, `?` = otu). Ihe dabara na ha na-aghọ `[CUSTOM_REDACTED]`.
  Ụkpụrụ ọ bụla na-agafe na `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): mkpụrụedemede 500 kacha elu, ọkọlọtọ ejedebere
  na `g i m s u`, ọ ga-enwe ike ịchịkọta, ọ ga-agafe `safe-regex` (nlọghachi azụ
  nwere ike ịkpata nnukwu nsogbu), ọ gaghịkwa adaba na eriri ederede efu ma ọ bụ ihe nnọchi mkpuchi.
  A na-ajụ ụkpụrụ dara ule mgbe a na-echekwa ya na mgbe a na-anwale ya, a na-awụfekwa ahịrị echekwara
  nke dara ule n’oge mmemme na-agba kama ịchịkọta ya. Ụkpụrụ ahaziri iche na-arụ ọrụ naanị
  mgbe agbanyere mkpuchi.
- **Ihe ngụ nchọpụta** — ọnụọgụ dabere n’ụdị (ọ bụghị uru ndị dabara), nke a na-edobe na
  ebe nchekwa ma tọgharịa mgbe a malitegharịrị (`src/lib/pii/piiDetectionStats.ts`). Ha na-
  abawanye naanị mgbe agbanyere mkpuchi.

Ntọala ndị a dị na tebụl `key_value` (oghere aha `pii_settings`,
`src/lib/db/piiSettings.ts`) ma a na-agụ ha site na cache nke sekọnd 1. API:

| Usoro  | Ụzọ                      | Ebumnuche                                                                          |
| ------ | ------------------------ | ---------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Ọnọdụ ọkọlọtọ, `enabledTypes`, `customPatterns`, ihe ngụ nchọpụta                  |
| `PUT`  | `/api/settings/pii`      | Dochie `enabledTypes` (`null` = niile) na/ma ọ bụ `customPatterns`                 |
| `POST` | `/api/settings/pii/test` | Nwalee otu ụkpụrụ megide ihe atụ na-erughị ma ọ bụ hà 8 KB n’echekwaghị ihe ọ bụla |

Ha atọ chọrọ nyocha njirimara na ikike njikwa ma na-enyocha ahụ arịrịọ site na Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Ntinye ntụziaka aghụghọ (`promptInjection.ts`)

Na-achọpụta usoro aghụghọ dị n’ọdịnaya onye ọrụ nyere ma na-amanye
iwu ahaziri. Ihe mgbanwe gburugburu na nhọrọ constructor
na-achịkwa omume ya:

| Ntọala      | Ihe mgbanwe gburugburu                                                                                 | Ndabara | Mmetụta                                                                                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agbanyere   | `INPUT_SANITIZER_ENABLED`                                                                              | `true`  | Mgbe ọ bụ `false`, usoro nchebe na-akwụsị ozugbo.                                                                                                                                                                |
| Ụdị ọrụ     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`  | Iwu ntinye aghụghọ: `block`, `warn`, ma ọ bụ `log`. (A na-anabata `redact` maka ndakọrịta na ụdị ochie mana ọ **naghị** ewepụ ederede ntinye aghụghọ; `PII_REDACTION_ENABLED` na-achịkwa idegharị PII n’arịrịọ.) |
| Oke mgbochi | nhọrọ `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha ọzọ `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ọkwa ịdị njọ kacha nta achọrọ iji gbochie. Na ndabara, ọkwa etiti bụ maka nlekota naanị.                                                                                                                         |

**Usoro ụzọ nke ụdị ọrụ** (`getMode`): `options.mode` nke onye kpọrọ ya →
**Ntọala ọkọlọtọ njirimara na DB nke na-anọchi nke ọzọ** maka `INJECTION_GUARD_MODE` (Ogwe njikwa → Ntọala →
Ọkọlọtọ Njirimara) → ihe mgbanwe gburugburu `INJECTION_GUARD_MODE` → ihe mgbanwe gburugburu `INPUT_SANITIZER_MODE` →
`warn`. Ya mere, ntọala sitere n’ogwe njikwa na-ebute ụzọ karịa ihe mgbanwe gburugburu, nke mere na UI Ọkọlọtọ
Njirimara na-achịkwa usoro nchebe na-agba ozugbo (enweghị mkpa ịmalitegharị). Ịgụ DB nwere nchekwa ma ọ daa:
ọ bụrụ na njehie emee, usoro nchebe na-alaghachi n’omume dabere n’ihe mgbanwe gburugburu, mgbe
enweghịkwa ntọala nnọchi, omume ya bụ otu ihe ahụ na ịhọrọ site naanị n’ihe mgbanwe gburugburu.

Isi mmalite nchọpụta:

1. `sanitizeRequest()` sitere na `@/shared/utils/inputSanitizer` (otu ndị nchọpụta
   a na-ejikọ ọnụ nke a na-ejikwa n’ebe ndị ọzọ n’usoro nhazi).
2. `DEFAULT_GUARD_PATTERNS` etinyere n’ime ya (ugbu a `system_override_inline` na
   `markdown_system_block`, ha abụọ nwere ọkwa ịdị njọ `high`).
3. `customPatterns` nhọrọ nke a na-ebufe site na nhọrọ constructor (eriri ederede, regex,
   ma ọ bụ ndekọ `{ name, pattern, severity }`).

Mgbe `mode === "block"` **na** ọ dịkarịa ala otu nchọpụta ruru oke
ogo ịdị njọ, `preCall` na-eweghachi `{ block: true, message: "Request rejected:
suspicious content detected" }`. Na ọnọdụ `warn`/`log`, usoro nchebe na-edekọ ihe mana
ọ na-ekwe ka oku ahụ gaa n’ihu. A na-ebupụkwa ọrụ enyemaka nkekọrịta `evaluatePromptInjection()`
maka ndị na-akpọ ya chọrọ inyocha ntinye iwu n’agaghị site na ndekọ ahụ.

**Oke nyocha (v3.8.20):** ihe nchọpụta ahụ na-enyocha naanị **16 KB mbụ** nke
ederede ntinye iwu ejikọtara ọnụ — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (bait 16 384) dị na
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` ma
`evaluatePromptInjection()` na-eme `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ha agbaa
usoro ntụgharị ụkpụrụ. Ntuziaka ịtinye iwu ọjọọ na-adị nso na mmalite ntinye, ya mere nke a
na-amachi ojiji CPU/GC nke regex na data nwere ọtụtụ narị KB n’emeghị ka nchọpụta daa mbà (lee
#3932, #4041).

### Ihe Nkpuchi Nzere Nnweta (`credentialMasker.ts`)

Ọ na-arụ ọrụ n’usoro **abụọ ahụ**, bụrụ nke ikpeazụ na agbụ ndabara (ọkwa mkpa `95`). Ọ na-ekpuchi
ụkpụrụ igodo API / token nzuzo ndị a maara nke ọma n’ime data a na-ezipụ (ọdịnaya
ozi, arụmụka oku ngwaọrụ, nsonaazụ ngwaọrụ) **na** nzaghachi onye na-eweta ọrụ, ka
nzere nnweta a mapanyere n’ime ntinye iwu (ma ọ bụ nke nsonaazụ ngwaọrụ kwughachiri) ghara ịpụ
ruo n’aka onye na-eweta ọrụ dị n’elu ma ọ bụ laghachi n’aka onye ahịa.

- **Naanị ma a họrọ ịgbanye ya**, otu ụkpụrụ ahụ dị ka ikpuchi PII (nke dị nso na Iwu Siri Ike #20):
  a na-agbanyụ ya ma ọ bụrụ na `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true` adịghị. Mgbe agbanyụrụ ya, usoro nchebe anaghị eme ihe ọ bụla —
  ọ naghị egbochi ihe ma ọ bụ degharịa ihe.
- `redactCredentials()` na-agagharị n’osisi data/nzaghachi dum (`walkValue()`,
  nke na-echebe megide mmetọ prototype na okirikiri site na `WeakSet`) ma jiri
  ihe nnọchi `[REDACTED:<type>]` dochie ihe ndị dabara, na-emepụta oyiri naanị ngalaba ndị
  gbanwere n’ezie.
- `CREDENTIAL_PATTERNS` gụnyere igodo ndị na-eweta LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), igodo ịkwụ ụgwọ (Stripe, Square), igodo igwe ojii
  (igodo nnweta AWS, Twilio, SendGrid, Mailgun), igodo nzuzo / JWT,
  eriri njikọ nwere nzere nnweta (`mongodb://user:pass@...`, wdg.), na
  ụkpụrụ izugbe maka uru nkụnye `Authorization`/`x-api-key`/`api-key`/`apikey`.
  A na-ekpuchi igodo ndị yiri nkụnye (`authorization`, `x-api-key`, `api-key`,
  `apikey`) dabere na nhazi ha (naanị uru ahụ, a na-echekwa nganiihu usoro dịka
  `Bearer `/`Basic `) kama iji regex ederede izugbe.
- Usoro nchebe anaghị egbochi ihe; naanị ihe ọ na-eme bụ idegharị (`modifiedPayload` /
  `modifiedResponse`) na ịgbakwunye nkọwa (`meta.credentialsRedacted`, `meta.count`).

Nchedo megide nlọghachi njehie: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ntọala (`base.ts`)

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
  block?: boolean; // true na-akwụsị usoro ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi ya iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi ya iji degharịa nzaghachi ahụ
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

Usoro nche na-egosi "enweghị mgbanwe" site n'iweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-eji uru ọhụrụ dochie
uru na-agafe n'usoro ahụ maka usoro nche ndị na-esote.
`signal?: AbortSignal` na-ebufe okirikiri ndụ nke onye na-akpọ oku n'ime usoro nche. Ịkagbu arịrịọ bụ ọnọdụ pụrụ iche e kpachaara anya kwe ka ọ gafere n'agbanyeghị ọdịda: àkwà njikọ mgbasa ozi na-akwụsị ọrụ ma hichaa ihe ndị metụtara ya n'eweghachighị mgbasa ozi a na-ahazibeghị na ebe a na-ezigara ya nke a maara na ọ naghị akwado ya.

## Ebe Ndebanye (`registry.ts`)

Nanị ihe atụ `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwunye usoro nche (ma ọ bụ dochie ya site n'aha ahaziri ahazi) ma
  haziekwa ha n'usoro `priority` site na nke kacha nta ruo nke kacha ukwuu.
- `clear()` / `list()` — ngwaọrụ enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe usoro nche ndị na-arụ ọrụ, na-ebufe
  data arịrịọ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n'akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ dị ugbu a ma, ọ bụrụ na achọrọ,
  debanyegharịa ntọala ndabara iji kewapụ ule nke ọma.

Ndị na-eme usoro abụọ a na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ usoro ndekọ `GuardrailExecutionResult` nke gụnyere
ogige `blocked`, `skipped`, `modified`, `error`, na `meta` maka usoro nche ọ bụla,
nke bara uru maka ịchọpụta ihe mere.

### Ịgbanyụ Usoro Nche Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta
ndepụta aha usoro nche na-enweghị aha ugboro abụọ nke a ga-amapụ maka
arịrịọ dị ugbu a. E nwere ụzọ ise, a na-agụ ha n'usoro a ma jikọta ha n'otu ndepụta
(nke pụtara mbụ ka a na-edebe mgbe a na-ewepụ ihe ugboro abụọ):

1. `apiKeyInfo.disabledGuardrails`
2. Ahụ arịrịọ `disabledGuardrails` (n'ọkwa kacha elu)
3. Ahụ arịrịọ `metadata.disabledGuardrails` (naanị mgbe `metadata` bụ ihe nwere ogige)
4. Nkụnye `x-omniroute-disabled-guardrails`
5. Nkụnye ochie `x-disabled-guardrails`

A na-ejikọta ụzọ ise niile, gụnyere nkụnye abụọ ahụ: iziga ma
`x-omniroute-disabled-guardrails` ma `x-disabled-guardrails` na-eme ka a mapụ aha niile dị
na ndepụta ha abụọ, nkụnye ọgbara ọhụrụ na-enweghị ihe dị na ya anaghịzikwa ezochi nke ochie
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), edoziri na
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Uru ndị a nwere ike ịbụ usoro eriri ederede ma ọ bụ otu eriri ederede e ji rikọm kewaa; a na-ewepụ oghere dị n'akụkụ aha
ma hazie ha ka ha bụrụ mkpụrụedemede nta e ji akara njikọ kewaa (`pii_masker` → `pii-masker`), a na-ewepụkwa
ndenye efu. A na-ebufe nsonaazụ ahụ site na `context.disabledGuardrails`
gaa n'ebe ndebanye, nke na-amapụ usoro nche ndị dabara na ya (`skipped: true` na `results`).

Ndepụta mgbanyụ ahụ na-emetụta naanị **ebe ndebanye**. Ụdị `block` maka ntinye ntụziaka ọjọọ bụ
oke nchekwa a ga-agbasorịrị: sọftụwia etiti nche ntinye ntụziaka
(`src/middleware/promptInjectionGuard.ts`) na-akpọ `evaluatePromptInjection()`
na-enweghị ndepụta mgbanyụ ọ bụla onye na-akpọ oku na-achịkwa (e wepụrụ oku
`resolveDisabledGuardrails({ body })` na-adịghịzi aba uru nke ọ na-akpọbu na
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), ya mere a ka na-ajụ arịrịọ
na-agbanyụ `prompt-injection` n'ụdị `block`. Nke a bụ
otú e si chepụta ya. Ọ bụ onye na-akpọ oku na-achịkwa ụzọ mgbanyụ ndị ahụ (ahụ arịrịọ,
metadata, nkụnye), onye na-akpọ oku ekwesịghịkwa inwe ike ịgbanyụ njikwa nchekwa
onye na-arụ ọrụ setịpụrụ
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Njikọta nkụnye
sitere na [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
na-agbanwe naanị usoro nche ebe ndebanye a na-amapụ; ọ naghị ekwe ka ngwa ahịa
gafee sọftụwia etiti ahụ. A na-esochi atumatu usoro nche a ga-agbasorịrị
maka igodo ọ bụla na otu ọ bụla na v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Lee [Ihe ọ na-ekpuchi na oke ya](#coverage-and-limits).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts` (ụzọ ezinụlọ nkata ndị e depụtara n'okpuru
[Mkpuchi na oke](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-awụli site na igodo API, ahụ arịrịọ,
   na nkụnye.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-eme ihe nchebe n'usoro
   mkpa na-arị elu:
   - A na-edekọ ihe nchebe ndị a gbanyụrụ dị ka `skipped`.
   - `preCall` nke ihe nchebe ọ bụla nwere ike idegharị data ezigara site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, onye njikwa ahụ eweghachikwa
     nzaghachi njụ nke ihe nchebe.
3. Data ezigara (nke nwere ike ịbụ nke e degharịrị) na-abanye na nhọpụta ụzọ combo na izipu
   gaa na sava dị n'elu.
4. **Naanị nzaghachi na-abụghị nke nkwanye:** mgbe a chịkọtara nzaghachi ahụ,
   `guardrailRegistry.runPostCallHooks(...)` na-eme otu usoro ahụ na
   nzaghachi. `block: true` ebe a na-atụfu nzaghachi sitere na sava dị n'elu ma weghachite HTTP 400. Nzaghachi a na-enuba na-awụli nzọụkwụ a kpamkpam.

A na-edekọ ihe nchebe ndị na-atụpụ njehie na `error: <message>` ma dekọọ ha site na
`logger.warn`, mana usoro ahụ na-aga n'ihu — e mere ya ka ọ hapụ ka ọrụ gaa n'ihu ma njehie mee.

## Mkpuchi na oke

Ejikọtara ndekọ ihe nchebe na usoro nhazi nkata naanị. A na-eji ule ndị a
akwado oke ndị a: `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` na
`tests/unit/guardrail-pipeline-characterization.test.ts`; gbanwee ule ndị ahụ
n'ebumnuche mgbe omume ahụ gbanwere.

### Ebe hooks na-arụ ọrụ

| Hook / njikwa                               | Na-arụ ọrụ na                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                           | Arịrịọ ndị `handleChat` (`src/sse/handlers/chat.ts`) na-ahụ maka ha: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (na `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, na proxy nkata Telegram. Nakwa ebe njedebe nnwale nke dashboard `/api/guardrails/test`. Mgbochi tupu oku na-eweghachi HTTP 400. |
| `runPostCallHooks`                          | Naanị nzaghachi nkata **na-abụghị nke nkwanye** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Nzaghachi a na-enuba anaghị eru ya ma ọlị.                                                                                                                                                                                                                                                                                        |
| PII nke nkwanye                             | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), nke a na-ejikọta n'usoro na `streamingPipeline.ts` mgbe `PII_RESPONSE_SANITIZATION` dị n'ọrụ. Ọ bụghị ihe nchebe, ya mere ụzọ mgbanyụ anaghị emetụta ya.                                                                                                                                                                                                                    |
| Middleware nchebe megide ntinye (nke ochie) | Ụzọ `/v1` ọ bụla nwere prompt, tinyere ezinụlọ nkata (lee [mkpuchi ụzọ](#injection-guard-route-coverage--red-team-phase-8--block-d)). Naanị ntinye aghụghọ n'ime prompt.                                                                                                                                                                                                                                                                  |

### Ihe a na-ekpuchighị

- **Ụzọ mgbasa ozi, embeddings na data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) anaghị eru ndekọ ahụ ma ọlị. Enweghị
  izochi PII, izochi nzere nnweta ma ọ bụ àkwà njikọ ụdị data na-arụ ọrụ ebe ahụ. Naanị
  nyocha ha bụ middleware nchebe megide ntinye nke ochie.
- **Nzaghachi a na-enuba** anaghị enweta ihe nchebe mgbe oku gasịrị: enweghị `pii-masker` ma ọ bụ
  `credential-masker` mgbe oku gasịrị, enweghịkwa mgbochi mgbe oku gasịrị. Naanị mgbanwe PII
  nke nkwanye na-emetụta ha (mgbe `PII_RESPONSE_SANITIZATION` dị n'ọrụ). A naghị ehichapụ nzere nnweta
  e weghachiri n'ime nzaghachi a na-enuba.
- **Ụzọ mgbanyụ megide middleware (dị ka e mere ya):** middleware na-enyocha
  ntinye aghụghọ n'ime prompt site n'ịkpọ `evaluatePromptInjection()` n'onwe ya, na-enweghị
  ịnyefe ndepụta mgbanyụ ọ bụla onye kpọrọ ya na-achịkwa. Ọnọdụ `block` bụ
  oke nchebe a manyere nke mgbanyụ onye kpọrọ ya na-achịkwa enweghị ike ịgafe, tinyere n'ụzọ ezinụlọ nkata
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ịgbanyụ
  `prompt-injection` na-awụli naanị ihe nchebe dị na ndekọ ahụ.

### Ihe na-ahụ nzaghachi tupu nyocha mgbe oku gasịrị

N'ụzọ na-abụghị nke nkwanye, usoro ya bụ: iwepụta ebe nchekwa → imezu ngwaọrụ
etinyere n'ime → ihe nchebe mgbe oku gasịrị → ọpụpụ n'ihi mgbochi mgbe oku gasịrị → ịchekwa na semantic-cache.

- **Mwepụta ebe nchekwa** na **mmezu ngwaọrụ** na-ahụ nzaghachi tupu usoro nchedo
  a na-etinye mgbe oku gasịrị enwee ike idegharị ya ma ọ bụ gbochie ya. Kemgbe
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), mwepụta
  ebe nchekwa na-ebufe ederede e wepụtara na `sanitizePII` mgbe
  `PII_RESPONSE_SANITIZATION` dị na-arụ ọrụ (ma na nnyefe na-aga n'ihu ma na nke anaghị aga n'ihu), mana
  nzaghachi nke usoro nchedo na-egbochi ma e mechaa ka e nyefelarị na ebe nchekwa na
  ngwaọrụ.
- **Ebe nchekwa nwa oge dabere na ihe ederede pụtara** na-echekwa nzaghachi mgbe usoro nchedo gasịrị, ya mere ọ na-echekwa
  nzaghachi e degharịrị, a naghịkwa echekwa nzaghachi a gbochiri n'ebe nchekwa nwa oge. A na-eji
  igodo API nke ọ bụla kewaa ihe ndị echekwara n'ebe nchekwa nwa oge.

## Nhazi

Mgbanwe gburugburu ebe ọrụ ndị usoro nchebe arụnyere n'ime na-agụ:

| Mgbanwe                               | Nke na-eji ya                   | Mmetụta                                                                                                                            |
| ------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`              | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`              | Iwu ntinye ntuziaka ọjọọ: `warn`, `block`, ma ọ bụ `log`. Uru ochie `redact` anaghị edegharị ederede ntinye ntuziaka ọjọọ.         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`              | Ọnọdụ maka nchebe megide ntinye ntuziaka ọjọọ; ọ bụkwa akara njirimara DB nke **na-anọchi** mgbanwe gburugburu ebe ọrụ (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`              | Ọkwa ịdị njọ kacha nta nke `MODE=block` na-ajụ: `high` (nke ndabara), `medium`, ma ọ bụ `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`              | Aha ọzọ ochie maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`                    | Mgbe ọ bụ `true`, a na-ezochi PII dị na arịrịọ (n'agbanyeghị ọnọdụ ntinye ntuziaka ọjọọ).                                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (n'akụkụ na-esote) | Na-achịkwa omume ihe mkpuchi n'akụkụ nzaghachi.                                                                                    |

Usoro nchebe Modality Bridge na-agụ nhazi oge ọrụ site na ebe nchekwa ntọala
nke DB na-akwado (`getSettings()`), ọ bụghị mgbanwe gburugburu ebe ọrụ. Igodo ndị bụ isi maka Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata igodo ochie
`visionBridge*` naanị dị ka ụzọ ndabere ịgụ otu okirikiri
nke akọwara n'akwụkwọ; ide ihe site na dashboard na-eji igodo ndị bụ isi. Uru ndabara na ihe na-ekpebi ụzọ ndabere
dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe a ka debere
ụkpụrụ ochie ndị na-adịghị agbanwe agbanwe na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere ntọala
`modalityBridgeCache*` a na-ekekọrịta. Audio enweghị ụzọ ndabere igodo ochie n'ihi na
e webatara igodo ndị a na atụmatụ nhazi Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere ntọala `modalityBridgeCache*` a na-ekekọrịta.
A na-agbanyụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ ihe ndabere ọrụ
ndị a na-ahọrọ ma ị ga-eji ha, na itinye nkọwa n'okpuru fremụ na-abawanye oge nzaghachi na ọnụ ahịa iji ụdị.

## Ihe Nchedo Ahaziri Iche

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

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Tinye mmejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye aha ya mgbe a na-ebubata ya (site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` mgbe mmemme na-arụ ọrụ — ndekọ ahụ na-anọchi
   ihe nchedo ọ bụla gara aga nwere otu aha e mere ka ọ bụrụ n'ụdị ọkọlọtọ.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị ugbu a:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site na ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma
debanye naanị ihe nchedo ndị a na-anwale. Vision Bridge na-anabata itinye
ihe ndị ọ dabere na ha (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-enye
ebe njikọ kwekọrọ na nke ahụ maka ntọala, ikike, nhọrọ ụdị STT, nyocha
nkọwa njirimara, na ntụgharị olu gaa n'edemede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ohere ịbanye na DB
ma ọ bụ netwọkụ.

## Leekwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  nchọpụta ntụnye ntuziaka ọjọọ na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ntọala ndabara Vision Bridge na
  ndepụta ụdị a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ntọala ndabara Vision/Audio a na-ekekọrịta mgbe mmemme na-arụ ọrụ
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa nọọrọ onwe ya (ihe nkwụsị sekit, oge izu ike)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu maka mgbanwe gburugburu ebe obibi

## Ụzọ injection-guard na-ekpuchi & nnwale mwakpo red-team (Usoro 8 · Ngalaba D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi ụzọ niile
na-anabata ntuziaka onye ọrụ. Ọ na-agbaso `INJECTION_GUARD_MODE` (ndabara `warn` = idekọ naanị;
`block` = na-eweghachi HTTP 400 `SECURITY_001`).

| Ụdị                     | Ụzọ                                                                                                                                                  | Ọnọdụ ndabara |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (nke dị ugbu a) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Mmepụta                 | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                    | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Nnwale mwakpo red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-enyocha na ụzọ ọ bụla na-egbochi
nchịkọta OWASP-LLM na `INJECTION_GUARD_MODE=block`; garak na-eme nyocha mwakpo (ọ na-awụfe ya ma ọ bụrụ na enweghị igodo nzuzo).
Agụnyere `moderations` iji mee ka ihe kwekọọ. Ọnọdụ mgbochi bụ oke nchekwa a na-amanye: `evaluatePromptInjection()`
na-eleghara ndepụta nkwụsị nke arịrịọ ọ bụla nke middleware na-enyefe ya anya, ya mere `disabledGuardrails` anaghị
**ewepụ** ụzọ ọ bụla na mgbochi ahụ ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Usoro ọrụ abalị (`.github/workflows/nightly-llm-security.yml`, cron + ịmalite
ya n'aka) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  na `INJECTION_GUARD_MODE=block`. Ọnọdụ mwakpo ọ bụla (dịka "leghara ntuziaka niile
  gara aga anya…", mgbapụ mgbochi n'ụdị DAN) na-ekwusi ike na nzaghachi nwere
  `error.code === "SECURITY_001"`, ya bụ, na ihe nchedo ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (maka ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide ihe atụ OmniRoute dị na kọmputa mpaghara (`http://localhost:20128/v1`). Ọ dabere na
  igodo nzuzo onye na-eweta ọrụ (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụfe n'enweghị nsogbu ma tinye
  `|| true` na ngwụcha, ka ọ wee kọọ akụkọ n'emeghị ka CI daa.

Mkpuchi nke onye inyeaka nchedo (`createInjectionGuard` / `withInjectionGuard`)
na-agụnye ụzọ `/v1` ọ bụla nwere ntuziaka; a na-ewepụta ederede ntuziaka site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site n'aka
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.

# Guardrails (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **የትክክለኛ መረጃ ምንጭ:** `src/lib/guardrails/`
> **መጨረሻ የተዘመነው:** 2026-10-17 — v3.8.52 ([ሽፋን እና ገደቦች](#coverage-and-limits) ተጨምሯል፦
> hooks የሚደርሱባቸው መንገዶች እና የምላሽ መንገዶች፣ የተዋሃዱ የማሰናከያ headers (#16412)፣ injection
> block mode እንደ አስገዳጅ ድንበር (#16413)፣ እና ከpost-call በፊት ምላሽን የሚመለከተው ምን እንደሆነ)

Guardrails በOmniRoute እና በupstream አቅራቢዎች መካከል ባለው ድንበር ላይ
ደህንነትን፣ ፖሊሲን እና የይዘት ለውጦችን ያስፈጽማሉ። እያንዳንዱ guardrail
የጥያቄ payloads (`preCall`) እና የupstream ምላሾችን (`postCall`)
መመርመር (እና እንደ አማራጭ ውድቅ ማድረግ፣ መለወጥ ወይም ማብራሪያ መጨመር) ይችላል።

ስርዓቱ **ስህተት ሲከሰት ክፍት ሆኖ ይቀጥላል**፦ guardrail በሚሠራበት ጊዜ ስህተት ቢያስነሳ፣ registry
ጥያቄውን ከማስተጓጎል ይልቅ ስህተቱን ይመዘግባል እና ወደሚቀጥለው guardrail ይሄዳል።
ማገድ ሆን ተብሎ የሚወሰን ውሳኔ ነው (`block: true`)፤ በአጋጣሚ አይከሰትም።
ብቸኛው ልዩ ሁኔታ የተቋረጠ ጥያቄ ነው፦ የጥሪ አድራጊው `signal` ሲቋረጥ፣
ስህተት የሚያስነሳ guardrail ከመዘለል ይልቅ የhook አፈጻጸሙን ውድቅ ያደርጋል።

hooks በሁሉም መንገድ ወይም በሁሉም ምላሽ ላይ **አይሠሩም**። guardrailን እንደ
የደህንነት መቆጣጠሪያ ከመጠቀምዎ በፊት [ሽፋን እና ገደቦች](#coverage-and-limits)ን ያንብቡ።

## አብረው የተካተቱ Guardrails

registry ሲጫን ስድስት guardrailsን በቅድሚያ ተከተል በራስ-ሰር ይጭናል
(`registry.ts` → `registerDefaultGuardrails()`ን ይመልከቱ)፦

| ቅድሚያ | ስም                  | ደረጃ(ዎች)        | ፋይል                   |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

ዝቅተኛ የቅድሚያ ቁጥሮች **መጀመሪያ** ይሠራሉ።

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

የGLM 5.3 መሠረታዊ ሞዴል እና `glm-5.3-{low,high,max}` ግልጽ
`supportsVision:false` የregistry/spec metadata አላቸው። የGLM 5.3 Flash ልዩነቶች
በተፈጥሯቸው ምስል የሚደግፉ ሞዴሎች ሆነው ይቀጥላሉ። የClaude Code `/v1/messages` መንገድ
ከClaude-ወደ-OpenAI ትርጉም **በፊት** ወደ የጋራ `handleChat` pre-call guardrail ሰንሰለት
ይገባል፤ በውስጥ የተካተቱ የ`Read` tool-result ምስሎች ትርጉሙ ወደ OpenAI `image_url`
ይዘት ከማዛወሩ በፊት መገለጽ ወይም መስተናገድ አለባቸው (#17069)።

**ምስል የማይደግፉ ሞዴሎች** ላይ የተመሩ ምስል ያካተቱ ጥያቄዎችን ይይዛል፤ ከዚያም
ጥያቄውን በሙሉ ምስል ወደሚደግፍ ሞዴል ያዞራል ወይም ወደ upstream ጥሪ ከመሄዱ በፊት
የምስል ክፍሎቹን በሚዋቀር የምስል ሞዴል በተፈጠሩ የጽሑፍ መግለጫዎች ይተካል።
ይህ ጽሑፍ ብቻ የሚደግፉ አቅራቢዎች ባለብዙ የመረጃ ዓይነት payloadsን ያለ ተጨማሪ
እርምጃ እንዲያስተናግዱ ያስችላቸዋል።

ፍሰት፦

1. የታለመው ሞዴል ምስልን አስቀድሞ የሚደግፍ ከሆነ ዝለል (በግድ እንዲያልፉ በተደረጉ
   ሞዴሎች ዝርዝር `isVisionBridgeForcedModel` ውስጥ ካልተካተተ በስተቀር)።
2. የምስል ክፍሎችን በ`extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) አውጣ፤ ይህም በ`open-sse/utils/mediaParts.ts` ውስጥ ላለው
   **የተዋሃደ የሚዲያ መለያ** `detectMediaParts()` ሥራውን ያስተላልፋል — እሱም
   ከcombo ተኳኋኝነት ማጣሪያ ጋር የሚጋራው ብቸኛ የትክክለኛ መረጃ ምንጭ ነው።
   ማውጣቱ `replaceImageParts` መልሶ ሊያስገባቸው በሚችላቸው ቅርጾች ብቻ የተገደበ ነው
   (የማውጣት↔መተካት ውል)፦ OpenAI `image_url`፣ Anthropic base64
   `source.type:"base64"`፣ Anthropic URL `source.type:"url"` እና Responses
   API `input_image`። በClaude Code `tool_result.content` እና Responses tool outputs
   ውስጥ በውስጥ የተካተቱ ተዛማጅ ምስሎችም ከመጀመሪያ መገኛቸው ተወስደው በዚያው
   ይተካሉ፤ አመልካች ብቻ የሆኑ ቅርጾች ለcombo ማጣሪያ የሚውሉ ናቸው እና አይወጡም።
   ምንም ካልተገኘ ዝለል።
3. በ`resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) የአሂድ ጊዜ ቅንብሮችን ወስን፦ አዲሶቹ
   `modalityBridge*` የቅንብር ቁልፎች ቅድሚያ ያገኛሉ፤ የቆዩት `visionBridge*` ቁልፎች
   **ለአንድ ዙር ብቻ የምትክ አማራጭ** ሆነው ይቀራሉ (ወደ ቀድሞ ሁኔታ የመመለሻ ጊዜ)።
   bridge ከተሰናከለ፣ ማንኛውም የሚዲያ ፍለጋ ከመካሄዱ በፊት ዝለል።
4. የmode መራጭ (`modalityBridgeVisionMode`፣ ከታች ያለውን ሰንጠረዥ ይመልከቱ)
   ዳግም ማዞር ወይም መግለጽ እንደሚደረግ ይወስናል። ዳግም ማዞር `model` ብቻ
   የተቀየረበትን `modifiedPayload` ከmeta `{ rerouted, fromModel, toModel, imagesKept }`
   ጋር ይመልሳል።
5. የመግለጽ መንገድ፦ ምስሎችን በ`maxImages` ገድብ፣ ለተግባሩ የሚስማማ መመሪያ አዘጋጅ፣
   የመግለጫ cacheን ተጠቀም፣ የምስል ሞዴሉን **በትይዩ** ጥራ (`Promise.allSettled`)፣
   እና በምስሎቹ ቦታ `[Image N]: <description>` የጽሑፍ ክፍሎችን አስገባ።
   ያልተሳካ መግለጫ `null` ይመልሳል፦ ለማይታወቁ/ምስል የሚደግፉ ዒላማዎች
   ያልተቀየረው ምስል ይጠበቃል (#4012)፤ ነገር ግን **ጽሑፍ ብቻ እንደሚደግፍ የተረጋገጠ
   ቀጥተኛ ዒላማ** ወይም ምስል የማይደግፍ combo፣ በከፊል የተሳኩ ሙከራዎችን
   እና ከመግለጫ ጥሪ ገደቡ በላይ ያሉ ምስሎችን ጨምሮ፣ ላልተገለጸ እያንዳንዱ ምስል
   ግልጽ `(unavailable — no vision-capable provider connected)` የጽሑፍ ምትክ
   ያገኛል (#17069)። ሁሉም መግለጫዎች ሲከሽፉ የሚጠቀመው ነባር የcombo መግለጫ
   ምትክ አሁንም ይሠራል (#8430)።
6. `modifiedPayload`ን ከmeta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) ጋር መልስ።

#### የmode መራጭ (`modalityBridgeVisionMode`)

| ሁነታ        | ነባሪ | ባህሪ                                                                                                                                                                                                 |
| ---------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔   | የቀድሞው heuristic ሳይቀየር ይቆያል (#6640/#7204)፦ combo ያልሆኑ/`auto/` ሞዴሎች፣ የመጀመሪያው ሞዴል የሚሰሩ ማረጋገጫዎች ከሌሉት በስተቀር፣ ወደ ምርጡ የምስል ሞዴል ይመራሉ (ካሉት መግለጫ ይሰጣል)፤ combo መዳረሻዎች ሁልጊዜ መግለጫ ይሰጣሉ።                          |
| `describe` |     | ሁልጊዜ መግለጫ ይሰጣል — የዳግም ማስተላለፍ ክፍሉ ሙሉ በሙሉ ይዘለላል፤ ተጠቃሚው የመረጠው ሞዴል ሁልጊዜ ምላሽ ይሰጣል።                                                                                                                       |
| `reroute`  |     | ዳግም ማስተላለፍን ያስገድዳል፦ ማረጋገጫ ያለውን ሞዴል የማቆየት መከላከያ ይታለፋል። የዳግም ማስተላለፍ **መዳረሻ** ማረጋገጫ መከላከያ ግን አሁንም ይሠራል — የሚሠራ የምስል መዳረሻ ከሌለ፣ bridge መግለጫ ከመስጠት ወይም ጥሬ ምስሎችን ለጽሑፍ-ብቻ መዳረሻ ከመላክ ይልቅ ግልጽ ስህተት በመስጠት ያግዳል። |

በግድ የተመረጡ ሁነታዎች `auto` heuristic ከመሥራቱ **በፊት** ውሳኔ ያደርጋሉ፤ የ`auto` ባህሪ
ከpre-PR-1 guardrail ጋር በባይት ደረጃ ተመሳሳይ ነው።

#### የAPI ቁልፍ የመዳረሻ ወሰን (`visionBridgeKeyScope.ts`)

የጥሪው አድራጊ API ቁልፍ `allowedConnections`፣ የኮታ ስብስቦችን
(`allowedQuotas`) ወይም ሞዴሎችን (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) የሚገድብ ከሆነ፣ bridge
ቁልፉ ሊጠቀምባቸው የሚችላቸውን የዳግም ማስተላለፍ እና የመግለጫ ሞዴሎች ብቻ፣ ቁልፉ ሊጠቀምባቸው
በሚችላቸው ግንኙነቶች ላይ ይመርጣል። የመግለጫ ጥሪው ከዚያ ሁልጊዜ በ
`x-omniroute-self-loop-key-id` ራስጌ አማካኝነት በOmniRoute self-loop ውስጥ ያልፋል፤ ስለዚህ ጥያቄውን የሚቀበለው የውይይት ጥያቄ
የቁልፉን የግንኙነት እና የሞዴል ፖሊሲ እንደገና ያስፈጽማል። `enforceApiKeyPolicy()`
ያንን ራስጌ ከself-loop bearer ጋር አብሮ ሲቀርብ ብቻ ይቀበላል፤ ስለዚህ መዳረሻን ማጥበብ ብቻ
ይችላል፣ እና የማይገኝ id ውድቅ ይደረጋል።

ለቁልፉ የተፈቀደ የምስል ሞዴል ከሌለ፣ **ጽሑፍ-ብቻ መሆኑ የተረጋገጠ
መዳረሻ** የምስሉን ጥያቄ ለምስል አቅም ለሌለው upstream ከመላክ ይልቅ
በአካባቢው ግልጽ HTTP 400 በመስጠት ውድቅ ያደርገዋል (#17069)። የምስል አቅማቸው
ያልታወቀ ወይም በተፈጥሮ የምስል አቅም ያላቸው መዳረሻዎች ላይ፣ የመግለጫ መንገዱ የቀድሞውን
fail-open ባህሪ ይይዛል (meta `{ skipped: true, reason: "no_permitted_vision_model" }`)።
ቁልፍ የሌላቸው ጥያቄዎች እና እነዚህ ገደቦች የሌሉባቸው ቁልፎች ልክ እንደበፊቱ
ይሠራሉ።

#### ተግባርን ያማከለ የመግለጫ prompt (`modalityBridgeVisionTaskAware`)

ነባሪው **true** ነው። `composeVisionPrompt()` (`visionBridgeHelpers.ts`) የ
**መጨረሻውን የተጠቃሚ መልዕክት** ጽሑፍ (እስከ 500 ቁምፊዎች የተገደበ) ወደ መሠረታዊው
የመግለጫ prompt ያክላል፤ ይህም መግለጫውን ተጠቃሚው በእውነት ወደጠየቀው
(codex-vision-proxy pattern) ይመራል እና የምስል ሞዴሉ የሚታይ ጽሑፍን እንዲገለብጥ
ይጠይቃል። ይህ ቅንብር ሲጠፋ — ወይም የተጠቃሚ ጽሑፍ ከሌለ — መሠረታዊው prompt ሳይቀየር ጥቅም ላይ ይውላል።

የመግለጫ self-loop የራሱ OpenAI-compatible ጥያቄ (`callVisionModelSingle()`
በ`visionBridgeHelpers.ts` ውስጥ) ሁልጊዜ `image_url.detail: "high"` ይጠይቃል —
ያለምንም ቅድመ ሁኔታ፣ ለእያንዳንዱ ጥሪ አድራጊ/አቅራቢ፣ በማንኛውም የclient ምልክት ላይ ሳይመሠረት።
ዝቅተኛ-ዝርዝር ናሙና መውሰድ ይህ prompt በትክክል ለሚጠይቀው የጽሑፍ ግልባጭ
ተግባር የOCR ትክክለኛነትን ያሳንሳል፤ ስለዚህ የመግለጫ ጥሪው ራሱ፣ የመጀመሪያው ገቢ ጥያቄ
የተጠቀመው የዝርዝር ደረጃ ምንም ይሁን ምን፣ ሁልጊዜ ከፍተኛ ዝርዝር ይጠይቃል። ይህ
የሚነካው የውስጣዊውን የመግለጫ ጥያቄ አካል ብቻ ነው፤ OmniRoute የጥሪ አድራጊውን
`image_url.detail` በዋናው ጥያቄ ላይ እንዴት እንደሚያስተላልፍ አይቀይርም —
ያ ነባሪ በተለየ መንገድ፣ እና የOpenCode clients ሲለዩ ብቻ፣ በ
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ይተገበራል። የመግለጫ self-loop የ
Anthropic wire-format ቅርንጫፍ `detail` መስክ የለውም፣ እና በሁለቱም ነባሪዎች አይነካም።

#### የመግለጫ ውጤት ገደብ (`modalityBridgeVisionMaxChars`)

| ቁልፍ                            | ነባሪ | ክልል               |
| ------------------------------ | --- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0` | `0` ወይም 100–50000 |

`0` (ነባሪ) ማለት **ገደብ የለም** ማለት ነው — በ`callVisionModel()` የተመለሰው መግለጫ
ሳይቀየር ይተላለፋል፣ ይህም ያለውን ባህሪ ይጠብቃል። በ100–50000 ክልል ያለ ማንኛውም እሴት፣
መግለጫው እንደ `[Image N]: <description>` ተመልሶ ከመካተቱ በፊት፣ በ
`…` ቅጥያ ይቆረጣል
(`VisionBridgeGuardrail.preCall()` በ`src/lib/guardrails/visionBridge.ts` ውስጥ)።
የታችኛው ሞዴል ሙሉ ግልባጩን ለሚፈልግባቸው ዝርዝር-ተኮር OCR ተግባራት ይህን ከፍ ያድርጉት፤
ብዙ የሚጽፉ የምስል ሞዴሎች የtoken አጠቃቀምን ለመገደብ ዝቅ ያድርጉት።
የdashboard መስኩ በVision tab የAdvanced panel ላይ ይገኛል
(`modality-bridge-max-chars` በ`ModalityBridgeVisionTab.tsx` ውስጥ)፣ እና በ1 እና 99 መካከል
ያለ ማንኛውንም እሴት ወደ ዝቅተኛው 100 ያሳድጋል፣ በግልጽ የተገለጸ `0` ግን
ሳይነካ ይቀራል — `0` በራሱ መብት ትክክለኛ የZod እሴት ነው
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)፣ የ«unset» ነባሪ ብቻ አይደለም።

#### የመግለጫ cache (`modalityBridge/bridgeCache.ts`)

ለመግለጫ ውጤቶች በሂደቱ በሙሉ የሚጋራ በማህደረ ትውስታ ውስጥ ያለ LRU + TTL cache።
ቁልፍ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ከ
length-prefix framing ጋር (በመስክ ድንበሮች ላይ ግጭት የለም)። የሞዴሉ ክፍል በእውነት ምላሽ የሰጠው ሞዴል ሳይሆን
**የተዋቀረው** bridge ሞዴል ነው — `callVisionModel` በውስጡ ወደ አማራጭ ሊሸጋገር ይችላል፣
እና ለእያንዳንዱ ሙከራ ቁልፍ መፍጠር cache ን ይበታትነዋል። ያልተሳኩ መግለጫዎች ፈጽሞ cache ውስጥ አይቀመጡም። ቅንብሮች፦

| ቁልፍ                             | ነባሪ    | ክልል     |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### የርቀት ምስል መደበኛ ማድረግ (self-loop describe/base64 fetch)

bridge አንድ **የርቀት** ምስልን ራሱ ሲያመጣ — ለ Anthropic describe
self-call እና ለ claude-wire-format base64 ልወጣ
(`ensureBase64ImagesForClaudeWire`)፣ ሁለቱም በ
`visionBridgeHelpers.ts` ውስጥ ባለው `fetchRemoteImageAsDataUri()` በኩል —
የሚገኘው data URI በ vision-model ጥያቄ ውስጥ ከመካተቱ በፊት በ
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) ይደበኛል።
ከመጠን በላይ የሆኑ ምስሎች **ረጅሙ ጎናቸው 2048px** እንዲሆን
ይቀነሳሉ (ይህም OpenAI/Anthropic በserver-side ላይ አስቀድመው
ከሚተገብሩት የመጠን ገደብ ጋር ይዛመዳል)፤ ይህም vision model
የሚያየውን ሳይቀይር የሚሰቀሉ ባይቶችንና መዘግየትን ይቀንሳል።
መጠን መቀየር `sharp` ይጠቀማል፣ እሱም በdynamic import ይጫናል፤
native binary-ው መጫን በማይችልበት መድረክ `normalizeDataUri()`
**ስህተት አይጥልም** — ዋናዎቹን ባይቶች ሳይቀይር ያሳልፋል፣
ስለዚህ የ describe/base64-conversion ሂደት ሁልጊዜ መሥራቱን
ይቀጥላል። ምስል ያልሆኑ ባይቶች (ሊፈታ የሚችል ምስል ያልመለሰ
fetch) እንዲሁም ሳይነኩ ይተላለፋሉ። ይህ መደበኛ ማድረግ
bridge ለራሱ self-call በሚያመጣቸው ምስሎች ብቻ የተገደበ ነው —
በጥሪ አድራጊው raw passthrough payload ላይ ፈጽሞ አይተገበርም፤
ይህም ለመለወጥ በግልጽ ስምምነት ብቻ መፈቀድ ካለበት መርህ
(Hard Rule #20) ጋር ይስማማል።

#### የቅንብሮች schema + migration

አዲሶቹ `modalityBridge*` keys በ `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) ውስጥ በZod ይረጋገጣሉ፦
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
የ `modalityBridgeCache*` ሦስት keys፣ እና Audio Bridge የሚጠቀምበት
የ `modalityBridgeAudio*` ቡድን። Migration
`141_modality_bridge_settings.sql` ነባር የ `visionBridge*` እሴቶችን
ወደ ተዛማጅ አዲስ keys ይቀዳል (ደጋግሞ ቢሠራም ውጤቱ አይለወጥም፣
በኦፕሬተር የተቀመጠ የ `modalityBridge*` እሴትንም ፈጽሞ አይተካም)፤
ነባሮቹ keys ለአንድ የልቀት ዑደት እንደ አማራጭ የንባብ ምንጭ
ተቀባይነታቸውን ይቀጥላሉ።

#### የግልጽነት header + ስታቲስቲክስ

በ describe የተለወጡ ምላሾች
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
ይይዛሉ (በ `modalityBridge/bridgeStats.ts` ውስጥ ባለው
`buildModalityBridgeHeader()` ይገነባል፣ በ
`src/sse/handlers/chatHelpers.ts` ውስጥ ባለው
`withModalityBridgeHeader()` ይጨመራል)። ዳግም መንገድ
የተመሩ ጥያቄዎች **header አይይዙም** — payload-ው
አልተነካም፣ የmodel ለውጡም በምላሹ body ውስጥ ባለው `model`
field ላይ አስቀድሞ ይታያል።

`GET /api/modality-bridge/stats` (የአስተዳደር ፈቃድ፣ ከ
`GET /api/settings` ጋር ተመሳሳይ ደረጃ) ለ `vision`, `audio` እና
`video` በmemory ውስጥ የሚቀመጡትን የየmodality ቆጣሪዎች
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ይመልሳል።
`averageLatencyMs` በሁሉም attempts ሳይሆን በ `latencySamples`
ይካፈላል፤ የጊዜ መለኪያ የሌለው ክዋኔ የዜሮ ሚሊሰከንድ
ናሙና አይፈጥርም። `bridged` ለተሳኩ ልወጣዎች ከቀደሙ ስሪቶች
ጋር ተኳሃኝ የሆነ አማራጭ ስም ሆኖ ይቀጥላል፤ ያልተሳኩ
ሙከራዎች አያሳድጉትም። ቆጣሪዎቹ በንድፍ መሠረት process
ዳግም ሲጀምር ዳግም ይጀምራሉ (ለtelemetry እንጂ ለሂሳብ
አያያዝ አይደሉም)።

#### የDashboard ውቅር

ለዚህ የተመደበው dashboard page
`/dashboard/settings/modality-bridge` ነው። በURL ሊጠቀሱ
የሚችሉት `Vision`, `Audio` እና `Video` tabs የ `tab` እሴትን
ሲቀይሩ query parameters-ን ያስጠብቃሉ። የ Vision tab
ማንቃትን፣ mode-ን፣ model መምረጥን (ራስ-ሰር ነባሪውን
ጨምሮ)፣ ለተግባሩ ተስማሚ prompt ማዘጋጀትን፣ የላቁ
የtimeout/ምስል/የመግለጫ ርዝመት/cache ገደቦችን፣ በሂደት
ላይ ያሉ ቆጣሪዎችን እና ጥበቃ ያለውን የናሙና ጥያቄ
ያቀርባል። የ Audio tab እንዲሁ እየሠራ ነው፦ ማንቃትን፣
Auto ያለው STT-only model picker-ን፣ የtimeout/ከፍተኛ
የድምፅ ቅንጥብ ገደቦችን፣ የaudio ቆጣሪዎችን እና
የ `input_audio` ናሙና ሙከራን ያቀርባል። የ Video tab
ተግባራዊ ነው፦ የ FFmpeg/ffprobe runtime ሁኔታን ከአራት
ግልጽ የUI ሁኔታዎች በአንዱ ያሳያል (`unknown` probe-ው
እየተካሄደ ሳለ ወይም ሊጠናቀቅ ባልቻለ ጊዜ፣ `restricted`
probe-ው በclient-side የሚዘለልበት non-loopback dashboard host
ላይ፣ `unavailable` probe ከተካሄደና እንደሌለ ከተረጋገጠ
በኋላ፣ ወይም `available` ከ FFmpeg/ffprobe versions ጋር)፤
የማንቃት/model/frame/video/timeout ገደቦችን ያስቀምጣል፣
model picker-ን vision-capable models ብቻ እንዲያሳይ
ያጣራል፣ እና የvideo ቆጣሪዎችን ያቀርባል።

ቀድሞ በ AI settings ሥር የነበረው Vision Bridge card አሁን
ወደ አዲሱ page የሚያመራ የተኳሃኝነት link ነው፤ ሁለተኛ
የform ቅጂ ከዚያ በኋላ አይይዝም። Media Providers ደግሞ
ነባሩን Speech-to-Text playground ሳያስወግድ፣ Image-to-Text
እና Speech-to-Text workflows-ን ከተዛማጅ Modality Bridge tabs
ጋር ያገናኛል።

**የself-loop admission bypass:** የ describe ጥሪው በOmniRoute
የራሱ `/v1` self-loop (non-standard provider model) በኩል
ሲመራ፣ ንዑስ ጥያቄው `x-omniroute-admission-bypass: internal`
ይልካል፣ እና በተፈታው የself-loop credential ይረጋገጣል —
በlocal mode የlocal `sk_omniroute` sentinel፣ ወይም ኦፕሬተሩ
ያዋቀረው `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350)።
ይህም `REQUIRE_API_KEY=true` deployments የ describe ጥሪን
እንዲያሄዱ ያስችላል። Bypass-ው ለእነዚህ ትክክለኛ
credentials ብቻ ይፈቀዳል፣ ስለዚህ ውጫዊ clients header-ውን
ተጠቅመው admission-ን ማለፍ አይችሉም።

ነባሮቹ defaults በ `src/shared/constants/visionBridgeDefaults.ts`
ውስጥ አሉ፤ አዲሶቹ የmode/task-aware/cache defaults እና
የsettings resolver በ
`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ አሉ።
guardrail ሙከራዎች አስመሳይ `getSettings` እና
`callVisionModel` implementations ማስገባት እንዲችሉ `deps`
constructor option ያቀርባል።

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

የaudio input እንደሚቀበል ያልታወቀ target ላይ ከመድረሳቸው
በፊት audio ያላቸውን chat requests ይጠልፋል። የchat request-ን
ወደ ሌላ መንገድ ፈጽሞ አይመራም፦ audio parts በነባሩ
OpenAI-compatible multipart endpoint በኩል ወደ ጽሑፍ
ይገለበጣሉ፣ የተመረጠው chat model-ም በጽሑፍ ቅጂዎቹ
መሥራቱን ይቀጥላል።

ፍሰት፦

1. `supportsAudio`-ን በ`getResolvedModelCapabilities()` ይወስኑ። ቅድሚያ የሚሰጠው በግልጽ የተገለጸ የprovider-registry ሜታዳታ ነው፤ ከዚያ የstatic model ሜታዳታ፣ በመጨረሻም የተመሳሰለው
   `modalities_input` ይከተላሉ። `audio` የሌለበት የተገለጸ የግቤት ዝርዝር `false` ነው፤
   የችሎታ ማስረጃ ከሌለ `null` ይሆናል። `false` እና `null` ሁለቱም ጥንቃቄ የሚያደርገውን bridge ያነቃቃሉ፤ `true` ግን ያልፈዋል።
2. የ`modalityBridgeAudio*` ቅንብሮችን ይወስኑ እና በጋራው `detectMediaParts()`
   ማወቂያ ከእያንዳንዱ መልዕክት ሊቆረጡና ሊተኩ የሚችሉ ከፍተኛ-ደረጃ የድምፅ ክፍሎችን ያውጡ። የሚደገፉ የውሂብ ቅርጾች OpenAI `input_audio`፣ `audio_url` እና
   `source.media_type: "audio/*"` ናቸው። በውስጥ የተካተተ ድምፅ ለመምራት ይለያል፣ ነገር ግን
   በመቁረጥና በመተካት ሂደቱ አይወገድም። ሥራው በ`modalityBridgeAudioMaxClips` ይገደባል፤
   ቀጣይ ክፍሎች ሳይነኩ ይቀራሉ።
3. የተዋቀረ `provider/model` ካለ ይጠቀሙ፤ ካልሆነ `selectAudioBridgeModel()` በተረጋጋ የካታሎግ ቅደም ተከተል `AUDIO_TRANSCRIPTION_PROVIDERS`-ን ተከትሎ፣ ሊጠቀምበት የሚችል ንቁ የprovider ማረጋገጫ መረጃ ያለውን የመጀመሪያ ሞዴል ይምረጥ።
4. `callAudioTranscription()` በbase64/data-URI የተቀመጠ ድምፅን ወደ multipart
   `file` ይቀይራል፤ ወይም ርቀት ያለ `audio_url`-ን በDNS pinning እና በ25 MB ገደብ በሚሠራው፣ ለሕዝብ መዳረሻ ብቻ በተፈቀደው የወጪ ግንኙነት ጥበቃ በኩል ያወርዳል። ከዚያም ፋይሉንና የተመረጠውን
   ሞዴል፣ በ`resolveSelfLoopBearer()` ማረጋገጫ ወደሚጠቀመው የአካባቢያዊ
   `/v1/audio/transcriptions` self-loop በPOST ይልካል። ነባሩ የtranscription መስመር መደበኛ የማረጋገጫ መረጃ ፍለጋን፣ የcooldown/rate-limit አያያዝን እና ወደ provider ማስተላለፍን ያከናውናል።
5. ስኬታማ ጥሪዎች ክፍሎቻቸውን በ`[Audio N]: <transcript>` ይተካሉ። ጥሪዎች
   በ`Promise.allSettled` ይካሄዳሉ፤ የአንድ ጥሪ ውድቀት ዋናውን የድምፅ ክፍል እንዳለ ያቆያል (#4012 ውል)። ሁሉም ጥሪዎች ከከሸፉ እና የታለመው ሞዴል
   `supportsAudio === false` መሆኑ ከተረጋገጠ፣ ክፍሎቹ
   `[Audio N]: (unavailable — no STT provider connected)` ይሆናሉ (#8430 ውል)።
   የታለመው ሞዴል ችሎታ ካልታወቀ (`null`)፣ ሁሉም ጥሪዎች ቢከሽፉ ክፍሎቹ ሳይነኩ ይቀራሉ። ጽሑፍ ብቻ እንደሚደግፍ የተረጋገጠ ሞዴል ሊጠቀምበት የሚችል የSTT ማረጋገጫ መረጃ ከሌለው፣ የአውታረ መረብ ጥሪ ሳይደረግ ይህንኑ ግልጽ ተተኪ ጽሑፍ ይቀበላል።

ስኬታማ የድምፅ ወደ ጽሑፍ ቅየራ ውጤቶች በሂደቱ ሁሉ የጋራ የሆነውን የModality Bridge LRU/TTL cache ይጠቀማሉ።
ቁልፉ የድምፅ ማጣቀሻውን፣ የተረጋጋውን `audio-transcription` የክዋኔ
መለያ እና የተመረጠውን የSTT ሞዴል ያጣምራል፤ ውድቀቶች በcache አይቀመጡም። የድምፅ ሙከራዎች
የጋራ `bridged`፣ `cacheHits`፣ `failures` እና `lastUsedAt` ቆጣሪዎችን ያዘምናሉ።
የተቀየሩ ምላሾች
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ይይዛሉ፤ ያልተነኩ
ጥያቄዎች የAudio Bridge ክፍል አይቀበሉም።

የruntime ቅንብሮች በDB የተደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                           | ነባሪ     | ክልል              |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | ራስ-ሰር ወይም STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

የጋራው cache አሁንም በ`modalityBridgeCacheEnabled`፣
`modalityBridgeCacheTtlMinutes` እና `modalityBridgeCacheMaxEntries` ይቆጣጠራል።

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

የታወቀ ቤተኛ የቪዲዮ ድጋፍ የሌለው የታለመ ሞዴል ከመጠራቱ በፊት፣ በChat Completions `messages` እና በResponses
API `input` ውስጥ ያሉ ከፍተኛ-ደረጃ የቪዲዮ ክፍሎችን ይይዛል።
የሚደገፉ ቅርጾች `input_video`፣ `video_url`፣ `video_source`፣ HTTPS URLs
እና `data:video/*;base64,...` data URIs ናቸው። በጽሑፍ ውስጥ ያሉ ተራ የፋይል ስሞች
እንደ ቪዲዮ አይቆጠሩም።

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) የጥያቄውን ክፍሎች ማለፍ፣
የችሎታ/ፖሊሲ ማረጋገጫን፣ በእያንዳንዱ ጥያቄ ውጤቶችን ማሰባሰብን እና የምላሹን ይዘት ይቆጣጠራል።
ለእያንዳንዱ ቪዲዮ የሚደረገው ሥራ — ማግኘት፣ የሙሉ ውጤቱ cache፣ የframe
ቅደም ተከተልን መግለጽ (ይህም ጥሪውን ያደረገው አካል ያቀረበውን ማንኛውንም የድምፅ ጽሑፍ ያዋህዳል)፣ እንዲሁም ለእያንዳንዱ ሙከራ መለኪያዎች/ማቋረጥ/ማጽዳት — በ`videoBridgePipeline.ts` ውስጥ
ባለው `processVideoPart` ተደብቋል፤ ይህም በ`preCall` ዙር ውስጥ ለእያንዳንዱ የቪዲዮ ክፍል አንድ ጊዜ ይጠራል።
ያ ሞጁል ግልጽ የport ድንበሮቹንም ይገልጻል፦ `VideoMediaBrokerPort`
(ባይቶችን ማግኘት እና በናሙና የተመረጡ frames-ን ማውጣት)፣ `VideoAudioTranscriptionPort`
(ጥሪውን ያደረገው አካል ያቀረበውን የድምፅ ጽሑፍ ከበናሙና ከተመረጡት captions ጋር ማዋሃድ) እና
`VideoDrilldownPort` (የframe drill-down ማስቀመጫ ድንበር፤ እስካሁን ከ`processVideoPart` ጋር አልተገናኘም — ዛሬ drill-down መዝገቦችን የሚጽፈው የተለየው `/api/modality-bridge/video/drilldown`
መስመር ብቻ ነው)።

ለሕዝብ ክፍት የሆነው `/v1` የጥያቄ መስመር ንዑስ ሂደትን ፈጽሞ አያስገባም ወይም አይጠራም። ርቀት ያሉ
ቪዲዮዎች በ50 MiB ገደብ ይወርዳሉ፤ በውስጥ የተካተቱ base64 ቪዲዮዎች ደግሞ የሞዴል/መልዕክቶች/ፍሬሚንግ ጭማሪ
ለሕዝብ ክፍት የሆነው የJSON ጥያቄ መቀበያ 50 MiB ገደብ ውስጥ እንዲቆይ፣ ለእያንዳንዱ ቪዲዮ የ36 MiB ጥንቃቄ የሚያደርግ የdecoded መጠን ገደብ አላቸው። የinline
ርዝመት እና የdecoded መጠን ግምቶች ማህደረ ትውስታ ከመመደቡ በፊት ይፈተሻሉ። በመጀመሪያው የርቀት URL እና በእያንዳንዱ redirect ላይ HTTPS
ያስፈልጋል፤ ይህም DNS pinning ያለውን ነባር፣ ለሕዝብ መዳረሻ ብቻ የተፈቀደ የወጪ ግንኙነት ጥበቃ ይጠቀማል። ከዚያ ባይቶቹ በትክክለኛው ውስጣዊ
`POST /api/modality-bridge/video/extract` የbroker ድንበር ያልፋሉ። ይህ መስመር
`LOCAL_ONLY` እና `SPAWN_CAPABLE` ሁለቱም ነው፤ በእያንዳንዱ ሂደት የተረጋገጠ፣
የታመነ የloopback ጥያቄ ብቻ ይቀበላል፣ URL፣ የፋይል ስርዓት ዱካ፣ ሊፈጸም የሚችል ፋይል
ወይም የargument ዝርዝር ፈጽሞ አይቀበልም። የAPI የbody-size ሂደት እና የhandler ቀስ በቀስ የሚያነብ የbody
አንባቢ እያንዳንዳቸው በተናጠል ለbroker ግቤት 50 MiB ገደብ ያስፈጽማሉ። ገደብ ያለው ወረፋው
በአንድ ጊዜ አንድ ማውጣት ያካሂዳል፣ አራት ተጠባባቂ ሥራዎችን ይፈቅዳል፣ እና የተጠባባቂ ግቤትን
በ100 MiB ይገድባል።

በbroker ውስጥ፣ `ffprobe` የግል አካባቢያዊ ፋይል ያነባል፤ ቋሚው የተፈቀዱ ቅርጸቶች ዝርዝር የplaylist እና manifest ቅርጸቶችን አያካትትም። ለተፈቀዱ MOV-family
containers፣ ውጫዊ የMOV ውሂብ ማጣቀሻዎች በነባሪነት እንደተሰናከሉ ይቆያሉ፣ ቋሚው ትእዛዝም እነሱን አያነቃም። `ffprobe` እና `ffmpeg` ሁለቱም የ`file`-only protocol ፈቃድ ዝርዝርን፣ አንድ threadን፣ ቋሚ የargument ድርድሮችን፣ shell አለመጠቀምን እና ከ`PATH` የሚገኙ executablesን ይጠቀማሉ። የተያያዙ የሽፋን ምስል streams ለማጫወት የሚመረጡ አይደሉም። ሊጫወቱ የሚችሉ streams ሁሉ ገደቦቹን ማሟላት አለባቸው፣ እና ወደ ቋሚና ሊተነበይ የሚችል ዝቅተኛ-index አማራጭ ከመመለስ በፊት በግልጽ የተመረጠ ነባሪ stream ቅድሚያ ያገኛል። ቪዲዮዎች በ600 ሰከንድ፣ በእያንዳንዱ አቅጣጫ 8,192 pixels እና 33,554,432 የምንጭ pixels ይገደባሉ። FFmpeg በመካከለኛ ነጥቦች 1–16 JPEG frames ናሙና ይወስዳል፣ ትንንሽ ግብዓቶችን ሳያሳድግ ረጅሙን ጠርዝ እስከ ቢበዛ 1,024 pixels ያሳንሳል፣ እና URL ፈጽሞ አይቀበልም። ናሙና አወሳሰድ በነባሪነት `uniform` ነው። አማራጭ `scene_aware` እና የሙከራ `segment_aware` ፖሊሲዎች አስቀድሞ በተረጋገጠው አካባቢያዊ stream ላይ አንድ ተጨማሪ ቋሚ የFFmpeg ዙር ያካሂዳሉ፣ በገደብ ውስጥ ያሉ የ`showinfo` ትዕይንት የጊዜ ማህተሞችን ይመርጣሉ፣ እና detector ሲሳካ ካልቻለ፣ ጊዜው ሲያልቅ፣ ውጤቱ የተበላሸ ሲሆን ወይም የእጩዎች ስብስብ ባዶ ሲሆን ወደ ተመሳሳይ መደበኛ መካከለኛ ነጥቦች በቋሚና ሊተነበይ በሚችል መንገድ ይመለሳሉ። Segment-aware ሁኔታ የመካከለኛ ነጥብ ናሙናዎችን ከተረጋገጡት የትዕይንት ክፍተቶች ርዝመት ጋር በተመጣጣኝ ሁኔታ ይመድባል፤ የsegment-aware ማስረጃ እና ወደ ነባሪ የመመለስ ባህሪ ከታች ተዘርዝረዋል። ጥብቁ የ16-frame ገደብ በእያንዳንዱ ፖሊሲ ከምርጫ በኋላ ይተገበራል። Scene-aware ጥያቄ የአንድ frame ብቻ በጀት ሲኖረው፣ የሚሰራውን ሙሉ-ቪዲዮ ወይም focus window መደበኛ መካከለኛ ነጥብ ይጠቀማል እና `policyEffective: uniform` ብሎ ያሳውቃል፤ አንድ የተመረጠ የትዕይንት frame የጊዜ መስመሩን ሁለቱንም ጫፎች ማስጠበቅ አይችልም። ጥሪ አድራጊ አማራጭ ሆኖ ውስን focus window (`start`/`end` በሰከንድ) ሊያቀርብ ይችላል፤ ድንበሮቹ በሚዲያው ቆይታ መሠረት ይገደባሉ፣ የተገለበጡ ወይም ውስን ያልሆኑ windows ውድቅ ይደረጋሉ፣ እና ሁሉም የናሙና አወሳሰድ ፖሊሲዎች በተስተካከለው ክፍተት ውስጥ ብቻ ይከናወናሉ። የተገኘው window በናሙና አወሳሰድ metadata እና በማይታመነው መግለጫ ቅድመ ቅጥያ ውስጥ ይካተታል፣ ስለዚህ ቀጣይ ሞዴሎች የተመረጠ ቁራጭን ከሙሉ የጊዜ መስመር መለየት ይችላሉ።

በትርጉም ላይ ያተኮረ የመግለጫ ትኩረት የተለየ፣ በግልጽ የሚመረጥ ቅንብር ነው። ነባሪው `full` የትንተና ሁኔታ ያለውን የframe prompt እንዳለ ያቆያል እና የጥያቄውን ጽሑፍ ለመግለጫ ሞዴሉ ፈጽሞ አያስተላልፍም። በ`focused` ሁኔታ፣ bridge ከተመሳሳይ Chat ወይም Responses container ውስጥ በተጠቃሚ የተጻፈውን የቅርብ ጊዜ ባዶ ያልሆነ `text`/`input_text` ብቻ ያነባል፣ ወደ NFC ያስተካክለዋል፣ የቁጥጥር ቁምፊዎችን እና ክፍተቶችን ያጠቃልላል፣ እና በ500 Unicode code points ይገድበዋል። ባዶ ውጤት ወደ ትክክለኛው `full` prompt ይመለሳል። ጥቅም ላይ ሊውል የሚችል ፍንጭ በተለየ የማይታመን-የተጠቃሚ-አውድ ብሎክ ውስጥ እንደ JSON ይቀመጣል እና ለሚታዩ ዝርዝሮች ቅድሚያ መስጠት ብቻ ይችላል፤ በሚዲያው ውስጥ የሚታዩ ወይም የሚሰሙ መመሪያዎችን እንዳይከተሉ የሚናገረውን የተለየ ማስጠንቀቂያ መሻር አይችልም። የጽሑፍ ትኩረት `start`/`end` አይገምትም ወይም የጊዜ ናሙና ወሳጁን አይቀይርም።

#### FU-07 መዋቅራዊ የክፍል ማስረጃ

`segment_aware` አስቀድሞ በተረጋገጠው አካባቢያዊ የቪዲዮ stream ላይ አንድ የተገደበ ቅድመ-ትንተና ዙር ይጠቀማል። ቋሚው የfilter ሰንሰለት በመጀመሪያ ስፋቱን እስከ ቢበዛ 320 pixels ያሳንሳል፣ የትዕይንት ለውጦችን እና የቆሙ ክፍተቶችን ይለያል፣ ከዚያም ለድብዘዛ፣ ለአማካይ luma እና ለቦታዊ/ጊዜያዊ መረጃ በሰከንድ 1 frame ናሙና ይወስዳል። ዙሩ በ600 መዋቅራዊ ናሙናዎች፣ በአንድ FFmpeg/filter thread፣ በተመሳሳይ የ`file`-only protocol እና container ፈቃድ ዝርዝሮች፣ በ1 MiB የprocess ውጤት ገደብ እና በbroker የጋራ abort/deadline ውስጥ በቢበዛ 30 ሰከንድ ይገደባል። ከጥያቄው ትእዛዝ፣ filter፣ ዱካ ወይም URL ፈጽሞ አይቀበልም።

መዋቅራዊ እሴቶቹ ቋሚና ሊተነበይ የሚችል የናሙና አወሳሰድ ማስረጃ ናቸው እንጂ የቪዲዮው የትርጉም ግንዛቤ አይደሉም። ርዕሰ ጉዳዮችን፣ ድርጊቶችን፣ መግለጫዎችን፣ ንግግርን ወይም የተጠቃሚ ዓላማን አይገምቱም። የትዕይንት እና የመቆም ድንበሮች ክፍሎችን ይፈጥራሉ፤ የመቆም ሽፋን፣ ድብዘዛ፣ ብርሃን መጠን፣ ቦታዊ ዝርዝር እና ጊዜያዊ ለውጥ ያለው 1–16 frame በጀት እንዴት እንደሚመደብ ላይ ብቻ ተጽዕኖ ያሳድራሉ። ሙሉ በሙሉ የቆመ ክፍል በአንድ frame ይገደባል፣ ያልቆሙ ክፍሎች ደግሞ ለቀሪው በጀት ይወዳደራሉ። ድንበሮች ከframes ሲበልጡ፣ በጊዜ መስመሩ ላይ የተመጣጠነ ሽፋን ይጠበቃል፣ ስለዚህ በመጀመሪያ ያሉ ፈጣን ሽግግሮች ረጅም የመጨረሻ ክፍልን መደበቅ አይችሉም። ከመቆም ድንበር በ1 ሰከንድ የትንተና ጥራት ውስጥ ያሉ የትዕይንት ድንበሮች ይዋሃዳሉ።

የጎደሉ filters፣ የተበላሸ ወይም ባዶ ማስረጃ፣ የdetector ስህተት ወይም የተገደበው ቅድመ-ትንተና ጊዜ ማለቅ ወደ ትክክለኛው መደበኛ የመካከለኛ ነጥብ ፖሊሲ እንዲመለስ ያደርጋሉ። በጥሪ አድራጊ የተደረገ abort ወይም የbroker deadline ወደ ነባሪ ፖሊሲ እንዲመለስ አያደርግም፤ በሂደት ላይ ያለውን subprocess ያቋርጣል፣ ቀጣይ የframe ማውጣትን ይከለክላል፣ እና የግል ጊዜያዊ የፋይሎች ዛፍ በ`finally` ውስጥ ይወገዳል።

`scripts/perf/video-bridge-fu07-eval.ts` ከተደጋጋሚ ጥሪዎች ማስወገድ በኋላ በcaption-call የሚገኘውን ቁጠባ፣ በብዙ እንቅስቃሴ ውስጥ የበጀት ምደባን፣ የድብዘዛ/ብርሃን መጠን/SI-TI ማስረጃን፣ ረጅም የመጨረሻ ክፍል ያላቸውን ፈጣን ሽግግሮችን እና ቀስ በቀስ በሚከሰት መደብዘዝ የሚፈጠሩ የሐሰት አዎንታዊ ውጤቶችን ለመፈተሽ ቋሚና ሊተነበዩ የሚችሉ እውነተኛ የFFmpeg fixtures ያመነጫል። የቅድመ-ትንተና በእውነተኛ ሰዓት የፈጀውን ጊዜ እና፣ `/usr/bin/time` ሲኖር፣ የchild CPU እና ከፍተኛ RSS ይመዘግባል። የጥራት ማረጋገጫዎቹ መዋቅራዊ መመዘኛዎች ብቻ ናቸው። ይህ harness የተፈቀደ endpoint ወይም ቋሚ judge ስለሌለው የእውነተኛው caption-model ጥራት `HOLD` ሆኖ ይቆያል። `--caption-cost-per-call-usd` ለእያንዳንዱ ጥሪ ግልጽ የሆነ አዎንታዊ የወጪ ግምት ካላቀረበ፣ የገንዘብ ቁጠባም `HOLD` ሆኖ ይቆያል፤ script ከሁለቱም ውጤቶች አንዳቸውንም አይፈጥርም።

յուրաքանչյուր կադրի չափը սահմանափակված է 4 MiB-ով, բոլոր չմշակված կադրերինը միասին՝ 23 MiB-ով, իսկ
սերիականացված բրոքերի պատասխանը՝ 32 MiB-ով։ Մասնավոր ժամանակավոր պանակը ջնջվում է
`finally` բլոկում։ OmniRoute-ը FFmpeg-ը չի ներառում և չի ընդունում գործարկվող ֆայլի
հատուկ ուղի։ Ենթագրեր ստեղծելուց առաջ կամուրջը կիրառում է տեսողական կրկնությունների
պահպանողական հեռացում. յուրաքանչյուր JPEG փոքրացվում է մինչև 16×16 մոխրագույն բուֆեր և
համեմատվում է միայն վերջին պահպանված կադրի հետ։ Երբ պահանջվող ենթագրերի սահմանաչափը
մեկ կադրից մեծ է, արտածումը տրամադրում է թեկնածուների սահմանափակ հավաքածու՝ այդ
սահմանաչափի առավելագույնը կրկնապատիկի չափով, բայց երբեք ոչ ավելի, քան 16 կադր։
Պահանջված սահմանաչափը կիրառվում է միայն կրկնությունները հեռացնելուց հետո. եթե
սահմանաչափը առնվազն երկու է, վերջնական նոսրացման ընթացքում պահպանվում են առաջին և
վերջին ընտրված թեկնածուները։ Տարբերակավորված
`grayscale-16x16-mean-cells-v2` կանոնակարգն օգտագործում է միջին լուսավորության տարբերությունից և
այն մանրապատկերի բջիջների հարաբերակցությունից մեծը, որոնց նորմալացված տարբերությունն առնվազն 0.05 է։
Կրկնության շեմը հաստատուն 0.04 է՝ ընտրված կանխատեսելիության համար, այլ ոչ թե
որպես կատարման պահին փոփոխվող կարգավորում։ Այս երկրորդական
բարձր կոնտրաստի ազդանշանը պահպանում է փոքր շարժումները և տեսանելի տեքստի փոփոխությունները,
որոնք միայն միջինը համեմատելը կարող է թաքցնել։ Համեմատիչի կամ ապակոդավորիչի սխալների դեպքում
մշակումը շարունակվում է, և ծածկույթը պահպանվում է։ Ելքային մետատվյալներն առանձին ներկայացնում են
արտածված թեկնածուները, հաջողությամբ օգտագործված կադրերը և հեռացված տեսողական կրկնությունները։

Որպես վիդեո բացահայտ նշված մասը կարող է պահանջել ժամանակային նշումներով կոնտակտային թերթ։
Կամուրջը ստեղծում է առավելագույնը 4 սյունակից և 16 կադրից բաղկացած JPEG ցանց։ Յուրաքանչյուր
512 պիքսելանոց բջջի ներքևի բարձր կոնտրաստի շերտում դրոշմվում է սկզբնաղբյուրի ժամանակային նշումը, մինչդեռ նույն ժամանակային նշումները
մնում են նաև տեքստային մետատվյալներում՝ հետագա համադրման և աուդիտի համար։ Ամբողջական
JPEG-ի չափը նույնպես սահմանափակված է 32 MiB-ով։ Եթե `sharp`-ը չի կարող ապակոդավորել կամ կազմել ցանցը,
կամուրջը վերադառնում է առանձին JPEG կադրերին. հաճախորդի կողմից ընդհատումը, սակայն, շարունակում է
տարածվել թերթի մշակման գործողության վրա։

Ներդրման հաստատման ապացույցները միտումնավոր առանձնացված են սինթետիկ կազմման
միկրոբենչմարքից։ `scripts/perf/video-bridge-contact-sheet-eval.ts`-ը սահմանում է
սխեմայի տարբերակով A/B փորձարկման գործիքակազմ իրական OpenAI-ի հետ համատեղելի տեսողական մոդելների համար։ Այն չափում է
մատակարարի հաղորդած տոկենները, ամբողջական մշակման տևողությունը (ներառյալ թերթի կազմումը),
մոդելի կանչերի քանակը և մանիֆեստում սահմանված փաստերի պահպանումը։ Մոդելի չմշակված պատասխանները
հաշվետվության մեջ չեն գրվում. պահվում են միայն SHA-256 հեշերը և համընկած փաստերի ID-ները։ Այս
գործիքակազմը ցանցային կամ վճարովի մոդելի կանչ չի կատարում, եթե չի փոխանցվել `--execute-real`-ը և
կարգավորված չեն `--model`-ը, `OMNIROUTE_BASE_URL`-ը և `OMNIROUTE_API_KEY`-ը։ Առանց
այդ բացահայտ իրական գործարկման՝ մեքենայաընթեռնելի որոշումը մնում է `HOLD`. սինթետիկ
օգտակար բեռի կամ կանչերի քանակի չափումներն ինքնին ներդրման հաստատման ապացույց չեն։

Կանչող կողմերը կարող են աջակցվող վիդեո մասին կցել ոչ պարտադիր `transcript.cues` զանգված,
եթե արդեն ունեն համաժամեցված տեքստ։ Յուրաքանչյուր հատված պետք է պարունակի `text`,
վերջավոր `start`/`end` միջակայք՝ ստուգված տևողության սահմաններում, և թույլատրված
`source` (`client`, `embedded` կամ `audio-bridge`). `confidence`-ի լռելյայն արժեքը
`1` է և պետք է մնա `0`-ի ու `1`-ի միջև։ Լիովին նույնական հատվածները միավորվում են։
OmniRoute-ը այս մետատվյալներից երբեք տառադարձում չի սկսում. վավերացված հատվածները
պատճենվում են նկարագրված արդյունքի մեջ՝ սկզբնաղբյուրի, վստահության մակարդակի և միջակայքի հետ,
և ցուցադրվում են որպես անվստահելի դիտարկումներ կադրերի ենթագրերի կողքին։ Անվավեր,
սահմաններից դուրս կամ ծագման նշում չունեցող տեքստը մերժվում է՝ ենթագրերի հոսքին
ավելացվելու փոխարեն։ Հարցման մարմնի տառադարձման երկու ուղիներն էլ տրամադրված ծագումը
նորմալացնում են որպես `client`՝ ներառյալ ինքնակամ նշված `embedded` կամ `audio-bridge`
պիտակները։ Միայն սերվերի կողմից կառավարվող ադապտերը կարող է այդ վստահելի պիտակները նշանակել
միայն կոդի միջոցով հասանելի `trustedSource` արգումենտով. հարցման JSON դաշտը չի կարող հասնել
այդ արգումենտին։ Տառադարձման տեքստը մնում է մեդիայից ստացված անվստահելի բովանդակություն՝
անկախ դրա ծագումից, և երբեք չպետք է որոշի թույլտվության տրամադրումը։

Ընդլայնված հնարավորություններ օգտագործող կանչող կողմը կարող է նույն վիդեոյի համար տրամադրել `audioTranscript` ուղի.
այն դիտարկվում է որպես հաճախորդի տրամադրած տեքստ, այլ ոչ սերվերի կողմից կատարված տառադարձման ապացույց։
Միաձուլման հանգույցը տեսողական և ձայնային դիտարկումները մշակում է
մեկ վերջնաժամկետի և ընդհատման ազդանշանի ներքո, դասավորում դրանք ընդհանուր ժամանակագծի վրա, միավորում
լիովին նույնական գրառումները և հաղորդում մասնակի արդյունք, երբ հաջողվում է միայն մեկ ճյուղը։
Անվավեր `audioTranscript`-ը հանգեցնում է այդ մասնակի արդյունքին. տեսողական
նկարագրությունը պահպանվում է, իսկ ձայնային ճյուղը գրանցում է մաքրված սխալի կոդ՝
ամբողջ վիդեոյի մշակումը ձախողելու փոխարեն։ Յուրաքանչյուր ճյուղի հասանելիությունը, մասնակի արդյունքի նշիչը
և մաքրված սխալի կոդերը պահպանվում են նկարագրված արդյունքի մեջ,
պաշտպանիչ մեխանիզմի մետատվյալներում (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), արդյունքների քեշի մետատվյալներում և կամրջի
միաձուլման հաշվիչներում։ Video Bridge-ի լռելյայն ուղին չի գործարկում խոսքից տեքստի վերածում
և չի ներբեռնում մեդիայի երկրորդ պատճենը. առանց այդ բացահայտ տրամադրված ուղու՝ այն մնում է
միայն վիդեոյի մշակման ուղի։

**የትራንስክሪፕት ማቆየት (#12150 P1).** ይህ Video Bridge (በራሱ በፈቃድ የሚነቃ) የትራንስክሪፕት መግለጫ በሚያሳይበት ጊዜ ሁሉ በራስ-ሰር ይተገበራል — የተለየ የማቆየት ፍላግ የለም። ጥያቄ ማንኛውንም የትራንስክሪፕት መግለጫ (በጥሪ አድራጊው የተገለጸ `transcript` ወይም የተዋሃደ `audioTranscript`) ሲያሳይ፣ መከላከያው `videoBridgeObserved` ብሎ ያመለክተዋል እና የቪዲዮ መግለጫውን የተደበቀ ቅጂ ያዘጋጃል — የእያንዳንዱ መግለጫ ነፃ ጽሑፍ በ`[redacted-video-transcript]` የተተካበት ተመሳሳይ አቀራረብ። ይህም ሕብረቁምፊው ከመገንባቱ በፊት የተዋቀረውን የመግለጫ መስክ በመተካት ይዘጋጃል (የተጠፍጣፋውን ጽሑፍ በመተንተን ፈጽሞ አይደለም፤ ስለዚህ `]` የያዙ እንደ `[inaudible]`/`[music]` ያሉ ጽሑፎችን ጨምሮ ጠላታዊም ሆነ መደበኛ የመግለጫ ይዘት ሊቀር አይችልም)። በጥሪ ሎግ ውስጥ የሚቀመጠው የጥያቄ አካል፣ ከቪዲዮ የተገኘውን እያንዳንዱን የጽሑፍ ክፍል በዚያ የተደበቀ ቅጂ ይተካል፤ ማዛመዱም በይዘት እኩልነት ይደረጋል። የ`fullText` መለያ ከተጠናቀቀው የቅድመ-ጥሪ መከላከያ ውሂብ እንደገና ይነበባል፤ በዚህም በሰንሰለቱ ውስጥ በኋላ የሚመጡ መከላከያዎች (የግል መረጃ እና የማረጋገጫ መረጃ ደባቂዎች፣ ቅድሚያ 10/95) የመግለጫውን ጽሑፍ በቦታው ከቀየሩ በኋላ፣ እንዲሁም የስርዓት መመሪያ/ርክክብ/ማህደረ ትውስታ መጨመር የመልዕክት ድርድሩን ከቀየረ በኋላም ማዛመዱ ይሳካል። ወደ ሞዴሉ የሚላከው የጥያቄ አካል አይለወጥም። የታየ ጥያቄ ዘላቂ Memory አይሞላም (ከጥያቄም ሆነ ከምላሽ የሚመነጭ ማውጣት ይዘለላል)፤ ስለዚህ የሞዴሉ ራሱ ምላሽ የትራንስክሪፕት ጽሑፍን ወደ Memory መልሶ ሊያስገባ አይችልም።

**ጥሬ የቪዲዮ መስኮች (#12430).** ብሪጁ ሲነቃ እና ቤተኛ የቪዲዮ ድጋፍ መኖሩ ሳይታወቅ ወይም ሳይኖር፣ የተገለጹ `transcript`/`audioTranscript` መስኮችም የመግለጫ ማዘጋጀት ቢሳካ ባይሳካ ወይም የ`maxVideos` ገደብ ቢደረስ እንኳ `videoBridgeObserved` ያነቃሉ። `null` እና ባዶ ሕብረቁምፊዎች ይቆጠራሉ፤ የሌሉ መስኮች እና ቪዲዮ ያልሆኑ ሜታዳታዎች ግን አይቆጠሩም። የሚቀመጡ ቅጂዎች እነዚህን መስኮች ይደብቃሉ ወይም ጥያቄውን ይተዋሉ፤ መሸጎጫዎችና Memory ይዘለላሉ።

በእነዚህ የአማራጭ መንገዶች፣ ትክክለኛ በጥሪ አድራጊው የቀረቡ መግለጫዎች መደበኛ ያልሆኑ የአቅራቢ መስኮች ከመሆን ይልቅ የሚደገፉ `text`/`input_text` ክፍሎች ይሆናሉ። በጥያቄው የቀረቡት ሁለቱም ትራኮች ያልታመኑ የ`client` ምልከታዎች ሆነው ይቀጥላሉ፣ ቪዲዮው እንዳልተገለጸ እና የጊዜ ማህተሞቹ ከሚዲያው ጋር እንዳልተረጋገጡ ግልጽ ማስጠንቀቂያም ይኖራል። ነባሩ የ256 መግለጫዎች/64-KiB ጠቅላላ ገደብ እና የእያንዳንዱ መግለጫ ገደብ በሁለቱ ትራኮች ላይ በጋራ ይተገበራሉ፤ የጊዜ ማህተሞች በደላላው የ600 ሰከንድ ከፍተኛ ገደብ እና በቀረበ ማንኛውም የትኩረት ጊዜ ክልል ውስጥ መሆን አለባቸው። ልክ ያልሆኑ ትራኮች እንደ የዘፈቀደ ጽሑፍ ወደ ፊት ሳይላኩ ይጣላሉ፤ የጋራ ገደባቸው ካልተሻገረ ትክክለኛ የሆነው ሌላ ትራክ አሁንም ሊጠቀም ይችላል። `null`/ባዶ መስኮች ጽሑፍ አይጨምሩም። ይህ አማራጭ መንገድ የሚዲያ ማምጣት ወይም ወደ ጽሑፍ መቀየር አይጨምርም። የትራንስክሪፕት ማስፋፊያ መስኮች ከአማራጩ የቪዲዮ ተሸካሚ እና ከ`video_url`/`source` ነገሮቹ ይወገዳሉ። የOpenAI የሽቦ ፕሮቶኮል የተፈቀዱ ነገሮች ዝርዝር ጥብቅ ሆኖ ይቀጥላል፤ ቤተኛ ድጋፋቸው ያልታወቀ የቪዲዮ ተሸካሚዎች ይገኛሉ፣ ጽሑፍ ብቻ እንደሚደግፉ የታወቁ መዳረሻዎችም ደህንነታቸው የተጠበቀ ምልክቶችን ይይዛሉ። የተዋቀሩ የተደበቁ ቅጂዎች በመጨረሻ የተያያዘውን የትራንስክሪፕት ጽሑፍ ይጠብቃሉ፣ የጥሪ አድራጊው የመጀመሪያ ጥያቄ ግን አይለወጥም። ቤተኛ ድጋፍ ያላቸው መዳረሻዎች እና የተሰናከሉ ብሪጆች ነባሩን የማለፍ ባህሪ ይጠብቃሉ።

ተጨማሪ የሚቀመጡ ቅጂዎችም ያንኑ የታየ-ጥያቄ ምልክት ይጠቀማሉ። ጥሬው የቅድመ-መከላከያ የደንበኛ ጥያቄ ቅጽበታዊ ቅጂ፣ በማህደረ ትውስታ ውስጥ ያለው በመጠባበቅ ላይ ያለ ጥያቄ፣ እና ቀድሞ የተከለከለ ጥያቄ ሎግ በቪዲዮ ክፍሎች ያሉ የትራንስክሪፕት መስኮችን በተዋቀረ መንገድ ይተካሉ፤ በፓይፕላይን ደረጃዎች እና በአውድ ርክክብ የሚፈጠሩ የሕብረቁምፊ መመሪያዎች ደግሞ በሚቀመጠው የጥያቄ አካል መድረሻ ላይ ይደበቃሉ። የሚቀመጠው `video_content_removed` ምልክት፣ `previous_response_id` ቀጣይ ጥያቄ ሆን ተብሎ የተጣለ ጽሑፍን እንደገና ከመገንባት ይልቅ በደህና እንዲከሽፍ ያደርገዋል። የታየ ጥያቄ ከመመዝገቡ በፊት የአንድ ክፍል የተደበቀ ቅጂ ከጠፋ፣ ወይም በኋላ ከሚደረጉ የጥያቄ ለውጦች በኋላ ከበርካታ የቪዲዮ ቅጂዎች አንዱ እንኳ መዛመድ ካልቻለ፣ በከፊል የተደበቀ ትራንስክሪፕት ከማቆየት ይልቅ የሚቀመጠው የጥያቄ አካል ሙሉ በሙሉ ይተዋል።

ለታየ ጥያቄ፣ የሞዴል ምላሽ የተዋቀረ የመግለጫ ድንበር ሳይኖረው ማንኛውንም የትራንስክሪፕት ክፍል ሊጠቅስ ይችላል። ስለዚህ በጥሪ ሎግ ውስጥ የሚቀመጠው `responseBody` በመተው ምልክት ይተካል፤ ዝርዝር የፓይፕላይን ውጤት (የአቅራቢ/ደንበኛ አካላትን እና የፍሰት ቁርጥራጮችን ሊያካትት የሚችል) አይቀመጥም። የትርጉም፣ የተደጋጋሚ ጥያቄ ተመሳሳይ ውጤት፣ እና የአስተሳሰብ ዳግም-ማጫወት መሸጎጫዎች ለዚያ ጥያቄ ንባብና ጽሕፈትን ይዘላሉ። የአቅራቢው ጥያቄ እና ለደንበኛው የሚታየው ምላሽ አይለወጡም። ዝርዝር ውጤቱ ሲተው ቀደምት የግንኙነት ማቆያ ባይቶች ከጊዜያዊ ቋቱ ይወገዳሉ። የKiro የተበላሸ EventStream ማስጠንቀቂያ የውሂቡን ባይት ብዛት ብቻ ያሳውቃል፤ ይዘቱን ወይም የJSON ተንታኙን ጥሬ ስህተት ፈጽሞ አያሳውቅም።
ይህ ሁሉም ሌሎች የአቅራቢ/ተሰኪ የምርመራ መልዕክቶች ተፈትሸዋል ማለት አይደለም፤ ሰፊው የሚቀመጡ መድረሻዎች ፍተሻ በ#11658 ይከታተላል።

ውስጣዊው `/api/modality-bridge/video/drilldown` የሕይወት ዑደት፣ በloopback/token የተረጋገጠ የተለየ የመሸጎጫ መሠረት ነው። እያንዳንዱ ክዋኔ መደበኛ የሆነ ግልጽ ያልሆነ የባለቤት መለያም ይፈልጋል። የምርት ጥሪ አድራጊ ከመንቃቱ በፊት ያን መለያ ከተረጋገጠው ተከራይ ማመንጨት አለበት፣ እና በደንበኛ የተመረጠ እሴትን ፈጽሞ ማስተላለፍ የለበትም። የመሸጎጫ ቁልፎች ያን ባለቤት ከመደበኛ የክፍለ ጊዜ እና የቪዲዮ ማጣቀሻ መለያዎች ጋር ያያይዛሉ፣ ከSHA-256 የተመነጩ ቁልፎቻቸውን ብቻ ያከማቻሉ፣ ንባብንም ሆነ ስረዛን በዚያው ባለቤት ወሰን ውስጥ ያደርጋሉ። መሸጎጫው በአንድ ግቤት ቢበዛ 16 የተመነጩ JPEG ፍሬሞችን ያከማቻል፣ ከአሥር ደቂቃ በኋላ ጊዜያቸውን ያሳልፋል፣ እና በገደብ ውስጥ ያሉ `start`/`end` ንባቦችን ወይም ግልጽ የክፍለ ጊዜ ስረዛን ይደግፋል።

እያንዳንዱ ባለቤት በ16 ግቤቶች እና በ64 MiB መደበኛ JPEG ውሂብ ይገደባል። እነዚህ ገደቦች ከዓለም አቀፉ የ64 ግቤቶች/256 MiB ከፍተኛ ገደብ ነጻ ናቸው፤ የባለቤት ኮታ ጫና፣ ዓለም አቀፍ LRU ማስወገድ ከመታሰቡ በፊት፣ የዚያን ባለቤት ብቻ በቅርቡ ያልተጠቀሙባቸውን ግቤቶች ያስወግዳል። ጊዜያቸው ያለፈ ግቤቶች በመሸጎጫ እንቅስቃሴ ጊዜ ከባለቤትም ሆነ ከዓለም አቀፍ ሂሳብ ይጠረጋሉ፣ ስረዛ እና የማረጋገጫ ውድቀት ደግሞ ከፊል ምትክን አያጸድቁም።

ካሹ መደበኛ ያልሆነ Base64፣ ከሚያስፈልገው በላይ የሆነ padding፣ JPEG ያልሆነ ሚዲያ፣ ቅርጸታቸው የተበላሸ ወይም
የተቆረጡ JPEG ፋይሎችን፣ እና በተገደበ ሙሉ-ምስል `sharp`
decode ወቅት ማስጠንቀቂያ የሚያመነጩ JPEG ፋይሎችን አይቀበልም። የተቀበለውን እያንዳንዱን ምስል እንደ መደበኛ JPEG እንደገና ኢንኮድ ያደርጋል፣ በጥሪ አድራጊው የቀረቡ መስኮችን ከማመን ይልቅ ስፋትንና ቁመትን
ከተዲኮዱት ባይቶች ያወጣል፣ እና በመጨረሻ የተጨመሩ
polyglot ባይቶችን ከማስቀመጥ ይልቅ ይጥላል። በሁለቱም ኮታዎች ላይ የሚቆጠረው የተገደበው መደበኛ የተጨመቀ ቋት ብቻ ነው። የJSON የመተላለፊያ ገደብ ለ32 MiB
የተዲኮደ ግቤት ጣሪያ የBase64 ተጨማሪ መጠንን ያካትታል። እያንዳንዱ
የተከማቸ የተዋረደ ውጤት የተረጋገጠውን የJPEG ቅርጸት/ጥራት፣ የናሙና መውሰድ ፖሊሲ፣
የውጤቱን ስሪት፣ የተፈጠረበትን ጊዜ፣ በሰርቨሩ የተሰላውን የይዘት ሃሽ፣ እና በሃሽ የተወከለውን የወላጅ
ማጣቀሻ ከታመነው ጥሪ አድራጊ የወላጅ-ይዘት ሃሽ ጋር ይመዘግባል። ስረዛ ከአቶሚክ የካሽ ማስቀመጥ በፊት
በአሲንክሮናዊ decode/hash ደረጃዎች መካከል ይፈተሻል።

ይህ ዙር እስካሁን የምርት አመንጪን ከመንገዱ ጋር አያገናኝም፣ እና
ባለብዙ-ጥራት ልዩነቶችን መምረጥም አያቀርብም። ስለዚህ ግልጽ የVideo Bridge ጥያቄ
መንገድ ተጨማሪ ሥራ አያስከትልም፤ ከtenant ጋር የተያያዘ የprincipal መወሰን እና
ሙሉ የFU-08 ባለብዙ-ጥራት የሕይወት ዑደት የተጠናቀቀ ባህሪ ተብለው ሳይመዘገቡ
በግልጽ የቀጣይ ሥራ ይሆናሉ።

ፍሬሞች በተዋቀረው የVideo ሞዴል በቅደም ተከተል መግለጫ ያገኛሉ። ባዶ
የVideo ተኪ ቅንብር የVision ቅንብሩን ይወርሳል፤ ሁለቱም ባዶ ከሆኑ፣ የVision
አውቶማቲክ ራውተር ውጤታማውን ምስል ማስተናገድ የሚችል ሞዴል ይመርጣል። የተሳኩ መግለጫዎች
ዋናውን ክፍል በቋሚ `[Video description:` ቅድመ ቅጥያ ይተካሉ፤ ይህም
ጽሑፉ ከማይታመን ሚዲያ የተገኘ ምልከታ መሆኑን ያመለክታል እና ተከታይ
ሞዴሎች በሚዲያው ውስጥ ያሉ መመሪያዎችን እንዳይከተሉ ያሳውቃል። የፍሬም መግለጫ ካሽ ቁልፎች
የJPEG ባይቶችን፣ ፕሮምፕቱን፣ የጊዜ ማህተሙን እና ውጤታማውን ሞዴል ያካትታሉ፤ የሚካሹት የተሳኩ
መግለጫዎች ብቻ ናቸው። የካሽ ግቤቶች ተለዋጭ ሞዴልን ጨምሮ መግለጫውን በእርግጥ ያመነጨውን ሞዴል
ያስቀምጣሉ፤ የተለያዩ ፍሬሞች በተለያዩ ሞዴሎች
ሲመነጩ ብሪጁ `mixed` ብሎ ሪፖርት ያደርጋል። ከካሽ ሲገኝ የጠየቀው የመምራት ዕቅድ ተብሎ እንደገና ከመሰየም ይልቅ የአመንጪው ማንነት እንዳለ ይጠቀማል። የሙሉ-ቪዲዮ ውጤት
ካሽ ቁልፍ ውጤቱን በሚቀይሩ ሁሉም ግቤቶች ላይ ይመሠረታል — ፕሮምፕት፣ ውጤታማ
ሞዴል፣ የናሙና መውሰድ ፖሊሲ፣ የፍሬም ብዛት፣ የትርጉም ትንተና ሁነታ፣ መደበኛ የተደረገው የትኩረት ፍንጭ SHA-256
አሻራ፣ የትኩረት ጊዜ ክልል፣ `transcript`፣
`audioTranscript`፣ እና የcontact-sheet ምልክት — ስለዚህ ከእነዚህ መጠኖች ማንኛውም ለውጥ
የካሽ አለመገኘትን ያስከትላል፣ ያረጀ ውጤት እንደገና አይጠቀምም። የምስላዊ ድግግሞሽ ማስወገድ ፖሊሲ
ስሪት፣ ጣራ እና የተገደበ የእጩ ፍሬሞች ብዛትም በውጤት-ካሽ ቁልፍ እና በዲበ ውሂብ ውስጥ በግልጽ ይካተታሉ፤ ስለዚህ የፖሊሲ ለውጥ ያረጀ
የሙሉ-ቪዲዮ መግለጫን እንደገና መጠቀም አይችልም። የውጤት-ካሽ v4 ዲበ ውሂብ ሁነታውን እና
አሻራውን ያስቀምጣል፣ ጥሬውን የተጠቃሚ ተግባር ግን አያስቀምጥም። የጥበቃ ደንብ ዲበ ውሂብ የተጠየቀውንም ሆነ
ውጤታማውን የትንተና ሁነታ ያሳውቃል፤ ጥቅም ላይ የሚውል የተጠቃሚ ጽሑፍ ሳይኖር የተጠየቀ `focused` ሁነታ
በውጤታማነት `full` ተብሎ ይሪፖርታል።

የጥበቃ ደንቡ ሁሉንም የሚደገፉ የቪዲዮ ክፍሎች ያወጣል፣ ነገር ግን ከ
`modalityBridgeVideoMaxVideos` በላይ አይገልጽም።
`supportsVideo === false` መሆኑ ለተረጋገጠ ዒላማ፣ ያልተሳኩ እና ገደቡን ያለፉ ቪዲዮዎች ጥሬ
ቪዲዮ እንዳይቀር ግልጽ ደህንነቱ የተጠበቀ የጽሑፍ ምልክቶች ይሆናሉ። አቅሙ በማይታወቅበት ጊዜ እነዚያ ክፍሎች
የቪዲዮ መያዣቸውን ይይዛሉ፤ ማንኛውም ተለዋጭ ትራንስክሪፕት ከላይ ያለውን የተገደበ የጽሑፍ
ልወጣ ይከተላል። `supportsVideo === true` ያላቸው ዒላማዎች ብሪጁን ያልፋሉ።
የደንበኛው ጥያቄ የማቋረጥ ምልክት ወደ ማውረድ፣ የደላላ ወረፋ፣
ንዑስ ሂደቶች እና የመግለጫ ጥሪዎች ይተላለፋል፤ ማቋረጦች በቪዲዮዎች መካከል ያቆማሉ እና ጥሬ ሚዲያን እንዲያልፍ ፈጽሞ አይፈቅዱም።

የአሂድ ጊዜ ቅንብሮች በDB የተደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                                 | ነባሪ         | ክልል / ባህሪ                                                                             |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | አማራጭ የአሂድ ጊዜ ባህሪ፣ በግልጽ ፈቃድ የሚነቃ                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` አጠቃላይ መግለጫዎችን ያስጠብቃል፤ `focused` የተገደበ፣ የማይታመን የቅርብ ጊዜ የተጠቃሚ አውድ ይጠቀማል          |
| `modalityBridgeVideoModel`          | `""`        | የVision Bridge ሞዴልን ይወርሳል                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`፣ `scene_aware` ወይም በመጠን ተመጣጣኝ `segment_aware`፤ መለያው ካልሰራ ወደ `uniform` ይመለሳል |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                        |

ከ120 ሰከንድ በላይ የሆኑ የድሮ የተከማቹ የVideo ጊዜ ገደብ እሴቶች በደላላው የመጨረሻ ጊዜ ላይ ይገደባሉ፤
ከዚያ ገደብ በላይ የሆኑ አዲስ የቅንብር ጽሑፎች ይከለከላሉ።
`GET /api/modality-bridge/video/runtime` ከማረጋገጥ ወይም የአሂድ ጊዜ ሁኔታን ከመፈተሽ በፊት
በታመነ ምልክት የተረጋገጠ የloopback አካባቢያዊነትን ይጠይቃል፣ ከዚያም የአስተዳደር
ማረጋገጥን ይጠይቃል። የሚመልሰው `available`ን፣ የተጣሩ የFFmpeg/ffprobe ስሪቶችን እና አሂድ ጊዜው በማይገኝበት ጊዜ ቋሚ
ምክንያትን ብቻ ነው። ውስጣዊው የማውጣት መጨረሻ ነጥብ ይፋዊ የሰቀላ API አይደለም፦ የወረፋ
መሙላት `503` ከ `Retry-After` ጋር ይመልሳል፣ የጥሪ አድራጊ ግንኙነት መቋረጥ
`499` ይመልሳል፣ እና የደላላው ቋሚ የመጨረሻ ጊዜ `504` ይመልሳል። የተለወጡ ምላሾች
`video->text;model=<visionModel>;parts=<videos>`ን የVision ወይም Audio ክፍሎችን ሳያስወግዱ ወደ ማዕከላዊው
`x-omniroute-modality-bridge` ራስጌ ይጨምራሉ።

### የPII መደበቂያ (`piiMasker.ts`)

በ**ሁለቱም** ደረጃዎች ላይ ይሰራል።

- **`preCall`** payload-ን ይቀዳል፣ `system`፣ `messages`፣ `input` እና
  `prompt`-ን (ተራ የሕብረቁምፊ ንጥሎችን ጨምሮ) ይመረምራል፣ እና በሕብረቁምፊ `content`/`text`
  መስኮች ላይ `processPII()`-ን (ከ
  `@/shared/utils/inputSanitizer`) ይተገብራል።
  `PII_REDACTION_ENABLED=true` ሲሆን፣ የተገኘ PII ከሚላከው
  payload ይደበቃል። ይህ ከ`INPUT_SANITIZER_MODE` ነጻ ነው (ይህም
  የprompt injection ፖሊሲን ብቻ ይቆጣጠራል)። መደበቅ ሲጠፋ፣ ጥሪው ይዘቱን
  ሳይቀይር የተገኙ ነገሮችን ብዛት ይመዘግባል።
- **`postCall`** ምላሹን ሙሉ በሙሉ ይቀዳል፣ `sanitizePIIResponse()`-ን እና
  የResponses API ቅርጽ የመደበቅ ሂደትን (`maskResponsesOutput` —
  `output_text` እና `output[].content[].text`-ን ይሸፍናል) ያስኬዳል። ማንኛውም
  መደበቅ ከተከናወነ፣ የተሻሻለው ምላሽ ዋናውን ይተካል።

ይህ guardrail ፈጽሞ አያግድም፤ መረጃ ብቻ ይጨምራል (`meta.detections`፣
`meta.redacted`) ወይም ይዘቱን እንደገና ይጽፋል።

#### በአይነት መምረጥ፣ ብጁ ፓተርኖች እና የተገኙ ነገሮች ቆጣሪዎች

**Dashboard → Settings → Security → PII masking** _ምን_ እንደሚደበቅ ይመርጣል።
መደበቅን ግን አያበራም፤ ይህ አሁንም በ`PII_REDACTION_ENABLED` (ጥያቄ) እና
በ`PII_RESPONSE_SANITIZATION` (ምላሽ + SSE) ይቆጣጠራል፣ ሁለቱም በነባሪ ጠፍተዋል።

- **በአይነት መምረጥ** — አብሮ የተካተቱት id-ዎች በ
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) ተዘርዝረዋል። ምንም
  ካልተዋቀረ ሁሉም አይነቶች ማለት ነው (ይህ ቅንብር ከመኖሩ በፊት የነበረው ባህሪ)።
  የጥያቄ ሞተሩ `ssn_us` ፓተርን ወደ `ssn` ያዛምዳል። አብነቶች (Minimal, Standard, Financial,
  Brazilian, USA, Full) በUI ውስጥ ያሉትን የምርጫ ሳጥኖች ብቻ ይሞላሉ።
- **ብጁ ፓተርኖች** — እስከ 20 regex ወይም wildcard ፓተርኖች (`*` = እስከ 64
  ክፍተት ያልሆኑ ቁምፊዎች፣ `?` = አንድ ቁምፊ)። የሚዛመዱ ክፍሎች `[CUSTOM_REDACTED]` ይሆናሉ።
  እያንዳንዱ ፓተርን በ`compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) ውስጥ ያልፋል፦ ከ500 ቁምፊዎች መብለጥ
  የለበትም፣ የሚፈቀዱት flags `g i m s u` ብቻ ናቸው፣ ሊcompile መደረግ አለበት፣
  የ`safe-regex` ፈተናን (catastrophic backtracking) ማለፍ አለበት፣ እና
  ከባዶ ሕብረቁምፊ ወይም ከመደበቂያ placeholder ጋር መዛመድ የለበትም።
  ያልተሳካ ፓተርን ሲቀመጥም ሆነ ሲፈተን ውድቅ ይደረጋል፤ ያልተሳካ የተቀመጠ
  ረድፍ ደግሞ በአሂድ ጊዜ compile ከመደረግ ይልቅ ይዘለላል። ብጁ ፓተርኖች
  የሚሰሩት መደበቅ ሲበራ ብቻ ነው።
- **የተገኙ ነገሮች ቆጣሪዎች** — በአይነት የተከፋፈሉ ቆጠራዎች (የተዛመዱ
  እሴቶች ፈጽሞ አይመዘገቡም) በማህደረ ትውስታ ይቀመጣሉ እና እንደገና ሲጀመር
  ይጸዳሉ (`src/lib/pii/piiDetectionStats.ts`)። የሚጨምሩት መደበቅ ሲበራ ብቻ ነው።

ቅንብሮቹ በ`key_value` ሰንጠረዥ (namespace `pii_settings`፣
`src/lib/db/piiSettings.ts`) ውስጥ ይቀመጣሉ እና በ1 s cache በኩል ይነበባሉ። API፦

| ዘዴ     | መንገድ                     | ዓላማ                                                          |
| ------ | ------------------------ | ------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | የflag ሁኔታ፣ `enabledTypes`፣ `customPatterns`፣ የተገኙ ነገሮች ቆጣሪዎች |
| `PUT`  | `/api/settings/pii`      | `enabledTypes` (`null` = ሁሉም) እና/ወይም `customPatterns`-ን መተካት |
| `POST` | `/api/settings/pii/test` | አንድ ፓተርንን ከፍተኛው 8 KB በሆነ ናሙና ላይ ያለ ማስቀመጥ መፈተን፤ ምንም አይቀመጥም    |

ሦስቱም የአስተዳደር ማረጋገጫ ይፈልጋሉ እና body-ን በZod
(`src/shared/validation/schemas/piiSettings.ts`) ያረጋግጣሉ።

### Prompt Injection (`promptInjection.ts`)

በተጠቃሚ በቀረበ ይዘት ውስጥ ያሉ ጎጂ አወቃቀሮችን ይለያል እና የተዋቀረውን
ፖሊሲ ያስፈጽማል። ባህሪው በአካባቢ ተለዋዋጮች እና በconstructor
አማራጮች ይመራል፦

| ቅንብር     | የአካባቢ ተለዋዋጭ                                                                                           | ነባሪ    | ውጤት                                                                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| መብራት     | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | `false` ሲሆን፣ guardrail ቀጥታ ይመለሳል።                                                                                                                             |
| ሁነታ      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | የinjection ፖሊሲ፦ `block`፣ `warn` ወይም `log`። (`redact` ለኋላ ተኳኋኝነት ይቀበላል፣ ነገር ግን የinjection ጽሑፍን **አያስወግድም**፤ የጥያቄ PII ዳግም ጽሑፍ በ`PII_REDACTION_ENABLED` ይቆጣጠራል።) |
| የማገድ ገደብ | `blockThreshold` አማራጭ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ተለዋጭ ስም `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | ለማገድ የሚያስፈልገው ዝቅተኛው የክብደት ደረጃ። Medium በነባሪ ምልከታ ብቻ ነው።                                                                                                        |

**የሁነታ ቅድሚያ** (`getMode`)፦ የጠሪው `options.mode` →
`INJECTION_GUARD_MODE` **የDB feature-flag ቅድሚያ ሰጥቶ መተካት** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`። ስለዚህ በdashboard የተደረገ ቅድሚያ ሰጥቶ መተካት ከenv ተለዋዋጮች
ይቀድማል፤ የFeature Flags UI በሥራ ላይ ያለውን guard ያለ እንደገና ማስጀመር
ይቆጣጠራል። የDB ንባቡ ችግር ቢያጋጥመው ደህንነቱን በጠበቀ መንገድ ይሠራል፦
ስህተት ከተፈጠረ guard-ው ወደ env-መሠረት ባህሪ ይመለሳል፣ እና ቅድሚያ
ሰጥቶ መተካት ካልተዋቀረ ባህሪው በenv ብቻ ከሚወሰነው ጋር ተመሳሳይ ነው።

የማወቂያ ምንጮች፦

1. `sanitizeRequest()` ከ`@/shared/utils/inputSanitizer` (በpipeline ውስጥ
   በሌሎች ቦታዎችም የሚጠቀሙበት የጋራ የማወቂያ ስብስብ)።
2. አብረው የተካተቱ `DEFAULT_GUARD_PATTERNS` (በአሁኑ ጊዜ `system_override_inline` እና
   `markdown_system_block`፣ ሁለቱም `high` የክብደት ደረጃ አላቸው)።
3. በconstructor አማራጮች የሚተላለፉ አማራጭ `customPatterns` (ሕብረቁምፊዎች፣ regex፣
   ወይም `{ name, pattern, severity }` መዝገቦች)።

`mode === "block"` **ሲሆን** እና ቢያንስ አንድ የተገኘ ነገር የክብደት ደረጃውን
ካሟላ፣ `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` ይመልሳል። በ`warn`/`log` ሁነታዎች የጥበቃ ስርዓቱ መዝገብ ይይዛል፣ ግን
ጥሪውን ይፈቅዳል። በሬጅስትሪው በኩል ሳያልፉ ጥያቄዎችን መገምገም ለሚፈልጉ
ጠሪዎች፣ የጋራ አጋዥ ፋንክሽኑ `evaluatePromptInjection()` ወደ ውጭ ይላካል።

**የቅኝት ገደብ (v3.8.20):** መመርመሪያው የሚፈትሸው ከተቀላቀለው የጥያቄ ጽሑፍ
**የመጀመሪያውን 16 KB** ብቻ ነው — በ`src/shared/utils/inputSanitizer.ts` ውስጥ
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 ባይት)። `detectInjection()` እና
`evaluatePromptInjection()` ሁለቱም የስርዓተ ንድፍ ዑደቱን ከማስኬዳቸው በፊት
`slice(0, MAX_INJECTION_SCAN_BYTES)` ይጠቀማሉ። የማስገባት መመሪያዎች ከግቤቱ መጀመሪያ
አቅራቢያ ስለሚገኙ፣ ይህ የመለየት ብቃትን ሳያዳክም በብዙ መቶ KB ጭነቶች ላይ
የregex CPU/GC አጠቃቀምን ይገድባል (cf. #3932, #4041)።

### የማረጋገጫ መረጃ መሸፈኛ (`credentialMasker.ts`)

በ**ሁለቱም** ደረጃዎች ይሰራል፣ በነባሪው ሰንሰለት መጨረሻ ላይ ይገኛል (ቅድሚያ `95`)።
ከወደ ውጭ በሚላከው ጭነት (የመልዕክት ይዘት፣ የመሣሪያ ጥሪ ግቤቶች፣ የመሣሪያ ውጤቶች)
**እና** ከአቅራቢው ምላሽ ውስጥ የታወቁ የAPI ቁልፍ / የሚስጥር ቶከን ስርዓተ ንድፎችን
ይሸፍናል፤ በዚህም በጥያቄ ውስጥ የተለጠፈ (ወይም በመሣሪያ ውጤት ተመልሶ የታየ)
የማረጋገጫ መረጃ ለከፍተኛ ደረጃው አቅራቢ ወይም ለደንበኛው እንዳይጋለጥ ያደርጋል።

- **በግልጽ ምርጫ ብቻ ይነቃል**፣ ከPII መሸፈን ጋር ተመሳሳይ አሠራር ነው (ከHard Rule #20 ጋር የተያያዘ)፦
  `settings.credentialRedactionEnabled === true` **ወይም**
  `CREDENTIAL_REDACTION_ENABLED=true` ካልሆነ ተሰናክሏል። ሲጠፋ የጥበቃ ስርዓቱ ምንም እርምጃ
  አይወስድም — ፈጽሞ አያግድም ወይም እንደገና አይጽፍም።
- `redactCredentials()` ሙሉውን የጭነት/ምላሽ ዛፍ በ`walkValue()` ይቃኛል
  (ከፕሮቶታይፕ ብክለት የተጠበቀ፣ በ`WeakSet` አማካኝነት ከዑደቶች የተጠበቀ)፣ እና የተመሳሰሉ
  ክፍሎችን በ`[REDACTED:<type>]` ምትክ ይተካል፤ የሚቀዳውም በእውነት የተለወጡትን ቅርንጫፎች
  ብቻ ነው።
- `CREDENTIAL_PATTERNS` የLLM አቅራቢ ቁልፎችን (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate)፣ የVCS/SaaS ቶከኖችን (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord)፣ የክፍያ ቁልፎችን (Stripe, Square)፣ የደመና
  ቁልፎችን (AWS መዳረሻ ቁልፍ, Twilio, SendGrid, Mailgun)፣ የግል ቁልፎችን / JWTsን፣
  የማረጋገጫ መረጃ የያዙ የግንኙነት ሕብረቁምፊዎችን (`mongodb://user:pass@...`፣ ወዘተ)፣ እና
  አጠቃላይ የ`Authorization`/`x-api-key`/`api-key`/`apikey` የራስጌ እሴት
  ስርዓተ ንድፍን ይሸፍናል። የራስጌ ቅርጽ ያላቸው ቁልፎች (`authorization`, `x-api-key`, `api-key`,
  `apikey`) በአጠቃላይ የጽሑፍ regex ሳይሆን በመዋቅር ደረጃ ይሸፈናሉ (እሴቱ ብቻ፤ እንደ
  `Bearer `/`Basic ` ያለ የመርሐግብር ቅድመ ቅጥያ ይጠበቃል)።
- የጥበቃ ስርዓቱ ፈጽሞ አያግድም፤ እንደገና ይጽፋል (`modifiedPayload` /
  `modifiedResponse`) እና ማብራሪያ ያክላል (`meta.credentialsRedacted`, `meta.count`) ብቻ።

የድጋሚ ችግር መከላከያ፦ `tests/unit/credential-masker-guardrail.test.ts`።

## መሠረታዊ ውል (`base.ts`)

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
  block?: boolean; // true ሲሆን ሰንሰለቱን ወዲያውኑ ያቋርጣል
  message?: string; // ሲታገድ ይታያል
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ጥያቄውን እንደገና ለመጻፍ በ preCall ይመለሳል
  modifiedResponse?: TValue; // ምላሹን እንደገና ለመጻፍ በ postCall ይመለሳል
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

መከላከያ መስፈርት `void`፣ `{}` ወይም `{ block: false }` በመመለስ «ምንም ለውጥ የለም» የሚለውን ያመለክታል። `modifiedPayload`/`modifiedResponse` መመለስ በሰንሰለቱ ውስጥ ወደ ቀጣዮቹ መከላከያ መስፈርቶች የሚተላለፈውን እሴት ይተካል። `signal?: AbortSignal` የጥሪ አድራጊውን የሕይወት ዑደት ወደ መከላከያ መስፈርቶቹ ያስተላልፋል። የጥያቄ መቋረጥ ሆን ተብሎ የተቀመጠ ክፍት-ውድቀት ልዩ ሁኔታ ነው፦ የሚዲያ ድልድዮች ጥሬ ሚዲያን እንደማይደግፈው ወደሚታወቅ መዳረሻ መልሰው ሳያስገቡ፣ ሥራቸውን ያቆማሉ እና ማጽዳት ያከናውናሉ።

## መዝገብ (`registry.ts`)

ብቸኛው `guardrailRegistry` የሚከተሉትን ያቀርባል፦

- `register(guardrail)` — መከላከያ መስፈርትን ያክላል (ወይም በመደበኛ ቅርጽ በተዋቀረ ስም ይተካል) እና በ`priority` ከትንሽ ወደ ትልቅ እንደገና ይደረድራል።
- `clear()` / `list()` — የአስተዳደር አጋዥ ተግባራት።
- `runPreCallHooks(payload, context)` — ንቁ መከላከያ መስፈርቶችን በቅደም ተከተል ያልፋል፣ payloadን በ`modifiedPayload` በኩል ያስተላልፋል እና በመጀመሪያው `block: true` ላይ ይቆማል።
- `runPostCallHooks(response, context)` — በምላሹ በኩል ተመሳሳይ ሂደትን ይከተላል።
- `resetGuardrailsForTests({ registerDefaults })` — ለንጹሕ የፈተና ማግለል ሁኔታውን ያጸዳል እና እንደ ምርጫ ነባሪዎቹን እንደገና ይመዘግባል።

ሁለቱም አስኬጆች `{ blocked, payload|response, results, guardrail?, message? }` ይመልሳሉ፤ `results` ለእያንዳንዱ መከላከያ መስፈርት `blocked`፣ `skipped`፣ `modified`፣ `error` እና `meta` መስኮችን የያዙ የ`GuardrailExecutionResult` መዝገቦች ድርድር ሲሆን ለክትትል ይጠቅማል።

### ለእያንዳንዱ ጥያቄ መከላከያ መስፈርቶችን ማሰናከል

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ለአሁኑ ጥያቄ መዘለል ያለባቸውን የመከላከያ መስፈርት ስሞች ያለ ድግግሞሽ ወደ አንድ ዝርዝር ያሰባስባል። በዚህ ቅደም ተከተል የሚነበቡና ወደ አንድ ዝርዝር የሚዋሃዱ አምስት ምንጮች አሉ (ድግግሞሽ ሲወገድ መጀመሪያ የታየው ይቀራል)፦

1. `apiKeyInfo.disabledGuardrails`
2. የጥያቄው body `disabledGuardrails` (በከፍተኛው ደረጃ)
3. የጥያቄው body `metadata.disabledGuardrails` (`metadata` ነገር ሲሆን ብቻ)
4. ራስጌ `x-omniroute-disabled-guardrails`
5. የቆየው ራስጌ `x-disabled-guardrails`

ሁለቱን ራስጌዎች ጨምሮ አምስቱም ምንጮች ይዋሃዳሉ፦ `x-omniroute-disabled-guardrails` እና `x-disabled-guardrails` ሁለቱንም መላክ በዝርዝሮቻቸው ውህደት ውስጥ ያሉትን ያስዘልላል፤ ባዶ ዘመናዊ ራስጌም ከእንግዲህ የቆየውን አይደብቅም ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)፣ በ[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) ተስተካክሏል)።

እሴቶች የሕብረቁምፊዎች ድርድር ወይም በነጠላ ሰረዝ የተለየ ሕብረቁምፊ ሊሆኑ ይችላሉ፤ ከስሞች ዙሪያ ያሉ ክፍተቶች ይወገዳሉ፣ ስሞቹም ወደ ትንሽ ፊደል kebab-case (`pii_masker` → `pii-masker`) ይለወጣሉ፣ ባዶ ግቤቶችም ይተዋሉ። ውጤቱ በ`context.disabledGuardrails` በኩል ወደ መዝገቡ ይተላለፋል፤ መዝገቡም ተዛማጅ መከላከያ መስፈርቶችን ያስዘልላል (በ`results` ውስጥ `skipped: true`)።

የማሰናከያ ዝርዝሩ የሚነካው **መዝገቡን** ብቻ ነው። የprompt-injection `block` ሁነታ ግዴታ የሆነ የደህንነት ድንበር ነው፦ የinjection-guard middleware (`src/middleware/promptInjectionGuard.ts`) በጥሪ አድራጊው የሚቆጣጠር የማሰናከያ ዝርዝር ሳያስተላልፍ `evaluatePromptInjection()` ይጠራል (ከዚህ ቀደም ያደርገው የነበረው ጥቅም የሌለው `resolveDisabledGuardrails({ body })` ጥሪ በ[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) ተወግዷል)፤ ስለዚህ `prompt-injection`ን የሚያሰናክል ጥያቄ አሁንም በ`block` ሁነታ ውድቅ ይደረጋል። ይህ በንድፍ የተወሰነ ነው። የማሰናከያ ምንጮቹ በጥሪ አድራጊው የሚቆጣጠሩ ናቸው (የጥያቄ body፣ metadata፣ ራስጌዎች)፤ ጥሪ አድራጊ ኦፕሬተሩ ያቀናበረውን የደህንነት ቁጥጥር ማጥፋት መቻል የለበትም ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))። የ[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) የራስጌ ውህደት የሚቀይረው የትኞቹ የመዝገብ መከላከያ መስፈርቶች እንደሚዘለሉ ብቻ ነው፤ ደንበኛ የmiddlewareን እንዲያልፍ አያስችለውም። ግዴታ የሆኑ ለእያንዳንዱ ቁልፍ እና ለእያንዳንዱ ቡድን የመከላከያ መስፈርት ፖሊሲዎች በv4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) ይከታተላሉ። [ሽፋን እና ገደቦች](#coverage-and-limits) ይመልከቱ።

## አፈጻጸም ቅደም ተከተል

በ`src/sse/handlers/chat.ts` እና በ`open-sse/handlers/chatCore.ts` በኩል ለሚያልፍ እያንዳንዱ ጥያቄ ([ሽፋን እና ገደቦች](#coverage-and-limits) ስር የተዘረዘሩት የቻት ቤተሰብ መንገዶች)፦

1. `resolveDisabledGuardrails(...)` ከAPI ቁልፍ፣ ከbody እና ከheaders የሚዘለሉትን ዝርዝር ያዘጋጃል።
2. `guardrailRegistry.runPreCallHooks(body, ctx)` የደህንነት ጥበቃዎችን በቅድሚያ ደረጃቸው ከዝቅተኛ ወደ ከፍተኛ ያስኬዳል፦
   - የተሰናከሉ የደህንነት ጥበቃዎች `skipped` ተብለው ይመዘገባሉ።
   - የእያንዳንዱ የደህንነት ጥበቃ `preCall` በ`modifiedPayload` አማካኝነት የሚላከውን ውሂብ ሊለውጥ ይችላል።
   - የመጀመሪያው `block: true` ሰንሰለቱን ያቋርጣል፣ እና ተቆጣጣሪው የደህንነት ጥበቃ ውድቅ ምላሽ ይመልሳል።
3. የተላከው ውሂብ (ተለውጦ ሊሆን ይችላል) ወደ ጥምር ማስተላለፍ እና ወደ ውጫዊ አገልግሎት መላክ ይሄዳል።
4. **ለዥረት ያልሆኑ ምላሾች ብቻ፦** ምላሹ ከተዘጋጀ በኋላ `guardrailRegistry.runPostCallHooks(...)` በምላሹ ላይ ተመሳሳይ ሰንሰለት ያስኬዳል። እዚህ ያለ `block: true` ከውጫዊ አገልግሎቱ የመጣውን ምላሽ ይጥለውና HTTP 400 ይመልሳል። በዥረት የሚላኩ ምላሾች ይህን ደረጃ ሙሉ በሙሉ ይዘላሉ።

ስህተት የሚያስነሱ የደህንነት ጥበቃዎች በ`error: <message>` ይመዘገባሉ፣ በ`logger.warn` አማካኝነትም ወደ ሎግ ይጻፋሉ፤ ሆኖም ሰንሰለቱ ይቀጥላል — ይህ ሆን ተብሎ የተዘጋጀ ስህተት ሲኖር ጥያቄውን የማሳለፍ ባህሪ ነው።

## ሽፋን እና ገደቦች

የደህንነት ጥበቃ መዝገቡ ከቻት የሂደት መስመር ጋር ብቻ ተያይዟል። እነዚህ ገደቦች በ`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` እና በ`tests/unit/guardrail-pipeline-characterization.test.ts` ተረጋግጠዋል፤ ባህሪው ሲቀየር እነዚያን ፈተናዎች ሆን ብለው ያዘምኑ።

### መንጠቆዎቹ የሚሰሩባቸው ቦታዎች

| መንጠቆ / ቁጥጥር                       | የሚሰራበት                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                 | በ`handleChat` (`src/sse/handlers/chat.ts`) የሚስተናገዱ ጥያቄዎች፦ `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (እና `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` እና የTelegram ቻት ፕሮክሲ። እንዲሁም የዳሽቦርድ ሙከራ መገናኛ `/api/guardrails/test`። ከጥሪ በፊት የሚደረግ እገዳ HTTP 400 ይመልሳል። |
| `runPostCallHooks`                | **በዥረት የማይላኩ** የቻት ምላሾች ብቻ (`open-sse/handlers/chatCore/nonStreamingResponse.ts`)። በዥረት የሚላኩ ምላሾች እዚህ ፈጽሞ አይደርሱም።                                                                                                                                                                                                                                                                                   |
| በዥረት ላይ ያለ PII                    | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`)፣ `PII_RESPONSE_SANITIZATION` ሲበራ በ`streamingPipeline.ts` ውስጥ በሂደቱ ላይ ይጨመራል። ይህ የደህንነት ጥበቃ አይደለም፣ ስለዚህ የማሰናከያ መንገዶች ተጽዕኖ አያሳድሩበትም።                                                                                                                                                                                                      |
| የመርፌ ጥቃት መከላከያ መካከለኛ ሶፍትዌር (የቀድሞ) | ጥያቄ ጽሑፍ የያዘ እያንዳንዱ `/v1` መንገድ፣ የቻት ቤተሰብንም ጨምሮ ([የመንገዶች ሽፋን](#injection-guard-route-coverage--red-team-phase-8--block-d) ይመልከቱ)። ለጥያቄ ጽሑፍ መርፌ ጥቃት ብቻ።                                                                                                                                                                                                                                                |

### ያልተሸፈኑ ነገሮች

- **የሚዲያ፣ የembedding እና የውሂብ መንገዶች** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ወደ መዝገቡ ፈጽሞ አይደርሱም።
  በእነዚህ መንገዶች PII መደበቅ፣ የማረጋገጫ መረጃን መደበቅ ወይም የሞዳሊቲ ድልድይ አይሰራም።
  ብቸኛው ማረጋገጫቸው የቀድሞው የመርፌ ጥቃት መከላከያ መካከለኛ ሶፍትዌር ነው።
- **በዥረት የሚላኩ ምላሾች** ከጥሪ በኋላ የደህንነት ጥበቃ አይተገበርባቸውም፦ ከጥሪ በኋላ `pii-masker` ወይም
  `credential-masker` አይሰራባቸውም፣ ከጥሪ በኋላም አይታገዱም። የሚተገበረው የዥረት PII
  ለውጥ ብቻ ነው (`PII_RESPONSE_SANITIZATION` ሲበራ)። በዥረት በሚላክ ምላሽ ውስጥ
  ተመልሶ የታየ የማረጋገጫ መረጃ አይደበቅም።
- **የማሰናከያ መንገዶች እና መካከለኛ ሶፍትዌሩ (ሆን ተብሎ የተነደፈ)፦** መካከለኛ ሶፍትዌሩ
  በራሱ `evaluatePromptInjection()` ጥሪ የጥያቄ ጽሑፍ መርፌ ጥቃትን ይገመግማል፤
  በጥሪው አድራጊ የሚቆጣጠር የማሰናከያ ዝርዝር አያስተላልፍም። `block` ሁነታ
  በጥሪው አድራጊ የሚቆጣጠሩ ማሰናከያዎች ሊያልፉት የማይችሉት ግዴታ የሆነ የጥበቃ ድንበር ነው፤
  ይህም የቻት ቤተሰብ መንገዶችን ይጨምራል
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))።
  `prompt-injection`ን ማሰናከል የሚዘለው በመዝገቡ ውስጥ ያለውን የደህንነት ጥበቃ ብቻ ነው።

### ከጥሪ በኋላ ከሚሰሩ የደህንነት ጥበቃዎች በፊት ምላሹን የሚያገኙ ሂደቶች

በዥረት ባልሆነው መንገድ ቅደም ተከተሉ፦ ከምላሹ የማስታወሻ መረጃ ማውጣት → አብሮ የተካተቱ መሣሪያዎችን ማስኬድ → ከጥሪ በኋላ የሚሰሩ የደህንነት ጥበቃዎች → ከጥሪ በኋላ በእገዳ መውጣት → በትርጉም ላይ የተመሠረተ መሸጎጫ ውስጥ ማስቀመጥ።

- **ከማህደረ ትውስታ መረጃ ማውጣት** እና **መሣሪያዎችን ማስኬድ** ከጥሪው በኋላ የሚተገበሩ የጥበቃ ደንቦች
  ምላሹን እንደገና ከመጻፋቸው ወይም ከማገዳቸው በፊት ምላሹን ያገኛሉ። ከ
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) ጀምሮ፣
  `PII_RESPONSE_SANITIZATION` ሲበራ ከማህደረ ትውስታ መረጃ ማውጣት የወጣውን ጽሑፍ በ`sanitizePII`
  ያጣራል (በዥረት እና ዥረት ባልሆነ ሁኔታ)፤ ሆኖም ከጥሪው በኋላ የሚተገበሩ የጥበቃ ደንቦች
  በኋላ የሚያግዱት ምላሽ አስቀድሞ ለማህደረ ትውስታ እና ለመሣሪያዎች ቀርቦ ይሆናል።
- **የትርጉም መሠረት ያደረገው መሸጎጫ** ምላሹን ከጥሪው በኋላ የሚተገበሩ የጥበቃ ደንቦች በኋላ ያከማቻል፤ ስለዚህ
  እንደገና የተጻፈውን ምላሽ ያከማቻል፣ የታገደ ምላሽ ግን ፈጽሞ አይሸጎጥም። የመሸጎጫ መዝገቦች
  ለእያንዳንዱ API ቁልፍ ለየብቻ ይመደባሉ።

## ውቅር

አብሮ የተካተቱት የጥበቃ ስርዓቶች የሚያነቧቸው የአካባቢ ተለዋዋጮች፦

| ተለዋዋጭ                                 | የሚጠቀምበት                   | ተጽዕኖ                                                                                     |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | ማወቅን ሙሉ በሙሉ ለማሰናከል `false` ያድርጉት።                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | የጥቃት ጽሑፍ ማስገባት ፖሊሲ፦ `warn`፣ `block` ወይም `log`። የቀድሞው እሴት `redact` የጥቃት ጽሑፉን እንደገና አይጽፍም። |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | የጥቃት ጽሑፍ ማስገባት መከላከያው ሁነታ፤ እንዲሁም የአካባቢ ተለዋዋጮችን **የሚሽር** የDB ባህሪ መቀያየሪያ ነው (DB > ENV)።    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` የሚከለክለው ዝቅተኛው የከባድነት ደረጃ፦ `high` (ነባሪ)፣ `medium` ወይም `low`።                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | ለ`INPUT_SANITIZER_BLOCK_THRESHOLD` የቀድሞ አማራጭ ስም።                                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` ሲሆን፣ በጥያቄው ውስጥ ያለ PII ይደበቃል (ከጥቃት ጽሑፍ ማስገባት ሁነታ ነፃ ነው)።                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | በምላሽ በኩል ያለውን የመደበቂያ ባህሪ ይቆጣጠራል።                                                         |

የModality Bridge የጥበቃ ስርዓቶች የሩጫ ጊዜ ውቅርን ከDB በሚደገፈው የቅንብሮች
ማከማቻ (`getSettings()`) ያነባሉ፣ ከአካባቢ ተለዋዋጮች አይደለም። የVision ዋና ቁልፎች
`modalityBridgeVisionEnabled`፣ `modalityBridgeVisionMode`፣
`modalityBridgeVisionModel`፣ `modalityBridgeVisionTaskAware`፣
`modalityBridgeVisionPrompt`፣ `modalityBridgeVisionTimeout`፣
`modalityBridgeVisionMaxImages`፣ `modalityBridgeVisionMaxChars`፣
`modalityBridgeCacheEnabled`፣ `modalityBridgeCacheTtlMinutes` እና
`modalityBridgeCacheMaxEntries` ናቸው። የቀድሞዎቹ
`visionBridge*` ቁልፎች ተቀባይነት ያላቸው በሰነድ እንደተገለጸው ለአንድ ዑደት ብቻ የሚያገለግሉ ተተኪ የንባብ
ቁልፎች ሆነው ብቻ ነው፤ ከዳሽቦርድ የሚደረጉ ጽሕፈቶች ዋና ቁልፎቹን ይጠቀማሉ። ነባሪ እሴቶችና ተተኪውን
የሚወስነው ክፍል በ`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ፤ የቀድሞ
ቋሚ እሴቶች ደግሞ በ`src/shared/constants/visionBridgeDefaults.ts` ውስጥ ተጠብቀዋል።

Audio `modalityBridgeAudioEnabled`፣ `modalityBridgeAudioModel`፣
`modalityBridgeAudioTimeout` እና `modalityBridgeAudioMaxClips` ይጠቀማል፤ በተጨማሪም የጋራ
`modalityBridgeCache*` ቅንብሮችን ይጠቀማል። እነዚህ ቁልፎች ከModality Bridge ስኪማ ጋር
ስለተዋወቁ Audio ለቀድሞ ቁልፎች ተተኪ የለውም።

Video `modalityBridgeVideoEnabled`፣ `modalityBridgeVideoAnalysisMode`፣
`modalityBridgeVideoModel`፣
`modalityBridgeVideoFrameCount`፣ `modalityBridgeVideoSamplingPolicy`፣
`modalityBridgeVideoMaxVideos` እና
`modalityBridgeVideoTimeout` ይጠቀማል፤ በተጨማሪም የጋራ `modalityBridgeCache*` ቅንብሮችን
ይጠቀማል። FFmpeg/ffprobe ለሥራ አስኬዳጅ አማራጭ ጥገኝነቶች ስለሆኑ እና ለቪዲዮ ፍሬሞች መግለጫ
መፍጠር መዘግየትና የሞዴል ወጪ ስለሚጨምር፣ በነባሪነት ተሰናክሏል።

## ብጁ Guardrails

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

ደረጃዎች፦

1. `BaseGuardrail`ን የሚያራዝም `src/lib/guardrails/myGuardrail.ts` ይፍጠሩ።
2. `preCall`ን እና/ወይም `postCall`ን ይተግብሩ።
3. በማስገባት ጊዜ ይመዝግቡ (`registerDefaultGuardrails` ውስጥ ያክሉት) ወይም
   በሂደት ጊዜ `guardrailRegistry.register(...)`ን ይጥሩ — መዝገቡ ተመሳሳይ መደበኛ ስም ያለውን
   ማንኛውንም ቀድሞ የተመዘገበ guardrail ይተካል።
4. በ`tests/unit/` ስር ሙከራዎችን ያክሉ (ነባር ምሳሌዎች፦
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)።

## ሙከራ

ከሚታወቅ ሁኔታ ለመጀመር በሙከራዎች መካከል `resetGuardrailsForTests()`ን ይጠቀሙ።
ባዶ መዝገብ ለመጀመር `{ registerDefaults: false }`ን ያስተላልፉ እና
እየተሞከሩ ያሉትን guardrails ብቻ ይመዝግቡ። Vision Bridge ጥገኝነቶችን
በመርፌ መስጠት (`deps.getSettings`, `deps.callVisionModel`) ይቀበላል፤ Audio Bridge ደግሞ
ለቅንብሮች፣ ችሎታዎች፣ ለSTT ሞዴል ምርጫ፣ ለማረጋገጫ መረጃ ፍተሻዎች እና
ለጽሑፍ ቅጂ ማዘጋጀት ተመሳሳይ የሙከራ መገናኛዎችን ያቀርባል። ስለዚህ ሙከራዎች ያለ DB
ወይም የአውታረ መረብ መዳረሻ ሁለቱንም ፍሰቶች ሊፈትሹ ይችላሉ።

## ተጨማሪ ይመልከቱ

- `src/lib/guardrails/` — ትግበራ
- `src/shared/utils/inputSanitizer.ts` — የprompt injection እና የPII መደበቂያን
  የሚደግፍ የጋራ ማወቂያ
- `src/shared/constants/visionBridgeDefaults.ts` — የVision Bridge ነባሪዎች እና
  በግድ በbridge የሚያልፉ ሞዴሎች ዝርዝር
- `src/shared/constants/modalityBridgeDefaults.ts` — የጋራ የVision/Audio የአሂድ ጊዜ ነባሪዎች
- `docs/architecture/RESILIENCE_GUIDE.md` — ገለልተኛ ንብርብር (circuit breaker፣ cooldowns)
- `docs/reference/ENVIRONMENT.md` — የenvironment variable ሙሉ ማጣቀሻ

## የinjection-guard መንገዶች ሽፋን እና የred-team ሙከራ (ደረጃ 8 · ክፍል D)

የinjection-guard (`createInjectionGuard` / `withInjectionGuard`) የተጠቃሚ prompt የሚቀበሉ
መንገዶችን ሁሉ ይሸፍናል። `INJECTION_GUARD_MODE`ን ያከብራል (ነባሪው `warn` = ሎግ ማድረግ ብቻ፤
`block` = HTTP 400 `SECURITY_001`ን ይመልሳል)።

| ዓይነት      | መንገዶች                                                                                                                                                | ነባሪ ሁነታ |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ጽሑፍ (ነባር) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn    |
| የይዘት ፈጠራ  | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn    |
| ውሂብ       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn    |

ጽሑፍ ማውጣት (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ን ይሸፍናል።

**የred-team ሙከራ (በየሌሊቱ፣ `nightly-llm-security.yml`)፦** promptfoo በ`INJECTION_GUARD_MODE=block`
እያንዳንዱ መንገድ በ`INJECTION_GUARD_MODE=block` የOWASP-LLM ስብስብን እንደሚያግድ ያረጋግጣል፤
garak የሙከራ ጥያቄዎችን ያካሂዳል (ሚስጥራዊ ቁልፍ ከሌለ ይዘላል)።
`moderations` ለወጥነት ተካትቷል። የማገድ ሁነታ ግዴታ የሆነ የደህንነት ድንበር ነው፦
`evaluatePromptInjection()` middleware የሚያስተላልፍለትን በእያንዳንዱ ጥያቄ የተሰናከሉ ዝርዝር
ችላ ይላል፤ ስለዚህ `disabledGuardrails` መንገድን ከዚህ **ነፃ አያደርግም**
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))።

የበየሌሊቱ workflow (`.github/workflows/nightly-llm-security.yml`፣ cron + በእጅ
ማስጀመር) ሁለት ሥራዎች አሉት፦

- **`promptfoo-guard` (ውድቀቱ ሂደቱን ያግዳል)** — `promptfoo eval -c promptfooconfig.yaml`ን
  በ`INJECTION_GUARD_MODE=block` ያሂዳል። እያንዳንዱ የጥቃት ሙከራ (ለምሳሌ፦ "የቀድሞ
  መመሪያዎችን ሁሉ ችላ በል…"፣ የDAN ዓይነት jailbreaks) ምላሹ
  `error.code === "SECURITY_001"` እንደያዘ ያረጋግጣል፤ ይህም guard ጥያቄውን በእርግጥ እንደከለከለ ያሳያል።
- **`garak` (ለመረጃ ብቻ)** — በአካባቢያዊ OmniRoute instance (`http://localhost:20128/v1`) ላይ
  garakን በ`--probes promptinject,dan,leakreplay` ያሂዳል። የprovider ሚስጥራዊ ቁልፍ
  (`PROMPTFOO_PROVIDER_KEY`) ሲኖር ብቻ ይሰራል፤ ቁልፉ ከሌለ ችግር ሳይፈጥር ይዘላል፣
  እና `|| true` ተጨምሮበታል፤ ስለዚህ CIን ሳያስወድቅ ውጤቱን ያሳውቃል።

የguard አጋዥ (`createInjectionGuard` / `withInjectionGuard`) ሽፋን
prompt የያዙ የ`/v1` መንገዶችን ሁሉ ያካትታል፤ የprompt ጽሑፍ በ`src/shared/utils/inputSanitizer.ts`
ውስጥ ባለው `extractMessageContents()` አማካኝነት
ከ`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ይወጣል።

# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo cha ukweli:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-10-17 — v3.8.52 (aliongeza [Ufunikaji na mipaka](#coverage-and-limits):
> ni njia gani na njia za majibu ambazo hooks hufikia, vichwa vya kuzima vilivyounganishwa (#16412), hali ya kuzuia
> uingizaji kama mpaka wa lazima (#16413), na kile kinachoona jibu kabla ya post-call)

Guardrails zinatekeleza usalama, sera, na mabadiliko ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa juu. Kila guardrail inaweza kukagua (na
kwa hiari kukataa, kubadilisha, au kuweka maelezo) mizigo ya ombi (`preCall`) na
majibu ya juu (`postCall`).

Mfumo huu ni **fail-open**: ikiwa guardrail itatupa hitilafu wakati wa kutekeleza, sajili
hurekodi hitilafu hiyo na kuendelea na guardrail inayofuata badala ya kufeli
ombi hilo. Kuzuia ni uamuzi wa wazi (`block: true`), sio ajali kamwe.
Ubaguzi mmoja ni ombi lililositishwa: wakati `signal` ya mpiga simu imesitishwa,
guardrail inayotupa hitilafu hukataa uendeshaji wa hook badala ya kurukwa.

Hooks **hazitendi** kwenye kila route au kila jibu. Soma
[Ufunikaji na mipaka](#coverage-and-limits) kabla ya kutegemea guardrail kama
udhibiti wa usalama.

## Guardrails za Ndani

Sajili hupakia kiotomatiki guardrails sita kwa mpangilio wa kipaumbele wakati wa kuagiza
(tazama `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua          | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari za kipaumbele cha chini huendeshwa **kwanza**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Mfano wa msingi wa GLM 5.3 na `glm-5.3-{low,high,max}` zina metadata ya sajili/vipimo ya wazi ya
`supportsVision:false`. Aina za GLM 5.3 Flash
zinabaki kuwa modeli za maono asilia. Njia ya `/v1/messages` ya Claude Code inaingia kwenye
mnyororo wa guardrail wa kabla ya simu `handleChat` ulioshirikiwa **kabla ya**
tafsiri ya Claude-to-OpenAI; picha za matokeo ya zana za `Read` zilizowekwa kiota lazima zielewezwe au zishughulikiwe
kabla ya tafsiri hiyo kuzipandisha kwenye maudhui ya `image_url` ya OpenAI (#17069).

Inazuia maombi yenye picha yanayolenga **modeli zisizo za maono** na ama
kuelekeza upya ombi lote kwa modeli inayoweza kuona au kuchukua nafasi ya sehemu za picha
kwa maelezo ya maandishi yanayozalishwa na modeli ya maono inayoweza kusanidiwa kabla ya
simu ya juu. Hii inaruhusu watoa huduma wa maandishi pekee kushughulikia
mizigo ya multimodal kwa uwazi.

Mtiririko:

1. Ruka ikiwa modeli lengwa tayari inasaidia maono (isipokuwa kama inaonekana kwenye
   orodha ya daraja la kulazimishwa `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo inakabidhi kwa **kitambuzi cha media kilichounganishwa** `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` — chanzo pekee cha ukweli kilichoshirikiwa na kichujio cha utangamano wa mchanganyiko.
   Utoaji umeruhusiwa kwenye maumbo ambayo `replaceImageParts` inaweza kuunganisha tena (mkataba wa kutoa↔kubadilisha): OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, URL ya Anthropic `source.type:"url"`, na Responses API `input_image`. Picha zinazolingana zilizowekwa kiota ndani ya `tool_result.content` ya Claude Code na matokeo ya zana za Responses pia hutolewa na kubadilishwa katika njia zao za asili; maumbo ya viashiria pekee ni nyenzo za kichujio cha mchanganyiko na hayajatolewa.
   Ruka ikiwa hakuna iliyopatikana.
3. Tatua usanidi wa wakati wa kukimbia kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): funguo mpya za mipangilio za `modalityBridge*` zinashinda; funguo za urithi za `visionBridge*` zinabaki kama **njia mbadala ya mzunguko mmoja** (dirisha la kurejesha). Ruka kabla ya upitishaji wowote wa media wakati daraja limezimwa.
4. Kiteuzi cha hali (`modalityBridgeVisionMode`, tazama jedwali hapa chini) kinaamua kuelekeza upya dhidi ya kuelezea. Kuelekeza upya kunarudisha `modifiedPayload` huku `model` pekee ikiwa imebadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: weka kikomo cha picha kwenye `maxImages`, unda kidokezo kinachofahamu kazi, angalia akiba ya maelezo, ita modeli ya maono **kwa sambamba** (`Promise.allSettled`), na uingize sehemu za maandishi za `[Image N]: <description>` mahali pake. Maelezo yaliyofeli yanatoa `null`: picha ghafi inahifadhiwa kwa malengo yasiyojulikana / yenye uwezo wa maono (#4012), lakini **lengo la moja kwa moja la maandishi pekee lililothibitishwa** au mchanganyiko usio na maono unapata kijisehemu cha maandishi cha wazi `(unavailable — no vision-capable provider connected)` kwa kila picha isiyoelezwa, ikijumuisha kushindwa kwa sehemu na picha zilizo zaidi ya kikomo cha simu ya maelezo (#17069). Njia mbadala ya kuelezea ya mchanganyiko iliyofeli yote bado ipo (#8430).
6. Rudisha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`, `processingTimeMs`, `visionModel`).

#### Kiteuzi cha hali (`modalityBridgeVisionMode`)

| Njia       | Chaguo-msingi | Tabia                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Mbinu ya kurithi, haijaguswa (#6640/#7204): miundo isiyo ya mseto/`auto/` inaelekezwa upya kwenye mtindo bora wa kuona isipokuwa mtindo asili tayari una vitambulisho vinavyoweza kutumika (kishaeleza); malengo ya mseto hutoa maelezo kila wakati.                                                                                  |
| `describe` |               | Eleza kila wakati — kizuizi cha kuelekeza upya kinarukwa kabisa; mtindo uliochaguliwa na mtumiaji hujibu kila wakati.                                                                                                                                                                                                                 |
| `reroute`  |               | Lazimisha kuelekeza upya: ulinzi wa mtindo wenye vitambulisho unapitishwa. Ulinzi wa kitambulisho cha lengo la kuelekeza upya (**target**) bado unatumika — wakati hakuna lengo la kuona linaloweza kutumika linapatikana, daraja huzuia kwa kosa lililo wazi badala ya kuelezea au kutuma picha mbichi kwa lengo la maandishi pekee. |

Njia zilizolazimishwa hukatiza mzunguko **kabla** ya mbinu ya kiotomatiki kuendeshwa; tabia ya `auto` inafanana kikamilifu na ulinzi wa kabla ya PR-1.

#### Upeo wa ufunguo wa API (`visionBridgeKeyScope.ts`)

Wakati ufunguo wa API wa mpigaji unazuia `allowedConnections`, mabwawa ya mgao (`allowedQuotas`) au miundo (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), daraja huchagua tu miundo ya kuelekeza upya na kuelezea ambayo ufunguo unaweza kutumia, kwenye miunganisho ambayo ufunguo unaweza kutumia. Simu ya kuelezea kisha hupitia kitanzi cha kibinafsi cha OmniRoute ikiwa na kichwa cha habari cha `x-omniroute-self-loop-key-id`, ili ombi la gumzo linalopokea litekeleze tena sera ya muunganisho na mtindo wa ufunguo huo. `enforceApiKeyPolicy()` huheshimu kichwa hicho cha habari tu pamoja na mbebaji wa kitanzi cha kibinafsi, kwa hivyo inaweza tu kupunguza ufikiaji, na kitambulisho ambacho hakitatatuliwa hukataliwa.

Ikiwa hakuna mtindo wa kuona unaoruhusiwa kwa ufunguo huo, **lengo lililothibitishwa la maandishi pekee** hukataa ombi la picha nchini kukiwa na HTTP 400 iliyo wazi badala ya kusambaza baiti za picha kwenda kwa mfumo wa juu usio na uwezo (#17069). Kwa malengo yenye uwezo wa kuona usiojulikana au wa asili, njia ya kuelezea inadumisha tabia yake ya awali ya kushindwa-kufungua (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Maombi yasiyokuwa na ufunguo, na funguo zisizo na vizuizi hivi, huwenda sawa kabisa na hapo awali.

#### Kidokezo cha kuelezea kinachojua kazi (`modalityBridgeVisionTaskAware`)

Chaguo-msingi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) inaongeza maandishi ya **ujumbe wa mwisho wa mtumiaji** (yaliyokatwa hadi herufi 500) kwenye kidokezo cha msingi cha kuelezea, ikielekeza maelezo kuelekea kile mtumiaji aliuliza kweli (muundo wa codex-vision-proxy) na ikiomba mtindo wa kuona kunukuu maandishi yanayoonekana. Bendera ikiwa imezimwa — au hakuna maandishi ya mtumiaji — kidokezo cha msingi kinatumika bila kubadilishwa.

Ombi linaloendana na OpenAI la kitanzi cha kibinafsi cha kuelezea (`callVisionModelSingle()` katika `visionBridgeHelpers.ts`) huomba kila wakati `image_url.detail: "high"` — bila masharti, kwa kila mpigaji/mtoa huduma, bila kufungwa na ishara yoyote ya mteja. Uchunguzi wa kina cha chini hupunguza usahihi wa OCR kwa kazi haswa ya unukuzi wa maandishi ambayo kidokezo hiki kinaomba, kwa hivyo ombi la kuelezea lenyewe huomba kila wakati undani wa juu bila kujali kiwango cha undani kilichotumiwa na ombi la awali la kuingia. Hii inaathiri tu mwili wa ndani wa ombi la kuelezea; haibadili jinsi OmniRoute inavyosambaza `image_url.detail` ya mpigaji kwenye ombi la msingi — chaguo-msingi hilo linatumika kando, na kwa wateja waliotambuliwa wa OpenCode pekee, katika `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la umbizo la waya la Anthropic la kitanzi cha kibinafsi cha kuelezea halina uwanja wa `detail` na halijaathiriwa na chaguo-msingi lolote.

#### Kikomo cha pato la kuelezea (`modalityBridgeVisionMaxChars`)

| Ufunguo                        | Chaguo-msingi | Kiwango          |
| ------------------------------ | ------------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` au 100–50000 |

`0` (chaguo-msingi) inamaanisha **hakuna kikomo** — maelezo yaliyorejeshwa na `callVisionModel()` yanapitishwa bila kubadilishwa, yakidumisha tabia iliyopo. Thamani yoyote katika safu ya 100–50000 hukata maelezo kwa kiambishi tamati cha `…` kabla haijashonwa tena kama `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`). Ongeza hii kwa kazi za OCR zenye undani mkubwa ambapo mtindo wa chini unahitaji unukuzi kamili; ipunguze ili kudhibiti matumizi ya tokeni kwenye miundo ya kuona yenye maelezo mengi. Sehemu ya dashibodi iko kwenye kidirishi cha Kina cha kichupo cha Vision (`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na inabana thamani yoyote kati ya 1 na 99 hadi kwenye sakafu ya 100 huku ikiacha `0` wazi bila kuguswa — `0` ni thamani halali ya Zod kwa haki yake yenyewe (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), sio tu chaguo-msingi la "kutowekwa".

#### Akiba ya kuelezea (`modalityBridge/bridgeCache.ts`)

Akiba ya LRU + TTL ya kumbukumbu ya ndani kwa matokeo ya kuelezea, inayoshirikiwa kote kwenye mchakato. Ufunguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` yenye upangaji wa kiambishi awali cha urefu (hakuna migongano ya mipaka ya sehemu). Sehemu ya mtindo ni mtindo wa daraja **uliowekwa**, sio mtindo uliojibu kweli — `callVisionModel` inaweza kurudi nyuma ndani kwa ndani, na kuweka ufunguo kwa kila jaribio kungetawanya akiba. Maelezo yaliyoshindwa hayahifadhiwa kwenye akiba kamwe. Mipangilio:

| Ufunguo                         | Chaguo-msingi | Kiwango |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Urekebishaji wa picha za mbali (self-loop describe/base64 fetch)

Wakati daraja linapochota picha ya **mbali** yenyewe — simu ya kibinafsi ya kuelezea ya Anthropic na ubadilishaji wa base64 wa claude-wire-format (`ensureBase64ImagesForClaudeWire`), zote kupitia `fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayotokea hupitishwa kupitia `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) kabla ya kupachikwa kwenye ombi la mtindo wa maono. Picha kubwa kupita kiasi hupunguzwa ukubwa hadi **2048px long edge** (ikilingana na kikomo cha kubadilisha ukubwa ambacho OpenAI/Anthropic tayari kinatumika upande wa seva), jambo ambalo linapunguza baiti za upakiaji/chelewa bila kubadilisha kile mtindo wa maono unachokiona. Kubadilisha ukubwa kunatumia `sharp`, inayopakiwa kupitia uingizaji thabiti (dynamic import): kwenye jukwaa ambalo faili lake la binary la asili linashindwa kupakia, `normalizeDataUri()` **haiwahi kutupa hitilafu** — inarudi kwenye upitishaji wa baiti za asili, kwa hiyo njia ya kuelezea/ubadilishaji wa base64 daima inaendelea kufanya kazi. Baiti zisizo za picha (uchotaji ambao haukurudisha picha inayoweza kusomeka) pia hupitishwa bila kuguswa. Urekebishaji huu umeratibiwa kwa picha ambazo daraja linachota kwa ajili ya simu yake yenyewe ya kujizungusha — hauombwi kamili kwa malipo mabichi ya mtoaji, kulingana na kanuni ya mabadiliko ya kuchagua tu (opt-in-only mutation principle, Sheria Ngumu #20).

#### Mpango wa Mipangilio + uhamiaji

Funguo mpya za `modalityBridge*` zinathibitishwa na Zod katika `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, safu tatu za `modalityBridgeCache*`, na kundi la `modalityBridgeAudio*` linalotumiwa na Audio Bridge. Uhamiaji `141_modality_bridge_settings.sql` unanakili maadili ya urithi yaliyopo ya `visionBridge*` kwenye funguo mpya zinazolingana (idempotent, haiwahi kuandika juu ya thamani ya `modalityBridge*` iliyowekwa na opereta); funguo za urithi zinasalia kukubaliwa kama njia mbadala ya kusoma kwa mzunguko mmoja wa toleo.

#### Kichwa cha uwazi + takwimu

Majibu yaliyobadilishwa na kuelezea hubeba `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (iliyojengwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`, iliyowekwa muhuri na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`). Maombi yaliyoelekezwa upya hayana kichwa cha habari **chochote** — mzigo wa malipo haukuguswa na ubadilishaji wa mtindo tayari unaonekana katika uwanja wa `model` wa mwili wa jibu.

`GET /api/modality-bridge/stats` (uthibitisho wa usimamizi, kiwango sawa na `GET /api/settings`) inarudisha vihesabu vya kumbukumbu kwa kila moduli `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` kwa ajili ya `vision`, `audio`, na `video`. `averageLatencyMs` inatumia `latencySamples`, sio majaribio yote, kama kigawe chake; operesheni isiyo na muda haitengenezi sampuli ya milisekunde sifuri. `bridged` inabaki kuwa jina mbadala linaloendana nyuma kwa ajili ya uongofu uliofanikiwa; majaribio yaliyoshindwa hayaiongezei. Vihesabu huwekwa upya wakati mchakato unapoanza upya kwa muundo (telemetry, sio uhasibu).

#### Usanidi wa dashibodi

Ukurasa maalum wa dashibodi ni `/dashboard/settings/modality-bridge`. Vichupo vyake vinavyoweza kufikiwa na URL vya `Vision`, `Audio`, na `Video` vinahifadhi vigezo vya hoja wakati vinabadilisha thamani ya `tab`. Kichupo cha Vision kinaonyesha uwezeshaji, hali, uchaguzi wa mtindo (pamoja na chaguo-msingi la otomatiki), uwasilishaji wa vidokezo vinavyotambua kazi, vikomo vya juu vya muda/picha/urefu wa maelezo/kache, vihesabu vya wakati wa kuendesha, na ombi la sampuli linalolindwa. Kichupo cha Audio pia kiko hai: kinaonyesha uwezeshaji, kitafuta mtindo cha STT-pekee chenye Auto, vikomo vya muda/klipu ya juu, vihesabu vya sauti, na jaribio la sampuli la `input_audio`. Kichupo cha Video kinafanya kazi: kinaripoti hali ya wakati wa kuendesha ya FFmpeg/ffprobe — mojawapo ya hali nne za wazi za UI (`unknown` wakati uchunguzi uko safarini au haukuweza kukamilika, `restricted` kwenye mwenyeji wa dashibodi asiye wa kitanzi ambapo uchunguzi unarukwa upande wa mteja, `unavailable` mara baada ya kuchunguzwa na kuthibitishwa kukosekana, au `available` ikiwa na matoleo ya FFmpeg/ffprobe) — kinahifadhi vikomo vya kuwezesha/mtindo/fremu/video/muda, kinachuja kitafuta mtindo kuwa miundo inayoweza kufanya maono, na kinaonyesha vihesabu vya video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha utangamano na ukurasa mpya; haimiliki tena nakala ya pili ya fomu hiyo. Media Providers pia inaunganisha mtiririko wa kazi wa Image-to-Text na Speech-to-Text kwenye Vichupo vinavyolingana vya Modality Bridge bila kuondoa uwanja wa michezo uliopo wa Speech-to-Text.

**Kupita kwa idhini ya kujizungusha:** wakati simu ya kuelezea inapopitia njia ya kujizungusha ya OmniRoute mwenyewe ya `/v1` (mtindo wa mtoaji usiokuwa wa kawaida), ombi dogo linatuma `x-omniroute-admission-bypass: internal` na limethibitishwa kwa kitambulisho kilichotatuliwa cha kujizungusha — sentinel ya ndani ya `sk_omniroute` katika hali ya ndani, au ufunguo wa mazingira wa `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` uliowekwa na opereta (#1350) ili upelekaji wa `REQUIRE_API_KEY=true` uweze bado kuendesha simu ya kuelezea. Upitishaji huu unalindwa tu kwa vitambulisho hivyo halisi, kwa hivyo wateja wa nje hawawezi kutumia kichwa cha habari kuruka uandikishaji.

Viwango vya urithi vinaishi katika `src/shared/constants/visionBridgeDefaults.ts`; hali mpya/zinazotambua kazi/kache za msingi na kitatuzi cha mipangilio vinaishi katika `src/shared/constants/modalityBridgeDefaults.ts`. Kinga inaweka chaguo la kitengenezaji cha `deps` ili majaribio yaweze kuingiza utekelezaji bandia wa `getSettings` na `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Inazuia maombi ya gumzo yenye sauti kabla hayajafika kwenye lengo ambalo halijulikani kukubali uingizaji wa sauti. Haiwezi kuelekeza upya ombi la gumzo: sehemu za sauti zinatafsiriwa kupitia kituo cha mwisho cha sehemu nyingi kinachoendana na OpenAI na mtindo uliochaguliwa wa gumzo unaendelea na nakala za maandishi.

Mtiririko:

1. Tatua `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata ya uwazi ya sajili ya mtoa huduma hushinda, ikifuatiwa na metadata tuli ya modeli, na kisha `modalities_input` iliyosawazishwa. Orodha ya ingizo iliyotangazwa bila `audio` ni `false`; hakuna ushahidi wa uwezo unaobaki `null`. Zote `false` na `null` huwasha daraja la kihafidhina, wakati `true` inalipita.
2. Tatua mipangilio ya `modalityBridgeAudio*` na utoe sehemu za sauti za kiwango cha juu zinazoweza kushonwa kutoka kwa kila ujumbe kupitia kitambuzi kilichoshirikiwa cha `detectMediaParts()`. Maumbo yanayoungwa mkono kwenye waya ni `input_audio`, `audio_url`, na `source.media_type: "audio/*"` za OpenAI. Sauti iliyo ndani ya nyingine inatambuliwa kwa ajili ya uelekezaji lakini haiondolewi na njia ya kushona. Kazi imezuiwa na `modalityBridgeAudioMaxClips`; sehemu za baadaye zinabaki bila kuguswa.
3. Heshimu `provider/model` iliyosanidiwa, au acha `selectAudioBridgeModel()` ipitie `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi na ichague modeli ya kwanza iliyo na kitambulisho cha mtoa huduma kinachotumika na kinachoweza kutumika.
4. `callAudioTranscription()` hubadilisha sauti ya base64/data-URI kuwa `file` ya sehemu nyingi (multipart), au hupakua `audio_url` ya mbali kupitia mlinzi wa njia ya nje wa umma pekee wenye ubandikaji wa DNS na kikomo cha 25 MB. Kisha hutuma faili hiyo na modeli iliyochaguliwa kwa ombi la POST kwenye kitanzi cha ndani cha `/v1/audio/transcriptions`, ikithibitishwa kwa `resolveSelfLoopBearer()`. Njia ya unukuzi iliyopo hufanya utafutaji wa kawaida wa kitambulisho, ushughulikiaji wa kupoa/kiwango cha kikomo, na usambazaji wa mtoa huduma.
5. Ombi lililofanikiwa huchukua nafasi ya sehemu zao na `[Audio N]: <transcript>`. Maombi huendeshwa na `Promise.allSettled`: kushindwa kwa mtu binafsi huhifadhi sehemu hiyo ya asili ya sauti (mkataba wa #4012). Ikiwa kila ombi litashindwa na lengo limethibitishwa kuwa `supportsAudio === false`, sehemu zinakuwa `[Audio N]: (unavailable — no STT provider connected)` (mkataba wa #8430). Kwa lengo lisilojulikana (`null`), matokeo ya kushindwa kwa kila kitu yanabaki bila kuguswa. Lengo lililothibitishwa kuwa la maandishi pekee lisilo na kitambulisho kinachoweza kutumika cha STT hupokea kigogo kilekile cha uwazi bila kutoa ombi la mtandao.

Unukuzi uliofanikiwa hutumia kashi ya LRU/TTL ya Modality Bridge ya mchakato mzima. Ufunguo unachanganya rejeleo la sauti, lebo thabiti ya operesheni ya `audio-transcription`, na modeli iliyochaguliwa ya STT; kushindwa hakujawahi kukasheshwa. Majaribio ya sauti husasisha vihesabio vilivyoshirikiwa vya `bridged`, `cacheHits`, `failures`, na `lastUsedAt`. Majibu yaliyobadilishwa hubeba `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi yasiyoguswa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa rununu inategemea hifadhidata na imethibitishwa na Zod:

| Ufunguo                       | Chaguo-msingi | Masafa                            |
| ----------------------------- | ------------- | --------------------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                                 |
| `modalityBridgeAudioModel`    | `""`          | Otomatiki au Kitambulisho cha STT |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000                       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                              |

Kashi inayoshirikiwa inaendelea kudhibitiwa na `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Daraja la Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Huzuia sehemu za video za kiwango cha juu katika `messages` za Chat Completions na `input` ya Responses API kabla ya kulenga lengo lisilo na msaada unaojulikana wa video asilia kuitwa. Maumbo yanayoungwa mkono ni `input_video`, `video_url`, `video_source`, URL za HTTPS, na URI za data za `data:video/*;base64,...`. Majina ya faili ya kawaida katika maandishi hayachukuliwi kama video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inamiliki uvukaji wa ombi, ukaguzi wa uwezo/sera, mkusanyiko kwa kila ombi, na mzigo wa malipo wa jibu. Kazi ya kila video — upatikanaji, kashi ya matokeo mazima, kuelezea mfuatano wa fremu (ambayo inaunganisha unukuzi wowote wa sauti uliotangazwa na mpigaji), na vipimo/kusitisha/kusafisha kwa kila jaribio — imefichwa nyuma ya `processVideoPart` katika `videoBridgePipeline.ts`, inayoitwa mara moja kwa kila sehemu ya video ndani ya kitanzi cha `preCall`. Moduli hiyo pia inafafanua mipaka ya bandari ya wazi `VideoMediaBrokerPort` (kuhakikisha baiti na kutoa fremu zilizochukuliwa sampuli), `VideoAudioTranscriptionPort` (kuunganisha unukuzi wa sauti uliotangazwa na mpigaji na manukuu yaliyochukuliwa sampuli), na `VideoDrilldownPort` (mpaka wa kudumu wa kuchimba fremu; bado haujaunganishwa kwenye `processVideoPart` — njia tofauti ya `/api/modality-bridge/video/drilldown` pekee ndiyo inayoandika maingizo ya kuchimba leo).

Njia ya ombi ya umma ya `/v1` haileti au kuingiza mchakato mdogo. Video za mbali hupakuliwa chini ya kikomo cha 50 MiB; video za base64 za ndani zina kikomo cha kihafidhina cha 36 MiB zilizosimbuliwa kwa kila video ili bahasha ya modeli/ujumbe/uundaji iweze kubaki ndani ya kikomo cha ukubali wa ombi la JSON la umma cha 50 MiB. Makadirio ya urefu wa ndani na ukubwa uliotatuliwa hukaguliwa kabla ya ugawaji. HTTPS inahitajika kwenye URL ya kwanza ya mbali na kila uelekezaji upya, kwa kutumia mlinzi wa njia ya nje wa umma aliyepo na ubandikaji wa DNS. Baiti hizo kisha zinavuka mpaka kamili wa ndani wa dalali wa `POST /api/modality-bridge/video/extract`. Njia hiyo ni yote mbili `LOCAL_ONLY` na `SPAWN_CAPABLE`, inakubali tu ombi lililothibitishwa kwa kila mchakato, la kitanzi cha kuaminika, na haikubali kamili URL, njia ya mfumo wa faili, programu inayoweza kutekelezwa, au orodha ya hoja. Bomba la ukubwa wa mwili wa API na kisoma mwili cha nyongeza cha kishughulikiaji kinasimamia kwa kujitegemea kikomo cha ingizo la dalali cha 50 MiB. Foleni yake iliyowekewa mpaka huendesha uchimbaji mmoja kwa wakati mmoja, inaruhusu kazi nne zinazosubiri, na kuweka kikomo cha ingizo linalosubiri kuwa 100 MiB.

Ndani ya broker, `ffprobe` inasoma faili la ndani la faragha; orodha ya ruhusa ya muundo uliowekwa haijumuishi miundo ya playlist na manifest. Kwa kontena za familia ya MOV zinazoruhusu, marejeleo ya data za nje za MOV yanasalia yamezimwa kwa chaguo-msingi, na amri iliyowekwa haijumuishi hayo. Zote `ffprobe` na `ffmpeg` zinatumia orodha ya ruhusa ya itifaki ya `file`-pekee, uzi mmoja, safu za hoja zilizowekwa, hakuna shell, na faili zinazoweza kutekelezwa zinazotatuliwa kutoka kwenye `PATH`. Mitiririko ya jalada la picha iliyoambatanishwa si wagombea wanaoweza kuchezwa. Mitiririko yote inayoweza kuchezwa lazima itimize vigezo, na mtiririko chaguo-msingi wa wazi unapendekezwa kabla ya kurudi kwenye faharasa ya chini kabisa ya kideterministiki. Video zimepunguzwa hadi sekunde 600, pikseli 8,192 kwa kila kipimo, na pikseli 33,554,432 za chanzo. FFmpeg huchunguza sampuli za fremu za JPEG za katikati 1–16, inapunguza ukingo mrefu hadi isiyozidi pikseli 1,024 bila kupandisha kiwango cha pembejeo ndogo, na haipokei URL kamwe. Uchunguzi ni `uniform` kwa chaguo-msingi. Sera za hiari za `scene_aware` na za majaribio za `segment_aware` hufanya awamu moja ya ziada ya FFmpeg iliyowekwa kwenye mtiririko wa ndani uliothibitishwa tayari, huchagua mihuri ya muda ya eneo ya `showinfo` iliyowekwa mipaka, na kurudi kwa njia ya kideterministiki kwenye nukta za katikati za sare zilezile endapo kitambuzi kitashindwa, muda kuisha, towe bovu, au seti tupu ya watahiniwa. Hali ya `segment_aware` inatenga sampuli za katikati kwa uwiano kulingana na vipindi vya eneo vilivyothibitishwa; ushahidi na tabia ya kurudi nyuma ya `segment_aware` zimeelezwa kwa kina hapa chini. Kikomo kigumu cha fremu 16 kinatumika baada ya uteuzi katika kila sera. Ombi linalozingatia eneo linapokuwa na bajeti ya fremu moja tu, linatumia nukta ya katikati ya sare ya video nzima inayotumika au dirisha la mwelekezo na kuripoti `policyEffective: uniform`: fremu moja iliyochaguliwa ya eneo haiwezi kuhifadhi ncha zote mbili za muda. Mwitaji anaweza kwa hiari kutoa dirisha la mwelekezo lenye ukomo (sekunde za `start`/`end`); mipaka inafungwa kwa muda wa media, madirisha yaliyogeuzwa au yasiyokuwa na ukomo yanakataliwa, na sera zote za uchunguzi hufanywa ndani ya kipindi kilichorekebishwa tu. Dirisha linalotokea linajumuishwa katika metadata ya uchunguzi na katika kiambishi awali cha maelezo yasiyoaminika ili miundo ya chini ya mkondo iweze kutofautisha dondoo iliyoelekezwa kutoka kwa ratiba nzima ya muda.

Lengo la maelezo mafupi ya kisemantiki ni mpangilio tofauti na wa wazi. Hali ya uchambuzi chaguo-msingi ya `full` inahifadhi kidokezo cha fremu kilichopo na haipeleki kamwe maandishi ya ombi kwa mfano wa maelezo mafupi. Katika hali ya `focused`, daraja linasoma tu maandishi ya hivi karibuni yasiyo tupu yaliyoandikwa na mtumiaji (`text`/`input_text`) kutoka kwenye kontena sawa la Chat au Responses, linayasawazisha kwenda NFC, linakusanya herufi za udhibiti na nafasi nyeupe, na linayapunguza hadi pointi za msimbo za Unicode 500. Tokeo tupu linarejea kwenye kidokezo halisi cha `full`. Dokezo linaloweza kutumika linajumuishwa kama JSON katika kizuizi maalum cha muktadha wa mtumiaji asiyeaminika na linaweza tu kutanguliza maelezo yanayoonekana; haliwezi kubatilisha onyo tofauti dhidi ya kufuata maagizo yanayoonekana au kusikika kwenye media. Lengo la kimaandishi halitoi hitimisho la `start`/`end` au kubadilisha kichunguza muda.

#### Ushahidi wa sehemu za kimuundo za FU-07

`segment_aware` inatumia awamu moja ya uchambuzi wa awali uliowekwa mipaka kwenye mtiririko wa video wa ndani uliothibitishwa tayari. Mlolongo wa vichujio uliowekwa huanza kwa kupunguza hadi upana wa isiyozidi pikseli 320, hugundua mabadiliko ya eneo na vipindi vilivyogandishwa, kisha huchunguza kwa kiwango cha fremu 1 kwa sekunde kwa ajili ya ukungu, wastani wa luma, na taarifa za anga/muda. Awamu hii imepunguzwa hadi sampuli za kimuundo 600, uzi mmoja wa FFmpeg/kichujio, orodha za ruhusa za itifaki na kontena za `file`-pekee zilezile, kikomo cha towe la mchakato cha 1 MiB, na si zaidi ya sekunde 30 ndani ya muda wa mwisho/kusitishwa kwa pamoja wa broker. Haikubali kamwe amri, kichujio, njia, au URL kutoka kwenye ombi.

Thamani za kimuundo ni ushahidi wa uchunguzi wa kideterministiki, si uelewa wa video wa kisemantiki. Hazitoi hitimisho la masomo, vitendo, maelezo mafupi, hotuba, au nia ya mtumiaji. Mipaka ya eneo na ya kuganda huunda sehemu; chanjo ya kuganda, ukungu, mwangaza, undani wa anga, na mabadiliko ya muda huathiri tu jinsi bajeti ya fremu 1–16 iliyopo inavyotengwa. Sehemu iliyogandishwa kabisa inawekwa kikomo cha fremu moja, wakati sehemu zisizogandishwa zinashindania bajeti iliyobaki. Mipaka inapozidi idadi ya fremu, chanjo ya sare ya ratiba ya muda huhifadhiwa ili ukataji wa haraka wa awali usifiche sehemu ndefu ya mwisho. Mipaka ya eneo iliyo ndani ya azimio la uchambuzi wa sekunde 1 ya mpaka wa kuganda huunganishwa.

Vichujio vinavyokosekana, ushahidi uliopotoka/mtupu, hitilafu ya kitambuzi, au muda wa ziada wa uchambuzi wa awali uliowekwa unashindwa wazi kwenda kwenye sera halisi ya nukta ya katikati ya sare. Kusitishwa na mwitaji au muda wa mwisho wa broker hakushindwi wazi: kunasitisha mchakato mdogo unaoendelea, kunazuia uchimbaji wa fremu za baadaye, na mti wa muda wa faragha unaondolewa kwenye `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` inazalisha vivutio halisi vya kideterministiki vya FFmpeg kwa ajili ya akiba ya simu za maelezo mafupi baada ya kuondoa nakala, utengaji wa bajeti ya mwendo mnene, ushahidi wa ukungu/mwangaza/SI-TI, ukataji wa haraka wenye mkia mrefu, na matokeo chanya ya uwongo ya kufifia taratibu. Inarekodi muda wa ukuta wa uchambuzi wa awali na, pale ambapo `/usr/bin/time` inapatikana, CPU ya mtoto na RSS ya kilele. Ukaguzi wake wa ubora ni wa oracles za kimuundo pekee. Ubora halisi wa mfano wa maelezo mafupi unasalia kuwa `HOLD` kwa sababu mfumo huu hauna sehemu ya mwisho iliyoidhinishwa au jaji aliyegandishwa. Akiba ya kifedha pia inasalia kuwa `HOLD` isipokuwa kama `--caption-cost-per-call-usd` itatoa makadirio chanya ya wazi kwa kila simu; hati haitengenezi kamwe matokeo yoyote kati ya hayo.

Kila fremu imepunguzwa hadi 4 MiB, fremu zote mbichi kwa pamoja hadi 23 MiB, na jibu la wakala lililowekwa katika mfululizo hadi 32 MiB. Saraka ya muda ya faragha huondolewa katika `finally`. OmniRoute haiambatani na FFmpeg na haikubali njia maalum ya faili inayoweza kutekelezwa. Kabla ya kuongeza manukuu, daraja hutumia mchakato wa kihafidhina wa kuondoa marudio ya kuona: kila JPEG hupunguzwa hadi bafa ya kiwango cha kijivu ya 16×16 na hulinganishwa tu na fremu ya mwisho iliyohifadhiwa. Kwa bajeti ya manukuu iliyoombwa juu ya fremu moja, uchimbaji hutoa bwawa la watahiniwa lililo na mipaka la hadi mara mbili ya bajeti hiyo na sio zaidi ya fremu 16. Kikomo kilichoombwa kinatumika tu baada ya kuondoa marudio, huku watahiniwa wa kwanza na wa mwisho waliochaguliwa wakihifadhiwa wakati wa upunguzaji wa mwisho wakati bajeti ni angalau mbili. Sera yenye toleo la `grayscale-16x16-mean-cells-v2` hutumia thamani kubwa zaidi kati ya wastani wa delta ya luma na uwiano wa seli za kijipicha ambazo delta yake iliyosawazishwa ni angalau 0.05. Kiwango cha juu cha kurudia ni thamani isiyobadilika ya 0.04, iliyochaguliwa kwa ajili ya kutabirika badala ya kuwekwa wazi kama mpangilio wa wakati wa kuendesha. Ishara hii ya pili ya utofautishaji wa juu huhifadhi mwendo mdogo na mabadiliko ya maandishi yanayoonekana ambayo ulinganisho wa wastani pekee unaweza kuficha. Makosa ya kilinganishi au avunjaji hayazuii mchakato na huweka chanjo. Metadata ya pato hutenganisha watahiniwa waliotolewa, fremu zilizotumiwa kwa mafanikio, na marudio ya kuona yaliyoondolewa.

Sehemu ya video iliyotiwa alama waziwazi inaweza kuomba karatasi ya mawasiliano yenye muhuri wa muda. Daraja hujenga gridi ya JPEG yenye safu wima 4 na fremu 16 zaidi. Kila seli ya pikseli 512 huchoma muhuri wake wa muda wa chanzo kwenye utepe wa chini wenye utofautishaji wa juu, wakati mihuri hiyo hiyo ya muda inabaki katika metadata ya maandishi kwa ajili ya uhusiano wa chini na ukaguzi. JPEG kamili inasalia na kikomo cha 32 MiB. Ikiwa `sharp` haiwezi kusimbua au kuunda gridi hiyo, daraja hurudi kwenye fremu za JPEG za kibinafsi; kusitisha kwa mteja bado kunaenea kupitia operesheni ya karatasi.

Ushahidi wa ukuzaji umetengwa kwa makusudi kutoka kwa kipimo kidogo cha utendaji cha uundaji bandia. `scripts/perf/video-bridge-contact-sheet-eval.ts` inafafanua zana ya majaribio ya A/B yenye toleo la skema kwa ajili ya miundo halisi ya maono inayooana na OpenAI. Inapima tokeni zilizoripotiwa na mtoa huduma, muda wa kusubiri wa mwisho hadi mwisho (ikiwa ni pamoja na uundaji wa karatasi), idadi ya simu za mfano, na uhifadhi wa ukweli uliofafanuliwa na manifest. Majibu yasiyochujwa ya mfano hayaandikwi kwenye ripoti; ni muhtasari wa SHA-256 na vitambulisho vya ukweli vinavyolingana pekee ndivyo vinavyohifadhiwa. Zana hii haifanyi simu ya mtandao au mfano unaolipishwa isipokuwa `--execute-real` ipitishwe na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zimesanidiwa. Bila kukimbia huko halisi kwa uwazi, uamuzi wake unaoweza kusomwa na mashine unasalia kuwa `HOLD`; vipimo vya mzigo bandia/idadi ya simu pekee si ushahidi wa ukuzaji.

Watumiaji wanaweza kuambatisha safu ya hiari ya `transcript.cues` kwenye sehemu ya video inayotumika wanapokuwa tayari wana maandishi yaliyolinganishwa. Kila kidokezo lazima kiwe na `text`, muda thabiti wa `start`/`end` ndani ya muda uliopimwa, na `source` iliyoidhinishwa (`client`, `embedded`, au `audio-bridge`); `confidence` ni `1` kwa chaguo-msingi na lazima ibaki kati ya `0` na `1`. Vidadisi vinavyofanana kabisa vinaondolewa. OmniRoute haianzi kamwe unukuzi kutoka kwa metadata hii: vidokezo vilivyothibitishwa vinanakiliwa kwenye matokeo yaliyoelezwa na chanzo, kiwango cha kuaminika, na muda, na vinaonyeshwa kama maoni yasiyoaminika pamoja na manukuu ya fremu. Maandishi yasiyo sahihi, yaliyo nje ya kiwango, au yasiyo na asili hukataliwa badala ya kuchanganywa katika mkondo wa manukuu. Njia zote mbili za unukuzi wa mwili wa ombi husawazisha asili iliyotolewa kuwa `client`, ikiwa ni pamoja na lebo zilizodaiwa kibinafsi za `embedded` au `audio-bridge`. Kigeuzi kinachomilikiwa na seva pekee ndicho kinachoweza kukabidhi lebo hizo zinazoaminika kupitia hoja ya `trustedSource` ya msimbo pekee; uwanja wa JSON wa ombi hauwezi kufikia hoja hiyo. Maandishi ya unukuzi yanasalia kuwa maudhui yaliyotolewa kutoka kwa vyombo vya habari yasiyoaminika, bila kujali asili yake, na lazima kamwe yasiamue uidhinishaji.

Mtumiaji wa juu anaweza kutoa wimbo wa `audioTranscript` kwa video hiyo hiyo; inachukuliwa kama maandishi yaliyotolewa na mteja, si uthibitisho wa unukuzi wa seva. Eneo la kuunganisha huendesha maoni ya kuona na sauti chini ya tarehe ya mwisho moja na ishara ya kusitisha, linayapanga kwenye ratiba ya kawaida ya muda, huondoa marudio kamili, na linaripoti matokeo ya sehemu wakati upande mmoja tu unafaulu. `audioTranscript` isiyo sahihi inashushwa hadi kwenye matokeo hayo ya sehemu — maelezo ya kuona yanahifadhiwa na tawi la sauti linarekodi msimbo wa kushindwa uliosafishwa — badala ya kufeli video nzima. Upatikanaji wa kila tawi, bendera ya sehemu, na misimbo ya kushindwa iliyosafishwa hifadhiwa katika matokeo yaliyoelezwa, katika metadata ya ngome ya ulinzi (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), katika metadata ya akiba ya matokeo, na katika vihesabu vya kuunganisha vya daraja. Njia chaguo-msingi ya Daraja la Video haitoi huduma ya kugeuza usemi kuwa maandishi au kupakua nakala ya pili ya media; bila wimbo huo wa wazi, inabaki kuwa ya video pekee.

**Uhifadhi wa nakala za mazungumzo (Transcript retention) (#12150 P1).** Hii inatumika kiotomatiki wakati wowote Daraja la Video (Video Bridge - ambalo ni la kujichagulia) linapotoa dokezo la nakala ya mazungumzo (transcript cue) — hakuna bendera tofauti ya uhifadhi. Ombi linapotoa dokezo lolote la nakala (`transcript` iliyotangazwa na mpigaji au `audioTranscript` iliyounganishwa), kizuizi huweka alama kuwa `videoBridgeObserved` na kutokeza kivuli kilichofichwa cha maelezo ya video — toleo linalofanana ambapo kila mwili wa maandishi huru ya dokezo unabadilishwa na `[redacted-video-transcript]`, lililoundwa kwa kubadilisha uwanja wa dokezo uliofumwa kabla ya kamba kuundwa (kamwe sio kwa kuchanganua maandishi yaliyosawazishwa, ili hakuna maudhui ya dokezo — ya uadui au ya kawaida, pamoja na miili iliyo na `]` kama vile `[inaudible]`/`[music]` — yanayoweza kusalia). Mwili wa ombi la kumbukumbu ya simu iliyohifadhiwa hubadilisha kila sehemu ya maandishi inayotokana na video na kivuli hicho kilichofichwa, zikilinganishwa kwa usawa wa maudhui; nanga ya `fullText` inasomwa upya kutoka kwenye mzigo uliomalizika wa kizuizi cha kabla ya simu, ili ulinganifu ufanikiwe hata baada ya vizuizi vya mnyororo vya baadaye (vificha vya PII na vitambulisho, vipaumbele 10/95) kuandika upya maandishi ya maelezo mahali pake na baada ya system-prompt/handoff/memory injection kuunda upya safu ya ujumbe. Mwili unaotumwa kwa modeli haubadilishwi. Ombi lililozingatiwa halijai pia Kumbukumbu ya kudumu (uchimbaji unaotokana na ombi na jibu hurukishwa), kwa hivyo jibu lenyewe la modeli haliwezi kurudia maandishi ya nakala kwenye Kumbukumbu.

**Sehemu za video ghafi (#12430).** Wakati daraja limewashwa na usaidizi wa video asilia haujulikani au haupo, sehemu zilizofafanuliwa za `transcript`/`audioTranscript` pia huamilisha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. Thamani za `null` na kamba tupu zinahesabika; sehemu zisizopo na metadata zisizo za video hazihesabiki. Nakala zilizohifadhiwa huficha sehemu hizi au huacha ombi, na kasisi/Kumbukumbu hupitishwa kando.

Kwenye njia hizo za mbadala (fallback paths), vidokezo halali vya mpigaji huwa sehemu zinazoungwa mkono za `text`/`input_text` badala ya sehemu zisizo za kawaida za mtoa huduma. Nyimbo zote mbili zilizotolewa na ombi zinabaki kuwa uchunguzi wa `client` usioaminika, pamoja na onyo la wazi kwamba video haikuelezwa na mihuri ya muda haikuthibitishwa dhidi ya media. Bajeti zilizopo za jumla na kwa kila dokezo za dokezo 256/KiB 64 zinatumika kwa nyimbo zote mbili kwa pamoja; mihuri ya muda lazima ilingane na dari la sekunde 600 la dalali na dirisha lolote la mwelekeo lililotolewa. Nyimbo batili hutupwa, hazisambazwi kama maandishi ya kiholela; wimbo dada halali bado unaweza kutumiwa isipokuwa bajeti yao ya pamoja imezidishwa. Sehemu za `null`/tupu haziongezi maandishi yoyote. Hakuna upatikanaji wa media au unukuzi unaongezwa na mbadala huu. Sehemu za upanuzi wa nakala huondolewa kutoka kwa mtoa huduma wa video wa mbadala na vitu vyake vya `video_url`/`source`. Orodha ya ruhusa ya waya ya OpenAI inasalia kuwa kali; wabebaji wa video wasiojulikana wa asilia wanasalia kupatikana na malengo yanayojulikana ya maandishi pekee huweka alama salama. Vivuli vya ufichaji vilivyoundwa hulinda maandishi ya nakala yaliyoongezwa, wakati ombi la asili linalomilikiwa na mpigaji linabaki bila kubadilika. Malengo yanayoungwa mkono kiasili na madaraja yaliyozimwa yanadumisha tabia yao ya sasa ya kupitisha kando.

Nakala za ziada zilizohifadhiwa zinatumia ishara hiyo hiyo ya ombi lililozingatiwa. Picha ya ombi la mteja ya kabla ya kizuizi, ombi linalosubiri katika kumbukumbu ya ndani, na kumbukumbu ya ombi lililokataliwa mapema vinachukua nafasi ya sehemu za nakala katika sehemu za video kimuundo; vidokezo vya kamba vilivyosanisiwa na hatua za bomba na uhamishaji wa muktadha hufichwa kwenye mahali pa kuhifadhia mwili wa ombi lililohifadhiwa. Alama iliyohifadhiwa ya `video_content_removed` hufanya uendelezaji wa `previous_response_id` kushindwa kufungwa badala ya kuunda upya maandishi yaliyotupwa kwa makusudi. Ikiwa ombi lililozingatiwa litapoteza kivuli chake cha ufichaji kwa kila sehemu kabla ya kuingia kwenye kumbukumbu, au hata moja ya vivuli vingi vya video ikishindwa kulingana baada ya mabadiliko ya ombi la baadaye, mwili wa ombi uliohifadhiwa huachwa kabisa badala ya kuhifadhi nakala iliyofichwa kwa sehemu.

Kwa ombi lililozingatiwa, jibu la modeli linaweza kunukuu sehemu yoyote ya nakala bila mpaka wa dokezo ulioundwa. Kumbukumbu ya simu iliyohifadhiwa ya `responseBody` kwa hiyo inabadilishwa na alama ya kuachwa; bidhaa ya kina ya bomba (ambayo inaweza kujumuisha miili ya upstream/mteja na vijisehemu vya mtiririko) haihifadhiwa. Kasisi za kisemantiki, za uthabiti, na za kurudia-mantiki hupitisha kando usomaji na uandikaji kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana kwa mteja linasalia bila kubadilika. Baiti za awali za kuweka hai zinatolewa kutoka kwenye bafa ya muda wakati bidhaa ya kina imeachwa. Onyo la EventStream yenye hitilafu ya Kiro linaripoti idadi ya baiti za mzigo tu, kamwe sio yaliyomo au kosa ghafi la kichanganuzi cha JSON.
Hii haidai kuwa kila utambuzi wa mtoa huduma/programu-jalizi usiohusiana umekaguliwa; ukaguzi mpana wa sehemu zilizohifadhiwa unafuatiliwa katika #11658.

Mzunguko wa maisha wa ndani wa `/api/modality-bridge/video/drilldown` ni substrate ya kache tofauti, inayothibitishwa kupitia loopback/token. Kila operesheni pia inahitaji kitambulisho kikuu cha kanuni kisicho wazi. Kabla ya mpigaji wa uzalishaji kuwezeshwa, lazima achukue kitambulisho hicho kutoka kwa mpangaji aliyethibitishwa na asiwahi kusambaza thamani iliyochaguliwa na mteja. Funguo za kache hufunga mkuu huyo kwenye kipindi cha kanuni na vitambulisho vya marejeleo ya video, huhifadhi funguo zao zilizotokana na SHA-256 pekee, na kuweka wigo wa usomaji na ufutaji kwa mkuu huyo yule. Kache huhifadhi fremu za JPEG zisizozidi 16 zilizotokana kwa kila ingizo, huzimaliza muda wake baada ya dakika kumi, na inasaidia usomaji uliowekewa mipaka wa `start`/`end` au ufutaji wa kipindi wa wazi.

Kila mkuu amewekewa kikomo cha viingizo 16 na MB 64 za data ya JPEG ya kanuni. Vikomo hivi vinajitegemea kutoka kwa dari la kimataifa la viingizo 64 / MB 256: shinikizo la upendeleo wa mkuu hufukuza tu viingizo vichache vilivyotumiwa hivi karibuni vya mkuu huyo kabla ya kufukuzwa kwa LRU ya kimataifa kuzingatiwa. Viingizo vilivyomalizika muda wake hufagiwa kutoka kwa akaunti zote mbili za mkuu na za kimataifa wakati wa shughuli za kache, wakati kughairi na kushindwa kwa uthibitishaji hazifanyi uingizwaji wa sehemu.

Akiba katikaa Base64 isiyo ya kawaida, upandaji wa ziada, midia isiyo ya JPEG, JPEG zilizoharibika au zilizokatwa, na JPEG zinazotoa onyo wakati wa uvunjaji (decode) wa picha kamili wa `sharp` uliowekewa mipaka. Inasimba upya kila picha inayokubaliwa kama JPEG ya kawaida, inapata upana na urefu kutoka kwa baiti zilizosimbuliwa badala ya kuamini sehemu za mpigaji, na kutupa baiti zozote za ziada za polyglot badala ya kuzihifadhi. Bafa iliyobanwa ya kawaida yenye mipaka pekee ndiyo inatozwa kwa vikomo vyote viwili. Kikomo cha waya cha JSON kinajumuisha mzigo wa ziada wa Base64 kwa ajili ya kikomo cha pembejeo iliyosimbuliwa cha 32 MiB. Kila utokanaji uliowekwa unarekodi muundo/azimio lake la JPEG lililothibitishwa, sera ya sampuli, toleo la utokanaji, wakati wa kuundwa, nambari ya utambulisho ya maudhui iliyohesabiwa na seva, na rejeleo la mzazi lililowekwa nambari ya utambulisho pamoja na nambari ya utambulisho ya maudhui ya mzazi ya mpigaji anayeaminika. Kughairi kunakaguliwa kati ya awamu za kusimbua/kutoa nambari ya utambulisho za asynchronous kabla ya uwekaji wa akiba wa atomiki.

Sehemu hii bado haiunganishi mtayarishaji wa uzalishaji kwenye njia na haitoi uteuzi wa lahaja za maazimio mengi. Njia ya ombi la Video Bridge isiyoonekana kwa hiyo haisababishi kazi ya ziada, wakati utokanaji wa mhusika mkuu anayefungwa na mpangaji na mzunguko kamili wa maisha ya maazimio mengi ya FU-08 unasalia kuwa kazi ya ufuatiliaji ya wazi badala ya kuandikwa kama tabia kamili.

Fremu zinawekewa manukuu mfululizo kwa kutumia modeli ya Video iliyosanidiwa. Ubatilishaji mtupu wa Video unarithi mpangilio wa Vision; zote zikiwa tupu, kipanga njia otomatiki cha Vision kinachagua modeli yenye uwezo wa kuona inayofaa. Manukuu yaliyofanikiwa yanachukua nafasi ya sehemu ya asili na kiambishi awali thabiti cha `[Video description:` ambacho pia kinatia alama maandishi kama uchunguzi usioaminika uliotokana na midia na kuwaambia modeli za chini zisifuate maagizo yanayopatikana kwenye midia hiyo. Funguo za akiba za manukuu ya fremu zinajumuisha baiti za JPEG, kidokezo, muhuri wa wakati, na modeli inayofaa; manukuu yaliyofanikiwa pekee ndiyo yanayohifadhiwa kwenye akiba. Viingizo vya akiba vinadumisha modeli halisi ya mtayarishaji aliyefanikiwa, ikijumuisha modeli mbadala; daraja linaripoti `mixed` wakati fremu tofauti zilitolewa na modeli tofauti. Kupatikana kwa akiba kunatumia tena utambulisho huo wa mtayarishaji badala ya kuuweka lebo upya kama mpango wa uelekezaji ulioombwa. Akiba ya matokeo ya video nzima ina ufunguo wake kwenye kila ingizo ambalo linabadilisha pato — kidokezo, modeli inayofaa, sera ya sampuli, idadi ya fremu, modi ya uchambuzi wa semantiki, alama ya vidole ya SHA-256 ya dokezo la mwelekeo lililosawazishwa, dirisha la mwelekeo, `transcript`, `audioTranscript`, na bendera ya contact-sheet — kwa hiyo kubadilisha kipimo chochote kati ya hizi ni kukosa akiba, kamwe sio utumizi tena wa kizamani. Toleo la sera ya utatuzi wa nakala za kuona, kikomo, na idadi ya fremu za watahiniwa zilizowekwa mipaka pia ziko wazi katika ufunguo wa akiba ya matokeo na metadadata; kwa hiyo mabadiliko ya sera hayawezi kutumia tena maelezo ya zamani ya video nzima. Metadadata ya v4 ya akiba ya matokeo huweka modi na alama ya vidole, kamwe si jukumu ghafi la mtumiaji. Metadadata ya ngome ya ulinzi inaripoti modi za uchambuzi zilizoombwa na zinazofaa; modi ya `focused` iliyoombwa bila maandishi ya mtumiaji yanayoweza kutumika inaripotiwa kuwa `full` kwa ufanisi.

Ngome ya ulinzi hutoa kila sehemu ya video inayotumika lakini haielezei zaidi ya `modalityBridgeVideoMaxVideos`. Kwa lengo lililothibitishwa kuwa na `supportsVideo === false`, video zilizoshindwa na zilizozidi kikomo zinakuwa alama za maandishi salama zilizowazi ili hakuna video ghafi inayobaki. Wakati uwezo haujulikani, sehemu hizo zinahifadhi mbebaji wao wa video; nakala yoyote mbadala inafuata ubadilishaji wa maandishi uliowekewa mipaka hapo juu. Malengo yenye `supportsVideo === true` yanapita daraja hili. Ishara ya kusitisha ombi la mteja inasambaza kupitia upakuaji, foleni ya mdalali, michakato ndogo, na miito ya manukuu; kusitisha kunasimama kati ya video na hakushindwi kamwe kuwa wazi kwa midia ghafi.

Mipangilio ya wakati wa kukimbia inaungwa mkono na hifadhidata na imethibitishwa na Zod:

| Ufunguo                             | Chaguo-msingi | Aina / tabia                                                                                                                           |
| ----------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Mipangilio ya hiari ya wakati wa kukimbia, kujiandikisha                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` inahifadhi vichwa vya habari vya jumla; `focused` inatumia muktadha wa hivi karibuni wa mtumiaji uliowekewa mipaka, usioaminika |
| `modalityBridgeVideoModel`          | `""`          | Kurithi modeli ya Vision Bridge                                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; kushindwa kwa kitambuzi kunarudi kwenye `uniform`                              |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                                                         |

Thamani za muda wa kusubiri wa Video za zamani zilizohifadhiwa zaidi ya sekunde 120 zinabanwa kwa muda wa mwisho wa mdalali; uandikaji mpya wa mipangilio ulio juu ya kikomo hicho unakataliwa.
`GET /api/modality-bridge/video/runtime` inahitaji eneo la loopback lenye muhuri linaloaminika kabla ya uthibitishaji au uchunguzi wa wakati wa kukimbia, kisha inahitaji uthibitishaji wa usimamizi. Inarudisha tu `available`, matoleo yaliyosafishwa ya FFmpeg/ffprobe, na sababu maalum wakati wakati wa kukimbia haupatikani. Sehemu ya mwisho ya uchimbaji ya ndani si API ya upakiaji ya umma: kujazwa kwa foleni kunarudisha `503` pamoja na `Retry-After`, kukatwa kwa muunganisho wa mpigaji kunarudisha `499`, na muda maalum wa mwisho wa mdalali unarudisha `504`. Majibu yaliyobadilishwa yanaongeza `video->text;model=<visionModel>;parts=<videos>` kwenye kichwa kikuu cha `x-omniroute-modality-bridge` bila kuondoa sehemu za Vision au Audio.

### Kichujio cha PII (`piiMasker.ts`)

Inafanya kazi kwenye hatua **zote mbili**.

- **`preCall`** inanakopi payload, inapitia `system`, `messages`, `input`, na
  `prompt` (pamoja na vipengele vya string vya kawaida), na inatumia `processPII()` (kutoka
  `@/shared/utils/inputSanitizer`) kwenye sehemu za `content`/`text` za aina ya string. Wakati
  `PII_REDACTION_ENABLED=true`, PII iliyogunduliwa inafichwa kwenye payload inayotoka.
  Hii inajitegemea na `INPUT_SANITIZER_MODE` (ambayo inasimamia sera ya kudunga prompt pekee).
  Wakati ufichaji umezimwa, kitendo hiki kinarekodi idadi ya uvumbuzi bila kubadilisha maudhui.
- **`postCall`** inanakopi kwa kina jibu, inaendesha `sanitizePIIResponse()` pamoja na
  kinyago cha umbo la Responses-API (`maskResponsesOutput` — kinashughulikia
  `output_text` na `output[].content[].text`). Ikiwa ufichaji wowote utatokea,
  jibu lililorekebishwa linachukua nafasi ya la asili.

Kinga hii haizuii kamwe; inaweka tu vidokezo (`meta.detections`,
`meta.redacted`) au kuandika upya.

#### Uteuzi wa kila aina, miundo maalum na vihesabio vya uvumbuzi

**Dashboard → Settings → Security → PII masking** inachagua _kile_ kinachofichwa. Haiwashi
ufichaji: hiyo bado ni kazi ya `PII_REDACTION_ENABLED` (ombi) na
`PII_RESPONSE_SANITIZATION` (jibu + SSE), ambavyo vyote vimezimwa kwa chaguo-msingi.

- **Uteuzi wa kila aina** — vitambulisho vilivyojengewa ndani vimeorodheshwa katika
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Kutoweka maana yake ni kila aina
  (tabia iliyokuwepo kabla ya mpangilio huu kuwepo). Muundo wa `ssn_us` wa injini ya ombi
  unahusishwa na `ssn`. Violezo (Minimal, Standard, Financial,
  Brazilian, USA, Full) vinajaza tu visanduku vya kuteua kwenye kiolesura.
- **Miundo maalum** — hadi miundo 20 ya regex au wildcard (`*` = hadi herufi 64
  zisizo na nafasi wazi, `?` = moja). Mechi zinazopatikana zinakuwa `[CUSTOM_REDACTED]`.
  Kila muundo hupitia `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): isiyozidi herufi 500, bendera zikiwa zimezuiliwa
  kwa `g i m s u`, lazima zikusanywe, lazima zipitishe `safe-regex` (kuzuia urejeshaji wa janga),
  na haipaswi kulingana na kamba tupu au kitambulisho cha ufichaji.
  Muundo unaoshindwa hukataliwa wakati wa kuhifadhi na kupimwa, na safu iliyohifadhiwa
  inayoshindwa hurukwa wakati wa kuendeshwa badala ya kukusanywa. Miundo maalum huendeshwa tu
  wakati ufichaji umewashwa.
- **Vihesabio vya uvumbuzi** — idadi kwa kila aina (kamwe si maadili yaliyolinganishwa), zinazohifadhiwa kwenye
  kumbukumbu na kuwekwa upya wakati wa kuanzisha upya (`src/lib/pii/piiDetectionStats.ts`). Huongezeka tu
  wakati ufichaji umewashwa.

Mipangilio hii inapatikana kwenye jedwali la `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) na inasomwa kupitia kache ya sekunde 1. API:

| Mbinu  | Njia                     | Madhumuni                                                                                    |
| ------ | ------------------------ | -------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Hali ya bendera, `enabledTypes`, `customPatterns`, vihesabio vya uvumbuzi                    |
| `PUT`  | `/api/settings/pii`      | Badilisha `enabledTypes` (`null` = zote) na/au `customPatterns`                              |
| `POST` | `/api/settings/pii/test` | Jaribio la mfano la muundo mmoja dhidi ya sampuli ya isiyozidi KB 8; hakuna kinachohifadhiwa |

Zote tatu zinahitaji uthibitishaji wa usimamizi na zinathibitisha mwili kwa kutumia Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Udungaji wa Prompt (`promptInjection.ts`)

Inagundua miundo ya kishindani katika maudhui yaliyotolewa na mtumiaji na kutekeleza sera
iliyowekwa. Tabia hii inaendeshwa na vigezo vya mazingira na chaguzi za kikengeushi:

| Mpangilio       | Kitofauti cha Mazingira                                                                               | Chaguo-msingi | Athari                                                                                                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`        | Wakati ni `false`, kinga inajifunga yenyewe.                                                                                                                                                                          |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`        | Sera ya kudunga: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa ajili ya utangamano wa nyuma lakini **haiondoi** maandishi yaliyodungwa; uandishi upya wa PII wa ombi unadhibitiwa na `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Ukali wa chini kabisa unaohitajika kuzuia. Kiwango cha wastani ni cha uchunguzi pekee kwa chaguo-msingi.                                                                                                              |

**Kipaumbele cha Hali** (`getMode`): `options.mode` ya mpigaji simu →
`INJECTION_GUARD_MODE` **ubatilishaji wa kipengele cha DB** (Dashboard → Settings →
Feature Flags) → mazingira ya `INJECTION_GUARD_MODE` → mazingira ya `INPUT_SANITIZER_MODE` →
`warn`. Kwa hiyo, ubatilishaji wa kwenye dashibodi unashinda vigezo vya mazingira, kwa hivyo kiolesura cha
Feature Flags kinadhibiti kinga inayofanya kazi moja kwa moja (bila kuanzisha upya). Usomaji wa DB ni salama dhidi ya hitilafu:
ikitokea hitilafu, kinga inarudi kwenye tabia inayotegemea mazingira, na wakati hakuna ubatilishaji
uliowekwa, tabia inafanana kabisa na utatuzi wa mazingira pekee.

Vyanzo vya uvumbuzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (seti ya vigunduzi inayoshirikiwa
   inayotumika mahali pengine kwenye mfumo).
2. `DEFAULT_GUARD_PATTERNS` zilizojengewa ndani (kwa sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na ukali wa `high`).
3. `customPatterns` za hiari zilizopitishwa kupitia chaguzi za kikengeushi (strings, regex,
   au rekodi za `{ name, pattern, severity }`).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unafikia kizingiti cha ukali, `preCall` inarejesha `{ block: true, message: "Request rejected: suspicious content detected" }`. Katika modi za `warn`/`log`, ngome ya ulinzi huweka kumbukumbu lakini inaruhusu ombi. Kisaidizi cha pamoja `evaluatePromptInjection()` pia kinasafirishwa kwa ajili ya waitaji wanaohitaji kutathmini vidokezo bila kupitia sajili.

**Mpaka wa kuchanganua (v3.8.20):** kitambuzi kinachunguza tu **KB 16 za kwanza** za maandishi yaliyounganishwa ya kidokezo — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (baiti 16 384) katika `src/shared/utils/inputSanitizer.ts`. Zote `detectInjection()` na `evaluatePromptInjection()` hufanya `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha kitanzi cha muundo. Maelekezo ya kudunga yanakaa karibu na sehemu ya juu ya ingizo, kwa hiyo hii inapunguza CPU/GC ya regex kwenye mizigo ya data ya mamia ya KB bila kudhoofisha ugunduzi (taz. #3932, #4041).

### Kificha Vitambulisho (`credentialMasker.ts`)

Inafanya kazi katika hatua **zote mbili**, ya mwisho kwenye mnyororo chaguomsingi (kipaumbele `95`). Inaficha miundo inayojulikana ya ufunguo wa API / tokeni ya siri kutoka kwa mzigo wa data unaotoka (maudhui ya ujumbe, hoja za mwito wa zana, matokeo ya zana) **na** jibu la mtoa huduma, ili kitambulisho kilichobandikwa kwenye kidokezo (au kurudishwa na matokeo ya zana) kisivuje kwa mtoa huduma wa juu au kurudi kwa mteja.

- **Ya kujiandikisha pekee (Opt-in only)**, kanuni sawa na ufichaji wa PII (inayohusiana na Sheria Ngumu #20): imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au** `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, ngome ya ulinzi ni `no-op` — haizuii kamwe na haiandiki upya kamwe.
- `redactCredentials()` inapitia mti mzima wa mzigo wa data/jibu (`walkValue()`, salama dhidi ya uchafuzi wa prototype, salama dhidi ya mzunguko kupitia `WeakSet`) na inabadilisha ulinganifu na kibadala cha `[REDACTED:<type>]`, ikinakili tu matawi yaliyobadilika kweli.
- `CREDENTIAL_PATTERNS` inashughulikia funguo za watoa huduma wa LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokeni za VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo za wingu (ufunguo wa ufikiaji wa AWS, Twilio, SendGrid, Mailgun), funguo za faragha / JWT, kamba za muunganisho zenye vitambulisho (`mongodb://user:pass@...`, n.k.), na muundo wa jumla wa thamani ya kichwa cha `Authorization`/`x-api-key`/`api-key`/`apikey`. Funguo zenye umbo la kichwa (`authorization`, `x-api-key`, `api-key`, `apikey`) zinafichwa kimuundo (thamani pekee, kiambishi awali cha mpango kama vile `Bearer `/`Basic ` kimehifadhiwa) badala ya kupitia regex ya maandishi ya kawaida.
- Ngome ya ulinzi haizuii kamwe; inaandika upya tu (`modifiedPayload` / `modifiedResponse`) na kuweka vidokezo (`meta.credentialsRedacted`, `meta.count`).

Kinga ya kurudi nyuma: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true inasitisha mnyororo mapema
  message?: string; // inaonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // inarejeshwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // inarejeshwa na postCall ili kuandika upya jibu
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

Kinga (guardrail) huashiria "hakuna mabadiliko" kwa kurudisha aidha `void`, `{}`, au
`{ block: false }`. Kurudisha `modifiedPayload`/`modifiedResponse` kunabadilisha
thamani inayopita kwenye mnyororo kwa ajili ya kinga zinazofuata.
`signal?: AbortSignal` hubeba mzunguko wa maisha ya ombi hadi kwenye kinga. Kusitisha ombi ni ubaguzi wa makusudi wa fail-open: madaraja ya midia husitisha kazi na kusafisha bila kurejesha midia ghafi kwenye lengo linalojulikana kutokubali hilo.

## Rejesta (`registry.ts`)

Kitengo kimoja (singleton) cha `guardrailRegistry` kinatoa:

- `register(guardrail)` — inaongeza (au inabadilisha kwa jina lililosawazishwa) kinga na
  kupanga upya kulingana na `priority` inayopanda.
- `clear()` / `list()` — visaidizi vya kiutawala.
- `runPreCallHooks(payload, context)` — inapitia kinga zinazotumika, hupitisha
  payload kupitia `modifiedPayload`, na kusimama kwenye `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko ule ule kwa upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — husafisha hali (state) na kwa hiari
  kusajili upya chaguo-msingi kwa ajili ya utengwa safi wa majaribio (test isolation).

Wakimbizaji wote wawili wanarudisha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu (array) ya kumbukumbu za `GuardrailExecutionResult` zinazojumuisha
nyanja (fields) za `blocked`, `skipped`, `modified`, `error`, na `meta` kwa kila kinga,
ambazo ni muhimu kwa ufuatiliaji (tracing).

### Kuzima Kinga Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` inakusanya orodha
isiyo na marudio ya majina ya kinga ambazo zinapaswa kurukwa kwa ombi la
sasa. Kuna njia tano, zinasomwa kwa mpangilio huu na kuunganishwa kuwa orodha moja
(tukio la kwanza ndilo hushinda wakati wa kuondoa marudio):

1. `apiKeyInfo.disabledGuardrails`
2. Mwili wa ombi `disabledGuardrails` (kiwango cha juu / top-level)
3. Mwili wa ombi `metadata.disabledGuardrails` (wakati tu `metadata` ni kitu/object)
4. Kichwa (Header) `x-omniroute-disabled-guardrails`
5. Kichwa cha zamani (Legacy header) `x-disabled-guardrails`

Njia zote tano zimeunganishwa, vichwa vikuu viwili vikiwa vimejumuishwa: kutuma zote mbili
`x-omniroute-disabled-guardrails` na `x-disabled-guardrails` kunaruka muungano (union) wa
orodha zao, na kichwa kipya kisicho na kitu hakifichi tena kile cha zamani
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), kimerekebishwa katika
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Thamani zinaweza kuwa safu (arrays) za vigawe vya maandishi (strings) au kamba iliyotenganishwa na koma; majina hukatwa pembezoni
na kusawazishwa kuwa herufi ndogo za mtindo wa kebab-case (`pii_masker` → `pii-masker`), na maingizo
matupu hutupwa. Matokeo yanapitishwa kupitia `context.disabledGuardrails`
kwenda kwenye rejesta, ambayo huruka kinga zinazolingana (`skipped: true` katika `results`).

Orodha ya kuzima inaathiri **rejesta** pekee. Hali ya `block` ya kudungiza maelekezo (prompt-injection) ni
mpaka wa lazima: middleware ya ulinzi wa kudungiza
(`src/middleware/promptInjectionGuard.ts`) inaita `evaluatePromptInjection()`
bila orodha yoyote ya kuzima inayodhibitiwa na mpigaji ombi (wito uliokufa wa
`resolveDisabledGuardrails({ body })` uliokuwa ukitumiwa uliondolewa katika
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), kwa hiyo ombi
ambalo linazima `prompt-injection` bado linakataliwa katika hali ya
`block`. Hii imetengenezwa makusudi. Njia za kuzima zinadhibitiwa na mpigaji ombi (mwili wa ombi,
metadata, vichwa vya habari), na mpigaji ombi hana budi kutoweza kuzima kidhibiti cha usalama
kilichowekwa na mwendeshaji
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Kichwa
chenye muungano kutoka [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
kinabadilisha tu ni kinga gani za rejesta zinazorukwa; hairuhusu mteja
kukwepa middleware. Sera za lazima za kinga kwa kila ufunguo na kwa kila kikundi zinafuatiliwa katika RFC ya v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Angalia [Coverage and limits](#coverage-and-limits).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts` (njia za familia ya gumzo zilizoorodheshwa chini ya
[Coverage and limits](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` huunda orodha ya kuruka kutoka kwa ufunguo wa API, mwili wa ombi,
   na vichwa vya habari (headers).
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha mifumo ya ulinzi kwa mpangilio wa kipaumbele unaopanda:
   - Mifumo ya ulinzi iliyozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila mfumo wa ulinzi inaweza kuandika upya data kupitia `modifiedPayload`.
   - `block: true` ya kwanza hukata mzunguko wa mnyororo na kirekebishaji hurudisha jibu la kukataliwa na mfumo wa ulinzi.
3. Data (inayoweza kuwa imeandikwa upya) huingia kwenye uelekezaji wa mchanganyiko na usambazaji wa juu.
4. **Yasiyo ya kutiririsha pekee:** baada ya jibu kukusanywa,
   `guardrailRegistry.runPostCallHooks(...)` huendesha mnyororo ule ule kwenye jibu. `block: true` hapa hutupa jibu la juu na kurudisha HTTP 400. Majibu yanayotiririshwa huruka hatua hii kabisa.

Mifumo ya ulinzi inayotupa makosa hurekodiwa na `error: <message>` na kuingizwa kwenye kumbukumbu kupitia `logger.warn`, lakini mnyororo unaendelea — fail-open kwa usanifu.

## Upeo na mipaka

Dawati la mifumo ya ulinzi limeunganishwa kwenye mkondo wa gumzo pekee. Mipaka hii imewekwa thabiti na
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` na
`tests/unit/guardrail-pipeline-characterization.test.ts`; sasisha majaribio hayo kwa makusudi tabia inapobadilika.

### Mahali ambapo hooks zinafanya kazi

| Hook / kidhibiti                              | Inafanya kazi kwenye                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                             | Maombi yanayoshughulikiwa na `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (na `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, na wakala wa gumzo wa Telegram. Pia sehemu ya mwisho ya majaribio ya dashibodi `/api/guardrails/test`. Zuio la kabla ya simu linarejesha HTTP 400. |
| `runPostCallHooks`                            | Majibu ya gumzo **yasiyo ya kutiririsha** pekee (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Majibu yanayotiririshwa hayafiki huko kabisa.                                                                                                                                                                                                                                                                                                           |
| PII ya kutiririsha                            | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), iliyowekwa kwenye mabomba katika `streamingPipeline.ts` wakati `PII_RESPONSE_SANITIZATION` imewashwa. Sio mfumo wa ulinzi, kwa hiyo njia za kuzima haziiathiri.                                                                                                                                                                                                                                   |
| Safu ya kati ya ulinzi wa udungizaji (legacy) | Kila njia ya `/v1` inayobeba prompt, ikiwa ni pamoja na familia ya gumzo (tazama [route coverage](#injection-guard-route-coverage--red-team-phase-8--block-d)). Uingizaji wa prompt pekee.                                                                                                                                                                                                                                                                      |

### Kile ambacho hakijafunikwa

- **Njia za media, embeddings na data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) hazifikii kamwe dawati hili. Hakuna
  ufunikaji wa PII, ufunikaji wa vitambulisho au daraja la mbinu linaloendeshwa huko. Ukaguzi wao pekee ni safu ya kati ya ulinzi wa udungizaji wa zamani.
- **Majibu yanayotiririshwa** hayapati mifumo ya ulinzi ya baada ya simu: hakuna `pii-masker` au
  `credential-masker` baada ya simu, na hakuna kizuizi cha baada ya simu. Mabadiliko ya PII ya kutiririsha pekee ndiyo yanayotumika (wakati `PII_RESPONSE_SANITIZATION` imewashwa). Kitambulisho kinachorudiwa katika jibu linalotiririshwa hakifichwi.
- **Njia za kuzima dhidi ya safu ya kati (kwa usanifu):** safu ya kati hutathmini udungizaji
  wa prompt kwa wito wake yenyewe kwa `evaluatePromptInjection()`, bila
  kupitisha orodha yoyote ya kuzima inayodhibitiwa na anayepiga simu. Hali ya `block` ni
  mpaka wa lazima ambao uzimaji unaodhibitiwa na anayepiga simu hauwezi kukwepa, pamoja na kwenye njia za familia ya gumzo
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Kuzima
  `prompt-injection` kunaruka tu mfumo wa ulinzi wa dawati.

### Kile kinachoona jibu kabla ya baada ya simu

Kwenye njia isiyo ya kutiririsha mpangilio ni: uchimbaji wa kumbukumbu → utekelezaji wa zana iliyojengewa ndani → mifumo ya ulinzi ya baada ya simu → utokaezaji wa kizuizi cha baada ya simu → uhifadhi wa cache ya semantiki.

- **Uchimbaji wa kumbukumbu** na **utekelezaji wa zana** huona jibu kabla ya vizuizi vya post-call kuweza kuliandika upya au kulizuia. Tangu [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), uchimbaji wa kumbukumbu huendesha maandishi yaliyochimbwa kupitia `sanitizePII` wakati `PII_RESPONSE_SANITIZATION` imewashwa (streaming na non-streaming), lakini jibu ambalo baadaye linazuiliwa na post-call bado limekabidhiwa kwa kumbukumbu na zana.
- **Kache ya semantiki** huhifadhi jibu baada ya post-call, kwa hiyo inahifadhi jibu lililoandikwa upya, na jibu lililozuiliwa halihifadhiwi kamwe kwenye kache. Viingilio vya kache vimewekwa funguo kwa kila ufunguo wa API.

## Usanidi

Vigezo vya mazingira vinavyosomwa na vizuizi vya ulinzi vilivyojengewa ndani:

| Kigezo                                | Inatumiwa na              | Athari                                                                                                                     |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kulemaza utambuzi kabisa.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya uingizaji: `warn`, `block`, au `log`. Thamani ya zamani `redact` haiandiki upya maandishi ya uingizaji.            |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya kizuizi cha uingizaji; pia ni bendera ya kipengele cha hifadhidata inayobatilisha vigezo vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Ukali wa chini kabisa ambao `MODE=block` unaukataa: `high` (chaguo-msingi), `medium`, au `low`.                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la zamani la `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Wakati ni `true`, PII ya ombi hufichwa (bila kujali hali ya uingizaji).                                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Inadhibiti tabia ya kificho upande wa jibu.                                                                                |

Vizuiizi vya ulinzi vya Modality Bridge vinasoma usanidi wa wakati wa kuendesha kutoka kwenye hifadhi ya mipangilio inayoungwa mkono na hifadhidata (`getSettings()`), si vigezo vya mazingira. Funguo kuu za Maono ni `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`. Funguo za zamani za `visionBridge*` zinakubaliwa tu kama njia mbadala ya kusoma ya mzunguko mmoja iliyoandikwa kwenye nyaraka; uandikaji wa dashibodi hutumia funguo kuu. Chaguo-msingi na kitatuzi mbadala zinapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`, huku vigezo vya zamani vikiwekwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`. Sauti haina njia mbadala ya funguo za zamani kwa sababu funguo hizi zilianzishwa na muundo wa Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos`, na `modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`. Imelemazwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni utegemezi wa hiari wa uendeshaji na uwekaji wa maelezo ya fremu huongeza ucheleweshaji na gharama ya mfano.

## Kinga Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayoongeza `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Jisajili wakati wa kuleta faili (sukuma kutoka `registerDefaultGuardrails`) au
   ita `guardrailRegistry.register(...)` wakati wa kuendesha (runtime) — sajili huchukua nafasi ya
   kinga yoyote ya awali yenye jina lilelile lililorekebishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Upimaji

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka kwenye hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na sajili tupu na
kusajili kinga zinazojaribiwa pekee. Vision Bridge inakubali udungaji wa tegemezi (dependency
injection) (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge inatoa
viunganisho sawa kwa mipangilio, uwezo, uteuzi wa mfano wa STT, ukaguzi wa vitambulisho,
na unukuzi. Kwa hiyo, majaribio yanaweza kutumia mitiririko yote miwili bila ufikiaji wa hifadhidata (DB)
au mtandao.

## Tazama Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi kinachoshirikiwa kinachowezesha
  sindano ya maelekezo (prompt-injection) na ufunikaji wa PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguo-msingi za Vision Bridge na
  orodha ya mifano ya daraja iliyolazimishwa
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguo-msingi za wakati wa kuendesha za Vision/Audio zinazoshirikiwa
- `docs/architecture/RESILIENCE_GUIDE.md` — safu isiyo na mshono (kikatiza mzunguko, nyakati za kupoa)
- `docs/reference/ENVIRONMENT.md` — marejeleo kamili ya vigezo vya mazingira

## Ufunikaji wa njia za kinga ya sindano na timu nyekundu / Red-team (Awamu ya 8 · Kizuizi D)

Kinga ya sindano (`createInjectionGuard` / `withInjectionGuard`) inafunika njia zote
zinazokubali vidokezo (prompts) vya mtumiaji. Inaheshimu `INJECTION_GUARD_MODE` (chaguo-msingi `warn` = rekodi kwenye kumbukumbu pekee;
`block` = inarudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali ya chaguo-msingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Maandishi (Yaliyopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                  |
| Ya kuzalisha         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                  |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                  |

Uchimbaji wa maandishi (`extractMessageContents`) unashughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Timu nyekundu / Red-team (ya usiku, `nightly-llm-security.yml`):** promptfoo inathibitisha kuwa kila njia inazuia
mkusanyiko wa OWASP-LLM katika `INJECTION_GUARD_MODE=block`; garak inaendesha uchunguzi (inaruka ikiwa haina siri).
`moderations` imejumuishwa kwa ajili ya uthabiti. Hali ya kuzuia ni mpaka wa lazima: `evaluatePromptInjection()`
inapuuza orodha ya kulemaza ya kwa-ombi inayopitishwa na middleware, kwa hiyo `disabledGuardrails` **haiondoi**
njia kwenye kinga hiyo ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Mtiririko wa kazi wa usiku (`.github/workflows/nightly-llm-security.yml`, cron + utekelezaji
wa mwongozo) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — inaendesha `promptfoo eval -c promptfooconfig.yaml`
  ikiwa na `INJECTION_GUARD_MODE=block`. Kila kisa cha kiadui (k.v. "puuza maagizo yote
  ya awali…", uvunjaji wa mfumo wa mtindo wa DAN) kinathibitisha kuwa jibu lina
  `error.code === "SECURITY_001"`, yaani kinga ilikataa ombi hilo kihalisi.
- **`garak` (ya ushauri)** — inaendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya mfano wa karibu wa OmniRoute (`http://localhost:20128/v1`). Imelindwa na siri ya
  mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); inaruka vizuri na ina viambishi tamati
  `|| true`, kwa hivyo inatoa ripoti bila kusababisha CI kushindwa.

Ufunikaji wa msaidizi wa kinga (`createInjectionGuard` / `withInjectionGuard`)
unagusa kila njia ya `/v1` inayobeba vidokezo; maandishi ya kidokezo yanachotwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.

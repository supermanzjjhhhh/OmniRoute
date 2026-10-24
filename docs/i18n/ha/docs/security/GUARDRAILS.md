# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tushen gaskiya:** `src/lib/guardrails/`
> **An sabunta na ƙarshe:** 2026-10-17 — v3.8.52 (an ƙara [Iyalin aiki da iyakoki](#coverage-and-limits):
> waɗanne hanyoyi da hanyoyin amsa ne hooks ke kaiwa, kanun kashewa da aka haɗa (#16412), yanayin toshe injection
> a matsayin iyaka ta dole (#16413), da abin da ke ganin amsa kafin post-call)

Guardrails suna tabbatar da tsaro, manufofi, da sauye-sauyen abun ciki a iyakar
tsakanin OmniRoute da masu samarwa na sama. Kowane guardrail na iya bincika (kuma
idan an so ya ƙi, ya sauya, ko ya ƙara bayani ga) bayanan buƙata (`preCall`) da
amsoshin masu samarwa na sama (`postCall`).

Tsarin yana **ci gaba idan an samu kuskure**: idan guardrail ya jefa kuskure yayin aiki, rajistar
tana rubuta kuskuren sannan ta ci gaba da guardrail na gaba maimakon sa
buƙatar ta gaza. Toshewa shawara ce ta fili (`block: true`), ba sakamakon kuskure ba.
Banda guda ɗaya ita ce buƙatar da aka soke: idan an soke `signal` na mai kira,
guardrail da ya jefa kuskure yana sa gudanar da hook ya gaza maimakon a tsallake shi.

Hooks **ba sa** aiki a kowace hanya ko kan kowace amsa. Karanta
[Iyalin aiki da iyakoki](#coverage-and-limits) kafin dogaro da guardrail a matsayin
matakin tsaro.

## Guardrails da Aka Gina a Ciki

Rajistar tana loda guardrails shida kai tsaye bisa jerin fifiko yayin shigo da ita
(duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Suna                | Mataki/Matakai | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ƙananan lambobin fifiko suna aiki **da farko**.

### Gadar Gani (`visionBridge.ts`) — Gadar Nau'in Bayanai PR-1

Samfurin asali na GLM 5.3 da `glm-5.3-{low,high,max}` suna da takamaiman
bayanan rajista/ƙayyadaddun bayanai na `supportsVision:false`. Nau'ikan GLM 5.3 Flash
sun ci gaba da kasancewa samfuran da ke da damar gani tun asali. Hanyar `/v1/messages` ta Claude Code tana shiga
sarkar guardrail ta `handleChat` da ake amfani da ita tare kafin kira **kafin** fassarar Claude zuwa OpenAI;
dole ne a bayyana ko a sarrafa hotunan sakamakon kayan aikin `Read` da ke cikin wasu bayanai
kafin wannan fassarar ta mayar da su abun ciki na OpenAI `image_url` (#17069).

Tana karɓe buƙatun da ke ɗauke da hotuna waɗanda aka nufa zuwa **samfuran da ba su da damar gani** sannan ko dai
ta sake tura buƙatar gaba ɗaya zuwa samfurin da ke da damar gani ko ta maye gurbin sassan hoton
da bayanin rubutu da samfurin gani da za a iya saita shi ya samar kafin
kiran mai samarwa na sama. Wannan yana ba masu samarwa masu karɓar rubutu kawai damar sarrafa
bayanan nau'o'i da yawa ba tare da an lura da canjin ba.

Tsarin aiki:

1. Tsallake idan samfurin da aka nufa ya riga ya goyi bayan gani (sai dai idan yana cikin
   jerin samfuran da aka tilasta musu gada na `isVisionBridgeForcedModel`).
2. Ciro sassan hotuna ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke miƙa aikin ga **mai gano kafofin
   bayanai na bai ɗaya** `detectMediaParts()` a `open-sse/utils/mediaParts.ts` — shi ne
   tushen gaskiya guda ɗaya da ake rabawa da matatar dacewa ta combo.
   Ana ba da izinin cirowa ne kawai ga siffofin da `replaceImageParts` zai iya saka
   su a wurinsu (yarjejeniyar ciro↔maye gurbi): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, da Responses
   API `input_image`. Haka kuma ana ciro hotunan da suka dace waɗanda ke cikin Claude Code
   `tool_result.content` da fitar kayan aikin Responses sannan a maye gurbinsu
   a hanyoyinsu na asali; siffofin da ke nuna alama kawai na matatar combo ne
   kuma ba a ciro su.
   Tsallake idan ba a sami ko ɗaya ba.
3. Gano saitunan lokacin aiki ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sababbin maɓallan saituna na `modalityBridge*`
   suna da fifiko; tsoffin maɓallan `visionBridge*` suna nan a matsayin **madadin
   zagaye ɗaya** (lokacin damar komawa baya). Tsallake kafin binciken kowane irin kafofin bayanai idan
   an kashe gadar.
4. Mai zaɓar yanayi (`modalityBridgeVisionMode`, duba jadawalin da ke ƙasa) yana yanke shawarar
   sake turawa ko bayyanawa. Sake turawa yana dawo da `modifiedPayload` inda `model` kaɗai
   aka sauya, tare da ƙarin bayanai `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyanawa: iyakance hotuna zuwa `maxImages`, tsara umarnin da ya dace da aikin,
   duba ma'ajiyar bayanin hotuna, kira samfurin gani **a lokaci guda**
   (`Promise.allSettled`), sannan saka sassan rubutu na `[Image N]: <description>` a
   wurinsu. Bayyanawar da ta gaza tana haifar da `null`: ana barin ainihin hoton ga
   samfuran da ba a san damarsu ba/masu damar gani (#4012), amma **samfurin kai tsaye da aka tabbatar
   yana karɓar rubutu kawai** ko combo marar damar gani yana samun guntun rubutu na fili
   `(unavailable — no vision-capable provider connected)` ga
   kowane hoton da ba a bayyana ba, ciki har da gazawar wani ɓangare da hotunan da suka wuce
   iyakar kiran bayyanawa (#17069). Madadin bayyanawar combo da ake da shi idan duk sun gaza
   yana nan yadda yake (#8430).
6. Dawo da `modifiedPayload` + ƙarin bayanai (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓar yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Na asali | Halayya                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Tsohuwar dabarar kimantawa, ba a canza ta ba (#6640/#7204): samfurori marasa combo/`auto/` suna karkatar da buƙata zuwa mafi kyawun samfurin gane hoto sai dai idan samfurin asali yana da bayanan shaidar shiga masu aiki (sai a yi bayani); wuraren nufin combo koyaushe suna yin bayani.                                                |
| `describe` |          | A yi bayani koyaushe — ana tsallake ɓangaren karkatar da buƙata gaba ɗaya; samfurin da mai amfani ya zaɓa ne koyaushe yake amsawa.                                                                                                                                                                                                         |
| `reroute`  |          | Tilasta karkatar da buƙata: ana kauce wa kariyar riƙe samfurin da ke da shaidar shiga. Kariyar shaidar shiga ta **wurin nufin** karkatarwa tana ci gaba da aiki — idan babu wurin nufin gane hoto mai aiki, gadar tana toshewa da kuskure bayyananne maimakon yin bayani ko aika hotuna kai tsaye zuwa wurin nufi mai karɓar rubutu kawai. |

Yanayin da aka tilasta suna katse aiwatarwa **kafin** dabarar kimantawar auto ta gudana; halayyar `auto`
ba ta da bambancin ko baiti ɗaya da kariyar da ke gaban PR-1.

#### Iyakokin maɓallin API (`visionBridgeKeyScope.ts`)

Idan maɓallin API na mai kira ya ƙuntata `allowedConnections`, rumbunan kaso
(`allowedQuotas`) ko samfurori (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gadar tana zaɓar
samfurorin karkatarwa da yin bayani waɗanda maɓallin ya halatta kawai, a kan haɗin da maɓallin
ya halatta. Sannan kiran yin bayanin koyaushe yana bi ta madaukin komawa kai na OmniRoute tare da
kanun `x-omniroute-self-loop-key-id`, don buƙatar hira mai karɓa
ta sake aiwatar da manufar haɗi da samfurori ta wannan maɓalli. `enforceApiKeyPolicy()`
yana amincewa da wannan kanun ne kawai tare da shaidar bearer ta madaukin komawa kai, don haka zai iya
ƙara ƙuntata damar shiga ne kawai, kuma ana ƙin id da ba a iya gano shi ba.

Idan ba a halatta wa maɓallin wani samfurin gane hoto ba, **wurin nufi da aka tabbatar yana karɓar rubutu
kawai** yana ƙin buƙatar hoton a cikin gida da bayyanannen HTTP 400 maimakon
tura baitocin hoto zuwa sabar sama da ba ta iya sarrafa su (#17069). Ga wuraren nufi da
ba a san ƙarfin gane hotonsu ba ko waɗanda ke da wannan ƙarfin tun asali, hanyar yin bayani tana riƙe da tsohuwar
halayyarta ta barin aiki ya ci gaba idan an samu gazawa (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da maɓalli, da maɓallan da ba su da waɗannan ƙuntatawa, suna aiki daidai yadda suke
a da.

#### Umarnin yin bayani mai la’akari da aiki (`modalityBridgeVisionTaskAware`)

Na asali **gaskiya**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana liƙa
rubutun **saƙon mai amfani na ƙarshe** (wanda aka taƙaita zuwa haruffa 500) ga umarnin
yin bayani na asali, yana karkata bayanin zuwa ainihin abin da mai amfani ya tambaya
(tsarin codex-vision-proxy) kuma yana neman samfurin gane hoto ya kwafe rubutun da ake
gani. Idan an kashe wannan zaɓin — ko babu rubutun mai amfani — ana amfani da umarnin asali ba tare da canji ba.

Buƙatar da ta dace da OpenAI ta madaukin komawa kai na yin bayani (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe tana neman `image_url.detail: "high"` —
ba tare da wani sharadi ba, ga kowane mai kira/mai samarwa, ba tare da dogaro da wata alamar abokin ciniki ba.
Ɗaukar samfuri mai ƙarancin daki-daki yana rage daidaiton OCR a wannan aikin
kwafe rubutu da umarnin ke nema, don haka kiran yin bayanin da kansa koyaushe yana neman babban
daki-daki ba tare da la’akari da matakin daki-dakin da ainihin buƙatar da ta shigo ta yi amfani da shi ba. Wannan
yana shafar jikin buƙatar yin bayani ta cikin gida kawai; ba ya canza yadda
OmniRoute yake tura `image_url.detail` na mai kira a babban buƙatar —
ana aiwatar da wannan ƙimar asali dabam, kuma ga abokan cinikin OpenCode da aka gano kawai, a cikin
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Reshen
tsarin aika bayanai na Anthropic na madaukin komawa kai na yin bayani ba shi da filin `detail`
kuma babu ɗaya daga cikin ƙimomin asalin biyu da ke shafarsa.

#### Iyaka ga fitarwar bayani (`modalityBridgeVisionMaxChars`)

| Maɓalli                        | Na asali | Zango            |
| ------------------------------ | -------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ko 100–50000 |

`0` (na asali) yana nufin **babu iyaka** — bayanin da
`callVisionModel()` ya dawo da shi ana miƙa shi ba tare da canji ba, yana kiyaye halayyar
da ake da ita. Duk wata ƙima a zangon 100–50000 tana taƙaita bayanin tare da
ƙarin `…` a ƙarshensa kafin a mayar da shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Ƙara wannan don ayyukan OCR masu buƙatar cikakken daki-daki inda samfurin da zai karɓa daga baya yake buƙatar
cikakken rubutun da aka kwafe; rage shi don iyakance amfani da token a samfurorin gane hoto masu yawan magana.
Filin allon sa ido yana cikin ɓangaren Na Ci Gaba na shafin Gane Hoto
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana ɗaga kowace
ƙima tsakanin 1 da 99 zuwa mafi ƙarancin 100 yayin barin `0` da aka sa a fili
ba tare da canji ba — `0` ingantacciyar ƙimar Zod ce da kanta
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
ƙimar asali ta "ba a saita ba" ba.

#### Ma’ajiyar bayanin wucin gadi (`modalityBridge/bridgeCache.ts`)

Ma’ajiyar LRU + TTL a cikin ƙwaƙwalwa don fitarwar bayani, wadda ake rabawa a duk tsarin aiki.
Maɓalli = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin da ke sanya tsawo a gaba (babu karo a iyakokin filaye). Ɓangaren samfurin shi ne
samfurin gadar da aka **saita**, ba samfurin da ya amsa a zahiri ba —
`callVisionModel` na iya komawa ga wani samfurin a cikin gida, kuma yin maɓalli ga kowace ƙoƙari zai
rarraba ma’ajiyar. Ba a taɓa adana bayanan da suka gaza ba. Saituna:

| Maɓalli                         | Na asali | Zango   |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Daidaita hotunan nesa (bayanin self-loop/ɗauko base64)

Lokacin da gada ta ɗauko hoton **nesa** da kanta — kiran Anthropic describe
zuwa kanta da juyawar base64 ta claude-wire-format
(`ensureBase64ImagesForClaudeWire`), dukansu ta
`fetchRemoteImageAsDataUri()` a `visionBridgeHelpers.ts` — ana wuce URI na bayanan da aka samu
ta `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a saka shi cikin buƙatar samfurin
fahimtar hotuna. Ana rage hotunan da suka yi girma zuwa **2048px a gefe mafi tsawo** (daidai
da iyakar rage girman da OpenAI/Anthropic suka riga suke amfani da ita a ɓangaren sabar), wanda ke rage
bait ɗin lodawa/jinkiri ba tare da canza abin da samfurin fahimtar hotuna yake gani ba. Rage girman
yana amfani da `sharp`, wanda ake loda ta dynamic import: a dandamalin da fayil ɗinsa na binary
na asali ya kasa loduwa, `normalizeDataUri()` **ba ya taɓa jefa kuskure** — yana komawa
ga wuce bait na asali kai tsaye, don haka hanyar describe/juyawar base64
kullum tana ci gaba da aiki. Bait da ba na hoto ba (ɗauko bayanan da bai dawo da
hoton da za a iya fassara ba) su ma ana wuce su ba tare da an taɓa su ba. Wannan daidaitawar
ta keɓanta ga hotunan da gada ke ɗaukowa domin kiran kanta — ba a taɓa
amfani da ita kan ainihin kunshin bayanan mai kira da ake wucewa kai tsaye ba, daidai da
ƙa'idar sauya bayanai sai da amincewa kawai (Ƙa'ida Mai Tsauri #20).

#### Tsarin saituna + ƙaura

Ana tantance sababbin maɓallan `modalityBridge*` da Zod a `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, rukunin uku na `modalityBridgeCache*`, da
rukunin `modalityBridgeAudio*` da Gadar Sauti ke amfani da shi. Ƙaura ta
`141_modality_bridge_settings.sql` tana kwafe ƙimomin tsoffin
`visionBridge*` da ke akwai zuwa sababbin maɓallan da suka dace (maimaita ta ba ya canza sakamako, kuma ba ta taɓa maye gurbin
ƙimar `modalityBridge*` da mai gudanarwa ya saita ba); ana ci gaba da karɓar tsoffin maɓallan a matsayin
madadin karantawa na zagayen fitarwa guda ɗaya.

#### Kanun nuna bayani + ƙididdiga

Amsoshin da aka sauya ta describe suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(wanda `buildModalityBridgeHeader()` a `modalityBridge/bridgeStats.ts` ke ginawa,
kuma `withModalityBridgeHeader()` a `src/sse/handlers/chatHelpers.ts` ke liƙawa).
Buƙatun da aka sauya musu hanya **ba sa samun** kanun — ba a taɓa kunshin bayanan ba kuma
sauya samfurin ya riga ya bayyana a filin `model` na jikin amsar.

`GET /api/modality-bridge/stats` (tabbatar da izinin gudanarwa, mataki ɗaya da
`GET /api/settings`) yana dawo da ma'aunan kowace nau'in bayanai da ke cikin ƙwaƙwalwa
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` na `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk yunƙuri ba, a matsayin
mai rabonsa; aikin da ba a auna lokacinsa ba ba ya ƙirƙirar samfurin
mili-daƙiƙa sifili. `bridged` ya ci gaba da zama madadin suna mai dacewa da tsarin baya na
juyawar da suka yi nasara; yunƙurin da ya gaza ba ya ƙara shi.
An tsara ma'aunan su koma sifili idan an sake kunna tsarin
(sa-ido, ba lissafin kuɗi ba).

#### Saitin dashboard

Shafin dashboard da aka keɓe shi ne
`/dashboard/settings/modality-bridge`. Shafukansa na `Vision`, `Audio`,
da `Video` da ake iya buɗewa ta URL suna kiyaye sigogin tambaya yayin sauya ƙimar `tab`.
Shafin Hoto yana samar da kunnawa, yanayi, zaɓin samfurin (har da zaɓin atomatik
na asali), umarnin da ya dace da aiki, saitunan ci-gaba na lokacin jira/iyakar hoto/tsawon bayani/ma'ajiyar wucin gadi,
ma'aunan lokacin aiki,
da buƙatar gwaji mai kariya. Shafin Sauti ma yana aiki: yana samar da
kunnawa, mai zaɓar samfurin STT kawai tare da zaɓin Atomatik, iyakokin lokacin jira/tsawon guntun sauti, ma'aunan
sauti, da gwajin misali na `input_audio`. Shafin Bidiyo yana aiki: yana ba da rahoton
halin FFmpeg/ffprobe a lokacin aiki — ɗaya daga cikin fayyace halaye huɗu na UI (`unknown` yayin
da binciken ke gudana ko ya kasa kammalawa, `restricted` a kan mai masaukin
dashboard da ba na loopback ba inda ake tsallake binciken a ɓangaren abokin ciniki, `unavailable` bayan an bincika
kuma an tabbatar babu su, ko `available` tare da sigogin FFmpeg/ffprobe) — yana adana
kunna/iyakar samfurin/firam/bidiyo/lokacin jira, yana tace mai zaɓar samfurin ya nuna samfurin da ke iya fahimtar hotuna
kawai, kuma yana samar da ma'aunan bidiyo.

Tsohon katin Gadar Hoto da ke ƙarƙashin saitunan AI yanzu hanyar haɗi ce ta dacewa zuwa
sabon shafin; ba ya ƙara riƙe kwafin fom na biyu. Masu Samar da Kafofin Watsa Labarai kuma
yana haɗa hanyoyin aikin Hoto-zuwa-Rubutu da Magana-zuwa-Rubutu zuwa shafukan Gadar
Nau'ikan Bayanai da suka dace ba tare da cire filin gwajin Magana-zuwa-Rubutu da ke akwai ba.

**Tsallake izinin shigar self-loop:** idan kiran describe ya bi ta
self-loop na `/v1` na OmniRoute da kansa (samfurin mai samarwa da ba na daidaitaccen tsari ba), ƙaramar buƙatar tana aika
`x-omniroute-admission-bypass: internal` kuma ana tabbatar da ita da shaidar izinin
self-loop da aka tantance — alamar `sk_omniroute` ta gida a yanayin gida, ko
maɓallin muhalli na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` da mai gudanarwa ya saita (#1350) domin
girkawar `REQUIRE_API_KEY=true` su ci gaba da iya gudanar da kiran describe. Ana amincewa da tsallakewar
ne kawai ga waɗannan takamaiman shaidun izini, don haka abokan ciniki na waje ba za su iya amfani da
kanun don tsallake izinin shiga ba.

Tsoffin ƙimomin asali suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin
ƙimomin asali na yanayi/sanayya da aiki/ma'ajiyar wucin gadi da mai tantance saituna suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Tsarin kariyar yana samar da
zaɓin constructor na `deps` domin gwaje-gwaje su iya saka aiwatarwar bogi ta `getSettings` da
`callVisionModel`.

### Gadar Sauti (`audioBridge.ts`) — Gadar Nau'ikan Bayanai PR-3

Tana tare buƙatun hira masu ɗauke da sauti kafin su isa wurin da ba a san
yana karɓar shigarwar sauti ba. Ba ta taɓa sauya hanyar buƙatar hira: ana
rubuta sassan sauti ta hanyar endpoint mai sassa da dama da ya dace da OpenAI wanda ke akwai, sannan
samfurin hirar da aka zaɓa ya ci gaba da rubutun da aka fitar daga sautin.

Gudana:

1. Tantance `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanan
   metadata na rajistar mai ba da sabis da aka bayyana kai tsaye su ne ke da
   fifiko, sai tsayayyun metadata na samfurin, sannan `modalities_input` da aka
   daidaita. Jerin shigarwa da aka bayyana wanda ba shi da `audio` yana nufin
   `false`; idan babu wata shaida ta iyawa, ƙimar tana kasancewa `null`. Dukansu
   `false` da `null` suna kunna gada mai taka-tsantsan, yayin da `true` yake tsallake ta.
2. Tantance saitunan `modalityBridgeAudio*` kuma cire sassan sauti na matakin sama
   da za a iya sauyawa daga kowane saƙo ta hanyar mai gano
   `detectMediaParts()` na bai ɗaya. Tsare-tsaren bayanan musanya da ake goyon
   baya su ne OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano sautin da ke cikin wasu sassa domin
   karkatar da buƙata, amma hanyar sauya sassan ba ta cire shi. Ana iyakance
   aikin da `modalityBridgeAudioMaxClips`; sassan da suka biyo baya ba sa canzawa.
3. Yi amfani da `provider/model` da aka saita, ko bar `selectAudioBridgeModel()`
   ya bi `AUDIO_TRANSCRIPTION_PROVIDERS` bisa tsayayyen tsarin kundin kuma ya
   zaɓi samfurin farko da ke da ingantacciyar shaidar shiga ta mai ba da sabis
   da yake aiki.
4. `callAudioTranscription()` yana sauya sautin base64/data-URI zuwa `file` na
   multipart, ko kuma ya sauke `audio_url` na nesa ta hanyar kariyar fita zuwa
   adiresoshin jama'a kawai tare da ɗaure DNS da iyakar 25 MB. Sannan yana aika
   fayil ɗin da samfurin da aka zaɓa ta POST zuwa madaukin-kai na cikin gida
   `/v1/audio/transcriptions`, tare da tantancewa ta
   `resolveSelfLoopBearer()`. Hanyar rubuta sauti da ake da ita tana gudanar da
   binciken shaidar shiga na yau da kullum, kula da lokacin dakatawa/iyakar
   yawan buƙatu, da tura aiki zuwa mai ba da sabis.
5. Kiran da ya yi nasara yana maye gurbin sashensa da `[Audio N]: <transcript>`.
   Ana gudanar da kiraye-kirayen da `Promise.allSettled`: gazawar kira guda tana
   barin sashensa na sauti na asali yadda yake (yarjejeniyar #4012). Idan duk
   kiraye-kirayen sun gaza kuma an tabbatar cewa samfurin da ake nufi yana da
   `supportsAudio === false`, sassan suna zama
   `[Audio N]: (unavailable — no STT provider connected)` (yarjejeniyar #8430).
   Ga samfurin da ba a san iyawarsa ba (`null`), sakamakon da duk kiraye-kirayen
   suka gaza ba ya canzawa. Samfurin da aka tabbatar yana karɓar rubutu kawai
   kuma ba shi da shaidar shiga ta STT da za a iya amfani da ita yana karɓar
   wannan takamaiman rubutun madadi ba tare da yin kiran hanyar sadarwa ba.

Rubutun sautin da aka samu cikin nasara yana amfani da ma'ajiyar wucin gadi ta
LRU/TTL ta Modality Bridge da ake rabawa a faɗin tsarin aiki. Maɓallin yana haɗa
manunin sautin, tsayayyar alamar aiki ta `audio-transcription`, da samfurin STT
da aka zaɓa; ba a taɓa adana gazawa a ma'ajiyar wucin gadi ba. Ƙoƙarin sarrafa
sauti yana sabunta ma'aunan bai ɗaya na `bridged`, `cacheHits`, `failures`, da
`lastUsedAt`.
Amsoshin da aka sauya suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; buƙatun da
ba a canza ba ba sa samun sashen Audio Bridge.

Ana adana saitunan lokacin aiki a DB kuma ana tabbatar da ingancinsu da Zod:

| Maɓalli                       | Na asali | Iyaka                    |
| ----------------------------- | -------- | ------------------------ |
| `modalityBridgeAudioEnabled`  | `true`   | —                        |
| `modalityBridgeAudioModel`    | `""`     | Na atomatik ko ID na STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000              |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                     |

Har yanzu `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries` ne ke sarrafa
ma'ajiyar wucin gadi ta bai ɗaya.

### Gadar Bidiyo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tana tare sassan bidiyo na matakin sama a cikin `messages` na Chat Completions
da `input` na Responses API kafin a kira samfurin da ba a san yana da goyon
bayan bidiyo na asali ba.
Tsare-tsaren da ake goyon baya su ne `input_video`, `video_url`, `video_source`,
URLs na HTTPS, da URIs na bayanai na `data:video/*;base64,...`. Ba a ɗaukar
sunayen fayiloli kawai da ke cikin rubutu a matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ne ke kula da zagayawa cikin
buƙata, duba iyawa/manufa, tattarawa ga kowace buƙata, da bayanan amsa.
Aikin kowane bidiyo — samo bayanai, ma'ajiyar wucin gadi ta cikakken sakamako,
bayyana jerin firam (wanda ke haɗa duk wani rubutun sauti da mai kira ya
bayyana), da ma'aunai/soke aiki/tsaftacewa ga kowane ƙoƙari — yana ɓoye a bayan
`processVideoPart` a cikin `videoBridgePipeline.ts`, wanda ake kira sau ɗaya ga
kowane sashen bidiyo a cikin madaukin `preCall`.
Wannan ɓangaren kuma yana ayyana takamaiman iyakokin tashoshi
`VideoMediaBrokerPort` (samo bytes da cire firam ɗin da aka zaɓa a matsayin
samfuri), `VideoAudioTranscriptionPort` (haɗa rubutun sauti da mai kira ya bayyana
da rubutun bayanin firam ɗin da aka zaɓa), da `VideoDrilldownPort` (iyakar adana
cikakkun bayanan firam; ba a haɗa ta da `processVideoPart` ba tukuna — hanyar
`/api/modality-bridge/video/drilldown` mai zaman kanta ce kawai take rubuta
bayanan bincike mai zurfi a halin yanzu).

Hanyar buƙata ta jama'a ta `/v1` ba ta taɓa shigo da ko kiran wani ƙaramin tsarin
aiki ba. Ana sauke bidiyoyin nesa da iyakar 50 MiB; bidiyoyin base64 da aka saka
kai tsaye suna da iyakar taka-tsantsan ta 36 MiB ga kowane bidiyo bayan warware
lambar domin kunshin samfurin/saƙonni/tsarin gabatarwa ya kasance cikin iyakar
karɓar buƙatun JSON ta jama'a ta 50 MiB. Ana duba tsawon bayanan da aka saka kai
tsaye da ƙiyasin girman bayan warware lambar kafin ware ƙwaƙwalwa. Ana buƙatar
HTTPS a URL na farko na nesa da kowane juyar da hanya, ta amfani da kariyar fita
zuwa adiresoshin jama'a kawai da ake da ita tare da ɗaure DNS. Daga nan bytes
suna tsallaka ainihin iyakar dillalin cikin gida ta
`POST /api/modality-bridge/video/extract`. Wannan hanyar tana da duka
`LOCAL_ONLY` da `SPAWN_CAPABLE`, tana karɓar buƙatar trusted-loopback kawai
wadda aka tantance ga kowane tsarin aiki, kuma ba ta taɓa karɓar URL, hanyar
tsarin fayiloli, shirin da za a aiwatar, ko jerin hujjojin umarni ba. Jerin
matakan girman jikin buƙata na API da mai karanta jiki a hankali na mai sarrafawa
kowannensu yana tilasta iyakar shigarwar dillali ta 50 MiB da kansa. Jerin
gwanonsa mai iyaka yana gudanar da cire bayanai ɗaya a lokaci guda, yana ba da
damar ayyuka huɗu masu jiran aiki, kuma yana iyakance shigarwar da ke jira zuwa
100 MiB.

A cikin broker, `ffprobe` yana karanta fayil na gida mai zaman kansa; jerin
tsarukan da aka kayyade aka amince da su bai haɗa da tsarukan jerin kunnawa da
manifest ba. Ga kwantena na dangin MOV da aka amince da su, manazartan bayanan
MOV na waje suna ci gaba da kasancewa a kashe ta tsohuwa, kuma ƙayyadadden
umarnin ba ya kunna su. Dukansu `ffprobe` da `ffmpeg` suna amfani da jerin
ka'idojin sadarwa da aka amince da su na `file` kaɗai, zaren aiki guda ɗaya,
tsayayyun jerin muhawaran umarni, ba tare da shell ba, da shirye-shiryen aiwatarwa
da ake ganowa daga `PATH`. Ba a ɗaukar rafukan hoton bango da aka makala a matsayin
zaɓuɓɓukan da za a iya kunnawa. Duk rafukan da za a iya kunnawa dole ne su cika
iyakokin, kuma ana fifita rafin da aka ayyana a sarari a matsayin na tsohuwa kafin
zaɓin madadin mafi ƙarancin fihirisa wanda sakamakonsa tabbatacce ne. An iyakance
bidiyoyi zuwa daƙiƙa 600, pixels 8,192 a kowace fuska, da pixels 33,554,432 na
asali. FFmpeg yana ɗaukar samfuran firam na JPEG 1–16 daga wuraren tsakiya, yana
rage dogon gefen zuwa iyakar pixels 1,024 ba tare da faɗaɗa ƙananan abubuwan
shigarwa ba, kuma ba ya taɓa karɓar URL. Tsarin ɗaukar samfura na tsohuwa shi ne
`uniform`. Manufofin zaɓi na `scene_aware` da na gwaji na `segment_aware` suna yin
ƙarin zagaye guda ɗaya na FFmpeg mai ƙayyadaddun saituna a kan rafin gida da aka
riga aka tantance, suna zaɓar alamomin lokacin sauyin fage na `showinfo` masu
iyaka, sannan su koma ga wuraren tsakiya iri ɗaya masu tazara daidai ta hanyar
da sakamakonta tabbatacce ne idan na'urar ganowa ta gaza, lokaci ya ƙare, fitarwa
ta lalace, ko babu wani zaɓi a cikin rukunin zaɓuɓɓuka. Yanayin da ke la'akari da
sassa yana rarraba samfuran wuraren tsakiya gwargwadon tsawon zangon fagagen da
aka tantance; an yi bayani dalla-dalla a ƙasa game da shaidar la'akari da sassa
da halayen komawa ga madadin. Ana aiwatar da iyakar firam 16
bayan zaɓi a kowace manufa. Idan buƙatar da ke la'akari da fage tana da damar
firam guda ɗaya kawai, tana amfani da wurin tsakiya mai tazara daidai na cikakken
bidiyon ko zangon mayar da hankali da ake amfani da shi, kuma tana bayar da
`policyEffective: uniform`: firam guda ɗaya da aka zaɓa daga fage ba zai iya
kiyaye ƙarshen lokaci biyu ba. Mai kira zai iya samar da zangon mayar da hankali
mai iyaka (`start`/`end` a daƙiƙa) idan yana so; ana daidaita iyakokin cikin
tsawon lokacin kafofin, ana ƙin zangunan da aka juya farkonsu da ƙarshensu ko
waɗanda ba su da ƙayyadaddun ƙimomi, kuma ana aiwatar da duk manufofin ɗaukar
samfura ne kawai a cikin daidaitaccen zangon. Ana haɗa zangon da aka samu a cikin
bayanan ƙarin bayani na ɗaukar samfura da kuma a farkon bayanin da ba a amince da
shi ba domin samfuran da ke matakan gaba su iya bambance wani yanki da aka mayar
da hankali a kai daga cikakken jerin lokaci.

Mayar da hankali ga ma'anar rubutun bayanin hoto wani saitin daban ne da ake
zaɓa a sarari. Yanayin nazari na tsohuwa na `full` yana kiyaye umarnin firam da
ake da shi kuma ba ya taɓa tura rubutun buƙata zuwa samfurin samar da bayanin
hoto. A yanayin `focused`, gada tana karanta sabon `text`/`input_text` marar komai
da mai amfani ya rubuta kawai daga wannan kwantenar Chat ko Responses ɗin, tana
daidaita shi zuwa NFC, tana dunkule haruffan sarrafawa da fararen sarari, kuma
tana iyakance shi zuwa wuraren lambar Unicode 500. Idan sakamakon babu komai,
tana komawa ga ainihin umarnin `full`. Ana tsara alama mai amfani a matsayin JSON
a cikin keɓaɓɓen tubalin mahallin mai amfani da ba a amince da shi ba, kuma tana
iya ba da fifiko ne kawai ga bayanan da za a iya lura da su; ba za ta iya soke
gargaɗin da aka ware na kada a bi umarnin da ake gani ko ji a cikin kafofin ba.
Mayar da hankali ta rubutu ba ya taɓa hango `start`/`end` ko sauya tsarin ɗaukar
samfuran lokaci.

#### Shaidar tsarin sassa ta FU-07

`segment_aware` yana amfani da zagayen nazari na farko guda ɗaya mai iyaka a kan
rafin bidiyo na gida da aka riga aka tantance. Tsayayyen jerin matatun yana fara
rage faɗi zuwa iyakar pixels 320, ya gano sauye-sauyen fage da zangunan da suka
daskare, sannan ya ɗauki samfurin firam 1 a kowace daƙiƙa don rashin kaifi,
matsakaicin haske, da bayanan sarari/lokaci. An iyakance zagayen
zuwa samfuran tsarin 600, zaren FFmpeg/matata guda ɗaya, jerin ka'idojin sadarwa
na `file` kaɗai da na kwantena da aka amince da su iri ɗaya, iyakar fitarwar
tsari ta 1 MiB, da iyakar daƙiƙa 30 cikin tsarin soke aiki/wa'adin ƙarshe na
haɗin gwiwa na broker. Ba ya taɓa karɓar umarni, matata, hanya, ko URL daga buƙata.

Ƙimomin tsarin shaida ce ta ɗaukar samfura mai tabbataccen sakamako, ba fahimtar
ma'anar bidiyo ba. Ba sa hango abubuwan da aka nuna, ayyuka, rubutun bayanin hoto,
magana, ko manufar mai amfani. Iyakokin fage da daskarewa suna samar da sassa;
yawan abin da daskarewa ta rufe, rashin kaifi, matakin haske, dalla-dallar sarari,
da sauyin lokaci suna tasiri ne kawai ga yadda ake rarraba damar firam 1–16 da
ake da ita. Ana iyakance sashen da ya daskare gaba ɗaya zuwa firam guda ɗaya,
yayin da sassan da ba su daskare ba suke fafatawa kan ragowar damar. Idan iyakoki
sun fi firam yawa, ana kiyaye ɗaukar samfura masu tazara daidai a jerin lokaci
domin sauye-sauyen fage masu sauri a farko kada su ɓoye dogon sashen ƙarshe. Ana
haɗe iyakokin fage da suke cikin tazarar daƙiƙa 1 ta daidaiton nazari daga iyakar
daskarewa.

Rashin matatu, shaidar da ta lalace ko babu komai a cikinta, kuskuren na'urar
ganowa, ko ƙarewar lokacin nazarin farko mai iyaka suna sa a ci gaba da aiki ta
komawa ga ainihin manufar wuraren tsakiya masu tazara daidai. Sokewar mai kira ko
wa'adin ƙarshe na broker ba sa barin a ci gaba da aiki: suna dakatar da ƙaramin
tsarin da ke gudana, suna hana fitar da firam daga baya, kuma ana cire tsarin
manyan fayiloli na wucin gadi mai zaman kansa a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana samar da sahihan kayan gwaji na
FFmpeg masu tabbataccen sakamako don auna raguwar kiran samar da bayanin hoto
bayan cire maimaitattu, rarraba damar firam ga wuraren da motsi ya yi yawa,
shaidar rashin kaifi/matakin haske/SI-TI, sauye-sauyen fage masu sauri tare da
dogon sashe na ƙarshe, da gano sauyin fage bisa kuskure sakamakon dusashewa a
hankali. Yana rubuta ainihin lokacin da nazarin farko ya ɗauka kuma, idan
`/usr/bin/time` yana samuwa, amfani da CPU na ƙananan tsare-tsare da mafi girman
RSS. Gwaje-gwajen ingancinsa ma'aunan tsarin ne kawai. Ingancin samfurin samar da
bayanin hoto na gaske yana ci gaba da kasancewa `HOLD` saboda wannan tsarin
gwajin ba shi da wurin haɗin sabis da aka ba da izinin amfani da shi ko mai
kimantawa mai daskararren tsari. Tanadin kuɗi ma yana ci gaba da kasancewa `HOLD`
sai dai idan `--caption-cost-per-call-usd` ya samar da ƙiyasin kuɗin kowane kira
mai kyau da aka bayyana a sarari; rubutun shirin ba ya taɓa ƙirƙirar ko wane
sakamako.

An iyakance kowane firam zuwa 4 MiB, dukan ɗanyen firam ɗin tare zuwa 23 MiB, sannan
amsar broker da aka juyar zuwa sigar aikawa zuwa 32 MiB. Ana cire kundin wucin gadi na sirri
a cikin `finally`. OmniRoute ba ya zuwa tare da FFmpeg kuma ba ya karɓar keɓaɓɓiyar
hanyar fayil ɗin aiwatarwa. Kafin samar da bayanan firam, gadar tana yin matakin
kawar da maimaitawar gani cikin taka-tsantsan: ana rage kowane JPEG zuwa ma'ajiyar
bayanan toka mai girman 16×16 kuma ana kwatanta shi da firam na ƙarshe da aka riƙe kawai.
Idan adadin firam ɗin da aka nema don samar da bayanai ya fi ɗaya,
aikin ciro firam yana samar da iyakantaccen rukunin 'yan takara da bai wuce ninki biyu na wannan adadi ba kuma bai taɓa wuce firam 16 ba.
Ana amfani da iyakar da aka nema ne kawai bayan kawar da maimaitawa, tare da kiyaye
ɗan takara na farko da na ƙarshe da aka zaɓa yayin rage adadi na ƙarshe idan adadin da aka tanada ya kai
biyu. Tsarin mai lambar siga na
`grayscale-16x16-mean-cells-v2` yana amfani da mafi girma tsakanin matsakaicin bambancin haske da
rabon ƙwayoyin ƙaramin hoton da bambancinsu bayan daidaitawa ya kai aƙalla 0.05. Iyakacin
gano maimaitawa ƙayyadadden ƙima ne na 0.04, wanda aka zaɓa domin samun sakamako mai sauƙin hasashe maimakon
bayar da shi a matsayin saitin lokacin aiki. Wannan ƙarin
alamar bambancin haske mai ƙarfi tana kiyaye ƙananan motsi da sauye-sauyen rubutun da ake gani waɗanda
kwatantawa bisa matsakaici kaɗai za ta iya ɓoyewa. Kurakuran mai kwatantawa ko mai warware bayanai ba sa hana ci gaba, kuma ana kiyaye
faɗin abin da aka ɗauka. Bayanai masu bayyana fitarwa suna bambanta 'yan takarar da aka ciro, firam ɗin
da aka yi amfani da su cikin nasara, da maimaitawar gani da aka zubar.

Wani ɓangaren bidiyo da aka yi wa alama a sarari na iya neman takardar tarin hotuna mai tamburan lokaci.
Gadar tana gina tsarin JPEG mai iyakar ginshiƙai 4 da firam 16. Ana saka
tambarin lokacin tushen kowace ƙwaya mai girman pixel 512 kai tsaye a cikin tsiri mai ƙarfi na bambancin haske a ƙasa, yayin da waɗannan tamburan lokaci
suke nan a cikin bayanan rubutu domin haɗawa da dubawa a matakai na gaba. Cikakken
JPEG yana ci gaba da kasancewa ƙarƙashin iyakar 32 MiB. Idan `sharp` ba zai iya warware ko haɗa tsarin hotunan ba,
gadar tana komawa ga firam ɗin JPEG ɗaya-ɗaya; dakatarwar abokin ciniki kuwa tana ci gaba da yaɗuwa
ta cikin aikin takardar hotunan.

An ware hujjar amincewa da ɗaga fasalin zuwa amfani da gangan daga ƙaramin gwajin aikin haɗawa
na kwaikwayo. `scripts/perf/video-bridge-contact-sheet-eval.ts` yana ayyana
tsarin gwajin A/B mai sigar tsarin bayanai don ainihin samfuran fahimtar hoto masu dacewa da OpenAI. Yana auna
token ɗin da mai samarwa ya bayar da rahoto a kansu, jimillar lokacin jira daga farko zuwa ƙarshe (har da haɗa takardar hotuna),
yawan kiran samfurin, da riƙe bayanan gaskiya kamar yadda fayil ɗin manifest ya ayyana. Ba a
rubuta ɗanyen amsoshin samfurin a cikin rahoton; ƙimomin hash na SHA-256 da ID na bayanan gaskiyar da suka dace ne kawai ake riƙewa.
Tsarin gwajin ba ya yin kiran hanyar sadarwa ko kiran samfurin da ake biya sai an ba da `--execute-real` kuma
an saita `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY`. Ba tare da
wannan ainihin gwajin da aka nema a sarari ba, hukuncinsa mai karantawa da na'ura yana nan a matsayin `HOLD`; ma'aunan
girman bayanan aikawa/yawan kira na kwaikwayo kaɗai ba hujjar amincewa da ɗaga fasalin zuwa amfani ba ne.

Masu kira na iya haɗa jerin `transcript.cues` na zaɓi da wani ɓangaren bidiyo
da ake tallafawa idan suna da rubutun da aka riga aka daidaita da lokaci. Dole kowane alamar rubutu ta ƙunshi `text`,
tazarar `start`/`end` mai iyakatattun ƙimomi a cikin tsawon lokacin da aka gano, da
`source` da aka amince da shi (`client`, `embedded`, ko `audio-bridge`); ƙimar tsoho ta `confidence` ita ce
`1` kuma dole ta kasance tsakanin `0` da `1`. Ana haɗe alamomin rubutu masu maimaituwa daidai.
OmniRoute ba ya fara mayar da magana zuwa rubutu daga waɗannan bayanai: ana
kwafe alamomin rubutu da aka tabbatar da ingancinsu zuwa sakamakon bayanin tare da tushe, matakin amincewa, da tazara, kuma
ana nuna su a matsayin abubuwan lura marasa aminci tare da bayanan firam. Ana ƙin rubutun da bai inganta ba,
wanda ya fita daga iyaka, ko wanda ba shi da bayanin asali maimakon haɗa shi cikin
jerin bayanan firam. Dukkan hanyoyin rubutun magana guda biyu da ke cikin jikin buƙata suna daidaita
bayanin asalin da aka bayar zuwa `client`, har da alamomin `embedded` ko `audio-bridge`
da aka yi wa kai ikirari. Adafta mallakin sabar kaɗai ne zai iya sanya waɗannan alamomin amintattu ta hanyar
ma'aunin `trustedSource` da ake samu a lamba kawai; filin JSON na buƙata ba zai iya isa
wannan ma'aunin ba. Rubutun magana yana ci gaba da kasancewa bayanai marasa aminci da aka samo daga kafofin watsa labarai,
ba tare da la'akari da asalinsa ba, kuma ba zai taɓa ƙayyade izinin shiga ba.

Mai kira mai ƙwarewa na iya samar da waƙar `audioTranscript` don wannan bidiyon;
ana ɗaukarta a matsayin rubutun da abokin ciniki ya bayar, ba hujjar cewa sabar ta mayar da magana zuwa rubutu ba.
Matakin haɗawa yana gudanar da abubuwan lura na gani da sauti a ƙarƙashin
wa'adin ƙarewa da siginar dakatarwa guda ɗaya, yana tsara su bisa tsarin lokaci ɗaya, yana haɗe
maimaitawa daidai, kuma yana bayar da sakamako na ɓangare idan gefe ɗaya kawai ya yi nasara.
`audioTranscript` mara inganci yana komawa ga wannan sakamako na ɓangare — ana kiyaye
bayanin gani kuma reshen sauti yana rubuta lambar gazawa da aka tsabtace —
maimakon ya sa dukan bidiyon ya gaza. Ana kiyaye samuwar kowane reshe, alamar sakamako na ɓangare,
da lambobin gazawa da aka tsabtace a cikin sakamakon bayanin, a cikin
bayanan matakan kariya (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin bayanan ma'ajiyar sakamako, da kuma a cikin
ƙididdigan haɗawa na gadar. Hanyar tsoho ta Video Bridge ba ta kiran aikin mayar da magana zuwa rubutu
ko sauke kwafin kafofin watsa labarai na biyu; ba tare da wannan waƙar da aka bayar a sarari ba, tana ci gaba da kasancewa
ta bidiyo kawai.

**Riƙe rubutaccen zance (#12150 P1).** Wannan yana aiki kai tsaye a duk lokacin da
Video Bridge (wanda shi kansa sai an zaɓi amfani da shi) ya fitar da wani yanki na rubutaccen zance — babu wani keɓantaccen
zaɓin riƙewa. Lokacin da buƙata ta fitar da kowane yanki na rubutaccen zance (ko `transcript` da mai kira ya ayyana
ko `audioTranscript` da aka haɗa), tsarin kariya yana yi mata alamar
`videoBridgeObserved` kuma yana samar da kwafin bayanin bidiyon da aka ɓoye bayanansa —
fitarwa iri ɗaya wadda aka maye gurbin rubutun kowane yanki da
`[redacted-video-transcript]`, ta hanyar sauya filin yankin da aka tsara
kafin a haɗa zaren rubutun (ba ta hanyar nazarin rubutun da aka riga aka shimfiɗa ba, don haka babu wani abun cikin yanki
— na cutarwa ko na yau da kullum, har da rubutun da ke ɗauke da `]` kamar
`[inaudible]`/`[music]` — da zai rage). Jikin buƙatar da aka adana a kundin kiran
yana maye gurbin kowane ɓangaren rubutu da aka samo daga bidiyo da wannan kwafin da aka ɓoye bayanansa, ta hanyar daidaita su bisa
daidaiton abin ciki; ana sake karanta madogarar `fullText` daga bayanan tsarin kariya
da aka kammala kafin kira, don haka daidaitawar tana ci gaba da yin nasara bayan matakan kariya na gaba a jerin
(masu ɓoye PII da bayanan shaidar shiga, masu fifiko 10/95) sun sake rubuta bayanin a wurinsa da
kuma bayan shigar da umarnin tsarin/mika aiki/ƙwaƙwalwa ya sake fasalin jerin saƙonnin. Jikin
da aka aika zuwa samfurin a sama ba ya canzawa. Haka kuma, buƙatar da aka lura da ita ba ta cika
wani Memory na dindindin ba (ana tsallake ciro bayanai daga buƙata da kuma amsa),
don haka amsar samfurin da kansa ba za ta iya maimaita rubutaccen zance cikin Memory ba.

**Filayen bidiyo na asali (#12430).** Idan an kunna bridge kuma ba a san ko akwai tallafin bidiyo na asali ba ko kuma babu shi, filayen `transcript`/`audioTranscript` da aka ayyana su ma suna kunna `videoBridgeObserved`, ko da bayan gazawar samar da bayani ko kai iyakar `maxVideos`. `null` da zaren rubutu marasa komai suna ƙidayuwa; filayen da ba su nan da bayanan metadata da ba na bidiyo ba ba sa ƙidayuwa. Kwafin da aka riƙe suna ɓoye waɗannan filayen ko su bar buƙatar gaba ɗaya, kuma ana tsallake caches/Memory.

A waɗannan hanyoyin madadin, ingantattun yankunan zancen mai kira suna zama ɓangarorin `text`/`input_text`
da ake tallafawa maimakon filayen mai ba da sabis da ba na ƙa'ida ba. Duk waƙoƙin biyu da aka kawo cikin buƙata
suna ci gaba da zama abubuwan lura na `client` da ba a amince da su ba, tare da gargaɗi bayyananne cewa ba a
bayyana bidiyon ba kuma ba a tabbatar da alamomin lokaci ta hanyar kwatanta su da kafofin ba. Iyakokin da ake da su na
yankuna 256/64-KiB gaba ɗaya da na kowane yanki suna aiki a kan waƙoƙin biyu tare;
dole alamomin lokaci su kasance cikin iyakar daƙiƙa 600 ta broker da kowane zangon mayar da hankali
da aka bayar. Ana watsar da waƙoƙin da ba su inganta ba, ba a tura su a matsayin rubutu marar ƙa'ida ba; ana iya amfani da
ɗan'uwansu mai inganci sai dai idan sun wuce iyakarsu ta haɗin gwiwa. Filayen null/marasa komai
ba sa ƙara rubutu. Wannan hanyar madadin ba ta ƙara ɗauko kafofi ko samar da rubutaccen zance ba.
Ana cire filayen faɗaɗa rubutaccen zance daga mai ɗaukar bidiyo na hanyar madadin da abubuwansa na
`video_url`/`source`. Jerin abubuwan da aka yarda da su a tsarin sadarwar OpenAI yana nan mai tsauri; masu ɗaukar bidiyo
waɗanda ba a san tallafinsu na asali ba suna ci gaba da samuwa, kuma wuraren da aka san rubutu kawai suke karɓa suna riƙe alamomi masu aminci.
Kwafin ɓoye bayanai da aka tsara suna kare rubutaccen zancen da aka ƙara, yayin da
buƙatar asali mallakin mai kira take ci gaba da kasancewa ba tare da canji ba. Wuraren da ake tallafa wa bidiyonsu na asali da
bridges da aka kashe suna riƙe halinsu na tsallakewa da suke da shi.

Ƙarin kwafin da aka riƙe suna amfani da siginar buƙatar da aka lura da ita iri ɗaya. Hoton buƙatar client na asali
kafin tsarin kariya, buƙatar da ke jiran aiki a ƙwaƙwalwa, da kundin buƙatar da aka ƙi da wuri
suna maye gurbin filayen rubutaccen zance a ɓangarorin bidiyo bisa tsarinsu;
ana ɓoye bayanai a umarnin zaren rubutu da matakan pipeline da mika mahalli suka samar
a wurin karɓar jikin buƙatar da za a adana. Alamar `video_content_removed` da aka adana
tana sa ci gaba ta `previous_response_id` ya ƙi aiki cikin aminci maimakon sake gina
rubutun da aka watsar da gangan. Idan buƙatar da aka lura da ita ta rasa
kwafinta na ɓoye bayanai na kowane ɓangare kafin rubuta kundin, ko ma ɗaya daga cikin kwafin bidiyo da dama
ya kasa daidaituwa bayan sauye-sauyen buƙata na baya, ana barin jikin buƙatar da za a riƙe
gaba ɗaya maimakon riƙe rubutaccen zance da aka ɓoye wasu bayanansa kawai.

Ga buƙatar da aka lura da ita, amsar samfurin na iya nakalto kowane ɓangare na
rubutaccen zance ba tare da iyakar yanki da aka tsara ba. Saboda haka, ana maye gurbin `responseBody`
ɗinta da aka adana a kundin kira da alamar barin bayanai; ba a riƙe cikakken
samfurin bayanan pipeline (wanda zai iya haɗawa da jikin bayanan daga sama/client da guntayen kwarara)
ba. Caches na ma'ana, idempotency, da sake kunna tunani suna tsallake
karatu da rubutu ga wannan buƙatar. Buƙatar mai ba da sabis da amsar da client yake gani
suna nan ba tare da canji ba. Ana kwashe bytes na farkon keepalive daga ma'ajiyar wucin gadi
idan an bar cikakken samfurin bayanan. Gargaɗin Kiro game da EventStream mai gurɓataccen tsari
yana bayar da adadin bytes na bayanan kawai, ba abin da suke ƙunshe da shi ba ko kuskuren asali
na mai nazarin JSON.
Wannan ba ya ikirarin cewa an binciki kowane sakon gano matsala na provider/plugin da ba ya da alaƙa;
ana bin diddigin babban binciken wuraren riƙe bayanai a #11658.

Zagayowar rayuwar `/api/modality-bridge/video/drilldown` na cikin gida wani tushe ne na cache
dabam, wanda ake tantancewa ta loopback/token. Kowane aiki kuma yana buƙatar
ID na principal na daidaitaccen tsari wanda ba ya bayyana ma'anarsa. Kafin a kunna mai kira na muhallin samarwa, dole ne ya
samo wannan ID daga tenant da aka tantance kuma kada ya taɓa tura
ƙimar da client ya zaɓa. Maɓallan cache suna ɗaure wannan principal da daidaitattun ID na zaman aiki da
na madogarar bidiyo, suna adana maɓallansu da aka samo ta SHA-256 kawai, kuma suna iyakance karatu
da gogewa ga principal ɗin nan ɗaya. Cache yana adana iyakar firam ɗin JPEG 16 da aka samo
ga kowane shigarwa, yana sa su ƙare bayan mintuna goma, kuma yana tallafa wa karatun
`start`/`end` mai iyaka ko goge zaman aiki kai tsaye.

An iyakance kowane principal ga shigarwa 16 da 64 MiB na bayanan JPEG masu daidaitaccen tsari. Waɗannan
iyakoki suna zaman kansu daga iyakar duniya ta shigarwa 64/256 MiB: matsin cikar rabon principal
yana fitar da shigarwar wannan principal da aka fi daɗewa ba a yi amfani da su ba kawai kafin a yi la'akari da fitarwar
LRU ta duniya. Ana share shigarwar da suka ƙare daga lissafin principal da
na duniya yayin ayyukan cache, yayin da sokewa da gazawar tantance inganci
ba sa tabbatar da maye gurbi da bai kammala ba.

Ma'ajiyar cache tana ƙin Base64 da ba na daidaitaccen tsari ba, padding mai yawa, kafofin bayanai da ba JPEG ba, JPEG masu kuskuren tsari ko
waɗanda aka yanke, da JPEG da ke haifar da gargaɗi yayin warware bayanan cikakken hoto ta `sharp`
a cikin iyakar da aka saita. Tana sake sauya kowanne hoton da aka karɓa zuwa JPEG mai daidaitaccen tsari, tana samo faɗi da tsawo
daga bytes da aka warware maimakon amincewa da filayen mai kira, sannan tana watsar da duk wasu
bytes na polyglot da ke biye a ƙarshe maimakon adana su. Buffer ɗin da aka matsa mai daidaitaccen tsari da ke cikin iyaka ne kawai
ake lissafawa a cikin iyakokin amfani guda biyu. Iyakar JSON da ake aikawa ta haɗa da ƙarin girman Base64 don iyakar 32 MiB
ta shigarwar da aka warware. Kowane
sakamakon da aka samar kuma aka adana yana rubuta ingantaccen tsarinsa/ƙudurinsa na JPEG, manufar ɗaukar samfura,
sigar samarwa, lokacin ƙirƙira, hash ɗin abun ciki da uwar garke ta lissafa, da ambaton tushen
da aka yi wa hash tare da hash ɗin abun cikin tushen daga amintaccen mai kira. Ana duba soke aiki
tsakanin matakan warware bayanai/hash masu gudana ba tare da jiran juna ba kafin aiwatar da ajiyar cache a matsayin aiki guda marar rabuwa.

Wannan kashi bai riga ya haɗa mai samarwa na yanayin amfani na ainihi da hanyar ba, kuma ba ya
samar da zaɓin nau'o'in ƙuduri daban-daban. Saboda haka, hanyar buƙatar Video Bridge mai aiki
a ɓoye ba ta ƙara wani aiki, yayin da samar da asalin mai amfani da ke daure da tenant da
cikakken zagayen rayuwar ƙuduri daban-daban na FU-08 suka kasance ayyukan da za a yi nan gaba a sarari, maimakon
a rubuta su a matsayin halayen da aka kammala.

Ana yi wa firam-firam bayanin rubutu a jere ta amfani da samfurin Video da aka saita. Idan
zaɓin maye gurbin Video babu komai a ciki, yana gādon saitin Vision; idan duka biyun babu komai a ciki, mai zaɓar hanya ta atomatik na Vision
yana zaɓar samfurin da ke iya sarrafa bayanan gani wanda za a yi amfani da shi. Bayanan rubutun da suka yi nasara
suna maye gurbin ɓangaren asali da tsayayyen kari na farko na `[Video description:` wanda kuma
ke nuna rubutun a matsayin abin lura da aka samo daga kafofin bayanai marasa amintuwa, kuma yana gaya wa samfuran da ke gaba
kada su bi umarnin da aka samu a cikin waɗannan kafofin bayanai. Maɓallan cache na bayanin firam
sun haɗa da bytes na JPEG, umarnin shigarwa, tambarin lokaci, da samfurin da aka yi amfani da shi; bayanan rubutun da suka yi nasara kawai
ake adanawa a cache. Abubuwan cache suna riƙe samfurin da ya samar da sakamako cikin nasara a zahiri,
ciki har da samfurin madadin; gadar tana bayar da rahoton `mixed` idan samfura daban-daban
suka samar da firam-firam daban-daban. Idan an samu abin da ake nema a cache, ana sake amfani da wannan shaidar mai samarwa
maimakon sake yi masa lakabi da tsarin zaɓar hanyar da aka nema. Cache na sakamakon bidiyo gaba ɗaya
yana amfani da maɓalli bisa kowace shigarwa da ke canza sakamakon — umarnin shigarwa, samfurin da aka yi amfani da shi,
manufar ɗaukar samfura, adadin firam, yanayin nazarin ma'ana, sawun SHA-256
na alamar mayar da hankali da aka daidaita, zangon mayar da hankali, `transcript`,
`audioTranscript`, da tutar takardar hotunan taƙaitawa — don haka sauya kowane ɗayan waɗannan
abubuwa yana nufin ba za a samu daidaitaccen abu a cache ba, kuma ba za a taɓa sake amfani da tsohon sakamako ba. Sigar manufar cire maimaituwar
hotuna, matakin iyaka, da adadin firam ɗin da za a bincika wanda aka sa wa iyaka su ma suna bayyana a sarari a cikin
maɓallin cache na sakamako da bayanansa; saboda haka sauyin manufa ba zai iya sake amfani da tsohon
bayanin bidiyo gaba ɗaya ba. Bayanan cache na sakamako na v4 suna riƙe yanayin da
sawun, ba ainihin aikin mai amfani ba. Bayanan matakan kariya suna bayar da rahoton duka
yanayin nazarin da aka nema da wanda aka yi amfani da shi; idan an nemi yanayin `focused` ba tare da
rubutun mai amfani da za a iya amfani da shi ba, ana bayar da rahoton cewa a zahiri an yi amfani da `full`.

Matakin kariya yana ciro kowane ɓangaren bidiyo da ake tallafawa amma ba ya bayyana fiye da
`modalityBridgeVideoMaxVideos`. Ga wurin da aka tabbatar yana da
`supportsVideo === false`, bidiyoyin da suka gaza da waɗanda suka wuce iyaka suna zama alamomin rubutu masu aminci a sarari
don kada wani bidiyo na asali ya rage. Idan ba a san ƙarfin wurin ba, waɗannan ɓangarorin
suna riƙe da abin ɗaukar bidiyonsu; duk wani rubutun jawabi na madadin yana bin sauyawar rubutu mai iyaka
da ke sama. Wuraren da ke da `supportsVideo === true` suna tsallake gadar.
Alamar dakatar da buƙatar abokin ciniki tana bazuwa ta saukewa, layin jiran broker,
ƙananan matakai, da kiran bayanin rubutu; dakatarwa tana tsayar da aiki tsakanin bidiyoyi kuma ba ta taɓa barin
kafofin bayanai na asali su wuce idan an samu gazawa ba.

Saitunan lokacin aiki suna dogara da DB kuma ana tabbatar da ingancinsu da Zod:

| Maɓalli                             | Na asali    | Iyakar ƙima / hali                                                                                                                     |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Na zaɓi a lokacin aiki, sai an kunna da son rai                                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana kiyaye bayanan rubutu na gama-gari; `focused` yana amfani da mahallin sabon saƙon mai amfani mai iyaka kuma marar amintuwa |
| `modalityBridgeVideoModel`          | `""`        | Gāji samfurin Vision Bridge                                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko `segment_aware` bisa gwargwado; idan mai gano yanayi ya gaza, ana komawa zuwa `uniform`                   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                         |

Tsofaffin ƙimomin lokacin ƙarewar jiran Video da aka adana waɗanda suka wuce daƙiƙa 120 ana rage su zuwa
wa'adin broker; ana ƙin sabbin rubutun saituna da suka wuce wannan iyaka.
`GET /api/modality-bridge/video/runtime` yana buƙatar tabbatarwar amintaccen tambarin cewa buƙatar ta fito daga loopback na gida
kafin tabbatar da shaida ko binciken lokacin aiki, sannan yana buƙatar tabbatar da shaidar
gudanarwa. Yana dawo da `available` kawai, sigogin FFmpeg/ffprobe da aka tsabtace, da ƙayyadadden
dalili idan yanayin aiki ba ya samuwa. Wurin ƙarshen ciro bayanai na ciki ba
API na loda bayanai na jama'a ba ne: cikar layin jira tana dawo da `503` tare da `Retry-After`, katsewar haɗin mai kira
tana dawo da `499`, kuma ƙayyadadden wa'adin broker yana dawo da `504`. Amsoshin da aka sauya suna ƙara
`video->text;model=<visionModel>;parts=<videos>` zuwa babban
kanun `x-omniroute-modality-bridge` ba tare da cire sassan Vision ko Audio ba.

### Mai Ɓoye PII (`piiMasker.ts`)

Yana gudana a matakai **biyu ɗin**.

- **`preCall`** yana kwafe payload, yana bi ta cikin `system`, `messages`, `input`, da
  `prompt` (har da abubuwan da suke zaren rubutu kawai), sannan yana amfani da `processPII()` (daga
  `@/shared/utils/inputSanitizer`) a kan filayen `content`/`text` na zaren rubutu. Idan
  `PII_REDACTION_ENABLED=true`, ana ɓoye PII da aka gano a cikin
  payload mai fita. Wannan ba ya dogara da `INPUT_SANITIZER_MODE` (wanda ke sarrafa
  manufar allurar umarni kawai). Idan an kashe ɓoyewa, kiran yana rubuta adadin abubuwan da aka gano
  ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin kwafi mai zurfi na amsar, yana gudanar da `sanitizePIIResponse()` tare da
  mai ɓoye bayanai mai tsarin Responses API (`maskResponsesOutput` — yana rufe
  `output_text` da `output[].content[].text`). Idan aka yi wani ɓoyewa,
  amsar da aka gyara tana maye gurbin ta asali.

Matakin kariyar ba ya taɓa toshewa; yana ƙara bayanai ne kawai (`meta.detections`,
`meta.redacted`) ko kuma ya sake rubutawa.

#### Zaɓi bisa nau'i, tsarin da aka keɓance da masu ƙidayar ganowa

**Allon sarrafawa → Saituna → Tsaro → Ɓoye PII** yana zaɓar _abin_ da za a ɓoye. Ba
ya kunna ɓoyewa: har yanzu wannan yana ƙarƙashin `PII_REDACTION_ENABLED` (buƙata) da
`PII_RESPONSE_SANITIZATION` (amsa + SSE), waɗanda dukansu a kashe suke bisa tsohon saiti.

- **Zaɓi bisa nau'i** — an jera id ɗin da aka gina a ciki a
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Rashin saiti yana nufin kowane
  nau'i (halin aiki kafin wannan saitin ya kasance). Tsarin `ssn_us` na injin
  buƙata yana daidaita da `ssn`. Samfura (Mafi ƙaranci, Na yau da kullum, Na kuɗi,
  Na Brazil, Na Amurka, Cikakke) suna cika akwatunan zaɓi a UI kawai.
- **Tsarin da aka keɓance** — har zuwa tsarukan regex ko wildcard guda 20 (`*` = har zuwa haruffa 64
  waɗanda ba fararen gurabe ba, `?` = ɗaya). Abubuwan da suka dace suna zama `[CUSTOM_REDACTED]`.
  Kowane tsari yana bi ta `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): haruffa 500 aƙalla ba, tutoci sun iyakantu
  ga `g i m s u`, dole ya iya haɗuwa, dole ya tsallake `safe-regex` (komawa baya
  mai haddasa matsala mai tsanani), kuma ba zai dace da zaren rubutu marar komai ko alamar maye gurbin bayanan da aka ɓoye ba.
  Ana ƙin tsarin da ya gaza lokacin adanawa da lokacin gwadawa, sannan ana tsallake layin da aka adana
  wanda ya gaza yayin aiki maimakon a haɗa shi. Tsarukan da aka keɓance suna
  aiki ne kawai yayin da aka kunna ɓoyewa.
- **Masu ƙidayar ganowa** — ƙidaya bisa nau'i (ba a taɓa ƙidayar ƙimomin da suka dace ba), ana riƙe su a
  ƙwaƙwalwa kuma ana mayar da su sifili idan an sake farawa (`src/lib/pii/piiDetectionStats.ts`). Suna
  ƙaruwa ne kawai yayin da aka kunna ɓoyewa.

Saitunan suna cikin teburin `key_value` (sararin suna `pii_settings`,
`src/lib/db/piiSettings.ts`) kuma ana karanta su ta ma'ajiyar wucin gadi ta sakan 1. API:

| Hanya  | Hanya                    | Manufa                                                                                        |
| ------ | ------------------------ | --------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Yanayin tuta, `enabledTypes`, `customPatterns`, masu ƙidayar ganowa                           |
| `PUT`  | `/api/settings/pii`      | Maye gurbin `enabledTypes` (`null` = duka) da/ko `customPatterns`                             |
| `POST` | `/api/settings/pii/test` | Gwada tsari guda a kan samfurin da bai wuce 8 KB ba ba tare da aiwatarwa ba; ba a adana komai |

Dukkansu uku suna buƙatar tantancewar gudanarwa kuma suna tabbatar da ingancin jikin buƙata da Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Allurar Um arni (`promptInjection.ts`)

Yana gano tsare-tsaren kai hari a cikin abun da mai amfani ya bayar kuma yana tilasta
manufar da aka saita. Masu canjin muhalli da zaɓuɓɓukan constructor
ne ke jagorantar halin aiki:

| Saiti            | Mai canjin muhalli                                                                                          | Tsohon saiti | Tasiri                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna         | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`       | Idan `false`, matakin kariyar yana tsallake sarrafawa.                                                                                                                                               |
| Yanayi           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`       | Manufar allura: `block`, `warn`, ko `log`. (Ana karɓar `redact` don dacewa da tsofaffin sigogi amma **ba** ya cire rubutun allura; `PII_REDACTION_ENABLED` ne ke sarrafa sake rubuta PII na buƙata.) |
| Iyakacin toshewa | zaɓin `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (sunan madadi `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Mafi ƙarancin tsanani da ake buƙata don toshewa. Matsakaicin tsanani na sa ido kawai ne bisa tsohon saiti.                                                                                           |

**Fifikon yanayi** (`getMode`): `options.mode` na mai kira →
**saitin tuta na fasali na DB mai fifiko** na `INJECTION_GUARD_MODE` (Allon sarrafawa → Saituna →
Tutocin Fasali) → mai canjin muhalli `INJECTION_GUARD_MODE` → mai canjin muhalli `INPUT_SANITIZER_MODE` →
`warn`. Saboda haka saitin allon sarrafawa mai fifiko ya fi masu canjin muhalli iko, don haka UI na Tutocin
Fasali yana sarrafa matakin kariyar da ke aiki kai tsaye (ba sai an sake farawa ba). Karatun DB yana da kariya idan ya gaza:
idan ya samu kuskure, matakin kariyar yana komawa ga halin aiki bisa muhalli, kuma idan ba a saita
wani saiti mai fifiko ba, halin aikin daidai yake da warware saiti ta muhalli kawai.

Tushen ganowa:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (tarin masu ganowa
   na bai ɗaya da ake amfani da shi a wasu wurare a jerin matakan sarrafawa).
2. `DEFAULT_GUARD_PATTERNS` da aka gina a ciki (a halin yanzu `system_override_inline` da
   `markdown_system_block`, dukansu da tsanani na `high`).
3. `customPatterns` na zaɓi da ake miƙawa ta zaɓuɓɓukan constructor (zaren rubutu, regex,
   ko bayanan `{ name, pattern, severity }`).

Lokacin da `mode === "block"` **kuma** aƙalla abu ɗaya da aka gano ya kai iyakar
tsanani, `preCall` yana mayar da `{ block: true, message: "Request rejected:
suspicious content detected" }`. A yanayin `warn`/`log`, tsarin kariya yana rubuta bayanai a rajista amma
yana barin kiran ya gudana. Ana kuma fitar da aikin taimako na bai ɗaya `evaluatePromptInjection()`
domin masu kira da suke buƙatar tantance prompt ba tare da bi ta wurin rajista ba.

**Iyakar bincike (v3.8.20):** mai ganowa yana duba **16 KB na farko** kawai na
rubutun prompt da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (bytes 16 384) a
`src/shared/utils/inputSanitizer.ts`. Dukansu `detectInjection()` da
`evaluatePromptInjection()` suna yin `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
madaukin tsarin daidaitawa. Umarnin kutse suna kusa da farkon abin da aka shigar, don haka wannan
yana takaita amfani da CPU/GC na regex a bayanan da suka kai ɗaruruwan KB ba tare da raunana ganowa ba (duba
#3932, #4041).

### Mai Ɓoye Bayanan Shaidar Shiga (`credentialMasker.ts`)

Yana aiki a matakai **biyu**, a ƙarshe cikin jerin tsoho (fifiko `95`). Yana ɓoye
sanannun siffofin maɓallan API / token na sirri daga bayanan da ake aikawa (abin da saƙo
ya ƙunsa, muhawarar kiran kayan aiki, sakamakon kayan aiki) **da kuma** amsar mai ba da sabis, don kada
bayanan shaidar shiga da aka liƙa cikin prompt (ko sakamakon kayan aiki ya maimaita su) su fallasa
ga mai ba da sabis na sama ko su koma ga abokin ciniki.

- **Sai an zaɓi kunnawa**, kamar yadda ake yi wajen ɓoye PII (mai alaƙa da Tsayayyar Doka #20):
  a kashe yake sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan yana kashe, tsarin kariyar ba ya yin komai —
  ba ya taɓa toshewa kuma ba ya taɓa sake rubutawa.
- `redactCredentials()` yana bi ta dukkan bishiyar bayanan da ake aikawa/amsa (`walkValue()`,
  mai kariya daga gurɓata prototype, mai kariya daga zagaye ta amfani da `WeakSet`) kuma yana maye gurbin abin da ya dace da
  alamar `[REDACTED:<type>]`, yana kwafar rassan da suka
  canza kawai.
- `CREDENTIAL_PATTERNS` ya ƙunshi maɓallan masu ba da sabis na LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maɓallan biyan kuɗi (Stripe, Square), maɓallan
  girgije (maɓallin shiga AWS, Twilio, SendGrid, Mailgun), maɓallan sirri / JWT,
  igiyoyin haɗi masu ɗauke da bayanan shaidar shiga (`mongodb://user:pass@...`, da sauransu), da
  tsarin gama-gari na ƙimar taken `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Maɓallan da suke da siffar taken bayanai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ana ɓoye su bisa tsarinsu (ƙima kawai, ana kiyaye gaban tsarin kamar
  `Bearer `/`Basic `) maimakon ta regex na rubutu na gama-gari.
- Tsarin kariyar ba ya taɓa toshewa; yana sake rubutawa ne kawai (`modifiedPayload` /
  `modifiedResponse`) kuma yana ƙara bayanin alama (`meta.credentialsRedacted`, `meta.count`).

Gwajin kariya daga komawar kuskure: `tests/unit/credential-masker-guardrail.test.ts`.

## Ƙa'idar Asali (`base.ts`)

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
  block?: boolean; // true yana katse jerin nan take
  message?: string; // ana nunawa yayin toshewa
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall ne ke mayar da shi don sake rubuta buƙatar
  modifiedResponse?: TValue; // postCall ne ke mayar da shi don sake rubuta amsar
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

Matakin kariya yana nuna "babu canji" ta hanyar mayar da `void`, `{}`, ko
`{ block: false }`. Mayar da `modifiedPayload`/`modifiedResponse` yana maye gurbin
ƙimar da ke gudana cikin jerin domin matakan kariya na gaba.
`signal?: AbortSignal` yana isar da yanayin rayuwar mai kira zuwa matakan kariya. Soke buƙata shi ne keɓantaccen yanayin barin abu ya wuce idan aiki ya gaza da aka yi da gangan: hanyoyin haɗa kafofin watsa labarai suna dakatar da aiki su kuma yi tsaftacewa ba tare da mayar da ɗanyen kafofin watsa labarai zuwa wurin da aka san ba ya tallafa musu ba.

## Rajista (`registry.ts`)

Guda ɗaya tilo na `guardrailRegistry` yana samar da:

- `register(guardrail)` — yana ƙara matakin kariya (ko ya maye gurbinsa ta sunan da aka daidaita) sannan
  ya sake jerantawa bisa `priority` daga ƙarami zuwa babba.
- `clear()` / `list()` — ayyukan taimako na gudanarwa.
- `runPreCallHooks(payload, context)` — yana bi ta matakan kariya masu aiki, yana wuce
  bayanan buƙata ta `modifiedPayload`, kuma yana tsayawa a farkon `block: true`.
- `runPostCallHooks(response, context)` — irin wannan tsarin a ɓangaren amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayin da aka adana sannan, idan an zaɓa,
  ya sake rajistar tsoffin matakan domin ware gwaje-gwaje cikin tsafta.

Duk masu gudanarwar biyu suna mayar da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` yake jerin bayanan `GuardrailExecutionResult` waɗanda suka ƙunshi
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane matakin kariya,
waɗanda suke da amfani wajen bin diddigin aiki.

### Kashe Matakan Kariya Ga Kowace Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara
jerin sunayen matakan kariya marasa maimaituwa waɗanda ya kamata a tsallake don buƙatar
da ake yi yanzu. Akwai hanyoyi biyar, waɗanda ake karantawa a wannan jeri sannan a haɗa su cikin jerin guda
(abin da ya fara bayyana shi ake riƙewa yayin cire maimaituwa):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` na jikin buƙata (a matakin sama)
3. `metadata.disabledGuardrails` na jikin buƙata (sai idan `metadata` abu ne)
4. Kanun `x-omniroute-disabled-guardrails`
5. Tsohon kanun `x-disabled-guardrails`

Ana haɗa duk hanyoyin biyar, har da kanun biyu: aika duka
`x-omniroute-disabled-guardrails` da `x-disabled-guardrails` yana tsallake haɗaɗɗen jerin
nasu, kuma sabon kanun da ba ya ɗauke da komai ba ya ƙara ɓoye tsohon
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), an gyara a
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Ƙimomi na iya zama jerin zaren rubutu ko zaren rubutu da aka raba da waƙafi; ana cire sararin da ke gefen sunaye
kuma a daidaita su zuwa ƙananan haruffa masu haɗin alamar jan layi (`pii_masker` → `pii-masker`), sannan a cire
wuraren da babu komai. Ana tura sakamakon ta `context.disabledGuardrails`
zuwa rajista, wadda take tsallake matakan kariya masu dacewa (`skipped: true` a cikin `results`).

Jerin kashewa yana shafar **rajista** kawai. Yanayin `block` na shigar da umarnin ɓoye cikin prompt
iyaka ce ta dole: tsaka-tsakin kariyar shigar da umarnin ɓoye
(`src/middleware/promptInjectionGuard.ts`) yana kiran `evaluatePromptInjection()`
ba tare da wani jerin kashewa da mai kira yake sarrafawa ba (an cire kiran
`resolveDisabledGuardrails({ body })` marar amfani da yake yi a da a
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), don haka buƙatar
da ta kashe `prompt-injection` har yanzu za a ƙi ta a yanayin `block`. Haka aka
tsara. Mai kira ne yake sarrafa hanyoyin kashewa (jikin buƙata,
bayanan metadata, kanun), kuma bai kamata mai kira ya iya kashe wani matakin
tsaro da mai gudanarwa ya saita ba
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Haɗin kanun
daga [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
yana sauya waɗanne matakan kariya na rajista ne kawai ake tsallakewa; ba ya ba abokin ciniki damar
kauce wa tsaka-tsakin. Ana bin diddigin manufofin matakan kariya na dole ga kowane maɓalli da kowane rukuni a
RFC na v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Duba [Abin da ya ƙunsa da iyakoki](#coverage-and-limits).

## Tsarin Gudanarwa

Ga kowace buƙata da ke bi ta `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts` (hanyoyin rukunin hira da aka jera a ƙarƙashin
[Abubuwan da aka rufe da iyakoki](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, jiki,
   da kanun buƙata.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da matakan kariya bisa
   fifiko daga ƙasa zuwa sama:
   - Ana rubuta matakan kariya da aka kashe a matsayin `skipped`.
   - `preCall` na kowane matakin kariya na iya sake rubuta bayanan da ake aikawa ta hanyar `modifiedPayload`.
   - `block: true` na farko yana katse jerin, kuma mai sarrafa buƙatar yana mayar
     da amsar ƙin karɓa daga matakin kariya.
3. Bayanan da ake aikawa (waɗanda wataƙila an sake rubutawa) suna shiga zaɓen hanyar combo da aikawa
   zuwa sabis na sama.
4. **Ga waɗanda ba na kwarara ba kawai:** bayan an haɗa amsar,
   `guardrailRegistry.runPostCallHooks(...)` yana gudanar da wannan jerin a kan
   amsar. `block: true` a nan yana watsar da amsar sabis na sama kuma ya mayar da HTTP 400. Amsoshin kwarara suna tsallake wannan matakin gaba ɗaya.

Matakan kariya da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar da su a rajista ta hanyar
`logger.warn`, amma jerin yana ci gaba — an tsara shi ya bar aiki ya ci gaba idan an samu kuskure.

## Abubuwan da aka rufe da iyakoki

An haɗa rajistar matakan kariya da tsarin sarrafa hira kawai. An tabbatar da waɗannan iyakoki
ta hanyar `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` da
`tests/unit/guardrail-pipeline-characterization.test.ts`; a sabunta waɗannan gwaje-gwajen
da gangan idan halayyar ta canza.

### Inda ake gudanar da hooks

| Hook / sarrafawa                                          | Yana aiki a kan                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                         | Buƙatun da `handleChat` (`src/sse/handlers/chat.ts`) ke sarrafawa: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (da `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, da wakilin hira na Telegram. Har da wurin gwaji na dashboard `/api/guardrails/test`. Toshewa kafin kira yana mayar da HTTP 400. |
| `runPostCallHooks`                                        | Amsoshin hira **waɗanda ba na kwarara ba** kawai (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Amsoshin kwarara ba sa taɓa isa gare shi.                                                                                                                                                                                                                                                                                      |
| PII na kwarara                                            | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), wanda ake haɗawa cikin `streamingPipeline.ts` idan `PII_RESPONSE_SANITIZATION` yana kunne. Ba matakin kariya ba ne, don haka hanyoyin kashewa ba sa shafarsa.                                                                                                                                                                                                             |
| Matsakaicin shirin kariya daga shigar da umarni (na gado) | Kowace hanyar `/v1` mai ɗauke da umarnin shigarwa, har da rukunin hira (duba [hanyoyin da aka rufe](#injection-guard-route-coverage--red-team-phase-8--block-d)). Shigar da umarni cikin prompt kawai.                                                                                                                                                                                                                                  |

### Abubuwan da ba a rufe ba

- **Hanyoyin kafofin watsa labarai, embeddings da bayanai** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ba sa taɓa isa rajistar. Babu
  ɓoye PII, ɓoye bayanan shaidar shiga ko gadar nau'in bayanai da ke aiki a can. Bincikensu
  kaɗai shi ne matsakaicin shirin kariya daga shigar da umarni na gado.
- **Amsoshin kwarara** ba sa samun matakan kariya bayan kira: babu `pii-masker` ko
  `credential-masker` bayan kira, kuma babu toshewa bayan kira. Sauyin PII na kwarara
  ne kawai yake aiki (idan `PII_RESPONSE_SANITIZATION` yana kunne). Bayanin shaidar shiga
  da aka maimaita a amsar kwarara ba a ɓoye shi.
- **Hanyoyin kashewa da matsakaicin shirin (bisa tsari):** matsakaicin shirin yana tantance
  shigar da umarni cikin prompt da kiransa na kansa zuwa `evaluatePromptInjection()`, ba tare da
  miƙa wani jerin kashewa da mai kira ke sarrafawa ba. Yanayin `block` iyaka ce ta tilas
  wadda kashewar da mai kira ke sarrafawa ba za ta iya kauce mata ba, har ma a hanyoyin rukunin hira
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Kashe
  `prompt-injection` yana tsallake matakin kariya na rajistar kawai.

### Abin da ke ganin amsa kafin matakin bayan kira

A hanyar da ba ta kwarara ba, tsarin shi ne: cire bayanan ƙwaƙwalwa → gudanar da kayan aikin
da aka gina a ciki → matakan kariya bayan kira → fita saboda toshewar bayan kira → adanawa a ma'ajiyar wucin gadi ta ma'ana.

- **Cire bayanai don ƙwaƙwalwa** da **aiwatar da kayan aiki** suna ganin amsar kafin matakan
  kariya na bayan kira su iya sake rubuta ta ko toshe ta. Tun daga
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), cire bayanai don
  ƙwaƙwalwa yana bi da rubutun da aka ciro ta `sanitizePII` idan
  `PII_RESPONSE_SANITIZATION` yana kunne (a yanayin kwarara da wanda ba na kwarara ba), amma
  an riga an miƙa amsar da matakan kariya na bayan kira suka toshe daga baya ga ƙwaƙwalwa da
  kayan aiki.
- **Ma'ajiyar wucin gadi bisa ma'ana** tana adana amsar bayan matakan kariya na bayan kira, don haka tana adana
  amsar da aka sake rubutawa, kuma ba a taɓa adana amsar da aka toshe ba. Ana ware bayanan ma'ajiyar
  da maɓalli na kowane maɓallin API.

## Saituna

Masu canjin muhalli da matakan kariya na ciki suke karantawa:

| Mai canji                             | Mai amfani da shi             | Tasiri                                                                                                                    |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`            | Saita `false` don kashe ganowa gaba ɗaya.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`            | Manufar cusa umarni: `warn`, `block`, ko `log`. Tsohuwar ƙimar `redact` ba ta sake rubuta rubutun cusa umarni.            |
| `INJECTION_GUARD_MODE`                | `prompt-injection`            | Yanayin kariyar cusa umarni; kuma tutar fasali ce ta DB wadda take **rinjayar** masu canjin muhalli (DB > ENV).           |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`            | Mafi ƙarancin tsanani da `MODE=block` yake ƙi: `high` (na asali), `medium`, ko `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`            | Tsohon sunan madadin `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                  | Idan yana `true`, ana ɓoye bayanan sirri na mutum (PII) da ke cikin buƙata (ba tare da dogaro da yanayin cusa umarni ba). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a matakin gaba) | Yana sarrafa yadda mai ɓoye bayanai yake aiki a ɓangaren amsa.                                                            |

Matakan kariya na Modality Bridge suna karanta saitunan lokacin aiki daga ma'ajiyar saituna
mai amfani da DB (`getSettings()`), ba daga masu canjin muhalli ba. Manyan maɓallan Vision su ne
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Ana karɓar tsoffin maɓallan
`visionBridge*` ne kawai a matsayin hanyar madadin karatu ta zagaye ɗaya
da aka bayyana a takardu; rubutawa daga allon sarrafawa tana amfani da manyan maɓallan. Ƙimomin asali da mai warware hanyar madadin
suna cikin `src/shared/constants/modalityBridgeDefaults.ts`, tare da tsoffin
ƙimomin dindindin da aka riƙe a `src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` da ake rabawa. Audio ba shi da hanyar komawa ga tsoffin maɓallai domin an
gabatar da waɗannan maɓallan tare da tsarin bayanan Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` da ake rabawa.
A asali yana kashe domin FFmpeg/ffprobe abubuwan dogaro ne na gudanar da aiki
waɗanda ba dole ba ne, kuma samar da bayanin firam yana ƙara jinkiri da kuɗin amfani da samfurin.

## Matakan Kariya na Musamman

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

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` wanda ke gado daga `BaseGuardrail`.
2. Aiwatar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin shigo da shi (a ƙara daga `registerDefaultGuardrails`) ko
   a kira `guardrailRegistry.register(...)` a lokacin aiki — wurin rajistar yana maye gurbin
   duk wani matakin kariya na baya mai suna iri ɗaya bayan daidaita sunan.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalan da suke akwai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje don farawa daga yanayin da aka sani.
Miƙa `{ registerDefaults: false }` don farawa da wurin rajista marar komai sannan
a yi rajistar matakan kariyar da ake gwadawa kawai. Vision Bridge yana karɓar shigar da abubuwan
dogaro (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana samar da
makamantan wuraren haɗawa don saituna, iyakoki, zaɓin samfurin STT, duba bayanan
shaidar shiga, da sauya magana zuwa rubutu. Saboda haka gwaje-gwaje za su iya gwada hanyoyin biyu ba tare da samun damar DB
ko hanyar sadarwa ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — na'urar ganowa da ake amfani da ita tare wadda ke ba da damar
  gano shigar da umarni na yaudara da ɓoye PII
- `src/shared/constants/visionBridgeDefaults.ts` — saitunan asali na Vision Bridge da
  jerin samfuran da aka tilasta wa amfani da gada
- `src/shared/constants/modalityBridgeDefaults.ts` — saitunan asali na lokacin aiki da Vision/Audio suke amfani da su tare
- `docs/architecture/RESILIENCE_GUIDE.md` — shimfiɗar kariya mai zaman kanta (mai katse da'ira, lokutan dakatawa)
- `docs/reference/ENVIRONMENT.md` — cikakken bayani kan masu canjin muhalli

## Hanyoyin da kariyar shigar da umarni ta rufe da gwajin kai hari (Mataki na 8 · Sashe na D)

Kariyar shigar da umarni (`createInjectionGuard` / `withInjectionGuard`) tana rufe duk hanyoyin
da suke karɓar umarnin mai amfani. Tana bin `INJECTION_GUARD_MODE` (na asali `warn` = rubuta a kundin bayanai kawai;
`block` = mayar da HTTP 400 `SECURITY_001`).

| Nau'i                | Hanyoyi                                                                                                                                              | Yanayin asali |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Rubutu (mai wanzuwa) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | gargadi       |
| Ƙirƙira              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | gargadi       |
| Bayanai              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | gargadi       |

Ciro rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Gwajin kai hari (kowane dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowace hanya tana toshe
tarin bayanan OWASP-LLM a yanayin `INJECTION_GUARD_MODE=block`; garak yana gudanar da gwaje-gwajen bincike (yana tsallakewa idan babu sirrin shiga).
An haɗa `moderations` don daidaito. Yanayin toshewa iyaka ce ta wajibi: `evaluatePromptInjection()`
yana watsi da jerin abubuwan da aka kashe na kowace buƙata wanda middleware ke miƙa masa, don haka `disabledGuardrails` ba ya
keɓe hanya daga gare shi **ko kaɗan** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Tsarin aikin kowane dare (`.github/workflows/nightly-llm-security.yml`, cron + ƙaddamarwa
da hannu) yana da ayyuka biyu:

- **`promptfoo-guard` (mai hana ci gaba idan ya gaza)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowane yanayin kai hari (misali "yi watsi da duk
  umarnin da suka gabata…", kauce wa ƙuntatawa irin na DAN) yana tabbatar da cewa amsar tana ɗauke da
  `error.code === "SECURITY_001"`, wato kariyar ta ƙi buƙatar da gaske.
- **`garak` (na ba da shawara)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  a kan OmniRoute da ke aiki a cikin gida (`http://localhost:20128/v1`). Yana buƙatar
  sirrin mai samarwa (`PROMPTFOO_PROVIDER_KEY`); yana tsallakewa ba tare da matsala ba kuma ana ƙara masa
  `|| true` a ƙarshe, don haka yana bayar da rahoto ba tare da sa CI ya gaza ba.

Iyakar aikin mai taimakawa kariyar (`createInjectionGuard` / `withInjectionGuard`)
ta haɗa da kowace hanyar `/v1` mai ɗauke da umarni; ana ciro rubutun umarni daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.

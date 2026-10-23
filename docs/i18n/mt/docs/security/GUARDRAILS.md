# Guardrails (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sors awtorevoli:** `src/lib/guardrails/`
> **Aġġornat l-aħħar:** 2026-10-17 — v3.8.52 (żdiedet [Kopertura u limiti](#coverage-and-limits):
> liema rotot u mogħdijiet tar-rispons jilħqu l-hooks, l-headers magħquda tad-diżattivazzjoni (#16412), il-modalità
> tal-imblukkar tal-injezzjoni bħala konfini obbligatorju (#16413), u x’jara rispons qabel il-post-call)

Il-guardrails jinfurzaw is-sikurezza, il-politiki u t-trasformazzjonijiet tal-kontenut fil-konfini
bejn OmniRoute u l-fornituri upstream. Kull guardrail jista’ jispezzjona (u
b’mod fakultattiv jirrifjuta, jittrasforma jew jannota) il-payloads tat-talbiet (`preCall`) u
r-risponsi upstream (`postCall`).

Is-sistema **tħalli t-talba tkompli f’każ ta’ żball**: jekk guardrail jitfa’ eċċezzjoni waqt l-eżekuzzjoni, ir-reġistru
jirreġistra l-iżball u jkompli bil-guardrail li jmiss minflok ifalli
t-talba. L-imblukkar huwa deċiżjoni espliċita (`block: true`), qatt aċċident.
L-unika eċċezzjoni hija talba abortita: meta s-`signal` ta’ min jagħmel is-sejħa jiġi abortit,
guardrail li jitfa’ eċċezzjoni jirrifjuta l-eżekuzzjoni tal-hook minflok jinqabeż.

Il-hooks **ma** jitħaddmux fuq kull rotta jew kull rispons. Aqra
[Kopertura u limiti](#coverage-and-limits) qabel tiddependi fuq guardrail bħala
kontroll tas-sigurtà.

## Guardrails Inkorporati

Ir-reġistru jgħabbi awtomatikament sitt guardrails f’ordni ta’ prijorità waqt l-importazzjoni
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Stadju/i       | Fajl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numri ta’ prijorità aktar baxxi jitħaddmu **l-ewwel**.

### Pont tal-Viżjoni (`visionBridge.ts`) — Pont tal-Modalità PR-1

Il-mudell bażi GLM 5.3 u `glm-5.3-{low,high,max}` għandhom metadata espliċita
`supportsVision:false` fir-reġistru/fl-ispeċifikazzjoni. Il-varjanti GLM 5.3 Flash
jibqgħu mudelli b’viżjoni nattiva. Ir-rotta `/v1/messages` ta’ Claude Code tidħol
fil-katina kondiviża tal-guardrails ta’ qabel is-sejħa ta’ `handleChat` **qabel** it-traduzzjoni minn Claude għal OpenAI;
l-immaġnijiet imbejta fir-riżultati tal-għodda `Read` iridu jiġu deskritti jew ipproċessati
qabel ma dik it-traduzzjoni tikkonvertihom f’kontenut OpenAI `image_url` (#17069).

Jinterċetta talbiet li fihom immaġnijiet u li huma mmirati lejn **mudelli mingħajr viżjoni** u jew
jidderieġi t-talba kollha lejn mudell b’kapaċità ta’ viżjoni jew jissostitwixxi l-partijiet tal-immaġnijiet
b’deskrizzjonijiet testwali prodotti minn mudell tal-viżjoni konfigurabbli qabel
is-sejħa upstream. Dan jippermetti lill-fornituri li jappoġġjaw biss it-test jipproċessaw
payloads multimodali b’mod trasparenti.

Fluss:

1. Aqbeż jekk il-mudell fil-mira diġà jappoġġja l-viżjoni (sakemm ma jidhirx fil-
   lista tal-pont obbligatorju `isVisionBridgeForcedModel`).
2. Oħroġ il-partijiet tal-immaġnijiet permezz ta’ `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li jiddelega lid-**detettur unifikat tal-midja**
   `detectMediaParts()` f’`open-sse/utils/mediaParts.ts` — l-
   uniku sors awtorevoli kondiviż mal-filtru tal-kompatibbiltà tal-combo.
   L-estrazzjoni hija limitata għall-forom li `replaceImageParts` jista’ jerġa’
   jdaħħal f’posthom (il-kuntratt ta’ estrazzjoni↔sostituzzjoni): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, u Responses
   API `input_image`. Immaġnijiet li jaqblu u li huma mbejta f’Claude Code
   `tool_result.content` u fl-outputs tal-għodod ta’ Responses jiġu wkoll estratti u
   sostitwiti fil-mogħdijiet oriġinali tagħhom; forom li huma biss indikaturi huma materjal għall-filtru tal-combo
   u ma jiġux estratti.
   Aqbeż jekk ma tinstab l-ebda waħda.
3. Iddetermina l-konfigurazzjoni waqt l-eżekuzzjoni permezz ta’ `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): iċ-ċwievet il-ġodda tas-settings `modalityBridge*`
   jieħdu preċedenza; iċ-ċwievet preċedenti `visionBridge*` jibqgħu **alternattiva ta’ riżerva
   għal ċiklu wieħed** (perjodu biex terġa’ lura għall-verżjoni preċedenti). Aqbeż qabel kwalunkwe traversata tal-midja meta
   l-pont ikun diżattivat.
4. Is-selettur tal-modalità (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   bejn direzzjoni mill-ġdid u deskrizzjoni. Id-direzzjoni mill-ġdid tirritorna `modifiedPayload` bil-`model`
   biss mibdul, flimkien mal-metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Mogħdija tad-deskrizzjoni: illimita l-immaġnijiet għal `maxImages`, ikkomponi l-prompt skont il-kompitu,
   ikkonsulta l-cache tad-deskrizzjonijiet, sejjaħ il-mudell tal-viżjoni **b’mod parallel**
   (`Promise.allSettled`), u daħħal partijiet testwali `[Image N]: <description>`
   minflokhom. Deskrizzjoni li tfalli tagħti `null`: l-immaġni mhux ipproċessata tinżamm għal
   miri mhux magħrufa/b’kapaċità ta’ viżjoni (#4012), iżda **mira diretta kkonfermata li tappoġġja biss
   it-test** jew combo mingħajr viżjoni jirċievi test sostitut espliċitu
   `(unavailable — no vision-capable provider connected)` għal
   kull immaġni mhux deskritta, inklużi fallimenti parzjali u immaġnijiet lil hinn mil-
   limitu tas-sejħiet għad-deskrizzjoni (#17069). L-alternattiva ta’ riżerva eżistenti għad-deskrizzjoni tal-combo meta jfallu kollha
   tibqa’ fis-seħħ (#8430).
6. Irritorna `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-modalità (`modalityBridgeVisionMode`)

| Modalità   | Valur predefinit | Imġiba                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔                | Ewristika preċedenti, mhux mibdula (#6640/#7204): mudelli mhux combo/`auto/` jiġu ridiretti lejn l-aħjar mudell tal-viżjoni sakemm il-mudell oriġinali ma jkollux diġà kredenzjali li jistgħu jintużaw (f’dak il-każ issir deskrizzjoni); il-miri combo dejjem jagħmlu deskrizzjoni.                                                                                   |
| `describe` |                  | Dejjem issir deskrizzjoni — il-blokk tar-ridirezzjoni jinqabeż kompletament; dejjem iwieġeb il-mudell magħżul mill-utent.                                                                                                                                                                                                                                              |
| `reroute`  |                  | Iġġiegħel ir-ridirezzjoni: il-kontroll li jżomm il-mudell li għandu kredenzjali jinqabeż. Il-kontroll tal-kredenzjali tal-**mira** tar-ridirezzjoni jibqa’ japplika — meta ma teżisti l-ebda mira tal-viżjoni li tista’ tintuża, il-pont jimblokka b’żball ċar minflok jagħmel deskrizzjoni jew jibgħat immaġnijiet mhux ipproċessati lil mira li tappoġġja biss test. |

Il-modalitajiet sfurzati jaqtgħu l-fluss **qabel** ma titħaddem l-ewristika awtomatika; l-imġiba ta’ `auto`
hija identika byte b’byte għall-kontroll ta’ protezzjoni ta’ qabel PR-1.

#### Ambitu taċ-ċavetta API (`visionBridgeKeyScope.ts`)

Meta ċ-ċavetta API ta’ min jagħmel is-sejħa tirrestrinġi `allowedConnections`, gruppi ta’ kwoti
(`allowedQuotas`) jew mudelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il-pont jagħżel biss
mudelli għar-ridirezzjoni u għad-deskrizzjoni li ċ-ċavetta tista’ tuża, fuq konnessjonijiet li ċ-ċavetta tista’
tuża. Is-sejħa tad-deskrizzjoni mbagħad dejjem tgħaddi mil-linja interna ta’ OmniRoute bl-
intestatura `x-omniroute-self-loop-key-id`, sabiex it-talba taċ-chat li tirċeviha
terġa’ tinforza l-politika tal-konnessjonijiet u tal-mudelli ta’ dik iċ-ċavetta. `enforceApiKeyPolicy()`
tirrispetta dik l-intestatura biss flimkien mal-bearer tal-linja interna, għalhekk tista’ biss
tirrestrinġi l-aċċess, u id li ma tikkorrispondix għal ċavetta tiġi rrifjutata.

Jekk l-ebda mudell tal-viżjoni ma jkun permess għaċ-ċavetta, **mira kkonfermata li tappoġġja
biss test** tirrifjuta t-talba tal-immaġni lokalment bi żball HTTP 400 ċar minflok
tgħaddi l-bytes tal-immaġni lil servizz upstream li ma jistax jipproċessahom (#17069). Għal miri b’kapaċità
tal-viżjoni mhux magħrufa jew nattiva, il-mogħdija tad-deskrizzjoni żżomm l-imġiba preċedenti tagħha
li tippermetti l-ipproċessar f’każ ta’ falliment (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Talbiet mingħajr ċavetta, u ċwievet mingħajr dawn ir-restrizzjonijiet, iġibu ruħhom eżattament bħal
qabel.

#### Prompt tad-deskrizzjoni konxju mill-kompitu (`modalityBridgeVisionTaskAware`)

Il-valur predefinit huwa **veru**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) iżżid
it-test tal-**aħħar messaġġ tal-utent** (maqtugħ għal 500 karattru) mal-prompt
bażiku tad-deskrizzjoni, u tidderieġi d-deskrizzjoni lejn dak li l-utent fil-fatt talab
(mudell codex-vision-proxy) u titlob lill-mudell tal-viżjoni jittraskrivi t-test
viżibbli. Meta l-għażla tkun mitfija — jew ma jkunx hemm test tal-utent — il-prompt bażiku jintuża mingħajr tibdil.

It-talba kompatibbli ma’ OpenAI tal-linja interna tad-deskrizzjoni nnifisha (`callVisionModelSingle()`
f’`visionBridgeHelpers.ts`) dejjem titlob `image_url.detail: "high"` —
mingħajr kundizzjonijiet, għal kull min jagħmel is-sejħa/fornitur, mingħajr ma tiddependi fuq xi sinjal mill-klijent.
Il-kampjunar b’dettall baxx inaqqas il-preċiżjoni tal-OCR proprju għall-kompitu tat-traskrizzjoni
tat-test li jitlob dan il-prompt, għalhekk is-sejħa tad-deskrizzjoni nnifisha dejjem titlob livell għoli
ta’ dettall irrispettivament mil-livell ta’ dettall li użat it-talba oriġinali li daħlet. Dan
jaffettwa biss il-korp tat-talba interna tad-deskrizzjoni; ma jbiddilx kif
OmniRoute jgħaddi l-`image_url.detail` ta’ min jagħmel is-sejħa fit-talba primarja —
dak il-valur predefinit jiġi applikat separatament, u biss għal klijenti OpenCode identifikati, f’
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Il-fergħa
tal-format ta’ trażmissjoni Anthropic tal-linja interna tad-deskrizzjoni m’għandhiex kamp `detail`
u ma tiġi affettwata mill-ebda wieħed miż-żewġ valuri predefiniti.

#### Limitu tal-output tad-deskrizzjoni (`modalityBridgeVisionMaxChars`)

| Ċavetta                        | Valur predefinit | Medda             |
| ------------------------------ | ---------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`              | `0` jew 100–50000 |

`0` (il-valur predefinit) ifisser **ebda limitu** — id-deskrizzjoni rritornata minn
`callVisionModel()` tgħaddi mingħajr tibdil, u żżomm l-imġiba
eżistenti. Kwalunkwe valur fil-medda 100–50000 jaqta’ d-deskrizzjoni b’
suffiss `…` qabel ma terġa’ tiddaħħal bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` f’`src/lib/guardrails/visionBridge.ts`).
Żid dan il-valur għal kompiti OCR b’ħafna dettall fejn il-mudell downstream jeħtieġ
it-traskrizzjoni sħiħa; naqqsu biex tillimita l-użu tat-tokens f’mudelli tal-viżjoni li jipproduċu ħafna test.
Il-kamp tad-dashboard jinsab fil-pannell Avvanzat tat-tab Viżjoni
(`modality-bridge-max-chars` f’`ModalityBridgeVisionTab.tsx`) u jgħolli kwalunkwe
valur bejn 1 u 99 sal-minimu ta’ 100 filwaqt li jħalli `0` espliċitu
mhux mibdul — `0` huwa valur Zod validu fih innifsu
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux sempliċement
il-valur predefinit għal meta ma jkun issettjat xejn.

#### Cache tad-deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-outputs tad-deskrizzjoni, kondiviża mal-proċess kollu.
Ċavetta = `sha256(imageRef + composedPrompt + configuredBridgeModel)` bi
struttura bi prefiss tat-tul (mingħajr kolliżjonijiet fil-konfini tal-kampi). Il-komponent tal-mudell huwa
l-mudell tal-pont **ikkonfigurat**, mhux il-mudell li fil-fatt wieġeb —
`callVisionModel` tista’ tirrikorri internament għal alternattiva, u l-użu ta’ ċavetta għal kull tentattiv
jifframmenta l-cache. Deskrizzjonijiet li jfallu qatt ma jinħażnu fil-cache. Settings:

| Ċavetta                         | Valur predefinit | Medda   |
| ------------------------------- | ---------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`           | —       |
| `modalityBridgeCacheTtlMinutes` | `60`             | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`            | 10–5000 |

#### Normalizzazzjoni ta’ immaġnijiet remoti (describe permezz ta’ self-loop/irkupru base64)

Meta l-bridge jirkupra immaġni **remota** hu stess — is-sejħa describe
lilu nnifsu ta’ Anthropic u l-konverżjoni base64 fil-format claude-wire
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta’
`fetchRemoteImageAsDataUri()` f’`visionBridgeHelpers.ts` — l-URI tad-data li jirriżulta
jgħaddi minn `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel jiddaħħal fit-talba
lill-mudell tal-viżjoni. Immaġnijiet kbar wisq jitnaqqsu għal **naħa twila ta’ 2048px** (li taqbel
mal-limitu tat-tibdil fid-daqs li OpenAI/Anthropic diġà japplikaw fuq in-naħa tas-server), u dan inaqqas
il-bytes imtellgħin u l-latenza mingħajr ma jbiddel dak li jara l-mudell tal-viżjoni. It-tibdil fid-daqs
juża `sharp`, mgħobbi permezz ta’ importazzjoni dinamika: fuq pjattaforma fejn il-binarju nattiv tiegħu
jonqos milli jitgħabba, `normalizeDataUri()` **qatt ma jitfa’ eċċezzjoni** — minflok
iħalli l-bytes oriġinali jgħaddu kif inhuma, sabiex il-mogħdija describe/konverżjoni base64
dejjem tibqa’ taħdem. Bytes li mhumiex immaġni (irkupru li ma rritornax
immaġni li tista’ tiġi dekodifikata) ukoll jgħaddu mingħajr tibdil. Din in-normalizzazzjoni hija
limitata għall-immaġnijiet li l-bridge jirkupra għas-sejħa tiegħu nnifsu — qatt ma
tiġi applikata għall-payload mhux ipproċessat li min jagħmel is-sejħa jgħaddi kif inhu, f’konformità mal-
prinċipju ta’ tibdil biss b’kunsens espliċitu (Regola Stretta #20).

#### Skema tas-settings + migrazzjoni

Iċ-ċwievet il-ġodda `modalityBridge*` jiġu vvalidati minn Zod f’`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, it-trio `modalityBridgeCache*`, u l-
grupp `modalityBridgeAudio*` użat mill-Audio Bridge. Il-migrazzjoni
`141_modality_bridge_settings.sql` tikkopja l-valuri eżistenti tal-format preċedenti
`visionBridge*` għaċ-ċwievet il-ġodda korrispondenti (idempotenti, qatt ma tissostitwixxi
valur `modalityBridge*` issettjat mill-operatur); iċ-ċwievet tal-format preċedenti jibqgħu aċċettati bħala
alternattiva għall-qari għal ċiklu wieħed ta’ rilaxx.

#### Header tat-trasparenza + statistika

It-tweġibiet ittrasformati permezz ta’ describe jinkludu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mibni minn `buildModalityBridgeHeader()` f’`modalityBridge/bridgeStats.ts`,
miżjud minn `withModalityBridgeHeader()` f’`src/sse/handlers/chatHelpers.ts`).
Talbiet ridirezzjonati **ma jirċievu ebda** header — il-payload ma nbidilx u s-sostituzzjoni
tal-mudell diġà tidher fil-qasam `model` tal-korp tat-tweġiba.

`GET /api/modality-bridge/stats` (awtentikazzjoni tal-ġestjoni, l-istess livell bħal
`GET /api/settings`) jirritorna l-counters fil-memorja għal kull modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux it-tentattivi kollha, bħala
d-denominatur tiegħu; operazzjoni mingħajr kejl tal-ħin ma tivvintax kampjun ta’
żero millisekondi. `bridged` jibqa’ l-alias kompatibbli b’lura għall-
konverżjonijiet li rnexxew; tentattivi li fallew ma jżiduhx.
Il-counters jiġu rrisettjati meta jerġa’ jinbeda l-proċess, kif previst fid-disinn
(telemetrija, mhux kontabilità).

#### Konfigurazzjoni tad-dashboard

Il-paġna ddedikata tad-dashboard hija
`/dashboard/settings/modality-bridge`. It-tabs tagħha `Vision`, `Audio`,
u `Video`, li jistgħu jiġu indirizzati permezz tal-URL, iżommu l-parametri tal-query waqt li jibdlu l-valur `tab`.
It-tab tal-Viżjoni tipprovdi l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluż il-valur
awtomatiku predefinit), prompts adattati għall-kompitu, limiti avvanzati għall-ħin ta’ stennija/immaġnijiet/tul tad-deskrizzjoni/cache,
counters waqt
it-tħaddim, u talba ta’ prova b’miżuri ta’ protezzjoni. It-tab tal-Awdjo hija wkoll attiva: tipprovdi
l-attivazzjoni, selettur ta’ mudelli STT biss b’għażla Awtomatika, limiti għall-ħin ta’ stennija/tul massimu tal-klipp, counters
tal-awdjo, u test ta’ prova `input_audio`. It-tab tal-Vidjo hija funzjonali: tirrapporta
l-istat ta’ FFmpeg/ffprobe waqt it-tħaddim — wieħed minn erba’ stati espliċiti fl-UI (`unknown` waqt li
l-verifika tkun għaddejja jew ma setgħetx titlesta, `restricted` fuq host tad-dashboard li mhuwiex loopback
fejn il-verifika tinqabeż fuq in-naħa tal-klijent, `unavailable` wara l-verifika
u l-konferma li huma neqsin, jew `available` bil-verżjonijiet ta’ FFmpeg/ffprobe) — tissejvja
l-attivazzjoni u l-limiti tal-mudell/frejms/vidjo/ħin ta’ stennija, tiffiltra s-selettur tal-mudelli għal mudelli li jappoġġjaw
il-viżjoni, u tipprovdi counters tal-vidjo.

Il-karta preċedenti Vision Bridge taħt is-settings tal-AI hija link ta’ kompatibbiltà għall-
paġna l-ġdida; m’għadhiex iżżomm it-tieni kopja tal-formola. Media Providers ukoll
jillinkja l-flussi tax-xogħol minn Immaġni għal Test u minn Diskors għal Test mat-tabs korrispondenti ta’ Modality
Bridge mingħajr ma jneħħi l-playground eżistenti minn Diskors għal Test.

**Qbiż tal-kontroll tad-dħul għas-self-loop:** meta s-sejħa describe tgħaddi mis-self-loop
`/v1` ta’ OmniRoute stess (mudell ta’ fornitur mhux standard), is-sottotalba tibgħat
`x-omniroute-admission-bypass: internal` u tiġi awtentikata bil-kredenzjal tas-self-loop
riżolt — il-valur sentinella lokali `sk_omniroute` fil-modalità lokali, jew iċ-
ċavetta tal-ambjent `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ikkonfigurata mill-operatur (#1350) sabiex
installazzjonijiet b’`REQUIRE_API_KEY=true` xorta jkunu jistgħu jwettqu s-sejħa describe. Il-qbiż
jiġi aċċettat biss għal dawk il-kredenzjali eżatti, sabiex klijenti esterni ma jkunux jistgħu jużaw il-
header biex jaqbżu l-kontroll tad-dħul.

Il-valuri predefiniti tal-format preċedenti jinsabu f’`src/shared/constants/visionBridgeDefaults.ts`; il-
valuri predefiniti l-ġodda għall-modalità/adattament għall-kompitu/cache u r-riżolvitur tas-settings jinsabu f’
`src/shared/constants/modalityBridgeDefaults.ts`. Il-mekkaniżmu ta’ protezzjoni jipprovdi
għażla `deps` fil-kostruttur sabiex it-testijiet ikunu jistgħu jinjettaw implimentazzjonijiet fittizji ta’ `getSettings` u
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet taċ-chat li fihom awdjo qabel ma jaslu għand destinazzjoni li mhijiex
magħrufa li taċċetta input awdjo. Qatt ma jirridirezzjona t-talba taċ-chat: il-partijiet tal-awdjo jiġu
traskritti permezz tal-endpoint multipart eżistenti kompatibbli ma’ OpenAI u l-
mudell taċ-chat magħżul ikompli bit-traskrizzjonijiet testwali.

Fluss:

1. Iddetermina `supportsAudio` permezz ta’ `getResolvedModelCapabilities()`. Il-metadata
   espliċita tar-reġistru tal-fornituri tieħu prijorità, imbagħad il-metadata statika tal-mudell, u mbagħad
   `modalities_input` sinkronizzat. Lista ddikjarata ta’ inputs mingħajr `audio` tfisser `false`; jekk
   ma jkun hemm ebda evidenza ta’ kapaċità, il-valur jibqa’ `null`. Kemm `false` kif ukoll `null` jattivaw il-
   pont konservattiv, filwaqt li `true` jevitah.
2. Iddetermina s-settings `modalityBridgeAudio*` u estratta l-partijiet tal-awdjo tal-ogħla livell li jistgħu jiġu sostitwiti
   minn kull messaġġ permezz tad-ditekter kondiviż `detectMediaParts()`.
   Il-forom appoġġjati fil-protokoll huma OpenAI `input_audio`, `audio_url`, u
   `source.media_type: "audio/*"`. L-awdjo mdaħħal f’livelli interni jiġi identifikat għar-routing iżda ma
   jitneħħiex mill-proċess ta’ sostituzzjoni. Ix-xogħol huwa limitat minn `modalityBridgeAudioMaxClips`;
   il-partijiet sussegwenti jibqgħu mhux mibdula.
3. Irrispetta `provider/model` ikkonfigurat, jew ħalli `selectAudioBridgeModel()` jgħaddi minn
   `AUDIO_TRANSCRIPTION_PROVIDERS` fl-ordni stabbli tal-katalgu u jagħżel l-ewwel
   mudell bi kredenzjal attiv u li jista’ jintuża għall-fornitur.
4. `callAudioTranscription()` jikkonverti awdjo base64/data-URI f’`file`
   multipart, jew iniżżel `audio_url` remot permezz tal-protezzjoni tat-traffiku ’l barra li tippermetti biss destinazzjonijiet pubbliċi,
   b’pinning tad-DNS u limitu ta’ 25 MB. Imbagħad jibgħat il-fajl u l-mudell
   magħżul permezz ta’ POST lis-self-loop lokali `/v1/audio/transcriptions`, awtentikat bi
   `resolveSelfLoopBearer()`. Ir-rotta eżistenti tat-traskrizzjoni twettaq it-tfittxija normali
   tal-kredenzjali, il-ġestjoni tal-perjodu ta’ stennija/tal-limiti tar-rata, u t-tqassim lill-fornitur.
5. Sejħiet li jirnexxu jissostitwixxu l-partijiet tagħhom b’`[Audio N]: <transcript>`. Is-sejħiet
   jitħaddmu b’`Promise.allSettled`: falliment individwali jżomm dik il-parti
   tal-awdjo oriġinali (il-kuntratt #4012). Jekk kull sejħa tfalli u jkun ikkonfermat li d-destinazzjoni għandha
   `supportsAudio === false`, il-partijiet isiru
   `[Audio N]: (unavailable — no STT provider connected)` (il-kuntratt #8430). Għal
   destinazzjoni mhux magħrufa (`null`), riżultat fejn ifallu s-sejħiet kollha jibqa’ mhux mibdul. Destinazzjoni
   kkonfermata bħala waħda li tappoġġja biss it-test, mingħajr kredenzjal STT li jista’ jintuża, tirċievi l-istess
   test sostitut espliċitu mingħajr ma ssir sejħa tan-network.

It-traskrizzjonijiet li jirnexxu jużaw il-cache LRU/TTL ta’ Modality Bridge kondiviż mill-proċess kollu. Iċ-
ċavetta tgħaqqad ir-referenza tal-awdjo, it-tikketta stabbli tal-operazzjoni `audio-transcription`,
u l-mudell STT magħżul; il-fallimenti qatt ma jinħażnu fil-cache. It-tentattivi tal-awdjo jaġġornaw
il-counters kondiviżi `bridged`, `cacheHits`, `failures`, u `lastUsedAt`.
It-tweġibiet trasformati jinkludu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; it-talbiet mhux mibdula
ma jirċevux segment ta’ Audio Bridge.

Is-settings waqt it-tħaddim huma maħżuna fid-DB u vvalidati b’Zod:

| Ċavetta                       | Valur prestabbilit | Medda                 |
| ----------------------------- | ------------------ | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`             | —                     |
| `modalityBridgeAudioModel`    | `""`               | Awtomatiku jew ID STT |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                  |

Il-cache kondiviż jibqa’ kkontrollat minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Pont tal-Vidjo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Jinterċetta partijiet tal-vidjo tal-ogħla livell f’`messages` ta’ Chat Completions u f’`input` tal-
API Responses qabel ma ssir sejħa lil destinazzjoni mingħajr appoġġ nattiv magħruf għall-vidjo.
Il-forom appoġġjati huma `input_video`, `video_url`, `video_source`, URLs HTTPS,
u URIs tad-data `data:video/*;base64,...`. Ismijiet sempliċi ta’ fajls fit-test ma jitqisux
bħala vidjo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) huwa responsabbli biex jgħaddi mit-talba, għall-
verifika tal-kapaċità/tal-politika, għall-aggregazzjoni għal kull talba, u għall-kontenut tat-tweġiba.
Ix-xogħol għal kull vidjo — il-kisba, il-cache tar-riżultat sħiħ, id-deskrizzjoni ta’ sekwenza
ta’ frejms (li tgħaqqad kwalunkwe traskrizzjoni tal-awdjo ddikjarata minn min jagħmel is-sejħa), u l-metriċi/l-interruzzjoni/it-tindif
għal kull tentattiv — huwa moħbi wara `processVideoPart` f’
`videoBridgePipeline.ts`, li jissejjaħ darba għal kull parti tal-vidjo fil-loop ta’ `preCall`.
Dak il-modulu jiddefinixxi wkoll il-konfini espliċiti tal-ports `VideoMediaBrokerPort`
(il-kisba tal-bytes u l-estrazzjoni ta’ frejms kampjunati), `VideoAudioTranscriptionPort`
(it-tgħaqqid ta’ traskrizzjoni tal-awdjo ddikjarata minn min jagħmel is-sejħa mad-deskrizzjonijiet kampjunati), u
`VideoDrilldownPort` (il-konfini tal-persistenza għall-analiżi dettaljata tal-frejms; għadu mhux imqabbad
ma’ `processVideoPart` — bħalissa r-rotta separata `/api/modality-bridge/video/drilldown`
biss tikteb entrati ta’ analiżi dettaljata).

Il-mogħdija pubblika tat-talbiet `/v1` qatt ma timporta jew tinvoka sottoproċess. Il-vidjos remoti
jitniżżlu b’limitu ta’ 50 MiB; il-vidjos base64 inkorporati għandhom
limitu konservattiv ta’ 36 MiB għal kull vidjo dekodifikat sabiex il-pakkett tal-mudell/tal-messaġġi/tal-istruttura
jkun jista’ jibqa’ fil-limitu ta’ ammissjoni tat-talbiet JSON pubbliċi ta’ 50 MiB. It-tul
inkorporat u l-istimi tad-daqs dekodifikat jiġu vverifikati qabel l-allokazzjoni. HTTPS huwa
meħtieġ fuq il-URL remot inizjali u fuq kull ridirezzjoni, bl-użu tal-protezzjoni eżistenti
tat-traffiku ’l barra li tippermetti biss destinazzjonijiet pubbliċi, b’pinning tad-DNS. Il-bytes imbagħad jaqsmu l-konfini interni eżatti
tal-broker `POST /api/modality-bridge/video/extract`. Dik ir-rotta hija kemm
`LOCAL_ONLY` kif ukoll `SPAWN_CAPABLE`, taċċetta biss talba minn loopback fdat,
awtentikata għal kull proċess, u qatt ma taċċetta URL, mogħdija tas-sistema tal-fajls, fajl eżegwibbli,
jew lista ta’ argumenti. Il-pipeline tad-daqs tal-korp tal-API u l-qarrej inkrementali tal-korp
tal-handler jinfurzaw indipendentement limitu ta’ 50 MiB għall-input tal-broker. Il-kju limitat tiegħu jwettaq
estrazzjoni waħda kull darba, jippermetti erba’ kompiti pendenti, u jillimita l-input pendenti għal
100 MiB.

Fi ħdan il-broker, `ffprobe` jaqra fajl lokali privat; il-lista fissa ta’ formati
permessi teskludi l-formati ta’ playlists u manifests. Għall-kontenituri permessi
tal-familja MOV, ir-referenzi esterni għad-data MOV jibqgħu diżattivati b’mod
predefinit, u l-kmand fiss ma jattivahomx. Kemm `ffprobe` kif ukoll `ffmpeg`
jużaw il-lista ta’ protokolli permessi limitata għal `file`, thread waħda,
arrays fissi ta’ argumenti, ebda shell, u eżegwibbli riżolti minn `PATH`.
Il-flussi tal-qoxra tat-tip attached-picture mhumiex kandidati li jistgħu
jintlagħbu. Il-flussi kollha li jistgħu jintlagħbu jridu jissodisfaw il-limiti,
u fluss espliċitament predefinit jingħata preferenza qabel l-għażla alternattiva
deterministika bl-aktar indiċi baxx. Il-vidjows huma limitati għal 600 sekonda,
8,192 pixel għal kull dimensjoni, u 33,554,432 pixel tas-sors. FFmpeg jieħu
kampjuni ta’ 1–16-il frejm JPEG fil-punti tan-nofs, inaqqas it-tarf it-twil
għal mhux aktar minn 1,024 pixel mingħajr ma jkabbar inputs iżgħar, u qatt ma
jirċievi URL. It-teħid tal-kampjuni huwa `uniform` b’mod predefinit. Il-politiki
fakultattiva `scene_aware` u sperimentali `segment_aware` iwettqu pass fiss
addizzjonali wieħed ta’ FFmpeg fuq il-fluss lokali diġà vvalidat, jagħżlu marki
tal-ħin tax-xeni `showinfo` f’limiti definiti, u jerġgħu lura b’mod
deterministiku għall-istess punti tan-nofs uniformi jekk id-ditekter ifalli,
jinqabeż il-ħin massimu, l-output ikun ifformattjat ħażin, jew is-sett ta’
kandidati jkun vojt. Il-modalità konxja tas-segmenti talloka kampjuni fil-punti
tan-nofs proporzjonalment għall-intervalli tax-xeni vvalidati; l-evidenza konxja
tas-segmenti u l-imġiba tal-għażla alternattiva huma spjegati fid-dettall hawn
taħt. Il-limitu assolut ta’ 16-il frejm jiġi
applikat wara l-għażla f’kull politika. Meta talba konxja tax-xeni jkollha biss
baġit ta’ frejm wieħed, tuża l-punt tan-nofs uniformi tat-tieqa attiva tal-vidjo
sħiħ jew tal-fokus u tirrapporta `policyEffective: uniform`: frejm wieħed magħżul
minn xena ma jistax jippreserva ż-żewġt itruf temporali. Min jagħmel is-sejħa
jista’ fakultattivament jipprovdi tieqa ta’ fokus finita (`start`/`end` f’sekondi);
il-konfini jiġu ristretti għat-tul tal-midja, twieqi b’konfini maqluba jew mhux
finiti jiġu rrifjutati, u l-politiki kollha tat-teħid tal-kampjuni jitwettqu biss
ġewwa l-intervall normalizzat. It-tieqa li tirriżulta tiġi inkluża fil-metadata
tat-teħid tal-kampjuni u fil-prefiss tad-deskrizzjoni mhux affidabbli sabiex
il-mudelli sussegwenti jkunu jistgħu jiddistingwu silta ffukata mil-linja
taż-żmien sħiħa.

Il-fokus semantiku tad-deskrizzjoni huwa setting separat u espliċitu.
Il-modalità ta’ analiżi predefinita `full` tippreserva l-prompt eżistenti
tal-frejms u qatt ma tgħaddi t-test tat-talba lill-mudell tad-deskrizzjonijiet.
Fil-modalità `focused`, il-bridge jaqra biss l-aktar `text`/`input_text` reċenti
mhux vojt miktub mill-utent mill-istess kontenitur Chat jew Responses,
jinnormalizzah għal NFC, jikkollassa l-karattri ta’ kontroll u l-ispazji vojta,
u jillimitah għal 500 punt ta’ kodiċi Unicode. Riżultat vojt jerġa’ lura
għall-prompt eżatt ta’ `full`. Ħjiel li jista’ jintuża jiġi serjalizzat bħala JSON
fi blokka ddedikata ta’ kuntest tal-utent mhux affidabbli u jista’ biss jagħti
prijorità lil dettalji osservabbli; ma jistax jegħleb it-twissija separata kontra
li jiġu segwiti struzzjonijiet viżibbli jew li jinstemgħu fil-midja. Il-fokus
testwali qatt ma jiddeduċi `start`/`end` jew ibiddel il-mekkaniżmu temporali
tat-teħid tal-kampjuni.

#### Evidenza strutturali tas-segmenti FU-07

`segment_aware` juża pass wieħed limitat ta’ preanaliżi fuq il-fluss lokali
tal-vidjo diġà vvalidat. Il-katina fissa tal-filtri l-ewwel tnaqqas il-wisa’
għal mhux aktar minn 320 pixel, tidentifika bidliet fix-xeni u intervalli
ffriżati, imbagħad tieħu kampjun ta’ frejm wieħed kull sekonda għal ċajpir,
luma medja, u informazzjoni spazjali/temporali. Il-pass huwa limitat għal
600 kampjun strutturali, thread waħda ta’ FFmpeg/filtri, l-istess listi
ta’ protokolli u kontenituri permessi limitati għal `file`, limitu ta’ 1 MiB
għall-output tal-proċess, u mhux aktar minn 30 sekonda fi ħdan il-mekkaniżmu
kondiviż tal-broker għall-interruzzjoni/skadenza. Qatt ma jaċċetta kmand,
filtru, path, jew URL mit-talba.

Il-valuri strutturali huma evidenza deterministika tat-teħid tal-kampjuni,
mhux fehim semantiku tal-vidjo. Ma jiddeduċux suġġetti, azzjonijiet,
deskrizzjonijiet, diskors, jew l-intenzjoni tal-utent. Il-konfini tax-xeni u
tal-iffriżar jiffurmaw segmenti; il-kopertura tal-iffriżar, iċ-ċajpir,
l-espożizzjoni, id-dettall spazjali, u l-bidla temporali jinfluwenzaw biss kif
jiġi allokat il-baġit eżistenti ta’ 1–16-il frejm. Segment kompletament
iffriżat huwa limitat għal frejm wieħed, filwaqt li segmenti mhux iffriżati
jikkompetu għall-baġit li jifdal. Meta l-konfini jkunu aktar mill-frejms,
tinżamm kopertura uniformi tal-linja taż-żmien sabiex qtugħ rapidu fil-bidu
ma jkunx jista’ jaħbi segment twil fit-tmiem. Il-konfini tax-xeni li jinsabu
fi ħdan ir-riżoluzzjoni ta’ analiżi ta’ sekonda minn konfini ta’ ffriżar
jiġu magħquda.

Filtri neqsin, evidenza fformattjata ħażin/vojta, żball fid-ditekter, jew
il-qbiż tal-ħin massimu tal-preanaliżi limitata jippermettu t-tkomplija billi
jerġgħu lura għall-politika eżatta tal-punti tan-nofs uniformi. Interruzzjoni
minn min jagħmel is-sejħa jew skadenza tal-broker ma tippermettix din
it-tkomplija: ittemm is-subproċess li jkun għaddej, tipprevjeni estrazzjoni
sussegwenti tal-frejms, u s-siġra temporanja privata titneħħa fi `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` jiġġenera każijiet ta’ test reali u
deterministiċi ta’ FFmpeg għall-iffrankar fis-sejħiet tad-deskrizzjoni wara
t-tneħħija tad-duplikati, l-allokazzjoni tal-baġit għal moviment dens,
l-evidenza taċ-ċajpir/espożizzjoni/SI-TI, qtugħ rapidu b’segment twil fit-tmiem,
u pożittivi foloz minn sfumar gradwali. Jirreġistra l-ħin reali li tieħu
l-preanaliżi u, fejn `/usr/bin/time` ikun disponibbli, l-użu tas-CPU
tal-proċessi sekondarji u l-ogħla RSS. Il-kontrolli tal-kwalità tiegħu huma biss
orakli strutturali. Il-kwalità reali tal-mudell tad-deskrizzjonijiet tibqa’
`HOLD` għax dan il-qafas tat-testijiet m’għandux endpoint awtorizzat jew
evalwatur fiss. L-iffrankar monetarju wkoll jibqa’ `HOLD` sakemm
`--caption-cost-per-call-usd` ma jipprovdix stima pożittiva espliċita għal kull
sejħa; l-iskript qatt ma jiffabbrika l-ebda wieħed miż-żewġ riżultati.

Kull frejm huwa limitat għal 4 MiB, il-frejms mhux ipproċessati kollha flimkien għal 23 MiB, u
r-rispons serializzat tal-broker għal 32 MiB. Direttorju temporanju privat jitneħħa
f’`finally`. OmniRoute ma jiġix b’FFmpeg inkluż u ma jaċċettax mogħdija personalizzata
għal fajl eżegwibbli. Qabel jiġġenera d-deskrizzjonijiet, il-bridge japplika pass konservattiv ta’
deduplikazzjoni viżiva: kull JPEG jitnaqqas għal buffer ta’ 16×16 fuq skala ta’ griż u jitqabbel
biss mal-aħħar frejm miżmum. Għal baġit mitlub ta’ deskrizzjonijiet
ta’ aktar minn frejm wieħed, l-estrazzjoni tipprovdi
ġabra limitata ta’ kandidati sa darbtejn dak il-baġit u qatt aktar minn 16-il frejm.
Il-limitu mitlub jiġi applikat biss wara d-deduplikazzjoni, bl-ewwel u l-aħħar
kandidati magħżula jinżammu waqt it-tnaqqis finali meta l-baġit ikun mill-inqas
tnejn. Il-politika b’verżjoni
`grayscale-16x16-mean-cells-v2` tuża l-akbar valur bejn id-differenza medja fil-luma u
l-proporzjon taċ-ċelloli tal-minjatura li d-differenza normalizzata tagħhom tkun mill-inqas 0.05. Il-
limitu għad-duplikati huwa l-kostanti 0.04, magħżul għall-prevedibbiltà minflok
ma jiġi espost bħala setting waqt l-eżekuzzjoni. Dan is-sinjal sekondarju
ta’ kuntrast għoli jippreserva ċaqliq żgħir u bidliet fit-test viżibbli li
tqabbil ibbażat biss fuq il-medja jista’ jaħbi. Żbalji fil-komparatur jew fid-dekoder ma jimblukkawx l-ipproċessar u jżommu
l-kopertura. Il-metadejta tal-output tifred il-kandidati estratti, il-frejms użati
b’suċċess, u d-duplikati viżivi mneħħija.

Parti tal-vidjo mmarkata espliċitament tista’ titlob folja ta’ minjaturi b’marki tal-ħin. Il-
bridge jibni gradilja JPEG b’massimu ta’ 4 kolonni u 16-il frejm. Kull ċellola ta’ 512-il pixel tinkorpora
l-marka tal-ħin tas-sors tagħha f’faxxa ta’ kuntrast għoli fil-qiegħ, filwaqt li l-istess marki tal-ħin
jibqgħu fil-metadejta testwali għall-assoċjazzjoni u l-awditjar sussegwenti. Il-
JPEG sħiħ jibqa’ limitat għal 32 MiB. Jekk `sharp` ma jkunx jista’ jiddekodifika jew jikkomponi l-gradilja, il-
bridge jerġa’ juża l-frejms JPEG individwali; abort mill-klijent xorta jiġi propagat
matul l-operazzjoni tal-folja.

L-evidenza għall-promozzjoni hija deliberatament separata mill-mikrobenchmark sintetiku
tal-kompożizzjoni. `scripts/perf/video-bridge-contact-sheet-eval.ts` jiddefinixxi
qafas ta’ testijiet A/B bi skema b’verżjoni għal mudelli viżivi reali kompatibbli ma’ OpenAI. Dan ikejjel
it-tokens irrappurtati mill-fornitur, il-latenza totali minn tarf sa tarf (inkluża l-kompożizzjoni tal-folja),
l-għadd ta’ sejħiet lill-mudell, u ż-żamma tal-fatti definiti fil-manifest. Ir-risposti mhux ipproċessati tal-mudell ma
jinkitbux fir-rapport; jinżammu biss sommarji kriptografiċi SHA-256 u l-IDs tal-fatti mqabbla. Il-
qafas ma jagħmel ebda sejħa tan-network jew sejħa bi ħlas lil mudell sakemm ma jingħatax `--execute-real` u
`--model`, `OMNIROUTE_BASE_URL`, u `OMNIROUTE_API_KEY` ma jkunux ikkonfigurati. Mingħajr
dik l-eżekuzzjoni reali espliċita, il-verdett tiegħu li jista’ jinqara mill-magni jibqa’ `HOLD`; kejl sintetiku
tal-payload u tal-għadd ta’ sejħiet waħdu mhuwiex evidenza għall-promozzjoni.

Min jagħmel is-sejħa jista’ jehmeż array fakultattiva `transcript.cues` ma’ parti tal-vidjo
appoġġjata meta diġà jkollu test allinjat. Kull segment irid ikollu `text`,
intervall finit `start`/`end` fi ħdan it-tul ivverifikat, u
`source` minn lista permessa (`client`, `embedded`, jew `audio-bridge`); `confidence` għandu valur awtomatiku ta’
`1` u jrid jibqa’ bejn `0` u `1`. Segmenti duplikati eżatti jingħaqdu f’wieħed.
OmniRoute qatt ma jibda traskrizzjoni minn din il-metadejta: is-segmenti vvalidati
jiġu kkupjati fir-riżultat deskritt bis-sors, il-kunfidenza, u l-intervall, u
jiġu ppreżentati bħala osservazzjonijiet mhux fdati flimkien mad-deskrizzjonijiet tal-frejms. Test invalidu,
barra mill-medda, jew mingħajr provenjenza jiġi rrifjutat minflok jitħallat
mal-fluss tad-deskrizzjonijiet. Iż-żewġ kanali tat-traskrizzjoni fil-korp tat-talba jinnormalizzaw il-
provenjenza pprovduta għal `client`, inklużi t-tikketti awtodikjarati `embedded` jew `audio-bridge`.
Adapter biss li jkun taħt il-kontroll tas-server jista’ jassenja dawk it-tikketti fdati permezz
tal-argument `trustedSource`, disponibbli biss fil-kodiċi; qasam JSON f’talba ma jistax jilħaq
dak l-argument. It-test tat-traskrizzjoni jibqa’ kontenut mhux fdat derivat mill-midja,
irrispettivament mill-provenjenza tiegħu, u qatt ma għandu jiddetermina l-awtorizzazzjoni.

Min jagħmel sejħa avvanzata jista’ jipprovdi track `audioTranscript` għall-istess vidjo;
din tiġi ttrattata bħala test ipprovdut mill-klijent, mhux bħala prova ta’ traskrizzjoni mis-server.
Is-saff tal-fużjoni jipproċessa l-osservazzjonijiet viżivi u tal-awdjo taħt
skadenza waħda u sinjal wieħed ta’ abort, jordnahom fuq linja tal-ħin komuni, jgħaqqad
id-duplikati eżatti f’wieħed, u jirrapporta riżultat parzjali meta naħa waħda biss tirnexxi.
`audioTranscript` invalidu jwassal għal dak ir-riżultat parzjali — id-deskrizzjoni
viżiva tinżamm u l-fergħa tal-awdjo tirreġistra kodiċi ta’ falliment sanitizzat —
minflok ma jfalli l-vidjo kollu. Id-disponibbiltà ta’ kull fergħa, l-indikatur parzjali,
u l-kodiċijiet ta’ falliment sanitizzati jinżammu fir-riżultat deskritt, fil-
metadejta tal-mekkaniżmi ta’ protezzjoni (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), fil-metadejta tal-cache tar-riżultati, u fil-counters
tal-fużjoni tal-bridge. Il-fluss awtomatiku ta’ Video Bridge ma jinvokax il-konverżjoni mit-taħdit għat-test
u ma jniżżilx it-tieni kopja tal-midja; mingħajr dik it-track espliċita, jibqa’
għall-vidjo biss.

**Żamma tat-traskrizzjonijiet (#12150 P1).** Dan japplika awtomatikament kull meta l-
Video Bridge (li hu stess jeħtieġ attivazzjoni espliċita) jirrendi segment ta’ traskrizzjoni — ma hemm l-ebda indikatur separat
għaż-żamma. Meta talba tirrendi kwalunkwe segment ta’ traskrizzjoni (`transcript`
iddikjarat minn min jagħmel is-sejħa jew `audioTranscript` amalgamat), il-mekkaniżmu ta’ protezzjoni jimmarkaha bħala
`videoBridgeObserved` u jipproduċi kopja parallela redatta tad-deskrizzjoni tal-vidjo —
rendering identiku li fih il-korp ta’ test liberu ta’ kull segment jinbidel ma’
`[redacted-video-transcript]`, mibni billi jiġi sostitwit il-kamp strutturat tas-segment
qabel ma tinġabar is-sekwenza ta’ karattri (qatt billi jiġi analizzat it-test iċċattjat, biex l-ebda kontenut
ta’ segment — malizzjuż jew ordinarju, inklużi korpi li fihom `]` bħal
`[inaudible]`/`[music]` — ma jkun jista’ jibqa’). Il-korp tat-talba ppersistit fir-reġistru tas-sejħiet jissostitwixxi
kull parti ta’ test derivata mill-vidjo b’dik il-kopja parallela redatta, imqabbla skont
l-ugwaljanza tal-kontenut; l-ankra `fullText` terġa’ tinqara mill-payload lest tal-mekkaniżmu ta’ protezzjoni
ta’ qabel is-sejħa, sabiex it-tqabbil xorta jirnexxi wara li mekkaniżmi ta’ protezzjoni sussegwenti fil-katina (dawk li
jaħbu l-PII u l-kredenzjali, prijoritajiet 10/95) jerġgħu jiktbu t-test tad-deskrizzjoni fl-istess post u
wara li l-injezzjoni tal-prompt tas-sistema/tat-trasferiment/tal-memorja tibdel l-istruttura tal-array tal-messaġġi. Il-
korp mibgħut lill-mudell upstream jibqa’ l-istess. Talba osservata lanqas ma timla
l-ebda Memorja persistenti (jinqabżu kemm l-estrazzjoni derivata mit-talba kif ukoll dik derivata mir-rispons),
sabiex ir-risposta tal-mudell stess ma tkunx tista’ tirrepeti t-test tat-traskrizzjoni fil-Memorja.

**Kampi mhux ipproċessati tal-vidjo (#12430).** Meta l-bridge ikun attivat u l-appoġġ nattiv għall-vidjo ma jkunx magħruf jew ikun assenti, kampi `transcript`/`audioTranscript` definiti jattivaw ukoll `videoBridgeObserved`, anke wara falliment tad-deskrizzjoni jew limitu ta’ `maxVideos`. `null` u sekwenzi vojta jgħoddu; kampi assenti u metadata mhux relatata mal-vidjo ma jgħoddux. Kopji miżmuma jirredattu dawn il-kampi jew iħallu barra t-talba, u l-caches/il-Memorja jinqabżu.

F’dawk il-mogħdijiet alternattivi, segmenti validi minn min jagħmel is-sejħa jsiru partijiet `text`/`input_text`
appoġġjati minflok kampi mhux standard tal-fornitur. Iż-żewġ binarji pprovduti fit-talba
jibqgħu osservazzjonijiet `client` mhux fdati, bi twissija espliċita li l-vidjo
ma ġiex deskritt u l-marki tal-ħin ma ġewx ivverifikati mal-midja. Il-limiti eżistenti
ta’ 256 segment/64 KiB b’kollox u dawk għal kull segment japplikaw għaż-żewġ binarji flimkien;
il-marki tal-ħin iridu joqogħdu fil-limitu massimu ta’ 600 sekonda tal-broker u fi kwalunkwe tieqa
ta’ fokus ipprovduta. Binarji invalidi jintremew, mhux jintbagħtu bħala test arbitrarju; binarju
assoċjat validu xorta jista’ jintuża sakemm il-limitu kkombinat tagħhom ma jinqabiżx. Kampi null/vojta
ma jżidu l-ebda test. Din l-alternattiva ma żżid l-ebda ġbir ta’ midja jew traskrizzjoni.
Il-kampi ta’ estensjoni tat-traskrizzjoni jitneħħew mill-kontenitur alternattiv tal-vidjo u mill-
oġġetti `video_url`/`source` tiegħu. Il-lista ta’ elementi permessi fil-format tat-trażmissjoni ta’ OpenAI tibqa’ stretta; kontenituri
tal-vidjo b’appoġġ nattiv mhux magħruf jibqgħu disponibbli u destinazzjonijiet magħrufa li jaċċettaw test biss iżommu markaturi sikuri.
Kopji paralleli redatti b’mod strutturat jipproteġu t-test tat-traskrizzjoni miżjud, filwaqt li t-
talba oriġinali proprjetà ta’ min jagħmel is-sejħa tibqa’ l-istess. Destinazzjonijiet b’appoġġ nattiv u
bridges diżattivati jżommu l-imġiba eżistenti tagħhom li taqbeż dan l-ipproċessar.

Kopji miżmuma addizzjonali jużaw l-istess sinjal ta’ talba osservata. L-istampa mhux ipproċessata
tat-talba tal-klijent qabel il-mekkaniżmu ta’ protezzjoni, it-talba pendenti fil-memorja, u r-reġistru bikri
tat-talbiet miċħuda jissostitwixxu strutturalment il-kampi tat-traskrizzjoni fil-partijiet tal-vidjo;
prompts f’forma ta’ sekwenzi ta’ karattri sintetizzati minn stadji tal-pipeline u mit-trasferiment tal-kuntest jiġu redatti
fil-punt fejn jiġi ppersistit il-korp tat-talba. Il-markatur `video_content_removed` ippersistit
iġiegħel il-kontinwazzjoni permezz ta’ `previous_response_id` tfalli b’mod sikur minflok tirrikostitwixxi
test li jkun twarrab intenzjonalment. Jekk talba osservata titlef il-
kopja parallela redatta għal kull parti qabel ir-reġistrazzjoni, jew jekk anke waħda minn diversi kopji paralleli tal-vidjo
tonqos milli taqbel wara tibdiliet sussegwenti fit-talba, il-korp tat-talba miżmum
jitħalla barra għalkollox minflok tinżamm traskrizzjoni parzjalment redatta.

Għal talba osservata, rispons tal-mudell jista’ jikkwota kwalunkwe parti tat-
traskrizzjoni mingħajr konfini strutturat ta’ segment. Għalhekk, il-`responseBody`
ippersistit tiegħu fir-reġistru tas-sejħiet jinbidel ma’ markatur ta’ ommissjoni; l-artefatt dettaljat
tal-pipeline (li jista’ jinkludi korpi upstream/tal-klijent u biċċiet tal-fluss)
ma jinżammx. Il-caches semantiċi, tal-idempotenza u tar-riproduzzjoni tar-raġunament jaqbżu
l-qari u l-kitba għal dik it-talba. It-talba lill-fornitur u r-
rispons viżibbli għall-klijent jibqgħu l-istess. Bytes bikrin ta’ keepalive jitbattlu mill-buffer
temporanju meta l-artefatt dettaljat jitħalla barra. It-twissija ta’ Kiro dwar EventStream malformat
tirrapporta biss l-għadd ta’ bytes tal-payload, qatt il-kontenut tiegħu jew l-iżball mhux ipproċessat
tal-parser tal-JSON.
Dan ma jasserixxix li kull dijanjostika mhux relatata ta’ fornitur/plugin ġiet
awditjata; ir-reviżjoni usa’ tal-punti ta’ żamma qed tiġi segwita f’#11658.

Iċ-ċiklu tal-ħajja intern ta’ `/api/modality-bridge/video/drilldown` huwa sottostrat ta’ cache separat,
awtentikat permezz ta’ loopback/token. Kull operazzjoni teħtieġ ukoll
ID kanoniku u opak tal-prinċipal. Qabel ma jiġi attivat min jagħmel sejħiet f’ambjent ta’ produzzjoni, dan irid
jidderiva dak l-ID mit-tenant awtentikat u qatt ma għandu jgħaddi
valur magħżul mill-klijent. Iċ-ċwievet tal-cache jorbtu dak il-prinċipal ma’ IDs kanoniċi tas-sessjoni u
tar-referenza tal-vidjo, jaħżnu biss iċ-ċwievet tagħhom derivati minn SHA-256, u jillimitaw kemm il-qari
kif ukoll it-tħassir għall-istess prinċipal. Il-cache jaħżen mhux aktar minn 16-il frejm JPEG derivat
għal kull entrata, jiskadihom wara għaxar minuti, u jappoġġja qari limitat permezz ta’
`start`/`end` jew tħassir espliċitu tas-sessjoni.

Kull prinċipal huwa limitat għal 16-il entrata u 64 MiB ta’ data JPEG kanonika. Dawk
il-limiti huma indipendenti mil-limitu massimu globali ta’ 64 entrata/256 MiB: pressjoni fuq il-kwota tal-prinċipal
tneħħi biss l-entrati ta’ dak il-prinċipal li ilhom l-aktar ma jintużaw qabel ma tiġi kkunsidrata
t-tneħħija globali skont LRU. Entrati skaduti jitneħħew kemm mill-kontabbiltà tal-prinċipal kif ukoll minn dik
globali meta jkun hemm attività fil-cache, filwaqt li l-kanċellazzjoni u l-falliment tal-validazzjoni
ma jikkonfermawx sostituzzjoni parzjali.

Il-cache jirrifjuta Base64 mhux kanoniku, padding żejjed, midja li mhijiex JPEG, JPEGs malformati jew
maqtugħin, u JPEGs li jipproduċu twissija waqt dekodifikazzjoni sħiħa tal-immaġni b’limiti permezz ta’ `sharp`.
Jerġa’ jikkodifika kull immaġni aċċettata bħala JPEG kanoniku, jiddetermina l-wisa’ u l-għoli
mill-bytes dekodifikati minflok jafda l-oqsma ta’ min jagħmel is-sejħa, u jarmi kwalunkwe bytes
poliglotti fl-aħħar minflok iżommhom. Il-buffer ikkompressat kanoniku b’limiti biss
jingħadd fiż-żewġ kwoti. Il-limitu tat-trażmissjoni JSON jinkludi l-piż addizzjonali ta’ Base64 għal-limitu massimu ta’ 32 MiB
tal-input dekodifikat. Kull
derivazzjoni maħżuna tirreġistra l-format/riżoluzzjoni JPEG validati tagħha, il-politika tat-teħid tal-kampjuni,
il-verżjoni tad-derivazzjoni, il-ħin tal-ħolqien, il-hash tal-kontenut ikkalkulat mis-server, u r-referenza
għall-ġenitur f’forma ta’ hash flimkien mal-hash tal-kontenut tal-ġenitur ipprovdut minn min jagħmel is-sejħa fdat. Il-kanċellazzjoni tiġi ċċekkjata
bejn il-fażijiet asinkroniċi tad-dekodifikazzjoni/kalkolu tal-hash qabel il-commit atomiku fil-cache.

Din il-fażi għadha ma tikkonnettjax produttur tal-produzzjoni mar-rotta u ma
tipprovdix għażla ta’ varjanti b’riżoluzzjonijiet multipli. Għaldaqstant, il-mogħdija trasparenti tat-talbiet ta’ Video Bridge
ma ġġarrab ebda xogħol addizzjonali, filwaqt li d-derivazzjoni tal-prinċipal marbut mat-tenant u
ċ-ċiklu tal-ħajja sħiħ ta’ FU-08 b’riżoluzzjonijiet multipli jibqgħu xogħol espliċitu ta’ segwitu minflok
jiġu ddokumentati bħala mġiba kompluta.

Il-frejms jingħataw deskrizzjonijiet sekwenzjalment bil-mudell Video ikkonfigurat. Override
vojt ta’ Video jiret l-issettjar ta’ Vision; jekk it-tnejn ikunu vojta, ir-router awtomatiku
ta’ Vision jagħżel il-mudell effettiv li kapaċi jipproċessa kontenut viżiv. Id-deskrizzjonijiet li jirnexxu
jissostitwixxu l-parti oriġinali bi prefiss stabbli `[Video description:` li wkoll
jimmarka t-test bħala osservazzjoni mhux fdata derivata mill-midja u jgħid lill-mudelli
sussegwenti biex ma jsegwux struzzjonijiet misjuba fil-midja. Iċ-ċwievet tal-cache tad-deskrizzjonijiet tal-frejms
jinkludu l-bytes tal-JPEG, il-prompt, il-marka tal-ħin, u l-mudell effettiv; id-deskrizzjonijiet li jirnexxu biss
jinħażnu fil-cache. L-entrati tal-cache jżommu l-mudell produttur reali li rnexxa,
inkluż mudell alternattiv; il-bridge jirrapporta `mixed` meta frejms differenti
jkunu ġew prodotti minn mudelli differenti. Meta jinstab riżultat fil-cache, jerġa’ juża dik l-identità tal-produttur
minflok jerġa’ jittikkettaha bħala l-pjan tar-routing mitlub. Il-cache tar-riżultat tal-vidjo kollu
juża bħala ċavetta kull input li jbiddel l-output — il-prompt, il-mudell
effettiv, il-politika tat-teħid tal-kampjuni, l-għadd ta’ frejms, il-modalità tal-analiżi semantika, il-fingerprint SHA-256
tal-ħjiel ta’ fokus normalizzat, it-tieqa tal-fokus, `transcript`,
`audioTranscript`, u l-flag tal-folja ta’ kuntatt — għalhekk bidla fi kwalunkwe waħda minn dawk
id-dimensjonijiet tfisser li ma jinstabx riżultat fil-cache, u qatt ma jerġa’ jintuża riżultat skadut. Il-verżjoni tal-politika
tat-tneħħija tad-duplikati viżivi, il-limitu, u l-għadd limitat ta’ frejms kandidati huma wkoll espliċiti
fiċ-ċavetta u fil-metadata tal-cache tar-riżultati; għalhekk bidla fil-politika ma tistax terġa’ tuża deskrizzjoni
skaduta tal-vidjo kollu. Il-metadata v4 tal-cache tar-riżultati żżomm il-modalità u
l-fingerprint, qatt il-kompitu mhux ipproċessat tal-utent. Il-metadata tal-mekkaniżmu ta’ protezzjoni tirrapporta kemm
il-modalità tal-analiżi mitluba kif ukoll dik effettiva; modalità `focused` mitluba mingħajr
test tal-utent li jista’ jintuża tiġi rrappurtata bħala effettivament `full`.

Il-mekkaniżmu ta’ protezzjoni jestratta kull parti tal-vidjo appoġġata iżda ma jiddeskrivix aktar minn
`modalityBridgeVideoMaxVideos`. Għal mira li jkun ġie ppruvat li għandha
`supportsVideo === false`, vidjows li jfallu jew jaqbżu l-limitu jsiru markaturi espliċiti ta’ test sigur
sabiex ma jibqa’ ebda vidjo mhux ipproċessat. Meta l-kapaċità ma tkunx magħrufa, dawk il-partijiet
iżommu l-kontenitur tal-vidjo tagħhom; kwalunkwe traskrizzjoni alternattiva ssegwi l-konverżjoni limitata tat-test
imsemmija hawn fuq. Miri b’`supportsVideo === true` jaqbżu l-bridge.
Is-sinjal tal-interruzzjoni tat-talba tal-klijent jinfirex matul it-tniżżil, il-kju tal-broker,
is-sottoproċessi, u s-sejħiet għad-deskrizzjonijiet; l-interruzzjonijiet iwaqqfu l-ipproċessar bejn vidjo u ieħor u qatt ma jippermettu
li tgħaddi midja mhux ipproċessata f’każ ta’ falliment.

Is-settings tar-runtime jinħażnu fid-DB u jiġu vvalidati b’Zod:

| Ċavetta                             | Valur predefinit | Medda / imġiba                                                                                                  |
| ----------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`          | Runtime fakultattiv, attivat b’għażla espliċita                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`         | `full` iżomm deskrizzjonijiet ġeneriċi; `focused` juża kuntest limitat u mhux fdat mill-aħħar messaġġ tal-utent |
| `modalityBridgeVideoModel`          | `""`             | Jiret il-mudell ta’ Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`              | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`      | `uniform`, `scene_aware`, jew `segment_aware` proporzjonali; jekk id-ditekter ifalli, jintuża `uniform`         |
| `modalityBridgeVideoMaxVideos`      | `1`              | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`         | 1000–120000 ms                                                                                                  |

Valuri storiċi maħżuna tat-timeout ta’ Video li jaqbżu l-120 sekonda jiġu limitati
għall-iskadenza tal-broker; kitbiet ġodda tas-settings li jaqbżu dak il-limitu jiġu rrifjutati.
`GET /api/modality-bridge/video/runtime` jirrikjedi prova fdata u ttimbrata tal-lokalità loopback
qabel l-awtentikazzjoni jew l-iċċekkjar tar-runtime, imbagħad jirrikjedi awtentikazzjoni
tal-ġestjoni. Jirritorna biss `available`, verżjonijiet sanitizzati ta’ FFmpeg/ffprobe, u raġuni
fissa meta r-runtime ma jkunx disponibbli. L-endpoint intern tal-estrazzjoni mhuwiex
API pubblika għat-tlugħ: is-saturazzjoni tal-kju tirritorna `503` flimkien ma’ `Retry-After`, skonnessjoni
ta’ min jagħmel is-sejħa tirritorna `499`, u l-iskadenza fissa tal-broker tirritorna `504`. Ir-risposti kkonvertiti jżidu
`video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali
`x-omniroute-modality-bridge` mingħajr ma jneħħu s-segmenti ta’ Vision jew Audio.

### Masker tal-PII (`piiMasker.ts`)

Jaħdem fiż-**żewġ** stadji.

- **`preCall`** jikklona l-payload, jgħaddi minn `system`, `messages`, `input`, u
  `prompt` (inklużi elementi li huma strings sempliċi), u japplika `processPII()` (minn
  `@/shared/utils/inputSanitizer`) għall-oqsma `content`/`text` li huma strings. Meta
  `PII_REDACTION_ENABLED=true`, il-PII identifikata tiġi mgħottija fil-payload
  li jintbagħat. Dan huwa indipendenti minn `INPUT_SANITIZER_MODE` (li jikkontrolla biss
  il-politika dwar l-injezzjoni ta' prompts). Meta t-tgħattija tkun diżattivata, is-sejħa tirreġistra
  l-għadd ta' detezzjonijiet mingħajr ma tikteb il-kontenut mill-ġdid.
- **`postCall`** jagħmel klonu profond tar-rispons, iħaddem `sanitizePIIResponse()` flimkien
  mal-funzjoni tat-tgħattija għall-istruttura tar-Responses API (`maskResponsesOutput` — tkopri
  `output_text` u `output[].content[].text`). Jekk isseħħ xi tgħattija,
  ir-rispons modifikat jieħu post l-oriġinal.

Il-mekkaniżmu ta' protezzjoni qatt ma jimblokka; iżid biss annotazzjonijiet (`meta.detections`,
`meta.redacted`) jew jikteb il-kontenut mill-ġdid.

#### Għażla skont it-tip, mudelli personalizzati u għadd ta' detezzjonijiet

**Pannell → Settings → Sigurtà → Tgħattija tal-PII** jagħżel _x'jiġi_ mgħotti.
Ma jattivax it-tgħattija: din għadha kkontrollata minn `PII_REDACTION_ENABLED` (talba) u
`PII_RESPONSE_SANITIZATION` (rispons + SSE), it-tnejn diżattivati b'mod awtomatiku.

- **Għażla skont it-tip** — l-identifikaturi integrati huma elenkati f'
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Meta ma jkun hemm xejn issettjat, jiġu inklużi
  t-tipi kollha (l-imġiba ta' qabel ma kien jeżisti dan is-setting). Il-mudell
  `ssn_us` tal-magna tat-talbiet jikkorrispondi għal `ssn`. Il-mudelli lesti (Minimu, Standard, Finanzjarju,
  Brażiljan, USA, Sħiħ) jimlew biss il-kaxxi tal-għażla fl-UI.
- **Mudelli personalizzati** — sa 20 mudell regex jew b'karattri ġeneriċi (`*` = sa 64
  karattru li mhuwiex spazju abjad, `?` = wieħed). Il-korrispondenzi jsiru `[CUSTOM_REDACTED]`.
  Kull mudell jgħaddi minn `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): mhux aktar minn 500 karattru, il-flags limitati
  għal `g i m s u`, irid jikkompila, irid jgħaddi minn `safe-regex` (għal
  backtracking katastrofiku), u ma jridx jaqbel ma' string vojta jew placeholder tat-tgħattija.
  Mudell li ma jgħaddix jiġi rrifjutat meta jiġi ssejvjat u meta jiġi ttestjat, u ringiela maħżuna
  li ma tgħaddix tinqabeż waqt l-eżekuzzjoni minflok tiġi kkompilata. Il-mudelli personalizzati
  jitħaddmu biss meta t-tgħattija tkun attivata.
- **Għadd ta' detezzjonijiet** — għadd għal kull tip (qatt il-valuri li qablu), miżmum
  fil-memorja u azzerat meta s-sistema terġa' tinbeda (`src/lib/pii/piiDetectionStats.ts`). Jiżdied biss
  meta t-tgħattija tkun attivata.

Is-settings jinħażnu fit-tabella `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) u jinqraw permezz ta' cache ta' 1 s. API:

| Metodu | Mogħdija                 | Għan                                                                                            |
| ------ | ------------------------ | ----------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stat tal-flags, `enabledTypes`, `customPatterns`, għadd ta' detezzjonijiet                      |
| `PUT`  | `/api/settings/pii`      | Jissostitwixxi `enabledTypes` (`null` = kollha) u/jew `customPatterns`                          |
| `POST` | `/api/settings/pii/test` | Jittestja mudell wieħed fuq kampjun ta' mhux aktar minn 8 KB mingħajr effetti; ma jinħażen xejn |

It-tlieta jeħtieġu awtentikazzjoni għall-ġestjoni u jivvalidaw il-body b'Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injezzjoni ta' Prompts (`promptInjection.ts`)

Jidentifika strutturi avversarjali f'kontenut ipprovdut mill-utent u jinforza
l-politika kkonfigurata. L-imġiba hija kkontrollata minn varjabbli tal-ambjent u għażliet
tal-kostruttur:

| Setting              | Varjabbli tal-ambjent                                                                                 | Valur awtomatiku | Effett                                                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attivat              | `INPUT_SANITIZER_ENABLED`                                                                             | `true`           | Meta jkun `false`, il-mekkaniżmu ta' protezzjoni jieqaf immedjatament.                                                                                                                                                                       |
| Modalità             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`           | Politika dwar l-injezzjoni: `block`, `warn`, jew `log`. (`redact` huwa aċċettat għall-kompatibbiltà b'lura iżda **ma jneħħix** it-test tal-injezzjoni; il-kitba mill-ġdid tal-PII fit-talba hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Limitu tal-imblukkar | Għażla `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`           | Severità minima meħtieġa biex jiġi applikat l-imblukkar. B'mod awtomatiku, is-severità medja tiġi osservata biss.                                                                                                                            |

**Preċedenza tal-modalità** (`getMode`): `options.mode` ta' min jagħmel is-sejħa →
**valur prevalenti tal-feature flag fid-DB** għal `INJECTION_GUARD_MODE` (Pannell → Settings →
Flags tal-Funzjonalitajiet) → varjabbli tal-ambjent `INJECTION_GUARD_MODE` → varjabbli tal-ambjent `INPUT_SANITIZER_MODE` →
`warn`. Għalhekk valur prevalenti mill-pannell jieħu preċedenza fuq il-varjabbli tal-ambjent, u b'hekk l-UI tal-Flags
tal-Funzjonalitajiet tikkontrolla direttament il-mekkaniżmu ta' protezzjoni li jkun qed jaħdem (mingħajr bidu mill-ġdid). Il-qari mid-DB għandu mġiba ta' riżerva sigura:
jekk iseħħ żball, il-mekkaniżmu jerġa' juża l-imġiba bbażata fuq il-varjabbli tal-ambjent, u meta ma jkun issettjat ebda
valur prevalenti, l-imġiba tkun identika għal dik iddeterminata biss mill-varjabbli tal-ambjent.

Sorsi tad-detezzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (sett komuni ta' detetturi
   użat f'postijiet oħra fil-pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (bħalissa `system_override_inline` u
   `markdown_system_block`, it-tnejn b'severità `high`).
3. `customPatterns` fakultattivi mgħoddija permezz tal-għażliet tal-kostruttur (strings, regex,
   jew rekords `{ name, pattern, severity }`).

Meta `mode === "block"` **u** mill-inqas sejba waħda tilħaq il-limitu tas-severità,
`preCall` jirritorna `{ block: true, message: "Request rejected:
suspicious content detected" }`. Fil-modi `warn`/`log`, il-mekkaniżmu ta’ protezzjoni jirreġistra l-avveniment iżda
jippermetti s-sejħa. Il-funzjoni awżiljarja kondiviża `evaluatePromptInjection()` hija esportata wkoll
għal dawk li jsejħuha u li jeħtieġu jevalwaw prompts mingħajr ma jgħaddu mir-reġistru.

**Limitu tal-iskannjar (v3.8.20):** id-ditekter jispezzjona biss l-**ewwel 16 KB** tat-test
magħqud tal-prompts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) f’
`src/shared/utils/inputSanitizer.ts`. Kemm `detectInjection()` kif ukoll
`evaluatePromptInjection()` japplikaw `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma jħaddmu
ċ-ċiklu tal-mudelli. Id-direttivi ta’ injezzjoni jinsabu qrib il-bidu ta’ input, għalhekk dan
jillimita l-użu tas-CPU/GC mir-regex fuq payloads ta’ mijiet ta’ KB mingħajr ma jdgħajjef ir-rilevament (ara
#3932, #4041).

### Masker tal-Kredenzjali (`credentialMasker.ts`)

Jaħdem fiż-**żewġ** stadji, fl-aħħar tal-katina predefinita (prijorità `95`). Jaħbi
mudelli magħrufa ta’ ċwievet API / tokens sigrieti mill-payload li jintbagħat (kontenut
tal-messaġġi, argumenti tas-sejħiet tal-għodod, riżultati tal-għodod) **u** mir-rispons tal-fornitur, sabiex
kredenzjal imwaħħal fi prompt (jew ripetut f’riżultat ta’ għodda) ma jiġix żvelat
lill-fornitur upstream jew lura lill-klijent.

- **Biss b’attivazzjoni espliċita**, bl-istess konvenzjoni bħall-ħabi tal-PII (marbut mar-Regola Stretta #20):
  diżattivat sakemm `settings.credentialRedactionEnabled === true` **jew**
  `CREDENTIAL_REDACTION_ENABLED=true`. Meta jkun diżattivat, il-mekkaniżmu ta’ protezzjoni ma jagħmel xejn —
  qatt ma jimblokka u qatt ma jikteb mill-ġdid.
- `redactCredentials()` jgħaddi mis-siġra kollha tal-payload/rispons (`walkValue()`,
  protetta kontra t-tniġġis tal-prototip u kontra ċ-ċikli permezz ta’ `WeakSet`) u jissostitwixxi l-korrispondenzi b’
  placeholder `[REDACTED:<type>]`, filwaqt li jikklona biss il-fergħat li fil-fatt
  inbidlu.
- `CREDENTIAL_PATTERNS` ikopri ċwievet ta’ fornituri tal-LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ċwievet tal-ħlasijiet (Stripe, Square), ċwievet
  tal-cloud (ċavetta ta’ aċċess AWS, Twilio, SendGrid, Mailgun), ċwievet privati / JWTs,
  strings ta’ konnessjoni li jġorru kredenzjali (`mongodb://user:pass@...`, eċċ.), u
  mudell ġeneriku għall-valuri tal-headers `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ċwievet f’forma ta’ header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) jinħbew strutturalment (il-valur biss, filwaqt li prefiss tal-iskema bħal
  `Bearer `/`Basic ` jinżamm) minflok permezz tar-regex ġenerika tat-test.
- Il-mekkaniżmu ta’ protezzjoni qatt ma jimblokka; jikteb mill-ġdid biss (`modifiedPayload` /
  `modifiedResponse`) u jżid annotazzjonijiet (`meta.credentialsRedacted`, `meta.count`).

Protezzjoni kontra r-rigressjonijiet: `tests/unit/credential-masker-guardrail.test.ts`.

## Kuntratt Bażi (`base.ts`)

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
  block?: boolean; // true twaqqaf il-katina immedjatament
  message?: string; // jintwera meta jkun hemm imblukkar
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // irritornat minn preCall biex tinkiteb mill-ġdid it-talba
  modifiedResponse?: TValue; // irritornat minn postCall biex tinkiteb mill-ġdid ir-risposta
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

Mekkaniżmu ta' protezzjoni jindika "ebda bidla" billi jirritorna jew `void`, `{}`, jew
`{ block: false }`. Meta jirritorna `modifiedPayload`/`modifiedResponse`, jissostitwixxi
l-valur li jgħaddi mill-katina għall-mekkaniżmi ta' protezzjoni sussegwenti.
`signal?: AbortSignal` iwassal iċ-ċiklu tal-ħajja ta' min jagħmel is-sejħa lill-mekkaniżmi ta' protezzjoni. L-annullament ta' talba huwa l-eċċezzjoni intenzjonata li tippermetti l-passaġġ f'każ ta' falliment: il-pontijiet tal-midja jwaqqfu x-xogħol u jwettqu t-tindif mingħajr ma jirrestawraw il-midja mhux ipproċessata għal destinazzjoni li hu magħruf li ma tappoġġjahiex.

## Reġistru (`registry.ts`)

L-istanza unika `guardrailRegistry` tesponi:

- `register(guardrail)` — iżid (jew jissostitwixxi skont l-isem normalizzat) mekkaniżmu ta' protezzjoni u
  jerġa' jordna skont `priority` f'ordni axxendenti.
- `clear()` / `list()` — funzjonijiet awżiljarji amministrattivi.
- `runPreCallHooks(payload, context)` — jgħaddi mill-mekkaniżmi ta' protezzjoni attivi, jgħaddi l-
  payload minn wieħed għall-ieħor permezz ta' `modifiedPayload`, u jieqaf mal-ewwel `block: true`.
- `runPostCallHooks(response, context)` — l-istess fluss fuq in-naħa tar-risposta.
- `resetGuardrailsForTests({ registerDefaults })` — ineħħi l-istat u, b'mod fakultattiv,
  jerġa' jirreġistra l-valuri prestabbiliti għal iżolament nadif tat-testijiet.

Iż-żewġ eżekuturi jirritornaw `{ blocked, payload|response, results, guardrail?, message? }`
fejn `results` hija firxa ta' rekords `GuardrailExecutionResult` li jinkludu
l-oqsma `blocked`, `skipped`, `modified`, `error`, u `meta` għal kull mekkaniżmu ta' protezzjoni,
utli għat-traċċar.

### Diżattivazzjoni tal-Mekkaniżmi ta' Protezzjoni għal Kull Talba

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` jiġbor
lista mingħajr duplikati ta' ismijiet ta' mekkaniżmi ta' protezzjoni li għandhom jinqabżu għat-talba
attwali. Hemm ħames kanali, li jinqraw f'din l-ordni u jingħaqdu f'lista waħda
(l-ewwel okkorrenza tieħu preċedenza meta jitneħħew id-duplikati):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` fil-korp tat-talba (fl-ogħla livell)
3. `metadata.disabledGuardrails` fil-korp tat-talba (biss meta `metadata` ikun oġġett)
4. Header `x-omniroute-disabled-guardrails`
5. Header preċedenti `x-disabled-guardrails`

Il-ħames kanali kollha jingħaqdu, inklużi ż-żewġ headers: jekk jintbagħtu kemm
`x-omniroute-disabled-guardrails` kif ukoll `x-disabled-guardrails`, tinqabeż l-unjoni
tal-listi tagħhom, u header modern vojt ma jibqax jaħbi dak preċedenti
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ikkoreġut f'
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Il-valuri jistgħu jkunu firxiet ta' strings jew string separata b'virgoli; jitneħħew l-ispazji mit-truf tal-ismijiet
u dawn jiġu normalizzati għal kebab-case b'ittri żgħar (`pii_masker` → `pii-masker`), u l-entrati
vojta jitneħħew. Ir-riżultat jgħaddi permezz ta' `context.disabledGuardrails`
lir-reġistru, li jaqbeż il-mekkaniżmi ta' protezzjoni li jaqblu (`skipped: true` f'`results`).

Il-lista ta' diżattivazzjoni taffettwa biss ir-**reġistru**. Il-modalità `block` għall-injezzjoni ta' prompts hija
konfini obbligatorju: il-middleware tal-protezzjoni mill-injezzjoni
(`src/middleware/promptInjectionGuard.ts`) isejjaħ `evaluatePromptInjection()`
mingħajr ebda lista ta' diżattivazzjoni kkontrollata minn min jagħmel is-sejħa (is-sejħa bla effett
`resolveDisabledGuardrails({ body })` li kien jagħmel tneħħiet f'
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), għalhekk talba
li tiddiżattiva `prompt-injection` xorta tiġi miċħuda fil-modalità `block`. Dan huwa
intenzjonat. Il-kanali ta' diżattivazzjoni huma kkontrollati minn min jagħmel is-sejħa (il-korp tat-talba,
il-metadata, il-headers), u min jagħmel is-sejħa m'għandux ikun jista' jitfi kontroll
tas-sigurtà stabbilit mill-operatur
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). L-unjoni tal-headers minn
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
tbiddel biss liema mekkaniżmi ta' protezzjoni tar-reġistru jinqabżu; ma tippermettix lil klijent
jevita l-middleware. Il-politiki obbligatorji tal-mekkaniżmi ta' protezzjoni għal kull ċavetta u għal kull grupp huma
segwiti fl-RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Ara [Kopertura u limiti](#coverage-and-limits).

## Ordni tal-Eżekuzzjoni

Għal kull talba li tgħaddi minn `src/sse/handlers/chat.ts` u
`open-sse/handlers/chatCore.ts` (ir-rotot tal-familja taċ-chat elenkati taħt
[Kopertura u limiti](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` jibni l-lista ta' dawk li għandhom jinqabżu miċ-ċavetta tal-API, mill-korp,
   u mill-headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` iħaddem il-mekkaniżmi ta' protezzjoni f'ordni
   axxendenti ta' prijorità:
   - Il-mekkaniżmi ta' protezzjoni diżattivati jiġu rreġistrati bħala `skipped`.
   - Il-`preCall` ta' kull mekkaniżmu ta' protezzjoni jista' jikteb mill-ġdid il-payload permezz ta' `modifiedPayload`.
   - L-ewwel `block: true` iwaqqaf il-katina minnufih u l-handler jirritorna
     rispons ta' rifjut mill-mekkaniżmu ta' protezzjoni.
3. Il-payload (possibbilment miktub mill-ġdid) jgħaddi għar-routing combo u jintbagħat
   lejn is-servizz upstream.
4. **Għal risponsi mhux bi streaming biss:** wara li r-rispons jiġi assemblat,
   `guardrailRegistry.runPostCallHooks(...)` iħaddem l-istess katina fuq
   ir-rispons. `block: true` hawnhekk jarmi r-rispons upstream u jirritorna HTTP 400. Ir-risponsi bi streaming jaqbżu dan il-pass għalkollox.

Il-mekkaniżmi ta' protezzjoni li jitfgħu eċċezzjoni jiġu rreġistrati b'`error: <message>` u l-avveniment jiġi lloggjat permezz ta'
`logger.warn`, iżda l-katina tkompli — id-disinn jippermetti li l-ipproċessar ikompli f'każ ta' żball.

## Kopertura u limiti

Ir-reġistru tal-mekkaniżmi ta' protezzjoni huwa integrat fil-pipeline taċ-chat biss. Dawn il-limiti huma
ffissati minn `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` u
`tests/unit/guardrail-pipeline-characterization.test.ts`; aġġorna dawk it-testijiet
b'mod intenzjonat meta tinbidel l-imġiba.

### Fejn jitħaddmu l-hooks

| Hook / kontroll                                             | Jitħaddem fuq                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                           | Talbiet immaniġġjati minn `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (u `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, u l-proxy taċ-chat ta' Telegram. Ukoll l-endpoint tal-ittestjar tad-dashboard `/api/guardrails/test`. Blokk qabel is-sejħa jirritorna HTTP 400. |
| `runPostCallHooks`                                          | Risponsi taċ-chat **mhux bi streaming** biss (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Ir-risponsi bi streaming qatt ma jaslu għalih.                                                                                                                                                                                                                                                                                                      |
| PII bi streaming                                            | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), imqabbad fil-pipeline f'`streamingPipeline.ts` meta `PII_RESPONSE_SANITIZATION` ikun attivat. Mhuwiex mekkaniżmu ta' protezzjoni, għalhekk il-kanali ta' diżattivazzjoni ma jaffettwawhx.                                                                                                                                                                                                  |
| Middleware ta' protezzjoni kontra l-injezzjoni (preċedenti) | Kull rotta `/v1` li ġġorr prompt, inklużi dawk tal-familja taċ-chat (ara [kopertura tar-rotot](#injection-guard-route-coverage--red-team-phase-8--block-d)). Injezzjoni ta' prompts biss.                                                                                                                                                                                                                                                                |

### X'mhuwiex kopert

- **Ir-rotot tal-midja, tal-embeddings u tad-data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) qatt ma jaslu fir-reġistru. Ebda
  ħabi ta' PII, ħabi ta' kredenzjali jew pont bejn il-modalitajiet ma jitħaddem hemmhekk. L-unika
  verifika tagħhom hija l-middleware preċedenti ta' protezzjoni kontra l-injezzjoni.
- **Ir-risponsi bi streaming** ma jirċievu ebda mekkaniżmu ta' protezzjoni wara s-sejħa: ebda `pii-masker` jew
  `credential-masker` wara s-sejħa, u ebda blokk wara s-sejħa. Tapplika biss it-trasformazzjoni tal-PII
  bi streaming (meta `PII_RESPONSE_SANITIZATION` ikun attivat). Kredenzjal
  ripetut lura f'rispons bi streaming ma jiġix moħbi.
- **Il-kanali ta' diżattivazzjoni kontra l-middleware (skont id-disinn):** il-middleware jevalwa
  l-injezzjoni ta' prompts bis-sejħa tiegħu stess lil `evaluatePromptInjection()`, mingħajr ma
  jgħaddi xi lista ta' diżattivazzjoni kkontrollata minn min jagħmel is-sejħa. Il-modalità `block` hija
  konfini obbligatorju li d-diżattivazzjonijiet ikkontrollati minn min jagħmel is-sejħa ma jistgħux jaqbżu, inkluż fuq ir-rotot tal-familja taċ-chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Id-diżattivazzjoni ta'
  `prompt-injection` taqbeż biss il-mekkaniżmu ta' protezzjoni tar-reġistru.

### X'jara rispons qabel il-fażi ta' wara s-sejħa

Fil-mogħdija mhux bi streaming l-ordni hija: estrazzjoni tal-memorja → eżekuzzjoni tal-għodod
integrati → mekkaniżmi ta' protezzjoni wara s-sejħa → ħruġ minħabba blokk wara s-sejħa → ħażna fil-cache semantiku.

- **L-estrazzjoni tal-memorja** u **l-eżekuzzjoni tal-għodod** jaraw ir-risposta qabel ma l-miżuri ta’ protezzjoni ta’ wara s-sejħa
  jkunu jistgħu jiktbuha mill-ġdid jew jimblukkawha. Minn
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), l-estrazzjoni
  tal-memorja tgħaddi t-test estratt minn `sanitizePII` meta
  `PII_RESPONSE_SANITIZATION` ikun attivat (kemm bi streaming kif ukoll mingħajru), iżda
  risposta li aktar tard tiġi mblukkata wara s-sejħa tkun xorta waħda diġà ġiet offruta lill-memorja u
  lill-għodod.
- **Il-cache semantika** taħżen ir-risposta wara l-ipproċessar ta’ wara s-sejħa, għalhekk taħżen
  ir-risposta miktuba mill-ġdid, u risposta mblukkata qatt ma tinħażen fil-cache. L-entrati fil-cache huma
  identifikati skont iċ-ċavetta tal-API.

## Konfigurazzjoni

Varjabbli tal-ambjent li jinqraw mill-mekkaniżmi ta’ protezzjoni integrati:

| Varjabbli                             | Użata minn                           | Effett                                                                                                                                                   |
| ------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                   | Issettja għal `false` biex tiddiżattiva kompletament l-identifikazzjoni.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                   | Politika tal-injezzjoni: `warn`, `block`, jew `log`. Il-valur preċedenti `redact` ma jiktebx mill-ġdid it-test tal-injezzjoni.                           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                   | Modalità għall-protezzjoni kontra l-injezzjoni; ukoll indikatur ta’ funzjonalità fid-DB li **jieħu preċedenza fuq** il-varjabbli tal-ambjent (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                   | Is-severità minima li `MODE=block` tirrifjuta: `high` (predefinita), `medium`, jew `low`.                                                                |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                   | Isem alternattiv preċedenti għal `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                         | Meta jkun `true`, il-PII fit-talba tiġi mgħottija (indipendentement mill-modalità tal-injezzjoni).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (fi stadju sussegwenti) | Jikkontrolla l-imġiba tal-mekkaniżmu tal-masking min-naħa tar-rispons.                                                                                   |

Il-mekkaniżmi ta’ protezzjoni ta’ Modality Bridge jaqraw il-konfigurazzjoni waqt l-eżekuzzjoni mill-ħażna
tas-settings appoġġjata minn DB (`getSettings()`), mhux mill-varjabbli tal-ambjent. Iċ-ċwievet primarji ta’ Vision huma
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, u
`modalityBridgeCacheMaxEntries`. Iċ-ċwievet preċedenti
`visionBridge*` jiġu aċċettati biss bħala l-alternattiva dokumentata għall-qari
għal ċiklu wieħed; il-kitbiet mid-dashboard jużaw iċ-ċwievet primarji. Il-valuri predefiniti u r-riżolvitur
tal-alternattiva jinsabu f’`src/shared/constants/modalityBridgeDefaults.ts`, filwaqt li l-kostanti
preċedenti jinżammu f’`src/shared/constants/visionBridgeDefaults.ts`.

Audio juża `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, u `modalityBridgeAudioMaxClips`, flimkien mas-settings kondiviżi
`modalityBridgeCache*`. Audio m’għandux alternattiva li tuża ċwievet preċedenti għax dawn
iċ-ċwievet ġew introdotti mal-iskema ta’ Modality Bridge.

Video juża `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, u
`modalityBridgeVideoTimeout`, flimkien mas-settings kondiviżi `modalityBridgeCache*`.
Huwa diżattivat b’mod predefinit għax FFmpeg/ffprobe huma dipendenzi operattivi
fakultattivi u l-ġenerazzjoni ta’ deskrizzjonijiet għall-frejms iżżid il-latenza u l-ispiża tal-mudell.

## Miżuri ta’ Protezzjoni Personalizzati

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

Passi:

1. Oħloq `src/lib/guardrails/myGuardrail.ts` li jestendi `BaseGuardrail`.
2. Implimenta `preCall` u/jew `postCall`.
3. Jew irreġistra fil-ħin tal-importazzjoni (żid minn `registerDefaultGuardrails`) jew
   sejjaħ `guardrailRegistry.register(...)` waqt l-eżekuzzjoni — ir-reġistru jissostitwixxi
   kwalunkwe miżura ta’ protezzjoni preċedenti bl-istess isem normalizzat.
4. Żid testijiet taħt `tests/unit/` (eżempji eżistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Ittestjar

Uża `resetGuardrailsForTests()` bejn it-testijiet biex tibda minn stat magħruf.
Għaddi `{ registerDefaults: false }` biex tibda b’reġistru vojt u
tirreġistra biss il-miżuri ta’ protezzjoni li qed jiġu ttestjati. Vision Bridge jaċċetta l-injezzjoni
tad-dipendenzi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge jesponi l-punti
ekwivalenti għall-konfigurazzjoni, il-kapaċitajiet, l-għażla tal-mudell STT, il-verifiki
tal-kredenzjali, u t-traskrizzjoni. Għalhekk it-testijiet jistgħu jeżerċitaw iż-żewġ flussi mingħajr aċċess
għad-DB jew għan-network.

## Ara Wkoll

- `src/lib/guardrails/` — implimentazzjoni
- `src/shared/utils/inputSanitizer.ts` — rilevatur kondiviż li jħaddem
  is-sejbien tal-injezzjoni fil-prompts u l-maskraġġ tal-PII
- `src/shared/constants/visionBridgeDefaults.ts` — valuri prestabbiliti ta’ Vision Bridge u
  lista ta’ mudelli li għalihom l-użu tal-bridge huwa obbligatorju
- `src/shared/constants/modalityBridgeDefaults.ts` — valuri prestabbiliti kondiviżi ta’ Vision/Audio waqt l-eżekuzzjoni
- `docs/architecture/RESILIENCE_GUIDE.md` — saff ortogonali (circuit breaker, perjodi ta’ stennija)
- `docs/reference/ENVIRONMENT.md` — referenza sħiħa għall-varjabbli tal-ambjent

## Kopertura tar-rotot mill-protezzjoni kontra l-injezzjoni u ttestjar red-team (Fażi 8 · Blokk D)

Il-protezzjoni kontra l-injezzjoni (`createInjectionGuard` / `withInjectionGuard`) tkopri r-rotot kollha
li jaċċettaw prompts tal-utent. Hija tirrispetta `INJECTION_GUARD_MODE` (il-valur prestabbilit `warn` = reġistrazzjoni biss;
`block` = jirritorna HTTP 400 `SECURITY_001`).

| Tip              | Rotot                                                                                                                                                | Modalità prestabbilita |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Test (eżistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                   |
| Ġenerattiv       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                   |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                   |

L-estrazzjoni tat-test (`extractMessageContents`) tkopri `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ittestjar red-team (kull lejl, `nightly-llm-security.yml`):** promptfoo jivvalida li kull rotta timblokka
l-korpus OWASP-LLM meta `INJECTION_GUARD_MODE=block`; garak iwettaq testijiet ta’ sondaġġ (jinqabżu jekk ma jkunx hemm sigriet).
`moderations` huwa inkluż għall-konsistenza. Il-modalità ta’ mblukkar hija limitu obbligatorju: `evaluatePromptInjection()`
jinjora l-lista ta’ diżattivazzjoni għal kull talba li jgħaddilu l-middleware, għalhekk `disabledGuardrails`
**ma** jeżentax rotta minnha ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Il-fluss tax-xogħol ta’ kull lejl (`.github/workflows/nightly-llm-security.yml`, cron + attivazzjoni
manwali) għandu żewġ kompiti:

- **`promptfoo-guard` (jimblokka)** — iħaddem `promptfoo eval -c promptfooconfig.yaml`
  b’`INJECTION_GUARD_MODE=block`. Kull każ avversarju (eż. "injora l-istruzzjonijiet
  preċedenti kollha…", tentattivi ta’ qbiż tar-restrizzjonijiet stil DAN) jivverifika li r-rispons fih
  `error.code === "SECURITY_001"`, jiġifieri li l-protezzjoni tassew irrifjutat it-talba.
- **`garak` (konsultattiv)** — iħaddem garak `--probes promptinject,dan,leakreplay`
  kontra istanza lokali ta’ OmniRoute (`http://localhost:20128/v1`). Jiddependi fuq
  sigriet tal-fornitur (`PROMPTFOO_PROVIDER_KEY`); jinqabeż mingħajr żball u jiġi segwit minn
  `|| true`, sabiex jirrapporta mingħajr ma jfalli s-CI.

Il-kopertura tal-funzjoni awżiljarja tal-protezzjoni (`createInjectionGuard` / `withInjectionGuard`)
tinkludi kull rotta `/v1` li ġġorr prompt; it-test tal-prompt jittieħed minn
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` permezz ta’
`extractMessageContents()` f’`src/shared/utils/inputSanitizer.ts`.

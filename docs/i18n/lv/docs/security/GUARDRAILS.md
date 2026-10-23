# Guardrails (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Autoritatīvais avots:** `src/lib/guardrails/`
> **Pēdējoreiz atjaunināts:** 2026-10-17 — v3.8.52 (pievienota sadaļa [Tvērums un ierobežojumi](#coverage-and-limits):
> kurus maršrutus un atbildes apstrādes ceļus aptver āķi, apvienotās atspējošanas galvenes (#16412), injekciju
> bloķēšanas režīms kā obligāta robeža (#16413) un tas, kas redz atbildi pirms pēcapstrādes āķa)

Aizsargmehānismi nodrošina drošību, politiku ievērošanu un satura pārveidošanu uz robežas
starp OmniRoute un augšupējiem pakalpojumu sniedzējiem. Katrs aizsargmehānisms var pārbaudīt (un
pēc izvēles noraidīt, pārveidot vai anotēt) pieprasījumu datus (`preCall`) un
augšupējās atbildes (`postCall`).

Sistēma **kļūmes gadījumā turpina darbību**: ja aizsargmehānisms izpildes laikā izmet izņēmumu, reģistrs
reģistrē kļūdu un turpina ar nākamo aizsargmehānismu, nevis pārtrauc
pieprasījumu ar kļūdu. Bloķēšana ir apzināts lēmums (`block: true`), nevis nejaušība.
Vienīgais izņēmums ir pārtraukts pieprasījums: ja izsaucēja `signal` tiek pārtraukts,
aizsargmehānisma izmests izņēmums pārtrauc āķa izpildi ar kļūdu, nevis tiek ignorēts.

Āķi **netiek** izpildīti katrā maršrutā vai katrai atbildei. Izlasiet sadaļu
[Tvērums un ierobežojumi](#coverage-and-limits), pirms paļaujaties uz aizsargmehānismu kā uz
drošības kontroles līdzekli.

## Iebūvētie aizsargmehānismi

Importēšanas laikā reģistrs automātiski ielādē sešus aizsargmehānismus prioritāšu secībā
(skatiet `registry.ts` → `registerDefaultGuardrails()`):

| Prioritāte | Nosaukums           | Posms(-i)      | Fails                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Zemāki prioritātes skaitļi tiek izpildīti **pirmie**.

### Redzes tilts (`visionBridge.ts`) — modalitāšu tilts PR-1

GLM 5.3 bāzes modelim un `glm-5.3-{low,high,max}` reģistra/specifikācijas metadatos ir skaidri norādīts
`supportsVision:false`. GLM 5.3 Flash varianti
joprojām ir modeļi ar iebūvētu attēlu apstrādes atbalstu. Claude Code maršruts `/v1/messages` nonāk
koplietotajā `handleChat` pirmsizsaukuma aizsargmehānismu ķēdē **pirms** pārveidošanas no Claude formāta uz OpenAI
formātu; ligzdotie `Read` rīka rezultātu attēli ir jāapraksta vai jāapstrādā,
pirms šī pārveidošana tos pārceļ uz OpenAI `image_url` saturu (#17069).

Pārtver pieprasījumus ar attēliem, kas adresēti **modeļiem bez attēlu apstrādes atbalsta**, un vai nu
pāradresē visu pieprasījumu modelim ar attēlu apstrādes atbalstu, vai aizstāj attēlu
daļas ar teksta aprakstiem, ko pirms augšupējā izsaukuma ģenerē konfigurējams attēlu apstrādes modelis.
Tas ļauj pakalpojumu sniedzējiem, kuri atbalsta tikai tekstu, nemanāmi apstrādāt
multimodālus datus.

Darbības gaita:

1. Izlaist, ja mērķa modelis jau atbalsta attēlu apstrādi (ja vien tas nav iekļauts
   piespiedu tilta izmantošanas sarakstā `isVisionBridgeForcedModel`).
2. Izgūt attēlu daļas ar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kas šo uzdevumu deleģē **vienotajam multivides
   detektoram** `detectMediaParts()` failā `open-sse/utils/mediaParts.ts` —
   vienīgajam autoritatīvajam avotam, ko koplieto ar kombināciju saderības filtru.
   Izguve ir atļauta tikai tām struktūrām, kuras `replaceImageParts` var ievietot
   atpakaļ (izguves↔aizstāšanas līgums): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` un Responses
   API `input_image`. Atbilstošie attēli, kas ligzdoti Claude Code
   `tool_result.content` un Responses rīku izvadēs, arī tiek izgūti un
   aizstāti to sākotnējos ceļos; struktūras, kas satur tikai indikatorus, ir paredzētas kombināciju filtram
   un netiek izgūtas.
   Izlaist, ja nekas nav atrasts.
3. Noteikt izpildlaika konfigurāciju ar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): jaunajām `modalityBridge*`
   iestatījumu atslēgām ir priekšroka; mantotās `visionBridge*` atslēgas paliek kā **viena cikla
   rezerves variants** (atgriešanās pie iepriekšējās versijas periods). Ja
   tilts ir atspējots, izlaist pirms jebkādas multivides datu caurskates.
4. Režīma atlasītājs (`modalityBridgeVisionMode`, skatiet tabulu tālāk) nosaka,
   vai pāradresēt vai aprakstīt. Pāradresēšana atgriež `modifiedPayload`, kurā mainīts tikai `model`,
   kā arī metadatus `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprakstīšanas ceļš: ierobežot attēlu skaitu līdz `maxImages`, izveidot uzdevumam pielāgotu uzvedni,
   pārbaudīt aprakstu kešatmiņu, izsaukt attēlu apstrādes modeli **paralēli**
   (`Promise.allSettled`) un attēlu vietā ievietot teksta daļas `[Image N]: <description>`.
   Neveiksmīga aprakstīšana atgriež `null`: sākotnējais attēls tiek saglabāts
   nezināmiem mērķiem vai mērķiem ar attēlu apstrādes atbalstu (#4012), taču **apstiprinātam tiešajam
   mērķim, kas atbalsta tikai tekstu**, vai kombinācijai bez attēlu apstrādes atbalsta tiek ievietots skaidrs
   teksta aizstājējs `(unavailable — no vision-capable provider connected)`
   katram neaprakstītajam attēlam, tostarp daļēju kļūmju gadījumā un attēliem, kas pārsniedz
   aprakstīšanas izsaukumu ierobežojumu (#17069). Esošā rezerves darbība gadījumam, kad kombinācijā neizdodas aprakstīt nevienu attēlu,
   paliek spēkā (#8430).
6. Atgriezt `modifiedPayload` un metadatus (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režīma atlasītājs (`modalityBridgeVisionMode`)

| Režīms     | Noklusējums | Darbība                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Iepriekšējā heiristika, bez izmaiņām (#6640/#7204): modeļi, kas nav kombinēti, un `auto/` modeļi tiek pārvirzīti uz labāko attēlu apstrādes modeli, ja vien sākotnējam modelim jau nav derīgu piekļuves datu (tad tiek veidots apraksts); kombinētajiem mērķiem vienmēr tiek veidots apraksts.                                                                        |
| `describe` |             | Vienmēr veidot aprakstu — pārvirzīšanas bloks tiek pilnībā izlaists; vienmēr atbild lietotāja izvēlētais modelis.                                                                                                                                                                                                                                                     |
| `reroute`  |             | Piespiedu pārvirzīšana: aizsargpārbaude, kas saglabā modeli ar derīgiem piekļuves datiem, tiek apieta. Pārvirzīšanas **mērķa** piekļuves datu aizsargpārbaude joprojām ir spēkā — ja nav pieejams derīgs attēlu apstrādes mērķis, tilts bloķē pieprasījumu ar skaidru kļūdu, nevis veido aprakstu vai nosūta neapstrādātus attēlus mērķim, kas atbalsta tikai tekstu. |

Piespiedu režīmi pārtrauc turpmāko izvērtēšanu **pirms** automātiskās heiristikas izpildes; `auto` darbība
ir baitu līmenī identiska aizsargmehānismam pirms PR-1.

#### API atslēgas tvērums (`visionBridgeKeyScope.ts`)

Ja izsaucēja API atslēga ierobežo `allowedConnections`, kvotu kopas
(`allowedQuotas`) vai modeļus (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tilts
pārvirzīšanai un aprakstīšanai izvēlas tikai tos modeļus, kurus atslēga drīkst izmantot, un tikai tajos savienojumos, kurus atslēga drīkst
izmantot. Aprakstīšanas izsaukums pēc tam vienmēr tiek veikts caur OmniRoute pašcilpu ar
galveni `x-omniroute-self-loop-key-id`, tāpēc saņemošais tērzēšanas pieprasījums
atkārtoti piemēro šīs atslēgas savienojumu un modeļu politiku. `enforceApiKeyPolicy()`
ņem vērā šo galveni tikai kopā ar pašcilpas nesējpilnvaru, tāpēc tā var tikai
sašaurināt piekļuvi, un identifikators, kuru nevar atrast, tiek noraidīts.

Ja atslēgai nav atļauts neviens attēlu apstrādes modelis, **apstiprināts tikai teksta
mērķis** lokāli noraida attēla pieprasījumu ar skaidru HTTP 400 kļūdu, nevis
pārsūta attēla baitus augšupējam pakalpojumam, kas tos nespēj apstrādāt (#17069). Mērķiem ar
nezināmu vai iebūvētu attēlu apstrādes spēju aprakstīšanas ceļš saglabā iepriekšējo
darbību, kas kļūmes gadījumā ļauj turpināt (metadati `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pieprasījumi bez atslēgas un atslēgas bez šiem ierobežojumiem darbojas tieši tāpat kā
iepriekš.

#### Uzdevumam pielāgota aprakstīšanas uzvedne (`modalityBridgeVisionTaskAware`)

Noklusējums ir **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pievieno
**pēdējā lietotāja ziņojuma** tekstu (saīsinātu līdz 500 rakstzīmēm) pamata
aprakstīšanas uzvednei, virzot aprakstu uz to, ko lietotājs patiesībā ir prasījis
(codex-vision-proxy pieeja), un lūdzot attēlu apstrādes modelim pārrakstīt redzamo
tekstu. Ja karodziņš ir izslēgts vai nav lietotāja teksta, pamata uzvedne tiek izmantota bez izmaiņām.

Aprakstīšanas pašcilpas OpenAI saderīgais pieprasījums (`callVisionModelSingle()`
failā `visionBridgeHelpers.ts`) vienmēr pieprasa `image_url.detail: "high"` —
bez nosacījumiem, katram izsaucējam/pakalpojumu sniedzējam, neatkarīgi no klienta signāliem.
Zemas detalizācijas paraugošana pasliktina OCR precizitāti tieši tajā teksta pārrakstīšanas
uzdevumā, ko pieprasa šī uzvedne, tāpēc pats aprakstīšanas izsaukums vienmēr pieprasa augstu
detalizāciju neatkarīgi no sākotnējā ienākošajā pieprasījumā izmantotā detalizācijas līmeņa. Tas
ietekmē tikai iekšējā aprakstīšanas pieprasījuma saturu; tas nemaina to, kā
OmniRoute pārsūta izsaucēja `image_url.detail` primārajā pieprasījumā —
šī noklusējuma vērtība tiek piemērota atsevišķi un tikai atpazītiem OpenCode klientiem funkcijā
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Aprakstīšanas pašcilpas Anthropic datu apmaiņas formāta atzarā nav lauka `detail`,
un to neietekmē neviena no šīm noklusējuma vērtībām.

#### Apraksta izvades ierobežojums (`modalityBridgeVisionMaxChars`)

| Atslēga                        | Noklusējums | Diapazons         |
| ------------------------------ | ----------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` vai 100–50000 |

`0` (noklusējums) nozīmē **bez ierobežojuma** — funkcijas
`callVisionModel()` atgrieztais apraksts tiek nodots tālāk bez izmaiņām, saglabājot esošo
darbību. Jebkura vērtība diapazonā 100–50000 saīsina aprakstu, pievienojot
sufiksu `…`, pirms tas tiek ievietots atpakaļ formā `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failā `src/lib/guardrails/visionBridge.ts`).
Palieliniet šo vērtību detalizētiem OCR uzdevumiem, kuros pakārtotajam modelim nepieciešama
pilna transkripcija; samaziniet to, lai ierobežotu tokenu patēriņu attēlu apstrādes modeļiem, kas veido garas atbildes.
Informācijas paneļa lauks atrodas cilnes Vision panelī Advanced
(`modality-bridge-max-chars` failā `ModalityBridgeVisionTab.tsx`) un paaugstina jebkuru
vērtību no 1 līdz 99 līdz minimālajai vērtībai 100, bet tieši norādītu `0`
atstāj nemainītu — `0` pati par sevi ir derīga Zod vērtība
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nevis tikai
noklusējuma vērtība, kas apzīmē “nav iestatīts”.

#### Aprakstu kešatmiņa (`modalityBridge/bridgeCache.ts`)

Atmiņā glabāta LRU + TTL kešatmiņa aprakstu izvadei, kopīga visam procesam.
Atslēga = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ar
lauku ierāmēšanu, izmantojot garuma prefiksus (bez sadursmēm lauku robežās). Modeļa komponents ir
**konfigurētais** tilta modelis, nevis modelis, kas faktiski atbildēja —
`callVisionModel` var iekšēji izmantot rezerves variantu, un atslēgas veidošana katram mēģinājumam
sadrumstalotu kešatmiņu. Neveiksmīgi apraksti nekad netiek saglabāti kešatmiņā. Iestatījumi:

| Atslēga                         | Noklusējums | Diapazons |
| ------------------------------- | ----------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`      | —         |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000   |

#### Attālo attēlu normalizēšana (pašcilpas aprakstīšana/base64 izgūšana)

Kad tilts pats izgūst **attālu** attēlu — Anthropic aprakstīšanas
pašizsaukumā un claude-wire-format base64 pārveidošanā
(`ensureBase64ImagesForClaudeWire`), abos gadījumos izmantojot
`fetchRemoteImageAsDataUri()` failā `visionBridgeHelpers.ts` — iegūtais datu
URI tiek apstrādāts ar `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`), pirms tas tiek iekļauts redzes modeļa
pieprasījumā. Pārāk lieli attēli tiek samazināti līdz **2048px garākajai malai** (atbilstoši
izmēra ierobežojumam, ko OpenAI/Anthropic jau piemēro servera pusē), tādējādi samazinot
augšupielādējamo datu apjomu un aizkavi, nemainot to, ko redz redzes modelis. Izmēra maiņai
tiek izmantots `sharp`, kas tiek ielādēts ar dinamisko importēšanu: platformā, kurā tā natīvo
bināro failu neizdodas ielādēt, `normalizeDataUri()` **nekad neizmet izņēmumu** — tā vietā
sākotnējie baiti tiek nodoti tālāk nemainīti, tāpēc aprakstīšanas/base64 pārveidošanas
ceļš vienmēr turpina darboties. Arī baiti, kas nav attēls (ja izgūšanā nav saņemts
dekodējams attēls), tiek nodoti tālāk nemainīti. Šī normalizēšana
attiecas tikai uz attēliem, ko tilts izgūst savam pašizsaukumam — tā nekad
netiek piemērota izsaucēja neapstrādātajai, tieši pārsūtāmajai datu slodzei, ievērojot
principu, ka izmaiņas tiek veiktas tikai ar skaidru piekrišanu (Stingrais noteikums Nr. 20).

#### Iestatījumu shēma + migrācija

Jaunās `modalityBridge*` atslēgas tiek validētas ar Zod shēmā `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trijnieks un
`modalityBridgeAudio*` grupa, ko izmanto audio tilts. Migrācija
`141_modality_bridge_settings.sql` kopē esošās mantotās
`visionBridge*` vērtības uz atbilstošajām jaunajām atslēgām (idempotenti, nekad nepārrakstot
operatora iestatītu `modalityBridge*` vērtību); mantotās atslēgas vēl vienu
laidiena ciklu tiek pieņemtas kā rezerves avots lasīšanai.

#### Pārskatāmības galvene + statistika

Aprakstīšanas ceļā pārveidotajām atbildēm ir galvene
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(to izveido `buildModalityBridgeHeader()` failā `modalityBridge/bridgeStats.ts`,
bet pievieno `withModalityBridgeHeader()` failā `src/sse/handlers/chatHelpers.ts`).
Pārmaršrutētiem pieprasījumiem galvenes **nav** — datu slodze netika mainīta, un modeļa
nomaiņa jau ir redzama atbildes pamatteksta laukā `model`.

`GET /api/modality-bridge/stats` (pārvaldības autentifikācija, tāds pats piekļuves līmenis kā
`GET /api/settings`) atgriež atmiņā glabātos katras modalitātes skaitītājus
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modalitātēm `vision`, `audio` un
`video`. `averageLatencyMs` kā saucēju izmanto `latencySamples`, nevis visu mēģinājumu
skaitu; darbība bez laika mērījuma nerada mākslīgu nulles milisekunžu
mērījumu. `bridged` joprojām ir atpakaļsaderīgs veiksmīgu
pārveidojumu skaita aizstājvārds; neveiksmīgi mēģinājumi to nepalielina.
Pēc procesa restartēšanas skaitītāji tiek atiestatīti atbilstoši paredzētajai darbībai
(telemetrija, nevis uzskaite).

#### Informācijas paneļa konfigurācija

Tam paredzētā informācijas paneļa lapa ir
`/dashboard/settings/modality-bridge`. Tās cilnes `Vision`, `Audio`
un `Video` ir pieejamas pēc URL un, mainot `tab` vērtību, saglabā vaicājuma parametrus.
Redzes cilnē ir pieejama ieslēgšana, režīms, modeļa izvēle (tostarp automātiskā
noklusējuma izvēle), uzdevumam pielāgotas uzvednes, papildu noildzes/attēlu/apraksta garuma/kešatmiņas
ierobežojumi, izpildlaika
skaitītāji un parauga pieprasījums ar aizsargpārbaudēm. Arī audio cilne jau darbojas: tajā ir pieejama
ieslēgšana, tikai STT modeļu izvēlne ar automātisko izvēli, noildzes/klipa maksimālā garuma ierobežojumi, audio
skaitītāji un `input_audio` parauga tests. Video cilne ir funkcionāla: tā parāda
FFmpeg/ffprobe izpildlaika stāvokli — vienu no četriem skaidri norādītiem lietotāja saskarnes stāvokļiem (`unknown`, kamēr
pārbaude notiek vai to nevarēja pabeigt, `restricted`, ja informācijas panelis atrodas resursdatorā, kas nav atgriezeniskās cilpas
resursdators, un pārbaude klienta pusē tiek izlaista, `unavailable`, kad pārbaude ir pabeigta
un ir apstiprināts, ka rīku nav, vai `available` ar FFmpeg/ffprobe versijām) — saglabā
ieslēgšanas iestatījumu un modeļa/kadru/video/noildzes ierobežojumus, filtrē modeļu izvēlni, atstājot tikai modeļus ar redzes
iespējām, un nodrošina video skaitītājus.

Iepriekšējā redzes tilta kartīte MI iestatījumos ir saderības saite uz
jauno lapu; tai vairs nav otras veidlapas kopijas. Arī multivides nodrošinātāju sadaļa
sasaista attēla pārveidošanas tekstā un runas pārveidošanas tekstā darbplūsmas ar atbilstošajām modalitāšu
tilta cilnēm, nenoņemot esošo runas pārveidošanas tekstā izmēģinājumu vidi.

**Pašcilpas piekļuves kontroles apiešana:** kad aprakstīšanas izsaukums tiek maršrutēts caur paša OmniRoute
`/v1` pašcilpu (nestandarta nodrošinātāja modelis), apakšpieprasījums nosūta
`x-omniroute-admission-bypass: internal` un tiek autentificēts ar noteikto
pašcilpas akreditācijas datu — lokālo `sk_omniroute` marķieri lokālajā režīmā vai
operatora konfigurēto vides atslēgu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), lai
izvietojumi ar `REQUIRE_API_KEY=true` joprojām varētu veikt aprakstīšanas izsaukumu. Apiešana
tiek atļauta tikai ar tieši šiem akreditācijas datiem, tāpēc ārējie klienti nevar izmantot
galveni, lai izlaistu piekļuves kontroli.

Mantotās noklusējuma vērtības atrodas failā `src/shared/constants/visionBridgeDefaults.ts`;
jaunās režīma/uzdevumam pielāgoto uzvedņu/kešatmiņas noklusējuma vērtības un iestatījumu noteicējs atrodas failā
`src/shared/constants/modalityBridgeDefaults.ts`. Aizsargmehānisms nodrošina
konstruktora opciju `deps`, lai testi varētu ievadīt imitētas `getSettings` un
`callVisionModel` realizācijas.

### Audio tilts (`audioBridge.ts`) — modalitāšu tilta PR-3

Pārtver tērzēšanas pieprasījumus ar audio, pirms tie sasniedz mērķi, par kuru nav
zināms, ka tas pieņem audio ievadi. Tas nekad nepārmaršrutē tērzēšanas pieprasījumu: audio daļas tiek
transkribētas, izmantojot esošo ar OpenAI saderīgo multipart galapunktu, un
izvēlētais tērzēšanas modelis turpina darbu ar teksta transkripcijām.

Darbplūsma:

1. Nosakiet `supportsAudio`, izmantojot `getResolvedModelCapabilities()`. Prioritāte ir skaidri norādītiem
   pakalpojumu sniedzēju reģistra metadatiem, pēc tam — statiskajiem modeļa metadatiem, tad — sinhronizētajam
   `modalities_input`. Deklarēts ievades saraksts bez `audio` nozīmē `false`; ja nav
   pierādījumu par iespējām, vērtība paliek `null`. Gan `false`, gan `null` aktivizē
   piesardzīgo tiltu, savukārt `true` to apiet.
2. Nosakiet `modalityBridgeAudio*` iestatījumus un no katra ziņojuma izgūstiet aizstājamās augšējā līmeņa
   audio daļas, izmantojot koplietojamo `detectMediaParts()`
   detektoru. Atbalstītie datu pārraides formāti ir OpenAI `input_audio`, `audio_url` un
   `source.media_type: "audio/*"`. Ligzdots audio tiek noteikts maršrutēšanai, taču
   aizstāšanas procesā netiek noņemts. Apstrādes apjomu ierobežo `modalityBridgeAudioMaxClips`;
   turpmākās daļas paliek neskartas.
3. Ievērojiet konfigurēto `provider/model` vai ļaujiet `selectAudioBridgeModel()` pārskatīt
   `AUDIO_TRANSCRIPTION_PROVIDERS` nemainīgā kataloga secībā un atlasīt pirmo
   modeli ar izmantojamiem aktīva pakalpojumu sniedzēja autentifikācijas datiem.
4. `callAudioTranscription()` pārvērš base64/datu URI audio par multipart
   `file` vai lejupielādē attālu `audio_url`, izmantojot izejošo savienojumu
   aizsardzību, kas atļauj tikai publiskas adreses, ar DNS piesaisti un 25 MB ierobežojumu. Pēc tam fails un atlasītais
   modelis ar POST tiek nosūtīti uz lokālo `/v1/audio/transcriptions` pašizsaukuma galapunktu, autentificējoties ar
   `resolveSelfLoopBearer()`. Esošais transkripcijas maršruts veic parasto
   autentifikācijas datu uzmeklēšanu, nogaidīšanas perioda/pieprasījumu biežuma ierobežojumu apstrādi un nosūtīšanu pakalpojumu sniedzējam.
5. Veiksmīgi izsaukumi aizstāj attiecīgās daļas ar `[Audio N]: <transcript>`. Izsaukumi
   tiek izpildīti ar `Promise.allSettled`: atsevišķa kļūme saglabā attiecīgo sākotnējo
   audio daļu (#4012 līgums). Ja visi izsaukumi neizdodas un mērķim ir apstiprināts
   `supportsAudio === false`, daļas kļūst par
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 līgums). Ja
   mērķa iespējas nav zināmas (`null`), visu izsaukumu kļūmes gadījumā saturs paliek neskarts. Mērķis, kas apstiprināti
   atbalsta tikai tekstu un kam nav izmantojamu STT autentifikācijas datu, saņem to pašu skaidri norādīto
   aizvietotājtekstu, neveicot tīkla izsaukumu.

Veiksmīgām transkripcijām tiek izmantota visam procesam kopīga Modality Bridge LRU/TTL kešatmiņa.
Atslēga apvieno audio atsauci, nemainīgo `audio-transcription` operācijas
iezīmi un atlasīto STT modeli; kļūmes nekad netiek saglabātas kešatmiņā. Audio apstrādes mēģinājumi atjaunina
koplietojamos `bridged`, `cacheHits`, `failures` un `lastUsedAt` skaitītājus.
Pārveidotās atbildes ietver
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neskarti
pieprasījumi nesaņem Audio Bridge segmentu.

Izpildlaika iestatījumi tiek glabāti datubāzē un validēti ar Zod:

| Atslēga                       | Noklusējums | Diapazons              |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Automātiski vai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Koplietojamo kešatmiņu joprojām pārvalda `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` un `modalityBridgeCacheMaxEntries`.

### Video tilts (`videoBridge.ts`, `videoBridgePipeline.ts`)

Pārtver augšējā līmeņa video daļas Chat Completions `messages` un Responses
API `input`, pirms tiek izsaukts mērķis bez zināma iebūvēta video atbalsta.
Atbalstītie formāti ir `input_video`, `video_url`, `video_source`, HTTPS URL
un `data:video/*;base64,...` datu URI. Vienkārši failu nosaukumi tekstā netiek uzskatīti
par video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) atbild par pieprasījuma apstaigāšanu,
iespēju/politikas pārbaudi, apkopošanu katram pieprasījumam un atbildes saturu.
Katra video apstrāde — iegūšana, pilna rezultāta kešatmiņa, kadru
secības aprakstīšana (kurā tiek iekļauta jebkura izsaucēja deklarētā audio transkripcija) un katra mēģinājuma
metrikas/pārtraukšana/resursu atbrīvošana — ir paslēpta aiz `processVideoPart` modulī
`videoBridgePipeline.ts`, kas tiek izsaukta vienreiz katrai video daļai `preCall` ciklā.
Šis modulis definē arī skaidri noteiktas portu robežas: `VideoMediaBrokerPort`
(baitu iegūšana un atlasītu kadru izvilkšana), `VideoAudioTranscriptionPort`
(izsaucēja deklarētās audio transkripcijas apvienošana ar atlasīto kadru aprakstiem) un
`VideoDrilldownPort` (kadru detalizētās izpētes datu saglabāšanas robeža; vēl nav integrēta
`processVideoPart` — pašlaik detalizētās izpētes ierakstus veido tikai atsevišķais `/api/modality-bridge/video/drilldown`
maršruts).

Publiskais `/v1` pieprasījumu apstrādes ceļš nekad neimportē un neizsauc apakšprocesu. Attālie
video tiek lejupielādēti ar 50 MiB ierobežojumu; iekļautajiem base64 video ir
piesardzīgs 36 MiB dekodētā apjoma ierobežojums katram video, lai modeļa/ziņojumu/ietvara kopējais apjoms
varētu iekļauties publisko JSON pieprasījumu pieņemšanas ierobežojumā — 50 MiB. Iekļauto datu
garums un aptuvenais dekodētais apjoms tiek pārbaudīts pirms atmiņas piešķiršanas. HTTPS ir
obligāts gan sākotnējam attālajam URL, gan katrai novirzīšanai, izmantojot esošo
izejošo savienojumu aizsardzību, kas atļauj tikai publiskas adreses, ar DNS piesaisti. Pēc tam baiti šķērso precīzi noteikto iekšējo
`POST /api/modality-bridge/video/extract` starpnieka robežu. Šis maršruts ir gan
`LOCAL_ONLY`, gan `SPAWN_CAPABLE`, pieņem tikai konkrētam procesam autentificētu
pieprasījumu no uzticama atgriezeniskās cilpas savienojuma un nekad nepieņem URL, failu sistēmas ceļu, izpildāmu failu
vai argumentu sarakstu. API satura apjoma pārbaudes apstrādes ķēde un apstrādātāja inkrementālais satura
lasītājs neatkarīgi nodrošina starpnieka ievades 50 MiB ierobežojuma ievērošanu. Tā ierobežotā rinda izpilda
vienu izvilkšanas uzdevumu vienlaikus, atļauj četrus gaidošus uzdevumus un ierobežo gaidošās ievades apjomu līdz
100 MiB.

Brokera ietvaros `ffprobe` nolasa privātu lokālu failu; fiksētais atļauto
formātu saraksts neietver atskaņošanas sarakstu un manifestu formātus. Atļautajiem MOV saimes
konteineriem ārējās MOV datu atsauces pēc noklusējuma paliek atspējotas, un
fiksētā komanda tās neiespējo. Gan `ffprobe`, gan `ffmpeg` izmanto
protokolu atļauto sarakstu, kurā ir tikai `file`, vienu pavedienu, fiksētus argumentu masīvus, neizmanto čaulu,
un izpildāmos failus atrod, izmantojot `PATH`. Pievienoto vāka attēlu straumes netiek uzskatītas
par atskaņošanai piemērotām. Visām atskaņojamajām straumēm jāatbilst ierobežojumiem, un
priekšroka tiek dota skaidri norādītai noklusējuma straumei, pirms deterministiski tiek izvēlēta
straume ar zemāko indeksu. Video ilgums ir ierobežots līdz 600 sekundēm, izmērs katrā dimensijā — līdz 8,192 pikseļiem, un
avota pikseļu skaits — līdz 33,554,432. FFmpeg atlasa 1–16 JPEG kadrus intervālu viduspunktos, samazina
garāko malu līdz ne vairāk kā 1,024 pikseļiem, nepalielinot mazākus ievades attēlus, un
nekad nesaņem URL. Pēc noklusējuma atlases politika ir `uniform`. Neobligātā
`scene_aware` un eksperimentālā `segment_aware` politika veic vienu papildu
fiksētu FFmpeg apstrādes gājienu jau validētajā lokālajā straumē, atlasa ierobežotu skaitu
`showinfo` ainu laika atzīmju un deterministiski atgriežas pie tiem pašiem
vienmērīgi izvietotajiem viduspunktiem detektora kļūmes, taimauta, nepareizi formatētas izvades vai tukšas
kandidātu kopas gadījumā. Segmentus ņemošais vērā režīms sadala viduspunktu paraugus proporcionāli
validētajiem ainu intervāliem; segmentus ņemošās vērā atlases dati un rezerves darbība ir
sīkāk aprakstīti tālāk. Stingrais 16 kadru ierobežojums tiek
piemērots pēc atlases katrā politikā. Ja ainas ņemošam vērā pieprasījumam ir tikai
viena kadra budžets, tas izmanto aktīvā pilna video vai fokusa
loga vienmērīgās atlases viduspunktu un ziņo `policyEffective: uniform`: viens atlasīts ainas kadrs
nevar saglabāt abus laika intervāla galus. Izsaucējs var pēc izvēles norādīt
fokusa logu ar galīgām robežvērtībām (`start`/`end` sekundēs); robežas tiek ierobežotas atbilstoši multivides
ilgumam, logi ar apgrieztām vai negalīgām robežvērtībām tiek noraidīti, un visas atlases
politikas tiek izpildītas tikai normalizētajā intervālā. Iegūtais
logs tiek iekļauts atlases metadatos un neuzticamā apraksta
prefiksā, lai turpmākie modeļi varētu atšķirt fokusētu fragmentu no pilnas
laika skalas.

Apraksta semantiskais fokuss ir atsevišķs, skaidri norādāms iestatījums. Noklusējuma `full`
analīzes režīms saglabā esošo kadra uzvedni un nekad nepārsūta pieprasījuma
tekstu apraksta modelim. Režīmā `focused` tilts nolasa tikai jaunāko
netukšo lietotāja rakstīto `text`/`input_text` no tā paša Chat vai Responses
konteinera, normalizē to uz NFC, sakļauj vadības rakstzīmes un atstarpju rakstzīmju virknes
un ierobežo to līdz 500 Unicode koda punktiem. Ja rezultāts ir tukšs, tiek izmantota
precīza `full` uzvedne. Izmantojama norāde tiek serializēta kā JSON īpašā
neuzticama lietotāja konteksta blokā un drīkst tikai piešķirt prioritāti novērojamām detaļām; tā
nevar ignorēt atsevišķo brīdinājumu nesekot multividē redzamām
vai dzirdamām instrukcijām. Tekstuālais fokuss nekad nenosaka `start`/`end` un nemaina
kadru atlasi laikā.

#### FU-07 strukturālie segmentu dati

`segment_aware` veic vienu ierobežotu priekšanalīzes gājienu jau validētajā
lokālajā video straumē. Fiksētā filtru ķēde vispirms samazina platumu līdz ne vairāk kā 320 pikseļiem,
nosaka ainu maiņas un sastingušus intervālus, pēc tam atlasa 1 kadru
sekundē, lai novērtētu izplūdumu, vidējo lumu un telpisko/laika informāciju. Šis gājiens ir
ierobežots līdz 600 strukturālajiem paraugiem, vienam FFmpeg/filtru pavedienam, tiem pašiem
protokolu un konteineru atļautajiem sarakstiem, kuros vienīgais protokols ir `file`, 1 MiB procesa izvades ierobežojumam
un ne vairāk kā 30 sekundēm brokera kopīgā atcelšanas/izpildes termiņa ietvaros. Tas nekad
nepieņem komandu, filtru, ceļu vai URL no pieprasījuma.

Strukturālās vērtības ir deterministiski atlases dati, nevis semantiska video
izpratne. No tām netiek izsecināti subjekti, darbības, apraksti, runa vai lietotāja
nolūks. Ainu un sastingušo intervālu robežas veido segmentus; sastingušo intervālu īpatsvars, izplūdums,
ekspozīcija, telpiskās detaļas un izmaiņas laikā ietekmē tikai to, kā tiek sadalīts esošais
1–16 kadru budžets. Pilnībā sastingušam segmentam tiek atvēlēts ne vairāk kā viens kadrs,
savukārt nesastingušie segmenti sacenšas par atlikušo budžetu. Ja robežu
ir vairāk nekā kadru, tiek saglabāts vienmērīgs laika skalas pārklājums, lai straujas ainu maiņas sākumā
nevarētu paslēpt garu beigu segmentu. Ainu robežas, kas atrodas 1 sekundes
analīzes izšķirtspējas attālumā no sastinguša intervāla robežas, tiek apvienotas.

Ja trūkst filtru, dati ir nepareizi formatēti vai tukši, rodas detektora kļūda vai tiek sasniegts ierobežotās
priekšanalīzes taimauts, apstrāde turpinās ar precīzu vienmērīgo viduspunktu atlases politiku. Izsaucēja
atcelšana vai brokera izpildes termiņa sasniegšana neizraisa šādu turpināšanu: tā pārtrauc darbojošos
apakšprocesu, nepieļauj turpmāku kadru izvilkšanu, un privātais pagaidu direktoriju koks tiek
noņemts blokā `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ģenerē deterministiskus reālus FFmpeg
testa paraugus, lai novērtētu apraksta izsaukumu ietaupījumu pēc dublikātu novēršanas, budžeta sadali intensīvai kustībai,
izplūduma/ekspozīcijas/SI-TI datus, straujas ainu maiņas ar garu beigu posmu un pakāpeniskas izdzišanas
kļūdaini pozitīvus rezultātus. Tas reģistrē priekšanalīzes faktisko ilgumu un, ja ir pieejams `/usr/bin/time`,
apakšprocesa CPU laiku un maksimālo RSS. Tā kvalitātes pārbaudes ir tikai strukturāli
etalonpārbaužu mehānismi. Reālā apraksta modeļa kvalitāte paliek statusā `HOLD`, jo šim testēšanas ietvaram nav
autorizēta galapunkta vai fiksēta vērtētāja. Arī naudas ietaupījums paliek statusā `HOLD`,
ja vien `--caption-cost-per-call-usd` nenorāda skaidri noteiktu pozitīvu viena izsaukuma
izmaksu aplēsi; skripts nekad neizdomā nevienu no šiem rezultātiem.

Katra kadra lielums ir ierobežots līdz 4 MiB, visu neapstrādāto kadru kopējais lielums — līdz 23 MiB, bet
serializētās starpnieka atbildes lielums — līdz 32 MiB. Privātais pagaidu direktorijs tiek noņemts
blokā `finally`. OmniRoute komplektācijā nav iekļauts FFmpeg, un tas nepieņem pielāgotu
izpildāmā faila ceļu. Pirms parakstu veidošanas tilts veic konservatīvu vizuālo
dublikātu novēršanas pārbaudi: katrs JPEG tiek samazināts līdz 16×16 pelēktoņu buferim un
salīdzināts tikai ar pēdējo saglabāto kadru. Ja pieprasītais parakstu veidošanai
atvēlētais kadru skaits pārsniedz vienu, izvilkšana nodrošina
ierobežotu kandidātu kopu, kas nepārsniedz divkāršu šo skaitu un nekad nepārsniedz 16 kadrus.
Pieprasītais ierobežojums tiek piemērots tikai pēc dublikātu novēršanas, galīgās atlases retināšanas laikā saglabājot pirmo un pēdējo
atlasīto kandidātu, ja atvēlētais kadru skaits ir vismaz
divi. Versētā
`grayscale-16x16-mean-cells-v2` politika izmanto lielāko no vidējās spožuma starpības un
tās sīktēla šūnu daļas, kuru normalizētā starpība ir vismaz 0.05. Dublikātu
slieksnis ir konstante 0.04, kas izvēlēta paredzamības nodrošināšanai, nevis
piedāvāta kā izpildlaika iestatījums. Šis papildu
augsta kontrasta signāls saglabā nelielas kustības un redzamā teksta izmaiņas, kuras
salīdzinājums tikai pēc vidējās vērtības var nepamanīt. Salīdzinātāja vai dekodētāja kļūdu gadījumā kadri netiek atmesti, saglabājot
pārklājumu. Izvades metadatos atsevišķi uzskaitīti izvilktie kandidāti, veiksmīgi izmantotie
kadri un atmestie vizuālie dublikāti.

Skaidri atzīmēta video daļa var pieprasīt kontaktlapu ar laika atzīmēm.
Tilts izveido JPEG režģi ar ne vairāk kā 4 kolonnām un 16 kadriem. Katrā 512 pikseļu šūnā
avota laika atzīme tiek iekausēta augsta kontrasta apakšējā joslā, savukārt tās pašas laika atzīmes
paliek teksta metadatos turpmākai sasaistīšanai un auditam. Visa
JPEG lielums joprojām ir ierobežots līdz 32 MiB. Ja `sharp` nevar dekodēt vai izveidot režģi,
tilts tā vietā izmanto atsevišķus JPEG kadrus; klienta veikta pārtraukšana joprojām tiek nodota
arī kontaktlapas veidošanas operācijai.

Pierādījumi pārejai uz plašāku izmantošanu ir apzināti nodalīti no sintētiskā kompozīcijas veidošanas
mikroveiktspējas testa. `scripts/perf/video-bridge-contact-sheet-eval.ts` definē
A/B testēšanas ietvaru ar versētu shēmu reāliem, ar OpenAI saderīgiem redzes modeļiem. Tas mēra
pakalpojuma sniedzēja uzrādītos tokenus, kopējo izpildes laiku (ieskaitot kontaktlapas veidošanu),
modeļa izsaukumu skaitu un manifestā definēto faktu saglabāšanu. Neapstrādātas modeļa atbildes
netiek ierakstītas pārskatā; tiek saglabātas tikai SHA-256 jaucējvērtības un atbilstošo faktu ID.
Ietvars neveic nevienu tīkla pieprasījumu vai maksas modeļa izsaukumu, ja vien nav norādīts `--execute-real` un
konfigurēti `--model`, `OMNIROUTE_BASE_URL` un `OMNIROUTE_API_KEY`. Bez
šādas nepārprotami aktivizētas reālas izpildes tā mašīnlasāmais verdikts paliek `HOLD`; sintētiski
datu apjoma un izsaukumu skaita mērījumi vien nav pierādījums pārejai uz plašāku izmantošanu.

Izsaucēji var atbalstītai video
daļai pievienot neobligātu `transcript.cues` masīvu, ja tiem jau ir ar laika atzīmēm saskaņots teksts. Katram fragmentam jāietver `text`,
galīgs `start`/`end` intervāls noteiktā video ilguma robežās un atļauto vērtību sarakstā iekļauts
`source` (`client`, `embedded` vai `audio-bridge`); `confidence` noklusējuma vērtība ir
`1`, un tai jāpaliek diapazonā no `0` līdz `1`. Pilnīgi identiski fragmenti tiek apvienoti.
OmniRoute nekad nesāk transkribēšanu, pamatojoties uz šiem metadatiem: validētie fragmenti tiek
kopēti apraksta rezultātā kopā ar avotu, ticamību un intervālu un
attēloti kā neuzticami novērojumi līdzās kadru parakstiem. Nederīgs
teksts, teksts ārpus pieļaujamā diapazona vai bez izcelsmes norādes tiek noraidīts, nevis iekļauts
parakstu plūsmā. Abi pieprasījuma pamatteksta transkripta kanāli normalizē norādīto
izcelsmi uz `client`, tostarp pašdeklarētas `embedded` vai `audio-bridge`
atzīmes. Tikai servera pārvaldīts adapteris var piešķirt šīs uzticamās atzīmes, izmantojot
tikai kodā pieejamo `trustedSource` argumentu; pieprasījuma JSON lauks nevar piekļūt
šim argumentam. Transkripta teksts joprojām ir neuzticams, no multivides iegūts saturs
neatkarīgi no tā izcelsmes, un tas nekad nedrīkst noteikt autorizāciju.

Pieredzējis izsaucējs tam pašam video var nodrošināt `audioTranscript` celiņu;
tas tiek uzskatīts par klienta nodrošinātu tekstu, nevis serverī veiktas transkribēšanas pierādījumu.
Apvienošanas saskarne apstrādā vizuālos un audio novērojumus ar
vienu kopīgu izpildes termiņu un pārtraukšanas signālu, sakārto tos kopīgā laika skalā, apvieno
pilnīgi identiskus dublikātus un atgriež daļēju rezultātu, ja sekmīga ir tikai viena puse.
Nederīga `audioTranscript` gadījumā tiek atgriezts šāds daļējs rezultāts — vizuālais
apraksts tiek saglabāts, un audio atzars reģistrē attīrītu kļūmes kodu —,
nevis tiek pārtraukta visa video apstrāde. Katra atzara pieejamība, daļēja rezultāta karodziņš
un attīrītie kļūmju kodi tiek saglabāti apraksta rezultātā,
aizsargmehānismu metadatos (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultātu kešatmiņas metadatos un tilta
apvienošanas skaitītājos. Noklusējuma Video Bridge apstrādes ceļš neizsauc runas pārvēršanu tekstā
un nelejupielādē otru multivides kopiju; bez šī tieši norādītā celiņa tas joprojām
apstrādā tikai video.

**Transkripta saglabāšana (#12150 P1).** Tas tiek piemērots automātiski ikreiz, kad
Video Bridge (kas pats ir jāiespējo atsevišķi) atveido transkripta segmentu — atsevišķa
saglabāšanas karodziņa nav. Ja pieprasījumā tiek atveidots jebkurš transkripta segments (izsaucēja deklarēts
`transcript` vai apvienots `audioTranscript`), aizsargmehānisms atzīmē to ar
`videoBridgeObserved` un izveido video apraksta rediģētu ēnkopiju —
identisku atveidojumu, kurā katra segmenta brīvā teksta saturs ir aizstāts ar
`[redacted-video-transcript]`. Tā tiek izveidota, aizstājot strukturētā segmenta lauku,
pirms tiek salikta virkne (nekad neparsējot saplacināto tekstu, tāpēc nekāds segmenta
saturs — ne ļaunprātīgs, ne parasts, tostarp saturs ar `]`, piemēram,
`[inaudible]`/`[music]` — nevar saglabāties). Pastāvīgi saglabātajā izsaukumu žurnāla pieprasījuma saturā
katra no video iegūtā teksta daļa tiek aizstāta ar šo rediģēto ēnkopiju, veicot atbilstības noteikšanu pēc satura
vienādības; `fullText` atskaites vērtība tiek atkārtoti nolasīta no pabeigtajiem pirmsizsaukuma aizsargmehānisma
datiem, tāpēc atbilstības noteikšana joprojām izdodas pēc tam, kad vēlākie ķēdes aizsargmehānismi (personu identificējošās informācijas un
akreditācijas datu maskētāji ar prioritātēm 10/95) pārraksta apraksta tekstu tajā pašā vietā, un
pēc tam, kad sistēmas uzvednes/nodošanas/atmiņas ievietošana pārveido ziņojumu masīvu.
Modelim augšupstraumē nosūtītais saturs netiek mainīts. Novērots pieprasījums arī nepapildina
pastāvīgo atmiņu (tiek izlaista gan no pieprasījuma, gan no atbildes iegūstamās informācijas izvilkšana),
tāpēc arī paša modeļa atbilde nevar pārnest transkripta tekstu uz atmiņu.

**Neapstrādāti video lauki (#12430).** Ja tilts ir iespējots un iebūvētais video atbalsts nav zināms vai nav pieejams, definēti `transcript`/`audioTranscript` lauki arī aktivizē `videoBridgeObserved`, pat pēc apraksta izveides kļūmes vai `maxVideos` ierobežojuma sasniegšanas. Tiek ņemtas vērā arī `null` vērtības un tukšas virknes; neesoši lauki un ar video nesaistīti metadati netiek ņemti vērā. Saglabātajās kopijās šie lauki tiek rediģēti vai pieprasījums tiek izlaists, un kešatmiņas/atmiņa tiek apietas.

Šajos rezerves apstrādes ceļos derīgi izsaucēja segmenti kļūst par atbalstītām `text`/`input_text`
daļām, nevis nestandarta pakalpojuma sniedzēja laukiem. Abi pieprasījumā norādītie celiņi
paliek neuzticami `client` novērojumi ar skaidru brīdinājumu, ka video
nav aprakstīts un laikspiedoli nav pārbaudīti pret multivides saturu. Esošie
kopējie 256 segmentu/64 KiB ierobežojumi un katra segmenta ierobežojumi attiecas uz abiem celiņiem kopā;
laikspiedoliem jāiekļaujas starpnieka 600 sekunžu robežā un jebkurā norādītajā fokusa
intervālā. Nederīgi celiņi tiek atmesti, nevis pārsūtīti kā patvaļīgs teksts; derīgu
otru celiņu joprojām var izmantot, ja vien nav pārsniegts to kopējais ierobežojums. Lauki ar nulles vērtību vai tukši
lauki nepievieno tekstu. Šis rezerves mehānisms nepievieno multivides izgūšanu vai transkribēšanu.
Transkripta paplašinājuma lauki tiek noņemti no rezerves video nesēja un tā
`video_url`/`source` objektiem. OpenAI pārraides formāta atļauto elementu saraksts paliek stingrs; video nesēji ar nezināmu
iebūvēto atbalstu paliek pieejami, un mērķi, par kuriem zināms, ka tie atbalsta tikai tekstu, saglabā drošus marķierus.
Strukturētas rediģētas ēnkopijas aizsargā pievienoto transkripta tekstu, bet
sākotnējais izsaucēja pārvaldītais pieprasījums paliek nemainīts. Mērķi ar iebūvētu atbalstu un
atspējoti tilti saglabā esošo apiešanas darbību.

Papildu saglabātās kopijas izmanto to pašu novērota pieprasījuma signālu. Neapstrādātajā
klienta pieprasījuma momentuzņēmumā pirms aizsargmehānismu izpildes, atmiņā esošajā gaidošajā pieprasījumā un agrīni
noraidīto pieprasījumu žurnālā transkripta lauki video daļās tiek strukturāli aizstāti;
konveijera posmu un konteksta nodošanas sintezētās virkņu uzvednes tiek rediģētas
pieprasījuma satura pastāvīgās saglabāšanas punktā. Pastāvīgi saglabātais `video_content_removed` marķieris
liek turpināšanai ar `previous_response_id` kļūmes gadījumā droši atteikt darbību, nevis rekonstruēt
tekstu, kas ir apzināti atmests. Ja novērots pieprasījums pirms reģistrēšanas zaudē savu
katras daļas rediģēto ēnkopiju vai pat viena no vairākām video ēnkopijām
pēc vēlākām pieprasījuma izmaiņām vairs neatbilst, saglabātais pieprasījuma saturs tiek
izlaists pilnībā, nevis tiek saglabāts daļēji rediģēts transkripts.

Novērota pieprasījuma gadījumā modeļa atbilde var citēt jebkuru
transkripta daļu bez strukturēta segmenta robežas. Tāpēc tās pastāvīgi saglabātais izsaukumu žurnāla
`responseBody` tiek aizstāts ar izlaišanas marķieri; detalizētais
konveijera artefakts (kas var ietvert augšupstraumes/klienta saturu un straumes fragmentus)
netiek saglabāts. Semantiskā, idempotences un spriešanas atkārtotas atskaņošanas kešatmiņas šim pieprasījumam apiet
lasīšanu un rakstīšanu. Pakalpojuma sniedzējam nosūtītais pieprasījums un klientam redzamā
atbilde paliek nemainīti. Agrīnie savienojuma uzturēšanas baiti tiek iztukšoti no pagaidu
bufera, kad detalizētais artefakts tiek izlaists. Kiro brīdinājums par nepareizi veidotu EventStream
ziņo tikai par derīgās slodzes baitu skaitu, nekad par tās saturu vai JSON
parsētāja neapstrādāto kļūdu.
Tas nenozīmē, ka ir auditēti visi nesaistītie pakalpojumu sniedzēju/spraudņu diagnostikas dati;
plašākā saglabāšanas galapunktu pārbaude tiek uzskaitīta uzdevumā #11658.

Iekšējais `/api/modality-bridge/video/drilldown` dzīves cikls ir atsevišķa
kešatmiņas infrastruktūra ar piekļuvi caur atgriezeniskās saites saskarni un autentifikāciju ar marķieri. Katrai darbībai ir nepieciešams arī
kanonisks necaurspīdīgs drošības subjekta ID. Pirms tiek iespējots produkcijas izsaucējs, tam
šis ID ir jāatvasina no autentificētā nomnieka un tas nekad nedrīkst pārsūtīt
klienta izvēlētu vērtību. Kešatmiņas atslēgas sasaista šo drošības subjektu ar kanoniskiem sesijas un
video atsauču ID, glabā tikai no tiem ar SHA-256 atvasinātās atslēgas un ierobežo gan lasīšanu,
gan dzēšanu ar to pašu drošības subjektu. Kešatmiņa katrā ierakstā glabā ne vairāk kā 16 atvasinātus JPEG
kadrus, kuru derīgums beidzas pēc desmit minūtēm, un atbalsta ierobežotu
`start`/`end` nolasīšanu vai tiešu sesijas dzēšanu.

Katram drošības subjektam ir noteikts 16 ierakstu un 64 MiB kanonisku JPEG datu ierobežojums. Šie
ierobežojumi nav atkarīgi no globālās 64 ierakstu/256 MiB robežas: drošības subjekta kvotas
sasniegšana vispirms izraisa tikai šī drošības subjekta visilgāk nelietoto ierakstu izstumšanu, pirms tiek apsvērta globālā
LRU izstumšana. Kešatmiņas darbību laikā ieraksti, kuru derīgums ir beidzies, tiek izņemti gan no drošības subjekta, gan
globālās uzskaites, savukārt atcelšana un validācijas kļūme
neapstiprina daļēju aizstāšanu.

Kešatmiņa noraida nekanonisku Base64, pārmērīgu aizpildījumu, multividi, kas nav JPEG formātā, nekorektus vai
aprautus JPEG attēlus, kā arī JPEG attēlus, kas ierobežotas pilna attēla `sharp`
dekodēšanas laikā izraisa brīdinājumu. Katru pieņemto attēlu tā pārkodē kanoniskā JPEG formātā, nosaka platumu un augstumu
no dekodētajiem baitiem, nevis uzticas izsaucēja laukiem, un atmet visus beigu
poliglota baitus, nevis tos saglabā. Abās kvotās tiek ieskaitīts tikai ierobežota izmēra kanoniskais saspiestais buferis.
JSON pārraides izmēra ierobežojums ietver Base64 papildu apjomu, kas nepieciešams 32 MiB
dekodētās ievades maksimālajam apjomam. Katram
saglabātajam atvasinājumam tiek reģistrēts tā validētais JPEG formāts/izšķirtspēja, kadru atlases politika,
atvasināšanas versija, izveides laiks, servera aprēķinātā satura jaucējvērtība un vecākobjekta
atsauces jaucējvērtība kopā ar uzticamā izsaucēja norādīto vecākobjekta satura jaucējvērtību. Atcelšana tiek pārbaudīta
starp asinhronajām dekodēšanas/jaucējvērtības aprēķināšanas fāzēm pirms atomiskas ierakstīšanas kešatmiņā.

Šajā izstrādes posmā maršrutam vēl netiek pieslēgts produkcijas ģenerētājs un netiek
nodrošināta vairāku izšķirtspēju variantu izvēle. Tādēļ caurspīdīgais Video Bridge pieprasījumu
ceļš nerada papildu darbu, savukārt nomniekam piesaistīta drošības subjekta atvasināšana un
pilns FU-08 vairāku izšķirtspēju dzīvescikls paliek skaidri noteikti turpmākie darbi, nevis
tiek dokumentēti kā jau pabeigta funkcionalitāte.

Kadru apraksti tiek veidoti secīgi, izmantojot konfigurēto Video modeli. Ja Video
iestatījuma pārrakstījums ir tukšs, tiek pārmantots Vision iestatījums; ja abi ir tukši, Vision
automātiskais maršrutētājs izvēlas faktiski izmantojamo modeli ar attēlu apstrādes iespējām. Veiksmīgi izveidoti apraksti
aizstāj sākotnējo daļu ar stabilu `[Video description:` prefiksu, kas arī
atzīmē tekstu kā neuzticamu, no multivides iegūtu novērojumu un norāda turpmākajiem
modeļiem neievērot multividē atrastās instrukcijas. Kadru aprakstu kešatmiņas atslēgas
ietver JPEG baitus, uzvedni, laika zīmogu un faktiski izmantoto modeli; kešatmiņā tiek saglabāti tikai veiksmīgi
izveidoti apraksti. Kešatmiņas ierakstos tiek saglabāts faktiskais modelis, kas veiksmīgi ģenerējis aprakstu,
tostarp rezerves modelis; tilts ziņo `mixed`, ja dažādus kadrus
apstrādājuši dažādi modeļi. Kešatmiņas trāpījuma gadījumā atkārtoti tiek izmantota šī ģenerētāja identitāte,
nevis tā tiek pārsaukta atbilstoši pieprasītajam maršrutēšanas plānam. Visa video rezultātu
kešatmiņas atslēga ietver katru ievades parametru, kas maina izvadi — uzvedni, faktiski izmantoto
modeli, kadru atlases politiku, kadru skaitu, semantiskās analīzes režīmu, normalizētās fokusa norādes SHA-256
nospiedumu, fokusa logu, `transcript`,
`audioTranscript` un kadru kontaktlapas karodziņu — tādēļ jebkura no šiem
parametriem maiņa izraisa kešatmiņas netrāpījumu, nevis novecojuša rezultāta atkārtotu izmantošanu. Vizuālo dublikātu novēršanas politikas
versija, slieksnis un ierobežotais kandidātkadru skaits arī ir skaidri iekļauti
rezultātu kešatmiņas atslēgā un metadatos; tādēļ politikas maiņa neļauj atkārtoti izmantot novecojušu
visa video aprakstu. Rezultātu kešatmiņas v4 metadati saglabā režīmu un
nospiedumu, bet nekad nesaglabā lietotāja sākotnējo uzdevumu. Aizsargmehānisma metadati norāda gan
pieprasīto, gan faktisko analīzes režīmu; pieprasīts `focused` režīms bez
izmantojama lietotāja teksta tiek norādīts kā faktiskais `full` režīms.

Aizsargmehānisms izvelk visas atbalstītās video daļas, bet apraksta ne vairāk kā
`modalityBridgeVideoMaxVideos`. Ja mērķim ir droši noteikts
`supportsVideo === false`, neveiksmīgi apstrādātie un limitu pārsniegušie video tiek aizstāti ar skaidriem, drošiem
teksta marķieriem, lai nepaliktu neapstrādāts video. Ja atbalsta iespēja nav zināma, šīs daļas
saglabā savu video nesēju; jebkurš rezerves transkripts tiek apstrādāts saskaņā ar iepriekš aprakstīto ierobežoto teksta
pārveidošanu. Mērķi ar `supportsVideo === true` apiet tiltu.
Klienta pieprasījuma pārtraukšanas signāls tiek nodots lejupielādei, brokera rindai,
apakšprocesiem un aprakstu ģenerēšanas izsaukumiem; pārtraukšana aptur apstrādi starp video un nekad kļūmes gadījumā
neļauj cauri neapstrādātu multividi.

Izpildlaika iestatījumi tiek glabāti datubāzē un validēti ar Zod:

| Atslēga                             | Noklusējums | Diapazons / darbība                                                                                                |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Izvēles izpildlaika funkcija, jāiespējo apzināti                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` saglabā vispārīgus aprakstus; `focused` izmanto ierobežotu, neuzticamu jaunākā lietotāja ziņojuma kontekstu |
| `modalityBridgeVideoModel`          | `""`        | Pārmantot Vision Bridge modeli                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vai proporcionāls `segment_aware`; detektora kļūmes gadījumā tiek izmantots `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                     |

Iepriekš saglabātās Video taimauta vērtības, kas pārsniedz 120 sekundes, tiek samazinātas līdz
brokera termiņam; jaunu iestatījumu ieraksti, kas pārsniedz šo robežu, tiek noraidīti.
`GET /api/modality-bridge/video/runtime` pirms autentifikācijas vai izpildlaika pārbaudes pieprasa uzticamu
marķējumu, kas apliecina pieprasījuma lokālo izcelsmi no atgriezeniskās cilpas, un pēc tam pieprasa pārvaldības
autentifikāciju. Tas atgriež tikai `available`, sanitizētas FFmpeg/ffprobe versijas un fiksētu
iemeslu, ja izpildlaiks nav pieejams. Iekšējais izvilkšanas galapunkts nav
publiska augšupielādes API: rindas pārpildes gadījumā tiek atgriezts `503` kopā ar `Retry-After`, izsaucēja
atvienošanās gadījumā tiek atgriezts `499`, bet fiksētā brokera termiņa sasniegšanas gadījumā — `504`. Pārveidotās atbildes pievieno
`video->text;model=<visionModel>;parts=<videos>` centrālajai
`x-omniroute-modality-bridge` galvenei, nenoņemot Vision vai Audio segmentus.

### PII maskētājs (`piiMasker.ts`)

Darbojas **abos** posmos.

- **`preCall`** klonē datu saturu, pārstaigā `system`, `messages`, `input` un
  `prompt` (tostarp vienkāršas virknes elementus) un virkņu laukiem `content`/`text`
  piemēro `processPII()` (no
  `@/shared/utils/inputSanitizer`). Ja
  `PII_REDACTION_ENABLED=true`, izejošajā datu saturā tiek aizklāti atklātie
  personas dati (PII). Tas nav atkarīgs no `INPUT_SANITIZER_MODE` (kas kontrolē tikai
  uzvedņu injekciju politiku). Ja aizklāšana ir izslēgta, izsaukums reģistrē atklāšanas
  reižu skaitu, nepārrakstot saturu.
- **`postCall`** izveido atbildes dziļo kopiju, izpilda `sanitizePIIResponse()` un
  Responses API formātam paredzēto maskētāju (`maskResponsesOutput` — aptver
  `output_text` un `output[].content[].text`). Ja notiek aizklāšana,
  modificētā atbilde aizstāj sākotnējo.

Aizsargmehānisms nekad nebloķē; tas tikai pievieno anotācijas (`meta.detections`,
`meta.redacted`) vai pārraksta saturu.

#### Atlase pēc tipa, pielāgoti šabloni un atklāšanas skaitītāji

**Informācijas panelis → Iestatījumi → Drošība → PII maskēšana** nosaka, _kas_ tiek maskēts. Tas
neieslēdz maskēšanu: to joprojām nosaka `PII_REDACTION_ENABLED` (pieprasījumam) un
`PII_RESPONSE_SANITIZATION` (atbildei + SSE), kas abi pēc noklusējuma ir izslēgti.

- **Atlase pēc tipa** — iebūvētie identifikatori ir uzskaitīti
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ja nekas nav iestatīts, tiek izmantoti visi
  tipi (darbība, kāda bija pirms šī iestatījuma ieviešanas). Pieprasījumu apstrādes dzinēja
  šablons `ssn_us` tiek kartēts uz `ssn`. Veidnes (Minimālā, Standarta, Finanšu,
  Brazīlijas, ASV, Pilnā) tikai atzīmē izvēles rūtiņas lietotāja saskarnē.
- **Pielāgoti šabloni** — līdz 20 regulāro izteiksmju vai aizstājējzīmju šabloniem (`*` = līdz 64
  rakstzīmēm, kas nav atstarpju rakstzīmes, `?` = viena). Atbilstības tiek aizstātas ar `[CUSTOM_REDACTED]`.
  Katrs šablons tiek apstrādāts ar `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): ne vairāk kā 500 rakstzīmju, atļautie karodziņi
  ir tikai `g i m s u`, tam jābūt kompilējamam, jāiztur `safe-regex` pārbaude (katastrofāla
  atpakaļmeklēšana), un tas nedrīkst atbilst tukšai virknei vai aizklāšanas vietturim.
  Šablons, kas neiztur pārbaudi, tiek noraidīts saglabājot un testējot, savukārt saglabāta rinda,
  kas neiztur pārbaudi, izpildes laikā tiek izlaista, nevis kompilēta. Pielāgotie šabloni
  tiek izmantoti tikai tad, kad maskēšana ir ieslēgta.
- **Atklāšanas skaitītāji** — skaits katram tipam (nekad netiek glabātas atbilstošās vērtības), kas tiek glabāts
  atmiņā un atiestatīts pēc restartēšanas (`src/lib/pii/piiDetectionStats.ts`). Tie
  palielinās tikai tad, kad maskēšana ir ieslēgta.

Iestatījumi tiek glabāti tabulā `key_value` (nosaukumtelpa `pii_settings`,
`src/lib/db/piiSettings.ts`) un nolasīti, izmantojot kešatmiņu ar 1 s derīguma laiku. API:

| Metode | Ceļš                     | Mērķis                                                                             |
| ------ | ------------------------ | ---------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Karodziņu stāvoklis, `enabledTypes`, `customPatterns`, atklāšanas skaitītāji       |
| `PUT`  | `/api/settings/pii`      | Aizstāt `enabledTypes` (`null` = visi) un/vai `customPatterns`                     |
| `POST` | `/api/settings/pii/test` | Pārbaudīt vienu šablonu ar ne vairāk kā 8 KB lielu paraugu; nekas netiek saglabāts |

Visiem trim galapunktiem ir nepieciešama pārvaldības autentifikācija, un tie validē pieprasījuma saturu ar Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Uzvedņu injekcijas (`promptInjection.ts`)

Atklāj ļaunprātīgas struktūras lietotāja iesniegtajā saturā un piemēro
konfigurēto politiku. Darbību nosaka vides mainīgie un konstruktora
opcijas:

| Iestatījums          | Vides mainīgais                                                                                              | Noklusējums | Ietekme                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ieslēgts             | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`      | Ja vērtība ir `false`, aizsargmehānisms uzreiz pārtrauc apstrādi.                                                                                                                                     |
| Režīms               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`      | Injekciju politika: `block`, `warn` vai `log`. (`redact` tiek pieņemts atpakaļsaderības nolūkā, taču **neizņem** injekcijas tekstu; pieprasījuma PII pārrakstīšanu kontrolē `PII_REDACTION_ENABLED`.) |
| Bloķēšanas slieksnis | Opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aizstājvārds `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Minimālais nopietnības līmenis, kas nepieciešams bloķēšanai. Pēc noklusējuma vidējs līmenis tiek tikai novērots.                                                                                      |

**Režīma prioritāte** (`getMode`): izsaucēja `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijas karodziņa pārrakstīšana** (Informācijas panelis → Iestatījumi →
Funkciju karodziņi) → vides mainīgais `INJECTION_GUARD_MODE` → vides mainīgais `INPUT_SANITIZER_MODE` →
`warn`. Tādējādi informācijas panelī iestatītajai pārrakstīšanai ir augstāka prioritāte nekā vides mainīgajiem, tāpēc funkciju
karodziņu saskarne kontrolē darbojošos aizsargmehānismu reāllaikā (bez restartēšanas). DB nolasīšana ir kļūmju droša:
ja rodas kļūda, aizsargmehānisms atgriežas pie darbības, ko nosaka vides mainīgie, un, ja
pārrakstīšana nav iestatīta, darbība ir identiska tai, ko nosaka tikai vides mainīgie.

Atklāšanas avoti:

1. `sanitizeRequest()` no `@/shared/utils/inputSanitizer` (koplietojama detektoru
   kopa, ko izmanto arī citviet apstrādes plūsmā).
2. Iebūvētie `DEFAULT_GUARD_PATTERNS` (pašlaik `system_override_inline` un
   `markdown_system_block`, abiem nopietnības līmenis ir `high`).
3. Neobligāti `customPatterns`, kas padoti konstruktora opcijās (virknes, regulārās izteiksmes
   vai `{ name, pattern, severity }` ieraksti).

Ja `mode === "block"` **un** vismaz viena konstatējuma nopietnība sasniedz
sliekšņvērtību, `preCall` atgriež `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režīmos `warn`/`log` aizsargmehānisms reģistrē notikumu žurnālā, bet
atļauj izsaukumu. Koplietojamā palīgfunkcija `evaluatePromptInjection()` arī tiek eksportēta
izsaucējiem, kuriem jānovērtē uzvednes, neizmantojot reģistru.

**Skenēšanas ierobežojums (v3.8.20):** detektors pārbauda tikai apvienotā uzvednes teksta **pirmos 16 KB**
— `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failā
`src/shared/utils/inputSanitizer.ts`. Gan `detectInjection()`, gan
`evaluatePromptInjection()` pirms šablonu pārbaudes cikla izpildes izmanto
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Injekcijas norādes atrodas ievades sākumdaļā, tāpēc šādi
tiek ierobežots regulāro izteiksmju radītais CPU/GC noslogojums vairāku simtu KB datu kravām, nemazinot noteikšanas efektivitāti (sk.
#3932, #4041).

### Autentifikācijas datu maskētājs (`credentialMasker.ts`)

Darbojas **abos** posmos, kā pēdējais noklusējuma ķēdē (prioritāte `95`). Maskē
plaši pazīstamus API atslēgu / slepeno pilnvaru šablonus izejošajā datu kravā (ziņojumu
saturā, rīku izsaukumu argumentos, rīku rezultātos) **un** pakalpojumu sniedzēja atbildē, lai
uzvednē ielīmēti autentifikācijas dati (vai rīka rezultātā atkārtoti izvadīti dati) netiktu nopludināti
ārējam pakalpojumu sniedzējam vai atpakaļ klientam.

- **Tikai ar nepārprotamu ieslēgšanu**, pēc tā paša principa kā PII maskēšana (saistīts ar stingro noteikumu #20):
  atspējots, ja vien nav iestatīts `settings.credentialRedactionEnabled === true` **vai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ja tas ir izslēgts, aizsargmehānisms neveic nekādas darbības —
  tas nekad nebloķē un nekad nepārraksta.
- `redactCredentials()` izstaigā visu datu kravas/atbildes koku (`walkValue()`,
  drošs pret prototipu piesārņošanu un cikliem, izmantojot `WeakSet`) un aizstāj atbilstības ar
  vietturi `[REDACTED:<type>]`, klonējot tikai tos zarus, kas faktiski
  mainījušies.
- `CREDENTIAL_PATTERNS` aptver LLM pakalpojumu sniedzēju atslēgas (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS pilnvaras (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksājumu atslēgas (Stripe, Square), mākoņpakalpojumu
  atslēgas (AWS piekļuves atslēga, Twilio, SendGrid, Mailgun), privātās atslēgas / JWT,
  savienojuma virknes ar autentifikācijas datiem (`mongodb://user:pass@...` u. c.) un
  vispārīgu `Authorization`/`x-api-key`/`api-key`/`apikey` galvenes vērtības
  šablonu. Galvenēm atbilstošās atslēgas (`authorization`, `x-api-key`, `api-key`,
  `apikey`) tiek maskētas strukturāli (tikai vērtība, saglabājot shēmas prefiksu, piemēram,
  `Bearer `/`Basic `), nevis ar vispārīgo teksta regulāro izteiksmi.
- Aizsargmehānisms nekad nebloķē; tas tikai pārraksta (`modifiedPayload` /
  `modifiedResponse`) un pievieno metadatus (`meta.credentialsRedacted`, `meta.count`).

Aizsardzība pret regresijām: `tests/unit/credential-masker-guardrail.test.ts`.

## Pamata līgums (`base.ts`)

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
  block?: boolean; // true pārtrauc ķēdes izpildi
  message?: string; // tiek parādīts bloķēšanas gadījumā
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // atgriež preCall, lai pārrakstītu pieprasījumu
  modifiedResponse?: TValue; // atgriež postCall, lai pārrakstītu atbildi
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

Aizsargmehānisms norāda, ka izmaiņu nav, atgriežot `void`, `{}` vai
`{ block: false }`. Atgriežot `modifiedPayload`/`modifiedResponse`, tiek aizstāta
vērtība, kas pa ķēdi tiek nodota nākamajiem aizsargmehānismiem.
`signal?: AbortSignal` nodod aizsargmehānismiem izsaucēja dzīvesciklu. Pieprasījuma pārtraukšana ir apzināts izņēmums, kad kļūmes gadījumā darbība netiek bloķēta: multivides tilti pārtrauc darbu un veic resursu atbrīvošanu, neatjaunojot neapstrādāto multividi mērķim, par kuru ir zināms, ka tas to neatbalsta.

## Reģistrs (`registry.ts`)

Vienīgā instance `guardrailRegistry` nodrošina:

- `register(guardrail)` — pievieno aizsargmehānismu (vai aizstāj to pēc normalizētā nosaukuma) un
  pārkārto pēc `priority` augošā secībā.
- `clear()` / `list()` — administrēšanas palīgmetodes.
- `runPreCallHooks(payload, context)` — secīgi apstrādā aktīvos aizsargmehānismus, nodod
  pieprasījuma datus tālāk caur `modifiedPayload` un apstājas pie pirmā `block: true`.
- `runPostCallHooks(response, context)` — tāda pati plūsma atbildes pusē.
- `resetGuardrailsForTests({ registerDefaults })` — notīra stāvokli un pēc izvēles
  atkārtoti reģistrē noklusējuma aizsargmehānismus, lai nodrošinātu pilnīgu testu izolāciju.

Abi izpildītāji atgriež `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` ir `GuardrailExecutionResult` ierakstu masīvs, kas ietver
katra aizsargmehānisma laukus `blocked`, `skipped`, `modified`, `error` un `meta`,
kas noder izpildes izsekošanai.

### Aizsargmehānismu atspējošana atsevišķiem pieprasījumiem

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` apkopo
aizsargmehānismu nosaukumu sarakstu bez dublikātiem, kuri jāizlaiž pašreizējam
pieprasījumam. Ir pieci kanāli, kas tiek nolasīti šādā secībā un apvienoti vienā sarakstā
(noņemot dublikātus, tiek saglabāts pirmais gadījums):

1. `apiKeyInfo.disabledGuardrails`
2. Pieprasījuma pamatdaļas `disabledGuardrails` (augšējā līmenī)
3. Pieprasījuma pamatdaļas `metadata.disabledGuardrails` (tikai tad, ja `metadata` ir objekts)
4. Galvene `x-omniroute-disabled-guardrails`
5. Mantotā galvene `x-disabled-guardrails`

Visi pieci kanāli tiek apvienoti, ieskaitot abas galvenes: nosūtot gan
`x-omniroute-disabled-guardrails`, gan `x-disabled-guardrails`, tiek izlaisti visi
abu sarakstu aizsargmehānismi, un tukša jaunā galvene vairs neslēpj mantoto galveni
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), labots
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vērtības var būt virkņu masīvi vai ar komatiem atdalīta virkne; nosaukumiem tiek noņemtas
atstarpes sākumā un beigās, un tie tiek normalizēti uz mazo burtu kebab-case formātu (`pii_masker` → `pii-masker`), bet tukšie
ieraksti tiek atmesti. Rezultāts caur `context.disabledGuardrails` tiek nodots
reģistram, kas izlaiž atbilstošos aizsargmehānismus (`skipped: true` laukā `results`).

Atspējošanas saraksts ietekmē tikai **reģistru**. Uzvednes injekcijas `block` režīms ir
obligāta drošības robeža: injekciju aizsardzības starpprogrammatūra
(`src/middleware/promptInjectionGuard.ts`) izsauc `evaluatePromptInjection()`
bez jebkāda izsaucēja kontrolēta atspējošanas saraksta (neizmantotais
`resolveDisabledGuardrails({ body })` izsaukums, ko tā iepriekš veica, tika noņemts
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), tāpēc pieprasījums,
kas atspējo `prompt-injection`, joprojām tiek noraidīts `block` režīmā. Tā ir
paredzētā darbība. Atspējošanas kanālus kontrolē izsaucējs (pieprasījuma pamatdaļa,
metadati, galvenes), un izsaucējs nedrīkst spēt izslēgt operatora iestatītu
drošības kontroli
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Galveņu
apvienošana no [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
maina tikai to, kuri reģistra aizsargmehānismi tiek izlaisti; tā neļauj klientam
apiet starpprogrammatūru. Obligātās aizsargmehānismu politikas atsevišķām atslēgām un grupām tiek
aplūkotas v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Skatiet [Tvērums un ierobežojumi](#coverage-and-limits).

## Izpildes secība

Katram pieprasījumam, kas plūst caur `src/sse/handlers/chat.ts` un
`open-sse/handlers/chatCore.ts` (tērzēšanas saimes maršruti, kas uzskaitīti sadaļā
[Aptvērums un ierobežojumi](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` izveido izlaižamo aizsargmehānismu sarakstu no API atslēgas, pamatteksta
   un galvenēm.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izpilda aizsargmehānismus augošā
   prioritātes secībā:
   - Atspējotie aizsargmehānismi tiek reģistrēti kā `skipped`.
   - Katra aizsargmehānisma `preCall` var pārrakstīt datus, izmantojot `modifiedPayload`.
   - Pirmais `block: true` pārtrauc ķēdes izpildi, un apstrādātājs atgriež
     aizsargmehānisma noraidījuma atbildi.
3. Dati (iespējams, pārrakstīti) nonāk kombinētajā maršrutēšanā un tiek
   nosūtīti augšupstraumes pakalpojumam.
4. **Tikai bez straumēšanas:** pēc atbildes izveides
   `guardrailRegistry.runPostCallHooks(...)` izpilda to pašu ķēdi
   atbildei. `block: true` šeit atmet augšupstraumes atbildi un atgriež HTTP 400. Straumētām atbildēm šis solis tiek pilnībā izlaists.

Aizsargmehānismi, kas izmet izņēmumu, tiek reģistrēti ar `error: <message>` un žurnalēti, izmantojot
`logger.warn`, taču ķēdes izpilde turpinās — kļūmes gadījumā darbība apzināti netiek bloķēta.

## Aptvērums un ierobežojumi

Aizsargmehānismu reģistrs ir pieslēgts tikai tērzēšanas apstrādes konveijeram. Šos ierobežojumus
nostiprina `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` un
`tests/unit/guardrail-pipeline-characterization.test.ts`; mainoties darbībai, apzināti atjauniniet šos
testus.

### Kur tiek izpildīti āķi

| Āķis / vadības mehānisms                            | Darbojas uz                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                   | Pieprasījumi, ko apstrādā `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (un `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, kā arī Telegram tērzēšanas starpniekserveris. Arī vadības paneļa testēšanas galapunkts `/api/guardrails/test`. Bloķēšana pirms izsaukuma atgriež HTTP 400. |
| `runPostCallHooks`                                  | Tikai tērzēšanas atbildes **bez straumēšanas** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Straumētas atbildes to nekad nesasniedz.                                                                                                                                                                                                                                                                                                                      |
| PII straumēšanā                                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), kas pieslēgts apstrādes plūsmai failā `streamingPipeline.ts`, kad ir ieslēgts `PII_RESPONSE_SANITIZATION`. Tas nav aizsargmehānisms, tāpēc atspējošanas kanāli to neietekmē.                                                                                                                                                                                                                           |
| Injekciju aizsardzības starpprogrammatūra (mantotā) | Ikviens `/v1` maršruts, kas satur uzvedni, tostarp tērzēšanas saimes maršruti (skatiet [maršrutu aptvērumu](#injection-guard-route-coverage--red-team-phase-8--block-d)). Tikai uzvedņu injekcijas.                                                                                                                                                                                                                                                                  |

### Kas nav aptverts

- **Multivides, iegultņu un datu maršruti** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nekad nesasniedz reģistru. Tur nedarbojas
  PII maskēšana, akreditācijas datu maskēšana vai modalitāšu tilts. To vienīgā
  pārbaude ir mantotā injekciju aizsardzības starpprogrammatūra.
- **Straumētām atbildēm** netiek piemēroti aizsargmehānismi pēc izsaukuma: netiek izpildīts ne `pii-masker`, ne
  `credential-masker` pēc izsaukuma, un nenotiek bloķēšana pēc izsaukuma. Tiek piemērota tikai straumēšanas PII
  transformācija (kad ir ieslēgts `PII_RESPONSE_SANITIZATION`). Akreditācijas dati,
  kas tiek atkārtoti izvadīti straumētā atbildē, netiek aizklāti.
- **Atspējošanas kanāli un starpprogrammatūra (apzināts risinājums):** starpprogrammatūra izvērtē
  uzvedņu injekcijas ar savu `evaluatePromptInjection()` izsaukumu, nenododot
  nekādu izsaucēja kontrolētu atspējošanas sarakstu. Režīms `block` ir obligāta
  robeža, kuru nevar apiet ar izsaucēja kontrolētiem atspējošanas iestatījumiem, tostarp tērzēšanas saimes maršrutos
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Atspējojot
  `prompt-injection`, tiek izlaists tikai reģistra aizsargmehānisms.

### Kas piekļūst atbildei pirms aizsargmehānismiem pēc izsaukuma

Apstrādes ceļā bez straumēšanas secība ir šāda: atmiņas izgūšana → iebūvēto rīku
izpilde → aizsargmehānismi pēc izsaukuma → iziešana bloķēšanas gadījumā pēc izsaukuma → saglabāšana semantiskajā kešatmiņā.

- **Atmiņas izgūšana** un **rīku izpilde** saņem atbildi, pirms pēcaizsaukuma
  aizsargmehānismi var to pārrakstīt vai bloķēt. Kopš
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) atmiņas
  izgūšanas laikā izgūtais teksts tiek apstrādāts ar `sanitizePII`, ja
  `PII_RESPONSE_SANITIZATION` ir ieslēgts (gan straumēšanas, gan nestraumēšanas režīmā), taču
  atbilde, kuru pēcaizsaukuma aizsargmehānismi vēlāk bloķē, jau ir nodota atmiņai un
  rīkiem.
- **Semantiskā kešatmiņa** saglabā atbildi pēc pēcaizsaukuma apstrādes, tāpēc tā saglabā
  pārrakstīto atbildi, bet bloķēta atbilde nekad netiek saglabāta kešatmiņā. Kešatmiņas ieraksti tiek
  piesaistīti katrai API atslēgai atsevišķi.

## Konfigurācija

Vides mainīgie, kurus nolasa iebūvētie aizsargmehānismi:

| Mainīgais                             | Izmanto                            | Ietekme                                                                                                          |
| ------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                 | Iestatiet `false`, lai pilnībā atspējotu noteikšanu.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                 | Injekciju politika: `warn`, `block` vai `log`. Mantotā vērtība `redact` nepārraksta injekcijas tekstu.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                 | Injekciju aizsargmehānisma režīms; arī DB funkcijas karodziņš, kas **pārraksta** vides mainīgos (DB > ENV).      |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                 | Minimālais nopietnības līmenis, pie kura `MODE=block` noraida: `high` (noklusējums), `medium` vai `low`.         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                 | Mantots aizstājējvārds mainīgajam `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                             |
| `PII_REDACTION_ENABLED`               | `pii-masker`                       | Ja vērtība ir `true`, pieprasījumā tiek aizklāti personas identificējošie dati (neatkarīgi no injekciju režīma). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (turpmākajā apstrādē) | Nosaka maskētāja darbību atbildes pusē.                                                                          |

Modality Bridge aizsargmehānismi nolasa izpildlaika konfigurāciju no DB atbalstītas iestatījumu
krātuves (`getSettings()`), nevis no vides mainīgajiem. Vision primārās atslēgas ir
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` un
`modalityBridgeCacheMaxEntries`. Mantotās
`visionBridge*` atslēgas tiek pieņemtas tikai kā dokumentētais viena cikla lasīšanas
rezerves variants; rakstīšanai no informācijas paneļa tiek izmantotas primārās atslēgas. Noklusējuma vērtības un rezerves varianta
noteikšanas loģika atrodas failā `src/shared/constants/modalityBridgeDefaults.ts`, savukārt mantotās
konstantes ir saglabātas failā `src/shared/constants/visionBridgeDefaults.ts`.

Audio izmanto `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` un `modalityBridgeAudioMaxClips`, kā arī koplietojamos
`modalityBridgeCache*` iestatījumus. Audio nav rezerves varianta ar mantotām atslēgām, jo šīs
atslēgas tika ieviestas līdz ar Modality Bridge shēmu.

Video izmanto `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` un
`modalityBridgeVideoTimeout`, kā arī koplietojamos `modalityBridgeCache*` iestatījumus.
Pēc noklusējuma tas ir atspējots, jo FFmpeg/ffprobe ir neobligātas darbības nodrošināšanas
atkarības un kadru aprakstu ģenerēšana palielina aizkavi un modeļa izmantošanas izmaksas.

## Pielāgoti aizsargmehānismi

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

Darbības:

1. Izveidojiet `src/lib/guardrails/myGuardrail.ts`, paplašinot `BaseGuardrail`.
2. Implementējiet `preCall` un/vai `postCall`.
3. Reģistrējiet importēšanas laikā (izsaucot no `registerDefaultGuardrails`) vai
   izpildlaikā izsauciet `guardrailRegistry.register(...)` — reģistrs aizstāj
   jebkuru iepriekšējo aizsargmehānismu ar tādu pašu normalizēto nosaukumu.
4. Pievienojiet testus direktorijā `tests/unit/` (esošie piemēri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testēšana

Starp testiem izmantojiet `resetGuardrailsForTests()`, lai sāktu no zināma stāvokļa.
Nododiet `{ registerDefaults: false }`, lai sāktu ar tukšu reģistru un
reģistrētu tikai testējamos aizsargmehānismus. Vision Bridge atbalsta atkarību
injekciju (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge nodrošina
līdzvērtīgus integrācijas punktus iestatījumiem, iespējām, STT modeļa izvēlei, akreditācijas datu
pārbaudēm un transkripcijai. Tādējādi testi var pārbaudīt abas plūsmas bez piekļuves datubāzei
vai tīklam.

## Skatiet arī

- `src/lib/guardrails/` — implementācija
- `src/shared/utils/inputSanitizer.ts` — koplietojams detektors, kas nodrošina
  uzvedņu injekcijas noteikšanu un personu identificējošas informācijas (PII) maskēšanu
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge noklusējuma iestatījumi un
  modeļu saraksts, kuriem obligāti jāizmanto tilts
- `src/shared/constants/modalityBridgeDefaults.ts` — koplietojami Vision/Audio izpildlaika noklusējuma iestatījumi
- `docs/architecture/RESILIENCE_GUIDE.md` — neatkarīgs slānis (ķēdes pārtraucējs, nogaidīšanas periodi)
- `docs/reference/ENVIRONMENT.md` — pilna vides mainīgo uzziņa

## Injekcijas aizsardzības maršrutu pārklājums un uzbrukumu simulācija (8. posms · D bloks)

Injekcijas aizsardzība (`createInjectionGuard` / `withInjectionGuard`) aptver visus maršrutus,
kas pieņem lietotāju uzvednes. Tā ievēro `INJECTION_GUARD_MODE` (noklusējums `warn` = tikai reģistrē žurnālā;
`block` = atgriež HTTP 400 `SECURITY_001`).

| Tips            | Maršruti                                                                                                                                             | Noklusējuma režīms |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Teksts (esošie) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn               |
| Ģeneratīvie     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn               |
| Dati            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn               |

Teksta izvilkšana (`extractMessageContents`) aptver `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Uzbrukumu simulācija (katru nakti, `nightly-llm-security.yml`):** promptfoo pārbauda, vai katrs maršruts bloķē
OWASP-LLM korpusu režīmā `INJECTION_GUARD_MODE=block`; garak veic pārbaudes (tās tiek izlaistas, ja nav noslēpuma).
`moderations` ir iekļauts konsekvences labad. Bloķēšanas režīms ir obligāta drošības robeža: `evaluatePromptInjection()`
ignorē katra pieprasījuma atspējošanas sarakstu, ko tam nodod starpprogrammatūra, tāpēc `disabledGuardrails`
**neatbrīvo** maršrutu no šīs aizsardzības ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Nakts darbplūsmai (`.github/workflows/nightly-llm-security.yml`, cron + manuāla
palaišana) ir divi uzdevumi:

- **`promptfoo-guard` (bloķējošs)** — izpilda `promptfoo eval -c promptfooconfig.yaml`
  ar `INJECTION_GUARD_MODE=block`. Katrā uzbrukuma scenārijā (piem., "ignorē visas
  iepriekšējās instrukcijas…", DAN stila ierobežojumu apiešanas mēģinājumi) tiek pārbaudīts, vai atbildē ir
  `error.code === "SECURITY_001"`, proti, vai aizsargmehānisms patiešām noraidīja pieprasījumu.
- **`garak` (informatīvs)** — palaiž garak `--probes promptinject,dan,leakreplay`
  pret lokālu OmniRoute instanci (`http://localhost:20128/v1`). Izpildei nepieciešams
  pakalpojumu sniedzēja noslēpums (`PROMPTFOO_PROVIDER_KEY`); ja tā nav, uzdevums tiek korekti izlaists, un komandai ir pievienots
  `|| true`, tāpēc tas ziņo par rezultātiem, neizraisot CI kļūmi.

Aizsardzības palīgfunkciju (`createInjectionGuard` / `withInjectionGuard`) pārklājums
aptver visus `/v1` maršrutus, kas pieņem uzvednes; uzvednes teksts tiek iegūts no
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, izmantojot
`extractMessageContents()` failā `src/shared/utils/inputSanitizer.ts`.

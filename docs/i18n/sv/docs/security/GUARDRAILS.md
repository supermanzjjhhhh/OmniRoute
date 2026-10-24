# Guardrails (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sanningskälla:** `src/lib/guardrails/`
> **Senast uppdaterad:** 2026-10-17 — v3.8.52 (lade till [Täckning och gränser](#coverage-and-limits):
> vilka rutter och svarsvägar som hookarna når, de sammanslagna inaktiveringshuvudena (#16412), injiceringsläget
> för blockering som en obligatorisk gräns (#16413) och vad som ser ett svar före post-call)

Skyddsräcken upprätthåller säkerhet, policy och innehållsomvandlingar vid gränsen
mellan OmniRoute och uppströmsleverantörer. Varje skyddsräcke kan inspektera (och
valfritt avvisa, omvandla eller annotera) begärans nyttolaster (`preCall`) och
uppströmssvar (`postCall`).

Systemet är **fail-open**: om ett skyddsräcke kastar ett fel under körning loggar registret
felet och fortsätter med nästa skyddsräcke istället för att låta begäran misslyckas.
Blockering är ett explicit beslut (`block: true`), aldrig en olyckshändelse.
Det enda undantaget är en avbruten begäran: när anroparens `signal` avbryts,
avvisar ett skyddsräcke som kastar ett fel hook-körningen istället för att hoppas över.

Hookarna körs **inte** på varje rutt eller varje svar. Läs
[Täckning och gränser](#coverage-and-limits) innan du förlitar dig på ett skyddsräcke som
säkerhetskontroll.

## Inbyggda skyddsräcken

Registret läser in sex skyddsräcken automatiskt i prioritetsordning vid import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Namn                | Fas(er)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lägre prioritetssiffror körs **först**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Basmodellen för GLM 5.3 och `glm-5.3-{low,high,max}` har explicit
metadata för registret/specifikationen `supportsVision:false`. Varianterna av GLM 5.3 Flash
förblir modeller med inbyggd vision-funktionalitet. Claude Codes `/v1/messages`-rutt går in i den
delade `handleChat`-kedjan för pre-call-skyddsräcken **före** översättningen från Claude till OpenAI;
kapslade bilder i `Read`-verktygsresultat måste beskrivas eller hanteras
innan den översättningen lyfter upp dem till OpenAI `image_url`-innehåll (#17069).

Avlyssnar bildbärande begäranden riktade till **modeller utan vision-stöd** och antingen
omdirigerar hela begäran till en visionskapabel modell eller ersätter bilddelarna
med textbeskrivningar som producerats av en konfigurerbar visionsmodell före
uppströmsanropet. Detta gör att enbart textbaserade leverantörer transparent kan hantera
multimodala nyttolaster.

Flöde:

1. Hoppa över om målmodellen redan stöder vision (såvida den inte förekommer i listan
   över tvingade bryggor `isVisionBridgeForcedModel`).
2. Extrahera bilddelar via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerar till den **enhetliga mediedetektorn**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den enda sanningskällan
   som delas med kombokompatibilitetsfiltret.
   Extraktionen är vitlistad till de former som `replaceImageParts` kan foga
   tillbaka (kontraktet för extrahera↔ersätta): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, samt Responses
   API `input_image`. Matchande bilder som är kapslade inuti Claude Code
   `tool_result.content` och Responses-verktygsutdata extraheras också och
   ersätts på sina ursprungliga sökvägar; former som enbart fungerar som indikatorer är kombofiltermaterial
   och extraheras inte.
   Hoppa över om inga hittas.
3. Lös upp körtidskonfiguration via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nya inställningsnycklar för `modalityBridge*`
   vinner; äldre `visionBridge*`-nycklar förblir en **fallback under en cykel**
   (återställningsfönster). Hoppa över före all mediegenomsökning när bryggan är inaktiverad.
4. Lägesväljaren (`modalityBridgeVisionMode`, se tabell nedan) avgör
   omdirigering kontra beskrivning. Omdirigering returnerar `modifiedPayload` med endast `model`
   utbytt, plus metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivningsväg: begränsa antalet bilder till `maxImages`, skapa den uppgiftsmedvetna prompten,
   konsultera beskrivningscachen, anropa visionsmodellen **parallellt**
   (`Promise.allSettled`) och infoga textdelar i form av `[Image N]: <description>` på
   deras plats. En misslyckad beskrivning ger `null`: råbilden bevaras för
   okända/visionskapabla mål (#4012), men ett **bekräftat direkt mål enbart för text**
   eller en kombination helt utan vision får en explicit
   `(unavailable — no vision-capable provider connected)` textstubbe för
   varje obeskriven bild, inklusive partiella fel och bilder som överskrider
   gränsen för beskrivningsanrop (#17069). Den befintliga fallback-mekanismen för kombobeskrivningar
   där alla misslyckats finns kvar på plats (#8430).
6. Returnera `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Lägesväljare (`modalityBridgeVisionMode`)

| Läge       | Standard | Beteende                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Äldre heuristik, oreviderad (#6640/#7204): icke-kombinationsmodeller/`auto/`-modeller dirigeras om till den bästa visionsmodellen om inte originalmodellen redan har användbara inloggningsuppgifter (beskriv då istället); kombinationsmål beskriver alltid.                                                                    |
| `describe` |          | Beskriv alltid – omdirigeringsblocket hoppas över helt; användarens valda modell svarar alltid.                                                                                                                                                                                                                                  |
| `reroute`  |          | Tvinga omdirigering: skyddet för modeller med bevarade inloggningsuppgifter kringgås. Omdirigeringens **mål**-inloggningsskydd gäller fortfarande – när det inte finns något användbart visionsmål blockerar bryggan med ett tydligt fel i stället för att beskriva eller skicka råa bilder till ett mål som endast stöder text. |

Tvingade lägen kortsluter **innan** auto-heuristiken körs; `auto`-beteendet är byte-identiskt med säkerhetsspärren före PR-1.

#### API-nyckelns omfattning (`visionBridgeKeyScope.ts`)

När anroparens API-nyckel begränsar `allowedConnections`, kvotpooler (`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), väljer bryggan endast omdirigerings- och beskrivningsmodeller som nyckeln får använda, på anslutningar som nyckeln får använda. Beskrivningsanropet går därefter alltid genom OmniRoute-självloopen med headern `x-omniroute-self-loop-key-id`, vilket gör att den mottagande chatbegäran tillämpar den nyckelns anslutnings- och modellpolicy igen. `enforceApiKeyPolicy()` respekterar den headern enbart tillsammans med självloopens bearer-token, vilket innebär att den endast kan begränsa åtkomsten, och ett id som inte kan matchas avvisas.

Om ingen visionsmodell är tillåten för nyckeln, avvisar ett **bekräftat text-endast-mål** bildbegäran lokalt med ett tydligt HTTP 400 i stället för att vidarebefordra bildbyte till en uppströmsnod som saknar stöd för det (#17069). För mål med okänd eller inbyggd visionsförmåga behåller beskrivningssökvägen sitt tidigare fail-open-beteende (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Begäranden utan nyckel, och nycklar utan dessa begränsningar, beter sig exakt som tidigare.

#### Aktivitetsmedveten beskrivningsprompt (`modalityBridgeVisionTaskAware`)

Standardvärde **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) fogar texten från det **senaste användarmeddelandet** (stympat till 500 tecken) till grundbeskrivningsprompten, vilket styr beskrivningen mot det som användaren faktiskt frågade efter (codex-vision-proxy-mönstret) och ber visionsmodellen att transkribera synlig text. När flaggan är avstängd – eller om det inte finns någon användartext – används grundprompten oförändrad.

Beskrivningssjälvloopens egna OpenAI-kompatibla anrop (`callVisionModelSingle()` i `visionBridgeHelpers.ts`) begär alltid `image_url.detail: "high"` – villkorslöst för varje anropare/leverantör, utan att vara beroende av någon klientsignal. Lågdetaljsampling försämrar OCR-noggrannheten just för den texttranskriberingsuppgift som denna prompt efterfrågar, så själva beskrivningsanropet begär alltid hög detaljnivå oavsett vilken detaljnivå den ursprungliga inkommande begäran använde. Detta påverkar endast den interna begäranskroppen för beskrivningen; det ändrar inte hur OmniRoute vidarebefordrar anroparens egen `image_url.detail` i den primära begäran – den standardinställningen tillämpas separat, och endast för identifierade OpenCode-klienter, i `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic wire-format-grenen av beskrivningssjälvloopen saknar fältet `detail` och påverkas inte av någondera standardvärdet.

#### Utdata-tak för beskrivning (`modalityBridgeVisionMaxChars`)

| Nyckel                         | Standard | Intervall           |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) innebär **inget tak** – beskrivningen som returneras av `callVisionModel()` skickas vidare oförändrad, vilket bevarar det befintliga beteendet. Valfritt värde i intervallet 100–50000 trunkerar beskrivningen med ett `…`-suffix innan den fogas in igen som `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`). Höj detta värde för detaljtunga OCR-uppgifter där nedströmsmodellen behöver hela transkriptionen; sänk det för att begränsa token-användningen på pratsamma visionsmodeller. Instrumentpanelens fält finns på fliken Visions avancerade panel (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) och tvingar alla värden mellan 1 och 99 upp till minimivärdet 100 medan ett explicit `0` lämnas orört – `0` är ett giltigt Zod-värde i sin egen rätt (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), inte enbart standardvärdet för "ej satt".

#### Beskrivningscache (`modalityBridge/bridgeCache.ts`)

In-minnes LRU- + TTL-cache för beskrivningsutdata, delad över hela processen. Nyckel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med längdprefixinramning (inga kollisioner vid fältgränser). Modellkomponenten är den **konfigurerade** bryggmodellen, inte den modell som faktiskt svarade – `callVisionModel` kan göra en fallback internt, och att skapa nycklar per försök skulle fragmentera cachen. Misslyckade beskrivningar cachelagras aldrig. Inställningar:

| Nyckel                          | Standard | Intervall |
| ------------------------------- | -------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`   | —         |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000   |

#### Normalisering av fjärrbilder (självloop för beskrivning/base64-hämtning)

När bryggan hämtar en **fjärrbild** själv — Anthropic describe-självanropet och base64-konverteringen för claude-wire-formatet (`ensureBase64ImagesForClaudeWire`), båda via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — skickas den resulterande data-URI:n genom `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) innan den bäddas in i visionsmodellens förfrågan. För stora bilder skalas ner till en **2048px lång kant** (vilket matchar den storleksgräns som OpenAI/Anthropic redan tillämpar på serversidan), vilket minskar uppladdningsstorlek/latens utan att ändra vad visionsmodellen ser. Skalningen använder `sharp`, som laddas via dynamisk import: på en plattform där dess nativa binärfil inte kan laddas, kastar `normalizeDataUri()` **aldrig några undantag** — den faller tillbaka på en direktöverföring av originalbytena, så att beskrivnings-/base64-konverteringsflödet alltid fortsätter att fungera. Icke-bildbyten (en hämtning som inte returnerade en avkodbar bild) skickas också vidare oförändrade. Denna normalisering är begränsad till bilder som bryggan hämtar för sitt eget självanrop — den tillämpas aldrig på anroparens råa vidarebefordrade payload, vilket är i linje med principen om att mutationer endast sker vid aktivt val (opt-in) (Hård regel #20).

#### Inställningsschema + migrering

De nya nycklarna `modalityBridge*` valideras med Zod i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trion `modalityBridgeCache*` samt gruppen `modalityBridgeAudio*` som används av Audio Bridge. Migreringen `141_modality_bridge_settings.sql` kopierar befintliga äldre `visionBridge*`-värden till de matchande nya nycklarna (idempotent, skriver aldrig över ett `modalityBridge*`-värde som har angetts av en operatör); de äldre nycklarna accepteras fortfarande som läsfallback under en releasesykel.

#### Transparensheader + statistik

Beskrivningstransformerade svar bär `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (byggd av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`, stämplad av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerade förfrågningar får **ingen** header — payloaden lämnades oförändrad och modellbytet är redan synligt i svarskroppens `model`-fält.

`GET /api/modality-bridge/stats` (administrationsautentisering, samma nivå som `GET /api/settings`) returnerar de minnesbaserade räknarna per modalitet `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` för `vision`, `audio` och `video`. `averageLatencyMs` använder `latencySamples`, inte alla försök, som nämnare; en åtgärd utan tidsmätning hittar inte på ett prov på noll millisekunder. `bridged` förblir det bakåtkompatibla aliaset för lyckade konverteringar; misslyckade försök ökar det inte. Räknarna nollställs vid omstart av processen av design (telemetri, inte bokföring).

#### Instrumentpanelskonfiguration

Den dedikerade instrumentpanelssidan är `/dashboard/settings/modality-bridge`. Dess URL-adresserbara flikar `Vision`, `Audio` och `Video` bevarar frågeparametrar samtidigt som `tab`-värdet växlas. Vision-fliken exponerar aktivering, läge, modellval (inklusive den automatiska standardmodellen), aktivitetsmedveten promptning, avancerade gränser för timeout/bild/beskrivningslängd/cache, körtidsräknare och en skyddad exempelförfrågan. Audio-fliken är också live: den exponerar aktivering, en modellväljare enbart för STT med Auto, gränser för timeout/max-klipp, ljudräknare och ett `input_audio`-exempeltest. Video-fliken är funktionell: den rapporterar körtidstillståndet för FFmpeg/ffprobe — ett av fyra explicita UI-tillstånd (`unknown` medan probningen pågår eller inte kunde slutföras, `restricted` på en icke-loopback-instrumentpanelsvärd där probningen hoppas över på klientsidan, `unavailable` när den har probats och bekräftats saknas, eller `available` med FFmpeg/ffprobe-versionerna) — sparar gränser för aktivering/modell/bildruta/video/timeout, filtrerar modellväljaren till visionskompatibla modeller och exponerar videoräknare.

Det tidigare Vision Bridge-kortet under AI-inställningar är en kompatibilitetslänk till den nya sidan; det äger inte längre en andra kopia av formuläret. Media Providers länkar också arbetsflöden för Image-to-Text och Speech-to-Text till motsvarande Modality Bridge-flikar utan att ta bort den befintliga Speech-to-Text-lekplatsen.

**Självloopsförbikoppling för antagning:** när beskrivningsanropet dras via OmniRoutes egna `/v1`-självloop (icke-standardiserad leverantörsmodell), skickar underförfrågan `x-omniroute-admission-bypass: internal` och autentiseras med den upplösta självloppsautentiseringsuppgiften — den lokala `sk_omniroute`-sentineln i lokalt läge, eller den operatörskonfigurerade miljönyckeln `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) så att distributioner med `REQUIRE_API_KEY=true` fortfarande kan köra beskrivningsanropet. Förbikopplingen respekteras endast för dessa exakta autentiseringsuppgifter, så externa klienter kan inte använda headern för att hoppa över antagningen.

Äldre standardvärden finns i `src/shared/constants/visionBridgeDefaults.ts`; de nya standardvärdena för läge/aktivitetsmedvetenhet/cache och inställningsupplösaren finns i `src/shared/constants/modalityBridgeDefaults.ts`. Skyddsräcket exponerar ett `deps`-konstruktoralternativ så att tester kan injicera falska implementeringar av `getSettings` och `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Avlyssnar ljudbärande chattförfrågningar innan de når ett mål som inte är känt för att acceptera ljudindata. Den omdirigerar aldrig chattförfrågan: ljuddelar transkriberas via det befintliga OpenAI-kompatibla multipart-slutpunkten och den valda chattmodellen fortsätter med texttranskriptioner.

Flöde:

1. Lös `supportsAudio` genom `getResolvedModelCapabilities()`. Explicita
   metadata för leverantörsregistret vinner, följt av statiska modellmetadata
   och sedan synkade `modalities_input`. En deklarerad indatalista utan
   `audio` är `false`; inga bevis på kapacitet förblir `null`. Både `false` och
   `null` aktiverar den konservativa bryggan, medan `true` kringgår den.
2. Lös inställningar för `modalityBridgeAudio*` och extrahera skarvningsbara
   toppnivå-ljuddelar från varje meddelande via den delade detektorn
   `detectMediaParts()`. Stödda format är OpenAI `input_audio`, `audio_url`, och
   `source.media_type: "audio/*"`. Nästlat ljud detekteras för routning men tas
   inte bort av skarvningsvägen. Arbetet begränsas av
   `modalityBridgeAudioMaxClips`; senare delar förblir orörda.
3. Respektera en konfigurerad `provider/model`, eller låt
   `selectAudioBridgeModel()` gå igenom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil
   katalogordning och välja den första modellen med en användbar aktiv
   leverantörsbehörighet.
4. `callAudioTranscription()` konverterar base64/data-URI-ljud till en multipart-
   `file`, eller laddar ner en fjärransluten `audio_url` genom skyddet för
   utgående trafik (endast publika adresser) med DNS-pinnning och en gräns på
   25 MB. Den skickar sedan (POST) filen och den valda modellen till den lokala
   självloopen `/v1/audio/transcriptions`, autentiserad med
   `resolveSelfLoopBearer()`. Den befintliga transkriberingsvägen utför normal
   sökning efter inloggningsuppgifter, hantering av nedkylning/frekvensbegränsning
   och leverantörsdispatch.
5. Lyckade anrop ersätter sina delar med `[Audio N]: <transcript>`. Anrop körs
   med `Promise.allSettled`: ett enskilt fel bevarar den ursprungliga ljuddelen
   (kontrakt #4012). Om alla anrop misslyckas och målet bevisligen har
   `supportsAudio === false`, blir delarna
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430). För
   ett okänt mål (`null`) förblir ett resultat där allt har misslyckats orört.
   Ett bevisat text-endast-mål utan användbara STT-inloggningsuppgifter får
   samma explicita stubb utan att göra ett nätverksanrop.

Lyckade transkriptioner använder den processomspännande LRU/TTL-cachen för Modality Bridge. Nyckeln kombinerar ljudreferensen, den stabila operationsetiketten `audio-transcription` och den valda STT-modellen; fel cachas aldrig. Ljudförsök uppdaterar de delade räknarna `bridged`, `cacheHits`, `failures` och `lastUsedAt`. Transformerade svar bär
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; anrop som inte har rörts får inget Audio Bridge-segment.

Körtidsinställningar är databasbaserade och Zod-validerade:

| Nyckel                        | Standardvärde | Intervall         |
| ----------------------------- | ------------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                 |
| `modalityBridgeAudioModel`    | `""`          | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10              |

Den delade cachen styrs fortfarande av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` och `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepterar videodelar på toppnivå i Chat Completions-meddelanden (`messages`)
och Responses API-indata (`input`) innan ett mål utan känd inbyggd videokapacitet
anropas. Stödda format är `input_video`, `video_url`, `video_source`,
HTTPS-webbadresser och `data:video/*;base64,...`-data-URI:er. Vanliga filnamn i
text behandlas inte som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ansvarar för
begärangenomsökning, kapacitets-/policykontroll, aggregering per begäran och
svarsnyttolasten. Videobaserat arbete – hämtning, helresultatscachen, beskrivning
av en bildrutasekvens (som sammanfogar eventuella anropsdeklarerade ljudtranskript)
samt mätvärden/avbrott/rensning per försök – döljs bakom `processVideoPart` i
`videoBridgePipeline.ts`, vilket anropas en gång per videodel i `preCall`-loopen.
Modulen definierar också de explicita portgränserna `VideoMediaBrokerPort`
(hämtning av byte och extrahering av samplade bildrutor),
`VideoAudioTranscriptionPort` (sammanfogning av ett anropsdeklarerat ljudtranskript
med de samplade bildtexterna) och `VideoDrilldownPort` (persistensgränsen för
bildrutefdjupdykning; ännu inte inkopplad i `processVideoPart` – endast den separata
rutten `/api/modality-bridge/video/drilldown` skriver djupdykningsposter i dag).

Den publika `/v1`-anropsvägen importerar eller anropar aldrig en underprocess.
Fjärrvideor laddas ner under en gräns på 50 MiB; inbäddade base64-videor har ett
konservativt avkodat tak på 36 MiB per video så att modell-/meddelande-/inramningsomslaget
kan hålla sig inom den publika JSON-begärans antagningsgräns på 50 MiB.
Uppskattningar av inbäddad längd och avkodad storlek kontrolleras före allokering.
HTTPS krävs på den ursprungliga fjärrwebbadressen och varje omdirigering, med det
befintliga skyddet för utgående trafik (endast publika adresser) med DNS-pinnning.
Byten passerar sedan den exakta interna mäklargränsen
`POST /api/modality-bridge/video/extract`. Den rutten är både `LOCAL_ONLY` och
`SPAWN_CAPABLE`, accepterar endast en processautentiserad, betrodd loopback-begäran
och accepterar aldrig en webbadress, filsystemssökväg, körbar fil eller argumentlista.
API:ets pipeline för meddelandekroppens storlek och hanterarens inkrementella kroppsläsare
upprätthåller oberoende ett indatatak på 50 MiB för mäklaren. Dess begränsade kö
kör en extrahering i taget, tillåter fyra väntande jobb och sätter ett tak för
väntande indata på 100 MiB.

Inne i mäklaren läser `ffprobe` en privat lokal fil; den fasta formatvitlistan exkluderar spelliste- och manifestformat. För tillåtna behållare i MOV-familjen förblir externa MOV-datareferenser inaktiverade som standard, och det fasta kommandot väljer inte att aktivera dem. Både `ffprobe` och `ffmpeg` använder protokollvitlistan `file`-endast, en tråd, fasta argumentmatriser, inget skal, och exekverbara filer som löses från `PATH`. Omslagsströmmar med bifogade bilder är inte spelbara kandidater. Alla spelbara strömmar måste uppfylla gränserna, och en explicit standardström föredras framför den deterministiska återgången till lägsta index. Videor är begränsade till 600 sekunder, 8 192 pixlar per dimension och 33 554 432 källpixlar. FFmpeg samplar 1–16 JPEG-mittpunktsbildrutor, skalar ner den långa kanten till högst 1 024 pixlar utan att skala upp mindre indata, och tar aldrig emot en URL. Sampling är `uniform` som standard. De valfria policyerna `scene_aware` och den experimentella `segment_aware` utför en extra fast FFmpeg-passering över den redan validerade lokala strömmen, väljer avgränsade `showinfo`-scentidsstämplar och faller deterministiskt tillbaka på samma enhetliga mittpunkter vid detektorfel, timeout, felaktigt formaterad utdata eller en tom kandidatuppsättning. Det segmentmedvetna läget allokerar mittpunktsprover proportionellt mot de validerade scenintervallen; segmentmedvetna bevis och återgångsbeteende beskrivs nedan. Den hårda gränsen på 16 bildrutor tillämpas efter urval i varje policy. När en scenmedveten begäran endast har en budget på en bildruta, används den enhetliga mittpunkten för det aktiva hela videofönstret eller fokusfönstret och rapporterar `policyEffective: uniform`: en enda vald scenbildruta kan inte bevara båda temporala ändarna. En anropare kan valfritt tillhandahålla ett ändligt fokusfönster (`start`/`end` sekunder); gränserna kläms till mediets varaktighet, omvända eller icke-ändliga fönster avvisas, och alla samplingspolicyer utförs endast inom det normaliserade intervallet. Det resulterande fönstret inkluderas i samplingsmetadata och i det icke-betrodda beskrivningsprefixet så att nedströmsmodeller kan skilja ett fokuserat utdrag från hela tidslinjen.

Semantiskt bildtextfokus är en separat, explicit inställning. Standardanalysläget `full` bevarar den befintliga bildruteprompten och vidarebefordrar aldrig begäranstext till bildtextmodellen. I `focused`-läget läser bryggan endast den senaste icke-tomma användarskrivna `text`/`input_text` från samma Chat- eller Responses-behållare, normaliserar den till NFC, komprimerar kontrolltecken och blanksteg, och begränsar den till 500 Unicode-kodpunkter. Ett tomt resultat faller tillbaka på den exakta `full`-prompten. Ett användbart tips serialiseras som JSON i ett dedikerat block för icke-betrodd användarkontext och får endast prioritera observerbara detaljer; det kan inte åsidosätta den separata varningen mot att följa instruktioner som är synliga eller hörbara i mediet. Textuellt fokus härleder aldrig `start`/`end` eller ändrar den temporala samplaren.

#### FU-07 strukturella segmentbevis

`segment_aware` använder en avgränsad föranalyspassering över den redan validerade lokala videoströmmen. Den fasta filterkedjan skalar först till högst 320 pixlar på bredden, detekterar scenändringar och frysta intervall, och samplar sedan med 1 bildruta per sekund för oskärpa, genomsnittlig luma och spatial/temporal information. Passeringen är begränsad till 600 strukturella prov, en FFmpeg-/filtertråd, samma protokoll- och behållarvitlistor enbart för `file`, en processutdatagräns på 1 MiB och högst 30 sekunder inom mäklarens delade avbrotts-/tidsfrist. Den accepterar aldrig ett kommando, filter, sökväg eller URL från begäran.

De strukturella värdena är deterministiska samplingsbevis, inte semantisk videoförståelse. De härleder inte subjekt, handlingar, bildtexter, tal eller användarens avsikt. Scen- och frysningsgränser bildar segment; frysningstäckning, oskärpa, exponering, spatial detaljrikedom och temporal förändring påverkar endast hur den befintliga budgeten på 1–16 bildrutor fördelas. Ett helt fryst segment begränsas till en bildruta, medan icke-frysta segment konkurrerar om den återstående budgeten. När gränserna är fler än bildrutorna bevaras enhetlig tidslinjetäckning så att snabba tidiga klipp inte kan dölja ett långt avslutande segment. Scengränser inom analysupplösningen på 1 sekund för en frysningsgräns sammanslås.

Saknade filter, felaktigt formaterade/tomma bevis, ett detektorfel eller den avgränsade föranalystimeouten misslyckas öppet till den exakta enhetliga mittpunktspolicyn. Ett anropsavbrott eller en mäklartidsfrist misslyckas inte öppet: den avbryter den pågående underprocessen, förhindrar senare extrahering av bildrutor, och det privata tillfälliga trädet tas bort i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererar deterministiska riktiga FFmpeg-fixturer för besparingar vid bildtextanrop efter avduplicering, allokering av budget för tät rörelse, oskärpes-/exponerings-/SI-TI-bevis, snabba klipp med en lång svans samt falska positiva resultat vid gradvis toning. Den registrerar föranalysens väggklocktid och, där `/usr/bin/time` är tillgängligt, underordnad CPU och topp-RSS. Dess kvalitetskontroller är enbart strukturella orakel. Kvaliteten för verkliga bildtextmodeller förblir `HOLD` eftersom denna testrigg inte har någon auktoriserad slutpunkt eller fryst domare. Monetära besparingar förblir också `HOLD` om inte `--caption-cost-per-call-usd` tillhandahåller en explicit positiv uppskattning per anrop; skriptet hittar aldrig på något av resultaten.

Varje bildruta är begränsad till 4 MiB, alla råa bildrutor tillsammans till 23 MiB, och det serialiserade mäklarsvaret till 32 MiB. En privat temporär katalog tas bort i `finally`. OmniRoute paketerar inte FFmpeg och accepterar inte en anpassad sökväg för körbar fil. Innan bildtextning tillämpar bryggan en konservativ visuell dedupliceringspassering: varje JPEG reduceras till en 16×16 gråskalebuffert och jämförs enbart med den sist behållna bildrutan. För en begärd bildtextbudget över en bildruta tillhandahåller extraheringen en begränsad kandidatpool på upp till dubbelt så stor budget och aldrig mer än 16 bildrutor. Den begärda gränsen tillämpas först efter deduplicering, där den första och sista valda kandidaten bevaras under den slutliga gallringen när budgeten är minst två. Den versionshanterade policyn `grayscale-16x16-mean-cells-v2` använder det större värdet av genomsnittligt lumadelta och förhållandet mellan tumnagelceller vars normaliserade delta är minst 0.05. Duplikatströskeln är konstanten 0.04, vald för förutsägbarhet snarare än att exponeras som en körtidsinställning. Denna sekundära högkontrastsignal bevarar små rörelser och synliga textändringar som en jämförelse baserad enbart på medelvärde kan dölja. Jämförelse- eller avkodningsfel misslyckas öppet och behåller täckningen. Utdatans metadata separerar extraherade kandidater, framgångsrikt använda bildrutor och borttagna visuella duplikat.

En explicit markerad videodel kan begära ett tidsstämplat kontaktblad. Bryggan bygger som mest ett JPEG-rutnät med 4 kolumner och 16 bildrutor. Varje cell på 512 pixlar bränner in sin källtidsstämpel i ett högkontrastfält längst ner, medan samma tidsstämplar finns kvar i textuell metadata för nedströmsassociation och granskning. Det kompletta JPEG-formatet förblir begränsat till maximalt 32 MiB. Om `sharp` inte kan avkoda eller komponera rutnätet faller bryggan tillbaka på de enskilda JPEG-bildrutorna; en klientavbrottsignal propagerar fortfarande genom kontaktbladsåtgärden.

Promotionsbevis är medvetet separerat från det syntetiska kompositionsmikrobenchmarket. `scripts/perf/video-bridge-contact-sheet-eval.ts` definierar en schemaversionerad A/B-testrigg för riktiga OpenAI-kompatibla synmodeller. Den mäter leverantörsrapporterade tokens, end-to-end-väntetid (inklusive komposition av kontaktblad), antal modellanrop och manifestdefinierade faktakvarhållningar. Råa modelsvar skrivs inte till rapporten; endast SHA-256-sammanfattningar och matchade faktaj-ID:n behålls. Testriggen gör inga nätverksanrop eller betalda modellanrop om inte `--execute-real` skickas med och `--model`, `OMNIROUTE_BASE_URL` samt `OMNIROUTE_API_KEY` har konfigurerats. Utan denna explicita riktiga körning förblir dess maskinläsbara dom `HOLD`; enbart mätningar av syntetisk nyttoLast/anropsantal utgör inte promotionsbevis.

Anropare kan bifoga en valfri `transcript.cues`-array till en videodel som stöder det när de redan har anpassad text. Varje textsegment måste innehålla `text`, ett ändligt `start`/`end`-intervall inom den undersökta varaktigheten samt en godkänd `source` (`client`, `embedded` eller `audio-bridge`); `confidence` har standardvärdet `1` och måste ligga mellan `0` och `1`. Exakta duplikat av textsegment slås samman. OmniRoute startar aldrig transkribering från denna metadata: validerade textsegment kopieras till det beskrivna resultatet med källa, konfidens och intervall, och återges som icke betrodda observationer vid sidan av bildtexterna. Ogiltig, utom-intervall- eller ursprungslös text avvisas i stället för att blandas in i bildtextströmmen. Båda transkriptkanalerna i anropskroppen normaliserar den tillhandahållna proveniensen till `client`, inklusive självassertade `embedded`- eller `audio-bridge`-etiketter. Endast en serverägd adapter kan tilldela dessa betrodda etiketter via det kodspecifika argumentet `trustedSource`; ett JSON-fält i en anmodan kan inte nå det argumentet. Transkripttext förblir icke betrott mediabaserat innehåll, oavsett dess ursprung, och får aldrig avgöra behörighet.

En avancerad anropare kan tillhandahålla ett `audioTranscript`-spår för samma video; det behandlas som klienttillhandahållen text, inte som bevis på servertranskribering. Fusionssömmen kör visuella observationer och ljudobservationer under en gemensam tidsgräns och avbrottssignal, ordnar dem på en gemensam tidslinje, slår samman exakta duplikat och rapporterar ett delresultat när endast den ena sidan lyckas. Ett ogiltigt `audioTranscript` försämras till detta delresultat – den visuella beskrivningen behålls och ljudgrenen loggar en sanerad felkod – i stället för att hela videon misslyckas. Tillgänglighet per gren, delar-flaggan och de sanerade felkoderna bevaras i det beskrivna resultatet, i skyddsräckets metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), i resultatcachens metadata samt i bryggans fusionsräknare. Standardvägen för Video Bridge anropar inte tal-till-text eller laddar ner en andra mediakopia; utan det explicita spåret förblir den enbart videobaserad.

**Transkriptbehållning (#12150 P1).** Detta tillämpas automatiskt när Video Bridge (som i sig är valbar) återger en transkript-cue – det finns ingen separat behållningsflagga. När en begäran återger någon transkript-cue (en anropardeklarerad `transcript` eller en sammansmält `audioTranscript`), markerar säkerhetsspärren den som `videoBridgeObserved` och skapar en redigerad skugga av videobeskrivningen — en identisk återgivning där varje cues fritextdel ersätts av `[redacted-video-transcript]`, byggd genom att ersätta det strukturerade cue-fältet innan strängen sammanställs (aldrig genom att tolka den platta texten, så inget cue-innehåll – vare sig fientligt eller vanligt, inklusive kroppar som innehåller `]` såsom `[inaudible]`/`[music]` – kan överleva). Den sparade anropsloggens begäranskropp byter ut varje videohärledd textdel mot den redigerade skuggan, matchad med innehållsjämlikhet; ankaret `fullText` läses om från den färdiga säkerhetsspärrens payload före anropet, så att matchningen fortfarande lyckas efter att senare kedjespärrar (PII- och inloggningsmaskerarna, prioritet 10/95) har skrivit om beskrivningstexten på plats och efter att systemprompt/överlämning/minnesinjektion har omformat meddelandearrayen. Kroppen som skickas uppströms till modellen är oförändrad. En observerad begäran fyller inte heller i något beständigt minne (både begärans- och svarshärledd extrahering hoppas över), så modellens eget svar kan inte spegla transkripttext i minnet.

**Råa videofält (#12430).** När bryggan är aktiverad och internt videostöd är okänt eller saknas, aktiverar även definierade `transcript`/`audioTranscript`-fält `videoBridgeObserved`, även efter ett beskrivningsfel eller en `maxVideos`-gräns. `null` och tomma strängar räknas; saknade fält och icke-videometadata gör det inte. Sparade kopior redigerar dessa fält eller utelämnar begäran, och cachar/minne kringgås.

På dessa reservvägar blir giltiga anrops-cues stödda `text`/`input_text`-delar snarare än icke-standardiserade leverantörsfält. Båda spår som tillhandahålls av begäran förblir icke-betrodda `client`-observationer, med en uttrycklig varning om att videon inte beskrevs och att tidsstämplar inte verifierades mot mediet. De befintliga budgetarna på totalt 256 cues / 64 KiB och per cue gäller för de två spåren tillsammans; tidsstämplar måste rymmas inom mäklarens tak på 600 sekunder och eventuellt tillhandahållet fokusfönster. Ogiltiga spår kastas bort, inte vidarebefordras som godtycklig text; ett giltigt syskonspår kan fortfarande användas såvida inte deras kombinerade budget överskrids. Null/tomma fält lägger inte till någon text. Ingen mediabehämtning eller transkribering läggs till av denna reservväg. Transkriptexpansionsfält tas bort från reservvideobäraren och dess `video_url`/`source`-objekt. OpenAI:s trådtillåtelista förblir strikt; okända nativa videobärare förblir tillgängliga och kända text-endast-mål behåller säkra markörer. Strukturerade redigeringsskuggor skyddar den tillagda transkripttexten, medan den ursprungliga anropsägda begäran förblir oförändrad. Nativt stödda mål och inaktiverade bryggor behåller sitt befintliga förbikopplingsbeteende.

Ytterligare sparade kopior använder samma signal för observerad begäran. Råögonblicksbilden av klientförfrågan före säkerhetsspärren, den väntande begäran i minnet och loggen för tidigt avvisade förfrågningar ersätter strukturellt transkriptfält i videodelar; strängprompter som syntetiseras av pipelinesteg och kontextöverlämning redigeras vid den sparade begäranskroppens slutpunkt. Den sparade markören `video_content_removed` gör att `previous_response_id`-fortsättningen misslyckas stängt snarare än att rekonstruera text som avsiktligt har kastats bort. Om en observerad begäran förlorar sin redigeringsskugga per del före loggning, eller om till och med en av flera videoskuggor inte matchar efter senare begäransmutationer, utelämnas den sparade begäranskroppen helt istället för att behålla ett delvis redigerat transkript.

För en observerad begäran kan ett modelsvar citera vilken del som helst av transkriptet utan en strukturerad cue-gräns. Dess sparade anropsloggs `responseBody` ersätts därför med en utelämnandemarkör; den detaljerade pipeline-artefakten (som kan inkludera uppströms-/klientkroppar och strömdelar) sparas inte. Semantiska cachar, idempotenscachar och resonemangsuppspelningscachar kringgår läsningar och skrivningar för den begäran. Leverantörsbegäran och det klientvisliga svaret förblir oförändrade. Tidiga keepalive-byte töms från den tillfälliga bufferten när den detaljerade artefakten utelämnas. Kiros felaktigt formaterade EventStream-varning rapporterar endast payloadens byte-antal, aldrig dess innehåll eller JSON-tolkens råa fel.
Detta hävdar inte att varje orelaterad leverantörs-/plugin-diagnostik har granskats; den bredare rensningen av sparade slutpunkter spåras i #11658.

Den interna livscykeln för `/api/modality-bridge/video/drilldown` är ett separat, loopback-/token-autentiserat cachesubstrat. Varje åtgärd kräver dessutom ett kanoniskt opakt principal-ID. Innan en produktionsanropare aktiveras måste den härleda det ID:t från den autentiserade klientorganisationen och får aldrig vidarebefordra ett klientvalt värde. Cachenycklar binder den principalen till kanoniska sessions- och videoreferens-ID:n, lagrar endast deras SHA-256-härledda nycklar och begränsar både läsningar och radering till samma principal. Cachen lagrar som mest 16 härledda JPEG-ramar per post, låter dem gå ut efter tio minuter och stöder begränsade `start`/`end`-läsningar eller explicit radering av sessionen.

Varje principal är begränsad till 16 poster och 64 MiB kanonisk JPEG-data. Dessa gränser är oberoende av det globala taket på 64 poster / 256 MiB: principalens kvottryck vräker endast den principalens minst nyligen använda poster innan global LRU-vräkning beaktas. Utgångna poster rensas bort från både principal- och global bokföring vid cacheaktivitet, medan avbrutna åtgärder och valideringsfel inte utför en partiell ersättning.

Cachen avvisar icke-kanonisk Base64, överflödig utfyllnad, media som inte är JPEG, felaktiga eller trunkerade JPEG-filer, samt JPEG-filer som ger upphov till en varning under en begränsad fullbilds-`sharp`-avkodning. Den kodar om varje accepterad bild till en kanonisk JPEG, härleder bredd och höjd från de avkodade bytena i stället för att lita på anroparens fält, och kastar bort eventuella efterföljande polyglott-byten i stället för att behålla dem. Endast den begränsade kanoniska komprimerade bufferten debiteras för båda kvoterna. JSON-överföringsgränsen inkluderar Base64-omkostnader för taket på 32 MiB för avkodad indata. Varje lagrad härledning registrerar sitt validerade JPEG-format/upplösning, samplingspolicy, härledningsversion, skapelsetid, serverberäknat innehålls-hashvärde och hashade föräldrareferens plus den betrodda anroparens föräldrainnehålls-hashvärde. Avbrytande kontrolleras mellan asynkrona avkodnings-/hashningsfaser före den atomära cachelagringen.

Denna tranch ansluter ännu inte en produktionsproducent till rutten och tillhandahåller inte val av flersupplösningsvarianter. Den transparenta Video Bridge-begäransvägen medför därför inget extra arbete, medan klientbundna principalhärledningar och hela FU-08-livscykeln med flera upplösningar förblir explicit uppföljningsarbete snarare än dokumenterat som komplett beteende.

Bildrutor förses med bildtexter sekventiellt med den konfigurerade videomodellen. En tom videoöverstyrning ärver Vision-inställningen; om båda är tomma väljer Visions automatiserade router den effektiva visionskapabla modellen. Framgångsrika bildtexter ersätter den ursprungliga delen med ett stabilt `[Video description:`-prefix som också märker texten som en otillförlitlig mediabaserad observation och talar om för nedströmsmodeller att inte följa instruktioner som finns i media. Cache-nycklar för bildrutebildtexter inkluderar JPEG-byten, prompt, tidsstämpel och effektiv modell; endast framgångsrika bildtexter cachas. Cacheposter behåller den faktiska framgångsrika producentmodellen, inklusive en reservmodell; bryggan rapporterar `mixed` när olika bildrutor producerades av olika modeller. En cacheträff återanvänder den producentidentiteten i stället för att märka om den som den begärda dirigeringsplanen. Hela videons resultatcache är nycklad mot varje indata som ändrar utdata — prompt, effektiv modell, samplingspolicy, bildrutetäthet, semantiskt analysläge, SHA-256-fingeravtrycket för den normaliserade fokusindikationen, fokusfönster, `transcript`, `audioTranscript` och kontaktarksflaggan — så att ändring av någon av dessa dimensioner ger en cachemiss, aldrig en föråldrad återanvändning. Den visuella dedupliceringspolicyversionen, tröskelvärdet och det begränsade antalet kandidatbildrutor är också explicita i resultatcache-nyckeln och metadata; en policyändring kan därför inte återanvända en föråldrad helvideobeskrivning. Resultatcache v4-metadata behåller läget och fingeravtrycket, aldrig råanvändaruppgiften. Skyddsräckets metadata rapporterar både de begärda och effektiva analyslägena; ett begärt `focused`-läge utan användbar användartext rapporteras som effektivt `full`.

Skyddsräcket extraherar varje videodel som stöds men beskriver inte fler än `modalityBridgeVideoMaxVideos`. För ett mål som har bevisats ha `supportsVideo === false` blir misslyckade videor och videor som överskrider gränsen explicita säkra textmarkörer så att ingen rå video överlever. När funktionen är okänd behåller dessa delar sin videobärare; eventuell reservtranskribering följer den begränsade textkonverteringen ovan. Mål med `supportsVideo === true` kringgår bryggan. Klientbegärans avbrytarsignal sprids genom nedladdning, mäklarkö, underprocesser och bildtextanrop; avbrytanden stoppar mellan videor och misslyckas aldrig öppet till rå media.

Körtidsinställningar är databasstödda och Zod-validerade:

| Nyckel                              | Standardvärde | Intervall / beteende                                                                                      |
| ----------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Valfri körtid, valbar (opt-in)                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` bevarar generiska bildtexter; `focused` använder begränsad, otillförlitlig senaste användarkontext |
| `modalityBridgeVideoModel`          | `""`          | Ärv Vision Bridge-modellen                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` eller proportionell `segment_aware`; detektorfel faller tillbaka på `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                            |

Äldre sparade videotidsgränsvärden över 120 sekunder begränsas till mäklarens tidsfrist; nya inställningsskrivningar över den gränsen avvisas. `GET /api/modality-bridge/video/runtime` kräver betrodd stämplad loopback-lokalitet före autentisering eller körtidssökning, och kräver sedan hanteringsautentisering. Den returnerar endast `available`, rensade FFmpeg/ffprobe-versioner och en fast anledning när körtiden är otillgänglig. Den interna extraheringsändpunkten är inte ett offentligt uppladdnings-API: kömättnad returnerar `503` plus `Retry-After`, en anropsfrånkoppling returnerar `499`, och den fasta mäklartidsfristen returnerar `504`. Konverterade svar lägger till `video->text;model=<visionModel>;parts=<videos>` i det centrala `x-omniroute-modality-bridge`-huvudet utan att ta bort Vision- eller Audio-segment.

### PII-maskerare (`piiMasker.ts`)

Körs på **båda** stegen.

- **`preCall`** klonar nyttolasten, går igenom `system`, `messages`, `input` och `prompt` (inklusive vanliga strängobjekt), och tillämpar `processPII()` (från `@/shared/utils/inputSanitizer`) på strängfält för `content`/`text`. När `PII_REDACTION_ENABLED=true`, maskeras detekterad PII i den utgående nyttolasten. Detta är oberoende av `INPUT_SANITIZER_MODE` (som enbart styr policyn för promptinjektion). När maskering är avstängd registrerar anropet detektionsräknare utan att skriva om innehållet.
- **`postCall`** djupklonar svaret, kör `sanitizePIIResponse()` plus Responses-API-formmaskeraren (`maskResponsesOutput` — täcker `output_text` och `output[].content[].text`). Om någon maskering sker ersätter det modifierade svaret originalet.

Skyddsräcket blockerar aldrig; det annoterar enbart (`meta.detections`, `meta.redacted`) eller skriver om.

#### Val per typ, anpassade mönster och detektionsräknare

**Dashboard → Settings → Security → PII masking** väljer _vad_ som maskeras. Den sätter inte på maskeringen: det styrs fortfarande av `PII_REDACTION_ENABLED` (förfrågan) och `PII_RESPONSE_SANITIZATION` (svar + SSE), vilka båda är avstängda som standard.

- **Val per typ** — de inbyggda ID:n listas i `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Omarkerat innebär alla typer (beteendet innan denna inställning fanns). Förfrågan-motorns `ssn_us`-mönster mappas till `ssn`. Mallar (Minimal, Standard, Financial, Brazilian, USA, Full) fyller bara i kryssrutorna i gränssnittet.
- **Anpassade mönster** — upp till 20 regex- eller jokerteckenmönster (`*` = upp till 64 icke-blankstegstecken, `?` = ett). Träffar blir `[CUSTOM_REDACTED]`. Varje mönster går igenom `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): högst 500 tecken, flaggor begränsade till `g i m s u`, måste kompilera, måste passera `safe-regex` (katastrofal backtrackning) och får inte matcha en tom sträng eller en maskeringsplatshållare. Ett mönster som misslyckas avvisas vid sparande och testning, och en lagrad rad som misslyckas hoppas över vid körning istället för att kompileras. Anpassade mönster körs endast när maskering är påslagen.
- **Detektionsräknare** — räknare per typ (aldrig matchade värden), som hålls i minnet och återställs vid omstart (`src/lib/pii/piiDetectionStats.ts`). De ökar enbart medan maskering är påslagen.

Inställningarna finns i tabellen `key_value` (namnrymd `pii_settings`, `src/lib/db/piiSettings.ts`) och läss via en cache på 1 s. API:

| Metod  | Sökväg                   | Syfte                                                                   |
| ------ | ------------------------ | ----------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Flaggstatus, `enabledTypes`, `customPatterns`, detektionsräknare        |
| `PUT`  | `/api/settings/pii`      | Ersätt `enabledTypes` (`null` = alla) och/eller `customPatterns`        |
| `POST` | `/api/settings/pii/test` | Testkör (dry-run) ett mönster mot ett urval på högst 8 KB; inget lagras |

Alla tre kräver behörighetsautentisering (management auth) och validerar meddelandekroppen med Zod (`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-injektion (`promptInjection.ts`)

Detekterar antagonistiska strukturer i användartillhandahållet innehåll och tillämpar den konfigurerade policyn. Beteendet styrs av miljövariabler och konstruktoralternativ:

| Inställning        | Miljövariabel                                                                                         | Standard | Effekt                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiverad          | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | När `false`, kortsluter skyddsräcket.                                                                                                                                                                  |
| Läge               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | Injektionspolicy: `block`, `warn` eller `log`. (`redact` accepteras för bakåtkompatibilitet men tar **inte** bort injektionstext; PII-omskrivning för förfrågningar styrs av `PII_REDACTION_ENABLED`.) |
| Blockeringströskel | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Lägsta allvarlighetsgrad som krävs för att blockera. Medium är enbart för observation som standard.                                                                                                    |

**Lägesprioritet** (`getMode`): anroparens `options.mode` → `INJECTION_GUARD_MODE` **åsidosättning via funktionsflaggor i databasen** (Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE`-miljövariabel → `INPUT_SANITIZER_MODE`-miljövariabel → `warn`. En åsidosättning i instrumentpanelen vinner därför över miljövariablerna, vilket innebär att gränssnittet för funktionsflaggor styr det aktiva skyddet live (utan omstart). Databasläsningen är felsäker: om den misslyckas faller skyddet tillbaka på det miljöbaserade beteendet, och när ingen åsidosättning är inställd är beteendet identiskt med enbart miljöbaserad upplösning.

Detektionskällor:

1. `sanitizeRequest()` från `@/shared/utils/inputSanitizer` (delad detektoruppsättning som används på andra ställen i pipelinen).
2. Inbyggda `DEFAULT_GUARD_PATTERNS` (för närvarande `system_override_inline` och `markdown_system_block`, båda med allvarlighetsgrad `high`).
3. Valfria `customPatterns` som skickas via konstruktoralternativ (strängar, regex eller poster av typen `{ name, pattern, severity }`).

När `mode === "block"` **och** minst en detektering uppnår tröskelvärdet för allvarlighetsgrad, returnerar `preCall` `{ block: true, message: "Request rejected: suspicious content detected" }`. I `warn`- och `log`-lägena loggar säkerhetsspärren men tillåter anropet. Hjälpfunktionen `evaluatePromptInjection()` exporteras också för anropare som behöver utvärdera prompter utan att gå via registret.

**Skanningsgräns (v3.8.20):** detektorn inspekterar endast de **första 16 KB** av sammansatt prompttext — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i `src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` och `evaluatePromptInjection()` anropar `slice(0, MAX_INJECTION_SCAN_BYTES)` innan mönsterloopen körs. Injektionsdirektiv finns nära början av en indatatext, vilket begränsar regex-CPU/GC för nyttolaster på flera hundra kilobyte utan att försvaga detekteringen (jfr #3932, #4041).

### Autentiseringsmaskeraren (`credentialMasker.ts`)

Körs i **båda** stadierna, sist i standardkedjan (prioritet `95`). Maskerar välkända mönster för API-nycklar / hemliga token från den utgående nyttolasten (meddelandeinnehåll, argument för verktygsanrop, verktygsresultat) **samt** leverantörens svar, så att en autentiseringsuppgift som klistras in i en prompt (eller återspeglas av ett verktygsresultat) inte läcker till den uppströms leverantören eller tillbaka till klienten.

- **Endast opt-in**, samma konvention som för PII-maskering (relaterat till Hard Rule #20): inaktiverad om inte `settings.credentialRedactionEnabled === true` **eller** `CREDENTIAL_REDACTION_ENABLED=true`. När den är avstängd gör säkerhetsspärren ingenting (en no-op) — den blockerar aldrig och skriver aldrig om.
- `redactCredentials()` går igenom hela trädet för nyttolast/svar (`walkValue()`, prototypsäkert, cykelsäkert via `WeakSet`) och ersätter matchningar med platshållaren `[REDACTED:<type>]`, där endast de grenar som faktiskt har ändrats klonas.
- `CREDENTIAL_PATTERNS` täcker nycklar för LLM-leverantörer (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-token (GitHub, Slack, Linear, Notion, npm, Postman, Discord), betalningsnycklar (Stripe, Square), molnnycklar (AWS-åtkomstnyckel, Twilio, SendGrid, Mailgun), privata nycklar / JWT:er, anslutningssträngar som innehåller inloggningsuppgifter (`mongodb://user:pass@...`, etc.), samt ett generiskt rubrikvärdesmönster för `Authorization`/`x-api-key`/`api-key`/`apikey`. Huvudliknande nycklar (`authorization`, `x-api-key`, `api-key`, `apikey`) maskeras strukturellt (endast värdet, där schemaprefix som `Bearer ` / `Basic ` bevaras) snarare än via det generiska text-regexet.
- Säkerhetsspärren blockerar aldrig; den skriver endast om (`modifiedPayload` / `modifiedResponse`) och annoterar (`meta.credentialsRedacted`, `meta.count`).

Regressionsskydd: `tests/unit/credential-masker-guardrail.test.ts`.

## Grundkontrakt (`base.ts`)

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
  block?: boolean; // true kortsluter kedjan
  message?: string; // visas vid blockering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneras av preCall för att skriva om begäran
  modifiedResponse?: TValue; // returneras av postCall för att skriva om svaret
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

Ett guardrail signalerar "ingen ändring" genom att returnera antingen `void`, `{}`, eller `{ block: false }`. Att returnera `modifiedPayload`/`modifiedResponse` ersätter värdet som flödar genom kedjan för efterföljande guardrails. `signal?: AbortSignal` för vidare anroparens livscykel till guardrails. Ett avbrutet anrop (request abort) är det medvetna fail-open-undantaget: mediabryggor stoppar arbetet och rensar upp utan att återställa råmedia till ett mål som är känt för att inte stöder det.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` exponerar:

- `register(guardrail)` — lägger till (eller ersätter med normaliserat namn) ett guardrail och sorterar om efter stigande `priority`.
- `clear()` / `list()` — administrativa hjälpfunktioner.
- `runPreCallHooks(payload, context)` — itererar över aktiva guardrails, skickar payloaden genom `modifiedPayload` och stannar vid den första `block: true`.
- `runPostCallHooks(response, context)` — samma flöde på svarsidan.
- `resetGuardrailsForTests({ registerDefaults })` — rensar tillståndet och registrerar eventuellt om standardvärdena för ren testisolering.

Båda exekutorerna returnerar `{ blocked, payload|response, results, guardrail?, message? }` där `results` är en array av `GuardrailExecutionResult`-poster som inkluderar fälten `blocked`, `skipped`, `modified`, `error` och `meta` per guardrail, vilket är användbart för spårning.

### Inaktivera guardrails per anrop

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` sammanställer en deduplicerad lista med guardrail-namn som ska hoppas över för det aktuella anropet. Det finns fem kanaler, som läses i denna ordning och slås samman till en enda lista (första förekomsten vinner vid deduplicering):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` i anropskroppen (på toppnivå)
3. `metadata.disabledGuardrails` i anropskroppen (endast när `metadata` är ett objekt)
4. Huvudet `x-omniroute-disabled-guardrails`
5. Det äldre huvudet `x-disabled-guardrails`

Alla fem kanaler slås samman, inklusive de två huvudena: om du skickar både `x-omniroute-disabled-guardrails` och `x-disabled-guardrails` hoppas unionen av deras listor över, och ett tomt modernt huvud döljer inte längre det äldre ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), fixat i [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Värden kan vara arrayer av strängar eller en kommaseparerad sträng; namn trimmas och normaliseras till gemener med kebab-case (`pii_masker` → `pii-masker`), och tomma poster tas bort. Resultatet skickas via `context.disabledGuardrails` till registret, som hoppar över matchande guardrails (`skipped: true` i `results`).

Inaktiveringslistan påverkar endast **registret**. `block`-läget för prompt-injektering är en obligatorisk gräns: middleware-komponenten för injektionsskydd (`src/middleware/promptInjectionGuard.ts`) anropar `evaluatePromptInjection()` utan någon anropskontrollerad inaktiveringslista (det döda `resolveDisabledGuardrails({ body })`-anropet som den tidigare gjorde togs bort i [#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), så en begäran som inaktiverar `prompt-injection` avvisas fortfarande i `block`-läge. Detta är avsiktligt. Inaktiveringskanalerna styrs av anroparen (anropskropp, metadata, huvuden), och en anropare får inte kunna stänga av en säkerhetskontroll som operatören har ställt in ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Huvudunionen från [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) ändrar endast vilka register-guardrails som hoppas över; den låter inte en klient kringgå middleware-komponenten. Obligatoriska guardrail-policyer per nyckel och per grupp spåras i v4-RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417). Se [Täckning och begränsningar](#coverage-and-limits).

## Exekveringsordning

För varje förfrågan som passerar genom `src/sse/handlers/chat.ts` och
`open-sse/handlers/chatCore.ts` (rutterna i chattfamiljen som listas under
[Täckning och begränsningar](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` bygger listan över inaktiverade skyddsregler från API-nyckel, body och headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kör skyddsregler i stigande prioriteringsordning:
   - Inaktiverade skyddsregler registreras som `skipped`.
   - Varje skyddsregels `preCall` kan skriva om payloaden via `modifiedPayload`.
   - Den första `block: true` kortsluter kedjan och hanteraren returnerar ett avvisningssvar från skyddsregeln.
3. Den (möjligen omskrivna) payloaden flödar in i komboroutning och uppströmsdispatch.
4. **Endast icke-strömmat:** efter att svaret har satts ihop kör
   `guardrailRegistry.runPostCallHooks(...)` samma kedja på svaret. `block: true` kastar här bort uppströmssvaret och returnerar HTTP 400. Strömmade svar hoppar över detta steg helt.

Skyddsregler som kastar undantag registreras med `error: <message>` och loggas via
`logger.warn`, men kedjan fortsätter — fail-open av design.

## Täckning och begränsningar

Skyddsregelregistret är endast inkopplat i chattpipelinen. Dessa begränsningar är
fastställda av `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` och
`tests/unit/guardrail-pipeline-characterization.test.ts`; uppdatera dessa tester
medvetet när beteendet ändras.

### Var hookarna körs

| Hook / kontroll                        | Körs på                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                      | Förfrågningar som hanteras av `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (och `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, samt Telegram-chattproxyn. Även dashboardens teständpunkt `/api/guardrails/test`. Ett pre-call-block returnerar HTTP 400. |
| `runPostCallHooks`                     | Endast **icke-strömmade** chattsvar (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Strömmade svar når den aldrig.                                                                                                                                                                                                                                                                                                               |
| Streaming PII                          | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), som pipas i `streamingPipeline.ts` när `PII_RESPONSE_SANITIZATION` är på. Den är inte en skyddsregel, so inaktiveringskanalerna påverkar den inte.                                                                                                                                                                                                                         |
| Injektionsskyddets middleware (legacy) | Varje `/v1`-rutt som tar emot prompter, inklusive chattfamiljen (se [ruttäckning](#injection-guard-route-coverage--red-team-phase-8--block-d)). Endast promptinjektion.                                                                                                                                                                                                                                                                  |

### Vad som inte omfattas

- **Media-, inbäddnings- och datarutter** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) når aldrig registret. Ingen
  PII-maskering, credential-maskering eller modalitetsbrygga körs där. Deras enda
  kontroll är det äldre injektionsskyddets middleware.
- **Strömmade svar** får inga skyddsregler efter anrop: ingen `pii-masker` eller
  `credential-masker` efter anrop, och inget block efter anrop. Endast den strömmande PII-transformen tillämpas (när `PII_RESPONSE_SANITIZATION` är på). En credential som skickas tillbaka i ett strömmat svar maskeras inte.
- **Inaktiveringskanaler vs. middleware (enligt design):** middleware utvärderar
  promptinjektion med ett eget anrop till `evaluatePromptInjection()`, utan att
  skicka med någon anropsstyrd inaktiveringslista. `block`-läget är en obligatorisk
  gräns som anropsstyrda inaktiveringar inte kan kringgå, inklusive på rutter i chattfamiljen
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Att inaktivera
  `prompt-injection` hoppar bara över registrets skyddsregel.

### Vad som ser ett svar före post-call

På den icke-strömmande sökvägen är ordningen: minnesextraktion → inbyggd verktygsexekvering → post-call-skyddsregler → utgång för post-call-block → lagring i semantisk cache.

- **Minnesextraktion** och **verktygskörning** ser svaret innan post-call-skyddsmekanismer kan skriva om eller blockera det. Sedan
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), kör minnesextraktionen
  den extraherade texten genom `sanitizePII` när
  `PII_RESPONSE_SANITIZATION` är på (både vid strömning och icke-strömning), men ett
  svar som blockeras i efterhand har ändå erbjudits till minne och
  verktyg.
- **Den semantiska cachen** lagrar svaret efter anropet, så den lagrar det
  omskrivna svaret, och ett blockerat svar cachas aldrig. Cacheposter är
  nycklade per API-nyckel.

## Konfiguration

Miljövariabler som läses av de inbyggda skyddsräckena:

| Variabel                              | Används av                | Effekt                                                                                                     |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Sätt till `false` för att inaktivera detektering helt.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injektionspolicy: `warn`, `block` eller `log`. Det äldre värdet `redact` skriver inte om injektionstext.   |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Läge för injektionsskyddet; även en databasfunktionsflagg som **åsidosätter** miljövariablerna (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minsta allvarlighetsgrad som `MODE=block` avvisar: `high` (standard), `medium` eller `low`.                |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Äldre alias för `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | När `true`, maskeras PII i förfrågningar (oberoende av injektionsläge).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Styr maskeringens beteende på svars-sidan.                                                                 |

Skyddsräckena för Modality Bridge läser körtidskonfiguration från det databasbaserade inställningslagret
(`getSettings()`), inte från miljövariabler. Primärnycklarna för Vision är
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och
`modalityBridgeCacheMaxEntries`. De äldre
`visionBridge*`-nycklarna accepteras endast som den dokumenterade återställningen för läsning i en cykel;
instrumentpanelsskrivningar använder primärnycklarna. Standardvärden och fallback-resolvern
finns i `src/shared/constants/modalityBridgeDefaults.ts`, med äldre konstanter behållna
i `src/shared/constants/visionBridgeDefaults.ts`.

Audio använder `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` och `modalityBridgeAudioMaxClips`, plus de delade
`modalityBridgeCache*`-inställningarna. Audio saknar fallback för äldre nycklar eftersom dessa
nycklar introducerades med Modality Bridge-schemat.

Video använder `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` och
`modalityBridgeVideoTimeout`, plus de delade `modalityBridgeCache*`-inställningarna.
Den är inaktiverad som standard eftersom FFmpeg/ffprobe är valfria operationella
beroenden och bildtextning lägger till latens och modellkostnad.

## Anpassade skyddsräcken

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

Steg:

1. Skapa `src/lib/guardrails/myGuardrail.ts` som utökar `BaseGuardrail`.
2. Implementera `preCall` och/eller `postCall`.
3. Registrera antingen vid importtillfället (lägg till från `registerDefaultGuardrails`) eller
   anropa `guardrailRegistry.register(...)` vid körning — registret ersätter
   eventuella tidigare skyddsräcken med samma normaliserade namn.
4. Lägg till tester under `tests/unit/` (befintliga exempel:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testning

Använd `resetGuardrailsForTests()` mellan tester för att utgå från ett känt tillstånd.
Skicka med `{ registerDefaults: false }` för att starta med ett tomt register och
endast registrera de skyddsräcken som testas. Vision Bridge accepterar beroendeinjektering
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge exponerar motsvarande
gränssnitt för inställningar, funktioner, val av STT-modell, behörighetskontroller
och transkription. Tester kan därmed köra båda flödena utan databas- eller nätverksåtkomst.

## Se även

- `src/lib/guardrails/` — implementation
- `src/shared/utils/inputSanitizer.ts` — delad detektor som driver
  promptinjektering och PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — standardvärden för Vision Bridge och
  lista över tvingade bryggmodeller
- `src/shared/constants/modalityBridgeDefaults.ts` — delade körtidsstandardvärden för Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lager (circuit breaker, nedkylningsperioder)
- `docs/reference/ENVIRONMENT.md` — fullständig referens för miljövariabler

## Ruttprövning för injektionsskydd & red-team (Fas 8 · Block D)

Injektionsskyddet (`createInjectionGuard` / `withInjectionGuard`) täcker alla rutter
som accepterar användarprompter. Det respekterar `INJECTION_GUARD_MODE` (standard `warn` = endast loggning;
`block` = returnerar HTTP 400 `SECURITY_001`).

| Typ              | Rutter                                                                                                                                               | Standardläge |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Text (befintlig) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Textextraktion (`extractMessageContents`) täcker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerar att varje rutt blockerar
OWASP-LLM-korpusen i `INJECTION_GUARD_MODE=block`; garak kör prober (hoppar över om hemlighet saknas).
`moderations` ingår för konsekvens. Block-läget är en obligatorisk gräns: `evaluatePromptInjection()`
ignorerar den inaktiveringslista per anrop som middleware skickar till den, så `disabledGuardrails` undantar
**inte** en rutt från detta ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Det nattliga arbetsflödet (`.github/workflows/nightly-llm-security.yml`, cron + manuell
körning) har två jobb:

- **`promptfoo-guard` (blockerande)** — kör `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Varje motståndarfall (t.ex. "ignore all
  previous instructions…", jailbreaks av DAN-typ) säkerställer att svaret innehåller
  `error.code === "SECURITY_001"`, dvs. att skyddet faktiskt avvisade begäran.
- **`garak` (rådgivande)** — kör garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Styrd av en
  leverantörshemlighet (`PROMPTFOO_PROVIDER_KEY`); hoppar över smidigt och har suffixet
  `|| true`, så att den rapporterar utan att misslyckas med CI.

Täckningen för skyddshjälparen (`createInjectionGuard` / `withInjectionGuard`)
spänner över varje `/v1`-rutt som hanterar prompter; prompttext hämtas från
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.

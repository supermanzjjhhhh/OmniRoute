# Guardrails (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Gezaghebbende bron:** `src/lib/guardrails/`
> **Laatst bijgewerkt:** 2026-10-17 — v3.8.52 ([Dekking en beperkingen](#coverage-and-limits) toegevoegd:
> welke routes en responspaden de hooks bereiken, de samengevoegde uitschakelheaders (#16412), de blokkeermodus voor injecties
> als verplichte grens (#16413), en wat een respons vóór post-call te zien krijgt)

Guardrails dwingen veiligheid, beleid en inhoudstransformaties af op de grens
tussen OmniRoute en upstreamproviders. Elke guardrail kan requestpayloads (`preCall`) en
upstreamresponsen (`postCall`) inspecteren (en optioneel
weigeren, transformeren of annoteren).

Het systeem is **fail-open**: als een guardrail tijdens de uitvoering een uitzondering opwerpt, legt het register
de fout vast en gaat het verder met de volgende guardrail, in plaats van het
request te laten mislukken. Blokkeren is een expliciete beslissing (`block: true`), nooit een onbedoeld gevolg.
De enige uitzondering is een afgebroken request: wanneer het `signal` van de aanroeper is afgebroken,
zorgt een guardrail die een uitzondering opwerpt ervoor dat de hookuitvoering wordt afgewezen in plaats van dat de guardrail wordt overgeslagen.

De hooks worden **niet** op elke route of voor elke respons uitgevoerd. Lees
[Dekking en beperkingen](#coverage-and-limits) voordat u op een guardrail vertrouwt als
beveiligingsmaatregel.

## Ingebouwde guardrails

Het register laadt bij het importeren automatisch zes guardrails in prioriteitsvolgorde
(zie `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteit | Naam                | Fase(n)        | Bestand               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lagere prioriteitsnummers worden **eerst** uitgevoerd.

### Vision Bridge (`visionBridge.ts`) — Modaliteitsbrug PR-1

Het GLM 5.3-basismodel en `glm-5.3-{low,high,max}` hebben expliciete
`supportsVision:false`-metadata in het register en de specificatie. De GLM 5.3 Flash-varianten
blijven modellen met ingebouwde beeldondersteuning. De `/v1/messages`-route van Claude Code komt in de
gedeelde `handleChat`-guardrailketen voor pre-call terecht **vóór** de vertaling van Claude naar OpenAI;
geneste afbeeldingen in `Read`-toolresultaten moeten worden beschreven of afgehandeld
voordat die vertaling ze omzet in OpenAI-`image_url`-inhoud (#17069).

Onderschept requests met afbeeldingen die zijn gericht op **modellen zonder beeldondersteuning** en
routeert het volledige request naar een model met beeldondersteuning of vervangt de afbeeldingsonderdelen
door tekstbeschrijvingen die vóór de upstreamaanroep door een configureerbaar beeldmodel
worden gegenereerd. Hierdoor kunnen providers die alleen tekst ondersteunen
multimodale payloads transparant afhandelen.

Verloop:

1. Sla over als het doelmodel al beeldondersteuning biedt (tenzij het voorkomt in de
   lijst voor geforceerde overbrugging `isVisionBridgeForcedModel`).
2. Extraheer afbeeldingsonderdelen via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), dat dit delegeert aan de **uniforme mediadetector**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — de
   enige gezaghebbende bron die wordt gedeeld met het compatibiliteitsfilter voor combo's.
   Extractie is beperkt tot de structuren die `replaceImageParts` kan
   terugplaatsen (het extractie↔vervangingscontract): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic-URL `source.type:"url"` en Responses
   API `input_image`. Overeenkomende afbeeldingen die zijn genest in Claude Code
   `tool_result.content` en Responses-tooluitvoer worden ook geëxtraheerd en
   vervangen op hun oorspronkelijke paden; structuren die alleen een indicator bevatten, zijn bedoeld voor het combofilter
   en worden niet geëxtraheerd.
   Sla over als er geen zijn gevonden.
3. Bepaal de runtimeconfiguratie via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nieuwe `modalityBridge*`-
   instellingssleutels hebben voorrang; verouderde `visionBridge*`-sleutels blijven gedurende **één cyclus
   als terugvaloptie** beschikbaar (terugdraaiperiode). Sla dit over voordat media worden doorlopen wanneer de
   brug is uitgeschakeld.
4. De modusselector (`modalityBridgeVisionMode`, zie onderstaande tabel) bepaalt
   of er wordt omgeleid of beschreven. Omleiden retourneert `modifiedPayload` waarin alleen `model`
   is vervangen, plus metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschrijvingspad: beperk het aantal afbeeldingen tot `maxImages`, stel de taakgerichte prompt samen,
   raadpleeg de beschrijvingscache, roep het beeldmodel **parallel** aan
   (`Promise.allSettled`) en voeg tekstonderdelen met `[Image N]: <description>` in
   op hun plaats. Een mislukte beschrijving levert `null` op: de oorspronkelijke afbeelding blijft behouden voor
   onbekende doelen of doelen met beeldondersteuning (#4012), maar een **bevestigd direct
   doel met uitsluitend tekstondersteuning** of een combo zonder beeldondersteuning krijgt een expliciete
   tekstplaceholder `(unavailable — no vision-capable provider connected)` voor
   elke onbeschreven afbeelding, inclusief gedeeltelijke mislukkingen en afbeeldingen boven de
   limiet voor beschrijvingsaanroepen (#17069). De bestaande terugvaloptie voor combobeschrijvingen waarbij
   alles is mislukt, blijft gehandhaafd (#8430).
6. Retourneer `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusselector (`modalityBridgeVisionMode`)

| Modus      | Standaard | Gedrag                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Bestaande heuristiek, ongewijzigd (#6640/#7204): niet-combo-/`auto/`-modellen worden omgeleid naar het beste vision-model, tenzij het oorspronkelijke model al bruikbare inloggegevens heeft (dan wordt een beschrijving gemaakt); bij combo-doelen wordt altijd een beschrijving gemaakt.                                                                                                                       |
| `describe` |           | Altijd een beschrijving maken — het omleidingsblok wordt volledig overgeslagen; het door de gebruiker gekozen model antwoordt altijd.                                                                                                                                                                                                                                                                            |
| `reroute`  |           | Omleiding afdwingen: de beveiliging die modellen met bruikbare inloggegevens behoudt, wordt omzeild. De controle op inloggegevens voor het omleidings**doel** blijft van toepassing — wanneer er geen bruikbaar vision-doel bestaat, blokkeert de bridge met een duidelijke foutmelding in plaats van een beschrijving te maken of onbewerkte afbeeldingen naar een doel te sturen dat alleen tekst ondersteunt. |

Geforceerde modi handelen de keuze af **voordat** de automatische heuristiek wordt uitgevoerd; het gedrag van `auto`
is byte voor byte identiek aan de guardrail van vóór PR-1.

#### Bereik van de API-sleutel (`visionBridgeKeyScope.ts`)

Wanneer de API-sleutel van de aanroeper beperkingen oplegt aan `allowedConnections`, quotapools
(`allowedQuotas`) of modellen (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), kiest de bridge alleen
modellen voor omleiding en beschrijving die de sleutel mag gebruiken, op verbindingen die de sleutel mag
gebruiken. De beschrijvingsaanroep loopt vervolgens altijd via de OmniRoute-self-loop met
de header `x-omniroute-self-loop-key-id`, zodat het ontvangende chatverzoek
het verbindings- en modelbeleid van die sleutel opnieuw afdwingt. `enforceApiKeyPolicy()`
houdt alleen rekening met die header in combinatie met de self-loop-bearer, zodat deze de toegang alleen kan
beperken; een id die niet kan worden herleid, wordt geweigerd.

Als er voor de sleutel geen vision-model is toegestaan, weigert een **bevestigd doel dat alleen tekst
ondersteunt** het afbeeldingsverzoek lokaal met een duidelijke HTTP 400 in plaats van
afbeeldingsbytes door te sturen naar een upstream die deze niet kan verwerken (#17069). Voor doelen met
onbekende of ingebouwde vision-ondersteuning behoudt het beschrijvingspad zijn eerdere
fail-open-gedrag (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Verzoeken zonder sleutel en sleutels zonder deze beperkingen gedragen zich precies zoals
voorheen.

#### Taakbewuste beschrijvingsprompt (`modalityBridgeVisionTaskAware`)

Standaard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) voegt
de tekst van het **laatste gebruikersbericht** (afgekapt op 500 tekens) toe aan de
basisprompt voor beschrijving. Zo wordt de beschrijving afgestemd op wat de gebruiker daadwerkelijk heeft gevraagd
(codex-vision-proxy-patroon) en wordt het vision-model gevraagd zichtbare
tekst te transcriberen. Als de vlag uitstaat — of als er geen gebruikerstekst is — wordt de basisprompt ongewijzigd gebruikt.

Het eigen OpenAI-compatibele verzoek van de beschrijvings-self-loop (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) vraagt altijd om `image_url.detail: "high"` —
onvoorwaardelijk, voor elke aanroeper/provider, zonder afhankelijk te zijn van een clientsignaal.
Sampling met weinig detail vermindert de OCR-nauwkeurigheid voor precies de teksttranscriptietaak
waar deze prompt om vraagt. Daarom vraagt de beschrijvingsaanroep zelf altijd om veel
detail, ongeacht het detailniveau dat het oorspronkelijke inkomende verzoek gebruikte. Dit
heeft alleen invloed op de interne verzoekbody voor beschrijving; het verandert niet hoe
OmniRoute de eigen `image_url.detail` van de aanroeper doorstuurt in het primaire verzoek —
die standaardwaarde wordt afzonderlijk toegepast, en alleen voor gedetecteerde OpenCode-clients, in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). De
tak voor het Anthropic-wire-formaat van de beschrijvings-self-loop heeft geen veld `detail`
en wordt door geen van beide standaardwaarden beïnvloed.

#### Uitvoerlimiet voor beschrijvingen (`modalityBridgeVisionMaxChars`)

| Sleutel                        | Standaard | Bereik           |
| ------------------------------ | --------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` of 100–50000 |

`0` (standaard) betekent **geen limiet** — de beschrijving die
`callVisionModel()` retourneert, wordt ongewijzigd doorgegeven, zodat het bestaande
gedrag behouden blijft. Elke waarde in het bereik 100–50000 kapt de beschrijving af met
een achtervoegsel `…` voordat deze weer wordt ingevoegd als `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Verhoog deze waarde voor OCR-taken met veel details waarbij het downstream-model de
volledige transcriptie nodig heeft; verlaag deze om het tokengebruik van breedsprakige vision-modellen te beperken.
Het dashboardveld staat in het paneel Geavanceerd op het tabblad Vision
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) en verhoogt elke
waarde tussen 1 en 99 tot de ondergrens van 100, terwijl een expliciete `0`
ongewijzigd blijft — `0` is op zichzelf een geldige Zod-waarde
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), niet slechts
de standaardwaarde voor 'niet ingesteld'.

#### Beschrijvingscache (`modalityBridge/bridgeCache.ts`)

LRU- + TTL-cache in het geheugen voor beschrijvingsuitvoer, gedeeld binnen het hele proces.
Sleutel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` met
lengtevoorvoegsels als afbakening (geen botsingen op veldgrenzen). De modelcomponent is
het **geconfigureerde** bridge-model, niet het model dat daadwerkelijk antwoordde —
`callVisionModel` kan intern terugvallen op een ander model, en een sleutel per poging zou
de cache fragmenteren. Mislukte beschrijvingsaanroepen worden nooit gecachet. Instellingen:

| Sleutel                         | Standaard | Bereik  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Normalisatie van externe afbeeldingen (describe-self-loop/base64-ophalen)

Wanneer de bridge zelf een **externe** afbeelding ophaalt — de Anthropic describe-
zelfaanroep en de base64-conversie voor het claude-wire-formaat
(`ensureBase64ImagesForClaudeWire`), beide via
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wordt de resulterende data-
URI door `normalizeDataUri()` geleid
(`open-sse/utils/imageNormalize.ts`) voordat deze in het verzoek aan het vision-model
wordt opgenomen. Te grote afbeeldingen worden verkleind tot een **lange zijde van 2048px** (overeenkomstig
de maximale afmetingen die OpenAI/Anthropic al aan de serverzijde toepassen), wat het aantal
uploadbytes en de latentie vermindert zonder te veranderen wat het vision-model ziet. Voor het schalen
wordt `sharp` gebruikt, geladen via een dynamische import: op een platform waar het native
binaire bestand niet kan worden geladen, **werpt `normalizeDataUri()` nooit een fout op** — de functie valt terug
op het ongewijzigd doorgeven van de oorspronkelijke bytes, zodat het pad voor describe/base64-conversie
altijd blijft werken. Bytes die geen afbeelding vormen (een ophaalactie die geen
decodeerbare afbeelding opleverde) worden ook ongewijzigd doorgegeven. Deze normalisatie
is beperkt tot afbeeldingen die de bridge voor zijn eigen zelfaanroep ophaalt — ze wordt nooit
toegepast op de ruwe, ongewijzigd doorgegeven payload van de aanroeper, in overeenstemming met het
principe dat mutatie alleen na expliciete toestemming plaatsvindt (Harde regel #20).

#### Instellingenschema + migratie

De nieuwe `modalityBridge*`-sleutels worden met Zod gevalideerd in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, het trio `modalityBridgeCache*` en de
groep `modalityBridgeAudio*` die door de Audio Bridge wordt gebruikt. Migratie
`141_modality_bridge_settings.sql` kopieert bestaande verouderde
`visionBridge*`-waarden naar de overeenkomstige nieuwe sleutels (idempotent, overschrijft nooit
een door de beheerder ingestelde `modalityBridge*`-waarde); de verouderde sleutels blijven gedurende
één releasecyclus geaccepteerd als terugvaloptie bij het lezen.

#### Transparantieheader + statistieken

Antwoorden die via describe zijn getransformeerd, bevatten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(opgebouwd door `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
toegevoegd door `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Omgeleide verzoeken krijgen **geen** header — de payload is ongewijzigd en de
modelwisseling is al zichtbaar in het veld `model` van de antwoordbody.

`GET /api/modality-bridge/stats` (beheerautorisatie, hetzelfde niveau als
`GET /api/settings`) retourneert de tellers per modaliteit in het geheugen:
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` voor `vision`, `audio` en
`video`. `averageLatencyMs` gebruikt `latencySamples`, niet alle pogingen, als
noemer; een bewerking zonder tijdmeting levert geen fictieve meting van nul milliseconden
op. `bridged` blijft de achterwaarts compatibele alias voor geslaagde
conversies; mislukte pogingen verhogen deze teller niet.
Tellers worden bij het herstarten van het proces bewust gereset
(telemetrie, geen boekhouding).

#### Dashboardconfiguratie

De speciale dashboardpagina is
`/dashboard/settings/modality-bridge`. De via de URL adresseerbare tabbladen `Vision`, `Audio`
en `Video` behouden queryparameters wanneer de waarde van `tab` wordt gewijzigd.
Het tabblad Vision biedt inschakeling, modus, modelselectie (inclusief de automatische
standaardkeuze), taakbewuste prompting, geavanceerde limieten voor time-out/afbeeldingen/beschrijvingslengte/cache,
runtimetellers
en een beveiligd voorbeeldverzoek. Het tabblad Audio is ook actief: het biedt
inschakeling, een modelkiezer uitsluitend voor STT met Auto, limieten voor time-out/maximale cliplengte, audiotellers
en een voorbeeldtest met `input_audio`. Het tabblad Video is functioneel: het rapporteert
de runtimestatus van FFmpeg/ffprobe — een van vier expliciete UI-statussen (`unknown` terwijl
de controle loopt of niet kon worden voltooid, `restricted` op een
dashboardhost die geen loopback-host is, waar de controle aan de clientzijde wordt overgeslagen, `unavailable` nadat de controle
heeft bevestigd dat deze ontbreken, of `available` met de FFmpeg/ffprobe-versies) — slaat
inschakeling en limieten voor model/frames/video/time-out op, beperkt de modelkiezer tot modellen met vision-ondersteuning
en biedt videotellers.

De voormalige Vision Bridge-kaart onder AI-instellingen is een compatibiliteitslink naar de
nieuwe pagina; deze bevat niet langer een tweede exemplaar van het formulier. Media Providers
koppelt ook de workflows voor afbeelding-naar-tekst en spraak-naar-tekst aan de bijbehorende Modality
Bridge-tabbladen zonder de bestaande spraak-naar-tekst-proeftuin te verwijderen.

**Omzeiling van toelatingscontrole voor de self-loop:** wanneer de describe-aanroep via OmniRoute's
eigen `/v1`-self-loop wordt gerouteerd (niet-standaard providermodel), verstuurt het subverzoek
`x-omniroute-admission-bypass: internal` en wordt het geauthenticeerd met de vastgestelde
self-loop-referentie — de lokale sentinel `sk_omniroute` in lokale modus, of de
door de beheerder geconfigureerde omgevingssleutel `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), zodat
implementaties met `REQUIRE_API_KEY=true` de describe-aanroep nog steeds kunnen uitvoeren. De omzeiling
wordt alleen toegestaan voor precies die referenties, zodat externe clients de
header niet kunnen gebruiken om de toelatingscontrole over te slaan.

Verouderde standaardwaarden staan in `src/shared/constants/visionBridgeDefaults.ts`; de
nieuwe standaardwaarden voor modus/taakbewustzijn/cache en de instellingenresolver staan in
`src/shared/constants/modalityBridgeDefaults.ts`. De beveiligingslaag biedt een
constructoroptie `deps`, zodat tests nagebootste implementaties van `getSettings` en
`callVisionModel` kunnen injecteren.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Onderschept chatverzoeken met audio voordat ze een doel bereiken waarvan niet
bekend is dat het audio-invoer accepteert. Het chatverzoek wordt nooit omgeleid: audio-onderdelen worden
getranscribeerd via het bestaande OpenAI-compatibele multipart-eindpunt en het
gekozen chatmodel gaat verder met teksttranscripties.

Verloop:

1. Bepaal `supportsAudio` via `getResolvedModelCapabilities()`. Expliciete
   metadata uit het providerregister heeft voorrang, gevolgd door statische modelmetadata en vervolgens
   gesynchroniseerde `modalities_input`. Een opgegeven invoerlijst zonder `audio` levert `false` op; zonder
   bewijs voor deze functionaliteit blijft de waarde `null`. Zowel `false` als `null` activeert de
   conservatieve bridge, terwijl `true` deze omzeilt.
2. Bepaal de `modalityBridgeAudio*`-instellingen en extraheer vervangbare
   audio-onderdelen op het hoogste niveau uit elk bericht via de gedeelde detector
   `detectMediaParts()`. Ondersteunde overdrachtsformaten zijn OpenAI `input_audio`, `audio_url` en
   `source.media_type: "audio/*"`. Geneste audio wordt gedetecteerd voor routering, maar niet
   verwijderd via het vervangingspad. De verwerking wordt begrensd door `modalityBridgeAudioMaxClips`;
   latere onderdelen blijven ongewijzigd.
3. Gebruik een geconfigureerde `provider/model`, of laat `selectAudioBridgeModel()`
   `AUDIO_TRANSCRIPTION_PROVIDERS` in vaste catalogusvolgorde doorlopen en het eerste
   model met bruikbare, actieve inloggegevens voor de provider selecteren.
4. `callAudioTranscription()` converteert base64-/data-URI-audio naar een multipart-
   `file`, of downloadt een externe `audio_url` via de uitgaande
   beveiliging die uitsluitend openbare adressen toestaat, met DNS-pinning en een limiet van 25 MB. Vervolgens worden het bestand en het geselecteerde
   model via POST naar de lokale `/v1/audio/transcriptions`-self-loop verzonden, met authenticatie via
   `resolveSelfLoopBearer()`. De bestaande transcriptieroute voert de normale
   zoekactie naar inloggegevens, afhandeling van afkoelperiodes en snelheidslimieten, en routering naar de provider uit.
5. Succesvolle aanroepen vervangen hun onderdelen door `[Audio N]: <transcript>`. Aanroepen
   worden uitgevoerd met `Promise.allSettled`: bij een afzonderlijke fout blijft het oorspronkelijke
   audio-onderdeel behouden (contract #4012). Als alle aanroepen mislukken en voor het doel is vastgesteld
   dat `supportsAudio === false`, worden de onderdelen
   `[Audio N]: (unavailable — no STT provider connected)` (contract #8430). Voor
   een onbekend doel (`null`) blijft alles bij een volledig mislukt resultaat ongewijzigd. Een doel
   waarvan vaststaat dat het alleen tekst ondersteunt, zonder bruikbare STT-inloggegevens, ontvangt dezelfde expliciete
   plaatsaanduiding zonder dat er een netwerkaanroep wordt uitgevoerd.

Succesvolle transcripties gebruiken de procesbrede LRU/TTL-cache van Modality Bridge. De
sleutel combineert de audioverwijzing, het vaste bewerkingslabel `audio-transcription`
en het geselecteerde STT-model; fouten worden nooit gecachet. Audiopogingen werken
de gedeelde tellers `bridged`, `cacheHits`, `failures` en `lastUsedAt` bij.
Getransformeerde antwoorden bevatten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ongewijzigde
verzoeken krijgen geen Audio Bridge-segment.

Runtime-instellingen worden in de database opgeslagen en met Zod gevalideerd:

| Sleutel                       | Standaard | Bereik                |
| ----------------------------- | --------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —                     |
| `modalityBridgeAudioModel`    | `""`      | Automatisch of STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10                  |

De gedeelde cache blijft beheerd via `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` en `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Onderschept video-onderdelen op het hoogste niveau in Chat Completions `messages` en Responses
API `input` voordat een doel zonder bekende native video-ondersteuning wordt aangeroepen.
Ondersteunde formaten zijn `input_video`, `video_url`, `video_source`, HTTPS-URL's
en `data:video/*;base64,...`-data-URI's. Losse bestandsnamen in tekst worden niet
als video behandeld.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) is verantwoordelijk voor het doorlopen van het verzoek, de
controle op functionaliteit en beleid, aggregatie per verzoek en de antwoordpayload.
De verwerking per video — ophalen, de cache voor het volledige resultaat, het beschrijven van een
framereeks (waarin een eventueel door de aanroeper opgegeven audiotranscript wordt geïntegreerd) en metrieken/afbreken/opschonen
per poging — is afgeschermd achter `processVideoPart` in
`videoBridgePipeline.ts`, dat eenmaal per video-onderdeel wordt aangeroepen binnen de lus van `preCall`.
Die module definieert ook de expliciete poortgrenzen `VideoMediaBrokerPort`
(bytes ophalen en geselecteerde frames extraheren), `VideoAudioTranscriptionPort`
(een door de aanroeper opgegeven audiotranscript integreren met de beschrijvingen van geselecteerde frames) en
`VideoDrilldownPort` (de persistentiegrens voor framedetailanalyse; nog niet gekoppeld
aan `processVideoPart` — momenteel schrijft alleen de afzonderlijke route `/api/modality-bridge/video/drilldown`
items voor detailanalyse).

Het openbare `/v1`-verzoekpad importeert of start nooit een subproces. Externe
video's worden gedownload met een limiet van 50 MiB; voor inline base64-video's geldt een
conservatieve limiet van 36 MiB aan gedecodeerde gegevens per video, zodat de omhullende structuur voor model/berichten/framing
binnen de toelatingslimiet van 50 MiB voor openbare JSON-verzoeken kan blijven. De inline
lengte en schattingen van de gedecodeerde grootte worden vóór geheugentoewijzing gecontroleerd. HTTPS is
vereist voor de oorspronkelijke externe URL en elke omleiding, met gebruik van de bestaande
uitgaande beveiliging die uitsluitend openbare adressen toestaat, met DNS-pinning. De bytes passeren vervolgens de exacte interne
brokergrens `POST /api/modality-bridge/video/extract`. Die route is zowel
`LOCAL_ONLY` als `SPAWN_CAPABLE`, accepteert alleen een vertrouwd loopback-verzoek met
procesgebonden authenticatie en accepteert nooit een URL, bestandssysteempad, uitvoerbaar bestand
of argumentenlijst. De pipeline voor de grootte van API-verzoekinhoud en de incrementele lezer van de verzoekinhoud
in de handler handhaven onafhankelijk van elkaar een limiet van 50 MiB voor brokerinvoer. De begrensde wachtrij voert
één extractie tegelijk uit, staat vier wachtende taken toe en beperkt de wachtende invoer tot
100 MiB.

Binnen de broker leest `ffprobe` een privé lokaal bestand; de vaste
toelatingslijst voor formaten sluit afspeellijst- en manifestformaten uit. Voor toegestane
containers uit de MOV-familie blijven externe MOV-gegevensverwijzingen standaard uitgeschakeld, en het
vaste commando schakelt deze niet in. Zowel `ffprobe` als `ffmpeg` gebruiken de
protocoltoelatingslijst met uitsluitend `file`, één thread, vaste argumentarrays, geen shell,
en uitvoerbare bestanden die via `PATH` worden gevonden. Streams met omslagafbeeldingen zijn geen
afspeelbare kandidaten. Alle afspeelbare streams moeten aan de limieten voldoen, en een
expliciete standaardstream krijgt de voorkeur boven de deterministische terugval
op de stream met de laagste index. Video's zijn beperkt tot 600 seconden, 8.192 pixels per dimensie en
33.554.432 bronpixels. FFmpeg bemonstert 1–16 JPEG-frames op middelpunten, verkleint
de lange zijde tot maximaal 1.024 pixels zonder kleinere invoer op te schalen, en
ontvangt nooit een URL. De bemonstering is standaard `uniform`. De optionele
beleidsoptie `scene_aware` en de experimentele beleidsoptie `segment_aware` voeren één extra
vaste FFmpeg-verwerkingsronde uit op de reeds gevalideerde lokale stream, selecteren een begrensd aantal
`showinfo`-scènetijdstempels en vallen deterministisch terug op dezelfde
uniforme middelpunten bij een detectorfout, time-out, ongeldige uitvoer of een lege
kandidatenset. De segmentbewuste modus verdeelt middelpuntmonsters evenredig over
de gevalideerde scène-intervallen; de segmentbewuste meetgegevens en het terugvalgedrag worden
hieronder toegelicht. De harde limiet van 16 frames wordt
bij elk beleid na de selectie toegepast. Wanneer een scènebewust verzoek slechts een
budget van één frame heeft, gebruikt het het uniforme middelpunt van het actieve venster voor de volledige video of het focusvenster
en rapporteert het `policyEffective: uniform`: één geselecteerd scèneframe
kan niet beide temporele uiteinden behouden. Een aanroeper kan optioneel een
eindig focusvenster opgeven (`start`/`end` in seconden); de grenzen worden beperkt tot de media-
duur, omgekeerde of niet-eindige vensters worden afgewezen en alle bemonsterings-
beleidsopties worden uitsluitend binnen het genormaliseerde interval uitgevoerd. Het resulterende
venster wordt opgenomen in de bemonsteringsmetadata en in het niet-vertrouwde beschrijvings-
voorvoegsel, zodat downstreammodellen een gericht fragment kunnen onderscheiden van de volledige
tijdlijn.

Semantische focus voor bijschriften is een afzonderlijke, expliciete instelling. De standaardanalysemodus `full`
behoudt de bestaande frameprompt en stuurt nooit verzoek-
tekst door naar het bijschriftmodel. In de modus `focused` leest de bridge alleen de meest recente
niet-lege, door de gebruiker geschreven `text`/`input_text` uit dezelfde Chat- of Responses-
container, normaliseert deze naar NFC, voegt reeksen besturingstekens en witruimte samen
en beperkt deze tot 500 Unicode-codepunten. Een leeg resultaat valt terug op de
exacte `full`-prompt. Een bruikbare aanwijzing wordt als JSON geserialiseerd in een speciaal
blok voor niet-vertrouwde gebruikerscontext en mag alleen waarneembare details prioriteit geven; deze
kan de afzonderlijke waarschuwing om geen instructies te volgen die zichtbaar
of hoorbaar zijn in de media niet opzijzetten. Tekstuele focus leidt nooit `start`/`end` af en verandert
de temporele bemonstering niet.

#### FU-07 structurele segmentgegevens

`segment_aware` gebruikt één begrensde vooranalyseronde op de reeds gevalideerde
lokale videostream. De vaste filterketen schaalt eerst naar maximaal 320 pixels
breed, detecteert scènewisselingen en stilstaande intervallen, en bemonstert vervolgens met 1 frame per
seconde voor onscherpte, gemiddelde luma en ruimtelijke/temporele informatie. De ronde is
beperkt tot 600 structurele monsters, één FFmpeg-/filterthread, dezelfde
protocoltoelatingslijst met uitsluitend `file` en containertoelatingslijsten, een limiet van 1 MiB voor procesuitvoer,
en maximaal 30 seconden binnen de gedeelde annulerings-/deadlinelimiet van de broker. Deze accepteert nooit
een commando, filter, pad of URL uit het verzoek.

De structurele waarden zijn deterministische bemonsteringsgegevens, geen semantisch video-
begrip. Ze leiden geen onderwerpen, handelingen, bijschriften, spraak of gebruikers-
intentie af. Scènegrenzen en grenzen van stilstaande intervallen vormen segmenten; de dekking van stilstaande beelden, onscherpte,
belichting, ruimtelijk detail en temporele verandering beïnvloeden alleen hoe het bestaande
budget van 1–16 frames wordt verdeeld. Een volledig stilstaand segment wordt beperkt tot één frame,
terwijl niet-stilstaande segmenten concurreren om het resterende budget. Wanneer er meer grenzen
dan frames zijn, blijft uniforme dekking van de tijdlijn behouden, zodat snelle scènewisselingen aan het begin
een lang slotsegment niet kunnen verbergen. Scènegrenzen binnen de
analyseresolutie van 1 seconde van een grens van een stilstaand interval worden samengevoegd.

Ontbrekende filters, ongeldige/lege meetgegevens, een detectorfout of de begrensde
time-out van de vooranalyse leiden tot een terugval op het exacte uniforme middelpuntbeleid. Een annulering door de aanroeper
of een brokerdeadline leidt niet tot terugval: deze beëindigt het actieve
subproces, voorkomt latere frame-extractie en de privé tijdelijke mappenstructuur wordt
verwijderd in `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereert deterministische echte FFmpeg-
testfixtures voor besparingen op bijschriftaanroepen na deduplicatie, budgettoewijzing bij veel beweging,
meetgegevens voor onscherpte/belichting/SI-TI, snelle scènewisselingen met een lang slotsegment en fout-
positieven bij geleidelijke vervagingen. Het registreert de verstreken tijd van de vooranalyse en, waar `/usr/bin/time`
beschikbaar is, de CPU-tijd en piek-RSS van het onderliggende proces. De kwaliteitscontroles zijn uitsluitend structurele
testorakels. De werkelijke kwaliteit van het bijschriftmodel blijft `HOLD`, omdat deze testomgeving geen
geautoriseerd endpoint of vastgelegde beoordelaar heeft. Geldelijke besparingen blijven eveneens `HOLD`,
tenzij `--caption-cost-per-call-usd` een expliciete positieve schatting per aanroep
opgeeft; het script verzint geen van beide resultaten.

Elk frame is beperkt tot 4 MiB, alle onbewerkte frames samen tot 23 MiB en het
geserialiseerde brokerantwoord tot 32 MiB. Een afgeschermde tijdelijke map wordt verwijderd
in `finally`. OmniRoute levert FFmpeg niet mee en accepteert geen aangepast
pad naar een uitvoerbaar bestand. Voordat bijschriften worden gegenereerd, voert de bridge een conservatieve visuele
deduplicatiestap uit: elke JPEG wordt verkleind tot een 16×16-grijswaardenbuffer en wordt
alleen vergeleken met het laatst behouden frame. Bij een aangevraagd bijschriftbudget
van meer dan één frame levert de extractie een
begrensde verzameling kandidaten van maximaal tweemaal dat budget en nooit meer dan 16 frames.
De aangevraagde limiet wordt pas na deduplicatie toegepast, waarbij de eerste en laatste
geselecteerde kandidaat behouden blijven tijdens de uiteindelijke uitdunning wanneer het budget ten minste
twee bedraagt. Het van een versie voorziene
`grayscale-16x16-mean-cells-v2`-beleid gebruikt de grootste waarde van het gemiddelde luminantieverschil en
het aandeel miniatuurcellen waarvan het genormaliseerde verschil ten minste 0.05 is. De
drempel voor duplicaten is de constante 0.04, gekozen voor voorspelbaarheid in plaats van
beschikbaar gesteld als runtime-instelling. Dit secundaire
signaal met hoog contrast behoudt kleine bewegingen en wijzigingen in zichtbare tekst die een
vergelijking op basis van alleen het gemiddelde kan missen. Bij fouten in de vergelijkingsfunctie of decoder worden frames behouden,
zodat de dekking behouden blijft. De uitvoermetadata maakt onderscheid tussen geëxtraheerde kandidaten, succesvol gebruikte
frames en verwijderde visuele duplicaten.

Een expliciet gemarkeerd video-onderdeel kan om een contactblad met tijdstempels vragen. De
bridge bouwt een JPEG-raster met maximaal 4 kolommen en 16 frames. In elke cel van 512 pixels wordt
het brontijdstempel ingebrand in een contrastrijke strook onderaan, terwijl dezelfde tijdstempels
in tekstuele metadata beschikbaar blijven voor latere koppeling en controle. De volledige
JPEG blijft beperkt tot 32 MiB. Als `sharp` het raster niet kan decoderen of samenstellen, valt de
bridge terug op de afzonderlijke JPEG-frames; een afbreekactie van de client wordt nog steeds doorgegeven
tijdens de contactbladbewerking.

Bewijs voor promotie staat bewust los van de synthetische
microbenchmark voor samenstelling. `scripts/perf/video-bridge-contact-sheet-eval.ts` definieert een
A/B-testomgeving met schemaversiebeheer voor echte OpenAI-compatibele visionmodellen. Deze meet
door de provider gerapporteerde tokens, de totale end-to-enddoorlooptijd (inclusief het samenstellen van het contactblad),
het aantal modelaanroepen en het behoud van in het manifest gedefinieerde feiten. Onbewerkte modelantwoorden worden niet
naar het rapport geschreven; alleen SHA-256-hashes en overeenkomende feit-ID's worden bewaard. De
testomgeving doet geen netwerkaanroepen of betaalde modelaanroepen tenzij `--execute-real` wordt meegegeven en
`--model`, `OMNIROUTE_BASE_URL` en `OMNIROUTE_API_KEY` zijn geconfigureerd. Zonder
die expliciete uitvoering met echte modellen blijft het machineleesbare oordeel `HOLD`; synthetische
metingen van payloadgrootte en aantal aanroepen alleen gelden niet als bewijs voor promotie.

Aanroepers kunnen een optionele `transcript.cues`-array toevoegen aan een ondersteund video-
onderdeel wanneer zij al over uitgelijnde tekst beschikken. Elke cue moet `text`, een
eindig `start`/`end`-interval binnen de vastgestelde duur en een toegestane
`source` (`client`, `embedded` of `audio-bridge`) bevatten; `confidence` is standaard
`1` en moet tussen `0` en `1` blijven. Exact dubbele cues worden samengevoegd.
OmniRoute start nooit transcriptie op basis van deze metadata: gevalideerde cues worden
naar het beschreven resultaat gekopieerd met bron, betrouwbaarheid en interval, en
worden als niet-vertrouwde waarnemingen naast de framebijschriften weergegeven. Ongeldige
tekst, tekst buiten het bereik of tekst zonder herkomst wordt geweigerd in plaats van in de
bijschriftstroom opgenomen. Beide transcriptkanalen in de aanvraagbody normaliseren opgegeven
herkomst naar `client`, inclusief zelf toegekende labels `embedded` of `audio-bridge`.
Alleen een door de server beheerde adapter kan die vertrouwde labels toewijzen via
het uitsluitend in code beschikbare argument `trustedSource`; een JSON-veld in een aanvraag kan
dat argument niet bereiken. Transcripttekst blijft niet-vertrouwde, van media afgeleide inhoud,
ongeacht de herkomst, en mag nooit de autorisatie bepalen.

Een geavanceerde aanroeper kan een `audioTranscript`-spoor voor dezelfde video aanleveren;
dit wordt behandeld als door de client aangeleverde tekst, niet als bewijs van servertranscriptie.
Het fusiekoppelpunt verwerkt visuele en audiowaarnemingen met
één deadline en één afbreeksignaal, ordent ze op een gemeenschappelijke tijdlijn, voegt
exacte duplicaten samen en rapporteert een gedeeltelijk resultaat wanneer slechts één kant slaagt.
Een ongeldig `audioTranscript` leidt tot dat gedeeltelijke resultaat — de visuele
beschrijving blijft behouden en de audiotak registreert een opgeschoonde foutcode —
in plaats van de hele video te laten mislukken. De beschikbaarheid per tak, de indicator voor een gedeeltelijk resultaat
en de opgeschoonde foutcodes blijven behouden in het beschreven resultaat, in de
beveiligingsmetadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in de metadata van de resultaatcache en in de
fusietellers van de bridge. Het standaardpad van Video Bridge roept geen spraak-naar-tekstverwerking aan
en downloadt geen tweede mediakopie; zonder dat expliciete spoor blijft het
uitsluitend video verwerken.

**Bewaring van transcripten (#12150 P1).** Dit is automatisch van toepassing wanneer de
Video Bridge (die zelf opt-in is) een transcriptsegment weergeeft — er is geen afzonderlijke
bewaarvlag. Wanneer een verzoek een transcriptsegment weergeeft (een door de aanroeper opgegeven
`transcript` of een samengevoegd `audioTranscript`), markeert de guardrail het als
`videoBridgeObserved` en maakt deze een geredigeerde schaduwversie van de videobeschrijving —
een identieke weergave waarin de vrije tekst van elk segment wordt vervangen door
`[redacted-video-transcript]`, opgebouwd door het gestructureerde segmentveld te vervangen
voordat de tekenreeks wordt samengesteld (nooit door de afgevlakte tekst te parsen, zodat geen
segmentinhoud — kwaadaardig of gewoon, inclusief tekst met `]`, zoals
`[inaudible]`/`[music]` — behouden kan blijven). De opgeslagen verzoekbody in het aanroeplogboek vervangt
elk van video afgeleid tekstdeel door die geredigeerde schaduwversie, op basis van
inhoudsgelijkheid; het `fullText`-anker wordt opnieuw gelezen uit de uiteindelijke guardrailpayload
van vóór de aanroep, zodat de overeenkomst nog steeds wordt gevonden nadat latere guardrails in de keten (de maskeringsfuncties voor PII en
inloggegevens, prioriteiten 10/95) de beschrijvingstekst ter plekke hebben herschreven en
nadat injectie van systeemprompts/overdrachten/geheugen de berichtenarray heeft hervormd. De
body die upstream naar het model wordt verzonden, blijft ongewijzigd. Een geobserveerd verzoek vult ook
geen duurzaam Memory (extractie uit zowel verzoeken als antwoorden wordt overgeslagen),
zodat het eigen antwoord van het model geen transcripttekst in Memory kan herhalen.

**Ruwe videovelden (#12430).** Wanneer de bridge is ingeschakeld en ondersteuning voor native video onbekend is of ontbreekt, activeren gedefinieerde `transcript`/`audioTranscript`-velden ook `videoBridgeObserved`, zelfs na een mislukte beschrijving of het bereiken van een `maxVideos`-limiet. `null` en lege tekenreeksen tellen mee; afwezige velden en metadata die geen betrekking hebben op video niet. In bewaarde kopieën worden deze velden geredigeerd of wordt het verzoek weggelaten, en caches/Memory worden overgeslagen.

Op die terugvalpaden worden geldige segmenten van de aanroeper ondersteunde `text`/`input_text`-
delen in plaats van niet-standaard providervelden. Beide door het verzoek aangeleverde sporen
blijven niet-vertrouwde `client`-observaties, met een expliciete waarschuwing dat de video
niet is beschreven en dat de tijdstempels niet zijn gecontroleerd aan de hand van de media. De bestaande
totale limieten van 256 segmenten/64 KiB en de limieten per segment gelden voor beide sporen samen;
tijdstempels moeten binnen het maximum van 600 seconden van de broker en een eventueel opgegeven
focusvenster vallen. Ongeldige sporen worden weggegooid en niet doorgestuurd als willekeurige tekst; een geldig
bijbehorend spoor kan nog steeds worden gebruikt, tenzij hun gezamenlijke limiet wordt overschreden. Null-/lege
velden voegen geen tekst toe. Deze terugval voegt geen media-ophaling of transcriptie toe.
Transcriptuitbreidingsvelden worden verwijderd uit de videodrager voor de terugval en de bijbehorende
`video_url`/`source`-objecten. De allowlist voor het OpenAI-wireformaat blijft strikt; videodragers waarvoor native ondersteuning
onbekend is, blijven beschikbaar en bekende doelen die alleen tekst ondersteunen behouden veilige markeringen.
Gestructureerde geredigeerde schaduwversies beschermen de toegevoegde transcripttekst, terwijl het
oorspronkelijke verzoek van de aanroeper ongewijzigd blijft. Doelen met native ondersteuning en
uitgeschakelde bridges behouden hun bestaande omzeilingsgedrag.

Aanvullende bewaarde kopieën gebruiken hetzelfde signaal voor geobserveerde verzoeken. De ruwe
momentopname van het clientverzoek van vóór de guardrails, het wachtende verzoek in het geheugen en het logboek voor vroegtijdig
afgewezen verzoeken vervangen transcriptvelden in videodelen op structurele wijze;
tekenreeksprompts die door pijplijnfasen en contextoverdracht worden samengesteld, worden geredigeerd
bij het opslagpunt voor de opgeslagen verzoekbody. De opgeslagen markering `video_content_removed`
zorgt ervoor dat voortzetting via `previous_response_id` bij twijfel wordt geblokkeerd, in plaats van
tekst te reconstrueren die opzettelijk is verwijderd. Als een geobserveerd verzoek zijn
geredigeerde schaduwversie per deel verliest voordat het wordt gelogd, of als zelfs maar één van meerdere videoschaduwversies
na latere verzoekwijzigingen niet meer overeenkomt, wordt de bewaarde verzoekbody
volledig weggelaten in plaats van een gedeeltelijk geredigeerd transcript te bewaren.

Bij een geobserveerd verzoek kan een modelantwoord elk deel van het
transcript citeren zonder een gestructureerde segmentgrens. De opgeslagen `responseBody`
in het aanroeplogboek wordt daarom vervangen door een weglatingsmarkering; het gedetailleerde
pijplijnartefact (dat upstream-/clientbody's en streamfragmenten kan bevatten)
wordt niet bewaard. Semantische caches, idempotentiecaches en caches voor het opnieuw afspelen van redeneerstappen slaan
lees- en schrijfbewerkingen voor dat verzoek over. Het providerverzoek en het voor de client zichtbare
antwoord blijven ongewijzigd. Vroege keepalive-bytes worden uit de tijdelijke
buffer verwijderd wanneer het gedetailleerde artefact wordt weggelaten. Kiro's waarschuwing voor een ongeldige EventStream
vermeldt alleen het aantal payloadbytes, nooit de inhoud of de ruwe foutmelding
van de JSON-parser.
Dit houdt niet de claim in dat elke niet-gerelateerde diagnostische melding van providers/plugins is
gecontroleerd; de bredere controle van opslagpunten wordt bijgehouden in #11658.

De interne levenscyclus van `/api/modality-bridge/video/drilldown` vormt een afzonderlijke
cachelaag met loopback-/tokenauthenticatie. Elke bewerking vereist ook een
canonieke, ondoorzichtige principal-ID. Voordat een aanroeper in productie wordt ingeschakeld, moet deze
die ID afleiden van de geauthenticeerde tenant en mag deze nooit een
door de client gekozen waarde doorsturen. Cachesleutels koppelen die principal aan canonieke sessie- en
videoreferentie-ID's, slaan alleen de daarvan met SHA-256 afgeleide sleutels op en beperken zowel leesbewerkingen
als verwijdering tot dezelfde principal. De cache bewaart maximaal 16 afgeleide JPEG-
frames per item, laat deze na tien minuten verlopen en ondersteunt begrensde
`start`/`end`-leesbewerkingen of expliciete verwijdering van een sessie.

Elke principal is beperkt tot 16 items en 64 MiB aan canonieke JPEG-gegevens. Die
limieten staan los van het globale maximum van 64 items/256 MiB: bij druk op het principalquotum
worden alleen de minst recent gebruikte items van die principal verwijderd voordat globale
LRU-verwijdering wordt overwogen. Bij cacheactiviteit worden verlopen items uit zowel de administratie per principal als de
globale administratie verwijderd, terwijl bij annulering en validatiefouten geen
gedeeltelijke vervanging wordt vastgelegd.

De cache weigert niet-canonieke Base64, overtollige opvulling, niet-JPEG-media, ongeldige of
afgekaptе JPEG's en JPEG's die een waarschuwing opleveren tijdens een begrensde volledige `sharp`-decodering
van de afbeelding. Elke geaccepteerde afbeelding wordt opnieuw gecodeerd als een canonieke JPEG, waarbij breedte en hoogte
worden afgeleid uit de gedecodeerde bytes in plaats van te vertrouwen op velden van de aanroeper. Eventuele afsluitende
polyglotbytes worden verwijderd in plaats van bewaard. Alleen de begrensde canonieke gecomprimeerde buffer
telt mee voor beide quota. De limiet voor JSON-overdracht omvat de Base64-overhead voor de bovengrens van 32 MiB
aan gedecodeerde invoer. Elke
opgeslagen afgeleide legt het gevalideerde JPEG-formaat en de resolutie, het samplingbeleid,
de afleidingsversie, het aanmaaktijdstip, de door de server berekende inhoudshash en een gehashte verwijzing
naar het bovenliggende item vast, plus de inhoudshash van dat item die door de vertrouwde aanroeper is aangeleverd. Annulering wordt gecontroleerd
tussen asynchrone decodeer- en hashfasen vóór de atomaire cachecommit.

Deze fase koppelt nog geen productieproducent aan de route en biedt nog geen
selectie van varianten met meerdere resoluties. Het transparante Video Bridge-aanvraagpad
brengt daarom geen extra werk met zich mee, terwijl de tenantgebonden afleiding van de beveiligingsidentiteit en
de volledige FU-08-levenscyclus voor meerdere resoluties expliciet vervolgwerk blijven en niet
als voltooide functionaliteit worden gedocumenteerd.

Frames worden achtereenvolgens van beschrijvingen voorzien met het geconfigureerde Video-model. Een lege
Video-override neemt de Vision-instelling over; als beide leeg zijn, selecteert de automatische Vision-router
het daadwerkelijk gebruikte model met visuele mogelijkheden. Geslaagde beschrijvingen
vervangen het oorspronkelijke onderdeel door een stabiel voorvoegsel `[Video description:` dat
de tekst ook markeert als een niet-vertrouwde, van media afgeleide waarneming en downstreammodellen
opdraagt geen instructies uit de media op te volgen. Cachesleutels voor framebeschrijvingen
omvatten de JPEG-bytes, prompt, tijdstempel en het daadwerkelijk gebruikte model; alleen geslaagde
beschrijvingen worden gecachet. Cache-items bewaren het model dat de geslaagde beschrijving daadwerkelijk heeft geproduceerd,
ook als dat een terugvalmodel is; de bridge rapporteert `mixed` wanneer verschillende frames
door verschillende modellen zijn verwerkt. Bij een cachetreffer wordt die producentidentiteit hergebruikt
in plaats van deze opnieuw te labelen als het aangevraagde routeringsplan. De resultatencache
voor de volledige video gebruikt een sleutel op basis van elke invoer die de uitvoer beïnvloedt — prompt, daadwerkelijk gebruikt
model, samplingbeleid, aantal frames, semantische analysemodus, de SHA-256-vingerafdruk
van de genormaliseerde focushint, focusvenster, `transcript`,
`audioTranscript` en de vlag voor het contactblad — zodat een wijziging van een van deze
dimensies een cachemisser oplevert, nooit hergebruik van verouderde gegevens. De versie
van het visuele deduplicatiebeleid, de drempelwaarde en het begrensde aantal kandidaatframes zijn ook expliciet opgenomen in de
sleutel en metadata van de resultatencache; een beleidswijziging kan daardoor geen verouderde
beschrijving van de volledige video hergebruiken. De metadata van resultatencache v4 bewaren de modus en
vingerafdruk, nooit de onbewerkte gebruikerstaak. De metadata van de beveiligingslaag rapporteren zowel de
aangevraagde als de daadwerkelijk gebruikte analysemodus; een aangevraagde modus `focused` zonder
bruikbare gebruikerstekst wordt gerapporteerd als daadwerkelijk `full`.

De beveiligingslaag extraheert elk ondersteund video-onderdeel, maar beschrijft er niet meer dan
`modalityBridgeVideoMaxVideos`. Voor een doel waarvan is vastgesteld dat
`supportsVideo === false`, worden mislukte video's en video's boven de limiet vervangen door expliciete veilige
tekstmarkeringen, zodat er geen onbewerkte video overblijft. Wanneer de capaciteit onbekend is, behouden die onderdelen
hun videodrager; een eventueel terugvaltranscript volgt de hierboven beschreven begrensde tekstconversie.
Doelen met `supportsVideo === true` omzeilen de bridge.
Het afbreeksignaal van de clientaanvraag wordt doorgegeven aan het downloaden, de brokerwachtrij,
subprocessen en beschrijvingsaanroepen; afbrekingen stoppen tussen video's en laten bij fouten nooit
onbewerkte media door.

Runtime-instellingen worden opgeslagen in de database en gevalideerd met Zod:

| Sleutel                             | Standaard   | Bereik / gedrag                                                                                                               |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optionele runtime, expliciete inschakeling vereist                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` behoudt algemene beschrijvingen; `focused` gebruikt begrensde, niet-vertrouwde context van de laatste gebruikersinvoer |
| `modalityBridgeVideoModel`          | `""`        | Het Vision Bridge-model overnemen                                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` of proportioneel `segment_aware`; bij een detectorfout wordt teruggevallen op `uniform`              |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                |

Oude opgeslagen Video-time-outwaarden boven 120 seconden worden begrensd tot de
brokerdeadline; nieuwe schrijfacties voor instellingen boven die limiet worden geweigerd.
`GET /api/modality-bridge/video/runtime` vereist een vertrouwd gemarkeerde loopbackherkomst
vóór authenticatie of het controleren van de runtime, en vereist vervolgens beheerauthenticatie.
Het retourneert alleen `available`, opgeschoonde FFmpeg/ffprobe-versies en een vaste
reden wanneer de runtime niet beschikbaar is. Het interne extractie-eindpunt is geen
openbare upload-API: een volle wachtrij retourneert `503` plus `Retry-After`, een verbroken
verbinding met de aanroeper retourneert `499` en de vaste brokerdeadline retourneert `504`. Geconverteerde antwoorden voegen
`video->text;model=<visionModel>;parts=<videos>` toe aan de centrale
header `x-omniroute-modality-bridge` zonder Vision- of Audio-segmenten te verwijderen.

### PII-masker (`piiMasker.ts`)

Wordt in **beide** fasen uitgevoerd.

- **`preCall`** kloont de payload, doorloopt `system`, `messages`, `input` en
  `prompt` (inclusief gewone tekenreeksitems) en past `processPII()` (uit
  `@/shared/utils/inputSanitizer`) toe op tekenreeksvelden `content`/`text`. Wanneer
  `PII_REDACTION_ENABLED=true`, worden gedetecteerde persoonsgegevens (PII) in de uitgaande
  payload gemaskeerd. Dit staat los van `INPUT_SANITIZER_MODE` (dat alleen het
  beleid voor promptinjectie bepaalt). Wanneer maskering uitstaat, registreert de aanroep
  detectieaantallen zonder de inhoud te herschrijven.
- **`postCall`** maakt een diepe kopie van de respons en voert `sanitizePIIResponse()` en
  de maskerfunctie voor de Responses-API-structuur uit (`maskResponsesOutput` — omvat
  `output_text` en `output[].content[].text`). Als er maskering plaatsvindt, vervangt de
  gewijzigde respons het origineel.

De beveiligingslaag blokkeert nooit; deze voegt alleen annotaties toe (`meta.detections`,
`meta.redacted`) of herschrijft inhoud.

#### Selectie per type, aangepaste patronen en detectietellers

**Dashboard → Instellingen → Beveiliging → PII-maskering** bepaalt _wat_ er wordt gemaskeerd. Dit
schakelt maskering niet in: daarvoor dienen nog steeds `PII_REDACTION_ENABLED` (verzoek) en
`PII_RESPONSE_SANITIZATION` (respons + SSE), die beide standaard uitstaan.

- **Selectie per type** — de ingebouwde ID's staan in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Niet ingesteld betekent alle
  typen (het gedrag voordat deze instelling bestond). Het patroon
  `ssn_us` van de verzoekengine wordt gekoppeld aan `ssn`. Sjablonen (Minimaal, Standaard, Financieel,
  Braziliaans, VS, Volledig) vullen alleen de selectievakjes in de gebruikersinterface in.
- **Aangepaste patronen** — maximaal 20 regex- of jokertekenpatronen (`*` = maximaal 64
  niet-witruimtetekens, `?` = één). Overeenkomsten worden vervangen door `[CUSTOM_REDACTED]`.
  Elk patroon doorloopt `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maximaal 500 tekens, vlaggen beperkt
  tot `g i m s u`, moet compileerbaar zijn, moet de controle van `safe-regex` (catastrofale
  backtracking) doorstaan en mag niet overeenkomen met een lege tekenreeks of een maskeringsplaceholder.
  Een patroon dat niet aan de eisen voldoet, wordt geweigerd bij het opslaan en testen. Een opgeslagen rij
  die niet aan de eisen voldoet, wordt tijdens runtime overgeslagen in plaats van gecompileerd. Aangepaste patronen worden alleen
  uitgevoerd wanneer maskering aanstaat.
- **Detectietellers** — aantallen per type (nooit de overeenkomende waarden), bijgehouden in
  het geheugen en opnieuw ingesteld bij een herstart (`src/lib/pii/piiDetectionStats.ts`). Ze worden alleen
  verhoogd wanneer maskering aanstaat.

De instellingen staan in de tabel `key_value` (naamruimte `pii_settings`,
`src/lib/db/piiSettings.ts`) en worden gelezen via een cache van 1 s. API:

| Methode | Pad                      | Doel                                                                             |
| ------- | ------------------------ | -------------------------------------------------------------------------------- |
| `GET`   | `/api/settings/pii`      | Vlagstatus, `enabledTypes`, `customPatterns`, detectietellers                    |
| `PUT`   | `/api/settings/pii`      | `enabledTypes` (`null` = alle) en/of `customPatterns` vervangen                  |
| `POST`  | `/api/settings/pii/test` | Eén patroon testen op een voorbeeld van maximaal 8 KB; er wordt niets opgeslagen |

Alle drie vereisen beheerdersauthenticatie en valideren de body met Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Promptinjectie (`promptInjection.ts`)

Detecteert kwaadaardige structuren in door gebruikers aangeleverde inhoud en handhaaft het
geconfigureerde beleid. Het gedrag wordt bepaald door omgevingsvariabelen en constructoropties:

| Instelling         | Omgevingsvariabele                                                                                   | Standaard | Effect                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ingeschakeld       | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Bij `false` stopt de beveiligingslaag direct.                                                                                                                                                                                         |
| Modus              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Injectiebeleid: `block`, `warn` of `log`. (`redact` wordt geaccepteerd voor achterwaartse compatibiliteit, maar verwijdert injectietekst **niet**; het herschrijven van PII in verzoeken wordt bepaald door `PII_REDACTION_ENABLED`.) |
| Blokkeringsdrempel | Optie `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimaal vereist ernstniveau om te blokkeren. Gemiddelde ernst wordt standaard alleen geobserveerd.                                                                                                                                   |

**Voorrang van modi** (`getMode`): `options.mode` van de aanroeper →
`INJECTION_GUARD_MODE` **DB-override voor functievlag** (Dashboard → Instellingen →
Functievlaggen) → omgevingsvariabele `INJECTION_GUARD_MODE` → omgevingsvariabele `INPUT_SANITIZER_MODE` →
`warn`. Een dashboard-override heeft dus voorrang op de omgevingsvariabelen, waardoor de gebruikersinterface voor
functievlaggen de actieve beveiliging direct aanstuurt (zonder herstart). Het uitlezen van de DB is foutbestendig:
bij een fout valt de beveiliging terug op het gedrag op basis van omgevingsvariabelen. Wanneer er geen
override is ingesteld, is het gedrag identiek aan dat bij uitsluitend omgevingsvariabelen.

Detectiebronnen:

1. `sanitizeRequest()` uit `@/shared/utils/inputSanitizer` (gedeelde set detectoren
   die elders in de pijplijn wordt gebruikt).
2. Ingebouwde `DEFAULT_GUARD_PATTERNS` (momenteel `system_override_inline` en
   `markdown_system_block`, beide met ernstniveau `high`).
3. Optionele `customPatterns` die via constructoropties worden doorgegeven (tekenreeksen, regex
   of records met de vorm `{ name, pattern, severity }`).

Wanneer `mode === "block"` **en** ten minste één detectie de ernst-
drempel bereikt, retourneert `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. In de modi `warn`/`log` logt de guardrail, maar
staat de aanroep toe. De gedeelde hulpfunctie `evaluatePromptInjection()` wordt ook geëxporteerd
voor aanroepers die prompts willen evalueren zonder het register te gebruiken.

**Scanlimiet (v3.8.20):** de detector inspecteert alleen de **eerste 16 KB** van
samengevoegde prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) in
`src/shared/utils/inputSanitizer.ts`. Zowel `detectInjection()` als
`evaluatePromptInjection()` past `slice(0, MAX_INJECTION_SCAN_BYTES)` toe voordat
de patroonlus wordt uitgevoerd. Injectie-instructies staan meestal bovenaan de invoer, dus dit
beperkt de CPU-/GC-belasting door regex bij payloads van honderden KB zonder de detectie te verzwakken (zie
#3932, #4041).

### Maskering van inloggegevens (`credentialMasker.ts`)

Wordt in **beide** fasen uitgevoerd, als laatste in de standaardketen (prioriteit `95`). Maskeert
bekende patronen van API-sleutels / geheime tokens in de uitgaande payload (bericht-
inhoud, argumenten voor toolaanroepen, toolresultaten) **en** het antwoord van de provider, zodat
inloggegevens die in een prompt zijn geplakt (of door een toolresultaat worden teruggegeven) niet uitlekken
naar de upstreamprovider of terug naar de client.

- **Alleen na expliciete inschakeling**, volgens dezelfde conventie als PII-maskering (verwant aan harde regel #20):
  uitgeschakeld tenzij `settings.credentialRedactionEnabled === true` **of**
  `CREDENTIAL_REDACTION_ENABLED=true`. Wanneer dit uitstaat, doet de guardrail niets —
  hij blokkeert nooit en herschrijft nooit.
- `redactCredentials()` doorloopt de volledige payload-/antwoordstructuur (`walkValue()`,
  veilig tegen prototypevervuiling en cycli dankzij `WeakSet`) en vervangt overeenkomsten door
  een tijdelijke aanduiding `[REDACTED:<type>]`, waarbij alleen de daadwerkelijk
  gewijzigde takken worden gekloond.
- `CREDENTIAL_PATTERNS` omvat sleutels van LLM-providers (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betaalsleutels (Stripe, Square), cloud-
  sleutels (AWS-toegangssleutel, Twilio, SendGrid, Mailgun), privésleutels / JWT's,
  verbindingsreeksen met inloggegevens (`mongodb://user:pass@...`, enz.) en
  een generiek patroon voor de headerwaarde van `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Sleutels in headervorm (`authorization`, `x-api-key`, `api-key`,
  `apikey`) worden structureel gemaskeerd (alleen de waarde, met behoud van het schemaprefix zoals
  `Bearer `/`Basic `) in plaats van via de generieke tekstregex.
- De guardrail blokkeert nooit; hij herschrijft alleen (`modifiedPayload` /
  `modifiedResponse`) en voegt annotaties toe (`meta.credentialsRedacted`, `meta.count`).

Regressietest: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiscontract (`base.ts`)

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
  block?: boolean; // true breekt de keten voortijdig af
  message?: string; // wordt getoond bij blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // geretourneerd door preCall om het verzoek te herschrijven
  modifiedResponse?: TValue; // geretourneerd door postCall om het antwoord te herschrijven
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

Een guardrail geeft aan dat er niets verandert door `void`, `{}` of
`{ block: false }` te retourneren. Het retourneren van een `modifiedPayload`/`modifiedResponse` vervangt
de waarde die door de keten stroomt voor volgende guardrails.
`signal?: AbortSignal` geeft de levenscyclus van de aanroeper door aan guardrails. Het afbreken van een verzoek is de bewuste fail-open-uitzondering: mediabridges stoppen hun werk en ruimen op zonder onbewerkte media terug te plaatsen voor een doel waarvan bekend is dat het die niet ondersteunt.

## Register (`registry.ts`)

De singleton `guardrailRegistry` biedt:

- `register(guardrail)` — voegt een guardrail toe (of vervangt deze op basis van de genormaliseerde naam) en
  sorteert opnieuw op oplopende `priority`.
- `clear()` / `list()` — hulpfuncties voor beheer.
- `runPreCallHooks(payload, context)` — doorloopt actieve guardrails, geeft de
  payload door via `modifiedPayload` en stopt bij de eerste `block: true`.
- `runPostCallHooks(response, context)` — dezelfde verwerking aan de antwoordzijde.
- `resetGuardrailsForTests({ registerDefaults })` — wist de toestand en registreert desgewenst
  de standaardguardrails opnieuw voor een schone testisolatie.

Beide uitvoerders retourneren `{ blocked, payload|response, results, guardrail?, message? }`,
waarbij `results` een array van `GuardrailExecutionResult`-records is met
per guardrail de velden `blocked`, `skipped`, `modified`, `error` en `meta`,
die nuttig zijn voor tracering.

### Guardrails per verzoek uitschakelen

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` verzamelt een
ontdubbelde lijst met namen van guardrails die voor het huidige
verzoek moeten worden overgeslagen. Er zijn vijf kanalen, die in deze volgorde worden gelezen en tot één lijst worden samengevoegd
(bij ontdubbeling blijft de eerste vermelding behouden):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` in de verzoekbody (op het hoogste niveau)
3. `metadata.disabledGuardrails` in de verzoekbody (alleen wanneer `metadata` een object is)
4. Header `x-omniroute-disabled-guardrails`
5. Verouderde header `x-disabled-guardrails`

Alle vijf kanalen worden samengevoegd, inclusief de twee headers: als zowel
`x-omniroute-disabled-guardrails` als `x-disabled-guardrails` wordt verzonden, wordt de vereniging van
hun lijsten overgeslagen, en een lege moderne header verbergt de verouderde header niet langer
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), opgelost in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Waarden mogen arrays van tekenreeksen of een kommagescheiden tekenreeks zijn; witruimte aan het begin en einde van namen wordt verwijderd
en namen worden genormaliseerd naar kebab-case in kleine letters (`pii_masker` → `pii-masker`), en lege
items worden verwijderd. Het resultaat wordt via `context.disabledGuardrails`
doorgegeven aan het register, dat overeenkomende guardrails overslaat (`skipped: true` in `results`).

De uitschakellijst heeft alleen invloed op het **register**. De modus `block` voor promptinjectie is
een verplichte beveiligingsgrens: de middleware voor injectiebeveiliging
(`src/middleware/promptInjectionGuard.ts`) roept `evaluatePromptInjection()`
aan zonder een uitschakellijst die door de aanroeper kan worden beheerd (de overbodige
aanroep `resolveDisabledGuardrails({ body })` die eerder werd uitgevoerd, is verwijderd in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), dus een verzoek
dat `prompt-injection` uitschakelt, wordt in de modus `block` nog steeds geweigerd. Dit is
bewust zo ontworpen. De uitschakelkanalen worden door de aanroeper beheerd (verzoekbody,
metadata, headers), en een aanroeper mag een door de beheerder ingestelde
beveiligingsmaatregel niet kunnen uitschakelen
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). De
samenvoeging van headers uit [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
verandert alleen welke guardrails in het register worden overgeslagen; een client kan hiermee
de middleware niet omzeilen. Verplicht guardrailbeleid per sleutel en per groep wordt
bijgehouden in de v4-RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Zie [Dekking en beperkingen](#coverage-and-limits).

## Uitvoeringsvolgorde

Voor elk verzoek dat via `src/sse/handlers/chat.ts` en
`open-sse/handlers/chatCore.ts` loopt (de routes uit de chatfamilie vermeld onder
[Dekking en beperkingen](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` stelt de lijst met over te slaan guardrails samen op basis van de API-sleutel, de body
   en de headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` voert guardrails uit in oplopende
   prioriteitsvolgorde:
   - Uitgeschakelde guardrails worden geregistreerd als `skipped`.
   - De `preCall` van elke guardrail kan de payload herschrijven via `modifiedPayload`.
   - De eerste `block: true` breekt de keten af en de handler retourneert
     een afwijzingsantwoord van de guardrail.
3. De (mogelijk herschreven) payload gaat door naar comboroutering en upstream-
   verzending.
4. **Alleen bij niet-streaming:** nadat het antwoord is samengesteld,
   voert `guardrailRegistry.runPostCallHooks(...)` dezelfde keten uit op het
   antwoord. `block: true` verwijdert hier het upstream-antwoord en retourneert HTTP 400. Bij gestreamde antwoorden wordt deze stap volledig overgeslagen.

Guardrails die een uitzondering opwerpen, worden geregistreerd met `error: <message>` en gelogd via
`logger.warn`, maar de keten gaat door — bewust fail-open.

## Dekking en beperkingen

Het guardrailregister is alleen aangesloten op de chatpipeline. Deze beperkingen zijn
vastgelegd in `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` en
`tests/unit/guardrail-pipeline-characterization.test.ts`; werk die tests
bewust bij wanneer het gedrag verandert.

### Waar de hooks worden uitgevoerd

| Hook / controle                              | Wordt uitgevoerd op                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                            | Verzoeken die worden afgehandeld door `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (en `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` en de Telegram-chatproxy. Ook het testendpoint van het dashboard `/api/guardrails/test`. Een blokkering vóór de aanroep retourneert HTTP 400. |
| `runPostCallHooks`                           | Alleen **niet-gestreamde** chatantwoorden (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Gestreamde antwoorden bereiken deze hook nooit.                                                                                                                                                                                                                                                                                                                  |
| Streaming-PII                                | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), opgenomen in de pipeline in `streamingPipeline.ts` wanneer `PII_RESPONSE_SANITIZATION` is ingeschakeld. Dit is geen guardrail, dus de uitschakelkanalen hebben er geen invloed op.                                                                                                                                                                                                                   |
| Middleware voor injectiebeveiliging (legacy) | Elke `/v1`-route met een prompt, inclusief de chatfamilie (zie [routedekking](#injection-guard-route-coverage--red-team-phase-8--block-d)). Alleen promptinjectie.                                                                                                                                                                                                                                                                                                 |

### Wat niet wordt gedekt

- **Media-, embedding- en dataroutes** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) bereiken het register nooit. Daar worden
  geen PII-maskering, maskering van inloggegevens of modaliteitsbrug uitgevoerd. De enige
  controle daar is de legacy-middleware voor injectiebeveiliging.
- **Gestreamde antwoorden** krijgen geen guardrails na de aanroep: geen `pii-masker` of
  `credential-masker` na de aanroep, en geen blokkering na de aanroep. Alleen de streaming-PII-
  transformatie is van toepassing (wanneer `PII_RESPONSE_SANITIZATION` is ingeschakeld). Inloggegevens
  die in een gestreamd antwoord worden teruggegeven, worden niet gemaskeerd.
- **Uitschakelkanalen versus de middleware (bewust zo ontworpen):** de middleware beoordeelt
  promptinjectie met een eigen aanroep van `evaluatePromptInjection()`, zonder
  een door de aanroeper beheerde uitschakellijst door te geven. De modus `block` vormt een verplichte
  grens die niet kan worden omzeild door uitschakelingen vanuit de aanroeper, ook niet op routes uit de chatfamilie
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Het uitschakelen van
  `prompt-injection` slaat alleen de guardrail in het register over.

### Wat een antwoord ziet vóór de hooks na de aanroep

In het niet-streamingpad is de volgorde: geheugenextractie → uitvoering van ingebouwde
tools → guardrails na de aanroep → afsluiten bij blokkering na de aanroep → opslag in de semantische cache.

- **Geheugenextractie** en **tooluitvoering** zien het antwoord voordat de
  beveiligingsmaatregelen na de aanroep het kunnen herschrijven of blokkeren. Sinds
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) voert
  geheugenextractie de geëxtraheerde tekst door `sanitizePII` wanneer
  `PII_RESPONSE_SANITIZATION` is ingeschakeld (zowel bij streaming als zonder streaming), maar een
  antwoord dat later na de aanroep wordt geblokkeerd, is dan al aangeboden aan het geheugen en de
  tools.
- **De semantische cache** slaat het antwoord op na de controles na de aanroep en bewaart dus het
  herschreven antwoord; een geblokkeerd antwoord wordt nooit in de cache opgeslagen. Cache-items worden
  per API-sleutel geïndexeerd.

## Configuratie

Omgevingsvariabelen die door de ingebouwde beveiligingsmechanismen worden gelezen:

| Variabele                             | Gebruikt door                                  | Effect                                                                                                            |
| ------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                             | Stel in op `false` om detectie volledig uit te schakelen.                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                             | Injectiebeleid: `warn`, `block` of `log`. De verouderde waarde `redact` herschrijft injectietekst niet.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                             | Modus voor de injectiebeveiliging; ook een DB-functievlag die de omgevingsvariabelen **overschrijft** (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                             | Minimale ernst die `MODE=block` afwijst: `high` (standaard), `medium` of `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                             | Verouderd alias voor `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`                                   | Bij `true` worden persoonsgegevens in verzoeken gemaskeerd (onafhankelijk van de injectiemodus).                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (verderop in de verwerkingsketen) | Bepaalt het gedrag van de maskering aan de antwoordzijde.                                                         |

De beveiligingsmechanismen van Modality Bridge lezen de runtimeconfiguratie uit de op een database gebaseerde
instellingenopslag (`getSettings()`), niet uit omgevingsvariabelen. De primaire sleutels voor Vision zijn
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` en
`modalityBridgeCacheMaxEntries`. De verouderde
`visionBridge*`-sleutels worden alleen geaccepteerd als de gedocumenteerde terugvaloptie bij het lezen
gedurende één cyclus; het dashboard schrijft met de primaire sleutels. Standaardwaarden en de resolver voor de terugvaloptie
staan in `src/shared/constants/modalityBridgeDefaults.ts`, terwijl de verouderde
constanten behouden blijven in `src/shared/constants/visionBridgeDefaults.ts`.

Audio gebruikt `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` en `modalityBridgeAudioMaxClips`, plus de gedeelde
`modalityBridgeCache*`-instellingen. Audio heeft geen terugvaloptie voor verouderde sleutels, omdat deze
sleutels samen met het Modality Bridge-schema zijn geïntroduceerd.

Video gebruikt `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` en
`modalityBridgeVideoTimeout`, plus de gedeelde `modalityBridgeCache*`-instellingen.
Dit is standaard uitgeschakeld omdat FFmpeg/ffprobe optionele operationele
afhankelijkheden zijn en het genereren van framebeschrijvingen extra latentie en modelkosten met zich meebrengt.

## Aangepaste guardrails

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

Stappen:

1. Maak `src/lib/guardrails/myGuardrail.ts` aan als uitbreiding van `BaseGuardrail`.
2. Implementeer `preCall` en/of `postCall`.
3. Registreer bij het importeren (vanuit `registerDefaultGuardrails`) of
   roep `guardrailRegistry.register(...)` tijdens runtime aan — het register vervangt
   elke eerdere guardrail met dezelfde genormaliseerde naam.
4. Voeg tests toe onder `tests/unit/` (bestaande voorbeelden:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testen

Gebruik `resetGuardrailsForTests()` tussen tests om vanuit een bekende toestand te beginnen.
Geef `{ registerDefaults: false }` mee om met een leeg register te beginnen en
alleen de te testen guardrails te registreren. Vision Bridge ondersteunt dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge biedt
vergelijkbare injectiepunten voor instellingen, mogelijkheden, STT-modelselectie,
controles van toegangsgegevens en transcriptie. Tests kunnen daardoor beide stromen testen zonder database-
of netwerktoegang.

## Zie ook

- `src/lib/guardrails/` — implementatie
- `src/shared/utils/inputSanitizer.ts` — gedeelde detector voor
  promptinjectie en PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — standaardinstellingen van Vision Bridge en
  lijst met modellen waarvoor de bridge verplicht is
- `src/shared/constants/modalityBridgeDefaults.ts` — gedeelde runtime-standaardinstellingen voor Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — onafhankelijke laag (circuitbreaker, afkoelperiodes)
- `docs/reference/ENVIRONMENT.md` — volledig overzicht van omgevingsvariabelen

## Routedekking van de injectiebeveiliging & redteamtests (Fase 8 · Blok D)

De injectiebeveiliging (`createInjectionGuard` / `withInjectionGuard`) dekt alle routes
die gebruikersprompts accepteren. Deze respecteert `INJECTION_GUARD_MODE` (standaard `warn` = alleen loggen;
`block` = retourneert HTTP 400 `SECURITY_001`).

| Type             | Routes                                                                                                                                               | Standaardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Tekst (bestaand) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generatief       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Gegevens         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Tekstextractie (`extractMessageContents`) omvat `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Redteamtests (elke nacht, `nightly-llm-security.yml`):** promptfoo controleert of elke route
het OWASP-LLM-corpus blokkeert met `INJECTION_GUARD_MODE=block`; garak voert probes uit (wordt overgeslagen zonder geheim).
`moderations` is voor de consistentie opgenomen. De blokkeermodus is een verplichte beveiligingsgrens: `evaluatePromptInjection()`
negeert de uitschakellijst per verzoek die de middleware doorgeeft, dus `disabledGuardrails` stelt
een route hier **niet** van vrij ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

De nachtelijke workflow (`.github/workflows/nightly-llm-security.yml`, cron + handmatig
starten) heeft twee taken:

- **`promptfoo-guard` (blokkerend)** — voert `promptfoo eval -c promptfooconfig.yaml` uit
  met `INJECTION_GUARD_MODE=block`. Elk aanvalsscenario (bijv. "negeer alle
  eerdere instructies…", jailbreaks in DAN-stijl) controleert of het antwoord
  `error.code === "SECURITY_001"` bevat, oftewel of de beveiliging het verzoek daadwerkelijk heeft afgewezen.
- **`garak` (adviserend)** — voert garak `--probes promptinject,dan,leakreplay` uit
  tegen een lokale OmniRoute-instantie (`http://localhost:20128/v1`). Vereist een
  providergeheim (`PROMPTFOO_PROVIDER_KEY`); wordt zonder foutmelding overgeslagen als dit ontbreekt en krijgt
  `|| true` als achtervoegsel, zodat de resultaten worden gerapporteerd zonder CI te laten mislukken.

De dekking van de beveiligingshelper (`createInjectionGuard` / `withInjectionGuard`)
omvat elke `/v1`-route die prompts verwerkt; prompttekst wordt opgehaald uit
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` door
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.

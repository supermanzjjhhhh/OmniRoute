# Guardrails (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Autoritativ kilde:** `src/lib/guardrails/`
> **Senest opdateret:** 2026-10-17 — v3.8.52 (tilføjet [Dækning og begrænsninger](#coverage-and-limits):
> hvilke ruter og svarveje hooks omfatter, de samlede deaktiveringsheadere (#16412), injektions-
> blokeringstilstand som en obligatorisk grænse (#16413), og hvad der ser et svar før post-call)

Guardrails håndhæver sikkerhed, politikker og indholdstransformationer ved grænsen
mellem OmniRoute og upstream-udbydere. Hver guardrail kan inspicere (og
eventuelt afvise, transformere eller annotere) anmodningspayloads (`preCall`) og
upstream-svar (`postCall`).

Systemet er **fail-open**: Hvis en guardrail kaster en undtagelse under udførelsen, registrerer
registret fejlen og fortsætter med den næste guardrail i stedet for at lade
anmodningen fejle. Blokering er en eksplicit beslutning (`block: true`), aldrig en utilsigtet hændelse.
Den eneste undtagelse er en afbrudt anmodning: Når kalderens `signal` afbrydes,
afviser en guardrail, der kaster en undtagelse, hook-kørslen i stedet for at blive sprunget over.

Hooks kører **ikke** på alle ruter eller for alle svar. Læs
[Dækning og begrænsninger](#coverage-and-limits), før du bruger en guardrail som en
sikkerhedsforanstaltning.

## Indbyggede guardrails

Registret indlæser automatisk seks guardrails i prioritetsrækkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Trin           | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstal køres **først**.

### Vision Bridge (`visionBridge.ts`) — Modalitetsbro PR-1

Basismodellen GLM 5.3 og `glm-5.3-{low,high,max}` har eksplicitte
`supportsVision:false`-metadata i registeret/specifikationen. GLM 5.3 Flash-varianterne
er fortsat modeller med indbygget billedforståelse. Claude Codes `/v1/messages`-rute går ind i
den fælles `handleChat`-kæde af pre-call-guardrails **før** oversættelsen fra Claude til OpenAI;
indlejrede billeder fra `Read`-værktøjsresultater skal beskrives eller håndteres,
før denne oversættelse løfter dem ind i OpenAI-`image_url`-indhold (#17069).

Opfanger anmodninger med billeder rettet mod **modeller uden billedforståelse** og
omdirigerer enten hele anmodningen til en model med billedforståelse eller erstatter billeddelene
med tekstbeskrivelser genereret af en konfigurerbar model med billedforståelse før
upstream-kaldet. Dette gør det muligt for udbydere, der kun understøtter tekst, at håndtere
multimodale payloads transparent.

Forløb:

1. Spring over, hvis målmodellen allerede understøtter billedforståelse (medmindre den står på
   listen over modeller med tvungen brokobling `isVisionBridgeForcedModel`).
2. Udtræk billeddele via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **fælles
   mediedetektor** `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste autoritative kilde, som deles med kombinationsfilteret for kompatibilitet.
   Udtrækning er begrænset til de strukturer, som `replaceImageParts` kan indsætte
   igen (kontrakten mellem udtrækning og erstatning): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` og Responses
   API `input_image`. Matchende billeder indlejret i Claude Code-
   `tool_result.content` og Responses-værktøjsoutput udtrækkes og
   erstattes også på deres oprindelige stier; strukturer, der kun fungerer som indikatorer, bruges af kombinationsfilteret
   og udtrækkes ikke.
   Spring over, hvis ingen findes.
3. Hent runtime-konfigurationen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): Nye `modalityBridge*`-
   indstillingsnøgler har forrang; ældre `visionBridge*`-nøgler forbliver en **fallback i én
   cyklus** (tilbagerulningsvindue). Spring over før enhver gennemgang af medier, når
   broen er deaktiveret.
4. Tilstandsvælgeren (`modalityBridgeVisionMode`, se tabellen nedenfor) afgør,
   om der skal omdirigeres eller beskrives. Omdirigering returnerer `modifiedPayload`, hvor kun `model`
   er udskiftet, samt metadataene `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesvejen: Begræns antallet af billeder til `maxImages`, sammensæt den opgavetilpassede prompt,
   slå op i beskrivelsescachen, kald modellen med billedforståelse **parallelt**
   (`Promise.allSettled`), og indsæt tekstdele med `[Image N]: <description>`
   i deres sted. En mislykket beskrivelse giver `null`: Det rå billede bevares for
   ukendte mål eller mål med billedforståelse (#4012), men et **bekræftet direkte mål, der kun
   understøtter tekst**, eller en kombination uden billedforståelse får en eksplicit
   `(unavailable — no vision-capable provider connected)`-pladsholdertekst for
   hvert billede uden beskrivelse, herunder ved delvise fejl og for billeder ud over
   grænsen for beskrivelseskald (#17069). Den eksisterende fallback for kombinationsbeskrivelser, hvor alle kald fejler,
   bevares (#8430).
6. Returnér `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilstandsvælger (`modalityBridgeVisionMode`)

| Tilstand   | Standard | Adfærd                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Ældre heuristik, uændret (#6640/#7204): modeller, der ikke er kombinationsmodeller, eller som er `auto/`-modeller, omdirigeres til den bedste visionsmodel, medmindre den oprindelige model allerede har brugbare legitimationsoplysninger (så beskrives billedet); kombinationsmål beskriver altid.                                                       |
| `describe` |          | Beskriv altid — omdirigeringsblokken springes helt over; brugerens valgte model svarer altid.                                                                                                                                                                                                                                                              |
| `reroute`  |          | Gennemtving omdirigering: kontrollen, der bevarer modellen med legitimationsoplysninger, omgås. Kontrollen af legitimationsoplysninger for omdirigeringens **mål** gælder stadig — når der ikke findes et brugbart visionsmål, blokerer broen med en tydelig fejl i stedet for at beskrive eller sende rå billeder til et mål, der kun understøtter tekst. |

Tvungne tilstande kortslutter **før** auto-heuristikken køres; adfærden for `auto`
er byteidentisk med sikkerhedsmekanismen fra før PR-1.

#### API-nøglens adgangsområde (`visionBridgeKeyScope.ts`)

Når kalderens API-nøgle begrænser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), vælger broen kun
modeller til omdirigering og beskrivelse, som nøglen må bruge, på forbindelser, som nøglen må
bruge. Beskrivelseskaldet går derefter altid gennem OmniRoutes selvløkke med
headeren `x-omniroute-self-loop-key-id`, så den modtagende chatanmodning
håndhæver nøglens forbindelses- og modelpolitik igen. `enforceApiKeyPolicy()`
respekterer kun denne header sammen med selvløkkens bearer-token, så den kun kan
indskrænke adgangen, og et id, der ikke kan slås op, afvises.

Hvis ingen visionsmodel er tilladt for nøglen, afviser et **bekræftet mål, der kun
understøtter tekst**, billedanmodningen lokalt med en tydelig HTTP 400 i stedet for
at videresende billedbytes til en upstream-tjeneste, der ikke kan håndtere dem (#17069). For mål med
ukendt eller indbygget visionsunderstøttelse bevarer beskrivelsesforløbet sin tidligere
adfærd med at fortsætte ved fejl (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anmodninger uden en nøgle og nøgler uden disse begrænsninger fungerer præcis som
før.

#### Opgavebevidst beskrivelsesprompt (`modalityBridgeVisionTaskAware`)

Standardværdien er **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) føjer
teksten fra den **sidste brugerbesked** (afkortet til 500 tegn) til den grundlæggende
beskrivelsesprompt, så beskrivelsen fokuserer på det, brugeren faktisk spurgte om
(codex-vision-proxy-mønsteret), og beder visionsmodellen om at transskribere synlig
tekst. Når flaget er slået fra — eller der ikke er nogen brugertekst — bruges den grundlæggende prompt uændret.

Beskrivelsesselvløkkens egen OpenAI-kompatible anmodning (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) anmoder altid om `image_url.detail: "high"` —
ubetinget, for alle kaldere/udbydere, uden at afhænge af noget klientsignal.
Sampling med lav detaljegrad forringer OCR-nøjagtigheden for netop den teksttransskriptionsopgave,
denne prompt beder om, så selve beskrivelseskaldet anmoder altid om høj
detaljegrad, uanset hvilket detaljeniveau den oprindelige indgående anmodning brugte. Dette
påvirker kun indholdet af den interne beskrivelsesanmodning; det ændrer ikke, hvordan
OmniRoute videresender kalderens egen `image_url.detail` i den primære anmodning —
den standardværdi anvendes separat og kun for registrerede OpenCode-klienter i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grenen med
Anthropics overførselsformat i beskrivelsesselvløkken har intet `detail`-felt
og påvirkes ikke af nogen af standardværdierne.

#### Længdegrænse for beskrivelser (`modalityBridgeVisionMaxChars`)

| Nøgle                          | Standard | Interval            |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen grænse** — beskrivelsen, der returneres af
`callVisionModel()`, sendes videre uændret, så den eksisterende
adfærd bevares. Enhver værdi i intervallet 100–50000 afkorter beskrivelsen med
suffikset `…`, før den indsættes igen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Hæv værdien til OCR-opgaver med mange detaljer, hvor den efterfølgende model har brug for
den fulde transskription; sænk den for at begrænse tokenforbruget hos ordrige visionsmodeller.
Feltet i dashboardet findes i panelet Avanceret på fanen Vision
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og hæver alle
værdier mellem 1 og 99 til minimumsværdien 100, mens et eksplicit `0`
forbliver uændret — `0` er i sig selv en gyldig Zod-værdi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke blot
standardværdien for »ikke angivet«.

#### Beskrivelsescache (`modalityBridge/bridgeCache.ts`)

LRU- og TTL-cache i hukommelsen til beskrivelser, delt på tværs af hele processen.
Nøgle = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
længdepræfikseret indramning (ingen kollisioner ved feltgrænser). Modelkomponenten er
den **konfigurerede** bromodel, ikke den model, der faktisk svarede —
`callVisionModel` kan bruge en reservemodel internt, og en nøgle pr. forsøg ville
fragmentere cachen. Mislykkede beskrivelser caches aldrig. Indstillinger:

| Nøgle                           | Standard | Interval |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Normalisering af fjernbilleder (describe/base64-hentning via selv-loop)

Når broen selv henter et **fjernbillede** — Anthropics describe-selvkald
og base64-konverteringen til claude-wire-format
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — føres den resulterende
data-URI gennem `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`), før den indlejres i anmodningen til
visionsmodellen. For store billeder nedskaleres til en **langside på 2048px** (svarende
til den størrelsesgrænse, OpenAI/Anthropic allerede anvender på serversiden), hvilket reducerer
uploadmængden og latenstiden uden at ændre, hvad visionsmodellen ser. Størrelsesændringen
bruger `sharp`, som indlæses via dynamisk import: På en platform, hvor dets platformspecifikke
binære modul ikke kan indlæses, **kaster `normalizeDataUri()` aldrig en undtagelse** — den falder tilbage
til at videresende de oprindelige bytes uændret, så forløbet for describe/base64-konvertering
altid bliver ved med at fungere. Bytes, der ikke udgør et billede (en hentning, der ikke returnerede et
afkodeligt billede), videresendes også uændret. Denne normalisering er
begrænset til billeder, som broen henter til sit eget selvkald — den anvendes aldrig
på kalderens rå nyttelast, der videresendes uændret, i overensstemmelse med
princippet om kun at ændre data efter aktivt tilvalg (ufravigelig regel #20).

#### Indstillingsskema + migrering

De nye `modalityBridge*`-nøgler Zod-valideres i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trioen `modalityBridgeCache*` og
gruppen `modalityBridgeAudio*`, som bruges af Audio Bridge. Migreringen
`141_modality_bridge_settings.sql` kopierer eksisterende ældre
`visionBridge*`-værdier til de tilsvarende nye nøgler (idempotent, overskriver aldrig
en `modalityBridge*`-værdi, som operatøren har angivet); de ældre nøgler accepteres fortsat som
reserve ved læsning i én udgivelsescyklus.

#### Transparensheader + statistik

Svar, der er transformeret med describe, indeholder
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(oprettet af `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
tilføjet af `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerede anmodninger får **ingen** header — nyttelasten blev ikke ændret, og
modelskiftet er allerede synligt i svarets `model`-felt.

`GET /api/modality-bridge/stats` (administrationsgodkendelse, samme niveau som
`GET /api/settings`) returnerer de hukommelsesbaserede tællere pr. modalitet
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og
`video`. `averageLatencyMs` bruger `latencySamples`, ikke alle forsøg, som
nævner; en handling uden tidsmåling opretter ikke en kunstig måling på nul
millisekunder. `bridged` forbliver det bagudkompatible alias for vellykkede
konverteringer; mislykkede forsøg øger ikke tælleren.
Tællerne nulstilles tilsigtet ved genstart af processen
(telemetri, ikke regnskabsføring).

#### Konfiguration i dashboardet

Den dedikerede dashboardside er
`/dashboard/settings/modality-bridge`. Dens URL-adresserbare faner `Vision`, `Audio`
og `Video` bevarer forespørgselsparametrene, når værdien af `tab` ændres.
Fanen Vision giver adgang til aktivering, tilstand, modelvalg (herunder det automatiske
standardvalg), opgavebevidste prompter, avancerede grænser for timeout/billeder/beskrivelseslængde/cache,
kørselstællere
og en beskyttet prøveanmodning. Fanen Audio er også aktiv: Den giver adgang til
aktivering, en modelvælger kun til STT med Auto, grænser for timeout/maksimal kliplængde,
lydtællere og en prøvetest med `input_audio`. Fanen Video er funktionsdygtig: Den viser
FFmpeg/ffprobes kørselstilstand — én af fire eksplicitte UI-tilstande (`unknown`, mens
kontrollen er i gang eller ikke kunne fuldføres, `restricted` på en
dashboardvært uden loopback, hvor kontrollen springes over på klientsiden, `unavailable`, når kontrollen
har bekræftet, at værktøjerne mangler, eller `available` med FFmpeg/ffprobe-versionerne) — gemmer
aktiveringsindstillingen samt grænser for model/billeder/video/timeout, filtrerer modelvælgeren til modeller
med billedforståelse og giver adgang til videotællere.

Det tidligere Vision Bridge-kort under AI-indstillinger er et kompatibilitetslink til den
nye side; det har ikke længere sin egen kopi af formularen. Medieudbydere
linker også arbejdsgangene Billede til tekst og Tale til tekst til de tilsvarende Modality
Bridge-faner uden at fjerne det eksisterende testmiljø til Tale til tekst.

**Omgåelse af adgangskontrol ved selv-loop:** Når describe-kaldet routes gennem OmniRoutes
eget `/v1`-selv-loop (ikke-standardudbydermodel), sender underanmodningen
`x-omniroute-admission-bypass: internal` og godkendes med de fundne
selv-loop-legitimationsoplysninger — den lokale sentinelværdi `sk_omniroute` i lokal tilstand eller
den operatørkonfigurerede miljøvariabelnøgle `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), så
installationer med `REQUIRE_API_KEY=true` stadig kan udføre describe-kaldet. Omgåelsen
accepteres kun for præcis disse legitimationsoplysninger, så eksterne klienter ikke kan bruge
headeren til at springe adgangskontrollen over.

Ældre standardværdier findes i `src/shared/constants/visionBridgeDefaults.ts`; de
nye standardværdier for tilstand/opgavebevidsthed/cache og indstillingsresolveren findes i
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsesmekanismen stiller en
konstruktørindstilling, `deps`, til rådighed, så tests kan injicere simulerede implementeringer af `getSettings` og
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Opfanger chatanmodninger med lyd, før de når en destination, som ikke
vides at acceptere lydinput. Den omdirigerer aldrig chatanmodningen: Lyddele
transskriberes via det eksisterende OpenAI-kompatible multipart-endpoint, og den
valgte chatmodel fortsætter med teksttransskriptioner.

Forløb:

1. Afgør `supportsAudio` via `getResolvedModelCapabilities()`. Eksplicitte
   metadata fra udbyderregistret har forrang, derefter statiske modelmetadata og
   til sidst synkroniseret `modalities_input`. En angivet inputliste uden `audio`
   giver `false`; uden dokumentation for understøttelse forbliver værdien `null`.
   Både `false` og `null` aktiverer den konservative bro, mens `true` omgår den.
2. Afgør indstillingerne for `modalityBridgeAudio*`, og udtræk lyddele på øverste
   niveau, der kan erstattes, fra hver besked via den fælles detektor
   `detectMediaParts()`. Understøttede overførselsformater er OpenAI `input_audio`,
   `audio_url` og `source.media_type: "audio/*"`. Indlejret lyd registreres med
   henblik på routing, men fjernes ikke af erstatningslogikken. Arbejdet begrænses
   af `modalityBridgeAudioMaxClips`; efterfølgende dele forbliver uændrede.
3. Respekter en konfigureret `provider/model`, eller lad
   `selectAudioBridgeModel()` gennemgå `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil
   katalogrækkefølge og vælge den første model med brugbare, aktive
   legitimationsoplysninger til udbyderen.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en multipart-
   `file` eller downloader en ekstern `audio_url` via beskyttelsen af udgående
   trafik, der kun tillader offentlige adresser, med DNS-fastlåsning og en grænse
   på 25 MB. Derefter sendes filen og den valgte model med POST til den lokale
   `/v1/audio/transcriptions`-selvsløjfe, godkendt med
   `resolveSelfLoopBearer()`. Den eksisterende transskriptionsrute udfører normalt
   opslag af legitimationsoplysninger, håndtering af nedkølingsperioder og
   ratebegrænsninger samt videresendelse til udbyderen.
5. Vellykkede kald erstatter deres dele med `[Audio N]: <transcript>`. Kald køres
   med `Promise.allSettled`: En enkelt fejl bevarer den oprindelige lyddel
   (kontrakten i #4012). Hvis alle kald fejler, og målet med sikkerhed har
   `supportsAudio === false`, bliver delene til
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakten i #8430).
   For et ukendt mål (`null`) forbliver resultatet uændret, hvis alle kald fejler.
   Et mål, der med sikkerhed kun understøtter tekst og ikke har brugbare
   STT-legitimationsoplysninger, modtager den samme eksplicitte pladsholder uden
   et netværkskald.

Vellykkede transskriptioner bruger den procesfælles LRU-/TTL-cache for Modality
Bridge. Nøglen kombinerer lydreferencen, den stabile operationsetiket
`audio-transcription` og den valgte STT-model; fejl cachelagres aldrig. Lydforsøg
opdaterer de fælles tællere `bridged`, `cacheHits`, `failures` og `lastUsedAt`.
Transformerede svar indeholder
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; uændrede
anmodninger modtager ikke et Audio Bridge-segment.

Kørselsindstillinger gemmes i databasen og valideres med Zod:

| Nøgle                         | Standard | Interval          |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den fælles cache styres fortsat af `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Opfanger videodele på øverste niveau i Chat Completions `messages` og Responses
API `input`, før der kaldes et mål uden kendt indbygget videounderstøttelse.
Understøttede formater er `input_video`, `video_url`, `video_source`, HTTPS-URL'er
og data-URI'er med `data:video/*;base64,...`. Almindelige filnavne i tekst
behandles ikke som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) har ansvaret for gennemgang af
anmodninger, kontrol af understøttelse og politik, aggregering pr. anmodning samt
svarets indhold. Arbejdet pr. video — indhentning, cachen for det samlede
resultat, beskrivelse af en sekvens af videobilleder (som sammenfletter en
eventuel lydtransskription angivet af kalderen) samt metrikker, afbrydelse og
oprydning pr. forsøg — er skjult bag `processVideoPart` i
`videoBridgePipeline.ts`, som kaldes én gang pr. videodel i løkken i `preCall`.
Dette modul definerer også de eksplicitte portgrænser `VideoMediaBrokerPort`
(indhentning af bytes og udtrækning af udvalgte videobilleder),
`VideoAudioTranscriptionPort` (sammenfletning af en lydtransskription angivet af
kalderen med beskrivelserne af de udvalgte videobilleder) og `VideoDrilldownPort`
(persistensgrænsen for detaljeret billedanalyse; endnu ikke koblet til
`processVideoPart` — i dag er det kun den separate rute
`/api/modality-bridge/video/drilldown`, der skriver poster med detaljerede
analyser).

Den offentlige `/v1`-anmodningssti importerer eller starter aldrig en underproces.
Eksterne videoer downloades med en grænse på 50 MiB; indlejrede base64-videoer
har en konservativ grænse på 36 MiB afkodet data pr. video, så den samlede
størrelse af model, beskeder og indramning kan holdes inden for den offentlige
adgangsgrænse for JSON-anmodninger på 50 MiB. Indlejret længde og estimater af
afkodet størrelse kontrolleres før allokering. HTTPS kræves for den oprindelige
eksterne URL og hver omdirigering ved brug af den eksisterende beskyttelse af
udgående trafik, der kun tillader offentlige adresser, med DNS-fastlåsning.
Bytene krydser derefter den præcise interne brokergrænse
`POST /api/modality-bridge/video/extract`. Denne rute er både `LOCAL_ONLY` og
`SPAWN_CAPABLE`, accepterer kun en betroet loopback-anmodning, der er godkendt
specifikt for processen, og accepterer aldrig en URL, en filsystemsti, en
eksekverbar fil eller en argumentliste. API'ets pipeline til begrænsning af
anmodningsstørrelse og handlerens inkrementelle læser af anmodningsindhold
håndhæver uafhængigt af hinanden en grænse på 50 MiB for input til brokeren.
Dens begrænsede kø kører én udtrækning ad gangen, tillader fire ventende job og
begrænser ventende input til 100 MiB.

Inde i brokeren læser `ffprobe` en privat lokal fil; den faste tilladelsesliste
for formater udelukker afspilningsliste- og manifestformater. For tilladte
containere i MOV-familien forbliver eksterne MOV-datareferencer deaktiveret som
standard, og den faste kommando aktiverer dem ikke. Både `ffprobe` og `ffmpeg`
bruger en protokoltilladelsesliste med kun `file`, én tråd, faste argumentarrays,
ingen shell og eksekverbare filer fundet via `PATH`. Coverstrømme af typen
attached-picture er ikke kandidater til afspilning. Alle afspilbare strømme skal
overholde grænserne, og en eksplicit standardstrøm foretrækkes frem for det
deterministiske reservevalg med det laveste indeks. Videoer er begrænset til
600 sekunder, 8.192 pixels pr. dimension og 33.554.432 kildepixels. FFmpeg
udtager 1–16 JPEG-frames ved midtpunkter, nedskalerer den lange kant til højst
1.024 pixels uden at opskalere mindre input og modtager aldrig en URL.
Sampling er som standard `uniform`. De valgfrie politikker `scene_aware` og
den eksperimentelle `segment_aware` udfører én yderligere fast FFmpeg-kørsel
på den allerede validerede lokale strøm, vælger et begrænset antal
`showinfo`-scenetidsstempler og falder deterministisk tilbage til de samme
ensartet fordelte midtpunkter ved detektorfejl, timeout, ugyldigt formateret
output eller et tomt kandidatsæt. Segmentbevidst tilstand fordeler
midtpunktsprøver proportionalt mellem de validerede sceneintervaller;
segmentbevidst evidens og reserveadfærd beskrives nærmere nedenfor. Den
absolutte grænse på 16 frames anvendes efter udvælgelsen i alle politikker.
Når en scenebevidst anmodning kun har et budget på én frame, bruger den det
ensartede midtpunkt i det aktive vindue for hele videoen eller fokusvinduet og
rapporterer `policyEffective: uniform`: én enkelt udvalgt sceneframe kan ikke
bevare begge tidsmæssige ender. En kalder kan valgfrit angive et
fokusvindue med endelige grænser (`start`/`end` i sekunder); grænserne
begrænses til mediets varighed, omvendte vinduer eller vinduer med ikke-endelige
grænser afvises, og alle samplingpolitikker udføres kun inden for det
normaliserede interval. Det resulterende vindue medtages i samplingmetadataene
og i det ikke-betroede beskrivelsespræfiks, så efterfølgende modeller kan skelne
et fokuseret uddrag fra den fulde tidslinje.

Semantisk fokus for billedbeskrivelser er en separat, eksplicit indstilling.
Standardanalysetilstanden `full` bevarer den eksisterende frameprompt og
videresender aldrig anmodningstekst til modellen til billedbeskrivelser. I
tilstanden `focused` læser broen kun den seneste ikke-tomme brugerforfattede
`text`/`input_text` fra den samme Chat- eller Responses-container, normaliserer
den til NFC, sammenfatter kontroltegn og blanktegn og begrænser den til 500
Unicode-kodepunkter. Et tomt resultat falder tilbage til den præcise
`full`-prompt. Et brugbart hint serialiseres som JSON i en dedikeret blok med
ikke-betroet brugerkontekst og må kun prioritere observerbare detaljer; det
kan ikke tilsidesætte den separate advarsel mod at følge instruktioner, der er
synlige eller hørbare i mediet. Tekstligt fokus udleder aldrig `start`/`end`
og ændrer ikke den tidsmæssige sampling.

#### FU-07 strukturel segmentevidens

`segment_aware` bruger én afgrænset foranalyse på den allerede validerede
lokale videostrøm. Den faste filterkæde skalerer først til højst 320 pixels
i bredden, registrerer sceneskift og frosne intervaller og udtager derefter
1 frame pr. sekund til måling af sløring, gennemsnitlig luminans samt rumlig
og tidsmæssig information. Kørslen er begrænset til 600 strukturelle prøver,
én FFmpeg-/filtertråd, de samme tilladelseslister for containere og protokollen
`file` alene, en grænse på 1 MiB for procesoutput og højst 30 sekunder inden
for brokerens fælles afbrydelses-/tidsfrist. Den accepterer aldrig en
kommando, et filter, en sti eller en URL fra anmodningen.

De strukturelle værdier er deterministisk samplingevidens, ikke semantisk
videoforståelse. De udleder ikke motiver, handlinger, billedbeskrivelser, tale
eller brugerhensigt. Scene- og frysegrænser danner segmenter; frysedækning,
sløring, eksponering, rumlige detaljer og tidsmæssige ændringer påvirker kun,
hvordan det eksisterende budget på 1–16 frames fordeles. Et helt frosset
segment er begrænset til én frame, mens ikke-frosne segmenter konkurrerer om
det resterende budget. Når der er flere grænser end frames, bevares en ensartet
dækning af tidslinjen, så hurtige klip i begyndelsen ikke kan skjule et langt
afsluttende segment. Scenegrænser inden for analysens opløsning på 1 sekund
fra en frysegrænse slås sammen.

Manglende filtre, ugyldigt formateret eller tom evidens, en detektorfejl eller
timeout for den afgrænsede foranalyse medfører, at behandlingen fortsætter med
præcis den ensartede midtpunktspolitik. En afbrydelse fra kalderen eller
brokerens tidsfrist medfører ikke et sådant reservevalg: den afslutter den
igangværende underproces, forhindrer efterfølgende frameudtrækning, og det
private midlertidige mappetræ fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske, reelle
FFmpeg-testdata til besparelser på kald til billedbeskrivelser efter
deduplikering, budgetfordeling ved tæt bevægelse, slørings-/eksponerings-/SI-TI-evidens,
hurtige klip med et langt afsluttende segment og falske positiver ved gradvis
udtoning. Det registrerer foranalysens faktiske køretid og, hvor `/usr/bin/time`
er tilgængelig, underprocessens CPU-forbrug og maksimale RSS. Dets
kvalitetskontroller er udelukkende strukturelle testorakler. Den faktiske
kvalitet af modellen til billedbeskrivelser forbliver `HOLD`, fordi denne
testramme ikke har noget autoriseret endpoint eller nogen fastlåst
bedømmelsesmodel. Økonomiske besparelser forbliver også `HOLD`, medmindre
`--caption-cost-per-call-usd` angiver et eksplicit positivt estimat pr. kald;
scriptet opdigter aldrig nogen af resultaterne.

Hvert billede er begrænset til 4 MiB, alle rå billeder tilsammen til 23 MiB, og det
serialiserede brokersvar til 32 MiB. En privat midlertidig mappe fjernes
i `finally`. OmniRoute leveres ikke med FFmpeg og accepterer ikke en brugerdefineret
sti til en eksekverbar fil. Før billedbeskrivelserne genereres, udfører broen en konservativ visuel
deduplikering: hvert JPEG-billede reduceres til en 16×16-gråtonebuffer og
sammenlignes kun med det senest bevarede billede. Når det ønskede budget for billedbeskrivelser
er på mere end ét billede, leverer udtrækningen en
afgrænset pulje af kandidater på op til det dobbelte af budgettet og aldrig mere end 16 billeder.
Den ønskede grænse anvendes først efter deduplikering, og den første og sidste
valgte kandidat bevares under den afsluttende udtynding, når budgettet er på mindst
to. Den versionerede
`grayscale-16x16-mean-cells-v2`-politik bruger den største værdi af den gennemsnitlige luminansforskel og
andelen af miniaturebilledets celler, hvis normaliserede forskel er mindst 0.05.
Tærsklen for dubletter er konstanten 0.04, som er valgt af hensyn til forudsigelighed frem for
at være tilgængelig som en indstilling under kørsel. Dette sekundære
højkontrastsignal bevarer små bevægelser og ændringer i synlig tekst, som en
sammenligning baseret udelukkende på gennemsnittet kan skjule. Fejl i sammenligningen eller dekoderen lader billederne passere og bevarer
dækningen. Outputmetadata skelner mellem udtrukne kandidater, anvendte
billeder og frasorterede visuelle dubletter.

En eksplicit markeret videodel kan anmode om et kontaktark med tidsstempler.
Broen opbygger et JPEG-gitter med højst 4 kolonner og 16 billeder. Hver celle på 512 pixels får
sit kildetidsstempel indbrændt i et bundfelt med høj kontrast, mens de samme tidsstempler
bevares i tekstmetadata til efterfølgende sammenknytning og revision. Det samlede
JPEG-billede er fortsat begrænset til 32 MiB. Hvis `sharp` ikke kan afkode eller sammensætte gitteret,
falder broen tilbage til de enkelte JPEG-billeder; en afbrydelse fra klienten forplanter sig stadig
gennem kontaktarkoperationen.

Grundlaget for at tage løsningen i brug holdes bevidst adskilt fra den syntetiske
mikrobenchmark for billedsammensætning. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en
A/B-testramme med skemaversionering til rigtige OpenAI-kompatible visionsmodeller. Den måler
udbyderrapporterede tokens, samlet forløbstid fra start til slut (inklusive sammensætning af kontaktarket),
antal modelkald og bevarelse af fakta defineret i manifestet. Rå modelsvar
skrives ikke til rapporten; kun SHA-256-hashværdier og matchede fakta-id'er bevares.
Testrammen foretager ingen netværkskald eller betalte modelkald, medmindre `--execute-real` angives, og
`--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigureret. Uden
denne eksplicitte reelle kørsel forbliver dens maskinlæsbare konklusion `HOLD`; syntetiske
målinger af datamængde og antal kald er ikke i sig selv dokumentation for, at løsningen bør tages i brug.

Kaldere kan vedhæfte et valgfrit `transcript.cues`-array til en understøttet video-
del, når de allerede har tidsjusteret tekst. Hvert tekstsegment skal indeholde `text`, et
endeligt `start`/`end`-interval inden for den målte varighed og en tilladt
`source` (`client`, `embedded` eller `audio-bridge`); `confidence` har standardværdien
`1` og skal være mellem `0` og `1`. Helt identiske tekstsegmenter slås sammen.
OmniRoute starter aldrig transskription ud fra disse metadata: validerede tekstsegmenter
kopieres ind i beskrivelsesresultatet med kilde, konfidens og interval og
gengives som ikke-betroede observationer sammen med billedbeskrivelserne. Ugyldig
tekst, tekst uden for intervallet eller tekst uden kildeangivelse afvises frem for at blive blandet ind i
strømmen af billedbeskrivelser. Begge transskriptionskanaler i anmodningens indhold normaliserer den angivne
oprindelse til `client`, herunder selvangivne `embedded`- eller `audio-bridge`-
mærkater. Kun en serverkontrolleret adapter kan tildele disse betroede mærkater via
argumentet `trustedSource`, som kun er tilgængeligt fra kode; et JSON-felt i anmodningen kan ikke nå
dette argument. Transskriptionstekst forbliver ikke-betroet, medieafledt indhold,
uanset dens oprindelse, og må aldrig afgøre autorisation.

En avanceret kalder kan angive et `audioTranscript`-spor til den samme video;
det behandles som tekst leveret af klienten, ikke som bevis på serverbaseret transskription.
Fusionslaget behandler visuelle observationer og lydobservationer med
én fælles tidsfrist og ét fælles afbrydelsessignal, ordner dem på en fælles tidslinje, slår
helt identiske dubletter sammen og rapporterer et delvist resultat, når kun den ene side lykkes.
Et ugyldigt `audioTranscript` medfører dette delvise resultat — den visuelle
beskrivelse bevares, og lydgrenen registrerer en saneret fejlkode —
i stedet for at få hele videobehandlingen til at fejle. Tilgængelighed for hver gren, flaget for delvist resultat
og de sanerede fejlkoder bevares i beskrivelsesresultatet, i
sikkerhedsværnsmetadataene (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatcachens metadata og i broens
fusionstællere. Standardforløbet for Video Bridge kalder ikke tale-til-tekst
og downloader ikke en ekstra mediekopi; uden dette eksplicitte spor forbliver det
udelukkende videobaseret.

**Opbevaring af transskriptioner (#12150 P1).** Dette gælder automatisk, hver gang
Video Bridge (som selv kræver aktiv tilmelding) gengiver et transskriptionssegment — der er intet separat
flag for opbevaring. Når en anmodning gengiver et transskriptionssegment (en kalderangivet
`transcript` eller en sammenflettet `audioTranscript`), markerer sikkerhedsmekanismen den som
`videoBridgeObserved` og opretter en redigeret skyggekopi af videobeskrivelsen —
en identisk gengivelse, hvor hvert segments fritekstindhold er erstattet med
`[redacted-video-transcript]`, opbygget ved at erstatte det strukturerede segmentfelt,
før strengen samles (aldrig ved at parse den udfladede tekst, så intet segmentindhold
— hverken ondsindet eller almindeligt, herunder indhold med `]` såsom
`[inaudible]`/`[music]` — kan blive bevaret). Anmodningsindholdet, der gemmes i kaldloggen, erstatter
hver videoafledt tekstdel med denne redigerede skyggekopi, matchet ud fra
indholdslighed; `fullText`-ankeret genlæses fra det færdige sikkerhedspayload
før kaldet, så matchningen stadig lykkes, efter at senere sikkerhedsmekanismer i kæden (maskering af PII og
legitimationsoplysninger, prioriteter 10/95) har omskrevet beskrivelsesteksten på stedet, og
efter at injektion af systemprompt/overdragelse/hukommelse har omformet meddelelsesarrayet. Det
indhold, der sendes videre til modellen, er uændret. En observeret anmodning tilfører heller ikke
noget til varig Memory (både anmodnings- og svarafledt udtræk springes over),
så modellens eget svar ikke kan gengive transskriptionstekst i Memory.

**Rå videofelter (#12430).** Når broen er aktiveret, og indbygget videounderstøttelse er ukendt eller mangler, aktiverer definerede `transcript`/`audioTranscript`-felter også `videoBridgeObserved`, selv efter en mislykket beskrivelse eller en `maxVideos`-grænse. `null` og tomme strenge tæller med; manglende felter og metadata, der ikke vedrører video, gør ikke. Gemte kopier redigerer disse felter eller udelader anmodningen, og cacher/Memory omgås.

På disse fallback-stier bliver gyldige kalderangivne segmenter til understøttede `text`/`input_text`-
dele i stedet for ikke-standardiserede udbyderfelter. Begge spor, der er angivet i anmodningen,
forbliver ikke-betroede `client`-observationer med en udtrykkelig advarsel om, at videoen
ikke blev beskrevet, og at tidsstemplerne ikke blev verificeret mod mediet. De eksisterende
samlede grænser på 256 segmenter/64 KiB og grænserne pr. segment gælder for begge spor tilsammen;
tidsstempler skal ligge inden for brokerens loft på 600 sekunder og et eventuelt angivet
fokusvindue. Ugyldige spor kasseres og videresendes ikke som vilkårlig tekst; et gyldigt
søsterspor kan stadig bruges, medmindre deres samlede grænse overskrides. Null-/tomme
felter tilføjer ingen tekst. Denne fallback tilføjer hverken mediehentning eller transskription.
Udvidelsesfelter til transskription fjernes fra fallback-videoobjektet og dets
`video_url`/`source`-objekter. OpenAI-tilladelseslisten for overførselsformatet forbliver streng; videoobjekter med
ukendt indbygget understøttelse forbliver tilgængelige, og kendte mål, der kun understøtter tekst, beholder sikre markører.
Strukturerede redigerede skyggekopier beskytter den tilføjede transskriptionstekst, mens
den oprindelige anmodning, som kalderen ejer, forbliver uændret. Mål med indbygget understøttelse og
deaktiverede broer bevarer deres eksisterende omgåelsesadfærd.

Yderligere gemte kopier bruger det samme signal for observerede anmodninger. Det rå
øjebliksbillede af klientanmodningen før sikkerhedsmekanismerne, den afventende anmodning i hukommelsen og loggen over tidligt
afviste anmodninger erstatter transskriptionsfelter i videodele strukturelt;
strengprompter, der syntetiseres af pipeline-trin og kontekstoverdragelse, redigeres
ved lagringspunktet for det gemte anmodningsindhold. Den gemte `video_content_removed`-markør
får fortsættelse med `previous_response_id` til at afvise sikkert i stedet for at rekonstruere
tekst, der bevidst blev kasseret. Hvis en observeret anmodning mister sin
redigerede skyggekopi for en del før logning, eller hvis blot én af flere videoskyggekopier
ikke matcher efter senere ændringer af anmodningen, udelades det gemte anmodningsindhold
helt i stedet for at bevare en delvist redigeret transskription.

For en observeret anmodning kan et modelsvar citere en hvilken som helst del af
transskriptionen uden en struktureret segmentgrænse. Dets gemte `responseBody` i
kaldloggen erstattes derfor med en udeladelsesmarkør; den detaljerede
pipeline-artefakt (som kan indeholde indhold fra udbyder/klient og stream-chunks)
gemmes ikke. Semantiske cacher, idempotenscacher og cacher til genafspilning af ræsonnement springer
læsning og skrivning over for den pågældende anmodning. Anmodningen til udbyderen og det klientsynlige
svar forbliver uændrede. Tidlige keepalive-bytes tømmes fra den midlertidige
buffer, når den detaljerede artefakt udelades. Kiros advarsel om ugyldigt EventStream-format
rapporterer kun antallet af payload-bytes, aldrig indholdet eller JSON-
parserens rå fejl.
Dette indebærer ikke, at al uvedkommende diagnostik fra udbydere/plugins er blevet
gennemgået; den bredere gennemgang af lagringspunkter spores i #11658.

Den interne `/api/modality-bridge/video/drilldown`-livscyklus er et separat,
loopback-/tokenautentificeret cachelag. Hver operation kræver også et
kanonisk, uigennemsigtigt principal-ID. Før en produktionskalder aktiveres, skal den
udlede dette ID fra den autentificerede tenant og må aldrig videresende en
klientvalgt værdi. Cachenøgler knytter denne principal til kanoniske sessions- og
videoreference-ID'er, gemmer kun deres SHA-256-afledte nøgler og afgrænser både læsning
og sletning til samme principal. Cachen gemmer højst 16 afledte JPEG-
billeder pr. post, lader dem udløbe efter ti minutter og understøtter afgrænsede
`start`/`end`-læsninger eller eksplicit sletning af sessioner.

Hver principal er begrænset til 16 poster og 64 MiB kanoniske JPEG-data. Disse
grænser er uafhængige af det globale loft på 64 poster/256 MiB: pres på en principals kvote
fjerner kun den pågældende principals mindst nyligt anvendte poster, før global
LRU-fjernelse overvejes. Udløbne poster fjernes fra både principalens og den
globale opgørelse ved cacheaktivitet, mens annullering og valideringsfejl ikke
gemmer en delvis erstatning.

Cachen afviser ikke-kanonisk Base64, overskydende padding, medier, der ikke er JPEG, fejlformede eller
afkortede JPEG-filer samt JPEG-filer, der udløser en advarsel under en ressourcebegrænset `sharp`-afkodning
af hele billedet. Den genkoder hvert accepteret billede som en kanonisk JPEG, udleder bredde og højde
fra de afkodede bytes i stedet for at stole på felter fra kalderen og kasserer eventuelle efterfølgende
polyglot-bytes i stedet for at bevare dem. Kun den ressourcebegrænsede, kanoniske, komprimerede buffer
tæller med i begge kvoter. JSON-grænsen for overførsel inkluderer Base64-overhead for loftet på 32 MiB
for afkodet input. Hver
gemt afledning registrerer sit validerede JPEG-format og sin opløsning, samplingpolitik,
afledningsversion, oprettelsestidspunkt, serverberegnede indholdshash og hashede reference til
forældreindholdet samt den betroede kalders hash af forældreindholdet. Der kontrolleres for annullering
mellem de asynkrone afkodnings- og hashingfaser før den atomiske lagring i cachen.

Denne del forbinder endnu ikke en produktionsproducent med ruten og giver ikke
mulighed for valg mellem varianter i flere opløsninger. Den transparente anmodningssti i Video Bridge
medfører derfor ikke ekstra arbejde, mens afledning af en tenantbundet sikkerhedsprincipal og
den fulde FU-08-livscyklus for flere opløsninger fortsat er udtrykkeligt opfølgende arbejde frem for
at være dokumenteret som færdig funktionalitet.

Frames beskrives sekventielt med den konfigurerede Video-model. En tom
Video-tilsidesættelse arver Vision-indstillingen; hvis begge er tomme, vælger Visions
automatiske router den effektive model med visionsunderstøttelse. Vellykkede beskrivelser
erstatter den oprindelige del med et stabilt `[Video description:`-præfiks, som også
markerer teksten som en ikke-betroet observation afledt af medier og fortæller efterfølgende
modeller, at de ikke må følge instruktioner, der findes i medierne. Cachenøgler til framebeskrivelser
omfatter JPEG-bytes, prompt, tidsstempel og den effektive model; kun vellykkede
beskrivelser caches. Cacheposter bevarer den faktiske model, der producerede den vellykkede beskrivelse,
herunder en eventuel fallback-model; broen rapporterer `mixed`, når forskellige frames
blev produceret af forskellige modeller. Et cachehit genbruger denne producentidentitet
i stedet for at ommærke den som den ønskede routingplan. Resultatcachen for hele videoer
har en nøgle baseret på alle input, der ændrer outputtet — prompt, effektiv
model, samplingpolitik, antal frames, semantisk analysetilstand, SHA-256-
fingeraftrykket af det normaliserede fokushint, fokusvindue, `transcript`,
`audioTranscript` og kontaktarkflaget — så en ændring af en hvilken som helst af disse
dimensioner giver et cachemiss, aldrig genbrug af forældede data. Den visuelle deduplikeringspolitiks
version, tærskel og begrænsede antal kandidatframes indgår også eksplicit i
resultatcachens nøgle og metadata; en politikændring kan derfor ikke genbruge en forældet
beskrivelse af hele videoen. Metadata i resultatcache v4 bevarer tilstanden og
fingeraftrykket, aldrig brugerens rå opgave. Sikkerhedsværnets metadata rapporterer både den
ønskede og den effektive analysetilstand; en ønsket `focused`-tilstand uden
brugbar brugertekst rapporteres som reelt værende `full`.

Sikkerhedsværnet udtrækker alle understøttede videodele, men beskriver højst
`modalityBridgeVideoMaxVideos`. For en destination, der beviseligt har
`supportsVideo === false`, bliver fejlede videoer og videoer over grænsen til eksplicitte, sikre
tekstmarkører, så ingen rå video bevares. Når kapabiliteten er ukendt, bevarer disse dele
deres videobærer; enhver fallback-transskription følger den begrænsede tekstkonvertering
ovenfor. Destinationer med `supportsVideo === true` omgår broen.
Klientanmodningens afbrydelsessignal videresendes gennem download, brokerkø,
underprocesser og beskrivelseskald; afbrydelser stopper mellem videoer og tillader aldrig
rå medier som følge af fejl.

Runtimeindstillinger gemmes i databasen og valideres med Zod:

| Nøgle                               | Standard    | Interval / adfærd                                                                                               |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfri runtime, kræver aktiv tilmelding                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske beskrivelser; `focused` bruger begrænset, ikke-betroet kontekst fra den seneste bruger |
| `modalityBridgeVideoModel`          | `""`        | Arv Vision Bridge-modellen                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` eller proportional `segment_aware`; ved detektorfejl bruges `uniform` som fallback     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Ældre, gemte Video-timeoutværdier over 120 sekunder begrænses til
brokerens tidsfrist; nye indstillingsskrivninger over denne grænse afvises.
`GET /api/modality-bridge/video/runtime` kræver betroet, stemplet loopback-
lokalitet før godkendelse eller runtimeundersøgelse og kræver derefter administrations-
godkendelse. Det returnerer kun `available`, rensede FFmpeg/ffprobe-versioner og en fast
årsag, når runtimen ikke er tilgængelig. Det interne udtræksendpoint er ikke
et offentligt upload-API: en fuld kø returnerer `503` plus `Retry-After`, en afbrudt
klientforbindelse returnerer `499`, og brokerens faste tidsfrist returnerer `504`. Konverterede svar tilføjer
`video->text;model=<visionModel>;parts=<videos>` til den centrale
`x-omniroute-modality-bridge`-header uden at fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kører i **begge** trin.

- **`preCall`** kloner payloaden, gennemgår `system`, `messages`, `input` og
  `prompt` (herunder elementer, der blot er strenge) og anvender `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på strengfelterne `content`/`text`. Når
  `PII_REDACTION_ENABLED=true`, maskeres registrerede personoplysninger i den udgående
  payload. Dette er uafhængigt af `INPUT_SANITIZER_MODE` (som kun styrer
  politikken for prompt-injektion). Når maskering er slået fra, registrerer kaldet antallet
  af detektioner uden at omskrive indholdet.
- **`postCall`** dybdekloner svaret og kører `sanitizePIIResponse()` samt
  maskeringsfunktionen til Responses-API-formatet (`maskResponsesOutput` — dækker
  `output_text` og `output[].content[].text`). Hvis der foretages maskering,
  erstatter det ændrede svar originalen.

Sikkerhedsværnet blokerer aldrig; det tilføjer kun annoteringer (`meta.detections`,
`meta.redacted`) eller omskriver.

#### Valg efter type, brugerdefinerede mønstre og detektionstællere

**Kontrolpanel → Indstillinger → Sikkerhed → PII-maskering** vælger, _hvad_ der maskeres. Det
slår ikke maskering til: det styres stadig af `PII_REDACTION_ENABLED` (anmodning) og
`PII_RESPONSE_SANITIZATION` (svar + SSE), som begge er slået fra som standard.

- **Valg efter type** — de indbyggede id'er er angivet i
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Hvis intet er angivet, medtages alle
  typer (adfærden fra før denne indstilling fandtes). Anmodningsmotorens
  `ssn_us`-mønster knyttes til `ssn`. Skabelonerne (Minimal, Standard, Finansiel,
  Brasiliansk, USA, Fuld) udfylder kun afkrydsningsfelterne i brugergrænsefladen.
- **Brugerdefinerede mønstre** — op til 20 regulære udtryk eller jokertegnsmønstre (`*` = op til 64
  tegn, der ikke er blanktegn, `?` = ét). Match erstattes med `[CUSTOM_REDACTED]`.
  Hvert mønster behandles af `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): højst 500 tegn, flag begrænset
  til `g i m s u`, skal kunne kompileres, skal bestå `safe-regex` (katastrofal
  backtracking) og må ikke matche en tom streng eller en maskeringspladsholder.
  Et mønster, der ikke består, afvises ved lagring og test, og en gemt række,
  der ikke består, springes over under kørsel i stedet for at blive kompileret. Brugerdefinerede mønstre
  køres kun, mens maskering er slået til.
- **Detektionstællere** — antal pr. type (aldrig de matchede værdier), som opbevares i
  hukommelsen og nulstilles ved genstart (`src/lib/pii/piiDetectionStats.ts`). De
  øges kun, mens maskering er slået til.

Indstillingerne findes i tabellen `key_value` (navnerum `pii_settings`,
`src/lib/db/piiSettings.ts`) og læses via en cache med en levetid på 1 s. API:

| Metode | Sti                      | Formål                                                          |
| ------ | ------------------------ | --------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Flagstatus, `enabledTypes`, `customPatterns`, detektionstællere |
| `PUT`  | `/api/settings/pii`      | Erstat `enabledTypes` (`null` = alle) og/eller `customPatterns` |
| `POST` | `/api/settings/pii/test` | Prøvekør ét mønster mod en prøve på højst 8 KB; intet gemmes    |

Alle tre kræver administratorautentificering og validerer indholdet med Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-injektion (`promptInjection.ts`)

Registrerer angrebsstrukturer i brugerleveret indhold og håndhæver den
konfigurerede politik. Adfærden styres af miljøvariabler og konstruktørens
indstillinger:

| Indstilling       | Miljøvariabel                                                                                                | Standard | Virkning                                                                                                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiveret         | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`   | Når værdien er `false`, afsluttes sikkerhedsværnet straks.                                                                                                                                                                           |
| Tilstand          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`   | Politik for injektion: `block`, `warn` eller `log`. (`redact` accepteres af hensyn til bagudkompatibilitet, men fjerner **ikke** injektionstekst; omskrivning af personoplysninger i anmodninger styres af `PII_REDACTION_ENABLED`.) |
| Blokeringstærskel | Indstillingen `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mindste alvorlighedsgrad, der kræves for blokering. Middel alvorlighedsgrad observeres kun som standard.                                                                                                                             |

**Prioritetsrækkefølge for tilstand** (`getMode`): kalderens `options.mode` →
`INJECTION_GUARD_MODE` **tilsidesættelse via funktionsflag i databasen** (Kontrolpanel → Indstillinger →
Funktionsflag) → miljøvariablen `INJECTION_GUARD_MODE` → miljøvariablen `INPUT_SANITIZER_MODE` →
`warn`. En tilsidesættelse i kontrolpanelet har derfor forrang frem for miljøvariablerne, så brugergrænsefladen til
funktionsflag styrer det aktive sikkerhedsværn direkte (uden genstart). Databaselæsningen er fejlsikker:
hvis den fejler, falder sikkerhedsværnet tilbage til den miljøvariabelbaserede adfærd, og når ingen
tilsidesættelse er angivet, er adfærden identisk med den, der udelukkende baseres på miljøvariabler.

Detektionskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (fælles sæt af detektorer,
   som bruges andre steder i pipelinen).
2. Indbyggede `DEFAULT_GUARD_PATTERNS` (i øjeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorlighedsgraden `high`).
3. Valgfrie `customPatterns`, som overføres via konstruktørens indstillinger (strenge, regulære udtryk
   eller poster af typen `{ name, pattern, severity }`).

Når `mode === "block"` **og** mindst én detektion opfylder alvorlighedsgrænsen,
returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I tilstandene `warn`/`log` logger sikkerhedsmekanismen, men
tillader kaldet. Den fælles hjælpefunktion `evaluatePromptInjection()` eksporteres også
til kaldende kode, der skal evaluere prompts uden at gå gennem registret.

**Scanningsgrænse (v3.8.20):** detektoren undersøger kun de **første 16 KB** af
den sammenkædede prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` udfører `slice(0, MAX_INJECTION_SCAN_BYTES)`, før
mønsterløkken køres. Injektionsdirektiver er placeret nær starten af et input, så dette
begrænser CPU-forbrug og garbage collection ved regex-behandling af payloads på flere hundrede KB uden at svække detektionen (jf.
#3932, #4041).

### Maskering af legitimationsoplysninger (`credentialMasker.ts`)

Kører på **begge** trin, sidst i standardkæden (prioritet `95`). Maskerer
velkendte mønstre for API-nøgler / hemmelige tokens i den udgående payload (beskedindhold,
argumenter til værktøjskald, værktøjsresultater) **og** udbyderens svar, så
legitimationsoplysninger, der indsættes i en prompt (eller gengives i et værktøjsresultat), ikke lækkes
til den eksterne udbyder eller tilbage til klienten.

- **Kun ved aktivt tilvalg**, samme konvention som maskering af personoplysninger (beslægtet med fast regel #20):
  deaktiveret, medmindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når funktionen er slået fra, gør sikkerhedsmekanismen intet —
  den blokerer aldrig og omskriver aldrig.
- `redactCredentials()` gennemløber hele payload-/svartræet (`walkValue()`,
  sikret mod prototypeforurening og cyklusser via `WeakSet`) og erstatter fund med
  en `[REDACTED:<type>]`-pladsholder og kloner kun de grene, der faktisk
  er ændret.
- `CREDENTIAL_PATTERNS` dækker nøgler til LLM-udbydere (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøgler (Stripe, Square), cloudnøgler
  (AWS-adgangsnøgle, Twilio, SendGrid, Mailgun), private nøgler / JWT'er,
  forbindelsesstrenge med legitimationsoplysninger (`mongodb://user:pass@...` osv.) og
  et generisk mønster for headerværdier i `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Headerlignende nøgler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskeres strukturelt (kun værdien, mens skemapræfikser som
  `Bearer `/`Basic ` bevares) i stedet for via det generiske tekst-regex.
- Sikkerhedsmekanismen blokerer aldrig; den omskriver kun (`modifiedPayload` /
  `modifiedResponse`) og tilføjer metadata (`meta.credentialsRedacted`, `meta.count`).

Regressionstest: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true afbryder kæden
  message?: string; // vises ved blokering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres af preCall for at omskrive anmodningen
  modifiedResponse?: TValue; // returneres af postCall for at omskrive svaret
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

En guardrail signalerer "ingen ændring" ved at returnere enten `void`, `{}` eller
`{ block: false }`. Returnering af en `modifiedPayload`/`modifiedResponse` erstatter
den værdi, der føres gennem kæden til efterfølgende guardrails.
`signal?: AbortSignal` fører kalderens livscyklus ind i guardrails. Afbrydelse af en anmodning er den tilsigtede fail-open-undtagelse: mediebroer stopper arbejdet og rydder op uden at gendanne rå medier til et mål, som vides ikke at understøtte dem.

## Register (`registry.ts`)

Singleton-instansen `guardrailRegistry` stiller følgende til rådighed:

- `register(guardrail)` — tilføjer en guardrail (eller erstatter den ud fra det normaliserede navn) og
  sorterer igen efter stigende `priority`.
- `clear()` / `list()` — administrative hjælpefunktioner.
- `runPreCallHooks(payload, context)` — gennemløber aktive guardrails, fører
  payloaden videre via `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme forløb på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — rydder tilstanden og
  registrerer eventuelt standarderne igen for at sikre ren testisolering.

Begge kørselsfunktioner returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
hvor `results` er et array af `GuardrailExecutionResult`-poster, der indeholder
felterne `blocked`, `skipped`, `modified`, `error` og `meta` for hver guardrail,
hvilket er nyttigt til sporing.

### Deaktivering af guardrails pr. anmodning

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
liste uden dubletter over navne på guardrails, der skal springes over for den aktuelle
anmodning. Der er fem kanaler, som læses i denne rækkefølge og sammenflettes til én liste
(første forekomst bevares ved fjernelse af dubletter):

1. `apiKeyInfo.disabledGuardrails`
2. Anmodningens body `disabledGuardrails` (på øverste niveau)
3. Anmodningens body `metadata.disabledGuardrails` (kun når `metadata` er et objekt)
4. Headeren `x-omniroute-disabled-guardrails`
5. Den ældre header `x-disabled-guardrails`

Alle fem kanaler sammenflettes, inklusive de to headere: Hvis både
`x-omniroute-disabled-guardrails` og `x-disabled-guardrails` sendes, springes alle guardrails i
begge lister over, og en tom moderne header skjuler ikke længere den ældre
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), rettet i
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Værdier kan være arrays af strenge eller en kommasepareret streng; indledende og efterfølgende mellemrum fjernes fra navnene,
som normaliseres til kebab-case med små bogstaver (`pii_masker` → `pii-masker`), og tomme
elementer fjernes. Resultatet sendes via `context.disabledGuardrails`
til registret, som springer matchende guardrails over (`skipped: true` i `results`).

Deaktiveringslisten påvirker kun **registret**. Tilstanden `block` for prompt-injektion er
en obligatorisk sikkerhedsgrænse: Middleware til beskyttelse mod prompt-injektion
(`src/middleware/promptInjectionGuard.ts`) kalder `evaluatePromptInjection()`
uden nogen deaktiveringsliste, som kalderen kan styre (det uvirksomme kald til
`resolveDisabledGuardrails({ body })`, som den tidligere foretog, blev fjernet i
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), så en anmodning,
der deaktiverer `prompt-injection`, bliver stadig afvist i tilstanden `block`. Dette er
tilsigtet. Deaktiveringskanalerne styres af kalderen (anmodningens body,
metadata, headere), og en kalder må ikke kunne slå en sikkerhedskontrol fra,
som operatøren har aktiveret
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Sammenfletningen af headere fra
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ændrer kun, hvilke guardrails i registret der springes over; den lader ikke en klient
omgå middlewaren. Obligatoriske guardrail-politikker pr. nøgle og pr. gruppe
følges i v4-RFC'en [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Se [Dækning og begrænsninger](#coverage-and-limits).

## Udførelsesrækkefølge

For hver anmodning, der går gennem `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts` (ruterne i chatfamilien, der er angivet under
[Dækning og begrænsninger](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` opbygger listen over sikkerhedsværn, der skal springes over, ud fra API-nøglen, anmodningens indhold
   og headere.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kører sikkerhedsværn i stigende
   prioritetsrækkefølge:
   - Deaktiverede sikkerhedsværn registreres som `skipped`.
   - Hvert sikkerhedsværns `preCall` kan omskrive nyttelasten via `modifiedPayload`.
   - Den første `block: true` afbryder kæden, og handleren returnerer
     et afvisningssvar fra sikkerhedsværnet.
3. Den (eventuelt omskrevne) nyttelast går videre til kombinationsrouting og videresendelse
   til upstream.
4. **Kun uden streaming:** Når svaret er samlet,
   kører `guardrailRegistry.runPostCallHooks(...)` den samme kæde på
   svaret. `block: true` her kasserer upstream-svaret og returnerer HTTP 400. Streamede svar springer dette trin helt over.

Sikkerhedsværn, der kaster undtagelser, registreres med `error: <message>` og logges via
`logger.warn`, men kæden fortsætter — systemet tillader altså fortsat behandling ved fejl som tilsigtet.

## Dækning og begrænsninger

Registret over sikkerhedsværn er kun integreret i chatpipelinen. Disse begrænsninger er
fastlagt af `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` og
`tests/unit/guardrail-pipeline-characterization.test.ts`; opdater disse tests
bevidst, når adfærden ændres.

### Hvor hooks kører

| Hook / kontrol                                   | Kører på                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                | Anmodninger, der håndteres af `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (og `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` samt Telegram-chatproxyen. Også dashboardets testendepunkt `/api/guardrails/test`. En blokering før kaldet returnerer HTTP 400. |
| `runPostCallHooks`                               | Kun chatsvar **uden streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamede svar når aldrig hertil.                                                                                                                                                                                                                                                                                                                    |
| Streaming af PII                                 | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), koblet ind i `streamingPipeline.ts`, når `PII_RESPONSE_SANITIZATION` er slået til. Det er ikke et sikkerhedsværn, så deaktiveringskanalerne påvirker det ikke.                                                                                                                                                                                                                 |
| Middleware til beskyttelse mod injektion (ældre) | Alle `/v1`-ruter med prompts, inklusive chatfamilien (se [rutedækning](#injection-guard-route-coverage--red-team-phase-8--block-d)). Kun promptinjektion.                                                                                                                                                                                                                                                                                    |

### Hvad der ikke er dækket

- **Medie-, embedding- og dataruter** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) når aldrig registret. Ingen
  PII-maskering, maskering af legitimationsoplysninger eller modalitetsbro kører der. Deres eneste
  kontrol er den ældre middleware til beskyttelse mod injektion.
- **Streamede svar** får ingen sikkerhedsværn efter kaldet: ingen `pii-masker` eller
  `credential-masker` efter kaldet og ingen blokering efter kaldet. Kun PII-transformationen
  til streaming anvendes (når `PII_RESPONSE_SANITIZATION` er slået til). Legitimationsoplysninger,
  der gentages i et streamet svar, bliver ikke sløret.
- **Deaktiveringskanaler kontra middleware (tilsigtet):** Middlewaren vurderer
  promptinjektion med sit eget kald til `evaluatePromptInjection()` uden
  at videregive nogen kalderstyret deaktiveringsliste. Tilstanden `block` er en obligatorisk
  grænse, som kalderstyret deaktivering ikke kan omgå, heller ikke på ruter i chatfamilien
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Deaktivering af
  `prompt-injection` springer kun sikkerhedsværnet i registret over.

### Hvad der ser et svar før behandling efter kaldet

I forløbet uden streaming er rækkefølgen: hukommelsesudtræk → indbygget værktøjsudførelse
→ sikkerhedsværn efter kaldet → afslutning ved blokering efter kaldet → lagring i semantisk cache.

- **Hukommelsesudtrækning** og **værktøjsudførelse** ser svaret, før sikkerhedsmekanismerne
  efter kaldet kan omskrive eller blokere det. Siden
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) kører
  hukommelsesudtrækningen den udtrukne tekst gennem `sanitizePII`, når
  `PII_RESPONSE_SANITIZATION` er slået til (både med og uden streaming), men et
  svar, som senere blokeres efter kaldet, er stadig blevet gjort tilgængeligt for hukommelsen og
  værktøjerne.
- **Den semantiske cache** gemmer svaret efter sikkerhedskontrollen efter kaldet, så den gemmer det
  omskrevne svar, og et blokeret svar gemmes aldrig i cachen. Cacheposter
  identificeres med en nøgle pr. API-nøgle.

## Konfiguration

Miljøvariabler, der læses af de indbyggede sikkerhedsmekanismer:

| Variabel                              | Bruges af                | Effekt                                                                                                                     |
| ------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Angiv `false` for at deaktivere detektion helt.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Politik for injektion: `warn`, `block` eller `log`. Den ældre værdi `redact` omskriver ikke injektionstekst.               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Tilstand for injektionsbeskyttelsen; også et funktionsflag i databasen, som **tilsidesætter** miljøvariablerne (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Laveste alvorlighedsgrad, som `MODE=block` afviser: `high` (standard), `medium` eller `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Ældre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Når værdien er `true`, maskeres personhenførbare oplysninger i anmodninger (uafhængigt af injektionstilstanden).           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedstrøms) | Styrer maskeringens adfærd på svarsiden.                                                                                   |

Sikkerhedsmekanismerne i Modality Bridge læser kørselskonfigurationen fra det databasebaserede
indstillingslager (`getSettings()`), ikke fra miljøvariabler. De primære nøgler for Vision er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De ældre
`visionBridge*`-nøgler accepteres kun som den dokumenterede reserve ved læsning i én cyklus;
skrivninger fra kontrolpanelet bruger de primære nøgler. Standardværdierne og den funktion, der håndterer reserveløsningen,
findes i `src/shared/constants/modalityBridgeDefaults.ts`, mens de ældre
konstanter bevares i `src/shared/constants/visionBridgeDefaults.ts`.

Audio bruger `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips` samt de fælles
`modalityBridgeCache*`-indstillinger. Audio har ingen reserveløsning med ældre nøgler, fordi disse
nøgler blev introduceret med Modality Bridge-skemaet.

Video bruger `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout` samt de fælles `modalityBridgeCache*`-indstillinger.
Det er deaktiveret som standard, fordi FFmpeg/ffprobe er valgfrie driftsmæssige
afhængigheder, og generering af billedbeskrivelser til videobilleder øger svartiden og modelomkostningerne.

## Brugerdefinerede sikkerhedsværn

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

Trin:

1. Opret `src/lib/guardrails/myGuardrail.ts`, som nedarver fra `BaseGuardrail`.
2. Implementér `preCall` og/eller `postCall`.
3. Registrér enten ved import (via `registerDefaultGuardrails`), eller
   kald `guardrailRegistry.register(...)` under kørsel — registret erstatter
   ethvert tidligere sikkerhedsværn med det samme normaliserede navn.
4. Tilføj tests under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Brug `resetGuardrailsForTests()` mellem tests for at starte fra en kendt tilstand.
Angiv `{ registerDefaults: false }` for at starte med et tomt register og
kun registrere de sikkerhedsværn, der testes. Vision Bridge understøtter afhængighedsinjektion
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stiller tilsvarende
udvidelsespunkter til rådighed for indstillinger, funktionalitet, valg af STT-model, kontrol af
legitimationsoplysninger og transskription. Tests kan derfor afprøve begge forløb uden adgang til en database
eller et netværk.

## Se også

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — fælles detektor, der bruges til
  prompt-injektion og maskering af personhenførbare oplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standardindstillinger for Vision Bridge og
  liste over modeller med tvungen bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — fælles kørselsstandarder for Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — uafhængigt lag (kredsløbsafbryder, nedkølingsperioder)
- `docs/reference/ENVIRONMENT.md` — komplet reference for miljøvariabler

## Rutedækning for injektionsværnet og red-team-test (fase 8 · blok D)

Injektionsværnet (`createInjectionGuard` / `withInjectionGuard`) dækker alle ruter,
der accepterer brugerprompter. Det respekterer `INJECTION_GUARD_MODE` (standard `warn` = kun logning;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardtilstand |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Tekstudtræk (`extractMessageContents`) dækker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-test (hver nat, `nightly-llm-security.yml`):** promptfoo validerer, at hver rute blokerer
OWASP-LLM-korpusset med `INJECTION_GUARD_MODE=block`; garak kører sonderinger (springes over uden en hemmelighed).
`moderations` er inkluderet for at sikre ensartethed. Blokeringstilstand er en obligatorisk grænse: `evaluatePromptInjection()`
ignorerer den anmodningsspecifikke deaktiveringsliste, som middlewaren sender til den, så `disabledGuardrails`
fritager **ikke** en rute fra den ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Den natlige arbejdsgang (`.github/workflows/nightly-llm-security.yml`, cron + manuel
start) har to jobs:

- **`promptfoo-guard` (blokerende)** — kører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert angrebsscenarie (f.eks. "ignorér alle
  tidligere instruktioner…", jailbreaks i DAN-stil) kontrollerer, at svaret indeholder
  `error.code === "SECURITY_001"`, dvs. at værnet faktisk afviste anmodningen.
- **`garak` (vejledende)** — kører garak `--probes promptinject,dan,leakreplay`
  mod en lokal OmniRoute-instans (`http://localhost:20128/v1`). Kræver en
  udbyderhemmelighed (`PROMPTFOO_PROVIDER_KEY`); springes uproblematisk over, hvis den mangler, og har suffikset
  `|| true`, så det rapporterer uden at få CI til at fejle.

Dækningen for værnets hjælpefunktioner (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle `/v1`-ruter, der modtager prompter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` af
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.

# Guardrails (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sannhetskilde:** `src/lib/guardrails/`
> **Sist oppdatert:** 2026-10-17 — v3.8.52 (lagt til [Dekning og grenser](#coverage-and-limits):
> hvilke ruter og svarbaner hookene når, de sammenslåtte deaktiveringshodene (#16412), injeksjonsblokkeringsmodus
> som en obligatorisk grense (#16413), og hva som ser et svar før post-kall)

Guardrails håndhever sikkerhet, retningslinjer og innholdstransformasjoner ved grensen
mellom OmniRoute og oppstrømsleverandører. Hvert guardrail kan inspisere (og
valgfritt avvise, transformere eller annotere) forespørselsnyttelast (`preCall`) og
oppstrømssvar (`postCall`).

Systemet er **fail-open**: hvis et guardrail kaster en feil under kjøring, logger registeret
feilen og fortsetter med neste guardrail i stedet for å la forespørselen feile.
Blokkering er en eksplisitt beslutning (`block: true`), aldri et uhell.
Det ene unntaket er en avbrutt forespørsel: når oppkallerens `signal` blir avbrutt,
avviser et feilende guardrail hook-kjøringen i stedet for å bli hoppet over.

Hookene kjører **ikke** på hver eneste rute eller hvert eneste svar. Les
[Dekning og grenser](#coverage-and-limits) før du stoler på et guardrail som en
sikkerhetskontroll.

## Innebygde guardrails

Registeret laster automatisk inn seks guardrails i prioriteringsrekkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Fase(r)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstall kjører **først**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Grunnmodellen GLM 5.3 og `glm-5.3-{low,high,max}` har eksplisitt
`supportsVision:false`-register-/spesifikasjonsmetadata. GLM 5.3 Flash-variantene
forblir modeller med innebygd synstøtte (native-vision). Claude Codes `/v1/messages`-rute går inn i den
delte `handleChat`-pre-call-guardrail-kjeden **før** Claude-til-OpenAI-oversettelsen;
nestede `Read`-verktøyresultatbilder må beskrives eller håndteres før den oversettelsen løfter dem
inn i OpenAI `image_url`-innhold (#17069).

Avskjærer bilderelevante forespørsler rettet mot **modeller uten synstøtte** og enten
omdirigerer hele forespørselen til en synskapabel modell eller erstatter bildedelene
med tekstbeskrivelser produsert av en konfigurerbar synsmodell før oppstrømskall.
Dette gjør at leverandører som kun støtter tekst, transparent kan håndtere
multimodale nyttelaster.

Flyt:

1. Hopp over hvis målmodellen allerede støtter syn (med mindre den vises i listen over
   tvungne broer `isVisionBridgeForcedModel`).
2. Ekstraher bildedeler via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **samlede mediedetektoren**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den enkle sannhetskilden
   delt med kombokompatibilitetsfilteret.
   Ekstraksjonen er hvitelistet til formene som `replaceImageParts` kan spleise
   tilbake (ekstraksjons- og erstatningskontrakten): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, og Responses
   API `input_image`. Matchende bilder nestet inne i Claude Code
   `tool_result.content` og verktøyutdata fra Responses blir også ekstrahert og erstattet på sine
   opprinnelige baner; former som kun fungerer som indikatorer, er kombofiltermateriale
   og blir ikke ekstrahert.
   Hoppes over hvis ingen blir funnet.
3. Løs opp kjøretidskonfigurasjon via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye `modalityBridge*`
   innstillingsnøkler vinner; eldre `visionBridge*` nøkler forblir en **fallback for én syklus**
   (tilbakerullingsvindu). Hoppes over før enhver mediegjennomgang når broen er deaktivert.
4. Modusvelgeren (`modalityBridgeVisionMode`, se tabell nedenfor) avgjør
   omdirigering vs. beskrivelse. Omdirigering returnerer `modifiedPayload` med bare
   `model` byttet ut, i tillegg til meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesbane: sett et tak på bilder ved `maxImages`, sett sammen den oppgavebevisste prompten,
   sjekk beskrivelsesbufferen, kall synsmodellen **parallelt**
   (`Promise.allSettled`), og injiser `[Image N]: <description>`-tekstdeler i
   stedet. En mislykket beskrivelse gir `null`: råbildet bevares for
   ukjente / synskapable mål (#4012), men et **bekreftet tekst-eneste direktemål**
   eller en null-syns-kombo får en eksplisitt
   `(unavailable — no vision-capable provider connected)`-tekststubbe for
   hvert ubeskrevne bilde, inkludert delvise feil og bilder utover
   taket for beskrivelseskall (#17069). Den eksisterende fallback-løsningen for all-failed-kombobeskrivelse
   forblir på plass (#8430).
6. Returner `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusvelger (`modalityBridgeVisionMode`)

| Modus      | Standard | Oppførsel                                                                                                                                                                                                                                                                                                    |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Arv-heuristikk, urørt (#6640/#7204): modeller som ikke er kombinasjoner / `auto/`-modeller omdirigeres til den beste visjonsmodellen med mindre den opprinnelige modellen allerede har brukbare legitimasjoner (beskriv i så fall); kombinasjonsmål beskriver alltid.                                        |
| `describe` |          | Beskriv alltid — omdirigeringsblokken hoppes helt over; brukerens valgte modell svarer alltid.                                                                                                                                                                                                               |
| `reroute`  |          | Tving omdirigering: sikringen for modell med beholdt legitimasjon omgås. Sikringen for omdirigerings-**mållets** legitimasjon gjelder fortsatt — når det ikke finnes noen brukbare visjonsmål, blokkerer broen med en tydelig feilmelding i stedet for å beskrive eller sende råbilder til et rent tekstmål. |

Tvingte moduser kortslutter **før** auto-heuristikken kjører; `auto`-oppførselen er byte-identisk med sikkerhetsmekanismen før PR-1.

#### API-nøkkelomfang (`visionBridgeKeyScope.ts`)

Når anroperens API-nøkkel begrenser `allowedConnections`, kvotepooler (`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), velger broen bare omdirigerings- og beskrivelsesmodeller som nøkkelen kan bruke, på tilkoblinger som nøkkelen kan bruke. Beskrivelseskallet går deretter alltid gjennom OmniRoute-selvsløyfen med `x-omniroute-self-loop-key-id`-headeren, slik at den mottakende chat-forespørselen håndhever den nøkkelens tilkoblings- og modellretningslinjer på nytt. `enforceApiKeyPolicy()` respekterer denne headeren bare sammen med selvsløyfebæreren, slik at den bare kan begrense tilgangen, og en ID som ikke løses opp, avvises.

Hvis ingen visjonsmodell er tillatt for nøkkelen, avviser et **bekreftet rent tekstmål** bildeforespørselen lokalt med en tydelig HTTP 400 i stedet for å videresende bildebytes til en ukvalifisert oppstrømskomponent (#17069). For mål med ukjent eller innebygd visjonskapasitet beholder beskrivelsesveien sin tidligere feil-åpen-oppførsel (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Forespørsler uten nøkkel, og nøkler uten disse begrensningene, oppfører seg nøyaktig som før.

#### Oppgavebevisst beskrivelses-prompt (`modalityBridgeVisionTaskAware`)

Standard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) føyer teksten til den **siste brukermeldingen** (avkortet til 500 tegn) til den grunnleggende beskrivelses-prompten, noe som styrer beskrivelsen mot det brukeren faktisk spurte om (codex-vision-proxy-mønsteret) og ber visjonsmodellen om å transkribere synlig tekst. Når flagget er av – eller det ikke er noen brukertekst – brukes standard-prompten uendret.

Beskrivelses-selvsløyfens egen OpenAI-kompatible forespørsel (`callVisionModelSingle()` i `visionBridgeHelpers.ts`) ber alltid om `image_url.detail: "high"` — betingelsesløst, for hver anroper/tilbyder, ikke styrt av noen klientsignal. Sampling med lav detaljgrad forringer OCR-nøyaktigheten for nøyaktig den teksttranskripsjonsoppgaven denne prompten ber om, så selve beskrivelseskallet ber alltid om høy detaljgrad uavhengig av hvilken detaljgrad den opprinnelige innkommende forespørselen brukte. Dette påvirker bare den interne beskrivelsesforespørselens kropp; det endrer ikke hvordan OmniRoute videresender anroperens egne `image_url.detail` på den primære forespørselen — denne standarden anvendes separat, og bare for oppdagede OpenCode-klienter, i `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic-trådformatgrenen til beskrivelses-selvsløyfen har ingen `detail`-felt og påvirkes ikke av noen av standardene.

#### Tak for beskrivelsesutdata (`modalityBridgeVisionMaxChars`)

| Nøkkel                         | Standard | Område              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyr **ingen øvre grense** — beskrivelsen som returneres av `callVisionModel()`, overføres uendret, noe som bevarer den eksisterende oppførselen. Enhver verdi i området 100–50000 avkorter beskrivelsen med et `…`-suffiks før den skjøtes inn igjen som `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`). Øk denne for detaljtunge OCR-oppgaver der nedstrømsmodellen trenger hele transkripsjonen; senk den for å begrense token-bruk på pratsomme visjonsmodeller. Dashboard-feltet ligger på visjonsfanens Avansert-panel (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og klemmer enhver verdi mellom 1 og 99 opp til 100-gulvet, samtidig som en eksplisitt `0` forblir urørt — `0` er en gyldig Zod-verdi i seg selv (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke bare "ikke angitt"-standarden.

#### Beskrivelsesmellomlager (`modalityBridge/bridgeCache.ts`)

LRU + TTL-mellomlager i minnet for beskrivelsesutdata, delt på tvers av prosessen. Nøkkel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med lengdeprefiksinnramming (ingen kollisjoner ved feltgrenser). Modellkomponenten er den **konfigurerte** bromodellen, ikke modellen som faktisk svarte — `callVisionModel` kan falle tilbake internt, og nøkling per forsøk vil fragmentere mellomlageret. Mislykkede beskrivelser blir aldri mellomret. Innstillinger:

| Nøkkel                          | Standard | Område  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Ekstern bildenormalisering (self-loop describe/base64-henting)

Når broen henter et **ekstern** bilde selv — Anthropics describe-selvkall og claude-wire-format base64-konvertering (`ensureBase64ImagesForClaudeWire`), begge via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — blir den resulterende data-URI-en sendt gjennom `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) før den blir innebygd i visjonsmodellforespørselen. For store bilder skaleres ned til en **2048px lang kant** (tilsvarende størrelsesbegrensningen OpenAI/Anthropic allerede bruker på serversiden), noe som reduserer opplastingsbyte/latens uten å endre hva visjonsmodellen ser. Skalering bruker `sharp`, lastet via dynamisk import: på en plattform der dens native binærfil ikke klarer å laste, vil `normalizeDataUri()` **aldri kaste feil** — den faller tilbake til å videresende de opprinnelige bytene uendret, slik at beskrivelses-/base64-konverteringsstien alltid fortsetter å fungere. Ikke-bildebyte (en henting som ikke returnerte et avkodbart bilde) videresendes også urørt. Denne normaliseringen er begrenset til bilder broen henter for sitt eget selvkall — den blir aldri brukt på kallers rå videresendingsnyttelast, i tråd med prinsippet om at endringer kun skjer ved opt-in (Hard Rule #20).

#### Innstillingsskjema + migrasjon

De nye `modalityBridge*`-nøklene er Zod-validerte i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen, og `modalityBridgeAudio*`-gruppen som brukes av Audio Bridge. Migrasjonen `141_modality_bridge_settings.sql` kopierer eksisterende eldre `visionBridge*`-verdier til de matchende nye nøklene (idempotent, overskriver aldri en `modalityBridge*`-verdi satt av en operatør); de eldre nøklene forblir akseptert som en lesereserve i én utgivelsessyklus.

#### Transparensheader + statistikk

Beskrivelses-transformerte svar bærer `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (bygget av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`, stemplet av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerte forespørsler får **ingen** header — nyttelasten var urørt og modellbyttet er allerede synlig i svarfeltets `model`-felt.

`GET /api/modality-bridge/stats` (administrasjonsautentisering, samme nivå som `GET /api/settings`) returnerer tellerne i minnet per modalitet `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og `video`. `averageLatencyMs` bruker `latencySamples`, ikke alle forsøk, som sin nevner; en operasjon uten tidsmåling fabulerer ikke frem et null-milliseunders prøveuttak. `bridged` forblir det bakoverkompatible aliaset for vellykkede konverteringer; mislykkede forsøk øker ikke denne. Tellerne tilbakestilles ved prosessomstart etter hensikt (telemetri, ikke regnskap).

#### Dashbordkonfigurasjon

Den dedikerte dashbordsiden er `/dashboard/settings/modality-bridge`. Dens URL-adresserbare faner `Vision`, `Audio` og `Video` beholder spørringsparametere samtidig som de bytter `tab`-verdien. Vision-fanen eksponerer aktivering, modus, valg av modell (inkludert den automatiske standarden), oppgavebevisst prompting, avanserte grenser for tidsavbrudd/bilde/beskrivelseslengde/mellomlager, kjøretidstellerne, og en beskyttet eksempelforespørsel. Audio-fanen er også live: den eksponerer aktivering, en modellvelger kun for STT med Auto, grenser for tidsavbrudd/maks-klipp, lydtellere og en `input_audio`-eksempeltest. Video-fanen er funksjonell: den rapporterer kjøretidstilstanden til FFmpeg/ffprobe — en av fire eksplisitte UI-tilstander (`unknown` mens proberen er underveis eller ikke kunne fullføres, `restricted` på en ikke-loopback-dashbordvert der proberen hoppes over på klientsiden, `unavailable` når den er probet og bekreftet manglende, eller `available` med FFmpeg/ffprobe-versjonene) — persisterer grenser for aktivering/modell/ramme/video/tidsavbrudd, filtrerer modellvelgeren til modeller som støtter syn, og eksponerer videotellere.

Det tidligere Vision Bridge-kortet under AI-innstillinger er en kompatibilitetslenke til den nye siden; det eier ikke lenger en andre kopi av skjemaet. Media Providers lenker også Bilde-til-tekst- og Tale-til-tekst-arbeidsflyter til de tilhørende Modality Bridge-fanene uten å fjerne den eksisterende Tale-til-tekst-lekegrinden.

**Omgåelse av selvkall-adgang:** når beskrivelseskallet rutes gjennom OmniRoutes eget `/v1`-selvkall (ikke-standard providermodell), sender underforespørselen `x-omniroute-admission-bypass: internal` og autentiseres med den oppløste selvkall-legitimasjonen — den lokale `sk_omniroute`-sentinelen i lokal modus, eller operatørkonfigurert `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` miljønøkkel (#1350) slik at `REQUIRE_API_KEY=true`-distribusjoner fortsatt kan kjøre beskrivelseskallet. Omgåelsen respekteres kun for disse nøyaktige legitimasjonene, slik at eksterne klienter ikke kan bruke headeren til å omgå adgangskontrollen.

Eldre standardverdier ligger i `src/shared/constants/visionBridgeDefaults.ts`; de nye standardverdiene for modus/oppgavebevissthet/mellomlager og innstillingsoppløseren ligger i `src/shared/constants/modalityBridgeDefaults.ts`. Vernetiltaket eksponerer et `deps`-konstruktøralternativ slik at tester kan injisere falske `getSettings`- og `callVisionModel`-implementeringer.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Avskjærer lydbærende chatforespørsler før de når et mål som ikke er kjent for å akseptere lydinnsats. Den omdirigerer aldri chatforespørselen: lyddeler transkriberes gjennom det eksisterende OpenAI-kompatible multipart-endepunktet, og den valgte chatmodellen fortsetter med teksttranskripsjoner.

Flyt:

1. Løs `supportsAudio` gjennom `getResolvedModelCapabilities()`. Eksplisitt leverandørregister-metadata vinner, deretter statisk modellmetadata, og til sist synkronisert `modalities_input`. En deklarert inndataliste uten `audio` er `false`; manglende kapasitetsbevis forblir `null`. Både `false` og `null` aktiverer den konservative broen, mens `true` omgår den.
2. Løs `modalityBridgeAudio*`-innstillingene og hent ut skjøteklare toppnivå-lyddeler fra hver melding gjennom den delte `detectMediaParts()`-detektoren. Støttede overføringsformater er OpenAI `input_audio`, `audio_url` og `source.media_type: "audio/*"`. Nestet lyd oppdages for ruting, men fjernes ikke av skjøtestien. Arbeidet begrenses av `modalityBridgeAudioMaxClips`; senere deler forblir urørt.
3. Respekter en konfigurert `provider/model`, eller la `selectAudioBridgeModel()` gjennomgå `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrekkefølge og velge den første modellen med en brukbar aktiv leverandørlegitimasjon.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en flerdelt `file`, eller laster ned en ekstern `audio_url` gjennom den offentlige utgående vaktposten med DNS-pinning og en grense på 25 MB. Den sender deretter filen og den valgte modellen til den lokale `/v1/audio/transcriptions`-selvsløyfen, autentisert med `resolveSelfLoopBearer()`. Den eksisterende transkripsjonsruten utfører vanlig oppslag av legitimasjon, håndtering av avkjøling/frekvensbegrensning og leverandørdistribusjon.
5. Vellykkede kall erstatter delene sine med `[Audio N]: <transcript>`. Kall kjøres med `Promise.allSettled`: en individuell feil bevarer den opprinnelige lyddelen (#4012-kontrakt). Hvis alle kall feiler og målet er bevist å være `supportsAudio === false`, blir delene til `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakt). For et ukjent mål (`null`) forblir et resultat der alt feiler urørt. Et bevist tekst-eneste mål uten brukbar STT-legitimasjon mottar den samme eksplisitte stubben uten å utstede et nettverkskall.

Vellykkede transkripsjoner bruker det prosessomspennende Modality Bridge LRU/TTL-mellomlageret. Nøkkelen kombinerer lydreferansen, den stabile `audio-transcription`-operasjonsetiketten og den valgte STT-modellen; feil blir aldri mellomlagret. Lydforsøk oppdaterer de delte tellerne `bridged`, `cacheHits`, `failures` og `lastUsedAt`. Transformerte svar bærer `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; uforandrede forespørsler mottar ikke et Audio Bridge-segment.

Kjøretidsinnstillinger er DB-baserte og Zod-validerte:

| Key                           | Default | Range             |
| ----------------------------- | ------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                 |
| `modalityBridgeAudioModel`    | `""`    | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10              |

Det delte mellomlageret forblir kontrollert av `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Videobro (`videoBridge.ts`, `videoBridgePipeline.ts`)

Avskjærer toppnivå-videodeler i Chat Completions `messages` og Responses API `input` før et mål uten kjent innebygd videostøtte blir kalt. Støttede formater er `input_video`, `video_url`, `video_source`, HTTPS-URLer og `data:video/*;base64,...`-data-URLer. Vanlige filnavn i tekst blir ikke behandlet som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) eier forespørselstraversering, kapasitets-/retningslinjekontrollen, per-forespørsel-aggregering og svar-nyttelast. Per-video-arbeid – anskaffelse, hele-resultat-mellomlageret, beskrivelse av en rammesekvens (som fletter sammen en eventuell anropsdeklarert lydtranskripsjon) og per-forsøk-metrikk/avbrudd/opprydding – er skjult bak `processVideoPart` i `videoBridgePipeline.ts`, som kalles en gang per videodel inne i `preCall`s løkke. Den modulen definerer også de eksplisitte portgrensene `VideoMediaBrokerPort` (skaffe byte og ekstrahere samplede rammer), `VideoAudioTranscriptionPort` (flette en anropsdeklarert lydtranskripsjon med de samplede bildetekstene) og `VideoDrilldownPort` (ramme-detaljvisningens persisteringsgrense; ennå ikke koblet inn i `processVideoPart` – bare den separate `/api/modality-bridge/video/drilldown`-ruten skriver detaljvisningsoppføringer i dag).

Den offentlige `/v1`-forespørselsstien importerer eller kaller aldri en underprosess. Eksterne videoer lastes ned under en grense på 50 MiB; innebygde base64-videoer har en konservativ dekodet grense på 36 MiB per video, slik at modell-/meldings-/innrammingsomslaget kan holde seg innenfor den offentlige JSON-forespørselens inngangsgrense på 50 MiB. Estimater for innebygd lengde og dekodet størrelse sjekkes før allokering. HTTPS kreves på den første eksterne URL-en og hver omdirigering, ved hjelp av den eksisterende offentlig-bare utgående vaktposten med DNS-pinning. Byte-verdiene krysser deretter den nøyaktige interne `POST /api/modality-bridge/video/extract`-mellomlerergrensen. Den ruten er både `LOCAL_ONLY` og `SPAWN_CAPABLE`, aksepterer bare en prosessinternt autentisert, klarert tilbakekoblingsforespørsel, og aksepterer aldri en URL, filbaner, kjørbare filer eller argumentlister. API-ets meldingskropp-størrelsesrørledningssystem og håndtererens inkrementelle kroppsleser håndhever uavhengig en broker-inndatagrense på 50 MiB. Dens begrensede kø kjører én ekstraksjon om gangen, tillater fire ventende jobber og setter en grense for ventende inndata på 100 MiB.

Inne i mekleren leser `ffprobe` en privat lokal fil; den faste tillatelseslisten for formater utelukker spillelist- og manifestformater. For tillatte containere i MOV-familien forblir eksterne MOV-datareferanser deaktivert som standard, og den faste kommandoen aktiverer dem ikke. Både `ffprobe` og `ffmpeg` bruker protokollhvitlisten som kun tillater `file`, én tråd, faste argumentmatriser, intet skall, og kjørbare filer som slås opp fra `PATH`. Vedlagte bildeomslagstrømmer er ikke spillbare kandidater. Alle spillbare strømmer må oppfylle grensene, og en eksplisitt standardstrøm foretrekkes fremfor det deterministiske reservetilfellet med lavest indeks. Videoer er begrenset til 600 sekunder, 8 192 piksler per dimensjon, og 33 554 432 kildepiksler. FFmpeg sampler 1–16 midtpunkt-JPEG-rammer, skalerer ned den lengste kanten til maks 1 024 piksler uten å skalere opp mindre inndata, og mottar aldri en URL. Sampling er `uniform` som standard. De valgfrie `scene_aware`- og eksperimentelle `segment_aware`-retningslinjene utfører én ekstra fast FFmpeg-gjennomgang over den allerede validerte lokale strømmen, velger begrensede `showinfo`-scenetidsstempler, og faller deterministisk tilbake til de samme uniforme midtpunktene ved detektorfeil, tidsavbrudd, feilaktig utdata eller et tomt kandidatsett. Segmentbevisst modus fordeler midtpunktprøver proporsjonalt med de validerte sceneintervallene; segmentbevisst dokumentasjon og reserveløsningsatferd er detaljert nedenfor. Den faste grensen på 16 rammer brukes etter utvalg i hver retningslinje. Når en scenebevisst forespørsel bare har et budsjett på én ramme, bruker den det uniforme midtpunktet for det aktive fullvideovinduet eller fokusvinduet og rapporterer `policyEffective: uniform`: én enkelt utvalgt sceneramme kan ikke bevare begge tidsmessige ender. En kaller kan valgfritt oppgi et endelig fokusvindu (`start`/`end` sekunder); grenser klemmes til medievarigheten, omvendte eller ikke-endelige vinduer avvises, og alle samplingsretningslinjer utføres bare innenfor det normaliserte intervallet. Det resulterende vinduet inkluderes i samplingsmetadataene og i det utiltrodde beskrivelsesprefikset slik at nedstrømsmodeller kan skille et fokusert utdrag fra hele tidslinjen.

Semantisk bildetekstfokus er en egen, eksplisitt innstilling. Standardanalasemodusen `full` bevarer den eksisterende rammeledeteksten og videresender aldri forespørselstekst til bildetekstmodellen. I `focused`-modus leser broen bare den nyeste ikke-tomme brukerforfattede `text`/`input_text` fra den samme Chat- eller Responses-beholderen, normaliserer den til NFC, slår sammen kontrolltegn og blanktegn, og begrenser den til 500 Unicode-kodepunkter. Et tomt resultat faller tilbake til den nøyaktige `full`-ledeteksten. Et brukbar hint serialiseres som JSON i en dedikert utiltrodd brukerkontekstblokk og kan bare prioritere observerbare detaljer; den kan ikke overstyre den separate advarselen mot å følge instruksjoner som er synlige eller hørbare i mediet. Tekstlig fokus utleder aldri `start`/`end` eller endrer tidsmåleren.

#### FU-07 strukturelle segmentbevis

`segment_aware` bruker én begrenset forhåndsanalyseomgang over den allerede validerte lokale videostrømmen. Den faste filterkjeden skalerer først til maks 320 piksler i bredden, oppdager sceneendringer og frosne intervaller, og sampler deretter med 1 ramme per sekund for uskarphet, gjennomsnittlig luma og romlig/tidsmessig informasjon. Omgangen er begrenset til 600 strukturelle sampler, én FFmpeg-/filtertråd, de samme hvitlistene for protokoll (`file`-kun) og containere, en prosessutdatagrense på 1 MiB, og maks 30 sekunder innenfor meklerens delte avbrudd/frist. Den godtar aldri en kommando, filter, bane eller URL fra forespørselen.

De strukturelle verdiene er deterministiske samplingsbevis, ikke semantisk videoforståelse. De utleder ikke subjekter, handlinger, bildetekster, tale eller brukerhensikt. Scene- og frysegrenser danner segmenter; frysedekning, uskarphet, eksponering, romlige detaljer og tidsmessige endringer påvirker bare hvordan det eksisterende rammebudsjettet på 1–16 fordeles. Et fullstendig frossent segment begrenses til én ramme, mens ikke-frosne segmenter konkurrerer om det gjenværende budsjettet. Når grensene overstiger antall rammer, beholder man en uniform tidslinjedekning slik at raske tidlige klipp ikke kan skjule et langt etterslepende segment. Scenegrenser innenfor 1-sekunds analyseroppløsning av en frysegrense flettes sammen.

Manglende filtre, misdannede/tomme bevis, en detektorfeil eller det begrensede forhåndsanalyse-tidsavbruddet feiler åpent til den nøyaktige uniforme midtpunktretningslinjen. Et avbrudd fra en kaller eller meklerfrist feiler ikke åpent: det avslutter underprosessen som kjører, forhindrer senere rammeuttrekking, og det private midlertidige treet fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske ekte FFmpeg-oppsett for besparelser i bildetekstkall etter deduplisering, budsjettallokering for tett bevegelse, uskarphet-/eksponerings-/SI-TI-bevis, raske klipp med lang hale, og falske positive ved gradvis nedtoning. Den registrerer veggtid for forhåndsanalyse og, der `/usr/bin/time` er tilgjengelig, underprosessor-CPU og topp-RSS. Kvalitetssjekkene dens er kun strukturelle orakler. Den faktiske bildetekstmodellens kvalitet forblir `HOLD` fordi denne testriggen ikke har et autorisert endepunkt eller en frossen dommer. Monetære besparelser forblir også `HOLD` med mindre `--caption-cost-per-call-usd` oppgir et eksplisitt positivt estimat per kall; skriptet finner aldri på noen av resultatene.

Hver enkelt ramme er begrenset til 4 MiB, alle rå rammer til sammen til 23 MiB, og den serialiserte meglerresponsen til 32 MiB. En privat midlertidig katalog fjernes i `finally`. OmniRoute leveres ikke med FFmpeg og godtar ikke en egendefinert kjørbar bane. Før bildeteksting utfører broen et konservativt visuelt dedupliseringstrinn: hver JPEG-fil reduseres til en 16×16 gråtonebuffer og sammenlignes bare med den siste bevarte rammen. For et forespurt bildetekstbudsjett på over én ramme, gir ekstraksjonen en begrenset kandidatpool på opptil det dobbelte av det budsjettet og aldri mer enn 16 rammer. Det forespurte taket anvendes først etter deduplisering, der den første og siste utvalgte kandidaten bevares under den endelige tynningen når budsjettet er minst to. Den versjonerte `grayscale-16x16-mean-cells-v2`-policyen bruker den største av gjennomsnittlig lumadelta og forholdet mellom miniatyrbildeceller hvis normaliserte delta er minst 0,05. Dupliseringsterskelen er konstanten 0.04, valgt for forutsigbarhet snarere enn å bli eksponert som en kjøretidsinnstilling. Dette sekundære høykontrastsignalet bevarer små bevegelser og synlige tekstendringer som en sammenligning basert kun på gjennomsnitt kan skjule. Sammenlignings- eller dekoderfeil feiler åpent og opprettholder dekningen. Utdata-metadataene skiller mellom uttatte kandidater, vellykkede brukte rammer og forkastede visuelle duplikater.

En eksplisitt merket videodel kan be om et tidsstemplingskontaktark. Broen bygger et JPEG-rutenett på maks 4 kolonner og 16 rammer. Hver celle på 512 piksler brenner inn kildetidsstempelet sitt i et bunnbånd med høy kontrast, mens de samme tidsstemplene forblir i tekstmetadataene for nedstrøms tilknytning og revisjon. Det fullstendige JPEG-bildet forblir begrenset til maksimalt 32 MiB. Hvis `sharp` ikke kan dekodere eller sette sammen rutenettet, faller broen tilbake til de individuelle JPEG-rammene; et klientavbrudd forplanter seg fortsatt gjennom arkoperasjonen.

Promoteringsbevis er bevisst atskilt fra mikrobenchmarken for syntetisk sammensetning. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer et skjemaversjonert A/B-rammeverk for ekte OpenAI-kompatible visjonsmodeller. Den måler tokenene som rapporteres av tilbyderen, ende-til-ende-ventetid (inkludert sammensetning av ark), antall modellkall og manifestdefinert faktabevaring. Rå modelsvar skrives ikke til rapporten; bare SHA-256-sammendrag og matchede faktum-ID-er beholde. Rammeverket foretar ingen nettverks- eller betalte modellkall med mindre `--execute-real` er angitt og `--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigurert. Uten denne eksplisitte ekte kjøringen forblir dens maskinlesbare dom `HOLD`; målinger av syntetisk nyttelast / antall kall alene utgjør ikke promoteringsbevis.

Klienter kan legge til en valgfri `transcript.cues`-matrise til en støttet videodel når de allerede har synkronisert tekst. Hver cue må inneholde `text`, et endelig `start`/`end`-intervall innenfor den undersøkte varigheten, og en hvitelistet `source` (`client`, `embedded` eller `audio-bridge`); `confidence` standardiseres til `1` og må ligge mellom `0` og `1`. Eksakte duplikat-cuer slås sammen. OmniRoute starter aldri transkripsjon fra disse metadataene: validerte cuer kopieres til det beskrevne resultatet med kilde, konfidens og intervall, og gjengis som utroverdig observasjoner sammen med bildetekstene. Ugyldig tekst, tekst utenfor gyldig rekkevidde eller tekst uten opprinnelse avvises i stedet for å bli blandet inn i bildetekststrømmen. Begge transkripsjonskanalene i forespørselsdelen normaliserer oppgitt opprinnelse til `client`, inkludert egenerklærte `embedded`- eller `audio-bridge`-etiketter. Bare en servereid adapter kan tilordne disse pålitelige etikettene gjennom det kildebaserte `trustedSource`-argumentet; et JSON-felt i forespørselen kan ikke nå det argumentet. Transkripsjonstekst forblir utroverdig medieavledet innhold, uavhengig av opprinnelse, og må aldri avgjøre autorisasjon.

En avansert klient kan oppgi et `audioTranscript`-spor for den samme videoen; det behandles som klientlevert tekst, ikke som bevis på servertranskripsjon. Fusjonssømmen kjører visuelle og lydobservasjoner under én tidsfrist og et avbruddssignal, sorterer dem på en felles tidslinje, slår sammen eksakte duplikater og rapporterer et delvis resultat når bare den ene siden lykkes. Et ugyldig `audioTranscript` degraderes til det delvise resultatet — den visuelle beskrivelsen beholdes og lydgrenen registrerer en renset feilkode — i stedet for å la hele videoen feile. Tilgjengelighet per gren, delvisflagget og de rensede feilkodene bevares i det beskrevne resultatet, i verneregelmetadataene (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), i resultathurtigbufringsmetadataene og i broens fusjonstellere. Standardstien for videobroen starter ikke tale-til-tekst og laster ikke ned en ekstra mediekopi; uten dette eksklusive sporet forblir den videobasert.

**Transkripsjonsbevaring (#12150 P1).** Dette gjelder automatisk hver gang Video Bridge (som selv er valgfri) gjengir et transkripsjonselement — det finnes ingen separat bevaringsflagg. Når en forespørsel gjengir et transkripsjonselement (en `transcript` erklært av anropperen eller en sammenslått `audioTranscript`), markerer sikkerhetsmekanismen den som `videoBridgeObserved` og produserer en sladdet skygge av videobeskrivelsen — en identisk gjengivelse der hvert elements fritekstdel erstattes av `[redacted-video-transcript]`, bygget ved å erstatte det strukturerte elementfeltet før strengen settes sammen (aldri ved å analysere den flate teksten, slik at intet elementinnhold — verken fiendtlig eller ordinært, inkludert innhold som inneholder `]` slik som `[inaudible]`/`[music]` — kan overleve). Forespørselskroppen i anropsloggen som beholdes, bytter ut hver videoutledet tekstdel med den sladdede skyggen, matchet etter innholdslikhet; `fullText`-ankeret leses på nytt fra den ferdige pre-call-sikkerhetsmekanismenyttelasten, slik at matchen fremdeles lykkes etter at senere kjedesikkerhetsmekanismer (PII- og påloggingsinformasjonsmaskerere, prioriteter 10/95) omskriver beskrivelsesteksten på stedet og etter at system-prompt/overlevering/minne-innsprøyting omformer meldingsmatrisen. Kroppen som sendes oppstrøms til modellen, er uendret. En observert forespørsel fyller heller ikke ut noe varig minne (både forespørsels- og responsutledet ekstraksjon utelates), slik at modellens eget svar ikke kan ekko transkripsjonstekst inn i minnet.

**Rå videofelt (#12430).** Når broen er aktivert og innebygd videostøtte er ukjent eller fraværende, aktiverer også definerte `transcript`/`audioTranscript`-felt `videoBridgeObserved`, selv etter en beskrivelsesfeil eller en `maxVideos`-grense. `null` og tomme strenger teller; fraværende felt og ikke-videometadata gjør det ikke. Bevarte kopier sladder disse feltene eller utelater forespørselen, og mellomlager/minne omgås.

På disse reserveveiene blir gyldige anropselementer støttede `text`/`input_text`-deler i stedet for ikke-standard leverandørfelt. Begge de forespørselsleverte sporene forblir upålitelige `client`-observasjoner, med en eksplisitt advarsel om at videoen ikke ble beskrevet og at tidsstempler ikke ble verifisert mot media. De eksisterende budsjettene på totalt 256 elementer / 64 KiB og per element gjelder på tvers av de to sporene sammen; tidsstempler må passe innenfor meglerens tak på 600 sekunder og eventuelle medfølgende fokusvinduer. Ugyldige spor forkastes, de blir ikke videresendt som vilkårlig tekst; et gyldig søskenspor kan fremdeles brukes med mindre deres kombinerte budsjett overskrides. Null- / tomme felt legger ikke til tekst. Ingen mediehenting eller transkripsjon legges til av denne reserveløsningen. Transkripsjonsutvidelsesfelt fjernes fra reservevideobæreren og dens `video_url`/`source`-objekter. OpenAI-trådtillatelseslisten forblir streng; ukjente innebygde videobærere forblir tilgjengelige, og kjente mål som bare er for tekst, beholder sikre markører. Strukturerte sladdingsskygger beskytter den vedlagte transkripsjonsteksten, mens den opprinnelige anroper-eide forespørselen forblir uendret. Innebygd støttede mål og deaktiverte broer beholder sin eksisterende omgåelsesoppførsel.

Ytterligere bevarte kopier bruker det samme observerte-forespørsel-signalet. Rådata-snapshotet av klientforespørselen før sikkerhetsmekanismen, den ventende forespørselen i minnet og loggen over tidlig avviste forespørsler erstatter strukturelt transkripsjonsfelt i videodeler; strengprompter syntetisert av pipelinetrinn og kontekstoverlevering sladdes ved synken for den lagrede forespørselskroppen. Den lagrede markøren `video_content_removed` gjør at `previous_response_id`-fortsettelse mislykkes stengt i stedet for å rekonstruere tekst som ble med vilje forkastet. Hvis en observert forespørsel mister sin per-del-sladdingsskygge før loggførring, eller hvis selv én av flere videoskygger ikke klarer å matche etter senere forespørselsmutasjoner, utelates den lagrede forespørselskroppen fullstendig i stedet for å beholde en delvis sladdet transkripsjon.

For en observert forespørsel kan et modellsvar sitere en hvilken som helst del av transkripsjonen uten en strukturert elementgrense. Dens lagrede `responseBody` i anropsloggen erstattes derfor av en utelatelsesmarkør; det detaljerte pipeline-artefaktet (som kan inkludere oppstrøms-/klientkropper og strømningsbiter) beholdes ikke. Semantiske, idempotens- og resonneringsavspillingsmellomlagre omgår lesinger og skrivinger for den forespørselen. Leverandørforespørselen og den klientsynlige responsen forblir uendret. Tidlige keepalive-byts tømmes fra den midlertidige buffer når det detaljerte artefaktet utelates. Kiros feilformede EventStream-advarsel rapporterer bare nyttelastens byttekvantum, aldri innholdet eller JSON-parserens rå feil. Dette hevder ikke at hver urelatert leverandør-/plugin-diagnostikk har blitt revidert; den bredere oppryddingen av lagrede sinker spores i #11658.

Den interne `/api/modality-bridge/video/drilldown`-livssyklusen er et separat, loopback-/token-autentisert mellomlagringssubstrat. Hver operasjon krever også en kanonisk opak prinsipal-ID. Før en produksjonsanropper aktiveres, må den utlede den ID-en fra den autentiserte leietakeren og må aldri videresende en klientvalgt verdi. Mellomlagringsnøkler binder den prinsipalen til kanoniske økt- og videoreferanse-ID-er, lagrer bare deres SHA-256-utledede nøkler, og avgrenser både lesinger og sletting til den samme prinsipalen. Mellomlageret lagrer maks 16 utledede JPEG-rammer per oppføring, lar dem utløpe etter ti minutter, og støtter begrensede `start`/`end`-lesinger eller eksplisitt øktsletting.

Hver prinsipal er begrenset til 16 oppføringer og 64 MiB med kanoniske JPEG-data. Disse grensene er uavhengige av det globale taket på 64 oppføringer / 256 MiB: prinsipalens kvotepress kaster ut bare den prinsipalens minst nylig brukte oppføringer før global LRU-utkastelse vurderes. Utløpte oppføringer feies bort fra både prinsipal- og global regnskapsføring ved mellomlagringsaktivitet, mens kansellering og valideringsfeil ikke utfører en partiell erstatning.

Cachen avviser ikke-kanonisk Base64, overflødig utfylling, ikke-JPEG-medier, malformede eller avkuttede JPEG-er, og JPEG-er som produserer en advarsel under en begrenset `sharp`-dekodering av hele bildet. Den omkoder hvert akseptert bilde til en kanonisk JPEG, utleder bredde og høyde fra de dekodede bytene i stedet for å stole på anroperens felt, og forkaster eventuelle etterfølgende polyglott-byter i stedet for å beholde dem. Bare den begrensede kanoniske komprimerte bufferen belastes begge kvotene. JSON-overføringsgrensen inkluderer Base64-overhead for taket på 32 MiB dekodet inngang. Hver lagrede avledning registrerer sitt validerte JPEG-format/oppløsning, samplingspolicy, avledningsversjon, opprettelsestidspunkt, serverberegnet innholdshash og hashet foreldrereferanse pluss den betrodde anroperens foreldreinnholdshash. Avbrudd sjekkes mellom asynkrone dekode-/hash-faser før den atomiske cache-commiten.

Denne trjen kobler ennå ikke en produksjonsprodusent til ruten og tilbyr ikke valg av multioppløsningsvarianter. Den transparente Video Bridge-forespørselsbanen medfører derfor intet ekstra arbeid, mens leietakerbundet identitetsavledning og hele FU-08-multioppløsningslivssyklusen forblir eksplisitt oppfølgingsarbeid snarere enn dokumentert som fullført oppførsel.

Rammer får bildetekster sekvensielt med den konfigurerte Videomodellen. En tom Video-overstyring arver Vision-innstillingen; hvis begge er tomme, velger Vision-autoruteren den effektive visjonskapable modellen. Vellykkede bildetekster erstatter den opprinnelige delen med et stabilt `[Video description:`-prefiks som også merker teksten som en ikke-betrodd mediederivert observasjon og forteller nedstrømsmodeller at de ikke skal følge instruksjoner som finnes i media. Cachenøkler for rammebildetekster inkluderer JPEG-bytene, ledeteksten, tidsstempel og effektiv modell; bare vellykkede bildetekster cachaes. Cache-oppføringer beholder den faktiske vellykkede produsentmodellen, inkludert en reservemodell; broen rapporterer `mixed` når ulike rammer ble produsert av ulike modeller. Et cache-treff gjenbruker den produsentidentiteten i stedet for å merke den om som den forespurte ruteringsplanen. Resultatcachen for hele videoen er nøklet på hver inndata som endrer utdataen — ledetekst, effektiv modell, samplingspolicy, antall rammer, semantisk anmodningsmodus, SHA-256-fingeravtrykket til det normaliserte fokusvarselet, fokusvindu, `transcript`, `audioTranscript` og kontaktarksflagget — slik at endring av noen av disse dimensjonene gir et cache-miss, aldri gjenbruk av utdatert innhold. Den visuelle dedup-policyversjonen, terskelen og det begrensede antall kandidatrammer er også eksplisitte i resultatcache-nøkkelen og -metadataen; en policyendring kan derfor ikke gjenbruke en utdatert hele-video-beskrivelse. Resultatcache v4-metadata beholder modus og fingeravtrykk, aldri den rå brukeroppgaven. Vernemetadata rapporterer både de forespurte og effektive analysemodi; en forespurt `focused`-modus uten brukbar brukertekst rapporteres som effektivt `full`.

Vernet trekker ut hver støttet videodel, men beskriver ikke mer enn `modalityBridgeVideoMaxVideos`. For et mål som har vist seg å ha `supportsVideo === false`, blir feilede videoer og videoer som overskrider grensen til eksplisitte, sikre tekstmarkører slik at ingen rå video overlever. Når kapabiliteten er ukjent, beholder disse delene sin videobærer; eventuelle reservetranskripsjoner følger den begrensede tekstoversikten ovenfor. Mål med `supportsVideo === true` omgår broen. Klientens forespørselsavbruddssignal forplantes gjennom nedlasting, meglerkø, underprosesser og bildetekstanrop; avbrudd stopper mellom videoer og feiler aldri åpent til rå media.

Kjøretidsinnstillinger er DB-baserte og Zod-validerte:

| Nøkkel                              | Standardverdi | Område / oppførsel                                                                                      |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Valgfri kjøretid, opt-in                                                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` beholder generiske bildetekster; `focused` bruker begrenset, ikke-betrodd fersk brukerkontekst   |
| `modalityBridgeVideoModel`          | `""`          | Arv Vision Bridge-modellen                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, eller proporsjonal `segment_aware`; detektorfeil faller tilbake til `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                          |

Eldre vedvarende video-tidsavbruddsverdier over 120 sekunder klemmes til meglerfristen; nye innstillingsskrivinger over den grensen avvises. `GET /api/modality-bridge/video/runtime` krever betrodd stemplet loopback-lokalitet før autentisering eller kjøretidsprobing, og krever deretter administrasjonsautentisering. Den returnerer bare `available`, sanitiserte FFmpeg/ffprobe-versjoner og en fast årsak når kjøretiden ikke er tilgjengelig. Det interne uttrekksendepunktet er ikke en offentlig opplastings-API: kømetning returnerer `503` pluss `Retry-After`, en anroper-frakobling returnerer `499`, og den faste meglerfristen returnerer `504`. Konverterte svar legger til `video->text;model=<visionModel>;parts=<videos>` i den sentrale `x-omniroute-modality-bridge`-headeren uten å fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kjører på **begge** trinn.

- **`preCall`** kloner nyttelasten, går gjennom `system`, `messages`, `input` og
  `prompt` (inkludert enkle strengelementer), og bruker `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på strengfeltene `content`/`text`. Når
  `PII_REDACTION_ENABLED=true`, blir oppdaget PII redigert i utgående nyttelast.
  Dette er uavhengig av `INPUT_SANITIZER_MODE` (som bare kontrollerer policyen for
  prompt-injeksjon). Når redigering er av, registrerer kallet oppdagelsestellinger
  uten å skrive om innholdet.
- **`postCall`** dypkloner responsen, kjører `sanitizePIIResponse()` pluss
  maskeringen for Responses-API-strukturen (`maskResponsesOutput` — dekker
  `output_text` og `output[].content[].text`). Hvis det oppstår redigering,
  erstatter den modifiserte responsen originalen.

Sikkerhetsmekanismen blokkerer aldri; den bare annoterer (`meta.detections`,
`meta.redacted`) eller skriver om.

#### Valg per type, egendefinerte mønstre og oppdagelsesteller

**Dashboard → Settings → Security → PII masking** velger _hva_ som maskeres. Det
slår ikke på maskering: det styres fremdeles av `PII_REDACTION_ENABLED` (forespørsel) og
`PII_RESPONSE_SANITIZATION` (respons + SSE), som begge er av som standard.

- **Per-type selection** — de innebygde ID-ene er oppført i
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ikke angitt betyr alle
  typer (virkemåten før denne innstillingen fantes). Forespørselsmotorens
  `ssn_us`-mønster tilordnes `ssn`. Malene (Minimal, Standard, Financial,
  Brazilian, USA, Full) fyller bare ut avmerkingsboksene i brukergrensesnittet.
- **Custom patterns** — opptil 20 regex- eller jokertegnmønstre (`*` = opptil 64
  ikke-mellomromstegn, `?` = ett). Treff blir til `[CUSTOM_REDACTED]`.
  Hvert mønster går gjennom `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maksimalt 500 tegn, flagg begrenset
  til `g i m s u`, må kompilere, må bestå `safe-regex` (katastrofal
  tilbakesøking), og må ikke matche en tom streng eller en redigeringsplassholder.
  Et mønster som feiler, avvises når det lagres og testes, og en lagret rad som feiler,
  hoppes over ved kjøring i stedet for å bli kompilert. Egendefinerte mønstre bare
  kjører mens maskering er på.
- **Detection counters** — tellere per type (aldri matchede verdier), holdes i
  minnet og tilbakestilles ved omstart (`src/lib/pii/piiDetectionStats.ts`). De øker
  bare mens maskering er på.

Innstillingene ligger i `key_value`-tabellen (navnerom `pii_settings`,
`src/lib/db/piiSettings.ts`) og leses gjennom en 1 s hurtigbuffer. API:

| Method | Path                     | Purpose                                                                 |
| ------ | ------------------------ | ----------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Flaggstatus, `enabledTypes`, `customPatterns`, oppdagelsesteller        |
| `PUT`  | `/api/settings/pii`      | Erstatt `enabledTypes` (`null` = alle) og/eller `customPatterns`        |
| `POST` | `/api/settings/pii/test` | Tørrkjøring av ett mønster mot et utvalg på maks 8 KB; ingenting lagres |

Alle tre krever administrasjonsautentisering og validerer innholdet med Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-injeksjon (`promptInjection.ts`)

Oppdager fiendtlige strukturer i brukerlevert innhold og håndhever den
konfigurerte policyen. Atferden styres av miljøvariabler og konstruktøralternativer:

| Setting         | Env var                                                                                               | Default | Effect                                                                                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Når `false`, kortslutter sikkerhetsmekanismen.                                                                                                                                                        |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Injeksjonspolitikk: `block`, `warn` eller `log`. (`redact` godtas for bakoverkompatibilitet, men fjerner **ikke** injeksjonstekst; PII-omskriving av forespørsler styres av `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Minimum alvorlighetsgrad som kreves for å blokkere. Medium er kun observering som standard.                                                                                                           |

**Modusprioritering** (`getMode`): kallers `options.mode` →
`INJECTION_GUARD_MODE` **DB-funksjonsflagg-overstyring** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. En overstyring fra dashboardet vinner derfor over miljøvariablene, slik at
grensesnittet for funksjonsflagg (Feature Flags) kontrollerer det kjørende vernet live (ingen omstart).
DB-lesingen er feilsikker (fail-safe): hvis det oppstår en feil, faller vernet tilbake til
den miljøbaserte atferden, og når ingen overstyring er satt, er atferden identisk
med oppløsning basert kun på miljøvariabler.

Oppdagelseskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (delt detektorsett
   som brukes andre steder i pipelinen).
2. Innebygd `DEFAULT_GUARD_PATTERNS` (for tiden `system_override_inline` og
   `markdown_system_block`, begge med `high` alvorlighetsgrad).
3. Valgfrie `customPatterns` sendt via konstruktøralternativer (strenger, regex
   eller `{ name, pattern, severity }`-poster).

Når `mode === "block"` **og** minst én deteksjon oppfyller alvorlighetsgraden, returnerer `preCall` `{ block: true, message: "Request rejected: suspicious content detected" }`. I `warn`/`log`-modus logger sikkerhetsmekanismen, men tillater kallet. Den delte hjelpefunksjonen `evaluatePromptInjection()` eksporteres også for kastere som trenger å evaluere ledetekster uten å gå gjennom registeret.

**Skanningsgrense (v3.8.20):** detektoren undersøker bare de **første 16 KB** med sammensatt ledeteksttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i `src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og `evaluatePromptInjection()` utfører `slice(0, MAX_INJECTION_SCAN_BYTES)` før mønsterløkken kjøres. Injiseringstdirektiver befinner seg nær starten av et inndataelement, så dette setter et tak for regex-CPU/GC på nyttelaster på flere hundre KB uten å svekke deteksjonen (jf. #3932, #4041).

### Legitimasjonsmaskering (`credentialMasker.ts`)

Kjører på **begge** trinn, sist i standardkjeden (prioritet `95`). Fjerner kjente mønstre for API-nøkler / hemmelige token fra utgående nyttelast (meldingsinnhold, argumenter for verktøykall, verktøyresultater) **og** leverandørresponsen, slik at en legitimasjon som er limt inn i en ledetekst (eller ekkoes tilbake av et verktøyresultat), ikke lekkes til den oppstrøms leverandøren eller tilbake til klienten.

- **Kun valgfritt (opt-in)**, samme konvensjon som PII-maskering (relatert til Hard Rule #20): deaktivert med mindre `settings.credentialRedactionEnabled === true` **eller** `CREDENTIAL_REDACTION_ENABLED=true`. Når den er av, gjør sikkerhetsmekanismen ingenting (no-op) — den blokkerer aldri og omskriver aldri.
- `redactCredentials()` går gjennom hele nyttelast-/responstreet (`walkValue()`, prototyperenset, syklussikker via `WeakSet`) og erstatter treff med en `[REDACTED:<type>]`-plassholder, og kloner bare grener som faktisk har endret seg.
- `CREDENTIAL_PATTERNS` dekker LLM-leverandørnøkler (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-token (GitHub, Slack, Linear, Notion, npm, Postman, Discord), betalingsnøkler (Stripe, Square), sky-nøkler (AWS access key, Twilio, SendGrid, Mailgun), private nøkler / JWT-er, tilkoblingsstrenger som inneholder legitimasjon (`mongodb://user:pass@...`, osv.), og et generelt hodeverdimønster for `Authorization`/`x-api-key`/`api-key`/`apikey`. Hodeformede nøkler (`authorization`, `x-api-key`, `api-key`, `apikey`) maskeres strukturelt (kun verdi, skjemaprefiks som `Bearer `/`Basic ` bevares) i stedet for via den generelle tekst-regexen.
- Sikkerhetsmekanismen blokkerer aldri; den omskriver bare (`modifiedPayload` / `modifiedResponse`) og annoterer (`meta.credentialsRedacted`, `meta.count`).

Regresjonsvakt: `tests/unit/credential-masker-guardrail.test.ts`.

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
  block?: boolean; // true kortslutter kjeden
  message?: string; // vises ved blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres av preCall for å skrive om forespørselen
  modifiedResponse?: TValue; // returneres av postCall for å skrive om responsen
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

En guardrail signaliserer «ingen endring» ved å returnere enten `void`, `{}`, eller
`{ block: false }`. Å returnere en `modifiedPayload`/`modifiedResponse` erstatter
verdien som strømmer gjennom kjeden for nedstrøms guardrails.
`signal?: AbortSignal` bringer innringers livssyklus inn i guardrails. En avbrutt forespørsel er det overveide «fail-open»-unntaket: mediabroer stopper arbeidet og rydder opp uten å gjenopprette råmedier til et mål som er kjent for ikke å støtte det.

## Register (`registry.ts`)

Enkeltforekomsten `guardrailRegistry` eksponerer:

- `register(guardrail)` — legger til (eller erstatter med normalisert navn) en guardrail og
  sorterer på nytt etter stigende `priority`.
- `clear()` / `list()` — administrative hjelpefunksjoner.
- `runPreCallHooks(payload, context)` — itererer over aktive guardrails, sender
  payloaden gjennom `modifiedPayload`, og stoppes ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme flyt på responssiden.
- `resetGuardrailsForTests({ registerDefaults })` — tømmer tilstanden og registrerer eventuelt standardene på nytt for ren testisolasjon.

Begge kjørerne returnerer `{ blocked, payload|response, results, guardrail?, message? }`
der `results` er en array av `GuardrailExecutionResult`-poster som inkluderer
per-guardrail-feltene `blocked`, `skipped`, `modified`, `error` og `meta`,
noe som er nyttig for sporing.

### Deaktivering av guardrails per forespørsel

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggregerer en
deduplisert liste over guardrail-navn som skal hoppes over for den gjeldende
forespørselen. Det er fem kanaler, som leses i denne rekkefølgen og slås sammen
til én liste (første forekomst vinner ved deduplisering):

1. `apiKeyInfo.disabledGuardrails`
2. Request body `disabledGuardrails` (på toppnivå)
3. Request body `metadata.disabledGuardrails` (bare når `metadata` er et objekt)
4. Header `x-omniroute-disabled-guardrails`
5. Eldre header `x-disabled-guardrails`

Alle de fem kanalene slås sammen, inkludert de to headerne: å sende både
`x-omniroute-disabled-guardrails` og `x-disabled-guardrails` hopper over unionen av
listene deres, og en tom moderne header skjuler ikke lenger den eldre
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), fikset i
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Verdier kan være arrays av strenger eller en kommaseparert streng; navn trimmes
og normaliseres til små bokstaver med kebab-case (`pii_masker` → `pii-masker`),
og tomme oppføringer utelates. Resultatet sendes gjennom `context.disabledGuardrails`
til registeret, som hopper over matchende guardrails (`skipped: true` i `results`).

Deaktiveringslisten påvirker bare **registeret**. Prompt-injection `block`-modus er
en obligatorisk grense: mellomvaren for injeksjonsbeskyttelse
(`src/middleware/promptInjectionGuard.ts`) kaller `evaluatePromptInjection()`
uten noen innringerkontrollert deaktiveringsliste (det døde
`resolveDisabledGuardrails({ body })`-kallet som den pleide å gjøre, ble fjernet i
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), slik at en forespørsel
som deaktiverer `prompt-injection` fremdeles avvises i `block`-modus. Dette er
tilsiktet. Deaktiveringskanalene kontrolleres av innringeren (forespørselskropp,
metadata, headers), og en innringer må ikke kunne slå av en sikkerhetskontroll
som operatøren har satt opp
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Header-unionen
fra [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
endrer bare hvilke register-guardrails som hoppes over; den lar ikke en klient
omgå mellomvaren. Obligatoriske per-nøkkel- og per-gruppe-guardrail-retningslinjer
følges i v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Se [Coverage and limits](#coverage-and-limits).

## Utførelsesrekkefølge

For hver forespørsel som går gjennom `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts` (chat-familierutene som er oppført under
[Dekning og grenser](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` bygger hopplisten fra API-nøkkel, brødtekst og
   headerne.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kjører sikkerhetsrekkverker i stigende
   prioriteringsrekkefølge:
   - Deaktiverte sikkerhetsrekkverker registreres som `skipped`.
   - Hvert sikkerhetsrekkverks `preCall` kan omskrive nyttelasten via `modifiedPayload`.
   - Den første `block: true` kortslutter kjeden, og behandleren returnerer et
     avvisningssvar fra sikkerhetsrekkverket.
3. Den (potensielt omskrevne) nyttelasten flyter inn i komboruting og oppstrøms
   utsending.
4. **Kun ikke-strømmende:** etter at responsen er satt sammen,
   kjører `guardrailRegistry.runPostCallHooks(...)` den samme kjeden på
   responsen. `block: true` her forkaster oppstrømsresponsen og returnerer HTTP 400. Strømmede responser hopper helt over dette trinnet.

Sikkerhetsrekkverker som kaster feil, registreres med `error: <message>` og logges via
`logger.warn`, men kjeden fortsetter – "fail-open" av design.

## Dekning og grenser

Sikkerhetsrekkverkregisteret er kun koblet inn i chat-pipelinen. Disse grensene er
fastlåst av `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` og
`tests/unit/guardrail-pipeline-characterization.test.ts`; oppdater disse testene
bevisst når oppførselen endres.

### Hvor hookene kjører

| Hook / kontroll                               | Kjører på                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                             | Forespørsler håndtert av `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (og `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, samt Telegram-chat-proxyen. Også dashboardets test-endepunkt `/api/guardrails/test`. En pre-call-blokkering returnerer HTTP 400. |
| `runPostCallHooks`                            | Kun **ikke-strømmende** chat-responser (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Strømmede responser når den aldri.                                                                                                                                                                                                                                                                                                         |
| Strømmende PII                                | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), koblet inn i `streamingPipeline.ts` når `PII_RESPONSE_SANITIZATION` er på. Dette er ikke et sikkerhetsrekkverk, så deaktiveringskanalene påvirker det ikke.                                                                                                                                                                                                                 |
| Mellomvare for injeksjonsbeskyttelse (legacy) | Hver `/v1`-rute som inneholder en ledetekst, inkludert chat-familien (se [rutedekning](#injection-guard-route-coverage--red-team-phase-8--block-d)). Kun ledetekstinjisering (prompt injection).                                                                                                                                                                                                                                          |

### Hva som ikke dekkes

- **Media-, embedding- og dataruter** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) når aldri registeret. Ingen
  PII-maskering, maskering av legitimasjon eller modalitetsbro kjører der. Deres eneste
  sjekk er den eldre mellomvaren for injeksjonsbeskyttelse.
- **Strømmede responser** får ingen sikkerhetsrekkverker etter kall: ingen `pii-masker` eller
  `credential-masker` etter kall, og ingen blokkering etter kall. Bare den strømmende PII-
  transformasjonen gjelder (når `PII_RESPONSE_SANITIZATION` er på). En legitimasjon som
  ekkoes tilbake i en strømmende respons, blir ikke redigert.
- **Deaktiveringskanaler vs. mellomvaren (med vilje):** mellomvaren evaluerer
  ledetekstinjisering med sitt eget kall til `evaluatePromptInjection()`, uten å
  sende med noen deaktiveringsliste kontrollert av anroperen. `block`-modus er en obligatorisk
  grense som anroper-kontrollerte deaktiveringer ikke kan omgå, inkludert på ruter i chat-familien
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Å deaktivere
  `prompt-injection` hopper bare over sikkerhetsrekkverket i registeret.

### Hva som ser en respons før post-call

På stien uten streaming er rekkefølgen: minneuttrekking → utførelse av innebygde verktøy
→ post-call-sikkerhetsrekkverker → utgang fra post-call-blokkering → lagring i semantisk cache.

- **Minneekstraksjon** og **verktøykjøring** ser responsen før post-call-beskyttelsesmekanismer kan omskrive eller blokkere den. Siden [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), kjører minneekstraksjon den ekstraherte teksten gjennom `sanitizePII` når `PII_RESPONSE_SANITIZATION` er på (både for strømming og ikke-strømming), men en respons som post-call senere blokkerer, har likevel blitt gjort tilgjengelig for minne og verktøy.
- **Den semantiske cachen** lagrer responsen etter post-call, slik at den lagrer den omskrevne responsen, og en blokkert respons blir aldri cachet. Cache-poster er nøkkelbasert per API-nøkkel.

## Konfigurasjon

Miljøvariabler som leses av de innebygde sikringstiltakene:

| Variabel                              | Brukes av                 | Effekt                                                                                                               |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Sett til `false` for å deaktivere deteksjon fullstendig.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injiseringretningslinje: `warn`, `block` eller `log`. Den eldre verdien `redact` omskriver ikke injiseringstekst.    |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modus for injiseringsbeskyttelsen; også et funksjonsflagg i databasen som **overstyrer** miljøvariablene (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimum alvorlighetsgrad som `MODE=block` avviser: `high` (standard), `medium` eller `low`.                          |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Eldre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Når `true`, blir PII i forespørsler maskert (uavhengig av injiseringsmodus).                                         |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kontrollerer atferd for maskering på svarsiden.                                                                      |

Sikringstiltakene for Modality Bridge leser kjøretidskonfigurasjon fra det databaserte innstillingslageret (`getSettings()`), ikke miljøvariabler. Visjons primørnøkler er `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`. De eldre `visionBridge*`-nøkklene aksepteres kun som den dokumenterte lesereserven for én syklus; dashbord-skrivinger bruker primørnøkklene. Standardverdier og reserveløsningen ligger i `src/shared/constants/modalityBridgeDefaults.ts`, med eldre konstanter behersket i `src/shared/constants/visionBridgeDefaults.ts`.

Lyd bruker `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips`, i tillegg til de delte `modalityBridgeCache*`-innstillingene. Lyd har ingen reserveløsning for eldre nøkler fordi disse nøklene ble introdusert med Modality Bridge-skjemaet.

Video bruker `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` og `modalityBridgeVideoTimeout`, i tillegg til de delte `modalityBridgeCache*`-innstillingene. Den er deaktivert som standard fordi FFmpeg/ffprobe er valgfrie operasjonelle avhengigheter, og rammeteksting gir økt latens og modellkostnad.

## Tilpassede guardrails

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

Trinn:

1. Opprett `src/lib/guardrails/myGuardrail.ts` som utvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtid (push fra `registerDefaultGuardrails`) eller
   kall `guardrailRegistry.register(...)` ved kjøring — registret erstatter
   ethvert tidligere guardrail med samme normaliserte navn.
4. Legg til tester under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Bruk `resetGuardrailsForTests()` mellom tester for å starte fra en kjent tilstand.
Send med `{ registerDefaults: false }` for å starte med et tomt register og
bare registrere guardrails som testes. Vision Bridge godtar avhengighetsinjisering
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge eksponerer de
tilsvarende sømmene for innstillinger, funksjonalitet, valg av STT-modell,
sjekk av påloggingsinformasjon og transkripsjon. Testene kan derfor kjøre
gjennom begge flyter uten tilgang til database eller nettverk.

## Se også

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — delt detektor som driver
  prompt-injisering og PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — standardverdier for Vision Bridge og
  modelliste for tvunget bro
- `src/shared/constants/modalityBridgeDefaults.ts` — delte kjøretidsstandardverdier for Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (circuit breaker, nedkjølingsperioder)
- `docs/reference/ENVIRONMENT.md` — full referanse for miljøvariabler

## Rutedekning for injeksjonsbeskyttelse & red-team (Fase 8 · Blokk D)

Injeksjonsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dekker alle ruter
som aksepterer bruker-prompter. Den respekterer `INJECTION_GUARD_MODE` (standard `warn` = bare logg;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardmodus |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Tekstekstraksjon (`extractMessageContents`) dekker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerer at hver rute blokkerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kjører sonder (hopper over uten hemmelighet).
`moderations` er inkludert for konsistens. Blokkeringmodus er en obligatorisk grense: `evaluatePromptInjection()`
ignorerer deaktiveringslisten per forespørsel som mellomvaren sender til den, slik at `disabledGuardrails` gjør
**ikke** at en rute unntas fra den ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Den nattlige arbeidsflyten (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utløsning) har to jobber:

- **`promptfoo-guard` (blokkerende)** — kjører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert adversarielle tilfelle (f.eks. "ignore all
  previous instructions…", DAN-lignende jailbreaks) sjekker at responsen inneholder
  `error.code === "SECURITY_001"`, dvs. at beskyttelsen faktisk avviste forespørselen.
- **`garak` (veiledende)** — kjører garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Sikret av en
  tilbyderhemmelighet (`PROMPTFOO_PROVIDER_KEY`); hoppes over elegant og har suffikset
  `|| true`, slik at den rapporterer uten å feile CI.

Dekningen for hjelperen for beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
spenner over hver prompt-bærende `/v1`-rute; prompt-tekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.

# Guardrails (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sursa de adevăr:** `src/lib/guardrails/`
> **Ultima actualizare:** 2026-10-17 — v3.8.52 (adăugate [Acoperire și limite](#coverage-and-limits):
> ce rute și căi de răspuns ating hook-urile, antetele de dezactivare combinate (#16412), modul
> de blocare a injecției ca graniță obligatorie (#16413) și ce vede un răspuns înainte de post-call)

Guardrails impun transformări de siguranță, politici și conținut la granița
dintre OmniRoute și furnizorii din amonte. Fiecare guardrail poate inspecta (și
opțional respinge, transforma sau adnota) payload-urile cererilor (`preCall`) și
răspunsurile din amonte (`postCall`).

Sistemul este **fail-open**: dacă un guardrail aruncă o eroare în timpul execuției, registrul
înregistrează erorile și continuă cu următorul guardrail în loc să facă să eșueze
cererea. Blocarea este o decizie explicită (`block: true`), niciodată o întâmplare.
Singura excepție este o cerere întreruptă: când `signal`-ul apelantului este întrerupt,
un guardrail care aruncă o eroare respinge execuția hook-ului în loc să fie omis.

Hook-urile **nu** rulează pe fiecare rută sau pe fiecare răspuns. Citiți
[Acoperire și limite](#coverage-and-limits) înainte de a vă baza pe un guardrail ca
mecanism de control al securității.

## Guardrails integrate

Registrul încarcă automat șase guardrails în ordinea priorității la import
(consultați `registry.ts` → `registerDefaultGuardrails()`):

| Prioritate | Nume                | Etape          | Fișier                |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numerele de prioritate mai mici rulează **mai întâi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Modelul de bază GLM 5.3 și `glm-5.3-{low,high,max}` au metadate
de registru/specificație `supportsVision:false` explicite. Variantele GLM 5.3 Flash
rămân modele cu viziune nativă. Ruta `/v1/messages` a Claude Code intră în
lanțul partajat de guardrails pre-call `handleChat` **înainte** de
traducerea Claude-la-OpenAI; imaginile imbricate din rezultatele uneltelor `Read`
trebuie descrise sau gestionate înainte ca acea traducere să le ridice în conținutul
`image_url` OpenAI (#17069).

Interceptează cererile care conțin imagini destinate **modelelor fără capacitate de viziune** și fie
redirecționează întreaga cerere către un model capabil de viziune, fie înlocuiește părțile de imagine
cu descrieri text produse de un model de viziune configurabil înainte
de apelul din amonte. Acest lucru permite furnizorilor exclusivi de text să gestioneze în mod transparent
payload-urile multimodale.

Flux:

1. Omite dacă modelul țintă acceptă deja viziunea (decât dacă apare în
   lista de punte forțată `isVisionBridgeForcedModel`).
2. Extrage părțile de imagine prin `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), care deleagă către **detectorul de conținut media
   unificat** `detectMediaParts()` din `open-sse/utils/mediaParts.ts` —
   singura sursă de adevăr partajată cu filtrul de compatibilitate combo.
   Extracția este permisă explicit pentru formele pe care `replaceImageParts` le poate reconecta
   (contractul extracție↔înlocuire): `image_url` pentru OpenAI,
   `source.type:"base64"` pentru Anthropic, `source.type:"url"` pentru Anthropic URL și `input_image` pentru Responses
   API. Imaginile potrivite imbricate în interiorul `tool_result.content`
   din Claude Code și al ieșirilor uneltelor Responses sunt de asemenea extrase și
   înlocuite la căile lor originale; formele care conțin doar indicatori sunt materiale pentru
   filtrul combo și nu sunt extrase.
   Omite dacă nu se găsește niciuna.
3. Rezolvă configurația de rulare prin `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): noile chei de setări `modalityBridge*`
   câștigă; cheile vechi `visionBridge*` rămân o **alternativă de rezervă pentru un singur ciclu**
   (fereastră de rollback). Omite înainte de orice parcurgere media când puntea este dezactivată.
4. Selectorul de mod (`modalityBridgeVisionMode`, a se vedea tabelul de mai jos) decide
   între redirecționare și descriere. Redirecționarea returnează `modifiedPayload` doar cu `model`
   schimbat, plus metadatele `{ rerouted, fromModel, toModel, imagesKept }`.
5. Calea de descriere: limitează numărul de imagini la `maxImages`, compune promptul conștient de sarcină,
   consultă memoria cache de descriere, apelează modelul de viziune **în paralel**
   (`Promise.allSettled`) și inserează părți text `[Image N]: <description>`
   în locul acestora. O descriere eșuată returnează `null`: imaginea brută este păstrată pentru
   ținte necunoscute/capabile de viziune (#4012), dar o **țintă directă confirmată exclusiv text**
   sau un combo fără viziune primește în mod explicit
   un text substitut `(unavailable — no vision-capable provider connected)` pentru
   fiecare imagine nedescrisă, inclusiv eșecurile parțiale și imaginile care depășesc
   limita apelului de descriere (#17069). Rezerva existentă pentru eșecul total al descrierii combo
   rămâne în vigoare (#8430).
6. Returnează `modifiedPayload` + metadate (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de mod (`modalityBridgeVisionMode`)

| Mod        | Implicit | Comportament                                                                                                                                                                                                                                                                                                                                               |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Heuristică moștenită, lăsată neschimbată (#6640/#7204): modelele non-combo/`auto/` sunt redirecționate către cel mai bun model de viziune, exceptând cazul în care modelul original are deja credențiale utilizabile (caz în care se face descriere); țintele combo fac întotdeauna descriere.                                                             |
| `describe` |          | Întotdeauna descriere — blocul de redirecționare este omis în întregime; modelul ales de utilizator răspunde întotdeauna.                                                                                                                                                                                                                                  |
| `reroute`  |          | Forțează redirecționarea: protecția pentru modelul cu credențiale păstrate este ocolită. Protecția pentru credențiale a **țintei** de redirecționare se aplică în continuare — atunci când nu există nicio țintă de viziune utilizabilă, bridge-ul blochează cu o eroare clară în loc să descrie sau să trimită imagini brute către o țintă exclusiv text. |

Modurile forțate se scurtcircuitează **înainte** ca euristica auto să ruleze; comportamentul `auto` este identic la nivel de octet cu garda pre-PR-1.

#### Domeniul de aplicare al cheii API (`visionBridgeKeyScope.ts`)

Atunci când cheia API a apelantului restricționează `allowedConnections`, pool-urile de cote (`allowedQuotas`) sau modelele (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge-ul alege doar modele de redirecționare și descriere pe care cheia le poate folosi, pe conexiuni pe care cheia le poate folosi. Apelul de descriere trece apoi întotdeauna prin bucla internă (self-loop) OmniRoute cu antetul `x-omniroute-self-loop-key-id`, astfel încât cererea de chat primită aplică din nou politica de conexiune și model a acelei chei. `enforceApiKeyPolicy()` respectă acel antet numai împreună cu token-ul (bearer) al buclei interne, astfel încât poate doar să restrângă accesul, iar un id care nu se rezolvă este respins.

Dacă nu este permis niciun model de viziune pentru cheie, o **țintă confirmată exclusiv text** respinge cererea de imagine local cu un cod HTTP 400 clar, în loc să forwardeze octeții imaginii către un sistem upstream incapabil (#17069). Pentru țintele cu capabilități de viziune necunoscute sau native, calea de descriere își păstrează comportamentul anterior de eșec deschis (fail-open) (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Cererile fără cheie și cheile fără aceste restricții se comportă exact ca înainte.

#### Prompt de descriere conștient de sarcină (`modalityBridgeVisionTaskAware`)

Implicit **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) adaugă textul **ultimului mesaj al utilizatorului** (trunchiat la 500 de caractere) la promptul de descriere de bază, direcționând descrierea către ceea ce a întrebat efectiv utilizatorul (modelul codex-vision-proxy) și solicitând modelului de viziune să transcrie textul vizibil. Cu indicatorul oprit — sau fără text de la utilizator — promptul de bază este utilizat neschimbat.

Propria cerere compatibilă cu OpenAI a buclei interne de descriere (`callVisionModelSingle()` din `visionBridgeHelpers.ts`) solicită întotdeauna `image_url.detail: "high"` — necondiționat, pentru fiecare apelant/furnizor, fără a fi condiționată de vreun semnal de la client. Eșantionarea cu detaliu scăzut degradează precizia OCR exact pentru sarcina de transcriere a textului pe care o cere acest prompt, astfel încât apelul de descriere în sine cere întotdeauna detalii ridicate, indiferent de nivelul de detaliu utilizat de cererea inițială de intrare. Acest lucru afectează doar corpul cererii interne de descriere; nu schimbă modul în care OmniRoute redirecționează propriul `image_url.detail` al apelantului la cererea principală — valoarea implicită respectivă este aplicată separat și numai pentru clienții OpenCode detectați, în `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ramura cu format de virgulă (wire-format) Anthropic a buclei interne de descriere nu are niciun câmp `detail` și nu este afectată de niciuna dintre valorile implicite.

#### Limită pentru ieșirea de descriere (`modalityBridgeVisionMaxChars`)

| Cheie                          | Implicit | Interval          |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` sau 100–50000 |

`0` (implicit) înseamnă **fără limită** — descrierea returnată de `callVisionModel()` este transmisă neschimbată, păstrând comportamentul existent. Orice valoare din intervalul 100–50000 trunchiază descrierea cu un sufix `…` înainte ca aceasta să fie reintrodusă ca `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` din `src/lib/guardrails/visionBridge.ts`). Măriți această valoare pentru sarcini OCR bogate în detalii, unde modelul downstream are nevoie de transcrierea completă; micșorați-o pentru a limita utilizarea de tokenuri la modelele de viziune cu multe detalii verbale. Câmpul din panou (dashboard) se află în panoul Advanced al tabului Vision (`modality-bridge-max-chars` din `ModalityBridgeVisionTab.tsx`) și limitează orice valoare între 1 și 99 la pragul minim de 100, lăsând însă un `0` explicit neschimbat — `0` este o valoare Zod validă în sine (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nu doar valoarea implicită „neconfigurată”.

#### Cache pentru descrieri (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL în memorie pentru rezultatele descrierii, partajat la nivelul întregului proces. Cheie = `sha256(imageRef + composedPrompt + configuredBridgeModel)` cu încadrare cu prefix de lungime (fără coliziuni la limitele câmpurilor). Componenta modelului este modelul de bridge **configurat**, nu modelul care a răspuns efectiv — `callVisionModel` poate reveni la o alternativă (fallback) internă, iar generarea de chei per încercare ar fragmenta cache-ul. Descrierile eșuate nu sunt niciodată salvate în cache. Setări:

| Cheie                           | Implicit | Interval |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Normalizarea imaginilor la distanță (descriere self-loop / preluare base64)

Atunci când bridge-ul preia singur o imagine **la distanță** — auto-apelul de descriere Anthropic și conversia base64 în formatul claude-wire (`ensureBase64ImagesForClaudeWire`), ambele prin `fetchRemoteImageAsDataUri()` din `visionBridgeHelpers.ts` — URI-ul de date rezultat este trecut prin `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) înainte de a fi încorporat în cererea către modelul de viziune. Imaginile supradimensionate sunt reduse la o **margine lungă de 2048px** (potrivindu-se cu limita de redimensionare pe care OpenAI/Anthropic o aplică deja pe server), ceea ce reduce octeții de încărcare/latența fără a schimba ceea ce vede modelul de viziune. Redimensionarea folosește `sharp`, încărcat printr-un import dinamic: pe o platformă unde binarul său nativ eșuează să se încarce, `normalizeDataUri()` **nu aruncă niciodată erori** — revine la trecerea directă a octeților originali, astfel încât calea de descriere/conversie base64 să funcționeze întotdeauna. Octeții care nu sunt imagini (o preluare care nu a returnat o imagine decodabilă) sunt, de asemenea, lăsați neschimbați. Această normalizare se aplică doar imaginilor pe care bridge-ul le preia pentru propriul său auto-apel — nu este aplicată niciodată payload-ului brut de trecere al apelantului, în conformitate cu principiul mutației exclusiv pe bază de opt-in (Regula Strictă #20).

#### Schema setărilor + migrare

Noile chei `modalityBridge*` sunt validate cu Zod în `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio-ul `modalityBridgeCache*` și grupul `modalityBridgeAudio*` utilizat de Audio Bridge. Migrarea `141_modality_bridge_settings.sql` copiază valorile vechi existente `visionBridge*` în noile chei corespunzătoare (idempotent, nu suprascrie niciodată o valoare `modalityBridge*` setată de operator); cheile vechi rămân acceptate ca fallback de citire pentru un ciclu de lansare.

#### Antet de transparență + statistici

Răspunsurile transformate prin descriere poartă antetul `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (construit de `buildModalityBridgeHeader()` în `modalityBridge/bridgeStats.ts`, aplicat de `withModalityBridgeHeader()` în `src/sse/handlers/chatHelpers.ts`). Cererile redirecționate **nu** primesc niciun antet — payload-ul a rămas neschimbat, iar schimbarea modelului este deja vizibilă în câmpul `model` al corpului răspunsului.

`GET /api/modality-bridge/stats` (autentificare de management, același nivel ca `GET /api/settings`) returnează contoarele în memorie per-modalitate `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pentru `vision`, `audio` și `video`. `averageLatencyMs` folosește `latencySamples`, nu toate încercările, ca numitor; o operațiune fără măsurare a timpului nu generează artificial un eșantion de zero milisecunde. `bridged` rămâne aliasul compatibil în sens invers pentru conversiile reușite; încercările eșuate nu îl incrementează. Contoarele se resetează la repornirea procesului prin design (telemetrie, nu contabilitate).

#### Configurare Dashboard

Pagina dedicată din dashboard este `/dashboard/settings/modality-bridge`. Filele `Vision`, `Audio` și `Video` accesibile prin URL își păstrează parametrii de interogare în timp ce comută valoarea `tab`. Fila Vision expune activarea, modul, selecția modelului (inclusiv valoarea implicită automată), prompt-ul conștient de sarcină, limitele avansate de timeout/imagine/lungime a descrierii/cache, contoarele de rulare și o cerere de eșantion protejată. Fila Audio este, de asemenea, activă: expune activarea, un selector de modele exclusiv STT cu Auto, limitele de timeout/clip maxim, contoarele audio și un test de eșantion `input_audio`. Fila Video este funcțională: raportează starea de rulare FFmpeg/ffprobe — una dintre cele patru stări explicite ale interfeței de utilizator (`unknown` în timp ce testul este în curs sau nu s-a putut finaliza, `restricted` pe o gazdă de dashboard care nu este loopback unde testul este omis pe partea clientului, `unavailable` odată testat și confirmat ca lipsă, sau `available` împreună cu versiunile FFmpeg/ffprobe) — persistă limitele de activare/model/cadru/video/timeout, filtrează selectorul de modele pentru a include doar modelele capabile de viziune și expune contoarele video.

Fosta cartelă Vision Bridge din setările AI este un link de compatibilitate către noua pagină; aceasta nu mai conține o a doua copie a formularului. Media Providers leagă, de asemenea, fluxurile de lucru Image-to-Text și Speech-to-Text de filele corespunzătoare Modality Bridge, fără a elimina terenul de joacă Speech-to-Text existent.

**Ocolirea admiterii prin self-loop:** atunci când apelul de descriere este rutat prin propriul self-loop `/v1` al OmniRoute (model de furnizor non-standard), sub-cererea trimite `x-omniroute-admission-bypass: internal` și este autentificată cu credențialul self-loop rezolvat — santinela locală `sk_omniroute` în modul local, sau cheia de mediu configurată de operator `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), astfel încât implementările cu `REQUIRE_API_KEY=true` să poată rula în continuare apelul de descriere. Ocolirea este onorată doar pentru acele credențiale exacte, astfel încât clienții externi să nu poată folosi antetul pentru a ocoli admisia.

Valorile implicite vechi se află în `src/shared/constants/visionBridgeDefaults.ts`; noile valori implicite pentru mod/conștientizare de sarcină/cache și resolverul de setări se află în `src/shared/constants/modalityBridgeDefaults.ts`. Mecanismul de protecție (guardrail) expune o opțiune de constructor `deps`, astfel încât testele să poată injecta implementări simulate pentru `getSettings` și `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceptează cererile de chat care conțin conținut audio înainte ca acestea să ajungă la o țintă despre care nu se știe că acceptă intrare audio. Nu redirecționează niciodată cererea de chat: părțile audio sunt transcrise prin intermediul endpoint-ului multipart existent compatibil cu OpenAI, iar modelul de chat ales continuă cu transcrierile text.

Flux:

1. Rezolvă `supportsAudio` prin `getResolvedModelCapabilities()`. Metadatele explicite din registrul de furnizori au prioritate, urmate de metadatele statice ale modelului, apoi de `modalities_input` sincronizat. O listă de intrări declarată fără `audio` este `false`; lipsa dovezilor de capabilitate rămâne `null`. Atât `false`, cât și `null` activează bridge-ul conservator, în timp ce `true` îl ocolește.
2. Rezolvă setările `modalityBridgeAudio*` și extrage părțile audio de nivel superior care pot fi îmbinate din fiecare mesaj prin intermediul detectorului partajat `detectMediaParts()`. Formatele pe fir acceptate sunt `input_audio`, `audio_url` și `source.media_type: "audio/*"` de la OpenAI. Sunetul imbricat este detectat pentru rutare, dar nu este eliminat de calea de îmbinare. Lucrul este limitat de `modalityBridgeAudioMaxClips`; părțile ulterioare rămân neschimbate.
3. Respectă un `provider/model` configurat sau permite funcției `selectAudioBridgeModel()` să parcurgă `AUDIO_TRANSCRIPTION_PROVIDERS` în ordinea stabilă a catalogului și să selecteze primul model cu o credențială de furnizor activă și utilizabilă.
4. `callAudioTranscription()` convertește audio-ul bazat pe base64/data-URI într-un `file` multipart sau descarcă un `audio_url` la distanță prin intermediul protecției de ieșire exclusiv publice cu fixare DNS și o limită de 25 MB. Apoi trimite prin POST fișierul și modelul selectat către bucla locală `/v1/audio/transcriptions`, autentificată cu `resolveSelfLoopBearer()`. Ruta de transcriere existentă efectuează căutarea normală a credențialelor, gestionarea perioadei de răcire/limitării ratei (cooldown/rate-limit) și trimiterea către furnizor.
5. Apelurile reușite își înlocuiesc părțile cu `[Audio N]: <transcript>`. Apelurile rulează cu `Promise.allSettled`: o eșuare individuală păstrează acea parte audio originală (contractul #4012). Dacă fiecare apel eșuează și se dovedește că ținta are `supportsAudio === false`, părțile devin `[Audio N]: (unavailable — no STT provider connected)` (contractul #8430). Pentru o țintă necunoscută (`null`), un rezultat în care totul eșuează rămâne neschimbat. O țintă dovedită ca fiind doar text, fără nicio credențială STT utilizabilă, primește același stub explicit fără a iniția un apel de rețea.

Transcrierile reușite utilizează cache-ul LRU/TTL Modality Bridge la nivel de proces. Cheia combină referința audio, eticheta stabilă a operațiunii `audio-transcription` și modelul STT selectat; eșecurile nu sunt niciodată puse în cache. Încercările audio actualizează contoarele partajate `bridged`, `cacheHits`, `failures` și `lastUsedAt`. Răspunsurile transformate conțin `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; cererile neatinse nu primesc un segment Audio Bridge.

Setările de runtime sunt stocate în baza de date și validate cu Zod:

| Key                           | Default | Range           |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto sau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Cache-ul partajat rămâne controlat de `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` și `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptează părțile video de nivel superior din `messages` în Chat Completions și `input` în Responses API înainte de a fi apelată o țintă fără suport video nativ cunoscut. Formatele acceptate sunt `input_video`, `video_url`, `video_source`, URL-uri HTTPS și URI-uri de date `data:video/*;base64,...`. Numele simple de fișiere din text nu sunt tratate ca video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gestionează parcurgerea cererilor, verificarea capabilităților/politicilor, agregarea pe cerere și payload-ul răspunsului. Activitatea per-video — achiziția, cache-ul pentru rezultatul complet, descrierea unei secvențe de cadre (care combină orice transcriere audio declarată de apelant) și metricele/anularea/curățarea per-încercare — este ascunsă în spatele `processVideoPart` din `videoBridgePipeline.ts`, apelat o dată per parte video în interiorul buclei din `preCall`. De asemenea, acel modul definește limitele explicite ale porturilor `VideoMediaBrokerPort` (achiziționarea de octeți și extragerea cadrelor eșantionate), `VideoAudioTranscriptionPort` (combinarea unei transcrieri audio declarate de apelant cu subtitrările eșantionate) și `VideoDrilldownPort` (limita de persistență pentru detalierea cadrelor; încă neintegrată în `processVideoPart` — doar ruta separată `/api/modality-bridge/video/drilldown` scrie în prezent intrări de detaliere).

Calea de cerere publică `/v1` nu importează și nu apelează niciodată un subproces. Videoclipurile la distanță sunt descărcate sub o limită de 50 MiB; videoclipurile base64 inline au o limită conservatoare decodată de 36 MiB per video, astfel încât anvelopa model/mesaje/încadrare să poată rămâne în limita publică de admisie a cererilor JSON de 50 MiB. Estimările privind lungimea inline și dimensiunea decodată sunt verificate înainte de alocare. HTTPS este obligatoriu pentru URL-ul inițial de la distanță și pentru fiecare redirecționare, utilizând garda de ieșire publică existentă cu fixare DNS. Octeții traversează apoi exact limita internă a brokerului `POST /api/modality-bridge/video/extract`. Această rută este atât `LOCAL_ONLY`, cât și `SPAWN_CAPABLE`, acceptă doar o cerere autentificată per proces pe o buclă de întoarcere de încredere și nu acceptă niciodată un URL, o cale de sistem de fișiere, un executabil sau o listă de argumente. Conducta de dimensiune a corpului API și cititorul incremental al corpului gestionarului impun în mod independent o limită de intrare a brokerului de 50 MiB. Coada sa limitată rulează o singură extracție pe rând, permite patru joburi în așteptare și limitează intrarea în așteptare la 100 MiB.

În interiorul brokerului, `ffprobe` citește un fișier local privat; lista permisă de formate fixe exclude formatele de playlist și manifest. Pentru containerele din familia MOV permise, referințele externe de date MOV rămân dezactivate în mod implicit, iar comanda fixă nu le activează. Atât `ffprobe`, cât și `ffmpeg` utilizează lista albă de protocoale exclusiv `file`, un singur fir de execuție, tablouri de argumente fixe, fără shell și executabile rezolvate din `PATH`. Fluxurile de copertă de tip imagine atașată nu sunt candidați redabili. Toate fluxurile redabile trebuie să îndeplinească limitele, iar un flux implicit explicit este preferat înaintea alternativei deterministe cu cel mai mic indice. Videoclipurile sunt limitate la 600 de secunde, 8.192 de pixeli pe dimensiune și 33.554.432 de pixeli sursă. FFmpeg eșantionează 1–16 cadre JPEG de la punctele de mijloc, reduce marginea lungă la cel mult 1.024 de pixeli fără a mări dimensiunea intrărilor mai mici și nu primește niciodată un URL. Eșantionarea este `uniform` în mod implicit. Politicile opționale `scene_aware` și experimentale `segment_aware` efectuează o trecere FFmpeg fixă suplimentară peste fluxul local deja validat, selectează marcaje temporale de scenă `showinfo` mărginite și revin în mod determinist la aceleași puncte de mijloc uniforme în caz de eșec al detectorului, expirare a timpului, ieșire malformată sau un set de candidați gol. Modul conștient de segmente alocă eșantioane pentru punctele de mijloc proporțional cu intervalele de scenă validate; dovezile și comportamentul de rezervă pentru modul conștient de segmente sunt detaliate mai jos. Limita strictă de 16 cadre este aplicată după selecție în fiecare politică. Atunci când o cerere conștientă de scenă are un buget de doar un singur cadru, aceasta utilizează punctul de mijloc uniform al videoclipului complet activ sau al ferestrei de focalizare și raportează `policyEffective: uniform`: un singur cadru de scenă selectat nu poate păstra ambele capete temporale. Un apelant poate furniza opțional o fereastră de focalizare finită (`start`/`end` secunde); limitele sunt fixate la durata conținutului media, ferestrele inversate sau nefinită sunt respinse, iar toate politicile de eșantionare sunt efectuate numai în interiorul intervalului normalizat. Fereastra rezultată este inclusă în metadatele de eșantionare și în prefixul descrierii neverificate, astfel încât modelele din aval să poată distinge un extras focalizat de cronologia completă.

Focalizarea semantică pentru subtitrări este o setare separată și explicită. Modul de analiză implicit `full` păstrează promptul de cadru existent și nu trimite niciodată textul cererii către modelul de subtitrare. În modul `focused`, bridge-ul citește doar cel mai recent `text`/`input_text` nevid scris de utilizator din același container Chat sau Responses, îl normalizează la NFC, reduce caracterele de control și spațiile albe și îl limitează la 500 de puncte de cod Unicode. Un rezultat gol revine la promptul exact `full`. O indiciu utilizabil este serializat ca JSON într-un bloc dedicat de context pentru utilizatori neverificați și poate doar să acorde prioritate detaliilor observabile; nu poate anula avertismentul separat împotriva urmării instrucțiunilor vizibile sau audibile în conținutul media. Focalizarea textuală nu deduce niciodată `start`/`end` și nici nu schimbă eșantionatorul temporal.

#### FU-07 dovezi structurale ale segmentului

`segment_aware` utilizează o trecere de pre-analiză mărginită peste fluxul video local deja validat. Lanțul de filtre fix scalează mai întâi la o lățime de cel mult 320 de pixeli, detectează schimbările de scenă și intervalele înghețate, apoi eșantionează la 1 cadru pe secundă pentru neclaritate, luma medie și informații spațiale/temporale. Trecerea este limitată la 600 de eșantioane structurale, un singur fir de execuție FFmpeg/filtru, aceleași liste albe de protocoale exclusiv `file` și containere, o limită de ieșire a procesului de 1 MiB și cel mult 30 de secunde în cadrul termenului-limită/anulării partajate a brokerului. Aceasta nu acceptă niciodată o comandă, un filtru, o cale sau un URL din cerere.

Valorile structurale sunt dovezi de eșantionare deterministe, nu o înțelegere semantică a videoclipului. Ele nu deduc subiecți, acțiuni, subtitrări, vorbire sau intenția utilizatorului. Limitele de scenă și de îngheț formează segmente; acoperirea de îngheț, neclaritatea, expunerea, detaliile spațiale și schimbarea temporală influențează doar modul în care este alocat bugetul existent de 1–16 cadre. Un segment complet înghețat este limitat la un singur cadru, în timp ce segmentele neînghețate concurează pentru bugetul rămas. Atunci când limitele depășesc numărul de cadre, se păstrează o acoperire uniformă a cronologiei, astfel încât tăierile rapide de la început să nu poată ascunde un segment final lung. Limitele de scenă aflate în cadrul rezoluției de analiză de 1 secundă a unei limite de îngheț sunt comasate.

Filtrele lipsă, dovezile malformate/goase, o eroare a detectorului sau expirarea timpului de pre-analiză mărginit trec în mod deschis la politica exactă cu puncte de mijloc uniforme. O anulare din partea apelantului sau un termen-limită al brokerului nu apelează la fail open: acesta termină subprocesul în curs de execuție, împiedică extragerea ulterioară a cadrelor, iar arborele temporar privat este eliminat în blocul `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generează fixture-uri FFmpeg reale și deterministe pentru economiile de apeluri de subtitrare de după deduplicare, alocarea bugetului pentru mișcare densă, dovezi de neclaritate/expunere/SI-TI, tăieri rapide cu o coadă lungă și fals pozitive de estompare treptată. Acesta înregistrează timpul de execuție efectiv pentru pre-analiză și, unde este disponibil `/usr/bin/time`, utilizarea CPU a procesului copil și vârful RSS. Verificările sale de calibrare sunt doar oracole structurale. Calitatea reală a modelului de subtitrare rămâne `HOLD` deoarece acest instrument de testare nu are un punct final autorizat sau un judecător înghețat. Economiile monetare rămân, de asemenea, `HOLD`, cu excepția cazului în care `--caption-cost-per-call-usd` furnizează o estimare pozitivă explicită per apel; scriptul nu fabrică niciodată niciunul dintre rezultate.

Fiecare cadru este limitat la 4 MiB, toate cadrele brute împreună la 23 MiB, iar răspunsul serializat al brokerului la 32 MiB. Un director temporar privat este șters în `finally`. OmniRoute nu include FFmpeg și nu acceptă o cale personalizată către executabil. Înainte de generarea descrierilor, bridge-ul aplică o etapă conservatoare de deduplicare vizuală: fiecare fișier JPEG este redus la un buffer în tonuri de gri de 16×16 și este comparat doar cu ultimul cadru păstrat. Pentru un buget de descrieri solicitat de peste un cadru, extracția furnizează un set limitat de candidați de până la dublul acelui buget și niciodată mai mult de 16 cadre. Limita solicitată este aplicată abia după deduplicare, primul și ultimul candidat selectat fiind păstrați în timpul subțierii finale atunci când bugetul este de cel puțin doi. Politica versionată `grayscale-16x16-mean-cells-v2` folosește valoarea mai mare dintre delta mediei de luminanță și raportul celulelor din miniatură a căror delta normalizată este de cel puțin 0,05. Pragul pentru duplicate este constanta 0,04, aleasă pentru predictibilitate în loc să fie expusă ca setare de rulare. Acest semnal secundar de contrast ridicat conservă mișcările mici și modificările de text vizibil pe care o comparație bazată exclusiv pe medie le poate ascunde. Erorile de comparator sau decodor eșuează deschis și mențin acoperirea. Metadatele de ieșire separă candidații extrași, cadrele utilizate cu succes și duplicatele vizuale eliminate.

O parte video marcată explicit poate solicita o fișă de contact cu marcaj temporal. Bridge-ul construiește o grilă JPEG de cel mult 4 coloane și 16 cadre. Fiecare celulă de 512 pixeli inscripționează marca temporală sursă într-o bandă inferioară cu contrast ridicat, în timp ce aceleași marcaje temporale rămân în metadatele textuale pentru asociere și audit ulterior. Fișierul JPEG complet rămâne limitat la 32 MiB. Dacă `sharp` nu poate decoda sau compune grila, bridge-ul revine la cadrele JPEG individuale; o întrerupere din partea clientului se propagă în continuare prin operațiunea de generare a fișei.

Dovezile de promovare sunt separate în mod deliberat de microbenchmark-ul de compoziție sintetică. `scripts/perf/video-bridge-contact-sheet-eval.ts` definește un cadru A/B cu versiuni de schemă pentru modele de viziune reale compatibile cu OpenAI. Acesta măsoară jetoanele raportate de furnizor, latența totală (inclusiv compoziția fișei), numărul de apeluri către model și retenția faptelor definite în manifest. Răspunsurile brute ale modelului nu sunt scrise în raport; sunt păstrate doar rezumatele criptografice SHA-256 și ID-urile faptelor potrivite. Cadrul nu efectuează niciun apel de rețea sau către un model plătit decât dacă se transmite `--execute-real` și sunt configurate `--model`, `OMNIROUTE_BASE_URL` și `OMNIROUTE_API_KEY`. Fără acea rulare reală explicită, verdictul său citibil de mașină rămâne `HOLD`; măsurătorile de sarcină utilă sintetică / număr de apeluri luate izolat nu constituie dovezi de promovare.

Apelanții pot atașa o matrice opțională `transcript.cues` la o parte video acceptată atunci când dispun deja de text aliniat. Fiecare indiciu trebuie să conțină `text`, un interval finit `start`/`end` în cadrul duratei analizate și o `source` permisă explicit (`client`, `embedded` sau `audio-bridge`); `confidence` are valoarea implicită `1` și trebuie să rămână între `0` și `1`. Indiciile duplicate exact sunt comasate. OmniRoute nu inițiază niciodată transcrierea din aceste metadate: indiciile validate sunt copiate în rezultatul descris împreună cu sursa, încrederea și intervalul și sunt redate ca observații neverificate alături de descrierile cadrelor. Textul invalid, care depășește intervalul sau care nu are proveniență este respins în loc să fie amestecat în fluxul de descrieri. Ambele canale de transcriere din corpul cererii normalizează proveniența furnizată la `client`, inclusiv etichetele auto-declarate `embedded` sau `audio-bridge`. Doar un adaptor deținut de server poate atribui acele etichete de încredere prin intermediul argumentului exclusiv în cod `trustedSource`; un câmp JSON dintr-o cerere nu poate accesa acel argument. Textul transcrierii rămâne conținut neverificat provenit din fișierele media, indiferent de proveniența sa, și nu trebuie să determine niciodată autorizarea.

Un apelant avansat poate furniza o pistă `audioTranscript` pentru același videoclip; aceasta este tratată ca text furnizat de client, nu ca dovadă a transcrierii de către server. Punctul de fuziune rulează observațiile vizuale și audio sub un singur termen limită și semnal de întrerupere, le ordonează pe o cronologie comună, comasează duplicatele exacte și raportează un rezultat parțial atunci când doar o singură parte reușește. Un `audioTranscript` invalid degradează la acel rezultat parțial — descrierea vizuală este păstrată, iar ramura audio înregistrează un cod de eșec sanitizat — în loc să eșueze întregul videoclip. Disponibilitatea pe fiecare ramură, fanionul parțial și codurile de eșec sanitizate sunt păstrate în rezultatul descris, în metadatele de siguranță (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), în metadatele cache-ului de rezultate și în contoarele de fuziune ale bridge-ului. Calea implicită Video Bridge nu apelează funcția de conversie a vorbirii în text și nu descarcă o a doua copie media; fără acea pistă explicită, rămâne doar video.

**Retenția transcrierilor (#12150 P1).** Acest lucru se aplică automat ori de câte ori Video Bridge (care este el însuși opțional) randează un indiciu de transcriere — nu există un semnal de retenție separat. Atunci când o cerere randează vreun indiciu de transcriere (un `transcript` declarat de apelant sau un `audioTranscript` fuzionat), mecanismul de protecție (guardrail) îl marchează ca `videoBridgeObserved` și produce o umbră redactată a descrierii video — o randare identică în care corpul de text liber al fiecărui indiciu este înlocuit cu `[redacted-video-transcript]`, construit prin substituirea câmpului de indiciu structurat înainte ca șirul să fie asamblat (niciodată prin parsarea textului aplatizat, astfel încât niciun conținut de indiciu — fie el adversarial sau obișnuit, inclusiv corpuri care conțin `]` cum ar fi `[inaudible]`/`[music]` — nu poate supraviețui). Corpul cererii din jurnalul de apeluri persistat schimbă fiecare parte de text derivată din video cu acea umbră redactată, potrivită prin egalitatea conținutului; ancorele `fullText` sunt recitite din payload-ul finalizat al mecanismului de protecție de dinaintea apelului, astfel încât potrivirea reușește în continuare după mecanismele de protecție din lanțul ulterior (măștile PII și pentru credențiale, prioritățile 10/95) care rescriu textul descrierii pe loc și după ce injecția de prompt de sistem/transfer/memorie remodelează matricea de mesaje. Corpul trimis în amonte către model rămâne neschimbat. De asemenea, o cerere observată nu populează nicio memorie durabilă (atât extracția derivată din cerere, cât și cea din răspuns sunt omise), astfel încât propriul răspuns al modelului nu poate ecou textul transcrierii în Memorie.

**Câmpuri video brute (#12430).** Atunci când bridge-ul este activat și suportul video nativ este necunoscut sau absent, câmpurile definite `transcript`/`audioTranscript` activează, de asemenea, `videoBridgeObserved`, chiar și după eșecul descrierii sau o limită `maxVideos`. Valorile `null` și șirurile goale contează; câmpurile absente și metadatele non-video nu. Copiile păstrate redactează aceste câmpuri sau omit cererea, iar cache-urile/Memoria sunt ocolite.

Pe acele căi de rezervă (fallback), indiciile valide ale apelantului devin părți acceptate `text`/`input_text` mai degrabă decât câmpuri non-standard ale furnizorului. Ambele piste furnizate de cerere rămân observații `client` neverificate, cu un avertisment explicit că videoclipul nu a fost descris și că marcajele temporale nu au fost verificate în raport cu conținutul media. Bugetele existente de 256 de indicii / 64 KiB în total și per indiciu se aplică în mod cumulat celor două piste; marcajele temporale trebuie să se încadreze în limita de 600 de secunde a brokerului și în orice fereastră de focalizare furnizată. Pistele nevalide sunt eliminate, nu redirecționate ca text arbitrar; o pistă soră validă poate fi în continuare utilizată, cu excepția cazului în care bugetul lor combinat este depășit. Câmpurile nule/goale nu adaugă text. Nicio preluare media sau transcriere nu este adăugată prin această rezervă. Câmpurile de extensie a transcrierii sunt eliminate din transportorul video de rezervă și din obiectele sale `video_url`/`source`. Lista albă de rețea OpenAI rămâne strictă; transportorii video nativi necunoscuți rămân disponibili, iar țintele cunoscute exclusiv text își păstrează markerii de siguranță. Umbrele de redactare structurate protejează textul transcrierii adăugat, în timp ce cererea originală aparținând apelantului rămâne neschimbată. Țintele cu suport nativ și bridge-urile dezactivate își păstrează comportamentul de ocolire existent.

Copii suplimentare păstrate utilizează același semnal de cerere observată. Instantaneul brut al cererii clientului de dinaintea mecanismului de protecție, cererea în așteptare din memorie și jurnalul cererilor respinse devreme înlocuiesc structural câmpurile de transcriere din părțile video; prompturile de tip șir sintetizate de etapele conductei (pipeline) și transferul de context sunt redactate la nivelul destinației corpului cererii persistat. Markerul persistent `video_content_removed` face ca o continuare `previous_response_id` să eșueze prin închidere (fail closed) în loc să reconstruiască textul care a fost eliminat intenționat. Dacă o cerere observată își pierde umbra de redactare per-parte înainte de a fi jurnalizată, sau chiar dacă una dintre mai multe umbre video eșuează să se potrivească după mutații ulterioare ale cererii, corpul cererii păstrate este omis în întregime în loc să se păstreze o transcriere parțial redactată.

Pentru o cerere observată, un răspuns al modelului ar putea cita orice porțiune a transcrierii fără o limită de indiciu structurată. Prin urmare, `responseBody` din jurnalul de apeluri persistat este înlocuit cu un marker de omisiune; artefactul detaliat al conductei (care poate include corpuri din amonte/client și bucăți de flux/stream) nu este păstrat. Cache-urile semantice, de idempotență și de redare a raționamentului ocolesc citirile și scrierile pentru acea cerere. Cererea furnizorului și răspunsul vizibil pentru client rămân neschimbate. Octeții timpurii de menținere în viață (keepalive) sunt drenați din tamponul temporar atunci când artefactul detaliat este omis. Avertismentul EventStream malformat al lui Kiro raportează doar numărul de octeți ai payload-ului, niciodată conținutul acestuia sau erorile brute ale parserului JSON.
Acest lucru nu pretinde că fiecare diagnostic neînrudit al furnizorului/pluginului a fost auditat; curățarea mai amplă a destinațiilor de scriere păstrate este urmărită în #11658.

Ciclul de viață intern `/api/modality-bridge/video/drilldown` este un substrat de cache separat, autentificat prin loopback/token. Fiecare operațiune necesită, de asemenea, un ID principal opac canonic. Înainte ca un apelant de producție să fie activat, el trebuie să derive acel ID din chiriașul (tenant) autentificat și nu trebuie să redirecționeze niciodată o valoare selectată de client. Cheile cache-ului leagă acel principal de ID-urile canonice de sesiune și de referință video, stochează doar cheile derivate prin SHA-256 și limitează atât citirile, cât și ștergerile la același principal. Cache-ul stochează cel mult 16 cadre JPEG derivate per intrare, le expiră după zece minute și acceptă citiri mărginite `start`/`end` sau ștergerea explicită a sesiunii.

Fiecare principal este limitat la 16 intrări și 64 MiB de date JPEG canonice. Aceste limite sunt independente de plafonul global de 64 de intrări / 256 MiB: presiunea asupra cotei principalului elimină doar intrările cel mai puțin utilizate recent ale acelui principal înainte ca eliminarea LRU globală să fie luată în considerare. Intrările expirate sunt eliminate atât din evidența principală, cât și din cea globală la activitatea din cache, în timp ce anularea și eșecul de validare nu confirmă o înlocuire parțială.

Cache-ul respinge Base64 necanonic, padding excesiv, conținut media non-JPEG, JPEG-uri malformate sau trunchiate și JPEG-uri care produc un avertisment în timpul unei decodări complete a imaginii `sharp` delimitate. Re-codifică fiecare imagine acceptată ca JPEG canonic, derivă lățimea și înălțimea din octeții decodați în loc să aibă încredere în câmpurile apelantului și elimină orice octeți poligloti suplimentari de la sfârșit în loc să îi păstreze. Doar bufferul comprimat canonic delimitat este contorizat la ambele cote. Limita protocolului JSON include overhead-ul Base64 pentru plafonul de intrare decodată de 32 MiB. Fiecare derivare stocată înregistrează formatul/rezoluția JPEG validate, politica de eșantionare, versiunea derivării, momentul creării, hash-ul conținutului calculat de server și referința părintelui hash-uită, plus hash-ul conținutului părintelui primit de la apelantul de încredere. Anularea este verificată între fazele asincrone de decodare/hash înainte de confirmarea atomică în cache.

Această tranșă nu conectează încă un producător de producție la rută și nu oferă selecția de variante cu rezoluții multiple. Prin urmare, calea transparentă a cererii către Video Bridge nu implică nicio muncă suplimentară, în timp ce derivarea principală legată de chiriaș și ciclul de viață complet cu rezoluții multiple FU-08 rămân activități explicite ulterioare, în loc să fie documentate ca comportament complet.

Cadrele sunt descrise secvențial cu modelul Video configurat. O suprascriere Video goală moștenește setarea Vision; dacă ambele sunt goale, ruterul automat Vision selectează modelul efectiv capabil de procesare vizuală. Descrierile reușite înlocuiesc partea originală cu un prefix stabil `[Video description:` care marchează, de asemenea, textul ca fiind o observație neîncrezătoare derivată din conținut media și le spune modelelor din aval să nu urmeze instrucțiunile găsite în conținutul media. Cheile cache-ului pentru descrierile cadrelor includ octeții JPEG, promptul, marcajul temporal și modelul efectiv; doar descrierile reușite sunt stocate în cache. Intrările din cache păstrează modelul producător de succes efectiv, inclusiv un model de rezervă; puntea raportează `mixed` atunci când cadre diferite au fost produse de modele diferite. O găsire în cache reutilizează acea identitate a producătorului în loc să o reeticheteze ca fiind planul de rutare solicitat. Cache-ul de rezultate pentru întregul video este indexat după fiecare intrare care modifică ieșirea — promptul, modelul efectiv, politica de eșantionare, numărul de cadre, modul de analiză semantică, amprenta SHA-256 a indiciului de focalizare normalizat, fereastra de focalizare, `transcript`, `audioTranscript` și indicatorul pentru foaia de contact — așa că modificarea oricăreia dintre aceste dimensiuni reprezintă o ratare a cache-ului, niciodată o reutilizare depășită. Versiunea politicii de deduplicare vizuală, pragul și numărul limitat de cadre candidate sunt, de asemenea, explicite în cheia cache-ului de rezultate și în metadate; prin urmare, o modificare a politicii nu poate reutiliza o descriere învechită a întregului video. Metadatele v4 ale cache-ului de rezultate păstrează modul și amprenta, niciodată sarcina brută a utilizatorului. Metadatele dispozitivului de siguranță raportează atât modul de analiză solicitat, cât și pe cel efectiv; un mod `focused` solicitat fără text utilizabil din partea utilizatorului este raportat ca fiind efectiv `full`.

Dispozitivul de siguranță extrage fiecare parte video acceptată, dar descrie cel mult `modalityBridgeVideoMaxVideos`. Pentru o țintă despre care s-a dovedit că are `supportsVideo === false`, videoclipurile eșuate și cele care depășesc limita devin markere de text sigure explicite, astfel încât să nu supraviețuiască niciun video brut. Atunci când capabilitatea este necunoscută, acele părți își păstrează purtătorul video; orice transcriere de rezervă urmează conversia textului delimitat de mai sus. Țintele cu `supportsVideo === true` ocolesc puntea. Semnalul de întrerupere a cererii clientului se propagă prin descărcare, coada brokerului, subprocese și apelurile de descriere; întreruperile se opresc între videoclipuri și nu permit niciodată accesul la conținut media brut în caz de eșec.

Setările de rulare sunt stocate în baza de date și validate prin Zod:

| Cheie                               | Implicit    | Interval / comportament                                                                                               |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Rulare opțională, activare la cerere                                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` păstrează descrierile generice; `focused` utilizează un context limitat, neveritificat al ultimului utilizator |
| `modalityBridgeVideoModel`          | `""`        | Moștenește modelul Vision Bridge                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` sau `segment_aware` proporțional; eșecul detectorului revine la `uniform`                    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

Valorile de timp expirat Video persistate vechi care depășesc 120 de secunde sunt limitate la termenul limită al brokerului; noile scrieri de setări care depășesc această limită sunt respinse.
`GET /api/modality-bridge/video/runtime` necesită o localitate de tip loopback cu ștampilă de încredere înainte de autentificare sau sondarea mediului de rulare, apoi necesită autentificare de management. Returnează doar `available`, versiuni igienizate FFmpeg/ffprobe și un motiv fix atunci când mediul de rulare nu este disponibil. Punctul de final intern de extracție nu este un API public de încărcare: saturația cozii returnează `503` plus `Retry-After`, deconectarea unui apelant returnează `499`, iar termenul-limită fix al brokerului returnează `504`. Răspunsurile convertite adaugă `video->text;model=<visionModel>;parts=<videos>` la antetul central `x-omniroute-modality-bridge` fără a elimina segmentele Vision sau Audio.

### Masca PII (`piiMasker.ts`)

Rulează în **ambele** etape.

- **`preCall`** clonează payload-ul, parcurge `system`, `messages`, `input` și
  `prompt` (inclusiv elementele de tip șir simplu) și aplică `processPII()` (din
  `@/shared/utils/inputSanitizer`) pe câmpurile string `content`/`text`. Când
  `PII_REDACTION_ENABLED=true`, PII-ul detectat este redactat în payload-ul de ieșire.
  Acest lucru este independent de `INPUT_SANITIZER_MODE` (care controlează doar
  politica de injecție de prompt). Când redactarea este dezactivată, apelul înregistrează
  contorii de detecție fără a rescrie conținutul.
- **`postCall`** face un deep-clone al răspunsului, rulează `sanitizePIIResponse()` plus
  masca pentru forma Responses-API (`maskResponsesOutput` — acoperă
  `output_text` și `output[].content[].text`). Dacă apare vreo redactare,
  răspunsul modificat îl înlocuiește pe cel original.

Măsura de protecție nu blochează niciodată; doar adnotează (`meta.detections`,
`meta.redacted`) sau rescrie.

#### Selecție pe tip, modele personalizate și contoare de detecție

**Dashboard → Settings → Security → PII masking** alege _ce_ este mascat. Nu
activează mascarea: aceasta se face în continuare prin `PII_REDACTION_ENABLED` (cerere) și
`PII_RESPONSE_SANITIZATION` (răspuns + SSE), ambele fiind dezactivate implicit.

- **Selecție pe tip** — ID-urile încorporate sunt listate în
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Valoarea nesetată înseamnă toate
  tipurile (comportamentul de dinaintea existenței acestei setări). Modelul `ssn_us`
  al motorului de cereri se mapează la `ssn`. Șabloanele (Minimal, Standard, Financial,
  Brazilian, USA, Full) doar bifează opțiunile din interfața cu utilizatorul (UI).
- **Modele personalizate** — până la 20 de modele regex sau wildcard (`*` = până la 64
  de caractere care nu sunt spații albe, `?` = unul). Potrivirile devin `[CUSTOM_REDACTED]`.
  Fiecare model trece prin `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): cel mult 500 de caractere, flag-uri limitate
  la `g i m s u`, trebuie să se compileze, trebuie să treacă de `safe-regex` (backtracking
  catastrofal) și nu trebuie să se potrivească cu un șir gol sau cu un substituent de redactare.
  Un model care eșuează este respins la salvare și la testare, iar un rând stocat
  care eșuează este omis la execuție în loc să fie compilat. Modelele personalizate doar
  rulează în timp ce mascarea este activată.
- **Contoare de detecție** — numărători pe fiecare tip (niciodată valorile potrivite), păstrate în
  memorie și resetate la repornire (`src/lib/pii/piiDetectionStats.ts`). Acestea doar
  cresc în timp ce mascarea este activată.

Setările se află în tabelul `key_value` (spațiul de nume `pii_settings`,
`src/lib/db/piiSettings.ts`) și sunt citite printr-un cache de 1 s. API:

| Metodă | Cale                     | Scop                                                                                        |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Starea flag-ului, `enabledTypes`, `customPatterns`, contorii de detecție                    |
| `PUT`  | `/api/settings/pii`      | Înlocuiește `enabledTypes` (`null` = toate) și/sau `customPatterns`                         |
| `POST` | `/api/settings/pii/test` | Rulează în regim de testare un model pe un eșantion de cel mult 8 KB; nu se stochează nimic |

Toate cele trei necesită autentificare de management și validează corpul cererii cu Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injecție de prompt (`promptInjection.ts`)

Detectează structuri adversarial în conținutul furnizat de utilizator și aplică
politica configurată. Comportamentul este determinat de variabilele de mediu și opțiunile
constructorului:

| Setare          | Var. de mediu                                                                                         | Val. implicită | Efect                                                                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activat         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`         | Când este `false`, bariera de protecție se scurtcircuitează.                                                                                                                                                               |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`         | Politica de injecție: `block`, `warn` sau `log`. (`redact` este acceptat pentru compatibilitate retroactivă, dar **nu** elimină textul de injecție; rescrierea PII din cerere este controlată de `PII_REDACTION_ENABLED`.) |
| Prag de blocare | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`         | Severitatea minimă necesară pentru blocare. Nivelul mediu este doar de observare în mod implicit.                                                                                                                          |

**Precedența modurilor** (`getMode`): `options.mode` al apelantului →
suprascrierea **prin flag de funcționalitate în DB** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Prin urmare, o suprascriere din dashboard are prioritate față de variabilele de mediu, astfel încât interfața Feature
Flags controlează protecția în timp real (fără repornire). Citirea din baza de date este sigură în caz de eroare (fail-safe):
dacă apare o eroare, protecția revine la comportamentul bazat pe variabilele de mediu, iar atunci când nu este setată nicio
suprascriere, comportamentul este identic cu cel de rezoluție exclusiv bazată pe variabile de mediu.

Surse de detecție:

1. `sanitizeRequest()` din `@/shared/utils/inputSanitizer` (set partajat de detectori
   utilizat în altă parte în pipeline).
2. `DEFAULT_GUARD_PATTERNS` încorporate (în prezent `system_override_inline` și
   `markdown_system_block`, ambele cu severitate `high`).
3. `customPatterns` opționale transmise prin opțiunile constructorului (șiruri, regex,
   sau înregistrări `{ name, pattern, severity }`).

Când `mode === "block"` **și** cel puțin o detecție atinge pragul de severitate, `preCall` returnează `{ block: true, message: "Request rejected: suspicious content detected" }`. În modurile `warn`/`log`, mecanismul de protecție înregistrează în jurnal, dar permite apelul. Helperul partajat `evaluatePromptInjection()` este, de asemenea, exportat pentru apelanții care trebuie să evalueze prompturi fără a trece prin registry.

**Limită de scanare (v3.8.20):** detectorul inspectează doar **primii 16 KB** din textul promptului combinat — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 octeți) în `src/shared/utils/inputSanitizer.ts`. Atât `detectInjection()`, cât și `evaluatePromptInjection()` apelează `slice(0, MAX_INJECTION_SCAN_BYTES)` înainte de a rula bucla de modele. Directivele de injecție se află în partea de sus a unei intrări, așa că acest lucru limitează utilizarea CPU/GC de către expresiile regulate (regex) pentru payload-uri de mai multe sute de KB, fără a reduce eficacitatea detecției (cf. #3932, #4041).

### Mascator de credențiale (`credentialMasker.ts`)

Rulează în **ambele** etape, fiind ultimul din lanțul implicit (prioritate `95`). Redactează șabloanele cunoscute de chei API / token-uri secrete din payload-ul de ieșire (conținutul mesajului, argumentele apelului de tool, rezultatele tool-urilor) **și** din răspunsul furnizorului, astfel încât o credențială introdusă într-un prompt (sau returnată de un rezultat al unui tool) să nu fie scursă către furnizorul upstream sau înapoi către client.

- **Doar pe bază de opt-in**, aceeași convenție ca și redactarea PII (adiacentă Regulii Stricte #20): dezactivat cu excepția cazului în care `settings.credentialRedactionEnabled === true` **sau** `CREDENTIAL_REDACTION_ENABLED=true`. Când este oprit, mecanismul de protecție nu face nimic (no-op) — nu blochează și nu rescrie niciodată.
- `redactCredentials()` parcurge întregul arbore de payload/răspuns (`walkValue()`, sigur împotriva poluării prototipului, sigur împotriva ciclurilor prin `WeakSet`) și înlocuiește potrivirile cu un substituent `[REDACTED:<type>]`, clonând doar ramurile care s-au modificat efectiv.
- `CREDENTIAL_PATTERNS` acoperă cheile furnizorilor LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), token-urile VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), cheile de plată (Stripe, Square), cheile cloud (cheie de acces AWS, Twilio, SendGrid, Mailgun), cheile private / JWT-urile, șirurile de conexiune care conțin credențiale (`mongodb://user:pass@...`, etc.) și un șablon generic pentru valoarea antetului `Authorization`/`x-api-key`/`api-key`/`apikey`. Cheile în formă de antet (`authorization`, `x-api-key`, `api-key`, `apikey`) sunt redactate structural (doar valoarea, prefixul schemei precum `Bearer `/`Basic ` fiind păstrat) mai degrabă decât prin intermediul expresiei regulate textuale generice.
- Mecanismul de protecție nu blochează niciodată; el doar rescrie (`modifiedPayload` / `modifiedResponse`) și adnotează (`meta.credentialsRedacted`, `meta.count`).

Protecție împotriva regresiei: `tests/unit/credential-masker-guardrail.test.ts`.

## Contractul de bază (`base.ts`)

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
  block?: boolean; // true scurtcircuitează lanțul
  message?: string; // afișat la blocare
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returnat de preCall pentru a rescrie cererea
  modifiedResponse?: TValue; // returnat de postCall pentru a rescrie răspunsul
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

Un element de protecție (guardrail) semnalează „nicio modificare” returnând fie `void`, `{}`, fie
`{ block: false }`. Returnarea unui `modifiedPayload`/`modifiedResponse` înlocuiește
valoarea care circulă prin lanț pentru elementele de protecție din aval.
`signal?: AbortSignal` transmite ciclul de viață al apelantului către elementele de protecție. O anulare a cererii este excepția deliberată de tip fail-open: punțile media opresc activitatea și curățarea fără a restaura conținutul media brut către o țintă despre care se știe că nu îl acceptă.

## Registru (`registry.ts`)

Singletonul `guardrailRegistry` expune:

- `register(guardrail)` — adaugă (sau înlocuiește după numele normalizat) un element de protecție și
  reordonează crescător după `priority`.
- `clear()` / `list()` — funcții auxiliare administrative.
- `runPreCallHooks(payload, context)` — parcurge elementele de protecție active, transmite
  payload-ul prin `modifiedPayload` și se oprește la primul `block: true`.
- `runPostCallHooks(response, context)` — același flux pentru partea de răspuns.
- `resetGuardrailsForTests({ registerDefaults })` — resetează starea și opțional
  reînregistrează valorile implicite pentru o izolare curată a testelor.

Ambele funcții de rulare returnerază `{ blocked, payload|response, results, guardrail?, message? }`
unde `results` este un tablou de înregistrări `GuardrailExecutionResult` care includ
câmpuri per element de protecție precum `blocked`, `skipped`, `modified`, `error` și `meta`,
utile pentru urmărire (tracing).

### Dezactivarea elementelor de protecție per cerere

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreagă o
listă deduplicată de nume de elemente de protecție care ar trebui să fie omise pentru cererea
curentă. Există cinci canale, citite în această ordine și combinate într-o singură listă
(prima apariție are prioritate la deduplicare):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` din corpul cererii (la nivel superior)
3. `metadata.disabledGuardrails` din corpul cererii (doar atunci când `metadata` este un obiect)
4. Antetul `x-omniroute-disabled-guardrails`
5. Antetul vechi (legacy) `x-disabled-guardrails`

Toate cele cinci canale sunt combinate, incluzând cele două anteturi: trimiterea simultană a
`x-omniroute-disabled-guardrails` și `x-disabled-guardrails` omite reuniunea
listelor lor, iar un antet modern gol nu mai ascunde antetul vechi
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corectat în
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Valorile pot fi tablouri de șiruri de caractere sau un șir separat prin virgulă; numele sunt eliminate de spații suplimentare
și normalizate la lowercase kebab-case (`pii_masker` → `pii-masker`), iar intrările
goale sunt eliminate. Rezultatul este transmis prin `context.disabledGuardrails`
către registru, care omite elementele de protecție corespunzătoare (`skipped: true` în `results`).

Lista de dezactivare afectează doar **registrul**. Modul `block` pentru injecția de prompturi
este o graniță obligatorie: middleware-ul de protecție împotriva injecțiilor
(`src/middleware/promptInjectionGuard.ts`) apelează `evaluatePromptInjection()`
fără nicio listă de dezactivare controlată de apelant (apelul inactiv
`resolveDisabledGuardrails({ body })` pe care obișnuia să îl facă a fost eliminat în
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), astfel încât o cerere
care dezactivează `prompt-injection` este totuși respinsă în modul `block`. Acest lucru este
intenționat (by design). Canalele de dezactivare sunt controlate de apelant (corpul cererii,
metadate, anteturi), iar un apelant nu trebuie să poată dezactiva un control de securitate
setat de operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Reuniunea anteturilor
din [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
modifică doar elementele de protecție din registru care sunt omise; nu îi permite unui client
să ocolească middleware-ul. Politicile obligatorii de protecție per cheie și per grup sunt
urmărite în RFC-ul v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Consultați [Acoperire și limite](#coverage-and-limits).

## Ordinea de execuție

Pentru fiecare cerere care trece prin `src/sse/handlers/chat.ts` și
`open-sse/handlers/chatCore.ts` (rutele din familia de chat listate la
[Acoperire și limite](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` construiește lista de ignorare din cheia API, corp
   și antete.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` rulează guardrails în ordinea
   crescătoare a priorității:
   - Guardrails-urile dezactivate sunt înregistrate ca `skipped`.
   - Funcția `preCall` a fiecărui guardrail poate rescrie payload-ul prin `modifiedPayload`.
   - Primul `block: true` scurtcircuitează lanțul, iar handlerul returnează
     un răspuns de respingere din partea guardrail-ului.
3. Payload-ul (potențial rescris) intră în rutarea combinată și în expedierea
   către upstream.
4. **Doar pentru non-streaming:** după ce răspunsul este asamblat,
   `guardrailRegistry.runPostCallHooks(...)` rulează același lanț pe
   răspuns. Valoarea `block: true` de aici elimină răspunsul upstream și returnează HTTP 400. Răspunsurile în flux omit complet acest pas.

Guardrails care aruncă excepții sunt înregistrate cu `error: <message>` și jurnalizate prin
`logger.warn`, dar lanțul continuă — comportament de tip fail-open prin design.

## Acoperire și limite

Registrul de guardrails este conectat exclusiv la conducta de chat. Aceste limite sunt
fixate de `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` și
`tests/unit/guardrail-pipeline-characterization.test.ts`; actualizați acele teste
în mod deliberat atunci când comportamentul se modifică.

### Unde rulează hook-urile

| Hook / control                      | Rulează pe                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                   | Cereri gestionate de `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (și `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` și proxy-ul de chat Telegram. De asemenea, endpoint-ul de test din dashboard `/api/guardrails/test`. Un blocaj pre-apel returnează HTTP 400. |
| `runPostCallHooks`                  | Doar pentru răspunsurile de chat **non-streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Răspunsurile în flux nu ajung niciodată aici.                                                                                                                                                                                                                                                                                         |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), transmis prin conductă în `streamingPipeline.ts` când `PII_RESPONSE_SANITIZATION` este activat. Acesta nu este un guardrail, așa că canalele de dezactivare nu îl afectează.                                                                                                                                                                                                       |
| Injection-guard middleware (legacy) | Orice rută `/v1` care conține prompt-uri, inclusiv familia de rute pentru chat (vezi [acoperirea rutelor](#injection-guard-route-coverage--red-team-phase-8--block-d)). Doar pentru injecție de prompt.                                                                                                                                                                                                                                          |

### Ce nu este acoperit

- **Rutele de media, embeddings și date** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nu ajung niciodată la registru. Nicio
  mascare de PII, mascare de acreditive sau punte de modalități nu rulează acolo. Singura lor
  verificare este middleware-ul moștenit de protecție împotriva injecției.
- **Răspunsurile în flux** nu primesc guardrails post-apel: niciun `pii-masker` sau
  `credential-masker` post-apel și niciun blocaj post-apel. Se aplică doar transformarea
  PII pentru flux (când `PII_RESPONSE_SANITIZATION` este activat). Un acreditiv
  retransmis într-un răspuns în flux nu este redactat.
- **Canalele de dezactivare vs. middleware-ul (prin design):** middleware-ul evaluează
  injecția de prompt printr-un apel propriu la `evaluatePromptInjection()`, fără a
  transmite nicio listă de dezactivare controlată de apelant. Modul `block` este o graniță
  obligatorie pe care dezactivările controlate de apelant nu o pot ocoli, inclusiv pe rutele din familia de chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Dezactivarea
  `prompt-injection` sare doar peste guardrail-ul din registru.

### Ce vede un răspuns înainte de post-apel

Pe calea non-streaming, ordinea este: extracția memoriei → execuția instrumentelor încorporate → guardrails post-apel → ieșirea din blocul post-apel → stocarea în memoria cache semantică.

- **Extragerea memoriei** și **execuția instrumentelor** văd răspunsul înainte ca mecanismele de protecție post-apel să îl poată rescrie sau bloca. Începând cu [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), extragerea memoriei trece textul extras prin `sanitizePII` atunci când `PII_RESPONSE_SANITIZATION` este activat (atât pentru streaming, cât și pentru non-streaming), dar un răspuns pe care mecanismele post-apel îl blochează ulterior a fost totuși oferit memoriei și instrumentelor.
- **Cache-ul semantic** stochează răspunsul după post-apel, așadar stochează răspunsul rescris, iar un răspuns blocat nu este niciodată stocat în cache. Intrările din cache sunt indexate după cheia API.

## Configurare

Variabilele de mediu citite de mecanismele de protecție (guardrails) încorporate:

| Variabilă                             | Utilizat de               | Efect                                                                                                                                                                                       |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Setați la `false` pentru a dezactiva complet detecția.                                                                                                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politică de injecție: `warn`, `block` sau `log`. Valoarea moștenită `redact` nu rescrie textul de injecție.                                                                                 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mod pentru mecanismul de protecție împotriva injecției; de asemenea, un semnalizator de funcționalitate (feature flag) în baza de date care **suprascrie** variabilele de mediu (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severitatea minimă pe care `MODE=block` o respinge: `high` (implicit), `medium` sau `low`.                                                                                                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias moștenit pentru `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Când este `true`, datele PII din cerere sunt redactate (independent de modul de injecție).                                                                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controlează comportamentul măștii pe partea de răspuns.                                                                                                                                     |

Mecanismele de protecție Modality Bridge citesc configurația de rulare din stocarea de setări bazată pe baza de date (`getSettings()`), nu din variabilele de mediu. Cheile principale pentru viziune (Vision) sunt `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` și `modalityBridgeCacheMaxEntries`. Vechile chei `visionBridge*` sunt acceptate doar ca rezervă de citire documentată pentru un singur ciclu; scrierile din panoul de control utilizează cheile principale. Valorile implicite și mecanismul de rezervă se află în `src/shared/constants/modalityBridgeDefaults.ts`, iar constantele vechi sunt păstrate în `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilizează `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` și `modalityBridgeAudioMaxClips`, plus setările partajate `modalityBridgeCache*`. Audio nu are o rezervă pentru cheile vechi, deoarece aceste chei au fost introduse odată cu schema Modality Bridge.

Video utilizează `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` și `modalityBridgeVideoTimeout`, plus setările partajate `modalityBridgeCache*`. Este dezactivat în mod implicit deoarece FFmpeg/ffprobe sunt dependențe operaționale opționale, iar adăugarea de descrieri pentru cadre adaugă latență și costuri pentru model.

## Mecanisme de protecție personalizate

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

Pași:

1. Creați `src/lib/guardrails/myGuardrail.ts` extinzând `BaseGuardrail`.
2. Implementați `preCall` și/sau `postCall`.
3. Fie înregistrați la momentul importului (adăugați din `registerDefaultGuardrails`), fie apelați `guardrailRegistry.register(...)` în timpul executării (runtime) — registrul înlocuiește orice mecanism de protecție anterior cu același nume normalizat.
4. Adăugați teste în `tests/unit/` (exemple existente:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testare

Folosiți `resetGuardrailsForTests()` între teste pentru a porni dintr-o stare cunoscută.
Transmiteți `{ registerDefaults: false }` pentru a începe cu un registru gol și a
înregistra doar mecanismele de protecție supuse testării. Vision Bridge acceptă
injecția de dependențe (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expune
punctele de interconectare echivalente pentru setări, capabilități, selecția modelului STT,
verificări de credențiale și transcriere. Prin urmare, testele pot rula ambele fluxuri fără
acces la baza de date sau la rețea.

## Vezi și

- `src/lib/guardrails/` — implementare
- `src/shared/utils/inputSanitizer.ts` — detector partajat care alimentează
  detecția injecției de prompturi și masarea PII
- `src/shared/constants/visionBridgeDefaults.ts` — valori implicite pentru Vision Bridge și
  lista de modele forțate pentru bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — valori implicite partajate pentru rularea Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — strat ortogonal (circuit breaker, perioade de răcire)
- `docs/reference/ENVIRONMENT.md` — referință completă pentru variabilele de mediu

## Acoperirea rutei pentru garda de injecție și red-team (Faza 8 · Blocul D)

Garda de injecție (`createInjectionGuard` / `withInjectionGuard`) acoperă toate rutele
care acceptă prompturi de la utilizator. Aceasta respectă `INJECTION_GUARD_MODE` (implicit `warn` = doar jurnalizare;
`block` = returnează codul HTTP 400 `SECURITY_001`).

| Tip             | Rute                                                                                                                                                 | Mod implicit |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Text (existent) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generativ       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Date            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Extragerea textului (`extractMessageContents`) acoperă `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocturn, `nightly-llm-security.yml`):** promptfoo validează că fiecare rută blochează
corpusul OWASP-LLM în modul `INJECTION_GUARD_MODE=block`; garak rulează teste/probe (sare peste ele dacă nu există secret).
Ruta `moderations` este inclusă pentru consistență. Modul de blocare este o barieră obligatorie: `evaluatePromptInjection()`
ignoră lista de dezactivare transmisă de middleware pentru fiecare cerere, astfel încât `disabledGuardrails` **nu**
scutește o rută de la aceasta ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Fluxul de lucru nocturn (`.github/workflows/nightly-llm-security.yml`, cron + declanșare
manuală) are două sarcini:

- **`promptfoo-guard` (de blocare)** — rulează `promptfoo eval -c promptfooconfig.yaml`
  cu `INJECTION_GUARD_MODE=block`. Fiecare caz adversarial (de exemplu, „ignorați toate
  instrucțiunile anterioare…”, breșe de tip DAN) verifică dacă răspunsul conține
  `error.code === "SECURITY_001"`, adică garda a respins efectiv cererea.
- **`garak` (informativ)** — rulează garak `--probes promptinject,dan,leakreplay`
  împotriva unei instanțe locale OmniRoute (`http://localhost:20128/v1`). Protejat de un
  secret de furnizor (`PROMPTFOO_PROVIDER_KEY`); trece grațios peste el și are sufixul
  `|| true`, astfel încât raportează rezultatul fără a eșua rularea CI.

Acoperirea funcției de ajutor pentru gardă (`createInjectionGuard` / `withInjectionGuard`)
se extinde la fiecare rută `/v1` care conține prompturi; textul promptului este extras din
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` de către
`extractMessageContents()` în `src/shared/utils/inputSanitizer.ts`.

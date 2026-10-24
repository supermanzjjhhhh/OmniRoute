# Guardrails (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte di riferimento:** `src/lib/guardrails/`
> **Ultimo aggiornamento:** 2026-10-17 — v3.8.52 (aggiunta la sezione [Copertura e limiti](#coverage-and-limits):
> quali route e percorsi di risposta vengono raggiunti dagli hook, gli header di disabilitazione unificati (#16412), la modalità di blocco delle
> iniezioni come confine obbligatorio (#16413) e quali componenti vedono una risposta prima della fase post-call)

I guardrail applicano misure di sicurezza, criteri e trasformazioni dei contenuti al confine
tra OmniRoute e i provider upstream. Ogni guardrail può ispezionare (e
facoltativamente rifiutare, trasformare o annotare) i payload delle richieste (`preCall`) e
le risposte upstream (`postCall`).

Il sistema è **fail-open**: se un guardrail genera un'eccezione durante l'esecuzione, il registro
registra l'errore e prosegue con il guardrail successivo anziché far fallire la
richiesta. Il blocco è una decisione esplicita (`block: true`), mai un evento accidentale.
L'unica eccezione è una richiesta annullata: quando il `signal` del chiamante viene annullato,
un guardrail che genera un'eccezione fa fallire l'esecuzione dell'hook anziché essere saltato.

Gli hook **non** vengono eseguiti su ogni route o su ogni risposta. Leggere
[Copertura e limiti](#coverage-and-limits) prima di fare affidamento su un guardrail come
controllo di sicurezza.

## Guardrail integrati

Il registro carica automaticamente sei guardrail in ordine di priorità al momento dell'importazione
(vedere `registry.ts` → `registerDefaultGuardrails()`):

| Priorità | Nome                | Fase/i         | File                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

I numeri di priorità più bassi vengono eseguiti **per primi**.

### Vision Bridge (`visionBridge.ts`) — Bridge di modalità PR-1

Il modello base GLM 5.3 e `glm-5.3-{low,high,max}` hanno metadati espliciti
`supportsVision:false` nel registro e nelle specifiche. Le varianti GLM 5.3 Flash
rimangono modelli con supporto visivo nativo. La route `/v1/messages` di Claude Code entra nella
catena condivisa di guardrail pre-call di `handleChat` **prima** della traduzione da Claude a OpenAI;
le immagini annidate nei risultati dello strumento `Read` devono essere descritte o gestite
prima che tale traduzione le converta in contenuti OpenAI `image_url` (#17069).

Intercetta le richieste contenenti immagini destinate a **modelli senza supporto visivo** e
reindirizza l'intera richiesta a un modello con supporto visivo oppure sostituisce le parti
immagine con descrizioni testuali prodotte da un modello visivo configurabile prima
della chiamata upstream. Questo consente ai provider che supportano solo testo di gestire in modo trasparente
payload multimodali.

Flusso:

1. Salta se il modello di destinazione supporta già la visione (a meno che non compaia
   nell'elenco dei modelli per cui il bridge è forzato `isVisionBridgeForcedModel`).
2. Estrae le parti immagine tramite `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), che delega al **rilevatore unificato di
   contenuti multimediali** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — l'unica
   fonte di riferimento condivisa con il filtro di compatibilità delle combinazioni.
   L'estrazione è limitata alle strutture consentite che `replaceImageParts` può reinserire
   (il contratto di estrazione↔sostituzione): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` e Responses
   API `input_image`. Anche le immagini corrispondenti annidate in
   `tool_result.content` di Claude Code e negli output degli strumenti di Responses vengono estratte e
   sostituite nei percorsi originali; le strutture che fungono solo da indicatore vengono gestite dal filtro
   delle combinazioni e non vengono estratte.
   Salta se non ne viene trovata nessuna.
3. Risolve la configurazione di runtime tramite `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): le nuove chiavi delle impostazioni `modalityBridge*`
   hanno la precedenza; le chiavi legacy `visionBridge*` rimangono come **fallback per un solo
   ciclo** (finestra di rollback). Salta prima di qualsiasi scansione dei contenuti multimediali quando il
   bridge è disabilitato.
4. Il selettore di modalità (`modalityBridgeVisionMode`, vedere la tabella seguente) decide
   tra reindirizzamento e descrizione. Il reindirizzamento restituisce `modifiedPayload` con il solo `model`
   sostituito, più i metadati `{ rerouted, fromModel, toModel, imagesKept }`.
5. Percorso di descrizione: limita le immagini a `maxImages`, compone il prompt in base all'attività,
   consulta la cache delle descrizioni, chiama il modello visivo **in parallelo**
   (`Promise.allSettled`) e inserisce al loro posto parti testuali `[Image N]: <description>`.
   Una descrizione non riuscita restituisce `null`: l'immagine originale viene conservata per
   destinazioni sconosciute o con supporto visivo (#4012), ma una **destinazione diretta confermata
   come solo testuale** o una combinazione priva di supporto visivo riceve un segnaposto testuale esplicito
   `(unavailable — no vision-capable provider connected)` per
   ogni immagine non descritta, inclusi i casi di errore parziale e le immagini oltre il
   limite delle chiamate di descrizione (#17069). Il fallback di descrizione esistente per le combinazioni,
   usato quando tutte le descrizioni falliscono, rimane in vigore (#8430).
6. Restituisce `modifiedPayload` + metadati (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettore di modalità (`modalityBridgeVisionMode`)

| Modalità   | Predefinita | Comportamento                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔           | Euristica preesistente, invariata (#6640/#7204): i modelli non combo/`auto/` vengono reindirizzati al miglior modello con capacità visive, a meno che il modello originale non disponga già di credenziali utilizzabili (in tal caso viene generata una descrizione); per le destinazioni combo viene sempre generata una descrizione.                                                                                   |
| `describe` |             | Genera sempre una descrizione — il blocco di reindirizzamento viene saltato completamente; risponde sempre il modello scelto dall'utente.                                                                                                                                                                                                                                                                                |
| `reroute`  |             | Forza il reindirizzamento: il controllo che mantiene il modello dotato di credenziali viene ignorato. Il controllo delle credenziali della **destinazione** del reindirizzamento continua ad applicarsi — quando non esiste una destinazione visiva utilizzabile, il bridge blocca la richiesta con un errore chiaro anziché generare una descrizione o inviare immagini non elaborate a una destinazione solo testuale. |

Le modalità forzate interrompono il flusso **prima** dell'esecuzione dell'euristica automatica; il comportamento di `auto`
è identico byte per byte a quello del guardrail precedente a PR-1.

#### Ambito della chiave API (`visionBridgeKeyScope.ts`)

Quando la chiave API del chiamante limita `allowedConnections`, i pool di quote
(`allowedQuotas`) o i modelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il bridge
seleziona solo modelli di reindirizzamento e descrizione che la chiave può utilizzare, su connessioni che la chiave può
utilizzare. La chiamata di descrizione passa poi sempre attraverso il self-loop di OmniRoute con
l'header `x-omniroute-self-loop-key-id`, in modo che la richiesta di chat ricevente
applichi nuovamente i criteri della chiave relativi a connessioni e modelli. `enforceApiKeyPolicy()`
rispetta tale header solo in presenza anche del bearer del self-loop, quindi può soltanto
restringere l'accesso; un ID che non viene risolto viene rifiutato.

Se nessun modello con capacità visive è consentito per la chiave, una **destinazione confermata come solo
testuale** rifiuta localmente la richiesta contenente immagini con un chiaro errore HTTP 400 anziché
inoltrare i byte delle immagini a un servizio upstream non in grado di gestirli (#17069). Per le destinazioni con
capacità visive sconosciute o native, il percorso di descrizione mantiene il precedente
comportamento fail-open (metadati `{ skipped: true, reason: "no_permitted_vision_model" }`).
Le richieste senza chiave e le chiavi senza queste restrizioni si comportano esattamente come
prima.

#### Prompt di descrizione sensibile al compito (`modalityBridgeVisionTaskAware`)

Valore predefinito: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) aggiunge
il testo dell'**ultimo messaggio dell'utente** (troncato a 500 caratteri) al prompt di
descrizione di base, orientando la descrizione verso ciò che l'utente ha effettivamente chiesto
(schema codex-vision-proxy) e chiedendo al modello con capacità visive di trascrivere il testo
visibile. Con il flag disattivato — o in assenza di testo dell'utente — il prompt di base viene utilizzato senza modifiche.

La richiesta compatibile con OpenAI del self-loop di descrizione (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) richiede sempre `image_url.detail: "high"` —
incondizionatamente, per ogni chiamante/provider, senza dipendere da alcun segnale del client.
Il campionamento a basso livello di dettaglio riduce l'accuratezza OCR proprio per il compito di
trascrizione del testo richiesto da questo prompt, quindi la chiamata di descrizione richiede sempre un livello di
dettaglio elevato, indipendentemente dal livello di dettaglio utilizzato nella richiesta originale in ingresso. Questo
influisce solo sul corpo della richiesta interna di descrizione; non modifica il modo in cui
OmniRoute inoltra il valore `image_url.detail` del chiamante nella richiesta principale —
quel valore predefinito viene applicato separatamente, e solo per i client OpenCode rilevati, in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Il
ramo con formato di trasmissione Anthropic del self-loop di descrizione non ha alcun campo `detail`
e non è influenzato da nessuno dei due valori predefiniti.

#### Limite dell'output di descrizione (`modalityBridgeVisionMaxChars`)

| Chiave                         | Predefinito | Intervallo      |
| ------------------------------ | ----------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` o 100–50000 |

`0` (predefinito) significa **nessun limite** — la descrizione restituita da
`callVisionModel()` viene trasmessa senza modifiche, preservando il comportamento
esistente. Qualsiasi valore nell'intervallo 100–50000 tronca la descrizione con un
suffisso `…` prima che venga reinserita come `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Aumentare questo valore per i compiti OCR ricchi di dettagli in cui il modello a valle necessita della
trascrizione completa; ridurlo per limitare l'utilizzo di token da parte dei modelli con capacità visive più prolissi.
Il campo nella dashboard si trova nel pannello Avanzate della scheda Visione
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) e porta qualsiasi
valore compreso tra 1 e 99 al minimo di 100, lasciando invariato uno `0`
esplicito — `0` è un valore Zod valido a sé stante
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), non semplicemente
il valore predefinito «non impostato».

#### Cache delle descrizioni (`modalityBridge/bridgeCache.ts`)

Cache in memoria LRU + TTL per gli output di descrizione, condivisa da tutto il processo.
Chiave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con
delimitazione tramite prefissi di lunghezza (nessuna collisione ai confini dei campi). Il componente relativo al modello è
il modello del bridge **configurato**, non il modello che ha effettivamente risposto —
`callVisionModel` può ricorrere internamente a modelli alternativi e usare una chiave per ogni tentativo
frammenterebbe la cache. Le descrizioni non riuscite non vengono mai memorizzate nella cache. Impostazioni:

| Chiave                          | Predefinito | Intervallo |
| ------------------------------- | ----------- | ---------- |
| `modalityBridgeCacheEnabled`    | `true`      | —          |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000    |

#### Normalizzazione delle immagini remote (describe in self-loop/recupero base64)

Quando il bridge recupera autonomamente un'immagine **remota** — la chiamata
a sé stesso per describe di Anthropic e la conversione base64 nel formato
claude-wire (`ensureBase64ImagesForClaudeWire`), entrambe tramite
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — l'URI di dati
risultante viene passato a `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prima di essere incorporato nella richiesta
al modello di visione. Le immagini troppo grandi vengono ridimensionate a un **lato lungo di 2048px** (in linea con
il limite di ridimensionamento che OpenAI/Anthropic applicano già lato server), riducendo
i byte caricati e la latenza senza modificare ciò che vede il modello di visione. Il ridimensionamento
usa `sharp`, caricato tramite importazione dinamica: su una piattaforma in cui il relativo
binario nativo non riesce a caricarsi, `normalizeDataUri()` **non genera mai eccezioni** — ripiega
sul passaggio dei byte originali senza modifiche, quindi il percorso di describe/conversione base64
continua sempre a funzionare. Anche i byte che non rappresentano un'immagine (un recupero che non ha restituito
un'immagine decodificabile) vengono passati senza modifiche. Questa normalizzazione è
limitata alle immagini che il bridge recupera per la propria chiamata a sé stesso — non viene mai
applicata al payload grezzo del chiamante passato senza modifiche, in coerenza con il
principio di modifica solo su adesione esplicita (Regola inderogabile #20).

#### Schema delle impostazioni + migrazione

Le nuove chiavi `modalityBridge*` vengono validate con Zod in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, il trio `modalityBridgeCache*` e il
gruppo `modalityBridgeAudio*` usato dall'Audio Bridge. La migrazione
`141_modality_bridge_settings.sql` copia i valori legacy
`visionBridge*` esistenti nelle nuove chiavi corrispondenti (è idempotente e non sovrascrive mai
un valore `modalityBridge*` impostato dall'operatore); le chiavi legacy continuano a essere accettate come
fallback in lettura per un ciclo di rilascio.

#### Header di trasparenza + statistiche

Le risposte trasformate tramite describe includono
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(costruito da `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
applicato da `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Le richieste reinstradate **non** ricevono alcun header — il payload non è stato modificato e la sostituzione
del modello è già visibile nel campo `model` del corpo della risposta.

`GET /api/modality-bridge/stats` (autenticazione di gestione, stesso livello di
`GET /api/settings`) restituisce i contatori in memoria per modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` per `vision`, `audio` e
`video`. `averageLatencyMs` usa `latencySamples`, non tutti i tentativi, come
denominatore; un'operazione senza misurazione dei tempi non crea un campione fittizio da zero millisecondi.
`bridged` rimane l'alias retrocompatibile per le conversioni
riuscite; i tentativi falliti non lo incrementano.
I contatori si azzerano al riavvio del processo, per scelta progettuale
(telemetria, non contabilizzazione).

#### Configurazione della dashboard

La pagina dedicata della dashboard è
`/dashboard/settings/modality-bridge`. Le schede `Vision`, `Audio`
e `Video`, accessibili tramite URL, mantengono i parametri di query quando si cambia il valore di `tab`.
La scheda Vision offre l'abilitazione, la modalità, la selezione del modello (inclusa l'impostazione
predefinita automatica), la formulazione dei prompt in base all'attività, limiti avanzati per timeout/immagini/lunghezza della descrizione/cache,
contatori di runtime
e una richiesta di esempio con protezioni. Anche la scheda Audio è operativa: offre
l'abilitazione, un selettore di modelli limitato a STT con opzione Auto, limiti di timeout/durata massima dei clip, contatori
audio e un test di esempio `input_audio`. La scheda Video è funzionante: mostra
lo stato di runtime di FFmpeg/ffprobe — uno dei quattro stati espliciti dell'interfaccia (`unknown` mentre
la verifica è in corso o non è stato possibile completarla, `restricted` su un host della
dashboard non di loopback in cui la verifica viene saltata lato client, `unavailable` dopo che la verifica
ne ha confermato l'assenza, oppure `available` con le versioni di FFmpeg/ffprobe) — salva in modo persistente
l'abilitazione e i limiti relativi a modello/fotogrammi/video/timeout, filtra il selettore dei modelli mostrando solo quelli con capacità di visione
e offre contatori video.

La precedente scheda Vision Bridge nelle impostazioni IA è un collegamento di compatibilità alla
nuova pagina; non contiene più una seconda copia del modulo. Anche Media Providers
collega i flussi di lavoro da immagine a testo e da parlato a testo alle corrispondenti schede di Modality
Bridge senza rimuovere l'ambiente di prova da parlato a testo esistente.

**Bypass dell'ammissione per il self-loop:** quando la chiamata describe viene instradata attraverso
il self-loop `/v1` di OmniRoute (modello di provider non standard), la sottorichiesta invia
`x-omniroute-admission-bypass: internal` e viene autenticata con la credenziale
del self-loop risolta — il valore sentinella locale `sk_omniroute` in modalità locale, oppure la
chiave di ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurata dall'operatore (#1350), in modo che
le distribuzioni con `REQUIRE_API_KEY=true` possano comunque eseguire la chiamata describe. Il bypass
viene rispettato solo per queste credenziali esatte, quindi i client esterni non possono usare
l'header per saltare l'ammissione.

I valori predefiniti legacy si trovano in `src/shared/constants/visionBridgeDefaults.ts`; i
nuovi valori predefiniti per modalità/consapevolezza dell'attività/cache e il risolutore delle impostazioni si trovano in
`src/shared/constants/modalityBridgeDefaults.ts`. La protezione espone un'opzione
`deps` del costruttore, così che i test possano iniettare implementazioni simulate di `getSettings` e
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercetta le richieste di chat contenenti audio prima che raggiungano una destinazione che non è
nota per accettare input audio. Non reinstrada mai la richiesta di chat: le parti audio vengono
trascritte tramite l'endpoint multipart esistente compatibile con OpenAI e il
modello di chat scelto prosegue con le trascrizioni testuali.

Flusso:

1. Risolvere `supportsAudio` tramite `getResolvedModelCapabilities()`. I metadati
   espliciti del registro dei provider hanno la precedenza, seguiti dai metadati
   statici del modello e infine da `modalities_input` sincronizzato. Un elenco
   di input dichiarato senza `audio` equivale a `false`; in assenza di evidenze
   sulle capacità, il valore rimane `null`. Sia `false` sia `null` attivano il
   bridge conservativo, mentre `true` lo bypassa.
2. Risolvere le impostazioni `modalityBridgeAudio*` ed estrarre da ogni messaggio
   le parti audio di primo livello sostituibili tramite il rilevatore condiviso
   `detectMediaParts()`. I formati di trasmissione supportati sono OpenAI
   `input_audio`, `audio_url` e `source.media_type: "audio/*"`. L'audio annidato
   viene rilevato ai fini dell'instradamento, ma non viene rimosso dal percorso
   di sostituzione. L'elaborazione è limitata da `modalityBridgeAudioMaxClips`;
   le parti successive restano inalterate.
3. Rispettare il `provider/model` configurato oppure lasciare che
   `selectAudioBridgeModel()` scorra `AUDIO_TRANSCRIPTION_PROVIDERS` nell'ordine
   stabile del catalogo e selezioni il primo modello con una credenziale attiva
   e utilizzabile per il provider.
4. `callAudioTranscription()` converte l'audio base64/data URI in un `file`
   multipart oppure scarica un `audio_url` remoto tramite la protezione del
   traffico in uscita limitato a destinazioni pubbliche, con pinning DNS e un
   limite di 25 MB. Quindi invia tramite POST il file e il modello selezionato
   al self-loop locale `/v1/audio/transcriptions`, autenticato con
   `resolveSelfLoopBearer()`. La route di trascrizione esistente esegue la
   normale ricerca delle credenziali, la gestione dei periodi di attesa e dei
   limiti di frequenza e l'inoltro al provider.
5. Le chiamate riuscite sostituiscono le rispettive parti con `[Audio N]: <transcript>`.
   Le chiamate vengono eseguite con `Promise.allSettled`: un singolo errore
   preserva la parte audio originale corrispondente (contratto #4012). Se tutte
   le chiamate falliscono e per la destinazione è accertato
   `supportsAudio === false`, le parti diventano
   `[Audio N]: (unavailable — no STT provider connected)` (contratto #8430). Per
   una destinazione sconosciuta (`null`), se tutte le chiamate falliscono, il
   risultato resta inalterato. Una destinazione accertata come solo testuale,
   senza credenziali STT utilizzabili, riceve lo stesso segnaposto esplicito
   senza effettuare una chiamata di rete.

Le trascrizioni riuscite utilizzano la cache LRU/TTL di Modality Bridge condivisa
a livello di processo. La chiave combina il riferimento audio, l'etichetta
stabile dell'operazione `audio-transcription` e il modello STT selezionato; gli
errori non vengono mai memorizzati nella cache. I tentativi audio aggiornano i
contatori condivisi `bridged`, `cacheHits`, `failures` e `lastUsedAt`.
Le risposte trasformate includono
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; le richieste
inalterate non ricevono un segmento Audio Bridge.

Le impostazioni di runtime sono memorizzate nel DB e validate con Zod:

| Chiave                        | Predefinito | Intervallo          |
| ----------------------------- | ----------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                   |
| `modalityBridgeAudioModel`    | `""`        | Automatico o ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                |

La cache condivisa rimane controllata da `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercetta le parti video di primo livello in `messages` di Chat Completions e
in `input` dell'API Responses prima che venga chiamata una destinazione senza
supporto video nativo noto. I formati supportati sono `input_video`,
`video_url`, `video_source`, URL HTTPS e URI dati `data:video/*;base64,...`.
I semplici nomi di file nel testo non vengono trattati come video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gestisce l'attraversamento della
richiesta, il controllo delle capacità e delle policy, l'aggregazione per richiesta
e il payload della risposta.
Il lavoro per ciascun video — acquisizione, cache del risultato completo,
descrizione di una sequenza di fotogrammi (che integra un'eventuale trascrizione
audio dichiarata dal chiamante) e metriche, interruzione e pulizia per ciascun
tentativo — è incapsulato in `processVideoPart` in
`videoBridgePipeline.ts`, chiamato una volta per ogni parte video all'interno del
ciclo di `preCall`.
Questo modulo definisce anche i confini espliciti delle porte `VideoMediaBrokerPort`
(acquisizione dei byte ed estrazione dei fotogrammi campionati), `VideoAudioTranscriptionPort`
(integrazione di una trascrizione audio dichiarata dal chiamante con le descrizioni
dei fotogrammi campionati) e `VideoDrilldownPort` (il confine di persistenza degli
approfondimenti sui fotogrammi; non ancora collegato a `processVideoPart` — al
momento solo la route separata `/api/modality-bridge/video/drilldown`
scrive le voci di approfondimento).

Il percorso delle richieste pubbliche `/v1` non importa né invoca mai un sottoprocesso.
I video remoti vengono scaricati con un limite di 50 MiB; i video base64 inline
hanno un limite conservativo di 36 MiB per video una volta decodificati, affinché
l'involucro di modello, messaggi e struttura possa rimanere entro il limite di
ammissione delle richieste JSON pubbliche di 50 MiB. La lunghezza inline e le
stime delle dimensioni decodificate vengono verificate prima dell'allocazione.
HTTPS è obbligatorio per l'URL remoto iniziale e per ogni reindirizzamento, usando
la protezione esistente del traffico in uscita limitato a destinazioni pubbliche,
con pinning DNS. I byte attraversano quindi il preciso confine interno del broker
`POST /api/modality-bridge/video/extract`. Questa route è sia
`LOCAL_ONLY` sia `SPAWN_CAPABLE`, accetta solo una richiesta da loopback attendibile
autenticata per il singolo processo e non accetta mai un URL, un percorso del
filesystem, un eseguibile o un elenco di argomenti. La pipeline di controllo delle
dimensioni del corpo dell'API e il lettore incrementale del corpo del gestore
impongono indipendentemente un limite di 50 MiB all'input del broker. La sua coda
limitata esegue un'estrazione alla volta, consente quattro lavori in attesa e
limita l'input in attesa a 100 MiB.

All'interno del broker, `ffprobe` legge un file locale privato; la lista fissa
dei formati consentiti esclude i formati di playlist e manifest. Per i
contenitori consentiti della famiglia MOV, i riferimenti a dati MOV esterni
rimangono disabilitati per impostazione predefinita e il comando fisso non li
abilita. Sia `ffprobe` sia `ffmpeg` utilizzano la lista dei protocolli consentiti
limitata a `file`, un solo thread, array di argomenti fissi, nessuna shell
ed eseguibili risolti tramite `PATH`. I flussi di copertina di tipo
attached-picture non sono candidati riproducibili. Tutti i flussi riproducibili
devono rispettare i limiti e viene preferito un flusso predefinito esplicito
prima del ripiego deterministico sul flusso con l'indice più basso. I video sono
limitati a 600 secondi, 8.192 pixel per dimensione e 33.554.432 pixel sorgente.
FFmpeg campiona da 1 a 16 fotogrammi JPEG nei punti medi, riduce il lato lungo
a un massimo di 1.024 pixel senza ingrandire gli input più piccoli e non riceve
mai un URL. Il campionamento è `uniform` per impostazione predefinita. Le
politiche opzionali `scene_aware` e sperimentali `segment_aware` eseguono un
ulteriore passaggio FFmpeg fisso sul flusso locale già convalidato, selezionano
un insieme limitato di timestamp di scena da `showinfo` e ripiegano in modo
deterministico sugli stessi punti medi uniformi in caso di errore del
rilevatore, timeout, output malformato o insieme di candidati vuoto. La modalità
basata sui segmenti assegna i campioni nei punti medi in proporzione agli
intervalli di scena convalidati; le evidenze e il comportamento di ripiego
di questa modalità sono descritti in dettaglio di seguito. Il limite massimo
assoluto di 16 fotogrammi viene applicato dopo la selezione in ogni politica.
Quando una richiesta basata sulle scene dispone di un solo fotogramma,
utilizza il punto medio uniforme della finestra attiva, che comprende l'intero
video o l'intervallo di interesse, e riporta `policyEffective: uniform`: un
singolo fotogramma di scena selezionato non può preservare entrambe le estremità
temporali. Il chiamante può facoltativamente fornire una finestra di interesse
finita (`start`/`end` in secondi); i limiti vengono ricondotti entro la durata
del contenuto multimediale, le finestre invertite o non finite vengono rifiutate
e tutte le politiche di campionamento vengono eseguite esclusivamente
nell'intervallo normalizzato. La finestra risultante è inclusa nei metadati di
campionamento e nel prefisso della descrizione non attendibile, affinché i
modelli a valle possano distinguere un estratto mirato dall'intera sequenza
temporale.

La focalizzazione semantica delle didascalie è un'impostazione separata ed
esplicita. La modalità di analisi predefinita `full` mantiene il prompt
esistente per i fotogrammi e non inoltra mai il testo della richiesta al
modello di generazione delle didascalie. In modalità `focused`, il bridge legge
solo l'ultimo `text`/`input_text` non vuoto scritto dall'utente nello stesso
contenitore Chat o Responses, lo normalizza in NFC, comprime i caratteri di
controllo e gli spazi e lo limita a 500 punti di codice Unicode. Se il risultato
è vuoto, viene utilizzato esattamente il prompt `full`. Un suggerimento
utilizzabile viene serializzato come JSON in un blocco dedicato al contesto
utente non attendibile e può soltanto dare priorità a dettagli osservabili;
non può prevalere sull'avvertenza separata che vieta di seguire istruzioni
visibili o udibili nel contenuto multimediale. La focalizzazione testuale non
deduce mai `start`/`end` né modifica il campionatore temporale.

#### FU-07 evidenze strutturali dei segmenti

`segment_aware` utilizza un unico passaggio di preanalisi con limiti definiti
sul flusso video locale già convalidato. La catena fissa di filtri dapprima
ridimensiona il video a una larghezza massima di 320 pixel, rileva i cambi di
scena e gli intervalli congelati, quindi campiona a 1 fotogramma al secondo
per analizzare sfocatura, luminanza media e informazioni spaziali/temporali.
Il passaggio è limitato a 600 campioni strutturali, un solo thread
FFmpeg/filtro, le stesse liste di protocolli e contenitori consentiti limitate
a `file`, un limite di 1 MiB per l'output del processo e un massimo di
30 secondi entro i vincoli condivisi di annullamento/scadenza del broker. Non
accetta mai comandi, filtri, percorsi o URL dalla richiesta.

I valori strutturali sono evidenze di campionamento deterministiche, non una
comprensione semantica del video. Non deducono soggetti, azioni, didascalie,
parlato o intenzioni dell'utente. I confini delle scene e degli intervalli
congelati formano i segmenti; la copertura degli intervalli congelati, la
sfocatura, l'esposizione, il dettaglio spaziale e il cambiamento temporale
influenzano soltanto l'allocazione del budget esistente di 1–16 fotogrammi.
Un segmento interamente congelato è limitato a un fotogramma, mentre i segmenti
non congelati si contendono il budget rimanente. Quando i confini sono più
numerosi dei fotogrammi, viene mantenuta una copertura uniforme della sequenza
temporale, in modo che rapidi stacchi iniziali non possano nascondere un lungo
segmento finale. I confini di scena che si trovano entro la risoluzione di
analisi di 1 secondo rispetto al confine di un intervallo congelato vengono
accorpati.

Filtri mancanti, evidenze malformate o vuote, un errore del rilevatore o il
timeout della preanalisi con limiti definiti comportano un ripiego permissivo
sull'esatta politica dei punti medi uniformi. Un annullamento da parte del
chiamante o la scadenza del broker non comportano tale ripiego: terminano il
sottoprocesso in corso, impediscono la successiva estrazione dei fotogrammi
e l'albero temporaneo privato viene rimosso in `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera campioni di test deterministici
reali tramite FFmpeg per valutare il risparmio di chiamate al modello di
generazione delle didascalie dopo la deduplicazione, l'allocazione del budget
in presenza di movimento intenso, le evidenze di sfocatura/esposizione/SI-TI,
gli stacchi rapidi con un lungo segmento finale e i falsi positivi dovuti a
dissolvenze graduali. Registra il tempo reale trascorso per la preanalisi e,
dove `/usr/bin/time` è disponibile, il tempo CPU dei processi figli e il picco
di RSS. I suoi controlli di qualità sono esclusivamente oracoli strutturali.
La qualità reale del modello di generazione delle didascalie rimane `HOLD`
perché questo ambiente di test non dispone di un endpoint autorizzato né di un
valutatore fissato. Anche i risparmi monetari rimangono `HOLD`, a meno che
`--caption-cost-per-call-usd` non fornisca una stima esplicita e positiva per
chiamata; lo script non inventa mai nessuno dei due risultati.

Ogni fotogramma è limitato a 4 MiB, l'insieme di tutti i fotogrammi grezzi a 23 MiB e la
risposta serializzata del broker a 32 MiB. Una directory temporanea privata viene rimossa
in `finally`. OmniRoute non include FFmpeg e non accetta un percorso
personalizzato per l'eseguibile. Prima di generare le didascalie, il bridge applica un passaggio conservativo di
deduplicazione visiva: ogni JPEG viene ridotto a un buffer in scala di grigi di 16×16 e
confrontato solo con l'ultimo fotogramma mantenuto. Se il numero richiesto di fotogrammi
da corredare di didascalia è superiore a uno, l'estrazione fornisce un
insieme limitato di candidati, fino al doppio di tale numero e mai superiore a 16 fotogrammi.
Il limite richiesto viene applicato solo dopo la deduplicazione, preservando il primo e l'ultimo
candidato selezionato durante la riduzione finale quando il numero previsto è almeno
due. La policy versionata
`grayscale-16x16-mean-cells-v2` usa il maggiore tra il delta medio di luminanza e
la proporzione di celle della miniatura il cui delta normalizzato è almeno 0.05. La
soglia di duplicazione è la costante 0.04, scelta per garantire prevedibilità anziché
essere esposta come impostazione di runtime. Questo segnale secondario
ad alto contrasto preserva i piccoli movimenti e i cambiamenti del testo visibile che un
confronto basato solo sulla media può nascondere. Gli errori del comparatore o del decoder non bloccano l'elaborazione e mantengono
la copertura. I metadati di output distinguono i candidati estratti, i fotogrammi
usati con successo e i duplicati visivi scartati.

Una parte video contrassegnata esplicitamente può richiedere un provino a contatto con timestamp. Il
bridge crea una griglia JPEG con un massimo di 4 colonne e 16 fotogrammi. Ogni cella di 512 pixel incorpora
il timestamp di origine in una fascia inferiore ad alto contrasto, mentre gli stessi timestamp
rimangono nei metadati testuali per l'associazione e la verifica a valle. L'intero
JPEG resta limitato a 32 MiB. Se `sharp` non riesce a decodificare o comporre la griglia, il
bridge ripiega sui singoli fotogrammi JPEG; un'interruzione da parte del client continua a propagarsi
attraverso l'operazione sul provino.

Le evidenze a sostegno della promozione sono deliberatamente separate dal microbenchmark
di composizione sintetica. `scripts/perf/video-bridge-contact-sheet-eval.ts` definisce un
ambiente di test A/B con schema versionato per modelli di visione reali compatibili con OpenAI. Misura
i token dichiarati dal provider, la latenza effettiva end-to-end (inclusa la composizione del provino),
il numero di chiamate al modello e la conservazione dei fatti definiti nel manifest. Le risposte grezze del modello non vengono
scritte nel report; vengono conservati solo i digest SHA-256 e gli ID dei fatti corrispondenti. L'
ambiente di test non effettua chiamate di rete né chiamate a modelli a pagamento a meno che non venga passato `--execute-real` e
non siano configurati `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY`. Senza
tale esecuzione reale esplicita, il verdetto leggibile automaticamente rimane `HOLD`; le sole misurazioni sintetiche
del payload e del numero di chiamate non costituiscono evidenze a sostegno della promozione.

I chiamanti possono allegare un array opzionale `transcript.cues` a una parte
video supportata quando dispongono già di testo allineato. Ogni segmento deve contenere `text`, un
intervallo finito `start`/`end` all'interno della durata rilevata e un valore
`source` incluso nell'elenco consentito (`client`, `embedded` o `audio-bridge`); `confidence` ha come valore predefinito
`1` e deve rimanere compreso tra `0` e `1`. I segmenti esattamente duplicati vengono accorpati.
OmniRoute non avvia mai la trascrizione a partire da questi metadati: i segmenti convalidati vengono
copiati nel risultato della descrizione con origine, confidenza e intervallo, e
vengono presentati come osservazioni non attendibili insieme alle didascalie dei fotogrammi. Il testo non valido,
fuori intervallo o privo di provenienza viene rifiutato anziché essere mescolato al
flusso delle didascalie. Entrambi i canali di trascrizione nel corpo della richiesta normalizzano la
provenienza fornita a `client`, incluse le etichette autodichiarate `embedded` o `audio-bridge`.
Solo un adattatore controllato dal server può assegnare queste etichette attendibili tramite
l'argomento `trustedSource`, accessibile solo dal codice; un campo JSON della richiesta non può raggiungere
tale argomento. Il testo della trascrizione rimane contenuto non attendibile derivato dai media,
indipendentemente dalla sua provenienza, e non deve mai determinare l'autorizzazione.

Un chiamante avanzato può fornire una traccia `audioTranscript` per lo stesso video;
viene trattata come testo fornito dal client, non come prova di una trascrizione eseguita dal server.
Il punto di integrazione della fusione elabora le osservazioni visive e audio con
un'unica scadenza e un unico segnale di interruzione, le ordina su una linea temporale comune, accorpa
i duplicati esatti e restituisce un risultato parziale quando solo una delle due componenti riesce.
Un `audioTranscript` non valido comporta il ripiego su tale risultato parziale — la descrizione
visiva viene mantenuta e il ramo audio registra un codice di errore sanitizzato —
anziché far fallire l'intero video. La disponibilità di ciascun ramo, l'indicatore di risultato parziale
e i codici di errore sanitizzati vengono conservati nel risultato della descrizione, nei
metadati di protezione (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nei metadati della cache dei risultati e nei contatori
di fusione del bridge. Il percorso predefinito di Video Bridge non richiama la trascrizione vocale
né scarica una seconda copia del contenuto multimediale; senza quella traccia esplicita, rimane
esclusivamente video.

**Conservazione delle trascrizioni (#12150 P1).** Si applica automaticamente ogni volta che il
Video Bridge (a sua volta ad attivazione esplicita) genera un segmento di trascrizione: non esiste un flag
di conservazione separato. Quando una richiesta genera un qualsiasi segmento di trascrizione (un
`transcript` dichiarato dal chiamante o un `audioTranscript` integrato), il guardrail la contrassegna come
`videoBridgeObserved` e produce una copia ombra oscurata della descrizione del video:
una rappresentazione identica in cui il corpo di testo libero di ogni segmento viene sostituito con
`[redacted-video-transcript]`, creata sostituendo il campo strutturato del segmento
prima di assemblare la stringa (mai analizzando il testo appiattito, così che nessun contenuto
dei segmenti, malevolo o ordinario, inclusi i corpi contenenti `]` come
`[inaudible]`/`[music]`, possa sopravvivere). Il corpo della richiesta persistito nel log delle chiamate sostituisce
ogni parte testuale derivata dal video con tale copia ombra oscurata, individuata tramite uguaglianza
del contenuto; l'ancoraggio `fullText` viene riletto dal payload finale del guardrail
precedente alla chiamata, così che la corrispondenza continui a riuscire dopo che i successivi guardrail della catena (i sistemi di mascheramento dei dati personali e
delle credenziali, con priorità 10/95) riscrivono sul posto il testo della descrizione e
dopo che l'inserimento di prompt di sistema, passaggi di contesto e memoria riorganizza l'array dei messaggi. Il
corpo inviato al modello a monte rimane invariato. Inoltre, una richiesta osservata non alimenta
alcuna memoria persistente (vengono saltate sia l'estrazione dalla richiesta sia quella dalla risposta),
quindi la risposta del modello non può riportare il testo della trascrizione nella memoria.

**Campi video grezzi (#12430).** Quando il bridge è abilitato e il supporto video nativo è sconosciuto o assente, anche i campi `transcript`/`audioTranscript` definiti attivano `videoBridgeObserved`, persino dopo un errore nella descrizione o il raggiungimento del limite `maxVideos`. `null` e le stringhe vuote contano; i campi assenti e i metadati non video no. Le copie conservate oscurano questi campi oppure omettono la richiesta, e le cache e la memoria vengono escluse.

In questi percorsi di ripiego, i segmenti validi forniti dal chiamante diventano parti `text`/`input_text`
supportate anziché campi non standard del provider. Entrambe le tracce fornite nella richiesta
rimangono osservazioni `client` non attendibili, con un avviso esplicito che il video
non è stato descritto e che i timestamp non sono stati verificati rispetto al contenuto multimediale. Gli attuali
limiti complessivi di 256 segmenti/64 KiB e quelli per singolo segmento si applicano alle due tracce congiuntamente;
i timestamp devono rientrare nel limite massimo di 600 secondi del broker e nell'eventuale finestra
di interesse fornita. Le tracce non valide vengono scartate, non inoltrate come testo arbitrario; una
traccia associata valida può comunque essere utilizzata, a meno che non venga superato il limite complessivo. I campi nulli/vuoti
non aggiungono testo. Questo meccanismo di ripiego non comporta alcun recupero di contenuti multimediali né alcuna trascrizione.
I campi di estensione della trascrizione vengono rimossi dal contenitore video di ripiego e dai suoi
oggetti `video_url`/`source`. La lista dei campi consentiti nel formato di trasmissione OpenAI rimane rigorosa; i contenitori video con
supporto nativo sconosciuto restano disponibili e le destinazioni note come solo testuali mantengono marcatori sicuri.
Le copie ombra strutturate e oscurate proteggono il testo della trascrizione aggiunto, mentre la
richiesta originale di proprietà del chiamante rimane invariata. Le destinazioni con supporto nativo e
i bridge disabilitati mantengono il comportamento di esclusione esistente.

Le ulteriori copie conservate utilizzano lo stesso segnale di richiesta osservata. L'istantanea grezza
della richiesta del client precedente al guardrail, la richiesta in sospeso in memoria e il log delle richieste
rifiutate anticipatamente sostituiscono strutturalmente i campi di trascrizione nelle parti video;
i prompt sotto forma di stringa sintetizzati dalle fasi della pipeline e dal passaggio di contesto vengono oscurati
nel punto di persistenza del corpo della richiesta. Il marcatore `video_content_removed` persistito
fa sì che la continuazione tramite `previous_response_id` venga bloccata in modo sicuro anziché ricostruire
testo scartato intenzionalmente. Se una richiesta osservata perde la propria
copia ombra oscurata per parte prima della registrazione, oppure se anche una sola delle varie copie ombra video
non trova corrispondenza dopo successive modifiche alla richiesta, il corpo della richiesta conservato viene
omesso interamente anziché conservare una trascrizione oscurata solo in parte.

Per una richiesta osservata, la risposta del modello potrebbe citare qualsiasi porzione della
trascrizione senza un confine strutturato di segmento. Il relativo `responseBody` persistito nel log
delle chiamate viene quindi sostituito con un marcatore di omissione; l'artefatto dettagliato
della pipeline (che può includere corpi a monte/del client e blocchi di streaming)
non viene conservato. Per tale richiesta vengono saltate
letture e scritture nelle cache semantiche, di idempotenza e di riproduzione del ragionamento. La richiesta al provider e la risposta visibile al client
rimangono invariate. I byte keepalive iniziali vengono rimossi dal buffer temporaneo
quando l'artefatto dettagliato viene omesso. L'avviso di Kiro relativo a un EventStream
malformato riporta solo il numero di byte del payload, mai il suo contenuto né l'errore grezzo del
parser JSON.
Ciò non implica che ogni diagnostica non correlata di provider/plugin sia stata
verificata; la revisione più ampia dei punti di conservazione è monitorata in #11658.

Il ciclo di vita interno di `/api/modality-bridge/video/drilldown` è un'infrastruttura di cache separata,
con accesso loopback e autenticazione tramite token. Ogni operazione richiede inoltre un
ID canonico opaco del soggetto. Prima di abilitare un chiamante in produzione, questo deve
ricavare tale ID dal tenant autenticato e non deve mai inoltrare un
valore scelto dal client. Le chiavi della cache associano tale soggetto agli ID canonici di sessione e
di riferimento video, memorizzano solo le relative chiavi derivate tramite SHA-256 e limitano sia le letture
sia l'eliminazione allo stesso soggetto. La cache memorizza al massimo 16 fotogrammi JPEG
derivati per voce, li fa scadere dopo dieci minuti e supporta letture delimitate tramite
`start`/`end` o l'eliminazione esplicita della sessione.

Ogni soggetto è limitato a 16 voci e 64 MiB di dati JPEG canonici. Questi
limiti sono indipendenti dal tetto globale di 64 voci/256 MiB: la pressione sulla quota di un soggetto
provoca l'espulsione delle sole voci di quel soggetto utilizzate meno di recente, prima che venga presa in considerazione
l'espulsione LRU globale. Le voci scadute vengono rimosse dai conteggi sia per soggetto sia
globali durante l'attività della cache, mentre l'annullamento e il mancato superamento della convalida
non rendono definitiva una sostituzione parziale.

La cache rifiuta Base64 non canonico, padding in eccesso, contenuti multimediali non JPEG, JPEG malformati o
troncati e JPEG che generano un avviso durante una decodifica completa dell'immagine con limiti prestabiliti tramite `sharp`.
Ricodifica ogni immagine accettata come JPEG canonico, ricava larghezza e altezza
dai byte decodificati anziché fidarsi dei campi forniti dal chiamante e scarta eventuali
byte poliglotti finali anziché conservarli. Solo il buffer compresso canonico entro i limiti
viene conteggiato in entrambe le quote. Il limite JSON sul formato di trasmissione include l'overhead Base64 per il tetto di 32 MiB
dell'input decodificato. Ogni
derivato memorizzato registra il formato e la risoluzione JPEG convalidati, la politica di campionamento,
la versione di derivazione, l'ora di creazione, l'hash del contenuto calcolato dal server e il riferimento
al contenuto padre sotto forma di hash, oltre all'hash del contenuto padre fornito dal chiamante attendibile. L'annullamento viene verificato
tra le fasi asincrone di decodifica e hashing, prima del commit atomico nella cache.

Questa fase non collega ancora un produttore di produzione alla route e non
fornisce la selezione di varianti a più risoluzioni. Il percorso trasparente delle richieste di Video Bridge
non comporta quindi alcun lavoro aggiuntivo, mentre la derivazione del principal associata al tenant e
l'intero ciclo di vita multirisoluzione FU-08 restano esplicitamente attività successive, anziché
essere documentati come funzionalità complete.

Le didascalie dei fotogrammi vengono generate in sequenza con il modello Video configurato. Un override
Video vuoto eredita l'impostazione Vision; se entrambi sono vuoti, il router automatico
Vision seleziona il modello effettivo con capacità visive. Le didascalie generate correttamente
sostituiscono la parte originale con un prefisso stabile `[Video description:` che
contrassegna anche il testo come osservazione non attendibile derivata da contenuti multimediali e indica ai modelli
a valle di non seguire le istruzioni presenti nei contenuti multimediali. Le chiavi della cache delle didascalie dei fotogrammi
includono i byte JPEG, il prompt, il timestamp e il modello effettivo; vengono memorizzate nella cache solo
le didascalie generate correttamente. Le voci della cache conservano il modello effettivo che ha prodotto correttamente la didascalia,
anche se si tratta di un modello di fallback; il bridge riporta `mixed` quando fotogrammi diversi
sono stati elaborati da modelli diversi. Un riscontro nella cache riutilizza l'identità di tale produttore
anziché rietichettarla come piano di instradamento richiesto. La cache dei risultati dell'intero video
usa una chiave basata su ogni input che modifica l'output: prompt, modello
effettivo, politica di campionamento, numero di fotogrammi, modalità di analisi semantica, impronta SHA-256
dell'indicazione di focus normalizzata, finestra di focus, `transcript`,
`audioTranscript` e flag del foglio di contatto; pertanto, la modifica di una qualsiasi di queste
dimensioni determina un mancato riscontro nella cache, mai il riutilizzo di dati obsoleti. Anche la versione
della politica di deduplicazione visiva, la soglia e il numero limitato di fotogrammi candidati sono esplicitati nella
chiave e nei metadati della cache dei risultati; una modifica della politica non può quindi riutilizzare una descrizione
obsoleta dell'intero video. I metadati v4 della cache dei risultati conservano la modalità e
l'impronta, mai il testo originale dell'attività dell'utente. I metadati del guardrail riportano sia
la modalità di analisi richiesta sia quella effettiva; una modalità `focused` richiesta senza
testo utente utilizzabile viene riportata come effettivamente `full`.

Il guardrail estrae tutte le parti video supportate, ma ne descrive al massimo
`modalityBridgeVideoMaxVideos`. Per una destinazione per cui è stato accertato
`supportsVideo === false`, i video non elaborati correttamente e quelli oltre il limite diventano marcatori testuali espliciti e sicuri,
così che non rimanga alcun video grezzo. Quando la capacità è sconosciuta, tali parti
mantengono il proprio contenitore video; qualsiasi trascrizione di fallback segue la conversione
testuale con limiti descritta sopra. Le destinazioni con `supportsVideo === true` aggirano il bridge.
Il segnale di interruzione della richiesta client si propaga attraverso download, coda del broker,
sottoprocessi e chiamate di generazione delle didascalie; le interruzioni arrestano l'elaborazione tra un video e l'altro e non consentono mai,
in caso di errore, il passaggio di contenuti multimediali grezzi.

Le impostazioni di runtime sono archiviate nel DB e convalidate tramite Zod:

| Chiave                              | Predefinito | Intervallo / comportamento                                                                                                  |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opzionale, attivazione esplicita                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mantiene le didascalie generiche; `focused` usa il contesto dell'ultimo messaggio utente, limitato e non attendibile |
| `modalityBridgeVideoModel`          | `""`        | Eredita il modello Vision Bridge                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` o `segment_aware` proporzionale; se il rilevatore non funziona, viene usato `uniform`              |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                              |

I valori legacy del timeout Video memorizzati superiori a 120 secondi vengono limitati alla
scadenza del broker; le nuove scritture delle impostazioni che superano tale limite vengono rifiutate.
`GET /api/modality-bridge/video/runtime` richiede una provenienza loopback locale attestata da un contrassegno attendibile
prima dell'autenticazione o della verifica del runtime, quindi richiede l'autenticazione
di gestione. Restituisce solo `available`, le versioni sanificate di FFmpeg/ffprobe e una motivazione
fissa quando il runtime non è disponibile. L'endpoint di estrazione interno non è
un'API pubblica di caricamento: la saturazione della coda restituisce `503` insieme a `Retry-After`, una disconnessione
del chiamante restituisce `499` e la scadenza fissa del broker restituisce `504`. Le risposte convertite aggiungono
`video->text;model=<visionModel>;parts=<videos>` all'header centrale
`x-omniroute-modality-bridge` senza rimuovere i segmenti Vision o Audio.

### Mascheratore di dati personali (`piiMasker.ts`)

Viene eseguito in **entrambe** le fasi.

- **`preCall`** clona il payload, percorre `system`, `messages`, `input` e
  `prompt` (inclusi gli elementi costituiti da semplici stringhe) e applica `processPII()` (da
  `@/shared/utils/inputSanitizer`) ai campi stringa `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, i dati personali (PII) rilevati vengono oscurati nel
  payload in uscita. Questo comportamento è indipendente da `INPUT_SANITIZER_MODE` (che controlla solo
  la policy relativa alla prompt injection). Quando l'oscuramento è disattivato, la chiamata registra i conteggi
  dei rilevamenti senza riscrivere il contenuto.
- **`postCall`** esegue una clonazione profonda della risposta, esegue `sanitizePIIResponse()` e
  il mascheratore per la struttura dell'API Responses (`maskResponsesOutput` — copre
  `output_text` e `output[].content[].text`). Se viene eseguito un oscuramento, la
  risposta modificata sostituisce l'originale.

Il guardrail non blocca mai; si limita ad aggiungere annotazioni (`meta.detections`,
`meta.redacted`) o a riscrivere.

#### Selezione per tipo, pattern personalizzati e contatori dei rilevamenti

**Dashboard → Impostazioni → Sicurezza → Mascheramento PII** consente di scegliere _cosa_ mascherare.
Non attiva il mascheramento: questo dipende ancora da `PII_REDACTION_ENABLED` (richiesta) e
`PII_RESPONSE_SANITIZATION` (risposta + SSE), entrambi disattivati per impostazione predefinita.

- **Selezione per tipo** — gli ID predefiniti sono elencati in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Se non viene impostata alcuna selezione, vengono inclusi tutti i
  tipi (il comportamento precedente all'introduzione di questa impostazione). Il pattern
  `ssn_us` del motore delle richieste viene mappato a `ssn`. I modelli (Minimo, Standard, Finanziario,
  Brasiliano, USA, Completo) si limitano a selezionare le caselle nell'interfaccia.
- **Pattern personalizzati** — fino a 20 pattern regex o con caratteri jolly (`*` = fino a 64
  caratteri non di spaziatura, `?` = uno). Le corrispondenze diventano `[CUSTOM_REDACTED]`.
  Ogni pattern viene elaborato da `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): massimo 500 caratteri, flag limitati
  a `g i m s u`, deve poter essere compilato, deve superare il controllo di `safe-regex` (backtracking
  catastrofico) e non deve corrispondere a una stringa vuota o a un segnaposto di oscuramento.
  Un pattern che non supera i controlli viene rifiutato sia al salvataggio sia durante il test, e una riga memorizzata
  che non supera i controlli viene ignorata in fase di esecuzione anziché essere compilata. I pattern personalizzati vengono
  eseguiti solo quando il mascheramento è attivo.
- **Contatori dei rilevamenti** — conteggi per tipo (mai i valori corrispondenti), conservati in
  memoria e azzerati al riavvio (`src/lib/pii/piiDetectionStats.ts`). Aumentano
  solo quando il mascheramento è attivo.

Le impostazioni risiedono nella tabella `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) e vengono lette tramite una cache di 1 s. API:

| Metodo | Percorso                 | Scopo                                                                                            |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Stato dei flag, `enabledTypes`, `customPatterns`, contatori dei rilevamenti                      |
| `PUT`  | `/api/settings/pii`      | Sostituisce `enabledTypes` (`null` = tutti) e/o `customPatterns`                                 |
| `POST` | `/api/settings/pii/test` | Esegue una simulazione di un pattern su un campione di massimo 8 KB; non viene memorizzato nulla |

Tutti e tre richiedono l'autenticazione amministrativa e convalidano il corpo con Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt injection (`promptInjection.ts`)

Rileva strutture avversarie nei contenuti forniti dall'utente e applica la
policy configurata. Il comportamento è determinato dalle variabili d'ambiente e dalle opzioni
del costruttore:

| Impostazione     | Variabile d'ambiente                                                                                   | Valore predefinito | Effetto                                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abilitato        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`             | Quando è `false`, il guardrail termina immediatamente.                                                                                                                                                                             |
| Modalità         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`             | Policy di injection: `block`, `warn` o `log`. (`redact` è accettato per retrocompatibilità, ma **non** rimuove il testo di injection; la riscrittura dei dati personali nella richiesta è controllata da `PII_REDACTION_ENABLED`.) |
| Soglia di blocco | Opzione `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Gravità minima richiesta per bloccare. Per impostazione predefinita, la gravità media viene solo monitorata.                                                                                                                       |

**Precedenza delle modalità** (`getMode`): `options.mode` del chiamante →
**override del flag di funzionalità nel DB** per `INJECTION_GUARD_MODE` (Dashboard → Impostazioni →
Flag di funzionalità) → variabile d'ambiente `INJECTION_GUARD_MODE` → variabile d'ambiente `INPUT_SANITIZER_MODE` →
`warn`. Un override nella dashboard ha quindi la precedenza sulle variabili d'ambiente, perciò l'interfaccia dei flag
di funzionalità controlla il guardrail in esecuzione in tempo reale (senza riavvio). La lettura dal DB prevede un meccanismo di ripiego:
in caso di errore, il guardrail torna al comportamento basato sulle variabili d'ambiente e, quando non è
impostato alcun override, il comportamento è identico alla risoluzione basata solo sulle variabili d'ambiente.

Fonti di rilevamento:

1. `sanitizeRequest()` da `@/shared/utils/inputSanitizer` (insieme condiviso di rilevatori
   usato altrove nella pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (attualmente `system_override_inline` e
   `markdown_system_block`, entrambi con gravità `high`).
3. `customPatterns` facoltativi passati tramite le opzioni del costruttore (stringhe, regex
   o record `{ name, pattern, severity }`).

Quando `mode === "block"` **e** almeno un rilevamento raggiunge la soglia di
gravità, `preCall` restituisce `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nelle modalità `warn`/`log` il guardrail registra l'evento ma
consente la chiamata. Viene esportata anche la funzione ausiliaria condivisa `evaluatePromptInjection()`
per i chiamanti che devono valutare i prompt senza passare dal registro.

**Limite di scansione (v3.8.20):** il rilevatore esamina solo i **primi 16 KB** del
testo concatenato dei prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) in
`src/shared/utils/inputSanitizer.ts`. Sia `detectInjection()` sia
`evaluatePromptInjection()` eseguono `slice(0, MAX_INJECTION_SCAN_BYTES)` prima di avviare
il ciclo sui pattern. Le direttive di iniezione si trovano vicino all'inizio dell'input, quindi questo
limita il carico su CPU/GC dovuto alle regex per payload di diverse centinaia di KB senza indebolire il rilevamento (cfr.
#3932, #4041).

### Mascheramento delle credenziali (`credentialMasker.ts`)

Viene eseguito in **entrambe** le fasi, per ultimo nella catena predefinita (priorità `95`). Oscura
i pattern noti di chiavi API / token segreti nel payload in uscita (contenuto
dei messaggi, argomenti delle chiamate agli strumenti, risultati degli strumenti) **e** nella risposta del provider, affinché una
credenziale incollata in un prompt (o riproposta nel risultato di uno strumento) non venga divulgata
al provider a monte o restituita al client.

- **Solo su attivazione esplicita**, secondo la stessa convenzione dell'oscuramento dei dati personali (in linea con la regola vincolante #20):
  disabilitato a meno che `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando è disattivato, il guardrail non esegue alcuna operazione —
  non blocca e non riscrive mai.
- `redactCredentials()` percorre l'intero albero del payload/della risposta (`walkValue()`,
  protetto dall'inquinamento del prototipo e dai cicli tramite `WeakSet`) e sostituisce le corrispondenze con
  un segnaposto `[REDACTED:<type>]`, clonando solo i rami effettivamente
  modificati.
- `CREDENTIAL_PATTERNS` copre le chiavi dei provider LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), i token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), le chiavi di pagamento (Stripe, Square), le chiavi cloud
  (chiave di accesso AWS, Twilio, SendGrid, Mailgun), le chiavi private / i JWT,
  le stringhe di connessione contenenti credenziali (`mongodb://user:pass@...`, ecc.) e
  un pattern generico per i valori delle intestazioni `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Le chiavi che corrispondono a intestazioni (`authorization`, `x-api-key`, `api-key`,
  `apikey`) vengono oscurate strutturalmente (solo il valore, preservando il prefisso dello schema come
  `Bearer `/`Basic `) anziché tramite la regex generica sul testo.
- Il guardrail non blocca mai; si limita a riscrivere (`modifiedPayload` /
  `modifiedResponse`) e ad annotare (`meta.credentialsRedacted`, `meta.count`).

Test di regressione: `tests/unit/credential-masker-guardrail.test.ts`.

## Contratto di base (`base.ts`)

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
  block?: boolean; // true interrompe la catena
  message?: string; // mostrato in caso di blocco
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // restituito da preCall per riscrivere la richiesta
  modifiedResponse?: TValue; // restituito da postCall per riscrivere la risposta
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

Un guardrail segnala «nessuna modifica» restituendo `void`, `{}` oppure
`{ block: false }`. La restituzione di un `modifiedPayload`/`modifiedResponse` sostituisce
il valore che attraversa la catena per i guardrail successivi.
`signal?: AbortSignal` propaga il ciclo di vita del chiamante ai guardrail. L'annullamento di una richiesta costituisce un'eccezione deliberata al comportamento fail-open: i bridge multimediali interrompono l'elaborazione ed eseguono la pulizia senza ripristinare i contenuti multimediali grezzi per una destinazione che notoriamente non li supporta.

## Registro (`registry.ts`)

Il singleton `guardrailRegistry` espone:

- `register(guardrail)` — aggiunge un guardrail (o lo sostituisce in base al nome normalizzato) e
  riordina per `priority` crescente.
- `clear()` / `list()` — funzioni di utilità amministrative.
- `runPreCallHooks(payload, context)` — itera sui guardrail attivi, propaga il
  payload tramite `modifiedPayload` e si arresta al primo `block: true`.
- `runPostCallHooks(response, context)` — stesso flusso sul lato della risposta.
- `resetGuardrailsForTests({ registerDefaults })` — cancella lo stato e, facoltativamente,
  registra nuovamente i guardrail predefiniti per garantire un corretto isolamento dei test.

Entrambe le funzioni di esecuzione restituiscono `{ blocked, payload|response, results, guardrail?, message? }`
dove `results` è un array di record `GuardrailExecutionResult` che includono
i campi `blocked`, `skipped`, `modified`, `error` e `meta` per ciascun guardrail,
utili per il tracciamento.

### Disabilitazione dei guardrail per singola richiesta

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggrega un
elenco senza duplicati dei nomi dei guardrail da saltare per la richiesta
corrente. Sono disponibili cinque canali, letti in questo ordine e uniti in un unico elenco
(in caso di duplicati, prevale la prima occorrenza):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` nel corpo della richiesta (al livello principale)
3. `metadata.disabledGuardrails` nel corpo della richiesta (solo quando `metadata` è un oggetto)
4. Intestazione `x-omniroute-disabled-guardrails`
5. Intestazione legacy `x-disabled-guardrails`

Tutti e cinque i canali vengono uniti, incluse le due intestazioni: l'invio sia di
`x-omniroute-disabled-guardrails` sia di `x-disabled-guardrails` fa saltare l'unione dei
rispettivi elenchi e un'intestazione moderna vuota non nasconde più quella legacy
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corretto in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

I valori possono essere array di stringhe o una stringa con elementi separati da virgole; dai nomi vengono rimossi gli spazi iniziali e finali
e i nomi vengono normalizzati in kebab-case minuscolo (`pii_masker` → `pii-masker`), mentre le voci
vuote vengono eliminate. Il risultato viene passato tramite `context.disabledGuardrails`
al registro, che salta i guardrail corrispondenti (`skipped: true` in `results`).

L'elenco di disabilitazione ha effetto solo sul **registro**. La modalità `block` per la prompt injection costituisce
un confine di sicurezza obbligatorio: il middleware di protezione dalle injection
(`src/middleware/promptInjectionGuard.ts`) chiama `evaluatePromptInjection()`
senza alcun elenco di disabilitazione controllato dal chiamante (la chiamata inutilizzata a
`resolveDisabledGuardrails({ body })` che eseguiva in precedenza è stata rimossa in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), quindi una richiesta
che disabilita `prompt-injection` viene comunque rifiutata in modalità `block`. Questo comportamento è
voluto. I canali di disabilitazione sono controllati dal chiamante (corpo della richiesta,
metadati, intestazioni) e un chiamante non deve poter disattivare un controllo di
sicurezza configurato dall'operatore
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). L'unione delle intestazioni
introdotta in [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
modifica solo quali guardrail del registro vengono saltati; non consente a un client
di aggirare il middleware. Le policy obbligatorie dei guardrail per chiave e per gruppo sono
tracciate nella RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Vedere [Copertura e limiti](#coverage-and-limits).

## Ordine di esecuzione

Per ogni richiesta che passa attraverso `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts` (le route della famiglia chat elencate in
[Copertura e limiti](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` crea l'elenco delle esclusioni a partire dalla chiave API, dal corpo
   e dagli header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` esegue i guardrail in ordine
   di priorità crescente:
   - I guardrail disabilitati vengono registrati come `skipped`.
   - Il `preCall` di ciascun guardrail può riscrivere il payload tramite `modifiedPayload`.
   - Il primo `block: true` interrompe la catena e il gestore restituisce
     una risposta di rifiuto del guardrail.
3. Il payload (eventualmente riscritto) passa al routing combo e all'inoltro
   a monte.
4. **Solo per le risposte non in streaming:** dopo che la risposta è stata assemblata,
   `guardrailRegistry.runPostCallHooks(...)` esegue la stessa catena sulla
   risposta. In questo caso, `block: true` scarta la risposta a monte e restituisce HTTP 400. Le risposte in streaming saltano completamente questo passaggio.

I guardrail che generano eccezioni vengono registrati con `error: <message>` e segnalati tramite
`logger.warn`, ma la catena prosegue: il comportamento fail-open è intenzionale.

## Copertura e limiti

Il registro dei guardrail è integrato esclusivamente nella pipeline di chat. Questi limiti sono
fissati da `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` e
`tests/unit/guardrail-pipeline-characterization.test.ts`; aggiornare questi test
consapevolmente quando il comportamento cambia.

### Dove vengono eseguiti gli hook

| Hook / controllo                                  | Ambito di esecuzione                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                 | Richieste gestite da `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (e `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` e il proxy di chat Telegram. Anche l'endpoint di test della dashboard `/api/guardrails/test`. Un blocco prima della chiamata restituisce HTTP 400. |
| `runPostCallHooks`                                | Solo risposte di chat **non in streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Le risposte in streaming non lo raggiungono mai.                                                                                                                                                                                                                                                                                                   |
| PII in streaming                                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), inserito nella pipeline in `streamingPipeline.ts` quando `PII_RESPONSE_SANITIZATION` è attivo. Non è un guardrail, quindi i canali di disabilitazione non hanno effetto su di esso.                                                                                                                                                                                                     |
| Middleware di protezione dalle injection (legacy) | Ogni route `/v1` che contiene un prompt, incluse quelle della famiglia chat (vedere [copertura delle route](#injection-guard-route-coverage--red-team-phase-8--block-d)). Solo prompt injection.                                                                                                                                                                                                                                                      |

### Cosa non è coperto

- **Le route per contenuti multimediali, embedding e dati** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) non raggiungono mai il registro. Non
  vi vengono eseguiti il mascheramento delle PII, il mascheramento delle credenziali o il bridge tra modalità. Il loro unico
  controllo è il middleware legacy di protezione dalle injection.
- **Le risposte in streaming** non ricevono guardrail dopo la chiamata: né `pii-masker` né
  `credential-masker` dopo la chiamata, e nessun blocco dopo la chiamata. Si applica solo la trasformazione delle PII
  in streaming (quando `PII_RESPONSE_SANITIZATION` è attivo). Una credenziale
  riportata in una risposta in streaming non viene oscurata.
- **Canali di disabilitazione e middleware (per scelta progettuale):** il middleware valuta
  la prompt injection con una propria chiamata a `evaluatePromptInjection()`, senza
  passare alcun elenco di disabilitazione controllato dal chiamante. La modalità `block` costituisce un
  limite obbligatorio che le disabilitazioni controllate dal chiamante non possono aggirare, nemmeno sulle route della famiglia chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Disabilitare
  `prompt-injection` salta solo il guardrail del registro.

### Cosa accede a una risposta prima degli hook successivi alla chiamata

Nel percorso non in streaming, l'ordine è: estrazione della memoria → esecuzione degli strumenti
integrati → guardrail successivi alla chiamata → uscita per blocco successivo alla chiamata → memorizzazione nella cache semantica.

- **L'estrazione della memoria** e **l'esecuzione degli strumenti** vedono la risposta prima che i
  meccanismi di protezione successivi alla chiamata possano riscriverla o bloccarla. A partire dalla
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), l'estrazione della
  memoria elabora il testo estratto con `sanitizePII` quando
  `PII_RESPONSE_SANITIZATION` è attiva (sia in streaming sia senza streaming), ma una
  risposta che viene successivamente bloccata dai controlli successivi alla chiamata è comunque già stata messa a disposizione della memoria e
  degli strumenti.
- **La cache semantica** memorizza la risposta dopo i controlli successivi alla chiamata, quindi memorizza la
  risposta riscritta, mentre una risposta bloccata non viene mai memorizzata nella cache. Le voci della cache sono
  indicizzate per chiave API.

## Configurazione

Variabili d'ambiente lette dai guardrail integrati:

| Variabile                             | Utilizzato da          | Effetto                                                                                                                                            |
| ------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Impostare su `false` per disabilitare completamente il rilevamento.                                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Criterio di gestione delle iniezioni: `warn`, `block` o `log`. Il valore legacy `redact` non riscrive il testo dell'iniezione.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Modalità del guardrail contro le iniezioni; è anche un flag di funzionalità nel DB che **ha la precedenza** sulle variabili d'ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Gravità minima rifiutata da `MODE=block`: `high` (predefinita), `medium` o `low`.                                                                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Alias legacy di `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Se impostata su `true`, i dati personali (PII) della richiesta vengono oscurati (indipendentemente dalla modalità di gestione delle iniezioni).    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a valle) | Controlla il comportamento del mascheramento nelle risposte.                                                                                       |

I guardrail di Modality Bridge leggono la configurazione di runtime dall'archivio
delle impostazioni basato su DB (`getSettings()`), non dalle variabili d'ambiente. Le chiavi principali di Vision sono
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e
`modalityBridgeCacheMaxEntries`. Le chiavi legacy
`visionBridge*` sono accettate solo come fallback di lettura documentato per un singolo
ciclo; le scritture dalla dashboard utilizzano le chiavi principali. I valori predefiniti e il risolutore
del fallback si trovano in `src/shared/constants/modalityBridgeDefaults.ts`, mentre le costanti
legacy sono mantenute in `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilizza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, oltre alle impostazioni condivise
`modalityBridgeCache*`. Audio non prevede un fallback sulle chiavi legacy perché queste
chiavi sono state introdotte con lo schema di Modality Bridge.

Video utilizza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` e
`modalityBridgeVideoTimeout`, oltre alle impostazioni condivise `modalityBridgeCache*`.
È disabilitato per impostazione predefinita perché FFmpeg/ffprobe sono dipendenze operative
opzionali e la generazione di descrizioni dei fotogrammi aumenta la latenza e il costo di utilizzo del modello.

## Guardrail personalizzati

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

Passaggi:

1. Creare `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implementare `preCall` e/o `postCall`.
3. Registrare il guardrail al momento dell'importazione (da `registerDefaultGuardrails`) oppure
   chiamare `guardrailRegistry.register(...)` in fase di esecuzione — il registro sostituisce
   qualsiasi guardrail precedente con lo stesso nome normalizzato.
4. Aggiungere test in `tests/unit/` (esempi esistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Usare `resetGuardrailsForTests()` tra un test e l'altro per partire da uno stato noto.
Passare `{ registerDefaults: false }` per iniziare con un registro vuoto e
registrare solo i guardrail da testare. Vision Bridge accetta l'iniezione delle
dipendenze (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge espone punti
di integrazione equivalenti per impostazioni, funzionalità, selezione del modello STT, verifiche
delle credenziali e trascrizione. I test possono quindi verificare entrambi i flussi senza accesso al DB
o alla rete.

## Vedere anche

- `src/lib/guardrails/` — implementazione
- `src/shared/utils/inputSanitizer.ts` — rilevatore condiviso alla base del
  rilevamento delle prompt injection e del mascheramento dei dati personali (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — valori predefiniti di Vision Bridge ed
  elenco dei modelli per cui il bridge è obbligatorio
- `src/shared/constants/modalityBridgeDefaults.ts` — valori predefiniti condivisi per l'esecuzione di Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — livello ortogonale (circuit breaker, intervalli di attesa)
- `docs/reference/ENVIRONMENT.md` — riferimento completo delle variabili d'ambiente

## Copertura delle route di injection-guard e red team (Fase 8 · Blocco D)

Il meccanismo injection-guard (`createInjectionGuard` / `withInjectionGuard`) copre tutte le route
che accettano prompt degli utenti. Rispetta `INJECTION_GUARD_MODE` (valore predefinito `warn` = sola registrazione nei log;
`block` = restituisce HTTP 400 `SECURITY_001`).

| Tipo              | Route                                                                                                                                                | Modalità predefinita |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Testo (esistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Generative        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Dati              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L'estrazione del testo (`extractMessageContents`) copre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (ogni notte, `nightly-llm-security.yml`):** promptfoo verifica che ogni route blocchi
il corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak esegue sonde di verifica (l'esecuzione viene saltata in assenza del segreto).
`moderations` è incluso per coerenza. La modalità di blocco costituisce un vincolo obbligatorio: `evaluatePromptInjection()`
ignora l'elenco di disabilitazione per richiesta passato dal middleware, quindi `disabledGuardrails`
**non** esenta una route da tale vincolo ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Il flusso di lavoro notturno (`.github/workflows/nightly-llm-security.yml`, cron + avvio
manuale) prevede due job:

- **`promptfoo-guard` (bloccante)** — esegue `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Ogni caso avversario (ad es. "ignora tutte
  le istruzioni precedenti…", jailbreak in stile DAN) verifica che la risposta contenga
  `error.code === "SECURITY_001"`, ossia che il meccanismo di protezione abbia effettivamente rifiutato la richiesta.
- **`garak` (informativo)** — esegue garak `--probes promptinject,dan,leakreplay`
  su un'istanza locale di OmniRoute (`http://localhost:20128/v1`). L'esecuzione è subordinata alla presenza di un
  segreto del provider (`PROMPTFOO_PROVIDER_KEY`); in sua assenza viene saltata senza errori e il comando termina con
  `|| true`, quindi riporta i risultati senza far fallire la CI.

La copertura delle funzioni ausiliarie di protezione (`createInjectionGuard` / `withInjectionGuard`)
si estende a ogni route `/v1` che contiene prompt; il testo dei prompt viene estratto da
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` tramite
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.

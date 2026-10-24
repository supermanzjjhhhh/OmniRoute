# Guardrails (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Извор истине:** `src/lib/guardrails/`
> **Последњи пут ажурирано:** 2026-10-17 — v3.8.52 (додата [Покривеност и ограничења](#coverage-and-limits):
> до којих рута и путања одговора хукови допиру, спојена заглавља онемогућавања (#16412), режим блокаде
> инјектовања као обавезна граница (#16413), и шта види одговор пре позивања)

Заштитне ограде примењују сигурност, политике и трансформације садржаја на граници
између система OmniRoute и узводних провајдера. Свака заштитна ограда може да провери (и
опционо одбаци, трансформише или анотира) садржаје захтева (`preCall`) и узводне
одговоре (`postCall`).

Систем је **fail-open**: ако заштитна ограда избаци изузетак током извршавања, регистар
бележи грешку и наставља са следећом заштитном оградом уместо да доведе до неуспеха
захтева. Блокирање је експлицитна одлука (`block: true`), никада случајност.
Једини изузетак је прекинут захтев: када је `signal` позиваоца прекинут,
заштитна ограда која избаци изузетак одбацује извршавање хука уместо да буде прескочена.

Хукови се **не** извршавају на свакој рути или сваком одговору. Прочитајте
[Покривеност и ограничења](#coverage-and-limits) пре него што се ослоните на заштитну ограду као
безбедносну контролу.

## Уграђене заштитне ограде

Регистар аутоматски учитава шест заштитних оградâ у редоследу приоритета при увозу
(видети `registry.ts` → `registerDefaultGuardrails()`):

| Приоритет | Назив               | Фаза(е)        | Датотека              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Бројеви нижег приоритета се извршавају **први**.

### Визијски мост (`visionBridge.ts`) — Modality Bridge PR-1

Основни модел GLM 5.3 и `glm-5.3-{low,high,max}` имају експлицитне
метаподатке регистра/спецификације `supportsVision:false`. Варијанте GLM 5.3 Flash
остају модели са изворном подршком за вид. Рута `/v1/messages` за Claude Code улази у
дељени ланац претпозивних заштитних оградâ `handleChat` **пре**
транслације са Claude-а на OpenAI; угнежђене слике резултата алата `Read` морају бити описане или обрађене
пре него што их та транслација подигне у `image_url` садржај за OpenAI (#17069).

Пресреће захтеве који садрже слике усмерене ка **моделима без подршке за вид** и или
преусмерава цео захтев на модел са подршком за вид или замењује делове са сликама
текстовима описа које генерише конфигурабилни визијски модел пре
узводног позива. Ово омогућава провајдерима који подржавају само текст да транспарентно рукују
мултимодалним садржајима.

Ток:

1. Прескаче се ако циљни модел већ подржава вид (осим ако се не налази на
   листи принудног моста `isVisionBridgeForcedModel`).
2. Извлачи делове са сликама помоћу `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), што се делегира на **уједињени детектор
   медија** `detectMediaParts()` у `open-sse/utils/mediaParts.ts` —
   јединствени извор истине који се дели са филтером компатибилности комбинованих модела.
   Извлачење је дозвољено само за облике које `replaceImageParts` може поново
   да споји (уговор извлачења и замене `extract↔replace`): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, и Responses
   API `input_image`. Одговарајуће слике угнежђене у `tool_result.content`
   за Claude Code и излазе алата Responses такође се извлаче и
   замењују на њиховим оригиналним путањама; облици који служе само као индикатори су материјал
   за филтер комбинација и не извлаче се.
   Прескаче се ако ништа није пронађено.
3. Решава конфигурацију у току извршавања преко `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): нови кључеви подешавања `modalityBridge*`
   имају предност; застарели кључеви `visionBridge*` остају као **резервна опција за један циклус**
   (прозор за враћање на старо). Прескаче се пре било каквог проласка кроз медије када је
   мост онемогућен.
4. Селектор режима (`modalityBridgeVisionMode`, погледајте табелу испод)
   одлучује између преусмеравања и описивања. Преусмеравања враћа `modifiedPayload` са само замењеним пољем
   `model`, плус мета податке `{ rerouted, fromModel, toModel, imagesKept }`.
5. Путања описивања: ограничава број слика на `maxImages`, саставља упит свестан задатка,
   проверава кеш описа, позива визијски модел **паралелно**
   (`Promise.allSettled`), и уместо њих убацује делове текста `[Image N]: <description>`.
   Неуспело описивање даје `null`: сирова слика се чува за
   непознате циљеве или циљеве са подршком за вид (#4012), али **потврђени директни циљ који подржава само текст**
   или комбинација без видне подршке добија експлицитни текстуални окрњак
   `(unavailable — no vision-capable provider connected)` за сваку
   неописану слику, укључујући дељене неуспехе и слике изнад
   ограничења позива за описивање (#17069). Постојећи резервни механизам за описивање комбинација када сви покушаји не успеју
   остаје на снази (#8430).
6. Враћа `modifiedPayload` + мета податке (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Селектор режима (`modalityBridgeVisionMode`)

| Режим      | Подразумевано | Понашање                                                                                                                                                                                                                                                                                    |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Застарела хеуристика, нетакнута (#6640/#7204): модели који нису комбо/`auto/` преусмеравају се на најбољи визуелни модел осим ако оригинални модел већ нема употребљиве акредитиве (затим опиши); комбо циљеви увек описују.                                                                |
| `describe` |               | Увек опиши — блок преусмеравања се у потпуности прескаче; модел који је корисник изабрао увек одговора.                                                                                                                                                                                     |
| `reroute`  |               | Принудно преусмеравање: заштита за задржавање модела са акредитивима се заобилази. Заштита акредитива за преусмерени **циљ** и даље важи — када не постоји употребљив визуелни циљ, мост блокира са јасном грешком уместо да описује или шаље сирове слике на циљ који подржава само текст. |

Принудни режими се извршавају **пре** него што се покрене аутоматска хеуристика; понашање за `auto` је бајт-идентично заштитном зиду пре PR-1.

#### Опсег API кључа (`visionBridgeKeyScope.ts`)

Када API кључ позиваоца ограничава `allowedConnections`, базене квота (`allowedQuotas`) или моделе (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), мост бира само моделе за преусмеравање и опис које кључ може да користи, на конекцијама које кључ може да користи. Позив за опис затим увек пролази кроз OmniRoute самоповратну петљу са хедъром `x-omniroute-self-loop-key-id`, тако да пријемни захтев за ћаскање поново примењује политику конекција и модела тог кључа. `enforceApiKeyPolicy()` поштује тај хедър само заједно са bearer-ом самоповратне петље, тако да може само да сузи приступ, а ID који се не разрешава се одбија.

Ако ниједан визуелни модел није дозвољен за кључ, **потврђени циљ који подржава само текст** локално одбија захтев за слику уз јасан HTTP 400 уместо да прослеђује бајтове слике неспособном узводном систему (#17069). За циљеве са непознатом или нативном визуелном способношћу, путања описа задржава своје претходно понашање отвореног отказивања (fail-open) (мета `{ skipped: true, reason: "no_permitted_vision_model" }`). Захтеви без кључа, и кључеви без ових ограничења, понашају се потпуно исто као и пре.

#### Промпт за опис свестан задатка (`modalityBridgeVisionTaskAware`)

Подразумевано **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) додаје текст **последње корисничке поруке** (скраћен на 500 знакова) на основни промпт за опис, усмеравајући опис ка ономе што је корисник заправо питао (codex-vision-proxy образац) и тражећи од визуелног модела да транскрибује видљиви текст. Са искљученим флегом — или без корисничког текста — основни промпт се користи непромењен.

Сопствени OpenAI-компатибилни захтев самоповратне петље за опис (`callVisionModelSingle()` у `visionBridgeHelpers.ts`) увек захтева `image_url.detail: "high"` — безусловно, за сваког позиваоца/провајдера, без условљавања било каквим сигналом клијента. Узорковање са ниским нивоом детаља смањује тачност OCR-а управо за задатак транскрипције текста који овај промпт тражи, тако да сам позив за опис увек захтева високе детаље без обзира на то који ниво детаља је користио оригинални долазни захтев. Ово утиче само на интерно тело захтева за опис; не мења начин на који OmniRoute прослеђује сопствени `image_url.detail` позиваоца на примарном захтеву — та вредност по дефолту се примењује одвојено, и то само за детектоване OpenCode клијенте, у `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Грана за Anthropic жичани формат самоповратне петље за опис нема поље `detail` и на њу не утиче ниједно подразумевано подешавање.

#### Горња граница излаза описа (`modalityBridgeVisionMaxChars`)

| Кључ                           | Подразумевано | Опсег             |
| ------------------------------ | ------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` или 100–50000 |

`0` (подразумевано) значи **без границе** — опис који враћа `callVisionModel()` прослеђује се непромењен, чувајући постојеће понашање. Било која вредност у опсегу од 100 до 50000 скраћује опис са суфиксом `…` пре него што се поново уметне као `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` у `src/lib/guardrails/visionBridge.ts`). Повећајте ову вредност за OCR задатке богате детаљима где низводном моделу треба пуна транскрипција; смањите је да бисте ограничили потрошњу токена на визуелним моделима који генеришу пуно текста. Поље на контролној табли се налази на напредном панелу картице Vision (`modality-bridge-max-chars` у `ModalityBridgeVisionTab.tsx`) и ограничава било коју вредност између 1 и 99 на доњу границу од 100, док експлицитну вредност `0` оставља непромењеном — `0` је сама по себи важећа Zod вредност (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), а не само подразумевана вредност за „неподешено“.

#### Кеш описа (`modalityBridge/bridgeCache.ts`)

У меморији LRU + TTL кеш за излазе описа, дељен на нивоу целог процеса. Кључ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` са оквиром префикса дужине (без сукоба граница поља). Компонента модела је **конфигурисани** модел моста, а не модел који је стварно одговорио — `callVisionModel` може интерно да се врати на алтернативу, а креирање кључа по покушају би фрагментирало кеш. Неуспешни описи се никада не кеширају. Подешавања:

| Кључ                            | Подразумевано | Опсег   |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Normalizacija udaljenih slika (self-loop describe/base64 fetch)

Kada most sam preuzima **udaljenu** sliku — Anthropic describe poziv samog sebe i claude-wire-format base64 konverziju (`ensureBase64ImagesForClaudeWire`), obe preko `fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — dobijeni data URI se prosleđuje kroz `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) pre nego što se ugradi u zahtev vision-modela. Prevelike slike se smanjuju na **dužu ivicu od 2048px** (što odgovara ograničenju veličine koje OpenAI/Anthropic već primenjuju na serverskoj strani), što smanjuje bajtove/latenciju otpremanja bez promene onoga što vision model vidi. Promena veličine koristi `sharp`, učitan preko dinamičkog uveza: na platformi gde njegov izvorni binarni fajl ne uspe da se učita, `normalizeDataUri()` **nikada ne baca grešku** — vraća se na prosleđivanje originalnih bajtova, tako da putanja za describe/base64-konverziju uvek nastavlja da radi. Bajtovi koji nisu slike (preuzimanje koje nije vratilo sliku koja se može dekodovati) takođe se prosleđuju netaknuti. Ova normalizacija je ograničena na slike koje most preuzima za sopstveni poziv — nikada se ne primenjuje na sirovi passthrough payload pozivaoca, u skladu sa principom mutacije samo po izboru (Hard Rule #20).

#### Šema podešavanja + migracija

Novi `modalityBridge*` ključevi su Zod-validirani u `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio i `modalityBridgeAudio*` grupa koju koristi Audio Bridge. Migracija `141_modality_bridge_settings.sql` kopira postojeće stare `visionBridge*` vrednosti u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje vrednost `modalityBridge*` koju je postavio operater); stari ključevi ostaju prihvaćeni kao rezervna opcija za čitanje tokom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformisani pomoću describe nose `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (kreirano pomoću `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`, označeno sa `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`). Preusmereni zahtevi **nemaju** zaglavlje — payload je ostao netaknut, a zamena modela je već vidljiva u polju `model` tela odgovora.

`GET /api/modality-bridge/stats` (autentifikacija za upravljanje, isti nivo kao `GET /api/settings`) vraća in-memory brojače po modalitetu `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i `video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao svoj imenilac; operacija bez merenja vremena ne izmišlja uzorak od nula milisekundi. `bridged` ostaje unazad kompatibilan alias za uspešne konverzije; neuspešni pokušaji ga ne uvećavaju. Brojači se po dizajnu resetuju pri ponovnom pokretanju procesa (telemetrija, a ne računovodstvo).

#### Konfiguracija kontrolne table

Namenska stranica kontrolne table je `/dashboard/settings/modality-bridge`. Njeni `Vision`, `Audio` i `Video` jezičci koji su adresabilni preko URL-a čuvaju parametre upita dok menjaju vrednost `tab`. Kartica Vision pruža mogućnost omogućavanja, režim, izbor modela (uključujući automatsku podrazumevanu vrednost), promptovanje svesno zadataka, napredna ograničenja za tajmaut/sliku/dužinu opisa/keš, brojače u radnom vremenu i zaštićeni uzorak zahteva. Audio kartica je takođe aktivna: pruža omogućavanje, birač modela samo za STT sa opcijom Auto, ograničenja za tajmaut/maksimalni klip, audio brojače i probni test za `input_audio`. Video kartica je funkcionalna: izveštava o radnom stanju FFmpeg/ffprobe-a — jednom od četiri eksplicitna UI stanja (`unknown` dok je proba u toku ili nije mogla da se završi, `restricted` na hostu kontrolne table koji nije loopback gde se proba preskače na strani klijenta, `unavailable` kada se isproba i potvrdi da nedostaje, ili `available` sa verzijama FFmpeg/ffprobe) — čuva ograničenja za omogućavanje/model/frejm/video/tajmaut, filtrira birač modela na modele sposobne za vizuelnu obradu i izlaže video brojače.

Bivša kartica Vision Bridge pod podešavanjima za veštačku inteligenciju predstavlja link kompatibilnosti ka novoj stranici; ona više ne poseduje drugu kopiju obrasca. Media Providers takođe povezuje radne procese Image-to-Text i Speech-to-Text sa odgovarajućim karticama Modality Bridge-a bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje prijema sa samopozivom (self-loop admission bypass):** kada poziv za opis prolazi kroz sopstveni `/v1` self-loop OmniRoute-a (nestandardni model provajdera), pod-zahtev šalje `x-omniroute-admission-bypass: internal` i autentifikuje se sa razrešenim akreditivom za self-loop — lokalnim `sk_omniroute` sentinelom u lokalnom režimu, ili env ključem `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurisao operater (#1350) tako da primene sa `REQUIRE_API_KEY=true` i dalje mogu da izvrše poziv za opis. Zaobilaženje se uvažava samo za te tačne akreditive, tako da spoljni klijenti ne mogu koristiti zaglavlje da bi preskočili prijem.

Stare podrazumevane vrednosti se nalaze u `src/shared/constants/visionBridgeDefaults.ts`; nove podrazumevane vrednosti za režim/svesnost zadatka/keš i razrešivač podešavanja se nalaze u `src/shared/constants/modalityBridgeDefaults.ts`. Zaštitna ograda pruža opciju konstruktora `deps` tako da testovi mogu da ubace lažne implementacije `getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahteve za ćaskanje koji sadrže audio pre nego što stignu do cilja za koji se zna da ne prihvata audio unos. On nikada ne preusmerava zahtev za ćaskanje: audio delovi se transkribuju preko postojeće multipart krajnje tačke kompatibilne sa OpenAI-jem i izabrani model za ćaskanje nastavlja sa tekstualnim transkriptima.

Tok:

1. Решите `supportsAudio` кроз `getResolvedModelCapabilities()`. Експлицитни метаподаци регистра провадера имају предност, затим статички метаподаци модела, па синронизовани `modalities_input`. Декларисана улазна листа без `audio` је `false`; одсуство доказа о могућностима остаје `null`. И `false` и `null` активирају конзервативни мост, док га `true` заобилази.
2. Решите поставке `modalityBridgeAudio*` и извуците делове за аудио на врху који се могу заменити из сваке поруке помоћу детектора `detectMediaParts()`. Подржани мрежни облици су OpenAI `input_audio`, `audio_url` и `source.media_type: "audio/*"`. Угнежђени аудио се детектоје ради рутирања, али га путања за спајање не уклања. Рад је ограничен са `modalityBridgeAudioMaxClips`; каснији делови остају недодирнути.
3. Узмите у обзир конфигурисани `provider/model`, или пустите да `selectAudioBridgeModel()` прође кроз `AUDIO_TRANSCRIPTION_PROVIDERS` стабилним редоследом каталога и изабере први модел са употребљивим активним акредитивима провадера.
4. `callAudioTranscription()` претвара base64/data-URI аудио у мултипарт `file`, или преузима удаљени `audio_url` кроз одлазну заштиту искључиво за јавне адресе са DNS pinning-ом и границом од 25 MB. Затим шаље (POST) фајл и изабрани модел локалној петљи `/v1/audio/transcriptions`, ауторизованој помоћу `resolveSelfLoopBearer()`. Постојећа рута за транскрипцију обавља уобичајену претрагу акредитива, управљање периодом хлађења/границом захтева и прослеђивање провадеру.
5. Успешни позиви замењују своје делове са `[Audio N]: <transcript>`. Позиви се извршавају са `Promise.allSettled`: појединачни неуспех чува тај оригинални аудио део (уговор #4012). Ако сви позиви не успеју и за циљ се испостави да је `supportsAudio === false`, делови постају `[Audio N]: (unavailable — no STT provider connected)` (уговор #8430). За непознати циљ (`null`), резултат у којем сви позиви не успеју остаје недодирнут. Доказани циљ који подржава само текст без употребљивих STT акредитива добија исти експлицитни потпис без покретања мрежног позива.

Успешни транскрипти користе LRU/TTL кеш Модалног моста на нивоу процеса. Кључ комбинује аудио референцу, стабилну ознаку операције `audio-transcription` и изабрани STT модел; неуспеси се никада не кеширају. Аудио покушаји ажурирају дељена бројања `bridged`, `cacheHits`, `failures` и `lastUsedAt`. Трансформисани одговори носе заглавље `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; недодирнути захтеви не добијају сегмент Аудио моста.

Поставке времена извршавања су засноване на бази података и валидиране помоћу Zod-а:

| Кључ                          | Подразумевано | Опсег          |
| ----------------------------- | ------------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —              |
| `modalityBridgeAudioModel`    | `""`          | Auto or STT ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10           |

Дељени кеш остаје под контролом поставки `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` и `modalityBridgeCacheMaxEntries`.

### Видео мост (`videoBridge.ts`, `videoBridgePipeline.ts`)

Пресреће делове за видео на врху у пољима `messages` за Chat Completions и `input` за Responses API пре него што се позве циљ без познате изворне подршке за видео. Подржани облици су `input_video`, `video_url`, `video_source`, HTTPS URL-ови и `data:video/*;base64,...` data URI-јеви. Обични називи фајлова у тексту се не третирају као видео.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) управља обиласком захтева, провером могућности/политике, агрегацијом по захтеву и корисним теретом одговора. Рад по видеу — прибављање, кеш целокупног резултата, опис секвенце кадрова (који спаја било који аудио транскрипт који је декларисао позивалац) и метрика/прекид/чишћење по покушају — сакривен је иза функције `processVideoPart` у фајлу `videoBridgePipeline.ts`, која се позива једном по видео делу унутар петље у `preCall`. Тај модул такође дефинише експлицитне границе портова `VideoMediaBrokerPort` (прибављање бајтова и екстракција узоркованих кадрова), `VideoAudioTranscriptionPort` (спајање аудио транскрипта који је декларисао позивалац са узоркованим натписима) и `VideoDrilldownPort` (границу перзистенције дубинске анализе кадрова; још увек није повезано у `processVideoPart` — само засебна рута `/api/modality-bridge/video/drilldown` данас уписује ставке дубинске анализе).

Јавна `/v1` путања захтева никада не увози нити покреће потпроцес. Удаљени видеи се преузимају испод границе од 50 MiB; уграђени base64 видеи имају конзервативно декомпримовано ограничење од 36 MiB по видеу како би оквир модела/порука/оквиривања остао унутар границе прихватања јавних JSON захтева од 50 MiB. Процене уграђене дужине и декодиране величине се проверавају пре алокације. HTTPS је обавезан на почетном удаљеном URL-у и сваком преусмеравању, коришћењем постојеће одлазне заштите искључиво за јавне адресе са DNS pinning-ом. Бајтови затим прелазе тачну унутрашњу границу брокера `POST /api/modality-bridge/video/extract`. Та рута је и `LOCAL_ONLY` и `SPAWN_CAPABLE`, прихвата само захтев ауторизован по процесу кроз поуздану повратну петљу, и никада не прихвата URL, путању до фајла система, извршну датотеку или листу аргумената. Цевовод величине тела API-ја и инкрементални читач тела руковаоца независно примењују улазно ограничење брокера од 50 MiB. Његов ограничен ред чекања извршава једну екстракцију у исто време, дозвољава четири посла на чекању и ограничава улаз на чекању на 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksna lista dozvoljenih formata isključuje formate plejlista i manifesta. Za dozvoljene kontejner formate iz MOV porodice, spoljne MOV reference podataka ostaju podrazumevano onemogućene, i fiksna komanda se ne prijavljuje za njih. I `ffprobe` i `ffmpeg` koriste belu listu protokola koja dozvoljava samo `file`, jednu nit, fiksne nizove argumenata, bez šela, a izvršne datoteke se razrešavaju iz `PATH`. Tokovi omota sa priloženom slikom nisu kandidati za reprodukciju. Svi reproduktivni tokovi moraju zadovoljiti ograničenja, a eksplicitni podrazumevani tok ima prednost u odnosu na deterministički rezervni mehanizam sa najnižim indeksom. Video snimci su ograničeni na 600 sekundi, 8.192 piksela po dimenziji i 33.554.432 izvorna piksela. FFmpeg uzorkuje 1–16 središnjih JPEG frejmova, smanjuje dugu ivicu na najviše 1.024 piksela bez uvećanja manjih unosa, i nikada ne prima URL. Uzorkovanje je po podrazumevanoj vrednosti `uniform`. Opcione politike `scene_aware` i eksperimentalna `segment_aware` izvršavaju jedan dodatni fiksni FFmpeg prolaz preko već potvrđenog lokalnog toka, biraju ograničene `showinfo` vremenske oznake scena, i deterministički se vraćaju na iste uniformne središnje tačke u slučaju neuspeha detektora, isteka vremena, malformisanog izlaza ili praznog skupa kandidata. Režim svestan segmenata alocira uzorke središnjih tačaka srazmerno potvrđenim intervalima scena; dokazi i rezervno ponašanje za režim svestan segmenata detaljno su opisani u nastavku. Strogo ograničenje od 16 frejmova primenjuje se nakon izbora u svakoj politici. Kada zahtev svestan scena ima budžet od samo jednog frejma, koristi uniformnu središnju tačku aktivnog celog video-snimka ili prozora fokusa i izveštava `policyEffective: uniform`: jedan izabrani frejm scene ne može da sačuva oba vremenska kraja. Pozivalac opciono može da obezbedi konačni prozor fokusa (`start`/`end` sekundi); granice se prilagođavaju trajanju medija, obrnuti ili beskonačni prozori se odbacuju, a sve politike uzorkovanja se izvršavaju samo unutar normalizovanog intervala. Rezultujući prozor je uključen u metapodatke o uzorkovanju i u prefiks nepoverljivog opisa kako bi naknadni modeli mogli da razlikuju fokusirani isečak od cele vremenske linije.

Fokus semantičkih natpisa je zasebna, eksplicitna postavka. Podrazumevani režim analize `full` čuva postojeći upit frejma i nikada ne prosleđuje tekst zahteva modelu za natpise. U `focused` režimu, most čita samo poslednji neprazan tekst koji je kreirao korisnik `text`/`input_text` iz istog kontejnera za ćaskanje ili odgovore (Chat ili Responses), normalizuje ga na NFC, sažima kontrolne znakove i beline, i ograničava ga na 500 Unicode kodnih tačaka. Prazan rezultat se vraća na tačan `full` upit. Upotrebljiv nagoveštaj se serijalizuje kao JSON u namenskom bloku `untrusted-user-context` i može samo da da prioritet uočljivim detaljima; ne može da poništi zasebno upozorenje protiv praćenja instrukcija vidljivih ili čujnih u mediju. Tekstualni fokus nikada ne zaključuje `start`/`end` niti menja vremenski uzorkivač.

#### FU-07 strukturalni dokazi segmenata

`segment_aware` koristi jedan ograničeni prolaz pre analize preko već potvrđenog lokalnog video toka. Fiksni lanac filtera prvo vrši skaliranje na najviše 320 piksela širine, detektuje promene scena i zamrznute intervale, a zatim uzorkuje brzinom od 1 frejma u sekundi za zamućenje, prosečnu lumu i prostorne/vremenske informacije. Prolaz je ograničen na 600 strukturalnih uzoraka, jednu FFmpeg/filter nit, istu belu listu protokola i kontejnera koja dozvoljava samo `file`, ograničenje izlaza procesa od 1 MiB, i najviše 30 sekundi unutar deljenog prekida/roka brokera. On nikada ne prihvata komandu, filter, putanju ili URL iz zahteva.

Strukturalne vrednosti su deterministički dokazi uzorkovanja, a ne semantičko razumevanje videa. One ne zaključuju subjekte, radnje, natpise, govor ili nameru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i vremenske promene utiču samo na način na koji se dodeljuje postojeći budžet od 1–16 frejmova. Potpuno zamrznuti segment je ograničen na jedan frejm, dok se nezamrznuti segmenti takmiče za preostali budžet. Kada granice nadmaše broj frejmova, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu da sakriju dugi prateći segment. Granice scena unutar rezolucije analize od 1 sekunde granice zamrzavanja se spajaju.

Nedostajući filteri, malformisani/prazni dokazi, greška detektora ili istek vremena ograničene pre-analize prelaze na tačnu politiku uniformnih središnjih tačaka (fail open). Prekid od strane pozivaoca ili rok brokera ne prelazi na otvoreno: on prekida pokrenuti podproces, sprečava naknadnu ekstrakciju frejmova, a privatno privremeno stablo se uklanja u bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg fiksere za uštede poziva natpisa nakon uklanjanja duplikata, alokaciju budžeta za guste pokrete, dokaze za zamućenje/ekspoziciju/SI-TI, brze rezove sa dugim repom i lažne pozitivne rezultate postepenog bledenja. Beleži vreme izvršavanja (wall time) pre-analize i, tamo gde je `/usr/bin/time` dostupan, CPU deteta i vršni RSS. Provere kvaliteta su isključivo strukturalni orakuli. Kvalitet stvarnog modela natpisa ostaje `HOLD` jer ovaj testni okvir nema autorizovanu krajnju tačku ili zamrznutog sudiju. Novčane uštede takođe ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne obezbedi eksplicitnu pozitivnu procenu po pozivu; skripta nikada ne fabrikuje nijedan rezultat.

Svaki frejm je ograničen na 4 MiB, svi sirovi frejmovi zajedno na 23 MiB, a serijalizovani odgovor brokera na 32 MiB. Privatni privremeni direktorijum se uklanja u `finally`. OmniRoute ne pakuje FFmpeg i ne prihvata prilagođenu putanju izvršne datoteke. Pre opisivanja, most primenjuje konzervativni prolaz vizuelne deduplikacije: svaki JPEG se svede na sivi bafer dimenzija 16×16 i upoređuje se samo sa poslednjim zadržanim frejmom. Za traženi budžet opisa iznad jednog frejma, ekstrakcija obezbeđuje ograničeni skup kandidata do dvostrukog iznosa tog budžeta i nikada više od 16 frejmova. Traženi limit se primenjuje tek nakon deduplikacije, pri čemu se prvi i poslednji izabrani kandidati čuvaju tokom konačnog proređivanja kada je budžet najmanje dva. Verzionisana polisa `grayscale-16x16-mean-cells-v2` koristi veći od prosečne delta vrednosti lumena i odnosa ćelija sličica čija je normalizovana delta vrednost najmanje 0.05. Prag za duplikate je konstanta 0.04, izabrana radi predvidljivosti umesto da bude izložena kao podešavanje u toku izvršavanja. Ovaj sekundarni signal visokog kontrasta čuva male pokrete i vidljive promene teksta koje poređenje zasnovano samo na proseku može da sakrije. Greške komparatora ili dekodera se tretiraju propuštanjem (fail open) i zadržavaju pokrivenost. Izlazni metapodaci odvajaju ekstrahovane kandidate, uspešno iskorišćene frejmove i odbačene vizuelne duplikate.

Eksplicitno označeni video deo može zatražiti kontakt-tabelu sa vremenskim oznakama. Most gradi JPEG mrežu od najviše 4 kolone i 16 frejmova. Svaka ćelija od 512 piksela upisuje svoju izvornu vremensku oznaku u donju traku visokog kontrasta, dok iste vremenske oznake ostaju u tekstualnim metapodacima radi naknadnog povezivanja i revizije. Kompletan JPEG ostaje ograničen na najviše 32 MiB. Ako `sharp` ne može da dekodira ili sastavi mrežu, most se vraća na pojedinačne JPEG frejmove; prekid od strane klijenta se i dalje prenosi kroz operaciju pravljenja tabele.

Dokaz o promociji je namerno odvojen od mikrobrendžmarka sintetičke kompozicije. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše A/B okruženje sa verzijom šeme za prave vizuelne modele kompatibilne sa OpenAI-jem. Ono meri tokene koje prijavljuje provajder, krajnje vreme izvršavanja (uključujući sastavljanje tabele), broj poziva modela i zadržavanje činjenica definisanih u manifestu. Sirovi odgovori modela se ne upisuju u izveštaj; zadržavaju se samo SHA-256 sažeci i ID-jevi podudarnih činjenica. Okruženje ne vrši nikakve mrežne pozive niti pozive plaćenih modela osim ako je prosleđen argument `--execute-real` i ako su konfigurisani `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez tog eksplicitnog stvarnog pokretanja, njegova mašinski čitljiva presuda ostaje `HOLD`; merenja sintetičkog sadržaja / broja poziva sama po sebi nisu dokaz o promociji.

Pozivaoci mogu priložiti opcioni niz `transcript.cues` podržanom video delu kada već poseduju usklađeni tekst. Svaki segment mora da sadrži `text`, konačni `start`/`end` interval unutar analiziranog trajanja, i dozvoljeni izvor `source` (`client`, `embedded`, ili `audio-bridge`); `confidence` podrazumevano ima vrednost `1` i mora ostati između `0` i `1`. Tačni duplirani segmenti se spajaju. OmniRoute nikada ne pokreće transkripciju iz ovih metapodataka: validirani segmenti se kopiraju u opisan rezultat sa izvorom, pouzdanošću i intervalom, i prikazuju se kao nepoverljiva zapažanja uz opise frejmova. Nevažeći tekst, tekst van opsega ili tekst bez dokaza o poreklu se odbacuje umesto da se meša u tok opisa. Oba kanala transkripcije u telu zahteva normalizuju dostavljeno poreklo na `client`, uključujući i samoproklamovane oznake `embedded` ili `audio-bridge`. Samo adapter u vlasništvu servera može dodeliti ove pouzdane oznake kroz argument `trustedSource` koji postoji samo u kodu; JSON polje zahteva ne može pristupiti tom argumentu. Tekst transkripcije ostaje nepoverljiv sadržaj izveden iz medija, bez obzira na njegovo poreklo, i nikada ne sme da određuje autorizaciju.

Napredni pozivalac može obezbediti `audioTranscript` zapis za isti video; on se tretira kao tekst koji je obezbedio klijent, a ne kao dokaz serverove transkripcije. Spojnica fuzije pokreće vizuelna i zvučna zapažanja pod jednim rokom i signalom za prekid, uređuje ih na zajedničkoj vremenskoj liniji, spaja tačne duplikate i prijavljuje delimičan rezultat kada samo jedna strana uspe. Nevažeći `audioTranscript` degradira na taj delimični rezultat — vizuelni opis se zadržava, a zvučna grana beleži očišćen kod greške — umesto da prouzrokuje neuspeh celog videa. Dostupnost po granama, delimični fleg i očišćeni kodovi grešaka čuvaju se u opisanom rezultatu, u metapodacima zaštitnih ograda (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), u metapodacima keša rezultata i u brojačima fuzije mosta. Podrazumevana putanja Video Mosta ne pokreće konverziju govora u tekst niti preuzima drugu kopiju medija; bez tog eksplicitnog zapisa, ostaje samo video.

**Zadržavanje transkripta (#12150 P1).** Ovo se primenjuje automatski kad god Video Bridge (koji je opcioni) prikaže znak transkripta — ne postoji zasebna zastavica za zadržavanje. Kada zahtev prikaže bilo koji znak transkripta (`transcript` koji je naveo pozivalac ili spojeni `audioTranscript`), zaštitni mehanizam ga označava sa `videoBridgeObserved` i proizvodi cenzurisanu senku opisa videa — identičan prikaz u kojem je telo slobodnog teksta svakog znaka zamenjeno sa `[redacted-video-transcript]`, izgrađen zamenom strukturiranog polja znaka pre nego što se nisci sastave (nikada parsiranjem ravnog teksta, tako da sadržaj znaka — zlonamerni ili obični, uključujući tela koja sadrže `]` kao što je `[inaudible]`/`[music]` — ne može da preživi). Trajno telo zahteva dnevnika poziva zamenjuje svaki deo teksta izveden iz videa tom cenzurisanom senkom, usklađenom po jednakosti sadržaja; `fullText` sidro se ponovo čita iz završenog korisnog opterećenja zaštitnog mehanizma pre poziva, tako da se podudaranje i dalje uspešno završava nakon kasnijih zaštitnih mehanizama u lancu (maskeri PII i akreditiva, prioriteti 10/95) koji prepisuju tekst opisa na licu mesta i nakon što ubacivanje sistemskog prompta/prenosa/memorije preoblikuje niz poruka. Telo poslato uzvodno modelu ostaje nepromenjeno. Posmatrani zahtev takođe ne popunjava trajnu Memoriju (ekstrakcija izvedena iz zahteva i odgovora se preskače), tako da sopstveni odgovor modela ne može da odjekne tekst transkripta u Memoriju.

**Sirova video polja (#12430).** Kada je most omogućen i matična video podrška je nepoznata ili odsutna, definisana polja `transcript`/`audioTranscript` takođe aktiviraju `videoBridgeObserved`, čak i nakon neuspeha opisa ili ograničenja `maxVideos`. `null` i prazni nisci se računaju; odsutna polja i nevideo metapodaci se ne računaju. Zadržane kopije cenzurišu ova polja ili izostavljaju zahtev, a keš memorije/Memorija se zaobilaze.

Na tim rezervnim putanjama, važeći znaci pozivaoca postaju podržani delovi `text`/`input_text` umesto nestandardnih polja provajdera. Oba staza koja isporučuje zahtev ostaju nepoverljiva `client` zapažanja, uz izričito upozorenje da video nije opisan i da vremenske oznake nisu proverene u odnosu na medij. Postojeći budžeti od 256 znakova / 64 KiB ukupno i po znaku primenjuju se na obe staze zajedno; vremenske oznake se moraju uklopiti u plafon brokera od 600 sekundi i bilo koji priloženi prozor fokusa. Nevažeće staze se odbacuju, a ne prosleđuju se kao proizvoljan tekst; važeći srodnik se i dalje može koristiti osim ako nije prekoračen njihov zajednički budžet. Polja `null`/prazna polja ne dodaju tekst. Nikakvo preuzimanje medija ili transkripcija se ne dodaju ovim rezervnim rešenjem. Polja proširenja transkripta se uklanjaju iz rezervnog video nosača i njegovih `video_url`/`source` objekata. Lista dozvoljenih za OpenAI žicu ostaje stroga; video nosači sa nepoznatim matičnim poreklom ostaju dostupni, a poznate destinacije samo za tekst zadržavaju bezbedne oznake. Strukturirane cenzurisane senke štite dodati tekst transkripta, dok originalni zahtev u vlasništvu pozivaoca ostaje nepromenjen. Ciljevi sa matičnom podrškom i onemogućeni mostovi zadržavaju svoje postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal posmatranog zahteva. Sirovi snimak zahteva klijenta pre zaštitnog mehanizma, zahtev na čekanju u memoriji i rani dnevnik odbijenog zahteva strukturno zamenjuju polja transkripta u video delovima; promptovi u obliku niska koje sintetišu faze cevovoda i prenos konteksta cenzurišu se na slivniku trajnog tela zahteva. Trajni marker `video_content_removed` čini da nastavak `previous_response_id` ne uspe zatvaranjem (fail closed) umesto da rekonstruiše tekst koji je namerno odbačen. Ako posmatrani zahtev izgubi svoju senku cenzure po delu pre evidentiranja, ili čak ako jedna od nekoliko video senki ne uspe da se podudari nakon kasnijih mutacija zahteva, zadržano telo zahteva se u potpunosti izostavlja umesto da se zadrži delimično cenzurisani transkript.

Za posmatrani zahtev, odgovor modela može citirati bilo koji deo transkripta bez strukturirane granice znaka. Njegovo trajno telo odgovora u dnevniku poziva (`responseBody`) se stoga zamenjuje markerom izostavljanja; detaljni artifakt cevovoda (koji može uključivati tela provajdera/klijenta i delove toka) se ne zadržava. Semantički keševi, keševi idempotencije i ponovnog igranja zaključivanja zaobilaze čitanja i upise za taj zahtev. Zahtev provajdera i odgovor vidljiv klijentu ostaju nepromenjeni. Rani bajtovi za održavanje veze se ispuštaju iz privremenog bafera kada se detaljni artifakt izostavi. Kirovo upozorenje o neispravnom EventStream-u izveštava samo o broju bajtova korisnog opterećenja, nikada o njegovom sadržaju ili sirovoj grešci JSON parsera. Ovo ne tvrdi da je svaka nesrodna dijagnostika provajdera/dodatka revidirana; šira pretraga trajnog slivnika se prati u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` je zaseban supstrat keša autentifikovan preko loopback-a/tokena. Svaka operacija takođe zahteva kanonski neprovidni ID principala. Pre nego što se omogući produkcioni pozivalac, on mora izvesti taj ID iz autentifikovanog zakupca i nikada ne sme prosleđivati vrednost koju je odabrao klijent. Ključevi keša vezuju taj principal za kanonske ID-jeve sesije i video reference, čuvaju samo njihove ključeve izvedene preko SHA-256 i ograničavaju i čitanje i brisanje na isti principal. Keš čuva najviše 16 izvedenih JPEG frejmova po unosu, ističe ih nakon deset minuta i podržava ograničena čitanja `start`/`end` ili eksplicitno brisanje sesije.

Svaki principal je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta ograničenja su nezavisna od globalnog plafona od 64 unosa / 256 MiB: pritisak kvota principala izbacuje samo unose tog principala koji su najmanje korišćeni pre nego što se razmotri globalno LRU izbacivanje. Istekli unosi se brišu i iz računovodstva principala i iz globalnog računovodstva pri keš aktivnosti, dok otkazivanje i neuspeh validacije ne potvrđuju delimičnu zamenu.

Кеш одбацује неканонски Base64, вишак допуне, не-JPEG медијуме, деформисане или скраћене JPEG фајлове, и JPEG фајлове који производе упозорење током ограниченог `sharp` декодирања целе слике. Он поново кодира сваку прихваћену слику као канонски JPEG, изводи ширину и висину из декодованих бајтова уместо да верује пољима позиваоца, и одбацује све пратеће полиглотне бајтове уместо да их задржи. Само се ограничени канонски компримовани бафер наплаћује за обе квоте. JSON мрежно ограничење укључује Base64 додатне трошкове за плафон декодованог улаза од 32 MiB. Свака сачувана изведеница бележи свој валидирани JPEG формат/резолуцију, политику узорковања, верзију изведенице, време креирања, хеш садржаја који је израчунао сервер, као и хешовану референцу родитеља плус хеш садржаја родитеља од поверљивог позиваоца. Отказивање се проверава између асинхроних фаза декодирања/хеширања пре атомског уписивања у кеш.

Ова транша још увек не повезује продукцијског произвођача са рутом и не обезбеђује избор варијанти са више резолуција. Путања захтева за транспарентни Video Bridge стога не ствара додатни посао, док извођење главног ентитета везаног за закупца и комплетан FU-08 животни циклус са више резолуција остају експлицитан наредни посао, а не документација као комплетно понашање.

Кадрови се секвенцијално описују помоћу конфигурисаног Video модела. Празан Video прекид наслеђује Vision подешавање; ако су оба празна, Vision ауто-рутер бира ефективни модел са способношћу вида. Успешни описи замењују оригинални део стабилним префиксом `[Video description:` који такође означава текст као непоуздано опажање изведено из медија и поручује моделима низводно да не прате инструкције пронађене у медију. Кључеви кеша описа кадрова укључују JPEG бајтове, упит, временску ознаку и ефективни модел; кеширају се само успешни описи. Уноси у кеш задржавају стварни успешни модел произвођача, укључујући резервни модел; мост пријављује `mixed` када су различите кадрове произвели различити модели. Погодак у кешу поново користи тај идентитет произвођача уместо да га преименује у тражени план рутирања. Кеш резултата за цео видео је кључиран на сваки улаз који мења излаз — упит, ефективни модел, политику узорковања, број кадрова, режим семантичке анализе, SHA-256 отисак прста нормализованог наговештаја фокуса, прозор фокуса, `transcript`, `audioTranscript`, и заставицу контакт-листа — тако да промена било које од тих димензија представља промашај кеша, а никада застарелу поновну употребу. Верзија политике визуелног уклањања дупликата, праг и ограничени број кандидатских кадрова су такође експлицитни у кључу кеша резултата и метаподацима; промена политике стога не може поново да користи застарели опис целог видео записа. Метаподаци кеша резултата v4 чувају режим и отисак прста, а никада сирови кориснички задатак. Метаподаци заштитне ограде извештавају о траженом и ефективном режиму анализе; тражени `focused` режим без употребљивог корисничког текста се пријављује као ефикасно `full`.

Заштитна ограда извлачи сваки подржани видео део, али описује највише `modalityBridgeVideoMaxVideos`. За циљ за који је доказано да има `supportsVideo === false`, неуспешни видео снимци и они који прелазе лимит постају експлицитни сигуurni текстуални маркери тако да не преживи ниједан сирови видео. Када је капацитет непознат, ти делови задржавају свој видео носач; било који резервни транскрипт прати ограничену конверзију текста изнад. Циљеви са `supportsVideo === true` заобилазе мост. Сигнал прекида захтева клијента се просејава кроз преузимање, ред чекања брокера, подпроцесе и позиве за описе; прекиди се заустављају између видео записа и никада не дозвољавају приступ сировим медијима у случају грешке.

Подешавања извршног времена су подржана базом података и валидирана помоћу Zod-а:

| Кључ                                | Подразумевано | Опсег / понашање                                                                                      |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Опционо извршно време, укључивање по избору (opt-in)                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` чува генеричке описе; `focused` користи ограничени, непоуздани најновији кориснички контекст   |
| `modalityBridgeVideoModel`          | `""`          | Наслеђује Vision Bridge модел                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, или пропорционални `segment_aware`; неуспех детектора се враћа на `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                        |

Наслеђене сачуване вредности временског ограничења за Video изнад 120 секунди се ограничавају на рок брокера; нова уписивања подешавања изнад тог лимита се одбацују. За `GET /api/modality-bridge/video/runtime` је потребна поверљива означена локалност повратне петље пре аутентификације или испитивања извршног времена, а затим захтева менаџмент аутентификацију. Он враћа само `available`, очишћене FFmpeg/ffprobe верзије и фиксни разлог када извршно време није доступно. Ендпоинт за интерну екстракцију није јавни API за отпремање: засићење реда чекања враћа `503` плус `Retry-After`, прекид везе са позиваоцем враћа `499`, а фиксни рок брокера враћа `504`. Конвертовани одговори додају `video->text;model=<visionModel>;parts=<videos>` у централно `x-omniroute-modality-bridge` заглавље без уклањања Vision или Audio сегмената.

### PII Masker (`piiMasker.ts`)

Извршава се на **обема** фазама.

- **`preCall`** klonira payload, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke u obliku običnih stringova) i primenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na string polja `content`/`text`. Kada je
  `PII_REDACTION_ENABLED=true`, detektovani PII se cenzuriše u odlaznom
  payloadu. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji kontroliše samo politiku
  prompt injekcije). Kada je cenzurisanje isključeno, poziv beleži brojače
  detekcija bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus
  maskirni element oblika Responses-API (`maskResponsesOutput` — pokriva
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog cenzurisanja,
  izmenjeni odgovor zamenjuje originalni.

Zaštitni mehanizam nikada ne blokira; on samo beleži anotacije (`meta.detections`,
`meta.redacted`) ili prepisuje.

#### Izbor po tipu, prilagođeni obrasci i brojači detekcije

**Dashboard → Settings → Security → PII masking** bira _šta_ se maskira. To
ne uključuje uključivanje maskiranja: za to su i dalje zaduženi `PII_REDACTION_ENABLED` (zahtev) i
`PII_RESPONSE_SANITIZATION` (odgovor + SSE), koji su po defaultu isključeni.

- **Izbor po tipu** — ugrađeni ID-jevi su navedeni u
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ako nisu podešeni, to znači svaki
  tip (ponašanje pre nego što je ovo podešavanje postojalo). Obrazac `ssn_us`
  mašine zahteva mapira se na `ssn`. Šabloni (Minimal, Standard, Financial,
  Brazilian, USA, Full) samo popunjavaju polja za potvrdu u korisničkom interfejsu.
- **Prilagođeni obrasci** — do 20 regex ili džoker obrazaca (`*` = do 64
  karaktera koji nisu razmaci, `?` = jedan). Podudaranja postaju `[CUSTOM_REDACTED]`.
  Svaki obrazac prolazi kroz `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): najviše 500 karaktera, flegovi ograničeni
  na `g i m s u`, mora da se kompajlira, mora da prođe `safe-regex` (katastrofalni
  backtracking) i ne sme da se podudara sa praznim stringom ili rezervisanim mestom za cenzurisanje.
  Obrazac koji ne prođe proveru se odbija prilikom čuvanja i testiranja, a sačuvani red
  koji ne prođe se preskače u toku izvršavanja umesto da se kompajlira. Prilagođeni obrasci samo
  rade dok je maskiranje uključeno.
- **Brojači detekcije** — brojevi po tipu (nikada vrednosti koje su se podudarale), čuvaju se u
  memoriji i resetuju pri ponovnom pokretanju (`src/lib/pii/piiDetectionStats.ts`). Oni se samo
  povećavaju dok je maskiranje uključeno.

Podešavanja se nalaze u `key_value` tabeli (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) i čitaju se preko keša od 1 s. API:

| Metod  | Putanja                  | Svrha                                                                       |
| ------ | ------------------------ | --------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stanje flegova, `enabledTypes`, `customPatterns`, brojači detekcije         |
| `PUT`  | `/api/settings/pii`      | Zamenjuje `enabledTypes` (`null` = sve) i/ili `customPatterns`              |
| `POST` | `/api/settings/pii/test` | Testira (dry-run) jedan obrazac na uzorku od najviše 8 KB; ništa se ne čuva |

Sva tri zahtevaju autorizaciju za upravljanje i vrše validaciju tela zahteva pomoću Zod-a
(`src/shared/validation/schemas/piiSettings.ts`).

### Injekcija prompta (`promptInjection.ts`)

Detektuje zlonamerne strukture u sadržaju koji korisnik unosi i primenjuje
konfigurisanu politiku. Ponašanje je definisano promenljivama okruženja i opcijama konstruktora:

| Podešavanje     | Promenljiva okruženja                                                                                 | Podrazumevano | Efekat                                                                                                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`        | Kada je `false`, zaštitni mehanizam preskače obradu.                                                                                                                                                          |
| Režim           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`        | Politika injekcije: `block`, `warn`, ili `log`. (`redact` je prihvaćen radi kompatibilnosti unazad, ali **ne** uklanja tekst injekcije; prepisivanje PII u zahtevu se kontroliše sa `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Minimalni stepen ozbiljnosti potreban za blokiranje. Srednji je podrazumevano samo u režimu posmatranja.                                                                                                      |

**Prioritet režima** (`getMode`): `options.mode` pozivaoca →
`INJECTION_GUARD_MODE` **nadograđeni fleg funkcija baze podataka (DB feature-flag override)** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` iz okruženja → `INPUT_SANITIZER_MODE` iz okruženja → `warn`. Prepísivanje preko kontrolne table stoga ima prednost nad promenljivama okruženja, tako da korisnički interfejs za Feature
Flags kontroliše aktivnu zaštitu u realnom vremenu (bez ponovnog pokretanja). Čitanje iz baze je bezbedno od otkazivanja:
ako dođe do greške, zaštitni mehanizam se vraća na ponašanje zasnovano na okruženju, a kada nijedno
prepisivanje nije podešeno, ponašanje je identično razrešavanju samo preko okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (deljeni skup detektora
   koji se koristi na drugim mestima u cevovodu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba sa stepenom ozbiljnosti `high`).
3. Opcioni `customPatterns` prosleđeni preko opcija konstruktora (stringovi, regex,
   ili zapisi `{ name, pattern, severity }`).

Када је `mode === "block"` **и** најмање једна детекција задовољава праг озбиљности, `preCall` враћа `{ block: true, message: "Request rejected: suspicious content detected" }`. У `warn`/`log` режимима заштитни механизам евидентира али дозвољава позив. Дељена помоћна функција `evaluatePromptInjection()` се такође извози за позиваоце који треба да процене промптове без проласка кроз регистар.

**Ограничење скенирања (v3.8.20):** детектор прегледа само **првих 16 KB** спојеног текста промпта — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 бајтова) у `src/shared/utils/inputSanitizer.ts`. И `detectInjection()` и `evaluatePromptInjection()` позивају `slice(0, MAX_INJECTION_SCAN_BYTES)` пре покретања петље образаца. Директиве за инјектовање се налазе близу врха улазног текста, тако да ово ограничава потрошњу CPU/GC регуларних израза на пејлоудима од више стотина килобајтова без слабљења детекције (упореди #3932, #4041).

### Маскирање акредитива (`credentialMasker.ts`)

Покреће се у **обе** фазе, последње у подразумеваном ланцу (приоритет `95`). Уклања добро познате обрасце API кључева / тајних токена из одлазећег пејлоуда (садржај поруке, аргументи позива алата, резултати алата) **и** одговора провајдера, тако да се акредитиви налепљени у промпт (или враћени кроз резултат алата) не прослеђују узводном провајдеру нити назад клијенту.

- **Само уз експлицитно укључивање (opt-in)**, иста конвенција као и за уклањање PII података (блиско са Хард правилом #20 / Hard Rule #20-adjacent): онемогућено осим ако је `settings.credentialRedactionEnabled === true` **или** `CREDENTIAL_REDACTION_ENABLED=true`. Када је искључено, заштитни механизам не ради ништа — никада не блокира и не мења садржај.
- `redactCredentials()` пролази кроз читаво стабло пејлоуда/одговора (`walkValue()`, безбедно од загађења прототипа, безбедно од петљи помоћу `WeakSet`) и замењује подударања са `[REDACTED:<type>]` резервисаним местом, клонирајући само оне гране које су се стварно промениле.
- `CREDENTIAL_PATTERNS` покрива кључеве LLM провајдера (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS токене (GitHub, Slack, Linear, Notion, npm, Postman, Discord), кључеве за плаћање (Stripe, Square), клауд кључеве (AWS приступни кључ, Twilio, SendGrid, Mailgun), приватне кључеве / JWT-ове, ниске за повезивање које садрже акредитиве (`mongodb://user:pass@...`, итд.), као и генерички образац вредности заглавља `Authorization`/`x-api-key`/`api-key`/`apikey`. Кључеви у облику заглавља (`authorization`, `x-api-key`, `api-key`, `apikey`) се структурално маскирају (само вредност, уз очување префикса шеме као што је `Bearer `/`Basic `) уместо коришћењем генеричког текстуалног регуларног израза.
- Заштитни механизам никада не блокира; он само ревидира (`modifiedPayload` / `modifiedResponse`) и бележи метаподатке (`meta.credentialsRedacted`, `meta.count`).

Заштита од регресије: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni ugovor (`base.ts`)

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
  block?: boolean; // true skraćuje lanac
  message?: string; // prikazuje se pri blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća preCall da bi se prepisao zahtev
  modifiedResponse?: TValue; // vraća postCall da bi se prepisao odgovor
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

Zaštitni mehanizam signalizira „bez promene“ vraćanjem vrednosti `void`, `{}`, ili `{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamenjuje vrednost koja prolazi kroz lanac za naknadne zaštitne mehanizme.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u zaštitne mehanizme. Prekid zahteva je namerni `fail-open` izuzetak: medijski mostovi prekidaju rad i čiste resurse bez vraćanja sirovih medija na ciljnu destinaciju za koju se zna da ih ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamenjuje prema normalizovanom imenu) zaštitni mehanizam i ponovo ga sortira po rastućem `priority`.
- `clear()` / `list()` — administrativne pomoćne funkcije.
- `runPreCallHooks(payload, context)` — iterira kroz aktivne zaštitne mehanizme, provlači `payload` kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opcionalno ponovo registruje podrazumevane vrednosti radi čiste izolacije testova.

Oba izvršioca vraćaju `{ blocked, payload|response, results, guardrail?, message? }` gde je `results` niz `GuardrailExecutionResult` zapisa koji uključuju polja `blocked`, `skipped`, `modified`, `error` i `meta` po zaštitnom mehanizmu, što je korisno za praćenje.

### Onemogućavanje zaštitnih mehanizama po zahtevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` sakuplja deduplikovanu listu imena zaštitnih mehanizama koje treba preskočiti za trenutni zahtev. Postoji pet kanala, koji se čitaju ovim redosledom i spajaju u jednu listu (prvo pojavljivanje pobeđuje prilikom deduplikacije):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` u telu zahteva (na najvišem nivou)
3. `metadata.disabledGuardrails` u telu zahteva (samo kada je `metadata` objekat)
4. Zaglavlje `x-omniroute-disabled-guardrails`
5. Zastarelo zaglavlje `x-disabled-guardrails`

Svih pet kanala je spojeno, uključujući i ova dva zaglavlja: slanje i `x-omniroute-disabled-guardrails` i `x-disabled-guardrails` preskače uniju njihovih lista, a prazno moderno zaglavlje više ne sakriva zastarelo ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), rešeno u [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrednosti mogu biti nizovi niski ili niska razdvojena zarezima; imena se podrezuju i normalizuju u mala slova sa kebab-case formatom (`pii_masker` → `pii-masker`), a prazni unosi se odbacuju. Rezultat se prosleđuje preko `context.disabledGuardrails` registru, koji preskače odgovarajuće zaštitne mehanizme (`skipped: true` u `results`).

Lista onemogućenih utiče samo na **registar**. Režim `block` za ubacivanje promptova (prompt-injection) je obavezna granica: srednji sloj za zaštitu od ubacivanja (`src/middleware/promptInjectionGuard.ts`) poziva `evaluatePromptInjection()` bez ikakve liste onemogućavanja koju kontroliše pozivalac (mrtav poziv `resolveDisabledGuardrails({ body })` koji je ranije pravljen uklonjen je u [#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), tako da se zahtev koji onemogućava `prompt-injection` i dalje odbija u režimu `block`. Ovo je urađeno namerno. Kanali za onemogućavanje su pod kontrolom pozivaoca (telo zahteva, metapodaci, zaglavlja), i pozivalac ne sme biti u mogućnosti da isključi bezbednosnu kontrolu koju je postavio operator ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija zaglavlja iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) menja samo koji se zaštitni mehanizmi registra preskaču; ona ne dozvoljava klijentu da zaobiđe srednji sloj. Obavezne polise zaštitnih mehanizama po ključu i po grupi prate se u v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417). Pogledajte [Pokrivenost i ograničenja](#coverage-and-limits).

## Редослед извршавања

Za svaki zahtev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts` (rute iz porodice ćaskanja navedene pod
[Pokrivenost i ograničenja](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` gradi listu preskakanja na osnovu API ključa, tela i
   zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde po rastućem redosledu prioriteta:
   - Onemogućene zaštitne ograde se beleže kao `skipped`.
   - `preCall` svake zaštitne ograde može da prepisuje payload putem `modifiedPayload`.
   - Prvi `block: true` prekida lanac i handler vraća odgovor o odbijanju zaštitne ograde.
3. Payload (potencijalno prepisan) ulazi u kombinovano usmeravanje i uzvodno slanje.
4. **Samo bez strimovanja:** nakon što se odgovor sastavi,
   `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac nad
   odgovorom. `block: true` ovde odbacuje uzvodni odgovor i vraća HTTP 400. Odgovori u strimingu u potpunosti preskaču ovaj korak.

Zaštitne ograde koje bace izuzetak beleže se sa `error: <message>` i evidentiraju preko
`logger.warn`, ali lanac se nastavlja — projektovano kao fail-open.

## Pokrivenost i ograničenja

Registar zaštitnih ograda je povezan samo sa cevovodom za ćaskanje. Ova ograničenja su
definisana od strane `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` i
`tests/unit/guardrail-pipeline-characterization.test.ts`; ažurirajte te testove s namerom
kada se ponašanje promeni.

### Gde se hook-ovi izvršavaju

| Hook / kontrola                                 | Pokreće se na                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                               | Zahtevi koje obrađuje `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (i `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, kao i Telegram proxy za ćaskanje. Takođe i test krajnja tačka kontrolne table `/api/guardrails/test`. Blok pre poziva vraća HTTP 400. |
| `runPostCallHooks`                              | Samo odgovori na ćaskanje **bez strimovanja** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odgovori u strimingu nikada ne stižu do njega.                                                                                                                                                                                                                                                                                       |
| Strimovanje PII                                 | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), prosleđen u `streamingPipeline.ts` kada je `PII_RESPONSE_SANITIZATION` uključen. To nije zaštitna ograda, tako da kanali za onemogućavanje nemaju uticaja na njega.                                                                                                                                                                                                          |
| Middleware za zaštitu od ubacivanja (nasleđeno) | Svaka `/v1` ruta koja sadrži prompt, uključujući porodicu ćaskanja (pogledajte [pokrivenost ruta](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo ubacivanje prompta.                                                                                                                                                                                                                                                   |

### Šta nije pokriveno

- **Rute za medije, ugrađivanja i podatke** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikada ne stižu do registra. Tamo se
  ne izvršava maskiranje PII-ja, maskiranje akreditiva niti most modaliteta. Njihova jedina
  provera je nasleđeni middleware za zaštitu od ubacivanja.
- **Odgovori u strimingu** ne dobijaju nikakve zaštitne ograde nakon poziva: nema `pii-masker` ili
  `credential-masker` nakon poziva, niti bloka nakon poziva. Primenjuje se samo transformacija
  PII-ja u strimingu (kada je `PII_RESPONSE_SANITIZATION` uključen). Akreditiv koji se vrati
  u odgovoru u strimingu se ne cenzuriše.
- **Kanali za onemogućavanje u odnosu na middleware (projektovano):** middleware procenjuje
  ubacivanje prompta sopstvenim pozivom `evaluatePromptInjection()`, bez
  prosleđivanja bilo koje liste za onemogućavanje koju kontroliše pozivalac. Režim `block`
  je obavezna granica koju onemogućavanja pod kontrolom pozivaoca ne mogu da zaobiđu,
  uključujući i na rutama iz porodice ćaskanja
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogućavanje
  `prompt-injection` preskače samo zaštitnu ogradu registra.

### Šta vidi odgovor pre faze nakon poziva

Na putanji bez strimovanja redosled je: ekstrakcija memorije → izvršavanje ugrađenih alata → zaštitne ograde nakon poziva → izlaz iz bloka nakon poziva → čuvanje u semantičkom kešu.

- **Ekstrakcija memorije** i **izvršavanje alata** vide odgovor pre nego što
  zaštitni mehanizmi nakon poziva mogu da ga izmene ili blokiraju. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), ekstrakcija
  memorije pokreće ekstrahovani tekst kroz `sanitizePII` kada je
  `PII_RESPONSE_SANITIZATION` uključen (i u strimingu i u nestrimingu), ali
  odgovor koji naknadno bude blokiran i dalje je poslat memoriji i
  alatima.
- **Semantički keš** skladišti odgovor nakon poziva, tako da čuva
  izmenjeni odgovor, dok se blokirani odgovor nikada ne kešira. Unosi u kešu
  se indeksiraju po API ključu.

## Конфигурација

Променљиве окружења које читају уграђени заштитни механизми:

| Променљива                            | Користи је              | Ефекат                                                                                                                               |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Подесите на `false` да потпуно онемогућите детекцију.                                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Политика инјекције: `warn`, `block` или `log`. Наслеђена вредност `redact` не мења текст инјекције.                                  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Режим за заштиту од инјекције; такође и заставица функције базе података која **има предност** над променљивима окружења (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Минимални ниво озбиљности који `MODE=block` одбија: `high` (подразумевано), `medium` или `low`.                                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Наслеђени алијас за `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Када је `true`, PII у захтеву се редигује (независно од режима инјекције).                                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (низводно) | Контролише понашање маскирања на страни одговора.                                                                                    |

Заштитни механизми модалног моста читају конфигурацију из времена извршавања из складишта подешавања заснованог на бази података (`getSettings()`), а не из променљивих окружења. Примарни кључеви за вид (Vision) су `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` и `modalityBridgeCacheMaxEntries`. Наслеђени кључеви `visionBridge*` се прихватају само као документована резервна опција за читање у једном циклусу; уписи са контролне табле користе примарне кључеве. Подразумеване вредности и резервни разрешивач се налазе у `src/shared/constants/modalityBridgeDefaults.ts`, док су наслеђене константе задржане у `src/shared/constants/visionBridgeDefaults.ts`.

За звук се користе `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` и `modalityBridgeAudioMaxClips`, уз дељена подешавања `modalityBridgeCache*`. Звук нема резервни кључ за наслеђене вредности јер су ови кључеви уведени са шемом Modality Bridge-а.

За видео се користе `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` и `modalityBridgeVideoTimeout`, уз дељена подешавања `modalityBridgeCache*`. Подразумевано је онемогућен јер су FFmpeg/ffprobe опционалне оперативне зависности, а додавање описа фрејмова повећава кашњење и трошкове модела.

## Прилагођене заштитне границе

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

Кораци:

1. Креирајте `src/lib/guardrails/myGuardrail.ts` који наслеђује `BaseGuardrail`.
2. Имплементирајте `preCall` и/или `postCall`.
3. Или региструјте у тренутку импорта (додавањем из `registerDefaultGuardrails`) или
   позовите `guardrailRegistry.register(...)` у току извршавања — регистар замењује
   било који претходни заштитни механизам са истим нормализованим именом.
4. Додајте тестове под `tests/unit/` (постојећи примери:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Тестирање

Користите `resetGuardrailsForTests()` између тестова како бисте почели из познатог стања.
Проследите `{ registerDefaults: false }` да бисте почели са празним регистром и
регистровали само заштитне границе које се тестирају. Vision Bridge прихвата инјектовање
зависности (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge излаже
еквивалентне спојеве за подешавања, могућности, избор STT модела, провере
акредитива и транскрипцију. Тестови стога могу извршити оба тока без приступа бази података
или мрежи.

## Погледајте такође

- `src/lib/guardrails/` — имплементација
- `src/shared/utils/inputSanitizer.ts` — дељени детектор који покреће
  prompt-injection и PII маскирање
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge подразумеване вредности и
  листа модела са принудним мостом
- `src/shared/constants/modalityBridgeDefaults.ts` — дељене Vision/Audio рунтајм подразумеване вредности
- `docs/architecture/RESILIENCE_GUIDE.md` — ортогонални слој (circuit breaker, паузе)
- `docs/reference/ENVIRONMENT.md` — комплетна референца за env променљиве

## Покривеност рута заштитом од инјектовања и red-team (Фаза 8 · Блок Д)

Заштита од инјектовања (`createInjectionGuard` / `withInjectionGuard`) покрива све руте
које прихватају корисничке упите. Она поштује `INJECTION_GUARD_MODE` (подразумевано `warn` = само евидентирање;
`block` = враћа HTTP 400 `SECURITY_001`).

| Тип               | Руте                                                                                                                                                 | Подразумевани режим |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Текст (постојећи) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Генеративни       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Подаци            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Екстракција текста (`extractMessageContents`) покрива `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (ноћно, `nightly-llm-security.yml`):** promptfoo валидира да свака рута блокира
OWASP-LLM корпус у режиму `INJECTION_GUARD_MODE=block`; garak покреће сонде (прескаче се без тајне).
`moderations` је укључен ради конзистентности. Режим блокирања је обавезна граница: `evaluatePromptInjection()`
игнорише листу искључења по захтеву коју јој мидлвер прослеђује, тако да `disabledGuardrails`
**не** изузима руту од тога ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Ноћни радни ток (`.github/workflows/nightly-llm-security.yml`, cron + ручно
покретање) има два посла:

- **`promptfoo-guard` (блокирајући)** — покреће `promptfoo eval -c promptfooconfig.yaml`
  са `INJECTION_GUARD_MODE=block`. Сваки антагонистички случај (нпр. "ignore all
  previous instructions…", DAN-стил jailbreak-ови) потврђује да одговор садржи
  `error.code === "SECURITY_001"`, тј. да је заштита заиста одбила захтев.
- **`garak` (саветодавни)** — покреће garak `--probes promptinject,dan,leakreplay`
  над локалном инстанцом OmniRoute-а (`http://localhost:20128/v1`). Заштићено тајном
  провајдера (`PROMPTFOO_PROVIDER_KEY`); прескаче се у случају недостатка и има суфикс
  `|| true`, тако да извештава без обарања CI-ја.

Покривеност помоћне функције за заштиту (`createInjectionGuard` / `withInjectionGuard`)
обухвата сваку `/v1` руту која садржи упит; текст упита се превлачи из
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` помоћу
`extractMessageContents()` у `src/shared/utils/inputSanitizer.ts`.

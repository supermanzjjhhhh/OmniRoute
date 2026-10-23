# Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizované:** 2026-10-17 — v3.8.52 (pridané [Pokrytie a limity](#coverage-and-limits):
> ktoré trasy a cesty odpovedí háky dosahujú, zlúčené hlavičky zakázania (#16412), režim blokovania
> injekcie ako povinná hranica (#16413) a čo vidí odpoveď pred post-call)

Guardrails vynucujú bezpečnosť, politiky a transformácie obsahu na hranici medzi OmniRoute a upstream poskytovateľmi. Každý guardrail môže kontrolovať (a voliteľne zamietnuť, transformovať alebo anotovať) užitočné zaťaženia požiadaviek (`preCall`) a upstream odpovede (`postCall`).

Systém je **fail-open**: ak guardrail počas vykonávania vyhodí výnimku, register zaznamená chybu a pokračuje s ďalším guardrailom namiesto zlyhania požiadavky. Blokovanie je explicitné rozhodnutie (`block: true`), nikdy nie náhoda. Jedinou výnimkou je zrušená požiadavka: keď je `signal` volajúceho prerušený, guardrail, ktorý vyhodí výnimku, odmietne beh háku namiesto toho, aby bol preskočený.

Háky sa **nespúšťajú** na každej trase ani pri každej odpovedi. Pred spoliehaním sa na guardrail ako na bezpečnostný kontrolný prvok si prečítajte [Pokrytie a limity](#coverage-and-limits).

## Vstavané guardrails

Register automaticky načíta šesť guardrails v poradí priorít pri importe
(pozri `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Názov               | Fáza/Fázy      | Súbor                 |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižšie čísla priorít sa spúšťajú **prvé**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Základný model GLM 5.3 a `glm-5.3-{low,high,max}` majú explicitné
metadáta v registri/špecifikácii `supportsVision:false`. Variant GLM 5.3 Flash
zostáva modelom s natívnym videním. Trasa `/v1/messages` v Claude Code vstupuje do
zdieľaného reťazca predbežného volania guardrailu `handleChat` **pred** prekladom z Claude do OpenAI;
vnorené obrázky vo výsledku nástroja `Read` musia byť popísané alebo spracované
predtým, než ich tento preklad povýši do obsahu `image_url` v OpenAI (#17069).

Zachytáva požiadavky obsahujúce obrázky zamerané na **modely bez podpory videnia** a buď
presmeruje celú požiadavku na model schopný spracovať vizuálny obsah, alebo nahradí časti s obrázkami
textovými popismi vytvorenými konfigurovateľným modelom videnia pred
volaním upstreamu. To umožňuje poskytovateľom pracujúcim iba s textom transparentne spracovávať
multimodálne užitočné zaťaženia.

Postup:

1. Preskočiť, ak cieľový model už podporuje videnie (pokiaľ sa nenachádza v
   zozname vynútených premostení `isVisionBridgeForcedModel`).
2. Extrahovať časti s obrázkami pomocou `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), čo deleguje na **jednotný detektor
   médií** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` —
   jediný zdroj pravdy zdieľaný s filtrom kompatibility kombo.
   Extrakcia je povolená pre tvary, ktoré `replaceImageParts` dokáže vložiť
   späť (kontrakt extrakcia↔výmena): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, a Responses
   API `input_image`. Zodpovedajúce obrázky vnorené do Claude Code
   `tool_result.content` a výstupov nástrojov Responses sú tiež extrahované a
   nahradené na ich pôvodných cestách; tvary slúžiace iba ako indikátory sú materiálom pre kombo filter
   a nie sú extrahované.
   Preskočiť, ak sa nič nenájde.
3. Vyriešiť konfiguráciu za behu pomocou `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení `modalityBridge*`
   vyhrávajú; staršie kľúče `visionBridge*` zostávajú ako **záloha na jeden cyklus**
   (okno na návrat k starému stavu). Preskočiť pred akýmkoľvek prechádzaním médií, keď je
   premostenie zakázané.
4. Selektor režimu (`modalityBridgeVisionMode`, pozri tabuľku nižšie) rozhoduje
   medzi presmerovaním a popísaním. Presmerovanie vráti `modifiedPayload` s vymeneným
   iba parametrom `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: obmedziť počet obrázkov na `maxImages`, vytvoriť prompt zohľadňujúci úlohu,
   skontrolovať vyrovnávaciu pamäť popisu, zavolať model videnia **paralelne**
   (`Promise.allSettled`) a vložiť textové časti `[Image N]: <description>` na
   ich miesto. Zlyhanie popisu vráti `null`: surový obrázok sa zachová pre
   neznáme/ciele podporujúce videnie (#4012), ale **potvrdený priamy cieľ podporujúci iba text**
   alebo kombo s nulovým videním dostane explicitnú
   textovú náhradu `(unavailable — no vision-capable provider connected)` pre
   každý nepopísaný obrázok, vrátane čiastočných zlyhaní a obrázkov nad rámec
   limitu volania popisu (#17069). Existujúca záloha pre prípad zlyhania popisu celého komba
   zostáva zachovaná (#8430).
6. Vrátiť `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režimu (`modalityBridgeVisionMode`)

| Režim      | Predvolené | Správanie                                                                                                                                                                                                                                                                                                                             |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Stará heuréka, nedotknutá (#6640/#7204): modely non-combo/`auto/` sa presmerujú na najlepší model pre prácu s obrazom, pokiaľ pôvodný model už nemá použiteľné prihlasovacie údaje (potom opísať); combo ciele vždy opisujú.                                                                                                          |
| `describe` |            | Vždy opísať – blok presmerovania sa úplne preskočí; vždy odpovedá model zvolený používateľom.                                                                                                                                                                                                                                         |
| `reroute`  |            | Vynútiť presmerovanie: ochrana pre zachovanie modelu s prihlasovacími údajmi sa obíde. Ochrana prihlasovacích údajov **cieľa** presmerovania stále platí – ak neexistuje žiadny použiteľný cieľ pre prácu s obrazom, mostík zablokuje požiadavku s jasnou chybou namiesto opisu alebo odoslania surových obrázkov do textového cieľa. |

Vynútené režimy sa skratujú **pred** spustením automatickej heuristiky; správanie `auto` je bajtovo identické s ochranným mechanizmom pred PR-1.

#### Rozsah API kľúča (`visionBridgeKeyScope.ts`)

Keď API kľúč volajúceho obmedzuje `allowedConnections`, kvótové bazény (`allowedQuotas`) alebo modely (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), mostík vyberá iba modely na presmerovanie a opis, ktoré kľúč môže použiť, na pripojeniach, ktoré kľúč môže použiť. Volanie opisu potom vždy prechádza cez vnútornú slučku OmniRoute s hlavičkou `x-omniroute-self-loop-key-id`, takže prichádzajúca požiadavka chatu opätovne vynucuje politiku pripojenia a modelu tohto kľúča. `enforceApiKeyPolicy()` rešpektuje túto hlavičku iba spolu s nosičom vnútornej slučky (bearer), takže môže prístup iba úžiť, a id, ktoré sa nevyrieši, sa odmietne.

Ak nie je pre daný kľúč povolený žiadny model pre prácu s obrazom, **potvrdený cieľ len pre text** lokálne odmietne požiadavku na obrázok s jasnou chybou HTTP 400 namiesto preposielania bajtov obrázka nespôsobilej nadradenej službe (#17069). Pre ciele s neznámou alebo natívnou schopnosťou spracovania obrazu si cesta opisu zachováva svoje predchádzajúce správanie pri zlyhaní (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Požiadavky bez kľúča a kľúče bez týchto obmedzení sa spracúvajú presne tak isto ako predtým.

#### Prompt opisu zohľadňujúci úlohu (`modalityBridgeVisionTaskAware`)

Predvolené **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pripojí text **poslednej správy používateľa** (skrátený na 500 znakov) k základnému promptu opisu, čím nasmeruje opis smerom k tomu, čo sa používateľ skutočne opýtal (vzor codex-vision-proxy), a požiada model pre prácu s obrazom o prepis viditeľného textu. Pri vypnutom príznaku – alebo ak nie je k dispozícii text používateľa – sa základný prompt použije nezmenený.

Vlastná požiadavka vnútornej slučky opisu kompatibilná s OpenAI (`callVisionModelSingle()` v `visionBridgeHelpers.ts`) vždy vyžaduje `image_url.detail: "high"` – bezpodmienečne, pre každého volajúceho/poskytovateľa, bez závislosti od akéhokoľvek signálu klienta. Vzorkovanie s nízkymi detailmi znižuje presnosť OCR pre presne takú úlohu prepisu textu, akú tento prompt požaduje, takže samotné volanie opisu vždy žiada vysoké detaily bez ohľadu na to, akú úroveň detailov použila pôvodná prichádzajúca požiadavka. Toto ovplyvňuje iba telo internej požiadavky opisu; nemení to spôsob, akým OmniRoute preposiela vlastný parameter `image_url.detail` volajúceho v primárnej požiadavke – toto predvolené nastavenie sa uplatňuje osobitne a iba pre detekovaných klientov OpenCode v `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Vetva drôtového formátu Anthropic vnútornej slučky opisu nemá žiadne pole `detail` a žiadne predvolené nastavenie ju neovplyvňuje.

#### Horný limit výstupu opisu (`modalityBridgeVisionMaxChars`)

| Kľúč                           | Predvolené | Rozsah              |
| ------------------------------ | ---------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` alebo 100–50000 |

`0` (predvolené) znamená **žiadny limit** – opis vrátený funkciou `callVisionModel()` prechádza nezmenený, čím sa zachováva existujúce správanie. Akákoľvek hodnota v rozsahu 100–50000 skráti opis príponou `…` predtým, než sa vloží späť ako `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`). Zыšte túto hodnotu pri úlohách OCR bohatých na detaily, kde nadväzujúci model potrebuje úplný prepis; znížte ju na obmedzenie spotreby tokenov pri ukecaných modeloch pre prácu s obrazom. Pole v ovládacom paneli sa nachádza na paneli Rozšírené na karte Vision (`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a obmedzuje akúkoľvek hodnotu medzi 1 a 99 na dolnú hranicu 100, pričom explicitnú hodnotu `0` necháva nedotknutú – `0` je platná hodnota Zod sama osebe (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie iba "nenastavená" predvolená hodnota.

#### Vyrovnávacia pamäť opisu (`modalityBridge/bridgeCache.ts`)

Pamäťová vyrovnávacia pamäť LRU + TTL pre výstupy opisu, zdieľaná v rámci celého procesu. Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s rámcovaním dĺžkovou predponou (bez kolízií hraníc polí). Komponentom modelu je **nakonfigurovaný** model mostíka, nie model, ktorý skutočne odpovedal – `callVisionModel` môže interne prejsť na záložnú možnosť a kľúčovanie podľa každého pokusu by fragmentovalo vyrovnávaciu pamäť. Zlyhané opisy sa nikdy neukladajú do vyrovnávacej pamäte. Nastavenia:

| Kľúč                            | Predvolené | Rozsah  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalizácia vzdialených obrázkov (self-loop describe/base64 fetch)

Keď bridge sám načíta **vzdialený** obrázok – vlastné volanie describe od Anthropic a konverzia base64 vo formáte claude-wire (`ensureBase64ImagesForClaudeWire`), obe prostredníctvom `fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` – výsledný dátový URI prejde cez `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) predtým, ako sa vloží do požiadavky na vision model. Príliš veľké obrázky sú zmenšené na **dlhú hranu 2048px** (čo zodpovedá obmedzeniu zmeny veľkosti, ktoré OpenAI/Anthropic už používajú na strane servera), čím sa zníži počet bajtov/latencia pri odovzdávaní bez zmeny toho, čo vision model vidí. Zmena veľkosti využíva `sharp` načítaný cez dynamický import: na platforme, kde sa jeho natívna binárka nepodarí načítať, `normalizeDataUri()` **nikdy nevyvolá výnimku** – prejde na prenos pôvodných bajtov, takže cesta describe/base64-conversion bude vždy fungovať. Bajty nepatriace obrázkom (načítanie, ktoré nevrátilo dekódovateľný obrázok) sa taktiež prenesú nezmenené. Táto normalizácia sa vzťahuje na obrázky, ktoré bridge načítava pre svoje vlastné volanie – nikdy sa neaplikuje na surový prenosový payload volajúceho, čo je v súlade s princípom mutácie iba na základe opt-in (Hard Rule #20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sú overované pomocou Zod v `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` a skupina `modalityBridgeAudio*` používaná modulom Audio Bridge. Migrácia `141_modality_bridge_settings.sql` kopíruje existujúce staršie hodnoty `visionBridge*` do zodpovedajúcich nových kľúčov (idempotentné, nikdy neprepíše hodnotu `modalityBridge*` nastavenú operátorom); staršie kľúče zostávajú akceptované ako záloha na čítanie po dobu jedného cyklu vydania.

#### Transparentná hlavička + štatistiky

Odpovede transformované pomocou describe obsahujú `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (zostavené pomocou `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`, označené pomocou `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`). Presmerované požiadavky nezískajú **žiadnu** hlavičku – payload zostal nedotknutý a výmena modelu je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (správcovská autentifikácia, rovnaká úroveň ako `GET /api/settings`) vráti počítadlá pre jednotlivé modality v pamäti `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a `video`. `averageLatencyMs` používa ako menovateľ `latencySamples`, nie všetky pokusy; operácia bez merania času nevytvára vzorku s nulovými milisekundami. `bridged` zostáva spätne kompatibilným aliasom pre úspešné konverzie; neúspešné pokusy ho nezvyšujú. Počítadlá sa zámerne resetujú pri reštarte procesu (telemetria, nie účtovníctvo).

#### Konfigurácia dashboardu

Vyhradená stránka dashboardu je `/dashboard/settings/modality-bridge`. Jej URL adresovateľné karty `Vision`, `Audio` a `Video` zachovávajú parametre dopytu pri prepínaní hodnoty `tab`. Karta Vision sprístupňuje povolenie, režim, výber modelu (vrátane automatického predvoleného), promptovanie zohľadňujúce úlohu, pokročilé limity časového limitu/obrázkov/dĺžky popisu/vyrovnávacej pamäte, počítadlá bežiaceho času a chránenú vzorovú požiadavku. Karta Audio je tiež aktívna: sprístupňuje povolenie, výber modelu iba pre STT s možnosťou Auto, limity časového limitu/max-clip, zvukové počítadlá a vzorkový test `input_audio`. Karta Video je funkčná: hlási stav behu FFmpeg/ffprobe – jeden zo štyroch explicitných stavov používateľského rozhrania (`unknown`, keď prebieha testovanie alebo sa nepodarilo ho dokončiť, `restricted` na hostiteľovi dashboardu bez loopbacku, kde sa test preskakuje na strane klienta, `unavailable` po otestovaní a potvrdení absencie, alebo `available` s verziami FFmpeg/ffprobe) – uchováva limity zapnutia/modelu/snímok/videa/časového limitu, filtruje výber modelu na modely schopné spracovať obraz a sprístupňuje počítadlá videa.

Bývalá karta Vision Bridge v nastaveniach AI je odkazom kompatibility na novú stránku; už nevlastní druhú kópiu formulára. Media Providers tiež prepojujú pracovné postupy Image-to-Text a Speech-to-Text s príslušnými kartami Modality Bridge bez toho, aby odstránili existujúce ihrisko Speech-to-Text.

**Obídenie prijatia cez seba-slučku:** keď volanie describe prechádza cez vlastnú seba-slučku `/v1` OmniRoute (neštandardný model poskytovateľa), čiastočná požiadavka odosiela `x-omniroute-admission-bypass: internal` a je autentifikovaná pomocou vyriešeného poverenia seba-slučky – lokálneho strážcu `sk_omniroute` v lokálnom režime alebo kľúča prostredia `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného operátorom (#1350), aby nasadenia s `REQUIRE_API_KEY=true` mohli stále spustiť volanie describe. Obídenie sa rešpektuje iba pre tieto presné poverenia, takže externí klienti nemôžu túto hlavičku použiť na preskočenie prijatia.

Staršie predvolené hodnoty sa nachádzajú v `src/shared/constants/visionBridgeDefaults.ts`; nové predvolené hodnoty pre režim/task-aware/vyrovnávaciu pamäť a riešič nastavení sa nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`. Ochranné opatrenie sprístupňuje možnosť konštruktora `deps`, aby testy mohli injektovať falošné implementácie `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva požiadavky chatu obsahujúce zvuk predtým, než dorazia do cieľa, o ktorom nie je známe, že akceptuje zvukový vstup. Nikdy nepresmerúva požiadavku chatu: zvukové časti sú prepísané prostredníctvom existujúceho viacdielneho koncového bodu kompatibilného s OpenAI a vybraný model chatu pokračuje s textovými prepismi.

Tok:

1. Vyriešte `supportsAudio` pomocou `getResolvedModelCapabilities()`. Explicitné metadáta registrov poskytovateľov majú prednosť, nasledujú statické metadáta modelu a nakoniec zosynchronizované `modalities_input`. Deklarovaný vstupný zoznam bez `audio` je `false`; ak chýbajú dôkazy o schopnostiach, zostáva `null`. Hodnoty `false` aj `null` aktivujú konzervatívny most, zatiaľ čo `true` ho obchádza.
2. Vyriešte nastavenia `modalityBridgeAudio*` a extrahujte spojiteľné zvukové časti najvyššej úrovne zo všetkých správ pomocou zdieľaného detektora `detectMediaParts()`. Podporované sieťové tvary sú `input_audio`, `audio_url` od OpenAI a `source.media_type: "audio/*"`. Vnorené audio sa deteguje na účely smerovania, ale cesta spájania ho neodstraňuje. Práca je ohraničená hodnotou `modalityBridgeAudioMaxClips`; neskoršie časti zostávajú nedotknuté.
3. Rešpektujte nakonfigurovaný formát `provider/model` alebo nechajte funkciu `selectAudioBridgeModel()` prejsť zoznam `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnom poradi katalógu a vybrať prvý model s použiteľným aktívnym poverením poskytovateľa.
4. Funkcia `callAudioTranscription()` konvertuje audio vo formáte base64/data-URI na multipart `file` alebo stiahne vzdialenú adresu `audio_url` cez výstupnú ochranu určenú len pre verejnú sieť s DNS pinningom a limitom 25 MB. Potom odošle súbor a vybratý model pomocou požiadavky POST do lokálnej self-loop slučky `/v1/audio/transcriptions` overenej pomocou `resolveSelfLoopBearer()`. Existujúca trasa prepisu vykonáva štandardné vyhľadávanie poverení, spracovanie chladnutia/obmedzenia frekvencie a odoslanie poskytovateľovi.
5. Úspešné volania nahradia svoje časti textom `[Audio N]: <transcript>`. Volania prebiehajú pomocou `Promise.allSettled`: individuálne zlyhanie zachová pôvodnú zvukovú časť (zmluva #4012). Ak zlyhajú všetky volania a cieľ preukázateľne hlási `supportsAudio === false`, časti sa zmenia na `[Audio N]: (unavailable — no STT provider connected)` (zmluva #8430). Pre neznámy cieľ (`null`) zostáva výsledok pri hromadnom zlyhaní nedotknutý. Preukázateľne textový cieľ bez použiteľných STT poverení dostane rovnakú explicitnú záslepku bez vyvolania sieťového volania.

Úspešné prepisy využívajú procesnú LRU/TTL vyrovnávaciu pamäť pre Modality Bridge. Kľúč kombinuje zvukovú referenciu, stabilný štítok operácie `audio-transcription` a vybratý STT model; zlyhania sa nikdy neukladajú do vyrovnávacej pamäte. Pokusy s audiom aktualizujú zdieľané počítadlá `bridged`, `cacheHits`, `failures` a `lastUsedAt`. Transformované odpovede obsahujú hlavičku `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotknuté požiadavky nezískavajú segment Audio Bridge.

Behové nastavenia sú uložené v databáze a overované pomocou Zod:

| Kľúč                          | Predvolené | Rozsah            |
| ----------------------------- | ---------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                 |
| `modalityBridgeAudioModel`    | `""`       | Auto alebo STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10              |

Zdieľaná vyrovnávacia pamäť je naďalej kontrolovaná premennými `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytáva časti videa najvyššej úrovne v poli `messages` rozhrania Chat Completions a `input` rozhrania Responses API predtým, ako sa zavolá cieľ bez známej natívnej podpory videa. Podporované tvary sú `input_video`, `video_url`, `video_source`, adresy HTTPS a dátové URI vo formáte `data:video/*;base64,...`. Obyčajné názvy súborov v texte sa nepovažujú za video.

Funkcia `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zodpovedá za prechádzanie požiadaviek, kontrolu schopností/pravidiel, agregáciu pre každú požiadavku a dátovú časť odpovede. Práca s videom — získavanie, vyrovnávacia pamäť pre celý výsledok, popis sekvencie snímok (ktorá zlúči akýkoľvek zvukový prepis deklarovaný volajúcim) a metriky/prerušenie/vyčistenie pre jednotlivé pokusy — je ukrytá za funkciou `processVideoPart` v súbore `videoBridgePipeline.ts`, ktorá sa volá raz pre každú časť videa v slučke metódy `preCall`. Tento modul tiež definuje explicitné hranice portov `VideoMediaBrokerPort` (získavanie bajtov a extrakcia vzorkovaných snímok), `VideoAudioTranscriptionPort` (zlúčenie volajúcim deklarovaného zvukového prepisu so vzorkovanými titulkami) a `VideoDrilldownPort` (hránica trvalého ukladania podrobností snímok; zatiaľ nie je zapojená do `processVideoPart` — zápisy do úložiska podrobností dnes vykonáva iba samostatná trasa `/api/modality-bridge/video/drilldown`).

Verejná cesta požiadaviek `/v1` nikdy neimportuje ani nevyvoláva subproces. Vzdialené videá sa sťahujú s obmedzením do 50 MiB; vložené videá vo formáte base64 majú konzervatívny limit 36 MiB dekódujúcich sa údajov na jedno video, aby obálka model/správy/rámovanie mohla zostať v rámci limitu príjmu verejných JSON požiadaviek 50 MiB. Odhady dĺžky vloženého obsahu a dekódovanej veľkosti sa kontrolujú pred alokáciou. Protokol HTTPS je vyžadovaný pre počiatočnú vzdialenú adresu URL aj pre každé presmerovanie, pričom sa využíva existujúca výstupná ochrana len pre verejnú sieť s DNS pinningom. Bajty potom prekračujú presnú internú hranicu brokera `POST /api/modality-bridge/video/extract`. Táto trasa je označená ako `LOCAL_ONLY` aj `SPAWN_CAPABLE`, akceptuje iba autentifikovanú požiadavku procesov v rámci dôveryhodného lokálneho prepojenia a nikdy neakceptuje adresu URL, cestu k súborovému systému, spustiteľný súbor ani zoznam argumentov. Rúra veľkosti tela API a prírastkový čítač tela obslužného programu nezávisle vynucujú vstupný limit brokera 50 MiB. Jej ohraničená fronta spúšťa vždy jednu extrakciu, umožňuje štyri čakajúce úlohy a obmedzuje čakajúci vstup na 100 MiB.

Vnútri brokera `ffprobe` číta súkromný lokálny súbor; zoznam povolených pevných formátov vylučuje formáty playlistov a manifestov. Pre povolené kontajnery rodiny MOV zostávajú externé dátové referencie MOV predvolene zakázané a pevný príkaz ich nezapína. `ffprobe` aj `ffmpeg` používajú biely zoznam protokolov obsahujúci iba `file`, jedno vlákno, pevné polia argumentov, žiadny shell a spustiteľné súbory sa vyhľadávajú z `PATH`. Prúdy obalových obrázkov (attached-picture cover streams) nie sú hrateľnými kandidátmi. Všetky hrateľné prúdy musia spĺňať limity a pred deterministickým záložným riešením s najnižším indexom sa uprednostňuje explicitný predvolený prúd. Videá sú obmedzené na 600 sekúnd, 8 192 pixelov na rozmer a 33 554 432 zdrojových pixelov. FFmpeg vzorkuje 1–16 stredových snímok JPEG, zmenšuje dlhú hranu na najviac 1 024 pixelov bez zväčšovania menších vstupov a nikdy nedostane URL. Vzorkovanie je predvolene `uniform`. Voliteľné politiky `scene_aware` a experimentálne `segment_aware` vykonávajú jeden dodatočný pevný prechod cez už overený lokálny prúd pomocou FFmpeg, vyberajú ohraničené časové značky scén `showinfo` a v prípade zlyhania detektora, vypršania časového limitu, chybného výstupu alebo prázdnej sady kandidátov deterministicky prechádzajú na rovnaké rovnomerné stredové body. Režim so zohľadnením segmentov alokuje vzorky stredových bodov úmerne k overeným intervalom scén; dôkazy a záložné správanie pre režim so zohľadnením segmentov sú podrobne opísané nižšie. Tvrdý strop 16 snímok sa uplatňuje po výbere v každej politike. Keď má požiadavka so zohľadnením scény rozpočet iba na jednu snímku, použije rovnomerný stred aktívneho okna celého videa alebo okna zamerania a nahlási `policyEffective: uniform`: jediná vybraná snímka scény nedokáže zachovať oba časové konce. Volajúci môže voliteľne poskytnúť konečné okno zamerania (sekundy `start`/`end`); hranice sú obmedzené na trvanie médií, obrátené alebo nekonečné okná sú zamietnuté a všetky politiky vzorkovania sa vykonávajú iba v rámci normalizovaného intervalu. Výsledné okno je zahrnuté v metadátach vzorkovania a v nedôveryhodnej predpone popisu, aby následné modely mohli rozlíšiť zameraný úryvok od celej časovej osi.

Zameranie sémantického popisu je samostatné, explicitné nastavenie. Predvolený režim analýzy `full` zachováva existujúci prompt snímok a nikdy neposiela text požiadavky modelu popisu. V režime `focused` prečíta bridge iba posledný neprázdny `text`/`input_text` vytvorený používateľom z toho istého kontajnera Chat alebo Responses, normalizuje ho do formátu NFC, zbalí riadiace znaky a biele miesta a obmedzí ho na 500 kódových bodov Unicode. Prázdny výsledok sa vráti k presnému promptu `full`. Použiteľný hint sa serializuje ako JSON v špecializovanom bloku `untrusted-user-context` a môže uprednostňovať iba pozorovateľné detaily; nemôže prepísať samostatné varovanie pred nasledovaním pokynov viditeľných alebo počuteľných v médiách. Textové zameranie nikdy neodvodzuje `start`/`end` ani nemení časový vzorkovač.

#### FU-07 dôkazy štrukturálnych segmentov

`segment_aware` využíva jeden ohraničený predanalytický prechod cez už overený lokálny video prúd. Pevný reťazec filtrov najprv prispôsobí mierku na šírku najviac 320 pixelov, deteguje zmeny scény a zmrazené intervaly, a potom vzorkuje rýchlosťou 1 snímka za sekundu pre rozostrenie, priemernú jasovú zložku (luma) a priestorové/časové informácie. Prechod je obmedzený na 600 štrukturálnych vzoriek, jedno vlákno FFmpeg/filter, rovnaké zoznamy povolených protokolov a kontajnerov iba pre `file`, obmedzenie výstupu procesu na 1 MiB a najviac 30 sekúnd v rámci zdieľaného prerušenia/termínu brokera. Nikdy neprijíma príkaz, filter, cestu ani URL z požiadavky.

Štrukturálne hodnoty sú deterministické dôkazy vzorkovania, nie sémantické chápanie videa. Neodvodzujú predmety, akcie, popisky, reč ani zámer používateľa. Hranice scény a zmrazenia tvoria segmenty; pokrytie zmrazenia, rozostrenie, expozícia, priestorové detaily a časová zmena ovplyvňujú iba spôsob, akým sa alokuje existujúci rozpočet 1–16 snímok. Plne zmrazený segment je obmedzený na jednu snímku, zatiaľ čo nezmrazené segmenty súťažia o zostávajúci rozpočet. Keď hranice prevažujú nad snímkami, zachová sa rovnomerné pokrytie časovej osi, takže rýchle počiatočné strihy nemôžu skryť dlhý záverečný segment. Hranice scén v rámci 1-sekundového analytického rozlíšenia hranice zmrazenia sa zlúčia.

Chýbajúce filtre, chybné/prázdne dôkazy, chyba detektora alebo vypršanie časového limitu ohraničenej predanalýzy zlyhávajú otvorene na presnú politiku rovnomerných stredových bodov. Prerušenie volajúcim alebo termín brokera nezlyháva otvorene: ukončí prebiehajúci podproces, zabráni neskoršej extrakcii snímok a súkromný dočasný strom sa odstráni v bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické skutočné fixtures FFmpeg pre úspory volaní popisu po deduplikácii, alokáciu rozpočtu pre hustý pohyb, dôkazy rozostrenia/expozície/SI-TI, rýchle strihy s dlhým chvostom a falošne pozitívne výsledky postupného stmievania. Zaznamenáva reálny čas predanalýzy a všade tam, kde je k dispozícii `/usr/bin/time`, aj CPU podprocesu a maximálnu hodnotu RSS. Jeho kontroly kvality sú iba štrukturálnymi orákulami. Kvalita skutočného modelu popisu zostáva v stave `HOLD`, pretože tento testovací nástroj nemá autorizovaný koncový bod ani zmrazeného posudzovateľa. Finančné úspory tiež zostávajú v stave `HOLD`, pokiaľ `--caption-cost-per-call-usd` neposkytne explicitný kladný odhad na jedno volanie; skript nikdy nevymýšľa žiadny z týchto výsledkov.

Každý snímok je obmedzený na 4 MiB, všetky surové snímky spolu na 23 MiB a serializovaná odpoveď brokera na 32 MiB. Súkromný dočasný adresár sa odstráni v `finally`. OmniRoute neobsahuje pribalený FFmpeg a neprijíma vlastnú cestu k spustiteľnému súboru. Pred vytvorením popisu most aplikuje konzervatívny prechod vizuálnej deduplikácie: každý JPEG sa zmenší na 16×16 odtieňov sivej a porovnáva sa iba s posledným ponechaným snímkom. Pre požadovaný rozpočet popisu presahujúci jeden snímok poskytuje extrakcia ohraničenú zásobu kandidátov až do výšky dvojnásobku tohto rozpočtu a nikdy nie viac ako 16 snímok. Požadovaný strop sa uplatňuje až po deduplikácii, pričom prvý a posledný vybraný kandidát sa zachovajú počas záverečného preriedenia, ak je rozpočet aspoň dva. Verziovaná politika `grayscale-16x16-mean-cells-v2` používa väčšiu hodnotu z priemernej delty jasu a pomeru buniek miniatúry, ktorých normalizovaná delta je aspoň 0,05. Prah duplikátov je konštanta 0,04, zvolená kvôli predvídateľnosti namiesto toho, aby bola sprístupnená ako nastavenie za chodu. Tento sekundárny vysokokontrastný signál zachováva malý pohyb a zmeny viditeľného textu, ktoré porovnanie iba na základe priemeru môže skryť. Chyby komparátora alebo dekodéra zlyhávajú otvorene a zachovávajú pokrytie. Výstupné metadáta oddeľujú extrahovaných kandidátov, úspešne použité snímky a vynechané vizuálne duplikáty.

Explicitne označená časť videa môže požiadať o kontaktný hárok s časovými pečiatkami. Most zostavuje najviac 4-stĺpcovú, 16-snímkovú JPEG mriežku. Každá 512-pixelová bunka zapracuje svoju zdrojovú časovú pečiatku do vysoko kontrastného spodného pásma, zatiaľ čo rovnaké časové pečiatky zostávajú v textových metadátach pre následnú asociáciu a audit. Kompletný JPEG zostáva obmedzený na 32 MiB. Ak `sharp` nedokáže dekódovať alebo zložiť mriežku, most sa vráti k jednotlivým JPEG snímkam; prerušenie zo strany klienta sa stále šíri cez operáciu hárku.

Podklady pre povýšenie sú zámerne oddelené od mikrobenchmarku syntetickej kompozície. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje verziu schémy testovacieho prostredia typu A/B pre reálne modely videnia kompatibilné s OpenAI. Meria tokeny hlásené poskytovateľom, celkovú latenciu (vrátane kompozície hárku), počet volaní modelu a uchovanie faktov definovaných v manifeste. Surové odpovede modelu sa nezapisujú do správy; zachovávajú sa iba súhrny SHA-256 a priradené ID faktov. Testovacie prostredie nevykonáva žiadne sieťové ani platené volanie modelu, pokiaľ nie je odovzdaný prepínač `--execute-real` a nie sú nakonfigurované `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez tohto explicitného reálneho spustenia zostáva jeho strojovo čitateľný verdikt `HOLD`; samotné merania syntetického užitočného zaťaženia / počtu volaní nie sú podkladmi pre povýšenie.

Volajúci môžu k podporovanej časti videa pripojiť voliteľné pole `transcript.cues`, ak už majú k dispozícii zarovnaný text. Každé cue musí obsahovať `text`, konečný interval `start`/`end` v rámci skúmaného trvania a povolený zdroj `source` (`client`, `embedded` alebo `audio-bridge`); `confidence` má predvolenú hodnotu `1` a musí byť v rozmedzí od `0` do `1`. Presné duplicitné cue sú zlúčené. OmniRoute nikdy nespúšťa prepis z týchto metadát: overené cue sa skopírujú do opísaného výsledku so zdrojom, spoľahlivosťou a intervalom a vykreslia sa ako nedôveryhodné pozorovania popri popiskoch snímok. Neplatný text, text mimo rozsahu alebo text bez pôvodu sa odmieta namiesto toho, aby sa zmiešal do prúdu popisov. Kanály prepisu v tele požiadavky normalizujú dodaný pôvod na `client`, vrátane vlastných nárokov na štítky `embedded` alebo `audio-bridge`. Tieto dôveryhodné štítky môže priradiť iba adaptér vlastnený serverom prostredníctvom argumentu `trustedSource`, ktorý je dostupný iba v kóde; pole JSON v požiadavke nemôže dosiahnuť tento argument. Text prepisu zostáva nedôveryhodným obsahom odvodeným z médií bez ohľadu na jeho pôvod a nesmie nikdy určovať autorizáciu.

Pokročilý volajúci môže poskytnúť stopu `audioTranscript` pre to isté video; považuje sa za text poskytnutý klientom, nie za dôkaz o prepise na serveri. Spájací bod spúšťa vizuálne a zvukové pozorovania pod jedným časovým limitom a signálom prerušenia, usporadúva ich na spoločnú časovú os, zlučuje presné duplikáty a hlási čiastočný výsledok, keď uspje iba jedna strana. Neplatný `audioTranscript` degraduje na tento čiastočný výsledok – vizuálny popis sa zachová a zvuková vetva zaznamená očistený kód zlyhania – namiesto zlyhania celého videa. Dostupnosť pre jednotlivé vetvy, čiastočný príznak a očistené kódy zlyhania sú zachované v opísanom výsledku, v metadátach ochranných mechanizmov (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v metadátach vyrovnávacej pamäte výsledkov a v počítadlách fúzie mosta. Predvolená cesta Video Bridge nevyvoláva prevod reči na text ani sťahovanie druhej kópie média; bez tejto explicitnej stopy zostáva iba vo forme videa.

**Uchovávanie prepisov (#12150 P1).** Toto sa uplatňuje automaticky vždy, keď Video Bridge (ktorý je sám o sebe voliteľný) vykreslí pokyn prepisu — neexistuje žiadny samostatný príznak uchovávania. Keď požiadavka vykreslí akýkoľvek pokyn prepisu (volajúcim deklarovaný `transcript` alebo zlúčený `audioTranscript`), bezpečnostný filter ho označí ako `videoBridgeObserved` a vytvorí redigovaný tieň opisu videa — identické vykreslenie, v ktorom je telo voľného textu každého pokynu nahradené reťazcom `[redacted-video-transcript]`, vytvorené nahradením štruktúrovaného poľa pokynu pred zostavením reťazca (nikdy nie analýzou splošteného textu, takže žiadny obsah pokynu — útočný ani bežný, vrátane tiel obsahujúcich `]` ako napr. `[inaudible]`/`[music]` — nemôže prežiť). Trvalé telo požiadavky v protokole volaní nahradí každú textovú časť odvodenú z videa týmto redigovaným tieňom, pričom sa porovnáva rovnosť obsahu; kotva `fullText` sa znova prečíta z dokončenej dátovej časti bezpečnostného filtra pred volaním, takže zhoda zostáva úspešná aj po tom, čo neskoršie bezpečnostné filtre reťazca (maskovače údajov PII a poverení, priority 10/95) prepíšu text opisu na mieste a po tom, čo vloženie systémového promptu/odovzdania/pamäte preformátuje pole správ. Telo odoslané smerom nahor do modelu zostáva nezmenené. Pozorovaná požiadavka tiež nevytvára žiadnu trvalú pamäť (extrakcia odvodená od požiadavky aj odpovede sa preskočí), takže samotná odpoveď modelu nemôže zopakovať text prepisu do pamäte.

**Surové polia videa (#12430).** Keď je mostík povolený a natívna podpora videa je neznáma alebo chýba, definované polia `transcript`/`audioTranscript` taktiež aktivujú `videoBridgeObserved`, a to aj po zlyhaní opisu alebo po dosiahnutí limitu `maxVideos`. Hodnoty `null` a prázdne reťazce sa počítajú; chýbajúce polia a metadáta nesúvisiace s videom nie. Uchované kópie tieto polia redigujú alebo požiadavku vynechajú a vyrovnávacie pamäte / pamäť sa obídu.

Na týchto záložných cestách sa platné pokyny volajúceho stanú podporovanými časťami `text`/`input_text` namiesto neštandardných polí poskytovateľa. Obe stopy dodané v požiadavke zostávajú nedôveryhodnými pozorovaniami klienta (`client`), s výslovným varovaním, že video nebolo opísané a časové pečiatky neboli overené voči médiu. Existujúce celkové limity a limity na jeden pokyn (256 pokynov / 64 KiB) platia pre obe stopy spoločne; časové pečiatky sa musia zmestiť do 600-sekundového stropu sprostredkovateľa a akéhokoľvek dodaného okna zamerania. Neplatné stopy sa zahodia, neposielajú sa ďalej ako ľubovoľný text; platná sesterská stopa sa môže stále použiť, pokiaľ nie je prekročený ich spoločný rozpočet. Nulové/prázdne polia nepridávajú žiadny text. Toto záložné riešenie nepridáva žiadne sťahovanie médií ani prepis. Polia rozšírenia prepisu sa odstránia zo záložného nosiča videa a jeho objektov `video_url`/`source`. Zoznam povolených sieťových položiek OpenAI zostáva prísny; nosiče videa s neznámou natívnou podporou zostávajú dostupné a známe ciele obsahujúce iba text si zachovávajú bezpečné značky. Štruktúrované redigované tiene chránia pripojený text prepisu, zatiaľ čo pôvodná požiadavka vlastníka (volajúceho) zostáva nezmenená. Ciele s natívnou podporou a zakázané mostíky si zachovávajú svoje existujúce správanie obídenia.

Ďalšie uchované kópie používajú rovnaký signál pozorovanej požiadavky. Snímka surovej požiadavky klienta pred bezpečnostným filtrom, čakajúca požiadavka v pamäti a záznam skutočne zamietnutej požiadavky štrukturálne nahradia polia prepisu v častiach videa; reťazcové prompty syntetizované fázami potrubia a odovzdaním kontextu sú redigované v mieste ukladania tela perzistovanej požiadavky. Perzistovaná značka `video_content_removed` spôsobuje, že nadväznosť `previous_response_id` zlyhá bezpečne (fail closed) namiesto toho, aby rekonštruovala text, ktorý bol zámerne zlikvidovaný. Ak pozorovaná požiadavka stratí svoj redigovaný tieň pre jednotlivé časti pred zaznamenaním, alebo ak čo i len jeden z viacerých tieňov videa zlyhá pri zhode po neskorších zmenách požiadavky, uchované telo požiadavky sa vynechá úplne namiesto toho, aby sa zachoval čiastočne redigovaný prepis.

V prípade pozorovanej požiadavky môže odpoveď modelu citovať akúkoľvek časť prepisu bez štruktúrovanej hranice pokynu. Telo odpovede (`responseBody`) v perzistovanom protokole volaní je preto nahradené značkou vynechania; podrobný artefakt potrubia (ktorý môže zahŕňať telá poskytovateľa/klienta a časti streamu) sa neuchováva. Sémantické vyrovnávacie pamäte, pamäte idempotencie a opätovného prehrávania úvah obchádzajú čítanie a zápis pre túto požiadavku. Požiadavka poskytovateľa a odpoveď viditeľná pre klienta zostávajú nezmenené. Počiatočné bajty keepalive sa vypustia z dočasnej vyrovnávacej pamäte, keď je podrobný artefakt vynechaný. Varovanie Kiro ohľadom chybných formátov EventStream hlási iba počet bajtov užitočného zaťaženia, nikdy nie jeho obsah alebo surovú chybu analyzátora JSON.
Toto netvrdí, že každá nesúvisiaca diagnostika poskytovateľa/modulu plug-in bola auditovaná; širšie preverenie uchovávaných cieľov sa sleduje v téme #11658.

Vnútorný životný cyklus `/api/modality-bridge/video/drilldown` predstavuje samostatnú podkladovú vrstvu vyrovnávacej pamäte overovanú pomocou loopback/tokenu. Každá operácia vyžaduje aj kanonické neprehľadné ID subjektu. Predtým, ako je produktívny volajúci povolený, musí toto ID odvodiť od autentifikovaného nájomcu a nesmie nikdy poslať ďalej hodnotu zvolenú klientom. Kľúče vyrovnávacej pamäte viažu tohto subjektu ku kanonickým ID relácie a referencie videa, ukladajú iba ich kľúče odvodené pomocou SHA-256 a obmedzujú rozsah čítania aj mazania na rovnakého subjektu. Vyrovnávacia pamäť ukladá najviac 16 odvodených snímok JPEG na položku, po desiatich minútach ich platnosť vyprší a podporuje ohraničené čítania `start`/`end` alebo explicitné vymazanie relácie.

Každý subjekt je obmedzený na 16 položiek a 64 MiB kanonických údajov JPEG. Tieto limity sú nezávislé od globálneho stropu 64 položiek / 256 MiB: tlak kvót subjektu vyprázdni iba najmenej nedávno použité položky daného subjektu skôr, ako sa zváži globálne vyprázdnenie LRU. Expirované položky sa vyčistia z účtovníctva subjektu aj z globálneho účtovníctva pri aktivitách vyrovnávacej pamäte, zatiaľ čo zrušenie a zlyhanie overenia nezapíšu čiastočnú náhradu.

Cache odmieta nekanonický Base64, nadmerný padding, médiá iné ako JPEG, chybné alebo skrátené súbory JPEG a JPEG súbory, ktoré vygenerujú varovanie počas obmedzeného dekódovania celého obrazu pomocou `sharp`. Každý akceptovaný obrázok opätovne zakóduje ako kanonický JPEG, šírku a výšku odvodí z dekódovaných bajtov namiesto dôverovania poliam volajúceho a namiesto uchovania zahodí všetky koncové polyglotové bajty. Do oboch kvót sa započítava iba obmedzený kanonický komprimovaný buffer. Sieťový limit JSON zahŕňa réžiu Base64 pre limit 32 MiB dekódovaného vstupu. Každá uložená derivácia zaznamenáva svoj overený formát/rozlíšenie JPEG, politiku vzorkovania, verziu derivácie, čas vytvorenia, serverom vypočítaný hash obsahu a zahashovanú referenciu na rodiča spolu s hashem obsahu rodiča od dôveryhodného volajúceho. Zrušenie sa kontroluje medzi asynchrónnymi fázami dekódovania a hashovania pred atomickým zápisom do cache.

Táto tranža zatiaľ nepripája produkčného producenta k trase a neposkytuje výber variantov s viacerými rozlíšeniami. Transparentná cesta požiadaviek Video Bridge preto nevytvára žiadnu dodatočnú prácu, zatiaľ čo odvodzovanie identít viazaných na tenanta a celý viacrozlíšenostný životný cyklus FU-08 zostávajú explicitnou následnou prácou namiesto toho, aby boli dokumentované ako hotové správanie.

Snímky sú titulkované postupne pomocou nakonfigurovaného Video modelu. Prázdne prepísanie pre Video zdedí nastavenie Vision; ak sú obe prázdne, automatický smerovač Vision vyberie efektívny model schopný pracovať s vizuálnymi dátami. Úspešné titulky nahradia pôvodnú časť stabilnou predponou `[Video description:`, ktorá zároveň označuje text ako nedôveryhodné pozorovanie odvodené z médií a dáva modelom v nadväznosti pokyn, aby nenasledovali inštrukcie nachádzajúce sa v médiách. Kľúče cache pre titulky snímok zahŕňajú bajty JPEG, prompt, časovú pečiatku a efektívny model; v cache sa ukladajú iba úspešné titulky. Položky v cache si zachovávajú skutočný úspešný model producenta vrátane záložného modelu; bridge hlási `mixed`, keď boli rôzne snímky vytvorené rôznymi modelmi. Zásah do cache opätovne použije túto identitu producenta namiesto toho, aby ju premenoval na požadovaný plán smerovania. Výsledková cache pre celé video je kľúčovaná podľa každého vstupu, ktorý mení výstup — prompt, efektívny model, politika vzorkovania, počet snímok, režim sémantickej analýzy, odtlačok SHA-256 normalizovaného hintu zamerania, okno zamerania, `transcript`, `audioTranscript` a príznak kontaktného hárku — takže zmena ktoréhokoľvek z týchto rozmerov vedie k minulosti cache (cache miss), nikdy nie k opätovnému použitiu zastaraných údajov. Verzia politiky vizuálnej deduplikácie, prahová hodnota a obmedzený počet kandidátskych snímok sú taktiež explicitné v kľúči výsledkovej cache a metadátach; zmena politiky preto nemôže opätovne použiť zastaraný popis celého videa. Metadáta výsledkovej cache v4 uchovávajú režim a odtlačok, nikdy nie surovú používateľskú úlohu. Metadáta guardrailu hlásia požadovaný aj efektívny režim analýzy; požadovaný režim `focused` bez použiteľného používateľského textu sa hlási ako efektívne `full`.

Guardrail extrahuje každú podporovanú video časť, ale popíše najviac `modalityBridgeVideoMaxVideos`. Pre cieľ, u ktorého sa preukázalo, že `supportsVideo === false`, sa zlyhané videá a videá nad limit stanú explicitnými bezpečnými textovými značkami, takže neprežije žiadne surové video. Keď je schopnosť neznáma, tieto časti si zachovávajú svoj video nosič; akýkoľvek záložný prepis sa riadi vyššie uvedenou obmedzenou konverziou textu. Ciele s `supportsVideo === true` obchádzajú bridge. Signál prerušenia požiadavky klienta sa šíri cez sťahovanie, front brokera, podprocesy a volania titulkov; prerušenia sa zastavia medzi videami a pri prerušení nikdy neskončia so surovými médiami.

Nastavenia runtime sú uložené v databáze a overované pomocou Zod:

| Kľúč                                | Predvolené  | Rozsah / správanie                                                                                           |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Voliteľný runtime, aktivácia na základe opt-in                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachováva všeobecné popisy; `focused` používa obmedzený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`        | Zdediť model Vision Bridge                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` alebo proporcionálny `segment_aware`; zlyhanie detektora prejde na `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                               |

Staršie perzistované hodnoty časového limitu videa nad 120 sekúnd sú obmedzené na termín brokera; nové zápisy nastavení nad tento limit sú odmietnuté.
`GET /api/modality-bridge/video/runtime` vyžaduje dôveryhodnú opečiatkovanú lokalitu loopback pred autentifikáciou alebo sondovaním runtime, následne vyžaduje správcovskú autentifikáciu. Vráti iba `available`, sanitizované verzie FFmpeg/ffprobe a pevný dôvod, keď runtime nie je k dispozícii. Interný koncový bod extrakcie nie je verejným API na nahranie súborov: nasýtenie frontu vráti `503` plus `Retry-After`, odpojenie volajúceho vráti `499` a pevný termín brokera vráti `504`. Konvertované odpovede pridávajú `video->text;model=<visionModel>;parts=<videos>` do centrálnej hlavičky `x-omniroute-modality-bridge` bez odstránenia segmentov Vision alebo Audio.

### Maskovač PII (`piiMasker.ts`)

Spúšťa sa na **oboch** fázach.

- **`preCall`** klonuje payload, prechádza `system`, `messages`, `input` a
  `prompt` (vrátane položiek tvoriacich obyčajné reťazce) a aplikuje `processPII()` (zo
  `@/shared/utils/inputSanitizer`) na reťazcové polia `content`/`text`. Keď je
  `PII_REDACTION_ENABLED=true`, detekované PII sa v odchádzajúcom payloade maskuje.
  Toto je nezávislé od `INPUT_SANITIZER_MODE` (ktorý riadi iba politiku
  prompt-injection). Keď je maskovanie vypnuté, volanie zaznamenáva počty detekcií
  bez prepisovania obsahu.
- **`postCall`** hlboko klonuje odpoveď, spúšťa `sanitizePIIResponse()` plus
  maskovač tvaru Responses-API (`maskResponsesOutput` — pokrýva
  `output_text` a `output[].content[].text`). Ak dôjde k akémukoľvek maskovaniu,
  upravená odpoveď nahradí pôvodnú.

Guardrail nikdy neblokuje; iba anotuje (`meta.detections`,
`meta.redacted`) alebo prepisuje.

#### Výber podľa typu, vlastné vzory a počítadlá detekcií

**Dashboard → Settings → Security → PII masking** vyberá, _čo_ sa maskuje.
Nezapína samotné maskovanie: o to sa stále starajú `PII_REDACTION_ENABLED` (požiadavka) a
`PII_RESPONSE_SANITIZATION` (odpoveď + SSE), pričom oba sú predvolene vypnuté.

- **Výber podľa typu** — vstavané identifikátory sú uvedené v
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Nenastavené znamená každý
  typ (správanie predtým, než toto nastavenie existovalo). Vzor `ssn_us` v engine požiadaviek
  sa mapuje na `ssn`. Šablóny (Minimal, Standard, Financial,
  Brazilian, USA, Full) vyplnia iba začiarkavacie políčka v používateľskom rozhraní.
- **Vlastné vzory** — až 20 vzorov regulárnych výrazov alebo zástupných znakov (`*` = až 64
  znakov okrem medzier, `?` = jeden). Zhody sa stávajú `[CUSTOM_REDACTED]`.
  Každý vzor prechádza cez `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): najviac 500 znakov, príznaky obmedzené
  na `g i m s u`, musí sa úspešne skompilovať, musí prejsť cez `safe-regex` (katastrofické spätné vyhľadávanie),
  a nesmie sa zhodovať s prázdnym reťazcom ani so zástupným symbolom maskovania.
  Vzor, ktorý zlyhá, je odmietnutý pri uložení a pri testovaní, pričom uložený riadok,
  ktorý zlyhá, sa za behu preskočí namiesto kompilácie. Vlastné vzory sa spúšťajú iba
  vtedy, keď je maskovanie zapnuté.
- **Počítadlá detekcií** — počty pre jednotlivé typy (nikdy nie zhodné hodnoty), uchovávané v
  pamäti a resetované pri reštarte (`src/lib/pii/piiDetectionStats.ts`). Zvyšujú sa
  iba vtedy, keď je maskovanie zapnuté.

Nastavenia sú uložené v tabuľke `key_value` (menný priestor `pii_settings`,
`src/lib/db/piiSettings.ts`) a čítajú sa cez 1 s vyrovnávaciu pamäť (cache). API:

| Metóda | Cesta                    | Účel                                                                              |
| ------ | ------------------------ | --------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stav príznaku, `enabledTypes`, `customPatterns`, počítadlá detekcií               |
| `PUT`  | `/api/settings/pii`      | Nahradenie `enabledTypes` (`null` = všetky) a/alebo `customPatterns`              |
| `POST` | `/api/settings/pii/test` | Skúšobný beh jedného vzoru oproti vzorke s veľkosťou najviac 8 KB; nič sa neuloží |

Všetky tri vyžadujú autorizáciu správcu a overujú telo požiadavky pomocou Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Detekuje nepriateľské štruktúry v obsahu poskytnutom používateľom a vynucuje
nakonfigurovanú politiku. Správanie je riadené premennými prostredia a možnosťami
konštruktora:

| Nastavenie      | Premenná prostredia                                                                                   | Predvolené | Účinok                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`     | Keď je `false`, guardrail sa skratuje.                                                                                                                                                                         |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`     | Politika injekcie: `block`, `warn` alebo `log`. (`redact` je akceptované kvôli spätnej kompatibilite, ale **neodstraňuje** text injekcie; prepis PII v požiadavke je riadený pomocou `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Minimálna závažnosť vyžadovaná na zablokovanie. Stredná je v predvolenom nastavení iba na pozorovanie.                                                                                                         |

**Priorita režimov** (`getMode`): `options.mode` volajúceho →
`INJECTION_GUARD_MODE` **prepísanie feature-flagu v DB** (Dashboard → Settings →
Feature Flags) → premenná prostredia `INJECTION_GUARD_MODE` → premenná prostredia `INPUT_SANITIZER_MODE` →
`warn`. Prepísanie v dashboarde má preto prednosť pred premennými prostredia, takže používateľské rozhranie Feature
Flags ovláda bežiaci guard naživo (bez reštartu). Čítanie z DB je odolné voči chybám:
ak dôjde k chybe, guard sa vráti k správaniu založenému na premenných prostredia, a keď nie je
nastavené žiadne prepísanie, správanie je identické s rozlíšením iba pomocou premenných prostredia.

Zdroje detekcie:

1. `sanitizeRequest()` zo `@/shared/utils/inputSanitizer` (zdieľaná množina detektorov
   používaná inde v pipeline).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, obe s úrovňou závažnosti `high`).
3. Voliteľné `customPatterns` odovzdané cez možnosti konštruktora (reťazce, regulárne výrazy
   alebo záznamy `{ name, pattern, severity }`).

Keď `mode === "block"` **a** aspoň jedna detekcia spĺňa prah závažnosti, `preCall` vráti `{ block: true, message: "Request rejected: suspicious content detected" }`. V režimoch `warn`/`log` ochranný mechanizmus udalosť zaznamená, ale volanie povolí. Zdieľaný pomocný nástroj `evaluatePromptInjection()` je taktiež exportovaný pre volajúcich, ktorí potrebujú vyhodnotiť prompty bez toho, aby prechádzali registrom.

**Hranica skenovania (v3.8.20):** detektor kontroluje iba **prvých 16 KB** spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v súbore `src/shared/utils/inputSanitizer.ts`. Funkcie `detectInjection()` aj `evaluatePromptInjection()` pred spustením cyklu vzorov vykonajú `slice(0, MAX_INJECTION_SCAN_BYTES)`. Injekčné direktívy sa nachádzajú blízko začiatku vstupu, čo obmedzuje zaťaženie CPU/GC regulárnych výrazov pri payloadoch veľkých stovky kilobajtov bez oslabenia detekcie (pozri #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Spúšťa sa v **oboch** fázach, ako posledný v predvolenej reťazi (priorita `95`). Maskuje známe vzory kľúčov API / tajných tokenov z odchádzajúceho payloadu (obsah správy, argumenty volania nástrojov, výsledky nástrojov) **a** odpovede poskytovateľa, takže prihlasovací údaj vložený do promptu (alebo vrátený vo výsledku nástroja) neunikne k upstream poskytovateľovi ani späť klientovi.

- **Iba na základe výslovného prihlásenia (opt-in)**, rovnaká konvencia ako redakcia PII (blízko k pravidlu Hard Rule #20): zakázané, pokiaľ `settings.credentialRedactionEnabled === true` **alebo** `CREDENTIAL_REDACTION_ENABLED=true`. Ak je vypnutý, ochranný mechanizmus je nečinný — nikdy neblokuje ani neprepisuje.
- `redactCredentials()` prechádza celý strom payloadu/odpovede (`walkValue()`, bezpečné voči znečisteniu prototypu, bezpečné voči cyklom pomocou `WeakSet`) a nahradí zhody zástupným symbolom `[REDACTED:<type>]`, pričom klonuje iba tie vetvy, ktoré sa skutočne zmenili.
- `CREDENTIAL_PATTERNS` pokrýva kľúče poskytovateľov LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloudové kľúče (AWS access key, Twilio, SendGrid, Mailgun), súkromné kľúče / JWT, pripojovacie reťazce obsahujúce prihlasovacie údaje (`mongodb://user:pass@...` atď.) a všeobecný vzor hodnoty hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`. Kľúče v tvare hlavičky (`authorization`, `x-api-key`, `api-key`, `apikey`) sú maskované štrukturálne (iba hodnota, predpona schémy ako `Bearer `/`Basic ` je zachovaná) namiesto použitia všeobecného textového regulárneho výrazu.
- Ochranný mechanizmus nikdy neblokuje; iba prepisuje (`modifiedPayload` / `modifiedResponse`) a anotuje (`meta.credentialsRedacted`, `meta.count`).

Regresná ochrana: `tests/unit/credential-masker-guardrail.test.ts`.

## Základný kontrakt (`base.ts`)

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
  block?: boolean; // true skratuje reťazec
  message?: string; // zobrazené pri zablokovaní
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrátené preCall na prepísanie požiadavky
  modifiedResponse?: TValue; // vrátené postCall na prepísanie odpovede
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

Ochranný prvok signalizuje „žiadnu zmenu“ vrátením `void`, `{}` alebo
`{ block: false }`. Vrátenie hodnoty `modifiedPayload`/`modifiedResponse` nahrádza
hodnotu pretekajúcu reťazcom pre následné ochranné prvky.
`signal?: AbortSignal` prenáša životný cyklus volajúceho do ochranných prvkov. Prerušenie požiadavky je zámerná výnimka fail-open: mediálne premostenia zastavia prácu a vyčistia sa bez obnovenia nespracovaných médií do cieľa, o ktorom je známe, že ich nepodporuje.

## Register (`registry.ts`)

Singleton `guardrailRegistry` sprístupňuje:

- `register(guardrail)` — pridáva (alebo nahrádza podľa normalizovaného názvu) ochranný prvok a opätovne ho zoradí podľa vzostupnej `priority`.
- `clear()` / `list()` — administratívne pomocné funkcie.
- `runPreCallHooks(payload, context)` — iteruje aktívne ochranné prvky, prenáša `payload` cez `modifiedPayload` a zastaví sa pri prvom `block: true`.
- `runPostCallHooks(response, context)` — rovnaký tok na strane odpovede.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a voliteľne opätovne zaregistruje predvolené hodnoty pre čistú izoláciu testov.

Oba spúšťače vracajú `{ blocked, payload|response, results, guardrail?, message? }`
pričom `results` je pole záznamov `GuardrailExecutionResult`, ktoré obsahujú polia
`blocked`, `skipped`, `modified`, `error` a `meta` pre každý ochranný prvok,
čo je užitočné na sledovanie.

### Zakázanie ochranných prvkov pre jednotlivé požiadavky

Funkcia `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
deduplikovaný zoznam názvov ochranných prvkov, ktoré by sa mali pre aktuálnu
požiadavku preskočiť. Existuje päť kanálov, ktoré sa čítajú v tomto poradí a zlučujú
sa do jedného zoznamu (pri deduplikácii vyhráva prvý výskyt):

1. `apiKeyInfo.disabledGuardrails`
2. Telo požiadavky `disabledGuardrails` (najvyššia úroveň)
3. Telo požiadavky `metadata.disabledGuardrails` (iba ak je `metadata` objekt)
4. Hlavička `x-omniroute-disabled-guardrails`
5. Staršia hlavička `x-disabled-guardrails`

Všetkých päť kanálov je zlúčených, vrátane dvoch hlavičiek: odoslanie hlavičiek
`x-omniroute-disabled-guardrails` aj `x-disabled-guardrails` preskočí zjednotenie
ich zoznamov a prázdna moderná hlavička už neskrýva tú staršiu
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), opravené v
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Hodnoty môžu byť polia reťazcov alebo reťazec oddelený čiarkami; názvy sú orezané
a normalizované na malé písmená v tvare kebab-case (`pii_masker` → `pii-masker`), a prázdne
položky sú zahodené. Výsledok sa prenesie cez `context.disabledGuardrails`
do registra, ktorý preskočí zodpovedajúce ochranné prvky (`skipped: true` v `results`).

Zoznam zakázaných položiek ovplyvňuje iba **register**. Režim `block` pre injektáž promptov je
povinnou hranicou: middleware na ochranu pred injektážou
(`src/middleware/promptInjectionGuard.ts`) volá `evaluatePromptInjection()`
bez akéhokoľvek zoznamu zakázaných položiek kontrolovaného volajúcim (mŕtve volanie
`resolveDisabledGuardrails({ body })`, ktoré predtým vykonávalo, bolo odstránené v
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), takže požiadavka,
ktorá zakazuje `prompt-injection`, sa v režime `block` stále odmietne. Toto je
zámerné. Kanály vypnutia sú kontrolované volajúcim (telo požiadavky,
metadáta, hlavičky) a volajúci nesmie byť schopný vypnúť bezpečnostný
prvok, ktorý nastavil operátor
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Zjednotenie hlavičiek
z [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mení iba to, ktoré ochranné prvky registra sa preskočia; neumožňuje klientovi
obísť middleware. Povinné politiky ochranných prvkov pre jednotlivé kľúče a skupiny sú
sledované v RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Pozrite si časť [Pokrytie a limity](#coverage-and-limits).

## Poradie vykonávania

Pre každú požiadavku prechádzajúcu cez `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts` (trasy z rodiny chatu uvedené v časti
[Pokrytie a limity](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` zostavuje zoznam preskočení z API kľúča, tela požiadavky
   a hlavičiek.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spúšťa bezpečnostné zábrany v vzostupnom
   poradí priority:
   - Zakázané bezpečnostné zábrany sa zaznamenávajú ako `skipped`.
   - Funkcia `preCall` každej bezpečnostnej zábrany môže prepísať payload prostredníctvom `modifiedPayload`.
   - Prvá hodnota `block: true` skratuje reťazec a obslužná rutina vráti
     odpoveď o odmietnutí bezpečnostnou zábranou.
3. (Potenciálne prepísaný) payload prúdi do kombinovaného smerovania (combo routing) a odoslania na vyššiu vrstvu (upstream dispatch).
4. **Iba pre non-streaming (bez streamovania):** po zostavení odpovede
   `guardrailRegistry.runPostCallHooks(...)` spustí rovnaký reťazec na
   odpovedi. Hodnota `block: true` tu zahodí odpoveď z vyššej vrstvy a vráti HTTP 400. Streamované odpovede tento krok úplne preskakujú.

Bezpečnostné zábrany, ktoré vyhodia výnimku, sa zaznamenajú s `error: <message>` a zalogujú cez
`logger.warn`, ale reťazec pokračuje – zámerne navrhnuté ako fail-open.

## Pokrytie a limity

Register bezpečnostných zábran je zapojený iba do potrubia chatu. Tieto limity sú
ukotvené testami `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` a
`tests/unit/guardrail-pipeline-characterization.test.ts`; tieto testy zámerne aktualizujte, keď sa zmení správanie.

### Kde sa háčiky (hooks) spúšťajú

| Háčik / kontrola                            | Spúšťa sa na                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                           | Požiadavky spracované funkciou `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (a `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` a Telegram chat proxy. Tiež testovací endpoint dashboardu `/api/guardrails/test`. Blok pred volaním vráti HTTP 400. |
| `runPostCallHooks`                          | Iba odpovede chatu **bez streamovania** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamované odpovede sa k nemu nikdy nedostanú.                                                                                                                                                                                                                                                                                  |
| Streaming PII                               | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), zapojené v `streamingPipeline.ts`, keď je zapnutá premenná `PII_RESPONSE_SANITIZATION`. Nejde o bezpečnostnú zábranu, takže kanály zakázania naň vplyv nemajú.                                                                                                                                                                                                     |
| Middleware ochrany proti injekcii (staršie) | Každá `/v1` trasa obsahujúca prompt, vrátane rodiny chatu (pozri [pokrytie trás](#injection-guard-route-coverage--red-team-phase-8--block-d)). Len prompt injection.                                                                                                                                                                                                                                                             |

### Čo nie je pokryté

- **Trasy pre médiá, vkladania (embeddings) a dáta** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) sa nikdy nedostanú do registra. Žiadne
  maskovanie PII, maskovanie poverení (credentials) ani premostenie modalít tam nebeží. Ich jedinou
  kontrolou je starší middleware na ochranu pred injekciou.
- **Streamované odpovede** nezískavajú žiadne bezpečnostné zábrany po volaní: žiadne po-volacie maskovanie `pii-masker` ani
  `credential-masker` a žiadny blok po volaní. Aplikuje sa iba transformácia streamovaného PII (keď
  je zapnutá `PII_RESPONSE_SANITIZATION`). Poverenie vrátené (echoed back) v streamovanej odpovedi nie je maskované.
- **Kanály zakázania vs. middleware (zámerne):** middleware vyhodnocuje
  prompt injection vlastným volaním `evaluatePromptInjection()`, bez toho, aby
  odovzdával akýkoľvek zoznam zakázaní kontrolovaný volajúcim. Režim `block` je
  povinná hranica, ktorú zákazy kontrolované volajúcim nemôžu obísť, a to ani na trasách z rodiny chatu
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Zakázanie
  `prompt-injection` preskočí iba bezpečnostnú zábranu v registri.

### Čo vidí odpoveď pred fázou po volaní (post-call)

Na ceste bez streamovania je poradie: extrakcia pamäte → vykonanie vstavaného nástroja → bezpečnostné zábrany po volaní → výstup bloku po volaní → uloženie do sémantickej vyrovnávacej pamäte.

- **Extrakcia pamäte** a **vykonávanie nástrojov** vidia odpoveď predtým, ako ju
  ochranné prvky post-call môžu prepísať alebo zablokovať. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), extrakcia
  pamäte spracúva extrahovaný text pomocou funkcie `sanitizePII`, keď
  `PII_RESPONSE_SANITIZATION` je zapnutá (v režime streamovania aj v nestereamovanom režime), avšak
  odpoveď, ktorú ochranné prvky post-call neskôr zablokujú, bola dovtedy stále poskytnutá pamäti a
  nástrojom.
- **Sémantická vyrovnávacia pamäť** ukladá odpoveď po fáze post-call, takže ukladá
  prepísanú odpoveď, pričom zablokovaná odpoveď sa nikdy neuloží do pamäte cache. Položky vyrovnávacej pamäte sú
  kľúčované podľa API kľúča.

## Konfigurácia

Premenné prostredia, ktoré čítajú vstavané ochranné mechanizmy:

| Premenná                              | Používa ju              | Účinok                                                                                                                                          |
| ------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Nastavte na `false` pre úplné vypnutie detekcie.                                                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika injektáže: `warn`, `block` alebo `log`. Pôvodná hodnota `redact` neprepisuje text injektáže.                                           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Režim pre ochranu pred injektážou; tiež funkčný príznak v databáze (feature flag), ktorý **má prednosť** pred premennými prostredia (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimálna závažnosť, ktorú `MODE=block` odmieta: `high` (predvolené), `medium` alebo `low`.                                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Pôvodný alias pre `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Keď je nastavené na `true`, osobné údaje (PII) v požiadavke sa anonymizujú (nezávisle od režimu injektáže).                                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (následný) | Riadi správanie maskovania na strane odpovede.                                                                                                  |

Ochranné mechanizmy Modality Bridge čítajú konfiguračné údaje za behu z úložiska nastavení založeného na databáze (`getSettings()`), nie z premenných prostredia. Primárne kľúče pre Vision sú `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`. Staršie kľúče `visionBridge*` sú akceptované iba ako dokumentovaná záloha na čítanie na jeden cyklus; zápisy z ovládacieho panela (dashboardu) používajú primárne kľúče. Predvolené hodnoty a záložný mechanizmus sa nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`, pričom staršie konštanty sú zachované v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` plus zdieľané nastavenia `modalityBridgeCache*`. Audio nemá záložnú možnosť pre staršie kľúče, pretože tieto kľúče boli zavedené spolu so schémou Modality Bridge.

Video používa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` a `modalityBridgeVideoTimeout` plus zdieľané nastavenia `modalityBridgeCache*`. Predvolene je zakázané, pretože FFmpeg/ffprobe sú voliteľné prevádzkové závislosti a popisovanie snímok zvyšuje latenciu a náklady na model.

## Vlastné guardrails

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

Kroky:

1. Vytvorte súbor `src/lib/guardrails/myGuardrail.ts` rozširujúci `BaseGuardrail`.
2. Implementujte `preCall` a/alebo `postCall`.
3. Buď ho zaregistrujte v čase importu (pridaním z `registerDefaultGuardrails`), alebo
   zavolajte `guardrailRegistry.register(...)` za behu (runtime) — register nahradí
   akýkoľvek predchádzajúci guardrail s rovnakým normalizovaným názvom.
4. Pridajte testy do priečinka `tests/unit/` (existujúce príklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testovanie

Medzi testami použite `resetGuardrailsForTests()`, aby ste začali zo známeho stavu.
Odovzdajte `{ registerDefaults: false }`, ak chcete začať s prázdnym registrom a
zaregistrovať iba testované guardraily. Vision Bridge akceptuje injektáž závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge sprístupňuje
ekvivalentné rozhrania pre nastavenia, schopnosti, výber STT modelu, kontroly poverení
a prepis. Testy tak môžu preveriť oba toky bez potreby databázy alebo sieťového prístupu.

## Pozri tiež

- `src/lib/guardrails/` — implementácia
- `src/shared/utils/inputSanitizer.ts` — zdieľaný detektor, ktorý poháňa
  ochranu proti vstrekovaniu promptov (prompt-injection) a maskovanie PII
- `src/shared/constants/visionBridgeDefaults.ts` — predvolené hodnoty Vision Bridge a
  zoznam vynútených modelov pre bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — zdieľané predvolené hodnoty pre Vision/Audio za behu
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonálna vrstva (circuit breaker, oneskorenia)
- `docs/reference/ENVIRONMENT.md` — kompletná referenčná príručka pre premenné prostredia

## Pokrytie routov pre injection-guard a red-team (Fáza 8 · Blok D)

Ochrana proti vstrekovaniu (`createInjectionGuard` / `withInjectionGuard`) pokrýva všetky routy,
ktoré akceptujú užívateľské prompty. Rešpektuje premennú `INJECTION_GUARD_MODE` (predvolene `warn` = iba logovanie;
`block` = vráti HTTP 400 `SECURITY_001`).

| Typ                  | Routy                                                                                                                                                | Predvolený režim |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Textové (existujúce) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generatívne          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dátové               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Extrakcia textu (`extractMessageContents`) pokrýva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nočné spustenie, `nightly-llm-security.yml`):** promptfoo overuje, že každý rout blokuje
korpus OWASP-LLM v režime `INJECTION_GUARD_MODE=block`; garak spúšťa sondy (bez tajného kľúča sa preskočia).
`moderations` je zahrnuté kvôli konzistencii. Režim blokovania je povinnou hranicou: `evaluatePromptInjection()`
ignoruje zoznam zakázaní pre jednotlivé požiadavky, ktorý mu middleware odovzdáva, takže `disabledGuardrails`
**neospravedlňuje** routu od tejto kontroly ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Nočný workflow (`.github/workflows/nightly-llm-security.yml`, cron + manuálne
spustenie) má dve úlohy:

- **`promptfoo-guard` (blokujúca)** — spúšťa `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý adverzárny prípad (napr. „ignore all
  previous instructions…“, jailbreaky v štýle DAN) overuje, že odpoveď obsahuje
  `error.code === "SECURITY_001"`, t. j. že ochrana žiadosť skutočne zamietla.
- **`garak` (informatívna)** — spúšťa garak `--probes promptinject,dan,leakreplay`
  proti lokálnej inštancii OmniRoute (`http://localhost:20128/v1`). Je podmienená tajným kľúčom
  poskytovateľa (`PROMPTFOO_PROVIDER_KEY`); elegantne sa preskočí a má príponu
  `|| true`, takže podáva hlásenia bez zlyhania CI.

Pokrytie pomocnej funkcie ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahŕňa každý `/v1` rout, ktorý obsahuje prompt; text promptu sa získava z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocou
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.

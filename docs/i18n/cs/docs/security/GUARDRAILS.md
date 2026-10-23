# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Autoritativní zdroj:** `src/lib/guardrails/`
> **Poslední aktualizace:** 2026-10-17 — v3.8.52 (přidána část [Pokrytí a omezení](#coverage-and-limits):
> které trasy a cesty zpracování odpovědí hooky pokrývají, sloučené hlavičky pro vypnutí (#16412), režim blokování
> injekcí jako povinná hranice (#16413) a co má přístup k odpovědi před fází post-call)

Ochranné mechanismy vynucují bezpečnost, zásady a transformace obsahu na hranici
mezi OmniRoute a upstreamovými poskytovateli. Každý ochranný mechanismus může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové obsahy požadavků (`preCall`) a
odpovědi upstreamových poskytovatelů (`postCall`).

Systém při chybě **propouští dál**: pokud ochranný mechanismus při provádění vyhodí výjimku, registr
zaznamená chybu a pokračuje dalším ochranným mechanismem, místo aby nechal
požadavek selhat. Blokování je explicitní rozhodnutí (`block: true`), nikdy náhoda.
Jedinou výjimkou je přerušený požadavek: když je volajícího `signal` přerušen,
ochranný mechanismus, který vyhodí výjimku, způsobí odmítnutí běhu hooku, místo aby byl přeskočen.

Hooky se **nespouštějí** na každé trase ani pro každou odpověď. Než se
na ochranný mechanismus spolehnete jako na bezpečnostní opatření, přečtěte si
[Pokrytí a omezení](#coverage-and-limits).

## Vestavěné ochranné mechanismy

Registr při importu automaticky načte šest ochranných mechanismů v pořadí podle priority
(viz `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Fáze           | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší čísla priority se spouštějí **jako první**.

### Vision Bridge (`visionBridge.ts`) — Přemostění modalit PR-1

Základní model GLM 5.3 a `glm-5.3-{low,high,max}` mají v metadatech
registru/specifikace explicitně nastaveno `supportsVision:false`. Varianty GLM 5.3 Flash
zůstávají modely s nativní podporou obrazu. Trasa `/v1/messages` v Claude Code vstupuje do
sdíleného řetězce ochranných mechanismů `handleChat` před voláním **ještě před** převodem
z formátu Claude do OpenAI; vnořené obrázky ve výsledcích nástroje `Read` musí být popsány nebo zpracovány,
než je tento převod přesune do obsahu OpenAI `image_url` (#17069).

Zachytává požadavky obsahující obrázky a směřující na **modely bez podpory obrazu** a buď
přesměruje celý požadavek na model s podporou obrazu, nebo před voláním
upstreamového poskytovatele nahradí obrazové části textovými popisy vytvořenými konfigurovatelným
modelem s podporou obrazu. Díky tomu mohou poskytovatelé podporující pouze text transparentně zpracovávat
multimodální datové obsahy.

Průběh:

1. Přeskočit, pokud cílový model již podporuje obraz (pokud není uveden v
   seznamu modelů s vynuceným přemostěním `isVisionBridgeForcedModel`).
2. Extrahovat obrazové části pomocí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje práci na **jednotný detektor
   médií** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný
   autoritativní zdroj sdílený s filtrem kompatibility kombinací.
   Extrakce je omezena seznamem povolených struktur, které `replaceImageParts` dokáže vložit
   zpět (kontrakt extrakce↔nahrazení): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` a Responses
   API `input_image`. Odpovídající obrázky vnořené do Claude Code
   `tool_result.content` a výstupů nástrojů Responses se rovněž extrahují a
   nahrazují na původních cestách; struktury obsahující pouze indikátor jsou určeny pro filtr
   kombinací a neextrahují se.
   Přeskočit, pokud nebyly nalezeny žádné obrázky.
3. Zjistit konfiguraci za běhu pomocí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové klíče nastavení `modalityBridge*`
   mají přednost; starší klíče `visionBridge*` zůstávají **záložní možností na jeden
   cyklus** (okno pro návrat k předchozí verzi). Pokud je přemostění vypnuté, přeskočit ještě před jakýmkoli procházením médií.
4. Volič režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhoduje
   mezi přesměrováním a popisem. Přesměrování vrací `modifiedPayload`, v němž je změněn pouze `model`,
   spolu s metadaty `{ rerouted, fromModel, toModel, imagesKept }`.
5. Větev popisu: omezit počet obrázků na `maxImages`, sestavit prompt zohledňující úlohu,
   zkontrolovat mezipaměť popisů, zavolat model s podporou obrazu **paralelně**
   (`Promise.allSettled`) a na jejich místo vložit textové části `[Image N]: <description>`.
   Neúspěšný popis vrátí `null`: původní obrázek se zachová pro
   neznámé cíle nebo cíle s podporou obrazu (#4012), ale **potvrzený přímý cíl podporující pouze
   text** nebo kombinace bez podpory obrazu dostane explicitní
   zástupný text `(unavailable — no vision-capable provider connected)` pro
   každý nepopsaný obrázek, včetně dílčích selhání a obrázků nad
   limit počtu volání pro popis (#17069). Stávající záložní postup pro popis kombinací při selhání
   všech pokusů zůstává zachován (#8430).
6. Vrátit `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Volič režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Původní heuristika, beze změn (#6640/#7204): modely mimo combo/`auto/` se přesměrují na nejlepší model se zrakovými schopnostmi, pokud původní model již nemá použitelné přihlašovací údaje (pak se vytvoří popis); cíle combo vždy vytvářejí popis.                                                                                                       |
| `describe` |         | Vždy vytvořit popis — blok přesměrování se zcela přeskočí; vždy odpovídá model zvolený uživatelem.                                                                                                                                                                                                                                                         |
| `reroute`  |         | Vynutit přesměrování: ochrana zachovávající model s přihlašovacími údaji se obejde. Ochrana ověřující přihlašovací údaje **cíle** přesměrování nadále platí — pokud neexistuje použitelný cíl se zrakovými schopnostmi, most požadavek zablokuje s jasnou chybou, místo aby vytvořil popis nebo odeslal nezpracované obrázky cíli určenému pouze pro text. |

Vynucené režimy rozhodnou **před** spuštěním automatické heuristiky; chování `auto`
je bajt po bajtu shodné s ochranným mechanismem před PR-1.

#### Rozsah oprávnění klíče API (`visionBridgeKeyScope.ts`)

Pokud klíč API volajícího omezuje `allowedConnections`, fondy kvót
(`allowedQuotas`) nebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vybírá
modely pro přesměrování a vytváření popisu pouze z těch, které klíč smí používat, a na připojeních, která klíč smí
používat. Volání pro vytvoření popisu pak vždy prochází zpětnou smyčkou OmniRoute s
hlavičkou `x-omniroute-self-loop-key-id`, takže přijímající požadavek chatu
znovu vynutí pravidla daného klíče pro připojení a modely. `enforceApiKeyPolicy()`
respektuje tuto hlavičku pouze společně s bearer tokenem zpětné smyčky, takže může přístup pouze
omezit, a ID, které nelze dohledat, je odmítnuto.

Pokud klíč nemá povolen žádný model se zrakovými schopnostmi, **cíl potvrzený jako čistě
textový** odmítne požadavek s obrázkem lokálně s jasnou chybou HTTP 400, místo aby
předal bajty obrázku nadřazené službě, která je nedokáže zpracovat (#17069). U cílů s
neznámými nebo nativními zrakovými schopnostmi si větev vytváření popisu zachovává předchozí
chování, které při selhání propustí požadavek dál (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požadavky bez klíče a klíče bez těchto omezení se chovají přesně jako
dříve.

#### Prompt pro vytvoření popisu zohledňující úlohu (`modalityBridgeVisionTaskAware`)

Výchozí hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) připojuje
text **poslední zprávy uživatele** (zkrácený na 500 znaků) k základnímu
promptu pro vytvoření popisu, čímž směruje popis k tomu, na co se uživatel skutečně ptal
(vzor codex-vision-proxy), a žádá model se zrakovými schopnostmi o přepis viditelného
textu. Pokud je přepínač vypnutý — nebo chybí text uživatele — použije se základní prompt beze změn.

Vlastní požadavek zpětné smyčky pro vytvoření popisu kompatibilní s OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmínečně, pro každého volajícího/poskytovatele, bez závislosti na jakémkoli signálu klienta.
Vzorkování s nízkou úrovní detailů zhoršuje přesnost OCR právě u úlohy přepisu
textu, o kterou tento prompt žádá, takže samotné volání pro vytvoření popisu vždy požaduje vysokou
úroveň detailů bez ohledu na to, jakou úroveň detailů použil původní příchozí požadavek. To
ovlivňuje pouze tělo interního požadavku pro vytvoření popisu; nemění to způsob, jakým
OmniRoute předává vlastní `image_url.detail` volajícího v primárním požadavku —
tato výchozí hodnota se uplatňuje samostatně a pouze u detekovaných klientů OpenCode, v
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Větev
zpětné smyčky pro vytvoření popisu používající přenosový formát Anthropic nemá pole `detail`
a žádná z těchto výchozích hodnot ji neovlivňuje.

#### Limit délky výstupu popisu (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí | Rozsah             |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` nebo 100–50000 |

`0` (výchozí hodnota) znamená **bez omezení** — popis vrácený funkcí
`callVisionModel()` se předá beze změn, čímž se zachová stávající
chování. Jakákoli hodnota v rozsahu 100–50000 zkrátí popis s
příponou `…` před jeho zpětným vložením jako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Zvyšte tuto hodnotu u úloh OCR náročných na detaily, kde navazující model potřebuje
úplný přepis; snižte ji pro omezení spotřeby tokenů u upovídaných modelů se zrakovými schopnostmi.
Pole v ovládacím panelu se nachází v panelu Pokročilé na kartě Zrak
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a zvyšuje každou
hodnotu mezi 1 a 99 na dolní mez 100, zatímco explicitní `0`
ponechává beze změny — `0` je sama o sobě platnou hodnotou Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nikoli pouze
výchozí hodnotou pro „nenastaveno“.

#### Mezipaměť popisů (`modalityBridge/bridgeCache.ts`)

Mezipaměť LRU + TTL v paměti pro výstupy popisů, sdílená v rámci celého procesu.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámováním pomocí délkových prefixů (bez kolizí na hranicích polí). Složkou modelu je
**nakonfigurovaný** model mostu, nikoli model, který skutečně odpověděl —
`callVisionModel` může interně přejít na záložní model a vytváření klíče pro každý pokus by
mezipaměť roztříštilo. Neúspěšné pokusy o vytvoření popisu se nikdy neukládají do mezipaměti. Nastavení:

| Klíč                            | Výchozí | Rozsah  |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizace vzdálených obrázků (načítání pro describe/base64 přes vlastní smyčku)

Když bridge sám načítá **vzdálený** obrázek — při vlastním volání Anthropic describe
a při převodu do base64 pro formát claude-wire
(`ensureBase64ImagesForClaudeWire`), v obou případech přes
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledné datové
URI před vložením do požadavku na model pro zpracování obrazu prochází funkcí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Příliš velké obrázky se zmenší na **2048 px na delší straně** (což odpovídá
limitu změny velikosti, který OpenAI/Anthropic již uplatňují na straně serveru), a tím se sníží
objem nahrávaných dat i latence, aniž by se změnilo to, co model pro zpracování obrazu vidí. Změna velikosti
využívá `sharp`, načítaný dynamickým importem: na platformě, kde se jeho nativní
binární soubor nepodaří načíst, `normalizeDataUri()` **nikdy nevyhodí výjimku** — místo toho
předá původní bajty beze změny, takže cesta pro describe a převod do base64
vždy zůstane funkční. Bajty, které nepředstavují obrázek (načtení nevrátilo
dekódovatelný obrázek), se také předávají beze změny. Tato normalizace se
vztahuje pouze na obrázky, které bridge načítá pro své vlastní volání — nikdy se
nepoužívá na nezpracovaný obsah předávaný volajícím, v souladu se
zásadou úprav pouze po výslovném zapnutí (závazné pravidlo č. 20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` se validují pomocí Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojice `modalityBridgeCache*` a
skupina `modalityBridgeAudio*` používaná komponentou Audio Bridge. Migrace
`141_modality_bridge_settings.sql` kopíruje stávající původní
hodnoty `visionBridge*` do odpovídajících nových klíčů (je idempotentní a nikdy nepřepisuje
hodnotu `modalityBridge*` nastavenou správcem); původní klíče zůstávají po
jeden cyklus vydání přijímány jako záložní zdroj při čtení.

#### Hlavička transparentnosti + statistiky

Odpovědi transformované pomocí describe obsahují
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sestavuje ji `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
přidává ji `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Přesměrované požadavky nedostávají **žádnou** hlavičku — obsah zůstal beze změny a výměna
modelu je již viditelná v poli `model` v těle odpovědi.

`GET /api/modality-bridge/stats` (autentizace pro správu, stejná úroveň jako
`GET /api/settings`) vrací čítače v paměti pro jednotlivé modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a
`video`. `averageLatencyMs` používá jako jmenovatel `latencySamples`, nikoli všechny
pokusy; operace bez měření času nevytváří umělý vzorek s nulovou latencí.
`bridged` zůstává zpětně kompatibilním aliasem pro úspěšné
převody; neúspěšné pokusy jej nezvyšují.
Čítače se při restartu procesu záměrně vynulují
(jde o telemetrii, nikoli o účtování).

#### Konfigurace v dashboardu

Vyhrazená stránka dashboardu je
`/dashboard/settings/modality-bridge`. Její karty `Vision`, `Audio`
a `Video`, na které lze přímo odkazovat pomocí URL, při přepínání hodnoty `tab` zachovávají parametry dotazu.
Karta Vision zpřístupňuje zapnutí, režim, výběr modelu (včetně automatické
výchozí volby), prompty zohledňující úlohu, pokročilé limity časového limitu, počtu obrázků, délky popisu a mezipaměti,
provozní
čítače a ukázkový požadavek s ochrannými kontrolami. Karta Audio je také funkční: zpřístupňuje
zapnutí, výběr pouze z modelů STT s volbou Auto, časový limit a limit délky klipu, zvukové
čítače a ukázkový test `input_audio`. Karta Video je funkční: hlásí
stav FFmpeg/ffprobe za běhu — jeden ze čtyř explicitních stavů uživatelského rozhraní (`unknown`, když
probíhá kontrola nebo ji nebylo možné dokončit, `restricted` na hostiteli
dashboardu mimo loopback, kde se kontrola na straně klienta vynechává, `unavailable` po kontrole
a potvrzení nepřítomnosti, nebo `available` s verzemi FFmpeg/ffprobe) — ukládá
zapnutí, model a limity snímků, videa a časového limitu, omezuje výběr modelů na modely schopné
zpracovávat obraz a zpřístupňuje čítače videa.

Původní karta Vision Bridge v nastavení AI slouží jako odkaz na
novou stránku kvůli kompatibilitě; již neobsahuje druhou kopii formuláře. Sekce poskytovatelů médií také
propojuje pracovní postupy převodu obrázku na text a řeči na text s odpovídajícími kartami Modality
Bridge, aniž by odstraňovala stávající testovací prostředí pro převod řeči na text.

**Obejití kontroly přijetí ve vlastní smyčce:** když volání describe prochází
vlastní smyčkou `/v1` v OmniRoute (nestandardní model poskytovatele), dílčí požadavek odesílá
`x-omniroute-admission-bypass: internal` a je autentizován pomocí určeného
přihlašovacího údaje pro vlastní smyčku — lokální zástupné hodnoty `sk_omniroute` v lokálním režimu nebo
klíče z proměnné prostředí `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného správcem (#1350), takže
nasazení s `REQUIRE_API_KEY=true` mohou volání describe nadále provádět. Obejití
se povoluje pouze pro tyto přesné přihlašovací údaje, takže externí klienti nemohou
pomocí hlavičky přeskočit kontrolu přijetí.

Původní výchozí hodnoty se nacházejí v `src/shared/constants/visionBridgeDefaults.ts`; nové
výchozí hodnoty režimu, zohlednění úlohy a mezipaměti i mechanismus vyhodnocování nastavení se nacházejí v
`src/shared/constants/modalityBridgeDefaults.ts`. Ochranný mechanismus nabízí
volbu konstruktoru `deps`, aby testy mohly předávat falešné implementace `getSettings` a
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytává chatové požadavky obsahující zvuk dříve, než dorazí k cíli, o němž není
známo, že přijímá zvukový vstup. Chatový požadavek nikdy nepřesměrovává: zvukové části se
přepisují prostřednictvím stávajícího multipart endpointu kompatibilního s OpenAI a
zvolený chatový model pokračuje s textovými přepisy.

Průběh:

1. Zjistěte `supportsAudio` prostřednictvím `getResolvedModelCapabilities()`. Přednost mají explicitní
   metadata z registru poskytovatelů, poté statická metadata modelu a nakonec synchronizované
   `modalities_input`. Deklarovaný seznam vstupů bez `audio` znamená `false`; pokud
   nejsou k dispozici žádné údaje o schopnostech, hodnota zůstává `null`. Hodnoty `false` i `null` aktivují
   konzervativní přemosťování, zatímco `true` je obchází.
2. Vyhodnoťte nastavení `modalityBridgeAudio*` a ze všech zpráv extrahujte zvukové části nejvyšší úrovně,
   které lze nahradit, pomocí sdíleného detektoru `detectMediaParts()`.
   Podporované přenosové formáty jsou OpenAI `input_audio`, `audio_url` a
   `source.media_type: "audio/*"`. Vnořený zvuk se detekuje pro účely směrování, ale
   při nahrazování se neodstraňuje. Rozsah zpracování omezuje `modalityBridgeAudioMaxClips`;
   další části zůstávají beze změny.
3. Respektujte nakonfigurovaný `provider/model`, nebo nechte `selectAudioBridgeModel()` procházet
   `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním pořadí katalogu a vybrat první
   model s použitelnými aktivními přihlašovacími údaji poskytovatele.
4. `callAudioTranscription()` převede zvuk ve formátu base64 nebo datového URI na multipart
   `file`, případně stáhne vzdálené `audio_url` prostřednictvím ochrany odchozích požadavků
   povolující pouze veřejné adresy, s připnutím DNS a limitem 25 MB. Poté metodou POST odešle soubor a vybraný
   model do lokálního volání sebe sama na `/v1/audio/transcriptions`, ověřeného pomocí
   `resolveSelfLoopBearer()`. Stávající trasa pro přepis provede běžné
   vyhledání přihlašovacích údajů, zpracování ochranných prodlev a limitů požadavků a předání poskytovateli.
5. Úspěšná volání nahradí příslušné části textem `[Audio N]: <transcript>`. Volání
   probíhají pomocí `Promise.allSettled`: jednotlivé selhání zachová původní
   zvukovou část (kontrakt #4012). Pokud všechna volání selžou a u cíle je prokázáno
   `supportsAudio === false`, části se změní na
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430). U
   neznámého cíle (`null`) zůstane při selhání všech volání obsah beze změny. Prokazatelně
   čistě textový cíl bez použitelných přihlašovacích údajů STT obdrží stejný explicitní
   zástupný text bez provedení síťového volání.

Úspěšné přepisy využívají mezipaměť LRU/TTL Modality Bridge sdílenou v rámci celého procesu.
Klíč kombinuje odkaz na zvuk, stabilní označení operace `audio-transcription`
a vybraný model STT; neúspěšné výsledky se nikdy neukládají do mezipaměti. Pokusy o zpracování zvuku aktualizují
sdílené čítače `bridged`, `cacheHits`, `failures` a `lastUsedAt`.
Transformované odpovědi obsahují
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; požadavky beze změny
segment Audio Bridge nedostávají.

Provozní nastavení se ukládají do databáze a validují pomocí Zod:

| Klíč                          | Výchozí hodnota | Rozsah                  |
| ----------------------------- | --------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                       |
| `modalityBridgeAudioModel`    | `""`            | Automaticky nebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                    |

Sdílenou mezipaměť nadále řídí `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachycuje části videa nejvyšší úrovně v `messages` rozhraní Chat Completions a v `input` rozhraní Responses
API před voláním cíle bez známé nativní podpory videa.
Podporované formáty jsou `input_video`, `video_url`, `video_source`, adresy URL s HTTPS
a datové URI `data:video/*;base64,...`. Prosté názvy souborů v textu se nepovažují
za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje procházení požadavku,
kontrolu schopností a zásad, agregaci v rámci požadavku a datový obsah odpovědi.
Zpracování jednotlivých videí — získání dat, mezipaměť celých výsledků, popis sekvence
snímků (který začleňuje případný přepis zvuku deklarovaný volajícím) a metriky, přerušení a úklid
pro jednotlivé pokusy — je skryto za `processVideoPart` v
`videoBridgePipeline.ts`, volaným jednou pro každou část videa ve smyčce `preCall`.
Tento modul také definuje explicitní hranice portů `VideoMediaBrokerPort`
(získávání bajtů a extrakce vzorkovaných snímků), `VideoAudioTranscriptionPort`
(sloučení přepisu zvuku deklarovaného volajícím s popisy vzorkovaných snímků) a
`VideoDrilldownPort` (hranice perzistence podrobného rozboru snímků; zatím není zapojena
do `processVideoPart` — záznamy podrobného rozboru v současnosti zapisuje pouze samostatná
trasa `/api/modality-bridge/video/drilldown`).

Veřejná cesta požadavků `/v1` nikdy neimportuje ani nespouští podproces. Vzdálená
videa se stahují s limitem 50 MiB; vložená videa ve formátu base64 mají
konzervativní limit dekódované velikosti 36 MiB na video, aby se obálka obsahující model, zprávy a rámování
vešla do limitu 50 MiB pro příjem veřejných požadavků JSON. Délka vložených dat
a odhady dekódované velikosti se kontrolují před alokací. HTTPS je
vyžadováno u počáteční vzdálené adresy URL i při každém přesměrování a využívá se stávající
ochrana odchozích požadavků povolující pouze veřejné adresy s připnutím DNS. Bajty poté procházejí přes přesně vymezenou interní
hranici zprostředkovatele `POST /api/modality-bridge/video/extract`. Tato trasa je současně
`LOCAL_ONLY` a `SPAWN_CAPABLE`, přijímá pouze důvěryhodné požadavky přes rozhraní zpětné smyčky ověřené
pro daný proces a nikdy nepřijímá adresu URL, cestu v souborovém systému, spustitelný soubor
ani seznam argumentů. Pipeline pro kontrolu velikosti těla požadavku API a inkrementální čtečka těla
v obslužné rutině nezávisle vynucují vstupní limit zprostředkovatele 50 MiB. Jeho omezená fronta provádí
vždy jednu extrakci, umožňuje čtyři čekající úlohy a omezuje čekající vstupní data na
100 MiB.

Uvnitř brokeru čte `ffprobe` soukromý lokální soubor; pevně daný seznam
povolených formátů vylučuje formáty playlistů a manifestů. U povolených
kontejnerů rodiny MOV zůstávají externí datové reference MOV ve výchozím
nastavení zakázané a pevně daný příkaz je nepovoluje. Jak `ffprobe`, tak `ffmpeg`
používají seznam povolených protokolů obsahující pouze `file`, jedno vlákno,
pevně daná pole argumentů, žádný shell a spustitelné soubory vyhledané v `PATH`.
Proudy s připojeným obrázkem obalu se nepovažují za kandidáty k přehrávání.
Všechny přehrávatelné proudy musí splňovat limity a výslovně označený výchozí
proud má přednost před deterministickou záložní volbou proudu s nejnižším
indexem. Videa jsou omezena na 600 sekund, 8 192 pixelů v každém rozměru a
33 554 432 zdrojových pixelů. FFmpeg vzorkuje 1–16 snímků JPEG ze středových
časových bodů, zmenšuje delší hranu na nejvýše 1 024 pixelů, aniž by zvětšoval
menší vstupy, a nikdy nedostává URL. Výchozí zásada vzorkování je `uniform`.
Volitelné zásady `scene_aware` a experimentální `segment_aware` provádějí jeden
dodatečný, pevně daný průchod FFmpeg nad již ověřeným lokálním proudem, vybírají
omezený počet časových značek scén z `showinfo` a při selhání detektoru,
vypršení časového limitu, chybném formátu výstupu nebo prázdné množině kandidátů
deterministicky přecházejí na stejné rovnoměrně rozložené středové body. Režim
zohledňující segmenty přiděluje středové vzorky úměrně ověřeným intervalům scén;
podklady pro tento režim a jeho záložní chování jsou podrobně popsány níže.
Pevný limit 16 snímků se u všech zásad uplatňuje až po výběru. Pokud má
požadavek zohledňující scény rozpočet pouze na jeden snímek, použije rovnoměrný
středový bod aktivního okna celého videa nebo vybraného úseku a vykáže
`policyEffective: uniform`: jediný vybraný snímek scény nemůže zachovat oba
časové konce. Volající může volitelně zadat konečné časové okno zaměření
(`start`/`end` v sekundách); jeho hranice se omezí na dobu trvání média, okna
s obráceným pořadím hranic nebo nekonečnými či nečíselnými hodnotami se odmítnou
a všechny zásady vzorkování se provádějí pouze uvnitř normalizovaného
intervalu. Výsledné okno je zahrnuto v metadatech vzorkování a v předponě
nedůvěryhodného popisu, aby navazující modely mohly odlišit vybraný úryvek od
celé časové osy.

Sémantické zaměření popisku je samostatné, explicitní nastavení. Výchozí režim
analýzy `full` zachovává stávající prompt pro snímky a nikdy nepředává text
požadavku modelu pro tvorbu popisků. V režimu `focused` most čte pouze
nejnovější neprázdný uživatelem napsaný `text`/`input_text` ze stejného
kontejneru Chat nebo Responses, normalizuje jej do NFC, slučuje řídicí znaky
a bílé znaky a omezuje jej na 500 kódových bodů Unicode. Prázdný výsledek vede
k použití přesně stejného promptu jako v režimu `full`. Použitelná nápověda
se serializuje jako JSON do vyhrazeného bloku nedůvěryhodného uživatelského
kontextu a smí pouze upřednostňovat pozorovatelné detaily; nemůže přepsat
samostatné varování před následováním pokynů viditelných nebo slyšitelných
v médiu. Textové zaměření nikdy neodvozuje `start`/`end` ani nemění časový
vzorkovač.

#### FU-07 strukturální podklady segmentů

`segment_aware` používá jeden omezený průchod předběžné analýzy nad již
ověřeným lokálním proudem videa. Pevně daný řetězec filtrů nejprve zmenší
šířku na nejvýše 320 pixelů, detekuje změny scén a zamrzlé intervaly a poté
vzorkuje rychlostí 1 snímek za sekundu pro zjištění rozmazání, průměrného jasu
a prostorových/časových informací. Průchod je omezen na 600 strukturálních
vzorků, jedno vlákno FFmpeg/filtrů, stejné seznamy povolených protokolů
(pouze `file`) a kontejnerů, limit výstupu procesu 1 MiB a nejvýše 30 sekund
v rámci sdíleného mechanismu přerušení a časového limitu brokeru. Z požadavku
nikdy nepřijímá příkaz, filtr, cestu ani URL.

Strukturální hodnoty jsou deterministické podklady pro vzorkování, nikoli
sémantické porozumění videu. Neodvozují subjekty, akce, popisky, řeč ani záměr
uživatele. Hranice scén a zamrznutí tvoří segmenty; podíl zamrzlého obrazu,
rozmazání, expozice, prostorové detaily a časové změny ovlivňují pouze
rozdělení stávajícího rozpočtu 1–16 snímků. Zcela zamrzlý segment je omezen na
jeden snímek, zatímco nezamrzlé segmenty soutěží o zbývající rozpočet. Pokud
je hranic více než snímků, zachovává se rovnoměrné pokrytí časové osy, aby
rychlé střihy na začátku nemohly skrýt dlouhý závěrečný segment. Hranice scén,
které jsou od hranice zamrznutí vzdálené nejvýše o jednosekundové rozlišení
analýzy, se slučují.

Chybějící filtry, podklady v chybném formátu nebo prázdné podklady, chyba
detektoru či vypršení omezeného času předběžné analýzy vedou k pokračování
s přesně stejnou zásadou rovnoměrných středových bodů. Přerušení volajícím
nebo vypršení časového limitu brokeru k takovému pokračování nevede: ukončí
běžící podproces, zabrání pozdější extrakci snímků a soukromý dočasný
adresářový strom se odstraní v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministická skutečná
testovací média pomocí FFmpeg pro ověření úspor volání tvorby popisků po
deduplikaci, přidělování rozpočtu při intenzivním pohybu, podkladů
rozmazání/expozice/SI-TI, rychlých střihů s dlouhým závěrem a falešně
pozitivních detekcí při postupném prolínání. Zaznamenává skutečnou dobu
předběžné analýzy a tam, kde je k dispozici `/usr/bin/time`, také procesorový
čas podprocesu a špičkovou hodnotu RSS. Jeho kontroly kvality jsou pouze
strukturální referenční kontroly. Skutečná kvalita modelu pro tvorbu popisků
zůstává ve stavu `HOLD`, protože tento testovací nástroj nemá autorizovaný
koncový bod ani neměnný vyhodnocovací model. Finanční úspory rovněž zůstávají
ve stavu `HOLD`, pokud `--caption-cost-per-call-usd` neposkytne explicitní
kladný odhad ceny za volání; skript si žádný z těchto výsledků nikdy nevymýšlí.

Každý snímek je omezen na 4 MiB, všechny nezpracované snímky dohromady na 23 MiB a
serializovaná odpověď brokeru na 32 MiB. Soukromý dočasný adresář se odstraňuje
v `finally`. OmniRoute neobsahuje FFmpeg a nepřijímá vlastní
cestu ke spustitelnému souboru. Před vytvářením popisků provádí můstek konzervativní vizuální
deduplikaci: každý JPEG se zmenší na vyrovnávací paměť ve stupních šedi o rozměrech 16×16 a
porovnává se pouze s posledním ponechaným snímkem. Pokud je požadovaný limit pro popisky
vyšší než jeden snímek, extrakce poskytne
omezenou sadu kandidátů o velikosti až dvojnásobku tohoto limitu, nikdy však více než 16 snímků.
Požadovaný limit se uplatní až po deduplikaci, přičemž první a poslední
vybraný kandidát se při závěrečné redukci zachovají, pokud je limit alespoň
dva. Verzovaná
zásada `grayscale-16x16-mean-cells-v2` používá větší z hodnot průměrného rozdílu jasu a
podílu buněk miniatury, jejichž normalizovaný rozdíl je alespoň 0.05.
Práh pro duplicity je konstanta 0.04, zvolená kvůli předvídatelnosti, nikoli
zpřístupněná jako nastavení za běhu. Tento doplňkový
signál s vysokým kontrastem zachovává drobné pohyby a změny viditelného textu, které
porovnání založené pouze na průměru může skrýt. Při chybách porovnávání nebo dekódování se snímky ponechávají,
aby se zachovalo pokrytí. Výstupní metadata rozlišují extrahované kandidáty, úspěšně použité
snímky a vyřazené vizuální duplicity.

Explicitně označená videočást může požádat o přehledový list s časovými značkami.
Můstek vytvoří mřížku JPEG s nejvýše 4 sloupci a 16 snímky. Každá buňka o velikosti 512 pixelů
má svou zdrojovou časovou značku napevno vykreslenou v dolním pruhu s vysokým kontrastem, přičemž stejné časové značky
zůstávají v textových metadatech pro následné přiřazování a audit. Celý
JPEG je nadále omezen na 32 MiB. Pokud `sharp` nedokáže mřížku dekódovat nebo sestavit,
můstek použije jako náhradní řešení jednotlivé snímky JPEG; přerušení ze strany klienta se i nadále propaguje
operací tvorby přehledového listu.

Podklady pro rozhodnutí o nasazení jsou záměrně odděleny od syntetického
mikrobenchmarku sestavování. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
A/B testovací nástroj s verzovaným schématem pro skutečné modely zpracování obrazu kompatibilní s OpenAI. Měří
počty tokenů hlášené poskytovatelem, celkovou latenci v reálném čase (včetně sestavování přehledového listu),
počet volání modelu a zachování faktů definovaných v manifestu. Nezpracované odpovědi modelu se
do zprávy nezapisují; uchovávají se pouze otisky SHA-256 a ID nalezených faktů.
Nástroj neprovádí žádná síťová ani placená volání modelu, pokud není předán přepínač `--execute-real` a
nejsou nakonfigurovány `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez
takového explicitního skutečného spuštění zůstává jeho strojově čitelný verdikt `HOLD`; samotná syntetická
měření objemu dat a počtu volání nejsou podkladem pro rozhodnutí o nasazení.

Volající mohou k podporované videočásti připojit volitelné pole `transcript.cues`,
pokud již mají časově zarovnaný text. Každý úsek musí obsahovat `text`,
konečný interval `start`/`end` v rámci zjištěné délky a povolený
`source` (`client`, `embedded` nebo `audio-bridge`); výchozí hodnota `confidence` je
`1` a musí zůstat mezi `0` a `1`. Přesně duplicitní úseky se slučují.
OmniRoute na základě těchto metadat nikdy nespouští přepis: ověřené úseky se
zkopírují do výsledku popisu se zdrojem, mírou spolehlivosti a intervalem a
vykreslí se jako nedůvěryhodná pozorování vedle popisků snímků. Neplatný
text, text mimo povolený rozsah nebo text bez údaje o původu se odmítne, místo aby se přimíchal do
proudu popisků. Oba kanály přepisu v těle požadavku normalizují dodaný
původ na `client`, včetně samostatně deklarovaných označení `embedded` nebo `audio-bridge`.
Tato důvěryhodná označení může přiřadit pouze adaptér spravovaný serverem prostřednictvím
argumentu `trustedSource`, který je dostupný pouze z kódu; pole JSON v požadavku nemůže tento
argument nastavit. Text přepisu zůstává nedůvěryhodným obsahem odvozeným z médií
bez ohledu na svůj původ a nikdy nesmí určovat autorizaci.

Pokročilý volající může pro stejné video poskytnout stopu `audioTranscript`;
ta se považuje za text poskytnutý klientem, nikoli za důkaz přepisu provedeného serverem.
Integrační vrstva pro sloučení zpracovává vizuální a zvuková pozorování se
společným časovým limitem a signálem přerušení, řadí je na společnou časovou osu, slučuje
přesné duplicity a vrací částečný výsledek, pokud uspěje pouze jedna strana.
Neplatný `audioTranscript` vede k tomuto částečnému výsledku — vizuální
popis se zachová a zvuková větev zaznamená očištěný kód chyby —
místo selhání celého zpracování videa. Dostupnost jednotlivých větví, příznak částečného výsledku
a očištěné kódy chyb se zachovávají ve výsledku popisu, v
metadatech ochranných mechanismů (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadatech mezipaměti výsledků a v čítačích
slučování můstku. Výchozí cesta Video Bridge nespouští převod řeči na text
ani nestahuje druhou kopii média; bez této explicitní stopy nadále
zpracovává pouze video.

**Uchovávání přepisů (#12150 P1).** Toto se uplatňuje automaticky vždy, když
Video Bridge (který je sám o sobě volitelný) vykreslí segment přepisu — neexistuje žádný samostatný
příznak uchovávání. Když požadavek vykreslí jakýkoli segment přepisu (`transcript`
deklarovaný volajícím nebo sloučený `audioTranscript`), ochranný mechanismus jej označí
`videoBridgeObserved` a vytvoří redigovanou stínovou kopii popisu videa —
totožné vykreslení, v němž je volný text každého segmentu nahrazen hodnotou
`[redacted-video-transcript]`. Tato kopie vzniká nahrazením strukturovaného pole segmentu
ještě před sestavením řetězce (nikdy parsováním zploštěného textu, takže nemůže
zůstat zachován žádný obsah segmentu — útočný ani běžný, včetně textů obsahujících `]`, například
`[inaudible]`/`[music]`). Tělo požadavku trvale uložené v protokolu volání nahrazuje
každou textovou část odvozenou z videa touto redigovanou stínovou kopií na základě
shody obsahu; kotva `fullText` se znovu načítá z dokončeného datového obsahu ochranných mechanismů
před voláním, takže shoda funguje i poté, co pozdější ochranné mechanismy v řetězci (maskování osobních údajů a
přihlašovacích údajů s prioritami 10/95) přímo přepíší text popisu, a
poté, co vložení systémového promptu, předání kontextu či paměti změní strukturu pole zpráv. Tělo
odeslané modelu zůstává nezměněné. Pozorovaný požadavek také neukládá nic
do trvalé paměti Memory (extrakce z požadavku i odpovědi se přeskakuje),
takže ani vlastní odpověď modelu nemůže zopakovat text přepisu do Memory.

**Nezpracovaná pole videa (#12430).** Když je bridge povolen a nativní podpora videa není známá nebo chybí, definovaná pole `transcript`/`audioTranscript` také aktivují `videoBridgeObserved`, a to i po selhání popisu nebo dosažení limitu `maxVideos`. Hodnoty `null` a prázdné řetězce se započítávají; chybějící pole a metadata nesouvisející s videem nikoli. Uchovávané kopie tato pole redigují, nebo požadavek vynechají, a mezipaměti i Memory se obcházejí.

V těchto náhradních větvích se platné segmenty od volajícího stávají podporovanými částmi `text`/`input_text`
namísto nestandardních polí poskytovatele. Obě stopy dodané v požadavku
zůstávají nedůvěryhodnými pozorováními `client` s výslovným upozorněním, že video
nebylo popsáno a časové značky nebyly ověřeny vůči médiu. Stávající
celkové limity 256 segmentů / 64 KiB i limity pro jednotlivé segmenty platí pro obě stopy dohromady;
časové značky se musí vejít do limitu brokeru 600 sekund a do případného zadaného
časového okna zájmu. Neplatné stopy se zahazují, nepředávají se jako libovolný text; platnou
druhou stopu lze přesto použít, pokud není překročen jejich společný limit. Pole s hodnotou null nebo prázdná
pole nepřidávají žádný text. Tento náhradní postup nepřidává žádné načítání médií ani přepisování.
Rozšiřující pole přepisu se odstraňují z náhradního nosiče videa i z jeho
objektů `video_url`/`source`. Seznam povolených prvků přenosového formátu OpenAI zůstává striktní; nosiče videa
s neznámou nativní podporou zůstávají dostupné a známé čistě textové cíle si zachovávají bezpečné zástupné značky.
Strukturované redigované stínové kopie chrání připojený text přepisu, zatímco
původní požadavek ve vlastnictví volajícího zůstává nezměněn. Cíle s nativní podporou a
vypnuté bridge si zachovávají stávající chování, při němž se tento postup obchází.

Další uchovávané kopie používají stejný signál pozorovaného požadavku. Nezpracovaný
snímek klientského požadavku před ochrannými mechanismy, čekající požadavek v paměti a protokol
časně odmítnutých požadavků strukturálně nahrazují pole přepisu v částech videa;
řetězcové prompty syntetizované jednotlivými fázemi pipeline a předáním kontextu se redigují
v místě trvalého ukládání těla požadavku. Trvale uložená značka `video_content_removed`
způsobí, že pokračování pomocí `previous_response_id` se z bezpečnostních důvodů odmítne, místo aby rekonstruovalo
text, který byl záměrně zahozen. Pokud pozorovaný požadavek před zápisem do protokolu ztratí
redigovanou stínovou kopii některé části, nebo pokud se byť jediná z několika stínových kopií videa
po pozdějších změnách požadavku neshoduje, uchovávané tělo požadavku se
zcela vynechá, místo aby se uchoval jen částečně redigovaný přepis.

U pozorovaného požadavku může odpověď modelu citovat libovolnou část
přepisu bez strukturovaného ohraničení segmentu. Její `responseBody` trvale ukládané v protokolu
volání se proto nahrazuje značkou vynechání; podrobný
artefakt pipeline (který může zahrnovat těla na straně poskytovatele i klienta a bloky streamu)
se neuchovává. Sémantické mezipaměti, mezipaměti idempotence a mezipaměti pro opětovné přehrání uvažování
u tohoto požadavku obcházejí čtení i zápis. Požadavek poskytovateli a odpověď viditelná
klientovi zůstávají nezměněné. Při vynechání podrobného artefaktu se z dočasné vyrovnávací paměti
odstraní počáteční bajty keepalive. Upozornění Kiro na chybně formátovaný EventStream
uvádí pouze počet bajtů datového obsahu, nikdy jeho obsah ani nezpracovanou chybu
parseru JSON.
Tím se netvrdí, že byla prověřena veškerá nesouvisející diagnostika poskytovatelů či pluginů;
širší prověrka míst uchovávání dat je sledována v #11658.

Interní životní cyklus `/api/modality-bridge/video/drilldown` představuje samostatný
základ mezipaměti dostupný přes loopback a ověřovaný tokenem. Každá operace také vyžaduje
kanonické neprůhledné ID subjektu. Před povolením produkčního volajícího musí tento volající
odvozovat toto ID z ověřeného tenanta a nikdy nesmí předávat
hodnotu zvolenou klientem. Klíče mezipaměti vážou tento subjekt ke kanonickým ID relace a
odkazu na video, ukládají pouze klíče odvozené z těchto hodnot pomocí SHA-256 a omezují čtení
i mazání na tentýž subjekt. Mezipaměť ukládá nejvýše 16 odvozených snímků JPEG
na položku, po deseti minutách je nechává vypršet a podporuje čtení omezené hodnotami
`start`/`end` nebo explicitní smazání relace.

Každý subjekt je omezen na 16 položek a 64 MiB kanonických dat JPEG. Tyto
limity jsou nezávislé na globálním limitu 64 položek / 256 MiB: při tlaku
na kvótu subjektu se nejprve odstraňují pouze nejdéle nepoužité položky tohoto subjektu, teprve poté
se zvažuje globální odstraňování podle LRU. Položky s vypršenou platností se při aktivitě mezipaměti odstraňují z evidence subjektu
i z globální evidence, zatímco při zrušení nebo selhání validace se
částečná náhrada neuloží.

Mezipaměť odmítá nekanonické Base64, nadbytečné vyplňování, média jiná než JPEG, poškozené nebo
neúplné soubory JPEG a soubory JPEG, které při dekódování celého obrazu pomocí `sharp`
v rámci stanovených limitů vyvolají varování. Každý přijatý obraz znovu zakóduje jako kanonický JPEG, šířku a výšku odvodí
z dekódovaných bajtů namísto důvěřování polím volajícího a veškeré koncové
polyglotní bajty zahodí, místo aby je uchovávala. Do obou kvót se započítává pouze kanonický komprimovaný buffer
s omezenou velikostí. Limit JSON při přenosu zahrnuje režii Base64 pro limit 32 MiB
dekódovaného vstupu. Každý
uložený odvozený výstup zaznamenává ověřený formát a rozlišení JPEG, zásadu vzorkování,
verzi odvození, čas vytvoření, serverem vypočítaný hash obsahu a hashovaný odkaz na nadřazený
obsah spolu s hashem nadřazeného obsahu od důvěryhodného volajícího. Zrušení se kontroluje
mezi asynchronními fázemi dekódování a výpočtu hashe před atomickým zápisem do mezipaměti.

Tato etapa zatím nepřipojuje k trase produkčního poskytovatele a neposkytuje
výběr variant ve více rozlišeních. Transparentní cesta požadavků přes Video Bridge
proto nevyžaduje žádnou práci navíc, zatímco odvození identity vázané na tenanta a
úplný životní cyklus více rozlišení FU-08 zůstávají výslovně navazujícími úkoly, nikoli
chováním zdokumentovaným jako dokončené.

Snímky se popisují postupně pomocí nakonfigurovaného modelu Video. Prázdné
přepsání nastavení Video přebírá nastavení Vision; pokud jsou obě prázdná, automatický směrovač
Vision vybere výsledný model s podporou zpracování obrazu. Úspěšně vytvořené popisy
nahrazují původní část stabilní předponou `[Video description:`, která zároveň
označuje text jako nedůvěryhodné pozorování odvozené z média a následným
modelům říká, aby se neřídily pokyny nalezenými v médiu. Klíče mezipaměti popisů snímků
zahrnují bajty JPEG, prompt, časové razítko a výsledný model; do mezipaměti se ukládají pouze úspěšně vytvořené
popisy. Položky mezipaměti uchovávají skutečný model, který popis úspěšně vytvořil,
včetně záložního modelu; pokud různé snímky
vytvořily různé modely, bridge hlásí `mixed`. Při zásahu do mezipaměti se znovu použije identita tohoto modelu,
místo aby se přeznačila podle požadovaného plánu směrování. Klíč mezipaměti výsledků
pro celé video zahrnuje každý vstup, který mění výstup — prompt, výsledný
model, zásadu vzorkování, počet snímků, režim sémantické analýzy, otisk SHA-256
normalizované nápovědy k zaměření, okno zaměření, `transcript`,
`audioTranscript` a příznak přehledového listu snímků — takže změna kterékoli z těchto
dimenzí znamená nenalezení v mezipaměti, nikdy opětovné použití zastaralého výsledku. Verze zásady
vizuální deduplikace, prahová hodnota a omezený počet kandidátních snímků jsou také výslovně uvedeny
v klíči mezipaměti výsledků a metadatech; změna zásady proto nemůže znovu použít zastaralý
popis celého videa. Metadata mezipaměti výsledků v4 uchovávají režim a
otisk, nikdy nezpracované zadání uživatele. Metadata ochranné vrstvy uvádějí
požadovaný i skutečný režim analýzy; požadovaný režim `focused` bez
použitelného uživatelského textu se vykazuje jako skutečný režim `full`.

Ochranná vrstva extrahuje každou podporovanou videočást, ale popíše jich nejvýše
`modalityBridgeVideoMaxVideos`. U cíle, u něhož je prokázáno
`supportsVideo === false`, se videa s chybou a videa nad limit převádějí na explicitní bezpečné
textové značky, takže nezůstane žádné nezpracované video. Pokud podpora není známa, tyto části
si ponechávají svůj nosič videa; případný záložní přepis podléhá výše uvedenému omezenému převodu
na text. Cíle s `supportsVideo === true` bridge obcházejí.
Signál přerušení klientského požadavku se přenáší do stahování, fronty brokeru,
podprocesů i volání pro vytváření popisů; přerušení zastaví zpracování mezi videi a nikdy při chybě
nepropustí nezpracovaná média.

Běhová nastavení jsou uložena v databázi a validována pomocí Zod:

| Klíč                                | Výchozí hodnota | Rozsah / chování                                                                                           |
| ----------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Volitelná běhová funkce, vyžaduje výslovné zapnutí                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` zachovává obecné popisy; `focused` používá omezený, nedůvěryhodný kontext poslední zprávy uživatele |
| `modalityBridgeVideoModel`          | `""`            | Přebírá model Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` nebo proporcionální `segment_aware`; při selhání detektoru se použije `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                             |

Dříve uložené hodnoty časového limitu Video nad 120 sekund se omezí na
časový limit brokeru; nové zápisy nastavení nad tímto limitem se odmítají.
`GET /api/modality-bridge/video/runtime` vyžaduje před autentizací nebo zjišťováním stavu běhového prostředí
důvěryhodně potvrzený původ z lokálního rozhraní loopback a následně
autentizaci pro správu. Vrací pouze `available`, sanitizované verze FFmpeg/ffprobe a pevně daný
důvod, pokud běhové prostředí není dostupné. Interní koncový bod extrakce není
veřejné API pro nahrávání: zaplnění fronty vrací `503` spolu s `Retry-After`, odpojení
volajícího vrací `499` a vypršení pevného časového limitu brokeru vrací `504`. Převedené odpovědi přidávají
`video->text;model=<visionModel>;parts=<videos>` do centrální
hlavičky `x-omniroute-modality-bridge`, aniž by odstranily segmenty Vision nebo Audio.

### Maskování PII (`piiMasker.ts`)

Spouští se v **obou** fázích.

- **`preCall`** klonuje datovou část, prochází `system`, `messages`, `input` a
  `prompt` (včetně položek tvořených prostým řetězcem) a aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) na řetězcová pole `content`/`text`. Když je
  `PII_REDACTION_ENABLED=true`, detekované osobní údaje (PII) se v odchozí
  datové části anonymizují. To je nezávislé na `INPUT_SANITIZER_MODE` (který řídí pouze
  zásady ochrany proti injektáži promptu). Když je anonymizace vypnutá, volání zaznamenává počty
  detekcí, aniž by přepisovalo obsah.
- **`postCall`** vytvoří hlubokou kopii odpovědi, spustí `sanitizePIIResponse()` a
  maskování pro strukturu Responses API (`maskResponsesOutput` — pokrývá
  `output_text` a `output[].content[].text`). Pokud dojde k jakékoli anonymizaci,
  upravená odpověď nahradí původní.

Ochranný mechanismus nikdy neblokuje; pouze přidává anotace (`meta.detections`,
`meta.redacted`) nebo přepisuje obsah.

#### Výběr podle typu, vlastní vzory a počítadla detekcí

**Ovládací panel → Nastavení → Zabezpečení → Maskování PII** určuje, _co_ se maskuje.
Nezapíná samotné maskování: to nadále řídí `PII_REDACTION_ENABLED` (požadavek) a
`PII_RESPONSE_SANITIZATION` (odpověď + SSE), obě ve výchozím nastavení vypnuté.

- **Výběr podle typu** — vestavěné identifikátory jsou uvedeny v
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Nenastavená hodnota znamená všechny
  typy (chování před zavedením tohoto nastavení). Vzor `ssn_us`
  v modulu pro zpracování požadavků se mapuje na `ssn`. Šablony (Minimální, Standardní, Finanční,
  Brazilská, USA, Úplná) pouze vyplňují zaškrtávací políčka v uživatelském rozhraní.
- **Vlastní vzory** — až 20 regulárních výrazů nebo vzorů se zástupnými znaky (`*` = až 64
  nebílých znaků, `?` = jeden). Shody se nahrazují hodnotou `[CUSTOM_REDACTED]`.
  Každý vzor prochází funkcí `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maximálně 500 znaků, příznaky omezené
  na `g i m s u`, musí jít zkompilovat, musí projít kontrolou `safe-regex` (katastrofické
  zpětné prohledávání) a nesmí odpovídat prázdnému řetězci ani zástupnému textu anonymizace.
  Vzor, který neprojde, je odmítnut při ukládání i testování a uložený řádek,
  který neprojde, se za běhu přeskočí, místo aby se zkompiloval. Vlastní vzory se
  používají pouze při zapnutém maskování.
- **Počítadla detekcí** — počty podle typu (nikdy ne odpovídající hodnoty), uchovávané
  v paměti a resetované při restartu (`src/lib/pii/piiDetectionStats.ts`). Zvyšují se
  pouze při zapnutém maskování.

Nastavení jsou uložena v tabulce `key_value` (jmenný prostor `pii_settings`,
`src/lib/db/piiSettings.ts`) a načítají se přes mezipaměť s platností 1 s. API:

| Metoda | Cesta                    | Účel                                                                            |
| ------ | ------------------------ | ------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stav příznaků, `enabledTypes`, `customPatterns`, počítadla detekcí              |
| `PUT`  | `/api/settings/pii`      | Nahradit `enabledTypes` (`null` = vše) a/nebo `customPatterns`                  |
| `POST` | `/api/settings/pii/test` | Zkušebně spustit jeden vzor na vzorku o velikosti nejvýše 8 KB; nic se neukládá |

Všechny tři vyžadují ověření přístupu ke správě a ověřují tělo pomocí Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injektáž promptu (`promptInjection.ts`)

Detekuje útočné struktury v obsahu dodaném uživatelem a vynucuje
nakonfigurované zásady. Chování řídí proměnné prostředí a volby
konstruktoru:

| Nastavení      | Proměnná prostředí                                                                                   | Výchozí hodnota | Účinek                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zapnuto        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`          | Při hodnotě `false` se ochranný mechanismus ihned ukončí.                                                                                                                                    |
| Režim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`          | Zásady pro injektáž: `block`, `warn` nebo `log`. (`redact` se přijímá kvůli zpětné kompatibilitě, ale text injektáže **neodstraňuje**; přepis PII v požadavku řídí `PII_REDACTION_ENABLED`.) |
| Práh blokování | volba `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimální závažnost nutná k blokování. Střední závažnost se ve výchozím nastavení pouze sleduje.                                                                                             |

**Priorita režimů** (`getMode`): `options.mode` volajícího →
**přepsání příznaku funkce v DB** pro `INJECTION_GUARD_MODE` (Ovládací panel → Nastavení →
Příznaky funkcí) → proměnná prostředí `INJECTION_GUARD_MODE` → proměnná prostředí `INPUT_SANITIZER_MODE` →
`warn`. Přepsání v ovládacím panelu má tedy přednost před proměnnými prostředí, takže rozhraní Příznaky
funkcí řídí běžící ochranný mechanismus za chodu (bez restartu). Čtení z DB je odolné vůči chybám:
pokud selže, ochranný mechanismus se vrátí k chování podle proměnných prostředí, a pokud není nastaveno žádné
přepsání, chování je totožné s vyhodnocením pouze podle proměnných prostředí.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílená sada detektorů
   používaná i jinde ve zpracovatelském řetězci).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, oba se závažností `high`).
3. Volitelné `customPatterns` předané prostřednictvím voleb konstruktoru (řetězce, regulární výrazy
   nebo záznamy `{ name, pattern, severity }`).

Když `mode === "block"` **a zároveň** alespoň jeden detekovaný nález splňuje práh
závažnosti, `preCall` vrátí `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimech `warn`/`log` ochranný mechanismus událost zaznamená, ale
volání povolí. Sdílená pomocná funkce `evaluatePromptInjection()` je také exportována
pro volající, kteří potřebují vyhodnocovat prompty bez použití registru.

**Limit skenování (v3.8.20):** detektor kontroluje pouze **prvních 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů) v
`src/shared/utils/inputSanitizer.ts`. Jak `detectInjection()`, tak
`evaluatePromptInjection()` provádějí `slice(0, MAX_INJECTION_SCAN_BYTES)` před spuštěním
smyčky pro porovnávání vzorů. Instrukce pro injektáž se nacházejí poblíž začátku vstupu, takže tento
limit omezuje zátěž CPU a GC při zpracování regulárních výrazů u dat o stovkách KB, aniž by oslaboval detekci (viz
#3932, #4041).

### Maskování přihlašovacích údajů (`credentialMasker.ts`)

Spouští se v **obou** fázích, jako poslední ve výchozím řetězci (priorita `95`). Maskuje
známé vzory klíčů API / tajných tokenů v odchozích datech (obsah
zpráv, argumenty volání nástrojů, výsledky nástrojů) **i** v odpovědi poskytovatele, takže
přihlašovací údaj vložený do promptu (nebo vrácený ve výsledku nástroje) neunikne
nadřazenému poskytovateli ani zpět klientovi.

- **Pouze po výslovném zapnutí**, podle stejné konvence jako maskování osobních údajů (souvisí s pevným pravidlem #20):
  zakázáno, pokud není `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Při vypnutí ochranný mechanismus nic nedělá —
  nikdy neblokuje ani nepřepisuje.
- `redactCredentials()` prochází celý strom dat/odpovědi (`walkValue()`,
  odolné vůči znečištění prototypu, s ochranou proti cyklům pomocí `WeakSet`) a nahrazuje shody
  zástupným řetězcem `[REDACTED:<type>]`, přičemž klonuje pouze větve, které se skutečně
  změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square), cloudové
  klíče (přístupový klíč AWS, Twilio, SendGrid, Mailgun), soukromé klíče / JWT,
  připojovací řetězce obsahující přihlašovací údaje (`mongodb://user:pass@...` atd.) a
  obecný vzor hodnot hlaviček `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klíče odpovídající názvům hlaviček (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se maskují strukturálně (pouze hodnota, prefix schématu jako
  `Bearer `/`Basic ` se zachovává), nikoli pomocí obecného textového regulárního výrazu.
- Ochranný mechanismus nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a přidává anotace (`meta.credentialsRedacted`, `meta.count`).

Regresní test: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // hodnota true předčasně ukončí řetězec
  message?: string; // zobrazí se při zablokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrací preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vrací postCall pro přepsání odpovědi
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

Ochranný mechanismus signalizuje „beze změny“ vrácením `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu předávanou řetězcem dalším ochranným mechanismům.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných mechanismů. Přerušení požadavku je záměrnou výjimkou z principu fail-open: mediální adaptéry zastaví práci a provedou úklid, aniž by obnovily původní média pro cíl, o němž je známo, že je nepodporuje.

## Registr (`registry.ts`)

Jediná instance `guardrailRegistry` zpřístupňuje:

- `register(guardrail)` — přidá ochranný mechanismus (nebo jej nahradí podle normalizovaného názvu) a
  znovu seřadí mechanismy vzestupně podle `priority`.
- `clear()` / `list()` — pomocné metody pro správu.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranné mechanismy, předává
  data prostřednictvím `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí mechanismy pro zajištění izolace testů.

Obě spouštěcí metody vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult` obsahujících
pro každý ochranný mechanismus pole `blocked`, `skipped`, `modified`, `error` a `meta`,
která jsou užitečná pro trasování.

### Vypnutí ochranných mechanismů pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` sestaví
seznam názvů ochranných mechanismů bez duplicit, které se mají pro aktuální
požadavek přeskočit. Existuje pět kanálů, které se čtou v tomto pořadí a slučují do jednoho seznamu
(při odstraňování duplicit má přednost první výskyt):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
3. `metadata.disabledGuardrails` v těle požadavku (pouze pokud je `metadata` objekt)
4. Hlavička `x-omniroute-disabled-guardrails`
5. Starší hlavička `x-disabled-guardrails`

Všech pět kanálů se sloučí, včetně obou hlaviček: odeslání obou hlaviček
`x-omniroute-disabled-guardrails` a `x-disabled-guardrails` způsobí přeskočení sjednocení
jejich seznamů a prázdná nová hlavička již nezastíní tu starší
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), opraveno v
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Hodnoty mohou být pole řetězců nebo řetězec oddělený čárkami; z názvů se odstraní okolní bílé znaky
a normalizují se na malá písmena ve formátu kebab-case (`pii_masker` → `pii-masker`), přičemž prázdné
položky se zahodí. Výsledek se předá prostřednictvím `context.disabledGuardrails`
registru, který přeskočí odpovídající ochranné mechanismy (`skipped: true` v `results`).

Seznam vypnutých mechanismů ovlivňuje pouze **registr**. Režim `block` ochrany proti vkládání instrukcí do promptu
představuje povinnou bezpečnostní hranici: middleware ochrany proti vkládání instrukcí
(`src/middleware/promptInjectionGuard.ts`) volá `evaluatePromptInjection()`
bez jakéhokoli seznamu vypnutých mechanismů ovládaného volajícím (nevyužité
volání `resolveDisabledGuardrails({ body })`, které dříve prováděl, bylo odstraněno v
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), takže požadavek,
který vypíná `prompt-injection`, je v režimu `block` přesto odmítnut. Jde o
záměr. Kanály pro vypnutí ovládá volající (tělo požadavku,
metadata, hlavičky) a volající nesmí mít možnost vypnout bezpečnostní
opatření nastavené provozovatelem
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Sjednocení hlaviček z [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mění pouze to, které ochranné mechanismy registru se přeskočí; neumožňuje klientovi
obejít middleware. Povinné zásady ochranných mechanismů pro jednotlivé klíče a skupiny jsou
sledovány v RFC pro v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Viz [Pokrytí a omezení](#coverage-and-limits).

## Pořadí provádění

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts` (trasy skupiny chat uvedené v části
[Pokrytí a omezení](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechávaných kontrol z klíče API, těla
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné kontroly ve vzestupném
   pořadí priorit:
   - Zakázané ochranné kontroly se zaznamenají jako `skipped`.
   - `preCall` každé ochranné kontroly může přepsat datový obsah prostřednictvím `modifiedPayload`.
   - První `block: true` předčasně ukončí řetězec a obslužná funkce vrátí
     odpověď s odmítnutím na základě ochranné kontroly.
3. Datový obsah (případně přepsaný) přejde do kombinovaného směrování a odešle se
   nadřazené službě.
4. **Pouze bez streamování:** po sestavení odpovědi
   `guardrailRegistry.runPostCallHooks(...)` spustí stejný řetězec nad
   odpovědí. `block: true` zde zahodí odpověď nadřazené služby a vrátí HTTP 400. Streamované odpovědi tento krok zcela vynechávají.

Ochranné kontroly, které vyvolají výjimku, se zaznamenají s `error: <message>` a zapíší do protokolu prostřednictvím
`logger.warn`, ale řetězec pokračuje — při chybě se záměrně povoluje pokračování.

## Pokrytí a omezení

Registr ochranných kontrol je zapojen pouze do zpracování chatu. Tato omezení jsou
zakotvena v `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` a
`tests/unit/guardrail-pipeline-characterization.test.ts`; při změně chování tyto testy
cíleně aktualizujte.

### Kde se hooky spouštějí

| Hook / řízení                                 | Spouští se pro                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                             | Požadavky zpracovávané funkcí `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (a `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` a chatovou proxy pro Telegram. Také testovací koncový bod řídicího panelu `/api/guardrails/test`. Zablokování před voláním vrací HTTP 400. |
| `runPostCallHooks`                            | Pouze chatové odpovědi **bez streamování** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamované odpovědi se sem nikdy nedostanou.                                                                                                                                                                                                                                                                                                       |
| PII při streamování                           | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), zapojená v `streamingPipeline.ts`, když je zapnuto `PII_RESPONSE_SANITIZATION`. Nejde o ochrannou kontrolu, takže ji kanály pro zakázání neovlivňují.                                                                                                                                                                                                                                    |
| Middleware pro ochranu před injekcí (původní) | Každou trasu `/v1` nesoucí prompt, včetně tras skupiny chat (viz [pokrytí tras](#injection-guard-route-coverage--red-team-phase-8--block-d)). Pouze injekce do promptu.                                                                                                                                                                                                                                                                                |

### Co není pokryto

- **Trasy pro média, embeddingy a data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) se do registru nikdy nedostanou. Neprovádí se
  na nich maskování PII, maskování přihlašovacích údajů ani přemostění modalit. Jejich jedinou
  kontrolou je původní middleware pro ochranu před injekcí.
- **Streamované odpovědi** neprocházejí žádnými ochrannými kontrolami po volání: nespouští se `pii-masker` ani
  `credential-masker` po volání a nedochází ani k blokování po volání. Použije se pouze transformace PII
  při streamování (když je zapnuto `PII_RESPONSE_SANITIZATION`). Přihlašovací údaj
  zopakovaný ve streamované odpovědi není odstraněn.
- **Kanály pro zakázání vs. middleware (záměrně):** middleware vyhodnocuje
  injekci do promptu vlastním voláním `evaluatePromptInjection()`, aniž by
  předával jakýkoli seznam zakázaných kontrol ovládaný volajícím. Režim `block` představuje povinnou
  hranici, kterou nelze obejít zakázáním kontrol ze strany volajícího, a to ani na trasách skupiny chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Zakázání
  `prompt-injection` pouze vynechá ochrannou kontrolu v registru.

### Co má přístup k odpovědi před kontrolami po volání

Při zpracování bez streamování je pořadí následující: extrakce paměti → spuštění vestavěných
nástrojů → ochranné kontroly po volání → ukončení při zablokování po volání → uložení do sémantické mezipaměti.

- **Extrakce paměti** a **spouštění nástrojů** mají přístup k odpovědi dříve, než ji ochranné
  mechanismy po volání mohou přepsat nebo zablokovat. Od změny
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) extrakce
  paměti zpracovává extrahovaný text pomocí `sanitizePII`, pokud je
  zapnuto `PII_RESPONSE_SANITIZATION` (při streamování i bez něj), ale
  odpověď, kterou ochranné mechanismy po volání později zablokují, již byla zpřístupněna paměti a
  nástrojům.
- **Sémantická mezipaměť** ukládá odpověď až po kontrole ochrannými mechanismy po volání, takže ukládá
  přepsanou odpověď a zablokovaná odpověď se do mezipaměti nikdy neuloží. Položky mezipaměti jsou
  klíčovány podle jednotlivých klíčů API.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá                                 | Účinek                                                                                                              |
| ------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                      | Nastavením na `false` detekci zcela zakážete.                                                                       |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                      | Zásady pro injekce: `warn`, `block` nebo `log`. Starší hodnota `redact` nepřepisuje text injekce.                   |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                      | Režim ochrany před injekcemi; také příznak funkce v DB, který **má přednost** před proměnnými prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                      | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                      | Starší alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`                            | Při hodnotě `true` se osobní údaje (PII) v požadavku anonymizují (nezávisle na režimu ochrany před injekcemi).      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (v navazujícím zpracování) | Řídí chování maskování na straně odpovědi.                                                                          |

Ochranné mechanismy Modality Bridge načítají konfiguraci za běhu z úložiště nastavení
v databázi (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro Vision jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Starší
klíče `visionBridge*` jsou přijímány pouze jako zdokumentovaná záložní možnost při čtení
po dobu jednoho cyklu; zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a logika
pro výběr záložních hodnot se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž starší
konstanty jsou zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` spolu se sdílenými
nastaveními `modalityBridgeCache*`. Audio nemá záložní možnost využívající starší klíče, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` spolu se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je vypnuté, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a generování popisů snímků zvyšuje latenci i náklady na model.

## Vlastní ochranná pravidla

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts` jako rozšíření třídy `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Zaregistrujte pravidlo buď při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakékoli předchozí ochranné pravidlo se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy používejte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předáním `{ registerDefaults: false }` začnete s prázdným registrem a
zaregistrujete pouze testovaná ochranná pravidla. Vision Bridge podporuje vkládání
závislostí (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge zpřístupňuje
obdobné body pro nastavení, schopnosti, výběr modelu STT, kontroly přihlašovacích
údajů a přepis. Testy tak mohou prověřit oba postupy bez přístupu k databázi
nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor, který zajišťuje
  detekci injektáže promptů a maskování osobních údajů (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí nastavení Vision Bridge a
  seznam modelů s vynuceným použitím bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílené výchozí nastavení běhového prostředí Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — nezávislá vrstva (jistič, doby prodlevy)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injektáži a red-team testování (fáze 8 · blok D)

Ochrana proti injektáži (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Respektuje `INJECTION_GUARD_MODE` (výchozí `warn` = pouze protokolování;
`block` = vrací HTTP 400 `SECURITY_001`).

| Typ                 | Trasy                                                                                                                                                | Výchozí režim |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Textové (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Datové              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM při `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci. Režim blokování představuje povinnou bezpečnostní hranici: `evaluatePromptInjection()`
ignoruje seznam pravidel vypnutých pro daný požadavek, který mu předává middleware, takže `disabledGuardrails`
z něj trasu **nevyjímá** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Noční workflow (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) má dvě úlohy:

- **`promptfoo-guard` (blokující)** — spouští `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý útočný případ (např. „ignoruj všechny
  předchozí pokyny…“, obcházení omezení ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tedy že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spouští garak `--probes promptinject,dan,leakreplay`
  proti místní instanci OmniRoute (`http://localhost:20128/v1`). Podmínkou je
  tajný klíč poskytovatele (`PROMPTFOO_PROVIDER_KEY`); bez něj se úloha korektně přeskočí a příkaz má příponu
  `|| true`, takže poskytuje hlášení, aniž by způsobil selhání CI.

Pokrytí pomocných funkcí ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1`, která přijímá prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.

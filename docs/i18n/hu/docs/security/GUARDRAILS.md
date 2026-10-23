# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Utolsó frissítés:** 2026-10-17 — v3.8.52 (hozzáadva: [Lefedettség és korlátok](#coverage-and-limits):
> mely útvonalakat és válaszfeldolgozási ágakat érik el a hookok, az összevont letiltási fejlécek (#16412), az injekció
> blokkolási módja mint kötelező védelmi határ (#16413), valamint hogy mi fér hozzá a válaszhoz a hívás utáni feldolgozás előtt)

A védelmi szabályok az OmniRoute és a külső szolgáltatók közötti határon
érvényesítik a biztonsági és szabályzati előírásokat, valamint a tartalomátalakításokat.
Minden védelmi szabály megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja
vagy megjegyzésekkel láthatja el) a kérések adattartalmát (`preCall`) és
a külső szolgáltatók válaszait (`postCall`).

A rendszer **hiba esetén továbbenged**: ha egy védelmi szabály végrehajtás közben kivételt dob,
a nyilvántartás rögzíti a hibát, és a kérés meghiúsítása helyett a következő védelmi
szabállyal folytatja a feldolgozást. A blokkolás kifejezett döntés (`block: true`), sohasem véletlen.
Az egyetlen kivétel a megszakított kérés: ha a hívó `signal` jelzése megszakított állapotú,
a kivételt dobó védelmi szabály kihagyás helyett meghiúsítja a hook futtatását.

A hookok **nem** futnak le minden útvonalon és minden válaszon. Olvassa el a
[Lefedettség és korlátok](#coverage-and-limits) szakaszt, mielőtt biztonsági
intézkedésként támaszkodna egy védelmi szabályra.

## Beépített védelmi szabályok

A nyilvántartás importáláskor automatikusan betölt hat védelmi szabályt prioritási sorrendben
(lásd: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Szakasz(ok)    | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Az alacsonyabb prioritási számú szabályok futnak **először**.

### Képfeldolgozási híd (`visionBridge.ts`) — Modalitási híd PR-1

A GLM 5.3 alapmodell és a `glm-5.3-{low,high,max}` explicit
`supportsVision:false` metaadatokkal rendelkezik a nyilvántartásban/specifikációban. A GLM 5.3 Flash változatok
továbbra is natív képfeldolgozási képességű modellek. A Claude Code `/v1/messages` útvonala
a Claude–OpenAI átalakítás **előtt** lép be a közös `handleChat` hívás előtti
védelmiszabály-láncba; a `Read` eszköz eredményébe ágyazott képeket le kell írni vagy kezelni kell,
mielőtt ez az átalakítás OpenAI `image_url` tartalommá emeli őket (#17069).

Elfogja a **képfeldolgozásra nem képes modelleknek** szánt, képeket tartalmazó kéréseket, és vagy
átirányítja a teljes kérést egy képfeldolgozásra képes modellhez, vagy a képi
részeket egy konfigurálható képfeldolgozó modell által készített szöveges leírásokra cseréli
a külső szolgáltató hívása előtt. Így a csak szöveges szolgáltatók transzparens módon kezelhetik
a multimodális adattartalmakat.

Folyamat:

1. Kihagyás, ha a célmodell már támogatja a képfeldolgozást (kivéve, ha szerepel a
   híd használatára kényszerített modellek `isVisionBridgeForcedModel` listájában).
2. A képi részek kinyerése az `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely az `open-sse/utils/mediaParts.ts` fájlban található
   **egységes médiafelismerőre**, a `detectMediaParts()` függvényre delegálja a feladatot — ez
   a kombinációk kompatibilitási szűrőjével közös, egyetlen hiteles forrás.
   A kinyerés engedélyezési listája csak azokra a struktúrákra terjed ki, amelyeket a `replaceImageParts`
   vissza tud illeszteni (a kinyerés↔csere szerződés): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` és Responses
   API `input_image`. A Claude Code
   `tool_result.content` mezőjébe és a Responses eszközkimeneteibe ágyazott megfelelő képek kinyerése és
   cseréje szintén megtörténik az eredeti elérési útjukon; a pusztán jelzőként szolgáló struktúrákat a kombinációszűrő
   kezeli, ezek nem kerülnek kinyerésre.
   Kihagyás, ha nem található kép.
3. A futásidejű konfiguráció feloldása a `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) segítségével: az új `modalityBridge*`
   beállításkulcsok elsőbbséget élveznek; a régi `visionBridge*` kulcsok **egy cikluson át
   tartalékként** megmaradnak (visszaállítási időablak). Ha a híd le van tiltva,
   a kihagyás még a médiatartalom bejárása előtt megtörténik.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönt
   az átirányítás és a leírás között. Az átirányítás egy olyan `modifiedPayload` értéket ad vissza, amelyben csak a `model`
   változik, valamint a következő metaadatokat: `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leírási ág: a képek számának korlátozása a `maxImages` értékére, a feladatot figyelembe vevő prompt összeállítása,
   a leírás-gyorsítótár ellenőrzése, a képfeldolgozó modell **párhuzamos** hívása
   (`Promise.allSettled`), majd `[Image N]: <description>` szöveges részek beillesztése
   a képek helyére. A sikertelen leírás eredménye `null`: ismeretlen vagy képfeldolgozásra képes
   célok esetén a nyers kép megmarad (#4012), de egy **igazoltan csak szöveges közvetlen
   célmodell** vagy képfeldolgozási képesség nélküli kombináció minden le nem írt képhez explicit
   `(unavailable — no vision-capable provider connected)` helyettesítő szöveget kap,
   beleértve a részleges hibákat és a leíró hívások számkorlátján túli képeket is
   (#17069). A kombinációk leírásának teljes sikertelensége esetén alkalmazott meglévő
   tartalékmechanizmus változatlanul megmarad (#8430).
6. A `modifiedPayload` és a metaadatok (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) visszaadása.

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Működés                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔               | Korábbi heurisztika, változatlanul (#6640/#7204): a nem kombinált/`auto/` modellek a legjobb képfeldolgozó modellre irányítanak át, kivéve, ha az eredeti modell már rendelkezik használható hitelesítő adatokkal (ekkor leírás készül); a kombinált célmodellek mindig leírást készítenek.                                                                                                            |
| `describe` |                 | Mindig leírást készít — az átirányítási blokk teljes egészében kimarad; mindig a felhasználó által választott modell válaszol.                                                                                                                                                                                                                                                                         |
| `reroute`  |                 | Kényszerített átirányítás: a hitelesítő adatokkal rendelkező modell megtartását biztosító védelem kimarad. Az átirányítás **célmodelljének** hitelesítő adatait ellenőrző védelem továbbra is érvényes — ha nincs használható képfeldolgozó célmodell, a híd egyértelmű hibával blokkolja a kérést, ahelyett, hogy leírást készítene vagy nyers képeket küldene egy csak szöveget kezelő célmodellnek. |

A kényszerített módok **még azelőtt** lezárják a döntést, hogy az automatikus heurisztika lefutna; az `auto` működése
bájtról bájtra megegyezik a PR-1 előtti védelmi mechanizmuséval.

#### Az API-kulcs jogosultsági köre (`visionBridgeKeyScope.ts`)

Ha a hívó API-kulcsa korlátozza az `allowedConnections` kapcsolatokat, a kvótakészleteket
(`allowedQuotas`) vagy a modelleket (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a híd csak
olyan átirányítási és leíró modelleket választ, amelyeket a kulcs használhat, és csak olyan kapcsolatokon,
amelyeket a kulcs használhat. A leíró hívás ezután mindig az OmniRoute önmagába visszavezető hívásán keresztül halad,
az `x-omniroute-self-loop-key-id` fejléccel, így a fogadó csevegési kérés
ismét érvényesíti a kulcs kapcsolatokra és modellekre vonatkozó szabályzatát. Az `enforceApiKeyPolicy()`
csak az önmagába visszavezető hívás bearer hitelesítő adatával együtt veszi figyelembe ezt a fejlécet, így az kizárólag
szűkítheti a hozzáférést, a fel nem oldható azonosítókat pedig elutasítja.

Ha a kulcs számára egyetlen képfeldolgozó modell sem engedélyezett, a **biztosan csak szöveget kezelő
célmodell** helyben, egyértelmű HTTP 400 hibával utasítja el a képkérést ahelyett,
hogy a kép bájtjait egy azok feldolgozására képtelen háttérszolgáltatásnak továbbítaná (#17069). Az ismeretlen vagy natív képfeldolgozási képességű
célmodelleknél a leírási útvonal megőrzi korábbi, hiba esetén továbbengedő viselkedését (metaadat: `{ skipped: true, reason: "no_permitted_vision_model" }`).
A kulcs nélküli kérések és az ilyen korlátozások nélküli kulcsok pontosan
úgy működnek, mint korábban.

#### Feladathoz igazodó leíró prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezés szerint **igaz**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hozzáfűzi
az **utolsó felhasználói üzenet** szövegét (500 karakterre csonkítva) az alap
leíró prompthoz, így a leírást a felhasználó tényleges kéréséhez igazítja
(a codex-vision-proxy mintájára), és megkéri a képfeldolgozó modellt a látható
szöveg átírására. Ha a jelző ki van kapcsolva — vagy nincs felhasználói szöveg —, az alapprompt változatlanul kerül felhasználásra.

A leírást végző, önmagába visszavezető hívás saját OpenAI-kompatibilis kérése (a `callVisionModelSingle()`
a `visionBridgeHelpers.ts` fájlban) mindig az `image_url.detail: "high"` beállítást kéri —
feltétel nélkül, minden hívó és szolgáltató esetén, bármilyen kliensjelzéstől függetlenül.
Az alacsony részletességű mintavételezés éppen annál a szövegátírási feladatnál rontja az OCR pontosságát,
amelyet ez a prompt kér, ezért maga a leíró hívás mindig magas
részletességet kér, függetlenül attól, hogy az eredeti bejövő kérés milyen részletességi szintet használt. Ez
csak a belső leíró kérés törzsét érinti; nem változtatja meg azt,
ahogyan az OmniRoute a hívó saját `image_url.detail` értékét továbbítja az elsődleges kérésben —
annak alapértelmezése külön kerül alkalmazásra, és csak az észlelt OpenCode-klienseknél, a
`defaultImageDetail()` függvényben (`open-sse/handlers/chatCore/upstreamBody.ts`). A
leírást végző, önmagába visszavezető hívás Anthropic átviteli formátumot használó ágában nincs `detail` mező,
így azt egyik alapértelmezés sem érinti.

#### A leírás kimeneti korlátja (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapértelmezett | Tartomány          |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` vagy 100–50000 |

A `0` (alapértelmezés) azt jelenti, hogy **nincs korlát** — a
`callVisionModel()` által visszaadott leírás változtatás nélkül halad tovább, megőrizve a jelenlegi
működést. A 100–50000 tartományba eső bármely érték a leírást egy
`…` utótaggal csonkítja, mielőtt az `[Image N]: <description>` formában visszaillesztésre kerül
(a `VisionBridgeGuardrail.preCall()` metódusban, a `src/lib/guardrails/visionBridge.ts` fájlban).
Növelje ezt az értéket a sok részletet tartalmazó OCR-feladatoknál, ahol a további feldolgozást végző modellnek
a teljes átiratra szüksége van; csökkentse, ha korlátozni szeretné a bőbeszédű képfeldolgozó modellek tokenfelhasználását.
Az irányítópult mezője a Képfeldolgozás lap Speciális paneljén található
(`modality-bridge-max-chars` a `ModalityBridgeVisionTab.tsx` fájlban), és minden
1 és 99 közötti értéket a 100-as alsó határra emel, míg az explicit `0`
értéket változatlanul hagyja — a `0` önmagában is érvényes Zod-érték
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán
a „nincs beállítva” alapértelmezése.

#### Leírási gyorsítótár (`modalityBridge/bridgeCache.ts`)

Memóriában tárolt, LRU + TTL gyorsítótár a leírások kimeneteihez, a teljes folyamaton belül megosztva.
Kulcs = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
hosszelőtagos keretezéssel (nincsenek mezőhatárokból eredő ütközések). A modellkomponens
a **beállított** hídmodell, nem pedig a ténylegesen válaszoló modell —
a `callVisionModel` belsőleg tartalék modellre válthat, a próbálkozásonkénti kulcsképzés pedig
széttöredezné a gyorsítótárat. A sikertelen leírások soha nem kerülnek a gyorsítótárba. Beállítások:

| Kulcs                           | Alapértelmezett | Tartomány |
| ------------------------------- | --------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`          | —         |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000   |

#### Távoli képek normalizálása (önhívásos leírás/base64-letöltés)

Amikor a híd saját maga tölt le egy **távoli** képet — az Anthropic leíró
önhívása és a claude-wire-format base64-konverziója
(`ensureBase64ImagesForClaudeWire`) során, mindkét esetben a
`visionBridgeHelpers.ts` fájlban található `fetchRemoteImageAsDataUri()`
segítségével —, a kapott adat-URI a `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) függvényen halad át, mielőtt bekerülne a
képfeldolgozó modellnek küldött kérésbe. A túlméretes képek **hosszabbik oldala 2048px-re**
csökken (az OpenAI/Anthropic által szerveroldalon már alkalmazott
átméretezési korláttal összhangban), ami csökkenti a feltöltött adatmennyiséget
és a késleltetést anélkül, hogy megváltoztatná, mit lát a képfeldolgozó modell. Az átméretezés
a dinamikus importálással betöltött `sharp` csomagot használja: olyan platformon,
ahol a natív binárisa nem tölthető be, a `normalizeDataUri()` **soha nem dob kivételt** —
ilyenkor az eredeti bájtokat változatlanul továbbítja, így a leírás/base64-konverzió
feldolgozási útvonala mindig működőképes marad. A nem képet tartalmazó bájtok
(ha a letöltés nem dekódolható képet adott vissza) szintén változatlanul haladnak át.
Ez a normalizálás csak azokra a képekre vonatkozik, amelyeket a híd a saját önhívásához
tölt le — a hívó nyers, változatlanul továbbított adatcsomagjára soha nem alkalmazza,
összhangban a kizárólag kifejezett engedéllyel történő módosítás elvével (20. szigorú szabály).

#### Beállítási séma + migráció

Az új `modalityBridge*` kulcsokat a Zod ellenőrzi az `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) sémában: `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, a három `modalityBridgeCache*` kulcs, valamint az
Audio Bridge által használt `modalityBridgeAudio*` csoport. A
`141_modality_bridge_settings.sql` migráció átmásolja a meglévő régi
`visionBridge*` értékeket a megfelelő új kulcsokba (idempotens, és soha nem írja felül
az üzemeltető által beállított `modalityBridge*` értéket); a régi kulcsok egy
kiadási cikluson át továbbra is elfogadottak maradnak tartalék olvasási forrásként.

#### Átláthatósági fejléc + statisztikák

A leírássá alakított válaszok a következő fejlécet tartalmazzák:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(a `modalityBridge/bridgeStats.ts` fájlban található `buildModalityBridgeHeader()`
állítja össze, és a `src/sse/handlers/chatHelpers.ts` fájlban található
`withModalityBridgeHeader()` illeszti be).
Az átirányított kérések **nem** kapnak fejlécet — az adatcsomag változatlan maradt,
a modell cseréje pedig már látható a válasz törzsének `model` mezőjében.

A `GET /api/modality-bridge/stats` (felügyeleti hitelesítéssel, a
`GET /api/settings` végponttal azonos hozzáférési szinten) visszaadja a memóriában
tárolt, modalitásonkénti számlálókat:
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` a `vision`, `audio` és
`video` modalitásokhoz. Az `averageLatencyMs` nevezőként a `latencySamples`
értékét használja, nem az összes kísérlet számát; az időmérés nélküli művelet
nem hoz létre mesterségesen nulla milliszekundumos mintát. A `bridged` a sikeres
konverziók visszafelé kompatibilis álneve marad; a sikertelen kísérletek nem növelik.
A számlálók a folyamat újraindításakor szándékosan nullázódnak
(telemetria, nem elszámolás).

#### Vezérlőpult konfigurálása

A dedikált vezérlőpultoldal a
`/dashboard/settings/modality-bridge` címen található. Az URL-ből is elérhető `Vision`, `Audio`
és `Video` lapok a `tab` értékének váltásakor megőrzik a lekérdezési paramétereket.
A képfeldolgozási lap lehetővé teszi az engedélyezés, az üzemmód, a modellválasztás
(beleértve az automatikus alapértelmezést), a feladathoz igazított promptolás, a speciális
időkorlát-/kép-/leíráshossz-/gyorsítótár-korlátok és a futásidejű
számlálók kezelését, valamint egy védett mintakérést. A hangfeldolgozási lap is működik:
engedélyezési beállítást, kizárólag STT-modelleket kínáló modellválasztót automatikus
választási lehetőséggel, időkorlát- és maximális hangkliphossz-korlátokat, hangfeldolgozási
számlálókat, valamint egy `input_audio` mintatesztet biztosít. A videófeldolgozási lap működőképes:
jelzi az FFmpeg/ffprobe futásidejű állapotát — a négy egyértelmű felületi állapot egyikét
(`unknown`, amíg az ellenőrzés folyamatban van vagy nem tudott befejeződni; `restricted`
olyan vezérlőpult-kiszolgálón, amely nem visszacsatolási címet használ, és ezért az ügyféloldal
kihagyja az ellenőrzést; `unavailable`, ha az ellenőrzés igazolta a hiányukat; vagy
`available` az FFmpeg/ffprobe verzióival) —, menti az engedélyezési és modellbeállításokat,
valamint a képkocka-, videó- és időkorlátokat, a modellválasztót képfeldolgozásra képes
modellekre szűri, és megjeleníti a videófeldolgozási számlálókat.

Az AI-beállítások alatti korábbi Vision Bridge kártya kompatibilitási hivatkozásként
az új oldalra mutat; már nem tartalmazza az űrlap második példányát. A médiaszolgáltatók
része is a Modality Bridge megfelelő lapjaira hivatkozik a kép–szöveg és a beszéd–szöveg
munkafolyamatoknál, a meglévő beszéd–szöveg tesztfelület eltávolítása nélkül.

**Az önhívás beléptetés-ellenőrzésének megkerülése:** amikor a leíró hívás az OmniRoute
saját `/v1` önhívási útvonalán halad át (nem szabványos szolgáltatói modell esetén), az alkérés
elküldi az `x-omniroute-admission-bypass: internal` fejlécet, és a feloldott
önhívási hitelesítő adattal hitelesíti magát — helyi módban a helyi `sk_omniroute`
jelzőértékkel, egyébként az üzemeltető által konfigurált `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`
környezeti kulccsal (#1350), hogy a `REQUIRE_API_KEY=true` beállítást használó telepítések
is végre tudják hajtani a leíró hívást. A megkerülés csak pontosan ezekkel a hitelesítő
adatokkal érvényes, így külső kliensek nem használhatják a fejlécet a beléptetés-ellenőrzés kihagyására.

A régi alapértelmezések a `src/shared/constants/visionBridgeDefaults.ts` fájlban találhatók;
az új üzemmód-, feladathoz igazítási és gyorsítótár-alapértelmezések, valamint a beállításfeloldó a
`src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók. A védelmi mechanizmus egy
`deps` konstruktoropciót biztosít, így a tesztek helyettesítő `getSettings` és
`callVisionModel` implementációkat injektálhatnak.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Elfogja a hangot tartalmazó csevegési kéréseket, mielőtt azok olyan célhoz érnének,
amelyről nem ismert, hogy fogad-e hangbemenetet. Soha nem irányítja át a csevegési kérést:
a hangrészeket a meglévő, OpenAI-kompatibilis multipart végponton keresztül szöveggé alakítja,
és a kiválasztott csevegőmodell a szöveges átiratokkal folytatja a feldolgozást.

Folyamat:

1. A `supportsAudio` feloldása a `getResolvedModelCapabilities()` segítségével történik. Az explicit
   szolgáltatói regiszter-metaadatok élveznek elsőbbséget, majd a statikus modellmetaadatok, végül a szinkronizált
   `modalities_input` következik. Ha egy deklarált bemeneti lista nem tartalmazza az `audio` elemet, az eredmény `false`; ha nincs
   a képességre utaló bizonyíték, az érték `null` marad. A `false` és a `null` egyaránt aktiválja a
   konzervatív áthidalást, míg a `true` megkerüli azt.
2. A `modalityBridgeAudio*` beállítások feloldása és az egyes üzenetekből a beillesztéssel lecserélhető, legfelső szintű
   hangrészek kinyerése a közös `detectMediaParts()`
   detektorral történik. A támogatott átviteli formátumok az OpenAI `input_audio`, `audio_url` és
   `source.media_type: "audio/*"`. A beágyazott hangot az útválasztás felismeri, de a
   beillesztéses feldolgozási útvonal nem távolítja el. A feldolgozás korlátját a `modalityBridgeAudioMaxClips` adja;
   a későbbi részek változatlanul maradnak.
3. A rendszer a beállított `provider/model` értéket használja, vagy a `selectAudioBridgeModel()` segítségével végigjárja
   az `AUDIO_TRANSCRIPTION_PROVIDERS` listát a katalógus stabil sorrendjében, és kiválasztja az első
   modellt, amelyhez használható, aktív szolgáltatói hitelesítő adat tartozik.
4. A `callAudioTranscription()` a base64/data-URI formátumú hangot multipart
   `file` mezővé alakítja, vagy letölt egy távoli `audio_url` tartalmat a csak nyilvános célokat engedélyező kimenő
   védelmen keresztül, DNS-rögzítéssel és 25 MB-os korláttal. Ezután POST-kéréssel elküldi a fájlt és a kiválasztott
   modellt a helyi `/v1/audio/transcriptions` önhívási végpontra, a
   `resolveSelfLoopBearer()` által biztosított hitelesítéssel. A meglévő átírási útvonal végzi a szokásos
   hitelesítőadat-keresést, a várakozási idő és a sebességkorlát kezelését, valamint a szolgáltatóhoz való továbbítást.
5. A sikeres hívások a hozzájuk tartozó részeket `[Audio N]: <transcript>` szövegre cserélik. A hívások
   `Promise.allSettled` használatával futnak: egy adott hívás hibája esetén az eredeti
   hangrész megmarad (#4012 szerződés). Ha minden hívás sikertelen, és a célról bizonyított, hogy
   `supportsAudio === false`, a részek helyére a következő kerül:
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 szerződés). Ha
   a cél képessége ismeretlen (`null`), az összes hívás sikertelensége esetén a tartalom változatlan marad. A bizonyítottan
   csak szöveget támogató cél használható STT-hitelesítő adat nélkül ugyanezt az explicit
   helyettesítő szöveget kapja, hálózati hívás indítása nélkül.

A sikeres átiratok a folyamat egészére kiterjedő Modality Bridge LRU/TTL-gyorsítótárat használják. A
kulcs a hanghivatkozást, a stabil `audio-transcription` műveleti
címkét és a kiválasztott STT-modellt egyesíti; a hibák soha nem kerülnek a gyorsítótárba. A hangfeldolgozási kísérletek frissítik
a közös `bridged`, `cacheHits`, `failures` és `lastUsedAt` számlálókat.
Az átalakított válaszok tartalmazzák az
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` fejlécet; a változatlan
kérések nem kapnak Audio Bridge szegmenst.

A futásidejű beállítások adatbázisban tárolódnak, és Zod-validáláson mennek át:

| Kulcs                         | Alapérték | Tartomány                      |
| ----------------------------- | --------- | ------------------------------ |
| `modalityBridgeAudioEnabled`  | `true`    | —                              |
| `modalityBridgeAudioModel`    | `""`      | Automatikus vagy STT-azonosító |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000                    |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10                           |

A közös gyorsítótárat továbbra is a `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` és `modalityBridgeCacheMaxEntries` vezérli.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Elfogja a Chat Completions `messages` és a Responses
API `input` legfelső szintű videórészeit, mielőtt meghívna egy olyan célt, amelynek nincs ismert natív videótámogatása.
A támogatott formátumok: `input_video`, `video_url`, `video_source`, HTTPS URL-ek
és `data:video/*;base64,...` adat-URI-k. A szövegben szereplő egyszerű fájlneveket nem kezeli
videóként.

A `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felel a kérés bejárásáért, a
képesség- és szabályzatellenőrzésért, a kérésenkénti összesítésért és a válasz adattartalmáért.
A videónkénti feldolgozást — a beszerzést, a teljes eredmény gyorsítótárazását, a képkockasorozat
leírását (amely a hívó által megadott hangátiratot is beépíti), valamint a kísérletenkénti
metrikákat, megszakítást és takarítást — a
`videoBridgePipeline.ts` modul `processVideoPart` függvénye rejti el, amelyet a `preCall` ciklusa videórészenként egyszer hív meg.
Ez a modul definiálja az explicit porthatárokat is: `VideoMediaBrokerPort`
(a bájtok beszerzése és a mintavételezett képkockák kinyerése), `VideoAudioTranscriptionPort`
(a hívó által megadott hangátirat egyesítése a mintavételezett képkockák leírásaival) és
`VideoDrilldownPort` (a részletes vizsgálat perzisztenciahatára; még nincs bekötve
a `processVideoPart` függvénybe — jelenleg csak a különálló `/api/modality-bridge/video/drilldown`
útvonal ír részletes vizsgálati bejegyzéseket).

A nyilvános `/v1` kérési útvonal soha nem importál és nem indít alfolyamatot. A távoli
videók letöltésére 50 MiB-os korlát vonatkozik; a beágyazott base64-videókra
videónként konzervatív, 36 MiB-os dekódolt méretkorlát érvényes, hogy a modellt, az üzeneteket és a keretezést tartalmazó teljes struktúra
a nyilvános JSON-kérések 50 MiB-os befogadási korlátján belül maradhasson. A beágyazott tartalom
hosszát és becsült dekódolt méretét a rendszer a memóriafoglalás előtt ellenőrzi. A kezdeti távoli URL-nek és minden átirányításnak
HTTPS-t kell használnia, a meglévő, csak nyilvános célokat engedélyező kimenő védelemmel és DNS-rögzítéssel. A bájtok ezután a pontosan meghatározott belső
`POST /api/modality-bridge/video/extract` közvetítői határon haladnak át. Ez az útvonal egyszerre
`LOCAL_ONLY` és `SPAWN_CAPABLE`, kizárólag folyamatonként hitelesített,
megbízható loopback-kérést fogad el, és soha nem fogad el URL-t, fájlrendszerbeli elérési utat, végrehajtható állományt
vagy argumentumlistát. Az API törzsméret-ellenőrzési folyamata és a kezelő inkrementális törzsolvasója
egymástól függetlenül érvényesíti a közvetítő 50 MiB-os bemeneti korlátját. A korlátozott várólista
egyszerre egy kinyerést futtat, négy várakozó feladatot engedélyez, és a várakozó bemenetek összméretét
100 MiB-ban korlátozza.

A brokeren belül az `ffprobe` egy privát helyi fájlt olvas; a rögzített formátumengedélyezési
lista kizárja a lejátszási listák és a manifesztek formátumait. Az engedélyezett MOV-családba
tartozó konténereknél a külső MOV-adathivatkozások alapértelmezés szerint le vannak tiltva, és a
rögzített parancs sem engedélyezi őket. Az `ffprobe` és az `ffmpeg` egyaránt kizárólag a
`file` protokollt engedélyező listát, egyetlen szálat és rögzített argumentumtömböket használ, parancsértelmező nélkül,
a futtatható állományokat pedig a `PATH` alapján oldja fel. A csatolt képként tárolt borítók adatfolyamai nem
jelöltek a lejátszásra. Minden lejátszható adatfolyamnak teljesítenie kell a korlátokat, és a
kifejezetten alapértelmezettként megjelölt adatfolyam elsőbbséget élvez a determinisztikus, legkisebb indexen alapuló
tartalékválasztással szemben. A videók legfeljebb 600 másodpercesek lehetnek, méretenként legfeljebb 8 192 képponttal és
33 554 432 forrásképponttal. Az FFmpeg 1–16, időközök felezőpontjaiban vett JPEG-képkockát mintavételez, a
hosszabb oldalt legfeljebb 1 024 képpontra kicsinyíti anélkül, hogy a kisebb bemeneteket felnagyítaná, és
soha nem kap URL-t. A mintavételezés alapértelmezés szerint `uniform`. Az opcionális
`scene_aware` és a kísérleti `segment_aware` stratégiák egy további,
rögzített FFmpeg-feldolgozási menetet végeznek a már ellenőrzött helyi adatfolyamon, korlátozott számú
`showinfo`-jelenetidőbélyeget választanak ki, és determinisztikusan ugyanazokra az
egyenletes felezőpontokra térnek vissza az észlelő hibája, időtúllépés, hibás kimenet vagy üres
jelölthalmaz esetén. A szegmenstudatos mód a felezőponti mintákat az
ellenőrzött jelenetintervallumokkal arányosan osztja el; a szegmenstudatos bizonyítékokat és a tartalék működést
alább részletezzük. A szigorú, 16 képkockás felső korlát
minden stratégiánál a kiválasztás után érvényesül. Ha egy jelenettudatos kérés kerete csak
egyetlen képkockát enged meg, akkor az aktív teljes videó vagy fókuszablak egyenletes felezőpontját
használja, és `policyEffective: uniform` értéket jelent: egyetlen kiválasztott jelenetképkocka
nem tudja megőrizni mindkét időbeli végpontot. A hívó opcionálisan megadhat egy
véges fókuszablakot (`start`/`end` másodpercben); a határokat a médiatartalom
időtartamára korlátozzák, a fordított vagy nem véges ablakokat elutasítják, és minden mintavételezési
stratégia kizárólag a normalizált intervallumon belül működik. Az így kapott
ablak bekerül a mintavételezési metaadatokba és a nem megbízható leírás
előtagjába is, hogy a további feldolgozást végző modellek meg tudják különböztetni a fókuszált részletet a teljes
idővonaltól.

A képleírás szemantikai fókusza külön, explicit beállítás. Az alapértelmezett `full`
elemzési mód megőrzi a meglévő képkockapromptot, és soha nem továbbítja a kérés
szövegét a képleíró modellnek. `focused` módban a híd csak a legutóbbi,
nem üres, felhasználó által írt `text`/`input_text` tartalmat olvassa be ugyanabból a Chat- vagy Responses-
konténerből, NFC-re normalizálja, összevonja a vezérlőkaraktereket és a térközkaraktereket,
és 500 Unicode-kódpontra korlátozza. Üres eredmény esetén pontosan a
`full` promptra tér vissza. A használható támpontot JSON-ként szerializálja egy erre kijelölt,
nem megbízható felhasználói kontextusblokkban, és az csak a megfigyelhető részleteknek adhat elsőbbséget;
nem írhatja felül azt a külön figyelmeztetést, amely tiltja a médiatartalomban látható
vagy hallható utasítások követését. A szöveges fókusz soha nem következtet `start`/`end` értékekre, és nem módosítja
az időbeli mintavételezőt.

#### FU-07 strukturális szegmensbizonyítékok

A `segment_aware` egyetlen, korlátozott előelemzési menetet végez a már ellenőrzött
helyi videó-adatfolyamon. A rögzített szűrőlánc először legfeljebb 320 képpont
szélességűre méretez, észleli a jelenetváltásokat és a kimerevített intervallumokat, majd másodpercenként 1 képkockát
mintavételez az elmosódottság, az átlagos luma, valamint a térbeli és időbeli információ meghatározásához. A menet
legfeljebb 600 strukturális mintára, egyetlen FFmpeg-/szűrőszálra, ugyanazokra a
kizárólag `file` protokollt és engedélyezett konténereket tartalmazó listákra, 1 MiB-os folyamatkimeneti korlátra,
valamint legfeljebb 30 másodpercre korlátozódik a broker közös megszakítási és határidőkeretén belül. Soha
nem fogad el parancsot, szűrőt, elérési utat vagy URL-t a kérésből.

A strukturális értékek determinisztikus mintavételezési bizonyítékok, nem pedig a videó szemantikai
megértésének eredményei. Nem következtetnek témákra, cselekvésekre, feliratokra, beszédre vagy felhasználói
szándékra. A jelenet- és kimerevítési határok szegmenseket alkotnak; a kimerevítés aránya, az elmosódottság,
az expozíció, a térbeli részletesség és az időbeli változás csak azt befolyásolja, hogyan oszlik el a meglévő
1–16 képkockás keret. Egy teljesen kimerevített szegmens legfeljebb egy képkockát kaphat,
míg a nem kimerevített szegmensek a fennmaradó keretért versenyeznek. Ha a határok
száma meghaladja a képkockákét, megmarad az idővonal egyenletes lefedettsége, így a gyors kezdeti vágások
nem rejthetnek el egy hosszú záró szegmenst. A kimerevítési határtól az 1 másodperces
elemzési felbontáson belül eső jelenethatárokat összevonják.

Hiányzó szűrők, hibás vagy üres bizonyítékok, észlelési hiba vagy a korlátozott
előelemzés időtúllépése esetén a rendszer folytatja a működést, pontosan az egyenletes felezőponti stratégiára visszatérve. A hívó általi
megszakítás vagy a broker határidejének lejárta nem engedi meg ezt a tartalék működést: leállítja a futó
alfolyamatot, megakadályozza a későbbi képkockakinyerést, a privát ideiglenes könyvtárfa pedig
a `finally` blokkban törlődik.

A `scripts/perf/video-bridge-fu07-eval.ts` determinisztikus, valódi FFmpeg-
tesztadatokat generál a deduplikálás utáni képleíróhívás-megtakarítás, az intenzív mozgás melletti keretelosztás,
az elmosódottsági/expozíciós/SI-TI bizonyítékok, a hosszú záró szakasszal végződő gyors vágások, valamint a fokozatos áttűnésekből eredő
téves pozitív találatok vizsgálatához. Rögzíti az előelemzés ténylegesen eltelt idejét, és ahol a `/usr/bin/time`
elérhető, az alfolyamat CPU-idejét és csúcs-RSS-értékét is. Minőségellenőrzései kizárólag strukturális ellenőrzési
orákulumok. A valódi képleíró modell minőségének státusza továbbra is `HOLD`, mert ehhez a tesztkörnyezethez nincs
engedélyezett végpont vagy rögzített értékelő. A pénzbeli megtakarítás státusza is `HOLD` marad,
kivéve, ha a `--caption-cost-per-call-usd` explicit pozitív, hívásonkénti
becslést ad meg; a szkript egyik eredményt sem találja ki.

Minden képkocka mérete legfeljebb 4 MiB, az összes nyers képkockáé együtt legfeljebb 23 MiB, a
szerializált közvetítői válaszé pedig legfeljebb 32 MiB lehet. A privát ideiglenes könyvtár törlése
a `finally` blokkban történik. Az OmniRoute nem tartalmazza az FFmpeg-et, és nem fogad el egyéni
elérési utat a végrehajtható állományhoz. A képaláírások generálása előtt a híd konzervatív vizuális
duplikátumszűrést végez: minden JPEG-et egy 16×16-os szürkeárnyalatos pufferre kicsinyít, és
csak a legutóbb megtartott képkockával hasonlítja össze. Ha a kért képaláírás-keret
egynél több képkockát engedélyez, a kinyerés egy
korlátozott jelöltkészletet biztosít, amely legfeljebb a keret kétszerese, de soha nem több 16 képkockánál.
A kért felső korlátot csak a duplikátumszűrés után alkalmazza; a végső ritkítás során az első és az utolsó
kiválasztott jelölt megmarad, ha a keret legalább
kettő. A verziózott
`grayscale-16x16-mean-cells-v2` szabályzat az átlagos luminanciaeltérés és
azon bélyegképcellák aránya közül a nagyobbat használja, amelyek normalizált eltérése legalább 0,05. A
duplikációs küszöb állandó értéke 0,04; ezt a kiszámíthatóság érdekében rögzítették, nem pedig
futásidejű beállításként tették elérhetővé. Ez a másodlagos,
nagy kontrasztra érzékeny jel megőrzi az apró mozgásokat és a látható szöveg változásait, amelyeket egy
kizárólag átlagon alapuló összehasonlítás elfedhet. Összehasonlítási vagy dekódolási hiba esetén a rendszer megtartja a képkockákat,
így megőrzi a lefedettséget. A kimeneti metaadatok külön jelzik a kinyert jelölteket, a sikeresen felhasznált
képkockákat és az eldobott vizuális duplikátumokat.

Egy kifejezetten megjelölt videórész időbélyeges áttekintő képlapot is kérhet. A
híd legfeljebb 4 oszlopos, 16 képkockából álló JPEG-rácsot készít. Minden 512 pixeles cella
alsó, nagy kontrasztú sávjába beégeti a forrás időbélyegét, miközben ugyanezek az időbélyegek
a szöveges metaadatokban is megmaradnak a későbbi összerendelés és ellenőrzés céljára. A teljes
JPEG mérete továbbra is legfeljebb 32 MiB lehet. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a
híd az egyedi JPEG-képkockákra tér vissza; a kliens általi megszakítás az
áttekintő képlap műveletén keresztül is továbbterjed.

Az éles használatba emelést alátámasztó bizonyítékok szándékosan elkülönülnek a szintetikus összeállítási
mikrobenchmarktól. A `scripts/perf/video-bridge-contact-sheet-eval.ts` egy
verziózott sémájú A/B tesztkeretrendszert határoz meg valódi, OpenAI-kompatibilis képfeldolgozó modellekhez. Méri
a szolgáltató által jelentett tokeneket, a teljes folyamat valós idejű késleltetését (beleértve a képlap összeállítását),
a modellhívások számát és a jegyzékben meghatározott tények megőrzését. A nyers modellválaszokat nem
írja a jelentésbe; csak az SHA-256 kivonatokat és az egyező tényazonosítókat őrzi meg. A
keretrendszer nem indít hálózati vagy fizetős modellhívást, kivéve, ha megadják az `--execute-real` kapcsolót, és
beállítják a `--model`, az `OMNIROUTE_BASE_URL` és az `OMNIROUTE_API_KEY` értékét. Ilyen
kifejezetten engedélyezett valódi futtatás nélkül a géppel olvasható döntés `HOLD` marad; a szintetikus
adatméret- és hívásszámmérések önmagukban nem bizonyítékai az éles használatra való alkalmasságnak.

A hívók opcionális `transcript.cues` tömböt csatolhatnak egy támogatott videó-
részhez, ha már rendelkeznek időben illesztett szöveggel. Minden szövegszegmensnek tartalmaznia kell egy `text` értéket, egy
véges, a vizsgálattal megállapított időtartamon belüli `start`/`end` intervallumot és egy engedélyezett
`source` értéket (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke
`1`, és `0` és `1` között kell maradnia. A teljesen azonos szövegszegmenseket a rendszer összevonja.
Az OmniRoute soha nem indít átírást ezekből a metaadatokból: az ellenőrzött szövegszegmenseket
a forrásukkal, megbízhatósági értékükkel és intervallumukkal együtt átmásolja a leírást tartalmazó eredménybe, és
nem megbízható megfigyelésként jeleníti meg őket a képkockák képaláírásai mellett. Az érvénytelen,
tartományon kívüli vagy eredetmegjelölés nélküli szöveget elutasítja ahelyett, hogy belekeverné a
képaláírások folyamába. A kéréstörzs mindkét átiratcsatornája `client` értékre normalizálja a megadott
eredetet, beleértve az önbevalláson alapuló `embedded` vagy `audio-bridge`
címkéket is. Ezeket a megbízható címkéket kizárólag egy szerveroldali felügyelet alatt álló adapter rendelheti hozzá
a csak kódból elérhető `trustedSource` argumentumon keresztül; a kérés JSON-mezője nem érheti el
ezt az argumentumot. Az átirat szövege az eredetétől függetlenül nem megbízható, médiából származó tartalom marad,
és soha nem határozhatja meg a jogosultságokat.

Egy haladó hívó `audioTranscript` sávot is megadhat ugyanahhoz a videóhoz;
ezt a rendszer a kliens által biztosított szövegként kezeli, nem pedig a szerveroldali átírás bizonyítékaként.
Az összevonási réteg a vizuális és hangalapú megfigyeléseket
közös határidővel és megszakítási jelzéssel futtatja, közös idővonalra rendezi őket, összevonja a
teljesen azonos elemeket, és részleges eredményt jelent, ha csak az egyik oldal jár sikerrel.
Az érvénytelen `audioTranscript` a teljes videó feldolgozásának meghiúsítása helyett ilyen részleges eredményre
vezet — a vizuális leírás megmarad, a hangág pedig egy megtisztított hibakódot rögzít.
Az ágankénti rendelkezésre állás, a részlegességet jelző jelző
és a megtisztított hibakódok megmaradnak a leírást tartalmazó eredményben,
a védelmi metaadatokban (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), az eredmény-gyorsítótár metaadataiban és a híd
összevonási számlálóiban. Az alapértelmezett Video Bridge feldolgozási útvonal nem indít beszédfelismerést,
és nem tölt le második médiapéldányt; e kifejezetten megadott sáv nélkül kizárólag
videót dolgoz fel.

**Átiratok megőrzése (#12150 P1).** Ez automatikusan érvényes, valahányszor a
Video Bridge (amely maga is külön bekapcsolást igényel) megjelenít egy átiratszegmenst — nincs külön
megőrzési kapcsoló. Amikor egy kérés bármilyen átiratszegmenst megjelenít (a hívó által megadott
`transcript` vagy egy összevont `audioTranscript` részeként), a védelmi mechanizmus
`videoBridgeObserved` jelöléssel látja el, és elkészíti a videóleírás kitakart másolatát —
egy azonos megjelenítésű változatot, amelyben minden szegmens szabad szöveges törzsét a
`[redacted-video-transcript]` helyettesíti. Ez a strukturált szegmensmező helyettesítésével készül,
még a karakterlánc összeállítása előtt (soha nem az összeolvasztott szöveg feldolgozásával, így semmilyen
szegmenstartalom — sem támadó jellegű, sem közönséges, beleértve a `]` karaktert tartalmazó törzseket, például
az `[inaudible]`/`[music]` értékeket — nem maradhat meg). A hívásnaplóban tartósan tárolt kéréstörzs
minden videóból származó szövegrészt erre a kitakart másolatra cserél,
tartalmi egyezés alapján; a `fullText` horgonyt újra kiolvassa a hívás előtti védelmi mechanizmus
végleges adataiból, így az egyezés akkor is sikeres, miután a lánc későbbi védelmi mechanizmusai (a személyes adatokat és
hitelesítő adatokat maszkoló elemek, 10/95-ös prioritással) helyben átírják a leírás szövegét, illetve miután a
rendszerprompt, az átadás és a memória befecskendezése átalakítja az üzenettömböt. A
modellnek továbbított törzs változatlan marad. Egy megfigyelt kérés emellett
nem hoz létre tartós Memory-bejegyzést (mind a kérésből, mind a válaszból történő kinyerés kimarad),
így a modell saját válasza sem másolhatja vissza az átirat szövegét a Memory tárba.

**Nyers videómezők (#12430).** Ha a bridge engedélyezve van, és a natív videótámogatás ismeretlen vagy hiányzik, a megadott `transcript`/`audioTranscript` mezők szintén aktiválják a `videoBridgeObserved` jelölést, még a leírás sikertelensége vagy a `maxVideos` korlát elérése után is. A `null` és az üres karakterlánc is számít; a hiányzó mezők és a nem videóhoz tartozó metaadatok nem. A megőrzött másolatokban ezeket a mezőket kitakarja a rendszer, vagy kihagyja a kérést, a gyorsítótárak és a Memory használatát pedig megkerüli.

Ezeken a tartalék útvonalakon a hívó érvényes szegmensei támogatott `text`/`input_text`
részekké válnak, nem pedig nem szabványos szolgáltatói mezőkké. A kérésben megadott mindkét sáv
nem megbízható `client` megfigyelés marad, kifejezett figyelmeztetéssel arra, hogy a videóról
nem készült leírás, és az időbélyegeket nem ellenőrizték a média alapján. A meglévő,
összesen 256 szegmenses/64 KiB-os, valamint a szegmensenkénti keretek a két sávra együttesen
érvényesek; az időbélyegeknek bele kell férniük a közvetítő 600 másodperces felső korlátjába és bármely megadott fókusz-
időablakba. Az érvénytelen sávokat a rendszer elveti, nem továbbítja őket tetszőleges szövegként; egy érvényes
társsáv továbbra is felhasználható, kivéve, ha az együttes keretüket túllépik. A null értékű és üres
mezők nem adnak hozzá szöveget. Ez a tartalék megoldás nem végez további médialetöltést vagy átírást.
Az átirat-kiterjesztés mezőit eltávolítja a tartalék videóhordozóból és annak
`video_url`/`source` objektumaiból. Az OpenAI átviteli engedélyezési listája továbbra is szigorú; az ismeretlen natív
támogatású videóhordozók elérhetők maradnak, az ismerten csak szöveges célok pedig biztonságos jelölőket tartanak meg.
A strukturált kitakart másolatok védik a hozzáfűzött átiratszöveget, miközben a
hívó tulajdonában lévő eredeti kérés változatlan marad. A natív támogatással rendelkező célok és
a letiltott bridge-ek megőrzik a meglévő megkerülési viselkedésüket.

A további megőrzött másolatok ugyanezt a megfigyeltkérés-jelzést használják. A nyers,
védelmi mechanizmus előtti klienskérés-pillanatképben, a memóriában függőben lévő kérésben és a korán
elutasított kérések naplójában a rendszer strukturálisan helyettesíti a videórészek átiratmezőit;
a feldolgozási folyamat szakaszai és a kontextusátadás által előállított karakterlánc-promptokat
a tartósan tárolt kéréstörzs rögzítési pontján takarja ki. A tartósan tárolt `video_content_removed` jelölő
biztosítja, hogy a `previous_response_id` alapú folytatás biztonságosan meghiúsuljon, ahelyett, hogy rekonstruálná
a szándékosan elvetett szöveget. Ha egy megfigyelt kérés a naplózás előtt elveszíti a
részenkénti kitakart másolatát, vagy a több videómásolat közül akár csak egy sem
egyezik a kérés későbbi módosításai után, a megőrzött kéréstörzs
teljes egészében kimarad a részlegesen kitakart átirat megőrzése helyett.

Megfigyelt kérés esetén a modell válasza az átirat bármely részét idézheti
strukturált szegmenshatár nélkül. Ezért a hívásnaplóban tartósan tárolt
`responseBody` helyére egy kihagyást jelző jelölő kerül; a részletes
feldolgozásifolyamat-artefaktumot (amely a szolgáltatói és kliensoldali törzseket, valamint a stream darabjait is tartalmazhatja)
a rendszer nem őrzi meg. A szemantikai, idempotencia- és következtetés-visszajátszási gyorsítótárak ennél a kérésnél
kihagyják az olvasást és az írást. A szolgáltatói kérés és a kliens számára látható
válasz változatlan marad. A korai keepalive bájtok kiürülnek az ideiglenes
pufferből, amikor a részletes artefaktum kimarad. A Kiro hibás EventStreamre vonatkozó
figyelmeztetése csak az adatok bájtszámát közli, a tartalmukat vagy a JSON-
elemző nyers hibaüzenetét soha.
Ez nem jelenti azt, hogy minden egyéb szolgáltatói vagy bővítménydiagnosztikát
auditáltak; a megőrzött adatok rögzítési pontjainak szélesebb körű átvizsgálását a #11658 követi nyomon.

A belső `/api/modality-bridge/video/drilldown` életciklus különálló,
loopback-/tokenhitelesítéssel védett gyorsítótár-infrastruktúra. Minden művelethez szükség van
egy kanonikus, átlátszatlan hozzáférési alanyazonosítóra is. Mielőtt egy éles környezetbeli hívót engedélyeznének, annak
ezt az azonosítót a hitelesített bérlőből kell származtatnia, és soha nem továbbíthat
a kliens által kiválasztott értéket. A gyorsítótárkulcsok ezt a hozzáférési alanyt kanonikus munkamenet- és
videóhivatkozás-azonosítókhoz kötik, csak az ezekből SHA-256-tal származtatott kulcsokat tárolják, és mind az olvasást,
mind a törlést ugyanarra a hozzáférési alanyra korlátozzák. A gyorsítótár bejegyzésenként legfeljebb 16 származtatott JPEG-
képkockát tárol, tíz perc után lejáratja őket, és támogatja a korlátozott
`start`/`end` olvasásokat vagy a munkamenet kifejezett törlését.

Minden hozzáférési alany legfeljebb 16 bejegyzésre és 64 MiB kanonikus JPEG-adatra korlátozott. Ezek
a korlátok függetlenek a globális, 64 bejegyzéses/256 MiB-os felső korláttól: a hozzáférési alany kvótájának
szűkössége csak az adott alany legrégebben használt bejegyzéseit távolítja el, mielőtt a globális
LRU-alapú eltávolításra sor kerülne. A lejárt bejegyzések a gyorsítótár használatakor mind a hozzáférési alany szerinti,
mind a globális nyilvántartásból törlődnek, míg a megszakítás és az érvényesítési hiba
nem véglegesít részleges cserét.

A gyorsítótár elutasítja a nem kanonikus Base64-adatokat, a túlzott kitöltést, a nem JPEG formátumú médiát, a hibás vagy
csonkolt JPEG-képeket, valamint azokat a JPEG-képeket, amelyek figyelmeztetést eredményeznek a teljes képre kiterjedő, korlátozott `sharp`
dekódolás során. Minden elfogadott képet kanonikus JPEG-ként kódol újra, a szélességet és a magasságot
a dekódolt bájtokból határozza meg a hívó által megadott mezők helyett, és eldobja az esetleges záró
poliglot bájtokat ahelyett, hogy megőrizné őket. Mindkét kvótába csak a korlátozott méretű, kanonikus tömörített puffer
számít bele. A JSON átviteli korlátja tartalmazza a Base64 többletét a dekódolt bemenet 32 MiB-os
felső határához. Minden
tárolt származtatott elem rögzíti az ellenőrzött JPEG-formátumot és -felbontást, a mintavételezési szabályzatot,
a származtatási verziót, a létrehozás idejét, a kiszolgáló által kiszámított tartalmi hash-t, valamint a hash-elt szülőhivatkozást
és a megbízható hívó által megadott szülőtartalom hash-ét. A megszakítást a rendszer
az aszinkron dekódolási és hash-számítási fázisok között, az atomi gyorsítótár-véglegesítés előtt ellenőrzi.

Ez a fejlesztési szakasz még nem kapcsol éles üzemi előállítót az útvonalhoz, és nem
biztosít többfelbontású változatválasztást. Az átlátszó Video Bridge kérésfeldolgozási
útvonal ezért nem végez többletmunkát, míg a bérlőhöz kötött biztonsági identitás származtatása és
a teljes FU-08 többfelbontású életciklus kifejezetten későbbi feladat marad,
nem pedig kész működésként dokumentált funkció.

A képkockákhoz a beállított Video modell egymás után készít leírást. Az üres
Video-felülbírálás a Vision beállítását örökli; ha mindkettő üres, a Vision
automatikus útválasztója választja ki a tényleges, képfeldolgozásra képes modellt. A sikeres leírások
az eredeti részt egy állandó `[Video description:` előtaggal helyettesítik, amely
a szöveget nem megbízható, médiából származó megfigyelésként is megjelöli, és arra utasítja a további
modelleket, hogy ne kövessék a médiában található utasításokat. A képkockaleírások gyorsítótárkulcsai
tartalmazzák a JPEG-bájtokat, a promptot, az időbélyeget és a tényleges modellt; csak a sikeres
leírások kerülnek gyorsítótárba. A gyorsítótár-bejegyzések megőrzik a leírást ténylegesen sikeresen előállító modellt,
beleértve a tartalék modellt is; a híd `mixed` értéket jelent, ha a különböző képkockákat
különböző modellek dolgozták fel. Gyorsítótár-találat esetén a rendszer ezt az előállítói identitást használja újra,
ahelyett, hogy átnevezné a kért útválasztási tervre. A teljes videó eredményének
gyorsítótárkulcsa minden olyan bemenetet tartalmaz, amely módosítja a kimenetet — a promptot, a tényleges
modellt, a mintavételezési szabályzatot, a képkockaszámot, a szemantikai elemzési módot, a normalizált fókusziránymutatás SHA-256
ujjlenyomatát, a fókuszablakot, a `transcript`,
az `audioTranscript` és a kontaktlap jelző értékét —, így ezek bármelyikének
módosítása gyorsítótár-melléfogást eredményez, soha nem elavult újrafelhasználást. A vizuális deduplikálási szabályzat
verziója, küszöbértéke és a jelölt képkockák korlátozott száma szintén kifejezetten szerepel az
eredmény-gyorsítótár kulcsában és metaadataiban; ezért egy szabályzatmódosítás nem használhat újra elavult,
teljes videóra vonatkozó leírást. Az eredmény-gyorsítótár v4 metaadatai a módot és az
ujjlenyomatot őrzik meg, a nyers felhasználói feladatot soha. A védelmi mechanizmus metaadatai a
kért és a tényleges elemzési módot is jelentik; a használható felhasználói szöveg nélkül kért `focused` mód
tényleges módjaként `full` jelenik meg.

A védelmi mechanizmus minden támogatott videórészt kinyer, de legfeljebb
`modalityBridgeVideoMaxVideos` darabot ír le. Olyan cél esetén, amelyről bizonyított, hogy
`supportsVideo === false`, a sikertelenül feldolgozott és a korlátot meghaladó videók explicit, biztonságos
szöveges jelölőkké alakulnak, így nem marad nyers videó. Ha a képesség ismeretlen, ezek a részek
megtartják a videót hordozó elemüket; az esetleges tartalék átirat a fenti korlátozott szöveges
átalakítást követi. A `supportsVideo === true` értékű célok megkerülik a hidat.
Az ügyfélkérés megszakítási jelzése továbbterjed a letöltésen, a közvetítő várólistáján,
az alfolyamatokon és a leíráskészítő hívásokon keresztül; a megszakítások a videók között leállítják a feldolgozást, és soha nem engedik
hiba esetén tovább a nyers médiát.

A futásidejű beállítások adatbázisban tárolódnak, és Zod-validáláson esnek át:

| Kulcs                               | Alapérték   | Tartomány / működés                                                                                                                     |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionális futásidejű funkció, külön engedélyezendő                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | A `full` megőrzi az általános leírásokat; a `focused` a legutóbbi felhasználói üzenet korlátozott, nem megbízható kontextusát használja |
| `modalityBridgeVideoModel`          | `""`        | A Vision Bridge modelljének öröklése                                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vagy arányos `segment_aware`; az észlelő hibája esetén visszaáll `uniform` értékre                             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                          |

A korábban eltárolt, 120 másodperc feletti Video-időtúllépési értékeket a rendszer a
közvetítő határidejére korlátozza; az e korlát feletti új beállítások mentését elutasítja.
A `GET /api/modality-bridge/video/runtime` a hitelesítés vagy a futtatókörnyezet vizsgálata előtt megköveteli,
hogy megbízható jelölés igazolja a visszacsatolási címről érkező helyi eredetet, majd felügyeleti
hitelesítést követel meg. Csak az `available` értéket, a megtisztított FFmpeg/ffprobe-verziókat és egy rögzített
indokot ad vissza, ha a futtatókörnyezet nem érhető el. A belső kinyerési végpont nem
nyilvános feltöltési API: a várólista telítődése `503` választ és `Retry-After` fejlécet, a hívó
kapcsolatának megszakadása `499` választ, a közvetítő rögzített határidejének lejárta pedig `504` választ eredményez. Az átalakított válaszok hozzáadják a
`video->text;model=<visionModel>;parts=<videos>` értéket a központi
`x-omniroute-modality-bridge` fejléchez a Vision- vagy Audio-szegmensek eltávolítása nélkül.

### Személyesadat-maszkoló (`piiMasker.ts`)

**Mindkét** szakaszban fut.

- A **`preCall`** klónozza az adattartalmat, bejárja a `system`, `messages`, `input` és
  `prompt` elemeket (az egyszerű karakterlánc-elemeket is beleértve), és alkalmazza a `processPII()` függvényt (innen:
  `@/shared/utils/inputSanitizer`) a karakterlánc típusú `content`/`text` mezőkre. Ha
  `PII_REDACTION_ENABLED=true`, az észlelt személyazonosításra alkalmas adatok (PII) kitakarásra kerülnek a kimenő
  adattartalomban. Ez független az `INPUT_SANITIZER_MODE` értékétől (amely csak a
  promptinjektálási szabályzatot vezérli). Ha a kitakarás ki van kapcsolva, a hívás rögzíti az észlelések
  számát a tartalom átírása nélkül.
- A **`postCall`** mély másolatot készít a válaszról, futtatja a `sanitizePIIResponse()` függvényt és
  a Responses API adatszerkezetéhez igazodó maszkolót (`maskResponsesOutput` — lefedi az
  `output_text` és az `output[].content[].text` mezőket). Ha bármilyen kitakarás történik, a
  módosított válasz váltja fel az eredetit.

A védelmi mechanizmus soha nem blokkol; csak metaadatokkal egészít ki (`meta.detections`,
`meta.redacted`) vagy átír.

#### Típusonkénti kiválasztás, egyéni minták és észlelési számlálók

A **Vezérlőpult → Beállítások → Biztonság → PII-maszkolás** határozza meg, hogy _mi_ legyen maszkolva.
Nem kapcsolja be a maszkolást: ezt továbbra is a `PII_REDACTION_ENABLED` (kérés) és
a `PII_RESPONSE_SANITIZATION` (válasz + SSE) vezérli; alapértelmezés szerint mindkettő ki van kapcsolva.

- **Típusonkénti kiválasztás** — a beépített azonosítók a
  `src/shared/constants/piiTypes.ts` fájlban találhatók (`PII_BUILTIN_TYPES`). Ha nincs beállítva, minden
  típusra vonatkozik (ez volt a működés a beállítás bevezetése előtt). A kérésfeldolgozó motor
  `ssn_us` mintája az `ssn` típusnak felel meg. A sablonok (Minimális, Általános, Pénzügyi,
  Brazil, USA, Teljes) csak a felhasználói felület jelölőnégyzeteit állítják be.
- **Egyéni minták** — legfeljebb 20 reguláris kifejezés vagy helyettesítő karakteres minta (`*` = legfeljebb 64
  nem térközjellegű karakter, `?` = egy ilyen karakter). A találatok helyére `[CUSTOM_REDACTED]` kerül.
  Minden minta áthalad a `compilePiiCustomPattern()` függvényen
  (`src/shared/utils/piiCustomPatterns.ts`): legfeljebb 500 karakter hosszú lehet, csak a
  `g i m s u` jelzők engedélyezettek, sikeresen le kell fordulnia, át kell mennie a `safe-regex` ellenőrzésén (katasztrofális
  visszalépés), és nem illeszkedhet üres karakterláncra vagy kitakarási helyőrzőre.
  A feltételeknek nem megfelelő mintát a rendszer mentéskor és teszteléskor is elutasítja, a tárolt sorok közül pedig
  a nem megfelelőket futásidőben kihagyja ahelyett, hogy lefordítaná őket. Az egyéni minták csak
  bekapcsolt maszkolás mellett futnak.
- **Észlelési számlálók** — típusonkénti darabszámok (soha nem az illeszkedő értékek), amelyek
  a memóriában tárolódnak, és újraindításkor nullázódnak (`src/lib/pii/piiDetectionStats.ts`). Csak
  bekapcsolt maszkolás mellett növekednek.

A beállítások a `key_value` táblában találhatók (névtér: `pii_settings`,
`src/lib/db/piiSettings.ts`), és olvasásuk 1 másodperces gyorsítótáron keresztül történik. API:

| Metódus | Útvonal                  | Rendeltetés                                                                    |
| ------- | ------------------------ | ------------------------------------------------------------------------------ |
| `GET`   | `/api/settings/pii`      | Jelzőállapot, `enabledTypes`, `customPatterns`, észlelési számlálók            |
| `PUT`   | `/api/settings/pii`      | Az `enabledTypes` (`null` = mind) és/vagy a `customPatterns` cseréje           |
| `POST`  | `/api/settings/pii/test` | Egy minta próbafuttatása legfeljebb 8 KB-os mintaszövegen; semmi sem tárolódik |

Mindhárom felügyeleti hitelesítést igényel, és Zod segítségével ellenőrzi a törzset
(`src/shared/validation/schemas/piiSettings.ts`).

### Promptinjektálás (`promptInjection.ts`)

Észleli a felhasználó által megadott tartalomban található támadó jellegű struktúrákat, és érvényesíti a
beállított szabályzatot. A működést környezeti változók és konstruktorban megadott
beállítások vezérlik:

| Beállítás         | Környezeti változó                                                                                        | Alapérték | Hatás                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engedélyezve      | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`    | `false` esetén a védelmi mechanizmus további feldolgozás nélkül visszatér.                                                                                                                                                            |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`    | Injektálási szabályzat: `block`, `warn` vagy `log`. (A `redact` visszamenőleges kompatibilitási okokból elfogadott, de **nem** távolítja el az injektált szöveget; a kérés PII-adatainak átírását a `PII_REDACTION_ENABLED` vezérli.) |
| Blokkolási küszöb | `blockThreshold` beállítás / `INPUT_SANITIZER_BLOCK_THRESHOLD` (álnév: `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | A blokkoláshoz szükséges minimális súlyosság. Alapértelmezés szerint a közepes súlyosság csak megfigyelést eredményez.                                                                                                                |

**A módok elsőbbségi sorrendje** (`getMode`): a hívó `options.mode` értéke →
`INJECTION_GUARD_MODE` **adatbázisbeli funkciójelző-felülbírálás** (Vezérlőpult → Beállítások →
Funkciójelzők) → `INJECTION_GUARD_MODE` környezeti változó → `INPUT_SANITIZER_MODE` környezeti változó →
`warn`. A vezérlőpulton megadott felülbírálás tehát elsőbbséget élvez a környezeti változókkal szemben, így a Funkciójelzők
felülete élőben vezérli a futó védelmi mechanizmust (újraindítás nélkül). Az adatbázis-olvasás hibatűrő:
hiba esetén a védelmi mechanizmus visszatér a környezeti változókon alapuló működéshez, ha pedig nincs
felülbírálás beállítva, a működés megegyezik a kizárólag környezeti változókon alapuló feloldással.

Észlelési források:

1. A `sanitizeRequest()` az `@/shared/utils/inputSanitizer` modulból (a feldolgozási folyamat
   más részein is használt közös észlelőkészlet).
2. A beépített `DEFAULT_GUARD_PATTERNS` (jelenleg `system_override_inline` és
   `markdown_system_block`, mindkettő `high` súlyosságú).
3. A konstruktor beállításain keresztül opcionálisan átadott `customPatterns` (karakterláncok, reguláris kifejezések
   vagy `{ name, pattern, severity }` rekordok).

Ha `mode === "block"`, **és** legalább egy észlelés eléri a súlyossági
küszöböt, a `preCall` visszatérési értéke `{ block: true, message: "Request rejected:
suspicious content detected" }`. A `warn`/`log` módokban a védelmi mechanizmus naplóz, de
engedélyezi a hívást. A közös `evaluatePromptInjection()` segédfüggvény szintén exportálva van
azon hívók számára, amelyek a promptokat a regiszter megkerülésével szeretnék kiértékelni.

**Vizsgálati korlát (v3.8.20):** a detektor az összefűzött promptszövegnek csak az **első 16 KB-ját**
vizsgálja — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bájt) a
`src/shared/utils/inputSanitizer.ts` fájlban. A `detectInjection()` és az
`evaluatePromptInjection()` egyaránt végrehajtja a `slice(0, MAX_INJECTION_SCAN_BYTES)` műveletet a
mintákat feldolgozó ciklus futtatása előtt. Az injektálási utasítások a bemenet elejéhez közel helyezkednek el, így ez
korlátozza a reguláris kifejezések CPU-terhelését és a szemétgyűjtés költségét a több száz KB-os adatoknál anélkül, hogy gyengítené az észlelést (vö.
#3932, #4041).

### Hitelesítőadat-maszkoló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, az alapértelmezett lánc utolsó elemeként (`95` prioritással). Kitakarja
az ismert API-kulcs- és titkostoken-mintákat a kimenő adatokból (üzenettartalom,
eszközhívási argumentumok, eszközeredmények), **valamint** a szolgáltató válaszából, így a
promptba beillesztett (vagy egy eszközeredményben visszaadott) hitelesítő adat nem szivárog ki
sem a külső szolgáltatóhoz, sem vissza az ügyfélhez.

- **Csak kifejezett engedélyezéssel**, a személyazonosításra alkalmas adatok kitakarásával azonos elv szerint (a 20. szigorú szabályhoz kapcsolódóan):
  le van tiltva, kivéve, ha `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kikapcsolt állapotban a védelmi mechanizmus nem végez műveletet —
  soha nem blokkol és nem ír át semmit.
- A `redactCredentials()` bejárja a teljes adat-/válaszfát (`walkValue()`,
  prototípusszennyezés ellen védett, a `WeakSet` révén ciklusbiztos), és a találatokat
  `[REDACTED:<type>]` helyőrzőre cseréli, csak a ténylegesen
  megváltozott ágakat klónozva.
- A `CREDENTIAL_PATTERNS` lefedi az LLM-szolgáltatók kulcsait (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), a VCS-/SaaS-tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), a fizetési kulcsokat (Stripe, Square), a felhőszolgáltatási
  kulcsokat (AWS-hozzáférési kulcs, Twilio, SendGrid, Mailgun), a privát kulcsokat / JWT-ket,
  a hitelesítő adatokat tartalmazó kapcsolati karakterláncokat (`mongodb://user:pass@...` stb.), valamint
  egy általános `Authorization`/`x-api-key`/`api-key`/`apikey` fejlécérték-
  mintát. A fejlécformátumú kulcsok (`authorization`, `x-api-key`, `api-key`,
  `apikey`) kitakarása strukturálisan történik (csak az értéké, az olyan sémaelótagok megőrzésével, mint a
  `Bearer `/`Basic `), nem pedig az általános szöveges reguláris kifejezéssel.
- A védelmi mechanizmus soha nem blokkol; csak átír (`modifiedPayload` /
  `modifiedResponse`) és metaadatokkal lát el (`meta.credentialsRedacted`, `meta.count`).

Regresszió elleni védelem: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén megszakad a lánc végrehajtása
  message?: string; // blokkoláskor jelenik meg
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védelmi szabály `void`, `{}` vagy
`{ block: false }` visszaadásával jelzi, hogy „nincs változás”. A `modifiedPayload`/`modifiedResponse` visszaadása lecseréli
a láncon továbbhaladó értéket a következő védelmi szabályok számára.
A `signal?: AbortSignal` a hívó életciklusát közvetíti a védelmi szabályok felé. A kérés megszakítása szándékos, hiba esetén továbbengedő kivétel: a médiaillesztők leállítják a feldolgozást és elvégzik a takarítást anélkül, hogy visszaállítanák a nyers médiát egy olyan cél számára, amelyről tudható, hogy nem támogatja azt.

## Nyilvántartás (`registry.ts`)

Az egyetlen példányban létező `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védelmi szabályt (vagy a normalizált név alapján lecseréli), és
  újrarendezi a szabályokat a `priority` növekvő sorrendjében.
- `clear()` / `list()` — adminisztrációs segédfüggvények.
- `runPreCallHooks(payload, context)` — végigmegy az aktív védelmi szabályokon, a
  `modifiedPayload` révén továbbadja a kérés tartalmát, és az első `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és igény szerint
  újraregisztrálja az alapértelmezett szabályokat a tesztek tiszta elkülönítéséhez.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }` értéket ad vissza,
ahol a `results` egy `GuardrailExecutionResult` rekordokból álló tömb, amely
védelmi szabályonként tartalmazza a nyomkövetéshez hasznos
`blocked`, `skipped`, `modified`, `error` és `meta` mezőket.

### Védelmi szabályok letiltása kérésenként

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti az aktuális
kérésnél kihagyandó védelmi szabályok neveit egy ismétlődésmentes listába.
Öt csatorna áll rendelkezésre, amelyeket a következő sorrendben olvas be és egyesít egyetlen listává
(az ismétlődések kiszűrésekor az első előfordulás marad meg):

1. `apiKeyInfo.disabledGuardrails`
2. A kéréstörzs `disabledGuardrails` mezője (legfelső szinten)
3. A kéréstörzs `metadata.disabledGuardrails` mezője (csak ha a `metadata` objektum)
4. Az `x-omniroute-disabled-guardrails` fejléc
5. A régi `x-disabled-guardrails` fejléc

Mind az öt csatorna egyesítésre kerül, a két fejlécet is beleértve: ha az
`x-omniroute-disabled-guardrails` és az `x-disabled-guardrails` fejlécet is elküldik, a rendszer
a listáik uniójában szereplő szabályokat hagyja ki, és egy üres új fejléc már nem fedi el a régit
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), javítva:
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Az értékek karakterláncok tömbjei vagy vesszővel elválasztott karakterláncok lehetnek; a nevek elejéről és végéről eltávolításra kerülnek a szóközök,
majd a rendszer kisbetűs kebab-case formára normalizálja őket (`pii_masker` → `pii-masker`), az üres
elemeket pedig elhagyja. Az eredmény a `context.disabledGuardrails` mezőn keresztül jut el
a nyilvántartáshoz, amely kihagyja az egyező védelmi szabályokat (`skipped: true` a `results` tömbben).

A letiltási lista csak a **nyilvántartásra** van hatással. A promptinjektálás elleni védelem `block` módja
kötelező védelmi határ: az injektálás elleni köztes réteg
(`src/middleware/promptInjectionGuard.ts`) a `evaluatePromptInjection()`
függvényt a hívó által szabályozható letiltási lista nélkül hívja meg (a korábban benne szereplő, hatástalan
`resolveDisabledGuardrails({ body })` hívást eltávolították:
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), így a `prompt-injection`
szabályt letiltó kérés `block` módban továbbra is elutasításra kerül. Ez szándékos
működés. A letiltási csatornákat a hívó szabályozza (kéréstörzs,
metaadatok, fejlécek), és a hívó nem kapcsolhat ki olyan biztonsági
védelmet, amelyet az üzemeltető állított be
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). A fejlécek
uniója a [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
alapján csak azt módosítja, hogy a nyilvántartás mely védelmi szabályokat hagyja ki; nem teszi lehetővé az ügyfél számára
a köztes réteg megkerülését. A kulcsonkénti és csoportonkénti kötelező védelmi szabályzatokat
a v4 RFC követi nyomon: [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Lásd: [Lefedettség és korlátok](#coverage-and-limits).

## Végrehajtási sorrend

A `src/sse/handlers/chat.ts` és az
`open-sse/handlers/chatCore.ts` fájlokon áthaladó minden kérés esetén (a
[Lefedettség és korlátok](#coverage-and-limits) alatt felsorolt, chatcsaládba tartozó útvonalakon):

1. A `resolveDisabledGuardrails(...)` összeállítja a kihagyási listát az API-kulcsból, a törzsből
   és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő
   prioritási sorrendben futtatja a védelmi mechanizmusokat:
   - A letiltott védelmi mechanizmusok `skipped` állapottal kerülnek rögzítésre.
   - Minden védelmi mechanizmus `preCall` hookja átírhatja a hasznos adatterhet a `modifiedPayload` segítségével.
   - Az első `block: true` megszakítja a láncot, és a kezelő
     a védelmi mechanizmus elutasító válaszát adja vissza.
3. Az (esetleg átírt) hasznos adatteher a kombinált útválasztáshoz és a háttérszolgáltatóhoz
   történő továbbításhoz kerül.
4. **Csak nem streamelt válaszoknál:** a válasz összeállítása után a
   `guardrailRegistry.runPostCallHooks(...)` ugyanazt a láncot futtatja a
   válaszon. A `block: true` itt eldobja a háttérszolgáltató válaszát, és HTTP 400-at ad vissza. A streamelt válaszok ezt a lépést teljesen kihagyják.

A kivételt dobó védelmi mechanizmusok `error: <message>` értékkel kerülnek rögzítésre, és a
`logger.warn` naplózza őket, de a lánc folytatódik — a kialakítás szándékosan hiba esetén is továbbenged.

## Lefedettség és korlátok

A védelmi mechanizmusok nyilvántartása csak a chatfeldolgozási folyamatba van bekötve. Ezeket a korlátokat a
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` és a
`tests/unit/guardrail-pipeline-characterization.test.ts` rögzíti; a viselkedés változásakor
tudatosan frissítse ezeket a teszteket.

### Hol futnak a hookok

| Hook / vezérlő                       | Hol fut                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                    | A `handleChat` (`src/sse/handlers/chat.ts`) által kezelt kéréseken: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (és `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, valamint a Telegram chatproxyn. Továbbá az irányítópult `/api/guardrails/test` tesztvégpontján. A hívás előtti blokkolás HTTP 400-at ad vissza. |
| `runPostCallHooks`                   | Kizárólag **nem streamelt** chatválaszokon (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). A streamelt válaszok soha nem jutnak el ide.                                                                                                                                                                                                                                                                                                          |
| Streamelt PII                        | A `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), amelyet a `streamingPipeline.ts` kapcsol a folyamatba, ha a `PII_RESPONSE_SANITIZATION` be van kapcsolva. Ez nem védelmi mechanizmus, ezért a letiltási csatornák nem befolyásolják.                                                                                                                                                                                                     |
| Injekcióvédelmi middleware (örökölt) | Minden promptot tartalmazó `/v1` útvonalon, a chatcsaládot is beleértve (lásd az [útvonal-lefedettséget](#injection-guard-route-coverage--red-team-phase-8--block-d)). Kizárólag promptinjekció ellen.                                                                                                                                                                                                                                                   |

### Mire nem terjed ki

- **A média-, beágyazási és adatútvonalak** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) soha nem jutnak el a nyilvántartásig. Ott nem
  fut PII-maszkolás, hitelesítőadat-maszkolás vagy modalitások közötti áthidalás. Egyetlen
  ellenőrzésük az örökölt injekcióvédelmi middleware.
- **A streamelt válaszokon** nem futnak hívás utáni védelmi mechanizmusok: nincs hívás utáni `pii-masker` vagy
  `credential-masker`, és nincs hívás utáni blokkolás sem. Csak a streamelt PII-adatok
  átalakítása érvényesül (ha a `PII_RESPONSE_SANITIZATION` be van kapcsolva). A streamelt válaszban
  visszaadott hitelesítő adat nem kerül kitakarásra.
- **Letiltási csatornák és a middleware viszonya (szándékos működés):** a middleware
  a promptinjekciót az `evaluatePromptInjection()` saját meghívásával értékeli, anélkül,
  hogy átadna bármilyen, a hívó által vezérelt letiltási listát. A `block` mód kötelező
  védelmi határ, amelyet a hívó által vezérelt letiltások nem kerülhetnek meg, a chatcsalád útvonalain sem
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). A
  `prompt-injection` letiltása csak a nyilvántartásban szereplő védelmi mechanizmust hagyja ki.

### Mi fér hozzá a válaszhoz a hívás utáni ellenőrzés előtt

A nem streamelt feldolgozási ágon a sorrend: memóriakinyerés → beépített eszközök
végrehajtása → hívás utáni védelmi mechanizmusok → kilépés hívás utáni blokkolás esetén → tárolás a szemantikus gyorsítótárban.

- **A memória kinyerése** és **az eszközök végrehajtása** már azelőtt hozzáfér a válaszhoz, hogy a hívás utáni
  védelmi mechanizmusok átírhatnák vagy blokkolhatnák azt. A
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) óta a memória
  kinyerése során a kinyert szöveg áthalad a `sanitizePII` függvényen, ha a
  `PII_RESPONSE_SANITIZATION` be van kapcsolva (streamelt és nem streamelt válaszok esetén is), de a
  hívás utáni ellenőrzés által később blokkolt válasz addigra már elérhetővé vált a memória és az
  eszközök számára.
- **A szemantikus gyorsítótár** a hívás utáni ellenőrzést követően tárolja a választ, tehát az
  átírt választ tárolja, a blokkolt válasz pedig soha nem kerül a gyorsítótárba. A gyorsítótár bejegyzései
  API-kulcsonként vannak kulcsolva.

## Konfiguráció

A beépített védelmi mechanizmusok által beolvasott környezeti változók:

| Változó                               | Felhasználó komponens                            | Hatás                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                               | Az észlelés teljes letiltásához állítsa `false` értékre.                                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                               | Injektálási szabályzat: `warn`, `block` vagy `log`. A korábbi `redact` érték nem írja át az injektált szöveget.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                               | Az injektálás elleni védelem módja; egyben adatbázisbeli funkciókapcsoló is, amely **felülbírálja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                               | A `MODE=block` által elutasított minimális súlyossági szint: `high` (alapértelmezett), `medium` vagy `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                               | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` korábbi álneve.                                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                                     | Ha az értéke `true`, a kérésben szereplő személyazonosításra alkalmas adatokat (PII) kitakarja (az injektálási módtól függetlenül).     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a feldolgozás későbbi szakaszában) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                       |

A Modality Bridge védelmi mechanizmusai a futásidejű konfigurációt az adatbázis-alapú
beállítástárból (`getSettings()`) olvassák be, nem a környezeti változókból. A képfeldolgozás elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. A korábbi
`visionBridge*` kulcsok csak a dokumentált, egy ciklusra szóló beolvasási
tartalékmegoldásként fogadhatók el; a vezérlőpulton végzett írási műveletek az elsődleges kulcsokat használják. Az alapértelmezett értékek és a tartalékmegoldást
feloldó logika a `src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók, a korábbi
konstansok pedig a `src/shared/constants/visionBridgeDefaults.ts` fájlban maradtak meg.

A hangfeldolgozás a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` kulcsokat, valamint a közös
`modalityBridgeCache*` beállításokat használja. A hangfeldolgozásnál nincs korábbi kulcsokra épülő tartalékmegoldás, mert ezeket
a kulcsokat a Modality Bridge sémával együtt vezették be.

A videófeldolgozás a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` kulcsokat, valamint a közös `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mert az FFmpeg/ffprobe opcionális üzemeltetési
függőségek, a képkockák szöveges leírásának előállítása pedig növeli a késleltetést és a modellhasználat költségét.

## Egyéni védelmi szabályok

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

Lépések:

1. Hozza létre a `src/lib/guardrails/myGuardrail.ts` fájlt a `BaseGuardrail` kiterjesztésével.
2. Valósítsa meg a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` függvényből), vagy
   hívja meg a `guardrailRegistry.register(...)` metódust futásidőben — a nyilvántartás lecserél
   minden korábbi, azonos normalizált nevű védelmi szabályt.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert állapotból induljon.
Adja át a `{ registerDefaults: false }` paramétert, hogy üres nyilvántartással induljon, és
csak a tesztelt védelmi szabályokat regisztrálja. A Vision Bridge támogatja a függőséginjektálást
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ugyanezeket a
csatlakozási pontokat biztosítja a beállításokhoz, a képességekhez, az STT-modell kiválasztásához, a hitelesítő adatok
ellenőrzéséhez és az átíráshoz. A tesztek így mindkét folyamatot ellenőrizhetik adatbázis-
vagy hálózati hozzáférés nélkül.

## Lásd még

- `src/lib/guardrails/` — megvalósítás
- `src/shared/utils/inputSanitizer.ts` — közös detektor, amely a
  promptinjektálás észlelését és a személyazonosításra alkalmas adatok (PII) maszkolását végzi
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezett beállításai és
  a kötelezően hídon keresztül kezelt modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio közös futásidejű alapbeállításai
- `docs/architecture/RESILIENCE_GUIDE.md` — független réteg (áramkör-megszakító, várakozási idők)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálás elleni védelem útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálás elleni védelem (`createInjectionGuard` / `withInjectionGuard`) minden olyan útvonalat lefed,
amely felhasználói promptokat fogad. Figyelembe veszi az `INJECTION_GUARD_MODE` beállítást (alapértelmezés: `warn` = csak naplózás;
`block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus              | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveges (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkre terjed ki.

**Red-team tesztelés (éjszakánként, `nightly-llm-security.yml`):** a promptfoo ellenőrzi, hogy minden útvonal blokkolja-e
az OWASP-LLM korpuszt `INJECTION_GUARD_MODE=block` beállítás mellett; a garak próbákat futtat (titkos kulcs hiányában kimarad).
A `moderations` a következetesség érdekében szintén szerepel. A blokkolási mód kötelező védelmi határ: az `evaluatePromptInjection()`
figyelmen kívül hagyja a middleware által átadott, kérésenkénti letiltási listát, így a `disabledGuardrails`
**nem** mentesít egyetlen útvonalat sem alóla ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron + kézi
indítás) két feladatból áll:

- **`promptfoo-guard` (blokkoló)** — a `promptfoo eval -c promptfooconfig.yaml` parancsot futtatja
  `INJECTION_GUARD_MODE=block` beállítással. Minden támadó teszteset (pl. „hagyj figyelmen kívül minden
  korábbi utasítást…”, DAN-jellegű korlátozásmegkerülések) ellenőrzi, hogy a válasz tartalmazza-e az
  `error.code === "SECURITY_001"` értéket, vagyis a védelem valóban elutasította-e a kérést.
- **`garak` (tájékoztató)** — a garak eszközt futtatja `--probes promptinject,dan,leakreplay` kapcsolókkal
  egy helyi OmniRoute-példányon (`http://localhost:20128/v1`). Futása egy
  szolgáltatói titkos kulcshoz (`PROMPTFOO_PROVIDER_KEY`) kötött; ennek hiányában hiba nélkül kimarad, és a parancs végén
  `|| true` szerepel, így jelentést készít anélkül, hogy a CI sikertelenségét okozná.

A védelmi segédfüggvény (`createInjectionGuard` / `withInjectionGuard`)
lefedettsége minden promptot tartalmazó `/v1` útvonalra kiterjed; a prompt szövegét a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
a `src/shared/utils/inputSanitizer.ts` fájlban található `extractMessageContents()` nyeri ki.

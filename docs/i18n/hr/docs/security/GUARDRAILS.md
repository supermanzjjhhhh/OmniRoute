# Guardrails (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Mjerodavni izvor:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-10-17 — v3.8.52 (dodan odjeljak [Pokrivenost i ograničenja](#coverage-and-limits):
> koje rute i putanje odgovora obuhvaćaju kuke, objedinjena zaglavlja za onemogućavanje (#16412), način blokiranja
> ubrizgavanja kao obvezna granica (#16413) i što ima pristup odgovoru prije obrade nakon poziva)

Zaštitni mehanizmi provode sigurnosna pravila, pravila postupanja i transformacije sadržaja na granici
između OmniRoutea i uzvodnih pružatelja usluga. Svaki zaštitni mehanizam može pregledati (i
po potrebi odbiti, transformirati ili označiti) sadržaj zahtjeva (`preCall`) i
odgovore uzvodnih pružatelja (`postCall`).

Sustav **nastavlja rad u slučaju pogreške**: ako zaštitni mehanizam tijekom izvođenja baci iznimku, registar
bilježi pogrešku i nastavlja sa sljedećim zaštitnim mehanizmom umjesto da zahtjev završi neuspjehom.
Blokiranje je izričita odluka (`block: true`), nikad slučajnost.
Jedina je iznimka prekinuti zahtjev: kada se prekine pozivateljev `signal`,
zaštitni mehanizam koji baci iznimku uzrokuje odbijanje izvršavanja kuke umjesto da bude preskočen.

Kuke se **ne** izvršavaju na svakoj ruti ni za svaki odgovor. Pročitajte
[Pokrivenost i ograničenja](#coverage-and-limits) prije nego što se oslonite na zaštitni mehanizam kao
sigurnosnu kontrolu.

## Ugrađeni zaštitni mehanizmi

Registar pri uvozu automatski učitava šest zaštitnih mehanizama prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mehanizmi s manjim brojem prioriteta izvršavaju se **prvi**.

### Most za vizualni modalitet (`visionBridge.ts`) — Most modaliteta PR-1

Osnovni model GLM 5.3 i `glm-5.3-{low,high,max}` imaju izričite
metapodatke `supportsVision:false` u registru/specifikaciji. Varijante GLM 5.3 Flash
ostaju modeli s izvornom podrškom za obradu slika. Ruta `/v1/messages` alata Claude Code ulazi u
zajednički lanac zaštitnih mehanizama `handleChat` prije poziva **prije** pretvorbe iz Claudeova u OpenAI
format; ugniježđene slike u rezultatima alata `Read` moraju se opisati ili obraditi
prije nego što ih ta pretvorba prenese u OpenAI sadržaj `image_url` (#17069).

Presreće zahtjeve koji sadrže slike, a namijenjeni su **modelima bez podrške za obradu slika**, te ili
preusmjerava cijeli zahtjev na model koji podržava obradu slika ili zamjenjuje slikovne
dijelove tekstualnim opisima koje stvara podesivi model za obradu slika prije
uzvodnog poziva. Time se pružateljima koji podržavaju samo tekst omogućuje transparentna obrada
multimodalnog sadržaja.

Tijek:

1. Preskoči ako ciljni model već podržava obradu slika (osim ako se nalazi na
   popisu modela za koje je most obvezan `isVisionBridgeForcedModel`).
2. Izdvoji slikovne dijelove putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira **objedinjenom detektoru
   medijskih sadržaja** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   mjerodavnom izvoru koji se dijeli s filtrom kompatibilnosti kombinacija.
   Izdvajanje je ograničeno popisom dopuštenih oblika koje `replaceImageParts` može vratiti
   na izvorno mjesto (ugovor izdvajanje↔zamjena): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` i Responses
   API `input_image`. Podudarne slike ugniježđene unutar Claude Code
   `tool_result.content` i izlaza alata Responses također se izdvajaju i
   zamjenjuju na svojim izvornim putanjama; oblici koji služe samo kao pokazatelji obrađuju se filtrom
   kombinacija i ne izdvajaju se.
   Preskoči ako ništa nije pronađeno.
3. Razriješi konfiguraciju izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju **zamjenska opcija tijekom jednog
   ciklusa** (razdoblje za povratak na prethodno stanje). Preskoči prije bilo kakvog obilaska medijskih sadržaja kada je
   most onemogućen.
4. Odabir načina rada (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku) određuje
   preusmjeravanje ili opisivanje. Preusmjeravanje vraća `modifiedPayload` u kojem je zamijenjen samo `model`,
   uz metapodatke `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograniči broj slika na `maxImages`, sastavi upit prilagođen zadatku,
   provjeri predmemoriju opisa, pozovi model za obradu slika **paralelno**
   (`Promise.allSettled`) i umetni tekstualne dijelove `[Image N]: <description>` na
   njihova mjesta. Neuspjelo opisivanje vraća `null`: izvorna slika zadržava se za
   nepoznate ciljne modele ili one koji podržavaju obradu slika (#4012), ali **potvrđeni izravni ciljni
   model koji podržava samo tekst** ili kombinacija bez podrške za obradu slika dobiva izričit
   zamjenski tekst `(unavailable — no vision-capable provider connected)` za
   svaku neopisanu sliku, uključujući djelomične neuspjehe i slike iznad
   ograničenja broja poziva za opisivanje (#17069). Postojeći zamjenski postupak opisivanja za kombinacije u slučaju
   neuspjeha svih pokušaja ostaje na snazi (#8430).
6. Vrati `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Odabir načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, neizmijenjena (#6640/#7204): modeli koji nisu kombinirani / modeli `auto/` preusmjeravaju se na najbolji model za obradu slika, osim ako izvorni model već ima upotrebljive vjerodajnice (tada se izrađuje opis); kombinirani ciljevi uvijek koriste opisivanje.                                                    |
| `describe` |        | Uvijek izradi opis — blok za preusmjeravanje u potpunosti se preskače; uvijek odgovara model koji je korisnik odabrao.                                                                                                                                                                                                                      |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica **cilja** preusmjeravanja i dalje se primjenjuje — kada nema upotrebljivog ciljnog modela za obradu slika, most blokira zahtjev uz jasnu pogrešku umjesto opisivanja ili slanja neobrađenih slika cilju koji podržava samo tekst. |

Prisilni načini rada prekidaju daljnju obradu **prije** pokretanja automatske heuristike; ponašanje načina `auto`
identično je bajt po bajt zaštitnom mehanizmu prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivatelja ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most odabire samo
modele za preusmjeravanje i opisivanje koje ključ smije koristiti, na vezama koje ključ smije
koristiti. Poziv za opisivanje zatim uvijek prolazi kroz povratnu petlju OmniRoutea sa
zaglavljem `x-omniroute-self-loop-key-id`, pa primateljski zahtjev za razgovor
ponovno provodi pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno s nositeljskim tokenom povratne petlje, pa ono može samo
suziti pristup, a identifikator koji se ne može razriješiti odbija se.

Ako ključu nije dopušten nijedan model za obradu slika, **potvrđeni cilj koji podržava samo
tekst** lokalno odbija zahtjev sa slikom uz jasnu pogrešku HTTP 400 umjesto
prosljeđivanja bajtova slike nadređenom sustavu koji ih ne može obraditi (#17069). Za ciljeve s
nepoznatom ili izvornom podrškom za obradu slika, put opisivanja zadržava prethodno
ponašanje dopuštanja nastavka pri neuspjehu (metapodaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez tih ograničenja ponašaju se potpuno jednako kao
prije.

#### Uputa za opisivanje prilagođena zadatku (`modalityBridgeVisionTaskAware`)

Zadano **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćen na 500 znakova) osnovnoj
uputi za opisivanje, usmjeravajući opis prema onome što je korisnik doista zatražio
(obrazac codex-vision-proxy) i tražeći od modela za obradu slika da prepiše vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovna se uputa koristi neizmijenjena.

Vlastiti zahtjev povratne petlje za opisivanje, kompatibilan s OpenAI-jem (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`), uvijek traži `image_url.detail: "high"` —
bezuvjetno, za svakog pozivatelja/pružatelja usluge, neovisno o bilo kojem signalu klijenta.
Uzorkovanje s niskom razinom detalja smanjuje točnost OCR-a upravo za zadatak
prepisivanja teksta koji ova uputa traži, pa sam poziv za opisivanje uvijek traži visoku
razinu detalja bez obzira na to koju je razinu detalja koristio izvorni ulazni zahtjev. To
utječe samo na tijelo internog zahtjeva za opisivanje; ne mijenja način na koji
OmniRoute prosljeđuje pozivateljevu vlastitu vrijednost `image_url.detail` u primarnom zahtjevu —
ta se zadana vrijednost primjenjuje zasebno, i samo za prepoznate klijente OpenCode, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
povratne petlje za opisivanje koja koristi prijenosni format Anthropic nema polje `detail`
i na nju ne utječe nijedna od tih zadanih vrijednosti.

#### Ograničenje izlaza opisivanja (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se neizmijenjen, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz
sufiks `…` prije nego što se ponovno umetne kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke bogate detaljima u kojima je daljnjem modelu potreban
potpun prijepis; smanjite je kako biste ograničili potrošnju tokena kod opširnih modela za obradu slika.
Polje na nadzornoj ploči nalazi se na panelu naprednih postavki kartice za obradu slika
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i podiže svaku
vrijednost između 1 i 99 na donju granicu od 100, dok izričitu vrijednost `0`
ostavlja neizmijenjenom — `0` je sama po sebi valjana vrijednost u Zodu
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost za „nije postavljeno”.

#### Predmemorija opisivanja (`modalityBridge/bridgeCache.ts`)

Predmemorija izlaza opisivanja u memoriji s LRU-om i TTL-om, zajednička cijelom procesu.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uz
uokvirivanje prefiksom duljine (bez kolizija na granicama polja). Komponenta modela jest
**konfigurirani** model mosta, a ne model koji je stvarno odgovorio —
`callVisionModel` može interno prijeći na zamjenski model, a stvaranje ključa za svaki pokušaj
fragmentiralo bi predmemoriju. Neuspjela opisivanja nikada se ne pohranjuju u predmemoriju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (describe poziv u samopetlji / dohvat za base64)

Kada most sam dohvaća **udaljenu** sliku — Anthropic describe
samopoziv i pretvorba u base64 za claude-wire-format
(`ensureBase64ImagesForClaudeWire`), oboje putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — dobiveni podatkovni
URI prolazi kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije ugradnje u zahtjev
modelu za obradu slika. Prevelike slike smanjuju se na **2048px po duljoj stranici** (što odgovara
ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na poslužitelju), čime se smanjuju
količina prenesenih podataka i latencija bez promjene onoga što model za obradu slika vidi. Promjena veličine
koristi `sharp`, učitan dinamičkim uvozom: na platformi na kojoj se njegova nativna
binarna datoteka ne može učitati, `normalizeDataUri()` **nikada ne izbacuje iznimku** — umjesto toga
propušta izvorne bajtove bez izmjena, pa putanja za describe / pretvorbu u base64
uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvat koji nije vratio
sliku koju je moguće dekodirati) također se propuštaju bez izmjena. Ova normalizacija
ograničena je na slike koje most dohvaća za vlastiti samopoziv — nikada se
ne primjenjuje na neizmijenjeni sadržaj pozivatelja koji se samo prosljeđuje, u skladu s
načelom izmjena samo uz izričit pristanak (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` validiraju se pomoću Zoda u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i
skupina `modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene
vrijednosti `visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrijednost `modalityBridge*` koju je postavio administrator); naslijeđeni ključevi ostaju prihvaćeni kao
rezervni izvor pri čitanju tijekom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori pretvoreni postupkom describe sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
dodaje ga `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **ne dobivaju** zaglavlje — sadržaj nije izmijenjen, a zamjena
modela već je vidljiva u polju `model` u tijelu odgovora.

`GET /api/modality-bridge/stats` (administratorska autentifikacija, ista razina kao
`GET /api/settings`) vraća brojače po modalitetu pohranjene u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` kao nazivnik koristi `latencySamples`, a ne sve pokušaje;
operacija bez mjerenja vremena ne stvara lažni uzorak od nula milisekundi.
`bridged` ostaje unatrag kompatibilan zamjenski naziv za uspješne
pretvorbe; neuspjeli pokušaji ne povećavaju njegovu vrijednost.
Brojači se namjerno poništavaju pri ponovnom pokretanju procesa
(telemetrija, a ne obračun).

#### Konfiguracija nadzorne ploče

Namjenska stranica nadzorne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njezine kartice `Vision`, `Audio`
i `Video`, kojima se može pristupiti putem URL-a, čuvaju parametre upita pri promjeni vrijednosti `tab`.
Kartica Vision omogućuje uključivanje, odabir načina rada i modela (uključujući automatski
zadani odabir), oblikovanje upita prilagođeno zadatku, napredna ograničenja vremena čekanja, slika, duljine opisa i predmemorije,
brojače tijekom
izvođenja te ogledni zahtjev sa zaštitnim provjerama. Kartica Audio također je aktivna: omogućuje
uključivanje, odabir isključivo STT modela uz opciju automatskog odabira, ograničenja vremena čekanja i maksimalnog trajanja isječka, brojače
zvuka te ogledni test `input_audio`. Kartica Video funkcionalna je: prikazuje
stanje FFmpeg/ffprobe tijekom izvođenja — jedno od četiri izričita stanja sučelja (`unknown` dok
je provjera u tijeku ili se nije mogla dovršiti, `restricted` na
poslužitelju nadzorne ploče koji nije na adresi povratne petlje, gdje se provjera preskače na klijentskoj strani, `unavailable` nakon provjere
koja potvrdi da alati nedostaju ili `available` s verzijama FFmpeg/ffprobe) — trajno sprema
postavke uključivanja te ograničenja modela, kadrova, videozapisa i vremena čekanja, filtrira odabir modela na modele koji mogu obrađivati slike
i prikazuje brojače videozapisa.

Nekadašnja kartica Vision Bridge u postavkama umjetne inteligencije služi kao kompatibilna poveznica na
novu stranicu; više ne sadrži drugu kopiju obrasca. Odjeljak Pružatelji medijskih usluga također
povezuje tijekove rada Slika u tekst i Govor u tekst s odgovarajućim karticama Modality
Bridge, bez uklanjanja postojećeg okruženja za isprobavanje pretvorbe govora u tekst.

**Zaobilaženje kontrole prihvata za samopetlju:** kada se describe poziv usmjerava kroz OmniRouteovu
vlastitu samopetlju `/v1` (nestandardni model pružatelja), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se razriješenom
vjerodajnicom samopetlje — lokalnom posebnom vrijednošću `sk_omniroute` u lokalnom načinu rada ili
ključem iz varijable okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao administrator (#1350), kako bi
implementacije s `REQUIRE_API_KEY=true` i dalje mogle izvršavati describe poziv. Zaobilaženje
se odobrava samo za te točne vjerodajnice, pa vanjski klijenti ne mogu koristiti
zaglavlje za preskakanje kontrole prihvata.

Naslijeđene zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
nove zadane vrijednosti za način rada, prilagodbu zadatku i predmemoriju te razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam izlaže
opciju konstruktora `deps` kako bi testovi mogli umetnuti lažne implementacije `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do cilja za koji nije
poznato da prihvaća zvučni ulaz. Nikada ne preusmjerava zahtjev za razgovor: zvučni dijelovi
transkribiraju se putem postojeće višedijelne krajnje točke kompatibilne s OpenAI-jem, a
odabrani model za razgovor nastavlja rad s tekstualnim transkriptima.

Tijek:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Prednost
   imaju eksplicitni metapodaci registra pružatelja usluga, zatim statični metapodaci
   modela, a potom sinkronizirani `modalities_input`. Deklarirani popis ulaza bez
   `audio` daje `false`; ako nema dokaza o mogućnostima, ostaje `null`. I `false`
   i `null` aktiviraju konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite audiodijelove najviše
   razine koji se mogu zamijeniti iz svake poruke putem zajedničkog detektora
   `detectMediaParts()`. Podržani formati prijenosa jesu OpenAI `input_audio`,
   `audio_url` i `source.media_type: "audio/*"`. Ugniježđeni audio otkriva se radi
   usmjeravanja, ali se ne uklanja pri zamjeni dijelova. Obrada je ograničena
   postavkom `modalityBridgeAudioMaxClips`; kasniji dijelovi ostaju neizmijenjeni.
3. Poštujte konfigurirani `provider/model` ili dopustite funkciji
   `selectAudioBridgeModel()` da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS`
   stabilnim redoslijedom kataloga i odabere prvi model s upotrebljivim aktivnim
   vjerodajnicama pružatelja usluga.
4. `callAudioTranscription()` pretvara audio u obliku base64/data-URI u
   višedijelni `file` ili preuzima udaljeni `audio_url` putem zaštite odlaznog
   prometa koja dopušta samo javna odredišta, uz fiksiranje DNS-a i ograničenje
   od 25 MB. Zatim metodom POST šalje datoteku i odabrani model lokalnom
   povratnom pozivu na `/v1/audio/transcriptions`, uz autentifikaciju putem
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   dohvaćanje vjerodajnica, obradu razdoblja čekanja i ograničenja učestalosti
   zahtjeva te prosljeđivanje pružatelju usluga.
5. Uspješni pozivi zamjenjuju pripadajuće dijelove tekstom `[Audio N]: <transcript>`.
   Pozivi se izvršavaju uz `Promise.allSettled`: pojedinačni neuspjeh zadržava
   izvorni audiodio (ugovor #4012). Ako svi pozivi ne uspiju, a za ciljni model
   dokazano vrijedi `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznati ciljni model (`null`) rezultat u kojem nijedan poziv nije uspio
   ostaje neizmijenjen. Dokazano isključivo tekstualni ciljni model bez
   upotrebljivih STT vjerodajnica prima isti eksplicitni zamjenski tekst bez
   slanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL predmemoriju Modality Bridgea zajedničku
cijelom procesu. Ključ kombinira referencu na audio, stabilnu oznaku operacije
`audio-transcription` i odabrani STT model; neuspjesi se nikada ne pohranjuju u
predmemoriju. Pokušaji obrade audija ažuriraju zajedničke brojače `bridged`,
`cacheHits`, `failures` i `lastUsedAt`.
Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neizmijenjeni
zahtjevi ne dobivaju segment Audio Bridge.

Postavke tijekom izvođenja pohranjene su u bazi podataka i validirane Zodom:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajedničkom predmemorijom i dalje upravljaju `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće videodijelove najviše razine u polju `messages` za Chat Completions i
polju `input` za Responses API prije pozivanja ciljnog modela za koji nije
poznato da ima izvornu podršku za video.
Podržani su oblici `input_video`, `video_url`, `video_source`, HTTPS URL-ovi
i podatkovni URI-ji `data:video/*;base64,...`. Obični nazivi datoteka u tekstu ne
smatraju se videom.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zadužen je za obilazak zahtjeva,
provjeru mogućnosti i pravila, agregaciju po zahtjevu te sadržaj odgovora.
Obrada pojedinačnog videa — pribavljanje, predmemorija cjelokupnog rezultata,
opisivanje slijeda kadrova (koje objedinjuje svaki audiotranskript koji je
deklarirao pozivatelj) te metrike, prekid i čišćenje po pokušaju — skrivena je
iza funkcije `processVideoPart` u datoteci
`videoBridgePipeline.ts`, koja se poziva jednom po videodijelu unutar petlje
funkcije `preCall`.
Taj modul definira i eksplicitne granice sučelja `VideoMediaBrokerPort`
(pribavljanje bajtova i izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort`
(objedinjavanje audiotranskripta koji je deklarirao pozivatelj s opisima uzorkovanih
kadrova) i `VideoDrilldownPort` (granica trajne pohrane detaljne analize kadrova;
još nije povezana s funkcijom `processVideoPart` — trenutačno samo zasebna ruta
`/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Putanja obrade javnih `/v1` zahtjeva nikada ne uvozi niti poziva potproces.
Udaljeni videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64
videozapisi imaju konzervativno ograničenje dekodirane veličine od 36 MiB po
videozapisu kako bi model, poruke i prateća struktura mogli ostati unutar
ograničenja prihvata javnih JSON zahtjeva od 50 MiB. Duljina ugrađenog sadržaja
i procjene dekodirane veličine provjeravaju se prije dodjele memorije. HTTPS je
obvezan za početni udaljeni URL i svako preusmjeravanje, uz postojeću zaštitu
odlaznog prometa koja dopušta samo javna odredišta i fiksiranje DNS-a. Bajtovi zatim
prelaze točno određenu granicu internog posrednika
`POST /api/modality-bridge/video/extract`. Ta je ruta i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvaća samo pouzdane zahtjeve s povratne
adrese autentificirane na razini procesa te nikada ne prihvaća URL, putanju
datotečnog sustava, izvršnu datoteku ni popis argumenata. Cjevovod API-ja za
ograničavanje veličine tijela i inkrementalni čitač tijela u obrađivaču neovisno
provode ograničenje ulaza posrednika od 50 MiB. Njegov ograničeni red obrađuje
jedno izdvajanje odjednom, dopušta četiri posla na čekanju i ograničava ulazne
podatke na čekanju na 100 MiB.

Unutar posrednika `ffprobe` čita privatnu lokalnu datoteku; fiksni popis
dopuštenih formata isključuje formate popisa za reprodukciju i manifesta. Za dopuštene
spremnike iz obitelji MOV vanjske reference na MOV podatke ostaju onemogućene prema zadanim
postavkama, a fiksna naredba ih ne uključuje. I `ffprobe` i `ffmpeg` koriste
popis dopuštenih protokola koji sadrži samo `file`, jednu dretvu, fiksna polja argumenata, bez ljuske,
te izvršne datoteke pronađene putem `PATH`. Tokovi naslovnih slika priloženih kao slike nisu
kandidati za reprodukciju. Svi tokovi koji se mogu reproducirati moraju zadovoljavati ograničenja, a
izričito zadani tok ima prednost pred determinističkim odabirom toka s najnižim indeksom
kao rezervnom mogućnošću. Videozapisi su ograničeni na 600 sekundi, 8,192 piksela po dimenziji i
33,554,432 izvorna piksela. FFmpeg uzorkuje 1–16 JPEG kadrova iz središnjih točaka, smanjuje
dulji rub na najviše 1,024 piksela bez povećavanja manjih ulaza i
nikada ne prima URL. Uzorkovanje je prema zadanim postavkama `uniform`. Neobavezna
pravila `scene_aware` i eksperimentalno `segment_aware` izvode jedan dodatni
fiksni prolaz FFmpega nad već provjerenim lokalnim tokom, odabiru ograničen broj
vremenskih oznaka scena iz `showinfo` i deterministički se vraćaju na iste
ravnomjerno raspoređene središnje točke u slučaju kvara detektora, isteka vremena, neispravnog izlaza ili praznog
skupa kandidata. Način rada koji uzima u obzir segmente proporcionalno raspoređuje uzorke iz središnjih točaka
po provjerenim intervalima scena; podaci za taj način rada i njegovo ponašanje pri povratku na rezervnu mogućnost
detaljno su opisani u nastavku. Strogo ograničenje od 16 kadrova
primjenjuje se nakon odabira u svakom pravilu. Kada zahtjev koji uzima u obzir scene ima
budžet od samo jednog kadra, koristi ravnomjernu središnju točku aktivnog prozora cijelog videozapisa ili
prozora fokusa i prijavljuje `policyEffective: uniform`: jedan odabrani kadar scene
ne može očuvati oba vremenska kraja. Pozivatelj može neobavezno navesti
konačan prozor fokusa (`start`/`end` u sekundama); granice se ograničavaju na trajanje
medijskog sadržaja, prozori s obrnutim redoslijedom granica ili nekonačnim vrijednostima odbijaju se, a sva pravila
uzorkovanja provode se samo unutar normaliziranog intervala. Dobiveni
prozor uključuje se u metapodatke uzorkovanja i u nepouzdani prefiks
opisa kako bi modeli u daljnjoj obradi mogli razlikovati fokusirani isječak od cijele
vremenske crte.

Semantički fokus opisa zasebna je, izričita postavka. Zadani način
analize `full` zadržava postojeću uputu za kadrove i nikada ne prosljeđuje tekst
zahtjeva modelu za opisivanje. U načinu `focused` most čita samo najnoviji
neprazni korisnički `text`/`input_text` iz istog spremnika Chat ili Responses,
normalizira ga u NFC, sažima kontrolne znakove i bjeline
te ga ograničava na 500 Unicode kodnih točaka. Prazan rezultat vraća se na
potpuno istu uputu `full`. Upotrebljiv naputak serijalizira se kao JSON u zasebnom
bloku nepouzdanog korisničkog konteksta i smije samo dati prednost vidljivim pojedinostima;
ne može nadjačati zasebno upozorenje protiv slijeđenja uputa vidljivih
ili čujnih u medijskom sadržaju. Tekstualni fokus nikada ne izvodi `start`/`end` niti mijenja
vremensko uzorkovanje.

#### FU-07 strukturni podaci o segmentima

`segment_aware` koristi jedan ograničeni prolaz prethodne analize nad već provjerenim
lokalnim videotokom. Fiksni lanac filtara prvo skalira na širinu od najviše 320
piksela, otkriva promjene scena i zamrznute intervale, a zatim uzorkuje 1 kadar u
sekundi radi zamućenja, prosječne lume te prostornih/vremenskih informacija. Prolaz je
ograničen na 600 strukturnih uzoraka, jednu dretvu FFmpega/filtra, iste
popise dopuštenih protokola samo s `file` i dopuštenih spremnika, ograničenje izlaza procesa od 1 MiB
te najviše 30 sekundi unutar zajedničkog mehanizma prekida/krajnjeg roka posrednika. Nikada
ne prihvaća naredbu, filtar, putanju ni URL iz zahtjeva.

Strukturne vrijednosti deterministički su podaci za uzorkovanje, a ne semantičko
razumijevanje videozapisa. Iz njih se ne izvode subjekti, radnje, opisi, govor ni korisnikova
namjera. Granice scena i zamrzavanja tvore segmente; pokrivenost zamrzavanjem, zamućenje,
ekspozicija, prostorni detalji i vremenske promjene utječu samo na način raspodjele postojećeg
budžeta od 1–16 kadrova. Potpuno zamrznuti segment ograničen je na jedan kadar,
dok se nezamrznuti segmenti natječu za preostali budžet. Kada ima više granica
nego kadrova, zadržava se ravnomjerna pokrivenost vremenske crte kako brzi rezovi na početku
ne bi mogli sakriti dugi završni segment. Granice scena koje su unutar 1-sekundne
razlučivosti analize od granice zamrzavanja spajaju se.

Nedostajući filtri, neispravni/prazni podaci, pogreška detektora ili istek ograničenog
vremena prethodne analize dopuštaju nastavak uz potpuno isto pravilo ravnomjernih središnjih točaka. Prekid koji zatraži
pozivatelj ili istek krajnjeg roka posrednika ne dopušta takav nastavak: prekida aktivni
potproces, sprječava naknadno izdvajanje kadrova, a privatno privremeno stablo
uklanja se u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
testne primjere za uštede poziva za opisivanje nakon deduplikacije, raspodjelu budžeta pri
intenzivnom kretanju, podatke o zamućenju/ekspoziciji/SI-TI, brze rezove s dugim završetkom i lažno pozitivne
rezultate pri postupnom zatamnjenju. Bilježi proteklo vrijeme prethodne analize i, gdje je `/usr/bin/time`
dostupan, procesorsko vrijeme podređenog procesa i vršni RSS. Njegove provjere kvalitete samo su strukturne referentne
provjere. Stvarna kvaliteta modela za opisivanje ostaje `HOLD` jer ovaj testni sustav nema
ovlaštenu krajnju točku ni fiksni sustav za ocjenjivanje. Novčane uštede također ostaju `HOLD`
osim ako `--caption-cost-per-call-usd` ne navede izričitu pozitivnu procjenu po
pozivu; skripta nikada ne izmišlja nijedan rezultat.

Svaki je kadar ograničen na 4 MiB, svi neobrađeni kadrovi zajedno na 23 MiB, a
serijalizirani odgovor posrednika na 32 MiB. Privatni privremeni direktorij uklanja se
u bloku `finally`. OmniRoute ne uključuje FFmpeg i ne prihvaća prilagođenu
putanju izvršne datoteke. Prije izrade opisa most provodi konzervativan postupak vizualne
deduplikacije: svaki JPEG svodi se na međuspremnik u sivim tonovima veličine 16×16 i
uspoređuje samo s posljednjim zadržanim kadrom. Ako zatraženi broj kadrova
za opisivanje premašuje jedan, izdvajanje daje
ograničen skup kandidata s najviše dvostruko većim brojem kadrova od zatraženog, ali nikad više od 16 kadrova.
Zatraženo ograničenje primjenjuje se tek nakon deduplikacije, pri čemu se prvi i posljednji
odabrani kandidat zadržavaju tijekom konačnog prorjeđivanja ako je dopušten broj kadrova barem
dva. Verzijska
politika `grayscale-16x16-mean-cells-v2` upotrebljava veću vrijednost između srednje razlike lume i
udjela ćelija minijature čija je normalizirana razlika najmanje 0.05. Prag
za duplikate konstantna je vrijednost 0.04, odabrana radi predvidljivosti, umjesto da
bude dostupna kao postavka tijekom izvođenja. Taj dodatni
signal visokog kontrasta čuva sitne pokrete i promjene vidljivog teksta koje
usporedba samo prema srednjoj vrijednosti može prikriti. U slučaju pogreške usporednika ili dekodera postupak nastavlja bez odbacivanja kadra i zadržava
pokrivenost. Izlazni metapodaci zasebno navode izdvojene kandidate, uspješno upotrijebljene
kadrove i odbačene vizualne duplikate.

Izričito označen videodijel može zatražiti pregledni list s vremenskim oznakama.
Most izrađuje JPEG mrežu s najviše 4 stupca i 16 kadrova. U svaku ćeliju veličine 512 piksela
trajno se upisuje izvorna vremenska oznaka u donjoj traci visokog kontrasta, dok iste vremenske oznake
ostaju u tekstualnim metapodacima za naknadno povezivanje i reviziju. Veličina cijelog
JPEG-a i dalje je ograničena na 32 MiB. Ako `sharp` ne može dekodirati ili sastaviti mrežu,
most se vraća na pojedinačne JPEG kadrove; prekid koji pokrene klijent i dalje se prenosi
kroz postupak izrade preglednog lista.

Dokazi za prelazak u širu primjenu namjerno su odvojeni od sintetičkog
mikrotesta performansi sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira
A/B ispitni okvir s verzioniranom shemom za stvarne modele računalnog vida kompatibilne s OpenAI-jem. Mjeri
tokene koje prijavljuje pružatelj, ukupno proteklo vrijeme od početka do kraja (uključujući sastavljanje preglednog lista),
broj poziva modela i očuvanje činjenica definiranih manifestom. Neobrađeni odgovori modela ne
zapisuju se u izvješće; zadržavaju se samo SHA-256 sažeci i identifikatori podudarnih činjenica.
Ispitni okvir ne upućuje mrežne pozive ni plaćene pozive modela osim ako je proslijeđen `--execute-real` i
ako su konfigurirani `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez
tog izričitog stvarnog izvođenja njegova strojno čitljiva ocjena ostaje `HOLD`; sama sintetička
mjerenja veličine sadržaja i broja poziva nisu dokaz za prelazak u širu primjenu.

Pozivatelji mogu priložiti neobavezan niz `transcript.cues` podržanom videodijelu
ako već imaju vremenski usklađen tekst. Svaki segment mora sadržavati `text`,
konačan interval `start`/`end` unutar utvrđenog trajanja te vrijednost
`source` s popisa dopuštenih vrijednosti (`client`, `embedded` ili `audio-bridge`); zadana vrijednost za `confidence` jest
`1` i mora ostati između `0` i `1`. Potpuno jednaki segmenti spajaju se u jedan.
OmniRoute nikad ne pokreće transkripciju na temelju tih metapodataka: provjereni segmenti
kopiraju se u rezultat opisa zajedno s izvorom, pouzdanošću i intervalom te
se prikazuju kao nepouzdana opažanja uz opise kadrova. Nevaljan
tekst, tekst izvan dopuštenog raspona ili tekst bez podataka o podrijetlu odbacuje se umjesto da se uključi u
tok opisa. Oba kanala za transkript u tijelu zahtjeva normaliziraju navedeno
podrijetlo na `client`, uključujući samostalno navedene oznake `embedded` ili `audio-bridge`.
Samo adapter pod nadzorom poslužitelja može dodijeliti te pouzdane oznake putem
argumenta `trustedSource`, dostupnog isključivo iz koda; JSON polje zahtjeva ne može pristupiti
tom argumentu. Tekst transkripta ostaje nepouzdan sadržaj izveden iz medija,
bez obzira na podrijetlo, i nikad ne smije određivati autorizaciju.

Napredni pozivatelj može dostaviti zapis `audioTranscript` za isti videozapis;
on se tretira kao tekst koji je dostavio klijent, a ne kao dokaz poslužiteljske transkripcije.
Integracijski sloj spajanja obrađuje vizualna i zvučna opažanja uz
zajednički rok i signal za prekid, raspoređuje ih na zajedničku vremensku crtu, spaja
potpuno jednake duplikate i prijavljuje djelomičan rezultat kad uspije samo jedna strana.
Nevaljan `audioTranscript` dovodi do takvog djelomičnog rezultata — vizualni
opis zadržava se, a zvučna grana bilježi sanitizirani kod pogreške —
umjesto neuspjeha obrade cijelog videozapisa. Dostupnost svake grane, oznaka djelomičnog rezultata
i sanitizirani kodovi pogrešaka čuvaju se u rezultatu opisa, u
metapodacima zaštitnih mehanizama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima
spajanja mosta. Zadani način rada za Video Bridge ne poziva pretvorbu govora u tekst
niti preuzima drugu kopiju medija; bez tog izričito dostavljenog zapisa ostaje
isključivo videonačin rada.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji se i sam izričito uključuje) prikazuje segment transkripta — ne postoji zasebna
zastavica za zadržavanje. Kada zahtjev prikazuje bilo koji segment transkripta (`transcript`
koji je naveo pozivatelj ili objedinjeni `audioTranscript`), zaštitni mehanizam označava ga
kao `videoBridgeObserved` i stvara redigiranu kopiju opisa videozapisa —
identičan prikaz u kojem je slobodni tekst svakog segmenta zamijenjen oznakom
`[redacted-video-transcript]`, izrađenu zamjenom strukturiranog polja segmenta
prije sastavljanja niza znakova (nikad parsiranjem spljoštenog teksta, tako da nikakav sadržaj
segmenta — zlonamjeran ili običan, uključujući tekst koji sadrži `]`, kao što su
`[inaudible]`/`[music]` — ne može ostati). Trajno pohranjeno tijelo zahtjeva u zapisniku poziva zamjenjuje
svaki tekstualni dio izveden iz videozapisa tom redigiranom kopijom, uz podudaranje prema jednakosti
sadržaja; sidro `fullText` ponovno se čita iz konačnog sadržaja zaštitnog mehanizma
prije poziva, pa podudaranje i dalje uspijeva nakon što kasniji zaštitni mehanizmi u lancu (za maskiranje osobnih podataka i
vjerodajnica, s prioritetima 10/95) izmijene tekst opisa na mjestu i
nakon što umetanje sistemskih uputa, predaje konteksta ili memorije preoblikuje polje poruka. Tijelo
poslano uzvodno modelu ostaje nepromijenjeno. Zahtjev označen kao opažen također ne popunjava
trajnu memoriju (preskače se izdvajanje i iz zahtjeva i iz odgovora),
pa ni vlastiti odgovor modela ne može prenijeti tekst transkripta u memoriju.

**Sirova polja videozapisa (#12430).** Kada je most omogućen, a izvorna podrška za videozapise nepoznata ili ne postoji, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspješnog opisivanja ili dosezanja ograničenja `maxVideos`. `null` i prazni nizovi znakova računaju se; odsutna polja i metapodaci koji nisu povezani s videozapisom ne računaju se. U zadržanim kopijama ta se polja redigiraju ili se zahtjev izostavlja, a predmemorije i memorija zaobilaze se.

Na tim zamjenskim putanjama valjani segmenti koje je dostavio pozivatelj postaju podržani dijelovi `text`/`input_text`
umjesto nestandardnih polja pružatelja usluge. Oba zapisa dostavljena u zahtjevu
ostaju nepouzdana opažanja vrste `client`, s izričitim upozorenjem da videozapis
nije opisan i da vremenske oznake nisu provjerene u odnosu na medijski sadržaj. Postojeća
ukupna ograničenja od 256 segmenata/64 KiB te ograničenja po segmentu primjenjuju se na oba zapisa zajedno;
vremenske oznake moraju biti unutar posrednikova ograničenja od 600 sekundi i svakog zadanog vremenskog
prozora fokusa. Nevaljani zapisi odbacuju se, a ne prosljeđuju kao proizvoljan tekst; valjani
paralelni zapis i dalje se može upotrijebiti osim ako je premašeno njihovo zajedničko ograničenje. Polja s vrijednošću null ili prazna
polja ne dodaju tekst. Ovaj zamjenski postupak ne dodaje dohvaćanje medijskog sadržaja ni transkripciju.
Proširena polja transkripta uklanjaju se iz zamjenskog nosača videozapisa i njegovih
objekata `video_url`/`source`. Popis dopuštenih elemenata u prijenosnom formatu OpenAI ostaje strog; nosači videozapisa
s nepoznatom izvornom podrškom ostaju dostupni, a odredišta za koja je poznato da podržavaju samo tekst zadržavaju sigurne oznake.
Strukturirane redigirane kopije štite dodani tekst transkripta, dok
izvorni zahtjev u vlasništvu pozivatelja ostaje nepromijenjen. Odredišta s izvornom podrškom i
onemogućeni mostovi zadržavaju postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije upotrebljavaju isti signal opaženog zahtjeva. Sirova
snimka klijentskog zahtjeva prije zaštitnih mehanizama, zahtjev na čekanju u memoriji i zapisnik rano
odbijenih zahtjeva strukturno zamjenjuju polja transkripta u dijelovima videozapisa;
tekstualne upute koje sintetiziraju faze obradnog cjevovoda i predaja konteksta redigiraju se
na odredištu za trajnu pohranu tijela zahtjeva. Trajno pohranjena oznaka `video_content_removed`
uzrokuje da se nastavak putem `previous_response_id` pri nesigurnosti odbije umjesto da rekonstruira
tekst koji je namjerno odbačen. Ako opaženi zahtjev izgubi svoju
redigiranu kopiju za pojedini dio prije zapisivanja u zapisnik ili se čak i samo jedna od više redigiranih kopija videozapisa
ne podudara nakon kasnijih izmjena zahtjeva, zadržano tijelo zahtjeva
izostavlja se u cijelosti umjesto da se zadrži djelomično redigiran transkript.

Za opaženi zahtjev odgovor modela mogao bi citirati bilo koji dio
transkripta bez strukturirane granice segmenta. Njegov trajno pohranjeni
`responseBody` u zapisniku poziva stoga se zamjenjuje oznakom izostavljanja; detaljni
artefakt obradnog cjevovoda (koji može uključivati uzvodna/klijentska tijela i dijelove toka)
ne zadržava se. Semantičke predmemorije, predmemorije idempotentnosti i predmemorije ponovne reprodukcije zaključivanja zaobilaze
čitanje i pisanje za taj zahtjev. Zahtjev pružatelju usluge i odgovor vidljiv klijentu
ostaju nepromijenjeni. Rani bajtovi za održavanje veze uklanjaju se iz privremenog
međuspremnika kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom formatu EventStream
navodi samo broj bajtova sadržaja, nikad sam sadržaj ni sirovu pogrešku
JSON parsera.
Time se ne tvrdi da je provedena revizija svake nepovezane dijagnostike pružatelja usluge ili dodatka;
širi pregled odredišta za zadržavanje prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` zasebna je
infrastruktura predmemorije s autentifikacijom putem lokalne povratne veze/tokena. Svaka operacija također zahtijeva
kanonski neprozirni ID subjekta. Prije nego što se omogući pozivatelj u produkciji, taj ID mora
izvesti iz autentificiranog zakupca i nikad ne smije proslijediti
vrijednost koju je odabrao klijent. Ključevi predmemorije povezuju taj subjekt s kanonskim ID-ovima sesije i
referenci na videozapise, pohranjuju samo njihove ključeve izvedene algoritmom SHA-256 te ograničavaju i čitanje
i brisanje na isti subjekt. Predmemorija pohranjuje najviše 16 izvedenih JPEG
kadrova po unosu, uklanja ih nakon deset minuta i podržava ograničena
čitanja `start`/`end` ili izričito brisanje sesije.

Svaki subjekt ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja neovisna su o globalnom ograničenju od 64 unosa/256 MiB: pritisak na kvotu subjekta
uklanja samo najdulje nekorištene unose tog subjekta prije nego što se razmotri globalno
uklanjanje prema LRU-u. Istekli unosi uklanjaju se i iz evidencije subjekta i iz
globalne evidencije pri aktivnosti predmemorije, dok otkazivanje i neuspjela provjera valjanosti
ne dovode do pohrane djelomične zamjene.

Predmemorija odbacuje nekanonski Base64, prekomjernu dopunu, medije koji nisu JPEG, neispravne ili
nepotpune JPEG-ove te JPEG-ove koji izazovu upozorenje tijekom ograničenog dekodiranja cijele slike alatom `sharp`.
Svaku prihvaćenu sliku ponovno kodira kao kanonski JPEG, određuje širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivatelja te odbacuje sve završne
poliglotske bajtove umjesto da ih zadrži. U obje se kvote uračunava samo ograničeni kanonski komprimirani međuspremnik.
Ograničenje veličine JSON-a pri prijenosu uključuje dodatni prostor za Base64 uz gornju granicu dekodiranog ulaza od 32 MiB.
Svaka
pohranjena izvedenica bilježi svoj validirani JPEG format i razlučivost, pravila uzorkovanja,
verziju izvođenja, vrijeme izrade, sažetak sadržaja koji je izračunao poslužitelj te hashiranu referencu
na nadređeni sadržaj zajedno sa sažetkom nadređenog sadržaja pouzdanog pozivatelja. Otkazivanje se provjerava
između asinkronih faza dekodiranja i izračunavanja sažetka, prije atomskog upisa u predmemoriju.

Ova faza još ne povezuje produkcijski izvor s rutom i ne
omogućuje odabir varijanti različitih razlučivosti. Transparentni put zahtjeva kroz Video Bridge
stoga ne zahtijeva dodatan rad, dok izvođenje sigurnosnog subjekta vezanog uz zakupca i
cjelokupni životni ciklus više razlučivosti FU-08 ostaju izričito predviđeni za naknadni rad, umjesto
da se dokumentiraju kao dovršeno ponašanje.

Kadrovi se opisuju redom konfiguriranim modelom Video. Prazna
postavka nadjačavanja za Video nasljeđuje postavku Vision; ako su obje prazne, automatski usmjerivač Vision
odabire stvarni model s podrškom za obradu slike. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji ujedno
označava tekst kao nepouzdano opažanje izvedeno iz medija i upućuje modele u daljnjoj obradi
da ne slijede upute pronađene u mediju. Ključevi predmemorije opisa kadrova
uključuju JPEG bajtove, upit, vremensku oznaku i stvarni model; u predmemoriju se pohranjuju samo uspješni
opisi. Unosi u predmemoriji zadržavaju stvarni model koji je uspješno generirao opis,
uključujući zamjenski model; most prijavljuje `mixed` kada su različite kadrove
obradili različiti modeli. Pogodak u predmemoriji ponovno upotrebljava taj identitet modela
umjesto da ga preoznači kao zatraženi plan usmjeravanja. Ključ predmemorije rezultata za cijeli videozapis
obuhvaća svaki ulaz koji mijenja izlaz — upit, stvarni
model, pravila uzorkovanja, broj kadrova, način semantičke analize, SHA-256
otisak normalizirane smjernice fokusa, prozor fokusa, `transcript`,
`audioTranscript` i zastavicu kontaktnog lista — pa promjena bilo koje od tih
dimenzija znači promašaj u predmemoriji, a nikada ponovnu upotrebu zastarjelog rezultata. Verzija pravila vizualne
deduplikacije, prag i ograničeni broj kandidatskih kadrova također su izričito navedeni u
ključu predmemorije rezultata i metapodacima; promjena pravila stoga ne može ponovno upotrijebiti zastarjeli
opis cijelog videozapisa. Metapodaci predmemorije rezultata v4 čuvaju način rada i
otisak, ali nikada izvorni korisnički zadatak. Metapodaci zaštitnog mehanizma navode i
zatraženi i stvarni način analize; zatraženi način `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao stvarni način `full`.

Zaštitni mehanizam izdvaja svaki podržani videodijel, ali opisuje najviše
`modalityBridgeVideoMaxVideos` videozapisa. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspješno obrađeni videozapisi i oni iznad ograničenja postaju izričite sigurne
tekstne oznake, tako da nijedan neobrađeni videozapis ne ostaje. Kada je podrška nepoznata, ti dijelovi
zadržavaju svoj videonosač; svaki zamjenski transkript slijedi gore opisanu ograničenu tekstnu
pretvorbu. Ciljevi s `supportsVideo === true` zaobilaze most.
Signal prekida klijentskog zahtjeva prenosi se kroz preuzimanje, red čekanja posrednika,
potprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikada ne dopuštaju
prosljeđivanje neobrađenih medija u slučaju neuspjeha.

Postavke tijekom rada pohranjuju se u bazu podataka i validiraju alatom Zod:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                                |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Neobavezno tijekom rada, uz izričito uključivanje                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zadržava općenite opise; `focused` upotrebljava ograničen, nepouzdan kontekst posljednje korisničke poruke |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vision Bridge                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; pri neuspjehu detektora prelazi se na `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

Naslijeđene pohranjene vrijednosti vremenskog ograničenja za Video veće od 120 sekundi svode se na
krajnji rok posrednika; novi upisi postavki iznad tog ograničenja odbacuju se.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu potvrđenu lokalnost povratne petlje
prije autentifikacije ili provjere izvršnog okruženja, a zatim zahtijeva autentifikaciju
za upravljanje. Vraća samo `available`, pročišćene verzije FFmpeg/ffprobe i fiksni
razlog kada izvršno okruženje nije dostupno. Interna krajnja točka za izdvajanje nije
javni API za prijenos datoteka: zasićenje reda čekanja vraća `503` uz `Retry-After`, prekid veze
pozivatelja vraća `499`, a fiksni krajnji rok posrednika vraća `504`. Pretvoreni odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u središnje
zaglavlje `x-omniroute-modality-bridge` bez uklanjanja segmenata Vision ili Audio.

### Maskiranje osobnih podataka (`piiMasker.ts`)

Izvodi se u **obje** faze.

- **`preCall`** klonira sadržaj zahtjeva, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke koje su obični nizovi znakova) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na polja `content`/`text` čije su vrijednosti nizovi znakova. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni osobni podaci (PII) maskiraju se u odlaznom
  sadržaju zahtjeva. To je neovisno o `INPUT_SANITIZER_MODE` (koji upravlja samo
  pravilima za ubacivanje zlonamjernih uputa). Kada je maskiranje isključeno, poziv bilježi broj
  detekcija bez prepisivanja sadržaja.
- **`postCall`** stvara duboku kopiju odgovora, pokreće `sanitizePIIResponse()` te
  funkciju za maskiranje strukture Responses API-ja (`maskResponsesOutput` — obuhvaća
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog maskiranja,
  izmijenjeni odgovor zamjenjuje izvorni.

Zaštitni mehanizam nikada ne blokira; samo dodaje metapodatke (`meta.detections`,
`meta.redacted`) ili prepisuje sadržaj.

#### Odabir po vrsti, prilagođeni obrasci i brojači detekcija

**Nadzorna ploča → Postavke → Sigurnost → Maskiranje osobnih podataka** određuje _što_ se maskira.
Time se maskiranje ne uključuje: za to su i dalje zaduženi `PII_REDACTION_ENABLED` (zahtjev) i
`PII_RESPONSE_SANITIZATION` (odgovor + SSE), oba prema zadanim postavkama isključena.

- **Odabir po vrsti** — ugrađeni identifikatori navedeni su u
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ako postavka nije zadana, obuhvaćene su sve
  vrste (ponašanje prije uvođenja ove postavke). Obrazac `ssn_us` mehanizma za obradu
  zahtjeva preslikava se u `ssn`. Predlošci (Minimalni, Standardni, Financijski,
  Brazilski, SAD, Potpuni) samo označavaju potvrdne okvire u korisničkom sučelju.
- **Prilagođeni obrasci** — do 20 regularnih izraza ili obrazaca sa zamjenskim znakovima (`*` = do 64
  znaka koji nisu bjeline, `?` = jedan). Podudaranja se zamjenjuju s `[CUSTOM_REDACTED]`.
  Svaki obrazac prolazi kroz `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): najviše 500 znakova, zastavice su ograničene
  na `g i m s u`, mora se moći prevesti, mora proći provjeru `safe-regex` (katastrofalno
  povratno pretraživanje) te se ne smije podudarati s praznim nizom znakova ni sa zamjenskom oznakom za maskirane podatke.
  Obrazac koji ne prođe provjere odbija se pri spremanju i testiranju, a spremljeni zapis
  koji ne prođe provjere preskače se tijekom izvođenja umjesto da se prevede. Prilagođeni obrasci
  primjenjuju se samo dok je maskiranje uključeno.
- **Brojači detekcija** — brojevi po vrsti (nikada podudarne vrijednosti), pohranjeni u
  memoriji i poništeni pri ponovnom pokretanju (`src/lib/pii/piiDetectionStats.ts`). Povećavaju se
  samo dok je maskiranje uključeno.

Postavke se nalaze u tablici `key_value` (prostor imena `pii_settings`,
`src/lib/db/piiSettings.ts`) i čitaju se putem predmemorije s trajanjem od 1 s. API:

| Metoda | Putanja                  | Svrha                                                                            |
| ------ | ------------------------ | -------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stanje zastavica, `enabledTypes`, `customPatterns`, brojači detekcija            |
| `PUT`  | `/api/settings/pii`      | Zamjena `enabledTypes` (`null` = sve) i/ili `customPatterns`                     |
| `POST` | `/api/settings/pii/test` | Probna primjena jednog obrasca na uzorku od najviše 8 KB; ništa se ne pohranjuje |

Sve tri metode zahtijevaju autentifikaciju za upravljanje i provjeravaju valjanost tijela zahtjeva pomoću Zoda
(`src/shared/validation/schemas/piiSettings.ts`).

### Ubacivanje zlonamjernih uputa (`promptInjection.ts`)

Otkriva napadačke strukture u sadržaju koji dostavlja korisnik i provodi
konfigurirana pravila. Ponašanjem upravljaju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadana vrijednost | Učinak                                                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`            | Kada je vrijednost `false`, zaštitni mehanizam odmah prekida obradu.                                                                                                                                                                                |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`            | Pravila za ubacivanje zlonamjernih uputa: `block`, `warn` ili `log`. (`redact` se prihvaća radi povratne kompatibilnosti, ali **ne** uklanja tekst zlonamjernih uputa; prepisivanjem osobnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Najniža razina ozbiljnosti potrebna za blokiranje. Srednja razina prema zadanim postavkama samo se prati.                                                                                                                                           |

**Redoslijed prvenstva načina rada** (`getMode`): `options.mode` pozivatelja →
`INJECTION_GUARD_MODE` **nadjačavanje zastavicom značajke iz baze podataka** (Nadzorna ploča → Postavke →
Zastavice značajki) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Nadjačavanje putem nadzorne ploče stoga ima prednost pred varijablama okruženja, pa sučelje za
zastavice značajki upravlja aktivnim zaštitnim mehanizmom u stvarnom vremenu (bez ponovnog pokretanja). Čitanje iz baze podataka otporno je na pogreške:
ako dođe do pogreške, zaštitni mehanizam vraća se na ponašanje temeljeno na varijablama okruženja, a kada
nadjačavanje nije postavljeno, ponašanje je jednako određivanju postavki isključivo putem varijabli okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se koristi i drugdje u obradi).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutačno `system_override_inline` i
   `markdown_system_block`, oba s razinom ozbiljnosti `high`).
3. Neobavezni `customPatterns` proslijeđeni putem opcija konstruktora (nizovi znakova, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** barem jedna detekcija dosegne prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U načinima rada `warn`/`log` zaštitni mehanizam bilježi događaj, ali
dopušta poziv. Zajednička pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor pregledava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje za provjeru uzoraka. Upute za umetanje nalaze se blizu početka ulaza, pa se time
ograničava opterećenje CPU-a i GC-a pri obradi regularnih izraza na sadržajima veličine više stotina KB bez slabljenja detekcije (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvršava se u **obje** faze, posljednje u zadanom lancu (prioritet `95`). Maskira
poznate uzorke API ključeva / tajnih tokena u odlaznom sadržaju (sadržaj
poruka, argumenti poziva alata, rezultati alata) **i** odgovoru pružatelja usluge, tako da
vjerodajnica zalijepljena u upit (ili ponovljena u rezultatu alata) ne procuri
uzvodnom pružatelju usluge niti natrag klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao maskiranje osobnih podataka (povezano sa strogim pravilom #20):
  onemogućeno osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitni mehanizam ne poduzima ništa —
  nikada ne blokira i nikada ne mijenja sadržaj.
- `redactCredentials()` prolazi cijelim stablom odlaznog sadržaja/odgovora (`walkValue()`,
  sigurno od zagađenja prototipa i ciklusa zahvaljujući objektu `WeakSet`) i zamjenjuje podudaranja
  zamjenskom oznakom `[REDACTED:<type>]`, klonirajući samo grane koje su se doista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvaća ključeve pružatelja LLM usluga (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanja (Stripe, Square), ključeve za usluge u oblaku
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  nizove za povezivanje koji sadrže vjerodajnice (`mongodb://user:pass@...` itd.) i
  generički uzorak vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi koji odgovaraju nazivima zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskiraju se strukturno (samo vrijednost, uz očuvanje prefiksa sheme kao što je
  `Bearer `/`Basic `), a ne generičkim regularnim izrazom za tekst.
- Zaštitni mehanizam nikada ne blokira; samo mijenja sadržaj (`modifiedPayload` /
  `modifiedResponse`) i dodaje metapodatke (`meta.credentialsRedacted`, `meta.count`).

Zaštita od regresije: `tests/unit/credential-masker-guardrail.test.ts`.

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
  block?: boolean; // true prekida lanac
  message?: string; // prikazuje se pri blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća preCall radi preoblikovanja zahtjeva
  modifiedResponse?: TValue; // vraća postCall radi preoblikovanja odgovora
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

Zaštitni mehanizam signalizira „bez promjene” vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje vrijednosti `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za sljedeće zaštitne mehanizme.
`signal?: AbortSignal` prenosi životni ciklus pozivatelja u zaštitne mehanizme. Prekid zahtjeva namjerna je iznimka od ponašanja pri kojem se u slučaju pogreške obrada nastavlja: medijski mostovi zaustavljaju rad i provode čišćenje bez vraćanja neobrađenih medijskih podataka odredištu za koje je poznato da ih ne podržava.

## Registar (`registry.ts`)

Jedinstvena instanca `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje zaštitni mehanizam (ili ga zamjenjuje prema normaliziranom nazivu) i
  ponovno sortira uzlazno prema vrijednosti `priority`.
- `clear()` / `list()` — administrativne pomoćne funkcije.
- `runPreCallHooks(payload, context)` — prolazi kroz aktivne zaštitne mehanizme, prosljeđuje
  sadržaj zahtjeva kroz `modifiedPayload` i zaustavlja se pri prvom rezultatu `block: true`.
- `runPostCallHooks(response, context)` — isti tijek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i po izboru
  ponovno registrira zadane mehanizme radi čiste izolacije testova.

Obje funkcije za izvršavanje vraćaju `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemu je `results` niz zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` za svaki zaštitni mehanizam,
što je korisno za praćenje izvršavanja.

### Onemogućavanje zaštitnih mehanizama po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` prikuplja
popis naziva zaštitnih mehanizama bez duplikata koje treba preskočiti za trenutačni
zahtjev. Postoji pet kanala koji se čitaju ovim redoslijedom i spajaju u jedan popis
(pri uklanjanju duplikata zadržava se prvo pojavljivanje):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` u tijelu zahtjeva (na najvišoj razini)
3. `metadata.disabledGuardrails` u tijelu zahtjeva (samo kada je `metadata` objekt)
4. Zaglavlje `x-omniroute-disabled-guardrails`
5. Naslijeđeno zaglavlje `x-disabled-guardrails`

Svih pet kanala spaja se, uključujući oba zaglavlja: slanje i
`x-omniroute-disabled-guardrails` i `x-disabled-guardrails` preskače uniju
njihovih popisa, a prazno novo zaglavlje više ne skriva naslijeđeno
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ispravljeno u
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrijednosti mogu biti nizovi znakovnih nizova ili znakovni niz razdvojen zarezima; iz naziva se uklanjaju okolni razmaci
i normaliziraju se u mala slova s riječima odvojenima spojnicama (`pii_masker` → `pii-masker`), a prazne
stavke odbacuju se. Rezultat se putem `context.disabledGuardrails` prosljeđuje
registru, koji preskače odgovarajuće zaštitne mehanizme (`skipped: true` u `results`).

Popis za onemogućavanje utječe samo na **registar**. Način rada `block` za zaštitu od
umetanja zlonamjernih uputa obvezna je sigurnosna granica: posrednički sloj za zaštitu od umetanja uputa
(`src/middleware/promptInjectionGuard.ts`) poziva `evaluatePromptInjection()`
bez ikakvog popisa za onemogućavanje kojim upravlja pozivatelj (nepotreban
poziv `resolveDisabledGuardrails({ body })` koji se prije izvršavao uklonjen je u
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), pa se zahtjev
koji onemogućuje `prompt-injection` i dalje odbija u načinu rada `block`. To je
namjerno. Kanalima za onemogućavanje upravlja pozivatelj (tijelo zahtjeva,
metapodaci, zaglavlja), a pozivatelj ne smije moći isključiti sigurnosnu
kontrolu koju je postavio operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija zaglavlja
iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mijenja samo koji se zaštitni mehanizmi registra preskaču; ne dopušta klijentu
zaobilaženje posredničkog sloja. Obvezna pravila zaštitnih mehanizama po ključu i po grupi
prate se u RFC-u za v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Pogledajte [Pokrivenost i ograničenja](#coverage-and-limits).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts` (rute iz obitelji chat navedene u odjeljku
[Obuhvat i ograničenja](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sastavlja popis preskakanja na temelju API ključa, tijela
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne mehanizme uzlaznim
   redoslijedom prioriteta:
   - Onemogućeni zaštitni mehanizmi bilježe se kao `skipped`.
   - `preCall` svakog zaštitnog mehanizma može izmijeniti sadržaj zahtjeva putem `modifiedPayload`.
   - Prvi `block: true` prekida lanac, a obrađivač vraća
     odgovor o odbijanju zbog zaštitnog mehanizma.
3. (Potencijalno izmijenjeni) sadržaj zahtjeva prosljeđuje se kombiniranom usmjeravanju i šalje
   uzvodnom sustavu.
4. **Samo za odgovore bez strujanja:** nakon sastavljanja odgovora,
   `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac nad
   odgovorom. `block: true` ovdje odbacuje odgovor uzvodnog sustava i vraća HTTP 400. Odgovori sa strujanjem u potpunosti preskaču ovaj korak.

Zaštitni mehanizmi koji izbace iznimku bilježe se s `error: <message>` i zapisuju putem
`logger.warn`, ali lanac se nastavlja — namjerno se dopušta prolaz u slučaju pogreške.

## Obuhvat i ograničenja

Registar zaštitnih mehanizama uključen je samo u cjevovod za chat. Ta su ograničenja
utvrđena testovima `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` i
`tests/unit/guardrail-pipeline-characterization.test.ts`; te testove
ažurirajte promišljeno kada se ponašanje promijeni.

### Gdje se izvršavaju priključne funkcije

| Priključna funkcija / kontrola                        | Izvršava se nad                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                     | Zahtjevima koje obrađuje `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (i `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` te Telegramov posrednik za chat. Također i testnom krajnjom točkom nadzorne ploče `/api/guardrails/test`. Blokiranje prije poziva vraća HTTP 400. |
| `runPostCallHooks`                                    | Samo odgovorima chata **bez strujanja** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odgovori sa strujanjem nikada ne dolaze do nje.                                                                                                                                                                                                                                                                                                          |
| PII pri strujanju                                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), uključen u cjevovod u `streamingPipeline.ts` kada je `PII_RESPONSE_SANITIZATION` uključen. To nije zaštitni mehanizam pa kanali za onemogućavanje ne utječu na njega.                                                                                                                                                                                                                      |
| Posrednički sloj za zaštitu od umetanja (naslijeđeni) | Svakom rutom `/v1` koja sadrži upit, uključujući obitelj chat (pogledajte [obuhvat ruta](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo umetanje zlonamjernih uputa u upit.                                                                                                                                                                                                                                                          |

### Što nije obuhvaćeno

- **Rute za medije, vektorske prikaze i podatke** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikada ne dolaze do registra. Ondje se ne
  izvršavaju maskiranje osobnih podataka (PII), maskiranje vjerodajnica ni premošćivanje modaliteta. Njihova jedina
  provjera jest naslijeđeni posrednički sloj za zaštitu od umetanja.
- **Odgovori sa strujanjem** nemaju zaštitne mehanizme nakon poziva: nema `pii-masker` ni
  `credential-masker` nakon poziva, kao ni blokiranja nakon poziva. Primjenjuje se samo transformacija osobnih podataka pri strujanju
  (kada je `PII_RESPONSE_SANITIZATION` uključen). Vjerodajnica
  ponovljena u odgovoru sa strujanjem ne uklanja se.
- **Kanali za onemogućavanje naspram posredničkog sloja (namjerno):** posrednički sloj procjenjuje
  umetanje zlonamjernih uputa vlastitim pozivom funkcije `evaluatePromptInjection()`, bez
  prosljeđivanja popisa onemogućenih mehanizama kojim upravlja pozivatelj. Način rada `block` obvezna je
  granica koju onemogućavanja pod kontrolom pozivatelja ne mogu zaobići, uključujući rute iz obitelji chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogućavanje
  `prompt-injection` samo preskače zaštitni mehanizam u registru.

### Što obrađuje odgovor prije zaštitnih mehanizama nakon poziva

Na putanji bez strujanja redoslijed je: izdvajanje memorije → izvršavanje ugrađenih
alata → zaštitni mehanizmi nakon poziva → izlaz pri blokiranju nakon poziva → pohrana u semantičku predmemoriju.

- **Izdvajanje memorije** i **izvršavanje alata** vide odgovor prije nego što ga
  zaštitni mehanizmi nakon poziva mogu preoblikovati ili blokirati. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), izdvajanje
  memorije obrađuje izdvojeni tekst funkcijom `sanitizePII` kada je
  `PII_RESPONSE_SANITIZATION` uključen (i pri strujanju i bez strujanja), no
  odgovor koji se naknadno blokira nakon poziva već je proslijeđen memoriji i
  alatima.
- **Semantička predmemorija** pohranjuje odgovor nakon obrade poslije poziva, pa pohranjuje
  preoblikovani odgovor, dok se blokirani odgovor nikad ne pohranjuje u predmemoriju. Unosi u predmemoriji
  vezani su uz pojedinačni API ključ.

## Konfiguracija

Varijable okruženja koje čitaju ugrađeni zaštitni mehanizmi:

| Varijabla                             | Koristi je                       | Učinak                                                                                                                                          |
| ------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | Postavite na `false` kako biste potpuno onemogućili otkrivanje.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | Pravilo za ubacivanje uputa: `warn`, `block` ili `log`. Naslijeđena vrijednost `redact` ne mijenja tekst ubačenih uputa.                        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | Način rada zaštite od ubacivanja uputa; ujedno i zastavica značajke u bazi podataka koja **ima prednost** nad varijablama okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | Najniža razina ozbiljnosti koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | Naslijeđeni zamjenski naziv za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | Kada je postavljeno na `true`, osobni podaci u zahtjevu se prikrivaju (neovisno o načinu rada zaštite od ubacivanja uputa).                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (u daljnjoj obradi) | Upravlja ponašanjem mehanizma za maskiranje na strani odgovora.                                                                                 |

Zaštitni mehanizmi Modality Bridge čitaju konfiguraciju tijekom izvođenja iz spremišta postavki
temeljenog na bazi podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za obradu slike su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Naslijeđeni
ključevi `visionBridge*` prihvaćaju se samo kao dokumentirana rezervna opcija za čitanje tijekom jednog ciklusa;
upisi putem nadzorne ploče koriste primarne ključeve. Zadane vrijednosti i mehanizam
za odabir rezervnih vrijednosti nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, dok su naslijeđene
konstante zadržane u `src/shared/constants/visionBridgeDefaults.ts`.

Obrada zvuka koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, uz zajedničke
postavke `modalityBridgeCache*`. Obrada zvuka nema rezervnu opciju s naslijeđenim ključevima jer su ti
ključevi uvedeni sa shemom Modality Bridge.

Obrada videozapisa koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, uz zajedničke postavke `modalityBridgeCache*`.
Zadano je onemogućena jer su FFmpeg/ffprobe neobavezne operativne
ovisnosti, a generiranje opisa kadrova povećava latenciju i trošak korištenja modela.

## Prilagođeni zaštitni mehanizmi

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

Koraci:

1. Izradite `src/lib/guardrails/myGuardrail.ts` koji nasljeđuje `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrirajte ga pri uvozu (iz funkcije `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tijekom izvođenja — registar zamjenjuje
   svaki prethodni zaštitni mehanizam s istim normaliziranim nazivom.
4. Dodajte testove u `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Upotrijebite `resetGuardrailsForTests()` između testova kako biste započeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` kako biste započeli s praznim registrom i
registrirali samo zaštitne mehanizme koji se testiraju. Vision Bridge podržava ubrizgavanje
ovisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže
odgovarajuće točke za ubrizgavanje postavki, mogućnosti, odabira STT modela, provjera
vjerodajnica i transkripcije. Testovi stoga mogu provjeriti oba tijeka bez pristupa
bazi podataka ili mreži.

## Vidi također

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji omogućuje
  otkrivanje ubacivanja uputa i maskiranje osobnih podataka (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke za Vision Bridge i
  popis modela za koje je upotreba mosta obvezna
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke izvođenja za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — neovisni sloj (prekidač strujnog kruga, razdoblja čekanja)
- `docs/reference/ENVIRONMENT.md` — potpuni referentni popis varijabli okruženja

## Pokrivenost ruta zaštitom od ubacivanja uputa i red-team testiranje (Faza 8 · Blok D)

Zaštita od ubacivanja uputa (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvaćaju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo zapisivanje u zapisnik;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeće) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Generativne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Izdvajanje teksta (`extractMessageContents`) obuhvaća `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (svake noći, `nightly-llm-security.yml`):** promptfoo provjerava blokira li svaka ruta
korpus OWASP-LLM u načinu rada `INJECTION_GUARD_MODE=block`; garak pokreće ispitivanja (preskače ih ako nema tajnog podatka).
`moderations` je uključen radi dosljednosti. Način blokiranja obvezna je granica: `evaluatePromptInjection()`
zanemaruje popis za onemogućavanje po zahtjevu koji mu prosljeđuje posrednički sloj, pa `disabledGuardrails`
**ne** izuzima rutu iz te zaštite ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Noćni tijek rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva zadatka:

- **`promptfoo-guard` (blokirajući)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  uz `INJECTION_GUARD_MODE=block`. Svaki napadački slučaj (npr. „zanemari sve
  prethodne upute…”, zaobilaženje zaštite u stilu DAN-a) provjerava sadrži li odgovor
  `error.code === "SECURITY_001"`, odnosno je li zaštita doista odbila zahtjev.
- **`garak` (savjetodavni)** — pokreće garak `--probes promptinject,dan,leakreplay`
  na lokalnoj instanci OmniRoutea (`http://localhost:20128/v1`). Uvjetovan je
  tajnim podatkom pružatelja usluge (`PROMPTFOO_PROVIDER_KEY`); ako ga nema, uredno se preskače, a dodan mu je završetak
  `|| true`, pa izvještava bez uzrokovanja neuspjeha CI-ja.

Pokrivenost pomoćnih funkcija zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvaća svaku rutu `/v1` koja prima upite; tekst upita izdvaja se iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.

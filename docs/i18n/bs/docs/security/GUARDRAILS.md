# Guardrails (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Mjerodavni izvor:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-10-17 — v3.8.52 (dodano [Pokrivenost i ograničenja](#coverage-and-limits):
> koje rute i putanje odgovora obuhvataju hookovi, objedinjena zaglavlja za onemogućavanje (#16412), režim
> blokiranja injekcije kao obavezna granica (#16413) i šta vidi odgovor prije naknadnog poziva)

Zaštitni mehanizmi provode sigurnosne mjere, pravila i transformacije sadržaja na granici
između OmniRoutea i uzvodnih pružalaca usluga. Svaki zaštitni mehanizam može pregledati (i
po potrebi odbiti, transformisati ili označiti) sadržaje zahtjeva (`preCall`) i
odgovore uzvodnih pružalaca usluga (`postCall`).

Sistem je **otvoren u slučaju greške**: ako zaštitni mehanizam baci izuzetak tokom izvršavanja, registar
bilježi grešku i nastavlja sa sljedećim zaštitnim mehanizmom umjesto da zahtjev završi neuspješno.
Blokiranje je izričita odluka (`block: true`), nikada slučajnost.
Jedini izuzetak je prekinut zahtjev: kada se prekine pozivaočev `signal`,
zaštitni mehanizam koji baci izuzetak uzrokuje odbijanje izvršavanja hooka umjesto da bude preskočen.

Hookovi se **ne** izvršavaju na svakoj ruti niti za svaki odgovor. Pročitajte
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

Mehanizmi s nižim brojevima prioriteta izvršavaju se **prvi**.

### Most za vizuelni sadržaj (`visionBridge.ts`) — Most modaliteta PR-1

Osnovni model GLM 5.3 i `glm-5.3-{low,high,max}` imaju izričite
metapodatke `supportsVision:false` u registru/specifikaciji. Varijante GLM 5.3 Flash
ostaju modeli s izvornom podrškom za vizuelni sadržaj. Ruta `/v1/messages` u Claude Codeu ulazi u
zajednički lanac zaštitnih mehanizama `handleChat` prije poziva **prije** prevođenja iz Claude formata u OpenAI format;
ugniježđene slike u rezultatima alata `Read` moraju se opisati ili obraditi
prije nego što ih to prevođenje prenese u OpenAI sadržaj `image_url` (#17069).

Presreće zahtjeve koji sadrže slike i koji su usmjereni na **modele bez podrške za vizuelni sadržaj** te ili
preusmjerava cijeli zahtjev na model koji podržava vizuelni sadržaj ili zamjenjuje dijelove sa slikama
tekstualnim opisima koje generiše podesivi model za vizuelni sadržaj prije
uzvodnog poziva. To omogućava pružaocima usluga koji podržavaju samo tekst da transparentno obrađuju
multimodalne sadržaje zahtjeva.

Tok:

1. Preskočiti ako ciljni model već podržava vizuelni sadržaj (osim ako se nalazi na
   listi modela za prisilno korištenje mosta `isVisionBridgeForcedModel`).
2. Izdvojiti dijelove sa slikama pomoću `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira posao **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   mjerodavnom izvoru koji se dijeli s kombinovanim filterom kompatibilnosti.
   Izdvajanje je ograničeno listom dozvoljenih oblika koje `replaceImageParts` može umetnuti
   nazad (ugovor izdvajanje↔zamjena): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` i Responses
   API `input_image`. Odgovarajuće slike ugniježđene unutar Claude Code
   `tool_result.content` i izlaza alata Responses također se izdvajaju i
   zamjenjuju na svojim izvornim putanjama; oblici koji služe samo kao indikatori namijenjeni su kombinovanom
   filteru i ne izdvajaju se.
   Preskočiti ako nijedan nije pronađen.
3. Razriješiti konfiguraciju izvršavanja pomoću `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju **rezervna opcija tokom jednog
   ciklusa** (period za povratak na prethodno stanje). Preskočiti prije bilo kakvog obilaska medija kada je
   most onemogućen.
4. Selektor režima (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   između preusmjeravanja i opisivanja. Preusmjeravanje vraća `modifiedPayload` u kojem je zamijenjen samo `model`,
   uz metapodatke `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničiti broj slika na `maxImages`, sastaviti upit prilagođen zadatku,
   provjeriti keš opisa, pozvati model za vizuelni sadržaj **paralelno**
   (`Promise.allSettled`) i umetnuti tekstualne dijelove `[Image N]: <description>`
   umjesto slika. Neuspješno opisivanje daje `null`: izvorna slika se zadržava za
   nepoznate ciljeve ili ciljeve koji podržavaju vizuelni sadržaj (#4012), ali **potvrđeni direktni cilj koji podržava
   samo tekst** ili kombinacija bez podrške za vizuelni sadržaj dobija izričiti
   zamjenski tekst `(unavailable — no vision-capable provider connected)` za
   svaku neopisanu sliku, uključujući djelimične neuspjehe i slike iznad
   ograničenja broja poziva za opisivanje (#17069). Postojeća rezervna opcija za opisivanje u kombinaciji kada svi pokušaji ne uspiju
   ostaje na snazi (#8430).
6. Vratiti `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režima (`modalityBridgeVisionMode`)

| Režim      | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, neizmijenjena (#6640/#7204): modeli koji nisu kombinovani/`auto/` preusmjeravaju se na najbolji model za obradu slika, osim ako izvorni model već ima upotrebljive vjerodajnice (tada se slika opisuje); kombinovana odredišta uvijek koriste opisivanje.                                                       |
| `describe` |        | Uvijek opisuj — blok za preusmjeravanje u potpunosti se preskače; uvijek odgovara model koji je korisnik odabrao.                                                                                                                                                                                                                       |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica **odredišta** preusmjeravanja i dalje važi — kada ne postoji upotrebljivo odredište za obradu slika, most blokira zahtjev uz jasnu grešku umjesto opisivanja ili slanja neobrađenih slika odredištu koje podržava samo tekst. |

Prisilni režimi prekidaju daljnju obradu **prije** pokretanja automatske heuristike; ponašanje režima `auto`
identično je bajt po bajt ponašanju zaštitnog mehanizma prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most bira samo
modele za preusmjeravanje i opisivanje koje ključ smije koristiti, na vezama koje ključ smije
koristiti. Poziv za opisivanje zatim uvijek prolazi kroz povratnu petlju OmniRoutea sa
zaglavljem `x-omniroute-self-loop-key-id`, tako da prijemni zahtjev za razgovor
ponovo provodi pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno s bearer tokenom povratne petlje, pa ono može samo
suziti pristup, a ID koji se ne može razriješiti se odbija.

Ako ključu nije dozvoljen nijedan model za obradu slika, **potvrđeno odredište koje podržava samo tekst**
lokalno odbija zahtjev sa slikom uz jasnu grešku HTTP 400 umjesto
prosljeđivanja bajtova slike nadređenom servisu koji ih ne može obraditi (#17069). Za odredišta s
nepoznatom ili izvornom podrškom za obradu slika, putanja opisivanja zadržava prethodno
ponašanje dopuštanja prolaza u slučaju neuspjeha (metapodaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez ovih ograničenja ponašaju se potpuno isto kao
ranije.

#### Prompt za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćen na 500 znakova) osnovnom
promptu za opisivanje, usmjeravajući opis prema onome što je korisnik zaista tražio
(obrazac codex-vision-proxy) i tražeći od modela za obradu slika da prepiše vidljivi
tekst. Kada je opcija isključena — ili nema korisničkog teksta — osnovni prompt koristi se bez izmjena.

Vlastiti zahtjev povratne petlje za opisivanje, kompatibilan s OpenAI-jem (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`), uvijek traži `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/pružaoca usluge, bez uslovljavanja bilo kakvim signalom klijenta.
Uzorkovanje s niskim nivoom detalja smanjuje tačnost OCR-a upravo za zadatak prepisivanja
teksta koji ovaj prompt traži, pa sam poziv za opisivanje uvijek traži visok
nivo detalja bez obzira na nivo detalja korišten u izvornom dolaznom zahtjevu. Ovo
utiče samo na tijelo internog zahtjeva za opisivanje; ne mijenja način na koji
OmniRoute prosljeđuje pozivaočev vlastiti `image_url.detail` u primarnom zahtjevu —
ta zadana vrijednost primjenjuje se zasebno i samo za prepoznate OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
povratne petlje za opisivanje koja koristi Anthropicov format prijenosa nema polje `detail`
i na nju ne utiče nijedna od ovih zadanih vrijednosti.

#### Ograničenje dužine opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se bez izmjena, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz
sufiks `…` prije nego što se ponovo umetne kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja u kojima narednom modelu treba
potpun prijepis; smanjite je da ograničite potrošnju tokena kod opširnih modela za obradu slika.
Polje na kontrolnoj ploči nalazi se na panelu Napredno kartice Obrada slika
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i svaku
vrijednost između 1 i 99 podiže na donju granicu od 100, dok izričito zadanu vrijednost `0`
ostavlja neizmijenjenom — `0` je sama po sebi važeća Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost za „nije postavljeno“.

#### Keš opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL keš rezultata opisivanja u memoriji, zajednički za cijeli proces.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uz
uokvirivanje prefiksom dužine (bez kolizija na granicama polja). Komponenta modela je
**konfigurisani** model mosta, a ne model koji je stvarno odgovorio —
`callVisionModel` može interno preći na rezervni model, a formiranje ključa za svaki pokušaj
fragmentiralo bi keš. Neuspjeli pokušaji opisivanja nikada se ne keširaju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (describe samopoziv / base64 dohvat)

Kada most sam dohvata **udaljenu** sliku — Anthropic describe
samopoziv i konverzija u base64 za claude-wire-format
(`ensureBase64ImagesForClaudeWire`), oboje putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultirajući podatkovni
URI prolazi kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije nego što bude ugrađen u zahtjev
vizuelnom modelu. Prevelike slike smanjuju se na **2048px po dužoj stranici** (što odgovara
ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na serverskoj strani), čime se smanjuju
broj bajtova za prijenos i latencija bez promjene onoga što vizuelni model vidi. Promjena veličine
koristi `sharp`, učitan putem dinamičkog uvoza: na platformi na kojoj se njegova nativna
binarna datoteka ne može učitati, `normalizeDataUri()` **nikada ne baca izuzetak** — umjesto toga
prosljeđuje izvorne bajtove, pa putanja za describe/konverziju u base64
uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvat koji nije vratio
sliku koja se može dekodirati) također se prosljeđuju neizmijenjeni. Ova normalizacija
ograničena je na slike koje most dohvata za vlastiti samopoziv — nikada se ne
primjenjuje na izvorni sadržaj zahtjeva pozivaoca koji se direktno prosljeđuje, u skladu s
principom izmjene isključivo uz izričit pristanak (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` validiraju se pomoću Zod-a u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i
grupa `modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene
vrijednosti `visionBridge*` u odgovarajuće nove ključeve (idempotentna je i nikada ne prepisuje
vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni ključevi ostaju prihvaćeni kao
rezervna opcija pri čitanju tokom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformisani postupkom describe sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
a dodaje `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **ne dobijaju** zaglavlje — sadržaj zahtjeva nije izmijenjen, a
zamjena modela već je vidljiva u polju `model` u tijelu odgovora.

`GET /api/modality-bridge/stats` (autentifikacija za upravljanje, isti nivo kao
`GET /api/settings`) vraća brojače po modalitetu koji se čuvaju u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` kao nazivnik koristi `latencySamples`, a ne sve pokušaje;
operacija bez mjerenja vremena ne stvara izmišljeni uzorak od nula milisekundi.
`bridged` ostaje unazad kompatibilan alias za uspješne
konverzije; neuspjeli pokušaji ga ne povećavaju.
Brojači se namjerno resetuju pri ponovnom pokretanju procesa
(telemetrija, a ne obračun).

#### Konfiguracija kontrolne ploče

Namjenska stranica kontrolne ploče je
`/dashboard/settings/modality-bridge`. Njene kartice `Vision`, `Audio`
i `Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita pri promjeni vrijednosti `tab`.
Kartica Vision omogućava uključivanje, odabir režima i modela (uključujući automatski
zadani izbor), zadavanje uputa prilagođenih zadatku, napredna ograničenja vremenskog limita/broja slika/dužine opisa/predmemorije,
brojače tokom
izvršavanja i zaštićeni probni zahtjev. Kartica Audio također je aktivna: omogućava
uključivanje, birač isključivo STT modela s opcijom Automatski, ograničenja vremenskog limita/maksimalnog trajanja snimka, audio
brojače i probni test `input_audio`. Kartica Video je funkcionalna: prikazuje
stanje FFmpeg/ffprobe tokom izvršavanja — jedno od četiri eksplicitna stanja korisničkog interfejsa (`unknown` dok
je provjera u toku ili se nije mogla dovršiti, `restricted` na hostu kontrolne ploče koji nije na loopback adresi,
gdje se provjera preskače na klijentskoj strani, `unavailable` nakon provjere
koja je potvrdila da alati nedostaju ili `available` uz verzije FFmpeg/ffprobe) — trajno čuva
postavke uključivanja/modela/ograničenja kadrova/videozapisa/vremenskog limita, filtrira birač modela na modele koji podržavaju
vizuelni ulaz i prikazuje video brojače.

Nekadašnja kartica Vision Bridge u AI postavkama sada je poveznica za kompatibilnost koja vodi na
novu stranicu; više ne sadrži drugu kopiju obrasca. Pružaoci medijskih usluga također
povezuju radne tokove Slika u tekst i Govor u tekst s odgovarajućim karticama Modality
Bridge, bez uklanjanja postojećeg prostora za isprobavanje pretvaranja govora u tekst.

**Zaobilaženje kontrole prijema za samopoziv:** kada se describe poziv usmjerava kroz OmniRouteov
vlastiti `/v1` samopoziv (nestandardni model pružaoca), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se pomoću razriješenih
vjerodajnica za samopoziv — lokalne posebne vrijednosti `sk_omniroute` u lokalnom režimu ili
ključa iz varijable okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operater (#1350), tako da
implementacije s `REQUIRE_API_KEY=true` i dalje mogu izvršavati describe poziv. Zaobilaženje
se uvažava samo za te tačne vjerodajnice, tako da vanjski klijenti ne mogu koristiti
zaglavlje za preskakanje kontrole prijema.

Naslijeđene zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
nove zadane vrijednosti za režim/prilagođavanje zadatku/predmemoriju i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam pruža
opciju konstruktora `deps` kako bi testovi mogli ubaciti lažne implementacije `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do odredišta za koje nije
poznato da prihvata audio ulaz. Nikada ne preusmjerava zahtjev za razgovor: audio dijelovi se
transkribuju putem postojećeg multipart krajnjeg odredišta kompatibilnog s OpenAI-jem, a
odabrani model za razgovor nastavlja s tekstualnim transkriptima.

Tok:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Prednost
   imaju eksplicitni metapodaci iz registra pružatelja usluga, zatim statički
   metapodaci modela, a potom sinhronizirani `modalities_input`. Deklarisana lista
   ulaza bez `audio` daje `false`; ako nema dokaza o mogućnostima, ostaje `null`.
   I `false` i `null` aktiviraju konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i iz svake poruke izdvojite
   audiodijelove najvišeg nivoa koji se mogu zamijeniti, koristeći zajednički
   detektor `detectMediaParts()`. Podržani formati prijenosa su OpenAI `input_audio`,
   `audio_url` i `source.media_type: "audio/*"`. Ugniježđeni audio se otkriva radi
   usmjeravanja, ali se ne uklanja putem zamjene dijelova. Obrada je ograničena
   postavkom `modalityBridgeAudioMaxClips`; kasniji dijelovi ostaju netaknuti.
3. Uvažite konfigurisani `provider/model` ili dopustite da
   `selectAudioBridgeModel()` prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS` prema
   stabilnom redoslijedu kataloga i odabere prvi model s upotrebljivom aktivnom
   vjerodajnicom pružatelja usluga.
4. `callAudioTranscription()` pretvara audio u formatu base64/data-URI u
   višedijelni `file` ili preuzima udaljeni `audio_url` putem zaštite izlaznih
   zahtjeva koja dopušta samo javne adrese, uz fiksiranje DNS-a i ograničenje od
   25 MB. Zatim šalje datoteku i odabrani model metodom POST lokalnoj povratnoj
   petlji `/v1/audio/transcriptions`, uz autentifikaciju pomoću
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   pronalaženje vjerodajnica, upravljanje periodom čekanja i ograničenjem stope
   zahtjeva te prosljeđivanje pružatelju usluga.
5. Uspješni pozivi zamjenjuju svoje dijelove tekstom `[Audio N]: <transcript>`.
   Pozivi se izvršavaju pomoću `Promise.allSettled`: pojedinačni neuspjeh čuva
   izvorni audiodio (ugovor #4012). Ako svi pozivi ne uspiju, a za ciljni model
   je dokazano `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznati ciljni model (`null`), rezultat u kojem su svi pozivi neuspješni
   ostaje netaknut. Ciljni model za koji je dokazano da podržava samo tekst i
   koji nema upotrebljivu STT vjerodajnicu dobija isti eksplicitni zamjenski
   tekst bez slanja mrežnog poziva.

Uspješne transkripcije koriste LRU/TTL predmemoriju mosta modaliteta na nivou
cijelog procesa. Ključ objedinjuje referencu na audio, stabilnu oznaku operacije
`audio-transcription` i odabrani STT model; neuspjesi se nikada ne pohranjuju u
predmemoriju. Pokušaji obrade audija ažuriraju zajedničke brojače `bridged`,
`cacheHits`, `failures` i `lastUsedAt`.
Transformisani odgovori nose
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtjevi ne dobijaju segment audiomosta.

Postavke izvršavanja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajedničkom predmemorijom i dalje upravljaju `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Videomost (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće videodijelove najvišeg nivoa u `messages` za Chat Completions i u
`input` za Responses API prije pozivanja ciljnog modela za koji nije poznato da
ima izvornu podršku za video. Podržani formati su `input_video`, `video_url`,
`video_source`, HTTPS URL-ovi i podatkovni URI-jevi `data:video/*;base64,...`.
Obični nazivi datoteka u tekstu ne tretiraju se kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odgovoran je za prolazak kroz
zahtjev, provjeru mogućnosti i pravila, objedinjavanje na nivou zahtjeva i sadržaj
odgovora. Obrada pojedinačnog videa — pribavljanje, predmemorija cjelokupnog
rezultata, opisivanje niza kadrova (koje objedinjuje i svaki audiotranskript koji
je pozivalac deklarisao) te metrike, prekid i čišćenje po pokušaju — skrivena je
iza `processVideoPart` u `videoBridgePipeline.ts`, koji se poziva jednom za svaki
videodio unutar petlje funkcije `preCall`.
Taj modul također definiše eksplicitne granice portova `VideoMediaBrokerPort`
(pribavljanje bajtova i izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort`
(objedinjavanje audiotranskripta koji je pozivalac deklarisao s opisima
uzorkovanih kadrova) i `VideoDrilldownPort` (granica trajne pohrane detaljne
analize kadrova; još nije povezana s `processVideoPart` — trenutno samo zasebna
ruta `/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti poziva potproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64 videozapisi
imaju konzervativno ograničenje dekodirane veličine od 36 MiB po videozapisu kako
bi omotač modela, poruka i strukture mogao ostati unutar ograničenja prihvata
javnog JSON zahtjeva od 50 MiB. Dužina ugrađenog sadržaja i procjene dekodirane
veličine provjeravaju se prije alokacije. HTTPS je obavezan za početni udaljeni
URL i svako preusmjeravanje, uz korištenje postojeće zaštite izlaznih zahtjeva
koja dopušta samo javne adrese i fiksira DNS. Bajtovi zatim prelaze tačno
definisanu internu brokersku granicu `POST /api/modality-bridge/video/extract`.
Ta ruta je i `LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo pouzdan zahtjev s
lokalne povratne adrese, autentificiran na nivou procesa, i nikada ne prihvata
URL, putanju u datotečnom sistemu, izvršnu datoteku niti listu argumenata.
Cjevovod za provjeru veličine tijela API zahtjeva i inkrementalni čitač tijela u
obrađivaču nezavisno provode ograničenje ulaza brokera od 50 MiB. Njegov
ograničeni red obrađuje jedno izdvajanje odjednom, dopušta četiri posla na
čekanju i ograničava ulaz na čekanju na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksna lista
dozvoljenih formata isključuje formate lista za reprodukciju i manifesta. Za dozvoljene
kontejnere iz porodice MOV, vanjske MOV reference na podatke ostaju podrazumijevano
onemogućene, a fiksna komanda ih ne omogućava. I `ffprobe` i `ffmpeg` koriste
listu dozvoljenih protokola koja sadrži samo `file`, jednu nit, fiksne nizove argumenata, bez komandne ljuske,
i izvršne datoteke pronađene putem `PATH`. Tokovi naslovnih slika u obliku priloženih slika nisu
kandidati za reprodukciju. Svi tokovi koji se mogu reproducirati moraju zadovoljavati ograničenja, a
prednost se daje eksplicitno zadanom podrazumijevanom toku prije determinističkog rezervnog
izbora toka s najnižim indeksom. Videozapisi su ograničeni na 600 sekundi, 8,192 piksela po dimenziji i
33,554,432 izvorna piksela. FFmpeg uzorkuje 1–16 JPEG kadrova u središnjim tačkama, smanjuje
dužu stranicu na najviše 1,024 piksela bez povećavanja manjih ulaza i
nikada ne prima URL. Uzorkovanje je podrazumijevano `uniform`. Opcionalna
politika `scene_aware` i eksperimentalna politika `segment_aware` izvode jedan dodatni
fiksni FFmpeg prolaz nad već provjerenim lokalnim tokom, biraju vremenske oznake
scena iz `showinfo` unutar zadanih granica i deterministički prelaze na iste
ravnomjerno raspoređene središnje tačke u slučaju kvara detektora, isteka vremena, neispravnog izlaza ili praznog
skupa kandidata. Režim koji uzima u obzir segmente raspoređuje uzorke središnjih tačaka proporcionalno
provjerenim intervalima scena; podaci za ovaj režim i njegovo rezervno ponašanje
detaljno su opisani u nastavku. Strogo ograničenje od 16 kadrova
primjenjuje se nakon odabira u svakoj politici. Kada zahtjev koji uzima u obzir scene ima budžet od samo
jednog kadra, koristi ravnomjernu središnju tačku aktivnog intervala cijelog videozapisa ili fokusnog
prozora i prijavljuje `policyEffective: uniform`: jedan odabrani kadar scene
ne može očuvati oba vremenska kraja. Pozivalac može opcionalno navesti
konačan fokusni prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje
medijskog sadržaja, prozori s obrnutim granicama ili nekonačnim vrijednostima se odbacuju, a sve politike
uzorkovanja provode se samo unutar normaliziranog intervala. Dobijeni
prozor uključuje se u metapodatke uzorkovanja i u nepouzdani prefiks
opisa kako bi daljnji modeli mogli razlikovati fokusirani isječak od cijele
vremenske linije.

Semantički fokus opisa zasebna je, eksplicitna postavka. Podrazumijevani režim analize `full`
zadržava postojeći upit za kadar i nikada ne prosljeđuje tekst zahtjeva
modelu za generisanje opisa. U režimu `focused`, most čita samo najnoviji
neprazni `text`/`input_text` koji je napisao korisnik iz istog Chat ili Responses
kontejnera, normalizira ga u NFC, sažima kontrolne znakove i bjeline
te ga ograničava na 500 Unicode kodnih tačaka. Prazan rezultat vraća se na
potpuno isti upit `full`. Upotrebljiva smjernica serijalizira se kao JSON u zasebnom
bloku nepouzdanog korisničkog konteksta i smije samo dati prednost uočljivim detaljima;
ne može nadjačati zasebno upozorenje protiv slijeđenja uputa vidljivih
ili čujnih u medijskom sadržaju. Tekstualni fokus nikada ne izvodi `start`/`end` niti mijenja
vremenski uzorkivač.

#### FU-07 strukturni podaci o segmentima

`segment_aware` koristi jedan ograničeni prolaz prethodne analize nad već provjerenim
lokalnim videotokom. Fiksni lanac filtera prvo skalira na širinu od najviše 320 piksela,
otkriva promjene scena i zamrznute intervale, a zatim uzorkuje brzinom od 1 kadra u
sekundi radi analize zamućenja, prosječne lume te prostornih/vremenskih informacija. Prolaz je
ograničen na 600 strukturnih uzoraka, jednu FFmpeg/filter nit, iste
liste dozvoljenih protokola koje dopuštaju samo `file` i dozvoljenih kontejnera, ograničenje izlaza procesa od 1 MiB
i najviše 30 sekundi unutar zajedničkog mehanizma prekida/krajnjeg roka brokera. Nikada
ne prihvata komandu, filter, putanju ili URL iz zahtjeva.

Strukturne vrijednosti predstavljaju determinističke podatke za uzorkovanje, a ne semantičko
razumijevanje videozapisa. One ne izvode zaključke o subjektima, radnjama, opisima, govoru ili namjeri
korisnika. Granice scena i zamrznutih intervala formiraju segmente; pokrivenost zamrznutim intervalima, zamućenje,
ekspozicija, prostorni detalji i vremenske promjene utiču samo na to kako se postojeći
budžet od 1–16 kadrova raspoređuje. Potpuno zamrznut segment ograničen je na jedan kadar,
dok se nezamrznuti segmenti nadmeću za preostali budžet. Kada ima više granica
nego kadrova, zadržava se ravnomjerna pokrivenost vremenske linije kako brzi rezovi na početku
ne bi mogli sakriti dugi završni segment. Granice scena koje su unutar analitičke
rezolucije od 1 sekunde u odnosu na granicu zamrznutog intervala spajaju se.

Nedostajući filteri, neispravni/prazni podaci, greška detektora ili istek ograničenog
vremena prethodne analize dopuštaju nastavak uz potpuno istu politiku ravnomjernih središnjih tačaka. Prekid koji pokrene pozivalac
ili istek krajnjeg roka brokera ne dopušta nastavak: prekida aktivni
potproces, sprečava kasnije izdvajanje kadrova, a privatno privremeno stablo
uklanja se u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
testne primjere za uštede u pozivima za generisanje opisa nakon deduplikacije, raspodjelu budžeta pri intenzivnom kretanju,
podatke o zamućenju/ekspoziciji/SI-TI, brze rezove s dugim završnim dijelom i lažno pozitivne rezultate
pri postepenom zatamnjenju. Bilježi stvarno proteklo vrijeme prethodne analize i, gdje je `/usr/bin/time`
dostupan, CPU vrijeme podređenog procesa i vršni RSS. Njegove provjere kvaliteta služe
isključivo kao strukturni referentni kriteriji. Stvarni kvalitet modela za generisanje opisa ostaje `HOLD` jer ovaj testni okvir nema
ovlaštenu krajnju tačku ni fiksirani model za ocjenjivanje. Novčane uštede također ostaju `HOLD`
osim ako se putem `--caption-cost-per-call-usd` ne navede eksplicitna pozitivna procjena troška
po pozivu; skripta nikada ne izmišlja nijedan od ta dva rezultata.

Svaki kadar ograničen je na 4 MiB, svi sirovi kadrovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja se
u `finally`. OmniRoute ne uključuje FFmpeg i ne prihvata prilagođenu
putanju do izvršne datoteke. Prije generisanja opisa, most provodi konzervativan postupak vizuelne
deduplikacije: svaki JPEG svodi se na međuspremnik u sivim tonovima veličine 16×16 i
poredi se samo s posljednjim zadržanim kadrom. Kada je zatraženi broj kadrova za opisivanje
veći od jedan, izdvajanje osigurava
ograničen skup kandidata do dvostruko većeg broja, ali nikada više od 16 kadrova.
Zatraženo ograničenje primjenjuje se tek nakon deduplikacije, pri čemu se prvi i posljednji
odabrani kandidat zadržavaju tokom završnog prorjeđivanja kada je dozvoljeni broj najmanje
dva. Verzionirana
politika `grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje razlike lume i
udjela ćelija umanjenog prikaza čija je normalizirana razlika najmanje 0.05. Prag
za duplikate je konstanta 0.04, odabrana radi predvidljivosti umjesto
izlaganja kroz postavku tokom izvršavanja. Ovaj sekundarni
signal visokog kontrasta zadržava sitne pokrete i promjene vidljivog teksta koje
poređenje samo na osnovu srednje vrijednosti može prikriti. Greške komparatora ili dekodera ne blokiraju obradu i čuvaju
pokrivenost. Izlazni metapodaci zasebno prikazuju izdvojene kandidate, uspješno korištene
kadrove i odbačene vizuelne duplikate.

Eksplicitno označen videod io može zatražiti preglednu tablu s vremenskim oznakama. Most
izrađuje JPEG mrežu s najviše 4 kolone i 16 kadrova. Svaka ćelija od 512 piksela trajno iscrtava
vremensku oznaku izvornog kadra u donju traku visokog kontrasta, dok iste vremenske oznake
ostaju u tekstualnim metapodacima radi naknadnog povezivanja i revizije. Cjelokupni
JPEG i dalje je ograničen na 32 MiB. Ako `sharp` ne može dekodirati ili sastaviti mrežu,
most se vraća na pojedinačne JPEG kadrove; prekid koji inicira klijent i dalje se prenosi
kroz operaciju izrade table.

Dokazi za promociju namjerno su odvojeni od sintetičkog mikrotesta performansi
sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše
A/B testno okruženje s verzioniranom shemom za stvarne modele računarskog vida kompatibilne s OpenAI interfejsom. Ono mjeri
broj tokena koji prijavljuje pružalac usluge, ukupno proteklo vrijeme od početka do kraja (uključujući sastavljanje table),
broj poziva modela i zadržavanje činjenica definisanih manifestom. Sirovi odgovori modela ne
zapisuju se u izvještaj; zadržavaju se samo SHA-256 sažeci i identifikatori podudarnih činjenica.
Testno okruženje ne upućuje mrežne pozive niti plaćene pozive modela osim ako je naveden `--execute-real` i
konfigurisani su `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez
takvog eksplicitnog stvarnog pokretanja, njegova mašinski čitljiva odluka ostaje `HOLD`; sama sintetička
mjerenja veličine podataka i broja poziva nisu dokaz za promociju.

Pozivaoci mogu priložiti opcionalni niz `transcript.cues` podržanom video
dijelu kada već posjeduju vremenski usklađen tekst. Svaki segment mora sadržavati `text`,
konačan interval `start`/`end` unutar trajanja utvrđenog analizom i
`source` s liste dozvoljenih vrijednosti (`client`, `embedded` ili `audio-bridge`); `confidence` podrazumijevano iznosi
`1` i mora ostati između `0` i `1`. Potpuno identični segmenti svode se na jedan.
OmniRoute nikada ne pokreće transkripciju na osnovu ovih metapodataka: validirani segmenti
kopiraju se u rezultat opisa s izvorom, pouzdanošću i intervalom te
se prikazuju kao nepouzdana opažanja uz opise kadrova. Neispravan
tekst, tekst izvan dozvoljenog raspona ili tekst bez podataka o porijeklu odbacuje se umjesto da se miješa u
tok opisa. Oba kanala za transkript u tijelu zahtjeva normaliziraju navedeno
porijeklo na `client`, uključujući samostalno dodijeljene oznake `embedded` ili `audio-bridge`.
Samo adapter pod kontrolom servera može dodijeliti te pouzdane oznake putem
argumenta `trustedSource`, dostupnog isključivo iz koda; JSON polje zahtjeva ne može pristupiti
tom argumentu. Tekst transkripta ostaje nepouzdan sadržaj izveden iz medija,
bez obzira na porijeklo, i nikada ne smije određivati autorizaciju.

Napredni pozivalac može dostaviti zapis `audioTranscript` za isti video;
on se tretira kao tekst koji je dostavio klijent, a ne kao dokaz serverske transkripcije.
Integracijski sloj za objedinjavanje obrađuje vizuelna i audio opažanja uz
jedan zajednički rok i signal za prekid, raspoređuje ih na zajedničku vremensku osu, svodi
potpune duplikate na jedan i vraća djelimičan rezultat kada uspije samo jedna strana.
Neispravan `audioTranscript` dovodi do takvog djelimičnog rezultata — vizuelni
opis se zadržava, a audio grana bilježi sanitizirani kôd greške —
umjesto da obrada cijelog videa ne uspije. Dostupnost svake grane, oznaka djelimičnog rezultata
i sanitizirani kodovi grešaka čuvaju se u rezultatu opisa, u
metapodacima zaštitnih mehanizama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima
objedinjavanja mosta. Podrazumijevani tok obrade Video Bridge ne poziva pretvaranje govora u tekst
niti preuzima drugu kopiju medija; bez tog eksplicitnog zapisa ostaje
isključivo video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji se i sam uključuje po izboru) prikaže segment transkripta — ne postoji zasebna
zastavica za zadržavanje. Kada zahtjev prikaže bilo koji segment transkripta (`transcript`
koji je naveo pozivalac ili objedinjeni `audioTranscript`), zaštitni mehanizam označava ga kao
`videoBridgeObserved` i izrađuje redigovanu kopiju opisa videozapisa —
identičan prikaz u kojem se slobodni tekst svakog segmenta zamjenjuje sa
`[redacted-video-transcript]`, nastao zamjenom strukturiranog polja segmenta
prije sastavljanja niza znakova (nikada parsiranjem spljoštenog teksta, tako da nikakav
sadržaj segmenta — zlonamjeran ili uobičajen, uključujući tekst koji sadrži `]`, poput
`[inaudible]`/`[music]` — ne može ostati). Trajno pohranjeno tijelo zahtjeva u dnevniku poziva zamjenjuje
svaki tekstualni dio izveden iz videozapisa tom redigovanom kopijom, uz uparivanje prema jednakosti
sadržaja; sidro `fullText` ponovo se čita iz konačnog sadržaja zaštitnog mehanizma
prije poziva, pa uparivanje i dalje uspijeva nakon što kasniji zaštitni mehanizmi u lancu (mehanizmi za maskiranje
ličnih podataka i vjerodajnica, prioriteti 10/95) prepišu tekst opisa na mjestu i
nakon što umetanje sistemskog upita, primopredaje i memorije preoblikuje niz poruka.
Tijelo poslano modelu ostaje nepromijenjeno. Za označeni zahtjev također se ne upisuje
ništa u trajnu memoriju (preskače se izdvajanje i iz zahtjeva i iz odgovora),
tako da ni vlastiti odgovor modela ne može prenijeti tekst transkripta u memoriju.

**Sirova polja videozapisa (#12430).** Kada je most omogućen, a izvorna podrška za videozapise nepoznata ili ne postoji, definisana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjeha opisivanja ili dostizanja ograničenja `maxVideos`. Računaju se i `null` i prazni nizovi znakova; odsutna polja i metapodaci koji se ne odnose na videozapise ne računaju se. Zadržane kopije rediguju ova polja ili izostavljaju zahtjev, a keš memorije i trajna memorija se zaobilaze.

Na tim rezervnim putanjama, valjani segmenti koje je dostavio pozivalac postaju podržani dijelovi `text`/`input_text`
umjesto nestandardnih polja pružaoca usluge. Oba zapisa dostavljena u zahtjevu
ostaju nepouzdana zapažanja tipa `client`, uz izričito upozorenje da videozapis
nije opisan i da vremenske oznake nisu provjerene u odnosu na medijski sadržaj. Postojeća
ukupna ograničenja od 256 segmenata/64 KiB i ograničenja po segmentu primjenjuju se na oba zapisa zajedno;
vremenske oznake moraju biti unutar posrednikovog ograničenja od 600 sekundi i svakog dostavljenog
fokusnog intervala. Nevaljani zapisi se odbacuju i ne prosljeđuju kao proizvoljan tekst; valjani
paralelni zapis i dalje se može koristiti, osim ako je njihovo zajedničko ograničenje prekoračeno. Null/prazna
polja ne dodaju tekst. Ovaj rezervni postupak ne dodaje preuzimanje medijskog sadržaja niti transkripciju.
Polja proširenja transkripta uklanjaju se iz rezervnog nosioca videozapisa i njegovih
objekata `video_url`/`source`. Lista dozvoljenih elemenata OpenAI protokola ostaje stroga; nosioci
videozapisa s nepoznatom izvornom podrškom ostaju dostupni, a poznata odredišta koja podržavaju samo tekst zadržavaju sigurne oznake.
Strukturirane redigovane kopije štite dodani tekst transkripta, dok
izvorni zahtjev u vlasništvu pozivaoca ostaje nepromijenjen. Odredišta s izvornom podrškom i
onemogućeni mostovi zadržavaju postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal označenog zahtjeva. Sirovi
snimak klijentskog zahtjeva prije zaštitnih mehanizama, zahtjev na čekanju u memoriji i rani
zapis odbijenog zahtjeva strukturno zamjenjuju polja transkripta u dijelovima videozapisa;
tekstualni upiti koje sintetizuju faze obrade i primopredaja konteksta rediguju se
na odredištu za trajno pohranjivanje tijela zahtjeva. Trajno pohranjena oznaka `video_content_removed`
osigurava da se nastavak putem `previous_response_id` sigurno odbije umjesto da rekonstruiše
tekst koji je namjerno odbačen. Ako označeni zahtjev izgubi svoju
redigovanu kopiju pojedinačnog dijela prije zapisivanja u dnevnik ili se čak i jedna od više kopija videozapisa
ne može upariti nakon kasnijih izmjena zahtjeva, zadržano tijelo zahtjeva
izostavlja se u cijelosti umjesto da se zadrži djelimično redigovan transkript.

Za označeni zahtjev, odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice segmenta. Njegov trajno pohranjeni `responseBody` u dnevniku
poziva stoga se zamjenjuje oznakom izostavljanja; detaljni
artefakt obrade (koji može uključivati tijela zahtjeva i odgovora pružaoca usluge i klijenta te dijelove toka)
ne zadržava se. Keš memorije za semantiku, idempotentnost i ponavljanje zaključivanja zaobilaze
čitanja i upise za taj zahtjev. Zahtjev pružaocu usluge i odgovor
vidljiv klijentu ostaju nepromijenjeni. Rani bajtovi za održavanje veze prazne se iz privremenog
bafera kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStream toku
navodi samo broj bajtova sadržaja, nikada njegov sadržaj niti sirovu grešku JSON
parsera.
Ovim se ne tvrdi da je svaka nepovezana dijagnostika pružaoca usluge/dodatka
provjerena; širi pregled odredišta za zadržavanje prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` zasebna je
keš infrastruktura s autentifikacijom putem povratne petlje/tokena. Svaka operacija također zahtijeva
kanonski neprozirni ID principala. Prije nego što se omogući produkcijski pozivalac, on mora
izvesti taj ID iz autentificiranog zakupca i nikada ne smije proslijediti
vrijednost koju je odabrao klijent. Ključevi keša vezuju tog principala za kanonske ID-ove sesije i
reference videozapisa, pohranjuju samo njihove ključeve izvedene pomoću SHA-256 i ograničavaju i čitanja
i brisanje na istog principala. Keš pohranjuje najviše 16 izvedenih JPEG
kadrova po unosu, uklanja ih nakon deset minuta i podržava ograničena
čitanja pomoću `start`/`end` ili izričito brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja nezavisna su od globalnog ograničenja od 64 unosa/256 MiB: pritisak na kvotu principala
izbacuje samo najrjeđe nedavno korištene unose tog principala prije nego što se razmotri globalno
LRU izbacivanje. Istekli unosi uklanjaju se i iz obračuna principala i iz
globalnog obračuna pri aktivnostima keša, dok otkazivanje i neuspjeh validacije
ne potvrđuju djelimičnu zamjenu.

Keš odbacuje nekanonski Base64, suvišnu dopunu, medije koji nisu JPEG, neispravne ili
skraćene JPEG datoteke te JPEG datoteke koje izazovu upozorenje tokom dekodiranja cijele slike pomoću `sharp`
uz ograničenje resursa. Svaku prihvaćenu sliku ponovo kodira kao kanonski JPEG, određuje širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivaoca i odbacuje sve završne
poliglotske bajtove umjesto da ih zadržava. U obje kvote uračunava se samo ograničeni kanonski komprimirani bafer.
Ograničenje veličine JSON-a pri prijenosu uključuje dodatni prostor za Base64 za gornju granicu
dekodiranog ulaza od 32 MiB. Svaki
pohranjeni derivat bilježi svoj validirani JPEG format/rezoluciju, politiku uzorkovanja,
verziju derivacije, vrijeme kreiranja, sažetak sadržaja koji izračunava server i heširanu referencu
na nadređeni sadržaj zajedno sa sažetkom nadređenog sadržaja koji dostavlja pouzdani pozivalac. Otkazivanje se provjerava
između asinhronih faza dekodiranja i heširanja prije atomskog upisa u keš.

Ova faza još ne povezuje produkcijskog proizvođača s rutom i ne
omogućava odabir varijanti različitih rezolucija. Transparentna putanja zahtjeva kroz Video Bridge
stoga ne podrazumijeva dodatnu obradu, dok derivacija sigurnosnog principala vezanog za zakupca i
puni FU-08 životni ciklus s više rezolucija ostaju izričito navedeni kao naknadni zadaci, a ne
dokumentirani kao dovršeno ponašanje.

Opisi kadrova generiraju se sekvencijalno pomoću konfiguriranog Video modela. Prazna
vrijednost za nadjačavanje Video modela nasljeđuje postavku Vision; ako su obje prazne, Vision
automatski usmjerivač bira efektivni model sposoban za obradu slika. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji također
označava tekst kao nepouzdano zapažanje izvedeno iz medija i nalaže narednim
modelima da ne slijede upute pronađene u mediju. Ključevi keša opisa kadrova
uključuju JPEG bajtove, upit, vremensku oznaku i efektivni model; keširaju se samo uspješni
opisi. Stavke keša zadržavaju stvarni model koji je uspješno proizveo opis,
uključujući rezervni model; most prijavljuje `mixed` kada su različite kadrove
obradili različiti modeli. Pogodak u kešu ponovo koristi identitet tog modela
umjesto da ga preoznači kao zatraženi plan usmjeravanja. Keš rezultata za cijeli video
koristi ključ zasnovan na svakom ulazu koji mijenja izlaz — upitu, efektivnom
modelu, politici uzorkovanja, broju kadrova, načinu semantičke analize, SHA-256
otisku normalizirane smjernice fokusa, prozoru fokusa, `transcript`,
`audioTranscript` i zastavici kontaktne ploče — tako da promjena bilo koje od tih
dimenzija znači promašaj u kešu, a nikada ponovno korištenje zastarjelog rezultata. Verzija politike vizuelne
deduplikacije, prag i ograničeni broj kandidatskih kadrova također su izričito navedeni u
ključu i metapodacima keša rezultata; promjena politike stoga ne može ponovo koristiti zastarjeli
opis cijelog videa. Metapodaci keša rezultata v4 čuvaju način i
otisak, a nikada sirovi korisnički zadatak. Metapodaci zaštitnog mehanizma prijavljuju i
zatraženi i efektivni način analize; zatraženi način `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao efektivni `full`.

Zaštitni mehanizam izdvaja svaki podržani videodIO, ali opisuje najviše
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspjeli videozapisi i oni iznad ograničenja postaju eksplicitne sigurne
tekstualne oznake, tako da ne preostaje nikakav sirovi video. Kada je sposobnost nepoznata, ti dijelovi
zadržavaju svoj videonosač; svaki rezervni transkript slijedi prethodno opisanu ograničenu tekstualnu
konverziju. Ciljevi s `supportsVideo === true` zaobilaze most.
Signal prekida klijentskog zahtjeva prenosi se kroz preuzimanje, red čekanja brokera,
potprocese i pozive za generiranje opisa; prekidi zaustavljaju obradu između videozapisa i nikada pri grešci ne propuštaju
sirove medije.

Postavke izvršavanja pohranjene su u bazi podataka i validirane pomoću Zod-a:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                         |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionalno tokom izvršavanja, uz izričito uključivanje                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zadržava opće opise; `focused` koristi ograničeni, nepouzdani kontekst posljednje korisničke poruke |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; pri neuspjehu detektora koristi se `uniform`  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                             |

Ranije pohranjene vrijednosti vremenskog ograničenja za Video iznad 120 sekundi svode se na
krajnji rok brokera; novi upisi postavki iznad tog ograničenja odbacuju se.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu ovjerenu potvrdu lokalnosti povratne petlje
prije autentifikacije ili provjere izvršnog okruženja, a zatim zahtijeva autentifikaciju
za upravljanje. Vraća samo `available`, pročišćene verzije FFmpeg/ffprobe i fiksni
razlog kada izvršno okruženje nije dostupno. Interna krajnja tačka za izdvajanje nije
javni API za otpremanje: zasićenje reda čekanja vraća `503` uz `Retry-After`, prekid veze
pozivaoca vraća `499`, a istek fiksnog roka brokera vraća `504`. Konvertirani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u centralno
zaglavlje `x-omniroute-modality-bridge` bez uklanjanja segmenata Vision ili Audio.

### Maskiranje ličnih podataka (`piiMasker.ts`)

Izvršava se u **obje** faze.

- **`preCall`** klonira podatke, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke koje su obični stringovi) i primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na string polja `content`/`text`. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni lični podaci (PII) maskiraju se u odlaznim
  podacima. To je nezavisno od `INPUT_SANITIZER_MODE` (koji upravlja samo
  pravilima za ubacivanje zlonamjernih instrukcija u prompt). Kada je maskiranje isključeno, poziv bilježi broj
  detekcija bez prepisivanja sadržaja.
- **`postCall`** pravi duboku kopiju odgovora, pokreće `sanitizePIIResponse()` i
  alat za maskiranje strukture Responses API-ja (`maskResponsesOutput` — obuhvata
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog maskiranja,
  izmijenjeni odgovor zamjenjuje originalni.

Zaštitni mehanizam nikada ne blokira; samo dodaje oznake (`meta.detections`,
`meta.redacted`) ili prepisuje sadržaj.

#### Odabir po tipu, prilagođeni obrasci i brojači detekcija

**Kontrolna ploča → Postavke → Sigurnost → Maskiranje ličnih podataka** određuje _šta_ se maskira.
Time se maskiranje ne uključuje: to i dalje određuju `PII_REDACTION_ENABLED` (zahtjev) i
`PII_RESPONSE_SANITIZATION` (odgovor + SSE), a obje postavke su podrazumijevano isključene.

- **Odabir po tipu** — ugrađeni identifikatori navedeni su u
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ako nije postavljeno, obuhvaćen je svaki
  tip (ponašanje prije uvođenja ove postavke). Obrazac `ssn_us` u mehanizmu za obradu
  zahtjeva mapira se na `ssn`. Predlošci (Minimalni, Standardni, Finansijski,
  Brazilski, SAD, Potpuni) samo označavaju potvrdne okvire u korisničkom interfejsu.
- **Prilagođeni obrasci** — do 20 obrazaca s regularnim izrazima ili zamjenskim znakovima (`*` = do 64
  znaka koji nisu razmaci, `?` = jedan). Podudaranja postaju `[CUSTOM_REDACTED]`.
  Svaki obrazac prolazi kroz `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): najviše 500 znakova, zastavice ograničene
  na `g i m s u`, mora se uspješno kompilirati, mora proći provjeru `safe-regex` (katastrofalno
  povratno pretraživanje) i ne smije se podudarati s praznim stringom ili zamjenskom oznakom za maskiranje.
  Obrazac koji ne prođe provjeru odbija se pri spremanju i testiranju, a pohranjeni red
  koji ne prođe provjeru preskače se tokom izvršavanja umjesto da se kompilira. Prilagođeni obrasci
  primjenjuju se samo dok je maskiranje uključeno.
- **Brojači detekcija** — brojevi po tipu (nikada podudarne vrijednosti), čuvaju se u
  memoriji i resetuju pri ponovnom pokretanju (`src/lib/pii/piiDetectionStats.ts`). Povećavaju se samo
  dok je maskiranje uključeno.

Postavke se nalaze u tabeli `key_value` (imenski prostor `pii_settings`,
`src/lib/db/piiSettings.ts`) i čitaju se putem keša s trajanjem od 1 s. API:

| Metoda | Putanja                  | Svrha                                                                                |
| ------ | ------------------------ | ------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Stanje zastavica, `enabledTypes`, `customPatterns`, brojači detekcija                |
| `PUT`  | `/api/settings/pii`      | Zamjena `enabledTypes` (`null` = svi) i/ili `customPatterns`                         |
| `POST` | `/api/settings/pii/test` | Probno izvršavanje jednog obrasca na uzorku veličine do 8 KB; ništa se ne pohranjuje |

Sve tri metode zahtijevaju autentifikaciju za upravljanje i validiraju tijelo pomoću biblioteke Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Ubacivanje zlonamjernih instrukcija u prompt (`promptInjection.ts`)

Otkriva zlonamjerne strukture u sadržaju koji dostavi korisnik i provodi
konfigurirana pravila. Ponašanjem upravljaju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Podrazumijevano | Efekat                                                                                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`          | Kada je `false`, zaštitni mehanizam odmah završava obradu.                                                                                                                                                                                  |
| Režim           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`          | Pravila za ubacivanje instrukcija: `block`, `warn` ili `log`. (`redact` se prihvata radi kompatibilnosti s ranijim verzijama, ali **ne** uklanja ubačeni tekst; prepisivanjem ličnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimalni nivo ozbiljnosti potreban za blokiranje. Srednji nivo se podrazumijevano samo prati.                                                                                                                                              |

**Prioritet režima** (`getMode`): `options.mode` pozivaoca →
`INJECTION_GUARD_MODE` **nadjačavanje zastavicom funkcionalnosti iz baze podataka** (Kontrolna ploča → Postavke →
Zastavice funkcionalnosti) → `INJECTION_GUARD_MODE` iz okruženja → `INPUT_SANITIZER_MODE` iz okruženja →
`warn`. Nadjačavanje s kontrolne ploče zato ima prednost nad varijablama okruženja, pa korisnički interfejs za zastavice
funkcionalnosti upravlja aktivnim zaštitnim mehanizmom u stvarnom vremenu (bez ponovnog pokretanja). Čitanje iz baze podataka ima rezervno ponašanje:
ako dođe do greške, zaštitni mehanizam se vraća na ponašanje zasnovano na okruženju, a kada
nadjačavanje nije postavljeno, ponašanje je identično određivanju režima isključivo na osnovu okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup
   detektora koji se koristi i drugdje u obradi).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba s nivoom ozbiljnosti `high`).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (stringovi, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** barem jedna detekcija dostigne prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U režimima `warn`/`log` zaštitni mehanizam bilježi događaj, ali
dozvoljava poziv. Zajednička pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivaoce koji trebaju evaluirati upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor provjerava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje za provjeru obrazaca. Direktive za ubacivanje instrukcija nalaze se pri vrhu ulaza, pa ovo
ograničava opterećenje CPU-a i GC-a pri obradi regularnih izraza na sadržajima od više stotina KB bez slabljenja detekcije (up.
#3932, #4041).

### Maskiranje pristupnih podataka (`credentialMasker.ts`)

Izvršava se u **obje** faze, posljednje u podrazumijevanom lancu (prioritet `95`). Maskira
poznate obrasce API ključeva / tajnih tokena u odlaznom sadržaju (sadržaj
poruke, argumenti poziva alata, rezultati alata) **i** odgovoru pružaoca usluge, tako da
pristupni podatak zalijepljen u upit (ili ponovljen u rezultatu alata) ne procuri
uzvodnom pružaocu usluge ili nazad klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao maskiranje ličnih podataka (povezano sa strogim pravilom #20):
  onemogućeno osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitni mehanizam ne radi ništa —
  nikada ne blokira i nikada ne prepravlja sadržaj.
- `redactCredentials()` obilazi cijelo stablo sadržaja/odgovora (`walkValue()`,
  sigurno od zagađivanja prototipa i cikličnih referenci pomoću `WeakSet`) i zamjenjuje podudaranja
  zamjenskom oznakom `[REDACTED:<type>]`, klonirajući samo grane koje su zaista
  promijenjene.
- `CREDENTIAL_PATTERNS` obuhvata ključeve pružalaca LLM usluga (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za usluge u oblaku
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT tokene,
  nizove za povezivanje koji sadrže pristupne podatke (`mongodb://user:pass@...` itd.) i
  generički obrazac vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskiraju se strukturno (samo vrijednost, uz očuvanje prefiksa sheme poput
  `Bearer `/`Basic `), a ne pomoću generičkog tekstualnog regularnog izraza.
- Zaštitni mehanizam nikada ne blokira; samo prepravlja (`modifiedPayload` /
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
  block?: boolean; // true prekida daljnje izvršavanje lanca
  message?: string; // prikazuje se pri blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća ga preCall radi izmjene zahtjeva
  modifiedResponse?: TValue; // vraća ga postCall radi izmjene odgovora
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

Zaštitna mjera signalizira „bez promjene” vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje vrijednosti `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za naredne zaštitne mjere.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u zaštitne mjere. Prekid zahtjeva je namjerni izuzetak od ponašanja koje u slučaju greške dopušta nastavak: medijski mostovi zaustavljaju rad i obavljaju čišćenje bez vraćanja sirovog medijskog sadržaja odredištu za koje se zna da ga ne podržava.

## Registar (`registry.ts`)

Jedinstvena instanca `guardrailRegistry` pruža:

- `register(guardrail)` — dodaje zaštitnu mjeru (ili je zamjenjuje prema normaliziranom nazivu) i
  ponovo sortira prema rastućoj vrijednosti `priority`.
- `clear()` / `list()` — administrativne pomoćne funkcije.
- `runPreCallHooks(payload, context)` — prolazi kroz aktivne zaštitne mjere, prosljeđuje
  sadržaj zahtjeva kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i po izboru
  ponovo registrira podrazumijevane mjere radi čiste izolacije testova.

Obje funkcije za izvršavanje vraćaju `{ blocked, payload|response, results, guardrail?, message? }`
gdje je `results` niz zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` za svaku zaštitnu mjeru,
korisna za praćenje izvršavanja.

### Onemogućavanje zaštitnih mjera po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` objedinjuje
listu naziva zaštitnih mjera bez duplikata koje treba preskočiti za trenutni
zahtjev. Postoji pet kanala, koji se čitaju ovim redoslijedom i spajaju u jednu listu
(prvo pojavljivanje ima prednost pri uklanjanju duplikata):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` u tijelu zahtjeva (na najvišem nivou)
3. `metadata.disabledGuardrails` u tijelu zahtjeva (samo kada je `metadata` objekt)
4. Zaglavlje `x-omniroute-disabled-guardrails`
5. Naslijeđeno zaglavlje `x-disabled-guardrails`

Svih pet kanala se spaja, uključujući oba zaglavlja: slanje oba zaglavlja,
`x-omniroute-disabled-guardrails` i `x-disabled-guardrails`, preskače uniju
njihovih lista, a prazno moderno zaglavlje više ne skriva naslijeđeno
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ispravljeno u
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrijednosti mogu biti nizovi stringova ili string odvojen zarezima; iz naziva se uklanjaju okolni razmaci
i normaliziraju se na mala slova u formatu kebab-case (`pii_masker` → `pii-masker`), a prazne
stavke se odbacuju. Rezultat se prosljeđuje putem `context.disabledGuardrails`
registru, koji preskače odgovarajuće zaštitne mjere (`skipped: true` u `results`).

Lista za onemogućavanje utječe samo na **registar**. Režim `block` za ubrizgavanje uputa u prompt
predstavlja obaveznu granicu: posrednički sloj za zaštitu od ubrizgavanja
(`src/middleware/promptInjectionGuard.ts`) poziva `evaluatePromptInjection()`
bez ikakve liste za onemogućavanje koju kontrolira pozivalac (neaktivni
poziv `resolveDisabledGuardrails({ body })` koji je ranije koristio uklonjen je u
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), tako da se zahtjev
koji onemogućava `prompt-injection` i dalje odbija u režimu `block`. To je
namjerno. Kanale za onemogućavanje kontrolira pozivalac (tijelo zahtjeva,
metapodaci, zaglavlja), a pozivalac ne smije moći isključiti sigurnosnu
kontrolu koju je postavio operater
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija zaglavlja
iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mijenja samo koje se zaštitne mjere registra preskaču; ne dopušta klijentu
da zaobiđe posrednički sloj. Obavezne politike zaštitnih mjera po ključu i po grupi
prate se u RFC-u za v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Pogledajte [Obuhvat i ograničenja](#coverage-and-limits).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts` (rute iz porodice chat navedene pod
[Pokrivenost i ograničenja](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sastavlja listu preskakanja na osnovu API ključa, tijela zahtjeva
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvršava zaštitne mehanizme uzlaznim
   redoslijedom prioriteta:
   - Onemogućeni zaštitni mehanizmi evidentiraju se kao `skipped`.
   - `preCall` svakog zaštitnog mehanizma može izmijeniti sadržaj putem `modifiedPayload`.
   - Prvi `block: true` prekida lanac, a obrađivač vraća
     odgovor o odbijanju od strane zaštitnog mehanizma.
3. Sadržaj (koji je možda izmijenjen) prosljeđuje se kombinovanom usmjeravanju i slanju
   uzvodnom servisu.
4. **Samo bez striminga:** nakon što se odgovor sastavi,
   `guardrailRegistry.runPostCallHooks(...)` izvršava isti lanac nad
   odgovorom. `block: true` ovdje odbacuje odgovor uzvodnog servisa i vraća HTTP 400. Odgovori putem striminga u potpunosti preskaču ovaj korak.

Zaštitni mehanizmi koji izbace izuzetak evidentiraju se uz `error: <message>` i bilježe putem
`logger.warn`, ali lanac se nastavlja — sistem je namjerno projektovan da nastavi rad u slučaju greške.

## Pokrivenost i ograničenja

Registar zaštitnih mehanizama povezan je samo s tokom obrade chata. Ova ograničenja
utvrđena su testovima `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` i
`tests/unit/guardrail-pipeline-characterization.test.ts`; te testove ažurirajte
promišljeno kada se ponašanje promijeni.

### Gdje se izvršavaju hookovi

| Hook / kontrola                                  | Izvršava se na                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                | Zahtjevima koje obrađuje `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (i `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` i Telegram chat proxy. Također na testnoj krajnjoj tački kontrolne ploče `/api/guardrails/test`. Blokiranje prije poziva vraća HTTP 400. |
| `runPostCallHooks`                               | Samo na odgovorima chata **bez striminga** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odgovori putem striminga nikada ne dolaze do njega.                                                                                                                                                                                                                                                                                          |
| PII pri strimingu                                | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), uključen u tok u `streamingPipeline.ts` kada je `PII_RESPONSE_SANITIZATION` uključen. To nije zaštitni mehanizam, pa kanali za onemogućavanje ne utječu na njega.                                                                                                                                                                                                                 |
| Middleware za zaštitu od injekcije (naslijeđeni) | Svakoj `/v1` ruti koja sadrži prompt, uključujući porodicu chat (pogledajte [pokrivenost ruta](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo injekcija prompta.                                                                                                                                                                                                                                                            |

### Šta nije obuhvaćeno

- **Rute za medije, ugradnje i podatke** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikada ne dolaze do registra. Na njima
  se ne izvršavaju maskiranje ličnih podataka (PII), maskiranje pristupnih podataka niti povezivanje modaliteta. Njihova jedina
  provjera je naslijeđeni middleware za zaštitu od injekcije.
- **Odgovori putem striminga** nemaju zaštitne mehanizme nakon poziva: nema izvršavanja `pii-masker` ili
  `credential-masker` nakon poziva, niti blokiranja nakon poziva. Primjenjuje se samo transformacija PII podataka pri
  strimingu (kada je `PII_RESPONSE_SANITIZATION` uključen). Pristupni podatak
  vraćen u odgovoru putem striminga neće biti prikriven.
- **Kanali za onemogućavanje naspram middlewarea (namjerno):** middleware procjenjuje
  injekciju prompta vlastitim pozivom funkcije `evaluatePromptInjection()`, bez
  prosljeđivanja bilo kakve liste za onemogućavanje kojom upravlja pozivalac. Režim `block` predstavlja obaveznu
  granicu koju onemogućavanja pod kontrolom pozivaoca ne mogu zaobići, uključujući rute iz porodice chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogućavanje
  `prompt-injection` preskače samo zaštitni mehanizam u registru.

### Šta obrađuje odgovor prije faze nakon poziva

Na putanji bez striminga redoslijed je: izdvajanje memorije → izvršavanje ugrađenih
alata → zaštitni mehanizmi nakon poziva → izlaz pri blokiranju nakon poziva → pohrana u semantičku predmemoriju.

- **Izdvajanje memorije** i **izvršavanje alata** imaju pristup odgovoru prije nego što ga zaštitni
  mehanizmi nakon poziva mogu preoblikovati ili blokirati. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), izdvajanje
  memorije obrađuje izdvojeni tekst funkcijom `sanitizePII` kada je
  `PII_RESPONSE_SANITIZATION` uključen (i kod striminga i bez striminga), ali
  odgovor koji zaštitni mehanizmi nakon poziva kasnije blokiraju već je bio dostupan memoriji i
  alatima.
- **Semantička keš memorija** pohranjuje odgovor nakon obrade zaštitnim mehanizmima nakon poziva, pa pohranjuje
  preoblikovani odgovor, dok se blokirani odgovor nikada ne kešira. Unosi u keš memoriji
  vezani su za pojedinačni API ključ.

## Konfiguracija

Varijable okruženja koje čitaju ugrađeni zaštitni mehanizmi:

| Varijabla                             | Koristi je                       | Učinak                                                                                                                                                       |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | Postavite na `false` da potpuno onemogućite detekciju.                                                                                                       |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | Pravilo za ubacivanje instrukcija: `warn`, `block` ili `log`. Naslijeđena vrijednost `redact` ne prepisuje tekst ubačenih instrukcija.                       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | Način rada zaštite od ubacivanja instrukcija; ujedno i zastavica funkcionalnosti u bazi podataka koja **ima prednost nad** varijablama okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | Minimalni nivo ozbiljnosti koji `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | Naslijeđeni alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | Kada je `true`, podaci koji omogućavaju ličnu identifikaciju (PII) u zahtjevu se prikrivaju (nezavisno od načina rada zaštite od ubacivanja instrukcija).    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (u daljnjoj obradi) | Upravlja ponašanjem mehanizma za maskiranje na strani odgovora.                                                                                              |

Zaštitni mehanizmi Modality Bridge čitaju konfiguraciju tokom izvršavanja iz spremišta postavki
zasnovanog na bazi podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Naslijeđeni
ključevi `visionBridge*` prihvataju se samo kao dokumentovana rezervna opcija za čitanje
tokom jednog ciklusa; upisi putem kontrolne ploče koriste primarne ključeve. Zadane vrijednosti i funkcija
za odabir rezervne opcije nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, dok su naslijeđene
konstante zadržane u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, uz zajedničke
postavke `modalityBridgeCache*`. Audio nema rezervnu opciju s naslijeđenim ključevima jer su ti
ključevi uvedeni sa shemom Modality Bridge.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, uz zajedničke postavke `modalityBridgeCache*`.
Podrazumijevano je onemogućen jer su FFmpeg/ffprobe opcionalne operativne
zavisnosti, a generisanje opisa kadrova povećava kašnjenje i trošak korištenja modela.

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

1. Kreirajte `src/lib/guardrails/myGuardrail.ts` koji nasljeđuje `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrujte ga pri uvozu (dodavanjem iz `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tokom izvršavanja — registar zamjenjuje
   svaki prethodni zaštitni mehanizam s istim normalizovanim nazivom.
4. Dodajte testove u `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova kako biste započeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` kako biste započeli s praznim registrom i
registrovali samo zaštitne mehanizme koji se testiraju. Vision Bridge podržava ubrizgavanje
zavisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pruža
odgovarajuće tačke za ubrizgavanje postavki, mogućnosti, odabira STT modela, provjera
vjerodajnica i transkripcije. Testovi stoga mogu provjeravati oba toka bez pristupa
bazi podataka ili mreži.

## Pogledajte i

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji omogućava
  otkrivanje ubacivanja instrukcija u prompt i maskiranje ličnih podataka (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke za Vision Bridge i
  lista modela s obaveznim korištenjem mosta
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke izvršavanja za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — nezavisni sloj (prekidač strujnog kola, periodi čekanja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost ruta zaštitom od ubacivanja instrukcija i red-team testiranje (Faza 8 · Blok D)

Zaštita od ubacivanja instrukcija (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvataju korisničke promptove. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo evidentiranje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Tip               | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeće) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Generativne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Izdvajanje teksta (`extractMessageContents`) obuhvata `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (svake noći, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
korpus OWASP-LLM uz `INJECTION_GUARD_MODE=block`; garak pokreće probe (preskače se bez tajnog ključa).
`moderations` je uključen radi dosljednosti. Način blokiranja predstavlja obaveznu granicu: `evaluatePromptInjection()`
zanemaruje listu onemogućenih mehanizama za pojedinačni zahtjev koju mu prosljeđuje posrednički softver, pa `disabledGuardrails`
**ne** izuzima rutu iz ove zaštite ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Noćni radni tok (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva zadatka:

- **`promptfoo-guard` (blokirajući)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  uz `INJECTION_GUARD_MODE=block`. Svaki napadački slučaj (npr. "zanemari sve
  prethodne instrukcije…", zaobilaženja zaštite u stilu DAN-a) provjerava da odgovor sadrži
  `error.code === "SECURITY_001"`, odnosno da je zaštita zaista odbila zahtjev.
- **`garak` (savjetodavni)** — pokreće garak `--probes promptinject,dan,leakreplay`
  na lokalnoj instanci OmniRoute (`http://localhost:20128/v1`). Uslovljen je
  tajnim ključem pružaoca (`PROMPTFOO_PROVIDER_KEY`); preskače se bez greške, a na kraj mu je dodano
  `|| true`, tako da izvještava bez uzrokovanja neuspjeha CI-ja.

Pokrivenost pomoćnih funkcija zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvata svaku `/v1` rutu koja prima prompt; tekst prompta izdvaja se iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.

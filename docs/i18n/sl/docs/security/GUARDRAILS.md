# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Zadnja posodobitev:** 2026-10-17 — v3.8.52 (dodano [Pokritost in omejitve](#coverage-and-limits):
> katere poti in poti odgovorov dosežejo kavlji, združeni glave onemogočanja (#16412), način blokiranja
> injiciranja kot obvezna meja (#16413) in kaj vidi odgovor pred post-klicem)

Varnostne ograje (guardrails) uveljavljajo varnost, pravilnike in transformacije vsebine na meji med storitvijo OmniRoute in zgornjimi ponudniki. Vsaka varnostna ograja lahko pregleda (in izbirno zavrne, pretvori ali označi) vsebino zahtev (`preCall`) ter odzive zgornjih ponudnikov (`postCall`).

Sistem je **fail-open**: če varnostna ograja med izvajanjem sproži napako, register zabeleži napako in nadaljuje z naslednjo varnostno ograjo, namesto da bi prekinil zahtevo. Blokiranje je eksplicitna odločitev (`block: true`) in nikoli naključje. Edina izjema je prekinjena zahteva: ko je klicateljev `signal` preklican, varnostna ograja, ki sproži napako, zavrne izvajanje kaveljčka namesto da bi bila preskočena.

Kavlji se **ne** izvajajo na vsaki poti ali vsakem odgovoru. Preden se zanesete na varnostno ograjo kot na varnostni nadzor, preberite [Pokritost in omejitve](#coverage-and-limits).

## Vgrajene varnostne ograje

Register ob uvozu samodejno naloži šest varnostnih ograj v vrstnem redu prioritet (glejte `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteta | Ime                 | Faza(-e)       | Datoteka              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Številke z nižjo prioriteto se izvajajo **prve**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Osnovni model GLM 5.3 in `glm-5.3-{low,high,max}` imata eksplicitne metapodatke registra/specifikacije `supportsVision:false`. Različice GLM 5.3 Flash ostajajo modeli z naravno podporo za vid. Pot `/v1/messages` za Claude Code vstopi v skupno verigo varnostnih ograj pred klicem `handleChat` **pred** prevajanjem iz Claude v OpenAI; ugnezdene slike v rezultatih orodja `Read` je treba opisati ali obdelati, preden jih to prevajanje povzdigne v vsebino `image_url` v OpenAI (#17069).

Presreže zahteve s slikami, namenjene **modelom brez podpore za vid**, ter bodisi preusmeri celotno zahtevo na model, ki podpira vid, bodisi zamenja dele slik z besedilnimi opisi, ki jih ustvari nastavljiv model za vid pred klicem zgornjega ponudnika. To ponudnikom, ki podpirajo samo besedilo, omogoča transparentno obravnavo večmodalnih vsebin.

Potek:

1. Preskoči, če ciljni model že podpira vid (razen če se pojavi na seznamu vsiljenega premostitvenega modela `isVisionBridgeForcedModel`).
2. Izvleče dele slik prek `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki preusmerja na **enotni zaznavalnik medijev** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` – edini vir resnice, ki si ga deli s filtrom združljivosti kombinacij. Ekstrakcija je omejena na oblike, ki jih `replaceImageParts` lahko ponovno združi (pogodba med ekstrakcijo in zamenjavo): OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL `source.type:"url"` in `input_image` v API-ju Responses. Ujemajoče se slike, ugnezdene znotraj `tool_result.content` za Claude Code in izhodov orodij Responses, se prav tako izvlečejo in nadomestijo na svojih prvotnih poteh; oblike, ki služijo samo kot indikatorji, so material filtra kombinacij in se ne izvlečejo.
   Preskoči, če ni najdeno nič.
3. Razreši konfiguracijo med izvajanjem prek `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključi nastavitve `modalityBridge*` imajo prednost; podedovani ključi `visionBridge*` ostanejo kot **povratek za en cikel** (okno za povrnitev). Preskoči pred katerim koli pregledovanjem medijev, ko je premostitev onemogočena.
4. Izbirnik načina (`modalityBridgeVisionMode`, glejte spodnjo tabelo) odloča med preusmeritvijo in opisovanjem. Preusmeritev vrne `modifiedPayload` samo z zamenjanim `model` ter metapodatke `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisovanja: omeji število slik na `maxImages`, sestavi poziv, ki se zaveda naloge, preveri predpomnilnik opisov, pokliče model za vid **vzporedno**
   (`Promise.allSettled`) in vstavi besedilne dele `[Image N]: <description>` na njihovo mesto. Neuspelo opisovanje vrne `null`: surova slika se ohrani za neznane cilje / cilje s podporo za vid (#4012), vendar **potrjen neposredni cilj samo z besedilom** ali kombinacija brez vida dobi eksplicitno besedilno osnutek `(unavailable — no vision-capable provider connected)` za vsako neopisano sliko, vključno z delnimi napakami in slikami, ki presegajo omejitev klicev opisovanja (#17069). Obstoječi nadomestni mehanizem za opisovanje kombinacij ob popolnem neuspehu ostaja v veljavi (#8430).
6. Vrne `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Obnašanje                                                                                                                                                                                                                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Podedovana hevristika, nespremenjena (#6640/#7204): modeli, ki niso combo ali so `auto/`, se preusmerijo na najboljši vidni model, razen če ima izvirni model že uporabne poverilnice (takrat sledi opis); combo cilji vedno opisujejo.                                              |
| `describe` |          | Vedno opiši – blok preusmeritve se v celoti preskoči; izbrani model uporabnika vedno odgovori.                                                                                                                                                                                       |
| `reroute`  |          | Vsili preusmeritev: zaščita modela s poverilnicami se obide. Zaščita poverilnic cilja preusmeritve še vedno velja – ko ni na voljo nobenega uporabnega vidnega cilja, most blokira z jasno napako, namesto da bi opisoval ali pošiljal surove slike cilju, ki podpira samo besedilo. |

Načini z vsiljenim delovanjem se predčasno zaključijo **preden** se požene hevristika za `auto`; obnašanje `auto` je po bajtih identično varnostni pregradi pred PR-1.

#### Obseg API ključa (`visionBridgeKeyScope.ts`)

Ko API ključ klicatelja omejuje `allowedConnections`, bazen kvot (`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), most izbere samo modele za preusmeritev in opis, ki jih ključ lahko uporablja, na povezavah, ki jih ključ lahko uporablja. Klic opisa nato vedno gre skozi samodejno zanko OmniRoute z glavo `x-omniroute-self-loop-key-id`, tako da prejeti klepetalni zahtevek ponovno uveljavi pravilnik o povezavah in modelih tega ključa. `enforceApiKeyPolicy()` upošteva to glavo samo skupaj z nosilcem samodejne zanke, tako da lahko samo zoži dostop, ID, ki se ne razreši, pa je zavrnjen.

Če za ključ ni dovoljen noben vidni model, **potrjen cilj, ki podpira samo besedilo**, lokalno zavrne zahtevek za sliko z jasnim odzivom HTTP 400, namesto da bi posredoval bajte slike nesposobnemu zgornjemu sistemu (#17069). Za cilje z neznano ali privzeto zmožnostjo vida pot opisa ohrani prejšnje obnašanje tipa `fail-open` (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Zahtevki brez ključa in ključi brez teh omejitev se obnašajo povsem enako kot prej.

#### Poziv za opis, ki se zaveda naloge (`modalityBridgeVisionTaskAware`)

Privzeto **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pripne besedilo **zadnjega uporabniškega sporočila** (skrajšano na 500 znakov) k osnovnemu pozivu za opis, s čimer usmeri opis proti temu, kar je uporabnik dejansko vprašal (vzorec `codex-vision-proxy`), in prosi vidni model, naj prepiše vidno besedilo. Če je zastavica izklopljena – ali ni uporabniškega besedila – se osnovni poziv uporabi nespremenjen.

Lastni zahtevek samodejne zanke za opis, ki je združljiv z OpenAI (`callVisionModelSingle()` v `visionBridgeHelpers.ts`), vedno zahteva `image_url.detail: "high"` – brezpogojno, za vsakega klicatelja/ponudnika, brez vezave na kateri koli signal odjemalca. Vzorčenje z nizkimi podrobnostmi poslabša natančnost OCR ravno za nalogo prepisa besedila, ki jo ta poziv zahteva, zato sam klic opisa vedno zahteva visoke podrobnosti, ne glede na raven podrobnosti, ki jo je uporabil izvirni dohodni zahtevek. To vpliva samo na telo notranjega zahtevka za opis; ne spremeni tega, kako OmniRoute posreduje lasten `image_url.detail` klicatelja pri primarnem zahtevku – ta privzeta vrednost se uporabi ločeno in samo za zaznane odjemalce OpenCode v funkciji `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Veja žičnega formata Anthropic za samodejno zanko opisa nima polja `detail` in nanjo ne vpliva nobena privzeta vrednost.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Default | Range             |
| ------------------------------ | ------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** – opis, ki ga vrne `callVisionModel()`, se posreduje nespremenjen, s čimer se ohrani obstoječe obnašanje. Katera koli vrednost v razponu 100–50000 skrajša opis s pripono `…`, preden se ponovno vstavi kot `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`). Povišajte to vrednost za OCR naloge, bogate s podrobnostmi, kjer spodnji model potrebuje celoten prepis; znižajte jo, da omejite porabo žetonov pri klepetavih vidnih modelih. Polje nadzorne plošče se nahaja na napredni plošči zavihka Vision (`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) in omeji vsako vrednost med 1 in 99 navzgor na spodnjo mejo 100, medtem ko eksplicitno vrednost `0` pusti nedotaknjeno – `0` je veljavna vrednost Zod sama po sebi (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), in ne le privzeta vrednost "ni nastavljeno".

#### Predpomnilnik opisov (`modalityBridge/bridgeCache.ts`)

Pomnilniški predpomnilnik LRU + TTL za izhode opisov, deljen v celotnem procesu.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z uokvirjanjem s predpono dolžine (brez trkov na mejah polj). Komponenta modela je **konfigurirani** mostni model, ne model, ki je dejansko odgovoril – `callVisionModel` lahko interno preklopi nazaj, ključenje na poskus pa bi razdrobilo predpomnilnik. Neuspeli opisi se nikoli ne predpomnijo. Nastavitve:

| Ključ                           | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizacija oddaljenih slik (samo-povratni opis / pridobivanje base64)

Ko most sam pridobi **oddaljeno** sliko — Anthropicov klic za opis samega sebe in pretvorba base64 v formatu claude-wire (`ensureBase64ImagesForClaudeWire`), oba prek `fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se nastali podatkovni URI posreduje skozi `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`), preden se vgradi v zahtevo modela za vid. Prevelike slike se pomanjšajo na **2048 px dolgo stranico** (kar se ujema z omejitvijo spreminjanja velikosti, ki jo OpenAI/Anthropic že uveljavljata na strežniški strani), kar zmanjša število bajtov za nalaganje in zakasnitev, ne da bi to vplivalo na to, kar vidi vizualni model. Spreminjanje velikosti uporablja `sharp`, naložen prek dinamičnega uvoza: na platformi, kjer se njegova izvorna binarna datoteka ne more naložiti, `normalizeDataUri()` **nikoli ne vrže napake** — preklopi na posredovanje prvotnih bajtov, zato pot opisa/pretvorbe base64 vedno deluje naprej. Bajti, ki niso slike (pridobitev, ki ni vrnila slike, ki jo je mogoče dekodirati), se prav tako posredujejo nespremenjeni. Ta normalizacija je omejena na slike, ki jih most pridobi za lastni samo-klic — nikoli se ne uporablja za surove podatke (payload) klicatelja, kar je v skladu z načelom mutacije izključno na podlagi predhodne privolitve (Hard Rule #20).

#### Shema nastavitev + migracija

Novi ključi `modalityBridge*` so preverjeni z Zod v `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` in skupina `modalityBridgeAudio*`, ki jo uporablja Audio Bridge. Migracija `141_modality_bridge_settings.sql` kopira obstoječe zastarele vrednosti `visionBridge*` v ustrezen nov ključ (je idempotentna, nikoli ne prepiše vrednosti `modalityBridge*`, ki jo je nastavil upravljavec); zastarani ključi ostajajo sprejeti kot rezervna možnost branja za en cikel izdaje.

#### Glava prosojnosti + statistika

Odgovori, preoblikovani z opisom, nosijo glavo `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (zgrajeno s funkcijo `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`, označeno s `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`). Preusmerjene zahteve nimajo **nobene** glave — podatkovni tovor je ostal nedotaknjen, zamenjava modela pa je že vidna v polju `model` v telesu odgovora.

`GET /api/modality-bridge/stats` (upravljavska avtentikacija, isto raven kot `GET /api/settings`) vrne pomnilniške števce na posamezno modalnost `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in `video`. `averageLatencyMs` kot imenovalec uporablja `latencySamples` in ne vseh poskusov; operacija brez merjenja časa ne ustvarja vzorca z nič milisekundami. `bridged` ostaja vzvratno združljiv vzdevek za uspešne pretvorbe; neuspeli poskusi ga ne povečajo. Števci se po načrtu ponastavijo ob ponovnem zagonu procesa (telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Namenska stran nadzorne plošče je `/dashboard/settings/modality-bridge`. Njeni zavihki `Vision`, `Audio` in `Video`, ki jih je mogoče nasloviti prek URL-ja, ohranjajo parametre poizvedbe med preklapljanjem vrednosti `tab`. Zavihek Vision omogoča omogočanje, način, izbiro modela (vključno s samodejno privzeto vrednostjo), pozivanje z zavedanjem o nalogi, napredne omejitve časovne prekoračitve/slike/dolžine opisa/predpomnilnika, števce izvajalnega okolja in varovan vzorčni zahtevek. Zavihek Audio je prav tako aktiven: omogoča vklop, izbirnik modela samo za STT z možnostjo Auto, časovne omejitve / omejitve največje dolžine posnetka, števce zvoka in vzorčni test `input_audio`. Zavihek Video je delujoč: poročanje o stanju izvajalnega okolja FFmpeg/ffprobe — eno od štirih izrecnih stanj uporabniškega vmesnika (`unknown`, ko preverjanje še poteka ali se ni moglo dokončati, `restricted` na gostitelju nadzorne plošče z ne-povratno zanko, kjer se preverjanje na strani odjemalca preskoči, `unavailable`, ko je bilo preverjeno in potrjeno manjkajoče, ali `available` z različicami FFmpeg/ffprobe) — shranjuje omejitve vklopa/modela/okvirja/videa/časovne prekoračitve, filtrira izbirnik modelov na modele, ki podpirajo vid, in izpostavlja števce videa.

Nekdanja kartica Vision Bridge pod nastavitvami umetne inteligence je povezava za združljivost z novo stranjo; ne vsebuje več druge kopije obrazca. Ponudniki predstavnosti prav tako povezujejo delovne procese pretvorbe slike v besedilo in govora v besedilo z ustreznimi zavihki Modality Bridge, ne da bi pri tem odstranili obstoječe igrišče za govor v besedilo.

**Obhod sprejema s samo-zanko:** ko klic opisa poteka prek lastne `/v1` samo-zanke OmniRoute (nestandardni model ponudnika), podzahteva pošlje `x-omniroute-admission-bypass: internal` in je avtenticirana z razrešeno poverilnico samo-zanke — lokalnim stražarjem `sk_omniroute` v lokalnem načinu ali okoljskim ključem `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`, ki ga je konfiguriral upravljavec (#1350), tako da lahko namestitve z `REQUIRE_API_KEY=true` še vedno izvajajo klic opisa. Obhod se upošteva samo za te točne poverilnice, zato zunanji odjemalci ne morejo uporabiti glave za preskok sprejema.

Zastarele privzete vrednosti se nahajajo v `src/shared/constants/visionBridgeDefaults.ts`; nove privzete vrednosti za način/zavedanje o nalogi/predpomnilnik in razreševalnik nastavitev se nahajajo v `src/shared/constants/modalityBridgeDefaults.ts`. Varovalni mehanizem izpostavlja možnost konstruktorja `deps`, tako da lahko testi vstavijo lažne implementacije `getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreže zahteve za klepet, ki vsebujejo zvok, preden dosežejo cilj, za katerega ni znano, da sprejema zvočni vhod. Nikoli ne preusmerja zahteve za klepet: zvočni deli se prepišejo prek obstoječe večdelne končne točke, združljive z OpenAI, izbrani model za klepet pa nadaljuje z besedilnimi prepisi.

Potek:

1. Razreši `supportsAudio` prek `getResolvedModelCapabilities()`. Eksplicitni metapodatki registra ponudnikov imajo prednost, sledijo jim statični metapodatki modela in sinhronizirani `modalities_input`. Deklariran vhodni seznam brez `audio` je `false`; če ni dokazov o zmožnostih, ostane `null`. Tako `false` kot `null` aktivirata konzervativni most, medtem ko ga `true` obide.
2. Razreši nastavitve `modalityBridgeAudio*` in izlušči vstarljive vrhnje zvočne dele iz vsakega sporočila prek deljenega detektorja `detectMediaParts()`. Podprte oblike prenosa so `input_audio`, `audio_url` in `source.media_type: "audio/*"` pri OpenAI. Ugnezden zvok je zaznan za usmerjanje, vendar ga pot vstavljanja ne odstrani. Delo je omejeno z `modalityBridgeAudioMaxClips`; kasnejši deli ostanejo nedotaknjeni.
3. Upoštevaj konfigurirani `provider/model` ali pa pusti, da `selectAudioBridgeModel()` preišče `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnem vrstnem redu kataloga in izbere prvi model z uporabno aktivno poverilnico ponudnika.
4. `callAudioTranscription()` pretvori zvok base64/data-URI v večdelno `file` datoteko ali prenese oddaljeni `audio_url` prek zunanje zaščite, ki dovoljuje samo javne naslove, z DNS-pripetostjo in omejitvijo 25 MB. Nato pošlje datoteko in izbrani model prek zahteve POST v lokalno zanko `/v1/audio/transcriptions`, avtenticirano s `resolveSelfLoopBearer()`. Obstoječa pot prepisa izvede običajno iskanje poverilnic, obravnavo ohlajanja/omejevanja hitrosti in posredovanje ponudniku.
5. Uspešni klici nadomestijo svoje dele z `[Audio N]: <transcript>`. Klici se izvajajo s `Promise.allSettled`: posamična napaka ohrani izvirni zvočni del (pogodba #4012). Če vsak klic spodleti in je za cilj dokazano, da velja `supportsAudio === false`, deli postanejo `[Audio N]: (unavailable — no STT provider connected)` (pogodba #8430). Za neznani cilj (`null`) rezultat ob vseh napakah ostane nedotaknjen. Dokazani cilj, ki podpira samo besedilo, brez uporabne poverilnice STT prejme enak eksplicitni nadomestni element brez izvedbe omrežnega klica.

Uspešni prepisi uporabljajo predpomnilnik LRU/TTL za zvočni most na ravni procesa. Ključ združuje zvočno referenco, stabilno oznako operacije `audio-transcription` in izbrani model STT; napake se nikoli ne predpomnijo. Poskusi z zvokom posodobijo deljene števce `bridged`, `cacheHits`, `failures` in `lastUsedAt`. Preoblikovani odzivi nosijo glavo `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotaknjene zahteve ne prejmejo segmenta zvočnega mostu.

Nastavitve med izvajanjem so shranjene v bazi podatkov in preverjene z Zod:

| Ključ                         | Privzeto | Obseg           |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto ali STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Deljeni predpomnilnik še naprej nadzorujejo `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Video most (`videoBridge.ts`, `videoBridgePipeline.ts`)

Prestreza vrhnje video dele v `messages` v API-ju Chat Completions in `input` v API-ju Responses, preden se pokliče cilj brez znanega izvornega podpornega videa. Podprte oblike so `input_video`, `video_url`, `video_source`, URL-ji HTTPS in podatkovni URI-ji `data:video/*;base64,...`. Navadna imena datotek v besedilu se ne obravnavajo kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prehod zahtev, preverjanje zmožnosti/pravilnika, agregacijo na zahtevo in odzivno vsebino. Delo na posamezen video – pridobivanje, predpomnilnik celotnega rezultata, opis zaporedja sličic (ki združuje kateri koli zvočni prepis, ki ga je deklariral klicatelj), ter metrike/prekinitev/čiščenje na posamezen poskus – je skrito za `processVideoPart` v `videoBridgePipeline.ts`, ki se kliče enkrat na video del znotraj zanke v `preCall`. Ta modul definira tudi eksplicitne meje vrat `VideoMediaBrokerPort` (pridobivanje bajtov in izluščevanje vzorčenih sličic), `VideoAudioTranscriptionPort` (združevanje zvočnega prepisa, ki ga je deklariral klicatelj, z vzorčenimi napisi) in `VideoDrilldownPort` (meja perzistence poglobljenega pregleda sličic; še ni povezana v `processVideoPart` – danes zapise poglobljenega pregleda piše samo ločena pot `/api/modality-bridge/video/drilldown`).

Javna pot zahteve `/v1` nikoli ne uvozi ali sproži podprocesa. Oddaljeni videoposnetki se prenašajo pod mejo 50 MiB; vgrajeni videoposnetki base64 imajo konservativno omejitev 36 MiB dekodiranih podatkov na video, tako da lahko ovojnica modela/sporočil/okvirja ostane znotraj omejitve sprejemanja javnih JSON zahtev, ki znaša 50 MiB. Ocene dolžine in dekodirane velikosti vgrajenih podatkov se preverijo pred dodelitvijo pomnilnika. Protokol HTTPS je obvezen za začetni oddaljeni URL in vsako preusmeritev, pri čemer se uporablja obstoječa zunanja zaščita, ki dovoljuje samo javne naslove, z DNS-pripetostjo. Bajti nato prečkajo natančno notranjo mejo posrednika `POST /api/modality-bridge/video/extract`. Ta pot je hkrati `LOCAL_ONLY` in `SPAWN_CAPABLE`, sprejema samo zahteve z avtentikacijo na ravni procesa iz zaupanja vredne povratne zanke ter nikoli ne sprejema URL-ja, poti v datotečnem sistemu, izvedljive datoteke ali seznama argumentov. Cevovod velikosti telesa API-ja in bralnik postopnega branja telesa v obravnavalniku neodvisno uveljavljata omejitev vhoda posrednika v višini 50 MiB. Njegova omejena čakalna vrsta izvaja eno ekstrakcijo naenkrat, dovoljuje štiri čakajoče naloge in omejuje čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; nespremenljiv seznam dovoljenih formatov izključuje formate seznamov predvajanja in manifestov. Za dovoljene vsebnike družine MOV zunanje reference podatkov MOV ostanejo privzeto onemogočene, nespremenljiv ukaz pa jih ne omogoča. Tako `ffprobe` kot `ffmpeg` uporabljata seznam dovoljenih protokolov, ki dovoljuje samo `file`, eno nit, fiksna polja argumentov, brez lupine in izvedljive datoteke, razrešene iz `PATH`. Tokovi naslovnih slik niso primerni kandidati za predvajanje. Vsi predvajalni toki morajo izpolnjevati omejitve, pri čemer ima izrecni privzeti tok prednost pred determinističnim nadomestnim virom z najnižjim indeksom. Videoposnetki so omejeni na 600 sekund, 8.192 slikovnih pik na dimenzijo in 33.554.432 izvornih slikovnih pik. FFmpeg vzorči 1–16 vmesnih sličic JPEG, pomanjša daljši rob na največ 1.024 slikovnih pik brez povečevanja manjših vhodnih podatkov in nikoli ne prejme URL-ja. Vzorčenje je privzeto `uniform`. Izbirni pravilnik `scene_aware` in eksperimentalni pravilnik `segment_aware` izvedeta en dodatni fiksni prehod FFmpeg čez že preverjeni lokalni tok, izbereta omejene časovne žige prizorov `showinfo` ter se ob napaki detektorja, časovni prekoračitvi, nepravilno oblikovanem izhodu ali praznem naboru kandidatov deterministično vrneta na iste enakomerne sredinske točke (`uniform`). Način z zavedanjem segmentov (`segment_aware`) dodeli vzorce sredinskih točk sorazmerno s preverjenimi intervali prizorov; dokazi in nadomestno vedenje načina z zavedanjem segmentov so podrobno opisani spodaj. Stroga omejitev na 16 sličic se uporabi po izbiri v vsakem pravilniku. Ko ima zahteva, ki upošteva prizore, proračun samo za eno sličico, uporabi enakomerno sredinsko točko aktivnega celotnega videa ali okna ostrenja in poroča `policyEffective: uniform`: posamezna izbrana sličica prizora ne more ohraniti obeh časovnih koncev. Klicatelj lahko izbirno zagotovi končno okno ostrenja (sekundi `start`/`end`); meje so prirezane na trajanje predstavnostne vsebine, obrnjena ali neskončna okna se zavrnejo, vsi pravilniki vzorčenja pa se izvajajo samo znotraj normaliziranega intervala. Nastalo okno je vključeno v metapodatke vzorčenja in v predpono nezaupanja vrednega opisa, tako da lahko nadaljnji modeli ločijo osredotočen odlomek od celotne časovne osi.

Fokus semantičnih napisov je ločena, izrecna nastavitev. Privzeti način analize `full` ohranja obstoječi poziv sličice in nikoli ne posreduje besedila zahteve modelu za napise. V načinu `focused` posrednik prebere samo najnovejše neprazno uporabniško besedilo `text`/`input_text` iz istega vsebnika klepeta ali odzivov, ga normalizira v NFC, strne krmilne znake in presledke ter ga omeji na 500 kodnih točk Unicode. Prazen rezultat se vrne na natančen poziv `full`. Uporaben namig je serializiran kot JSON v namenskem bloku nezaupanja vrednega uporabniškega konteksta in lahko daje prednost samo opazljivim podrobnostim; ne more preglasiti ločenega opozorila proti sledenju navodilom, ki so vidna ali slišna v predstavnostni vsebini. Besedilni fokus nikoli ne izpelje `start`/`end` ali spremeni časovnega vzorčevalnika.

#### FU-07 dokazi o strukturnih segmentih

`segment_aware` uporablja en omejen predanalitski prehod čez že preverjeni lokalni video tok. Nespremenljiva veriga filtrov najprej pomanjša videoposnetek na širino največ 320 slikovnih pik, zazna spremembe prizorov in zamrznjene intervale, nato pa vzorči s hitrostjo 1 sličice na sekundo za zamegljenost, povprečno svetlost ter prostorske in časovne informacije (SI-TI). Prehod je omejen na 600 strukturnih vzorcev, eno nit FFmpeg/filtra, iste sezname dovoljenih protokolov (samo `file`) in vsebnikov, omejitev izhoda procesa na 1 MiB in največ 30 sekund znotraj skupnega roka za prekinitev/rok posrednika. Nikoli ne sprejme ukaza, filtra, poti ali URL-ja iz zahteve.

Strukturne vrednosti so deterministični dokazi vzorčenja, ne pa semantično razumevanje videa. Ne izpeljujejo subjektov, dejanj, napisov, govora ali namena uporabnika. Meje prizorov in zamrznitev tvorijo segmente; pokritost z zamrznitvijo, zamegljenost, osvetlitev, prostorske podrobnosti in časovne spremembe vplivajo samo na to, kako se dodeli obstoječi proračun 1–16 sličic. Popolnoma zamrznjen segment je omejen na eno sličico, medtem ko nezamrznjeni segmenti tekmujejo za preostali proračun. Ko je meja več kot sličic, se ohrani enakomerna pokritost časovne osi, tako da hitri zgodnji rezi ne morejo skriti dolgega zaključnega segmenta. Meje prizorov znotraj 1-sekundne ločljivosti analize meje zamrznitve se združijo.

Manjkajoči filtri, nepravilno oblikovani ali prazni dokazi, napaka detektorja ali časovna omejitev omejene predanalize privzeto preidejo na natančen pravilnik enakomernih sredinskih točk. Prekinitev s strani klicatelja ali rok posrednika ne preide na privzeto stanje: temveč zaustavi izvajajoči se podproces, prepreči poznejše pridobivanje sličic, zasebno začasno drevo pa se odstrani v bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ustvarja deterministične prave priprave FFmpeg za prihranke pri klicih napisov po odstranitvi podlag, dodelitev proračuna za gosto gibanje, dokaze o zamegljenosti/osvetlitvi/SI-TI, hitre reze z dolgim repom in lažne pozitivne rezultate postopnega zatemnjevanja. Zabeleži sistemski čas predanalize in, kjer je na voljo `/usr/bin/time`, procesorski čas podprocesa ter najvišjo porabo pomnilnika RSS. Njegova preverjanja kakovosti so zgolj strukturni orakli. Kakovost pravega modela za napise ostaja v stanju `HOLD`, ker to ogrodje nima pooblaščene končne točke ali zamrznjenega presojevalnika. Denarni prihranki prav tako ostajajo v stanju `HOLD`, razen če `--caption-cost-per-call-usd` podaja izrecno pozitivno oceno na klic; skripta nikoli ne ustvarja izmišljenih rezultatov.

Vsak okvir je omejen na 4 MiB, vsi surovi okvirji skupaj na 23 MiB, serializiran odgovor posrednika pa na 32 MiB. Zasebni začasni direktorij se odstrani v `finally`. OmniRoute ne vključuje FFmpeg in ne sprejema po meri določene poti do izvedljive datoteke. Pred ustvarjanjem napisov most izvede konservativen prehod vizualne deduplikacije: vsak JPEG se pomanjša na sivi medpomnilnik 16×16 in se primerja samo z zadnjim ohranjenim okvirjem. Za zahtevan proračun napisov, večji od enega okvirja, ekstrakcija zagotovi omejen bazen kandidatov, ki obsega do dvakratnik tega proračuna in nikoli več kot 16 okvirjev. Zahtevana zgornja meja se uporabi šele po deduplikaciji, pri čemer se prvi in zadnji izbrani kandidat ohranita med končnim stanjšanjem, ko je proračun vsaj dva. Verzionska politika `grayscale-16x16-mean-cells-v2` uporablja večjo vrednost med povprečno razliko svetlosti in razmerjem celic sličice, katerih normalizirana razlika je vsaj 0,05. Prag podvajanja je konstanta 0,04, izbrana zaradi predvidljivosti in ne kot izpostavljena izvajalna nastavitev. Ta sekundarni signal z visokim kontrastom ohranja majhne premike in spremembe vidnega besedila, ki jih primerjava zgolj na podlagi povprečja lahko spregleda. Napake primerjalnika ali dekompresorja odpovejo odprto in ohranijo pokritost. Izhodni metapodatki ločujejo izvlečene kandidate, uspešno uporabljene okvirje in zavržene vizualne dvojnike.

Izrecno označeni video del lahko zahteva kontaktni list s časovnimi žigi. Most zgradi največ 4-stolpčno, 16-okvirno mrežo JPEG. Vsaka 512-slikovna celica vtisne svoj izvorni časovni žig v visokokontrastni spodnji pas, medtem ko isti časovni žigi ostanejo v besedilnih metapodatkih za nadaljnjo povezovanje in revizijo. Celoten JPEG ostaja omejen na 32 MiB. Če `sharp` ne more dekodirati ali sestaviti mreže, se most vrne na posamezne sličice JPEG; prekinitev s strani odjemalca se še vedno širi skozi operacijo lista.

Dokazila o napredovanju so namerno ločena od mikromeritev sintetične sestave. `scripts/perf/video-bridge-contact-sheet-eval.ts` določa shemsko verzijsko upravljano ogrodje A/B za prave vizualne modele, združljive z OpenAI. Meri žetone, ki jih poroča ponudnik, celostno zakasnitev (vključno s sestavo lista), število klicev modela in ohranitev dejstev, opredeljenih v manifestu. Surovi odzivi modela se ne zapisujejo v poročilo; ohranijo se samo zgoščene vrednosti SHA-256 in ujemajoči se ID-ji dejstev. Ogrodje ne izvede nobenega mrežnega klica ali klica plačljivega modela, razen če je posredovan parameter `--execute-real` in so konfigurirani `--model`, `OMNIROUTE_BASE_URL` ter `OMNIROUTE_API_KEY`. Brez tega izrecnega pravega zagona njegova strojno berljiva sodba ostane `HOLD`; meritve sintetičnega koristnega tovora / števila klicev same po sebi niso dokazilo o napredovanju.

Klicatelji lahko podprtemu video delu priložijo izbirno polje `transcript.cues`, če že razpolagajo z usklajenim besedilom. Vsak namig mora vsebovati `text`, končni interval `start`/`end` znotraj preiskovanega trajanja in `source` z bele liste (`client`, `embedded` ali `audio-bridge`); `confidence` ima privzeto vrednost `1` in mora ostati med `0` in `1`. Točni dvojniki namigov se zlijejo. OmniRoute nikoli ne začne prepisa iz teh metapodatkov: preverjeni namigi se kopirajo v opisani rezultat z virom, stopnjo zaupanja in intervalom ter se upodabljajo kot nezaupanja vredna opazovanja poleg napisov okvirjev. Neveljavno besedilo, besedilo izven obsega ali besedilo brez porekla se zavrne, namesto da bi se pomešalo v tok napisov. Oba kanala prepisa v telesu zahteve normalizirata posredovano poreklo v `client`, vključno s samodejno uveljavljenimi oznakami `embedded` ali `audio-bridge`. Samo strežniški adapter lahko dodeli te zaupanja vredne oznake prek argumenta `trustedSource`, ki je na voljo samo v kodi; polje JSON zahteve ne more doseči tega argumenta. Besedilo prepisa ostaja nezaupanja vredna vsebina, pridobljena iz medijev, ne glede na njeno poreklo, in ne sme nikoli določati avtorizacije.

Napredni klicatelj lahko zagotovi sled `audioTranscript` za isti video; obravnava se kot besedilo, ki ga je zagotovil odjemalec, in ne kot dokaz o strežniški transkripciji. Šiv zlitja poganja vizualna in zvočna opazovanja v enem časovnem roku in pod signalom za prekinitev, jih ureja na skupni časovnici, združuje točne dvojnike in poroča o delnem rezultatu, ko uspe samo ena stran. Neveljaven `audioTranscript` se poslabša na ta delni rezultat — vizualni opis se ohrani, zvočna veja pa zabeleži očiščeno kodo napake — namesto da bi propadel celoten video. Razpoložljivost na vejo, delna zastavica in očiščene kode napak se ohranijo v opisanem rezultatu, v metapodatkih varnostnih ograj (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v metapodatkih predpomnilnika rezultatov in v števcih zlitja mostu. Privzeta pot Video Bridge ne sproži pretvorbe govora v besedilo ali prenosa druge medijske kopije; brez te izrecne sledi ostaja video samo vizualni.

**Hramba prepisa (#12150 P1).** To velja samodejno, kadarkoli Video Bridge (ki je sam po sebi izbirčen/opt-in) upodobi segment prepisa – za to ni posebne zastavice za hrambo. Ko zahtevek upodobi kateri koli segment prepisa (s strani klicatelja deklariran `transcript` ali spojeni `audioTranscript`), varnostna pregrada to označi kot `videoBridgeObserved` in ustvari redigirano senco opisa videa – identičen prikaz, v katerem je besedilo vsakega segmenta nadomeščeno z `[redacted-video-transcript]`, zgrajeno z zamenjavo strukturiranega polja segmenta pred sestavo niza (nikoli z razčlenjevanjem sploščenega besedila, tako da vsebina segmenta – bodisi zlonamerna bodisi navadna, vključno s telesi, ki vsebujejo `]`, kot sta `[inaudible]`/`[music]` – ne more preživeti). Trajno shranjeno telo zahteve v dnevniku klicev zamenja vsak besedilni del, izpeljan iz videa, s to redigirano senco, ujemajočo se po vsebini; sidro `fullText` se ponovno prebere iz dokončanega bremena predklicne varnostne pregrade, tako da se ujemanje še vedno posreči po tem, ko poznejše varnostne pregrade v verigi (maskirniki PII in poverilnic, prioritete 10/95) prepišejo besedilo opisa na mestu in ko sistemski poziv/predaja/vstavljanje v pomnilnik preoblikujejo polje sporočil. Telo, poslano navzgor modelu, ostane nespremenjeno. Opaženi zahtevek prav tako ne polni trajnega pomnilnika (izvabljanje, izpeljano iz zahteve in odziva, se preskoči), tako da lastni odgovor modela ne more ponoviti besedila prepisa v pomnilnik.

**Surova polja videa (#12430).** Ko je most omogočen in je domača podpora za video neznana ali je ni, definirana polja `transcript`/`audioTranscript` prav tako aktivirajo `videoBridgeObserved`, celo po napaki opisa ali omejitvi `maxVideos`. `null` in prazni nizi štejejo; odsotna polja in nevideoposnetkovni metapodatki ne. Zadržane kopije redigirajo ta polja ali izpustijo zahtevek, predpomnilniki in pomnilnik pa se obidejo.

Na teh nadomestnih poteh veljavni segmenti klicatelja postanejo podprti deli `text`/`input_text` namesto nestandardnih polj ponudnika. Oba sledova, ki ju zagotovi zahtevek, ostajata nezaupanja vredna opazovanja `client` z izrecnim opozorilom, da video ni bil opisan in časovne oznake niso bile preverjene glede na predstavnost. Obstoječi skupni proračuni in proračuni na segment (256 segmentov / 64 KiB) veljajo za oba sledova skupaj; časovne oznake se morajo ujemati s posrednikovo zgornjo mejo 600 sekund in s katerim koli priloženim oknom ostrenja. Neveljavni sledovi se zavržejo in se ne posredujejo kot poljubno besedilo; veljaven sorodni sled se lahko še vedno uporablja, razen če je presežen njun skupni proračun. Polja `null`/prazna polja ne dodajajo besedila. Ta nadomestna pot ne dodaja nobenega pridobivanja predstavnosti ali prepisovanja. Razširitvena polja prepisa so odstranjena iz nadomestnega nosilca videa in njegovih objektov `video_url`/`source`. Seznam dovoljenih za omrežni protokol OpenAI ostaja strog; neznani domači nosilci videa ostajajo na voljo, znane ciljne baze samo za besedilo pa ohranjajo varne označbe. Strukturirane redigirane sence ščitijo dodano besedilo prepisa, medtem ko prvotni zahtevek v lasti klicatelja ostaja nespremenjen. Cilji z domačo podporo in onemogočeni mostovi ohranjajo svoje obstoječe obnašanje obhoda.

Dodatne zadržane kopije uporabljajo isti signal opazovanega zahtevka. Surovi posnetek odjemalčevega zahtevka pred varnostno pregrado, čudeči/čakajoči zahtevek v pomnilniku in zgodnji dnevnik zavrnjenih zahtevkov strukturno nadomeščajo polja prepisa v delih videa; besedilni pozivi, ki jih sintetizirajo stopnje cevovoda in predaja konteksta, so redigirani v ponoru shranjenega telesa zahtevka. Trajno shranjena označba `video_content_removed` povzroči, da nadaljevanje `previous_response_id` neuspešno zapre namesto rekonstrukcije besedila, ki je bilo namerno zavrnjeno. Če opazovani zahtevek pred beleženjem izgubi svojo redigirano senco na del, ali celo ena od več video senc ne uspe se ujemati po poznejših mutacijah zahtevka, se zadržano telo zahtevka v celoti izpusti namesto hrambe delno redigiranega prepisa.

Za opazovani zahtevek lahko odziv modela navede kateri koli del prepisa brez strukturirane meje segmenta. Njegov trajnostno zabeležen dnevnik klicev `responseBody` je zato nadomeščen z označbo opustitve; podroben artefakt cevovoda (ki lahko vključuje zgornje/odjemalske dele telesa in kose pretoka) se ne ohrani. Predpomnilniki semantike, idempotence in ponovne predstavitve sklepanja obidejo branja in pisanja za ta zahtevek. Zahtevek ponudnika in odziv, viden odjemalcu, ostajata nespremenjena. Zgodnji bajti ohranjanja povezave se izpraznijo iz začasnega medpomnilnika, ko je podroben artefakt izpuščen. Opozorilo o nepravilno oblikovanem toku EventStream v Kirotu poroča samo o številu bajtov podatkovne vsebine, nikoli o njeni vsebini ali surovi napaki razčlenjevalnika JSON. To ne trdi, da je bila vsaka nepovezana diagnostika ponudnika/vtičnika revidirana; širši pregled zadržanih ponorov je sleden v #11658.

Notranji življenjski cikel `/api/modality-bridge/video/drilldown` je ločen predpomnilniški substrat z zanko nazaj in overitvijo s žetonom. Vsaka operacija zahteva tudi kanonični neprozorni ID glavnega subjekta. Preden je produkcijski klicatelj omogočen, mora izpeljati ta ID iz preverjenega najemnika in nikoli ne sme posredovati vrednosti, ki jo je izbral odjemalec. Ključi predpomnilnika vežejo tega subjekta na kanonične ID-je seje in video referenc, shranjujejo samo njihove ključe, izpeljane iz SHA-256, ter omejujejo tako branja kot brisanje na istega subjekta. Predpomnilnik shrani največ 16 izpeljanih sličic JPEG na vnos, jih izteče po desetih minutah ter podpira omejena branja `start`/`end` ali izrecni izbris seje.

Vsak subjekt je omejen na 16 vnosov in 64 MiB kanoničnih podatkov JPEG. Te omejitve so neodvisne od globalne zgornje meje 64 vnosov / 256 MiB: pritisk na kvoto subjekta izseli samo vnose tega subjekta, ki so bili najmanj nedavno uporabljeni, preden se upošteva globalna izselitev LRU. Pretečeni vnosi se počistijo iz računovodstva tako subjekta kot globalnega računa ob dejavnosti predpomnilnika, medtem ko preklic in napaka preverjanja veljavnosti ne potrdita delne zamenjave.

Predpomnilnik zavrača nekanonični Base64, prekomerno zapolnitev, medije, ki niso JPEG, nepravilno oblikovane ali skrajšane datoteke JPEG ter datoteke JPEG, ki med omejenim dekodiranjem celotne slike z orodjem `sharp` sprožijo opozorilo. Vsako sprejeto sliko ponovno kodira v kanonični JPEG, širino in višino izpelje iz dekodiranih bajtov, namesto da bi zaupal poljem klicatelja, ter zavrže morebitne preostale poliglotne bajte, namesto da bi jih ohranil. V obeh kvotah se obračuna samo omejeni kanonični stisnjeni medpomnilnik. Omejitev prenosa prek protokola JSON vključuje režijske stroške Base64 za zgornjo mejo 32 MiB dekodiranega vhoda. Vsaka shranjena izpeljava zabeleži preverjen format/ločljivost JPEG, politiko vzorčenja, različico izpeljave, čas ustvarjanja, izračunano vsebino na strani strežnika ter zgoščeno referenco nadrejenega elementa skupaj z zgoščeno vsebino nadrejenega elementa zaupanja vrednega klicatelja. Prekinitev se preverja med asinhronimi fazami dekodiranja/zgoščevanja pred atomsko uveljavitvijo v predpomnilnik.

Ta sklop še ne povezuje produkcijskega proizvajalca z usmerjevalno potjo in ne omogoča izbire večločljivostnih variant. Prozorna pot za zahteve Video Bridge zato ne prinaša dodatnega dela, medtem ko izpeljava glavnega subjekta, vezana na najemnika, in celoten večločljivostni življenjski cikel FU-08 ostajata eksplicitno nadaljnje delo in ne dokumentirano dokončano obnašanje.

Okvirji so zaporedno opremljeni z opisi s konfiguriranim modelom Video. Prazna preglasitev za Video prevzame nastavitve za Vision; če sta obe prazni, samodejni usmerjevalnik Vision izbere ustrezni model, ki podpira vid. Uspešni opisi nadomestijo izvirni del s stabilno predpono `[Video description:`, ki besedilo označuje tudi kot nezanesljivo opazovanje, pridobljeno iz medijev, in modelom v nadaljevanju naroča, naj ne sledijo navodilom, najdenim v mediju. Ključi predpomnilnika za opise okvirjev vključujejo bajte JPEG, poziv, časovno oznako in učinkoviti model; v predpomnilnik se shranjujejo samo uspešni opisi. Vnosi v predpomnilniku ohranijo dejanski model uspešnega proizvajalca, vključno z nadomestnim modelom; prehod poroča `mixed`, ko so bili različni okvirji ustvarjeni z različnimi modeli. Zadetek v predpomnilniku ponovno uporabi identiteto tega proizvajalca, namesto da bi jo preimenoval v zahtevani usmerjevalni načrt. Predpomnilnik rezultatov za celoten video se ključuje glede na vsak vhod, ki spremeni izhod – poziv, učinkoviti model, politiko vzorčenja, število okvirjev, način semantične analize, prstni odtis SHA-256 normaliziranega namiga za ostrenje, okno ostrenja, `transcript`, `audioTranscript` in zastavico kontaktnega lista –, zato je sprememba katere koli od teh dimenzij zgrešitev predpomnilnika in nikoli zastarela ponovna uporaba. Različica politike vizualne deduplikacije, prag in omejeno število kandidatnih okvirjev so prav tako eksplicitni v ključu predpomnilnika rezultatov in metapodatkih; sprememba politike zato ne more ponovno uporabiti zastarelega opisa celotnega videa. Metapodatki predpomnilnika rezultatov v4 ohranijo način in prstni odtis, nikoli pa surove naloge uporabnika. Metapodatki varoval poročajo o zahtevanem in dejanskem načinu analize; zahtevani način `focused` brez uporabnega uporabniškega besedila se poroča kot dejansko `full`.

Varovalo izlušči vsak podprti video del, vendar opiše največ toliko video posnetkov, kot jih določa `modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano, da ima `supportsVideo === false`, spodleteli video posnetki in tisti, ki presegajo omejitev, postanejo eksplicitni označevalci varnega besedila, tako da surovi video ni ohranjen. Če je zmožnost neznana, ti deli ohranijo svoj nosilec videa; vsak nadomestni prepis sledi zgoraj opisani omejeni pretvorbi besedila. Cilji z nastavitvijo `supportsVideo === true` zaobidejo prehod. Signal za preklic zahteve odjemalca se širi skozi prenos, vrsto posrednika, podprocese in klice za opise; preklici se ustavijo med videoposnetki in se nikoli ne odprejo v smeri surovih medijev.

Nastavitve izvajalnega okolja so shranjene v bazi podatkov in preverjene z orodjem Zod:

| Key                                 | Default     | Range / behavior                                                                                                 |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Izbirno izvajalno okolje, vključitev po izbiri                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohranja splošne opise; `focused` uporablja omejen, nezanesljiv kontekst zadnjega uporabnika               |
| `modalityBridgeVideoModel`          | `""`        | Podaeduj model Vision Bridge                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali proporcionalni `segment_aware`; ob napaki detektorja se preklopi nazaj na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                   |

Stare shranjene vrednosti časovne omejitve za Video, ki presegajo 120 sekund, se omejijo na rok posrednika; nove zapisane nastavitve nad tem limitom se zavrnejo.
`GET /api/modality-bridge/video/runtime` zahteva lokalnost povratne zanke z zaupanja vrednimi žigi pred avtentikacijo ali preverjanjem izvajalnega okolja, nato pa zahteva upravljavsko avtentikacijo. Vrne samo `available`, očiščene različice FFmpeg/ffprobe in fiksni razlog, ko izvajalno okolje ni na voljo. Notranja končna točka za ekstrakcijo ni javni API za nalaganje: zasičenost vrste vrne `503` skupaj s `Retry-After`, odklop klicatelja vrne `499`, fiksni rok posrednika pa vrne `504`. Preoblikovani odzivi dodajo `video->text;model=<visionModel>;parts=<videos>` v osrednjo glavo `x-omniroute-modality-bridge`, ne da bi odstranili segmente Vision ali Audio.

### Maskirnik PII (`piiMasker.ts`)

Izvede se v **obeh** fazah.

- **`preCall`** klonira tovor, preišče `system`, `messages`, `input` in `prompt` (vključno z elementi z golo nizovno vrednostjo) ter uporabi `processPII()` (iz `@/shared/utils/inputSanitizer`) na nizovnih poljih `content`/`text`. Ko je `PII_REDACTION_ENABLED=true`, so zaznani PII podatki prikriti v odhodnem tovoru. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzoruje samo pravilnik o injiciranju pozivov). Ko je prikrivanje izklopljeno, klic beleži števce zaznavanja brez prepisovanja vsebine.
- **`postCall`** globoko klonira odziv, zažene `sanitizePIIResponse()` in maskirni mehanizem oblike Responses API (`maskResponsesOutput` — pokriva `output_text` in `output[].content[].text`). Če pride do kakršnega koli prikrivanja, spremenjeni odziv nadomesti izvirnega.

Varovalo nikoli ne blokira; vsebino samo označuje (`meta.detections`, `meta.redacted`) ali jo prepiše.

#### Izbira glede na vrsto, lastni vzorci in števci zaznav

**Nadzorna plošča → Nastavitve → Varnost → Prikrivanje PII** izbere, _kaj_ se prikrije. Ne vklopi pa samega prikrivanja: to še vedno določata `PII_REDACTION_ENABLED` (zahtevek) in `PII_RESPONSE_SANITIZATION` (odziv + SSE), pri čemer sta privzeto obe možnosti izklopljeni.

- **Izbira glede na vrsto** — vgrajeni identifikatorji so navedeni v `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Nenastavljeno pomeni vsako vrsto (obnašanje, preden je ta nastavitev obstajala). Vzorec `ssn_us` pogonskega mehanizma zahtevkov se preslika v `ssn`. Predloge (Minimal, Standard, Financial, Brazilian, USA, Full) samo izpolnijo potrditvena polja v uporabniškem vmesniku.
- **Lastni vzorci** — do 20 vzorcev z regularnimi izrazi ali nadomestnimi znaki (`*` = do 64 znakov, ki niso presledki, `?` = en znak). Ujemanja postanejo `[CUSTOM_REDACTED]`. Vsak vzorec gre skozi `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): največ 500 znakov, zastavice omejene na `g i m s u`, se mora prevesti, prestati preverjanje `safe-regex` (katastrofalno vračanje nazaj) in se ne sme ujemati s praznim nizom ali nadomestnim mestom za prikrivanje. Vzorec, ki ne uspe, je zavrnjen ob shranjevanju in testiranju, shranjena vrstica, ki ne uspe, pa se ob izvajalnem času preskoči namesto prevede. Lastni vzorci se izvajajo samo, ko je prikrivanje vklopljeno.
- **Števci zaznav** — števci glede na vrsto (nikoli ujemajoče se vrednosti), shranjeni v pomnilniku in ponastavljeni ob ponovnem zagonu (`src/lib/pii/piiDetectionStats.ts`). Povečujejo se samo takrat, ko je prikrivanje vklopljeno.

Nastavitve se nahajajo v tabeli `key_value` (imenski prostor `pii_settings`, `src/lib/db/piiSettings.ts`) in se berejo prek 1-sekundnega predpomnilnika. API:

| Metoda | Pot                      | Namen                                                                         |
| ------ | ------------------------ | ----------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stanje zastavice, `enabledTypes`, `customPatterns`, števci zaznav             |
| `PUT`  | `/api/settings/pii`      | Zamenjava `enabledTypes` (`null` = vse) in/ali `customPatterns`               |
| `POST` | `/api/settings/pii/test` | Poskusni zagon enega vzorca na vzorcu velikosti največ 8 KB; nič se ne shrani |

Vsi trije zahtevajo skrbniško avtentikacijo in preverjajo veljavnost telesa z Zod (`src/shared/validation/schemas/piiSettings.ts`).

### Injiciranje pozivov (`promptInjection.ts`)

Zaznava nasprotnikovne strukture v vsebini, ki jo posreduje uporabnik, in uveljavlja konfigurirani pravilnik. Obnašanje je krmiljeno z okoljskimi spremenljivkami in možnostmi konstruktorja:

| Nastavitev      | Okoljska spremenljivka                                                                                | Privzeto | Učinek                                                                                                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogočeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | Ko je `false`, se varovalo predčasno zaključi.                                                                                                                                                                        |
| Način           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | Pravilnik o injiciranju: `block`, `warn` ali `log`. (`redact` je sprejeto zaradi vzvratne združljivosti, vendar **ne** odstrani besedila injiciranja; prepisovanje PII v zahtevku nadzoruje `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalna stopnja resnosti, potrebna za blokiranje. Srednja stopnja je privzeto samo opazovalna.                                                                                                                      |

**Prednost načinov** (`getMode`): `options.mode` klicatelja → `INJECTION_GUARD_MODE` **preglasitev zastavice funkcij v bazi podatkov** (Nadzorna plošča → Nastavitve → Zastavice funkcij) → okoljska spremenljivka `INJECTION_GUARD_MODE` → okoljska spremenljivka `INPUT_SANITIZER_MODE` → `warn`. Preglasitev na nadzorni plošči ima zato prednost pred okoljskimi spremenljivkami, tako da uporabniški vmesnik za zastavice funkcij nadzoruje delujoče varovalo v živo (brez ponovnega zagona). Branje baze podatkov je varno pred napakami: če pride do napake, se varovalo vrne na obnašanje na podlagi okolja, ko pa preglasitev ni nastavljena, je obnašanje identično razreševanju samo na podlagi okolja.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (deljeni nabor detektorjev, ki se uporablja drugje v cevovodu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in `markdown_system_block`, oba z resnostjo `high`).
3. Izbirni `customPatterns`, posredovani prek možnosti konstruktorja (nizi, regularni izrazi ali zapisi `{ name, pattern, severity }`).

Ko je `mode === "block"` **in** vsaj ena zaznitev doseže prag resnosti, `preCall` vrne `{ block: true, message: "Request rejected: suspicious content detected" }`. V načinih `warn`/`log` varnostni mehanizem zabeleži dogodek, vendar dovoli klic. Deljeni pomočnik `evaluatePromptInjection()` je prav tako izvožen za klicatelje, ki morajo oceniti pozive, ne da bi šli skozi register.

**Omejitev skeniranja (v3.8.20):** detektor pregleda samo **prvih 16 KB** združenega besedila poziva — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16.384 bajtov) v `src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot `evaluatePromptInjection()` izvedeta `slice(0, MAX_INJECTION_SCAN_BYTES)` pred izvajanjem zanke vzorcev. Direktive injiciranja se nahajajo blizu vrha vnosa, zato to omejuje porabo CPE/GC regularnih izrazov na večstokilobajtne vnosne podatke brez oslabitve zaznavanja (glej #3932, #4041).

### Maskirnik poverilnic (`credentialMasker.ts`)

Izvaja se v **obeh** fazah, kot zadnji v privzeti verigi (prioriteta `95`). Iz odhodnega podatkovnega paketa (vsebina sporočila, argumenti klica orodja, rezultati orodja) in odgovora ponudnika odstrani znane vzorce ključev API / tajnih žetonov, tako da poverilnica, prilepljena v poziv (ali vrnjena prek rezultata orodja), ne uhaja k nadrejenemu ponudniku ali nazaj odjemalcu.

- **Samo z vključitvijo (opt-in)**, enako konvenciji kot pri zakrivanju podatkov PII (povezano s strogo pravilom št. 20): onemogočeno, razen če je `settings.credentialRedactionEnabled === true` **ali** `CREDENTIAL_REDACTION_ENABLED=true`. Če je izklopljen, varnostni mehanizem ne deluje (no-op) — nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` preišče celotno drevo podatkovnega paketa/odgovora (`walkValue()`, varno pred onesnaženjem prototipa, varno pred cikli prek `WeakSet`) in zamenja ujemajoče se vrednosti z nadomestnim besedilom `[REDACTED:<type>]`, pri čemer klonira samo tiste veje, ki so se dejansko spremenile.
- `CREDENTIAL_PATTERNS` pokriva ključe ponudnikov LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), žetone VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), ključe v oblaku (AWS access key, Twilio, SendGrid, Mailgun), zasebne ključe / JWT-je, povezovalne nize s poverilnicami (`mongodb://user:pass@...` itd.) ter splošni vzorec vrednosti glave `Authorization`/`x-api-key`/`api-key`/`apikey`. Ključi v obliki glave (`authorization`, `x-api-key`, `api-key`, `apikey`) se zakrijejo strukturno (samo vrednost, pri čemer se predpona sheme, kot sta `Bearer ` ali `Basic `, ohrani) in ne prek splošnega besedilnega regularnega izraza.
- Varnostni mehanizem nikoli ne blokira; izvaja samo prepisovanje (`modifiedPayload` / `modifiedResponse`) in označevanje (`meta.credentialsRedacted`, `meta.count`).

Varovalo pred regresijo: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // true prekine verigo
  message?: string; // prikaže se ob blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrne preCall za prepis zahtevka
  modifiedResponse?: TValue; // vrne postCall za prepis odgovora
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

Varnostna pregrada signalizira „brez sprememb“ z vrnitvijo `void`, `{}` ali `{ block: false }`. Vračanje `modifiedPayload`/`modifiedResponse` nadomesti vrednost, ki potuje skozi verigo za nadaljnje varnostne pregrade. `signal?: AbortSignal` prenaša življenjski cikel klicatelja v varnostne pregrade. Prekinitev zahtevka je namerna izjema `fail-open`: medijski mostovi ustavijo delo in izvedejo čiščenje, ne da bi obnovili surove medije v cilj, za katerega je znano, da jih ne podpira.

## Register (`registry.ts`)

Singleton `guardrailRegistry` omogoča:

- `register(guardrail)` — doda (ali zamenja z normaliziranim imenom) varnostno pregrado in jo ponovno razvrsti po naraščajoči `priority`.
- `clear()` / `list()` — administrativne pomožne funkcije.
- `runPreCallHooks(payload, context)` — iterira čez aktivne varnostne pregrade, posreduje vsebino prek `modifiedPayload` in se ustavi ob prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in izbirno ponovno registrira privzete vrednosti za čisto izolacijo testov.

Oba izvajalnika vrneta `{ blocked, payload|response, results, guardrail?, message? }`, kjer je `results` polje zapisov `GuardrailExecutionResult`, ki vključujejo polja `blocked`, `skipped`, `modified`, `error` in `meta` za posamezno varnostno pregrado, kar je uporabno za sledenje.

### Onemogočanje varnostnih pregrad na posamezni zahtevek

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` združi seznam imen varnostnih pregrad, ki naj se preskočijo za trenutni zahtevek, iz katerega so odstranjeni dvojniki. Obstaja pet kanalov, ki se berejo v tem vrstnem redu in združijo v en sam seznam (ob odstranjevanju dvojnikov ima prednost prva pojavitev):

1. `apiKeyInfo.disabledGuardrails`
2. Telo zahtevka `disabledGuardrails` (na vrhnji ravni)
3. Telo zahtevka `metadata.disabledGuardrails` (samo ko je `metadata` objekt)
4. Glava `x-omniroute-disabled-guardrails`
5. Stara glava `x-disabled-guardrails`

Vseh pet kanalov je združenih, vključno z obema glavama: pošiljanje `x-omniroute-disabled-guardrails` in `x-disabled-guardrails` hkrati preskoči unijo njunih seznamov, prazna sodobna glava pa ne skriva več stare glave ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), odpravljeno v [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrednosti so lahko matrike nizov ali niz, ločen z vejicami; imena se obrežejo in normalizirajo v maločrkovni kebab-case (`pii_masker` → `pii-masker`), prazni vnosi pa se zavržejo. Rezultat se posreduje preko `context.disabledGuardrails` registru, ki preskoči ustrezne varnostne pregrade (`skipped: true` v `results`).

Seznam onemogočenih vpliva samo na **register**. Način `block` za injiciranje pozivov je obvezna meja: vmesna programska oprema za zaščito pred injiciranjem (`src/middleware/promptInjectionGuard.ts`) kliče `evaluatePromptInjection()` brez kakršnega koli seznama za onemogočanje, ki bi ga nadzoroval klicatelj (mrtvi klic `resolveDisabledGuardrails({ body })`, ki ga je včasih izvajala, je bil odstranjen v [#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), zato je zahtevek, ki onemogoči `prompt-injection`, v načinu `block` še vedno zavrnjen. To je namerno. Kanali za onemogočanje so pod nadzorom klicatelja (telo zahtevka, metapodatki, glave), klicatelj pa ne sme imeti možnosti izklopa varnostnega nadzora, ki ga je nastavil upravljavec ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija glav iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) spremeni samo to, katere varnostne pregrade registra se preskočijo; odjemalcu ne omogoča zaobidenja vmesne programske opreme. Obvezne politike varnostnih pregrad za posamezne ključe in skupine se spremljajo v v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417). Glejte [Pokritost in omejitve](#coverage-and-limits).

## Vrstni red izvajanja

Za vsak zahtevek, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts` (poti pogovorne družine, navedene pod
razdelkom [Pokritost in omejitve](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` zgradi seznam preskokov iz ključa API, telesa in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvede varovala v naraščajočem vrstnem redu prioritete:
   - Onemogočena varovala so zabeležena kot `skipped`.
   - Funkcija `preCall` posameznega varovala lahko prepiše podatkovni tovor prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo in obdelovalnik vrne odziv zavrnitve varovala.
3. (Morebitno prepisan) podatkovni tovor preide v kombinirano usmerjanje in začetno pošiljanje navzgor.
4. **Samo za načine brez pretakanja:** ko je odziv sestavljen,
   `guardrailRegistry.runPostCallHooks(...)` zažene isto verigo za odziv. `block: true` tukaj zavrže zgornji odziv in vrne HTTP 400. Pretakani odzivi ta korak v celoti preskočijo.

Varovala, ki povzročijo napako, so zabeležena z `error: <message>` in zabeležena prek
`logger.warn`, vendar se veriga nadaljuje — zasnovano kot fail-open.

## Pokritost in omejitve

Register varoval je vgrajen samo v klepetalni cevovod. Te omejitve so
zaklenjene s testoma `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` in
`tests/unit/guardrail-pipeline-characterization.test.ts`; te teste namensko posodobite, ko se vedenje spremeni.

### Kje se izvajajo kavlji

| Kavelj / nadzor                                                   | Izvaja se na                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                                                 | Zahtevke, ki jih obdeluje `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (in `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` ter klepetalni proxy za Telegram. Tudi testna končna točka nadzorne plošče `/api/guardrails/test`. Predklicni blok vrne HTTP 400. |
| `runPostCallHooks`                                                | Samo **nepretakani** klepetalni odzivi (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Pretakani odzivi jih nikoli ne dosežejo.                                                                                                                                                                                                                                                                                                    |
| Streaming PII                                                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), vključen v cevovod v `streamingPipeline.ts`, ko je `PII_RESPONSE_SANITIZATION` vklopljen. To ni varovalo, zato kanali za onemogočanje nanj ne vplivajo.                                                                                                                                                                                                                      |
| Vmesna programska oprema za zaščito pred injiciranjem (zastarela) | Vsaka pot `/v1`, ki vsebuje pozive, vključno s klepetalno družino (glejte [pokritost poti](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo injiciranje pozivov.                                                                                                                                                                                                                                                         |

### Kaj ni zajeto

- **Poti za predstavnost, vdelave in podatke** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikoli ne dosežejo registra. Tam se ne izvajajo maskiranje PII, maskiranje poverilnic ali premostitev modalnosti. Edino preverjanje zanje je zastarela vmesna programska oprema za zaščito pred injiciranjem.
- **Pretakani odzivi** nimajo varoval po klicu: brez maskiranja PII (`pii-masker`) ali poverilnic (`credential-masker`) po klicu in brez bloka po klicu. Uporablja se samo transformacija pretakanja PII (ko je `PII_RESPONSE_SANITIZATION` vklopljen). Poverilnica, ki se ponovi v pretakanem odzivu, ni prikrita.
- **Kanali za onemogočanje vs. vmesna programska oprema (po zasnovi):** vmesna programska oprema ovrednoti injiciranje pozivov s svojim lastnim klicem `evaluatePromptInjection()`, ne da bi posredovala kateri koli seznam onemogočenih elementov, ki ga nadzoruje klicatelj. Način `block` je obvezna meja, ki jo onemogočitve s strani klicatelja ne morejo zaobiti, vključno s potmi klepetalne družine
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogočanje `prompt-injection` preskoči samo varovalo v registru.

### Kaj vidi odziv pred fazo po klicu

Na poti brez pretakanja je vrstni red naslednji: ekstrakcija pomnilnika → izvajanje vgrajenih orodij → varovala po klicu → izhod iz bloka po klicu → shramba semantičnega predpomnilnika.

- **Ekstrakcija pomnilnika** in **izvajanje orodij** vidita odziv, preden ga lahko zaščitni mehanizmi po klicu (post-call guardrails) prepišejo ali blokirajo. Od [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) naprej ekstrakcija pomnilnika izluščeno besedilo obdela s funkcijo `sanitizePII`, ko je omogočen `PII_RESPONSE_SANITIZATION` (tako pri pretakanju kot pri nepretakanju), vendar je bil odziv, ki ga zaščitni mehanizmi po klicu pozneje blokirajo, kljub temu že posredovan pomnilniku in orodjem.
- **Semantični predpomnilnik** shrani odziv po klicu, zato shrani prepisani odziv, medtem ko se blokiran odziv nikoli ne predpomni. Vnosi v predpomnilnik so indeksirani glede na ključ API.

## Konfiguracija

Okoljske spremenljivke, ki jih berejo vgrajeni varovalni mehanizmi:

| Spremenljivka                         | Uporablja jo            | Učinek                                                                                                                               |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Nastavite na `false`, da v celoti onemogočite zaznavanje.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Pravilnik injiciranja: `warn`, `block` ali `log`. Stara vrednost `redact` ne prepiše besedila injiciranja.                           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način za varovalo pred injiciranjem; hkrati zastavica funkcije v podatkovni bazi, ki **preglasi** okoljske spremenljivke (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Najmanjša stopnja resnosti, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Stari vzdevek za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Ko je nastavljeno na `true`, se osebni podatki (PII) v zahtevi zakrijejo (neodvisno od načina injiciranja).                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Nadzoruje obnašanje maskiranja na strani odziva.                                                                                     |

Varovalni mehanizmi Modality Bridge berejo izvedbeno konfiguracijo iz shrambe nastavitev v podatkovni bazi (`getSettings()`), in ne iz okoljskih spremenljivk. Glavni ključi za vid (Vision) so `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`. Stari ključi `visionBridge*` so sprejeti samo kot dokumentirani povratni mehanizem za branje v enem ciklu; pisanja preko nadzorne plošče uporabljajo glavne ključe. Privzete vrednosti in razreševalnik povratnih vrednosti se nahajajo v `src/shared/constants/modalityBridgeDefaults.ts`, pri čemer so stare konstante ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Zvok uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne nastavitve `modalityBridgeCache*`. Zvok nima povratnega mehanizma za stare ključe, ker so bili ti ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` in `modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`. Privzeto je onemogočen, ker sta FFmpeg/ffprobe izbirni operacijski odvisnosti, ustvarjanje napisov za sličice pa dodaja zakasnitev in stroške modela.

## Ščitniki po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga bodisi ob uvozu (z dodajanjem v `registerDefaultGuardrails`) bodisi
   pokličite `guardrailRegistry.register(...)` med izvajanjem — register nadomesti
   vsak prejšnji ščitnik z istim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Uporabite `resetGuardrailsForTests()` med testi, da začnete iz znanega stanja.
Podajte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo ščitnike, ki se testirajo. Vision Bridge sprejema injiciranje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne vmesnike za nastavitve, zmožnosti, izbiro modela STT, preverjanja
poverilnic in prepisovanje. Testi lahko zato preizkusijo oba pretoka brez dostopa
do podatkovne baze ali omrežja.

## Glej tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — skupni detektor, ki poganja
  zaščito pred injiciranjem pozivov in maskiranje PII
- `src/shared/constants/visionBridgeDefaults.ts` — privzete vrednosti za Vision Bridge in
  seznam prisilnih modelov mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — skupne privzete vrednosti izvajalnega okolja za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalna plast (prekinjevalnik toka, časovni zamiki)
- `docs/reference/ENVIRONMENT.md` — popolna referenca okoljskih spremenljivk

## Pokritost poti zaščite pred injiciranjem in red-team (Faza 8 · Blok D)

Zaščita pred injiciranjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Tip                  | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Ekstrakcija besedila (`extractMessageContents`) zajema `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nočno, `nightly-llm-security.yml`):** promptfoo preverja, da vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja preizkuse (preskoči brez skrivnosti).
`moderations` je vključen zaradi doslednosti. Način blokiranja je obvezna meja: `evaluatePromptInjection()`
prezre seznam onemogočenih ščitnikov za posamezno zahtevo, ki mu ga posreduje vmesna programska oprema, zato `disabledGuardrails`
**ne** izvzema poti iz tega ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z nastavitvijo `INJECTION_GUARD_MODE=block`. Vsak sovražni primer (npr. »ignore all
  previous instructions…«, pobegi v slogu DAN) preverja, da odziv vsebuje
  `error.code === "SECURITY_001"`, tj. da je ščit dejansko zavrnil zahtevo.
- **`garak` (svetovalno)** — zažene garak z zastavicami `--probes promptinject,dan,leakreplay`
  proti lokalni instanci OmniRoute (`http://localhost:20128/v1`). Zaščiteno s ponudnikovo skrivnostjo
  (`PROMPTFOO_PROVIDER_KEY`); se elegantno preskoči in ima pripono
  `|| true`, tako da poroča brez neuspeha v CI.

Pokritost pomočnika za ščite (`createInjectionGuard` / `withInjectionGuard`)
zajema vsako pot `/v1`, ki vsebuje poziv; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.

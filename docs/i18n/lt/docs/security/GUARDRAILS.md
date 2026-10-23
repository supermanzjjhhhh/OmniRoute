# Guardrails (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Patikimas informacijos šaltinis:** `src/lib/guardrails/`
> **Paskutinį kartą atnaujinta:** 2026-10-17 — v3.8.52 (pridėta [Aprėptis ir ribos](#coverage-and-limits):
> kuriuos maršrutus ir atsako apdorojimo kelius pasiekia apdorojimo funkcijos, sujungtos išjungimo antraštės (#16412), injekcijų
> blokavimo režimas kaip privaloma riba (#16413) ir kas gauna atsaką prieš apdorojimą po iškvietimo)

Apsaugos priemonės užtikrina saugą, taisyklių laikymąsi ir turinio transformavimą ties riba
tarp OmniRoute ir aukštesnio lygmens paslaugų teikėjų. Kiekviena apsaugos priemonė gali tikrinti (ir
pasirinktinai atmesti, transformuoti arba anotuoti) užklausų duomenis (`preCall`) ir
aukštesnio lygmens paslaugų teikėjų atsakymus (`postCall`).

Sistema veikia **leidimo klaidos atveju principu**: jei vykdoma apsaugos priemonė išmeta išimtį, registras
užregistruoja klaidą ir tęsia darbą su kita apsaugos priemone, užuot nutraukęs
užklausą. Blokavimas yra aiškiai priimtas sprendimas (`block: true`), o ne atsitiktinumas.
Vienintelė išimtis – nutraukta užklausa: kai kvietėjo `signal` yra nutrauktas,
išimtį išmetusi apsaugos priemonė nutraukia apdorojimo funkcijų vykdymą, užuot buvusi praleista.

Apdorojimo funkcijos vykdomos **ne** kiekviename maršrute ir **ne** kiekvienam atsakui. Prieš
pasikliaudami apsaugos priemone kaip saugumo kontrolės mechanizmu, perskaitykite
[Aprėptis ir ribos](#coverage-and-limits).

## Integruotos apsaugos priemonės

Importuojant registras automatiškai įkelia šešias apsaugos priemones prioriteto tvarka
(žr. `registry.ts` → `registerDefaultGuardrails()`):

| Prioritetas | Pavadinimas         | Etapas (-ai)   | Failas                |
| ----------- | ------------------- | -------------- | --------------------- |
| `5`         | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`         | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`         | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`        | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`        | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`        | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mažesnius prioriteto numerius turinčios priemonės vykdomos **pirmiausia**.

### Vaizdų atpažinimo tiltas (`visionBridge.ts`) — modalumų tiltas PR-1

Bazinis GLM 5.3 modelis ir `glm-5.3-{low,high,max}` turi aiškiai nurodytus
`supportsVision:false` registro ir specifikacijos metaduomenis. GLM 5.3 Flash variantai
ir toliau yra modeliai su integruotu vaizdų atpažinimu. Claude Code maršrutas `/v1/messages` patenka į
bendrą `handleChat` apsaugos priemonių grandinę prieš iškvietimą **dar prieš** konvertavimą iš Claude į OpenAI
formatą; įdėtieji `Read` įrankio rezultatų vaizdai turi būti aprašyti arba apdoroti
prieš šiam konvertavimui perkeliant juos į OpenAI `image_url` turinį (#17069).

Perima užklausas su vaizdais, skirtas **vaizdų neatpažįstantiems modeliams**, ir arba
nukreipia visą užklausą į vaizdus atpažįstantį modelį, arba pakeičia vaizdų
dalis tekstiniais aprašais, kuriuos prieš kreipiantis į aukštesnio lygmens paslaugų teikėją sugeneruoja
konfigūruojamas vaizdus atpažįstantis modelis. Taip tik tekstą apdorojantys paslaugų teikėjai gali sklandžiai apdoroti
daugiarūšius duomenis.

Veikimo eiga:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdų atpažinimą (nebent jis įtrauktas į
   priverstinio tilto naudojimo sąrašą `isVisionBridgeForcedModel`).
2. Išskirti vaizdų dalis naudojant `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kuri perduoda darbą **vieningam medijos
   aptikimo mechanizmui** `detectMediaParts()`, esančiam `open-sse/utils/mediaParts.ts` — tai
   vienintelis patikimas informacijos šaltinis, bendras su kombinacijų suderinamumo filtru.
   Išskiriamos tik leidžiamų struktūrų dalys, kurias `replaceImageParts` gali įterpti
   atgal (išskyrimo↔pakeitimo sutartis): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` ir Responses
   API `input_image`. Atitinkami vaizdai, įdėti į Claude Code
   `tool_result.content` ir Responses įrankių išvestis, taip pat išskiriami ir
   pakeičiami pradinėse vietose; struktūros, kurios tik nurodo vaizdo buvimą, skirtos kombinacijų filtrui
   ir nėra išskiriamos.
   Praleisti, jei nieko nerasta.
3. Nustatyti vykdymo konfigūraciją naudojant `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): naujieji `modalityBridge*`
   nustatymų raktai turi pirmenybę; senieji `visionBridge*` raktai lieka kaip **vieno ciklo
   atsarginis variantas** (grįžimo prie ankstesnės versijos laikotarpis). Jei tiltas
   išjungtas, praleisti dar prieš bet kokią medijos peržiūrą.
4. Režimo parinkiklis (`modalityBridgeVisionMode`, žr. lentelę toliau) nustato,
   ar peradresuoti, ar aprašyti. Peradresavimas grąžina `modifiedPayload`, kuriame pakeistas tik `model`,
   ir metaduomenis `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo kelias: apriboti vaizdų skaičių iki `maxImages`, sudaryti užduočiai pritaikytą užklausą,
   patikrinti aprašų podėlį, iškviesti vaizdus atpažįstantį modelį **lygiagrečiai**
   (`Promise.allSettled`) ir vietoje vaizdų įterpti `[Image N]: <description>` tekstines dalis.
   Nepavykus aprašyti, grąžinama `null`: pradinis vaizdas išsaugomas
   nežinomiems arba vaizdus atpažįstantiems tiksliniams modeliams (#4012), tačiau **patvirtintam tik tekstą apdorojančiam tiesioginiam
   tiksliniam modeliui** arba kombinacijai, kurioje nėra vaizdų atpažinimo, įterpiamas aiškus
   `(unavailable — no vision-capable provider connected)` pakaitinis tekstas
   kiekvienam neaprašytam vaizdui, įskaitant dalines nesėkmes ir vaizdus, viršijančius
   aprašymo iškvietimų ribą (#17069). Esamas atsarginis kombinacijos aprašymo mechanizmas, taikomas
   nepavykus visiems aprašymams, išlieka (#8430).
6. Grąžinti `modifiedPayload` ir metaduomenis (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režimo parinkiklis (`modalityBridgeVisionMode`)

| Režimas    | Numatytoji reikšmė | Veikimas                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔                  | Ankstesnė euristika, nepakeista (#6640/#7204): ne kombinuotieji / `auto/` modeliai peradresuojami į geriausią vaizdų analizės modelį, nebent pradinis modelis jau turi tinkamus prisijungimo duomenis (tuomet pateikiamas aprašas); kombinuotiesiems paskirties modeliams visada pateikiamas aprašas.                                                                                            |
| `describe` |                    | Visada pateikiamas aprašas — peradresavimo blokas visiškai praleidžiamas; visada atsako naudotojo pasirinktas modelis.                                                                                                                                                                                                                                                                           |
| `reroute`  |                    | Priverstinis peradresavimas: apsauga, išlaikanti modelį su tinkamais prisijungimo duomenimis, apeinama. Peradresavimo **paskirties** prisijungimo duomenų apsauga vis tiek taikoma — kai nėra tinkamo vaizdų analizės paskirties modelio, tiltas blokuoja užklausą ir pateikia aiškią klaidą, užuot pateikęs aprašą ar siuntęs neapdorotus vaizdus tik tekstą apdorojančiam paskirties modeliui. |

Priverstiniai režimai užbaigia pasirinkimą **prieš** paleidžiant automatinę euristiką; `auto` veikimas
baitų lygmeniu sutampa su apsaugos veikimu iki PR-1.

#### API rakto taikymo sritis (`visionBridgeKeyScope.ts`)

Kai užklausos siuntėjo API raktas riboja `allowedConnections`, kvotų telkinius
(`allowedQuotas`) arba modelius (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tiltas parenka tik
tuos peradresavimo ir aprašo modelius, kuriuos raktui leidžiama naudoti, ir tik tuose ryšiuose, kuriuos raktui
leidžiama naudoti. Tada aprašo iškvietimas visada vykdomas per OmniRoute grįžtamąją kilpą su
`x-omniroute-self-loop-key-id` antrašte, todėl priimanti pokalbio užklausa
dar kartą užtikrina to rakto ryšių ir modelių politikos laikymąsi. `enforceApiKeyPolicy()`
atsižvelgia į šią antraštę tik kartu su grįžtamosios kilpos prieigos žetonu, todėl ji gali tik
siaurinti prieigą, o neatpažintas ID atmetamas.

Jei raktui neleidžiama naudoti jokio vaizdų analizės modelio, **patvirtintas tik tekstą apdorojantis
paskirties modelis** atmeta vaizdo užklausą vietoje ir pateikia aiškią HTTP 400 klaidą, užuot
persiuntęs vaizdo baitus jų apdoroti negalinčiai aukštesnio lygmens paslaugai (#17069). Paskirties modeliams,
kurių vaizdų analizės galimybės nežinomos arba kurie turi savąjį vaizdų palaikymą, aprašo kelias išlaiko ankstesnį
veikimą, kai nesėkmės atveju leidžiama tęsti (metaduomenys `{ skipped: true, reason: "no_permitted_vision_model" }`).
Užklausos be rakto ir raktai be šių apribojimų veikia lygiai taip pat kaip
anksčiau.

#### Į užduotį atsižvelgianti aprašo instrukcija (`modalityBridgeVisionTaskAware`)

Numatytoji reikšmė — **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prie bazinės
aprašo instrukcijos prideda **paskutinio naudotojo pranešimo** tekstą (sutrumpintą iki 500 simbolių),
nukreipdama aprašą į tai, ko naudotojas iš tikrųjų paprašė
(codex-vision-proxy principas), ir paprašo vaizdų analizės modelio perrašyti matomą
tekstą. Kai parinktis išjungta arba nėra naudotojo teksto, bazinė instrukcija naudojama nepakeista.

Pačios aprašo grįžtamosios kilpos su OpenAI suderinama užklausa (`callVisionModelSingle()`
faile `visionBridgeHelpers.ts`) visada prašo `image_url.detail: "high"` —
besąlygiškai, kiekvienam užklausos siuntėjui ir teikėjui, nepriklausomai nuo jokio kliento signalo.
Mažo detalumo vaizdo atranka mažina OCR tikslumą būtent tai teksto perrašymo
užduočiai, kurios prašoma šioje instrukcijoje, todėl pats aprašo iškvietimas visada prašo didelio
detalumo, nesvarbu, koks detalumo lygis buvo naudojamas pradinėje gaunamoje užklausoje. Tai
paveikia tik vidinės aprašo užklausos turinį; tai nekeičia būdo, kuriuo
OmniRoute persiunčia paties užklausos siuntėjo `image_url.detail` pagrindinėje užklausoje —
ši numatytoji reikšmė taikoma atskirai ir tik aptiktiems OpenCode klientams, funkcijoje
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Aprašo grįžtamosios kilpos Anthropic perdavimo formato šaka neturi `detail` lauko,
todėl nė viena iš šių numatytųjų reikšmių jai įtakos neturi.

#### Aprašo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytoji reikšmė | Intervalas         |
| ------------------------------ | ------------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`                | `0` arba 100–50000 |

`0` (numatytoji reikšmė) reiškia **be ribos** — funkcijos
`callVisionModel()` grąžintas aprašas perduodamas nepakeistas, išlaikant esamą
veikimą. Bet kuri reikšmė intervale 100–50000 sutrumpina aprašą, pridedant
`…` priesagą, prieš jį vėl įterpiant kaip `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` faile `src/lib/guardrails/visionBridge.ts`).
Padidinkite šią reikšmę daug detalių turinčioms OCR užduotims, kai tolesniam modeliui reikia
viso perrašyto teksto; sumažinkite ją, kad apribotumėte žetonų naudojimą, kai vaizdų analizės modeliai pateikia ilgus atsakymus.
Valdymo skydelio laukas yra vaizdų analizės skirtuko išplėstinių nuostatų skydelyje
(`modality-bridge-max-chars` faile `ModalityBridgeVisionTab.tsx`) ir bet kurią
reikšmę nuo 1 iki 99 padidina iki apatinės 100 ribos, o aiškiai nurodytą `0`
palieka nepakeistą — `0` yra savaime galiojanti Zod reikšmė
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), o ne vien
numatytoji „nenustatyta“ reikšmė.

#### Aprašų podėlis (`modalityBridge/bridgeCache.ts`)

Atmintyje veikiantis LRU + TTL podėlis aprašų išvestims, bendras visam procesui.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, naudojant
ilgio prefiksais atskirtus laukus (be laukų ribų kolizijų). Modelio komponentas yra
**sukonfigūruotas** tilto modelis, o ne tas, kuris iš tikrųjų atsakė —
`callVisionModel` viduje gali pasitelkti atsarginį modelį, o rakto sudarymas kiekvienam bandymui
suskaidytų podėlį. Nepavykę aprašai niekada neįrašomi į podėlį. Nuostatos:

| Raktas                          | Numatytoji reikšmė | Intervalas |
| ------------------------------- | ------------------ | ---------- |
| `modalityBridgeCacheEnabled`    | `true`             | —          |
| `modalityBridgeCacheTtlMinutes` | `60`               | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`              | 10–5000    |

#### Nuotolinių vaizdų normalizavimas (aprašymo savikvietimas / base64 gavimas)

Kai tiltas pats gauna **nuotolinį** vaizdą — tiek Anthropic aprašymo
savikvietimo, tiek claude-wire-format base64 konvertavimo metu
(`ensureBase64ImagesForClaudeWire`), abiem atvejais per
`fetchRemoteImageAsDataUri()` faile `visionBridgeHelpers.ts` — gautas duomenų
URI perduodamas į `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prieš įterpiant jį į regos modelio
užklausą. Pernelyg dideli vaizdai sumažinami iki **2048px ilgosios kraštinės** (tai atitinka
dydžio keitimo ribą, kurią OpenAI/Anthropic jau taiko serverio pusėje), todėl sumažėja
įkeliamų duomenų kiekis ir delsa, nekeičiant to, ką mato regos modelis. Dydžiui keisti
naudojamas `sharp`, įkeliamas dinaminiu importavimu: platformoje, kurioje jo savasis
dvejetainis failas neįsikelia, `normalizeDataUri()` **niekada neišmeta išimties** — vietoj to
praleidžia pradinius baitus nepakeistus, todėl aprašymo / base64 konvertavimo
kelias visada veikia. Ne vaizdo baitai (kai gavimo užklausa negrąžino
dekoduojamo vaizdo) taip pat perduodami nepakeisti. Šis normalizavimas
taikomas tik vaizdams, kuriuos tiltas gauna savo savikvietimui — jis niekada
netaikomas neapdorotam kvietėjo perduodamam duomenų turiniui, laikantis
keitimo tik aiškiai sutikus principo (griežtoji taisyklė Nr. 20).

#### Nustatymų schema + migravimas

Naujieji `modalityBridge*` raktai tikrinami naudojant Zod schemoje `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trys `modalityBridgeCache*` raktai ir
`modalityBridgeAudio*` grupė, kurią naudoja garso tiltas. Migravimas
`141_modality_bridge_settings.sql` nukopijuoja esamas senąsias
`visionBridge*` reikšmes į atitinkamus naujus raktus (idempotentiškai, niekada neperrašo
operatoriaus nustatytos `modalityBridge*` reikšmės); senuosius raktus dar vieną
leidimo ciklą galima nuskaityti kaip atsarginį variantą.

#### Skaidrumo antraštė + statistika

Aprašymu transformuoti atsakymai turi antraštę
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukuriamą naudojant `buildModalityBridgeHeader()` faile `modalityBridge/bridgeStats.ts`,
pridedamą naudojant `withModalityBridgeHeader()` faile `src/sse/handlers/chatHelpers.ts`).
Permaršrutizuotos užklausos antraštės **negauna** — duomenų turinys nebuvo pakeistas, o modelio
pakeitimas jau matomas atsakymo turinio lauke `model`.

`GET /api/modality-bridge/stats` (valdymo autentifikavimas, toks pat lygis kaip
`GET /api/settings`) grąžina atmintyje laikomus kiekvieno modalumo skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`, skirtus `vision`, `audio` ir
`video`. `averageLatencyMs` vardiklis yra `latencySamples`, o ne visi bandymai;
operacija be laiko matavimo nesukuria tariamo nulio milisekundžių
matavimo. `bridged` išlieka atgalinį suderinamumą užtikrinantis sėkmingų
konvertavimų sinonimas; nesėkmingi bandymai jo nedidina.
Skaitikliai iš naujo nustatomi paleidus procesą iš naujo — taip numatyta
(telemetrija, ne apskaita).

#### Valdymo skydelio konfigūravimas

Atskiras valdymo skydelio puslapis yra
`/dashboard/settings/modality-bridge`. Jo URL adresu pasiekiami skirtukai `Vision`, `Audio`
ir `Video` išsaugo užklausos parametrus keisdami `tab` reikšmę.
Regos skirtuke galima įjungti funkciją, pasirinkti režimą ir modelį (įskaitant automatinį
numatytąjį variantą), nustatyti pagal užduotį pritaikomas užklausos instrukcijas, išplėstines skirtojo laiko / vaizdų / aprašo ilgio / podėlio
ribas, peržiūrėti vykdymo metu renkamus
skaitiklius ir vykdyti apsaugotą pavyzdinę užklausą. Garso skirtukas taip pat veikia: jame galima
įjungti funkciją, pasirinkti tik STT modelius arba automatinį parinkimą, nustatyti skirtąjį laiką / didžiausio garso įrašo ribas, peržiūrėti garso
skaitiklius ir atlikti `input_audio` pavyzdinį bandymą. Vaizdo įrašų skirtukas veikia: jame rodoma
FFmpeg/ffprobe vykdymo aplinkos būsena — viena iš keturių aiškių sąsajos būsenų (`unknown`, kol
vyksta patikra arba jos nepavyko užbaigti, `restricted`, kai valdymo skydelio
serveris pasiekiamas ne per grįžtamojo ryšio adresą ir patikra praleidžiama kliento pusėje, `unavailable`, kai patikrinus
patvirtinama, kad įrankių nėra, arba `available` su FFmpeg/ffprobe versijomis) — išsaugomi
įjungimo / modelio / kadrų / vaizdo įrašų / skirtojo laiko apribojimai, modelių parinkiklis filtruojamas paliekant regą palaikančius
modelius ir pateikiami vaizdo įrašų skaitikliai.

Ankstesnė regos tilto kortelė DI nustatymuose yra suderinamumui skirta nuoroda į
naująjį puslapį; atskiros formos kopijos joje nebėra. Medijos teikėjų skiltis taip pat
susieja vaizdo vertimo tekstu ir kalbos vertimo tekstu darbo eigas su atitinkamais modalumų
tilto skirtukais, nepašalindama esamos kalbos vertimo tekstu bandymų aplinkos.

**Savikvietimo priėmimo kontrolės apėjimas:** kai aprašymo kvietimas nukreipiamas per paties OmniRoute
`/v1` savikvietimo kilpą (nestandartinis teikėjo modelis), antrinė užklausa siunčia
`x-omniroute-admission-bypass: internal` ir autentifikuojama naudojant nustatytą
savikvietimo kredencialą — vietinį `sk_omniroute` žymeklį vietiniu režimu arba
operatoriaus sukonfigūruotą `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` aplinkos kintamojo raktą (#1350), kad
diegimuose su `REQUIRE_API_KEY=true` vis tiek būtų galima vykdyti aprašymo kvietimą. Apėjimas
taikomas tik šiems konkretiems kredencialams, todėl išoriniai klientai negali naudoti
antraštės priėmimo kontrolei apeiti.

Senosios numatytosios reikšmės saugomos `src/shared/constants/visionBridgeDefaults.ts`;
naujosios režimo / pritaikymo pagal užduotį / podėlio numatytosios reikšmės ir nustatymų sprendiklis saugomi
`src/shared/constants/modalityBridgeDefaults.ts`. Apsaugos mechanizmas turi
`deps` konstruktoriaus parinktį, kad testuose būtų galima įterpti netikras `getSettings` ir
`callVisionModel` realizacijas.

### Garso tiltas (`audioBridge.ts`) — modalumų tiltas PR-3

Perima pokalbio užklausas su garso turiniu, kol jos dar nepasiekė paskirties, apie kurią nėra
žinoma, kad ji priima garso įvestį. Pokalbio užklausa niekada nepermaršrutizuojama: garso dalys
transkribuojamos per esamą su OpenAI suderinamą kelių dalių užklausų galinį tašką, o
pasirinktas pokalbio modelis toliau naudoja tekstines transkripcijas.

Eiga:

1. Nustatykite `supportsAudio` reikšmę naudodami `getResolvedModelCapabilities()`. Pirmenybė teikiama aiškiai
   nurodytiems teikėjų registro metaduomenims, tada statiniams modelio metaduomenims, tada sinchronizuotam
   `modalities_input`. Deklaruotas įvesties sąrašas be `audio` reiškia `false`; jei nėra
   galimybę patvirtinančių duomenų, lieka `null`. Tiek `false`, tiek `null` aktyvuoja
   konservatyvųjį tiltą, o `true` jį apeina.
2. Nustatykite `modalityBridgeAudio*` parametrus ir iš kiekvieno pranešimo išskirkite aukščiausiojo lygio
   garso dalis, kurias galima pakeisti, naudodami bendrąjį `detectMediaParts()`
   detektorių. Palaikomi perduodamų duomenų formatai: OpenAI `input_audio`, `audio_url` ir
   `source.media_type: "audio/*"`. Įdėtasis garsas aptinkamas parenkant maršrutą, bet
   dalių pakeitimo metu nepašalinamas. Apdorojimo apimtį riboja `modalityBridgeAudioMaxClips`;
   vėlesnės dalys lieka nepakeistos.
3. Naudokite sukonfigūruotą `provider/model` arba leiskite `selectAudioBridgeModel()` peržiūrėti
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilia katalogo tvarka ir pasirinkti pirmą
   modelį, turintį tinkamą naudoti aktyvų teikėjo prieigos duomenį.
4. `callAudioTranscription()` konvertuoja base64 arba duomenų URI garsą į daugiadalį
   `file` arba atsisiunčia nuotolinį `audio_url` per tik viešus adresus leidžiančią išeinančių užklausų
   apsaugą su DNS susiejimu ir 25 MB apribojimu. Tada failas ir pasirinktas
   modelis POST užklausa siunčiami į vietinį grįžtamojo kreipimosi maršrutą `/v1/audio/transcriptions`, autentifikuojantis per
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka įprastą
   prieigos duomenų paiešką, laukimo laikotarpių ir užklausų dažnio ribojimo tvarkymą bei nukreipimą teikėjui.
5. Sėkmingos užklausos pakeičia atitinkamas dalis į `[Audio N]: <transcript>`. Užklausos
   vykdomos naudojant `Promise.allSettled`: pavienė nesėkmė išsaugo atitinkamą pradinę
   garso dalį (#4012 sutartis). Jei visos užklausos nepavyksta ir patvirtinta, kad paskirties modelio
   `supportsAudio === false`, dalys pakeičiamos į
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 sutartis). Jei
   paskirties modelio galimybės nežinomos (`null`), visoms užklausoms nepavykus turinys lieka nepakeistas. Patvirtintas
   tik tekstą palaikantis paskirties modelis, kuriam nėra tinkamų STT prieigos duomenų, gauna tą patį aiškų
   pakaitinį tekstą be tinklo užklausos.

Sėkmingoms transkripcijoms naudojama visam procesui bendra Modality Bridge LRU/TTL podėlio sistema.
Raktas sudaromas iš garso nuorodos, stabilios `audio-transcription` operacijos
žymos ir pasirinkto STT modelio; nesėkmės niekada nekaupiamos podėlyje. Garso apdorojimo bandymai atnaujina
bendruosius `bridged`, `cacheHits`, `failures` ir `lastUsedAt` skaitiklius.
Transformuoti atsakymai turi
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepakeistos
užklausos negauna Audio Bridge segmento.

Vykdymo laiko parametrai saugomi DB ir tikrinami naudojant Zod:

| Raktas                        | Numatytoji reikšmė | Diapazonas              |
| ----------------------------- | ------------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`             | —                       |
| `modalityBridgeAudioModel`    | `""`               | Automatinis arba STT ID |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                    |

Bendrąjį podėlį ir toliau valdo `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ir `modalityBridgeCacheMaxEntries`.

### Vaizdo įrašų tiltas (`videoBridge.ts`, `videoBridgePipeline.ts`)

Perima aukščiausiojo lygio vaizdo įrašų dalis Chat Completions `messages` ir Responses
API `input` prieš kreipiantis į paskirties modelį, kurio savasis vaizdo įrašų palaikymas nėra patvirtintas.
Palaikomi formatai: `input_video`, `video_url`, `video_source`, HTTPS URL
ir `data:video/*;base64,...` duomenų URI. Paprasti failų pavadinimai tekste nelaikomi
vaizdo įrašais.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) atsako už užklausos struktūros perėjimą,
galimybių ir politikos tikrinimą, kiekvienos užklausos rezultatų agregavimą ir atsakymo turinį.
Kiekvieno vaizdo įrašo apdorojimas — gavimas, viso rezultato podėlis, kadrų
sekos aprašymas (į kurį įtraukiama bet kokia kvietėjo deklaruota garso transkripcija) ir kiekvieno bandymo
metrika, nutraukimas bei išteklių atlaisvinimas — paslėptas už `processVideoPart`, esančios
`videoBridgePipeline.ts` ir kviečiamos po kartą kiekvienai vaizdo įrašo daliai `preCall` cikle.
Šis modulis taip pat apibrėžia aiškias sąsajų ribas: `VideoMediaBrokerPort`
(baitų gavimas ir atrinktų kadrų išskyrimas), `VideoAudioTranscriptionPort`
(kvietėjo deklaruotos garso transkripcijos sujungimas su atrinktų kadrų aprašais) ir
`VideoDrilldownPort` (išsamios kadrų analizės duomenų išsaugojimo riba; dar nesusieta
su `processVideoPart` — šiuo metu išsamios analizės įrašus rašo tik atskiras `/api/modality-bridge/video/drilldown`
maršrutas).

Viešasis `/v1` užklausos apdorojimo kelias niekada neimportuoja ir nepaleidžia antrinio proceso. Nuotoliniai
vaizdo įrašai atsisiunčiami taikant 50 MiB apribojimą; įterptiesiems base64 vaizdo įrašams taikomas
konservatyvus 36 MiB dekoduoto dydžio apribojimas vienam vaizdo įrašui, kad modelis, pranešimai ir struktūrinis apvalkalas
tilptų į viešosioms JSON užklausoms taikomą 50 MiB priėmimo ribą. Įterptųjų duomenų
ilgis ir apskaičiuotas dekoduotas dydis tikrinami prieš skiriant atmintį. HTTPS
privalomas tiek pradiniam nuotoliniam URL, tiek kiekvienam peradresavimui, naudojant esamą
tik viešus adresus leidžiančią išeinančių užklausų apsaugą su DNS susiejimu. Tada baitai perduodami per konkrečią vidinę
`POST /api/modality-bridge/video/extract` tarpininko ribą. Šis maršrutas yra ir
`LOCAL_ONLY`, ir `SPAWN_CAPABLE`, priima tik kiekvieno proceso lygmeniu autentifikuotą
užklausą iš patikimos vietinės grįžtamojo ryšio sąsajos ir niekada nepriima URL, failų sistemos kelio, vykdomojo failo
ar argumentų sąrašo. API turinio dydžio tikrinimo grandinė ir apdorojimo funkcijos inkrementinis turinio
skaitytuvas nepriklausomai užtikrina 50 MiB tarpininko įvesties apribojimą. Jo ribota eilė vykdo
tik vieną išskyrimo operaciją vienu metu, leidžia keturias laukiančias užduotis ir riboja laukiančių įvesties duomenų dydį iki
100 MiB.

Tarpininko viduje `ffprobe` skaito privatų vietinį failą; fiksuotas leidžiamų
formatų sąrašas neapima grojaraščių ir manifestų formatų. Leidžiamuose MOV šeimos
konteineriuose išorinės MOV duomenų nuorodos pagal numatytąją nuostatą lieka
išjungtos, o fiksuota komanda jų neįjungia. Ir `ffprobe`, ir `ffmpeg` naudoja
tik `file` protokolą leidžiantį sąrašą, vieną giją, fiksuotus argumentų masyvus,
nenaudoja komandų interpretatoriaus, o vykdomuosius failus suranda pagal `PATH`.
Prisegtų viršelio paveikslėlių srautai nelaikomi atkuriamais kandidatais. Visi
atkuriami srautai turi atitikti apribojimus, o aiškiai nurodytam numatytajam
srautui teikiama pirmenybė prieš deterministinį atsarginį mažiausio indekso
pasirinkimą. Vaizdo įrašai ribojami iki 600 sekundžių, 8 192 pikselių kiekvienoje
dimensijoje ir 33 554 432 šaltinio pikselių. FFmpeg atrenka 1–16 JPEG kadrų
intervalų vidurio taškuose, sumažina ilgąją kraštinę iki ne daugiau kaip
1 024 pikselių, nedidindamas mažesnių įvesties vaizdų, ir niekada negauna URL.
Pagal numatytąją nuostatą atranka yra `uniform`. Pasirenkama `scene_aware` ir
eksperimentinė `segment_aware` strategijos atlieka vieną papildomą fiksuotą
FFmpeg perėjimą per jau patikrintą vietinį srautą, parenka ribotą skaičių
`showinfo` scenų laiko žymų ir deterministiškai grįžta prie tų pačių tolygių
vidurio taškų, jei detektorius sugenda, viršijamas laiko limitas, išvestis yra
netaisyklinga arba kandidatų rinkinys tuščias. Segmentus atpažįstantis režimas
paskirsto vidurio taškų kadrus proporcingai patikrintiems scenų intervalams;
segmentus atpažįstančio režimo duomenys ir atsarginė elgsena išsamiai aprašyti
toliau. Griežta 16 kadrų riba taikoma po atrankos pagal kiekvieną strategiją.
Kai scenas atpažįstančiai užklausai skirtas tik vienas kadras, naudojamas
aktyvaus viso vaizdo įrašo arba pasirinkto laiko lango tolygios atrankos vidurio
taškas ir pranešama `policyEffective: uniform`: vienas pasirinktas scenos kadras
negali išlaikyti abiejų laiko intervalo galų. Iškvietėjas gali pasirinktinai
pateikti baigtinį tikslinį laiko langą (`start`/`end` sekundėmis); ribos
apribojamos pagal medijos trukmę, langai su sukeistomis arba nebaigtinėmis
ribomis atmetami, o visos atrankos strategijos vykdomos tik normalizuotame
intervale. Gautas langas įtraukiamas į atrankos metaduomenis ir nepatikimo
aprašo prefiksą, kad tolesni modeliai galėtų atskirti tikslinę ištrauką nuo visos
laiko juostos.

Semantinis aprašų fokusavimas yra atskiras, aiškiai pasirenkamas nustatymas.
Numatytasis `full` analizės režimas išlaiko esamą kadro užklausą ir niekada
neperduoda užklausos teksto aprašų modeliui. Režimu `focused` tiltas skaito tik
naujausią netuščią naudotojo parašytą `text`/`input_text` iš to paties Chat arba
Responses konteinerio, normalizuoja jį į NFC, sutraukia valdymo ir tarpų
simbolius bei apriboja iki 500 „Unicode“ kodinių taškų. Jei rezultatas tuščias,
grįžtama prie tiksliai tokios pačios `full` užklausos. Tinkama užuomina
serializuojama JSON formatu specialiame nepatikimo naudotojo konteksto bloke ir
gali tik suteikti pirmenybę stebimoms detalėms; ji negali pakeisti atskiro
įspėjimo nesilaikyti medijoje matomų ar girdimų instrukcijų. Tekstinis fokusavimas
niekada nenustato `start`/`end` ir nekeičia laikinės atrankos.

#### FU-07 struktūriniai segmentų duomenys

`segment_aware` naudoja vieną ribotą išankstinės analizės perėjimą per jau
patikrintą vietinį vaizdo srautą. Fiksuota filtrų grandinė pirmiausia sumažina
plotį iki ne daugiau kaip 320 pikselių, aptinka scenų pokyčius ir sustingusius
intervalus, tada ima po 1 kadrą per sekundę suliejimui, vidutiniam skaisčiui ir
erdvinei bei laikinei informacijai įvertinti. Perėjimas ribojamas iki
600 struktūrinių mėginių, vienos FFmpeg / filtro gijos, tų pačių tik `file`
protokolą ir leidžiamus konteinerius apibrėžiančių sąrašų, 1 MiB proceso
išvesties ir ne daugiau kaip 30 sekundžių, laikantis bendrų tarpininko
nutraukimo ir galutinio termino apribojimų. Jis niekada nepriima komandos,
filtro, kelio ar URL iš užklausos.

Struktūrinės reikšmės yra deterministiniai atrankos duomenys, o ne semantinis
vaizdo įrašo supratimas. Jos nenustato subjektų, veiksmų, aprašų, kalbos ar
naudotojo ketinimų. Scenų ir sustingimo ribos sudaro segmentus; sustingimo
aprėptis, suliejimas, ekspozicija, erdvinis detalumas ir laikiniai pokyčiai daro
įtaką tik tam, kaip paskirstomas esamas 1–16 kadrų biudžetas. Visiškai
sustingusiam segmentui skiriamas ne daugiau kaip vienas kadras, o nesustingę
segmentai konkuruoja dėl likusio biudžeto. Kai ribų daugiau nei kadrų,
išlaikoma tolygi laiko juostos aprėptis, kad greiti kirpimai pradžioje negalėtų
paslėpti ilgo baigiamojo segmento. Scenų ribos, esančios per 1 sekundės analizės
skiriamąją gebą nuo sustingimo ribos, sujungiamos.

Jei trūksta filtrų, duomenys netaisyklingi ar tušti, įvyksta detektoriaus klaida
arba viršijamas ribotas išankstinės analizės laikas, leidžiama tęsti darbą
grįžtant prie tiksliai tokios pačios tolygios vidurio taškų atrankos strategijos.
Iškvietėjo inicijuotas nutraukimas ar tarpininko galutinio termino pabaiga
neleidžia tęsti darbo: nutraukiamas vykdomas antrinis procesas, užkertamas kelias
vėlesniam kadrų išgavimui, o privatus laikinųjų failų medis pašalinamas
`finally` bloke.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius tikrus FFmpeg
testinius duomenis, skirtus aprašų generavimo iškvietimų sutaupymui pašalinus
dublikatus, intensyvaus judėjimo biudžeto paskirstymui, suliejimo / ekspozicijos /
SI-TI duomenims, greitiems kirpimams su ilga baigiamąja atkarpa ir klaidingai
teigiamiems laipsniško išblukimo aptikimams įvertinti. Jis fiksuoja išankstinės
analizės faktinę trukmę ir, kai yra `/usr/bin/time`, antrinio proceso CPU laiką
bei didžiausią RSS. Jo kokybės patikros yra tik struktūriniai etalonai.
Tikroji aprašų modelio kokybė lieka `HOLD`, nes ši bandymų sistema neturi
autorizuoto galinio taško ar fiksuoto vertintojo. Piniginis sutaupymas taip pat
lieka `HOLD`, nebent per `--caption-cost-per-call-usd` pateikiamas aiškus
teigiamas vieno iškvietimo kainos įvertis; scenarijus niekada neišgalvoja nė
vieno iš šių rezultatų.

Kiekvieno kadro dydis ribojamas iki 4 MiB, visų neapdorotų kadrų bendras dydis – iki 23 MiB, o
serializuoto tarpininko atsakymo dydis – iki 32 MiB. Privatus laikinasis katalogas pašalinamas
`finally` bloke. OmniRoute neplatina FFmpeg kartu su programa ir neleidžia nurodyti pasirinktinio
vykdomojo failo kelio. Prieš generuodamas aprašus, tiltas atlieka konservatyvų vizualinių
dublikatų šalinimą: kiekvienas JPEG sumažinamas iki 16×16 pilkumo lygių buferio ir
lyginamas tik su paskutiniu išsaugotu kadru. Kai prašomas aprašomų kadrų skaičiaus limitas
viršija vieną kadrą, išgaunamas
ribotas kandidatų rinkinys, kurio dydis neviršija dvigubo šio limito ir niekada neviršija 16 kadrų.
Prašomas limitas taikomas tik pašalinus dublikatus, o atliekant galutinį retinimą
išsaugomi pirmasis ir paskutinis pasirinkti kandidatai, jei limitas yra bent
du. Versijuojama
`grayscale-16x16-mean-cells-v2` politika naudoja didesnę iš dviejų reikšmių: vidutinį skaisčio skirtumą ir
miniatiūros langelių, kurių normalizuotas skirtumas yra bent 0.05, dalį.
Dublikatų slenkstis yra konstanta 0.04, pasirinkta siekiant nuspėjamumo, o ne
pateikta kaip vykdymo metu keičiamas nustatymas. Šis papildomas
didelio kontrasto signalas leidžia išsaugoti nedidelius judesius ir matomo teksto pokyčius, kuriuos
gali paslėpti vien vidurkiu pagrįstas palyginimas. Įvykus lyginimo ar dekodavimo klaidai, kadrai neatmetami, kad
būtų išlaikyta aprėptis. Išvesties metaduomenyse atskirai nurodomi išgauti kandidatai, sėkmingai panaudoti
kadrai ir atmesti vizualiniai dublikatai.

Aiškiai pažymėta vaizdo įrašo dalis gali prašyti kadrų su laiko žymomis suvestinės. Tiltas
sukuria JPEG tinklelį, kuriame yra ne daugiau kaip 4 stulpeliai ir 16 kadrų. Kiekvieno 512 pikselių langelio
apatinėje didelio kontrasto juostoje į vaizdą įrašoma šaltinio laiko žyma, o tos pačios laiko žymos
išlieka tekstiniuose metaduomenyse, kad vėliau būtų galima susieti duomenis ir atlikti auditą. Viso
JPEG dydis tebėra ribojamas iki 32 MiB. Jei `sharp` negali dekoduoti vaizdų ar sudaryti tinklelio,
tiltas vietoj jo naudoja atskirus JPEG kadrus; kliento inicijuotas nutraukimas vis tiek perduodamas
per suvestinės kūrimo operaciją.

Pagrindimo duomenys, reikalingi sprendimui diegti, sąmoningai atskirti nuo sintetinio komponavimo
mikrotesto. `scripts/perf/video-bridge-contact-sheet-eval.ts` apibrėžia
A/B testavimo sistemą su versijuojama schema, skirtą tikriems su OpenAI suderinamiems regos modeliams. Ji matuoja
teikėjo nurodytą žetonų skaičių, visą faktinę delsą nuo pradžios iki pabaigos (įskaitant suvestinės komponavimą),
modelio iškvietimų skaičių ir manifeste apibrėžtų faktų išsaugojimą. Neapdoroti modelio atsakymai
į ataskaitą neįrašomi; išsaugomos tik SHA-256 maišos reikšmės ir atitikusių faktų ID.
Testavimo sistema neatlieka jokių tinklo užklausų ar mokamų modelio iškvietimų, nebent pateikiama `--execute-real` ir
sukonfigūruojami `--model`, `OMNIROUTE_BASE_URL` bei `OMNIROUTE_API_KEY`. Be
tokio aiškiai įjungto tikro vykdymo jos mašininiu būdu skaitomas verdiktas lieka `HOLD`; vien sintetiniai
perduodamų duomenų dydžio ir iškvietimų skaičiaus matavimai nėra pagrindas diegti.

Kviečiantysis kodas gali prie palaikomos vaizdo įrašo
dalies pridėti neprivalomą `transcript.cues` masyvą, jei jau turi su laiku suderintą tekstą. Kiekviename segmente turi būti `text`,
baigtinių reikšmių `start`/`end` intervalas, patenkantis į nustatytą trukmę, ir leistina
`source` reikšmė (`client`, `embedded` arba `audio-bridge`); numatytoji `confidence` reikšmė yra
`1`, ir ji turi likti tarp `0` ir `1`. Visiškai vienodi segmentai sujungiami.
OmniRoute niekada nepradeda transkribavimo pagal šiuos metaduomenis: patikrinti segmentai
nukopijuojami į aprašymo rezultatą kartu su šaltiniu, patikimumo įverčiu ir intervalu ir
pateikiami kaip nepatikimi stebėjimai šalia kadrų aprašų. Netinkamas,
už leistinų ribų esantis arba kilmės neturintis tekstas atmetamas, o ne įmaišomas į
aprašų srautą. Abu užklausos turinio transkripto kanalai normalizuoja pateiktą
kilmę į `client`, įskaitant savavališkai nurodytas `embedded` arba `audio-bridge`
žymas. Tik serverio valdomas adapteris gali priskirti šias patikimas žymas per
tik kode prieinamą `trustedSource` argumentą; užklausos JSON laukas negali pasiekti
šio argumento. Transkripto tekstas išlieka nepatikimu iš medijos gautu turiniu,
neatsižvelgiant į jo kilmę, ir niekada negali lemti prieigos teisių suteikimo.

Pažengęs kviečiantysis kodas gali pateikti to paties vaizdo įrašo `audioTranscript` takelį;
jis laikomas kliento pateiktu tekstu, o ne serverio atlikto transkribavimo įrodymu.
Sujungimo sluoksnis apdoroja vaizdo ir garso stebėjimus taikydamas
vieną galutinį terminą ir nutraukimo signalą, išrikiuoja juos bendroje laiko juostoje, sujungia
visiškai vienodus dublikatus ir pateikia dalinį rezultatą, kai sėkmingai apdorojama tik viena pusė.
Netinkamas `audioTranscript` lemia tokį dalinį rezultatą – vaizdo
aprašas išsaugomas, o garso šakoje įrašomas išvalytas klaidos kodas –
užuot nutraukus viso vaizdo įrašo apdorojimą. Kiekvienos šakos prieinamumas, dalinio rezultato žyma
ir išvalyti klaidų kodai išsaugomi aprašymo rezultate,
apsaugos mechanizmų metaduomenyse (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultatų podėlio metaduomenyse ir tilto
sujungimo skaitikliuose. Numatytasis Video Bridge apdorojimo kelias neiškviečia kalbos vertimo tekstu funkcijos
ir neatsisiunčia antros medijos kopijos; nepateikus šio aiškiai nurodyto takelio, jis
apdoroja tik vaizdą.

**Transkripcijos saugojimas (#12150 P1).** Tai taikoma automatiškai, kai tik
„Video Bridge“ (kuris pats įjungiamas pasirinktinai) atvaizduoja transkripcijos segmentą — atskiros
saugojimo vėliavėlės nėra. Kai užklausoje atvaizduojamas bet koks transkripcijos segmentas (iškvietėjo nurodytas
`transcript` arba sujungtas `audioTranscript`), apsauginis mechanizmas pažymi ją
`videoBridgeObserved` ir sukuria nuasmenintą šešėlinę vaizdo įrašo aprašo kopiją —
identišką atvaizdavimą, kuriame kiekvieno segmento laisvos formos tekstas pakeičiamas į
`[redacted-video-transcript]`. Ji sukuriama pakeičiant struktūrinį segmento lauką
prieš surenkant eilutę (niekada neanalizuojant į vientisą tekstą sujungto turinio, todėl joks segmento
turinys — nei kenkėjiškas, nei įprastas, įskaitant tekstą su `]`, pavyzdžiui,
`[inaudible]`/`[music]` — negali išlikti). Išsaugomame iškvietimų žurnalo užklausos turinyje
kiekviena iš vaizdo įrašo gauta tekstinė dalis pakeičiama ta nuasmeninta šešėline kopija, atitikmenį nustatant pagal turinio
lygybę; `fullText` atskaitos reikšmė iš naujo nuskaitoma iš galutinio prieš iškvietimą taikomo apsauginio mechanizmo
duomenų paketo, todėl atitikmuo vis tiek randamas po to, kai vėlesni grandinės apsauginiai mechanizmai (asmens duomenų ir
prisijungimo duomenų maskavimo priemonės, kurių prioritetai yra 10/95) vietoje perrašo aprašo tekstą, ir
po to, kai sistemos instrukcijų, perdavimo ir atminties įterpimas pertvarko pranešimų masyvą.
Modeliui siunčiamas turinys nekeičiamas. Stebima užklausa taip pat nepapildo
jokios ilgalaikės atminties (praleidžiamas tiek iš užklausos, tiek iš atsakymo gaunamų duomenų išskyrimas),
todėl paties modelio atsakymas negali pakartoti transkripcijos teksto atmintyje.

**Neapdoroti vaizdo įrašo laukai (#12430).** Kai tiltas įjungtas, o savasis vaizdo įrašų palaikymas nežinomas arba jo nėra, apibrėžti `transcript`/`audioTranscript` laukai taip pat aktyvina `videoBridgeObserved`, net jei aprašo sukurti nepavyko arba pasiekta `maxVideos` riba. `null` ir tuščios eilutės įskaičiuojamos; nesantys laukai ir su vaizdo įrašu nesusiję metaduomenys — ne. Išsaugomose kopijose šie laukai nuasmeninami arba užklausa praleidžiama, o podėliai ir atmintis apeinami.

Šiuose atsarginiuose vykdymo keliuose galiojantys iškvietėjo segmentai tampa palaikomomis `text`/`input_text`
dalimis, o ne nestandartiniais teikėjo laukais. Abu užklausoje pateikti takeliai
lieka nepatikimais `client` stebėjimais su aiškiu įspėjimu, kad vaizdo įrašas
nebuvo aprašytas, o laiko žymos nebuvo patikrintos pagal mediją. Esami
256 segmentų / 64 KiB bendrieji ir vienam segmentui taikomi limitai galioja abiem takeliams kartu;
laiko žymos turi neviršyti tarpininko 600 sekundžių ribos ir patekti į bet kokį nurodytą tikslinį
laiko intervalą. Netinkami takeliai atmetami, o ne persiunčiami kaip savavališkas tekstas; galiojantis
gretimas takelis vis tiek gali būti naudojamas, nebent viršijamas jų bendras limitas. Laukai su null ar tuščiomis reikšmėmis
neprideda jokio teksto. Šis atsarginis kelias neprideda medijos gavimo ar transkribavimo.
Transkripcijos plėtinių laukai pašalinami iš atsarginio vaizdo įrašo konteinerio ir jo
`video_url`/`source` objektų. „OpenAI“ perdavimo formato leidžiamų elementų sąrašas išlieka griežtas; vaizdo įrašų
konteineriai, kurių savasis palaikymas nežinomas, lieka prieinami, o tikslinėms sistemoms, kurios, kaip žinoma, palaiko tik tekstą, paliekamos saugios žymos.
Struktūrinės nuasmenintos šešėlinės kopijos apsaugo pridėtą transkripcijos tekstą, o
pradinė iškvietėjui priklausanti užklausa lieka nepakeista. Tikslinėms sistemoms su savuoju palaikymu ir
išjungtiems tiltams išlieka esama apėjimo elgsena.

Papildomoms išsaugomoms kopijoms naudojamas tas pats stebimos užklausos signalas. Neapdorotoje
kliento užklausos momentinėje kopijoje prieš apsauginių mechanizmų taikymą, atmintyje laikomoje laukiančioje užklausoje ir ankstyvame
atmestų užklausų žurnale transkripcijos laukai vaizdo įrašų dalyse pakeičiami struktūriniu būdu;
apdorojimo grandinės etapų ir konteksto perdavimo sugeneruotos tekstinės užklausos nuasmeninamos
išsaugomo užklausos turinio įrašymo vietoje. Išsaugota `video_content_removed` žyma
užtikrina, kad tęsinys su `previous_response_id` būtų saugiai atmestas, užuot atkūrus
tekstą, kuris buvo sąmoningai pašalintas. Jei stebima užklausa prieš registravimą praranda
kurios nors dalies nuasmenintą šešėlinę kopiją arba bent viena iš kelių vaizdo įrašo šešėlinių kopijų
nebeatitinka po vėlesnių užklausos pakeitimų, išsaugomas užklausos turinys
praleidžiamas visas, užuot išsaugojus iš dalies nuasmenintą transkripciją.

Stebimos užklausos atveju modelio atsakymas gali cituoti bet kurią
transkripcijos dalį be struktūrinės segmento ribos. Todėl išsaugomas iškvietimų žurnalo
`responseBody` pakeičiamas praleidimo žyma; išsamus
apdorojimo grandinės artefaktas (kuriame gali būti teikėjo / kliento turinio ir srauto fragmentų)
neišsaugomas. Semantinio podėlio, idempotentiškumo podėlio ir samprotavimo atkūrimo podėlio
skaitymas bei rašymas šiai užklausai apeinami. Teikėjui siunčiama užklausa ir klientui matomas
atsakymas lieka nepakeisti. Ankstyvieji ryšio palaikymo baitai pašalinami iš laikinojo
buferio, kai išsamus artefaktas praleidžiamas. „Kiro“ įspėjime apie netaisyklingą „EventStream“
nurodomas tik duomenų paketo baitų skaičius, bet niekada ne jo turinys ar neapdorota JSON
analizatoriaus klaida.
Tai nereiškia, kad buvo patikrinta visa nesusijusi teikėjų / papildinių diagnostika;
platesnio masto išsaugojimo vietų patikra sekama #11658.

Vidinio `/api/modality-bridge/video/drilldown` gyvavimo ciklas yra atskiras,
vietinio grįžtamojo ryšio sąsajos / atpažinimo rakto autentifikavimu apsaugotas podėlio sluoksnis. Kiekvienai operacijai taip pat reikalingas
kanoninis nepermatomas saugos subjekto ID. Prieš įgalinant produkcinį iškvietėją, šis turi
išvesti tą ID iš autentifikuoto nuomininko ir niekada neturi persiųsti
kliento pasirinktos reikšmės. Podėlio raktai susieja tą saugos subjektą su kanoniniais seanso ir
vaizdo įrašo nuorodos ID, saugo tik iš jų naudojant SHA-256 išvestus raktus ir apriboja tiek skaitymą,
tiek trynimą tuo pačiu saugos subjektu. Podėlyje saugoma ne daugiau kaip 16 išvestinių JPEG
kadrų viename įraše; po dešimties minučių jų galiojimas baigiasi. Palaikomas ribotas
skaitymas pagal `start`/`end` arba tiesioginis seanso ištrynimas.

Kiekvienam saugos subjektui leidžiama ne daugiau kaip 16 įrašų ir 64 MiB kanoninių JPEG duomenų. Šie
limitai nepriklauso nuo bendros 64 įrašų / 256 MiB ribos: dėl saugos subjekto kvotos
spaudimo pirmiausia pašalinami tik to saugos subjekto seniausiai naudoti įrašai, o tik tada svarstomas bendras
LRU šalinimas. Vykdant podėlio operacijas, nebegaliojantys įrašai pašalinami tiek iš saugos subjekto, tiek iš
bendros apskaitos, o atšaukimas ir nepavykusi patikra
neleidžia įrašyti dalinio pakaitalo.

Podėlis atmeta nekanoninį Base64, perteklinį užpildymą, ne JPEG mediją, netaisyklingus ar
nukirstus JPEG failus ir JPEG failus, dėl kurių ribojamo viso vaizdo `sharp`
dekodavimo metu pateikiamas įspėjimas. Kiekvieną priimtą vaizdą jis iš naujo užkoduoja kaip kanoninį JPEG, o plotį ir aukštį nustato
pagal dekoduotus baitus, užuot pasitikėjęs kvietėjo laukais, ir pašalina visus pabaigoje esančius
poliglotinius baitus, užuot juos išsaugojęs. Į abi kvotas įskaičiuojamas tik riboto dydžio kanoninis suglaudintas buferis.
Perduodamų JSON duomenų dydžio riba apima Base64 pridėtinį dydį, atsižvelgiant į 32 MiB
dekoduotos įvesties ribą. Kiekvienam
saugomam išvestiniam objektui įrašomi patikrintas JPEG formatas ir raiška, kadrų atrankos politika,
išvestinio objekto versija, sukūrimo laikas, serverio apskaičiuota turinio maiša ir pirminio objekto
nuorodos maiša bei patikimo kvietėjo pateikta pirminio objekto turinio maiša. Atšaukimas tikrinamas
tarp asinchroninių dekodavimo ir maišos skaičiavimo etapų, prieš atominį įrašymą į podėlį.

Šiame etape gamybinis generavimo komponentas dar neprijungiamas prie maršruto ir
neteikiama skirtingos raiškos variantų parinkimo funkcija. Todėl skaidrus Video Bridge užklausų
kelias nesukelia papildomo darbo, o su nuomininku susieto saugos subjekto nustatymas ir
visas FU-08 kelių raiškų gyvavimo ciklas lieka aiškiai numatytais tolesniais darbais ir nėra
dokumentuojami kaip jau įgyvendintas veikimas.

Kadrų aprašai generuojami nuosekliai naudojant sukonfigūruotą Video modelį. Tuščia
Video nuostatos perrašymo reikšmė paveldi Vision nuostatą; jei abi tuščios, Vision
automatinis maršruto parinkiklis parenka faktiškai naudojamą vaizdus apdoroti galintį modelį. Sėkmingai sugeneruoti aprašai
pakeičia pradinę dalį tekstu su pastoviu `[Video description:` prefiksu, kuris taip pat
pažymi tekstą kaip nepatikimą iš medijos gautą stebėjimą ir nurodo tolesniems
modeliams nevykdyti medijoje rastų instrukcijų. Kadrų aprašų podėlio raktai
apima JPEG baitus, užklausos tekstą, laiko žymą ir faktiškai naudojamą modelį; podėlyje saugomi tik sėkmingai sugeneruoti
aprašai. Podėlio įrašuose išsaugomas tikrasis aprašą sėkmingai sugeneravęs modelis,
įskaitant atsarginį modelį; tiltas pateikia `mixed`, kai skirtingų kadrų aprašus
sugeneravo skirtingi modeliai. Radus įrašą podėlyje, pakartotinai naudojama to generavusio modelio tapatybė,
užuot ji pervadinta pagal prašytą maršrutizavimo planą. Viso vaizdo įrašo rezultatų
podėlio raktas sudaromas iš visų išvestį keičiančių įvesties duomenų — užklausos teksto, faktiškai naudojamo
modelio, kadrų atrankos politikos, kadrų skaičiaus, semantinės analizės režimo, normalizuotos dėmesio sutelkimo užuominos SHA-256
kontrolinio atspaudo, dėmesio sutelkimo intervalo, `transcript`,
`audioTranscript` ir kontaktinio lapo žymos — todėl pakeitus bet kurį iš šių
parametrų podėlyje atitikmens nebūna, o pasenęs rezultatas niekada nenaudojamas pakartotinai. Vaizdinio dubliavimo šalinimo politikos
versija, slenkstis ir ribotas kandidatinių kadrų skaičius taip pat aiškiai įtraukiami į
rezultatų podėlio raktą ir metaduomenis; todėl pakeitus politiką negalima pakartotinai naudoti pasenusio
viso vaizdo įrašo aprašo. Rezultatų podėlio v4 metaduomenyse saugomi režimas ir
kontrolinis atspaudas, bet niekada nesaugoma neapdorota naudotojo užduotis. Apsauginio mechanizmo metaduomenyse nurodomi ir
prašytas, ir faktiškai naudojamas analizės režimai; prašytas `focused` režimas, kai nėra
tinkamo naudotojo teksto, nurodomas kaip faktiškai naudojamas `full`.

Apsauginis mechanizmas išskiria kiekvieną palaikomą vaizdo įrašo dalį, tačiau aprašo ne daugiau kaip
`modalityBridgeVideoMaxVideos`. Jei patvirtinta, kad paskirties modelio
`supportsVideo === false`, nesėkmingai apdoroti ir ribą viršijantys vaizdo įrašai pakeičiami aiškiais saugiais
tekstiniais žymekliais, kad neliktų jokio neapdoroto vaizdo įrašo. Kai galimybės nežinomos, šios dalys
išlaiko savo vaizdo įrašo laikmeną; bet kokiam atsarginiam nuorašui taikomas pirmiau aprašytas ribojamas teksto
konvertavimas. Paskirties modeliai, kurių `supportsVideo === true`, tiltą apeina.
Kliento užklausos nutraukimo signalas perduodamas per atsisiuntimą, tarpininko eilę,
antrinius procesus ir aprašų generavimo kvietimus; nutraukus užklausą, apdorojimas sustabdomas tarp vaizdo įrašų ir neapdorota
medija niekada nepraleidžiama kaip atsarginis variantas.

Vykdymo nuostatos saugomos DB ir tikrinamos naudojant Zod:

| Raktas                              | Numatytoji reikšmė | Diapazonas / veikimas                                                                                                 |
| ----------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Pasirenkamas vykdymo metu, įjungiamas aiškiu pasirinkimu                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` išlaiko bendro pobūdžio aprašus; `focused` naudoja ribotą, nepatikimą paskutinio naudotojo pranešimo kontekstą |
| `modalityBridgeVideoModel`          | `""`               | Paveldėti Vision Bridge modelį                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` arba proporcinga `segment_aware`; detektoriui nepavykus, pereinama prie `uniform`            |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                                        |

Anksčiau išsaugotos Video skirtojo laiko reikšmės, viršijančios 120 sekundžių, apribojamos iki
tarpininko galutinio termino; nauji nuostatų įrašymai, viršijantys šią ribą, atmetami.
`GET /api/modality-bridge/video/runtime` prieš autentifikavimą ar vykdymo aplinkos tikrinimą reikalauja patikimo žyma patvirtinto
vietinio grįžtamojo ryšio adreso, o tada reikalauja valdymo
autentifikavimo. Jis grąžina tik `available`, išvalytas FFmpeg/ffprobe versijas ir fiksuotą
priežastį, kai vykdymo aplinka nepasiekiama. Vidinis išskyrimo galinis taškas nėra
vieša įkėlimo API: perpildžius eilę grąžinamas `503` ir `Retry-After`, kvietėjui
atsijungus grąžinamas `499`, o pasiekus fiksuotą tarpininko galutinį terminą grąžinamas `504`. Konvertuoti atsakymai prideda
`video->text;model=<visionModel>;parts=<videos>` prie centrinės
`x-omniroute-modality-bridge` antraštės, nepašalindami Vision ar Audio segmentų.

### Asmens identifikavimo duomenų maskavimo priemonė (`piiMasker.ts`)

Vykdoma **abiejuose** etapuose.

- **`preCall`** klonuoja duomenų turinį, peržiūri `system`, `messages`, `input` ir
  `prompt` (įskaitant paprastus eilutės tipo elementus) ir taiko `processPII()` (iš
  `@/shared/utils/inputSanitizer`) eilutės tipo `content`/`text` laukams. Kai
  `PII_REDACTION_ENABLED=true`, aptikti asmens duomenys (PII) užmaskuojami siunčiamame
  duomenų turinyje. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris valdo tik
  užklausų instrukcijų įterpimo politiką). Kai maskavimas išjungtas, iškvietimas užregistruoja aptikimų
  skaičių nekeisdamas turinio.
- **`postCall`** sukuria giliąją atsakymo kopiją, paleidžia `sanitizePIIResponse()` ir
  „Responses API“ struktūros maskavimo funkciją (`maskResponsesOutput` — apima
  `output_text` ir `output[].content[].text`). Jei kas nors užmaskuojama,
  pakeistas atsakymas pakeičia pradinį.

Apsaugos mechanizmas niekada neblokuoja; jis tik prideda metaduomenis (`meta.detections`,
`meta.redacted`) arba perrašo turinį.

#### Pasirinkimas pagal tipą, pasirinktiniai šablonai ir aptikimų skaitikliai

**Valdymo skydelis → Nustatymai → Sauga → PII maskavimas** leidžia pasirinkti, _kas_ maskuojama. Tai
neįjungia maskavimo: jį vis dar valdo `PII_REDACTION_ENABLED` (užklausai) ir
`PII_RESPONSE_SANITIZATION` (atsakymui + SSE); abu pagal numatytuosius nustatymus išjungti.

- **Pasirinkimas pagal tipą** — integruotieji identifikatoriai pateikti
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Nenustačius pasirenkami visi
  tipai (taip buvo veikiama prieš atsirandant šiam nustatymui). Užklausų apdorojimo mechanizmo
  `ssn_us` šablonas susiejamas su `ssn`. Šablonai (Minimalus, Standartinis, Finansinis,
  Brazilijos, JAV, Visas) tik pažymi atitinkamus žymimuosius langelius naudotojo sąsajoje.
- **Pasirinktiniai šablonai** — iki 20 reguliariųjų reiškinių arba pakaitos simbolių šablonų (`*` = iki 64
  ne tarpų simbolių, `?` = vienas). Atitikmenys pakeičiami į `[CUSTOM_REDACTED]`.
  Kiekvienas šablonas apdorojamas naudojant `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): ne daugiau kaip 500 simbolių, leidžiamos tik
  `g i m s u` vėliavėlės, šablonas turi būti sėkmingai sukompiliuojamas, turi atitikti `safe-regex` patikrą (dėl katastrofiško
  grįžimo atgal) ir negali atitikti tuščios eilutės ar maskavimo vietaženklio.
  Patikros neatitinkantis šablonas atmetamas išsaugant ir bandant, o išsaugotas įrašas,
  neatitinkantis patikros, vykdymo metu praleidžiamas, užuot jį kompiliavus. Pasirinktiniai šablonai
  taikomi tik tada, kai maskavimas įjungtas.
- **Aptikimų skaitikliai** — skaičiai pagal tipą (niekada ne atitikusios reikšmės), laikomi
  atmintyje ir nustatomi iš naujo paleidus iš naujo (`src/lib/pii/piiDetectionStats.ts`). Jie
  didėja tik tada, kai maskavimas įjungtas.

Nustatymai saugomi `key_value` lentelėje (vardų sritis `pii_settings`,
`src/lib/db/piiSettings.ts`) ir skaitomi naudojant 1 s podėlį. API:

| Metodas | Kelias                   | Paskirtis                                                                      |
| ------- | ------------------------ | ------------------------------------------------------------------------------ |
| `GET`   | `/api/settings/pii`      | Vėliavėlių būsena, `enabledTypes`, `customPatterns`, aptikimų skaitikliai      |
| `PUT`   | `/api/settings/pii`      | Pakeisti `enabledTypes` (`null` = visi) ir (arba) `customPatterns`             |
| `POST`  | `/api/settings/pii/test` | Išbandyti vieną šabloną su ne didesniu kaip 8 KB pavyzdžiu; niekas neišsaugoma |

Visiems trims būtinas valdymo prieigos autentifikavimas, o turinys tikrinamas naudojant Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Užklausų instrukcijų įterpimas (`promptInjection.ts`)

Aptinka priešiškas struktūras naudotojo pateiktame turinyje ir įgyvendina
sukonfigūruotą politiką. Veikimą lemia aplinkos kintamieji ir konstruktoriaus
parinktys:

| Nustatymas          | Aplinkos kintamasis                                                                                                         | Numatytoji reikšmė | Poveikis                                                                                                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                                   | `true`             | Kai reikšmė yra `false`, apsaugos mechanizmas iš karto baigia darbą.                                                                                                                        |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                             | `warn`             | Įterpimo politika: `block`, `warn` arba `log`. (`redact` priimama dėl atgalinio suderinamumo, tačiau **nepašalina** įterpto teksto; užklausos PII perrašymą valdo `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alternatyvus pavadinimas `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Mažiausias pavojingumo lygis, būtinas blokavimui. Pagal numatytuosius nustatymus vidutinis lygis tik stebimas.                                                                              |

**Režimų pirmumas** (`getMode`): iškvietėjo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavėlės viršesnė reikšmė** (Valdymo skydelis → Nustatymai →
Funkcijų vėliavėlės) → `INJECTION_GUARD_MODE` aplinkos kintamasis → `INPUT_SANITIZER_MODE` aplinkos kintamasis →
`warn`. Taigi valdymo skydelyje nustatyta viršesnė reikšmė turi pirmumą prieš aplinkos kintamuosius, todėl funkcijų
vėliavėlių sąsaja valdo veikiantį apsaugos mechanizmą realiuoju laiku (nepaleidžiant iš naujo). DB skaitymas atsparus klaidoms:
jei įvyksta klaida, apsaugos mechanizmas grįžta prie aplinkos kintamaisiais pagrįsto veikimo, o kai
viršesnė reikšmė nenustatyta, veikimas yra toks pat, kaip naudojant tik aplinkos kintamuosius.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras detektorių
   rinkinys, naudojamas ir kitose apdorojimo sekos vietose).
2. Integruotieji `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abu `high` pavojingumo lygio).
3. Pasirinktiniai `customPatterns`, perduodami per konstruktoriaus parinktis (eilutės, reguliarieji reiškiniai
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptiktas atvejis pasiekia rimtumo
slenkstį, `preCall` grąžina `{ block: true, message: "Request rejected:
suspicious content detected" }`. Veikdama `warn`/`log` režimais, apsaugos priemonė registruoja įvykius, bet
leidžia vykdyti iškvietimą. Bendroji pagalbinė funkcija `evaluatePromptInjection()` taip pat eksportuojama,
kad ją galėtų naudoti iškviečiantysis kodas, kuriam reikia įvertinti užklausas nesinaudojant registru.

**Skenavimo riba (v3.8.20):** aptikimo priemonė tikrina tik **pirmuosius 16 KB**
sujungto užklausos teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai) faile
`src/shared/utils/inputSanitizer.ts`. Tiek `detectInjection()`, tiek
`evaluatePromptInjection()` prieš vykdydamos šablonų tikrinimo ciklą taiko `slice(0, MAX_INJECTION_SCAN_BYTES)`.
Injekcijos direktyvos būna netoli įvesties pradžios, todėl taip
apribojamos reguliariųjų reiškinių procesoriaus ir šiukšlių surinkimo sąnaudos apdorojant kelių šimtų KB duomenis, nesusilpninant aptikimo (plg.
#3932, #4041).

### Prisijungimo duomenų maskavimo priemonė (`credentialMasker.ts`)

Veikia **abiejuose** etapuose, paskutinė numatytojoje grandinėje (prioritetas `95`). Užmaskuoja
gerai žinomus API raktų / slaptųjų prieigos žetonų šablonus siunčiamuose duomenyse (pranešimų
turinyje, įrankių iškvietimų argumentuose, įrankių rezultatuose) **ir** teikėjo atsakyme, kad
į užklausą įklijuoti prisijungimo duomenys (arba pakartoti įrankio rezultate) nebūtų nutekinti
nei teikėjui, nei atgal klientui.

- **Tik aiškiai įjungus**, pagal tą pačią tvarką kaip ir asmenį identifikuojančios informacijos maskavimas (susiję su griežtąja taisykle #20):
  išjungta, nebent `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai išjungta, apsaugos priemonė nieko nedaro —
  niekada neblokuoja ir neperrašo.
- `redactCredentials()` pereina visą siunčiamų duomenų / atsakymo medį (`walkValue()`,
  apsaugota nuo prototipo užteršimo ir ciklų naudojant `WeakSet`) ir pakeičia atitikmenis
  vietaženkliu `[REDACTED:<type>]`, klonuodama tik tas šakas, kurios iš tikrųjų
  pasikeitė.
- `CREDENTIAL_PATTERNS` apima LLM teikėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS prieigos žetonus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mokėjimų raktus (Stripe, Square), debesijos
  raktus (AWS prieigos raktą, Twilio, SendGrid, Mailgun), privačiuosius raktus / JWT,
  prisijungimo eilutes su prisijungimo duomenimis (`mongodb://user:pass@...` ir kt.) ir
  bendrąjį `Authorization`/`x-api-key`/`api-key`/`apikey` antraštės reikšmės
  šabloną. Antraščių pavidalo raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskuojami struktūriškai (tik reikšmė, išsaugant schemos prefiksą, pvz.,
  `Bearer `/`Basic `), o ne naudojant bendrąją teksto reguliariąją išraišką.
- Apsaugos priemonė niekada neblokuoja; ji tik perrašo (`modifiedPayload` /
  `modifiedResponse`) ir prideda metaduomenis (`meta.credentialsRedacted`, `meta.count`).

Regresijos patikra: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazinė sutartis (`base.ts`)

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
  block?: boolean; // reikšmė true nutraukia grandinės vykdymą
  message?: string; // pateikiamas blokuojant
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // grąžinamas iš preCall užklausai perrašyti
  modifiedResponse?: TValue; // grąžinamas iš postCall atsakymui perrašyti
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

Apsaugos mechanizmas nurodo, kad pakeitimų nėra, grąžindamas `void`, `{}` arba
`{ block: false }`. Grąžinus `modifiedPayload`/`modifiedResponse`, pakeičiama
grandinėje tolesniems apsaugos mechanizmams perduodama reikšmė.
`signal?: AbortSignal` perduoda kvietėjo gyvavimo ciklą apsaugos mechanizmams. Užklausos nutraukimas yra sąmoninga leidimo tęsti sutrikimo atveju išimtis: medijos adapteriai sustabdo darbą ir atlaisvina išteklius, neatkurdami neapdorotos medijos paskirties sistemoje, kuri, kaip žinoma, jos nepalaiko.

## Registras (`registry.ts`)

Vienintelis `guardrailRegistry` egzempliorius teikia:

- `register(guardrail)` — prideda apsaugos mechanizmą (arba pakeičia pagal normalizuotą pavadinimą) ir
  iš naujo surikiuoja pagal `priority` didėjimo tvarka.
- `clear()` / `list()` — administravimo pagalbinės funkcijos.
- `runPreCallHooks(payload, context)` — pereina per aktyvius apsaugos mechanizmus, perduoda
  užklausos duomenis per `modifiedPayload` ir sustoja ties pirmuoju `block: true`.
- `runPostCallHooks(response, context)` — ta pati eiga atsakymo pusėje.
- `resetGuardrailsForTests({ registerDefaults })` — išvalo būseną ir pasirinktinai
  iš naujo užregistruoja numatytuosius mechanizmus, kad testai būtų visiškai izoliuoti.

Abu vykdymo metodai grąžina `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` yra `GuardrailExecutionResult` įrašų masyvas, apimantis
kiekvieno apsaugos mechanizmo laukus `blocked`, `skipped`, `modified`, `error` ir `meta`,
naudingus vykdymui sekti.

### Apsaugos mechanizmų išjungimas atskiroms užklausoms

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` sudaro
apsaugos mechanizmų, kuriuos reikia praleisti vykdant dabartinę užklausą, pavadinimų sąrašą be pasikartojimų.
Yra penki kanalai, skaitomi šia tvarka ir sujungiami į vieną sąrašą
(šalinant pasikartojimus paliekamas pirmasis įrašas):

1. `apiKeyInfo.disabledGuardrails`
2. Užklausos turinio `disabledGuardrails` (aukščiausiame lygyje)
3. Užklausos turinio `metadata.disabledGuardrails` (tik kai `metadata` yra objektas)
4. Antraštė `x-omniroute-disabled-guardrails`
5. Senoji antraštė `x-disabled-guardrails`

Sujungiami visi penki kanalai, įskaitant abi antraštes: siunčiant ir
`x-omniroute-disabled-guardrails`, ir `x-disabled-guardrails`, praleidžiama jų
sąrašų sąjunga, o tuščia naujoji antraštė nebepaslepia senosios
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ištaisyta
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Reikšmės gali būti eilučių masyvai arba kableliais atskirta eilutė; pavadinimų pradžioje ir pabaigoje pašalinami tarpai,
jie normalizuojami į mažųjų raidžių formatą su brūkšneliais (`pii_masker` → `pii-masker`), o tušti
įrašai atmetami. Rezultatas per `context.disabledGuardrails` perduodamas
registrui, kuris praleidžia atitinkančius apsaugos mechanizmus (`skipped: true` lauke `results`).

Išjungimo sąrašas veikia tik **registrą**. Instrukcijų injekcijos `block` režimas yra
privaloma saugumo riba: nuo injekcijų sauganti tarpinė programinė įranga
(`src/middleware/promptInjectionGuard.ts`) kviečia `evaluatePromptInjection()`
be jokio kvietėjo valdomo išjungimo sąrašo (anksčiau naudotas neveiksmingas
`resolveDisabledGuardrails({ body })` kvietimas pašalintas
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), todėl užklausa,
išjungianti `prompt-injection`, vis tiek atmetama `block` režimu. Tai
numatyta projektuojant. Išjungimo kanalus valdo kvietėjas (užklausos turinį,
metaduomenis, antraštes), o kvietėjas neturi galėti išjungti operatoriaus nustatytos
saugumo priemonės
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Antraščių
sąjunga iš [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
keičia tik tai, kurie registro apsaugos mechanizmai praleidžiami; ji neleidžia klientui
apeiti tarpinės programinės įrangos. Privalomos atskiriems raktams ir grupėms taikomos apsaugos mechanizmų politikos
stebimos v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Žr. [Aprėptis ir apribojimai](#coverage-and-limits).

## Vykdymo tvarka

Kiekvienai užklausai, einančiai per `src/sse/handlers/chat.ts` ir
`open-sse/handlers/chatCore.ts` (pokalbių grupės maršrutai, išvardyti skiltyje
[Aprėptis ir ribos](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sudaro praleidžiamų apsaugų sąrašą pagal API raktą, užklausos turinį
   ir antraštes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` vykdo apsaugas didėjančia
   prioriteto tvarka:
   - Išjungtos apsaugos pažymimos kaip `skipped`.
   - Kiekvienos apsaugos `preCall` gali perrašyti perduodamus duomenis per `modifiedPayload`.
   - Pirmasis `block: true` nutraukia grandinę, o apdorojimo funkcija grąžina
     apsaugos atmetimo atsakymą.
3. Perduodami duomenys (galimai perrašyti) patenka į kombinuotą maršruto parinkimą ir siunčiami
   aukštesnio lygmens paslaugai.
4. **Tik nesrautiniams atsakymams:** surinkus atsakymą,
   `guardrailRegistry.runPostCallHooks(...)` vykdo tą pačią grandinę su
   atsakymu. Čia `block: true` atmeta aukštesnio lygmens paslaugos atsakymą ir grąžina HTTP 400. Srautiniams atsakymams šis veiksmas visiškai praleidžiamas.

Išimtį išmetusios apsaugos užregistruojamos su `error: <message>` ir įrašomos į žurnalą per
`logger.warn`, tačiau grandinė tęsiama — pagal projektinį sprendimą klaidos atveju vykdymas leidžiamas.

## Aprėptis ir ribos

Apsaugų registras integruotas tik į pokalbių apdorojimo grandinę. Šios ribos
įtvirtintos testuose `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` ir
`tests/unit/guardrail-pipeline-characterization.test.ts`; pasikeitus veikimui, šiuos testus
atnaujinkite apgalvotai.

### Kur vykdomi apdorojimo kabliai

| Apdorojimo kablys / valdiklis                                        | Kur vykdoma                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                                    | Užklausoms, kurias apdoroja `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (ir `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` bei Telegram pokalbių tarpiniam serveriui. Taip pat valdymo skydelio testavimo galiniam taškui `/api/guardrails/test`. Blokavimas prieš iškvietimą grąžina HTTP 400. |
| `runPostCallHooks`                                                   | Tik **nesrautiniams** pokalbių atsakymams (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Srautiniai atsakymai jo niekada nepasiekia.                                                                                                                                                                                                                                                                                                                                   |
| Srautinių asmens duomenų apdorojimas                                 | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), prijungiamas faile `streamingPipeline.ts`, kai įjungtas `PII_RESPONSE_SANITIZATION`. Tai nėra apsauga, todėl išjungimo kanalai jo neveikia.                                                                                                                                                                                                                                                                       |
| Apsaugos nuo instrukcijų įterpimo tarpinė programinė įranga (senoji) | Kiekvienam `/v1` maršrutui, kuriuo perduodama užklausa modeliui, įskaitant pokalbių grupę (žr. [maršrutų aprėptį](#injection-guard-route-coverage--red-team-phase-8--block-d)). Tik nuo instrukcijų įterpimo.                                                                                                                                                                                                                                                                   |

### Kas neįtraukta

- **Medijos, įterpinių ir duomenų maršrutai** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) niekada nepasiekia registro. Juose
  nevykdomas asmens duomenų maskavimas, prisijungimo duomenų maskavimas ar modalumų sujungimas. Vienintelė jų
  patikra — senoji apsaugos nuo instrukcijų įterpimo tarpinė programinė įranga.
- **Srautiniams atsakymams** netaikomos apsaugos po iškvietimo: nei `pii-masker`, nei
  `credential-masker` po iškvietimo, nei blokavimas po iškvietimo. Taikoma tik srautinių asmens duomenų
  transformacija (kai įjungtas `PII_RESPONSE_SANITIZATION`). Srautiniame atsakyme
  pakartoti prisijungimo duomenys nepaslepiami.
- **Išjungimo kanalai ir tarpinė programinė įranga (pagal projektinį sprendimą):** tarpinė programinė įranga vertina
  instrukcijų įterpimą atskirai iškviesdama `evaluatePromptInjection()`, neperduodama
  jokio iškvietėjo valdomo išjungimų sąrašo. `block` režimas yra privaloma
  riba, kurios iškvietėjo valdomi išjungimai negali apeiti, įskaitant pokalbių grupės maršrutus
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Išjungus
  `prompt-injection`, praleidžiama tik registro apsauga.

### Kas gauna atsakymą prieš apdorojimą po iškvietimo

Nesrautinio apdorojimo atveju tvarka tokia: atminties išgavimas → integruotų įrankių
vykdymas → apsaugos po iškvietimo → išėjimas dėl blokavimo po iškvietimo → įrašymas į semantinę podėlio atmintį.

- **Atminties išgavimas** ir **įrankių vykdymas** gauna atsakymą dar prieš tai, kai po iškvietimo
  taikomos apsaugos priemonės gali jį perrašyti arba užblokuoti. Nuo
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) atminties
  išgavimo metu išgautas tekstas apdorojamas naudojant `sanitizePII`, kai
  įjungtas `PII_RESPONSE_SANITIZATION` (tiek srautinio, tiek nesrautinio perdavimo atveju), tačiau
  atsakymas, kurį vėliau užblokuoja po iškvietimo taikomos apsaugos priemonės, jau būna perduotas atminčiai ir
  įrankiams.
- **Semantinė podėlio sistema** išsaugo atsakymą po iškvietimo taikomų apsaugos priemonių patikros, todėl išsaugo
  perrašytą atsakymą, o užblokuotas atsakymas niekada neįrašomas į podėlį. Podėlio įrašai
  susiejami su atskirais API raktais.

## Konfigūracija

Aplinkos kintamieji, kuriuos skaito integruotos apsaugos priemonės:

| Kintamasis                            | Naudoja                                    | Poveikis                                                                                                                                         |
| ------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                         | Nustatykite `false`, kad visiškai išjungtumėte aptikimą.                                                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                         | Instrukcijų įterpimo politika: `warn`, `block` arba `log`. Pasenusi reikšmė `redact` neperrašo įterptų instrukcijų teksto.                       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                         | Apsaugos nuo instrukcijų įterpimo režimas; taip pat DB funkcijos vėliavėlė, kuri **turi pirmenybę** prieš aplinkos kintamuosius (DB > ENV).      |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                         | Mažiausias grėsmės lygis, kurį atmeta `MODE=block`: `high` (numatytasis), `medium` arba `low`.                                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                         | Pasenęs `INPUT_SANITIZER_BLOCK_THRESHOLD` alternatyvus pavadinimas.                                                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`                               | Kai nustatyta `true`, užklausoje esanti asmenį identifikuojanti informacija (PII) užmaskuojama (nepriklausomai nuo instrukcijų įterpimo režimo). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (vėlesniame apdorojimo etape) | Valdo atsakymo maskavimo priemonės veikimą.                                                                                                      |

„Modality Bridge“ apsaugos priemonės vykdymo konfigūraciją skaito iš DB pagrįstos nustatymų
saugyklos (`getSettings()`), o ne iš aplinkos kintamųjų. Pagrindiniai vaizdų apdorojimo raktai yra
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ir
`modalityBridgeCacheMaxEntries`. Pasenę
`visionBridge*` raktai priimami tik kaip dokumentuota vieno ciklo atsarginė skaitymo
parinktis; rašant iš valdymo skydelio naudojami pagrindiniai raktai. Numatytosios reikšmės ir atsarginės parinkties
parinkimo logika yra faile `src/shared/constants/modalityBridgeDefaults.ts`, o pasenusios
konstantos išsaugotos faile `src/shared/constants/visionBridgeDefaults.ts`.

Garso apdorojimui naudojami `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ir `modalityBridgeAudioMaxClips`, taip pat bendrieji
`modalityBridgeCache*` nustatymai. Garso apdorojimas neturi atsarginės parinkties su pasenusiais raktais, nes šie
raktai buvo įvesti kartu su „Modality Bridge“ schema.

Vaizdo įrašų apdorojimui naudojami `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ir
`modalityBridgeVideoTimeout`, taip pat bendrieji `modalityBridgeCache*` nustatymai.
Pagal numatytąją nuostatą jis išjungtas, nes FFmpeg/ffprobe yra neprivalomos veikimui
reikalingos priklausomybės, o kadrų aprašų generavimas didina delsą ir modelio naudojimo išlaidas.

## Pasirinktinės apsaugos priemonės

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

Veiksmai:

1. Sukurkite `src/lib/guardrails/myGuardrail.ts`, išplečiantį `BaseGuardrail`.
2. Įgyvendinkite `preCall` ir (arba) `postCall`.
3. Užregistruokite importavimo metu (pridėkite per `registerDefaultGuardrails`) arba
   vykdymo metu iškvieskite `guardrailRegistry.register(...)` — registras pakeičia
   bet kurią ankstesnę apsaugos priemonę tuo pačiu normalizuotu pavadinimu.
4. Pridėkite testų kataloge `tests/unit/` (esami pavyzdžiai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testavimas

Tarp testų naudokite `resetGuardrailsForTests()`, kad pradėtumėte nuo žinomos būsenos.
Perduokite `{ registerDefaults: false }`, kad pradėtumėte nuo tuščio registro ir
užregistruotumėte tik testuojamas apsaugos priemones. Vision Bridge palaiko priklausomybių
įterpimą (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge suteikia
atitinkamus įterpimo taškus nustatymams, galimybėms, STT modelio parinkimui, prisijungimo duomenų
patikroms ir transkripcijai. Todėl testais galima patikrinti abu srautus be prieigos prie DB
ar tinklo.

## Taip pat žr.

- `src/lib/guardrails/` — įgyvendinimas
- `src/shared/utils/inputSanitizer.ts` — bendras detektorius, naudojamas
  užklausų injekcijoms aptikti ir asmens duomenims (PII) maskuoti
- `src/shared/constants/visionBridgeDefaults.ts` — numatytieji Vision Bridge nustatymai ir
  modelių, kuriems privalomai naudojamas tiltas, sąrašas
- `src/shared/constants/modalityBridgeDefaults.ts` — bendri numatytieji Vision/Audio vykdymo nustatymai
- `docs/architecture/RESILIENCE_GUIDE.md` — nepriklausomas sluoksnis (grandinės pertraukiklis, laukimo laikotarpiai)
- `docs/reference/ENVIRONMENT.md` — išsamus aplinkos kintamųjų žinynas

## Apsaugos nuo injekcijų maršrutų aprėptis ir priešiškas testavimas (8 etapas · D blokas)

Apsauga nuo injekcijų (`createInjectionGuard` / `withInjectionGuard`) apima visus maršrutus,
priimančius naudotojo užklausas. Ji atsižvelgia į `INJECTION_GUARD_MODE` (numatytoji reikšmė `warn` = tik registruoti žurnale;
`block` = grąžinti HTTP 400 `SECURITY_001`).

| Tipas              | Maršrutai                                                                                                                                            | Numatytasis režimas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Tekstiniai (esami) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generavimo         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Duomenų            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Teksto išgavimas (`extractMessageContents`) apima `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Priešiškas testavimas (kasnakt, `nightly-llm-security.yml`):** promptfoo patikrina, ar kiekvienas maršrutas blokuoja
OWASP-LLM rinkinio užklausas, kai `INJECTION_GUARD_MODE=block`; garak vykdo zondavimo testus (praleidžiama, jei nėra slaptosios reikšmės).
`moderations` įtrauktas siekiant nuoseklumo. Blokavimo režimas yra privaloma apsaugos riba: `evaluatePromptInjection()`
nepaiso konkrečios užklausos išjungimo sąrašo, kurį jai perduoda tarpinė programinė įranga, todėl `disabledGuardrails`
**neatleidžia** maršruto nuo šios apsaugos ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Naktinė darbo eiga (`.github/workflows/nightly-llm-security.yml`, cron + rankinis
paleidimas) turi dvi užduotis:

- **`promptfoo-guard` (blokuojanti)** — vykdo `promptfoo eval -c promptfooconfig.yaml`
  su `INJECTION_GUARD_MODE=block`. Kiekvienu priešišku atveju (pvz., „nepaisyk visų
  ankstesnių instrukcijų…“, DAN tipo apribojimų apėjimo bandymai) tikrinama, ar atsakyme yra
  `error.code === "SECURITY_001"`, t. y. ar apsaugos priemonė iš tikrųjų atmetė užklausą.
- **`garak` (informacinė)** — vykdo garak `--probes promptinject,dan,leakreplay`
  prieš vietinį OmniRoute egzempliorių (`http://localhost:20128/v1`). Vykdoma tik esant
  teikėjo slaptajai reikšmei (`PROMPTFOO_PROVIDER_KEY`); jos nesant sklandžiai praleidžiama, o komandos pabaigoje pridėta
  `|| true`, todėl rezultatai pateikiami nesukeliant CI nesėkmės.

Pagalbinės apsaugos priemonės (`createInjectionGuard` / `withInjectionGuard`) aprėptis
apima kiekvieną užklausos tekstą priimantį `/v1` maršrutą; užklausos tekstas išgaunamas iš
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, naudojant
`extractMessageContents()` faile `src/shared/utils/inputSanitizer.ts`.

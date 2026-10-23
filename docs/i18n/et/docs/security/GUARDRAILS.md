# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Alusallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-10-17 — v3.8.52 (lisatud [Katvus ja piirangud](#coverage-and-limits):
> milliste marsruutide ja vastuseteedeni haagid ulatuvad, ühendatud keelamispäised (#16412), süstimise
> blokeerimisrežiim kohustusliku piirina (#16413) ning mis näeb vastust enne järelkutset)

Kaitsemehhanismid tagavad ohutuse, reeglite järgimise ja sisu teisendamise
OmniRoute'i ning ülesvoolu teenusepakkujate vahelisel piiril. Iga kaitsemehhanism saab kontrollida (ja
soovi korral tagasi lükata, teisendada või annoteerida) päringute andmesisu (`preCall`) ja
ülesvoolu vastuseid (`postCall`).

Süsteem on **tõrke korral avatud**: kui kaitsemehhanism viskab täitmise ajal erindi,
salvestab register vea ja jätkab järgmise kaitsemehhanismiga, selle asemel et päringut
nurjata. Blokeerimine on selgesõnaline otsus (`block: true`), mitte kunagi juhus.
Ainus erand on katkestatud päring: kui kutsuja `signal` katkestatakse,
nurjab erindi visanud kaitsemehhanism haagi käivituse, selle asemel et vahele jääda.

Haagid **ei** käivitu igal marsruudil ega iga vastuse korral. Lugege jaotist
[Katvus ja piirangud](#coverage-and-limits), enne kui tuginete kaitsemehhanismile kui
turvameetmele.

## Sisseehitatud kaitsemehhanismid

Register laadib importimisel automaatselt kuus kaitsemehhanismi prioriteedijärjekorras
(vt `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp (etapid) | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Väiksema prioriteedinumbriga mehhanismid käivituvad **esimesena**.

### Pildisild (`visionBridge.ts`) — modaalsussild PR-1

GLM 5.3 baasmudelil ja mudelitel `glm-5.3-{low,high,max}` on registri/spetsifikatsiooni
metaandmetes selgesõnaliselt märgitud `supportsVision:false`. GLM 5.3 Flashi variandid
jäävad sisseehitatud pilditoega mudeliteks. Claude Code'i `/v1/messages` marsruut siseneb
ühisesse `handleChat` kutseeelsete kaitsemehhanismide ahelasse **enne** Claude'i vormingu teisendamist OpenAI
vormingusse; pesastatud `Read` tööriistatulemuste pilte tuleb kirjeldada või töödelda
enne, kui see teisendus tõstab need OpenAI `image_url` sisuks (#17069).

Püüab kinni **pilditoeta mudelitele** suunatud pilte sisaldavad päringud ja
suunab kas kogu päringu ümber pilditoega mudelile või asendab pildiosad
enne ülesvoolu kutset seadistatava pildimudeli loodud tekstikirjeldustega.
See võimaldab ainult teksti toetavatel teenusepakkujatel läbipaistvalt töödelda
multimodaalset andmesisu.

Töövoog:

1. Jäta vahele, kui sihtmudel juba toetab pilte (välja arvatud juhul, kui see on
   sundsillamise loendis `isVisionBridgeForcedModel`).
2. Eralda pildiosad funktsiooniga `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), mis delegeerib töö **ühtsele meediatuvastajale**
   `detectMediaParts()` failis `open-sse/utils/mediaParts.ts` — see on
   kombinatsioonide ühilduvusfiltriga jagatud ainus alusallikas.
   Eraldamine on lubatud ainult nende kujude puhul, mida `replaceImageParts` saab
   tagasi paigutada (eraldamise↔asendamise leping): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` ja Responses
   API `input_image`. Ka Claude Code'i `tool_result.content` sisse
   pesastatud sobivad pildid ning Responsesi tööriistaväljundites olevad pildid eraldatakse ja
   asendatakse nende algsetel teedel; ainult indikaatorit sisaldavad kujud on kombinatsioonifiltri
   sisend ega kuulu eraldamisele.
   Jäta vahele, kui midagi ei leitud.
3. Lahenda käitusaja konfiguratsioon funktsiooniga `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uued `modalityBridge*`
   sättevõtmed on ülimuslikud; vanad `visionBridge*` võtmed jäävad **ühe tsükli
   varuvariandiks** (tagasipööramise aken). Kui sild on keelatud, jäta vahele enne mis tahes
   meediasisu läbimist.
4. Režiimivalija (`modalityBridgeVisionMode`, vt allolevat tabelit) otsustab,
   kas suunata ümber või kirjeldada. Ümbersuunamine tagastab `modifiedPayload`, milles on vahetatud ainult `model`,
   ning metaandmed `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamistee: piira piltide arv väärtusega `maxImages`, koosta ülesandeteadlik viip,
   kontrolli kirjelduste vahemälu, kutsu pildimudelit **paralleelselt**
   (`Promise.allSettled`) ja sisesta piltide asemele tekstiosad `[Image N]: <description>`.
   Ebaõnnestunud kirjeldamine annab tulemuseks `null`: toorpilt säilitatakse
   tundmatute või pilditoega sihtmudelite korral (#4012), kuid **kinnitatud ainult teksti toetav otsene
   sihtmudel** või pilditoeta kombinatsioon saab iga kirjeldamata pildi asemele selgesõnalise
   `(unavailable — no vision-capable provider connected)` tekstiasenduse,
   sealhulgas osaliste tõrgete ja kirjeldamiskutsete ülempiiri ületavate
   piltide korral (#17069). Olemasolev varulahendus kombinatsiooni kõigi kirjeldamiskutsete
   nurjumise puhuks jääb kehtima (#8430).
6. Tagasta `modifiedPayload` + metaandmed (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režiimivalija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Varasem heuristika, muutmata (#6640/#7204): mudelid, mis pole kombomudelid ega `auto/` mudelid, suunatakse ümber parimale nägemismudelile, välja arvatud juhul, kui algsel mudelil on juba kasutatavad autentimisandmed (siis koostatakse kirjeldus); kombosihtmudelite korral koostatakse alati kirjeldus.                                                                        |
| `describe` |           | Alati koostatakse kirjeldus — ümbersuunamisplokk jäetakse täielikult vahele; alati vastab kasutaja valitud mudel.                                                                                                                                                                                                                                                                  |
| `reroute`  |           | Sunnitud ümbersuunamine: autentimisandmetega mudeli säilitamise kaitsekontroll jäetakse vahele. Ümbersuunamise **sihtmudeli** autentimisandmete kaitsekontroll kehtib endiselt — kui kasutatavat nägemisvõimekusega sihtmudelit pole, blokeerib sild päringu selge veateatega, selle asemel et koostada kirjeldus või saata töötlemata pilte ainult teksti toetavale sihtmudelile. |

Sundrežiimid lõpetavad otsustamise **enne** automaatse heuristika käivitumist; `auto` käitumine
on baithaaval identne PR-1 eelse kaitsemehhanismiga.

#### API-võtme ulatus (`visionBridgeKeyScope.ts`)

Kui kutsuja API-võti piirab ühendusi (`allowedConnections`), kvoodifonde
(`allowedQuotas`) või mudeleid (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), valib sild
ümbersuunamiseks ja kirjeldamiseks ainult mudelid, mida võti tohib kasutada, ning ainult ühendustel, mida võti tohib
kasutada. Kirjelduskutse läbib seejärel alati OmniRoute'i enesesuunamisahela koos
päisega `x-omniroute-self-loop-key-id`, nii et vastuvõttev vestluspäring
jõustab selle võtme ühendus- ja mudelipoliitika uuesti. `enforceApiKeyPolicy()`
arvestab seda päist ainult koos enesesuunamisahela bearer-tõendiga, seega saab see
juurdepääsu ainult kitsendada ning ID, millele vastet ei leita, lükatakse tagasi.

Kui võtmele pole lubatud ühtegi nägemismudelit, lükkab **kinnitatult ainult teksti toetav
sihtmudel** pildipäringu kohapeal tagasi selge HTTP 400 veaga, selle asemel et
edastada pildibaite võimetule ülesvooluteenusele (#17069). Tundmatu või sisseehitatud
nägemisvõimekusega sihtmudelite puhul säilitab kirjeldustee senise
tõrke korral jätkamise käitumise (metaandmed `{ skipped: true, reason: "no_permitted_vision_model" }`).
Ilma võtmeta päringud ja nende piiranguteta võtmed käituvad täpselt
nagu varem.

#### Ülesandeteadlik kirjeldusviip (`modalityBridgeVisionTaskAware`)

Vaikimisi **tõene**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
põhikirjeldusviibale **kasutaja viimase sõnumi** teksti (kärbituna 500 märgini),
suunates kirjelduse kasutaja tegelikule küsimusele
(codex-vision-proxy muster) ja paludes nägemismudelil nähtava
teksti transkribeerida. Kui lipp on välja lülitatud või kasutaja tekst puudub, kasutatakse põhiviipa muutmata kujul.

Kirjelduse enesesuunamisahela enda OpenAI-ga ühilduv päring (`callVisionModelSingle()`
failis `visionBridgeHelpers.ts`) taotleb alati väärtust `image_url.detail: "high"` —
tingimusteta, iga kutsuja/teenusepakkuja puhul, sõltumata kliendi signaalidest.
Vähese detailsusega diskreetimine halvendab OCR-i täpsust just selle teksti transkribeerimise
ülesande puhul, mida see viip taotleb, seega küsib kirjelduskutse ise alati suurt
detailsust, olenemata algse sissetuleva päringu detailsustasemest. See
mõjutab ainult sisemise kirjelduspäringu keha; see ei muuda seda, kuidas
OmniRoute edastab kutsuja enda väärtuse `image_url.detail` põhipäringus —
see vaikeväärtus rakendatakse eraldi ja ainult tuvastatud OpenCode'i klientidele
funktsioonis `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Kirjelduse enesesuunamisahela Anthropicu edastusvormingut kasutaval harul pole välja `detail`
ning kumbki vaikeväärtus seda ei mõjuta.

#### Kirjelduse väljundi ülempiir (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikimisi | Vahemik           |
| ------------------------------ | --------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` või 100–50000 |

`0` (vaikimisi) tähendab **ülempiiri puudumist** — funktsiooni
`callVisionModel()` tagastatud kirjeldus edastatakse muutmata kujul, säilitades senise
käitumise. Iga väärtus vahemikus 100–50000 kärbib kirjeldust, lisades
lõppu `…`, enne kui see lisatakse tagasi kujul `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failis `src/lib/guardrails/visionBridge.ts`).
Suurendage seda üksikasjalike OCR-ülesannete jaoks, kus järgnev mudel vajab
täielikku transkriptsiooni; vähendage seda, et piirata jutukate nägemismudelite tokenikasutust.
Juhtpaneeli väli asub nägemise vahekaardi täpsemate sätete paneelil
(`modality-bridge-max-chars` failis `ModalityBridgeVisionTab.tsx`) ning tõstab iga
väärtuse vahemikus 1 kuni 99 alampiirini 100, jättes selgesõnalise `0`
muutmata — `0` on iseseisvalt kehtiv Zodi väärtus
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte üksnes
määramata oleku vaikeväärtus.

#### Kirjelduse vahemälu (`modalityBridge/bridgeCache.ts`)

Mälusisene LRU + TTL vahemälu kirjeldusväljundite jaoks, ühine kogu protsessile.
Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
kasutades pikkusprefiksiga raamistust (väljade piiridest tingitud kokkupõrkeid ei teki). Mudelikomponent on
**seadistatud** sillamudel, mitte tegelikult vastanud mudel —
`callVisionModel` võib sisemiselt kasutada varuvarianti ning iga katse eraldi võtmega salvestamine
killustaks vahemälu. Ebaõnnestunud kirjeldusi ei salvestata kunagi vahemällu. Sätted:

| Võti                            | Vaikimisi | Vahemik |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Kaugpiltide normaliseerimine (enesetsükli describe/base64 allalaadimine)

Kui sild laadib **kaugpildi** ise alla — Anthropicu describe-enesekutse ja claude-wire-format-vormingu base64-teisendus
(`ensureBase64ImagesForClaudeWire`), mõlemad funktsiooni
`fetchRemoteImageAsDataUri()` kaudu failis `visionBridgeHelpers.ts` — läbib saadud andme-URI
funktsiooni `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`), enne kui see lisatakse nägemismudeli
päringusse. Liiga suured pildid vähendatakse nii, et **pikem külg on 2048px** (see vastab
suurusepiirangule, mida OpenAI/Anthropic juba serveri poolel rakendavad), vähendades
üleslaaditavate baitide hulka ja latentsust, muutmata seda, mida nägemismudel näeb. Suuruse muutmiseks
kasutatakse teeki `sharp`, mis laaditakse dünaamilise impordiga: platvormil, kus selle natiivset
binaarfaili ei õnnestu laadida, ei viska `normalizeDataUri()` **kunagi erindit** — selle asemel
edastatakse algsed baidid muutmata kujul, nii et describe/base64-teisenduse
töötlustee jääb alati toimima. Ka mittepildilised baidid (allalaadimine, mis ei tagastanud
dekodeeritavat pilti) edastatakse muutmata kujul. See normaliseerimine
piirdub piltidega, mille sild laadib alla oma enesekutse jaoks — seda ei rakendata kunagi
kutsuja muutmata kujul edastatavale algsele sisule, järgides põhimõtet, et
muudatusi tehakse ainult selgesõnalisel nõusolekul (range reegel #20).

#### Seadistuste skeem + migratsioon

Uusi `modalityBridge*` võtmeid valideeritakse Zodiga skeemis `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, kolmik `modalityBridgeCache*` ja
Audio Bridge'i kasutatav rühm `modalityBridgeAudio*`. Migratsioon
`141_modality_bridge_settings.sql` kopeerib olemasolevad pärand-
`visionBridge*` väärtused vastavatele uutele võtmetele (idempotentne ega kirjuta kunagi üle
operaatori määratud `modalityBridge*` väärtust); pärandvõtmeid aktsepteeritakse
lugemisel varuvariandina veel ühe väljalasketsükli jooksul.

#### Läbipaistvuspäis + statistika

Describe-teisenduse läbinud vastused sisaldavad päist
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mille koostab `buildModalityBridgeHeader()` failis `modalityBridge/bridgeStats.ts`
ja lisab `withModalityBridgeHeader()` failis `src/sse/handlers/chatHelpers.ts`).
Ümber suunatud päringud päist **ei saa** — sisu jäi puutumata ja mudeli
vahetus on juba nähtav vastuse keha väljal `model`.

`GET /api/modality-bridge/stats` (haldusautentimine, sama tase mis
`GET /api/settings`) tagastab mälus hoitavad modaalsuspõhised loendurid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaalsuste `vision`, `audio` ja
`video` jaoks. `averageLatencyMs` kasutab nimetajana väärtust `latencySamples`, mitte kõigi
katsete arvu; ajamõõtmiseta toiming ei tekita kunstlikku nullmillisekundilist
mõõtetulemust. `bridged` jääb edukate teisenduste tagasiühilduvaks
aliaseks; ebaõnnestunud katsed seda ei suurenda.
Loendurid lähtestatakse protsessi taaskäivitamisel teadlikult
(tegu on telemeetria, mitte arvestusega).

#### Juhtpaneeli seadistamine

Spetsiaalne juhtpaneeli leht asub aadressil
`/dashboard/settings/modality-bridge`. Selle URL-i kaudu avatavad vahekaardid `Vision`, `Audio`
ja `Video` säilitavad päringuparameetrid, muutes ainult väärtust `tab`.
Nägemise vahekaart võimaldab sisselülitamist, režiimi ja mudeli valikut (sealhulgas automaatset
vaikevalikut), ülesandeteadlikke viipasid, täpsemaid ajalõpu-, piltide, kirjelduse pikkuse ja vahemälu
piiranguid, käitusaja
loendureid ning kaitsemeetmetega näidispäringut. Ka heli vahekaart on kasutusvalmis: see võimaldab
sisselülitamist, ainult STT-mudelite valikut koos automaatvalikuga, ajalõpu ja heliklipi maksimumpikkuse piiranguid, heli
loendureid ning `input_audio` näidistesti. Video vahekaart on toimiv: see kuvab
FFmpeg/ffprobe käitusoleku — ühe neljast selgesõnalisest kasutajaliidese olekust (`unknown`, kui
kontroll on pooleli või seda ei õnnestunud lõpetada, `restricted`, kui juhtpaneeli host ei kasuta
tagasisilmusaadressi ja kontroll jäetakse kliendi poolel vahele, `unavailable`, kui kontroll on tehtud
ja puudumine kinnitatud, või `available` koos FFmpeg/ffprobe versioonidega) — salvestab
sisselülituse, mudeli, kaadrite, video ja ajalõpu piirangud, filtreerib mudelivaliku nägemisvõimega
mudelitele ning kuvab video loendureid.

Endine Vision Bridge'i kaart tehisintellekti seadistustes on ühilduvuslink
uuele lehele; see ei sisalda enam vormi teist koopiat. Ka meediapakkujate jaotis
seob pildist tekstiks ja kõnest tekstiks töövood vastavate Modality
Bridge'i vahekaartidega, eemaldamata olemasolevat kõnest tekstiks katsetuskeskkonda.

**Enesetsükli vastuvõtukontrollist möödumine:** kui describe-kutse suunatakse OmniRoute'i
enda `/v1` enesetsükli kaudu (mittestandardne pakkujamudel), saadab alampäring
`x-omniroute-admission-bypass: internal` ning autenditakse lahendatud
enesetsükli autentimisandmetega — kohalikus režiimis kohaliku `sk_omniroute` tunnusväärtusega või
operaatori seadistatud keskkonnamuutuja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` võtmega (#1350), et ka
`REQUIRE_API_KEY=true` juurutustes saaks describe-kutset käivitada. Möödumist
lubatakse ainult nende täpsete autentimisandmete korral, nii et välised kliendid ei saa
päise abil vastuvõtukontrolli vahele jätta.

Pärandvaikeväärtused asuvad failis `src/shared/constants/visionBridgeDefaults.ts`; uued
režiimi, ülesandeteadlikkuse ja vahemälu vaikeväärtused ning seadistuste lahendaja asuvad failis
`src/shared/constants/modalityBridgeDefaults.ts`. Kaitsemehhanism pakub
konstruktori valikut `deps`, et testid saaksid sisestada funktsioonide `getSettings` ja
`callVisionModel` näivteostusi.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Püüab heli sisaldavad vestluspäringud kinni enne, kui need jõuavad sihtmärgini, mille puhul pole
teada, et see toetaks helisisendit. See ei suuna vestluspäringut kunagi ümber: heliosad
transkribeeritakse olemasoleva OpenAI-ga ühilduva mitmeosalise lõpp-punkti kaudu ning
valitud vestlusmudel jätkab tekstiliste transkriptsioonidega.

Töövoog:

1. Määra `supportsAudio` väärtus funktsiooni `getResolvedModelCapabilities()` kaudu. Esmajärjekorras
   kasutatakse teenusepakkujate registri selgesõnalisi metaandmeid, seejärel mudeli staatilisi metaandmeid ning lõpuks sünkroonitud
   `modalities_input` väärtust. Deklareeritud sisendiloend ilma väärtuseta `audio` annab tulemuseks `false`; kui
   võimekuse kohta tõendid puuduvad, jääb väärtuseks `null`. Nii `false` kui ka `null` aktiveerivad
   konservatiivse silla, samas kui `true` jätab selle vahele.
2. Määra `modalityBridgeAudio*` sätted ja eralda igast sõnumist asendatavad ülataseme
   heliosad, kasutades ühist `detectMediaParts()`
   tuvastajat. Toetatud edastuskujud on OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Pesastatud heli tuvastatakse marsruutimiseks, kuid
   asendamise käigus seda ei eemaldata. Tööd piirab `modalityBridgeAudioMaxClips`;
   hilisemad osad jäävad puutumata.
3. Järgi seadistatud `provider/model` väärtust või lase funktsioonil `selectAudioBridgeModel()` läbida
   `AUDIO_TRANSCRIPTION_PROVIDERS` kataloogi püsivas järjestuses ning valida esimene
   mudel, mille teenusepakkujal on kasutatav aktiivne autentimisandmestik.
4. `callAudioTranscription()` teisendab base64- või andme-URI-vormingus heli mitmeosalise päringu
   väljaks `file` või laadib kaugel asuva `audio_url` alla ainult avalikke sihtkohti lubava väljuvate ühenduste
   kaitse kaudu, kasutades DNS-i kinnistamist ja 25 MB suurusepiirangut. Seejärel saadab see faili ja valitud
   mudeli POST-päringuga kohalikku tagasisilmuse lõpp-punkti `/v1/audio/transcriptions`, autentides päringu
   funktsiooni `resolveSelfLoopBearer()` abil. Olemasolev transkribeerimismarsruut teeb tavapärase
   autentimisandmete otsingu, ooteaja- ja päringusageduse piirangute käsitlemise ning teenusepakkujale suunamise.
5. Edukad väljakutsed asendavad vastavad osad kujuga `[Audio N]: <transcript>`. Väljakutsed
   käivitatakse meetodiga `Promise.allSettled`: üksiku väljakutse nurjumisel säilib algne
   heliosa (#4012 leping). Kui kõik väljakutsed nurjuvad ja sihtmudeli puhul on kinnitatud
   `supportsAudio === false`, asendatakse osad kujuga
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 leping). Kui
   sihtmudeli võimekus pole teada (`null`), jääb päring kõigi väljakutsete nurjumisel puutumata. Kinnitatud
   ainult teksti toetav sihtmudel, millel puuduvad kasutatavad STT autentimisandmed, saab sama selgesõnalise
   asendusteksti ilma võrgupäringut tegemata.

Edukad transkriptsioonid kasutavad protsessiülest Modality Bridge’i LRU/TTL-vahemälu.
Võti ühendab heliviite, püsiva toimingusildi `audio-transcription`
ja valitud STT mudeli; nurjumisi ei salvestata kunagi vahemällu. Helitöötluskatsed uuendavad
ühiseid loendureid `bridged`, `cacheHits`, `failures` ja `lastUsedAt`.
Teisendatud vastused sisaldavad päist
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; muutmata
päringutele Audio Bridge’i segmenti ei lisata.

Käitusaja sätted salvestatakse andmebaasi ja valideeritakse Zodiga:

| Võti                          | Vaikeväärtus | Vahemik               |
| ----------------------------- | ------------ | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                     |
| `modalityBridgeAudioModel`    | `""`         | Automaatne või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                  |

Ühist vahemälu juhivad endiselt `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosild (`videoBridge.ts`, `videoBridgePipeline.ts`)

Püüab kinni ülataseme videoosad Chat Completionsi väljal `messages` ja Responses
API väljal `input` enne sellise sihtmudeli väljakutsumist, millel puudub teadaolev loomulik videotugi.
Toetatud kujud on `input_video`, `video_url`, `video_source`, HTTPS-i URL-id
ja andme-URI-d kujul `data:video/*;base64,...`. Lihtsaid failinimesid tekstis ei käsitleta
videona.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastutab päringu läbimise,
võimekuse ja poliitika kontrolli, päringupõhise koondamise ning vastuse andmesisu eest.
Videopõhine töö — hankimine, terviktulemuse vahemälu, kaadrijada
kirjeldamine (mis lõimib ka väljakutsuja deklareeritud helitranskriptsiooni) ning iga katse
mõõdikud, katkestamine ja puhastamine — on peidetud funktsiooni `processVideoPart` taha failis
`videoBridgePipeline.ts`; seda kutsutakse välja üks kord iga videoosa kohta funktsiooni `preCall` tsüklis.
See moodul määratleb ka selgesõnalised pordipiirid `VideoMediaBrokerPort`
(baitide hankimine ja valitud kaadrite eraldamine), `VideoAudioTranscriptionPort`
(väljakutsuja deklareeritud helitranskriptsiooni lõimimine valitud kaadrite kirjeldustega) ja
`VideoDrilldownPort` (kaadrite süvaanalüüsi püsisalvestuse piir; pole veel ühendatud
funktsiooniga `processVideoPart` — praegu kirjutab süvaanalüüsi kirjeid ainult eraldi marsruut
`/api/modality-bridge/video/drilldown`).

Avalik `/v1` päringuteekond ei impordi ega käivita kunagi alamprotsessi. Kaugvideoid
laaditakse alla 50 MiB suurusepiiranguga; otse päringusse lisatud base64-videotele kehtib
konservatiivne 36 MiB dekodeeritud suuruse piirang video kohta, et mudeli, sõnumite ja vormistusstruktuuri
ümbris jääks avalike JSON-päringute 50 MiB vastuvõtupiirangu sisse. Otse lisatud andmete
pikkust ja hinnangulist dekodeeritud suurust kontrollitakse enne mälu eraldamist. HTTPS on
nõutav nii algse kaug-URL-i kui ka iga ümbersuunamise puhul, kasutades olemasolevat
ainult avalikke sihtkohti lubavat väljuvate ühenduste kaitset koos DNS-i kinnistamisega. Seejärel liiguvad baidid üle täpselt määratletud sisemise
`POST /api/modality-bridge/video/extract` vahendajapiiri. See marsruut on nii
`LOCAL_ONLY` kui ka `SPAWN_CAPABLE`, võtab vastu ainult protsessipõhiselt autenditud
päringuid usaldatud tagasisilmusliideselt ega võta kunagi vastu URL-i, failisüsteemi teed, käivitatavat faili
ega argumentide loendit. API päringukeha suuruse kontrollahel ja töötleja järkjärguline päringukeha
lugeja jõustavad teineteisest sõltumatult vahendaja sisendi 50 MiB piirangu. Selle piiratud järjekord käitab
korraga üht eraldamist, lubab nelja ootel tööd ning piirab ootel sisendi mahu
100 MiB-ni.

Vahendaja sees loeb `ffprobe` privaatset kohalikku faili; fikseeritud vormingute
lubatud loend välistab esitusloendi- ja manifestivormingud. Lubatud MOV-perekonna
konteinerite puhul jäävad välised MOV-andmeviited vaikimisi keelatuks ning
fikseeritud käsk ei luba neid. Nii `ffprobe` kui ka `ffmpeg` kasutavad ainult
`file`-protokolli lubavat loendit, üht lõime, fikseeritud argumendimassiive, ei kasuta käsukesta
ning leiavad käivitatavad failid `PATH` kaudu. Manusena lisatud kaanepildivood ei ole
esitatavate voogude kandidaadid. Kõik esitatavad vood peavad vastama piirangutele ning
selgesõnaliselt määratud vaikevoogu eelistatakse deterministlikule väikseima indeksiga
varuvalikule. Videote kestus on piiratud 600 sekundiga, kumbki mõõde 8,192 piksliga ja
lähtepikslite arv 33,554,432 piksliga. FFmpeg võtab valimisse 1–16 keskpunkti JPEG-kaadrit, vähendab
pikema külje maksimaalselt 1,024 pikslini ilma väiksemaid sisendeid suurendamata ega
saa kunagi sisendiks URL-i. Valimivõtu vaikepoliitika on `uniform`. Valikuline
`scene_aware` ja eksperimentaalne `segment_aware` poliitika teevad juba valideeritud
kohaliku vooga ühe täiendava fikseeritud FFmpeg-töötluskäigu, valivad piiratud hulga
`showinfo` stseeniajatempleid ning detektori tõrke, ajalõpu, vigase väljundi või tühja
kandidaadihulga korral naasevad deterministlikult samade ühtlaste keskpunktide
juurde. Segmenditeadlik režiim jaotab keskpunktivalimid proportsionaalselt
valideeritud stseeniintervallidele; segmenditeadlikke alusandmeid ja varukäitumist
kirjeldatakse üksikasjalikult allpool. Range 16 kaadri piirang
rakendatakse iga poliitika puhul pärast valikut. Kui stseeniteadlikul päringul on ainult
ühe kaadri eelarve, kasutab see aktiivse täisvideo- või fookusakna ühtlast
keskpunkti ning teatab `policyEffective: uniform`: üks valitud stseenikaader
ei saa säilitada mõlemat ajalist otsa. Kutsuja võib soovi korral määrata
lõplike väärtustega fookusakna (`start`/`end` sekundites); piirid kärbitakse meedia
kestuse järgi, vastupidises järjekorras või mittelõplike väärtustega aknad lükatakse tagasi ning kõiki valimivõtu
poliitikaid rakendatakse ainult normaliseeritud intervalli sees. Saadud
aken lisatakse valimivõtu metaandmetesse ja ebausaldusväärse kirjelduse
prefiksisse, et allavoolu mudelid saaksid eristada fookustatud väljavõtet kogu
ajajoonest.

Semantiline kirjeldusfookus on eraldi, selgesõnaline säte. Vaikimisi kasutatav `full`
analüüsirežiim säilitab olemasoleva kaadriviiba ega edasta päringu
teksti kunagi kirjeldusmudelile. Režiimis `focused` loeb sild samast Chat- või Responses-
konteinerist ainult viimast mittetühja kasutaja kirjutatud `text`/`input_text` sisu,
normaliseerib selle NFC-kujule, koondab juhtmärgid ja tühimärgid
ning piirab selle 500 Unicode'i koodipunktini. Tühja tulemuse korral kasutatakse täpselt
sama `full` viipa. Kasutatav vihje serialiseeritakse JSON-ina eraldi
ebausaldusväärse kasutajakonteksti plokis ning see võib ainult seada esikohale vaadeldavaid üksikasju; see
ei saa tühistada eraldi hoiatust mitte järgida meedias nähtavaid
või kuuldavaid juhiseid. Tekstiline fookus ei tuleta kunagi väärtusi `start`/`end` ega muuda
ajalist valimivõtjat.

#### FU-07 struktuursed segmendi alusandmed

`segment_aware` kasutab juba valideeritud kohaliku videovoo puhul üht piiratud
eelanalüüsikäiku. Fikseeritud filtriahel skaleerib esmalt laiuse maksimaalselt 320 pikslini,
tuvastab stseenivahetused ja tardunud intervallid ning võtab seejärel hägususe, keskmise heleduse
ning ruumilise/ajalise info jaoks valimisse 1 kaadri sekundis. Töötluskäik on
piiratud 600 struktuurse valimi, ühe FFmpeg-/filtrilõime, samade
ainult `file`-protokolli ja konteinerite lubatud loendite, 1 MiB protsessiväljundi piiri
ning maksimaalselt 30 sekundiga vahendaja ühise katkestus-/tähtajapiirangu raames. See ei võta päringust kunagi
vastu käsku, filtrit, teed ega URL-i.

Struktuursed väärtused on deterministlikud valimivõtu alusandmed, mitte video semantiline
mõistmine. Need ei järelda kujutatud subjekte, tegevusi, kirjeldusi, kõnet ega kasutaja
kavatsust. Stseeni- ja tardumispiirid moodustavad segmendid; tardumise osakaal, hägusus,
säritus, ruumilised detailid ja ajaline muutus mõjutavad ainult olemasoleva
1–16 kaadri eelarve jaotamist. Täielikult tardunud segmendi ülempiir on üks kaader,
samal ajal kui mittetardunud segmendid konkureerivad ülejäänud eelarve pärast. Kui piire
on rohkem kui kaadreid, säilitatakse ajajoone ühtlane katvus, et kiired alguse lõiked
ei saaks varjata pikka lõppsegmenti. Tardumispiirist kuni 1-sekundilise
analüüsieraldusvõime kaugusel olevad stseenipiirid ühendatakse.

Puuduvate filtrite, vigaste/tühjade alusandmete, detektori vea või piiratud
eelanalüüsi ajalõpu korral jätkatakse täpselt sama ühtlaste keskpunktide poliitikaga. Kutsuja
katkestuse või vahendaja tähtaja saabumise korral nii ei jätkata: see lõpetab käimasoleva
alamprotsessi, takistab hilisemat kaadrite eraldamist ning privaatne ajutine kataloogipuu
eemaldatakse plokis `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereerib deterministlikud tegelikud FFmpeg-
testandmed dublettide eemaldamise järgse kirjelduskutsete kokkuhoiu, tiheda liikumise eelarve jaotamise,
hägususe/särituse/SI-TI alusandmete, pika lõpuosaga kiirete lõigete ning järkjärguliste hääbumiste
valepositiivsete tulemuste jaoks. See salvestab eelanalüüsi tegeliku kestuse ning seal, kus `/usr/bin/time`
on saadaval, alamprotsessi CPU-aja ja maksimaalse RSS-i. Selle kvaliteedikontrollid on ainult struktuursete tulemuste
kontrollid. Tegeliku kirjeldusmudeli kvaliteedi staatus jääb `HOLD`, sest sellel testimisraamistikul puudub
volitatud lõpp-punkt või fikseeritud hindaja. Ka rahalise kokkuhoiu staatus jääb `HOLD`,
kui `--caption-cost-per-call-usd` ei anna selgesõnalist positiivset kutsepõhist
hinnangut; skript ei mõtle kumbagi tulemust kunagi välja.

Iga kaadri suurus on piiratud 4 MiB-ga, kõigi toorkaadrite kogumaht 23 MiB-ga ja
serialiseeritud vahendajavastuse maht 32 MiB-ga. Privaatne ajutine kataloog eemaldatakse
plokis `finally`. OmniRoute ei sisalda FFmpegi ega aktsepteeri kohandatud
käivitatava faili teed. Enne kaadrite kirjeldamist rakendab sild konservatiivset visuaalset
duplikaatide eemaldamist: iga JPEG teisendatakse 16×16 halltoonpuhvriks ja seda
võrreldakse ainult viimase säilitatud kaadriga. Kui taotletud kirjelduste limiit
on suurem kui üks kaader, annab kaadrite eraldamine
piiratud kandidaatide kogumi, mis on kuni kaks korda suurem sellest limiidist, kuid mitte kunagi üle 16 kaadri.
Taotletud ülempiiri rakendatakse alles pärast duplikaatide eemaldamist ning esimene ja viimane
valitud kandidaat säilitatakse lõplikul hõrendamisel, kui limiit on vähemalt
kaks. Versioonitud
`grayscale-16x16-mean-cells-v2` reegel kasutab suuremat kahest väärtusest: keskmine heleduse erinevus ja
nende pisipildi lahtrite osakaal, mille normaliseeritud erinevus on vähemalt 0.05.
Duplikaadilävi on konstant 0.04, mis on valitud prognoositavuse huvides ega ole
saadaval käitusaegse sättena. See täiendav
suure kontrastsusega signaal säilitab väikesed liikumised ja nähtava teksti muutused, mida
ainult keskmisel põhinev võrdlus võib varjata. Võrdleja või dekoodri vigade korral jäetakse
kaadrid alles, et säilitada katvus. Väljundi metaandmetes eristatakse eraldatud kandidaate, edukalt kasutatud
kaadreid ja eemaldatud visuaalseid duplikaate.

Selgesõnaliselt märgistatud videoosa võib taotleda ajatemplitega kontaktlehte.
Sild koostab kuni 4 veeru ja 16 kaadriga JPEG-ruudustiku. Iga 512-pikslise lahtri
suure kontrastsusega alumisele ribale lisatakse püsivalt selle lähteajatempel ning samad ajatemplid
säilivad tekstilistes metaandmetes edasiseks seostamiseks ja auditeerimiseks. Kogu
JPEG suurus on endiselt piiratud 32 MiB-ga. Kui `sharp` ei suuda ruudustikku dekodeerida või koostada,
kasutab sild varuvariandina üksikuid JPEG-kaadreid; kliendi katkestus levib siiski
läbi kontaktlehe koostamise toimingu.

Kasutuselevõtu tõendusmaterjal hoitakse tahtlikult lahus sünteetilisest koostamise
mikrojõudlustestist. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb
versioonitud skeemiga A/B-testiraamistiku tegelike OpenAI-ga ühilduvate nägemismudelite jaoks. See mõõdab
teenusepakkuja teatatud tokenite arvu, läbivat tegelikku kuluaega (sealhulgas kontaktlehe koostamist),
mudelikutsete arvu ja manifestis määratletud faktide säilimist. Mudelite toorvastuseid
aruandesse ei kirjutata; säilitatakse ainult SHA-256 räsid ja vastendatud faktide ID-d.
Testiraamistik ei tee ühtegi võrgupäringut ega tasulist mudelikutset, kui pole antud lippu `--execute-real` ning
seadistatud `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY`. Ilma
sellise selgesõnalise tegeliku käivituseta jääb selle masinloetavaks otsuseks `HOLD`; üksnes sünteetilised
andmemahu ja kutsete arvu mõõtmised ei ole kasutuselevõtu tõendusmaterjal.

Kutsujad võivad toetatud videoosale lisada valikulise `transcript.cues` massiivi,
kui neil on juba olemas ajaliselt joondatud tekst. Iga tekstilõik peab sisaldama välja `text`,
lõplike väärtustega ajavahemikku `start`/`end`, mis jääb tuvastatud kestuse piiresse, ja lubatud loendisse kuuluvat
välja `source` (`client`, `embedded` või `audio-bridge`); välja `confidence` vaikeväärtus on
`1` ning see peab jääma vahemikku `0` kuni `1`. Täpselt kattuvad tekstilõigud ühendatakse.
OmniRoute ei käivita nende metaandmete põhjal kunagi transkribeerimist: valideeritud tekstilõigud
kopeeritakse kirjeldustulemusse koos allika, usaldusväärsuse hinnangu ja ajavahemikuga ning
esitatakse ebausaldusväärsete vaatlustena koos kaadrikirjeldustega. Vigane,
lubatud vahemikust väljas või päritoluteabeta tekst lükatakse tagasi, mitte ei segata
kirjeldusvoogu. Mõlemad päringu keha transkriptsioonikanalid normaliseerivad esitatud
päritoluks `client`, sealhulgas enda väidetud siltide `embedded` või `audio-bridge`
korral. Ainult serveri hallatav adapter saab määrata need usaldatud sildid
üksnes koodis kasutatava argumendi `trustedSource` kaudu; päringu JSON-väli ei saa
selle argumendini jõuda. Transkriptsiooni tekst jääb ebausaldusväärseks meediast tuletatud sisuks
olenemata selle päritolust ega tohi kunagi määrata autoriseerimist.

Edasijõudnud kutsuja võib esitada sama video jaoks `audioTranscript` raja;
seda käsitletakse kliendi esitatud tekstina, mitte serveripoolse transkribeerimise tõendina.
Ühenduskiht töötleb visuaalseid ja helilisi vaatlusi
ühe tähtaja ja katkestussignaali alusel, järjestab need ühisel ajateljel, ühendab
täpsed duplikaadid ning tagastab osalise tulemuse, kui õnnestub ainult üks haru.
Vigane `audioTranscript` viib kogu video töötlemise nurjumise asemel sellise osalise tulemuseni —
visuaalne kirjeldus säilitatakse ning heliharu salvestab puhastatud veakoodi.
Harupõhine kättesaadavus, osalise tulemuse lipp
ja puhastatud veakoodid säilitatakse kirjeldustulemuses,
kaitsemeetmete metaandmetes (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulemuste vahemälu metaandmetes ja silla
ühendamisloendurites. Video Bridge'i vaiketöötlus ei käivita kõne tekstiks teisendamist
ega laadi alla teist meediakoopiat; ilma selle selgesõnaliselt esitatud rajata jääb see
ainult videot töötlevaks.

**Transkripti säilitamine (#12150 P1).** See rakendub automaatselt alati, kui
Video Bridge (mis ise nõuab eraldi lubamist) renderdab transkripti lõigu — eraldi
säilitamislippu ei ole. Kui päring renderdab mis tahes transkripti lõigu (kutsuja deklareeritud
`transcript` või ühendatud `audioTranscript`), märgib kaitsemehhanism selle
`videoBridgeObserved` ning loob videokirjelduse redigeeritud varikoopia —
identse renderduse, kus iga lõigu vabatekstiline sisu on asendatud väärtusega
`[redacted-video-transcript]`. See luuakse struktureeritud lõiguvälja asendamisega
enne stringi koostamist (mitte kunagi lamendatud teksti parsimisega, nii et ükski
lõigu sisu — ei pahatahtlik ega tavaline, sealhulgas sisu, mis sisaldab märki `]`, näiteks
`[inaudible]`/`[music]` — ei saa säilida). Püsivalt salvestatava kutselogi päringukehas asendatakse
iga videost tuletatud tekstiosa selle redigeeritud varikoopiaga, kasutades vastendamiseks sisu
võrdsust; ankur `fullText` loetakse uuesti lõplikust kutse-eelse kaitsemehhanismi
andmesisust, nii et vastendamine õnnestub ka pärast seda, kui ahela hilisemad kaitsemehhanismid (isikuandmete ja
autentimisandmete maskeerijad, prioriteetidega 10/95) kirjutavad kirjelduse teksti kohapeal ümber ning
süsteemiviiba, üleandmise ja mälu lisamine kujundab sõnumimassiivi ümber.
Ülesvoolu mudelile saadetav keha jääb muutmata. Vaadeldud päring ei lisa ka
midagi püsimällu Memory (vahele jäetakse nii päringust kui ka vastusest tuletatud eraldamine),
seega ei saa mudeli enda vastus transkripti teksti Memorysse korrata.

**Video toorväljad (#12430).** Kui sild on lubatud ja natiivse video tugi on teadmata või puudub, aktiveerivad määratud väljad `transcript`/`audioTranscript` samuti oleku `videoBridgeObserved`, isegi pärast kirjelduse nurjumist või piiri `maxVideos` saavutamist. `null` ja tühjad stringid lähevad arvesse; puuduvad väljad ja videoga mitteseotud metaandmed mitte. Säilitatavates koopiates redigeeritakse need väljad või jäetakse päring välja ning vahemäludest ja Memoryst minnakse mööda.

Neil varuteedel muudetakse kutsuja kehtivad lõigud toetatud `text`/`input_text`
osadeks, mitte ebastandardseteks teenusepakkuja väljadeks. Mõlemad päringuga antud rajad
jäävad ebausaldusväärseteks `client`-vaatlusteks koos selgesõnalise hoiatusega, et videot
ei kirjeldatud ja ajatempleid ei kontrollitud meedia suhtes. Olemasolevad
256 lõigu / 64 KiB kogupiirangud ja lõigupõhised piirangud kehtivad kahe raja peale kokku;
ajatemplid peavad mahtuma vahendaja 600-sekundilise ülempiiri ja mis tahes antud fookusvahemiku
sisse. Vigased rajad jäetakse kõrvale, mitte ei edastata suvalise tekstina; teist kehtivat
rada võib siiski kasutada, kui nende kombineeritud piirangut ei ületata. Nullväärtusega või tühjad
väljad teksti ei lisa. See varulahendus ei lisa meedia hankimist ega transkribeerimist.
Transkripti laiendusväljad eemaldatakse varulahenduse videokandjast ja selle
`video_url`/`source` objektidest. OpenAI edastusvormingu lubatud väljade loend jääb rangeks; teadmata natiivse toega
videokandjad jäävad kättesaadavaks ning teadaolevalt ainult teksti toetavad sihtmärgid säilitavad ohutud markerid.
Struktureeritud redigeeritud varikoopiad kaitsevad lisatud transkripti teksti, samal ajal kui
kutsujale kuuluv algne päring jääb muutmata. Natiivse toega sihtmärgid ja
keelatud sillad säilitavad senise möödaviigukäitumise.

Täiendavad säilitatavad koopiad kasutavad sama vaadeldud päringu signaali. Toores
kaitsemehhanismieelne kliendipäringu hetktõmmis, mälus olev ootel päring ja varakult
tagasilükatud päringu logi asendavad videokomponentide transkriptiväljad struktuurselt;
toruetappide ja konteksti üleandmise sünteesitud stringviibad redigeeritakse
päringukeha püsisalvestuse sihtkohas. Püsivalt salvestatav marker `video_content_removed`
paneb jätkamise `previous_response_id` kaudu tõrke korral turvaliselt peatuma, selle asemel et taastada
tahtlikult kõrvaldatud teksti. Kui vaadeldud päring kaotab enne logimist oma
osapõhise redigeeritud varikoopia või kui kasvõi üks mitmest video varikoopiast
ei vasta pärast päringu hilisemaid muudatusi enam sisule, jäetakse säilitatav päringukeha
tervikuna välja, selle asemel et säilitada osaliselt redigeeritud transkripti.

Vaadeldud päringu korral võib mudeli vastus tsiteerida transkripti mis tahes osa
ilma struktureeritud lõigupiirita. Seetõttu asendatakse selle püsivalt salvestatav kutselogi
`responseBody` väljajätumarkeriga; üksikasjalikku
torujuhtme artefakti (mis võib sisaldada ülesvoolu- ja kliendikehasid ning vootükke)
ei säilitata. Semantilise vahemälu, idempotentsusvahemälu ja arutluse taasesitusvahemälu puhul jäetakse selle päringu
lugemis- ja kirjutustoimingud vahele. Teenusepakkujale saadetav päring ja kliendile nähtav
vastus jäävad muutmata. Varajased ühenduse elushoidmise baidid eemaldatakse ajutisest
puhvrist, kui üksikasjalik artefakt jäetakse välja. Kiro vigase EventStreami
hoiatus teatab ainult andmesisu baitide arvu, mitte kunagi selle sisu ega JSON-i
parseri toorest veateadet.
See ei tähenda, et kõiki asjassepuutumatuid teenusepakkujate või pistikprogrammide diagnostikaandmeid oleks
auditeeritud; säilituskohtade laiem ülevaatus on jälgitav kirjes #11658.

Sisemise `/api/modality-bridge/video/drilldown` elutsükkel on eraldi,
tagasisideliidese ja tõendiga autenditud vahemälutaristu. Iga toiming nõuab lisaks
kanoonilist läbipaistmatut printsipaali ID-d. Enne tootmiskeskkonna kutsuja lubamist peab see
tuletama selle ID autenditud rentnikust ega tohi kunagi edastada
kliendi valitud väärtust. Vahemäluvõtmed seovad selle printsipaali kanooniliste seansi- ja
videoviite ID-dega, salvestavad ainult neist SHA-256 abil tuletatud võtmed ning piiravad nii lugemise
kui ka kustutamise sama printsipaaliga. Vahemälu salvestab kirje kohta kuni 16 tuletatud JPEG-kaadrit,
aegub need kümne minuti pärast ning toetab piiratud
`start`/`end` lugemisi või seansi selgesõnalist kustutamist.

Iga printsipaal on piiratud 16 kirje ja 64 MiB kanooniliste JPEG-andmetega. Need
piirangud on sõltumatud globaalsest 64 kirje / 256 MiB ülempiirist: printsipaali kvoodipiirangu
surve eemaldab ainult selle printsipaali kõige kauem kasutamata kirjed, enne kui kaalutakse globaalset
LRU-põhist eemaldamist. Aegunud kirjed eemaldatakse vahemälu kasutamisel nii printsipaali- kui ka
globaalsest arvestusest, samas kui tühistamine ja valideerimise nurjumine ei
kinnista osalist asendust.

Vahemälu lükkab tagasi mittekanoonilise Base64, liigse täite, mitte-JPEG-meedia, vigased või
kärbitud JPEG-id ning JPEG-id, mis tekitavad hoiatuse piiratud ressursikasutusega kogu pilti hõlmava `sharp`
dekodeerimise ajal. See kodeerib iga vastuvõetud pildi uuesti kanooniliseks JPEG-iks, tuletab laiuse ja kõrguse
dekodeeritud baitidest, selle asemel et usaldada kutsuja välju, ning eemaldab kõik lõppu lisatud
polüglottbaidid, mitte ei säilita neid. Mõlema kvoodi arvestusse läheb ainult piiratud suurusega kanooniline tihendatud puhver.
JSON-i edastusmahu piirang sisaldab Base64 lisamahtu 32 MiB
dekodeeritud sisendi ülempiiri jaoks. Iga
salvestatud tuletis talletab oma valideeritud JPEG-vormingu ja eraldusvõime, diskreetimispoliitika,
tuletise versiooni, loomise aja, serveris arvutatud sisuräsi ning räsitud viite vanemobjektile
koos usaldatud kutsuja antud vanemobjekti sisuräsiga. Tühistamist kontrollitakse
asünkroonsete dekodeerimis- ja räsimisfaaside vahel enne atomaarset vahemällu kinnitamist.

See arendusetapp ei ühenda veel tootmiskeskkonna genereerijat marsruudiga ega
paku mitme eraldusvõimega variantide valikut. Läbipaistev Video Bridge'i päringu
töötlustee ei põhjusta seetõttu lisatööd, samas kui rentnikuga seotud turbesubjekti tuletamine ja
kogu FU-08 mitme eraldusvõime elutsükkel jäävad selgelt järeltegevusteks, mitte
ei ole dokumenteeritud valmis funktsionaalsusena.

Kaadritele koostatakse kirjeldused järjestikku, kasutades seadistatud Video mudelit. Tühi
Video ülekirjutus pärib Visioni seadistuse; kui mõlemad on tühjad, valib Visioni
automaatruuter tegelikult kasutatava nägemisvõimekusega mudeli. Edukad kirjeldused
asendavad algse osa stabiilse `[Video description:` prefiksiga, mis ühtlasi
märgib teksti ebausaldusväärseks meediast tuletatud vaatluseks ja käsib järgmistel
mudelitel mitte järgida meedias leiduvaid juhiseid. Kaadrikirjelduste vahemäluvõtmed
sisaldavad JPEG-baite, viipa, ajatemplit ja tegelikult kasutatud mudelit; vahemällu salvestatakse ainult edukad
kirjeldused. Vahemälukirjed säilitavad tegeliku eduka genereerijamudeli,
sealhulgas varumudeli; sild raporteerib `mixed`, kui eri kaadrid
genereeriti eri mudelitega. Vahemälutabamus taaskasutab selle genereerija identiteeti,
selle asemel et märgistada see ümber taotletud marsruutimisplaaniks. Kogu video tulemuse
vahemäluvõti põhineb igal väljundit muutval sisendil — viibal, tegelikult kasutataval
mudelil, diskreetimispoliitikal, kaadrite arvul, semantilise analüüsi režiimil, normaliseeritud fookusvihje SHA-256
sõrmejäljel, fookusaknal, `transcript`,
`audioTranscript` ja kontaktlehe lipul — seega põhjustab ükskõik millise neist
muutmine vahemälumöödalasu, mitte kunagi aegunud tulemuse taaskasutamist. Visuaalse duplikaadieemalduse poliitika
versioon, lävend ja piiratud kandidaatkaadrite arv sisalduvad samuti selgesõnaliselt
tulemuse vahemäluvõtmes ja metaandmetes; poliitika muutmine ei saa seetõttu taaskasutada aegunud
kogu video kirjeldust. Tulemuste vahemälu v4 metaandmed säilitavad režiimi ja
sõrmejälje, mitte kunagi kasutaja ülesande algteksti. Kaitsemehhanismi metaandmed raporteerivad nii
taotletud kui ka tegelikult kasutatud analüüsirežiimi; taotletud `focused`-režiim ilma
kasutatava kasutajatekstita raporteeritakse tegelikult `full`-režiimina.

Kaitsemehhanism eraldab iga toetatud videoosa, kuid kirjeldab kõige rohkem
`modalityBridgeVideoMaxVideos` videot. Sihtmärgi puhul, mille kohta on tõendatud, et
`supportsVideo === false`, muutuvad ebaõnnestunud ja piirangut ületavad videod selgesõnalisteks turvalisteks
tekstimarkeriteks, nii et töötlemata videot ei jää alles. Kui võimekus on teadmata, säilitavad need osad
oma videokandja; iga varutranskript järgib eespool kirjeldatud piiratud tekstiks
teisendamist. Sihtmärgid, mille puhul `supportsVideo === true`, jätavad silla vahele.
Kliendipäringu katkestussignaal levib läbi allalaadimise, vahendaja järjekorra,
alamprotsesside ja kirjelduskutsete; katkestused peatavad töö videote vahel ega lase tõrke korral kunagi
töötlemata meediat läbi.

Käitusaegsed seaded salvestatakse andmebaasi ja valideeritakse Zodiga:

| Võti                                | Vaikeväärtus | Vahemik / käitumine                                                                                                 |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Valikuline käitusaegne funktsioon, vajab eraldi lubamist                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` säilitab üldised kirjeldused; `focused` kasutab piiratud mahuga ebausaldusväärset viimase kasutaja konteksti |
| `modalityBridgeVideoModel`          | `""`         | Pärib Vision Bridge'i mudeli                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; detektori tõrke korral kasutatakse `uniform`         |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                      |

Varem salvestatud Video ajalõpu väärtused, mis ületavad 120 sekundit, piiratakse
vahendaja tähtajaga; uute seadete salvestamine üle selle piiri lükatakse tagasi.
`GET /api/modality-bridge/video/runtime` nõuab enne autentimist või käituskeskkonna kontrollimist usaldatud templiga kinnitatud
tagasisilmuse lokaalsust ning seejärel haldusautentimist.
See tagastab ainult `available`, puhastatud FFmpeg/ffprobe'i versioonid ja fikseeritud
põhjuse, kui käituskeskkond pole saadaval. Sisemine eraldamise lõpp-punkt ei ole
avalik üleslaadimise API: järjekorra täitumine tagastab `503` koos `Retry-After`-iga, kutsuja
ühenduse katkemine tagastab `499` ja vahendaja fikseeritud tähtaja ületamine tagastab `504`. Teisendatud vastused lisavad
`video->text;model=<visionModel>;parts=<videos>` kesksesse
`x-omniroute-modality-bridge` päisesse, eemaldamata Visioni või Audio segmente.

### Isikuandmete maskeerija (`piiMasker.ts`)

Töötab **mõlemas** etapis.

- **`preCall`** kloonib andmesisu, läbib väljad `system`, `messages`, `input` ja
  `prompt` (sealhulgas lihtsad stringelemendid) ning rakendab stringtüüpi väljadele
  `content`/`text` funktsiooni `processPII()` (asukohast
  `@/shared/utils/inputSanitizer`). Kui
  `PII_REDACTION_ENABLED=true`, peidetakse tuvastatud isikuandmed väljaminevas
  andmesisus. See ei sõltu muutujast `INPUT_SANITIZER_MODE` (mis juhib ainult
  viibasüsti reeglistikku). Kui peitmine on välja lülitatud, salvestab kutse tuvastuste
  arvu sisu ümber kirjutamata.
- **`postCall`** teeb vastusest süvakoopia, käivitab funktsiooni `sanitizePIIResponse()` ning
  Responses API struktuurile vastava maskeerija (`maskResponsesOutput` — hõlmab välju
  `output_text` ja `output[].content[].text`). Kui midagi peidetakse, asendab
  muudetud vastus algse vastuse.

Kaitsemehhanism ei blokeeri kunagi; see ainult lisab märkmeid (`meta.detections`,
`meta.redacted`) või kirjutab sisu ümber.

#### Tüübipõhine valik, kohandatud mustrid ja tuvastusloendurid

**Töölaud → Seaded → Turvalisus → Isikuandmete maskeerimine** määrab, _mida_ maskeeritakse. See
ei lülita maskeerimist sisse: seda juhivad endiselt `PII_REDACTION_ENABLED` (päring) ja
`PII_RESPONSE_SANITIZATION` (vastus + SSE), mis mõlemad on vaikimisi välja lülitatud.

- **Tüübipõhine valik** — sisseehitatud ID-d on loetletud failis
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Määramata väärtus tähendab kõiki
  tüüpe (käitumine enne selle seade lisamist). Päringumootori muster
  `ssn_us` vastendatakse tüübile `ssn`. Mallid (Minimaalne, Standardne, Finants,
  Brasiilia, USA, Täielik) täidavad ainult kasutajaliidese märkeruudud.
- **Kohandatud mustrid** — kuni 20 regulaaravaldis- või metamärgimustrit (`*` = kuni 64
  mitte-tühimärki, `?` = üks). Vasted asendatakse väärtusega `[CUSTOM_REDACTED]`.
  Iga muster läbib funktsiooni `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): kuni 500 märki, lubatud lipud on ainult
  `g i m s u`, muster peab kompileeruma, läbima `safe-regex` kontrolli (katastroofiline
  tagasipöördumine) ega tohi vastendada tühja stringi või peitmise kohatäidet.
  Kontrolli mitteläbiv muster lükatakse salvestamisel ja testimisel tagasi ning salvestatud rida,
  mis kontrolli ei läbi, jäetakse käitusajal kompileerimise asemel vahele. Kohandatud mustreid
  rakendatakse ainult siis, kui maskeerimine on sisse lülitatud.
- **Tuvastusloendurid** — tüübipõhised loendurid (mitte kunagi vastendatud väärtused), mida hoitakse
  mälus ja lähtestatakse taaskäivitamisel (`src/lib/pii/piiDetectionStats.ts`). Need
  suurenevad ainult siis, kui maskeerimine on sisse lülitatud.

Seaded asuvad tabelis `key_value` (nimeruum `pii_settings`,
`src/lib/db/piiSettings.ts`) ja neid loetakse 1 s kehtivusajaga vahemälu kaudu. API:

| Meetod | Tee                      | Otstarve                                                           |
| ------ | ------------------------ | ------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Lippude olek, `enabledTypes`, `customPatterns`, tuvastusloendurid  |
| `PUT`  | `/api/settings/pii`      | Asendab `enabledTypes` (`null` = kõik) ja/või `customPatterns`     |
| `POST` | `/api/settings/pii/test` | Ühe mustri proovikäivitus kuni 8 KB näidisel; midagi ei salvestata |

Kõik kolm nõuavad haldusautentimist ja valideerivad päringu keha Zodi abil
(`src/shared/validation/schemas/piiSettings.ts`).

### Viibasüst (`promptInjection.ts`)

Tuvastab kasutaja sisestatud sisus ründelisi struktuure ja jõustab
seadistatud reeglistiku. Käitumist juhivad keskkonnamuutujad ja konstruktori
suvandid:

| Seade           | Keskkonnamuutuja                                                                                      | Vaikeväärtus | Mõju                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Väärtuse `false` korral lõpetab kaitsemehhanism kohe töö.                                                                                                                                                                        |
| Režiim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Viibasüsti reeglistik: `block`, `warn` või `log`. (Tagasiühilduvuse huvides aktsepteeritakse väärtust `redact`, kuid see **ei** eemalda viibasüsti teksti; päringu isikuandmete ümberkirjutamist juhib `PII_REDACTION_ENABLED`.) |
| Blokeerimislävi | Suvand `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Blokeerimiseks vajalik minimaalne raskusaste. Keskmise raskusastme korral vaikimisi ainult jälgitakse.                                                                                                                           |

**Režiimide prioriteetsus** (`getMode`): kutsuja `options.mode` →
`INJECTION_GUARD_MODE` **andmebaasi funktsioonilipu ülekirjutus** (Töölaud → Seaded →
Funktsioonilipud) → keskkonnamuutuja `INJECTION_GUARD_MODE` → keskkonnamuutuja `INPUT_SANITIZER_MODE` →
`warn`. Seega on töölaual määratud ülekirjutus keskkonnamuutujate suhtes ülimuslik ning funktsioonilippude
kasutajaliides juhib töötavat kaitsemehhanismi reaalajas (ilma taaskäivituseta). Andmebaasist lugemine on tõrkekindel:
vea korral kasutab kaitsemehhanism keskkonnamuutujatel põhinevat käitumist ning kui
ülekirjutust pole määratud, on käitumine identne ainult keskkonnamuutujatel põhineva valikuga.

Tuvastusallikad:

1. `sanitizeRequest()` asukohast `@/shared/utils/inputSanitizer` (ühine detektorite
   kogum, mida kasutatakse ka mujal töötlusahelas).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlemad raskusastmega `high`).
3. Valikulised `customPatterns`, mis antakse edasi konstruktori suvanditega (stringid, regulaaravaldised
   või `{ name, pattern, severity }` kirjed).

Kui `mode === "block"` **ja** vähemalt üks tuvastus vastab raskusastme
lävendile, tagastab `preCall` väärtuse `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režiimides `warn`/`log` kaitsemehhanism logib, kuid
lubab väljakutse. Ühine abifunktsioon `evaluatePromptInjection()` eksporditakse samuti
kutsujatele, kes peavad hindama viipasid registrit läbimata.

**Skannimise piir (v3.8.20):** tuvastaja kontrollib ühendatud viibatekstist ainult **esimest 16 KB** —
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failis
`src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui ka
`evaluatePromptInjection()` rakendavad enne mustrite tsükli käivitamist
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Süstimisjuhised asuvad sisendi alguse lähedal, seega
piirab see sadade kilobaitide suuruste andmekoormate puhul regulaaravaldiste CPU-kasutust ja prügikoristuskoormust,
nõrgendamata tuvastust (vrd
#3932, #4041).

### Autentimisandmete maskeerija (`credentialMasker.ts`)

Töötab **mõlemas** etapis, vaikeahelas viimasena (prioriteet `95`). Maskeerib
tuntud API-võtmete / salajaste tokenite mustrid väljaminevas andmekoormas (sõnumi
sisu, tööriistakutsete argumendid, tööriistade tulemused) **ja** teenusepakkuja vastuses, et
viibale kleebitud (või tööriista tulemuses tagasi kajastatud) autentimisandmed ei lekiks
ülesvoolu teenusepakkujale ega tagasi kliendile.

- **Ainult selgesõnalisel lubamisel**, sama tava nagu isikut tuvastavate andmete maskeerimisel (seotud range reegliga #20):
  keelatud, välja arvatud juhul, kui `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kui see on välja lülitatud, ei tee kaitsemehhanism midagi —
  see ei blokeeri ega kirjuta kunagi ümber.
- `redactCredentials()` läbib kogu andmekoorma/vastuse puu (`walkValue()`,
  kaitstud prototüübi saastamise eest, tsüklite suhtes turvaline tänu `WeakSet`-ile) ja asendab vasted
  kohatäitega `[REDACTED:<type>]`, kloonides ainult tegelikult
  muutunud harud.
- `CREDENTIAL_PATTERNS` hõlmab LLM-teenusepakkujate võtmeid (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-tokeneid (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksevõtmeid (Stripe, Square), pilveteenuste
  võtmeid (AWS-i pääsuvõti, Twilio, SendGrid, Mailgun), privaatvõtmeid / JWT-sid,
  autentimisandmeid sisaldavaid ühendusstringe (`mongodb://user:pass@...` jne) ning
  üldist päiseväärtuse mustrit päistele `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Päisekujulised võtmed (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskeeritakse struktuurselt (ainult väärtus, säilitades skeemi prefiksi, näiteks
  `Bearer `/`Basic `), mitte üldise tekstiregulaaravaldise abil.
- Kaitsemehhanism ei blokeeri kunagi; see ainult kirjutab ümber (`modifiedPayload` /
  `modifiedResponse`) ja lisab metaandmeid (`meta.credentialsRedacted`, `meta.count`).

Regressioonikaitse: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela täitmise
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse preCall poolt päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse postCall poolt vastuse ümberkirjutamiseks
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

Kaitsemehhanism annab märku, et muudatusi pole, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas edasi liikuvate andmete väärtuse järgnevate kaitsemehhanismide jaoks.
`signal?: AbortSignal` edastab kutsuja elutsükli kaitsemehhanismidele. Päringu katkestamine on tahtlik tõrke korral läbilaskmise erand: meediasillad lõpetavad töö ja vabastavad ressursid, taastamata töötlemata meediat sihtmärgile, mis seda teadaolevalt ei toeta.

## Register (`registry.ts`)

Ainueksemplar `guardrailRegistry` pakub järgmist:

- `register(guardrail)` — lisab kaitsemehhanismi (või asendab selle normaliseeritud nime alusel) ja
  sordib need uuesti välja `priority` kasvavas järjekorras.
- `clear()` / `list()` — halduse abimeetodid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed kaitsemehhanismid, edastab
  päringu sisu välja `modifiedPayload` kaudu ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama töövoog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikemehhanismid uuesti, et tagada testide puhas isoleeritus.

Mõlemad käivitusmeetodid tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on `GuardrailExecutionResult`-kirjete massiiv, mis sisaldab
iga kaitsemehhanismi kohta välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud täitmise jälgimiseks.

### Kaitsemehhanismide keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi kaitsemehhanismide nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Kanaleid on viis, neid loetakse järgmises järjekorras ja ühendatakse üheks loendiks
(duplikaatide eemaldamisel jääb alles esimene esinemine):

1. `apiKeyInfo.disabledGuardrails`
2. Päringu keha `disabledGuardrails` (tipptasemel)
3. Päringu keha `metadata.disabledGuardrails` (ainult siis, kui `metadata` on objekt)
4. Päis `x-omniroute-disabled-guardrails`
5. Pärandpäis `x-disabled-guardrails`

Kõik viis kanalit ühendatakse, sealhulgas mõlemad päised: nii
`x-omniroute-disabled-guardrails` kui ka `x-disabled-guardrails` saatmisel jäetakse vahele
nende loendite ühendisse kuuluvad kaitsemehhanismid ning tühi uuem päis ei varja enam pärandpäist
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), parandatud muudatuses
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Väärtused võivad olla stringide massiivid või komadega eraldatud string; nimede algusest ja lõpust eemaldatakse tühimärgid
ning nimed normaliseeritakse väiketähtedega sidekriipsvormingusse (`pii_masker` → `pii-masker`), tühjad
kirjed aga eemaldatakse. Tulemus edastatakse välja `context.disabledGuardrails`
kaudu registrile, mis jätab vastavad kaitsemehhanismid vahele (`skipped: true` väljal `results`).

Keelamisloend mõjutab ainult **registrit**. Viibasüsti `block`-režiim on
kohustuslik turvapiir: süstikaitse vahekiht
(`src/middleware/promptInjectionGuard.ts`) kutsub välja `evaluatePromptInjection()`
ilma ühegi kutsuja juhitava keelamisloendita (varem tehtud tarbetu
`resolveDisabledGuardrails({ body })` väljakutse eemaldati muudatuses
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), seega lükatakse päring,
mis keelab `prompt-injection`, `block`-režiimis endiselt tagasi. See on
tahtlik. Keelamiskanaleid juhib kutsuja (päringu keha,
metaandmed, päised) ning kutsuja ei tohi saada välja lülitada turvameedet,
mille operaator on seadistanud
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Päiste
ühendamine, mida käsitleb [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412),
muudab ainult seda, millised registri kaitsemehhanismid vahele jäetakse; see ei võimalda kliendil
vahekihist mööda minna. Kohustuslikke võtme- ja rühmapõhiseid kaitsemehhanismide reegleid
käsitletakse v4 RFC-s [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Vt [Katvus ja piirangud](#coverage-and-limits).

## Täitmisjärjekord

Iga päringu puhul, mis läbib faile `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` (vestluse marsruudid, mis on loetletud jaotises
[Katvus ja piirangud](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` koostab API võtme, päringu keha
   ja päiste põhjal vahelejäetavate kaitsemeetmete loendi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsemeetmed kasvavas
   prioriteedijärjekorras:
   - Keelatud kaitsemeetmed märgitakse olekuga `skipped`.
   - Iga kaitsemeetme `preCall` võib andmesisu ümber kirjutada välja `modifiedPayload` kaudu.
   - Esimene `block: true` katkestab ahela ja töötleja tagastab
     kaitsemeetme tagasilükkamisvastuse.
3. (Võimalik, et ümberkirjutatud) andmesisu liigub edasi kombineeritud marsruutimisse ja ülesvoolu
   edastamisse.
4. **Ainult mittevoogedastuse korral:** pärast vastuse koostamist
   käivitab `guardrailRegistry.runPostCallHooks(...)` sama ahela
   vastusel. `block: true` hülgab siin ülesvoolu vastuse ja tagastab HTTP 400. Voogedastatavate vastuste puhul jäetakse see samm täielikult vahele.

Erindi viskavad kaitsemeetmed salvestatakse kujul `error: <message>` ja logitakse meetodiga
`logger.warn`, kuid ahel jätkub — tõrke korral lubatakse töötlemine teadlikult jätkuda.

## Katvus ja piirangud

Kaitsemeetmete register on ühendatud ainult vestluse töötlusahelaga. Need piirangud on
fikseeritud testides `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` ja
`tests/unit/guardrail-pipeline-characterization.test.ts`; käitumise muutumisel uuendage neid teste
teadlikult.

### Kus haagid käivituvad

| Haak / kontroll                                | Rakendub                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                              | Päringud, mida töötleb `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (ja `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` ning Telegrami vestluse puhverserver. Samuti töölaua testimise lõpp-punkt `/api/guardrails/test`. Kutse-eelne blokeerimine tagastab HTTP 400. |
| `runPostCallHooks`                             | Ainult **mittevoogedastatavad** vestlusvastused (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Voogedastatavad vastused selleni ei jõua.                                                                                                                                                                                                                                                                                                   |
| PII voogedastusel                              | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), mis lisatakse torusse failis `streamingPipeline.ts`, kui `PII_RESPONSE_SANITIZATION` on sisse lülitatud. See ei ole kaitsemeede, seega keelamiskanalid seda ei mõjuta.                                                                                                                                                                                                                |
| Sisestusründe kaitse vahevara (pärandlahendus) | Kõik viipa sisaldavad `/v1` marsruudid, sealhulgas vestluse marsruudid (vt [marsruutide katvus](#injection-guard-route-coverage--red-team-phase-8--block-d)). Ainult viibasüst.                                                                                                                                                                                                                                                                     |

### Mida ei kaeta

- **Meedia-, vektoresituste ja andmemarsruudid** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ei jõua kunagi registrini. Seal ei
  rakendata isikuandmete maskeerimist, autentimisandmete maskeerimist ega modaalsussilda. Nende ainus
  kontroll on pärandlahenduse sisestusründe kaitse vahevara.
- **Voogedastatavatele vastustele** ei rakendata kutsejärgseid kaitsemeetmeid: puuduvad kutsejärgsed `pii-masker` ja
  `credential-masker` ning kutsejärgne blokeerimine. Rakendub ainult voogedastuse PII
  teisendus (kui `PII_RESPONSE_SANITIZATION` on sisse lülitatud). Voogedastatavas vastuses
  tagasi väljastatud autentimisandmeid ei peideta.
- **Keelamiskanalid ja vahevara (tahtlik lahendus):** vahevara hindab
  viibasüsti omaenda `evaluatePromptInjection()` kutsega, edastamata
  ühtegi kutsuja juhitavat keelamisloendit. Režiim `block` on kohustuslik
  kaitsepiir, millest kutsuja juhitavate keelamistega ei saa mööda minna, sealhulgas vestluse marsruutidel
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Kaitsemeetme
  `prompt-injection` keelamine jätab vahele ainult registri kaitsemeetme.

### Mis näeb vastust enne kutsejärgset töötlust

Mittevoogedastuse töötlusharus on järjekord järgmine: mäluteabe eraldamine → sisseehitatud tööriistade
käivitamine → kutsejärgsed kaitsemeetmed → kutsejärgsest blokeerimisest tingitud väljumine → semantilisse vahemällu salvestamine.

- **Mälu eraldamine** ja **tööriistade käivitamine** näevad vastust enne, kui päringujärgsed
  kaitsemeetmed saavad seda ümber kirjutada või blokeerida. Alates muudatusest
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) töötleb mälu
  eraldamine eraldatud teksti funktsiooniga `sanitizePII`, kui
  `PII_RESPONSE_SANITIZATION` on sisse lülitatud (nii voogedastusega kui ka ilma), kuid
  vastus, mille päringujärgsed kaitsemeetmed hiljem blokeerivad, on siiski juba mälule ja
  tööriistadele edastatud.
- **Semantiline vahemälu** salvestab vastuse pärast päringujärgset kontrolli, seega salvestab see
  ümberkirjutatud vastuse ning blokeeritud vastust ei salvestata kunagi vahemällu. Vahemälukirjed on
  võtmetatud iga API-võtme alusel.

## Seadistus

Sisseehitatud kaitsemehhanismide loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                           | Mõju                                                                                                          |
| ------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                 | Tuvastamise täielikuks keelamiseks määra väärtuseks `false`.                                                  |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                 | Süstimise käsitlemise reegel: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süsteteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                 | Süstimiskaitse režiim; ühtlasi andmebaasi funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).      |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                 | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                 | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandpseudonüüm.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                       | Väärtuse `true` korral maskeeritakse päringu isikut tuvastavad andmed (süstimiskaitse režiimist sõltumatult). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (järgnevas töötluses) | Juhib vastusepoolse maskeerija käitumist.                                                                     |

Modality Bridge’i kaitsemehhanismid loevad käitusaegset seadistust andmebaasipõhisest seadete
hoidlast (`getSettings()`), mitte keskkonnamuutujatest. Visioni põhivõtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli pikkuse lugemise
varuvariandina; juhtpaneelilt kirjutamisel kasutatakse põhivõtmeid. Vaikeväärtused ja varuvariandi
lahendusloogika asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärandkonstandid
säilitatakse failis `src/shared/constants/visionBridgeDefaults.ts`.

Heli kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning ühiseid
`modalityBridgeCache*` seadeid. Heli puhul puudub pärandvõtmetele toetuv varuvariant, sest need
võtmed võeti kasutusele koos Modality Bridge’i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning ühiseid `modalityBridgeCache*` seadeid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käitussõltuvused
ning kaadrite kirjelduste genereerimine suurendab latentsust ja mudeli kasutuskulu.

## Kohandatud kaitsemeetmed

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

Sammud:

1. Loo `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakenda `preCall` ja/või `postCall`.
3. Registreeri kas importimise ajal (lisa funktsioonis `registerDefaultGuardrails`) või
   kutsu käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsemeetmed.
4. Lisa testid kataloogi `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasuta testide vahel `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Anna argumendiks `{ registerDefaults: false }`, et alustada tühja registriga ja
registreerida ainult testitavad kaitsemeetmed. Vision Bridge toetab sõltuvuste
süstimist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid sätete, võimekuste, STT-mudeli valiku, autentimisandmete
kontrollimise ja transkribeerimise jaoks. Seega saavad testid kontrollida mõlemat voogu ilma andmebaasi-
või võrguühenduseta.

## Vaata ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  viibasüstide tuvastamine ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sildühendust nõudvate mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Visioni/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — sõltumatu kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — täielik keskkonnamuutujate teatmik

## Süstikaitse marsruutide katvus ja ründetestimine (8. etapp · plokk D)

Süstikaitse (`createInjectionGuard` / `withInjectionGuard`) katab kõik marsruudid,
mis võtavad vastu kasutaja viipasid. See järgib muutujat `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereerimine      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ründetestimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeerib
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käivitab ründeteste (saladuse puudumisel jätab vahele).
`moderations` on kaasatud järjepidevuse huvides. Blokeerimisrežiim on kohustuslik turvapiir: `evaluatePromptInjection()`
eirab päringupõhist keelamisloendit, mille vahekiht sellele edastab, seega `disabledGuardrails`
**ei** vabasta marsruuti sellest kaitsest ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Öisel töövoolul (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käivitab käsu `promptfoo eval -c promptfooconfig.yaml`
  sättega `INJECTION_GUARD_MODE=block`. Iga ründejuhtumi puhul (nt „eira kõiki
  varasemaid juhiseid…“, DAN-stiilis piirangutest möödahiilimised) kontrollitakse, et vastus sisaldab
  `error.code === "SECURITY_001"`, st kaitse lükkas päringu tegelikult tagasi.
- **`garak` (soovituslik)** — käivitab garaki lippudega `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) vastu. Käivitub ainult
  teenusepakkuja saladuse (`PROMPTFOO_PROVIDER_KEY`) olemasolul; selle puudumisel jäetakse töö tõrketa vahele ning käsule lisatakse
  `|| true`, nii et tulemused raporteeritakse CI-d nurjamata.

Kaitse abifunktsioonide (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab kõiki viipasid sisaldavaid `/v1` marsruute; viibatekst eraldatakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
funktsiooniga `extractMessageContents()` failis `src/shared/utils/inputSanitizer.ts`.

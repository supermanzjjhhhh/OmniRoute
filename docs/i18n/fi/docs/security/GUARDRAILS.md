# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Ensisijainen lähde:** `src/lib/guardrails/`
> **Viimeksi päivitetty:** 2026-10-17 — v3.8.52 (lisätty [Kattavuus ja rajoitukset](#coverage-and-limits):
> mitkä reitit ja vastauspolut koukut kattavat, yhdistetyt käytöstäpoisto-otsakkeet (#16412), injektion
> estotila pakollisena rajana (#16413) ja se, mitkä osat näkevät vastauksen ennen jälkikutsua)

Suojakaiteet toteuttavat turvallisuus- ja käytäntövaatimuksia sekä sisällön muunnoksia
OmniRouten ja taustapalveluntarjoajien välisellä rajalla. Kukin suojakaide voi tarkastaa (ja
halutessaan hylätä, muuntaa tai annotoida) pyyntöjen sisältöjä (`preCall`) ja
taustapalvelujen vastauksia (`postCall`).

Järjestelmä on **virhetilanteessa salliva**: jos suojakaide heittää poikkeuksen suorituksen aikana, rekisteri
kirjaa virheen ja jatkaa seuraavaan suojakaiteeseen sen sijaan, että pyyntö
epäonnistuisi. Estäminen on nimenomainen päätös (`block: true`), ei koskaan vahinko.
Ainoa poikkeus on keskeytetty pyyntö: kun kutsujan `signal` on keskeytetty,
poikkeuksen heittävä suojakaide hylkää koukun suorituksen sen sijaan, että se ohitettaisiin.

Koukkuja **ei** suoriteta kaikilla reiteillä tai kaikille vastauksille. Lue
[Kattavuus ja rajoitukset](#coverage-and-limits), ennen kuin luotat suojakaiteeseen
turvallisuusmekanismina.

## Sisäänrakennetut suojakaiteet

Rekisteri lataa tuonnin yhteydessä automaattisesti kuusi suojakaidetta prioriteettijärjestyksessä
(katso `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(et)      | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pienemmät prioriteettinumerot suoritetaan **ensin**.

### Kuvasilta (`visionBridge.ts`) — Modaliteettisilta PR-1

GLM 5.3 -perusmallin ja `glm-5.3-{low,high,max}`-mallien rekisteri- ja määritysmetatiedoissa
on nimenomaisesti `supportsVision:false`. GLM 5.3 Flash -versiot
säilyvät natiivisti kuvia tukevina malleina. Claude Coden `/v1/messages`-reitti siirtyy
jaettuun `handleChat`-kutsua edeltävään suojakaideketjuun **ennen** Claude–OpenAI-
muunnosta; sisäkkäiset `Read`-työkalutulosten kuvat on kuvailtava tai käsiteltävä,
ennen kuin muunnos nostaa ne OpenAI-muotoiseksi `image_url`-sisällöksi (#17069).

Sieppaa kuvia sisältävät pyynnöt, jotka on suunnattu **malleille, jotka eivät tue kuvia**, ja joko
reitittää koko pyynnön uudelleen kuvia tukevalle mallille tai korvaa kuvaosat
määritettävän kuvamallin tuottamilla tekstikuvauksilla ennen
taustapalvelukutsua. Näin vain tekstiä tukevat palveluntarjoajat voivat käsitellä
multimodaalisia sisältöjä läpinäkyvästi.

Kulku:

1. Ohita, jos kohdemalli tukee jo kuvia (ellei se ole
   pakotetun siltakäsittelyn luettelossa `isVisionBridgeForcedModel`).
2. Poimi kuvaosat kutsulla `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), joka delegoi tehtävän **yhtenäiselle mediatunnistimelle**
   `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` — samalle
   ensisijaiselle lähteelle, jota myös yhdistelmien yhteensopivuussuodatin käyttää.
   Poiminta sallitaan vain rakenteille, jotka `replaceImageParts` osaa sijoittaa
   takaisin (poiminnan ja korvaamisen välinen sopimus): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` ja Responses-
   rajapinnan `input_image`. Myös Claude Coden
   `tool_result.content`-sisältöön ja Responses-työkalutuloksiin sisäkkäin sijoitetut vastaavat kuvat poimitaan ja
   korvataan alkuperäisissä poluissaan; pelkän ilmaisimen sisältävät rakenteet kuuluvat yhdistelmäsuodattimen
   käsiteltäviksi, eikä niitä poimita.
   Ohita, jos kuvia ei löydy.
3. Selvitä ajonaikainen konfiguraatio kutsulla `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`-
   asetusavaimet ovat etusijalla; vanhat `visionBridge*`-avaimet säilyvät **yhden syklin
   varavaihtoehtona** (palautusjakso). Ohita ennen mediasisällön läpikäyntiä, jos
   silta on poistettu käytöstä.
4. Tilan valitsin (`modalityBridgeVisionMode`, katso alla oleva taulukko) valitsee
   uudelleenreitityksen tai kuvailun. Uudelleenreititys palauttaa `modifiedPayload`-sisällön, jossa vain `model`
   on vaihdettu, sekä metatiedot `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvailupolku: rajoita kuvien määrä arvoon `maxImages`, muodosta tehtävän huomioiva kehote,
   tarkista kuvailuvälimuisti, kutsu kuvamallia **rinnakkain**
   (`Promise.allSettled`) ja lisää kuvien tilalle `[Image N]: <description>`-tekstiosat.
   Epäonnistunut kuvailu tuottaa arvon `null`: alkuperäinen kuva säilytetään,
   jos kohteen kuvatuki on tuntematon tai kohde tukee kuvia (#4012), mutta **varmistetusti vain tekstiä tukeva suora
   kohde** tai yhdistelmä, jossa yksikään malli ei tue kuvia, saa nimenomaisen
   `(unavailable — no vision-capable provider connected)`-paikkamerkkitekstin
   jokaiselle kuvailematta jääneelle kuvalle, myös osittaisten epäonnistumisten yhteydessä ja kuvailukutsujen
   enimmäismäärän ylittäville kuville (#17069). Nykyinen varamenettely yhdistelmän kaikkien kuvailujen
   epäonnistuessa säilyy käytössä (#8430).
6. Palauta `modifiedPayload` ja metatiedot (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilan valitsin (`modalityBridgeVisionMode`)

| Tila       | Oletus | Toiminta                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka, ennallaan (#6640/#7204): muut kuin yhdistelmä- tai `auto/`-mallit uudelleenreititetään parhaaseen kuvantunnistusmalliin, ellei alkuperäisellä mallilla jo ole käyttökelpoisia tunnistetietoja (jolloin kuvaillaan); yhdistelmäkohteille käytetään aina kuvailua.                                                                                      |
| `describe` |        | Kuvaile aina — uudelleenreitityslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                                                                                          |
| `reroute`  |        | Pakota uudelleenreititys: käyttökelpoisilla tunnistetiedoilla varustetun mallin säilyttävä suojaus ohitetaan. Uudelleenreitityksen **kohteen** tunnistetietosuojaus on silti voimassa — jos käyttökelpoista kuvantunnistuskohdetta ei ole, silta estää pyynnön selkeällä virheellä sen sijaan, että kuvailisi tai lähettäisi raakakuvia vain tekstiä tukevalle kohteelle. |

Pakotetut tilat ohittavat jatkokäsittelyn **ennen** automaattisen heuristiikan suorittamista; `auto`-toiminta
on tavutasolla identtinen PR-1:tä edeltäneen suojauksen kanssa.

#### API-avaimen käyttöoikeusrajaukset (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa yhteyksiä (`allowedConnections`), kiintiöpooleja
(`allowedQuotas`) tai malleja (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee
uudelleenreititykseen ja kuvailuun vain malleja, joita avain saa käyttää, ja yhteyksiä, joita avain saa
käyttää. Kuvailukutsu kulkee aina OmniRouten sisäisen takaisinkutsun kautta
`x-omniroute-self-loop-key-id`-otsakkeella, joten vastaanottava keskustelupyyntö
valvoo uudelleen kyseisen avaimen yhteys- ja mallikäytäntöjä. `enforceApiKeyPolicy()`
huomioi kyseisen otsakkeen vain yhdessä sisäisen takaisinkutsun bearer-tunnisteen kanssa, joten se voi vain
kaventaa käyttöoikeuksia, ja tunniste, jota ei löydy, hylätään.

Jos avaimelle ei ole sallittu yhtään kuvantunnistusmallia, **varmistetusti vain tekstiä tukeva
kohde** hylkää kuvapyynnön paikallisesti selkeällä HTTP 400 -virheellä sen sijaan, että
välittäisi kuvadataa taustapalvelulle, joka ei pysty käsittelemään sitä (#17069). Kohteilla, joiden
kuvantunnistuskyky on tuntematon tai natiivi, kuvailupolku säilyttää aiemman
virhetilanteessa sallivan toimintansa (metatieto `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta sekä avaimet, joilla ei ole näitä rajoituksia, toimivat täsmälleen
kuten ennenkin.

#### Tehtävän huomioiva kuvailukehote (`modalityBridgeVisionTaskAware`)

Oletus **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisää
**viimeisen käyttäjäviestin** tekstin (katkaistuna 500 merkkiin)
kuvailun peruskehotteeseen. Tämä ohjaa kuvausta käyttäjän varsinaisen kysymyksen
suuntaan (codex-vision-proxy-malli) ja pyytää kuvantunnistusmallia jäljentämään näkyvän
tekstin. Kun asetus on pois käytöstä — tai käyttäjän tekstiä ei ole — peruskehotetta käytetään muuttamattomana.

Kuvailun sisäisen takaisinkutsun oma OpenAI-yhteensopiva pyyntö (`callVisionModelSingle()`
tiedostossa `visionBridgeHelpers.ts`) pyytää aina asetusta `image_url.detail: "high"` —
ehdoitta, jokaiselle kutsujalle/palveluntarjoajalle, ilman riippuvuutta mistään asiakassignaalista.
Vähäisen yksityiskohtaisuuden näytteistys heikentää OCR-tarkkuutta juuri siinä tekstin jäljentämistehtävässä,
jota tämä kehote pyytää, joten kuvailukutsu pyytää aina korkeaa
yksityiskohtaisuutta riippumatta alkuperäisen saapuvan pyynnön käyttämästä tasosta. Tämä
vaikuttaa vain sisäisen kuvailupyynnön runkoon; se ei muuta tapaa, jolla
OmniRoute välittää kutsujan oman `image_url.detail`-arvon ensisijaisessa pyynnössä —
kyseinen oletus asetetaan erikseen ja vain tunnistetuille OpenCode-asiakkaille funktiossa
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Kuvailun sisäisen takaisinkutsun Anthropic-siirtomuotohaarassa ei ole `detail`-kenttää,
eikä kumpikaan oletus vaikuta siihen.

#### Kuvailutuloksen enimmäispituus (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletus | Vaihteluväli      |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` tai 100–50000 |

`0` (oletus) tarkoittaa **ei rajoitusta** — funktion
`callVisionModel()` palauttama kuvaus välitetään muuttamattomana, mikä säilyttää nykyisen
toiminnan. Mikä tahansa arvo välillä 100–50000 katkaisee kuvauksen ja lisää siihen
`…`-päätteen ennen kuin se liitetään takaisin muodossa `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` tiedostossa `src/lib/guardrails/visionBridge.ts`).
Suurenna arvoa paljon yksityiskohtia sisältävissä OCR-tehtävissä, joissa jatkokäsittelyn malli tarvitsee
koko jäljennetyn tekstin; pienennä sitä rajoittaaksesi tokenien käyttöä runsassanaisilla kuvantunnistusmalleilla.
Hallintapaneelin kenttä on kuvantunnistusvälilehden lisäasetuspaneelissa
(`modality-bridge-max-chars` tiedostossa `ModalityBridgeVisionTab.tsx`), ja se korottaa kaikki
arvot väliltä 1–99 alarajaan 100 mutta jättää eksplisiittisen arvon `0`
ennalleen — `0` on itsessään kelvollinen Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei pelkästään
asettamattoman arvon oletus.

#### Kuvailuvälimuisti (`modalityBridge/bridgeCache.ts`)

Muistissa toimiva LRU- ja TTL-välimuisti kuvailutuloksille, yhteinen koko prosessille.
Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, jossa käytetään
pituusetuliitteistä kehystystä (ei kenttien rajakohtien törmäyksiä). Mallikomponentti on
**määritetty** siltamalli, ei tosiasiassa vastannut malli —
`callVisionModel` voi käyttää sisäisesti varamallia, ja yrityskohtainen avainnus
pirstaloisi välimuistin. Epäonnistuneita kuvailuja ei koskaan tallenneta välimuistiin. Asetukset:

| Avain                           | Oletus | Vaihteluväli |
| ------------------------------- | ------ | ------------ |
| `modalityBridgeCacheEnabled`    | `true` | —            |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440       |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000      |

#### Etäkuvien normalisointi (sisäinen describe-kutsu / base64-haku)

Kun silta hakee **etäkuvan** itse — Anthropic-kuvailun
sisäisessä kutsussa ja claude-wire-format-muodon base64-muunnoksessa
(`ensureBase64ImagesForClaudeWire`), molemmissa funktion
`fetchRemoteImageAsDataUri()` kautta tiedostossa `visionBridgeHelpers.ts` — tuloksena saatu data-
URI käsitellään funktiolla `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) ennen sen sisällyttämistä näkömallille
lähetettävään pyyntöön. Ylisuuria kuvia pienennetään niin, että **pitkä sivu on 2048px** (sama
kokorajoitus, jota OpenAI/Anthropic jo käyttävät palvelinpuolella), mikä vähentää
lähetettävien tavujen määrää ja viivettä muuttamatta sitä, mitä näkömalli näkee. Koon muuttamiseen
käytetään `sharp`-pakettia, joka ladataan dynaamisella tuonnilla: jos sen natiivibinääriä
ei voida ladata jollakin alustalla, `normalizeDataUri()` **ei koskaan heitä poikkeusta** — se välittää
alkuperäiset tavut sellaisinaan, joten kuvailun/base64-muunnoksen
käsittelypolku toimii aina. Myös muut kuin kuvatavut (haku, joka ei palauttanut
dekoodattavaa kuvaa) välitetään muuttamattomina. Tämä normalisointi
rajoittuu kuviin, jotka silta hakee omaa sisäistä kutsuaan varten — sitä ei koskaan
sovelleta kutsujan sellaisenaan välitettävään raakasisältöön. Tämä noudattaa
periaatetta, jonka mukaan muokkaaminen edellyttää nimenomaista suostumusta (ehdoton sääntö #20).

#### Asetusskeema + migraatio

Uudet `modalityBridge*`-avaimet validoidaan Zodilla skeemassa `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, kolmen `modalityBridgeCache*`-avaimen joukko sekä
Audio Bridgen käyttämä `modalityBridgeAudio*`-ryhmä. Migraatio
`141_modality_bridge_settings.sql` kopioi olemassa olevat vanhat
`visionBridge*`-arvot vastaaviin uusiin avaimiin (idempotentisti, eikä koskaan korvaa
ylläpitäjän asettamaa `modalityBridge*`-arvoa); vanhat avaimet hyväksytään edelleen
luettaessa varavaihtoehtona yhden julkaisusyklin ajan.

#### Läpinäkyvyysotsake + tilastot

Kuvailumuunnetuissa vastauksissa on otsake
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(jonka muodostaa `buildModalityBridgeHeader()` tiedostossa `modalityBridge/bridgeStats.ts`
ja lisää `withModalityBridgeHeader()` tiedostossa `src/sse/handlers/chatHelpers.ts`).
Uudelleenreititetyt pyynnöt **eivät** saa otsaketta — sisältöä ei muutettu, ja mallin
vaihto näkyy jo vastauksen rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallintatason todennus, sama taso kuin päätepisteessä
`GET /api/settings`) palauttaa muistissa pidettävät modaliteettikohtaiset laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaliteeteille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää jakajanaan arvoa `latencySamples`, ei kaikkien yritysten
määrää; toiminto, jonka aikaa ei ole mitattu, ei tuota keinotekoista nollan millisekunnin
mittausnäytettä. `bridged` säilyy onnistuneiden muunnosten taaksepäin yhteensopivana
aliaksena; epäonnistuneet yritykset eivät kasvata sitä.
Laskurit nollautuvat prosessin käynnistyessä uudelleen suunnitellusti
(telemetriaa, ei kirjanpitoa).

#### Hallintapaneelin määritykset

Erillinen hallintapaneelisivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteella valittavat `Vision`-, `Audio`-
ja `Video`-välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehti tarjoaa käyttöönoton, tilan, mallin valinnan (mukaan lukien automaattisen
oletusvalinnan), tehtävätietoisen kehotuksen, edistyneet aikakatkaisu-/kuva-/kuvauspituus-/välimuisti-
rajoitukset, ajonaikaiset
laskurit sekä suojatun esimerkkipyynnön. Myös Audio-välilehti on käytössä: se tarjoaa
käyttöönoton, vain STT-malleja sisältävän mallivalitsimen automaattivalinnalla, aikakatkaisu-/äänileikkeen enimmäisrajoitukset, äänilaskurit
sekä `input_audio`-esimerkkitestin. Video-välilehti on toimiva: se ilmoittaa
FFmpeg/ffprobe-ympäristön ajonaikaisen tilan — yhden neljästä nimenomaisesta käyttöliittymätilasta (`unknown`, kun
tarkistus on kesken tai sitä ei voitu suorittaa loppuun, `restricted`, kun hallintapaneelin
isäntä ei ole loopback-osoitteessa ja tarkistus ohitetaan asiakaspuolella, `unavailable`, kun tarkistus on tehty
ja puuttuminen vahvistettu, tai `available` yhdessä FFmpeg/ffprobe-versioiden kanssa) — tallentaa
käyttöönotto-/malli-/kuvaruutu-/video-/aikakatkaisurajoitukset, rajaa mallivalitsimen näköä tukeviin
malleihin ja näyttää videolaskurit.

Aiempi Vision Bridge -kortti tekoälyasetuksissa on yhteensopivuuslinkki
uudelle sivulle; sillä ei enää ole lomakkeen toista kopiota. Myös mediapalveluntarjoajien näkymä
linkittää kuva tekstiksi- ja puhe tekstiksi -työnkulut vastaaviin Modality
Bridge -välilehtiin poistamatta olemassa olevaa puhe tekstiksi -kokeiluympäristöä.

**Sisäisen kutsun pääsynhallinnan ohitus:** kun kuvailukutsu reititetään OmniRouten
oman `/v1`-sisäisen silmukan kautta (epästandardi palveluntarjoajamalli), alipyyntö lähettää otsakkeen
`x-omniroute-admission-bypass: internal` ja todennetaan ratkaistulla
sisäisen silmukan tunnistetiedolla — paikallisella `sk_omniroute`-sentineliarvolla paikallisessa tilassa tai
ylläpitäjän määrittämällä `OMNIROUTE_API_KEY`- / `ROUTER_API_KEY`-ympäristöavaimella (#1350), jotta
`REQUIRE_API_KEY=true`-käyttöönotot voivat edelleen suorittaa kuvailukutsun. Ohitus
hyväksytään vain näillä täsmällisillä tunnistetiedoilla, joten ulkoiset asiakkaat eivät voi käyttää
otsaketta pääsynhallinnan ohittamiseen.

Vanhat oletusarvot ovat tiedostossa `src/shared/constants/visionBridgeDefaults.ts`;
uudet tilan, tehtävätietoisuuden ja välimuistin oletusarvot sekä asetusten ratkaisija ovat tiedostossa
`src/shared/constants/modalityBridgeDefaults.ts`. Suojamekanismi tarjoaa
konstruktorin `deps`-valinnan, jotta testit voivat injektoida valeversiot toteutuksista `getSettings` ja
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Sieppaa ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen, jonka ei
tiedetä hyväksyvän äänisyötettä. Se ei koskaan reititä keskustelupyyntöä uudelleen: ääniosat
litteroidaan olemassa olevan OpenAI-yhteensopivan multipart-päätepisteen kautta, ja
valittu keskustelumalli jatkaa tekstilitteroinneilla.

Kulku:

1. Selvitä `supportsAudio` funktion `getResolvedModelCapabilities()` kautta. Erikseen
   määritetyt tarjoajarekisterin metatiedot ovat ensisijaisia, sitten mallin staattiset metatiedot ja lopuksi synkronoitu
   `modalities_input`. Määritetty syöteluettelo, jossa ei ole arvoa `audio`, tuottaa arvon `false`; jos
   ominaisuudesta ei ole näyttöä, arvoksi jää `null`. Sekä `false` että `null` aktivoivat
   varovaisen sillan, kun taas `true` ohittaa sen.
2. Selvitä `modalityBridgeAudio*`-asetukset ja poimi jokaisesta viestistä korvattavissa olevat ylimmän tason
   ääniosat jaetun `detectMediaParts()`-tunnistimen
   avulla. Tuettuja siirtomuotoja ovat OpenAI-muodot `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Sisäkkäinen ääni tunnistetaan reititystä varten, mutta sitä ei
   poisteta korvauspolussa. Käsittelyn enimmäismäärän määrittää `modalityBridgeAudioMaxClips`;
   myöhemmät osat säilyvät muuttumattomina.
3. Noudata määritettyä `provider/model`-arvoa tai anna funktion `selectAudioBridgeModel()` käydä
   `AUDIO_TRANSCRIPTION_PROVIDERS` läpi vakaassa luettelojärjestyksessä ja valita ensimmäinen
   malli, jolla on käytettävissä oleva aktiivinen tarjoajan tunnistetieto.
4. `callAudioTranscription()` muuntaa base64-/data-URI-äänen multipart-muotoiseksi
   `file`-osaksi tai lataa etäisen `audio_url`-äänen vain julkisiin osoitteisiin kohdistuvan lähtevän liikenteen
   suojauksen kautta käyttäen DNS-kiinnitystä ja 25 MB:n kokorajaa. Sen jälkeen se lähettää tiedoston ja valitun
   mallin POST-pyynnöllä paikalliseen `/v1/audio/transcriptions`-takaisinkutsuun ja tunnistautuu
   funktion `resolveSelfLoopBearer()` avulla. Nykyinen litterointireitti hoitaa normaalin
   tunnistetietojen haun, jäähyajan ja nopeusrajoitusten käsittelyn sekä välityksen tarjoajalle.
5. Onnistuneet kutsut korvaavat osansa arvolla `[Audio N]: <transcript>`. Kutsut
   suoritetaan käyttämällä `Promise.allSettled`-menetelmää: yksittäinen epäonnistuminen säilyttää alkuperäisen
   ääniosan (#4012-sopimus). Jos kaikki kutsut epäonnistuvat ja kohteen ominaisuudeksi on varmistettu
   `supportsAudio === false`, osien arvoksi tulee
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-sopimus).
   Tuntemattoman kohteen (`null`) tapauksessa kaikkien kutsujen epäonnistuminen jättää sisällön muuttumattomaksi. Varmistetusti
   vain tekstiä tukeva kohde, jolla ei ole käytettävissä olevaa STT-tunnistetietoa, saa saman selkeän
   paikkamerkin ilman verkkokutsua.

Onnistuneet litteroinnit käyttävät prosessinlaajuista Modality Bridge -LRU/TTL-välimuistia.
Avain yhdistää ääniviitteen, vakaan `audio-transcription`-toimintotunnisteen
ja valitun STT-mallin; epäonnistumisia ei koskaan tallenneta välimuistiin. Äänen käsittely-yritykset päivittävät
jaettuja `bridged`-, `cacheHits`-, `failures`- ja `lastUsedAt`-laskureita.
Muunnetut vastaukset sisältävät otsakkeen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; muuttumattomat
pyynnöt eivät saa Audio Bridge -segmenttiä.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                         | Oletus  | Arvoalue                     |
| ----------------------------- | ------- | ---------------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                            |
| `modalityBridgeAudioModel`    | `""`    | Automaattinen tai STT-tunnus |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000                  |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                         |

Jaettua välimuistia ohjataan edelleen asetuksilla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Käsittelee Chat Completions -rajapinnan `messages`-kentän ja Responses
API -rajapinnan `input`-kentän ylimmän tason video-osat ennen sellaisen kohteen kutsumista, jolla ei tiedetä olevan natiivia videotukea.
Tuettuja muotoja ovat `input_video`, `video_url`, `video_source`, HTTPS-URL-osoitteet
ja `data:video/*;base64,...`-data-URI:t. Tekstissä olevia pelkkiä tiedostonimiä ei tulkita
videoiksi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyynnön läpikäynnistä,
ominaisuuksien ja käytäntöjen tarkistuksesta, pyyntökohtaisesta koostamisesta ja vastauksen hyötykuormasta.
Videokohtainen käsittely — hankinta, koko tuloksen välimuisti, kuvasarjan
kuvailu (johon yhdistetään mahdollinen kutsujan määrittämä äänen litterointi) sekä yrityskohtaiset
mittarit, keskeytys ja siivous — on piilotettu funktion `processVideoPart` taakse tiedostossa
`videoBridgePipeline.ts`. Sitä kutsutaan kerran kutakin video-osaa kohti funktion `preCall` silmukassa.
Kyseinen moduuli määrittää myös eksplisiittiset porttirajat `VideoMediaBrokerPort`
(tavujen hankinta ja näytteistettyjen kuvien poiminta), `VideoAudioTranscriptionPort`
(kutsujan määrittämän äänen litteroinnin yhdistäminen näytteistettyihin kuvateksteihin) ja
`VideoDrilldownPort` (kuvakohtaisten tarkennustietojen tallennusraja; ei vielä kytketty
funktioon `processVideoPart` — tällä hetkellä vain erillinen `/api/modality-bridge/video/drilldown`-reitti
kirjoittaa tarkennusmerkintöjä).

Julkinen `/v1`-pyyntöpolku ei koskaan tuo käyttöön tai käynnistä aliprosessia. Etävideot
ladataan 50 MiB:n kokorajan puitteissa; pyyntöön sisällytetyillä base64-videoilla on
varovainen 36 MiB:n videokohtainen raja puretulle koolle, jotta mallin, viestien ja kehystyksen muodostama kokonaisuus
pysyy julkisten JSON-pyyntöjen 50 MiB:n hyväksymisrajan sisällä. Sisällytetyn
sisällön pituus ja puretun koon arviot tarkistetaan ennen muistin varaamista. HTTPS vaaditaan
sekä alkuperäisessä etä-URL-osoitteessa että jokaisessa uudelleenohjauksessa käyttäen nykyistä
vain julkisiin osoitteisiin kohdistuvaa lähtevän liikenteen suojausta ja DNS-kiinnitystä. Tavut kulkevat sitten täsmällisen sisäisen
`POST /api/modality-bridge/video/extract`-välittäjärajapinnan kautta. Kyseisellä reitillä on sekä
`LOCAL_ONLY`- että `SPAWN_CAPABLE`-määritys, se hyväksyy vain prosessikohtaisesti todennetun
pyynnön luotetusta loopback-osoitteesta eikä koskaan hyväksy URL-osoitetta, tiedostojärjestelmän polkua, suoritettavaa tiedostoa
tai argumenttiluetteloa. API:n rungon koon käsittelyputki ja käsittelijän asteittainen rungon
lukija valvovat toisistaan riippumatta välittäjän syötteen 50 MiB:n kokorajaa. Sen rajattu jono suorittaa
yhden poiminnan kerrallaan, sallii neljä odottavaa työtä ja rajoittaa odottavan syötteen määrän
100 MiB:uun.

Välittäjän sisällä `ffprobe` lukee yksityisen paikallisen tiedoston; kiinteä sallittujen
muotojen luettelo sulkee pois soittolista- ja manifestimuodot. Sallituissa MOV-perheen
säiliömuodoissa ulkoiset MOV-dataviittaukset pysyvät oletusarvoisesti poissa käytöstä, eikä
kiinteä komento ota niitä käyttöön. Sekä `ffprobe` että `ffmpeg` käyttävät
vain `file`-protokollan sallivaa protokollaluetteloa, yhtä säiettä, kiinteitä argumenttitaulukoita
ja `PATH`-muuttujan perusteella löydettyjä suoritettavia tiedostoja ilman komentotulkkia. Liitettyä kansikuvaa sisältäviä virtoja ei
pidetä toistokelpoisina ehdokkaina. Kaikkien toistokelpoisten virtojen on täytettävä rajoitukset, ja
nimenomaisesti oletukseksi merkitty virta valitaan ensisijaisesti ennen determinististä pienimmän indeksin
varavalintaa. Videoiden enimmäiskesto on 600 sekuntia, kumpikin ulottuvuus saa olla enintään 8 192 pikseliä ja
lähdekuvassa saa olla enintään 33 554 432 pikseliä. FFmpeg poimii 1–16 JPEG-ruutua aikavälien keskipisteistä ja pienentää
pitkän sivun enintään 1 024 pikseliin suurentamatta pienempiä syötteitä, eikä
se koskaan saa URL-osoitetta. Näytteenottokäytäntö on oletusarvoisesti `uniform`. Valinnainen
`scene_aware`-käytäntö ja kokeellinen `segment_aware`-käytäntö suorittavat yhden ylimääräisen
kiinteän FFmpeg-ajon jo validoidulle paikalliselle virralle, valitsevat rajatun määrän
`showinfo`-kohtausaikaleimoja ja palaavat deterministisesti samoihin
tasavälisten aikavälien keskipisteisiin, jos tunnistin epäonnistuu, aikakatkaisu ylittyy, tuloste on virheellinen tai
ehdokasjoukko on tyhjä. Segmenttitietoinen tila jakaa keskipistenäytteet suhteessa
validoitujen kohtausvälien pituuksiin; segmenttitietoisen tilan havaintotiedot ja varamenettely
kuvataan tarkemmin jäljempänä. Ehdoton 16 ruudun enimmäismäärä
varmistetaan valinnan jälkeen kaikissa käytännöissä. Kun kohtaustietoisen pyynnön ruutubudjetti on vain
yksi ruutu, käytäntö käyttää aktiivisen koko videon tai kohdistetun
aikaikkunan keskipistettä ja ilmoittaa `policyEffective: uniform`: yksittäinen valittu kohtausruutu
ei voi säilyttää molempia ajallisia ääripäitä. Kutsuja voi halutessaan antaa
äärellisen kohdistetun aikaikkunan (`start`/`end` sekunteina); rajat sovitetaan median
kestoon, käänteiset tai ei-äärelliset ikkunat hylätään, ja kaikkia näytteenottokäytäntöjä
sovelletaan vain normalisoidun aikavälin sisällä. Tuloksena saatava
ikkuna sisällytetään näytteenoton metatietoihin ja epäluotetun kuvauksen
alkuliitteeseen, jotta jatkokäsittelymallit voivat erottaa kohdistetun katkelman koko
aikajanasta.

Kuvauksen semanttinen kohdistus on erillinen, nimenomainen asetus. Oletusarvoinen `full`-
analyysitila säilyttää nykyisen ruutukehotteen eikä koskaan välitä pyynnön
tekstiä kuvausmallille. `focused`-tilassa silta lukee vain viimeisimmän
ei-tyhjän käyttäjän kirjoittaman `text`/`input_text`-sisällön samasta Chat- tai Responses-
säiliöstä, normalisoi sen NFC-muotoon, yhdistää ohjausmerkit ja tyhjemerkkijonot
ja rajoittaa sen 500 Unicode-koodipisteeseen. Jos tulos on tyhjä, käytetään
täsmälleen samaa `full`-kehotetta. Käyttökelpoinen vihje sarjallistetaan JSON-muotoon erilliseen
epäluotetun käyttäjäkontekstin lohkoon, ja sillä saa ainoastaan painottaa havaittavia yksityiskohtia; se
ei voi ohittaa erillistä varoitusta, joka kieltää mediassa näkyvien
tai kuuluvien ohjeiden noudattamisen. Tekstimuotoinen kohdistus ei koskaan päättele `start`/`end`-arvoja eikä muuta
ajallista näytteenottoa.

#### FU-07:n rakenteelliset segmenttihavainnot

`segment_aware` käyttää yhtä rajattua esianalyysiajoa jo validoidulle
paikalliselle videovirralle. Kiinteä suodatinketju skaalaa kuvan ensin enintään 320 pikselin
levyiseksi, tunnistaa kohtausvaihdokset ja pysähtyneet aikavälit sekä ottaa sitten yhden ruudun
sekunnissa epäterävyyden, keskimääräisen luminanssin ja spatiaalisen/ajallisen informaation mittaamista varten. Ajo
on rajoitettu 600 rakenteelliseen näytteeseen, yhteen FFmpeg-/suodatinsäikeeseen, samoihin
vain `file`-protokollan ja sallitut säiliömuodot hyväksyviin luetteloihin, prosessin tulosteen 1 MiB:n enimmäiskokoon
ja enintään 30 sekuntiin välittäjän yhteisen keskeytys- ja määräaikarajan puitteissa. Se ei koskaan
hyväksy pyynnöstä komentoa, suodatinta, polkua tai URL-osoitetta.

Rakenteelliset arvot ovat deterministisiä näytteenottohavaintoja, eivät videon semanttista
ymmärtämistä. Niistä ei päätellä kohteita, toimintoja, kuvauksia, puhetta tai käyttäjän
tarkoitusta. Kohtaus- ja pysähtymisrajat muodostavat segmenttejä; pysähtyneen kuvan osuus, epäterävyys,
valotus, tilalliset yksityiskohdat ja ajallinen muutos vaikuttavat vain siihen, miten olemassa oleva
1–16 ruudun budjetti jaetaan. Täysin pysähtyneestä segmentistä otetaan enintään yksi ruutu,
ja muut segmentit kilpailevat jäljellä olevasta budjetista. Kun rajoja
on enemmän kuin ruutuja, aikajanan tasainen kattavuus säilytetään, jotta nopeat alkupään leikkaukset
eivät voi peittää pitkää loppusegmenttiä. Kohtausrajat, jotka ovat pysähtymisrajasta enintään 1 sekunnin
analyysiresoluution etäisyydellä, yhdistetään siihen.

Puuttuvat suodattimet, virheelliset tai tyhjät havaintotiedot, tunnistinvirhe tai rajatun
esianalyysin aikakatkaisu johtavat sallivaan varamenettelyyn, joka käyttää täsmälleen samaa tasavälisten aikavälien keskipistekäytäntöä. Kutsujan
tekemä keskeytys tai välittäjän määräajan ylittyminen ei johda sallivaan varamenettelyyn: se lopettaa käynnissä olevan
aliprosessin, estää myöhemmän ruutujen poiminnan, ja yksityinen väliaikainen hakemistopuu
poistetaan `finally`-lohkossa.

`scripts/perf/video-bridge-fu07-eval.ts` tuottaa deterministisiä, todellisella FFmpegillä luotuja
testiaineistoja duplikaattien poiston jälkeisten kuvauskutsusäästöjen, runsaan liikkeen budjetinjaon,
epäterävyys-/valotus-/SI-TI-havaintojen, pitkään loppuosaan päättyvien nopeiden leikkausten sekä asteittaisten häivytysten
väärien positiivisten tulosten arviointiin. Se tallentaa esianalyysin todellisen keston sekä, jos `/usr/bin/time`
on käytettävissä, aliprosessin suoritinajan ja RSS-huippuarvon. Sen laatutarkistukset ovat vain rakenteellisia
vertailutarkistuksia. Todellisen kuvausmallin laatu pysyy tilassa `HOLD`, koska tällä
testikehikolla ei ole valtuutettua päätepistettä eikä lukittua arvioijaa. Myös rahalliset säästöt pysyvät tilassa `HOLD`,
ellei `--caption-cost-per-call-usd` anna nimenomaista positiivista kutsukohtaista
kustannusarviota; komentosarja ei koskaan sepitä kumpaakaan tulosta.

Kunkin ruudun enimmäiskoko on 4 MiB, kaikkien raakamuotoisten ruutujen yhteiskoko enintään 23 MiB ja
sarjallistetun välittäjävastauksen koko enintään 32 MiB. Yksityinen väliaikaishakemisto poistetaan
`finally`-lohkossa. OmniRoute ei sisällä FFmpegiä eikä hyväksy mukautettua
suoritettavan tiedoston polkua. Ennen kuvatekstien luontia silta suorittaa varovaisen visuaalisen
kaksoiskappaleiden poiston: kukin JPEG pienennetään 16×16-kokoiseksi harmaasävypuskuriksi ja sitä
verrataan vain viimeiseen säilytettyyn ruutuun. Jos pyydetty kuvatekstibudjetti
on suurempi kuin yksi ruutu, poiminta tuottaa
rajatun ehdokasjoukon, jonka koko on enintään kaksinkertainen budjettiin nähden eikä koskaan yli 16 ruutua.
Pyydettyä enimmäismäärää sovelletaan vasta kaksoiskappaleiden poiston jälkeen, ja ensimmäinen ja viimeinen
valittu ehdokas säilytetään lopullisessa harvennuksessa, kun budjetti on vähintään
kaksi. Versioitu
`grayscale-16x16-mean-cells-v2`-käytäntö käyttää suurempaa seuraavista: keskimääräinen luminanssiero tai
niiden pienoiskuvan solujen osuus, joiden normalisoitu ero on vähintään 0.05.
Kaksoiskappaleiden tunnistuskynnys on vakio 0.04, joka on valittu ennustettavuuden vuoksi sen sijaan, että
se olisi ajonaikainen asetus. Tämä toissijainen
suuren kontrastin signaali säilyttää pienet liikkeet ja näkyvän tekstin muutokset, jotka
pelkkään keskiarvoon perustuva vertailu voi peittää. Vertailijan tai dekooderin virhetilanteissa ruudut säilytetään,
jotta kattavuus ei kärsi. Tuloksen metatiedoissa erotellaan poimitut ehdokkaat, onnistuneesti käytetyt
ruudut ja poistetut visuaaliset kaksoiskappaleet.

Erikseen merkitty video-osa voi pyytää aikaleimattua kuvakoostetta.
Silta rakentaa JPEG-ruudukon, jossa on enintään 4 saraketta ja 16 ruutua. Jokaiseen 512 pikselin soluun
piirretään lähteen aikaleima suurikontrastiseen alareunan palkkiin, ja samat aikaleimat
säilyvät tekstimuotoisissa metatiedoissa myöhempää yhdistämistä ja auditointia varten. Koko
JPEG-kuvan enimmäiskoko on edelleen 32 MiB. Jos `sharp` ei pysty dekoodaamaan kuvia tai koostamaan ruudukkoa,
silta käyttää vararatkaisuna yksittäisiä JPEG-ruutuja; asiakkaan keskeytys välittyy silti
myös koostetoiminnon läpi.

Käyttöönoton perusteena käytettävä näyttö pidetään tarkoituksella erillään synteettisestä koostamisen
mikrovertailutestistä. `scripts/perf/video-bridge-contact-sheet-eval.ts` määrittelee
skeemaversioidun A/B-testikehikon todellisille OpenAI-yhteensopiville näkömalleille. Se mittaa
palveluntarjoajan ilmoittamat tokenmäärät, päästä päähän kuluvan todellisen ajan (mukaan lukien koosteen muodostaminen),
mallikutsujen määrän ja manifestissa määriteltyjen faktojen säilymisen. Mallien raakavastauksia ei
kirjoiteta raporttiin; vain SHA-256-tiivisteet ja täsmäävien faktojen tunnisteet säilytetään.
Testikehikko ei tee verkko- tai maksullisia mallikutsuja, ellei `--execute-real`-valitsinta anneta ja
`--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` ole määritetty. Ilman
tällaista nimenomaista todellista ajoa sen koneellisesti luettava päätös pysyy arvossa `HOLD`; pelkät synteettiset
hyötykuorman koon tai kutsumäärän mittaukset eivät ole näyttöä käyttöönoton tueksi.

Kutsujat voivat liittää tuettuun video-osaan valinnaisen `transcript.cues`-taulukon,
jos heillä on jo käytettävissään ajallisesti kohdistettu teksti. Jokaisessa tekstijaksossa on oltava `text`,
äärellinen `start`/`end`-aikaväli tunnistetun keston sisällä sekä sallittujen arvojen luetteloon kuuluva
`source` (`client`, `embedded` tai `audio-bridge`); `confidence`-arvon oletus on
`1`, ja sen on pysyttävä välillä `0`–`1`. Täysin identtiset tekstijaksot yhdistetään.
OmniRoute ei koskaan käynnistä litterointia näiden metatietojen perusteella: validoidut tekstijaksot
kopioidaan kuvaustulokseen lähteineen, luottamusarvoineen ja aikaväleineen, ja
ne esitetään epäluotettuina havaintoina ruutujen kuvatekstien rinnalla. Virheellinen,
sallitun aikavälin ulkopuolinen tai alkuperätiedoton teksti hylätään sen sijaan, että se sekoitettaisiin
kuvatekstivirtaan. Molemmat pyyntörungon litterointikanavat normalisoivat annetun
alkuperätiedon arvoksi `client`, mukaan lukien itse ilmoitetut `embedded`- tai `audio-bridge`-
tunnisteet. Vain palvelimen hallinnoima sovitin voi määrittää nämä luotetut tunnisteet
ainoastaan koodista käytettävän `trustedSource`-argumentin kautta; pyynnön JSON-kentästä ei voi välittää arvoa
kyseiseen argumenttiin. Litterointiteksti pysyy epäluotettuna, mediasta johdettuna sisältönä
alkuperästään riippumatta, eikä se saa koskaan määrittää käyttöoikeuksia.

Edistynyt kutsuja voi toimittaa samalle videolle `audioTranscript`-raidan;
sitä käsitellään asiakkaan toimittamana tekstinä, ei todisteena palvelimella tehdystä litteroinnista.
Yhdistämisrajapinta käsittelee visuaaliset ja äänihavainnot
yhteisen määräajan ja keskeytyssignaalin alaisina, järjestää ne yhteiselle aikajanalle, yhdistää
täysin identtiset kaksoiskappaleet ja raportoi osittaisen tuloksen, kun vain toinen puoli onnistuu.
Virheellinen `audioTranscript` johtaa tähän osittaiseen tulokseen — visuaalinen
kuvaus säilytetään ja äänihaara kirjaa puhdistetun virhekoodin —
sen sijaan, että koko videon käsittely epäonnistuisi. Haarakohtainen saatavuus, osittaisuuden ilmaiseva lippu
ja puhdistetut virhekoodit säilytetään kuvaustuloksessa,
suojamekanismien metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan
yhdistämislaskureissa. Video Bridgen oletuskäsittelypolku ei käynnistä puheentunnistusta
eikä lataa toista mediakopiota; ilman nimenomaisesti toimitettua raitaa se käsittelee
vain videota.

**Transkription säilyttäminen (#12150 P1).** Tämä koskee automaattisesti kaikkia tilanteita, joissa
Video Bridge (jonka käyttö on erikseen valittava) muodostaa transkriptiokatkelman — erillistä
säilytyslippua ei ole. Kun pyyntö muodostaa minkä tahansa transkriptiokatkelman (kutsujan määrittämän
`transcript`-kentän tai yhdistetyn `audioTranscript`-kentän), suojamekanismi merkitsee sen
`videoBridgeObserved`-merkinnällä ja tuottaa videon kuvauksesta peitetyn rinnakkaisversion —
muuten identtisen esityksen, jossa jokaisen katkelman vapaamuotoinen tekstisisältö korvataan arvolla
`[redacted-video-transcript]`. Tämä tehdään korvaamalla rakenteinen katkelmakenttä
ennen merkkijonon kokoamista (ei koskaan jäsentämällä litistettyä tekstiä, joten mitään katkelman
sisältöä — haitallista tai tavallista, mukaan lukien merkkiä `]` sisältävät tekstit, kuten
`[inaudible]`/`[music]` — ei voi säilyä). Pysyvästi tallennettava kutsulokin pyynnön runko korvaa
jokaisen videosta johdetun tekstiosan tällä peitetyllä rinnakkaisversiolla. Vastaavuus määritetään sisällön
yhtäsuuruuden perusteella; `fullText`-ankkuri luetaan uudelleen valmiista, kutsua edeltävän suojamekanismin
hyötykuormasta, joten vastaavuus löytyy myös sen jälkeen, kun ketjun myöhemmät suojamekanismit (henkilötietojen ja
tunnistetietojen peittäjät, prioriteetit 10/95) kirjoittavat kuvaustekstin uudelleen paikallaan ja
järjestelmäkehotteen, ohjauksen siirron tai muistin sisällön lisääminen muokkaa viestitaulukon rakennetta.
Mallille lähetettävä runko ei muutu. Havaittu pyyntö ei myöskään lisää sisältöä
pysyvään Memory-muistiin (sekä pyynnöstä että vastauksesta tehtävä poiminta ohitetaan),
joten mallin oma vastaus ei voi kopioida transkriptiotekstiä Memory-muistiin.

**Videon raakakentät (#12430).** Kun silta on käytössä ja natiivi videotuki on tuntematon tai puuttuu, määritetyt `transcript`/`audioTranscript`-kentät aktivoivat myös `videoBridgeObserved`-merkinnän, vaikka kuvauksen muodostaminen olisi epäonnistunut tai `maxVideos`-raja olisi tullut vastaan. `null` ja tyhjät merkkijonot lasketaan mukaan; puuttuvia kenttiä ja muuhun kuin videoon liittyviä metatietoja ei lasketa. Säilytetyissä kopioissa nämä kentät peitetään tai pyyntö jätetään pois, ja välimuistit sekä Memory ohitetaan.

Näissä varamenettelyissä kelvolliset kutsujan katkelmat muunnetaan tuetuiksi `text`/`input_text`-
osiksi epästandardien palveluntarjoajakenttien sijaan. Molemmat pyynnössä annetut raidat
säilyvät epäluotettuina `client`-havaintoina, ja niiden yhteyteen lisätään nimenomainen varoitus siitä, ettei videota
kuvattu eikä aikaleimoja tarkistettu mediaa vasten. Nykyiset
256 katkelman ja 64 KiB:n kokonaisrajat sekä katkelmakohtaiset rajat koskevat molempia raitoja yhdessä;
aikaleimojen on mahduttava välittäjän 600 sekunnin enimmäisrajaan ja mahdolliseen annettuun kohdistusikkunaan.
Virheelliset raidat hylätään eikä niitä välitetä mielivaltaisena tekstinä; kelvollista
rinnakkaisraitaa voidaan silti käyttää, ellei niiden yhteinen raja ylity. Null-arvoiset tai tyhjät
kentät eivät lisää tekstiä. Tämä varamenettely ei lisää median noutoa eikä transkriptiota.
Transkription laajennuskentät poistetaan varamenettelyn videon sisältävästä rakenteesta ja sen
`video_url`/`source`-olioista. OpenAI-siirtomuodon sallittujen kenttien lista pysyy tiukkana; videon sisältävät rakenteet, joiden natiivi tuki on
tuntematon, pysyvät käytettävissä, ja tunnetut vain tekstiä tukevat kohteet säilyttävät turvalliset merkinnät.
Rakenteiset peitetyt rinnakkaisversiot suojaavat lisättyä transkriptiotekstiä, kun taas
alkuperäinen kutsujan omistama pyyntö säilyy muuttumattomana. Natiivia tukea tarjoavat kohteet ja
käytöstä poistetut sillat säilyttävät nykyisen ohituskäyttäytymisensä.

Muut säilytettävät kopiot käyttävät samaa havaitun pyynnön signaalia. Raaka,
ennen suojamekanismeja otettu asiakaspyynnön tilannevedos, muistissa odottava pyyntö ja varhaisessa vaiheessa
hylätyn pyynnön loki korvaavat video-osien transkriptiokentät rakenteisesti;
käsittelyputken vaiheiden ja kontekstin siirron muodostamat merkkijonokehotteet peitetään
pyynnön rungon pysyvän tallennuksen kohteessa. Pysyvästi tallennettava `video_content_removed`-merkintä
saa `previous_response_id`-jatkamisen estymään turvallisesti sen sijaan, että se muodostaisi uudelleen
tarkoituksella pois jätettyä tekstiä. Jos havaittu pyyntö menettää
osakohtaisen peitetyn rinnakkaisversionsa ennen lokitusta tai yksikin useista videon rinnakkaisversioista
ei enää vastaa sisältöä myöhempien pyyntömuutosten jälkeen, säilytettävä pyynnön runko
jätetään kokonaan pois sen sijaan, että transkriptio säilytettäisiin vain osittain peitettynä.

Havaitun pyynnön yhteydessä mallin vastaus saattaa lainata mitä tahansa transkription
osaa ilman rakenteista katkelmarajaa. Sen pysyvästi tallennettava kutsulokin
`responseBody` korvataan siksi poisjättömerkinnällä; yksityiskohtaista
käsittelyputken artefaktia (joka voi sisältää palveluntarjoaja- ja asiakasviestien runkoja sekä tietovirran lohkoja)
ei säilytetä. Semanttinen välimuisti, idempotenssivälimuisti ja päättelyn toistovälimuisti ohittavat
sekä luvut että kirjoitukset kyseisen pyynnön osalta. Palveluntarjoajalle lähetettävä pyyntö ja asiakkaalle näkyvä
vastaus säilyvät muuttumattomina. Varhaiset keepalive-tavut poistetaan väliaikaisesta
puskurista, kun yksityiskohtainen artefakti jätetään pois. Kiron virheellistä EventStream-muotoa koskeva
varoitus ilmoittaa vain hyötykuorman tavumäärän, ei koskaan sen sisältöä eikä JSON-
jäsentimen raakaa virheilmoitusta.
Tämä ei tarkoita, että kaikki asiaan liittymättömät palveluntarjoajien tai liitännäisten diagnostiikkatiedot olisi
auditoitu; säilyttävien tallennuskohteiden laajempaa läpikäyntiä seurataan tehtävässä #11658.

Sisäisen `/api/modality-bridge/video/drilldown`-rajapinnan elinkaari on erillinen,
loopback-yhteydellä ja tunnisteella todennettu välimuistikerros. Jokainen toiminto edellyttää myös
kanonista, läpinäkymätöntä toimijatunnusta. Ennen kuin tuotantokutsuja otetaan käyttöön, sen on
johdettava tämä tunnus todennetusta vuokralaisesta, eikä se saa koskaan välittää
asiakkaan valitsemaa arvoa. Välimuistiavaimet sitovat toimijan kanonisiin istunto- ja
videoviitetunnuksiin, tallentavat vain niistä SHA-256:lla johdetut avaimet ja rajaavat sekä lukemisen
että poistamisen samaan toimijaan. Välimuisti tallentaa enintään 16 johdettua JPEG-
kuvaruutua tietuetta kohti, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja
`start`/`end`-lukuja tai istunnon nimenomaista poistamista.

Kunkin toimijan raja on 16 tietuetta ja 64 MiB kanonista JPEG-dataa. Nämä
rajat ovat riippumattomia yleisestä 64 tietueen ja 256 MiB:n enimmäisrajasta: toimijan kiintiön
täyttyessä poistetaan vain kyseisen toimijan vähiten viime aikoina käytettyjä tietueita ennen kuin yleistä
LRU-poistoa harkitaan. Vanhentuneet tietueet poistetaan sekä toimijakohtaisesta että
yleisestä laskennasta välimuistitoimintojen yhteydessä, eikä peruutus tai validoinnin epäonnistuminen
vahvista osittaista korvausta.

Välimuisti hylkää ei-kanonisen Base64:n, ylimääräisen täytön, muun kuin JPEG-median,
virheelliset tai katkenneet JPEG-kuvat sekä JPEG-kuvat, jotka aiheuttavat varoituksen
resurssirajatun koko kuvan `sharp`-dekoodauksen aikana. Se koodaa jokaisen hyväksytyn kuvan
uudelleen kanoniseksi JPEG-kuvaksi, määrittää leveyden ja korkeuden dekoodatuista tavuista
kutsujan kenttiin luottamisen sijaan ja poistaa perässä olevat polyglottitavut sen sijaan,
että säilyttäisi ne. Molempiin kiintiöihin lasketaan vain rajattu kanoninen pakattu puskuri.
JSON-siirtomuodon kokoraja sisältää Base64:n lisätilantarpeen 32 MiB:n dekoodatun syötteen
enimmäiskokoa varten. Jokainen
tallennettu johdannainen sisältää validoidun JPEG-muotonsa ja -resoluutionsa, näytteenottokäytännön,
johdannaisen version, luontiajan, palvelimen laskeman sisällön tiivisteen ja tiivistetyn
viittauksen lähtöaineistoon sekä luotetun kutsujan ilmoittaman lähtöaineiston sisällön tiivisteen.
Peruutus tarkistetaan asynkronisten dekoodaus- ja tiivistysvaiheiden välissä ennen atomista
välimuistiin tallennusta.

Tämä toteutusvaihe ei vielä kytke tuotantokäytön tuottajaa reittiin eikä
tarjoa moniresoluutioisten varianttien valintaa. Läpinäkyvä Video Bridge -pyyntöpolku
ei siksi aiheuta lisätyötä, ja vuokraajaan sidottu turvallisuusidentiteetin johtaminen sekä
FU-08:n koko moniresoluutioinen elinkaari jäävät nimenomaisiksi jatkotehtäviksi sen
sijaan, että ne dokumentoitaisiin valmiiksi toiminnallisuuksiksi.

Ruudut kuvaillaan peräkkäin määritetyllä Video-mallilla. Tyhjä
Video-ohitusasetus perii Vision-asetuksen; jos molemmat ovat tyhjiä, Visionin
automaattireititin valitsee käytettävän näkökykyisen mallin. Onnistuneet kuvaukset
korvaavat alkuperäisen osan tekstillä, jonka vakioetuliite on `[Video description:` ja joka myös
merkitsee tekstin epäluotetuksi mediasta johdetuksi havainnoksi ja kehottaa myöhempiä
malleja olemaan noudattamatta mediasta löytyviä ohjeita. Ruutukuvausten välimuistiavaimet
sisältävät JPEG-tavut, kehotteen, aikaleiman ja käytettävän mallin; vain onnistuneet
kuvaukset tallennetaan välimuistiin. Välimuistimerkinnät säilyttävät kuvauksen onnistuneesti tuottaneen
mallin, myös varamallin; silta ilmoittaa arvoksi `mixed`, kun eri ruudut
on tuotettu eri malleilla. Välimuistiosuma käyttää uudelleen tätä tuottajan identiteettiä
sen sijaan, että nimeäisi sen uudelleen pyydetyn reitityssuunnitelman mukaiseksi. Koko videon tuloksen
välimuistiavain muodostetaan kaikista tulokseen vaikuttavista syötteistä — kehotteesta, käytettävästä
mallista, näytteenottokäytännöstä, ruutumäärästä, semanttisen analyysin tilasta, normalisoidun
kohdennusvihjeen SHA-256-sormenjäljestä, kohdennusikkunasta, `transcript`- ja
`audioTranscript`-arvoista sekä koostekuva-asetuksesta — joten minkä tahansa näistä
ulottuvuuksista muuttaminen aiheuttaa välimuistihudin eikä koskaan vanhentuneen tuloksen uudelleenkäyttöä.
Visuaalisen duplikaattien poistokäytännön versio, kynnysarvo ja rajattu ehdokasruutujen määrä
sisältyvät myös nimenomaisesti tulosvälimuistin avaimeen ja metatietoihin; käytännön muutos ei siksi
voi käyttää uudelleen vanhentunutta koko videon kuvausta. Tulosvälimuistin v4-metatiedot säilyttävät tilan ja
sormenjäljen, eivät koskaan käyttäjän raakamuotoista tehtävää. Suojamekanismin metatiedot ilmoittavat sekä
pyydetyn että tosiasiallisesti käytettävän analyysitilan; pyydetty `focused`-tila ilman
käyttökelpoista käyttäjätekstiä ilmoitetaan tosiasiallisesti `full`-tilaksi.

Suojamekanismi poimii kaikki tuetut video-osat mutta kuvailee enintään
`modalityBridgeVideoMaxVideos` videota. Kohteessa, jonka ominaisuudeksi on varmistettu
`supportsVideo === false`, epäonnistuneet ja rajan ylittävät videot korvataan nimenomaisilla turvallisilla
tekstimerkinnöillä, jotta raakamuotoista videota ei jää jäljelle. Kun tukikykyä ei tunneta, nämä osat
säilyttävät videomuotonsa; mahdollinen vararatkaisuna käytettävä litterointi noudattaa edellä kuvattua rajattua
tekstimuunnosta. Kohteet, joilla on `supportsVideo === true`, ohittavat sillan.
Asiakaspyynnön keskeytyssignaali välittyy lataukseen, välittäjän jonoon,
aliprosesseihin ja kuvauskutsuihin; keskeytykset pysäyttävät käsittelyn videoiden välillä eivätkä koskaan
päästä raakamuotoista mediaa läpi virhetilanteessa.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                               | Oletus      | Alue / toiminta                                                                                                           |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen ajonaikainen toiminto, otettava erikseen käyttöön                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiskuvaukset; `focused` käyttää rajattua, epäluotettua uusimman käyttäjäviestin kontekstia             |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen virheessä käytetään vararatkaisuna arvoa `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                            |

Vanhat tallennetut Video-aikakatkaisuarvot, jotka ylittävät 120 sekuntia, rajataan
välittäjän määräaikaan; uudet tämän rajan ylittävät asetusten tallennukset hylätään.
`GET /api/modality-bridge/video/runtime` edellyttää luotetusti varmennettua loopback-paikallisuutta
ennen tunnistautumista tai ajonaikaisen ympäristön tutkimista ja sen jälkeen
hallintatason tunnistautumista. Se palauttaa vain arvon `available`, siivotut FFmpeg/ffprobe-versiot ja kiinteän
syyn, kun ajonaikainen ympäristö ei ole käytettävissä. Sisäinen poimintapäätepiste ei ole
julkinen latausrajapinta: jonon täyttyminen palauttaa arvon `503` ja otsakkeen `Retry-After`, kutsujan
yhteyden katkeaminen palauttaa arvon `499` ja välittäjän kiinteän määräajan ylittyminen arvon `504`. Muunnetut vastaukset lisäävät
arvon `video->text;model=<visionModel>;parts=<videos>` keskitettyyn
`x-omniroute-modality-bridge`-otsakkeeseen poistamatta Vision- tai Audio-osuuksia.

### Henkilötietojen peitin (`piiMasker.ts`)

Suoritetaan **molemmissa** vaiheissa.

- **`preCall`** kloonaa hyötykuorman, käy läpi kentät `system`, `messages`, `input` ja
  `prompt` (myös pelkät merkkijonoalkiot) ja suorittaa `processPII()`-funktion (moduulista
  `@/shared/utils/inputSanitizer`) merkkijonomuotoisille `content`/`text`-kentille. Kun
  `PII_REDACTION_ENABLED=true`, havaitut henkilötiedot peitetään lähtevästä
  hyötykuormasta. Tämä on riippumaton asetuksesta `INPUT_SANITIZER_MODE` (joka ohjaa vain
  kehoteinjektioiden käsittelykäytäntöä). Kun peittäminen on pois käytöstä, kutsu tallentaa havaintojen
  määrät muuttamatta sisältöä.
- **`postCall`** syväkloonaa vastauksen ja suorittaa `sanitizePIIResponse()`-funktion sekä
  Responses-rajapinnan rakennetta käsittelevän peittimen (`maskResponsesOutput` — kattaa kentät
  `output_text` ja `output[].content[].text`). Jos jotain peitetään,
  muokattu vastaus korvaa alkuperäisen.

Suojamekanismi ei koskaan estä pyyntöjä; se vain lisää merkintöjä (`meta.detections`,
`meta.redacted`) tai muokkaa sisältöä.

#### Tyyppikohtainen valinta, mukautetut mallit ja havaintolaskurit

**Hallintapaneeli → Asetukset → Suojaus → Henkilötietojen peittäminen** määrittää, _mitä_ peitetään. Se
ei ota peittämistä käyttöön: sitä ohjaavat edelleen `PII_REDACTION_ENABLED` (pyyntö) ja
`PII_RESPONSE_SANITIZATION` (vastaus + SSE), jotka ovat molemmat oletuksena pois käytöstä.

- **Tyyppikohtainen valinta** — sisäänrakennetut tunnisteet on lueteltu tiedostossa
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Jos asetusta ei ole määritetty, kaikki
  tyypit ovat mukana (toiminta ennen tämän asetuksen käyttöönottoa). Pyyntömoottorin
  `ssn_us`-malli vastaa tyyppiä `ssn`. Mallipohjat (Minimaalinen, Vakio, Talous,
  Brasilia, Yhdysvallat, Täysi) vain täyttävät käyttöliittymän valintaruudut.
- **Mukautetut mallit** — enintään 20 säännöllistä lauseketta tai jokerimerkkimallia (`*` = enintään 64
  muuta kuin tyhjemerkkiä, `?` = yksi). Osumat korvataan arvolla `[CUSTOM_REDACTED]`.
  Jokainen malli käsitellään `compilePiiCustomPattern()`-funktiolla
  (`src/shared/utils/piiCustomPatterns.ts`): enintään 500 merkkiä, sallitut liput
  ovat `g i m s u`, mallin on käännyttävä, läpäistävä `safe-regex`-tarkistus (katastrofaalinen
  takaisinhaku), eikä se saa täsmätä tyhjään merkkijonoon tai peittämisen paikkamerkkiin.
  Tarkistuksen hylkäämä malli torjutaan tallennettaessa ja testattaessa, ja tallennettu rivi,
  joka ei läpäise tarkistusta, ohitetaan ajon aikana kääntämisen sijaan. Mukautettuja malleja
  käytetään vain peittämisen ollessa käytössä.
- **Havaintolaskurit** — tyyppikohtaiset määrät (eivät koskaan osumien arvoja), joita säilytetään
  muistissa ja jotka nollataan uudelleenkäynnistyksessä (`src/lib/pii/piiDetectionStats.ts`). Ne kasvavat
  vain peittämisen ollessa käytössä.

Asetukset sijaitsevat `key_value`-taulussa (nimiavaruus `pii_settings`,
`src/lib/db/piiSettings.ts`), ja ne luetaan 1 sekunnin välimuistin kautta. Rajapinta:

| Menetelmä | Polku                    | Tarkoitus                                                            |
| --------- | ------------------------ | -------------------------------------------------------------------- |
| `GET`     | `/api/settings/pii`      | Lippujen tila, `enabledTypes`, `customPatterns`, havaintolaskurit    |
| `PUT`     | `/api/settings/pii`      | Korvaa `enabledTypes` (`null` = kaikki) ja/tai `customPatterns`      |
| `POST`    | `/api/settings/pii/test` | Testaa yhtä mallia enintään 8 kt:n näytteeseen; mitään ei tallenneta |

Kaikki kolme edellyttävät hallinnan todennusta ja validoivat rungon Zodilla
(`src/shared/validation/schemas/piiSettings.ts`).

### Kehoteinjektio (`promptInjection.ts`)

Tunnistaa hyökkääviä rakenteita käyttäjän toimittamasta sisällöstä ja soveltaa
määritettyä käytäntöä. Toimintaa ohjaavat ympäristömuuttujat ja muodostimen
valinnat:

| Asetus     | Ympäristömuuttuja                                                                                      | Oletus | Vaikutus                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                              | `true` | Kun arvo on `false`, suojamekanismin suoritus päättyy heti.                                                                                                                                                                    |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn` | Injektioiden käsittelykäytäntö: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäinyhteensopivuuden vuoksi, mutta se **ei** poista injektiotekstiä; pyynnön henkilötietojen muokkausta ohjaa `PII_REDACTION_ENABLED`.) |
| Estokynnys | `blockThreshold`-valinta / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Estämiseen vaadittava vähimmäisvakavuus. Keskitason tapauksia oletuksena vain tarkkaillaan.                                                                                                                                    |

**Tilojen etusijajärjestys** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE` **tietokannan ominaisuuslipun ohitusasetus** (Hallintapaneeli → Asetukset →
Ominaisuusliput) → `INJECTION_GUARD_MODE`-ympäristömuuttuja → `INPUT_SANITIZER_MODE`-ympäristömuuttuja →
`warn`. Hallintapaneelin ohitusasetus on siis etusijalla ympäristömuuttujiin nähden, joten ominaisuuslippujen
käyttöliittymä ohjaa käynnissä olevaa suojamekanismia reaaliaikaisesti (ei uudelleenkäynnistystä). Tietokannan luku on vikasietoinen:
jos siinä tapahtuu virhe, suojamekanismi palaa ympäristömuuttujiin perustuvaan toimintaan, ja kun
ohitusasetusta ei ole määritetty, toiminta vastaa pelkkiin ympäristömuuttujiin perustuvaa määritystä.

Tunnistuslähteet:

1. `sanitizeRequest()` moduulista `@/shared/utils/inputSanitizer` (jaettu tunnistinjoukko,
   jota käytetään muuallakin käsittelyketjussa).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS` (tällä hetkellä `system_override_inline` ja
   `markdown_system_block`, molempien vakavuus on `high`).
3. Valinnaiset `customPatterns`, jotka välitetään muodostimen valinnoissa (merkkijonoja, säännöllisiä lausekkeita
   tai `{ name, pattern, severity }`-tietueita).

Kun `mode === "block"` **ja** vähintään yksi havainto saavuttaa vakavuuskynnyksen,
`preCall` palauttaa arvon `{ block: true, message: "Request rejected:
suspicious content detected" }`. Tiloissa `warn`/`log` suojamekanismi kirjaa havainnon lokiin mutta
sallii kutsun. Jaettu apufunktio `evaluatePromptInjection()` viedään myös
niiden kutsujien käyttöön, joiden on arvioitava kehotteita käyttämättä rekisteriä.

**Tarkistusraja (v3.8.20):** tunnistin tarkistaa vain yhdistetyn kehotetekstin **ensimmäiset 16 KB**
— `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua) tiedostossa
`src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` suorittavat operaation `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen
kuvioiden läpikäyntiä. Injektio-ohjeet sijaitsevat syötteen alkupuolella, joten tämä
rajoittaa säännöllisten lausekkeiden CPU- ja GC-kuormaa useiden satojen kilotavujen hyötykuormissa heikentämättä tunnistusta (vrt.
#3932, #4041).

### Tunnistetietojen peittäjä (`credentialMasker.ts`)

Suoritetaan **molemmissa** vaiheissa, oletusketjun viimeisenä (prioriteetti `95`). Peittää
tunnetut API-avain- ja salaisen tunnisteen kuviot lähtevästä hyötykuormasta (viestien
sisällöstä, työkalukutsujen argumenteista, työkalujen tuloksista) **ja** palveluntarjoajan vastauksesta, jotta
kehotteeseen liitetty tunnistetieto (tai työkalun tuloksessa toistettu tunnistetieto) ei vuoda
taustalla toimivalle palveluntarjoajalle tai takaisin asiakkaalle.

- **Vain erikseen käyttöön otettuna**, samalla käytännöllä kuin henkilötietojen peittäminen (liittyy ehdottomaan sääntöön #20):
  poissa käytöstä, ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun toiminto on pois käytöstä, suojamekanismi ei tee mitään —
  se ei koskaan estä eikä muokkaa mitään.
- `redactCredentials()` käy läpi koko hyötykuorma-/vastauspuun (`walkValue()`,
  suojattu prototyypin saastuttamiselta ja sykleiltä `WeakSet`-rakenteen avulla) ja korvaa osumat
  paikkamerkillä `[REDACTED:<type>]`, kloonaten vain ne haarat, jotka todella
  muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-tunnisteet (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksupalvelujen avaimet (Stripe, Square), pilvipalvelujen
  avaimet (AWS-käyttöavain, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  tunnistetietoja sisältävät yhteysmerkkijonot (`mongodb://user:pass@...` jne.) sekä
  yleisen `Authorization`/`x-api-key`/`api-key`/`apikey`-otsakearvojen
  kuvion. Otsakkeiden muotoiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo, skeeman etuliite, kuten
  `Bearer `/`Basic `, säilytetään) yleisen tekstin säännöllisen lausekkeen sijaan.
- Suojamekanismi ei koskaan estä mitään; se vain muokkaa sisältöä (`modifiedPayload` /
  `modifiedResponse`) ja lisää merkintöjä (`meta.credentialsRedacted`, `meta.count`).

Regressiotesti: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // arvo true keskeyttää ketjun suorituksen
  message?: string; // näytetään eston yhteydessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön muokkaamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen muokkaamiseksi
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

Suojamekanismi ilmaisee, ettei muutoksia ole, palauttamalla joko `void`, `{}` tai
`{ block: false }`. Palautettu `modifiedPayload`/`modifiedResponse` korvaa
ketjussa eteenpäin välitettävän arvon seuraavia suojamekanismeja varten.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojamekanismeille. Pyynnön keskeytys on tarkoituksellinen fail-open-poikkeus: mediasillat lopettavat työn ja vapauttavat resurssit palauttamatta raakamuotoista mediaa kohteelle, jonka tiedetään olevan tukematta sitä.

## Rekisteri (`registry.ts`)

Ainoa `guardrailRegistry`-instanssi tarjoaa seuraavat toiminnot:

- `register(guardrail)` — lisää suojamekanismin (tai korvaa sen normalisoidun nimen perusteella) ja
  järjestää mekanismit uudelleen nousevan `priority`-arvon mukaan.
- `clear()` / `list()` — hallinnolliset aputoiminnot.
- `runPreCallHooks(payload, context)` — käy läpi aktiiviset suojamekanismit, välittää
  hyötykuorman eteenpäin `modifiedPayload`-kentän kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama toimintaketju vastaukselle.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja rekisteröi haluttaessa
  oletusmekanismit uudelleen testien eristämiseksi toisistaan.

Molemmat suorittimet palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on taulukko `GuardrailExecutionResult`-tietueita. Ne sisältävät
suojamekanismikohtaiset kentät `blocked`, `skipped`, `modified`, `error` ja `meta`,
joista on hyötyä suorituksen jäljittämisessä.

### Suojamekanismien poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa ilman kaksoiskappaleita
luettelon niiden suojamekanismien nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Kanavia on viisi, ja ne luetaan tässä järjestyksessä ja yhdistetään yhdeksi luetteloksi
(kaksoiskappaleita poistettaessa ensimmäinen esiintymä säilytetään):

1. `apiKeyInfo.disabledGuardrails`
2. Pyynnön rungon `disabledGuardrails` (ylimmällä tasolla)
3. Pyynnön rungon `metadata.disabledGuardrails` (vain kun `metadata` on olio)
4. Otsake `x-omniroute-disabled-guardrails`
5. Vanha otsake `x-disabled-guardrails`

Kaikki viisi kanavaa yhdistetään, myös molemmat otsakkeet: kun lähetetään sekä
`x-omniroute-disabled-guardrails` että `x-disabled-guardrails`, ohitetaan niiden
luetteloiden yhdiste, eikä tyhjä uusi otsake enää piilota vanhaa otsaketta
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), korjattu muutoksessa
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono; nimien alusta ja lopusta poistetaan tyhjemerkit,
nimet normalisoidaan pienaakkosiseen kebab-case-muotoon (`pii_masker` → `pii-masker`) ja tyhjät
alkiot poistetaan. Tulos välitetään `context.disabledGuardrails`-kentän kautta
rekisterille, joka ohittaa vastaavat suojamekanismit (`skipped: true` kentässä `results`).

Käytöstäpoistoluettelo vaikuttaa vain **rekisteriin**. Kehoteinjektion `block`-tila on
pakollinen turvaraja: kehoteinjektion suojaväliohjelmisto
(`src/middleware/promptInjectionGuard.ts`) kutsuu funktiota `evaluatePromptInjection()`
ilman kutsujan hallitsemaa käytöstäpoistoluetteloa (sen aiemmin tekemä tarpeeton
`resolveDisabledGuardrails({ body })`-kutsu poistettiin muutoksessa
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), joten pyyntö,
joka poistaa `prompt-injection`-suojamekanismin käytöstä, hylätään silti `block`-tilassa. Tämä on
tarkoituksellista. Käytöstäpoistokanavat ovat kutsujan hallinnassa (pyynnön runko,
metatiedot, otsakkeet), eikä kutsuja saa voida poistaa käytöstä operaattorin asettamaa
turvakontrollia
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Otsakkeiden
yhdistäminen muutoksessa [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
muuttaa vain sitä, mitkä rekisterin suojamekanismit ohitetaan; se ei anna asiakkaan
ohittaa väliohjelmistoa. Pakollisia avain- ja ryhmäkohtaisia suojamekanismikäytäntöjä
seurataan v4:n RFC-ehdotuksessa [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Katso [Kattavuus ja rajoitukset](#coverage-and-limits).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta (chat-reittiperhe, joka on lueteltu kohdassa
[Kattavuus ja rajoitukset](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` muodostaa ohituslistan API-avaimesta, rungosta
   ja otsakkeista.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojaukset nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojaukset kirjataan tilaan `skipped`.
   - Kunkin suojauksen `preCall` voi muokata hyötykuormaa kentän `modifiedPayload` kautta.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojauksen hylkäysvastauksen.
3. (Mahdollisesti muokattu) hyötykuorma siirtyy yhdistelmäreititykseen ja lähetetään
   taustapalveluun.
4. **Vain ei-suoratoistettaville vastauksille:** kun vastaus on koottu,
   `guardrailRegistry.runPostCallHooks(...)` suorittaa saman ketjun
   vastaukselle. Tässä vaiheessa `block: true` hylkää taustapalvelun vastauksen ja palauttaa HTTP 400:n. Suoratoistettavat vastaukset ohittavat tämän vaiheen kokonaan.

Poikkeuksen heittävät suojaukset kirjataan merkinnällä `error: <message>`, ja niistä kirjoitetaan lokiin kutsulla
`logger.warn`, mutta ketjun suoritus jatkuu — virhetilanteessa salliminen on tarkoituksellista.

## Kattavuus ja rajoitukset

Suojausrekisteri on kytketty vain chat-käsittelyketjuun. Nämä rajoitukset on
lukittu testeillä `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` ja
`tests/unit/guardrail-pipeline-characterization.test.ts`; päivitä näitä testejä
harkitusti, kun toiminta muuttuu.

### Missä koukut suoritetaan

| Koukku / ohjaus                                    | Suorituskohde                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                  | `handleChat`-käsittelijän (`src/sse/handlers/chat.ts`) käsittelemät pyynnöt: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (ja `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` sekä Telegram-chat-välityspalvelin. Myös hallintapaneelin testipäätepiste `/api/guardrails/test`. Kutsua edeltävä esto palauttaa HTTP 400:n. |
| `runPostCallHooks`                                 | Vain **ei-suoratoistettavat** chat-vastaukset (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Suoratoistettavat vastaukset eivät koskaan päädy tähän.                                                                                                                                                                                                                                                                                                 |
| Henkilötiedot suoratoistossa                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), joka kytketään käsittelyketjuun tiedostossa `streamingPipeline.ts`, kun `PII_RESPONSE_SANITIZATION` on käytössä. Se ei ole suojaus, joten käytöstäpoistokanavat eivät vaikuta siihen.                                                                                                                                                                                                           |
| Injektiosuojauksen väliohjelmisto (vanha toteutus) | Jokainen kehotteen sisältävä `/v1`-reitti, myös chat-reittiperhe (katso [reittien kattavuus](#injection-guard-route-coverage--red-team-phase-8--block-d)). Vain kehoteinjektiot.                                                                                                                                                                                                                                                                              |

### Mitä ei kateta

- **Media-, upotus- ja datareitit** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) eivät koskaan päädy rekisteriin.
  Henkilötietojen peittämistä, tunnistetietojen peittämistä tai modaliteettisiltaa
  ei suoriteta niissä. Niiden ainoa tarkistus on vanha injektiosuojauksen väliohjelmisto.
- **Suoratoistettaviin vastauksiin** ei sovelleta kutsun jälkeisiä suojauksia: ei kutsun jälkeistä `pii-masker`- tai
  `credential-masker`-suojausta eikä kutsun jälkeistä estoa. Vain suoratoiston henkilötietomuunnosta
  sovelletaan (kun `PII_RESPONSE_SANITIZATION` on käytössä). Suoratoistettavassa vastauksessa
  takaisin toistettuja tunnistetietoja ei peitetä.
- **Käytöstäpoistokanavat ja väliohjelmisto (tarkoituksellinen toiminta):** väliohjelmisto arvioi
  kehoteinjektiot omalla `evaluatePromptInjection()`-kutsullaan välittämättä
  kutsujan hallitsemaa käytöstäpoistolistaa. `block`-tila on pakollinen
  suojaraja, jota kutsujan hallitsemat käytöstäpoistot eivät voi ohittaa edes chat-reittiperheen reiteillä
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Suojauksen
  `prompt-injection` poistaminen käytöstä ohittaa vain rekisterin suojauksen.

### Mitkä vaiheet näkevät vastauksen ennen kutsun jälkeistä käsittelyä

Ei-suoratoistettavassa käsittelyssä järjestys on: muistitietojen poiminta → sisäänrakennettujen työkalujen
suoritus → kutsun jälkeiset suojaukset → poistuminen kutsun jälkeisen eston vuoksi → tallennus semanttiseen välimuistiin.

- **Muistin poiminta** ja **työkalujen suoritus** näkevät vastauksen ennen kuin kutsun jälkeiset
  suojamekanismit voivat muokata sitä tai estää sen. Muutoksesta
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) lähtien muistin
  poiminta käsittelee poimitun tekstin `sanitizePII`-funktiolla, kun
  `PII_RESPONSE_SANITIZATION` on käytössä (sekä suoratoistossa että ilman suoratoistoa), mutta
  vastaus, jonka kutsun jälkeiset suojamekanismit myöhemmin estävät, on silti jo annettu muistin ja
  työkalujen käyttöön.
- **Semanttinen välimuisti** tallentaa vastauksen kutsun jälkeisen käsittelyn jälkeen, joten se tallentaa
  muokatun vastauksen, eikä estettyä vastausta koskaan tallenneta välimuistiin. Välimuistin tietueet
  avainnetaan API-avaimen mukaan.

## Määritykset

Sisäänrakennettujen suojamekanismien lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                         | Vaikutus                                                                                               |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei muokkaa injektiotekstiä.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | Vähimmäisvakavuus, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | Muuttujan `INPUT_SANITIZER_BLOCK_THRESHOLD` vanha alias.                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (jatkokäsittelyssä) | Ohjaa vastauksen peittotoimintoa.                                                                      |

Modality Bridge -suojamekanismit lukevat ajonaikaiset määritykset tietokantapohjaisesta
asetusvarastosta (`getSettings()`), eivät ympäristömuuttujista. Visionin ensisijaiset avaimet ovat
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Vanhoja
`visionBridge*`-avaimia hyväksytään vain dokumentoituna yhden syklin ajan käytettävänä
lukemisen varamenettelynä; hallintapaneeli käyttää kirjoituksissa ensisijaisia avaimia. Oletusarvot ja varamenettelyn
ratkaisulogiikka ovat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat
vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää avaimia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä yhteisiä
`modalityBridgeCache*`-asetuksia. Äänellä ei ole vanhoihin avaimiin perustuvaa varamenettelyä, koska nämä
avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää avaimia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` sekä yhteisiä `modalityBridgeCache*`-asetuksia.
Se on oletusarvoisesti pois käytöstä, koska FFmpeg/ffprobe ovat valinnaisia käytönaikaisia
riippuvuuksia ja videoruutujen kuvailu lisää viivettä ja mallikustannuksia.

## Mukautetut suojamekanismit

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

Vaiheet:

1. Luo `src/lib/guardrails/myGuardrail.ts`, joka periytyy luokasta `BaseGuardrail`.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää funktiosta `registerDefaultGuardrails`) tai
   kutsu `guardrailRegistry.register(...)` ajon aikana — rekisteri korvaa
   kaikki aiemmat suojamekanismit, joilla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä funktiota `resetGuardrailsForTests()` testien välillä, jotta lähtötila on tunnettu.
Anna parametriksi `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojamekanismit. Vision Bridge tukee riippuvuuksien
injektointia (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liitoskohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja litteroinnille. Testeillä voidaan siten testata molemmat kulut ilman tietokanta-
tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — yhteinen tunnistin, jota käytetään
  kehoteinjektioiden tunnistamiseen ja henkilötietojen peittämiseen
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletusasetukset ja
  luettelo malleista, joille silta on pakollinen
- `src/shared/constants/modalityBridgeDefaults.ts` — Visionin ja Audion yhteiset ajonaikaiset oletusasetukset
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (piirikatkaisija, jäähdytysajat)
- `docs/reference/ENVIRONMENT.md` — kattava ympäristömuuttujien viiteopas

## Injektiosuojauksen reittikattavuus ja red team -testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka vastaanottavat käyttäjien kehotteita. Se noudattaa asetusta `INJECTION_GUARD_MODE` (oletus `warn` = vain lokitus;
`block` = palauttaa HTTP 400 -vastauksen ja koodin `SECURITY_001`).

| Tyyppi                   | Reitit                                                                                                                                               | Oletustila |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (olemassa olevat) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiivinen           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data                     | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team -testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että jokainen reitti estää
OWASP-LLM-testiaineiston tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa testiluotauksia (ohitetaan ilman salaisuutta).
`moderations` on mukana johdonmukaisuuden vuoksi. Estotila on pakollinen suojaraja: `evaluatePromptInjection()`
ohittaa väliohjelmiston sille välittämän pyyntökohtaisen käytöstäpoistoluettelon, joten `disabledGuardrails`
**ei** vapauta reittiä suojauksesta ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Öisin ajettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi tehtävää:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Jokainen hyökkäystapaus (esim. ”ohita kaikki
  aiemmat ohjeet…”, DAN-tyyliset suojausten ohitukset) varmistaa, että vastauksessa on
  `error.code === "SECURITY_001"`, eli suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin valitsimilla `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Edellyttää
  palveluntarjoajan salaisuutta (`PROMPTFOO_PROVIDER_KEY`); ohitetaan hallitusti, ja komennon lopussa on
  `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojausapufunktioiden (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu jokaiseen kehotteita sisältävään `/v1`-reittiin; kehoteteksti poimitaan kentistä
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
funktiolla `extractMessageContents()` tiedostossa `src/shared/utils/inputSanitizer.ts`.

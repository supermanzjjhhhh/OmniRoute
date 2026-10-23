# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse údarásach:** `src/lib/guardrails/`
> **Nuashonraithe go deireanach:** 2026-10-17 — v3.8.52 (cuireadh [Clúdach agus teorainneacha](#coverage-and-limits) leis:
> na bealaí agus na conairí freagartha a shroicheann na crúcaí, na ceanntásca díchumasaithe cumaiscthe (#16412), mód blocála
> insteallta mar theorainn éigeantach (#16413), agus cad a fheiceann freagra roimh an gcéim i ndiaidh an ghlao)

Cuireann ráillí cosanta sábháilteacht, beartas agus claochluithe ábhair i bhfeidhm ag an teorainn
idir OmniRoute agus soláthraithe réamhtheachtacha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus
freagraí réamhtheachtacha (`postCall`) a iniúchadh (agus, go roghnach,
iad a dhiúltú, a chlaochlú nó nótaí a chur leo).

Tá an córas **oscailte i gcás teipe**: má chaitheann ráille cosanta eisceacht le linn a fhorghníomhaithe, déanann an chlárlann
an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile seachas an
t-iarratas a chur ar teip. Is cinneadh follasach é blocáil (`block: true`), ní timpiste riamh.
Is é an t-aon eisceacht ná iarratas a cuireadh ar ceal: nuair a chuirtear `signal` an ghlaoiteora ar ceal,
diúltaíonn ráille cosanta a chaitheann eisceacht do rith an chrúca seachas a bheith scipeáilte.

**Ní** ritheann na crúcaí ar gach bealach ná ar gach freagra. Léigh
[Clúdach agus teorainneacha](#coverage-and-limits) sula mbraitheann tú ar ráille cosanta mar
rialú slándála.

## Ráillí Cosanta Ionsuite

Lódálann an chlárlann sé ráille cosanta go huathoibríoch in ord tosaíochta agus í á hiompórtáil
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Céim(eanna)    | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ritheann uimhreacha tosaíochta níos ísle **ar dtús**.

### Droichead Amhairc (`visionBridge.ts`) — Droichead Módúlachta PR-1

Tá meiteashonraí follasacha clárlainne/sonraíochta
`supportsVision:false` ag bunsamhail GLM 5.3 agus ag `glm-5.3-{low,high,max}`. Is samhlacha
a bhfuil cumas amhairc dúchasach acu fós iad leaganacha GLM 5.3 Flash. Téann bealach `/v1/messages` Claude Code isteach sa
slabhra comhroinnte ráillí cosanta réamhghlao `handleChat` **roimh** an aistriú ó Claude go OpenAI;
ní mór cur síos a dhéanamh ar íomhánna neadaithe i dtorthaí uirlise `Read`, nó iad a láimhseáil,
sula n-ardaíonn an t-aistriú sin iad go hábhar `image_url` OpenAI (#17069).

Idircheapann sé iarratais ina bhfuil íomhánna agus atá dírithe ar **shamhlacha gan chumas amhairc**, agus
déanann sé an t-iarratas iomlán a athródú chuig samhail a bhfuil cumas amhairc aici nó cuireann sé
cur síos téacs a tháirgeann samhail amhairc inchumraithe in ionad na gcodanna íomhá roimh
an nglao réamhtheachtach. Ligeann sé seo do sholáthraithe téacs amháin
pálastaí ilmhódacha a láimhseáil go trédhearcach.

Sreabhadh:

1. Scipeáil má thacaíonn an spriocshamhail le hamharc cheana féin (mura bhfuil sí ar an
   liosta droichid éigeantaigh `isVisionBridgeForcedModel`).
2. Bain codanna íomhá amach trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a tharmligeann chuig an **mbrathadóir meán
   aontaithe** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — an
   t-aon fhoinse údarásach a chomhroinntear leis an scagaire comhoiriúnachta teaglama.
   Níl eastóscadh ceadaithe ach do na struchtúir ar féidir le `replaceImageParts` iad a chur
   ar ais ina n-áit (an conradh eastósctha↔athsholáthair): `image_url` OpenAI, base64 Anthropic
   `source.type:"base64"`, URL Anthropic `source.type:"url"`, agus
   `input_image` API Responses. Déantar íomhánna comhoiriúnacha atá neadaithe laistigh de
   `tool_result.content` Claude Code agus aschuir uirlisí Responses a eastóscadh agus a
   athsholáthar ag a gconairí bunaidh freisin; is ábhar don scagaire teaglama iad struchtúir nach bhfuil iontu ach táscairí
   agus ní eastósctar iad.
   Scipeáil mura bhfaightear aon cheann.
3. Réitigh an chumraíocht am rite trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): tugtar tús áite d'eochracha nua
   socruithe `modalityBridge*`; fanann eochracha oidhreachta `visionBridge*` mar **rogha chúltaca
   ar feadh timthriall amháin** (fuinneog aischurtha). Scipeáil roimh aon trasnú meán nuair atá an
   droichead díchumasaithe.
4. Cinneann an roghnóir móid (`modalityBridgeVisionMode`, féach an tábla thíos)
   idir athródú agus cur síos. Tugann athródú `modifiedPayload` ar ais gan ach `model`
   athraithe, chomh maith le meiteashonraí `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conair an chur síos: cuir teorainn `maxImages` le líon na n-íomhánna, cum an leid atá feasach ar an tasc,
   seiceáil taisce na gcur síos, glaoigh ar an tsamhail amhairc **go comhthreomhar**
   (`Promise.allSettled`), agus insteall codanna téacs `[Image N]: <description>`
   ina n-áit. Tugann cur síos teipthe `null` ar ais: coinnítear an íomhá amh do
   spriocanna anaithnide nó spriocanna a bhfuil cumas amhairc acu (#4012), ach faigheann **sprioc dhíreach
   atá deimhnithe mar sprioc téacs amháin** nó teaglama gan chumas amhairc ar bith blúire téacs follasach
   `(unavailable — no vision-capable provider connected)` le haghaidh
   gach íomhá gan chur síos, lena n-áirítear teipeanna páirteacha agus íomhánna thar
   theorainn na nglaonna cur síos (#17069). Fanann an rogha chúltaca reatha do chur síos teaglama
   nuair a theipeann ar gach iarracht i bhfeidhm (#8430).
6. Tabhair `modifiedPayload` + meiteashonraí (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) ar ais.

#### Roghnóir móid (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heorastach oidhreachta, gan athrú (#6640/#7204): athródáiltear samhlacha neamh-chomhcheangailte/`auto/` chuig an tsamhail físe is fearr mura bhfuil dintiúir inúsáidte ag an tsamhail bhunaidh cheana féin (sa chás sin, déantar cur síos); déanann spriocanna comhcheangailte cur síos i gcónaí.                                                        |
| `describe` |             | Déan cur síos i gcónaí — scipeáiltear an bloc athródaithe go hiomlán; freagraíonn an tsamhail a roghnaigh an t-úsáideoir i gcónaí.                                                                                                                                                                                                                       |
| `reroute`  |             | Cuir athródú i bhfeidhm: seachnaítear an chosaint a choinníonn an tsamhail a bhfuil dintiúir aici. Tá an chosaint dintiúr don **sprioc** athródaithe fós i bhfeidhm — nuair nach bhfuil aon sprioc físe inúsáidte ann, cuireann an droichead bac le hearráid shoiléir seachas cur síos a dhéanamh nó íomhánna amha a sheoladh chuig sprioc téacs amháin. |

Déanann na móid éigeantacha gearrchiorcad **sula** ritheann an heorastach uathoibríoch; tá iompar `auto`
comhionann beart ar bheart leis an ráille cosanta a bhí ann roimh PR-1.

#### Raon feidhme na heochrach API (`visionBridgeKeyScope.ts`)

Nuair a chuireann eochair API an ghlaoiteora srianta ar `allowedConnections`, ar linnte cuóta
(`allowedQuotas`) nó ar shamhlacha (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an droichead ach
samhlacha athródaithe agus tuairiscithe a bhfuil cead ag an eochair iad a úsáid, ar naisc a bhfuil cead ag an eochair
iad a úsáid. Ansin téann an glao tuairiscithe trí fhéinlúb OmniRoute i gcónaí leis
an gceanntásc `x-omniroute-self-loop-key-id`, ionas go gcuireann an t-iarratas comhrá a fhaightear
beartas na heochrach sin maidir le naisc agus samhlacha i bhfeidhm arís. Ní thugann `enforceApiKeyPolicy()`
aird ar an gceanntásc sin ach in éineacht le comhartha iompróra na féinlúibe, mar sin ní féidir leis ach
rochtain a chúngú, agus diúltaítear d'aitheantas nach féidir a réiteach.

Mura bhfuil aon samhail físe ceadaithe don eochair, diúltaíonn **sprioc atá deimhnithe mar sprioc téacs
amháin** don iarratas íomhá go háitiúil le HTTP 400 soiléir seachas
bearta na híomhá a chur ar aghaidh chuig seirbhís in aghaidh srutha nach bhfuil ábalta iad a láimhseáil (#17069). I gcás spriocanna a bhfuil
cumas físe anaithnid nó dúchasach acu, coinníonn an cosán tuairiscithe an t-iompar a bhí aige roimhe seo:
ligean ar aghaidh i gcás teipe (meiteashonraí `{ skipped: true, reason: "no_permitted_vision_model" }`).
Iompraíonn iarratais gan eochair, agus eochracha gan na srianta seo, díreach mar
a rinne siad roimhe seo.

#### Leid tuairiscithe atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

Is é **fíor** an réamhshocrú. Cuireann `composeVisionPrompt()` (`visionBridgeHelpers.ts`) téacs
**na teachtaireachta deireanaí ón úsáideoir** (teasctha go 500 carachtar) leis an mbunleid
tuairiscithe, rud a dhíríonn an cur síos ar an rud a d'iarr an t-úsáideoir i ndáiríre
(patrún codex-vision-proxy) agus a iarrann ar an tsamhail físe téacs infheicthe a thras-scríobh.
Nuair atá an bhratach múchta — nó mura bhfuil téacs úsáideora ann — úsáidtear an bhunleid gan athrú.

Iarrann iarratas na féinlúibe tuairiscithe féin atá comhoiriúnach le OpenAI (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) `image_url.detail: "high"` i gcónaí —
gan choinníoll, do gach glaoiteoir/soláthraí, gan a bheith ag brath ar aon chomhartha ón gcliant.
Laghdaíonn sampláil ar bheagán sonraí cruinneas OCR don tasc tras-scríofa téacs
go díreach a iarrann an leid seo, mar sin iarrann an glao tuairiscithe féin ardleibhéal
sonraí i gcónaí, is cuma cén leibhéal sonraí a d'úsáid an t-iarratas bunaidh isteach. Ní
bhaineann sé seo ach le corp an iarratais inmheánaigh tuairiscithe; ní athraíonn sé an chaoi
a gcuireann OmniRoute `image_url.detail` an ghlaoiteora féin ar aghaidh ar an bpríomhiarratas —
cuirtear an réamhshocrú sin i bhfeidhm ar leithligh, agus do chliaint OpenCode a bhraitear amháin, in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Níl aon réimse `detail` i mbrainse
fhormáid tarchurtha Anthropic den fhéinlúb tuairiscithe
agus ní dhéanann ceachtar den dá réamhshocrú difear dó.

#### Uasteorainn aschuir an tuairiscithe (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Ciallaíonn `0` (an réamhshocrú) **gan uasteorainn** — cuirtear an cur síos a thugann
`callVisionModel()` ar ais ar aghaidh gan athrú, rud a chaomhnaíonn an t-iompar
atá ann cheana. Teascann aon luach sa raon 100–50000 an cur síos le
hiarmhír `…` sula n-ionsáitear ar ais é mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR a bhfuil go leor sonraí iontu agus a dteastaíonn an tras-scríbhinn iomlán
ón tsamhail iartheachtach dóibh; ísligh é chun teorainn a chur le húsáid comharthaí ar shamhlacha físe foclacha.
Tá réimse an deais ar phainéal Ardroghanna an chluaisín Fís
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) agus ardaíonn sé aon
luach idir 1 agus 99 go dtí an íosteorainn 100 agus fágann sé `0` sainráite
gan athrú — is luach bailí Zod ann féin é `0`
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ní hé
an réamhshocrú "gan socrú" amháin é.

#### Taisce tuairiscithe (`modalityBridge/bridgeCache.ts`)

Taisce LRU + TTL sa chuimhne le haghaidh aschuir tuairiscithe, comhroinnte ar fud an phróisis.
Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
frámaíocht réimíre faid (gan imbhuailtí ag teorainneacha réimsí). Is í an chomhpháirt samhla
an tsamhail droichid **chumraithe**, ní an tsamhail a d'fhreagair i ndáiríre —
féadfaidh `callVisionModel` malairt a úsáid go hinmheánach, agus dá n-úsáidfí eochair do gach iarracht,
dhéanfaí an taisce a ilroinnt. Ní thaisctear tuairiscí teipthe riamh. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú íomhánna cianda (féinghlao describe / aisghabháil base64)

Nuair a aisghabhann an droichead íomhá **chianda** é féin — féinghlao describe
Anthropic agus an tiontú base64 i bhformáid sreinge claude
(`ensureBase64ImagesForClaudeWire`), araon trí
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — cuirtear an URI
sonraí a thagann as trí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula leabaítear é san iarratas ar an
tsamhail amhairc. Laghdaítear íomhánna rómhóra go **ciumhais fhada 2048px** (ag teacht
leis an teorainn athraithe méide a chuireann OpenAI/Anthropic i bhfeidhm cheana ar thaobh an fhreastalaí), rud a laghdaíonn
líon na mbeart uaslódála agus an mhoill gan an méid a fheiceann an tsamhail amhairc a athrú. Úsáidtear
`sharp` chun an méid a athrú, agus lódáiltear é trí iompórtáil dhinimiciúil: ar ardán nach
féidir a dhénártha dúchasach a lódáil air, **ní chaitheann** `normalizeDataUri()` **eisceacht riamh** — titeann sé siar
ar na bunbhearta a chur ar aghaidh gan athrú, mar sin leanann an chonair describe/tiontaithe base64
ag obair i gcónaí. Cuirtear bearta nach íomhá iad (aisghabháil nár thug
íomhá indechódaithe ar ais) ar aghaidh gan athrú freisin. Tá an normalú seo
teoranta d’íomhánna a aisghabhann an droichead dá fhéinghlao féin — ní chuirtear
i bhfeidhm riamh é ar phálasta amh an ghlaoiteora a chuirtear ar aghaidh gan athrú, i gcomhréir leis an
bprionsabal nach ndéantar athruithe ach le toiliú sainráite (Riail Dhocht #20).

#### Scéimre socruithe + aistriú

Déantar na heochracha nua `modalityBridge*` a bhailíochtú le Zod in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, an triúr `modalityBridgeCache*`, agus an
grúpa `modalityBridgeAudio*` a úsáideann an Droichead Fuaime. Déanann an t-aistriú
`141_modality_bridge_settings.sql` na luachanna oidhreachta
`visionBridge*` atá ann cheana a chóipeáil chuig na heochracha nua comhfhreagracha (idimpitéinteach, ní fhorscríobhann sé riamh
luach `modalityBridge*` atá socraithe ag oibreoir); glactar leis na heochracha oidhreachta fós mar
rogha chúltaca léitheoireachta ar feadh timthriall eisiúna amháin.

#### Ceanntásc trédhearcachta + staitisticí

Bíonn an ceanntásc seo ag freagraí arna gclaochlú le describe:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tógtha ag `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
curtha leo ag `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Ní fhaigheann iarratais athródaithe **aon** cheanntásc — níor athraíodh an pálasta agus tá
an t-athrú samhla le feiceáil cheana sa réimse `model` i gcorp an fhreagra.

Tugann `GET /api/modality-bridge/stats` (fíordheimhniú bainistíochta, ar an leibhéal céanna le
`GET /api/settings`) na háiritheoirí in-chuimhne de réir módúlachta
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ar ais le haghaidh `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, seachas gach iarracht, mar
ainmneoir; ní chumann oibríocht gan tomhas ama sampla náid milleasoicind.
Fanann `bridged` mar ailias atá comhoiriúnach ar gcúl do
thiontuithe rathúla; ní incrimintíonn iarrachtaí teipthe é.
Athshocraítear na háiritheoirí nuair a atosaítear an próiseas, d’aon ghnó
(teiliméadracht, ní cuntasaíocht).

#### Cumraíocht an deais

Tá an leathanach deais tiomnaithe ag
`/dashboard/settings/modality-bridge`. Coinníonn a chluaisíní `Vision`, `Audio`,
agus `Video`, ar féidir díriú orthu le URL, paraiméadair an iarratais agus luach `tab` á athrú.
Cuireann an cluaisín Amhairc ar fáil cumasú, mód, roghnú samhla (an réamhshocrú
uathoibríoch san áireamh), leideanna atá feasach ar an tasc, ardteorainneacha ama/íomhánna/fhaid cur síos/taisce,
áiritheoirí
am rite, agus iarratas samplach faoi chosaint. Tá an cluaisín Fuaime beo freisin: cuireann sé ar fáil
cumasú, roghnóir samhla STT amháin le rogha Uathoibríoch, teorainneacha ama/uasfhaid gearrthóige, áiritheoirí
fuaime, agus tástáil shamplach `input_audio`. Tá an cluaisín Físe feidhmiúil: tuairiscíonn sé
staid am rite FFmpeg/ffprobe — ceann amháin de cheithre staid shainráite sa chomhéadan (`unknown` agus
an tóireadóir ar siúl nó mura bhféadfadh sé críochnú, `restricted` ar
óstach deais nach seoladh lúb siar é, áit a scipeáiltear an tóireadóir ar thaobh an chliaint, `unavailable` tar éis tóireachta
a dheimhníonn go bhfuil siad in easnamh, nó `available` leis na leaganacha FFmpeg/ffprobe) — sábhálann sé
teorainneacha cumasaithe/samhla/fráma/físe/ama, scagann sé an roghnóir samhla chun samhlacha atá in ann
íomhánna a phróiseáil a thaispeáint, agus cuireann sé áiritheoirí físe ar fáil.

Is nasc comhoiriúnachta chuig an
leathanach nua anois é an seanchárta Droichid Amhairc faoi shocruithe IS; ní choinníonn sé an dara cóip den fhoirm a thuilleadh. Nascann Soláthraithe Meán freisin
sreafaí oibre Íomhá-go-Téacs agus Caint-go-Téacs leis na cluaisíní comhfhreagracha den Droichead
Módúlachta gan an timpeallacht turgnamhaíochta Caint-go-Téacs atá ann cheana a bhaint.

**Seachbhóthar iontrála don lúb féin:** nuair a ródáiltear an glao describe trí
lúb féin `/v1` OmniRoute féin (samhail soláthraí neamhchaighdeánach), seolann an fo-iarratas
`x-omniroute-admission-bypass: internal` agus fíordheimhnítear é leis an dintiúr
lúibe féin a réitíodh — an luach fairtheora áitiúil `sk_omniroute` sa mhód áitiúil, nó an
eochair timpeallachta `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` atá cumraithe ag an oibreoir (#1350) ionas
gur féidir le himscaradh `REQUIRE_API_KEY=true` an glao describe a rith fós. Ní thugtar
aird ar an seachbhóthar ach do na dintiúir bheachta sin, mar sin ní féidir le cliaint sheachtracha an
ceanntásc a úsáid chun iontráil a sheachaint.

Tá na réamhshocruithe oidhreachta in `src/shared/constants/visionBridgeDefaults.ts`; tá
na réamhshocruithe nua móid/feasachta ar thasc/taisce agus réiteoir na socruithe in
`src/shared/constants/modalityBridgeDefaults.ts`. Cuireann an ráille cosanta rogha tógálaí
`deps` ar fáil ionas gur féidir le tástálacha cur chun feidhme bréige de `getSettings` agus
`callVisionModel` a instealladh.

### Droichead Fuaime (`audioBridge.ts`) — Droichead Módúlachta PR-3

Idircheapann sé iarratais chomhrá ina bhfuil fuaim sula sroicheann siad sprioc nach
eol go nglacann sí le hionchur fuaime. Ní athródaíonn sé an t-iarratas comhrá riamh: déantar codanna fuaime a
thras-scríobh tríd an gcríochphointe ilpháirteach atá ann cheana agus atá comhoiriúnach le OpenAI, agus
leanann an tsamhail chomhrá roghnaithe ar aghaidh le tras-scríbhinní téacs.

Sreabhadh:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Bíonn tosaíocht
   ag meiteashonraí sainráite ó chlár na soláthraithe, ansin ag meiteashonraí statacha
   na samhla, agus ansin ag `modalities_input` sioncronaithe. Is ionann liosta
   dearbhaithe ionchuir gan `audio` agus `false`; mura bhfuil aon fhianaise ar
   chumas ann, fanann sé mar `null`. Gníomhachtaíonn `false` agus `null` araon an
   droichead coimeádach, ach seachnaíonn `true` é.
2. Réitigh socruithe `modalityBridgeAudio*` agus bain páirteanna fuaime barrleibhéil
   is féidir a spliciú as gach teachtaireacht tríd an mbrathadóir comhroinnte
   `detectMediaParts()`. Is iad na formáidí tarchuir a dtacaítear leo ná
   `input_audio` de chuid OpenAI, `audio_url`, agus
   `source.media_type: "audio/*"`. Braitear fuaim neadaithe chun críocha ródaithe ach
   ní bhaineann an chonair splicithe í. Cuirtear teorainn leis an obair trí
   `modalityBridgeAudioMaxClips`; fágtar páirteanna ina dhiaidh sin gan athrú.
3. Cloígh le `provider/model` cumraithe, nó lig do `selectAudioBridgeModel()`
   dul trí `AUDIO_TRANSCRIPTION_PROVIDERS` in ord cobhsaí na catalóige agus an chéad
   samhail a roghnú a bhfuil dintiúr gníomhach inúsáidte soláthraí aici.
4. Tiontaíonn `callAudioTranscription()` fuaim base64/data-URI ina `file`
   ilpháirteach, nó íoslódálann sé `audio_url` cianda tríd an gcosantóir eis-sreafa
   a cheadaíonn cinn scríbe poiblí amháin, le pionáil DNS agus teorainn 25 MB.
   Ansin seolann sé an comhad agus an tsamhail roghnaithe le POST chuig an
   bhféinlúb áitiúil `/v1/audio/transcriptions`, agus fíordheimhnítear é le
   `resolveSelfLoopBearer()`. Déanann an bealach trascríofa atá ann cheana
   gnáthchuardach dintiúr, láimhseáil tréimhsí fuaraithe/teorainneacha ráta, agus
   seoladh chuig an soláthraí.
5. Cuireann glaonna rathúla `[Audio N]: <transcript>` in ionad a bpáirteanna.
   Ritheann glaonna le `Promise.allSettled`: caomhnaíonn teip aonair an pháirt
   fuaime bhunaidh sin (conradh #4012). Má theipeann ar gach glao agus má tá sé
   cruthaithe gurb é `supportsAudio === false` staid na sprice, déantar
   `[Audio N]: (unavailable — no STT provider connected)` de na páirteanna
   (conradh #8430). I gcás sprice anaithnid (`null`), fágtar toradh ina dteipeann
   ar gach glao gan athrú. Faigheann sprioc atá cruthaithe a bheith téacs-amháin
   agus nach bhfuil aon dintiúr STT inúsáidte aici an t-ionadchoinneálaí sainráite
   céanna gan glao líonra a dhéanamh.

Úsáideann tras-scríbhinní rathúla taisce LRU/TTL Modality Bridge atá roinnte ar fud
an phróisis. Comhcheanglaíonn an eochair an tagairt fuaime, an lipéad oibríochta
cobhsaí `audio-transcription`, agus an tsamhail STT roghnaithe; ní chuirtear
teipeanna sa taisce riamh. Nuashonraíonn iarrachtaí fuaime na cuntair chomhroinnte
`bridged`, `cacheHits`, `failures`, agus `lastUsedAt`.
Bíonn
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ag gabháil le
freagraí claochlaithe; ní fhaigheann iarratais gan athrú mír Audio Bridge.

Stóráiltear socruithe am rite sa bhunachar sonraí agus bailíochtaítear iad le Zod:

| Eochair                       | Réamhshocrú | Raon                   |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Uathoibríoch nó ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Fanann an taisce chomhroinnte faoi rialú `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Idircheapann sé páirteanna físe barrleibhéil in `messages` Chat Completions agus
in `input` an Responses API sula nglaotar ar sprioc nach eol tacaíocht dhúchasach
físe a bheith aici. Is iad na formáidí a dtacaítear leo ná `input_video`,
`video_url`, `video_source`, URLanna HTTPS, agus URIanna sonraí
`data:video/*;base64,...`. Ní chaitear le gnáthainmneacha comhaid i dtéacs mar
fhíseáin.

Tá `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) freagrach as trasnú an
iarratais, an tseiceáil cumais/beartais, comhiomlánú in aghaidh an iarratais, agus
pálasta an fhreagra.
Tá an obair in aghaidh an fhíseáin — fáil, taisce an toraidh iomláin, cur síos ar
sheicheamh frámaí (a chumascann aon tras-scríbhinn fuaime a dhearbhaíonn an
glaoiteoir), agus méadrachtaí/tobscoir/glanadh in aghaidh na hiarrachta — folaithe
taobh thiar de `processVideoPart` in
`videoBridgePipeline.ts`, a ghlaotar uair amháin in aghaidh gach páirte físe
laistigh de lúb `preCall`.
Sainmhíníonn an modúl sin freisin na teorainneacha sainráite poirt
`VideoMediaBrokerPort` (bearta a fháil agus frámaí sampláilte a bhaint),
`VideoAudioTranscriptionPort` (tras-scríbhinn fuaime arna dearbhú ag an nglaoiteoir
a chumasc leis na fotheidil shampláilte), agus
`VideoDrilldownPort` (teorainn bhuanseasmhachta na mioniniúchta frámaí; níl sé
nasctha le `processVideoPart` fós — ní scríobhann ach an bealach ar leith
`/api/modality-bridge/video/drilldown` iontrálacha mioniniúchta faoi láthair).

Ní iompórtálann ná ní ghlaonn conair phoiblí iarratais `/v1` ar fhophróiseas riamh.
Íoslódáiltear físeáin chianda faoi theorainn 50 MiB; tá teorainn choimeádach 36 MiB
ar mhéid díchódaithe gach físeáin base64 inlíne ionas gur féidir leis an gclúdach
samhla/teachtaireachtaí/frámúcháin fanacht laistigh den teorainn iontrála 50 MiB
d'iarratais phoiblí JSON. Seiceáiltear fad inlíne agus meastacháin ar an méid
díchódaithe sula leithdháiltear cuimhne. Tá HTTPS riachtanach ar an URL cianda
tosaigh agus ar gach atreorú, agus úsáidtear an cosantóir eis-sreafa atá ann
cheana a cheadaíonn cinn scríbe poiblí amháin, le pionáil DNS. Trasnaíonn na bearta
ansin an teorainn bheacht inmheánach bróicéara
`POST /api/modality-bridge/video/extract`. Tá an bealach sin
`LOCAL_ONLY` agus `SPAWN_CAPABLE` araon, ní ghlacann sé ach le hiarratas ó lúb
aisfhillte iontaofa atá fíordheimhnithe in aghaidh an phróisis, agus ní ghlacann sé
riamh le URL, conair sa chóras comhad, comhad inrite, ná liosta argóintí.
Cuireann píblíne mhéid choirp an API agus léitheoir incriminteach coirp an
láimhseálaí teorainn 50 MiB ar ionchur an bhróicéara i bhfeidhm go neamhspleách ar
a chéile. Ritheann a scuaine theoranta aon bhaint amháin ag an am, ceadaíonn sí
ceithre jab ar feitheamh, agus cuireann sí teorainn 100 MiB ar ionchur ar feitheamh.

Laistigh den bhróicéir, léann `ffprobe` comhad áitiúil príobháideach; eisiann an liosta
ceadaithe seasta formáidí seinnliostaí agus forléargas. I gcás coimeádán ceadaithe
de theaghlach MOV, fanann tagairtí seachtracha sonraí MOV díchumasaithe de réir
réamhshocraithe, agus ní chumasaíonn an t-ordú seasta iad. Úsáideann `ffprobe` agus `ffmpeg` araon
bánliosta prótacal nach gceadaíonn ach `file`, snáithe amháin, eagair argóintí sheasta, gan bhlaosc,
agus comhaid inrite a aimsítear trí `PATH`. Ní iarrthóirí inseinnte iad sruthanna clúdaigh
de chineál pictiúr ceangailte. Ní mór do gach sruth inseinnte na teorainneacha a chomhlíonadh, agus tugtar
tosaíocht do shruth réamhshocraithe sainráite roimh an rogha chúltaca chinntitheach
leis an innéacs is ísle. Tá físeáin teoranta do 600 soicind, 8,192 picteilín in aghaidh an tois,
agus 33,554,432 picteilín foinse. Samplálann FFmpeg 1–16 fhráma JPEG ag lárphointí, laghdaíonn sé
an imeall fada go 1,024 picteilín ar a mhéad gan ionchuir níos lú a mhéadú, agus
ní fhaigheann sé URL riamh. Is é `uniform` an sampláil réamhshocraithe. Déanann na polasaithe roghnacha
`scene_aware` agus turgnamhacha `segment_aware` pas seasta FFmpeg breise amháin
ar an sruth áitiúil atá bailíochtaithe cheana féin, roghnaíonn siad stampaí ama radhairc
`showinfo` faoi theorainn, agus téann siad ar ais go cinntitheach chuig na
lárphointí aonfhoirmeacha céanna má theipeann ar an mbrathadóir, má théann an t-am in éag, má bhíonn an t-aschur míchumtha, nó má bhíonn an
tacar iarrthóirí folamh. Leithdháileann an modh atá feasach ar mhíreanna samplaí lárphointe i gcomhréir leis
na heatraimh radhairc bhailíochtaithe; tugtar sonraí thíos faoin bhfianaise atá feasach ar mhíreanna agus faoin
iompar cúltaca. Cuirtear an uasteorainn dhocht 16 fhráma
i bhfeidhm tar éis an roghnúcháin i ngach polasaí. Nuair nach bhfuil ach
buiséad aon fhráma amháin ag iarraidh atá feasach ar radhairc, úsáideann sí lárphointe aonfhoirmeach na fuinneoige gníomhaí don fhíseán iomlán nó don fhócas
agus tuairiscíonn sí `policyEffective: uniform`: ní féidir le fráma radhairc aonair roghnaithe
an dá cheann ama a chaomhnú. Féadfaidh glaoiteoir
fuinneog fócais chríochta a sholáthar go roghnach (`start`/`end` i soicindí); teanntar na teorainneacha le fad
na meán, diúltaítear d'fhuinneoga droim ar ais nó neamhchríochta, agus cuirtear gach polasaí
samplála i bhfeidhm laistigh den eatramh normalaithe amháin. Cuirtear an
fhuinneog a eascraíonn as sin san áireamh i meiteashonraí na samplála agus i réimír an chuir síos
neamhiontaofa ionas gur féidir le samhlacha iartheachtacha sliocht dírithe a idirdhealú ón
amlíne iomlán.

Is socrú sainráite ar leith é fócas séimeantach na bhfotheideal. Caomhnaíonn an modh anailíse réamhshocraithe `full`
an leid fráma atá ann cheana agus ní chuireann sé téacs na hiarrata ar aghaidh chuig
an tsamhail fotheideal riamh. Sa mhodh `focused`, ní léann an droichead ach an `text`/`input_text`
neamhfholamh is déanaí a scríobh an t-úsáideoir sa choimeádán Chat nó Responses céanna,
normalaíonn sé go NFC é, cumascann sé carachtair rialaithe agus spás bán,
agus cuireann sé teorainn 500 pointe cóid Unicode leis. Má bhíonn an toradh folamh, úsáidtear
an leid bheacht `full` mar chúltaca. Srathaítear nod inúsáidte mar JSON i mbloc tiomnaithe
comhthéacs úsáideora neamhiontaofa agus ní fhéadfaidh sé ach tosaíocht a thabhairt do shonraí inbhraite; ní
féidir leis an rabhadh ar leith a shárú in aghaidh treoracha atá le feiceáil
nó le cloisteáil sna meáin a leanúint. Ní dhéanann fócas téacsúil `start`/`end` a thuiscint riamh ná
an samplóir ama a athrú.

#### FU-07 fianaise struchtúrach ar mhíreanna

Úsáideann `segment_aware` pas réamhanailíse amháin faoi theorainn ar an sruth físeáin
áitiúil atá bailíochtaithe cheana féin. Ar dtús, scálaíonn an slabhra scagairí seasta go 320 picteilín
ar leithead ar a mhéad, braitheann sé athruithe radhairc agus eatraimh reoite, agus ansin samplálann sé ag 1 fhráma sa
soicind le haghaidh doiléire, meánlúmanas, agus faisnéis spásúil/ama. Tá an pas
teoranta do 600 sampla struchtúracha, snáithe FFmpeg/scagaire amháin, na liostaí ceadaithe céanna
prótacal agus coimeádán nach gceadaíonn ach `file`, teorainn 1 MiB ar aschur próisis,
agus 30 soicind ar a mhéad laistigh de mheicníocht chomhroinnte ginmhillte/sprioc-ama an bhróicéara. Ní
ghlacann sé riamh le hordú, scagaire, conair, ná URL ón iarraidh.

Is fianaise chinntitheach samplála iad na luachanna struchtúracha, ní tuiscint shéimeantach ar
fhíseán. Ní bhaineann siad ábhair, gníomhartha, fotheidil, caint, ná rún an úsáideora
de thátal as. Cruthaíonn teorainneacha radhairc agus reo míreanna; ní imríonn clúdach reo, doiléire,
nochtadh, mionsonraí spásúla, ná athrú ama tionchar ach ar an gcaoi a leithdháiltear an buiséad
1–16 fhráma atá ann cheana. Cuirtear teorainn fráma amháin le mír atá reoite go hiomlán,
agus bíonn míreanna nach bhfuil reoite in iomaíocht don bhuiséad atá fágtha. Nuair a bhíonn níos mó teorainneacha
ná frámaí ann, coinnítear clúdach aonfhoirmeach ar an amlíne ionas nach féidir le gearrthacha tapa ag an tús
mír fhada ag an deireadh a cheilt. Déantar teorainneacha radhairc atá laistigh de thaifeach
anailíse 1 soicind ó theorainn reo a chumasc.

Má bhíonn scagairí ar iarraidh, fianaise mhíchumtha/fholamh, earráid bhrathadóra, nó má théann an t-am
réamhanailíse teoranta in éag, leantar ar aghaidh leis an bpolasaí beacht lárphointe aonfhoirmeach mar chúltaca. Ní
leantar ar aghaidh sa chaoi sin má ghineann an glaoiteoir ginmhilleadh nó má shroichtear sprioc-am an bhróicéara: cuirtear deireadh leis an
bhfophróiseas atá ar siúl, coisctear eastóscadh frámaí ina dhiaidh sin, agus baintear an crann sealadach príobháideach
in `finally`.

Gineann `scripts/perf/video-bridge-fu07-eval.ts` daingneáin fhíora chinntitheacha FFmpeg
le haghaidh coigilteas i nglaonna fotheideal tar éis dídhúblála, leithdháileadh buiséid do ghluaiseacht dhlúth,
fianaise doiléire/nochta/SI-TI, gearrthacha tapa le heireaball fada, agus dearfacha bréagacha
de bharr céimnithe de réir a chéile. Taifeadann sé am iarbhír na réamhanailíse agus, nuair atá `/usr/bin/time`
ar fáil, úsáid LAP agus buaic-RSS na bhfo-phróiseas. Is oracail struchtúracha amháin
iad a sheiceálacha cáilíochta. Fanann fíorcháilíocht na samhla fotheideal ag `HOLD` toisc nach bhfuil
críochphointe údaraithe ná moltóir seasta ag an úim seo. Fanann coigilteas airgeadais ag `HOLD` freisin
mura soláthraíonn `--caption-cost-per-call-usd` meastachán dearfach sainráite in aghaidh an
ghlao; ní chumann an script ceachtar den dá thoradh riamh.

Tá gach fráma teoranta do 4 MiB, na frámaí amha go léir le chéile do 23 MiB, agus
freagra sraitheachaithe an bhróicéara do 32 MiB. Baintear eolaire sealadach
príobháideach in `finally`. Ní chuimsíonn OmniRoute FFmpeg agus ní ghlacann sé le
conair shaincheaptha chuig comhad inrite. Sula ngintear fotheidil, cuireann an droichead pas
coimeádach dí-dhúbailt amhairc i bhfeidhm: laghdaítear gach JPEG go maolán liathscála 16×16 agus
ní chuirtear é i gcomparáid ach leis an bhfráma deireanach a coinníodh. I gcás buiséad
fotheidil iarrtha atá os cionn fráma amháin, soláthraíonn an t-eastóscadh
linn theoranta iarrthóirí suas le dhá oiread an bhuiséid sin agus gan níos mó ná 16 fhráma riamh.
Ní chuirtear an teorainn iarrtha i bhfeidhm go dtí tar éis na dí-dhúbailte, agus coinnítear an chéad
iarrthóir roghnaithe agus an ceann deiridh le linn an tanaithe deiridh nuair atá dhá fhráma ar a laghad
sa bhuiséad. Úsáideann an beartas leaganaithe
`grayscale-16x16-mean-cells-v2` an ceann is mó den mheándifríocht lúma agus
den chóimheas de chealla mionsamhla a bhfuil difríocht normalaithe 0.05 ar a laghad acu. Is é
an tairiseach 0.04 tairseach na ndúblach, a roghnaíodh ar mhaithe le hintuarthacht seachas
é a chur ar fáil mar shocrú ag am rite. Caomhnaíonn an comhartha tánaisteach
ardchodarsnachta seo gluaiseachtaí beaga agus athruithe ar théacs infheicthe a d'fhéadfadh
comparáid bunaithe ar an meán amháin a cheilt. Má tharlaíonn earráidí sa chomparadóir nó sa díchódóir, ceadaítear na frámaí agus coinnítear
an clúdach. Déanann meiteashonraí aschuir idirdhealú idir iarrthóirí eastósctha, frámaí a úsáideadh
go rathúil, agus dúblaigh amhairc a baineadh.

Féadfaidh cuid físe atá marcáilte go sainráite bileog teagmhála le stampaí ama a iarraidh. Tógann an
droichead greille JPEG ina bhfuil 4 cholún agus 16 fhráma ar a mhéad. Leabaíonn gach cill 512 picteilín
a stampa ama foinseach i mbanda ardchodarsnachta ag an mbun, agus fanann na stampaí ama céanna
i meiteashonraí téacsúla le haghaidh comhlachaithe agus iniúchta iartheachtacha. Tá an
JPEG iomlán fós teoranta do 32 MiB. Mura féidir le `sharp` an ghreille a dhíchódú nó a chomhdhéanamh,
filleann an droichead ar na frámaí JPEG aonair; leathnaíonn tobscor ón gcliant fós
tríd an oibríocht bileoige.

Coinnítear fianaise ar son ardú céime ar leithligh d'aon ghnó ón micreathagarmharc
comhdhéanaimh shintéisigh. Sainmhíníonn `scripts/perf/video-bridge-contact-sheet-eval.ts`
creat tástála A/B le scéimre leaganaithe do shamhlacha amhairc fíora atá comhoiriúnach le OpenAI. Tomhaiseann sé
comharthaí arna dtuairisciú ag an soláthraí, aga folaigh ó cheann ceann de réir am balla (comhdhéanamh na bileoige san áireamh),
líon na nglaonna samhla, agus coinneáil fíoras arna sainiú sa mhainifeist. Ní
scríobhtar freagraí amha na samhla sa tuairisc; ní choinnítear ach achoimrí SHA-256 agus aitheantóirí fíoras a meaitseáladh. Ní dhéanann an
creat tástála aon ghlao líonra ná aon ghlao samhla íoctha mura gcuirtear `--execute-real` ar aghaidh agus
mura bhfuil `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` cumraithe. Gan
an rith fíor sainráite sin, fanann a bhreithiúnas meaisín-inléite mar `HOLD`; ní fianaise
ar son ardú céime iad tomhais shintéiseacha ar phálastaí ná ar líon na nglaonna astu féin.

Féadfaidh glaoiteoirí eagar roghnach `transcript.cues` a cheangal le cuid físe
a dtacaítear léi nuair atá téacs ailínithe acu cheana féin. Ní mór do gach leid `text`,
eatramh críochta `start`/`end` laistigh den fhad a tomhaiseadh le linn an tóraidh, agus
`source` atá ar an liosta ceadaithe (`client`, `embedded`, nó `audio-bridge`) a iompar; is é
`1` luach réamhshocraithe `confidence` agus ní mór dó fanacht idir `0` agus `1`. Cumaisctear leideanna atá comhionann go beacht.
Ní thosaíonn OmniRoute tras-scríobh riamh ó na meiteashonraí seo: cóipeáiltear leideanna bailíochtaithe
isteach sa toradh tuairiscithe lena bhfoinse, lena muinín, agus lena n-eatramh, agus
léirítear iad mar bhreathnuithe neamhiontaofa taobh le fotheidil na bhfrámaí. Diúltaítear do théacs neamhbhailí,
atá lasmuigh den raon, nó nach bhfuil bunús sonraithe leis, seachas é a mheascadh isteach sa
sruth fotheideal. Normalaíonn an dá chainéal tras-scríofa i gcorp an iarratais
an bunús a sholáthraítear go `client`, lena n-áirítear lipéid fhéindearbhaithe `embedded` nó `audio-bridge`.
Ní féidir ach le hoiriúntóir atá faoi úinéireacht an fhreastalaí na lipéid iontaofa sin a shannadh tríd
an argóint `trustedSource` atá ar fáil i gcód amháin; ní féidir le réimse JSON in iarratas teacht
ar an argóint sin. Fanann téacs tras-scríbhinne ina ábhar neamhiontaofa a dhíorthaítear ó mheáin,
beag beann ar a bhunús, agus ní ceadmhach dó údarú a chinneadh riamh.

Féadfaidh ardghlaoiteoir rian `audioTranscript` a sholáthar don fhíseán céanna;
caitear leis mar théacs arna sholáthar ag an gcliant, ní mar chruthúnas ar thras-scríobh ón bhfreastalaí.
Ritheann an comhéadan comhleá breathnuithe amhairc agus fuaime faoi
aon sprioc-am agus comhartha tobscortha amháin, cuireann sé in ord iad ar amlíne choiteann, cumascann sé
dúblaigh bheachta, agus tuairiscíonn sé toradh páirteach nuair nach n-éiríonn ach le taobh amháin.
Titeann `audioTranscript` neamhbhailí siar go dtí an toradh páirteach sin — coinnítear an cur síos
amhairc agus taifeadann an brainse fuaime cód teipe slánaithe —
seachas an físeán iomlán a theip. Caomhnaítear infhaighteacht gach brainse, an bhratach pháirteach,
agus na cóid teipe slánaithe sa toradh tuairiscithe, sna
meiteashonraí cosanta (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i meiteashonraí thaisce na dtorthaí, agus in áiritheoirí
comhleá an droichid. Ní agraíonn an chonair réamhshocraithe Video Bridge tiontú cainte go téacs
ná ní íoslódálann sí an dara cóip de na meáin; gan an rian sainráite sin, fanann sí
ina conair físe amháin.

**Coinneáil tras-scríbhinní (#12150 P1).** Bíonn feidhm aige seo go huathoibríoch aon uair a
rindreálann Video Bridge (atá roghnach ann féin) mír thras-scríbhinne — níl aon bhratach
coinneála ar leith ann. Nuair a rindreálann iarratas aon mhír thras-scríbhinne (`transcript`
arna dhearbhú ag an nglaoiteoir nó `audioTranscript` cumaiscthe), marcálann an ráille cosanta é mar
`videoBridgeObserved` agus cruthaíonn sé scáthleagan folaithe den chur síos ar an bhfíseán —
rindreáil chomhionann ina gcuirtear
`[redacted-video-transcript]` in ionad chorp saorthéacs gach míre, arna thógáil trí ionadú a dhéanamh ar réimse struchtúrtha na míre
sula gcuirtear an teaghrán le chéile (ní trí pharsáil a dhéanamh ar an téacs leacaithe riamh, ionas nach féidir le haon
ábhar míre — naimhdeach ná gnáthábhar, lena n-áirítear coirp ina bhfuil `]` amhail
`[inaudible]`/`[music]` — teacht slán). Cuirtear an scáthleagan folaithe sin in ionad
gach coda téacs a dhíorthaítear ón bhfíseán i gcorp iarratais an loga glaonna a stóráiltear go marthanach, agus iad meaitseáilte de réir
comhionannas an ábhair; athléitear an t-ancaire `fullText` ó phálasta críochnaithe an ráille cosanta
roimh an nglao, ionas go n-éiríonn leis an meaitseáil fós tar éis do ráillí cosanta níos déanaí sa slabhra (na mascóirí PII agus
dintiúr, tosaíochtaí 10/95) téacs an chuir síos a athscríobh ina áit agus
tar éis d'instealladh leideanna córais/aistrithe cuimhne/comhthéacs an t-eagar teachtaireachtaí a athmhúnlú. Ní athraítear an
corp a sheoltar suas chuig an tsamhail. Ní chuireann iarratas breathnaithe aon ábhar isteach
i Memory marthanach ach oiread (scipeáiltear eastóscadh a dhíorthaítear ón iarratas agus ón bhfreagra araon),
ionas nach féidir le freagra na samhla féin téacs tras-scríbhinne a athrá in Memory.

**Réimsí físe amh (#12430).** Nuair atá an droichead cumasaithe agus tacaíocht dhúchasach físe anaithnid nó as láthair, gníomhachtaíonn réimsí sainithe `transcript`/`audioTranscript` `videoBridgeObserved` freisin, fiú tar éis teip ar an gcur síos nó teorainn `maxVideos`. Áirítear `null` agus teaghráin fholmha; ní áirítear réimsí atá as láthair ná meiteashonraí nach mbaineann le físeán. Folaíonn cóipeanna coinnithe na réimsí seo nó fágtar an t-iarratas ar lár, agus seachnaítear taiscí/Memory.

Ar na conairí cúltaca sin, déantar codanna tacaithe `text`/`input_text` de mhíreanna bailí ón nglaoiteoir
seachas réimsí neamhchaighdeánacha soláthraí. Fanann an dá rian a soláthraíodh san iarratas
mar bhreathnuithe neamhiontaofa `client`, agus rabhadh sainráite ag gabháil leo nár cuireadh síos ar an
bhfíseán agus nár fíoraíodh na stampaí ama i gcoinne na meán. Tá feidhm ag na buiséid reatha
256 mír/64 KiB san iomlán agus in aghaidh na míre maidir leis an dá rian le chéile;
ní mór do stampaí ama a bheith laistigh d'uasteorainn 600 soicind an bhróicéara agus d'aon fhuinneog fócais
a soláthraíodh. Caitear rianta neamhbhailí amach, ní chuirtear ar aghaidh iad mar théacs treallach; féadfar rian
comhthreomhar bailí a úsáid fós mura sáraítear a gcomhbhuiséad. Ní chuireann réimsí null/folmha
aon téacs leis. Ní chuireann an cúltaca seo aon fháil meán ná tras-scríobh leis.
Baintear réimsí sínte tras-scríbhinne den iompróir físe cúltaca agus dá
oibiachtaí `video_url`/`source`. Fanann liosta ceadaithe formáid tarchuir OpenAI dian; fanann iompróirí
físe a bhfuil tacaíocht dhúchasach anaithnid acu ar fáil agus coinníonn spriocanna atá aitheanta mar spriocanna téacs-amháin marcóirí sábháilte.
Cosnaíonn scáthleaganacha folaithe struchtúrtha téacs na tras-scríbhinne a cuireadh leis, agus fanann an
t-iarratas bunaidh atá faoi úinéireacht an ghlaoiteora gan athrú. Coinníonn spriocanna a bhfuil tacaíocht dhúchasach acu agus
droichid dhíchumasaithe a n-iompar seachanta reatha.

Úsáideann cóipeanna coinnithe breise an comhartha céanna d'iarratas breathnaithe. Déanann an léargas amh
ar iarratas an chliaint roimh an ráille cosanta, an t-iarratas ar feitheamh sa chuimhne, agus an loga luath
d'iarratais dhiúltaithe ionadú struchtúrtha ar réimsí tras-scríbhinne i gcodanna físe;
folaítear leideanna teaghráin a shintéisíonn céimeanna píblíne agus aistriú comhthéacs
ag an gceann scríbe do chorp an iarratais a stóráiltear go marthanach. Fágann an marcóir marthanach `video_content_removed`
go dteipeann ar leanúint `previous_response_id` ar bhealach dúnta seachas
téacs a caitheadh amach d'aon ghnó a athchruthú. Má chailleann iarratas breathnaithe a
scáthleagan folaithe in aghaidh na coda roimh logáil, nó má theipeann ar fiú ceann amháin de roinnt scáthleaganacha físe
meaitseáil tar éis athruithe níos déanaí ar an iarratas, fágtar corp coinnithe an iarratais
ar lár go hiomlán seachas tras-scríbhinn atá folaithe go páirteach a choinneáil.

I gcás iarratais bhreathnaithe, d'fhéadfadh freagra samhla aon chuid den
tras-scríbhinn a lua gan teorainn struchtúrtha míre. Dá bhrí sin, cuirtear marcóir fágála ar lár in ionad a `responseBody`
i loga glaonna marthanach; ní choinnítear an déantán mionsonraithe
píblíne (a bhféadfadh coirp réamhtheachtacha/cliaint agus smutáin srutha a bheith ann).
Seachnaíonn taiscí séimeantacha, idimpitéinteachta agus athsheinnte réasúnaíochta
léamha agus scríbhinní don iarratas sin. Fanann iarratas an tsoláthraí agus an freagra
atá infheicthe don chliant gan athrú. Draenáiltear bearta luatha coinneála beo ón maolán
sealadach nuair a fhágtar an déantán mionsonraithe ar lár. Ní thuairiscíonn rabhadh Kiro faoi EventStream
míchumtha ach líon beart an phálasta, ní a bhfuil ann ná earráid amh
an pharsálaí JSON riamh.
Ní mhaítear leis seo go ndearnadh iniúchadh ar gach diagnóisic neamhghaolmhar soláthraí/breiseáin;
tá an t-iniúchadh níos leithne ar chinn scríbe sonraí coinnithe á rianú in #11658.

Is foshraith taisce ar leith é saolré inmheánach `/api/modality-bridge/video/drilldown`,
atá fíordheimhnithe trí lúb siar/comhartha. Éilíonn gach oibríocht freisin
aitheantas canónach teimhneach prionsabail. Sula gcumasaítear glaoiteoir táirgthe, ní mór dó
an t-aitheantas sin a dhíorthú ón tionónta fíordheimhnithe agus ní ceadmhach dó luach
a roghnaíonn an cliant a chur ar aghaidh riamh. Ceanglaíonn eochracha taisce an prionsabal sin le haitheantais chanónacha seisiúin agus
tagartha físe, ní stórálann siad ach a n-eochracha díorthaithe le SHA-256, agus teorannaíonn siad léamh
agus scriosadh araon don phrionsabal céanna. Stórálann an taisce 16 fhráma JPEG díorthaithe ar a mhéad
in aghaidh na hiontrála, téann siad in éag tar éis deich nóiméad, agus tacaíonn sé le léamha teorannaithe
`start`/`end` nó scriosadh sainráite seisiúin.

Tá gach prionsabal teoranta do 16 iontráil agus 64 MiB de shonraí canónacha JPEG. Tá na
teorainneacha sin neamhspleách ar an uasteorainn dhomhanda 64 iontráil/256 MiB: ní dhíbríonn brú
ar chuóta prionsabail ach na hiontrálacha is lú a úsáideadh le déanaí don phrionsabal sin sula ndéantar díbirt dhomhanda
LRU a mheas. Glantar iontrálacha atá imithe in éag as cuntas an phrionsabail agus as an gcuntas
domhanda araon nuair a bhíonn gníomhaíocht taisce ann, agus ní chuirtear ionadú páirteach
i gcrích i gcás cealaithe ná teip bailíochtaithe.

Diúltaíonn an taisce do Base64 neamhchanónach, stuáil iomarcach, meáin nach JPEG iad, JPEGanna míchumtha nó
teasctha, agus JPEGanna a ghineann rabhadh le linn díchódú teoranta láníomhá le `sharp`.
Athionchódaíonn sé gach íomhá a nglactar léi mar JPEG canónach, díorthaíonn sé an leithead agus an airde
ó na bearta díchódaithe seachas muinín a chur i réimsí an ghlaoiteora, agus caitheann sé amach aon bhearta
polaglótacha ag an deireadh seachas iad a choinneáil. Ní chuirtear san áireamh sa dá chuóta ach an maolán comhbhrúite canónach teoranta.
Áirítear sa teorainn tarchuir JSON an forchostas Base64 don uasteorainn ionchuir dhíchódaithe 32 MiB. Déanann gach
díorthú stóráilte a fhormáid/taifeach bailíochtaithe JPEG, a bheartas samplála,
a leagan díorthaithe, a am cruthaithe, a hais inneachair arna ríomh ag an bhfreastalaí, agus a thagairt
haiseáilte don tuismitheoir, chomh maith le hais inneachair an tuismitheora ón nglaoiteoir iontaofa, a thaifeadadh.
Seiceáiltear cealú idir na céimeanna díchódaithe/haisithe aisioncrónacha sula ndéantar an cur i bhfeidhm adamhach sa taisce.

Ní nascann an chuid seo táirgeoir táirgthe leis an mbealach fós agus ní
sholáthraíonn sí roghnú leaganacha iltaifigh. Dá bhrí sin, ní thabhaíonn conair thrédhearcach iarratais
Video Bridge aon obair bhreise, agus tá díorthú príomhaí atá ceangailte le tionónta agus
saolré iomlán iltaifigh FU-08 fós ina n-obair leantach shainráite seachas
a bheith doiciméadaithe mar iompar críochnaithe.

Cuirtear fotheidil le frámaí go seicheamhach leis an tsamhail Video atá cumraithe. Faigheann sárú folamh
Video an socrú Vision le hoidhreacht; má tá an dá cheann folamh, roghnaíonn uathródaire
Vision an tsamhail éifeachtach atá cumasach ó thaobh amhairc de. Cuirtear fotheidil rathúla
in ionad na coda bunaidh le réimír chobhsaí `[Video description:` a
mharcálann an téacs freisin mar bhreathnóireacht neamhiontaofa atá díorthaithe ó mheáin agus a threoraíonn do shamhlacha iartheachtacha
gan treoracha a fhaightear sna meáin a leanúint. Áirítear i n-eochracha taisce na bhfotheideal frámaí
na bearta JPEG, an leid, an stampa ama, agus an tsamhail éifeachtach; ní chuirtear sa taisce ach
fotheidil rathúla. Coinníonn iontrálacha taisce an tsamhail táirgeora iarbhír ar éirigh léi,
lena n-áirítear samhail chúltaca; tuairiscíonn an droichead `mixed` nuair a tháirg samhlacha éagsúla
frámaí éagsúla. Athúsáideann amas taisce céannacht an táirgeora sin
seachas í a athlipéadú mar an plean ródaithe iarrtha. Tá taisce torthaí
an fhíseáin iomláin eochraithe ar gach ionchur a athraíonn an t-aschur — an leid, an tsamhail
éifeachtach, an beartas samplála, líon na bhfrámaí, an modh anailíse séimeantaí, méarlorg SHA-256
na leide fócais normalaithe, an fhuinneog fócais, `transcript`,
`audioTranscript`, agus bratach na bileoige teagmhála — mar sin, má athraítear aon cheann de na
toisí sin, tarlaíonn teip taisce, agus ní athúsáid sheanchaite choíche. Tá leagan
an bheartais dí-dhúblála amhairc, an tairseach, agus líon teoranta na bhfrámaí iarrthacha sainráite freisin in
eochair agus meiteashonraí na taisce torthaí; dá bhrí sin, ní féidir le hathrú beartais cur síos seanchaite
ar an bhfíseán iomlán a athúsáid. Coinníonn meiteashonraí v4 na taisce torthaí an modh agus
an méarlorg, ach ní choinníonn siad amhthasc an úsáideora riamh. Tuairiscíonn meiteashonraí an ráille cosanta
na modhanna anailíse iarrtha agus éifeachtacha araon; tuairiscítear modh iarrtha `focused` gan
téacs úsáideora inúsáidte mar `full` go héifeachtach.

Baineann an ráille cosanta gach cuid físeáin a dtacaítear léi amach ach ní chuireann sé síos ar níos mó ná
`modalityBridgeVideoMaxVideos`. I gcás sprice a bhfuil sé cruthaithe ina leith go bhfuil
`supportsVideo === false`, déantar marcóirí téacs sábháilte sainráite d’fhíseáin ar theip orthu nó atá os cionn na teorann
ionas nach mairfidh aon amhfhíseán. Nuair nach eol an cumas, coinníonn na codanna sin
a n-iompróir físeáin; leanann aon tras-scríbhinn chúltaca an tiontú téacs teoranta
thuas. Seachnaíonn spriocanna a bhfuil `supportsVideo === true` acu an droichead.
Iomadaíonn comhartha ginmhillte iarratas an chliaint tríd an íoslódáil, ciú an bhróicéara,
na fophróisis, agus glaonna fotheidealaithe; stopann ginmhillte idir físeáin agus ní ligeann siad
d’amh-mheáin dul tríd riamh i gcás teipe.

Tá socruithe am rite stóráilte sa bhunachar sonraí agus bailíochtaithe le Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                               |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Am rite roghnach, le roghnú isteach                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Coinníonn `full` fotheidil ghinearálta; úsáideann `focused` comhthéacs teoranta neamhiontaofa ón úsáideoir is déanaí        |
| `modalityBridgeVideoModel`          | `""`        | Faigh samhail Vision Bridge le hoidhreacht                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhréireach; i gcás teipe ar an mbrathadóir, úsáidtear `uniform` mar chúltaca |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                              |

Teorannaítear luachanna oidhreachta marthanacha am istigh Video os cionn 120 soicind go
sprioc-am an bhróicéara; diúltaítear do scríobhanna nua socruithe os cionn na teorann sin.
Éilíonn `GET /api/modality-bridge/video/runtime` logántacht lúb-ais stampáilte iontaofa
roimh fhíordheimhniú nó roimh thástáil an ama rite, agus ansin éilíonn sé fíordheimhniú
bainistíochta. Ní thugann sé ar ais ach `available`, leaganacha sláintithe FFmpeg/ffprobe, agus cúis sheasta
nuair nach bhfuil an t-am rite ar fáil. Ní API uaslódála poiblí é an críochphointe inmheánach
eastósctha: tugann sáithiú an chiú `503` móide `Retry-After` ar ais, tugann
dícheangal glaoiteora `499` ar ais, agus tugann sprioc-am seasta an bhróicéara `504` ar ais. Cuireann freagraí tiontaithe
`video->text;model=<visionModel>;parts=<videos>` leis an gceanntásc lárnach
`x-omniroute-modality-bridge` gan deighleoga Vision ná Audio a bhaint.

### Mascóir PII (`piiMasker.ts`)

Ritheann sé ag an **dá** chéim.

- Déanann **`preCall`** clón den phálasta, téann sé trí `system`, `messages`, `input`, agus
  `prompt` (míreanna ar teaghráin shimplí iad san áireamh), agus cuireann sé `processPII()` (ó
  `@/shared/utils/inputSanitizer`) i bhfeidhm ar réimsí teaghráin `content`/`text`. Nuair atá
  `PII_REDACTION_ENABLED=true`, déantar an PII braite a cheilt sa phálasta
  amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (nach rialaíonn ach
  an beartas maidir le hinstealladh leideanna). Nuair atá an cheilt as, taifeadann an glao
  comhairimh braite gan an t-ábhar a athscríobh.
- Déanann **`postCall`** clón domhain den fhreagra, ritheann sé `sanitizePIIResponse()` agus
  an mascóir do struchtúr an Responses API (`maskResponsesOutput` — clúdaíonn sé
  `output_text` agus `output[].content[].text`). Má dhéantar aon cheilt, cuirtear an
  freagra modhnaithe in áit an bhunfhreagra.

Ní chuireann an ráille cosanta bac riamh; ní dhéanann sé ach nótaí a chur leis (`meta.detections`,
`meta.redacted`) nó athscríobh.

#### Roghnú de réir cineáil, patrúin shaincheaptha agus áiritheoirí braite

Roghnaíonn **Deais → Socruithe → Slándáil → Mascadh PII** _cad_ a mhasctar. Ní
chuireann sé mascadh ar siúl: is iad `PII_REDACTION_ENABLED` (iarratas) agus
`PII_RESPONSE_SANITIZATION` (freagra + SSE) a dhéanann é sin fós, agus tá an dá cheann as de réir réamhshocraithe.

- **Roghnú de réir cineáil** — tá na haitheantóirí ionsuite liostaithe in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Mura bhfuil sé socraithe, ciallaíonn sé gach
  cineál (an t-iompar a bhí ann sula raibh an socrú seo ann). Mapáiltear patrún
  `ssn_us` inneall na n-iarratas chuig `ssn`. Ní dhéanann na teimpléid (Íosta, Caighdeánach, Airgeadais,
  Brasaíleach, SAM, Iomlán) ach na ticbhoscaí sa chomhéadan úsáideora a líonadh.
- **Patrúin shaincheaptha** — suas le 20 patrún slonn rialta nó saoróige (`*` = suas le 64
  carachtar nach spás bán iad, `?` = ceann amháin). Cuirtear `[CUSTOM_REDACTED]` in áit na meaitseálacha.
  Téann gach patrún trí `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): 500 carachtar ar a mhéad, bratacha teoranta
  do `g i m s u`, ní mór dó tiomsú, ní mór dó pas a fháil i `safe-regex` (cúlrianú
  tubaisteach), agus ní ceadmhach dó teaghrán folamh ná ionadchoinneálaí ceilte a mheaitseáil.
  Diúltaítear do phatrún a theipeann nuair a shábháiltear é agus nuair a thástáiltear é, agus scipeáiltear ró stóráilte
  a theipeann ag am rite seachas é a thiomsú. Ní ritheann patrúin shaincheaptha ach
  nuair atá mascadh ar siúl.
- **Áiritheoirí braite** — comhairimh de réir cineáil (ní luachanna meaitseáilte riamh), a choinnítear sa
  chuimhne agus a athshocraítear ar atosú (`src/lib/pii/piiDetectionStats.ts`). Ní
  mhéadaíonn siad ach nuair atá mascadh ar siúl.

Tá na socruithe sa tábla `key_value` (ainmspás `pii_settings`,
`src/lib/db/piiSettings.ts`) agus léitear iad trí thaisce 1 s. API:

| Modh   | Conair                   | Cuspóir                                                                                   |
| ------ | ------------------------ | ----------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Staid na mbratach, `enabledTypes`, `customPatterns`, áiritheoirí braite                   |
| `PUT`  | `/api/settings/pii`      | Cuir in áit `enabledTypes` (`null` = gach ceann) agus/nó `customPatterns`                 |
| `POST` | `/api/settings/pii/test` | Rith trialach ar phatrún amháin in aghaidh sampla nach mó ná 8 KB; ní stóráiltear aon rud |

Teastaíonn fíordheimhniú bainistíochta ó na trí cinn agus bailíochtaíonn siad an corp le Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Instealladh Leideanna (`promptInjection.ts`)

Aimsíonn sé struchtúir ionsaitheacha in ábhar a sholáthraíonn an t-úsáideoir agus cuireann sé an
beartas cumraithe i bhfeidhm. Is iad athróga timpeallachta agus roghanna an chruthaitheora
a rialaíonn an t-iompar:

| Socrú             | Athróg timpeallachta                                                                                  | Réamhshocrú | Éifeacht                                                                                                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cumasaithe        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Nuair atá sé `false`, stopann an ráille cosanta láithreach.                                                                                                                                                            |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Beartas insteallta: `block`, `warn`, nó `log`. (Glactar le `redact` ar mhaithe le comhoiriúnacht siar ach **ní** bhaineann sé téacs insteallta; is é `PII_REDACTION_ENABLED` a rialaíonn athscríobh PII san iarratas.) |
| Tairseach blocála | rogha `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ailias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | An déine íosta is gá chun bac a chur. Ní dhéantar ach breathnú ar mheándéine de réir réamhshocraithe.                                                                                                                  |

**Ord tosaíochta na mód** (`getMode`): `options.mode` an ghlaoiteora →
**sárú brataí gné sa bhunachar sonraí** do `INJECTION_GUARD_MODE` (Deais → Socruithe →
Bratacha Gnéithe) → athróg timpeallachta `INJECTION_GUARD_MODE` → athróg timpeallachta `INPUT_SANITIZER_MODE` →
`warn`. Dá bhrí sin, bíonn tosaíocht ag sárú deaise ar na hathróga timpeallachta, mar sin rialaíonn comhéadan
na mBratach Gnéithe an ráille atá ag rith go beo (gan atosú). Tá léamh an bhunachair sonraí slán ar theip:
má tharlaíonn earráid ann, filleann an ráille ar an iompar bunaithe ar an timpeallacht, agus nuair nach bhfuil
aon sárú socraithe, is ionann an t-iompar agus an réiteach bunaithe ar an timpeallacht amháin.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (tacar comhroinnte
   brathadóirí a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` ionsuite (`system_override_inline` agus
   `markdown_system_block` faoi láthair, an dá cheann le déine `high`).
3. `customPatterns` roghnacha a chuirtear ar aghaidh trí roghanna an chruthaitheora (teaghráin, sloinn rialta,
   nó taifid `{ name, pattern, severity }`).

Nuair atá `mode === "block"` **agus** nuair a shroicheann braith amháin ar a laghad an tairseach
déine, tugann `preCall` ar ais `{ block: true, message: "Request rejected:
suspicious content detected" }`. Sna móid `warn`/`log`, déanann an ráille cosanta logáil ach
ceadaíonn sé an glao. Easpórtáiltear an fheidhm chúnta chomhroinnte `evaluatePromptInjection()` freisin
do ghlaoiteoirí ar gá dóibh leideanna a mheas gan dul tríd an gclárlann.

**Teorainn scanadh (v3.8.20):** ní scrúdaíonn an brathadóir ach an **chéad 16 KB** den
téacs leideanna comhcheangailte — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 beart) in
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` araon `slice(0, MAX_INJECTION_SCAN_BYTES)` sula ritear
an lúb patrún. Bíonn treoracha insteallta gar do bharr ionchuir, mar sin
cuireann sé seo teorainn le húsáid CPU/GC ag regex ar phálastaí de na céadta KB gan an bhrath a lagú (féach
#3932, #4041).

### Folaitheoir Dintiúr (`credentialMasker.ts`)

Ritheann sé ag an **dá** chéim, sa suíomh deireanach sa slabhra réamhshocraithe (tosaíocht `95`). Folíonn sé
patrúin aitheanta eochracha API / comharthaí rúnda ón bpálasta amach (ábhar
teachtaireachtaí, argóintí glaonna uirlisí, torthaí uirlisí) **agus** ó fhreagra an tsoláthraí, ionas nach sceitear
dintiúr a ghreamaítear isteach i leid (nó a athsheoltar i dtoradh uirlise)
chuig an soláthraí réamhtheachtach ná ar ais chuig an gcliant.

- **Le roghnú go sainráite amháin**, an nós céanna le folú PII (bainteach le Riail Dhocht #20):
  díchumasaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Nuair atá sé múchta, ní dhéanann an ráille cosanta aon ní —
  ní bhacann sé riamh agus ní athscríobhann sé riamh.
- Siúlann `redactCredentials()` crann iomlán an phálasta/fhreagra (`walkValue()`,
  slán ar thruailliú fréamhshamhlacha, slán ar thimthriallta trí `WeakSet`) agus cuireann sé
  ionadchoinneálaí `[REDACTED:<type>]` in áit gach meaitseála, agus ní chlónálann sé ach na brainsí a
  athraíodh i ndáiríre.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), comharthaí VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha
  néil (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  teaghráin naisc ina bhfuil dintiúir (`mongodb://user:pass@...`, etc.), agus
  patrún cineálach do luachanna ceanntásc `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Folítear eochracha atá i bhfoirm ceanntásc (`authorization`, `x-api-key`, `api-key`,
  `apikey`) go struchtúrach (an luach amháin, agus réimír na scéime amhail
  `Bearer `/`Basic ` á caomhnú) seachas tríd an slonn ionadaíochta cineálach téacs.
- Ní bhacann an ráille cosanta riamh; ní dhéanann sé ach athscríobh (`modifiedPayload` /
  `modifiedResponse`) agus anótáil (`meta.credentialsRedacted`, `meta.count`).

Cosaint ar aischéimniú: `tests/unit/credential-masker-guardrail.test.ts`.

## Bunchonradh (`base.ts`)

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
  block?: boolean; // cuireann true deireadh láithreach leis an slabhra
  message?: string; // taispeántar é agus blocáil á déanamh
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tugann preCall ar ais é chun an t-iarratas a athscríobh
  modifiedResponse?: TValue; // tugann postCall ar ais é chun an freagra a athscríobh
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

Cuireann ráille cosanta "gan athrú" in iúl trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Má thugtar `modifiedPayload`/`modifiedResponse` ar ais, cuirtear é in áit
an luacha atá ag dul tríd an slabhra do na ráillí cosanta ina dhiaidh.
Tugann `signal?: AbortSignal` saolré an ghlaoiteora isteach sna ráillí cosanta. Is eisceacht d'aon ghnó don iompar oscailte ar theip é iarratas a thobscor: stopann droichid meán den obair agus déanann siad glantachán gan na meáin amh a chur ar ais chuig sprioc ar eol nach dtacaíonn sí leo.

## Clárlann (`registry.ts`)

Cuireann an t-aonréad `guardrailRegistry` na nithe seo a leanas ar fáil:

- `register(guardrail)` — cuireann sé ráille cosanta leis (nó cuireann sé ina áit de réir an ainm normalaithe) agus
  déanann sé athshórtáil de réir `priority` in ord ardaitheach.
- `clear()` / `list()` — feidhmeanna cúnta riaracháin.
- `runPreCallHooks(payload, context)` — téann sé trí na ráillí cosanta gníomhacha, cuireann sé an
  pálasta ar aghaidh trí `modifiedPayload`, agus stopann sé ag an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, más rogha é,
  athchláraíonn sé na réamhshocruithe chun leithlisiú glan tástálacha a chinntiú.

Tugann an dá fheidhm reatha `{ blocked, payload|response, results, guardrail?, message? }` ar ais,
áit arb eagar de thaifid `GuardrailExecutionResult` é `results` ina bhfuil
réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` do gach ráille cosanta,
atá úsáideach don rianú.

### Ráillí Cosanta a Dhíchumasú in aghaidh an Iarratais

Bailíonn `resolveDisabledGuardrails({ apiKeyInfo, body, headers })`
liosta gan dúblaigh d'ainmneacha na ráillí cosanta ar cheart iad a scipeáil don
iarratas reatha. Tá cúig chainéal ann, a léitear san ord seo agus a chumaisctear in aon liosta amháin
(bíonn tosaíocht ag an gcéad tarlú agus dúblaigh á mbaint):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` i gcorp an iarratais (ag an mbarrleibhéal)
3. `metadata.disabledGuardrails` i gcorp an iarratais (ach amháin nuair is oibiacht é `metadata`)
4. An ceanntásc `x-omniroute-disabled-guardrails`
5. An ceanntásc oidhreachta `x-disabled-guardrails`

Cumaisctear na cúig chainéal go léir, an dá cheanntásc san áireamh: má sheoltar
`x-omniroute-disabled-guardrails` agus `x-disabled-guardrails` araon, scipeáiltear aontas
a liostaí, agus ní cheileann ceanntásc nua-aimseartha folamh an ceann oidhreachta a thuilleadh
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ceartaithe in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Is féidir leis na luachanna a bheith ina n-eagair teaghrán nó ina dteaghrán camógdheighilte; baintear spásanna imeallacha de na hainmneacha
agus normalaítear iad go kebab-case i gcás íochtair (`pii_masker` → `pii-masker`), agus baintear
iontrálacha folmha. Seoltar an toradh trí `context.disabledGuardrails`
chuig an gclárlann, a scipeálann ráillí cosanta meaitseálacha (`skipped: true` in `results`).

Ní théann an liosta díchumasaithe i bhfeidhm ach ar an **gclárlann**. Is
teorainn éigeantach é mód `block` le haghaidh instealladh leideanna: glaonn an mheánearraí cosanta ar instealladh
(`src/middleware/promptInjectionGuard.ts`) ar `evaluatePromptInjection()`
gan aon liosta díchumasaithe faoi rialú an ghlaoiteora (baineadh an glao neamhúsáidte
`resolveDisabledGuardrails({ body })` a dhéanadh sé roimhe seo in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), mar sin diúltaítear fós d'iarratas
a dhíchumasaíonn `prompt-injection` i mód `block`. Tá sé seo
d'aon ghnó. Tá na cainéil díchumasaithe faoi rialú an ghlaoiteora (corp an iarratais,
meiteashonraí, ceanntásca), agus níor cheart go mbeadh glaoiteoir in ann rialú slándála
a shocraigh an t-oibreoir a mhúchadh
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ní athraíonn aontas
na gceanntásc ó [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ach na ráillí cosanta clárlainne a scipeáiltear; ní ligeann sé do chliant
an mheánearraí a sheachaint. Déantar beartais éigeantacha ráillí cosanta in aghaidh na heochrach agus in aghaidh an ghrúpa a
rianú in RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Féach [Clúdach agus teorainneacha](#coverage-and-limits).

## Ord Forghníomhaithe

I gcás gach iarratais a théann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts` (na bealaí comhrá atá liostaithe faoi
[Clúdach agus teorainneacha](#coverage-and-limits)):

1. Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
   agus ó na ceanntásca.
2. Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord
   tosaíochta ardaitheach:
   - Taifeadtar ráillí cosanta díchumasaithe mar `skipped`.
   - Féadfaidh `preCall` gach ráille cosanta an pálasta a athscríobh trí `modifiedPayload`.
   - Cuireann an chéad `block: true` deireadh leis an slabhra láithreach agus seolann an láimhseálaí
     freagra diúltaithe ráille cosanta ar ais.
3. Téann an pálasta (a d'fhéadfadh a bheith athscríofa) isteach sa ródú teaglama agus sa
   seoladh in aghaidh srutha.
4. **Gan sruthú amháin:** tar éis an freagra a chur le chéile,
   ritheann `guardrailRegistry.runPostCallHooks(...)` an slabhra céanna ar an
   bhfreagra. Caitheann `block: true` anseo an freagra in aghaidh srutha i leataobh agus seolann sé HTTP 400 ar ais. Scipeálann freagraí sruthaithe an chéim seo go hiomlán.

Taifeadtar ráillí cosanta a chaitheann eisceachtaí le `error: <message>` agus logáiltear iad trí
`logger.warn`, ach leanann an slabhra ar aghaidh — ceadaítear leanúint ar aghaidh ar theip, d'aon ghnó.

## Clúdach agus teorainneacha

Níl clárlann na ráillí cosanta ceangailte ach leis an bpíblíne comhrá. Socraítear na teorainneacha seo le
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` agus
`tests/unit/guardrail-pipeline-characterization.test.ts`; nuashonraigh na tástálacha sin
go comhfhiosach nuair a athraíonn an t-iompar.

### Cá ritheann na crúcaí

| Crúca / rialú                                   | Ritheann ar                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                               | Iarratais a láimhseálann `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (agus `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, agus seachfhreastalaí comhrá Telegram. Chomh maith leis sin, críochphointe tástála an deais `/api/guardrails/test`. Seolann bac roimh ghlao HTTP 400 ar ais. |
| `runPostCallHooks`                              | Freagraí comhrá **gan sruthú** amháin (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Ní shroicheann freagraí sruthaithe é riamh.                                                                                                                                                                                                                                                                                                                               |
| PII sruthaithe                                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), a chuirtear sa phíblíne in `streamingPipeline.ts` nuair atá `PII_RESPONSE_SANITIZATION` cumasaithe. Ní ráille cosanta é, mar sin ní dhéanann na cainéil díchumasaithe difear dó.                                                                                                                                                                                                                          |
| Meánearraí cosanta ar instealladh (oidhreachta) | Gach bealach `/v1` ina bhfuil leid, lena n-áirítear bealaí comhrá (féach [clúdach bealaí](#injection-guard-route-coverage--red-team-phase-8--block-d)). Instealladh leideanna amháin.                                                                                                                                                                                                                                                                                   |

### Cad nach bhfuil clúdaithe

- Ní shroicheann **bealaí meán, leabuithe agus sonraí** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) an chlárlann riamh. Ní
  ritheann mascadh PII, mascadh dintiúr ná droichead módúlachta ann. Is iad na
  meánearraí oidhreachta cosanta ar instealladh an t-aon seiceáil a dhéantar orthu.
- Ní chuirtear aon ráillí cosanta i ndiaidh glao i bhfeidhm ar **fhreagraí sruthaithe**: ní chuirtear `pii-masker` ná
  `credential-masker` i bhfeidhm i ndiaidh glao, ná aon bhac i ndiaidh glao. Ní chuirtear i bhfeidhm ach an claochlú PII
  sruthaithe (nuair atá `PII_RESPONSE_SANITIZATION` cumasaithe). Ní dhéantar dintiúr
  a mhacallaítear ar ais i bhfreagra sruthaithe a cheilt.
- **Cainéil díchumasaithe i gcomparáid leis na meánearraí (d'aon ghnó):** déanann na meánearraí
  instealladh leideanna a mheas lena nglao féin ar `evaluatePromptInjection()`, gan
  aon liosta díchumasaithe atá faoi rialú an ghlaoiteora a chur ar aghaidh. Is teorainn
  éigeantach é mód `block` nach féidir le díchumasuithe faoi rialú an ghlaoiteora a sheachaint, lena n-áirítear ar bhealaí comhrá
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ní dhéanann díchumasú
  `prompt-injection` ach ráille cosanta na clárlainne a scipeáil.

### Cad a fheiceann freagra roimh an gcéim i ndiaidh glao

Ar an gcosán gan sruthú, is é seo an t-ord: eastóscadh cuimhne → forghníomhú uirlisí
ionsuite → ráillí cosanta i ndiaidh glao → imeacht de bharr bac i ndiaidh glao → stóráil sa taisce shéimeantach.

- Feiceann **eastóscadh cuimhne** agus **forghníomhú uirlisí** an freagra sular féidir le
  ráillí cosanta iarghlao é a athscríobh nó a bhlocáil. Ó
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), cuireann eastóscadh
  cuimhne an téacs eastósctha trí `sanitizePII` nuair atá
  `PII_RESPONSE_SANITIZATION` ar siúl (i mód sruthaithe agus i mód neamhshruthaithe araon), ach
  bíonn freagra a bhlocálann na ráillí cosanta iarghlao níos déanaí curtha ar fáil don chuimhne agus
  do na huirlisí cheana féin.
- Stórálann **an taisce shéimeantach** an freagra tar éis na seiceálacha iarghlao, mar sin stórálann sí an
  freagra athscríofa, agus ní chuirtear freagra blocáilte sa taisce riamh. Eagraítear iontrálacha na taisce
  de réir eochair API.

## Cumraíocht

Athróga timpeallachta a léann na ráillí cosanta ionsuite:

| Athróg                                | In úsáid ag             | Éifeacht                                                                                                                             |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Socraigh `false` chun braite a dhíchumasú go hiomlán.                                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Polasaí insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta.                      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Mód don chosaint ar instealladh; is bratach ghné sa bhunachar sonraí é freisin a **sháraíonn** na hathróga timpeallachta (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | An déine íosta a ndiúltaíonn `MODE=block` di: `high` (réamhshocrú), `medium`, nó `low`.                                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                             |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Nuair atá sé `true`, déantar faisnéis inaitheanta phearsanta san iarratas a cheilt (neamhspleách ar an mód insteallta).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (le sruth) | Rialaíonn sé iompar an chumhdaitheora ar thaobh na freagartha.                                                                       |

Léann ráillí cosanta Modality Bridge cumraíocht am rite ón stór socruithe
atá tacaithe ag bunachar sonraí (`getSettings()`), seachas ó athróga timpeallachta. Is iad príomheochracha Vision
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach mar an rogha chúltaca léitheoireachta aon timthrialla
atá doiciméadaithe; úsáideann scríobhanna ón deais na príomheochracha. Tá na réamhshocruithe agus an réiteoir
cúltaca in `src/shared/constants/modalityBridgeDefaults.ts`, agus coinnítear na tairisigh
oidhreachta in `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe comhroinnte
`modalityBridgeCache*`. Níl aon rogha chúltaca eochracha oidhreachta ag Audio toisc gur tugadh na
heochracha seo isteach le scéimre Modality Bridge.

Úsáideann Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann cur síos téacsúil ar fhrámaí le moill agus le costas na samhla.

## Ráillí Cosanta Saincheaptha

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

Céimeanna:

1. Cruthaigh `src/lib/guardrails/myGuardrail.ts` a shíneann `BaseGuardrail`.
2. Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3. Cláraigh é tráth an iompórtála (cuir leis ó `registerDefaultGuardrails`) nó
   glaoigh ar `guardrailRegistry.register(...)` ag am rite — cuireann an chlárlann
   é in áit aon ráille cosanta roimhe a bhfuil an t-ainm normalaithe céanna air.
4. Cuir tástálacha faoi `tests/unit/` (samplaí atá ann cheana:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tosú ó staid aitheanta.
Tabhair `{ registerDefaults: false }` chun tosú le clárlann fholamh agus
ná cláraigh ach na ráillí cosanta atá á dtástáil. Glacann Vision Bridge le hinstealladh
spleáchas (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na
pointí comhionanna le haghaidh socruithe, cumas, roghnú samhla STT, seiceálacha
dintiúr, agus tras-scríofa. Mar sin, is féidir leis na tástálacha an dá shreabhadh a
thástáil gan rochtain ar bhunachar sonraí ná ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumhachtaíonn
  brath insteallta leideanna agus mascadh PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus
  liosta na samhlacha a gcuirtear iallach orthu an droichead a úsáid
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ciseal ortagánach (scoradán ciorcaid, tréimhsí fuaraithe)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán na n-athróg timpeallachta

## Clúdach bealaí na cosanta ar instealladh & tástáil foirne deirge (Céim 8 · Bloc D)

Clúdaíonn an chosaint ar instealladh (`createInjectionGuard` / `withInjectionGuard`) gach bealach
a ghlacann le leideanna úsáideora. Cloíonn sí le `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin;
`block` = seoltar HTTP 400 `SECURITY_001` ar ais).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Tástáil foirne deirge (gach oíche, `nightly-llm-security.yml`):** deimhníonn promptfoo go gcuireann gach bealach bac
ar chorpas OWASP-LLM in `INJECTION_GUARD_MODE=block`; ritheann garak tóireadóirí (déantar é a scipeáil mura bhfuil rún ann).
Cuirtear `moderations` san áireamh ar mhaithe le comhsheasmhacht. Is teorainn éigeantach é an mód blocála: déanann `evaluatePromptInjection()`
neamhaird den liosta díchumasaithe in aghaidh an iarratais a thugann na meánearraí dó, mar sin **ní**
dhíolmhaíonn `disabledGuardrails` bealach uaidh ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Tá dhá jab sa sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh
de láimh):

- **`promptfoo-guard` (blocála)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml`
  le `INJECTION_GUARD_MODE=block`. Deimhníonn gach cás ionsaitheach (m.sh. "déan neamhaird de na
  treoracha go léir roimhe seo…", sáruithe cosanta ar nós DAN) go bhfuil
  `error.code === "SECURITY_001"` san fhreagra, is é sin gur dhiúltaigh an chosaint don iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay`
  i gcoinne ásc áitiúil OmniRoute (`http://localhost:20128/v1`). Braitheann sé ar
  rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeáiltear é go réidh agus cuirtear
  `|| true` lena dheireadh, mar sin tuairiscíonn sé gan teip a chur ar CI.

Clúdaíonn feidhm chúnta na cosanta (`createInjectionGuard` / `withInjectionGuard`)
gach bealach `/v1` a iompraíonn leid; baintear téacs na leide as
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` trí
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.

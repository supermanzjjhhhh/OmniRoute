# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Əsas istinad mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-10-17 — v3.8.52 ([Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) əlavə edilib:
> hook-ların hansı marşrutlara və cavab yollarına tətbiq edildiyi, birləşdirilmiş deaktivləşdirmə başlıqları (#16412), inyeksiyanın
> bloklama rejiminin məcburi sərhəd olması (#16413) və çağırışdan sonrakı mərhələdən əvvəl cavabı nələrin gördüyü)

Qoruyucu mexanizmlər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizliyi, siyasətlərin tətbiqini və məzmun çevirmələrini təmin edir. Hər qoruyucu mexanizm
sorğu yüklərini (`preCall`) və yuxarı axından gələn cavabları (`postCall`) yoxlaya
(və istəyə görə rədd edə, çevirə və ya annotasiya edə) bilər.

Sistem **xəta zamanı açıq qalır**: qoruyucu mexanizm icra zamanı istisna atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti qoruyucu mexanizmlə
davam edir. Bloklama açıq şəkildə verilən qərardır (`block: true`), heç vaxt təsadüf deyil.
Yeganə istisna dayandırılmış sorğudur: çağıranın `signal` siqnalı dayandırıldıqda,
istisna atan qoruyucu mexanizm ötürülmək əvəzinə hook-un icrasını rədd edir.

Hook-lar hər marşrutda və ya hər cavab üçün **işləmir**. Qoruyucu mexanizmə
təhlükəsizlik nəzarəti kimi etibar etməzdən əvvəl
[Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) bölməsini oxuyun.

## Daxili qoruyucu mexanizmlər

Reyestr idxal zamanı altı qoruyucu mexanizmi prioritet sırası ilə avtomatik yükləyir
(bax: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ad                  | Mərhələ(lər)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Prioritet nömrəsi daha kiçik olanlar **əvvəl** işləyir.

### Görmə körpüsü (`visionBridge.ts`) — Modallıq körpüsü PR-1

GLM 5.3 baza modelinin və `glm-5.3-{low,high,max}` modellərinin reyestr/spesifikasiya metadatasında
açıq şəkildə `supportsVision:false` göstərilib. GLM 5.3 Flash variantları
daxili görmə dəstəkli modellər olaraq qalır. Claude Code-un `/v1/messages` marşrutu
Claude-dan OpenAI-yə çevirmədən **əvvəl** ortaq `handleChat` çağırışöncəsi qoruyucu mexanizmlər
zəncirinə daxil olur; iç-içə yerləşən `Read` alət nəticəsi şəkilləri
bu çevirmə onları OpenAI `image_url` məzmununa daşımadan əvvəl təsvir edilməli və ya emal
olunmalıdır (#17069).

**Görmə dəstəyi olmayan modellərə** yönəlmiş, şəkil ehtiva edən sorğuları tutur və
ya bütün sorğunu görmə dəstəkli modelə yenidən yönləndirir, ya da yuxarı axın çağırışından
əvvəl şəkil hissələrini konfiqurasiya edilə bilən görmə modelinin yaratdığı mətn təsvirləri
ilə əvəz edir. Bu, yalnız mətnlə işləyən provayderlərə multimodal yükləri şəffaf şəkildə
emal etməyə imkan verir.

İş axını:

1. Hədəf model artıq görməni dəstəkləyirsə, ötür
   (`isVisionBridgeForcedModel` məcburi körpü siyahısında olduğu hallar istisna olmaqla).
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxar
   (`visionBridgeHelpers.ts`); bu funksiya işi `open-sse/utils/mediaParts.ts` daxilindəki
   **vahid media detektoruna** — `detectMediaParts()` funksiyasına ötürür. Bu,
   kombinasiya uyğunluğu filtri ilə paylaşılan vahid əsas istinad mənbəyidir.
   Çıxarılma yalnız `replaceImageParts` funksiyasının yenidən yerinə əlavə edə bildiyi
   strukturlarla məhdudlaşdırılıb (çıxarma↔əvəzetmə müqaviləsi): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` və Responses
   API `input_image`. Claude Code-un
   `tool_result.content` məzmununda və Responses alət çıxışlarında iç-içə yerləşən uyğun şəkillər də çıxarılır və
   ilkin yollarında əvəz edilir; yalnız göstərici olan strukturlar kombinasiya filtrinin
   işlədiyi materialdır və çıxarılmır.
   Heç biri tapılmadıqda ötür.
3. İcra zamanı konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()` vasitəsilə müəyyən et
   (`src/shared/constants/modalityBridgeDefaults.ts`): yeni `modalityBridge*`
   parametr açarları üstün tutulur; köhnə `visionBridge*` açarları **bir dövrlük
   ehtiyat variant** olaraq qalır (geri qaytarma müddəti). Körpü
   deaktivdirsə, media üzrə hər hansı keçiddən əvvəl ötür.
4. Rejim seçicisi (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yenidən yönləndirmə ilə təsvir arasında seçim edir. Yenidən yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload` və `{ rerouted, fromModel, toModel, imagesKept }` metadatasını qaytarır.
5. Təsvir yolu: şəkil sayını `maxImages` ilə məhdudlaşdır, tapşırığa uyğun prompt hazırla,
   təsvir keşini yoxla, görmə modelini **paralel**
   çağır (`Promise.allSettled`) və onların yerinə `[Image N]: <description>` mətn hissələrini
   əlavə et. Uğursuz təsvir `null` qaytarır: naməlum/görmə dəstəkli hədəflər üçün
   ilkin şəkil saxlanılır (#4012), lakin **yalnız mətnlə işlədiyi təsdiqlənmiş birbaşa
   hədəf** və ya görmə dəstəyi olmayan kombinasiya üçün təsvir edilməmiş
   hər şəkil, o cümlədən qismən uğursuzluqlar və
   təsvir çağırışlarının limitini aşan şəkillər üçün açıq
   `(unavailable — no vision-capable provider connected)` mətn əvəzedicisi qoyulur (#17069).
   Kombinasiyada bütün təsvirlər uğursuz olduqda mövcud ehtiyat mexanizm
   qüvvədə qalır (#8430).
6. `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytar.

#### Rejim seçicisi (`modalityBridgeVisionMode`)

| Rejim      | Standart | Davranış                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Köhnə evristika, dəyişdirilməyib (#6640/#7204): ilkin modelin artıq istifadə edilə bilən giriş məlumatları yoxdursa, qeyri-kombo/`auto/` modelləri ən yaxşı təsvir emalı modelinə yönləndirilir (əks halda təsvir yaradılır); kombo hədəflər üçün həmişə təsvir yaradılır.                                                                                      |
| `describe` |          | Həmişə təsvir yaradılır — yenidən yönləndirmə bloku tamamilə ötürülür; həmişə istifadəçinin seçdiyi model cavab verir.                                                                                                                                                                                                                                          |
| `reroute`  |          | Məcburi yenidən yönləndirmə: giriş məlumatları olan modeli saxlama qoruması nəzərə alınmır. Yenidən yönləndirmənin **hədəfi** üçün giriş məlumatları qoruması isə qüvvədə qalır — istifadə edilə bilən təsvir emalı hədəfi olmadıqda körpü təsvir yaratmaq və ya xam şəkilləri yalnız mətnlə işləyən hədəfə göndərmək əvəzinə aydın xəta ilə sorğunu bloklayır. |

Məcburi rejimlər avtomatik evristika işə düşməzdən **əvvəl** icranı qısa yolla tamamlayır; `auto` davranışı
PR-1-dən əvvəlki qoruma mexanizmi ilə bayt səviyyəsində eynidir.

#### API açarının əhatə dairəsi (`visionBridgeKeyScope.ts`)

Çağıran tərəfin API açarı `allowedConnections`, kvota hovuzları
(`allowedQuotas`) və ya modelləri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) məhdudlaşdırdıqda körpü yalnız
açarın istifadə edə biləcəyi bağlantılarda, açarın istifadə edə biləcəyi yenidən yönləndirmə və təsvir yaratma
modellərini seçir. Daha sonra təsvir yaratma çağırışı həmişə
`x-omniroute-self-loop-key-id` başlığı ilə OmniRoute-un özünə yönələn dövrəsindən keçir və beləliklə, daxil olan çat sorğusu
həmin açarın bağlantı və model siyasətini yenidən tətbiq edir. `enforceApiKeyPolicy()`
bu başlığı yalnız özünə yönələn dövrənin bearer tokeni ilə birlikdə nəzərə alır, buna görə o, girişi yalnız
daralda bilər; müəyyən edilə bilməyən identifikator isə rədd edilir.

Açar üçün heç bir təsvir emalı modelinə icazə verilmirsə, **yalnız mətnlə işlədiyi təsdiqlənmiş
hədəf** şəkil baytlarını onları emal edə bilməyən yuxarı axın xidmətinə ötürmək əvəzinə
şəkil sorğusunu aydın HTTP 400 xətası ilə lokal olaraq rədd edir (#17069). Təsvir emalı imkanları
naməlum olan və ya bu imkanı yerli olaraq dəstəkləyən hədəflər üçün təsvir yaratma yolu əvvəlki,
xəta zamanı davam etməyə icazə verən davranışını saxlayır (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açarsız sorğular və bu məhdudiyyətləri olmayan açarlar əvvəlki kimi
davranır.

#### Tapşırığı nəzərə alan təsvir yaratma promptu (`modalityBridgeVisionTaskAware`)

Standart dəyər **true**-dur. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) əsas
təsvir yaratma promptuna **istifadəçinin son mesajının** mətnini (500 simvola qədər qısaldılmış şəkildə) əlavə edir;
bununla təsviri istifadəçinin həqiqətən soruşduğu məsələyə yönəldir
(codex-vision-proxy nümunəsi) və təsvir emalı modelindən görünən
mətni köçürməyi istəyir. Bayraq söndürüldükdə — yaxud istifadəçi mətni olmadıqda — əsas prompt dəyişdirilmədən istifadə olunur.

Təsvir yaratmaq üçün özünə yönələn dövrənin OpenAI ilə uyğun sorğusu (`visionBridgeHelpers.ts`
faylındakı `callVisionModelSingle()`) həmişə `image_url.detail: "high"` tələb edir —
şərtsiz olaraq, hər çağıran tərəf/təchizatçı üçün və heç bir müştəri siqnalından asılı olmadan.
Aşağı detallılıqlı nümunələmə məhz bu promptun tələb etdiyi mətn köçürmə
tapşırığında OCR dəqiqliyini azaldır, buna görə ilkin daxil olan sorğuda hansı detallılıq səviyyəsindən
istifadə edilməsindən asılı olmayaraq, təsvir yaratma çağırışının özü həmişə yüksək
detallılıq tələb edir. Bu, yalnız daxili təsvir yaratma sorğusunun gövdəsinə təsir edir; OmniRoute-un
əsas sorğuda çağıran tərəfin öz `image_url.detail` dəyərini necə ötürdüyünü dəyişmir —
həmin standart dəyər ayrıca və yalnız aşkarlanmış OpenCode müştəriləri üçün
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) daxilində tətbiq edilir.
Təsvir yaratmaq üçün özünə yönələn dövrənin Anthropic ötürmə formatı qolunda `detail` sahəsi yoxdur
və bu standart dəyərlərin heç biri ona təsir etmir.

#### Təsvir çıxışının həddi (`modalityBridgeVisionMaxChars`)

| Açar                           | Standart | Aralıq              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` və ya 100–50000 |

`0` (standart) **hədd yoxdur** deməkdir — `callVisionModel()` tərəfindən qaytarılan
təsvir dəyişdirilmədən ötürülür və mövcud
davranış qorunur. 100–50000 aralığındakı istənilən dəyər təsvir yenidən `[Image N]: <description>`
şəklində daxil edilməzdən əvvəl onu `…` sonluğu ilə qısaldır
(`src/lib/guardrails/visionBridge.ts` daxilindəki `VisionBridgeGuardrail.preCall()`).
Sonrakı modelə tam köçürülmüş mətnin lazım olduğu, çox detal tələb edən OCR tapşırıqları üçün bu dəyəri
artırın; uzun cavablar verən təsvir emalı modellərində token istifadəsini məhdudlaşdırmaq üçün azaldın.
İdarəetmə panelindəki sahə Vision vərəqinin Advanced panelində yerləşir
(`ModalityBridgeVisionTab.tsx` daxilindəki `modality-bridge-max-chars`) və 1 ilə 99 arasındakı
istənilən dəyəri minimum hədd olan 100-ə qaldırır, açıq şəkildə verilmiş `0` dəyərini isə
dəyişdirmir — `0` sadəcə
“təyin edilməyib” standartı deyil, özü ayrıca etibarlı Zod dəyəridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Təsvir keşi (`modalityBridge/bridgeCache.ts`)

Təsvir nəticələri üçün yaddaşda saxlanılan, bütün proses üzrə paylaşılan LRU + TTL keşi.
Açar = `sha256(imageRef + composedPrompt + configuredBridgeModel)`; uzunluq prefiksli
çərçivələmə ilə (sahə sərhədlərində toqquşma olmadan). Model komponenti
faktiki cavab verən model deyil, **konfiqurasiya edilmiş** körpü modelidir —
`callVisionModel` daxildə ehtiyat modelə keçə bilər və hər cəhdə ayrıca açar vermək
keşi parçalayardı. Uğursuz təsvir yaratma nəticələri heç vaxt keşlənmir. Parametrlər:

| Açar                            | Standart | Aralıq  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Uzaq təsvirlərin normallaşdırılması (özünə dövrə üzrə describe/base64 əldə edilməsi)

Körpü **uzaq** təsviri özü əldə etdikdə — Anthropic describe
özünə çağırışı və claude-wire-format base64 çevrilməsi
(`ensureBase64ImagesForClaudeWire`), hər ikisi
`visionBridgeHelpers.ts` daxilindəki `fetchRemoteImageAsDataUri()` vasitəsilə — nəticədə alınan verilənlər
URI-si görmə modelinə sorğuya daxil edilməzdən əvvəl `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) funksiyasından keçirilir.
Həddindən artıq böyük təsvirlər **uzun tərəfi 2048px** olacaq şəkildə kiçildilir
(OpenAI/Anthropic-in artıq server tərəfində tətbiq etdiyi ölçü məhdudiyyətinə uyğun olaraq); bu,
görmə modelinin gördüyünü dəyişmədən yüklənən baytların həcmini və gecikməni azaldır. Ölçünün dəyişdirilməsi
dinamik idxal vasitəsilə yüklənən `sharp` ilə həyata keçirilir: platformada onun yerli
binar faylı yüklənmədikdə `normalizeDataUri()` **heç vaxt istisna yaratmır** — əvəzində
orijinal baytları dəyişmədən ötürür, beləliklə describe/base64 çevrilməsi
yolu həmişə işlək qalır. Təsvir olmayan baytlar (dekodlaşdırıla bilən
təsvir qaytarmayan əldəetmə) da dəyişdirilmədən ötürülür. Bu normallaşdırma
yalnız körpünün özünə çağırışı üçün əldə etdiyi təsvirlərə şamil olunur — yalnız açıq razılıqla
dəyişiklik edilməsi prinsipinə (Sərt qayda #20) uyğun olaraq, çağıran tərəfin
dəyişdirilmədən ötürülən xam yükünə heç vaxt tətbiq edilmir.

#### Parametrlər sxemi + miqrasiya

Yeni `modalityBridge*` açarları `updateSettingsSchema` daxilində Zod ilə yoxlanılır
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və
Audio Bridge tərəfindən istifadə olunan `modalityBridgeAudio*` qrupu. `141_modality_bridge_settings.sql`
miqrasiyası mövcud köhnə `visionBridge*` dəyərlərini uyğun yeni açarlara köçürür
(idempotentdir, operatorun təyin etdiyi `modalityBridge*` dəyərinin üzərinə heç vaxt yazmır);
köhnə açarlar bir buraxılış dövrü ərzində oxuma zamanı ehtiyat variant kimi
qəbul edilməyə davam edir.

#### Şəffaflıq başlığı + statistika

Describe vasitəsilə çevrilmiş cavablar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
başlığını daşıyır (`modalityBridge/bridgeStats.ts` daxilindəki `buildModalityBridgeHeader()` tərəfindən yaradılır,
`src/sse/handlers/chatHelpers.ts` daxilindəki `withModalityBridgeHeader()` tərəfindən əlavə edilir).
Yenidən yönləndirilmiş sorğulara **heç bir** başlıq əlavə edilmir — yük dəyişdirilməyib və modelin
dəyişdirilməsi cavab gövdəsinin `model` sahəsində artıq görünür.

`GET /api/modality-bridge/stats` (idarəetmə autentifikasiyası,
`GET /api/settings` ilə eyni səviyyə) `vision`, `audio` və
`video` üçün yaddaşda saxlanılan modallıq üzrə
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayğaclarını qaytarır.
`averageLatencyMs` məxrəc kimi bütün cəhdləri deyil, `latencySamples` dəyərini istifadə edir;
vaxt ölçümü olmayan əməliyyat sıfır millisaniyəlik saxta nümunə yaratmır.
`bridged` uğurlu çevrilmələr üçün geriyə uyğun ləqəb olaraq qalır;
uğursuz cəhdlər onu artırmır.
Sayğaclar layihə qərarına uyğun olaraq proses yenidən başladıldıqda sıfırlanır
(uçot deyil, telemetriyadır).

#### İdarəetmə panelinin konfiqurasiyası

Xüsusi idarəetmə paneli səhifəsi
`/dashboard/settings/modality-bridge` ünvanındadır. Onun URL vasitəsilə ünvanlana bilən `Vision`, `Audio`
və `Video` vərəqləri `tab` dəyərini dəyişərkən sorğu parametrlərini qoruyur.
Vision vərəqi aktivləşdirmə, rejim, model seçimi (avtomatik
standart seçim daxil olmaqla), tapşırığı nəzərə alan təlimatlar, qabaqcıl vaxt aşımı/təsvir/təsvirin mətn uzunluğu/keş
məhdudiyyətləri, icra zamanı
sayğacları və qoruma mexanizmli nümunə sorğu təqdim edir. Audio vərəqi də işləkdir: o,
aktivləşdirmə, Auto seçimi olan yalnız STT modelləri üçün seçim aləti, vaxt aşımı/maksimum klip məhdudiyyətləri, audio
sayğacları və `input_audio` nümunə sınağı təqdim edir. Video vərəqi funksionaldır: o,
FFmpeg/ffprobe icra mühitinin vəziyyətini bildirir — dörd açıq UI vəziyyətindən biri (yoxlama
davam edərkən və ya tamamlana bilmədikdə `unknown`, yoxlamanın müştəri tərəfində buraxıldığı,
loopback olmayan idarəetmə paneli hostunda `restricted`, yoxlamadan sonra
mövcud olmadığı təsdiqləndikdə `unavailable` və ya FFmpeg/ffprobe versiyaları ilə birlikdə `available`) —
aktivləşdirmə/model/kadr/video/vaxt aşımı məhdudiyyətlərini yadda saxlayır, model seçimini görmə imkanlı
modellərlə məhdudlaşdırır və video sayğaclarını təqdim edir.

AI parametrlərindəki əvvəlki Vision Bridge kartı yeni səhifəyə
uyğunluq keçididir; o, artıq formanın ikinci nüsxəsini saxlamır. Media Providers həmçinin
mövcud Speech-to-Text sınaq mühitini silmədən Image-to-Text və Speech-to-Text iş axınlarını
müvafiq Modality Bridge vərəqlərinə yönləndirir.

**Özünə dövrədə qəbul nəzarətindən yan keçmə:** describe çağırışı OmniRoute-un
öz `/v1` özünə dövrəsi vasitəsilə yönləndirildikdə (qeyri-standart provayder modeli), alt sorğu
`x-omniroute-admission-bypass: internal` göndərir və müəyyən edilmiş
özünə dövrə giriş məlumatı ilə autentifikasiya olunur — yerli rejimdə yerli `sk_omniroute` nəzarət dəyəri,
yaxud operatorun konfiqurasiya etdiyi `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` mühit açarı (#1350);
beləliklə `REQUIRE_API_KEY=true` yerləşdirmələri də describe çağırışını icra edə bilir.
Yan keçmə yalnız məhz bu giriş məlumatları üçün qəbul edilir, buna görə xarici müştərilər
qəbul nəzarətini keçmək üçün bu başlıqdan istifadə edə bilməzlər.

Köhnə standart dəyərlər `src/shared/constants/visionBridgeDefaults.ts` daxilindədir;
yeni rejim/tapşırığı nəzərə alma/keş üzrə standart dəyərlər və parametrləri müəyyənləşdirən mexanizm
`src/shared/constants/modalityBridgeDefaults.ts` daxilindədir. Qoruma mexanizmi
`deps` konstruktor seçimini təqdim edir ki, sınaqlar saxta `getSettings` və
`callVisionModel` reallaşdırmalarını daxil edə bilsin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio ehtiva edən çat sorğularını audio girişini qəbul etdiyi
məlum olmayan hədəfə çatmazdan əvvəl tutur. Çat sorğusunu heç vaxt yenidən yönləndirmir: audio hissələr
mövcud OpenAI-uyğun multipart son nöqtəsi vasitəsilə mətnə çevrilir və
seçilmiş çat modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio` dəyərini `getResolvedModelCapabilities()` vasitəsilə müəyyənləşdirin. Açıq şəkildə
   göstərilmiş provayder reyestri metadatası üstün tutulur, sonra statik model metadatası, daha sonra isə sinxronlaşdırılmış
   `modalities_input` nəzərə alınır. Elan edilmiş giriş siyahısında `audio` yoxdursa, nəticə `false` olur; imkanlara dair
   heç bir dəlil yoxdursa, nəticə `null` olaraq qalır. Həm `false`, həm də `null`
   konservativ körpünü aktivləşdirir, `true` isə onu ötürür.
2. `modalityBridgeAudio*` parametrlərini müəyyənləşdirin və ortaq `detectMediaParts()`
   detektoru vasitəsilə hər mesajdan əvəzlənə bilən üst səviyyəli audio
   hissələrini çıxarın. Dəstəklənən ötürmə formatları OpenAI `input_audio`, `audio_url` və
   `source.media_type: "audio/*"` formatlarıdır. İç-içə audio marşrutlaşdırma üçün aşkarlanır, lakin
   əvəzləmə mexanizmi tərəfindən silinmir. Emal `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır;
   sonrakı hissələr dəyişdirilmədən saxlanılır.
3. Konfiqurasiya edilmiş `provider/model` dəyərinə əməl edin və ya `selectAudioBridgeModel()` funksiyasının
   `AUDIO_TRANSCRIPTION_PROVIDERS` siyahısını sabit kataloq ardıcıllığı ilə nəzərdən keçirərək
   istifadə edilə bilən aktiv provayder autentifikasiya məlumatına malik ilk modeli seçməsinə imkan verin.
4. `callAudioTranscription()` base64/data-URI audionu çoxhissəli
   `file` formasına çevirir və ya uzaq `audio_url` məzmununu DNS sabitləməsi və 25 MB həddi tətbiq edən,
   yalnız ictimai ünvanlara çıxışa icazə verən qoruyucu mexanizm vasitəsilə endirir. Daha sonra faylı və seçilmiş
   modeli `resolveSelfLoopBearer()` ilə autentifikasiya olunaraq lokal `/v1/audio/transcriptions`
   özünə müraciət dövrəsinə POST sorğusu ilə göndərir. Mövcud transkripsiya marşrutu adi
   autentifikasiya məlumatlarının axtarışını, gözləmə müddəti/tezlik limiti emalını və provayderə yönləndirməni həyata keçirir.
5. Uğurlu çağırışlar öz hissələrini `[Audio N]: <transcript>` ilə əvəz edir. Çağırışlar
   `Promise.allSettled` ilə icra olunur: ayrıca bir uğursuzluq həmin orijinal
   audio hissəsini saxlayır (#4012 müqaviləsi). Bütün çağırışlar uğursuz olarsa və hədəf üçün
   `supportsAudio === false` olduğu təsdiqlənibsə, hissələr
   `[Audio N]: (unavailable — no STT provider connected)` ilə əvəz edilir (#8430 müqaviləsi).
   Naməlum hədəf (`null`) üçün bütün çağırışların uğursuz olduğu nəticə dəyişdirilmədən saxlanılır.
   Yalnız mətni dəstəklədiyi təsdiqlənmiş və istifadə edilə bilən STT autentifikasiya məlumatı olmayan hədəf
   şəbəkə çağırışı edilmədən eyni açıq əvəzedici mətni alır.

Uğurlu transkripsiyalar proses üzrə ortaq Modality Bridge LRU/TTL keşindən istifadə edir.
Açar audio istinadını, sabit `audio-transcription` əməliyyat
etiketini və seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt keşlənmir. Audio cəhdləri
ortaq `bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir.
Çevrilmiş cavablar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` başlığını daşıyır; dəyişdirilməmiş
sorğulara Audio Bridge seqmenti əlavə edilmir.

İcra vaxtı parametrləri verilənlər bazasında saxlanılır və Zod ilə yoxlanılır:

| Açar                          | Standart | Diapazon                  |
| ----------------------------- | -------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                         |
| `modalityBridgeAudioModel`    | `""`     | Avtomatik və ya STT ID-si |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                      |

Ortaq keş `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` vasitəsilə idarə olunmağa davam edir.

### Video körpüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Birbaşa video dəstəyi olduğu məlum olmayan hədəf çağırılmazdan əvvəl Chat Completions `messages` və Responses
API `input` daxilindəki üst səviyyəli video hissələrini tutur.
Dəstəklənən formatlar `input_video`, `video_url`, `video_source`, HTTPS URL-ləri
və `data:video/*;base64,...` data URI-ləridir. Mətndəki adi fayl adları
video hesab edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sorğunun strukturunun gəzilməsinə,
imkan/siyasət yoxlamasına, hər sorğu üzrə birləşdirməyə və cavabın məzmununa cavabdehdir.
Hər video üzrə işlər — əldə etmə, bütöv nəticənin keşlənməsi, kadr
ardıcıllığının təsviri (çağıran tərəfin bəyan etdiyi hər hansı audio transkripsiyasını da birləşdirir) və hər cəhd üzrə
metrikalar/dayandırma/təmizləmə — `videoBridgePipeline.ts` daxilindəki
`processVideoPart` arxasında gizlədilir; bu funksiya `preCall` dövrəsi daxilində hər video hissəsi üçün bir dəfə çağırılır.
Həmin modul həmçinin açıq port sərhədlərini müəyyən edir: `VideoMediaBrokerPort`
(baytların əldə edilməsi və seçilmiş kadrların çıxarılması), `VideoAudioTranscriptionPort`
(çağıran tərəfin bəyan etdiyi audio transkripsiyasının seçilmiş kadrların təsvirləri ilə birləşdirilməsi) və
`VideoDrilldownPort` (kadrların detallı araşdırılması məlumatlarının saxlanma sərhədi; hələ
`processVideoPart` funksiyasına qoşulmayıb — hazırda detallı araşdırma qeydlərini yalnız ayrıca `/api/modality-bridge/video/drilldown`
marşrutu yazır).

İctimai `/v1` sorğu yolu heç vaxt alt proses idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB həddi daxilində endirilir; sorğuya daxil edilmiş base64 videolar üçün
hər videonun dekodlaşdırılmış ölçüsünə konservativ 36 MiB həddi tətbiq olunur ki, model/mesajlar/struktur zərfi
ictimai JSON sorğuları üçün 50 MiB qəbul həddi daxilində qala bilsin. Daxil edilmiş məlumatın
uzunluğu və dekodlaşdırılmış ölçüsünün təxminləri yaddaş ayrılmasından əvvəl yoxlanılır. İlkin uzaq URL-də
və hər yönləndirmədə HTTPS tələb olunur; bunun üçün DNS sabitləməsi ilə yalnız ictimai ünvanlara çıxışa icazə verən
mövcud qoruyucu mexanizmdən istifadə edilir. Baytlar daha sonra dəqiq müəyyən edilmiş daxili
`POST /api/modality-bridge/video/extract` broker sərhədindən keçir. Həmin marşrut həm
`LOCAL_ONLY`, həm də `SPAWN_CAPABLE` kimi işarələnib, yalnız prosesə məxsus autentifikasiyadan keçmiş,
etibarlı loopback sorğusunu qəbul edir və heç vaxt URL, fayl sistemi yolu, icra edilə bilən fayl
və ya arqument siyahısı qəbul etmir. API-nin gövdə ölçüsünü yoxlayan emal zənciri və emaledicinin gövdəni hissə-hissə
oxuyan mexanizmi bir-birindən müstəqil olaraq broker girişinə 50 MiB həddi tətbiq edir. Onun məhdud növbəsi
eyni anda bir çıxarma əməliyyatı icra edir, dörd gözləyən tapşırığa icazə verir və
gözləyən giriş məlumatlarını 100 MiB ilə məhdudlaşdırır.

Broker daxilində `ffprobe` məxfi yerli faylı oxuyur; sabit format
icazə siyahısı pleylist və manifest formatlarını istisna edir. İcazə verilən MOV ailəsi
konteynerləri üçün xarici MOV məlumat istinadları standart olaraq deaktiv qalır və
sabit əmr onları aktivləşdirmir. Həm `ffprobe`, həm də `ffmpeg` yalnız
`file` protokoluna icazə verən siyahıdan, bir axından, sabit arqument massivlərindən,
əmr qabığı olmadan və `PATH` vasitəsilə tapılan icra fayllarından istifadə edir. Əlavə edilmiş şəkil tipli üz qabığı axınları
oynadıla bilən namizədlər hesab edilmir. Bütün oynadıla bilən axınlar limitlərə uyğun olmalıdır və
deterministik olaraq ən aşağı indeksin seçilməsinə keçməzdən əvvəl açıq şəkildə standart kimi təyin edilmiş axına
üstünlük verilir. Videolar 600 saniyə, hər ölçü üzrə 8,192 piksel və
33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg orta nöqtələrdən 1–16 JPEG kadr götürür, kiçik
girişləri böyütmədən uzun tərəfi ən çox 1,024 pikselə qədər kiçildir və
heç vaxt URL qəbul etmir. Standart nümunəgötürmə siyasəti `uniform`-dur. İxtiyari
`scene_aware` və eksperimental `segment_aware` siyasətləri artıq yoxlanılmış yerli axın üzərində bir əlavə
sabit FFmpeg keçidi həyata keçirir, məhdud sayda
`showinfo` səhnə vaxt nişanı seçir və detektor nasazlığı, vaxt aşımı, düzgün formalaşdırılmamış çıxış və ya boş
namizəd dəsti halında deterministik olaraq eyni
bərabər paylanmış orta nöqtələrə qayıdır. Seqmentə həssas rejim orta nöqtə nümunələrini
yoxlanılmış səhnə intervallarına mütənasib şəkildə ayırır; seqmentə həssas sübutlar və ehtiyat davranışı
aşağıda ətraflı izah olunur. Bütün siyasətlərdə seçimdən sonra
16 kadrlıq sərt limit tətbiq edilir. Səhnəyə həssas sorğunun yalnız
bir kadrlıq büdcəsi olduqda, o, aktiv tam video və ya fokus
pəncərəsinin bərabər paylanmış orta nöqtəsindən istifadə edir və `policyEffective: uniform` bildirir: tək bir seçilmiş səhnə kadrı
zaman intervalının hər iki ucunu qoruya bilməz. Çağıran tərəf istəyə görə
sonlu fokus pəncərəsi (`start`/`end`, saniyə ilə) təqdim edə bilər; sərhədlər media
müddəti ilə məhdudlaşdırılır, tərsinə verilmiş və ya sonlu olmayan pəncərələr rədd edilir və bütün nümunəgötürmə
siyasətləri yalnız normallaşdırılmış interval daxilində həyata keçirilir. Nəticədə alınan
pəncərə nümunəgötürmə metaməlumatlarına və etibarsız təsvirin
prefiksinə daxil edilir ki, sonrakı modellər fokuslanmış fraqmenti tam
zaman xəttindən fərqləndirə bilsin.

Semantik təsvir fokusu ayrıca, açıq şəkildə təyin edilən parametrdir. Standart `full`
təhlil rejimi mövcud kadr təlimatını qoruyur və sorğu
mətnini heç vaxt təsvir modelinə ötürmür. `focused` rejimində körpü eyni Chat və ya Responses
konteynerindən yalnız istifadəçinin yazdığı ən son boş olmayan `text`/`input_text` mətnini oxuyur,
onu NFC formasına normallaşdırır, idarəetmə simvollarını və boşluqları yığcamlaşdırır
və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Nəticə boş olarsa, olduğu kimi
`full` təlimatına qayıdılır. Yararlı ipucu xüsusi
etibarsız istifadəçi konteksti blokunda JSON kimi seriallaşdırılır və yalnız müşahidə edilə bilən detallara üstünlük verə bilər; o,
mediada görünən və ya eşidilən təlimatlara əməl etməmək barədə ayrıca xəbərdarlığı
ləğv edə bilməz. Mətn fokusu heç vaxt `start`/`end` qiymətlərini çıxarmır və
zaman üzrə nümunəgötürməni dəyişmir.

#### FU-07 struktur seqment sübutları

`segment_aware` artıq yoxlanılmış
yerli video axını üzərində bir məhdud ilkin təhlil keçidindən istifadə edir. Sabit filtr zənciri əvvəlcə eni ən çox 320 pikselə
qədər kiçildir, səhnə dəyişikliklərini və donmuş intervalları aşkarlayır, sonra bulanıqlıq, orta parlaqlıq və məkan/zaman məlumatları üçün
saniyədə 1 kadr götürür. Keçid
600 struktur nümunəsi, bir FFmpeg/filtr axını, eyni
yalnız `file` protokoluna və konteynerlərə icazə siyahıları, proses çıxışı üçün 1 MiB həddi
və brokerin ortaq dayandırma/son müddəti daxilində ən çox 30 saniyə ilə məhdudlaşdırılır. O, heç vaxt
sorğudan əmr, filtr, yol və ya URL qəbul etmir.

Struktur qiymətlər semantik video
anlayışı deyil, deterministik nümunəgötürmə sübutlarıdır. Onlar subyektləri, hərəkətləri, təsvirləri, nitqi və ya istifadəçi
niyyətini müəyyən etmir. Səhnə və donma sərhədləri seqmentlər yaradır; donma əhatəsi, bulanıqlıq,
ekspozisiya, məkan detalları və zaman üzrə dəyişiklik yalnız mövcud
1–16 kadrlıq büdcənin necə bölüşdürülməsinə təsir edir. Tam donmuş seqment bir kadrla məhdudlaşdırılır,
donmamış seqmentlər isə qalan büdcə uğrunda rəqabət aparır. Sərhədlərin sayı
kadrların sayını keçdikdə, zaman xəttinin bərabər əhatəsi qorunur ki, başlanğıcdakı sürətli kadr keçidləri
sondakı uzun seqmenti gizlədə bilməsin. Donma sərhədindən 1 saniyəlik
təhlil ayırdetməsi daxilində olan səhnə sərhədləri birləşdirilir.

Çatışmayan filtrlər, düzgün formalaşdırılmamış/boş sübutlar, detektor xətası və ya məhdud
ilkin təhlilin vaxt aşımı zamanı icra dayandırılmır və olduğu kimi bərabər paylanmış orta nöqtə siyasətinə keçilir. Çağıran tərəfin
dayandırması və ya brokerin son müddətinin bitməsi zamanı isə davam edilmir: icra olunan
alt proses dayandırılır, sonrakı kadr çıxarılmasının qarşısı alınır və məxfi müvəqqəti qovluq ağacı
`finally` daxilində silinir.

`scripts/perf/video-bridge-fu07-eval.ts` dublikatlar aradan qaldırıldıqdan sonra təsvir çağırışlarına qənaət, intensiv hərəkət üçün büdcə bölgüsü,
bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun son hissəli sürətli kadr keçidləri və tədricən solma zamanı
yanlış müsbət nəticələr üçün deterministik real FFmpeg
sınaq nümunələri yaradır. O, ilkin təhlilin faktiki keçən vaxtını və `/usr/bin/time`
mövcud olduqda alt prosesin CPU istifadəsini və pik RSS-ni qeydə alır. Onun keyfiyyət yoxlamaları yalnız struktur
yoxlama meyarlarıdır. Real təsvir modelinin keyfiyyəti `HOLD` olaraq qalır, çünki bu sınaq mühitinin
icazəli son nöqtəsi və ya sabitlənmiş qiymətləndiricisi yoxdur. Pul qənaəti də `HOLD` olaraq qalır,
yalnız `--caption-cost-per-call-usd` açıq şəkildə hər çağırış üçün müsbət
təxmini xərc təqdim etdikdə bu dəyişir; skript heç bir nəticəni uydurmur.

Hər kadr 4 MiB, bütün xam kadrlar birlikdə 23 MiB, seriallaşdırılmış broker cavabı isə 32 MiB ilə məhdudlaşdırılır. Özəl müvəqqəti qovluq
`finally` daxilində silinir. OmniRoute FFmpeg-i özündə ehtiva etmir və icra olunan fayl üçün fərdi
yol qəbul etmir. Kadr təsvirləri yaradılmazdan əvvəl körpü konservativ vizual
dublikat təmizləmə mərhələsi tətbiq edir: hər JPEG 16×16 ölçülü boz çalarlı buferə endirilir və
yalnız son saxlanılan kadrla müqayisə olunur. Tələb olunan təsvir büdcəsi
bir kadrdan çox olduqda, çıxarma prosesi həmin büdcənin ən çox iki misli qədər,
lakin heç vaxt 16 kadrdan çox olmayan məhdud namizəd toplusu təqdim edir.
Tələb olunan hədd yalnız dublikatlar təmizləndikdən sonra tətbiq olunur; büdcə ən azı
iki olduqda, son seyrəltmə zamanı ilk və son
seçilmiş namizədlər saxlanılır. Versiyalaşdırılmış
`grayscale-16x16-mean-cells-v2` siyasəti orta parlaqlıq fərqi ilə
normallaşdırılmış fərqi ən azı 0.05 olan miniatür xanalarının
nisbətindən daha böyük olanını istifadə edir. Dublikat həddi sabit 0.04 dəyəridir; bu dəyər
icra vaxtı parametri kimi təqdim edilmək əvəzinə, proqnozlaşdırıla bilən davranış üçün seçilib. Bu ikinci
yüksək kontrastlı siqnal yalnız orta qiymətə əsaslanan müqayisənin gizlədə biləcəyi kiçik hərəkətləri və görünən mətn
dəyişikliklərini qoruyur. Müqayisə və ya dekoder xətaları zamanı kadrlar atılmır və
əhatə qorunur. Çıxış metadatasında çıxarılmış namizədlər, uğurla istifadə olunmuş
kadrlar və atılmış vizual dublikatlar ayrıca göstərilir.

Açıq şəkildə işarələnmiş video hissəsi vaxt nişanlı kadr vərəqi tələb edə bilər.
Körpü ən çox 4 sütunlu, 16 kadrlı JPEG şəbəkəsi yaradır. Hər 512 piksellik xana
mənbə vaxt nişanını yüksək kontrastlı aşağı zolağa həkk edir; eyni vaxt nişanları
sonrakı əlaqələndirmə və audit üçün mətn metadatasında da saxlanılır. Tam
JPEG yenə də 32 MiB ilə məhdudlaşdırılır. `sharp` şəbəkəni dekodlaşdıra və ya birləşdirə bilməzsə,
körpü ayrı-ayrı JPEG kadrlarına qayıdır; müştərinin dayandırma siqnalı isə
vərəq əməliyyatı boyunca ötürülür.

Tətbiqə buraxılış üçün sübutlar sintetik birləşdirmə
mikrobençmarkından qəsdən ayrı saxlanılır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görmə modelləri üçün
sxem versiyası ilə idarə olunan A/B sınaq mexanizmini müəyyən edir. O,
provayderin bildirdiyi tokenləri, başdan sona keçən real vaxtı (vərəqin birləşdirilməsi daxil olmaqla),
model çağırışlarının sayını və manifestdə müəyyən edilmiş faktların saxlanmasını ölçür. Xam model cavabları
hesabata yazılmır; yalnız SHA-256 heşləri və uyğun gələn fakt identifikatorları saxlanılır.
`--execute-real` ötürülməyincə və
`--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilməyincə sınaq mexanizmi heç bir şəbəkə və ya ödənişli model çağırışı etmir. Bu
açıq şəkildə başladılmış real icra olmadan onun maşınla oxuna bilən qərarı `HOLD` olaraq qalır; təkcə sintetik
faydalı yük/çağırış sayı ölçmələri tətbiqə buraxılış üçün sübut sayılmır.

Çağıran tərəflər artıq zamanla uyğunlaşdırılmış mətnə malik olduqda, dəstəklənən video
hissəsinə istəyə bağlı `transcript.cues` massivi əlavə edə bilərlər. Hər mətn seqmentində `text`,
yoxlama ilə müəyyən edilmiş müddət daxilində sonlu `start`/`end` intervalı və icazə siyahısına daxil olan
`source` (`client`, `embedded` və ya `audio-bridge`) olmalıdır; `confidence` üçün standart dəyər
`1`-dir və o, `0` ilə `1` arasında qalmalıdır. Tam eyni mətn seqmentləri birləşdirilir.
OmniRoute bu metadata əsasında heç vaxt transkripsiya başlatmır: yoxlanılmış seqmentlər
mənbə, etibarlılıq dərəcəsi və intervalla birlikdə təsvir nəticəsinə köçürülür və
kadr təsvirləri ilə yanaşı etibarsız müşahidələr kimi təqdim olunur. Etibarsız,
diapazondan kənar və ya mənşəyi göstərilməyən mətn təsvir axınına qarışdırılmaq əvəzinə
rədd edilir. Sorğu gövdəsindəki hər iki transkript kanalı təqdim olunan
mənşəni `client` kimi normallaşdırır; buna özünün bəyan etdiyi `embedded` və ya `audio-bridge`
etiketləri də daxildir. Yalnız serverin idarə etdiyi adapter bu etibarlı etiketləri
yalnız kod vasitəsilə əlçatan olan `trustedSource` arqumenti ilə təyin edə bilər; sorğudakı JSON sahəsi
həmin arqumentə çata bilməz. Transkript mətni mənşəyindən
asılı olmayaraq mediadan əldə olunmuş etibarsız məzmun olaraq qalır və heç vaxt avtorizasiyanı müəyyən etməməlidir.

Təcrübəli çağıran tərəf eyni video üçün `audioTranscript` treki təqdim edə bilər;
bu, server transkripsiyasının sübutu kimi deyil, müştərinin təqdim etdiyi mətn kimi qəbul edilir.
Birləşdirmə qatı vizual və audio müşahidələri
vahid son müddət və dayandırma siqnalı altında icra edir, onları ortaq zaman xəttində sıralayır, tam
dublikatları birləşdirir və yalnız bir tərəf uğurlu olduqda qismən nəticə bildirir.
Etibarsız `audioTranscript` bütün videonun emalını uğursuz etmək
əvəzinə həmin qismən nəticə ilə yekunlaşır — vizual
təsvir saxlanılır, audio qolu isə həssas detallardan təmizlənmiş xəta kodunu qeydə alır.
Hər qolun əlçatanlıq vəziyyəti, qismən nəticə bayrağı
və həssas detallardan təmizlənmiş xəta kodları təsvir nəticəsində,
qoruyucu mexanizm metadatasında (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nəticə keşinin metadatasında və körpünün
birləşdirmə sayğaclarında saxlanılır. Standart Video Bridge emal yolu nitqdən mətnə çevirməni işə salmır
və medianın ikinci nüsxəsini endirmir; açıq şəkildə təqdim olunmuş həmin trek olmadıqda, o,
yalnız video ilə işləyir.

**Transkriptin saxlanması (#12150 P1).** Bu, Video Bridge (özü də ayrıca aktivləşdirilir) transkript seqmentini təqdim etdikdə avtomatik tətbiq olunur — ayrıca
saxlama bayrağı yoxdur. Sorğu hər hansı transkript seqmentini (çağıran tərəfin bildirdiyi
`transcript` və ya birləşdirilmiş `audioTranscript`) təqdim etdikdə, qoruyucu mexanizm onu
`videoBridgeObserved` kimi işarələyir və video təsvirinin məxfiləşdirilmiş kölgə nüsxəsini yaradır —
bu, hər seqmentin sərbəst mətnli gövdəsinin
`[redacted-video-transcript]` ilə əvəz olunduğu eyni təqdimatdır; əvəzetmə sətir yığılmazdan əvvəl
strukturlaşdırılmış seqment sahəsində aparılır (heç vaxt yastılaşdırılmış mətn təhlil edilmir, buna görə də
heç bir seqment məzmunu — zərərli və ya adi, o cümlədən `[inaudible]`/`[music]`
kimi `]` ehtiva edən gövdələr — saxlanıla bilməz). Daimi saxlanılan çağırış jurnalının sorğu gövdəsində
videodan əldə edilmiş hər mətn hissəsi məzmun bərabərliyi əsasında uyğunlaşdırılaraq həmin məxfiləşdirilmiş kölgə nüsxəsi ilə
əvəz olunur; `fullText` istinad nöqtəsi çağırışdan əvvəlki qoruyucu mexanizmin yekunlaşdırılmış
məlumat yükündən yenidən oxunur, buna görə də zəncirdəki sonrakı qoruyucu mexanizmlər (PII və
giriş məlumatlarını maskalayan mexanizmlər, prioritetləri 10/95) təsvir mətnini yerində yenidən yazdıqdan və
sistem təlimatı/ötürmə/yaddaş inyeksiyası mesaj massivinin strukturunu dəyişdirdikdən sonra da uyğunlaşdırma
uğurlu olur. Modelə göndərilən gövdə dəyişməz qalır. Müşahidə olunmuş sorğu həmçinin
daimi Yaddaşa heç bir məlumat yazmır (həm sorğudan, həm də cavabdan məlumat çıxarılması ötürülür),
beləliklə, modelin öz cavabı transkript mətnini Yaddaşa təkrar yaza bilmir.

**Xam video sahələri (#12430).** Körpü aktiv olduqda və yerli video dəstəyi naməlum olduqda və ya mövcud olmadıqda, təyin edilmiş `transcript`/`audioTranscript` sahələri də, hətta təsvirin yaradılması uğursuz olduqdan və ya `maxVideos` həddinə çatdıqdan sonra belə, `videoBridgeObserved` siqnalını aktivləşdirir. `null` və boş sətirlər nəzərə alınır; mövcud olmayan sahələr və videoya aid olmayan metaməlumatlar isə nəzərə alınmır. Saxlanılan nüsxələrdə bu sahələr məxfiləşdirilir və ya sorğu buraxılır, keşlərdən/Yaddaşdan isə istifadə edilmir.

Bu ehtiyat emal yollarında çağıran tərəfin etibarlı seqmentləri qeyri-standart provayder sahələri əvəzinə dəstəklənən `text`/`input_text`
hissələrinə çevrilir. Sorğu ilə verilən hər iki transkript zolağı
etibarsız `client` müşahidələri olaraq qalır və videonun
təsvir edilmədiyi, vaxt nişanlarının isə media ilə tutuşdurularaq yoxlanılmadığı açıq şəkildə bildirilir. Mövcud
256 seqment/64 KiB ümumi limitləri və hər seqment üzrə limitlər hər iki zolağa birlikdə tətbiq olunur;
vaxt nişanları brokerin 600 saniyəlik yuxarı həddinə və verilmiş hər hansı fokus
intervalına uyğun olmalıdır. Etibarsız zolaqlar ixtiyari mətn kimi ötürülmür, atılır; onların
birgə limiti aşılmadıqca etibarlı olan digər zolaq yenə də istifadə edilə bilər. Null/boş
sahələr mətn əlavə etmir. Bu ehtiyat mexanizm media yüklənməsi və ya transkripsiya əlavə etmir.
Transkript genişləndirmə sahələri ehtiyat video daşıyıcısından və onun
`video_url`/`source` obyektlərindən silinir. OpenAI ötürmə formatının icazə siyahısı sərt olaraq qalır; yerli dəstəyi naməlum olan
video daşıyıcıları əlçatan qalır, yalnız mətn qəbul etdiyi məlum olan hədəflər isə təhlükəsiz işarələri saxlayır.
Strukturlaşdırılmış məxfiləşdirmə kölgə nüsxələri əlavə edilmiş transkript mətnini qoruyur,
çağıran tərəfə məxsus ilkin sorğu isə dəyişməz qalır. Yerli dəstəyi olan hədəflər və
söndürülmüş körpülər mövcud yan keçmə davranışını saxlayır.

Əlavə saxlanılan nüsxələr də eyni müşahidə olunmuş sorğu siqnalından istifadə edir. Qoruyucu mexanizmdən əvvəlki xam
müştəri sorğusunun anlıq nüsxəsi, yaddaşda gözləyən sorğu və erkən
rədd edilmiş sorğu jurnalı video hissələrindəki transkript sahələrini struktur səviyyəsində əvəz edir;
emal mərhələləri və kontekst ötürülməsi tərəfindən sintez edilən sətir tipli təlimatlar
sorğu gövdəsinin daimi saxlanılma nöqtəsində məxfiləşdirilir. Daimi saxlanılan `video_content_removed` işarəsi
`previous_response_id` vasitəsilə davametmənin qəsdən atılmış mətni yenidən qurmaq
əvəzinə təhlükəsiz şəkildə bloklanmasını təmin edir. Müşahidə olunmuş sorğu jurnala yazılmazdan əvvəl
hissələr üzrə məxfiləşdirmə kölgə nüsxəsini itirərsə və ya sonrakı sorğu dəyişikliklərindən sonra bir neçə video kölgə nüsxəsindən
hətta biri uyğun gəlməzsə, qismən məxfiləşdirilmiş transkripti saxlamaq əvəzinə
saxlanılacaq sorğu gövdəsi tamamilə buraxılır.

Müşahidə olunmuş sorğu üçün model cavabı transkriptin istənilən hissəsindən
strukturlaşdırılmış seqment sərhədi olmadan sitat gətirə bilər. Buna görə onun daimi saxlanılan çağırış jurnalındakı
`responseBody` buraxılma işarəsi ilə əvəz edilir; təfərrüatlı
emal artefaktı (yuxarı axın/müştəri gövdələrini və axın fraqmentlərini ehtiva edə bilər)
saxlanılmır. Semantik, idempotentlik və mühakimənin təkrar icrası keşləri həmin sorğu üçün
oxuma və yazma əməliyyatlarını ötürür. Provayder sorğusu və müştəriyə görünən
cavab dəyişməz qalır. Təfərrüatlı artefakt buraxıldıqda erkən keepalive baytları müvəqqəti
buferdən boşaldılır. Kiro-nun yanlış formatlı EventStream
xəbərdarlığı yalnız məlumat yükünün bayt sayını bildirir, onun məzmununu və ya JSON
təhlilçisinin xam xətasını heç vaxt bildirmir.
Bu, əlaqəsiz bütün provayder/plagin diaqnostikalarının yoxlanıldığını
iddia etmir; daha geniş saxlanma nöqtələri yoxlaması #11658-də izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrıca,
loopback/token autentifikasiyalı keş infrastrukturudur. Hər əməliyyat həmçinin
kanonik, qeyri-şəffaf təhlükəsizlik subyekti ID-si tələb edir. İstehsal mühitində çağıran tərəf aktivləşdirilməzdən əvvəl o,
bu ID-ni autentifikasiyadan keçmiş icarəçidən əldə etməli və heç vaxt
müştərinin seçdiyi dəyəri ötürməməlidir. Keş açarları həmin subyekti kanonik sessiya və
video istinad ID-lərinə bağlayır, yalnız onların SHA-256 əsasında törədilmiş açarlarını saxlayır və həm oxuma,
həm də silmə əməliyyatlarını eyni subyektlə məhdudlaşdırır. Keş hər qeyd üçün ən çox 16 törəmə JPEG
kadrı saxlayır, onların etibarlılıq müddəti on dəqiqədən sonra bitir və məhdudlaşdırılmış
`start`/`end` oxumalarını və ya sessiyanın açıq şəkildə silinməsini dəstəkləyir.

Hər subyekt 16 qeyd və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşdırılır. Bu
limitlər qlobal 64 qeyd/256 MiB yuxarı həddindən müstəqildir: subyekt kvotası
dolduqda, qlobal LRU çıxarılması nəzərdən keçirilməzdən əvvəl yalnız həmin subyektin ən uzun müddətdir istifadə olunmayan
qeydləri çıxarılır. Keş fəaliyyəti zamanı vaxtı bitmiş qeydlər həm subyekt, həm də
qlobal uçotdan təmizlənir, ləğvetmə və doğrulama uğursuzluğu isə
qismən əvəzetməni təsdiqləmir.

Keş qeyri-kanonik Base64-ü, artıq doldurma simvollarını, JPEG olmayan medianı, qüsurlu və ya
yarımçıq JPEG-ləri, eləcə də məhdudiyyətli tam təsvir `sharp`
dekodlaşdırması zamanı xəbərdarlıq yaradan JPEG-ləri rədd edir. Qəbul edilmiş hər təsviri kanonik JPEG kimi yenidən kodlaşdırır, en və hündürlüyü
çağıranın sahələrinə etibar etmək əvəzinə dekodlaşdırılmış baytlardan müəyyən edir və sondakı
poliqlot baytları saxlamaq əvəzinə atır. Hər iki kvotada yalnız məhdud ölçülü kanonik sıxılmış bufer
nəzərə alınır. JSON ötürmə limiti 32 MiB
dekodlaşdırılmış giriş həddi üçün Base64-ün əlavə həcmini də əhatə edir. Hər
saxlanılan törəmə öz təsdiqlənmiş JPEG formatını/ayırdetməsini, nümunə götürmə siyasətini,
törəmə versiyasını, yaradılma vaxtını, serverdə hesablanmış məzmun heşini və heşlənmiş ana
istinadını, həmçinin etibarlı çağıranın ana məzmun heşini qeydə alır. Ləğv vəziyyəti
atomar keş yazılışından əvvəl asinxron dekodlaşdırma/heşləmə mərhələləri arasında yoxlanılır.

Bu mərhələ hələ istehsal mühitindəki yaradıcını marşruta qoşmur və
müxtəlif ayırdetməli variantların seçimini təmin etmir. Buna görə də şəffaf Video Bridge sorğu
yolu əlavə iş yükü yaratmır, icarəçiyə bağlı subyektin törədilməsi və
tam FU-08 çoxayırdetməli həyat dövrü isə tamamlanmış davranış kimi
sənədləşdirilmək əvəzinə açıq şəkildə sonrakı işlər olaraq qalır.

Kadrlar konfiqurasiya edilmiş Video modeli ilə ardıcıl təsvir edilir. Boş
Video əvəzetmə dəyəri Vision parametrini miras alır; hər ikisi boşdursa, Vision
avtomatik marşrutlayıcısı faktiki istifadə ediləcək görmə imkanlı modeli seçir. Uğurlu təsvirlər
orijinal hissəni sabit `[Video description:` prefiksi ilə əvəz edir; bu prefiks həm də
mətni mediadan əldə edilmiş etibarsız müşahidə kimi işarələyir və sonrakı
modellərə mediada tapılan təlimatlara əməl etməməyi bildirir. Kadr təsvirlərinin keş açarlarına
JPEG baytları, sorğu mətni, vaxt nişanı və faktiki model daxildir; yalnız uğurlu
təsvirlər keşlənir. Keş qeydləri ehtiyat model də daxil olmaqla faktiki uğurlu yaradıcı modeli
saxlayır; müxtəlif kadrlar müxtəlif modellər tərəfindən
yaradıldıqda körpü `mixed` bildirir. Keş uyğunluğu həmin yaradıcı identifikatorunu
yenidən istifadə edir, onu tələb edilmiş marşrutlaşdırma planı kimi yenidən etiketləmir. Bütöv video nəticəsinin
keş açarı çıxışı dəyişdirən hər girişə əsaslanır — sorğu mətni, faktiki
model, nümunə götürmə siyasəti, kadr sayı, semantik təhlil rejimi, normallaşdırılmış
fokus ipucunun SHA-256 barmaq izi, fokus pəncərəsi, `transcript`,
`audioTranscript` və kontakt vərəqi bayrağı — buna görə bu
ölçülərdən hər hansı birinin dəyişməsi köhnə nəticənin təkrar istifadəsinə deyil, keşdə uyğunluğun tapılmamasına səbəb olur. Vizual təkrarsızlaşdırma siyasətinin
versiyası, həddi və məhdud namizəd kadr sayı da
nəticə keşinin açarında və metaverilənlərində açıq şəkildə göstərilir; buna görə siyasət dəyişikliyi köhnə
bütöv video təsvirini yenidən istifadə edə bilməz. Nəticə keşinin v4 metaverilənləri rejimi və
barmaq izini saxlayır, istifadəçinin xam tapşırığını isə heç vaxt saxlamır. Qoruyucu mexanizmin metaverilənləri həm
tələb edilmiş, həm də faktiki təhlil rejimlərini bildirir; istifadə oluna bilən
istifadəçi mətni olmadan tələb edilmiş `focused` rejimi faktiki olaraq `full` kimi bildirilir.

Qoruyucu mexanizm dəstəklənən hər video hissəsini çıxarır, lakin
`modalityBridgeVideoMaxVideos` sayından çoxunu təsvir etmir. Hədəfin
`supportsVideo === false` olduğu təsdiqləndikdə, uğursuz və limitdən artıq videolar açıq təhlükəsiz
mətn işarələrinə çevrilir ki, heç bir xam video qalmasın. İmkan məlum olmadıqda, həmin hissələr
video daşıyıcısını saxlayır; hər hansı ehtiyat transkript yuxarıdakı məhdud mətn
çevrilməsinə uyğun olur. `supportsVideo === true` olan hədəflər körpüdən yan keçir.
Müştəri sorğusunun dayandırma siqnalı endirməyə, broker növbəsinə,
altproseslərə və təsvir çağırışlarına ötürülür; dayandırma videolar arasında icranı saxlayır və heç vaxt xəta zamanı
xam medianın keçməsinə icazə vermir.

İcra vaxtı parametrləri verilənlər bazasında saxlanılır və Zod ilə yoxlanılır:

| Açar                                | Standart    | Aralıq / davranış                                                                                               |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İcra vaxtında istəyə bağlı, ayrıca aktivləşdirilir                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi təsvirləri saxlayır; `focused` məhdud, etibarsız son istifadəçi kontekstindən istifadə edir        |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` və ya mütənasib `segment_aware`; detektorun nasazlığı zamanı `uniform` istifadə edilir |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Əvvəldən saxlanılmış, 120 saniyədən yuxarı Video vaxt aşımı dəyərləri
brokerin son müddəti ilə məhdudlaşdırılır; həmin həddən yuxarı yeni parametr yazılışları rədd edilir.
`GET /api/modality-bridge/video/runtime` autentifikasiya və ya icra mühitinin yoxlanmasından əvvəl
etibarlı nişanla təsdiqlənmiş yerli loopback mənşəyi tələb edir, sonra isə idarəetmə
autentifikasiyası tələb edir. O, yalnız `available`, təmizlənmiş FFmpeg/ffprobe versiyalarını və
icra mühiti əlçatan olmadıqda sabit səbəb qaytarır. Daxili çıxarma son nöqtəsi
ictimai yükləmə API-si deyil: növbənin dolması `503` və `Retry-After`, çağıranın
bağlantını kəsməsi `499`, brokerin sabit son müddətinin bitməsi isə `504` qaytarır. Çevrilmiş cavablar
Vision və ya Audio seqmentlərini silmədən mərkəzi
`x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` əlavə edir.

### Fərdi identifikasiya məlumatlarının maskalanması (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** faydalı yükü klonlayır, `system`, `messages`, `input` və
  `prompt` sahələrini (sadə sətir elementləri də daxil olmaqla) gəzir və sətir tipli
  `content`/`text` sahələrinə `processPII()` (`@/shared/utils/inputSanitizer`
  modulundan) tətbiq edir. `PII_REDACTION_ENABLED=true` olduqda, aşkarlanmış PII
  göndərilən faydalı yükdə maskalanır. Bu, `INPUT_SANITIZER_MODE` parametrindən
  (yalnız prompt inyeksiyası siyasətini idarə edir) asılı deyil. Maskalama söndürüldükdə,
  çağırış məzmunu yenidən yazmadan aşkarlama saylarını qeydə alır.
- **`postCall`** cavabın dərin klonunu yaradır, `sanitizePIIResponse()` funksiyasını və
  Responses API strukturuna uyğun maskalayıcını (`maskResponsesOutput` —
  `output_text` və `output[].content[].text` sahələrini əhatə edir) işə salır. Hər hansı
  maskalama baş verərsə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruma mexanizmi heç vaxt bloklamır; o, yalnız annotasiya əlavə edir (`meta.detections`,
`meta.redacted`) və ya yenidən yazır.

#### Növ üzrə seçim, fərdi şablonlar və aşkarlama sayğacları

**İdarəetmə paneli → Parametrlər → Təhlükəsizlik → PII maskalanması** _nəyin_ maskalanacağını seçir. Bu,
maskalamanı aktivləşdirmir: bunu hələ də `PII_REDACTION_ENABLED` (sorğu) və
`PII_RESPONSE_SANITIZATION` (cavab + SSE) idarə edir; hər ikisi standart olaraq söndürülüb.

- **Növ üzrə seçim** — daxili identifikatorlar
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) faylında sadalanır. Təyin edilmədikdə bütün
  növlər nəzərdə tutulur (bu parametr mövcud olmamışdan əvvəlki davranış). Sorğu mühərrikinin
  `ssn_us` şablonu `ssn` ilə uyğunlaşdırılır. Şablonlar (Minimal, Standart, Maliyyə,
  Braziliya, ABŞ, Tam) yalnız istifadəçi interfeysindəki seçim xanalarını doldurur.
- **Fərdi şablonlar** — 20-yə qədər müntəzəm ifadə və ya əvəzedici simvollu şablon (`*` = boşluq
  olmayan 64-ə qədər simvol, `?` = bir simvol). Uyğunluqlar `[CUSTOM_REDACTED]` ilə əvəz edilir.
  Hər şablon `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) funksiyasından keçir: ən çox 500 simvol, bayraqlar yalnız
  `g i m s u` ilə məhdudlaşır, kompilyasiya olunmalı, `safe-regex` yoxlamasından (katastrofik
  geri izləmə) keçməli və boş sətirlə və ya maskalama əvəzedicisi ilə uyğun gəlməməlidir.
  Yoxlamadan keçməyən şablon saxlanarkən və sınaqdan keçirilərkən rədd edilir, saxlanmış sətir
  yoxlamadan keçmədikdə isə icra zamanı kompilyasiya edilmək əvəzinə ötürülür. Fərdi şablonlar yalnız
  maskalama aktiv olduqda işləyir.
- **Aşkarlama sayğacları** — yaddaşda saxlanılan və
  yenidən başladıldıqda sıfırlanan növ üzrə saylar (heç vaxt uyğun gələn dəyərlər deyil)
  (`src/lib/pii/piiDetectionStats.ts`). Onlar yalnız
  maskalama aktiv olduqda artır.

Parametrlər `key_value` cədvəlində (`pii_settings` ad fəzası,
`src/lib/db/piiSettings.ts`) saxlanılır və 1 saniyəlik keş vasitəsilə oxunur. API:

| Metod  | Yol                      | Məqsəd                                                                               |
| ------ | ------------------------ | ------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Bayrağın vəziyyəti, `enabledTypes`, `customPatterns`, aşkarlama sayğacları           |
| `PUT`  | `/api/settings/pii`      | `enabledTypes` (`null` = hamısı) və/və ya `customPatterns` dəyərlərini əvəz etmək    |
| `POST` | `/api/settings/pii/test` | Bir şablonu ən çox 8 KB ölçülü nümunə üzərində sınaqdan keçirmək; heç nə saxlanılmır |

Hər üçü idarəetmə autentifikasiyası tələb edir və gövdəni Zod ilə yoxlayır
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt inyeksiyası (`promptInjection.ts`)

İstifadəçinin təqdim etdiyi məzmunda zərərli strukturları aşkarlayır və
konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və konstruktor
seçimləri ilə idarə olunur:

| Parametr       | Mühit dəyişəni                                                                                                 | Standart dəyər | Təsir                                                                                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivdir       | `INPUT_SANITIZER_ENABLED`                                                                                      | `true`         | `false` olduqda, qoruma mexanizmi emalı dərhal dayandırır.                                                                                                                                                       |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                | `warn`         | İnyeksiya siyasəti: `block`, `warn` və ya `log`. (`redact` geriyə uyğunluq üçün qəbul edilir, lakin inyeksiya mətnini **silmir**; sorğudakı PII-nin yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alternativ ad: `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`         | Bloklama üçün tələb olunan minimum ciddilik səviyyəsi. Standart olaraq orta səviyyə yalnız müşahidə olunur.                                                                                                      |

**Rejim üstünlüyü** (`getMode`): çağıran tərəfin `options.mode` dəyəri →
`INJECTION_GUARD_MODE` **DB funksiya bayrağı ilə əvəzləmə** (İdarəetmə paneli → Parametrlər →
Funksiya bayraqları) → `INJECTION_GUARD_MODE` mühit dəyişəni → `INPUT_SANITIZER_MODE` mühit dəyişəni →
`warn`. Beləliklə, idarəetmə panelindəki əvəzləmə mühit dəyişənlərindən üstün tutulur, buna görə Funksiya
bayraqları interfeysi işləyən qoruma mexanizmini canlı idarə edir (yenidən başlatmadan). DB-dən oxuma nasazlığa qarşı təhlükəsizdir:
xəta baş verərsə, qoruma mexanizmi mühit dəyişənlərinə əsaslanan davranışa qayıdır və heç bir
əvəzləmə təyin edilmədikdə davranış yalnız mühit dəyişənlərinə əsaslanan seçimlə eynidir.

Aşkarlama mənbələri:

1. `@/shared/utils/inputSanitizer` modulundan `sanitizeRequest()` (emal zəncirinin
   digər yerlərində də istifadə olunan ortaq detektor dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`, hər ikisinin ciddilik səviyyəsi `high`).
3. Konstruktor seçimləri vasitəsilə ötürülən ixtiyari `customPatterns` (sətirlər, müntəzəm ifadələr
   və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` olduqda **və** ən azı bir aşkarlama ciddilik həddinə
çatdıqda, `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` qaytarır. `warn`/`log` rejimlərində qoruyucu mexanizm hadisəni jurnala yazır, lakin
çağırışa icazə verir. Ortaq köməkçi funksiya `evaluatePromptInjection()` reyestrdən keçmədən
promptları qiymətləndirməli olan çağıran tərəflər üçün də ixrac edilir.

**Skan həddi (v3.8.20):** detektor birləşdirilmiş prompt mətninin yalnız **ilk 16 KB** hissəsini
yoxlayır — `src/shared/utils/inputSanitizer.ts` faylında
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Həm `detectInjection()`, həm də
`evaluatePromptInjection()` nümunələr üzrə dövrü işə salmazdan əvvəl
`slice(0, MAX_INJECTION_SCAN_BYTES)` tətbiq edir. İnyeksiya təlimatları girişin əvvəlinə yaxın yerləşdiyindən, bu,
aşkarlamanı zəiflətmədən yüzlərlə KB həcmindəki yüklərdə requlyar ifadələrin CPU/GC yükünü məhdudlaşdırır (bax:
#3932, #4041).

### Giriş məlumatlarının maskalanması (`credentialMasker.ts`)

**Hər iki** mərhələdə, standart zəncirdə sonuncu olaraq işləyir (prioritet `95`). Gedən yükdən (mesajın
məzmunu, alət çağırışının arqumentləri, alət nəticələri) **və** provayder cavabından geniş tanınan
API açarı / məxfi token nümunələrini maskalayır ki,
prompta yapışdırılmış (və ya alət nəticəsində geri qaytarılmış) giriş məlumatları nə
yuxarı axındakı provayderə, nə də müştəriyə sızsın.

- **Yalnız açıq şəkildə aktivləşdirildikdə**, PII maskalanması ilə eyni qaydaya əsasən (Sərt Qayda #20 ilə əlaqəli):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Deaktiv olduqda qoruyucu mexanizm heç bir əməliyyat yerinə yetirmir —
  heç vaxt bloklamır və heç nəyi yenidən yazmır.
- `redactCredentials()` bütün yük/cavab ağacını gəzir (`walkValue()`,
  prototipin çirkləndirilməsinə qarşı təhlükəsizdir, `WeakSet` vasitəsilə dövrlərə qarşı qorunur) və uyğunluqları
  `[REDACTED:<type>]` əvəzedicisi ilə əvəz edir, yalnız həqiqətən
  dəyişmiş budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM provayder açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), məxfi açarları / JWT-ləri,
  giriş məlumatları olan bağlantı sətirlərini (`mongodb://user:pass@...` və s.) və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq formasındakı açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ümumi mətn requlyar ifadəsi ilə deyil, struktur əsasında maskalanır (yalnız dəyər dəyişir,
  `Bearer `/`Basic ` kimi sxem prefiksləri saxlanılır).
- Qoruyucu mexanizm heç vaxt bloklamır; o, yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiya əlavə edir (`meta.credentialsRedacted`, `meta.count`).

Reqressiyadan qorunma testi: `tests/unit/credential-masker-guardrail.test.ts`.

## Baza müqaviləsi (`base.ts`)

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
  block?: boolean; // true zəncirin icrasını dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya
`{ block: false }` qaytarmaqla "dəyişiklik yoxdur" siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması
zəncir boyunca ötürülən dəyəri sonrakı qoruyucu mexanizmlər üçün əvəz edir.
`signal?: AbortSignal` çağıran tərəfin həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun ləğvi bloklamadan davam etmə qaydasına qəsdən nəzərdə tutulmuş istisnadır: media körpüləri işi dayandırır və təmizləmə aparır, lakin ilkin medianı onu dəstəkləmədiyi məlum olan hədəfə bərpa etmir.

## Reyestr (`registry.ts`)

Vahid nüsxəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada görə əvəz edir) və
  `priority` üzrə artan sıra ilə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzrə iterasiya edir,
  sorğu yükünü `modifiedPayload` vasitəsilə ardıcıl ötürür və ilk `block: true` zamanı dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını tətbiq edir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və testlərin tam təcridi üçün istəyə bağlı olaraq
  standart mexanizmləri yenidən qeydiyyatdan keçirir.

Hər iki icra funksiyası `{ blocked, payload|response, results, guardrail?, message? }` qaytarır;
burada `results` hər qoruyucu mexanizm üçün `blocked`, `skipped`, `modified`, `error` və `meta` sahələrini
ehtiva edən `GuardrailExecutionResult` qeydləri massividir
və icranın izlənməsi üçün faydalıdır.

### Ayrı-ayrı sorğular üçün qoruyucu mexanizmlərin söndürülməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün
ötürülməli olan qoruyucu mexanizm adlarının təkrarsız
siyahısını toplayır. Aşağıdakı ardıcıllıqla oxunan və bir siyahıda birləşdirilən beş kanal mövcuddur
(təkrarlar silinərkən ilk rast gəlinən saxlanılır):

1. `apiKeyInfo.disabledGuardrails`
2. Sorğu gövdəsindəki `disabledGuardrails` (yuxarı səviyyədə)
3. Sorğu gövdəsindəki `metadata.disabledGuardrails` (yalnız `metadata` obyekt olduqda)
4. `x-omniroute-disabled-guardrails` başlığı
5. Köhnə `x-disabled-guardrails` başlığı

İki başlıq da daxil olmaqla, beş kanalın hamısı birləşdirilir: həm
`x-omniroute-disabled-guardrails`, həm də `x-disabled-guardrails` göndərildikdə onların
siyahılarının birləşməsindəki mexanizmlər ötürülür və boş yeni başlıq artıq köhnə başlığı gizlətmir
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412),
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) ilə düzəldilib).

Dəyərlər sətirlər massivi və ya vergüllə ayrılmış sətir ola bilər; adların əvvəl və sonundakı boşluqlar silinir
və adlar kiçik hərflərlə kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`), boş
elementlər isə çıxarılır. Nəticə `context.disabledGuardrails` vasitəsilə
reyestrə ötürülür və reyestr uyğun qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

Söndürmə siyahısı yalnız **reyestrə** təsir edir. Prompt inyeksiyasına qarşı `block` rejimi
məcburi təhlükəsizlik sərhədidir: inyeksiyadan qorunma aralıq proqramı
(`src/middleware/promptInjectionGuard.ts`) çağıran tərəfin idarə etdiyi heç bir söndürmə siyahısı olmadan
`evaluatePromptInjection()` funksiyasını çağırır (əvvəllər etdiyi, artıq istifadə olunmayan
`resolveDisabledGuardrails({ body })` çağırışı
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) ilə silinib), buna görə
`prompt-injection` mexanizmini söndürən sorğu `block` rejimində yenə də rədd edilir. Bu,
qəsdən belə nəzərdə tutulub. Söndürmə kanalları çağıran tərəfin nəzarətindədir (sorğu gövdəsi,
metaməlumatlar, başlıqlar) və çağıran tərəf operatorun təyin etdiyi təhlükəsizlik
nəzarətini söndürə bilməməlidir
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) ilə bağlı başlıqların
birləşdirilməsi yalnız reyestrdə hansı qoruyucu mexanizmlərin ötürüldüyünü dəyişir; bu, müştəriyə
aralıq proqramdan yan keçməyə imkan vermir. Hər açar və hər qrup üçün məcburi qoruyucu mexanizm siyasətləri
v4 RFC-də [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) izlənilir.
Baxın: [Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits).

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və
`open-sse/handlers/chatCore.ts` vasitəsilə keçən hər sorğu üçün
([Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) bölməsində sadalanan çat ailəsi marşrutları):

1. `resolveDisabledGuardrails(...)` API açarı, gövdə
   və başlıqlar əsasında ötürüləcək yoxlamaların siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu yoxlamaları artan
   prioritet ardıcıllığı ilə işə salır:
   - Deaktiv edilmiş qoruyucu yoxlamalar `skipped` kimi qeydə alınır.
   - Hər qoruyucu yoxlamanın `preCall` metodu `modifiedPayload` vasitəsilə faydalı yükü dəyişdirə bilər.
   - İlk `block: true` zəncirin icrasını dərhal dayandırır və emaledici
     qoruyucu yoxlamanın rədd cavabını qaytarır.
3. Faydalı yük (dəyişdirilmiş ola bilər) kombinə edilmiş marşrutlaşdırmaya və yuxarı axına
   göndərilməyə ötürülür.
4. **Yalnız axınsız rejimdə:** cavab yığıldıqdan sonra
   `guardrailRegistry.runPostCallHooks(...)` eyni zənciri
   cavab üzərində işə salır. Burada `block: true` yuxarı axından gələn cavabı ləğv edir və HTTP 400 qaytarır. Axınla ötürülən cavablar bu addımı tamamilə ötürür.

İstisna yaradan qoruyucu yoxlamalar `error: <message>` ilə qeydə alınır və
`logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — xəta zamanı icraya icazə verilməsi dizaynın bir hissəsidir.

## Əhatə dairəsi və məhdudiyyətlər

Qoruyucu yoxlamalar reyestri yalnız çat emal xəttinə qoşulub. Bu məhdudiyyətlər
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` və
`tests/unit/guardrail-pipeline-characterization.test.ts` ilə təsbit edilib; davranış dəyişdikdə
həmin testləri məqsədli şəkildə yeniləyin.

### Huklar harada işə düşür

| Huk / idarəetmə                                      | Tətbiq olunduğu sahə                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                    | `handleChat` (`src/sse/handlers/chat.ts`) tərəfindən emal olunan sorğular: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (və `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` və Telegram çat proksisi. Həmçinin idarəetmə panelinin `/api/guardrails/test` test son nöqtəsi. Çağırışdan əvvəl bloklama HTTP 400 qaytarır. |
| `runPostCallHooks`                                   | Yalnız **axınsız** çat cavabları (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Axınla ötürülən cavablar heç vaxt buraya çatmır.                                                                                                                                                                                                                                                                                                                   |
| Axın rejimində PII                                   | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), `PII_RESPONSE_SANITIZATION` aktiv olduqda `streamingPipeline.ts` daxilində axına qoşulur. Bu, qoruyucu yoxlama deyil, buna görə deaktivləşdirmə kanalları ona təsir etmir.                                                                                                                                                                                                                    |
| İnyeksiyadan qoruyan aralıq proqram təminatı (köhnə) | Çat ailəsi daxil olmaqla, prompt daşıyan bütün `/v1` marşrutları ([marşrutların əhatə dairəsinə](#injection-guard-route-coverage--red-team-phase-8--block-d) baxın). Yalnız prompt inyeksiyası.                                                                                                                                                                                                                                                             |

### Nələr əhatə olunmur

- **Media, embeddinq və məlumat marşrutları** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) heç vaxt reyestrə çatmır. Orada
  PII maskalanması, giriş məlumatlarının maskalanması və ya modallıq körpüsü işləmir. Onların yeganə
  yoxlaması köhnə inyeksiyadan qoruyan aralıq proqram təminatıdır.
- **Axınla ötürülən cavablara** çağırışdan sonrakı qoruyucu yoxlamalar tətbiq edilmir: çağırışdan sonra nə `pii-masker`, nə
  `credential-masker`, nə də bloklama tətbiq olunur. Yalnız axın rejimində PII
  çevrilməsi tətbiq olunur (`PII_RESPONSE_SANITIZATION` aktiv olduqda). Axınla ötürülən cavabda
  geri qaytarılan giriş məlumatı gizlədilmir.
- **Deaktivləşdirmə kanalları və aralıq proqram təminatı (dizayna əsasən):** aralıq proqram təminatı
  prompt inyeksiyasını çağıran tərəfin idarə etdiyi heç bir deaktivləşdirmə siyahısını ötürmədən,
  öz `evaluatePromptInjection()` çağırışı ilə qiymətləndirir. `block` rejimi
  çağıran tərəfin idarə etdiyi deaktivləşdirmələrin yan keçə bilmədiyi məcburi sərhəddir; bu, çat ailəsi marşrutlarına da aiddir
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). `prompt-injection`
  deaktiv edildikdə yalnız reyestrdəki qoruyucu yoxlama ötürülür.

### Çağırışdan sonrakı yoxlamadan əvvəl cavabı hansı mərhələlər görür

Axınsız emal yolunda ardıcıllıq belədir: yaddaşın çıxarılması → daxili alətlərin
icrası → çağırışdan sonrakı qoruyucu yoxlamalar → çağırışdan sonrakı bloklama zamanı çıxış → semantik keşdə saxlama.

- **Yaddaşa çıxarma** və **alətlərin icrası** cavabı çağırışdan sonrakı
  qoruyucu mexanizmlər onu yenidən yaza və ya bloklaya bilməzdən əvvəl görür.
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) dəyişikliyindən bəri yaddaşa
  çıxarma prosesi `PII_RESPONSE_SANITIZATION` aktiv olduqda çıxarılan mətni
  `sanitizePII` vasitəsilə emal edir (həm axınlı, həm də axınsız rejimdə), lakin
  çağırışdan sonrakı mərhələdə bloklanan cavab artıq yaddaşa və
  alətlərə təqdim edilmiş olur.
- **Semantik keş** cavabı çağırışdan sonrakı mərhələdən sonra saxlayır, buna görə də
  yenidən yazılmış cavabı saxlayır və bloklanmış cavab heç vaxt keşə yazılmır. Keş qeydləri
  hər API açarı üçün ayrıca açarlanır.

## Konfiqurasiya

Daxili qoruma mexanizmlərinin oxuduğu mühit dəyişənləri:

| Dəyişən                               | İstifadə edən                    | Təsiri                                                                                                                   |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | Aşkarlamanı tamamilə söndürmək üçün `false` təyin edin.                                                                  |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | İnyeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri inyeksiya mətnini yenidən yazmır.                 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | İnyeksiyadan qoruma rejimi; həmçinin mühit dəyişənlərini **üstələyən** verilənlər bazası funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | `MODE=block` rejiminin rədd etdiyi minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | `true` olduqda, sorğudakı fərdi identifikasiya məlumatları (PII) gizlədilir (inyeksiya rejimindən asılı olmayaraq).      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (sonrakı mərhələdə) | Cavab tərəfindəki maskalama mexanizminin davranışını idarə edir.                                                         |

Modality Bridge qoruma mexanizmləri icra vaxtı konfiqurasiyasını mühit dəyişənlərindən deyil,
verilənlər bazasına əsaslanan parametrlər anbarından (`getSettings()`) oxuyur. Vision üçün əsas açarlar
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries` açarlarıdır. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük ehtiyat oxuma
mexanizmi kimi qəbul edilir; idarəetmə panelindən yazma əməliyyatlarında əsas açarlardan istifadə olunur. Standart dəyərlər və ehtiyat
dəyərləri müəyyənləşdirən mexanizm `src/shared/constants/modalityBridgeDefaults.ts` faylında yerləşir, köhnə
sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` faylında saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips` açarlarından, eləcə də ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Audio üçün köhnə açarlara qayıdış mexanizmi yoxdur, çünki bu
açarlar Modality Bridge sxemi ilə birlikdə təqdim edilib.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout` açarlarından, eləcə də ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
Standart olaraq söndürülüb, çünki FFmpeg/ffprobe istismar üçün məcburi olmayan
asılılıqlardır və kadrlar üçün mətn təsvirlərinin yaradılması gecikməni və model xərcini artırır.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfindən törəyən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodlarını reallaşdırın.
3. Ya idxal zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada malik
   əvvəlki qoruyucu mexanizmi əvəz edir.
4. `tests/unit/` daxilində testlər əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testləşdirmə

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız sınaqdan keçirilən qoruyucu mexanizmləri
qeydiyyatdan keçirmək üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların
inyeksiyasını (`deps.getSettings`, `deps.callVisionModel`) dəstəkləyir; Audio Bridge isə
parametrlər, imkanlar, STT modelinin seçilməsi, giriş məlumatlarının
yoxlanması və transkripsiya üçün ekvivalent inteqrasiya nöqtələrini təqdim edir. Beləliklə, testlər verilənlər bazasına
və ya şəbəkəyə çıxış olmadan hər iki axını yoxlaya bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyasının aşkarlanmasını və PII maskalanmasını
  təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge üçün standart parametrlər və
  məcburi körpüləmə tətbiq edilən modellərin siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio üçün ortaq icra vaxtı standart parametrləri
- `docs/architecture/RESILIENCE_GUIDE.md` — müstəqil qat (dövrə kəsicisi, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənləri üzrə tam istinad sənədi

## İnyeksiyadan qorumanın marşrut əhatəsi və red-team sınaqları (Mərhələ 8 · Blok D)

İnyeksiyadan qoruma mexanizmi (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını qəbul edən
bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə əməl edir (standart `warn` = yalnız jurnala yazır;
`block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Verilənlər    | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team sınaqları (hər gecə, `nightly-llm-security.yml`):** promptfoo hər bir marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak yoxlama sınaqlarını işə salır (məxfi açar olmadıqda ötürülür).
Ardıcıllıq üçün `moderations` da daxil edilib. Bloklama rejimi məcburi təhlükəsizlik sərhədidir: `evaluatePromptInjection()`
aralıq proqram qatının ona ötürdüyü sorğu üzrə deaktivləşdirmə siyahısını nəzərə almır, buna görə `disabledGuardrails`
marşrutu bu rejimdən azad **etmir** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Gecəlik iş axını (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki tapşırıqdan ibarətdir:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` əmrini icra edir. Hər bir hücum ssenarisi (məsələn, "bütün
  əvvəlki təlimatları nəzərə alma…", DAN üslublu məhdudiyyətdən yayınma cəhdləri) cavabda
  `error.code === "SECURITY_001"` olduğunu, yəni qoruyucu mexanizmin sorğunu həqiqətən rədd etdiyini yoxlayır.
- **`garak` (məsləhət xarakterli)** — lokal OmniRoute instansiyasına (`http://localhost:20128/v1`) qarşı
  garak `--probes promptinject,dan,leakreplay` əmrini icra edir. Provayderin
  məxfi açarının (`PROMPTFOO_PROVIDER_KEY`) mövcudluğundan asılıdır; açar olmadıqda problemsiz ötürülür
  və sonuna `|| true` əlavə edilib, buna görə CI prosesini uğursuz etmədən nəticələri bildirir.

Qoruyucu köməkçi funksiyaların (`createInjectionGuard` / `withInjectionGuard`) əhatəsi
prompt daşıyan bütün `/v1` marşrutlarına şamil olunur; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` vasitəsilə
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən çıxarılır.

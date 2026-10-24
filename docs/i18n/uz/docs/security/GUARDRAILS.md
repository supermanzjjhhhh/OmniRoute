# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Asosiy manba:** `src/lib/guardrails/`
> **Oxirgi yangilangan:** 2026-10-17 — v3.8.52 ([Coverage and limits](#coverage-and-limits) qo'shildi:
> huklar qaysi marshrutlar va javob yo'llariga yetib borishi, birlashtirilgan o'chirish sarlavhalari (#16412), in'ektsiyani
> bloklash rejimi majburiy chegara sifatida (#16413) va post-call'dan oldin javobni nima ko'rishi)

Guardraillar OmniRoute va yuqori oqim provayderlari orasidagi chegarada xavfsizlik, siyosat va kontent o'zgarishlarini ta'minlaydi. Har bir himoya to'sig'i so'rov paketlarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (va ixtiyoriy ravishda rad etishi, o'zgartirishi yoki izoh qoldirishi) mumkin.

Tizim **fail-open** rejimida ishlaydi: agar himoya to'sig'i bajarilish vaqtida xatolik chiqarsa, registr xatolikni yozib oladi va so'rovni bajarishdan to'xtatish o'rniga keyingi himoya to'sig'i bilan davom etadi. Bloklash tasodifiy emas, balki aniq qaror (`block: true`) hisoblanadi. Yagona istisno bu bekor qilingan so'rovdir: chaqiruvchining `signal`i bekor qilinganda, xatolik beruvchi himoya to'sig'i o'tkazib yuborilish o'rniga huk bajarilishini rad etadi.

Huklar har bir marshrutda yoki har bir javobda ishga tushmaydi. Himoya to'sig'iga xavfsizlik nazorati sifatida tayanishdan oldin [Coverage and limits](#coverage-and-limits) bo'limini o'qing.

## O'rnatilgan himoya to'siqlari

Registr import qilinganda ustuvorlik tartibida oltita himoya to'sig'ini avtomatik ravishda yuklaydi
(shu jumladan `registry.ts` → `registerDefaultGuardrails()`):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ustuvorlik raqami kichikroqlari **birinchi** bo'lib ishga tushadi.

### Vizyon ko'prigi (`visionBridge.ts`) — Modallik ko'prigi PR-1

GLM 5.3 baza modeli va `glm-5.3-{low,high,max}` aniq
`supportsVision:false` registr/spetsifikatsiya metama'lumotlariga ega. GLM 5.3 Flash variantlari
native-vizyon modellar bo'lib qoladi. Claude Code'ning `/v1/messages` marshruti Claude-dan OpenAI-ga tarjima qilinishidan
**oldin** umumiy `handleChat` chaqiruv oldi (pre-call) himoya to'sig'i zanjiriga kiradi;
to'plangan `Read` vositasi natijasi rasmlari tarjima ularni OpenAI `image_url` tarkibiga ko'tarishidan
oldin tasvirlanishi yoki qayta ishlanishi kerak (#17069).

Vizyonni qo'llab-quvvatlamaydigan modellarga qaratilgan rasmli so'rovlarni ushlab qoladi va yuqori oqim qo'ng'irog'idan oldin
butun so'rovni vizyon imkoniyatiga ega modelga yo'naltiradi yoki rasm qismlarini sozlana oladigan vizyon modeli
tomonidan ishlab chiqarilgan matnli tavsiflar bilan almashtiradi. Bu faqat matnli provayderlarga multimodal
paketlarni shaffof tarzda qayta ishlash imkonini beradi.

Jarayon:

1. Agar maqsadli model allaqachon vizyohni qo'llab-quvvatlasa, o'tkazib yuboriladi (agar u majburiy ko'prik
   ro'yxatida `isVisionBridgeForcedModel` ko'rinmasa).
2. `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) orqali rasm qismlarini ajratib oladi, bu funksiya `open-sse/utils/mediaParts.ts` dagi
   **birlashtirilgan media detektori** `detectMediaParts()` ga murojaat qiladi — bu kombo moslik filtri bilan
   bo'lishilgan yagona haqiqat manbaidir. Ajratib olish `replaceImageParts` orqaga ulashi mumkin bo'lgan
   shakllarga ruxsat berilgan (extract↔replace shartnomasi): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` va Responses
   API `input_image`. Claude Code `tool_result.content` va Responses vositasi chiqishlari
   ichida joylashgan mos keladigan rasmlar ham asl yo'llarida ajratib olinadi va
   almashtiriladi; faqat ko'rsatkich bo'lgan shakllar kombo-filtr
   materialidir va ajratib olinmaydi.
   Agar hech qanday rasm topilmasa, o'tkazib yuboriladi.
3. `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) orqali bajarilish vaqti konfiguratsiyasini hal qiladi: yangi `modalityBridge*`
   sozlamalar kalitlari ustun keladi; eski `visionBridge*` kalitlari **bir siklli zaxira (fallback)**
   (orqaga qaytarish oynasi) bo'lib qoladi. Ko'prik o'chirilgan bo'lganda, har qanday media bo'ylab o'tishdan oldin
   o'tkazib yuboriladi.
4. Rejim tanlagich (`modalityBridgeVisionMode`, quyidagi jadvalga qarang) qayta yo'naltirish va tasvirlash
   o'rtasida qaror qabul qiladi. Qayta yo'naltirish faqat `model`
   almashtirilgan holda `modifiedPayload` ni, shuningdek `{ rerouted, fromModel, toModel, imagesKept }` metama'lumotlarini qaytaradi.
5. Tasvirlash yo'li: rasmlarni `maxImages` gacha cheklaydi, vazifaga asoslangan so'rovni tuzadi,
   tasvirlash keshiga murojaat qiladi, vizyon modelini **parallel ravishda**
   (`Promise.allSettled`) chaqiradi va ularning o'rniga `[Image N]: <description>` matn qismlarini
   kiritadi. Muvaffaqiyatsiz tasvirlash `null` qiymatini qaytaradi: xom rasm noma'lum/vizyonni qo'llab-quvvatlaydigan maqsadlar uchun saqlanib
   qoladi (#4012), lekin **tasdiqlangan faqat matnli to'g'ridan-to'g'ri maqsad**
   yoki vizyonsiz kombo tavsiflanmagan har bir rasm, shu jumladan qisman xatoliklar va tasvirlash chaqiruvi chegarasidan tashqiridagi
   rasmlar uchun aniq `(unavailable — no vision-capable provider connected)` matnli stubini
   oladi (#17069). Mavjud barchasi muvaffaqiyatsiz bo'lgan kombo tasvirlash zaxirasi
   o'z joyida qoladi (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) ni qaytaradi.

#### Rejim tanlagich (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xatti-harakat                                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eskicha evristika, oʻzgartirilmagan (#6640/#7204): kombosiz/`auto/` modellar, agar asl modelda allaqachon yaroqli hisob maʼlumotlari boʻlmasa (keyin tavsiflanadi), eng yaxshi vizual modelga qayta yoʻnaltiriladi; kombo maqsadlar har doim tavsiflaydi.                                                                                                 |
| `describe` |          | Har doim tavsiflash — qayta yoʻnaltirish bloki butunlay oʻtkazib yuboriladi; foydalanuvchi tanlagan model doimo javob beradi.                                                                                                                                                                                                                             |
| `reroute`  |          | Majburiy qayta yoʻnaltirish: hisob maʼlumotlariga ega modelni saqlash himoyasi chetlab oʻtiladi. Qayta yoʻnaltirish **maqsadi** uchun hisob maʼlumotlari himoyasi amalda qoladi — foydalanish mumkin boʻlgan vizual maqsad mavjud boʻlmaganda, koʻprik matnli maqsadga xom tasvirlarni yuborish yoki tavsiflash oʻrniga aniq xato xabari bilan bloklaydi. |

Majburiy rejimlar auto evristika ishga tushishidan **oldin** qisqa tutashuvni amalga oshiradi (`short-circuit`); `auto` xatti-harakati pre-PR-1 himoya qatlami bilan baytma-bayt bir xil.

#### API-kalit qamrovi (`visionBridgeKeyScope.ts`)

Chaqiruvchining API kaliti `allowedConnections`, kvota hovuzlari (`allowedQuotas`) yoki modellarni (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`) cheklaganda, koʻprik faqat kalit foydalanishi mumkin boʻlgan ulanishlarda kalit foydalanishi mumkin boʻlgan qayta yoʻnaltirish va tavsiflash modellarini tanlaydi. Shundan soʻng tavsiflash chaqiruvi doimo `x-omniroute-self-loop-key-id` sarlavhasi bilan OmniRoute oʻz-oʻzini aylanish (self-loop) mexanizmi orqali amalga oshiriladi, shuning uchun qabul qiluvchi chat soʻrovi ushbu kalitning ulanish va model siyosatini yana bir bor majburiy qoʻllaydi. `enforceApiKeyPolicy()` bu sarlavhani faqat oʻz-oʻzini aylanish bearer tokeni bilan birga hisobga oladi, shuning uchun u faqat kirish huquqini toraytirishi mumkin va aniqlanmagan ID rad etiladi.

Agar kalit uchun hech qanday vizual modelga ruxsat berilmagan boʻlsa, **tasdiqlangan faqat matnli maqsad** ruxsat etilmagan yuqori oqimga (upstream) rasm baytlarini yuborish oʻrniga, mahalliy darajada aniq HTTP 400 xatosi bilan rasm soʻrovini rad etadi (#17069). Nomaʼlum yoki oʻrnatilgan vizual imkoniyatlarga ega maqsadlar uchun tavsiflash yoʻli oʻzining avvalgi ochiq xatolik (fail-open) xatti-harakatini saqlab qoladi (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Kalitsiz soʻrovlar va bunday cheklovlarsiz kalitlar avvalgidek ishlaydi.

#### Vazifadan xabardor tavsiflash soʻrovi (`modalityBridgeVisionTaskAware`)

Standart qiymat **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) asosiy tavsiflash soʻroviga **oxirgi foydalanuvchi xabarining** matnini (500 ta belgiga qisqartirilgan holda) qoʻshadi, bu esa tavsifni foydalanuvchi aslida nima soʻraganiga qarab yoʻnaltiradi (codex-vision-proxy namunasi) va vizual modeldan koʻrinadigan matnni transkripsiya qilishni soʻraydi. Bayroq oʻchirilgan boʻlsa — yoki foydalanuvchi matni boʻlmasa — asosiy soʻrov oʻzgarishsiz ishlatiladi.

Tavsiflash oʻz-oʻzini aylanish mexanizmining oʻziga xos OpenAI mos keluvchi soʻrovi (`visionBridgeHelpers.ts` dagi `callVisionModelSingle()`) har qanday chaqiruvchi/provayder uchun, hech qanday mijoz signali bilan cheklanmagan holda shartsiz ravishda `image_url.detail: "high"` ni talab qiladi. Past darajadagi namuna olish ushbu soʻrov talab qiladigan aniq matnni transkripsiya qilish vazifasi uchun OCR aniqligini pasaytiradi, shuning uchun tavsiflash chaqiruvi asl kiruvchi soʻrov qanday tafsilot darajasidan foydalanganidan qat'i nazar, doimo yuqori tafsilotni soʻraydi. Bu faqat ichki tavsiflash soʻrovi tanasiga taʼsir qiladi; u OmniRoute chaqiruvchining oʻzining `image_url.detail` parametrini asosiy soʻrovda qanday uzatishini oʻzgartirmaydi — bu standart qiymat alohida va faqat aniqlangan OpenCode mijozlari uchun `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) da qoʻllaniladi. Tavsiflash oʻz-oʻzini aylanish mexanizmining Anthropic tarmoq formatidagi tarmogʻida `detail` maydoni yoʻq va ikkala standart qiymatdan ham taʼsirlanmaydi.

#### Tavsif chiqish cheklovi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart | Oraliq             |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` yoki 100–50000 |

`0` (standart) **cheklov yoʻqligini** anglatadi — `callVisionModel()` tomonidan qaytarilgan tavsif mavjud xatti-harakatni saqlab qolgan holda oʻzgartirilishsiz oʻtkaziladi. 100–50000 oraligʻidagi har qanday qiymat tavsifni `[Image N]: <description>` sifatida qayta qoʻshilishidan oldin `…` suffiksi bilan qisqartiradi (`src/lib/guardrails/visionBridge.ts` dagi `VisionBridgeGuardrail.preCall()`). quyi oqimdagi model toʻliq transkripsiyaga muhtoj boʻlgan tafsilotlarga boy OCR vazifalari uchun buni oshiring; gapsevar vizual modellarda tokenlar hajmini cheklash uchun buni kamaytiring. Boshqaruv paneli maydoni Vizual yorligʻining Kengaytirilgan panelida (`ModalityBridgeVisionTab.tsx` dagi `modality-bridge-max-chars`) joylashgan boʻlib, 1 dan 99 gacha boʻlgan har qanday qiymatni 100 minimal chegaragacha koʻtaradi, shu bilan birga aniq kiritilgan `0` ni oʻzgartirilmagan holda qoldiradi — `0` shunchaki "oʻrnatilmagan" standart emas, balki oʻz-oʻzidan yaroqli Zod qiymatidir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Tavsif keshchasi (`modalityBridge/bridgeCache.ts`)

Tavsif chiqishlari uchun xotiradagi (in-memory) LRU + TTL keshchasi, butun jarayon boʻylab (process-wide) taqsimlangan. Kalit = uzunlik prefiksi freymiga ega `sha256(imageRef + composedPrompt + configuredBridgeModel)` (maydon chegarasi toʻqnashuvlari yoʻq). Model komponenti aslida javob bergan model emas, balki **sozlangan** koʻprik modelidir — `callVisionModel` ichki tarzda zaxiraga oʻtishi mumkin va har bir urinish boʻyicha kalitlash keshni parchalab yuboradi. Muvaffaqiyatsiz tavsiflar hech qachon keshlanmaydi. Sozlamalar:

| Kalit                           | Standart | Oraliq  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Masofaviy tasvirlarni normallashtirish (self-loop describe/base64 fetch)

Koʻprik oʻzi **remote** tasvirni olganda — Anthropic describe oʻz-oʻzini chaqiruvi (self-call) va `claude-wire-format` formatidagi `base64` ga oʻtkazish (`ensureBase64ImagesForClaudeWire`), ikkalasi ham `visionBridgeHelpers.ts` dagi `fetchRemoteImageAsDataUri()` orqali amalga oshiriladi — olingan maʼlumotlar `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) orqali vizual model soʻroviga kiritilishidan oldin qayta ishlanadi. Hajmi katta boʻlgan tasvirlar **2048px long edge** ga (OpenAI/Anthropic server tomonida allaqachon qoʻllaydigan oʻlchamni oʻzgartirish chegarasiga mos ravishda) kichiklashtiriladi, bu esa vizual model nimani koʻrishini oʻzgartirmasdan yuklash hajmi va kechikishini (latency) kamaytiradi. Oʻlchamni oʻzgartirish uchun `sharp` ishlatiladi va u dinamik import orqali yuklanadi: uning asosiy ikkilik fayli (binary) yuklana olmaydigan platformada `normalizeDataUri()` **hech qachon xatolik keltirib chiqarmaydi** — u asl baytlarni oʻzgarishsiz oʻtkazib yuborishga (passthrough) oʻtadi, shuning uchun describe/base64-conversion yoʻli doim ishlab turadi. Rasm boʻlmagan baytlar (dekodlanib boʻladigan tasvirni qaytarmagan soʻrov) ham oʻzgarishsiz oʻtkazib yuboriladi. Ushbu normallashtirish faqat koʻprik oʻzining oʻz-oʻzini chaqiruvi uchun oladigan tasvirlarga nisbatan qoʻllaniladi — u hech qachon chaqiruvchining xom passthrough foydali yukiga (payload) nisbatan qoʻllanilmaydi, bu faqat ixtiyoriy ravishda tanlanadigan (opt-in-only) oʻzgarishlar prinsipiga (Hard Rule #20) mos keladi.

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) da Zod yordamida tekshiriladi: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` uchligi va Audio Koʻprik (Audio Bridge) tomonidan ishlatiladigan `modalityBridgeAudio*` guruhi. `141_modality_bridge_settings.sql` migratsiyasi mavjud eski `visionBridge*` qiymatlarini mos keluvchi yangi kalitlarga nusxalaydi (idempotent, operator tomonidan oʻrnatilgan `modalityBridge*` qiymatini hech qachon ustiga yozmaydi); eski kalitlar bitta reliz sikli davomida oʻqish zaxirasi sifatida qabul qilinishda davom etadi.

#### Shaffoflik sarlavhasi + statistika

Describe orqali oʻzgartirilgan javoblar `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` sarlavhasini olib yuradi (`modalityBridge/bridgeStats.ts` dagi `buildModalityBridgeHeader()` tomonidan yaratiladi, `src/sse/handlers/chatHelpers.ts` dagi `withModalityBridgeHeader()` tomonidan belgilanadi). Yoʻnalishi oʻzgartirilgan soʻrovlar **hech qanday** sarlavhaga ega boʻlmaydi — foydali yuk (payload) oʻzgarishsiz qolgan va model almashinuvi allaqachon javob tanasining `model` maydonida koʻrinib turibdi.

`GET /api/modality-bridge/stats` (`GET /api/settings` bilan bir xil darajadagi boshqaruv avtorizatsiyasi) `vision`, `audio` va `video` uchun xotiradagi modallik boʻyicha hisoblagichlarni `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` qaytaradi. `averageLatencyMs` maxraj sifatida barcha urinishlarni emas, balki `latencySamples` ni ishlatadi; vaqt oʻlchovi boʻlmagan operatsiya nol millisekundlik namunani toʻqib chiqarmaydi. `bridged` muvaffaqiyatli konvertatsiyalar uchun orqaga qarab mos keluvchi alias boʻlib qoladi; muvaffaqiyatsiz urinishlar uni oshirmaydi. Hisoblagichlar dizayn boʻyicha jarayon qayta ishga tushganda tozalanadi (buxgalteriya emas, telemetriya).

#### Boshqaruv paneli (Dashboard) konfiguratsiyasi

Maxsus boshqaruv paneli sahifasi — `/dashboard/settings/modality-bridge`. Uning URL orqali ochiladigan `Vision`, `Audio` va `Video` vkladkalari `tab` qiymatini oʻzgartirganda soʻrov parametrlarini saqlab qoladi. Vision vkladkasi yoqish/oʻchirish, reja, modelni tanlash (avtomatik standartni oʻz ichiga olgan holda), vazifadan xabardor qiluvchi prompt, ilgʻor taym-aut/tasvir/tavsif uzunligi/kesh cheklovlari, ish vaqti hisoblagichlari va himoyalangan namuna soʻrovini taqdim etadi. Audio vkladkasi ham ishlayapti: u yoqish/oʻchirish, Auto bilan faqat STT uchun moʻljallangan model tanlagichni, taym-aut/maksimal klip cheklovlarini, audio hisoblagichlarini va `input_audio` namuna testini ochib beradi. Video vkladkasi funksional hisoblanadi: u FFmpeg/ffprobe ish vaqti holatini — toʻrtta aniq UI holatidan birini (`unknown` tekshiruv jarayonda boʻlganda yoki yakunlanolmaganda, `restricted` tekshiruv mijoz tomonida oʻtkazib yuboriladigan non-loopback dashboard xostida, `unavailable` tekshirilib topilmagani tasdiqlanganda yoki `available` FFmpeg/ffprobe versiyalari bilan) — xabar qiladi, yoqish/model/kadr/video/taym-aut cheklovlarini saqlaydi, model tanlagichni vision-qobiliyatli modellar boʻyicha filtrlaydi va video hisoblagichlarini koʻrsatadi.

AI sozlamalari ostidagi oldingi Vision Bridge kartasi yangi sahifaga oʻtish uchun moslik havolasi hisoblanadi; u endi shaklning ikkinchi nusxasini oʻz ichiga olmaydi. Shuningdek, Media Providers Image-to-Text va Speech-to-Text ish jarayonlarini mavjud Speech-to-Text playgroundʼni olib tashlamasdan, tegishli Modality Bridge vkladkalariga bogʻlaydi.

**Oʻz-oʻzini chaqiruvga kirishni chetlab oʻtish:** describe chaqiruvi OmniRouteʼning oʻzining `/v1` self-loopʼi (noodatiy provayder modeli) orqali yoʻnaltirilganda, soʻrov osti `x-omniroute-admission-bypass: internal` ni yuboradi va aniqlangan self-loop ishonch maʼlumotlari — lokal rejimdagi `sk_omniroute` sentineli yoki operator tomonidan sozlangan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` muhit kaliti (#1350) bilan autentifikatsiya qilinadi, shunda `REQUIRE_API_KEY=true` boʻlgan joylashtirishlar ham describe chaqiruvini bajarishi mumkin boʻladi. Ushbu chetlab oʻtish faqat aynan oʻsha ishonch maʼlumotlari uchun amal qiladi, shuning uchun tashqi mijozlar kirishni chetlab oʻtish uchun ushbu sarlavhadan foydalana olmaydi.

Eskirgan standart qiymatlar `src/shared/constants/visionBridgeDefaults.ts` da joylashgan; yangi rejim/vazifadan xabardor qilish/kesh standart qiymatlari va sozlamalarni hal qiluvchi `src/shared/constants/modalityBridgeDefaults.ts` da joylashgan. Himoya vositasi `deps` konstruktor parametrini taqdim etadi, shuning uchun testlar soxta `getSettings` va `callVisionModel` realizatsiyalarini kirita oladi.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio kirishini qabul qilishi maʼlum boʻlmagan manzilga yetib borishidan oldin audio maʼlumotlarni oʻz ichiga olgan chat soʻrovlarini tutib qoladi. U chat soʻrovining yoʻnalishini hech qachon oʻzgartirmaydi: audio qismlar mavjud OpenAI-ga mos keluvchi multipart yakuniy nuqtasi orqali matnga oʻgiriladi va tanlangan chat modeli matnli transkripsiyalar bilan davom etadi.

Flow:

1. `supportsAudio` ni `getResolvedModelCapabilities()` orqali hal qiling. Aniq provayder-reyestr metama'lumotlari ustun keladi, keyin statik model metama'lumotlari, so'ngra sinxronlashtirilgan `modalities_input`. `audio` kiritilmagan e'lon qilingan kirish ro'yxati `false` bo'ladi; qobiliyat dalili topilmasa, `null` bo'lib qoladi. `false` ham, `null` ham konservativ ko'prikni faollashtiradi, `true` esa uni chetlab o'tadi.
2. `modalityBridgeAudio*` sozlamalarini hal qiling va umumiy `detectMediaParts()` detektori orqali har bir xabardan ulash mumkin bo'lgan yuqori darajadagi audio qismlarini ajratib oling. Qo'llab-quvvatlanadigan tarmoq shakllari OpenAI `input_audio`, `audio_url` va `source.media_type: "audio/*"`. Ichki audio marshrutlash uchun aniqlanadi, lekin ulash yo'li bilan olib tashlanmaydi. Ish hajmi `modalityBridgeAudioMaxClips` bilan cheklangan; keyingi qismlar o'zgarishsiz qoladi.
3. Sozlangan `provider/model` ga amal qiling yoki `selectAudioBridgeModel()` ga `AUDIO_TRANSCRIPTION_PROVIDERS` ni barqaror katalog tartibida ko'rib chiqishga ruxsat bering va foydalanishga yaroqli faol provayder ma'lumotlariga ega bo'lgan birinchi modelni tanlang.
4. `callAudioTranscription()` base64/data-URI audioni ko'p qismli `file` ga aylantiradi yoki DNS pinning va 25 MB chegarasiga ega bo'lgan faqat ommaviy chiquvchi himoya orqali masofaviy `audio_url` ni yuklab oladi. Keyin u faylni va tanlangan modelni `resolveSelfLoopBearer()` bilan autentifikatsiya qilingan mahalliy `/v1/audio/transcriptions` o'z-o'zidan aylanishiga POST qiladi. Mavjud transkripsiya marshruti oddiy ma'lumotlarni qidirish, sovutish/tezlik cheklovi boshqaruvi va provayderni jo'natishni amalga oshiradi.
5. Muvaffaqiyatli chaqiruvlar o'z qismlarini `[Audio N]: <transcript>` bilan almashtiradi. Chaqiruvlar `Promise.allSettled` yordamida ishlaydi: yakka tartibdagi xatolik asl audio qismini saqlab qoladi (#4012 shartnomasi). Agar har bir chaqiruv muvaffaqiyatsiz tugasa va maqsad `supportsAudio === false` ekanligi tasdiqlansa, qismlar `[Audio N]: (unavailable — no STT provider connected)` ga aylanadi (#8430 shartnomasi). Noma'lum maqsad (`null`) uchun barcha xatolar natijasi o'zgarishsiz qoladi. Yaroqli STT ma'lumotlariga ega bo'lmagan matnli maqsad tarmoq chaqiruvini amalga oshirmasdan bir xil aniq shtubni oladi.

Muvaffaqiyatli transkriptlar jarayon miqyosidagi Modality Bridge LRU/TTL keshidan foydalanadi. Kalit audio havolasini, barqaror `audio-transcription` operatsiya yorlig'ini va tanlangan STT modelini birlashtiradi; xatolar hech qachon keshga saqlanmaydi. Audio urinishlari umumiy `bridged`, `cacheHits`, `failures` va `lastUsedAt` hisoblagichlarini yangilaydi. O'zgartirilgan javoblar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` sarlavhasini olib yuradi; tegilmagan so'rovlar Audio Bridge segmentini olmaydi.

Ish vaqti sozlamalari ma'lumotlar bazasiga asoslangan va Zod yordamida tasdiqlangan:

| Key                           | Default | Range                 |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Avtomatik yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Umumiy kesh `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va `modalityBridgeCacheMaxEntries` tomonidan boshqarilishda davom etadi.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ma'lum mahalliy video qo'llab-quvvatlashiga ega bo'lmagan nishon chaqirilishidan oldin Chat Completions `messages` va Responses API `input` dagi yuqori darajadagi video qismlarini ushlaydi. Qo'llab-quvvatlanadigan shakllar: `input_video`, `video_url`, `video_source`, HTTPS URL manzillari va `data:video/*;base64,...` ma'lumotlar URI manzillari. Matndagi oddiy fayl nomlari video sifatida ko'rib chiqilmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) so'rovni kezish, imkoniyatlar/siyosatni tekshirish, har bir so'rov bo'yicha agregatsiya va javob payload'ini boshqaradi. Har bir video uchun bajariladigan ishlar — olish, butun natija keshi, kadrlar ketma-ketligini tasvirlash (bu chaqiruvchi tomonidan e'lon qilingan audio transkriptini birlashtiradi) va har bir urinish uchun metrikalar/to'xtatish/tozalash — `videoBridgePipeline.ts` dagi `processVideoPart` ortiga yashiringan bo'lib, u `preCall` sikli ichida har bir video qismi uchun bir marta chaqiriladi. Ushbu modul, shuningdek, aniq port chegaralarini belgilaydi: `VideoMediaBrokerPort` (baytlarni olish va namuna olingan kadrlarni ajratib olish), `VideoAudioTranscriptionPort` (chaqiruvchi e'lon qilgan audio transkriptini namuna olingan titrlar bilan birlashtirish) va `VideoDrilldownPort` (kadrni chuqurlashtirib ko'rsatish mustahkamlik chegarasi; hali `processVideoPart` ga ulanmagan — hozirda faqat alohida `/api/modality-bridge/video/drilldown` marshruti chuqurlashtirilgan yozuvlarni yozadi).

Ommaviy `/v1` so'rov yo'li hech qachon pastki jarayonni import qilmaydi yoki chaqirmaydi. Masofaviy videolar 50 MB chegarasida yuklab olinadi; inline base64 videolari har bir video uchun konservativ 36 MB dekodlangan chegaraga ega, shunda model/xabarlar/ramkalash konverti ommaviy JSON so'rovini qabul qilish chegarasi 50 MB ichida qolishi mumkin. Inline uzunligi va dekodlangan o'lcham taxminlari ajratishdan oldin tekshiriladi. DNS pinning bilan mavjud faqat ommaviy chiquvchi himoyadan foydalangan holda dastlabki masofaviy URL va har bir yo'naltirishda HTTPS talab qilinadi. Keyin baytlar aniq ichki `POST /api/modality-bridge/video/extract` broker chegarasidan o'tadi. Bu marshrut ham `LOCAL_ONLY`, ham `SPAWN_CAPABLE` bo'lib, faqat jarayon bo'yicha autentifikatsiya qilingan, ishonchli halqa so'rovini qabul qiladi va hech qachon URL, fayl tizimi yo'li, bajariladigan fayl yoki argumentlar ro'yxatini qabul qilmaydi. API tana o'lchami quvuri va ishlov beruvchining bosqichma-bosqich tana o'quvchisi 50 MB broker kirish chegarasini mustaqil ravishda ta'minlaydi. Uning cheklangan navbati bir vaqtning o'zida bitta ekstraktsiyani bajaradi, to'rtta kutilayotgan vazifaga ruxsat beradi va kutilayotgan kirishni 100 MB bilan cheklaydi.

Broker ichida `ffprobe` xususiy mahalliy faylni o'qiydi; qat'iy formatga ruxsat beruvchilar ro'yxati pleylist va manifest formatlarini chiqarib tashlaydi. Ruxsat etilgan MOV oilasidagi konteynerlar uchun tashqi MOV ma'lumotlar havolalari sukut bo'yicha o'chirilgan holatda qoladi va qat'iy buyruq ularni yoqmaydi. Ham `ffprobe`, ham `ffmpeg` faqat `file` protokolining oq ro'yxatidan, bitta oqimdan, qat'iy argument massivlaridan, qobiqsiz (shell) va `PATH` dan hal qilinadigan bajariladigan fayllardan foydalanadi. Biriktirilgan rasm muqova oqimlari ijro etiladigan nomzodlar emas. Barcha ijro etiladigan oqimlar cheklovlarga javob berishi kerak va deterministik eng past indeksli zaxiradan oldin aniq standart oqim afzal ko'riladi. Videolar 600 soniya, har bir o'lcham uchun 8,192 piksel va 33,554,432 manba piksellari bilan cheklangan. FFmpeg 1–16 ta markaziy JPEG kadrlarini namuna sifatida oladi, kichikroq kirishlarni kattalashtirmasdan uzun qirrasini ko'pi bilan 1,024 pikselsgacha kichiklashtiradi va hech qachon URL olmaydi. Namuna olish sukut bo'yicha `uniform` hisoblanadi. Qo'shimcha `scene_aware` va eksperimental `segment_aware` siyosatlari allaqachon tasdiqlangan mahalliy oqim ustidan bitta qo'shimcha qat'iy FFmpeg o'tishini bajaradi, cheklangan `showinfo` sahna vaqt belgilarini tanlaydi va detektor xatosi, vaqt tugashi (timeout), noto'g'ri formatlangan chiqish yoki bo'sh nomzodlar to'plami holatida xuddi shu bir xil markaziy nuqtalarga deterministik tarzda qaytadi. Segmentga asoslangan rejim markaziy nuqta namunalarini tasdiqlangan sahna oraliqlariga proporsional ravishda taqsimlaydi; segmentga asoslangan dalillar va zaxira xatti-harakatlari quyida batafsil tavsiflangan. 16 kadrli qat'iy cheklov har bir siyosatda tanlovdan keyin qo'llaniladi. Sahna asosidagi so'rov faqat bir kadrli byudjetga ega bo'lganda, u faol to'liq video yoki fokus oynasining bir xil markaziy nuqtasidan foydalanadi va `policyEffective: uniform` deb xabar beradi: bitta tanlangan sahna kadri ikkala vaqt chegarasini ham saqlab qola olmaydi. Chaqiruvchi ixtiyoriy ravishda chekli fokus oynasini (`start`/`end` soniyalar) taqdim etishi mumkin; chegaralar media davomiyligiga moslashtiriladi, teskari yoki cheksiz oynalar rad etiladi va barcha namuna olish siyosatlari faqat normallashtirilgan oraliq ichida bajariladi. Olingan oyna namuna olish metadagilarida va ishonchsiz tavsif prefiksida kiritiladi, shunda quyi oqimdagi modellar yo'naltirilgan parchani to'liq vaqt jadvalidan ajratib olishi mumkin.

Semantik sarlavha fokusi alohida, aniq sozlamadir. Standart `full` tahlil rejimi mavjud kadr ko'rsatmasini saqlab qoladi va hech qachon so'rov matnini sarlavha modeliga yo'naltirmaydi. `focused` rejimida ko'prik bir xil Chat yoki Responses konteyneridan foydalanuvchi tomonidan yozilgan eng so'nggi bo'sh bo'lmagan `text`/`input_text` ni o'qiydi, uni NFC ga normallashtiradi, boshqaruv belgilari va bo'shliqlarni qisqartiradi va uni 500 ta Unicode kod nuqtasi bilan cheklaydi. Bo'sh natija aniq `full` ko'rsatmasiga qaytadi. Foydali maslahat maxsus ishonchsiz foydalanuvchi konteksti blokida JSON sifatida serializatsiya qilinadi va faqat kuzatilishi mumkin bo'lgan tafsilotlarni birinchi o'ringa qo'yishi mumkin; u media faylda ko'rinadigan yoki eshitiladigan ko'rsatmalarga amal qilmaslik haqidagi alohida ogohlantirishni bekor kila olmaydi. Matnli fokus hech qachon `start`/`end` ni taxmin qilmaydi yoki vaqtinchalik namuna oluvchini o'zgartirmaydi.

#### FU-07 tarkibiy segment dalillari

`segment_aware` allaqachon tasdiqlangan mahalliy video oqimi ustidan bitta cheklangan oldindan tahlil qilish bosqichidan foydalanadi. Qat'iy filtr zanjiri birinchi navbatda eng ko'pi bilan 320 piksel kenglikgacha o'lchamini o'zgartiradi, sahna o'zgarishlari va muzlatilgan oraliqlarni aniqlaydi, so'ngra xiralashish, o'rtacha lyuma va fazoviy/vaqtinchalik ma'lumotlar uchun soniyasiga 1 kadr tezlikda namuna oladi. Bosqich 600 ta tarkibiy namunalar, bitta FFmpeg/filtr oqimi, xuddi shu faqat `file` protokoli va konteynerga ruxsat beruvchilar ro'yxati, 1 MiB jarayon chiqishi chegarasi hamda brokerning umumiy to'xtatish/muddati ichida ko'pi bilan 30 soniya bilan cheklangan. U hech qachon so'rovdan buyruq, filtr, yo'l yoki URL manzilni qabul qilmaydi.

Tarkibiy qiymatlar semantik videoni tushunish emas, balki deterministik namuna olish dalillaridir. Ular mavzular, harakatlar, sarlavhalar, nutq yoki foydalanuvchi niyatini taxmin qilmaydi. Sahna va muzlash chegaralari segmentlarni tashkil qiladi; muzlash qamrovi, xiralashish, ekspozitsiya, fazoviy tafsilot va vaqtinchalik o'zgarish faqat mavjud 1–16 kadrli byudjet qanday taqsimlanishiga ta'sir qiladi. To'liq muzlatilgan segment bir kadr bilan cheklanadi, muzlatilmagan segmentlar esa qolgan byudjet uchun raqobatlashadi. Chegaralar kadrlardan ko'p bo'lganda, vaqt jadvalining bir xil qamrovi saqlanib qoladi, shuning uchun tezkor dastlabki kesishlar uzun orqa segmentni yashira olmaydi. Muzlash chegarasining 1 soniyali tahlil ruxsati doirasidagi sahna chegaralari birlashtiriladi.

Yetishmaydigan filtrlar, noto'g'ri shakllangan/bo'sh dalillar, detektor xatosi yoki cheklangan oldindan tahlil qilish vaqti tugashi aniq bir xil markaziy nuqta siyosatiga o'tadi. Chaqiruvchining to'xtatishi yoki broker muddati ochiq ishdan chiqmaydi: u bajarilayotgan quyi jarayonni to'xtatadi, keyingi kadrni olishning oldini oladi va xususiy vaqtinchalik daraxt `finally` blokida o'chiriladi.

`scripts/perf/video-bridge-fu07-eval.ts` dublikatni yo'q qilishdan keyingi sarlavha chaqiruvi tejamkorligi, zich harakat byudjetini taqsimlash, xiralashish/ekspozitsiya/SI-TI dalillari, uzun dumli tezkor kesishlar va asta-sekin so'nish xato ijobiy natijalari uchun deterministik real FFmpeg moslamalarini yaratadi. U oldindan tahlil qilish vaqtini va `/usr/bin/time` mavjud bo'lgan joyda, bola jarayonining protsessor vaqti va eng yuqori RSS ni yozib oladi. Uning sifat tekshiruvlari faqat tarkibiy orakullardir. Haqiqiy sarlavha modeli sifati `HOLD` holatida qoladi, chunki bu sinov qurilmasida vakolatli yakuniy nuqta yoki muzlatilgan hakam yo'q. Agar `--caption-cost-per-call-usd` har bir chaqiruv uchun aniq ijobiy bahoni taqdim etmasa, pul tejash ham `HOLD` bo'lib qoladi; skript hech qachon ikkala natijani ham to'qib chiqarmaydi.

Har bir kadr 4 MiB bilan, barcha xom kadrlar birgalikda 23 MiB bilan va seriyalangan broker javobi 32 MiB bilan cheklangan. Xususiy vaqtinchalik katalog `finally` da o'chiriladi. OmniRoute o'z ichiga FFmpeg'ni olmaydi va maxsus bajariladigan fayl yo'lini qabul qilmaydi. Tavsif yozishdan oldin ko'prik ehtiyotkorlik bilan vizual dublikatlarni tozalash bosqichini qo'llaydi: har bir JPEG 16×16 o'lchamdagi kulrang buferga kichraytiriladi va faqat saqlangan oxirgi kadr bilan taqqoslanadi. Bir kadrdan yuqori so'ralgan tavsif byudjeti uchun ajratib olish ushbu byudjetdan ikki baravar ko'p bo'lmagan va 16 kadrdan oshmaydigan cheklangan nomzodlar hovuzini taqdim etadi. So'ralgan cheklov faqat dublikatlar olib tashlangandan so'ng qo'llaniladi, bunda byudjet kamida ikkita bo'lganda yakuniy qisqartirish paytida birinchi va oxirgi tanlangan nomzodlar saqlanib qoladi. Versiyalangan `grayscale-16x16-mean-cells-v2` siyosati o'rtacha luma deltasining kattasidan va normallashtirilgan deltasi kamida 0.05 bo'lgan eskiz katakchalari nisbatidan foydalanadi. Dublikat chegarasi 0.04 konstantasi bo'lib, u vaqtinchalik sozlama sifatida ko'rsatilgandan ko'ra oldindan taxmin qilish mumkinligi uchun tanlangan. Ushbu ikkilamchi yuqori kontrastli signal faqat o'rtacha qiymatga asoslangan taqqoslash yashirishi mumkin bo'lgan kichik harakatlar va ko'rinadigan matn o'zgarishlarini saqlab qoladi. Taqqoslovchi yoki dekoder xatolari ochiq holatda xato beradi va qamrovni saqlab qoladi. Chiqish metadannalari ajratib olingan nomzodlarni, muvaffaqiyatli foydalanilgan kadrlarni va tashlab yuborilgan vizual dublikatlarni ajratib ko'rsatadi.

Aniq belgilangan video qismi vaqt belgisiga ega kontakt varaqasini so'rashi mumkin. Ko'prik ko'pi bilan 4 ustunli, 16 kadrli JPEG to'rni quradi. Har bir 512 piksel katakcha o'zining manba vaqt belgisini yuqori kontrastli pastki qismga yozadi, shu bilan birga bir xil vaqt belgilari quyi oqim assotsiatsiyasi va audit uchun matnli metadannalarda saqlanib qoladi. To'liq JPEG 32 MiB bilan cheklanganicha qoladi. Agar `sharp` to'rni dekodlay olmasa yoki yig'a olmasa, ko'prik alohida JPEG kadrlarga qaytadi; mijozning to'xtatishi baribir varaq operatsiyasi bo'ylab tarqaladi.

Ilgari surish dalillari ataylab sintetik kompozitsiya mikrobeynchmarkidan alohida qilingan. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI bilan mos keluvchi ko'rish modellari uchun sxema bo'yicha versiyalangan A/B sinov moslamasini aniqlaydi. U provayder tomonidan xabar qilingan tokenlarni, oxirigacha devor kechikishini (shu jumladan varaq kompozitsiyasini), modelga murojaat qilish sonini va manifestda belgilangan faktlarni saqlab qolishni o'lchaydi. Modelning xom javoblari hisobotga yozilmaydi; faqat SHA-256 dayjestlari va mos keladigan fakt ID'lari saqlanib qoladi. Agar `--execute-real` uzatilmasa va `--model`, `OMNIROUTE_BASE_URL` hamda `OMNIROUTE_API_KEY` sozlangan bo'lmasa, sinov moslamasi tarmoqqa yoki pullik modelga murojaat qilmaydi. Bunday aniq real ishga tushirishsiz uning mashina o'qiy oladigan hukmi `HOLD` bo'lib qoladi; faqat sintetik foydali yuk / chaqiruvlar soni o'lchovlari ilgari surish dalili bo'la olmaydi.

Qo'ng'iroq qiluvchilar agar ular allaqachon moslashtirilgan matnga ega bo'lsa, qo'llab-quvvatlanadigan video qismiga ixtiyoriy `transcript.cues` massivini biriktirishi mumkin. Har bir ishora `text`ni, tekshirilgan davomiylik ichidagi chekli `start`/`end` oraliqni va oq ro'yxatga kiritilgan `source`ni (`client`, `embedded` yoki `audio-bridge`) o'z ichiga olishi kerak; `confidence` standart bo'yicha `1` ga teng va `0` bilan `1` oralig'ida bo'lishi shart. Aniq dublikat ishoralar birlashtiriladi. OmniRoute hech qachon bu metadannadan transkripsiyani boshlamaydi: tasdiqlangan ishoralar manba, ishonchlilik va oraliq bilan tavsiflangan natijaga nusxalanadi hamda kadr tavsiflari qatorida ishonchsiz kuzatishlar sifatida ko'rsatiladi. Yaroqsiz, diapazondan tashqaridagi yoki kelib chiqishi ko'rsatilmagan matn tavsif oqimiga aralashtirib yuborilishidan ko'ra rad etiladi. So'rov tanasining ikkala transkript kanali taqdim etilgan kelib chiqishni `client` ga normallashtiradi, shu jumladan o'zi tasdiqlagan `embedded` yoki `audio-bridge` yorliqlarini ham. Faqat serverga tegishli adapter faqat kodda ishlatiladigan `trustedSource` argumenti orqali ushbu ishonchli yorliqlarni tayinlashi mumkin; so'rov JSON maydoni bu argumentga yetib bora olmaydi. Transkript matni kelib chiqishidan qat'i nazar, ishonchsiz media orqali olingan kontent bo'lib qoladi va hech qachon avtorizatsiyani belgilamasligi kerak.

Ilg'or chaqiruvchi bir xil video uchun `audioTranscript` trekini taqdim etishi mumkin; u server transkripsiyasining dalili sifatida emas, balki mijoz tomonidan taqdim etilgan matn sifatida qabul qilinadi. Birlashtirish nuqtasi vizual va audio kuzatuvlarni bitta muddat va to'xtatish signali ostida bajaradi, ularni umumiy vaqt jadvalida tartibga soladi, aniq dublikatlarni birlashtiradi va faqat bitta tomon muvaffaqiyatli chiqqanda qisman natija haqida xabar beradi. Yaroqsiz `audioTranscript` butun videoni muvaffaqiyatsiz tugatish o'rniga, shu qisman natijaga tushiriladi — vizual tavsif saqlanib qoladi va audio tarmoq tozalangan xatolik kodini yozib oladi. Har bir tarmoqning mavjudligi, qisman bayrog'i va tozalangan xatolik kodlari tavsiflangan natijada, himoya qatlami metadannalarida (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), natijalar keshi metadannalarida va ko'prikni birlashtirish hisoblagichlarida saqlanib qoladi. Standart Video Bridge yo'li nutqdan matnga o'girishni ishga tushirmaydi yoki ikkinchi media nusxasini yuklab olmaydi; bunday aniq treksiz u faqat videoligicha qoladi.

**Stenogrammani saqlash (#12150 P1).** Bu Videoko'prik (o'zi ixtiyoriy ravishda yoqiladigan) stenogramma belgisini chiqarganda avtomatik ravishda qo'llaniladi — alohida saqlash flagi mavjud emas. So'rov har qanday stenogramma belgisini chiqarganda (chaqiruvchi tomonidan e'lon qilingan `transcript` yoki birlashtirilgan `audioTranscript`), himoya vositasi uni `videoBridgeObserved` deb belgilaydi va video tavsifining redaksiya qilingan soyasini hosil qiladi — bu har bir belgining erkin matnli qismi `[redacted-video-transcript]` bilan almashtirilgan bir xil ko'rinish bo'lib, satr yig'ilishidan oldin tuzilgan belgi maydonini almashtirish orqali quriladi (tekislangan matnni tahlil qilish orqali emas, shuning uchun hech qanday belgi mazmuni — dushmanona yoki oddiy, jumladan `[inaudible]`/`[music]` kabi `]` o'z ichiga olgan tanalar ham — saqlanib qololmaydi). Saqlangan qo'ng'iroq jurnali so'rov tanasi videodan olingan har bir matn qismini tarkibning tengligi bo'yicha moslashtirilgan holda o'sha redaksiya qilingan soya bilan almashtiradi; `fullText` anchor'i yakunlangan qo'ng'iroq oldi himoya vositasi ma'lumotlaridan qayta o'qiladi, shuning uchun keyingi zanjirli himoya vositalari (PII va ma'lumotlarni yashiruvchilar, ustuvorliklar 10/95) tavsif matnini joyida qayta yozgandan keyin va tizimli ko'rsatma/uzatish/xotira kiritilishi xabarlar massivini o'zgartirgandan keyin ham mos kelish muvaffaqiyatli davom etadi. Modelga yuqoriga yuborilgan tana o'zgarmasiz qoladi. Kuzatilgan so'rov, shuningdek, hech qanday bardoshli Xotirani to'ldirmaydi (ham so'rov, ham javobdan olingan ajratib olish o'tkazib yuboriladi), shuning uchun modelning o'z javobi stenogramma matnini Xotiraga qaytara olmaydi.

**Xom video maydonlari (#12430).** Ko'prik yoqilgan bo'lsa va tubdan video qo'llab-quvvatlanishi noma'lum yoki mavjud bo'lmasa, belgilangan `transcript`/`audioTranscript` maydonlari tavsif xatosi yoki `maxVideos` chegarasidan keyin ham `videoBridgeObserved` ni faollashtiradi. `null` va bo'sh satrlar hisobga olinadi; mavjud bo'lmagan maydonlar va video bo'lmagan metama'lumotlar hisobga olinmaydi. Saqlangan nusxalar ushbu maydonlarni qoralaydi yoki so'rovni tashlab yuboradi va keshlar/Xotira chetlab o'tiladi.

Ushbu zaxira yo'llarida yaroqli chaqiruvchi belgilari standart bo'lmagan provayder maydonlari emas, balki qo'llab-quvvatlanadigan `text`/`input_text` qismlariga aylanadi. So'rov tomonidan taqdim etilgan ikkala trek ham ishonchsiz `client` kuzatishlari bo'lib qoladi, bu videoning tavsiflanmagani va vaqt belgilari media bilan tekshirilmagani haqida aniq ogohlantirish bilan birga keladi. Mavjud 256 ta belgi/64 KiB umumiy va har bir belgi uchun budjetlar ikkala trekka birgalikda tatbiq etiladi; vaqt belgilari brokerning 600 soniyalik yuqori chegarasiga va taqdim etilgan har qanday fokus oynasiga mos kelishi kerak. Yaroqsiz treklar tashlab yuboriladi, o'zboshimchalik bilan matn sifatida uzatilmaydi; agar ularning umumiy budjeti oshib ketmasa, yaroqli qardosh trek hali ham ishlatilishi mumkin. Null/bo'sh maydonlar hech qanday matn qo'shmaydi. Ushbu zaxira orqali hech qanday media olish yoki stenogramma yaratish qo'shilmaydi. Stenogramma kengaytmasi maydonlari zaxira video tashuvchisidan va uning `video_url`/`source` obyektlaridan olib tashlanadi. OpenAI simli oq ro'yxati qat'iy qoladi; noma'lum tub video tashuvchilar mavjudligicha qoladi va ma'lum matnli maqsadlar xavfsiz belgilarni saqlab qoladi. Tuzilgan redaksiya qilingan soyalar qo'shilgan stenogramma matnini himoya qiladi, asl chaqiruvchiga tegishli so'rov esa o'zgarmasiz qoladi. Tubdan qo'llab-quvvatlanadigan maqsadlar va o'chirilgan ko'priklar o'zlarining mavjud chetlab o'tish xatti-harakatlarini saqlab qoladi.

Qo'shimcha saqlangan nusxalar xuddi shu kuzatilgan so'rov signalidan foydalanadi. Himoya vositasidan oldingi xom mijoz-so'rov surati, xotiradagi kutilayotgan so'rov va erta rad etilgan so'rov jurnali video qismlaridagi stenogramma maydonlarini tuzilmali ravishda almashtiradi; quvur liniyasi bosqichlari va kontekstni uzatish orqali sintez qilingan qatorli so'rovlar saqlangan so'rov tanasi qabul qiluvchisida redaksiya qilinadi. Saqlangan `video_content_removed` belgisi qasddan tashlab yuborilgan matnni qayta tiklash o'rniga `previous_response_id` davomini yopiq holda muvaffaqiyatsiz tugatishga majbur qiladi. Agar kuzatilgan so'rov jurnalga yozilishidan oldin har bir qism uchun redaksiya qilingan soyasini yo'qotsa yoki bir nechta video soyalaridan biri keyingi so'rov o'zgarishlaridan keyin mos kelmasa, qisman redaksiya qilingan stenogrammani saqlab qolish o'rniga, saqlangan so'rov tanasi butunlay tashlab yuboriladi.

Kuzatilgan so'rov uchun model javobi tuzilmali belgi chegarasiz stenogrammaning istalgan qismidan iqtibos keltirishi mumkin. Shuning uchun uning saqlangan qo'ng'iroq jurnali `responseBody` qismi o'tkazib yuborish belgisi bilan almashtiriladi; batafsil quvur liniyasi artefakti (yuqori oqim/mijoz tanalari va oqim bo'laklarini o'z ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mantiqiy takroriy ijro keshlar ushbu so'rov uchun o'qish va yozish jarayonlarini chetlab o'tadi. Provayder so'rovi va mijozga ko'rinadigan javob o'zgarmasiz qoladi. Batafsil artefakt tashlab yuborilganda, vaqtinchalik buferdagi erta keepalive baytlari chiqarib yuboriladi. Kiro'ning noto'g'ri tuzilgan EventStream ogohlantirishi faqat foydali yuk baytlar sonini xabar qiladi, uning tarkibini yoki JSON tahlilchisining xom xatosini hech qachon ko'rsatmaydi. Bu barcha aloqador bo'lmagan provayder/plagin diagnostikalari tekshirilganini da'vo qilmaydi; kengroq saqlangan qabul qiluvchilar qamrovi #11658 da kuzatib boriladi.

Ichki `/api/modality-bridge/video/drilldown` hayotiy sikli alohida, qayta bog'langan/token bilan autentifikatsiya qilingan kesh substratidir. Har bir operatsiya, shuningdek, kanonik shaffof asosiy identifikatorni talab qiladi. Ishlab chiqarish muhitidagi chaqiruvchi yoqilishidan oldin, u ushbu identifikatorni autentifikatsiya qilingan tenant'dan chiqarib olishi kerak va hech qachon mijoz tomonidan tanlangan qiymatni uzatmasligi kerak. Kesh kalitlari ushbu subyektni kanonik sessiya va video-havola identifikatorlariga bog'laydi, faqat ularning SHA-256 dan olingan kalitlarini saqlaydi va ham o'qish, ham o'chirishni o'sha subyekt doirasida cheklaydi. Kesh har bir yozuv uchun ko'pi bilan 16 ta olingan JPEG kadrni saqlaydi, ularni o'n daqiqadan so'ng amal qilish muddatini tugatadi va cheklangan `start`/`end` o'qishlarini yoki aniq sessiyani o'chirishni qo'llab-quvvatlaydi.

Har bir subyekt 16 ta yozuv va 64 MiB kanonik JPEG ma'lumotlari bilan cheklangan. Ushbu chegaralar global 64 ta yozuv/256 MiB yuqori chegarasidan mustaqil: subyekt kvotasi bosimi global LRU chiqarib yuborilishi ko'rib chiqilishidan oldin faqat o'sha subyektning eng kam oxirgi marta ishlatilgan yozuvlarini chiqarib yuboradi. Amal qilish muddati tugagan yozuvlar kesh faolligida ham subyekt, ham global hisobdan tozalanadi, bekor qilish va tekshiruv xatosi esa qisman almashtirishni amalga oshirmaydi.

Kesh kanon boʻlmagan Base64, ortiqcha toʻldirish (padding), JPEG boʻlmagan media, notoʻgʻri tuzilgan yoki qirqilgan JPEG'larni va cheklangan toʻliq tasvirli `sharp` dekodlashi paytida ogohlantirish keltirib chiqaradigan JPEG'larni rad etadi. U qabul qilingan har bir tasvirni kanonik JPEG sifatida qayta kodlaydi, chaqiruvchi maydonlariga tayanmasdan dekodlangan baytlardan kenglik va balandlikni aniqlaydi va ularni saqlab qolish oʻrniga ortiqcha poliglot baytlarni tashlab yuboradi. Ikkala kvotaga faqat cheklangan kanonik siqilgan bufer hisoblanadi. JSON simli limiti (wire limit) 32 MiB dekodlangan kirish chegarasi uchun Base64 qoʻshimcha xarajatlarini (overhead) oʻz ichiga oladi. Saqlangan har bir derivatsiya tasdiqlangan JPEG formati/oʻlchamini, namuna olish siyosatini, derivatsiya versiyasini, yaratilgan vaqtini, server tomonidan hisoblangan kontent xeshini va xeshkatsinlangan ota-ona havolasini hamda ishonchli chaqiruvchining ota-ona kontenti xeshini yozib oladi. Bekor qilish atomik keshga yozishdan oldin asinxron dekodlash/xesh bosqichlari orasida tekshiriladi.

Ushbu tranches hali production produserini marshrutga ulamaydi va koʻp oʻlchamli variantni tanlashni taʼminlamaydi. Shuning uchun shaffof Video Bridge soʻrov yoʻli qoʻshimcha ishni keltirib chiqarmaydi, shu bilan birga tenantʼga bogʻlangan asosiy derivatsiya va toʻliq FU-08 koʻp oʻlchamli hayot sikli yakunlangan xatti-harakat sifatida hujjatlashtirilishidan koʻra aniq keyingi qilinadigan ishlar boʻlib qolmoqda.

Kadrlar sozlangan Video modeli yordamida ketma-ket taglavhalanadi. Boʻsh Video ustidan yozish (override) Vision sozlamasini meros qilib oladi; agar ikkalasi ham boʻsh boʻlsa, Vision avtomatik marshrutizatori samarali koʻrishga qodir modelni tanlaydi. Muvaffaqiyatli taglavhalar asl qismni barqaror `[Video description:` prefiksi bilan almashtiradi, bu prefiks matnni ishonchsiz media-hosilaviy kuzatuv sifatida belgilaydi va quyi oqim modellariga mediada topilgan koʻrsatmalarga ergashmaslikni buyuradi. Kadr taglavhasi kesh kalitlari JPEG baytlari, soʻrov (prompt), vaqt belgisi va samarali modelni oʻz ichiga oladi; faqat muvaffaqiyatli taglavhalar keshlanadi. Kesh yozuvlari haqiqiy muvaffaqiyatli produser modelini, shu jumladan zaxira (fallback) modelni saqlab qoladi; agar turli kadrlar turli modellar tomonidan ishlab chiqarilgan boʻlsa, koʻprik `mixed` haqida xabar beradi. Keshga tushish soʻralgan marshrutizatsiya rejasi sifatida qayta nomlash oʻrniga oʻsha produser identifikatorini qayta ishlatadi. Butun video natijalari keshi chiqishni oʻzgartiradigan har bir kirish maʼlumotlari boʻyicha kalitlanadi — soʻrov, samarali model, namuna olish siyosati, kadrlar soni, semantik tahlil rejimi, normallashtirilgan fokus maslahatining SHA-256 barmoq izi, fokus oynasi, `transcript`, `audioTranscript` va kontakt-varaq bayrogʻi — shuning uchun bu oʻlchamlardan birortasini oʻzgartirish keshning topilmasligiga olib keladi, hech qachon eskirgan qayta foydalanishga emas. Vizual dublikatlarni tozalash siyosati versiyasi, chegarasi va cheklangan nomzod-kadrlar soni ham natijalar keshi kaliti va metamaʼlumotlarida aniq koʻrsatilgan; shuning uchun siyosatning oʻzgarishi eskirgan butun video tavsifidan qayta foydalana olmaydi. Natijalar keshi v4 metamaʼlumotlari rejim va barmoq izini saqlaydi, hech qachon xom foydalanuvchi vazifasini emas. Himoya panjarasi metamaʼlumotlari soʻralgan va samarali tahlil rejimlari ikkalasini ham xabar qiladi; foydalanish mumkin boʻlgan foydalanuvchi matnisiz soʻralgan `focused` rejimi samarali ravishda `full` deb xabar qilinadi.

Himoya panjarasi qoʻllab-quvvatlanadigan har bir video qismini ajratib oladi, lekin `modalityBridgeVideoMaxVideos` dan koʻp boʻlmagan qismini tavsiflaydi. `supportsVideo === false` ekanligi tasdiqlangan maqsad uchun xato qilgan va limitdan oshgan videolar aniq xavfsiz matn markerlariga aylanadi, shuning uchun hech qanday xom video saqlanib qolmaydi. Imkoniyat nomaʼlum boʻlsa, bu qismlar oʻzlarining video tashuvchisini saqlab qoladi; har qanday zaxira transkripti yuqoridagi cheklangan matn konversiyasiga amal qiladi. `supportsVideo === true` boʻlgan maqsadlar koʻprikni chetlab oʻtadi. Mijoz soʻrovini toʻxtatish signali yuklab olish, broker navbati, quyi jarayonlar va taglavha chaqiruvlari boʻylab tarqaladi; toʻxtatishlar videolar orasida toʻxtaydi va hech qachon xom medialarga ochilib ketmaydi.

Runtime sozlamalari maʼlumotlar bazasida saqlanadi va Zod yordamida tasdiqlanadi:

| Kalit                               | Standart qiymat | Oraliq / xatti-harakat                                                                                               |
| ----------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Ixtiyoriy runtime, ixtiyoriy qo'shilish (opt-in)                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` umumiy taglavhalarni saqlaydi; `focused` cheklangan, ishonchsiz oxirgi foydalanuvchi kontekstidan foydalanadi |
| `modalityBridgeVideoModel`          | `""`            | Vision Bridge modelini meros qilib olish                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` yoki proporsional `segment_aware`; detektor xatosi `uniform` ga qaytadi                     |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                       |

120 sekunddan yuqori boʻlgan eski saqlangan Video taym-aut qiymatlari broker muddatigacha cheklanadi; ushbu limitdan yuqori boʻlgan yangi sozlamalar yozishlari rad etiladi.
`GET /api/modality-bridge/video/runtime` autentifikatsiya yoki runtime tekshiruvidan oldin ishonchli shtamplangan loopback lokalligini talab qiladi, shundan soʻng boshqaruv autentifikatsiyasini talab qiladi. U faqat `available`, tozalangan FFmpeg/ffprobe versiyalarini va runtime mavjud boʻlmaganda qatʼiy sababni qaytaradi. Ichki chiqarish yakuniy nuqtasi ommaviy yuklash APIʼsi emas: navbatning toʻlib ketishi `503` va `Retry-After` ni qaytaradi, chaqiruvchining uzilishi `499` ni qaytaradi va belgilangan broker muddati `504` ni qaytaradi. Konvertatsiya qilingan javoblar Vision yoki Audio segmentlarini olib tashlamasdan markaziy `x-omniroute-modality-bridge` sarlavhasiga `video->text;model=<visionModel>;parts=<videos>` ni qoʻshadi.

### PII Masker (`piiMasker.ts`)

**Ikkala** bosqichda ham ishlaydi.

- **`preCall`** payload'ni klonlaydi, `system`, `messages`, `input` va `prompt` (oddiy qator elementlarini ham o'z ichiga olgan holda) bo'ylab yurib chiqadi va qator `content`/`text` maydonlariga `processPII()` (`@/shared/utils/inputSanitizer`'dan) funksiyasini qo'llaydi. `PII_REDACTION_ENABLED=true` bo'lganda, aniqlangan PII chiquvchi payload'da tahrirlanadi. Bu `INPUT_SANITIZER_MODE`'dan (faqat prompt-in’eksiy siyosatini boshqaradi) mustaqil. Tahrirlash o'chirilgan bo'lganda, chaqiruv tarkibni qayta yozmasdan aniqlash sonini yozib boradi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` va Responses-API shaklidagi maskerni (`maskResponsesOutput` — `output_text` va `output[].content[].text`ni qamrab oladi) ishga tushiradi. Agar biron bir tahrirlash sodir bo'lsa, o'zgartirilgan javob asl nusxasini almashtiradi.

Himoya vositasi hech qachon bloklamaydi; u faqat izoh qo'shadi (`meta.detections`, `meta.redacted`) yoki qayta yozadi.

#### Turlar bo'yicha tanlash, maxsus naqshlar va aniqlash hisoblagichlari

**Dashboard → Settings → Security → PII masking** _nima_ maskalanishini tanlaydi. U maskalashni yoqmaydi: bu hali ham `PII_REDACTION_ENABLED` (so'rov) va `PII_RESPONSE_SANITIZATION` (javob + SSE) orqali boshqariladi va ikkalasi ham sukut bo'yicha o'chirilgan.

- **Turlar bo'yicha tanlash** — o'rnatilgan identifikatorlar `src/shared/constants/piiTypes.ts` da (`PII_BUILTIN_TYPES`) keltirilgan. Belgilanmagan bo'lishi barcha turlarni anglatadi (bu sozlamadan oldingi xatti-harakat). So'rovlar mexanizmining `ssn_us` naqshi `ssn` ga mos keladi. Shablonlar (Minimal, Standard, Financial, Brazilian, USA, Full) faqat interfeysdagi katakchalarni to'ldiradi.
- **Maxsus naqshlar** — 20 tagacha regeks yoki wildcard naqshlari (`*` = 64 tagacha bo'sh bo'lmagan belgilar, `?` = bitta). Mos kelganlar `[CUSTOM_REDACTED]` ga aylanadi. Har bir naqsh `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`) orqali tekshiriladi: ko'pi bilan 500 ta belgi, bayroqlar `g i m s u` bilan cheklangan, kompilyatsiya qilinishi shart, `safe-regex`'dan o'tishi kerak (halokatli ortga qadam bosishning oldini olish uchun) va bo'sh qator yoki tahrirlash to'ldiruvchisiga mos kelmasligi kerak. Xatolikka yo'l qo'ygan naqsh saqlash va sinov paytida rad etiladi, saqlangan qator esa kompilyatsiya qilinish o'rniga ishlash vaqtida o'tkazib yuboriladi. Maxsus naqshlar faqat maskalash yoqilgan paytda ishlaydi.
- **Aniqlash hisoblagichlari** — tur bo'yicha sonlar (hech qachon mos kelgan qiymatlar emas), xotirada saqlanadi va qayta ishga tushirilganda tozalanadi (`src/lib/pii/piiDetectionStats.ts`). Ular faqat maskalash yoqilgan paytda oshib boradi.

Sozlamalar `key_value` jadvalida (`pii_settings` nomlar fazosi, `src/lib/db/piiSettings.ts`) saqlanadi va 1 soniyalik kesh orqali o'qiladi. API:

| Metod  | Yo'l                     | Maqsadi                                                                                            |
| ------ | ------------------------ | -------------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Bayroq holati, `enabledTypes`, `customPatterns`, aniqlash hisoblagichlari                          |
| `PUT`  | `/api/settings/pii`      | `enabledTypes` (`null` = barchasi) va/yoki `customPatterns` ni almashtirish                        |
| `POST` | `/api/settings/pii/test` | Ko'pi bilan 8 KB namuna asosida bitta naqshni sinovdan o'tkazish (dry-run); hech narsa saqlanmaydi |

Bularning uchtasi ham boshqaruv avtorizatsiyasini talab qiladi va tanani Zod yordamida tekshiradi (`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Foydalanuvchi taqdim etgan tarkibdagi dushmanona tuzilmalarni aniqlaydi va sozlangan siyosatni majburiy bajaradi. Xatti-harakat muhit o'zgaruvchilari va konstruktor opsiyalari orqali boshqariladi:

| Sozlama         | Muhit o'zgaruvchisi                                                                                   | Odatiy | Ta'siri                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | `false` bo'lganda, himoya vositasi qisqa tutashuv qiladi (short-circuits).                                                                                                                                          |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | In’eksiya siyosati: `block`, `warn` yoki `log`. (`redact` orqaga moslik uchun qabul qilinadi, lekin in’eksiya matnini **olib tashlamaydi**; so'rov PII tahrirlashi `PII_REDACTION_ENABLED` tomonidan boshqariladi.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Bloklash uchun talab qilinadigan minimal jiddiylik darajasi. O'rta (Medium) daraja sukut bo'yicha faqat kuzatish uchun mo'ljallangan.                                                                               |

**Rejim ustuvorligi** (`getMode`): chaqiruvchi `options.mode` → `INJECTION_GUARD_MODE` **DB funksiya-bayrog'ini chetlab o'tish (override)** (Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env → `warn`. Shuning uchun dashboard chetlab o'tishi muhit o'zgaruvchilaridan ustun keladi, shuning uchun Feature Flags interfeysi ishlayotgan himoyani jonli ravishda boshqaradi (qayta ishga tushirish talab etilmaydi). Ma'lumotlar bazasidan o'qish xatolikka chidamli: agar xatolik yuz bersa, himoya muhitga asoslangan xatti-harakatga qaytadi va hech qanday chetlab o'tish o'rnatilmaganda xatti-harakat faqat muhitga asoslangan aniqlash bilan bir xil bo'ladi.

Aniqlash manbalari:

1. `@/shared/utils/inputSanitizer`'dan `sanitizeRequest()` (konveyerning boshqa joylarida ishlatiladigan umumiy detektorlar to'plami).
2. O'rnatilgan `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va `markdown_system_block`, ikkalasi ham `high` jiddiylik darajasida).
3. Konstruktor opsiyalari orqali uzatiladigan ixtiyoriy `customPatterns` (satrlar, regeks yoki `{ name, pattern, severity }` yozuvlari).

Qachonki `mode === "block"` **va** kamida bitta aniqlash ogʻirlik darajasi chegarasiga yetsa, `preCall` `{ block: true, message: "Request rejected: suspicious content detected" }` natijasini qaytaradi. `warn`/`log` rejimlarida himoya vositasi jurnallarga yozadi, lekin chaqiruvga ruxsat beradi. Shuningdek, `evaluatePromptInjection()` umumiy yordamchi funksiyasi promptlarni reyestrdan oʻtmasdan baholashi kerak boʻlgan chaqiruvchilar uchun ham eksport qilinadi.

**Skanerlash chegarasi (v3.8.20):** detektor birlashtirilgan prompt matnining faqat **dastlabki 16 KB** qismini tekshiradi — bu `src/shared/utils/inputSanitizer.ts` faylidagi `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). `detectInjection()` ham, `evaluatePromptInjection()` ham naqshlar siklini ishga tushirishdan oldin `slice(0, MAX_INJECTION_SCAN_BYTES)` amalini bajaradi. In'yeksiya direktivalari kirish ma'lumotlarining yuqori qismida joylashadi, shuning uchun bu aniqlash samaradorligini pasaytirmagan holda ko'p yuzlab kilobaytlik foydali yuklar uchun regeks CPU/GC yuklamasini cheklaydi (qarang: #3932, #4041).

### Maxfiy ma'lumotlarni niqoblovchi (`credentialMasker.ts`)

Ikkala bosqichda **ham** ishlaydi, standart zanjirda oxirgisi (ustuvorligi `95`). Chiquvchi foydali yukdan (xabar mazmuni, vosita chaqiruvi argumentlari, vosita natijalari) **va** provayder javobidan barchaga ma'lum API kalitlari / maxfiy token naqshlarini niqoblaydi, shunda promptga kiritilgan (yoki vosita natijasi tomonidan qaytarilgan) maxfiy ma'lumot yuqori oqimdagi provayderga yoki mijozga sizib chiqmaydi.

- **Faqat ixtiyoriy ravishda yoqiladi**, PII ma'lumotlarini niqoblash bilan bir xil qoida (Qattiq qoida #20 ga yaqin): agar `settings.credentialRedactionEnabled === true` **yoki** `CREDENTIAL_REDACTION_ENABLED=true` bo'lmasa, o'chirilgan bo'ladi. U o'chirilgan bo'lsa, himoya vositasi hech qanday amal bajarmaydi — u hech qachon bloklamaydi va qayta yozmaydi.
- `redactCredentials()` to'liq foydali yuk/javob daraxti bo'ylab yurib chiqadi (`walkValue()`, prototip ifloslanishidan xavfsiz, `WeakSet` orqali sikldan xavfsiz) va mos kelgan qiymatlarni `[REDACTED:<type>]` to'ldiruvchisi bilan almashtiradi, faqat amalda o'zgargan tarmoqlarnigina klonlaydi.
- `CREDENTIAL_PATTERNS` LLM provayderi kalitlarini (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlarini (GitHub, Slack, Linear, Notion, npm, Postman, Discord), to'lov kalitlarini (Stripe, Square), bulutli kalitlarni (AWS kirish kaliti, Twilio, SendGrid, Mailgun), maxfiy kalitlar / JWT'larni, maxfiy ma'lumotlarni o'z ichiga olgan ulanish satrlarini (`mongodb://user:pass@...` va hokazo) hamda umumiy `Authorization`/`x-api-key`/`api-key`/`apikey` sarlavha qiymati naqshini o'z ichiga oladi. Sarlavha shaklidagi kalitlar (`authorization`, `x-api-key`, `api-key`, `apikey`) umumiy matn regeksi orqali emas, balki tuzilmaviy tarzda niqoblanadi (faqat qiymat, `Bearer `/`Basic ` kabi sxema prefiksi saqlanib qolinadi).
- Himoya vositasi hech qachon bloklamaydi; u faqat qayta yozadi (`modifiedPayload` / `modifiedResponse`) va izohlaydi (`meta.credentialsRedacted`, `meta.count`).

Regressiyadan himoya: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazaviy shartnoma (`base.ts`)

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
  block?: boolean; // true zanjirni to'xtatadi
  message?: string; // bloklanganda ko'rsatiladi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // so'rovni qayta yozish uchun preCall tomonidan qaytariladi
  modifiedResponse?: TValue; // javobni qayta yozish uchun postCall tomonidan qaytariladi
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

Himoya vositasi (guardrail) `void`, `{}` yoki `{ block: false }` qaytarish orqali "o'zgarish yo'qligini" bildiradi. `modifiedPayload`/`modifiedResponse` ni qaytarish quyi oqimdagi (downstream) himoya vositalari uchun zanjir bo'ylab oqib o'tayotgan qiymatni almashtiradi. `signal?: AbortSignal` chaqiruvchining hayot siklini himoya vositalariga yetkazadi. So'rovni bekor qilish (abort) – bu ataylab qilingan fail-open istisnosi: media ko'priklari qo'llab-quvvatlamasligi ma'lum bo'lgan manzilga xom medialarni tiklamasdan ishni to'xtatadi va tozalaydi.

## Reyestr (`registry.ts`)

Singleton `guardrailRegistry` quyidagilarni taqdim etadi:

- `register(guardrail)` — himoya vositasini qo'shadi (yoki normallashtirilgan nomi bo'yicha almashtiradi) va `priority` bo'yicha o'sish tartibida qayta saralaydi.
- `clear()` / `list()` — ma'muriy yordamchi funksiyalar.
- `runPreCallHooks(payload, context)` — faol himoya vositalari bo'ylab takrorlanadi, `modifiedPayload` orqali payload'ni o'tkazadi va birinchi `block: true` bo'lganda to'xtaydi.
- `runPostCallHooks(response, context)` — javob tomonida ham xuddi shunday jarayon.
- `resetGuardrailsForTests({ registerDefaults })` — holatni tozalaydi va testlarni toza yakkalash (isolation) uchun ixtiyoriy ravishda standart qiymatlarni qayta ro'yxatdan o'tkazadi.

Ikkala bajaruvchi (runner) ham `{ blocked, payload|response, results, guardrail?, message? }` obyektini qaytaradi, bu yerda `results` – kuzatish (tracing) uchun foydali bo'lgan har bir himoya vositasi uchun `blocked`, `skipped`, `modified`, `error` va `meta` maydonlarini o'z ichiga olgan `GuardrailExecutionResult` yozuvlari massividir.

### Har bir so'rov uchun himoya vositalarini o'chirish

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` joriy so'rov uchun o'tkazib yuborilishi kerak bo'lgan himoya vositalari nomlarining takrorlanmagan (de-duplicated) ro'yxatini yig'adi. Beshta kanal mavjud bo'lib, ular ushbu tartibda o'qiladi va bitta ro'yxatga birlashtiriladi (takrorlanishlarni olib tashlashda birinchi uchragani ustun keladi):

1. `apiKeyInfo.disabledGuardrails`
2. So'rov tanasidagi (body) `disabledGuardrails` (yuqori darajadagi)
3. So'rov tanasidagi `metadata.disabledGuardrails` (`metadata` obyekt bo'lgandagina)
4. `x-omniroute-disabled-guardrails` sarlavhasi (header)
5. Eski (legacy) `x-disabled-guardrails` sarlavhasi

Barcha beshta kanal birlashtiriladi, shu jumladan ikkita sarlavha ham: ham `x-omniroute-disabled-guardrails`, ham `x-disabled-guardrails` ni yuborish ularning ro'yxatlari birlashmasini o'tkazib yuboradi, va bo'sh zamonaviy sarlavha endi eski sarlavhani yashirmaydi ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) da tuzatilgan).

Qiymatlar qatorlar massivi yoki vergul bilan ajratilgan qator bo'lishi mumkin; nomlar bo'shliqlardan tozalanadi va kichik harflardagi kebab-case formatiga normallashtiriladi (`pii_masker` → `pii-masker`), bo'sh yozuvlar tashlab yuboriladi. Natija `context.disabledGuardrails` orqali reyestrga uzatiladi va u mos keladigan himoya vositalarini o'tkazib yuboradi (`results` da `skipped: true`).

O'chirish ro'yxati faqat **reyestrga** ta'sir qiladi. Prompt-injection ning `block` rejimi majburiy chegara hisoblanadi: injection-guard o'rta dasturi (`src/middleware/promptInjectionGuard.ts`) chaqiruvchi tomonidan boshqariladigan hech qanday o'chirish ro'yxatisiz `evaluatePromptInjection()` ni chaqiradi (u ilgari ishlatgan o'lik `resolveDisabledGuardrails({ body })` chaqiruvi [#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) da olib tashlangan), shuning uchun `prompt-injection` ni o'chirib qo'yadigan so'rov hamon `block` rejimida rad etiladi. Bu loyiha dizayni bo'yicha shunday qilingan. O'chirish kanallari chaqiruvchi tomonidan boshqariladi (so'rov tanasi, metama'lumotlar, sarlavhalar) va chaqiruvchi operator o'rnatgan xavfsizlik boshqaruvini o'chira olmasligi kerak ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) dan kelib chiqqan sarlavhalar birlashmasi faqat qaysi reyestr himoya vositalari o'tkazib yuborilishini o'zgartiradi; u mijozga o'rta dasturni chetlab o'tishiga yo'l qo'ymaydi. Har bir kalit va guruh uchun majburiy himoya vositasi siyosatlari v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) da kuzatib boriladi. [Qamrov va cheklovlar](#coverage-and-limits) bo'limiga qarang.

## Bajarilish Tartibi

`src/sse/handlers/chat.ts` va `open-sse/handlers/chatCore.ts` orqali o'tadigan har bir so'rov uchun (chat oilasiga mansub marshrutlar [Qamrov va cheklovlar](#coverage-and-limits) bo'limida keltirilgan):

1. `resolveDisabledGuardrails(...)` API kaliti, so'rov tanasi va sarlavhalardan chetlab o'tish ro'yxatini tuzadi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` himoya to'siqlarini o'sish tartibida bajaradi:
   - O'chirilgan himoya to'siqlari `skipped` sifatida qayd etiladi.
   - Har bir himoya to'siqining `preCall` metodi `modifiedPayload` orqali payload'ni qayta yozishi mumkin.
   - Birinchi `block: true` zanjirni qisqa tutashtiradi va ishlov beruvchi himoya to'siqi rad etish javobini qaytaradi.
3. (Ehtimol qayta yozilgan) payload kombinatsiyalangan marshrutlash va yuqori oqim dispetcherligiga o'tadi.
4. **Faqat non-streaming:** javob yig'ilgandan so'ng,
   `guardrailRegistry.runPostCallHooks(...)` xuddi shu zanjirni javob ustida bajaradi. `block: true` bu yerda yuqori oqim javobini bekor qiladi va HTTP 400 qaytaradi. Oqimli javoblar bu qadamni butunlay chetlab o'tadi.

Xatolik keltirib chiqaradigan himoya to'siqlari `error: <message>` bilan qayd etiladi va `logger.warn` orqali jurnalga yoziladi, biroq zanjir davom etadi — dizayn bo'yicha xatolik yuz berganda ochiq qoladi.

## Qamrov va cheklovlar

Himoya to'siqlari reestri faqat chat quvuriga ulangan. Ushbu cheklovlar `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` va `tests/unit/guardrail-pipeline-characterization.test.ts` tomonidan belgilanadi; xatti-harakat o'zgarganda ushbu testlarni ongli ravishda yangilang.

### Ilaklar qayerda bajariladi

| Ilak / boshqaruv elementlari                  | Qayerda bajariladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                             | `handleChat` (`src/sse/handlers/chat.ts`) tomonidan ishlov beriladigan so'rovlar: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (va `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` hamda Telegram chat proksi-serveri. Shuningdek, boshqaruv paneli test yakuniy nuqtasi `/api/guardrails/test`. Qo'ng'iroqdan oldingi blok HTTP 400 qaytaradi. |
| `runPostCallHooks`                            | Faqat **non-streaming** chat javoblari (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Oqimli javoblar hech qachon unga yetib bormaydi.                                                                                                                                                                                                                                                                                                                                    |
| Oqimli PII                                    | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), `PII_RESPONSE_SANITIZATION` yoqilgan bo'lganda `streamingPipeline.ts` ga quvurlangan. Bu himoya to'siqi emas, shuning uchun o'chirish kanallari unga ta'sir qilmaydi.                                                                                                                                                                                                                                                |
| Inyeksiyadan himoya qiluvchi prokladka (eski) | Promptni o'z ichiga olgan har qanday `/v1` marshruti, shu jumladan chat oilasi (qarang: [marshrut qamrovi](#injection-guard-route-coverage--red-team-phase-8--block-d)). Faqat prompt inyeksiyasi uchun.                                                                                                                                                                                                                                                                           |

### Nimalar qamrab olinmagan

- **Media, embeddings va ma'lumotlar marshrutlari** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) hech qachon reestrga yetib bormaydi. U yerda
  PII ni niqoblash, hisob ma'lumotlarini niqoblash yoki modal ko'prik ishlamaydi. Ularning yagona
  tekshiruvi eski inyeksiyadan himoya qiluvchi prokladka hisoblanadi.
- **Oqimli javoblar** qo'ng'iroqdan keyingi himoya to'siqlarini olmaydi: qo'ng'iroqdan keyingi `pii-masker` yoki
  `credential-masker` ishlamaydi va qo'ng'iroqdan keyingi blok mavjud emas. Faqat oqimli PII
  transformatsiyasi qo'llaniladi (`PII_RESPONSE_SANITIZATION` yoqilgan bo'lganda). Oqimli javobda qaytarilgan hisob ma'lumotlari
  yashirilmaydi.
- **O'chirish kanallari va prokladka (dizayn bo'yicha):** prokladka
  prompt inyeksiyasini `evaluatePromptInjection()` ga o'zining chaqiruvi bilan baholaydi,
  chaqiruvchi tomonidan boshqariladigan o'chirish ro'yxatini uzatmasdan. `block` rejimi majburiy
  chegara bo'lib, chaqiruvchi tomonidan boshqariladigan o'chirishlar uni chetlab o'tolmaydi, shu jumladan chat oilasi marshrutlarida ham
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). `prompt-injection` ni
  o'chirish faqat reestr himoya to'siqini chetlab o'tadi.

### Qo'ng'iroqdan keyingi bosqichdan oldin javobni nima ko'radi

Non-streaming yo'lida tartib quyidagicha: xotirani ajratib olish → o'rnatilgan vositani
bajarish → qo'ng'iroqdan keyingi himoya to'siqlari → qo'ng'iroqdan keyingi blokdan chiqish → semantik kesh ombori.

- **Xotirani chiqarib olish** va **vositalarni bajarish** jarayonlari _post-call_ himoya qatlamlari uni qayta yozishi yoki bloklashidan oldin javobni ko'radi. [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401)dan beri, `PII_RESPONSE_SANITIZATION` yoqilgan bo'lganda (oqimli va oqimli bo'lmagan rejimlar uchun ham), xotirani chiqarib olish chiqarilgan matnni `sanitizePII` orqali o'tkazadi, biroq _post-call_ bosqichida keyinchalik bloklangan javob ham baribir xotira va vositalarga taqdim etilgan bo'ladi.
- **Semantik kesh** javobni *post-call*dan keyin saqlaydi, shuning uchun u qayta yozilgan javobni saqlab qoladi va bloklangan javob hech qachon keshlanmaydi. Kesh yozuvlari har bir API kaliti bo'yicha kalitlanadi.

## Konfiguratsiya

Oʻrnatilgan himoya mexanizmlari (guardrails) tomonidan oʻqiladigan muhit oʻzgaruvchilari:

| Oʻzgaruvchi                           | Ishlatuvchi               | Taʼsiri                                                                                                                                            |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aniqlashni toʻliq oʻchirish uchun `false` qilib belgilang.                                                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Inyeksiya siyosati: `warn`, `block` yoki `log`. Eski `redact` qiymati inyeksiya matnini qayta yozmaydi.                                            |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Inyeksiya himoyasi rejimi; shuningdek, muhit oʻzgaruvchilarini bekor qiluvchi (ustun qoʻyuvchi) maʼlumotlar bazasi funksiyasi bayrogʻi (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` rad etadigan minimal jiddiylik darajasi: `high` (standart), `medium` yoki `low`.                                                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` uchun eski taxallus (alias).                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` boʻlganda, soʻrovdagi PII maʼlumotlari yashiriladi (inyeksiya rejimidan qatʼiy nazar).                                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Javob tomonidan maskalash xatti-harakatini boshqaradi.                                                                                             |

Modality Bridge himoya mexanizmlari ish vaqti konfiguratsiyasini muhit oʻzgaruvchilaridan emas, balki maʼlumotlar bazasiga asoslangan sozlamalar omboridan (`getSettings()`) oʻqiydi. Vision'ning asosiy kalitlari:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` kalitlari faqat hujjatlashtirilgan bir siklli oʻqish zaxirasi sifatida qabul qilinadi; boshqaruv paneli yozish uchun asosiy kalitlardan foydalanadi. Standart qiymatlar va zaxira hal qiluvchi `src/shared/constants/modalityBridgeDefaults.ts` faylida joylashgan, eski konstantalar esa `src/shared/constants/visionBridgeDefaults.ts` da saqlanib qolgan.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` va `modalityBridgeAudioMaxClips`, shuningdek, umumiy
`modalityBridgeCache*` sozlamalaridan foydalanadi. Audioda eski kalitlar uchun zaxira variant mavjud emas, chunki bu kalitlar Modality Bridge sxemasi bilan birga kiritilgan.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` va
`modalityBridgeVideoTimeout`, shuningdek, umumiy `modalityBridgeCache*` sozlamalaridan foydalanadi.
U standart ravishda oʻchirilgan, chunki FFmpeg/ffprobe ixtiyoriy operatsion bogʻliqliklar hisoblanadi va kadrlar uchun izoh qoʻshish kechikish hamda model xarajatlarini oshiradi.

## Maxsus himoya to‘siqlari

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

Qadamlar:

1. `BaseGuardrail` sinfidan meros oluvchi `src/lib/guardrails/myGuardrail.ts` faylini yarating.
2. `preCall` va/yoki `postCall` ni amalga oshiring.
3. Uni import vaqtida ro'yxatdan o'tkazing (`registerDefaultGuardrails` dan qo'shish) yoki ish vaqtida `guardrailRegistry.register(...)` ni chaqiring — reyestr bir xil normallashtirilgan nomga ega bo'lgan har qanday oldingi himoya to'sig'ini almashtiradi.
4. `tests/unit/` ostida testlar qo'shing (mavjud misollar:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test qilish

Ma'lum holatdan boshlash uchun testlar orasida `resetGuardrailsForTests()` dan foydalaning.
Bo'sh reyestrdan boshlash va faqat test qilinayotgan himoya to'siqlarini ro'yxatdan o'tkazish uchun
`{ registerDefaults: false }` ni uzating. Vision Bridge bog'liqlikni kiritishni
(`deps.getSettings`, `deps.callVisionModel`) qabul qiladi; Audio Bridge sozlamalar,
imkoniyatlar, STT modelini tanlash, ma'lumotlar tekshiruvlari va transkripsiya uchun
ekvivalent nuqtalarni taqdim etadi. Shuning uchun testlar ma'lumotlar bazasi yoki tarmoqqa
ulanmasdan ikkala oqimni ham sinab ko'rishi mumkin.

## Shuningdek qarang

- `src/lib/guardrails/` — amalga oshirish
- `src/shared/utils/inputSanitizer.ts` — prompt-in'yeksiya va PII ni niqoblashni ta'minlovchi umumiy detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standart sozlamalari va majburiy ko'prik modeli ro'yxati
- `src/shared/constants/modalityBridgeDefaults.ts` — umumiy Vision/Audio ish vaqti standartlari
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal qatlam (circuit breaker, sovish vaqtlari)
- `docs/reference/ENVIRONMENT.md` — to'liq muhit o'zgaruvchilari ma'lumotnomasi

## Injection-guard yo'nalish qamrovi va red-team (8-bosqich · D bloki)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) foydalanuvchi so'rovlarini qabul qiladigan barcha yo'nalishlarni qamrab oladi. U `INJECTION_GUARD_MODE` ni hurmat qiladi (standart `warn` = faqat jurnallarga yozish; `block` = HTTP 400 `SECURITY_001` ni qaytaradi).

| Turi          | Yo'nalishlar                                                                                                                                         | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Matn (mavjud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Ma'lumotlar   | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Matnni ajratib olish (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ni qamrab oladi.

**Red-team (har kecha ishlaydigan, `nightly-llm-security.yml`):** promptfoo har bir yo'nalish `INJECTION_GUARD_MODE=block` da OWASP-LLM korpusini bloklashini tasdiqlaydi; garak tekshiruvlarni ishga tushiradi (maxfiy kalitsiz o'tkazib yuboriladi). `moderations` izchillik uchun kiritilgan. Bloklash rejimi majburiy chegara hisoblanadi: `evaluatePromptInjection()` o'rta dastur unga uzatadigan so'rov bo'yicha o'chirish ro'yxatiga e'tibor bermaydi, shuning uchun `disabledGuardrails` yo'nalishni bundan ozod **qilmaydi** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Kechi bilan ishlaydigan ish jarayoni (`.github/workflows/nightly-llm-security.yml`, cron + qo'lda ishga tushirish) ikkita vazifaga ega:

- **`promptfoo-guard` (bloklovchi)** — `INJECTION_GUARD_MODE=block` bilan `promptfoo eval -c promptfooconfig.yaml` ni ishga tushiradi. Har bir dushmanona holat (masalan, "barcha oldingi ko'rsatmalarga e'tibor bermang…", DAN uslubidagi jailbreak'lar) javobda `error.code === "SECURITY_001"` borligini, ya'ni himoya to'sig'i so'rovni haqiqatdan ham rad etganini tasdiqlaydi.
- **`garak` (tavsiyaviy)** — mahalliy OmniRoute nusxasiga (`http://localhost:20128/v1`) nisbatan garak `--probes promptinject,dan,leakreplay` ni ishga tushiradi. Provayder maxfiy kalitiga (`PROMPTFOO_PROVIDER_KEY`) bog'langan; muvaffaqiyatli o'tkazib yuboriladi va oxiriga `|| true` qo'shiladi, shuning uchun u CI ni muvaffaqiyatsiz tugatmasdan hisobot beradi.

Himoya yordamchisining (`createInjectionGuard` / `withInjectionGuard`) qamrovi promptni o'z ichiga olgan har bir `/v1` yo'nalishini qamrab oladi; prompt matni `src/shared/utils/inputSanitizer.ts` dagi `extractMessageContents()` orqali `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` dan olinadi.

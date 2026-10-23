# Guardrails (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Doğruluk kaynağı:** `src/lib/guardrails/`
> **Son güncelleme:** 2026-10-17 — v3.8.52 (eklenenler [Kapsam ve sınırlar](#coverage-and-limits):
> kancaların hangi rotalara ve yanıt yollarına ulaştığı, birleştirilmiş devre dışı bırakma başlıkları (#16412), zorunlu bir sınır olarak enjeksiyon engelleme modu (#16413) ve post-call öncesinde bir yanıtı neyin gördüğü)

Guardrails, OmniRoute ile upstream (kaynak) sağlayıcılar arasındaki sınırda güvenlik, politika ve içerik dönüşümlerini uygular. Her guardrail; istek yüklerini (`preCall`) ve upstream yanıtlarını (`postCall`) inceleyebilir (ve isteğe bağlı olarak reddedebilir, dönüştürebilir veya bunlara açıklama ekleyebilir).

Sistem **fail-open** (hata durumunda açık kalma) prensibiyle çalışır: yürütme sırasında bir guardrail hata fırlatırsa, kayıt defteri (registry) hatayı kaydeder ve isteği başarısız kılmak yerine bir sonraki guardrail ile devam eder. Engelleme (blocking) açık bir karardır (`block: true`), asla tesadüf değildir. Tek istisna iptal edilmiş bir istektir: çağıran tarafın `signal`'i iptal edildiğinde, hata fırlatan bir guardrail atlanmak yerine kanca (hook) çalışmasını reddeder.

Kancalar her rotada veya her yanıtta **çalışmaz**. Bir guardrail'e güvenlik kontrolü olarak güvenmeden önce [Kapsam ve sınırlar](#coverage-and-limits) bölümünü okuyun.

## Yerleşik Guardrail'ler

Kayıt defteri, içe aktarıldığında öncelik sırasına göre altı guardrail'i otomatik olarak yükler (`registry.ts` → `registerDefaultGuardrails()` kısmına bakın):

| Öncelik | İsim                | Aşama(lar)     | Dosya                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha düşük öncelik numaraları **önce** çalışır.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

GLM 5.3 taban modeli ve `glm-5.3-{low,high,max}`, açık bir şekilde `supportsVision:false` kayıt defteri/belirtim (spec) meta verisine sahiptir. GLM 5.3 Flash varyantları yerel görsel (native-vision) modelleri olarak kalır. Claude Code'un `/v1/messages` rotası, Claude'dan OpenAI'a çeviriden **önce** paylaşılan `handleChat` pre-call guardrail zincirine girer; iç içe geçmiş `Read` araç sonucu görselleri, bu çeviri onları OpenAI `image_url` içeriğine taşımadan önce açıklanmalı veya işlenmelidir (#17069).

Görsel içeren ve **görsel yeteneği olmayan modellere** yönlendirilen istekleri yakalar ve upstream çağrısından önce ya tüm isteği görsel yeteneği olan bir modele yönlendirir ya da görsel kısımlarını yapılandırılabilir bir görsel modeli tarafından üretilen metin açıklamalarıyla değiştirir. Bu, yalnızca metin destekleyen sağlayıcıların çok modlu yükleri şeffaf bir şekilde işleyebilmesini sağlar.

Akış:

1. Hedef model halihazırda görsel desteğine sahipse atla (zorunlu köprü listesi `isVisionBridgeForcedModel` içinde yer almıyorsa).
2. Kombo uyumluluk filtresiyle paylaşılan tek doğruluk kaynağı olan `open-sse/utils/mediaParts.ts` içindeki **birleştirilmiş medya dedektörü** `detectMediaParts()` fonksiyonuna delege eden `extractImageParts(messages)` (`visionBridgeHelpers.ts`) aracılığıyla görsel parçalarını ayıkla. Ayıklama işlemi, `replaceImageParts` fonksiyonunun geri ekleyebileceği şekillerle (çıkarma↔ekleme sözleşmesi) sınırlandırılmıştır: OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL `source.type:"url"` ve Responses API `input_image`. Claude Code `tool_result.content` ve Responses araç çıktıları içine yerleştirilmiş eşleşen görseller de çıkarılır ve orijinal yollarında değiştirilir; yalnızca gösterge niteliğindeki şekiller kombo filtre malzemesidir ve çıkarılmaz.
   Hiçbiri bulunamazsa atla.
3. Çalışma zamanı yapılandırmasını `resolveVisionBridgeRuntimeSettings()` (`src/shared/constants/modalityBridgeDefaults.ts`) aracılığıyla çözümle: yeni `modalityBridge*` ayar anahtarları geçerlidir; eski `visionBridge*` anahtarları ise **bir döngülük geri dönüş** (geri alma penceresi) olarak kalır. Köprü devre dışı bırakıldığında herhangi bir medya taramasından önce atla.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdaki tabloya bakın) yeniden yönlendirme ile açıklama arasında karar verir. Yeniden yönlendirme, yalnızca `model` alanı değiştirilmiş `modifiedPayload` ve buna ek olarak `{ rerouted, fromModel, toModel, imagesKept }` meta verisini döndürür.
5. Açıklama yolu: görselleri `maxImages` ile sınırla, görev odaklı istemi oluştur, açıklama önbelleğine danış, görsel modelini **paralel olarak** (`Promise.allSettled`) çağır ve yerlerine `[Image N]: <description>` metin parçaları ekle. Başarısız bir açıklama `null` döndürür: ham görsel, bilinmeyen/görsel destekli hedefler için korunur (#4012), ancak **doğrulanmış yalnızca metin destekleyen doğrudan hedef** veya sıfır görsel içeren kombo, kısmî hatalar ve açıklama çağrısı sınırının ötesindeki görseller de dahil olmak üzere açıklanmayan her görsel için açık bir `(unavailable — no vision-capable provider connected)` metin taslağı alır (#17069). Mevcut tümü başarısız olan kombo açıklama geri dönüşü yerinde kalır (#8430).
6. `modifiedPayload` + meta verileri (`imagesProcessed`, `descriptions`, `processingTimeMs`, `visionModel`) döndür.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Varsayılan | Davranış                                                                                                                                                                                                                                                                                                     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔          | Eski sezgisel yöntem, değiştirilmedi (#6640/#7204): kombine olmayan / `auto/` modeller, orijinal modelin zaten kullanılabilir kimlik bilgilerine sahip olması durumu (bu durumda betimle) hariç, en iyi görsel modeline yeniden yönlendirilir; kombine hedefler her zaman betimler.                          |
| `describe` |            | Her zaman betimle — yeniden yönlendirme bloğu tamamen atlanır; kullanıcının seçtiği model her zaman yanıt verir.                                                                                                                                                                                             |
| `reroute`  |            | Yeniden yönlendirmeye zorla: kimlik bilgisine sahip model koruması atlanır. Yeniden yönlendirme **hedefi** kimlik bilgisi koruması geçerliliğini korur — kullanılabilir görsel hedefi bulunmadığında köprü, ham görüntüleri salt metin hedefine göndermek veya betimlemek yerine açık bir hata ile engeller. |

Zorunlu modlar, otomatik sezgisel yöntem çalıştırılmadan **önce** kısa devre yapar; `auto` davranışı, PR-1 öncesi güvenlik kuralıyla bayt düzeyinde aynıdır.

#### API anahtarı kapsamı (`visionBridgeKeyScope.ts`)

Çağıranın API anahtarı `allowedConnections`, kota havuzlarını (`allowedQuotas`) veya modelleri (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`) kısıtladığında, köprü yalnızca anahtarın kullanabileceği bağlantılar üzerinden, anahtarın kullanabileceği yeniden yönlendirme ve betimleme modellerini seçer. Betimleme çağrısı daha sonra her zaman `x-omniroute-self-loop-key-id` başlığı ile OmniRoute kendi kendine döngüsü (self-loop) üzerinden gerçekleştirilir, böylece alan sohbet isteği o anahtarın bağlantı ve model politikasını yeniden uygular. `enforceApiKeyPolicy()`, bu başlığı yalnızca kendi kendine döngü taşıyıcısı ile birlikte dikkate alır; böylece yalnızca erişimi daraltabilir ve çözümlenemeyen bir kimlik reddedilir.

Anahtar için hiçbir görsel modeline izin verilmiyorsa, **onaylanmış salt metin hedefi**, görüntü baytlarını yetersiz bir üst akışa iletmek yerine net bir HTTP 400 ile görüntü isteğini yerel olarak reddeder (#17069). Bilinmeyen veya yerel görsel yeteneğine sahip hedefler için betimleme yolu, önceki hatada açık kalma (fail-open) davranışını korur (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Anahtarı olmayan istekler ve bu kısıtlamalara sahip olmayan anahtarlar tam olarak eskisi gibi davranır.

#### Görev farkında betimleme istemi (`modalityBridgeVisionTaskAware`)

Varsayılan **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`), **son kullanıcı mesajının** metnini (500 karaktere kısaltılmış olarak) temel betimleme istemine ekler; betimlemeyi kullanıcının gerçekten ne sorduğuna yönlendirir (codex-vision-proxy deseni) ve görsel modelinden görünür metni dönüştürmesini (transkribe etmesini) ister. Bayrak kapalı olduğunda — veya kullanıcı metni olmadığında — temel istem değiştirilmeden kullanılır.

Betimleme kendi kendine döngüsünün kendi OpenAI uyumlu isteği (`visionBridgeHelpers.ts` içindeki `callVisionModelSingle()`), herhangi bir istemci sinyaline bağlı olmaksızın, her çağıran/sağlayıcı için koulsuz olarak `image_url.detail: "high"` ister. Düşük detaylı örnekleme, bu istemin tam olarak istediği metin dönüştürme görevi için OCR doğruluğunu düşürür; bu nedenle betimleme çağrısının kendisi, orijinal gelen isteğin hangi detay düzeyini kullandığından bağımsız olarak her zaman yüksek detay ister. Bu durum yalnızca dahili betimleme isteği gövdesini etkiler; OmniRoute'un çağıranın kendi `image_url.detail` değerini birincil istekte nasıl ilettiğini değiştirmez — bu varsayılan değer ayrı olarak ve yalnızca algılanan OpenCode istemcileri için `defaultImageDetail()` içinde (`open-sse/handlers/chatCore/upstreamBody.ts`) uygulanır. Betimleme kendi kendine döngüsünün Anthropic tel formatı dalı hiçbir `detail` alanına sahip değildir ve her iki varsayılandan da etkilenmez.

#### Betimleme çıkış üst sınırı (`modalityBridgeVisionMaxChars`)

| Anahtar                        | Varsayılan | Aralık             |
| ------------------------------ | ---------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`        | `0` veya 100–50000 |

`0` (varsayılan) **üst sınır yok** anlamına gelir — `callVisionModel()` tarafından döndürülen betimleme, mevcut davranışı koruyarak değiştirilmeden aktarılır. 100–50000 aralığındaki herhangi bir değer, `[Image N]: <description>` (`src/lib/guardrails/visionBridge.ts` içindeki `VisionBridgeGuardrail.preCall()`) olarak geri birleştirilmeden önce betimlemeyi `…` son ekiyle kısaltır. Aşağı akış modelinin tam transkripsiyona ihtiyaç duyduğu detay odaklı OCR görevleri için bunu yükseltin; çok konuşkan görsel modellerinde token kullanımını sınırlamak için bunu düşürün. Kontrol paneli alanı, Görsel sekmesinin Gelişmiş panelinde yer alır (`ModalityBridgeVisionTab.tsx` içindeki `modality-bridge-max-chars`) ve 1 ile 99 arasındaki herhangi bir değeri 100 tabanına (floor) sıkıştırırken açık bir `0` değerini değiştirilmeden bırakır — `0`, yalnızca "ayarlanmamış" varsayılan değil, başlı başına geçerli bir Zod değeridir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Betimleme önbelleği (`modalityBridge/bridgeCache.ts`)

Süreç genelinde paylaşılan, betimleme çıktısı için bellek içi LRU + TTL önbelleği.
Anahtar = uzunluk ön ekli çerçeveleme ile (alan sınırı çakışması olmadan) `sha256(imageRef + composedPrompt + configuredBridgeModel)`. Model bileşeni, gerçekten yanıt veren model değil, **yapılandırılmış** köprü modelidir — `callVisionModel` dahili olarak geri düşebilir (fallback) ve deneme başına anahtarlama önbelleği parçalayacaktır. Başarısız betimlemeler asla önbelleğe alınmaz. Ayarlar:

| Anahtar                         | Varsayılan | Aralık  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Uzak görsel normalizasyonu (self-loop describe/base64 fetch)

Köprü **uzak** bir görseli kendisi getirdiğinde — Anthropic describe öz çağrısı ve claude-wire-format base64 dönüşümü (`ensureBase64ImagesForClaudeWire`), her ikisi de `visionBridgeHelpers.ts` içindeki `fetchRemoteImageAsDataUri()` aracılığıyla — elde edilen veri URI'si, görsel-modeli isteğine gömülmeden önce `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) üzerinden geçirilir. Boyutu büyük görseller, OpenAI/Anthropic'in sunucu tarafında halihazırda uyguladığı yeniden boyutlandırma üst sınırı ile eşleşecek şekilde **2048px uzun kenar** boyutuna küçültülür; bu da görsel modelin gördüğü içeriği değiştirmeden yükleme baytlarını/gecikmesini azaltır. Yeniden boyutlandırma, dinamik içe aktarma yoluyla yüklenen `sharp` kullanır: yerel ikili dosyasının yüklenemediği bir platformda, `normalizeDataUri()` **asla hata fırlatmaz** — orijinal baytların doğrudan aktarılmasına (passthrough) geri döner, böylece describe/base64-conversion yolu her zaman çalışmaya devam eder. Görsel olmayan baytlar (kodlanabilir bir görsel döndürmeyen bir getirme işlemi) de dokunulmadan doğrudan aktarılır. Bu normalizasyon, köprünün kendi öz çağrısı için getirdiği görsellerle sınırlıdır; katılım zorunluluğu mutasyon ilkesiyle (Sert Kural #20) tutarlı olarak, çağrılan tarafın ham passthrough yüküne asla uygulanmaz.

#### Ayarlar şeması + migration

Yeni `modalityBridge*` anahtarları `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) içinde Zod ile doğrulanır: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüsü ve Audio Bridge tarafından kullanılan `modalityBridgeAudio*` grubu. `141_modality_bridge_settings.sql` migrasyonu, mevcut eski `visionBridge*` değerlerini eşleşen yeni anahtarlara kopyalar (idempotenttir, operatör tarafından ayarlanmış bir `modalityBridge*` değerinin üzerine asla yazmaz); eski anahtarlar bir sürüm döngüsü boyunca okuma yedeği olarak kabul edilmeye devam eder.

#### Şeffaflık başlığı + istatistikler

Describe ile dönüştürülmüş yanıtlar `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` başlığını taşır (`modalityBridge/bridgeStats.ts` içindeki `buildModalityBridgeHeader()` tarafından oluşturulur, `src/sse/handlers/chatHelpers.ts` içindeki `withModalityBridgeHeader()` tarafından damgalanır). Yeniden yönlendirilen isteklere **hiçbir** başlık eklenmez — yük değiştirilmemiştir ve model değişimi yanıt gövdesinin `model` alanında zaten görülmektedir.

`GET /api/modality-bridge/stats` (`GET /api/settings` ile aynı düzeyde yönetim kimlik doğrulaması), `vision`, `audio` ve `video` için bellek içi modalite başı sayaçları olan `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` değerlerini döndürür. `averageLatencyMs`, payda olarak tüm denemeleri değil `latencySamples` değerini kullanır; zamanlaması olmayan bir işlem sıfır milisaniyelik bir örnek uydurmaz. `bridged`, başarılı dönüşümler için geriye dönük uyumlu takma ad olmaya devam eder; başarısız denemeler bunu artırmaz. Sayaçlar tasarım gereği süreç yeniden başlatıldığında sıfırlanır (muhasebe değil, telemetri amaçlıdır).

#### Dashboard yapılandırması

Özel dashboard sayfası `/dashboard/settings/modality-bridge` adresindedir. URL ile erişilebilen `Vision`, `Audio` ve `Video` sekmeleri, `tab` değerini değiştirirken sorgu parametrelerini korur. Vision sekmesi; etkinleştirmeyi, modu, model seçimini (otomatik varsayılan dahil), görev farkındalıklı istem oluşturmayı, gelişmiş zaman aşımı/görsel/açıklama-uzunluğu/önbellek limitlerini, çalışma zamanı sayaçlarını ve korumalı bir örnek isteği sunar. Audio sekmesi de yayındadır: etkinleştirmeyi, Auto içeren yalnızca STT'ye yönelik bir model seçiciyi, zaman aşımı/maksimum klip limitlerini, ses sayaçlarını ve bir `input_audio` örnek testini sunar. Video sekmesi işlevseldir: FFmpeg/ffprobe çalışma zamanı durumunu bildirir — dört açık arayüz durumundan biri (`unknown` yoklama devam ederken veya tamamlanamadığında, `restricted` yoklamanın istemci tarafında atlandığı loopback olmayan bir dashboard sunucusunda, `unavailable` yoklandığında ve eksik olduğu doğrulandığında veya `available` FFmpeg/ffprobe sürümleriyle birlikte) — etkinleştirme/model/kare/video/zaman aşımı limitlerini kalıcı hale getirir, model seçiciyi görsel yetenekli modellere filtreler ve video sayaçlarını sunar.

Yapay zeka ayarları altındaki eski Vision Bridge kartı, yeni sayfaya yönelik bir uyumluluk bağlantısıdır; artık formun ikinci bir kopyasına sahip değildir. Media Providers ayrıca, mevcut Speech-to-Text çalışma alanını kaldırmadan, Image-to-Text ve Speech-to-Text iş akışlarını ilgili Modality Bridge sekmelerine bağlar.

**Self-loop kabul baypası:** Describe çağrısı OmniRoute'un kendi `/v1` self-loop'u (standart dışı sağlayıcı modeli) üzerinden yönlendirildiğinde, alt istek `x-omniroute-admission-bypass: internal` gönderir ve çözümlenen self-loop kimlik bilgisiyle kimlik doğrulaması yapılır — yerel moddaki yerel `sk_omniroute` koruyucusu veya operatör tarafından yapılandırılan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env anahtarı (#1350) sayesinde `REQUIRE_API_KEY=true` olan dağıtımlar yine de describe çağrısını çalıştırabilir. Baypas yalnızca bu kesin kimlik bilgileri için geçerli kabul edilir, bu nedenle dış istemciler kabulü atlamak için bu başlığı kullanamaz.

Eski varsayılanlar `src/shared/constants/visionBridgeDefaults.ts` içinde yer alır; yeni mod/görev-farkındalıklı/önbellek varsayılanları ve ayar çözücü `src/shared/constants/modalityBridgeDefaults.ts` içinde bulunur. Koruma mekanizması, testlerin sahte `getSettings` ve `callVisionModel` uygulamaları enjekte edebilmesi için bir `deps` kurucu seçeneği sunar.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ses içeren sohbet isteklerini, ses girişini kabul ettiği bilinmeyen bir hedefe ulaşmadan önce yakalar. Sohbet isteğini asla yeniden yönlendirmez: ses parçaları mevcut OpenAI uyumlu çok parçalı uç nokta aracılığıyla dönüştürülür ve seçilen sohbet modeli metin transkriptleriyle devam eder.

Akış:

1. `supportsAudio` değerini `getResolvedModelCapabilities()` aracılığıyla çözümler. Açık sağlayıcı-kayıt defteri meta verileri önceliklidir, ardından statik model meta verileri ve son olarak eşitlenen `modalities_input` gelir. `audio` içermeyen beyan edilmiş bir girdi listesi `false` değerini alır; hiçbir yetenek kanıtı kalmazsa `null` kalır. Hem `false` hem de `null` muhafazakâr köprüyü etkinleştirirken, `true` bunu atlar.
2. `modalityBridgeAudio*` ayarlarını çözümler ve paylaşılan `detectMediaParts()` dedektörü aracılığıyla her mesajdan birleştirilebilir üst düzey ses parçalarını çıkarır. Desteklenen tel şekilleri (wire shapes) OpenAI `input_audio`, `audio_url` ve `source.media_type: "audio/*"` şeklindedir. İç içe geçmiş ses yönlendirme için algılanır ancak birleştirme yoluyla kaldırılmaz. Çalışma `modalityBridgeAudioMaxClips` ile sınırlandırılmıştır; sonraki parçalar dokunulmadan kalır.
3. Yapılandırılmış bir `provider/model` değerine uyun veya `selectAudioBridgeModel()` fonksiyonunun `AUDIO_TRANSCRIPTION_PROVIDERS` dizisini kararlı katalog düzeninde taramasına ve kullanılabilir aktif sağlayıcı kimlik bilgisine sahip ilk modeli seçmesine izin verin.
4. `callAudioTranscription()`, base64/veri-URI sesini çok parçalı bir `file` dosyasına dönüştürür veya DNS sabitlemeye ve 25 MB sınıra sahip yalnızca umumi (public-only) dışarı giden koruması aracılığıyla uzak bir `audio_url` indirir. Ardından dosyayı ve seçilen modeli, `resolveSelfLoopBearer()` ile kimliği doğrulanmış yerel `/v1/audio/transcriptions` kendi kendine döngüsüne (self-loop) POST eder. Mevcut transkripsiyon rotası normal kimlik bilgisi arama, soğuma/oran sınırı yönetimi ve sağlayıcı dağıtımı gerçekleştirir.
5. Başarılı çağrılar kendi parçalarını `[Audio N]: <transcript>` ile değiştirir. Çağrılar `Promise.allSettled` ile çalışır: münferit bir hata, orijinal ses parçasını korur (#4012 sözleşmesi). Tüm çağrılar başarısız olur ve hedefin `supportsAudio === false` olduğu kanıtlanırsa, parçalar `[Audio N]: (unavailable — no STT provider connected)` haline gelir (#8430 sözleşmesi). Bilinmeyen bir hedef (`null`) için tümü başarısız sonuç dokunulmadan kalır. Kullanılabilir STT kimlik bilgisi olmayan, kanıtlanmış yalnızca metin içeren bir hedef, bir ağ çağrısı yapmadan aynı açık taslağı (stub) alır.

Başarılı transkriptler işlem genelindeki Modality Bridge LRU/TTL önbelleğini kullanır. Anahtar; ses referansını, kararlı `audio-transcription` işlem etiketini ve seçilen STT modelini birleştirir; hatalar asla önbelleğe alınmaz. Ses denemeleri paylaşılan `bridged`, `cacheHits`, `failures` ve `lastUsedAt` sayaçlarını günceller. Dönüştürülen yanıtlar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` başlığını taşır; dokunulmayan istekler bir Audio Bridge segmenti almaz.

Çalışma zamanı ayarları DB desteklidir ve Zod ile doğrulanır:

| Anahtar                       | Varsayılan | Aralık         |
| ----------------------------- | ---------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —              |
| `modalityBridgeAudioModel`    | `""`       | Auto or STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10           |

Paylaşılan önbellek, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` tarafından kontrol edilmeye devam eder.

### Video Köprüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Bilinen yerel video desteği olmayan bir hedef çağrılmadan önce Chat Completions `messages` ve Responses API `input` içerisindeki üst düzey video parçalarını keser. Desteklenen şekiller `input_video`, `video_url`, `video_source`, HTTPS URL'leri ve `data:video/*;base64,...` veri URI'leridir. Metin içerisindeki düz dosya adları video olarak kabul edilmez.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`), istek geçişini, yetenek/ilke kontrolünü, istek başına toplamayı ve yanıt yükünü yönetir. Video başına yapılan çalışma — edinme, tüm sonuç önbelleği, bir kare dizisini tanımlama (çağıran tarafından bildirilen herhangi bir ses transkriptini birleştiren) ve deneme başına metrikler/iptal/temizlik — `preCall` döngüsünün içinde video parçası başına bir kez çağrılan `videoBridgePipeline.ts` içindeki `processVideoPart` fonksiyonunun arkasında gizlidir. Bu modül ayrıca açık bağlantı noktası sınırlarını tanımlar: `VideoMediaBrokerPort` (bayt edinme ve örneklenen kareleri çıkarma), `VideoAudioTranscriptionPort` (çağıran tarafından bildirilen bir ses transkriptini örneklenen altyazılarla birleştirme) ve `VideoDrilldownPort` (kare detaylandırma kalıcılık sınırı; henüz `processVideoPart` içine bağlanmamıştır — bugün yalnızca ayrı `/api/modality-bridge/video/drilldown` rotası detaylandırma girdileri yazar).

Genel `/v1` istek yolu asla bir alt işlem içe aktarmaz veya çağırmaz. Uzak videolar 50 MiB sınırının altında indirilir; satır içi base64 videolar, model/mesajlar/çerçeveleme zarfının 50 MiB'lık genel JSON istek kabul sınırının içinde kalabilmesi için video başına muhafazakâr bir 36 MiB çözülmüş sınıra sahiptir. Satır içi uzunluk ve çözülmüş boyut tahminleri tahsis edilmeden önce kontrol edilir. DNS sabitleme özelliğine sahip mevcut yalnızca umumi dışarı giden koruması kullanılarak, ilk uzak URL'de ve her yönlendirmede HTTPS gereklidir. Baytlar daha sonra tam iç `POST /api/modality-bridge/video/extract` broker sınırını geçer. Bu rota hem `LOCAL_ONLY` hem de `SPAWN_CAPABLE` özelliklerindedir, yalnızca süreç başına kimliği doğrulanmış, güvenilir bir geri döngü isteği kabul eder ve asla bir URL, dosya sistemi yolu, yürütülebilir dosya veya argüman listesi kabul etmez. API gövde boyutu hattı ve işleyicinin artımlı gövde okuyucusu, bağımsız olarak 50 MiB'lık bir broker girdi sınırını uygular. Sınırlı kuyruğu her seferinde bir çıkarma çalıştırır, dört bekleyen işe izin verir ve bekleyen girdiyi 100 MiB ile sınırlandırır.

Broker içinde, `ffprobe` özel bir yerel dosya okur; sabit biçim izin listesi çalma listesi ve manifest biçimlerini hariç tutar. İzin verilen MOV ailesi kapsayıcıları için harici MOV veri referansları varsayılan olarak devre dışı kalır ve sabit komut bunlara katılmaz. Hem `ffprobe` hem de `ffmpeg`, yalnızca `file` protokolü beyaz listesini, tek bir iş parçacığını, sabit argüman dizilerini, kabuk kullanmamayı ve `PATH` içinden çözümlenen yürütülebilir dosyaları kullanır. Ekli resim kapak akışları oynatılabilir adaylar değildir. Oynatılabilir tüm akışlar sınırları karşılamalıdır ve belirleyici en düşük indeksli yedek seçeneğinden önce açık bir varsayılan akış tercih edilir. Videolar 600 saniye, boyut başına 8.192 piksel ve 33.554.432 kaynak piksel ile sınırlıdır. FFmpeg, 1–16 orta nokta JPEG karesini örnekler, uzun kenarı daha küçük girdileri ölçek büyütmeden en fazla 1.024 piksele küçültür ve asla bir URL almaz. Örnekleme varsayılan olarak `uniform` şeklindedir. İsteğe bağlı `scene_aware` ve deneysel `segment_aware` politikaları, halihazırda doğrulanmış yerel akış üzerinde ek bir sabit FFmpeg geçişi gerçekleştirir, sınırlı `showinfo` sahneleri zaman damgalarını seçer ve dedektör arızası, zaman aşımı, bozuk çıktı veya boş bir aday kümesi durumunda belirleyici bir şekilde aynı düzgün orta noktalara geri döner. Segment odaklı mod, orta nokta örneklerini doğrulanmış sahne aralıklarıyla orantılı olarak tahsis eder; segment odaklı kanıtlar ve geri dönüş davranışı aşağıda detaylandırılmıştır. Kesin 16 kare sınırı, her politikada seçimden sonra uygulanır. Sahne odaklı bir talebin yalnızca tek karelik bütçesi olduğunda, etkin tam video veya odak penceresinin düzgün orta noktasını kullanır ve `policyEffective: uniform` rapor eder: tek bir seçilen sahne kare her iki zamansal ucu da koruyamaz. Bir çağırıcı isteğe bağlı olarak sonlu bir odak penceresi (`start`/`end` saniye) sağlayabilir; sınırlar medya süresine sabitlenir, tersine çevrilmiş veya sonlu olmayan pencereler reddedilir ve tüm örnekleme politikaları yalnızca normalleştirilmiş aralık içinde gerçekleştirilir. Elde edilen pencere, aşağı akış modellerin odaklanılmış bir alıntıyı tam zaman çizelgesinden ayırt edebilmesi için örnekleme meta verilerine ve güvenilmeyen açıklama önekine dahil edilir.

Semantic caption focus is a separate, explicit setting. The default `full`
analysis mode preserves the existing frame prompt and never forwards request
text to the caption model. In `focused` mode, the bridge reads only the latest
non-empty user-authored `text`/`input_text` from the same Chat or Responses
container, normalizes it to NFC, collapses control characters and whitespace,
and limits it to 500 Unicode code points. An empty result falls back to the
exact `full` prompt. A usable hint is serialized as JSON in a dedicated
untrusted-user-context block and may only prioritize observable details; it
cannot override the separate warning against following instructions visible
or audible in the media. Textual focus never infers `start`/`end` or changes
the temporal sampler.

#### FU-07 yapısal segment kanıtı

`segment_aware`, halihazırda doğrulanmış yerel video akışı üzerinde sınırlı bir ön analiz geçişi kullanır. Sabit filtre zinciri önce en fazla 320 piksel genişliğe ölçeklendirir, sahne değişikliklerini ve donmuş aralıkları algılar, ardından bulanıklık, ortalama lüminans ve uzaysal/zamansal bilgi için saniyede 1 kare hızında örnekleme yapar. Geçiş; 600 yapısal örnek, bir FFmpeg/filtre iş parçacığı, aynı yalnızca `file` protokolü ve kapsayıcı izin listeleri, 1 MiB işlem çıktısı sınırı ve broker'ın paylaşılan iptal/son tarih süresi içinde en fazla 30 saniye ile sınırlıdır. Talepten asla bir komut, filtre, yol veya URL kabul etmez.

Yapısal değerler, anlamsal video anlama değil, belirleyici örnekleme kanıtıdır. Konuları, eylemleri, altyazıları, konuşmaları veya kullanıcı niyetini çıkarmazlar. Sahne ve donma sınırları segmentleri oluşturur; donma kapsamı, bulanıklık, pozlama, uzaysal detay ve zamansal değişim yalnızca mevcut 1–16 kare bütçesinin nasıl tahsis edildiğini etkiler. Tamamen donmuş bir segment bir kare ile sınırlıyken, donmamış segmentler kalan bütçe için rekabet eder. Sınırlar kare sayısından fazla olduğunda, hızlı erken kesmelerin uzun bir takip eden segmenti gizleyememesi için düzgün zaman çizelgesi kapsamı korunur. Bir donma sınırının 1 saniyelik analiz çözünürlüğü içindeki sahne sınırları birleştirilir.

Eksik filtreler, bozuk/boş kanıt, dedektör hatası veya sınırlı ön analiz zaman aşımı, tam olarak düzgün orta nokta politikasına açık duruma geçer (`fail open`). Bir çağırıcı iptali veya broker son tarihi açık duruma geçmez: devam eden alt süreci sonlandırır, sonraki kare çıkarımını engeller ve özel geçici ağaç `finally` içinde kaldırılır.

`scripts/perf/video-bridge-fu07-eval.ts`, yinelenenleri kaldırma sonrası altyazı çağrısı tasarrufları, yoğun hareket bütçe tahsisi, bulanıklık/pozlama/SI-TI kanıtları, uzun kuyruklu hızlı kesmeler ve kademeli kararma yanlış pozitifleri için belirleyici gerçek FFmpeg fikstürleri üretir. Ön analiz duvar saati süresini ve `/usr/bin/time`'ın mevcut olduğu durumlarda alt işlem CPU ve tepe RSS değerini kaydeder. Kalite kontrolleri yalnızca yapısal kehanetlerdir. Bu donanım yetkili bir uç noktaya veya dondurulmuş bir hakeme sahip olmadığı için gerçek altyazı modeli kalitesi `HOLD` olarak kalır. `--caption-cost-per-call-usd` açık pozitif bir çağrı başına maliyet tahmini sağlamadığı sürece parasal tasarruflar da `HOLD` kalır; komut dosyası hiçbir zaman her iki sonucu da uydurmaz.

Her kare 4 MiB, tüm ham kareler birlikte 23 MiB ve serileştirilmiş aracı yanıtı 32 MiB ile sınırlıdır. Özel bir geçici dizin `finally` içinde kaldırılır. OmniRoute, FFmpeg'i birlikte paketlemez ve özel bir çalıştırılabilir dosya yolu kabul etmez. Altyazılandırmadan önce, köprü muhafazakar bir görsel tekilleştirme geçişi uygular: her JPEG 16×16 gri tonlamalı arabelleğe indirgenir ve yalnızca tutulan son kareyle karşılaştırılır. Bir kareden fazla talep edilen altyazı bütçesi için çıkarma işlemi, bu bütçenin en fazla iki katı ve 16 kareden fazla olmayan sınırlı bir aday havuzu sağlar. Talep edilen üst sınır yalnızca tekilleştirmeden sonra uygulanır; bütçe en az iki olduğunda, seçilen ilk ve son adaylar nihai seyreltme sırasında korunur. Sürümlendirilmiş `grayscale-16x16-mean-cells-v2` politikası, ortalama luma deltası ile normalleştirilmiş deltası en az 0.05 olan küçük resim hücrelerinin oranından büyük olanını kullanır. Yinelenen eşiği, bir çalışma zamanı ayarı olarak sunulmaktan ziyade öngörülebilirlik için seçilen 0.04 sabitidir. Bu ikincil yüksek kontrastlı sinyal, yalnızca ortalama karşılaştırmasının gizleyebileceği küçük hareketleri ve görünür metin değişikliklerini korur. Karşılaştırıcı veya kod çözücü hataları açık başarısız olur ve kapsamı korur. Çıktı meta verileri, çıkarılan adayları, başarıyla kullanılan kareleri ve atılan görsel kopyaları birbirinden ayırır.

Açıkça işaretlenmiş bir video bölümü, zaman damgalı bir iletişim sayfası isteyebilir. Köprü, en fazla 4 sütunlu, 16 karelik bir JPEG ızgarası oluşturur. Her 512 piksel hücresi, kaynak zaman damgasını yüksek kontrastlı bir alt banda işlerken, aynı zaman damgaları aşağı akış ilişkilendirmesi ve denetimi için metinsel meta verilerde kalır. Eksiksiz JPEG 32 MiB ile sınırlı kalır. Eğer `sharp` ızgaranın kodunu çözemez veya onu oluşturamazsa, köprü bireysel JPEG karelerine geri döner; bir istemci iptal sinyali yine de sayfa işlemi boyunca yayılır.

Yükseltme kanıtı, sentetik kompozisyon mikro kıyaslamasından bilerek ayrı tutulmuştur. `scripts/perf/video-bridge-contact-sheet-eval.ts`, gerçek OpenAI uyumlu görme modelleri için şema sürümlendirilmiş bir A/B test ortamı tanımlar. Sağlayıcı tarafından bildirilen token'ları, uçtan uca duvar gecikmesini (sayfa kompozisyonu dahil), model çağrısı sayısını ve bildirimde tanımlanan gerçek tutma oranını ölçer. Ham model yanıtları rapora yazılmaz; yalnızca SHA-256 özetleri ve eşleşen gerçek kimlikleri saklanır. Bu test ortamı, `--execute-real` geçilmediği ve `--model`, `OMNIROUTE_BASE_URL` ile `OMNIROUTE_API_KEY` yapılandırılmadığı sürece hiçbir ağ veya ücretli model çağrısı yapmaz. Bu açık gerçek çalıştırma olmadan, makine tarafından okunabilir kararı `HOLD` olarak kalır; yalnızca sentetik yük/çağrı sayısı ölçümleri yükseltme kanıtı değildir.

Çağıranlar, ellerinde halihazırda hizalanmış metin bulunduğunda desteklenen bir video kısmına isteğe bağlı bir `transcript.cues` dizisi ekleyebilir. Her işaret `text`, taranan süre içinde sonlu bir `start`/`end` aralığı ve beyaz listede yer alan bir `source` (`client`, `embedded` veya `audio-bridge`) içermelidir; `confidence` varsayılan olarak `1` değerini alır ve `0` ile `1` arasında kalmalıdır. Tam yinelenen işaretler birleştirilir. OmniRoute asla bu meta verilerden transkripsiyon başlatmaz: doğrulanmış işaretler kaynak, güven ve aralık ile birlikte açıklanan sonuca kopyalanır ve kare altyazılarının yanında güvenilmeyen gözlemler olarak sunulur. Geçersiz, aralık dışı veya kökeni olmayan metinler altyazı akışına karıştırılmak yerine reddedilir. Her iki istek gövdesi transkripsiyon kanalı da sağlanan kökeni, kendi kendini iddia eden `embedded` veya `audio-bridge` etiketleri dahil olmak üzere `client` olarak normalleştirir. Bu güvenilen etiketleri yalnızca sunucuya ait bir adaptör, yalnızca koda özel `trustedSource` argümanı aracılığıyla atayabilir; bir istek JSON alanı bu argümana ulaşamaz. Transkripsiyon metni, kökeni ne olursa olsun güvenilmeyen medya kaynaklı içerik olmaya devam eder ve asla yetkilendirmeyi belirlememelidir.

Gelişmiş bir çağırıcı aynı video için bir `audioTranscript` izi sağlayabilir; bu, sunucu transkripsiyonunun kanıtı olarak değil, istemci tarafından sağlanan metin olarak ele alınır. Birleştirme dikişi görsel ve ses gözlemlerini tek bir son tarih ve iptal sinyali altında çalıştırır, bunları ortak bir zaman çizelgesinde sıralar, tam kopyaları birleştirir ve yalnızca bir taraf başarılı olduğunda kısmi bir sonuç bildirir. Geçersiz bir `audioTranscript`, tüm videoyu başarısız kılmak yerine bu kısmi sonuca indirgenir — görsel açıklama tutulur ve ses dalı temizlenmiş bir hata kodu kaydeder. Dal bazında kullanılabilirlik, kısmi bayrağı ve temizlenmiş hata kodları; açıklanan sonuçta, koruma meta verilerinde (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), sonuç önbelleği meta verilerinde ve köprü birleştirme sayaçlarında korunur. Varsayılan Video Köprüsü yolu, konuşmadan metne dönüştürmeyi çağırmaz veya ikinci bir medya kopyası indirmez; bu açık iz olmadan yalnızca video olarak kalır.

**Transkript saklama (#12150 P1).** Bu, Video Köprüsü (kendi başına isteğe bağlıdır) herhangi bir transkript ipucu oluşturduğunda otomatik olarak geçerlidir — ayrı bir saklama bayrağı yoktur. Bir istek herhangi bir transkript ipucu oluşturduğunda (çağıran tarafından bildirilen bir `` `transcript` `` veya birleştirilmiş bir `` `audioTranscript` ``), koruma katmanı bunu `` `videoBridgeObserved` `` olarak işaretler ve video açıklamasının sansürlenmiş bir gölgesini oluşturur — her ipucunun serbest metin gövdesinin `` `[redacted-video-transcript]` `` ile değiştirildiği, dizge birleştirilmeden önce yapılandırılmış ipucu alanının değiştirilmesiyle oluşturulan aynı görünüm (asla düzleştirilmiş metin ayrıştırılarak yapılmaz, böylece `` `[inaudible]` ``/`` `[music]` `` gibi `` `]` `` içeren gövdeler dahil olmak üzere hiçbir ipucu içeriği — kötü niyetli veya sıradan — hayatta kalamaz). Kalıcı hale getirilen çağrı günlüğü istek gövdesi, içerik eşitliğiyle eşleştirilerek her video kaynaklı metin parçasını bu sansürlenmiş gölgeyle değiştirir; `fullText` çapası, tamamlanmış çağrı öncesi koruma katmanı yükünden yeniden okunur, böylece daha sonraki zincir koruma katmanları (PII ve kimlik bilgisi maskeleyicileri, öncelikler 10/95) açıklama metnini yerinde yeniden yazdıktan ve sistem istemi/devir/bellek eklemesi mesaj dizisini yeniden şekillendirdikten sonra bile eşleşme başarılı olur. Modele yukarı akışta gönderilen gövde değiştirilmez. Gözlemlenen bir istek ayrıca kalıcı Bellek doldurmaz (hem istek hem de yanıt kaynaklı çıkarım atlanır), bu nedenle modelin kendi yanıtı transkript metnini Bellek'e yansıtamaz.

**Ham video alanları (#12430).** Köprü etkinleştirildiğinde ve yerel video desteği bilinmediğinde veya yokluğunda, tanımlanan `` `transcript` ``/`` `audioTranscript` `` alanları, açıklama hatasından veya bir `` `maxVideos` `` sınırından sonra bile `` `videoBridgeObserved` ``'ü etkinleştirir. `` `null` `` ve boş dizgeler sayılır; eksik alanlar ve video dışı meta veriler sayılmaz. Saklanan kopyalar bu alanları sansürler veya isteği atlar ve önbellekler/Bellek baypas edilir.

Bu geri dönüş yollarında, geçerli çağıran ipuçları standart dışı sağlayıcı alanları yerine desteklenen `` `text` ``/`` `input_text` `` parçaları haline gelir. İstek tarafından sağlanan her iki iz de güvenilmeyen `` `client` `` gözlemleri olarak kalır ve videonun açıklanmadığına ve zaman damgalarının medya karşısında doğrulanmadığına dair açık bir uyarı içerir. Mevcut 256 ipucu / 64 KiB toplam ve ipucu başına bütçeler iki iz için birlikte geçerlidir; zaman damgaları, broker'ın 600 saniyelik üst sınırına ve sağlanan herhangi bir odak penceresine uymelidir. Geçersiz izler atılır, rastgele metin olarak iletilmez; birleştirilmiş bütçeleri aşılmadığı sürece geçerli bir kardeş iz kullanılmaya devam edebilir. Boş/null alanlar metin eklemez. Bu geri dönüş tarafından hiçbir medya getirme veya transkripsiyon eklenmez. Transkripsiyon uzantı alanları, geri dönüş video taşıyıcısından ve onun `` `video_url` ``/`` `source` `` nesnelerinden kaldırılır. OpenAI tel izin listesi katı kalır; bilinmeyen yerel video taşıyıcıları kullanılabilir durumda kalır ve bilinen yalnızca metin hedefleri güvenli işaretçileri korur. Yapılandırılmış sansür gölgeleri eklenen transkript metnini korurken, orijinal çağırana ait istek değişmeden kalır. Yerel destekli hedefler ve devre dışı bırakılmış köprüler mevcut baypas davranışını korur.

Ek saklanan kopyalar aynı gözlemlenen istek sinyalini kullanır. Ham koruma katmanı öncesi istemci-istek anlık görüntüsü, bellek içi beklemedeki istek ve erken reddedilen istek günlüğü, video parçalarındaki transkript alanlarını yapısal olarak değiştirir; boru hattı aşamaları ve bağlam devri tarafından sentezlenen dize istemleri, kalıcı istek gövdesi havuzunda sansürlenir. Kalıcı hale getirilen `` `video_content_removed` `` işaretçisi, kasıtlı olarak atlanan metni yeniden oluşturmak yerine `` `previous_response_id` `` devamının güvenli bir şekilde başarısız olmasına neden olur. Gözlemlenen bir istek, oturum açmadan önce parça başına sansür gölgesini kaybederse veya birkaç video gölgesinden biri bile daha sonraki istek mutasyonlarından sonra eşleşmezse, kısmen sansürlenmiş bir transkript saklamak yerine saklanan istek gövdesi tamamen atlanır.

Gözlemlenen bir istek için, model yanıtı yapılandırılmış bir ipucu sınırı olmadan transkriptin herhangi bir bölümünü alıntılayabilir. Bu nedenle kalıcı hale getirilen çağrı günlüğü `` `responseBody` `` alanı bir atlama işaretçisiyle değiştirilir; ayrıntılı boru hattı yapıtı (yukarı akış/istemci gövdelerini ve akış parçalarını içerebilir) saklanmaz. Anlamsal, eşdurumluluk ve akıl yürütme yeniden oynatma önbellekleri, söz konusu istek için okuma ve yazmaları baypas eder. Sağlayıcı isteği ve istemci tarafından görünen yanıt değişmeden kalır. Ayrıntılı yapıt atlandığında, erken canlı tutma baytları geçici tampondan boşaltılır. Kiro'nun bozuk EventStream uyarısı yalnızca yük bayt sayısını bildirir, içeriğini veya JSON ayrıştırıcısının ham hatasını asla bildirmez.
Bu, ilgili olmayan her sağlayıcı/eklenti tanısının denetlendiğini iddia etmez; daha geniş saklanan havuz taraması #11658 altında izlenmektedir.

Dahili `` `/api/modality-bridge/video/drilldown` `` yaşam döngüsü, ayrı bir loopback/token ile kimliği doğrulanmış bir önbellek altyapısıdır. Her işlem ayrıca kanonik bir opak asıl kimliği gerektirir. Bir üretim çağırıcısı etkinleştirilmeden önce, bu kimliği kimliği doğrulanmış kiracıdan türetmelidir ve asla istemci tarafından seçilen bir değeri iletmemelidir. Önbellek anahtarları, bu aslı kanonik oturum ve video referans kimliklerine bağlar, yalnızca SHA-256 ile türetilmiş anahtarlarını saklar ve hem okuma işlemlerini hem de silmeyi aynı asıl ile sınırlandırır. Önbellek, girdi başına en fazla 16 türetilmiş JPEG karesi depolar, on dakika sonra bunların süresini sonlandırır ve sınırlı `` `start` ``/`` `end` `` okumalarını veya açık oturum silmeyi destekler.

Her asıl, 16 girdi ve 64 MiB kanonik JPEG verisiyle sınırlıdır. Bu sınırlar, genel 64 girdi / 256 MiB üst sınırından bağımsızdır: Asıl kota baskısı, genel LRU çıkarma işlemi değerlendirilmeden önce yalnızca o asılın en son kullanılmamış girdilerini çıkarır. Süresi dolmuş girdiler, önbellek etkinliğinde hem asıl hem de genel muhasebeden temizlenirken, iptal ve doğrulama hatası kısmi bir değiştirmeyi taahhüt etmez.

Önbellek; kanonik olmayan Base64, aşırı dolgu, JPEG olmayan medya, bozuk veya kesilmiş JPEG'ler ile sınırlı bir tam görüntü `sharp` kod çözme işlemi sırasında uyarı üreten JPEG'leri reddeder. Kabul edilen her görüntüyü kanonik bir JPEG olarak yeniden kodlar, çağrı yapan alanlara güvenmek yerine genişlik ve yüksekliği çözülen baytlardan türetir ve takip eden poliglot baytları tutmak yerine atar. Yalnızca sınırlı kanonik sıkıştırılmış arabellek her iki kotaya da yüklenir. JSON iletim sınırı, 32 MiB çözülmüş girdi tavanı için Base64 ek yükünü içerir. Depolanan her türetim; doğrulanmış JPEG formatını/çözünürlüğünü, örnekleme politikasını, türetim sürümünü, oluşturulma zamanını, sunucu tarafından hesaplanan içerik özetini ve hash'lenmiş üst referansını ile güvenilir çağrıçının üst içerik hash'ini kaydeder. İptal, atomik önbellek taahhüdünden önce asenkron kod çözme/hash aşamaları arasında kontrol edilir.

Bu dilim, henüz üretime hazır bir üreticiyi rotaya bağlamaz ve çok çözünürlüklü varyant seçimi sağlamaz. Bu nedenle şeffaf Video Köprüsü istek yolu ek bir iş yükü getirmezken, kiracıya bağlı ana türetimi ve eksiksiz FU-08 çok çözünürlüklü yaşam döngüsü, eksiksiz bir davranış olarak belgelenmek yerine açık takip çalışmaları olarak kalmaya devam etmektedir.

Kareler, yapılandırılmış Video modeliyle sırayla altyazılanır. Boş bir Video geçersiz kılma ayarı Vision ayarını devralır; her ikisi de boşsa Vision otomatik yönlendiricisi etkin vizyon yetenekli modeli seçer. Başarılı altyazılar, orijinal kısmı, metni aynı zamanda güvenilmeyen medya kaynaklı bir gözlem olarak işaretleyen ve alt akıştaki modellere medyada bulunan talimatları izlememelerini söyleyen kararlı bir `[Video description:` önekiyle değiştirir. Kare altyazısı önbellek anahtarları JPEG baytlarını, istemi, zaman damgasını ve etkin modeli içerir; yalnızca başarılı altyazılar önbelleğe alınır. Önbellek girdileri, yedek bir model dahil olmak üzere gerçek başarılı üretici modelini korur; farklı kareler farklı modeller tarafından üretildiğinde köprü `mixed` bildirir. Önbellek isabeti, bunu istenen yönlendirme planı olarak yeniden etiketlemek yerine söz konusu üretici kimliğini yeniden kullanır. Tüm video sonuç önbelleği, çıktıyı değiştiren her girdiye göre anahtarlanır — istem, etkin model, örnekleme politikası, kare sayısı, anlamsal analiz modu, normalleştirilmiş odak ipucunun SHA-256 parmak izi, odak penceresi, `transcript`, `audioTranscript` ve temas sayfası bayrağı — dolayısıyla bu boyutlardan herhangi birini değiştirmek bir önbellek ıskalamasıdır, asla eski bir yeniden kullanım değildir. Görsel tekilleştirme politika sürümü, eşik ve sınırlı aday kare sayısı da sonuç önbelleği anahtarında ve meta verilerinde açıktır; bu nedenle bir politika değişikliği eski bir tüm video açıklamasını yeniden kullanamaz. Sonuç önbelleği v4 meta verileri modu ve parmak izini saklar, asla ham kullanıcı görevini saklamaz. Koruma katmanı meta verileri hem istenen hem de etkin analiz modlarını bildirir; kullanılabilir kullanıcı metni olmaksızın istenen `focused` mod, etkin olarak `full` olarak bildirilir.

Koruma katmanı desteklenen her video parçasını çıkarır ancak `modalityBridgeVideoMaxVideos` değerinden fazlasını açıklamaz. `supportsVideo === false` olduğu kanıtlanmış bir hedef için, başarısız ve sınır aşan videolar açık güvenli metin işaretçilerine dönüşür, böylece hiçbir ham video hayatta kalmaz. Yetenek bilinmediğinde, bu parçalar video taşıyıcılarını korur; herhangi bir yedek transkript yukarıdaki sınırlı metin dönüşümünü izler. `supportsVideo === true` olan hedefler köprüyü atlar. İstemci istek iptal sinyali; indirme, aracı kuyruğu, alt süreçler ve altyazı çağrıları boyunca yayılır; iptaller videolar arasında durur ve hiçbir zaman ham medyaya açık şekilde savunmasız kalmaz.

Çalışma zamanı ayarları Veritabanı desteklidir ve Zod ile doğrulanmıştır:

| Anahtar                             | Varsayılan  | Aralık / davranış                                                                                                 |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İsteğe bağlı çalışma zamanı, katılım gerektirir (opt-in)                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full`, genel altyazıları korur; `focused`, sınırlı ve güvenilmeyen en son kullanıcı bağlamını kullanır           |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini devralır                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` veya orantısal `segment_aware`; dedektör arızası durumunda `uniform` değerine geri döner |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

120 saniyenin üzerindeki eski kalıcı Video zaman aşımı değerleri aracı son tarihine göre sınırlandırılır; bu sınırın üzerindeki yeni ayar yazma işlemleri reddedilir. `GET /api/modality-bridge/video/runtime`, kimlik doğrulama veya çalışma zamanı yoklamasından önce güvenilir damgalı geri döngü konumu gerektirir, ardından yönetim kimlik doğrulaması gerektirir. Yalnızca `available`, temizlenmiş FFmpeg/ffprobe sürümlerini ve çalışma zamanı kullanılamadığında sabit bir neden döndürür. Dahili çıkarma uç noktası herkese açık bir yükleme API'si değildir: kuyruk doygunluğu `503` ve `Retry-After` döndürür, çağrı yapan tarafın bağlantıyı kesmesi `499` döndürür ve sabit aracı son tarihi `504` döndürür. Dönüştürülen yanıtlar, Vision veya Audio segmentlerini kaldırmadan merkezi `x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` ekler.

### PII Maskeleyici (`piiMasker.ts`)

**Her iki** aşamada da çalışır.

- **`preCall`**, payload'ı klonlar, `system`, `messages`, `input` ve `prompt` (düz metin öğeleri dahil) alanlarını tarar ve string `content`/`text` alanlarına `processPII()` (ilgili yer: `@/shared/utils/inputSanitizer`) uygular. `PII_REDACTION_ENABLED=true` olduğunda, tespit edilen PII, giden payload'da maskelenir. Bu durum, `INPUT_SANITIZER_MODE`'dan (yalnızca prompt-injection politikasını kontrol eder) bağımsızdır. Maskeleme kapalıyken çağrı, içeriği yeniden yazmadan tespit sayılarını kaydeder.
- **`postCall`**, yanıtı derinlemesine (deep-clone) klonlar, `sanitizePIIResponse()` fonksiyonunu ve Responses API yapısına uygun maskeleyiciyi (`maskResponsesOutput` — `output_text` ve `output[].content[].text` alanlarını kapsar) çalıştırır. Herhangi bir maskeleme gerçekleşirse, değiştirilen yanıt orijinalinin yerini alır.

Güvenlik katmanı asla engelleme yapmaz; yalnızca açıklama ekler (`meta.detections`, `meta.redacted`) veya yeniden yazar.

#### Türe göre seçim, özel kalıplar ve tespit sayaçları

**Dashboard → Settings → Security → PII masking** ayarı, _ne tür verilerin_ maskeleneceğini belirler. Bu ayar maskelemeyi açmaz; maskeleme hâlâ varsayılan olarak kapalı olan `PII_REDACTION_ENABLED` (istek) ve `PII_RESPONSE_SANITIZATION` (yanıt + SSE) tarafından kontrol edilir.

- **Türe göre seçim** — yerleşik kimlikler `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) içinde listelenmiştir. Değerin atanmamış olması tüm türler anlamına gelir (bu ayar var olmadan önceki davranış). İstek motorunun `ssn_us` kalıbı `ssn` ile eşleşir. Şablonlar (Minimal, Standard, Financial, Brazilian, USA, Full) yalnızca arayüzdeki onay kutularını doldurur.
- **Özel kalıplar** — 20'ye kadar regex veya joker karakter kalıbı (`*` = 64'e kadar boşluk dışı karakter, `?` = tek karakter). Eşleşmeler `[CUSTOM_REDACTED]` haline gelir. Her kalıp `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`) fonksiyonundan geçer: en fazla 500 karakter, `g i m s u` ile sınırlı bayraklar, derlenebilir olmalı, `safe-regex` (felaket niteliğinde geri izleme - catastrophic backtracking) testini geçmeli ve boş bir dize ya da maskeleme yer tutucusu ile eşleşmemelidir. Başarısız olan bir kalıp hem kaydedilirken hem de test edilirken reddedilir; ayrıca başarısız olan kayıtlı bir satır, derlenmek yerine çalışma zamanında atlanır. Özel kalıplar yalnızca maskeleme etkinken çalışır.
- **Tespit sayaçları** — bellekte tutulan ve yeniden başlatıldığında sıfırlanan türe göre sayaçlar (eşleşen değerler asla saklanmaz, `src/lib/pii/piiDetectionStats.ts`). Bunlar yalnızca maskeleme etkinken artar.

Ayarlar `key_value` tablosunda (`pii_settings` ad alanı, `src/lib/db/piiSettings.ts`) saklanır ve 1 saniyelik bir önbellek üzerinden okunur. API:

| Metot  | Yol                      | Amaç                                                                                                          |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Bayrak durumu, `enabledTypes`, `customPatterns`, tespit sayaçları                                             |
| `PUT`  | `/api/settings/pii`      | `enabledTypes` (`null` = tümü) ve/veya `customPatterns` değerlerini değiştirme                                |
| `POST` | `/api/settings/pii/test` | En fazla 8 KB'lık bir örnek üzerinde tek bir kalıbı dry-run (ön deneme) olarak çalıştır; hiçbir şey saklanmaz |

Üçü de yönetim yetkilendirmesi gerektirir ve istek gövdesini Zod (`src/shared/validation/schemas/piiSettings.ts`) ile doğrular.

### Prompt Enjeksiyonu (`promptInjection.ts`)

Kullanıcı tarafından sağlanan içerikteki kötü amaçlı yapıları tespit eder ve yapılandırılmış politikayı uygular. Davranış, ortam değişkenleri ve yapıcı (constructor) seçenekleriyle yönlendirilir:

| Ayar            | Ortam Değişkeni                                                                                             | Varsayılan | Etki                                                                                                                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Etkin           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`     | `false` olduğunda güvenlik katmanı erkenden sonlanır (short-circuit).                                                                                                                                                         |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`     | Enjeksiyon politikası: `block`, `warn` veya `log`. (`redact` geriye dönük uyumluluk için kabul edilir ancak enjeksiyon metnini **silmez**; istek PII yeniden yazma işlemi `PII_REDACTION_ENABLED` tarafından kontrol edilir.) |
| Engelleme eşiği | `blockThreshold` seçeneği / `INPUT_SANITIZER_BLOCK_THRESHOLD` (takma ad: `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Engellemek için gereken minimum önem derecesi. Varsayılan olarak Medium (Orta) seviyesi yalnızca gözlem amaçlıdır.                                                                                                            |

**Mod önceliği** (`getMode`): çağıranın `options.mode` değeri → `INJECTION_GUARD_MODE` **DB özellik bayrağı (feature-flag) geçersiz kılma ayarı** (Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE` ortam değişkeni → `INPUT_SANITIZER_MODE` ortam değişkeni → `warn`. Bu nedenle bir pano geçersiz kılma ayarı, ortam değişkenlerini geçersiz kılar; böylece Feature Flags arayüzü çalışan korumayı canlı olarak (yeniden başlatmaya gerek kalmadan) kontrol eder. DB okuma işlemi güvenlidir (fail-safe): hata oluşması durumunda koruma, ortam tabanlı davranışa geri döner ve hiçbir geçersiz kılma ayarlanmadığında davranış, yalnızca ortam değişkeni çözümlemesiyle aynı olur.

Tespit kaynakları:

1. `@/shared/utils/inputSanitizer` içindeki `sanitizeRequest()` (boru hattının diğer yerlerinde kullanılan paylaşılan tespitçi kümesi).
2. Yerleşik `DEFAULT_GUARD_PATTERNS` (şu anda her ikisi de `high` önem derecesine sahip olan `system_override_inline` ve `markdown_system_block`).
3. Yapıcı seçenekleri aracılığıyla iletilen isteğe bağlı `customPatterns` (dizeler, regex veya `{ name, pattern, severity }` kayıtları).

`mode === "block"` olduğunda **ve** en az bir tespit önem eşiğini karşıladığında, `preCall` şu değeri döndürür: `{ block: true, message: "Request rejected: suspicious content detected" }`. `warn`/`log` modlarında güvenlik bariyeri loglama yapar ancak çağrıya izin verir. Paylaşılan yardımcı fonksiyon `evaluatePromptInjection()`, kayıt defteri üzerinden gitmeden istemleri değerlendirmesi gereken çağırıcılar için de dışarı aktarılır.

### Tarama sınırı (v3.8.20):

dedektör, birleştirilmiş istem metninin yalnızca **ilk 16 KB**'lık kısmını inceler — `src/shared/utils/inputSanitizer.ts` dosyasındaki `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). `detectInjection()` ve `evaluatePromptInjection()`, desen döngüsünü çalıştırmadan önce `slice(0, MAX_INJECTION_SCAN_BYTES)` uygular. Enjeksiyon yönergeleri bir girdinin üst kısmına yakın yer alır; bu nedenle, tespiti zayıflatmadan yüzlerce KB'lık yüklerde regex CPU/GC kullanımını sınırlar (bkz. #3932, #4041).

### Kimlik Bilgisi Maskeleyici (`credentialMasker.ts`)

**Her iki** aşamada da çalışır, varsayılan zincirde en son sıradadır (öncelik `95`). Giden payload'dan (mesaj içeriği, araç çağrısı argümanları, araç sonuçları) **ve** sağlayıcı yanıtından bilinen API anahtarı / gizli belirteç kalıplarını gizler; böylece bir istemin içine yapıştırılmış (veya bir araç sonucu tarafından geri yansıtılmış) bir kimlik bilgisi, üst düzey sağlayıcıya veya istemciye sızdırılmaz.

- **Yalnızca isteğe bağlı (Opt-in only)**, PII gizleme ile aynı kural (Katı Kural #20 ile ilişkili): `settings.credentialRedactionEnabled === true` **veya** `CREDENTIAL_REDACTION_ENABLED=true` olmadığı sürece devre dışıdır. Kapalı olduğunda güvenlik bariyeri hiçbir işlem yapmaz (no-op) — asla engellemez ve yeniden yazmaz.
- `redactCredentials()`, tam payload/yanıt ağacını (`walkValue()`, prototip kirlenmesine karşı güvenli, `WeakSet` aracılığıyla döngü güvenli) tarar ve eşleşmeleri `[REDACTED:<type>]` yer tutucusuyla değiştirerek yalnızca gerçekten değişen dalları klonlar.
- `CREDENTIAL_PATTERNS`, LLM sağlayıcı anahtarlarını (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS belirteçlerini (GitHub, Slack, Linear, Notion, npm, Postman, Discord), ödeme anahtarlarını (Stripe, Square), bulut anahtarlarını (AWS erişim anahtarı, Twilio, SendGrid, Mailgun), özel anahtarları / JWT'leri, kimlik bilgisi içeren bağlantı dizelerini (`mongodb://user:pass@...`, vb.) ve genel bir `Authorization`/`x-api-key`/`api-key`/`apikey` başlık değeri kalıbını kapsar. Başlık şeklindeki anahtarlar (`authorization`, `x-api-key`, `api-key`, `apikey`), genel metin regex'i yerine yapısal olarak (yalnızca değer, `Bearer ` / `Basic ` gibi şema öneki korunarak) gizlenir.
- Güvenlik bariyeri asla engellemez; yalnızca yeniden yazar (`modifiedPayload` / `modifiedResponse`) ve etiketler (`meta.credentialsRedacted`, `meta.count`).

Gerileme koruması: `tests/unit/credential-masker-guardrail.test.ts`.

## Temel Sözleşme (`base.ts`)

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
  block?: boolean; // true zinciri kısa devre yapar
  message?: string; // engelleme yapıldığında gösterilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // isteği yeniden yazmak için preCall tarafından döndürülür
  modifiedResponse?: TValue; // yanıtı yeniden yazmak için postCall tarafından döndürülür
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

Bir koruma katmanı (guardrail), `void`, `{}` veya `{ block: false }` değerlerinden birini döndürerek "değişiklik yok" sinyali verir. `modifiedPayload`/`modifiedResponse` döndürmek, akış boyunca sonraki koruma katmanları için akan değeri değiştirir. `signal?: AbortSignal` çağıranın yaşam döngüsünü koruma katmanlarına taşır. Bir isteğin iptal edilmesi, kasıtlı bir fail-open istisnasıdır: medya köprüleri, desteklemediği bilinen bir hedefe ham medyayı geri yüklemeden çalışmayı durdurur ve temizlik yapar.

## Kayıt Defteri (`registry.ts`)

Tekil (singleton) `guardrailRegistry` şunları sunar:

- `register(guardrail)` — bir koruma katmanı ekler (veya normalleştirilmiş ada göre değiştirir) ve `priority` değerine göre artan sırada yeniden sıralar.
- `clear()` / `list()` — yönetimsel yardımcılar.
- `runPreCallHooks(payload, context)` — etkin koruma katmanları üzerinde yineler, yükü (payload) `modifiedPayload` aracılığıyla geçirir ve ilk `block: true` ifadesinde durur.
- `runPostCallHooks(response, context)` — yanıt tarafında aynı akışı izler.
- `resetGuardrailsForTests({ registerDefaults })` — durumu temizler ve temiz bir test izolasyonu için isteğe bağlı olarak varsayılanları yeniden kaydeder.

Her iki çalıştırıcı da `{ blocked, payload|response, results, guardrail?, message? }` döndürür; burada `results`, izleme (tracing) için yararlı olan ve her koruma katmanına özel `blocked`, `skipped`, `modified`, `error` ve `meta` alanlarını içeren bir `GuardrailExecutionResult` kayıtları dizisidir.

### Her İstek İçin Koruma Katmanlarını Devre Dışı Bırakma

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`, mevcut istek için atlanması gereken koruma katmanı adlarından oluşan, yinelenmeleri giderilmiş bir liste toplar. Bu sırada okunan ve tek bir listede birleştirilen beş kanal vardır (yinelenenler giderilirken ilk görünen kazanır):

1. `apiKeyInfo.disabledGuardrails`
2. İstek gövdesi `disabledGuardrails` (üst düzey)
3. İstek gövdesi `metadata.disabledGuardrails` (yalnızca `metadata` bir nesne olduğunda)
4. `x-omniroute-disabled-guardrails` başlığı
5. Eski `x-disabled-guardrails` başlığı

Beş kanalın tümü birleştirilir, iki başlık dahildir: hem `x-omniroute-disabled-guardrails` hem dahi `x-disabled-guardrails` göndermek, listelerinin birleşimini atlar ve boş bir modern başlık artık eski başlığı gizlemez ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), düzeltildiği yer: [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Değerler dizi veya virgülle ayrılmış bir dize olabilir; adlar kırpılır ve küçük harfli kebab-case formatına normalleştirilir (`pii_masker` → `pii-masker`) ve boş girdiler çıkarılır. Sonuç, `context.disabledGuardrails` aracılığıyla kayıt defterine iletilir ve eşleşen koruma katmanları atlanır (`results` içinde `skipped: true`).

Devre dışı bırakma listesi yalnızca **kayıt defterini (registry)** etkiler. Prompt-injection `block` modu zorunlu bir sınırdır: enjeksiyon koruma ara yazılımı (`src/middleware/promptInjectionGuard.ts`), herhangi bir çağırıcı kontrollü devre dışı bırakma listesi olmadan `evaluatePromptInjection()` fonksiyonunu çağırır (daha önce yaptığı ölü `resolveDisabledGuardrails({ body })` çağrısı [#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) numaralı PR'da kaldırılmıştır), bu nedenle `prompt-injection` özelliğini devre dışı bırakan bir istek `block` modunda yine de reddedilir. Bu tasarım gereğidir. Devre dışı bırakma kanalları çağırıcı tarafından kontrol edilir (istek gövdesi, meta veriler, başlıklar) ve bir çağırıcı, operatörün belirlediği bir güvenlik kontrolünü kapatamamalıdır ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) numaralı sayıdan gelen başlık birleşimi, yalnızca hangi kayıt defteri koruma katmanlarının atlanacağını değiştirir; istemcinin ara yazılımı atlamasına izin vermez. Zorunlu anahtar bazlı ve grup bazlı koruma katmanı politikaları, v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) altında takip edilmektedir. Bkz. [Kapsam ve sınırlar](#coverage-and-limits).

## Yürütme Sırası

`src/sse/handlers/chat.ts` ve
`open-sse/handlers/chatCore.ts` üzerinden akan her istek için ([Kapsam ve sınırlar](#coverage-and-limits) altında listelenen sohbet ailesi rotaları):

1. `resolveDisabledGuardrails(...)`, API anahtarından, gövdeden ve
   başlıklardan atlama listesini oluşturur.
2. `guardrailRegistry.runPreCallHooks(body, ctx)`, güvenlik kalkanlarını artan
   öncelik sırasına göre çalıştırır:
   - Devre dışı bırakılan güvenlik kalkanları `skipped` olarak kaydedilir.
   - Her güvenlik kalkanının `preCall` aşaması, yükü (payload) `modifiedPayload` aracılığıyla yeniden yazabilir.
   - İlk `block: true` ifadesi zinciri kısa devre yaptırır ve işleyici
     bir güvenlik kalkanı reddetme yanıtı döndürür.
3. (Yeniden yazılmış olabilecek) yük, kombo yönlendirmeye ve upstream
   dağıtımına aktarılır.
4. **Yalnızca akış dışı (non-streaming):** yanıt oluşturulduktan sonra,
   `guardrailRegistry.runPostCallHooks(...)` aynı zinciri yanıt üzerinde çalıştırır. Buradaki `block: true`, upstream yanıtını düşürür ve HTTP 400 döndürür. Akışlı yanıtlar bu adımı tamamen atlar.

Hata fırlatan güvenlik kalkanları `error: <message>` ile kaydedilir ve
`logger.warn` aracılığıyla günlüklenir, ancak zincir devam eder — tasarım gereği hata durumunda açık kalır (fail-open).

## Kapsam ve sınırlar

Güvenlik kalkanı kayıt defteri yalnızca sohbet boru hattına entegre edilmiştir. Bu sınırlar
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` ve
`tests/unit/guardrail-pipeline-characterization.test.ts` tarafından sabitlenmiştir;
davranış değiştiğinde bu testleri bilinçli olarak güncelleyin.

### Kancaların (hooks) çalıştığı yerler

| Kanca / kontrol                         | Çalıştığı yer                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                       | `handleChat` (`src/sse/handlers/chat.ts`) tarafından işlenen istekler: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (ve `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` ve Telegram sohbet proxy'si. Ayrıca pano test uç noktası `/api/guardrails/test`. Bir çağrı öncesi (pre-call) bloğu HTTP 400 döndürür. |
| `runPostCallHooks`                      | Yalnızca **akış dışı (non-streaming)** sohbet yanıtları (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Akışlı yanıtlar asla buraya ulaşmaz.                                                                                                                                                                                                                                                                                             |
| Akış PII                                | `PII_RESPONSE_SANITIZATION` açık olduğunda `streamingPipeline.ts` içinde boru hattına bağlanmış `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`). Bu bir güvenlik kalkanı değildir, bu nedenle devre dışı bırakma kanalları bunu etkilemez.                                                                                                                                                                                          |
| Enjeksiyon koruması ara yazılımı (eski) | İstem (prompt) içeren her `/v1` rotası, sohbet ailesi dahil ([rota kapsamı](#injection-guard-route-coverage--red-team-phase-8--block-d) bölümüne bakın). Yalnızca istem enjeksiyonu.                                                                                                                                                                                                                                                             |

### Kapsama girmeyenler

- **Medya, gömmeler ve veri rotaları** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) asla kayıt defterine ulaşmaz. Orada hiçbir
  PII maskeleme, kimlik bilgisi maskeleme veya modalite köprüsü çalışmaz. Tek
  kontrolleri eski enjeksiyon koruması ara yazılımıdır.
- **Akışlı (streamed) yanıtlar** çağrı sonrası güvenlik kalkanı almaz: çağrı sonrasında `pii-masker` veya
  `credential-masker` bulunmaz ve çağrı sonrası blok yer almaz. Yalnızca akış PII
  dönüşümü uygulanır (`PII_RESPONSE_SANITIZATION` açık olduğunda). Akışlı bir
  yanıtta geri yansıtılan bir kimlik bilgisi gizlenmez (redacted).
- **Devre dışı bırakma kanalları ve ara yazılım (tasarım gereği):** ara yazılım, arayan tarafından kontrol edilen herhangi bir devre dışı bırakma listesi geçirmeden,
  `evaluatePromptInjection()` çağrısıyla istem enjeksiyonunu değerlendirir. `block`
  modu, arayan tarafından kontrol edilen devre dışı bırakmaların (sohbet ailesi rotaları dahil)
  baypas edemeyeceği zorunlu bir sınırdır
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). `prompt-injection`'ı
  devre dışı bırakmak yalnızca kayıt defteri güvenlik kalkanını atlar.

### Çağrı sonrasından önce bir yanıtı ne görür

Akış dışı yolda sıra şöyledir: bellek çıkarma → yerleşik araç yürütme → çağrı sonrası güvenlik kalkanları → çağrı sonrası blok çıkışı → anlamsal önbellek depolaması.

- **Bellek çıkarımı** ve **araç yürütme**, çağrı sonrası koruma mekanizmaları yanıtı yeniden yazmadan veya engellemeden önce yanıtı görür. [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) itibarıyla, bellek çıkarımı `PII_RESPONSE_SANITIZATION` etkin olduğunda (hem akış hem de akış dışı modlarda) çıkarılan metni `sanitizePII` üzerinden geçirir; ancak çağrı sonrasında engellenen bir yanıt yine de belleğe ve araçlara sunulmuş olur.
- **Anlamsal önbellek**, yanıtı çağrı sonrasında saklar, bu nedenle yeniden yazılmış yanıtı kaydeder ve engellenen bir yanıt hiçbir zaman önbelleğe alınmaz. Önbellek girdileri API anahtarına göre anahtarlanır.

## Yapılandırma

Yerleşik güvenlik sınırları tarafından okunan ortam değişkenleri:

| Değişken                              | Kullanan                  | Etki                                                                                                               |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Algılamayı tamamen devre dışı bırakmak için `false` olarak ayarlayın.                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Enjeksiyon politikası: `warn`, `block` veya `log`. Eski `redact` değeri enjeksiyon metnini yeniden yazmaz.         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Enjeksiyon koruması için mod; ayrıca ortam değişkenlerini **geçersiz kılan** (DB > ENV) bir DB özellik bayrağıdır. |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` seçeneğinin reddettiği minimum önem derecesi: `high` (varsayılan), `medium` veya `low`.               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` için eski sürüm takma adı.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduğunda, istek PII verileri gizlenir (enjeksiyon modundan bağımsız olarak).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Yanıt tarafındaki maskeleme davranışını kontrol eder.                                                              |

Modality Bridge güvenlik sınırları, çalışma zamanı yapılandırmasını ortam değişkenlerinden değil, DB destekli ayar deposundan (`getSettings()`) okur. Vision'ın birincil anahtarları şunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` anahtarları yalnızca belgelenen tek çevrimlik okuma
yedeklemesi (fallback) olarak kabul edilir; pano yazma işlemleri birincil anahtarları kullanır. Varsayılan değerler ve yedek çözücü `src/shared/constants/modalityBridgeDefaults.ts` dosyasında bulunur; eski sabitler ise `src/shared/constants/visionBridgeDefaults.ts` içinde tutulmaktadır.

Ses (Audio), `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ve `modalityBridgeAudioMaxClips` öğelerinin yanı sıra paylaşılan
`modalityBridgeCache*` ayarlarını kullanır. Ses için eski anahtar yedeği bulunmamaktadır, çünkü bu anahtarlar Modality Bridge şemasıyla birlikte sunulmuştur.

Video, `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ve
`modalityBridgeVideoTimeout` öğelerinin yanı sıra paylaşılan `modalityBridgeCache*` ayarlarını kullanır.
FFmpeg/ffprobe isteğe bağlı operasyonel bağımlılıklar olduğundan ve kare açıklamaları gecikme ile model maliyeti eklediğinden, varsayılan olarak devre dışıdır.

## Özel Guardrail'ler

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

Adımlar:

1. `BaseGuardrail` sınıfını genişleterek `src/lib/guardrails/myGuardrail.ts` dosyasını oluşturun.
2. `preCall` ve/veya `postCall` metotlarını uygulayın.
3. Ya içe aktarma anında kaydedin (`registerDefaultGuardrails` üzerinden ekleyin) ya da
   çalışma zamanında `guardrailRegistry.register(...)` çağrısı yapın — kayıt defteri,
   aynı normalize edilmiş adı taşıyan önceki herhangi bir guardrail'i
   değiştirir.
4. `tests/unit/` altında testler ekleyin (mevcut örnekler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test Etme

Bilinen bir durumdan başlamak için testler arasında `resetGuardrailsForTests()` kullanın.
Boş bir kayıt defteri ile başlamak ve yalnızca test edilen guardrail'leri kaydetmek için
`{ registerDefaults: false }` parametresini geçin. Vision Bridge, bağımlılık enjeksiyonunu
(`deps.getSettings`, `deps.callVisionModel`) kabul eder; Audio Bridge ise ayarlar, yetenekler,
STT model seçimi, kimlik bilgisi kontrolleri ve deşifre için eşdeğer bağlantı noktalarını
sunar. Bu sayede testler, veritabanı veya ağ erişimine ihtiyaç duyulmadan her iki akışı da çalıştırabilir.

## Ayrıca Bakınız

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — prompt enjeksiyonunu ve PII maskelemesini
  destekleyen ortak dedektör
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge varsayılanları ve
  zorunlu köprü model listesi
- `src/shared/constants/modalityBridgeDefaults.ts` — ortak Vision/Audio çalışma zamanı varsayılanları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal katman (devre kesici, bekleme süreleri)
- `docs/reference/ENVIRONMENT.md` — tam ortam değişkeni referansı

## Enjeksiyon koruması rota kapsamı ve kırmızı takım (Phase 8 · Block D)

Enjeksiyon koruması (`createInjectionGuard` / `withInjectionGuard`), kullanıcı istemlerini
kabul eden tüm rotaları kapsar. `INJECTION_GUARD_MODE` değerine uyar (varsayılan `warn` = yalnızca loglama;
`block` = HTTP 400 `SECURITY_001` döndürür).

| Tür            | Rotalar                                                                                                                                              | Varsayılan mod |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Metin (mevcut) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Üretken        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Veri           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Metin çıkarma (`extractMessageContents`), `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarını kapsar.

**Kırmızı takım (gecelik, `nightly-llm-security.yml`):** promptfoo, her rotanın OWASP-LLM derlemesini
`INJECTION_GUARD_MODE=block` altında bloke ettiğini doğrular; garak propları çalıştırır (gizli anahtar olmadan atlar).
`moderations`, tutarlılık için dahildir. Blok modu zorunlu bir sınırdır: `evaluatePromptInjection()`
ara yazılımın kendisine aktardığı istek başına devre dışı bırakma listesini yok sayar, bu nedenle `disabledGuardrails`
bir rotayı bundan muaf **tutmaz** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Gecelik iş akışı (`.github/workflows/nightly-llm-security.yml`, cron + manuel
tetikleme) iki işe sahiptir:

- **`promptfoo-guard` (bloke edici)** — `INJECTION_GUARD_MODE=block` ile
  `promptfoo eval -c promptfooconfig.yaml` komutunu çalıştırır. Her bir düşmanca vaka (ör. "ignore all
  previous instructions…", DAN tarzı jailbreak'ler), yanıtın
  `error.code === "SECURITY_001"` taşıdığını, yani korumanın isteği fiilen reddettiğini doğrular.
- **`garak` (tavsiye niteliğinde)** — yerel bir OmniRoute örneğine (`http://localhost:20128/v1`)
  karşı garak `--probes promptinject,dan,leakreplay` komutunu çalıştırır. Sağlayıcı gizli anahtarına
  (`PROMPTFOO_PROVIDER_KEY`) bağlıdır; sorunsuz bir şekilde atlanır ve sonuna
  `|| true` eklenmiştir, böylece CI'ı başarısız kılmadan raporlama yapar.

Koruma yardımcı fonksiyonunun (`createInjectionGuard` / `withInjectionGuard`)
kapsamı, istem içeren her `/v1` rotasını kapsar; istem metni,
`src/shared/utils/inputSanitizer.ts` içindeki `extractMessageContents()` tarafından
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarından çekilir.

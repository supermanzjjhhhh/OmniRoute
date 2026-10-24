# Guardrails (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber rujukan utama:** `src/lib/guardrails/`
> **Kemas kini terakhir:** 2026-10-17 — v3.8.52 (menambah [Liputan dan had](#coverage-and-limits):
> laluan dan laluan respons yang dicapai oleh hook, pengepala penyahdayaan yang digabungkan (#16412), mod
> sekatan suntikan sebagai sempadan wajib (#16413), dan komponen yang melihat respons sebelum pascapanggilan)

Guardrail menguatkuasakan keselamatan, dasar dan transformasi kandungan pada sempadan
antara OmniRoute dengan penyedia huluan. Setiap guardrail boleh memeriksa (dan
secara pilihan menolak, mentransformasikan atau menganotasi) muatan permintaan (`preCall`) dan
respons huluan (`postCall`).

Sistem ini **terbuka apabila gagal**: jika guardrail melontarkan ralat semasa pelaksanaan, daftar
merekodkan ralat tersebut dan meneruskan dengan guardrail seterusnya, bukannya menggagalkan
permintaan. Penyekatan ialah keputusan yang dibuat secara eksplisit (`block: true`), bukan berlaku secara tidak sengaja.
Satu-satunya pengecualian ialah permintaan yang dibatalkan: apabila `signal` pemanggil dibatalkan,
guardrail yang melontarkan ralat menolak pelaksanaan hook dan bukannya dilangkau.

Hook **tidak** dijalankan pada setiap laluan atau setiap respons. Baca
[Liputan dan had](#coverage-and-limits) sebelum bergantung pada guardrail sebagai
kawalan keselamatan.

## Guardrail Terbina Dalam

Daftar memuatkan enam guardrail secara automatik mengikut tertib keutamaan semasa import
(lihat `registry.ts` → `registerDefaultGuardrails()`):

| Keutamaan | Nama                | Peringkat      | Fail                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nombor keutamaan yang lebih rendah dijalankan **terlebih dahulu**.

### Jambatan Penglihatan (`visionBridge.ts`) — Jambatan Modaliti PR-1

Model asas GLM 5.3 dan `glm-5.3-{low,high,max}` mempunyai metadata
daftar/spesifikasi `supportsVision:false` yang eksplisit. Varian GLM 5.3 Flash
kekal sebagai model dengan keupayaan penglihatan natif. Laluan `/v1/messages` Claude Code memasuki
rantaian guardrail prapanggilan `handleChat` yang dikongsi **sebelum** terjemahan
Claude kepada OpenAI; imej hasil alat `Read` yang tersarang mesti diperihalkan atau dikendalikan
sebelum terjemahan itu mengangkatnya menjadi kandungan `image_url` OpenAI (#17069).

Memintas permintaan yang mengandungi imej yang ditujukan kepada **model tanpa keupayaan penglihatan** dan sama ada
menghalakan semula keseluruhan permintaan kepada model berkeupayaan penglihatan atau menggantikan bahagian
imej dengan perihalan teks yang dihasilkan oleh model penglihatan yang boleh dikonfigurasikan sebelum
panggilan huluan. Ini membolehkan penyedia teks sahaja mengendalikan
muatan multimodal secara telus.

Aliran:

1. Langkau jika model sasaran sudah menyokong penglihatan (melainkan model itu terdapat dalam
   senarai jambatan paksa `isVisionBridgeForcedModel`).
2. Ekstrak bahagian imej melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang mewakilkan tugas kepada **pengesan media
   bersepadu** `detectMediaParts()` dalam `open-sse/utils/mediaParts.ts` —
   sumber rujukan utama tunggal yang dikongsi dengan penapis keserasian kombo.
   Pengekstrakan dihadkan melalui senarai dibenarkan kepada bentuk yang boleh dicantumkan
   semula oleh `replaceImageParts` (kontrak ekstrak↔ganti): `image_url` OpenAI, base64 Anthropic
   `source.type:"base64"`, URL Anthropic `source.type:"url"`, dan
   `input_image` API Responses. Imej sepadan yang tersarang dalam
   `tool_result.content` Claude Code dan output alat Responses turut diekstrak dan
   digantikan pada laluan asalnya; bentuk yang berupa penunjuk sahaja merupakan bahan untuk penapis kombo
   dan tidak diekstrak.
   Langkau jika tiada yang ditemukan.
3. Tentukan konfigurasi masa jalan melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): kunci tetapan `modalityBridge*`
   baharu diberi keutamaan; kunci `visionBridge*` legasi kekal sebagai **pilihan sandaran
   satu kitaran** (tempoh undur balik). Langkau sebelum sebarang penelusuran media apabila
   jambatan dinyahdayakan.
4. Pemilih mod (`modalityBridgeVisionMode`, lihat jadual di bawah) menentukan
   penghalaan semula atau pemerihalan. Penghalaan semula mengembalikan `modifiedPayload` dengan hanya `model`
   ditukar, berserta metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Laluan pemerihalan: hadkan imej kepada `maxImages`, susun prom yang mengambil kira tugas,
   semak cache pemerihalan, panggil model penglihatan **secara selari**
   (`Promise.allSettled`), dan sisipkan bahagian teks `[Image N]: <description>` di
   tempatnya. Pemerihalan yang gagal menghasilkan `null`: imej mentah dikekalkan untuk
   sasaran yang tidak diketahui keupayaannya/berkeupayaan penglihatan (#4012), tetapi **sasaran langsung
   yang disahkan hanya menyokong teks** atau kombo tanpa keupayaan penglihatan mendapat teks pengganti
   `(unavailable — no vision-capable provider connected)` yang eksplisit untuk
   setiap imej yang tidak diperihalkan, termasuk kegagalan separa dan imej yang melebihi
   had panggilan pemerihalan (#17069). Mekanisme sandaran sedia ada untuk pemerihalan kombo apabila semuanya gagal
   dikekalkan (#8430).
6. Kembalikan `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mod (`modalityBridgeVisionMode`)

| Mod        | Lalai | Tingkah laku                                                                                                                                                                                                                                                                                                                 |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | Heuristik legasi, tidak diubah (#6640/#7204): model bukan kombo/`auto/` dialihkan ke model penglihatan terbaik melainkan model asal sudah mempunyai kelayakan yang boleh digunakan (maka huraian dibuat); sasaran kombo sentiasa membuat huraian.                                                                            |
| `describe` |       | Sentiasa membuat huraian — blok pengalihan dilangkau sepenuhnya; model yang dipilih pengguna sentiasa menjawab.                                                                                                                                                                                                              |
| `reroute`  |       | Paksa pengalihan: pengadang yang mengekalkan model dengan kelayakan dipintas. Pengadang kelayakan **sasaran** pengalihan masih terpakai — apabila tiada sasaran penglihatan yang boleh digunakan, jambatan menyekat dengan ralat yang jelas dan bukannya membuat huraian atau menghantar imej mentah ke sasaran teks sahaja. |

Mod paksa memintas aliran **sebelum** heuristik automatik dijalankan; tingkah laku `auto`
adalah serupa bait demi bait dengan pengadang sebelum PR-1.

#### Skop kunci API (`visionBridgeKeyScope.ts`)

Apabila kunci API pemanggil mengehadkan `allowedConnections`, kumpulan kuota
(`allowedQuotas`) atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), jambatan hanya
memilih model pengalihan dan huraian yang boleh digunakan oleh kunci tersebut, pada sambungan yang boleh
digunakan oleh kunci tersebut. Panggilan huraian kemudiannya sentiasa melalui gelung kendiri OmniRoute dengan
pengepala `x-omniroute-self-loop-key-id`, supaya permintaan sembang yang diterima
menguatkuasakan semula dasar sambungan dan model kunci tersebut. `enforceApiKeyPolicy()`
mematuhi pengepala itu hanya apabila disertakan dengan token pembawa gelung kendiri, maka ia hanya boleh
mengecilkan akses, dan id yang tidak dapat dikenal pasti akan ditolak.

Jika tiada model penglihatan yang dibenarkan untuk kunci tersebut, **sasaran teks sahaja
yang telah disahkan** menolak permintaan imej secara setempat dengan HTTP 400 yang jelas dan bukannya
memajukan bait imej ke sistem huluan yang tidak berkeupayaan (#17069). Bagi sasaran dengan
keupayaan penglihatan yang tidak diketahui atau natif, laluan huraian mengekalkan tingkah laku
membenarkan apabila gagal yang sedia ada (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Permintaan tanpa kunci, dan kunci tanpa sekatan ini, berfungsi sama seperti
sebelumnya.

#### Prom huraian peka tugas (`modalityBridgeVisionTaskAware`)

Lalai **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambahkan
teks **mesej pengguna terakhir** (dipangkas kepada 500 aksara) pada prom
huraian asas, mengarahkan huraian kepada perkara yang sebenarnya ditanya oleh pengguna
(corak codex-vision-proxy) dan meminta model penglihatan menyalin teks yang
kelihatan. Apabila bendera dimatikan — atau tiada teks pengguna — prom asas digunakan tanpa perubahan.

Permintaan serasi OpenAI milik gelung kendiri huraian itu sendiri (`callVisionModelSingle()`
dalam `visionBridgeHelpers.ts`) sentiasa meminta `image_url.detail: "high"` —
tanpa syarat, bagi setiap pemanggil/penyedia, tanpa bergantung pada sebarang isyarat klien.
Pensampelan butiran rendah merendahkan ketepatan OCR khususnya untuk tugas penyalinan
teks yang diminta oleh prom ini, maka panggilan huraian itu sendiri sentiasa meminta
butiran tinggi tanpa mengira tahap butiran yang digunakan oleh permintaan masuk asal. Ini
hanya mempengaruhi badan permintaan huraian dalaman; ia tidak mengubah cara
OmniRoute memajukan `image_url.detail` milik pemanggil pada permintaan utama —
nilai lalai itu digunakan secara berasingan, dan hanya untuk klien OpenCode yang dikesan, dalam
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Cabang
format penghantaran Anthropic bagi gelung kendiri huraian tidak mempunyai medan `detail`
dan tidak terjejas oleh mana-mana nilai lalai tersebut.

#### Had output huraian (`modalityBridgeVisionMaxChars`)

| Kunci                          | Lalai | Julat              |
| ------------------------------ | ----- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`   | `0` atau 100–50000 |

`0` (lalai) bermaksud **tiada had** — huraian yang dikembalikan oleh
`callVisionModel()` diteruskan tanpa perubahan, mengekalkan tingkah laku
sedia ada. Sebarang nilai dalam julat 100–50000 memangkas huraian dengan
akhiran `…` sebelum ia disisipkan semula sebagai `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` dalam `src/lib/guardrails/visionBridge.ts`).
Naikkan nilai ini untuk tugas OCR yang sarat dengan butiran apabila model hiliran memerlukan
transkripsi penuh; turunkannya untuk mengehadkan penggunaan token pada model penglihatan yang banyak menghasilkan teks.
Medan papan pemuka ini terletak pada panel Lanjutan dalam tab Penglihatan
(`modality-bridge-max-chars` dalam `ModalityBridgeVisionTab.tsx`) dan menaikkan sebarang
nilai antara 1 hingga 99 kepada had minimum 100 sambil membiarkan `0` yang dinyatakan secara eksplisit
tanpa perubahan — `0` ialah nilai Zod yang sah dengan sendirinya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), bukan sekadar
nilai lalai "belum ditetapkan".

#### Cache huraian (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dalam memori untuk output huraian, dikongsi merentas seluruh proses.
Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)` dengan
pembingkaian awalan panjang (tiada perlanggaran sempadan medan). Komponen model ialah
model jambatan yang **dikonfigurasi**, bukan model yang sebenarnya menjawab —
`callVisionModel` mungkin menggunakan pilihan sandaran secara dalaman, dan penggunaan kunci bagi setiap percubaan akan
memecah-belahkan cache. Huraian yang gagal tidak pernah dicache. Tetapan:

| Kunci                           | Lalai  | Julat   |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Penormalan imej jauh (describe gelung kendiri/pengambilan base64)

Apabila jambatan mengambil imej **jauh** sendiri — panggilan kendiri describe Anthropic
dan penukaran base64 format wayar claude
(`ensureBase64ImagesForClaudeWire`), kedua-duanya melalui
`fetchRemoteImageAsDataUri()` dalam `visionBridgeHelpers.ts` — URI data yang
terhasil diproses melalui `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sebelum dibenamkan dalam permintaan
model penglihatan. Imej yang terlalu besar dikecilkan kepada **sisi panjang 2048px** (sepadan
dengan had saiz semula yang sudah digunakan oleh OpenAI/Anthropic pada sisi pelayan), yang mengurangkan
bait muat naik/kependaman tanpa mengubah apa yang dilihat oleh model penglihatan. Pensaizan semula
menggunakan `sharp`, yang dimuatkan melalui import dinamik: pada platform yang binari
aslinya gagal dimuatkan, `normalizeDataUri()` **tidak pernah melontarkan pengecualian** — ia beralih
kepada penerusan bait asal tanpa perubahan, jadi laluan describe/penukaran base64
sentiasa terus berfungsi. Bait bukan imej (pengambilan yang tidak mengembalikan
imej yang boleh dinyahkod) juga diteruskan tanpa perubahan. Penormalan ini
terhad kepada imej yang diambil oleh jambatan untuk panggilan kendirinya sendiri — ia tidak pernah
digunakan pada muatan mentah pemanggil yang diteruskan tanpa perubahan, selaras dengan
prinsip pengubahan hanya atas pilihan ikut serta (Peraturan Tegas #20).

#### Skema tetapan + migrasi

Kunci `modalityBridge*` baharu disahkan oleh Zod dalam `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, tiga kunci `modalityBridgeCache*`, dan
kumpulan `modalityBridgeAudio*` yang digunakan oleh Jambatan Audio. Migrasi
`141_modality_bridge_settings.sql` menyalin nilai legasi
`visionBridge*` sedia ada ke kunci baharu yang sepadan (idempoten, tidak pernah menulis ganti
nilai `modalityBridge*` yang ditetapkan oleh pengendali); kunci legasi kekal diterima sebagai
sandaran bacaan untuk satu kitaran keluaran.

#### Pengepala ketelusan + statistik

Respons yang diubah melalui describe membawa
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(dibina oleh `buildModalityBridgeHeader()` dalam `modalityBridge/bridgeStats.ts`,
diterapkan oleh `withModalityBridgeHeader()` dalam `src/sse/handlers/chatHelpers.ts`).
Permintaan yang dihalakan semula **tidak** mendapat pengepala — muatan tidak diubah dan pertukaran
model sudah kelihatan dalam medan `model` pada badan respons.

`GET /api/modality-bridge/stats` (pengesahan pengurusan, tahap yang sama seperti
`GET /api/settings`) mengembalikan pembilang setiap modaliti dalam memori
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan
`video`. `averageLatencyMs` menggunakan `latencySamples`, bukan semua percubaan, sebagai
penyebutnya; operasi tanpa pemasaan tidak menghasilkan sampel sifar milisaat
secara rekaan. `bridged` kekal sebagai alias yang serasi ke belakang untuk
penukaran yang berjaya; percubaan yang gagal tidak menambah nilainya.
Pembilang ditetapkan semula apabila proses dimulakan semula, seperti yang direka
(telemetri, bukan perakaunan).

#### Konfigurasi papan pemuka

Halaman papan pemuka khusus ialah
`/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`,
dan `Video` yang boleh diakses melalui URL mengekalkan parameter pertanyaan semasa menukar nilai `tab`.
Tab Penglihatan menyediakan pengaktifan, mod, pemilihan model (termasuk lalai
automatik), pengarahan peka tugas, had lanjutan untuk tamat masa/imej/panjang penerangan/cache,
pembilang masa jalan,
dan permintaan sampel yang dilindungi. Tab Audio juga sudah aktif: ia menyediakan
pengaktifan, pemilih model khusus STT dengan Auto, had tamat masa/panjang klip maksimum,
pembilang audio, dan ujian sampel `input_audio`. Tab Video berfungsi: ia melaporkan
keadaan masa jalan FFmpeg/ffprobe — salah satu daripada empat keadaan UI yang jelas (`unknown` semasa
pemeriksaan sedang berjalan atau tidak dapat diselesaikan, `restricted` pada hos
papan pemuka bukan gelung balik yang pemeriksaannya dilangkau pada sisi klien, `unavailable` setelah diperiksa
dan disahkan tiada, atau `available` berserta versi FFmpeg/ffprobe) — menyimpan
had pengaktifan/model/bingkai/video/tamat masa, menapis pemilih model kepada model
yang berkeupayaan penglihatan, dan menyediakan pembilang video.

Kad Jambatan Penglihatan terdahulu di bawah tetapan AI ialah pautan keserasian ke
halaman baharu; ia tidak lagi mempunyai salinan kedua borang tersebut. Penyedia Media juga
memautkan aliran kerja Imej-ke-Teks dan Pertuturan-ke-Teks ke tab Jambatan
Modaliti yang sepadan tanpa membuang ruang uji Pertuturan-ke-Teks sedia ada.

**Pintasan kawalan kemasukan gelung kendiri:** apabila panggilan describe dihalakan melalui
gelung kendiri `/v1` OmniRoute sendiri (model penyedia bukan standard), subpermintaan menghantar
`x-omniroute-admission-bypass: internal` dan disahkan menggunakan kelayakan
gelung kendiri yang ditentukan — penanda khas `sk_omniroute` setempat dalam mod setempat, atau
kunci persekitaran `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` yang dikonfigurasi oleh pengendali (#1350) supaya
pengerahan `REQUIRE_API_KEY=true` masih boleh menjalankan panggilan describe. Pintasan
hanya dibenarkan untuk kelayakan yang tepat tersebut, jadi klien luaran tidak boleh menggunakan
pengepala itu untuk melangkau kawalan kemasukan.

Lalai legasi berada dalam `src/shared/constants/visionBridgeDefaults.ts`;
lalai mod/peka tugas/cache baharu dan penyelesai tetapan berada dalam
`src/shared/constants/modalityBridgeDefaults.ts`. Mekanisme kawalan menyediakan
pilihan pembina `deps` supaya ujian boleh menyuntik pelaksanaan palsu `getSettings` dan
`callVisionModel`.

### Jambatan Audio (`audioBridge.ts`) — Jambatan Modaliti PR-3

Memintas permintaan sembang yang mengandungi audio sebelum permintaan itu mencapai sasaran yang tidak
diketahui menerima input audio. Ia tidak pernah menghalakan semula permintaan sembang: bahagian audio
ditranskripsikan melalui titik akhir berbilang bahagian serasi OpenAI sedia ada dan
model sembang yang dipilih meneruskan dengan transkrip teks.

Aliran:

1. Tentukan `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata
   eksplisit daripada daftar penyedia diberi keutamaan, diikuti metadata model statik, kemudian
   `modalities_input` yang disegerakkan. Senarai input yang diisytiharkan tanpa `audio` bernilai `false`; jika tiada
   bukti keupayaan, nilainya kekal `null`. Kedua-dua `false` dan `null` mengaktifkan
   jambatan konservatif, manakala `true` memintasnya.
2. Tentukan tetapan `modalityBridgeAudio*` dan ekstrak bahagian audio peringkat teratas
   yang boleh digantikan daripada setiap mesej melalui pengesan `detectMediaParts()`
   yang dikongsi. Bentuk format penghantaran yang disokong ialah OpenAI `input_audio`, `audio_url`, dan
   `source.media_type: "audio/*"`. Audio tersarang dikesan untuk penghalaan tetapi tidak
   dibuang oleh laluan penggantian. Kerja dihadkan oleh `modalityBridgeAudioMaxClips`;
   bahagian seterusnya dibiarkan tanpa perubahan.
3. Patuhi `provider/model` yang dikonfigurasikan, atau biarkan `selectAudioBridgeModel()` menelusuri
   `AUDIO_TRANSCRIPTION_PROVIDERS` mengikut susunan katalog yang stabil dan memilih
   model pertama dengan bukti kelayakan penyedia aktif yang boleh digunakan.
4. `callAudioTranscription()` menukar audio base64/URI data kepada `file`
   berbilang bahagian, atau memuat turun `audio_url` jauh melalui pengawal trafik keluar
   yang hanya membenarkan destinasi awam, dengan penetapan DNS dan had 25 MB. Kemudian, fungsi ini menghantar fail dan model
   yang dipilih melalui POST ke gelung kendiri `/v1/audio/transcriptions` setempat, dengan pengesahan menggunakan
   `resolveSelfLoopBearer()`. Laluan transkripsi sedia ada menjalankan
   carian bukti kelayakan, pengendalian tempoh bertenang/had kadar, dan penghantaran kepada penyedia seperti biasa.
5. Panggilan yang berjaya menggantikan bahagiannya dengan `[Audio N]: <transcript>`. Panggilan
   dijalankan dengan `Promise.allSettled`: kegagalan individu mengekalkan bahagian
   audio asal tersebut (kontrak #4012). Jika semua panggilan gagal dan sasaran terbukti
   `supportsAudio === false`, bahagian tersebut menjadi
   `[Audio N]: (unavailable — no STT provider connected)` (kontrak #8430). Bagi
   sasaran yang tidak diketahui (`null`), hasil apabila semua panggilan gagal dibiarkan tanpa perubahan. Sasaran yang terbukti
   hanya menyokong teks tanpa bukti kelayakan STT yang boleh digunakan menerima
   teks pengganti eksplisit yang sama tanpa membuat panggilan rangkaian.

Transkrip yang berjaya menggunakan cache LRU/TTL Modality Bridge untuk seluruh proses.
Kuncinya menggabungkan rujukan audio, label operasi `audio-transcription`
yang stabil, dan model STT yang dipilih; kegagalan tidak pernah dicache. Percubaan audio mengemas kini
pembilang `bridged`, `cacheHits`, `failures`, dan `lastUsedAt` yang dikongsi.
Respons yang diubah membawa
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; permintaan
yang tidak diubah tidak menerima segmen Audio Bridge.

Tetapan masa jalan disimpan dalam DB dan disahkan oleh Zod:

| Kunci                         | Lalai   | Julat            |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | Auto atau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

Cache yang dikongsi kekal dikawal oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Jambatan Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Memintas bahagian video peringkat teratas dalam `messages` Chat Completions dan `input`
API Responses sebelum sasaran yang tidak diketahui mempunyai sokongan video natif dipanggil.
Bentuk yang disokong ialah `input_video`, `video_url`, `video_source`, URL HTTPS,
dan URI data `data:video/*;base64,...`. Nama fail biasa dalam teks tidak dianggap
sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) mengendalikan penelusuran permintaan,
semakan keupayaan/dasar, pengagregatan bagi setiap permintaan, dan muatan respons.
Kerja bagi setiap video — pemerolehan, cache hasil keseluruhan, penerangan jujukan
bingkai (yang menggabungkan sebarang transkrip audio yang diisytiharkan oleh pemanggil), dan metrik/pembatalan/pembersihan
bagi setiap percubaan — dikapsulkan di sebalik `processVideoPart` dalam
`videoBridgePipeline.ts`, yang dipanggil sekali bagi setiap bahagian video dalam gelung `preCall`.
Modul tersebut turut mentakrifkan sempadan port eksplisit `VideoMediaBrokerPort`
(pemerolehan bait dan pengekstrakan bingkai tersampel), `VideoAudioTranscriptionPort`
(penggabungan transkrip audio yang diisytiharkan oleh pemanggil dengan kapsyen tersampel), dan
`VideoDrilldownPort` (sempadan penyimpanan kekal bagi penelusuran terperinci bingkai; belum disambungkan
kepada `processVideoPart` — hanya laluan `/api/modality-bridge/video/drilldown`
yang berasingan menulis entri penelusuran terperinci pada masa ini).

Laluan permintaan `/v1` awam tidak pernah mengimport atau memanggil subproses. Video
jauh dimuat turun dengan had 50 MiB; video base64 sebaris mempunyai
had konservatif 36 MiB selepas penyahkodan bagi setiap video supaya sampul model/mesej/pembingkaian
boleh kekal dalam had penerimaan permintaan JSON awam sebanyak 50 MiB. Panjang
sebaris dan anggaran saiz selepas penyahkodan diperiksa sebelum peruntukan. HTTPS
diwajibkan pada URL jauh awal dan setiap ubah hala, menggunakan pengawal trafik keluar
sedia ada yang hanya membenarkan destinasi awam, dengan penetapan DNS. Bait tersebut kemudiannya merentasi sempadan broker dalaman
`POST /api/modality-bridge/video/extract` yang khusus. Laluan itu bersifat
`LOCAL_ONLY` dan `SPAWN_CAPABLE`, hanya menerima permintaan gelung balik
dipercayai yang disahkan bagi setiap proses, dan tidak pernah menerima URL, laluan sistem fail, fail boleh laksana,
atau senarai argumen. Saluran pemprosesan saiz badan API dan pembaca badan
berperingkat milik pengendali masing-masing menguatkuasakan had input broker sebanyak 50 MiB secara berasingan. Baris gilir terhadnya menjalankan
satu pengekstrakan pada satu-satu masa, membenarkan empat kerja menunggu, dan mengehadkan input menunggu kepada
100 MiB.

Di dalam broker, `ffprobe` membaca fail setempat peribadi; senarai format
dibenarkan yang tetap mengecualikan format senarai main dan manifes. Bagi bekas
keluarga MOV yang dibenarkan, rujukan data MOV luaran kekal dinyahdayakan secara lalai, dan
arahan tetap tidak mengaktifkannya. Kedua-dua `ffprobe` dan `ffmpeg` menggunakan
senarai putih protokol `file` sahaja, satu utas, tatasusunan argumen tetap, tanpa shell,
dan fail boleh laksana yang dicari melalui `PATH`. Strim kulit bergambar terlampir bukan
calon yang boleh dimainkan. Semua strim yang boleh dimainkan mesti memenuhi had, dan
strim lalai yang dinyatakan secara eksplisit diutamakan sebelum pilihan sandaran
berindeks terendah yang deterministik. Video dihadkan kepada 600 saat, 8,192 piksel bagi setiap dimensi, dan
33,554,432 piksel sumber. FFmpeg mensampel 1–16 bingkai JPEG pada titik tengah, mengecilkan
sisi panjang kepada paling banyak 1,024 piksel tanpa membesarkan input yang lebih kecil, dan
tidak pernah menerima URL. Pensampelan menggunakan `uniform` secara lalai. Dasar pilihan
`scene_aware` dan dasar eksperimen `segment_aware` menjalankan satu laluan
FFmpeg tetap tambahan pada strim setempat yang telah disahkan, memilih cap masa
adegan `showinfo` dalam had yang ditetapkan, dan beralih secara deterministik kepada
titik tengah seragam yang sama apabila pengesan gagal, tamat masa, output cacat, atau set
calon kosong. Mod peka segmen memperuntukkan sampel titik tengah secara berkadar mengikut
selang adegan yang disahkan; bukti peka segmen dan tingkah laku sandaran
diperincikan di bawah. Had mutlak 16 bingkai
digunakan selepas pemilihan dalam setiap dasar. Apabila permintaan peka adegan hanya mempunyai
bajet satu bingkai, ia menggunakan titik tengah seragam bagi keseluruhan video atau tetingkap
fokus yang aktif dan melaporkan `policyEffective: uniform`: satu bingkai adegan terpilih
tidak dapat mengekalkan kedua-dua hujung temporal. Pemanggil boleh memilih untuk memberikan
tetingkap fokus terhingga (`start`/`end` dalam saat); batasnya dikekang kepada tempoh
media, tetingkap terbalik atau tidak terhingga ditolak, dan semua dasar
pensampelan dilaksanakan hanya dalam selang yang dinormalkan. Tetingkap yang terhasil
disertakan dalam metadata pensampelan dan dalam awalan perihalan
tidak dipercayai supaya model hiliran dapat membezakan petikan berfokus daripada keseluruhan
garis masa.

Fokus semantik kapsyen ialah tetapan berasingan yang eksplisit. Mod analisis `full`
lalai mengekalkan prom bingkai sedia ada dan tidak pernah memajukan teks
permintaan kepada model kapsyen. Dalam mod `focused`, jambatan hanya membaca
`text`/`input_text` terkini yang tidak kosong dan ditulis oleh pengguna daripada bekas Chat atau Responses
yang sama, menormalkannya kepada NFC, merapatkan aksara kawalan dan ruang putih,
serta mengehadkannya kepada 500 titik kod Unicode. Hasil yang kosong menggunakan semula
prom `full` yang tepat. Petunjuk yang boleh digunakan disirikan sebagai JSON dalam blok
konteks pengguna tidak dipercayai khusus dan hanya boleh mengutamakan butiran yang dapat diperhatikan; ia
tidak boleh mengatasi amaran berasingan supaya tidak mengikuti arahan yang kelihatan
atau kedengaran dalam media. Fokus teks tidak pernah menyimpulkan `start`/`end` atau mengubah
pensampel temporal.

#### Bukti segmen struktur FU-07

`segment_aware` menggunakan satu laluan praanalisis terhad pada strim video
setempat yang telah disahkan. Rantaian penapis tetap mula-mula menskalakan lebar kepada paling banyak 320 piksel,
mengesan perubahan adegan dan selang beku, kemudian mensampel pada kadar 1 bingkai sesaat
untuk kekaburan, luma purata, dan maklumat ruang/temporal. Laluan ini
dihadkan kepada 600 sampel struktur, satu utas FFmpeg/penapis, senarai dibenarkan protokol
`file` sahaja dan bekas yang sama, had output proses 1 MiB,
dan paling lama 30 saat dalam batas pembatalan/tarikh akhir bersama broker. Ia tidak pernah
menerima arahan, penapis, laluan, atau URL daripada permintaan.

Nilai struktur ialah bukti pensampelan deterministik, bukan pemahaman
semantik video. Nilai ini tidak menyimpulkan subjek, tindakan, kapsyen, pertuturan, atau niat
pengguna. Sempadan adegan dan pembekuan membentuk segmen; liputan pembekuan, kekaburan,
pendedahan, perincian ruang, dan perubahan temporal hanya mempengaruhi cara bajet
1–16 bingkai sedia ada diperuntukkan. Segmen yang beku sepenuhnya dihadkan kepada satu bingkai,
manakala segmen tidak beku bersaing untuk mendapatkan baki bajet. Apabila bilangan sempadan
melebihi bilangan bingkai, liputan garis masa seragam dikekalkan supaya potongan awal yang pantas
tidak dapat menyembunyikan segmen penghujung yang panjang. Sempadan adegan dalam lingkungan resolusi
analisis 1 saat daripada sempadan pembekuan digabungkan.

Penapis yang tiada, bukti cacat/kosong, ralat pengesan, atau tamat masa
praanalisis terhad menyebabkan proses diteruskan dengan dasar titik tengah seragam yang tepat. Pembatalan oleh pemanggil
atau tarikh akhir broker tidak membenarkan proses diteruskan: ia menamatkan subproses
yang sedang berjalan, menghalang pengekstrakan bingkai seterusnya, dan pepohon direktori sementara peribadi
dipadamkan dalam `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menjana fixtur FFmpeg sebenar yang deterministik
untuk penjimatan panggilan kapsyen selepas penyahduplikasian, peruntukan bajet gerakan padat,
bukti kekaburan/pendedahan/SI-TI, potongan pantas dengan bahagian penghujung yang panjang, dan positif
palsu bagi pudar beransur-ansur. Ia merekodkan masa sebenar praanalisis dan, apabila `/usr/bin/time`
tersedia, CPU proses anak dan RSS puncak. Semakan kualitinya hanyalah orakel
struktur. Kualiti model kapsyen sebenar kekal `HOLD` kerana abah-abah ini tiada
titik akhir yang dibenarkan atau penilai yang dibekukan. Penjimatan kewangan juga kekal `HOLD`
melainkan `--caption-cost-per-call-usd` memberikan anggaran positif per panggilan
yang eksplisit; skrip ini tidak pernah mereka-reka mana-mana hasil tersebut.

Setiap bingkai dihadkan kepada 4 MiB, semua bingkai mentah secara keseluruhan kepada 23 MiB, dan
respons broker yang disirikan kepada 32 MiB. Direktori sementara persendirian dipadamkan
dalam `finally`. OmniRoute tidak menyertakan FFmpeg dan tidak menerima laluan
fail boleh laku tersuai. Sebelum penjanaan kapsyen, penghubung menjalankan proses
penyahduplikasian visual yang konservatif: setiap JPEG dikecilkan kepada penimbal skala kelabu 16×16 dan
dibandingkan hanya dengan bingkai terakhir yang dikekalkan. Bagi peruntukan kapsyen yang diminta
melebihi satu bingkai, pengekstrakan menyediakan
kumpulan calon terhad sehingga dua kali peruntukan tersebut dan tidak pernah melebihi 16 bingkai.
Had yang diminta digunakan hanya selepas penyahduplikasian, dengan calon terpilih pertama dan terakhir
dikekalkan semasa pengurangan akhir apabila peruntukan sekurang-kurangnya
dua. Dasar berversi
`grayscale-16x16-mean-cells-v2` menggunakan nilai yang lebih besar antara purata delta luma dengan
nisbah sel imej kecil yang delta ternormalnya sekurang-kurangnya 0.05.
Ambang pendua ialah pemalar 0.04, yang dipilih untuk kebolehramalan dan bukannya
didedahkan sebagai tetapan masa jalan. Isyarat sekunder
berkontras tinggi ini mengekalkan gerakan kecil dan perubahan teks yang kelihatan yang boleh
terlepas dalam perbandingan berasaskan purata sahaja. Ralat pembanding atau penyahkod membenarkan pemprosesan diteruskan dan mengekalkan
liputan. Metadata output membezakan calon yang diekstrak, bingkai yang berjaya digunakan,
dan pendua visual yang digugurkan.

Bahagian video yang ditandakan secara eksplisit boleh meminta helaian kontak bercap masa.
Penghubung membina grid JPEG dengan maksimum 4 lajur dan 16 bingkai. Setiap sel 512 piksel menerapkan
cap masa sumbernya secara kekal pada jalur bawah berkontras tinggi, manakala cap masa yang sama
kekal dalam metadata teks untuk perkaitan dan audit hiliran. Saiz keseluruhan
JPEG kekal dihadkan kepada 32 MiB. Jika `sharp` tidak dapat menyahkod atau menyusun grid,
penghubung beralih kepada bingkai JPEG individu; pembatalan klien masih diteruskan
melalui operasi helaian tersebut.

Bukti untuk peningkatan status sengaja diasingkan daripada penanda aras mikro komposisi
sintetik. `scripts/perf/video-bridge-contact-sheet-eval.ts` mentakrifkan
rangka kerja ujian A/B berversikan skema untuk model penglihatan sebenar yang serasi dengan OpenAI. Ia mengukur
token yang dilaporkan penyedia, kependaman masa sebenar hujung ke hujung (termasuk penyusunan helaian),
bilangan panggilan model, dan pengekalan fakta yang ditakrifkan dalam manifes. Respons mentah model tidak
ditulis ke laporan; hanya ringkasan SHA-256 dan ID fakta yang sepadan dikekalkan.
Rangka kerja ujian ini tidak membuat panggilan rangkaian atau panggilan model berbayar melainkan `--execute-real` diberikan dan
`--model`, `OMNIROUTE_BASE_URL`, serta `OMNIROUTE_API_KEY` dikonfigurasikan. Tanpa
pelaksanaan sebenar yang eksplisit itu, keputusan boleh baca mesinnya kekal `HOLD`; ukuran
muatan/bilangan panggilan sintetik sahaja bukan bukti untuk peningkatan status.

Pemanggil boleh melampirkan tatasusunan `transcript.cues` pilihan pada bahagian video yang disokong
apabila mereka sudah memiliki teks yang sejajar. Setiap kiu mesti mengandungi `text`,
selang `start`/`end` terhingga dalam tempoh yang diperiksa, dan
`source` yang dibenarkan (`client`, `embedded`, atau `audio-bridge`); `confidence` secara lalai ialah
`1` dan mesti kekal antara `0` dengan `1`. Kiu yang benar-benar sama digabungkan.
OmniRoute tidak pernah memulakan transkripsi daripada metadata ini: kiu yang disahkan
disalin ke dalam hasil pemerihalan bersama sumber, keyakinan, dan selang, serta
dipaparkan sebagai pemerhatian tidak dipercayai bersama kapsyen bingkai. Teks yang tidak sah,
di luar julat, atau tanpa maklumat asal usul ditolak dan bukannya dicampurkan ke dalam
aliran kapsyen. Kedua-dua saluran transkrip dalam badan permintaan menormalkan
maklumat asal usul yang dibekalkan kepada `client`, termasuk label `embedded` atau `audio-bridge`
yang diisytiharkan sendiri. Hanya penyesuai milik pelayan boleh menetapkan label dipercayai tersebut melalui
argumen `trustedSource` yang hanya boleh diakses melalui kod; medan JSON permintaan tidak boleh mencapai
argumen itu. Teks transkrip kekal sebagai kandungan terbitan media yang tidak dipercayai,
tanpa mengira asal usulnya, dan tidak boleh sekali-kali menentukan pemberian kuasa.

Pemanggil lanjutan boleh menyediakan trek `audioTranscript` untuk video yang sama;
ia dianggap sebagai teks yang disediakan klien, bukan bukti transkripsi pelayan.
Titik penggabungan menjalankan pemerhatian visual dan audio di bawah
satu had masa dan isyarat pembatalan, menyusunnya pada garis masa bersama, menggabungkan
pendua yang benar-benar sama, dan melaporkan hasil separa apabila hanya satu pihak berjaya.
`audioTranscript` yang tidak sah menyebabkan pemprosesan beralih kepada hasil separa tersebut — pemerihalan
visual dikekalkan dan cabang audio merekodkan kod kegagalan yang disanitasi —
dan bukannya menggagalkan keseluruhan video. Ketersediaan setiap cabang, penanda hasil separa,
dan kod kegagalan yang disanitasi dikekalkan dalam hasil pemerihalan, dalam
metadata kawalan perlindungan (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam pembilang
penggabungan penghubung. Laluan Video Bridge lalai tidak memanggil penukaran pertuturan kepada teks
atau memuat turun salinan media kedua; tanpa trek eksplisit itu, ia kekal
untuk video sahaja.

**Pengekalan transkrip (#12150 P1).** Ini terpakai secara automatik apabila
Video Bridge (yang penggunaannya sendiri memerlukan persetujuan) memaparkan kiu transkrip — tiada bendera
pengekalan yang berasingan. Apabila sesuatu permintaan memaparkan sebarang kiu transkrip (`transcript`
yang diisytiharkan oleh pemanggil atau `audioTranscript` yang digabungkan), mekanisme perlindungan menandakannya sebagai
`videoBridgeObserved` dan menghasilkan salinan bayangan perihalan video yang telah disunting —
paparan yang serupa tetapi badan teks bebas setiap kiu digantikan dengan
`[redacted-video-transcript]`, dibina dengan menggantikan medan kiu berstruktur
sebelum rentetan dipasang (bukan dengan menghuraikan teks yang telah diratakan, maka tiada kandungan
kiu — sama ada bersifat adversarial atau biasa, termasuk badan yang mengandungi `]` seperti
`[inaudible]`/`[music]` — boleh kekal). Badan permintaan log panggilan yang disimpan
menggantikan setiap bahagian teks yang berasal daripada video dengan salinan bayangan yang telah disunting itu, dipadankan berdasarkan
kesamaan kandungan; penambat `fullText` dibaca semula daripada muatan akhir mekanisme perlindungan
prapanggilan, supaya padanan masih berjaya selepas mekanisme perlindungan rantaian yang berikutnya (penopeng PII dan
bukti kelayakan, keutamaan 10/95) menulis semula teks perihalan di tempatnya dan
selepas suntikan prom sistem/serahan/memori membentuk semula tatasusunan mesej. Badan
yang dihantar ke hulu kepada model tidak berubah. Permintaan yang diperhatikan juga tidak mengisi
sebarang Memory kekal (pengekstrakan yang berasal daripada permintaan dan respons kedua-duanya dilangkau),
maka balasan model itu sendiri tidak dapat mengulang teks transkrip ke dalam Memory.

**Medan video mentah (#12430).** Apabila jambatan didayakan dan sokongan video natif tidak diketahui atau tiada, medan `transcript`/`audioTranscript` yang ditakrifkan turut mengaktifkan `videoBridgeObserved`, walaupun selepas kegagalan perihalan atau had `maxVideos`. `null` dan rentetan kosong turut dikira; medan yang tiada dan metadata bukan video tidak dikira. Salinan yang dikekalkan menyunting medan ini atau menggugurkan permintaan, dan cache/Memory dipintas.

Pada laluan sandaran tersebut, kiu pemanggil yang sah menjadi bahagian `text`/`input_text`
yang disokong, bukannya medan penyedia yang tidak standard. Kedua-dua trek yang dibekalkan dalam permintaan
kekal sebagai pemerhatian `client` yang tidak dipercayai, dengan amaran jelas bahawa video
tidak diperihalkan dan cap masa tidak disahkan berdasarkan media. Had sedia ada
sebanyak 256 kiu/64 KiB secara keseluruhan serta had setiap kiu terpakai merentas kedua-dua trek secara bersama;
cap masa mesti mematuhi had maksimum broker sebanyak 600 saat dan sebarang tetingkap fokus
yang dibekalkan. Trek yang tidak sah dibuang, bukan dimajukan sebagai teks sewenang-wenangnya; trek
pasangan yang sah masih boleh digunakan melainkan had gabungannya dilampaui. Medan null/kosong
tidak menambahkan teks. Tiada pengambilan media atau transkripsi ditambahkan oleh laluan sandaran ini.
Medan sambungan transkrip dibuang daripada pembawa video sandaran dan
objek `video_url`/`source` miliknya. Senarai dibenarkan format penghantaran OpenAI kekal ketat; pembawa video
yang sokongan natifnya tidak diketahui kekal tersedia dan sasaran yang diketahui hanya menyokong teks mengekalkan penanda selamat.
Salinan bayangan tersunting yang berstruktur melindungi teks transkrip yang ditambahkan, manakala
permintaan asal milik pemanggil kekal tidak berubah. Sasaran yang mempunyai sokongan natif dan
jambatan yang dinyahdayakan mengekalkan tingkah laku pintasan sedia ada.

Salinan tambahan yang dikekalkan menggunakan isyarat permintaan diperhatikan yang sama. Syot kilat mentah
permintaan klien sebelum mekanisme perlindungan, permintaan tertunda dalam memori, dan log awal
permintaan yang ditolak menggantikan medan transkrip dalam bahagian video secara berstruktur;
prom rentetan yang disintesis oleh peringkat saluran pemprosesan dan serahan konteks disunting
pada titik simpanan badan permintaan. Penanda `video_content_removed` yang disimpan
menyebabkan sambungan `previous_response_id` gagal secara tertutup dan bukannya membina semula
teks yang sengaja dibuang. Jika permintaan yang diperhatikan kehilangan
salinan bayangan tersunting bagi setiap bahagiannya sebelum pengelogan, atau walaupun satu daripada beberapa salinan bayangan video
gagal dipadankan selepas perubahan permintaan yang berikutnya, badan permintaan yang dikekalkan
digugurkan sepenuhnya dan bukannya mengekalkan transkrip yang hanya disunting sebahagiannya.

Bagi permintaan yang diperhatikan, respons model mungkin memetik mana-mana bahagian
transkrip tanpa sempadan kiu berstruktur. Oleh itu, `responseBody` dalam log panggilan
yang disimpan digantikan dengan penanda pengguguran; artifak
saluran pemprosesan terperinci (yang boleh merangkumi badan hulu/klien dan cebisan strim)
tidak dikekalkan. Cache semantik, idempotensi, dan main semula penaakulan memintas
bacaan dan penulisan untuk permintaan tersebut. Permintaan kepada penyedia dan respons yang kelihatan kepada klien
kekal tidak berubah. Bait keepalive awal dikeluarkan daripada penimbal
sementara apabila artifak terperinci digugurkan. Amaran EventStream cacat format
Kiro hanya melaporkan bilangan bait muatan, bukan kandungannya atau ralat mentah
penghurai JSON.
Ini bukan dakwaan bahawa setiap diagnostik penyedia/pemalam lain yang tidak berkaitan telah
diaudit; semakan menyeluruh yang lebih luas terhadap titik simpanan data dikekalkan dijejak dalam #11658.

Kitar hayat dalaman `/api/modality-bridge/video/drilldown` ialah substrat cache berasingan
yang menggunakan loopback/pengesahan token. Setiap operasi turut memerlukan
ID prinsipal legap yang kanonik. Sebelum pemanggil produksi didayakan, pemanggil itu mesti
menerbitkan ID tersebut daripada penyewa yang disahkan dan tidak boleh sekali-kali memajukan nilai
yang dipilih oleh klien. Kekunci cache mengikat prinsipal itu pada ID sesi dan
rujukan video yang kanonik, menyimpan hanya kekunci terbitan SHA-256 mereka, dan mengehadkan skop bacaan
serta pemadaman kepada prinsipal yang sama. Cache menyimpan paling banyak 16 bingkai JPEG
terbitan bagi setiap entri, menamatkan tempoh sahnya selepas sepuluh minit, dan menyokong bacaan
`start`/`end` berbatas atau pemadaman sesi secara eksplisit.

Setiap prinsipal dihadkan kepada 16 entri dan 64 MiB data JPEG kanonik. Had
tersebut adalah berasingan daripada had maksimum global sebanyak 64 entri/256 MiB: tekanan kuota prinsipal
menyingkirkan hanya entri prinsipal itu yang paling lama tidak digunakan sebelum penyingkiran
LRU global dipertimbangkan. Entri yang tamat tempoh dibersihkan daripada pengiraan prinsipal dan
global apabila terdapat aktiviti cache, manakala pembatalan dan kegagalan pengesahan tidak
memuktamadkan penggantian separa.

Cache menolak Base64 bukan kanonik, padding berlebihan, media bukan JPEG, JPEG yang cacat atau
terpotong, serta JPEG yang menghasilkan amaran semasa penyahkodan keseluruhan imej `sharp`
yang dihadkan. Ia mengekod semula setiap imej yang diterima sebagai JPEG kanonik, memperoleh lebar dan tinggi
daripada bait yang dinyahkod dan bukannya mempercayai medan pemanggil, serta membuang sebarang
bait poliglot di hujung dan bukannya mengekalkannya. Hanya penimbal termampat kanonik yang dihadkan
dikira dalam kedua-dua kuota. Had JSON pada saluran penghantaran merangkumi overhed Base64 untuk had maksimum
input dinyahkod sebanyak 32 MiB. Setiap
hasil terbitan yang disimpan merekodkan format/resolusi JPEG yang telah disahkan, dasar pensampelan,
versi penerbitan, masa penciptaan, hash kandungan yang dikira pelayan, dan rujukan
induk yang dihash berserta hash kandungan induk daripada pemanggil yang dipercayai. Pembatalan diperiksa
antara fasa penyahkodan/penghashan tak segerak sebelum komit cache atomik.

Fasa ini belum menghubungkan penghasil produksi kepada laluan dan tidak
menyediakan pemilihan varian berbilang resolusi. Oleh itu, laluan permintaan Video Bridge yang
telus tidak menanggung kerja tambahan, manakala penerbitan prinsipal yang terikat kepada penyewa dan
kitar hayat berbilang resolusi FU-08 yang lengkap kekal sebagai kerja susulan yang dinyatakan secara jelas,
bukannya didokumenkan sebagai tingkah laku yang telah lengkap.

Bingkai diberikan kapsyen secara berurutan menggunakan model Video yang dikonfigurasikan. Penggantian
Video yang kosong mewarisi tetapan Vision; jika kedua-duanya kosong, penghala automatik
Vision memilih model berkeupayaan penglihatan yang berkuat kuasa. Kapsyen yang berjaya
menggantikan bahagian asal dengan awalan stabil `[Video description:` yang turut
menandakan teks sebagai pemerhatian tidak dipercayai yang terbit daripada media dan mengarahkan model
hiliran supaya tidak mengikuti arahan yang ditemui dalam media. Kekunci cache kapsyen bingkai
merangkumi bait JPEG, prom, cap masa dan model yang berkuat kuasa; hanya kapsyen yang berjaya
dicachekan. Entri cache mengekalkan model penghasil sebenar yang berjaya,
termasuk model sandaran; jambatan melaporkan `mixed` apabila bingkai yang berlainan
dihasilkan oleh model yang berlainan. Hit cache menggunakan semula identiti penghasil tersebut
dan bukannya melabelkannya semula sebagai pelan penghalaan yang diminta. Cache hasil keseluruhan video
dikuncikan berdasarkan setiap input yang mengubah output — prom, model yang berkuat kuasa,
dasar pensampelan, bilangan bingkai, mod analisis semantik, cap jari SHA-256
bagi petunjuk fokus yang dinormalkan, tetingkap fokus, `transcript`,
`audioTranscript` dan bendera helaian kontak — maka perubahan pada mana-mana
dimensi tersebut menghasilkan cache miss, bukannya penggunaan semula data lapuk. Versi dasar
penyahduplikasian visual, ambang dan bilangan bingkai calon yang dihadkan turut dinyatakan secara jelas dalam
kekunci dan metadata cache hasil; oleh itu, perubahan dasar tidak boleh menggunakan semula
huraian keseluruhan video yang lapuk. Metadata cache hasil v4 menyimpan mod dan
cap jari, bukan tugasan mentah pengguna. Metadata kawalan keselamatan melaporkan kedua-dua
mod analisis yang diminta dan yang berkuat kuasa; mod `focused` yang diminta tanpa
teks pengguna yang boleh digunakan dilaporkan sebagai `full` yang berkuat kuasa.

Kawalan keselamatan mengekstrak setiap bahagian video yang disokong tetapi menghuraikan tidak lebih daripada
`modalityBridgeVideoMaxVideos`. Bagi sasaran yang terbukti mempunyai
`supportsVideo === false`, video yang gagal dan yang melebihi had menjadi penanda teks selamat
yang jelas supaya tiada video mentah kekal. Apabila keupayaan tidak diketahui, bahagian tersebut
mengekalkan pembawa videonya; sebarang transkrip sandaran mengikuti penukaran teks
terhad di atas. Sasaran dengan `supportsVideo === true` memintas jambatan.
Isyarat pembatalan permintaan klien disebarkan melalui muat turun, baris gilir broker,
subproses dan panggilan kapsyen; pembatalan menghentikan pemprosesan antara video dan tidak sekali-kali membenarkan
media mentah diteruskan apabila berlaku kegagalan.

Tetapan masa jalan disimpan dalam DB dan disahkan oleh Zod:

| Kekunci                             | Lalai       | Julat / tingkah laku                                                                                               |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Masa jalan pilihan, perlu diaktifkan secara nyata                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mengekalkan kapsyen umum; `focused` menggunakan konteks pengguna terkini yang dihadkan dan tidak dipercayai |
| `modalityBridgeVideoModel`          | `""`        | Mewarisi model Vision Bridge                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` berkadar; kegagalan pengesan beralih kepada `uniform`               |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                     |

Nilai tamat masa Video legasi yang disimpan melebihi 120 saat dihadkan kepada
tarikh akhir broker; penulisan tetapan baharu yang melebihi had tersebut ditolak.
`GET /api/modality-bridge/video/runtime` memerlukan pengesahan bahawa permintaan berasal secara setempat melalui gelung balik dengan cap yang dipercayai
sebelum pengesahan identiti atau pemeriksaan masa jalan, kemudian memerlukan pengesahan
pengurusan. Ia hanya mengembalikan `available`, versi FFmpeg/ffprobe yang telah disanitasi, dan sebab
tetap apabila masa jalan tidak tersedia. Titik akhir pengekstrakan dalaman bukan
API muat naik awam: baris gilir yang tepu mengembalikan `503` berserta `Retry-After`, sambungan pemanggil
yang terputus mengembalikan `499`, dan tarikh akhir broker yang tetap mengembalikan `504`. Respons yang ditukar menambahkan
`video->text;model=<visionModel>;parts=<videos>` pada pengepala pusat
`x-omniroute-modality-bridge` tanpa membuang segmen Vision atau Audio.

### Penopeng PII (`piiMasker.ts`)

Berjalan pada **kedua-dua** peringkat.

- **`preCall`** mengklon muatan, menelusuri `system`, `messages`, `input`, dan
  `prompt` (termasuk item rentetan biasa), dan menggunakan `processPII()` (daripada
  `@/shared/utils/inputSanitizer`) pada medan rentetan `content`/`text`. Apabila
  `PII_REDACTION_ENABLED=true`, PII yang dikesan disunting keluar daripada
  muatan keluar. Ini tidak bergantung pada `INPUT_SANITIZER_MODE` (yang hanya mengawal
  dasar suntikan prom). Apabila penyuntingan keluar dimatikan, panggilan merekodkan bilangan pengesanan
  tanpa menulis semula kandungan.
- **`postCall`** mengklon respons secara mendalam, menjalankan `sanitizePIIResponse()` serta
  penyamar untuk struktur API Responses (`maskResponsesOutput` — merangkumi
  `output_text` dan `output[].content[].text`). Jika sebarang penyuntingan keluar berlaku,
  respons yang diubah suai menggantikan respons asal.

Mekanisme perlindungan ini tidak pernah menyekat; ia hanya menambahkan anotasi (`meta.detections`,
`meta.redacted`) atau menulis semula.

#### Pemilihan mengikut jenis, corak tersuai dan pembilang pengesanan

**Papan Pemuka → Tetapan → Keselamatan → Penyamaran PII** memilih _apa_ yang disamarkan. Ia
tidak menghidupkan penyamaran: itu masih dikawal oleh `PII_REDACTION_ENABLED` (permintaan) dan
`PII_RESPONSE_SANITIZATION` (respons + SSE), yang kedua-duanya dimatikan secara lalai.

- **Pemilihan mengikut jenis** — ID terbina dalam disenaraikan dalam
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Jika tidak ditetapkan, semua
  jenis dipilih (tingkah laku sebelum tetapan ini wujud). Corak `ssn_us` enjin
  permintaan dipetakan kepada `ssn`. Templat (Minimum, Standard, Kewangan,
  Brazil, AS, Penuh) hanya mengisi kotak semak dalam UI.
- **Corak tersuai** — sehingga 20 corak regex atau kad bebas (`*` = sehingga 64
  aksara bukan ruang putih, `?` = satu). Padanan menjadi `[CUSTOM_REDACTED]`.
  Setiap corak diproses melalui `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maksimum 500 aksara, bendera terhad
  kepada `g i m s u`, mesti boleh dikompil, mesti lulus `safe-regex` (penjejakan
  balik yang melampau), dan tidak boleh sepadan dengan rentetan kosong atau pemegang tempat penyuntingan keluar.
  Corak yang gagal ditolak apabila disimpan dan apabila diuji, manakala baris tersimpan
  yang gagal dilangkau pada masa jalan dan bukannya dikompil. Corak tersuai hanya
  dijalankan semasa penyamaran dihidupkan.
- **Pembilang pengesanan** — bilangan mengikut jenis (tidak sekali-kali nilai yang sepadan), disimpan dalam
  memori dan ditetapkan semula apabila dimulakan semula (`src/lib/pii/piiDetectionStats.ts`). Bilangan ini hanya
  bertambah semasa penyamaran dihidupkan.

Tetapan disimpan dalam jadual `key_value` (ruang nama `pii_settings`,
`src/lib/db/piiSettings.ts`) dan dibaca melalui cache 1 s. API:

| Kaedah | Laluan                   | Tujuan                                                                  |
| ------ | ------------------------ | ----------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Keadaan bendera, `enabledTypes`, `customPatterns`, pembilang pengesanan |
| `PUT`  | `/api/settings/pii`      | Gantikan `enabledTypes` (`null` = semua) dan/atau `customPatterns`      |
| `POST` | `/api/settings/pii/test` | Uji satu corak terhadap sampel maksimum 8 KB tanpa menyimpan apa-apa    |

Ketiga-tiganya memerlukan pengesahan pengurusan dan mengesahkan badan dengan Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Suntikan Prom (`promptInjection.ts`)

Mengesan struktur berniat jahat dalam kandungan yang dibekalkan pengguna dan menguatkuasakan
dasar yang dikonfigurasikan. Tingkah laku ditentukan oleh pemboleh ubah persekitaran dan pilihan
pembina:

| Tetapan        | Pemboleh ubah persekitaran                                                                             | Lalai  | Kesan                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Didayakan      | `INPUT_SANITIZER_ENABLED`                                                                              | `true` | Apabila `false`, mekanisme perlindungan memintas pemprosesan.                                                                                                                                                |
| Mod            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn` | Dasar suntikan: `block`, `warn`, atau `log`. (`redact` diterima untuk keserasian ke belakang tetapi **tidak** membuang teks suntikan; penulisan semula PII permintaan dikawal oleh `PII_REDACTION_ENABLED`.) |
| Ambang sekatan | Pilihan `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Tahap keterukan minimum yang diperlukan untuk menyekat. Tahap sederhana hanya diperhatikan secara lalai.                                                                                                     |

**Keutamaan mod** (`getMode`): `options.mode` pemanggil →
**pengatasan bendera ciri DB** `INJECTION_GUARD_MODE` (Papan Pemuka → Tetapan →
Bendera Ciri) → pemboleh ubah persekitaran `INJECTION_GUARD_MODE` → pemboleh ubah persekitaran `INPUT_SANITIZER_MODE` →
`warn`. Oleh itu, pengatasan papan pemuka mengatasi pemboleh ubah persekitaran, maka UI Bendera
Ciri mengawal mekanisme perlindungan yang sedang berjalan secara langsung (tanpa mula semula). Pembacaan DB mempunyai mekanisme sandaran selamat:
jika ralat berlaku, mekanisme perlindungan kembali kepada tingkah laku berasaskan pemboleh ubah persekitaran, dan apabila tiada
pengatasan ditetapkan, tingkah lakunya sama seperti penentuan berasaskan pemboleh ubah persekitaran sahaja.

Sumber pengesanan:

1. `sanitizeRequest()` daripada `@/shared/utils/inputSanitizer` (set pengesan
   dikongsi yang digunakan di tempat lain dalam saluran pemprosesan).
2. `DEFAULT_GUARD_PATTERNS` terbina dalam (pada masa ini `system_override_inline` dan
   `markdown_system_block`, kedua-duanya dengan tahap keterukan `high`).
3. `customPatterns` pilihan yang dihantar melalui pilihan pembina (rentetan, regex,
   atau rekod `{ name, pattern, severity }`).

Apabila `mode === "block"` **dan** sekurang-kurangnya satu pengesanan mencapai ambang
keterukan, `preCall` mengembalikan `{ block: true, message: "Request rejected:
suspicious content detected" }`. Dalam mod `warn`/`log`, pengadang keselamatan merekodkan log tetapi
membenarkan panggilan. Fungsi pembantu bersama `evaluatePromptInjection()` turut dieksport
untuk pemanggil yang perlu menilai prom tanpa melalui registri.

**Had imbasan (v3.8.20):** pengesan hanya memeriksa **16 KB pertama** daripada
teks prom yang digabungkan — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bait) dalam
`src/shared/utils/inputSanitizer.ts`. Kedua-dua `detectInjection()` dan
`evaluatePromptInjection()` melakukan `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum menjalankan
gelung corak. Arahan suntikan terletak berhampiran bahagian atas input, jadi ini
mengehadkan penggunaan CPU/GC oleh regex pada muatan berukuran ratusan KB tanpa melemahkan pengesanan (rujuk
#3932, #4041).

### Penopeng Bukti Kelayakan (`credentialMasker.ts`)

Berjalan pada **kedua-dua** peringkat, paling akhir dalam rantaian lalai (keutamaan `95`). Menyunting keluar
corak kunci API / token rahsia yang diketahui umum daripada muatan keluar (kandungan
mesej, argumen panggilan alat, hasil alat) **dan** respons penyedia, supaya
bukti kelayakan yang ditampal ke dalam prom (atau diulang semula oleh hasil alat) tidak dibocorkan
kepada penyedia huluan atau kembali kepada klien.

- **Hanya melalui pengaktifan ikut serta**, mengikut konvensyen yang sama seperti penyuntingan keluar PII (berkaitan dengan Peraturan Wajib #20):
  dinyahdayakan melainkan `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Apabila dinyahdayakan, pengadang keselamatan tidak melakukan apa-apa —
  ia tidak pernah menyekat dan tidak pernah menulis semula.
- `redactCredentials()` menelusuri keseluruhan pepohon muatan/respons (`walkValue()`,
  selamat daripada pencemaran prototaip, selamat daripada kitaran melalui `WeakSet`) dan menggantikan padanan dengan
  pemegang tempat `[REDACTED:<type>]`, dengan mengklon hanya cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` meliputi kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  awan (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci peribadi / JWT,
  rentetan sambungan yang mengandungi bukti kelayakan (`mongodb://user:pass@...`, dll.), dan
  corak nilai pengepala `Authorization`/`x-api-key`/`api-key`/`apikey`
  generik. Kunci berbentuk pengepala (`authorization`, `x-api-key`, `api-key`,
  `apikey`) disunting keluar secara berstruktur (nilai sahaja, awalan skema seperti
  `Bearer `/`Basic ` dikekalkan) dan bukannya melalui regex teks generik.
- Pengadang keselamatan tidak pernah menyekat; ia hanya menulis semula (`modifiedPayload` /
  `modifiedResponse`) dan menambahkan anotasi (`meta.credentialsRedacted`, `meta.count`).

Perlindungan regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Asas (`base.ts`)

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
  block?: boolean; // true menghentikan rantaian serta-merta
  message?: string; // dipaparkan apabila menyekat
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis semula permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis semula respons
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

Pengadang menandakan "tiada perubahan" dengan mengembalikan sama ada `void`, `{}`, atau
`{ block: false }`. Mengembalikan `modifiedPayload`/`modifiedResponse` menggantikan
nilai yang mengalir melalui rantaian untuk pengadang seterusnya.
`signal?: AbortSignal` membawa kitar hayat pemanggil ke dalam pengadang. Pembatalan permintaan ialah pengecualian gagal-terbuka yang disengajakan: jambatan media menghentikan kerja dan melakukan pembersihan tanpa memulihkan media mentah kepada sasaran yang diketahui tidak menyokongnya.

## Registri (`registry.ts`)

Singleton `guardrailRegistry` menyediakan:

- `register(guardrail)` — menambah (atau menggantikan berdasarkan nama yang dinormalkan) pengadang dan
  menyusun semula mengikut `priority` secara menaik.
- `clear()` / `list()` — fungsi pembantu pentadbiran.
- `runPreCallHooks(payload, context)` — mengulangi pengadang aktif, menyalurkan
  muatan melalui `modifiedPayload`, dan berhenti pada `block: true` yang pertama.
- `runPostCallHooks(response, context)` — aliran yang sama pada bahagian respons.
- `resetGuardrailsForTests({ registerDefaults })` — mengosongkan keadaan dan secara pilihan
  mendaftarkan semula pengadang lalai untuk pengasingan ujian yang bersih.

Kedua-dua pelaksana mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
dengan `results` berupa tatasusunan rekod `GuardrailExecutionResult` yang merangkumi
medan `blocked`, `skipped`, `modified`, `error`, dan `meta` bagi setiap pengadang,
yang berguna untuk penjejakan.

### Menyahdayakan Pengadang bagi Setiap Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` mengumpulkan
senarai nama pengadang tanpa pendua yang perlu dilangkau untuk permintaan
semasa. Terdapat lima saluran, yang dibaca mengikut urutan ini dan digabungkan menjadi satu senarai
(kemunculan pertama diutamakan semasa penyahduplikasian):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` dalam badan permintaan (peringkat teratas)
3. `metadata.disabledGuardrails` dalam badan permintaan (hanya apabila `metadata` ialah objek)
4. Pengepala `x-omniroute-disabled-guardrails`
5. Pengepala legasi `x-disabled-guardrails`

Kesemua lima saluran digabungkan, termasuk kedua-dua pengepala: menghantar kedua-dua
`x-omniroute-disabled-guardrails` dan `x-disabled-guardrails` melangkau gabungan
senarai masing-masing, dan pengepala moden yang kosong tidak lagi menyembunyikan pengepala legasi
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), dibetulkan dalam
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Nilai boleh berupa tatasusunan rentetan atau rentetan yang dipisahkan koma; ruang di awal dan akhir nama dibuang
dan nama dinormalkan kepada kebab-case huruf kecil (`pii_masker` → `pii-masker`), manakala entri
kosong digugurkan. Hasilnya dihantar melalui `context.disabledGuardrails`
kepada registri, yang melangkau pengadang yang sepadan (`skipped: true` dalam `results`).

Senarai penyahdayaan hanya mempengaruhi **registri**. Mod `block` suntikan prom ialah
sempadan wajib: perisian tengah pengadang suntikan
(`src/middleware/promptInjectionGuard.ts`) memanggil `evaluatePromptInjection()`
tanpa sebarang senarai penyahdayaan yang dikawal pemanggil (panggilan
`resolveDisabledGuardrails({ body })` yang tidak lagi berguna dan pernah dibuatnya telah dibuang dalam
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), maka permintaan
yang menyahdayakan `prompt-injection` tetap ditolak dalam mod `block`. Ini memang
disengajakan dalam reka bentuk. Saluran penyahdayaan dikawal oleh pemanggil (badan permintaan,
metadata, pengepala), dan pemanggil tidak boleh dibenarkan mematikan kawalan
keselamatan yang ditetapkan oleh pengendali
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Penggabungan pengepala
daripada [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
hanya mengubah pengadang registri yang dilangkau; ia tidak membolehkan klien
memintas perisian tengah. Dasar pengadang wajib bagi setiap kunci dan setiap kumpulan
dijejaki dalam RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Lihat [Liputan dan had](#coverage-and-limits).

## Turutan Pelaksanaan

Bagi setiap permintaan yang melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts` (laluan keluarga sembang yang disenaraikan di bawah
[Liputan dan had](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` membina senarai langkau daripada kunci API, badan,
   dan pengepala.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan pagar kawalan mengikut
   turutan keutamaan menaik:
   - Pagar kawalan yang dinyahdayakan direkodkan sebagai `skipped`.
   - `preCall` setiap pagar kawalan boleh menulis semula muatan melalui `modifiedPayload`.
   - `block: true` yang pertama menghentikan rantaian serta-merta dan pengendali mengembalikan
     respons penolakan pagar kawalan.
3. Muatan (yang mungkin telah ditulis semula) diteruskan ke penghalaan kombo dan
   penghantaran ke hulu.
4. **Bukan penstriman sahaja:** selepas respons dihimpunkan,
   `guardrailRegistry.runPostCallHooks(...)` menjalankan rantaian yang sama pada
   respons. `block: true` di sini menggugurkan respons hulu dan mengembalikan HTTP 400. Respons berstrim melangkau langkah ini sepenuhnya.

Pagar kawalan yang melemparkan pengecualian direkodkan dengan `error: <message>` dan dilog melalui
`logger.warn`, tetapi rantaian diteruskan — kegagalan membenarkan pemprosesan diteruskan, mengikut reka bentuk.

## Liputan dan had

Registri pagar kawalan disepadukan ke dalam saluran pemprosesan sembang sahaja. Had ini
ditetapkan oleh `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` dan
`tests/unit/guardrail-pipeline-characterization.test.ts`; kemas kini ujian tersebut
secara terancang apabila tingkah laku berubah.

### Tempat cangkuk dijalankan

| Cangkuk / kawalan                          | Dijalankan pada                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                          | Permintaan yang dikendalikan oleh `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (dan `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, dan proksi sembang Telegram. Juga titik akhir ujian papan pemuka `/api/guardrails/test`. Sekatan prapanggilan mengembalikan HTTP 400. |
| `runPostCallHooks`                         | Respons sembang **bukan penstriman** sahaja (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Respons berstrim tidak pernah sampai kepadanya.                                                                                                                                                                                                                                                                                                      |
| PII penstriman                             | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), disalurkan dalam `streamingPipeline.ts` apabila `PII_RESPONSE_SANITIZATION` dihidupkan. Ia bukan pagar kawalan, jadi saluran penyahdayaan tidak menjejaskannya.                                                                                                                                                                                                                            |
| Perisian tengah pengawal suntikan (legasi) | Setiap laluan `/v1` yang mengandungi prom, termasuk keluarga sembang (lihat [liputan laluan](#injection-guard-route-coverage--red-team-phase-8--block-d)). Suntikan prom sahaja.                                                                                                                                                                                                                                                                         |

### Perkara yang tidak diliputi

- **Laluan media, pembenaman dan data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) tidak pernah sampai ke registri. Tiada
  penyamaran PII, penyamaran kelayakan atau jambatan modaliti dijalankan di situ. Satu-satunya
  semakan pada laluan ini ialah perisian tengah pengawal suntikan legasi.
- **Respons berstrim** tidak mendapat pagar kawalan pascapanggilan: tiada `pii-masker` atau
  `credential-masker` pascapanggilan, dan tiada sekatan pascapanggilan. Hanya transformasi PII
  penstriman digunakan (apabila `PII_RESPONSE_SANITIZATION` dihidupkan). Kelayakan
  yang dipaparkan semula dalam respons berstrim tidak disunting keluar.
- **Saluran penyahdayaan berbanding perisian tengah (mengikut reka bentuk):** perisian tengah menilai
  suntikan prom dengan panggilannya sendiri kepada `evaluatePromptInjection()`, tanpa
  menyerahkan sebarang senarai penyahdayaan yang dikawal pemanggil. Mod `block` ialah sempadan
  wajib yang tidak boleh dipintas oleh penyahdayaan yang dikawal pemanggil, termasuk pada laluan keluarga sembang
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Menyahdayakan
  `prompt-injection` hanya melangkau pagar kawalan registri.

### Komponen yang menerima respons sebelum pascapanggilan

Pada laluan bukan penstriman, turutannya ialah: pengekstrakan memori → pelaksanaan alat
terbina dalam → pagar kawalan pascapanggilan → keluar akibat sekatan pascapanggilan → penyimpanan cache semantik.

- **Pengekstrakan memori** dan **pelaksanaan alat** menerima respons sebelum kawalan keselamatan
  pascapanggilan dapat menulis semula atau menyekatnya. Sejak
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), pengekstrakan
  memori memproses teks yang diekstrak melalui `sanitizePII` apabila
  `PII_RESPONSE_SANITIZATION` diaktifkan (untuk penstriman dan bukan penstriman), tetapi
  respons yang kemudiannya disekat oleh kawalan pascapanggilan tetap telah disalurkan kepada memori dan
  alat.
- **Cache semantik** menyimpan respons selepas kawalan pascapanggilan, maka ia menyimpan
  respons yang telah ditulis semula, dan respons yang disekat tidak pernah dicache. Entri cache
  dikunci mengikut setiap kunci API.

## Konfigurasi

Pemboleh ubah persekitaran yang dibaca oleh mekanisme perlindungan terbina dalam:

| Pemboleh ubah                         | Digunakan oleh         | Kesan                                                                                                        |
| ------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Tetapkan kepada `false` untuk melumpuhkan pengesanan sepenuhnya.                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Dasar suntikan: `warn`, `block`, atau `log`. Nilai legasi `redact` tidak menulis semula teks suntikan.       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Mod untuk pelindung suntikan; juga penanda ciri DB yang **mengatasi** pemboleh ubah persekitaran (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Tahap keterukan minimum yang ditolak oleh `MODE=block`: `high` (lalai), `medium`, atau `low`.                |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Alias legasi untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Apabila `true`, PII dalam permintaan disunting keluar (tidak bergantung pada mod suntikan).                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (hiliran) | Mengawal tingkah laku penyamar pada bahagian respons.                                                        |

Mekanisme perlindungan Modality Bridge membaca konfigurasi masa jalan daripada stor tetapan
yang disokong DB (`getSettings()`), bukan pemboleh ubah persekitaran. Kunci utama Vision ialah
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, dan
`modalityBridgeCacheMaxEntries`. Kunci legasi
`visionBridge*` hanya diterima sebagai mekanisme sandaran bacaan satu kitaran
yang didokumenkan; penulisan melalui papan pemuka menggunakan kunci utama. Nilai lalai dan penyelesai sandaran
berada dalam `src/shared/constants/modalityBridgeDefaults.ts`, dengan pemalar
legasi dikekalkan dalam `src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, serta tetapan
`modalityBridgeCache*` yang dikongsi. Audio tidak mempunyai mekanisme sandaran kunci legasi kerana
kunci ini diperkenalkan bersama skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan
`modalityBridgeVideoTimeout`, serta tetapan `modalityBridgeCache*` yang dikongsi.
Ia dilumpuhkan secara lalai kerana FFmpeg/ffprobe ialah kebergantungan operasi
pilihan dan penjanaan kapsyen bingkai menambah kependaman serta kos model.

## Kawalan Perlindungan Tersuai

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

Langkah-langkah:

1. Cipta `src/lib/guardrails/myGuardrail.ts` yang melanjutkan `BaseGuardrail`.
2. Laksanakan `preCall` dan/atau `postCall`.
3. Daftarkan semasa import (tambahkan melalui `registerDefaultGuardrails`) atau
   panggil `guardrailRegistry.register(...)` semasa masa jalan — registri menggantikan
   mana-mana kawalan perlindungan terdahulu yang mempunyai nama ternormal yang sama.
4. Tambahkan ujian di bawah `tests/unit/` (contoh sedia ada:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` antara ujian untuk bermula dengan keadaan yang diketahui.
Hantarkan `{ registerDefaults: false }` untuk bermula dengan registri kosong dan
daftarkan hanya kawalan perlindungan yang sedang diuji. Vision Bridge menerima suntikan
kebergantungan (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge mendedahkan titik
suntikan yang setara untuk tetapan, keupayaan, pemilihan model STT, semakan
kelayakan, dan transkripsi. Oleh itu, ujian boleh menguji kedua-dua aliran tanpa akses DB
atau rangkaian.

## Lihat Juga

- `src/lib/guardrails/` — pelaksanaan
- `src/shared/utils/inputSanitizer.ts` — pengesan dikongsi yang menyokong
  pengesanan suntikan prom dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — tetapan lalai Vision Bridge dan
  senarai model yang dipaksa menggunakan bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — tetapan lalai masa jalan Vision/Audio yang dikongsi
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogon (pemutus litar, tempoh bertenang)
- `docs/reference/ENVIRONMENT.md` — rujukan penuh pemboleh ubah persekitaran

## Liputan laluan kawalan suntikan & pasukan merah (Fasa 8 · Blok D)

Kawalan suntikan (`createInjectionGuard` / `withInjectionGuard`) meliputi semua laluan
yang menerima prom pengguna. Ia mematuhi `INJECTION_GUARD_MODE` (lalai `warn` = log sahaja;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis            | Laluan                                                                                                                                               | Mod lalai |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Teks (sedia ada) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn      |
| Generatif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn      |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn      |

Pengekstrakan teks (`extractMessageContents`) meliputi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Pasukan merah (setiap malam, `nightly-llm-security.yml`):** promptfoo mengesahkan bahawa setiap laluan menyekat
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan prob (dilangkau jika tiada rahsia).
`moderations` disertakan demi konsistensi. Mod sekatan ialah sempadan wajib: `evaluatePromptInjection()`
mengabaikan senarai penyahaktifan bagi setiap permintaan yang dihantar oleh perisian tengah kepadanya, jadi `disabledGuardrails`
**tidak** mengecualikan mana-mana laluan daripadanya ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Aliran kerja setiap malam (`.github/workflows/nightly-llm-security.yml`, cron + pencetusan
manual) mempunyai dua tugas:

- **`promptfoo-guard` (menyekat)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kes adversarial (cth. "abaikan semua
  arahan terdahulu…", pintasan sekatan gaya DAN) menegaskan bahawa respons mengandungi
  `error.code === "SECURITY_001"`, iaitu kawalan tersebut benar-benar menolak permintaan.
- **`garak` (penasihatan)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap tika OmniRoute setempat (`http://localhost:20128/v1`). Memerlukan
  rahsia penyedia (`PROMPTFOO_PROVIDER_KEY`); dilangkau dengan baik jika tiada dan diakhiri dengan
  `|| true`, supaya ia melaporkan hasil tanpa menyebabkan CI gagal.

Liputan pembantu kawalan (`createInjectionGuard` / `withInjectionGuard`)
merangkumi setiap laluan `/v1` yang mengandungi prom; teks prom diambil daripada
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` dalam `src/shared/utils/inputSanitizer.ts`.

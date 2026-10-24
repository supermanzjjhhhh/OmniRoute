# Guardrails (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber acuan utama:** `src/lib/guardrails/`
> **Terakhir diperbarui:** 2026-10-17 — v3.8.52 (menambahkan [Cakupan dan batasan](#coverage-and-limits):
> rute dan jalur respons yang dijangkau hook, header penonaktifan yang digabungkan (#16412), mode pemblokiran
> injeksi sebagai batas wajib (#16413), serta komponen yang melihat respons sebelum post-call)

Guardrail menerapkan keamanan, kebijakan, dan transformasi konten pada batas
antara OmniRoute dan penyedia upstream. Setiap guardrail dapat memeriksa (dan
secara opsional menolak, mentransformasi, atau memberi anotasi pada) payload permintaan (`preCall`) dan
respons upstream (`postCall`).

Sistem ini bersifat **fail-open**: jika guardrail melempar pengecualian saat dijalankan, registri
mencatat kesalahan tersebut dan melanjutkan ke guardrail berikutnya, alih-alih menggagalkan
permintaan. Pemblokiran adalah keputusan eksplisit (`block: true`), bukan sesuatu yang terjadi tanpa sengaja.
Satu-satunya pengecualian adalah permintaan yang dibatalkan: ketika `signal` milik pemanggil dibatalkan,
guardrail yang melempar pengecualian akan menggagalkan eksekusi hook, bukan dilewati.

Hook **tidak** dijalankan pada setiap rute atau setiap respons. Baca
[Cakupan dan batasan](#coverage-and-limits) sebelum mengandalkan guardrail sebagai
kontrol keamanan.

## Guardrail Bawaan

Registri secara otomatis memuat enam guardrail sesuai urutan prioritas saat diimpor
(lihat `registry.ts` → `registerDefaultGuardrails()`):

| Prioritas | Nama                | Tahap          | File                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nomor prioritas yang lebih rendah dijalankan **lebih dahulu**.

### Jembatan Visi (`visionBridge.ts`) — Jembatan Modalitas PR-1

Model dasar GLM 5.3 dan `glm-5.3-{low,high,max}` memiliki metadata
registri/spesifikasi `supportsVision:false` secara eksplisit. Varian GLM 5.3 Flash
tetap merupakan model dengan kemampuan visi bawaan. Rute `/v1/messages` milik Claude Code memasuki
rantai guardrail pra-panggilan `handleChat` bersama **sebelum** penerjemahan
Claude-ke-OpenAI; gambar bertingkat dalam hasil alat `Read` harus dideskripsikan atau ditangani
sebelum penerjemahan tersebut mengangkatnya menjadi konten `image_url` OpenAI (#17069).

Mencegat permintaan yang memuat gambar dan ditujukan ke **model tanpa kemampuan visi**, lalu
mengalihkan seluruh permintaan ke model berkemampuan visi atau mengganti bagian
gambar dengan deskripsi teks yang dihasilkan oleh model visi yang dapat dikonfigurasi sebelum
panggilan upstream. Hal ini memungkinkan penyedia khusus teks menangani
payload multimodal secara transparan.

Alur:

1. Lewati jika model tujuan sudah mendukung visi (kecuali jika tercantum dalam
   daftar model yang wajib menggunakan jembatan `isVisionBridgeForcedModel`).
2. Ekstrak bagian gambar melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang mendelegasikan ke **pendeteksi media
   terpadu** `detectMediaParts()` di `open-sse/utils/mediaParts.ts` — satu-satunya
   sumber acuan utama yang digunakan bersama dengan filter kompatibilitas kombo.
   Ekstraksi dibatasi pada bentuk-bentuk yang diizinkan dan dapat disisipkan
   kembali oleh `replaceImageParts` (kontrak ekstraksi↔penggantian): `image_url` OpenAI, base64 Anthropic
   `source.type:"base64"`, URL Anthropic `source.type:"url"`, dan
   `input_image` Responses API. Gambar yang cocok dan tersarang di dalam
   `tool_result.content` Claude Code serta keluaran alat Responses juga diekstrak dan
   diganti pada jalur aslinya; bentuk yang hanya berupa indikator ditangani oleh filter kombo
   dan tidak diekstrak.
   Lewati jika tidak ada yang ditemukan.
3. Tentukan konfigurasi runtime melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): kunci pengaturan `modalityBridge*`
   baru diutamakan; kunci `visionBridge*` lama tetap menjadi **opsi cadangan
   selama satu siklus** (periode rollback). Lewati sebelum penelusuran media apa pun ketika
   jembatan dinonaktifkan.
4. Pemilih mode (`modalityBridgeVisionMode`, lihat tabel di bawah) menentukan
   pengalihan rute atau pendeskripsian. Pengalihan rute mengembalikan `modifiedPayload` dengan hanya `model`
   yang diganti, beserta metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Jalur pendeskripsian: batasi jumlah gambar hingga `maxImages`, susun prompt yang disesuaikan dengan tugas,
   periksa cache deskripsi, panggil model visi **secara paralel**
   (`Promise.allSettled`), dan sisipkan bagian teks `[Image N]: <description>`
   sebagai penggantinya. Pendeskripsian yang gagal menghasilkan `null`: gambar asli dipertahankan untuk
   model tujuan yang kemampuannya tidak diketahui atau yang berkemampuan visi (#4012), tetapi **model tujuan langsung
   yang dipastikan hanya mendukung teks** atau kombo tanpa kemampuan visi mendapatkan teks pengganti eksplisit
   `(unavailable — no vision-capable provider connected)` untuk
   setiap gambar yang tidak dideskripsikan, termasuk kegagalan parsial dan gambar yang melampaui
   batas panggilan pendeskripsian (#17069). Mekanisme cadangan pendeskripsian kombo yang sudah ada untuk kondisi
   ketika semuanya gagal tetap dipertahankan (#8430).
6. Kembalikan `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mode (`modalityBridgeVisionMode`)

| Mode       | Default | Perilaku                                                                                                                                                                                                                                                                                                          |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristik lama, tidak diubah (#6640/#7204): model non-combo/`auto/` dialihkan ke model visi terbaik kecuali model asli sudah memiliki kredensial yang dapat digunakan (lalu mendeskripsikan); target combo selalu mendeskripsikan.                                                                                |
| `describe` |         | Selalu mendeskripsikan — blok pengalihan dilewati sepenuhnya; model pilihan pengguna selalu menjawab.                                                                                                                                                                                                             |
| `reroute`  |         | Paksa pengalihan: pengaman yang mempertahankan model berkredensial dilewati. Pengaman kredensial **target** pengalihan tetap berlaku — jika tidak ada target visi yang dapat digunakan, bridge memblokir dengan kesalahan yang jelas alih-alih mendeskripsikan atau mengirim gambar mentah ke target khusus teks. |

Mode paksa langsung menentukan alur **sebelum** heuristik otomatis dijalankan; perilaku `auto`
identik hingga tingkat byte dengan pengaman sebelum PR-1.

#### Cakupan kunci API (`visionBridgeKeyScope.ts`)

Ketika kunci API pemanggil membatasi `allowedConnections`, kumpulan kuota
(`allowedQuotas`) atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge hanya
memilih model pengalihan dan deskripsi yang boleh digunakan oleh kunci tersebut, pada koneksi yang boleh
digunakannya. Panggilan deskripsi kemudian selalu melalui self-loop OmniRoute dengan
header `x-omniroute-self-loop-key-id`, sehingga permintaan chat yang diterima
kembali menerapkan kebijakan koneksi dan model kunci tersebut. `enforceApiKeyPolicy()`
hanya mematuhi header tersebut jika disertai bearer self-loop, sehingga header itu hanya dapat
mempersempit akses, dan ID yang tidak dapat ditemukan akan ditolak.

Jika tidak ada model visi yang diizinkan untuk kunci tersebut, **target yang dipastikan khusus
teks** menolak permintaan gambar secara lokal dengan HTTP 400 yang jelas alih-alih
meneruskan byte gambar ke upstream yang tidak mampu memprosesnya (#17069). Untuk target dengan
kemampuan visi yang tidak diketahui atau bawaan, jalur deskripsi mempertahankan
perilaku fail-open sebelumnya (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Permintaan tanpa kunci, serta kunci tanpa pembatasan ini, berperilaku persis seperti
sebelumnya.

#### Prompt deskripsi yang peka terhadap tugas (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambahkan
teks **pesan pengguna terakhir** (dipotong hingga 500 karakter) ke prompt
deskripsi dasar, mengarahkan deskripsi pada hal yang sebenarnya ditanyakan pengguna
(pola codex-vision-proxy) dan meminta model visi untuk menyalin
teks yang terlihat. Saat flag dinonaktifkan — atau tidak ada teks pengguna — prompt dasar digunakan tanpa perubahan.

Permintaan kompatibel OpenAI milik self-loop deskripsi itu sendiri (`callVisionModelSingle()`
di `visionBridgeHelpers.ts`) selalu meminta `image_url.detail: "high"` —
tanpa syarat, untuk setiap pemanggil/penyedia, tanpa bergantung pada sinyal klien apa pun.
Pengambilan sampel dengan detail rendah menurunkan akurasi OCR untuk tugas penyalinan
teks yang justru diminta oleh prompt ini, sehingga panggilan deskripsi itu sendiri selalu meminta
detail tinggi terlepas dari tingkat detail yang digunakan permintaan masuk asli. Ini
hanya memengaruhi isi permintaan deskripsi internal; tidak mengubah cara
OmniRoute meneruskan `image_url.detail` milik pemanggil pada permintaan utama —
default tersebut diterapkan secara terpisah, dan hanya untuk klien OpenCode yang terdeteksi, di
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Cabang
format transmisi Anthropic pada self-loop deskripsi tidak memiliki kolom `detail`
dan tidak terpengaruh oleh kedua default tersebut.

#### Batas keluaran deskripsi (`modalityBridgeVisionMaxChars`)

| Kunci                          | Default | Rentang            |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` atau 100–50000 |

`0` (default) berarti **tanpa batas** — deskripsi yang dikembalikan oleh
`callVisionModel()` diteruskan tanpa perubahan, mempertahankan
perilaku yang ada. Nilai apa pun dalam rentang 100–50000 memotong deskripsi dengan
akhiran `…` sebelum disisipkan kembali sebagai `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` di `src/lib/guardrails/visionBridge.ts`).
Naikkan nilai ini untuk tugas OCR yang kaya detail ketika model downstream memerlukan
transkripsi lengkap; turunkan untuk membatasi penggunaan token pada model visi yang menghasilkan keluaran panjang.
Kolom dasbor berada di panel Lanjutan pada tab Visi
(`modality-bridge-max-chars` di `ModalityBridgeVisionTab.tsx`) dan menaikkan
nilai antara 1 dan 99 ke batas minimum 100, sementara nilai `0` yang ditetapkan secara eksplisit
dibiarkan tanpa perubahan — `0` merupakan nilai Zod yang valid dengan sendirinya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), bukan sekadar
default "belum ditetapkan".

#### Cache deskripsi (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dalam memori untuk keluaran deskripsi, digunakan bersama di seluruh proses.
Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)` dengan
pembingkaian prefiks panjang (tanpa benturan batas kolom). Komponen model adalah
model bridge yang **dikonfigurasi**, bukan model yang benar-benar menjawab —
`callVisionModel` dapat menggunakan model cadangan secara internal, dan penggunaan kunci per percobaan akan
memecah cache. Deskripsi yang gagal tidak pernah disimpan dalam cache. Pengaturan:

| Kunci                           | Default | Rentang |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalisasi gambar jarak jauh (describe melalui self-loop/pengambilan base64)

Ketika bridge mengambil sendiri gambar **jarak jauh** — pemanggilan describe
ke diri sendiri melalui Anthropic dan konversi base64 berformat claude-wire
(`ensureBase64ImagesForClaudeWire`), keduanya melalui
`fetchRemoteImageAsDataUri()` di `visionBridgeHelpers.ts` — URI data yang
dihasilkan diteruskan melalui `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sebelum disematkan dalam permintaan
model visi. Gambar yang terlalu besar diperkecil hingga **sisi terpanjangnya 2048px** (sesuai
batas pengubahan ukuran yang sudah diterapkan OpenAI/Anthropic di sisi server), sehingga mengurangi
jumlah byte unggahan/latensi tanpa mengubah apa yang dilihat model visi. Pengubahan ukuran
menggunakan `sharp`, yang dimuat melalui impor dinamis: pada platform tempat biner
native-nya gagal dimuat, `normalizeDataUri()` **tidak pernah melempar pengecualian** — fungsi ini beralih
ke penerusan byte asli tanpa perubahan, sehingga jalur describe/konversi base64
selalu tetap berfungsi. Byte non-gambar (hasil pengambilan yang tidak mengembalikan
gambar yang dapat didekodekan) juga diteruskan tanpa perubahan. Normalisasi ini
terbatas pada gambar yang diambil bridge untuk pemanggilannya sendiri — normalisasi tidak pernah
diterapkan pada payload mentah pemanggil yang diteruskan apa adanya, sesuai dengan
prinsip mutasi hanya dengan persetujuan eksplisit (Aturan Wajib #20).

#### Skema pengaturan + migrasi

Kunci `modalityBridge*` yang baru divalidasi oleh Zod dalam `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, dan
kelompok `modalityBridgeAudio*` yang digunakan oleh Audio Bridge. Migrasi
`141_modality_bridge_settings.sql` menyalin nilai lama
`visionBridge*` yang ada ke kunci baru yang sesuai (idempoten, tidak pernah menimpa
nilai `modalityBridge*` yang ditetapkan operator); kunci lama tetap diterima sebagai
cadangan pembacaan selama satu siklus rilis.

#### Header transparansi + statistik

Respons yang ditransformasi melalui describe menyertakan
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(dibuat oleh `buildModalityBridgeHeader()` di `modalityBridge/bridgeStats.ts`,
dibubuhkan oleh `withModalityBridgeHeader()` di `src/sse/handlers/chatHelpers.ts`).
Permintaan yang dialihkan **tidak** mendapatkan header — payload tidak diubah dan pergantian
model sudah terlihat pada kolom `model` di isi respons.

`GET /api/modality-bridge/stats` (autentikasi pengelolaan, tingkat yang sama dengan
`GET /api/settings`) mengembalikan penghitung per modalitas dalam memori
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan
`video`. `averageLatencyMs` menggunakan `latencySamples`, bukan seluruh percobaan, sebagai
penyebutnya; operasi tanpa pengukuran waktu tidak menghasilkan sampel nol milidetik
secara artifisial. `bridged` tetap menjadi alias yang kompatibel dengan versi sebelumnya untuk
konversi yang berhasil; percobaan yang gagal tidak menambah nilainya.
Penghitung direset saat proses dimulai ulang sesuai desain
(telemetri, bukan pencatatan akuntansi).

#### Konfigurasi dasbor

Halaman dasbor khusus berada di
`/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`,
dan `Video` yang dapat diakses melalui URL mempertahankan parameter kueri saat mengganti nilai `tab`.
Tab Vision menyediakan pengaktifan, mode, pemilihan model (termasuk pilihan
default otomatis), pemberian prompt yang mempertimbangkan tugas, batas lanjutan untuk waktu tunggu/gambar/panjang deskripsi/cache,
penghitung saat berjalan,
dan permintaan contoh dengan pengaman. Tab Audio juga sudah aktif: tab ini menyediakan
pengaktifan, pemilih model khusus STT dengan opsi Otomatis, batas waktu tunggu/durasi klip maksimum, penghitung
audio, dan pengujian contoh `input_audio`. Tab Video sudah berfungsi: tab ini melaporkan
status runtime FFmpeg/ffprobe — salah satu dari empat status UI eksplisit (`unknown` saat
pemeriksaan sedang berlangsung atau tidak dapat diselesaikan, `restricted` pada host dasbor
non-loopback tempat pemeriksaan dilewati di sisi klien, `unavailable` setelah diperiksa
dan dipastikan tidak tersedia, atau `available` beserta versi FFmpeg/ffprobe) — menyimpan
pengaktifan serta batas model/frame/video/waktu tunggu, memfilter pemilih model agar hanya menampilkan model
yang mendukung visi, dan menyediakan penghitung video.

Kartu Vision Bridge sebelumnya di bawah pengaturan AI menjadi tautan kompatibilitas ke
halaman baru; kartu tersebut tidak lagi memiliki salinan formulir kedua. Penyedia Media juga
menautkan alur kerja Gambar-ke-Teks dan Ucapan-ke-Teks ke tab Modality
Bridge yang sesuai tanpa menghapus playground Ucapan-ke-Teks yang sudah ada.

**Bypass penerimaan self-loop:** ketika pemanggilan describe dirutekan melalui
self-loop `/v1` milik OmniRoute sendiri (model penyedia nonstandar), subpermintaan mengirimkan
`x-omniroute-admission-bypass: internal` dan diautentikasi dengan kredensial
self-loop yang telah ditentukan — sentinel lokal `sk_omniroute` dalam mode lokal, atau
kunci variabel lingkungan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` yang dikonfigurasi operator (#1350) agar
deployment `REQUIRE_API_KEY=true` tetap dapat menjalankan pemanggilan describe. Bypass
hanya diberlakukan untuk kredensial yang persis sama tersebut, sehingga klien eksternal tidak dapat menggunakan
header itu untuk melewati pemeriksaan penerimaan.

Nilai default lama berada di `src/shared/constants/visionBridgeDefaults.ts`;
nilai default mode/berbasis tugas/cache yang baru serta resolver pengaturan berada di
`src/shared/constants/modalityBridgeDefaults.ts`. Mekanisme pengaman menyediakan
opsi konstruktor `deps` agar pengujian dapat menyuntikkan implementasi tiruan `getSettings` dan
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Mencegat permintaan chat yang memuat audio sebelum mencapai target yang tidak
diketahui mendukung input audio. Fitur ini tidak pernah mengalihkan permintaan chat: bagian audio
ditranskripsikan melalui endpoint multipart kompatibel OpenAI yang sudah ada, dan
model chat yang dipilih melanjutkan dengan transkrip teks.

Alur:

1. Tentukan `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata
   provider-registry yang eksplisit diprioritaskan, lalu metadata model statis, lalu
   `modalities_input` yang disinkronkan. Daftar input yang dideklarasikan tanpa `audio` bernilai `false`; jika tidak ada
   bukti kapabilitas, nilainya tetap `null`. Baik `false` maupun `null` mengaktifkan
   bridge konservatif, sedangkan `true` melewatinya.
2. Tentukan pengaturan `modalityBridgeAudio*` dan ekstrak bagian
   audio tingkat teratas yang dapat disisipkan ulang dari setiap pesan melalui detektor bersama `detectMediaParts()`.
   Bentuk format transmisi yang didukung adalah OpenAI `input_audio`, `audio_url`, dan
   `source.media_type: "audio/*"`. Audio bertingkat dideteksi untuk perutean tetapi tidak
   dihapus oleh jalur penyisipan ulang. Pemrosesan dibatasi oleh `modalityBridgeAudioMaxClips`;
   bagian setelah batas tersebut tetap tidak diubah.
3. Gunakan `provider/model` yang dikonfigurasi, atau biarkan `selectAudioBridgeModel()` menelusuri
   `AUDIO_TRANSCRIPTION_PROVIDERS` sesuai urutan katalog yang stabil dan memilih
   model pertama dengan kredensial penyedia aktif yang dapat digunakan.
4. `callAudioTranscription()` mengonversi audio base64/data-URI menjadi `file`
   multipart, atau mengunduh `audio_url` jarak jauh melalui
   pengaman koneksi keluar khusus alamat publik dengan penyematan DNS dan batas 25 MB. Selanjutnya, fungsi ini mengirim file dan model
   yang dipilih melalui POST ke self-loop lokal `/v1/audio/transcriptions`, yang diautentikasi dengan
   `resolveSelfLoopBearer()`. Rute transkripsi yang sudah ada melakukan pencarian
   kredensial, penanganan masa jeda/pembatasan laju, serta pengiriman ke penyedia seperti biasa.
5. Panggilan yang berhasil mengganti bagiannya dengan `[Audio N]: <transcript>`. Panggilan
   dijalankan dengan `Promise.allSettled`: kegagalan individual mempertahankan bagian
   audio aslinya (kontrak #4012). Jika semua panggilan gagal dan target terbukti
   `supportsAudio === false`, bagian-bagian tersebut menjadi
   `[Audio N]: (unavailable — no STT provider connected)` (kontrak #8430). Untuk
   target yang tidak diketahui (`null`), hasil ketika semua panggilan gagal tetap tidak diubah. Target
   yang terbukti hanya mendukung teks tanpa kredensial STT yang dapat digunakan menerima
   penanda eksplisit yang sama tanpa melakukan panggilan jaringan.

Transkrip yang berhasil menggunakan cache LRU/TTL Modality Bridge yang berlaku di seluruh proses.
Kuncinya menggabungkan referensi audio, label operasi
`audio-transcription` yang stabil, dan model STT yang dipilih; kegagalan tidak pernah disimpan dalam cache. Upaya pemrosesan audio memperbarui
penghitung bersama `bridged`, `cacheHits`, `failures`, dan `lastUsedAt`.
Respons yang ditransformasikan menyertakan
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; permintaan
yang tidak diubah tidak menerima segmen Audio Bridge.

Pengaturan runtime disimpan di DB dan divalidasi dengan Zod:

| Kunci                         | Default | Rentang              |
| ----------------------------- | ------- | -------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                    |
| `modalityBridgeAudioModel`    | `""`    | Otomatis atau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000          |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                 |

Cache bersama tetap dikendalikan oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Mencegat bagian video tingkat teratas dalam `messages` Chat Completions dan
`input` Responses API sebelum target yang tidak diketahui memiliki dukungan video native dipanggil.
Bentuk yang didukung adalah `input_video`, `video_url`, `video_source`, URL HTTPS,
dan URI data `data:video/*;base64,...`. Nama file biasa dalam teks tidak diperlakukan
sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) menangani penelusuran permintaan,
pemeriksaan kapabilitas/kebijakan, agregasi per permintaan, dan payload respons.
Pemrosesan per video — akuisisi, cache hasil lengkap, pendeskripsian urutan
frame (yang menggabungkan transkrip audio apa pun yang dideklarasikan pemanggil), serta metrik/pembatalan/pembersihan
per upaya — dienkapsulasi di balik `processVideoPart` dalam
`videoBridgePipeline.ts`, yang dipanggil sekali per bagian video di dalam perulangan `preCall`.
Modul tersebut juga mendefinisikan batas port eksplisit `VideoMediaBrokerPort`
(untuk memperoleh byte dan mengekstrak frame sampel), `VideoAudioTranscriptionPort`
(untuk menggabungkan transkrip audio yang dideklarasikan pemanggil dengan keterangan frame sampel), dan
`VideoDrilldownPort` (batas persistensi penelusuran detail frame; belum dihubungkan
ke `processVideoPart` — saat ini hanya rute terpisah `/api/modality-bridge/video/drilldown`
yang menulis entri penelusuran detail).

Jalur permintaan publik `/v1` tidak pernah mengimpor atau memanggil subproses. Video jarak jauh
diunduh dengan batas 50 MiB; video base64 inline memiliki
batas konservatif ukuran terdekode sebesar 36 MiB per video agar keseluruhan model/pesan/pembingkaian
dapat tetap berada dalam batas penerimaan permintaan JSON publik sebesar 50 MiB. Panjang
inline dan perkiraan ukuran terdekode diperiksa sebelum alokasi. HTTPS
diwajibkan untuk URL jarak jauh awal dan setiap pengalihan, dengan menggunakan
pengaman koneksi keluar khusus alamat publik yang sudah ada beserta penyematan DNS. Byte kemudian melewati batas broker
internal `POST /api/modality-bridge/video/extract` secara persis. Rute tersebut bersifat
`LOCAL_ONLY` sekaligus `SPAWN_CAPABLE`, hanya menerima permintaan
loopback tepercaya yang diautentikasi per proses, dan tidak pernah menerima URL, jalur sistem file, executable,
atau daftar argumen. Pipeline ukuran body API dan pembaca body inkremental
milik handler secara independen menerapkan batas input broker sebesar 50 MiB. Antreannya yang terbatas menjalankan
satu ekstraksi pada satu waktu, mengizinkan empat tugas tertunda, dan membatasi input tertunda hingga
100 MiB.

Di dalam broker, `ffprobe` membaca file lokal privat; daftar format tetap
yang diizinkan mengecualikan format playlist dan manifes. Untuk kontainer
keluarga MOV yang diizinkan, referensi data MOV eksternal tetap dinonaktifkan secara default, dan
perintah tetap tersebut tidak mengaktifkannya. Baik `ffprobe` maupun `ffmpeg` menggunakan
daftar protokol yang hanya mengizinkan `file`, satu thread, array argumen tetap, tanpa shell,
dan executable yang ditemukan melalui `PATH`. Stream sampul berupa gambar terlampir bukan
kandidat yang dapat diputar. Semua stream yang dapat diputar harus memenuhi batasan, dan
stream default yang ditetapkan secara eksplisit diprioritaskan sebelum fallback deterministik
ke indeks terendah. Video dibatasi hingga 600 detik, 8.192 piksel per dimensi, dan
33.554.432 piksel sumber. FFmpeg mengambil sampel 1–16 frame JPEG pada titik tengah, memperkecil
sisi terpanjang hingga maksimal 1.024 piksel tanpa memperbesar input yang lebih kecil, dan
tidak pernah menerima URL. Pengambilan sampel menggunakan `uniform` secara default. Kebijakan
opsional `scene_aware` dan kebijakan eksperimental `segment_aware` menjalankan satu
proses FFmpeg tetap tambahan pada stream lokal yang sudah divalidasi, memilih stempel waktu
adegan `showinfo` dalam batas yang ditentukan, dan secara deterministik kembali ke
titik tengah seragam yang sama jika detektor gagal, batas waktu terlampaui, output tidak valid, atau
kumpulan kandidat kosong. Mode berbasis segmen mengalokasikan sampel titik tengah secara proporsional terhadap
interval adegan yang telah divalidasi; bukti berbasis segmen dan perilaku fallback
dijelaskan secara terperinci di bawah. Batas mutlak 16 frame
diterapkan setelah pemilihan dalam setiap kebijakan. Jika permintaan berbasis adegan hanya memiliki
alokasi satu frame, permintaan tersebut menggunakan titik tengah seragam dari seluruh video atau jendela
fokus yang aktif dan melaporkan `policyEffective: uniform`: satu frame adegan yang dipilih
tidak dapat mempertahankan kedua ujung rentang waktu. Pemanggil dapat memberikan
jendela fokus bernilai terhingga (detik `start`/`end`) secara opsional; batasnya disesuaikan agar berada dalam
durasi media, jendela terbalik atau bernilai tak terhingga ditolak, dan semua kebijakan
pengambilan sampel hanya dijalankan di dalam interval yang telah dinormalisasi. Jendela
yang dihasilkan disertakan dalam metadata pengambilan sampel dan dalam prefiks deskripsi
yang tidak tepercaya agar model hilir dapat membedakan cuplikan terfokus dari seluruh
linimasa.

Fokus keterangan semantik merupakan pengaturan eksplisit yang terpisah. Mode
analisis default `full` mempertahankan prompt frame yang ada dan tidak pernah meneruskan teks
permintaan ke model keterangan. Dalam mode `focused`, bridge hanya membaca
`text`/`input_text` terbaru yang tidak kosong dan ditulis oleh pengguna dari kontainer Chat atau Responses
yang sama, menormalisasikannya ke NFC, merapatkan karakter kontrol dan spasi putih,
serta membatasinya hingga 500 titik kode Unicode. Hasil kosong kembali menggunakan
prompt `full` yang persis sama. Petunjuk yang dapat digunakan diserialisasi sebagai JSON dalam
blok konteks pengguna tidak tepercaya khusus dan hanya boleh memprioritaskan detail yang dapat diamati; petunjuk tersebut
tidak dapat mengesampingkan peringatan terpisah agar tidak mengikuti instruksi yang terlihat
atau terdengar dalam media. Fokus tekstual tidak pernah menyimpulkan `start`/`end` atau mengubah
pengambilan sampel temporal.

#### Bukti segmen struktural FU-07

`segment_aware` menggunakan satu proses praanalisis terbatas pada
stream video lokal yang sudah divalidasi. Rangkaian filter tetap terlebih dahulu memperkecil lebar hingga maksimal 320 piksel,
mendeteksi perubahan adegan dan interval gambar beku, lalu mengambil sampel sebanyak 1 frame per
detik untuk keburaman, luma rata-rata, dan informasi spasial/temporal. Proses ini
dibatasi hingga 600 sampel struktural, satu thread FFmpeg/filter, daftar
protokol yang hanya mengizinkan `file` dan daftar kontainer yang diizinkan yang sama, batas output proses 1 MiB,
serta maksimal 30 detik dalam mekanisme pembatalan/tenggat bersama milik broker. Proses ini tidak pernah
menerima perintah, filter, jalur, atau URL dari permintaan.

Nilai struktural merupakan bukti pengambilan sampel deterministik, bukan pemahaman video
semantik. Nilai tersebut tidak menyimpulkan subjek, tindakan, keterangan, ucapan, atau niat
pengguna. Batas adegan dan gambar beku membentuk segmen; cakupan gambar beku, keburaman,
pencahayaan, detail spasial, dan perubahan temporal hanya memengaruhi cara
alokasi 1–16 frame yang ada dibagikan. Segmen yang sepenuhnya beku dibatasi hingga satu frame,
sedangkan segmen yang tidak beku bersaing untuk mendapatkan sisa alokasi. Ketika jumlah batas
melebihi jumlah frame, cakupan linimasa yang seragam dipertahankan agar pergantian adegan cepat di awal
tidak dapat menyembunyikan segmen panjang di akhir. Batas adegan yang berada dalam rentang resolusi
analisis 1 detik dari batas gambar beku digabungkan.

Filter yang tidak tersedia, bukti yang tidak valid/kosong, kesalahan detektor, atau terlampauinya batas waktu
praanalisis menyebabkan proses berlanjut dengan kembali ke kebijakan titik tengah seragam yang persis sama. Pembatalan oleh pemanggil
atau tenggat broker tidak menyebabkan proses berlanjut: hal tersebut menghentikan subproses yang sedang
berjalan, mencegah ekstraksi frame selanjutnya, dan pohon direktori sementara privat
dihapus dalam `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menghasilkan fixture FFmpeg nyata yang deterministik
untuk penghematan panggilan model keterangan setelah deduplikasi, alokasi frame untuk gerakan padat,
bukti keburaman/pencahayaan/SI-TI, pergantian adegan cepat dengan bagian akhir yang panjang, dan positif
palsu pada transisi pudar bertahap. Skrip ini mencatat waktu nyata praanalisis dan, jika `/usr/bin/time`
tersedia, penggunaan CPU serta RSS puncak proses anak. Pemeriksaan kualitasnya hanya berupa
acuan struktural. Kualitas model keterangan yang sebenarnya tetap berstatus `HOLD` karena perangkat uji ini tidak memiliki
endpoint yang diotorisasi atau evaluator yang dibekukan. Penghematan biaya juga tetap berstatus `HOLD`
kecuali `--caption-cost-per-call-usd` memberikan estimasi positif per panggilan
secara eksplisit; skrip ini tidak pernah mengada-adakan salah satu hasil tersebut.

Setiap frame dibatasi hingga 4 MiB, seluruh frame mentah secara keseluruhan hingga 23 MiB, dan
respons broker yang diserialisasi hingga 32 MiB. Direktori sementara privat dihapus
dalam `finally`. OmniRoute tidak menyertakan FFmpeg dan tidak menerima jalur
executable khusus. Sebelum membuat keterangan, bridge menerapkan tahap
deduplikasi visual yang konservatif: setiap JPEG diperkecil menjadi buffer skala abu-abu 16×16 dan
hanya dibandingkan dengan frame terakhir yang dipertahankan. Untuk batas jumlah frame
yang diminta untuk pembuatan keterangan lebih dari satu, ekstraksi menyediakan
kumpulan kandidat terbatas hingga dua kali batas tersebut dan tidak pernah lebih dari 16 frame.
Batas yang diminta diterapkan hanya setelah deduplikasi, dengan kandidat
terpilih pertama dan terakhir dipertahankan selama pengurangan akhir jika batasnya setidaknya
dua. Kebijakan berversi
`grayscale-16x16-mean-cells-v2` menggunakan nilai yang lebih besar antara delta luma rata-rata dan
rasio sel thumbnail yang delta ternormalisasinya setidaknya 0,05.
Ambang duplikat adalah konstanta 0,04, yang dipilih demi perilaku yang dapat diprediksi alih-alih
diekspos sebagai pengaturan runtime. Sinyal sekunder
berkontras tinggi ini mempertahankan gerakan kecil dan perubahan teks yang terlihat yang dapat
terlewat oleh perbandingan berbasis rata-rata saja. Kesalahan pembanding atau dekoder ditangani secara fail-open dan tetap
mempertahankan cakupan. Metadata keluaran memisahkan kandidat yang diekstrak, frame yang berhasil
digunakan, dan duplikat visual yang dibuang.

Bagian video yang ditandai secara eksplisit dapat meminta lembar kontak bertanda waktu.
Bridge membuat kisi JPEG dengan maksimum 4 kolom dan 16 frame. Setiap sel berukuran 512 piksel mencetak
stempel waktu sumbernya secara permanen pada pita bawah berkontras tinggi, sementara stempel waktu yang sama
tetap tersedia dalam metadata tekstual untuk pengaitan dan audit di tahap selanjutnya. Ukuran keseluruhan
JPEG tetap dibatasi hingga 32 MiB. Jika `sharp` tidak dapat mendekode atau menyusun kisi,
bridge beralih ke frame JPEG individual; pembatalan oleh klien tetap diteruskan
melalui operasi lembar tersebut.

Bukti untuk promosi sengaja dipisahkan dari
microbenchmark komposisi sintetis. `scripts/perf/video-bridge-contact-sheet-eval.ts` mendefinisikan
kerangka pengujian A/B dengan skema berversi untuk model visi nyata yang kompatibel dengan OpenAI. Kerangka ini mengukur
token yang dilaporkan penyedia, latensi waktu nyata menyeluruh (termasuk komposisi lembar),
jumlah pemanggilan model, dan retensi fakta yang didefinisikan dalam manifes. Respons model mentah tidak
ditulis ke laporan; hanya digest SHA-256 dan ID fakta yang cocok yang disimpan.
Kerangka pengujian ini tidak melakukan panggilan jaringan atau model berbayar kecuali `--execute-real` disertakan dan
`--model`, `OMNIROUTE_BASE_URL`, serta `OMNIROUTE_API_KEY` dikonfigurasi. Tanpa
eksekusi nyata yang eksplisit tersebut, keputusan yang dapat dibaca mesin tetap `HOLD`; pengukuran
payload/jumlah panggilan sintetis saja bukanlah bukti untuk promosi.

Pemanggil dapat melampirkan array `transcript.cues` opsional ke bagian video
yang didukung jika mereka sudah memiliki teks yang selaras. Setiap cue harus memuat `text`,
interval `start`/`end` bernilai hingga yang berada dalam durasi hasil pemeriksaan, dan
`source` yang diizinkan (`client`, `embedded`, atau `audio-bridge`); nilai default `confidence` adalah
`1` dan harus tetap berada di antara `0` dan `1`. Cue yang identik digabungkan.
OmniRoute tidak pernah memulai transkripsi dari metadata ini: cue yang telah divalidasi
disalin ke hasil deskripsi beserta sumber, tingkat keyakinan, dan intervalnya, serta
ditampilkan sebagai pengamatan yang tidak tepercaya bersama keterangan frame. Teks yang tidak valid,
di luar rentang, atau tanpa informasi asal ditolak alih-alih dicampurkan ke dalam
aliran keterangan. Kedua saluran transkrip dalam badan permintaan menormalkan
informasi asal yang diberikan menjadi `client`, termasuk label `embedded` atau `audio-bridge`
yang diklaim sendiri. Hanya adaptor milik server yang dapat menetapkan label tepercaya tersebut melalui
argumen `trustedSource` yang hanya tersedia melalui kode; kolom JSON dalam permintaan tidak dapat mengakses
argumen tersebut. Teks transkrip tetap merupakan konten turunan media yang tidak tepercaya,
terlepas dari asalnya, dan tidak boleh pernah menentukan otorisasi.

Pemanggil tingkat lanjut dapat menyediakan trek `audioTranscript` untuk video yang sama;
trek ini diperlakukan sebagai teks yang disediakan klien, bukan bukti transkripsi oleh server.
Lapisan integrasi fusi menjalankan pengamatan visual dan audio dengan
satu tenggat waktu dan sinyal pembatalan, mengurutkannya pada linimasa bersama, menggabungkan
duplikat yang identik, dan melaporkan hasil parsial jika hanya satu sisi yang berhasil.
`audioTranscript` yang tidak valid menghasilkan penurunan ke hasil parsial tersebut — deskripsi
visual dipertahankan dan cabang audio mencatat kode kegagalan yang telah disanitasi —
alih-alih menggagalkan seluruh video. Ketersediaan per cabang, penanda parsial,
dan kode kegagalan yang telah disanitasi dipertahankan dalam hasil deskripsi, dalam
metadata pengaman (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam penghitung
fusi bridge. Jalur default Video Bridge tidak menjalankan konversi ucapan ke teks
atau mengunduh salinan media kedua; tanpa trek eksplisit tersebut, jalur ini tetap
hanya memproses video.

**Retensi transkrip (#12150 P1).** Ini berlaku secara otomatis setiap kali
Video Bridge (yang penggunaannya sendiri bersifat opt-in) merender segmen transkrip — tidak ada flag
retensi terpisah. Ketika sebuah permintaan merender segmen transkrip apa pun (`transcript`
yang dideklarasikan pemanggil atau `audioTranscript` yang digabungkan), guardrail menandainya sebagai
`videoBridgeObserved` dan menghasilkan salinan bayangan deskripsi video yang telah disamarkan —
hasil render identik yang setiap isi teks bebas segmennya diganti dengan
`[redacted-video-transcript]`, dibuat dengan mengganti field segmen terstruktur
sebelum string dirangkai (bukan dengan mengurai teks yang telah diratakan, sehingga tidak ada
konten segmen — baik adversarial maupun biasa, termasuk isi yang memuat `]` seperti
`[inaudible]`/`[music]` — yang dapat lolos). Isi permintaan log panggilan yang disimpan mengganti
setiap bagian teks yang berasal dari video dengan salinan bayangan yang telah disamarkan tersebut, dengan pencocokan berdasarkan
kesamaan konten; acuan `fullText` dibaca ulang dari payload guardrail
pra-panggilan yang telah selesai, sehingga pencocokan tetap berhasil setelah guardrail berikutnya dalam rantai (penyamar PII dan
kredensial, prioritas 10/95) menulis ulang teks deskripsi secara langsung dan
setelah injeksi prompt sistem/serah terima/memori mengubah susunan array pesan.
Isi yang dikirim ke model di sisi hulu tidak berubah. Permintaan yang teramati juga tidak mengisi
Memory persisten apa pun (ekstraksi yang berasal dari permintaan maupun respons dilewati),
sehingga balasan model sendiri tidak dapat menggemakan teks transkrip ke dalam Memory.

**Field video mentah (#12430).** Ketika bridge diaktifkan dan dukungan video native tidak diketahui atau tidak tersedia, field `transcript`/`audioTranscript` yang terdefinisi juga mengaktifkan `videoBridgeObserved`, bahkan setelah kegagalan deskripsi atau tercapainya batas `maxVideos`. `null` dan string kosong diperhitungkan; field yang tidak ada dan metadata non-video tidak. Salinan yang disimpan menyamarkan field ini atau menghilangkan permintaan, dan cache/Memory dilewati.

Pada jalur fallback tersebut, segmen valid dari pemanggil menjadi bagian `text`/`input_text`
yang didukung, bukan field penyedia yang tidak standar. Kedua trek yang disertakan dalam permintaan
tetap menjadi pengamatan `client` yang tidak tepercaya, dengan peringatan eksplisit bahwa video
tidak dideskripsikan dan stempel waktu tidak diverifikasi terhadap media. Batas total
256 segmen/64 KiB yang ada serta batas per segmen berlaku untuk gabungan kedua trek;
stempel waktu harus berada dalam batas maksimum 600 detik milik broker dan rentang
fokus apa pun yang diberikan. Trek yang tidak valid dibuang, bukan diteruskan sebagai teks sembarang; trek
lain yang valid masih dapat digunakan kecuali batas gabungannya terlampaui. Field null/kosong
tidak menambahkan teks. Fallback ini tidak menambahkan pengambilan media atau transkripsi.
Field ekstensi transkrip dihapus dari pembawa video fallback dan
objek `video_url`/`source`-nya. Daftar izin format transmisi OpenAI tetap ketat; pembawa video
dengan dukungan native yang tidak diketahui tetap tersedia dan target yang diketahui hanya mendukung teks tetap menggunakan penanda aman.
Salinan bayangan penyamaran terstruktur melindungi teks transkrip yang ditambahkan, sementara
permintaan asli milik pemanggil tetap tidak berubah. Target yang mendukung native dan
bridge yang dinonaktifkan mempertahankan perilaku bypass yang ada.

Salinan tambahan yang disimpan menggunakan sinyal permintaan teramati yang sama. Snapshot mentah
permintaan klien sebelum guardrail, permintaan tertunda dalam memori, dan log awal
permintaan yang ditolak mengganti field transkrip dalam bagian video secara struktural;
prompt string yang disintesis oleh tahap pipeline dan serah terima konteks disamarkan
pada titik penyimpanan isi permintaan. Penanda `video_content_removed` yang disimpan
membuat kelanjutan `previous_response_id` ditolak secara aman alih-alih merekonstruksi
teks yang sengaja dibuang. Jika permintaan yang teramati kehilangan
salinan bayangan penyamaran per bagiannya sebelum pencatatan, atau bahkan jika satu dari beberapa salinan bayangan video
gagal dicocokkan setelah mutasi permintaan berikutnya, isi permintaan yang disimpan
dihilangkan seluruhnya alih-alih menyimpan transkrip yang hanya disamarkan sebagian.

Untuk permintaan yang teramati, respons model mungkin mengutip bagian mana pun dari
transkrip tanpa batas segmen terstruktur. Karena itu, `responseBody` pada log panggilan
yang disimpan diganti dengan penanda penghilangan; artefak
pipeline terperinci (yang dapat mencakup isi dari sisi hulu/klien dan potongan stream)
tidak disimpan. Cache semantik, idempotensi, dan pemutaran ulang penalaran melewati
pembacaan dan penulisan untuk permintaan tersebut. Permintaan ke penyedia dan respons yang terlihat oleh klien
tetap tidak berubah. Byte keepalive awal dikosongkan dari buffer
sementara ketika artefak terperinci dihilangkan. Peringatan EventStream
berformat salah milik Kiro hanya melaporkan jumlah byte payload, bukan isinya atau
galat mentah parser JSON.
Ini tidak menyatakan bahwa setiap diagnostik penyedia/plugin yang tidak terkait telah
diaudit; pemeriksaan menyeluruh yang lebih luas terhadap titik penyimpanan dilacak dalam #11658.

Siklus hidup internal `/api/modality-bridge/video/drilldown` merupakan substrat cache
terpisah yang diautentikasi melalui loopback/token. Setiap operasi juga memerlukan
ID prinsipal opak kanonis. Sebelum pemanggil produksi diaktifkan, pemanggil tersebut harus
menurunkan ID itu dari tenant yang diautentikasi dan tidak boleh meneruskan
nilai yang dipilih klien. Kunci cache mengikat prinsipal tersebut ke ID sesi dan
referensi video kanonis, hanya menyimpan kunci turunannya yang berbasis SHA-256, serta membatasi pembacaan
dan penghapusan pada prinsipal yang sama. Cache menyimpan maksimal 16 frame JPEG
turunan per entri, membuatnya kedaluwarsa setelah sepuluh menit, dan mendukung pembacaan dengan batas
`start`/`end` atau penghapusan sesi secara eksplisit.

Setiap prinsipal dibatasi hingga 16 entri dan 64 MiB data JPEG kanonis. Batas
tersebut terpisah dari batas global 64 entri/256 MiB: tekanan kuota prinsipal
hanya mengeluarkan entri milik prinsipal tersebut yang paling lama tidak digunakan sebelum pengeluaran
LRU global dipertimbangkan. Entri kedaluwarsa dibersihkan dari perhitungan prinsipal maupun
global saat ada aktivitas cache, sementara pembatalan dan kegagalan validasi
tidak menetapkan penggantian parsial.

Cache menolak Base64 nonkanonis, padding berlebih, media non-JPEG, JPEG yang rusak atau
terpotong, serta JPEG yang menghasilkan peringatan selama dekode seluruh gambar dengan batasan menggunakan `sharp`.
Setiap gambar yang diterima dikodekan ulang sebagai JPEG kanonis, lebar dan tingginya ditentukan
dari byte hasil dekode alih-alih memercayai kolom dari pemanggil, dan setiap byte
poliglot di bagian akhir dibuang, bukan dipertahankan. Hanya buffer terkompresi kanonis yang dibatasi
yang diperhitungkan terhadap kedua kuota. Batas JSON dalam transmisi mencakup overhead Base64 untuk batas maksimum
input terdekode sebesar 32 MiB. Setiap
derivasi yang disimpan mencatat format/resolusi JPEG yang telah divalidasi, kebijakan pengambilan sampel,
versi derivasi, waktu pembuatan, hash konten yang dihitung server, serta referensi
induk yang di-hash beserta hash konten induk dari pemanggil tepercaya. Pembatalan diperiksa
di antara fase dekode/hash asinkron sebelum commit cache atomik.

Tahap pekerjaan ini belum menghubungkan produsen produksi ke rute dan belum
menyediakan pemilihan varian multiresolusi. Karena itu, jalur permintaan Video Bridge
yang transparan tidak menimbulkan pekerjaan tambahan, sementara derivasi prinsipal yang terikat pada tenant dan
seluruh siklus hidup multiresolusi FU-08 tetap menjadi pekerjaan tindak lanjut yang dinyatakan secara eksplisit,
bukan didokumentasikan sebagai perilaku yang sudah lengkap.

Frame diberi keterangan secara berurutan menggunakan model Video yang dikonfigurasi. Pengaturan
pengganti Video yang kosong mewarisi pengaturan Vision; jika keduanya kosong, perute otomatis
Vision memilih model efektif yang mendukung kemampuan visual. Keterangan yang berhasil
menggantikan bagian asli dengan prefiks tetap `[Video description:` yang juga
menandai teks sebagai observasi turunan media yang tidak tepercaya dan memberi tahu model
hilir agar tidak mengikuti instruksi yang ditemukan dalam media. Kunci cache keterangan frame
mencakup byte JPEG, prompt, stempel waktu, dan model efektif; hanya keterangan yang berhasil
yang di-cache. Entri cache mempertahankan model produsen yang benar-benar berhasil,
termasuk model fallback; bridge melaporkan `mixed` ketika frame yang berbeda
dihasilkan oleh model yang berbeda. Saat cache ditemukan, identitas produsen tersebut digunakan kembali
alih-alih diberi label ulang sebagai rencana perutean yang diminta. Cache hasil seluruh video
menggunakan kunci berdasarkan setiap input yang mengubah output — prompt, model
efektif, kebijakan pengambilan sampel, jumlah frame, mode analisis semantik, sidik jari SHA-256
dari petunjuk fokus yang dinormalisasi, jendela fokus, `transcript`,
`audioTranscript`, dan flag lembar kontak — sehingga perubahan pada salah satu
dimensi tersebut menyebabkan cache tidak ditemukan, bukan penggunaan ulang hasil usang. Versi kebijakan
deduplikasi visual, ambang batas, dan jumlah frame kandidat yang dibatasi juga dicantumkan secara eksplisit dalam
kunci dan metadata cache hasil; karena itu, perubahan kebijakan tidak dapat menggunakan kembali
deskripsi seluruh video yang usang. Metadata cache hasil v4 menyimpan mode dan
sidik jari, bukan tugas mentah pengguna. Metadata guardrail melaporkan
mode analisis yang diminta maupun yang efektif; mode `focused` yang diminta tanpa
teks pengguna yang dapat digunakan dilaporkan sebagai mode efektif `full`.

Guardrail mengekstrak setiap bagian video yang didukung, tetapi hanya mendeskripsikan paling banyak
`modalityBridgeVideoMaxVideos`. Untuk target yang terbukti memiliki
`supportsVideo === false`, video yang gagal dan melampaui batas menjadi penanda teks
aman yang eksplisit sehingga tidak ada video mentah yang tersisa. Jika kapabilitasnya tidak diketahui, bagian-bagian tersebut
mempertahankan pembawa videonya; setiap transkrip fallback mengikuti konversi teks
berbatas di atas. Target dengan `supportsVideo === true` melewati bridge.
Sinyal pembatalan permintaan klien diteruskan melalui proses pengunduhan, antrean broker,
subproses, dan panggilan pembuatan keterangan; pembatalan menghentikan pemrosesan di antara video dan tidak pernah membuka
akses ke media mentah saat terjadi kegagalan.

Pengaturan runtime disimpan di DB dan divalidasi dengan Zod:

| Kunci                               | Default     | Rentang / perilaku                                                                                                      |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opsional, diaktifkan secara eksplisit                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mempertahankan keterangan umum; `focused` menggunakan konteks pengguna terbaru yang dibatasi dan tidak tepercaya |
| `modalityBridgeVideoModel`          | `""`        | Mewarisi model Vision Bridge                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` proporsional; kegagalan detektor beralih ke `uniform`                    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                          |

Nilai batas waktu Video lama yang tersimpan di atas 120 detik dibatasi hingga
tenggat broker; penulisan pengaturan baru di atas batas tersebut ditolak.
`GET /api/modality-bridge/video/runtime` mewajibkan penanda tepercaya bahwa permintaan berasal dari loopback
lokal sebelum autentikasi atau pemeriksaan runtime, lalu mewajibkan
autentikasi manajemen. Endpoint ini hanya mengembalikan `available`, versi FFmpeg/ffprobe yang telah disanitasi, dan alasan
tetap ketika runtime tidak tersedia. Endpoint ekstraksi internal bukan
API unggah publik: antrean yang penuh mengembalikan `503` beserta `Retry-After`, terputusnya koneksi
pemanggil mengembalikan `499`, dan tercapainya tenggat tetap broker mengembalikan `504`. Respons yang dikonversi menambahkan
`video->text;model=<visionModel>;parts=<videos>` ke header pusat
`x-omniroute-modality-bridge` tanpa menghapus segmen Vision atau Audio.

### Penyamar PII (`piiMasker.ts`)

Berjalan pada **kedua** tahap.

- **`preCall`** mengkloning payload, menelusuri `system`, `messages`, `input`, dan
  `prompt` (termasuk item string biasa), lalu menerapkan `processPII()` (dari
  `@/shared/utils/inputSanitizer`) pada kolom string `content`/`text`. Saat
  `PII_REDACTION_ENABLED=true`, PII yang terdeteksi disamarkan dalam
  payload keluar. Ini tidak bergantung pada `INPUT_SANITIZER_MODE` (yang hanya mengontrol
  kebijakan injeksi prompt). Saat penyamaran nonaktif, pemanggilan mencatat jumlah
  deteksi tanpa menulis ulang konten.
- **`postCall`** melakukan kloning mendalam pada respons, menjalankan `sanitizePIIResponse()` serta
  penyamar untuk struktur Responses API (`maskResponsesOutput` — mencakup
  `output_text` dan `output[].content[].text`). Jika terjadi penyamaran, respons
  yang dimodifikasi menggantikan respons asli.

Guardrail tidak pernah memblokir; hanya memberikan anotasi (`meta.detections`,
`meta.redacted`) atau menulis ulang.

#### Pemilihan per jenis, pola kustom, dan penghitung deteksi

**Dasbor → Pengaturan → Keamanan → Penyamaran PII** memilih _apa_ yang disamarkan. Pengaturan ini
tidak mengaktifkan penyamaran: hal itu tetap dikontrol oleh `PII_REDACTION_ENABLED` (permintaan) dan
`PII_RESPONSE_SANITIZATION` (respons + SSE), yang keduanya nonaktif secara default.

- **Pemilihan per jenis** — ID bawaan tercantum di
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Jika tidak diatur, semua
  jenis dipilih (perilaku sebelum pengaturan ini ada). Pola `ssn_us` pada mesin
  permintaan dipetakan ke `ssn`. Templat (Minimal, Standar, Keuangan,
  Brasil, AS, Lengkap) hanya mengisi kotak centang di UI.
- **Pola kustom** — hingga 20 pola regex atau wildcard (`*` = hingga 64
  karakter nonspasi, `?` = satu karakter). Hasil kecocokan menjadi `[CUSTOM_REDACTED]`.
  Setiap pola diproses melalui `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maksimal 500 karakter, flag terbatas
  pada `g i m s u`, harus dapat dikompilasi, harus lolos `safe-regex` (untuk mencegah
  backtracking katastrofik), dan tidak boleh cocok dengan string kosong atau placeholder penyamaran.
  Pola yang gagal ditolak saat disimpan maupun diuji, dan baris tersimpan
  yang gagal dilewati saat runtime alih-alih dikompilasi. Pola kustom hanya
  dijalankan saat penyamaran aktif.
- **Penghitung deteksi** — jumlah per jenis (bukan nilai yang cocok), disimpan dalam
  memori dan direset saat mulai ulang (`src/lib/pii/piiDetectionStats.ts`). Jumlah ini hanya
  bertambah saat penyamaran aktif.

Pengaturan disimpan dalam tabel `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) dan dibaca melalui cache berdurasi 1 detik. API:

| Metode | Jalur                    | Tujuan                                                                   |
| ------ | ------------------------ | ------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Status flag, `enabledTypes`, `customPatterns`, penghitung deteksi        |
| `PUT`  | `/api/settings/pii`      | Mengganti `enabledTypes` (`null` = semua) dan/atau `customPatterns`      |
| `POST` | `/api/settings/pii/test` | Menguji satu pola terhadap sampel maksimal 8 KB; tidak ada yang disimpan |

Ketiganya memerlukan autentikasi pengelolaan dan memvalidasi isi permintaan dengan Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injeksi Prompt (`promptInjection.ts`)

Mendeteksi struktur adversarial dalam konten yang diberikan pengguna dan menerapkan
kebijakan yang dikonfigurasi. Perilaku dikendalikan oleh variabel lingkungan dan opsi
konstruktor:

| Pengaturan         | Variabel lingkungan                                                                                 | Default | Efek                                                                                                                                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktif              | `INPUT_SANITIZER_ENABLED`                                                                           | `true`  | Saat `false`, pemrosesan guardrail langsung dihentikan.                                                                                                                                                               |
| Mode               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn`  | Kebijakan injeksi: `block`, `warn`, atau `log`. (`redact` diterima untuk kompatibilitas mundur, tetapi **tidak** menghapus teks injeksi; penulisan ulang PII pada permintaan dikontrol oleh `PII_REDACTION_ENABLED`.) |
| Ambang pemblokiran | Opsi `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Tingkat keparahan minimum yang diperlukan untuk memblokir. Secara default, tingkat sedang hanya dipantau.                                                                                                             |

**Urutan prioritas mode** (`getMode`): `options.mode` dari pemanggil →
**penggantian flag fitur di DB** untuk `INJECTION_GUARD_MODE` (Dasbor → Pengaturan →
Flag Fitur) → variabel lingkungan `INJECTION_GUARD_MODE` → variabel lingkungan `INPUT_SANITIZER_MODE` →
`warn`. Dengan demikian, penggantian melalui dasbor mengungguli variabel lingkungan, sehingga UI Flag
Fitur mengontrol guard yang sedang berjalan secara langsung (tanpa mulai ulang). Pembacaan DB dirancang agar aman saat gagal:
jika terjadi kesalahan, guard kembali ke perilaku berbasis variabel lingkungan, dan saat tidak ada
penggantian yang diatur, perilakunya identik dengan penentuan yang hanya berbasis variabel lingkungan.

Sumber deteksi:

1. `sanitizeRequest()` dari `@/shared/utils/inputSanitizer` (kumpulan detektor
   bersama yang digunakan di bagian lain pipeline).
2. `DEFAULT_GUARD_PATTERNS` bawaan (saat ini `system_override_inline` dan
   `markdown_system_block`, keduanya memiliki tingkat keparahan `high`).
3. `customPatterns` opsional yang diteruskan melalui opsi konstruktor (string, regex,
   atau rekaman `{ name, pattern, severity }`).

Ketika `mode === "block"` **dan** setidaknya satu deteksi memenuhi ambang
tingkat keparahan, `preCall` mengembalikan `{ block: true, message: "Request rejected:
suspicious content detected" }`. Dalam mode `warn`/`log`, guardrail mencatat log tetapi
mengizinkan pemanggilan. Fungsi pembantu bersama `evaluatePromptInjection()` juga diekspor
untuk pemanggil yang perlu mengevaluasi prompt tanpa melalui registri.

**Batas pemindaian (v3.8.20):** detektor hanya memeriksa **16 KB pertama** dari
teks prompt yang digabungkan — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) di
`src/shared/utils/inputSanitizer.ts`. Baik `detectInjection()` maupun
`evaluatePromptInjection()` menjalankan `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum menjalankan
perulangan pola. Arahan injeksi berada di dekat bagian awal input, sehingga ini
membatasi beban CPU/GC regex pada payload berukuran ratusan KB tanpa melemahkan deteksi (lihat
#3932, #4041).

### Penyamar Kredensial (`credentialMasker.ts`)

Berjalan pada **kedua** tahap, paling akhir dalam rantai default (prioritas `95`). Menyamarkan
pola kunci API / token rahasia yang umum dikenal dari payload keluar (konten
pesan, argumen pemanggilan alat, hasil alat) **dan** respons penyedia, sehingga
kredensial yang ditempelkan ke prompt (atau ditampilkan kembali oleh hasil alat) tidak bocor
ke penyedia hulu maupun kembali ke klien.

- **Hanya jika diaktifkan secara eksplisit**, dengan konvensi yang sama seperti penyamaran PII (terkait Aturan Wajib #20):
  dinonaktifkan kecuali `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Saat nonaktif, guardrail tidak melakukan apa pun —
  tidak pernah memblokir dan tidak pernah menulis ulang.
- `redactCredentials()` menelusuri seluruh pohon payload/respons (`walkValue()`,
  aman dari polusi prototipe, aman dari siklus melalui `WeakSet`) dan mengganti kecocokan dengan
  placeholder `[REDACTED:<type>]`, hanya mengkloning cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` mencakup kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  cloud (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci privat / JWT,
  string koneksi yang memuat kredensial (`mongodb://user:pass@...`, dll.), dan
  pola nilai header `Authorization`/`x-api-key`/`api-key`/`apikey`
  generik. Kunci berbentuk header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) disamarkan secara struktural (hanya nilainya, prefiks skema seperti
  `Bearer `/`Basic ` dipertahankan), bukan melalui regex teks generik.
- Guardrail tidak pernah memblokir; hanya menulis ulang (`modifiedPayload` /
  `modifiedResponse`) dan menambahkan anotasi (`meta.credentialsRedacted`, `meta.count`).

Pengujian pencegah regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Dasar (`base.ts`)

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
  block?: boolean; // true menghentikan rantai lebih awal
  message?: string; // ditampilkan saat memblokir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis ulang permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis ulang respons
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

Guardrail menandakan "tidak ada perubahan" dengan mengembalikan `void`, `{}`, atau
`{ block: false }`. Mengembalikan `modifiedPayload`/`modifiedResponse` mengganti
nilai yang mengalir melalui rantai untuk guardrail berikutnya.
`signal?: AbortSignal` membawa siklus hidup pemanggil ke dalam guardrail. Pembatalan permintaan merupakan pengecualian fail-open yang disengaja: jembatan media menghentikan pekerjaan dan melakukan pembersihan tanpa mengembalikan media mentah ke target yang diketahui tidak mendukungnya.

## Registri (`registry.ts`)

Singleton `guardrailRegistry` menyediakan:

- `register(guardrail)` — menambahkan guardrail (atau menggantinya berdasarkan nama yang dinormalisasi) dan
  mengurutkan ulang berdasarkan `priority` secara menaik.
- `clear()` / `list()` — fungsi pembantu administratif.
- `runPreCallHooks(payload, context)` — mengiterasi guardrail aktif, meneruskan
  payload melalui `modifiedPayload`, dan berhenti pada `block: true` pertama.
- `runPostCallHooks(response, context)` — alur yang sama pada sisi respons.
- `resetGuardrailsForTests({ registerDefaults })` — menghapus status dan secara opsional
  mendaftarkan ulang guardrail bawaan untuk isolasi pengujian yang bersih.

Kedua fungsi eksekusi mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
dengan `results` berupa array rekaman `GuardrailExecutionResult` yang mencakup
field `blocked`, `skipped`, `modified`, `error`, dan `meta` per guardrail,
yang berguna untuk penelusuran.

### Menonaktifkan Guardrail Per Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` menggabungkan
daftar nama guardrail tanpa duplikat yang harus dilewati untuk
permintaan saat ini. Ada lima saluran, yang dibaca dalam urutan berikut dan digabungkan menjadi satu daftar
(kemunculan pertama dipertahankan saat menghapus duplikat):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` pada body permintaan (tingkat teratas)
3. `metadata.disabledGuardrails` pada body permintaan (hanya ketika `metadata` berupa objek)
4. Header `x-omniroute-disabled-guardrails`
5. Header lama `x-disabled-guardrails`

Kelima saluran digabungkan, termasuk kedua header: mengirimkan
`x-omniroute-disabled-guardrails` dan `x-disabled-guardrails` sekaligus akan melewati gabungan
daftar keduanya, dan header modern yang kosong tidak lagi menyembunyikan header lama
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), diperbaiki dalam
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Nilai dapat berupa array string atau string yang dipisahkan koma; spasi di awal dan akhir nama dihapus
dan nama dinormalisasi menjadi kebab-case huruf kecil (`pii_masker` → `pii-masker`), sementara entri
kosong dibuang. Hasilnya diteruskan melalui `context.disabledGuardrails`
ke registri, yang melewati guardrail yang cocok (`skipped: true` dalam `results`).

Daftar penonaktifan hanya memengaruhi **registri**. Mode `block` untuk injeksi prompt merupakan
batas pengamanan wajib: middleware penjaga injeksi
(`src/middleware/promptInjectionGuard.ts`) memanggil `evaluatePromptInjection()`
tanpa daftar penonaktifan yang dikendalikan pemanggil (pemanggilan
`resolveDisabledGuardrails({ body })` yang tidak efektif dan sebelumnya dilakukan telah dihapus dalam
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), sehingga permintaan
yang menonaktifkan `prompt-injection` tetap ditolak dalam mode `block`. Ini memang
dirancang demikian. Saluran penonaktifan dikendalikan oleh pemanggil (body permintaan,
metadata, header), dan pemanggil tidak boleh dapat menonaktifkan kontrol
keamanan yang ditetapkan operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Penggabungan header
dari [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
hanya mengubah guardrail registri mana yang dilewati; hal ini tidak memungkinkan klien
melewati middleware. Kebijakan guardrail wajib per kunci dan per grup
dilacak dalam RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Lihat [Cakupan dan batasan](#coverage-and-limits).

## Urutan Eksekusi

Untuk setiap permintaan yang mengalir melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts` (rute keluarga chat yang tercantum di
[Cakupan dan batasan](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` menyusun daftar yang dilewati dari kunci API, isi permintaan,
   dan header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan guardrail berdasarkan
   urutan prioritas dari terendah ke tertinggi:
   - Guardrail yang dinonaktifkan dicatat sebagai `skipped`.
   - `preCall` setiap guardrail dapat menulis ulang payload melalui `modifiedPayload`.
   - `block: true` pertama langsung menghentikan rantai dan handler mengembalikan
     respons penolakan guardrail.
3. Payload (yang mungkin telah ditulis ulang) diteruskan ke perutean kombo dan
   pengiriman ke upstream.
4. **Hanya non-streaming:** setelah respons disusun,
   `guardrailRegistry.runPostCallHooks(...)` menjalankan rantai yang sama pada
   respons. `block: true` di sini membuang respons upstream dan mengembalikan HTTP 400. Respons streaming melewati langkah ini sepenuhnya.

Guardrail yang melempar pengecualian dicatat dengan `error: <message>` dan dicatat ke log melalui
`logger.warn`, tetapi rantai tetap berlanjut — secara desain, kegagalan tidak memblokir pemrosesan.

## Cakupan dan batasan

Registri guardrail hanya terhubung ke pipeline chat. Batasan ini
ditetapkan oleh `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` dan
`tests/unit/guardrail-pipeline-characterization.test.ts`; perbarui pengujian tersebut
secara sengaja ketika perilakunya berubah.

### Tempat hook dijalankan

| Hook / kontrol                    | Dijalankan pada                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                 | Permintaan yang ditangani oleh `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (dan `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, dan proksi chat Telegram. Juga endpoint pengujian dasbor `/api/guardrails/test`. Pemblokiran sebelum pemanggilan mengembalikan HTTP 400. |
| `runPostCallHooks`                | Hanya respons chat **non-streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Respons streaming tidak pernah mencapainya.                                                                                                                                                                                                                                                                                                                 |
| PII streaming                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), disambungkan melalui pipe di `streamingPipeline.ts` saat `PII_RESPONSE_SANITIZATION` aktif. Ini bukan guardrail, sehingga saluran penonaktifan tidak memengaruhinya.                                                                                                                                                                                                                       |
| Middleware penjaga injeksi (lama) | Setiap rute `/v1` yang memuat prompt, termasuk keluarga chat (lihat [cakupan rute](#injection-guard-route-coverage--red-team-phase-8--block-d)). Hanya injeksi prompt.                                                                                                                                                                                                                                                                                   |

### Yang tidak tercakup

- **Rute media, embedding, dan data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) tidak pernah mencapai registri. Tidak ada
  penyamaran PII, penyamaran kredensial, atau jembatan modalitas yang dijalankan di sana. Satu-satunya
  pemeriksaan pada rute tersebut adalah middleware penjaga injeksi lama.
- **Respons streaming** tidak mendapatkan guardrail setelah pemanggilan: tidak ada `pii-masker` atau
  `credential-masker` setelah pemanggilan, dan tidak ada pemblokiran setelah pemanggilan. Hanya transformasi PII
  streaming yang berlaku (saat `PII_RESPONSE_SANITIZATION` aktif). Kredensial
  yang dikembalikan dalam respons streaming tidak disamarkan.
- **Saluran penonaktifan vs. middleware (sesuai desain):** middleware mengevaluasi
  injeksi prompt dengan panggilannya sendiri ke `evaluatePromptInjection()`, tanpa
  meneruskan daftar penonaktifan apa pun yang dikendalikan pemanggil. Mode `block` merupakan
  batas wajib yang tidak dapat dilewati oleh penonaktifan yang dikendalikan pemanggil, termasuk pada rute keluarga chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Menonaktifkan
  `prompt-injection` hanya melewati guardrail registri.

### Apa yang mengakses respons sebelum hook setelah pemanggilan

Pada jalur non-streaming, urutannya adalah: ekstraksi memori → eksekusi alat
bawaan → guardrail setelah pemanggilan → penghentian akibat pemblokiran setelah pemanggilan → penyimpanan cache semantik.

- **Ekstraksi memori** dan **eksekusi alat** mengakses respons sebelum guardrail
  pascapanggilan dapat menulis ulang atau memblokirnya. Sejak
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), ekstraksi
  memori memproses teks yang diekstrak melalui `sanitizePII` saat
  `PII_RESPONSE_SANITIZATION` aktif (baik dalam mode streaming maupun non-streaming), tetapi
  respons yang kemudian diblokir oleh guardrail pascapanggilan tetap sudah diteruskan ke memori dan
  alat.
- **Cache semantik** menyimpan respons setelah pemeriksaan pascapanggilan, sehingga yang disimpan adalah
  respons yang telah ditulis ulang, dan respons yang diblokir tidak pernah disimpan dalam cache. Entri cache
  menggunakan kunci yang berbeda untuk setiap kunci API.

## Konfigurasi

Variabel lingkungan yang dibaca oleh guardrail bawaan:

| Variabel                              | Digunakan oleh       | Efek                                                                                                                |
| ------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | Tetapkan ke `false` untuk menonaktifkan deteksi sepenuhnya.                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | Kebijakan injeksi: `warn`, `block`, atau `log`. Nilai lama `redact` tidak menulis ulang teks injeksi.               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | Mode untuk pelindung injeksi; juga merupakan flag fitur DB yang **mengesampingkan** variabel lingkungan (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | Tingkat keparahan minimum yang ditolak oleh `MODE=block`: `high` (default), `medium`, atau `low`.                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | Alias lama untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | Jika `true`, PII dalam permintaan disamarkan (terlepas dari mode injeksi).                                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (hilir) | Mengontrol perilaku penyamaran pada sisi respons.                                                                   |

Guardrail Modality Bridge membaca konfigurasi runtime dari penyimpanan pengaturan
berbasis DB (`getSettings()`), bukan variabel lingkungan. Kunci utama Vision adalah
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, dan
`modalityBridgeCacheMaxEntries`. Kunci lama
`visionBridge*` hanya diterima sebagai mekanisme pembacaan cadangan selama satu siklus
yang didokumentasikan; penulisan melalui dasbor menggunakan kunci utama. Nilai default dan resolver
cadangan berada di `src/shared/constants/modalityBridgeDefaults.ts`, sementara konstanta
lama tetap dipertahankan di `src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, serta pengaturan
bersama `modalityBridgeCache*`. Audio tidak memiliki mekanisme cadangan kunci lama karena
kunci-kunci ini diperkenalkan bersama skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan
`modalityBridgeVideoTimeout`, serta pengaturan bersama `modalityBridgeCache*`.
Fitur ini dinonaktifkan secara default karena FFmpeg/ffprobe merupakan dependensi operasional
opsional dan pembuatan deskripsi frame menambah latensi serta biaya model.

## Guardrail Kustom

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

1. Buat `src/lib/guardrails/myGuardrail.ts` yang memperluas `BaseGuardrail`.
2. Implementasikan `preCall` dan/atau `postCall`.
3. Daftarkan saat impor (tambahkan dari `registerDefaultGuardrails`) atau
   panggil `guardrailRegistry.register(...)` saat runtime — registri menggantikan
   guardrail sebelumnya yang memiliki nama ternormalisasi yang sama.
4. Tambahkan pengujian di `tests/unit/` (contoh yang sudah ada:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` di antara pengujian untuk memulai dari keadaan yang diketahui.
Berikan `{ registerDefaults: false }` untuk memulai dengan registri kosong dan
hanya mendaftarkan guardrail yang sedang diuji. Vision Bridge menerima injeksi
dependensi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge menyediakan
titik injeksi yang setara untuk pengaturan, kapabilitas, pemilihan model STT, pemeriksaan
kredensial, dan transkripsi. Dengan demikian, pengujian dapat menguji kedua alur tanpa akses DB
atau jaringan.

## Lihat Juga

- `src/lib/guardrails/` — implementasi
- `src/shared/utils/inputSanitizer.ts` — detektor bersama yang mendukung
  injeksi prompt dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — pengaturan default Vision Bridge dan
  daftar model yang wajib menggunakan bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — pengaturan default runtime bersama untuk Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogonal (pemutus sirkuit, masa jeda)
- `docs/reference/ENVIRONMENT.md` — referensi lengkap variabel lingkungan

## Cakupan rute injection-guard & pengujian red-team (Fase 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) mencakup semua rute
yang menerima prompt pengguna. Mekanisme ini mengikuti `INJECTION_GUARD_MODE` (default `warn` = hanya mencatat log;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis                 | Rute                                                                                                                                                 | Mode default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Teks (yang sudah ada) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generatif             | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Data                  | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Ekstraksi teks (`extractMessageContents`) mencakup `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Pengujian red-team (setiap malam, `nightly-llm-security.yml`):** promptfoo memvalidasi bahwa setiap rute memblokir
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan probe (dilewati jika tidak ada secret).
`moderations` disertakan demi konsistensi. Mode pemblokiran merupakan batas wajib: `evaluatePromptInjection()`
mengabaikan daftar penonaktifan per permintaan yang diteruskan middleware kepadanya, sehingga `disabledGuardrails`
**tidak** mengecualikan suatu rute dari mekanisme ini ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Alur kerja malam hari (`.github/workflows/nightly-llm-security.yml`, cron + pemicuan
manual) memiliki dua job:

- **`promptfoo-guard` (memblokir)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kasus adversarial (misalnya "abaikan semua
  instruksi sebelumnya…", jailbreak bergaya DAN) memastikan respons memuat
  `error.code === "SECURITY_001"`, yaitu guard benar-benar menolak permintaan tersebut.
- **`garak` (bersifat saran)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap instans OmniRoute lokal (`http://localhost:20128/v1`). Memerlukan
  secret penyedia (`PROMPTFOO_PROVIDER_KEY`); dilewati dengan aman jika tidak tersedia dan diberi akhiran
  `|| true`, sehingga hasilnya dilaporkan tanpa membuat CI gagal.

Cakupan helper guard (`createInjectionGuard` / `withInjectionGuard`)
meliputi setiap rute `/v1` yang memuat prompt; teks prompt diambil dari
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` di `src/shared/utils/inputSanitizer.ts`.

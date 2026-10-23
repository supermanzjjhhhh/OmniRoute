# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-10-17 — v3.8.52 (dodano [Pokrycie i limity](#coverage-and-limits):
> do których tras i ścieżek odpowiedzi docierają hooki, połączone nagłówki wyłączenia (#16412), blokada wstrzyknięć
> jako obowiązkowa granica (#16413) oraz to, co widzi odpowiedź przed wywołaniem post-call)

Guardrails egzekwują bezpieczeństwo, zasady oraz transformacje treści na granicy między OmniRoute a dostawcami nadrzędnymi. Każdy guardrail może sprawdzać (oraz opcjonalnie odrzucać, transformować lub adnotować) ładunki żądań (`preCall`) oraz odpowiedzi dostawcy (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi błąd podczas wykonywania, rejestr zapisuje ten błąd i kontynuuje działanie z kolejnym guardrailem zamiast przerywać żądanie. Blokowanie jest jawną decyzją (`block: true`), nigdy dziełem przypadku. Jedynym wyjątkiem jest przerwane żądanie: gdy `signal` wywołującego zostanie przerwany, guardrail zgłaszający błąd odrzuca wykonanie hooka zamiast zostać pominiętym.

Hooki **nie** uruchamiają się dla każdej trasy ani każdej odpowiedzi. Przeczytaj [Pokrycie i limity](#coverage-and-limits) przed opieraniem się na guardrailu jako mechanizmie kontroli bezpieczeństwa.

## Wbudowane Guardrails

Rejestr automatycznie ładuje sześć guardraili w kolejności priorytetów podczas importu (zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe numery priorytetów uruchamiają się **najpierw**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Model bazowy GLM 5.3 oraz `glm-5.3-{low,high,max}` posiadają jawną metadaną rejestru/specyfikacji `supportsVision:false`. Warianty GLM 5.3 Flash pozostają modelami o natywnej obsłudze wizji. Trasa `/v1/messages` w Claude Code wchodzi do współdzielonego łańcucha guardraili przed wywołaniem (pre-call) `handleChat` **przed** tłumaczeniem z Claude na OpenAI; zagnieżdżone obrazy będące wynikiem narzędzia `Read` muszą zostać opisane lub obsłużone przed tym, jak tłumaczenie to wyniesie je do zawartości `image_url` OpenAI (#17069).

Przechwytuje żądania zawierające obrazy skierowane do **modeli bez obsługi wizji** i albo przekierowuje całe żądanie do modelu obsługującego wizję, albo zastępuje części obrazów opisami tekstowymi wygenerowanymi przez konfigurowalny model wizyjny przed wywołaniem nadrzędnym. Pozwala to dostawcom obsługującym wyłącznie tekst na przezroczystą obsługę wielomodalnych ładunków.

Przepływ:

1. Pomijane, jeśli docelowy model już obsługuje wizję (chyba że znajduje się na liście wymuszonego mostka `isVisionBridgeForcedModel`).
2. Wyodrębnia części obrazu za pomocą `extractImageParts(messages)` (`visionBridgeHelpers.ts`), który deleguje zadanie do **zunifikowanego wykrywacza mediów** `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — stanowiącego pojedyncze źródło prawdy współdzielone z filtrem kompatybilności combo. Wyodrębnianie jest ograniczone do kształtów, które `replaceImageParts` może z powrotem wkleić (kontrakt wyodrębniania i zastępowania): `image_url` OpenAI, base64 `source.type:"base64"` Anthropic, URL `source.type:"url"` Anthropic oraz `input_image` z Responses API. Pasujące obrazy zagnieżdżone wewnątrz `tool_result.content` Claude Code oraz w wynikach narzędzi Responses są również wyodrębniane i zastępowane w swoich oryginalnych ścieżkach; kształty będące wyłącznie wskaźnikami są materiałem dla filtru combo i nie są wyodrębniane. Pomijane, jeśli nie znaleziono żadnych.
3. Rozwiązuje konfigurację w czasie rzeczywistym za pomocą `resolveVisionBridgeRuntimeSettings()` (`src/shared/constants/modalityBridgeDefaults.ts`): wygrywają nowe klucze ustawień `modalityBridge*`; starsze klucze `visionBridge*` pozostają jako **awaryjne rozwiązanie na jeden cykl** (okno wycofywania). Pomijane przed jakimkolwiek przechodzeniem przez media, gdy mostek jest wyłączony.
4. Selektor trybu (`modalityBridgeVisionMode`, patrz tabela poniżej) decyduje pomiędzy przekierowaniem a opisaniem. Przekierowanie zwraca `modifiedPayload` z podmienionym wyłącznie polem `model` oraz metadanymi `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisu: ogranicza liczbę obrazów do `maxImages`, tworzy prompt uwzględniający zadanie, odpytuje pamięć podręczną opisów, wywołuje model wizyjny **równolegle** (`Promise.allSettled`) i wstawia części tekstowe `[Image N]: <description>` w ich miejsce. Nieudane opisanie zwraca `null`: surowy obraz jest zachowywany dla nieznanych celów / celów obsługujących wizję (#4012), jednak **potwierdzony cel bezpośredni obsługujący wyłącznie tekst** lub kombinacja bez wizji otrzymuje jawny tekst zastępczy `(unavailable — no vision-capable provider connected)` dla każdego nieopisanego obrazu, w tym w przypadku częściowych awarii oraz obrazów przekraczających limit wywołań opisu (#17069). Istniejący mechanizm awaryjny dla całkowicie nieudanego opisu combo pozostaje bez zmian (#8430).
6. Zwraca `modifiedPayload` + metadane (`imagesProcessed`, `descriptions`, `processingTimeMs`, `visionModel`).

#### Selektor trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślnie | Zachowanie                                                                                                                                                                                                                                                                                       |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔         | Starsza heurystyka, niezmieniona (#6640/#7204): modele spoza trybu combo / `auto/` są przekierowywane do najlepszego modelu wizyjnego, chyba że oryginalny model ma już użyteczne poświadczenia (wtedy następuje opis); cele typu kombo zawsze wykonują opis.                                    |
| `describe` |           | Zawsze wykonaj opis — blok przekierowania jest całkowicie pomijany; wybrany przez użytkownika model zawsze odpowiada.                                                                                                                                                                            |
| `reroute`  |           | Wymuś przekierowanie: strażnik modelu z poświadczeniami jest pomijany. Strażnik poświadczeń dla celu przekierowania nadal działa — gdy brak użytecznego celu wizyjnego, mostek blokuje żądanie z jasnym błędem zamiast opisywać lub wysyłać surowe obrazy do celu obsługującego wyłącznie tekst. |

Wymuszone tryby przerywają działanie **przed** uruchomieniem heurystyki automatycznej; zachowanie trybu `auto` jest co do bajtu identyczne z zabezpieczeniem sprzed PR-1.

#### Zakres klucza API (`visionBridgeKeyScope.ts`)

Gdy klucz API wywołującego ogranicza `allowedConnections`, pule kwot (`allowedQuotas`) lub modele (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), mostek wybiera wyłącznie modele przekierowania i opisu, z których klucz może korzystać, na połączeniach dozwolonych dla tego klucza. Wywołanie opisu przechodzi następnie zawsze przez pętlę zwrotną OmniRoute z nagłówkiem `x-omniroute-self-loop-key-id`, dzięki czemu otrzymujące żądanie czatu ponownie wymusza politykę połączeń i modeli dla tego klucza. Funkcja `enforceApiKeyPolicy()` uwzględnia ten nagłówek tylko w połączeniu z tokenem autoryzacyjnym pętli zwrotnej, dzięki czemu może jedynie zwęzić dostęp, a nierozpoznane ID jest odrzucane.

Jeśli dla klucza nie dozwolono żadnego modelu wizyjnego, **potwierdzony cel obsługujący wyłącznie tekst** lokalnie odrzuca żądanie obrazu, zwracając jasny błąd HTTP 400 zamiast przekazywać bajty obrazu do nieprzystosowanego systemu nadrzędnego (#17069). W przypadku celów o nieznanej lub wbudowanej obsłudze wizji ścieżka opisu zachowuje swoje wcześniejsze zachowanie typu fail-open (metadane `{ skipped: true, reason: "no_permitted_vision_model" }`). Żądania bez klucza oraz klucze bez tych ograniczeń zachowują się dokładnie tak samo jak wcześniej.

#### Prompt opisu uwzględniający zadanie (`modalityBridgeVisionTaskAware`)

Domyślnie **true**. Funkcja `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dołącza tekst **ostatniej wiadomości użytkownika** (obcięty do 500 znaków) do bazowego promptu opisu, kierując opis w stronę tego, o co faktycznie zapytał użytkownik (wzorzec codex-vision-proxy), oraz prosząc model wizyjny o transkrypcję widocznego tekstu. Gdy flaga jest wyłączona lub brak tekstu użytkownika, bazowy prompt jest używany w niezmienionej postaci.

Własne żądanie zgodne z OpenAI w pętli zwrotnej opisu (`callVisionModelSingle()` w `visionBridgeHelpers.ts`) zawsze żąda `image_url.detail: "high"` — bezwarunkowo, dla każdego wywołującego/dostawcy, bez uzależnienia od jakiegokolwiek sygnału klienta. Próbkowanie o niskiej szczegółowości pogarsza dokładność OCR dokładnie w przypadku zadania transkrypcji tekstu, o które prosi ten prompt, dlatego samo wywołanie opisu zawsze wymaga wysokiej szczegółowości niezależnie od poziomu szczegółowości użytego w oryginalnym żądaniu przychodzącym. Dotyczy to wyłącznie wewnętrznej treści żądania opisu; nie zmienia to sposobu, w jaki OmniRoute przekazuje własne `image_url.detail` wywołującego w żądaniu głównym — ta wartość domyślna jest stosowana osobno i tylko dla wykrytych klientów OpenCode w funkcji `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Odgałęzienie formatu przesyłania Anthropic dla pętli zwrotnej opisu nie zawiera pola `detail` i nie jest objęte żadną z tych wartości domyślnych.

#### Limit znaków wyjściowych opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Domyślnie | Zakres            |
| ------------------------------ | --------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` lub 100–50000 |

Wartość `0` (domyślna) oznacza **brak limitu** — opis zwrócony przez `callVisionModel()` jest przekazywany bez modyfikacji, zachowując dotychczasowe zachowanie. Dowolna wartość z zakresu 100–50000 obcina opis, dodając sufiks `…`, zanim zostanie on z powrotem wpleciony jako `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` w `src/lib/guardrails/visionBridge.ts`). Zwiększ tę wartość w przypadku zadań OCR wymagających dużej szczegółowości, w których model nadrzędny potrzebuje pełnej transkrypcji; zmniejsz ją, aby ograniczyć zużycie tokenów w przypadku modeli wizyjnych generujących obszerne opisy. Pole w panelu sterowania znajduje się w sekcji Advanced karty Vision (`modality-bridge-max-chars` w `ModalityBridgeVisionTab.tsx`) i ogranicza każdą wartość z zakresu od 1 do 99 do dolnej granicy 100, pozostawiając jawne `0` bez zmian — `0` samo w sobie jest prawidłową wartością Zod (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie tylko domyślnym stanem "nie ustawiono".

#### Pamięć podręczna opisu (`modalityBridge/bridgeCache.ts`)

Pamięć podręczna LRU + TTL w pamięci operacyjnej dla wyników opisu, współdzielona w obrębie całego procesu. Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z formatowaniem prefiksu długości (brak kolizji na granicach pól). Komponentem modelu jest **skonfigurowany** model mostka, a nie model, który faktycznie odpowiedział — `callVisionModel` może wewnętrznie dokonać wycofania, a kluczowanie dla każdej próby powodowałoby fragmentację pamięci podręcznej. Nieudane opisy nigdy nie są zapisywane w pamięci podręcznej. Ustawienia:

| Klucz                           | Domyślnie | Zakres  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Normalizacja zdalnych obrazów (pobieranie self-loop describe/base64)

Kiedy bridge sam pobiera **zdalny** obraz — własne wywołanie describe Anthropic oraz konwersja base64 w formacie przewodowym claude (`ensureBase64ImagesForClaudeWire`), oba przez `fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy identyfikator URI danych jest przepuszczany przez `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) przed osadzeniem w żądaniu modelu wizyjnego. Zbyt duże obrazy są skalowane w dół do **dłuższej krawędzi 2048 px** (co odpowiada limitowi zmiany rozmiaru, jaki OpenAI/Anthropic stosują już po stronie serwera), co zmniejsza liczbę przesyłanych bajtów i opóźnienia bez zmiany tego, co widzi model wizyjny. Zmiana rozmiaru wykorzystuje `sharp`, ładowane za pomocą dynamicznego importu: na platformie, na której jego natywny plik binarny nie ładuje się, `normalizeDataUri()` **nigdy nie rzuca błędu** — powraca do przekazania (passthrough) oryginalnych bajtów, dzięki czemu ścieżka describe/konwersji do base64 zawsze działa. Bajty niebędące obrazem (pobranie, które nie zwróciło obrazu możliwego do zdekodowania) są również przekazywane bez zmian. Ta normalizacja dotyczy tylko obrazów, które bridge pobiera na potrzeby własnego wywołania (self-loop) — nigdy nie jest stosowana do surowego payloadu wywołującego, co jest zgodne z zasadą mutacji opartą wyłącznie na opt-in (Hard Rule #20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane za pomocą Zod w `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` oraz grupa `modalityBridgeAudio*` używana przez Audio Bridge. Migracja `141_modality_bridge_settings.sql` kopiuje istniejące przestarzałe wartości `visionBridge*` do pasujących nowych kluczy (idempotentnie, nigdy nie nadpisuje wartości `modalityBridge*` ustawionej przez operatora); przestarzałe klucze pozostają akceptowane jako zapasowe źródło odczytu (fallback) przez jeden cykl wydawniczy.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone przez describe zawierają `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (zbudowane przez `buildModalityBridgeHeader()` w `modalityBridge/bridgeStats.ts`, opatrzone przez `withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`). Przekierowane żądania **nie** otrzymują żadnego nagłówka — ładunek pozostał nienaruszony, a wymiana modelu jest już widoczna w polu `model` treści odpowiedzi.

`GET /api/modality-bridge/stats` (uwierzytelnianie zarządcze, ten sam poziom co `GET /api/settings`) zwraca liczniki w pamięci dla każdej modalności `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` oraz `video`. `averageLatencyMs` używa `latencySamples`, a nie wszystkich prób, jako swojego mianownika; operacja bez pomiaru czasu nie tworzy sztucznie próbki o wartości zero milisekund. `bridged` pozostaje wstecznie kompatybilnym aliasem dla udanych konwersji; nieudane próby go nie zwiększają. Liczniki resetują się przy restarcie procesu z założenia (telemetria, a nie księgowość).

#### Konfiguracja dashboardu

Dedykowana strona dashboardu to `/dashboard/settings/modality-bridge`. Jej adresowalne za pomocą URL zakładki `Vision`, `Audio` i `Video` zachowują parametry zapytania podczas przełączania wartości `tab`. Zakładka Vision udostępnia włączenie/wyłączenie, tryb, wybór modelu (w tym domyślny automatyczny), podpowiedzi uwzględniające zadanie (task-aware prompting), zaawansowane limity czasu/obrazu/długości opisu/pamięci podręcznej, liczniki czasu rzeczywistego oraz zabezpieczone żądanie przykładowe. Zakładka Audio jest również aktywna: udostępnia włączenie/wyłączenie, selektor modeli wyłącznie dla STT z opcją Auto, limity czasu/maksymalnego klipu, liczniki audio oraz test przykładowy `input_audio`. Zakładka Video jest funkcjonalna: zgłasza stan środowiska wykonawczego FFmpeg/ffprobe — jeden z czterech wyraźnych stanów UI (`unknown`, gdy sonda jest w locie lub nie mogła zostać ukończona, `restricted` na hoście dashboardu innym niż loopback, gdzie sonda jest pomijana po stronie klienta, `unavailable` po sprawdzeniu i potwierdzeniu braku, lub `available` wraz z wersjami FFmpeg/ffprobe) — utrwala limity włączenia/modelu/klatek/wideo/czasu oczekiwania, filtruje selektor modeli do modeli obsługujących wizję oraz udostępnia liczniki wideo.

Dawna karta Vision Bridge w ustawieniach AI jest linkiem kompatybilności do nowej strony; nie posiada już drugiej kopii formularza. Media Providers łączy również przepływy pracy Image-to-Text i Speech-to-Text z odpowiednimi zakładkami Modality Bridge bez usuwania istniejącego środowiska testowego Speech-to-Text.

**Self-loop admission bypass:** gdy wywołanie describe kieruje się przez własną pętlę zwrotną `/v1` OmniRoute (niestandardowy model dostawcy), podzapytanie wysyła `x-omniroute-admission-bypass: internal` i jest uwierzytelniane za pomocą rozwiązanego uwierzytelnienia pętli zwrotnej — lokalnego wartownika `sk_omniroute` w trybie lokalnym lub skonfigurowanego przez operatora klucza środowiskowego `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), dzięki czemu wdrożenia z `REQUIRE_API_KEY=true` mogą nadal wykonywać wywołanie describe. Obejście jest honorowane tylko dla tych dokładnie poświadczeń, więc klienci z zewnątrz nie mogą używać tego nagłówka do pominięcia procedury admission.

Przestarzałe wartości domyślne znajdują się w `src/shared/constants/visionBridgeDefaults.ts`; nowe wartości domyślne trybu/świadomości zadania/pamięci podręcznej oraz moduł rozwiązywania ustawień znajdują się w `src/shared/constants/modalityBridgeDefaults.ts`. Strażnik (guardrail) udostępnia opcję konstruktora `deps`, dzięki czemu testy mogą wstrzykiwać fałszywe implementacje `getSettings` oraz `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu zawierające audio, zanim dotrą one do celu, o którym wiadomo, że nie akceptuje wejścia audio. Nigdy nie przekierowuje żądania czatu: części audio są transkrybowane za pośrednictwem istniejącego punktu końcowego multipart kompatybilnego z OpenAI, a wybrany model czatu kontynuuje pracę przy użyciu transkrypcji tekstowych.

Przepływ:

1. Rozwiązuje `supportsAudio` za pomocą `getResolvedModelCapabilities()`. Jawne metadane rejestru dostawców mają pierwszeństwo, następnie statyczne metadane modelu, a potem zsynchronizowane `modalities_input`. Zadeklarowana lista wejściowa bez `audio` to `false`; brak dowodów na możliwości pozostaje `null`. Zarówno `false`, jak i `null` aktywują konserwatywny most, podczas gdy `true` go omija.
2. Rozwiązuje ustawienia `modalityBridgeAudio*` i wyodrębnia części audio najwyższego poziomu możliwe do wklejenia z każdej wiadomości za pomocą współdzielonego detektora `detectMediaParts()`. Obsługiwane kształty przesyłu to OpenAI `input_audio`, `audio_url` oraz `source.media_type: "audio/*"`. Zagnieżdżone audio jest wykrywane na potrzeby routingu, ale nie jest usuwane przez ścieżkę wklejania. Praca jest ograniczona przez `modalityBridgeAudioMaxClips`; późniejsze części pozostają nienaruszone.
3. Uwzględnia skonfigurowany `provider/model` lub pozwala `selectAudioBridgeModel()` przejść przez `AUDIO_TRANSCRIPTION_PROVIDERS` w stabilnej kolejności katalogu i wybrać pierwszy model z użytecznym, aktywnym poświadczeniem dostawcy.
4. `callAudioTranscription()` konwertuje audio base64/data-URI na wieloczęściowy `file` lub pobiera zdalny `audio_url` przez zabezpieczenie ruchu wychodzącego wyłącznie dla sieci publicznej z przypinaniem DNS i ograniczeniem do 25 MB. Następnie wysyła plik i wybrany model metodą POST do lokalnej pętli zwrotnej `/v1/audio/transcriptions`, uwierzytelnionej za pomocą `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcji wykonuje standardowe wyszukiwanie poświadczeń, obsługę czasu ostygnięcia (cooldown) / limitów częstotliwości oraz dyspozycję dostawcy.
5. Pomyślne wywołania zastępują swoje części wartością `[Audio N]: <transcript>`. Wywołania są uruchamiane za pomocą `Promise.allSettled`: pojedyncza awaria zachowuje tę oryginalną część audio (kontrakt #4012). Jeśli każde wywołanie zakończy się niepowodzeniem, a cel okaże się `supportsAudio === false`, części staną się `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430). W przypadku nieznanego celu (`null`), wynik całkowitego niepowodzenia pozostaje nienaruszony. Sprawdzony cel obsługujący wyłącznie tekst, bez użytecznych poświadczeń STT, otrzymuje ten sam jawny stub bez wysyłania żądania sieciowego.

Pomyślne transkrypcje korzystają z pamięci podręcznej LRU/TTL Modality Bridge o zasięgu procesu. Klucz łączy odniesienie do audio, stabilną etykietę operacji `audio-transcription` oraz wybrany model STT; błędy nigdy nie są buforowane. Próby audio aktualizują współdzielone liczniki `bridged`, `cacheHits`, `failures` oraz `lastUsedAt`. Przekształcone odpowiedzi zawierają nagłówek `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nietknięte żądania nie otrzymują segmentu Audio Bridge.

Ustawienia środowiska wykonawczego są oparte na bazie danych i walidowane przez Zod:

| Klucz                         | Domyślnie | Zakres          |
| ----------------------------- | --------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —               |
| `modalityBridgeAudioModel`    | `""`      | Auto lub STT ID |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10            |

Współdzielona pamięć podręczna pozostaje kontrolowana przez `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz `modalityBridgeCacheMaxEntries`.

### Most wideo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje części wideo najwyższego poziomu w elementach `messages` interfejsu Chat Completions oraz `input` interfejsu Responses API przed wywołaniem celu bez znanej natywnej obsługi wideo. Obsługiwane kształty to `input_video`, `video_url`, `video_source`, adresy URL HTTPS oraz URI danych `data:video/*;base64,...`. Zwykłe nazwy plików w tekście nie są traktowane jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie przez żądanie, sprawdzenie możliwości/polityki, agregację dla każdego żądania oraz ładunek odpowiedzi. Praca dla każdego wideo — pozyskiwanie, pamięć podręczna całego wyniku, opis sekwencji klatek (która łączy wszelkie zadeklarowane przez wywołującego transkrypcje audio) oraz metryki/przerwane/czyszczenie dla każdej próby — jest ukryta za `processVideoPart` w `videoBridgePipeline.ts`, wywoływanym raz dla każdej części wideo w pętli `preCall`. Moduł ten definiuje również wyraźne granice portów: `VideoMediaBrokerPort` (pozyskiwanie bajtów i wyodrębnianie próbek klatek), `VideoAudioTranscriptionPort` (łączenie zadeklarowanej przez wywołującego transkrypcji audio z próbkami napisów) oraz `VideoDrilldownPort` (granica trwałości szczegółów klatek; jeszcze niepodłączona do `processVideoPart` — obecnie tylko oddzielna trasa `/api/modality-bridge/video/drilldown` zapisuje wpisy szczegółów).

Publiczna ścieżka żądań `/v1` nigdy nie importuje ani nie wywołuje podprocesu. Zdalne pliki wideo są pobierane przy ograniczeniu do 50 MiB; wbudowane pliki wideo base64 mają konserwatywny limit 36 MiB zdekodowanych danych na plik wideo, dzięki czemu koperta modelu/wiadomości/kadrowania może pozostać w granicach publicznego limitu przyjmowania żądań JSON wynoszącego 50 MiB. Szacunki długości i zdekodowanego rozmiaru wbudowanego są sprawdzane przed alokacją. Protokół HTTPS jest wymagany dla początkowego zdalnego adresu URL oraz każdego przekierowania, przy użyciu istniejącego zabezpieczenia ruchu wychodzącego wyłącznie dla sieci publicznej z przypinaniem DNS. Następnie bajty przekraczają dokładną wewnętrzną granicę brokera `POST /api/modality-bridge/video/extract`. Ta trasa ma zarówno flagę `LOCAL_ONLY`, jak i `SPAWN_CAPABLE`, akceptuje wyłącznie żądanie uwierzytelnione w ramach procesu z zaufanej pętli zwrotnej i nigdy nie akceptuje adresu URL, ścieżki systemu plików, pliku wykonywalnego ani listy argumentów. Potok rozmiaru treści API oraz inkrementalny czytnik treści obsługi niezależnie egzekwują limit wejściowy brokera wynoszący 50 MiB. Jego ograniczona kolejka wykonuje jedną ekstrakcję naraz, pozwala na cztery oczekujące zadania i ogranicza oczekujące dane wejściowe do 100 MiB.

Wewnątrz brokera `ffprobe` odczytuje prywatny plik lokalny; stała lista dozwolonych formatów wyklucza formaty list odtwarzania oraz manifestów. W przypadku dozwolonych kontenerów rodziny MOV, zewnętrzne odniesienia do danych MOV pozostają domyślnie wyłączone, a stałe polecenie ich nie włącza. Zarówno `ffprobe`, jak i `ffmpeg` korzystają z białej listy protokołów zawierającej wyłącznie `file`, jednego wątku, stałych tablic argumentów, bez powłoki, a pliki wykonywalne są rozwiązywane z `PATH`. Strumienie okładek będące załączonymi obrazami nie kwalifikują się do odtwarzania. Wszystkie odtwarzalne strumienie muszą spełniać limity, a jawny strumień domyślny ma pierwszeństwo przed deterministycznym mechanizmem awaryjnym opartym na najniższym indeksie. Wideo jest ograniczone do 600 sekund, 8 192 pikseli na wymiar oraz 33 554 432 pikseli źródłowych. FFmpeg próbkuje od 1 do 16 środkowych klatek JPEG, skaluje dłuższą krawędź do maksymalnie 1 024 pikseli bez powiększania mniejszych danych wejściowych i nigdy nie otrzymuje adresu URL. Próbkowanie jest domyślnie typu `uniform`. Opcjonalne polityki `scene_aware` oraz eksperymentalna `segment_aware` wykonują jeden dodatkowy, stały przebieg FFmpeg na zweryfikowanym już strumieniu lokalnym, wybierają ograniczone znaczniki czasu scen `showinfo` i w sposób deterministyczny powracają do tych samych równomiernych punktów środkowych w przypadku awarii detektora, przekroczenia czasu oczekiwania, wadliwego wyjścia lub pustego zestawu kandydatów. Tryb świadomy segmentów przydziela próbki punktów środkowych proporcjonalnie do zweryfikowanych interwałów scen; dowody dla trybu świadomego segmentów oraz zachowanie w przypadku awarii opisano szczegółowo poniżej. Twardy limit 16 klatek jest stosowany po wyborze w każdej polityce. Gdy żądanie uwzględniające sceny ma budżet wynoszący tylko jedną klatkę, używa ono równomiernego punktu środkowego aktywnego pełnego wideo lub okna skupienia i zgłasza `policyEffective: uniform`: pojedyncza wybrana klatka sceny nie jest w stanie zachować obu końców czasowych. Wywołujący może opcjonalnie podać skończone okno skupienia (w sekundach `start`/`end`); granice są przycinane do czasu trwania mediów, odwrócone lub nieskończone okna są odrzucane, a wszystkie polityki próbkowania są wykonywane wyłącznie wewnątrz znormalizowanego interwału. Powstałe okno jest uwzględniane w metadanych próbkowania oraz w niezaufanym prefiksie opisu, aby modele dalszego szczebla mogły odróżnić skupiony fragment od pełnej osi czasu.

Skupienie na podpisie semantycznym to osobne, jawne ustawienie. Domyślny tryb analizy `full` zachowuje istniejący prompt klatki i nigdy nie przesyła tekstu żądania do modelu podpisu. W trybie `focused` mostek odczytuje tylko najnowszy, niepusty element `text`/`input_text` utworzony przez użytkownika z tego samego kontenera Chat lub Responses, normalizuje go do postaci NFC, redukuje znaki sterujące i białe znaki oraz ogranicza go do 500 punktów kodowych Unicode. Pusty wynik powoduje powrót do dokładnego promptu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym bloku niezaufanego kontekstu użytkownika i może priorytetyzować wyłącznie zauważalne szczegóły; nie może ona zastąpić odrębnego ostrzeżenia przed podążaniem za instrukcjami widocznymi lub słyszalnymi w mediach. Skupienie tekstowe nigdy nie wnioskuje o wartościach `start`/`end` ani nie zmienia próbnika czasowego.

#### Dowody strukturalne segmentów FU-07

`segment_aware` wykorzystuje jeden ograniczony przebieg wstępnej analizy na zweryfikowanym już lokalnym strumieniu wideo. Stały łańcuch filtrów najpierw skaluje obraz do szerokości maksymalnie 320 pikseli, wykrywa zmiany scen i zamrożone interwały, a następnie próbkuje z częstotliwością 1 klatki na sekundę pod kątem rozmycia, średniej lumy oraz informacji przestrzennych/czasowych. Przebieg ten jest ograniczony do 600 próbek strukturalnych, jednego wątku FFmpeg/filtru, tych samych białych list protokołów i kontenerów zawierających wyłącznie `file`, limitu wyjściowego procesu wynoszącego 1 MiB oraz maksymalnie 30 sekund w ramach współdzielonego mechanizmu przerwania/terminu brokera. Nigdy nie akceptuje polecenia, filtra, ścieżki ani adresu URL z żądania.

Wartości strukturalne stanowią deterministyczne dowody próbkowania, a nie semantyczne zrozumienie wideo. Nie wnioskują one o obiektach, akcjach, podpisach, mowie ani intencjach użytkownika. Granice scen i zamrożeń tworzą segmenty; stopień zamrożenia, rozmycie, ekspozycja, szczegóły przestrzenne i zmiana w czasie wpływają wyłącznie na sposób alokacji istniejącego budżetu 1–16 klatek. Segment w pełni zamrożony jest ograniczony do jednej klatki, podczas gdy segmenty niezamrożone konkurują o pozostały budżet. Gdy granic jest więcej niż klatek, zachowywane jest równomierne pokrycie osi czasu, aby szybkie cięcia na początku nie ukryły długiego segmentu końcowego. Granice scen mieszczące się w 1-sekundowej rozdzielczości analizy granicy zamrożenia są scalane.

Brakujące filtry, wadliwe/puste dowody, błąd detektora lub przekroczenie czasu ograniczonej wstępnej analizy powodują awaryjne przejście do dokładnej polityki równomiernych punktów środkowych. Przerwanie przez wywołującego lub upłynięcie terminu brokera nie powoduje jawnego przejścia awaryjnego: powoduje ono terminację uruchomionego podprocesu, uniemożliwia późniejszą ekstrakcję klatek, a prywatne drzewo tymczasowe jest usuwane w bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne, rzeczywiste artefakty FFmpeg dla oszczędności wywołań podpisu po deduplikacji, alokacji budżetu gęstego ruchu, dowodów rozmycia/ekspozycji/SI-TI, szybkich cięć z długim ogonem oraz fałszywych alarmów powolnego wygaszania. Rejestruje on czas rzeczywisty wstępnej analizy oraz, jeśli dostępny jest program `/usr/bin/time`, wykorzystanie procesora przez proces potomny oraz szczytowe zużycie pamięci RSS. Jego kontrole jakości są wyłącznie wyroczniami strukturalnymi. Jakość rzeczywistego modelu podpisu pozostaje w stanie `HOLD`, ponieważ ten zestaw testowy nie ma autoryzowanego punktu końcowego ani zamrożonego sędziego. Oszczędności finansowe również pozostają w stanie `HOLD`, chyba że `--caption-cost-per-call-usd` dostarczy jawne, dodatnie szacunki kosztu na jedno wywołanie; skrypt nigdy nie zmyśla żadnego z tych wyników.

Każda klatka jest ograniczona do 4 MiB, wszystkie surowe klatki razem do 23 MiB, a zserializowana odpowiedź brokera do 32 MiB. Prywatny katalog tymczasowy jest usuwany w bloku `finally`. OmniRoute nie zawiera pakietu FFmpeg i nie akceptuje niestandardowej ścieżki pliku wykonywalnego. Przed wygenerowaniem podpisów most stosuje zachowawczy przebieg deduplikacji wizualnej: każdy plik JPEG jest zmniejszany do bufora w skali szarości 16×16 i porównywany wyłącznie z ostatnią zachowaną klatką. Dla żądanego budżetu podpisów przekraczającego jedną klatkę, ekstrakcja dostarcza ograniczoną pulę kandydatów wynoszącą maksymalnie dwukrotność tego budżetu i nie więcej niż 16 klatek. Żądany limit jest stosowany dopiero po deduplikacji, przy czym pierwszy i ostatni wybrany kandydat są zachowywane podczas ostatecznego przerzedzania, gdy budżet wynosi co najmniej dwa. Wersjonowana zasada `grayscale-16x16-mean-cells-v2` używa większej wartości spośród średniej delty luminancji oraz stosunku komórek miniatur, których znormalizowana delta wynosi co najmniej 0,05. Próg duplikatów to stała 0,04, wybrana ze względu na przewidywalność, a nie udostępniana jako ustawienie środowiska wykonawczego. Ten dodatkowy sygnał o wysokim kontrascie zachowuje drobny ruch oraz zmiany widocznego tekstu, które porównanie oparte wyłącznie na średniej może pominąć. Błędy komparatora lub dekodera działają w trybie fail-open i zachowują pokrycie. Metadane wyjściowe oddzielają wyekstrahowanych kandydatów, pomyślnie użyte klatki oraz odrzucone duplikaty wizualne.

Wyraźnie oznaczona część wideo może zażądać arkusza kontaktowego ze znacznikami czasu. Most buduje siatkę JPEG o maksymalnie 4 kolumnach i 16 klatkach. Każda komórka o rozmiarze 512 pikseli wypala swój źródłowy znacznik czasu w pasie o wysokim kontrascie na dole, podczas gdy te same znaczniki czasu pozostają w metadanych tekstowych do późniejszego powiązania i audytu. Kompletny plik JPEG pozostaje ograniczony do 32 MiB. Jeśli `sharp` nie może zdekodować lub skomponować siatki, most wraca do poszczególnych klatek JPEG; przerwanie przez klienta nadal propaguje się przez operację arkusza.

Dowody promocji są celowo oddzielone od syntetycznego mikrobenchmarku kompozycji. Plik `scripts/perf/video-bridge-contact-sheet-eval.ts` definiuje środowisko testowe A/B z wersjonowanym schematem dla rzeczywistych modeli wizyjnych kompatybilnych z OpenAI. Mierzy ono tokeny zgłaszane przez dostawcę, opóźnienie zegarowe end-to-end (w tym kompozycję arkusza), liczbę wywołań modelu oraz zachowanie faktów zdefiniowane w manifeście. Surowe odpowiedzi modelu nie są zapisywane w raporcie; zachowywane są tylko skróty SHA-256 i dopasowane identyfikatory faktów. Środowisko testowe nie wykonuje żadnych wywołań sieciowych ani płatnych wywołań modelu, chyba że przekazano flagę `--execute-real` oraz skonfigurowano zmienne `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez tego wyraźnego, rzeczywistego uruchomienia jego werdykt odczytywalny maszynowo pozostaje `HOLD`; same pomiary ładunku syntetycznego / liczby wywołań nie stanowią dowodu promocji.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do obsługiwanej części wideo, jeśli posiadają już wyrównany tekst. Każdy znacznik musi zawierać `text`, skończony interwał `start`/`end` wewnątrz badanego czasu trwania oraz dozwoloną na białej liście wartość `source` (`client`, `embedded` lub `audio-bridge`); domyślna wartość `confidence` to `1` i musi ona mieścić się w zakresie od `0` do `1`. Dokładne duplikaty znaczników są zwijane. OmniRoute nigdy nie rozpoczyna transkrypcji na podstawie tych metadanych: zweryfikowane znaczniki są kopiowane do opisanego wyniku wraz ze źródłem, poziomem pewności i interwałem, i są renderowane jako niezaufane obserwacje obok podpisów klatek. Nieprawidłowy tekst, tekst spoza zakresu lub pozbawiony pochodzenia jest odrzucany zamiast być mieszanym ze strumieniem podpisów. Oba kanały transkrypcji w treści żądania normalizują dostarczone pochodzenie do `client`, w tym samodzielnie zadeklarowane etykiety `embedded` lub `audio-bridge`. Tylko adapter należący do serwera może przypisać te zaufane etykiety za pomocą argumentu `trustedSource` dostępnego wyłącznie w kodzie; pole JSON żądania nie może dotrzeć do tego argumentu. Tekst transkrypcji pozostaje niezaufaną treścią pochodzącą z mediów, niezależnie od swojego pochodzenia, i nigdy nie może decydować o autoryzacji.

Zaawansowany wywołujący może dostarczyć ścieżkę `audioTranscript` dla tego samego wideo; jest ona traktowana jako tekst dostarczony przez klienta, a nie dowód transkrypcji serwerowej. Warstwa scalania wykonuje obserwacje wizualne i dźwiękowe pod wspólnym terminem ostatecznym i sygnałem przerwania, porządkuje je na wspólnej osi czasu, zwija dokładne duplikaty i zgłasza wynik częściowy, gdy powiedzie się tylko jedna strona. Nieprawidłowy `audioTranscript` degraduje do tego częściowego wyniku — opis wizualny zostaje zachowany, a gałąź audio rejestruje oczyszczony kod błędu — zamiast powodować awarię całego wideo. Dostępność dla każdej gałęzi, flaga częściowości oraz oczyszczone kody błędów są zachowywane w opisanym wyniku, w metadanych mechanizmów ochronnych (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), w metadanych pamięci podręcznej wyników oraz w licznikach scalania mostu. Domyślna ścieżka Video Bridge nie wywołuje funkcji zamiany mowy na tekst ani nie pobiera drugiej kopii mediów; bez tej jawnej ścieżki pozostaje ona ścieżką wyłącznie wideo.

**Retencja transkrypcji (#12150 P1).** Dotyczy to automatycznie każdej sytuacji, w której Most Wideo (sam w sobie opcjonalny) renderuje wskazówkę transkrypcji — nie ma osobnej flagi retencji. Gdy żądanie renderuje dowolną wskazówkę transkrypcji (zadeklarowaną przez wywołującego `transcript` lub połączoną `audioTranscript`), mechanizm zabezpieczający (guardrail) oznacza ją jako `videoBridgeObserved` i generuje ocenzurowany cień opisu wideo — identyczne renderowanie, w którym treść tekstowa każdej wskazówki zostaje zastąpiona przez `[redacted-video-transcript]`, utworzony poprzez zastąpienie strukturalnego pola wskazówki przed złożeniem ciągu znaków (nigdy poprzez parsowanie spłaszczonego tekstu, dzięki czemu żadna treść wskazówki — adwersarialna lub zwykła, w tym treści zawierające `]` takie jak `[inaudible]`/`[music]` — nie przetrwa). Trwale utrwalane ciało żądania w dzienniku wywołań zamienia każdą część tekstową pochodzącą z wideo na ten ocenzurowany cień, dopasowany na podstawie równości treści; kotwica `fullText` jest odczytywana ponownie z gotowego payloadu mechanizmu zabezpieczającego sprzed wywołania, dzięki czemu dopasowanie nadal się udaje, nawet jeśli późniejsze zabezpieczenia w łańcuchu (maskujące PII i dane uwierzytelniające, priorytety 10/95) nadpiszą tekst opisu w miejscu oraz po tym, jak wstrzyknięcie promptu systemowego/przekazania/pamięci zmodyfikuje tablicę komunikatów. Ciało wysyłane w górę (upstream) do modelu pozostaje bez zmian. Zaobserwowane żądanie nie zasila również trwałej Pamięci (pomijane jest wydobywanie danych zarówno z żądania, jak i odpowiedzi), dzięki czemu własna odpowiedź modelu nie może powtórzyć tekstu transkrypcji w Pamięci.

**Surowe pola wideo (#12430).** Gdy most jest włączony, a natywna obsługa wideo jest nieznana lub jej brak, zdefiniowane pola `transcript`/`audioTranscript` również aktywują `videoBridgeObserved`, nawet w przypadku awarii opisu lub osiągnięcia limitu `maxVideos`. Wartości `null` i puste łańcuchy znaków są uwzględniane; brakujące pola oraz metadane niebędące wideo — nie. Zachowane kopie cenzurują te pola lub pomijają żądanie, a pamięci podręczne i Pamięć są omijane.

Na tych ścieżkach awaryjnych poprawne wskazówki wywołującego stają się wspieranymi częściami `text`/`input_text`, a nie niestandardowymi polami dostawcy. Obie ścieżki dostarczone w żądaniu pozostają niezaufanymi obserwacjami typu `client`, z wyraźnym ostrzeżeniem, że wideo nie zostało opisane, a znaczniki czasu nie zostały zweryfikowane względem mediów. Istniejące limity 256 wskazówek / 64 KiB łącznie oraz na wskazówkę mają zastosowanie do obu ścieżek łącznie; znaczniki czasu muszą mieścić się w limicie 600 sekund brokera oraz w dowolnym dostarczonym oknie skupienia. Nieprawidłowe ścieżki są odrzucane, a nie przekazywane jako dowolny tekst; poprawna ścieżka powiązana (sibling) może nadal zostać użyta, o ile nie zostanie przekroczony ich łączny budżet. Pola o wartościach `null` / puste nie dodają żadnego tekstu. Ta ścieżka awaryjna nie dodaje pobierania mediów ani transkrypcji. Pola rozszerzeń transkrypcji są usuwane z awaryjnego nośnika wideo oraz jego obiektów `video_url`/`source`. Biała lista protokołu OpenAI pozostaje rygorystyczna; nośniki wideo o nieznanej natywnej obsłudze pozostają dostępne, a znane cele wyłącznie tekstowe zachowują bezpieczne znaczniki. Ustrukturyzowane cienie cenzury chronią dołączony tekst transkrypcji, podczas gdy oryginalne żądanie należące do wywołującego pozostaje niezmienione. Cele z natywnym wsparciem oraz wyłączone mosty zachowują swoje dotychczasowe zachowanie polegające na omijaniu (bypass).

Dodatkowe zachowane kopie używają tego samego sygnału zaobserwowanego żądania. Surowy zrzut żądania klienta przed mechanizmem zabezpieczającym, oczekujące żądanie w pamięci oraz log wcześnie odrzuconych żądań strukturalnie zastępują pola transkrypcji w częściach wideo; prompty tekstowe zsyntetyzowane przez etapy potoku i przekazanie kontekstu są cenzurowane w punkcie zapisu utrwalonego ciała żądania. Utrwalony znacznik `video_content_removed` sprawia, że kontynuacja `previous_response_id` kończy się awarią z zamknięciem (fail closed) zamiast rekonstruować tekst, który został celowo odrzucony. Jeśli zaobserwowane żądanie utraci swój cień cenzury dla poszczególnych części przed zalogowaniem, lub jeśli chociaż jeden z kilku cieni wideo nie dopasuje się po późniejszych modyfikacjach żądania, zachowane ciało żądania jest pomijane w całości zamiast zachowywać częściowo ocenzurowaną transkrypcję.

W przypadku zaobserwowanego żądania odpowiedź modelu może zacytować dowolną część transkrypcji bez ustrukturyzowanej granicy wskazówki. Dlatego trwałe pole `responseBody` w dzienniku wywołań jest zastępowane znacznikiem pominięcia; szczegółowy artefakt potoku (który może zawierać ciała po stronie dostawcy/klienta oraz fragmenty strumienia) nie jest zachowywany. Pamięci podręczne semantyczne, idempotencji oraz odtwarzania rozumowania omijają operacje odczytu i zapisu dla tego żądania. Żądanie dostawcy i odpowiedź widoczna dla klienta pozostają bez zmian. Wczesne bajty keepalive są usuwane z bufora tymczasowego, gdy szczegółowy artefakt zostaje pominięty. Ostrzeżenie o nieprawidłowym elemencie EventStream w Kiro zgłasza jedynie liczbę bajtów ładunku, nigdy jego zawartość ani surowy błąd parsera JSON.
Nie oznacza to, że każda niepowiązana diagnostyka dostawcy/wtyczki została poddana audytowi; szersze czyszczenie zachowanych punktów zapisu jest śledzone w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` jest osobnym podłożem pamięci podręcznej uwierzytelnianym za pomocą pętli zwrotnej (loopback) lub tokena. Każda operacja wymaga również kanonicznego, nieprzezroczystego identyfikatora podmiotu (principal ID). Zanim wywołujący produkcyjny zostanie włączony, musi wyprowadzić ten identyfikator z uwierzytelnionego najemcy i nigdy nie może przekazywać wartości wybranej przez klienta. Klucze pamięci podręcznej wiążą ten podmiot z kanonicznymi identyfikatorami sesji i odniesienia do wideo, przechowują tylko ich klucze pochodne SHA-256 oraz ograniczają zarówno odczyty, jak i usuwanie do tego samego podmiotu. Pamięć podręczna przechowuje co najwyżej 16 pochodnych klatek JPEG na wpis, wygasza je po dziesięciu minutach oraz obsługuje ograniczone odczyty `start`/`end` lub jawne usunięcie sesji.

Każdy podmiot jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych JPEG. Limity te są niezależne od globalnego sufitu 64 wpisów / 256 MiB: presja kwotowa podmiotu powoduje eksmisję tylko wpisów tego podmiotu, które były najdawniej używane, zanim rozważona zostanie globalna eksmisja LRU. Wygasłe wpisy są usuwane zarówno z rozliczania podmiotu, jak i globalnego rozliczania podczas aktywności pamięci podręcznej, podczas gdy anulowanie i błąd walidacji nie zatwierdzają częściowej zamiany.

Pamięć podręczna odrzuca niekanoniczny format Base64, nadmiarowe dopełnienie, media inne niż JPEG, uszkodzone lub obcięte pliki JPEG oraz pliki JPEG, które generują ostrzeżenie podczas ograniczonego dekodowania całego obrazu za pomocą `sharp`. Ponownie koduje każdą zaakceptowaną grafikę jako kanoniczny plik JPEG, wyznacza szerokość i wysokość z odkodowanych bajtów zamiast ufać polom wywołującego oraz odrzuca wszelkie końcowe dodatkowe bajty zamiast ich zachowywania. Tylko ograniczony kanoniczny bufor skompresowany jest wliczany do obu limitów. Limit transmisji JSON uwzględnia narzut Base64 dla ograniczenia zdekodowanego wejścia wynoszącego 32 MiB. Każda zapisana pochodna rejestruje swój zweryfikowany format/rozdzielczość JPEG, zasadę próbkowania, wersję pochodnej, czas utworzenia, obliczony przez serwer skrót zawartości oraz zahashowane odwołanie do elementu nadrzędnego wraz ze skrótem zawartości nadrzędnej zaufanego wywołującego. Anulowanie jest sprawdzane pomiędzy asynchronicznymi fazami dekodowania/hashowania przed zatwierdzeniem atomowej pamięci podręcznej.

Ta transza nie łączy jeszcze produkcyjnego producenta z trasą i nie zapewnia wyboru wariantów o wielu rozdzielczościach. Transparentna ścieżka żądania Video Bridge nie generuje zatem dodatkowej pracy, podczas gdy wyprowadzanie pryncyfa powiązanego z dzierżawcą oraz pełny cykl życia wielu rozdzielczości FU-08 pozostają jawnymi zadaniami do wykonania w przyszłości, a nie udokumentowanym, ukończonym zachowaniem.

Klatki są podpisywane sekwencyjnie przy użyciu skonfigurowanego modelu wideo. Puste nadpisanie wideo dziedziczy ustawienie Vision; jeśli oba są puste, automatyczny router Vision wybiera efektywny model obsługujący widzenie. Pomyślne podpisy zastępują oryginalną część stabilnym prefiksem `[Video description:`, który oznacza również tekst jako niezaufaną obserwację pochodzącą z mediów i instruuje modele podrzędne, aby nie podążały za instrukcjami znalezionymi w mediach. Klucze pamięci podręcznej podpisów klatek zawierają bajty JPEG, prompt, znacznik czasu oraz efektywny model; w pamięci podręcznej zapisywane są wyłącznie pomyślne podpisy. Wpisy pamięci podręcznej zachowują faktyczny model producenta, któremu się powiodło, w tym model zapasowy; mostek zgłasza wartość `mixed`, gdy poszczególne klatki zostały wyprodukowane przez różne modele. Trafienie w pamięć podręczną wykorzystuje ponownie tę tożsamość producenta zamiast zmieniać jej etykietę na żądany plan routingu. Pamięć podręczna wyników dla całego wideo jest kluczowana na podstawie każdego wejścia, które zmienia wynik — promptu, efektywnego modelu, zasady próbkowania, liczby klatek, trybu analizy semantycznej, odcisku palca SHA-256 znormalizowanej wskazówki ostrości, okna ostrości, `transcript`, `audioTranscript` oraz flagi arkusza kontaktowego — więc zmiana któregokolwiek z tych wymiarów skutkuje minięciem pamięci podręcznej, a nigdy ponownym użyciem nieaktualnych danych. Wersja zasady wizualnego usuwania duplikatów, próg oraz ograniczona liczba klatek kandydatów są również jawne w kluczu pamięci podręcznej wyników oraz w metadanych; zmiana zasady nie pozwala zatem na ponowne użycie nieaktualnego opisu całego wideo. Metadane pamięci podręcznej wyników w wersji v4 przechowują tryb oraz odcisk palca, nigdy surowe zadanie użytkownika. Metadane mechanizmu zabezpieczającego zgłaszają zarówno żądane, jak i efektywne tryby analizy; żądany tryb `focused` bez użytecznego tekstu użytkownika jest zgłaszany jako efektywnie `full`.

Mechanizm zabezpieczający wyodrębnia każdą obsługiwaną część wideo, ale opisuje nie więcej niż `modalityBridgeVideoMaxVideos`. W przypadku celu, co do którego udowodniono, że ma wartość `supportsVideo === false`, nieudane i przekraczające limit filmy stają się wyraźnymi znacznikami bezpiecznego tekstu, dzięki czemu żaden surowy materiał wideo nie przetrwa. Gdy zdolność jest nieznana, części te zachowują swój nośnik wideo; wszelkie transkrypcje zapasowe podlegają powyższej ograniczonej konwersji tekstu. Cele z wartością `supportsVideo === true` omijają mostek. Sygnał przerwania żądania klienta rozchodzi się przez pobieranie, kolejkę brokera, procesy potomne oraz wywołania podpisów; przerwania zatrzymują się pomiędzy filmami i nigdy nie przepuszczają surowych mediów w trybie awaryjnym.

Ustawienia środowiska wykonawczego są oparte na bazie danych i weryfikowane za pomocą Zod:

| Klucz                               | Domyślnie   | Zakres / zachowanie                                                                                            |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcjonalne w czasie wykonania, włączane opcjonalnie                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, niezaufanego najnowszego kontekstu użytkownika |
| `modalityBridgeVideoModel`          | `""`        | Dziedzicz model Vision Bridge                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` lub proporcjonalne `segment_aware`; awaria detektora powraca do `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                 |

Starsze utrwalone wartości limitu czasu wideo powyżej 120 sekund są ograniczane do ostatecznego terminu brokera; nowe zapisy ustawień powyżej tego limitu są odrzucane.
`GET /api/modality-bridge/video/runtime` wymaga zaufanej, opatrzonej znacznikiem lokalności loopback przed uwierzytelnieniem lub sondowaniem czasu wykonania, a następnie wymaga uwierzytelnienia zarządzania. Zwraca wyłącznie pole `available`, oczyszczone wersje FFmpeg/ffprobe oraz stały powód, gdy środowisko wykonawcze jest niedostępne. Wewnętrzny punkt końcowy ekstrakcji nie jest publicznym API przesyłania: nasycenie kolejki zwraca kod `503` wraz z nagłówkiem `Retry-After`, rozłączenie wywołującego zwraca `499`, a ustalony ostateczny termin brokera zwraca `504`. Przekonwertowane odpowiedzi dodają ciąg `video->text;model=<visionModel>;parts=<videos>` do centralnego nagłówka `x-omniroute-modality-bridge` bez usuwania segmentów Vision lub Audio.

### Maska danych PII (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje ładunek, przeszukuje `system`, `messages`, `input` oraz
  `prompt` (w tym zwykłe elementy ciągów znaków) i stosuje `processPII()` (z
  biblioteki `@/shared/utils/inputSanitizer`) do pól tekstowych `content`/`text`. Gdy
  `PII_REDACTION_ENABLED=true`, wykryte dane PII są redagowane w wychodzącym
  ładunku. Jest to niezależne od `INPUT_SANITIZER_MODE` (który steruje jedynie
  polityką wstrzykiwania promptów). Gdy redakcja jest wyłączona, wywołanie
  rejestruje liczby wykryć bez modyfikowania zawartości.
- **`postCall`** wykonuje głębokie klonowanie odpowiedzi, uruchamia `sanitizePIIResponse()` oraz
  masker o strukturze Responses-API (`maskResponsesOutput` — obejmuje
  `output_text` oraz `output[].content[].text`). Jeśli dojdzie do jakiejkolwiek
  redakcji, zmodyfikowana odpowiedź zastępuje oryginał.

Mechanizm zabezpieczający nigdy nie blokuje; jedynie dodaje adnotacje (`meta.detections`,
`meta.redacted`) lub modyfikuje zawartość.

#### Wybór według typów, niestandardowe wzorce i liczniki wykryć

**Dashboard → Settings → Security → PII masking** wybiera, _co_ jest maskowane. Nie
włącza to samego maskowania: za to odpowiadają nadal zmienne `PII_REDACTION_ENABLED` (żądanie)
oraz `PII_RESPONSE_SANITIZATION` (odpowiedź + SSE), które domyślnie są wyłączone.

- **Wybór według typów** — wbudowane identyfikatory są wymienione w
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Brak wyboru oznacza każdy
  typ (zachowanie sprzed istnienia tego ustawienia). Wzorzec `ssn_us` silnika żądań
  mapuje się na `ssn`. Szablony (Minimal, Standard, Financial,
  Brazilian, USA, Full) wypełniają jedynie pola wyboru w interfejsie użytkownika.
- **Niestandardowe wzorce** — maksymalnie 20 wzorców wyrażeń regularnych lub symboli wieloznacznych (`*` = do 64
  znaków niebędących białymi znakami, `?` = jeden). Dopasowania stają się wartością `[CUSTOM_REDACTED]`.
  Każdy wzorzec przechodzi przez funkcję `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maksymalnie 500 znaków, flagi ograniczone
  do `g i m s u`, musi się poprawnie skompilować, przejść test `safe-regex` (katastrofalne
  nawroty) oraz nie dopasowywać pustego ciągu znaków ani symbolu zastępczego redakcji.
  Wzorzec, który zawiedzie, jest odrzucany podczas zapisu i testowania, a przechowywany wiersz,
  który zawiedzie, jest pomijany w czasie wykonywania zamiast być kompilowany. Niestandardowe wzorce działają
  tylko wtedy, gdy maskowanie jest włączone.
- **Liczniki wykryć** — liczniki dla poszczególnych typów (nigdy dopasowane wartości), przechowywane w
  pamięci i resetowane przy ponownym uruchomieniu (`src/lib/pii/piiDetectionStats.ts`). Rosną one
  tylko wtedy, gdy maskowanie jest włączone.

Ustawienia znajdują się w tabeli `key_value` (przestrzeń nazw `pii_settings`,
`src/lib/db/piiSettings.ts`) i są odczytywane za pomocą 1-sekundowej pamięci podręcznej. API:

| Metoda | Ścieżka                  | Przeznaczenie                                                                                       |
| ------ | ------------------------ | --------------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stan flagi, `enabledTypes`, `customPatterns`, liczniki wykryć                                       |
| `PUT`  | `/api/settings/pii`      | Zastąpienie `enabledTypes` (`null` = wszystkie) i/lub `customPatterns`                              |
| `POST` | `/api/settings/pii/test` | Testowe uruchomienie jednego wzorca na próbce o wielkości co najwyżej 8 KB; nic nie jest zapisywane |

Wszystkie trzy wymagają uwierzytelniania administracyjnego i walidują treść za pomocą Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Wstrzykiwanie promptów (`promptInjection.ts`)

Wykrywa struktury wrogie w treści dostarczonej przez użytkownika i egzekwuje
skonfigurowaną politykę. Zachowanie jest sterowane przez zmienne środowiskowe i opcje
konstruktora:

| Ustawienie      | Zmienna środowiskowa                                                                                 | Domyślnie | Efekt                                                                                                                                                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Włączone        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Gdy `false`, mechanizm zabezpieczający przerywa działanie.                                                                                                                                                                                      |
| Tryb            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Polityka wstrzykiwania: `block`, `warn` lub `log`. (`redact` jest akceptowane dla kompatybilności wstecznej, ale **nie** usuwa tekstu wstrzyknięcia; ponowne zapisywanie danych PII w żądaniu jest kontrolowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokowania | opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimalny poziom ważności wymagany do zablokowania. Poziom średni (medium) jest domyślnie tylko w trybie obserwacji.                                                                                                                            |

**Priorytet trybów** (`getMode`): `options.mode` wywołującego →
nadpisanie **flagi funkcji w bazie danych (DB feature-flag override)** dla `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → zmienna środowiskowa `INJECTION_GUARD_MODE` → zmienna środowiskowa `INPUT_SANITIZER_MODE` →
`warn`. Nadpisanie z poziomu dashboardu ma zatem wyższy priorytet niż zmienne środowiskowe, dzięki czemu interfejs
flag funkcji steruje działającą barierą na żywo (bez restartu). Odczyt z bazy danych jest odporny na awarię:
jeśli zwróci błąd, mechanizm powraca do zachowania opartego na zmiennych środowiskowych, a gdy brak
nadpisania, zachowanie jest identyczne z rozstrzyganiem wyłącznie na podstawie zmiennych środowiskowych.

Źródła wykrywania:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (współdzielony zestaw detektorów
   używany w innych miejscach potoku).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (obecnie `system_override_inline` oraz
   `markdown_system_block`, oba o stopniu ważności `high`).
3. Opcjonalne `customPatterns` przekazywane w opcjach konstruktora (ciągi znaków, wyrażenia regularne
   lub rekordy `{ name, pattern, severity }`).

Gdy `mode === "block"` **i** co najmniej jedno wykrycie spełnia próg istotności, `preCall` zwraca `{ block: true, message: "Request rejected: suspicious content detected" }`. W trybach `warn`/`log` mechanizm ochronny loguje zdarzenie, ale pozwala na wywołanie. Współdzielony pomocnik `evaluatePromptInjection()` jest również eksportowany dla wywołujących, którzy muszą oceniać prompty bez przechodzenia przez rejestr.

**Granica skanowania (v3.8.20):** detektor analizuje tylko **pierwsze 16 KB** połączonego tekstu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtów) w pliku `src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i `evaluatePromptInjection()` wywołują `slice(0, MAX_INJECTION_SCAN_BYTES)` przed uruchomieniem pętli wzorców. Dyrektywy wstrzykiwania znajdują się blisko początku danych wejściowych, co ogranicza narzut CPU/GC związany z wyrażeniami regularnymi na payloadach wielkości setek kilobajtów bez osłabiania skuteczności wykrywania (por. #3932, #4041).

### Maskownik poświadczeń (`credentialMasker.ts`)

Uruchamiany na **obu** etapach, jako ostatni w domyślnym łańcuchu (priorytet `95`). Maskuje dobrze znane wzorce kluczy API / poufnych tokenów z wychodzącego payloadu (zawartość wiadomości, argumenty wywołania narzędzia, wyniki narzędzia) **oraz** odpowiedzi dostawcy, dzięki czemu poświadczenie wklejone do promptu (lub zwrócone w wyniku działania narzędzia) nie wycieka do dostawcy nadrzędnego ani z powrotem do klienta.

- **Tylko w trybie opt-in**, ta sama konwencja co maskowanie PII (powiązane z Twardą Zasadą #20): wyłączone, dopóki `settings.credentialRedactionEnabled === true` **lub** `CREDENTIAL_REDACTION_ENABLED=true`. Gdy jest wyłączone, mechanizm ochronny jest operacją pustą (no-op) — nigdy nie blokuje ani nie modyfikuje treści.
- `redactCredentials()` przechodzi przez całe drzewo payloadu/odpowiedzi (`walkValue()`, bezpieczne pod kątem skażenia prototypu, bezpieczne pod kątem cykli dzięki `WeakSet`) i zastępuje dopasowania placeholderem `[REDACTED:<type>]`, klonując tylko te gałęze, które faktycznie uległy zmianie.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), klucze płatności (Stripe, Square), klucze chmurowe (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne / JWT, ciągi połączeń zawierające poświadczenia (`mongodb://user:pass@...` itp.) oraz ogólny wzorzec wartości nagłówka `Authorization`/`x-api-key`/`api-key`/`apikey`. Klucze o strukturze nagłówków (`authorization`, `x-api-key`, `api-key`, `apikey`) są maskowane strukturalnie (tylko wartość, prefiks schematu taki jak `Bearer `/`Basic ` jest zachowywany), a nie za pomocą ogólnego wyrażenia regularnego dla tekstu.
- Mechanizm ochronny nigdy nie blokuje; jedynie modyfikuje treść (`modifiedPayload` / `modifiedResponse`) i dodaje adnotacje (`meta.credentialsRedacted`, `meta.count`).

Zabezpieczenie przed regresją: `tests/unit/credential-masker-guardrail.test.ts`.

## Podstawowy kontrakt (`base.ts`)

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
  block?: boolean; // true przerywa łańcuch
  message?: string; // zwracane w przypadku zablokowania
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracane przez preCall w celu przepisania żądania
  modifiedResponse?: TValue; // zwracane przez postCall w celu przepisania odpowiedzi
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

Guardrail sygnalizuje „brak zmian”, zwracając `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przepływającą przez łańcuch dla kolejnych guardraili.
`signal?: AbortSignal` przekazuje cykl życia wywołującego do guardraili. Przerwanie żądania to celowy wyjątek typu fail-open: mostki mediów przerywają pracę i czyszczą zasoby bez przywracania surowych mediów do celu, o którym wiadomo, że ich nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje po znormalizowanej nazwie) guardrail i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje po aktywnych guardrailach, przesyła
  payload przez `modifiedPayload` i zatrzymuje się na pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne w celu zapewnienia czystej izolacji testów.

Oba mechanizmy wykonawcze zwracają `{ blocked, payload|response, results, guardrail?, message? }`
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola specyficzne dla każdego guardraila: `blocked`, `skipped`, `modified`, `error` i `meta`,
przydatne do śledzenia (tracingu).

### Wyłączanie guardraili dla poszczególnych żądań

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw guardraili, które powinny zostać pominięte dla bieżącego
żądania. Istnieje pięć kanałów, odczytywanych w tej kolejności i scalanych w jedną listę
(pierwsze wystąpienie wygrywa podczas deduplikacji):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` w ciele żądania (na najwyższym poziomie)
3. `metadata.disabledGuardrails` w ciele żądania (tylko wtedy, gdy `metadata` jest obiektem)
4. Nagłówek `x-omniroute-disabled-guardrails`
5. Starszy nagłówek `x-disabled-guardrails`

Wszystkie pięć kanałów jest scalanych, w tym oba nagłówki: wysłanie zarówno
`x-omniroute-disabled-guardrails`, jak i `x-disabled-guardrails` powoduje pominięcie sumy
ich list, a pusty nowoczesny nagłówek nie ukrywa już starszego
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), naprawiono w
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Wartości mogą być tablicami ciągów znaków lub ciągiem rozdzielonym przecinkami; nazwy są przycinane
i normalizowane do małych liter w formacie kebab-case (`pii_masker` → `pii-masker`), a puste wpisy są usuwane. Wynik jest przekazywany przez `context.disabledGuardrails`
do rejestru, który pomija pasujące guardraile (`skipped: true` w `results`).

Lista wyłączeń wpływa tylko na **rejestr**. Tryb `block` dla wstrzykiwania promptów jest
obowiązkową granicą: oprogramowanie pośredniczące ochrony przed wstrzykiwaniem
(`src/middleware/promptInjectionGuard.ts`) wywołuje `evaluatePromptInjection()`
bez żadnej kontrolowanej przez wywołującego listy wyłączeń (martwe wywołanie
`resolveDisabledGuardrails({ body })`, które wcześniej wykonywało, zostało usunięte w
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), więc żądanie
wyłączające `prompt-injection` nadal jest odrzucane w trybie `block`. Jest to
zamierzone działanie. Kanały wyłączeń są kontrolowane przez wywołującego (ciało żądania,
metadane, nagłówki), a wywołujący nie może mieć możliwości wyłączenia kontroli bezpieczeństwa,
którą skonfigurował operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unia nagłówków
z [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
zmienia jedynie to, które guardraile rejestru są pomijane; nie pozwala klientowi
na ominięcie oprogramowania pośredniczącego. Obowiązkowe zasady guardraili dla poszczególnych kluczy i grup są
śledzone w RFC w wersji 4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Zobacz [Pokrycie i limity](#coverage-and-limits).

## Kolejność wykonywania

Dla każdego żądania przepływającego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts` (trasy z rodziny czatu wymienione w sekcji
[Pokrycie i limity](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` tworzy listę pomijania na podstawie klucza API,
   treści żądania oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia guardrails w rosnącym
   porządku priorytetów:
   - Wyłączone guardrails są rejestrowane jako `skipped`.
   - `preCall` każdego guardrail może zmodyfikować ładunek (payload) za pomocą `modifiedPayload`.
   - Pierwsza wartość `block: true` przerywa łańcuch, a program obsługi zwraca
     odpowiedź o odrzuceniu przez guardrail.
3. (Potencjalnie zmodyfikowany) ładunek trafia do routingu combo i wysyłania do źródła nadrzędnego
   (upstream dispatch).
4. **Tylko w trybie bezstrumieniowym (non-streaming):** po skompletowaniu odpowiedzi,
   `guardrailRegistry.runPostCallHooks(...)` uruchamia ten sam łańcuch dla
   odpowiedzi. Wartość `block: true` w tym miejscu odrzuca odpowiedź nadrzędną i zwraca kod HTTP 400. Odpowiedzi strumieniowe całkowicie pomijają ten krok.

Guardrails, które zgłaszają błędy, są rejestrowane z wpisem `error: <message>` i logowane przez
`logger.warn`, ale łańcuch kontynuuje działanie — z założenia w trybie fail-open.

## Pokrycie i limity

Rejestr guardrails jest wpięty wyłącznie do potoku czatu. Limity te są
ustalone przez `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` oraz
`tests/unit/guardrail-pipeline-characterization.test.ts`; należy te testy
świadomie aktualizować w przypadku zmiany zachowania.

### Gdzie uruchamiają się haki (hooks)

| Hook / control                                    | Działa na                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                 | Żądania obsługiwane przez `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (oraz `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` oraz proxy czatu Telegram. Także testowy endpoint panelu sterowania `/api/guardrails/test`. Blokada przed wywołaniem (pre-call block) zwraca kod HTTP 400. |
| `runPostCallHooks`                                | Wyłącznie odpowiedzi czatu **w trybie bezstrumieniowym (non-streaming)** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odpowiedzi strumieniowe nigdy do niego nie docierają.                                                                                                                                                                                                                                                                                |
| Streaming PII                                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), przekazywane potokiem w `streamingPipeline.ts`, gdy włączona jest flaga `PII_RESPONSE_SANITIZATION`. Nie jest to mechanizm guardrail, więc kanały wyłączania nie mają na nie wpływu.                                                                                                                                                                                                                    |
| Middleware ochrony przed wstrzyknięciami (legacy) | Każda trasa `/v1` zawierająca prompt, w tym rodzina czatu (zobacz [pokrycie tras](#injection-guard-route-coverage--red-team-phase-8--block-d)). Dotyczy wyłącznie wstrzykiwania promptów (prompt injection).                                                                                                                                                                                                                                                          |

### Czego nie obejmuje

- **Trasy mediów, osadzeń (embeddings) i danych** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nigdy nie docierają do rejestru. Nie
  działa tam maskowanie danych PII, maskowanie poświadczeń ani pomost modalności. Ich jedynym
  sprawdzeniem jest przestarzałe oprogramowanie pośredniczące (middleware) ochrony przed wstrzyknięciami.
- **Odpowiedzi strumieniowe** nie otrzymują guardrails po wywołaniu (post-call): brak `pii-masker` lub
  `credential-masker` po wywołaniu oraz brak blokady po wywołaniu. Zastosowanie ma wyłącznie transformacja PII strumienia
  (gdy `PII_RESPONSE_SANITIZATION` jest włączone). Poświadczenie
  przesłane z powrotem w odpowiedzi strumieniowej nie jest maskowane.
- **Kanały wyłączania a middleware (z założenia):** middleware ocenia
  wstrzyknięcie promptu za pomocą własnego wywołania `evaluatePromptInjection()`, bez
  przekazywania jakiejkolwiek listy wyłączeń kontrolowanej przez wywołującego. Tryb `block` stanowi obowiązkową
  granicę, której wyłączenia kontrolowane przez wywołującego nie mogą ominąć, w tym na trasach z rodziny czatu
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Wyłączenie
  `prompt-injection` powoduje pominięcie jedynie guardrail rejestru.

### Co widzi odpowiedź przed wywołaniem post-call

Na ścieżce bezstrumieniowej kolejność jest następująca: ekstrakcja pamięci → wykonanie wbudowanych narzędzi
→ guardrails post-call → wyjście blokady post-call → zapis w pamięci podręcznej semantycznej (semantic-cache).

- **Ekstrakcja pamięci** i **wykonywanie narzędzi** widzą odpowiedź, zanim zabezpieczenia post-call będą mogły ją zmodyfikować lub zablokować. Od [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), ekstrakcja pamięci przepuszcza wydobyty tekst przez `sanitizePII`, gdy opcja `PII_RESPONSE_SANITIZATION` jest włączona (zarówno w trybie strumieniowym, jak i niestrumieniowym), jednak odpowiedź, którą zabezpieczenia post-call zablokują w dalszej kolejności, została nadal udostępniona pamięci i narzędziom.
- **Semantyczna pamięć podręczna** przechowuje odpowiedź po wywołaniu, dzięki czemu zapisuje zmodyfikowaną odpowiedź, a zablokowana odpowiedź nigdy nie jest buforowana. Wpisy w pamięci podręcznej są kluczowane według klucza API.

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane zabezpieczenia:

| Zmienna                               | Używane przez             | Działanie                                                                                                                              |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustaw `false`, aby całkowicie wyłączyć wykrywanie.                                                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wstrzykiwania: `warn`, `block` lub `log`. Starsza wartość `redact` nie modyfikuje tekstu wstrzyknięcia.                       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb dla mechanizmu ochronnego wstrzykiwania; a także flaga funkcji bazy danych, która **przesłania** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny stopień ważności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są maskowane (niezależnie od trybu wstrzykiwania).                                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kontroluje zachowanie maskera po stronie odpowiedzi.                                                                                   |

Zabezpieczenia Modality Bridge odczytują konfigurację wykonawczą z magazynu ustawień opartego na bazie danych (`getSettings()`), a nie ze zmiennych środowiskowych. Podstawowe klucze funkcji Vision to `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz `modalityBridgeCacheMaxEntries`. Starsze klucze `visionBridge*` są akceptowane wyłącznie jako udokumentowane rezerwowe źródło odczytu na jeden cykl; zapisy z pulpitu nawigacyjnego używają kluczy podstawowych. Wartości domyślne oraz mechanizm rozwiązywania rezerwowego znajdują się w `src/shared/constants/modalityBridgeDefaults.ts`, natomiast starsze stałe są zachowane w `src/shared/constants/visionBridgeDefaults.ts`.

Audio wykorzystuje `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, a także współdzielone ustawienia `modalityBridgeCache*`. Audio nie posiada rezerwowego wsparcia dla starszych kluczy, ponieważ klucze te zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo wykorzystuje `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` i `modalityBridgeVideoTimeout`, a także współdzielone ustawienia `modalityBridgeCache*`. Jest ono domyślnie wyłączone, ponieważ FFmpeg/ffprobe są opcjonalnymi zależnościami operacyjnymi, a opisywanie klatek dodaje opóźnienie oraz koszt modelu.

## Niestandardowe zabezpieczenia

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

Kroki:

1. Utwórz plik `src/lib/guardrails/myGuardrail.ts` rozszerzający klasę `BaseGuardrail`.
2. Zaimplementuj metodę `preCall` i/lub `postCall`.
3. Zarejestruj zabezpieczenie w momencie importu (dodając do `registerDefaultGuardrails`) lub
   wywołaj `guardrailRegistry.register(...)` w czasie wykonywania (runtime) — rejestr zastępuje
   wszelkie wcześniejsze zabezpieczenie o tej samej znormalizowanej nazwie.
4. Dodaj testy w katalogu `tests/unit/` (istniejące przykłady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Użyj `resetGuardrailsForTests()` między testami, aby rozpocząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby rozpocząć z pustym rejestrem i
zarejestrować tylko testowane zabezpieczenia. Vision Bridge obsługuje wstrzykiwanie zależności
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
odpowiednie punkty styku dla ustawień, możliwości, wyboru modelu STT, weryfikacji poświadczeń
oraz transkrypcji. Dzięki temu testy mogą wykonywać oba przepływy bez dostępu do bazy danych
ani sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — współdzielony wykrywacz, który obsługuje
  wstrzykiwanie promptów i maskowanie danych PII
- `src/shared/constants/visionBridgeDefaults.ts` — domyślne ustawienia Vision Bridge oraz
  lista wymuszonych modeli pomostowych
- `src/shared/constants/modalityBridgeDefaults.ts` — współdzielone domyślne ustawienia środowiska uruchomieniowego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (circuit breaker, czasy oczekiwania / cooldowns)
- `docs/reference/ENVIRONMENT.md` — pełna dokumentacja zmiennych środowiskowych

## Pokrycie tras przez zabezpieczenie przed wstrzykiwaniem oraz red-teaming (Faza 8 · Blok D)

Mechanizm ochrony przed wstrzykiwaniem (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy
akceptujące prompty użytkownika. Uwzględnia on zmienną `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca kod HTTP 400 `SECURITY_001`).

| Typ                   | Trasy                                                                                                                                                | Domyślny tryb |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekstowe (istniejące) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywne           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane                  | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje pola `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-teaming (uruchamiany co noc, `nightly-llm-security.yml`):** narzędzie promptfoo weryfikuje, czy każda trasa blokuje
korpus OWASP-LLM przy ustawieniu `INJECTION_GUARD_MODE=block`; garak wykonuje sondy (pomija je w przypadku braku sekretu).
Moduł `moderations` uwzględniono dla spójności. Tryb blokowania stanowi obowiązkową granicę: `evaluatePromptInjection()`
ignoruje listę wyłączeń dla konkretnego żądania przekazywaną przez middleware, więc `disabledGuardrails` nie
zwalnia trasy z tego mechanizmu ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Codzienny przepływ pracy (`.github/workflows/nightly-llm-security.yml`, harmonogram cron + ręczne
wywołanie) składa się z dwóch zadań:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z parametrem `INJECTION_GUARD_MODE=block`. Każdy przypadek adwersarialny (np. `"ignore all
previous instructions…"`, jailbreaki w stylu DAN) wymusza, aby odpowiedź zawierała
  `error.code === "SECURITY_001"`, tzn. czy strażnik faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak z parametrami `--probes promptinject,dan,leakreplay`
  względem lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Zabezpieczone kluczem
  dostawcy (`PROMPTFOO_PROVIDER_KEY`); pomijane w sposób kontrolowany z sufiksem
  `|| true`, dzięki czemu raportuje wyniki bez przerywania pracy CI.

Pokrycie przez funkcję pomocniczą zabezpieczenia (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` przyjmującą prompt; tekst promptu jest pobierany z pól
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
funkcję `extractMessageContents()` w pliku `src/shared/utils/inputSanitizer.ts`.

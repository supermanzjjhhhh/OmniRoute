# Guardrails (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Maßgebliche Quelle:** `src/lib/guardrails/`
> **Zuletzt aktualisiert:** 2026-10-17 — v3.8.52 ([Abdeckung und Grenzen](#coverage-and-limits) hinzugefügt:
> welche Routen und Antwortpfade die Hooks erreichen, die zusammengeführten Deaktivierungs-Header (#16412), den Injektions-
> Blockiermodus als verbindliche Grenze (#16413) und welche Komponenten eine Antwort vor dem Post-Call-Hook sehen)

Guardrails setzen Sicherheit, Richtlinien und Inhaltstransformationen an der Grenze
zwischen OmniRoute und vorgelagerten Anbietern durch. Jeder Guardrail kann Anfrage-Payloads (`preCall`) und
Antworten vorgelagerter Anbieter (`postCall`) prüfen (und
optional ablehnen, transformieren oder annotieren).

Das System arbeitet nach dem **Fail-open-Prinzip**: Wenn ein Guardrail während der Ausführung eine Ausnahme auslöst, protokolliert die Registry
den Fehler und fährt mit dem nächsten Guardrail fort, anstatt die
Anfrage fehlschlagen zu lassen. Eine Blockierung ist eine explizite Entscheidung (`block: true`), niemals ein Versehen.
Die einzige Ausnahme ist eine abgebrochene Anfrage: Wenn das `signal` des Aufrufers abgebrochen wurde,
führt ein Guardrail, der eine Ausnahme auslöst, zur Ablehnung des Hook-Durchlaufs, statt übersprungen zu werden.

Die Hooks werden **nicht** auf jeder Route oder für jede Antwort ausgeführt. Lesen Sie
[Abdeckung und Grenzen](#coverage-and-limits), bevor Sie sich auf einen Guardrail als
Sicherheitsmaßnahme verlassen.

## Integrierte Guardrails

Die Registry lädt beim Import automatisch sechs Guardrails in der Reihenfolge ihrer Priorität
(siehe `registry.ts` → `registerDefaultGuardrails()`):

| Priorität | Name                | Phase(n)       | Datei                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niedrigere Prioritätszahlen werden **zuerst** ausgeführt.

### Vision Bridge (`visionBridge.ts`) — Modalitätsbrücke PR-1

Das GLM-5.3-Basismodell und `glm-5.3-{low,high,max}` haben explizite
`supportsVision:false`-Metadaten in Registry und Spezifikation. Die GLM-5.3-Flash-Varianten
bleiben Modelle mit nativer Bildverarbeitung. Die Route `/v1/messages` von Claude Code durchläuft die
gemeinsame Pre-Call-Guardrail-Kette von `handleChat` **vor** der Übersetzung von Claude zu OpenAI;
verschachtelte Bilder in Ergebnissen des `Read`-Tools müssen beschrieben oder verarbeitet werden,
bevor diese Übersetzung sie in OpenAI-`image_url`-Inhalte überführt (#17069).

Fängt Anfragen mit Bildern ab, die an **Modelle ohne Bildverarbeitung** gerichtet sind, und
leitet entweder die gesamte Anfrage an ein Modell mit Bildverarbeitung weiter oder ersetzt die Bild-
teile vor dem Aufruf des vorgelagerten Anbieters durch Textbeschreibungen, die ein konfigurierbares Bildverarbeitungsmodell erzeugt.
So können reine Textanbieter multimodale
Payloads transparent verarbeiten.

Ablauf:

1. Überspringen, wenn das Zielmodell bereits Bildverarbeitung unterstützt (es sei denn, es steht in der
   Liste für erzwungene Überbrückung `isVisionBridgeForcedModel`).
2. Bildteile über `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) extrahieren; diese Funktion delegiert an den **einheitlichen Medien-
   detektor** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — die
   zentrale maßgebliche Quelle, die auch der Combo-Kompatibilitätsfilter verwendet.
   Die Extraktion ist auf die Strukturen beschränkt, die `replaceImageParts` wieder
   einsetzen kann (der Vertrag zwischen Extraktion und Ersetzung): OpenAI `image_url`, Anthropic-Base64
   `source.type:"base64"`, Anthropic-URL `source.type:"url"` und Responses-
   API `input_image`. Passende Bilder, die in Claude Code
   `tool_result.content` und Responses-Tool-Ausgaben verschachtelt sind, werden ebenfalls extrahiert und
   an ihren ursprünglichen Pfaden ersetzt; reine Indikatorstrukturen sind für den Combo-Filter
   bestimmt und werden nicht extrahiert.
   Überspringen, wenn keine gefunden wurden.
3. Laufzeitkonfiguration über `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) ermitteln: Neue `modalityBridge*`-
   Einstellungsschlüssel haben Vorrang; ältere `visionBridge*`-Schlüssel bleiben als **Fallback für einen
   Zyklus** erhalten (Rollback-Zeitfenster). Bei deaktivierter
   Brücke überspringen, bevor Medienstrukturen durchlaufen werden.
4. Die Modusauswahl (`modalityBridgeVisionMode`, siehe Tabelle unten) entscheidet
   zwischen Weiterleitung und Beschreibung. Die Weiterleitung gibt `modifiedPayload` zurück, wobei nur `model`
   ausgetauscht wird, sowie Metadaten `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschreibungspfad: Die Anzahl der Bilder auf `maxImages` begrenzen, den aufgabenbezogenen Prompt zusammenstellen,
   den Beschreibungs-Cache abfragen, das Bildverarbeitungsmodell **parallel**
   aufrufen (`Promise.allSettled`) und anstelle der Bilder Textteile im Format `[Image N]: <description>`
   einfügen. Eine fehlgeschlagene Beschreibung ergibt `null`: Das unverarbeitete Bild bleibt bei
   unbekannten Zielen oder Zielen mit Bildverarbeitung erhalten (#4012), aber ein **bestätigtes reines Text-Direktziel**
   oder eine Combo ohne Bildverarbeitung erhält für
   jedes nicht beschriebene Bild einen expliziten Textplatzhalter
   `(unavailable — no vision-capable provider connected)`, auch bei teilweisen Fehlschlägen und für Bilder jenseits der
   Obergrenze für Beschreibungsaufrufe (#17069). Der vorhandene Fallback für den Fall, dass alle Combo-Beschreibungen fehlschlagen,
   bleibt bestehen (#8430).
6. `modifiedPayload` + Metadaten (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) zurückgeben.

#### Modusauswahl (`modalityBridgeVisionMode`)

| Modus      | Standard | Verhalten                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Unveränderte bisherige Heuristik (#6640/#7204): Nicht-Combo-/`auto/`-Modelle werden an das beste Vision-Modell weitergeleitet, sofern das ursprüngliche Modell nicht bereits über nutzbare Zugangsdaten verfügt (dann wird eine Beschreibung erstellt); Combo-Ziele erstellen immer eine Beschreibung.                                                                                  |
| `describe` |          | Immer eine Beschreibung erstellen — der Weiterleitungsblock wird vollständig übersprungen; es antwortet immer das vom Benutzer gewählte Modell.                                                                                                                                                                                                                                         |
| `reroute`  |          | Weiterleitung erzwingen: Die Schutzprüfung zum Beibehalten eines Modells mit Zugangsdaten wird umgangen. Die Zugangsdatenprüfung für das Weiterleitungs-**Ziel** gilt weiterhin — wenn kein nutzbares Vision-Ziel vorhanden ist, blockiert die Bridge mit einer klaren Fehlermeldung, statt eine Beschreibung zu erstellen oder unverarbeitete Bilder an ein reines Textziel zu senden. |

Erzwungene Modi greifen **bevor** die automatische Heuristik ausgeführt wird; das Verhalten von `auto`
ist bytegenau identisch mit der Schutzlogik vor PR-1.

#### Geltungsbereich des API-Schlüssels (`visionBridgeKeyScope.ts`)

Wenn der API-Schlüssel des Aufrufers `allowedConnections`, Kontingentpools
(`allowedQuotas`) oder Modelle (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) einschränkt, wählt die Bridge nur
Weiterleitungs- und Beschreibungsmodelle aus, die der Schlüssel verwenden darf, und nur über Verbindungen, die der Schlüssel
verwenden darf. Der Beschreibungsaufruf erfolgt dann immer über die OmniRoute-Self-Loop mit
dem Header `x-omniroute-self-loop-key-id`, sodass die empfangende Chat-Anfrage
die Verbindungs- und Modellrichtlinie dieses Schlüssels erneut durchsetzt. `enforceApiKeyPolicy()`
berücksichtigt diesen Header nur zusammen mit dem Self-Loop-Bearer-Token, sodass er den Zugriff nur
einschränken kann; eine ID, die nicht aufgelöst werden kann, wird abgelehnt.

Wenn für den Schlüssel kein Vision-Modell zulässig ist, weist ein **bestätigtes reines
Textziel** die Bildanfrage lokal mit einem eindeutigen HTTP-400-Fehler zurück, statt
Bilddaten an einen ungeeigneten Upstream weiterzuleiten (#17069). Bei Zielen mit
unbekannter oder nativer Vision-Fähigkeit behält der Beschreibungspfad sein bisheriges
Fail-Open-Verhalten bei (Metadaten `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anfragen ohne Schlüssel sowie Schlüssel ohne diese Einschränkungen verhalten sich genau wie
zuvor.

#### Aufgabenbezogener Beschreibungs-Prompt (`modalityBridgeVisionTaskAware`)

Standardmäßig **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hängt
den Text der **letzten Benutzernachricht** (auf 500 Zeichen gekürzt) an den
Basis-Beschreibungs-Prompt an. Dadurch wird die Beschreibung auf die tatsächliche Frage des Benutzers
ausgerichtet (codex-vision-proxy-Muster) und das Vision-Modell aufgefordert, sichtbaren
Text zu transkribieren. Ist das Flag deaktiviert — oder kein Benutzertext vorhanden —, wird der Basis-Prompt unverändert verwendet.

Die eigene OpenAI-kompatible Anfrage der Beschreibungs-Self-Loop (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) fordert immer `image_url.detail: "high"` an —
bedingungslos, für jeden Aufrufer/Anbieter und unabhängig von jeglichem Clientsignal.
Sampling mit geringer Detailstufe verschlechtert die OCR-Genauigkeit genau bei der Texttranskriptionsaufgabe,
die dieser Prompt verlangt. Daher fordert der Beschreibungsaufruf selbst immer eine hohe
Detailstufe an, unabhängig davon, welche Detailstufe die ursprüngliche eingehende Anfrage verwendet hat. Dies
betrifft nur den internen Anfrage-Body für die Beschreibung; es ändert nicht, wie
OmniRoute das eigene `image_url.detail` des Aufrufers in der primären Anfrage weiterleitet —
dieser Standardwert wird separat und nur für erkannte OpenCode-Clients in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) angewendet. Der
Zweig für das Anthropic-Übertragungsformat der Beschreibungs-Self-Loop hat kein `detail`-Feld
und ist von beiden Standardwerten nicht betroffen.

#### Längenbegrenzung der Beschreibungsausgabe (`modalityBridgeVisionMaxChars`)

| Schlüssel                      | Standard | Bereich            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` oder 100–50000 |

`0` (Standard) bedeutet **keine Begrenzung** — die von
`callVisionModel()` zurückgegebene Beschreibung wird unverändert weitergegeben, wodurch das bestehende
Verhalten erhalten bleibt. Jeder Wert im Bereich 100–50000 kürzt die Beschreibung mit einem
`…`-Suffix, bevor sie als `[Image N]: <description>` wieder eingefügt wird
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Erhöhen Sie diesen Wert für detailreiche OCR-Aufgaben, bei denen das nachgelagerte Modell die
vollständige Transkription benötigt; senken Sie ihn, um den Tokenverbrauch bei auskunftsfreudigen Vision-Modellen zu begrenzen.
Das Dashboard-Feld befindet sich im Bereich „Erweitert“ der Registerkarte „Vision“
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) und hebt jeden
Wert zwischen 1 und 99 auf die Untergrenze von 100 an, während eine explizite `0`
unverändert bleibt — `0` ist ein eigenständig gültiger Zod-Wert
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) und nicht bloß
der Standardwert für „nicht festgelegt“.

#### Beschreibungs-Cache (`modalityBridge/bridgeCache.ts`)

Prozessweit gemeinsam genutzter In-Memory-Cache mit LRU + TTL für Beschreibungsausgaben.
Schlüssel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` mit
Längenpräfix-Kodierung (keine Kollisionen an Feldgrenzen). Die Modellkomponente ist
das **konfigurierte** Bridge-Modell, nicht das Modell, das tatsächlich geantwortet hat —
`callVisionModel` kann intern auf ein anderes Modell zurückgreifen, und eine Schlüsselbildung pro Versuch würde
den Cache fragmentieren. Fehlgeschlagene Beschreibungen werden niemals zwischengespeichert. Einstellungen:

| Schlüssel                       | Standard | Bereich |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalisierung entfernter Bilder (Self-Loop-Beschreibung/Base64-Abruf)

Wenn die Bridge ein **entferntes** Bild selbst abruft — beim Anthropic-Selbstaufruf zur Beschreibung
und bei der Base64-Konvertierung für das Claude-Wire-Format
(`ensureBase64ImagesForClaudeWire`), beide über
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wird die resultierende Daten-URI
durch `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) verarbeitet, bevor sie in die Anfrage an das Vision-Modell
eingebettet wird. Übergroße Bilder werden auf eine **lange Kante von 2048px** herunterskaliert (entsprechend
der Größenbegrenzung, die OpenAI/Anthropic bereits serverseitig anwenden), wodurch
Upload-Datenmenge und Latenz reduziert werden, ohne zu verändern, was das Vision-Modell sieht. Die Größenänderung
verwendet `sharp`, das per dynamischem Import geladen wird: Auf einer Plattform, auf der sich dessen native
Binärdatei nicht laden lässt, **löst `normalizeDataUri()` niemals eine Ausnahme aus** — stattdessen
werden die ursprünglichen Bytes unverändert durchgereicht, sodass der Pfad für Beschreibung und Base64-Konvertierung
immer funktionsfähig bleibt. Bytes, die kein Bild darstellen (ein Abruf, der kein
dekodierbares Bild zurückgegeben hat), werden ebenfalls unverändert durchgereicht. Diese Normalisierung ist
auf Bilder beschränkt, die die Bridge für ihren eigenen Selbstaufruf abruft — sie wird niemals
auf die unverändert durchzureichenden Rohdaten des Aufrufers angewendet, entsprechend dem
Prinzip, Änderungen nur nach ausdrücklicher Zustimmung vorzunehmen (Verbindliche Regel #20).

#### Einstellungsschema + Migration

Die neuen `modalityBridge*`-Schlüssel werden in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) mit Zod validiert: `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, das `modalityBridgeCache*`-Trio und die
von der Audio Bridge verwendete `modalityBridgeAudio*`-Gruppe. Die Migration
`141_modality_bridge_settings.sql` kopiert vorhandene alte
`visionBridge*`-Werte in die entsprechenden neuen Schlüssel (idempotent, überschreibt niemals
einen vom Betreiber gesetzten `modalityBridge*`-Wert); die alten Schlüssel werden für
einen Release-Zyklus weiterhin als Fallback beim Lesen akzeptiert.

#### Transparenz-Header + Statistiken

Durch Beschreibung transformierte Antworten enthalten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(erstellt durch `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
gesetzt durch `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Umgeleitete Anfragen erhalten **keinen** Header — die Nutzdaten blieben unverändert und der
Modellwechsel ist bereits im Feld `model` des Antworttexts sichtbar.

`GET /api/modality-bridge/stats` (Verwaltungsauthentifizierung, dieselbe Berechtigungsstufe wie
`GET /api/settings`) gibt die speicherinternen Zähler je Modalität
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` für `vision`, `audio` und
`video` zurück. `averageLatencyMs` verwendet `latencySamples` und nicht alle Versuche als
Nenner; ein Vorgang ohne Zeitmessung erzeugt keinen künstlichen Messwert von null Millisekunden.
`bridged` bleibt der abwärtskompatible Alias für erfolgreiche
Konvertierungen; fehlgeschlagene Versuche erhöhen diesen Zähler nicht.
Die Zähler werden beim Neustart des Prozesses bewusst zurückgesetzt
(Telemetrie, keine Abrechnung).

#### Dashboard-Konfiguration

Die dedizierte Dashboard-Seite befindet sich unter
`/dashboard/settings/modality-bridge`. Ihre per URL adressierbaren Registerkarten `Vision`, `Audio`
und `Video` behalten beim Wechsel des Werts `tab` die Abfrageparameter bei.
Die Vision-Registerkarte bietet Aktivierung, Modus, Modellauswahl (einschließlich der automatischen
Standardeinstellung), aufgabenbezogene Prompts, erweiterte Grenzwerte für Zeitüberschreitung/Bilder/Beschreibungslänge/Cache,
Laufzeitzähler
und eine abgesicherte Beispielanfrage. Die Audio-Registerkarte ist ebenfalls einsatzbereit: Sie bietet
Aktivierung, eine auf STT beschränkte Modellauswahl mit automatischer Auswahl, Grenzwerte für Zeitüberschreitung und maximale Cliplänge, Audiozähler
und einen Beispieltest mit `input_audio`. Die Video-Registerkarte ist funktionsfähig: Sie zeigt
den Laufzeitstatus von FFmpeg/ffprobe an — einen von vier expliziten UI-Zuständen (`unknown`, während
die Prüfung läuft oder nicht abgeschlossen werden konnte, `restricted` auf einem
Dashboard-Host außerhalb von Loopback, auf dem die Prüfung clientseitig übersprungen wird, `unavailable`, wenn die Prüfung
abgeschlossen und das Fehlen bestätigt wurde, oder `available` mit den FFmpeg/ffprobe-Versionen) — speichert
Aktivierung/Modell/Frame-/Video-/Zeitüberschreitungsgrenzen dauerhaft, beschränkt die Modellauswahl auf visionfähige
Modelle und stellt Videozähler bereit.

Die bisherige Vision-Bridge-Karte unter den KI-Einstellungen ist ein Kompatibilitätslink zur
neuen Seite; sie enthält keine zweite Kopie des Formulars mehr. Medienanbieter
verknüpft außerdem Bild-zu-Text- und Sprache-zu-Text-Workflows mit den entsprechenden Modality-
Bridge-Registerkarten, ohne die bestehende Sprache-zu-Text-Testumgebung zu entfernen.

**Umgehung der Zulassungskontrolle beim Self-Loop:** Wenn der Beschreibungsaufruf über OmniRoutes
eigenen `/v1`-Self-Loop läuft (nicht standardmäßiges Anbietermodell), sendet die Unteranfrage
`x-omniroute-admission-bypass: internal` und wird mit den ermittelten
Self-Loop-Zugangsdaten authentifiziert — dem lokalen Sentinel `sk_omniroute` im lokalen Modus oder dem
vom Betreiber konfigurierten Umgebungsschlüssel `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), damit
Bereitstellungen mit `REQUIRE_API_KEY=true` den Beschreibungsaufruf weiterhin ausführen können. Die Umgehung
wird nur für genau diese Zugangsdaten akzeptiert, sodass externe Clients den
Header nicht verwenden können, um die Zulassungskontrolle zu überspringen.

Die alten Standardwerte befinden sich in `src/shared/constants/visionBridgeDefaults.ts`; die
neuen Standardwerte für Modus, Aufgabenbezug und Cache sowie der Einstellungsresolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`. Der Schutzmechanismus stellt eine
Konstruktoroption `deps` bereit, damit Tests simulierte Implementierungen von `getSettings` und
`callVisionModel` einschleusen können.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fängt Chat-Anfragen mit Audioinhalten ab, bevor sie ein Ziel erreichen, von dem nicht
bekannt ist, dass es Audioeingaben akzeptiert. Die Chat-Anfrage wird niemals umgeleitet: Audioteile werden
über den vorhandenen OpenAI-kompatiblen Multipart-Endpunkt transkribiert, und das
gewählte Chat-Modell arbeitet mit Texttranskripten weiter.

Ablauf:

1. Ermitteln Sie `supportsAudio` über `getResolvedModelCapabilities()`. Explizite
   Metadaten aus der Provider-Registry haben Vorrang, gefolgt von statischen Modellmetadaten und synchronisierten
   `modalities_input`. Eine deklarierte Eingabeliste ohne `audio` ergibt `false`; ohne
   Nachweis einer entsprechenden Fähigkeit bleibt der Wert `null`. Sowohl `false` als auch `null` aktivieren die
   konservative Bridge, während `true` sie umgeht.
2. Ermitteln Sie die Einstellungen für `modalityBridgeAudio*` und extrahieren Sie mit dem gemeinsamen
   Detektor `detectMediaParts()` aus jeder Nachricht die Audioteile auf oberster Ebene,
   die sich ersetzen lassen. Unterstützte Übertragungsformate sind OpenAI `input_audio`, `audio_url` und
   `source.media_type: "audio/*"`. Verschachtelte Audiodaten werden für das Routing erkannt, aber vom
   Ersetzungspfad nicht entfernt. Die Verarbeitung ist auf `modalityBridgeAudioMaxClips` begrenzt;
   spätere Teile bleiben unverändert.
3. Berücksichtigen Sie einen konfigurierten `provider/model`, oder lassen Sie `selectAudioBridgeModel()`
   `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiler Katalogreihenfolge durchlaufen und das erste
   Modell mit verwendbaren aktiven Provider-Zugangsdaten auswählen.
4. `callAudioTranscription()` konvertiert Base64-/Daten-URI-Audiodaten in eine Multipart-
   `file` oder lädt eine entfernte `audio_url` über den auf öffentliche Ziele beschränkten
   Schutz für ausgehende Verbindungen mit DNS-Pinning und einer Grenze von 25 MB herunter. Anschließend sendet die Funktion die Datei und das ausgewählte
   Modell per POST an die lokale Self-Loop-Endstelle `/v1/audio/transcriptions`, authentifiziert mit
   `resolveSelfLoopBearer()`. Die bestehende Transkriptionsroute übernimmt die reguläre
   Suche nach Zugangsdaten, die Behandlung von Cooldowns und Ratenbegrenzungen sowie die Weiterleitung an den Provider.
5. Erfolgreiche Aufrufe ersetzen ihre Teile durch `[Audio N]: <transcript>`. Die Aufrufe
   werden mit `Promise.allSettled` ausgeführt: Bei einem einzelnen Fehler bleibt der ursprüngliche
   Audioteil erhalten (Vertrag #4012). Wenn alle Aufrufe fehlschlagen und für das Ziel nachweislich
   `supportsAudio === false` gilt, werden die Teile zu
   `[Audio N]: (unavailable — no STT provider connected)` (Vertrag #8430). Bei
   einem unbekannten Ziel (`null`) bleibt das Ergebnis unverändert, wenn alle Aufrufe fehlschlagen. Ein nachweislich
   rein textbasiertes Ziel ohne verwendbare STT-Zugangsdaten erhält denselben expliziten
   Platzhalter, ohne dass ein Netzwerkaufruf erfolgt.

Erfolgreiche Transkriptionen verwenden den prozessweiten LRU-/TTL-Cache der Modality Bridge. Der
Schlüssel kombiniert die Audioreferenz, die stabile Operationsbezeichnung
`audio-transcription` und das ausgewählte STT-Modell; Fehler werden niemals zwischengespeichert. Audioversuche aktualisieren
die gemeinsamen Zähler `bridged`, `cacheHits`, `failures` und `lastUsedAt`.
Transformierte Antworten enthalten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; unveränderte
Anfragen erhalten kein Audio-Bridge-Segment.

Die Laufzeiteinstellungen werden in der Datenbank gespeichert und mit Zod validiert:

| Schlüssel                     | Standard | Bereich                 |
| ----------------------------- | -------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                       |
| `modalityBridgeAudioModel`    | `""`     | Automatisch oder STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                    |

Der gemeinsame Cache wird weiterhin über `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` und `modalityBridgeCacheMaxEntries` gesteuert.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fängt Videoteile auf oberster Ebene in `messages` von Chat Completions und in
`input` der Responses API ab, bevor ein Ziel ohne bekannte native Videounterstützung aufgerufen wird.
Unterstützte Formate sind `input_video`, `video_url`, `video_source`, HTTPS-URLs
und Daten-URIs im Format `data:video/*;base64,...`. Reine Dateinamen im Text werden nicht
als Video behandelt.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ist für das Durchlaufen der Anfrage, die
Prüfung von Fähigkeiten und Richtlinien, die Aggregation pro Anfrage sowie die Antwortnutzlast zuständig.
Die Verarbeitung pro Video — Beschaffung, der Cache für das Gesamtergebnis, die Beschreibung einer
Bildsequenz (unter Einbeziehung eines gegebenenfalls vom Aufrufer deklarierten Audiotranskripts) sowie Metriken, Abbruch und Bereinigung pro Versuch —
ist hinter `processVideoPart` in
`videoBridgePipeline.ts` gekapselt und wird innerhalb der Schleife von `preCall` einmal pro Videoteil aufgerufen.
Dieses Modul definiert auch die expliziten Port-Grenzen `VideoMediaBrokerPort`
(Beschaffung von Bytes und Extraktion stichprobenartig ausgewählter Einzelbilder), `VideoAudioTranscriptionPort`
(Zusammenführung eines vom Aufrufer deklarierten Audiotranskripts mit den Beschreibungen der ausgewählten Einzelbilder) und
`VideoDrilldownPort` (die Persistenzgrenze für die Einzelbild-Detailanalyse; noch nicht
in `processVideoPart` eingebunden — derzeit schreibt nur die separate Route `/api/modality-bridge/video/drilldown`
Einträge für die Detailanalyse).

Der öffentliche `/v1`-Anfragepfad importiert niemals einen Unterprozess und ruft auch keinen auf. Entfernte
Videos werden mit einer Obergrenze von 50 MiB heruntergeladen; für eingebettete Base64-Videos gilt eine
konservative Obergrenze von 36 MiB dekodierter Daten pro Video, damit die umgebende Struktur aus Modell, Nachrichten und Rahmendaten
innerhalb der Annahmegrenze von 50 MiB für öffentliche JSON-Anfragen bleiben kann. Die Länge eingebetteter Daten
und die geschätzte dekodierte Größe werden vor der Speicherzuweisung geprüft. HTTPS ist
für die ursprüngliche entfernte URL und jede Weiterleitung erforderlich; dabei kommt der bestehende,
auf öffentliche Ziele beschränkte Schutz für ausgehende Verbindungen mit DNS-Pinning zum Einsatz. Die Bytes passieren anschließend die genau definierte interne
Broker-Grenze `POST /api/modality-bridge/video/extract`. Diese Route ist sowohl
`LOCAL_ONLY` als auch `SPAWN_CAPABLE`, akzeptiert ausschließlich eine prozessspezifisch authentifizierte,
vertrauenswürdige Loopback-Anfrage und akzeptiert niemals eine URL, einen Dateisystempfad, eine ausführbare Datei
oder eine Argumentliste. Die Pipeline zur Größenbegrenzung des API-Anfragekörpers und der inkrementelle Body-
Reader des Handlers erzwingen unabhängig voneinander eine Obergrenze von 50 MiB für Broker-Eingaben. Die begrenzte Warteschlange führt
jeweils eine Extraktion aus, erlaubt vier wartende Aufträge und begrenzt ausstehende Eingabedaten auf
100 MiB.

Innerhalb des Brokers liest `ffprobe` eine private lokale Datei; die fest vorgegebene
Format-Zulassungsliste schließt Wiedergabelisten- und Manifestformate aus. Bei zulässigen
Containern der MOV-Familie bleiben externe MOV-Datenreferenzen standardmäßig deaktiviert,
und der fest vorgegebene Befehl aktiviert sie nicht. Sowohl `ffprobe` als auch `ffmpeg` verwenden
die auf `file` beschränkte Protokoll-Zulassungsliste, einen Thread, feste Argument-Arrays, keine Shell
und ausführbare Dateien, die über `PATH` aufgelöst werden. Als angehängte Bilder eingebettete
Cover-Streams kommen nicht als abspielbare Kandidaten infrage. Alle abspielbaren Streams müssen
die Grenzwerte einhalten; ein expliziter Standardstream wird gegenüber dem deterministischen
Fallback auf den Stream mit dem niedrigsten Index bevorzugt. Videos sind auf 600 Sekunden,
8.192 Pixel pro Dimension und 33.554.432 Quellpixel begrenzt. FFmpeg extrahiert 1–16 JPEG-Frames
an Intervallmittelpunkten, skaliert die lange Kante auf höchstens 1.024 Pixel herunter,
ohne kleinere Eingaben hochzuskalieren, und erhält niemals eine URL. Die Sampling-Strategie
ist standardmäßig `uniform`. Die optionale Strategie
`scene_aware` und die experimentelle Strategie `segment_aware` führen einen zusätzlichen
fest vorgegebenen FFmpeg-Durchlauf über den bereits validierten lokalen Stream aus, wählen
`showinfo`-Szenenzeitstempel innerhalb festgelegter Grenzen aus und fallen bei Detektorfehlern,
Zeitüberschreitungen, fehlerhafter Ausgabe oder einer leeren Kandidatenmenge deterministisch
auf dieselben gleichmäßig verteilten Intervallmittelpunkte zurück. Der segmentbasierte Modus
verteilt die Mittelpunkt-Stichproben proportional auf die validierten Szenenintervalle;
die segmentbasierten Messdaten und das Fallback-Verhalten werden weiter unten erläutert.
Die feste Obergrenze von 16 Frames wird
bei jeder Strategie nach der Auswahl angewendet. Steht einer szenenbasierten Anfrage nur ein
Budget von einem Frame zur Verfügung, verwendet sie den gleichmäßigen Mittelpunkt des aktiven
Gesamtvideo- oder Fokusfensters und meldet `policyEffective: uniform`: Ein einzelner ausgewählter
Szenenframe kann nicht beide zeitlichen Enden abdecken. Der Aufrufer kann optional ein
endliches Fokusfenster (`start`/`end` in Sekunden) angeben; die Grenzen werden auf die Mediendauer
begrenzt, umgekehrte oder nicht endliche Fenster werden abgelehnt, und sämtliche Sampling-Strategien
werden ausschließlich innerhalb des normalisierten Intervalls ausgeführt. Das resultierende
Fenster wird in die Sampling-Metadaten und in das nicht vertrauenswürdige Beschreibungspräfix
aufgenommen, damit nachgelagerte Modelle einen fokussierten Ausschnitt von der gesamten
Zeitleiste unterscheiden können.

Der semantische Fokus der Bildbeschreibung ist eine separate, explizite Einstellung. Der standardmäßige
Analysemodus `full` behält den bestehenden Frame-Prompt bei und leitet niemals Anfragetext
an das Bildbeschreibungsmodell weiter. Im Modus `focused` liest die Bridge ausschließlich den neuesten
nicht leeren, vom Benutzer verfassten `text`/`input_text` aus demselben Chat- oder Responses-Container,
normalisiert ihn nach NFC, fasst Steuerzeichen und Leerraum zusammen
und begrenzt ihn auf 500 Unicode-Codepunkte. Ein leeres Ergebnis führt zum
exakt gleichen `full`-Prompt zurück. Ein verwendbarer Hinweis wird als JSON in einem eigenen
Block für nicht vertrauenswürdigen Benutzerkontext serialisiert und darf lediglich beobachtbare Details
priorisieren; er kann die separate Warnung, in den Medien sichtbaren oder hörbaren Anweisungen
nicht zu folgen, nicht außer Kraft setzen. Ein textueller Fokus leitet niemals `start`/`end` ab und ändert
nicht das zeitliche Sampling.

#### FU-07 strukturelle Segmentmessdaten

`segment_aware` verwendet einen begrenzten Voranalysedurchlauf über den bereits validierten
lokalen Videostream. Die fest vorgegebene Filterkette skaliert zunächst auf höchstens 320 Pixel
Breite, erkennt Szenenwechsel und Standbildintervalle und nimmt anschließend mit 1 Frame pro
Sekunde Stichproben für Unschärfe, durchschnittliche Luma sowie räumliche und zeitliche Information.
Der Durchlauf ist auf 600 strukturelle Stichproben, einen FFmpeg-/Filter-Thread, dieselben
auf `file` beschränkten Protokoll- und Container-Zulassungslisten, eine Prozessausgabe von höchstens 1 MiB
und höchstens 30 Sekunden innerhalb der gemeinsamen Abbruch-/Zeitlimitsteuerung des Brokers begrenzt.
Er akzeptiert niemals einen Befehl, Filter, Pfad oder eine URL aus der Anfrage.

Die strukturellen Werte sind deterministische Messdaten für das Sampling, kein semantisches
Videoverständnis. Sie leiten weder Motive, Handlungen, Bildbeschreibungen, Sprache noch
Benutzerabsichten ab. Szenen- und Standbildgrenzen bilden Segmente; Standbildanteil, Unschärfe,
Belichtung, räumliche Details und zeitliche Veränderungen beeinflussen lediglich, wie das bestehende
Budget von 1–16 Frames verteilt wird. Ein vollständig eingefrorenes Segment ist auf einen Frame begrenzt,
während nicht eingefrorene Segmente um das verbleibende Budget konkurrieren. Gibt es mehr Grenzen
als Frames, bleibt eine gleichmäßige Abdeckung der Zeitleiste erhalten, damit schnelle Schnitte am Anfang
kein langes abschließendes Segment verdecken können. Szenengrenzen, die innerhalb der Analyseauflösung
von 1 Sekunde um eine Standbildgrenze liegen, werden zusammengeführt.

Fehlende Filter, fehlerhafte oder leere Messdaten, ein Detektorfehler oder eine Zeitüberschreitung
der begrenzten Voranalyse führen ohne Abbruch zum exakt gleichen Verfahren mit gleichmäßig verteilten
Intervallmittelpunkten zurück. Ein Abbruch durch den Aufrufer oder das Erreichen des Broker-Zeitlimits
führt nicht zu einem solchen Fallback: Der laufende Unterprozess wird beendet, eine spätere
Frame-Extraktion wird verhindert, und der private temporäre Verzeichnisbaum wird in `finally` entfernt.

`scripts/perf/video-bridge-fu07-eval.ts` erzeugt deterministische Testdaten mit echtem FFmpeg
für Einsparungen bei Bildbeschreibungsaufrufen nach der Deduplizierung, die Budgetverteilung bei
bewegungsreichen Inhalten, Unschärfe-/Belichtungs-/SI-TI-Messdaten, schnelle Schnitte mit einem langen
Schlussabschnitt und falsch positive Ergebnisse bei allmählichen Überblendungen. Es erfasst die
verstrichene Zeit der Voranalyse und, sofern `/usr/bin/time` verfügbar ist, die CPU-Zeit der Kindprozesse
sowie den maximalen RSS. Seine Qualitätsprüfungen dienen ausschließlich als strukturelle Testorakel.
Die tatsächliche Qualität des Bildbeschreibungsmodells bleibt auf `HOLD`, da diese Testumgebung weder
über einen autorisierten Endpunkt noch über eine festgeschriebene Bewertungsinstanz verfügt.
Auch finanzielle Einsparungen bleiben auf `HOLD`, sofern nicht über `--caption-cost-per-call-usd`
eine explizite positive Kostenschätzung pro Aufruf angegeben wird; das Skript erfindet keines der beiden Ergebnisse.

Jeder Frame ist auf 4 MiB begrenzt, alle Rohframes zusammen auf 23 MiB und die
serialisierte Broker-Antwort auf 32 MiB. Ein privates temporäres Verzeichnis wird
in `finally` entfernt. OmniRoute enthält FFmpeg nicht und akzeptiert keinen benutzerdefinierten
Pfad zur ausführbaren Datei. Vor der Erstellung der Bildbeschreibungen führt die Bridge einen konservativen visuellen
Deduplizierungsschritt durch: Jedes JPEG wird auf einen 16×16-Graustufenpuffer reduziert und
nur mit dem zuletzt beibehaltenen Frame verglichen. Bei einem angeforderten Budget
von mehr als einem Frame für die Bildbeschreibungen liefert die Extraktion einen
begrenzten Kandidatenpool mit bis zum Doppelten dieses Budgets und nie mehr als 16 Frames.
Die angeforderte Obergrenze wird erst nach der Deduplizierung angewendet, wobei der erste und der letzte
ausgewählte Kandidat bei der abschließenden Ausdünnung erhalten bleiben, wenn das Budget mindestens
zwei beträgt. Die versionierte
Richtlinie `grayscale-16x16-mean-cells-v2` verwendet den größeren Wert aus der mittleren Luminanzdifferenz und
dem Anteil der Miniaturbildzellen, deren normalisierte Differenz mindestens 0,05 beträgt. Der
Schwellenwert für Duplikate ist die Konstante 0,04, die zugunsten der Vorhersagbarkeit gewählt wurde und nicht
als Laufzeiteinstellung verfügbar ist. Dieses zusätzliche
Signal für starke Kontraste bewahrt kleine Bewegungen und Änderungen sichtbarer Texte, die ein
reiner Mittelwertvergleich übersehen kann. Bei Vergleichs- oder Decoderfehlern werden die Frames beibehalten,
um die Abdeckung zu erhalten. Die Ausgabemetadaten unterscheiden zwischen extrahierten Kandidaten, erfolgreich verwendeten
Frames und verworfenen visuellen Duplikaten.

Ein ausdrücklich gekennzeichneter Videoteil kann einen Kontaktbogen mit Zeitstempeln anfordern. Die
Bridge erstellt ein JPEG-Raster mit höchstens 4 Spalten und 16 Frames. Jede 512 Pixel große Zelle enthält
ihren Quellzeitstempel fest eingebrannt in einem kontrastreichen Streifen am unteren Rand, während dieselben Zeitstempel
für die nachgelagerte Zuordnung und Prüfung in den textuellen Metadaten
erhalten bleiben. Das vollständige JPEG bleibt auf 32 MiB begrenzt. Wenn `sharp` das Raster nicht decodieren oder zusammensetzen kann, greift die
Bridge auf die einzelnen JPEG-Frames zurück; ein Abbruch durch den Client wird weiterhin
durch den Kontaktbogenvorgang hindurch weitergegeben.

Nachweise für die Freigabe sind bewusst vom synthetischen
Mikrobenchmark für die Zusammenstellung getrennt. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiert ein
A/B-Testframework mit versioniertem Schema für echte OpenAI-kompatible Vision-Modelle. Es misst
die vom Anbieter gemeldeten Tokens, die tatsächlich verstrichene Ende-zu-Ende-Latenz (einschließlich der Zusammenstellung des Kontaktbogens),
die Anzahl der Modellaufrufe und den Erhalt der im Manifest definierten Fakten. Rohe Modellantworten werden nicht
in den Bericht geschrieben; nur SHA-256-Prüfsummen und IDs übereinstimmender Fakten werden gespeichert. Das
Testframework führt keine Netzwerk- oder kostenpflichtigen Modellaufrufe aus, sofern nicht `--execute-real` angegeben ist und
`--model`, `OMNIROUTE_BASE_URL` sowie `OMNIROUTE_API_KEY` konfiguriert sind. Ohne
diesen expliziten realen Testlauf bleibt sein maschinenlesbares Urteil `HOLD`; synthetische
Messungen von Nutzlast und Aufrufanzahl allein sind kein Nachweis für eine Freigabe.

Aufrufer können einem unterstützten Videoteil ein optionales `transcript.cues`-Array hinzufügen,
wenn sie bereits über zeitlich zugeordneten Text verfügen. Jeder Eintrag muss `text`, ein
endliches `start`/`end`-Intervall innerhalb der ermittelten Dauer und eine zugelassene
`source` (`client`, `embedded` oder `audio-bridge`) enthalten; `confidence` ist standardmäßig
`1` und muss zwischen `0` und `1` bleiben. Exakte Duplikate von Einträgen werden zusammengeführt.
OmniRoute startet anhand dieser Metadaten niemals eine Transkription: Validierte Einträge werden
mit Quelle, Konfidenz und Intervall in das Beschreibungsergebnis kopiert und
neben den Frame-Beschreibungen als nicht vertrauenswürdige Beobachtungen dargestellt. Ungültiger
Text, Text außerhalb des zulässigen Bereichs oder Text ohne Herkunftsangabe wird abgelehnt, statt in den
Beschreibungsstrom aufgenommen zu werden. Beide Transkriptkanäle im Anfragetext normalisieren die angegebene
Herkunft zu `client`, einschließlich selbst angegebener Kennzeichnungen als `embedded` oder `audio-bridge`.
Nur ein serverseitig kontrollierter Adapter kann diese vertrauenswürdigen Kennzeichnungen über
das ausschließlich im Code verfügbare Argument `trustedSource` zuweisen; ein JSON-Feld in der Anfrage kann
dieses Argument nicht erreichen. Transkripttext bleibt unabhängig von seiner Herkunft nicht vertrauenswürdiger,
aus Medien abgeleiteter Inhalt und darf niemals über die Autorisierung bestimmen.

Ein fortgeschrittener Aufrufer kann für dasselbe Video eine `audioTranscript`-Spur bereitstellen;
sie wird als vom Client bereitgestellter Text behandelt, nicht als Nachweis einer serverseitigen Transkription.
Die Fusionsschnittstelle verarbeitet visuelle und akustische Beobachtungen unter
einer gemeinsamen Zeitgrenze und mit einem gemeinsamen Abbruchsignal, ordnet sie auf einer gemeinsamen Zeitachse an, führt
exakte Duplikate zusammen und meldet ein Teilergebnis, wenn nur eine Seite erfolgreich ist.
Ein ungültiges `audioTranscript` führt zu diesem Teilergebnis — die visuelle
Beschreibung bleibt erhalten und der Audiozweig zeichnet einen bereinigten Fehlercode auf —
statt das gesamte Video scheitern zu lassen. Die Verfügbarkeit je Zweig, das Teilergebnis-Flag
und die bereinigten Fehlercodes bleiben im Beschreibungsergebnis, in den
Guardrail-Metadaten (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in den Metadaten des Ergebniscaches und in den Fusionszählern
der Bridge erhalten. Der standardmäßige Verarbeitungspfad der Video Bridge ruft keine Spracherkennung auf
und lädt keine zweite Medienkopie herunter; ohne diese explizite Spur bleibt er
auf Video beschränkt.

**Aufbewahrung von Transkripten (#12150 P1).** Dies gilt automatisch, sobald die
Video Bridge (die ihrerseits eine explizite Aktivierung erfordert) einen Transkript-Cue rendert — es gibt kein separates
Flag für die Aufbewahrung. Wenn eine Anfrage einen Transkript-Cue rendert (ein vom Aufrufer deklariertes
`transcript` oder ein zusammengeführtes `audioTranscript`), markiert die Schutzmaßnahme sie als
`videoBridgeObserved` und erzeugt eine geschwärzte Schattenkopie der Videobeschreibung —
eine identische Darstellung, in der der Freitext jedes Cues durch
`[redacted-video-transcript]` ersetzt wird. Dazu wird das strukturierte Cue-Feld
vor dem Zusammensetzen der Zeichenfolge ersetzt (niemals durch Parsen des zusammengeführten Textes, sodass kein
Cue-Inhalt — ob manipulativ oder gewöhnlich, einschließlich Inhalten mit `]` wie
`[inaudible]`/`[music]` — erhalten bleiben kann). Der dauerhaft gespeicherte Anfragekörper im Aufrufprotokoll ersetzt
jeden aus dem Video abgeleiteten Textteil durch diese geschwärzte Schattenkopie, wobei der Abgleich über
Inhaltsgleichheit erfolgt; der `fullText`-Anker wird erneut aus der fertigen Nutzlast der vor dem Aufruf ausgeführten
Schutzmaßnahmen gelesen. So gelingt der Abgleich auch dann noch, wenn spätere Schutzmaßnahmen in der Kette (die Maskierer für personenbezogene Daten und
Zugangsdaten mit den Prioritäten 10/95) den Beschreibungstext direkt verändern und
das Einfügen von System-Prompts, Übergabeinformationen oder Memory-Inhalten das Nachrichtenarray umstrukturiert.
Der an das Modell gesendete Anfragekörper bleibt unverändert. Bei einer als beobachtet markierten Anfrage werden außerdem
keine Daten in den dauerhaften Memory-Speicher übernommen (sowohl die anfrage- als auch die antwortbasierte Extraktion werden übersprungen),
sodass die eigene Antwort des Modells keinen Transkripttext in Memory übernehmen kann.

**Rohe Videofelder (#12430).** Wenn die Bridge aktiviert ist und native Videounterstützung unbekannt oder nicht vorhanden ist, aktivieren definierte `transcript`/`audioTranscript`-Felder ebenfalls `videoBridgeObserved`, selbst nach einem Fehlschlag der Beschreibung oder beim Erreichen eines `maxVideos`-Limits. `null` und leere Zeichenfolgen zählen; nicht vorhandene Felder und Metadaten ohne Videobezug zählen nicht. In aufbewahrten Kopien werden diese Felder geschwärzt oder die Anfrage wird weggelassen; Caches und Memory werden umgangen.

Auf diesen Fallback-Pfaden werden gültige Cues des Aufrufers in unterstützte `text`/`input_text`-Teile
umgewandelt, statt als nicht standardisierte Anbieterfelder weitergegeben zu werden. Beide mit der Anfrage übermittelten Spuren
bleiben nicht vertrauenswürdige `client`-Beobachtungen, mit einer ausdrücklichen Warnung, dass das Video
nicht beschrieben und die Zeitstempel nicht anhand des Mediums überprüft wurden. Die bestehenden
Grenzen von insgesamt 256 Cues/64 KiB sowie die Limits pro Cue gelten für beide Spuren zusammen;
Zeitstempel müssen innerhalb der 600-Sekunden-Obergrenze des Brokers und eines gegebenenfalls angegebenen
Fokuszeitfensters liegen. Ungültige Spuren werden verworfen und nicht als beliebiger Text weitergeleitet; eine gültige
andere Spur kann weiterhin verwendet werden, sofern das gemeinsame Limit nicht überschritten wird. Null-/leere
Felder fügen keinen Text hinzu. Dieser Fallback fügt weder einen Medienabruf noch eine Transkription hinzu.
Transkript-Erweiterungsfelder werden aus dem Fallback-Videoträger und seinen
`video_url`/`source`-Objekten entfernt. Die Positivliste für das OpenAI-Übertragungsformat bleibt strikt; bei unbekannter nativer Unterstützung
bleiben Videoträger verfügbar, und bekanntermaßen rein textbasierte Ziele behalten sichere Markierungen.
Strukturierte geschwärzte Schattenkopien schützen den angehängten Transkripttext, während die
ursprüngliche Anfrage des Aufrufers unverändert bleibt. Ziele mit nativer Unterstützung und
deaktivierte Bridges behalten ihr bestehendes Umgehungsverhalten bei.

Weitere aufbewahrte Kopien verwenden dasselbe Signal für beobachtete Anfragen. Der rohe
Snapshot der Client-Anfrage vor den Schutzmaßnahmen, die im Arbeitsspeicher ausstehende Anfrage und das Protokoll
frühzeitig abgelehnter Anfragen ersetzen Transkriptfelder in Videoteilen auf struktureller Ebene;
von Pipeline-Stufen und bei der Kontextübergabe erzeugte Zeichenfolgen-Prompts werden
an der Speicherstelle für den dauerhaft gespeicherten Anfragekörper geschwärzt. Die dauerhaft gespeicherte Markierung `video_content_removed`
sorgt dafür, dass eine Fortsetzung über `previous_response_id` sicher abgewiesen wird, statt
absichtlich verworfenen Text zu rekonstruieren. Wenn eine beobachtete Anfrage ihre
teilbezogene geschwärzte Schattenkopie vor der Protokollierung verliert oder auch nur eine von mehreren Video-Schattenkopien
nach späteren Änderungen an der Anfrage nicht mehr übereinstimmt, wird der aufbewahrte Anfragekörper
vollständig weggelassen, statt ein nur teilweise geschwärztes Transkript aufzubewahren.

Bei einer beobachteten Anfrage könnte eine Modellantwort beliebige Teile des
Transkripts ohne strukturierte Cue-Grenze zitieren. Ihr dauerhaft gespeichertes Aufrufprotokollfeld
`responseBody` wird daher durch eine Auslassungsmarkierung ersetzt; das detaillierte
Pipeline-Artefakt (das Anfrage- und Antwortkörper auf Anbieter- und Client-Seite sowie Stream-Chunks enthalten kann)
wird nicht aufbewahrt. Semantik-, Idempotenz- und Reasoning-Replay-Caches überspringen
für diese Anfrage Lese- und Schreibzugriffe. Die Anbieteranfrage und die für den Client sichtbare
Antwort bleiben unverändert. Frühe Keepalive-Bytes werden aus dem temporären
Puffer entfernt, wenn das detaillierte Artefakt weggelassen wird. Kiros Warnung zu fehlerhaftem EventStream
meldet nur die Byteanzahl der Nutzlast, niemals deren Inhalt oder den unverarbeiteten Fehler des JSON-
Parsers.
Damit wird nicht behauptet, dass sämtliche sonstigen Anbieter-/Plugin-Diagnosen
geprüft wurden; die umfassendere Überprüfung der Speicherstellen wird unter #11658 verfolgt.

Der interne Lebenszyklus von `/api/modality-bridge/video/drilldown` ist eine separate,
über Loopback/Token authentifizierte Cache-Infrastruktur. Jeder Vorgang erfordert außerdem eine
kanonische, opake Prinzipal-ID. Bevor ein Aufrufer für den Produktionsbetrieb freigeschaltet wird, muss er
diese ID aus dem authentifizierten Mandanten ableiten und darf niemals einen
vom Client gewählten Wert weiterleiten. Cache-Schlüssel binden diesen Prinzipal an kanonische Sitzungs- und
Videoreferenz-IDs, speichern ausschließlich deren mittels SHA-256 abgeleitete Schlüssel und beschränken sowohl Lesezugriffe
als auch Löschvorgänge auf denselben Prinzipal. Der Cache speichert höchstens 16 abgeleitete JPEG-
Frames pro Eintrag, lässt sie nach zehn Minuten ablaufen und unterstützt begrenzte
`start`/`end`-Lesezugriffe oder das explizite Löschen einer Sitzung.

Jeder Prinzipal ist auf 16 Einträge und 64 MiB kanonischer JPEG-Daten begrenzt. Diese
Limits sind unabhängig von der globalen Obergrenze von 64 Einträgen/256 MiB: Bei Überschreitung des Prinzipal-Kontingents
werden zunächst nur die am längsten nicht verwendeten Einträge dieses Prinzipals entfernt, bevor eine globale
LRU-Verdrängung in Betracht gezogen wird. Abgelaufene Einträge werden bei Cache-Aktivität sowohl aus der Prinzipal-
als auch aus der globalen Belegungsabrechnung entfernt, während bei Abbruch oder fehlgeschlagener Validierung
kein teilweiser Ersatz übernommen wird.

Der Cache weist nicht kanonisches Base64, übermäßiges Padding, Nicht-JPEG-Medien, fehlerhafte oder
abgeschnittene JPEGs sowie JPEGs zurück, die bei einer ressourcenbegrenzten vollständigen `sharp`-
Dekodierung eine Warnung erzeugen. Er kodiert jedes akzeptierte Bild erneut als kanonisches JPEG, ermittelt Breite und Höhe
aus den dekodierten Bytes, statt den Feldern des Aufrufers zu vertrauen, und verwirft alle angehängten
Polyglot-Bytes, statt sie beizubehalten. Nur der ressourcenbegrenzte kanonische komprimierte Puffer
wird auf beide Kontingente angerechnet. Das JSON-Übertragungslimit berücksichtigt den Base64-Overhead für die Obergrenze von 32 MiB
für dekodierte Eingabedaten. Jede
gespeicherte Ableitung erfasst ihr validiertes JPEG-Format und ihre Auflösung, die Sampling-Richtlinie,
die Ableitungsversion, den Erstellungszeitpunkt, den serverseitig berechneten Inhalts-Hash und die gehashte Referenz auf das übergeordnete Element
sowie den Hash des übergeordneten Inhalts vom vertrauenswürdigen Aufrufer. Zwischen
asynchronen Dekodierungs- und Hashing-Phasen wird vor dem atomaren Cache-Commit auf einen Abbruch geprüft.

Dieser Implementierungsabschnitt bindet noch keinen produktiven Erzeuger an die Route an und
bietet keine Auswahl von Varianten mit unterschiedlichen Auflösungen. Der transparente Anfragepfad der Video Bridge
verursacht daher keinen zusätzlichen Aufwand, während die mandantengebundene Ableitung der Sicherheitsidentität und
der vollständige FU-08-Lebenszyklus für mehrere Auflösungen ausdrücklich als Folgearbeiten offenbleiben, statt
als vollständig implementiertes Verhalten dokumentiert zu werden.

Frames werden sequenziell mit dem konfigurierten Video-Modell beschrieben. Eine leere
Video-Überschreibung übernimmt die Vision-Einstellung; wenn beide leer sind, wählt der automatische
Vision-Router das tatsächlich verwendete Modell mit Bildverarbeitungsfähigkeit aus. Erfolgreiche Beschreibungen
ersetzen den ursprünglichen Teil durch ein stabiles Präfix `[Video description:`, das
den Text außerdem als nicht vertrauenswürdige, aus Medien abgeleitete Beobachtung kennzeichnet und nachgelagerte
Modelle anweist, in den Medien enthaltene Anweisungen nicht zu befolgen. Cache-Schlüssel für Frame-Beschreibungen
enthalten die JPEG-Bytes, den Prompt, den Zeitstempel und das tatsächlich verwendete Modell; nur erfolgreiche
Beschreibungen werden zwischengespeichert. Cache-Einträge speichern das Modell, das die Beschreibung tatsächlich erfolgreich erzeugt hat,
einschließlich eines Fallback-Modells; die Bridge meldet `mixed`, wenn verschiedene Frames
von unterschiedlichen Modellen verarbeitet wurden. Ein Cache-Treffer verwendet diese Erzeugeridentität erneut,
statt sie als den angeforderten Routing-Plan umzuetikettieren. Der Ergebnis-Cache für vollständige Videos
verwendet alle Eingaben als Schlüsselbestandteile, die die Ausgabe verändern — Prompt, tatsächlich verwendetes
Modell, Sampling-Richtlinie, Frame-Anzahl, semantischer Analysemodus, den SHA-256-
Fingerabdruck des normalisierten Fokushinweises, Fokusfenster, `transcript`,
`audioTranscript` und das Kontaktabzug-Flag — sodass eine Änderung einer dieser
Dimensionen zu einem Cache-Miss führt und niemals zur Wiederverwendung veralteter Ergebnisse. Die Version der Richtlinie zur visuellen Deduplizierung,
der Schwellenwert und die begrenzte Anzahl möglicher Frames sind ebenfalls explizit im
Ergebnis-Cache-Schlüssel und in den Metadaten enthalten; eine Richtlinienänderung kann daher keine veraltete
Beschreibung des gesamten Videos wiederverwenden. Die Metadaten des Ergebnis-Cache v4 speichern den Modus und
den Fingerabdruck, niemals die unverarbeitete Benutzeraufgabe. Die Guardrail-Metadaten geben sowohl den
angeforderten als auch den tatsächlich verwendeten Analysemodus an; ein angeforderter Modus `focused` ohne
verwendbaren Benutzertext wird als tatsächlich verwendetes `full` gemeldet.

Die Guardrail extrahiert jeden unterstützten Videoteil, beschreibt jedoch höchstens
`modalityBridgeVideoMaxVideos`. Bei einem Ziel, für das nachweislich
`supportsVideo === false` gilt, werden fehlgeschlagene Videos und Videos oberhalb des Limits zu expliziten sicheren
Textmarkierungen, sodass keine unverarbeiteten Videos übrig bleiben. Wenn die Fähigkeit unbekannt ist, behalten diese Teile
ihren Videoträger bei; jedes Fallback-Transkript folgt der oben beschriebenen begrenzten
Textkonvertierung. Ziele mit `supportsVideo === true` umgehen die Bridge.
Das Abbruchsignal der Client-Anfrage wird durch Download, Broker-Warteschlange,
Unterprozesse und Beschreibungsaufrufe weitergegeben; Abbrüche stoppen die Verarbeitung zwischen Videos und führen niemals dazu,
dass unverarbeitete Medien als Ausweichlösung durchgelassen werden.

Laufzeiteinstellungen werden in der Datenbank gespeichert und mit Zod validiert:

| Schlüssel                           | Standard    | Bereich / Verhalten                                                                                                                         |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optionale Laufzeitfunktion, explizite Aktivierung erforderlich                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` behält allgemeine Beschreibungen bei; `focused` verwendet begrenzten, nicht vertrauenswürdigen Kontext der letzten Benutzernachricht |
| `modalityBridgeVideoModel`          | `""`        | Modell der Vision Bridge übernehmen                                                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` oder proportionales `segment_aware`; bei einem Detektorfehler wird auf `uniform` zurückgegriffen                   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                              |

Ältere gespeicherte Video-Timeout-Werte über 120 Sekunden werden auf die
Broker-Frist begrenzt; neue Schreibvorgänge für Einstellungen oberhalb dieses Limits werden abgewiesen.
`GET /api/modality-bridge/video/runtime` erfordert vor der Authentifizierung oder Laufzeitprüfung einen vertrauenswürdig bestätigten
Loopback-Ursprung und anschließend eine Verwaltungs-
authentifizierung. Zurückgegeben werden nur `available`, bereinigte FFmpeg/ffprobe-Versionen und eine feste
Begründung, wenn die Laufzeitumgebung nicht verfügbar ist. Der interne Extraktionsendpunkt ist
keine öffentliche Upload-API: Bei einer ausgelasteten Warteschlange wird `503` zusammen mit `Retry-After` zurückgegeben, bei einer
Verbindungstrennung durch den Aufrufer `499` und bei Ablauf der festen Broker-Frist `504`. Konvertierte Antworten ergänzen
`video->text;model=<visionModel>;parts=<videos>` im zentralen
Header `x-omniroute-modality-bridge`, ohne Vision- oder Audio-Segmente zu entfernen.

### PII-Maskierer (`piiMasker.ts`)

Wird in **beiden** Stufen ausgeführt.

- **`preCall`** klont die Nutzlast, durchläuft `system`, `messages`, `input` und
  `prompt` (einschließlich einfacher Zeichenfolgenelemente) und wendet `processPII()` (aus
  `@/shared/utils/inputSanitizer`) auf die Zeichenfolgenfelder `content`/`text` an. Wenn
  `PII_REDACTION_ENABLED=true` gesetzt ist, werden erkannte personenbezogene Daten (PII) in der ausgehenden
  Nutzlast unkenntlich gemacht. Dies ist unabhängig von `INPUT_SANITIZER_MODE` (das nur die
  Richtlinie für Prompt-Injection steuert). Wenn die Unkenntlichmachung deaktiviert ist, erfasst der Aufruf die Anzahl
  der Erkennungen, ohne Inhalte umzuschreiben.
- **`postCall`** erstellt eine tiefe Kopie der Antwort und führt `sanitizePIIResponse()` sowie
  die Maskierung für das Responses-API-Format aus (`maskResponsesOutput` — deckt
  `output_text` und `output[].content[].text` ab). Wenn Daten unkenntlich gemacht werden, ersetzt die
  geänderte Antwort das Original.

Der Schutzmechanismus blockiert niemals; er fügt lediglich Anmerkungen hinzu (`meta.detections`,
`meta.redacted`) oder schreibt Inhalte um.

#### Auswahl nach Typ, benutzerdefinierte Muster und Erkennungszähler

**Dashboard → Einstellungen → Sicherheit → PII-Maskierung** legt fest, _was_ maskiert wird. Damit
wird die Maskierung nicht aktiviert: Dafür sind weiterhin `PII_REDACTION_ENABLED` (Anfrage) und
`PII_RESPONSE_SANITIZATION` (Antwort + SSE) zuständig; beide sind standardmäßig deaktiviert.

- **Auswahl nach Typ** — die integrierten IDs sind in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) aufgeführt. Nicht festgelegt bedeutet alle
  Typen (das Verhalten vor Einführung dieser Einstellung). Das Muster
  `ssn_us` der Anfrage-Engine wird `ssn` zugeordnet. Vorlagen (Minimal, Standard, Finanzen,
  Brasilien, USA, Vollständig) setzen lediglich die Kontrollkästchen in der Benutzeroberfläche.
- **Benutzerdefinierte Muster** — bis zu 20 Regex- oder Platzhaltermuster (`*` = bis zu 64
  Nicht-Leerraumzeichen, `?` = eines). Treffer werden durch `[CUSTOM_REDACTED]` ersetzt.
  Jedes Muster durchläuft `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): höchstens 500 Zeichen, Flags beschränkt
  auf `g i m s u`, muss kompilierbar sein, muss die Prüfung durch `safe-regex` bestehen (katastrophales
  Backtracking) und darf weder auf eine leere Zeichenfolge noch auf einen Platzhalter für unkenntlich gemachte Daten passen.
  Ein Muster, das diese Prüfungen nicht besteht, wird beim Speichern und Testen abgelehnt; ein gespeicherter Datensatz,
  der sie nicht besteht, wird zur Laufzeit übersprungen, statt kompiliert zu werden. Benutzerdefinierte Muster werden nur
  angewendet, wenn die Maskierung aktiviert ist.
- **Erkennungszähler** — Anzahlen pro Typ (niemals die gefundenen Werte), die im
  Arbeitsspeicher gehalten und beim Neustart zurückgesetzt werden (`src/lib/pii/piiDetectionStats.ts`). Sie werden nur
  erhöht, wenn die Maskierung aktiviert ist.

Die Einstellungen werden in der Tabelle `key_value` gespeichert (Namensraum `pii_settings`,
`src/lib/db/piiSettings.ts`) und über einen Cache mit einer Gültigkeitsdauer von 1 s gelesen. API:

| Methode | Pfad                     | Zweck                                                                                   |
| ------- | ------------------------ | --------------------------------------------------------------------------------------- |
| `GET`   | `/api/settings/pii`      | Flag-Status, `enabledTypes`, `customPatterns`, Erkennungszähler                         |
| `PUT`   | `/api/settings/pii`      | `enabledTypes` (`null` = alle) und/oder `customPatterns` ersetzen                       |
| `POST`  | `/api/settings/pii/test` | Ein Muster anhand eines Beispiels von höchstens 8 KB testen; es wird nichts gespeichert |

Alle drei erfordern eine Authentifizierung für Verwaltungszugriffe und validieren den Anfragerumpf mit Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-Injection (`promptInjection.ts`)

Erkennt bösartige Strukturen in vom Benutzer bereitgestellten Inhalten und setzt die
konfigurierte Richtlinie durch. Das Verhalten wird durch Umgebungsvariablen und Konstruktoroptionen
gesteuert:

| Einstellung          | Umgebungsvariable                                                                                     | Standard | Wirkung                                                                                                                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert            | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | Bei `false` wird der Schutzmechanismus vorzeitig beendet.                                                                                                                                                                                                      |
| Modus                | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | Injection-Richtlinie: `block`, `warn` oder `log`. (`redact` wird aus Gründen der Abwärtskompatibilität akzeptiert, entfernt aber **keinen** Injection-Text; das Umschreiben personenbezogener Daten in Anfragen wird durch `PII_REDACTION_ENABLED` gesteuert.) |
| Blockierungsschwelle | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (Alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimaler Schweregrad für eine Blockierung. Der mittlere Schweregrad wird standardmäßig nur beobachtet.                                                                                                                                                        |

**Rangfolge der Modi** (`getMode`): `options.mode` des Aufrufers →
**DB-Feature-Flag-Überschreibung** für `INJECTION_GUARD_MODE` (Dashboard → Einstellungen →
Feature-Flags) → Umgebungsvariable `INJECTION_GUARD_MODE` → Umgebungsvariable `INPUT_SANITIZER_MODE` →
`warn`. Eine Dashboard-Überschreibung hat somit Vorrang vor den Umgebungsvariablen, sodass die
Feature-Flags-Oberfläche den laufenden Schutzmechanismus unmittelbar steuert (ohne Neustart). Der DB-Lesezugriff ist ausfallsicher:
Bei einem Fehler fällt der Schutzmechanismus auf das umgebungsvariablenbasierte Verhalten zurück. Wenn keine
Überschreibung festgelegt ist, entspricht das Verhalten genau der ausschließlich auf Umgebungsvariablen basierenden Auflösung.

Erkennungsquellen:

1. `sanitizeRequest()` aus `@/shared/utils/inputSanitizer` (gemeinsamer Satz von Detektoren,
   der auch an anderen Stellen der Pipeline verwendet wird).
2. Integrierte `DEFAULT_GUARD_PATTERNS` (derzeit `system_override_inline` und
   `markdown_system_block`, beide mit Schweregrad `high`).
3. Optionale `customPatterns`, die über Konstruktoroptionen übergeben werden (Zeichenfolgen, reguläre Ausdrücke
   oder Datensätze im Format `{ name, pattern, severity }`).

Wenn `mode === "block"` gilt **und** mindestens eine Erkennung den Schweregrad-
Schwellenwert erreicht, gibt `preCall` den Wert `{ block: true, message: "Request rejected:
suspicious content detected" }` zurück. In den Modi `warn`/`log` protokolliert die Schutzfunktion den Vorgang, lässt
den Aufruf jedoch zu. Die gemeinsam genutzte Hilfsfunktion `evaluatePromptInjection()` wird ebenfalls exportiert,
damit Aufrufer Prompts auswerten können, ohne die Registry zu durchlaufen.

**Scan-Grenze (v3.8.20):** Der Detektor untersucht nur die **ersten 16 KB** des
zusammengeführten Prompt-Texts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 Bytes) in
`src/shared/utils/inputSanitizer.ts`. Sowohl `detectInjection()` als auch
`evaluatePromptInjection()` führen `slice(0, MAX_INJECTION_SCAN_BYTES)` aus, bevor
die Musterschleife durchlaufen wird. Injection-Anweisungen befinden sich weit oben in einer Eingabe. Dadurch
wird die CPU-/GC-Last durch reguläre Ausdrücke bei Nutzlasten von mehreren hundert KB begrenzt, ohne die Erkennung zu schwächen (vgl.
#3932, #4041).

### Maskierung von Zugangsdaten (`credentialMasker.ts`)

Wird in **beiden** Phasen ausgeführt, als letzter Schritt in der Standardkette (Priorität `95`). Maskiert
bekannte Muster für API-Schlüssel und geheime Tokens in der ausgehenden Nutzlast (Nachrichteninhalt,
Argumente von Tool-Aufrufen, Tool-Ergebnisse) **und** in der Anbieterantwort, damit
Zugangsdaten, die in einen Prompt eingefügt (oder von einem Tool-Ergebnis zurückgegeben) werden, weder
an den vorgelagerten Anbieter noch zurück an den Client weitergegeben werden.

- **Nur nach expliziter Aktivierung**, nach derselben Konvention wie die Maskierung personenbezogener Daten (im Umfeld von Hard Rule #20):
  deaktiviert, sofern nicht `settings.credentialRedactionEnabled === true` **oder**
  `CREDENTIAL_REDACTION_ENABLED=true` gilt. Ist sie deaktiviert, bleibt die Schutzfunktion wirkungslos —
  sie blockiert nichts und verändert nichts.
- `redactCredentials()` durchläuft den gesamten Nutzlast-/Antwortbaum (`walkValue()`,
  gegen Prototype Pollution abgesichert, zyklensicher durch `WeakSet`) und ersetzt Treffer durch
  einen Platzhalter `[REDACTED:<type>]`. Dabei werden nur die Zweige geklont, die tatsächlich
  verändert wurden.
- `CREDENTIAL_PATTERNS` deckt Schlüssel von LLM-Anbietern (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-Tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), Zahlungsschlüssel (Stripe, Square), Cloud-
  Schlüssel (AWS-Zugriffsschlüssel, Twilio, SendGrid, Mailgun), private Schlüssel / JWTs,
  Verbindungszeichenfolgen mit Zugangsdaten (`mongodb://user:pass@...` usw.) sowie
  ein generisches Muster für die Werte der Header `Authorization`/`x-api-key`/`api-key`/`apikey`
  ab. Headerartige Schlüssel (`authorization`, `x-api-key`, `api-key`,
  `apikey`) werden strukturell maskiert (nur der Wert, wobei Schemapräfixe wie
  `Bearer `/`Basic ` erhalten bleiben) statt über den generischen regulären Ausdruck für Text.
- Die Schutzfunktion blockiert niemals; sie verändert lediglich Inhalte (`modifiedPayload` /
  `modifiedResponse`) und fügt Metadaten hinzu (`meta.credentialsRedacted`, `meta.count`).

Regressionstest: `tests/unit/credential-masker-guardrail.test.ts`.

## Basisvertrag (`base.ts`)

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
  block?: boolean; // true bricht die Verarbeitungskette vorzeitig ab
  message?: string; // wird beim Blockieren angezeigt
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // wird von preCall zurückgegeben, um die Anfrage umzuschreiben
  modifiedResponse?: TValue; // wird von postCall zurückgegeben, um die Antwort umzuschreiben
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

Ein Guardrail signalisiert „keine Änderung“, indem es entweder `void`, `{}` oder
`{ block: false }` zurückgibt. Die Rückgabe von `modifiedPayload`/`modifiedResponse` ersetzt
den Wert, der durch die Verarbeitungskette an nachgelagerte Guardrails weitergereicht wird.
`signal?: AbortSignal` überträgt den Lebenszyklus des Aufrufers auf die Guardrails. Ein Anfrageabbruch ist die bewusste Ausnahme vom Fail-open-Verhalten: Medienbrücken stellen ihre Arbeit ein und räumen auf, ohne die ursprünglichen Medien für ein Ziel wiederherzustellen, das diese bekanntermaßen nicht unterstützt.

## Registry (`registry.ts`)

Der Singleton `guardrailRegistry` stellt Folgendes bereit:

- `register(guardrail)` — fügt ein Guardrail hinzu (oder ersetzt es anhand des normalisierten Namens) und
  sortiert erneut nach aufsteigender `priority`.
- `clear()` / `list()` — Hilfsfunktionen für die Verwaltung.
- `runPreCallHooks(payload, context)` — durchläuft aktive Guardrails, reicht die
  Nutzdaten über `modifiedPayload` weiter und stoppt beim ersten `block: true`.
- `runPostCallHooks(response, context)` — gleicher Ablauf auf der Antwortseite.
- `resetGuardrailsForTests({ registerDefaults })` — löscht den Zustand und registriert optional
  die Standard-Guardrails erneut, um eine saubere Testisolierung zu gewährleisten.

Beide Ausführungsfunktionen geben `{ blocked, payload|response, results, guardrail?, message? }` zurück,
wobei `results` ein Array von `GuardrailExecutionResult`-Datensätzen ist, die
für jedes Guardrail die Felder `blocked`, `skipped`, `modified`, `error` und `meta` enthalten,
die für die Ablaufverfolgung nützlich sind.

### Guardrails pro Anfrage deaktivieren

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` stellt eine
deduplizierte Liste von Guardrail-Namen zusammen, die für die aktuelle
Anfrage übersprungen werden sollen. Es gibt fünf Kanäle, die in dieser Reihenfolge gelesen und zu einer Liste zusammengeführt werden
(beim Deduplizieren hat das erste Vorkommen Vorrang):

1. `apiKeyInfo.disabledGuardrails`
2. Anfrage-Body `disabledGuardrails` (oberste Ebene)
3. Anfrage-Body `metadata.disabledGuardrails` (nur wenn `metadata` ein Objekt ist)
4. Header `x-omniroute-disabled-guardrails`
5. Veralteter Header `x-disabled-guardrails`

Alle fünf Kanäle werden zusammengeführt, einschließlich der beiden Header: Werden sowohl
`x-omniroute-disabled-guardrails` als auch `x-disabled-guardrails` gesendet, wird die Vereinigungsmenge
ihrer Listen übersprungen, und ein leerer moderner Header verdeckt den veralteten nicht mehr
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), behoben in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Werte können Arrays von Zeichenfolgen oder eine kommagetrennte Zeichenfolge sein; bei Namen werden umgebende Leerzeichen entfernt
und die Schreibweise auf kleingeschriebenes Kebab-Case normalisiert (`pii_masker` → `pii-masker`), und leere
Einträge werden verworfen. Das Ergebnis wird über `context.disabledGuardrails`
an die Registry übergeben, die übereinstimmende Guardrails überspringt (`skipped: true` in `results`).

Die Deaktivierungsliste wirkt sich nur auf die **Registry** aus. Der `block`-Modus für Prompt-Injection ist
eine verbindliche Sicherheitsgrenze: Die Injection-Guard-Middleware
(`src/middleware/promptInjectionGuard.ts`) ruft `evaluatePromptInjection()`
ohne eine vom Aufrufer kontrollierte Deaktivierungsliste auf (der wirkungslose
Aufruf von `resolveDisabledGuardrails({ body })`, den sie zuvor ausführte, wurde in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) entfernt), sodass eine Anfrage,
die `prompt-injection` deaktiviert, im `block`-Modus weiterhin abgelehnt wird. Das ist
beabsichtigt. Die Deaktivierungskanäle werden vom Aufrufer kontrolliert (Anfrage-Body,
Metadaten, Header), und ein Aufrufer darf eine vom Betreiber eingerichtete
Sicherheitsmaßnahme nicht abschalten können
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Die
Header-Vereinigung aus [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ändert nur, welche Registry-Guardrails übersprungen werden; sie ermöglicht es einem Client nicht,
die Middleware zu umgehen. Verbindliche Guardrail-Richtlinien pro Schlüssel und pro Gruppe werden
im v4-RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) behandelt.
Siehe [Abdeckung und Grenzen](#coverage-and-limits).

## Ausführungsreihenfolge

Für jede Anfrage, die durch `src/sse/handlers/chat.ts` und
`open-sse/handlers/chatCore.ts` läuft (die unter
[Abdeckung und Grenzen](#coverage-and-limits) aufgeführten Routen der Chat-Familie):

1. `resolveDisabledGuardrails(...)` erstellt die Überspringliste aus API-Schlüssel, Body
   und Headern.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` führt Guardrails in aufsteigender
   Prioritätsreihenfolge aus:
   - Deaktivierte Guardrails werden als `skipped` erfasst.
   - Der `preCall` jedes Guardrails kann die Nutzdaten über `modifiedPayload` umschreiben.
   - Das erste `block: true` bricht die Kette vorzeitig ab, und der Handler gibt
     eine Guardrail-Ablehnungsantwort zurück.
3. Die (möglicherweise umgeschriebenen) Nutzdaten werden an das Combo-Routing und die
   Upstream-Weiterleitung übergeben.
4. **Nur ohne Streaming:** Nachdem die Antwort zusammengestellt wurde,
   führt `guardrailRegistry.runPostCallHooks(...)` dieselbe Kette auf der
   Antwort aus. `block: true` verwirft hier die Upstream-Antwort und gibt HTTP 400 zurück. Gestreamte Antworten überspringen diesen Schritt vollständig.

Guardrails, die eine Ausnahme auslösen, werden mit `error: <message>` erfasst und über
`logger.warn` protokolliert, die Kette wird jedoch fortgesetzt — nach dem bewusst gewählten Fail-open-Prinzip.

## Abdeckung und Grenzen

Die Guardrail-Registry ist nur in die Chat-Pipeline eingebunden. Diese Grenzen werden
durch `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` und
`tests/unit/guardrail-pipeline-characterization.test.ts` festgeschrieben; aktualisieren Sie diese Tests
bewusst, wenn sich das Verhalten ändert.

### Wo die Hooks ausgeführt werden

| Hook / Steuerung                    | Wird ausgeführt für                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Anfragen, die von `handleChat` (`src/sse/handlers/chat.ts`) verarbeitet werden: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (und `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` und den Telegram-Chat-Proxy. Außerdem für den Dashboard-Testendpunkt `/api/guardrails/test`. Eine Blockierung vor dem Aufruf gibt HTTP 400 zurück. |
| `runPostCallHooks`                  | Nur Chat-Antworten **ohne Streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Gestreamte Antworten erreichen diesen Hook nie.                                                                                                                                                                                                                                                                                                                           |
| PII beim Streaming                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), in `streamingPipeline.ts` in die Pipeline eingebunden, wenn `PII_RESPONSE_SANITIZATION` aktiviert ist. Dies ist kein Guardrail, daher haben die Deaktivierungskanäle darauf keinen Einfluss.                                                                                                                                                                                                              |
| Injection-Guard-Middleware (Legacy) | Jede `/v1`-Route mit Prompt, einschließlich der Chat-Familie (siehe [Routenabdeckung](#injection-guard-route-coverage--red-team-phase-8--block-d)). Nur Prompt-Injection.                                                                                                                                                                                                                                                                                               |

### Was nicht abgedeckt ist

- **Medien-, Embedding- und Datenrouten** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) erreichen die Registry nie. Dort werden weder
  PII-Maskierung noch Zugangsdatenmaskierung oder eine Modalitätsbrücke ausgeführt. Ihre einzige
  Prüfung erfolgt durch die Legacy-Injection-Guard-Middleware.
- **Gestreamte Antworten** erhalten keine Guardrails nach dem Aufruf: weder `pii-masker` noch
  `credential-masker` nach dem Aufruf und auch keine Blockierung nach dem Aufruf. Nur die PII-Transformation
  beim Streaming greift (wenn `PII_RESPONSE_SANITIZATION` aktiviert ist). Zugangsdaten,
  die in einer gestreamten Antwort zurückgegeben werden, werden nicht unkenntlich gemacht.
- **Deaktivierungskanäle im Vergleich zur Middleware (beabsichtigt):** Die Middleware prüft
  Prompt-Injection mit einem eigenen Aufruf von `evaluatePromptInjection()`, ohne
  eine vom Aufrufer kontrollierte Deaktivierungsliste zu übergeben. Der Modus `block` ist eine verbindliche
  Grenze, die durch vom Aufrufer gesteuerte Deaktivierungen nicht umgangen werden kann, auch nicht auf Routen der Chat-Familie
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Das Deaktivieren von
  `prompt-injection` überspringt nur den Guardrail in der Registry.

### Was vor den Hooks nach dem Aufruf Zugriff auf eine Antwort hat

Im Pfad ohne Streaming ist die Reihenfolge: Speicherextraktion → Ausführung integrierter
Tools → Guardrails nach dem Aufruf → Abbruch bei Blockierung nach dem Aufruf → Speicherung im semantischen Cache.

- **Speicherextraktion** und **Tool-Ausführung** sehen die Antwort, bevor nachgelagerte
  Schutzmechanismen sie umschreiben oder blockieren können. Seit
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) wird bei der
  Speicherextraktion der extrahierte Text durch `sanitizePII` verarbeitet, wenn
  `PII_RESPONSE_SANITIZATION` aktiviert ist (sowohl mit als auch ohne Streaming). Eine
  Antwort, die später durch nachgelagerte Schutzmechanismen blockiert wird, wurde jedoch bereits dem Speicher und den
  Tools bereitgestellt.
- **Der semantische Cache** speichert die Antwort nach der nachgelagerten Prüfung, also die
  umgeschriebene Antwort. Eine blockierte Antwort wird niemals zwischengespeichert. Cache-Einträge werden
  nach API-Schlüssel getrennt verwaltet.

## Konfiguration

Umgebungsvariablen, die von den integrierten Schutzmechanismen gelesen werden:

| Variable                              | Verwendet von               | Auswirkung                                                                                                             |
| ------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Auf `false` setzen, um die Erkennung vollständig zu deaktivieren.                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Richtlinie für Injektionen: `warn`, `block` oder `log`. Der ältere Wert `redact` schreibt den Injektionstext nicht um. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Modus für den Injektionsschutz; zugleich ein DB-Feature-Flag, das die Umgebungsvariablen **überschreibt** (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mindestschweregrad, ab dem `MODE=block` Anfragen ablehnt: `high` (Standard), `medium` oder `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Älterer Alias für `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Bei `true` werden personenbezogene Daten in Anfragen unkenntlich gemacht (unabhängig vom Injektionsmodus).             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nachgelagert) | Steuert das Verhalten der Maskierung auf der Antwortseite.                                                             |

Die Schutzmechanismen der Modality Bridge lesen die Laufzeitkonfiguration aus dem DB-gestützten
Einstellungsspeicher (`getSettings()`), nicht aus Umgebungsvariablen. Die primären Schlüssel für Vision sind
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und
`modalityBridgeCacheMaxEntries`. Die älteren
`visionBridge*`-Schlüssel werden nur als dokumentierter Lese-Fallback für einen Zyklus
akzeptiert; Schreibvorgänge im Dashboard verwenden die primären Schlüssel. Standardwerte und der Fallback-
Resolver befinden sich in `src/shared/constants/modalityBridgeDefaults.ts`, während die älteren
Konstanten in `src/shared/constants/visionBridgeDefaults.ts` beibehalten werden.

Audio verwendet `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` und `modalityBridgeAudioMaxClips` sowie die gemeinsamen
`modalityBridgeCache*`-Einstellungen. Für Audio gibt es keinen Fallback auf ältere Schlüssel, da diese
Schlüssel mit dem Modality-Bridge-Schema eingeführt wurden.

Video verwendet `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` und
`modalityBridgeVideoTimeout` sowie die gemeinsamen `modalityBridgeCache*`-Einstellungen.
Es ist standardmäßig deaktiviert, da FFmpeg/ffprobe optionale betriebliche
Abhängigkeiten sind und die Erstellung von Einzelbildbeschreibungen zusätzliche Latenz und Modellkosten verursacht.

## Benutzerdefinierte Guardrails

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

Schritte:

1. Erstellen Sie `src/lib/guardrails/myGuardrail.ts` als Erweiterung von `BaseGuardrail`.
2. Implementieren Sie `preCall` und/oder `postCall`.
3. Registrieren Sie die Guardrail entweder beim Import (aus `registerDefaultGuardrails` heraus) oder
   rufen Sie `guardrailRegistry.register(...)` zur Laufzeit auf — die Registry ersetzt
   jede zuvor registrierte Guardrail mit demselben normalisierten Namen.
4. Fügen Sie Tests unter `tests/unit/` hinzu (vorhandene Beispiele:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Verwenden Sie `resetGuardrailsForTests()` zwischen Tests, um mit einem bekannten Zustand zu beginnen.
Übergeben Sie `{ registerDefaults: false }`, um mit einer leeren Registry zu beginnen und
nur die zu testenden Guardrails zu registrieren. Vision Bridge unterstützt Dependency
Injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stellt die
entsprechenden Schnittstellen für Einstellungen, Fähigkeiten, STT-Modellauswahl, die Prüfung von
Zugangsdaten und Transkription bereit. Tests können daher beide Abläufe ohne Datenbank-
oder Netzwerkzugriff prüfen.

## Siehe auch

- `src/lib/guardrails/` — Implementierung
- `src/shared/utils/inputSanitizer.ts` — gemeinsam genutzter Detektor für
  Prompt-Injection-Erkennung und PII-Maskierung
- `src/shared/constants/visionBridgeDefaults.ts` — Vision-Bridge-Standardwerte und
  Liste der Modelle mit erzwungener Bridge-Nutzung
- `src/shared/constants/modalityBridgeDefaults.ts` — gemeinsame Laufzeitstandardwerte für Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — unabhängige Schicht (Circuit Breaker, Abkühlzeiten)
- `docs/reference/ENVIRONMENT.md` — vollständige Referenz der Umgebungsvariablen

## Routenabdeckung des Injection-Guards & Red-Teaming (Phase 8 · Block D)

Der Injection-Guard (`createInjectionGuard` / `withInjectionGuard`) deckt alle Routen ab,
die Benutzer-Prompts akzeptieren. Er berücksichtigt `INJECTION_GUARD_MODE` (Standard `warn` = nur protokollieren;
`block` = gibt HTTP 400 `SECURITY_001` zurück).

| Typ              | Routen                                                                                                                                               | Standardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (bestehend) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Daten            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Die Textextraktion (`extractMessageContents`) deckt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ab.

**Red-Teaming (nächtlich, `nightly-llm-security.yml`):** promptfoo überprüft, dass jede Route
den OWASP-LLM-Korpus mit `INJECTION_GUARD_MODE=block` blockiert; garak führt Prüfungen aus (wird ohne Secret übersprungen).
`moderations` ist aus Konsistenzgründen enthalten. Der Blockiermodus ist eine zwingende Schutzgrenze: `evaluatePromptInjection()`
ignoriert die anfragespezifische Deaktivierungsliste, die die Middleware übergibt, sodass `disabledGuardrails` eine Route
**nicht** davon ausnimmt ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Der nächtliche Workflow (`.github/workflows/nightly-llm-security.yml`, Cron + manuelle
Auslösung) umfasst zwei Jobs:

- **`promptfoo-guard` (blockierend)** — führt `promptfoo eval -c promptfooconfig.yaml`
  mit `INJECTION_GUARD_MODE=block` aus. Jeder Angriffstestfall (z. B. „Ignoriere alle
  vorherigen Anweisungen…“, Jailbreaks im DAN-Stil) prüft, ob die Antwort
  `error.code === "SECURITY_001"` enthält, also ob der Guard die Anfrage tatsächlich abgelehnt hat.
- **`garak` (hinweisend)** — führt garak `--probes promptinject,dan,leakreplay`
  gegen eine lokale OmniRoute-Instanz (`http://localhost:20128/v1`) aus. Setzt ein
  Anbieter-Secret (`PROMPTFOO_PROVIDER_KEY`) voraus; wird andernfalls ohne Fehler übersprungen und ist mit
  `|| true` versehen, sodass Ergebnisse gemeldet werden, ohne die CI fehlschlagen zu lassen.

Die Abdeckung der Guard-Hilfsfunktionen (`createInjectionGuard` / `withInjectionGuard`)
erstreckt sich auf jede `/v1`-Route, die Prompts entgegennimmt; der Prompt-Text wird durch
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts` aus
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` extrahiert.

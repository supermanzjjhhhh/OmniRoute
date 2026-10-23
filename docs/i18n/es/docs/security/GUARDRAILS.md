# Guardrails (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fuente de referencia:** `src/lib/guardrails/`
> **Última actualización:** 2026-10-17 — v3.8.52 (se añadió [Cobertura y límites](#coverage-and-limits):
> a qué rutas y vías de respuesta llegan los hooks, las cabeceras de desactivación combinadas (#16412), el modo de bloqueo de inyecciones
> como límite obligatorio (#16413) y qué componentes ven una respuesta antes de la fase posterior a la llamada)

Los guardrails aplican medidas de seguridad, políticas y transformaciones de contenido en el límite
entre OmniRoute y los proveedores externos. Cada guardrail puede inspeccionar (y
opcionalmente rechazar, transformar o anotar) las cargas útiles de las solicitudes (`preCall`) y
las respuestas de los proveedores (`postCall`).

El sistema es **de apertura ante fallos**: si un guardrail lanza una excepción durante su ejecución, el registro
guarda el error y continúa con el siguiente guardrail en lugar de hacer fallar la
solicitud. El bloqueo es una decisión explícita (`block: true`), nunca un accidente.
La única excepción es una solicitud cancelada: cuando se cancela el `signal` del llamador,
un guardrail que lanza una excepción hace que se rechace la ejecución del hook en lugar de omitirse.

Los hooks **no** se ejecutan en todas las rutas ni en todas las respuestas. Lea
[Cobertura y límites](#coverage-and-limits) antes de confiar en un guardrail como
control de seguridad.

## Guardrails integrados

El registro carga automáticamente seis guardrails por orden de prioridad al importarse
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridad | Nombre              | Etapa(s)       | Archivo               |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Los números de prioridad más bajos se ejecutan **primero**.

### Puente de visión (`visionBridge.ts`) — Puente de modalidad PR-1

El modelo base GLM 5.3 y `glm-5.3-{low,high,max}` tienen metadatos explícitos
`supportsVision:false` en el registro y la especificación. Las variantes GLM 5.3 Flash
siguen siendo modelos con visión nativa. La ruta `/v1/messages` de Claude Code entra en la
cadena compartida de guardrails previos a la llamada de `handleChat` **antes** de la traducción de Claude a OpenAI;
las imágenes anidadas en los resultados de la herramienta `Read` deben describirse o procesarse
antes de que esa traducción las convierta en contenido `image_url` de OpenAI (#17069).

Intercepta las solicitudes con imágenes dirigidas a **modelos sin visión** y
redirige la solicitud completa a un modelo con capacidad de visión o sustituye las partes
de imagen por descripciones de texto generadas por un modelo de visión configurable antes
de la llamada al proveedor. Esto permite que los proveedores que solo admiten texto procesen
cargas útiles multimodales de forma transparente.

Flujo:

1. Omitir si el modelo de destino ya admite visión (a menos que aparezca en la
   lista de modelos para los que se fuerza el puente `isVisionBridgeForcedModel`).
2. Extraer las partes de imagen mediante `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega en el **detector unificado de
   medios** `detectMediaParts()` de `open-sse/utils/mediaParts.ts` — la
   única fuente de referencia compartida con el filtro de compatibilidad de combinaciones.
   La extracción se limita a las estructuras que `replaceImageParts` puede volver a
   insertar (el contrato de extracción↔sustitución): `image_url` de OpenAI, base64 de Anthropic
   `source.type:"base64"`, URL de Anthropic `source.type:"url"` e
   `input_image` de la API Responses. Las imágenes coincidentes anidadas en
   `tool_result.content` de Claude Code y en las salidas de herramientas de Responses también se extraen y
   se sustituyen en sus rutas originales; las estructuras que solo contienen indicadores corresponden al filtro
   de combinaciones y no se extraen.
   Omitir si no se encuentra ninguna.
3. Resolver la configuración en tiempo de ejecución mediante `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): las nuevas claves de configuración `modalityBridge*`
   tienen prioridad; las claves heredadas `visionBridge*` se mantienen como **alternativa durante un
   ciclo** (ventana de reversión). Omitir antes de recorrer los medios si el
   puente está desactivado.
4. El selector de modo (`modalityBridgeVisionMode`, consulte la tabla siguiente) decide
   entre redirigir y describir. La redirección devuelve `modifiedPayload` con solo `model`
   cambiado, además de los metadatos `{ rerouted, fromModel, toModel, imagesKept }`.
5. Vía de descripción: limitar las imágenes a `maxImages`, componer el prompt adaptado a la tarea,
   consultar la caché de descripciones, llamar al modelo de visión **en paralelo**
   (`Promise.allSettled`) e insertar partes de texto `[Image N]: <description>` en
   su lugar. Una descripción fallida devuelve `null`: la imagen original se conserva para
   destinos desconocidos o con capacidad de visión (#4012), pero un **destino directo confirmado
   como exclusivamente textual** o una combinación sin capacidad de visión recibe un texto de sustitución explícito
   `(unavailable — no vision-capable provider connected)` para
   cada imagen sin describir, incluidos los fallos parciales y las imágenes que superan el
   límite de llamadas de descripción (#17069). Se mantiene la alternativa existente para la descripción
   de combinaciones cuando fallan todas las llamadas (#8430).
6. Devolver `modifiedPayload` + metadatos (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de modo (`modalityBridgeVisionMode`)

| Modo       | Predeterminado | Comportamiento                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔              | Heurística heredada, sin cambios (#6640/#7204): los modelos que no son combo o son `auto/` se redirigen al mejor modelo de visión, salvo que el modelo original ya tenga credenciales utilizables (en cuyo caso se genera una descripción); los destinos combo siempre generan descripciones.                                                                                         |
| `describe` |                | Siempre genera una descripción: el bloque de redirección se omite por completo; siempre responde el modelo elegido por el usuario.                                                                                                                                                                                                                                                    |
| `reroute`  |                | Fuerza la redirección: se omite la protección que conserva el modelo con credenciales. La protección de credenciales del **destino** de redirección sigue aplicándose: cuando no existe ningún destino de visión utilizable, el puente bloquea la solicitud con un error claro en lugar de generar una descripción o enviar imágenes sin procesar a un destino que solo admite texto. |

Los modos forzados interrumpen el flujo **antes** de que se ejecute la heurística automática; el comportamiento de `auto`
es idéntico byte a byte al de la protección anterior a PR-1.

#### Ámbito de la clave de API (`visionBridgeKeyScope.ts`)

Cuando la clave de API del solicitante restringe `allowedConnections`, los grupos de cuotas
(`allowedQuotas`) o los modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), el puente solo
selecciona modelos de redirección y descripción que la clave puede usar, en conexiones que la clave puede
usar. La llamada de descripción pasa entonces siempre por el bucle interno de OmniRoute con
la cabecera `x-omniroute-self-loop-key-id`, de modo que la solicitud de chat receptora
vuelve a aplicar la política de conexiones y modelos de esa clave. `enforceApiKeyPolicy()`
solo respeta esa cabecera junto con el token de portador del bucle interno, por lo que únicamente puede
restringir el acceso, y se rechaza cualquier identificador que no se pueda resolver.

Si no se permite ningún modelo de visión para la clave, un **destino confirmado como exclusivo
de texto** rechaza la solicitud de imagen localmente con un error HTTP 400 claro en lugar de
reenviar los bytes de la imagen a un servicio ascendente incapaz de procesarlos (#17069). Para los destinos con
capacidad de visión desconocida o nativa, la ruta de descripción conserva su comportamiento anterior
de permitir la continuación en caso de fallo (metadatos `{ skipped: true, reason: "no_permitted_vision_model" }`).
Las solicitudes sin clave y las claves sin estas restricciones se comportan exactamente igual que
antes.

#### Prompt de descripción adaptado a la tarea (`modalityBridgeVisionTaskAware`)

El valor predeterminado es **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) añade
el texto del **último mensaje del usuario** (truncado a 500 caracteres) al prompt
de descripción base, orientando la descripción hacia lo que el usuario realmente ha pedido
(patrón codex-vision-proxy) y solicitando al modelo de visión que transcriba el texto
visible. Con la opción desactivada, o si no hay texto del usuario, se utiliza el prompt base sin cambios.

La propia solicitud compatible con OpenAI del bucle interno de descripción (`callVisionModelSingle()`
en `visionBridgeHelpers.ts`) siempre solicita `image_url.detail: "high"`,
incondicionalmente, para todos los solicitantes y proveedores, sin depender de ninguna señal del cliente.
El muestreo de bajo detalle reduce la precisión del OCR precisamente en la tarea
de transcripción de texto que solicita este prompt, por lo que la propia llamada de descripción siempre pide un nivel
de detalle alto, independientemente del nivel de detalle utilizado en la solicitud entrante original. Esto
solo afecta al cuerpo de la solicitud de descripción interna; no cambia cómo
OmniRoute reenvía el valor `image_url.detail` del solicitante en la solicitud principal:
ese valor predeterminado se aplica por separado, y solo para los clientes OpenCode detectados, en
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La
rama con formato de transmisión de Anthropic del bucle interno de descripción no tiene ningún campo `detail`
y no se ve afectada por ninguno de los dos valores predeterminados.

#### Límite de salida de la descripción (`modalityBridgeVisionMaxChars`)

| Clave                          | Predeterminado | Intervalo       |
| ------------------------------ | -------------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`            | `0` o 100–50000 |

`0` (valor predeterminado) significa **sin límite**: la descripción devuelta por
`callVisionModel()` se transmite sin modificaciones, conservando el comportamiento
existente. Cualquier valor del intervalo 100–50000 trunca la descripción con un
sufijo `…` antes de volver a insertarla como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` en `src/lib/guardrails/visionBridge.ts`).
Aumente este valor para las tareas de OCR con muchos detalles en las que el modelo posterior necesite la
transcripción completa; redúzcalo para limitar el uso de tokens en modelos de visión prolijos.
El campo del panel de control se encuentra en el panel Avanzado de la pestaña Visión
(`modality-bridge-max-chars` en `ModalityBridgeVisionTab.tsx`) y ajusta cualquier
valor entre 1 y 99 al mínimo de 100, mientras deja un `0` explícito
sin cambios: `0` es un valor válido de Zod por sí mismo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), no simplemente
el valor predeterminado para «sin establecer».

#### Caché de descripciones (`modalityBridge/bridgeCache.ts`)

Caché en memoria con LRU + TTL para las salidas de descripción, compartida por todo el proceso.
Clave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con
delimitación mediante prefijos de longitud (sin colisiones entre los límites de los campos). El componente del modelo es
el modelo de puente **configurado**, no el modelo que realmente respondió:
`callVisionModel` puede recurrir internamente a una alternativa, y usar una clave por intento
fragmentaría la caché. Las descripciones fallidas nunca se almacenan en caché. Configuración:

| Clave                           | Predeterminado | Intervalo |
| ------------------------------- | -------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`         | —         |
| `modalityBridgeCacheTtlMinutes` | `60`           | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`          | 10–5000   |

#### Normalización de imágenes remotas (describe mediante bucle interno/obtención en base64)

Cuando el puente obtiene por sí mismo una imagen **remota** — la llamada interna a
Anthropic para describirla y la conversión a base64 del formato de transmisión de Claude
(`ensureBase64ImagesForClaudeWire`), ambas mediante
`fetchRemoteImageAsDataUri()` en `visionBridgeHelpers.ts` — el URI de datos
resultante pasa por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de incorporarse a la solicitud al modelo
de visión. Las imágenes demasiado grandes se reducen a un **lado largo de 2048px** (igualando
el límite de redimensionamiento que OpenAI/Anthropic ya aplican en el servidor), lo que reduce
los bytes de subida y la latencia sin cambiar lo que ve el modelo de visión. El redimensionamiento
utiliza `sharp`, cargado mediante importación dinámica: en una plataforma donde su binario
nativo no se pueda cargar, `normalizeDataUri()` **nunca lanza excepciones** — recurre
a pasar los bytes originales sin modificarlos, por lo que la ruta de descripción/conversión
a base64 siempre sigue funcionando. Los bytes que no corresponden a una imagen (una obtención que no devolvió una
imagen decodificable) también se pasan sin cambios. Esta normalización se
limita a las imágenes que el puente obtiene para su propia llamada interna — nunca se
aplica a la carga útil original que el llamante pasa sin modificaciones, de acuerdo con el
principio de mutación solo con consentimiento explícito (regla estricta n.º 20).

#### Esquema de configuración + migración

Las nuevas claves `modalityBridge*` se validan con Zod en `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, el trío `modalityBridgeCache*` y el
grupo `modalityBridgeAudio*` utilizado por el puente de audio. La migración
`141_modality_bridge_settings.sql` copia los valores heredados existentes de
`visionBridge*` a las nuevas claves correspondientes (es idempotente y nunca sobrescribe
un valor de `modalityBridge*` establecido por el operador); las claves heredadas siguen aceptándose como
alternativa de lectura durante un ciclo de versiones.

#### Cabecera de transparencia + estadísticas

Las respuestas transformadas mediante descripción incluyen
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(generada por `buildModalityBridgeHeader()` en `modalityBridge/bridgeStats.ts`,
añadida por `withModalityBridgeHeader()` en `src/sse/handlers/chatHelpers.ts`).
Las solicitudes redirigidas **no** incluyen ninguna cabecera — la carga útil no se modificó y el
cambio de modelo ya es visible en el campo `model` del cuerpo de la respuesta.

`GET /api/modality-bridge/stats` (autenticación de administración, del mismo nivel que
`GET /api/settings`) devuelve los contadores en memoria por modalidad
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` y
`video`. `averageLatencyMs` utiliza `latencySamples`, no todos los intentos, como
denominador; una operación sin medición de tiempo no genera una muestra ficticia de cero
milisegundos. `bridged` sigue siendo el alias compatible con versiones anteriores para las
conversiones correctas; los intentos fallidos no lo incrementan.
Los contadores se reinician al reiniciar el proceso por diseño
(telemetría, no contabilidad).

#### Configuración del panel

La página específica del panel es
`/dashboard/settings/modality-bridge`. Sus pestañas `Vision`, `Audio`
y `Video`, accesibles mediante URL, conservan los parámetros de consulta al cambiar el valor de `tab`.
La pestaña de visión permite configurar la activación, el modo, la selección del modelo (incluida la opción
automática predeterminada), las instrucciones adaptadas a la tarea, los límites avanzados de tiempo de espera/imágenes/longitud de descripción/caché,
los contadores en tiempo de
ejecución y una solicitud de ejemplo con protecciones. La pestaña de audio también está operativa: permite configurar
la activación, un selector de modelos exclusivo para STT con la opción automática, los límites de tiempo de espera/duración máxima del clip, los
contadores de audio y una prueba de ejemplo de `input_audio`. La pestaña de vídeo es funcional: informa
del estado de FFmpeg/ffprobe en tiempo de ejecución — uno de cuatro estados explícitos de la interfaz (`unknown` mientras
la comprobación está en curso o no pudo completarse, `restricted` en un host del
panel que no sea de bucle local, donde se omite la comprobación en el cliente, `unavailable` una vez realizada la comprobación
y confirmada su ausencia, o `available` con las versiones de FFmpeg/ffprobe) — guarda
la activación y los límites de modelo/fotogramas/vídeo/tiempo de espera, filtra el selector de modelos para mostrar los compatibles
con visión y ofrece contadores de vídeo.

La antigua tarjeta del puente de visión en la configuración de IA es un enlace de compatibilidad a la
nueva página; ya no mantiene una segunda copia del formulario. La sección de proveedores multimedia también
enlaza los flujos de trabajo de imagen a texto y de voz a texto con las pestañas correspondientes del puente
de modalidades sin eliminar el entorno de pruebas existente de voz a texto.

**Omisión del control de admisión para el bucle interno:** cuando la llamada de descripción se enruta a través del
bucle interno `/v1` del propio OmniRoute (modelo de proveedor no estándar), la subsolicitud envía
`x-omniroute-admission-bypass: internal` y se autentica con la credencial
resuelta del bucle interno — el valor centinela local `sk_omniroute` en modo local, o la
clave de entorno `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada por el operador (#1350), para que
los despliegues con `REQUIRE_API_KEY=true` puedan seguir ejecutando la llamada de descripción. La omisión
solo se permite con esas credenciales exactas, por lo que los clientes externos no pueden utilizar la
cabecera para eludir el control de admisión.

Los valores predeterminados heredados se encuentran en `src/shared/constants/visionBridgeDefaults.ts`; los
nuevos valores predeterminados de modo/adaptación a la tarea/caché y el resolvedor de configuración se encuentran en
`src/shared/constants/modalityBridgeDefaults.ts`. El mecanismo de protección ofrece una
opción de constructor `deps` para que las pruebas puedan inyectar implementaciones simuladas de `getSettings` y
`callVisionModel`.

### Puente de audio (`audioBridge.ts`) — Puente de modalidades PR-3

Intercepta las solicitudes de chat que contienen audio antes de que lleguen a un destino del que no
se sabe si admite entrada de audio. Nunca redirige la solicitud de chat: las partes de audio se
transcriben mediante el endpoint multiparte existente compatible con OpenAI y el
modelo de chat elegido continúa con las transcripciones de texto.

Flujo:

1. Resuelve `supportsAudio` mediante `getResolvedModelCapabilities()`. Los metadatos
   explícitos del registro de proveedores tienen prioridad, seguidos de los metadatos
   estáticos del modelo y, por último, de `modalities_input` sincronizado. Una lista
   de entradas declarada sin `audio` da como resultado `false`; si no hay indicios
   de capacidad, se mantiene `null`. Tanto `false` como `null` activan el
   puente conservador, mientras que `true` lo omite.
2. Resuelve los ajustes `modalityBridgeAudio*` y extrae las partes de audio de nivel
   superior que se pueden sustituir de cada mensaje mediante el detector compartido
   `detectMediaParts()`. Los formatos de transmisión admitidos son los de OpenAI
   `input_audio`, `audio_url` y `source.media_type: "audio/*"`. El audio anidado se
   detecta para el enrutamiento, pero no se elimina mediante la ruta de sustitución.
   El trabajo está limitado por `modalityBridgeAudioMaxClips`;
   las partes posteriores permanecen intactas.
3. Respeta el `provider/model` configurado o deja que `selectAudioBridgeModel()` recorra
   `AUDIO_TRANSCRIPTION_PROVIDERS` en el orden estable del catálogo y seleccione el primer
   modelo con una credencial de proveedor activa y utilizable.
4. `callAudioTranscription()` convierte el audio en base64/URI de datos en un
   `file` multiparte, o descarga un `audio_url` remoto mediante la protección de
   conexiones salientes restringida a destinos públicos, con fijación de DNS y un
   límite de 25 MB. A continuación, envía mediante POST el archivo y el modelo
   seleccionado al bucle de llamada local `/v1/audio/transcriptions`, autenticado con
   `resolveSelfLoopBearer()`. La ruta de transcripción existente realiza la búsqueda
   habitual de credenciales, la gestión de períodos de espera y límites de solicitudes,
   y el envío al proveedor.
5. Las llamadas correctas sustituyen sus partes por `[Audio N]: <transcript>`. Las llamadas
   se ejecutan con `Promise.allSettled`: un fallo individual conserva la parte
   de audio original correspondiente (contrato de #4012). Si todas las llamadas fallan
   y se ha confirmado que el destino tiene `supportsAudio === false`, las partes pasan a ser
   `[Audio N]: (unavailable — no STT provider connected)` (contrato de #8430). Para
   un destino desconocido (`null`), un resultado en el que todas las llamadas fallan permanece intacto. Un
   destino confirmado como exclusivamente textual sin una credencial STT utilizable recibe el mismo
   marcador explícito sin realizar ninguna llamada de red.

Las transcripciones correctas utilizan la caché LRU/TTL de Modality Bridge compartida por todo el proceso. La
clave combina la referencia de audio, la etiqueta de operación estable `audio-transcription`
y el modelo STT seleccionado; los fallos nunca se almacenan en caché. Los intentos de audio actualizan
los contadores compartidos `bridged`, `cacheHits`, `failures` y `lastUsedAt`.
Las respuestas transformadas incluyen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; las solicitudes
sin modificar no reciben un segmento de Audio Bridge.

Los ajustes en tiempo de ejecución se almacenan en la base de datos y se validan con Zod:

| Clave                         | Predeterminado | Rango                  |
| ----------------------------- | -------------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`         | —                      |
| `modalityBridgeAudioModel`    | `""`           | Automático o ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`        | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`            | 1–10                   |

La caché compartida sigue controlándose mediante `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta las partes de vídeo de nivel superior en `messages` de Chat Completions y en
`input` de la API Responses antes de llamar a un destino sin compatibilidad nativa de vídeo conocida.
Los formatos admitidos son `input_video`, `video_url`, `video_source`, URL HTTPS
y URI de datos `data:video/*;base64,...`. Los nombres de archivo simples en el texto no se tratan
como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se encarga del recorrido de la solicitud, la
comprobación de capacidades y políticas, la agregación por solicitud y la carga útil de la respuesta.
El trabajo por vídeo —la adquisición, la caché de resultados completos, la descripción de una secuencia
de fotogramas (que integra cualquier transcripción de audio declarada por quien realiza la llamada) y
las métricas, cancelación y limpieza por intento— queda encapsulado en `processVideoPart`, en
`videoBridgePipeline.ts`, que se llama una vez por cada parte de vídeo dentro del bucle de `preCall`.
Ese módulo también define los límites explícitos de los puertos `VideoMediaBrokerPort`
(adquisición de bytes y extracción de fotogramas muestreados), `VideoAudioTranscriptionPort`
(integración de una transcripción de audio declarada por quien realiza la llamada con las descripciones muestreadas) y
`VideoDrilldownPort` (el límite de persistencia del análisis detallado de fotogramas; aún no está conectado
a `processVideoPart`: actualmente solo la ruta independiente `/api/modality-bridge/video/drilldown`
escribe entradas de análisis detallado).

La ruta pública de solicitudes `/v1` nunca importa ni invoca un subproceso. Los vídeos
remotos se descargan con un límite de 50 MiB; los vídeos en base64 incluidos en línea tienen un
límite conservador de 36 MiB decodificados por vídeo para que el conjunto de modelo, mensajes y estructura
pueda mantenerse dentro del límite de admisión de solicitudes JSON públicas de 50 MiB. La longitud
en línea y las estimaciones del tamaño decodificado se comprueban antes de asignar memoria. Se exige HTTPS
tanto en la URL remota inicial como en cada redirección, utilizando la protección existente
de conexiones salientes restringida a destinos públicos, con fijación de DNS. A continuación, los bytes atraviesan el límite interno exacto
del intermediario `POST /api/modality-bridge/video/extract`. Esa ruta es tanto
`LOCAL_ONLY` como `SPAWN_CAPABLE`, acepta únicamente una solicitud de bucle local de confianza,
autenticada por proceso, y nunca acepta una URL, una ruta del sistema de archivos, un ejecutable
ni una lista de argumentos. La canalización de control del tamaño del cuerpo de la API y el lector incremental del cuerpo
del controlador aplican de forma independiente un límite de entrada al intermediario de 50 MiB. Su cola limitada ejecuta
una extracción a la vez, permite cuatro trabajos pendientes y limita la entrada pendiente a
100 MiB.

Dentro del intermediario, `ffprobe` lee un archivo local privado; la lista fija
de formatos permitidos excluye los formatos de listas de reproducción y manifiestos. En los
contenedores permitidos de la familia MOV, las referencias a datos MOV externos permanecen
deshabilitadas de forma predeterminada, y el comando fijo no las habilita. Tanto `ffprobe` como `ffmpeg` usan la
lista de protocolos permitidos restringida a `file`, un solo hilo, matrices fijas de argumentos, sin shell,
y ejecutables resueltos desde `PATH`. Los flujos de portada con imágenes adjuntas no son
candidatos reproducibles. Todos los flujos reproducibles deben cumplir los límites, y se
prefiere un flujo predeterminado explícito antes de recurrir, de forma determinista, al de
menor índice. Los vídeos están limitados a 600 segundos, 8,192 píxeles por dimensión y
33,554,432 píxeles de origen. FFmpeg toma muestras de 1–16 fotogramas JPEG en puntos medios, reduce
el lado más largo a un máximo de 1,024 píxeles sin ampliar las entradas más pequeñas, y
nunca recibe una URL. El muestreo es `uniform` de forma predeterminada. Las políticas opcionales
`scene_aware` y experimental `segment_aware` realizan una pasada fija adicional
de FFmpeg sobre el flujo local ya validado, seleccionan un conjunto acotado de
marcas de tiempo de escenas de `showinfo`, y recurren de forma determinista a los mismos
puntos medios uniformes si el detector falla, se agota el tiempo de espera, la salida está mal formada o el
conjunto de candidatos está vacío. El modo sensible a segmentos asigna muestras de puntos medios proporcionalmente a
los intervalos de escena validados; la evidencia sensible a segmentos y el comportamiento alternativo se
detallan a continuación. El límite estricto de 16 fotogramas se
aplica después de la selección en todas las políticas. Cuando una solicitud sensible a escenas solo tiene un
presupuesto de un fotograma, utiliza el punto medio uniforme de la ventana activa, ya sea la del vídeo completo o la de enfoque,
e informa de `policyEffective: uniform`: un único fotograma de escena seleccionado
no puede preservar ambos extremos temporales. El solicitante puede proporcionar opcionalmente una
ventana de enfoque finita (`start`/`end` en segundos); sus límites se ajustan a la
duración del contenido, se rechazan las ventanas invertidas o no finitas, y todas las políticas de muestreo
se ejecutan únicamente dentro del intervalo normalizado. La ventana
resultante se incluye en los metadatos de muestreo y en el prefijo de descripción
no confiable para que los modelos posteriores puedan distinguir un fragmento enfocado de la
línea temporal completa.

El enfoque semántico de la descripción es un ajuste independiente y explícito. El modo de análisis `full`
predeterminado conserva el prompt existente para los fotogramas y nunca reenvía el texto
de la solicitud al modelo de descripción. En el modo `focused`, el puente lee únicamente el último
`text`/`input_text` no vacío escrito por el usuario dentro del mismo contenedor de Chat o Responses,
lo normaliza a NFC, compacta los caracteres de control y los espacios en blanco,
y lo limita a 500 puntos de código Unicode. Si el resultado está vacío, se recurre al
prompt exacto de `full`. Una indicación utilizable se serializa como JSON en un bloque
específico de contexto de usuario no confiable y solo puede priorizar detalles observables; no
puede invalidar la advertencia independiente de no seguir instrucciones visibles
o audibles en el contenido multimedia. El enfoque textual nunca infiere `start`/`end` ni modifica
el muestreador temporal.

#### FU-07 Evidencia estructural de segmentos

`segment_aware` utiliza una pasada acotada de análisis previo sobre el flujo de vídeo
local ya validado. La cadena fija de filtros primero reduce la anchura a un máximo de 320 píxeles,
detecta cambios de escena e intervalos congelados, y después toma muestras a 1 fotograma por
segundo para analizar el desenfoque, la luminancia media y la información espacial/temporal. La pasada está
limitada a 600 muestras estructurales, un hilo de FFmpeg/filtros, las mismas
listas de protocolos y contenedores permitidos restringidas a `file`, un límite de salida del proceso de 1 MiB,
y un máximo de 30 segundos dentro del mecanismo compartido de cancelación/plazo límite del intermediario. Nunca
acepta comandos, filtros, rutas ni URL procedentes de la solicitud.

Los valores estructurales son evidencia de muestreo determinista, no comprensión semántica
del vídeo. No infieren sujetos, acciones, descripciones, habla ni la intención
del usuario. Los límites de escenas e intervalos congelados forman segmentos; la proporción congelada, el desenfoque,
la exposición, el detalle espacial y el cambio temporal solo influyen en cómo se distribuye el
presupuesto existente de 1–16 fotogramas. Un segmento completamente congelado queda limitado a un fotograma,
mientras que los segmentos no congelados compiten por el presupuesto restante. Cuando los límites
superan en número a los fotogramas, se mantiene una cobertura uniforme de la línea temporal para que los cortes
rápidos al principio no puedan ocultar un segmento final largo. Los límites de escena que quedan dentro de la
resolución de análisis de 1 segundo respecto al límite de un intervalo congelado se fusionan.

La ausencia de filtros, la evidencia mal formada o vacía, un error del detector o el agotamiento del tiempo
acotado de análisis previo permiten continuar con la política exacta de puntos medios uniformes. Una
cancelación del solicitante o el vencimiento del plazo límite del intermediario no permiten continuar: finalizan el
subproceso en curso, impiden la extracción posterior de fotogramas y el árbol temporal privado se
elimina en `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera datos de prueba reales y deterministas con FFmpeg
para evaluar el ahorro de llamadas al modelo de descripción tras la deduplicación, la asignación del presupuesto en movimiento intenso,
la evidencia de desenfoque/exposición/SI-TI, los cortes rápidos con un tramo final largo y los falsos positivos
de fundidos graduales. Registra el tiempo de reloj del análisis previo y, cuando `/usr/bin/time`
está disponible, el uso de CPU de los procesos secundarios y el RSS máximo. Sus comprobaciones de calidad son únicamente oráculos
estructurales. La calidad real del modelo de descripción permanece en `HOLD` porque este entorno de pruebas no tiene un
endpoint autorizado ni un evaluador fijado. El ahorro monetario también permanece en `HOLD`
a menos que `--caption-cost-per-call-usd` proporcione una estimación explícita positiva
por llamada; el script nunca inventa ninguno de los dos resultados.

Cada fotograma está limitado a 4 MiB, el conjunto de fotogramas sin procesar a 23 MiB y la
respuesta serializada del intermediario a 32 MiB. Un directorio temporal privado se elimina
en `finally`. OmniRoute no incluye FFmpeg ni acepta una ruta personalizada
al ejecutable. Antes de generar las descripciones, el puente aplica una pasada conservadora de
deduplicación visual: cada JPEG se reduce a un búfer de 16×16 en escala de grises y se
compara únicamente con el último fotograma conservado. Si el número máximo de fotogramas solicitado
para generar descripciones es superior a uno, la extracción proporciona un
conjunto acotado de candidatos de hasta el doble de ese número y nunca superior a 16 fotogramas.
El límite solicitado se aplica solo después de la deduplicación, conservando el primer y el último
candidato seleccionados durante la reducción final cuando el número máximo es de al menos
dos. La política versionada
`grayscale-16x16-mean-cells-v2` utiliza el mayor valor entre la diferencia media de luminancia y
la proporción de celdas de la miniatura cuya diferencia normalizada es de al menos 0.05. El
umbral de duplicación es la constante 0.04, elegida para ofrecer previsibilidad en lugar de
exponerse como un ajuste en tiempo de ejecución. Esta señal secundaria
de alto contraste conserva pequeños movimientos y cambios en el texto visible que una
comparación basada únicamente en la media puede ocultar. Ante errores del comparador o del decodificador, se conservan los fotogramas para mantener
la cobertura. Los metadatos de salida distinguen entre los candidatos extraídos, los fotogramas utilizados
correctamente y los duplicados visuales descartados.

Una parte de vídeo marcada explícitamente puede solicitar una hoja de contactos con marcas de tiempo. El
puente crea una cuadrícula JPEG de un máximo de 4 columnas y 16 fotogramas. Cada celda de 512 píxeles incorpora
su marca de tiempo de origen en una banda inferior de alto contraste, mientras que esas mismas marcas de tiempo
permanecen en los metadatos textuales para su posterior asociación y auditoría. El
JPEG completo sigue limitado a 32 MiB. Si `sharp` no puede decodificar o componer la cuadrícula, el
puente recurre a los fotogramas JPEG individuales; una cancelación del cliente sigue propagándose
durante la operación de creación de la hoja.

Las pruebas que justifican la promoción se mantienen deliberadamente separadas de la microprueba de rendimiento
de composición sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define un
banco de pruebas A/B con un esquema versionado para modelos de visión reales compatibles con OpenAI. Mide
los tokens notificados por el proveedor, la latencia total de extremo a extremo (incluida la composición de la hoja),
el número de llamadas al modelo y la conservación de hechos definidos en el manifiesto. Las respuestas sin procesar del modelo no
se escriben en el informe; solo se conservan los resúmenes SHA-256 y los identificadores de los hechos coincidentes. El
banco de pruebas no realiza llamadas de red ni llamadas a modelos de pago a menos que se pase `--execute-real` y
se configuren `--model`, `OMNIROUTE_BASE_URL` y `OMNIROUTE_API_KEY`. Sin
esa ejecución real explícita, su veredicto legible por máquina sigue siendo `HOLD`; las mediciones sintéticas
de carga útil y número de llamadas por sí solas no constituyen pruebas que justifiquen la promoción.

Los clientes pueden adjuntar una matriz opcional `transcript.cues` a una parte de vídeo
compatible cuando ya dispongan de texto alineado. Cada segmento debe incluir `text`, un
intervalo `start`/`end` finito dentro de la duración determinada mediante el análisis y un valor
`source` permitido (`client`, `embedded` o `audio-bridge`); `confidence` tiene como valor predeterminado
`1` y debe mantenerse entre `0` y `1`. Los segmentos exactamente duplicados se unifican.
OmniRoute nunca inicia una transcripción a partir de estos metadatos: los segmentos validados se
copian al resultado de la descripción con su origen, confianza e intervalo, y
se presentan como observaciones no confiables junto a las descripciones de los fotogramas. El texto no válido,
fuera de rango o sin procedencia se rechaza en lugar de mezclarse con el
flujo de descripciones. Ambos canales de transcripción del cuerpo de la solicitud normalizan la
procedencia suministrada a `client`, incluidas las etiquetas `embedded` o `audio-bridge`
declaradas por el propio cliente. Solo un adaptador controlado por el servidor puede asignar esas etiquetas de confianza mediante
el argumento `trustedSource`, disponible únicamente desde el código; un campo JSON de la solicitud no puede acceder a
ese argumento. El texto de la transcripción sigue siendo contenido no confiable derivado de los medios,
independientemente de su procedencia, y nunca debe determinar la autorización.

Un cliente avanzado puede proporcionar una pista `audioTranscript` para el mismo vídeo;
se trata como texto proporcionado por el cliente, no como prueba de una transcripción realizada por el servidor.
La capa de integración de la fusión procesa las observaciones visuales y de audio bajo
un mismo plazo límite y una misma señal de cancelación, las ordena en una línea de tiempo común, unifica
los duplicados exactos y devuelve un resultado parcial cuando solo una de las dos ramas tiene éxito.
Un `audioTranscript` no válido da lugar a ese resultado parcial: se conserva la descripción
visual y la rama de audio registra un código de error depurado,
en lugar de provocar el fallo de todo el vídeo. La disponibilidad de cada rama, el indicador de resultado parcial
y los códigos de error depurados se conservan en el resultado de la descripción, en los
metadatos de protección (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), en los metadatos de la caché de resultados y en los contadores
de fusión del puente. El flujo predeterminado de Video Bridge no invoca la conversión de voz a texto
ni descarga una segunda copia del medio; sin esa pista explícita, sigue
procesando únicamente vídeo.

**Retención de transcripciones (#12150 P1).** Esto se aplica automáticamente siempre que
Video Bridge (cuya activación es opcional) renderiza un segmento de transcripción; no hay un indicador
de retención independiente. Cuando una solicitud renderiza cualquier segmento de transcripción (un
`transcript` declarado por el llamador o un `audioTranscript` fusionado), la protección la marca como
`videoBridgeObserved` y genera una copia paralela censurada de la descripción del vídeo:
una representación idéntica en la que el cuerpo de texto libre de cada segmento se sustituye por
`[redacted-video-transcript]`, creada mediante la sustitución del campo estructurado del segmento
antes de ensamblar la cadena (nunca mediante el análisis del texto aplanado, por lo que ningún
contenido de los segmentos —malicioso u ordinario, incluidos los cuerpos que contienen `]`, como
`[inaudible]`/`[music]`— puede conservarse). El cuerpo de la solicitud persistido en el registro de llamadas sustituye
cada parte de texto derivada del vídeo por esa copia paralela censurada, mediante una coincidencia por igualdad
de contenido; el ancla `fullText` se vuelve a leer de la carga útil final de las protecciones previas a la llamada,
por lo que la coincidencia sigue funcionando después de que las protecciones posteriores de la cadena (los enmascaradores de información de identificación personal y
credenciales, con prioridades 10/95) reescriban el texto de la descripción en el mismo lugar y
después de que la inyección del prompt del sistema, del traspaso de contexto y de la memoria reestructure el array de mensajes. El
cuerpo enviado al modelo no cambia. Una solicitud observada tampoco incorpora
nada a la memoria duradera (se omite la extracción tanto de la solicitud como de la respuesta),
por lo que la propia respuesta del modelo no puede reproducir el texto de la transcripción en la memoria.

**Campos de vídeo sin procesar (#12430).** Cuando el puente está habilitado y la compatibilidad con vídeo nativo es desconocida o inexistente, los campos `transcript`/`audioTranscript` definidos también activan `videoBridgeObserved`, incluso después de un fallo en la descripción o de alcanzar un límite `maxVideos`. `null` y las cadenas vacías cuentan; los campos ausentes y los metadatos ajenos al vídeo no. Las copias retenidas censuran estos campos u omiten la solicitud, y se omiten las cachés y la memoria.

En esas rutas alternativas, los segmentos válidos proporcionados por el llamador se convierten en partes `text`/`input_text`
compatibles, en lugar de campos no estándar del proveedor. Ambas pistas proporcionadas en la solicitud
siguen siendo observaciones `client` no confiables, con una advertencia explícita de que el vídeo
no se describió y de que las marcas de tiempo no se verificaron con respecto al contenido multimedia. Los límites existentes
de 256 segmentos/64 KiB en total y por segmento se aplican conjuntamente a las dos pistas;
las marcas de tiempo deben ajustarse al máximo de 600 segundos del intermediario y a cualquier intervalo de enfoque
proporcionado. Las pistas no válidas se descartan y no se reenvían como texto arbitrario; una pista
asociada válida puede seguir utilizándose, salvo que se supere el límite combinado de ambas. Los campos nulos o vacíos
no añaden texto. Esta alternativa no añade ninguna descarga de contenido multimedia ni transcripción.
Los campos de extensión de transcripción se eliminan del contenedor de vídeo alternativo y de sus
objetos `video_url`/`source`. La lista de permitidos del protocolo de OpenAI sigue siendo estricta; los
contenedores de vídeo cuya compatibilidad nativa se desconoce siguen disponibles, y los destinos que se sabe que solo admiten texto conservan marcadores seguros.
Las copias paralelas censuradas estructuradas protegen el texto de transcripción añadido, mientras que la
solicitud original, propiedad del llamador, permanece intacta. Los destinos con compatibilidad nativa y
los puentes deshabilitados conservan su comportamiento de omisión de procesamiento existente.

Las copias retenidas adicionales utilizan la misma señal de solicitud observada. La instantánea sin procesar
de la solicitud del cliente previa a las protecciones, la solicitud pendiente en memoria y el registro de
solicitudes rechazadas en una fase temprana sustituyen estructuralmente los campos de transcripción de las partes de vídeo;
los prompts de cadena sintetizados por las etapas de la canalización y el traspaso de contexto se censuran
en el punto de persistencia del cuerpo de la solicitud. El marcador persistido `video_content_removed`
hace que la continuación mediante `previous_response_id` se bloquee de forma segura en lugar de reconstruir
texto que se descartó intencionadamente. Si una solicitud observada pierde su
copia paralela censurada por parte antes del registro, o si incluso una de las varias copias paralelas de vídeo
no coincide después de modificaciones posteriores de la solicitud, el cuerpo de la solicitud retenido se
omite por completo en lugar de conservar una transcripción parcialmente censurada.

En una solicitud observada, una respuesta del modelo podría citar cualquier parte de la
transcripción sin un límite de segmento estructurado. Por lo tanto, su `responseBody` persistido en el
registro de llamadas se sustituye por un marcador de omisión; el artefacto detallado de la
canalización (que puede incluir cuerpos del proveedor y del cliente, así como fragmentos del flujo)
no se retiene. Las cachés semánticas, de idempotencia y de reproducción del razonamiento omiten
las lecturas y escrituras para esa solicitud. La solicitud al proveedor y la respuesta visible
para el cliente permanecen intactas. Los bytes tempranos de mantenimiento de conexión se vacían del búfer
temporal cuando se omite el artefacto detallado. La advertencia de Kiro sobre un EventStream
malformado solo informa del número de bytes de la carga útil, nunca de su contenido ni del error
sin procesar del analizador JSON.
Esto no implica que se hayan auditado todos los diagnósticos de proveedores o complementos no relacionados;
la revisión más amplia de los puntos de retención se sigue en #11658.

El ciclo de vida interno de `/api/modality-bridge/video/drilldown` constituye un sustrato de caché
independiente, autenticado mediante loopback y token. Cada operación también requiere un
ID canónico y opaco de la entidad principal. Antes de habilitar un llamador de producción, este debe
derivar ese ID del inquilino autenticado y no debe reenviar nunca un
valor seleccionado por el cliente. Las claves de caché vinculan esa entidad principal con los ID canónicos de sesión y
de referencia de vídeo, almacenan únicamente sus claves derivadas mediante SHA-256 y restringen tanto las lecturas
como la eliminación a la misma entidad principal. La caché almacena un máximo de 16 fotogramas JPEG
derivados por entrada, que caducan al cabo de diez minutos, y admite lecturas acotadas mediante
`start`/`end` o la eliminación explícita de la sesión.

Cada entidad principal está limitada a 16 entradas y 64 MiB de datos JPEG canónicos. Estos
límites son independientes del máximo global de 64 entradas/256 MiB: la presión sobre la cuota
de una entidad principal expulsa únicamente las entradas de esa entidad utilizadas menos recientemente antes de considerar
la expulsión global por LRU. Las entradas caducadas se eliminan de la contabilidad tanto de la entidad principal como
global cuando hay actividad en la caché, mientras que la cancelación y los fallos de validación
no confirman una sustitución parcial.

La caché rechaza Base64 no canónico, el relleno excesivo, los medios que no sean JPEG, los JPEG malformados o
truncados y los JPEG que generen una advertencia durante una decodificación completa de la imagen con límites mediante `sharp`.
Vuelve a codificar cada imagen aceptada como un JPEG canónico, obtiene la anchura y la altura
a partir de los bytes decodificados en lugar de confiar en los campos del llamador y descarta los bytes
políglotas finales en lugar de conservarlos. Solo el búfer comprimido canónico acotado
se contabiliza en ambas cuotas. El límite de transmisión JSON incluye la sobrecarga de Base64 para el máximo de 32 MiB
de entrada decodificada. Cada
derivación almacenada registra su formato y resolución JPEG validados, la política de muestreo,
la versión de derivación, la hora de creación, el hash del contenido calculado por el servidor y la referencia
al elemento padre con hash, además del hash del contenido del elemento padre proporcionado por el llamador de confianza. La cancelación se comprueba
entre las fases asíncronas de decodificación y cálculo de hash, antes de la confirmación atómica en la caché.

Esta fase aún no conecta un productor de producción a la ruta ni
ofrece selección de variantes multirresolución. Por tanto, la ruta transparente de solicitudes de Video Bridge
no implica trabajo adicional, mientras que la derivación de la identidad principal vinculada al inquilino y
el ciclo de vida multirresolución completo de FU-08 siguen siendo tareas pendientes explícitas,
en lugar de documentarse como un comportamiento ya completado.

Los fotogramas se describen secuencialmente con el modelo de vídeo configurado. Si la
configuración específica de vídeo está vacía, se hereda la configuración de Vision; si ambas están vacías, el
enrutador automático de Vision selecciona el modelo efectivo con capacidad de visión. Las descripciones generadas correctamente
sustituyen la parte original por un prefijo estable `[Video description:` que también
marca el texto como una observación no confiable derivada de medios e indica a los modelos
posteriores que no sigan las instrucciones que encuentren en los medios. Las claves de la caché de descripciones de fotogramas
incluyen los bytes JPEG, el prompt, la marca de tiempo y el modelo efectivo; solo se almacenan en caché las
descripciones generadas correctamente. Las entradas de caché conservan el modelo productor que realmente generó el resultado correcto,
incluido un modelo alternativo; el puente informa de `mixed` cuando distintos fotogramas
fueron producidos por modelos diferentes. Un acierto de caché reutiliza esa identidad del productor
en lugar de volver a etiquetarla como el plan de enrutamiento solicitado. La clave de la caché de resultados
del vídeo completo incluye todas las entradas que modifican la salida: el prompt, el modelo
efectivo, la política de muestreo, el número de fotogramas, el modo de análisis semántico, la huella SHA-256
de la indicación de enfoque normalizada, la ventana de enfoque, `transcript`,
`audioTranscript` y el indicador de hoja de contactos; por tanto, cambiar cualquiera de esas
dimensiones provoca un fallo de caché, nunca la reutilización de un resultado obsoleto. La versión de la política de deduplicación visual,
el umbral y el número acotado de fotogramas candidatos también figuran explícitamente en la
clave y los metadatos de la caché de resultados; por tanto, un cambio de política no puede reutilizar una descripción
obsoleta del vídeo completo. Los metadatos v4 de la caché de resultados conservan el modo y la
huella, nunca la tarea del usuario sin procesar. Los metadatos del mecanismo de protección informan tanto del
modo de análisis solicitado como del efectivo; un modo `focused` solicitado sin
texto de usuario utilizable se informa como efectivamente `full`.

El mecanismo de protección extrae todas las partes de vídeo compatibles, pero no describe más de
`modalityBridgeVideoMaxVideos`. Para un destino del que se haya comprobado que tiene
`supportsVideo === false`, los vídeos fallidos y los que superan el límite se convierten en marcadores de texto
seguros y explícitos, de modo que no quede ningún vídeo sin procesar. Cuando se desconoce la capacidad, esas partes
conservan su contenedor de vídeo; cualquier transcripción alternativa sigue la conversión
de texto acotada descrita anteriormente. Los destinos con `supportsVideo === true` omiten el puente.
La señal de cancelación de la solicitud del cliente se propaga a través de la descarga, la cola del intermediario,
los subprocesos y las llamadas de generación de descripciones; las cancelaciones detienen el procesamiento entre vídeos y nunca permiten
el paso de medios sin procesar en caso de fallo.

La configuración en tiempo de ejecución se almacena en la base de datos y se valida con Zod:

| Clave                               | Valor predeterminado | Intervalo / comportamiento                                                                                                       |
| ----------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`              | Opcional en tiempo de ejecución, con activación explícita                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`             | `full` conserva las descripciones genéricas; `focused` utiliza un contexto acotado y no confiable del último mensaje del usuario |
| `modalityBridgeVideoModel`          | `""`                 | Hereda el modelo de Vision Bridge                                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`                  | 1–16                                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`          | `uniform`, `scene_aware` o `segment_aware` proporcional; si falla el detector, se recurre a `uniform`                            |
| `modalityBridgeVideoMaxVideos`      | `1`                  | 1–4                                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`             | 1000–120000 ms                                                                                                                   |

Los valores heredados y persistidos del tiempo de espera de vídeo superiores a 120 segundos se limitan al
plazo del intermediario; se rechazan las nuevas escrituras de configuración que superen ese límite.
`GET /api/modality-bridge/video/runtime` exige una marca de confianza que acredite la
procedencia local de bucle de retorno antes de la autenticación o de sondear el entorno de ejecución; después exige autenticación
de administración. Solo devuelve `available`, las versiones saneadas de FFmpeg/ffprobe y un motivo
fijo cuando el entorno de ejecución no está disponible. El endpoint interno de extracción no es
una API pública de carga: la saturación de la cola devuelve `503` junto con `Retry-After`, una desconexión
del llamador devuelve `499` y el vencimiento del plazo fijo del intermediario devuelve `504`. Las respuestas convertidas añaden
`video->text;model=<visionModel>;parts=<videos>` a la cabecera central
`x-omniroute-modality-bridge` sin eliminar los segmentos de Vision o Audio.

### Enmascarador de PII (`piiMasker.ts`)

Se ejecuta en **ambas** etapas.

- **`preCall`** clona la carga útil, recorre `system`, `messages`, `input` y
  `prompt` (incluidos los elementos de cadena simple) y aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) a los campos de cadena `content`/`text`. Cuando
  `PII_REDACTION_ENABLED=true`, la PII detectada se oculta en la carga útil
  saliente. Esto es independiente de `INPUT_SANITIZER_MODE` (que solo controla
  la política de inyección de prompts). Cuando la ocultación está desactivada, la llamada registra los
  recuentos de detecciones sin modificar el contenido.
- **`postCall`** realiza una copia profunda de la respuesta y ejecuta `sanitizePIIResponse()` junto con
  el enmascarador del formato de la API Responses (`maskResponsesOutput` — abarca
  `output_text` y `output[].content[].text`). Si se oculta algún dato, la
  respuesta modificada sustituye a la original.

La protección nunca bloquea; solo añade anotaciones (`meta.detections`,
`meta.redacted`) o modifica el contenido.

#### Selección por tipo, patrones personalizados y contadores de detecciones

**Panel → Configuración → Seguridad → Enmascaramiento de PII** permite elegir _qué_ se enmascara. No
activa el enmascaramiento: eso sigue dependiendo de `PII_REDACTION_ENABLED` (solicitud) y
`PII_RESPONSE_SANITIZATION` (respuesta + SSE), ambas desactivadas de forma predeterminada.

- **Selección por tipo** — los identificadores integrados se enumeran en
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Si no se configura, se incluyen todos los
  tipos (el comportamiento anterior a la existencia de este ajuste). El patrón
  `ssn_us` del motor de solicitudes se corresponde con `ssn`. Las plantillas (Mínima, Estándar, Financiera,
  Brasileña, EE. UU., Completa) solo marcan las casillas de la interfaz.
- **Patrones personalizados** — hasta 20 patrones de expresiones regulares o comodines (`*` = hasta 64
  caracteres que no sean espacios en blanco, `?` = uno). Las coincidencias se sustituyen por `[CUSTOM_REDACTED]`.
  Cada patrón pasa por `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): debe tener como máximo 500 caracteres, los indicadores se limitan
  a `g i m s u`, debe compilar, debe superar la validación de `safe-regex` (retroceso
  catastrófico) y no debe coincidir con una cadena vacía ni con un marcador de ocultación.
  Un patrón que no supere la validación se rechaza tanto al guardarlo como al probarlo, y una fila almacenada
  que no la supere se omite en tiempo de ejecución en lugar de compilarse. Los patrones personalizados solo
  se ejecutan mientras el enmascaramiento está activado.
- **Contadores de detecciones** — recuentos por tipo (nunca los valores coincidentes), mantenidos en
  memoria y restablecidos al reiniciar (`src/lib/pii/piiDetectionStats.ts`). Solo
  aumentan mientras el enmascaramiento está activado.

Los ajustes se almacenan en la tabla `key_value` (espacio de nombres `pii_settings`,
`src/lib/db/piiSettings.ts`) y se leen mediante una caché de 1 s. API:

| Método | Ruta                     | Propósito                                                                              |
| ------ | ------------------------ | -------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Estado de los indicadores, `enabledTypes`, `customPatterns`, contadores de detecciones |
| `PUT`  | `/api/settings/pii`      | Sustituir `enabledTypes` (`null` = todos) y/o `customPatterns`                         |
| `POST` | `/api/settings/pii/test` | Probar un patrón con una muestra de como máximo 8 KB; no se almacena nada              |

Las tres requieren autenticación de administración y validan el cuerpo con Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Inyección de prompts (`promptInjection.ts`)

Detecta estructuras maliciosas en el contenido proporcionado por el usuario y aplica la
política configurada. El comportamiento se determina mediante variables de entorno y opciones
del constructor:

| Ajuste            | Variable de entorno                                                                                   | Valor predeterminado | Efecto                                                                                                                                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activado          | `INPUT_SANITIZER_ENABLED`                                                                             | `true`               | Cuando es `false`, la protección omite el procesamiento.                                                                                                                                                                                          |
| Modo              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`               | Política de inyección: `block`, `warn` o `log`. (`redact` se acepta por compatibilidad con versiones anteriores, pero **no** elimina el texto de inyección; la modificación de PII en la solicitud se controla mediante `PII_REDACTION_ENABLED`.) |
| Umbral de bloqueo | Opción `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`               | Gravedad mínima necesaria para bloquear. De forma predeterminada, la gravedad media solo se observa.                                                                                                                                              |

**Precedencia del modo** (`getMode`): `options.mode` del invocador →
**anulación mediante indicador de funcionalidad en la BD** de `INJECTION_GUARD_MODE` (Panel → Configuración →
Indicadores de funcionalidad) → variable de entorno `INJECTION_GUARD_MODE` → variable de entorno `INPUT_SANITIZER_MODE` →
`warn`. Por tanto, una anulación del panel tiene prioridad sobre las variables de entorno, por lo que la interfaz de Indicadores de
funcionalidad controla la protección en ejecución en tiempo real (sin reiniciar). La lectura de la BD tiene un mecanismo de respaldo:
si falla, la protección recurre al comportamiento basado en las variables de entorno y, cuando no
se establece ninguna anulación, el comportamiento es idéntico al de la resolución basada únicamente en variables de entorno.

Fuentes de detección:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto de detectores
   compartido que se usa en otras partes del flujo de procesamiento).
2. `DEFAULT_GUARD_PATTERNS` integrados (actualmente `system_override_inline` y
   `markdown_system_block`, ambos con gravedad `high`).
3. `customPatterns` opcionales pasados mediante las opciones del constructor (cadenas, expresiones regulares
   o registros `{ name, pattern, severity }`).

Cuando `mode === "block"` **y** al menos una detección alcanza el umbral de
gravedad, `preCall` devuelve `{ block: true, message: "Request rejected:
suspicious content detected" }`. En los modos `warn`/`log`, la protección registra el evento, pero
permite la llamada. La función auxiliar compartida `evaluatePromptInjection()` también se exporta
para quienes necesiten evaluar prompts sin pasar por el registro.

**Límite de análisis (v3.8.20):** el detector solo inspecciona los **primeros 16 KB** del
texto combinado de los prompts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) en
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` aplican `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de ejecutar
el bucle de patrones. Las directivas de inyección se sitúan cerca del principio de una entrada, por lo que esto
limita el uso de CPU y la recolección de basura asociados a las expresiones regulares en cargas de varios cientos de KB sin debilitar la detección (véanse
#3932, #4041).

### Enmascarador de credenciales (`credentialMasker.ts`)

Se ejecuta en **ambas** etapas, al final de la cadena predeterminada (prioridad `95`). Oculta
los patrones conocidos de claves de API / tokens secretos en la carga saliente (contenido
de los mensajes, argumentos de llamadas a herramientas, resultados de herramientas) **y** en la respuesta del proveedor, de modo que una
credencial pegada en un prompt (o reproducida en el resultado de una herramienta) no se filtre
al proveedor de destino ni se devuelva al cliente.

- **Solo mediante activación explícita**, con la misma convención que la ocultación de PII (relacionada con la regla estricta #20):
  deshabilitado a menos que `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Cuando está desactivado, la protección no realiza ninguna operación —
  nunca bloquea ni reescribe.
- `redactCredentials()` recorre todo el árbol de la carga/respuesta (`walkValue()`,
  con protección contra la contaminación de prototipos y los ciclos mediante `WeakSet`) y sustituye las coincidencias por
  un marcador `[REDACTED:<type>]`, clonando únicamente las ramas que realmente
  hayan cambiado.
- `CREDENTIAL_PATTERNS` abarca claves de proveedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), claves de pago (Stripe, Square), claves de servicios en la nube
  (clave de acceso de AWS, Twilio, SendGrid, Mailgun), claves privadas / JWT,
  cadenas de conexión con credenciales (`mongodb://user:pass@...`, etc.) y
  un patrón genérico para valores de cabeceras
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Las claves con formato de cabecera (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se ocultan de forma estructural (solo el valor, conservando los prefijos de esquema como
  `Bearer `/`Basic `) en lugar de usar la expresión regular genérica de texto.
- La protección nunca bloquea; solo reescribe (`modifiedPayload` /
  `modifiedResponse`) y añade anotaciones (`meta.credentialsRedacted`, `meta.count`).

Prueba de protección contra regresiones: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato base (`base.ts`)

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
  block?: boolean; // true interrumpe la cadena
  message?: string; // se muestra al bloquear
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devuelto por preCall para reescribir la solicitud
  modifiedResponse?: TValue; // devuelto por postCall para reescribir la respuesta
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

Una salvaguarda indica «sin cambios» al devolver `void`, `{}` o
`{ block: false }`. Devolver un `modifiedPayload`/`modifiedResponse` reemplaza
el valor que fluye por la cadena para las salvaguardas posteriores.
`signal?: AbortSignal` transmite el ciclo de vida del solicitante a las salvaguardas. La cancelación de una solicitud es la excepción deliberada al bloqueo ante fallos: los puentes multimedia detienen el trabajo y liberan los recursos sin restaurar el contenido multimedia sin procesar en un destino que se sabe que no lo admite.

## Registro (`registry.ts`)

La instancia única `guardrailRegistry` expone:

- `register(guardrail)` — añade una salvaguarda (o la reemplaza por su nombre normalizado) y
  vuelve a ordenar por `priority` ascendente.
- `clear()` / `list()` — funciones auxiliares de administración.
- `runPreCallHooks(payload, context)` — recorre las salvaguardas activas, pasa el
  contenido de la solicitud a través de `modifiedPayload` y se detiene en el primer `block: true`.
- `runPostCallHooks(response, context)` — el mismo flujo para la respuesta.
- `resetGuardrailsForTests({ registerDefaults })` — borra el estado y, opcionalmente,
  vuelve a registrar las salvaguardas predeterminadas para garantizar el aislamiento de las pruebas.

Ambas funciones devuelven `{ blocked, payload|response, results, guardrail?, message? }`,
donde `results` es un arreglo de registros `GuardrailExecutionResult` que incluyen
los campos `blocked`, `skipped`, `modified`, `error` y `meta` de cada salvaguarda,
útiles para el seguimiento.

### Desactivación de salvaguardas por solicitud

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` recopila una
lista sin duplicados de nombres de salvaguardas que deben omitirse en la
solicitud actual. Hay cinco canales, que se leen en este orden y se combinan en una sola lista
(al eliminar duplicados, prevalece la primera aparición):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` del cuerpo de la solicitud (en el nivel superior)
3. `metadata.disabledGuardrails` del cuerpo de la solicitud (solo cuando `metadata` es un objeto)
4. Encabezado `x-omniroute-disabled-guardrails`
5. Encabezado heredado `x-disabled-guardrails`

Se combinan los cinco canales, incluidos los dos encabezados: enviar tanto
`x-omniroute-disabled-guardrails` como `x-disabled-guardrails` omite la unión de
sus listas, y un encabezado moderno vacío ya no oculta el heredado
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corregido en
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Los valores pueden ser arreglos de cadenas o una cadena separada por comas; se eliminan los espacios al principio y al final de los nombres
y estos se normalizan a minúsculas con guiones (`pii_masker` → `pii-masker`); las
entradas vacías se descartan. El resultado se pasa mediante `context.disabledGuardrails`
al registro, que omite las salvaguardas coincidentes (`skipped: true` en `results`).

La lista de desactivación solo afecta al **registro**. El modo `block` de protección contra la inyección de instrucciones es
una barrera obligatoria: el middleware de protección contra inyecciones
(`src/middleware/promptInjectionGuard.ts`) llama a `evaluatePromptInjection()`
sin ninguna lista de desactivación controlada por el solicitante (la llamada inoperante a
`resolveDisabledGuardrails({ body })` que antes realizaba se eliminó en
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), por lo que una solicitud
que desactive `prompt-injection` sigue siendo rechazada en modo `block`. Esto es
intencionado. Los canales de desactivación están controlados por el solicitante (cuerpo de la solicitud,
metadatos, encabezados), y un solicitante no debe poder desactivar un control de
seguridad establecido por el operador
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). La
unión de encabezados de [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
solo cambia qué salvaguardas del registro se omiten; no permite que un cliente
eluda el middleware. Las políticas obligatorias de salvaguardas por clave y por grupo se
siguen en el RFC de la v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Consulte [Cobertura y límites](#coverage-and-limits).

## Orden de ejecución

Para cada solicitud que pasa por `src/sse/handlers/chat.ts` y
`open-sse/handlers/chatCore.ts` (las rutas de la familia de chat enumeradas en
[Cobertura y límites](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` construye la lista de exclusión a partir de la clave de API, el cuerpo
   y las cabeceras.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ejecuta las salvaguardas en orden
   ascendente de prioridad:
   - Las salvaguardas desactivadas se registran como `skipped`.
   - El `preCall` de cada salvaguarda puede reescribir la carga útil mediante `modifiedPayload`.
   - El primer `block: true` interrumpe la cadena y el manejador devuelve
     una respuesta de rechazo de la salvaguarda.
3. La carga útil (posiblemente reescrita) pasa al enrutamiento combinado y al
   envío al proveedor.
4. **Solo sin streaming:** una vez ensamblada la respuesta,
   `guardrailRegistry.runPostCallHooks(...)` ejecuta la misma cadena sobre la
   respuesta. En este punto, `block: true` descarta la respuesta del proveedor y devuelve HTTP 400. Las respuestas en streaming omiten este paso por completo.

Las salvaguardas que lanzan excepciones se registran con `error: <message>` y se anotan mediante
`logger.warn`, pero la cadena continúa: por diseño, se permite continuar ante fallos.

## Cobertura y límites

El registro de salvaguardas está integrado únicamente en el flujo de procesamiento de chat. Estos límites quedan
fijados por `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` y
`tests/unit/guardrail-pipeline-characterization.test.ts`; actualice esas pruebas
de forma deliberada cuando cambie el comportamiento.

### Dónde se ejecutan los hooks

| Hook / control                                         | Se ejecuta en                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                      | Solicitudes gestionadas por `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (y `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` y el proxy de chat de Telegram. También el endpoint de prueba del panel `/api/guardrails/test`. Un bloqueo previo a la llamada devuelve HTTP 400. |
| `runPostCallHooks`                                     | Solo respuestas de chat **sin streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Las respuestas en streaming nunca llegan a este hook.                                                                                                                                                                                                                                                                                                     |
| PII en streaming                                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), conectado en `streamingPipeline.ts` cuando `PII_RESPONSE_SANITIZATION` está activado. No es una salvaguarda, por lo que los canales de desactivación no le afectan.                                                                                                                                                                                                                           |
| Middleware de protección contra inyecciones (heredado) | Todas las rutas `/v1` que contienen prompts, incluidas las de la familia de chat (consulte la [cobertura de rutas](#injection-guard-route-coverage--red-team-phase-8--block-d)). Solo inyección de prompts.                                                                                                                                                                                                                                                 |

### Qué no está cubierto

- **Las rutas de medios, embeddings y datos** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nunca llegan al registro. En ellas no
  se ejecutan el enmascaramiento de PII, el enmascaramiento de credenciales ni el puente de modalidades. Su única
  comprobación es el middleware heredado de protección contra inyecciones.
- **Las respuestas en streaming** no tienen salvaguardas posteriores a la llamada: no se ejecutan `pii-masker` ni
  `credential-masker` después de la llamada, ni hay bloqueo posterior a la llamada. Solo se aplica la transformación de PII
  en streaming (cuando `PII_RESPONSE_SANITIZATION` está activado). Una credencial
  que se repita en una respuesta en streaming no se oculta.
- **Canales de desactivación frente al middleware (por diseño):** el middleware evalúa
  la inyección de prompts con su propia llamada a `evaluatePromptInjection()`, sin
  pasar ninguna lista de desactivación controlada por quien realiza la llamada. El modo `block` es un
  límite obligatorio que las desactivaciones controladas por quien realiza la llamada no pueden eludir, ni siquiera en las rutas de la familia de chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Desactivar
  `prompt-injection` solo omite la salvaguarda del registro.

### Qué procesa una respuesta antes de las salvaguardas posteriores a la llamada

En la ruta sin streaming, el orden es: extracción de memoria → ejecución de herramientas
integradas → salvaguardas posteriores a la llamada → salida por bloqueo posterior a la llamada → almacenamiento en la caché semántica.

- **La extracción de memoria** y **la ejecución de herramientas** reciben la respuesta antes de que las
  salvaguardas posteriores a la llamada puedan reescribirla o bloquearla. Desde
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), la extracción de
  memoria procesa el texto extraído mediante `sanitizePII` cuando
  `PII_RESPONSE_SANITIZATION` está activada (tanto con transmisión como sin ella), pero una
  respuesta que las salvaguardas posteriores a la llamada bloqueen más tarde ya se habrá facilitado a la memoria y a las
  herramientas.
- **La caché semántica** almacena la respuesta después de las salvaguardas posteriores a la llamada, por lo que almacena la
  respuesta reescrita, y una respuesta bloqueada nunca se almacena en caché. Las entradas de caché se
  indexan por clave de API.

## Configuración

Variables de entorno que leen las protecciones integradas:

| Variable                              | Utilizada por                        | Efecto                                                                                                                                                         |
| ------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                   | Establezca `false` para desactivar por completo la detección.                                                                                                  |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                   | Política de inyección: `warn`, `block` o `log`. El valor heredado `redact` no reescribe el texto de la inyección.                                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                   | Modo de la protección contra inyecciones; también es un indicador de funcionalidad en la BD que **tiene prioridad sobre** las variables de entorno (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                   | Gravedad mínima que rechaza `MODE=block`: `high` (predeterminado), `medium` o `low`.                                                                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                   | Alias heredado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`                         | Cuando es `true`, se oculta la información de identificación personal (PII) de la solicitud (independientemente del modo de inyección).                        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (en etapas posteriores) | Controla el comportamiento del enmascarador en las respuestas.                                                                                                 |

Las protecciones de Modality Bridge leen la configuración en tiempo de ejecución del almacén
de ajustes respaldado por la BD (`getSettings()`), no de las variables de entorno. Las claves principales de Vision son
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` y
`modalityBridgeCacheMaxEntries`. Las claves heredadas
`visionBridge*` se aceptan únicamente como alternativa de lectura durante un ciclo,
según lo documentado; las escrituras desde el panel utilizan las claves principales. Los valores predeterminados y el mecanismo
de resolución de alternativas se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`, y las constantes
heredadas se conservan en `src/shared/constants/visionBridgeDefaults.ts`.

Audio utiliza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` y `modalityBridgeAudioMaxClips`, además de los ajustes
compartidos `modalityBridgeCache*`. Audio no dispone de una alternativa con claves heredadas porque estas
claves se introdujeron con el esquema de Modality Bridge.

Video utiliza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` y
`modalityBridgeVideoTimeout`, además de los ajustes compartidos `modalityBridgeCache*`.
Está desactivado de forma predeterminada porque FFmpeg/ffprobe son dependencias operativas
opcionales y la generación de descripciones de fotogramas añade latencia y costes de uso del modelo.

## Salvaguardas personalizadas

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

Pasos:

1. Crea `src/lib/guardrails/myGuardrail.ts` extendiendo `BaseGuardrail`.
2. Implementa `preCall` y/o `postCall`.
3. Registra la salvaguarda durante la importación (desde `registerDefaultGuardrails`) o
   llama a `guardrailRegistry.register(...)` en tiempo de ejecución — el registro sustituye
   cualquier salvaguarda anterior con el mismo nombre normalizado.
4. Añade pruebas en `tests/unit/` (ejemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pruebas

Usa `resetGuardrailsForTests()` entre pruebas para partir de un estado conocido.
Pasa `{ registerDefaults: false }` para empezar con un registro vacío y
registrar solo las salvaguardas que se van a probar. Vision Bridge admite la inyección
de dependencias (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expone los
puntos de inyección equivalentes para la configuración, las capacidades, la selección del modelo STT, las comprobaciones
de credenciales y la transcripción. Por tanto, las pruebas pueden ejercitar ambos flujos sin acceso a la base de datos
ni a la red.

## Véase también

- `src/lib/guardrails/` — implementación
- `src/shared/utils/inputSanitizer.ts` — detector compartido que permite
  detectar inyecciones de prompts y enmascarar información de identificación personal (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — valores predeterminados de Vision Bridge y
  lista de modelos que fuerzan el uso del puente
- `src/shared/constants/modalityBridgeDefaults.ts` — valores predeterminados de ejecución compartidos de Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — capa independiente (disyuntor, periodos de espera)
- `docs/reference/ENVIRONMENT.md` — referencia completa de variables de entorno

## Cobertura de rutas de la protección contra inyecciones y pruebas de equipo rojo (Fase 8 · Bloque D)

La protección contra inyecciones (`createInjectionGuard` / `withInjectionGuard`) cubre todas las rutas
que aceptan prompts de usuario. Respeta `INJECTION_GUARD_MODE` (valor predeterminado `warn` = solo registro;
`block` = devuelve HTTP 400 `SECURITY_001`).

| Tipo              | Rutas                                                                                                                                                | Modo predeterminado |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Datos             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

La extracción de texto (`extractMessageContents`) cubre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Pruebas de equipo rojo (nocturnas, `nightly-llm-security.yml`):** promptfoo valida que cada ruta bloquee
el corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak ejecuta pruebas de sondeo (se omiten si no hay un secreto).
`moderations` se incluye por coherencia. El modo de bloqueo es un límite obligatorio: `evaluatePromptInjection()`
ignora la lista de desactivación por solicitud que le pasa el middleware, por lo que `disabledGuardrails`
**no** exime a ninguna ruta de este control ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

El flujo de trabajo nocturno (`.github/workflows/nightly-llm-security.yml`, cron + ejecución
manual) tiene dos trabajos:

- **`promptfoo-guard` (bloqueante)** — ejecuta `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Cada caso adversario (p. ej., "ignora todas
  las instrucciones anteriores…", intentos de elusión de restricciones de tipo DAN) comprueba que la respuesta contenga
  `error.code === "SECURITY_001"`, es decir, que la protección haya rechazado realmente la solicitud.
- **`garak` (informativo)** — ejecuta garak `--probes promptinject,dan,leakreplay`
  contra una instancia local de OmniRoute (`http://localhost:20128/v1`). Su ejecución depende de un
  secreto del proveedor (`PROMPTFOO_PROVIDER_KEY`); se omite sin errores si no está disponible y lleva el sufijo
  `|| true`, por lo que informa de los resultados sin hacer fallar la CI.

La cobertura de la función auxiliar de protección (`createInjectionGuard` / `withInjectionGuard`)
abarca todas las rutas `/v1` que contienen prompts; el texto del prompt se extrae de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mediante
`extractMessageContents()` en `src/shared/utils/inputSanitizer.ts`.

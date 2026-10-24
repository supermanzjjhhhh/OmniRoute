# Guardrails (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Source de référence :** `src/lib/guardrails/`
> **Dernière mise à jour :** 2026-10-17 — v3.8.52 (ajout de [Couverture et limites](#coverage-and-limits) :
> les routes et les chemins de réponse couverts par les hooks, les en-têtes de désactivation fusionnés (#16412), le mode de blocage des injections
> comme frontière obligatoire (#16413), et les éléments qui accèdent à une réponse avant le hook post-appel)

Les garde-fous assurent la sécurité, l’application des politiques et les transformations de contenu à la frontière
entre OmniRoute et les fournisseurs en amont. Chaque garde-fou peut inspecter (et
éventuellement rejeter, transformer ou annoter) les charges utiles des requêtes (`preCall`) et
les réponses en amont (`postCall`).

Le système est **à défaillance ouverte** : si un garde-fou lève une exception pendant son exécution, le registre
consigne l’erreur et poursuit avec le garde-fou suivant au lieu de faire échouer la
requête. Le blocage est une décision explicite (`block: true`), jamais un accident.
La seule exception est une requête annulée : lorsque le `signal` de l’appelant est annulé,
un garde-fou qui lève une exception fait échouer l’exécution du hook au lieu d’être ignoré.

Les hooks ne s’exécutent **pas** sur toutes les routes ni sur toutes les réponses. Lisez
[Couverture et limites](#coverage-and-limits) avant de vous appuyer sur un garde-fou comme
mesure de sécurité.

## Garde-fous intégrés

Le registre charge automatiquement six garde-fous par ordre de priorité lors de l’importation
(voir `registry.ts` → `registerDefaultGuardrails()`) :

| Priorité | Nom                 | Étape(s)       | Fichier               |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Les numéros de priorité les plus bas s’exécutent **en premier**.

### Passerelle de vision (`visionBridge.ts`) — Passerelle de modalité PR-1

Le modèle de base GLM 5.3 et `glm-5.3-{low,high,max}` possèdent des métadonnées explicites
`supportsVision:false` dans le registre et les spécifications. Les variantes GLM 5.3 Flash
restent des modèles à vision native. La route `/v1/messages` de Claude Code entre dans la
chaîne partagée de garde-fous pré-appel de `handleChat` **avant** la traduction de Claude vers OpenAI ;
les images imbriquées dans les résultats de l’outil `Read` doivent être décrites ou traitées
avant que cette traduction ne les convertisse en contenu OpenAI `image_url` (#17069).

Intercepte les requêtes contenant des images destinées à des **modèles sans capacité de vision** et
redirige l’intégralité de la requête vers un modèle doté de capacités de vision, ou remplace les
parties contenant des images par des descriptions textuelles produites par un modèle de vision configurable avant
l’appel en amont. Cela permet aux fournisseurs limités au texte de traiter de manière transparente
des charges utiles multimodales.

Déroulement :

1. Ignorer si le modèle cible prend déjà en charge la vision (sauf s’il figure dans la
   liste de passage forcé par la passerelle `isVisionBridgeForcedModel`).
2. Extraire les parties contenant des images via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), qui délègue au **détecteur de médias
   unifié** `detectMediaParts()` dans `open-sse/utils/mediaParts.ts` — la
   source de référence unique partagée avec le filtre de compatibilité des combinaisons.
   L’extraction est limitée aux structures que `replaceImageParts` peut réinsérer
   (le contrat extraction↔remplacement) : `image_url` d’OpenAI, `source.type:"base64"`
   d’Anthropic, `source.type:"url"` d’Anthropic et
   `input_image` de l’API Responses. Les images correspondantes imbriquées dans
   `tool_result.content` de Claude Code et dans les sorties d’outils de Responses sont également extraites et
   remplacées à leur emplacement d’origine ; les structures servant uniquement d’indicateurs relèvent du filtre de compatibilité des combinaisons
   et ne sont pas extraites.
   Ignorer si aucune image n’est trouvée.
3. Résoudre la configuration d’exécution via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) : les nouvelles clés de paramètres `modalityBridge*`
   sont prioritaires ; les anciennes clés `visionBridge*` restent une **solution de repli pendant un
   cycle** (fenêtre de retour arrière). Ignorer avant tout parcours des médias lorsque la
   passerelle est désactivée.
4. Le sélecteur de mode (`modalityBridgeVisionMode`, voir le tableau ci-dessous) détermine s’il faut
   rediriger ou décrire. La redirection renvoie `modifiedPayload` avec uniquement `model`
   remplacé, ainsi que les métadonnées `{ rerouted, fromModel, toModel, imagesKept }`.
5. Chemin de description : limiter le nombre d’images à `maxImages`, composer le prompt adapté à la tâche,
   consulter le cache de descriptions, appeler le modèle de vision **en parallèle**
   (`Promise.allSettled`) et injecter à leur place des parties textuelles `[Image N]: <description>`.
   Une description qui échoue produit `null` : l’image brute est conservée pour les
   cibles inconnues ou dotées de capacités de vision (#4012), mais une **cible directe confirmée comme limitée
   au texte** ou une combinaison sans capacité de vision reçoit un texte de remplacement explicite
   `(unavailable — no vision-capable provider connected)` pour
   chaque image non décrite, y compris en cas d’échec partiel et pour les images dépassant le
   plafond d’appels de description (#17069). Le mécanisme de repli existant pour les descriptions des combinaisons en cas d’échec total
   reste en place (#8430).
6. Renvoyer `modifiedPayload` + les métadonnées (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Sélecteur de mode (`modalityBridgeVisionMode`)

| Mode       | Par défaut | Comportement                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔          | Heuristique historique, inchangée (#6640/#7204) : les modèles hors combo/`auto/` sont redirigés vers le meilleur modèle de vision, sauf si le modèle d’origine dispose déjà d’identifiants utilisables (auquel cas une description est générée) ; les cibles combo génèrent toujours une description.                                                                                                  |
| `describe` |            | Génère toujours une description — le bloc de redirection est entièrement ignoré ; le modèle choisi par l’utilisateur répond toujours.                                                                                                                                                                                                                                                                  |
| `reroute`  |            | Force la redirection : la protection qui conserve le modèle disposant d’identifiants est contournée. La protection des identifiants de la **cible** de redirection s’applique toujours — lorsqu’aucune cible de vision utilisable n’existe, le pont bloque la requête avec une erreur explicite au lieu de générer une description ou d’envoyer des images brutes à une cible exclusivement textuelle. |

Les modes forcés court-circuitent le traitement **avant** l’exécution de l’heuristique automatique ; le comportement de `auto`
est identique octet pour octet à celui du garde-fou antérieur à PR-1.

#### Périmètre de la clé API (`visionBridgeKeyScope.ts`)

Lorsque la clé API de l’appelant restreint `allowedConnections`, les pools de quotas
(`allowedQuotas`) ou les modèles (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), le pont ne
sélectionne, pour la redirection et la description, que des modèles autorisés par la clé, sur des connexions que la clé
peut utiliser. L’appel de description passe ensuite systématiquement par la boucle interne d’OmniRoute avec
l’en-tête `x-omniroute-self-loop-key-id`, afin que la requête de chat reçue
applique à nouveau la politique de connexion et de modèle de cette clé. `enforceApiKeyPolicy()`
ne prend en compte cet en-tête qu’en présence du jeton Bearer de la boucle interne ; il ne peut donc que
restreindre l’accès, et tout identifiant ne correspondant à aucune clé est rejeté.

Si aucun modèle de vision n’est autorisé pour la clé, une **cible confirmée comme exclusivement
textuelle** rejette localement la requête contenant l’image avec une erreur HTTP 400 explicite, au lieu de
transmettre les octets de l’image à un service en amont incapable de les traiter (#17069). Pour les cibles dont
les capacités de vision sont inconnues ou natives, le chemin de description conserve son comportement antérieur
autorisant la poursuite en cas d’échec (métadonnées `{ skipped: true, reason: "no_permitted_vision_model" }`).
Les requêtes sans clé, ainsi que les clés sans ces restrictions, se comportent exactement comme
auparavant.

#### Prompt de description adapté à la tâche (`modalityBridgeVisionTaskAware`)

Valeur par défaut : **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ajoute
le texte du **dernier message utilisateur** (tronqué à 500 caractères) au prompt de
description de base, afin d’orienter la description vers la demande réelle de l’utilisateur
(selon le modèle codex-vision-proxy) et de demander au modèle de vision de transcrire le texte
visible. Lorsque l’option est désactivée — ou en l’absence de texte utilisateur — le prompt de base est utilisé tel quel.

La requête compatible OpenAI propre à la boucle interne de description (`callVisionModelSingle()`
dans `visionBridgeHelpers.ts`) demande toujours `image_url.detail: "high"` —
sans condition, pour chaque appelant/fournisseur, sans dépendre d’un quelconque signal du client.
L’échantillonnage à faible niveau de détail dégrade la précision de l’OCR pour la tâche même de transcription
de texte demandée par ce prompt ; l’appel de description demande donc lui-même toujours un niveau de détail
élevé, quel que soit le niveau de détail utilisé dans la requête entrante d’origine. Cela
n’affecte que le corps de la requête de description interne ; cela ne change pas la manière dont
OmniRoute transmet le paramètre `image_url.detail` de l’appelant dans la requête principale —
cette valeur par défaut est appliquée séparément, et uniquement pour les clients OpenCode détectés, dans
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La
branche au format d’échange Anthropic de la boucle interne de description ne comporte aucun champ `detail`
et n’est affectée par aucune de ces valeurs par défaut.

#### Limite de longueur de la description (`modalityBridgeVisionMaxChars`)

| Clé                            | Par défaut | Plage            |
| ------------------------------ | ---------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` ou 100–50000 |

`0` (valeur par défaut) signifie **aucune limite** — la description renvoyée par
`callVisionModel()` est transmise sans modification, ce qui préserve le comportement
existant. Toute valeur comprise entre 100 et 50000 tronque la description en ajoutant le
suffixe `…` avant sa réinsertion sous la forme `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` dans `src/lib/guardrails/visionBridge.ts`).
Augmentez cette valeur pour les tâches d’OCR riches en détails où le modèle en aval a besoin de la
transcription complète ; réduisez-la pour limiter l’utilisation de tokens des modèles de vision prolixes.
Le champ du tableau de bord se trouve dans le panneau Avancé de l’onglet Vision
(`modality-bridge-max-chars` dans `ModalityBridgeVisionTab.tsx`) et ramène toute
valeur comprise entre 1 et 99 au minimum de 100, tout en laissant une valeur explicite de `0`
inchangée — `0` est une valeur Zod valide à part entière
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), et pas simplement
la valeur par défaut en l’absence de réglage.

#### Cache des descriptions (`modalityBridge/bridgeCache.ts`)

Cache en mémoire LRU + TTL pour les descriptions générées, partagé à l’échelle du processus.
Clé = `sha256(imageRef + composedPrompt + configuredBridgeModel)` avec
encadrement par préfixes de longueur (aucune collision aux frontières des champs). La composante modèle est
le modèle de pont **configuré**, et non le modèle ayant effectivement répondu —
`callVisionModel` peut recourir en interne à un modèle de repli, et une clé par tentative
fragmenterait le cache. Les descriptions ayant échoué ne sont jamais mises en cache. Paramètres :

| Clé                             | Par défaut | Plage   |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalisation des images distantes (auto-appel de description/récupération en base64)

Lorsque la passerelle récupère elle-même une image **distante** — l’auto-appel
de description Anthropic et la conversion en base64 au format claude-wire-format
(`ensureBase64ImagesForClaudeWire`), tous deux via
`fetchRemoteImageAsDataUri()` dans `visionBridgeHelpers.ts` — l’URI de données
obtenue est traitée par `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) avant d’être intégrée à la requête destinée
au modèle de vision. Les images trop grandes sont réduites à un **grand côté de 2048px** (ce qui correspond
à la limite de redimensionnement qu’OpenAI/Anthropic appliquent déjà côté serveur), réduisant ainsi
le volume de données téléversées et la latence sans modifier ce que voit le modèle de vision. Le redimensionnement
utilise `sharp`, chargé par importation dynamique : sur une plateforme où son
binaire natif ne peut pas être chargé, `normalizeDataUri()` **ne lève jamais d’exception** — la fonction transmet
les octets d’origine tels quels, afin que le parcours de description/conversion en base64
reste toujours opérationnel. Les octets qui ne constituent pas une image (une récupération qui n’a pas renvoyé
d’image décodable) sont également transmis sans modification. Cette normalisation est
limitée aux images que la passerelle récupère pour son propre auto-appel — elle n’est jamais
appliquée à la charge utile brute de l’appelant transmise telle quelle, conformément au
principe de modification uniquement sur activation explicite (règle impérative n° 20).

#### Schéma des paramètres + migration

Les nouvelles clés `modalityBridge*` sont validées par Zod dans `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) : `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, le trio `modalityBridgeCache*` et le
groupe `modalityBridgeAudio*` utilisé par la passerelle audio. La migration
`141_modality_bridge_settings.sql` copie les anciennes valeurs
`visionBridge*` existantes vers les nouvelles clés correspondantes (opération idempotente qui n’écrase jamais
une valeur `modalityBridge*` définie par l’opérateur) ; les anciennes clés restent acceptées comme
solution de repli en lecture pendant un cycle de publication.

#### En-tête de transparence + statistiques

Les réponses transformées par description portent l’en-tête
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construit par `buildModalityBridgeHeader()` dans `modalityBridge/bridgeStats.ts`,
ajouté par `withModalityBridgeHeader()` dans `src/sse/handlers/chatHelpers.ts`).
Les requêtes réacheminées ne reçoivent **aucun** en-tête — la charge utile n’a pas été modifiée et le
changement de modèle est déjà visible dans le champ `model` du corps de la réponse.

`GET /api/modality-bridge/stats` (authentification d’administration, même niveau que
`GET /api/settings`) renvoie les compteurs en mémoire par modalité
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pour `vision`, `audio` et
`video`. `averageLatencyMs` utilise `latencySamples`, et non l’ensemble des tentatives, comme
dénominateur ; une opération sans mesure de durée ne crée pas artificiellement un échantillon de zéro milliseconde.
`bridged` reste l’alias rétrocompatible des
conversions réussies ; les tentatives échouées ne l’incrémentent pas.
Les compteurs sont volontairement réinitialisés au redémarrage du processus
(télémétrie, et non comptabilité).

#### Configuration du tableau de bord

La page dédiée du tableau de bord est
`/dashboard/settings/modality-bridge`. Ses onglets `Vision`, `Audio`
et `Video`, accessibles par URL, conservent les paramètres de requête lors du changement de la valeur `tab`.
L’onglet Vision propose l’activation, le mode, la sélection du modèle (y compris la valeur
automatique par défaut), les invites adaptées à la tâche, les limites avancées de délai d’expiration, de nombre d’images, de longueur de description et de cache,
les compteurs
d’exécution et une requête de test protégée. L’onglet Audio est lui aussi opérationnel : il propose
l’activation, un sélecteur de modèles STT uniquement avec l’option Auto, les limites de délai d’expiration et de durée maximale des extraits, les compteurs
audio et un test d’exemple `input_audio`. L’onglet Video est fonctionnel : il indique
l’état de FFmpeg/ffprobe à l’exécution — l’un des quatre états explicites de l’interface (`unknown` pendant
la vérification ou si celle-ci n’a pas pu aboutir, `restricted` sur un hôte
de tableau de bord hors boucle locale où la vérification est ignorée côté client, `unavailable` après vérification
et confirmation de l’absence, ou `available` avec les versions de FFmpeg/ffprobe) — enregistre
l’activation, le modèle et les limites d’images, de vidéo et de délai d’expiration, limite le sélecteur de modèles aux modèles prenant en charge la vision
et affiche les compteurs vidéo.

L’ancienne carte Vision Bridge dans les paramètres d’IA est un lien de compatibilité vers la
nouvelle page ; elle ne contient plus de seconde copie du formulaire. La section Fournisseurs de médias
relie également les parcours Image-vers-texte et Parole-vers-texte aux onglets correspondants de la passerelle
de modalités, sans supprimer l’espace de test Parole-vers-texte existant.

**Contournement du contrôle d’admission pour les auto-appels :** lorsque l’appel de description passe par
la boucle locale `/v1` d’OmniRoute (modèle de fournisseur non standard), la sous-requête envoie
`x-omniroute-admission-bypass: internal` et s’authentifie avec l’identifiant
résolu pour la boucle locale — la sentinelle locale `sk_omniroute` en mode local, ou la
clé d’environnement `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurée par l’opérateur (#1350), afin que
les déploiements `REQUIRE_API_KEY=true` puissent toujours exécuter l’appel de description. Le contournement
n’est autorisé que pour ces identifiants précis ; les clients externes ne peuvent donc pas utiliser
cet en-tête pour éviter le contrôle d’admission.

Les anciennes valeurs par défaut se trouvent dans `src/shared/constants/visionBridgeDefaults.ts` ; les
nouvelles valeurs par défaut du mode, de l’adaptation à la tâche et du cache, ainsi que le résolveur de paramètres, se trouvent dans
`src/shared/constants/modalityBridgeDefaults.ts`. Le garde-fou expose une
option de constructeur `deps` pour permettre aux tests d’injecter de fausses implémentations de `getSettings` et
`callVisionModel`.

### Passerelle audio (`audioBridge.ts`) — Passerelle de modalités PR-3

Intercepte les requêtes de chat contenant de l’audio avant qu’elles n’atteignent une cible dont la
prise en charge des entrées audio n’est pas établie. Elle ne réachemine jamais la requête de chat : les parties audio sont
transcrites via le point de terminaison multipart existant compatible avec OpenAI et le
modèle de chat choisi poursuit le traitement avec les transcriptions textuelles.

Déroulement :

1. Résoudre `supportsAudio` via `getResolvedModelCapabilities()`. Les métadonnées
   explicites du registre des fournisseurs prévalent, suivies des métadonnées
   statiques du modèle, puis de `modalities_input` synchronisé. Une liste
   d’entrées déclarée sans `audio` vaut `false` ; en l’absence d’éléments
   attestant la capacité, la valeur reste `null`. `false` et `null` activent
   tous deux le pont conservateur, tandis que `true` le contourne.
2. Résoudre les paramètres `modalityBridgeAudio*` et extraire de chaque message
   les parties audio de premier niveau pouvant être remplacées, à l’aide du
   détecteur partagé `detectMediaParts()`. Les formats de transmission pris en
   charge sont les formats OpenAI `input_audio`, `audio_url` et
   `source.media_type: "audio/*"`. L’audio imbriqué est détecté pour le routage,
   mais n’est pas supprimé par le mécanisme de remplacement. Le traitement est
   plafonné par `modalityBridgeAudioMaxClips` ; les parties suivantes restent
   inchangées.
3. Respecter le `provider/model` configuré, ou laisser
   `selectAudioBridgeModel()` parcourir `AUDIO_TRANSCRIPTION_PROVIDERS` dans
   l’ordre stable du catalogue et sélectionner le premier modèle disposant
   d’un identifiant d’authentification de fournisseur actif et utilisable.
4. `callAudioTranscription()` convertit l’audio base64/URI de données en un
   `file` multipart, ou télécharge un `audio_url` distant via le dispositif de
   protection des connexions sortantes limité aux adresses publiques, avec
   épinglage DNS et une limite de 25 Mo. La fonction envoie ensuite le fichier
   et le modèle sélectionné par POST à l’auto-appel local
   `/v1/audio/transcriptions`, authentifié avec `resolveSelfLoopBearer()`.
   La route de transcription existante assure la recherche habituelle des
   identifiants d’authentification, la gestion des délais de récupération et
   des limites de débit, ainsi que l’acheminement vers le fournisseur.
5. Les appels réussis remplacent leurs parties par `[Audio N]: <transcript>`.
   Les appels s’exécutent avec `Promise.allSettled` : un échec individuel
   préserve la partie audio d’origine correspondante (contrat #4012). Si tous
   les appels échouent et que la cible est confirmée comme ayant
   `supportsAudio === false`, les parties deviennent
   `[Audio N]: (unavailable — no STT provider connected)` (contrat #8430). Pour
   une cible inconnue (`null`), un résultat où tous les appels échouent reste
   inchangé. Une cible confirmée comme exclusivement textuelle, sans
   identifiant d’authentification STT utilisable, reçoit le même texte de
   remplacement explicite sans qu’aucun appel réseau ne soit effectué.

Les transcriptions réussies utilisent le cache LRU/TTL de Modality Bridge,
partagé à l’échelle du processus. La clé combine la référence audio, le libellé
d’opération stable `audio-transcription` et le modèle STT sélectionné ; les
échecs ne sont jamais mis en cache. Les tentatives de traitement audio mettent
à jour les compteurs partagés `bridged`, `cacheHits`, `failures` et `lastUsedAt`.
Les réponses transformées portent
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ; les
requêtes inchangées ne reçoivent pas de segment Audio Bridge.

Les paramètres d’exécution sont stockés en base de données et validés par Zod :

| Clé                           | Valeur par défaut | Plage          |
| ----------------------------- | ----------------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`            | —              |
| `modalityBridgeAudioModel`    | `""`              | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000`           | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`               | 1–10           |

Le cache partagé reste contrôlé par `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` et `modalityBridgeCacheMaxEntries`.

### Pont vidéo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepte les parties vidéo de premier niveau dans `messages` de Chat
Completions et dans `input` de l’API Responses avant l’appel d’une cible dont
la prise en charge native de la vidéo n’est pas connue.
Les formats pris en charge sont `input_video`, `video_url`, `video_source`, les
URL HTTPS et les URI de données `data:video/*;base64,...`. Les simples noms de
fichiers dans le texte ne sont pas traités comme des vidéos.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) prend en charge le parcours
de la requête, la vérification des capacités et des politiques, l’agrégation
par requête et la charge utile de la réponse.
Le traitement par vidéo — acquisition, cache du résultat complet, description
d’une séquence d’images (qui fusionne toute transcription audio déclarée par
l’appelant), ainsi que métriques, annulation et nettoyage par tentative — est
encapsulé derrière `processVideoPart` dans `videoBridgePipeline.ts`, appelé une
fois par partie vidéo dans la boucle de `preCall`.
Ce module définit également les interfaces de ports explicites `VideoMediaBrokerPort`
(acquisition des octets et extraction des images échantillonnées),
`VideoAudioTranscriptionPort` (fusion d’une transcription audio déclarée par
l’appelant avec les descriptions des images échantillonnées) et
`VideoDrilldownPort` (l’interface de persistance de l’exploration détaillée des
images ; pas encore raccordée à `processVideoPart` — seule la route distincte
`/api/modality-bridge/video/drilldown` écrit actuellement des entrées
d’exploration détaillée).

Le chemin de requête public `/v1` n’importe ni n’invoque jamais de
sous-processus. Les vidéos distantes sont téléchargées dans une limite de
50 Mio ; les vidéos base64 intégrées sont soumises à un plafond conservateur
de 36 Mio de données décodées par vidéo, afin que l’enveloppe contenant le
modèle, les messages et la structure puisse rester dans la limite d’admission
des requêtes JSON publiques de 50 Mio. La longueur des données intégrées et
les estimations de taille décodée sont vérifiées avant toute allocation. HTTPS
est requis pour l’URL distante initiale et chaque redirection, avec le
dispositif existant de protection des connexions sortantes limité aux adresses
publiques et l’épinglage DNS. Les octets franchissent ensuite précisément
l’interface interne du courtier `POST /api/modality-bridge/video/extract`.
Cette route est à la fois `LOCAL_ONLY` et `SPAWN_CAPABLE`, n’accepte qu’une
requête de bouclage de confiance authentifiée par processus, et n’accepte
jamais d’URL, de chemin de système de fichiers, d’exécutable ni de liste
d’arguments. Le pipeline de contrôle de taille du corps de l’API et le lecteur
incrémental du corps du gestionnaire imposent indépendamment un plafond
d’entrée de 50 Mio pour le courtier. Sa file d’attente bornée exécute une seule
extraction à la fois, autorise quatre tâches en attente et plafonne les
données d’entrée en attente à 100 Mio.

Au sein du broker, `ffprobe` lit un fichier local privé ; la liste fixe des
formats autorisés exclut les formats de listes de lecture et de manifestes. Pour les conteneurs
autorisés de la famille MOV, les références à des données MOV externes restent désactivées par défaut, et la
commande fixe ne les active pas. `ffprobe` et `ffmpeg` utilisent tous deux une
liste de protocoles autorisés limitée à `file`, un seul thread, des tableaux d’arguments fixes, aucun shell,
et des exécutables résolus à partir de `PATH`. Les flux d’images de couverture jointes ne sont pas
des candidats à la lecture. Tous les flux lisibles doivent respecter les limites, et un
flux explicitement désigné par défaut est privilégié avant le repli déterministe
sur celui dont l’indice est le plus bas. Les vidéos sont limitées à 600 secondes, à 8 192 pixels par dimension et à
33 554 432 pixels source. FFmpeg échantillonne de 1 à 16 images JPEG aux points médians, réduit
le côté le plus long à 1 024 pixels au maximum sans agrandir les entrées plus petites, et
ne reçoit jamais d’URL. L’échantillonnage est `uniform` par défaut. Les stratégies facultative
`scene_aware` et expérimentale `segment_aware` effectuent une passe FFmpeg fixe
supplémentaire sur le flux local déjà validé, sélectionnent des horodatages de scènes
`showinfo` en nombre limité, et se replient de façon déterministe sur les mêmes
points médians uniformes en cas de défaillance du détecteur, de dépassement du délai, de sortie mal formée ou d’ensemble
de candidats vide. Le mode tenant compte des segments répartit les échantillons aux points médians proportionnellement aux
intervalles de scènes validés ; les données utilisées par ce mode et son comportement de repli sont
détaillés ci-dessous. Le plafond strict de 16 images est
appliqué après la sélection, quelle que soit la stratégie. Lorsqu’une requête tenant compte des scènes ne dispose que
d’un budget d’une seule image, elle utilise le point médian uniforme de la fenêtre active couvrant toute la vidéo ou de la fenêtre
de ciblage et indique `policyEffective: uniform` : une seule image de scène sélectionnée
ne peut pas préserver les deux extrémités temporelles. L’appelant peut éventuellement fournir une
fenêtre de ciblage dont les bornes sont finies (`start`/`end` en secondes) ; les bornes sont ramenées à la durée du média,
les fenêtres inversées ou non finies sont rejetées, et toutes les stratégies
d’échantillonnage sont exécutées uniquement dans l’intervalle normalisé. La fenêtre
obtenue est incluse dans les métadonnées d’échantillonnage et dans le préfixe de description
non fiable afin que les modèles en aval puissent distinguer un extrait ciblé de la
chronologie complète.

Le ciblage sémantique de la description est un paramètre distinct et explicite. Le mode d’analyse `full`
par défaut conserve le prompt existant pour les images et ne transmet jamais le texte
de la requête au modèle de description. En mode `focused`, le pont lit uniquement le dernier
contenu `text`/`input_text` non vide rédigé par l’utilisateur dans le même conteneur Chat ou Responses,
le normalise en NFC, réduit les séquences de caractères de contrôle et d’espacement,
et le limite à 500 points de code Unicode. Si le résultat est vide, le
prompt `full` exact est utilisé. Une indication exploitable est sérialisée en JSON dans un bloc dédié
au contexte utilisateur non fiable et ne peut que donner la priorité à des détails observables ; elle
ne peut pas annuler l’avertissement distinct interdisant de suivre les instructions visibles
ou audibles dans le média. Le ciblage textuel ne déduit jamais `start`/`end` et ne modifie pas
l’échantillonneur temporel.

#### FU-07 données structurelles des segments

`segment_aware` utilise une passe de préanalyse bornée sur le flux vidéo
local déjà validé. La chaîne de filtres fixe réduit d’abord la largeur à 320 pixels
au maximum, détecte les changements de scène et les intervalles figés, puis échantillonne à 1 image par
seconde pour mesurer le flou, la luminance moyenne et les informations spatiales et temporelles. La passe est
limitée à 600 échantillons structurels, à un seul thread FFmpeg/de filtrage, aux mêmes
listes de protocoles et de conteneurs autorisés limitées à `file`, à une limite de sortie du processus de 1 Mio,
et à 30 secondes au maximum dans le cadre du mécanisme partagé d’annulation et d’échéance du broker. Elle n’accepte jamais
de commande, de filtre, de chemin ni d’URL provenant de la requête.

Les valeurs structurelles sont des données d’échantillonnage déterministes, et non une compréhension
sémantique de la vidéo. Elles ne déduisent ni sujets, ni actions, ni descriptions, ni paroles, ni
intention de l’utilisateur. Les limites de scènes et de séquences figées forment des segments ; la proportion de séquences figées, le flou,
l’exposition, les détails spatiaux et les changements temporels influencent uniquement la répartition du budget existant
de 1 à 16 images. Un segment entièrement figé est limité à une seule image,
tandis que les segments non figés se partagent le budget restant. Lorsque les limites
sont plus nombreuses que les images, une couverture uniforme de la chronologie est conservée afin que des coupes rapides au début
ne puissent pas masquer un long segment final. Les limites de scènes situées à moins d’une seconde d’une
limite de séquence figée, conformément à la résolution d’analyse, sont fusionnées.

Des filtres manquants, des données mal formées ou vides, une erreur du détecteur ou l’expiration du délai
de préanalyse bornée entraînent un repli sur la stratégie exacte des points médians uniformes. Une annulation
par l’appelant ou l’expiration de l’échéance du broker ne déclenche pas ce repli : elle met fin au
sous-processus en cours, empêche toute extraction ultérieure d’images, et l’arborescence temporaire privée est
supprimée dans `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` génère des jeux de test FFmpeg réels et déterministes
pour les économies d’appels au modèle de description après déduplication, la répartition du budget en cas de mouvements intenses,
les données de flou/d’exposition/SI-TI, les coupes rapides suivies d’un long segment final et les faux
positifs dus aux fondus progressifs. Il enregistre le temps réel de préanalyse et, lorsque `/usr/bin/time`
est disponible, le temps CPU du processus enfant et le pic de mémoire résidente (RSS). Ses contrôles de qualité reposent uniquement sur des oracles
structurels. La qualité réelle du modèle de description reste à l’état `HOLD`, car ce banc d’essai ne dispose d’aucun
point de terminaison autorisé ni d’évaluateur figé. Les économies monétaires restent également à l’état `HOLD`,
sauf si `--caption-cost-per-call-usd` fournit une estimation explicite et positive du coût par
appel ; le script ne fabrique jamais l’un ou l’autre de ces résultats.

Chaque image est limitée à 4 MiB, l’ensemble des images brutes à 23 MiB, et la
réponse sérialisée du broker à 32 MiB. Un répertoire temporaire privé est supprimé
dans `finally`. OmniRoute n’intègre pas FFmpeg et n’accepte pas de chemin
d’exécutable personnalisé. Avant de générer les descriptions, la passerelle applique une passe prudente de
déduplication visuelle : chaque JPEG est réduit à un tampon de 16×16 pixels en niveaux de gris et
comparé uniquement à la dernière image conservée. Lorsque le nombre de descriptions demandé
dépasse une image, l’extraction fournit un
ensemble borné de candidats pouvant atteindre deux fois ce nombre, sans jamais dépasser 16 images.
La limite demandée n’est appliquée qu’après la déduplication, et les premier et dernier
candidats sélectionnés sont préservés lors de la réduction finale lorsque le nombre demandé est d’au moins
deux. La politique versionnée
`grayscale-16x16-mean-cells-v2` utilise la plus grande valeur entre l’écart moyen de luminance et
la proportion de cellules de la miniature dont l’écart normalisé est supérieur ou égal à 0.05. Le
seuil de détection des doublons est la constante 0.04, choisie pour garantir un comportement prévisible plutôt que
d’être exposée comme paramètre d’exécution. Ce signal secondaire
à fort contraste préserve les petits mouvements et les changements de texte visible qu’une
comparaison fondée uniquement sur la moyenne peut masquer. En cas d’erreur du comparateur ou du décodeur, les images sont conservées
afin de maintenir la couverture. Les métadonnées de sortie distinguent les candidats extraits, les images
effectivement utilisées et les doublons visuels supprimés.

Une partie vidéo explicitement marquée peut demander une planche-contact horodatée. La
passerelle construit une grille JPEG comportant au maximum 4 colonnes et 16 images. Chaque cellule de 512 pixels porte
son horodatage source incrusté dans une bande inférieure à fort contraste, tandis que ces mêmes horodatages
restent présents dans les métadonnées textuelles pour permettre leur association et leur audit en aval. Le
JPEG complet reste limité à 32 MiB. Si `sharp` ne parvient pas à décoder ou à composer la grille, la
passerelle se replie sur les images JPEG individuelles ; une annulation par le client se propage toujours
à travers l’opération de création de la planche.

Les éléments probants justifiant une promotion sont délibérément séparés du
microbenchmark synthétique de composition. `scripts/perf/video-bridge-contact-sheet-eval.ts` définit un
banc d’essai A/B à schéma versionné pour des modèles de vision réels compatibles avec OpenAI. Il mesure
les jetons déclarés par le fournisseur, la latence de bout en bout en temps réel écoulé (composition de la planche comprise),
le nombre d’appels au modèle et la conservation des faits définis dans le manifeste. Les réponses brutes du modèle ne sont pas
écrites dans le rapport ; seules les empreintes SHA-256 et les identifiants des faits correspondants sont conservés. Le
banc d’essai n’effectue aucun appel réseau ni aucun appel payant à un modèle sauf si `--execute-real` est fourni et que
`--model`, `OMNIROUTE_BASE_URL` et `OMNIROUTE_API_KEY` sont configurés. Sans
cette exécution réelle explicite, son verdict lisible par machine reste `HOLD` ; les seules
mesures synthétiques de charge utile et de nombre d’appels ne constituent pas des éléments probants justifiant une promotion.

Les appelants peuvent joindre un tableau facultatif `transcript.cues` à une partie vidéo
prise en charge lorsqu’ils disposent déjà d’un texte aligné. Chaque segment doit comporter `text`, un
intervalle `start`/`end` aux bornes finies compris dans la durée déterminée par l’analyse du média, ainsi qu’une
`source` autorisée (`client`, `embedded` ou `audio-bridge`) ; `confidence` vaut par défaut
`1` et doit rester entre `0` et `1`. Les segments strictement identiques sont fusionnés.
OmniRoute ne lance jamais de transcription à partir de ces métadonnées : les segments validés sont
copiés dans le résultat descriptif avec leur source, leur niveau de confiance et leur intervalle, et
sont présentés comme des observations non fiables aux côtés des descriptions des images. Les textes invalides,
hors limites ou sans provenance sont rejetés plutôt que mélangés au
flux de descriptions. Les deux canaux de transcription du corps de la requête normalisent la
provenance fournie en `client`, y compris les étiquettes autodéclarées `embedded` ou `audio-bridge`.
Seul un adaptateur contrôlé par le serveur peut attribuer ces étiquettes de confiance au moyen
de l’argument `trustedSource`, accessible uniquement depuis le code ; aucun champ JSON de requête ne peut atteindre
cet argument. Le texte de transcription reste un contenu non fiable issu d’un média,
quelle que soit sa provenance, et ne doit jamais déterminer les autorisations.

Un appelant avancé peut fournir une piste `audioTranscript` pour la même vidéo ;
elle est traitée comme du texte fourni par le client, et non comme une preuve de transcription par le serveur.
La couche de fusion traite les observations visuelles et audio avec
une échéance et un signal d’annulation communs, les ordonne sur une chronologie commune, fusionne
les doublons exacts et renvoie un résultat partiel lorsqu’un seul des deux volets réussit.
Une piste `audioTranscript` invalide entraîne un repli vers ce résultat partiel — la description
visuelle est conservée et la branche audio enregistre un code d’échec expurgé —
au lieu de faire échouer le traitement de toute la vidéo. La disponibilité de chaque branche, l’indicateur de résultat partiel
et les codes d’échec expurgés sont conservés dans le résultat descriptif, dans les
métadonnées de garde-fou (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dans les métadonnées du cache de résultats et dans les compteurs
de fusion de la passerelle. Le chemin par défaut de Video Bridge ne lance pas de reconnaissance vocale
et ne télécharge pas de seconde copie du média ; sans cette piste explicite, il reste
exclusivement vidéo.

**Conservation des transcriptions (#12150 P1).** Cela s’applique automatiquement chaque fois que le
Video Bridge (lui-même activé sur demande) restitue un segment de transcription — aucun indicateur
de conservation distinct n’est nécessaire. Lorsqu’une requête restitue un segment de transcription (un
`transcript` déclaré par l’appelant ou un `audioTranscript` fusionné), le garde-fou la marque
`videoBridgeObserved` et produit une copie expurgée de la description de la vidéo —
un rendu identique dans lequel le corps en texte libre de chaque segment est remplacé par
`[redacted-video-transcript]`, obtenu en substituant le champ structuré du segment
avant l’assemblage de la chaîne (jamais en analysant le texte aplati, de sorte qu’aucun contenu
de segment — malveillant ou ordinaire, y compris les corps contenant `]` tels que
`[inaudible]`/`[music]` — ne puisse subsister). Le corps de requête persisté dans le journal des appels remplace
chaque partie textuelle dérivée de la vidéo par cette copie expurgée, en établissant la correspondance par égalité
de contenu ; l’ancre `fullText` est relue à partir de la charge utile finale du garde-fou
avant appel, de sorte que la correspondance fonctionne toujours après que les garde-fous ultérieurs de la chaîne (les masqueurs de données personnelles et
d’identifiants, de priorités 10/95) ont réécrit sur place le texte de la description et
après que l’injection du prompt système, du transfert de contexte ou de la mémoire a remanié le tableau des messages. Le
corps envoyé au modèle en amont reste inchangé. Une requête observée n’alimente par ailleurs
aucune mémoire durable (l’extraction à partir de la requête comme de la réponse est ignorée),
de sorte que la réponse du modèle elle-même ne puisse pas réintroduire du texte de transcription dans la mémoire.

**Champs vidéo bruts (#12430).** Lorsque le pont est activé et que la prise en charge native de la vidéo est inconnue ou absente, les champs `transcript`/`audioTranscript` définis activent également `videoBridgeObserved`, même après un échec de la description ou l’atteinte d’une limite `maxVideos`. `null` et les chaînes vides comptent ; les champs absents et les métadonnées non vidéo ne comptent pas. Les copies conservées expurgent ces champs ou omettent la requête, et les caches ainsi que la mémoire sont contournés.

Dans ces parcours de repli, les segments valides fournis par l’appelant deviennent des parties `text`/`input_text`
prises en charge, plutôt que des champs non standard destinés au fournisseur. Les deux pistes fournies dans la requête
restent des observations `client` non fiables, accompagnées d’un avertissement explicite indiquant que la vidéo
n’a pas été décrite et que les horodatages n’ont pas été vérifiés par rapport au média. Les limites existantes
de 256 segments/64 Kio au total et les limites par segment s’appliquent aux deux pistes réunies ;
les horodatages doivent respecter le plafond de 600 secondes du courtier et toute fenêtre de
ciblage fournie. Les pistes invalides sont abandonnées et non transmises comme du texte arbitraire ; une
autre piste valide peut néanmoins être utilisée, sauf si leur limite cumulée est dépassée. Les champs nuls ou vides
n’ajoutent aucun texte. Ce repli n’ajoute aucune récupération de média ni aucune transcription.
Les champs d’extension de transcription sont supprimés du conteneur vidéo de repli et de ses
objets `video_url`/`source`. La liste d’autorisation du protocole OpenAI reste stricte ; les conteneurs vidéo dont la prise en charge native
est inconnue restent disponibles et les cibles connues pour ne prendre en charge que le texte conservent des marqueurs sûrs.
Les copies expurgées structurées protègent le texte de transcription ajouté, tandis que la
requête d’origine appartenant à l’appelant reste inchangée. Les cibles prenant en charge nativement la vidéo et
les ponts désactivés conservent leur comportement de contournement existant.

Les autres copies conservées utilisent le même signal de requête observée. L’instantané brut de la
requête client avant les garde-fous, la requête en attente en mémoire et le journal des requêtes
rejetées précocement remplacent structurellement les champs de transcription dans les parties vidéo ;
les prompts sous forme de chaînes synthétisés par les étapes du pipeline et le transfert de contexte sont expurgés
au point de persistance du corps de requête. Le marqueur `video_content_removed` persisté
fait échouer la continuation via `previous_response_id` de manière sécurisée plutôt que de reconstruire
du texte qui a été intentionnellement supprimé. Si une requête observée perd sa
copie expurgée par partie avant la journalisation, ou si ne serait-ce qu’une des multiples copies expurgées de vidéo
ne correspond plus après des mutations ultérieures de la requête, le corps de requête conservé est
entièrement omis plutôt que de conserver une transcription partiellement expurgée.

Pour une requête observée, une réponse du modèle peut citer n’importe quelle portion de la
transcription sans délimitation structurée des segments. Son champ `responseBody` persisté dans le journal des appels
est donc remplacé par un marqueur d’omission ; l’artefact détaillé du
pipeline (qui peut inclure les corps échangés avec l’amont et le client ainsi que des fragments de flux)
n’est pas conservé. Les caches sémantiques, d’idempotence et de rejeu du raisonnement contournent
les lectures et les écritures pour cette requête. La requête envoyée au fournisseur et la réponse visible par le client
restent inchangées. Les octets de maintien de connexion envoyés précocement sont purgés du tampon
temporaire lorsque l’artefact détaillé est omis. L’avertissement de Kiro concernant un EventStream
mal formé indique uniquement le nombre d’octets de la charge utile, jamais son contenu ni l’erreur brute
de l’analyseur JSON.
Cela ne signifie pas que tous les diagnostics de fournisseurs ou de plugins sans rapport ont été
audités ; l’examen plus large des points de conservation est suivi dans #11658.

Le cycle de vie interne de `/api/modality-bridge/video/drilldown` constitue un socle de cache distinct,
accessible en boucle locale et authentifié par jeton. Chaque opération exige également un
identifiant canonique opaque du principal. Avant qu’un appelant de production ne soit activé, il doit
déduire cet identifiant du locataire authentifié et ne doit jamais transmettre une
valeur choisie par le client. Les clés de cache lient ce principal à des identifiants canoniques de session et
de référence vidéo, ne stockent que leurs clés dérivées par SHA-256 et limitent les lectures
comme les suppressions au même principal. Le cache stocke au maximum 16 images JPEG dérivées
par entrée, les fait expirer après dix minutes et prend en charge des lectures bornées par
`start`/`end` ou la suppression explicite d’une session.

Chaque principal est limité à 16 entrées et à 64 Mio de données JPEG canoniques. Ces
limites sont indépendantes du plafond global de 64 entrées/256 Mio : la pression sur le quota d’un principal
n’évince que les entrées les moins récemment utilisées de ce principal avant qu’une éviction
LRU globale ne soit envisagée. Les entrées expirées sont retirées des décomptes par principal et
du décompte global lors de l’activité du cache, tandis qu’une annulation ou un échec de validation
ne valide aucun remplacement partiel.

Le cache rejette le Base64 non canonique, le remplissage excessif, les médias autres que JPEG, les JPEG mal formés ou
tronqués, ainsi que les JPEG qui produisent un avertissement lors d’un décodage complet de l’image avec `sharp`
soumis à des limites. Il réencode chaque image acceptée en JPEG canonique, déduit la largeur et la hauteur
des octets décodés plutôt que de se fier aux champs fournis par l’appelant, et supprime les éventuels octets
polyglottes en fin de fichier au lieu de les conserver. Seul le tampon compressé canonique soumis aux limites
est comptabilisé dans les deux quotas. La limite JSON sur le réseau inclut le surcoût du Base64 pour le plafond de 32 Mio
d’entrée décodée. Chaque
dérivé stocké enregistre son format JPEG et sa résolution validés, sa politique d’échantillonnage,
sa version de dérivation, sa date de création, le hachage du contenu calculé par le serveur et la référence
hachée du parent, ainsi que le hachage du contenu parent fourni par l’appelant de confiance. L’annulation est vérifiée
entre les phases asynchrones de décodage et de hachage, avant la validation atomique dans le cache.

Cette tranche ne raccorde pas encore de producteur de production à la route et ne
propose pas de sélection de variantes multirésolution. Le chemin transparent des requêtes Video Bridge
n’entraîne donc aucun travail supplémentaire, tandis que la dérivation du principal lié au locataire et
le cycle de vie multirésolution complet FU-08 restent explicitement des travaux à venir plutôt que
d’être présentés dans la documentation comme un comportement achevé.

Les images sont décrites séquentiellement avec le modèle Video configuré. Une
valeur de remplacement Video vide hérite du paramètre Vision ; si les deux sont vides, le
routeur automatique Vision sélectionne le modèle effectif doté de capacités de vision. Les descriptions réussies
remplacent la partie d’origine par un préfixe stable `[Video description:` qui
signale également que le texte est une observation non fiable issue d’un média et indique aux modèles
en aval de ne pas suivre les instructions présentes dans le média. Les clés du cache de descriptions d’images
incluent les octets JPEG, le prompt, l’horodatage et le modèle effectif ; seules les descriptions
réussies sont mises en cache. Les entrées du cache conservent le modèle producteur ayant effectivement réussi,
y compris s’il s’agit d’un modèle de repli ; la passerelle indique `mixed` lorsque différentes images
ont été traitées par différents modèles. Un accès au cache réutilise cette identité de producteur
au lieu de la remplacer par le plan de routage demandé. Le cache des résultats pour l’ensemble de la vidéo
utilise une clé fondée sur chaque entrée qui modifie la sortie : le prompt, le modèle
effectif, la politique d’échantillonnage, le nombre d’images, le mode d’analyse sémantique, l’empreinte SHA-256
de l’indication de ciblage normalisée, la fenêtre de ciblage, `transcript`,
`audioTranscript` et l’indicateur de planche-contact. Toute modification de l’une de ces
dimensions entraîne donc un défaut de cache, jamais la réutilisation d’un résultat obsolète. La version de la politique de
déduplication visuelle, le seuil et le nombre limité d’images candidates figurent également explicitement dans la
clé et les métadonnées du cache des résultats ; un changement de politique ne peut donc pas réutiliser une
description obsolète de l’ensemble de la vidéo. Les métadonnées v4 du cache des résultats conservent le mode et
l’empreinte, jamais la tâche utilisateur brute. Les métadonnées du garde-fou indiquent à la fois les
modes d’analyse demandé et effectif ; un mode `focused` demandé sans
texte utilisateur exploitable est signalé comme étant effectivement `full`.

Le garde-fou extrait chaque partie vidéo prise en charge, mais n’en décrit pas plus de
`modalityBridgeVideoMaxVideos`. Pour une cible dont il est établi que
`supportsVideo === false`, les vidéos en échec et celles dépassant la limite deviennent des marqueurs textuels explicites et sûrs,
afin qu’aucune vidéo brute ne subsiste. Lorsque les capacités sont inconnues, ces parties
conservent leur support vidéo ; toute transcription de repli suit la conversion
textuelle limitée décrite ci-dessus. Les cibles avec `supportsVideo === true` contournent la passerelle.
Le signal d’abandon de la requête client se propage au téléchargement, à la file d’attente du courtier,
aux sous-processus et aux appels de description ; les abandons interrompent le traitement entre les vidéos et ne laissent jamais
passer de médias bruts en cas d’échec.

Les paramètres d’exécution sont stockés en base de données et validés par Zod :

| Clé                                 | Valeur par défaut | Plage / comportement                                                                                                                 |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`           | Fonction d’exécution facultative, à activer explicitement                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` conserve les descriptions génériques ; `focused` utilise un contexte limité et non fiable issu du dernier message utilisateur |
| `modalityBridgeVideoModel`          | `""`              | Hérite du modèle Vision Bridge                                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` ou `segment_aware` proportionnel ; en cas d’échec du détecteur, repli sur `uniform`                         |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                                                       |

Les anciennes valeurs persistées du délai d’expiration Video supérieures à 120 secondes sont plafonnées à
l’échéance du courtier ; les nouvelles écritures de paramètres dépassant cette limite sont rejetées.
`GET /api/modality-bridge/video/runtime` exige une origine locale de bouclage attestée par un marquage
de confiance avant toute authentification ou vérification de l’environnement d’exécution, puis exige une authentification
d’administration. Il renvoie uniquement `available`, les versions assainies de FFmpeg/ffprobe et un motif
fixe lorsque l’environnement d’exécution est indisponible. Le point de terminaison d’extraction interne n’est pas
une API publique de téléversement : une saturation de la file d’attente renvoie `503` avec `Retry-After`, une déconnexion
de l’appelant renvoie `499`, et l’échéance fixe du courtier renvoie `504`. Les réponses converties ajoutent
`video->text;model=<visionModel>;parts=<videos>` à l’en-tête central
`x-omniroute-modality-bridge` sans supprimer les segments Vision ou Audio.

### Masqueur de données personnelles (`piiMasker.ts`)

S’exécute aux **deux** étapes.

- **`preCall`** clone la charge utile, parcourt `system`, `messages`, `input` et
  `prompt` (y compris les éléments constitués de simples chaînes) et applique `processPII()` (depuis
  `@/shared/utils/inputSanitizer`) aux champs `content`/`text` de type chaîne. Lorsque
  `PII_REDACTION_ENABLED=true`, les données personnelles détectées sont masquées dans la charge utile
  sortante. Ce comportement est indépendant de `INPUT_SANITIZER_MODE` (qui contrôle uniquement
  la politique relative aux injections de prompt). Lorsque le masquage est désactivé, l'appel enregistre les nombres
  de détections sans réécrire le contenu.
- **`postCall`** effectue une copie profonde de la réponse, exécute `sanitizePIIResponse()` ainsi que
  le dispositif de masquage adapté au format de l'API Responses (`maskResponsesOutput` — couvre
  `output_text` et `output[].content[].text`). Si un masquage est effectué, la
  réponse modifiée remplace l'originale.

Le garde-fou ne bloque jamais ; il se contente d'annoter (`meta.detections`,
`meta.redacted`) ou de réécrire.

#### Sélection par type, motifs personnalisés et compteurs de détection

**Tableau de bord → Paramètres → Sécurité → Masquage des données personnelles** permet de choisir _ce qui_ est masqué. Cela
n'active pas le masquage : celui-ci dépend toujours de `PII_REDACTION_ENABLED` (requête) et de
`PII_RESPONSE_SANITIZATION` (réponse + SSE), tous deux désactivés par défaut.

- **Sélection par type** — les identifiants intégrés sont répertoriés dans
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). L'absence de valeur signifie que tous les
  types sont sélectionnés (comportement antérieur à l'existence de ce paramètre). Le motif
  `ssn_us` du moteur de requêtes correspond à `ssn`. Les modèles (Minimal, Standard, Financier,
  Brésilien, États-Unis, Complet) ne font que remplir les cases à cocher dans l'interface.
- **Motifs personnalisés** — jusqu'à 20 motifs d'expressions régulières ou à caractères génériques (`*` = jusqu'à 64
  caractères non blancs, `?` = un seul). Les correspondances deviennent `[CUSTOM_REDACTED]`.
  Chaque motif passe par `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) : au maximum 500 caractères, indicateurs limités
  à `g i m s u`, compilation obligatoire, validation par `safe-regex` (pour éviter le
  retour arrière catastrophique), et aucune correspondance autorisée avec une chaîne vide ou un marqueur de masquage.
  Un motif qui échoue est refusé lors de l'enregistrement et des tests, et une ligne stockée
  qui échoue est ignorée à l'exécution au lieu d'être compilée. Les motifs personnalisés ne sont
  exécutés que lorsque le masquage est activé.
- **Compteurs de détection** — nombres par type (jamais les valeurs détectées), conservés en
  mémoire et remis à zéro au redémarrage (`src/lib/pii/piiDetectionStats.ts`). Ils
  n'augmentent que lorsque le masquage est activé.

Les paramètres sont stockés dans la table `key_value` (espace de noms `pii_settings`,
`src/lib/db/piiSettings.ts`) et sont lus via un cache d'une durée de 1 s. API :

| Méthode | Chemin                   | Objectif                                                                       |
| ------- | ------------------------ | ------------------------------------------------------------------------------ |
| `GET`   | `/api/settings/pii`      | État des indicateurs, `enabledTypes`, `customPatterns`, compteurs de détection |
| `PUT`   | `/api/settings/pii`      | Remplacer `enabledTypes` (`null` = tous) et/ou `customPatterns`                |
| `POST`  | `/api/settings/pii/test` | Tester un motif sur un échantillon d'au plus 8 Ko ; rien n'est stocké          |

Les trois exigent une authentification d'administration et valident le corps avec Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injection de prompt (`promptInjection.ts`)

Détecte les structures malveillantes dans le contenu fourni par l'utilisateur et applique la
politique configurée. Le comportement est déterminé par les variables d'environnement et les options
du constructeur :

| Paramètre        | Variable d'environnement                                                                              | Valeur par défaut | Effet                                                                                                                                                                                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activation       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`            | Lorsque la valeur est `false`, le garde-fou interrompt immédiatement son traitement.                                                                                                                                                                             |
| Mode             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`            | Politique d'injection : `block`, `warn` ou `log`. (`redact` est accepté pour assurer la rétrocompatibilité, mais ne supprime **pas** le texte d'injection ; la réécriture des données personnelles dans les requêtes est contrôlée par `PII_REDACTION_ENABLED`.) |
| Seuil de blocage | option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Gravité minimale requise pour bloquer. Par défaut, le niveau moyen fait uniquement l'objet d'une observation.                                                                                                                                                    |

**Ordre de priorité du mode** (`getMode`) : `options.mode` de l'appelant →
**valeur de remplacement de l'indicateur de fonctionnalité en base de données** pour `INJECTION_GUARD_MODE` (Tableau de bord → Paramètres →
Indicateurs de fonctionnalité) → variable d'environnement `INJECTION_GUARD_MODE` → variable d'environnement `INPUT_SANITIZER_MODE` →
`warn`. Une valeur de remplacement définie dans le tableau de bord est donc prioritaire sur les variables d'environnement ; l'interface des indicateurs de
fonctionnalité contrôle ainsi le garde-fou en cours d'exécution, en temps réel (sans redémarrage). La lecture en base de données dispose d'un mécanisme de repli :
en cas d'erreur, le garde-fou revient au comportement fondé sur les variables d'environnement et, lorsqu'aucune
valeur de remplacement n'est définie, le comportement est identique à une résolution fondée uniquement sur ces variables.

Sources de détection :

1. `sanitizeRequest()` depuis `@/shared/utils/inputSanitizer` (ensemble de détecteurs
   partagés utilisé ailleurs dans le pipeline).
2. `DEFAULT_GUARD_PATTERNS` intégrés (actuellement `system_override_inline` et
   `markdown_system_block`, tous deux de gravité `high`).
3. `customPatterns` facultatifs transmis via les options du constructeur (chaînes, expressions régulières
   ou enregistrements `{ name, pattern, severity }`).

Lorsque `mode === "block"` **et** qu’au moins une détection atteint le seuil de
sévérité, `preCall` renvoie `{ block: true, message: "Request rejected:
suspicious content detected" }`. Dans les modes `warn`/`log`, le garde-fou consigne les détections mais
autorise l’appel. La fonction utilitaire partagée `evaluatePromptInjection()` est également exportée
pour les appelants qui doivent évaluer les prompts sans passer par le registre.

**Limite d’analyse (v3.8.20) :** le détecteur n’inspecte que les **16 premiers Ko** du
texte concaténé des prompts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 octets) dans
`src/shared/utils/inputSanitizer.ts`. `detectInjection()` et
`evaluatePromptInjection()` appliquent tous deux `slice(0, MAX_INJECTION_SCAN_BYTES)` avant d’exécuter
la boucle de vérification des motifs. Les directives d’injection se trouvent près du début des données d’entrée ; cette
limite réduit donc la charge CPU et GC des expressions régulières sur les charges utiles de plusieurs centaines de Ko sans affaiblir la détection (cf.
#3932, #4041).

### Masqueur d’identifiants (`credentialMasker.ts`)

S’exécute aux **deux** étapes, en dernier dans la chaîne par défaut (priorité `95`). Masque
les motifs connus de clés API et de jetons secrets dans la charge utile sortante (contenu
des messages, arguments des appels d’outils, résultats des outils) **et** dans la réponse du fournisseur, afin qu’un
identifiant collé dans un prompt (ou renvoyé dans le résultat d’un outil) ne soit divulgué
ni au fournisseur en amont ni au client.

- **Activation explicite uniquement**, selon la même convention que le masquage des données personnelles (proche de la règle stricte #20) :
  désactivé sauf si `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Lorsqu’il est désactivé, le garde-fou est sans effet —
  il ne bloque jamais et ne réécrit jamais rien.
- `redactCredentials()` parcourt l’arborescence complète de la charge utile ou de la réponse (`walkValue()`,
  avec protection contre la pollution de prototype et contre les cycles via `WeakSet`) et remplace les correspondances par
  un marqueur `[REDACTED:<type>]`, en ne clonant que les branches effectivement
  modifiées.
- `CREDENTIAL_PATTERNS` couvre les clés des fournisseurs de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), les jetons VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), les clés de paiement (Stripe, Square), les clés
  cloud (clé d’accès AWS, Twilio, SendGrid, Mailgun), les clés privées et les JWT,
  les chaînes de connexion contenant des identifiants (`mongodb://user:pass@...`, etc.), ainsi qu’un
  motif générique de valeur d’en-tête `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Les clés correspondant à des noms d’en-têtes (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sont masquées structurellement (valeur uniquement, avec conservation du préfixe de schéma tel que
  `Bearer `/`Basic `) plutôt qu’au moyen de l’expression régulière générique appliquée au texte.
- Le garde-fou ne bloque jamais ; il se contente de réécrire (`modifiedPayload` /
  `modifiedResponse`) et d’annoter (`meta.credentialsRedacted`, `meta.count`).

Test de non-régression : `tests/unit/credential-masker-guardrail.test.ts`.

## Contrat de base (`base.ts`)

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
  block?: boolean; // true interrompt la chaîne
  message?: string; // affiché en cas de blocage
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // renvoyé par preCall pour réécrire la requête
  modifiedResponse?: TValue; // renvoyé par postCall pour réécrire la réponse
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

Un garde-fou signale l'absence de modification en renvoyant `void`, `{}` ou
`{ block: false }`. Le renvoi de `modifiedPayload`/`modifiedResponse` remplace
la valeur transmise dans la chaîne aux garde-fous suivants.
`signal?: AbortSignal` transmet le cycle de vie de l'appelant aux garde-fous. L'annulation d'une requête constitue l'exception délibérée au blocage en cas d'échec : les passerelles multimédias arrêtent leur traitement et libèrent les ressources sans rétablir les médias bruts pour une cible dont on sait qu'elle ne les prend pas en charge.

## Registre (`registry.ts`)

Le singleton `guardrailRegistry` expose :

- `register(guardrail)` — ajoute un garde-fou (ou remplace celui qui porte le même nom normalisé) et
  retrie les garde-fous par ordre croissant de `priority`.
- `clear()` / `list()` — fonctions utilitaires d'administration.
- `runPreCallHooks(payload, context)` — parcourt les garde-fous actifs, transmet la
  charge utile via `modifiedPayload` et s'arrête au premier `block: true`.
- `runPostCallHooks(response, context)` — même déroulement côté réponse.
- `resetGuardrailsForTests({ registerDefaults })` — efface l'état et, si demandé,
  réenregistre les garde-fous par défaut pour garantir l'isolation des tests.

Les deux fonctions d'exécution renvoient `{ blocked, payload|response, results, guardrail?, message? }`
où `results` est un tableau d'enregistrements `GuardrailExecutionResult` contenant
les champs `blocked`, `skipped`, `modified`, `error` et `meta` pour chaque garde-fou,
utiles pour le traçage.

### Désactivation des garde-fous par requête

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrège une
liste dédupliquée des noms de garde-fous à ignorer pour la requête
en cours. Il existe cinq canaux, lus dans cet ordre et fusionnés en une seule liste
(la première occurrence est conservée lors de la déduplication) :

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` dans le corps de la requête (au premier niveau)
3. `metadata.disabledGuardrails` dans le corps de la requête (uniquement lorsque `metadata` est un objet)
4. En-tête `x-omniroute-disabled-guardrails`
5. Ancien en-tête `x-disabled-guardrails`

Les cinq canaux sont fusionnés, y compris les deux en-têtes : l'envoi simultané de
`x-omniroute-disabled-guardrails` et de `x-disabled-guardrails` entraîne l'exclusion de l'union
de leurs listes, et un en-tête moderne vide ne masque plus l'ancien
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corrigé dans
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Les valeurs peuvent être des tableaux de chaînes ou une chaîne séparée par des virgules ; les espaces
en début et en fin de nom sont supprimés, les noms sont normalisés en kebab-case minuscule (`pii_masker` → `pii-masker`), et les entrées vides
sont supprimées. Le résultat est transmis via `context.disabledGuardrails`
au registre, qui ignore les garde-fous correspondants (`skipped: true` dans `results`).

La liste de désactivation ne concerne que le **registre**. Le mode `block` contre l'injection de prompt constitue
une barrière obligatoire : le middleware de protection contre les injections
(`src/middleware/promptInjectionGuard.ts`) appelle `evaluatePromptInjection()`
sans aucune liste de désactivation contrôlée par l'appelant (l'appel inutilisé à
`resolveDisabledGuardrails({ body })` qu'il effectuait auparavant a été supprimé dans
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), de sorte qu'une requête
qui désactive `prompt-injection` est tout de même rejetée en mode `block`. Ce comportement est
intentionnel. Les canaux de désactivation sont contrôlés par l'appelant (corps de la requête,
métadonnées, en-têtes), et un appelant ne doit pas pouvoir désactiver un contrôle de
sécurité configuré par l'opérateur
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). L'union des en-têtes décrite dans [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
modifie uniquement les garde-fous ignorés dans le registre ; elle ne permet pas à un client
de contourner le middleware. Les politiques de garde-fous obligatoires par clé et par groupe font
l'objet d'un suivi dans la RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Voir [Couverture et limites](#coverage-and-limits).

## Ordre d’exécution

Pour chaque requête passant par `src/sse/handlers/chat.ts` et
`open-sse/handlers/chatCore.ts` (les routes de la famille chat répertoriées sous
[Couverture et limites](#coverage-and-limits)) :

1. `resolveDisabledGuardrails(...)` construit la liste des garde-fous à ignorer à partir de la clé API, du corps
   et des en-têtes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` exécute les garde-fous par ordre
   de priorité croissant :
   - Les garde-fous désactivés sont enregistrés comme `skipped`.
   - Le `preCall` de chaque garde-fou peut réécrire la charge utile via `modifiedPayload`.
   - Le premier `block: true` interrompt la chaîne et le gestionnaire renvoie
     une réponse de rejet par un garde-fou.
3. La charge utile (éventuellement réécrite) passe ensuite au routage des combinaisons et à l’envoi
   vers l’amont.
4. **Sans streaming uniquement :** une fois la réponse assemblée,
   `guardrailRegistry.runPostCallHooks(...)` exécute la même chaîne sur la
   réponse. Ici, `block: true` supprime la réponse amont et renvoie HTTP 400. Les réponses en streaming ignorent entièrement cette étape.

Les garde-fous qui lèvent une exception sont enregistrés avec `error: <message>` et journalisés via
`logger.warn`, mais la chaîne continue — un fonctionnement permissif en cas d’erreur, par conception.

## Couverture et limites

Le registre des garde-fous est intégré uniquement au pipeline de chat. Ces limites sont
figées par `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` et
`tests/unit/guardrail-pipeline-characterization.test.ts` ; mettez ces tests à jour
de manière délibérée lorsque le comportement change.

### Où les hooks s’exécutent

| Hook / contrôle                                             | S’exécute sur                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                           | Les requêtes traitées par `handleChat` (`src/sse/handlers/chat.ts`) : `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (et `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, ainsi que le proxy de chat Telegram. Également le point de terminaison de test du tableau de bord `/api/guardrails/test`. Un blocage avant appel renvoie HTTP 400. |
| `runPostCallHooks`                                          | Les réponses de chat **sans streaming** uniquement (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Les réponses en streaming ne l’atteignent jamais.                                                                                                                                                                                                                                                                                                                  |
| Données personnelles en streaming                           | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), intégré au pipeline dans `streamingPipeline.ts` lorsque `PII_RESPONSE_SANITIZATION` est activé. Ce n’est pas un garde-fou ; les mécanismes de désactivation ne l’affectent donc pas.                                                                                                                                                                                                                            |
| Middleware de protection contre les injections (historique) | Toutes les routes `/v1` contenant un prompt, y compris celles de la famille chat (voir la [couverture des routes](#injection-guard-route-coverage--red-team-phase-8--block-d)). Injection de prompt uniquement.                                                                                                                                                                                                                                                               |

### Ce qui n’est pas couvert

- **Les routes de médias, de plongements et de données** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) n’atteignent jamais le registre. Aucun
  masquage des données personnelles, masquage des identifiants ou pont de modalités ne s’y exécute. Leur seul
  contrôle est le middleware historique de protection contre les injections.
- **Les réponses en streaming** ne bénéficient d’aucun garde-fou après appel : ni `pii-masker` ni
  `credential-masker` après appel, et aucun blocage après appel. Seule la transformation des données personnelles
  en streaming s’applique (lorsque `PII_RESPONSE_SANITIZATION` est activé). Un identifiant
  renvoyé dans une réponse en streaming n’est pas masqué.
- **Mécanismes de désactivation et middleware (par conception) :** le middleware évalue
  l’injection de prompt avec son propre appel à `evaluatePromptInjection()`, sans
  transmettre de liste de désactivation contrôlée par l’appelant. Le mode `block` constitue une
  barrière obligatoire que les désactivations contrôlées par l’appelant ne peuvent pas contourner, y compris sur les routes de la famille chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Désactiver
  `prompt-injection` ignore uniquement le garde-fou du registre.

### Ce qui accède à une réponse avant les garde-fous après appel

Dans le traitement sans streaming, l’ordre est le suivant : extraction de mémoire → exécution des outils
intégrés → garde-fous après appel → sortie en cas de blocage après appel → stockage dans le cache sémantique.

- **L’extraction de mémoire** et **l’exécution des outils** ont accès à la réponse avant que les garde-fous
  post-appel puissent la réécrire ou la bloquer. Depuis
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), l’extraction de
  mémoire fait passer le texte extrait par `sanitizePII` lorsque
  `PII_RESPONSE_SANITIZATION` est activé (en mode streaming comme sans streaming), mais une
  réponse bloquée ultérieurement par les garde-fous post-appel a tout de même déjà été transmise à la mémoire et aux
  outils.
- **Le cache sémantique** stocke la réponse après l’application des garde-fous post-appel : il stocke donc la
  réponse réécrite, et une réponse bloquée n’est jamais mise en cache. Les entrées du cache sont
  indexées par clé d’API.

## Configuration

Variables d’environnement lues par les garde-fous intégrés :

| Variable                              | Utilisée par           | Effet                                                                                                                                                                |
| ------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Définir sur `false` pour désactiver entièrement la détection.                                                                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Politique d’injection : `warn`, `block` ou `log`. L’ancienne valeur `redact` ne réécrit pas le texte d’injection.                                                    |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Mode du garde-fou contre les injections ; également un indicateur de fonctionnalité en base de données qui **prévaut sur** les variables d’environnement (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Niveau de gravité minimal rejeté par `MODE=block` : `high` (par défaut), `medium` ou `low`.                                                                          |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Ancien alias de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Si défini sur `true`, les données personnelles de la requête sont masquées (indépendamment du mode d’injection).                                                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (en aval) | Contrôle le comportement du masquage côté réponse.                                                                                                                   |

Les garde-fous de Modality Bridge lisent la configuration d’exécution depuis le magasin
de paramètres adossé à la base de données (`getSettings()`), et non depuis les variables d’environnement. Les clés principales de Vision sont
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` et
`modalityBridgeCacheMaxEntries`. Les anciennes
clés `visionBridge*` ne sont acceptées que comme solution de repli en lecture
documentée pour un seul cycle ; les écritures depuis le tableau de bord utilisent les clés principales. Les valeurs par défaut et le résolveur de repli
se trouvent dans `src/shared/constants/modalityBridgeDefaults.ts`, tandis que les anciennes
constantes sont conservées dans `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilise `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` et `modalityBridgeAudioMaxClips`, ainsi que les paramètres
partagés `modalityBridgeCache*`. Audio ne dispose d’aucun mécanisme de repli vers d’anciennes clés, car ces
clés ont été introduites avec le schéma de Modality Bridge.

Video utilise `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` et
`modalityBridgeVideoTimeout`, ainsi que les paramètres partagés `modalityBridgeCache*`.
Il est désactivé par défaut, car FFmpeg/ffprobe sont des dépendances d’exploitation
facultatives et la génération de descriptions des images extraites ajoute de la latence et des coûts d’utilisation du modèle.

## Garde-fous personnalisés

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

Étapes :

1. Créez `src/lib/guardrails/myGuardrail.ts` en étendant `BaseGuardrail`.
2. Implémentez `preCall` et/ou `postCall`.
3. Enregistrez le garde-fou au moment de l’importation (depuis `registerDefaultGuardrails`) ou
   appelez `guardrailRegistry.register(...)` à l’exécution — le registre remplace
   tout garde-fou antérieur portant le même nom normalisé.
4. Ajoutez des tests dans `tests/unit/` (exemples existants :
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Utilisez `resetGuardrailsForTests()` entre les tests pour repartir d’un état connu.
Passez `{ registerDefaults: false }` pour démarrer avec un registre vide et
n’enregistrer que les garde-fous à tester. Vision Bridge accepte l’injection
de dépendances (`deps.getSettings`, `deps.callVisionModel`) ; Audio Bridge expose des
points d’injection équivalents pour les paramètres, les capacités, la sélection du modèle STT,
la vérification des identifiants et la transcription. Les tests peuvent ainsi couvrir les deux flux sans accès
à une base de données ni au réseau.

## Voir aussi

- `src/lib/guardrails/` — implémentation
- `src/shared/utils/inputSanitizer.ts` — détecteur partagé assurant
  la détection des injections de prompt et le masquage des données personnelles
- `src/shared/constants/visionBridgeDefaults.ts` — valeurs par défaut de Vision Bridge et
  liste des modèles pour lesquels le pont est imposé
- `src/shared/constants/modalityBridgeDefaults.ts` — valeurs par défaut partagées à l’exécution pour Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — couche indépendante (disjoncteur, délais de récupération)
- `docs/reference/ENVIRONMENT.md` — référence complète des variables d’environnement

## Couverture des routes par la protection contre les injections et tests offensifs (Phase 8 · Bloc D)

La protection contre les injections (`createInjectionGuard` / `withInjectionGuard`) couvre toutes les routes
qui acceptent des prompts utilisateur. Elle respecte `INJECTION_GUARD_MODE` (par défaut, `warn` = journalisation uniquement ;
`block` = renvoie HTTP 400 `SECURITY_001`).

| Type             | Routes                                                                                                                                               | Mode par défaut |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Texte (existant) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Génératif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Données          | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

L’extraction du texte (`extractMessageContents`) couvre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Tests offensifs (chaque nuit, `nightly-llm-security.yml`) :** promptfoo vérifie que chaque route bloque
le corpus OWASP-LLM avec `INJECTION_GUARD_MODE=block` ; garak exécute des sondes (exécution ignorée en l’absence de secret).
`moderations` est inclus par souci de cohérence. Le mode de blocage constitue une barrière obligatoire : `evaluatePromptInjection()`
ignore la liste de désactivation par requête que lui transmet le middleware ; `disabledGuardrails` ne
permet donc **pas** d’en exempter une route ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Le workflow nocturne (`.github/workflows/nightly-llm-security.yml`, déclenchement cron + manuel)
comporte deux tâches :

- **`promptfoo-guard` (bloquante)** — exécute `promptfoo eval -c promptfooconfig.yaml`
  avec `INJECTION_GUARD_MODE=block`. Chaque cas malveillant (par exemple, « ignore toutes
  les instructions précédentes… », contournements de type DAN) vérifie que la réponse contient
  `error.code === "SECURITY_001"`, c’est-à-dire que la protection a effectivement rejeté la requête.
- **`garak` (à titre indicatif)** — exécute garak `--probes promptinject,dan,leakreplay`
  sur une instance locale d’OmniRoute (`http://localhost:20128/v1`). Son exécution dépend de la présence d’un
  secret de fournisseur (`PROMPTFOO_PROVIDER_KEY`) ; elle est ignorée proprement en son absence et la commande se termine par
  `|| true`, afin de produire un rapport sans faire échouer la CI.

La couverture des fonctions utilitaires de protection (`createInjectionGuard` / `withInjectionGuard`)
s’étend à toutes les routes `/v1` contenant un prompt ; le texte du prompt est extrait de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` par
`extractMessageContents()` dans `src/shared/utils/inputSanitizer.ts`.

# Guardrails (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte de verdade:** `src/lib/guardrails/`
> **Última atualização:** 2026-10-17 — v3.8.52 (adicionado [Cobertura e limites](#coverage-and-limits):
> as rotas e os caminhos de resposta que os ganchos alcançam, os cabeçalhos de desativação combinados (#16412), o modo de bloco
> de injeção como um limite obrigatório (#16413) e o que visualiza uma resposta antes de post-call)

Os guardrails impõem segurança, políticas e transformações de conteúdo no limite entre o OmniRoute e os fornecedores _upstream_. Cada guardrail pode inspecionar (e opcionalmente rejeitar, transformar ou anotar) payloads de pedidos (`preCall`) e respostas _upstream_ (`postCall`).

O sistema é **fail-open**: se um guardrail lançar um erro durante a execução, o registo regista o erro e continua com o seguinte guardrail em vez de fazer falhar o pedido. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.
A única exceção é um pedido anulado: quando o `signal` do chamador é anulado,
um guardrail que lance um erro rejeita a execução do gancho em vez de ser ignorado.

Os ganchos **não** são executados em todas as rotas ou em todas as respostas. Leia
[Cobertura e limites](#coverage-and-limits) antes de confiar num guardrail como um
controlo de segurança.

## Guardrails Integrados

O registo carrega automaticamente seis guardrails por ordem de prioridade na importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Estágio(s)     | Ficheiro              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Os números de prioridade mais baixos são executados **primeiro**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

O modelo base GLM 5.3 e `glm-5.3-{low,high,max}` possuem metadados
explícitos de registo/especificação `supportsVision:false`. As variantes do GLM 5.3 Flash
continuam a ser modelos de visão nativos. A rota `/v1/messages` do Claude Code entra na
cadeia partilhada de guardrails pré-chamada `handleChat` **antes** da tradução de Claude para OpenAI;
as imagens de resultados de ferramentas `Read` aninhadas devem ser descritas ou tratadas
antes que essa tradução as eleve para o conteúdo `image_url` da OpenAI (#17069).

Intercepta pedidos com imagens direcionados a **modelos sem visão** e redireciona
todo o pedido para um modelo com capacidade de visão ou substitui as partes da imagem
por descrições de texto produzidas por um modelo de visão configurável antes da chamada
a montante. Isto permite que fornecedores exclusivamente de texto processem payloads
multimodais de forma transparente.

Fluxo:

1. Ignora se o modelo de destino já suportar visão (a menos que apareça na
   lista de pontes forçadas `isVisionBridgeForcedModel`).
2. Extrai partes de imagem através de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega no **detetor de média unificado**
   `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a única fonte de verdade
   partilhada com o filtro de compatibilidade de combinações.
   A extração está restrita por lista de permissões às formas que `replaceImageParts` pode unir
   novamente (o contrato de extração↔substituição): `image_url` da OpenAI, `source.type:"base64"`
   em base64 da Anthropic, `source.type:"url"` em URL da Anthropic e `input_image` da Responses
   API. As imagens coincidentes aninhadas dentro de `tool_result.content` do Claude Code
   e de saídas de ferramentas da Responses também são extraídas e substituídas
   nos seus caminhos originais; formas apenas indicadoras são material do filtro de combinações
   e não são extraídas.
   Ignora se nenhuma for encontrada.
3. Resolve a configuração em tempo de execução através de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): as novas chaves de definição `modalityBridge*`
   prevalecem; as chaves legadas `visionBridge*` permanecem como um **fallback de um ciclo**
   (janela de reversão). Ignora antes de qualquer travessia de média quando a ponte está desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, ver tabela abaixo) decide
   entre redirecionar e descrever. O redirecionamento devolve `modifiedPayload` com apenas o `model`
   trocado, além dos metadados `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limita as imagens a `maxImages`, compõe o prompt sensível à tarefa,
   consulta a cache de descrição, chama o modelo de visão **em paralelo**
   (`Promise.allSettled`) e injeta partes de texto `[Image N]: <description>` no
   respetivo lugar. Uma descrição falhada produz `null`: a imagem em bruto é preservada para
   destinos desconhecidos/com capacidade de visão (#4012), mas um **destino direto confirmado apenas de texto**
   ou uma combinação sem visão obtém um texto predefinido explícito
   `(unavailable — no vision-capable provider connected)` para cada imagem não descrita,
   incluindo falhas parciais e imagens além do limite de chamadas de descrição (#17069).
   O fallback de descrição de combinação com falha total existente
   permanece ativo (#8430).
6. Devolve `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Predefinição | Comportamento                                                                                                                                                                                                                                                                                                                             |
| ---------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔            | Heurística legada, inalterada (#6640/#7204): os modelos non-combo/`auto/` são reencaminhados para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (caso em que descreve); os destinos combo descrevem sempre.                                                                                    |
| `describe` |              | Descrever sempre — o bloco de reencaminhamento é ignorado por completo; o modelo escolhido pelo utilizador responde sempre.                                                                                                                                                                                                               |
| `reroute`  |              | Forçar reencaminhamento: a proteção do modelo com credenciais é ignorada. A proteção de credenciais do **destino** de reencaminhamento continua a ser aplicada — quando não existe nenhum destino de visão utilizável, a ponte bloqueia com um erro claro em vez de descrever ou enviar imagens em bruto para um destino apenas de texto. |

Os modos forçados interrompem a execução **antes** de a heurística auto ser executada; o comportamento de `auto` é idêntico em termos de bytes à barreira de proteção anterior ao PR-1.

#### Âmbito da chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do chamador restringe `allowedConnections`, conjuntos de quotas (`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte seleciona apenas modelos de reencaminhamento e descrição que a chave pode utilizar, em ligações que a chave pode utilizar. A chamada de descrição passa então sempre pelo _self-loop_ do OmniRoute com o cabeçalho `x-omniroute-self-loop-key-id`, para que o pedido de chat receptor volte a aplicar a política de ligação e de modelo dessa chave. `enforceApiKeyPolicy()` honra esse cabeçalho apenas em conjunto com o _bearer_ do _self-loop_, pelo que só pode restringir o acesso, e um ID que não se resolva é rejeitado.

Se nenhum modelo de visão for permitido para a chave, um **destino confirmado apenas de texto** rejeita o pedido de imagem localmente com um erro HTTP 400 claro, em vez de reencaminhar os bytes da imagem para um upstream incapaz (#17069). Para destinos com capacidade de visão desconhecida ou nativa, o caminho de descrição mantém o seu comportamento anterior de falha aberta (_fail-open_) (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Os pedidos sem chave e as chaves sem estas restrições comportam-se exatamente como antes.

#### Instrução de descrição consciente da tarefa (`modalityBridgeVisionTaskAware`)

Predefinição **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) acrescenta o texto da **última mensagem do utilizador** (truncada para 500 caracteres) à instrução de descrição base, orientando a descrição para aquilo que o utilizador realmente pediu (padrão `codex-vision-proxy`) e solicitando ao modelo de visão que transcreva o texto visível. Com a flag desativada — ou se não houver texto do utilizador —, a instrução base é utilizada sem alterações.

O próprio pedido compatível com a OpenAI do _self-loop_ de descrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) solicita sempre `image_url.detail: "high"` —
incondicionalmente, para cada chamador/fornecedor, sem estar condicionado a nenhum sinal do cliente. A amostragem de baixo detalhe degrada a precisão de OCR exatamente para a tarefa de transcrição de texto solicitada por esta instrução, pelo que a própria chamada de descrição solicita sempre um nível de detalhe elevado, independentemente do nível de detalhe utilizado pelo pedido de entrada original. Isto afeta apenas o corpo do pedido de descrição interno; não altera a forma como o OmniRoute reencaminha o próprio `image_url.detail` do chamador no pedido principal — essa predefinição é aplicada separadamente, e apenas para clientes OpenCode detetados, em `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). A ramificação de formato de transmissão da Anthropic do _self-loop_ de descrição não tem nenhum campo `detail` e não é afetada por nenhuma das predefinições.

#### Limite de saída da descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Predefinição | Intervalo        |
| ------------------------------ | ------------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` ou 100–50000 |

`0` (por omissão) significa **sem limite** — a descrição devolvida por
`callVisionModel()` é transmitida sem modificações, preservando o comportamento existente. Qualquer valor no intervalo 100–50000 trunca a descrição com um sufixo `…` antes de ser inserida novamente como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente este valor para tarefas de OCR densas em detalhes em que o modelo a jusante necessite da transcrição completa; reduza-o para limitar a utilização de tokens em modelos de visão prolixos. O campo do painel de controlo encontra-se no painel Avançado do separador Vision
(`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e limita qualquer
valor entre 1 e 99 para o limite mínimo de 100, deixando um `0` explícito
inalterado — `0` é um valor Zod válido por direito próprio
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), e não apenas
a predefinição de "não definido".

#### Cache de descrições (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para saídas de descrição, partilhada a nível de processo.
Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com
enquadramento de prefixo de comprimento (sem colisões de limites de campos). O componente do modelo é o modelo de ponte **configurado**, e não o modelo que respondeu efetivamente — `callVisionModel` pode recorrer a uma alternativa internamente, e indexar por tentativa fragmentaria a cache. As descrições falhadas nunca são colocadas em cache. Definições:

| Chave                           | Predefinição | Intervalo |
| ------------------------------- | ------------ | --------- |
| `modalityBridgeCacheEnabled`    | `true`       | —         |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000   |

#### Normalização de imagens remotas (describe em self-loop/busca base64)

Quando a bridge obtém uma imagem **remota** por si própria — a auto-chamada de describe da Anthropic e a conversão base64 do formato claude-wire (`ensureBase64ImagesForClaudeWire`), ambas através de `fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados resultante passa por `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) antes de ser incorporado no pedido do modelo de visão. As imagens sobredimensionadas são redimensionadas para um **limite de 2048px no lado mais longo** (correspondendo ao limite de redimensionamento que a OpenAI/Anthropic já aplica no lado do servidor), o que reduz os bytes de upload e a latência sem alterar o que o modelo de visão vê. O redimensionamento utiliza `sharp`, carregado através de importação dinâmica: numa plataforma onde o respetivo binário nativo falha ao carregar, `normalizeDataUri()` **nunca lança um erro** — recorre a uma passagem direta (passthrough) dos bytes originais, para que o caminho de describe/conversão para base64 continue sempre a funcionar. Os bytes que não são imagens (uma busca que não devolveu uma imagem descodificável) também passam sem alterações. Esta normalização está limitada às imagens que a bridge obtém para a sua própria auto-chamada — nunca é aplicada ao payload bruto de passthrough do chamador, de acordo com o princípio de mutação estritamente opcional (_opt-in-only mutation principle_ - Hard Rule #20).

#### Esquema de definições + migração

As novas chaves `modalityBridge*` são validadas por Zod em `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, o trio `modalityBridgeCache*` e o grupo `modalityBridgeAudio*` utilizado pela Audio Bridge. A migração `141_modality_bridge_settings.sql` copia os valores legados existentes de `visionBridge*` para as novas chaves correspondentes (idempotente, nunca sobrescreve um valor de `modalityBridge*` definido pelo operador); as chaves legadas continuam a ser aceites como alternativa de leitura (_read fallback_) durante um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas por describe transportam `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (criado por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`, carimbado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`). Os pedidos reencaminhados **não** recebem nenhum cabeçalho — o payload não foi alterado e a troca de modelo já está visível no campo `model` do corpo da resposta.

`GET /api/modality-bridge/stats` (autenticação de gestão, do mesmo nível que `GET /api/settings`) devolve os contadores em memória por modalidade `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e `video`. `averageLatencyMs` utiliza `latencySamples`, e não todas as tentativas, como denominador; uma operação sem temporização não inventa uma amostra de zero milissegundos. `bridged` continua a ser o alias compatível com versões anteriores para conversões bem-sucedidas; as tentativas falhadas não o incrementam. Os contadores são reiniciados no reinício do processo por desenho (telemetria, e não contabilidade).

#### Configuração do Dashboard

A página dedicada do dashboard é `/dashboard/settings/modality-bridge`. Os seus separadores `Vision`, `Audio` e `Video`, acessíveis por URL, preservam os parâmetros de consulta (_query parameters_) ao alternar o valor de `tab`. O separador Vision expõe a ativação, o modo, a seleção de modelo (incluindo a predefinição automática), _prompts_ com consciência de tarefas (_task-aware prompting_), limites avançados de tempo limite/imagem/comprimento da descrição/cache, contadores de tempo de execução e um pedido de exemplo protegido. O separador Audio também está ativo: expõe a ativação, um seletor de modelo exclusivo para STT com a opção Auto, limites de tempo limite/tamanho máximo de clipe, contadores de áudio e um teste de exemplo `input_audio`. O separador Video é funcional: reporta o estado de execução do FFmpeg/ffprobe — um de quatro estados explícitos da interface (`unknown` enquanto a análise está em curso ou não pôde ser concluída, `restricted` num anfitrião de dashboard non-loopback onde a análise é ignorada no lado do cliente, `unavailable` após ser analisado e confirmado em falta, ou `available` com as versões do FFmpeg/ffprobe) — persiste os limites de ativação/modelo/quadro/vídeo/tempo limite, filtra o seletor de modelos para modelos compatíveis com visão e expõe contadores de vídeo.

O antigo cartão Vision Bridge nas definições de IA é uma ligação de compatibilidade para a nova página; deixa de possuir uma segunda cópia do formulário. Os Fornecedores de Multimédia (_Media Providers_) também ligam os fluxos de trabalho de Imagem para Texto e Fala para Texto aos separadores correspondentes da Modality Bridge, sem remover o _playground_ existente de Fala para Texto.

**Contorno de admissão por self-loop:** quando a chamada de describe é encaminhada através do self-loop `/v1` da própria OmniRoute (modelo de fornecedor não padrão), o subpedido envia `x-omniroute-admission-bypass: internal` e é autenticado com a credencial de self-loop resolvida — o _sentinel_ local `sk_omniroute` em modo local, ou a chave de ambiente configurada pelo operador `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) para que implementações com `REQUIRE_API_KEY=true` possam continuar a executar a chamada de describe. O contorno apenas é honrado para essas credenciais exatas, pelo que clientes externos não podem utilizar o cabeçalho para ignorar a admissão.

Os valores predefinidos legados encontram-se em `src/shared/constants/visionBridgeDefaults.ts`; os novos valores predefinidos de modo/consciência de tarefas/cache e o gestor de definições encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`. O mecanismo de salvaguarda expõe uma opção de construtor `deps` para que os testes possam injetar implementações falsas de `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceta pedidos de chat que contêm áudio antes de estes chegarem a um destino que não aceite entrada de áudio. Nunca reencaminha o pedido de chat: as partes de áudio são transcritas através do ponto final (_endpoint_) multipart compatível com a OpenAI existente e o modelo de chat escolhido continua com transcrições em texto.

Fluxo:

1. Resolve `supportsAudio` através de `getResolvedModelCapabilities()`. Os metadados explícitos do registo de fornecedores têm prioridade, seguidos pelos metadados estáticos do modelo e, por fim, por `modalities_input` sincronizado. Uma lista de entradas declaradas sem `audio` é `false`; se não existirem provas de capacidades, o valor permanece `null`. Tanto `false` como `null` ativam a ponte conservadora, enquanto `true` ignora-a.
2. Resolve as definições de `modalityBridgeAudio*` e extrai as partes de áudio de nível superior passíveis de junção de cada mensagem através do detetor partilhado `detectMediaParts()`. As formas de rede suportadas são `input_audio`, `audio_url` e `source.media_type: "audio/*"` da OpenAI. O áudio aninhado é detetado para efeitos de encaminhamento, mas não é removido pelo caminho de junção. O trabalho é limitado por `modalityBridgeAudioMaxClips`; as partes posteriores permanecem inalteradas.
3. Respeita um `provider/model` configurado ou permite que `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` na ordem estável do catálogo e selecione o primeiro modelo com uma credencial de fornecedor ativa e utilizável.
4. `callAudioTranscription()` converte áudio base64/data-URI num `file` multipart, ou descarrega um `audio_url` remoto através da guarda de tráfego de saída estritamente pública com fixação de DNS e um limite de 25 MB. Em seguida, envia um pedido POST com o ficheiro e o modelo selecionado para o "self-loop" local `/v1/audio/transcriptions`, autenticado com `resolveSelfLoopBearer()`. A rota de transcrição existente executa a pesquisa normal de credenciais, a gestão de arrefecimento/limitação de taxa e o encaminhamento para o fornecedor.
5. As chamadas bem-sucedidas substituem as respetivas partes por `[Audio N]: <transcript>`. As chamadas são executadas com `Promise.allSettled`: uma falha individual preserva essa parte de áudio original (contrato #4012). Se todas as chamadas falharem e se provar que o destino tem `supportsAudio === false`, as partes tornam-se `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para um destino desconhecido (`null`), um resultado em que todas as chamadas falham permanece inalterado. Um destino comprovadamente apenas de texto sem nenhuma credencial de STT utilizável recebe o mesmo aviso explícito sem efetuar uma chamada de rede.

As transcrições bem-sucedidas utilizam a cache LRU/TTL global do processo do Modality Bridge. A chave combina a referência de áudio, o rótulo de operação estável `audio-transcription` e o modelo de STT selecionado; as falhas nunca são colocadas em cache. As tentativas de áudio atualizam os contadores partilhados `bridged`, `cacheHits`, `failures` e `lastUsedAt`. As respostas transformadas incluem `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; os pedidos não modificados não recebem um segmento do Audio Bridge.

As definições de runtime são suportadas por base de dados e validadas por Zod:

| Chave                         | Predefinição | Intervalo      |
| ----------------------------- | ------------ | -------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —              |
| `modalityBridgeAudioModel`    | `""`         | Auto ou STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10           |

A cache partilhada continua a ser controlada por `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceta as partes de vídeo de nível superior em `messages` de Chat Completions e `input` da Responses API antes de ser chamado um destino sem suporte nativo de vídeo conhecido. As formas suportadas são `input_video`, `video_url`, `video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Os nomes de ficheiros simples no texto não são tratados como vídeo.

O `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia do pedido, pela verificação de capacidades/políticas, pela agregação por pedido e pelo payload de resposta. O trabalho por vídeo — aquisição, a cache do resultado completo, a descrição de uma sequência de fotogramas (que funde qualquer transcrição de áudio declarada pelo chamador) e as métricas/interrupção/limpeza por tentativa — está oculto atrás de `processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez por parte de vídeo dentro do ciclo de `preCall`. Esse módulo também define os limites de portas explícitos `VideoMediaBrokerPort` (aquisição de bytes e extração de fotogramas amostrados), `VideoAudioTranscriptionPort` (fusão de uma transcrição de áudio declarada pelo chamador com as legendas amostradas) e `VideoDrilldownPort` (o limite de persistência de "drill-down" de fotogramas; ainda não integrado em `processVideoPart` — atualmente, apenas a rota separada `/api/modality-bridge/video/drilldown` escreve entradas de "drill-down").

O caminho de pedidos público `/v1` nunca importa nem invoca um subprocesso. Os vídeos remotos são descarregados com um limite de 50 MiB; os vídeos base64 inline têm um limite conservador de 36 MiB descodificados por vídeo, para que o envelope de modelo/mensagens/enquadramento possa permanecer dentro do limite público de admissão de pedidos JSON de 50 MiB. As estimativas de comprimento inline e de tamanho descodificado são verificadas antes da alocação. O HTTPS é obrigatório no URL remoto inicial e em cada redirecionamento, utilizando a guarda de tráfego de saída exclusivamente pública existente com fixação de DNS. Os bytes cruzam então exatamente o limite interno do broker `POST /api/modality-bridge/video/extract`. Essa rota é simultaneamente `LOCAL_ONLY` e `SPAWN_CAPABLE`, aceita apenas um pedido autenticado por processo num "loopback" de confiança e nunca aceita um URL, caminho de sistema de ficheiros, executável ou lista de argumentos. O pipeline de tamanho de corpo da API e o leitor de corpo incremental do processador aplicam independentemente um limite de entrada do broker de 50 MiB. A sua fila limitada executa uma extração de cada vez, permite quatro trabalhos pendentes e limita a entrada pendente a 100 MiB.

No _broker_, o `ffprobe` lê um ficheiro local privado; a lista de permissões de formato fixa exclui formatos de listas de reprodução e manifesto. Para contentores da família MOV permitidos, as referências de dados MOV externas permanecem desativadas por predefinição, e o comando fixo não as ativa. Tanto o `ffprobe` como o `ffmpeg` utilizam a lista de permissões de protocolo apenas `file`, uma única thread, matrizes de argumentos fixas, sem shell e executáveis resolvidos a partir de `PATH`. Os fluxos de capa do tipo imagem anexada não são candidatos reproduzíveis. Todos os fluxos reproduzíveis devem satisfazer os limites, sendo preferido um fluxo predefinido explícito antes da alternativa de recurso determinística de menor índice. Os vídeos estão limitados a 600 segundos, 8.192 pixéis por dimensão e 33.554.432 pixéis de origem. O FFmpeg amostra 1 a 16 fotogramas JPEG de ponto médio, reduz a aresta longa para no máximo 1.024 pixéis sem aumentar a escala de entradas mais pequenas e nunca recebe um URL. A amostragem é `uniform` por predefinição. As políticas opcionais `scene_aware` e a experimental `segment_aware` efetuam uma passagem fixa adicional do FFmpeg sobre o fluxo local já validado, selecionam marcas temporais de cena `showinfo` delimitadas e recorrem deterministicamente aos mesmos pontos médios uniformes em caso de falha do detetor, _timeout_, saída malformada ou um conjunto de candidatos vazio. O modo sensível a segmentos aloca amostras de ponto médio proporcionalmente aos intervalos de cena validados; a evidência sensível a segmentos e o comportamento de recurso são detalhados abaixo. O limite rígido de 16 fotogramas é aplicado após a seleção em todas as políticas. Quando um pedido sensível a cenas tem apenas um orçamento de um fotograma, utiliza o ponto médio uniforme da janela ativa de vídeo completo ou de foco e reporta `policyEffective: uniform`: um único fotograma de cena selecionado não consegue preservar ambas as extremidades temporais. Um chamador pode opcionalmente fornecer uma janela de foco finita (`start`/`end` segundos); os limites são fixados à duração do suporte multimédia, janelas invertidas ou não finitas são rejeitadas e todas as políticas de amostragem são executadas apenas dentro do intervalo normalizado. A janela resultante é incluída nos metadados de amostragem e no prefixo de descrição não confiável para que os modelos a jusante possam distinguir um excerto focado da linha cronológica completa.

O foco de legenda semântica é uma definição separada e explícita. O modo de análise predefinido `full` preserva a _prompt_ de fotograma existente e nunca reencaminha o texto do pedido para o modelo de legendas. No modo `focused`, a ponte lê apenas o `text`/`input_text` mais recente e não vazio criado pelo utilizador a partir do mesmo contentor Chat ou Responses, normaliza-o para NFC, retrai os carateres de controlo e espaços em branco, e limita-o a 500 pontos de código Unicode. Um resultado vazio recorre exatamente à _prompt_ `full`. Uma sugestão utilizável é serializada como JSON num bloco dedicado de contexto de utilizador não confiável e só pode dar prioridade a detalhes observáveis; não pode sobrepor-se ao aviso separado contra seguir instruções visíveis ou audíveis nos suportes multimédia. O foco textual nunca infere `start`/`end` nem altera a amostragem temporal.

#### Evidência de segmento estrutural FU-07

O `segment_aware` utiliza uma passagem de pré-análise delimitada sobre o fluxo de vídeo local já validado. A cadeia de filtros fixa primeiro dimensiona para uma largura máxima de 320 pixéis, deteta alterações de cena e intervalos congelados, e depois amostra a 1 fotograma por segundo para desfoque, luminância média e informação espacial/temporal. A passagem está limitada a 600 amostras estruturais, uma thread de filtro/FFmpeg, as mesmas listas de permissões de contentor e de protocolo apenas `file`, um limite de saída de processo de 1 MiB e no máximo 30 segundos dentro do prazo limite/anulação partilhado do _broker_. Nunca aceita um comando, filtro, caminho ou URL do pedido.

Os valores estruturais são evidências de amostragem determinísticas, e não compreensão semântica de vídeo. Não inferem sujeitos, ações, legendas, discurso ou intenção do utilizador. Os limites de cena e de congelamento formam segmentos; a cobertura de congelamento, o desfoque, a exposição, o detalhe espacial e a alteração temporal influenciam apenas a forma como o orçamento existente de 1 a 16 fotogramas é alocado. Um segmento totalmente congelado tem o limite de um fotograma, enquanto os segmentos não congelados concorrem pelo orçamento restante. Quando os limites superam o número de fotogramas, a cobertura uniforme da linha cronológica é mantida para que cortes iniciais rápidos não consigam ocultar um segmento final longo. Os limites de cena dentro da resolução de análise de 1 segundo de um limite de congelamento são fundidos.

Filtros em falta, evidências malformadas/vazias, um erro do detetor ou o esgotamento do tempo limite da pré-análise delimitada recorrem à política exata de ponto médio uniforme. Uma anulação por parte do chamador ou um prazo limite do _broker_ não recorre: termina o subprocesso em curso, impede a extração posterior de fotogramas e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera _fixtures_ do FFmpeg reais e determinísticas para poupanças em chamadas de legendas pós-desduplicação, alocação de orçamento de movimento denso, evidências de desfoque/exposição/SI-TI, cortes rápidos com caudas longas e falsos positivos de desvanecimento gradual. Regista o tempo decorrido de pré-análise e, onde `/usr/bin/time` estiver disponível, o CPU do processo filho e o pico de RSS. As respetivas verificações de qualidade são apenas oráculos estruturais. A qualidade real do modelo de legendas permanece `HOLD` porque esta estrutura de teste não tem um ponto final autorizado nem um juiz congelado. As poupanças monetárias também permanecem `HOLD`, a menos que `--caption-cost-per-call-usd` forneça uma estimativa positiva explícita por chamada; o script nunca inventa nenhum dos resultados.

Cada frame está limitado a 4 MiB, todos os frames em bruto em conjunto a 23 MiB, e a resposta serializada do broker a 32 MiB. Um diretório temporário privado é removido em `finally`. O OmniRoute não inclui o FFmpeg empacotado nem aceita um caminho de executável personalizado. Antes da geração de legendas, a bridge aplica uma passagem conservadora de desduplicação visual: cada JPEG é reduzido a um buffer em escala de cinzento de 16×16 e comparado apenas com o último frame retido. Para um orçamento de legendas solicitado superior a um frame, a extração fornece um conjunto delimitado de candidatos até ao dobro desse orçamento e nunca mais de 16 frames. O limite solicitado é aplicado apenas após a desduplicação, sendo o primeiro e o último candidatos selecionados preservados durante o desbaste final quando o orçamento for de pelo menos dois. A política versionada `grayscale-16x16-mean-cells-v2` utiliza o maior valor entre o delta de luma médio e o rácio de células de miniaturas cujo delta normalizado é de pelo menos 0,05. O limiar de duplicados é a constante 0,04, escolhida pela previsibilidade em vez de ser exposta como uma definição em tempo de execução. Este sinal secundário de alto contraste preserva pequenos movimentos e alterações de texto visíveis que uma comparação apenas baseada na média pode ocultar. Os erros do comparador ou do descodificador falham de forma aberta e mantêm a cobertura. Os metadados de saída separam os candidatos extraídos, os frames utilizados com sucesso e os duplicados visuais descartados.

Uma parte de vídeo explicitamente marcada pode solicitar uma folha de contacto com carimbo temporal. A bridge constrói uma grelha JPEG de no máximo 4 colunas e 16 frames. Cada célula de 512 píxeis grava o seu carimbo temporal de origem numa faixa inferior de alto contraste, enquanto os mesmos carimbos temporais permanecem nos metadados textuais para associação e auditoria a jusante. O JPEG completo continua limitado a 32 MiB. Se o `sharp` não conseguir descodificar ou compor a grelha, a bridge recorre aos frames JPEG individuais; uma anulação por parte do cliente continua a propagar-se através da operação da folha.

A evidência de promoção é deliberadamente separada do microbenchmark de composição sintética. O ficheiro `scripts/perf/video-bridge-contact-sheet-eval.ts` define uma estrutura de teste A/B versionada por esquema para modelos de visão reais compatíveis com a OpenAI. Mede os tokens reportados pelo fornecedor, a latência global de ponta a ponta (incluindo a composição da folha), a contagem de chamadas ao modelo e a retenção de factos definida no manifesto. As respostas brutas do modelo não são escritas no relatório; apenas são retidos os resumos SHA-256 e os IDs de factos correspondentes. A estrutura de teste não efetua nenhuma chamada de rede ou a modelos pagos, a menos que `--execute-real` seja passado e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa execução real explícita, o seu veredicto legível por máquina permanece `HOLD`; as medições sintéticas de payload/contagem de chamadas isoladas não constituem evidência de promoção.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de vídeo suportada quando já possuem texto alinhado. Cada marca deve conter `text`, um intervalo finito `start`/`end` dentro da duração sondada, e um `source` autorizado (`client`, `embedded` ou `audio-bridge`); `confidence` tem o valor predefinido `1` e deve permanecer entre `0` e `1`. As marcas exatamente duplicadas são colapsadas. O OmniRoute nunca inicia a transcrição a partir destes metadados: as marcas validadas são copiadas para o resultado descrito com a fonte, confiança e intervalo, e são apresentadas como observações não fidedignas juntamente com as legendas dos frames. O texto inválido, fora do intervalo ou sem proveniência é rejeitado em vez de ser misturado no fluxo de legendas. Ambos os canais de transcrição do corpo do pedido normalizam a proveniência fornecida para `client`, incluindo as etiquetas `embedded` ou `audio-bridge` autodeclaradas. Apenas um adaptador pertencente ao servidor pode atribuir essas etiquetas fidedignas através do argumento de código `trustedSource`; um campo JSON do pedido não consegue alcançar esse argumento. O texto da transcrição continua a ser conteúdo não fidedigno derivado de multimédia, independentemente da sua proveniência, e nunca deve determinar a autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo; esta é tratada como texto fornecido pelo cliente, e não como prova de transcrição do servidor. A junção de fusão executa as observações visuais e de áudio sob um único prazo e sinal de anulação, ordena-as numa linha temporal comum, colapsa duplicados exatos e reporta um resultado parcial quando apenas um lado é bem-sucedido. Um `audioTranscript` inválido degrada-se para esse resultado parcial — a descrição visual é mantida e a ramificação de áudio regista um código de falha sanitizado — em vez de fazer falhar todo o vídeo. A disponibilidade por ramificação, o sinalizador parcial e os códigos de falha sanitizados são preservados no resultado descrito, nos metadados de proteção (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nos metadados da cache de resultados e nos contadores de fusão da bridge. O caminho predefinido do Video Bridge não invoca conversão de fala em texto nem descarrega uma segunda cópia de multimédia; sem essa faixa explícita, permanece apenas com vídeo.

**Retenção de transcrições (#12150 P1).** Isto aplica-se automaticamente sempre que o Video Bridge (que é opcional) renderiza um cue de transcrição — não existe nenhum sinalizador de retenção separado. Quando um pedido renderiza qualquer cue de transcrição (um `transcript` declarado pelo chamador ou um `audioTranscript` combinado), o guardrail marca-o como `videoBridgeObserved` e produz uma sombra redigida da descrição do vídeo — uma renderização idêntica em que o corpo de texto livre de cada cue é substituído por `[redacted-video-transcript]`, construída através da substituição do campo de cue estruturado antes de a string ser montada (nunca através da análise do texto aplanado, pelo que nenhum conteúdo de cue — quer seja adversarial ou comum, incluindo corpos que contenham `]` como `[inaudible]`/`[music]` — pode sobreviver). O corpo do pedido do registo de chamadas persistido substitui cada parte de texto derivada de vídeo por essa sombra redigida, correspondida por igualdade de conteúdo; a âncora `fullText` é relida a partir do payload do guardrail pré-chamada finalizado, para que a correspondência continue a ter sucesso após guardrails de cadeia posteriores (as máscaras de PII e de credenciais, prioridades 10/95) reescreverem o texto da descrição no local e após a injeção de system-prompt/handoff/memory remodelar a matriz de mensagens. O corpo enviado a montante para o modelo permanece inalterado. Um pedido observado também não preenche nenhuma Memória durável (a extração derivada tanto do pedido como da resposta é ignorada), pelo que a própria resposta do modelo não pode ecoar texto de transcrição para a Memória.

**Campos de vídeo em bruto (#12430).** Quando a ponte está ativada e o suporte nativo para vídeo é desconhecido ou ausente, os campos `transcript`/`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após uma falha na descrição ou um limite de `maxVideos`. `null` e strings vazias contam; os campos ausentes e os metadados que não são de vídeo não contam. As cópias retidas redigem estes campos ou omitem o pedido, sendo as caches/Memória ignoradas.

Nestes caminhos de fallback, os cues de chamador válidos tornam-se partes `text`/`input_text` suportadas em vez de campos de fornecedor não padrão. Ambas as faixas fornecidas pelo pedido permanecem observações de `client` não confiáveis, com um aviso explícito de que o vídeo não foi descrito e os carateres de data/hora (timestamps) não foram verificados em relação ao suporte multimédia. Os orçamentos existentes de 256 cues / 64 KiB no total e por cue aplicam-se conjuntamente às duas faixas; os timestamps devem enquadrar-se no teto de 600 segundos do broker e em qualquer janela de foco fornecida. As faixas inválidas são descartadas, e não reencaminhadas como texto arbitrário; um elemento irmão válido ainda pode ser utilizado, a menos que o seu orçamento combinado seja excedido. Os campos nulos/vazios não adicionam texto. Nenhuma obtenção de multimédia ou transcrição é adicionada por este fallback. Os campos de extensão de transcrição são removidos do transportador de vídeo de fallback e dos respetivos objetos `video_url`/`source`. A allowlist wire da OpenAI permanece restrita; os transportadores de vídeo com suporte nativo desconhecido continuam disponíveis e os destinos conhecidos apenas de texto mantêm marcadores seguros. As sombras de redação estruturadas protegem o texto da transcrição acrescentado, enquanto o pedido original propriedade do chamador permanece inalterado. Os destinos com suporte nativo e as pontes desativadas retêm o seu comportamento de desvio existente.

Cópias retidas adicionais utilizam o mesmo sinal de pedido observado. O instantâneo do pedido do cliente pré-guardrail em bruto, o pedido pendente em memória e o registo antecipado de pedidos rejeitados substituem estruturalmente os campos de transcrição nas partes de vídeo; os prompts de string sintetizados pelas etapas do pipeline e a transferência de contexto (handoff) são redigidos no destino do corpo do pedido persistido. O marcador `video_content_removed` persistido faz com que a continuação de `previous_response_id` falhe de forma fechada (fail closed) em vez de reconstruir texto que foi intencionalmente descartado. Se um pedido observado perder a sua sombra de redação por parte antes do registo, ou se mesmo uma de várias sombras de vídeo falhar a correspondência após mutações posteriores do pedido, o corpo do pedido retido é omitido por completo em vez de reter uma transcrição parcialmente redigida.

Para um pedido observado, a resposta de um modelo pode citar qualquer porção da transcrição sem um limite de cue estruturado. O `responseBody` do registo de chamadas persistido é, portanto, substituído por um marcador de omissão; o artefato de pipeline detalhado (que pode incluir corpos de montante/cliente e pedaços/chunks de stream) não é retido. As caches semânticas, de idempotência e de reprodução de raciocínio (reasoning-replay) ignoram as leituras e escritas para esse pedido. O pedido do fornecedor e a resposta visível para o cliente permanecem inalterados. Os bytes de keepalive iniciais são drenados do buffer temporário quando o artefato detalhado é omitido. O aviso de EventStream malformado da Kiro reporta apenas a contagem de bytes do payload, nunca o seu conteúdo ou o erro em bruto do analisador (parser) JSON.
Isto não afirma que todos os diagnósticos não relacionados de fornecedores/plugins foram auditados; a varredura mais ampla do destino retido é acompanhada em #11658.

O ciclo de vida interno `/api/modality-bridge/video/drilldown` é um substrato de cache separado, autenticado por loopback/token. Cada operação também requer um ID de principal opaco canónico. Antes de um chamador de produção ser ativado, este deve derivar esse ID a partir do inquilino (tenant) autenticado e nunca deve reencaminhar um valor selecionado pelo cliente. As chaves de cache associam esse principal a IDs canónicos de sessão e de referência de vídeo, armazenam apenas as suas chaves derivadas de SHA-256 e limitam tanto as leituras como a eliminação ao mesmo principal. A cache armazena no máximo 16 fotogramas JPEG derivados por entrada, expira-os após dez minutos e suporta leituras delimitadas `start`/`end` ou a eliminação explícita de sessões.

Cada principal está limitado a 16 entradas e 64 MiB de dados JPEG canónicos. Esses limites são independentes do teto global de 64 entradas / 256 MiB: a pressão de quota do principal remove apenas as entradas menos recentemente usadas desse principal antes de se considerar a remoção LRU global. As entradas expiradas são limpas tanto da contabilização do principal como da contabilização global aquando da atividade da cache, enquanto o cancelamento e a falha de validação não consolidam uma substituição parcial.

A cache rejeita Base64 não canónica, preenchimento excessivo, multimédia não JPEG, JPEGs malformados ou truncados, e JPEGs que produzam um aviso durante uma descodificação limitada de imagem completa com o `sharp`. Reencoda cada imagem aceite como um JPEG canónico, obtém a largura e a altura a partir dos bytes descodificados em vez de confiar nos campos do chamador, e descarta quaisquer bytes políglotas finais em vez de os reter. Apenas o buffer comprimido canónico limitado é imputado a ambas as quotas. O limite JSON wire inclui a sobrecarga de Base64 para o teto de entrada descodificada de 32 MiB. Cada derivação armazenada regista o seu formato/resolução JPEG validado, política de amostragem, versão da derivação, hora de criação, hash de conteúdo calculado pelo servidor e referência de ascendência com hash, além do hash de conteúdo de ascendência do chamador de confiança. O cancelamento é verificado entre as fases assíncronas de descodificação/hash antes do commit atómico da cache.

Esta tranche ainda não liga um produtor de produção à rota nem fornece seleção de variantes de multi-resolução. O caminho de pedido transparente do Video Bridge não incorre, portanto, em trabalho adicional, enquanto a derivação de principal associada ao inquilino e o ciclo de vida multi-resolução completo FU-08 permanecem como trabalho de seguimento explícito em vez de estarem documentados como comportamento completo.

Os fotogramas são legendados sequencialmente com o modelo de Vídeo configurado. Uma anulação de Vídeo vazia herda a definição de Visão; se ambas estiverem vazias, o encaminhador automático de Visão seleciona o modelo com capacidade de visão efetivo. As legendas bem-sucedidas substituem a parte original por um prefixo estável `[Video description:` que também marca o texto como uma observação não confiada derivada de multimédia e indica aos modelos a jusante para não seguirem instruções encontradas no multimédia. As chaves de cache de legendas de fotogramas incluem os bytes JPEG, o prompt, o carimbo de data/hora e o modelo efetivo; apenas as legendas bem-sucedidas são colocadas em cache. As entradas de cache retêm o modelo produtor real bem-sucedido, incluindo um modelo de recurso; a bridge reporta `mixed` quando diferentes fotogramas foram produzidos por modelos diferentes. Uma ocorrência na cache reutiliza essa identidade do produtor em vez de a rebatizar como o plano de encaminhamento solicitado. A cache de resultados de vídeo completo é indexada por cada entrada que altera a saída — prompt, modelo efetivo, política de amostragem, contagem de fotogramas, modo de análise semântica, a impressão digital SHA-256 da dica de foco normalizada, janela de foco, `transcript`, `audioTranscript`, e o sinalizador de folha de contactos — pelo que alterar qualquer uma dessas dimensões resulta numa falha de cache, nunca numa reutilização desatualizada. A versão da política de deduplicação visual, o limiar e a contagem limitada de fotogramas candidatos também são explícitos na chave e nos metadados da cache de resultados; uma alteração de política não pode, portanto, reutilizar uma descrição de vídeo completo desatualizada. Os metadados v4 da cache de resultados mantêm o modo e a impressão digital, nunca a tarefa de utilizador em bruto. Os metadados do guardrail reportam os modos de análise solicitado e efetivo; um modo `focused` solicitado sem texto de utilizador utilizável é reportado como efetivamente `full`.

O guardrail extrai todas as partes de vídeo suportadas, mas descreve no máximo `modalityBridgeVideoMaxVideos`. Para um alvo comprovadamente com `supportsVideo === false`, os vídeos com falha e que excedem o limite tornam-se marcadores de texto seguro explícitos para que nenhum vídeo em bruto sobreviva. Quando a capacidade é desconhecida, essas partes retêm o seu transportador de vídeo; qualquer transcrição de recurso segue a conversão de texto limitada acima. Os alvos com `supportsVideo === true` contornam a bridge. O sinal de anulação do pedido do cliente propaga-se através do descarregamento, da fila do broker, dos subprocessos e das chamadas de legendagem; as anulações param entre vídeos e nunca falham expondo multimédia em bruto.

As definições de runtime são suportadas por base de dados e validadas por Zod:

| Key                                 | Default     | Range / behavior                                                                                              |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opcional, opt-in                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva legendas genéricas; `focused` utiliza o contexto limitado e não confiado do último utilizador |
| `modalityBridgeVideoModel`          | `""`        | Herda o modelo do Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ou proporcional `segment_aware`; a falha do detetor recorre a `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Os valores de timeout de Vídeo persistidos legados acima de 120 segundos são limitados ao prazo limite do broker; novas gravações de definições acima desse limite são rejeitadas.
`GET /api/modality-bridge/video/runtime` requer localidade loopback carimbada de confiança antes da autenticação ou sondagem de runtime, exigindo depois autenticação de gestão. Retorna apenas `available`, versões FFmpeg/ffprobe sanitizadas, e um motivo fixo quando o runtime está indisponível. O endpoint de extração interno não é uma API de carregamento pública: a saturação da fila retorna `503` mais `Retry-After`, uma desconexão do chamador retorna `499`, e o prazo limite fixo do broker retorna `504`. As respostas convertidas adicionam `video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central `x-omniroute-modality-bridge` sem remover os segmentos de Vision ou Audio.

### PII Masker (`piiMasker.ts`)

Corre em **ambas** as fases.

- **`preCall`** clona o payload, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens de string simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos de string `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, a PII detetada é mascarada no payload de saída.
  Isto é independente de `INPUT_SANITIZER_MODE` (que apenas controla a política
  de injeção de _prompt_). Quando o mascaramento está desativado, a chamada regista as contagens de deteção sem reescrever o conteúdo.
- **`postCall`** faz um clone profundo (_deep-clone_) da resposta, executa `sanitizePIIResponse()` juntamente
  com o mascarador da estrutura da Responses-API (`maskResponsesOutput` — abrange
  `output_text` e `output[].content[].text`). Se ocorrer algum mascaramento, a resposta
  modificada substitui a original.

O mecanismo de proteção (_guardrail_) nunca bloqueia; apenas anota (`meta.detections`,
`meta.redacted`) ou reescreve.

#### Seleção por tipo, padrões personalizados e contadores de deteção

**Dashboard → Settings → Security → PII masking** escolhe _o que_ é mascarado. Não
liga o mascaramento: isso continua a ser feito por `PII_REDACTION_ENABLED` (pedido) e
`PII_RESPONSE_SANITIZATION` (resposta + SSE), ambos desativados por predefinição.

- **Seleção por tipo** — os IDs incorporados estão listados em
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Não definido significa todos os
  tipos (o comportamento antes de esta definição existir). O padrão `ssn_us` do motor de
  pedidos mapeia para `ssn`. Os modelos (Minimal, Standard, Financial,
  Brazilian, USA, Full) apenas preenchem as caixas de seleção na IU.
- **Padrões personalizados** — até 20 padrões de regex ou wildcard (`*` = até 64
  carateres que não sejam espaços em branco, `?` = um). As correspondências tornam-se `[CUSTOM_REDACTED]`.
  Cada padrão passa por `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): no máximo 500 carateres, _flags_ limitadas
  a `g i m s u`, tem de compilar, tem de passar em `safe-regex` (retrocesso catastrófico)
  e não deve corresponder a uma cadeia vazia ou a um marcador de posição de mascaramento.
  Um padrão que falhe é recusado ao ser guardado e testado, e uma linha armazenada
  que falhe é ignorada em tempo de execução em vez de ser compilada. Os padrões personalizados apenas
  são executados enquanto o mascaramento está ativado.
- **Contadores de deteção** — contagens por tipo (nunca os valores correspondidos), mantidas em
  memória e repostas no reinício (`src/lib/pii/piiDetectionStats.ts`). Apenas
  aumentam enquanto o mascaramento está ativado.

As definições encontram-se na tabela `key_value` (espaço de nomes `pii_settings`,
`src/lib/db/piiSettings.ts`) e são lidas através de uma cache de 1 s. API:

| Método | Caminho                  | Finalidade                                                                                 |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Estado da _flag_, `enabledTypes`, `customPatterns`, contadores de deteção                  |
| `PUT`  | `/api/settings/pii`      | Substituir `enabledTypes` (`null` = todos) e/ou `customPatterns`                           |
| `POST` | `/api/settings/pii/test` | Simulação (_dry-run_) de um padrão contra uma amostra de no máximo 8 KB; nada é armazenado |

Todas as três requerem autenticação de gestão e validam o corpo com Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injeção de Prompt (`promptInjection.ts`)

Deteta estruturas adversárias em conteúdo fornecido pelo utilizador e aplica a
política configurada. O comportamento é determinado por variáveis de ambiente e opções
do construtor:

| Definição          | Variável de ambiente                                                                                 | Predefinição | Efeito                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ativo              | `INPUT_SANITIZER_ENABLED`                                                                            | `true`       | Quando `false`, o mecanismo de proteção faz um _short-circuit_.                                                                                                                                             |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`       | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceite para retrocompatibilidade, mas **não** remove o texto de injeção; a reescrita de PII no pedido é controlada por `PII_REDACTION_ENABLED`.) |
| Limiar de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Gravidade mínima necessária para bloquear. Medium é apenas de observação por predefinição.                                                                                                                  |

**Precedência de modos** (`getMode`): `options.mode` do chamador →
**substituição por _feature flag_ na BD** de `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Uma substituição no painel (_dashboard_) tem, portanto, prioridade sobre as variáveis de ambiente, permitindo que a IU de _Feature Flags_ controle o mecanismo de proteção em execução em tempo real (sem reinício). A leitura da BD é segura contra falhas (_fail-safe_): se ocorrer um erro, o mecanismo recorre ao comportamento baseado no ambiente e, quando nenhuma substituição está definida, o comportamento é idêntico à resolução apenas baseada no ambiente.

Fontes de deteção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto de detetores partilhado
   utilizado noutros pontos do pipeline).
2. `DEFAULT_GUARD_PATTERNS` incorporados (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com gravidade `high`).
3. `customPatterns` opcionais passados através de opções do construtor (strings, regex
   ou registos `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma deteção atinge o limiar de gravidade, `preCall` devolve `{ block: true, message: "Request rejected: suspicious content detected" }`. Nos modos `warn`/`log`, o guardrail regista a ocorrência, mas permite a chamada. O auxiliar partilhado `evaluatePromptInjection()` também é exportado para chamadores que precisem de avaliar prompts sem passar pelo registo.

**Limite de varrimento (v3.8.20):** o detetor inspeciona apenas os **primeiros 16 KB** do texto de prompt concatenado — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em `src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como `evaluatePromptInjection()` fazem `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de executar o ciclo de padrões. As diretivas de injeção situam-se perto do topo de uma entrada, pelo que isto limita a CPU/GC de expressões regulares em payloads de centenas de quilobytes sem enfraquecer a deteção (cf. #3932, #4041).

### Mascarador de Credenciais (`credentialMasker.ts`)

É executado em **ambas** as fases, sendo o último na cadeia predefinida (prioridade `95`). Mascara padrões conhecidos de chaves de API / tokens secretos do payload de saída (conteúdo da mensagem, argumentos de chamadas de ferramentas, resultados de ferramentas) **e** da resposta do fornecedor, para que uma credencial colada num prompt (ou refletida por um resultado de ferramenta) não seja divulgada ao fornecedor a montante nem de volta ao cliente.

- **Apenas por adesão (opt-in)**, com a mesma convenção da ocultação de PII (adjacente à Regra Rígida #20): desativado a menos que `settings.credentialRedactionEnabled === true` **ou** `CREDENTIAL_REDACTION_ENABLED=true`. Com a opção desativada, o guardrail não faz nada — nunca bloqueia nem reescreve.
- `redactCredentials()` percorre toda a árvore de payload/resposta (`walkValue()`, segura contra poluição de protótipos, segura contra ciclos através de `WeakSet`) e substitui as correspondências por um marcador `[REDACTED:<type>]`, clonando apenas os ramos que sofreram alterações efetivas.
- `CREDENTIAL_PATTERNS` abrange chaves de fornecedores de LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokens VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves cloud (chave de acesso AWS, Twilio, SendGrid, Mailgun), chaves privadas / JWTs, strings de ligação com credenciais (`mongodb://user:pass@...`, etc.) e um padrão genérico de valor de cabeçalho `Authorization`/`x-api-key`/`api-key`/`apikey`. As chaves em formato de cabeçalho (`authorization`, `x-api-key`, `api-key`, `apikey`) são mascaradas estruturalmente (apenas o valor, preservando o prefixo do esquema como `Bearer `/`Basic `) em vez de através da regex de texto genérica.
- O guardrail nunca bloqueia; apenas reescreve (`modifiedPayload` / `modifiedResponse`) e anota (`meta.credentialsRedacted`, `meta.count`).

Proteção contra regressão: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato Base (`base.ts`)

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
  block?: boolean; // true interrompe a cadeia por curto-circuito
  message?: string; // apresentado ao bloquear
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devolvido por preCall para reescrever o pedido
  modifiedResponse?: TValue; // devolvido por postCall para reescrever a resposta
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

Uma guardrail sinaliza "sem alterações" devolvendo `void`, `{}`, ou
`{ block: false }`. Devolver um `modifiedPayload`/`modifiedResponse` substitui
o valor que flui através da cadeia para as guardrails a jusante.
`signal?: AbortSignal` transporta o ciclo de vida do chamador para as guardrails. A anulação de um pedido é a exceção deliberada _fail-open_: as pontes de media interrompem o trabalho e efetuam a limpeza sem restaurar a media em bruto para um destino conhecido por não a suportar.

## Registo (`registry.ts`)

O singleton `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona (ou substitui pelo nome normalizado) uma guardrail e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — percorre as guardrails ativas, propaga o
  payload através de `modifiedPayload` e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — o mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e opcionalmente
  volta a registar os valores predefinidos para um isolamento limpo de testes.

Ambos os executores devolvem `{ blocked, payload|response, results, guardrail?, message? }`
onde `results` é um array de registos `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por cada guardrail,
úteis para rastreio.

### Desativar Guardrails por Pedido

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista sem duplicados de nomes de guardrails que devem ser ignoradas para o pedido
atual. Existem cinco canais, lidos nesta ordem e fundidos numa única lista
(a primeira ocorrência vence na desduplicação):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` no corpo do pedido (ao nível superior)
3. `metadata.disabledGuardrails` no corpo do pedido (apenas quando `metadata` é um objeto)
4. Cabeçalho `x-omniroute-disabled-guardrails`
5. Cabeçalho antigo `x-disabled-guardrails`

Todos os cinco canais são fundidos, incluindo os dois cabeçalhos: enviar simultaneamente
`x-omniroute-disabled-guardrails` e `x-disabled-guardrails` ignora a união das
respetivas listas, e um cabeçalho moderno vazio deixa de ocultar o cabeçalho antigo
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corrigido em
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes
têm os espaços em branco removidos e são normalizados para _kebab-case_ em minúsculas
(`pii_masker` → `pii-masker`), e as entradas vazias são descartadas. O resultado é passado através
de `context.disabledGuardrails` para o registo, que ignora as guardrails correspondentes
(`skipped: true` em `results`).

A lista de desativação afeta apenas o **registo**. O modo `block` de injeção de _prompt_ é
um limite obrigatório: o _middleware_ de proteção contra injeção
(`src/middleware/promptInjectionGuard.ts`) chama `evaluatePromptInjection()`
sem qualquer lista de desativação controlada pelo chamador (a chamada obsoleta
`resolveDisabledGuardrails({ body })` que costumava fazer foi removida em
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), pelo que um pedido
que desative `prompt-injection` continua a ser rejeitado no modo `block`. Isto é
intencional. Os canais de desativação são controlados pelo chamador (corpo do pedido,
metadados, cabeçalhos), e um chamador não deve conseguir desativar um controlo
de segurança definido pelo operador
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). A união de cabeçalhos
de [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
altera apenas quais as guardrails do registo que são ignoradas; não permite que um cliente
contorne o _middleware_. As políticas obrigatórias de guardrails por chave e por grupo são
rastreadas no RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Consulte [Cobertura e limites](#coverage-and-limits).

## Ordem de Execução

Para cada pedido que flui através de `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts` (as rotas da família de chat listadas em
[Cobertura e limites](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` constrói a lista de omissão a partir da chave API, do corpo e
   dos cabeçalhos.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` executa as barreiras de proteção por ordem ascendente
   de prioridade:
   - As barreiras de proteção desativadas são registadas como `skipped`.
   - O `preCall` de cada barreira de proteção pode reescrever o payload através de `modifiedPayload`.
   - O primeiro `block: true` interrompe a cadeia por curto-circuito e o _handler_ devolve
     uma resposta de rejeição da barreira de proteção.
3. O payload (potencialmente reescrito) flui para o encaminhamento combinado (_combo routing_) e despacho ascendente.
4. **Apenas non-streaming:** após a resposta ser montada,
   `guardrailRegistry.runPostCallHooks(...)` executa a mesma cadeia na
   resposta. `block: true` aqui descarta a resposta ascendente e devolve HTTP 400. As respostas em _streaming_ ignoram este passo por completo.

As barreiras de proteção que lançam exceções são registadas com `error: <message>` e registadas através de
`logger.warn`, mas a cadeia continua — tolerante a falhas (_fail-open_) por conceção.

## Cobertura e limites

O registo de barreiras de proteção está integrado apenas no pipeline de chat. Estes limites estão
fixados por `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` e
`tests/unit/guardrail-pipeline-characterization.test.ts`; atualize esses testes
conscientemente quando o comportamento mudar.

### Onde os _hooks_ executam

| Hook / Controlo                                | Executa em                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                              | Pedidos geridos por `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (e `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, e o proxy de chat do Telegram. Também o endpoint de teste do painel `/api/guardrails/test`. Um bloqueio pré-chamada devolve HTTP 400. |
| `runPostCallHooks`                             | Apenas respostas de chat **non-streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). As respostas em _streaming_ nunca chegam a este ponto.                                                                                                                                                                                                                                                                                |
| Streaming PII                                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), encadeado em `streamingPipeline.ts` quando `PII_RESPONSE_SANITIZATION` está ativo. Não é uma barreira de proteção, pelo que os canais de desativação não o afetam.                                                                                                                                                                                                         |
| Middleware de proteção contra injeção (legado) | Todas as rotas `/v1` que contêm _prompts_, incluindo a família de chat (ver [cobertura de rotas](#injection-guard-route-coverage--red-team-phase-8--block-d)). Apenas injeção de _prompt_.                                                                                                                                                                                                                                               |

### O que não é coberto

- **Rotas de multimédia, _embeddings_ e dados** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nunca chegam ao registo. Nenhuma
  máscara de PII, máscara de credenciais ou ponte de modalidade é executada aí. A sua única
  verificação é o middleware legado de proteção contra injeção.
- **Respostas em _streaming_** não recebem barreiras de proteção pós-chamada: sem `pii-masker` ou
  `credential-masker` pós-chamada, e sem bloqueio pós-chamada. Apenas a transformação de PII em streaming
  se aplica (quando `PII_RESPONSE_SANITIZATION` está ativo). Uma credencial
  repetida numa resposta em _streaming_ não é ocultada.
- **Canais de desativação vs. o middleware (por conceção):** o middleware avalia
  a injeção de _prompt_ com a sua própria chamada para `evaluatePromptInjection()`, sem
  passar nenhuma lista de desativação controlada pelo autor da chamada. O modo `block` é um limite
  obrigatório que as desativações controladas pelo autor da chamada não conseguem contornar, incluindo nas rotas da família de chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Desativar
  `prompt-injection` apenas ignora a barreira de proteção do registo.

### O que vê uma resposta antes da pós-chamada

No caminho non-streaming, a ordem é: extração de memória → execução de ferramentas integradas
→ barreiras de proteção pós-chamada → saída de bloqueio pós-chamada → armazenamento em cache semântica.

- **Extração de memória** e **execução de ferramentas** veem a resposta antes de os
  guardrails de pós-chamada a poderem reescrever ou bloquear. Desde o
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), a extração de
  memória processa o texto extraído através de `sanitizePII` quando
  `PII_RESPONSE_SANITIZATION` está ativo (tanto em streaming como em non-streaming), mas uma
  resposta que seja bloqueada posteriormente pela pós-chamada ainda assim foi
  disponibilizada à memória e às ferramentas.
- **A cache semântica** armazena a resposta após a pós-chamada, pelo que armazena a
  resposta reescrita, e uma resposta bloqueada nunca é colocada em cache. As entradas da
  cache são indexadas por chave de API.

## Configuração

Variáveis de ambiente lidas pelos mecanismos de proteção incorporados:

| Variável                              | Utilizado por             | Efeito                                                                                                                             |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Defina como `false` para desativar totalmente a deteção.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Política de injeção: `warn`, `block` ou `log`. O valor legado `redact` não reescreve o texto de injeção.                           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modo para o guardrail de injeção; também uma _feature flag_ da base de dados que **sobrepõe** as variáveis de ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Gravidade mínima que `MODE=block` rejeita: `high` (predefinição), `medium` ou `low`.                                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legado para `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, os PII do pedido são mascarados (independentemente do modo de injeção).                                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controla o comportamento do mascarador no lado da resposta.                                                                        |

Os guardrails do Modality Bridge leem a configuração de execução a partir do armazenamento de definições baseado na base de dados (`getSettings()`), e não das variáveis de ambiente. As chaves principais do Vision são `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`. As chaves legadas `visionBridge*` são aceites apenas como a alternativa de leitura documentada de um único ciclo; as escritas no painel utilizam as chaves principais. As predefinições e o resolvedor de alternativa encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`, com as constantes legadas retidas em `src/shared/constants/visionBridgeDefaults.ts`.

O Audio utiliza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, além das definições partilhadas `modalityBridgeCache*`. O Audio não tem alternativa de chave legada porque estas chaves foram introduzidas com o esquema do Modality Bridge.

O Video utiliza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` e `modalityBridgeVideoTimeout`, além das definições partilhadas `modalityBridgeCache*`. Está desativado por predefinição porque o FFmpeg e o ffprobe são dependências operacionais opcionais e a legendagem de fotogramas adiciona latência e custos de modelo.

## Guardrails Personalizados

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

Passos:

1. Crie `src/lib/guardrails/myGuardrail.ts` a estender `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registe no momento da importação (através de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registo substitui
   qualquer guardrail anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testes

Utilize `resetGuardrailsForTests()` entre testes para iniciar a partir de um estado conhecido.
Passe `{ registerDefaults: false }` para iniciar com um registo vazio e
registar apenas os guardrails sob teste. O Vision Bridge aceita injeção de
dependências (`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge expõe as
junções equivalentes para definições, capacidades, seleção de modelos STT, verificações
de credenciais e transcrição. Os testes podem, por conseguinte, exercutar ambos os
fluxos sem acesso a base de dados nem à rede.

## Ver Também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detetor partilhado que alimenta
  a injeção de prompts e o mascaramento de PII
- `src/shared/constants/visionBridgeDefaults.ts` — predefinições do Vision Bridge e
  lista de modelos de ponte forçada
- `src/shared/constants/modalityBridgeDefaults.ts` — predefinições de runtime partilhadas do Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (circuit breaker, tempos de espera)
- `docs/reference/ENVIRONMENT.md` — referência completa de variáveis de ambiente

## Cobertura de rotas do injection-guard e red-team (Fase 8 · Bloco D)

O injection-guard (`createInjectionGuard` / `withInjectionGuard`) cobre todas as rotas
que aceitam prompts de utilizadores. Respeita o `INJECTION_GUARD_MODE` (predefinição `warn` = apenas registar em log;
`block` = devolve HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo predefinido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Gerativo          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

A extração de texto (`extractMessageContents`) abrange `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (diário, `nightly-llm-security.yml`):** o promptfoo valida que cada rota bloqueia
o corpus do OWASP-LLM com `INJECTION_GUARD_MODE=block`; o garak executa sondas (ignora se não houver segredo).
O `moderations` está incluído por consistência. O modo de bloqueio é um limite obrigatório: `evaluatePromptInjection()`
ignora a lista de desativação por pedido passada pelo middleware, pelo que `disabledGuardrails` **não**
isenta uma rota do mesmo ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

O fluxo de trabalho diário (`.github/workflows/nightly-llm-security.yml`, cron + despacho
manual) tem dois trabalhos:

- **`promptfoo-guard` (bloqueante)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore all
  previous instructions…", fugas ao modelo estilo DAN) valida que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, que o guard de facto rejeitou o pedido.
- **`garak` (consultivo)** — executa o garak `--probes promptinject,dan,leakreplay`
  contra uma instância local do OmniRoute (`http://localhost:20128/v1`). Protegido por um
  segredo de fornecedor (`PROMPTFOO_PROVIDER_KEY`); é ignorado de forma graciosa e tem o sufixo
  `|| true`, pelo que reporta sem falhar a CI.

A cobertura do assistente (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que contêm prompts; o texto do prompt é obtido a partir de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.

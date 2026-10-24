# Guardrails (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte da verdade:** `src/lib/guardrails/`
> **Última atualização:** 2026-10-17 — v3.8.52 (adicionado [Coverage and limits](#coverage-and-limits):
> quais rotas e caminhos de resposta os hooks alcançam, os cabeçalhos de desativação mesclados (#16412), o modo de bloco
> de injeção como um limite obrigatório (#16413) e o que vê uma resposta antes do post-call)

Guardrails aplicam segurança, políticas e transformações de conteúdo no limite
entre o OmniRoute e os provedores upstream. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) payloads de requisição (`preCall`) e
respostas upstream (`postCall`).

O sistema é **fail-open**: se um guardrail lançar um erro durante a execução, o registro
registra o erro e continua com o próximo guardrail em vez de falhar a
requisição. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.
A única exceção é uma requisição abortada: quando o `signal` do chamador é abortado,
um guardrail que lança um erro rejeita a execução do hook em vez de ser ignorado.

Os hooks **não** são executados em todas as rotas ou em todas as respostas. Leia
[Coverage and limits](#coverage-and-limits) antes de confiar em um guardrail como um
controle de segurança.

## Guardrails Embutidos

O registro carrega automaticamente seis guardrails em ordem de prioridade na importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Estágio(s)     | Arquivo               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Números de prioridade menores são executados **primeiro**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

O modelo base GLM 5.3 e `glm-5.3-{low,high,max}` possuem metadados
explícitos de registro/especificação `supportsVision:false`. As variantes do GLM 5.3 Flash
continuam sendo modelos com visão nativa. A rota `/v1/messages` do Claude Code entra na
cadeia de guardrails pré-chamada compartilhada `handleChat` **antes** da tradução de Claude para OpenAI;
imagens aninhadas de resultado de ferramenta `Read` devem ser descritas ou tratadas
antes que essa tradução as eleve para o conteúdo `image_url` da OpenAI (#17069).

Intercepta requisições contendo imagens direcionadas a **modelos sem visão** e redireciona
toda a requisição para um modelo capaz de ver ou substitui as partes de imagem
por descrições de texto produzidas por um modelo de visão configurável antes
da chamada upstream. Isso permite que provedores que lidam apenas com texto processem
payloads multimodais de forma transparente.

Fluxo:

1. Ignora se o modelo de destino já suporta visão (a menos que ele apareça na
   lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrai partes de imagem via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega para o **detector de mídia
   unificado** `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   única fonte da verdade compartilhada com o filtro de compatibilidade de combinação.
   A extração possui allowlist para os formatos que `replaceImageParts` pode reinserir
   (o contrato extract↔replace): `image_url` da OpenAI, `source.type:"base64"` da Anthropic,
   `source.type:"url"` da Anthropic e `input_image` da Responses API.
   Imagens correspondentes aninhadas dentro de `tool_result.content` do Claude Code
   e saídas de ferramentas do Responses também são extraídas e
   substituídas em seus caminhos originais; formatos exclusivos de indicador são material
   do filtro de combinação e não são extraídos.
   Ignora se nenhuma for encontrada.
3. Resolve a configuração de tempo de execução via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novas chaves de configuração `modalityBridge*`
   vencem; chaves legadas `visionBridge*` permanecem como um **fallback de um único ciclo**
   (janela de reversão). Ignora antes de qualquer travessia de mídia quando a
   ponte estiver desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, veja a tabela abaixo) decide
   entre redirecionar e descrever. O redirecionamento retorna `modifiedPayload` com apenas o `model`
   trocado, além de metadados `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limita as imagens a `maxImages`, compõe o prompt ciente da tarefa,
   consulta o cache de descrição, chama o modelo de visão **em paralelo**
   (`Promise.allSettled`) e injeta partes de texto `[Image N]: <description>` em
   seu lugar. Uma descrição falha produz `null`: a imagem bruta é preservada para
   alvos desconhecidos ou capazes de ver (#4012), mas um **alvo direto confirmado apenas de texto**
   ou uma combinação sem visão recebe um texto substituto explícito
   `(unavailable — no vision-capable provider connected)` para
   cada imagem não descrita, incluindo falhas parciais e imagens além do
   limite de chamadas de descrição (#17069). O fallback de descrição de combinação com falha total
   existente permanece no lugar (#8430).
6. Retorna `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Padrão | Comportamento                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Heurística legada, inalterada (#6640/#7204): modelos non-combo/`auto/` são redirecionados para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (nesse caso, descreve); alvos combo sempre descrevem.                                                                                 |
| `describe` |        | Sempre descrever — o bloco de redirecionamento é ignorado por completo; o modelo escolhido pelo usuário sempre responde.                                                                                                                                                                                                      |
| `reroute`  |        | Forçar redirecionamento: a proteção de manter o modelo com credenciais é contornada. A proteção de credenciais do **alvo** de redirecionamento ainda se aplica — quando nenhum alvo de visão utilizável existe, a ponte bloqueia com um erro claro em vez de descrever ou enviar imagens brutas para um alvo apenas de texto. |

Os modos forçados interrompem a execução **antes** que a heurística auto seja executada; o comportamento de `auto` é idêntico byte a byte à regra de proteção anterior ao PR-1.

#### Escopo de chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do chamador restringe `allowedConnections`, pools de cotas (`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte seleciona apenas modelos de redirecionamento e de descrição que a chave pode usar, em conexões que a chave pode usar. A chamada de descrição, então, sempre passa pelo loop interno (self-loop) do OmniRoute com o cabeçalho `x-omniroute-self-loop-key-id`, para que a solicitação de chat receptora reforce novamente a política de conexão e de modelo daquela chave. `enforceApiKeyPolicy()` honra esse cabeçalho apenas em conjunto com o token bearer do loop interno, de modo que ele só pode restringir o acesso, e um ID que não seja resolvido é rejeitado.

Se nenhum modelo de visão for permitido para a chave, um **alvo confirmado apenas de texto** rejeita a solicitação de imagem localmente com um erro HTTP 400 claro, em vez de encaminhar os bytes da imagem para um upstream incapaz (#17069). Para alvos com capacidade de visão desconhecida ou nativa, o caminho de descrição mantém seu comportamento anterior de falha aberta (fail-open) (metadados `{ skipped: true, reason: "no_permitted_vision_model" }`). Solicitações sem chave, e chaves sem essas restrições, comportam-se exatamente como antes.

#### Prompt de descrição sensível à tarefa (`modalityBridgeVisionTaskAware`)

Padrão **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) anexa o texto da **última mensagem do usuário** (truncada para 500 caracteres) ao prompt de descrição base, direcionando a descrição para o que o usuário realmente pediu (padrão codex-vision-proxy) e solicitando que o modelo de visão transcreva o texto visível. Com a flag desativada — ou sem texto do usuário — o prompt base é usado sem alterações.

A própria solicitação compatível com a OpenAI do loop interno de descrição (`callVisionModelSingle()` em `visionBridgeHelpers.ts`) sempre solicita `image_url.detail: "high"` — incondicionalmente, para cada chamador/provedor, sem depender de nenhum sinal do cliente. A amostragem de baixa detalhe degrada a precisão do OCR exatamente para a tarefa de transcrição de texto solicitada por este prompt, portanto, a própria chamada de descrição sempre solicita alto detalhe, independentemente do nível de detalhe usado pela solicitação de entrada original. Isso afeta apenas o corpo da solicitação interna de descrição; não altera a forma como o OmniRoute encaminha o próprio `image_url.detail` do chamador na solicitação primária — esse padrão é aplicado separadamente, e apenas para clientes OpenCode detectados, em `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). A ramificação de formato wire-format da Anthropic do loop interno de descrição não possui o campo `detail` e não é afetada por nenhum dos dois padrões.

#### Limite de saída de descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Padrão | Intervalo        |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ou 100–50000 |

`0` (padrão) significa **sem limite** — a descrição retornada por `callVisionModel()` é passada inalterada, preservando o comportamento existente. Qualquer valor no intervalo de 100–50000 trunca a descrição com um sufixo `…` antes de ser reinserida como `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`). Aumente este valor para tarefas de OCR pesadas em detalhes, onde o modelo a jusante precisa da transcrição completa; reduza-o para limitar o uso de tokens em modelos de visão prolixos. O campo do painel fica no painel Avançado da aba Visão (`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e restringe qualquer valor entre 1 e 99 para o limite mínimo de 100, mantendo um `0` explícito intocado — `0` é um valor Zod válido por si só (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), e não meramente o padrão "não definido".

#### Cache de descrição (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para saídas de descrição, compartilhado em todo o processo. Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com enquadramento de prefixo de comprimento (sem colisões de limites de campo). O componente de modelo é o modelo de ponte **configurado**, não o modelo que realmente respondeu — `callVisionModel` pode recorrer a fallbacks internamente, e usar a chave por tentativa fragmentaria o cache. Descrições falhas nunca são colocadas em cache. Configurações:

| Chave                           | Padrão | Intervalo |
| ------------------------------- | ------ | --------- |
| `modalityBridgeCacheEnabled`    | `true` | —         |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000   |

#### Normalização de imagem remota (self-loop describe/base64 fetch)

Quando a bridge busca uma imagem **remota** por conta própria — a auto-chamada de descrição da Anthropic e a conversão base64 do formato claude-wire (`ensureBase64ImagesForClaudeWire`), ambas via `fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o data URI resultante é passado por `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) antes de ser embutido na requisição do modelo de visão. Imagens muito grandes são redimensionadas para uma **borda longa de 2048px** (correspondendo ao limite de redimensionamento que a OpenAI/Anthropic já aplica no lado do servidor), o que reduz os bytes de upload/latência sem alterar o que o modelo de visão vê. O redimensionamento usa `sharp`, carregado via importação dinâmica: em uma plataforma onde seu binário nativo falha ao carregar, `normalizeDataUri()` **nunca lança exceções** — ele recorre a um repasse (_passthrough_) dos bytes originais, de modo que o caminho de descrição/conversão para base64 continua funcionando. Bytes que não são de imagem (uma busca que não retornou uma imagem decodificável) também são repassados sem alterações. Esta normalização é restrita às imagens que a bridge busca para sua própria auto-chamada — ela nunca é aplicada ao payload bruto de _passthrough_ do chamador, em conformidade com o princípio de mutação estritamente opcional (Hard Rule #20).

#### Schema de configurações + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, o trio `modalityBridgeCache*` e o grupo `modalityBridgeAudio*` usado pela Audio Bridge. A migração `141_modality_bridge_settings.sql` copia os valores legados existentes de `visionBridge*` para as novas chaves correspondentes (idempotente, nunca sobrescreve um valor de `modalityBridge*` definido pelo operador); as chaves legadas continuam sendo aceitas como _fallback_ de leitura por um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas por descrição carregam `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (construído por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`, carimbado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`). Requisições redirecionadas **não** recebem cabeçalho — o payload não foi alterado e a troca de modelo já está visível no campo `model` do corpo da resposta.

`GET /api/modality-bridge/stats` (autenticação de gerenciamento, mesmo nível de `GET /api/settings`) retorna os contadores em memória por modalidade `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e `video`. `averageLatencyMs` usa `latencySamples`, e não todas as tentativas, como seu denominador; uma operação sem tempo de execução não inventa uma amostra de zero milissegundos. `bridged` continua sendo o alias compatível com versões anteriores para conversões bem-sucedidas; tentativas falhas não o incrementam. Os contadores são reiniciados na reinicialização do processo por design (telemetria, não contabilidade).

#### Configuração do Dashboard

A página dedicada do dashboard é `/dashboard/settings/modality-bridge`. Suas guias endereçáveis por URL `Vision`, `Audio` e `Video` preservam os parâmetros de consulta ao alternar o valor de `tab`. A guia Vision expõe habilitação, modo, seleção de modelo (incluindo o padrão automático), criação de _prompts_ consciente de tarefas, limites avançados de tempo limite/imagem/tamanho de descrição/cache, contadores de execução e uma requisição de exemplo protegida. A guia Audio também está ativa: ela expõe habilitação, um seletor de modelos exclusivos para STT com Auto, limites de tempo limite/clipe máximo, contadores de áudio e um teste de exemplo com `input_audio`. A guia Video é funcional: ela relata o estado de execução do FFmpeg/ffprobe — um de quatro estados explícitos de IU (`unknown` enquanto a verificação está em andamento ou não pôde ser concluída, `restricted` em um host de dashboard que não seja de loopback onde a verificação é ignorada no lado do cliente, `unavailable` uma vez verificada e confirmada como ausente, ou `available` com as versões do FFmpeg/ffprobe) — persiste os limites de ativação/modelo/quadro/vídeo/tempo limite, filtra o seletor de modelos para modelos compatíveis com visão e expõe contadores de vídeo.

O antigo card Vision Bridge em configurações de IA é um link de compatibilidade para a nova página; ele não possui mais uma segunda cópia do formulário. Os Provedores de Mídia também vinculam os fluxos de trabalho de Imagem para Texto e Fala para Texto às guias correspondentes da Modality Bridge sem remover o ambiente de testes (_playground_) de Fala para Texto existente.

**Contorno de admissão por auto-chamada (_self-loop_):** quando a chamada de descrição é roteada pelo próprio _self-loop_ `/v1` do OmniRoute (modelo de provedor não padrão), a sub-requisição envia `x-omniroute-admission-bypass: internal` e é autenticada com a credencial de _self-loop_ resolvida — o sentinela local `sk_omniroute` no modo local, ou a chave de ambiente configurada pelo operador `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) para que implantações com `REQUIRE_API_KEY=true` ainda possam executar a chamada de descrição. O contorno é aceito apenas para essas credenciais exatas, portanto, clientes externos não podem usar o cabeçalho para ignorar a admissão.

Os padrões legados ficam em `src/shared/constants/visionBridgeDefaults.ts`; os novos padrões de modo/consciente de tarefas/cache e o resolvedor de configurações ficam em `src/shared/constants/modalityBridgeDefaults.ts`. A barreira de proteção (_guardrail_) expõe uma opção de construtor `deps` para que os testes possam injetar implementações falsas de `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta requisições de chat contendo áudio antes que elas cheguem a um destino que não aceita entrada de áudio conhecida. Ela nunca redireciona a requisição de chat: as partes de áudio são transcritas por meio do _endpoint_ _multipart_ compatível com o OpenAI existente e o modelo de chat escolhido continua com transcrições de texto.

Fluxo:

1. Resolve `supportsAudio` por meio de `getResolvedModelCapabilities()`. Metadados explícitos do registro de provedor têm prioridade, seguidos pelos metadados estáticos do modelo e, em seguida, por `modalities_input` sincronizado. Uma lista de entrada declarada sem `audio` é `false`; se não houver evidências de capacidade, permanece `null`. Tanto `false` quanto `null` ativam a ponte conservativa, enquanto `true` a ignora.
2. Resolve as configurações de `modalityBridgeAudio*` e extrai partes de áudio de nível superior passíveis de divisão de cada mensagem por meio do detector compartilhado `detectMediaParts()`. Os formatos de transmissão suportados são `input_audio` e `audio_url` da OpenAI, além de `source.media_type: "audio/*"`. Áudio aninhado é detectado para fins de roteamento, mas não é removido pelo caminho de divisão. O trabalho é limitado por `modalityBridgeAudioMaxClips`; as partes posteriores permanecem inalteradas.
3. Respeita um `provider/model` configurado, ou permite que `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` na ordem estável do catálogo e selecione o primeiro modelo com uma credencial de provedor ativa e utilizável.
4. `callAudioTranscription()` converte áudio em base64/data-URI em um `file` multipart, ou baixa uma `audio_url` remota por meio da proteção de saída exclusivamente pública com fixação de DNS e um limite de 25 MB. Em seguida, envia por POST o arquivo e o modelo selecionado para o auto-loop local `/v1/audio/transcriptions`, autenticado com `resolveSelfLoopBearer()`. A rota de transcrição existente executa a busca normal de credenciais, o tratamento de cooldown/limitação de taxa e o despachamento para o provedor.
5. Chamadas bem-sucedidas substituem suas partes por `[Audio N]: <transcript>`. As chamadas são executadas com `Promise.allSettled`: uma falha individual preserva essa parte de áudio original (contrato #4012). Se todas as chamadas falharem e o destino comprovadamente tiver `supportsAudio === false`, as partes se tornam `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para um destino desconhecido (`null`), um resultado de falha total permanece inalterado. Um destino comprovadamente apenas de texto sem nenhuma credencial de STT utilizável recebe o mesmo stub explícito sem disparar uma chamada de rede.

Transcrições bem-sucedidas utilizam o cache LRU/TTL do Modality Bridge de escopo de processo. A chave combina a referência de áudio, o rótulo de operação estável `audio-transcription` e o modelo STT selecionado; falhas nunca são colocadas em cache. As tentativas de áudio atualizam os contadores compartilhados `bridged`, `cacheHits`, `failures` e `lastUsedAt`. Respostas transformadas carregam `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; solicitações não tocadas não recebem um segmento de Audio Bridge.

As configurações de tempo de execução são armazenadas no BD e validadas pelo Zod:

| Chave                         | Padrão  | Intervalo      |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

O cache compartilhado continua sendo controlado por `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta partes de vídeo de nível superior em `messages` do Chat Completions e `input` da Responses API antes que um destino sem suporte nativo a vídeo conhecido seja chamado. Os formatos suportados são `input_video`, `video_url`, `video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de arquivos simples no texto não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gerencia a varredura da solicitação, a verificação de capacidade/política, a agregação por solicitação e o payload de resposta. O trabalho por vídeo — aquisição, o cache de resultado completo, descrição de uma sequência de quadros (que combina qualquer transcrição de áudio declarada pelo chamador) e métricas/interrupção/limpeza por tentativa — fica oculto atrás de `processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez por parte de vídeo dentro do loop de `preCall`. Esse módulo também define os limites de porta explícitos `VideoMediaBrokerPort` (aquisição de bytes e extração de quadros amostrados), `VideoAudioTranscriptionPort` (combinação de uma transcrição de áudio declarada pelo chamador com as legendas amostradas) e `VideoDrilldownPort` (o limite de persistência de detalhamento de quadros; ainda não integrado em `processVideoPart` — apenas a rota separada `/api/modality-bridge/video/drilldown` grava entradas de detalhamento atualmente).

O caminho de solicitação público `/v1` nunca importa ou invoca um subprocesso. Vídeos remotos são baixados sob um limite de 50 MiB; vídeos em base64 embutidos possuem um limite decodificado conservador de 36 MiB por vídeo, para que o envelope de modelo/mensagens/enquadramento possa permanecer dentro do limite público de admissão de solicitações JSON de 50 MiB. As estimativas de comprimento embutido e tamanho decodificado são verificadas antes da alocação. HTTPS é obrigatório na URL remota inicial e em cada redirecionamento, utilizando a proteção de saída exclusivamente pública existente com fixação de DNS. Os bytes então cruzam exatamente a fronteira interna do broker `POST /api/modality-bridge/video/extract`. Essa rota é tanto `LOCAL_ONLY` quanto `SPAWN_CAPABLE`, aceita apenas uma solicitação autenticada por processo em loopback confiável e nunca aceita uma URL, caminho de sistema de arquivos, executável ou lista de argumentos. O pipeline de tamanho de corpo da API e o leitor de corpo incremental do manipulador impõem independentemente um limite de entrada do broker de 50 MiB. Sua fila limitada executa uma extração por vez, permite quatro trabalhos pendentes e limita a entrada pendente a 100 MiB.

Dentro do broker, `ffprobe` lê um arquivo local privado; a lista de permissões de formato fixo exclui formatos de playlist e manifesto. Para contêineres da família MOV permitidos, as referências de dados MOV externos permanecem desabilitadas por padrão, e o comando fixo não as ativa. Tanto o `ffprobe` quanto o `ffmpeg` usam a lista de permissões de protocolo apenas para `file`, uma única thread, matrizes de argumentos fixas, sem shell, e executáveis resolvidos a partir do `PATH`. Fluxos de capa de imagem anexada não são candidatos reproduzíveis. Todos os fluxos reproduzíveis devem satisfazer os limites, e um fluxo padrão explícito é preferido em relação ao fallback determinístico de menor índice. Os vídeos são limitados a 600 segundos, 8.192 pixels por dimensão e 33.554.432 pixels de origem. O FFmpeg amostra de 1 a 16 quadros JPEG no ponto médio, reduz a borda longa para no máximo 1.024 pixels sem aumentar a escala de entradas menores e nunca recebe uma URL. A amostragem é `uniform` por padrão. As políticas opcionais `scene_aware` e experimental `segment_aware` realizam uma passagem fixa adicional do FFmpeg sobre o fluxo local já validado, selecionam carimbos de data/hora de cena delimitados por `showinfo` e retornam deterministicamente aos mesmos pontos médios uniformes em caso de falha do detector, tempo limite, saída malformada ou um conjunto de candidatos vazio. O modo ciente de segmento aloca amostras de ponto médio proporcionalmente aos intervalos de cena validados; as evidências e o comportamento de fallback do modo ciente de segmento são detalhados abaixo. O limite rígido de 16 quadros é aplicado após a seleção em todas as políticas. Quando uma requisição ciente de cena possui um orçamento de apenas um quadro, ela usa o ponto médio uniforme do vídeo completo ativo ou da janela de foco e relata `policyEffective: uniform`: um único quadro de cena selecionado não pode preservar ambas as extremidades temporais. Um chamador pode opcionalmente fornecer uma janela de foco finita (`start`/`end` segundos); os limites são ajustados à duração da mídia, janelas invertidas ou não finitas são rejeitadas, e todas as políticas de amostragem são executadas apenas dentro do intervalo normalizado. A janela resultante é incluída nos metadados de amostragem e no prefixo de descrição não confiável para que os modelos subsequentes possam distinguir um trecho focado da linha do tempo completa.

O foco de legenda semântica é uma configuração separada e explícita. O modo de análise padrão `full` preserva o prompt de quadro existente e nunca encaminha o texto da requisição para o modelo de legenda. No modo `focused`, o bridge lê apenas o `text`/`input_text` mais recente escrito pelo usuário e não vazio do mesmo contêiner de Chat ou Responses, o normaliza para NFC, comprime caracteres de controle e espaços em branco, e o limita a 500 pontos de código Unicode. Um resultado vazio recorre ao prompt exato de `full`. Uma dica utilizável é serializada como JSON em um bloco dedicado de contexto de usuário não confiável e só pode priorizar detalhes observáveis; ela não pode substituir o aviso separado contra seguir instruções visíveis ou audíveis na mídia. O foco textual nunca deduz `start`/`end` nem altera o amostrador temporal.

#### Evidências de segmento estrutural FU-07

`segment_aware` usa uma passagem de pré-análise delimitada sobre o fluxo de vídeo local já validado. A cadeia de filtros fixa primeiro redimensiona para no máximo 320 pixels de largura, detecta mudanças de cena e intervalos congelados, e então amostra a 1 quadro por segundo para desfoque, luma média e informações espaciais/temporais. A passagem é limitada a 600 amostras estruturais, uma thread de FFmpeg/filtro, as mesmas listas de permissões de protocolo e contêiner restritas a `file`, um limite de saída de processo de 1 MiB e no máximo 30 segundos dentro do limite/interrupção compartilhada do broker. Ela nunca aceita um comando, filtro, caminho ou URL da requisição.

Os valores estruturais são evidências de amostragem determinísticas, e não compreensão semântica de vídeo. Eles não inferem sujeitos, ações, legendas, fala ou intenção do usuário. Limites de cena e de congelamento formam segmentos; a cobertura de congelamento, desfoque, exposição, detalhes espaciais e mudança temporal influenciam apenas como o orçamento existente de 1 a 16 quadros é alocado. Um segmento totalmente congelado é limitado a um quadro, enquanto os segmentos não congelados competem pelo orçamento restante. Quando os limites superam o número de quadros, a cobertura uniforme da linha do tempo é mantida para que cortes rápidos iniciais não escondam um longo segmento final. Os limites de cena dentro da resolução de análise de 1 segundo de um limite de congelamento são fundidos.

Filtros ausentes, evidências malformadas/vazias, um erro do detector ou o estouro de tempo limite da pré-análise delimitada falham de modo aberto para a política exata de ponto médio uniforme. Uma interrupção do chamador ou um prazo limite do broker não falha de forma aberta: ele encerra o subprocesso em execução, evita a extração posterior de quadros, e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixtures reais e determinísticas do FFmpeg para economias de chamadas de legenda pós-dedup, alocação de orçamento de movimento denso, evidências de desfoque/exposição/SI-TI, cortes rápidos com cauda longa e falsos positivos de fade gradual. Ele registra o tempo de relógio da pré-análise e, onde `/usr/bin/time` estiver disponível, o uso de CPU do processo filho e o pico de RSS. Suas verificações de qualidade são apenas oráculos estruturais. A qualidade real do modelo de legenda permanece em `HOLD` porque este harness não possui um endpoint autorizado ou juiz congelado. As economias monetárias também permanecem em `HOLD` a menos que `--caption-cost-per-call-usd` forneça uma estimativa positiva explícita por chamada; o script nunca fabrica nenhum dos dois resultados.

Cada quadro é limitado a 4 MiB, todos os quadros brutos juntos a 23 MiB, e a resposta serializada do broker a 32 MiB. Um diretório temporário privado é removido em `finally`. O OmniRoute não inclui o FFmpeg empacotado e não aceita um caminho de executável personalizado. Antes de gerar legendas, a ponte aplica uma passagem conservadora de desduplicação visual: cada JPEG é reduzido a um buffer em escala de cinza 16×16 e é comparado apenas com o último quadro retido. Para um orçamento de legendas solicitado superior a um quadro, a extração fornece um pool limitado de candidatos de até o dobro desse orçamento e nunca mais de 16 quadros. O limite solicitado é aplicado apenas após a desduplicação, com o primeiro e o último candidatos selecionados sendo preservados durante o desbaste final quando o orçamento for de pelo menos dois. A política versionada `grayscale-16x16-mean-cells-v2` usa o maior valor entre o delta médio de luma e a proporção de células da miniatura cujo delta normalizado seja de pelo menos 0,05. O limite de duplicação é a constante 0.04, escolhida por previsibilidade em vez de ser exposta como uma configuração de tempo de execução. Esse sinal secundário de alto contraste preserva pequenos movimentos e alterações de texto visíveis que uma comparação baseada apenas na média pode ocultar. Erros de comparador ou decodificador falham abertamente e mantêm a cobertura. Os metadados de saída separam os candidatos extraídos, os quadros usados com sucesso e as duplicatas visuais descartadas.

Uma parte de vídeo explicitamente marcada pode solicitar uma folha de contato com marca temporal. A ponte constrói uma grade JPEG de no máximo 4 colunas e 16 quadros. Cada célula de 512 pixels grava seu timestamp de origem em uma faixa inferior de alto contraste, enquanto os mesmos timestamps permanecem nos metadados textuais para associação e auditoria posteriores. O JPEG completo permanece limitado a 32 MiB. Se o `sharp` não puder decodificar ou compor a grade, a ponte recorre aos quadros JPEG individuais; uma anulação pelo cliente ainda se propaga através da operação da folha.

A evidência de promoção é deliberadamente separada do microbenchmark de composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define um harness A/B com versão de esquema para modelos de visão reais compatíveis com a OpenAI. Ele mede os tokens relatados pelo provedor, a latência de relógio de ponta a ponta (incluindo a composição da folha), a contagem de chamadas de modelo e a retenção de fatos definida pelo manifesto. As respostas brutas do modelo não são gravadas no relatório; apenas digests SHA-256 e IDs de fatos correspondentes são retidos. O harness não faz nenhuma chamada de rede ou a modelos pagos, a menos que `--execute-real` seja passado e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa execução real explícita, seu veredito legível por máquina permanece `HOLD`; medições sintéticas de payload/contagem de chamadas isoladas não constituem evidência de promoção.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de vídeo suportada quando já possuírem texto alinhado. Cada trecho deve conter `text`, um intervalo finito `start`/`end` dentro da duração inspecionada e um `source` permitido em lista branca (`client`, `embedded` ou `audio-bridge`); `confidence` tem o valor padrão de `1` e deve permanecer entre `0` e `1`. Trechos exatamente duplicados são recolhidos. O OmniRoute nunca inicia a transcrição a partir desses metadados: os trechos validados são copiados para o resultado descrito com origem, confiança e intervalo, e são renderizados como observações não confiáveis juntamente com as legendas dos quadros. Texto inválido, fora do intervalo ou sem procedência é rejeitado em vez de ser misturado ao fluxo de legendas. Ambos os canais de transcrição do corpo da requisição normalizam a procedência fornecida para `client`, incluindo rótulos `embedded` ou `audio-bridge` auto-declarados. Apenas um adaptador pertencente ao servidor pode atribuir esses rótulos confiáveis por meio do argumento `trustedSource` restrito a código; um campo JSON de requisição não pode alcançar esse argumento. O texto da transcrição permanece como conteúdo derivado de mídia não confiável, independentemente de sua procedência, e nunca deve determinar a autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo; ela é tratada como texto fornecido pelo cliente, não como prova de transcrição do servidor. A junção de fusão executa observações visuais e de áudio sob um único prazo e sinal de interrupção, as ordena em uma linha do tempo comum, recolhe duplicatas exatas e relata um resultado parcial quando apenas um dos lados é bem-sucedido. Um `audioTranscript` inválido degrada para esse resultado parcial — a descrição visual é mantida e o ramo de áudio registra um código de falha sanitizado — em vez de fazer com que o vídeo inteiro falhe. A disponibilidade por ramo, o sinalizador parcial e os códigos de falha sanitizados são preservados no resultado descrito, nos metadados de guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nos metadados de cache de resultado e nos contadores de fusão da ponte. O caminho padrão do Video Bridge não invoca conversão de fala em texto nem baixa uma segunda cópia de mídia; sem essa faixa explícita, ele permanece apenas como vídeo.

**Retenção de transcrição (#12150 P1).** Isso se aplica automaticamente sempre que a Video Bridge (que é opcional) renderiza um trecho de transcrição — não há um sinalizador de retenção separado. Quando uma requisição renderiza qualquer trecho de transcrição (um `transcript` declarado pelo chamador ou um `audioTranscript` fundido), o mecanismo de proteção (guardrail) o marca como `videoBridgeObserved` e produz uma sombra tarjada da descrição do vídeo — uma renderização idêntica na qual o corpo de texto livre de cada trecho é substituído por `[redacted-video-transcript]`, construída substituindo o campo de trecho estruturado antes de a string ser montada (nunca analisando o texto compactado, para que nenhum conteúdo de trecho — adversarial ou comum, incluindo corpos contendo `]` como `[inaudible]`/`[music]` — possa sobreviver). O corpo da requisição do log de chamadas persistido substitui cada parte de texto derivada de vídeo por essa sombra tarjada, correspondida por igualdade de conteúdo; a âncora `fullText` é relida a partir do payload concluído do guardrail pré-chamada, de modo que a correspondência ainda seja bem-sucedida após guardrails de cadeia posteriores (os mascaradores de PII e credenciais, prioridades 10/95) reescreverem o texto de descrição no local e após a injeção de prompt de sistema/transferência/memória remodelar a matriz de mensagens. O corpo enviado upstream para o modelo permanece inalterado. Uma requisição observada também não preenche nenhuma Memória durável (a extração derivada tanto da requisição quanto da resposta é ignorada), para que a própria resposta do modelo não possa ecoar o texto da transcrição para a Memória.

**Campos de vídeo bruto (#12430).** Quando a ponte está ativada e o suporte nativo a vídeo é desconhecido ou ausente, os campos definidos `transcript`/`audioTranscript` também ativam `videoBridgeObserved`, mesmo após uma falha de descrição ou um limite de `maxVideos`. `null` e strings vazias contam; campos ausentes e metadados que não são de vídeo, não. Cópias retidas tarjam esses campos ou omitem a requisição, e caches/Memória são ignorados.

Nestes caminhos de fallback, trechos válidos do chamador tornam-se partes suportadas de `text`/`input_text` em vez de campos de provedor não padronizados. Ambas as faixas fornecidas pela requisição permanecem como observações de `client` não confiáveis, com um aviso explícito de que o vídeo não foi descrito e os carimbos de data/hora não foram verificados em relação à mídia. Os orçamentos existentes de 256 trechos/64 KiB no total e por trecho aplicam-se às duas faixas juntas; os carimbos de data/hora devem caber no teto de 600 segundos do corretor e em qualquer janela de foco fornecida. Faixas inválidas são descartadas, não encaminhadas como texto arbitrário; uma faixa irmã válida ainda pode ser usada, a menos que seu orçamento combinado seja excedido. Campos nulos/vazios não adicionam texto. Nenhuma busca de mídia ou transcrição é adicionada por este fallback. Os campos de extensão de transcrição são removidos do transmissor de vídeo de fallback e de seus objetos `video_url`/`source`. A lista de permissões de conexão da OpenAI permanece estrita; transmissores de vídeo nativos desconhecidos permanecem disponíveis e alvos conhecidos apenas de texto mantêm marcadores seguros. Sombras de tarja estruturadas protegem o texto de transcrição anexado, enquanto a requisição original de propriedade do chamador permanece inalterada. Alvos com suporte nativo e pontes desativadas mantêm seu comportamento de desvio existente.

Cópias retidas adicionais usam o mesmo sinal de requisição observada. O instantâneo da requisição do cliente antes do guardrail bruto, a requisição pendente em memória e o log de requisição rejeitada antecipadamente substituem estruturalmente os campos de transcrição nas partes de vídeo; prompts de string sintetizados por estágios do pipeline e transferência de contexto são tarjados no coletor do corpo da requisição persistida. O marcador persistido `video_content_removed` faz com que a continuação de `previous_response_id` falhe de forma fechada em vez de reconstruir o texto que foi descartado intencionalmente. Se uma requisição observada perder sua sombra de tarja por parte antes do registro em log, ou se mesmo uma de várias sombras de vídeo falhar em corresponder após mutações posteriores da requisição, o corpo da requisição retida será omitido inteiramente em vez de reter uma transcrição parcialmente tarjada.

Para uma requisição observada, a resposta de um modelo pode citar qualquer parte da transcrição sem um limite de trecho estruturado. O `responseBody` persistido do log de chamadas correspondente é, portanto, substituído por um marcador de omissão; o artefato de pipeline detalhado (que pode incluir corpos de upstream/cliente e blocos de transmissão) não é retido. Os caches semânticos, de idempotência e de repetição de raciocínio ignoram leituras e gravações para essa requisição. A requisição do provedor e a resposta visível ao cliente permanecem inalteradas. Os bytes iniciais de keepalive são drenados do buffer temporário quando o artefato detalhado é omitido. O aviso de EventStream malformado do Kiro relata apenas a contagem de bytes do payload, nunca seu conteúdo ou o erro bruto do analisador JSON.

Isso não afirma que todo diagnóstico de provedor/plugin não relacionado foi auditado; a varredura mais ampla do coletor de retenção é rastreada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é um substrato de cache separado e autenticado por loopback/token. Cada operação também requer um ID de principal opaco canônico. Antes que um chamador de produção seja ativado, ele deve derivar esse ID do locatário autenticado e nunca deve encaminhar um valor selecionado pelo cliente. As chaves de cache associam esse principal a IDs canônicos de sessão e de referência de vídeo, armazenam apenas suas chaves derivadas de SHA-256 e limitam tanto as leituras quanto a exclusão ao mesmo principal. O cache armazena no máximo 16 quadros JPEG derivados por entrada, expira-os após dez minutos e oferece suporte a leituras delimitadas de `start`/`end` ou exclusão explícita de sessão.

Cada principal é limitado a 16 entradas e 64 MiB de dados JPEG canônicos. Esses limites são independentes do teto global de 64 entradas/256 MiB: a pressão de cota do principal despeja apenas as entradas menos recentemente usadas desse principal antes que a remoção LRU global seja considerada. As entradas expiradas são removidas da contabilidade tanto do principal quanto da global na atividade de cache, enquanto o cancelamento e a falha de validação não confirmam uma substituição parcial.

O cache rejeita Base64 não canônico, excesso de preenchimento (padding), mídia não JPEG, JPEGs malformados ou truncados e JPEGs que geram um aviso durante a decodificação completa de imagem com o `sharp`. Ele recodifica cada imagem aceita como um JPEG canônico, deriva a largura e a altura a partir dos bytes decodificados em vez de confiar nos campos do chamador e descarta quaisquer bytes políglotas à direita em vez de retê-los. Apenas o buffer compactado canônico delimitado é cobrado em ambas as cotas. O limite de transmissão JSON inclui a sobrecarga de Base64 para o teto de entrada decodificada de 32 MiB. Cada derivação armazenada registra seu formato/resolução JPEG validado, política de amostragem, versão de derivação, hora de criação, hash de conteúdo calculado pelo servidor e referência de pai com hash, além do hash de conteúdo pai do chamador confiável. O cancelamento é verificado entre as fases assíncronas de decodificação/hash antes do commit atômico do cache.

Esta tranche ainda não conecta um produtor de produção à rota e não fornece seleção de variantes multirresolução. O caminho de solicitação transparente do Video Bridge, portanto, não gera trabalho adicional, enquanto a derivação de principal vinculada ao locatário e o ciclo de vida multirresolução completo do FU-08 permanecem como trabalho de acompanhamento explícito, em vez de documentados como comportamento concluído.

Os quadros são legendados sequencialmente com o modelo de vídeo configurado. Uma substituição de Vídeo vazia herda a configuração do Vision; se ambas estiverem vazias, o roteador automático do Vision seleciona o modelo efetivo capaz de visão. Legendas bem-sucedidas substituem a parte original por um prefixo estável `[Video description:` que também marca o texto como uma observação não confiável derivada de mídia e instrui os modelos posteriores a não seguirem instruções encontradas na mídia. As chaves de cache de legenda de quadro incluem os bytes JPEG, o prompt, o carimbo de data/hora e o modelo efetivo; apenas legendas bem-sucedidas são armazenadas em cache. As entradas de cache retêm o modelo produtor real bem-sucedido, incluindo um modelo de fallback; a ponte relata `mixed` quando quadros diferentes foram produzidos por modelos diferentes. Um cache hit reutiliza essa identidade de produtor em vez de rotulá-la novamente como o plano de roteamento solicitado. O cache de resultados de vídeo completo é indexado por cada entrada que altera a saída — prompt, modelo efetivo, política de amostragem, contagem de quadros, modo de análise semântica, a impressão digital SHA-256 da dica de foco normalizada, janela de foco, `transcript`, `audioTranscript` e a flag da folha de contato —, de modo que alterar qualquer uma dessas dimensões resulta em um cache miss, nunca em uma reutilização obsoleta. A versão da política de desduplicação visual, o limite e a contagem delimitada de quadros candidatos também são explícitos na chave e nos metadados do cache de resultados; portanto, uma alteração de política não pode reutilizar uma descrição de vídeo completo obsoleta. Os metadados v4 do cache de resultados mantêm o modo e a impressão digital, nunca a tarefa bruta do usuário. Os metadados de guardrail relatam os modos de análise solicitado e efetivo; um modo `focused` solicitado sem texto de usuário utilizável é relatado efetivamente como `full`.

O guardrail extrai todas as partes de vídeo suportadas, mas descreve no máximo `modalityBridgeVideoMaxVideos`. Para um destino que comprovadamente possui `supportsVideo === false`, vídeos com falha e acima do limite tornam-se marcadores de texto seguro explícitos para que nenhum vídeo bruto sobreviva. Quando a capacidade é desconhecida, essas partes retêm seu portador de vídeo; qualquer transcrição de fallback segue a conversão de texto delimitada acima. Destinos com `supportsVideo === true` contornam a ponte. O sinal de interrupção da solicitação do cliente se propaga através do download, da fila do broker, dos subprocessos e das chamadas de legenda; as interrupções param entre os vídeos e nunca falham abrindo para mídia bruta.

As configurações de tempo de execução são armazenadas no DB e validadas pelo Zod:

| Chave                               | Padrão      | Intervalo / comportamento                                                                                     |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Tempo de execução opcional, opt-in                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva legendas genéricas; `focused` usa contexto delimitado e não confiável do usuário mais recente |
| `modalityBridgeVideoModel`          | `""`        | Herda o modelo do Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ou `segment_aware` proporcional; falha do detector retorna para `uniform`            |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Valores legados persistidos de tempo limite de Vídeo acima de 120 segundos são limitados ao prazo do broker; novas gravações de configurações acima desse limite são rejeitadas. `GET /api/modality-bridge/video/runtime` requer localidade de loopback carimbada e confiável antes da autenticação ou sondagem de tempo de execução, exigindo em seguida autenticação de gerenciamento. Ele retorna apenas `available`, versões sanitizadas do FFmpeg/ffprobe e um motivo fixo quando o tempo de execução estiver indisponível. O endpoint de extração interna não é uma API de upload pública: a saturação da fila retorna `503` mais `Retry-After`, uma desconexão do chamador retorna `499` e o prazo fixo do broker retorna `504`. Respostas convertidas adicionam `video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central `x-omniroute-modality-bridge` sem remover os segmentos de Vision ou Audio.

### PII Masker (`piiMasker.ts`)

Executa em **ambos** os estágios.

- **`preCall`** clona o payload, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens de string simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos de string `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, o PII detectado é mascarado no
  payload de saída. Isso é independente de `INPUT_SANITIZER_MODE` (que controla apenas a
  política de injeção de prompt). Quando o mascaramento está desativado, a chamada registra
  contagens de detecção sem reescrever o conteúdo.
- **`postCall`** clona profundamente a resposta, executa `sanitizePIIResponse()` mais
  o mascarador do formato da Responses-API (`maskResponsesOutput` — cobre
  `output_text` e `output[].content[].text`). Se ocorrer qualquer mascaramento, a
  resposta modificada substitui a original.

O mecanismo de proteção nunca bloqueia; ele apenas anota (`meta.detections`,
`meta.redacted`) ou reescreve.

#### Seleção por tipo, padrões personalizados e contadores de detecção

**Dashboard → Settings → Security → PII masking** escolhe _o que_ é mascarado. Ele
não ativa o mascaramento: isso ainda é feito por `PII_REDACTION_ENABLED` (requisição) e
`PII_RESPONSE_SANITIZATION` (resposta + SSE), ambos desativados por padrão.

- **Seleção por tipo** — os IDs internos estão listados em
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Não configurado significa todos os
  tipos (o comportamento antes de esta configuração existir). O padrão `ssn_us` do
  mecanismo de requisição mapeia para `ssn`. Os modelos (Minimal, Standard, Financial,
  Brazilian, USA, Full) apenas preenchem as caixas de seleção na interface.
- **Padrões personalizados** — até 20 padrões de regex ou curinga (`*` = até 64
  caracteres sem espaço em branco, `?` = um). As correspondências tornam-se `[CUSTOM_REDACTED]`.
  Cada padrão passa por `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): no máximo 500 caracteres, flags limitadas
  a `g i m s u`, deve compilar, deve passar em `safe-regex` (retrocesso
  catastrófico) e não deve corresponder a uma string vazia ou a um espaço reservado de mascaramento.
  Um padrão que falha é recusado ao ser salvo e testado, e uma linha armazenada
  que falha é ignorada em tempo de execução em vez de ser compilada. Os padrões personalizados apenas
  são executados enquanto o mascaramento estiver ativado.
- **Contadores de detecção** — contagens por tipo (nunca os valores correspondentes), mantidas em
  memória e redefinidas na reinicialização (`src/lib/pii/piiDetectionStats.ts`). Eles apenas
  aumentam enquanto o mascaramento estiver ativado.

As configurações residem na tabela `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) e são lidas por meio de um cache de 1 s. API:

| Método | Caminho                  | Finalidade                                                                 |
| ------ | ------------------------ | -------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Estado da flag, `enabledTypes`, `customPatterns`, contadores de detecção   |
| `PUT`  | `/api/settings/pii`      | Substitui `enabledTypes` (`null` = todos) e/ou `customPatterns`            |
| `POST` | `/api/settings/pii/test` | Simulação de um padrão em uma amostra de no máximo 8 KB; nada é armazenado |

Todos os três exigem autenticação de gerenciamento e validam o corpo com o Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Injeção de Prompt (`promptInjection.ts`)

Detecta estruturas adversariais no conteúdo fornecido pelo usuário e aplica a
política configurada. O comportamento é impulsionado por variáveis de ambiente e opções do
construtor:

| Configuração    | Variável de ambiente                                                                                  | Padrão | Efeito                                                                                                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Quando `false`, o mecanismo de proteção interrompe a execução (short-circuits).                                                                                                                                 |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceito para retrocompatibilidade, mas **não** remove o texto de injeção; a reescrita de PII na requisição é controlada por `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Severidade mínima necessária para bloquear. Medium é apenas observação por padrão.                                                                                                                              |

**Precedência de modo** (`getMode`): `options.mode` do chamador →
substituição de **feature-flag no DB** de `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` → variável de ambiente `INPUT_SANITIZER_MODE` →
`warn`. Uma substituição no dashboard, portanto, tem prioridade sobre as variáveis de ambiente, de modo que a interface de
Feature Flags controla a proteção em execução em tempo real (sem reinicialização). A leitura do banco de dados é segura contra falhas:
se ocorrer um erro, a proteção recorre ao comportamento baseado em variáveis de ambiente, e quando nenhuma
substituição é definida, o comportamento é idêntico à resolução baseada apenas em variáveis de ambiente.

Fontes de detecção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto de detectores compartilhados
   usado em outros lugares no pipeline).
2. `DEFAULT_GUARD_PATTERNS` interno (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com severidade `high`).
3. `customPatterns` opcional passado pelas opções do construtor (strings, regex,
   ou registros `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma detecção atinge o limite de
severidade, `preCall` retorna `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nos modos `warn`/`log`, o guardrail faz o log mas
permite a chamada. O helper compartilhado `evaluatePromptInjection()` também é exportado
para chamadores que precisam avaliar prompts sem passar pelo registro.

**Limite de varredura (v3.8.20):** o detector inspeciona apenas os **primeiros 16 KB** do
texto de prompt concatenado — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` quanto
`evaluatePromptInjection()` executam `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de rodar
o loop de padrões. As diretivas de injeção ficam próximas ao topo da entrada, portanto isso
limita o uso de CPU/GC de regex em payloads de centenas de KB sem enfraquecer a detecção (cf.
#3932, #4041).

### Máscara de Credenciais (`credentialMasker.ts`)

Executa em **ambos** os estágios, sendo o último na cadeia padrão (prioridade `95`). Oculta
padrões conhecidos de chaves de API / tokens secretos do payload de saída (conteúdo
da mensagem, argumentos de chamada de ferramenta, resultados de ferramentas) **e** da resposta do provedor, para que uma
credencial colada em um prompt (ou ecoada por um resultado de ferramenta) não seja vazada
para o provedor upstream nem de volta para o cliente.

- **Apenas opt-in**, mesma convenção da redação de PII (adjacente à Regra Rígida #20):
  desabilitado a menos que `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Com ele desativado, o guardrail é uma no-op —
  ele nunca bloqueia e nunca reescreve.
- `redactCredentials()` percorre toda a árvore de payload/resposta (`walkValue()`,
  seguro contra poluição de protótipo, seguro contra ciclos via `WeakSet`) e substitui correspondências por
  um marcador `[REDACTED:<type>]`, clonando apenas os ramos que realmente
  mudaram.
- `CREDENTIAL_PATTERNS` cobre chaves de provedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves
  de nuvem (chave de acesso da AWS, Twilio, SendGrid, Mailgun), chaves privadas / JWTs,
  strings de conexão contendo credenciais (`mongodb://user:pass@...`, etc.) e um
  padrão genérico de valor de cabeçalho `Authorization`/`x-api-key`/`api-key`/`apikey`. Chaves com formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são redigidas estruturalmente (apenas o valor, prefixo do esquema como
  `Bearer `/`Basic ` preservado) em vez de usar a regex de texto genérica.
- O guardrail nunca bloqueia; ele apenas reescreve (`modifiedPayload` /
  `modifiedResponse`) e anota (`meta.credentialsRedacted`, `meta.count`).

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
  block?: boolean; // true interrompe a cadeia antecipadamente
  message?: string; // exibido ao bloquear
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // retornado por preCall para reescrever a requisição
  modifiedResponse?: TValue; // retornado por postCall para reescrever a resposta
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

Um guardrail sinaliza "nenhuma alteração" retornando `void`, `{}`, ou
`{ block: false }`. Retornar um `modifiedPayload`/`modifiedResponse` substitui
o valor que flui através da cadeia para guardrails subsequentes.
`signal?: AbortSignal` carrega o ciclo de vida do chamador para dentro dos guardrails. A anulação de uma requisição é a exceção deliberada de fail-open: pontes de mídia interrompem o trabalho e a limpeza sem restaurar mídia bruta para um destino conhecido por não a suportar.

## Registro (`registry.ts`)

O singleton `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona (ou substitui pelo nome normalizado) um guardrail e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — itera pelos guardrails ativos, propaga o
  payload através de `modifiedPayload`, e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — o mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e opcionalmente
  re-registra os padrões para um isolamento limpo de testes.

Ambos os executores retornam `{ blocked, payload|response, results, guardrail?, message? }`
onde `results` é um array de registros `GuardrailExecutionResult` que incluem
campos por guardrail como `blocked`, `skipped`, `modified`, `error` e `meta`,
úteis para rastreamento.

### Desativando Guardrails por Requisição

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista desduplicada de nomes de guardrails que devem ser ignorados para a requisição
atual. Há cinco canais, lidos nesta ordem e mesclados em uma única lista
(a primeira ocorrência vence na desduplicação):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` do corpo da requisição (nível superior)
3. `metadata.disabledGuardrails` do corpo da requisição (apenas quando `metadata` for um objeto)
4. Cabeçalho `x-omniroute-disabled-guardrails`
5. Cabeçalho legado `x-disabled-guardrails`

Todos os cinco canais são mesclados, incluindo os dois cabeçalhos: enviar ambos
`x-omniroute-disabled-guardrails` e `x-disabled-guardrails` ignora a união de
suas listas, e um cabeçalho moderno vazio não oculta mais o legado
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corrigido em
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são cortados
e normalizados para kebab-case em minúsculas (`pii_masker` → `pii-masker`), e entradas
vazias são descartadas. O resultado é passado através de `context.disabledGuardrails`
para o registro, que ignora os guardrails correspondentes (`skipped: true` em `results`).

A lista de desativação afeta apenas o **registry**. O modo `block` de injeção de prompt é
um limite obrigatório: o middleware de proteção contra injeção
(`src/middleware/promptInjectionGuard.ts`) chama `evaluatePromptInjection()`
sem nenhuma lista de desativação controlada pelo chamador (a chamada obsoleta
`resolveDisabledGuardrails({ body })` que ele costumava fazer foi removida em
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), portanto, uma requisição
que desativa `prompt-injection` ainda é rejeitada no modo `block`. Isso é
intencional (by design). Os canais de desativação são controlados pelo chamador (corpo da requisição,
metadados, cabeçalhos), e um chamador não deve ser capaz de desativar um controle de
segurança definido pelo operador
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). A união de cabeçalhos
de [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
altera apenas quais guardrails do registro são ignorados; ela não permite que um cliente
ignore o middleware. Políticas obrigatórias de guardrails por chave e por grupo são
rastreadas na RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Consulte [Cobertura e limites](#coverage-and-limits).

## Ordem de Execução

Para cada requisição que flui através de `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts` (as rotas da família de chat listadas em
[Cobertura e limites](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` constrói a lista de exclusão a partir da chave de API, corpo e cabeçalhos.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` executa as barreiras de proteção em ordem crescente de prioridade:
   - Barreiras de proteção desativadas são registradas como `skipped`.
   - O `preCall` de cada barreira de proteção pode reescrever o payload via `modifiedPayload`.
   - O primeiro `block: true` causa um curto-circuito na cadeia e o manipulador retorna uma resposta de rejeição da barreira de proteção.
3. O payload (potencialmente reescrevido) flui para o roteamento combo e despacho upstream.
4. **Apenas sem streaming:** após a resposta ser montada,
   `guardrailRegistry.runPostCallHooks(...)` executa a mesma cadeia na resposta. `block: true` aqui descarta a resposta upstream e retorna HTTP 400. Respostas em streaming ignoram esta etapa completamente.

Barreiras de proteção que lançam exceções são registradas com `error: <message>` e registradas via
`logger.warn`, mas a cadeia continua — fail-open por design.

## Cobertura e limites

O registro de barreiras de proteção está conectado apenas ao pipeline de chat. Esses limites são
fixados por `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` e
`tests/unit/guardrail-pipeline-characterization.test.ts`; atualize esses testes
deliberadamente quando o comportamento mudar.

### Onde os hooks são executados

| Hook / controle                                | Executa em                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                              | Requisições tratadas por `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (e `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, e o proxy de chat do Telegram. Também o endpoint de teste do painel `/api/guardrails/test`. Um bloqueio pré-chamada retorna HTTP 400. |
| `runPostCallHooks`                             | Apenas respostas de chat **sem streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Respostas em streaming nunca chegam aqui.                                                                                                                                                                                                                                                                                                  |
| PII em streaming                               | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), encadeado em `streamingPipeline.ts` quando `PII_RESPONSE_SANITIZATION` está ativado. Não é uma barreira de proteção, portanto os canais de desativação não o afetam.                                                                                                                                                                                                            |
| Middleware de proteção contra injeção (legado) | Toda rota `/v1` que contenha prompts, incluindo a família de chat (veja a [cobertura de rotas](#injection-guard-route-coverage--red-team-phase-8--block-d)). Apenas injeção de prompt.                                                                                                                                                                                                                                                        |

### O que não é coberto

- **Rotas de mídia, embeddings e dados** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nunca chegam ao registro. Nenhuma
  mascaragem de PII, mascaragem de credenciais ou ponte de modalidade é executada lá. A única
  verificação delas é o middleware legado de proteção contra injeção.
- **Respostas em streaming** não recebem barreiras de proteção pós-chamada: nenhum `pii-masker` ou
  `credential-masker` pós-chamada, e nenhum bloco pós-chamada. Apenas a transformação de PII em streaming se aplica
  (quando `PII_RESPONSE_SANITIZATION` está ativado). Uma credencial ecoada de volta em uma resposta em streaming não é redigida.
- **Canais de desativação vs. o middleware (por design):** o middleware avalia
  injeção de prompt com sua própria chamada para `evaluatePromptInjection()`, sem
  passar nenhuma lista de desativação controlada pelo chamador. O modo `block` é um limite obrigatório
  que desativações controladas pelo chamador não podem contornar, inclusive nas rotas da família de chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Desativar
  `prompt-injection` apenas ignora a barreira de proteção do registro.

### O que vê uma resposta antes do pós-chamada

No caminho sem streaming, a ordem é: extração de memória → execução de ferramenta integrada
→ barreiras de proteção pós-chamada → saída do bloco pós-chamada → armazenamento em cache semântico.

- **Extração de memória** e **execução de ferramentas** veem a resposta antes que os guardrails pós-chamada
  possam reescrevê-la ou bloqueá-la. Desde o
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), a extração de
  memória passa o texto extraído por `sanitizePII` quando
  `PII_RESPONSE_SANITIZATION` está ativado (tanto em streaming quanto sem streaming), mas uma
  resposta bloqueada posteriormente pelo pós-chamada ainda foi oferecida à memória e
  às ferramentas.
- **O cache semântico** armazena a resposta após o pós-chamada, portanto, ele armazena a
  resposta reescrita, e uma resposta bloqueada nunca é armazenada em cache. As entradas de cache são
  indexadas por chave de API.

## Configuração

Variáveis de ambiente lidas pelos guardrails integrados:

| Variável                              | Usado por                 | Efeito                                                                                                                                 |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Defina como `false` para desativar a detecção completamente.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Política de injeção: `warn`, `block` ou `log`. O valor legado `redact` não reescreve o texto de injeção.                               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modo para o guardrail de injeção; também é uma flag de recurso do banco de dados que **sobrepõe** as variáveis de ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Gravidade mínima que `MODE=block` rejeita: `high` (padrão), `medium` ou `low`.                                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Apelido legado para `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, o PII da requisição é mascarado (independente do modo de injeção).                                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controla o comportamento do mascarador no lado da resposta.                                                                            |

Os guardrails do Modality Bridge leem a configuração de tempo de execução do armazenamento de configurações baseado em banco de dados (`getSettings()`), e não de variáveis de ambiente. As chaves primárias do Vision são `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`. As chaves legadas `visionBridge*` são aceitas apenas como o fallback de leitura documentado de um ciclo; as gravações do painel usam as chaves primárias. Os padrões e o resolvedor de fallback ficam em `src/shared/constants/modalityBridgeDefaults.ts`, com as constantes legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O Audio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, além das configurações compartilhadas `modalityBridgeCache*`. O Audio não possui fallback de chave legada porque essas chaves foram introduzidas com o esquema do Modality Bridge.

O Video usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` e `modalityBridgeVideoTimeout`, além das configurações compartilhadas `modalityBridgeCache*`. Ele é desativado por padrão porque o FFmpeg/ffprobe são dependências operacionais opcionais e a legendagem de quadros adiciona latência e custo de modelo.

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

1. Crie `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registre no momento da importação (adicione a partir de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registro substitui
   qualquer guardrail anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testes

Use `resetGuardrailsForTests()` entre os testes para começar a partir de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registro vazio e
registrar apenas os guardrails sob teste. O Vision Bridge aceita injeção de dependência
(`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge expõe os
pontos de extensão equivalentes para configurações, capacidades, seleção de modelo STT, verificações
de credenciais e transcrição. Portanto, os testes podem executar ambos os fluxos sem banco de dados
ou acesso à rede.

## Veja Também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detector compartilhado que alimenta
  a injeção de prompt e o mascaramento de PII
- `src/shared/constants/visionBridgeDefaults.ts` — padrões do Vision Bridge e
  lista de modelos de bridge forçada
- `src/shared/constants/modalityBridgeDefaults.ts` — padrões de tempo de execução compartilhados de Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (circuit breaker, tempos de espera)
- `docs/reference/ENVIRONMENT.md` — referência completa de variáveis de ambiente

## Cobertura de rotas do injection-guard & red-team (Fase 8 · Bloco D)

O injection-guard (`createInjectionGuard` / `withInjectionGuard`) cobre todas as rotas
que aceitam prompts de usuários. Ele respeita `INJECTION_GUARD_MODE` (`warn` padrão = apenas registrar log;
`block` = retorna HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo padrão |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Gerativo          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

A extração de texto (`extractMessageContents`) cobre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (noturno, `nightly-llm-security.yml`):** o promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM em `INJECTION_GUARD_MODE=block`; o garak executa sondas (ignora se não houver segredo).
`moderations` está incluído por consistência. O modo de bloqueio é um limite obrigatório: `evaluatePromptInjection()`
ignora a lista de desativação por requisição que o middleware passa a ele, portanto `disabledGuardrails` **não**
isenta uma rota dele ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + disparo
manual) possui dois jobs:

- **`promptfoo-guard` (bloqueio)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore all
  previous instructions…", jailbreaks estilo DAN) valida que a resposta carrega
  `error.code === "SECURITY_001"`, ou seja, o guard realmente rejeitou a requisição.
- **`garak` (consultivo)** — executa o garak `--probes promptinject,dan,leakreplay`
  contra uma instância local do OmniRoute (`http://localhost:20128/v1`). Protegido por um
  segredo de provedor (`PROMPTFOO_PROVIDER_KEY`); é ignorado de forma graciosa e tem o sufixo
  `|| true`, portanto ele relata sem falhar a CI.

A cobertura do auxiliar de guard (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que contêm prompt; o texto do prompt é extraído de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.

# Documentação: índice e procedimento

## Quando ler cada documento
| Documento | Conteúdo | Ler quando |
|---|---|---|
| [estado.md](estado.md) | Status atual, etapas, pendências, problemas conhecidos | **Sempre**, no início de cada sessão |
| [arquitetura.md](arquitetura.md) | Stack, estrutura de pastas, convenções, uso das libs, ambiente | Ao criar/mover arquivos, adicionar dependências, configurar build |
| [decisoes.md](decisoes.md) | Decisões (fato × hipótese) e decisões em aberto | Antes de uma escolha técnica ou de design; ao registrar uma nova |
| [conteudo.md](conteudo.md) | Dados reais com fonte, projetos, mock a descartar | Ao mexer em `src/data/`, textos ou no currículo PDF |
| [referencia-visual.md](referencia-visual.md) | Layout, tokens e animações do Base44 | Ao implementar ou ajustar UI e animações |
| [validacao.md](validacao.md) | Checklist de validação e riscos ativos | Ao fim de cada etapa de UI e na Etapa 11 |
| [etapas/](etapas/) | Registro do que foi feito em cada etapa | Só para investigar o histórico de uma etapa específica |
| [00-plano.md](00-plano.md) | Plano original aprovado (**arquivo histórico, congelado**) | Raramente; os docs acima são a versão atual |

## Onde mora cada informação (fonte única)
| Informação | Documento |
|---|---|
| Status, pendências, problemas conhecidos | `estado.md` |
| Stack, pastas, convenções, ambiente | `arquitetura.md` |
| Decisões (✅/🔶) | `decisoes.md` |
| Dados reais, fontes de dados, mock a descartar | `conteudo.md` |
| Layout, tokens, animações observadas | `referencia-visual.md` |
| Validação e riscos | `validacao.md` |
| Regras de trabalho essenciais | `CLAUDE.md` |
Os outros documentos apenas apontam para o lugar certo, sem repetir a informação.

## Procedimento de atualização (após cada etapa ou mudança relevante)
1. **`etapas/NN-nome.md`:** criar com o modelo abaixo. Curto, sem colar código: listar arquivos e o papel de cada um.
2. **`estado.md`:** atualizar o status da etapa, a próxima ação, as pendências e os problemas conhecidos.
3. **`decisoes.md`:** registrar as decisões novas (marcar ✅ fato ou 🔶 hipótese) e mover para "Tomadas" as que saíram de "Em aberto".
4. **`arquitetura.md`:** só se mudou a estrutura, uma dependência, uma convenção ou o ambiente.
5. **`conteudo.md` / `referencia-visual.md`:** só se mudou um dado real ou uma descoberta visual.
6. Hipótese confirmada ou refutada: atualizar a marcação no próprio documento, sem criar uma entrada nova.
7. Pendência respondida: remover do `estado.md`, registrar a resposta onde ela mora (`conteudo.md` para dados, `decisoes.md` para escolhas) e trocar o ⚠️ correspondente por ✅.
8. **Commit da etapa** (pedido do usuário): `git add` dos arquivos da etapa + docs atualizados; mensagem `Etapa N: <resumo>` em pt-BR. Commit só local (push só quando o usuário pedir).
9. Só então começar a próxima etapa.

## Modelo de `etapas/NN-nome.md` (NN = número da etapa; partes da mesma etapa compartilham o NN)
```
# Etapa N: <nome>
**Status:** concluída | parcial   **Data:** AAAA-MM-DD
## Objetivo
## Arquivos criados/alterados (papel de cada um, sem código)
## Decisões (link para decisoes.md se forem relevantes no longo prazo)
## Comandos relevantes
## Verificação e resultado
## Problemas e soluções
## Pendências para a próxima etapa
```

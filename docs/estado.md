# Estado atual do projeto
_Atualizado em: 2026-11-02_

## Resumo
- **Etapas 0-5 concluídas e commitadas** (branch `master`, sem push). Layout e hero prontos; as demais seções ainda são placeholders com os títulos reais.
- **Próxima ação:** Etapa 6 (Sobre + Serviços + Marquee).
- **Validação manual pendente** (headless não cobre): nav ativa ao rolar, linha de progresso, menu mobile a 360-390 px, ciclo/hover/clique dos chips do orbit, fade do hero ao rolar.

## Etapas
| # | Etapa | Status | Registro |
|---|---|---|---|
| 0 | Preparação: documentação ✅ · ambiente ✅ · análise do vídeo ✅ · respostas de conteúdo ✅ | ✅ concluída | [00-documentacao](etapas/00-documentacao.md) · [00-preparacao](etapas/00-preparacao.md) |
| 1 | Scaffold (Vite, TS, Tailwind v4, shadcn, alias) | ✅ concluída | [01-scaffold](etapas/01-scaffold.md) |
| 2 | Design system (tokens, fontes, componentes base) | ✅ concluída | [02-design-system](etapas/02-design-system.md) |
| 3 | Dados + assets (`src/data`, cópia de imagens/ícones) | ✅ concluída | [03-dados-assets](etapas/03-dados-assets.md) |
| 4 | Layout (header, nav, progresso, menu mobile, footer) | ✅ concluída | [04-layout](etapas/04-layout.md) |
| 5 | Hero (digitação, orbit) | ✅ concluída | [05-hero](etapas/05-hero.md) |
| 6 | Sobre + Serviços + Marquee | ⬜ | — |
| 7 | Tecnologias + dialog | ⬜ | — |
| 8 | Projetos + filtro + dialog/galeria | ⬜ | — |
| 9 | LinkedIn CTA + Contato | ⬜ | — |
| 10 | Currículo PDF (jsPDF) | ⬜ | — |
| 11 | Polimento (responsivo, a11y, perf, grep de mock) | ⬜ | — |
| 12 | Deploy (Vercel) | ⬜ | — |

## Funcionalidades (alvo × situação)
Todas vêm do site antigo ou do modelo Base44. Implementação em detalhe: [decisoes.md](decisoes.md) e [referencia-visual.md](referencia-visual.md).
| Funcionalidade | Origem | Situação |
|---|---|---|
| Header fixo + nav com seção ativa + progresso de scroll | antigo + Base44 | ✅ implementado (validação manual pendente) |
| Menu mobile acessível | antigo | ✅ implementado (validação manual pendente) |
| Reveal ao rolar | antigo + Base44 | pendente |
| Digitação de cargos no hero | antigo + Base44 | ✅ implementado |
| Orbit de tecnologias com legenda | Base44 | ✅ implementado (validação manual pendente) |
| Serviços (conteúdo real) | Base44 | pendente (aguardando conteúdo) |
| Marquee de tecnologias | Base44 | pendente |
| Tecnologias + dialog de detalhes | Base44 | pendente |
| Projetos + filtro em pills + dialog com galeria | antigo + Base44 | pendente |
| Card LinkedIn | Base44 | pendente |
| Contato (mailto + copiar e-mail com toast) | antigo + Base44 | pendente |
| Currículo PDF gerado (jsPDF) | antigo (PDF estático) → novo | pendente |
| Ano dinâmico no rodapé, voltar ao topo, skip-link | antigo | ✅ implementado |

## Pendências (aguardando o usuário)
Nenhuma no momento. Todas as respostas estão registradas em `decisoes.md` e `conteudo.md`.

## Problemas conhecidos / riscos ativos
- **Dev server:** testar com `timeout N npx vite ...` no Bash; não matar processos `node` genéricos.
- **PATH do Windows:** Node e ffmpeg foram instalados agora; shells abertos antes não os enxergam. No PowerShell, recarregar com `$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')`. O Bash (Git Bash) pode precisar de um terminal novo.
- **Foto de perfil** é uma selfie com fundo claro; o modelo usa uma foto escura. Tratamento só via CSS; o usuário pode trocar a foto depois.
- **Repo antigo** tem 1 alteração não commitada em `index.html` (não mexer).
- **CV antigo publicado** contém dados pessoais sensíveis (fica no repo antigo; decisão sobre removê-lo é do usuário).
- **Bundle JS** 394 kB (motion): otimizar na Etapa 11.
- **Screenshots de validação:** Edge headless (ver `etapas/02-design-system.md` → Verificação). Limites: largura mínima ~500 px, não aplica âncoras e **ativa reduced-motion por padrão** (usar `--force-prefers-no-reduced-motion` para ver animações).
- Riscos de implementação: ver `validacao.md`.

# Etapa 9: LinkedIn CTA + Contato
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Implementar as seções 05 (card LinkedIn, screenshot 142600) e 06 (Contato, screenshot 142606) e remover os placeholders.

## Arquivos criados/alterados
- `src/data/linkedin.ts`: título, texto e rótulo do CTA do card; destaques derivados de `experience`, `education` e `languages`.
- `src/sections/LinkedInCta.tsx`: card grande com brilho (`--glow`); à esquerda eyebrow, título, texto e "Conectar no LinkedIn ↗"; à direita o mini-card de perfil (avatar JL, nome, cargo, cidade, 3 destaques), que também é link e clareia no hover.
- `src/sections/Contact.tsx`: "Vamos criar" branco / "juntos?" cinza (até 88 px), `contactText`, "Enviar e-mail" (mailto) e "Copiar e-mail" (toast + ícone ✓ por 2 s; erro → toast com o e-mail), e-mail visível em mono.
- `src/hooks/useCopyToClipboard.ts`: `copy()` retorna sucesso/falha; `copied` volta a false após 2 s (timer limpo ao desmontar).
- `src/data/navigation.ts` + `src/components/layout/Header.tsx`: `unlistedSectionIds = ['linkedin']`, também observados pelo `useActiveSection`.
- `src/App.tsx`: sem placeholders nem `SectionPlaceholder`; `<Toaster position="bottom-center" />` montado.

## Decisões
Ver `decisoes.md` (2026-11-02): destaques derivados no mini-card, `#linkedin` observada pela nav, e-mail visível + toast de erro.

## Verificação e resultado
- Build ok (JS 558 kB / gzip 182 kB), oxlint 0 avisos, `tsc` ok.
- Playwright (1910 e 390 px): mailto e links do LinkedIn corretos; "Copiar e-mail" grava o e-mail na área de transferência, mostra o toast e o ✓ e volta ao normal após 2 s; sem overflow horizontal; console sem erros.
- Nav: rolagem real passa por Sobre → Serviços → Tecnologias → Projetos → nenhum; ao chegar direto em `#linkedin` ou `#contato`, nenhum item fica ativo.

## Problemas e soluções
- "Sobre" ficava ativo ao chegar direto no LinkedIn (seção não observada) → `unlistedSectionIds`.
- Card LinkedIn apertado a 390 px → padding menor no mobile (`p-6`).

## Pendências para a próxima etapa
- Etapa 10: gerar o currículo PDF (jsPDF) e ligar os botões do hero e do Sobre.

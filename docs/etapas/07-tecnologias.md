# Etapa 7: Tecnologias + dialog
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Implementar a seção 03 (Tecnologias, screenshot 142541) com o dialog "Ver detalhes".

## Arquivos criados/alterados
- `src/components/common/TechIcon.tsx`: ícone de marca monocromático pintado com `color` via máscara CSS (`mask` + `-webkit-mask`); sem ícone → `Code` do lucide. Sempre `aria-hidden`.
- `src/sections/technologies/Technologies.tsx`: cabeçalho centralizado, grade 1/2/4 colunas com as 20 tecnologias, reveal por card; guarda a tecnologia selecionada e o botão que abriu o dialog.
- `src/sections/technologies/TechCard.tsx`: o card inteiro é um `<button>` (ícone, nome, categoria mono, resumo, "Ver detalhes ›"), hover igual aos cards de Serviços, anel de foco visível.
- `src/sections/technologies/TechDialog.tsx`: dialog controlado (~450 px): ícone grande, nome, categoria mono e `details`; devolve o foco ao card ao fechar.
- `src/components/ui/dialog.tsx` e `sheet.tsx`: overlay mais escuro (`bg-black/70`, `blur-sm`, 150 ms) e "Close" → "Fechar". *Feito antes de uma queda de luz; recuperado da árvore de trabalho sem perdas.*
- `src/App.tsx`: `<Technologies />` no lugar do placeholder.

## Decisões
Ver `decisoes.md` (2026-11-02): grade sem filtro, reveal por card, devolução de foco, overlay.

## Verificação e resultado
- Build ok (JS 501 kB / gzip 166 kB), oxlint 0 avisos, `tsc` ok.
- Playwright (1910 e 390 px): grade e dialog fiéis ao modelo; abre por clique e por Enter; fecha com Esc; foco volta ao card; sem overflow horizontal; console sem erros.

## Problemas e soluções
- Cards invisíveis no mobile: o reveal da lista inteira (`amount: 0.2`) exigia ~1000 px visíveis → reveal por card.
- Foco não voltava ao card (dialog sem `DialogTrigger`) → `onCloseAutoFocus` com ref do botão (ref passado como objeto para não ler `.current` no render, aviso do oxlint).

## Pendências para a próxima etapa
- Etapa 8: Projetos + filtro em pills + dialog com galeria (reaproveitar `TechIcon` nas tags/capas geradas).

# Etapa 8: Projetos + filtro + dialog/galeria
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Implementar a seção 04 (Projetos, screenshot 142549) com o filtro em pills (site antigo), cards e o dialog com galeria de imagens.

## Arquivos criados/alterados
- `src/sections/projects/Projects.tsx`: título à esquerda + texto à direita; filtro; grade 1/2/3 colunas com `AnimatePresence popLayout` (reorganiza ao filtrar) e reveal por card; `aria-live` com o total; guarda o projeto e o botão que abriu o dialog.
- `src/sections/projects/ProjectFilter.tsx`: pills "Todos" + categorias (de `projectFilters`), com contagem, fundo branco deslizante (`layoutId`), `aria-pressed`; rola na horizontal no mobile.
- `src/sections/projects/ProjectCard.tsx`: card-botão com capa, ano mono sobreposto, título, resumo, até 4 tags + "+N"; hover sobe, clareia e mostra o círculo "↗".
- `src/sections/projects/ProjectCover.tsx`: primeira imagem do projeto ou capa gerada (grade escura, brilho na cor da tech principal, ícones de até 3 techs).
- `src/sections/projects/ProjectGallery.tsx`: imagem grande (300 px no desktop, 16:9 no mobile) + miniaturas rotuladas com `aria-pressed`; reinicia a cada projeto (`key`).
- `src/sections/projects/ProjectDialog.tsx`: dialog (~670 px, rolável até 90svh): galeria, ano, título, descrição, "Destaques", todas as tags, links "Ver online" e "Código no GitHub" (nova aba), X circular sobre a imagem; devolve o foco ao card.
- `src/sections/projects/techLabels.ts`: `techLabel` (id → nome, ou rótulo livre) e `projectTechs` (techs catalogadas do projeto).
- `src/App.tsx`: `<Projects />` no lugar do placeholder.

## Decisões
Ver `decisoes.md` (2026-11-02): filtro com contagem, tags limitadas no card, capa gerada com até 3 ícones, `block` no dialog rolável.

## Verificação e resultado
- Build ok (JS 517 kB / gzip 170 kB), oxlint 0 avisos, `tsc` ok.
- Playwright (1910 e 390 px): 13 cards; filtro "APIs" → 6 (anunciado "6 projetos"); "Todos" → 13; dialog da Biblioteca com 3 miniaturas e troca de imagem; fecha com Esc e com o X; foco volta ao card; sem overflow horizontal; console sem erros.

## Problemas e soluções
- Comando Bash com vários heredocs falhou por quoting → arquivos criados com a ferramenta Write.
- Capas geradas idênticas (quase todos os projetos começam por Python) → até 3 ícones.
- Rótulo "Catalogação física" cortado → miniaturas mais largas e rótulo com quebra de linha.
- Texto do dialog cortado a 390 px (grid alargado pela lista de miniaturas) → `block` no `DialogContent`.

## Pendências para a próxima etapa
- O X do dialog de projeto rola junto com o conteúdo (Esc e clique fora continuam funcionando); avaliar deixá-lo fixo na Etapa 11.
- Etapa 9: LinkedIn CTA + Contato.

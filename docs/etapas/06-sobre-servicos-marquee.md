# Etapa 6: Sobre + Serviços + Marquee
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Implementar as seções 01 (Sobre), 02 (Serviços) e a faixa de tecnologias (screenshots 142524 e 142533).

## Arquivos criados/alterados
- `src/components/common/Section.tsx`: `<section>` com borda superior de largura total + `container-page` com `py-24 sm:py-32`. Padrão para as próximas seções.
- `src/sections/About.tsx`: coluna 1/3 (eyebrow, "Sobre mim", tagline) + 2/3 (nome, bio, **Experiência**, **Formação** em 2 colunas, frase de destaque em branco, pills **Boas práticas**, botão "Visualizar currículo" + linha decorativa). Prop `onViewCv`: botão desabilitado até a Etapa 10. Colunas com `min-w-0`; a linha decorativa só aparece ≥ sm.
- `src/sections/Services.tsx`: título centralizado, 4 cards (grid 1/2/4 colunas), ícone lucide colorido por `iconColor`, entrada escalonada.
- `src/sections/TechMarquee.tsx`: trilha duplicada com `@keyframes marquee` (45 s, -50%), máscara de fade nas bordas, parada com reduced-motion; leitores de tela recebem uma lista única em `sr-only`.
- `src/index.css`: `@keyframes marquee`.
- `src/App.tsx`: About, Services e TechMarquee no lugar dos placeholders.

## Decisões
- O bloco Experiência (não existe no modelo) entra antes de Formação, no mesmo estilo de lista.
- Serviços em 4 colunas no desktop (o modelo tem 6 cards em 3 colunas; temos 4 serviços reais).

## Verificação
- Build ok (JS 497 kB / gzip 165 kB), lint 0 avisos, console sem erros.
- Screenshots a 1910 px comparados com 142524/142533: estrutura, tipografia e cards equivalentes.
- **Ferramenta nova de validação:** Playwright no scratchpad (ver `validacao.md`). Validou também itens pendentes da Etapa 4: nav ativa troca ao rolar ✅, linha de progresso ✅, menu mobile abre e fecha com Esc ✅.
- Overflow horizontal: corrigido (era 401 px a 390 px por causa do botão + linha). Agora 360/390/768/1024 px sem overflow.

## Problemas e soluções
- Uma janela headless alta não mostra as seções (o hero usa `min-h-svh`) → Playwright com `scrollIntoView` por id.
- Overflow no Sobre → `min-w-0` nas colunas do grid + linha decorativa só ≥ sm.

## Pendências
- Etapa 7: Tecnologias + dialog (vai criar o `TechIcon` com máscara CSS).

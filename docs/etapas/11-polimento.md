# Etapa 11: Polimento
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Responsividade, acessibilidade, desempenho, imagens otimizadas, varredura de textos do mock e ajustes pendentes das etapas anteriores.

## Arquivos criados/alterados
- `src/assets/images/**`: PNG/JPEG → WebP (projetos ≤ 1600 px q80; foto 480 px). Originais removidos do repo novo (ficam no repo antigo e no histórico do git).
- `src/data/projects.ts`: imports `.webp`; resumo do Portfólio 2.0 sem "Este site:".
- `src/sections/hero/TechOrbit.tsx`: foto `.webp` 480×528; chips com `min-h-6` (área de toque ≥ 24 px).
- `src/main.tsx` + `index.html` + `package.json`: fontes self-hosted (`@fontsource-variable/inter`, `@fontsource/jetbrains-mono` latin 400/500); links do Google Fonts removidos.
- `src/index.css`: `--font-sans` com 'Inter Variable'; `--subtle` #858585 (contraste AA).
- `src/components/layout/Header.tsx`: logo sem `aria-label` divergente (iniciais `aria-hidden` + "voltar ao início" em `sr-only`).
- `src/sections/projects/ProjectDialog.tsx`: X fixo numa faixa `sticky` de altura 0.
- `public/robots.txt`: libera tudo.

## Decisões
Ver `decisoes.md` (2026-11-02): contraste, fontes, WebP, X fixo, itens mantidos (motion sem LazyMotion, aviso de chunk).

## Comandos relevantes
- Lighthouse 12 instalado no scratchpad (`shots-tool`), rodando com o Edge: `CHROME_PATH=".../msedge.exe" lighthouse <url> [--preset=desktop] --chrome-flags="--headless=new" --output=json`. Resumo com `lh.mjs` (notas, métricas e auditorias < 0,9).
- Varredura `sweep.mjs` (Playwright): 7 larguras × todas as seções, overflow, 404/falhas de rede, console e X do dialog.

## Verificação e resultado
- Lighthouse antes → depois: mobile 86/92/100/92 → **94/100/100/100**; desktop 99/96/100/92 → **100/100/100/100** (Performance/Acessibilidade/Boas práticas/SEO). FCP mobile 3,0 → 2,3 s; CLS 0.
- 360, 390, 768, 1024, 1280, 1440 e 1920 px: sem overflow horizontal; X do dialog visível após rolar; sem falhas de rede; console limpo.
- Grep de mock no `dist/`: 0 ocorrências de conteúdo (o único "Node.js" é código interno do jsPDF).
- Imagens 2,3 MB → 436 kB. Build, `tsc` e oxlint ok.

## Problemas e soluções
- Nenhum bloqueio. Itens restantes do Lighthouse aceitos: JS não usado (motion, ~78 kB), sem source maps, tamanho do DOM (844 nós, maior parte do marquee e dos SVGs).

## Pendências para a próxima etapa
- Etapa 12 (Vercel): login/conta, push do repo, domínio final → depois adicionar `og:image`, canonical e sitemap.
- Validação manual do orbit (ver `estado.md`).

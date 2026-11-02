# Etapa 2: Design system
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Trocar os tokens padrão do shadcn pelos do modelo Base44 e criar os componentes base reutilizáveis.

## Arquivos criados/alterados
- `src/index.css`: tema único escuro em `:root` (sem bloco `.dark`); tokens com nomes do shadcn + extras `surface`, `subtle`, `glow`; fontes Inter/JetBrains Mono; utilities `container-page`, `text-eyebrow` e `card-surface`; base com corpo de texto em peso 300, tracking -0.01em, títulos com -0.035em, scroll suave (desligado com reduced-motion), seleção clara.
- `src/components/ui/button.tsx`: variantes `pill`, `pill-outline`, `icon-circle`; tamanhos `cta` (h-11) e `nav` (h-9).
- `src/components/ui/badge.tsx`: variantes `mono` (tag de tecnologia) e `pill` (Diferenciais).
- `src/lib/motion.ts`: `easeOut`, `fadeUp`, `stagger()`, `revealViewport`.
- `src/components/common/Reveal.tsx`: wrapper de entrada (fade + subida, uma vez).
- `src/components/common/SectionHeading.tsx`: eyebrow "NN — RÓTULO" + título + descrição, alinhamento left/center.
- `src/App.tsx`: **página de amostra temporária** (textos de exemplo, sem conteúdo real); usa `MotionConfig reducedMotion="user"`. Será substituída na Etapa 4.

## Tokens principais (fonte única dos valores: `src/index.css`)
Fundo `#0e0e0e` · card `#151515` · borda `white/8%` · texto `#fafafa` · secundário `#a3a3a3` · sutil `#6b6b6b` · glow `#2d5f6b` · raio do card ≈ 17 px · container de 1216 px de conteúdo.

## Verificação
- `npm run build` e `npm run lint` sem erros nem avisos.
- Screenshot headless (Edge) a 1910 px comparado com os screenshots 142524/142533: largura do conteúdo 347→1563 px (modelo 343→1558); cards, pills, botões e eyebrow equivalentes.
- Comando de screenshot: `msedge --headless=new --window-size=1910,900 --virtual-time-budget=4000 --screenshot=<arq> http://localhost:<porta>/`, com `timeout 30 npx vite preview --port <porta> &` antes.

## Problemas e soluções
- Screenshot headless pode pegar o reveal no meio da animação (elementos esmaecidos). Não é bug; para checar só o layout, aumentar o `--virtual-time-budget`.
- O JS foi a 394 kB (128 kB gzip) com o `motion`. Otimizar na Etapa 11 (`LazyMotion` + `m`, code-split).

## Pendências
- Ajuste fino de tipografia (tamanhos exatos por seção) acontece nas etapas de cada seção.
- Fontes ainda 🔶: visualmente compatíveis no screenshot, mas sem confirmação definitiva.

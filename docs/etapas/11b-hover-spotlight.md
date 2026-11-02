# Etapa 11 (parte 2): hover e feixe de luz
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Pedido do usuário: faltavam as animações de hover dos botões e dos cards de projeto e o feixe de luz de fundo que acompanha o cursor.

## Diagnóstico
- O Windows do usuário tem "Efeitos de animação" desligado (`MinAnimate = 0`), então o navegador reporta `prefers-reduced-motion: reduce`. O código desligava o spotlight e a subida dos cards nesse caso; para ele, os efeitos nunca apareciam.
- Mesmo sem isso, os efeitos eram fracos (spotlight a 10% de opacidade; botões só mudavam de cor).
- Os vídeos do modelo não estão mais em `Videos\Captures`; usei os mosaicos de frames que restaram (card sobe, borda clareia, ↗ aparece; brilho redondo seguindo o cursor).

## Arquivos criados/alterados
- `src/components/layout/Spotlight.tsx`: feixe azul-petróleo (520 px) + núcleo claro (180 px), segue o cursor com rastro (lerp 0,12, loop rAF que para quando alcança o cursor); com reduced-motion segue sem atraso; some ao sair da janela; em toque fica parado como brilho ambiente.
- `src/components/common/CardGlow.tsx` + `src/lib/cardGlow.ts`: brilho radial dentro do card que segue o cursor (`--glow-x/--glow-y`); o card usa `relative isolate group` e o brilho `-z-10` (fica entre o fundo e o conteúdo).
- `src/components/ui/button.tsx`: `pill`, `pill-outline` e `icon-circle` sobem 2 px, ganham brilho/sombra, o ícone cresce e o clique "afunda".
- `src/sections/projects/ProjectCard.tsx`: sobe 6 px, sombra, borda mais clara, imagem com zoom 1,06, ↗ entra girando e crescendo, brilho interno; mesmo efeito no foco por teclado. Sem `motion-reduce`.
- `src/sections/technologies/TechCard.tsx` e `src/sections/Services.tsx`: sobem 4 px, sombra, brilho interno, ícone cresce; seta do "Ver detalhes" desliza.

## Verificação e resultado
- Build, `tsc` e oxlint ok.
- Playwright **com `reducedMotion: 'reduce'`** (como na máquina do usuário): botão sobe 2 px com sombra; spotlight na posição do cursor; card de projeto sobe 6 px com brilho e ↗ visíveis; card de tecnologia sobe 4 px; console sem erros.

## Atualização: animações para todos
O usuário decidiu que **todas** as animações rodam independentemente de `prefers-reduced-motion`.
- `src/App.tsx`: `MotionConfig reducedMotion="never"`.
- `useReducedMotion` removido de `Hero` (fade/parallax), `TechOrbit` (giro dos anéis e ciclo dos chips), `ScrollCue` e `useTypewriter`; `motion-reduce:animate-none` removido do marquee e do cursor piscando; `Spotlight` sempre com rastro; `index.css` sem o bloco que desligava a rolagem suave.
- Verificação (Playwright com `reducedMotion: 'reduce'`): digitação, anéis (WAAPI, sentidos opostos), ciclo dos chips, marquee, indicador de rolagem, reveal (opacidade 0 → 1, y 24 → 0) e fade do hero animando; console limpo. Build, `tsc` e oxlint ok.

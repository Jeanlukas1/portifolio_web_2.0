# Etapa 5: Hero
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Reproduzir o hero do modelo (screenshot 142511 + vídeo) com dados reais.

## Arquivos criados/alterados
- `src/sections/hero/Hero.tsx`: grid de 2 colunas (empilha < lg), container mais largo que o das seções (`max-w-[85rem]`, como no modelo). Entrada escalonada (`stagger` + `fadeUp`). Ao rolar, o conteúdo sobe e esmaece (`useScroll` com target, desligado com reduced-motion). Prop `onDownloadCv`: enquanto não existir, o botão "Baixar CV" fica **desabilitado** (ligar na Etapa 10).
- `src/sections/hero/TypingLine.tsx`: `> ` + frase em mono + cursor piscando (`@keyframes blink` em `index.css`); leitores de tela recebem todas as frases via `sr-only`.
- `src/sections/hero/TechOrbit.tsx`: anel externo tracejado (60 s/volta) e interno sólido (40 s, sentido inverso), cada um com um ponto. Brilho radial atrás. Foto real com vinheta e leve ajuste de brilho/contraste só via CSS. 8 chips nas posições medidas no modelo (px → % de um orbit de 420 px, escala com a tela). Chip ativo alterna a cada 2,6 s (o primeiro após 2,2 s), pausa no hover, clique seleciona. Legenda: nome mono + `summary`, ou a dica "Passe o mouse para pausar / Toque em uma tecnologia" (`aria-live="polite"`).
- `src/sections/hero/ScrollCue.tsx`: cápsula com ponto em loop, link para `#sobre`.
- `src/hooks/useTypewriter.ts`: tempos 90/45/1800/350 ms, início após 900 ms; reduced-motion → primeira frase fixa.
- `src/App.tsx`: `<Hero />` no lugar do placeholder.
- `src/index.css`: `@keyframes blink`.

## Verificação
- `npm run build` ok (JS 487 kB / gzip 161 kB) · lint 0 avisos.
- Screenshot a 1889×1015 (mesmo tamanho do 142511): layout, tipografia, CTAs, ícones, orbit e scroll cue equivalentes. Diferenças: dados reais (Saquarema, chips reais) e foto real.
- 520 px: colunas empilhadas, orbit abaixo do texto e menor, sem overflow.
- **O Edge headless ativa `prefers-reduced-motion` por padrão.** Sem flag: frase fixa, sem ciclo, dica visível (comportamento reduzido ✅). Com `--force-prefers-no-reduced-motion`: digitação e rotação funcionando ✅.

## Pendências
- Validação manual: ciclo dos chips, pausa no hover, clique/toque, fade do hero ao rolar.
- "Baixar CV" desabilitado até a Etapa 10.

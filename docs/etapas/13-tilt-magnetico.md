# Etapa 13: cards com inclinação 3D e botões magnéticos
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Pedido do usuário: cartões de projeto com inclinação 3D e botões magnéticos.

## Arquivos criados/alterados
- `src/hooks/useTilt.ts`: posição do cursor normalizada (-0,5 a 0,5) → `rotateX`/`rotateY` (até 8°) com `useSpring`; `transformPerspective: 1000`; volta a 0 ao sair. Só mouse.
- `src/components/common/Magnetic.tsx`: wrapper com área de atração 12 px além da borda (`p-3 -m-3`, sem mudar o layout); conteúdo segue o cursor (força 0,35, máx. 14 px) com mola e volta ao sair. Só mouse.
- `src/sections/projects/ProjectCard.tsx`: `motion.button` com `useTilt` (combinado com o `trackGlow` do brilho).
- Magnéticos: `Header.tsx` (Contato), `Hero.tsx` (Ver projetos, Baixar CV), `About.tsx` (Visualizar currículo), `LinkedInCta.tsx`, `Contact.tsx` (Enviar/Copiar e-mail), `SocialIcons.tsx` (GitHub, LinkedIn, e-mail; 0,45/10 px).

## Verificação e resultado
- Build, `tsc` e oxlint ok; console sem erros; 390 px sem overflow.
- Playwright: card inclina ~6° na direção do cursor nos cantos, volta a 0° ao sair, o clique ainda abre o dialog.
- Magnético: cursor dentro do botão → 10,5 px; a 6 px da borda esquerda → -14 px (máximo); longe → 0.

## Problemas e soluções
- Primeiro teste do magnético deu 0 px: o ponto "6 px à direita de Ver projetos" fica na área do vizinho "Baixar CV" (gap de 12 px = área de atração), que foi o atraído (-14 px). Comportamento correto; o teste é que estava mal posicionado.

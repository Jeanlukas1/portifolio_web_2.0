# Etapa 4: Layout
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Montar a casca da página: header (logo, nav em pill com seção ativa, CTA, progresso de scroll), menu mobile, footer, spotlight de fundo e a estrutura de seções com âncoras.

## Arquivos criados/alterados
- `src/components/layout/Header.tsx`: fixo, `h-16`, fundo `background/80` + blur, borda inferior. Logo = círculo branco com iniciais + nome. A nav fica centralizada em posição absoluta (só ≥ md); "Contato" (≥ sm); menu (< md).
- `src/components/layout/NavPill.tsx`: pill com o indicador branco animado (`layoutId="nav-pill"`, spring).
- `src/components/layout/ScrollProgress.tsx`: linha de 1 px sobre a borda do header, `useScroll` + `useSpring`, gradiente sky→glow→transparente.
- `src/components/layout/MobileMenu.tsx`: Sheet à direita com os itens + Contato; fecha ao clicar em um item.
- `src/components/layout/Footer.tsx`: "© {ano} Jean Lukas — Saquarema, RJ" (mono), GitHub/LinkedIn/e-mail, "Voltar ao topo ↑" (âncora `#topo`). O ano é calculado no módulo.
- `src/components/layout/Spotlight.tsx`: brilho radial azul-petróleo que segue o cursor; parado (canto superior esquerdo) em toque e com reduced-motion.
- `src/components/common/BrandIcons.tsx`: `GithubIcon` e `LinkedinIcon` com os paths idênticos aos do site antigo.
- `src/components/common/SocialIcons.tsx`: botões circulares (GitHub, LinkedIn, e-mail opcional).
- `src/hooks/useActiveSection.ts`: IntersectionObserver com `rootMargin -45%/-50%` (lógica do `main.js` antigo) + fallback no hero.
- `src/App.tsx`: skip-link, Spotlight, Header, `main#conteudo` com hero `#topo` e seções `#sobre #servicos #tecnologias #projetos #contato` como **placeholders** (só os títulos reais), Footer.

## Decisões
- No hero, a nav mostra "Sobre" ativo (como no screenshot 142511).
- Placeholders sem conteúdo inventado; cada um será substituído pela seção real nas Etapas 5-9.

## Verificação
- `npm run build` ok (JS 447 kB / gzip 147 kB) · `npm run lint` 0 avisos.
- Screenshot a 1910 px: header alinhado ao modelo (logo em x≈347, nav centralizada, Contato à direita, pill ativo branco).
- 500 e 700 px: botão de menu visível; Contato aparece a partir de 640 px.

## Problemas e soluções
- Lint `react(purity)`: `new Date()` durante o render → movido para escopo de módulo.
- O Edge headless tem largura mínima de ~500 px: screenshots a 390 saem cortados (não é bug). Validar 360-390 px no DevTools.
- O Edge headless não aplica âncoras (`/#secao`) antes do screenshot: a troca de seção ativa e a linha de progresso **ainda não foram vistas funcionando**. Validar manualmente com `npm run dev`.

## Pendências
- Validação manual: nav ativa ao rolar, linha de progresso, menu mobile (abrir, navegar, Esc).
- Etapa 5: Hero.

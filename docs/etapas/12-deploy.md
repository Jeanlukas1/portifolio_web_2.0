# Etapa 12: Deploy (Vercel)
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Publicar o site na Vercel e finalizar o SEO com a URL definitiva.

## Arquivos criados/alterados
- `src/data/projects.ts`: sem pill "Estudos" no filtro (pedido do usuário); projetos de estudo seguem em "Todos".
- `src/data/profile.ts`, `src/data/experience.ts`: textos editados **pelo usuário** (hero, Sobre, destaque, diferencial "Comunicação", período "Trabalhando atualmente"); foram para o ar no 1º deploy (o CLI envia a árvore local) e foram commitados para o repo igualar a produção.
- `index.html`: og:url, og:locale, og:site_name, og:image (+ dimensões e alt), Twitter card, canonical.
- `public/og.png`: captura do hero em produção (1440×756 → 1200×630), tirada após a 1ª frase da digitação terminar.
- `public/robots.txt` (+ `Sitemap:`), `public/sitemap.xml`.
- `vercel.json`: cache imutável para `/assets/*`.
- `.gitignore`: `.vercel` (adicionado pelo CLI).

## Comandos relevantes
- `git branch -m master main` + `git push -u origin main` (repo estava vazio e privado).
- Login: usuário rodou `! npx vercel@latest login` (device code).
- Deploy: `npx vercel@latest --prod --yes` (3 vezes: inicial, SEO, cabeçalhos).
- `npx vercel@latest git connect --yes` → **falhou**: o app da Vercel no GitHub não tem acesso ao repo privado.

## Verificação e resultado (em produção)
- `https://portifolioweb20.vercel.app` público (HTTP 200 sem login); `og.png`, `sitemap.xml`, `robots.txt` 200; canonical e og:image com URL absoluta.
- Assets com `Cache-Control: public, max-age=31536000, immutable` (HIT na CDN).
- Playwright: 7 larguras sem overflow, sem falhas de rede, console limpo; "Baixar CV" e "Visualizar currículo" ok; copiar e-mail e mailto ok.
- Lighthouse: mobile 91/100/100/100, desktop 100/100/100/100.

## Problemas e soluções
- Alterações locais não commitadas do usuário foram publicadas pelo CLI → commitadas logo depois; regra registrada em `arquitetura.md`.
- 1ª captura do og.png pegou a digitação no meio e o chip PostgreSQL cortado → janela maior + espera pela frase completa.
- Cabeçalho de cache pareceu não aplicar no 1º teste → era a resposta antiga em cache; conferido de novo (immutable).

## Pendências
- Usuário: revisar o currículo PDF e os textos que editou.

## Atualização: repo público e deploy automático
- Usuário conectou o repo à Vercel; `vercel git connect` confirma "already connected".
- Antes de abrir o repo: varredura do histórico inteiro (arquivos e diffs) sem segredos nem dados privados.
- `gh repo edit --visibility public` → GitHub responde 200 sem login; o link "Código no GitHub" do card Portfólio 2.0 passa a funcionar.

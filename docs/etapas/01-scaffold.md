# Etapa 1: Scaffold
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Criar a base Vite + React + TS com Tailwind v4, alias `@/`, shadcn/ui e as dependências do projeto.

## Arquivos criados/alterados
- `package.json` / `package-lock.json`: scripts `dev`, `build` (`tsc -b && vite build`), `lint` (oxlint), `preview`.
- `vite.config.ts`: plugins react + tailwindcss; alias `@` → `src`.
- `tsconfig.json`, `tsconfig.app.json`: `paths` `@/*` (o `tsconfig.json` raiz também, para o CLI do shadcn). `tsconfig.node.json` sem mudanças.
- `.oxlintrc.json`: regras do template + `only-export-components` desligada em `src/components/ui/**` (arquivos gerados pelo shadcn exportam variants).
- `.gitignore`: template do Vite + `*.exe`.
- `index.html`: `lang="pt-BR"`, `class="dark"`, title/description/OG/theme-color vindos do site antigo, favicon, Google Fonts (Inter + JetBrains Mono).
- `public/favicon.png`: cópia de `../portifolio-web/src/assets/imgs/logos/logo_pagian.png`.
- `src/main.tsx`, `src/App.tsx` (placeholder "em construção"), `src/index.css` (Tailwind + tokens padrão do shadcn; fontes trocadas para Inter/JetBrains Mono).
- `components.json` + `src/lib/utils.ts` + `src/components/ui/{button,badge,dialog,sheet,sonner}.tsx` (gerados pelo shadcn).
- `src/components/ui/sonner.tsx`: sem `next-themes`, tema fixo `dark`.

## Decisões (detalhes em `decisoes.md`)
- O template atual do Vite traz **oxlint** (não ESLint), **TypeScript 7** e **Vite 8**: mantidos.
- O shadcn (preset `radix-nova`) usa o pacote **`cn`** (oficial, repo `shadcn-ui/cn`) no lugar de `clsx` + `tailwind-merge`: mantido.
- Removidos `@fontsource-variable/geist` e `next-themes`, adicionados pelo shadcn e desnecessários aqui.

## Comandos relevantes
`npm create vite@latest <tmp> -- --template react-ts --no-interactive` (gerado no scratchpad e copiado, porque a raiz já tinha `docs/`) · `npm i tailwindcss @tailwindcss/vite motion lucide-react jspdf` · `npx shadcn@latest init -t vite -b radix -p nova --no-monorepo --pointer -y` · `npx shadcn@latest add badge dialog sheet sonner -y`.

## Verificação
- `npm run build`: ok (JS 219,7 kB / gzip 68,7 kB, só o placeholder).
- `npm run lint`: 0 avisos.
- Dev server: `/`, `/src/main.tsx` e `/favicon.png` respondem 200.

## Problemas e soluções
- `shadcn init` sem `-p` abre um prompt interativo → passar `-p nova`.
- O npm avisa que o script de instalação do `core-js` não foi aprovado: é só uma mensagem de funding; não precisa aprovar.
- Ao testar o dev server, não encerrar processos `node` genéricos (o auto mode bloqueia). Usar `timeout N npx vite ...` no Bash.

## Pendências para a próxima etapa
- Etapa 2: substituir os tokens padrão do shadcn pelos tokens do Base44 (`referencia-visual.md`) e criar os componentes base.

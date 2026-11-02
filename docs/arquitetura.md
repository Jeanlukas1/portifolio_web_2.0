# Arquitetura
Legenda: ✅ implementado · 📐 planejado (ainda não existe no código). Ao implementar, trocar 📐 por ✅.

## Versões principais ✅
Vite 8 · React 19 · TypeScript 7 · Tailwind 4.3 · shadcn CLI 4 (preset `radix-nova`, base Radix) · motion 14 · lucide-react 1.x · jsPDF 4 · lint com **oxlint** (template atual do Vite; não há ESLint).
Scripts: `npm run dev` · `build` (`tsc -b && vite build`) · `lint` · `preview`.

## Sistema
- 📐 SPA de página única, sem router, sem back-end, **sem banco de dados**. Site estático (build do Vite) hospedado na **Vercel**.
- Integrações externas: apenas links (GitHub, LinkedIn, sites dos projetos), `mailto:` e Clipboard API. Nenhuma API é chamada em tempo de execução.
- Os dados de GitHub (ano dos projetos etc.) são coletados **em desenvolvimento** via `gh` e gravados em `src/data/`, não buscados em runtime.
- Testes: não há suíte automatizada planejada; a verificação é `npm run build` (tsc + vite) + `npm run lint` (oxlint) + checagem visual/manual (checklist em `validacao.md`).

## Stack e papel de cada lib
| Lib | Uso | Observação |
|---|---|---|
| React + Vite + TypeScript ✅ | base, alias `@/` → `src` (vite.config + tsconfig) | template oficial `react-ts` |
| Tailwind CSS v4 ✅ | estilos; tokens via `@theme` em `src/index.css` | plugin `@tailwindcss/vite`, sem `tailwind.config`; importa `tw-animate-css` e `shadcn/tailwind.css` |
| shadcn/ui ✅ | `button`, `badge`, `dialog`, `sheet`, `sonner` instalados (+ `tooltip` se preciso) | `cn()` vem do pacote `cn` (oficial do shadcn, substitui clsx + tailwind-merge); `sonner` com tema fixo dark, sem next-themes |
| motion (Framer Motion) | reveal, pill da nav (`layoutId`), orbit, `useScroll`, `AnimatePresence` | `MotionConfig reducedMotion="never"` (animações para todos) |
| lucide-react | ícones de UI | logos de marca são SVGs locais em `src/assets/icons/`; a versão 1.x não tem GitHub/LinkedIn (usar SVG inline) |
| jsPDF | currículo | `import()` dinâmico no clique |
| Fontes ✅ self-hosted | Inter (`@fontsource-variable/inter`) + JetBrains Mono (`@fontsource/jetbrains-mono`, latin 400/500), importadas em `main.tsx`; `--font-sans`/`--font-mono` no CSS | 🔶 escolha inferida do vídeo; Google Fonts removido (bloqueava a renderização) |

## Estrutura de pastas (📐)
```
src/
  main.tsx  App.tsx  index.css            ✅
  components/ui/        ✅ shadcn (não editar à mão além do estilo)
  components/layout/    ✅ Header, NavPill, MobileMenu, ScrollProgress, Footer, Spotlight
  components/common/    Section ✅, SectionHeading ✅, Reveal ✅, BrandIcons ✅, SocialIcons ✅, TechIcon ✅
  sections/             hero/ ✅ (Hero, TypingLine, TechOrbit, ScrollCue), About ✅, Services ✅, TechMarquee ✅, technologies/ ✅ (Technologies, TechCard, TechDialog), projects/ ✅ (Projects, ProjectFilter, ProjectCard, ProjectCover, ProjectDialog, ProjectGallery, techLabels), LinkedInCta ✅, Contact ✅
  data/                 ✅ profile, navigation, services, technologies, projects, education, experience, linkedin (.ts)
  types/content.ts      ✅ tipos do conteúdo
  hooks/                useActiveSection ✅, useTypewriter ✅, useCopyToClipboard ✅, useResume ✅
  lib/                  utils (cn) ✅, motion (variants) ✅, resume/generateResume ✅ (carregado por import() dinâmico)
  assets/icons/ ✅ (20 SVGs Simple Icons, monocromáticos)  assets/images/profile.webp ✅ (480 px)  assets/images/projects/<slug>/*.webp ✅ (≤ 1600 px)
public/favicon.png    ✅
```

## Convenções
- Conteúdo só em `src/data/`; seções recebem os dados e renderizam. Tecnologias são referenciadas por **id** (`technologies.ts`) em projetos, orbit e marquee.
- Adicionar um projeto = 1 objeto em `projects.ts` + imagens em `assets/images/projects/<slug>/`, **em WebP**: `ffmpeg -i in.png -vf "scale='min(1600,iw)':-2" -c:v libwebp -quality 80 -compression_level 6 out.webp`.
- `public/robots.txt` libera tudo; sitemap/canonical/og:image dependem do domínio (Etapa 12).
- Campos opcionais (ano, links, imagens) ficam vazios quando não há dado real; a UI se adapta.
- Ícones de marca: SVG monocromático + `color` em `technologies.ts`, aplicados via máscara CSS. Novo ícone = baixar do Simple Icons (mesmo formato) para `src/assets/icons/`.
- `Project.tech` aceita ids de `technologies.ts` ou rótulos livres.
- Componentes em PascalCase; hooks `useX`; nomes de arquivos de assets sem espaços.
- **Estilo:** cores sempre por token (`bg-card`, `text-muted-foreground`, `text-subtle`, `border-border`), nunca hex solto, exceto ajustes de hover. Utilities próprias: `container-page`, `text-eyebrow`, `card-surface`. Botões do modelo: `<Button variant="pill"|"pill-outline"|"icon-circle" size="cta"|"nav">`. Tags: `<Badge variant="mono"|"pill">`.
- **Animação:** usar `Reveal` / as variants de `lib/motion.ts`; o `App` fica envolto em `MotionConfig reducedMotion="never"`. **Não** usar `useReducedMotion` nem `motion-reduce:` (decisão do usuário: animações para todos).
- **Seções:** envolver em `<Section id=...>` (borda superior de largura total + container + padding vertical padrão); grids com `min-w-0` nas colunas para evitar overflow.
- **Âncoras:** hero `#topo`; seções `#sobre #servicos #tecnologias #projetos #contato` (ids de `data/navigation.ts`). Conteúdo em `main#conteudo` (alvo do skip-link), acima do Spotlight (`z-10`).

## Ambiente (máquina do usuário)
- Windows 11; shells: PowerShell 5.1 e Git Bash.
- Node **v26.13.0**, npm **11.20.0** (winget `OpenJS.NodeJS.LTS`); ffmpeg **9.0.2** (winget `Gyan.FFmpeg`). Instalados em 2026-11-02.
- Navegador do usuário: Opera GX (a extensão Claude in Chrome não está disponível).
- Remote: `https://github.com/Jeanlukas1/portifolio_web_2.0.git` (privado), branch `main` (renomeada de `master` no primeiro push, 2026-11-02).
- Vercel CLI via `npx vercel@latest` (sem instalação global).
- Lint: `.oxlintrc.json` desliga `only-export-components` em `src/components/ui/**`.
- Repo antigo: `../portifolio-web` (remote `Jeanlukas1/portifolio-web`, GitHub Pages).

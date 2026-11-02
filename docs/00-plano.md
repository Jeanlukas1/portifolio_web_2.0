> **ARQUIVO HISTÓRICO (congelado em 2026-11-02).** Plano original aprovado. Não atualizar. O estado e as decisões atuais estão em `estado.md`, `decisoes.md`, `arquitetura.md`, `conteudo.md` e `referencia-visual.md`, que prevalecem em caso de divergência (ex.: deploy definido como Vercel; LinkedIn descartado).

# Plano de Modernização — portfolio_web → React + Vite + TS (portifolio_web_2.0)

## Contexto
O portfólio atual (`../portifolio-web`, HTML/CSS/JS puro, publicado no GitHub Pages) será migrado para React + Vite + TypeScript + Tailwind + shadcn/ui + Framer Motion + lucide-react + jsPDF, reproduzindo fielmente o modelo visual "Nexus Portfolio" do Base44 (7 screenshots + vídeo), com **conteúdo 100% real**. Decisões já tomadas com você:
- A nova app será construída em **`portifolio_web_2.0`** (hoje vazio, só `.git` + remote), importando assets e conteúdo de `portifolio-web`, que permanece intacto como backup e no ar até a troca.
- Animações do vídeo: **instalar ffmpeg após aprovação** e extrair frames para análise (Etapa 0).
- LinkedIn: **descartado como fonte** (bloqueia acesso automático; você pediu para esquecer). Fontes de dados: repo atual, GitHub, CV atual e **confirmação direta com você**. O link do LinkedIn continua no site (botões e seção "Veja meu perfil profissional").
- Serviços: **manter a seção com o design do Base44, só com serviços que você confirmar**.

---

## 1. Diagnóstico da aplicação atual (`../portifolio-web`)
**Estrutura:** `index.html` (451 linhas, página única), `src/styles/global.css` (~24 KB, tokens em `:root`, fonte "Stack Sans Headline"), `src/scripts/main.js` (125 linhas), `src/assets/{icons,imgs,pdf}`. Sem build, sem dependências. `.vscode/settings.json` só tem config do vscode-pets. Existe 1 alteração não commitada em `index.html` (não será mexida).

**Seções:** Header (logo + nav + CTA Contato) · Hero (foto circular com anel, chips, efeito de digitação, CTAs, redes) · Sobre · Tecnologias (4 grupos de badges) · Projetos (filtros + 2 destaques com galeria + 10 cards) · Aprendizado (CS50 SQL, Eng. de Software, Boas práticas) · Contato · Footer.

**Funcionalidades em `main.js` (todas a preservar):** header com fundo ao rolar · menu mobile acessível (aria-expanded, Esc, trava scroll) · revelação ao rolar (IntersectionObserver) · link ativo conforme seção · filtro de projetos por categoria · galeria com miniaturas · digitação de cargos (`Full-Stack`, `Back-End`, `Python`, `de APIs REST`) respeitando `prefers-reduced-motion` · ano dinâmico no rodapé · download do CV (PDF estático) · skip-link.

**Assets a preservar/reaproveitar:**
| Asset | Destino |
|---|---|
| `imgs/foto_status/WhatsApp Image 2026-10-31 at 20.40.05.jpeg` (foto real) | `src/assets/images/profile.jpeg` — **substitui a foto genérica do Base44** |
| `imgs/biblioteca/{catalogo,relatorios,catalogacao-fisica}.png` | `src/assets/images/projects/biblioteca/` |
| `imgs/landingpageresponsiva/{inicio,por-que-nos,beneficios,depoimentos}.png` | `.../projects/landing-page/` |
| `imgs/filmes_crud/imagem_2026-10-09_195529058.png` | `.../projects/films-crud/cover.png` |
| `icons/*.svg` (14: python, fastapi, flask, sql, postgresql, mongodb, docker, pytest, git, github, postman, swagger, html5, css3) | `src/assets/icons/` |
| `imgs/logos/logo_pagian.png` | `public/favicon.png` |

**NÃO copiar (permanecem só no repo antigo, nada é excluído):** `imgs/biblioteca/originais/` (contém dados pessoais de alunos; já no `.gitignore`) · `Claude Setup.exe` (instalador, no `.gitignore`) · `logos/download.png`, `logos/github.png` (não referenciados) · `pdf/curriculo-jean-lukas.pdf` (ver §13 — contém telefone, endereço, data de nascimento e estado civil).

**Problemas/limitações:** HTML monolítico com conteúdo misturado à marcação (adicionar projeto = copiar `<article>`); imagens PNG pesadas (`catalogo.png` 1,1 MB); placeholders de comentário ("Troque por um texto seu"); typo "landign"; tags do projeto Biblioteca genéricas apesar da stack ser conhecida; CV estático desatualizado (5º período, "Experiência" vazia).

**Ambiente:** **Node/npm não estão instalados** (nem no Bash nem no PowerShell) — pré-requisito. ffmpeg também não.

## 2. Análise das referências visuais (screenshots; vídeo pendente)
Tema escuro monocromático: fundo ~`#0e0e0e`, superfícies ~`#151515`, bordas `white/8%`, texto branco e cinzas, raios ~16 px (cards) e pill (botões/nav). Sem cor de destaque, exceto os ícones de marca e um brilho azul-petróleo sutil (radial atrás do orbit, no card LinkedIn e no canto superior esquerdo).
Tipografia: sans geométrica com tracking negativo nos títulos (Inter/Geist-like) + **mono espaçada em caixa alta** para eyebrows (`01 — SOBRE`), chips, tags, anos e rodapé. *Fonte exata a confirmar pelo vídeo.*

| Seção (ref.) | Elementos | Componentes |
|---|---|---|
| Header (todas) | Logo círculo branco "JL" + nome; nav central em pill com item ativo pill branco; CTA "Contato" pill branco; borda inferior + **linha de progresso de scroll** com gradiente | `Header`, `NavPill` (indicador com `layoutId`), `ScrollProgress`, `MobileMenu` (Sheet) |
| Hero (142511) | Eyebrow mono "OLÁ, EU SOU O"; nome ~96 px; linha terminal `> ▍` (digitação); parágrafo; CTAs "Ver projetos ↘" (sólido) e "Baixar CV" (outline); ícones GitHub/LinkedIn em círculo + localização mono; **orbit**: foto circular, 2 anéis (um tracejado), pontos orbitando, chips de tecnologias, chip ativo branco + legenda abaixo ("AWS — Deploy, storage…"); indicador de scroll (mouse) | `Hero`, `TypingLine`, `TechOrbit`, `OrbitChip`, `ScrollCue`, `SocialIcons` |
| Sobre (142524) | Grid 2 col: esquerda eyebrow + "Sobre mim" + subtítulo; direita nome, bio, "POSSO TE AJUDAR SE VOCÊ PRECISA DE:" (lista 2 col), frase de destaque, "Diferenciais" (pills), botão "VISUALIZAR CURRÍCULO" + linha decorativa | `About`, `SectionHeading`, `PillList` |
| Serviços (142533) | Título centralizado; grid 3×2 de cards com ícone lucide colorido em quadrado, título, descrição | `Services`, `ServiceCard` |
| Marquee (142533) | Faixa com bordas, tecnologias em mono separadas por "•", fade nas extremidades, rolagem infinita | `TechMarquee` |
| Tecnologias (142541) | Grid 4 col; card: ícone de marca colorido, nome, categoria mono (FRONT-END/BACK-END/DEVOPS/TESTES), descrição, "Ver detalhes ›" | `Technologies`, `TechCard`, `TechDialog` |
| Projetos (142549) | Header 2 col (título / texto à direita); grid 3 col; card com imagem 4:3, ano mono sobreposto, título, descrição, tags mono pill | `Projects`, `ProjectCard`, `ProjectDialog` (galeria) |
| LinkedIn (142600) | Card grande com glow; esquerda eyebrow/título/texto/CTA "Conectar no LinkedIn ↗"; direita mini-card perfil (avatar JL, nome, cargo, 3 bullets) | `LinkedInCta` |
| Contato (142606) | Título gigante 2 linhas ("Vamos criar" branco / "juntos?" cinza); texto; "Enviar e-mail" (sólido) e "Copiar e-mail" (outline) | `Contact`, `useCopyToClipboard` + toast |
| Footer (142606) | Copyright mono + local; 3 ícones circulares; "VOLTAR AO TOPO ↑" | `Footer` |

**Pendente do vídeo (Etapa 0, sem inventar):** velocidade/direção do orbit e se o chip ativo alterna automaticamente ou por hover · animação de entrada do hero e das seções · comportamento do indicador da nav (desliza?) e da linha de progresso · conteúdo/forma dos modais "Ver detalhes" e "Abra um projeto" · hover dos cards · velocidade do marquee · menu mobile e layout em telas pequenas · o brilho de fundo segue o cursor? · feedback do "Copiar e-mail" · ação do "Visualizar currículo" (abrir vs baixar). Existe também um segundo vídeo (`... 14-21-51.mp4`, 4 MB) que analisarei junto.

## 3. Informações reais levantadas
| Dado | Valor | Fonte |
|---|---|---|
| Nome de exibição | Jean Lukas (completo: Jean Lukas de Marins Costa do Nascimento) | site, GitHub |
| Título | Desenvolvedor Full-Stack (foco back-end Python) | site |
| Localização | **Saquarema – RJ** (Jaconé) | GitHub, CV |
| Formação | Engenharia de Software — Universidade de Vassouras (Saquarema). CV diz 5º período (desatualizado?) | CV, GitHub bio |
| Cursos/estudos | CS50 Intro to Databases with SQL (Harvard), DunkiCode (Programação Fullstack), RocketSeat | repos |
| Idiomas | Português nativo; Inglês B2 (Cambridge) | CV |
| E-mail público | jeanlukasdemarinscosta@gmail.com | site, CV |
| GitHub / LinkedIn | github.com/Jeanlukas1 · linkedin.com/in/jean-lukas-marins-costa-0998ab301 | site |
| Bio do hero | "Construo APIs, sistemas e interfaces web, com foco em Python…" | site (o Base44 já usa este texto) |
| Experiência profissional | **Nenhuma registrada** — confirmar com você (sem LinkedIn) | CV |

**Projetos (12 do site + 2 novos no GitHub):** Biblioteca Virtual (destaque; stack confirmada no repo: React 19, TypeScript, Vite, PWA, Recharts, FastAPI, SQLAlchemy, Alembic, PostgreSQL, JWT, Pytest/Vitest) · Landing page responsiva · Films CRUD API · Users CRUD API · Testes com Pytest · Gerenciador de senhas (Flask) · API clínica veterinária (especificação de requisitos) · Chromebooks do colégio · Task CRUD (Flask) · GitHub User Activity (CLI) · Gerenciador de senhas (MVC) · Gerenciador de tarefas · RPG em Python · Market Maps. Novos sem descrição: `atividade_fs` ("Projeto integrador Full Stack: reservas de laboratórios"), `mural-avisos-academicos`.
**Tecnologias com evidência:** Python, FastAPI, Flask, Django (CV), SQL, PostgreSQL, MongoDB, SQLAlchemy, Docker, Pytest, Git/GitHub, Postman, Swagger, HTML5, CSS3, JavaScript (repos), React, TypeScript, Vite (Biblioteca).

## 4. Dados fictícios do Base44 a descartar
Foto do modelo · "São Paulo, Brasil" · "mais de 3 anos de experiência" · "React.js, Next.js e Node.js no dia a dia" · lista "Posso te ajudar" e Diferenciais (Entrega rápida etc.) · os 6 serviços (Web App, Mobile/React Native + Expo, E-commerce/Firebase/Google Maps…) · "Respondo em até um dia útil" · tecnologias sem evidência: **AWS, Node.js, Next.js, Supabase, Firebase, Tailwind, Celery, Redis, Figma** · projetos Orbit Pay, GeoLink API, Pulse Monitor + suas imagens e anos · LinkedIn bullets "Recomendações / Projetos e publicações" (só se confirmados) · "© 2026 … São Paulo".

## 5. Arquitetura proposta
SPA de página única (sem router — não há páginas múltiplas; os modais cobrem o "detalhe"). Conteúdo em `src/data/*.ts` tipado; componentes só renderizam dados. Animações centralizadas em variants reutilizáveis + `MotionConfig reducedMotion="user"`.

**Bibliotecas e uso:**
- **Tailwind CSS v4** (`@tailwindcss/vite`), tokens via `@theme` em `index.css` (cores, fontes, raios) — sem `tailwind.config`.
- **shadcn/ui** (só o necessário): `button`, `badge`, `dialog` (tech/projeto), `sheet` (menu mobile), `sonner` (toast "e-mail copiado"), `tooltip` (opcional). Restilizados para o visual Base44. Traz `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`, `sonner` — sem libs concorrentes.
- **Framer Motion** (`motion`): reveal `whileInView`, indicador da nav com `layoutId`, orbit, `useScroll` para progresso, `AnimatePresence` nos modais/galeria.
- **lucide-react**: ícones de UI (Download, ArrowDownRight, ArrowUpRight, Mail, Copy, ChevronRight, Globe, Server, …). **Ícones de marca** (lucide não tem/depreca): SVGs locais existentes + novos SVGs para React, TypeScript, Vite, JavaScript, SQLAlchemy, Django, LinkedIn (arquivos, sem nova dependência).
- **jsPDF**: carregado via `import()` dinâmico só no clique (fora do bundle inicial).
- Fontes via Google Fonts `<link>` no `index.html` (sem dependência), definidas após a análise do vídeo.

## 6. Estrutura de diretórios (portifolio_web_2.0)
```
index.html  vite.config.ts  tsconfig*.json  components.json  eslint.config.js  package.json  .gitignore  README.md
public/favicon.png
src/
  main.tsx  App.tsx  index.css
  components/
    ui/                 # shadcn (button, badge, dialog, sheet, sonner)
    layout/             # Header, NavPill, MobileMenu, ScrollProgress, Footer
    common/             # SectionHeading, Reveal, TechIcon, SocialIcons, Marquee
  sections/
    hero/               # Hero, TypingLine, TechOrbit, ScrollCue
    About.tsx  Services.tsx  TechMarquee.tsx
    technologies/       # Technologies, TechCard, TechDialog
    projects/           # Projects, ProjectCard, ProjectDialog, ProjectGallery, ProjectFilters
    LinkedInCta.tsx  Contact.tsx
  data/                 # profile.ts, navigation.ts, services.ts, technologies.ts, projects.ts, education.ts, experience.ts
  types/content.ts      # Profile, Technology, Project, Service, Education, Experience
  hooks/                # useActiveSection, useTypewriter, useCopyToClipboard
  lib/                  # utils.ts (cn), motion.ts (variants), resume/generateResume.ts
  assets/icons/  assets/images/profile.jpeg  assets/images/projects/<slug>/
```
`Project` terá `slug, title, summary, description, highlights[], tech[] (ids de technologies.ts), category, year?, images[], repoUrl?, liveUrl?, featured?` — `year` opcional: preenchido pela data de criação do repo (via `gh api`), nunca inventado. Projetos sem imagem usam uma capa gerada (gradiente/padrão escuro no estilo das capas do Base44 + ícone da tech principal) — não é foto falsa de projeto.

## 7. Mapeamento funcionalidade antiga → nova
| Atual | Nova implementação |
|---|---|
| Header com fundo ao rolar | `Header` com borda + `ScrollProgress` (como no Base44) |
| Menu mobile | `Sheet` shadcn (foco, Esc e scroll lock nativos do Radix) |
| `.revelar` + IntersectionObserver | `Reveal` (`whileInView`, `once`) |
| Link ativo | `useActiveSection` (IntersectionObserver) + pill animado |
| Digitação de cargos | `useTypewriter` na linha `> ▍` do hero, mesmas frases; estático com reduced-motion |
| Filtro de projetos | `ProjectFilters` em pills no estilo da nav (o Base44 não mostra filtros — ver §14) |
| Galeria com miniaturas | dentro de `ProjectDialog` |
| PDF estático | `generateResume()` com jsPDF (download em "Baixar CV"; abrir em nova aba em "Visualizar currículo") |
| Ano do rodapé | `new Date().getFullYear()` |
| Seção Aprendizado | conteúdo vai para `education.ts` → CV + bloco em Sobre (ver §14) |
| Meta tags / OG / theme-color / skip-link | preservados no `index.html` / `App` |

## 8. Plano de migração
- **Mantidos (intocados):** todo o repo `portifolio-web`, continua no ar.
- **Copiados (sem alterar o original):** os assets da tabela do §1, renomeados com nomes limpos (sem espaços).
- **Reescritos (conteúdo extraído, não copiado como código):** `index.html` → componentes + `data/`; `global.css` → tokens Tailwind; `main.js` → hooks/componentes.
- **Novos:** todos os arquivos de config + `src/` descritos no §6.
- **Dependências:** `react react-dom motion lucide-react jspdf` + (shadcn) `radix-ui class-variance-authority clsx tailwind-merge sonner tw-animate-css`; dev: `vite @vitejs/plugin-react typescript @types/react @types/react-dom @types/node tailwindcss @tailwindcss/vite eslint` (template oficial do Vite).
- **Configs:** alias `@/` → `src` (vite + tsconfig), `base` do Vite conforme deploy (§14), `.gitignore` (node_modules, dist, `*.exe`).
- **Riscos:** ver §12.

## 9. Documentação de progresso (criada ANTES de qualquer código)
Primeiro passo após a aprovação. Objetivo: se a sessão for fechada, a próxima retoma lendo só a documentação, sem reler o código.
```
CLAUDE.md                 # curto: "leia docs/README.md antes de qualquer trabalho"; regras do projeto (dados reais, sem mock, privacidade)
docs/
  README.md               # índice + STATUS ATUAL: etapa em andamento, próxima etapa, pendências/decisões em aberto
  00-plano.md             # cópia deste plano (fonte da verdade da arquitetura)
  decisoes.md             # registro de decisões (data, decisão, motivo) — ex.: LinkedIn descartado, 2.0 como destino
  referencia-visual.md    # análise dos screenshots + frames do vídeo (tokens, fontes, animações)
  conteudo.md             # dados reais usados, fonte de cada um, e lista do que foi descartado do mock
  etapas/
    00-preparacao.md      # um arquivo por etapa do §10
    01-scaffold.md
    ...
```
**Modelo de cada `etapas/NN-*.md`:** objetivo · status (concluída/parcial) · arquivos criados/alterados (com papel de cada um) · decisões tomadas · comandos usados (instalação, build) · resultado da verificação (build, screenshots, checks) · problemas encontrados e como foram resolvidos · pendências que passam para a próxima etapa.
**Regra de trabalho:** uma etapa só termina depois que o seu arquivo em `docs/etapas/` está escrito e o "STATUS ATUAL" do `docs/README.md` está atualizado. Só então começa a etapa seguinte. Ao retomar uma sessão: ler `CLAUDE.md` → `docs/README.md` → o arquivo da última etapa.

## 10. Etapas de implementação (incrementais, cada uma termina com `npm run build` sem erros e com a documentação da etapa escrita)
| # | Objetivo | Arquivos | Conclusão / verificação |
|---|---|---|---|
| D | Estrutura de documentação | `CLAUDE.md`, `docs/*` | arquivos do §9 criados; `00-plano.md`, `decisoes.md`, `conteudo.md` preenchidos com o que já sabemos |
| 0 | Pré-requisitos e fechamento da análise | — | Node LTS + ffmpeg instalados (winget, com sua autorização); frames dos 2 vídeos extraídos para o scratchpad e analisados; §2 atualizado; respostas do §14 recebidas |
| 1 | Scaffold | `package.json`, configs, `src/main.tsx`, `App.tsx` | `npm create vite` (react-ts) na 2.0, Tailwind v4, alias, `shadcn init` + componentes; `dev` e `build` ok |
| 2 | Design system | `index.css`, `lib/motion.ts`, `common/*` | tokens/fontes; página de teste com SectionHeading, botões, pills, card comparados com os screenshots |
| 3 | Dados + assets | `types/`, `data/*`, `assets/*` | dados reais do §3 tipados; `tsc` ok; todas as imagens importadas resolvem |
| 4 | Layout | `layout/*` | header, nav pill ativa, progresso, menu mobile, footer funcionando em 375/768/1440 |
| 5 | Hero | `sections/hero/*` | orbit + digitação + CTAs fiéis ao 142511 e ao vídeo; reduced-motion ok |
| 6 | Sobre + Serviços + Marquee | `About`, `Services`, `TechMarquee` | comparação com 142524/142533 |
| 7 | Tecnologias | `technologies/*` | grid 4/2/1 colunas, dialog acessível |
| 8 | Projetos | `projects/*` | cards, filtro, dialog com galeria, links externos |
| 9 | LinkedIn + Contato | `LinkedInCta`, `Contact`, `useCopyToClipboard` | mailto, cópia + toast |
| 10 | Currículo PDF | `lib/resume/generateResume.ts` | PDF A4 com quebra de página, só dados reais/públicos, acentos corretos |
| 11 | Polimento | todos | responsividade, a11y (foco, aria, contraste), meta/OG, imagens otimizadas (WebP), lazy-load |
| 12 | Deploy | workflow ou config de hosting | site publicado, link antigo atualizado/redirecionado |

## 11. Estratégia de validação
- **Fidelidade visual:** abrir o site no Chrome (claude-in-chrome) a 1920×1080, screenshots seção a seção lado a lado com as 7 referências e os frames do vídeo; checklist por seção (espaçamento, tipografia, cores, raios, estados).
- **Dados:** tabela "campo → fonte" revisada por você; grep no build por termos do mock (`São Paulo`, `Orbit Pay`, `AWS`, `Next.js`, `3 anos`…) deve dar zero.
- **Funcionalidades:** roteiro manual de cada linha do §7 (inclusive teclado: Tab, Esc nos modais/menu).
- **Responsividade:** 360, 390, 768, 1024, 1280, 1440, 1920 px; sem scroll horizontal.
- **Animações:** comparação com o vídeo; emular `prefers-reduced-motion` no DevTools.
- **PDF:** gerar, abrir, conferir conteúdo, acentuação, links clicáveis e ausência de dados privados.
- **Assets:** nenhuma imagem 404 no console/Network; checagem de que todos os assets do §1 estão referenciados.
- **Desempenho:** Lighthouse (meta ≥ 90 em Performance/Acessibilidade/SEO); jsPDF fora do chunk inicial.
- **Build/console:** `tsc -b`, `eslint`, `vite build` sem erros/warnings; console limpo em dev e preview.

## 12. Riscos e mitigação
| Risco | Mitigação |
|---|---|
| Node/ffmpeg ausentes | Etapa 0 instala via winget (com aprovação) |
| Fidelidade das animações sem vídeo analisado | Etapa 0 antes de Hero/Tecnologias; o que não ficar claro vira pergunta, não invenção |
| Fontes do Base44 desconhecidas | identificar pelos frames; usar equivalente Google Fonts e validar lado a lado |
| Hero com foto selfie de fundo claro vs. modelo escuro | recorte circular + leve tratamento (contraste/vinheta) via CSS, sem alterar o arquivo original; sugerir nova foto se preferir |
| Poucos dados reais para preencher seções do mock | seções encolhem/adaptam; nada é inventado |
| Ícones de marca fora do lucide | SVGs locais |
| Imagens pesadas | conversão para WebP mantendo originais no repo antigo |
| Mudança de URL do site | redirecionamento/aviso no repo antigo |
| Conflito Tailwind v4 × shadcn | usar o fluxo oficial de shadcn para v4 |

## 13. Privacidade
O CV atual (e publicado) contém **telefone, endereço com CEP, data de nascimento e estado civil**. O novo CV em jsPDF **não incluirá** esses dados por padrão (nome, cidade/UF, e-mail, GitHub, LinkedIn, formação, idiomas, competências, projetos). O PDF antigo não será copiado para a 2.0. Sugiro também removê-lo do site antigo depois — só com sua autorização.

## 14. Decisões que dependem de você (antes/na Etapa 0)
1. **Dados profissionais (sem LinkedIn):** confirmar que não há experiência profissional a listar (ou informar qual), período atual e previsão de conclusão da faculdade, e certificados concluídos (ex.: CS50 SQL, DunkiCode, RocketSeat).
2. **Serviços reais** que você oferece (até 6 para os cards) e se mantém "Diferenciais" e "Posso te ajudar" (com texto seu).
3. **Tecnologias:** confirmar a lista com evidência do §3 e se quer incluir alguma sem evidência (ex.: JavaScript em destaque, Django), com descrição curta de cada.
4. **Chips do orbit:** proposta Python, FastAPI, Docker, PostgreSQL, React, TypeScript, MongoDB, Flask.
5. **Projetos:** manter os 14? Quais 3 em destaque? Descrições de `atividade_fs` e `mural-avisos-academicos`. Link correto da Biblioteca: `biblioteca-ismenia.vercel.app` (site) ou `gerenciamento-de-biblioteca-ismenia.vercel.app` (GitHub)?
6. **Filtro de projetos:** manter (pills no estilo da nav) — recomendado com 14 projetos — ou remover para ficar idêntico ao Base44.
7. **Seção Aprendizado** (não existe no Base44): integrar como bloco "Formação" em Sobre (recomendado) ou criar seção própria no estilo de Serviços.
8. **Dados no CV:** confirmar a exclusão de telefone/endereço/nascimento/estado civil.
9. **Deploy:** GitHub Pages da `portifolio_web_2.0` (Actions) ou Vercel; o que fazer com o site antigo.
10. **Texto de contato** ("Respondo em até um dia útil" é mock): manter algum prazo real ou omitir.

---

## Visão geral
**Muda:** a tecnologia (HTML/CSS/JS → React/Vite/TS/Tailwind/shadcn/Framer/jsPDF), o visual (tema atual → réplica do Base44), a organização (HTML monolítico → componentes + dados tipados) e o CV (PDF estático com dados sensíveis → PDF gerado a partir dos mesmos dados do site).
**Preservado:** foto real, todas as imagens de projetos, ícones, textos e links reais, todas as funcionalidades do `main.js`, e o repositório antigo intacto.
**Resultado:** portfólio de página única fiel ao Base44, com seu conteúdo verdadeiro. Adicionar um projeto passa a ser uma entrada em `src/data/projects.ts` + imagens em `assets/images/projects/<slug>/`.

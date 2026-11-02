# Estado atual do projeto
_Atualizado em: 2026-11-02_

## Resumo
- **Etapas 0-12 concluídas.** Site **no ar em https://portifolioweb20.vercel.app** (deploy pelo CLI). Código em `main` no GitHub (repo **privado**). Lighthouse em produção: mobile 91/100/100/100, desktop 100/100/100/100.
- **Próxima ação:** aguardar o usuário: (1) liberar o repo para o app da Vercel no GitHub e rodar `npx vercel@latest git connect` (deploy automático a cada push); (2) decidir sobre o repo privado (link do card Portfólio 2.0); (3) revisar textos editados por ele (sugestões no histórico da conversa). Até o git connect, publicar com `npx vercel@latest --prod --yes`.
- **Validação manual pendente:** ciclo/hover/clique dos chips do orbit e fade do hero ao rolar (dá para automatizar com o Playwright se preciso).

## Etapas
| # | Etapa | Status | Registro |
|---|---|---|---|
| 0 | Preparação: documentação ✅ · ambiente ✅ · análise do vídeo ✅ · respostas de conteúdo ✅ | ✅ concluída | [00-documentacao](etapas/00-documentacao.md) · [00-preparacao](etapas/00-preparacao.md) |
| 1 | Scaffold (Vite, TS, Tailwind v4, shadcn, alias) | ✅ concluída | [01-scaffold](etapas/01-scaffold.md) |
| 2 | Design system (tokens, fontes, componentes base) | ✅ concluída | [02-design-system](etapas/02-design-system.md) |
| 3 | Dados + assets (`src/data`, cópia de imagens/ícones) | ✅ concluída | [03-dados-assets](etapas/03-dados-assets.md) |
| 4 | Layout (header, nav, progresso, menu mobile, footer) | ✅ concluída | [04-layout](etapas/04-layout.md) |
| 5 | Hero (digitação, orbit) | ✅ concluída | [05-hero](etapas/05-hero.md) |
| 6 | Sobre + Serviços + Marquee | ✅ concluída | [06-sobre-servicos-marquee](etapas/06-sobre-servicos-marquee.md) |
| 7 | Tecnologias + dialog | ✅ concluída | [07-tecnologias](etapas/07-tecnologias.md) |
| 8 | Projetos + filtro + dialog/galeria | ✅ concluída | [08-projetos](etapas/08-projetos.md) |
| 9 | LinkedIn CTA + Contato | ✅ concluída | [09-linkedin-contato](etapas/09-linkedin-contato.md) |
| 10 | Currículo PDF (jsPDF) | ✅ concluída | [10-curriculo-pdf](etapas/10-curriculo-pdf.md) |
| 11 | Polimento (responsivo, a11y, perf, grep de mock) | ✅ concluída | [11-polimento](etapas/11-polimento.md) · [11b-hover-spotlight](etapas/11b-hover-spotlight.md) |
| 12 | Deploy (Vercel) | ✅ concluída | [12-deploy](etapas/12-deploy.md) |

## Funcionalidades (alvo × situação)
Todas vêm do site antigo ou do modelo Base44. Implementação em detalhe: [decisoes.md](decisoes.md) e [referencia-visual.md](referencia-visual.md).
| Funcionalidade | Origem | Situação |
|---|---|---|
| Header fixo + nav com seção ativa + progresso de scroll | antigo + Base44 | ✅ validado |
| Menu mobile acessível | antigo | ✅ validado (390 px, Esc) |
| Reveal ao rolar | antigo + Base44 | ✅ implementado |
| Digitação de cargos no hero | antigo + Base44 | ✅ implementado |
| Orbit de tecnologias com legenda | Base44 | ✅ implementado (validação manual pendente) |
| Serviços (conteúdo real) | Base44 | ✅ implementado |
| Marquee de tecnologias | Base44 | ✅ implementado |
| Tecnologias + dialog de detalhes | Base44 | ✅ validado (1910/390 px, teclado, Esc, foco) |
| Projetos + filtro em pills + dialog com galeria | antigo + Base44 | ✅ validado (1910/390 px, filtro, galeria, Esc, X, foco) |
| Card LinkedIn | Base44 | ✅ validado (1910/390 px) |
| Contato (mailto + copiar e-mail com toast) | antigo + Base44 | ✅ validado (área de transferência, toast, ✓ por 2 s) |
| Currículo PDF gerado (jsPDF) | antigo (PDF estático) → novo | ✅ validado (download, nova aba, texto, privacidade) |
| Ano dinâmico no rodapé, voltar ao topo, skip-link | antigo | ✅ implementado |

## Pendências (aguardando o usuário)
- **Vídeos do modelo** sumiram de `Videos\Captures`; se o usuário quiser detalhes finos de hover, pedir de novo.
- **Revisar o currículo PDF** (conteúdo e visual). O resumo do Portfólio 2.0 já foi trocado para "Meu portfólio reconstruído…".
- **Deploy automático:** o app da Vercel no GitHub não tem acesso ao repo privado (`vercel git connect` falhou). O usuário precisa liberar em GitHub → Settings → Applications → Vercel → Configure → adicionar `portifolio_web_2.0`.
- **Domínio:** usando `portifolioweb20.vercel.app`. Se trocar, atualizar `index.html` (og:url, og:image, twitter:image, canonical), `public/robots.txt` e `public/sitemap.xml`.
- **Repo privado:** o card "Portfólio 2.0" aponta para `github.com/Jeanlukas1/portifolio_web_2.0`, que dá 404 para visitantes enquanto o repo for privado. Decidir: tornar público ou remover o link.

## Problemas conhecidos / riscos ativos
- **Testar animações com reduced-motion:** o Windows do usuário está com animações desligadas; no Playwright usar `reducedMotion: 'reduce'` para ver o site como ele vê. O site ignora essa preferência de propósito (`decisoes.md`).
- **Dev server:** testar com `timeout N npx vite ...` no Bash; não matar processos `node` genéricos.
- **PATH do Windows:** Node e ffmpeg foram instalados agora; shells abertos antes não os enxergam. No PowerShell, recarregar com `$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')`. O Bash (Git Bash) pode precisar de um terminal novo.
- **Foto de perfil** é uma selfie com fundo claro; o modelo usa uma foto escura. Tratamento só via CSS; o usuário pode trocar a foto depois.
- **Repo antigo** tem 1 alteração não commitada em `index.html` (não mexer).
- **CV antigo publicado** contém dados pessoais sensíveis (fica no repo antigo; decisão sobre removê-lo é do usuário).
- **Bundle JS** 560 kB / gzip 183 kB (motion + radix + sonner); jsPDF fora do chunk inicial. Aviso de chunk > 500 kB mantido de propósito (ver `decisoes.md`): otimizar na Etapa 11.
- **Screenshots de validação:** preferir o Playwright (ver `validacao.md`); alternativa: Edge headless (ver `etapas/02-design-system.md` → Verificação). Limites: largura mínima ~500 px, não aplica âncoras e **ativa reduced-motion por padrão** (usar `--force-prefers-no-reduced-motion` para ver animações).
- Riscos de implementação: ver `validacao.md`.

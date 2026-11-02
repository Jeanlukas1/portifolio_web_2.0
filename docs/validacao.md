# Validação e riscos

## Checklist de validação (aplicar ao fim de cada etapa de UI e por completo na Etapa 11)
| Área | Como validar | Critério |
|---|---|---|
| Build | `npm run build` (tsc -b + vite build), `npm run lint` (oxlint) | 0 erros, 0 warnings |
| Console | dev e `vite preview` | sem erros/warnings; sem 404 de assets |
| Fidelidade visual | screenshots a 1920×1080, seção a seção, lado a lado com as referências (`referencia-visual.md`) | espaçamento, tipografia, cores, raios e estados equivalentes |
| Animações | comparar com as observações do vídeo; testar também com `prefers-reduced-motion: reduce` emulado (Playwright `reducedMotion: 'reduce'`) | movimento fiel; **todas as animações rodam mesmo com reduced-motion** (decisão do usuário) |
| Responsividade | 360, 390, 768, 1024, 1280, 1440, 1920 px | sem scroll horizontal; menu, grids e orbit adaptados |
| Funcionalidades | roteiro manual da tabela "Funcionalidades" do `estado.md`, inclusive teclado (Tab, Esc em modais e menu) | todas funcionando |
| Dados | revisar `src/data` contra `conteudo.md`; grep no `dist/` por termos do mock (São Paulo, Orbit Pay, GeoLink, Pulse Monitor, AWS, Next.js, Supabase, Firebase, "3 anos", "um dia útil") | 0 ocorrências |
| Currículo PDF | gerar, abrir, conferir texto, acentos, links e quebras de página | só dados reais e públicos (`decisoes.md`) |
| Assets | todos os assets copiados estão referenciados e carregam | nenhum órfão ou quebrado |
| Desempenho | Lighthouse (mobile e desktop) | ≥ 90 em Performance, Acessibilidade e SEO; jsPDF fora do chunk inicial |

## Ferramenta de screenshots (Playwright, fora do projeto)
- `playwright-core` instalado no **scratchpad da sessão** (não é dependência do portfólio); usa o Edge instalado (`channel: 'msedge'`), sem baixar navegador. O scratchpad é temporário: em outra sessão, recriar com `npm i playwright-core@1` numa pasta do scratchpad.
- Script `shot.mjs`: recebe url, prefixo de saída, largura, altura, `motion|reduced` e ids de seções; faz `scrollIntoView` em cada id, espera ~1,4 s, salva `<prefixo>-<id>.png` e imprime os erros/avisos do console.
- Rodar contra `timeout 60 npx vite preview --port <p> --strictPort &` (build atual).
- Também serve para: medir overflow (`document.documentElement.scrollWidth`), clicar (menu) e testar teclado (Esc).

## Riscos ativos e mitigação
| Risco | Mitigação |
|---|---|
| Fontes e efeitos inferidos do vídeo (🔶 em `decisoes.md`) | Validar lado a lado; ajustar e marcar ✅ |
| Conteúdo real insuficiente para seções do mock | A seção encolhe ou se adapta; nunca preencher com dados inventados |
| Foto de perfil clara vs. modelo escuro | Tratamento CSS (recorte/vinheta), sem alterar o arquivo; o usuário pode trocar a foto |
| Imagens pesadas | ✅ resolvido na Etapa 11 (WebP, 2,3 MB → 436 kB) |
| Tailwind v4 × shadcn | Seguir o fluxo oficial do shadcn para v4 |
| PATH do Windows após instalar Node/ffmpeg | Ver "Problemas conhecidos" em `estado.md` |
| Troca de URL do site (GitHub Pages → Vercel) | Decidir o destino do site antigo (pendência no `estado.md`) |

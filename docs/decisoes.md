# Registro de decisões
Legenda: ✅ **fato/confirmado** (pelo usuário, pelo código ou pelas fontes) · 🔶 **hipótese** (inferida; confirmar ou refutar e atualizar aqui).

## Tomadas
| Data | Decisão | Tipo | Motivo / evidência |
|---|---|---|---|
| 2026-11-02 | Nova app em `portifolio_web_2.0`; `../portifolio-web` intacto | ✅ usuário | Backup; o site antigo segue no ar |
| 2026-11-02 | Stack: React, Vite, TS, Tailwind v4, shadcn/ui, motion, lucide-react, jsPDF | ✅ usuário | Requisito |
| 2026-11-02 | SPA de página única sem router; detalhes em modais | ✅ análise | O Base44 é uma página só |
| 2026-11-02 | Conteúdo tipado em `src/data/*.ts` | ✅ usuário | Atualizar conteúdo sem tocar em componentes |
| 2026-11-02 | LinkedIn descartado como fonte; o link permanece no site | ✅ usuário | Acesso bloqueado; o usuário pediu para esquecer |
| 2026-11-02 | Seção Serviços mantida com o design Base44, só com serviços confirmados | ✅ usuário | Os serviços do mock são fictícios |
| 2026-11-02 | **Filtro de projetos mantido**, como pills no estilo da nav | ✅ usuário | ~14 projetos; funcionalidade do site antigo |
| 2026-11-02 | **Aprendizado vira bloco "Formação" dentro de Sobre** (e entra no CV) | ✅ usuário | Não existe no Base44; preserva o conteúdo |
| 2026-11-02 | **CV só com dados públicos**: nome, cidade/UF, e-mail, GitHub, LinkedIn, formação, idiomas, competências, projetos | ✅ usuário | Privacidade |
| 2026-11-02 | **Deploy na Vercel** | ✅ usuário | O usuário já usa a Vercel na Biblioteca |
| 2026-11-02 | Ícones de marca como SVGs locais; lucide só para UI | ✅ análise | lucide não tem logos de marca; evita uma dependência |
| 2026-11-02 | jsPDF por `import()` dinâmico | ✅ análise | Bundle inicial menor |
| 2026-11-02 | "Visualizar currículo" abre o PDF em nova aba; "Baixar CV" baixa | 🔶 | Comportamento não aparece no vídeo |
| 2026-11-02 | Fontes Inter + JetBrains Mono | 🔶 | Inferidas dos frames (zero com ponto) |
| 2026-11-02 | Spotlight de fundo seguindo o cursor (sutil; off em touch e reduced-motion) | 🔶 | Manchas mudam de posição entre os frames |
| 2026-11-02 | Chip do orbit alterna sozinho (~2-3 s); hover pausa; clique seleciona | ✅ vídeo (tempo ≈) | Observado nos frames + texto "passe o mouse para pausar" |
| 2026-11-02 | Copiar e-mail → toast (sonner) + ícone ✓ | 🔶 | Feedback não aparece no vídeo |
| 2026-11-02 | Mobile: Sheet como menu; colunas empilhadas; orbit abaixo do texto | 🔶 | O vídeo não mostra mobile |
| 2026-11-02 | Projetos sem print usam capa gerada (padrão escuro + ícone da tech) | 🔶 | Mantém o visual sem inventar imagens |
| 2026-11-02 | Documentação incremental em `docs/` (este sistema) | ✅ usuário | Economia de tokens entre sessões |
| 2026-11-02 | Serviços: APIs REST com Python · Sistemas web com painel · Landing pages responsivas · Banco de dados e testes | ✅ usuário | Escolhidos entre opções com evidência nos projetos |
| 2026-11-02 | Orbit: Python, FastAPI, Docker, PostgreSQL, React, TypeScript, MongoDB, Flask | ✅ usuário | Proposta aceita |
| 2026-11-02 | Destaques: Biblioteca Virtual, Landing page responsiva, Films CRUD API e **este portfólio** (novo projeto na lista) | ✅ usuário | Resposta "…Films CRUD API, este projeto" |
| 2026-11-02 | Experiência: **Desenvolvedor Full-Stack · Prefeitura de Saquarema (Colégio Ismênia) · jun/2026 – ago/2026**: Biblioteca Virtual | ✅ usuário | Resposta direta |
| 2026-11-02 | "Posso te ajudar" → lista **Formação**; "Diferenciais" → pills **Boas práticas** (Testes automatizados, Containers com Docker, APIs documentadas com Swagger) | ✅ usuário delegou | Evita duplicar Serviços e usa só texto real do site antigo |
| 2026-11-02 | Projetos no site: 13 (4 destaques + 9). Fora: Task CRUD, Gerenciador de tarefas, Market Maps, Mural de avisos | ✅ usuário delegou ("os mais interessantes") | Menos repetição; o Mural tem front-end de terceiros |
| 2026-11-02 | Contato: "Respondo em até 2 dias úteis" | ✅ usuário | Resposta direta |
| 2026-11-02 | O site antigo será descontinuado (sem redirecionamento) | ✅ usuário | Resposta direta |
| 2026-11-02 | Um commit ao fim de cada etapa (local; push só quando pedido) | ✅ usuário | Pedido direto |
| 2026-11-02 | oxlint no lugar de ESLint; TS 7; Vite 8 | ✅ template | Padrão atual do `create-vite`; não vale divergir |
| 2026-11-02 | Pacote `cn` no lugar de clsx + tailwind-merge | ✅ shadcn | Gerado pelo preset oficial; mesma API `cn()` |
| 2026-11-02 | Sem `next-themes` nem Geist | ✅ análise | Site só com tema escuro; fontes definidas são Inter + JetBrains Mono |

## Em aberto
Lista única em [estado.md → Pendências](estado.md#pendências-aguardando-o-usuário).

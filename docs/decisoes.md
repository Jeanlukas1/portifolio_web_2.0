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
| 2026-11-02 | "Visualizar currículo" abre o PDF em nova aba; "Baixar CV" baixa | 🔶 implementado | Comportamento não aparece no vídeo |
| 2026-11-02 | Fontes Inter + JetBrains Mono | 🔶 | Inferidas dos frames (zero com ponto) |
| 2026-11-02 | Spotlight de fundo seguindo o cursor: feixe azul-petróleo 520 px + núcleo claro, com rastro (lerp 0,12); com reduced-motion segue sem atraso; em toque fica parado | ✅ usuário | Usuário pediu o "feixe de luz que acompanha o cursor"; a versão a 10% e desligada com reduced-motion não aparecia |
| 2026-11-02 | Chip do orbit alterna sozinho (~2-3 s); hover pausa; clique seleciona | ✅ vídeo (tempo ≈) | Observado nos frames + texto "passe o mouse para pausar" |
| 2026-11-02 | Copiar e-mail → toast (sonner) + ícone ✓ por 2 s | 🔶 implementado | Feedback não aparece no vídeo |
| 2026-11-02 | Mobile: Sheet como menu; colunas empilhadas; orbit abaixo do texto | 🔶 | O vídeo não mostra mobile |
| 2026-11-02 | Projetos sem print usam capa gerada (grade escura + brilho na cor da tech principal + ícones de até 3 techs) | 🔶 implementado | Mantém o visual sem inventar imagens; com 1 ícone só, as capas ficavam todas iguais (Python) |
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
| 2026-11-02 | Tecnologias: grade com as 20 de `technologies.ts` (sem filtro), 1/2/4 colunas; um único dialog controlado | ✅ análise | O modelo tem grade de 4 colunas e diz "clique para ver detalhes" |
| 2026-11-02 | Grades longas: reveal **por card** (atraso pela coluna), não pela lista | ✅ teste | Com a lista inteira, 20% da grade nunca cabia na tela do mobile e os cards ficavam invisíveis |
| 2026-11-02 | Dialogs controlados devolvem o foco ao botão que os abriu (`onCloseAutoFocus`) | ✅ teste | Sem `DialogTrigger`, o Radix não restaura o foco |
| 2026-11-02 | Filtro de projetos: "Todos" (padrão) + categorias com projetos, cada pill com a contagem; anúncio `aria-live` do total | ✅ análise | Funcionalidade do site antigo no estilo da nav |
| 2026-11-02 | Card de projeto: até 4 tags + "+N"; dialog mostra todas, galeria com miniaturas rotuladas e links "Ver online" / "Código no GitHub" | ✅ análise | Card limpo como no modelo; detalhes completos no dialog |
| 2026-11-02 | Dialogs com conteúdo rolável usam `block` (não `grid`) no `DialogContent` | ✅ teste | No grid, a lista de miniaturas com overflow alargava a coluna e cortava o texto a 390 px |
| 2026-11-02 | Mini-card LinkedIn com destaques derivados de experiência/formação/idiomas (bullets do mock descartados) | ✅ análise | LinkedIn não é fonte; só dados confirmados |
| 2026-11-02 | Seção `#linkedin` observada pela nav (`unlistedSectionIds`): nela nenhum item fica ativo | ✅ teste | Ao abrir a página direto nessa seção, "Sobre" ficava ativo por engano |
| 2026-11-02 | Contato: e-mail visível em mono abaixo dos botões; falha ao copiar → toast de erro com o e-mail | ✅ análise | O e-mail fica acessível mesmo se o navegador bloquear a área de transferência |
| 2026-11-02 | CV gerado dos mesmos dados do site: Resumo, **Experiência** (já pública no site), Formação, Projetos em destaque (4, com stack e link) + lista dos outros, Competências por categoria, Boas práticas, Idiomas | ✅ análise | Lista do usuário (dados públicos) + experiência confirmada depois |
| 2026-11-02 | CV com Helvetica padrão do jsPDF (sem embutir fonte) | ✅ teste | Acentos, "–" e "·" verificados por extração de texto; PDF de 17 kB |
| 2026-11-02 | "Visualizar": a aba é aberta no clique, antes do `import()`; aba bloqueada → baixa o PDF e avisa | ✅ análise | Safari bloqueia `window.open` depois de um `await` |
| 2026-11-02 | `--subtle` #6b6b6b → **#858585** | ✅ Lighthouse | 3,62:1 reprovava contraste AA (eyebrows, rodapé); agora ≈5,3:1. Leve desvio do modelo em favor da legibilidade |
| 2026-11-02 | Fontes self-hosted via Fontsource (sem Google Fonts) | ✅ Lighthouse | O CSS do Google bloqueava a renderização; FCP mobile 3,0 s → 2,3 s |
| 2026-11-02 | Imagens em WebP (projetos ≤ 1600 px, q80; foto 480 px); PNG/JPEG removidos do repo novo | ✅ análise | 2,3 MB → 436 kB; originais seguem no repo antigo e no histórico do git |
| 2026-11-02 | X do dialog de projeto fixo (faixa `sticky` de altura 0) | ✅ teste | Antes sumia ao rolar o conteúdo |
| 2026-11-02 | Resumo do Portfólio 2.0: "Meu portfólio reconstruído…" (sem "Este site:") | ✅ usuário | Ficava estranho no PDF |
| 2026-11-02 | Mantidos: motion sem `LazyMotion` (~78 kB de JS não usado) e aviso de chunk > 500 kB | ✅ análise | Lighthouse já ≥ 94 no mobile; refatorar todos os componentes não compensa agora |
| 2026-11-02 | **Hover sempre ativo, mesmo com reduced-motion** (botões sobem 2 px + brilho + ícone cresce; cards sobem 4-6 px + sombra + brilho interno que segue o cursor; ícone do card cresce; ↗ do projeto entra girando) | ✅ usuário | O Windows do usuário tem "Efeitos de animação" desligado → o navegador reporta reduced-motion e os hovers sumiam. Efeitos curtos e disparados pelo usuário não são o alvo dessa preferência |
| 2026-11-02 | Animações contínuas/automáticas (marquee, giro do orbit, reveal, digitação) seguem respeitando reduced-motion | 🔶 aguardando o usuário | Ver pendência em `estado.md` |
| 2026-11-02 | Overlay dos dialogs mais escuro (`bg-black/70` + `blur-sm`); textos do shadcn em pt-BR ("Fechar") | ✅ análise | Modelo mostra overlay escuro; interface em pt-BR |

## Em aberto
Lista única em [estado.md → Pendências](estado.md#pendências-aguardando-o-usuário).

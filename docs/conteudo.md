# Conteúdo real e fontes

Fontes válidas: **currículo atualizado do usuário** (`public/curriculo-jean-lukas.pdf`, 2026-11-02), repo antigo `../portifolio-web` (site), GitHub `Jeanlukas1` (via `gh`), CV antigo (`../portifolio-web/src/assets/pdf/curriculo-jean-lukas.pdf`), confirmação direta do usuário. **LinkedIn não é fonte.**

## Perfil
| Campo | Valor | Fonte | Status |
|---|---|---|---|
| Nome de exibição | Jean Lukas | site | ✅ |
| Nome completo | Jean Lukas de Marins Costa do Nascimento | GitHub | ✅ (usar só se o usuário quiser) |
| Título | Desenvolvedor Full-Stack (foco back-end Python) | site | ✅ |
| Localização | Saquarema – RJ | GitHub, CV | ✅ |
| E-mail público | jeanlukasdemarinscosta@gmail.com | site, CV | ✅ |
| GitHub | https://github.com/Jeanlukas1 | site | ✅ |
| LinkedIn | https://www.linkedin.com/in/jean-lukas-marins-costa-0998ab301/ | site | ✅ |
| Bio do hero | "Construo APIs, sistemas e interfaces web, com foco em Python. Aqui você encontra meus projetos, as tecnologias que uso e o que venho estudando." | site | ✅ |
| Sobre (texto) | "Sou desenvolvedor Full-Stack com foco em back-end com Python. Gosto de construir APIs REST, modelar bancos de dados e entender como cada peça de um sistema se encaixa." + "Estou sempre estudando e praticando: criei projetos com FastAPI, Flask, Docker, MongoDB e PostgreSQL, escrevo testes automatizados e documento minhas APIs. Tudo está publicado no meu GitHub." | site | ✅ |
| Frases da digitação | Full-Stack, Back-End, Python, de APIs REST | site | ✅ |
| Formação | Engenharia de Software, Universidade de Vassouras (Saquarema). 6º período; conclusão prevista no fim de 2027 | usuário | ✅ |
| Cursos | CS50 Intro to Databases with SQL (Harvard), DunkiCode (Programação Fullstack), Rocketseat: todos concluídos | repos + usuário | ✅ |
| Idiomas | Português (nativo); Inglês B2 (Cambridge) | CV | ✅ |
| Experiência profissional | Desenvolvedor Full-Stack · Prefeitura de Saquarema (Colégio Ismênia) · jun/2026 – ago/2026 · Biblioteca Virtual | usuário | ✅ |
| Prazo de resposta (contato) | até 2 dias úteis | usuário | ✅ |

**Privado, nunca publicar:** telefone, endereço/CEP, data de nascimento, estado civil.

## Tecnologias com evidência
Python, FastAPI, Flask, Django (CV), SQL, PostgreSQL, MongoDB, SQLAlchemy, Docker, Pytest, Git/GitHub, Postman, Swagger, HTML5, CSS3, JavaScript (repos), React, TypeScript, Vite (Biblioteca). Lista final a confirmar.

## Projetos
Ano = ano de criação do repositório (`gh api repos/... --jq .created_at`, consultado em 2026-11-02).

| Projeto | Repo / link | Stack (evidência) | Ano | Imagens |
|---|---|---|---|---|
| Biblioteca Virtual (destaque) | `GERENCIAMENTO-DE-BIBLIOTECA-ISMENIA`; live ✅ https://biblioteca-ismenia.vercel.app (responde 200; o link do GitHub dá 404) | React 19, TypeScript, Vite, PWA, Recharts, FastAPI, SQLAlchemy, Alembic, PostgreSQL, JWT, Pytest, Vitest | 2026 | catalogo, relatorios, catalogacao-fisica |
| Landing page responsiva (destaque) | `landing-page-responsiva` | HTML, CSS | 2025 | inicio, por-que-nos, beneficios, depoimentos |
| Films CRUD API | `films-crud-python-fastapi-docker-mongodb` | Python, FastAPI, Docker, MongoDB | 2026 | 1 print (VS Code) |
| Users CRUD API | `users-crud-fastapi-docker-mongodb` | Python, FastAPI, Docker, MongoDB | 2026 | — |
| Testes com Pytest | `Testes_Automatizados_com_Pytest_FastAPI-_e_PostgreSQL_via_Docker` | Python, FastAPI, Pytest, PostgreSQL, Docker | 2026 | — |
| Gerenciador de senhas (Flask) | `password-manager-flask-crud` | Python, Flask, Swagger, Postman | 2026 | — |
| API clínica veterinária | `api_clinica_veterinaria` | Python, REST (especificação de requisitos) | 2026 | — |
| Chromebooks do colégio | `api-crud-gerenciamento-de-chromebooks-colegio` | Python, API, CRUD | 2026 | — |
| Task CRUD (Flask) | `task-flask-crud` | Python, Flask | 2026 | — |
| GitHub User Activity | `github-api-user-activty` | Python, CLI, JSON | 2026 | — |
| Gerenciador de senhas (MVC) | `gerenciador-de-senhas-python` | Python, MVC, POO, SQL | 2026 | — |
| Gerenciador de tarefas | `gerenciador-de-tarefas-python` | Python, POO | 2025 | — |
| RPG em Python | `rpg-python-poo` | Python, POO | 2026 | — |
| Market Maps | `market-maps-landing-page` | HTML, CSS | 2024 | — |
| Reservas de laboratórios (novo) | `atividade_fs`. README: projeto integrador didático da disciplina; fluxo interface → Fetch API → FastAPI → Pydantic → serviço → SQLite; 7 testes, 94% de cobertura | Python, FastAPI, Pydantic, SQLite, Pytest, HTML, CSS, JS | 2026 | evidências no repo (não copiadas) |
| Mural de avisos acadêmicos (novo) | `mural-avisos-academicos`. README: atividade prática da disciplina Laboratório de Programação Full Stack; API FastAPI para publicar/listar avisos (em memória). **Front-end fornecido pela disciplina, não é autoria dele** | Python, FastAPI, Pydantic, Uvicorn | 2026 | evidências no repo (não copiadas) |

**No site (13):** os 4 destaques (Biblioteca Virtual, Landing page responsiva, Films CRUD API, Portfólio 2.0 = este repo, 2026, React/TS/Vite/Tailwind/motion/jsPDF) + Reservas de laboratórios, Testes com Pytest, Users CRUD API, Gerenciador de senhas (Flask), API clínica veterinária, GitHub User Activity, Chromebooks do colégio, Gerenciador de senhas (MVC), RPG em Python.
**Fora do site (dados mantidos acima para reativar):** Task CRUD, Gerenciador de tarefas, Market Maps, Mural de avisos.

Textos completos de cada projeto (descrição e destaques) estão em `../portifolio-web/index.html` e vão para `src/data/projects.ts` na Etapa 3.

## Card LinkedIn (seção 05)
Textos em `src/data/linkedin.ts`. Os 3 destaques do mini-card são **derivados** dos dados confirmados (experiência, 1º item de formação, inglês), não do LinkedIn: "Desenvolvedor Full-Stack na Prefeitura de Saquarema" · "Engenharia de Software · Universidade de Vassouras" · "Inglês B2 (Cambridge)". O título e o texto do card são textos de interface, sem afirmações factuais.

## Mock do Base44: descartar
Foto do modelo · "São Paulo, Brasil" · "mais de 3 anos de experiência" · "React.js, Next.js e Node.js no dia a dia" · lista "Posso te ajudar" e Diferenciais · os 6 serviços (Web App, Mobile React Native + Expo, API & Backend Node.js, E-commerce Firebase/Google Maps, Landing Page, Manutenção) · "Respondo em até um dia útil" · AWS, Node.js, Next.js, Supabase, Firebase, Tailwind, Celery, Redis, Figma · projetos Orbit Pay, GeoLink API, Pulse Monitor (+ imagens e anos) · bullets do card LinkedIn "Recomendações / Projetos e publicações" (só se confirmados) · "© 2026 Jean Lukas · São Paulo".
Na Etapa 11, um grep no build por esses termos deve retornar zero.

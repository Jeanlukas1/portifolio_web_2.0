import type { Project, ProjectCategory } from '@/types/content'
import bibliotecaCatalogacao from '@/assets/images/projects/biblioteca/catalogacao-fisica.webp'
import bibliotecaCatalogo from '@/assets/images/projects/biblioteca/catalogo.webp'
import bibliotecaRelatorios from '@/assets/images/projects/biblioteca/relatorios.webp'
import filmsCover from '@/assets/images/projects/films-crud/cover.webp'
import landingBeneficios from '@/assets/images/projects/landing-page/beneficios.webp'
import landingDepoimentos from '@/assets/images/projects/landing-page/depoimentos.webp'
import landingInicio from '@/assets/images/projects/landing-page/inicio.webp'
import landingPorQueNos from '@/assets/images/projects/landing-page/por-que-nos.webp'
import portfolioInicio from '@/assets/images/projects/portifolioWeb/inicio.webp'

/*
 * Projetos exibidos no site (13). Textos do site antigo + READMEs dos repositórios.
 * year = ano de criação do repositório no GitHub. Projetos fora do site: docs/conteudo.md.
 * tech: ids de technologies.ts ou rótulos livres (ex.: "CRUD").
 */
const gh = (repo: string) => `https://github.com/Jeanlukas1/${repo}`

export const projects: Project[] = [
  {
    slug: 'biblioteca-virtual',
    title: 'Biblioteca Virtual',
    featured: true,
    category: 'sistema',
    year: 2026,
    summary: 'Sistema de gerenciamento da biblioteca escolar do Colégio Ismênia, em uso real.',
    description:
      'Sistema web de gerenciamento de biblioteca escolar, desenvolvido para a Prefeitura de Saquarema (Colégio Ismênia). Reúne o catálogo do acervo (mais de 1.500 livros), empréstimos e devoluções com controle de atrasos, reservas, aprovação de pedidos, relatórios de uso e a catalogação física por estante e prateleira.',
    highlights: [
      'Painel com indicadores do dia',
      'Controle de empréstimos, atrasos e renovações',
      'Relatórios com gráficos de uso',
      'Mapa visual das estantes',
      'Modo escuro e perfis de acesso',
    ],
    tech: ['react', 'typescript', 'vite', 'fastapi', 'sqlalchemy', 'postgresql', 'pytest'],
    images: [
      { src: bibliotecaCatalogo, label: 'Catálogo', alt: 'Tela do catálogo da Biblioteca Virtual, com capas de livros, filtros e busca' },
      { src: bibliotecaRelatorios, label: 'Relatórios', alt: 'Tela de relatórios com gráficos de empréstimos por mês e livros mais emprestados' },
      { src: bibliotecaCatalogacao, label: 'Catalogação física', alt: 'Tela de catalogação física com o mapa das estantes e prateleiras por categoria' },
    ],
    liveUrl: 'https://biblioteca-ismenia.vercel.app',
  },
  {
    slug: 'landing-page-responsiva',
    title: 'Landing page responsiva',
    featured: true,
    category: 'web',
    year: 2025,
    summary: 'Template de landing page que se adapta a desktop, tablet e celular.',
    description:
      'Template de uma landing page responsiva. O layout se adapta a diferentes tamanhos de tela e reúne as seções clássicas de uma página de apresentação.',
    highlights: [
      'Layout responsivo para desktop, tablet e celular',
      'Cabeçalho com menu de navegação e destaque no topo',
      'Cards de benefícios e lista de vantagens',
      'Seção de depoimentos de clientes',
      'Formulário de contato e botões de chamada para ação',
    ],
    tech: ['html', 'css', 'Responsivo'],
    images: [
      { src: landingInicio, label: 'Início', alt: 'Tela inicial da landing page Agência Bold, com cabeçalho azul, título, menu e mockup de notebook' },
      { src: landingPorQueNos, label: 'Por que nós?', alt: 'Seção "Por que nós?" com três cards de benefícios e chamada para contato' },
      { src: landingBeneficios, label: 'Benefícios', alt: 'Seção de benefícios com lista de vantagens, imagem de um notebook e botão de contato' },
      { src: landingDepoimentos, label: 'Depoimentos', alt: 'Seção de depoimentos de clientes e início do formulário de contato' },
    ],
    repoUrl: gh('landing-page-responsiva'),
  },
  {
    slug: 'films-crud-api',
    title: 'Films CRUD API',
    featured: true,
    category: 'api',
    year: 2026,
    summary: 'API RESTful para gerenciar filmes, com CRUD completo integrado ao MongoDB.',
    description:
      'API RESTful desenvolvida com FastAPI para gerenciamento de filmes, com operações completas de CRUD (criar, ler, atualizar e remover) e persistência em MongoDB rodando em container Docker.',
    tech: ['python', 'fastapi', 'docker', 'mongodb'],
    images: [
      { src: filmsCover, label: 'Código', alt: 'Código do serviço de filmes aberto no VS Code, com o terminal mostrando o container do MongoDB iniciado via Docker' },
    ],
    repoUrl: gh('films-crud-python-fastapi-docker-mongodb'),
  },
  {
    slug: 'portfolio',
    title: 'Portfólio 2.0',
    featured: true,
    category: 'web',
    year: 2026,
    summary: 'Meu portfólio reconstruído com React, TypeScript e Tailwind CSS.',
    description:
      'Migração do meu portfólio de HTML, CSS e JavaScript puro para React, TypeScript e Tailwind CSS, com conteúdo separado da interface, animações com Framer Motion e currículo em PDF gerado no próprio navegador com jsPDF.',
    highlights: [
      'Conteúdo centralizado em arquivos de dados tipados',
      'Componentes reutilizáveis com shadcn/ui',
      'Animações com Framer Motion e efeitos de luz que acompanham o cursor',
      'Currículo em PDF gerado a partir dos mesmos dados do site',
    ],
    tech: ['react', 'typescript', 'vite', 'tailwind'],
    images: [
      { src: portfolioInicio, label: 'Início', alt: 'Tela inicial do portfólio: nome Jean Lukas, linha de digitação, botões Ver projetos e Baixar CV e o orbit de tecnologias em volta da foto' },
    ],
    repoUrl: gh('portifolio_web_2.0'),
    liveUrl: 'https://portifolioweb20.vercel.app',
  },
  {
    slug: 'reservas-laboratorios',
    title: 'Reservas de laboratórios',
    category: 'sistema',
    year: 2026,
    summary: 'Projeto integrador Full Stack: reservas de laboratórios com FastAPI e SQLite.',
    description:
      'Aplicação didática de reservas de laboratórios que percorre o fluxo completo: interface, Fetch API, rota FastAPI, validação com Pydantic, camada de serviço, banco SQLite e resposta HTTP.',
    highlights: ['7 testes automatizados com Pytest', '94% de cobertura de código', 'Documentação da API em /docs'],
    tech: ['python', 'fastapi', 'pytest', 'javascript', 'html', 'css', 'SQLite'],
    repoUrl: gh('atividade_fs'),
  },
  {
    slug: 'testes-pytest',
    title: 'Testes automatizados com Pytest',
    category: 'api',
    year: 2026,
    summary: 'API com FastAPI testada com Pytest e banco PostgreSQL rodando via Docker.',
    tech: ['python', 'fastapi', 'pytest', 'postgresql', 'docker'],
    repoUrl: gh('Testes_Automatizados_com_Pytest_FastAPI-_e_PostgreSQL_via_Docker'),
  },
  {
    slug: 'users-crud-api',
    title: 'Users CRUD API',
    category: 'api',
    year: 2026,
    summary: 'Gerenciamento de usuários com FastAPI, Docker e persistência em MongoDB.',
    tech: ['python', 'fastapi', 'docker', 'mongodb'],
    repoUrl: gh('users-crud-fastapi-docker-mongodb'),
  },
  {
    slug: 'gerenciador-senhas-flask',
    title: 'Gerenciador de senhas (Flask)',
    category: 'api',
    year: 2026,
    summary: 'Gerenciador de senhas com Python e Flask, documentado com Postman e Swagger.',
    tech: ['python', 'flask', 'swagger', 'postman'],
    repoUrl: gh('password-manager-flask-crud'),
  },
  {
    slug: 'api-clinica-veterinaria',
    title: 'API de clínica veterinária',
    category: 'api',
    year: 2026,
    summary: 'Especificação de requisitos de uma API REST para animais, tutores, consultas, vacinas e histórico clínico.',
    tech: ['python', 'REST', 'Requisitos'],
    repoUrl: gh('api_clinica_veterinaria'),
  },
  {
    slug: 'github-user-activity',
    title: 'GitHub User Activity',
    category: 'cli',
    year: 2026,
    summary: 'CLI que busca a atividade recente de um usuário do GitHub e exibe no terminal.',
    tech: ['python', 'API', 'JSON', 'CLI'],
    repoUrl: gh('github-api-user-activty'),
  },
  {
    slug: 'chromebooks-colegio',
    title: 'Chromebooks do colégio',
    category: 'api',
    year: 2026,
    summary: 'API CRUD para o gerenciamento de Chromebooks de um colégio.',
    tech: ['python', 'API', 'CRUD'],
    repoUrl: gh('api-crud-gerenciamento-de-chromebooks-colegio'),
  },
  {
    slug: 'gerenciador-senhas-mvc',
    title: 'Gerenciador de senhas (MVC)',
    category: 'estudo',
    year: 2026,
    summary: 'Projeto para praticar MVC, banco de dados e programação orientada a objetos.',
    tech: ['python', 'MVC', 'POO', 'sql'],
    repoUrl: gh('gerenciador-de-senhas-python'),
  },
  {
    slug: 'rpg-python',
    title: 'RPG em Python',
    category: 'estudo',
    year: 2026,
    summary: 'RPG criado para praticar e consolidar programação orientada a objetos.',
    tech: ['python', 'POO'],
    repoUrl: gh('rpg-python-poo'),
  },
]

/**
 * Rótulos do filtro, na ordem de exibição. Só aparecem categorias que têm projetos.
 * "estudo" não tem pill (pedido do usuário): esses projetos aparecem só em "Todos".
 */
const categoryLabels: Partial<Record<ProjectCategory, string>> = {
  api: 'APIs',
  sistema: 'Sistemas',
  web: 'Web',
  cli: 'CLI',
}

export const projectFilters = (Object.keys(categoryLabels) as ProjectCategory[])
  .filter((c) => projects.some((p) => p.category === c))
  .map((c) => ({ id: c, label: categoryLabels[c] as string }))

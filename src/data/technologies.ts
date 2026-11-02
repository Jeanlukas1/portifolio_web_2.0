import type { Technology } from '@/types/content'
import css3 from '@/assets/icons/css3.svg'
import docker from '@/assets/icons/docker.svg'
import fastapi from '@/assets/icons/fastapi.svg'
import flask from '@/assets/icons/flask.svg'
import git from '@/assets/icons/git.svg'
import github from '@/assets/icons/github.svg'
import html5 from '@/assets/icons/html5.svg'
import javascript from '@/assets/icons/javascript.svg'
import mongodb from '@/assets/icons/mongodb.svg'
import postgresql from '@/assets/icons/postgresql.svg'
import postman from '@/assets/icons/postman.svg'
import pytest from '@/assets/icons/pytest.svg'
import python from '@/assets/icons/python.svg'
import react from '@/assets/icons/react.svg'
import sql from '@/assets/icons/sql.svg'
import sqlalchemy from '@/assets/icons/sqlalchemy.svg'
import swagger from '@/assets/icons/swagger.svg'
import tailwindcss from '@/assets/icons/tailwindcss.svg'
import typescript from '@/assets/icons/typescript.svg'
import vite from '@/assets/icons/vite.svg'

/*
 * Tecnologias com evidência nos projetos (docs/conteudo.md).
 * "details" descreve onde a tecnologia foi usada; nunca nível de proficiência.
 * Ícones: Simple Icons (CC0), monocromáticos, coloridos por "color".
 */
export const technologies: Technology[] = [
  // Front-end
  { id: 'html', name: 'HTML5', category: 'front-end', icon: html5, color: '#E34F26',
    summary: 'Estrutura semântica de páginas e aplicações web.',
    details: 'Base de todas as minhas interfaces, das landing pages ao front-end da Biblioteca Virtual, com atenção a semântica e acessibilidade.' },
  { id: 'css', name: 'CSS3', category: 'front-end', icon: css3, color: '#1572B6',
    summary: 'Layouts responsivos e estilização.',
    details: 'Usado para construir layouts que se adaptam a qualquer tela, como na Landing page responsiva.' },
  { id: 'javascript', name: 'JavaScript', category: 'front-end', icon: javascript, color: '#F7DF1E',
    summary: 'Interatividade e integração com APIs no navegador.',
    details: 'Usado para interatividade e para consumir APIs com Fetch, como no projeto de reservas de laboratórios.' },
  { id: 'typescript', name: 'TypeScript', category: 'front-end', icon: typescript, color: '#3178C6',
    summary: 'JavaScript com tipagem estática.',
    details: 'Linguagem do front-end da Biblioteca Virtual e deste portfólio, trazendo mais segurança ao código.' },
  { id: 'react', name: 'React', category: 'front-end', icon: react, color: '#61DAFB',
    summary: 'Interfaces componentizadas e reativas.',
    details: 'Biblioteca usada no front-end da Biblioteca Virtual e neste portfólio, organizando a interface em componentes.' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'front-end', icon: tailwindcss, color: '#06B6D4',
    summary: 'Estilização com classes utilitárias.',
    details: 'Usado na construção deste portfólio, junto com os componentes do shadcn/ui.' },
  { id: 'vite', name: 'Vite', category: 'ferramentas', icon: vite, color: '#9135FF',
    summary: 'Build e servidor de desenvolvimento.',
    details: 'Ferramenta de build da Biblioteca Virtual e deste portfólio.' },
  // Back-end
  { id: 'python', name: 'Python', category: 'back-end', icon: python, color: '#3776AB',
    summary: 'Linguagem principal para back-end e automações.',
    details: 'Minha linguagem principal: APIs, sistemas, CLIs e projetos de estudo de orientação a objetos e MVC.' },
  { id: 'fastapi', name: 'FastAPI', category: 'back-end', icon: fastapi, color: '#009688',
    summary: 'APIs rápidas e documentadas em Python.',
    details: 'Framework das APIs da Biblioteca Virtual, das APIs de filmes e usuários e do projeto de reservas de laboratórios.' },
  { id: 'flask', name: 'Flask', category: 'back-end', icon: flask, color: '#3BABC3',
    summary: 'Microframework web em Python.',
    details: 'Usado no gerenciador de senhas com API documentada em Swagger e em projetos de prática de CRUD.' },
  { id: 'sqlalchemy', name: 'SQLAlchemy', category: 'back-end', icon: sqlalchemy, color: '#D71F00',
    summary: 'ORM para bancos relacionais em Python.',
    details: 'Camada de acesso ao banco da Biblioteca Virtual, com migrações gerenciadas pelo Alembic.' },
  // Banco de dados
  { id: 'postgresql', name: 'PostgreSQL', category: 'banco de dados', icon: postgresql, color: '#4169E1',
    summary: 'Banco de dados relacional.',
    details: 'Banco da Biblioteca Virtual e do projeto de testes automatizados, rodando via Docker.' },
  { id: 'mongodb', name: 'MongoDB', category: 'banco de dados', icon: mongodb, color: '#47A248',
    summary: 'Banco NoSQL orientado a documentos.',
    details: 'Persistência das APIs de filmes e de usuários, executado em container Docker.' },
  { id: 'sql', name: 'SQL', category: 'banco de dados', icon: sql, color: '#C8C8C8',
    summary: 'Consultas e modelagem relacional.',
    details: 'Estudado no CS50 Introduction to Databases with SQL (Harvard) e aplicado nos projetos com banco relacional.' },
  // DevOps e ferramentas
  { id: 'docker', name: 'Docker', category: 'devops', icon: docker, color: '#2496ED',
    summary: 'Ambientes reproduzíveis em containers.',
    details: 'Usado para subir bancos de dados e APIs em containers, como nas APIs com MongoDB e no projeto de testes com PostgreSQL.' },
  { id: 'git', name: 'Git', category: 'devops', icon: git, color: '#F03C2E',
    summary: 'Versionamento de código.',
    details: 'Controle de versão de todos os meus projetos.' },
  { id: 'github', name: 'GitHub', category: 'devops', icon: github, color: '#FAFAFA',
    summary: 'Hospedagem de código e portfólio de repositórios.',
    details: 'Onde publico todos os meus projetos e exercícios de cursos.' },
  // Testes e documentação
  { id: 'pytest', name: 'Pytest', category: 'testes', icon: pytest, color: '#0A9EDC',
    summary: 'Testes automatizados em Python.',
    details: 'Usado no projeto de testes com FastAPI e PostgreSQL, na Biblioteca Virtual e no projeto de reservas (94% de cobertura).' },
  { id: 'postman', name: 'Postman', category: 'testes', icon: postman, color: '#FF6C37',
    summary: 'Testes e documentação de APIs.',
    details: 'Usado para testar e documentar as rotas do gerenciador de senhas em Flask.' },
  { id: 'swagger', name: 'Swagger', category: 'ferramentas', icon: swagger, color: '#85EA2D',
    summary: 'Documentação interativa de APIs.',
    details: 'Documentação das APIs, gerada automaticamente pelo FastAPI e usada no gerenciador de senhas em Flask.' },
]

/** Busca uma tecnologia pelo id (projetos podem citar rótulos livres que não estão aqui). */
export const techById = new Map(technologies.map((t) => [t.id, t]))

/** Tecnologias que orbitam a foto no hero (docs/decisoes.md). */
export const orbitTechIds = ['python', 'fastapi', 'docker', 'postgresql', 'react', 'typescript', 'mongodb', 'flask']

/** Ordem da faixa marquee. */
export const marqueeTechIds = [
  'python', 'fastapi', 'flask', 'postgresql', 'mongodb', 'docker', 'pytest',
  'react', 'typescript', 'javascript', 'tailwind', 'html', 'css', 'vite', 'git',
]

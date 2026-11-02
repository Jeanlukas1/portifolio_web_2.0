import type { Service } from '@/types/content'

/*
 * Serviços confirmados pelo usuário em 2026-11-02 (docs/decisoes.md).
 * As descrições citam apenas tecnologias com evidência nos projetos.
 */
export const services: Service[] = [
  {
    title: 'APIs REST com Python',
    description: 'FastAPI ou Flask, validação de dados e documentação com Swagger',
    icon: 'server',
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Sistemas web com painel',
    description: 'Cadastros, controle de acesso, relatórios e painel administrativo',
    icon: 'layout',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Landing pages responsivas',
    description: 'Páginas de apresentação que se adaptam a qualquer tela',
    icon: 'globe',
    iconColor: 'text-violet-400',
  },
  {
    title: 'Banco de dados e testes',
    description: 'Modelagem em PostgreSQL ou MongoDB, testes com Pytest e Docker',
    icon: 'database',
    iconColor: 'text-amber-400',
  },
]

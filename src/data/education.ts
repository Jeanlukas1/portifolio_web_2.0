import type { Education, Language } from '@/types/content'

/* Formação confirmada pelo usuário em 2026-11-02 (docs/conteudo.md). */
export const education: Education[] = [
  {
    title: 'Engenharia de Software',
    institution: 'Universidade de Vassouras · Saquarema',
    period: '6º período · conclusão prevista para o fim de 2027',
  },
  {
    title: 'CS50: Introduction to Databases with SQL',
    institution: 'Harvard University (CS50)',
    period: 'Concluído',
    url: 'https://github.com/Jeanlukas1/CS50-DB-INTRODUCTION',
  },
  {
    title: 'Programação Full-Stack',
    institution: 'DunkiCode',
    period: 'Concluído',
    url: 'https://github.com/Jeanlukas1/dunki-code',
  },
  {
    title: 'Cursos de desenvolvimento',
    institution: 'Rocketseat',
    period: 'Concluído',
    url: 'https://github.com/Jeanlukas1/RocketSeat',
  },
]

export const languages: Language[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'B2 (Cambridge)' },
]

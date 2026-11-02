import type { Profile } from '@/types/content'

/*
 * Dados pessoais e textos gerais. Fontes: site antigo (../portifolio-web), GitHub e o usuário.
 * Ver docs/conteudo.md. NUNCA incluir telefone, endereço, data de nascimento ou estado civil.
 */
export const profile: Profile = {
  name: 'Jean Lukas',
  initials: 'JL',
  role: 'Desenvolvedor Full-Stack',
  location: 'Saquarema, RJ',
  heroBio:
    'Construo APIs, sistemas e interfaces web, com foco em Python. Aqui você encontra meus projetos, as tecnologias que uso e o que venho estudando.',
  typingPhrases: ['Desenvolvedor Full-Stack', 'Desenvolvedor Back-End', 'Desenvolvedor Python', 'Desenvolvedor de APIs REST'],
  aboutTagline: 'Desenvolvedor Full-Stack com foco em back-end com Python.',
  about: [
    'Sou desenvolvedor Full-Stack com foco em back-end com Python. Gosto de construir APIs REST, modelar bancos de dados e entender como cada peça de um sistema se encaixa.',
  ],
  highlight:
    'Estou sempre estudando e praticando: criei projetos com FastAPI, Flask, Docker, MongoDB e PostgreSQL, escrevo testes automatizados e documento minhas APIs. Tudo está publicado no meu GitHub.',
  differentials: ['Testes automatizados', 'Containers com Docker', 'APIs documentadas com Swagger'],
  contactText:
    'Estou aberto a projetos, colaborações e boas conversas sobre tecnologia. Respondo em até 2 dias úteis.',
  links: {
    github: 'https://github.com/Jeanlukas1',
    linkedin: 'https://www.linkedin.com/in/jean-lukas-marins-costa-0998ab301/',
    email: 'jeanlukasdemarinscosta@gmail.com',
  },
}

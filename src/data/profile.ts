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
    'Construo APIs, sistemas e landing pages e interfaces web. Aqui você encontra meus projetos, e as tecnologias que uso para desenvolver as soluções.',
  typingPhrases: ['Desenvolvedor Full-Stack', 'Desenvolvedor Back-End', 'Desenvolvedor Python', 'Desenvolvedor de APIs REST'],
  aboutTagline: 'Desenvolvedor Full-Stack com foco em back-end com Python.',
  about: [
    'Sou desenvolvedor Full-Stack com foco em back-end com Python. Construo APIs REST consistentes, crio landing pages 100% responsivas e entender como posso ser a solução para seu problema.',
  ],
  highlight:
    'Estou sempre estudando e me atualizando das principais tecnologias para facilitar o desenvolvimento de forma segura e eficiente para te entregar o melhor: criei projetos com FastAPI, Flask, Docker, React.JS, TS.Js, Next MongoDB e PostgreSQL e mais, escrevo testes automatizados e documento minhas APIs. Tudo está publicado no meu GitHub.',
  differentials: ['Testes automatizados', 'Containers com Docker', 'APIs documentadas com Swagger', 'Comunicação'],
  contactText:
    'Estou aberto a projetos, colaborações e boas conversas sobre tecnologia. Respondo em até 2 dias úteis.',
  links: {
    github: 'https://github.com/Jeanlukas1',
    linkedin: 'https://www.linkedin.com/in/jean-lukas-marins-costa-0998ab301/',
    email: 'jeanlukasdemarinscosta@gmail.com',
  },
}

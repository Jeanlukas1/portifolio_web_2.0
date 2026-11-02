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
    'Construo APIs, sistemas, landing pages e interfaces web. Aqui você encontra meus projetos e as tecnologias que uso para desenvolver as soluções.',
  typingPhrases: ['Desenvolvedor Full-Stack', 'Desenvolvedor Back-End', 'Desenvolvedor Python', 'Desenvolvedor de APIs REST'],
  aboutTagline: 'Desenvolvedor Full-Stack com foco em back-end com Python.',
  about: [
    'Sou desenvolvedor Full-Stack com foco em back-end com Python. Construo APIs REST consistentes, crio landing pages 100% responsivas e busco entender como posso ser a solução para o seu problema.',
  ],
  highlight:
    'Estou sempre estudando e me atualizando nas principais tecnologias para desenvolver de forma segura e eficiente e te entregar o melhor: criei projetos com FastAPI, Flask, Docker, React, TypeScript, Next.js, MongoDB, PostgreSQL e mais; escrevo testes automatizados e documento minhas APIs. Tudo está publicado no meu GitHub.',
  differentials: ['Testes automatizados', 'Containers com Docker', 'APIs documentadas com Swagger', 'Comunicação'],
  contactText:
    'Estou aberto a projetos, colaborações e boas conversas sobre tecnologia. Respondo em até 2 dias úteis.',
  links: {
    github: 'https://github.com/Jeanlukas1',
    linkedin: 'https://www.linkedin.com/in/jean-lukas-marins-costa-0998ab301/',
    email: 'jeanlukasdemarinscosta@gmail.com',
  },
}

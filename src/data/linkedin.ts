import { education, languages } from './education'
import { experience } from './experience'

/*
 * Card "Veja meu perfil profissional" (seção 05). O LinkedIn não é fonte de dados (docs/decisoes.md):
 * os destaques do mini-card são derivados dos dados confirmados de experiência, formação e idiomas.
 * Os bullets do modelo ("Recomendações", "Projetos e publicações") são mock e foram descartados.
 */
const [job] = experience
const [degree] = education
const english = languages.find((l) => l.name === 'Inglês')

export const linkedinCta = {
  title: 'Veja meu perfil profissional',
  text: 'Acompanhe minha trajetória, minha formação e as novidades dos meus projetos. Vamos nos conectar.',
  ctaLabel: 'Conectar no LinkedIn',
  highlights: [
    job && `${job.role} na ${job.organization.split(' · ')[0]}`,
    degree && `${degree.title} · ${degree.institution.split(' · ')[0]}`,
    english && `Inglês ${english.level}`,
  ].filter((item): item is string => Boolean(item)),
}

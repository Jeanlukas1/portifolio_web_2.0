/*
 * Tipos do conteúdo do portfólio (src/data/*).
 * Campos opcionais ficam ausentes quando não há dado real: a UI se adapta, nunca inventa.
 */

export type SocialLinks = {
  github: string
  linkedin: string
  email: string
}

export type Profile = {
  /** Nome de exibição (ex.: "Jean Lukas"). */
  name: string
  /** Iniciais para avatar/logo (ex.: "JL"). */
  initials: string
  /** Cargo curto (ex.: "Desenvolvedor Full-Stack"). */
  role: string
  /** Cidade/UF pública (ex.: "Saquarema, RJ"). */
  location: string
  /** Parágrafo do hero. */
  heroBio: string
  /** Frases do efeito de digitação do hero. */
  typingPhrases: string[]
  /** Parágrafos de "Sobre mim". */
  about: string[]
  /** Subtítulo curto ao lado de "Sobre mim". */
  aboutTagline?: string
  /** Lista "Posso te ajudar se você precisa de:" (só se confirmada). */
  canHelpWith?: string[]
  /** Frase de destaque em "Sobre". */
  highlight?: string
  /** Pills de "Diferenciais" (só se confirmados). */
  differentials?: string[]
  /** Texto da seção de contato. */
  contactText: string
  links: SocialLinks
}

export type TechCategory = 'front-end' | 'back-end' | 'full-stack' | 'banco de dados' | 'devops' | 'testes' | 'ferramentas'

export type Technology = {
  /** Identificador estável, usado por projetos, orbit e marquee. */
  id: string
  name: string
  category: TechCategory
  /** Descrição curta do card. */
  summary: string
  /** Descrição longa do dialog "Ver detalhes". */
  details?: string
  /** URL do ícone importado de src/assets/icons (ausente → ícone genérico). */
  icon?: string
  /** Cor da marca (hex), aplicada ao ícone monocromático via máscara CSS. */
  color?: string
}

export type ServiceIconName = 'globe' | 'server' | 'database' | 'layout' | 'wrench' | 'code' | 'terminal' | 'smartphone'

export type Service = {
  title: string
  description: string
  icon: ServiceIconName
  /** Classe de cor do ícone (ex.: "text-sky-400"). */
  iconColor: string
}

export type ProjectCategory = 'api' | 'sistema' | 'web' | 'cli' | 'estudo'

export type ProjectImage = {
  src: string
  alt: string
  /** Rótulo da miniatura na galeria. */
  label: string
}

export type Project = {
  slug: string
  title: string
  /** Texto curto do card. */
  summary: string
  /** Texto longo do dialog. */
  description?: string
  /** Bullets de destaques do dialog. */
  highlights?: string[]
  /** Ids de technologies.ts, mais rótulos livres (ex.: "CRUD", "MVC"). */
  tech: string[]
  category: ProjectCategory
  /** Ano real (criação do repositório); ausente se desconhecido. */
  year?: number
  images?: ProjectImage[]
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export type Education = {
  title: string
  institution: string
  /** Período/status real (ex.: "Em andamento"); ausente se desconhecido. */
  period?: string
  description?: string
  url?: string
}

export type Experience = {
  role: string
  organization: string
  period: string
  description?: string
}

export type Language = {
  name: string
  level: string
}

export type NavItem = {
  /** id da seção (âncora). */
  id: string
  label: string
}

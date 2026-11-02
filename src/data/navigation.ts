import type { NavItem } from '@/types/content'

/** Itens da nav central (ids = âncoras das seções). "Contato" é o CTA à direita. */
export const navItems: NavItem[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
]

export const contactNavItem: NavItem = { id: 'contato', label: 'Contato' }

/** Seções sem item na nav, observadas para que nenhum item fique ativo por engano nelas. */
export const unlistedSectionIds = ['linkedin']

import { Button } from '@/components/ui/button'
import { contactNavItem, navItems, unlistedSectionIds } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { MobileMenu } from './MobileMenu'
import { NavPill } from './NavPill'
import { ScrollProgress } from './ScrollProgress'

const sectionIds = [...navItems.map((i) => i.id), ...unlistedSectionIds, contactNavItem.id]

/** Header fixo: logo, nav em pill (desktop), CTA Contato e menu (celular). */
export function Header() {
  // No hero, o modelo mostra "Sobre" ativo.
  const active = useActiveSection(sectionIds, navItems[0].id)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="flex items-center gap-2.5">
          <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-foreground text-[0.625rem] font-semibold tracking-tight text-background">
            {profile.initials}
          </span>
          <span className="text-sm text-foreground">{profile.name}</span>
          <span className="sr-only">, voltar ao início</span>
        </a>

        <NavPill
          items={navItems}
          active={active}
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
        />

        <div className="flex items-center gap-2">
          <Button asChild variant="pill" size="nav" className="hidden sm:inline-flex">
            <a href={`#${contactNavItem.id}`}>{contactNavItem.label}</a>
          </Button>
          <MobileMenu items={navItems} contact={contactNavItem} active={active} />
        </div>
      </div>
      <ScrollProgress />
    </header>
  )
}

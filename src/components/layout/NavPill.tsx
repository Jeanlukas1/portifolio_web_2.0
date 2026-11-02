import { motion } from 'motion/react'
import type { NavItem } from '@/types/content'
import { cn } from '@/lib/utils'

type NavPillProps = {
  items: NavItem[]
  active: string | null
  className?: string
}

/** Nav central em pill; o item ativo ganha um fundo branco que desliza entre os itens. */
export function NavPill({ items, active, className }: NavPillProps) {
  return (
    <nav aria-label="Principal" className={className}>
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1">
        {items.map((item) => {
          const isActive = item.id === active
          return (
            <li key={item.id} className="relative">
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative z-10 block rounded-full px-4 py-1.5 text-sm transition-colors',
                  isActive ? 'text-background' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export type FilterOption = { id: string; label: string; count: number }

type ProjectFilterProps = {
  options: FilterOption[]
  value: string
  onChange: (id: string) => void
}

/** Filtro em pills no estilo da nav (o fundo branco desliza até a opção ativa). */
export function ProjectFilter({ options, value, onChange }: ProjectFilterProps) {
  return (
    <div role="group" aria-label="Filtrar projetos por categoria" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex w-max items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1">
        {options.map((option) => {
          const isActive = option.id === value
          return (
            <li key={option.id} className="relative">
              {isActive && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange(option.id)}
                className={cn(
                  'relative z-10 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isActive ? 'text-background' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {option.label}
                <span className={cn('font-mono text-[0.625rem]', isActive ? 'text-background/60' : 'text-subtle')}>
                  {option.count}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

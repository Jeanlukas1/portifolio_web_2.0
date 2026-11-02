import { Code } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Technology } from '@/types/content'

type TechIconProps = {
  tech: Pick<Technology, 'icon' | 'color'>
  className?: string
}

/**
 * Ícone de marca monocromático (Simple Icons) pintado com a cor da tecnologia via máscara CSS.
 * Sem ícone → ícone genérico do lucide. Sempre decorativo: o nome aparece em texto ao lado.
 */
export function TechIcon({ tech, className }: TechIconProps) {
  if (!tech.icon) {
    return <Code aria-hidden="true" className={cn('size-6 text-muted-foreground', className)} />
  }
  const mask = `url("${tech.icon}") center / contain no-repeat`
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block size-6 shrink-0', className)}
      style={{ backgroundColor: tech.color ?? 'currentColor', mask, WebkitMask: mask }}
    />
  )
}

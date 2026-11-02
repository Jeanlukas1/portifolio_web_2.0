import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

/** Seção da página: linha divisória de largura total no topo (como no modelo) + container. */
export function Section({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section className="border-t border-white/[0.06]" {...props}>
      <div className={cn('container-page py-24 sm:py-32', className)}>{children}</div>
    </section>
  )
}

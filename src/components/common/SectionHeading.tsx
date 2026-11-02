import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  /** Número da seção, ex.: "01". */
  index: string
  /** Rótulo do eyebrow, ex.: "Sobre". */
  label: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Cabeçalho de seção do modelo: eyebrow mono "01 — SOBRE", título e descrição opcional. */
export function SectionHeading({
  index,
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <p className="text-eyebrow">
        {index} — {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-[2rem]">{title}</h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]',
            align === 'center' && 'mx-auto max-w-xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

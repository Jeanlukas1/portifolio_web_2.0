import { ChevronRight } from 'lucide-react'
import { CardGlow } from '@/components/common/CardGlow'
import { trackGlow } from '@/lib/cardGlow'
import { TechIcon } from '@/components/common/TechIcon'
import type { Technology } from '@/types/content'

type TechCardProps = {
  tech: Technology
  /** Recebe também o botão clicado, para devolver o foco a ele quando o dialog fechar. */
  onSelect: (tech: Technology, trigger: HTMLButtonElement) => void
}

/** Card da grade de tecnologias (screenshot 142541): o card inteiro é o botão que abre o dialog. */
export function TechCard({ tech, onSelect }: TechCardProps) {
  return (
    <button
      type="button"
      onClick={(event) => onSelect(tech, event.currentTarget)}
      onPointerMove={trackGlow}
      aria-haspopup="dialog"
      className="group card-surface relative isolate flex h-full w-full flex-col overflow-hidden p-6 text-left outline-none transition-[translate,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#191919] hover:shadow-[0_20px_50px_-20px_rgb(0_0_0/0.9)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <CardGlow />
      <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-[transform,border-color] duration-300 group-hover:scale-110 group-hover:border-white/20">
        <TechIcon tech={tech} className="size-5" />
      </span>
      <span className="mt-6 text-base font-medium tracking-tight text-foreground">{tech.name}</span>
      <span className="mt-1.5 font-mono text-[0.6875rem] tracking-[0.2em] text-subtle uppercase">{tech.category}</span>
      <span className="mt-3 text-sm leading-relaxed text-muted-foreground">{tech.summary}</span>
      <span className="mt-auto flex items-center gap-1 pt-5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
        Ver detalhes
        <ChevronRight aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  )
}

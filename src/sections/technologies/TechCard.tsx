import { ChevronRight } from 'lucide-react'
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
      aria-haspopup="dialog"
      className="group card-surface flex h-full w-full flex-col p-6 text-left outline-none hover:border-white/15 hover:bg-[#191919] focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
        <TechIcon tech={tech} className="size-5" />
      </span>
      <span className="mt-6 text-base font-medium tracking-tight text-foreground">{tech.name}</span>
      <span className="mt-1.5 font-mono text-[0.6875rem] tracking-[0.2em] text-subtle uppercase">{tech.category}</span>
      <span className="mt-3 text-sm leading-relaxed text-muted-foreground">{tech.summary}</span>
      <span className="mt-auto flex items-center gap-1 pt-5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
        Ver detalhes
        <ChevronRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </button>
  )
}

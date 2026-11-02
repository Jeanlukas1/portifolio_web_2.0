import { ArrowUpRight } from 'lucide-react'
import { CardGlow } from '@/components/common/CardGlow'
import { trackGlow } from '@/lib/cardGlow'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/types/content'
import { ProjectCover } from './ProjectCover'
import { techLabel } from './techLabels'

const MAX_TAGS = 4

type ProjectCardProps = {
  project: Project
  /** Recebe também o botão clicado, para devolver o foco a ele quando o dialog fechar. */
  onSelect: (project: Project, trigger: HTMLButtonElement) => void
}

/** Card de projeto (screenshot 142549): capa, ano mono, título, resumo e tags. Hover: sobe e mostra "↗". */
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const extra = project.tech.length - MAX_TAGS
  return (
    <button
      type="button"
      onClick={(event) => onSelect(project, event.currentTarget)}
      onPointerMove={trackGlow}
      aria-haspopup="dialog"
      className="group card-surface relative isolate flex h-full w-full flex-col overflow-hidden text-left outline-none transition-[translate,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-[#191919] hover:shadow-[0_24px_60px_-20px_rgb(0_0_0/0.9),0_0_0_1px_rgb(94_234_212/0.06)] focus-visible:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <CardGlow />
      <span className="relative block aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06]">
        <ProjectCover
          project={project}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {project.year && (
          <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.2em] text-foreground/80 backdrop-blur-sm">
            {project.year}
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 flex size-9 scale-75 -rotate-45 items-center justify-center rounded-full bg-foreground text-background opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:rotate-0 group-focus-visible:opacity-100"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </span>
      <span className="relative z-10 flex flex-1 flex-col p-6">
        <span className="text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-white">{project.title}</span>
        <span className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</span>
        <span className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tech.slice(0, MAX_TAGS).map((id) => (
            <Badge key={id} variant="mono">
              {techLabel(id)}
            </Badge>
          ))}
          {extra > 0 && (
            <Badge variant="mono" aria-label={`mais ${extra} tecnologias`}>
              +{extra}
            </Badge>
          )}
        </span>
      </span>
    </button>
  )
}

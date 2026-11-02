import { ArrowUpRight } from 'lucide-react'
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
      aria-haspopup="dialog"
      className="group card-surface flex h-full w-full flex-col overflow-hidden text-left outline-none transition-[translate,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#191919] focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-y-0"
    >
      <span className="relative block aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06]">
        <ProjectCover
          project={project}
          className="transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        {project.year && (
          <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.2em] text-foreground/80 backdrop-blur-sm">
            {project.year}
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </span>
      <span className="flex flex-1 flex-col p-6">
        <span className="text-base font-medium tracking-tight text-foreground">{project.title}</span>
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

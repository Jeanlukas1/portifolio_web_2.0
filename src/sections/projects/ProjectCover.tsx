import { TechIcon } from '@/components/common/TechIcon'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/content'
import { projectTechs } from './techLabels'

type ProjectCoverProps = {
  project: Project
  className?: string
}

const gridPattern = {
  backgroundImage:
    'linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

/**
 * Capa do card: primeira imagem do projeto ou, sem print, uma capa gerada
 * (grade escura + brilho na cor da tecnologia principal + ícones de até 3 tecnologias). Nunca inventa imagens.
 */
export function ProjectCover({ project, className }: ProjectCoverProps) {
  const image = project.images?.[0]
  if (image) {
    return (
      <img
        src={image.src}
        alt=""
        loading="lazy"
        decoding="async"
        className={cn('size-full object-cover object-top', className)}
      />
    )
  }
  const techs = projectTechs(project)
  return (
    <div
      aria-hidden="true"
      className={cn('relative flex size-full items-center justify-center overflow-hidden bg-[#111]', className)}
      style={gridPattern}
    >
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 55%, ${techs[0]?.color ?? '#5eead4'}26, transparent 60%)` }}
      />
      <span className="relative flex items-center gap-3">
        {techs.map((tech, i) => (
          <span
            key={tech.id}
            className={cn(
              'flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm',
              i === 0 ? 'size-16' : 'size-12',
            )}
          >
            <TechIcon tech={tech} className={i === 0 ? 'size-8' : 'size-6'} />
          </span>
        ))}
      </span>
    </div>
  )
}

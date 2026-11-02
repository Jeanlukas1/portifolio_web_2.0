import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/content'
import { ProjectCover } from './ProjectCover'

type ProjectGalleryProps = {
  project: Project
}

/** Topo do dialog: imagem grande + miniaturas com rótulo (galeria do site antigo). Sem imagens → capa gerada. */
export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images ?? []
  const [index, setIndex] = useState(0)
  const current = images[index]

  return (
    <div className="border-b border-white/[0.06]">
      <div className="aspect-[16/9] w-full overflow-hidden bg-black sm:aspect-auto sm:h-[300px]">
        {current ? (
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="size-full animate-in object-cover object-top duration-300 fade-in-0"
          />
        ) : (
          <ProjectCover project={project} />
        )}
      </div>
      {images.length > 1 && (
        <ul aria-label="Imagens do projeto" className="flex gap-3 overflow-x-auto px-7 py-4">
          {images.map((image, i) => (
            <li key={image.src} className="shrink-0">
              <button
                type="button"
                aria-pressed={i === index}
                aria-label={`Ver imagem: ${image.label}`}
                onClick={() => setIndex(i)}
                className="group flex w-28 flex-col gap-1.5 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className={cn(
                    'block aspect-[16/10] overflow-hidden rounded-md border transition',
                    i === index ? 'border-foreground/70' : 'border-white/10 opacity-60 group-hover:opacity-100',
                  )}
                >
                  <img src={image.src} alt="" loading="lazy" className="size-full object-cover object-top" />
                </span>
                <span
                  className={cn(
                    'font-mono text-[0.5625rem] leading-snug tracking-[0.15em] uppercase',
                    i === index ? 'text-foreground' : 'text-subtle',
                  )}
                >
                  {image.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

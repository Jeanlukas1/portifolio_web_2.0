import { ArrowUpRight, XIcon } from 'lucide-react'
import type { RefObject } from 'react'
import { GithubIcon } from '@/components/common/BrandIcons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import type { Project } from '@/types/content'
import { ProjectGallery } from './ProjectGallery'
import { techLabel } from './techLabels'

type ProjectDialogProps = {
  project: Project | null
  onOpenChange: (open: boolean) => void
  /** Elemento que recebe o foco ao fechar (o dialog é controlado, sem DialogTrigger). */
  returnFocusRef?: RefObject<HTMLElement | null>
}

/** Dialog de projeto (~670 px): galeria, ano, título, descrição, destaques, tags e links. */
export function ProjectDialog({ project, onOpenChange, returnFocusRef }: ProjectDialogProps) {
  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="block max-h-[90svh] overflow-y-auto border border-white/10 bg-card p-0 ring-0 sm:max-w-[670px]"
        onCloseAutoFocus={(event) => {
          const target = returnFocusRef?.current
          if (!target) return
          event.preventDefault()
          target.focus()
        }}
      >
        {project && (
          <>
            {/* X fixo: faixa sticky de altura 0 no topo da área rolável; o botão fica sobre a imagem. */}
            <div className="sticky top-0 z-10 h-0">
              <DialogClose asChild>
                <Button
                  variant="icon-circle"
                  size="icon-lg"
                  className="absolute top-3 right-3 border-white/15 bg-black/60 text-foreground backdrop-blur-sm"
                >
                  <XIcon />
                  <span className="sr-only">Fechar</span>
                </Button>
              </DialogClose>
            </div>
            {/* key: a galeria volta para a primeira imagem a cada projeto */}
            <ProjectGallery key={project.slug} project={project} />
            <div className="p-7 pt-5">
              {project.year && (
                <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-subtle">{project.year}</p>
              )}
              <DialogTitle className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</DialogTitle>
              <DialogDescription className="mt-4 text-sm leading-relaxed">
                {project.description ?? project.summary}
              </DialogDescription>

              {project.highlights && project.highlights.length > 0 && (
                <>
                  <h3 className="mt-6 text-eyebrow">Destaques</h3>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-foreground/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <ul aria-label="Tecnologias" className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((id) => (
                  <li key={id}>
                    <Badge variant="mono">{techLabel(id)}</Badge>
                  </li>
                ))}
              </ul>

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button asChild variant="pill" size="nav">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Ver online <ArrowUpRight />
                        <span className="sr-only">(abre em nova aba)</span>
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button asChild variant={project.liveUrl ? 'pill-outline' : 'pill'} size="nav">
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        <GithubIcon className="size-4" /> Código no GitHub
                        <span className="sr-only">(abre em nova aba)</span>
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

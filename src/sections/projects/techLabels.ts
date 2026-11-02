import { techById } from '@/data/technologies'
import type { Project, Technology } from '@/types/content'

/** Nome exibido de um item de `Project.tech` (id de technologies.ts ou rótulo livre). */
export const techLabel = (id: string) => techById.get(id)?.name ?? id

/** Tecnologias catalogadas do projeto, na ordem de `tech` (ícones da capa gerada). */
export const projectTechs = (project: Project, limit = 3): Technology[] =>
  project.tech
    .map((id) => techById.get(id))
    .filter((t): t is Technology => Boolean(t))
    .slice(0, limit)

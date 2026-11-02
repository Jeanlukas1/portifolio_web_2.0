import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { projectFilters, projects } from '@/data/projects'
import { easeOut, revealViewport } from '@/lib/motion'
import type { Project } from '@/types/content'
import { ProjectCard } from './ProjectCard'
import { ProjectDialog } from './ProjectDialog'
import { ProjectFilter, type FilterOption } from './ProjectFilter'

const ALL = 'todos'

const filterOptions: FilterOption[] = [
  { id: ALL, label: 'Todos', count: projects.length },
  ...projectFilters.map((f) => ({ ...f, count: projects.filter((p) => p.category === f.id).length })),
]

/** 04 — Projetos (screenshot 142549): filtro em pills, grade de cards e dialog com galeria. */
export function Projects() {
  const [filter, setFilter] = useState(ALL)
  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter)

  const open = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelected(project)
  }

  return (
    <Section id="projetos">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <SectionHeading index="04" label="Projetos" title="Trabalhos selecionados" />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] lg:max-w-md lg:justify-self-end lg:text-right">
          Abra um projeto para ver o contexto, os destaques, as imagens e o código.
        </p>
      </div>

      <Reveal className="mt-10">
        <ProjectFilter options={filterOptions} value={filter} onChange={setFilter} />
      </Reveal>
      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? 'projeto' : 'projetos'}
      </p>

      {/* Reveal por card (grade longa); popLayout reorganiza a grade ao filtrar. */}
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              viewport={revealViewport}
              transition={{ duration: 0.6, ease: easeOut, delay: (i % 3) * 0.06 }}
            >
              <ProjectCard project={project} onSelect={open} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <ProjectDialog
        project={selected}
        onOpenChange={(isOpen) => !isOpen && setSelected(null)}
        returnFocusRef={triggerRef}
      />
    </Section>
  )
}

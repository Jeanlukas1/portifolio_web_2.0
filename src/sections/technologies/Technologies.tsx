import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { technologies } from '@/data/technologies'
import { fadeUp, revealViewport } from '@/lib/motion'
import type { Technology } from '@/types/content'
import { TechCard } from './TechCard'
import { TechDialog } from './TechDialog'

/** 03 — Tecnologias (screenshot 142541): grade de cards; clique abre o dialog de detalhes. */
export function Technologies() {
  const [selected, setSelected] = useState<Technology | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const open = (tech: Technology, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelected(tech)
  }

  return (
    <Section id="tecnologias">
      <SectionHeading
        index="03"
        label="Tecnologias"
        title="Minhas tecnologias"
        description="Ferramentas que usei nos meus projetos. Clique para ver detalhes."
        align="center"
      />
      {/* Reveal por card (e não da lista toda): a grade tem 20 itens e fica muito alta no mobile. */}
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech, i) => (
          <motion.li
            key={tech.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={{ delay: (i % 4) * 0.06 }}
          >
            <TechCard tech={tech} onSelect={open} />
          </motion.li>
        ))}
      </ul>
      <TechDialog
        tech={selected}
        onOpenChange={(isOpen) => !isOpen && setSelected(null)}
        returnFocusRef={triggerRef}
      />
    </Section>
  )
}

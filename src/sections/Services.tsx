import { Code, Database, Globe, LayoutDashboard, Server, Smartphone, Terminal, Wrench, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { services } from '@/data/services'
import { fadeUp, revealViewport, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import type { ServiceIconName } from '@/types/content'

const icons: Record<ServiceIconName, LucideIcon> = {
  globe: Globe,
  server: Server,
  database: Database,
  layout: LayoutDashboard,
  wrench: Wrench,
  code: Code,
  terminal: Terminal,
  smartphone: Smartphone,
}

/** 02 — Serviços (screenshot 142533). */
export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading index="02" label="Serviços" title="Serviços" description="O que posso construir para você." align="center" />
      <motion.ul
        variants={stagger(0, 0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <motion.li
              key={service.title}
              variants={fadeUp}
              className="card-surface p-6 hover:border-white/15 hover:bg-[#191919]"
            >
              <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <Icon aria-hidden="true" className={cn('size-5', service.iconColor)} />
              </span>
              <h3 className="mt-6 text-base font-medium tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.li>
          )
        })}
      </motion.ul>
    </Section>
  )
}

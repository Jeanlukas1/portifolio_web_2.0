import { FileText } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { profile } from '@/data/profile'

type AboutProps = {
  /** Abre o currículo em PDF (ligado na Etapa 10). */
  onViewCv?: () => void
}

/** Rótulo de bloco no estilo "POSSO TE AJUDAR SE VOCÊ PRECISA DE:" do modelo. */
function BlockLabel({ children }: { children: string }) {
  return <h4 className="text-xs font-normal tracking-[0.25em] text-foreground/85 uppercase">{children}</h4>
}

function Bullet() {
  return <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-white/40" />
}

/** 01 — Sobre (screenshot 142524), com Formação e Boas práticas no lugar dos itens do mock. */
export function About({ onViewCv }: AboutProps) {
  return (
    <Section id="sobre" className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <Reveal className="min-w-0">
        <SectionHeading index="01" label="Sobre" title="Sobre mim" description={profile.aboutTagline} />
      </Reveal>

      <Reveal delay={0.1} className="min-w-0 space-y-10">
        <div className="space-y-5">
          <h3 className="text-[2rem] leading-tight font-semibold">{profile.name}</h3>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-[0.9375rem] leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <BlockLabel>Experiência</BlockLabel>
          <ul className="space-y-3">
            {experience.map((job) => (
              <li key={job.organization} className="flex gap-3">
                <Bullet />
                <p className="text-[0.9375rem] text-foreground/90">
                  {job.role} · {job.organization}
                  <span className="block text-sm text-subtle">{job.period}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <BlockLabel>Formação</BlockLabel>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {education.map((item) => (
              <li key={item.title} className="flex gap-3">
                <Bullet />
                <p className="text-[0.9375rem] text-foreground/90">
                  {item.title}
                  <span className="block text-sm text-subtle">
                    {item.institution}
                    {item.period ? ` · ${item.period}` : ''}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {profile.highlight && <p className="text-[0.9375rem] leading-relaxed text-foreground">{profile.highlight}</p>}

        {profile.differentials && profile.differentials.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-normal text-foreground">Boas práticas</h4>
            <ul className="flex flex-wrap gap-2.5">
              {profile.differentials.map((item) => (
                <li key={item}>
                  <Badge variant="pill">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-5">
          <Button
            variant="pill"
            size="cta"
            className="rounded-xl px-6 text-xs tracking-[0.2em] uppercase"
            onClick={onViewCv}
            disabled={!onViewCv}
          >
            <FileText /> Visualizar currículo
          </Button>
          <span aria-hidden="true" className="hidden h-px w-48 bg-white/15 sm:block" />
        </div>
      </Reveal>
    </Section>
  )
}

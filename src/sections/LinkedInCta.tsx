import { ArrowUpRight, MapPin } from 'lucide-react'
import { LinkedinIcon } from '@/components/common/BrandIcons'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { Magnetic } from '@/components/common/Magnetic'
import { Button } from '@/components/ui/button'
import { linkedinCta } from '@/data/linkedin'
import { profile } from '@/data/profile'

/** 05 — LinkedIn (screenshot 142600): card grande com brilho; texto + CTA à esquerda, mini-card de perfil à direita. */
export function LinkedInCta() {
  return (
    <Section id="linkedin">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-6 sm:p-12 lg:p-14">
          {/* brilho do modelo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-40 size-[520px] rounded-full opacity-60 blur-3xl"
            style={{ background: 'radial-gradient(circle, color-mix(in oklch, var(--glow) 35%, transparent), transparent 70%)' }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-eyebrow">05 — LinkedIn</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-[2.5rem] sm:leading-tight">
                {linkedinCta.title}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                {linkedinCta.text}
              </p>
              <Magnetic className="mt-8">
              <Button asChild variant="pill" size="cta">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="size-4" /> {linkedinCta.ctaLabel} <ArrowUpRight />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </Button>
              </Magnetic>
            </div>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Perfil de ${profile.name} no LinkedIn (abre em nova aba)`}
              className="group block min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors outline-none hover:border-white/20 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-ring sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-foreground text-base font-semibold text-background">
                  {profile.initials}
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">{profile.role}</p>
                  <p className="mt-1 flex items-center gap-1 font-mono text-[0.625rem] tracking-[0.2em] text-subtle uppercase">
                    <MapPin aria-hidden="true" className="size-3" /> {profile.location}
                  </p>
                </div>
                <LinkedinIcon className="ml-auto size-5 shrink-0 self-start text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                {linkedinCta.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

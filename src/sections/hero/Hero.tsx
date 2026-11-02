import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDownRight, Download } from 'lucide-react'
import { SocialIcons } from '@/components/common/SocialIcons'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { fadeUp, stagger } from '@/lib/motion'
import { ScrollCue } from './ScrollCue'
import { TechOrbit } from './TechOrbit'
import { TypingLine } from './TypingLine'

type HeroProps = {
  /** Ação do botão "Baixar CV" (ligada ao gerador de PDF na Etapa 10). */
  onDownloadCv?: () => void
}

export function Hero({ onDownloadCv }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  // Ao rolar, o conteúdo do hero sobe e esmaece (vídeo do modelo).
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} id="topo" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-24 lg:pt-16">
      <motion.div
        style={reduceMotion ? undefined : { opacity, y }}
        className="mx-auto grid w-full max-w-[85rem] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8"
      >
        <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-eyebrow">
            Olá, eu sou o
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[3.5rem] leading-[0.95] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-[6rem]"
          >
            {profile.name}
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-7">
            <TypingLine phrases={profile.typingPhrases} />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[29rem] text-[0.9375rem] leading-relaxed text-muted-foreground"
          >
            {profile.heroBio}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="pill" size="cta">
              <a href="#projetos">
                Ver projetos <ArrowDownRight />
              </a>
            </Button>
            <Button variant="pill-outline" size="cta" onClick={onDownloadCv} disabled={!onDownloadCv}>
              <Download /> Baixar CV
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex items-center gap-4">
            <SocialIcons />
            <p className="text-eyebrow text-[0.625rem]">{profile.location}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <TechOrbit />
        </motion.div>
      </motion.div>

      <ScrollCue href="#sobre" />
    </section>
  )
}

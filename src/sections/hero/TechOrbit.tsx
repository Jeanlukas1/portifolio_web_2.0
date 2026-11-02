import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import profilePhoto from '@/assets/images/profile.webp'
import { profile } from '@/data/profile'
import { orbitTechIds, techById } from '@/data/technologies'
import { cn } from '@/lib/utils'

/*
 * Orbit do hero (screenshot 142511 + vídeo). Posições medidas no modelo, em px
 * relativos ao centro, para um orbit de 420 px de diâmetro; viram % para escalar.
 */
const BASE = 420
const slots: Array<[number, number]> = [
  [-89, 190], // python      (vaga "PYTHON" do modelo)
  [71, -198], // fastapi     ("FASTAPI")
  [-186, -99], // docker     ("DOCKER")
  [194, 78], // postgresql   ("POSTGRESQL")
  [125, -68], // react       ("REACT")
  [-124, -72], // typescript ("AWS")
  [-31, 139], // mongodb     ("NODE.JS")
  [-200, 42], // flask       (vaga livre à esquerda)
]
const toPct = (v: number) => `${50 + (v / BASE) * 100}%`

const CYCLE_MS = 2600
const FIRST_DELAY_MS = 2200

export function TechOrbit() {
  const reduceMotion = useReducedMotion()
  const techs = orbitTechIds.map((id) => techById.get(id)).filter((t) => t !== undefined)
  const [active, setActive] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  // Alterna o chip ativo sozinho; pausa no hover. Sem ciclo com reduced-motion.
  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = setTimeout(
      () => setActive((i) => (i === null ? 0 : (i + 1) % techs.length)),
      active === null ? FIRST_DELAY_MS : CYCLE_MS,
    )
    return () => clearTimeout(timer)
  }, [active, paused, reduceMotion, techs.length])

  const activeTech = active !== null ? techs[active] : null

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative aspect-square w-[min(19rem,82vw)] sm:w-[22rem] lg:w-[26.25rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Brilho atrás da foto */}
        <div
          aria-hidden="true"
          className="absolute inset-[-12%] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(45 95 107 / 0.35) 0%, rgb(45 95 107 / 0.08) 45%, transparent 70%)' }}
        />
        {/* Anel externo tracejado + ponto girando */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-dashed border-white/10"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
        </motion.div>
        {/* Anel interno sólido + ponto girando no sentido contrário */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-[16%] rounded-full border border-white/10"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
        </motion.div>
        {/* Foto (tratamento só via CSS: leve vinheta para casar com o fundo escuro) */}
        <div className="absolute inset-[27%] overflow-hidden rounded-full border border-white/10 shadow-[0_0_60px_-10px_rgb(45_95_107/0.6)]">
          <img
            src={profilePhoto}
            alt={`Foto de ${profile.name}`}
            className="size-full object-cover object-[50%_30%] brightness-[0.92] contrast-[1.05]"
            width={480}
            height={528}
          />
          <div aria-hidden="true" className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgb(0_0_0/0.55)]" />
        </div>
        {/* Chips */}
        {techs.map((tech, i) => {
          const [x, y] = slots[i] ?? [0, 0]
          const isActive = i === active
          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={cn(
                'absolute inline-flex min-h-6 -translate-x-1/2 -translate-y-1/2 items-center rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.2em] uppercase transition-colors duration-300 sm:px-3 sm:text-[0.625rem]',
                isActive
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-white/12 bg-[#141414]/90 text-foreground/80 hover:border-white/30 hover:text-foreground',
              )}
              style={{ left: toPct(x), top: toPct(y) }}
            >
              {tech.name}
            </button>
          )
        })}
      </div>

      {/* Legenda: tecnologia ativa ou dica de interação */}
      <div className="mt-8 h-12 text-center" aria-live="polite">
        <AnimatePresence mode="wait">
          {activeTech ? (
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-mono text-[0.625rem] tracking-[0.3em] text-foreground uppercase">{activeTech.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{activeTech.summary}</p>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              className="text-eyebrow text-[0.5625rem] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Passe o mouse para pausar
              <br />
              Toque em uma tecnologia
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

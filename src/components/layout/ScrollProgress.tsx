import { motion, useScroll, useSpring } from 'motion/react'

/** Linha de progresso de leitura sobre a borda inferior do header (modelo Base44). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-px h-px origin-left bg-linear-to-r from-sky-300/80 via-glow to-transparent"
      style={{ scaleX }}
    />
  )
}

import { motion, type HTMLMotionProps } from 'motion/react'
import { fadeUp, revealViewport } from '@/lib/motion'

type RevealProps = HTMLMotionProps<'div'> & {
  /** Atraso em segundos antes de animar. */
  delay?: number
}

/**
 * Faz o conteúdo entrar com fade + subida ao aparecer na tela (uma vez).
 * Com prefers-reduced-motion, o MotionConfig do App desliga o deslocamento.
 */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

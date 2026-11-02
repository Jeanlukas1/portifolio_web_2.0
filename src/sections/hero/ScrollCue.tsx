import { motion, useReducedMotion } from 'motion/react'

/** Indicador de rolagem (cápsula com ponto descendo), centralizado no fim do hero. */
export function ScrollCue({ href }: { href: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <a
      href={href}
      aria-label="Rolar para a próxima seção"
      className="absolute bottom-6 left-1/2 flex h-9 w-[1.375rem] -translate-x-1/2 justify-center rounded-full border border-white/20 pt-2 transition-colors hover:border-white/40"
    >
      <motion.span
        className="size-1 rounded-full bg-foreground/80"
        animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </a>
  )
}

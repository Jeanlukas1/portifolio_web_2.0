import type { Transition, Variants } from 'motion/react'

/** Curva de easing usada em todas as entradas (suave, sem "quique"). */
export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1]

/** Entrada padrão: fade + leve subida (reveal das seções). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

/** Contêiner que escalona a entrada dos filhos (grids de cards). */
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
})

/** Configuração de viewport do reveal: anima uma vez, quando ~20% do item aparece. */
export const revealViewport = { once: true, amount: 0.2 } as const

import { motion, useMotionValue, useSpring } from 'motion/react'
import type { PointerEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type MagneticProps = {
  children: ReactNode
  /** Fração da distância cursor→centro que o elemento acompanha (0–1). */
  strength?: number
  /** Deslocamento máximo em px. */
  max?: number
  className?: string
}

const spring = { stiffness: 220, damping: 15, mass: 0.4 }

/**
 * Botão magnético: o conteúdo é "puxado" na direção do cursor e volta com mola ao sair.
 * A área de atração passa 12 px da borda (padding compensado por margem negativa, sem mudar o layout).
 * Só reage a mouse; em toque não faz nada.
 */
export function Magnetic({ children, strength = 0.35, max = 14, className }: MagneticProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)

  const onMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    const dx = (event.clientX - (rect.left + rect.width / 2)) * strength
    const dy = (event.clientY - (rect.top + rect.height / 2)) * strength
    x.set(Math.max(-max, Math.min(max, dx)))
    y.set(Math.max(-max, Math.min(max, dy)))
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <span className={cn('-m-3 inline-flex p-3', className)} onPointerMove={onMove} onPointerLeave={reset}>
      <motion.span className="inline-flex" style={{ x: sx, y: sy }}>
        {children}
      </motion.span>
    </span>
  )
}

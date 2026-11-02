import { useMotionValue, useSpring, useTransform } from 'motion/react'
import type { PointerEvent } from 'react'

const spring = { stiffness: 180, damping: 18, mass: 0.5 }

/**
 * Inclinação 3D que segue o cursor (cards de projeto).
 * Retorna o `style` (rotações com mola + perspectiva) e os handlers para o elemento.
 * Só reage a mouse; ao sair, volta ao plano com mola.
 */
export function useTilt(maxDeg = 8) {
  // Posição normalizada do cursor no card: -0,5 (borda esquerda/topo) a 0,5 (direita/base).
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-maxDeg, maxDeg]), spring)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [maxDeg, -maxDeg]), spring)

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }
  const onPointerLeave = () => {
    px.set(0)
    py.set(0)
  }

  return {
    style: { rotateX, rotateY, transformPerspective: 1000 },
    onPointerMove,
    onPointerLeave,
  }
}

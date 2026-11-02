import { useEffect, useRef } from 'react'

/**
 * Brilho radial sutil que acompanha o cursor (🔶 hipótese do vídeo, ver docs/decisoes.md).
 * Fica parado no canto superior esquerdo em telas de toque e com prefers-reduced-motion.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--spot-x', `${e.clientX}px`)
        el.style.setProperty('--spot-y', `${e.clientY}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 [--spot-x:15%] [--spot-y:20%]"
      style={{
        background:
          'radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgb(45 95 107 / 0.10), transparent 70%)',
      }}
    />
  )
}

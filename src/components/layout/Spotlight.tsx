import { useEffect, useRef } from 'react'

/**
 * Feixe de luz de fundo que acompanha o cursor (visto no vídeo do modelo).
 * Segue o mouse com atraso suave (rastro), para todos os visitantes. Em telas de toque fica parado.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return
    const ease = 0.12

    const target = { x: window.innerWidth * 0.2, y: window.innerHeight * 0.25 }
    const pos = { ...target }
    let frame = 0
    let running = false

    const render = () => {
      pos.x += (target.x - pos.x) * ease
      pos.y += (target.y - pos.y) * ease
      el.style.setProperty('--spot-x', `${pos.x}px`)
      el.style.setProperty('--spot-y', `${pos.y}px`)
      // Para o loop quando alcança o cursor (sem gastar CPU parado).
      if (Math.abs(target.x - pos.x) > 0.5 || Math.abs(target.y - pos.y) > 0.5) {
        frame = requestAnimationFrame(render)
      } else {
        running = false
      }
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      target.x = e.clientX
      target.y = e.clientY
      el.style.opacity = '1'
      if (!running) {
        running = true
        frame = requestAnimationFrame(render)
      }
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }

    render()
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 [--spot-x:20%] [--spot-y:25%]"
      style={{
        background: [
          // núcleo claro
          'radial-gradient(180px circle at var(--spot-x) var(--spot-y), rgb(255 255 255 / 0.045), transparent 70%)',
          // feixe azul-petróleo
          'radial-gradient(520px circle at var(--spot-x) var(--spot-y), rgb(45 140 150 / 0.16), rgb(45 95 107 / 0.06) 45%, transparent 75%)',
        ].join(', '),
      }}
    />
  )
}

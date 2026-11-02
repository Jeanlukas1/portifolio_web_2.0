import type { PointerEvent } from 'react'

/** Guarda a posição do cursor no card (--glow-x/--glow-y) para o <CardGlow />. Só mouse. */
export function trackGlow(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse') return
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
  el.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
}

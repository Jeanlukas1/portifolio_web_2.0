import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

type Options = {
  typeMs?: number
  deleteMs?: number
  holdMs?: number
  gapMs?: number
  startDelayMs?: number
}

/**
 * Efeito de digitação em ciclo (mesmos tempos do main.js antigo).
 * Com prefers-reduced-motion, retorna a primeira frase completa e não anima.
 */
export function useTypewriter(
  phrases: string[],
  { typeMs = 90, deleteMs = 45, holdMs = 1800, gapMs = 350, startDelayMs = 900 }: Options = {},
) {
  const reduceMotion = useReducedMotion()
  const [text, setText] = useState('')

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) return

    let phrase = 0
    let letter = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const current = phrases[phrase]
      letter += deleting ? -1 : 1
      setText(current.slice(0, letter))

      let wait = deleting ? deleteMs : typeMs
      if (!deleting && letter === current.length) {
        deleting = true
        wait = holdMs
      } else if (deleting && letter === 0) {
        deleting = false
        phrase = (phrase + 1) % phrases.length
        wait = gapMs
      }
      timer = setTimeout(tick, wait)
    }

    timer = setTimeout(tick, startDelayMs)
    return () => clearTimeout(timer)
  }, [phrases, reduceMotion, typeMs, deleteMs, holdMs, gapMs, startDelayMs])

  return reduceMotion ? (phrases[0] ?? '') : text
}

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Copia texto para a área de transferência. `copied` fica true por `resetMs` após o sucesso
 * (para trocar o ícone por ✓). Retorna false se o navegador bloquear a cópia.
 */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        return false
      }
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), resetMs)
      return true
    },
    [resetMs],
  )

  return { copied, copy }
}

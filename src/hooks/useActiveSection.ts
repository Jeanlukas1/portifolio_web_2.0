import { useEffect, useState } from 'react'

/**
 * Retorna o id da seção que ocupa o centro da tela (mesma lógica do main.js antigo).
 * Antes da primeira seção (hero), retorna `fallback`.
 */
export function useActiveSection(ids: string[], fallback: string | null = null) {
  const [active, setActive] = useState<string | null>(fallback)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0 || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((el) => observer.observe(el))

    // No topo da página (hero), volta ao fallback.
    const onScroll = () => {
      if (window.scrollY + window.innerHeight / 2 < elements[0].offsetTop) setActive(fallback)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids, fallback])

  return active
}

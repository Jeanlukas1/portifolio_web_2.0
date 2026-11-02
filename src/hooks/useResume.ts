import { useCallback } from 'react'
import { toast } from 'sonner'

/*
 * Ações do currículo para os botões "Baixar CV" (hero) e "Visualizar currículo" (Sobre).
 * Servem o PDF fornecido pelo usuário, sem alterações (public/curriculo-jean-lukas.pdf).
 * Para atualizar o currículo, basta substituir esse arquivo.
 */
const RESUME_URL = '/curriculo-jean-lukas.pdf'
const RESUME_FILENAME = 'Curriculo-Jean-Lukas.pdf'

export function useResume() {
  const download = useCallback(() => {
    const link = document.createElement('a')
    link.href = RESUME_URL
    link.download = RESUME_FILENAME
    document.body.append(link)
    link.click()
    link.remove()
    toast.success('Currículo baixado')
  }, [])

  const view = useCallback(() => {
    window.open(RESUME_URL, '_blank', 'noopener')
  }, [])

  return { download, view }
}

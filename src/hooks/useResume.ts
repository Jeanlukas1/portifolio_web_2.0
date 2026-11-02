import { useCallback } from 'react'
import { toast } from 'sonner'

/*
 * Ações do currículo para os botões "Baixar CV" (hero) e "Visualizar currículo" (Sobre).
 * O módulo do gerador (e o jsPDF) só é carregado no primeiro clique.
 */
const loadResume = () => import('@/lib/resume/generateResume')

const onError = () =>
  toast.error('Não foi possível gerar o currículo', { description: 'Tente novamente em instantes.' })

export function useResume() {
  const download = useCallback(async () => {
    try {
      const { downloadResume } = await loadResume()
      await downloadResume()
      toast.success('Currículo baixado')
    } catch {
      onError()
    }
  }, [])

  const view = useCallback(async () => {
    // Abre a aba já no clique, antes de qualquer await (ver viewResume).
    const tab = window.open('', '_blank')
    try {
      const { viewResume } = await loadResume()
      const result = await viewResume(tab)
      if (result === 'download') toast.info('A nova aba foi bloqueada; o currículo foi baixado.')
    } catch {
      tab?.close()
      onError()
    }
  }, [])

  return { download, view }
}

import type { RefObject } from 'react'
import { TechIcon } from '@/components/common/TechIcon'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Technology } from '@/types/content'

type TechDialogProps = {
  tech: Technology | null
  onOpenChange: (open: boolean) => void
  /** Elemento que recebe o foco ao fechar (o dialog é controlado, sem DialogTrigger). */
  returnFocusRef?: RefObject<HTMLElement | null>
}

/** Dialog "Ver detalhes" (~450 px): ícone grande, nome, categoria mono e descrição longa. */
export function TechDialog({ tech, onOpenChange, returnFocusRef }: TechDialogProps) {
  return (
    <Dialog open={tech !== null} onOpenChange={onOpenChange}>
      <DialogContent
        className="gap-0 border border-white/10 bg-card p-7 ring-0 sm:max-w-[450px]"
        onCloseAutoFocus={(event) => {
          const target = returnFocusRef?.current
          if (!target) return
          event.preventDefault()
          target.focus()
        }}
      >
        {tech && (
          <>
            <DialogHeader className="gap-0">
              <span className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <TechIcon tech={tech} className="size-7" />
              </span>
              <DialogTitle className="mt-5 text-xl font-semibold tracking-tight">{tech.name}</DialogTitle>
              <p className="mt-2 font-mono text-[0.6875rem] tracking-[0.2em] text-subtle uppercase">{tech.category}</p>
            </DialogHeader>
            <DialogDescription className="mt-5 text-sm leading-relaxed">{tech.details ?? tech.summary}</DialogDescription>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

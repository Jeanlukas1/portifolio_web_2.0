import { useTypewriter } from '@/hooks/useTypewriter'

/** Linha "terminal" do hero: "> " + frase digitada + cursor piscando. */
export function TypingLine({ phrases }: { phrases: string[] }) {
  const text = useTypewriter(phrases)

  return (
    <p className="flex h-7 items-center font-mono text-sm text-foreground/90 sm:text-base">
      <span aria-hidden="true" className="mr-3 text-subtle">
        &gt;
      </span>
      {/* Leitores de tela recebem as frases completas, não as letras animadas. */}
      <span className="sr-only">{phrases.join(', ')}</span>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-[blink_1s_steps(1)_infinite] bg-foreground"
      />
    </p>
  )
}

/**
 * Brilho que acompanha o cursor dentro de um card.
 * Uso: o card precisa de `relative isolate group` (isolate: o brilho fica entre o fundo e o conteúdo) e `onPointerMove={trackGlow}` (de `@/lib/cardGlow`); coloque <CardGlow /> como filho.
 * Efeito disparado pelo usuário (hover), por isso fica ativo mesmo com prefers-reduced-motion.
 */
export function CardGlow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgb(94 234 212 / 0.10), rgb(255 255 255 / 0.03) 35%, transparent 60%)',
      }}
    />
  )
}

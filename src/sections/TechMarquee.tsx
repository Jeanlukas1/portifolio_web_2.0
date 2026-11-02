import { Fragment } from 'react'
import { marqueeTechIds, techById } from '@/data/technologies'

const names = marqueeTechIds.map((id) => techById.get(id)?.name).filter((n): n is string => Boolean(n))

/** Lista de nomes separados por "•" (renderizada duas vezes para o loop contínuo). */
function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {names.map((name) => (
        <Fragment key={name}>
          <li className="px-8 font-mono text-[0.8125rem] tracking-[0.3em] whitespace-nowrap text-muted-foreground uppercase">
            {name}
          </li>
          <li aria-hidden="true" className="text-[0.5rem] text-subtle">
            •
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

/** Faixa de tecnologias em rolagem infinita, com fade nas bordas (screenshot 142533). */
export function TechMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/[0.06] py-5"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <p className="sr-only">Tecnologias: {names.join(', ')}</p>
      <div className="flex w-max animate-[marquee_45s_linear_infinite]">
        <Track hidden />
        <Track hidden />
      </div>
    </div>
  )
}

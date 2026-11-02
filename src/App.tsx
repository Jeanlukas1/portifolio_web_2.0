import { MotionConfig } from 'motion/react'
import { ArrowDownRight, Download, Globe, Server, Wrench } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

/*
 * PÁGINA TEMPORÁRIA DA ETAPA 2 (design system).
 * Só serve para comparar tokens e componentes base com os screenshots do Base44.
 * Textos são de amostra, não conteúdo do site. Será substituída na Etapa 4.
 */
const sampleCards = [
  { icon: Globe, color: 'text-sky-400', title: 'Amostra de card', text: 'Texto secundário do card' },
  { icon: Server, color: 'text-violet-400', title: 'Amostra de card', text: 'Texto secundário do card' },
  { icon: Wrench, color: 'text-emerald-400', title: 'Amostra de card', text: 'Texto secundário do card' },
]

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="py-24">
        <section className="container-page grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <SectionHeading index="01" label="Amostra" title="Título de seção" description="Subtítulo da seção em texto secundário." />
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <h3 className="text-[2rem] font-semibold">Título grande</h3>
            <p className="leading-relaxed text-muted-foreground">
              Parágrafo de amostra para conferir a fonte, o tamanho, a altura de linha e a cor do texto secundário
              em relação ao modelo de referência.
            </p>
            <p className="font-mono text-xs tracking-[0.3em] text-foreground/80 uppercase">Rótulo mono em caixa alta:</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="pill">Pill de texto</Badge>
              <Badge variant="pill">Outro pill</Badge>
              <Badge variant="mono">Python</Badge>
              <Badge variant="mono">FastAPI</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="pill" size="cta">
                Botão sólido <ArrowDownRight />
              </Button>
              <Button variant="pill-outline" size="cta">
                <Download /> Botão outline
              </Button>
              <Button variant="pill" size="nav">
                Contato
              </Button>
            </div>
          </Reveal>
        </section>

        <section className="container-page mt-32">
          <SectionHeading index="02" label="Amostra" title="Seção centralizada" description="Descrição centralizada." align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sampleCards.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={i} delay={i * 0.06} className="card-surface p-6 hover:border-white/15 hover:bg-[#191919]">
                <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Icon className={`size-5 ${color}`} />
                </span>
                <h3 className="mt-6 text-base font-medium tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </MotionConfig>
  )
}

export default App

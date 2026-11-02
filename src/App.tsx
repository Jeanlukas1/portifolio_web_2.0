import { MotionConfig } from 'motion/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Spotlight } from '@/components/layout/Spotlight'
import { About } from '@/sections/About'
import { Hero } from '@/sections/hero/Hero'
import { Services } from '@/sections/Services'
import { TechMarquee } from '@/sections/TechMarquee'

/*
 * Estrutura da página. As seções marcadas como PLACEHOLDER serão substituídas
 * pelos componentes de src/sections nas Etapas 7 a 9 (docs/estado.md).
 */
function SectionPlaceholder({ id, index, label, title }: { id: string; index: string; label: string; title: string }) {
  return (
    <section id={id} className="container-page flex min-h-[70vh] items-center border-t border-white/[0.06] py-24">
      <SectionHeading index={index} label={label} title={title} />
    </section>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="fixed top-3 left-4 z-[60] -translate-y-20 rounded-lg bg-foreground px-4 py-2 text-sm text-background transition-transform focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <Spotlight />
      <Header />

      <main id="conteudo" className="relative z-10">
        <Hero />
        <About />
        <Services />
        <TechMarquee />
        {/* PLACEHOLDER: Etapas 7 a 9 */}
        <SectionPlaceholder id="tecnologias" index="03" label="Tecnologias" title="Minhas tecnologias" />
        <SectionPlaceholder id="projetos" index="04" label="Projetos" title="Trabalhos selecionados" />
        <SectionPlaceholder id="contato" index="06" label="Contato" title="Vamos criar juntos?" />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App

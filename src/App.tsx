import { MotionConfig } from 'motion/react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Spotlight } from '@/components/layout/Spotlight'
import { Toaster } from '@/components/ui/sonner'
import { useResume } from '@/hooks/useResume'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/hero/Hero'
import { LinkedInCta } from '@/sections/LinkedInCta'
import { Projects } from '@/sections/projects/Projects'
import { Services } from '@/sections/Services'
import { TechMarquee } from '@/sections/TechMarquee'
import { Technologies } from '@/sections/technologies/Technologies'

/** Estrutura da página (ordem das seções do modelo Base44). */
function App() {
  const resume = useResume()

  // Animações para todos os visitantes, mesmo com prefers-reduced-motion (decisão do usuário, docs/decisoes.md).
  return (
    <MotionConfig reducedMotion="never">
      <a
        href="#conteudo"
        className="fixed top-3 left-4 z-[60] -translate-y-20 rounded-lg bg-foreground px-4 py-2 text-sm text-background transition-transform focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <Spotlight />
      <Header />

      <main id="conteudo" className="relative z-10">
        <Hero onDownloadCv={resume.download} />
        <About onViewCv={resume.view} />
        <Services />
        <TechMarquee />
        <Technologies />
        <Projects />
        <LinkedInCta />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
      <Toaster position="bottom-center" />
    </MotionConfig>
  )
}

export default App

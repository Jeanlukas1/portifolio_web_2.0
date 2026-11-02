import { ArrowUp } from 'lucide-react'
import { SocialIcons } from '@/components/common/SocialIcons'
import { profile } from '@/data/profile'

/** Ano atual, calculado no carregamento da página (como no site antigo). */
const year = new Date().getFullYear()

/** Rodapé: copyright mono, ícones sociais e "voltar ao topo". */
export function Footer() {
  return (
    <footer className="container-page">
      <div className="flex flex-col items-center gap-6 border-t border-white/[0.06] py-8 sm:flex-row sm:justify-between">
        <p className="text-eyebrow text-center text-[0.625rem]">
          © {year} {profile.name} — {profile.location}
        </p>
        <SocialIcons withEmail size="icon" />
        <a
          href="#topo"
          className="text-eyebrow inline-flex items-center gap-1.5 text-[0.625rem] transition-colors hover:text-foreground"
        >
          Voltar ao topo <ArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  )
}

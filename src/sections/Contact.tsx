import { Check, Copy, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

/** 06 — Contato (screenshot 142606): título gigante em 2 tons, texto, "Enviar e-mail" e "Copiar e-mail". */
export function Contact() {
  const { email } = profile.links
  const { copied, copy } = useCopyToClipboard()

  const onCopy = async () => {
    if (await copy(email)) {
      toast.success('E-mail copiado', { description: email })
    } else {
      toast.error('Não foi possível copiar', { description: `Copie manualmente: ${email}` })
    }
  }

  return (
    <Section id="contato" className="text-center">
      <Reveal>
        <p className="text-eyebrow">06 — Contato</p>
        <h2 className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl lg:text-[5.5rem]">
          <span className="block text-foreground">Vamos criar</span>
          <span className="block text-subtle">juntos?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
          {profile.contactText}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="pill" size="cta">
            <a href={`mailto:${email}`}>
              <Mail /> Enviar e-mail
            </a>
          </Button>
          <Button variant="pill-outline" size="cta" onClick={onCopy}>
            {copied ? <Check className="text-emerald-400" /> : <Copy />}
            {copied ? 'E-mail copiado' : 'Copiar e-mail'}
          </Button>
        </div>
        <p className="mt-6 font-mono text-xs tracking-[0.1em] break-all text-subtle">{email}</p>
      </Reveal>
    </Section>
  )
}

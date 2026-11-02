import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

type SocialIconsProps = {
  /** Inclui o botão de e-mail (rodapé). */
  withEmail?: boolean
  size?: 'icon-lg' | 'icon'
  className?: string
}

/** Botões circulares de GitHub, LinkedIn e (opcional) e-mail. */
export function SocialIcons({ withEmail = false, size = 'icon-lg', className }: SocialIconsProps) {
  const { github, linkedin, email } = profile.links
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      <li>
        <Button asChild variant="icon-circle" size={size}>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
        </Button>
      </li>
      <li>
        <Button asChild variant="icon-circle" size={size}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </Button>
      </li>
      {withEmail && (
        <li>
          <Button asChild variant="icon-circle" size={size}>
            <a href={`mailto:${email}`} aria-label="Enviar e-mail">
              <Mail />
            </a>
          </Button>
        </li>
      )}
    </ul>
  )
}

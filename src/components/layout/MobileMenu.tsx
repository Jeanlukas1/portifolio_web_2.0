import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { NavItem } from '@/types/content'
import { cn } from '@/lib/utils'

type MobileMenuProps = {
  items: NavItem[]
  contact: NavItem
  active: string | null
}

/** Menu de telas pequenas (Sheet do shadcn: foco preso, Esc e trava de scroll já inclusos). */
export function MobileMenu({ items, contact, active }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="icon-circle" size="icon-lg" aria-label="Abrir menu" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(20rem,85vw)] border-white/10 bg-background">
        <SheetHeader>
          <SheetTitle className="text-eyebrow">Menu</SheetTitle>
          <SheetDescription className="sr-only">Navegação entre as seções do portfólio</SheetDescription>
        </SheetHeader>
        <nav aria-label="Principal (celular)" className="px-4">
          <ul className="flex flex-col gap-1">
            {[...items, contact].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={item.id === active ? 'true' : undefined}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-lg transition-colors hover:bg-white/5',
                    item.id === active ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

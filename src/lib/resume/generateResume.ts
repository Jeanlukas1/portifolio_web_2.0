import type { jsPDF as JsPDF } from 'jspdf'
import { education, languages } from '@/data/education'
import { experience } from '@/data/experience'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { techById, technologies } from '@/data/technologies'
import type { TechCategory } from '@/types/content'

/*
 * Currículo em PDF gerado no navegador a partir dos mesmos dados do site.
 * Só dados públicos (docs/decisoes.md): NUNCA telefone, endereço, data de nascimento ou estado civil.
 * jsPDF é carregado sob demanda (import dinâmico) para não pesar no bundle inicial.
 */

export const RESUME_FILENAME = 'curriculo-jean-lukas.pdf'

const PAGE = { width: 210, height: 297, margin: 18 }
const CONTENT_WIDTH = PAGE.width - PAGE.margin * 2
const BOTTOM = PAGE.height - PAGE.margin
const COLOR = {
  text: [17, 17, 17],
  muted: [85, 85, 85],
  subtle: [130, 130, 130],
  accent: [13, 116, 110],
  rule: [220, 220, 220],
} as const satisfies Record<string, readonly [number, number, number]>

const categoryLabels: Record<TechCategory, string> = {
  'front-end': 'Front-end',
  'back-end': 'Back-end',
  'full-stack': 'Full-stack',
  'banco de dados': 'Banco de dados',
  devops: 'DevOps',
  testes: 'Testes',
  ferramentas: 'Ferramentas',
}

const techName = (id: string) => techById.get(id)?.name ?? id

/** Pequeno "motor de layout": cursor vertical, quebra de página e blocos de texto. */
class Writer {
  y = PAGE.margin
  readonly doc: JsPDF

  constructor(doc: JsPDF) {
    this.doc = doc
  }

  private ensure(height: number) {
    if (this.y + height > BOTTOM) {
      this.doc.addPage()
      this.y = PAGE.margin
    }
  }

  private style(size: number, weight: 'normal' | 'bold', color: readonly [number, number, number]) {
    this.doc.setFont('helvetica', weight)
    this.doc.setFontSize(size)
    this.doc.setTextColor(...color)
  }

  /** Altura de linha em mm para um tamanho de fonte em pt. */
  private lineHeight(size: number) {
    return size * 0.3528 * 1.45
  }

  text(content: string, opts: { size?: number; bold?: boolean; color?: readonly [number, number, number]; indent?: number; gapAfter?: number } = {}) {
    const { size = 10, bold = false, color = COLOR.text, indent = 0, gapAfter = 1.5 } = opts
    this.style(size, bold ? 'bold' : 'normal', color)
    const lines: string[] = this.doc.splitTextToSize(content, CONTENT_WIDTH - indent)
    const lh = this.lineHeight(size)
    for (const line of lines) {
      this.ensure(lh)
      this.doc.text(line, PAGE.margin + indent, this.y + lh * 0.75)
      this.y += lh
    }
    this.y += gapAfter
  }

  bullet(content: string, size = 9.5) {
    this.ensure(this.lineHeight(size))
    this.style(size, 'normal', COLOR.accent)
    this.doc.text('•', PAGE.margin + 1, this.y + this.lineHeight(size) * 0.75)
    this.text(content, { size, color: COLOR.muted, indent: 5, gapAfter: 0.8 })
  }

  /** Linha com rótulo em negrito e valor normal (ex.: "Back-end: Python, FastAPI"). */
  labeled(label: string, value: string, size = 9.5) {
    this.style(size, 'bold', COLOR.text)
    const labelText = `${label}: `
    const labelWidth = this.doc.getTextWidth(labelText)
    this.style(size, 'normal', COLOR.muted)
    const lines: string[] = this.doc.splitTextToSize(value, CONTENT_WIDTH - labelWidth)
    const lh = this.lineHeight(size)
    lines.forEach((line, i) => {
      this.ensure(lh)
      if (i === 0) {
        this.style(size, 'bold', COLOR.text)
        this.doc.text(labelText, PAGE.margin, this.y + lh * 0.75)
      }
      this.style(size, 'normal', COLOR.muted)
      this.doc.text(line, PAGE.margin + labelWidth, this.y + lh * 0.75)
      this.y += lh
    })
    this.y += 1
  }

  link(label: string, url: string, size = 8.5) {
    const lh = this.lineHeight(size)
    this.ensure(lh)
    this.style(size, 'normal', COLOR.accent)
    this.doc.textWithLink(label, PAGE.margin, this.y + lh * 0.75, { url })
    this.y += lh + 1
  }

  /** Título de seção em caixa alta com filete abaixo. Garante espaço para o título + algumas linhas. */
  section(title: string) {
    this.y += 4
    this.ensure(18)
    this.style(9, 'bold', COLOR.accent)
    this.doc.setCharSpace(0.6)
    this.doc.text(title.toUpperCase(), PAGE.margin, this.y + 3)
    this.doc.setCharSpace(0)
    this.y += 5
    this.doc.setDrawColor(...COLOR.rule)
    this.doc.setLineWidth(0.2)
    this.doc.line(PAGE.margin, this.y, PAGE.width - PAGE.margin, this.y)
    this.y += 4
  }

  /** Linha de título de item + texto à direita (período/ano). */
  itemTitle(title: string, right?: string) {
    const lh = this.lineHeight(10.5)
    this.ensure(lh + 6)
    if (right) {
      this.style(8.5, 'normal', COLOR.subtle)
      this.doc.text(right, PAGE.width - PAGE.margin, this.y + lh * 0.75, { align: 'right' })
    }
    this.style(10.5, 'bold', COLOR.text)
    const maxWidth = CONTENT_WIDTH - (right ? this.doc.getTextWidth(right) + 30 : 0)
    const [first] = this.doc.splitTextToSize(title, maxWidth) as string[]
    this.doc.text(first, PAGE.margin, this.y + lh * 0.75)
    this.y += lh + 0.5
  }
}

function header(w: Writer) {
  const { doc } = w
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.setTextColor(...COLOR.text)
  doc.text(profile.name, PAGE.margin, w.y + 8)
  w.y += 12
  w.text(profile.role, { size: 12, color: COLOR.accent, gapAfter: 2 })

  // Contatos: cidade · e-mail · GitHub · LinkedIn (links clicáveis)
  const { email, github, linkedin } = profile.links
  const items: { label: string; url?: string }[] = [
    { label: profile.location },
    { label: email, url: `mailto:${email}` },
    { label: github.replace('https://', ''), url: github },
    { label: 'LinkedIn', url: linkedin },
  ]
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  let x = PAGE.margin
  const y = w.y + 3
  items.forEach((item, i) => {
    if (i > 0) {
      doc.setTextColor(...COLOR.subtle)
      doc.text('·', x + 1.5, y)
      x += 5
    }
    const [r, g, b] = item.url ? COLOR.text : COLOR.muted
    doc.setTextColor(r, g, b)
    if (item.url) doc.textWithLink(item.label, x, y, { url: item.url })
    else doc.text(item.label, x, y)
    x += doc.getTextWidth(item.label)
  })
  w.y += 7
}

/** Monta o documento. */
export async function generateResume(): Promise<JsPDF> {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  doc.setProperties({
    title: `Currículo — ${profile.name}`,
    author: profile.name,
    subject: profile.role,
    creator: 'Portfólio de Jean Lukas',
  })
  const w = new Writer(doc)

  header(w)

  w.section('Resumo')
  for (const paragraph of profile.about) w.text(paragraph, { size: 10, color: COLOR.muted })
  if (profile.highlight) w.text(profile.highlight, { size: 10, color: COLOR.muted })

  if (experience.length > 0) {
    w.section('Experiência')
    for (const job of experience) {
      w.itemTitle(job.role, job.period)
      w.text(job.organization, { size: 9.5, color: COLOR.accent, gapAfter: 1 })
      if (job.description) w.text(job.description, { size: 9.5, color: COLOR.muted, gapAfter: 3 })
    }
  }

  w.section('Formação')
  for (const item of education) {
    w.itemTitle(item.title, item.period)
    w.text(item.institution, { size: 9.5, color: COLOR.muted, gapAfter: 2.5 })
  }

  w.section('Projetos em destaque')
  for (const project of projects.filter((p) => p.featured)) {
    w.itemTitle(project.title, project.year?.toString())
    w.text(project.summary, { size: 9.5, color: COLOR.muted, gapAfter: 0.8 })
    w.text(project.tech.map(techName).join(' · '), { size: 8.5, color: COLOR.subtle, gapAfter: 0.8 })
    const url = project.liveUrl ?? project.repoUrl
    if (url) w.link(url.replace('https://', ''), url)
    w.y += 1.5
  }
  const others = projects.filter((p) => !p.featured)
  if (others.length > 0) {
    w.labeled('Outros projetos', `${others.map((p) => p.title).join(', ')}.`)
    w.link(`Todos os projetos: ${profile.links.github.replace('https://', '')}`, profile.links.github)
  }

  w.section('Competências técnicas')
  const byCategory = new Map<TechCategory, string[]>()
  for (const tech of technologies) {
    byCategory.set(tech.category, [...(byCategory.get(tech.category) ?? []), tech.name])
  }
  // Ordem fixa das categorias (a de categoryLabels), não a ordem de technologies.ts.
  for (const category of Object.keys(categoryLabels) as TechCategory[]) {
    const names = byCategory.get(category)
    if (names) w.labeled(categoryLabels[category], names.join(', '))
  }
  if (profile.differentials?.length) w.labeled('Boas práticas', profile.differentials.join(', '))

  w.section('Idiomas')
  for (const lang of languages) w.labeled(lang.name, lang.level)

  // Rodapé com numeração
  const pages = doc.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(...COLOR.subtle)
    doc.text(`${profile.name} · Currículo`, PAGE.margin, PAGE.height - 8)
    doc.text(`${i}/${pages}`, PAGE.width - PAGE.margin, PAGE.height - 8, { align: 'right' })
  }

  return doc
}

/** Baixa o PDF. */
export async function downloadResume() {
  const doc = await generateResume()
  doc.save(RESUME_FILENAME)
}

/**
 * Mostra o PDF numa aba que quem chama abriu **dentro do clique** (`window.open('', '_blank')`
 * antes de qualquer `await`; senão navegadores como o Safari bloqueiam). Aba bloqueada (null) → baixa o PDF.
 * Retorna 'view' ou 'download' conforme o que aconteceu.
 */
export async function viewResume(tab: Window | null): Promise<'view' | 'download'> {
  try {
    const doc = await generateResume()
    if (!tab) {
      doc.save(RESUME_FILENAME)
      return 'download'
    }
    const url = URL.createObjectURL(doc.output('blob'))
    tab.location.href = url
    // Revoga depois que a aba carregou (o PDF já foi lido pelo visualizador).
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
    return 'view'
  } catch (error) {
    tab?.close()
    throw error
  }
}

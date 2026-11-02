# Etapa 3: Dados + assets
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Copiar os assets do site antigo e criar a camada de conteúdo tipada (`src/types`, `src/data`) com dados reais.

## Arquivos criados/alterados
- `src/assets/icons/`: 14 SVGs copiados do site antigo + 6 baixados do Simple Icons 16.36.0 (CC0): javascript, typescript, react, tailwindcss, vite, sqlalchemy. Todos monocromáticos (formato Simple Icons).
- `src/assets/images/profile.jpeg` (foto real) e `src/assets/images/projects/{biblioteca,landing-page,films-crud}/`: 8 imagens com nomes limpos.
- `src/types/content.ts`: tipos `Profile`, `Technology` (com `color`), `Service`, `Project`, `ProjectImage`, `Education`, `Experience`, `Language`, `NavItem`.
- `src/data/profile.ts`: nome, cargo, local, bio, frases da digitação, Sobre, Boas práticas, texto de contato, links.
- `src/data/navigation.ts`: itens da nav + CTA Contato.
- `src/data/services.ts`: 4 serviços confirmados.
- `src/data/technologies.ts`: 20 tecnologias (summary = card, details = dialog, ambos citando onde foram usadas), `techById`, `orbitTechIds` (8), `marqueeTechIds`.
- `src/data/projects.ts`: 13 projetos (4 `featured`), `year` = criação do repo, `projectFilters` derivado (só categorias com projetos).
- `src/data/education.ts`: faculdade + 3 cursos + idiomas.
- `src/data/experience.ts`: Desenvolvedor Full-Stack · Prefeitura de Saquarema (Colégio Ismênia) · jun–ago/2026.

## Decisões
- Ícones coloridos via máscara CSS + `color` da marca (será o componente `TechIcon` na Etapa 4/7). Ajustes de cor: GitHub `#FAFAFA` (o oficial some no fundo escuro), CSS3 `#1572B6` (o SVG é o logo antigo), SQL `#C8C8C8` (sem marca).
- lucide-react 1.x **não tem** ícones de GitHub/LinkedIn → usar os SVG paths inline do site antigo (Etapa 4).
- `tech` aceita ids ou rótulos livres; a UI renderiza o nome da tecnologia se o id existir, senão o próprio rótulo.
- "Portfólio 2.0" ainda sem imagem: tirar um screenshot do site pronto na Etapa 11 e usar como capa.
- Demais decisões de conteúdo: ver `decisoes.md` (2026-11-02).

## Verificação
- `tsc -b` ok · `npm run lint` 0 avisos.
- grep em `src/` por termos do mock e por dados privados (telefone, CEP, nascimento, estado civil): 0 ocorrências em texto.
- Todos os 20 ícones e as 8 imagens estão importados nos dados.
- Repo antigo inalterado (`git status` lá mostra só a alteração que já existia).

## Pendências para a próxima etapa
- Etapa 4: layout (Header, NavPill, MobileMenu, ScrollProgress, Footer, ícones GitHub/LinkedIn) e substituir a página de amostra do `App.tsx`.

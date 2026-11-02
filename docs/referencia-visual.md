# Referência visual: Base44 "Nexus Portfolio"

Arquivos de referência (fora do repo):
- Screenshots: `C:\Users\lukas\OneDrive\Imagens\Screenshots\Captura de tela 2026-11-02 1425{11,24,33,41,49}.png`, `...142600.png`, `...142606.png`
- Vídeos: `C:\Users\lukas\Videos\Captures\Nexus Portfolio _ Base44 - Opera 2026-11-02 14-22-41.mp4` (48 MB, principal) e `... 14-21-51.mp4` (4 MB). ⚠️ **Não estão mais nessa pasta** (verificado em 2026-11-02); restam só mosaicos de frames de baixa resolução num scratchpad temporário. Para detalhes finos de hover, pedir os vídeos de novo ao usuário.

## Tokens observados (screenshots, aproximados)
- Fundo ~`#0e0e0e`; superfícies/cards ~`#151515`; bordas `white/8%`; texto branco, secundário cinza ~`#a3a3a3`, terciário ~`#6b6b6b` (no nosso CSS, `--subtle` = `#858585` para atingir contraste AA; ver `decisoes.md`).
- Sem cor de destaque. Exceções: ícones de marca coloridos, ícones dos serviços (azul, roxo, verde, amarelo, vermelho, ciano) e um brilho radial azul-petróleo sutil (atrás do orbit, no card LinkedIn e no canto superior esquerdo).
- Raios: cards ~16 px, botões e nav em pill.
- Tipografia: sans com tracking negativo nos títulos; mono em caixa alta com tracking largo para eyebrows (`01 — SOBRE`), chips, tags, anos e rodapé. Famílias: ver "Fontes" abaixo (🔶 hipótese).
- Container ~1216 px de largura útil (de ~343 px a ~1558 px numa tela de 1910 px).

## Seções (ordem)
1. **Header** (fixo): logo círculo branco "JL" + "Jean Lukas"; nav central em pill (Sobre, Serviços, Tecnologias, Projetos) com o item ativo como pill branco; CTA "Contato" em pill branco; borda inferior com **linha de progresso de scroll** (gradiente).
2. **Hero** (142511): eyebrow mono "OLÁ, EU SOU O"; nome ~96 px; linha `> ▍` (digitação); parágrafo; botões "Ver projetos ↘" (sólido branco) e "Baixar CV" (outline com ícone); ícones GitHub/LinkedIn em círculos + localização mono. À direita, **orbit**: foto circular, anel interno sólido e externo tracejado, pontos orbitando, chips mono de tecnologias, chip ativo em branco e legenda abaixo (nome mono + descrição). Indicador de scroll (mouse) no rodapé do hero.
3. **01 — Sobre** (142524): 2 colunas. Esquerda: eyebrow, "Sobre mim", subtítulo. Direita: nome, bio, "POSSO TE AJUDAR SE VOCÊ PRECISA DE:" (lista em 2 colunas com bullets), frase de destaque, "Diferenciais" (pills), botão "VISUALIZAR CURRÍCULO" + linha decorativa.
4. **02 — Serviços** (142533): título centralizado + subtítulo; grid 3×2 de cards (ícone lucide colorido num quadrado com borda, título, descrição).
5. **Marquee**: faixa com bordas, tecnologias em mono separadas por "•", fade nas pontas, rolagem infinita.
6. **03 — Tecnologias** (142541): título centralizado ("Minhas tecnologias", "…clique para ver detalhes"); grid de 4 colunas; card com ícone de marca, nome, categoria mono (FRONT-END, BACK-END, FULL-STACK, DEVOPS, TESTES), descrição, "Ver detalhes ›".
7. **04 — Projetos** (142549): título à esquerda, texto à direita ("Abra um projeto para ver o contexto…"); grid de 3 colunas; card com imagem, ano mono sobreposto, título, descrição, tags mono em pill.
8. **05 — LinkedIn** (142600): card grande com brilho; esquerda eyebrow, título "Veja meu perfil profissional", texto, CTA "Conectar no LinkedIn ↗"; direita, mini-card de perfil (avatar JL, nome, cargo, 3 bullets).
9. **06 — Contato** (142606): título gigante em 2 linhas ("Vamos criar" branco / "juntos?" cinza), texto, "Enviar e-mail" (sólido) e "Copiar e-mail" (outline).
10. **Footer**: copyright mono + local; 3 ícones circulares (GitHub, LinkedIn, e-mail); "VOLTAR AO TOPO ↑".

## Animações e interações (analisadas do vídeo, Etapa 0)
Frames extraídos com ffmpeg (1 fps, mosaicos 3×3) dos dois vídeos. O vídeo curto (16 s) só mostra o hero; o principal (119 s) percorre a página inteira.

- **Fontes (🔶 hipótese, ver `decisoes.md`):** sans **Inter**; mono **JetBrains Mono** (indício: zero com ponto, "2026" parece "2826"). Mono sempre em caixa alta com tracking largo (~0,3em). Confirmar lado a lado na Etapa 2.
- **Digitação do hero:** linha `> ` + texto em mono + cursor `▍` piscando. Digita, pausa, apaga e passa para a próxima frase, em ciclo. As frases do mock ("Desenvolvedor Full-Stack", "Backend com Python", "APIs & Sistemas Web") serão trocadas pelas reais do site antigo.
- **Orbit:** 2 anéis concêntricos (interno sólido e fino, externo tracejado) com um ponto em cada anel, girando devagar. Brilho radial azul-petróleo atrás da foto. Os chips ficam fixos (posições espalhadas em volta). **O chip ativo alterna sozinho** (~2-3 s cada): fica branco e a legenda abaixo do orbit mostra NOME (mono) + descrição curta. Sem chip ativo, a legenda mostra a dica mono "PASSE O MOUSE PARA PAUSAR · TOQUE EM UMA TECNOLOGIA". Hover pausa o ciclo; clique/toque seleciona o chip.
- **Scroll do hero:** ao rolar, o conteúdo do hero sobe e esmaece (opacidade cai, leve parallax).
- **Indicador de scroll:** cápsula (mouse) com um ponto descendo em loop, centralizada no fim do hero.
- **Header:** fixo, fundo escuro, borda inferior. Linha de progresso de scroll (gradiente azul-petróleo → transparente) cresce da esquerda sobre a borda. O pill ativo da nav muda conforme a seção visível (mudança suave). No mock o item ativo inicial é "Tecnologias", um bug do mock: usaremos a seção real visível.
- **Reveal das seções:** fade + leve deslocamento vertical ao entrar na viewport.
- **Fundo:** manchas radiais muito sutis que mudam de posição entre os frames. Parece um spotlight que segue o cursor (baixa intensidade). Implementado como feixe com rastro que segue o cursor (parado em touch); roda mesmo com reduced-motion (ver `decisoes.md`).
- **Cards (serviços, tecnologias):** no hover, fundo um pouco mais claro e borda mais visível (sem mudança de tamanho perceptível).
- **Marquee:** rolagem contínua e lenta da direita para a esquerda, fade nas bordas.
- **Dialog de tecnologia:** modal pequeno (~450 px) centralizado, overlay escuro. Ícone grande + nome + categoria mono, descrição longa (2-4 linhas), botão X no canto. O título da seção diz "clique para ver detalhes".
- **Cards de projeto:** no hover, o card sobe levemente, a borda clareia e aparece um botão circular "↗" no canto superior direito da imagem. Clique abre o dialog.
- **Dialog de projeto:** modal (~670 px), imagem no topo (largura total, ~260 px de altura), ano mono, título, descrição longa, bullets de destaques, tags mono, X circular no canto. No nosso caso a imagem vira **galeria com miniaturas** (funcionalidade antiga) e haverá links GitHub/online.
- **LinkedIn card:** o mini-card do perfil clareia no hover.
- **Contato:** "Vamos criar" branco + "juntos?" cinza; botões com hover leve. A animação de "Copiar e-mail" não aparece no vídeo; usaremos um toast discreto (sonner) + troca do ícone para ✓.
- **Footer:** "VOLTAR AO TOPO ↑" clareia no hover; ao clicar, rolagem suave até o topo.
- **Não visto no vídeo (decisões nossas, conservadoras):** menu mobile (usar Sheet com os mesmos itens), layout em telas pequenas (empilhar colunas; orbit menor abaixo do texto), ação de "Visualizar currículo" (abrir o PDF gerado em nova aba).

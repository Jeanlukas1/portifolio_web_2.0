# Etapa 10: Currículo PDF (jsPDF)
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Gerar o currículo em PDF no navegador a partir de `src/data` (substitui o PDF estático do site antigo) e ligar "Baixar CV" (hero) e "Visualizar currículo" (Sobre).

## Arquivos criados/alterados
- `src/lib/resume/generateResume.ts`: monta o A4 com jsPDF (Helvetica): cabeçalho (nome, cargo, cidade · e-mail · GitHub · LinkedIn com links), Resumo, Experiência, Formação, Projetos em destaque (resumo, stack, link) + "Outros projetos", Competências técnicas por categoria (ordem fixa), Boas práticas, Idiomas, rodapé "n/total". Classe `Writer` interna: cursor, quebra de página e blocos (texto, bullet, rótulo: valor, link, título de seção). Exporta `downloadResume()` e `viewResume(tab)`.
- `src/hooks/useResume.ts`: `download` e `view` com toasts (sucesso/erro/aba bloqueada); importa o gerador por `import()` no clique; `view` abre a aba antes de qualquer `await`.
- `src/App.tsx`: passa `resume.download` ao Hero e `resume.view` ao About (botões deixam de ficar desabilitados).

## Decisões
Ver `decisoes.md` (2026-11-02): seções do CV, Helvetica padrão, aba aberta no clique.

## Comandos relevantes
- PyMuPDF instalado só no scratchpad (`pip install --target <scratchpad>/pylib pymupdf`) para extrair o texto e renderizar as páginas do PDF baixado pelo Playwright. Rodar com `PYTHONIOENCODING=utf-8` (o console do Windows deforma os acentos na saída).

## Verificação e resultado
- Build ok; jsPDF e dependências em chunks separados (`jspdf.es.min` 399 kB, `html2canvas` 199 kB etc.) carregados só no clique; bundle inicial inalterado (560 kB / gzip 183 kB). oxlint 0 avisos, `tsc` ok.
- Playwright: "Baixar CV" baixa `curriculo-jean-lukas.pdf` + toast "Currículo baixado"; "Visualizar currículo" abre nova aba `blob:`; console sem erros.
- PDF: 2 páginas, 17 kB, metadados com título; acentos, "–" e "·" corretos na extração; 8 links (mailto, GitHub, LinkedIn, projetos); sem telefone, CEP, data de nascimento, estado civil ou endereço.

## Problemas e soluções
- `window.open(..., 'noopener')` sempre retorna `null` → sem `noopener` (URL `blob:` da própria origem).
- Abrir a aba depois do `import()` seria bloqueado no Safari → aba aberta no hook, antes do `await`.
- Spread de união de tuplas de cor (erro TS2556) → desestruturar `[r, g, b]`.
- Competências saíam na ordem de `technologies.ts` ("Ferramentas" logo após "Front-end") → ordem fixa das categorias.

## Pendências para a próxima etapa
- Usuário revisar o PDF (ver `estado.md`).
- Etapa 11: polimento.

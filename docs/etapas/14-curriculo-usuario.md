# Etapa 14: currículo = PDF do usuário
**Status:** concluída   **Data:** 2026-11-02

## Objetivo
Pedido do usuário: usar exatamente o currículo `JeanLukas_Curriculo_Atualizado.pdf` nos botões "Baixar CV" e "Visualizar currículo".

## Decisões do usuário (respostas diretas)
- Servir **exatamente** o PDF, mesmo com telefone, endereço/CEP, data de nascimento e estado civil (avisado de que ficam públicos no site e no histórico do repo).
- Experiência no site: só a atual (Desenvolvedor Full-Stack · Prefeitura de Saquarema). A do PDF (Estagiário de TI / Agente Tecnológico) fica só no PDF.
- Projetos novos do PDF (Barbearia, Consulta Climática): só no PDF.

## Arquivos criados/alterados
- `public/curriculo-jean-lukas.pdf`: cópia byte a byte do PDF (mesmo SHA-256).
- `src/hooks/useResume.ts`: `download` (link com `download="Curriculo-Jean-Lukas.pdf"` + toast) e `view` (`window.open` em nova aba).
- Removidos: `src/lib/resume/generateResume.ts` e a dependência `jspdf` (sai também html2canvas/purify do build).
- Textos que citavam jsPDF corrigidos: descrição e destaque do projeto Portfólio 2.0 (`projects.ts`), `README.md`, `CLAUDE.md` (stack e exceção na regra de privacidade).

## Verificação
Ver o resultado no commit da etapa (build, lint, download e nova aba no navegador, em produção).

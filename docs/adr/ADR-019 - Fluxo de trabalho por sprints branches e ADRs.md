# ADR-019 - Fluxo de trabalho por sprints, branches e ADRs

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O projeto é individual, mas será desenvolvido como exercício completo de engenharia. É importante manter rastreabilidade sem introduzir ferramentas pesadas de gestão.

## Decisão

Utilizar:

- Bullet Journal para acompanhamento diário da sprint.
- Documentos versionados no repositório para objetivo, critérios de sucesso, tarefas e resultados.
- Uma branch por sprint.
- Pull Request para revisão antes do merge na main.
- ADRs para decisões arquiteturais relevantes.
- Backlog e dívida técnica separados das tarefas da sprint atual.

## Estrutura de sprint

- Título.
- Objetivo orientado a resultado.
- Critério de sucesso verificável.
- Escopo e tarefas.
- Testes e documentação necessários.
- Bloqueios e decisões.
- Resultado e aprendizados.

## Primeira sprint após a migração

Validar o fluxo completo de criação e persistência de Quote:

```text
POST /api/v1/quotes -> rota -> caso de uso -> entidade -> repositório -> PostgreSQL
```

## Motivos

- Preservar a história de evolução do projeto.
- Praticar Git, revisão e integração contínua.
- Evitar interrupção da entrega por melhorias não bloqueantes.

## Consequências

- Branches longas aumentam risco de divergência, portanto as sprints devem ser pequenas.
- Itens que não bloqueiam o objetivo irão para backlog ou dívida técnica.
- Uma sprint só será encerrada quando o critério de sucesso estiver demonstrado.

## Critério de revisão

Migrar para GitHub Projects ou outra ferramenta somente quando o volume de trabalho justificar.

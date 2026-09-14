# ADR-016 - Pipeline de conteúdo futuro

**Data:** 2026-09-14  
**Status:** Planejado

## Contexto

O MVP poderá começar com conteúdo inserido e revisado manualmente. Em uma etapa posterior, o produto deverá adquirir, classificar, enriquecer e validar frases e informações sobre autores com apoio de fontes externas e IA.

## Decisão

Preparar o domínio Content para receber dados de um pipeline futuro, sem implementar o pipeline na primeira entrega. O pipeline será separado em etapas explícitas e não publicará conteúdo automaticamente sem validação definida.

## Etapas planejadas

```text
Aquisição -> Normalização -> Enriquecimento -> Validação -> Revisão -> Persistência/Publicação
```

## Responsabilidades

- Identificar a fonte e preservar proveniência.
- Normalizar autores, tópicos, subtópicos e datas.
- Detectar duplicidade.
- Enriquecer biografia e macrocontexto.
- Validar atribuição e coerência histórica.
- Submeter conteúdos ao fluxo de aprovação.

## Motivos

- Reduzir trabalho manual futuro.
- Usar Python no processamento de dados e integrações de IA.
- Impedir que geração e publicação sejam tratadas como a mesma operação.

## Consequências

- Novos estados ou metadados de revisão poderão ser necessários.
- Custos, direitos de uso, qualidade das fontes e alucinações de IA deverão ser tratados antes da automação.
- O pipeline poderá inicialmente executar como job no mesmo repositório, sem se tornar microsserviço.

## Critério de revisão

Definir a implementação somente após o fluxo manual de criação e aprovação estar estável.

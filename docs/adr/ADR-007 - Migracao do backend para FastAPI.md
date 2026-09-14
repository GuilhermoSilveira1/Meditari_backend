# ADR-007 - Migração do backend para FastAPI

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O backend foi inicialmente planejado e parcialmente estruturado com NestJS e TypeScript. Durante a evolução do projeto, foi identificado que Python possui maior aderência à experiência atual de desenvolvimento, ao futuro pipeline de dados e às integrações de IA planejadas para o Meditari.

## Decisão

Migrar o backend de NestJS para FastAPI, mantendo as regras de domínio, os bounded contexts, os casos de uso, os contratos dos repositórios e as decisões arquiteturais independentes de framework.

## Motivos

- Maior familiaridade e produtividade com Python.
- Integração natural com futuros processos de ETL, validação e enriquecimento de conteúdo.
- Simplicidade para criação de APIs tipadas e assíncronas.
- Documentação OpenAPI disponibilizada pelo FastAPI.
- Redução do tempo necessário para alcançar o MVP.

## Alternativas consideradas

- Permanecer com NestJS e TypeScript.
- Reimplementar o backend em Django com Django REST Framework.

## Consequências

### Positivas

- Desenvolvimento inicial mais rápido.
- Menor curva de aprendizado no backend.
- Melhor alinhamento com o futuro pipeline de dados e IA.

### Negativas

- Reescrita do código já iniciado em TypeScript.
- Necessidade de escolher novas bibliotecas para ORM, migrations, testes e injeção de dependências.
- Necessidade de preservar no novo código os limites arquiteturais que antes eram apoiados pela estrutura do NestJS.

## Critério de revisão

Revisar caso o FastAPI passe a limitar requisitos relevantes do produto ou aumente significativamente a complexidade operacional.

# ADR-009 - DDD leve e bounded contexts

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O produto possui regras próprias de conteúdo, entrega diária, preferências e futura ingestão de dados. O projeto deve preservar uma linguagem clara e impedir que regras de negócio fiquem espalhadas entre rotas, banco e interfaces.

## Decisão

Aplicar DDD de forma pragmática, utilizando linguagem ubíqua, entidades, regras de domínio, contratos de repositório e bounded contexts, sem exigir todos os padrões táticos de DDD em todos os módulos.

## Bounded contexts iniciais

### Content

Gerencia Quote, Author, Topic e Subtopic, incluindo criação, edição, aprovação e classificação do conteúdo.

### Delivery

Gerencia InstallationId, QuoteDelivery, entrega diária, histórico e controle de repetição.

### Preferences

Representa os interesses escolhidos no aplicativo e enviados ao backend para personalização.

### Content Pipeline

Contexto futuro para aquisição, validação, enriquecimento e persistência de conteúdo.

## Motivos

- Proteger regras do domínio contra detalhes de infraestrutura.
- Criar vocabulário consistente entre documentação e código.
- Permitir evolução independente dos módulos.
- Evitar DDD cerimonial onde um modelo simples for suficiente.

## Consequências

- Maior quantidade de arquivos e contratos.
- Necessidade de documentar a comunicação entre contextos.
- As entidades não devem depender de FastAPI, ORM ou banco de dados.

## Critério de revisão

Simplificar abstrações que não protejam uma regra real ou que apenas repassem dados sem agregar clareza.

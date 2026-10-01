# ADR-011 - PostgreSQL e persistência relacional

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

Quotes, autores, tópicos, subtópicos e entregas possuem relacionamentos claros e exigem consistência. O histórico de entregas será utilizado para limitar a distribuição diária e evitar repetição.

## Decisão

Utilizar PostgreSQL como banco principal do backend e migrations versionadas como parte do repositório.

## Modelo inicial

- Quote referencia Author, Topic e opcionalmente Subtopic.
- Subtopic pertence a Topic.
- QuoteDelivery referencia Quote e InstallationId.
- IDs serão UUID.
- Datas de criação e atualização serão registradas quando relevantes.

## Motivos

- Integridade referencial.
- Transações para seleção e registro da entrega.
- Consultas adequadas para histórico e filtragem.
- Compatibilidade futura com busca vetorial por meio de extensão, caso seja necessário.

## Alternativas consideradas

- SQLite como banco principal do backend.
- Banco de documentos.

## Consequências

- Será necessário configurar conexão, migrations e ambiente de desenvolvimento.
- Índices deverão ser definidos conforme as consultas reais.
- O ORM ou toolkit de persistência ainda deverá ser decidido na implementação FastAPI.

## Critério de revisão

Reavaliar apenas se os requisitos de armazenamento deixarem de ser predominantemente relacionais.

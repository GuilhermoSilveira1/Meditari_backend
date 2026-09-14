# Índice de ADRs complementares do Meditari

Este pacote começa no ADR-007 e foi elaborado para complementar os ADRs 001 a 006 já existentes no projeto.

## Arquivos

- ADR-007 - Migração do backend para FastAPI
- ADR-008 - Monólito modular
- ADR-009 - DDD leve e bounded contexts
- ADR-010 - Casos de uso e Repository Pattern
- ADR-011 - PostgreSQL e persistência relacional
- ADR-012 - Contrato REST, OpenAPI e versionamento
- ADR-013 - Identificação por InstallationId sem autenticação
- ADR-014 - Preferências locais e envio sob demanda
- ADR-015 - Regras de entrega diária e não repetição
- ADR-016 - Pipeline de conteúdo futuro
- ADR-017 - Estratégia de testes automatizados
- ADR-018 - Repositórios separados por aplicação
- ADR-019 - Fluxo de trabalho por sprints, branches e ADRs

## Pontos que ainda exigem decisão de implementação

1. ORM ou toolkit de persistência para FastAPI.
2. Responsável pela geração do InstallationId: mobile ou backend.
3. Regra quando todas as frases elegíveis já tiverem sido entregues.
4. Definição de dia e fuso horário para a entrega diária.
5. Formato padronizado de erros da API.
6. Estratégia de CI/CD e ambientes.

Esses pontos devem originar novos ADRs quando as alternativas forem avaliadas e uma decisão for tomada.

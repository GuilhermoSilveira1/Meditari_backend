# ADR-017 - Estratégia de testes automatizados

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O projeto pretende consolidar práticas de engenharia, proteger regras de domínio e permitir evolução segura durante e após a migração para FastAPI.

## Decisão

Adotar testes em camadas, priorizando regras críticas e casos de uso antes de ampliar cobertura.

## Estratégia

### Testes unitários

- Entidades e transições de estado.
- Casos de uso com repositórios em memória.
- Regras de seleção, entrega diária e não repetição.

### Testes de integração

- Implementações de repositório.
- Mapeamento entre domínio e persistência.
- Restrições e transações no PostgreSQL.

### Testes de API

- Contratos dos endpoints FastAPI.
- Status HTTP, validação e respostas de erro.
- Fluxos principais do MVP.

## Motivos

- Rápido feedback sobre regras do domínio.
- Menor dependência do banco nos testes unitários.
- Segurança para refatorar a infraestrutura.

## Consequências

- Testes e fixtures farão parte da definição de concluído das sprints.
- O banco de integração deverá ser isolado.
- A cobertura numérica não substituirá testes orientados a comportamento.

## Critério de revisão

Ampliar testes end-to-end e de desempenho conforme o mobile, o painel administrativo e o pipeline forem integrados.

# ADR-012 - Contrato REST, OpenAPI e versionamento

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O backend será consumido por um aplicativo mobile e por um painel administrativo mantidos em repositórios independentes. É necessário reduzir divergências entre clientes e backend.

## Decisão

Expor uma API REST com contratos tipados e documentação OpenAPI gerada pelo FastAPI. A versão pública será identificada no caminho da API.

## Convenções iniciais

```text
/api/v1/quotes
/api/v1/daily-quote
/api/v1/installations
```

- DTOs de entrada e saída serão explícitos.
- Erros terão formato consistente.
- Alterações compatíveis serão feitas dentro da mesma versão.
- Mudanças incompatíveis exigirão uma nova versão.
- A documentação OpenAPI será revisada junto às alterações dos endpoints.

## Draft de endpoints

- `POST /api/v1/quotes`: cria uma frase no contexto administrativo.
- `GET /api/v1/daily-quote`: retorna a entrega diária da instalação.
- `POST /api/v1/installations`: registra uma instalação, se o UUID for emitido pelo backend.

## Alternativas consideradas

- GraphQL.
- API sem versionamento explícito.
- Contratos documentados manualmente sem OpenAPI.

## Consequências

- Os clientes poderão gerar tipos ou SDKs a partir do contrato.
- Mudanças incompatíveis exigirão manutenção temporária de versões.
- O contrato deverá representar a API, e não diretamente as tabelas do banco.

## Critério de revisão

Reavaliar a estratégia de versionamento quando existir mais de uma versão publicada ou exigência de compatibilidade prolongada.

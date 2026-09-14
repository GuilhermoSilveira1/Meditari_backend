# ADR-018 - Repositórios separados por aplicação

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O produto será composto por backend, painel administrativo web e aplicativo mobile. A intenção é praticar ciclos independentes de desenvolvimento, testes e deploy.

## Decisão

Manter repositórios Git separados para:

- Backend FastAPI.
- Painel administrativo web.
- Aplicativo mobile.

## Motivos

- Limites claros de responsabilidade.
- Pipelines independentes.
- Versionamento e deploy por aplicação.
- Experiência próxima à organização de produtos com clientes distintos.

## Consequências

- Tipos não serão compartilhados diretamente por código-fonte.
- O contrato OpenAPI será a principal integração entre backend e clientes.
- Mudanças de contrato exigirão coordenação entre repositórios.
- Dependências e automações serão mantidas separadamente.

## Critério de revisão

Reavaliar somente se o custo de sincronização superar o benefício educacional e operacional da separação.

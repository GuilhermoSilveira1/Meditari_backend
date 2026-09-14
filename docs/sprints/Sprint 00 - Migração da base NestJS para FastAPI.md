## Objetivo

Estabelecer a nova base FastAPI preservando o domínio e as decisões arquiteturais do Meditari.

## Critérios de sucesso
NestJS preservado em archive/nestjs.
Migração isolada em migration/fastapi.
Aplicação FastAPI responde em /health.
OpenAPI disponível em /docs.
Entidade Quote migrada.
Testes da entidade Quote executando.
Estrutura modular criada.
README atualizado.

## Tarefas
[x] Criar e publicar archive/nestjs
[x] Criar e publicar migration/fastapi
[x] Preservar schema Prisma como referência
[x] Remover arquivos específicos do NestJS
[x] Criar pyproject.toml
[x] Criar estrutura app/
[ ] Criar endpoint /health
[ ] Migrar Quote para Python
[ ] Migrar testes de Quote
[ ] Atualizar README
[ ] Validar localmente no computador pessoal
[ ] Abrir Pull Request da migração
# ADR-005

Data: 2026-09-06

Decisão:
Separar o sistema em camadas bem definidas

Motivo:
Facilitar o desenvolvimento do sistema. As camadas serão:

Controller (entrada)
↓
Use Cases (regras de negócio)
↓
Domain (entidades)
↓
Infra (DB, API, etc)

Consequência:
Maior número de arquivos, aumentando a necessidade de organização do projeto
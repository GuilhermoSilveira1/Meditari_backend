# ADR-006

Data: 2026-09-06

Decisão:
Padronizar as camadas de organização do sistema.

Motivo:
Criar um padrão de desenvolvimento de módulos

modulo/
├── application/     ← use cases, dtos
├── domain/          ← entidades
├── infrastructure/  ← prisma, db
├── presentation/    ← controller

Consequência:
Maior controle sobre a criação padronizada dos modulos
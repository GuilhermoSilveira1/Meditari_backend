# ADR-010 - Casos de uso e Repository Pattern

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

As rotas HTTP não devem conter regras de negócio nem depender diretamente dos detalhes do banco. Também é necessário testar os fluxos principais sem obrigatoriamente acessar PostgreSQL.

## Decisão

Organizar comportamentos da aplicação em casos de uso e acessar persistência por contratos de repositório definidos próximos ao domínio. As implementações concretas permanecerão na infraestrutura.

## Fluxo padrão

```text
Rota -> Caso de uso -> Entidade/Regra de domínio -> Repositório -> Banco
```

## Responsabilidades

- **Rota:** receber a requisição, validar o formato e mapear a resposta HTTP.
- **Caso de uso:** orquestrar um objetivo da aplicação.
- **Domínio:** garantir invariantes e comportamentos.
- **Contrato de repositório:** declarar as operações de persistência necessárias.
- **Implementação de repositório:** traduzir entre domínio e banco.

## Casos de uso iniciais

- CreateQuote.
- ApproveQuote.
- GetDailyQuote.
- RegisterInstallation, caso a criação do InstallationId permaneça no backend.

## Alternativas consideradas

- Rotas acessando o ORM diretamente.
- Services genéricos com múltiplas responsabilidades.

## Consequências

- Casos de uso podem ser testados com repositórios em memória.
- Alterações no ORM ficam isoladas na infraestrutura.
- Haverá mapeamento explícito entre modelos do domínio e persistência.

## Critério de revisão

Evitar criar um caso de uso ou repositório genérico sem um fluxo ou necessidade concreta.

# ADR-008 - Monólito modular

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O Meditari possui domínios distintos, mas será desenvolvido inicialmente por uma única pessoa e terá um MVP com baixo volume operacional. Microsserviços adicionariam comunicação distribuída, observabilidade, infraestrutura e deploys independentes antes de existir necessidade real.

## Decisão

Implementar o backend como um monólito modular, com aplicação e deploy únicos, mantendo limites explícitos entre os módulos do domínio.

## Motivos

- Menor complexidade de desenvolvimento, testes e deploy.
- Transações e consistência mais simples no MVP.
- Separação suficiente para evolução futura.
- Possibilidade de extrair módulos somente quando houver necessidade comprovada.

## Módulos iniciais

- Content.
- Delivery.
- Preferences.
- Content Pipeline, em uma fase futura.

## Alternativas consideradas

- Microsserviços desde o início.
- Aplicação organizada apenas por camadas técnicas globais.

## Consequências

### Positivas

- Deploy único.
- Desenvolvimento e depuração mais simples.
- Menor custo operacional.

### Negativas

- Exige disciplina para impedir acoplamento entre módulos.
- Falhas podem afetar toda a aplicação.
- Escalabilidade independente por módulo não estará disponível inicialmente.

## Critério de revisão

Considerar extração de serviço quando um módulo apresentar necessidade independente de escala, disponibilidade, segurança, tecnologia ou ciclo de deploy.

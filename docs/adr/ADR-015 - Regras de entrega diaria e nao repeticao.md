# ADR-015 - Regras de entrega diária e não repetição

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O propósito do Meditari é oferecer uma única reflexão diária, sem checklist, feed infinito ou incentivo a atualizações repetidas. A entrega também deve considerar os interesses e evitar repetição prematura.

## Decisão

Centralizar no contexto Delivery a seleção da frase diária e o histórico de entregas por InstallationId.

## Regras iniciais

1. Uma instalação recebe no máximo uma nova frase por dia.
2. Requisições adicionais no mesmo dia retornam a mesma frase.
3. Somente frases aprovadas podem ser selecionadas.
4. A seleção considera os tópicos enviados pelo aplicativo.
5. Frases já entregues à instalação são removidas do conjunto elegível.
6. Ao escolher uma nova frase, o backend cria um QuoteDelivery na mesma operação lógica.
7. A estratégia para esgotamento do conjunto elegível deverá ser definida antes do MVP.

## Entidade QuoteDelivery

A entidade registra, no mínimo:

- id UUID.
- quoteId.
- installationId.
- deliveredAt.

## Concorrência

A implementação deverá impedir que duas solicitações simultâneas gerem entregas diferentes para a mesma instalação e data. Uma restrição única ou transação deverá apoiar essa garantia.

## Alternativas consideradas

- Gerar uma frase nova a cada abertura.
- Controlar o histórico apenas no dispositivo.

## Consequências

- O backend guardará um histórico mínimo por instalação.
- A seleção aleatória deverá ser testável e consistente com as regras.
- A definição de dia e fuso horário precisa ser explícita antes da produção.

## Critério de revisão

Revisar caso o produto adote múltiplas reflexões diárias, feed, horários personalizados ou contas de usuário.

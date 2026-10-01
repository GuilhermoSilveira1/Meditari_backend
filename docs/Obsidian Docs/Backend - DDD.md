## Content
Responsável pela gestão das frases e conteúdos.

### Entidades
- [[Backend - DDD - Quote]]
- [[Backend - DDD - Author]]
- [[Backend - DDD - Topic]]

## Delivery
Responsável pela entrega da frase diária.

- [[Backend - DDD - Seleção da frase]]
- [[Backend - DDD - Controle de repetição]]
- [[Backend - DDD - Distribuição diária]]
- [[Backend - DDD - QuoteDelivery]]

## Content Pipeline (futuro)
Responsável pela ingestão e tratamento de dados.

- Coleta (IA/API externa)
- Validação
- Enriquecimento
- Persistência

### Fluxo de Dados:
Fonte externa / IA -> Validação -> Enriquecimento -> Persistência (Quote + Author + Topic) -> Disponível para Delivery
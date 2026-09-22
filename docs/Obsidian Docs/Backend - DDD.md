## Content
Responsável pela gestão das frases e conteúdos.

- [[Backend - DDD - Quote]]
- [[Backend - DDD - Author]]
- [[Backend - DDD - Topic]]
- [[Backend - DDD - Subtopic]]
- [[Backend - DDD - QuoteDelivery]]

## Preferences
Responsável pelas preferências do usuário.

- [[Backend - DDD - Interests]] (ex: filosofia, disciplina, treino)
- [[Backend - DDD - Perfil de consumo]]

## Delivery
Responsável pela entrega da frase diária.

- [[Backend - DDD - Seleção da frase]]
- [[Backend - DDD - Controle de repetição]]
- [[Backend - DDD - Distribuição diária]]

## Content Pipeline (futuro)
Responsável pela ingestão e tratamento de dados.

- Coleta (IA/API externa)
- Validação
- Enriquecimento
- Persistência

### Fluxo de Dados:
Fonte externa / IA -> Validação -> Enriquecimento -> Persistência (Quote + Author + Topic) -> Disponível para Delivery
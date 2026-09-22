Definição
Objeto que representa uma citação de um author, contendo a citação, o autor e o contexto em que foi escrita

Estrutura
- id
- text
- context
- author_id (FK)
- topic_id (FK)
- subtopic_id (FK)
- status (draft | approved | delivered)
- createdAt
- updatedAt
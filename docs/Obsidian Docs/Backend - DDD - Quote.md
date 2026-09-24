Definição
Objeto que representa uma citação de um author, contendo a citação, o autor e o contexto em que foi escrita

Estrutura
- id
- text
- context
- author_id (FK, opcional)
- topic_id (FK)
- subtopic_id (FK)
- status (draft | approved | delivered)
- createdAt
- updatedAt

Regras
- Uma quote pode existir sem autor conhecido.
- Quando o autor não existir ou for removido, `author_id` deve permanecer `null` na representação da quote.
Quote

- id
- text
- context
- author_id (FK, nullable)
- topic_id (FK)
- status (draft | approved | delivered)
- createdAt
- updatedAt

Author

- id
- name
- biography (nullable)
- birth_year (nullable)
- death_year (nullable)

Topic

- id
- name
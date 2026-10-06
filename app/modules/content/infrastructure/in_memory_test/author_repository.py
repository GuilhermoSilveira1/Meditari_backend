from uuid import UUID

from app.modules.content.domain.entities.author.entity import Author
from app.modules.content.domain.contracts.author.repository import AuthorRepository

class InMemoryAuthorRepository(AuthorRepository):
    def __init__(self) -> None:
        self._authors: dict[UUID, Author] = {}

    def save(self, author: Author) -> Author:
        self._authors[author.id] = author
        return author

    def get_by_id(self, author_id: UUID) -> Author | None:
        return self._authors.get(author_id)
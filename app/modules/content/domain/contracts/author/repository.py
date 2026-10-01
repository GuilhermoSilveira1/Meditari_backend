from abc import ABC, abstractmethod
from uuid import UUID

from app.modules.content.domain.entities.author.entity import Author


class AuthorRepository(ABC):
    @abstractmethod
    def save(self, author: Author) -> Author:
        raise NotImplementedError

    @abstractmethod
    def get_by_id(self, author_id: UUID) -> Author | None:
        raise NotImplementedError
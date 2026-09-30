from abc import ABC, abstractmethod
from uuid import UUID

from app.modules.content.domain.entities.quote.entity import Quote


class QuoteRepository(ABC):
    @abstractmethod
    def save(self, quote: Quote) -> Quote:
        raise NotImplementedError

    @abstractmethod
    def get_by_id(self, quote_id: UUID) -> Quote | None:
        raise NotImplementedError
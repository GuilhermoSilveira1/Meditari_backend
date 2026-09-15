from uuid import UUID

from app.modules.content.domain.entities.quote.entity import Quote
from app.modules.content.domain.repositories.quote.repository import QuoteRepository

class InMemoryQuoteRepository(QuoteRepository):
    def __init__(self) -> None:
        self._quotes: dict[UUID, Quote] = {}

    def save(self, quote: Quote) -> Quote:
        self._quotes[quote.id] = quote
        return quote

    def get_by_id(self, quote_id: UUID) -> Quote | None:
        return self._quotes.get(quote_id)
from app.modules.content.application.schemas.schema import CreateQuoteRequest
from app.modules.content.domain.entities.quote.entity import Quote
from app.modules.content.domain.contracts.quote.repository import QuoteRepository


class CreateQuoteUseCase:
    def __init__(self, repository: QuoteRepository) -> None:
        self.repository = repository

    def execute(self, request: CreateQuoteRequest) -> Quote:
        quote = Quote(
            text=request.text,
            author_id=request.author_id,
            topic_id=request.topic_id,
        )
        return self.repository.save(quote)
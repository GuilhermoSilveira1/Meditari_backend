from app.modules.content.application.schemas.schema import CreateQuoteRequest
from app.modules.content.domain.entities.quote.entity import Quote
from app.modules.content.domain.repositories.quote.repository import QuoteRepository


class CreateQuoteUseCase:
    def __init__(self, repository: QuoteRepository) -> None:
        self.repository = repository

    def execute(self, request: CreateQuoteRequest) -> Quote:
        quote = Quote(
            text=request.text,
            context=request.context,
            author_name=request.author_name,
            topic=request.topic,
        )
        return self.repository.save(quote)
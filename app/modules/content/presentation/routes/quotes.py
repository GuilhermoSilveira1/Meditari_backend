from fastapi import APIRouter

from app.modules.content.application.schemas.schema import CreateQuoteRequest, QuoteResponse
from app.modules.content.application.use_cases.create_quote import CreateQuoteUseCase
from app.modules.content.infrastructure.repositories.quote_repository import InMemoryQuoteRepository


router = APIRouter(prefix="/quotes", tags=["quotes"])
quote_repository = InMemoryQuoteRepository()
create_quote = CreateQuoteUseCase(quote_repository)


@router.post("", response_model=QuoteResponse, status_code=201)
def create_quote_endpoint(request: CreateQuoteRequest) -> QuoteResponse:
    return create_quote.execute(request)
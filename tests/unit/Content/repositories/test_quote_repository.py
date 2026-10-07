import pytest
import uuid

from app.modules.content.domain.entities.quote.entity import Quote, QuoteStatus
from app.modules.content.infrastructure.in_memory_test.quote_repository import InMemoryQuoteRepository


@pytest.mark.unit
def test_repository_returns_none():
    quote = uuid.uuid4()
    repository = InMemoryQuoteRepository()

    assert repository.get_by_id(quote) is None


@pytest.mark.unit
def test_recover_existing_quote():
    quote = Quote(text="Uma frase ")
    repository = InMemoryQuoteRepository()

    saved_quote = repository.save(quote)

    returned_quote = repository.get_by_id(saved_quote.id)

    assert returned_quote is not None
    assert returned_quote.id == quote.id
    assert returned_quote.text == quote.text


@pytest.mark.unit
def test_save_two_quotes():
    quote_one = Quote(text="Frase um ")
    quote_two = Quote(text=" Frase dois ")
    repository = InMemoryQuoteRepository()

    saved_quote_one = repository.save(quote_one)
    saved_quote_two = repository.save(quote_two)
    returned_quote_one = repository.get_by_id(quote_one.id)
    returned_quote_two = repository.get_by_id(quote_two.id)

    assert quote_one.id == saved_quote_one.id
    assert quote_two.id == saved_quote_two.id
    assert returned_quote_one is not None
    assert returned_quote_two is not None
    assert returned_quote_one.id == quote_one.id
    assert returned_quote_two.id == quote_two.id
    assert returned_quote_one.text == quote_one.text
    assert returned_quote_two.text == quote_two.text
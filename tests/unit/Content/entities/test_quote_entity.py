import pytest
import time
import uuid

from app.modules.content.domain.entities.quote.entity import Quote, QuoteStatus
from app.modules.content.infrastructure.in_memory_test.quote_repository import InMemoryQuoteRepository


def test_quote_is_created_with_uuid_and_draft_status() -> None:
    quote = Quote(text="Uma frase qualquer")
    repository = InMemoryQuoteRepository()

    repository.save(quote)
    returned_quote = repository.get_by_id(quote.id)

    assert returned_quote is not None
    assert returned_quote.id == quote.id
    assert returned_quote.text == quote.text


def test_quote_rejects_empty_text() -> None:
    with pytest.raises(ValueError, match="quote text must not be empty"):
        Quote(text="   ")


def test_quote_does_not_approve_twice() -> None:
    quote = Quote(text="  Uma frase.  ")

    assert quote.text == "Uma frase."
    assert quote.status is QuoteStatus.DRAFT
    assert quote.id is not None

    quote.approve()

    with pytest.raises(ValueError, match="Approved quotes cannot be approved again"):
        quote.approve()


def test_quote_update_date() -> None:
    quote = Quote(text="  Uma frase.  ")

    assert quote.text == "Uma frase."
    assert quote.status is QuoteStatus.DRAFT
    assert quote.id is not None

    before_date = quote.updated_at

    time.sleep(1)

    quote.approve()

    after_date = quote.updated_at

    assert after_date > before_date


def test_repository_returns_none():
    quote = uuid.uuid4()
    repository = InMemoryQuoteRepository()

    assert repository.get_by_id(quote) is None


def test_recover_existing_quote():
    quote = Quote(text="Uma frase ")
    repository = InMemoryQuoteRepository()

    saved_quote = repository.save(quote)

    returned_quote = repository.get_by_id(saved_quote.id)

    assert returned_quote is not None
    assert returned_quote.id == quote.id
    assert returned_quote.text == quote.text


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
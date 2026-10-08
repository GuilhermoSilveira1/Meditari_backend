import pytest
import time

from app.modules.content.domain.entities.quote.entity import Quote, QuoteStatus
from app.modules.content.infrastructure.in_memory_test.quote_repository import InMemoryQuoteRepository


@pytest.mark.unit
def test_quote_is_created_with_uuid_and_draft_status() -> None:
    quote = Quote(text="Uma frase qualquer")

    assert quote.id is not None
    assert quote.text == "uma frase qualquer"


@pytest.mark.unit
def test_quote_rejects_empty_text() -> None:
    with pytest.raises(ValueError, match="quote text must not be empty"):
        Quote(text="   ")


@pytest.mark.unit
def test_quote_does_not_approve_twice() -> None:
    quote = Quote(text="  Uma FRASE.  ")

    assert quote.text == "uma frase."
    assert quote.status is QuoteStatus.DRAFT
    assert quote.id is not None

    quote.approve()

    with pytest.raises(ValueError, match="Approved quotes cannot be approved again"):
        quote.approve()


@pytest.mark.unit
def test_quote_update_date() -> None:
    quote = Quote(text="  Uma frase.  ")

    assert quote.text == "uma frase."
    assert quote.status is QuoteStatus.DRAFT
    assert quote.id is not None

    before_date = quote.updated_at

    time.sleep(1)

    quote.approve()

    after_date = quote.updated_at

    assert after_date > before_date


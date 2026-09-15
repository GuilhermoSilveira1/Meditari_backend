import pytest

from app.modules.content.domain.entities.quote.entity import Quote, QuoteStatus


def test_quote_is_created_with_uuid_and_draft_status() -> None:
    quote = Quote(text="  Uma frase.  ", topic="Disciplina")

    assert quote.text == "Uma frase."
    assert quote.topic == "disciplina"
    assert quote.status is QuoteStatus.DRAFT
    assert quote.id is not None


def test_quote_rejects_empty_text() -> None:
    with pytest.raises(ValueError, match="must not be empty"):
        Quote(text="   ")
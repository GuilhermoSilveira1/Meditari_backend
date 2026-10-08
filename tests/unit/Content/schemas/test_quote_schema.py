import pytest

from app.modules.content.application.schemas.schema import CreateQuoteRequest
from app.modules.content.application.schemas.schema import QuoteResponse
from app.modules.content.domain.entities.quote.entity import Quote

from pydantic import ValidationError


# Validating CreateQuoteRequest
@pytest.mark.unit
def test_valid_text():
    create_quote = CreateQuoteRequest(text=" uma FRASE ")

    assert create_quote.text == "uma frase"
    assert create_quote.topic_id is None
    assert create_quote.author_id is None


@pytest.mark.unit
def test_empty_text_is_rejected():
    with pytest.raises(ValidationError):
        CreateQuoteRequest(text="  ")


# Validating QuoteResponse
@pytest.mark.unit
def test_accept_valid_quote():
    quote = Quote(text=" Uma Frase ")

    quote_response = QuoteResponse.model_validate(quote)

    assert quote_response.id == quote.id
    assert quote_response.text == quote.text
    assert quote_response.status == quote.status
    assert quote_response.author_id is None
    assert quote_response.topic_id is None
    assert quote_response.created_at == quote.created_at


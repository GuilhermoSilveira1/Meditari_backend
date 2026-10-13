import pytest
from fastapi import HTTPException

from app.modules.content.application.schemas.schema import CreateQuoteRequest
from app.modules.content.domain.entities.quote.entity import Quote
from app.modules.content.presentation.routes import quotes as quotes_route


@pytest.mark.unit
def test_create_quote_endpoint_calls_use_case(monkeypatch) -> None:
    expected_quote = Quote(text="Uma frase qualquer.")

    class FakeCreateQuote:
        def __init__(self) -> None:
            self.received_request = None

        def execute(self, request: CreateQuoteRequest) -> Quote:
            self.received_request = request
            return expected_quote

    fake_use_case = FakeCreateQuote()

    monkeypatch.setattr(quotes_route, "create_quote", fake_use_case)

    request = CreateQuoteRequest(text="Uma frase qualquer. ")

    result = quotes_route.create_quote_endpoint(request)

    assert fake_use_case.received_request is request
    assert result is expected_quote


@pytest.mark.unit
def test_create_quote_endpoint_returns_bad_request_for_use_case_error(monkeypatch) -> None:
    class FakeCreateQuote:
        def execute(self, request: CreateQuoteRequest) -> Quote:
            raise ValueError("quote could not be created")

    monkeypatch.setattr(quotes_route, "create_quote", FakeCreateQuote())

    request = CreateQuoteRequest(text="Uma frase qualquer.")

    with pytest.raises(HTTPException) as error:
        quotes_route.create_quote_endpoint(request)

    assert error.value.status_code == 400
    assert error.value.detail == "quote could not be created"
import pytest
import uuid

from app.modules.content.application.use_cases.create_quote import CreateQuoteUseCase
from app.modules.content.infrastructure.in_memory_test.quote_repository import InMemoryQuoteRepository
from app.modules.content.application.schemas.schema import CreateQuoteRequest


@pytest.mark.unit
def test_create_quote_with_text():
    repository = InMemoryQuoteRepository()
    use_case = CreateQuoteUseCase(repository)
    request = CreateQuoteRequest(text=" Uma frase ")

    created_quote = use_case.execute(request)

    assert created_quote.text == "uma frase"
    assert created_quote.author_id is None
    assert created_quote.topic_id is None

    
@pytest.mark.unit
def test_create_quote_with_text_author_id_topic_id():
    repository = InMemoryQuoteRepository()
    use_case = CreateQuoteUseCase(repository)
    author_id = uuid.uuid4()
    topic_id = uuid.uuid4()
    request = CreateQuoteRequest(text="Uma frase", author_id=author_id, topic_id=topic_id)

    created_quote = use_case.execute(request)

    assert created_quote.text == "uma frase"
    assert created_quote.author_id == author_id
    assert created_quote.topic_id == topic_id
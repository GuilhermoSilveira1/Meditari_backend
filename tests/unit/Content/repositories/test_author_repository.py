import pytest
import uuid

from app.modules.content.domain.entities.author.entity import Author
from app.modules.content.infrastructure.in_memory_test.author_repository import InMemoryAuthorRepository


@pytest.mark.unit
def test_recover_existing_author():
    author = Author(name="Socrates")
    repository = InMemoryAuthorRepository()

    repository.save(author)
    recovered = repository.get_by_id(author.id)

    assert recovered is not None
    assert recovered.id == author.id
    assert recovered.name == author.name


@pytest.mark.unit
def test_repository_returns_none_for_unknown_id():
    repository = InMemoryAuthorRepository()

    assert repository.get_by_id(uuid.uuid4()) is None
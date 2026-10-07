import pytest
import uuid

from app.modules.content.domain.entities.topic.entity import Topic
from app.modules.content.infrastructure.in_memory_test.topic_repository import InMemoryTopicRepository


@pytest.mark.unit
def test_recover_existing_author():
    topic = Topic(name="Movies")
    repository = InMemoryTopicRepository()

    repository.save(topic)
    recovered = repository.get_by_id(topic.id)

    assert recovered is not None
    assert recovered.id == topic.id
    assert recovered.name == topic.name


@pytest.mark.unit
def test_repository_returns_none_for_unknown_id():
    repository = InMemoryTopicRepository()

    assert repository.get_by_id(uuid.uuid4()) is None
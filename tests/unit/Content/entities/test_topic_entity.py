import pytest

from app.modules.content.domain.entities.topic.entity import Topic


@pytest.mark.unit
def test_create_topic_with_uuid_and_name():
    topic = Topic(name=" Philosophy")

    assert topic.id is not None
    assert topic.name == "philosophy"


@pytest.mark.unit
def test_rejects_empty_name():
    with pytest.raises(ValueError, match="Topic name must not be empty"):
        Topic(name="  ")

@pytest.mark.unit
def test_rename_topic():
    topic = Topic(name=" Technologies ")

    topic.rename(name=" History ")

    assert topic is not None
    assert topic.name == "history"


@pytest.mark.unit
def test_rename_rejects_empty_name():
    with pytest.raises(ValueError, match="Topic name must not be empty"):
        Topic(name="History").rename(name="  ")
        
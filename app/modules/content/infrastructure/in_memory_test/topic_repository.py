from uuid import UUID

from app.modules.content.domain.entities.topic.entity import Topic
from app.modules.content.domain.contracts.topic.repository import TopicRepository

class InMemoryTopicRepository(TopicRepository):
    def __init__(self) -> None:
        self._topics: dict[UUID, Topic] = {}

    def save(self, topic: Topic) -> Topic:
        self._topics[topic.id] = topic
        return topic

    def get_by_id(self, topic_id: UUID) -> Topic | None:
        return self._topics.get(topic_id)
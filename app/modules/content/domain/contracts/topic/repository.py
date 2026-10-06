from abc import ABC, abstractmethod
from uuid import UUID

from app.modules.content.domain.entities.topic.entity import Topic


class TopicRepository(ABC):
    @abstractmethod
    def save(self, topic: Topic) -> Topic:
        raise NotImplementedError

    @abstractmethod
    def get_by_id(self, topic_id: UUID) -> Topic | None:
        raise NotImplementedError
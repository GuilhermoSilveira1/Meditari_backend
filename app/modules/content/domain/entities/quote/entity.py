from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import StrEnum
from uuid import UUID, uuid4


class QuoteStatus(StrEnum):
    DRAFT = "draft"
    APPROVED = "approved"
    DELIVERED = "delivered"


@dataclass(slots=True)
class Quote:
    text: str
    author_id: str| None = None
    topic: str | None = None
    status: QuoteStatus = QuoteStatus.DRAFT
    id: UUID = field(default_factory=uuid4)
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))

    def __post_init__(self) -> None:
        self.text = self.text.strip()
        if not self.text:
            raise ValueError("quote text must not be empty")
        if self.topic is not None:
            self.topic = self.topic.strip().lower()

    def approve(self) -> None:
        self.status = QuoteStatus.APPROVED
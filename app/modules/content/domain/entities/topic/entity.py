from dataclasses import dataclass, field
from datetime import datetime, timezone
from uuid import UUID, uuid4


@dataclass()
class Topic:
    name: str
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    id: UUID = field(default_factory=uuid4)

    def __post_init__(self) -> None:
        self.name = self.name.strip()
        if not self.name:
            raise ValueError("Topic name must not be empty")


    def rename(self, name: str):
        if not name:
            raise ValueError("Topic name must not be empty")

        self.name = name
        self.update()


    def update(self):
        self.updated_at = datetime.now(timezone.utc)


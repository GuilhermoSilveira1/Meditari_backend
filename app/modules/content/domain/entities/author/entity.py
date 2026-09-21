from dataclasses import dataclass, field
from datetime import datetime, timezone
from uuid import UUID, uuid4


@dataclass(slots=True)
class Author:
    name: str
    biography: str | None = None
    birthdate: datetime | None = None
    deathdate: datetime | None = None
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    id: UUID = field(default_factory=uuid4)

    def __post_init__(self) -> None:
        self.name = self.name.strip()
        if not self.name:
            raise ValueError("author name must not be empty")
        if not self.biography:
            raise ValueError("author biography must not be empty")
        if self.biography.__len__() < 5:
            raise ValueError("author biography must have more than 5 letters")


    def update_biography(self, biography: str):
        if not biography:
            raise ValueError("Biography must not be empty")

        self.biography = biography
        self.update()


    def update(self):
        self.updated_at = datetime.now(timezone.utc)
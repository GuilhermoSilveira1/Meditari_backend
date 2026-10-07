from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field

from app.modules.content.domain.entities.quote.entity import QuoteStatus


class CreateQuoteRequest(BaseModel):
	text: str = Field(min_length=1)
	author_id: UUID | None = None
	topic_id: UUID | None = None


class QuoteResponse(BaseModel):
	model_config = ConfigDict(from_attributes=True)

	id: UUID
	text: str
	author_id: UUID | None
	topic_id: UUID | None
	status: QuoteStatus
	created_at: datetime


class CreateAuthorRequest(BaseModel):
	name: str
	biography: str | None = None
	birthdate: datetime | None = None
	deathdate: datetime | None = None


class CreateTopicRequest(BaseModel):
    name: str = Field(min_length=1)


class TopicResponse(BaseModel):
    id: UUID
    name: str

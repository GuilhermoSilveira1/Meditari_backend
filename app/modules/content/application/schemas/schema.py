from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field

from app.modules.content.domain.entities.quote.entity import QuoteStatus


class CreateQuoteRequest(BaseModel):
	text: str = Field(min_length=1)
	context: str | None = None
	author_name: str | None = None
	topic: str | None = None


class QuoteResponse(BaseModel):
	model_config = ConfigDict(from_attributes=True)

	id: UUID
	text: str
	context: str | None
	author_name: str | None
	topic: str | None
	status: QuoteStatus
	created_at: datetime

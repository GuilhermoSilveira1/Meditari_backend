import pytest
from fastapi.testclient import TestClient
import uuid

from app.main import app
from app.modules.content.domain.entities.author.entity import Author
from app.modules.content.domain.entities.topic.entity import Topic


client = TestClient(app)


@pytest.mark.integration
def test_create_quote() -> None:
    response = client.post(
        "/api/v1/quotes",
        json={"text": "A disciplina sustenta a constancia."},
    )

    assert response.status_code == 201
    assert response.json()["text"] == "a disciplina sustenta a constancia."
    assert response.json()["status"] == "draft"


@pytest.mark.integration
def test_create_quote_rejects_empty_text() -> None:
    response = client.post(
        "/api/v1/quotes",
        json={"text": "   "},
    )

    assert response.status_code == 422


@pytest.mark.integration
def test_create_quote_with_author_id_and_topic_id() -> None:
    author_id = uuid.uuid4()
    topic_id = uuid.uuid4()

    response = client.post(
        "/api/v1/quotes",
        json={"text": "A disciplina sustenta a constancia.", "author_id": f"{author_id}", 
              "topic_id": f"{topic_id}"},
    )

    assert response.status_code == 201
    assert response.json()["text"] == "a disciplina sustenta a constancia."
    assert response.json()["status"] == "draft"
    assert response.json()["author_id"] == author_id
    assert response.json()["topic_id"] == topic_id

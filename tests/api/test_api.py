from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_create_quote() -> None:
    response = client.post(
        "/api/v1/quotes",
        json={"text": "A disciplina sustenta a constancia.", "topic": "Disciplina"},
    )

    assert response.status_code == 201
    assert response.json()["text"] == "A disciplina sustenta a constancia."
    assert response.json()["status"] == "draft"
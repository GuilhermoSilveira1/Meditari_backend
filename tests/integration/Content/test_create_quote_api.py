from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)

def test_create_quote() -> None:
    response = client.post(
        "/api/v1/quotes",
        json={"text": "A disciplina sustenta a constancia."},
    )

    assert response.status_code == 201
    assert response.json()["text"] == "A disciplina sustenta a constancia."
    assert response.json()["status"] == "draft"
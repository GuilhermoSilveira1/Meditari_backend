import pytest

from app.modules.content.domain.entities.author.entity import Author


@pytest.mark.unit
def test_create_author_with_uuid_and_name():
    author = Author(name="William Shakespeare")

    assert author.id is not None
    assert author.name == "william shakespeare"
    assert author.biography is None


@pytest.mark.unit
def test_author_rejects_empty_name():
    with pytest.raises(ValueError, match="Author name must not be empty"):
        Author(name="   ")


@pytest.mark.unit
def test_author_rejects_unknown_name():
    with pytest.raises(ValueError, match="Author must have a name different than 'Unknown'"):
        Author(name=" unknown ")


@pytest.mark.unit
def test_update_biography():
    author = Author(name="Napoleão Bonaparte")

    author.update_biography(
        biography="Um general francês que venceu muitas batalhas"
    )

    assert author.biography == "Um general francês que venceu muitas batalhas"


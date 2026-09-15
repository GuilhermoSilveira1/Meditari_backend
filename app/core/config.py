from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
	app_name: str = "Meditari API"
	api_v1_prefix: str = "/api/v1"
	database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/meditari"

	model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()

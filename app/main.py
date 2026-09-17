from fastapi import FastAPI
from app.core.config import settings
from app.modules.content.presentation.routes.quotes import router as quotes_router


app = FastAPI(title=settings.app_name, version="1.0.0")
app.include_router(quotes_router, prefix=settings.api_v1_prefix)


@app.get("/health", tags=["system"])
def health() -> dict[str, str]:
	return {"status": "ok"}
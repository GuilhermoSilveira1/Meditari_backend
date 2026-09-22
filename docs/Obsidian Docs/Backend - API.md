## Retorna a frase diária com base nos interesses.
GET /api/v1/daily-quote Response: 
{
	"quote": "A disciplina é a ponte entre metas e realizações.", 
	"author": { "name": "Jim Rohn", 
	"description": "Empresário e palestrante motivacional" }, 
	"context": "Essa frase reflete a importância da consistência...", 
	"topic": "disciplina", 
	"date": "2026-06-16" 
}

## Define os interesses do usuário.

POST /api/v1/preferences Request: { "topics": ["disciplina", "filosofia"] }

Response: { "success": true }
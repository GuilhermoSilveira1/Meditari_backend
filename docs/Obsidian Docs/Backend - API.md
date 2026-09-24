## Retorna a frase diária com base nos interesses.
GET /api/v1/daily-quote Response: 
{
	"quote": "A disciplina é a ponte entre metas e realizações.", 
	"author": { "name": "Jim Rohn", 
	"biography": "Empresário e palestrante motivacional",
	"birth_year": 1930,
	"death_year": 2009 },
	"context": "Essa frase reflete a importância da consistência...", 
	"topic": "disciplina", 
	"date": "2026-06-16" 
}

Caso a quote não tenha autor conhecido, `author` será `null`. Os anos de nascimento e falecimento também podem ser `null` quando desconhecidos.

## Define os interesses do usuário.

POST /api/v1/preferences Request: { "topics": ["disciplina", "filosofia"] }

Response: { "success": true }
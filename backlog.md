[x] Content - Alinhar o contrato de criacao de Quote: decidir se a requisicao recebe `author_id` ou `author_name` e ajustar schema e entidade para refletirem o modelo documentado.

[x] Content - Corrigir o `CreateQuoteUseCase` para construir uma `Quote` compativel com o contrato do dominio e persistir o resultado pelo `QuoteRepository`.

[x] Content - Fechar e validar a rota `POST /api/v1/quotes`: corrigir a definicao FastAPI, configurar o `response_model`, retornar `201`.

[x] Content - Escrever e executar testes unitarios para as entidades, schemas, casos de uso, repositories e controller de `Quote`.

[] Content - Criar testes de integracao para o caminho feliz de `POST /api/v1/quotes`, incluindo status `201`, normalizacao do texto e status `draft`.

[] Content - Criar testes de integracao para entradas invalidas de `POST /api/v1/quotes`, incluindo texto ausente, texto vazio e UUIDs invalidos.

[] Content - Validar no teste de integracao o contrato completo de resposta de `POST /api/v1/quotes`, incluindo UUID, timestamps, status e campos opcionais.

[x] No `QuoteDelivery`, verificar se o `Quote` pode ser entregue: somente quotes com status `approved` devem ser enviados. A entrega deve ser registrada por usuario no `QuoteDelivery`, e nao como status global `delivered` em `Quote`, pois o mesmo quote pode ser entregue a usuarios diferentes.

[] Ao implementar `QuoteDelivery`, decidir se a entrega consulta os dados atuais de `Author`/`Quote` ou preserva um snapshot imutavel exatamente do conteudo exibido ao usuario. Avaliar especialmente mudancas futuras na biografia do autor.

[] Ao implementar `QuoteDelivery`, decidir se `author_id` deve ser armazenado nele ou derivado de `quote_id`. A duplicacao so deve existir se houver uma razao de historico ou consulta.

[] Estudar e decidir entre usar SQLAlchemy ou acesso direto ao PostgreSQL com `psycopg2`, considerando tambem a compatibilidade com FastAPI sincrono ou assincrono.

[] Alinhar a URL de conexao e as dependencias do projeto com a decisao escolhida; atualmente `config.py` usa `asyncpg` e `database.py` usa `psycopg2`.

[] Definir o schema do banco para `Topic`, `Author` e `Quote` em SQL, incluindo UUIDs, chaves estrangeiras, campos obrigatorios, status e timestamps.

[] Escolher e documentar uma estrategia de migrations para aplicar e versionar alteracoes no schema do PostgreSQL.

[] Implementar o modulo de conexao com o PostgreSQL usando configuracao por variavel de ambiente e tratamento adequado do ciclo de vida da conexao.

[] Implementar os repositories de `Topic`, `Author` e `Quote`, separando os comandos SQL das entidades e dos schemas Pydantic da aplicacao.
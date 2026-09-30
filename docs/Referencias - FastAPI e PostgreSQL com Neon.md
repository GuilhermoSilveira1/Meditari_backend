# Referencias: FastAPI e PostgreSQL com Neon

Documento de apoio para registrar materiais utilizados na implementacao do backend do Meditari.

## Fontes principais

1. [Building a high-performance API with FastAPI, Pydantic, and Lakebase Postgres](https://neon.com/guides/fastapi-overview)
2. [PostgreSQL Python: Connect to PostgreSQL Database Server](https://neon.com/postgresql/python/connect)

## O que cada tutorial aborda

### FastAPI com PostgreSQL

O tutorial apresenta uma API FastAPI usando:

- FastAPI para os endpoints;
- Pydantic para validacao e serializacao;
- SQLAlchemy como ORM;
- `psycopg2-binary` como adaptador PostgreSQL;
- variavel `DATABASE_URL` carregada de um arquivo `.env`;
- injecao de dependencia para abrir e fechar sessoes do banco.

Esse material e util para entender a integracao geral entre FastAPI e PostgreSQL, mas os exemplos de modelos e consultas usam SQLAlchemy.

### Conexao direta com PostgreSQL

O tutorial apresenta uma abordagem sem ORM usando o pacote `psycopg2`:

- leitura dos parametros de conexao a partir de configuracao;
- abertura de uma conexao com `psycopg2.connect()`;
- uso de `with` para controlar a transacao;
- execucao posterior de comandos SQL diretamente pelo cursor;
- separacao entre configuracao e modulo de conexao.

Essa e a abordagem escolhida inicialmente para o Meditari.

## Aplicacao no Meditari

### Decisao atual

O projeto usara PostgreSQL acessado diretamente pelo Python, sem SQLAlchemy como ORM neste momento.

Isso significa separar responsabilidades:

- **Schema do banco:** comandos SQL que criam tabelas, colunas, chaves e restricoes;
- **Conexao:** modulo Python responsavel por abrir conexoes com o PostgreSQL;
- **Repositorios:** modulo Python responsavel por executar consultas SQL;
- **Dominio:** entidades e regras de negocio, sem depender diretamente do driver do banco.

Uma possivel organizacao, consistente com a estrutura atual, e:

```text
app/
    infrastructure/
        database/
            connection.py
            schema.sql
            repositories/
```

Os nomes e a separacao podem ser ajustados conforme a implementacao evoluir.

### Entidades iniciais do contexto de conteudo

O schema inicial devera considerar pelo menos:

- `topics`: identificador e nome do topico;
- `authors`: identificador, nome e dados biograficos opcionais;
- `quotes`: texto, contexto, `author_id`, `topic_id`, status e datas de auditoria.

As colunas `author_id` e `topic_id` devem ser chaves estrangeiras para suas respectivas tabelas.

## Configuracao e seguranca

- A URL ou os parametros de conexao nao devem ser escritos diretamente no codigo.
- Arquivos com credenciais, como `.env` ou `database.ini`, devem permanecer no `.gitignore`.
- O projeto ja ignora `.env` e `database.ini`.
- A configuracao deve ser validada antes de tentar abrir a conexao.
- A string de conexao do Neon normalmente exige SSL, por exemplo `sslmode=require`.

## Dependencias

O tutorial de conexao usa `psycopg2`. O `pyproject.toml` atual ainda nao declara esse pacote; a dependencia devera ser registrada quando a implementacao da conexao for adicionada ao projeto.

O tutorial de FastAPI usa `psycopg2-binary` junto com SQLAlchemy. Como a abordagem escolhida nao usa ORM, nao copiar automaticamente a configuracao de `engine`, `SessionLocal` ou `declarative_base` desse tutorial.

## Proximos materiais

- [Create Tables in Python](https://neon.com/postgresql/python/create-tables)
- [Insert Data Into Table in Python](https://neon.com/postgresql/python/insert)
- [Query Data in Python](https://neon.com/postgresql/python/query)
- [Handle PostgreSQL Transactions in Python](https://neon.com/postgresql/python/transaction)
- [Documentacao oficial do FastAPI](https://fastapi.tiangolo.com/)
- [Documentacao oficial do psycopg](https://www.psycopg.org/docs/)

## Perguntas para revisar durante a implementacao

- O schema sera aplicado manualmente, por scripts SQL versionados ou por uma ferramenta de migrations?
- A aplicacao abrira uma conexao por operacao ou usara um pool de conexoes?
- Como os repositorios vao mapear linhas retornadas pelo PostgreSQL para objetos do dominio?
- Quais campos de `Author` e `Quote` podem ser nulos?
- Quais estados de `Quote` serao permitidos pelo banco?
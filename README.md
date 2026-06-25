# 🧠 Daily Insight API

Backend responsável por gerenciar e entregar conteúdos diários (frases/reflexões) personalizados com base em interesses do usuário.

O sistema é projetado para ser simples no consumo, mas com uma arquitetura preparada para evolução futura, incluindo pipeline de ingestão de dados (ETL) e enriquecimento com IA.

---

# 📌 Objetivo

Fornecer uma frase diária contextualizada para o usuário, com base em seus interesses, promovendo reflexão contínua com baixo esforço de interação.

---

# 🧰 Stack Tecnológica

- **Backend:** NestJS (Node.js + TypeScript)
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma (ou TypeORM)
- **Documentação de API:** Swagger (OpenAPI)
- **Validação:** class-validator
- **Testes:** Jest

---

# 🧠 Domínio (DDD - visão simplificada)

O sistema é dividido nos seguintes bounded contexts:

## 📦 1. Content
Responsável pela gestão das frases e conteúdos.

- Quote
- Author
- Topic
- Context (explicação da frase)

---

## 👤 2. Preferences
Responsável pelas preferências do usuário.

- Interests (ex: filosofia, disciplina, treino)
- Perfil de consumo

---

## 📤 3. Delivery
Responsável pela entrega da frase diária.

- Seleção da frase
- Controle de repetição
- Distribuição diária

---

## 🔄 4. Content Pipeline (futuro)
Responsável pela ingestão e tratamento de dados.

- Coleta (IA/API externa)
- Validação
- Enriquecimento
- Persistência

### Fluxo de Dados:

Fonte externa / IA
        ↓
Validação
        ↓
Enriquecimento
        ↓
Persistência (Quote + Author + Topic)
        ↓
Disponível para Delivery

---

# 🏗️ Arquitetura

Arquitetura baseada em:

- Modular Monolith
- Clean Architecture (simplificada)
- DDD (lightweight)

Fluxo: Controller → Service → Domain → Repository → Database

---

# 🧠 Architecture Decisions

## Por que NestJS?
- Estrutura modular
- Suporte nativo a TypeScript
- Fácil integração com Swagger

## Por que Modular Monolith?
- Simplicidade de deploy
- Menor complexidade inicial
- Preparado para futura evolução

## Por que DDD (lightweight)?
- Melhor organização do domínio
- Clareza nas regras de negócio
- Facilidade de manutenção

## Por que não Microservices agora?
- Overhead desnecessário no estágio atual
- Complexidade de comunicação

---

# 🗂️ Estrutura do Projeto

src/
├── modules/
│   ├── content/
│   ├── delivery/
│   ├── preferences/
│
├── common/
│   ├── dto/
│   ├── types/
│   ├── utils/
│
├── infrastructure/
│   ├── database/
│   ├── repositories/
│
├── main.ts

---

# Banco de Dados (visão inicial)

Quote
- id
- text
- context
- author_id (FK)
- topic_id (FK)
- status (draft | approved | delivered)
- createdAt
- updatedAt

Author
- id
- name
- birth_year
- death_year

Topic
- id
- name

---

# API (draft)

## Retorna a frase diária com base nos interesses.
GET /api/v1/daily-quote
Response:
{
  "quote": "A disciplina é a ponte entre metas e realizações.",
  "author": {
    "name": "Jim Rohn",
    "description": "Empresário e palestrante motivacional"
  },
  "context": "Essa frase reflete a importância da consistência...",
  "topic": "disciplina",
  "date": "2026-06-16"
}

## Define os interesses do usuário.
POST /api/v1/preferences
Request:
{
  "topics": ["disciplina", "filosofia"]
}

Response:
{
  "success": true
}

---

# ⚙️ Regras de Negócio (API)

- Uma única frase deve ser entregue por dia
- Frases não devem se repetir antes de esgotar o pool
- A seleção deve considerar os interesses do usuário

---

# 🧪 Testes

Planejado:
- Testes unitários (Services)
- Testes de integração (DB)
- Testes E2E (API)

---

# 📘 Próximos Passos

- Implementar estrutura base com NestJS
- Configurar Prisma + PostgreSQL
- Implementar módulo Content
- Implementar endpoint /daily-quote
- Configurar Swagger (OpenAPI)
- Implementar versionamento de API
- Criar pipeline inicial de ingestão de conteúdo

---

# 📚 Estudos Pendentes

##  Documentação de API
- Swagger / OpenAPI

## Versionamento de API
- URL versioning (/v1)
- Estratégias de backward compatibility

---

# Visão de Evolução

- Notificações diárias
- Sistema de favoritos
- Personalização avançada
- Pipeline de IA automatizado
- Painel administrativo completo

--- 

# Estrutura do projeto

## MVP
- escolher interesses
- receber 1 frase/dia
- mostrar contexto + autor

## V2
- notificações
- favoritos

## V3
- IA Pipeline
- painel admin

## V4
- personalização melhor
- analytics
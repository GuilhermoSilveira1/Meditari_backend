# ADR-013 - Identificação por InstallationId sem autenticação

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O MVP não necessita de conta, senha ou sincronização entre dispositivos. Entretanto, o backend precisa reconhecer uma instalação para retornar a mesma frase durante o dia e controlar o histórico de entregas.

## Decisão

Identificar a instalação do aplicativo por um UUID denominado InstallationId. O aplicativo salvará o identificador localmente e o enviará nas requisições relacionadas à entrega.

## Fluxo inicial

1. No primeiro acesso, o aplicativo verifica se existe um InstallationId local.
2. Caso não exista, o identificador é gerado ou solicitado ao backend.
3. O aplicativo salva o InstallationId e as preferências localmente.
4. O aplicativo envia o InstallationId e as preferências ao solicitar a frase do dia.
5. O backend registra as entregas vinculadas ao InstallationId.

## Decisão pendente de implementação

A geração do UUID poderá ocorrer no mobile ou no backend. Antes da implementação, será escolhido um único responsável. Independentemente da origem, o backend deverá validar o formato e impedir colisões.

## Motivos

- Experiência inicial sem cadastro.
- Histórico e controle de repetição sem perfil de usuário.
- Menor complexidade para validar o produto.

## Consequências

- Reinstalação ou limpeza dos dados locais poderá criar uma nova identidade.
- Não haverá sincronização de histórico entre dispositivos.
- InstallationId não representa autenticação e não deve autorizar operações administrativas.
- Será necessário prever uma transição caso contas sejam adicionadas no futuro.

## Critério de revisão

Revisar quando houver necessidade de sincronização, backup, múltiplos dispositivos, favoritos persistentes ou recuperação de dados.

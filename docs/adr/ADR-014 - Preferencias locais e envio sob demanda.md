# ADR-014 - Preferências locais e envio sob demanda

**Data:** 2026-09-14  
**Status:** Aceito

## Contexto

O MVP será mobile-first e não possuirá perfil autenticado. O usuário escolherá tópicos amplos, como Filosofia, Esportes, Tecnologia e Astronomia.

## Decisão

Salvar as preferências no armazenamento local do aplicativo e enviá-las ao backend ao solicitar a frase do dia. O backend não manterá um perfil completo de preferências no MVP.

## Motivos

- Eliminar cadastro e gerenciamento de perfil.
- Permitir alteração imediata das preferências no dispositivo.
- Reduzir tabelas e endpoints do MVP.
- Manter no backend somente os dados necessários para entrega e histórico.

## Hierarquia de classificação

- Topic representa uma área ampla apresentada ao usuário.
- Subtopic representa uma classificação específica utilizada principalmente para organização, seleção e futuro ETL.

## Consequências

- As preferências podem ser perdidas ao limpar dados ou reinstalar o aplicativo.
- O backend deverá validar os IDs de tópicos recebidos.
- O mesmo InstallationId poderá alterar as preferências sem migração de perfil.

## Critério de revisão

Revisar quando existir conta, sincronização entre dispositivos, preferências históricas ou personalização baseada em comportamento.

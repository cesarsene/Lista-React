# 🌱 Uso de Branches no Git – Trabalho Isolado

Este repositório utiliza **branches do Git** para permitir o desenvolvimento de novas funcionalidades ou projetos **sem impactar a branch principal (`main`)**.

Essa abordagem garante segurança, organização e um fluxo profissional de versionamento.

---

## 🎯 Objetivo

- Manter a **branch `main` sempre estável**
- Desenvolver novas ideias, testes ou projetos em **branches separadas**
- Evitar conflitos e perda de código
- Facilitar comparação e evolução do projeto

---

## 🌳 Estrutura de Branches

- **main**
  - Versão estável do projeto
  - Não recebe alterações diretas

- **feature/***
  - Branches de desenvolvimento
  - Usadas para novas funcionalidades ou projetos

Exemplo:
```txt
main
feature/novo-projeto
feature/todo-localstorage


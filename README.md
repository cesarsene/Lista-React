# Lista de Tarefas – React + TypeScript

Este projeto é uma aplicação de lista de tarefas desenvolvida com **React + TypeScript**, focada em boas práticas de organização, tipagem forte e design consistente sem dependência obrigatória de frameworks CSS.

---

## 📌 Objetivo do Projeto

- Criar uma aplicação simples e funcional de tarefas
- Utilizar React com TypeScript
- Trabalhar filtros (todas, pendentes, concluídas)
- Organizar regras de negócio em hooks
- Criar um design system em CSS puro

---

## 🧠 Estrutura do Projeto

src/
├── App.tsx  
├── main.tsx  
├── Hooks/
│   └── useTasks.ts  
├── Components/
│   ├── TaskFilters.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
├── styles/
│   └── design-system.css  

---

## ⚙️ Principais Implementações

### ✔ Gerenciamento de tarefas
- Adição de tarefas
- Marcar como concluída
- Remover tarefas
- Filtragem dinâmica

### ✔ Hook personalizado (`useTasks`)
- Centraliza a lógica de tarefas
- Tipagem forte com TypeScript
- Evita duplicação de lógica no `App.tsx`

### ✔ Sistema de filtros
- `all` → Todas
- `active` → Pendentes
- `completed` → Concluídas

---

## 🐞 Erros Corrigidos

### 1️⃣ Erro: `@tailwind base is no longer available in v4`
**Causa:** Uso de diretivas antigas do Tailwind v3  
**Solução:**  
- Remoção das diretivas `@tailwind`
- Substituição por CSS puro

---

### 2️⃣ Erro: `Unknown at rule @apply`
**Causa:** `@apply` é exclusivo do Tailwind  
**Solução:**  
- Criação de um arquivo `design-system.css`
- Conversão de todas as regras para CSS puro

---
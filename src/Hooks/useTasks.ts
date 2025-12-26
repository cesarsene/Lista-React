import { useEffect, useState } from "react";
import type { Task } from "../Types";

export type Filter = "all" | "completed" | "active";

const STORAGE_KEY = "tasks";

export function useTasks() {
  // -----------------------------
  // ✅ Inicialização correta (SEM useEffect)
  // -----------------------------
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState<Filter>("all");

  // -----------------------------
  // ✅ Escrita no LocalStorage
  // -----------------------------
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // -----------------------------
  // Ações (CRUD)
  // -----------------------------
  function addTask(title: string) {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  }

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function updateTask(id: number, title: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title } : task))
    );
  }

  // -----------------------------
  // Estado derivado
  // -----------------------------
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // -----------------------------
  // Estatísticas
  // -----------------------------
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.filter((task) => !task.completed).length;

  // -----------------------------
  // API pública
  // -----------------------------
  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    removeTask,
    updateTask,
    total,
    completed,
    pending,
  };
}

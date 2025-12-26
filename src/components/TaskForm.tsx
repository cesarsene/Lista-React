// src/components/TaskForm.tsx
import { useState } from "react"

interface TaskFormProps {
  onAddTask: (title: string) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return

    onAddTask(title)
    setTitle("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center"
    >
      <label className="text-sm text-neutral-400">
        Digite uma nova tarefa
      </label>

      <div className="flex w-full gap-2">
        <input
          className="ds-input"
          placeholder="Ex: Estudar React por 30 minutos"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          type="submit"
          className="ds-button ds-button-primary"
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}

import type { Filter } from "../Hooks/useTasks"

interface TaskFiltersProps {
  filter: Filter
  onChange: (filter: Filter) => void
}

export function TaskFilters({ filter, onChange }: TaskFiltersProps) {
  return (
    <div>
      <button onClick={() => onChange("all")} disabled={filter === "all"}>
        Todas
      </button>
      <button onClick={() => onChange("active")} disabled={filter === "active"}>
        Pendentes
      </button>
      <button
        onClick={() => onChange("completed")}
        disabled={filter === "completed"}
      >
        Concluídas
      </button>
    </div>
  )
}

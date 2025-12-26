import type { Filter } from "../Hooks/useTasks"

interface Props {
  filter: Filter
  onChange: (filter: Filter) => void
}

export function TaskFilters({ filter, onChange }: Props) {
  return (
    <div className="flex justify-center gap-2">
      <button
        className={`ds-button ${
          filter === "all"
            ? "ds-button-primary"
            : "ds-button-ghost"
        }`}
        onClick={() => onChange("all")}
      >
        Todas
      </button>

      <button
        className={`ds-button ${
          filter === "completed"
            ? "ds-button-primary"
            : "ds-button-ghost"
        }`}
        onClick={() => onChange("completed")}
        
      >
        Concluídas
      </button>

      <button
        className={`ds-button ${
          filter === "active"
            ? "ds-button-primary"
            : "ds-button-ghost"
        }`}
        onClick={() => onChange("active")}
      >
        Pendentes
      </button>
    </div>
  )
}

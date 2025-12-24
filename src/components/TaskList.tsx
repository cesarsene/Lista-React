import type { Task } from "../Types"
import { TaskItem } from "./TaskItem"

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
  onUpdate: (id: number, title: string) => void
}

export function TaskList({
  tasks,
  onToggle,
  onRemove,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

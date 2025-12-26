import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import { TaskStats } from "./components/TaskStats"
import { TaskFilters } from "./components/TaskFilters"
import { useTasks } from "./Hooks/useTasks"


export default function App() {
  const {
    tasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    removeTask,
    updateTask,
    total,
    completed,
    pending,
  } = useTasks()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <main className="w-full max-w-2xl ds-card space-y-6">

        <header className="text-center">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <p className="text-neutral-400 text-sm">
            Organize suas tarefas com foco e clareza
          </p>
        </header>

        <TaskForm onAddTask={addTask} />

        <TaskFilters
          filter={filter}
          onChange={setFilter}
        />

        <TaskStats
          total={total}
          completed={completed}
          pending={pending}
        />

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onRemove={removeTask}
          onUpdate={updateTask}
        />
      </main>
    </div>
  )
}

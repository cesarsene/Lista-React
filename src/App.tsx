import { TaskForm } from "./components/TaskForm"
import {TaskList} from "./components/TaskList"
import { TaskStats } from "./components/TaskStats"
import { TaskFilters } from "./components/TaskFilters"
import { useTasks } from "./Hooks/useTasks"

export function App() {
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
    <div>
      <h1>Todo List</h1>

     <TaskForm onAddTask={addTask} />
      <TaskFilters filter={filter} onChange={setFilter} />
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
    </div>
  )
}

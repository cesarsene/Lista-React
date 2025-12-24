import { useState } from "react"
import { TaskForm } from "./components/TaskForm"
import { TaskItem } from "./components/TaskItem"
import type { Task } from "./Types"





export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onRemove={removeTask}
          />
        ))}
      </ul>
    </div>
  )
}

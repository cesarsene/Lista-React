interface TaskStatsProps {
  total: number
  completed: number
  pending: number
}

export function TaskStats({
  total,
  completed,
  pending,
}: TaskStatsProps) {
  return (
    <p>
      Total: {total} | Concluídas: {completed} | Pendentes: {pending}
    </p>
  )
}

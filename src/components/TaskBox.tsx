import type { Task } from '../types/Todos'

type TaskBoxProps = {
  task: Task
}

export default function TaskBox(props: TaskBoxProps) {
  return <div>- {props.task.title}</div>
}

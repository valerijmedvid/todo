import type { Task } from '../slicers/todosListSlice'

type TaskBoxProps = {
  task: Task
}

export default function TaskBox(props: TaskBoxProps) {
  return <div>- {props.task.title}</div>
}

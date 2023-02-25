import type { TodoList } from '../types/Todos'

type TodoListProps = {
  todo: TodoList
}

export function TodoListBox(props: TodoListProps) {
  return (
    <div className='w-32 m-2 pl-1 pb-5 rounded bg-gray-50 font-bold self-start'>
      {props.todo.title}
    </div>
  )
}

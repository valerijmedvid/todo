import TaskBox from './TaskBox'
import AddTask from './AddTask'

import type { TodoList } from '../slicers/todosListSlice'

type TodoListBoxProps = {
  todoList: TodoList
  todoListIndex: number
}

export default function TodoListBox(props: TodoListBoxProps) {
  return (
    <div className='w-32 m-2 rounded bg-gray-50 self-start'>
      <p className='ml-1 font-bold'>{props.todoList.title}</p>

      <div className='flex flex-col ml-3'>
        {props.todoList.tasks.map((task, index) => (
          <TaskBox task={task} key={index} />
        ))}
      </div>

      <AddTask todoListIndex={props.todoListIndex} />
    </div>
  )
}

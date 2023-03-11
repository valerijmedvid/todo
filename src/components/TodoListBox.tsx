import TaskBox from './TaskBox'
import AddTask from './AddTask'
import { useDispatch } from 'react-redux'
import { changeTaskState, removeTask } from '../slicers/todosListSlice'

import type { TodoList } from '../slicers/todosListSlice'

type TodoListBoxProps = {
  todoList: TodoList
  todoListIndex: number
}

export default function TodoListBox(props: TodoListBoxProps) {
  const dispatch = useDispatch()

  function handleTaskState(index: number, checked: boolean) {
    dispatch(
      changeTaskState({
        completed: checked,
        taskIndex: index,
        todoListIndex: props.todoListIndex,
      }),
    )
  }

  function handleRemoveTask(index: number) {
    dispatch(
      removeTask({
        taskIndex: index,
        todoListIndex: props.todoListIndex,
      }),
    )
  }

  return (
    <div className='todo-list-box'>
      <p className='ml-1 font-bold'>{props.todoList.title}</p>

      <div className='flex flex-col'>
        {props.todoList.tasks.map((task, index) => (
          <TaskBox
            task={task}
            handleTaskState={(checked) => handleTaskState(index, checked)}
            handleRemoveTask={() => handleRemoveTask(index)}
            key={index + task.title}
          />
        ))}
      </div>

      <AddTask todoListIndex={props.todoListIndex} />
    </div>
  )
}

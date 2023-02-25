import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../slicers/todosListSlice'

import type { KeyboardEvent } from 'react'

type AddTaskProps = {
  todoListIndex: number
}
export function AddTask(props: AddTaskProps) {
  const [showInput, setShowInput] = useState(false)
  const dispatch = useDispatch()

  function addNewTask(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      dispatch(
        addTask({
          task: { title: event.currentTarget.value, completed: false },
          index: props.todoListIndex,
        }),
      )
      setShowInput(false)
    }
  }
  return (
    <div className='mt-3'>
      {showInput ? (
        <input
          type='text'
          autoFocus
          className='w-32'
          onBlur={() => setShowInput(false)}
          onKeyDown={addNewTask}
        />
      ) : (
        <div
          className='flex hover:bg-slate-200 hover:rounded cursor-pointer'
          onClick={() => setShowInput(true)}
        >
          <p className='m-auto font-bold'>+</p>
        </div>
      )}
    </div>
  )
}

import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../slicers/todosListSlice'

import type { KeyboardEvent } from 'react'

type AddTaskProps = {
  todoListIndex: number
}
export default function AddTask(props: AddTaskProps) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter' && inputRef.current?.value != '') {
      dispatch(
        addTask({
          task: { title: event.currentTarget.value, completed: false },
          index: props.todoListIndex,
        }),
      )
      if (inputRef.current != null) {
        inputRef.current.value = ''
      }
    }
  }
  
  return (
    <div className='mt-3'>
      {showInput ? (
        <input
          ref={inputRef}
          type='text'
          autoFocus
          className='w-32'
          onBlur={() => setShowInput(false)}
          onKeyDown={handleKeyPress}
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

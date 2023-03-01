import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../slicers/todosListSlice'

import type { KeyboardEvent } from 'react'

export default function AddList() {
  const [showInputBox, setShowInputBox] = useState(false)

  const dispatch = useDispatch()

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      dispatch(
        addList({
          title: event.currentTarget.value,
          tasks: [],
        }),
      )
      setShowInputBox(false)
    }
  }

  return (
    <div>
      {showInputBox ? (
        <input
          type='text'
          className='px-1 m-2 rounded font-semibold leading-loose self-start'
          autoFocus
          placeholder='List name...'
          onBlur={() => setShowInputBox(false)}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <p
          className='p-2 text-gray-600 hover:text-gray-900 cursor-pointer font-bold'
          onClick={() => setShowInputBox(true)}
        >
          Add new list...
        </p>
      )}
    </div>
  )
}

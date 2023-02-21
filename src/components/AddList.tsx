import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../slicers/todosListSlice'

import type { KeyboardEvent } from 'react'

export default function AddList() {
  const [showInputBox, setShowInputBox] = useState(false)

  const dispatch = useDispatch()

  function addNewList(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      dispatch(
        addList({
          title: event.currentTarget.value,
          todos: [],
        }),
      )
      setShowInputBox(false)
    }
  }

  return (
    <>
      {showInputBox ? (
        <input
          type='text'
          className='p-2 m-2 rounded font-semibold'
          autoFocus
          placeholder='List name...'
          onKeyDown={addNewList}
        />
      ) : (
        <p
          className='p-2 text-gray-600 hover:text-gray-900 cursor-pointer font-bold'
          onClick={() => setShowInputBox(true)}
        >
          Add new list...
        </p>
      )}
    </>
  )
}

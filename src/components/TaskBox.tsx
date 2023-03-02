import { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'

import type { Task } from '../slicers/todosListSlice'

type TaskBoxProps = {
  task: Task
  handleTaskState: (checked: boolean) => void
  handleRemoveTask: () => void
}

export default function TaskBox(props: TaskBoxProps) {
  const [checked, setChecked] = useState(props.task.completed)

  function handleChange() {
    props.handleTaskState(!checked)
    setChecked(!checked)
  }

  function handleOnClick() {
    props.handleRemoveTask()
  }

  return (
    <div className='task-box flex justify-between'>
      <label className={checked ? 'line-through decoration-2 cursor-pointer' : 'cursor-pointer'}>
        <input type='checkbox' className='mr-1 ' checked={checked} onChange={handleChange} />
        {props.task.title}
      </label>
      <div className='buttons flex items-center'>
        <TiDeleteOutline
          className='text-sm cursor-pointer hover:text-rose-700'
          onClick={handleOnClick}
        />
      </div>
    </div>
  )
}

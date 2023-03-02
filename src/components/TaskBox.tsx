import { useState } from 'react'

import type { Task } from '../slicers/todosListSlice'

type TaskBoxProps = {
  task: Task
  handleTaskState: (checked: boolean) => void
}

export default function TaskBox(props: TaskBoxProps) {
  const [checked, setChecked] = useState(props.task.completed)

  function handleChange() {
    props.handleTaskState(!checked)
    setChecked(!checked)
  }

  return (
    <div className='mx-1 px-1 mt-1 border rounded border-dashed border-neutral-600 border-opacity-0 hover:border-opacity-100'>
      <label className={checked ? 'line-through decoration-2 cursor-pointer' : 'cursor-pointer'}>
        <input type='checkbox' className='mr-1 ' checked={checked} onChange={handleChange} />
        {props.task.title}
      </label>
    </div>
  )
}

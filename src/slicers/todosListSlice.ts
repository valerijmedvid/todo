import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type Task = {
  title: string
  completed: boolean
}

export type TodoList = {
  title: string
  tasks: Task[]
}

export type TodosState = {
  lists: TodoList[]
}

const initialState: TodosState = {
  lists: [
    {
      title: 'First list',
      tasks: [
        {
          title: 'Homework',
          completed: false,
        },
        {
          title: 'Cleaning',
          completed: false,
        },
      ],
    },
  ],
}

type AddTask = {
  task: Task
  index: number
}

export const todosListSlice = createSlice({
  name: 'todosList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<TodoList>) => {
      state.lists.push(action.payload)
    },
    addTask: (state, action: PayloadAction<AddTask>) => {
      state.lists[action.payload.index].tasks.push(action.payload.task)
    },
  },
})

export const { addList, addTask } = todosListSlice.actions

export const selectTodosList = (state: RootState) => state.todosList.lists

export default todosListSlice.reducer

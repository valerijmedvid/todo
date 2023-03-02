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
          completed: true,
        },
      ],
    },
  ],
}

type AddTask = {
  task: Task
  index: number
}

type TaskState = {
  completed: boolean
  taskIndex: number
  todoListIndex: number
}

type RemoveTask = {
  taskIndex: number
  todoListIndex: number
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
    changeTaskState: (state, action: PayloadAction<TaskState>) => {
      state.lists[action.payload.todoListIndex].tasks[action.payload.taskIndex].completed =
        action.payload.completed
    },
    removeTask: (state, action: PayloadAction<RemoveTask>) => {
      state.lists[action.payload.todoListIndex].tasks.splice(action.payload.taskIndex, 1)
    },
  },
})

export const { addList, addTask, changeTaskState, removeTask } = todosListSlice.actions

export const selectTodosList = (state: RootState) => state.todosList.lists

export default todosListSlice.reducer

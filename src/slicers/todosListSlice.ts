import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { TodoList, TodosState } from '../types/Todos'

const initialState: TodosState = {
  lists: [{ title: 'First list', todos: [] }],
}

export const todosListSlice = createSlice({
  name: 'todosList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<TodoList>) => {
      state.lists.push(action.payload)
    },
  },
})

export const { addList } = todosListSlice.actions

export const selectTodosList = (state: RootState) => state.todosList.lists

export default todosListSlice.reducer

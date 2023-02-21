import { configureStore } from '@reduxjs/toolkit'
import todosListReducer from './slicers/todosListSlice'

export const store = configureStore({
  reducer: {
    todoList: todosListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import todosListSlice from './slicers/todosListSlice'

export const store = configureStore({
  reducer: {
    todosList: todosListSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

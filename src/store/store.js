import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slices/todoSlices'

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})

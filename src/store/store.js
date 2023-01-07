import { configureStore } from '@reduxjs/toolkit'
import { taskDoneSlice } from './slices/taskDoneSlice'

export const store = configureStore({
  reducer: {
    taskDone: taskDoneSlice.reducer
  }
})

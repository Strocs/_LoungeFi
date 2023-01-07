import { configureStore } from '@reduxjs/toolkit'
import { taskDoneSlice } from '.'

export const store = configureStore({
  reducer: {
    taskDone: taskDoneSlice.reducer
  }
})

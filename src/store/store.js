import { configureStore } from '@reduxjs/toolkit'
import { simpleTaskSlice } from './slices/simpleTaskSlice'

export const store = configureStore({
  reducer: {
    simpleTask: simpleTaskSlice.reducer
  }
})

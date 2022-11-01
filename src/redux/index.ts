import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user'

export const store = configureStore({
  reducer: {
    user: useReducer
  }
})

// 全局导出 redux的类型
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  name: string
  id: string
  avatar?: string
  create_time: number
}

const initialState: IUser = {
  name: '我是一头猪',
  id: 'u5487930',
  create_time: 1663594069000,
  avatar:
    'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * 更新用户信息
     * @param state 当前状态
     * @param action 新的用户状态 （分为全量更新 / 增量更新）
     * @returns
     */
    update(state, action: PayloadAction<IUser>) {
      switch (action.type) {
        case 'full':
          return action.payload

        case 'inc':
          return {
            ...state,
            ...action.payload
          }

        default:
          return state
      }
    },

    /**
     * 注销登录
     * @returns 初始数据
     */
    logout() {
      return initialState
    }
  }
})

export const { update, logout } = userSlice.actions

export default userSlice.reducer

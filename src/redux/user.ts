import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { router } from '@/router'
import { RootRouterPath } from '@/router/path'
import { socket } from '@/utils/socket'

const initialState: IUser = {
  name: '',
  user_id: '',
  create_time: 0,
  avatar: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * 更新用户信息
     * @param state 当前状态
     * @param action 新的用户状态
     * @returns
     */
    update(state, action: PayloadAction<Partial<IUser>>) {
      return {
        ...state,
        ...action.payload
      }
    },

    /**
     * 替换用户信息
     * @param state 当前状态
     * @param action 新的用户状态
     * @returns
     */
    login(_state, action: PayloadAction<IUser>) {
      socket.connect(action.payload.user_id)
      return action.payload
    },

    /**
     * 注销登录
     * @returns 初始数据
     */
    logout() {
      // 退出登录重定向至 登录页
      router.navigate(RootRouterPath.Login)
      socket.close()
      return initialState
    }
  }
})

export const { update, logout, login } = userSlice.actions

export default userSlice.reducer

import Request from './request'

export interface LoginPrams {
  username: string
  password: string
  isQuick?: boolean
}

export interface RegisterPrams {
  username: string
  password: string
}

class UserApi extends Request {

  /**
   * 更新登录（更新用户信息）
   * @param user 用户信息
   */
  update() {
    return this.get<IUser>('/update')
  }

  /**
   * 游客登录
   */
  visitor(){
    return this.post<IUser>('/visitor')
  }

  /**
   * 登录
   * @param user 用户信息
   */
  login(user: LoginPrams) {
    return this.post<IUser>('/login', user)
  }

  /**
   * 注册
   * @param user 用户信息
   */
  register(user: RegisterPrams) {
    return this.post<IUser>('/register', user)
  }


  /**
   * 
   * @returns 当前所有的好友信息
   */
  getFriends() {
    return this.get<IUser[]>('/user')
  }
}

const userApi = new UserApi()

export default userApi

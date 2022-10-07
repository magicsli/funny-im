import Request from './request'


export interface LoginPrams {
  username: string
  password: string
  isQuick?:boolean
}

export interface RegisterPrams {
  username: string
  password: string
}

class UserApi extends Request {
  getUsers() {
    return this.get('/users')
  }

  /**
   * 登录
   * @param user 登录数据
   */
  login(user: LoginPrams) {
    return this.post('/login', user)
  }

  /**
   * 登录
   * @param user 登录数据
   */
  register(user: RegisterPrams) {
    return this.post('/register', user)
  }
}

const userApi = new UserApi()

export default userApi

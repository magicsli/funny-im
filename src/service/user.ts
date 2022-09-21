import Request from './request'

class UserApi extends Request {
  getUsers() {
    return this.get('/users')
  }
}

const userApi = new UserApi()

export default userApi

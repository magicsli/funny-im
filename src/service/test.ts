import Request from './request'

class Test extends Request {
  getLogin() {
    return this.get<{ a: string }>('/login')
  }
  postLogin() {
    return this.post<{ a: string }>('/login')
  }
}

const testApi = new Test()

export default testApi

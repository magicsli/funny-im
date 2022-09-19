import Request from './request'
import { IChat } from './typing'

class ChatApi extends Request {
  getLogin() {
    return this.get<{ a: string }>('/login')
  }

  getChatList() {
    return this.post<IChat[]>('/chatList')
  }
}

const cahtApi = new ChatApi()

export default cahtApi

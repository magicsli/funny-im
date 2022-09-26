import Request from './request'
import { IChat } from './typing'

class ChatApi extends Request {
  getChatList() {
    return this.post<IChat[]>('/chat/bar')
  }
}

const cahtApi = new ChatApi()

export default cahtApi

import Request from './request'
import { IChat } from './typing'

class ChatApi extends Request {

  name = '/room'

  /**
   * 获取用户所有的聊天室 （无分页）
   */
  getRooms() {
    return this.get<IRoom[]>('/list')
  }

  getChatList() {
    return this.post<IChat[]>('/chats')
  }


}

const cahtApi = new ChatApi()

export default cahtApi

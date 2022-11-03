import Request from './request'

class ChatApi extends Request {
  name = '/room'

  /**
   * 获取用户所有的聊天室 （无分页）
   */
  getRooms() {
    return this.get<IRoomWidthLast[]>('/list')
  }

  /**
   * 获取聊天室详情
   */
  getSecretRoom(id: string) {
    return this.get<IRoom>('/secret', {
      params: {
        id
      }
    })
  }

  getChatList() {
    return this.post<IChat[]>('/chats')
  }
}

const RoomApi = new ChatApi()

export default RoomApi

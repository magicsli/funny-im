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
  createSecretRoom(id: string) {
    return this.get<IRoom>('/secret', {
      params: {
        id
      }
    })
  }

  /**
   * 获取聊天室详情
   */
  getRoomDetail(room_id: string) {
    return this.get<IRoom>('/detail', {
      params: {
        room_id
      }
    })
  }

  getChatList() {
    return this.post<IChat[]>('/chats')
  }
}

const RoomApi = new ChatApi()

export default RoomApi

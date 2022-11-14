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

  /**
   * 获取聊天记录
   * @returns 聊天信息列表
   */
  getChatList(params: { limit?: number; page: number; room_id: string }) {
    return this.get<IChat[]>('/chat', {
      params
    })
  }

  /**
   * 发送消息
   */
  pushMessage(room_id: string, message: string) {
    return this.post<IChat>('/chat', {
      room_id,
      message
    })
  }
}

const RoomApi = new ChatApi()

export default RoomApi

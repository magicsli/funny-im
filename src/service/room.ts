import Request from './request'

class ChatApi extends Request {

  name = '/room'

  /**
   * 获取用户所有的聊天室 （无分页）
   */
  getRooms() {
    return this.get<IRoom[]>('/list')
  }

  /**
   * 获取聊天室详情
   */
  getRoomDetail(id:string) {
    return this.get<IRoom>('/detail', {
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

declare interface IRoom {
  name: string // 聊天室名字 （如果是私聊则无此字段， 需要在业务层自己处理一下）
  secret: boolean // 是否为私聊
  room_id: string // 房价Id
  secret: boolean // 是否为私聊
  members: Array<Pick<IMember, 'avatar' | 'name' | '_temp' | 'user_id'>>
  create_time: number
}

declare interface IRoomWidthLast extends IRoom {
  last?: IChat
  unread: number
}

declare interface IChat {
  chat_id: string
  from: string // 发送方
  read_list: string[] // 已读的成员
  type: string // 消息类型
  content: string // 消息内容
  room_id: string // 聊天室Id
  create_time: number // 消息发送时间
}

interface IMember {
  user_id: string // 用户Id
  name: string
  nick_name?: string
  avatar: string
  create_time?: string
  _temp?: boolean
  expire_time?: number //（临时账号） 失效时间
}

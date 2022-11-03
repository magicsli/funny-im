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
  title: string
  update_time?: number
  creatorId: string
  // members: IMember[]
  lastUpdateMessage?: string // 最后更新信息
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

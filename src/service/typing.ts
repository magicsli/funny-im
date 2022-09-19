export interface IChat {
  chat_id: string
  title: string
  update_time?: number
  creatorId: string
  members: IMember[]
  lastUpdateMessage?: string // 最后更新信息
}

export interface IMember {
  user_id: string
  name: string
  nick_name?: string
  avatar: string
  create_time?: string
}

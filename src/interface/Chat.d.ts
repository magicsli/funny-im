
declare interface IRoom {
	_id: string
	members: Pick<IMember, '_id' | 'avatar' | 'name'>[]
	status?: string, // 当前状态
	create_time: number
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
  _id: string
  name: string
  nick_name?: string
  avatar: string
  create_time?: string
}

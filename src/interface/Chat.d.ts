declare interface IRoom {
	_id: string
	members: string[]
	status?: string, // 当前状态
	create_time: number
}
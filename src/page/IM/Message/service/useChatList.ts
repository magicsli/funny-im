import RoomApi from '@/service/room'
import { useMemoizedFn } from 'ahooks'
import { useEffect, useMemo, useState } from 'react'

/**
 * 操作房间中聊天列表及信息
 * @param room_id 房间室Id
 */
const useChatList = (room_id?: string) => {
  const [chatList, setChatList] = useState<IChat[]>([])

  const getList = useMemoizedFn(
    ({
      roomId = room_id || '',
      page = 1,
      limit = 20
    }: {
      roomId: string
      page: number
      limit: number
    }) => {
      return RoomApi.getChatList({
        room_id: roomId,
        page,
        limit
      }).then(res => {
        setChatList(res)
        return res
      })
    }
  )

  useEffect(() => {
    room_id && getList({ roomId: room_id, page: 1, limit: 20 })
  }, [room_id])

  const pushMessage = useMemoizedFn((message?: string): Promise<false | IChat> => {
    if (!room_id || !message) return Promise.resolve(false)

    return RoomApi.pushMessage(room_id, message).then(res => {
      setChatList(list => [...list, res])
      return res
    })
  })

  return useMemo(() => ({ chatList, getList, pushMessage }), [chatList])
}

export default useChatList

import RoomApi from '@/service/room'
import { createContext, useEffect, useState } from 'react'

export const useRoomDetail = (roomId?: string) => {
  const [room, setRoom] = useState<IRoom | null>(null)

  useEffect(() => {
    if (roomId) {
      RoomApi.getRoomDetail(roomId).then(res => {
        setRoom(res)
      })
    } else {
      setRoom(null)
    }
  }, [roomId])

  return room
}

export type RoomContext = ReturnType<typeof useRoomDetail>

export const RoomContext = createContext(null as RoomContext)

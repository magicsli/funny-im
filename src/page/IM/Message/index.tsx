import React from 'react'
import styles from './index.module.scss'

import ChatList from './component/ChatList'
import Room from './module/Room'
import { useParams } from 'react-router-dom'
import { RoomContext, useRoomDetail } from './service/useRoomDetail'
export interface Messagerops {}

const Message = () => {
  const { id } = useParams()

  const room = useRoomDetail(id)

  return (
    <RoomContext.Provider value={room}>
      <div className={styles.container}>
        <ChatList />
        <div className={styles.room}>
          <Room />
        </div>
      </div>
    </RoomContext.Provider>
  )
}

export default Message

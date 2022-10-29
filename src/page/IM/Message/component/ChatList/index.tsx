import chatApi from '@/service/room'
import React, { useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import styles from './index.module.scss'

export interface Roomrops {}

const tranformToChatCard = (room: IRoom) => {
  return {
    room_id: room._id,
    avatars: room.members.map(item => item.avatar)
  }
}

const ChatList = () => {
  const [chatList, setChatList] = useState<IChat[]>([])

  useEffect(() => {
    // 每个聊天室就是一个聊天卡片
    chatApi.getRooms().then(res => {
      // setChatList(res)
    })
  }, [])

  return (
    <div className={styles.chat}>
      {chatList.map(item => (
        <ChatItem key={item.chat_id} item={item} />
      ))}
    </div>
  )
}

export default ChatList

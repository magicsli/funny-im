import chatApi from '@/service/room'
import React, { useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import styles from './index.module.scss'

export interface Roomrops {}

const ChatList = () => {
  const [chatList, setChatList] = useState<IRoomWidthLast[]>([])

  useEffect(() => {
    // 每个聊天室就是一个聊天卡片
    chatApi.getRooms().then(res => {
      setChatList(res)
    })
  }, [])

  return (
    <div className={styles.chat}>
      {chatList.map(item => (
        <ChatItem key={item.room_id} item={item} />
      ))}
    </div>
  )
}

export default ChatList

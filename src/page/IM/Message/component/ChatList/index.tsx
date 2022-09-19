import chatApi from '@/service/chat'
import { IChat } from '@/service/typing'
import React, { useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import styles from './index.module.scss'

export interface Roomrops {}

const ChatList = () => {
  const [chatList, setChatList] = useState<IChat[]>([])

  useEffect(() => {
    chatApi.getChatList().then(res => {
      console.log('res', res)
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

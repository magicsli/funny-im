import React from 'react'
import styles from './index.module.scss'

import ChatList from './component/ChatList'
import Room from './component/Room'
export interface Messagerops {}

const Message = () => {
  return (
    <div className={styles.container}>
      <ChatList />
      <div className={styles.room}>
        <Room />
      </div>
    </div>
  )
}

export default Message

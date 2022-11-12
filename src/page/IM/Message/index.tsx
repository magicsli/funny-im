import styles from './index.module.scss'

import ChatList from './component/ChatList'
import { Outlet } from 'react-router-dom'

// export interface Messagerops {}

const Message = () => {
  return (
    <div className={styles.container}>
      <ChatList />
      <div className={styles.room}>
        <Outlet />
      </div>
    </div>
  )
}

export default Message

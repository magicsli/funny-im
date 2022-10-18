import useSubscribe from '@/hooks/useSubscribe'
import { socket } from '@/service/socket'
import { publish } from '@/utils/pubsub'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './component/Aside'
import Header from './component/Header'

import styles from './index.module.scss'

const IM = () => {
  useSubscribe(PubSocket.CHAT_SEND_1, (message, key) => {
    console.log('message', message, key)
  })

  useEffect(() => {
    setTimeout(() => {
      publish(PubSocket.CHAT_SEND_1, new Date().toDateString())
    }, 2000)
    // socket.connect()
  }, [])

  return (
    <div className={styles.im}>
      <Header />
      <div className={styles.main}>
        <Aside />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default IM

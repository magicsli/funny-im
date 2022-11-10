import { useEffect } from 'react'
import RoomHeader from './RoomHeader'
import styles from './index.module.scss'
import { useParams } from 'react-router'
import { chatSocket } from '@/service/socket/chat'

export interface Roomrops {}

const Room = () => {
  const { id: roomId } = useParams()

  useEffect(() => {
    if (roomId) {
      chatSocket.connect()
    }
    return () => {
      chatSocket.close()
    }
  }, [roomId])

  return (
    <div className={styles.contianer}>
      <RoomHeader />

      <ul className={styles.main}>
        <li className={styles.li}>1</li>
        <li className={styles.li}>2</li>
        <li className={styles.li}>3</li>
        <li className={styles.li}>4</li>
        <li className={styles.li}>5</li>
      </ul>

      <div className={styles.input}></div>
    </div>
  )
}

export default Room

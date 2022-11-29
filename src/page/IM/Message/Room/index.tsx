import { useEffect } from 'react'
import RoomHeader from './RoomHeader'
import styles from './index.module.scss'
import { useParams } from 'react-router'
import { chatSocket } from '@/service/socket/chat'
import { useRoomDetail, RoomContext } from '../service/useRoomDetail'
import RichText from './RichText'
import useChatList from '../service/useChatList'
import RoomContent from './RoomContent'

const Room = () => {
  const { id: roomId } = useParams()

  const detail = useRoomDetail(roomId)
  const { chatList, pushMessage } = useChatList(roomId)

  useEffect(() => {
    if (roomId) {
      chatSocket.connect()
    }
    return () => {
      chatSocket.close()
    }
  }, [roomId])

  return (
    <RoomContext.Provider value={detail}>
      <div className={styles.container}>
        <RoomHeader />

        <RoomContent list={chatList} />

        <div className={styles.input}>
          <RichText onPush={pushMessage} />
        </div>
      </div>
    </RoomContext.Provider>
  )
}

export default Room

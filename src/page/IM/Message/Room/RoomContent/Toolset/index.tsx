import useUserId from '@/hooks/useUserId'
import { RoomContext } from '@/page/IM/Message/service/useRoomDetail'
import { autoShowTime } from '@/utils/time'
import { Avatar } from 'antd'
import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useContext } from 'react'
import styles from './index.module.scss'
import Message from './Model/Message'

export interface ToolsetProps {
  item: IChat
}

const Toolset = ({ item }: ToolsetProps) => {
  // const isSameHour = dayjs().isSame(item.create_time, 'hour')
  const userId = useUserId()
  const roomDetail = useContext(RoomContext)

  const user = roomDetail?.members.find(member => member.user_id === item.from)

  return (
    <li
      className={classNames({
        [styles.toolset]: true,
        [styles['toolset-right']]: item.from === userId,
        [styles['toolset-left']]: item.from !== userId
      })}>
      <Avatar className={styles.avatar} size={40} src={user?.avatar} />
      <div className={styles.cotnent}>
        {roomDetail?.secret ? null : <div className={styles.name}>{user?.name}</div>}
        <div className={styles.popver}>
          <Message item={item} />
        </div>
        {/* {!isSameHour ? <div className={styles.time}>{autoShowTime(item.create_time)}</div> : null} */}
      </div>
    </li>
  )
}

export default Toolset

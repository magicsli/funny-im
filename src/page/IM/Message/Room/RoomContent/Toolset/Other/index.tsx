import useUserId from '@/hooks/useUserId'
import { RoomContext } from '@/page/IM/Message/service/useRoomDetail'
import { Avatar } from 'antd'
import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useContext } from 'react'
import styles from './index.module.scss'

export interface ToolsetProps {
  item: IChat
}

const Toolset = ({ item }: ToolsetProps) => {
  const isSameHour = dayjs().isSame(item.create_time, 'hour')
  const userId = useUserId()
  const roomDetail = useContext(RoomContext)

  const user = roomDetail?.members.find(member => member.user_id === item.from)

  return (
    <li
      className={classNames({
        [styles.toolset]: true,
        [styles['toolset-self']]: item.from === userId
      })}>
      <Avatar
        className={classNames({
          [styles['avatar-self']]: item.from === userId
        })}
        size={40}
        src={user?.avatar}
      />
      <div className={styles.cotnent}>
        {roomDetail?.secret ? null : <div className={styles.name}>{user?.name}</div>}
        <div className={styles.popver}>545646</div>
        {isSameHour ? <div className={styles.time}>{item.create_time}</div> : null}
      </div>
    </li>
  )
}

export default Toolset

import { Avatar } from 'antd'
import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { RoomContext } from '../../../service/useRoomDetail'
import styles from './index.module.scss'

export interface ToolsetProps {
  item: IChat
}

const Toolset = ({ item }: ToolsetProps) => {
  const isSameHour = dayjs().isSame(item.create_time, 'hour')

  const roomDetail = useContext(RoomContext)

  const user = roomDetail?.members.find(member => member.user_id === item.from)

  return (
    <li className={styles.toolset}>
      <div className={styles.user}>
        <Avatar size={40} src={user?.avatar} />
        {roomDetail?.secret ? null : <div className={styles.name}>{user?.name}</div>}
      </div>
      <div className={styles.cotnent}>
        <div className={styles.popver}></div>
        {isSameHour ? <div className={styles.time}>{item.create_time}</div> : null}
      </div>
    </li>
  )
}

export default Toolset

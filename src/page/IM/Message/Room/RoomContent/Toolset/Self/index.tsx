import useUserId from '@/hooks/useUserId'
import { RoomContext } from '@/page/IM/Message/service/useRoomDetail'
import { Avatar } from 'antd'
import React, { useContext } from 'react'
import styles from './index.module.scss'

export interface ToolsetProps {
  item: IChat
}

const Toolset = ({ item }: ToolsetProps) => {
  const roomDetail = useContext(RoomContext)

  const user = roomDetail?.members.find(member => member.user_id === item.from)

  return (
    <li className={styles.toolset}>
      <div className={styles.cotnent}>
        <div className={styles.popver}>{item.content}</div>
      </div>
      <Avatar size={40} src={user?.avatar} />
    </li>
  )
}

export default Toolset

import { autoShowTime } from '@/utils/time'
import React from 'react'
import useGroupByTime from './hook/useGroupByTime'
import styles from './index.module.scss'
import Toolset from './Toolset'

export interface RoomContentProps {
  list: IChat[]
}

const RoomContent = ({ list }: RoomContentProps) => {
  const groupByTime = useGroupByTime(list)

  return (
    <ul className={styles.container}>
      {groupByTime.map(item => (
        <React.Fragment key={item.day}>
          <li className={styles['cut-line']}>- {autoShowTime(item.day)} -</li>
          {item.list.map(chat => (
            <Toolset key={chat.chat_id} item={chat} />
          ))}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default RoomContent

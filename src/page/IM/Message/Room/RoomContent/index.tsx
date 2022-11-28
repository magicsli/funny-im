import React from 'react'
import styles from './index.module.scss'
import Toolset from './Toolset'

export interface RoomContentProps {
  list: IChat[]
}

const RoomContent = ({ list }: RoomContentProps) => {
  return (
    <ul className={styles.container}>
      {list.map(item => (
        <Toolset key={item.chat_id} item={item} />
      ))}
    </ul>
  )
}

export default RoomContent

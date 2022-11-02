import AvatarGroup from '@/components/AvatarGroup'
import { autoShowTime } from '@/utils/time'
import React from 'react'
import styles from './index.module.scss'

export interface ChatItemProps {
  item: IRoom
}

const ChatItem = ({ item }: ChatItemProps) => {
  // const name = item.

  return (
    <div className={styles.card}>
      <AvatarGroup
        size={40}
        avatars={[
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'
        ]}
      />
      <div className={styles['card-content']}>
        <div className={styles['card-header']}>
          <div className={styles['card-name']}>{item?.room_id || ''}</div>
          <div className={styles['card-time']}>{autoShowTime(1663483243839)}</div>
        </div>
        <div className={styles['card-info']}>
          <div className={styles['card-message']}>我擦汗哦我的请问请问琼文u就</div>
          <div className={styles['card-tools']}></div>
        </div>
      </div>
    </div>
  )
}

export default ChatItem

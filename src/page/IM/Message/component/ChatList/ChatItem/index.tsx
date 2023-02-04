import AvatarGroup from '@/components/AvatarGroup'
import useUserId from '@/hooks/useUserId'
import { MessageRouterPath } from '@/router/path'
import { autoShowTime } from '@/utils/time'
import { maxNumLenght } from '@/utils/tool'
import classNames from 'classnames'
import { useMemo } from 'react'
import { generatePath, NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export interface ChatItemProps {
  item: IRoomWidthLast
}

const ChatItem = ({ item }: ChatItemProps) => {
  const userId = useUserId()

  const { name, avatars } = useMemo(
    () => ({
      name: item.secret ? item.members.find(user => user.user_id !== userId)?.name : item.name,
      avatars: item.members.map(user => user.avatar)
    }),
    [item]
  )

  // 点击卡片跳转至指定的聊天室
  const roomPath = generatePath(MessageRouterPath.Room, {
    id: item.room_id
  })

  return (
    <NavLink
      to={roomPath}
      className={active =>
        classNames(styles.card, {
          [styles['card-active']]: active.isActive
        })
      }>
      <AvatarGroup size={40} avatars={avatars} />
      <div className={styles['card-content']}>
        <div className={styles['card-header']}>
          <div className={styles['card-name']}>{name}</div>
          <div className={styles['card-time']}>
            {autoShowTime(item.last?.create_time || item.create_time)}
          </div>
        </div>
        <div className={styles['card-info']}>
          <div className={styles['card-message']}>{item.last?.content}</div>
          {item.unread ? (
            <div className={styles['card-tools']}>{maxNumLenght(item.unread)}</div>
          ) : null}
        </div>
      </div>
    </NavLink>
  )
}

export default ChatItem

import { IMRouterPath } from '@/router/path'
import RoomApi from '@/service/room'
import userApi from '@/service/user'
import React, { useEffect, useState } from 'react'
import { useNavigate, generatePath, parsePath } from 'react-router'
import styles from './index.module.scss'

export interface Friendrops {}

const Friend = () => {
  const Navigate = useNavigate()

  const [friends, setFriends] = useState<IUser[]>([])
  useEffect(() => {
    userApi.getFriends().then(setFriends)
  }, [])

  const handlerEnterRoom = (id: string) => {
    // 生成/进入 私聊室
    RoomApi.createSecretRoom(id).then(res => {
      Navigate(
        generatePath(IMRouterPath.Message, {
          id: res.room_id
        })
      )
    })
  }

  return (
    <div className={styles.friend}>
      {friends?.map(item => (
        <div
          className={styles.card}
          key={item.user_id}
          onClick={() => handlerEnterRoom(item.user_id)}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default Friend

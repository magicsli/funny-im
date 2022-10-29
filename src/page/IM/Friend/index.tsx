import { IMRouterPath, RootRouterPath } from '@/router/path'
import RoomApi from '@/service/room'
import userApi from '@/service/user'
import React, { useEffect, useState } from 'react'
import { useNavigate, generatePath } from 'react-router'
import styles from './index.module.scss'

export interface Friendrops {}

const Friend = () => {
  const Navigate = useNavigate()

  const [friends, setFriends] = useState<IUser[]>([])
  useEffect(() => {
    userApi.getFriends().then(setFriends)
  }, [])

  const handlerEnterRoom = (id: string) => {
    RoomApi.getRoomDetail(id).then(res => {
      Navigate(
        generatePath(IMRouterPath.Message, {
          id: res._id
        })
      )
    })
  }

  return (
    <div className={styles.friend}>
      {friends?.map(item => (
        <div className={styles.card} key={item._id} onClick={() => handlerEnterRoom(item._id)}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default Friend

import React from 'react'
import styles from './index.module.scss'

export interface RoomHeader {}

const RoomHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>username@email.com</div>
      <div className={styles.online}>
        <span className={styles.status} />
        在线
      </div>
      <div className={styles.controller}>
        <div></div>
      </div>
    </div>
  )
}

export default RoomHeader

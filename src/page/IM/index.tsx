import Socket from '@/service/socket'
import userApi from '@/service/user'
import { useCallback, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './component/Aside'
import Header from './component/Header'

import styles from './index.module.scss'

const IM = () => {
  const onSocket = useCallback(() => {
    const socket = new Socket()
  }, [])

  return (
    <div className={styles.im}>
      <Header />
      <div className={styles.main} onClick={onSocket}>
        <Aside />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default IM

import useSubscribe from '@/hooks/useSubscribe'
import { publish } from '@/utils/pubsub'
import { PubSocket } from '@/utils/pubsub/typings'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './component/Aside'
import Header from './component/Header'

import styles from './index.module.scss'

const IM = () => {
  return (
    <div className={styles.im}>
      <Header />
      <div className={styles.main}>
        <Aside />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default IM

import Iconfont from '@/components/IconFont'
import { RootState } from '@/redux'
import { IMRouterPath } from '@/router/path'
import { Avatar, Tooltip } from 'antd'
import cs from 'classnames'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const navList = [
  {
    path: IMRouterPath.Message,
    icon: 'icon-xiaoxi2-m',
    title: '聊天',
    key: 'message'
  },
  {
    path: IMRouterPath.firend,
    icon: 'icon-a-bumenzhiwu',
    title: '好友',
    key: 'firend'
  },
  {
    path: IMRouterPath.me,
    icon: 'icon-gerenzhongxin-m',
    title: '我的',
    key: 'me'
  }
]

export type Asiderops = {}
const Aside = () => {
  const userInfo = useSelector<RootState, IUser>(state => state.user)
  console.log('userInfo', userInfo)

  return (
    <aside className={styles.aside}>
      <div className={styles.user}>
        <Tooltip title={userInfo.name} placement='bottomLeft'>
          <Avatar size={50} src={userInfo.avatar} />
        </Tooltip>
      </div>
      <div className={styles.nav}>
        {navList.map(item => (
          <NavLink
            to={item.path}
            key={item.key}
            className={active =>
              cs(styles['nav-item'], {
                [styles.active]: active.isActive
              })
            }>
            <Iconfont name={item.icon} />
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default Aside

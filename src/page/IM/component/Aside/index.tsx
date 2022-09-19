import Iconfont from '@/components/IconFont'
import { RootState } from '@/redux'
import { IUser } from '@/redux/user'
import { IMRouterPath } from '@/router/path'
import { Avatar, Tooltip } from 'antd'
import cs from 'classnames'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
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
  const location = useLocation()
  const navigate = useNavigate()

  const userInfo = useSelector<RootState, IUser>(state => state.user)

  return (
    <aside className={styles.aside}>
      <div className={styles.user}>
        <Tooltip title={userInfo.name} placement='bottomLeft'>
          <Avatar size={50} src={userInfo.avatar} />
        </Tooltip>
      </div>
      <div className={styles.nav}>
        {navList.map(item => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            className={cs(styles['nav-item'], {
              [styles.active]: location.pathname === item.path
            })}>
            <Iconfont name={item.icon} />
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Aside

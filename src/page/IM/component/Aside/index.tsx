import Iconfont from '@/components/IconFont'
import { IMRouterPath, RootRouterPath } from '@/router/path'
import cs from 'classnames'
import { useLocation, useMatch, useMatches, useNavigate, useResolvedPath } from 'react-router'
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

  return (
    <aside className={styles.aside}>
      <div className={styles.nav}>
        {navList.map(item => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            className={cs(styles['nav-item'], {
              [styles.active]: location.pathname === item.path
            })}>
            <Iconfont name={item.icon} />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Aside

import classNames from 'classnames'
import React from 'react'
import styles from './index.module.scss'

export interface AvatarGroupProps {
  avatars: string[]
  size?: number | string
  classname?: string
  style?: React.CSSProperties
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, size, classname, style }) => {
  return (
    <ul
      className={classNames(styles.avatar, classname)}
      style={{
        width: size,
        height: size,
        ...style
      }}>
      {avatars.map((item, index) => (
        <li
          className={styles['avatar-card']}
          key={item + index}
          style={{
            backgroundImage: `url(${item})`
          }}
        />
      ))}
    </ul>
  )
}

export default React.memo(AvatarGroup)

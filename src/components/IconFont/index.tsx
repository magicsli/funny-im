import classnames from 'classnames'
import styles from './index.module.scss'
export interface IconFontProps {
  name: string
  size?: number | string
  color?: string
  classname?: string
  style?: React.CSSProperties
}

const Iconfont: React.FC<IconFontProps> = ({ name, classname, style, size, color }) => {
  return (
    <svg
      style={{
        fontSize: size,
        color,
        ...style
      }}
      className={classnames(styles.icon, classname)}
      aria-hidden='true'>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Iconfont

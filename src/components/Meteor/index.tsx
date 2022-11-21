import { HTMLAttributes } from 'react'
import styles from './index.module.scss'

export interface MeteorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'ref'> {
  zIndex?: number
}

const Meteor: React.FC<MeteorProps> = props => {
  const { zIndex, style, ...deepAttr } = props

  return (
    <div
      className={styles.container}
      style={{
        ...style,
        zIndex
      }}
      {...deepAttr}>
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
      <div className={styles.meteor} />
    </div>
  )
}

export default Meteor

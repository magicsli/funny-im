import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import styles from './index.module.scss'

export interface LoadingContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** jump模块大小， 默认1em */
  size?: number
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({ size, className, ...deepAttr }) => {
  return (
    <div className={classNames(className, styles.content)} {...deepAttr}>
      <div
        className={styles.block}
        style={
          {
            '--size': size ? `${size}px` : '1em'
          } as React.CSSProperties
        }
      />
    </div>
  )
}

export default React.memo(LoadingContainer)

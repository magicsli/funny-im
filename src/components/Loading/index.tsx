import { useSize } from 'ahooks'
import classNames from 'classnames'
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  loading: boolean
  tips?: string
  size?: React.CSSProperties['fontSize']
}

const Loading: React.FC<LoadingProps> = props => {
  const { loading, size, className, tips = 'loading', children, ...deepAttr } = props

  const tipsArr = tips.split('')
  const containerRef = useRef<HTMLDivElement>(null)

  const rectInfo = useSize(containerRef)
  const [chatSize, setChatSize] = useState(50)

  useEffect(() => {
    if (rectInfo?.width && rectInfo.width) {
      setChatSize(Math.max(rectInfo?.width / 10, 50))
    }
  }, [rectInfo])

  return (
    <div className={classNames(className, styles.container)} {...deepAttr}>
      {loading ? (
        <div
          ref={containerRef}
          className={styles.tips}
          style={{
            fontSize: size || chatSize
          }}>
          {tipsArr.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.char}
                style={
                  {
                    '--delay': `${0.15 * (index + 1)}s`
                  } as React.CSSProperties
                }>
                <span className={styles.source}>{item}</span>
                <span className={styles.overlay}>{item}</span>
                <span className={styles.shadow}>{item}</span>
              </div>
            )
          })}
        </div>
      ) : null}

      {children}
    </div>
  )
}

export default React.memo(Loading)

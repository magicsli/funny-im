import { useSize } from 'ahooks'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

export interface LoadingContainerProps {
  tips?: string
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({ tips = 'loading' }) => {
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
    <div
      ref={containerRef}
      className={styles.tips}
      style={{
        fontSize: chatSize
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
  )
}

export default React.memo(LoadingContainer)

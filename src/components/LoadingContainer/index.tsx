import classNames from 'classnames'
import React, { HTMLAttributes, useMemo } from 'react'
import styles from './index.module.scss'
import Shadow from './Shadow'

export interface LoadingContainerProps extends HTMLAttributes<HTMLDivElement> {
  loading: boolean

  /**
   * loading的内容，预设内容 shadow(文字阴影过渡)
   **/
  content?: React.ReactElement | 'shadow'
}

const LoadingContainer: React.FC<LoadingContainerProps> = props => {
  const { loading, className, content = 'shadow', children, ...deepAttr } = props

  const loadingComponent = useMemo(() => {
    switch (content) {
      case 'shadow':
        return <Shadow />

      default:
        return content
    }
  }, [content])

  return (
    <div className={classNames(className, styles.container)} {...deepAttr}>
      {loading ? loadingComponent : null}
      {children}
    </div>
  )
}

export default React.memo(LoadingContainer)

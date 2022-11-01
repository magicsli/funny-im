import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCanvas from '../../hooks/useCanvas'
// import { myAxios as myAxiosChild } from '../../service/request'
import styles from './index.module.scss'

export type CanvasProps = {
  value: any
}

const CanvasMap: React.FC<CanvasProps> = ({ value }) => {
  const { canvasRef } = useCanvas()

  const temp = useRef(true)

  useEffect(() => {
    let flag = true

    setTimeout(() => {
      flag && console.log('执行')
    }, 2000)

    return () => {
      flag = false
      console.log('temp.current', temp)
    }
  }, [])

  return (
    <div>
      <div className={styles.title}>xxx开始画了</div>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default CanvasMap

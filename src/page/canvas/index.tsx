import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCanvas from '../../hooks/useCanvas'
import testApi from '../../service/test'
// import { myAxios as myAxiosChild } from '../../service/request'
import styles from './index.module.scss'

export type CanvasProps = {
  value: any
}

const CanvasMap: React.FC<CanvasProps> = ({ value }) => {
  const { canvasRef } = useCanvas()

  // console.log('导出的同一个对象是不是同一个', value, value === myAxiosChild)

  useEffect(() => {
    const login = testApi.postLogin()

    login
      .then(res => {
        console.log('login result', res.data)
      })
      .catch(err => {
        err.message && alert(err.message)
      })

    return () => {
      login.cancel()
    }
  }, [])

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

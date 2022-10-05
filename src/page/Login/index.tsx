import { update as updateUser } from '@/redux/user'
import { RootRouterPath } from '@/router/path'
import { setTimeoutPromise } from '@/utils/tool'
import { Button, Input, message } from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

export type LoginProps = {}

const Login = () => {
  const dispath = useDispatch()
  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  const handleQuick = () => {
    setUsername(`游客账号@${dayjs().format('YYYYMMDD')}`)
    setPassword('password@123')
  }

  const handleLogin = async () => {
    setLoading(true)
    await setTimeoutPromise(3000)
    setLoading(false)

    dispath(
      updateUser({
        name: username,
        id: 'u5487930',
        create_time: +new Date(),
        avatar:
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'
      })
    )

    Navigate(RootRouterPath.IM)

    message.success('登录成功！！！')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Input.Group>
          <div className={styles.user}>
            <div className={styles.label}>账号：</div>
            <Input
              className={styles.input}
              placeholder='请输入用户Id/用户名'
              onChange={e => setUsername(e.currentTarget?.value.trim())}
              value={username}
            />
          </div>

          <div className={styles.password}>
            <div className={styles.label}>密码：</div>
            <Input.Password
              className={styles.input}
              placeholder='请输入密码...'
              value={password}
              onPressEnter={handleLogin}
              onChange={e => setPassword(e.currentTarget?.value.trim())}
            />
          </div>
        </Input.Group>

        <div className={styles.handler}>
          <Button
            loading={loading}
            className={styles['btn-login']}
            type='primary'
            onClick={handleLogin}>
            登录
          </Button>
          <div className={styles.tips}>
            <div className={styles.quick} onClick={handleQuick}>
              游客快速登录
            </div>
            <div className={styles.register}>注册</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

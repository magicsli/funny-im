import { update as updateUser } from '@/redux/user'
import { RootRouterPath } from '@/router/path'
import { setTimeoutPromise } from '@/utils/tool'
import { Button, Input, message } from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

const Register = () => {
  const dispath = useDispatch()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [confirm, setConfirm] = useState('')

  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  const handleRegister = async () => {
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

  const handleGoLogin = () => {
    Navigate(RootRouterPath.Login)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Input.Group>
          <div className={styles.user}>
            <div className={styles.label}>用户名：</div>
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
              placeholder='请输入密码'
              value={password}
              onPressEnter={handleRegister}
              onChange={e => setPassword(e.currentTarget?.value.trim())}
            />
          </div>

          <div className={styles.password}>
            <div className={styles.label}>确认密码：</div>
            <Input.Password
              className={styles.input}
              placeholder='请再次输入密码'
              value={password}
              onPressEnter={handleRegister}
              onChange={e => setPassword(e.currentTarget?.value.trim())}
            />
          </div>
        </Input.Group>

        <div className={styles.handler}>
          <Button
            loading={loading}
            className={styles['btn-login']}
            type='primary'
            onClick={handleRegister}>
            注册
          </Button>
          <div className={styles.tips}>
            <div className={styles.login} onClick={handleGoLogin}>
              前往登录
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

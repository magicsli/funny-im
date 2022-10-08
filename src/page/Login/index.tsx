import { update as updateUser } from '@/redux/user'
import { RootRouterPath } from '@/router/path'
import userApi from '@/service/user'
import { setTimeoutPromise } from '@/utils/tool'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

export interface LoginForm {
  username: string
  password: string
}

const Login = () => {
  const dispath = useDispatch()

  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  const handleLogin = async (fromData: LoginForm) => {
    const { username, password } = fromData

    setLoading(true)

    userApi.login({
      username,
      password
    })

    await setTimeoutPromise(3000)
    setLoading(false)

    message.success('登录成功！！！')
  }

  const handleGoLogin = () => {
    Navigate(RootRouterPath.Login)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Form name='control-hooks' form={form} onFinish={handleLogin}>
          <Form.Item
            name='username'
            label='用户名：'
            rules={[{ required: true, message: '用户名不能为空！' }]}>
            <Input className={styles.input} placeholder='请输入用户Id/用户名' />
          </Form.Item>
          <Form.Item
            name='password'
            label='密码：'
            rules={[{ required: true, message: '密码不能为空！' }]}>
            <Input.Password
              visibilityToggle={false}
              className={styles.input}
              placeholder='请输入密码'
            />
          </Form.Item>
        </Form>

        <div className={styles.handler}>
          <Button
            loading={loading}
            className={styles['btn-login']}
            type='primary'
            onClick={form.submit}>
            登录
          </Button>
          <div className={styles.tips}>
            <div className={styles.login} onClick={handleGoLogin}>
              前往注册
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

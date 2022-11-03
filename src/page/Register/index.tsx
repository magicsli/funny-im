import { replace } from '@/redux/user'
import { RootRouterPath } from '@/router/path'
import userApi from '@/service/user'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

export interface RegisterForm {
  username: string
  password: string
}

const Register = () => {
  const dispath = useDispatch()

  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  const handleRegister = (fromData: RegisterForm) => {
    const { username, password } = fromData

    setLoading(true)

    userApi
      .register({
        username,
        password
      })
      .then(result => {
        dispath(replace(result))
        message.success('登录成功！！！')
        Navigate(RootRouterPath.IM)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleGoLogin = () => {
    Navigate(RootRouterPath.Login)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Form name='control-hooks' form={form} onFinish={handleRegister}>
          <Form.Item
            hasFeedback
            name='username'
            label='用户名：'
            rules={[{ required: true, message: '用户名不能为空！' }]}>
            <Input className={styles.input} placeholder='请输入用户Id/用户名' />
          </Form.Item>
          <Form.Item
            name='password'
            label='密码：'
            hasFeedback
            rules={[{ required: true, message: '密码不能为空！' }]}>
            <Input.Password
              visibilityToggle={false}
              className={styles.input}
              placeholder='请输入密码'
            />
          </Form.Item>

          <Form.Item
            name='password_confirm'
            label='确认密码：'
            hasFeedback
            rules={[
              { required: true, message: '请再次输入密码！' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次输入的密码不一致！'))
                }
              })
            ]}>
            <Input.Password className={styles.input} placeholder='请再次输入密码' />
          </Form.Item>
        </Form>

        <div className={styles.handler}>
          <Button
            loading={loading}
            className={styles['btn-login']}
            type='primary'
            onClick={form.submit}>
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

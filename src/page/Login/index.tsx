import Meteor from '@/components/Meteor'
import { login } from '@/redux/user'
import { RootRouterPath } from '@/router/path'
import userApi from '@/service/user'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'
import { useAsyncEffect } from 'ahooks'
export interface LoginForm {
  username: string
  password: string
}

const Login = () => {
  const dispath = useDispatch()

  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  useAsyncEffect(async () => {
    const peer = new RTCPeerConnection({
      iceCandidatePoolSize: 4,
      iceServers: [{ urls: 'stun:stun1.l.google.com:19302', username: '', credential: '' }]
    })
    const peer2 = new RTCPeerConnection({
      iceCandidatePoolSize: 4,
      iceServers: [
        { urls: 'stun:stun1.l.google.com:19302', username: '', credential: '' },
        {
          urls: 'stun:turn.mywebrtc.com'
        }
      ]
    })
    const data1 = peer.createDataChannel('213')

    const offer = await peer.createOffer()
    await peer.setLocalDescription(offer)
    await peer2.setRemoteDescription(offer)

    const answer = await peer2.createAnswer()
    await peer2.setLocalDescription(answer)
    await peer.setRemoteDescription(answer)

    peer.onconnectionstatechange = e => {
      console.log('onconnectionstatechange', e)
    }

    peer2.onconnectionstatechange = e => {
      console.log('onconnectionstatechange', e)
    }

    peer.onicecandidate = ice => {
      console.log('peer ice', ice)

      ice.candidate && peer2.addIceCandidate(ice.candidate)
    }

    peer2.onicecandidate = ice => {
      console.log('peer2 ice', ice)

      ice.candidate && peer.addIceCandidate(ice.candidate)
    }

    data1.onopen = event => {
      console.log('peer2 onopen', event)

      data1.send('meesage')
    }

    peer2.ondatachannel = data => {
      console.log('ondatachannel', data)
      data.channel.onmessage = mes => {
        console.log('onmessage', mes)
      }
    }
  }, [])

  const handleLogin = (fromData: LoginForm) => {
    const { username, password } = fromData

    setLoading(true)

    userApi
      .login({
        username,
        password
      })
      .then(result => {
        message.success('登录成功！！！')
        dispath(login(result))
        Navigate(RootRouterPath.IM)
      })
      .catch(error => {
        if (error.code === 500) {
          message.error(error.message || '登录失败！请重试')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleGoRegister = () => {
    Navigate(RootRouterPath.Register)
  }

  // 游客登录
  const handleVisitor = () => {
    userApi.visitor().then(result => {
      message.success('登录成功！！！')
      dispath(login(result))
      Navigate(RootRouterPath.IM)
    })
  }

  return (
    <div className={styles.container}>
      <Meteor />
      <div className={styles.card}>
        <Form name='control-hooks' requiredMark={false} form={form} onFinish={handleLogin}>
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
            <div className={styles.visitor} onClick={handleVisitor}>
              游客登录
            </div>
            <div className={styles.register} onClick={handleGoRegister}>
              前往注册
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

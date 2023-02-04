import { ConfigProvider, Input } from 'antd'
import { useCallback, useState } from 'react'
import styles from './index.module.scss'

export interface RichTextProps {
  onPush: (mes: string) => Promise<false | IChat>
}

const RichText = ({ onPush }: RichTextProps) => {
  const [message, setMessage] = useState('')

  const handlePush = useCallback(() => {
    onPush(message)
  }, [message])

  return (
    <div className={styles.contianer}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b'
          }
        }}>
        <Input
          type='text'
          className={styles.input}
          value={message}
          onChange={e => setMessage(e.target.value)}
          onPressEnter={handlePush}
        />
      </ConfigProvider>
    </div>
  )
}

export default RichText

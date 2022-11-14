import { Input } from 'antd'
import { useState } from 'react'
import styles from './index.module.scss'

export interface RichTextProps {
  onPush: (mes: string) => Promise<false | IChat>
}

const RichText = ({ onPush }: RichTextProps) => {
  const [message, setMessage] = useState('')

  const handlePush = () => {
    onPush(message).then(res => {
      res && setMessage('')
    })
  }

  return (
    <div className={styles.contianer}>
      <Input
        value={message}
        onChange={e => setMessage(e.target.value?.trim())}
        onPressEnter={handlePush}
        type='text'
      />
    </div>
  )
}

export default RichText

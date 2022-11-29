import styles from './index.module.scss'

export interface MessageProps {
  item: IChat
}

const Message = ({ item }: MessageProps) => {
  return <span className={styles.message}>{item.content}</span>
}

export default Message

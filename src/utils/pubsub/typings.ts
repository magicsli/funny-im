
/**
 * 所有通过socket发送的订阅发布事件
 * @Chat chat_* 即为 聊天模块内的code
 */
export enum PubSocket {
  // 聊天模块
  CHAT_SEND_1 = 'CHAT_SEND_1' // 发送消息
}

/**
 * 内部触发的订阅发布事件
 */
export enum PubLocal {
  TEST = 'TEST'
}

export interface PubSubMap {
  [PubSocket.CHAT_SEND_1]: string
  [PubLocal.TEST]: string
}

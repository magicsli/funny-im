/**
 * 所有通过socket发送的订阅发布事件
 * @Chat chat_* 即为 聊天模块内的code
 */
export enum PubSocket {
  // 聊天模块
  BASE_MES_1 = 'BASE_SEND_MES_1' // 发送消息
}

/**
 * 内部触发的订阅发布事件
 */
export enum PubLocal {
  TEST = 'TEST'
}

export interface PubSubMap {
  [PubSocket.BASE_MES_1]: string
  [PubLocal.TEST]: string
}

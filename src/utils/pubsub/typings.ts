/**
 * 所有通过socket发送的订阅发布事件
 * @Chat chat_* 即为 聊天模块内的code
 */
export enum PubSocket {
  // 聊天模块
  SOCKET_MES_1 = 'SOCKET_MES_1', // 发送消息
  SOCKET_ACTIVE_200 = 'SOCKET_ACTIVE_200' // socket绑定成功
}

/**
 * 内部触发的订阅发布事件
 */
export enum PubLocal {
  TEST = 'TEST'
}

export interface PubSubMap {
  [PubSocket.SOCKET_MES_1]: string
  [PubSocket.SOCKET_ACTIVE_200]: string
  [PubLocal.TEST]: string
}

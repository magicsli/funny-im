/**
 * 所有通过socket发送的订阅发布事件
 * @Chat chat_* 即为 聊天模块内的code
 */
export enum PubSocket {
  // SOCKET_ 开头的key会自当注入至socket监听中。
  SOCKET_MES_1 = 'SOCKET_MES_1', // 发送消息
  SOCKET_ACTIVE_200 = 'SOCKET_ACTIVE_200' // socket绑定成功
}

export enum RTCSocket {
  RTC_ACCEPT = 'RTC_ACCEPT' // 等待回应
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
  [RTCSocket.RTC_ACCEPT]: RTCSessionDescriptionInit
  [PubLocal.TEST]: string
}

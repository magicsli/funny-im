declare enum PubSocket {
  CHAT_SEND_1 = 'CHAT_SEND_1' // socket 1 发送消息
}

declare enum PubLocal {
  TEST = 'TEST'
}

declare interface PubSubMap {
  [PubSocket.CHAT_SEND_1]: string
  [PubLocal.TEST]: string
}

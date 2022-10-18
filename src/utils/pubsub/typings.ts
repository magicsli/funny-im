export enum PubSocket {
  CHAT_SEND_1 = 'CHAT_SEND_1' // socket 1 发送消息
}

export enum PubLocal {
  TEST = 'TEST'
}

export interface PubsubMap {
  [PubSocket.CHAT_SEND_1]: string
  [PubLocal.TEST]: string
}

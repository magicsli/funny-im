import { io, Socket } from 'socket.io-client'

export default class SocketIo {
  public webSocket?: Socket

  constructor() {
    this.webSocket = io('ws://localhost:3001')

    this.webSocket?.on('connect', () => {
      console.log(`SOCKET CONNTECTION！！！ \n\t KEY：${this.webSocket?.id}\n`)
    })

    // 注册socket中的pubsub
    this.registerListen()
  }

  /**
   * 注册响应回调
   * 所有的socket全部通过pubsub进行发送
   */
  registerListen() {
    this.webSocket?.on('message', value => {
      console.log('socket mesage:', value)
    })
  }

  close() {
    return this.webSocket?.close()
  }
}

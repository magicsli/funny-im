import { io, Socket } from 'socket.io-client'

export default class SocketIo {
  public webSocket?: Socket
  public chatSocket?: Socket

  constructor() {
    this.webSocket = io('ws://localhost:3001')
    this.chatSocket = io('ws://localhost:3001/chat')

    this.webSocket?.on('connect', () => {
      console.log(`SOCKET CONNTECTION！！！ \n\t KEY：${this.webSocket?.id}\n`)

      setTimeout(() => {
        console.log(' this.webSocket?.connected', this.webSocket?.connected)

        this.chatSocket?.emit('send', '!!!!')
      }, 3000)
    })

    // 注册socket中的pubsub
    this.registerListen()
  }

  /**
   * 注册响应回调
   * 所有的socket全部通过pubsub进行发送
   */
  registerListen() {
    this.chatSocket?.on('message', value => {
      console.log('socket mesage:', value)
    })

    this.chatSocket?.on('send', value => {
      console.log('socket chat:', value)
    })
  }

  close() {
    return this.webSocket?.close()
  }
}

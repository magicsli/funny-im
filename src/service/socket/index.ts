import { publish } from '@/utils/pubsub'
import { PubSocket } from '@/utils/pubsub/typings'
import { io, Socket } from 'socket.io-client'

export class SocketIo {
  socket?: Socket

  name = 'Base'

  constructor() {
    this.socket = io('ws://localhost:3001', {
      autoConnect: false
    })

    this.socket?.on('connect', () => {
      console.log(`SOCKET ${this.name} CONNTECTION！！！ \n\t KEY：${this.socket?.id}\n`)
    })

    this.registerListen()
  }

  /**
   * 连接socket
   * @returns 当前的socket实例
   */
  connect() {
    return this.socket?.connect()
  }

  /**
   * 关闭连接
   * @returns 当前的socket实例
   */
  close() {
    return this.socket?.close()
  }

  /**
   * 断开连接
   * @returns 当前的socket实例
   */
  disconnect() {
    return this.socket?.disconnect()
  }

  /**
   * 注册响应回调
   * 所有的socket全部通过pubsub进行发送
   */
  registerListen() {
    // 将pubsocket中的所有类型全局注入至chat模块中
    Object.keys(PubSocket).forEach(key => {
      const checkModule = /^Base_/i.test(key)

      const code = /_(\d+)$/i.exec(key)
      if (checkModule && code) {
        this.socket?.on(code[1], socketMessage => {
          publish(key as PubSocket, socketMessage)
        })
      }
    })
  }
}

export const socket = new SocketIo()

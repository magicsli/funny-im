import { publish } from '@/utils/pubsub'
import { PubSocket } from '@/utils/pubsub/typings'
import { io, Socket } from 'socket.io-client'

/**
 * 聊天模块socket
 * 注意： 在连接聊天socket 前， 必须要连接初始base socket连接， 否则无法连接成功
 */
export class ChatSocketIo {
  public socket?: Socket
  name = 'Chat'

  constructor() {
    this.socket = io('ws://localhost:3001/chat', {
      autoConnect: false
    })

    this.socket?.on('connect', () => {
      console.log(`SOCKET ${this.name} CONNTECTION！！！ \n\t KEY：${this.socket?.id}\n`)
    })

    // 注册socket中的pubsub
    this.registerListen()
  }

  /**
   * 连接socket
   * @tips 在连接聊天socket 前， 必须要连接初始base socket连接， 否则无法连接成功
   * @returns 当前的socket实例
   */
  connect() {
    return this.socket?.connect()
  }

  /**
   * 关闭连接
   * @tips 在连接聊天socket 前， 必须要连接初始base socket连接， 否则无法连接成功
   * @returns 当前的socket实例
   */
  disconnect() {
    return this.socket?.disconnect()
  }

  /**
   * 关闭通道
   * @returns 当前的socket实例
   */
  close() {
    return this.socket?.close()
  }

  /**
   * 注册响应回调
   * 所有的socket全部通过pubsub进行发送
   */
  registerListen() {
    // 将pubsocket中的所有类型全局注入至chat模块中
    Object.keys(PubSocket).forEach(key => {
      // 是否为聊天模块的
      const checkModule = /^Chat_/i.test(key)

      const code = /_(\d+)$/i.exec(key)

      if (checkModule && code) {
        this.socket?.on(code[1], socketMessage => {
          publish(key as PubSocket, socketMessage)
        })
      }
    })
  }
}

export const chatSocket = new ChatSocketIo()

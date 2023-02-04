import { publish } from '@/utils/pubsub'
import { PubSocket } from '@/utils/socket/pub'
import { io, Socket } from 'socket.io-client'
import { EMIT_KEY, EMIT_VALUE } from './Emit'

export class SocketIo {
  socket: Socket
  userId?: string

  name = 'Base'

  constructor() {
    this.socket = io('ws://localhost:3001', {
      autoConnect: false
    })

    this.socket?.on('connect', () => {
      console.log(`SOCKET ${this.name} CONNTECTION！！！ \n\t KEY：${this.socket?.id}\n`)
      this.registerListen()
      this.socket.emit(EMIT_KEY.active, this.userId)
    })
  }

  /**
   * 连接socket
   * @param userId 当前连接的用户ID
   * @returns 当前的socket实例
   */
  connect(userId: string) {
    this.userId = userId
    const connection = this.socket.connect()
    return connection
  }

  /**
   * 关闭连接
   * @returns 当前的socket实例
   */
  close() {
    this.userId = undefined
    return this.socket.close()
  }

  /**
   * 断开连接
   * @returns 当前的socket实例
   */
  disconnect() {
    this.userId = undefined
    return this.socket.disconnect()
  }

  /**
   * 注册监听事件
   * @returns 销毁这个事件的监听
   */
  on<T = any>(key: string, handle: (e: T) => void) {
    this.socket?.on(key, handle)
    return () => {
      this.socket.removeListener(key, handle)
    }
  }

  /**
   * 注册一个一次性的监听事件， 接受完后自动销毁
   */
  once<T = any>(key: string, handle: (e: T) => void) {
    return this.socket?.once(key, handle)
  }

  /**
   * 注册响应回调
   * 所有的socket全部通过pubsub进行发送
   */
  registerListen() {
    // 将pubsocket中的所有类型全局注入至chat模块中
    Object.keys(PubSocket).forEach(key => {
      const checkModule = /^SOCKET_/i.test(key)

      const code = /_(\d+)$/i.exec(key)
      if (checkModule && code) {
        this.socket?.on(code[1], socketMessage => {
          console.log(`SOCKET事件 【${key}】`, socketMessage)

          publish(key as PubSocket, socketMessage)
        })
      }
    })
  }

  /**
   * 向服务端派发事件
   * @param key 事件关键字
   * @param value 传输的值
   * @returns 请求结果 false | socket实例
   */
  emit<T extends EMIT_KEY>(key: T, value: EMIT_VALUE[T]) {
    if (!this.socket.connected) {
      return false
    }

    return this.socket!.emit(key, value)
  }
}

export const socket = new SocketIo()

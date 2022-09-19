/**
 * url: socket地址
 * vision： 连接版本
 * wss: 是否开启加密连接（对应https）
 */
export interface SocketOptions {
  url?: string
  port?: number
  vision?: number
}

export default class Socket {
  public url = ''
  public port?: number
  public vision = 1

  public webSocket?: WebSocket

  constructor(options: SocketOptions) {
    const { url = this.url, port = this.port, vision = this.vision } = options

    this.url = url
    this.port = port
    this.vision = vision

    this.webSocket = new WebSocket(`wss:${url + (port ? `:${port}` : '')}`)

    // 注册socket中的pubsub
    this.registerListen()
  }

  /**
   * 注册响应回调
   * 所有的socket全部通过pubsub进行发送
   */
  registerListen() {}

  close() {
    return this.webSocket?.close()
  }
}

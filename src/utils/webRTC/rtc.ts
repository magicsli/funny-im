const FREE_STURN_SERVERS = [
  {
    urls: 'stun:stun1.l.google.com:19302',
    username: '',
    credential: ''
  },
  {
    urls: 'stun:stun.schlund.de',
    username: '',
    credential: ''
  },
  {
    urls: 'stun:23.21.150.121',
    username: '',
    credential: ''
  }
]

/**
 * RTC封装模型
 * @example
 *  const rtc = new RTC();
 * //  -- 交互规则 --
 * // A创建offer  A: rtc.createOffer(): offer
 * // 发送给B   offer ===> B
 * // B回应offer rtc.answerOffer(offer)： answer
 * // B将answer返回A answer ===> A
 * // A完成连接 rtc.setRemote(answer)
 */
export default class RTC {
  peer?: RTCPeerConnection

  // 本地（发送端） 数据渠道
  localChannels: Record<string, RTCDataChannel> = {}

  // 远端（接收端） 数据渠道
  serviceChannels: Record<string, RTCDataChannel> = {}

  constructor(options?: RTCConfiguration) {
    this.peer = new RTCPeerConnection({
      iceServers: FREE_STURN_SERVERS,
      iceTransportPolicy: 'all',
      ...options
    })
  }

  /**
   * 接受信息
   */
  async answerOffer(offer: RTCSessionDescriptionInit) {
    if (!this.peer) {
      throw new Error('[answerOffer] peerConnection 出现异常')
    }
    const remoteDesc = new RTCSessionDescription(offer)
    await this.peer.setRemoteDescription(remoteDesc)
    const answer = await this.peer.createAnswer(remoteDesc)
    await this.peer.setLocalDescription(answer)
    return answer
  }

  /**
   * 发送连接邀请
   */
  async createOffer(options?: RTCOfferOptions) {
    if (!this.peer) {
      throw new Error('[createOffer] peerConnection 出现异常')
    }
    const offer = await this.peer.createOffer(options)
    await this.peer.setLocalDescription(offer)
    return offer
  }

  /**
   * 接收到回复， 建立连接
   */
  async setRemote(offer: RTCSessionDescriptionInit) {
    if (!this.peer) {
      throw new Error('[setRemote] peerConnection 出现异常')
    }
    const remoteDesc = new RTCSessionDescription(offer)
    await this.peer.setRemoteDescription(remoteDesc)
    return true
  }

  /**
   * ice候选人触发
   * @param handler 处理函数
   */
  onicecandidate(handler: RTCPeerConnection['onicecandidate']) {
    if (!this.peer) {
      throw new Error('[onicecandidate] peerConnection 出现异常')
    }

    this.peer.onicecandidate = handler
  }

  /**
   * 数据渠道触发
   * @param handler 处理函数
   */
  ondataChannel(handler?: (e: RTCDataChannelEvent) => void) {
    if (!this.peer) {
      throw new Error('[ondataChannel] peerConnection 出现异常')
    }

    this.peer.ondatachannel = event => {
      if (event.channel) {
        this.serviceChannels[event.channel.label] = event.channel
        handler && handler(event)
      }
    }
  }

  createDataChannel(...params: Parameters<RTCPeerConnection['createDataChannel']>) {
    if (!this.peer) {
      throw new Error('[createDataChannel] peerConnection 出现异常')
    }

    const dataChannel = this.peer.createDataChannel(...params)
    this.localChannels[dataChannel.label] = dataChannel
  }
}

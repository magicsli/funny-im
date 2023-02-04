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
      throw new Error('peerConnection 出现异常')
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
      throw new Error('peerConnection 出现异常')
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
      throw new Error('peerConnection 出现异常')
    }
    const remoteDesc = new RTCSessionDescription(offer)
    await this.peer.setRemoteDescription(remoteDesc)
    return true
  }
}

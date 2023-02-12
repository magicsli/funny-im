import { socket } from '../socket'
import { EMIT_KEY } from '../socket/Emit'
import { RTCSocket } from '../socket/pub'
import RTC from './rtc'

class UtilRTC extends RTC {
  constructor() {
    super()
  }

  /**
   * 当前ice连接状态
   */
  get state() {
    return this.peer?.iceConnectionState
  }

  /**
   * 建立连接
   * @returns 当前获取的媒体流
   */
  async connect(
    options: {
      dataChannel?: { label: string; init?: RTCDataChannelInit }
      needDataChannel?: boolean
    } = {}
  ) {
    if (!socket.socket.connected) {
      throw new Error('socket 未连接！ 无法进行RTC信令交换')
    }

    const {
      needDataChannel = true,
      dataChannel = {
        label: 'message'
      }
    } = options

    // 注： 数据渠道必须要在连接之前建立， 否则后续就不会触发ICE事件。。。
    if (needDataChannel) {
      this.createDataChannel(dataChannel.label, dataChannel.init)
    }

    const offer = await this.createOffer()
    // 向socket发送offer
    socket.emit(EMIT_KEY.rtc_create, offer)

    // 等待响应
    socket.once<RTCSessionDescriptionInit>(RTCSocket.RTC_ACCEPT, answerOffer => {
      this.setRemote(answerOffer)
    })

    this.onicecandidate(event => {
      // 向socket发送 ice候选完成连接
      event.candidate && socket.emit(EMIT_KEY.rtc_icecandidate, event.candidate)
    })
  }

  /**
   * 建立音视频连接
   * @returns 当前获取的媒体流
   */
  async online() {
    if (this.peer?.iceConnectionState !== 'connected') {
      throw new Error('RTC 未建立连接！')
    }
    const resourceStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true
    })
    resourceStream.getTracks().forEach(track => {
      this.peer?.addTrack(track, resourceStream)
    })

    return resourceStream
  }
}

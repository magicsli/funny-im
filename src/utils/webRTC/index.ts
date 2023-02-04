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
  async connect() {
    if (!socket.socket.connected) {
      throw new Error('socket 未连接！ 无法进行RTC信令交换')
    }

    const offer = await this.createOffer()
    // 向socket发送连接
    socket.emit(EMIT_KEY.rtc_create, offer)
    socket.once<RTCSessionDescriptionInit>(RTCSocket.RTC_ACCEPT, answerOffer => {
      this.setRemote(answerOffer)
    })
  }

  // async on(cofirm?: () => Promise<boolean>) {
  //   if (!cofirm || (await cofirm())) {
  //     socket.on<RTCSessionDescriptionInit>(RTCSocket.RTC_ACCEPT, answerOffer => {
  //       this.setRemote(answerOffer)
  //     })
  //   }
  // }

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

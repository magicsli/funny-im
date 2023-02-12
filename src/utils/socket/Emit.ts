export enum EMIT_KEY {
  active = 'active',
  rtc_create = 'rtc_create',
  rtc_icecandidate = 'rtc_icecandidate'
}

export interface EMIT_VALUE {
  [EMIT_KEY.active]: string
  [EMIT_KEY.rtc_create]: RTCSessionDescriptionInit
  [EMIT_KEY.rtc_icecandidate]: RTCIceCandidate
}

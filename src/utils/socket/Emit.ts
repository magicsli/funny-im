export enum EMIT_KEY {
  active = 'active',
  rtc_create = 'rtc_create'
}

export interface EMIT_VALUE {
  [EMIT_KEY.active]: string
  [EMIT_KEY.rtc_create]: RTCSessionDescriptionInit
}

import { publish as pub, publishSync as pubSync } from 'pubsub-js'

import { PubSocket, PubLocal, PubsubMap } from './typings'

/**
 * 发布
 * @param key 发布的key值
 * @param value 发布的数据
 * @returns 是否广播成功
 */
export const publish = <K extends PubSocket | PubLocal>(key: K, value: PubsubMap[K]) => {
  return pub(key, value)
}

/**
 * 发布
 * @param key 发布的key值
 * @param value 发布的数据
 * @returns 是否广播成功
 */
export const publishSync = <K extends PubSocket | PubLocal>(key: K, value: PubsubMap[K]) => {
  return pubSync(key, value)
}

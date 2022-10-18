import { PubLocal, PubSocket, PubsubMap } from '@/utils/pubsub/typings'
import { subscribe, unsubscribe } from 'pubsub-js'
import { useCallback, useEffect, useRef } from 'react'

/**
 * 订阅hook
 * @param key 订阅关键字
 * @param handler 处理函数
 * @returns 手动取消订阅
 */
const useSubscribe = <K extends PubSocket | PubLocal>(
  key: K,
  handler: PubSubJS.SubscriptionListener<PubsubMap[K]>
) => {
  const subRef = useRef<{
    token?: string
    handler?: PubSubJS.SubscriptionListener<PubsubMap[K]>
  }>({
    token: '',
    handler: undefined
  })

  useEffect(() => {
    subRef.current.handler = handler
  }, [handler])

  useEffect(() => {
    const subToken = subscribe(key, (...args) => {
      subRef.current.handler?.(...args)
    })

    subRef.current.token = subToken

    return () => {
      unsubscribe(subToken)
    }
  }, [key, handler])

  const clearSub = useCallback(() => {
    return subRef.current.token && unsubscribe(subRef.current.token)
  }, [])

  return clearSub
}

export default useSubscribe

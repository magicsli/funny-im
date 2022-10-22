import Cookies from 'js-cookie'

/**
 * 设置一个固定时长完成的promise
 * @param timer 延迟时间
 * @returns 延迟的promise
 */
export const setTimeoutPromise = (timer: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

/**
 * 获取当前的token
 * @tips 默认将token注入与cookies中
 */

export const getToken = () => {
  return Cookies.get('token')
}

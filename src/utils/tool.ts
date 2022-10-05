

/**
 * 设置一个固定时长完成的promise
 * @param timer 延迟时间
 * @returns 延迟的promise
 */
export const setTimeoutPromise = (timer:number):Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer);
  })
}
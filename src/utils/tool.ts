import Cookies from 'js-cookie'

/**
 * 设置一个固定时长完成的promise
 * @param timer 延迟时间
 * @returns 延迟的promise
 */
export const sleep = (timer: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

/**
 * 显示数字最大长度
 * @param num 需要转化的数字
 * @param length 需要的长度 默认 2
 * @returns 生成的 “99+” 字符串
 * @example
 *  maxNumLenght(4521, 2) => '99+'
 *  maxNumLenght(4521, 1) => '9+'
 *  maxNumLenght(4521, 4) => '4521'
 */
export const maxNumLenght = (num: number, length = 2): string => {
  const int = Math.round(num)
  const threshold = Math.pow(10, length)

  return int >= threshold ? `${threshold - 1}+` : `${int}`
}

/**
 *  等待执行次数完成的回调
 * @param step 等待次数
 * @param callback 回调函数
 * @example
 *  {
 *    const waitFunc = waitAll(2, handleSomething)
 *    listen1(() => {
 *      waitFunc()
 *    })
 *
 *    listen2(() => {
 *      // *** 如果此时 listen1 已经回调完了， 则就会触发 handleSomething
 *      waitFunc()
 *    })
 *
 *
 *  }
 */
export const waitAll = (step: number, callback: () => void) => {
  let wait = 1

  return () => {
    if (step >= wait) {
      callback()
    } else {
      wait += 1
    }
  }
}

/**
 * 获取当前的token
 * @tips 登录时默认将token注入与cookies中
 */

export const getToken = () => {
  return Cookies.get('token')
}

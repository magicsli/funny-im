import dayjs from 'dayjs'

/**
 * 数字转为中文
 * @param num 数字
 * @returns 转为中文的数字
 * @example
 *  NumberToCN(12) => '十二'
 *  NumberToCN(102) => '一百零二'
 *  NumberToCN(2) => '二'
 */
export const NumberToCN = (num: number) => {
  const chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const chnUnitChar = ['', '十', '百', '千']
  let strIns = ''
  let chnStr = ''
  let unitPos = 0
  let zero = true
  while (num > 0) {
    const v = num % 10
    if (v === 0) {
      if (!zero) {
        zero = true
        chnStr = chnNumChar[v] + chnStr
      }
    } else {
      zero = false
      strIns = chnNumChar[v]
      strIns += chnUnitChar[unitPos]
      chnStr = strIns + chnStr
      if (chnStr[0] === '一' && chnStr[1] === '十') {
        chnStr = chnStr.replace('一十', '十')
      }
    }
    unitPos++
    num = Math.floor(num / 10)
  }
  return chnStr
}

/**
 * 自动显示时间
 * 如当前不是同一年， 显示 YYYY-MM-DD
 * @param timer 代转换的时间戳
 * @example
 *  // - 距离当前时间
 *  autoShowTime(** 不同年 **) => '2022-08-15 16:23'
 *  autoShowTime(** 同年 但 不同月 **) => '08-15 16:23'
 *  autoShowTime(** 同月 但 不同星期 **) => '08-15 16:23'
 *  autoShowTime(** 同星期 但 不同日 **) => '星期四 16:23'
 *  autoShowTime(** 同日 **) => '16:23'
 *  autoShowTime(** 最近五分钟 **) => '刚刚'
 */
export const autoShowTime = (timer: Parameters<typeof dayjs>[0]) => {
  const now = dayjs()
  const showTime = dayjs(timer)

  if (!showTime.isSame(now, 'year')) {
    return showTime.format('YYYY-MM-DD HH:mm')
  } else if (!showTime.isSame(now, 'month') || !showTime.isSame(now, 'week')) {
    return showTime.format('MM-DD HH:mm')
  } else if (!showTime.isSame(now, 'day')) {
    return `星期${NumberToCN(showTime.day())} ${showTime.format('HH:mm')}`
  } else if (showTime.diff(now, 'm') <= 5) {
    return '刚刚'
  } else {
    return showTime.format('HH:mm')
  }
}

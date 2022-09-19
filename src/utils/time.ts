import dayjs from 'dayjs'

/**
 * 自动显示时间
 * 如当前不是同一年， 显示 YYYY-MM-DD
 */
export const autoShowTime = (timer: number) => {
  const now = dayjs()
  const showTime = dayjs(timer)
  console.log('showTime', showTime, now)

  if (!showTime.isSame(now, 'year')) {
    return showTime.format('YYYY-MM-DD HH:mm')
  } else if (!showTime.isSame(now, 'month') || !showTime.isSame(now, 'week')) {
    return showTime.format('MM-DD HH:mm')
  } else if (!showTime.isSame(now, 'day')) {
    return `星期${ToCNNumber(showTime.day())} ${showTime.format('HH:mm')}`
  } else if (showTime.isSame(now, 'm')) {
    return '刚刚'
  } else {
    return showTime.format('HH:mm')
  }
}

export const ToCNNumber = (number: number | string) => {
  switch (+number) {
    case 0:
      return '零'

    case 1:
      return '一'

    case 2:
      return '二'

    case 3:
      return '三'

    case 4:
      return '四'

    case 5:
      return '五'

    case 6:
      return '六'

    case 7:
      return '七'

    case 8:
      return '八'

    case 9:
      return '九'

    default:
      return number
  }
}

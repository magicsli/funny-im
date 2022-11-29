import dayjs from 'dayjs'
import { useMemo } from 'react'

/**
 * 按照聊天时间段进行分组
 * @param list 聊天列表
 * @returns 按时间段区分的聊天分区
 */
export default function useGroupByTime(list?: IChat[]) {
  return useMemo(() => {
    if (!list?.length) return []
    const groups = []
    let lastTimeSlot = null

    for (let index = list.length - 1; index >= 0; index--) {
      const chat = list[index]

      if (!lastTimeSlot || Math.abs(lastTimeSlot.diff(chat.create_time, 'h')) > 2) {
        groups.unshift({
          day: chat.create_time,
          list: [chat]
        })
      } else {
        groups[0].list.unshift(chat)
      }

      lastTimeSlot = dayjs(chat.create_time)
    }

    return groups
  }, [list])
}

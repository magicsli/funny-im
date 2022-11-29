import { autoShowTime } from '@/utils/time'
import dayjs from 'dayjs'
import { useMemo } from 'react'

export default function useGroupByTime(list?: IChat[]) {
  return useMemo(() => {
    if (!list?.length) return []

    const groups = []
    let day = null

    for (let index = list.length - 1; index >= 0; index--) {
      const chat = list[index]

      if (!day || !day.isSame(chat.create_time, 'd')) {
        day = dayjs(chat.create_time)
        groups.unshift({
          day: autoShowTime(day),
          list: [chat]
        })
      } else {
        groups[0].list.unshift(chat)
      }
    }

    return groups
  }, [list])
}

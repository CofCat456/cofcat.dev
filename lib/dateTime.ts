import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(customParseFormat)
dayjs.extend(LocalizedFormat)
dayjs.locale('zh-tw')

export enum DateFormat {
  'MMM DD YYYY',
  'HH:mm',
  'LLLL',
  'H:mm:ss A',
  'YYYY-MM-DD',
  'YYYY-MM-DD dddd',
  'YYYY-MM-DD ddd',
  'MM-DD ddd',

  'YYYY 年 M 月 D 日',
}

export const parseDate = (
  time: Date | number | string,
  format: keyof typeof DateFormat,
) => dayjs(time).format(format)

export const relativeTimeFromNow = (
  time: Date | number | string,
  current = new Date(),
) => {
  if (!time) {
    return ''
  }
  time = new Date(time)
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = +current - +time

  if (elapsed < msPerMinute) {
    const gap = Math.ceil(elapsed / 1000)
    return gap <= 0 ? '剛剛' : `${gap} 秒前`
  } else if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} 分鐘前`
  } else if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} 小時前`
  } else if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} 天前`
  } else if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} 個月前`
  } else {
    return `${Math.round(elapsed / msPerYear)} 年前`
  }
}

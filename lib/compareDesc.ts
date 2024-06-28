import dayjs from 'dayjs'

export function compareDesc(dateA: number, dateB: number) {
  const diff = dayjs(dateB).diff(dayjs(dateA))

  if (diff > 0) {
    return 1
  } else if (diff < 0) {
    return -1
  } else {
    return 0
  }
}

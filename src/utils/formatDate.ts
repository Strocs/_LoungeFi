import { formatTime } from './formatTime'

export const formatDate = (time: number): string => {
  const date = new Date(time)
  const day = formatTime(date.getDate())
  const month = formatTime(date.getMonth() + 1)
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

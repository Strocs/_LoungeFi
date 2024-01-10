import { DOCUMENT_TITLE } from '@constants'
import { formatTime } from '@utils'
import { useEffect } from 'react'

export const Countdown = ({ minutes, seconds, isStart }) => {
  const formattedMinutes = formatTime(minutes)
  const formattedSeconds = formatTime(seconds)

  useEffect(() => {
    isStart
      ? (document.title = `${formattedMinutes}:${formattedSeconds} ${DOCUMENT_TITLE}`)
      : (document.title = DOCUMENT_TITLE)
  }, [seconds, isStart])

  return (
    <span className='text-dark text-lg font-bold leading-none w-12'>
      {formattedMinutes}:{formattedSeconds}
    </span>
  )
}

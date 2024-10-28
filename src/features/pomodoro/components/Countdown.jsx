import { DOCUMENT_TITLE } from '@constants'
import { formatTime } from '@utils'
import { useEffect } from 'react'

export const Countdown = ({ minutes, seconds, isStart }) => {
  const formattedMinutes = formatTime(minutes)
  const formattedSeconds = formatTime(seconds)

  useEffect(() => {
    document.title = isStart ? `${formattedMinutes}:${formattedSeconds} ${DOCUMENT_TITLE}` : DOCUMENT_TITLE
  }, [isStart, formattedSeconds, formattedMinutes])

  return (
    <span className='w-12 font-bold text-lg leading-none'>
      {formattedMinutes}:{formattedSeconds}
    </span>
  )
}

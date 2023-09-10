import { formatTime } from '@utils'

export const Countdown = ({ minutes, seconds }) => {
  const formattedMinutes = formatTime(minutes)
  const formattedSeconds = formatTime(seconds)

  return (
    <span className='text-dark text-lg font-bold leading-none w-12'>
      {formattedMinutes}:{formattedSeconds}
    </span>
  )
}

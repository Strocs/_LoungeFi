import { usePomodoro } from '@hooks'
import { useState } from 'react'
import {
  PomodoroButton,
  PomodoroCountdown,
  PomodoroSetTimer,
  TaskInfoButton
} from '.'

export const Pomodoro = ({ id }) => {
  const [start, setStart] = useState(false)
  const { pomodoro, addPomodoro, deletePomodoro, setTimers } = usePomodoro(id)

  const onAddPomodoro = () => {
    addPomodoro(id)
  }

  return (
    <>
      <div className='flex w-full gap-3'>
        {/* TODO: Add pomodoro feat */}
        <PomodoroButton
          isActive={start}
          start={start}
          setStart={setStart}
          onAddPomodoro={onAddPomodoro}
        />
        <TaskInfoButton text='Remove' onClick={() => {}} />
      </div>
      {!!pomodoro && !start && <PomodoroSetTimer />}
      {start && <PomodoroCountdown />}
    </>
  )
}

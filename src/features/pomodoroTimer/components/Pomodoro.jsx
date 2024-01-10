import { PomodoroIcon } from '@components/icons'
import {
  Countdown,
  StepsList,
  PomodoroSettings,
  usePomodoro
} from '@features/pomodoroTimer'
import { Button } from '@components/ui'
import { usePomodoroStore, useTaskStore } from '@context'
import { POMODORO_VALUES, TOGGLE_KEY } from '@constants'
import { useRef, useEffect } from 'react'

const { ALARM } = POMODORO_VALUES

export const Pomodoro = () => {
  const { minutes, seconds, isStart, countdown, changeStep, togglePomodoro } =
    usePomodoroStore()

  const isUserWriting = useTaskStore(state => state.isUserWriting)
  const pomodoroRef = useRef(null)

  usePomodoro({
    changeStep,
    togglePomodoro,
    isStart,
    countdown,
    isTimerEnd: minutes === 0 && seconds === 0,
    keyDownCondition: isUserWriting,
    alarmSound: ALARM,
    toggleKeyButton: TOGGLE_KEY
  })

  useEffect(() => {
    document.body.focus()
  }, [isStart])

  return (
    <section
      ref={pomodoroRef}
      className={`${
        isStart ? 'bg-white outline-red' : 'bg-white outline-grey'
      } flex items-center gap-4 pl-4 pr-3 py-1 h-fit w-fit rounded-full outline outline-2 transition-all duration-150`}
    >
      <div className='flex gap-4 cursor-pointer group' onClick={togglePomodoro}>
        <Button color='transparent'>
          <PomodoroIcon size={32} isActive={isStart} />
        </Button>
        <div className='w-fit grid place-items-center'>
          <Countdown minutes={minutes} seconds={seconds} isStart={isStart} />
          <StepsList isStart={isStart} />
        </div>
      </div>
      <PomodoroSettings />
    </section>
  )
}

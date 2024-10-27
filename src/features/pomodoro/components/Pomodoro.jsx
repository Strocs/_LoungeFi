import { PomodoroIcon } from '@components/icons'
import { Button } from '@components/ui'
import { Countdown, ResetPomodoro, StepsList } from '@features/pomodoro/components'
import { POMODORO_VALUES, TOGGLE_KEY } from '@features/pomodoro/constants'
import { usePomodoro } from '@features/pomodoro/hooks'
import { usePomodoroStore } from '@features/pomodoro/store'
import { useTaskStore } from '@features/tasks/store'
import { cn } from '@utils'
import { useEffect, useRef } from 'react'

const { ALARM } = POMODORO_VALUES

export const Pomodoro = () => {
  const { minutes, seconds, isStart, countdown, changeStep, togglePomodoro } = usePomodoroStore()

  const isUserWriting = useTaskStore((state) => state.isUserWriting)
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
  }, [])

  return (
    <section
      ref={pomodoroRef}
      className={cn(
        'flex h-fit w-fit items-center gap-4 rounded-full bg-slate-100 py-1 pr-3 pl-4 text-dark outline outline-2 outline-grey transition-all duration-150',
        isStart && 'outline-red'
      )}
    >
      <div className='group flex cursor-pointer gap-4' onClick={togglePomodoro}>
        <Button color='transparent' outline='none'>
          <PomodoroIcon size={32} isActive={isStart} />
        </Button>
        <div className='grid w-fit place-items-center'>
          <Countdown minutes={minutes} seconds={seconds} isStart={isStart} />
          <StepsList isStart={isStart} />
        </div>
      </div>
      <ResetPomodoro />
    </section>
  )
}

import { PomodoroIcon } from '@components/icons'
import { Countdown, StepsList, PomodoroSettings, usePomodoro } from '@features/pomodoroTimer'
import { Button } from '@components/ui'
import { usePomodoroStore, useTaskStore } from '@context'
import { POMODORO_VALUES, TOGGLE_KEY } from '@constants'

const { ALARM } = POMODORO_VALUES

export const Pomodoro = () => {
  const { minutes, seconds, isStart, countdown, changeStep, togglePomodoro } = usePomodoroStore()

  const isUserWriting = useTaskStore(state => state.isUserWriting)

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

  return (
    <section
      className={`${
        isStart ? 'bg-white shadow-red outline-red' : 'bg-white shadow-grey outline-grey'
      } flex items-center gap-4 pl-4 pr-3 py-1 h-fit w-fit rounded-full shadow outline outline-2 transition-all duration-150`}>
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

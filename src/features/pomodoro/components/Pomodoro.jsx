import { PomodoroIcon } from '@components/icons'
import { Button } from '@components/ui'
import { Countdown, ResetPomodoro, StepsList } from '@features/pomodoro/components'
import { usePomodoro } from '@features/pomodoro/hooks'
import { cn } from '@utils'

export const Pomodoro = ({ className }) => {
  const { isStart, togglePomodoro, seconds, minutes } = usePomodoro()

  return (
    <section
      className={cn(
        'flex h-fit w-fit items-center gap-4 rounded-full bg-slate-100 py-1 pr-3 pl-4 text-dark outline outline-2 outline-grey transition-all duration-150',
        isStart && 'outline-red',
        className
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

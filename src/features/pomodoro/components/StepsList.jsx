import { usePomodoroStore } from '@features/pomodoro/store'
import { cn } from '@utils/clsxWithTailwindMerge'

export const StepsList = ({ isStart }) => {
  const { isLongRest, steps, currentStep } = usePomodoroStore()
  return (
    <div className='flex w-full justify-center gap-1'>
      {isLongRest ? (
        <span className={cn('h-2 w-full rounded bg-grey sm:h-[.6rem]', isStart && 'bg-blue')} />
      ) : (
        Array.from({ length: steps }, (_, index) => {
          const isActive = index + 1 === currentStep
          const workingColor = isStart ? (index % 2 === 0 ? 'bg-green' : 'bg-blue') : 'bg-grey'
          return (
            <span
              key={index}
              className={cn(
                'h-2 w-2 shrink-0 rounded-full bg-lightgrey sm:h-[.6rem] sm:w-[.6rem]',
                isActive && workingColor
              )}
            />
          )
        })
      )}
    </div>
  )
}

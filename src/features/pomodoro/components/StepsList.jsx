import { usePomodoroStore } from '@features/pomodoro/store'
import { cn } from '@utils/clsxWithTailwindMerge'

const sizeVariance = {
  sm: 'h-2 w-2 sm:h-[.6rem] sm:w-[.6rem]',
  md: 'h-4 w-4 sm:h-[.8rem] sm:w-[.8rem]',
  lg: 'h-6 w-6 sm:h-[1.2rem] sm:w-[1.2rem]'
}

export const StepsList = ({ size = 'sm' }) => {
  const { isLongRest, steps, currentStep, isStart } = usePomodoroStore()

  return (
    <div className='flex w-full justify-center gap-1'>
      {isLongRest ? (
        <span className={cn('rounded bg-grey', isStart && 'bg-blue', sizeVariance[size], 'w-full sm:w-full')} />
      ) : (
        Array.from({ length: steps }, (_, index) => {
          const isActive = index + 1 === currentStep
          const workingColor = isStart ? (index % 2 === 0 ? 'bg-green' : 'bg-blue') : 'bg-grey'
          return (
            <span
              key={index}
              className={cn('shrink-0 rounded-full bg-lightgrey', isActive && workingColor, sizeVariance[size])}
            />
          )
        })
      )}
    </div>
  )
}

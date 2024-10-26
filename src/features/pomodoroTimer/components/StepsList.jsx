import { usePomodoroStore } from '@features/pomodoroTimer/store'

export const StepsList = ({ isStart }) => {
  const { isLongRest, steps, currentStep } = usePomodoroStore()
  return (
    <div className='flex gap-1 justify-center w-full'>
      {isLongRest ? (
        <span className={`${isStart ? 'bg-blue' : 'bg-grey'} w-full h-2 sm:h-[.6rem] rounded`} />
      ) : (
        Array.from({ length: steps }, (_, index) => {
          const isActive = index + 1 === currentStep
          const workingColor = isStart ? (index % 2 === 0 ? 'bg-green' : 'bg-blue') : 'bg-grey'
          return (
            <span
              key={index}
              className={`w-2 h-2 sm:w-[.6rem] sm:h-[.6rem] shrink-0 rounded-full ${
                isActive ? workingColor : 'bg-lightgrey'
              }`}
            />
          )
        })
      )}
    </div>
  )
}

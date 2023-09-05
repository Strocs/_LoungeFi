import { Button } from '@components/ui'
import { usePomodoro } from '@hooks'
import { DEFAULT_POMODORO_VALUES } from '@constants'

const { stepsList } = DEFAULT_POMODORO_VALUES

export const Pomodoro = () => {
  const { isStart, longBreak, currentStep, minutes, seconds, togglePomodoro } = usePomodoro()

  return (
    <section className='flex items-center justify-between px-3 bg-white w-32 h-7 rounded-full shadow shadow-blue outline outline-2 outline-blue'>
      <Button color='active' padding onClick={e => togglePomodoro(e)}>
        {!isStart ? 'Start' : 'Pause'}
      </Button>
      <div className='flex flex-col w-11 justify-center'>
        <span className='font-bold leading-none tracking-tight text-dark flex items-center w-full mx-auto'>
          {minutes}:{seconds}
        </span>
        <ul className='flex gap-[5px] justify-center'>
          {longBreak ? (
            <li className='w-full h-[6px] rounded bg-blue' />
          ) : (
            stepsList.map((step, index) => {
              const isActive = index + 1 === currentStep
              const workingColor = index % 2 === 0 ? 'bg-green' : 'bg-blue'
              return (
                <li
                  key={step}
                  className={`w-[6px] h-[6px] rounded ${isActive ? workingColor : 'bg-lightgrey'}`}
                />
              )
            })
          )}
        </ul>
      </div>
    </section>
  )
}

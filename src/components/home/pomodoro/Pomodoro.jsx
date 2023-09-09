import { usePomodoro } from '@hooks'
import { DEFAULT_POMODORO_VALUES } from '@constants'
import { useEffect } from 'react'
import { PomodoroIcon } from '@components/icons'

const { stepsList } = DEFAULT_POMODORO_VALUES

// TODO: Change styles. While pomo is paused, component must show a title for Pomodoro (or icon on a button) and two buttons for start and reset, otherwise, if is started, show the timers and steps, and on hover must replace something to show pause button

export const Pomodoro = () => {
  const { isStart, longBreak, currentStep, minutes, seconds, togglePomodoro } = usePomodoro()

  useEffect(() => {
    isStart ? (document.title = `${minutes}:${seconds} _LoungeFi`) : (document.title = '_LoungeFi')
  }, [seconds, isStart])

  return (
    <section
      onClick={() => {
        togglePomodoro()
      }}
      className={`${
        isStart ? 'bg-white shadow-red outline-red' : 'bg-white shadow-grey outline-grey'
      } flex w-fit gap-2 justify-between items-center pr-4 pl-3 py-1 h-fit rounded-full shadow outline outline-2 cursor-pointer group transition-all duration-150`}>
      {/* <Button
        className={`${
          isStart ? 'bg-red' : 'bg-grey'
        } hover:bg-red transition-[background-color] duration-150 rounded-full px-2 text-xs text-white`}>
        Reset
      </Button> */}
      <PomodoroIcon size={28} isActive={isStart} />
      <div className='flex flex-col w-11 justify-center'>
        <span className='text-dark font-bold leading-none flex items-center w-full mx-auto'>
          {minutes}:{seconds}
        </span>
        <ul className='flex gap-1 justify-center'>
          {longBreak ? (
            <li className={`${isStart ? 'bg-blue' : 'bg-grey'} w-full h-[6px] rounded`} />
          ) : (
            stepsList.map((step, index) => {
              const isActive = index + 1 === currentStep
              const workingColor = isStart ? (index % 2 === 0 ? 'bg-green' : 'bg-blue') : 'bg-grey'
              return (
                <li
                  key={step}
                  className={`w-[6px] h-[6px] shrink-0 rounded ${
                    isActive ? workingColor : 'bg-lightgrey'
                  }`}
                />
              )
            })
          )}
        </ul>
      </div>
    </section>
  )
}

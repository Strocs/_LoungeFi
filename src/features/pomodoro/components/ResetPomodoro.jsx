import ResetIcon from '@components/icons/ResetIcon'
import { usePomodoroStore } from '@features/pomodoro/store'

export const ResetPomodoro = () => {
  const resetPomodoro = usePomodoroStore((state) => state.resetPomodoro)

  return (
    <div className='relative flex rounded-full'>
      <button className='text-black/20 transition duration-150 hover:text-red' onClick={resetPomodoro}>
        <ResetIcon />
      </button>
    </div>
  )
}

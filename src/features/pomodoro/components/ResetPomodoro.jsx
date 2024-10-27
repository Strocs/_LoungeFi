import ResetIcon from '@components/icons/ResetIcon'
import { usePomodoroStore } from '@features/pomodoro/store'

export const ResetPomodoro = () => {
  const resetPomodoro = usePomodoroStore((state) => state.resetPomodoro)

  return (
    <div className='relative flex rounded-full'>
      <button className='text-black/20 hover:text-red transition duration-150' onClick={resetPomodoro}>
        <ResetIcon />
      </button>
    </div>
  )
}

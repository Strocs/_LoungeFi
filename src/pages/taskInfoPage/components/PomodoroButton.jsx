import { GiTomato, GiPauseButton, GiPlayButton } from 'react-icons/gi'
import { TaskInfoButton } from '.'

export const PomodoroButton = ({ isActive, start, setStart, onAddPomodoro }) => {
  return (
    <>
      {!isActive ? (
        <TaskInfoButton
          text='Set a pomo'
          onClick={onAddPomodoro}
          icon={<GiTomato className='ml-1 text-lg' />}
        />
      ) : !start ? (
        <TaskInfoButton
          text='Start'
          onClick={() => setStart(true)}
          icon={<GiPlayButton className='ml-1 text-lg' />}
        />
      ) : (
        <TaskInfoButton
          text='Pause'
          onClick={() => setStart(false)}
          icon={<GiPauseButton className='ml-1 text-lg' />}
        />
      )}
    </>
  )
}

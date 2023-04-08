import { GiTomato, GiPauseButton, GiPlayButton } from 'react-icons/gi'
import { TaskInfoButton } from '.'

export const PomodoroButton = ({ start, setStart, onAddPomodoro }) => {
	return (
		<>
			{!start ? (
				<TaskInfoButton text='Start' onClick={() => setStart(true)} icon={<GiPlayButton className='text-sm' />} />
			) : (
				<TaskInfoButton text='Pause' onClick={() => setStart(false)} icon={<GiPauseButton className='text-sm' />} />
			)}
		</>
	)
}

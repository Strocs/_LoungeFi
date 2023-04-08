import { usePomodoro } from '@hooks'
import { useState } from 'react'
import { PomodoroButton, PomodoroCountdown, PomodoroSetTimer, TaskInfoButton } from '.'

export const Pomodoro = ({ id }) => {
	const [start, setStart] = useState(false)
	const { pomodoro, addPomodoro, deletePomodoro, setTimers } = usePomodoro(id)

	const onAddPomodoro = () => {
		addPomodoro(id)
	}

	return (
		<div className='flex gap-3 justify-between'>
			<div className='grid place-content-between justify-center w-full'>
				<PomodoroCountdown />
				<PomodoroButton isActive={start} start={start} setStart={setStart} onAddPomodoro={onAddPomodoro} />
			</div>
			<PomodoroSetTimer />
		</div>
	)
}

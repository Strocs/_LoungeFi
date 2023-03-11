import { usePomodoro } from '@hooks'
import { useState } from 'react'
import { PomodoroButton, PomodoroCountdown, PomodoroSetTimer, TaskInfoButton } from '.'

export const Pomodoro = ({ id }) => {
	const [start, setStart] = useState(true)
	const { pomodoro, addPomodoro, deletePomodoro, setTimers } = usePomodoro(id)

	const onAddPomodoro = () => {
		addPomodoro(id)
	}

	return (
		<div className='grid gap-3'>
			<div className='flex justify-between items-center'>
				{start && <PomodoroCountdown />}
				<PomodoroSetTimer />
			</div>
			<PomodoroButton isActive={start} start={start} setStart={setStart} onAddPomodoro={onAddPomodoro} />
		</div>
	)
}

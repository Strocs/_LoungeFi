import { Button } from '@ui'
import { usePomodoro } from '@hooks'
import { DEFAULT_POMODORO_VALUES } from '@constants'
import { formatTime } from '@utils'

const {
	maxCiclesBeforeLongBreak,
	structure,
	timersInMinutes: { work, shortBreak, longBreak },
} = DEFAULT_POMODORO_VALUES

export const Pomodoro = () => {
	const {
		pomodoro: { isStart, currentWholeCicle, currentStep, minutes, seconds },
		togglePomodoro,
	} = usePomodoro({
		maxCicles: maxCiclesBeforeLongBreak,
		work,
		shortBreak,
		longBreak,
	})

	return (
		<div className='flex items-center justify-between px-4 bg-white w-32 h-7 rounded-full shadow-[-3px_4px_0_0] shadow-blue'>
			<Button
				color='active'
				onClick={() => togglePomodoro()}
			>
				<p className='leading-none -mt-[.1px] py-[2.75px]'>{!isStart ? 'Start' : 'Pause'}</p>
			</Button>
			<div className='flex flex-col items-center'>
				<p className='font-bold leading-none tracking-tight text-dark'>
					{formatTime(minutes)}:{formatTime(seconds)}
				</p>
				<div className='flex gap-[5px]'>
					{structure.map((count, index) => (
						<span
							key={count} // change this value
							className={`w-[6px] h-[6px] rounded ${
								index + 1 === currentStep ? 'bg-blue' : 'bg-lightgrey'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

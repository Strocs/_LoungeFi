import { Button } from '@ui'
import { usePomodoro } from '@hooks'
import { DEFAULT_POMODORO_VALUES } from '@constants'

const { cyclesBeforeLongBreak, stepsList, timersInMinutes, alarmSound } = DEFAULT_POMODORO_VALUES

export const Pomodoro = () => {
	const { isStart, longBreak, currentStep, minutes, seconds, togglePomodoro } = usePomodoro({
		numberOfCycles: cyclesBeforeLongBreak,
		times: timersInMinutes,
		alarmSound,
	})

	return (
		<section className='flex items-center justify-between px-3 bg-white w-32 h-7 rounded-full shadow-[-3px_4px_0_0] shadow-blue'>
			<Button
				color='active'
				onClick={(e) => togglePomodoro(e)}
			>
				<span className='leading-none -mt-[.1px] py-[2.75px] w-max'>{!isStart ? 'Start' : 'Pause'}</span>
			</Button>
			<div className='flex flex-col w-11 justify-center'>
				<span className='font-bold leading-none tracking-tight text-dark flex items-center w-full mx-auto'>
					{minutes}:{seconds}
				</span>
				<ul className='flex gap-[5px] justify-center'>
					{longBreak ? (
						<li className={`w-full h-[6px] rounded bg-blue`} />
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

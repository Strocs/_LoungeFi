import { useEffect, useState } from 'react'

// TODO: Refactor this code for optimizations

const initialState = {
	currentWholeCicle: 0,
	currentStep: 1,
	minutes: 0,
	seconds: 0,
	isStart: false,
}

export const usePomodoro = ({ maxCicles, work, shortBreak, longBreak }) => {
	const [pomodoro, setPomodoro] = useState({
		...initialState,
		minutes: work,
	})

	const { isStart, currentWholeCicle, currentStep, minutes, seconds } = pomodoro

	useEffect(() => {
		let interval

		if (isStart) {
			if (minutes === 0 && seconds === 0) {
				if (currentWholeCicle === maxCicles) {
					setPomodoro({
						...initialState,
						minutes: longBreak,
					})
				} else {
					const isLast = currentStep === 4
					setPomodoro({
						...pomodoro,
						currentWholeCicle: isLast ? currentWholeCicle + 1 : currentWholeCicle,
						currentStep: isLast ? 1 : currentStep + 1,
						minutes: currentStep % 2 === 0 ? work : shortBreak,
					})
				}
			}

			interval = setInterval(() => {
				if (seconds > 0) {
					setPomodoro({
						...pomodoro,
						seconds: seconds - 1,
					})
				} else if (minutes > 0) {
					setPomodoro({
						...pomodoro,
						minutes: minutes - 1,
						seconds: 59,
					})
				}
			}, 1000)
		}

		return () => clearInterval(interval)
	}, [pomodoro])

	const togglePomodoro = () => {
		setPomodoro({
			...pomodoro,
			isStart: !isStart,
		})
	}

	return {
		pomodoro,
		togglePomodoro,
	}
}

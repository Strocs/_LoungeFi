import { useEffect, useState } from 'react'
import { formatTime } from '@utils'

const initialValues = {
	isStart: false,
	currentCycle: 1,
	currentStep: 1,
	seconds: 0,
}

export const usePomodoro = ({ numberOfCycles, times: { work, shortBreak, longBreak }, alarmSound }) => {
	const [pomodoro, setPomodoro] = useState({
		...initialValues,
		minutes: work,
	})

	const { isStart, currentCycle, currentStep, minutes, seconds } = pomodoro

	const soundSelected = new Audio(alarmSound)

	useEffect(() => {
		const togglePomodoroKeyDown = (e) => {
			if (e.keyCode !== 32) return
			togglePomodoro()
		}

		window.addEventListener('keydown', togglePomodoroKeyDown)
		return () => {
			window.removeEventListener('keydown', togglePomodoroKeyDown)
		}
	}, [])

	useEffect(() => {
		let countdown

		if (isStart) {
			if (minutes === 0 && seconds === 0) {
				changeStep()
			}

			countdown = setInterval(() => {
				setPomodoro((prevPomodoro) => ({
					...prevPomodoro,
					seconds: prevPomodoro.seconds > 0 ? prevPomodoro.seconds - 1 : 59,
					minutes: prevPomodoro.seconds === 0 && prevPomodoro.minutes > 0 ? prevPomodoro.minutes - 1 : prevPomodoro.minutes,
				}))
			}, 1000)
		}

		return () => clearInterval(countdown)
	}, [pomodoro])

	function changeStep() {
		playAlarm()
		if (currentCycle === numberOfCycles && currentStep === 3) {
			setPomodoro({
				...initialValues,
				minutes: longBreak,
				isStart: false,
				currentStep: 4,
			})
		} else {
			const isLastStep = currentStep === 4
			setPomodoro((prevPomodoro) => ({
				...prevPomodoro,
				currentCycle: isLastStep ? prevPomodoro.currentCycle + 1 : prevPomodoro.currentCycle,
				currentStep: isLastStep ? initialValues.currentStep : prevPomodoro.currentStep + 1,
				minutes: prevPomodoro.currentStep % 2 === 0 ? work : shortBreak,
				isStart: false,
			}))
		}
	}

	function togglePomodoro() {
		setPomodoro((prevPomodoro) => ({
			...prevPomodoro,
			isStart: !prevPomodoro.isStart,
		}))
	}

	function playAlarm() {
		soundSelected.play()
	}

	return {
		pomodoro,
		isStart,
		longBreak: currentCycle === numberOfCycles && currentStep === 4,
		currentStep,
		minutes: formatTime(minutes),
		seconds: formatTime(seconds),
		togglePomodoro,
	}
}

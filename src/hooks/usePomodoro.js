import { useEffect, useState } from 'react'
import { formatTime } from '@utils'
import { useTaskStore } from '@store'
import { useLocalStorage } from '@hooks'
import { DEFAULT_POMODORO_VALUES, STORAGE_POMODORO_ID } from '@constants'

const {
  cyclesBeforeLongBreak,
  timersInMinutes: { work, shortBreak, longBreak },
  alarmSound
} = DEFAULT_POMODORO_VALUES

const initialValues = {
  currentCycle: 1,
  currentStep: 1,
  seconds: 0,
  minutes: work
}

const storedPomodoroValues = useLocalStorage({ key: STORAGE_POMODORO_ID, initialValues })

export const usePomodoro = () => {
  const [pomodoro, setPomodoro] = useState(storedPomodoroValues)
  const [isStart, setIsStart] = useState(false)
  const isUserWriting = useTaskStore(state => state.isUserWriting)

  const { currentCycle, currentStep, minutes, seconds } = pomodoro

  const soundSelected = new Audio(alarmSound)

  useEffect(() => {
    const togglePomodoroKeyDown = e => {
      if (e.keyCode !== 32) return
      togglePomodoro()
    }

    window.addEventListener('keydown', togglePomodoroKeyDown)
    return () => {
      window.removeEventListener('keydown', togglePomodoroKeyDown)
    }
  }, [isUserWriting, isStart])

  useEffect(() => {
    let countdown

    if (isStart) {
      if (minutes === 0 && seconds === 0) {
        changeStep()
      }

      countdown = setInterval(() => {
        setPomodoro(prevPomodoro => ({
          ...prevPomodoro,
          seconds: prevPomodoro.seconds > 0 ? prevPomodoro.seconds - 1 : 59,
          minutes:
            prevPomodoro.seconds === 0 && prevPomodoro.minutes > 0
              ? prevPomodoro.minutes - 1
              : prevPomodoro.minutes
        }))
      }, 1000)
    }

    useLocalStorage({ key: STORAGE_POMODORO_ID, value: pomodoro })
    return () => clearInterval(countdown)
  }, [pomodoro, isStart])

  const changeStep = () => {
    playAlarm()
    if (currentCycle === cyclesBeforeLongBreak && currentStep === 3) {
      setPomodoro({
        ...storedPomodoroValues,
        minutes: longBreak,
        currentStep: 4,
        currentCycle
      })
      setIsStart(false)
    } else {
      const isLastStep = currentStep === 4
      setPomodoro(prevPomodoro => ({
        ...prevPomodoro,
        currentCycle: isLastStep
          ? currentCycle === cyclesBeforeLongBreak
            ? initialValues.currentCycle
            : prevPomodoro.currentCycle + 1
          : prevPomodoro.currentCycle,
        currentStep: isLastStep ? initialValues.currentStep : prevPomodoro.currentStep + 1,
        minutes: prevPomodoro.currentStep % 2 === 0 ? work : shortBreak
      }))
      setIsStart(false)
    }
  }

  const togglePomodoro = () => {
    if (isUserWriting) return
    setIsStart(!isStart)
  }

  const playAlarm = () => {
    soundSelected.play()
  }

  const resetPomodoro = () => {
    setPomodoro(initialValues)
  }

  return {
    pomodoro,
    isStart,
    longBreak: currentCycle === cyclesBeforeLongBreak && currentStep === 4,
    currentStep,
    minutes: formatTime(minutes),
    seconds: formatTime(seconds),
    togglePomodoro,
    changeStep,
    resetPomodoro
  }
}

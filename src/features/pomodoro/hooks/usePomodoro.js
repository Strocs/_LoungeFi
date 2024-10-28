import { useTaskStore } from '@features/tasks/store'
import { useEffect } from 'react'
import { POMODORO_VALUES, TOGGLE_KEY } from '../constants'
import { usePomodoroStore } from '../store'

export const usePomodoro = () => {
  const isStart = usePomodoroStore((state) => state.isStart)
  const changeStep = usePomodoroStore((state) => state.changeStep)
  const countdown = usePomodoroStore((state) => state.countdown)
  const togglePomodoro = usePomodoroStore((state) => state.togglePomodoro)
  const minutes = usePomodoroStore((state) => state.minutes)
  const seconds = usePomodoroStore((state) => state.seconds)

  const isUserWriting = useTaskStore((state) => state.isUserWriting)

  // Set an alarm sound
  const alarm = new Audio(POMODORO_VALUES.alarm) ?? null

  // Toggle pomodoro with a key
  useEffect(() => {
    const togglePomodoroKeyDown = (e) => {
      if (e.keyCode !== TOGGLE_KEY) {
        return
      }
      if (isUserWriting) {
        return
      }
      togglePomodoro()
    }

    window.addEventListener('keydown', togglePomodoroKeyDown)
    return () => {
      window.removeEventListener('keydown', togglePomodoroKeyDown)
    }
  }, [isUserWriting, togglePomodoro])

  // sound alarm when a step ends
  useEffect(() => {
    let countdownInterval

    if (isStart) {
      if (minutes === 0 && seconds === 0) {
        alarm?.play()
        changeStep()
      }
      countdownInterval = setInterval(() => {
        countdown()
      }, 1000)
    }

    return () => clearInterval(countdownInterval)
  }, [isStart, minutes, seconds, countdown, changeStep, alarm?.play])

  return { isStart, minutes, seconds, togglePomodoro }
}

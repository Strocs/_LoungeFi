import { useEffect } from 'react'

export const usePomodoro = ({
  changeStep = () => null,
  countdown = () => null,
  togglePomodoro = () => null,
  isStart = false,
  isTimerEnd = false,
  alarmSound = null,
  toggleKeyButton = null,
  keyDownCondition = false
}) => {
  const alarm = alarmSound && new Audio(alarmSound)

  useEffect(() => {
    const togglePomodoroKeyDown = (e) => {
      if (e.keyCode !== toggleKeyButton) {
        return
      }
      if (keyDownCondition) {
        return
      }
      togglePomodoro()
    }

    window.addEventListener('keydown', togglePomodoroKeyDown)
    return () => {
      window.removeEventListener('keydown', togglePomodoroKeyDown)
    }
  }, [keyDownCondition, isStart])

  useEffect(() => {
    let countdownInterval

    if (isStart) {
      if (isTimerEnd) {
        alarm?.play()
        changeStep()
      }
      countdownInterval = setInterval(() => {
        countdown()
      }, 1000)
    }

    return () => clearInterval(countdownInterval)
  }, [isStart, isTimerEnd])
}

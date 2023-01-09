import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { DEFAULT_TIMERS, STORAGE_POMODORO_ID } from '@constants'

export const usePomodoro = id => {
  const storedValue = useLocalStorage({
    key: STORAGE_POMODORO_ID,
    initialValue: []
  })
  const [pomodoroList, setPomodoro] = useState(storedValue)

  const addPomodoro = id => {
    setPomodoro([
      ...pomodoroList,
      {
        taskId: id,
        minutes: DEFAULT_TIMERS.minutes,
        seconds: DEFAULT_TIMERS.seconds,
        intervals: DEFAULT_TIMERS.intervals
      }
    ])
    useLocalStorage({ key: STORAGE_POMODORO_ID, value: pomodoroList })
  }
  const setTimers = (id, { minutes, seconds, intervals }) => {
    setPomodoro(
      pomodoroList.map(pomo => {
        if (pomo.taskId === id) {
          pomo.minutes = minutes
          pomo.seconds = seconds
          pomo.intervals = intervals
          return pomo
        }
      })
    )
    useLocalStorage({ key: STORAGE_POMODORO_ID, value: pomodoroList })
  }
  const deletePomodoro = id => {
    setPomodoro(
      pomodoroList.map(pomo => {
        if (pomo.taskId !== id) {
          return pomo
        }
      })
    )
    useLocalStorage({ key: STORAGE_POMODORO_ID, value: pomodoroList })
  }

  const pomodoro = pomodoroList.find(pomo => pomo.taskId === id)
  
  return {
    pomodoro,
    addPomodoro,
    setTimers,
    deletePomodoro
  }
}

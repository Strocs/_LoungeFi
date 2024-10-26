export const STORAGE_POMODORO_ID = 'pomodoro'

export const TOGGLE_KEY = 32

export const TIMERS = {
  work: 25,
  shortBreak: 5,
  longBreak: 15
}

export const ALARMS = {
  alarmList: ['tone.wav'],
  alarmSelected: 0
}

export const POMODORO_VALUES = {
  cycles: 4,
  steps: 4,
  timers: TIMERS,
  alarm: `/sounds/${ALARMS.alarmList[ALARMS.alarmSelected]}`
}

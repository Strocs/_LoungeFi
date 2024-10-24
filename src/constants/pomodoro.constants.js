export const STORAGE_POMODORO_ID = 'pomodoro'

export const TOGGLE_KEY = 32

export const TIMERS = {
  WORK: 25,
  SHORT_REST: 5,
  LONG_REST: 15
}

export const ALARMS = {
  ALARM_LIST: ['tone.wav'],
  ALARM_SELECTED: 0
}

export const POMODORO_VALUES = {
  CYCLES: 4,
  STEPS: 4,
  TIMERS,
  ALARM: `/sounds/${ALARMS.ALARM_LIST[ALARMS.ALARM_SELECTED]}`
}

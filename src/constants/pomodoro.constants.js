export const STORAGE_POMODORO_ID = 'pomodoro'

export const TIMER_DEFAULTS = {
	work: 25,
	shortBreak: 5,
	longBreak: 15,
}
export const POMODORO_STEPS = ['firstWork', 'firstBreak', 'secondWork', 'secondBreak']

export const POMODORO_ALARMS = {
	soundsList: ['tone.wav'],
	soundSelected: 0,
}

export const DEFAULT_POMODORO_VALUES = {
	cyclesBeforeLongBreak: 3,
	timersInMinutes: TIMER_DEFAULTS,
	stepsList: POMODORO_STEPS,
	alarmSound: `/sounds/${POMODORO_ALARMS.soundsList[POMODORO_ALARMS.soundSelected]}`,
}

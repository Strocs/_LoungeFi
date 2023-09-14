import { POMODORO_VALUES, STORAGE_POMODORO_ID } from '@constants'
import { useLocalStorage } from '@hooks'
import { create } from 'zustand'

const { CYCLES, STEPS, TIMERS } = POMODORO_VALUES

const initialValues = {
  cycles: CYCLES,
  steps: STEPS,
  currentCycle: 1,
  currentStep: 1,
  minutes: TIMERS.WORK,
  seconds: 0,
  autoStart: false
}

const storedPomodoroValues = useLocalStorage({
  key: STORAGE_POMODORO_ID,
  initialValue: initialValues
})

export const usePomodoroStore = create((set, get) => ({
  ...storedPomodoroValues,
  isStart: false,
  isLongRest: false,

  changeStep: () =>
    set(state => {
      // Evaluate if pomodoro cycle is the last one and current step is previous to last, if true start a long rest on step 4, otherwise, follows normal behavior

      if (state.currentCycle === CYCLES && state.currentStep === STEPS - 1) {
        return {
          minutes: TIMERS.LONG_REST,
          currentStep: 4,
          isStart: state.autoStart,
          isLongRest: true
        }
      } else {
        const isLastStep = state.currentStep === STEPS
        const newCurrentCycle = isLastStep
          ? state.currentCycle === CYCLES
            ? initialValues.currentCycle
            : state.currentCycle + 1
          : state.currentCycle
        return {
          currentCycle: newCurrentCycle,
          currentStep: isLastStep ? initialValues.currentStep : state.currentStep + 1,
          minutes: state.currentStep % 2 === 0 ? TIMERS.WORK : TIMERS.SHORT_REST,
          isStart: state.autoStart,
          isLongRest: false
        }
      }
    }),
  countdown: () => {
    set(state => ({
      seconds: state.seconds > 0 ? state.seconds - 1 : 59,
      minutes: state.seconds === 0 && state.minutes > 0 ? state.minutes - 1 : state.minutes
    }))

    const { isStart, isLongRest, ...value } = get()
    useLocalStorage({ key: STORAGE_POMODORO_ID, value })
  },
  resetPomodoro: () => {
    set({ ...initialValues, isStart: false })

    const { isStart, isLongRest, ...value } = get()
    useLocalStorage({ key: STORAGE_POMODORO_ID, value })
  },
  togglePomodoro: () => set(state => ({ isStart: !state.isStart })),
}))

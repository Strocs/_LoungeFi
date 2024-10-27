import { POMODORO_VALUES, STORAGE_POMODORO_ID } from '@features/pomodoro/constants'
import { localStorage } from '@utils'
import { create } from 'zustand'

const { cycles, steps, timers } = POMODORO_VALUES

const initialValue = {
  cycles,
  steps,
  currentCycle: 1,
  currentStep: 1,
  minutes: timers.work,
  seconds: 0,
  autoStart: false,
  isLongRest: false
}

const storedPomodoroValues = localStorage({
  key: STORAGE_POMODORO_ID,
  initialValue
})

export const usePomodoroStore = create((set, get) => ({
  ...storedPomodoroValues,
  isStart: false,

  changeStep: () => {
    set((state) => {
      // Evaluate if pomodoro cycle is the last one and current step is previous to last, if true start a long rest on step 4, otherwise, follows normal behavior

      if (state.currentCycle === cycles && state.currentStep === steps - 1) {
        return {
          minutes: timers.LONG_REST,
          currentStep: 4,
          isStart: state.autoStart,
          isLongRest: true
        }
      } else {
        const isLastStep = state.currentStep === steps
        const newCurrentCycle = isLastStep
          ? state.currentCycle === cycles
            ? initialValue.currentCycle
            : state.currentCycle + 1
          : state.currentCycle
        return {
          currentCycle: newCurrentCycle,
          currentStep: isLastStep ? initialValue.currentStep : state.currentStep + 1,
          minutes: state.currentStep % 2 === 0 ? timers.work : timers.shortBreak,
          isStart: state.autoStart,
          isLongRest: false
        }
      }
    })
    const { isStart, ...value } = get()
    localStorage({ key: STORAGE_POMODORO_ID, value })
  },
  countdown: () => {
    set((state) => ({
      seconds: state.seconds > 0 ? state.seconds - 1 : 59,
      minutes: state.seconds === 0 && state.minutes > 0 ? state.minutes - 1 : state.minutes
    }))

    const { isStart, ...value } = get()
    localStorage({ key: STORAGE_POMODORO_ID, value })
  },
  resetPomodoro: () => {
    set({ ...initialValue, isStart: false })

    const { isStart, ...value } = get()
    localStorage({ key: STORAGE_POMODORO_ID, value })
  },
  togglePomodoro: () => set((state) => ({ isStart: !state.isStart }))
}))

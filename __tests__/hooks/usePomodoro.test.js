import { POMODORO_VALUES } from '@features/pomodoro/constants'
import { usePomodoro } from '@features/pomodoro/hooks'
import { act, renderHook } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Tests on custom hook: usePomodoro', () => {
  const { cycles, timers, alarm } = POMODORO_VALUES

  const initialValues = {
    isStart: false,
    currentCycle: 1,
    currentStep: 1,
    minutes: timers.work,
    seconds: 0
  }

  const pomodoroValues = {
    cycles,
    timers,
    alarm
  }

  test('should start with initial values', () => {
    const { result } = renderHook(() =>
      usePomodoro({
        cycles,
        timers,
        alarm
      })
    )
    const { pomodoro } = result.current
    expect(pomodoro).toEqual(initialValues)
  })

  test('should change state of isStart when toggle function is called', () => {
    const { result } = renderHook(() =>
      usePomodoro({
        alarmSound: alarm
      })
    )

    act(() => {
      result.current.togglePomodoro()
    })
    expect(result.current.isStart).toBeTruthy()

    act(() => {
      result.current.togglePomodoro()
    })
    expect(result.current.isStart).toBeFalsy()
  })

  test('should change steps and minutes when timer reach 0', () => {
    const { result } = renderHook(() =>
      usePomodoro({
        numberOfCycles,
        times,
        alarmSound
      })
    )

    act(() => {
      result.current.changeStep()
    })

    expect(result.current.currentStep).toBe(2)
    expect(result.current.pomodoro.minutes).toBe(times.shortBreak)

    act(() => {
      result.current.changeStep()
    })

    expect(result.current.currentStep).toBe(3)
    expect(result.current.pomodoro.minutes).toBe(times.work)

    act(() => {
      result.current.changeStep()
    })

    expect(result.current.currentStep).toBe(4)
    expect(result.current.pomodoro.minutes).toBe(times.shortBreak)

    act(() => {
      result.current.changeStep()
    })

    expect(result.current.currentStep).toBe(1)
    expect(result.current.pomodoro.minutes).toBe(times.work)
  })
  test('should set long break time and return isLongBreakActive on true', () => {
    const { result } = renderHook(() =>
      usePomodoro({
        numberOfCycles,
        times,
        alarmSound
      })
    )
    result.current.pomodoro.currentCycle = numberOfCycles
    result.current.pomodoro.currentStep = 3

    act(() => {
      result.current.togglePomodoro()
    })

    act(() => {
      result.current.changeStep()
    })

    expect(result.current.pomodoro.minutes).toBe(times.longBreak)
    expect(result.current.pomodoro.currentStep).toBe(4)
    expect(result.current.longBreak).toBeTruthy()
  })
})

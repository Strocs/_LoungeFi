import { useState } from 'react'
import { PomodoroSettingsButton, PomodoroSettingsModal } from '@features/pomodoro/components'
import { usePomodoroStore } from '@features/pomodoro/store'

export const PomodoroSettings = () => {
  const [openModal, setOpenModal] = useState(false)

  const resetPomodoro = usePomodoroStore((state) => state.resetPomodoro)

  const handleResetPomodoro = () => {
    resetPomodoro()
    setOpenModal(false)
  }

  const handleToggleModal = () => setOpenModal(!openModal)

  return (
    <div className='relative rounded-full flex'>
      <PomodoroSettingsButton onClick={handleToggleModal} />
      {openModal && <PomodoroSettingsModal onClick={handleResetPomodoro} />}
    </div>
  )
}

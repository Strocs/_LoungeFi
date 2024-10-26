import { useState } from 'react'
import { PomodoroSettingsButton, PomodoroSettingsModal } from '@features/pomodoroTimer/components'
import { usePomodoroStore } from '@features/pomodoroTimer/store'

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

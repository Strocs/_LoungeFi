import { useState } from 'react'
import { ProfileButton } from '@features/settings/components'
import { logoutFirebase } from '@features/auth/firebase'
import { useAuthStore } from '@features/auth/store'
import { useTaskStore } from '@features/tasks/store'

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const logout = useAuthStore((state) => state.logout)
  const cleanStateOnLogout = useTaskStore((state) => state.cleanStateOnLogout)

  const onLogout = () => {
    logout()
    cleanStateOnLogout()
    logoutFirebase()
  }

  return (
    <div className='relative size-fit' onBlur={() => setIsModalOpen(false)}>
      <ProfileButton onClick={onLogout} />
      {isModalOpen && (
        <div className='absolute bottom-10 left-4 z-20 flex flex-col items-center whitespace-nowrap rounded-full bg-red px-4 py-1 shadow outline outline-2'>
          <p className='font-light'>Login will be available soon 😿</p>
        </div>
      )}
    </div>
  )
}

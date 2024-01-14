import { useState } from 'react'
import { ProfileButton } from '@features/profile'
import { useAuthStore, useTaskStore } from '@context'
import { logoutFirebase } from '@features/authentication'

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const logout = useAuthStore(state => state.logout)
  const cleanStateOnLogout = useTaskStore(state => state.cleanStateOnLogout)

  const onLogout = () => {
    logout()
    cleanStateOnLogout()
    logoutFirebase()
  }

  return (
    <div className='relative w-fit h-fit' onBlur={() => setIsModalOpen(false)}>
      <ProfileButton onClick={onLogout} />
      {isModalOpen && (
        <div className='absolute bottom-10 left-4 z-20 flex flex-col items-center rounded-full px-4 py-1 whitespace-nowrap bg-red shadow outline outline-2'>
          <p className='font-light'>Login will be available soon 😿</p>
        </div>
      )}
    </div>
  )
}

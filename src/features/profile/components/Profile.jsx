import { useState } from 'react'
import { ProfileButton } from '@features/profile'

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='relative w-fit h-fit' onBlur={() => setIsModalOpen(false)}>
      <ProfileButton onClick={() => setIsModalOpen(!isModalOpen)} />
      {isModalOpen && (
        <div className='absolute bottom-10 left-4 z-20 flex flex-col items-center rounded-full px-4 py-1 whitespace-nowrap bg-red shadow outline outline-2'>
          <p className='font-light'>Login will be available soon 😿</p>
        </div>
      )}
    </div>
  )
}

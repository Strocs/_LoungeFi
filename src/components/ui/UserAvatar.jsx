import { useAuthStore } from '@features/auth/store'

export const UserAvatar = () => {
  const { photoURL, displayName } = useAuthStore((state) => state.userAuth)

  return (
    <img
      src={photoURL}
      alt={displayName + ' Avatar Image'}
      className='aspect-square scale-125 rounded-full object-cover transition-transform duration-150 group-hover:scale-[2]'
    />
  )
}

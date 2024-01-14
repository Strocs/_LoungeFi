import { useAuthStore } from '@context/useAuthStore'

export const UserAvatar = () => {
  const { photoURL, displayName } = useAuthStore(state => state.userAuth)

  return (
    <img
      src={photoURL}
      alt={displayName + ' Avatar Image'}
      className='object-cover rounded-full aspect-square scale-125 group-hover:scale-[2] transition-transform duration-150'
    />
  )
}

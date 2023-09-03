const avatarUrl = 'https://avatars.githubusercontent.com/u/71996940?v=4'
const userName = 'Ignacio Molina Palominos'

export const UserAvatar = () => {
  // get data from userState
  return <img src={avatarUrl} alt={userName} className='h-7 w-7 rounded-full aspect-square' />
}

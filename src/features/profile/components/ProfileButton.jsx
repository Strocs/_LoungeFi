import { Button, UserAvatar } from '@components/ui'

export const ProfileButton = ({ onClick, photoURL, name }) => {
  return (
    <Button size='round-sm' color='white' onClick={onClick}>
      <div className='overflow-hidden h-6 aspect-square rounded-full'>
        <UserAvatar src={photoURL} name={name} />
      </div>
    </Button>
  )
}

import { Button, UserAvatar } from '@components/ui'

export const ProfileButton = ({ onClick, photoURL, name }) => {
  return (
    <Button size='round-sm' color='white' onClick={onClick}>
      <div className='aspect-square h-7 overflow-hidden rounded-full'>
        <UserAvatar src={photoURL} name={name} />
      </div>
    </Button>
  )
}

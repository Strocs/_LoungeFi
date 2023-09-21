import { Button, UserAvatar } from '@components/ui'

export const ProfileButton = ({ onClick }) => {
  return (
    <Button size='round-sm' color='white' onClick={onClick}>
      <div className='overflow-hidden h-6 aspect-square rounded-full'>
        <UserAvatar />
      </div>
    </Button>
  )
}

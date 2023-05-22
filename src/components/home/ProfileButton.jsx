import { UserAvatar, Button } from '@ui'

export const ProfileButton = () => {
	return (
		<Button
			padding='none'
			className='overflow-hidden'
			animated
		>
			<UserAvatar />
		</Button>
	)
}

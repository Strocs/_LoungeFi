import { Link } from 'react-router-dom'

export const UserAvatar = () => {
	return (
		<Link to='/' className='rounded-full overflow-hidden w-7 h-7'>
			<img src='https://avatars.githubusercontent.com/u/71996940?v=4' alt='' />
		</Link>
	)
}

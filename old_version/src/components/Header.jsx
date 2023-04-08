import { ThemeBar, Title, UserAvatar } from '.'

export function Header() {
	return (
		<header className='flex items-center justify-between w-full py-2 max-w-2xl px-8'>
			<Title />
			<div className='flex items-center gap-3'>
				{/* <ThemeBar /> */}
				<UserAvatar />
			</div>
		</header>
	)
}

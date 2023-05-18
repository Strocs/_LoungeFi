import { ThemeBar, Title, UserAvatar } from '.'
import { PomodoroBox } from './PomodoroBox'

export function Header() {
	return (
		<header className='flex items-start justify-between w-full py-4 max-w-2xl px-4'>
			<Title />
			<PomodoroBox />
		</header>
	)
}

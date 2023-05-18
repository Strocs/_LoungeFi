import { Title } from './ui'
import { PomodoroBox } from '.'

export function Header() {
	return (
		<header className='flex items-start justify-between w-full py-4 max-w-2xl px-4'>
			<Title />
			<PomodoroBox />
		</header>
	)
}

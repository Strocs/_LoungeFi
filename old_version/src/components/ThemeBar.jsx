import { ThemeButton } from '.'
import { useDarkMode } from '@hooks'
import { BsFillSunFill } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'

export function ThemeBar() {
	const { isEnabled, onDarkMode } = useDarkMode()
	return (
		<div className=''>
			{isEnabled ? <ThemeButton mode='Dark' onDarkMode={() => onDarkMode(false)} icon={<HiMoon />} /> : <ThemeButton mode='Light' onDarkMode={() => onDarkMode(true)} icon={<BsFillSunFill />} />}
		</div>
	)
}

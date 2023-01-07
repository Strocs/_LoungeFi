import { ThemeButton } from '.'
import { useDarkMode } from '@hooks'
import { BsFillSunFill } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'

export const ThemeBar = () => {
  const { isEnabled, onDarkMode } = useDarkMode()
  return (
    <div className='flex gap-5 px-4 py-3 bg-c-box sm:text-xl'>
      <ThemeButton
        mode='Light'
        active={!isEnabled}
        onDarkMode={onDarkMode}
        icon={<BsFillSunFill />}
      />
      <ThemeButton
        mode='Dark'
        active={isEnabled}
        onDarkMode={onDarkMode}
        icon={<HiMoon />}
      />
    </div>
  )
}

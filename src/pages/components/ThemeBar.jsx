import { ThemeButton } from '.'
import { BsFillSunFill } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'

export const ThemeBar = () => {
  const mode = true
  return (
    <div className='flex gap-5 px-4 py-3 bg-c-box sm:text-xl'>
      <ThemeButton mode='Light' selected={mode} icon={<BsFillSunFill />} />
      <ThemeButton mode='Dark' selected={mode} icon={<HiMoon />} />
    </div>
  )
}

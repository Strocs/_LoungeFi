import { ThemeButton } from '.'
import { BsFillSunFill } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'

export const ThemeBar = () => {
  const mode = false
  return (
    <div className='bg-c-box text-c-text h-10 w-44 flex items-center justify-center gap-1 p-1 rounded-full shadow-xl'>
      <ThemeButton mode='Light' selected={mode}>
        <BsFillSunFill />
      </ThemeButton>
      <ThemeButton mode='Dark' selected={mode}>
        <HiMoon />
      </ThemeButton>
    </div>
  )
}

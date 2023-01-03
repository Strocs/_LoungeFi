import { ThemeButton } from '.'
import { BsFillSunFill } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'

export const ThemeBar = () => {
  return (
    <>
      <ThemeButton mode='Light' darkMode={false}>
        <BsFillSunFill fill='white' />
      </ThemeButton>
      <ThemeButton mode='Dark' darkMode>
        <HiMoon fill='white' />
      </ThemeButton>
    </>
  )
}

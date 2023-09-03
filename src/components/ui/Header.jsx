import { Title } from '@components/ui'

export function Header ({ children }) {
  return (
    <header className='flex items-start justify-between w-full py-4 max-w-2xl'>
      <Title />
      {children}
    </header>
  )
}

import { Title } from '@components/ui'

export function Header ({ renderOnRight }) {
  return (
    <header className='flex items-start justify-between w-full py-4 max-w-2xl'>
      <Title />
      {renderOnRight}
    </header>
  )
}

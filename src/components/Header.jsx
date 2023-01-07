import { ThemeBar, ItemsLeft, Title } from '.'

export function Header () {
  return (
    <header className='w-full pt-8 mb-4 max-w-2xl m-auto'>
      <div className='flex justify-between gap-2'>
        <Title />
        <ThemeBar />
      </div>
      <ItemsLeft />
    </header>
  )
}

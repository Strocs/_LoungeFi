import { ThemeBar, TodosLeft, Title } from '.'

export const Header = () => {
  return (
    <header className='w-full pt-8 md:pl-44'>
      <div className='flex justify-between gap-2'>
        <Title />
        <ThemeBar />
      </div>
      <TodosLeft />
    </header>
  )
}

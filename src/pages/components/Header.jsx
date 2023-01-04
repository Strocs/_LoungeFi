import { ThemeBar } from '.'

export const Header = () => {
  return (
    <header className='flex gap-2 justify-between items-center py-8 w-full sm:pl-44'>
      <div className='text-c-text'>
        <h1 className='text-3xl font-extralight inline-block'>
          Simple<b className='font-bold'>Task</b>_
        </h1>
        <span className='text-xs leading-none'>
          by&nbsp;
          <a href='https://github.com/strocs' target='_blank'>
            Strocs
          </a>
          .
        </span>
      </div>
      <ThemeBar />
    </header>
  )
}

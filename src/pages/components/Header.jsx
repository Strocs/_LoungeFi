import { ThemeBar } from "."

export const Header = () => {
  return (
    <header className='flex gap-2 justify-between items-center py-8 w-full max-w-2xl'>
      <div className='text-dark-extra dark:text-primary-light'>
        <h1 className='text-3xl font-bold inline-block leading-6'>
          Simple toDo_
        </h1>
        <span className='text-xs'>by Strocs.</span>
      </div>
      <div className='bg-primary-light h-10 w-44 dark:bg-primary-dark flex items-center justify-center gap-1 p-1 rounded-lg shadow-xl'>
        <ThemeBar />
      </div>
    </header>
  )
}

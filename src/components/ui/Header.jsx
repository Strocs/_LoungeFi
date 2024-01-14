export function Header({ children }) {
  return (
    <header className='flex items-start justify-between w-full py-4 max-w-xl gap-4'>
      {children}
    </header>
  )
}

export const ThemeButton = ({ mode, selected, children }) => {
  return (
    <button
      className={`flex gap-1 w-20 h-7 items-center py-[.4rem] px-3 ${
        mode === 'Light'
          ? selected
            ? 'text-yellow-300'
            : 'hover:text-yellow-300'
          : selected
          ? 'text-c-magenta'
          : 'hover:text-c-magenta'
      } ${selected && 'bg-c-bg dark:bg-c-extra rounded-full'}`}
      onClick={() => {}}
    >
      <div className='grid place-items-center'>{children}</div>
      <p className='text-xs h-full font-medium'>{mode}</p>
    </button>
  )
}

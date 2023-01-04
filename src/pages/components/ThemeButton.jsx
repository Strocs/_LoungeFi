export const ThemeButton = ({ mode, selected = true, icon }) => {
  return (
    <button
      onClick={() => {}}
      className={
        mode === 'Light'
          ? selected
            ? 'text-yellow-300'
            : 'hover:text-yellow-300'
          : selected
          ? 'text-c-magenta'
          : 'hover:text-c-magenta'
      }
    >
      {icon}
    </button>
  )
}

export const ThemeButton = ({ mode, selected = true, icon }) => {
  return (
    <button
      onClick={() => {}}
      className={
        `text-2xl ${mode === 'Light'
          ? selected
            ? 'text-yellow-400'
            : 'hover:text-yellow-400'
          : selected
          ? 'text-fuchsia-500'
          : 'hover:text-fuchsia-500'
      }`}
    >
      {icon}
    </button>
  )
}

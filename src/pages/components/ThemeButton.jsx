export const ThemeButton = ({
  mode = '',
  active = false,
  setDarkMode = () => {},
  icon
}) => {
  return (
    <button
      onClick={() => setDarkMode(mode === 'Dark')}
      className={`text-2xl ${
        mode === 'Light'
          ? active
            ? 'text-yellow-400'
            : 'text-c-gray hover:text-yellow-400'
          : active
          ? 'text-fuchsia-500'
          : 'text-c-gray hover:text-fuchsia-500'
      }`}
    >
      {icon}
    </button>
  )
}

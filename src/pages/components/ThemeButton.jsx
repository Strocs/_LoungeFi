export const ThemeButton = ({
  mode = '',
  active = false,
  onDarkMode = () => {},
  icon
}) => {
  const isDark = mode === 'Dark'

  return (
    <button
      onClick={() => onDarkMode(isDark)}
      className={`text-2xl ${
        isDark
          ? active
            ? 'text-fuchsia-500'
            : 'text-c-gray hover:text-fuchsia-500'
          : active
          ? 'text-yellow-400'
          : 'text-c-gray hover:text-yellow-400'
      }`}
    >
      {icon}
    </button>
  )
}

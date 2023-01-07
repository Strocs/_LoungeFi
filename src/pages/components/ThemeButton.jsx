export function ThemeButton ({ mode, active, onDarkMode, icon }) {
  const isDark = mode === 'Dark'

  return (
    <button
      type='button'
      aria-label={`${mode} Mode Button`}
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

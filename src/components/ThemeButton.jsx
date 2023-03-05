export function ThemeButton({ mode, onDarkMode, icon }) {
	return (
		<button
			type='button'
			aria-label={`${mode} Mode Button`}
			onClick={onDarkMode}
			className={`text-3xl mt-1 ${mode === 'Dark' ? 'text-fuchsia-500' : 'text-c-gray hover:text-fuchsia-500' ? 'text-yellow-400' : 'text-c-gray hover:text-yellow-400'}`}
		>
			{icon}
		</button>
	)
}

export function ThemeButton({ mode, onDarkMode, icon }) {
	return (
		<button type='button' aria-label={`${mode} Mode Button`} onClick={onDarkMode} className={`text-2xl mt-1 ${mode === 'Dark' ? 'text-purple-700' : 'text-orange-300'}`}>
			{icon}
		</button>
	)
}

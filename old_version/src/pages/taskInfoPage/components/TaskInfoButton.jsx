export const TaskInfoButton = ({ text, icon, onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`flex items-center justify-center gap-1 w-full max-w-fit h-min py-1 px-4 bg-c-box text-c-text rounded-full hover:bg-c-text hover:text-c-box focus:bg-c-box focus:text-c-text ${
				text === 'Close' ? 'justify-self-end' : 'justify-self-center'
			}`}
		>
			<p className='leading-none'>{text}</p> {icon}
		</button>
	)
}

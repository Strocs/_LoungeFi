export const PomodoroSetTimer = () => {
	return (
		<div>
			<form className='flex flex-col justify-between font-extralight text-center text-xs'>
				<label>
					Work
					<input name='work' type='text' className='bg-c-box block max-w-[4rem] rounded-full font-normal text-center' defaultValue='25:00' />
				</label>

				<label>
					Long Rest
					<input name='rest' type='text' className='bg-c-box block max-w-[4rem] rounded-full font-normal text-center' defaultValue='15:00' />
				</label>

				<label>
					Short Rest
					<input name='rest' type='text' className='bg-c-box block max-w-[4rem] rounded-full font-normal text-center' defaultValue='5:00' />
				</label>
			</form>
		</div>
	)
}

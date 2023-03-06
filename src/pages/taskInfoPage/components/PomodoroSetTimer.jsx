export const PomodoroSetTimer = () => {
	return (
		<div>
			<form className='flex justify-between font-extralight text-center'>
				<label>
					Work
					<input name='work' type='text' className='bg-c-box block max-w-[5rem] rounded-md font-normal text-center' defaultValue='25:00' />
				</label>

				<label>
					Rest
					<input name='rest' type='text' className='bg-c-box block max-w-[5rem] rounded-md font-normal text-center' defaultValue='15:00' />
				</label>

				<label>
					Intervals
					<input name='intervals' type='number' className='bg-c-box block max-w-[5rem] rounded-md font-normal text-center' defaultValue={4} />
				</label>
			</form>
		</div>
	)
}

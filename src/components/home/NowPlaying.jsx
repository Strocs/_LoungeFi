export const NowPlaying = ({ song }) => {
	return (
		<p className='text-[0.75rem] font-light'>
			<b className='font-medium'>Now Playing: </b>
			{song}
		</p>
	)
}

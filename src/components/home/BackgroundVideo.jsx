export const BackgroundVideo = ({ videoStreamURL, isPlaying }) => {
	return (
		<section className={`absolute top-0 bottom-0 w-full left-0 right-0 -z-20 overflow-hidden ${!isPlaying && 'opacity-30'} transition-[opacity] duration-500`}>
			<img
				src={videoStreamURL.url}
				alt={videoStreamURL.title}
				className='h-full object-cover'
			/>
		</section>
	)
}

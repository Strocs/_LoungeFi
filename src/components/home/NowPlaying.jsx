import { useEffect, useRef } from 'react'

export const NowPlaying = ({ radio, isPlaying, isStopped }) => {
	const radioWrapperRef = useRef(null)
	const containerRef = useRef(null)

	const animationLoop = () => {
		if (!radioWrapperRef || !containerRef) return

		const { width: containerWidth } = containerRef.current.getBoundingClientRect()
		const radioWrapperWidth = radioWrapperRef.current.scrollWidth
		const { width: radioWidth } = radioWrapperRef.current.children[0].getBoundingClientRect()

		// Gap between two elements based on width and container width
		const gap = containerWidth - radioWidth
		radioWrapperRef.current.style.gap = `${gap}px`

		// Initial and final offset for animations
		const initialOffset = (radioWrapperWidth - containerWidth + gap / 2) * -1
		const finalOffset = gap / 2

		const keyframe = [{ transform: `translateX(${initialOffset}px)` }, { transform: `translateX(${finalOffset}px)` }]
		const timing = {
			duration: 5000,
			iterations: Infinity,
		}

		return radioWrapperRef.current.animate(keyframe, timing)
	}

	useEffect(() => {
		if (!isPlaying) {
			animationLoop().pause()
		} else {
			animationLoop().play()
		}
	}, [radio])

	useEffect(() => {
		const loop = animationLoop()
		if (!isPlaying) {
			loop.pause()
		} else {
			loop.play()
		}
	}, [isPlaying])

	return (
		<div
			ref={containerRef}
			className={`overflow-hidden text-white ${isStopped && 'opacity-0'}`}
		>
			<div
				ref={radioWrapperRef}
				className='flex w-full duration-[5s] ease-linear transition-all'
			>
				<p className='text-[0.75rem] font-light flex-shrink-0'>
					<b className='font-medium'>Now Playing: </b>
					{radio.slice(0, 30) + '...'}
				</p>
				<p className='text-[0.75rem] font-light flex-shrink-0'>
					<b className='font-medium'>Now Playing: </b>
					{radio.slice(0, 30) + '...'}
				</p>
			</div>
		</div>
	)
}

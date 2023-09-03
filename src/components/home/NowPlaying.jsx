import { useRadioStore } from '@store'
import { useEffect, useRef } from 'react'

export const NowPlaying = () => {
  const isPlaying = useRadioStore(state => state.isPlaying)
  const isStopped = useRadioStore(state => state.isStopped)
  const isBuffering = useRadioStore(state => state.isBuffering)
  const currentRadioTitle = useRadioStore(state => state.currentRadioTitle)

  const text = isBuffering ? 'Buffering...' : isPlaying ? 'Now Playing' : 'Paused'
  const radioActiveSliced = currentRadioTitle.slice(0, 30) + '...'
  const radioWrapperRef = useRef(null)
  const containerRef = useRef(null)

  // const animationLoop = () => {
  //   if (!radioWrapperRef || !containerRef) return

  //   const containerWidth = containerRef.current.getBoundingClientRect().width
  //   const radioWidth = radioWrapperRef.current.children[0].getBoundingClientRect().width

  //   // Gap between two elements based on width and container width
  //   const gap = containerWidth - radioWidth
  //   radioWrapperRef.current.style.gap = `${gap}px`

  //   const radioWrapperWidth = radioWrapperRef.current.scrollWidth
  //   // Initial and final offset for animations
  //   const initialOffset = (radioWrapperWidth - containerWidth + gap / 2) * -1
  //   const finalOffset = gap / 2

  //   const keyframe = [
  //     { transform: `translateX(${initialOffset}px)` },
  //     { transform: `translateX(${finalOffset}px)` }
  //   ]
  //   const timing = {
  //     duration: 5000,
  //     iterations: Infinity
  //   }

  //   return radioWrapperRef.current.animate(keyframe, timing)
  // }

  // useEffect(() => {
  //   if (!isPlaying) {
  //     animationLoop().pause()
  //   } else {
  //     animationLoop().play()
  //   }
  // }, [isPlaying, title])

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden text-white w-full ${isStopped ? 'opacity-0' : ''}`}>
      <div
        ref={radioWrapperRef}
        className={`w-full text-center ${
          isPlaying ? 'duration-[5s] ease-linear transition-transform' : ''
        }`}>
        <p className='text-[0.75rem] font-light flex-shrink-0'>
          <b className='font-medium'>{text}: </b>
          {radioActiveSliced}
        </p>
        {/* <p className='text-[0.75rem] font-light flex-shrink-0'>
          <b className='font-medium'>Now Playing: </b>
          {radioActiveSliced}
        </p> */}
      </div>
    </div>
  )
}

import { useRadioStore } from '@store'
import { RadioControls } from '@components/home'
import ReactPlayer from 'react-player'
import { useEffect, useRef, useState } from 'react'

export const Radio = () => {
  const isPlaying = useRadioStore(state => state.isPlaying)
  const isStopped = useRadioStore(state => state.isStopped)
  const currentRadio = useRadioStore(state => state.currentRadio)
  const setIsBuffering = useRadioStore(state => state.setIsBuffering)
  const isBuffering = useRadioStore(state => state.isBuffering)
  const setCurrentRadioTitle = useRadioStore(state => state.setCurrentRadioTitle)

  const [scaleValue, setScaleValue] = useState(null)

  useEffect(() => {
    const windowHeight = window.innerHeight
    const scale = windowHeight / 2 / 100
    setScaleValue(scale)
  }, [])

  const videoRef = useRef(null)

  useEffect(() => {
    setCurrentRadioTitle(videoRef.current?.getInternalPlayer()?.videoTitle || '')
  })

  return (
    <>
      <RadioControls isPlaying={isPlaying} />
      {isBuffering && isPlaying && (
        <img className='absolute top-0 bottom-0 h-screen left-0 right-0 -z-10' src='glitch.gif' />
      )}
      {!isStopped && (
        <div className='fixed top-0 bottom-0 h-screen left-0 right-0 -z-20 overflow-hidden'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${currentRadio.id}`}
            // style={{ transform: `scale(${scaleValue})` }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  color: 'black'
                }
              }
            }}
            width='1920px'
            height='973px'
            className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
            playing={isPlaying}
            volume={0.5}
            onPlay={() => setIsBuffering(false)}
            onBuffer={() => setIsBuffering(true)}
            ref={videoRef}
          />
        </div>
      )}
    </>
  )
}

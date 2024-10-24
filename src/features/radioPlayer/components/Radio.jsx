import { useRadioStore } from '@context'
import { RadioControls } from '@features/radioPlayer'
import ReactPlayer from 'react-player'
import { useEffect, useRef } from 'react'
import { youtubeBaseURL } from '@constants'

export const Radio = () => {
  const isPlaying = useRadioStore(state => state.isPlaying)
  const isRadioOn = useRadioStore(state => state.isRadioOn)
  const { id } = useRadioStore(state => state.currentRadio)
  const volume = useRadioStore(state => state.volume)
  const setIsBuffering = useRadioStore(state => state.setIsBuffering)
  const isBuffering = useRadioStore(state => state.isBuffering)
  const setCurrentRadioTitle = useRadioStore(
    state => state.setCurrentRadioTitle
  )

  const videoRef = useRef(null)

  useEffect(() => {
    setCurrentRadioTitle(
      videoRef.current?.getInternalPlayer()?.videoTitle || ''
    )
  })

  return (
    <>
      <RadioControls isPlaying={isPlaying} />
      {isBuffering && isPlaying && (
        <img
          className='absolute top-0 bottom-0 left-0 right-0 -z-10 w-full h-full object-cover contrast-150'
          src='loading.gif'
        />
      )}
      {isRadioOn && (
        <div className='fixed top-0 bottom-0 h-screen left-0 right-0 -z-20 overflow-hidden landscape:scale-125'>
          <ReactPlayer
            url={youtubeBaseURL + id}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  color: 'black'
                }
              }
            }}
            width='1730px'
            height='973px'
            playsinline={true}
            className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
            playing={isPlaying}
            volume={volume}
            onPlay={() => setIsBuffering(false)}
            onBuffer={() => setIsBuffering(true)}
            ref={videoRef}
          />
        </div>
      )}
    </>
  )
}

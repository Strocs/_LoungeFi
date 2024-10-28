import { RadioControls } from '@features/radio/components'
import { youtubeBaseURL } from '@features/radio/constants'
import { useRadioStore } from '@features/radio/store'
import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

export const Radio = () => {
  const isPlaying = useRadioStore((state) => state.isPlaying)
  const isRadioOn = useRadioStore((state) => state.isRadioOn)
  const { id } = useRadioStore((state) => state.currentRadio)
  const volume = useRadioStore((state) => state.volume)
  const setIsBuffering = useRadioStore((state) => state.setIsBuffering)
  const isBuffering = useRadioStore((state) => state.isBuffering)
  const setCurrentRadioTitle = useRadioStore((state) => state.setCurrentRadioTitle)

  const videoRef = useRef(null)

  useEffect(() => {
    setCurrentRadioTitle(videoRef.current?.getInternalPlayer()?.videoTitle || '')
  })

  return (
    <>
      <RadioControls isPlaying={isPlaying} />
      {isBuffering && isPlaying && (
        <img
          className='-z-10 absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover contrast-150'
          src='loading.gif'
        />
      )}
      {isRadioOn && (
        <div className='-z-20 fixed top-0 right-0 bottom-0 left-0 h-screen overflow-hidden landscape:scale-125'>
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
            className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform'
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

import {
  PauseIcon,
  PlayIcon,
  SkipIcon,
  StopIcon,
  VolumenIcon
} from '@components/icons'
import { useLoFiRadioStore } from '@store'

export const RadioController = ({ isPlaying = false }) => {
  const onPlayOrPause = useLoFiRadioStore(state => state.onPlayOrPause)
  const onStop = useLoFiRadioStore(state => state.onStop)
  const playNext = useLoFiRadioStore(state => state.playNext)
  const playLast = useLoFiRadioStore(state => state.playLast)

  return (
    <>
      <div className='flex gap-4 text-white'>
        <button
          className='shadow-opacityGrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'
          onClick={playLast}
        >
          <SkipIcon reverse />
        </button>
        <button
          className='shadow-opacityGrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'
          onClick={onPlayOrPause}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          className='shadow-opacityGrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'
          onClick={onStop}
        >
          <StopIcon />
        </button>
        <button
          className='shadow-opacityGrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'
          onClick={playNext}
        >
          <SkipIcon />
        </button>
      </div>
      <button className='h-7 w-7 bg-white rounded-full shadow-[-3px_3px_0_0] shadow-blue flex items-center justify-center text-dark'>
        <VolumenIcon />
      </button>
    </>
  )
}

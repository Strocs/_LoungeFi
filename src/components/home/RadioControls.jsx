import {
  PauseIcon,
  PlayIcon,
  SkipIcon,
  StopIcon,
  VolumenIcon
} from '@components/icons'
import { useRadioStore } from '@store'
import { Button } from '../ui'

export const RadioControls = ({ isPlaying = false }) => {
  const onPlayOrPause = useRadioStore(state => state.onPlayOrPause)
  const turnOffRadio = useRadioStore(state => state.turnOffRadio)
  const playNext = useRadioStore(state => state.playNext)
  const playLast = useRadioStore(state => state.playLast)

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
          onClick={turnOffRadio}
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
      <Button circle shadow>
        <VolumenIcon />
      </Button>
    </>
  )
}

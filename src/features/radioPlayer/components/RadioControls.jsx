import { PauseIcon, PlayIcon, SkipIcon, StopIcon } from '@components/icons'
import { VolumeSlider } from '@features/radioPlayer'
import { useRadioStore } from '@context'

export const RadioControls = ({ isPlaying = false }) => {
  const onPlayOrPause = useRadioStore(state => state.onPlayOrPause)
  const turnOffRadio = useRadioStore(state => state.turnOffRadio)
  const playNext = useRadioStore(state => state.playNext)
  const playLast = useRadioStore(state => state.playLast)

  return (
    <section className='h-fit place-self-center'>
      <div className='flex gap-4 text-slate-100 mb-1'>
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
      <VolumeSlider />
    </section>
  )
}

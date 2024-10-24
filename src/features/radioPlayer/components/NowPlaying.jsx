import { youtubeBaseURL } from '@constants'
import { useRadioStore } from '@context'

export const NowPlaying = () => {
  const isPlaying = useRadioStore(state => state.isPlaying)
  const isRadioOn = useRadioStore(state => state.isRadioOn)
  const isBuffering = useRadioStore(state => state.isBuffering)
  const currentRadioTitle = useRadioStore(state => state.currentRadioTitle)
  const { id } = useRadioStore(state => state.currentRadio)

  const controlText = isBuffering
    ? 'Buffering...'
    : isPlaying
    ? 'Now Playing:'
    : 'Paused:'

  return (
    <div
      className={`text-slate-100 w-full h-10 relative text-center ${
        !isRadioOn ? 'opacity-0' : ''
      }`}
    >
      <p className='font-medium'>{controlText}</p>
      <a
        href={youtubeBaseURL + id}
        className='text-[0.75rem] font-light whitespace-nowrap text-ellipsis overflow-hidden absolute bottom-0 left-0 right-0 hover:opacity-70 transition-opacity duration-150'
      >
        {!isBuffering ? currentRadioTitle : ''}
      </a>
    </div>
  )
}

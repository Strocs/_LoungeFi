import { youtubeBaseURL } from '@features/radio/constants'
import { useRadioStore } from '@features/radio/store'
import { cn } from '@utils/clsxWithTailwindMerge'

export const NowPlaying = () => {
  const isPlaying = useRadioStore((state) => state.isPlaying)
  const isRadioOn = useRadioStore((state) => state.isRadioOn)
  const isBuffering = useRadioStore((state) => state.isBuffering)
  const currentRadioTitle = useRadioStore((state) => state.currentRadioTitle)
  const { id } = useRadioStore((state) => state.currentRadio)

  const controlText = isBuffering ? 'Buffering...' : isPlaying ? 'Now Playing:' : 'Paused:'

  return (
    <div
      className={cn(
        'relative h-10 w-full text-center text-slate-100 opacity-0 transition-opacity duration-150',
        isRadioOn && 'opacity-100'
      )}
    >
      <p className='font-medium'>{controlText}</p>
      <a
        href={youtubeBaseURL + id}
        className='absolute right-0 bottom-0 left-0 overflow-hidden text-ellipsis whitespace-nowrap font-light text-[0.75rem] transition-opacity duration-150 hover:opacity-70'
      >
        {!isBuffering ? currentRadioTitle : ''}
      </a>
    </div>
  )
}

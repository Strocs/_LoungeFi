import { useLoFiRadioStore } from '@store'
import { NowPlaying, RadioController, BackgroundVideo } from '.'

export const Radio = ({ renderOnLeft }) => {
  // const isPlaying = useLoFiRadioStore((state) => state.isPlaying)
  // const isStopped = useLoFiRadioStore((state) => state.isStopped)
  // const activeRadio = useLoFiRadioStore((state) => state.activeRadio)

  return (
    <footer className='max-w-2xl w-full'>
      <div className='px-6 py-1 pb-4 flex justify-between items-center'>
        {renderOnLeft}
        {/* <RadioController isPlaying={isPlaying} /> */}
      </div>
      {/* <NowPlaying
				radio={activeRadio.title}
				isStopped={isStopped}
				isPlaying={isPlaying}
			/> */}
      {/* {!isStopped && (
				<BackgroundVideo
					videoStreamURL={activeRadio.url}
					isPlaying={isPlaying}
				/>
			)} */}
    </footer>
  )
}

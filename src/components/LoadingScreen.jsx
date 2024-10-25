import { HeaderLogin } from '@features/authentication'
import { Spinner } from './Spinner'
import { CheckIcon } from './icons'

export const LoadingScreen = () => {
  return (
    <>
      <HeaderLogin noAnimation />
      <div className='relative mt-20 h-fit'>
        <Spinner size={180} speed={2.4} />
        <CheckIcon
          size={100}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </>
  )
}

import { CheckIcon } from '@components/icons'
import { Spinner } from '@components'

export const CheckingAuth = () => {
  return (
    <>
      <div className='relative mt-20 h-fit'>
        <Spinner size={180} speed={2.4} />
        <CheckIcon size={100} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
    </>
  )
}

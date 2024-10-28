import { CheckIcon } from '@components/icons'
import { Spinner } from '@components'

export const CheckingAuth = () => {
  return (
    <>
      <div className='relative mt-20 h-fit'>
        <Spinner size={180} speed={2.4} />
        <CheckIcon size={100} className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2' />
      </div>
    </>
  )
}

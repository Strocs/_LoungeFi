import { HeaderLogin } from '@features/authentication'
import { Loading } from './Loading'

export const LoadingScreen = () => {
  return (
    <>
      <HeaderLogin noAnimation />
      <div className='mt-20'>
        <Loading size={180} />
      </div>
    </>
  )
}

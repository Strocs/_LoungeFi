import { TitleAndDescription } from '@components'
import { CheckingAuth, LoginForm } from '@features/auth/components'
import { useCheckAuth } from '@features/auth/hooks'

export const LoginPage = () => {
  const status = useCheckAuth()

  return (
    <>
      <TitleAndDescription />
      <main className='flex size-full max-w-xs flex-col items-center gap-10 pt-20'>
        {status === 'checking' ? <CheckingAuth /> : <LoginForm />}
      </main>
    </>
  )
}

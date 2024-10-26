import { TitleAndDescription } from '@components/TitleAndDescription'
import { CheckingAuth, RegisterForm } from '@features/auth/components'
import { useCheckAuth } from '@features/auth/hooks'

export const RegisterPage = () => {
  const status = useCheckAuth()

  return (
    <>
      <TitleAndDescription />
      <main className='flex size-full max-w-xs flex-col items-center gap-10 pt-20'>
        {status === 'checking' ? <CheckingAuth /> : <RegisterForm />}
      </main>
    </>
  )
}

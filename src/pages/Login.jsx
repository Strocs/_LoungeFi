import { Button, ErrorMessage, Input } from '@components/ui'
import { GoogleIcon, XIcon } from '@components/icons'
import { Link } from 'react-router-dom'
import { HeaderLogin } from '@features/authentication'
import { useAuthStore } from '@context/useAuthStore'
import { useMemo, useEffect } from 'react'
import { useForm } from '@hooks'

const formData = {
  email: '',
  password: '',
}

export const Login = () => {
  const { email, password, onInputChange } = useForm(formData)

  const startEmailAndPasswordSignIn = useAuthStore(
    (state) => state.startEmailAndPasswordSignIn,
  )
  const startGoogleSignIn = useAuthStore((state) => state.startGoogleSignIn)
  const logout = useAuthStore((state) => state.logout)
  const { status, errorMessage } = useAuthStore((state) => state.userAuth)

  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  useEffect(() => {
    logout(errorMessage || null)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    startEmailAndPasswordSignIn({ email, password })
  }

  const handleGoggleSignIn = () => {
    startGoogleSignIn()
  }

  return (
    <>
      <HeaderLogin />
      <main className='flex size-full max-w-xs flex-col items-center gap-10 pt-20'>
        <form
          onSubmit={handleSubmit}
          className='flex h-min w-full flex-col gap-4 font-light'
        >
          <label htmlFor='email' name='email'>
            <span className='ml-3'>Email</span>
            <Input
              name='email'
              value={email}
              onChange={onInputChange}
              placeholder='email@example.com'
              type='email'
              required
            />
          </label>
          <label htmlFor='password' name='password'>
            <span className='ml-3'>Password</span>
            <Input
              name='password'
              value={password}
              onChange={onInputChange}
              placeholder='••••••••'
              type='password'
              required
            />
          </label>
          <Button
            disabled={isCheckingAuth}
            type='submit'
            color='blue'
            outline='white'
            hover='white'
            size='md'
            className='mt-6 w-full'
          >
            Log in
          </Button>
        </form>
        <ErrorMessage
          style={{ display: errorMessage ? '' : 'none' }}
          errorText={
            errorMessage?.includes('auth/invalid-credential')
              ? 'Email or Password are wrong, try again.'
              : 'Something Wrong happen, Try again.'
          }
        />
        <section className='grid h-fit gap-3'>
          <p className='text-center text-sm font-light'>Or sign up using</p>
          <div className='flex w-full items-center justify-center gap-3'>
            <Button
              onClick={handleGoggleSignIn}
              disabled={isCheckingAuth}
              outline='white'
              size='round-xl'
              hover='white'
              color='red'
            >
              <GoogleIcon />
            </Button>
            {/* <Button */}
            {/*   outline='white' */}
            {/*   size='round-xl' */}
            {/*   hover='white' */}
            {/*   className='bg-dark text-white' */}
            {/* > */}
            {/*   <XIcon /> */}
            {/* </Button> */}
          </div>
        </section>
        <p className='text-sm text-grey'>
          If you don{"'"}t have an account{' '}
          <Link
            to={'/register'}
            className='text-white transition-colors duration-150 hover:text-blue'
          >
            Sign Up here
          </Link>
        </p>
      </main>
    </>
  )
}

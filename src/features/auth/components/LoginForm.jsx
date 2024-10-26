import { GoogleIcon } from '@components/icons'
import { Button, ErrorMessage, Input } from '@components/ui'
import { useAuthStore } from '@features/auth/store'
import { useForm } from '@hooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const startEmailAndPasswordSignIn = useAuthStore((state) => state.startEmailAndPasswordSignIn)
  const startGoogleSignIn = useAuthStore((state) => state.startGoogleSignIn)
  const logout = useAuthStore((state) => state.logout)
  const { status, errorMessage } = useAuthStore((state) => state.userAuth)

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
      <form onSubmit={handleSubmit} className='flex h-min w-full flex-col gap-4 font-light'>
        <label htmlFor='email' name='email'>
          <span className='ml-3'>Email</span>
          <Input
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder='email@example.com'
            type='email'
            required={true}
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
            required={true}
          />
        </label>
        <Button
          disabled={status === 'checking'}
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
            disabled={status === 'checking'}
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
        <Link to={'/register'} className='text-white transition-colors duration-150 hover:text-blue'>
          Sign Up here
        </Link>
      </p>
    </>
  )
}

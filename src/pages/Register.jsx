import { Button, ErrorMessage } from '@components/ui'
import { useAuthStore } from '@context'
import { HeaderLogin, TextField } from '@features/authentication'
import { useForm } from '@hooks'
import { useState, useEffect, useMemo } from 'react'
import validator from 'validator'

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [value => !validator.isEmpty(value), 'Name field is mandatory'],
  email: [value => validator.isEmail(value), 'Must be a valid email'],
  password: [
    value => value.length >= 6,
    'Password must have at least 6 characters'
  ]
}

export const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useAuthStore(state => state.userAuth)
  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  const startCreatingUserWithEmailAndPassword = useAuthStore(
    state => state.startCreatingUserWithEmailAndPassword
  )
  const logout = useAuthStore(state => state.logout)

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations)

  useEffect(() => {
    logout(null)
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    startCreatingUserWithEmailAndPassword(formState)
  }

  return (
    <>
      <HeaderLogin />
      <main className='flex flex-col gap-10 h-full items-center w-full max-w-xs pt-20'>
        <form
          className='flex flex-col gap-4 text-light w-full'
          onSubmit={handleSubmit}
        >
          <TextField
            label='Name'
            placeholder='Strocs'
            type='text'
            name='displayName'
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            errorText={displayNameValid}
            required
          />
          <TextField
            label='Email'
            placeholder='email@example.com'
            type='email'
            name='email'
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            errorText={emailValid}
            required
          />
          <TextField
            label='Password'
            placeholder='••••••••'
            type='password'
            customClass='placeholder:'
            name='password'
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            errorText={passwordValid}
            required
          />
        </form>
        <ErrorMessage
          style={{ display: errorMessage ? '' : 'none' }}
          errorText={errorMessage}
        />
        <section className='flex gap-4 justify-end w-full'>
          <Button
            disabled={isCheckingAuth}
            onClick={handleSubmit}
            type='submit'
            color='blue'
            outline='white'
            hover='white'
            size='md'
            className='w-full'
          >
            Sign Up
          </Button>
          <Button
            as='Link'
            to='/login'
            color='red'
            outline='white'
            hover='white'
            size='md'
            className='shrink-0'
          >
            Back to Login
          </Button>
        </section>
      </main>
    </>
  )
}

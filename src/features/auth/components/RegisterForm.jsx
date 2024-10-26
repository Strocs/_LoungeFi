import { Button, ErrorMessage } from '@components/ui'
import { TextField } from '@features/auth/components'
import { useAuthStore } from '@features/auth/store'
import { useForm } from '@hooks/useForm'
import { useEffect, useState } from 'react'
import validator from 'validator'

const formValidations = {
  displayName: [(value) => !validator.isEmpty(value), 'Name field is mandatory'],
  email: [(value) => validator.isEmail(value), 'Must be a valid email'],
  password: [(value) => value.length >= 6, 'Password must have at least 6 characters']
}

export const RegisterForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useAuthStore((state) => state.userAuth)
  const logout = useAuthStore((state) => state.logout)
  const startCreatingUserWithEmailAndPassword = useAuthStore((state) => state.startCreatingUserWithEmailAndPassword)

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
  } = useForm(
    {
      displayName: '',
      email: '',
      password: ''
    },
    formValidations
  )

  useEffect(() => {
    logout(null)
  }, [logout])

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) {
      return
    }
    startCreatingUserWithEmailAndPassword(formState)
  }

  return (
    <>
      <form className='flex w-full flex-col gap-4 font-light' onSubmit={handleSubmit}>
        <TextField
          label='Name'
          placeholder='Strocs'
          type='text'
          name='displayName'
          value={displayName}
          onChange={onInputChange}
          error={!!displayNameValid && formSubmitted}
          errorText={displayNameValid}
          required={true}
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
          required={true}
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
          required={true}
        />
      </form>
      <ErrorMessage style={{ display: errorMessage ? '' : 'none' }} errorText={errorMessage} />
      <section className='flex w-full justify-end gap-4'>
        <Button
          disabled={status === 'checking'}
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
        <Button as='Link' to='/login' color='red' outline='white' hover='white' size='md' className='shrink-0'>
          Back to Login
        </Button>
      </section>
    </>
  )
}

import { Button, Input } from '@components/ui'
import { HeaderLogin } from '@features/authentication'

export const Register = () => {
  return (
    <>
      <HeaderLogin />
      <main className='flex flex-col gap-10 h-full items-center w-full max-w-xs pt-20'>
        <form action='' className='flex flex-col gap-4 text-light w-full'>
          <label htmlFor='name' name='name'>
            <span className='ml-3'>Name</span>
            <Input placeholder='Strocs' type='text' required />
          </label>
          <label htmlFor='email' name='email'>
            <span className='ml-3'>Email</span>
            <Input placeholder='email@example.com' type='email' required />
          </label>
          <label htmlFor='password' name='password'>
            <span className='ml-3'>Password</span>
            <Input
              placeholder='••••••••'
              type='password'
              customClass='placeholder:'
              required
            />
          </label>
        </form>
        <section className='flex gap-4 justify-end w-full'>
          <Button
            color='blue'
            outline='white'
            hover='white'
            size='md'
            className='w-full'
          >
            Register
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

import { Header, Button, Title, Input } from '@components/ui'
import { GoogleIcon, XIcon } from '@components/icons'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
      <Header>
        <div className='flex flex-col w-fit mx-auto gap-10'>
          <Title isBig />
          <p className='max-w-[22rem] text-center mx-auto font-light'>
            Set a <strong className='font-semibold'>Pomodoro timer</strong>,
            Listen <strong className='font-semibold'>LoFi music</strong> while
            you are focus on your
            <strong className='font-semibold'> daily tasks</strong>.
          </p>
        </div>
      </Header>
      <main className='flex flex-col gap-10 h-full items-center w-full max-w-xs pt-20'>
        <form action='' className='flex flex-col gap-4 text-light w-full h-min'>
          <label htmlFor='email' name='email'>
            <span className='ml-3'>Email</span>
            <Input placeholder='email@example.com' type='email' required />
          </label>
          <label htmlFor='password' name='password'>
            <span className='ml-3'>Password</span>
            <Input placeholder='••••••••' type='password' required />
          </label>
        </form>
        <Button
          color='blue'
          outline='white'
          hover='white'
          size='md'
          className='w-full'
        >
          Sing up
        </Button>
        <section className='grid gap-3 h-fit'>
          <p className='text-center text-sm font-light'>Or sing up using</p>
          <div className='flex gap-3 w-full items-center justify-center'>
            <Button outline='white' size='round-xl' hover='white' color='red'>
              <GoogleIcon />
            </Button>
            <Button
              outline='white'
              size='round-xl'
              hover='white'
              className='bg-dark text-white'
            >
              <XIcon />
            </Button>
          </div>
        </section>
        <p className='text-sm text-grey'>
          If you don{"'"}t have an account register{' '}
          <Link
            to={'/register'}
            className='text-white hover:text-blue transition-colors duration-150'
          >
            here
          </Link>
        </p>
      </main>
      <footer></footer>
    </>
  )
}

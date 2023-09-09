import { Header, Button, Title, Input } from '@components/ui'
import { GoogleIcon } from '@components/icons'

export const Login = () => {
  return (
    <>
      <Header>
        <Title />
        <Button size='xl' color='blue' shadow='white' outline='white'>
          Register
        </Button>
      </Header>
      <main className='grid gap-10 h-full items-center w-full max-w-xs'>
        <form action='' className='flex flex-col gap-2 text-light'>
          <label htmlFor='email' name='email'>
            Email
          </label>
          <Input placeholder='email@example.com' type='email' />
          <label htmlFor='password' name='password'>
            Password
          </label>
          <Input placeholder='********' type='password' />
        </form>
        <section className='grid gap-3 h-fit'>
          <p className='text-center text-sm font-light'>Or sing up using</p>
          <div className='flex gap-3 w-full items-center justify-center'>
            <Button outline='white' size='round-xl' color='red'>
              <GoogleIcon />
            </Button>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

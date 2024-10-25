import { Header, Title } from '@components/ui'

export const HeaderLogin = ({ noAnimation }) => {
  return (
    <Header>
      <div className='mx-auto flex w-fit flex-col gap-10'>
        <Title isBig noAnimation={noAnimation} />
        <p className='mx-auto max-w-[22rem] px-4 text-center text-sm font-light sm:text-base'>
          Set a <strong className='font-semibold'>Pomodoro timer</strong> and
          listen to <strong className='font-semibold'>LoFi music</strong> while
          staying focused on your
          <strong className='font-semibold'> daily tasks</strong>.
        </p>
      </div>
    </Header>
  )
}

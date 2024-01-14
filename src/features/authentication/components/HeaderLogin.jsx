import { Header, Title } from '@components/ui'

export const HeaderLogin = ({ noAnimation }) => {
  return (
    <Header>
      <div className='flex flex-col w-fit mx-auto gap-10'>
        <Title isBig noAnimation={noAnimation} />
        <p className='max-w-[22rem] text-center mx-auto font-light text-sm px-4 sm:text-base'>
          Set a <strong className='font-semibold'>Pomodoro timer</strong>,
          Listen <strong className='font-semibold'>LoFi music</strong> while you
          are focus on your
          <strong className='font-semibold'> daily tasks</strong>.
        </p>
      </div>
    </Header>
  )
}

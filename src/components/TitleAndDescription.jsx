import { Header, Title } from '@components/ui'

export const TitleAndDescription = ({ noAnimation }) => {
  return (
    <Header>
      <div className='mx-auto flex w-fit flex-col gap-10'>
        <Title isBig={true} noAnimation={noAnimation} />
        <p className='mx-auto max-w-[22rem] px-4 text-center font-light text-sm sm:text-base'>
          Listen to <b className='font-bold'>LoFi music</b> and set a <b className='font-bold'>Pomodoro timer</b> to
          focus on your <b className='font-bold'>Daily Tasks</b>.
        </p>
      </div>
    </Header>
  )
}

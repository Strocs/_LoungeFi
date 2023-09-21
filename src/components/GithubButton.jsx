import { GithubIcon } from './icons'

export const GithubButton = () => {
  return (
    <a
      href='https://github.com/Strocs/TaskDone'
      target='_blank'
      rel='noreferrer'
      className='text-white p-1 justify-self-end rounded-full outline outline-2 outline-white hover:bg-white hover:text-dark transition-all duration-150 cursor-pointer'>
      <GithubIcon size={20} />
    </a>
  )
}

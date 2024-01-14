import { GithubIcon } from './icons'

export const GithubButton = () => {
  return (
    <a
      href='https://github.com/Strocs/TaskDone'
      target='_blank'
      rel='noreferrer'
      className='text-slate-100 p-1 justify-self-end rounded-full outline outline-2 outline-slate-100 hover:bg-slate-100 hover:text-dark transition-all duration-150 cursor-pointer'
    >
      <GithubIcon size={20} />
    </a>
  )
}

import { GithubIcon } from './icons'

export const GithubButton = () => {
  return (
    <a
      href='https://github.com/Strocs/TaskDone'
      target='_blank'
      rel='noreferrer'
      className='cursor-pointer justify-self-end rounded-full p-1 text-slate-100 outline outline-2 outline-slate-100 transition-all duration-150 hover:bg-slate-100 hover:text-dark'
    >
      <GithubIcon size={20} />
    </a>
  )
}

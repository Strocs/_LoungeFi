import { Button } from '@components/ui'

export const PomodoroSettingsModal = ({ onClick }) => {
  return (
    <div className='grid gap-2 bg-slate-100 outline outline-2 outline-red rounded-xl absolute w-fit h-fit py-2 px-6 right-1 top-10 z-50'>
      <Button size='md' color='text-red' outline='red' hover='red' onClick={onClick}>
        Reset
      </Button>
    </div>
  )
}

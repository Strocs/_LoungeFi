import { Button } from '@components/ui'

export const PomodoroSettingsModal = ({ onClick }) => {
  return (
    <div className='absolute top-10 right-1 z-50 grid h-fit w-fit gap-2 rounded-xl bg-slate-100 px-6 py-2 outline outline-2 outline-red'>
      <Button size='md' color='text-red' outline='red' hover='red' onClick={onClick}>
        Reset
      </Button>
    </div>
  )
}

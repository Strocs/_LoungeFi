import { Button } from '@components/ui'

export const PomodoroSettingsModal = ({ onClick }) => {
  return (
    <div className='grid gap-2 bg-red outline outline-2 outline-white rounded-xl absolute w-fit h-fit p-2 shadow right-1 top-8 z-50'>
      <Button size='md' color='text-red' outline='red' hover='red' onClick={onClick}>
        Reset
      </Button>
    </div>
  )
}

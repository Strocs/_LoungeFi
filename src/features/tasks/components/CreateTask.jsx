import { useTaskStore } from '@features/tasks/store'
import { useTextInput } from '@hooks'
import { PlusIcon } from '@components/icons'
import { Input, Button } from '@components/ui'
import { useRadioStore } from '@features/radioPlayer/store'

export const CreateTask = () => {
  const createTask = useTaskStore((state) => state.createTask)
  const toggleIsWriting = useTaskStore((state) => state.toggleIsWriting)
  const isRadioOn = useRadioStore((state) => state.isRadioOn)

  const { ref, handleSubmit } = useTextInput(() => {
    createTask({ task: ref.current.value })
  })

  return (
    <form className='flex items-center gap-4' onSubmit={handleSubmit}>
      <Input
        isRadioOn={isRadioOn}
        name='add-task'
        placeholder='What we need to do?'
        autoComplete='off'
        type='text'
        reference={ref}
        onBlur={() => toggleIsWriting(false)}
        onClick={() => toggleIsWriting(true)}
      />
      <Button
        type='submit'
        color='blue'
        size='round-md'
        outline='white'
        className={isRadioOn ? 'bg-dark/20 outline-dark/20 transition-[background-color,outline] duration-150' : ''}
      >
        <PlusIcon />
      </Button>
    </form>
  )
}

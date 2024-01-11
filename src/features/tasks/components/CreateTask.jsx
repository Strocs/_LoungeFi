import { useTaskStore } from '@context'
import { useTextInput } from '@hooks'
import { PlusIcon } from '@components/icons'
import { Input, Button } from '@components/ui'
import { useRadioStore } from '@context/useRadioStore'

export const CreateTask = () => {
  const createTask = useTaskStore(state => state.createTask)
  const toggleIsWriting = useTaskStore(state => state.toggleIsWriting)
  const isRadioOn = useRadioStore(state => state.isRadioOn)

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
        className={
          isRadioOn
            ? 'bg-opacityDark outline-opacityDark transition-[background-color,outline] duration-150'
            : ''
        }
      >
        <PlusIcon />
      </Button>
    </form>
  )
}

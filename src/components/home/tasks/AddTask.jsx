import { useTaskStore } from '@store'
import { useAddItem } from '@hooks'
import { PlusIcon } from '@components/icons'
import { Input, Button } from '@components/ui'

export const AddTask = () => {
  const addTask = useTaskStore(state => state.addTask)
  const groupActive = useTaskStore(state => state.groupActive)
  const toggleIsWriting = useTaskStore(state => state.toggleIsWriting)

  const { ref, handleSubmit } = useAddItem(() => {
    addTask({ task: ref.current.value, group: groupActive })
  })

  return (
    <form className='flex items-center gap-4'>
      <Input
        name='add-task'
        placeholder='What we need to do?'
        autoComplete='off'
        type='text'
        reference={ref}
        onBlur={() => toggleIsWriting(false)}
        onClick={() => toggleIsWriting(true)}
        onSubmit={handleSubmit}
      />
      <Button color='blue' size='round-md' outline='white' onClick={handleSubmit}>
        <PlusIcon />
      </Button>
    </form>
  )
}

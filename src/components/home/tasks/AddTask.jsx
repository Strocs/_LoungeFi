import { useTaskStore } from '@store'
import { useAddItem } from '@hooks'
import { PlusIcon } from '@components/icons'
import { Input, Button } from '@components/ui'

export const AddTask = () => {
  const createTask = useTaskStore(state => state.createTask)
  const toggleIsWriting = useTaskStore(state => state.toggleIsWriting)

  const { ref, handleSubmit } = useAddItem(() => {
    createTask({ task: ref.current.value })
  })

  return (
    <form className='flex items-center gap-4' onSubmit={handleSubmit}>
      <Input
        name='add-task'
        placeholder='What we need to do?'
        autoComplete='off'
        type='text'
        reference={ref}
        onBlur={() => toggleIsWriting(false)}
        onClick={() => toggleIsWriting(true)}
      />
      <Button type='submit' color='blue' size='round-md' outline='white'>
        <PlusIcon />
      </Button>
    </form>
  )
}

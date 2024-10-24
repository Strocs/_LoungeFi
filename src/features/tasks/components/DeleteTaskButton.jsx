import { TrashIcon } from '@components/icons'
import { Button } from '@components/ui'
import { useTaskStore } from '@context'

export const DeleteTaskButton = ({ id, group }) => {
  const deleteTask = useTaskStore(state => state.deleteTask)
  return (
    <Button
      onClick={() => deleteTask({ id, group })}
      size='round-sm'
      color='text-red'
      outline='red'
      hover='red'
    >
      <TrashIcon />
    </Button>
  )
}

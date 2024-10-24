import { CheckIcon } from '@components/icons'
import { Button } from '@components/ui'
import { useTaskStore } from '@context'

export const DoneTaskButton = ({ done, id, group }) => {
  const toggleDone = useTaskStore(state => state.toggleDone)
  return (
    <Button
      onClick={() => toggleDone({ id, group })}
      size='round-sm'
      color={done ? 'green' : 'transparent'}
      outline='white'
    >
      <CheckIcon />
    </Button>
  )
}

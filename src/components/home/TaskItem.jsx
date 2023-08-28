import { Button } from '@components/ui'
import { TrashIcon, CheckIcon } from '@components/icons'
import { useTaskStore } from '@store'

export const TaskItem = ({ id, task, done }) => {
  const toggleDone = useTaskStore(state => state.toggleDone)
  const deleteTask = useTaskStore(state => state.deleteTask)

  return (
    <li className='flex items-center gap-2'>
      <Button
        onClick={() => toggleDone(id)}
        border='thick'
        color={done ? 'done' : 'transparent'}
        padding='sm'
      >
        <CheckIcon />
      </Button>
      <p
        className={`leading-none text-sm w-full ${
          done ? 'line-through text-grey' : ''
        }`}
      >
        {task}
      </p>
      <div className='flex items-center'>
        <Button onClick={() => deleteTask(id)} color='danger' padding='sm'>
          <TrashIcon />
        </Button>
        <div className='flex flex-col gap-1 items-end w-4 cursor-grab'>
          <span className='w-[2px] h-[2px] rounded-full bg-white' />
          <span className='w-[2px] h-[2px] rounded-full bg-white' />
          <span className='w-[2px] h-[2px] rounded-full bg-white' />
        </div>
      </div>
    </li>
  )
}

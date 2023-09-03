import { Button } from '@components/ui'
import { TrashIcon, CheckIcon } from '@components/icons'
import { useTaskStore } from '@store'

export const TaskItem = ({ id, task, done }) => {
  const toggleDone = useTaskStore(state => state.toggleDone)
  const deleteTask = useTaskStore(state => state.deleteTask)

  return (
    <li className='flex items-center gap-2 py-2 px-4'>
      <Button
        onClick={() => toggleDone(id)}
        outline
        color={done ? 'done' : 'transparent'}
        circle>
        <CheckIcon />
      </Button>
      <p className={`leading-none text-sm w-full ${done ? 'line-through text-grey' : ''}`}>
        {task}
      </p>
      <div className='flex items-center'>
        <Button onClick={() => deleteTask(id)} color='danger' outline circle>
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

import { Reorder } from 'framer-motion'
import { Button } from '@components/ui'
import { TrashIcon, CheckIcon, GripIcon } from '@components/icons'
import { useTaskStore } from '@store'
import { ANIMATION_VARIANTS, UNGROUPED } from '@constants'

export const TaskItem = ({ item, group = UNGROUPED }) => {
  const { id, task, done } = item

  const toggleDone = useTaskStore(state => state.toggleDone)
  const deleteTask = useTaskStore(state => state.deleteTask)

  return (
    <Reorder.Item
      initial='hidden'
      animate='visible'
      variants={ANIMATION_VARIANTS.OPACITY}
      value={item}
      className='flex items-center gap-2 py-2 pr-1 pl-3 hover:bg-grey hover:bg-opacity-10 transition-[background-color] duration-200 rounded-full outline-white cursor-grab'>
      <Button
        onClick={() => toggleDone({ id, group })}
        size='round-sm'
        color={done ? 'green' : 'transparent'}
        outline='white'>
        <CheckIcon />
      </Button>
      <p className={`leading-none text-sm w-full ${done ? 'line-through text-grey' : ''}`}>
        {task}
      </p>
      <div className='flex items-center gap-2'>
        <Button
          onClick={() => deleteTask({ id, group })}
          size='round-sm'
          color='text-red'
          outline='red'
          hover='red'>
          <TrashIcon />
        </Button>
        <div className='cursor-pointer'>
          <GripIcon size={24} />
        </div>
      </div>
    </Reorder.Item>
  )
}

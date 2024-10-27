import { Reorder, useDragControls } from 'framer-motion'
import { MoveIcon } from '@components/icons'
import { useTaskStore } from '@features/tasks/store'
import { ANIMATION_VARIANTS } from '@constants'
import { DeleteTaskButton, DoneTaskButton } from '@features/tasks/components'
import { UNGROUPED } from '@features/groups/constants'
import { cn } from '@utils/clsxWithTailwindMerge'

export const TaskItem = ({ item, group = UNGROUPED }) => {
  const { id, task, done } = item

  const setOpenFocusModal = useTaskStore((state) => state.setOpenFocusModal)

  const controls = useDragControls()

  const handlePointerDown = (e) => {
    e.preventDefault()
    controls.start(e)
  }

  const handleDoubleClick = () => {
    setOpenFocusModal({ isOpen: true, task: { id, group } })
  }

  return (
    <Reorder.Item
      initial='hidden'
      animate='visible'
      variants={ANIMATION_VARIANTS.opacity}
      value={item}
      whileDrag={{ scale: 0.95 }}
      dragListener={false}
      dragControls={controls}
      className='flex items-center gap-2 rounded-full py-2 pr-1 pl-3 outline-slate-100 transition-[background-color] duration-200 hover:bg-grey hover:bg-opacity-10'
    >
      <DoneTaskButton group={group} id={id} done={done} />
      <p
        onDoubleClick={handleDoubleClick}
        className={cn('w-full cursor-pointer text-sm leading-none', done && 'text-grey line-through')}
      >
        {task}
      </p>
      <div className='flex items-center gap-2'>
        <DeleteTaskButton id={id} group={group} />
        <div className='cursor-grab touch-none' onPointerDown={handlePointerDown}>
          <MoveIcon size={24} />
        </div>
      </div>
    </Reorder.Item>
  )
}

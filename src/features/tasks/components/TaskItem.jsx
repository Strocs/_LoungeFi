import { Reorder, useDragControls } from 'framer-motion'
import { MoveIcon } from '@components/icons'
import { useTaskStore } from '@context'
import { ANIMATION_VARIANTS, UNGROUPED } from '@constants'
import { DeleteTaskButton } from './DeleteTaskButton'
import { DoneTaskButton } from './DoneTaskButton'

export const TaskItem = ({ item, group = UNGROUPED }) => {
  const { id, task, done } = item

  const setOpenFocusModal = useTaskStore(state => state.setOpenFocusModal)

  const controls = useDragControls()

  const handlePointerDown = e => {
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
      variants={ANIMATION_VARIANTS.OPACITY}
      value={item}
      whileTap={{ scale: 0.95 }}
      dragListener={false}
      dragControls={controls}
      className='flex items-center gap-2 py-2 pr-1 pl-3 hover:bg-grey hover:bg-opacity-10 transition-[background-color] duration-200 rounded-full outline-slate-100'
    >
      <DoneTaskButton group={group} id={id} done={done} />
      <p
        onDoubleClick={handleDoubleClick}
        className={`leading-none text-sm w-full cursor-pointer ${
          done ? 'line-through text-grey' : ''
        }`}
      >
        {task}
      </p>
      <div className='flex items-center gap-2'>
        <DeleteTaskButton id={id} group={group} />
        <div className='cursor-grab' onPointerDown={handlePointerDown}>
          <MoveIcon size={24} />
        </div>
      </div>
    </Reorder.Item>
  )
}

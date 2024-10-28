import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui'
import { CloseIcon } from '@components/icons'
import { DeleteGroupModal } from '@features/groups/components'
import { createPortal } from 'react-dom'
import { useTaskStore } from '@features/tasks/store'
import { useRadioStore } from '@features/radio/store'
import { FILTER_ITEMS, UNGROUPED } from '@features/groups/constants'
import { ANIMATION_VARIANTS } from '@constants/constants'
import { cn } from '@utils/clsxWithTailwindMerge'

export const GroupItem = ({ group, isDeletable = false }) => {
  const groupActive = useTaskStore((state) => state.groupActive)
  const setGroupActive = useTaskStore((state) => state.setGroupActive)
  const deleteGroup = useTaskStore((state) => state.deleteGroup)
  const taskData = useTaskStore((state) => state.taskData)
  const isRadioOn = useRadioStore((state) => state.isRadioOn)

  const tasksLength = taskData[group]?.length

  const [confirmationModal, setConfirmationModal] = useState(false)

  const groupName = group === UNGROUPED ? FILTER_ITEMS.all : group

  const onConfirmMoveGroup = (confirmation) => {
    deleteGroup({ group, confirmMoveTasks: confirmation })
    setConfirmationModal(false)
  }

  const handleClick = () => {
    tasksLength <= 0 ? deleteGroup({ group }) : setConfirmationModal(true)
  }

  return (
    <motion.li variants={ANIMATION_VARIANTS.opacity} initial='hidden' animate='visible' exit='hidden'>
      <Button
        color={groupActive === group ? 'blue' : 'white'}
        outline={groupActive === group ? 'white' : 'blue'}
        hover='blue'
        className={cn('flex items-center gap-1 whitespace-nowrap', {
          'bg-dark/20 text-slate-100 opacity-75 outline-dark/20 transition-[background-color,outline,color,opacity] duration-150 hover:opacity-100':
            groupActive !== group && isRadioOn
        })}
      >
        <p
          className={cn('px-3 font-normal', {
            'pl-3 md:px-3 md:group-hover:px-0 md:group-hover:pl-3': isDeletable
          })}
          onClick={() => setGroupActive({ group })}
        >
          {groupName}
        </p>
        {isDeletable && (
          <span
            onClick={handleClick}
            className='mr-1 rounded-full p-1 text-sm transition-[display] duration-150 hover:bg-red group-hover:inline-block md:hidden'
          >
            <CloseIcon size={14} />
          </span>
        )}
      </Button>
      {confirmationModal &&
        createPortal(
          <DeleteGroupModal onConfirm={onConfirmMoveGroup} onModal={setConfirmationModal} group={group} />,
          document.body
        )}
    </motion.li>
  )
}

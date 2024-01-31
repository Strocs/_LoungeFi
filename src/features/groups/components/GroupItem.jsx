import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui'
import { CloseIcon } from '@components/icons'
import { DeleteGroupModal } from '@features/groups'
import { useTaskStore, useRadioStore } from '@context'
import { ANIMATION_VARIANTS, FILTER_ITEMS, UNGROUPED } from '@constants'
import { createPortal } from 'react-dom'

export const GroupItem = ({ group, isDeletable = false }) => {
  const groupActive = useTaskStore(state => state.groupActive)
  const setGroupActive = useTaskStore(state => state.setGroupActive)
  const deleteGroup = useTaskStore(state => state.deleteGroup)
  const taskData = useTaskStore(state => state.taskData)
  const isRadioOn = useRadioStore(state => state.isRadioOn)

  const tasksLength = taskData[group]?.length

  const [confirmationModal, setConfirmationModal] = useState(false)

  const groupName = group === UNGROUPED ? FILTER_ITEMS.ALL : group

  const onConfirmMoveGroup = confirmation => {
    deleteGroup({ group, confirmMoveTasks: confirmation })
    setConfirmationModal(false)
  }

  const handleClick = () => {
    tasksLength <= 0 ? deleteGroup({ group }) : setConfirmationModal(true)
  }

  return (
    <motion.li
      variants={ANIMATION_VARIANTS.OPACITY}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Button
        color={groupActive === group ? 'blue' : 'white'}
        outline={groupActive === group ? 'white' : 'blue'}
        hover='blue'
        className={`flex items-center gap-1 whitespace-nowrap ${
          groupActive === group
            ? ''
            : isRadioOn
            ? 'bg-opacityDark outline-opacityDark opacity-75 hover:opacity-100 text-slate-100 transition-[background-color,outline,color,opacity] duration-150'
            : ''
        }`}
      >
        <p
          className={`font-normal ${
            isDeletable
              ? 'pl-3 md:px-3 md:group-hover:px-0 md:group-hover:pl-3'
              : 'px-3'
          }`}
          onClick={() => setGroupActive({ group })}
        >
          {groupName}
        </p>
        {isDeletable && (
          <span
            onClick={handleClick}
            className='md:hidden group-hover:inline-block transition-[display] duration-150 text-sm hover:bg-red rounded-full p-1 mr-1'
          >
            <CloseIcon size={14} />
          </span>
        )}
      </Button>
      {confirmationModal &&
        createPortal(
          <DeleteGroupModal
            onConfirm={onConfirmMoveGroup}
            onModal={setConfirmationModal}
            group={group}
          />,
          document.body
        )}
    </motion.li>
  )
}

import { useTaskStore } from '@features/tasks/store'
import { GroupItem, CreateGroup, SkeletonGroups } from '@features/groups/components'
import { AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

export const GroupList = () => {
  const taskData = useTaskStore((state) => state.taskData)
  const isLoading = useTaskStore((state) => state.isLoading)
  const ref = useRef(null)
  const [all, ...groupList] = Object.keys(taskData)

  return (
    <section className='relative grid h-fit w-full grid-cols-[1fr_auto] items-center gap-2'>
      {isLoading ? (
        <SkeletonGroups />
      ) : (
        <ul
          ref={ref}
          onWheel={(e) => onWheel(ref.current, e)}
          className='scrollbar-hide flex h-fit gap-3 overflow-x-scroll scroll-smooth py-1 pr-6 pl-[10px]'
        >
          <GroupItem group={all} />
          <AnimatePresence>
            {groupList.map((group) => (
              <GroupItem key={group} group={group} isDeletable={true} />
            ))}
          </AnimatePresence>
        </ul>
      )}
      <CreateGroup />
    </section>
  )
}

function onWheel(ref, ev) {
  const isTouchPad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

  if (isTouchPad) {
    ev.stopPropagation()
    return
  }

  if (ev.deltaY < 0) {
    ref.scrollLeft -= 200
  } else if (ev.deltaY > 0) {
    ref.scrollLeft += 200
  }
}

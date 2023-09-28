import { useTaskStore } from '@context'
import { GroupItem, CreateGroup } from '@features/groups'
import { AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

export const GroupList = () => {
  const taskData = useTaskStore(state => state.taskData)

  const [all, ...groupList] = Object.keys(taskData)

  const listRef = useRef(null)

  const handleWheel = e => {
    listRef.current.scrollLeft += e.deltaY / 5

    if (listRef.current.scrollLeft === 0) {
      listRef.current.classList.remove('mask-lr')
      listRef.current.classList.add('mask-l')
    } else if (
      listRef.current.scrollLeft ===
      listRef.current.scrollWidth - listRef.current.clientWidth
    ) {
      listRef.current.classList.remove('mask-lr')
      listRef.current.classList.add('mask-r')
    } else {
      listRef.current.classList.remove('mask-l')
      listRef.current.classList.remove('mask-r')
      listRef.current.classList.add('mask-lr')
    }
  }

  return (
    <section className='grid grid-cols-[1fr_auto] items-center gap-2 w-full relative h-fit'>
      <ul
        ref={listRef}
        onWheel={handleWheel}
        className='flex gap-3 h-fit pr-1 pl-[10px] py-1 overflow-x-scroll overscroll-x-contain scrollbar-hide'
      >
        <GroupItem group={all} />
        <AnimatePresence>
          {groupList.map(group => (
            <GroupItem key={group} group={group} isDeletable />
          ))}
        </AnimatePresence>
      </ul>
      <CreateGroup />
    </section>
  )
}

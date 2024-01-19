import { useTaskStore } from '@context'
import { GroupItem, CreateGroup } from '@features/groups'
import { AnimatePresence } from 'framer-motion'
import { SkeletonGroups } from './SkeletonGroups'

export const GroupList = () => {
  const taskData = useTaskStore(state => state.taskData)
  const isLoading = useTaskStore(state => state.isLoading)

  const [all, ...groupList] = Object.keys(taskData)

  return (
    <section className='grid grid-cols-[1fr_auto] items-center gap-2 w-full relative h-fit'>
      {isLoading ? (
        <SkeletonGroups />
      ) : (
        <ul className='flex gap-3 h-fit pr-1 pl-[10px] py-1 overflow-x-scroll overscroll-x-contain scrollbar-hide'>
          <GroupItem group={all} />
          <AnimatePresence>
            {groupList.map(group => (
              <GroupItem key={group} group={group} isDeletable />
            ))}
          </AnimatePresence>
        </ul>
      )}
      <CreateGroup />
    </section>
  )
}

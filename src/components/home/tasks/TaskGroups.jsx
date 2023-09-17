import { useTaskStore } from '@store'
import { GroupItem, AddGroup } from '@components/home'
import { AnimatePresence } from 'framer-motion'

export const TaskGroups = () => {
  const taskData = useTaskStore(state => state.taskData)

  const [all, ...groupList] = Object.keys(taskData)

  return (
    <div className='flex gap-2 w-full items-center'>
      <ul className='flex gap-3  w-full pr-1 pl-[10px] py-1'>
        <GroupItem group={all} />
        <AnimatePresence>
          {groupList.map(group => (
            <GroupItem key={group} group={group} isDeletable />
          ))}
        </AnimatePresence>
      </ul>
      <AddGroup />
    </div>
  )
}

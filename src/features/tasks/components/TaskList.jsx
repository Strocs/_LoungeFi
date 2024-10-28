import { Reorder, motion } from 'framer-motion'
import { TaskItem } from '@features/tasks/components'
import { UNGROUPED } from '@features/groups/constants'
import { useTaskStore } from '@features/tasks/store'
import { cn } from '@utils/clsxWithTailwindMerge'

export const TaskList = ({ list, group, indent }) => {
  const reorderTasks = useTaskStore((state) => state.reorderTasks)
  return (
    <div aria-label={group || UNGROUPED}>
      <>
        {!!indent && (
          <motion.h3
            layout={true}
            className='ml-3 w-fit border-grey border-b-[1px] border-dashed font-light text-base tracking-wide'
          >
            {group}
          </motion.h3>
        )}
        <Reorder.Group
          axis='y'
          layout={true}
          onReorder={(newList) => reorderTasks({ newOrder: newList, group: group || UNGROUPED })}
          values={list}
          name='tasks-list'
          className={cn(indent && 'ml-3 border-grey border-l-[1px] border-dashed')}
        >
          {list.map((task) => (
            <TaskItem key={task.id} item={task} group={group} />
          ))}
        </Reorder.Group>
      </>
    </div>
  )
}

import { Reorder, motion } from 'framer-motion'
import { useTaskStore } from '@context'
import { TaskItem } from '@features/tasks'
import { UNGROUPED } from '@constants'

export const TaskList = ({ list, group, indent }) => {
  const reorderTasks = useTaskStore(state => state.reorderTasks)

  return (
    <div aria-label={group || UNGROUPED}>
      {!!indent && (
        <motion.h3
          layout
          className='font-light tracking-wide w-fit text-base border-b-[1px] border-grey border-dashed ml-3'
        >
          {group}
        </motion.h3>
      )}
      <Reorder.Group
        axis='y'
        layout
        onReorder={newList =>
          reorderTasks({ newOrder: newList, group: group || UNGROUPED })
        }
        values={list}
        name='tasks-list'
        className={
          indent ? 'border-l-[1px] border-grey border-dashed ml-3' : ''
        }
      >
        {list.map(task => (
          <TaskItem key={task.id} item={task} group={group} />
        ))}
      </Reorder.Group>
    </div>
  )
}

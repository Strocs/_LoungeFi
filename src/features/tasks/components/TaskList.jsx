import { Reorder } from 'framer-motion'
import { useTaskStore } from '@context'
import { TaskItem } from '@features/tasks'
import { UNGROUPED } from '@constants'

export const TaskList = ({ children, list, group, indent }) => {
  const reorderTasks = useTaskStore(state => state.reorderTasks)

  return (
    <div aria-label={group || UNGROUPED}>
      {!!children && (
        <h3 className='font-light tracking-wide w-fit text-base border-b-[1px] border-grey border-dashed ml-4'>
          {children}
        </h3>
      )}
      <Reorder.Group
        axis='y'
        onReorder={newList =>
          reorderTasks({ newOrder: newList, group: group || UNGROUPED })
        }
        values={list}
        name='tasks-list'
        className={`${
          indent
            ? 'border-l-[1px] border-grey border-dashed ml-4 touch-none'
            : ''
        } touch-none`}
      >
        {list.map(task => (
          <TaskItem key={task.id} item={task} group={group} />
        ))}
      </Reorder.Group>
    </div>
  )
}

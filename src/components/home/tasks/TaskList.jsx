import { Reorder } from 'framer-motion'
import { useTaskStore } from '@store'
import { TaskItem } from '@components/home'
import { UNGROUPED } from '@constants'

export const TaskList = ({ children, list, group, indent }) => {
  const reorderTasks = useTaskStore(state => state.reorderTasks)

  return (
    <Reorder.Group
      axis='y'
      onReorder={newList => reorderTasks({ newOrder: newList, group: group || UNGROUPED })}
      values={list}
      name='tasks-list'>
      <h3 className='font-medium tracking-wide text-xl underline-offset-[5px] underline pl-4'>
        {children}
      </h3>
      <li className={indent ? 'border-l-[2px] border-white ml-4' : ''}>
        {list.map(task => (
          <TaskItem key={task.id} item={task} group={group} />
        ))}
      </li>
    </Reorder.Group>
  )
}

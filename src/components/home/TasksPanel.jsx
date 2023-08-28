import { useTaskStore } from '@store'
import { AddTask, TaskItem } from '@components/home'
import { useAutoAnimate } from '@formkit/auto-animate/react'
export const TasksPanel = () => {
  const filteredTasks = useTaskStore(state => state.filteredTasks)
  const [parent] = useAutoAnimate({ duration: 150 })
  return (
    <section
      name='tasks-panel'
      className=' my-4 grow text-white rounded-2xl relative bg-opacityDark'>
      <ul
        ref={parent}
        name='tasks-list'
        className='flex flex-col gap-4 p-6 h-[85%] overflow-y-scroll scrollbar-hide'>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} id={task.id} task={task.task} done={task.done} />
        ))}
      </ul>
      <AddTask />
    </section>
  )
}

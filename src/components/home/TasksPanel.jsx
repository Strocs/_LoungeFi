import { useRadioStore, useTaskStore } from '@store'
import { TaskItem } from '@components/home'
import { useAutoAnimate } from '@formkit/auto-animate/react'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const TasksPanel = () => {
  const filteredTasks = useTaskStore(state => state.filteredTasks)
  const [parent] = useAutoAnimate({ duration: 150 })

  const isRadioOn = useRadioStore(state => state.isRadioOn)

  return (
    <section
      name='tasks-panel'
      className={`relative text-white rounded-xl ${isRadioOn ? 'bg-opacityDark' : ''}`}>
      <ul
        ref={parent}
        name='tasks-list'
        className='flex flex-col py-1 absolute top-0 bottom-0 left-0 right-0 overflow-y-auto scrollbar-hide'>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} id={task.id} task={task.task} done={task.done} />
        ))}
      </ul>
    </section>
  )
}

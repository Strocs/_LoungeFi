import { useRadioStore, useTaskStore } from '@store'
import { TaskItem } from '@components/home'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useRef } from 'react'

export const TasksPanel = () => {
  const filteredTasks = useTaskStore(state => state.filteredTasks)
  const [parent] = useAutoAnimate({ duration: 150 })
  const panelRef = useRef(null)

  const isRadioOn = useRadioStore(state => state.isRadioOn)

  return (
    <section
      name='tasks-panel'
      className={`grow text-white rounded-xl ${isRadioOn ? 'bg-opacityDark' : ''}`}
      style={{ maxHeight: `${panelRef.current?.clientHeight}px` }}
      ref={panelRef}>
      <ul
        ref={parent}
        name='tasks-list'
        className='flex flex-col py-1 h-full overflow-y-scroll scrollbar-hide'>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} id={task.id} task={task.task} done={task.done} />
        ))}
      </ul>
    </section>
  )
}

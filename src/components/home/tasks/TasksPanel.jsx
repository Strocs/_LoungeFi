import { useRadioStore, useTaskStore } from '@store'
import { TaskItem } from '@components/home'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { DEFAULT_FILTER_ITEMS } from '@constants'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const TasksPanel = () => {
  const filteredTasks = useTaskStore(state => state.filteredTasks)
  const groupActive = useTaskStore(state => state.groupActive)
  const deleteDones = useTaskStore(state => state.deleteDones)
  const isRadioOn = useRadioStore(state => state.isRadioOn)
  
  const [parent] = useAutoAnimate({ duration: 150 })

  const isDonesGroup = groupActive === DEFAULT_FILTER_ITEMS[2]

  return (
    <section
      name='tasks-panel'
      className={`relative text-white rounded-xl ${isRadioOn ? 'bg-opacityDark' : ''}`}>
      <ul
        ref={parent}
        name='tasks-list'
        className={`flex flex-col py-2 absolute top-0 bottom-0 left-0 right-0 overflow-y-auto scrollbar-hide ${
          isDonesGroup ? 'bottom-14' : 'bottom-0'
        }`}>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} id={task.id} task={task.task} done={task.done} />
        ))}
      </ul>
      {isDonesGroup && (
        <button className='outline-dashed outline-red outline-2 rounded-full p-1 px-4 absolute bottom-4 left-0 right-0 w-fit whitespace-nowrap mx-auto hover:bg-red hover:outline transition-[background-color] duration-150 text-sm' onClick={() => deleteDones()}>
          Delete All Dones
        </button>
      )}
    </section>
  )
}

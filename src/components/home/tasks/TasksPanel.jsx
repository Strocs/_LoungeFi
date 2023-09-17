import { useRadioStore, useTaskStore } from '@store'
import { TaskList } from '@components/home'
import { UNGROUPED } from '@constants'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const TasksPanel = () => {
  const groupActive = useTaskStore(state => state.groupActive)
  const isRadioOn = useRadioStore(state => state.isRadioOn)
  const taskData = useTaskStore(state => state.taskData)

  const isAllGroup = groupActive === UNGROUPED

  const { ungrouped, ...groupList } = taskData

  const otherGroups = Object.keys(groupList)

  const tasks = isAllGroup ? ungrouped.tasks : groupList[groupActive].tasks

  return (
    <section
      name='tasks-panel'
      className={`relative text-white rounded-xl ${isRadioOn ? 'bg-opacityDark' : ''}`}>
      {isAllGroup ? (
        <div className='flex flex-col py-2 pl-2 gap-4 absolute top-0 bottom-0 left-0 right-0 overflow-y-auto scrollbar-hide'>
          <TaskList list={tasks} />
          {otherGroups.map(group => {
            if (groupList[group].tasks.length === 0) return null
            return (
              <TaskList key={group} list={groupList[group].tasks} group={group} indent>
                {group}
              </TaskList>
            )
          })}
        </div>
      ) : (
        <TaskList list={tasks} group={groupActive} />
      )}
    </section>
  )
}

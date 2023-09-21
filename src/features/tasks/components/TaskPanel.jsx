import { useTaskStore } from '@context'
import { TaskList, TasksWrapper } from '@features/tasks'
import { UNGROUPED } from '@constants'

export const TaskPanel = () => {
  const groupActive = useTaskStore(state => state.groupActive)
  const taskData = useTaskStore(state => state.taskData)

  const isAllGroup = groupActive === UNGROUPED

  const { ungrouped, ...groupList } = taskData

  const groups = Object.keys(groupList)
  
  return (
    <TasksWrapper>
      <div className='flex flex-col py-2 pl-2 gap-4 absolute top-0 bottom-0 left-0 right-0 overflow-y-auto scrollbar-hide'>
        {isAllGroup ? (
          <>
            <TaskList list={ungrouped.tasks} />
            {groups.map(group => {
              if (groupList[group].tasks.length === 0) return null
              return (
                <TaskList key={group} list={groupList[group].tasks} group={group} indent>
                  {group}
                </TaskList>
              )
            })}
          </>
        ) : (
          <TaskList list={groupList[groupActive].tasks} group={groupActive} />
        )}
      </div>
    </TasksWrapper>
  )
}

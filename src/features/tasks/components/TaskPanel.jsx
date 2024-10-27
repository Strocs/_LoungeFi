import { useTaskStore } from '@features/tasks/store'
import { TaskList, SkeletonTasks } from '@features/tasks/components'
import { UNGROUPED } from '@features/groups/constants'
import { TasksWrapper } from '@features/tasks/layout'

export const TaskPanel = () => {
  const groupActive = useTaskStore((state) => state.groupActive)
  const taskData = useTaskStore((state) => state.taskData)
  const isLoading = useTaskStore((state) => state.isLoading)

  const { ungrouped, ...tasksList } = taskData

  const groups = Object.keys(tasksList)

  const isAllGroup = groupActive === UNGROUPED

  return (
    <TasksWrapper>
      <div className='scrollbar-hide absolute top-0 right-0 bottom-0 left-0 flex flex-col gap-4 overflow-y-scroll py-2 pl-2'>
        {isLoading ? (
          <SkeletonTasks />
        ) : isAllGroup ? (
          <>
            <TaskList list={ungrouped} />
            {groups.map((group) => {
              if (tasksList[group].length === 0) {
                return null
              }
              return <TaskList key={group} list={tasksList[group]} group={group} indent={true} />
            })}
          </>
        ) : (
          <TaskList list={tasksList[groupActive]} group={groupActive} />
        )}
      </div>
    </TasksWrapper>
  )
}

import { useTaskStore } from '@context'
import { TaskList, TasksWrapper } from '@features/tasks'
import { UNGROUPED } from '@constants'

export const TaskPanel = () => {
  const groupActive = useTaskStore(state => state.groupActive)
  const taskData = useTaskStore(state => state.taskData)

  const isAllGroup = groupActive === UNGROUPED

  const { ungrouped, ...tasksList } = taskData

  const groups = Object.keys(tasksList)

  return (
    <TasksWrapper>
      <div className='flex flex-col py-2 pl-2 gap-4 absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll scrollbar-hide'>
        {isAllGroup ? (
          <>
            <TaskList list={ungrouped} />
            {groups.map(group => {
              if (tasksList[group].length === 0) return null
              return (
                <TaskList
                  key={group}
                  list={tasksList[group]}
                  group={group}
                  indent
                />
              )
            })}
          </>
        ) : (
          <TaskList list={tasksList[groupActive]} group={groupActive} />
        )}
      </div>
    </TasksWrapper>
  )
}

import { useSelector } from 'react-redux'
import { TaskItem } from '.'

export const TasksList = () => {
  const { filteredTasks = [] } = useSelector(state => state.simpleTask)
  return (
    <ul>
      {filteredTasks.map(({ task, done, id, tags, created }) => (
        <TaskItem
          key={id}
          text={task}
          done={done}
          id={id}
          tags={tags}
          created={created}
        />
      ))}
    </ul>
  )
}

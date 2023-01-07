import { useSelector } from 'react-redux'

export function TasksLeft () {
  const { tasks } = useSelector(state => state.taskDone)
  const tasksLeft = tasks.filter(({ done }) => !done).length
  return <p className='text-sm text-c-gray'>{tasksLeft} {tasksLeft === 1 ? 'task' : 'tasks'} left</p>
}

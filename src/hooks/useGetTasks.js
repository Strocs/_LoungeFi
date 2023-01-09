import { useSelector } from 'react-redux'
import { removeAccentsMark } from '@utils'

export function useGetTasks (id, name) {
  const { tasks } = useSelector(state => state.taskDone)

  function getTaskById () {
    return tasks.find(task => task.id === id)
  }

  function getTaskByName () {
    return tasks.find(
      ({ task }) =>
        removeAccentsMark(task.toLowerCase()) ===
        name.slice(1).replaceAll('-', ' ')
    )
  }

  function getTask () {
    try {
      if (id !== null) {
        return getTaskById()
      }
      return getTaskByName()
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }

  return {
    singleTask: getTask(),
    getTaskById,
    getTaskByName
  }
}

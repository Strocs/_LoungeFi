import { useSelector } from 'react-redux'
import { removeAccentsMark } from '@services'

export function useGetTasks ({ byId, byName }) {
  const { tasks } = useSelector(state => state.simpleTask)

  function getTaskById () {
    return tasks.find(({ id }) => id === byId)
  }

  function getTaskByName () {
    return tasks.find(
      ({ task }) =>
        removeAccentsMark(task.toLowerCase()) ===
        byName.slice(1).replaceAll('-', ' ')
    )
  }

  if (!!byId) return getTaskById()
  if (!!byName) return getTaskByName()
}

import { removeAccents } from './removeAccents'

export const getTaskByName = (tasks = [], name) => {
  return tasks.find(
    task =>
      removeAccents(task.todo.toLowerCase()) ===
      name.slice(1).replaceAll('-', ' ')
  )
}

import { removeAccentsMark } from './removeAccentsMark'

export const getTaskByName = (tasks = [], name) => {
  return tasks.find(
    ({ task }) =>
      removeAccentsMark(task.toLowerCase()) === name.slice(1).replaceAll('-', ' ')
  )
}

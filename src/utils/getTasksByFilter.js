import { DEFAULT_FILTER_ITEMS } from '@constants'

export const getTasksByFilter = (tasks = [], groupActive = '') => {
  switch (groupActive) {
    case DEFAULT_FILTER_ITEMS[0]: {
      return tasks
    }
    case DEFAULT_FILTER_ITEMS[1]: {
      return tasks.filter(task => !task.done)
    }
    case DEFAULT_FILTER_ITEMS[2]: {
      return tasks.filter(task => task.done)
    }
    default: {
      return tasks.filter(task => task.groups.includes(groupActive))
    }
  }
}

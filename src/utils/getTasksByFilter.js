import { FILTER_ITEMS } from '@constants'

export const getTasksByFilter = (tasks = [], groupActive = '') => {
  switch (groupActive) {
    case FILTER_ITEMS.ALL: {
      return tasks
    }
    case FILTER_ITEMS.ACTIVES: {
      return tasks.filter(task => !task.done)
    }
    case FILTER_ITEMS.DONES: {
      return tasks.filter(task => task.done)
    }
    default: {
      return tasks.filter(task => task.groups.includes(groupActive))
    }
  }
}

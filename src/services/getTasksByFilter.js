export const getTasksByFilter = (tasks = [], filter = '', filterArray = []) => {
  switch (filter) {
    case 'All': {
      return tasks
    }
    case 'Active': {
      return tasks.filter(task => !task.done)
    }
    case 'Done': {
      return tasks.filter(task => task.done)
    }
    default: {
      return tasks.filter(task => task.tags.includes(filter))
    }
  }
}

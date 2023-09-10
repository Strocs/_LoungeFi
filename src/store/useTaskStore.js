import { create } from 'zustand'
import { useLocalStorage } from '@hooks'
import { FILTER_ITEMS, STORAGE_TASK_ID } from '@constants'
import { getTasksByFilter } from '@utils'
import { taskSlice, groupSlice } from './slices'

const storedValue = useLocalStorage({
  key: STORAGE_TASK_ID,
  initialValue: {
    tasks: [],
    filteredTasks: [],
    groupActive: FILTER_ITEMS.ALL,
    groupList: Object.values(FILTER_ITEMS)
  }
})

export const useTaskStore = create((set, get) => ({
  ...storedValue,
  isUserWriting: false,

  ...taskSlice(set, get),
  ...groupSlice(set, get),

  toggleIsWriting: isOpen => {
    set({
      isUserWriting: isOpen
    })
  },

  updateFiltersAndLocalStorage: () => {
    set(state => ({
      filteredTasks: getTasksByFilter(state.tasks, state.groupActive)
    }))

    const value = {
      tasks: get().tasks,
      filteredTasks: get().filteredTasks,
      groupActive: get().groupActive,
      groupList: get().groupList
    }

    useLocalStorage({ key: STORAGE_TASK_ID, value })
  }
}))

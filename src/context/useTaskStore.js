import { create } from 'zustand'
import { useLocalStorage } from '@hooks'
import { STORAGE_TASK_ID, UNGROUPED } from '@constants'
import { useAuthStore } from './useAuthStore'
import { startLoadTasks } from '@features/authentication'

const storedValue = useLocalStorage({
  key: STORAGE_TASK_ID,
  initialValue: {
    taskData: {
      [UNGROUPED]: {
        tasks: []
      }
    },
    groupActive: UNGROUPED
  }
})

export const useTaskStore = create((set, get) => ({
  ...storedValue,
  isUserWriting: false,
  isFocusModalOpen: false,
  taskActive: null,

  // TASKS STUFFS
  setTasks: async () => {
    const { uid } = useAuthStore.getState().userAuth
    const notesFromDB = await startLoadTasks(uid)
    set({
      notes: notesFromDB
    })
  },

  createTask: ({ task = '' }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [state.groupActive]: {
          tasks: [
            ...state.taskData[state.groupActive].tasks,
            {
              id: crypto.randomUUID(),
              task,
              done: false,
              created: new Date().getTime()
            }
          ]
        }
      }
    }))
    get().updateLocalStorage()
  },

  updateTask: ({ id = '', newTask = '', group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: {
          tasks: state.taskData[group].tasks.map(task =>
            task.id === id ? { ...task, task: newTask } : task
          )
        }
      }
    }))
    get().updateLocalStorage()
  },

  deleteTask: ({ id, group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: {
          tasks: state.taskData[group].tasks.filter(task => task.id !== id)
        }
      }
    }))
    get().updateLocalStorage()
  },

  reorderTasks: ({ newOrder, group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: {
          tasks: newOrder
        }
      }
    }))
    get().updateLocalStorage()
  },

  toggleDone: ({ id, group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: {
          tasks: state.taskData[group].tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
          )
        }
      }
    }))
    get().updateLocalStorage()
  },

  deleteAllDones: () => {
    set(state => {
      let newTaskData = {}

      for (const group in state.taskData) {
        newTaskData = {
          ...newTaskData,
          [group]: {
            tasks: state.taskData[group].tasks.filter(({ done }) => !done)
          }
        }
      }

      return { taskData: newTaskData }
    })
    get().updateLocalStorage()
  },

  // GROUP STUFFS
  createGroup: ({ group = '' }) => {
    set(state => {
      if (Object.hasOwn(state.taskData, group)) return state

      return {
        taskData: {
          ...state.taskData,
          [group]: {
            tasks: []
          }
        }
      }
    })
    get().updateLocalStorage()
  },

  deleteGroup: ({ group = '', confirmMoveTasks = false }) => {
    set(state => {
      let newData = state.taskData

      if (confirmMoveTasks) {
        // Detect behavior
        newData = {
          ...state.taskData,
          ungrouped: {
            tasks: [
              ...state.taskData[UNGROUPED].tasks,
              ...state.taskData[group].tasks
            ]
          }
        }
      }

      const { [group]: toDelete, ...newTaskData } = newData

      return {
        taskData: newTaskData,
        groupActive: UNGROUPED
      }
    })
    get().updateLocalStorage()
  },

  setGroupActive: ({ group = UNGROUPED }) => {
    set({
      groupActive: group
    })
    get().updateLocalStorage()
  },

  // COMPLEMENTS
  toggleIsWriting: isOpen => {
    set({
      isUserWriting: isOpen
    })
  },

  setOpenFocusModal: ({ isOpen, task }) => {
    set({
      isFocusModalOpen: isOpen,
      taskActive: isOpen ? task : null
    })
  },

  updateLocalStorage: () => {
    const value = {
      taskData: get().taskData,
      groupActive: get().groupActive
    }

    useLocalStorage({ key: STORAGE_TASK_ID, value })
  }
}))

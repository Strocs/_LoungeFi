import { create } from 'zustand'
import { STORAGE_GROUPS_ID, UNGROUPED } from '@features/groups/constants'
import { useAuthStore } from '@features/auth/store'
import { localStorage } from '@utils'
import {
  startCreateGroup,
  startCreateTask,
  startDeleteGroup,
  startDeleteTask,
  startLoadData,
  startReorderTasks,
  startUpdateTask
} from '@features/auth/helpers'

const storedValue = localStorage({
  key: STORAGE_GROUPS_ID,
  initialValue: UNGROUPED
})

export const useTaskStore = create((set, get) => ({
  groupActive: storedValue,
  taskData: {
    [UNGROUPED]: []
  },
  isUserWriting: false,
  isFocused: false,
  taskActive: null,
  isLoading: false,

  // TASKS STUFFS
  setTasks: async () => {
    set({ isLoading: true })

    const { uid } = useAuthStore.getState().userAuth

    const tasksFromDB = await startLoadData(uid)

    if (!tasksFromDB[UNGROUPED]) {
      await startCreateGroup(uid, UNGROUPED)
      tasksFromDB[UNGROUPED] = []
    }

    set({
      taskData: tasksFromDB,
      isLoading: false
    })
  },

  cleanStateOnLogout: () => {
    set({
      taskData: {
        [UNGROUPED]: []
      },
      groupActive: UNGROUPED
    })
  },

  createTask: async ({ task = '' }) => {
    const { uid } = useAuthStore.getState().userAuth

    const taskTemplate = {
      id: crypto.randomUUID(),
      task,
      done: false,
      created: new Date().getTime(),
      group: get().groupActive,
      note: '',
    }

    set((state) => ({
      taskData: {
        ...state.taskData,
        [state.groupActive]: [...state.taskData[state.groupActive], taskTemplate]
      }
    }))

    const { db_id } = await startCreateTask(uid, taskTemplate)

    set((state) => ({
      taskData: {
        ...state.taskData,
        [state.groupActive]: state.taskData[state.groupActive].map((task) =>
          task.id === taskTemplate.id ? { ...task, db_id } : task
        )
      }
    }))
  },

  updateTask: async ({ id = '', newTask = '', group }) => {
    set((state) => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].map((task) => (task.id === id ? { ...task, task: newTask } : task))
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    const selectedTask = get().taskData[group].find((task) => task.id === id)
    await startUpdateTask(uid, selectedTask)
  },

  deleteTask: async ({ id, group }) => {
    const selectedTask = get().taskData[group].find((task) => task.id === id)

    set((state) => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].filter((task) => task.id !== id)
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    await startDeleteTask(uid, selectedTask)
  },

  reorderTasks: async ({ newOrder, group }) => {
    set((state) => ({
      taskData: {
        ...state.taskData,
        [group]: newOrder
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    await startReorderTasks(uid, newOrder, group)
  },

  toggleDone: async ({ id, group }) => {
    set((state) => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].map((task) => (task.id === id ? { ...task, done: !task.done } : task))
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    const selectedTask = get().taskData[group].find((task) => task.id === id)
    await startUpdateTask(uid, selectedTask)
  },

  // deleteAllDones: () => {
  //   set(state => {
  //     let newTaskData = {}

  //     for (const group in state.taskData) {
  //       newTaskData = {
  //         ...newTaskData,
  //         [group]: state.taskData[group].filter(({ done }) => !done)
  //       }
  //     }

  //     return { taskData: newTaskData }
  //   })
  // },

  setNote: async ({ id, note, group }) => {
    set((state) => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].map((task) => (task.id === id ? { ...task, note } : task))
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    const selectedTask = get().taskData[group].find((task) => task.id === id)
    await startUpdateTask(uid, selectedTask)
  },

  // GROUP STUFFS
  createGroup: async ({ group = '' }) => {
    set((state) => {
      if (Object.hasOwn(state.taskData, group)) {
        return state
      }

      return {
        taskData: {
          ...state.taskData,
          [group]: []
        }
      }
    })

    const { uid } = useAuthStore.getState().userAuth
    await startCreateGroup(uid, group)
  },

  deleteGroup: async ({ group = '', confirmMoveTasks = false }) => {
    const { uid } = useAuthStore.getState().userAuth

    for (const task of get().taskData[group]) {
      await startDeleteTask(uid, task)
    }

    const tasksToMove = get().taskData[group].map((task) => {
      task.group = UNGROUPED
      delete task.db_id
      return task
    })

    set((state) => {
      let newData = state.taskData

      if (confirmMoveTasks) {
        // Detect behavior
        newData = {
          ...state.taskData,
          ungrouped: [...state.taskData[UNGROUPED], ...tasksToMove]
        }
      }

      const { [group]: toDelete, ...newTaskData } = newData

      return {
        taskData: newTaskData,
        groupActive: UNGROUPED
      }
    })

    // If move tasks then create all tasks in new group and add new db_id to each one
    if (confirmMoveTasks) {
      tasksToMove.forEach(async (task) => {
        const { db_id } = await startCreateTask(uid, task)
        set((state) => ({
          ...state.taskData,
          ungrouped: state.taskData.ungrouped.map((ungroupedTask) => {
            if (ungroupedTask.id === task.id) {
              return { ...ungroupedTask, db_id }
            }
            return ungroupedTask
          })
        }))
      })
    }

    await startDeleteGroup(uid, group)

    get().updateLocalStorage()
  },

  setGroupActive: ({ group = UNGROUPED }) => {
    set({
      groupActive: group
    })
    get().updateLocalStorage()
  },

  // COMPLEMENTS
  toggleIsWriting: (isOpen) => {
    set({
      isUserWriting: isOpen
    })
  },

  setFocused: ({ isFocused, task }) => {
    set({
      isFocused,
      taskActive: isFocused ? task : null
    })
  },

  updateLocalStorage: () => {
    localStorage({ key: STORAGE_GROUPS_ID, value: get().groupActive })
  }
}))

import { create } from 'zustand'
import { useLocalStorage } from '@hooks'
import { STORAGE_GROUPS_ID, UNGROUPED } from '@constants'
import { useAuthStore } from './useAuthStore'
import {
  startAddTask,
  startDeleteTask,
  startLoadTasks,
  startUpdateTask
} from '@features/authentication'

const storedValue = useLocalStorage({
  key: STORAGE_GROUPS_ID,
  initialValue: UNGROUPED
})

export const useTaskStore = create((set, get) => ({
  groupActive: storedValue,
  taskData: {
    [UNGROUPED]: []
  },
  isUserWriting: false,
  isFocusModalOpen: false,
  taskActive: null,

  // TASKS STUFFS
  setTasks: async () => {
    const { uid } = useAuthStore.getState().userAuth
    const tasksFromDB = await startLoadTasks(uid)

    let parseTasks = {}

    tasksFromDB.forEach(task => {
      parseTasks = {
        ...parseTasks,
        [task.group]: parseTasks[task.group]
          ? [...parseTasks[task.group], task]
          : [task]
      }
    })
    console.log('from store', { tasksFromDB, parseTasks })

    set(state => ({
      taskData: tasksFromDB.length < 0 ? parseTasks : state.taskData
    }))

    console.log({ stateData: get().taskData })
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
      group: get().groupActive
    }

    set(state => ({
      taskData: {
        ...state.taskData,
        [state.groupActive]: [
          ...state.taskData[state.groupActive],
          taskTemplate
        ]
      }
    }))

    const dbTask = await startAddTask(uid, taskTemplate)

    set(state => ({
      taskData: {
        ...state.taskData,
        [state.groupActive]: state.taskData[state.groupActive].map(task =>
          task.id === taskTemplate.id ? { ...task, db_id: dbTask.db_id } : task
        )
      }
    }))
  },

  updateTask: async ({ id = '', newTask = '', group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].map(task =>
          task.id === id ? { ...task, task: newTask } : task
        )
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    const selectedTask = get().taskData[group].find(task => task.id === id)
    await startUpdateTask(uid, selectedTask)
  },

  deleteTask: async ({ id, group }) => {
    const selectedTask = get().taskData[group].find(task => task.id === id)

    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].filter(task => task.id !== id)
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    await startDeleteTask(uid, selectedTask)
  },

  reorderTasks: ({ newOrder, group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: newOrder
      }
    }))
  },

  toggleDone: async ({ id, group }) => {
    set(state => ({
      taskData: {
        ...state.taskData,
        [group]: state.taskData[group].map(task =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      }
    }))

    const { uid } = useAuthStore.getState().userAuth
    const selectedTask = get().taskData[group].find(task => task.id === id)
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

  // GROUP STUFFS
  createGroup: ({ group = '' }) => {
    set(state => {
      if (Object.hasOwn(state.taskData, group)) return state

      return {
        taskData: {
          ...state.taskData,
          [group]: []
        }
      }
    })
  },

  deleteGroup: ({ group = '', confirmMoveTasks = false }) => {
    set(state => {
      let newData = state.taskData

      if (confirmMoveTasks) {
        // Detect behavior
        newData = {
          ...state.taskData,
          ungrouped: [
            ...state.taskData[UNGROUPED].tasks,
            ...state.taskData[group].tasks
          ]
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
    useLocalStorage({ key: STORAGE_GROUPS_ID, value: get().groupActive })
  }
}))

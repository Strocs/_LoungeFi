import { create } from 'zustand'
import { DEFAULT_FILTER_ITEMS, STORAGE_TASK_ID } from '@constants'
import { useLocalStorage } from '@hooks'
import { getTasksByFilter, uniqueFilterItems } from '@utils'

// const storedValue = useLocalStorage({
// 	key: STORAGE_TASK_ID,
// 	initialValue: {
// 		tasks: [],
// 		filteredTasks: [],
// 		filter: 'All',
// 		filterItems: DEFAULT_FILTER_ITEMS,
// 	},
// })

const tasksMock = [
  {
    id: self.crypto.randomUUID(),
    task: 'Crear el reproductor Lo-Fi',
    done: false,
    created: new Date().getTime(),
    groups: []
  },
  {
    id: self.crypto.randomUUID(),
    task: 'Comenzar la sección de listas',
    done: false,
    created: new Date().getTime(),
    groups: []
  },
  {
    id: self.crypto.randomUUID(),
    task: 'Crear el Design System',
    done: false,
    created: new Date().getTime(),
    groups: []
  }
]

export const useTaskStore = create((set, get) => ({
  tasks: tasksMock,
  tasksActivesList: getTasksByFilter(tasksMock, DEFAULT_FILTER_ITEMS[0]),
  taskGroupActive: DEFAULT_FILTER_ITEMS[0],
  taskGroupList: [...DEFAULT_FILTER_ITEMS, 'Work', 'Buy'],
  addTask: ({ task, group }) => {
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: self.crypto.randomUUID(),
          task,
          note: '',
          done: false,
          created: new Date().getTime(),
          groups: [group]
        }
      ]
    }))
    get().updateFiltersAndLocalStorage()
  },
  // editTask: ({ id, newTask }) => {
  // 	set((state) => ({
  // 		tasks: state.tasks.map((task) => (task.id === id ? { ...task, task: newTask } : task)),
  // 	}))
  // 	get().updateFiltersAndLocalStorage()
  // },
  deleteTask: id => {
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }))
    get().updateFiltersAndLocalStorage()
  },
  toggleDone: id => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    }))
    get().updateFiltersAndLocalStorage()
  },

  // deleteDones: () => {
  // 	set((state) => ({
  // 		tasks: state.tasks.filter(({ done }) => !done),
  // 	}))
  // 	get().updateFiltersAndLocalStorage()
  // },
  addGroup: ({ group }) => {
    set(state => ({
      taskGroupList: [...state.taskGroupList, group]
    }))
    get().updateFiltersAndLocalStorage()
  },
  // deleteTag: ({ id, taskTag }) => {
  // 	set((state) => ({
  // 		tasks: state.tasks.map((task) => {
  // 			if (task.id === id) {
  // 				task.tags = task.tags.filter((tag) => tag !== taskTag.toLowerCase())
  // 				return task
  // 			}
  // 			return task
  // 		}),
  // 	}))
  // 	get().updateFiltersAndLocalStorage()
  // },
  setTaskGroupActive: newFilter => {
    set({
      taskGroupActive: newFilter
    })
    get().updateFiltersAndLocalStorage()
  },
  updateFiltersAndLocalStorage: () => {
    set(state => ({
      tasksActivesList: getTasksByFilter(state.tasks, state.taskGroupActive)
    }))
    // let value = {
    // 	tasks: get().tasks,
    // 	filteredTasks: get().filteredTasks,
    // 	filter: get().filter,
    // 	groupsList: get().groupsList,
    // }
    // useLocalStorage({ key: STORAGE_TASK_ID, value })
  }
}))

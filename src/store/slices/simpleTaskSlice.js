import { v4 as uuid } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'
import {
  getTasksByFilter,
  uniqueFilterItems,
  getStorageValue,
  setStorageValue
} from '@services'

const STORAGE_ID = 'simple-task'
const DEFAULT_FILTER_ITEMS = ['All', 'Active', 'Done']

const storedValue = getStorageValue(STORAGE_ID, {
  tasks: [],
  filteredTasks: [],
  filter: 'All',
  filterItems: DEFAULT_FILTER_ITEMS
})

export const simpleTaskSlice = createSlice({
  name: 'simpleTask',
  initialState: storedValue,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.unshift({
        id: uuid(),
        task: payload,
        notes: [],
        done: false,
        created: new Date().getTime(),
        tags: []
      })
      state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
      setStorageValue(STORAGE_ID, state)
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(({ id }) => id !== payload)
      state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
      state.filterItems = uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks)
      setStorageValue(STORAGE_ID, state)
    },
    toggleDone: (state, { payload }) => {
      state.tasks.map(task => {
        if (task.id === payload) {
          task.done = !task.done
        }
      })
      state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
      setStorageValue(STORAGE_ID, state)
    },
    deleteDone: state => {
      state.tasks = state.tasks.filter(({ done }) => !done)
      state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
      setStorageValue(STORAGE_ID, state)
    },
    editTask: (state, { payload }) => {
      state.tasks.map(task => {
        if (task.id !== payload.id) return
        task.task = payload.newTask
        return task
      })
      state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
      setStorageValue(STORAGE_ID, state)
    },
    addTag: (state, { payload }) => {
      state.tasks.map(task => {
        if (task.id === payload.id) {
          if (!task.tags.includes(payload.tag.toLowerCase())) {
            task.tags = [...task.tags, payload.tag.toLowerCase()]
          }
        }
      })
      state.filterItems = uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks)
      setStorageValue(STORAGE_ID, state)
    },
    deleteTag: (state, { payload }) => {
      state.tasks.map(task => {
        if (task.id === payload.id) {
          task.tags = task.tags.filter(tag => tag !== payload.tag.toLowerCase())
        }
      })
      state.filterItems = uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks)
      setStorageValue(STORAGE_ID, state)
    },
    setFilteredTasks: (state, { payload }) => {
      state.filter = payload
      state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
      setStorageValue(STORAGE_ID, state)
    }
  }
})

export const {
  addTask,
  deleteTask,
  toggleDone,
  deleteDone,
  editTask,
  addTag,
  deleteTag,
  setFilteredTasks
} = simpleTaskSlice.actions

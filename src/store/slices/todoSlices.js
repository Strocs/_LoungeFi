import { createSlice } from '@reduxjs/toolkit'
import {
  getTasksByFilter,
  getUniqueFilterItems,
  getStorageValue,
  setStorageValue
} from '../../services'

const defaultFilteredItems = ['All', 'Active', 'Done']
const storedValue = getStorageValue({
  todos: [],
  filteredTasks: [],
  filterItems: defaultFilteredItems,
  filter: 'All'
})

function uniqueFilteredTags (tasks) {
  return [...defaultFilteredItems, ...getUniqueFilterItems(tasks)]
}

export const todoSlice = createSlice({
  name: 'SimpleTasks',
  initialState: storedValue,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.unshift({
        id: (Math.random() * 10).toFixed(),
        todo: payload,
        notes: [],
        done: false,
        created: new Date(),
        tags: []
      })
      state.filteredTasks = state.todos
      setStorageValue(state)
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload)
      state.filteredTasks = state.todos
      setStorageValue(state)
    },
    toggleDone: (state, { payload }) => {
      state.todos.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done
        }
      })
      state.filteredTasks = state.todos
      setStorageValue(state)
    },
    deleteDone: state => {
      state.todos = state.todos.filter(({ done }) => !done)
      state.filteredTasks = state.todos
      setStorageValue(state)
    },
    addTag: (state, { payload }) => {
      state.todos.map(todo => {
        if (todo.id === payload.id) {
          if (!todo.tags.includes(payload.tag.toLowerCase())) {
            todo.tags = [...todo.tags, payload.tag.toLowerCase()]
          }
        }
      })
      state.filterItems = uniqueFilteredTags(state.todos)
      setStorageValue(state)
    },
    deleteTag: (state, { payload }) => {
      state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.tags = todo.tags.filter(tag => tag !== payload.tag.toLowerCase())
        }
      })
      state.filterItems = uniqueFilteredTags(state.todos)
      setStorageValue(state)
    },
    setFilteredTasks: (state, { payload }) => {
      state.filter = payload
      state.filteredTasks = getTasksByFilter(state.todos, state.filter)
      setStorageValue(state)
    }
  }
})

export const {
  addTodo,
  deleteTodo,
  toggleDone,
  deleteDone,
  addTag,
  deleteTag,
  setFilteredTasks
} = todoSlice.actions

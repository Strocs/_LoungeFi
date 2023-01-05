import { createSlice } from '@reduxjs/toolkit'
import { getTasksByFilter, getUniqueFilterItems } from '../../services'

const testState = [
  {
    id: (Math.random() * 10000).toFixed(),
    todo: 'Ordenar la casa',
    notes: [],
    done: false,
    created: new Date(),
    tags: []
  },
  {
    id: (Math.random() * 10000).toFixed(),
    todo: 'Molestar al Salmón',
    notes: [],
    done: true,
    created: new Date(),
    tags: []
  }
]

const defaultFilteredItems = ['All', 'Active', 'Done']

function uniqueFilteredTags (tasks) {
  return [...defaultFilteredItems, ...getUniqueFilterItems(tasks)]
}

export const todoSlice = createSlice({
  name: 'SimpleTasks',
  initialState: {
    todos: [...testState],
    filteredTasks: [...testState],
    filterItems: defaultFilteredItems,
    filter: 'All'
  },
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
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload)
      state.filteredTasks = state.todos
    },
    toggleDone: (state, { payload }) => {
      state.todos.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done
        }
      })
      state.filteredTasks = state.todos
    },
    deleteDone: state => {
      state.todos = state.todos.filter(({ done }) => !done)
      state.filteredTasks = state.todos
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
    },
    deleteTag: (state, { payload }) => {
      state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.tags = todo.tags.filter(tag => tag !== payload.tag.toLowerCase())
        }
      })
      state.filterItems = uniqueFilteredTags(state.todos)
    },
    setFilteredTasks: (state, { payload }) => {
      state.filter = payload
      state.filteredTasks = getTasksByFilter(state.todos, state.filter)
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

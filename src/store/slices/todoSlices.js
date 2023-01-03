import { createSlice } from '@reduxjs/toolkit'

const testState = [
  {
    id: (Math.random() * 10000).toFixed(),
    todo: 'Ordenar la casa',
    notes: [],
    done: false,
    created: new Date().getTime(),
    tags: []
  },
  {
    id: (Math.random() * 10000).toFixed(),
    todo: 'Hacer la once',
    notes: [],
    done: false,
    created: new Date().getTime(),
    tags: []
  },
  {
    id: (Math.random() * 10000).toFixed(),
    todo: 'Molestar al Salmón',
    notes: [],
    done: true,
    created: new Date().getTime(),
    tags: []
  }
]

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [...testState],
    filteredTodos: [...testState],
    filterTags: [],
    filter: 'All'
  },
  reducers: {
    addTodo: ({ todos }, { payload }) => {
      todos.unshift({
        id: (Math.random() * 10).toFixed(),
        todo: payload,
        notes: [],
        done: false,
        created: new Date().getTime(),
        tags: []
      })
    },
    deleteTodo: ({ todos }, { payload }) => {
      return { todos: todos.filter(({ id }) => id !== payload) }
    },
    toggleDone: ({ todos }, { payload }) => {
      todos.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done
        }
      })
    },
    deleteDone: ({ todos }) => {
      return { todos: todos.filter(({ done }) => !done) }
    },
    addTag: ({ todos }, { payload }) => {
      todos.map(todo => {
        if (todo.id === payload.id) {
          if (!todo.tags.includes(payload.tag.toLowerCase())) {
            todo.tags = [...todo.tags, payload.tag.toLowerCase()]
          }
        }
      })
    },
    deleteTag: ({ todos }, { payload }) => {
      todos.map(todo => {
        if (todo.id === payload.id) {
          todo.tags = todo.tags.filter(tag => tag !== payload.tag.toLowerCase())
        }
      })
    }
  }
})

export const {
  addTodo,
  deleteTodo,
  toggleDone,
  deleteDone,
  addTag,
  deleteTag
} = todoSlice.actions

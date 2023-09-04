export const taskSlice = (set, get) => ({
  addTask: ({ task, group }) => {
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
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
      tasks: state.tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task))
    }))
    get().updateFiltersAndLocalStorage()
  }

  // deleteDones: () => {
  // 	set((state) => ({
  // 		tasks: state.tasks.filter(({ done }) => !done),
  // 	}))
  // 	get().updateFiltersAndLocalStorage()
  // },
})

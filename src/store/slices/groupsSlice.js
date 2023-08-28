
export const groupSlice = (set, get) => ({
  addGroup: ({ group }) => {
    set(state => {
      if (state.groupList.some(g => g.toLowerCase() === group.toLowerCase())) return state
      return {groupList: [...state.groupList, group]}
    })
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
  setGroupActive: newFilter => {
    set({
      groupActive: newFilter
    })
    get().updateFiltersAndLocalStorage()
  }
})

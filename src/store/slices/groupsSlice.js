export const groupSlice = (set, get) => ({
  addGroup: ({ group }) => {
    set(state => {
      if (state.groupList.some(g => g.toLowerCase() === group.toLowerCase())) return state
      return { groupList: [...state.groupList, group], groupActive: group }
    })
    get().updateFiltersAndLocalStorage()
  },
  deleteGroup: ({ group }) => {
    set(state => ({
      groupActive: state.groupList[0],
      groupList: state.groupList.filter(g => !g.includes(group))
    }))
    get().updateFiltersAndLocalStorage()
  },
  setGroupActive: newFilter => {
    set({
      groupActive: newFilter
    })
    get().updateFiltersAndLocalStorage()
  }
})

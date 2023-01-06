export const getUniqueFilterItems = (tasks = []) => {
  const filterItems = tasks.flatMap(task => task.tags)
  const uniqueFilterItems = new Set(filterItems)
  return [...uniqueFilterItems]
}
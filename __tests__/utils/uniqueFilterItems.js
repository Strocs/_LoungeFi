export const uniqueFilterItems = (defaultValue, tasks) => {
  const filterItems = tasks.flatMap(task => task.tags)
  const uniqueItems = new Set(filterItems)
  return [...defaultValue, ...uniqueItems]
}

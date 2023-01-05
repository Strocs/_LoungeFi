export const getUniqueFilterItems = (tasks = []) => {
  const filterItems = tasks.flatMap(task => task.tags)
  console.log(filterItems);
  const uniqueFilterItems = new Set(filterItems)
  return [...uniqueFilterItems]
}
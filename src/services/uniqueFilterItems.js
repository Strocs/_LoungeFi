import { getUniqueFilterItems } from './getUniqueFilterItems'

export const uniqueFilterItems = (defaultValue, tasks) => {
  return [...defaultValue, ...getUniqueFilterItems(tasks)]
}

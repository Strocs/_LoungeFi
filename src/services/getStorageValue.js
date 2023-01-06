export const getStorageValue = (initialValue) => {
  if (typeof window === 'undefined') {
    return initialValue
  }
  const store = window.localStorage.getItem('simple-task')
  return store ? JSON.parse(store) : initialValue
}

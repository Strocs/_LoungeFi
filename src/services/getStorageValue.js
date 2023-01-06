export const getStorageValue = (key, initialValue) => {
  if (typeof window === 'undefined') {
    return initialValue
  }
  const store = window.localStorage.getItem(key)
  return store ? JSON.parse(store) : initialValue
}

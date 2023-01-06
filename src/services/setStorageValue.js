export const setStorageValue = (value) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('simple-task', JSON.stringify(value))
  }
}

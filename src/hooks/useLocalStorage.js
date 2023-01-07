export function useLocalStorage ({ key, initialValue, value }) {
  const setStorageValue = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  const getStorageValue = () => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    const store = window.localStorage.getItem(key)
    return store ? JSON.parse(store) : initialValue
  }

  if (typeof value !== 'undefined') return setStorageValue()
  if (!!initialValue || typeof initialValue === 'undefined') {
    return getStorageValue()
  }
}

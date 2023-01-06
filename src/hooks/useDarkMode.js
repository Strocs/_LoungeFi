import { useEffect } from 'react'
import { useLocalStorage } from '.'

export function useDarkMode () {
  const activeClass = 'dark'

  const [darkMode, setDarkMode] = useLocalStorage(activeClass)

  const { matches } = window.matchMedia('(prefers-color-scheme: dark)')

  const isEnabled = typeof darkMode !== 'undefined' ? darkMode : matches

  useEffect(() => {
    const html = document.documentElement
    isEnabled
      ? html.classList.add(activeClass)
      : html.classList.remove(activeClass)
  }, [isEnabled])

  return {
    isEnabled,
    setDarkMode
  }
}

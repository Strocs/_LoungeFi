import { useEffect, useState } from 'react'
import { useLocalStorage } from '@hooks'

const ACTIVE_CLASS = 'dark'

export function useDarkMode () {
  const storedValue = useLocalStorage({ key: ACTIVE_CLASS })

  const [darkMode, setDarkMode] = useState(storedValue)

  const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
  const isEnabled = typeof darkMode !== 'undefined' ? darkMode : matches
  useEffect(() => {
    const html = document.documentElement
    isEnabled
      ? html.classList.add(ACTIVE_CLASS)
      : html.classList.remove(ACTIVE_CLASS)
  }, [isEnabled])

  const onDarkMode = value => {
    setDarkMode(value)
    useLocalStorage({ key: ACTIVE_CLASS, value })
  }

  return {
    isEnabled,
    onDarkMode
  }
}

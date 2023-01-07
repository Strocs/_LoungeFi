import { useEffect, useState } from 'react'
import { getStorageValue, setStorageValue } from '@services'

const ACTIVE_CLASS = 'dark'

export function useDarkMode () {
  const storageValue = getStorageValue(ACTIVE_CLASS)
  const [darkMode, setDarkMode] = useState(storageValue)
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
    setStorageValue(ACTIVE_CLASS, value)
  }

  return {
    isEnabled,
    onDarkMode
  }
}

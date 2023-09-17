import { useTaskStore } from '@store'
import { useEffect, useRef, useState } from 'react'

export const useAddItem = callback => {
  const [isInputOpen, setIsInputOpen] = useState(false)
  const toggleIsWriting = useTaskStore(state => state.toggleIsWriting)
  const ref = useRef(null)

  useEffect(() => {
    isInputOpen ? ref.current?.focus() : document.querySelector('main').focus()
  }, [isInputOpen])

  const handleSubmit = e => {
    e.preventDefault()
    if (ref.current.value.length >= 1) {
      const { value } = ref.current
      callback(value)
      ref.current.value = ''
    }
  }

  const handleShowInput = e => {
    e.preventDefault()
    setIsInputOpen(true)
    toggleIsWriting(true)
  }

  const handleCloseInput = e => {
    e.preventDefault()

    if (document.hasFocus()) {
      setIsInputOpen(false)
      toggleIsWriting(false)
    }
  }

  return {
    ref,
    isInputOpen,
    handleSubmit,
    handleShowInput,
    handleCloseInput
  }
}

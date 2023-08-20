import { useTaskStore } from '@store'
import { useEffect, useRef, useState } from 'react'

export const useAddItem = addFn => {
  const [isInputOpen, setIsInputOpen] = useState(false)
  const taskGroupActive = useTaskStore(state => state.taskGroupActive)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current !== null) {
      isInputOpen ? ref.current.focus() : document.querySelector('main').focus()
    }
  }, [isInputOpen])

  const handleSubmit = e => {
    e.preventDefault()
    if (ref.current !== null && ref.current.value.length > 1) {
      addFn({ task: ref.current.value, group: taskGroupActive })
      ref.current.value = ''
    }
  }

  const handleShowInput = e => {
    e.preventDefault()
    setIsInputOpen(true)
  }

  const handleCloseInput = e => {
    e.preventDefault()

    if (document.hasFocus()) {
      setIsInputOpen(false)
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

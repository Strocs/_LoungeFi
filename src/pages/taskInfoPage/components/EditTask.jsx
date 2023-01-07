import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editTask } from '@store'

export const EditTask = ({ task = '', id }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const taskRef = useRef(null)
  function onTaskEdit (e) {
    e.preventDefault()
    if (taskRef.current !== null && taskRef.current.value.length > 1) {
      dispatch(editTask({ newTask: taskRef.current.value, id }))
      const newPath = taskRef.current.value.toLowerCase().replaceAll(' ', '-')
      navigate(`/${newPath}`, { replace: true, state: id })
    }
  }

  return (
    <form onSubmit={onTaskEdit}>
      <input
        type='text'
        className='bg-c-bg resize-none focus:outline-none'
        ref={taskRef}
        defaultValue={task}
      />
    </form>
  )
}

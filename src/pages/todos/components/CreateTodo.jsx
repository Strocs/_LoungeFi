import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store'
import { RiTodoFill } from 'react-icons/ri'

export const CreateTodo = () => {
  const dispatch = useDispatch()
  const newTodoRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (newTodoRef.current !== null && newTodoRef.current.value.length > 1) {
      dispatch(addTodo(newTodoRef.current.value))
      newTodoRef.current.value = ''
    }
  }

  return (
    <div className='flex items-center gap-5 w-full py-2 px-5 bg-c-box focus-within:outline-dashed focus-within:outline-1 focus-within:outline-c-text'>
      <RiTodoFill className='fill-c-text text-lg' />
      <form className='flex-grow' onSubmit={handleSubmit}>
        <input
          className='w-full bg-c-box outline-none text-sm text-c-text placeholder:text-c-gray placeholder:font-extralight'
          type='text'
          ref={newTodoRef}
          placeholder='Let`s create a new task!'
        />
      </form>
    </div>
  )
}

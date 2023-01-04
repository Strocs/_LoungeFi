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
    <div className='flex items-center gap-4 bg-c-box w-full py-3 px-5 rounded-full overflow-hidden shadow-xl focus-within:outline focus-within:outline-2 focus-within:outline-c-text'>
      <RiTodoFill className='fill-c-text text-lg' />
      <form className='flex-grow' onSubmit={handleSubmit}>
        <input
          className='w-full text-sm text-c-text placeholder:text-c-gray placeholder:font-light bg-c-box outline-none'
          type='text'
          ref={newTodoRef}
          placeholder='Let`s create a new task!'
        />
      </form>
    </div>
  )
}

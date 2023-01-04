import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../store'
import { IoClose } from 'react-icons/io5'

export const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch()
  return (
    <button
      className='opacity-100 lg:opacity-40 hover:opacity-100'
      type='button'
      onClick={() => dispatch(deleteTodo(id))}
    >
      <IoClose className='fill-c-text text-2xl hover:fill-red-500' />
    </button>
  )
}

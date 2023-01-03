import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../store'

export const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch()
  return (
    <button
      className='opacity-100 lg:opacity-40 hover:opacity-100'
      type='button'
      onClick={() => dispatch(deleteTodo(id))}
    >
      x
    </button>
  )
}

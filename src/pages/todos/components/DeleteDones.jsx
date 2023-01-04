import { useDispatch } from 'react-redux'
import { deleteDone } from '../../../store'

export const DeleteDones = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-end text-sm my-4 text-red-600'>
      <button
        className='hover:text-c-text'
        type='button'
        onClick={() => dispatch(deleteDone())}
      >
        Delete All Completed Tasks
      </button>
    </div>
  )
}

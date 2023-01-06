import { useDispatch } from 'react-redux'
import { deleteDone } from '../../../store'

export const DeleteDones = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-end text-sm my-4 text-red-500'>
      <button
        className='px-2 focus:outline-none hover:outline-dashed'
        type='button'
        onClick={() => dispatch(deleteDone())}
      >
        Delete All Completed Tasks
      </button>
    </div>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteDone } from '../../../store'

export const DeleteDones = () => {
  const { tasks } = useSelector(state => state.simpleTask)
  const donesTaskId = tasks.map(task => task.done && task.id)
  const dispatch = useDispatch()
  const { state } = useLocation()
  const navigate = useNavigate()

  function onDelete () {
    dispatch(deleteDone())
    if (!!state && donesTaskId.includes(state)) {
      navigate('/')
    }
  }
  return (
    <div className='flex justify-end text-sm my-4 text-red-500'>
      <button
        className='px-2 focus:outline-none hover:outline-dashed'
        type='button'
        onClick={onDelete}
      >
        Delete All Completed Tasks
      </button>
    </div>
  )
}

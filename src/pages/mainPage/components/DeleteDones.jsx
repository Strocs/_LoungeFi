import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteDones } from '@store'

export function DeleteDones () {
  const { tasks } = useSelector(state => state.taskDone)
  const donesTaskId = tasks.map(task => task.done && task.id)
  const dispatch = useDispatch()
  const { state } = useLocation()
  const navigate = useNavigate()

  const onDelete = () => {
    dispatch(deleteDones())
    if (!!state && donesTaskId.includes(state)) {
      navigate('/')
    }
  }
  return (
    <div className='flex justify-end text-sm text-c-red'>
      <button
        className='p-2 leading-none focus:outline-none hover:bg-c-red hover:text-white'
        type='button'
        onClick={onDelete}
      >
        <b>Delete</b> All Tasks Dones
      </button>
    </div>
  )
}

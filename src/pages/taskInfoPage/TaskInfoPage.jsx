import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { IoClose } from 'react-icons/io5/index.esm?'
import { formatDate, getTaskByName, getTaskById } from '@services'
import { EditTask, TagBar } from './components'

export const TaskInfoPage = () => {
  const { tasks = [] } = useSelector(state => state.simpleTask)
  const navigate = useNavigate()
  const { pathname, state } = useLocation()
  const singleTask = !state
    ? getTaskById(tasks, state)
    : getTaskByName(tasks, pathname)
  if (!singleTask) {
    return <Navigate to='/' />
  }
  const { task, notes, done, created, tags, id } = singleTask
  const createdDate = formatDate(created)

  const onNavigate = () => navigate('/')

  return (
    <section className='mt-4 mx-auto text-c-text w-full max-w-2xl'>
      <EditTask task={task} id={id} />
      <p>Notas: {JSON.stringify(notes)}</p>
      <p>Created: {createdDate}</p>
      <div className='flex items-center gap-2'>
        <p>Tags: </p>
        <TagBar id={id} done={done} created={created} tags={tags} />
      </div>
      <button
        type='button'
        onClick={onNavigate}
        className='bg-c-text text-c-bg'
      >
        Close <IoClose className='inline' />
      </button>
    </section>
  )
}
